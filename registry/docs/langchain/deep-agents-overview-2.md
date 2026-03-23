# Deep Agents overview

Source: https://docs.langchain.com/oss/python/deepagents/overview

Build agents that can plan, use subagents, and leverage file systems for complex tasks

The easiest way to start building agents and applications powered by LLMs—with built-in capabilities for task planning, file systems for context management, subagent-spawning, and long-term memory.
You can use deep agents for any task, including complex, multi-step tasks.

We think of `deepagents` as an ["agent harness"](/oss/python/concepts/products#agent-harnesses-like-the-deep-agents-sdk). It is the same core tool calling loop as other agent frameworks, but with built-in tools and capabilities.

[`deepagents`](https://pypi.org/project/deepagents/) is a standalone library built on top of [LangChain](/oss/python/langchain/)'s core building blocks for agents. It uses the [LangGraph](/oss/python/langgraph/) runtime for durable execution, streaming, human-in-the-loop, and other features.

The `deepagents` library contains:

- **Deep Agents SDK**: A package for building agents that can handle any task
- [**Deep Agents CLI**](/oss/python/deepagents/cli): A terminal coding agent built on the Deep Agents SDK

[LangChain](/oss/python/langchain/) is the framework that provides the core building blocks for your agents.
To learn more about the differences between LangChain, LangGraph, and Deep Agents, see [Frameworks, runtimes, and harnesses](/oss/python/concepts/products).

## Create a deep agent

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# pip install -qU deepagents
from deepagents import create_deep_agent

def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"

agent = create_deep_agent(
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# Run the agent
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

See the [Quickstart](/oss/python/deepagents/quickstart/) and [Customization guide](/oss/python/deepagents/customization/) to get started building your own agents and applications with Deep Agents.

Use [LangSmith](/langsmith/home) to trace requests, debug agent behavior, and evaluate outputs. Set `LANGSMITH_TRACING=true` and your API key to get started.

## When to use the Deep Agents

Use the **Deep Agents SDK** when you want to build agents that can:

- **Handle complex, multi-step tasks** that require planning and decomposition
- **Manage large amounts of context** through file system tools
- **Swap filesystem backends** to use in-memory state, local disk, durable stores, [sandboxes](/oss/python/deepagents/sandboxes), or [your own custom backend](/oss/python/deepagents/backends)
- **Delegate work** to specialized subagents for context isolation
- **Persist memory** across conversations and threads

For building simpler agents, consider using LangChain's [`create_agent`](/oss/python/langchain/agents) or building a custom [LangGraph](/oss/python/langgraph/overview) workflow.

Use the **Deep Agents CLI** when you want a coding agent on the command line, built on the Deep Agents SDK:

- **Run interactively or non-interactively** — use the CLI as a chat-style coding agent, or pipe tasks with `-n` for scriptable, headless execution.
- **Customize** agents with skills and memory.
- **Teach** agents as you use them about your preferences, common patterns, and custom project knowledge.
- **Execute code** on your machine or in sandboxes.

## Core capabilities

Deep Agents include a built-in [`write_todos`](/oss/python/langchain/middleware/built-in#to-do-list) tool that enables agents to break down complex tasks into discrete steps, track progress, and adapt plans as new information emerges.

File system tools ([`ls`](/oss/python/deepagents/harness#virtual-filesystem-access), [`read_file`](/oss/python/deepagents/harness#virtual-filesystem-access), [`write_file`](/oss/python/deepagents/harness#virtual-filesystem-access), [`edit_file`](/oss/python/deepagents/harness#virtual-filesystem-access)) allow agents to offload large context to in-memory or filesystem storage, preventing context window overflow and enabling work with variable-length tool results.

The virtual filesystem is powered by [pluggable backends](/oss/python/deepagents/backends) that you can swap to fit your use case. Choose from in-memory state, local disk, LangGraph store for cross-thread persistence, [sandboxes](/oss/python/deepagents/sandboxes) for isolated code execution (Modal, Daytona, Deno), or combine multiple backends with composite routing. You can also implement your own custom backend.

A built-in `task` tool enables agents to spawn specialized subagents for context isolation. This keeps the main agent's context clean while still going deep on specific subtasks.

Extend agents with persistent memory across threads using LangGraph's [Memory Store](/oss/python/langgraph/persistence#memory-store). Agents can save and retrieve information from previous conversations.

## Get started

```
Build your first deep agent



Learn about customization options for the SDK



Choose and configure pluggable filesystem backends



Execute code in isolated environments



Use the Deep Agents CLI



See the `deepagents` API reference
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/deepagents/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
