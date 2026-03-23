## `Command`

[`Command`](https://reference.langchain.com/python/langgraph/types/Command) is a versatile primitive for controlling graph execution. It accepts four parameters:

- `update`: Apply state updates (similar to returning updates from a node).
- `goto`: Navigate to specific nodes (similar to [conditional edges](#conditional-edges)).
- `graph`: Target a parent graph when navigating from [subgraphs](/oss/python/langgraph/use-subgraphs).
- `resume`: Provide a value to resume execution after an [interrupt](/oss/python/langgraph/interrupts).

`Command` is used in three contexts:

- **[Return from nodes](#return-from-nodes)**: Use `update`, `goto`, and `graph` to combine state updates with control flow.
- **[Input to `invoke`/`stream`](#input-to-invokestream)**: Use `resume` to continue execution after an interrupt.
- **[Return from tools](#return-from-tools)**: Similar to return from nodes, combine state updates and control flow from inside a tool.

### Return from nodes

#### `update` and `goto`

Return [`Command`](https://reference.langchain.com/python/langgraph/types/Command) from node functions to update state and route to the next node in a single step:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def my_node(state: State) -> Command[Literal["my_other_node"]]:
    return Command(
        # state update
        update={"foo": "bar"},
        # control flow
        goto="my_other_node"
    )
```

With [`Command`](https://reference.langchain.com/python/langgraph/types/Command) you can also achieve dynamic control flow behavior (identical to [conditional edges](#conditional-edges)):

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def my_node(state: State) -> Command[Literal["my_other_node"]]:
    if state["foo"] == "bar":
        return Command(update={"foo": "baz"}, goto="my_other_node")
```

Use [`Command`](https://reference.langchain.com/python/langgraph/types/Command) when you need to **both** update state **and** route to a different node. If you only need to route without updating state, use [conditional edges](#conditional-edges) instead.

When returning [`Command`](https://reference.langchain.com/python/langgraph/types/Command) in your node functions, you must add return type annotations with the list of node names the node is routing to, e.g. `Command[Literal["my_other_node"]]`. This is necessary for the graph rendering and tells LangGraph that `my_node` can navigate to `my_other_node`.

[`Command`](https://reference.langchain.com/python/langgraph/types/Command) only adds dynamic edges—static edges defined with `add_edge` / `addEdge` still execute. For example, if `node_a` returns `Command(goto="my_other_node")` and you also have `graph.add_edge("node_a", "node_b")`, both `node_b` and `my_other_node` will run.

Check out this [how-to guide](/oss/python/langgraph/use-graph-api#combine-control-flow-and-state-updates-with-command) for an end-to-end example of how to use [`Command`](https://reference.langchain.com/python/langgraph/types/Command).

#### `graph`

If you are using [subgraphs](/oss/python/langgraph/use-subgraphs), you can navigate from a node within a subgraph to a different node in the parent graph by specifying `graph=Command.PARENT` in [`Command`](https://reference.langchain.com/python/langgraph/types/Command):

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def my_node(state: State) -> Command[Literal["other_subgraph"]]:
    return Command(
        update={"foo": "bar"},
        goto="other_subgraph",  # where `other_subgraph` is a node in the parent graph
        graph=Command.PARENT
    )
```

Setting `graph` to `Command.PARENT` will navigate to the closest parent graph.

When you send updates from a subgraph node to a parent graph node for a key that's shared by both parent and subgraph [state schemas](#schema), you **must** define a [reducer](#reducers) for the key you're updating in the parent graph state. See this [example](/oss/python/langgraph/use-graph-api#navigate-to-a-node-in-a-parent-graph).

This is particularly useful when implementing [multi-agent handoffs](/oss/python/langchain/multi-agent/handoffs). Check out [Navigate to a node in a parent graph](/oss/python/langgraph/use-graph-api#navigate-to-a-node-in-a-parent-graph) for detail.

### Input to `invoke`/`stream`

`Command(resume=...)` is the **only** `Command` pattern intended as input to `invoke()`/`stream()`. Do not use `Command(update=...)` as input to continue multi-turn conversations—because passing any `Command` as input resumes from the latest checkpoint (i.e. the last step that ran, not `__start__`), the graph will appear stuck if it already finished. To continue a conversation on an existing thread, pass a plain input dict:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# WRONG - graph resumes from the latest checkpoint
# (last step that ran), appears stuck
graph.invoke(Command(update={  # [!code --]
    "messages": [{"role": "user", "content": "follow up"}]  # [!code --]
}), config)  # [!code --]

# CORRECT - plain dict restarts from __start__
graph.invoke( {  # [!code ++]
    "messages": [{"role": "user", "content": "follow up"}]  # [!code ++]
}, config)  # [!code ++]
```

#### `resume`

Use `Command(resume=...)` to provide a value and resume graph execution after an [interrupt](/oss/python/langgraph/interrupts). The value passed to `resume` becomes the return value of the `interrupt()` call inside the paused node:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.types import Command, interrupt

def human_review(state: State):
    # Pauses the graph and waits for a value
    answer = interrupt("Do you approve?")
    return {"messages": [{"role": "user", "content": answer}]}

# First invocation - hits the interrupt and pauses
result = graph.invoke({"messages": [...]}, config)

# Resume with a value - the interrupt() call returns "yes"
result = graph.invoke(Command(resume="yes"), config)
```

Check out the [interrupts conceptual guide](/oss/python/langgraph/interrupts) for full details on interrupt patterns, including multiple interrupts and validation loops.

### Return from tools

You can return [`Command`](https://reference.langchain.com/python/langgraph/types/Command) from tools to update graph state and control flow. Use `update` to modify state (e.g., saving customer information looked up during a conversation) and `goto` to route to a specific node after the tool completes.

When used inside tools, `goto` adds a dynamic edge—any static edges already defined on the node that called the tool will still execute.

Refer to [Use inside tools](/oss/python/langgraph/use-graph-api#use-inside-tools) for detail.

## Graph migrations

LangGraph can easily handle migrations of graph definitions (nodes, edges, and state) even when using a checkpointer to track state.

- For threads at the end of the graph (i.e. not interrupted) you can change the entire topology of the graph (i.e. all nodes and edges, remove, add, rename, etc)
- For threads currently interrupted, we support all topology changes other than renaming / removing nodes (as that thread could now be about to enter a node that no longer exists) -- if this is a blocker please reach out and we can prioritize a solution.
- For modifying state, we have full backwards and forwards compatibility for adding and removing keys
- State keys that are renamed lose their saved state in existing threads
- State keys whose types change in incompatible ways could currently cause issues in threads with state from before the change -- if this is a blocker please reach out and we can prioritize a solution.
