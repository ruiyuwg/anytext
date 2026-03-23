## Edges

Edges define how the logic is routed and how the graph decides to stop. This is a big part of how your agents work and how different nodes communicate with each other. There are a few key types of edges:

- Normal Edges: Go directly from one node to the next.
- Conditional Edges: Call a function to determine which node(s) to go to next.
- Entry Point: Which node to call first when user input arrives.
- Conditional Entry Point: Call a function to determine which node(s) to call first when user input arrives.

A node can have multiple outgoing edges. If a node has multiple outgoing edges, **all** of those destination nodes will be executed in parallel as a part of the next superstep.

### Normal edges

If you **always** want to go from node A to node B, you can use the [`add_edge`](https://reference.langchain.com/python/langgraph/pregel/_draw/add_edge) method directly.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.add_edge("node_a", "node_b")
```

### Conditional edges

If you want to **optionally** route to one or more edges (or optionally terminate), you can use the [`add_conditional_edges`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph/add_conditional_edges) method. This method accepts the name of a node and a "routing function" to call after that node is executed:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.add_conditional_edges("node_a", routing_function)
```

Similar to nodes, the `routing_function` accepts the current `state` of the graph and returns a value.

By default, the return value `routing_function` is used as the name of the node (or list of nodes) to send the state to next. All those nodes will be run in parallel as a part of the next superstep.

You can optionally provide a dictionary that maps the `routing_function`'s output to the name of the next node.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.add_conditional_edges("node_a", routing_function, {True: "node_b", False: "node_c"})
```

Use [`Command`](#command) instead of conditional edges if you want to combine state updates and routing in a single function.

### Entry point

The entry point is the first node(s) that are run when the graph starts. You can use the [`add_edge`](https://reference.langchain.com/python/langgraph/pregel/_draw/add_edge) method from the virtual [`START`](https://reference.langchain.com/python/langgraph/constants/START) node to the first node to execute to specify where to enter the graph.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.graph import START

graph.add_edge(START, "node_a")
```

### Conditional entry point

A conditional entry point lets you start at different nodes depending on custom logic. You can use [`add_conditional_edges`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph/add_conditional_edges) from the virtual [`START`](https://reference.langchain.com/python/langgraph/constants/START) node to accomplish this.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.graph import START

graph.add_conditional_edges(START, routing_function)
```

You can optionally provide a dictionary that maps the `routing_function`'s output to the name of the next node.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.add_conditional_edges(START, routing_function, {True: "node_b", False: "node_c"})
```

## `Send`

By default, `Nodes` and `Edges` are defined ahead of time and operate on the same shared state. However, there can be cases where the exact edges are not known ahead of time and/or you may want different versions of `State` to exist at the same time. A common example of this is with [map-reduce](/oss/python/langgraph/use-graph-api#map-reduce-and-the-send-api) design patterns. In this design pattern, a first node may generate a list of objects, and you may want to apply some other node to all those objects. The number of objects may be unknown ahead of time (meaning the number of edges may not be known) and the input `State` to the downstream `Node` should be different (one for each generated object).

To support this design pattern, LangGraph supports returning [`Send`](https://reference.langchain.com/python/langgraph/types/Send) objects from conditional edges. `Send` takes two arguments: first is the name of the node, and second is the state to pass to that node.

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
def continue_to_jokes(state: OverallState):
    return [Send("generate_joke", {"subject": s}) for s in state['subjects']]

graph.add_conditional_edges("node_a", continue_to_jokes)
```
