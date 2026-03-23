# LangChain overview

Source: https://docs.langchain.com/oss/javascript/langchain/overview

LangChain is an open source framework with a prebuilt agent architecture and integrations for any model or tool—so you can build agents that adapt as fast as the ecosystem evolves

LangChain is the easy way to start building completely custom agents and applications powered by LLMs.
With under 10 lines of code, you can connect to OpenAI, Anthropic, Google, and [more](/oss/javascript/integrations/providers/overview).
LangChain provides a prebuilt agent architecture and model integrations to help you get started quickly and seamlessly incorporate LLMs into your agents and applications.

**LangChain vs. LangGraph vs. Deep Agents**

If you are looking to build an agent, we recommend you start with [Deep Agents](/oss/javascript/deepagents/overview/) which comes "batteries-included", with modern features like automatic compression of long conversations, a virtual filesystem, and subagent-spawning for managing and isolating context.

Deep Agents are implementations of LangChain [agents](/oss/javascript/langchain/agents). If you don't need these capabilities or would like to customize your own for your agents and autonomous applications, start with LangChain.

Use [LangGraph](/oss/javascript/langgraph/overview), our low-level agent orchestration framework and runtime, when you have more advanced needs that require a combination of deterministic and agentic workflows and heavy customization.

LangChain [agents](/oss/javascript/langchain/agents) are built on top of LangGraph in order to provide durable execution, streaming, human-in-the-loop, persistence, and more. You do not need to know LangGraph for basic LangChain agent usage.

We recommend you use LangChain if you want to quickly build agents and autonomous applications.

## Create an agent

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as z from "zod";
// npm install @langchain/anthropic to call the model
import { createAgent, tool } from "langchain";

const getWeather = tool(
  ({ city }) => `It's always sunny in ${city}!`,
  {
    name: "get_weather",
    description: "Get the weather for a given city",
    schema: z.object({
      city: z.string(),
    }),
  },
);

const agent = createAgent({
  model: "claude-sonnet-4-6",
  tools: [getWeather],
});

console.log(
  await agent.invoke({
    messages: [{ role: "user", content: "What's the weather in Tokyo?" }],
  })
);
```

See the [Installation instructions](/oss/javascript/langchain/install) and [Quickstart guide](/oss/javascript/langchain/quickstart) to get started building your own agents and applications with LangChain.

Use [LangSmith](/langsmith/home) to trace requests, debug agent behavior, and evaluate outputs. Set `LANGSMITH_TRACING=true` and your API key to get started.

## Core benefits

```
Different providers have unique APIs for interacting with models, including the format of responses. LangChain standardizes how you interact with models so that you can seamlessly swap providers and avoid lock-in.



LangChain's agent abstraction is designed to be easy to get started with, letting you build a simple agent in under 10 lines of code. But it also provides enough flexibility to allow you to do all the context engineering your heart desires.



LangChain's agents are built on top of LangGraph. This allows us to take advantage of LangGraph's durable execution, human-in-the-loop support, persistence, and more.



Gain deep visibility into complex agent behavior with visualization tools that trace execution paths, capture state transitions, and provide detailed runtime metrics.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
