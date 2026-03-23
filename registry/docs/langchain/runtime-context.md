## Runtime context

When creating a graph, you can specify a `contextSchema` for runtime context passed to nodes. This is useful for passing
information to nodes that is not part of the graph state. For example, you might want to pass dependencies such as model name or a database connection.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateGraph, StateSchema } from "@langchain/langgraph";
import * as z from "zod";

const State = new StateSchema({
  input: z.string(),
  output: z.string(),
});

const ContextSchema = z.object({
  llm: z.union([z.literal("openai"), z.literal("anthropic")]),
});

const graph = new StateGraph(State, ContextSchema);
```

You can then pass this configuration into the graph using the `context` property.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const config = { context: { llm: "anthropic" } };

await graph.invoke(inputs, config);
```

You can then access and use this context inside a node or conditional edge:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Runtime, GraphNode } from "@langchain/langgraph";
import * as z from "zod";

const nodeA: GraphNode<typeof State> = (state, config) => {
  const llm = getLLM(runtime.context?.llm);
  // ...
  return {};
};
```

See [Add runtime configuration](/oss/javascript/langgraph/use-graph-api#add-runtime-configuration) for a full breakdown on configuration.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph.addNode("myNode", (state, config) => {
  const llmType = config.context?.llm || "openai";
  const llm = getLLM(llmType);
  return { results: `Hello, ${state.input}!` };
});
```

### Recursion limit

The recursion limit sets the maximum number of [super-steps](#graphs) the graph can execute during a single execution. Once the limit is reached, LangGraph will raise `GraphRecursionError`. By default this value is set to 25 steps. The recursion limit can be set on any graph at runtime, and is passed to `invoke`/`stream` via the config object. Importantly, `recursionLimit` is a standalone `config` key and should not be passed inside the `configurable` key as all other user-defined configuration. See the example below:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await graph.invoke(inputs, {
  recursionLimit: 5,
  context: { llm: "anthropic" },
});
```

### Accessing and handling the recursion counter

The current step counter is accessible in `config.metadata.langgraph_step` within any node, allowing for proactive recursion handling before hitting the recursion limit. This enables you to implement graceful degradation strategies within your graph logic.

#### How it works

The step counter is stored in `config.metadata.langgraph_step`. The recursion limit check follows the logic: `step > stop` where `stop = step + recursionLimit + 1`. When the limit is exceeded, LangGraph raises a `GraphRecursionError`.

#### Accessing the current step counter

You can access the current step counter within any node to monitor execution progress.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { RunnableConfig } from "@langchain/core/runnables";
import { StateGraph } from "@langchain/langgraph";

const myNode: GraphNode<typeof State> = async (state, config) => {
  const currentStep = config.metadata?.langgraph_step;
  console.log(`Currently on step: ${currentStep}`);
  return state;
}
```

Design your graph with explicit termination conditions, and catch `GraphRecursionError` as a safety net:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  StateGraph,
  StateSchema,
  ReducedValue,
  GraphNode,
  ConditionalEdgeRouter,
  END,
  GraphRecursionError
} from "@langchain/langgraph";
import { z } from "zod/v4";

const State = new StateSchema({
  messages: new ReducedValue(
    z.array(z.string()).default(() => []),
    { reducer: (x, y) => x.concat(y) }
  ),
});

// Build graph with explicit termination logic
const graph = new StateGraph(State)
  .addNode("reasoning", async (state) => {
    // Normal processing - design your graph with explicit termination conditions
    return {
      messages: ["thinking..."]
    };
  })
  .addConditionalEdges("reasoning", (state) => {
    // Add your termination condition here
    if (state.messages.length >= 5) {
      return END;
    }
    return "reasoning";
  });

const app = graph.compile();

