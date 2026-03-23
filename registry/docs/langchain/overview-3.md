# Overview

Source: https://docs.langchain.com/oss/javascript/langchain/frontend/integrations/overview

Connect useStream to any React UI component library or generative UI framework

[`useStream`](https://reference.langchain.com/javascript/langchain-react/index/useStream) is UI-agnostic. It returns plain reactive state with messages, tool calls, loading flags, and thread history that you wire to any visual layer you choose. These pages show how three different libraries integrate with [`useStream`](https://reference.langchain.com/javascript/langchain-react/index/useStream), each with a different philosophy for building AI chat and generative UI.

## Integrations

```
Composable shadcn/ui-based components for AI chat. Drop in `Conversation`, `Message`, `Tool`, and `Reasoning` and wire them directly to `stream.messages`.



Headless React framework with a full runtime layer. Bridge `useStream` to `AssistantRuntimeProvider` via the `useExternalStoreRuntime` adapter.



Generative UI library that lets the agent produce complete, interactive dashboards in a declarative component DSL. Purpose-built for data-rich, report-style UIs.
```

## Choosing a library

All three connect to [`useStream`](https://reference.langchain.com/javascript/langchain-react/index/useStream) the same way. The choice depends on what kind of UI you're building:

|                   | AI Elements                          | assistant-ui                          | OpenUI                                              |
| ----------------- | ------------------------------------ | ------------------------------------- | --------------------------------------------------- |
| **Best for**      | Chat with rich message types         | Full-featured chat with minimal setup | Generated dashboards and reports                    |
| **UI style**      | Composable shadcn/ui components      | Headless slots + default theme        | Prebuilt component library with declarative DSL     |
| **Customisation** | Edit source files directly           | Override component slots              | Theme via CSS custom properties                     |
| **Streaming UX**  | Component-level progressive render   | Built-in thread management            | Hoisting — shell appears immediately, data fills in |
| **Tool calls**    | `Tool` / `ToolHeader` / `ToolOutput` | Custom via message slots              | Inline in the generated UI                          |
| **Agent format**  | Any `stream.messages`                | Any `stream.messages`                 | Agent outputs openui-lang text                      |

All three work with any `@langchain/react`-compatible agent: [`createAgent`](https://reference.langchain.com/javascript/langchain/index/createAgent), [`createDeepAgent`](https://reference.langchain.com/javascript/deepagents/agent/createDeepAgent), or a custom [LangGraph](/oss/javascript/langgraph/overview) graph.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/frontend/integrations/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
