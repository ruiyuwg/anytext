## Type-safe streaming

The `useStream` hook supports full type inference when used with agents created via [`createAgent`](https://reference.langchain.com/javascript/langchain/index/createAgent) or graphs created with [`StateGraph`](https://reference.langchain.com/javascript/langchain-langgraph/index/StateGraph). Pass `typeof agent` or `typeof graph` as the type parameter to automatically infer tool call types.

### With `createAgent`

When using [`createAgent`](https://reference.langchain.com/javascript/langchain/index/createAgent), tool call types are automatically inferred from the tools you register to your agent:

```typescript agent.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, tool } from "langchain";
import { z } from "zod";

const getWeather = tool(
  async ({ location }) => `Weather in ${location}: Sunny, 72°F`,
  {
    name: "get_weather",
    description: "Get weather for a location",
    schema: z.object({
      location: z.string().describe("The city to get weather for"),
    }),
  }
);

export const agent = createAgent({
  model: "openai:gpt-4.1-mini",
  tools: [getWeather],
});
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { agent } from "./agent";

function Chat() {
  // Tool calls are automatically typed from the agent's tools
  const stream = useStream({
    assistantId: "agent",
    apiUrl: "http://localhost:2024",
  });

  // stream.toolCalls[0].call.name is typed as "get_weather"
  // stream.toolCalls[0].call.args is typed as { location: string }
}
```

### With `StateGraph`

For custom [`StateGraph`](https://reference.langchain.com/javascript/langchain-langgraph/index/StateGraph) applications, the state types are inferred from the graph's annotation:

```typescript graph.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateGraph, MessagesAnnotation, START, END } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({ model: "gpt-4.1-mini" });

const workflow = new StateGraph(MessagesAnnotation)
  .addNode("agent", async (state) => {
    const response = await model.invoke(state.messages);
    return { messages: [response] };
  })
  .addEdge(START, "agent")
  .addEdge("agent", END);

export const graph = workflow.compile();
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { graph } from "./graph";

function Chat() {
  // State types are automatically inferred from the graph
  const stream = useStream({
    assistantId: "my-graph",
    apiUrl: "http://localhost:2024",
  });

  // stream.values is typed based on the graph's state annotation
}
```

### With Annotation types

If you're using LangGraph.js, you can reuse your graph's annotation types. Make sure to only import types to avoid importing the entire LangGraph.js runtime:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import {
  Annotation,
  MessagesAnnotation,
  type StateType,
  type UpdateType,
} from "@langchain/langgraph/web";

const AgentState = Annotation.Root({
  ...MessagesAnnotation.spec,
  context: Annotation<string>(),
});

const stream = useStream<
  StateType<typeof AgentState.spec>,
  { UpdateType: UpdateType<typeof AgentState.spec> }
>({
  apiUrl: "http://localhost:2024",
  assistantId: "agent",
});
```

### Advanced type configuration

You can specify additional type parameters for interrupts, custom events, and configurable options:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message } from "@langchain/langgraph-sdk";

type State = { messages: Message[]; context?: string };

const stream = useStream<
  State,
  {
    UpdateType: { messages: Message[] | Message; context?: string };
    InterruptType: string;
    CustomEventType: { type: "progress" | "debug"; payload: unknown };
    ConfigurableType: { model: string };
  }
>({
  apiUrl: "http://localhost:2024",
  assistantId: "agent",
});

// stream.interrupt is typed as string | undefined
// onCustomEvent receives typed events
```
