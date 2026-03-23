# Deep Agents CLI

Source: https://docs.langchain.com/oss/python/deepagents/cli/overview

Terminal coding agent built on the Deep Agents SDK

The Deep Agents CLI is an open source terminal coding agent built on the [Deep Agents SDK](/oss/python/deepagents/quickstart).
It retains persistent memory, maintains context across sessions, learns project conventions, uses customizable skills, and executes code with approval controls.

The Deep Agents CLI has the following built-in capabilities:

- **File operations** - read, write, and edit files in your project with tools that enable agents to manage and modify code and documentation.
- **Shell command execution** - execute shell commands to run tests, build projects, manage dependencies, and interact with version control systems.
- **Web search** - search the web for up-to-date information and documentation (requires Tavily API key).
- **HTTP requests** - make HTTP requests to APIs and external services for data fetching and integration tasks.
- **Task planning and tracking** - break down complex tasks into discrete steps and track progress through the built-in todo system.
- **Memory storage and retrieval** - store and retrieve information across sessions, enabling agents to remember project conventions and learned patterns.
- **Context compaction & offloading** - summarize older conversation messages and offload originals to backend storage, freeing context window space during long sessions.
- **Human-in-the-loop** - require human approval for sensitive tool operations.
- **Skills** - extend agent capabilities with custom expertise and instructions stored in skill directories.
- **[MCP tools](/oss/python/deepagents/cli/mcp-tools)** - load external tools from [Model Context Protocol](https://modelcontextprotocol.io/) servers via auto-discovered or explicit config files.
- **[Tracing](/oss/python/deepagents/cli/overview#tracing-with-langsmith)** - trace agent operations, tool calls, and decisions in LangSmith for observability and debugging.
