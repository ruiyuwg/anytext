# Overview

Source: https://docs.langchain.com/oss/javascript/langchain/streaming/overview

Stream real-time updates from agent runs

LangChain implements a streaming system to surface real-time updates.

Streaming is crucial for enhancing the responsiveness of applications built on LLMs. By displaying output progressively, even before a complete response is ready, streaming significantly improves user experience (UX), particularly when dealing with the latency of LLMs.

## Overview

LangChain's streaming system lets you surface live feedback from agent runs to your application.

What's possible with LangChain streaming:

- [**Stream agent progress**](#agent-progress) — get state updates after each agent step.
- [**Stream LLM tokens**](#llm-tokens) — stream language model tokens as they're generated.
- [**Stream thinking / reasoning tokens**](#streaming-thinking-/-reasoning-tokens) — surface model reasoning as it's generated.
- [**Stream custom updates**](#custom-updates) — emit user-defined signals (e.g., `"Fetched 10/100 records"`).
- [**Stream multiple modes**](#stream-multiple-modes) — choose from `updates` (agent progress), `messages` (LLM tokens + metadata), or `custom` (arbitrary user data).

See the [common patterns](#common-patterns) section below for additional end-to-end examples.

## Supported stream modes

Pass one or more of the following stream modes as a list to the [`stream`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.CompiledStateGraph.html#stream) method:

| Mode       | Description                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updates`  | Streams state updates after each agent step. If multiple updates are made in the same step (e.g., multiple nodes are run), those updates are streamed separately. |
| `messages` | Streams tuples of `(token, metadata)` from any graph nodes where an LLM is invoked.                                                                               |
| `custom`   | Streams custom data from inside your graph nodes using the stream writer.                                                                                         |

## Agent progress

To stream agent progress, use the [`stream`](https://reference.langchain.com/javascript/classes/_langchain_langgraph.index.CompiledStateGraph.html#stream) method with `streamMode: "updates"`. This emits an event after every agent step.

For example, if you have an agent that calls a tool once, you should see the following updates:

- **LLM node**: [`AIMessage`](https://reference.langchain.com/javascript/langchain-core/messages/AIMessage) with tool call requests
- **Tool node**: [`ToolMessage`](https://reference.langchain.com/javascript/langchain-core/messages/ToolMessage) with execution result
- **LLM node**: Final AI response

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import z from "zod";
import { createAgent, tool } from "langchain";

const getWeather = tool(
    async ({ city }) => {
        return `The weather in ${city} is always sunny!`;
    },
    {
        name: "get_weather",
        description: "Get weather for a given city.",
        schema: z.object({
        city: z.string(),
        }),
    }
);

const agent = createAgent({
    model: "gpt-5-nano",
    tools: [getWeather],
});

for await (const chunk of await agent.stream(
    { messages: [{ role: "user", content: "what is the weather in sf" }] },
    { streamMode: "updates" }
)) {
    const [step, content] = Object.entries(chunk)[0];
    console.log(`step: ${step}`);
    console.log(`content: ${JSON.stringify(content, null, 2)}`);
}
/**
 * step: model
 * content: {
 *   "messages": [
 *     {
 *       "kwargs": {
 *         // ...
 *         "tool_calls": [
 *           {
 *             "name": "get_weather",
 *             "args": {
 *               "city": "San Francisco"
 *             },
 *             "type": "tool_call",
 *             "id": "call_0qLS2Jp3MCmaKJ5MAYtr4jJd"
 *           }
 *         ],
 *         // ...
 *       }
 *     }
 *   ]
 * }
 * step: tools
 * content: {
 *   "messages": [
 *     {
 *       "kwargs": {
 *         "content": "The weather in San Francisco is always sunny!",
 *         "name": "get_weather",
 *         // ...
 *       }
 *     }
 *   ]
 * }
 * step: model
 * content: {
 *   "messages": [
 *     {
 *       "kwargs": {
 *         "content": "The latest update says: The weather in San Francisco is always sunny!\n\nIf you'd like real-time details (current temperature, humidity, wind, and today's forecast), I can pull the latest data for you. Want me to fetch that?",
 *         // ...
 *       }
 *     }
 *   ]
 * }
 */
```

## LLM tokens

To stream tokens as they are produced by the LLM, use `streamMode: "messages"`:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import z from "zod";
import { createAgent, tool } from "langchain";

const getWeather = tool(
    async ({ city }) => {
        return `The weather in ${city} is always sunny!`;
    },
    {
        name: "get_weather",
        description: "Get weather for a given city.",
        schema: z.object({
        city: z.string(),
        }),
    }
);

const agent = createAgent({
    model: "gpt-4.1-mini",
    tools: [getWeather],
});

for await (const [token, metadata] of await agent.stream(
    { messages: [{ role: "user", content: "what is the weather in sf" }] },
    { streamMode: "messages" }
)) {
    console.log(`node: ${metadata.langgraph_node}`);
    console.log(`content: ${JSON.stringify(token.contentBlocks, null, 2)}`);
}
```

## Custom updates

To stream updates from tools as they are executed, you can use the `writer` parameter from the configuration.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import z from "zod";
import { tool, createAgent } from "langchain";
import { LangGraphRunnableConfig } from "@langchain/langgraph";

const getWeather = tool(
    async (input, config: LangGraphRunnableConfig) => {
        // Stream any arbitrary data
        config.writer?.(`Looking up data for city: ${input.city}`);
        // ... fetch city data
        config.writer?.(`Acquired data for city: ${input.city}`);
        return `It's always sunny in ${input.city}!`;
    },
    {
        name: "get_weather",
        description: "Get weather for a given city.",
        schema: z.object({
        city: z.string().describe("The city to get weather for."),
        }),
    }
);

const agent = createAgent({
    model: "gpt-4.1-mini",
    tools: [getWeather],
});

for await (const chunk of await agent.stream(
    { messages: [{ role: "user", content: "what is the weather in sf" }] },
    { streamMode: "custom" }
)) {
    console.log(chunk);
}
```

```shell title="Output" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Looking up data for city: San Francisco
Acquired data for city: San Francisco
```

If you add the `writer` parameter to your tool, you won't be able to invoke the tool outside of a LangGraph execution context without providing a writer function.

## Stream multiple modes

You can specify multiple streaming modes by passing streamMode as an array: `streamMode: ["updates", "messages", "custom"]`.

The streamed outputs will be tuples of `[mode, chunk]` where `mode` is the name of the stream mode and `chunk` is the data streamed by that mode.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import z from "zod";
import { tool, createAgent } from "langchain";
import { LangGraphRunnableConfig } from "@langchain/langgraph";

const getWeather = tool(
    async (input, config: LangGraphRunnableConfig) => {
        // Stream any arbitrary data
        config.writer?.(`Looking up data for city: ${input.city}`);
        // ... fetch city data
        config.writer?.(`Acquired data for city: ${input.city}`);
        return `It's always sunny in ${input.city}!`;
    },
    {
        name: "get_weather",
        description: "Get weather for a given city.",
        schema: z.object({
        city: z.string().describe("The city to get weather for."),
        }),
    }
);

const agent = createAgent({
    model: "gpt-4.1-mini",
    tools: [getWeather],
});

for await (const [streamMode, chunk] of await agent.stream(
    { messages: [{ role: "user", content: "what is the weather in sf" }] },
    { streamMode: ["updates", "messages", "custom"] }
)) {
    console.log(`${streamMode}: ${JSON.stringify(chunk, null, 2)}`);
}
```

## Common patterns

Below are examples showing common use cases for streaming.

### Streaming thinking / reasoning tokens

Some models perform internal reasoning before producing a final answer. You can stream these thinking / reasoning tokens as they're generated by filtering [standard content blocks](/oss/javascript/langchain/messages#standard-content-blocks) for the `type` `"reasoning"`.

Reasoning output must be enabled on the model.

See the [reasoning section](/oss/javascript/langchain/models#reasoning) and your [provider's integration page](/oss/javascript/integrations/providers/overview) for configuration details.

To quickly check a model's reasoning support, see [models.dev](https://models.dev).

To stream thinking tokens from an agent, use `streamMode: "messages"` and filter for reasoning content blocks. Use a model instance (e.g. `ChatAnthropic`) with extended thinking enabled when the model supports it:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import z from "zod";
import { createAgent, tool } from "langchain";
import { ChatAnthropic } from "@langchain/anthropic";

const getWeather = tool(
  async ({ city }) => {
    return `It's always sunny in ${city}!`;
  },
  {
    name: "get_weather",
    description: "Get weather for a given city.",
    schema: z.object({ city: z.string() }),
  },
);

const agent = createAgent({
  model: new ChatAnthropic({
    model: "claude-sonnet-4-6",
    thinking: { type: "enabled", budget_tokens: 5000 },
  }),
  tools: [getWeather],
});

for await (const [token, metadata] of await agent.stream(
  { messages: [{ role: "user", content: "What is the weather in SF?" }] },
  { streamMode: "messages" }, // [!code highlight]
)) {
  if (!token.contentBlocks) continue;
  const reasoning = token.contentBlocks.filter((b) => b.type === "reasoning");
  const text = token.contentBlocks.filter((b) => b.type === "text");
  if (reasoning.length) {
    process.stdout.write(`[thinking] ${reasoning[0].reasoning}`);
  }
  if (text.length) {
    process.stdout.write(text[0].text);
  }
}
```

```shell title="Output" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
[thinking] The user is asking about the weather in San Francisco. I have a tool
[thinking]  available to get this information. Let me call the get_weather tool
[thinking]  with "San Francisco" as the city parameter.
The weather in San Francisco is: It's always sunny in San Francisco!
```

This works the same way regardless of the model provider — LangChain normalizes provider-specific formats (Anthropic `thinking` blocks, OpenAI `reasoning` summaries, etc.) into a standard `"reasoning"` content block type via the [`content_blocks`](/oss/javascript/langchain/messages#standard-content-blocks) property.

To stream reasoning tokens directly from a chat model (without an agent), see [streaming with chat models](/oss/javascript/langchain/models#reasoning).

## Disable streaming

In some applications you might need to disable streaming of individual tokens for a given model. This is useful when:

- Working with [multi-agent](/oss/javascript/langchain/multi-agent) systems to control which agents stream their output
- Mixing models that support streaming with those that do not
- Deploying to [LangSmith](/langsmith/home) and wanting to prevent certain model outputs from being streamed to the client

Set `streaming: false` when initializing the model.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4.1",
  streaming: false,  // [!code highlight]
});
```

When deploying to LangSmith, set `streaming=False` on any models whose output you don't want streamed to the client. This is configured in your graph code before deployment.

Not all chat model integrations support the `streaming` parameter. If your model doesn't support it, use `disableStreaming: true` instead. This parameter is available on all chat models via the base class.

See the [LangGraph streaming guide](/oss/javascript/langgraph/streaming#disable-streaming-for-specific-chat-models) for more details.

## Related

- [Frontend streaming](/oss/javascript/langchain/streaming/frontend) — Build React UIs with `useStream` for real-time agent interactions
- [Streaming with chat models](/oss/javascript/langchain/models#stream) — Stream tokens directly from a chat model without using an agent or graph
- [Reasoning with chat models](/oss/javascript/langchain/models#reasoning) — Configure and access reasoning output from chat models
- [Standard content blocks](/oss/javascript/langchain/messages#standard-content-blocks) — Understand the normalized content block format used for reasoning, text, and other content types
- [Streaming with human-in-the-loop](/oss/javascript/langchain/human-in-the-loop#streaming-with-hil) — Stream agent progress while handling interrupts for human review
- [LangGraph streaming](/oss/javascript/langgraph/streaming) — Advanced streaming options including `values`, `debug` modes, and subgraph streaming

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/streaming/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
