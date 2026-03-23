# Deep Agents overview

Source: https://docs.langchain.com/oss/javascript/deepagents/overview

Build agents that can plan, use subagents, and leverage file systems for complex tasks

The easiest way to start building agents and applications powered by LLMs—with built-in capabilities for task planning, file systems for context management, subagent-spawning, and long-term memory.
You can use deep agents for any task, including complex, multi-step tasks.

We think of `deepagents` as an ["agent harness"](/oss/javascript/concepts/products#agent-harnesses-like-the-deep-agents-sdk). It is the same core tool calling loop as other agent frameworks, but with built-in tools and capabilities.

[`deepagents`](https://www.npmjs.com/package/deepagents) is a standalone library built on top of [LangChain](/oss/javascript/langchain/)'s core building blocks for agents and using [LangGraph](/oss/javascript/langgraph/)'s tooling for running agents in production.

The `deepagents` library contains:

- **Deep Agents SDK**: A package for building agents that can handle any task
- [**Deep Agents CLI**](/oss/javascript/deepagents/cli): A terminal coding agent built on the Deep Agents SDK

[LangChain](/oss/javascript/langchain/) is the framework that provides the core building blocks for your agents.
To learn more about the differences between LangChain, LangGraph, and Deep Agents, see [Frameworks, runtimes, and harnesses](/oss/javascript/concepts/products).

## Create a deep agent

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import * as z from "zod";
// npm install deepagents langchain @langchain/core
import { createDeepAgent } from "deepagents";
import { tool } from "langchain";

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

const agent = createDeepAgent({
  tools: [getWeather],
  system: "You are a helpful assistant",
});

console.log(
  await agent.invoke({
    messages: [{ role: "user", content: "What's the weather in Tokyo?" }],
  })
);
```

See the [Quickstart](/oss/javascript/deepagents/quickstart/) and [Customization guide](/oss/javascript/deepagents/customization/) to get started building your own agents and applications with Deep Agents.

Use [LangSmith](/langsmith/home) to trace requests, debug agent behavior, and evaluate outputs. Set `LANGSMITH_TRACING=true` and your API key to get started.

## When to use the Deep Agents

Use the **Deep Agents SDK** when you want to build agents that can:

- **Handle complex, multi-step tasks** that require planning and decomposition
- **Manage large amounts of context** through file system tools
- **Swap filesystem backends** to use in-memory state, local disk, durable stores, [sandboxes](/oss/javascript/deepagents/sandboxes), or [your own custom backend](/oss/javascript/deepagents/backends)
- **Delegate work** to specialized subagents for context isolation
- **Persist memory** across conversations and threads

For building simpler agents, consider using LangChain's [`createAgent`](/oss/javascript/langchain/agents) or building a custom [LangGraph](/oss/javascript/langgraph/overview) workflow.

Use the **Deep Agents CLI** when you want a coding agent on the command line, built on the Deep Agents SDK:

- **Run interactively or non-interactively** — use the CLI as a chat-style coding agent, or pipe tasks with `-n` for scriptable, headless execution.
- **Customize** agents with skills and memory.
- **Teach** agents as you use them about your preferences, common patterns, and custom project knowledge.
- **Execute code** on your machine or in sandboxes.

## Core capabilities

Deep Agents include a built-in [`write_todos`](/oss/javascript/langchain/middleware/built-in#to-do-list) tool that enables agents to break down complex tasks into discrete steps, track progress, and adapt plans as new information emerges.

File system tools ([`ls`](/oss/javascript/deepagents/harness#virtual-filesystem-access), [`read_file`](/oss/javascript/deepagents/harness#virtual-filesystem-access), [`write_file`](/oss/javascript/deepagents/harness#virtual-filesystem-access), [`edit_file`](/oss/javascript/deepagents/harness#virtual-filesystem-access)) allow agents to offload large context to in-memory or filesystem storage, preventing context window overflow and enabling work with variable-length tool results.

The virtual filesystem is powered by [pluggable backends](/oss/javascript/deepagents/backends) that you can swap to fit your use case. Choose from in-memory state, local disk, LangGraph store for cross-thread persistence, [sandboxes](/oss/javascript/deepagents/sandboxes) for isolated code execution (Modal, Daytona, Deno), or combine multiple backends with composite routing. You can also implement your own custom backend.

A built-in `task` tool enables agents to spawn specialized subagents for context isolation. This keeps the main agent's context clean while still going deep on specific subtasks.

Extend agents with persistent memory across threads using LangGraph's [Memory Store](/oss/javascript/langgraph/persistence#memory-store). Agents can save and retrieve information from previous conversations.

## Get started

```
Build your first deep agent



Learn about customization options for the SDK



Choose and configure pluggable filesystem backends



Use the Deep Agents CLI



See the `deepagents` API reference
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/deepagents/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
