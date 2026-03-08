## Edges

Edges define how the logic is routed and how the graph decides to stop. This is a big part of how your agents work and how different nodes communicate with each other. There are a few key types of edges:

- Normal Edges: Go directly from one node to the next.
- Conditional Edges: Call a function to determine which node(s) to go to next.
- Entry Point: Which node to call first when user input arrives.
- Conditional Entry Point: Call a function to determine which node(s) to call first when user input arrives.

A node can have multiple outgoing edges. If a node has multiple outgoing edges, **all** of those destination nodes will be executed in parallel as a part of the next superstep.

### Normal edges

If you **always** want to go from node A to node B, you can use the [`addEdge`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.StateGraph.html#addEdge) method directly.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.addEdge("nodeA", "nodeB");
```

### Conditional edges

If you want to **optionally** route to one or more edges (or optionally terminate), you can use the [`addConditionalEdges`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.StateGraph.html#addConditionalEdges) method. This method accepts the name of a node and a "routing function" to call after that node is executed:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.addConditionalEdges("nodeA", routingFunction);
```

Similar to nodes, the `routingFunction` accepts the current `state` of the graph and returns a value.

By default, the return value `routingFunction` is used as the name of the node (or list of nodes) to send the state to next. All those nodes will be run in parallel as a part of the next superstep.

You can optionally provide an object that maps the `routingFunction`'s output to the name of the next node.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.addConditionalEdges("nodeA", routingFunction, {
  true: "nodeB",
  false: "nodeC",
});
```

Use [`Command`](#command) instead of conditional edges if you want to combine state updates and routing in a single function.

### Entry point

The entry point is the first node(s) that are run when the graph starts. You can use the [`addEdge`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.StateGraph.html#addEdge) method from the virtual [`START`](https://reference.langchain.com/javascript/langchain-langgraph/index/START) node to the first node to execute to specify where to enter the graph.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { START } from "@langchain/langgraph";

graph.addEdge(START, "nodeA");
```

### Conditional entry point

A conditional entry point lets you start at different nodes depending on custom logic. You can use [`addConditionalEdges`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.StateGraph.html#addConditionalEdges) from the virtual [`START`](https://reference.langchain.com/javascript/langchain-langgraph/index/START) node to accomplish this.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { START } from "@langchain/langgraph";

graph.addConditionalEdges(START, routingFunction);
```

You can optionally provide an object that maps the `routingFunction`'s output to the name of the next node.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.addConditionalEdges(START, routingFunction, {
  true: "nodeB",
  false: "nodeC",
});
```

## `Send`

By default, `Nodes` and `Edges` are defined ahead of time and operate on the same shared state. However, there can be cases where the exact edges are not known ahead of time and/or you may want different versions of `State` to exist at the same time. A common example of this is with map-reduce design patterns. In this design pattern, a first node may generate a list of objects, and you may want to apply some other node to all those objects. The number of objects may be unknown ahead of time (meaning the number of edges may not be known) and the input `State` to the downstream `Node` should be different (one for each generated object).

To support this design pattern, LangGraph supports returning [`Send`](https://reference.langchain.com/javascript/langchain-langgraph/index/Send) objects from conditional edges. `Send` takes two arguments: first is the name of the node, and second is the state to pass to that node.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Send } from "@langchain/langgraph";

graph.addConditionalEdges("nodeA", (state) => {
  return state.subjects.map(
    (subject) => new Send("generateJoke", { subject })
  );
});
```
