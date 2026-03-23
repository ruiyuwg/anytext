## Create a sequence of steps

**Prerequisites**
This guide assumes familiarity with the above section on [state](#define-and-update-state).

Here we demonstrate how to construct a simple sequence of steps. We will show:

1. How to build a sequential graph
2. Built-in short-hand for constructing similar graphs.

To add a sequence of nodes, we use the `.addNode` and `.addEdge` methods of our [graph](/oss/javascript/langgraph/graph-api#stategraph):

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { START, StateGraph } from "@langchain/langgraph";

const builder = new StateGraph(State)
  .addNode("step1", step1)
  .addNode("step2", step2)
  .addNode("step3", step3)
  .addEdge(START, "step1")
  .addEdge("step1", "step2")
  .addEdge("step2", "step3");
```

LangGraph makes it easy to add an underlying persistence layer to your application.
This allows state to be checkpointed in between the execution of nodes, so your LangGraph nodes govern:

- How state updates are [checkpointed](/oss/javascript/langgraph/persistence)
- How interruptions are resumed in [human-in-the-loop](/oss/javascript/langgraph/interrupts) workflows
- How we can "rewind" and branch-off executions using LangGraph's [time travel](/oss/javascript/langgraph/use-time-travel) features

They also determine how execution steps are [streamed](/oss/javascript/langgraph/streaming), and how your application is visualized and debugged using [Studio](/langsmith/studio).

Let's demonstrate an end-to-end example. We will create a sequence of three steps:

1. Populate a value in a key of the state
2. Update the same value
3. Populate a different value

Let's first define our [state](/oss/javascript/langgraph/graph-api#state). This governs the [schema of the graph](/oss/javascript/langgraph/graph-api#schema), and can also specify how to apply updates. See [Process state updates with reducers](#process-state-updates-with-reducers) for more detail.

In our case, we will just keep track of two values:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateSchema, GraphNode } from "@langchain/langgraph";
import * as z from "zod";

const State = new StateSchema({
  value1: z.string(),
  value2: z.number(),
});
```

Our [nodes](/oss/javascript/langgraph/graph-api#nodes) are just TypeScript functions that read our graph's state and make updates to it. The first argument to this function will always be the state:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const step1: GraphNode = (state) => {
  return { value1: "a" };
};

const step2: GraphNode = (state) => {
  const currentValue1 = state.value1;
  return { value1: `${currentValue1} b` };
};

const step3: GraphNode = (state) => {
  return { value2: 10 };
};
```

```
Note that when issuing updates to the state, each node can just specify the value of the key it wishes to update.

By default, this will **overwrite** the value of the corresponding key. You can also use [reducers](/oss/javascript/langgraph/graph-api#reducers) to control how updates are processed—for example, you can append successive updates to a key instead. See [Process state updates with reducers](#process-state-updates-with-reducers) for more detail.
```

Finally, we define the graph. We use [StateGraph](/oss/javascript/langgraph/graph-api#stategraph) to define a graph that operates on this state.

We will then use [addNode](/oss/javascript/langgraph/graph-api#nodes) and [addEdge](/oss/javascript/langgraph/graph-api#edges) to populate our graph and define its control flow.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { START, StateGraph } from "@langchain/langgraph";

const graph = new StateGraph(State)
  .addNode("step1", step1)
  .addNode("step2", step2)
  .addNode("step3", step3)
  .addEdge(START, "step1")
  .addEdge("step1", "step2")
  .addEdge("step2", "step3")
  .compile();
```

````
**Specifying custom names**
You can specify custom names for nodes using `.addNode`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const graph = new StateGraph(State)
.addNode("myNode", step1)
.compile();
```
````

Note that:

- `.addEdge` takes the names of nodes, which for functions defaults to `node.name`.
- We must specify the entry point of the graph. For this we add an edge with the [START node](/oss/javascript/langgraph/graph-api#start-node).
- The graph halts when there are no more nodes to execute.

We next [compile](/oss/javascript/langgraph/graph-api#compiling-your-graph) our graph. This provides a few basic checks on the structure of the graph (e.g., identifying orphaned nodes). If we were adding persistence to our application via a [checkpointer](/oss/javascript/langgraph/persistence), it would also be passed in here.

LangGraph provides built-in utilities for visualizing your graph. Let's inspect our sequence. See [Visualize your graph](#visualize-your-graph) for detail on visualization.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as fs from "node:fs/promises";

const drawableGraph = await graph.getGraphAsync();
const image = await drawableGraph.drawMermaidPng();
const imageBuffer = new Uint8Array(await image.arrayBuffer());

await fs.writeFile("graph.png", imageBuffer);
```

Let's proceed with a simple invocation:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const result = await graph.invoke({ value1: "c" });
console.log(result);
```

```
{ value1: 'a b', value2: 10 }
```

Note that:

- We kicked off invocation by providing a value for a single state key. We must always provide a value for at least one key.
- The value we passed in was overwritten by the first node.
- The second node updated the value.
- The third node populated a different value.
