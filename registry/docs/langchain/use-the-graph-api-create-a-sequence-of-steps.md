## Create a sequence of steps

**Prerequisites**
This guide assumes familiarity with the above section on [state](#define-and-update-state).

Here we demonstrate how to construct a simple sequence of steps. We will show:

1. How to build a sequential graph
2. Built-in short-hand for constructing similar graphs.

To add a sequence of nodes, we use the [`add_node`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph/add_node) and [`add_edge`](https://reference.langchain.com/python/langgraph/pregel/_draw/add_edge) methods of our [graph](/oss/python/langgraph/graph-api#stategraph):

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.graph import START, StateGraph

builder = StateGraph(State)

# Add nodes
builder.add_node(step_1)
builder.add_node(step_2)
builder.add_node(step_3)

# Add edges
builder.add_edge(START, "step_1")
builder.add_edge("step_1", "step_2")
builder.add_edge("step_2", "step_3")
```

We can also use the built-in shorthand `.add_sequence`:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
builder = StateGraph(State).add_sequence([step_1, step_2, step_3])
builder.add_edge(START, "step_1")
```

LangGraph makes it easy to add an underlying persistence layer to your application.
This allows state to be checkpointed in between the execution of nodes, so your LangGraph nodes govern:

- How state updates are [checkpointed](/oss/python/langgraph/persistence)
- How interruptions are resumed in [human-in-the-loop](/oss/python/langgraph/interrupts) workflows
- How we can "rewind" and branch-off executions using LangGraph's [time travel](/oss/python/langgraph/use-time-travel) features

They also determine how execution steps are [streamed](/oss/python/langgraph/streaming), and how your application is visualized and debugged using [Studio](/langsmith/studio).

Let's demonstrate an end-to-end example. We will create a sequence of three steps:

1. Populate a value in a key of the state
2. Update the same value
3. Populate a different value

Let's first define our [state](/oss/python/langgraph/graph-api#state). This governs the [schema of the graph](/oss/python/langgraph/graph-api#schema), and can also specify how to apply updates. See [this section](#process-state-updates-with-reducers) for more detail.

In our case, we will just keep track of two values:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from typing_extensions import TypedDict

class State(TypedDict):
    value_1: str
    value_2: int
```

Our [nodes](/oss/python/langgraph/graph-api#nodes) are just Python functions that read our graph's state and make updates to it. The first argument to this function will always be the state:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def step_1(state: State):
    return {"value_1": "a"}

def step_2(state: State):
    current_value_1 = state["value_1"]
    return {"value_1": f"{current_value_1} b"}

def step_3(state: State):
    return {"value_2": 10}
```

```
Note that when issuing updates to the state, each node can just specify the value of the key it wishes to update.

By default, this will **overwrite** the value of the corresponding key. You can also use [reducers](/oss/python/langgraph/graph-api#reducers) to control how updates are processed— for example, you can append successive updates to a key instead. See [this section](#process-state-updates-with-reducers) for more detail.
```

Finally, we define the graph. We use [StateGraph](/oss/python/langgraph/graph-api#stategraph) to define a graph that operates on this state.

We will then use [`add_node`](/oss/python/langgraph/graph-api#messagesstate) and [`add_edge`](/oss/python/langgraph/graph-api#edges) to populate our graph and define its control flow.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.graph import START, StateGraph

builder = StateGraph(State)

# Add nodes
builder.add_node(step_1)
builder.add_node(step_2)
builder.add_node(step_3)

# Add edges
builder.add_edge(START, "step_1")
builder.add_edge("step_1", "step_2")
builder.add_edge("step_2", "step_3")
```

````
**Specifying custom names**
You can specify custom names for nodes using [`add_node`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph/add_node):

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
builder.add_node("my_node", step_1)
```
````

Note that:

- [`add_edge`](https://reference.langchain.com/python/langgraph/pregel/_draw/add_edge) takes the names of nodes, which for functions defaults to `node.__name__`.
- We must specify the entry point of the graph. For this we add an edge with the [START node](/oss/python/langgraph/graph-api#start-node).
- The graph halts when there are no more nodes to execute.

We next [compile](/oss/python/langgraph/graph-api#compiling-your-graph) our graph. This provides a few basic checks on the structure of the graph (e.g., identifying orphaned nodes). If we were adding persistence to our application via a [checkpointer](/oss/python/langgraph/persistence), it would also be passed in here.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph = builder.compile()
```

LangGraph provides built-in utilities for visualizing your graph. Let's inspect our sequence. See [this guide](#visualize-your-graph) for detail on visualization.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from IPython.display import Image, display

display(Image(graph.get_graph().draw_mermaid_png()))
```

Let's proceed with a simple invocation:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.invoke({"value_1": "c"})
```

```
{'value_1': 'a b', 'value_2': 10}
```

Note that:

- We kicked off invocation by providing a value for a single state key. We must always provide a value for at least one key.
- The value we passed in was overwritten by the first node.
- The second node updated the value.
- The third node populated a different value.

  **Built-in shorthand**
  `langgraph>=0.2.46` includes a built-in short-hand `add_sequence` for adding node sequences. You can compile the same graph as follows:

  ```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  builder = StateGraph(State).add_sequence([step_1, step_2, step_3])  # [!code highlight]
  builder.add_edge(START, "step_1")

  graph = builder.compile()

  graph.invoke({"value_1": "c"})
  ```
