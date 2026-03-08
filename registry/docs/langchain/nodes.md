## Nodes

In LangGraph, nodes are typically functions (sync or async) that accept the following arguments:

1. `state` – The [state](#state) of the graph
2. `config` – A [`RunnableConfig`](https://reference.langchain.com/javascript/langchain-core/runnables/RunnableConfig) object that contains configuration information like `thread_id` and tracing information like `tags`

You can add nodes to a graph using the `addNode` method. For better type safety, use the `GraphNode` type utility or `State.Node` to type your node functions:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateGraph, StateSchema, GraphNode } from "@langchain/langgraph";
import * as z from "zod";

const State = new StateSchema({
  input: z.string(),
  results: z.string(),
});

// Option 1: Use GraphNode type utility
const myNode: GraphNode<typeof State> = (state, config) => {
  console.log("In node: ", config?.configurable?.user_id);
  return { results: `Hello, ${state.input}!` };
};

// Option 2: Use State.Node shorthand
const otherNode: typeof State.Node = (state) => {
  return state;
};

const builder = new StateGraph(State)
  .addNode("myNode", myNode)
  .addNode("otherNode", otherNode)
  ...
```

Behind the scenes, functions are converted to @\[`RunnableLambda`], which add batch and async support to your function, along with [native tracing and debugging](/langsmith/home).

If you add a node to a graph without specifying a name, it will be given a default name equivalent to the function name.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
builder.addNode(myNode);
// You can then create edges to/from this node by referencing it as `"myNode"`
```

### `START` node

The [`START`](https://reference.langchain.com/javascript/langchain-langgraph/index/START) Node is a special node that represents the node that sends user input to the graph. The main purpose for referencing this node is to determine which nodes should be called first.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { START } from "@langchain/langgraph";

graph.addEdge(START, "nodeA");
```

### `END` node

The `END` Node is a special node that represents a terminal node. This node is referenced when you want to denote which edges have no actions after they are done.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { END } from "@langchain/langgraph";

graph.addEdge("nodeA", END);
```

### Node caching

LangGraph supports caching of tasks/nodes based on the input to the node. To use caching:

- Specify a cache when compiling a graph (or specifying an entrypoint)
- Specify a cache policy for nodes. Each cache policy supports:
  - `keyFunc`, which is used to generate a cache key based on the input to a node.
  - `ttl`, the time to live for the cache in seconds. If not specified, the cache will never expire.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateGraph, StateSchema, GraphNode, START } from "@langchain/langgraph";
import { InMemoryCache } from "@langchain/langgraph-checkpoint";
import { z } from "zod/v4";

const State = new StateSchema({
  x: z.number(),
  result: z.number(),
});

const expensiveNode: GraphNode<typeof State> = async (state) => {
  // Simulate an expensive operation
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { result: state.x * 2 };
};

const graph = new StateGraph(State)
  .addNode("expensive_node", expensiveNode, { cachePolicy: { ttl: 3 } })
  .addEdge(START, "expensive_node")
  .compile({ cache: new InMemoryCache() });

await graph.invoke({ x: 5 }, { streamMode: "updates" });   // [!code highlight]
// [{"expensive_node": {"result": 10}}]
await graph.invoke({ x: 5 }, { streamMode: "updates" });   // [!code highlight]
// [{"expensive_node": {"result": 10}, "__metadata__": {"cached": true}}]
```
