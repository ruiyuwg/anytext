## State

The first thing you do when you define a graph is define the `State` of the graph. The `State` consists of the [schema of the graph](#schema) as well as [`reducer` functions](#reducers) which specify how to apply updates to the state. The schema of the `State` will be the input schema to all `Nodes` and `Edges` in the graph. You define state using the `StateSchema` class, which accepts any [standard schemas](https://standardschema.dev/) (like [Zod](https://zod.dev/)) for individual fields along with special value types like `ReducedValue` and `MessagesValue`. All `Nodes` will emit updates to the `State` which are then applied using the specified `reducer` function.

### Schema

The main way to specify the schema of a graph is by using the `StateSchema` class. Each field in the schema can be:

- A **Standard schema** for simple fields (becomes a "last value" channel that overwrites on update)
- A **`ReducedValue`** for fields that need a custom reducer function (when nodes are run in parallel)
- A **`MessagesValue`** for chat message lists (prebuilt with message-aware reducer)
- An **`UntrackedValue`** for transient state that should not be checkpointed

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  StateSchema,
  ReducedValue,
  MessagesValue,
  UntrackedValue
} from "@langchain/langgraph";
import { z } from "zod/v4";

const AgentState = new StateSchema({
  // Prebuilt messages value with built-in reducer
  messages: MessagesValue,

  // Simple fields use Zod schemas directly
  currentStep: z.string(),

  // Fields with defaults
  retryCount: z.number().default(0),

  // Custom reducer for accumulating values
  allSteps: new ReducedValue(
    z.array(z.string()).default(() => []),
    {
      inputSchema: z.string(),
      reducer: (current, newStep) => [...current, newStep],
    }
  ),

  // Transient state not saved to checkpoints
  tempCache: new UntrackedValue(z.record(z.string(), z.unknown())),
});

// Type extraction
type State = typeof AgentState.State;   // Full state type
type Update = typeof AgentState.Update; // Partial update type

// Use in graph
const graph = new StateGraph(AgentState)
  .addNode("myNode", ...)
  .compile();
```

By default, the graph will have the same input and output schemas. If you want to change this, you can also specify explicit input and output schemas directly. This is useful when you have a lot of keys, and some are explicitly for input and others for output.

#### Multiple schemas

Typically, all graph nodes communicate with a single schema. This means that they will read and write to the same state channels. But, there are cases where we want more control over this:

- Internal nodes can pass information that is not required in the graph's input / output.
- We may also want to use different input / output schemas for the graph. The output might, for example, only contain a single relevant output key.

It is possible to have nodes write to private state channels inside the graph for internal node communication. We can simply define a private schema, `PrivateState`.

It is also possible to define explicit input and output schemas for a graph. In these cases, we define an "internal" schema that contains *all* keys relevant to graph operations. But, we also define `input` and `output` schemas that are sub-sets of the "internal" schema to constrain the input and output of the graph. See [this guide](/oss/javascript/langgraph/graph-api#define-input-and-output-schemas) for more detail.

Let's look at an example:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateSchema, GraphNode } from "@langchain/langgraph";
import * as z from "zod";

const InputState = new StateSchema({
  userInput: z.string(),
});

const OutputState = new StateSchema({
  graphOutput: z.string(),
});

const OverallState = new StateSchema({
  foo: z.string(),
  userInput: z.string(),
  graphOutput: z.string(),
});

const PrivateState = new StateSchema({
  bar: z.string(),
});

const graph = new StateGraph({
  state: OverallState,
  input: InputState,
  output: OutputState,
})
  .addNode("node1", (state) => {
    // Write to OverallState
    return { foo: state.userInput + " name" };
  })
  .addNode("node2", (state) => {
    // Read from OverallState, write to PrivateState
    return { bar: state.foo + " is" };
  })
  .addNode(
    "node3",
    (state) => {
      // Read from PrivateState, write to OutputState
      return { graphOutput: state.bar + " Lance" };
    },
    { input: PrivateState }
  )
  .addEdge(START, "node1")
  .addEdge("node1", "node2")
  .addEdge("node2", "node3")
  .addEdge("node3", END)
  .compile();

await graph.invoke({ userInput: "My" });
// { graphOutput: 'My name is Lance' }
```

There are two subtle and important points to note here:

1. We pass `state` as the input schema to `node1`. But, we write out to `foo`, a channel in `OverallState`. How can we write out to a state channel that is not included in the input schema? This is because a node *can write to any state channel in the graph state.* The graph state is the union of the state channels defined at initialization, which includes `OverallState` and the filters `InputState` and `OutputState`.

