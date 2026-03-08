## Runtime context

When creating a graph, you can specify a `context_schema` for runtime context passed to nodes. This is useful for passing
information to nodes that is not part of the graph state. For example, you might want to pass dependencies such as model name or a database connection.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
@dataclass
class ContextSchema:
    llm_provider: str = "openai"

graph = StateGraph(State, context_schema=ContextSchema)
```

You can then pass this context into the graph using the `context` parameter of the `invoke` method.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.invoke(inputs, context={"llm_provider": "anthropic"})
```

You can then access and use this context inside a node or conditional edge:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.runtime import Runtime

def node_a(state: State, runtime: Runtime[ContextSchema]):
    llm = get_llm(runtime.context.llm_provider)
    # ...
```

See [this guide](/oss/python/langgraph/use-graph-api#add-runtime-configuration) for a full breakdown on configuration.

### Recursion limit

The recursion limit sets the maximum number of [super-steps](#graphs) the graph can execute during a single execution. Once the limit is reached, LangGraph will raise `GraphRecursionError`. Starting in version 1.0.6, the deafult recursion limit is set to 1000 steps. The recursion limit can be set on any graph at runtime, and is passed to `invoke`/`stream` via the config dictionary. Importantly, `recursion_limit` is a standalone `config` key and should not be passed inside the `configurable` key as all other user-defined configuration. See the example below:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.invoke(inputs, config={"recursion_limit": 5}, context={"llm": "anthropic"})
```

