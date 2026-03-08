# Frameworks, runtimes, and harnesses

Source: https://docs.langchain.com/oss/javascript/concepts/products

Understand the differences between LangChain, LangGraph, and Deep Agents and when to use each one

LangChain maintains several open source packages to help you build agents. Each serves a different purpose in the agent development stack. Understanding the distinctions between [agent frameworks](#agent-frameworks-like-langchain), [agent runtimes](#agent-runtimes-like-langgraph), and [agent harnesses](#agent-harnesses-like-the-deep-agents-sdk) helps you choose the right tool for your needs.

```
    Framework
    Runtime
    Harness
  



  
    Value add
    AbstractionsIntegrations
    Durable executionStreamingHITLPersistence
    Predefined toolsPromptsSubagents
  

  
    When to use
    Getting started quicklyStandardizing how a team builds
    Low-level controlLong running, stateful workflows and agents
    More autonomous agentsAgents faced with complex, non-deterministic tasks
  

  
    Options
    LangChainVercel's AI SDKCrewAIOpenAI Agents SDKGoogle ADKLlamaIndex
    LangGraphTemporalInngest
    Deep Agents SDKClaude Agent SDKManus
  
```

## Agent frameworks (like LangChain)

Agent frameworks provide abstractions that make it easier to get started when building with LLMs.

[LangChain](/oss/javascript/langchain/overview) is an agent framework that provides abstractions like structured content blocks, the agent loop, and middleware.

LangChain's abstractions are designed to be easy to get started with while still providing the flexibility needed for advanced use cases.

While LangChain is built on top of [LangGraph](/oss/javascript/langgraph/overview), you don't need to know LangGraph to use LangChain.

Other examples of agent frameworks include [Vercel’s AI SDK](https://ai-sdk.dev/docs/introduction), [CrewAI](https://www.crewai.com/), [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/), [Google ADK](https://google.github.io/adk-docs/), [LlamaIndex](https://www.llamaindex.ai/), and many more.

### When to use LangChain

Use LangChain when:

- You want to quickly build agents and autonomous applications.
- You need standard abstractions for models, tools, and agent loops.
- You want an easy-to-use framework that still provides flexibility.
- You're building straightforward agent applications without complex orchestration needs.

## Agent runtimes (like LangGraph)

Agent runtimes provide the tooling for running agents in production.
Supported tools may include:

- **Durable execution**: Agents persist through failures and can run for extended periods, resuming from where they left off.
- **Streaming**: Support for streaming workflows and responses.
- **Human-in-the-loop**: Incorporate human oversight by inspecting and modifying agent state.
- **Persistence**: Thread-level and cross-thread persistence for state management.
- **Low-level control**: Direct control over agent orchestration without high-level abstractions.

[LangGraph](/oss/javascript/langgraph/overview) is a low-level orchestration framework and runtime for building, managing, and deploying long-running, stateful agents.

Agent frameworks are generally higher level and run on agent runtimes.
For example, LangChain 1.0 is built on top of LangGraph.

Other examples of agent runtimes include [Temporal](https://temporal.io/), [Inngest](https://www.inngest.com/), and other durable execution engines.

### When to use LangGraph

Use LangGraph when:

- You need fine-grained, low-level control over agent orchestration.
- You need durable execution for long-running, stateful agents.
- You're building complex workflows that combine deterministic and agentic steps.
- You need production-ready infrastructure for agent deployment.

## Agent harnesses (like the Deep Agents SDK)

Agent harnesses are opinionated agent frameworks with that come batteries included with built-in tools and capabilities that make building sophisticated, long-running agents easier.
Supported tools may include:

- **Planning capabilities**: Track multiple tasks with a to-do list.
- **Task delegation**: Delegate work and keep context clean with subagents.
- **File system**: Read and write access to files on different pluggable storage backends.
- **Token management**: Conversation history summarization and large tool result eviction.

The [Deep Agents SDK](/oss/javascript/deepagents/overview) builds on top of LangGraph and adds planning capabilities, file systems for context management, the ability to spawn subagents, and more.
DeepAgents is designed for complex, multi-step tasks that require planning and decomposition.
Example tasks include working with search results, scripts, and other artifacts in state.

Other examples of agent harnesses include [Claude Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview), [Manus](https://manus.im/), and other coding CLIs.

### When to use the Deep Agents SDK

Use the [Deep Agents SDK](/oss/javascript/deepagents/overview) when:

- You are building agents that run over long time periods.
- You are building agents that need to handle complex, multi-step tasks.
- You want to use predefined tools, such as filesystem operations, bash execution, and automated context engineering.
- You want to use predefined prompts and subagents.

## Feature comparison

While you can accomplish similar tasks with LangChain, LangGraph, and Deep Agents, the level at which you integrate them differ:

| Feature           | LangChain                                                                   | LangGraph                                                                       | Deep Agents                                                                      |
| ----------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Short-term memory | [Short-term memory](/oss/javascript/langchain/short-term-memory)            | [Short-term memory](/oss/javascript/langgraph/add-memory#add-short-term-memory) | [`StateBackend`](/oss/javascript/deepagents/backends#statebackend-ephemeral)     |
| Long-term memory  | [Long-term memory](/oss/javascript/langchain/long-term-memory)              | [Long-term memory](/oss/javascript/langgraph/add-memory#add-long-term-memory)   | [Long-term memory](/oss/javascript/deepagents/long-term-memory)                  |
| Skills            | [Multi-agent skills](/oss/javascript/langchain/multi-agent/skills)          | -                                                                               | [Skills](/oss/javascript/deepagents/skills)                                      |
| Subagents         | [Multi-agent subagents](/oss/javascript/langchain/multi-agent/subagents)    | [Subgraphs](/oss/javascript/langgraph/use-subgraphs)                            | [Subagents](/oss/javascript/deepagents/subagents)                                |
| Human-in-the-loop | [Human-in-the-loop middleware](/oss/javascript/langchain/human-in-the-loop) | [Interrupts](/oss/javascript/langgraph/interrupts)                              | [`interrupt_on` parameter](/oss/javascript/deepagents/harness#human-in-the-loop) |
| Streaming         | [Agent Streaming](/oss/javascript/langchain/streaming/overview)             | [Streaming](/oss/javascript/langgraph/streaming)                                | [Streaming](/oss/javascript/deepagents/harness#streaming)                        |

## Learn more

- [LangChain overview](/oss/javascript/langchain/overview)
- [LangGraph overview](/oss/javascript/langgraph/overview)
- [Deep Agents overview](/oss/javascript/deepagents/overview)

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/concepts/products.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