// Catch GraphRecursionError as a safety net
try {
  const result = await app.invoke(
    { messages: [] },
    { recursionLimit: 10 }
  );
} catch (error) {
  if (error instanceof GraphRecursionError) {
    console.log("Recursion limit reached, handling gracefully");
    // Handle the error - return partial results, notify user, etc.
  }
}
```

#### Proactive vs reactive approaches

There are two main approaches to handling recursion limits: proactive (monitoring within the graph) and reactive (catching errors externally).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  StateGraph,
  StateSchema,
  ReducedValue,
  GraphNode,
  ConditionalEdgeRouter,
  END,
  GraphRecursionError
} from "@langchain/langgraph";
import { z } from "zod/v4";

const State = new StateSchema({
  messages: new ReducedValue(
    z.array(z.string()).default(() => []),
    { reducer: (x, y) => x.concat(y) }
  ),
});


// Build graph with explicit termination logic
const builder = new StateGraph(State)
  .addNode("agent", async (state) => {
    return {
      messages: ["Processing..."]
    };
  })
  .addConditionalEdges("agent", (state) => {
    // Design termination conditions into your graph
    if (state.messages.length >= 5) {
      return END;
    }
    return "agent";
  });

const graph = builder.compile();

// Reactive Approach - catch GraphRecursionError as safety net
try {
  const result = await graph.invoke(
    { messages: [] },
    { recursionLimit: 10 }
  );
} catch (error) {
  if (error instanceof GraphRecursionError) {
    // Handle externally after graph execution fails
    console.log("Recursion limit exceeded, handling gracefully");
  }
}
```

The reactive approach catches `GraphRecursionError` after the limit is exceeded. Design your graph with explicit termination conditions to avoid hitting the limit in the first place.

| Approach                                  | Detection            | Handling                   | Control Flow               |
| ----------------------------------------- | -------------------- | -------------------------- | -------------------------- |
| Reactive (catching `GraphRecursionError`) | After limit exceeded | Outside graph in try/catch | Graph execution terminated |

**Reactive advantages:**

- Simple implementation
- No need to modify graph logic
- Centralized error handling

#### Other available metadata

Along with `langgraph_step`, the following metadata is also available in `config.metadata`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const inspectMetadata: GraphNode<typeof State> = async (state, config) => {
  const metadata = config.metadata;

  console.log(`Step: ${metadata?.langgraph_step}`);
  console.log(`Node: ${metadata?.langgraph_node}`);
  console.log(`Triggers: ${metadata?.langgraph_triggers}`);
  console.log(`Path: ${metadata?.langgraph_path}`);
  console.log(`Checkpoint NS: ${metadata?.langgraph_checkpoint_ns}`);

  return state;
}
```

## Visualization

It's often nice to be able to visualize graphs, especially as they get more complex. LangGraph comes with several built-in ways to visualize graphs. See [Visualize your graph](/oss/javascript/langgraph/use-graph-api#visualize-your-graph) for more info.

## Observability and Tracing

To trace, debug and evaluate your agents, use [LangSmith](/langsmith/home).

## Learn more

- [How to use the Graph API](/oss/javascript/langgraph/use-graph-api)
- [Functional API conceptual overview](/oss/javascript/langgraph/functional-api)
- [Choosing between Graph API and Functional API](/oss/javascript/langgraph/choosing-apis)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/graph-api.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Install LangGraph

Source: https://docs.langchain.com/oss/javascript/langgraph/install

To install the base LangGraph package:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install @langchain/langgraph @langchain/core
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add @langchain/langgraph @langchain/core
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add @langchain/langgraph @langchain/core
```

```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
bun add @langchain/langgraph @langchain/core
```

To use LangGraph you will usually want to access LLMs and define tools.
You can do this however you see fit.

One way to do this (which we will use in the docs) is to use [LangChain](/oss/javascript/langchain/overview).

Install LangChain with:

```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
npm install langchain
```

```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
pnpm add langchain
```

```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
yarn add langchain
```

```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
bun add langchain
```

To work with specific LLM provider packages, you will need install them separately.

Refer to the [integrations](/oss/javascript/integrations/providers/overview) page for provider-specific installation instructions.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/install.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
