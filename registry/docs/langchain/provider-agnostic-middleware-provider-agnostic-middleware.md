## Provider-agnostic middleware

The following middleware work with any LLM provider:

| Middleware                              | Description                                                                  |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| [Summarization](#summarization)         | Automatically summarize conversation history when approaching token limits.  |
| [Human-in-the-loop](#human-in-the-loop) | Pause execution for human approval of tool calls.                            |
| [Model call limit](#model-call-limit)   | Limit the number of model calls to prevent excessive costs.                  |
| [Tool call limit](#tool-call-limit)     | Control tool execution by limiting call counts.                              |
| [Model fallback](#model-fallback)       | Automatically fallback to alternative models when primary fails.             |
| [PII detection](#pii-detection)         | Detect and handle Personally Identifiable Information (PII).                 |
| [To-do list](#to-do-list)               | Equip agents with task planning and tracking capabilities.                   |
| [LLM tool selector](#llm-tool-selector) | Use an LLM to select relevant tools before calling main model.               |
| [Tool retry](#tool-retry)               | Automatically retry failed tool calls with exponential backoff.              |
| [Model retry](#model-retry)             | Automatically retry failed model calls with exponential backoff.             |
| [LLM tool emulator](#llm-tool-emulator) | Emulate tool execution using an LLM for testing purposes.                    |
| [Context editing](#context-editing)     | Manage conversation context by trimming or clearing tool uses.               |
| [Shell tool](#shell-tool)               | Expose a persistent shell session to agents for command execution.           |
| [File search](#file-search)             | Provide Glob and Grep search tools over filesystem files.                    |
| [Filesystem](#filesystem-middleware)    | Provide agents with a filesystem for storing context and long-term memories. |
| [Subagent](#subagent)                   | Add the ability to spawn subagents.                                          |