Read [this how-to](/oss/python/langgraph/graph-api#impose-a-recursion-limit) to learn more about how the recursion limit works.

### Accessing and handling the recursion counter

The current step counter is accessible in `config["metadata"]["langgraph_step"]` within any node, allowing for proactive recursion handling before hitting the recursion limit. This enables you to implement graceful degradation strategies within your graph logic.

#### How it works

The step counter is stored in `config["metadata"]["langgraph_step"]`. The recursion limit check follows the logic: `step > stop` where `stop = step + recursion_limit + 1`. When the limit is exceeded, LangGraph raises a `GraphRecursionError`.

#### Accessing the current step counter

You can access the current step counter within any node to monitor execution progress.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_core.runnables import RunnableConfig
from langgraph.graph import StateGraph

def my_node(state: dict, config: RunnableConfig) -> dict:
    current_step = config["metadata"]["langgraph_step"]
    print(f"Currently on step: {current_step}")
    return state
```

#### Proactive recursion handling

LangGraph provides a `RemainingSteps` managed value that tracks how many steps remain before hitting the recursion limit. This allows for graceful degradation within your graph.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import Annotated, Literal
from langgraph.graph import StateGraph, START, END
from langgraph.managed import RemainingSteps

class State(TypedDict):
    messages: Annotated[list, lambda x, y: x + y]
    remaining_steps: RemainingSteps  # Managed value - tracks steps until limit

def reasoning_node(state: State) -> dict:
    # RemainingSteps is automatically populated by LangGraph
    remaining = state["remaining_steps"]

    # Check if we're running low on steps
    if remaining <= 2:
        return {"messages": ["Approaching limit, wrapping up..."]}

    # Normal processing
    return {"messages": ["thinking..."]}

def route_decision(state: State) -> Literal["reasoning_node", "fallback_node"]:
    """Route based on remaining steps"""
    if state["remaining_steps"] <= 2:
        return "fallback_node"
    return "reasoning_node"

def fallback_node(state: State) -> dict:
    """Handle cases where recursion limit is approaching"""
    return {"messages": ["Reached complexity limit, providing best effort answer"]}

# Build graph
builder = StateGraph(State)
builder.add_node("reasoning_node", reasoning_node)
builder.add_node("fallback_node", fallback_node)
builder.add_edge(START, "reasoning_node")
builder.add_conditional_edges("reasoning_node", route_decision)
builder.add_edge("fallback_node", END)

graph = builder.compile()

# RemainingSteps works with any recursion_limit
result = graph.invoke({"messages": []}, {"recursion_limit": 10})
```

#### Proactive vs reactive approaches

There are two main approaches to handling recursion limits: proactive (monitoring within the graph) and reactive (catching errors externally).

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing import Annotated, Literal, TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.managed import RemainingSteps
from langgraph.errors import GraphRecursionError

class State(TypedDict):
    messages: Annotated[list, lambda x, y: x + y]
    remaining_steps: RemainingSteps

# Proactive Approach (recommended) - using RemainingSteps
def agent_with_monitoring(state: State) -> dict:
    """Proactively monitor and handle recursion within the graph"""
    remaining = state["remaining_steps"]

    # Early detection - route to internal handling
    if remaining <= 2:
        return {
            "messages": ["Approaching limit, returning partial result"]
        }

    # Normal processing
    return {"messages": [f"Processing... ({remaining} steps remaining)"]}

def route_decision(state: State) -> Literal["agent", END]:
    if state["remaining_steps"] <= 2:
        return END
    return "agent"

# Build graph
builder = StateGraph(State)
builder.add_node("agent", agent_with_monitoring)
builder.add_edge(START, "agent")
builder.add_conditional_edges("agent", route_decision)
graph = builder.compile()

# Proactive: Graph completes gracefully
result = graph.invoke({"messages": []}, {"recursion_limit": 10})

# Reactive Approach (fallback) - catching error externally
try:
    result = graph.invoke({"messages": []}, {"recursion_limit": 10})
except GraphRecursionError as e:
    # Handle externally after graph execution fails
    result = {"messages": ["Fallback: recursion limit exceeded"]}
```

The key differences between these approaches are:

| Approach                                  | Detection            | Handling                             | Control Flow                       |
| ----------------------------------------- | -------------------- | ------------------------------------ | ---------------------------------- |
| Proactive (using `RemainingSteps`)        | Before limit reached | Inside graph via conditional routing | Graph continues to completion node |
| Reactive (catching `GraphRecursionError`) | After limit exceeded | Outside graph in try/catch           | Graph execution terminated         |

**Proactive advantages:**

- Graceful degradation within the graph
- Can save intermediate state in checkpoints
- Better user experience with partial results
- Graph completes normally (no exception)

**Reactive advantages:**

- Simpler implementation
- No need to modify graph logic
- Centralized error handling

#### Other available metadata

Along with `langgraph_step`, the following metadata is also available in `config["metadata"]`:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def inspect_metadata(state: dict, config: RunnableConfig) -> dict:
    metadata = config["metadata"]

    print(f"Step: {metadata['langgraph_step']}")
    print(f"Node: {metadata['langgraph_node']}")
    print(f"Triggers: {metadata['langgraph_triggers']}")
    print(f"Path: {metadata['langgraph_path']}")
    print(f"Checkpoint NS: {metadata['langgraph_checkpoint_ns']}")

    return state
```

## Visualization

It's often nice to be able to visualize graphs, especially as they get more complex. LangGraph comes with several built-in ways to visualize graphs. See [this how-to guide](/oss/python/langgraph/use-graph-api#visualize-your-graph) for more info.

## Observability and Tracing

To trace, debug and evaluate your agents, use [LangSmith](/langsmith/home).

## Learn more

- [How to use the Graph API](/oss/python/langgraph/use-graph-api)
- [Functional API conceptual overview](/oss/python/langgraph/functional-api)
- [Choosing between Graph API and Functional API](/oss/python/langgraph/choosing-apis)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/graph-api.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Install LangGraph

Source: https://docs.langchain.com/oss/python/langgraph/install

To install the base LangGraph package:

```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U langgraph
```

```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uv add langgraph
```

To use LangGraph you will usually want to access LLMs and define tools.
You can do this however you see fit.

One way to do this (which we will use in the docs) is to use [LangChain](/oss/python/langchain/overview).

Install LangChain with:

```bash pip theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pip install -U langchain
# Requires Python 3.10+
```

```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uv add langchain
# Requires Python 3.10+
```

To work with specific LLM provider packages, you will need install them separately.

Refer to the [integrations](/oss/python/integrations/providers/overview) page for provider-specific installation instructions.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/install.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
