# LangGraph runtime

Source: https://docs.langchain.com/oss/javascript/langgraph/pregel

[`Pregel`](https://reference.langchain.com/javascript/langchain-langgraph/index/Pregel) implements LangGraph's runtime, managing the execution of LangGraph applications.

Compiling a [StateGraph](https://reference.langchain.com/javascript/langchain-langgraph/index/StateGraph) or creating an [entrypoint](https://reference.langchain.com/javascript/langchain-langgraph/index/entrypoint) produces a [`Pregel`](https://reference.langchain.com/javascript/langchain-langgraph/index/Pregel) instance that can be invoked with input.

This guide explains the runtime at a high level and provides instructions for directly implementing applications with Pregel.

> **Note:** The [`Pregel`](https://reference.langchain.com/javascript/langchain-langgraph/index/Pregel) runtime is named after [Google's Pregel algorithm](https://research.google/pubs/pub37252/), which describes an efficient method for large-scale parallel computation using graphs.

## Overview

In LangGraph, Pregel combines [**actors**](https://en.wikipedia.org/wiki/Actor_model) and **channels** into a single application. **Actors** read data from channels and write data to channels. Pregel organizes the execution of the application into multiple steps, following the **Pregel Algorithm**/**Bulk Synchronous Parallel** model.

Each step consists of three phases:

- **Plan**: Determine which **actors** to execute in this step. For example, in the first step, select the **actors** that subscribe to the special **input** channels; in subsequent steps, select the **actors** that subscribe to channels updated in the previous step.
- **Execution**: Execute all selected **actors** in parallel, until all complete, or one fails, or a timeout is reached. During this phase, channel updates are invisible to actors until the next step.
- **Update**: Update the channels with the values written by the **actors** in this step.

Repeat until no **actors** are selected for execution, or a maximum number of steps is reached.

## Actors

An **actor** is a `PregelNode`. It subscribes to channels, reads data from them, and writes data to them. It can be thought of as an **actor** in the Pregel algorithm. `PregelNodes` implement LangChain's Runnable interface.

## Channels

Channels are used to communicate between actors (PregelNodes). Each channel has a value type, an update type, and an update function—which takes a sequence of updates and modifies the stored value. Channels can be used to send data from one chain to another, or to send data from a chain to itself in a future step. LangGraph provides a number of built-in channels:

- [`LastValue`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.channels.LastValue.html): The default channel, stores the last value sent to the channel, useful for input and output values, or for sending data from one step to the next.
- [`Topic`](https://reference.langchain.com/javascript/langchain-langgraph/channels/Topic): A configurable PubSub Topic, useful for sending multiple values between **actors**, or for accumulating output. Can be configured to deduplicate values or to accumulate values over the course of multiple steps.
- [`BinaryOperatorAggregate`](https://reference.langchain.com/javascript/langchain-langgraph/channels/BinaryOperatorAggregate): stores a persistent value, updated by applying a binary operator to the current value and each update sent to the channel, useful for computing aggregates over multiple steps; e.g.,`total = BinaryOperatorAggregate(int, operator.add)`

## Examples

While most users will interact with Pregel through the [StateGraph](https://reference.langchain.com/javascript/langchain-langgraph/index/StateGraph) API or the [entrypoint](https://reference.langchain.com/javascript/langchain-langgraph/index/entrypoint) decorator, it is possible to interact with Pregel directly.

Below are a few different examples to give you a sense of the Pregel API.

````
```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { EphemeralValue } from "@langchain/langgraph/channels";
import { Pregel, NodeBuilder } from "@langchain/langgraph/pregel";

const node1 = new NodeBuilder()
  .subscribeOnly("a")
  .do((x: string) => x + x)
  .writeTo("b");

const app = new Pregel({
  nodes: { node1 },
  channels: {
    a: new EphemeralValue(),
    b: new EphemeralValue(),
  },
  inputChannels: ["a"],
  outputChannels: ["b"],
});

await app.invoke({ a: "foo" });
```

```console theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{ b: 'foofoo' }
```



```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { LastValue, EphemeralValue } from "@langchain/langgraph/channels";
import { Pregel, NodeBuilder } from "@langchain/langgraph/pregel";

const node1 = new NodeBuilder()
  .subscribeOnly("a")
  .do((x: string) => x + x)
  .writeTo("b");

const node2 = new NodeBuilder()
  .subscribeOnly("b")
  .do((x: string) => x + x)
  .writeTo("c");

const app = new Pregel({
  nodes: { node1, node2 },
  channels: {
    a: new EphemeralValue(),
    b: new LastValue(),
    c: new EphemeralValue(),
  },
  inputChannels: ["a"],
  outputChannels: ["b", "c"],
});

await app.invoke({ a: "foo" });
```

```console theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{ b: 'foofoo', c: 'foofoofoofoo' }
```



```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { EphemeralValue, Topic } from "@langchain/langgraph/channels";
import { Pregel, NodeBuilder } from "@langchain/langgraph/pregel";

const node1 = new NodeBuilder()
  .subscribeOnly("a")
  .do((x: string) => x + x)
  .writeTo("b", "c");

const node2 = new NodeBuilder()
  .subscribeTo("b")
  .do((x: { b: string }) => x.b + x.b)
  .writeTo("c");

const app = new Pregel({
  nodes: { node1, node2 },
  channels: {
    a: new EphemeralValue(),
    b: new EphemeralValue(),
    c: new Topic({ accumulate: true }),
  },
  inputChannels: ["a"],
  outputChannels: ["c"],
});

await app.invoke({ a: "foo" });
```

```console theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{ c: ['foofoo', 'foofoofoofoo'] }
```



This example demonstrates how to use the [`BinaryOperatorAggregate`](https://reference.langchain.com/javascript/langchain-langgraph/channels/BinaryOperatorAggregate) channel to implement a reducer.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { EphemeralValue, BinaryOperatorAggregate } from "@langchain/langgraph/channels";
import { Pregel, NodeBuilder } from "@langchain/langgraph/pregel";

const node1 = new NodeBuilder()
  .subscribeOnly("a")
  .do((x: string) => x + x)
  .writeTo("b", "c");

const node2 = new NodeBuilder()
  .subscribeOnly("b")
  .do((x: string) => x + x)
  .writeTo("c");

const reducer = (current: string, update: string) => {
  if (current) {
    return current + " | " + update;
  } else {
    return update;
  }
};

const app = new Pregel({
  nodes: { node1, node2 },
  channels: {
    a: new EphemeralValue(),
    b: new EphemeralValue(),
    c: new BinaryOperatorAggregate({ operator: reducer }),
  },
  inputChannels: ["a"],
  outputChannels: ["c"],
});

await app.invoke({ a: "foo" });
```



This example demonstrates how to introduce a cycle in the graph, by having
a chain write to a channel it subscribes to. Execution will continue
until a `null` value is written to the channel.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { EphemeralValue } from "@langchain/langgraph/channels";
import { Pregel, NodeBuilder, ChannelWriteEntry } from "@langchain/langgraph/pregel";

const exampleNode = new NodeBuilder()
  .subscribeOnly("value")
  .do((x: string) => x.length < 10 ? x + x : null)
  .writeTo(new ChannelWriteEntry("value", { skipNone: true }));

const app = new Pregel({
  nodes: { exampleNode },
  channels: {
    value: new EphemeralValue(),
  },
  inputChannels: ["value"],
  outputChannels: ["value"],
});

await app.invoke({ value: "a" });
```

```console theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{ value: 'aaaaaaaaaaaaaaaa' }
```
````

## High-level API

LangGraph provides two high-level APIs for creating a Pregel application: the [StateGraph (Graph API)](/oss/javascript/langgraph/graph-api) and the [Functional API](/oss/javascript/langgraph/functional-api).

````
The [StateGraph (Graph API)](https://reference.langchain.com/javascript/langchain-langgraph/index/StateGraph) is a higher-level abstraction that simplifies the creation of Pregel applications. It allows you to define a graph of nodes and edges. When you compile the graph, the StateGraph API automatically creates the Pregel application for you.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { START, StateGraph } from "@langchain/langgraph";

interface Essay {
  topic: string;
  content?: string;
  score?: number;
}

const writeEssay = (essay: Essay) => {
  return {
    content: `Essay about ${essay.topic}`,
  };
};

const scoreEssay = (essay: Essay) => {
  return {
    score: 10
  };
};

const builder = new StateGraph({
  channels: {
    topic: null,
    content: null,
    score: null,
  }
})
  .addNode("writeEssay", writeEssay)
  .addNode("scoreEssay", scoreEssay)
  .addEdge(START, "writeEssay")
  .addEdge("writeEssay", "scoreEssay");

// Compile the graph.
// This will return a Pregel instance.
const graph = builder.compile();
```

The compiled Pregel instance will be associated with a list of nodes and channels. You can inspect the nodes and channels by printing them.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
console.log(graph.nodes);
```

You will see something like this:

```console theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  __start__: PregelNode { ... },
  writeEssay: PregelNode { ... },
  scoreEssay: PregelNode { ... }
}
```

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
console.log(graph.channels);
```

You should see something like this

```console theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  topic: LastValue { ... },
  content: LastValue { ... },
  score: LastValue { ... },
  __start__: EphemeralValue { ... },
  writeEssay: EphemeralValue { ... },
  scoreEssay: EphemeralValue { ... },
  'branch:__start__:__self__:writeEssay': EphemeralValue { ... },
  'branch:__start__:__self__:scoreEssay': EphemeralValue { ... },
  'branch:writeEssay:__self__:writeEssay': EphemeralValue { ... },
  'branch:writeEssay:__self__:scoreEssay': EphemeralValue { ... },
  'branch:scoreEssay:__self__:writeEssay': EphemeralValue { ... },
  'branch:scoreEssay:__self__:scoreEssay': EphemeralValue { ... },
  'start:writeEssay': EphemeralValue { ... }
}
```



In the [Functional API](/oss/javascript/langgraph/functional-api), you can use an [`entrypoint`](https://reference.langchain.com/javascript/langchain-langgraph/index/entrypoint) to create a Pregel application. The `entrypoint` decorator allows you to define a function that takes input and returns output.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { MemorySaver } from "@langchain/langgraph";
import { entrypoint } from "@langchain/langgraph/func";

interface Essay {
  topic: string;
  content?: string;
  score?: number;
}

const checkpointer = new MemorySaver();

const writeEssay = entrypoint(
  { checkpointer, name: "writeEssay" },
  async (essay: Essay) => {
    return {
      content: `Essay about ${essay.topic}`,
    };
  }
);

console.log("Nodes: ");
console.log(writeEssay.nodes);
console.log("Channels: ");
console.log(writeEssay.channels);
```

```console theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Nodes:
{ writeEssay: PregelNode { ... } }
Channels:
{
  __start__: EphemeralValue { ... },
  __end__: LastValue { ... },
  __previous__: LastValue { ... }
}
```
````

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/pregel.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