2. We initialize the graph with `StateGraph({ state: OverallState, input: InputState, output: OutputState })`. So, how can we write to `PrivateState` in `node2`? How does the graph gain access to this schema if it was not passed in the `StateGraph` initialization? We can do this because *nodes can also declare additional state channels* as long as the state schema definition exists. In this case, the `PrivateState` schema is defined, so we can add `bar` as a new state channel in the graph and write to it.

### Reducers

Reducers are key to understanding how updates from nodes are applied to the `State`. Each key in the `State` has its own independent reducer function. If no reducer function is explicitly specified then it is assumed that all updates to that key should override it. There are a few different types of reducers, starting with the default type of reducer:

#### Default reducer

These two examples show how to use the default reducer:

```typescript Example A theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateSchema } from "@langchain/langgraph";
import * as z from "zod";

const State = new StateSchema({
  foo: z.number(),
  bar: z.array(z.string()),
});
```

In this example, no reducer functions are specified for any key. Let's assume the input to the graph is:

`{ foo: 1, bar: ["hi"] }`. Let's then assume the first `Node` returns `{ foo: 2 }`. This is treated as an update to the state. Notice that the `Node` does not need to return the whole `State` schema - just an update. After applying this update, the `State` would then be `{ foo: 2, bar: ["hi"] }`. If the second node returns `{ bar: ["bye"] }` then the `State` would then be `{ foo: 2, bar: ["bye"] }`

```typescript Example B theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateSchema, ReducedValue } from "@langchain/langgraph";
import { z } from "zod/v4";

const State = new StateSchema({
  foo: z.number(),
  bar: new ReducedValue(
    z.array(z.string()).default(() => []),
    { reducer: (x, y) => x.concat(y) }
  ),
});
```

In this example, we've used `ReducedValue` to specify a reducer function for the second key (`bar`). Note that the first key remains unchanged. Let's assume the input to the graph is `{ foo: 1, bar: ["hi"] }`. Let's then assume the first `Node` returns `{ foo: 2 }`. This is treated as an update to the state. Notice that the `Node` does not need to return the whole `State` schema - just an update. After applying this update, the `State` would then be `{ foo: 2, bar: ["hi"] }`. If the second node returns `{ bar: ["bye"] }` then the `State` would then be `{ foo: 2, bar: ["hi", "bye"] }`. Notice here that the `bar` key is updated by concatenating the two arrays together.

### Untracked values

`UntrackedValue` is used for state fields that should exist during graph execution but should **never be checkpointed**. When a graph resumes from a checkpoint, untracked values will be reset to their initial state (or be unavailable).

This is useful for:

- **Database connections** that can't be serialized
- **Temporary caches** that should be rebuilt on resume
- **Large objects** you don't want to persist
- **Runtime-only configuration** that should be passed fresh each time

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateSchema, UntrackedValue, MessagesValue } from "@langchain/langgraph";
import { z } from "zod/v4";

const State = new StateSchema({
  messages: MessagesValue,

  // Untracked: throws if multiple nodes write in same step (guard: true is default)
  dbConnection: new UntrackedValue<DatabaseConnection>(),

  // Untracked with guard: false allows multiple writes, keeps last value
  tempCache: new UntrackedValue(
    z.record(z.string(), z.unknown()),
    { guard: false }
  ),

  // Untracked without a schema (for maximum flexibility)
  runtimeConfig: new UntrackedValue(),
});
```

**Behavior:**

- During execution: Values are stored and accessible like normal state
- On checkpoint: Untracked values are **excluded** from the checkpoint data
- On resume: Untracked values start fresh (empty or with their default value)
- With `guard: true` (default): Throws error if multiple nodes write in the same step
- With `guard: false`: Multiple writes allowed, last value wins

  Don't use `UntrackedValue` for data you need to persist across interrupts or time travel. Use regular state fields or `ReducedValue` for persistent data.

### Type utilities

LangGraph provides several type utilities for better TypeScript type safety when defining nodes and conditional edges.

#### `GraphNode`

Use `GraphNode` to type node functions defined outside the graph builder:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { GraphNode, StateSchema, Command } from "@langchain/langgraph";
import { z } from "zod/v4";

const State = new StateSchema({
  count: z.number().default(0),
  result: z.string(),
});

// Basic node - receives state, returns partial update
const incrementNode: GraphNode<typeof State> = (state) => {
  return { count: state.count + 1 };
};

// Async node
const fetchNode: GraphNode<typeof State> = async (state, config) => {
  const response = await fetch(`/api/data/${state.count}`);
  return { result: await response.text() };
};

// Node with Command routing - specify valid destinations
const routerNode: GraphNode<typeof State, "process" | "done"> = (state) => {
  if (state.count >= 10) {
    return new Command({ goto: "done" });
  }
  return new Command({
    update: { count: state.count + 1 },
    goto: "process"
  });
};
```

#### `State.Node` shorthand

Each `StateSchema` instance has a `Node` property that provides a shorthand for typing nodes:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const State = new StateSchema({
  messages: MessagesValue,
  step: z.string(),
});

// These are equivalent:
const myNode1: GraphNode<typeof State> = (state) => ({ step: "done" });
const myNode2: typeof State.Node = (state) => ({ step: "done" });
```

#### `ConditionalEdgeRouter`

Use `ConditionalEdgeRouter` for routing functions in conditional edges (no state updates, just routing):

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ConditionalEdgeRouter, END } from "@langchain/langgraph";

const State = new StateSchema({
  shouldContinue: z.boolean(),
  step: z.string(),
});

// Router returns node name(s) or END
const router: ConditionalEdgeRouter<typeof State, "process" | "summarize"> = (state) => {
  if (!state.shouldContinue) {
    return END;
  }
  return state.step === "initial" ? "process" : "summarize";
};

// Use in graph
graph.addConditionalEdges("check", router);
```

#### `StateSchema.State` and `StateSchema.Update`

Extract the state and update types from a schema for use in custom type definitions:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateSchema } from "@langchain/langgraph";

const MyStateSchema = new StateSchema({
  messages: MessagesValue,
  count: z.number().default(0),
});

// Extract the full state type
type MyState = typeof MyStateSchema.State;
// { messages: BaseMessage[], count: number }

// Extract the update type (partial, with reducer input types)
type MyUpdate = typeof MyStateSchema.Update;
// { messages?: Messages, count?: number }
```

### Working with messages in graph state

#### Why use messages?

Most modern LLM providers have a chat model interface that accepts a list of messages as input. LangChain's [chat model interface](/oss/javascript/langchain/models) in particular accepts a list of message objects as inputs. These messages come in a variety of forms such as [`HumanMessage`](https://reference.langchain.com/javascript/langchain-core/messages/HumanMessage) (user input) or [`AIMessage`](https://reference.langchain.com/javascript/langchain-core/messages/AIMessage) (LLM response).

To read more about what message objects are, please refer to the [Messages conceptual guide](/oss/javascript/langchain/messages).

#### Using messages in your graph

In many cases, it is helpful to store prior conversation history as a list of messages in your graph state. To do so, you can use the prebuilt `MessagesValue` which provides a message-aware reducer that handles message IDs, updates, and deletions automatically.

The `MessagesValue` reducer is vital to telling the graph how to update the list of `Message` objects in the state with each state update. If you don't specify a reducer, every state update will overwrite the list of messages with the most recently provided value. `MessagesValue` handles this correctly: for brand new messages, it appends to the existing list, and for existing messages (matched by ID), it updates them in place.

`MessagesValue` is actually a special case of `ReducedValue`, preconfigured with an internal `messagesStateReducer` that handles message lists and updates. This provides convenient, message-aware state management for chat message history in LangGraph graphs.

#### Serialization

In addition to keeping track of message IDs, `MessagesValue` will also try to deserialize messages into LangChain `Message` objects whenever a state update is received on the `messages` channel. This allows sending graph inputs / state updates in the following format:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// this is supported
{
  messages: [new HumanMessage("message")];
}

// and this is also supported
{
  messages: [{ role: "human", content: "message" }];
}
```

Since the state updates are always deserialized into LangChain `Messages` when using `MessagesValue`, you should use dot notation to access message attributes, like `state.messages.at(-1).content`. Below is an example of a graph that uses `MessagesValue`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateGraph, StateSchema, MessagesValue } from "@langchain/langgraph";

const State = new StateSchema({
  messages: MessagesValue,
});

const graph = new StateGraph(State)
  ...
```

The `messages` field is defined as a `MessagesValue` which is a list of [`BaseMessage`](https://reference.langchain.com/javascript/langchain-core/messages/BaseMessage) objects with a built-in reducer. Typically, there is more state to track than just messages, so we see people extend this state and add more fields, like:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateSchema, MessagesValue } from "@langchain/langgraph";
import * as z from "zod";

const State = new StateSchema({
  messages: MessagesValue,
  documents: z.array(z.string()),
});
```
