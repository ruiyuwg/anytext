# Overview

Source: https://docs.langchain.com/oss/python/langchain/frontend/overview

Build generative UIs with real-time streaming from LangChain agents

Build rich, interactive frontends for agents created with `createAgent`. These patterns cover everything from basic message rendering to advanced workflows like human-in-the-loop approval and time travel debugging.

## Architecture

Every pattern follows the same architecture: a `createAgent` backend streams state to a frontend via the `useStream` hook.

```mermaid theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
%%{
  init: {
    "fontFamily": "monospace",
    "flowchart": {
      "curve": "curve"
    }
  }
}%%
graph LR
  FRONTEND["useStream()"]
  BACKEND["createAgent()"]

  BACKEND --"stream"--> FRONTEND
  FRONTEND --"submit"--> BACKEND

  classDef blueHighlight fill:#DBEAFE,stroke:#2563EB,color:#1E3A8A;
  classDef greenHighlight fill:#DCFCE7,stroke:#16A34A,color:#14532D;
  class FRONTEND blueHighlight;
  class BACKEND greenHighlight;
```

On the backend, `createAgent` produces a compiled LangGraph graph that exposes a streaming API. On the frontend, the `useStream` hook connects to that API and provides reactive state — messages, tool calls, interrupts, history, and more — that you render with any framework.

```python agent.py theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain import create_agent
from langgraph.checkpoint.memory import MemorySaver

agent = create_agent(
    model="openai:gpt-5.4",
    tools=[get_weather, search_web],
    checkpointer=MemorySaver(),
)
```

```ts types.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export interface GraphState {
  messages: BaseMessage[];
}
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/react";
import type { GraphState } from "./types";

function Chat() {
  const stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "agent",
  });

  return (
    
      {stream.messages.map((msg) => (
        
      ))}
    
  );
}
```

`useStream` is available for React, Vue, Svelte, and Angular:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/react";   // React
import { useStream } from "@langchain/vue";      // Vue
import { useStream } from "@langchain/svelte";   // Svelte
import { useStream } from "@langchain/angular";  // Angular
```

## Patterns

### Render messages and output

```
Parse and render streamed markdown with proper formatting and code highlighting.



Render typed agent responses as custom UI components instead of plain text.



Display model thinking processes in collapsible blocks.



Render AI-generated user interfaces from natural language prompts using json-render.
```

### Display agent actions

```
Show tool calls as rich, type-safe UI cards with loading and error states.



Pause the agent for human review with approve, reject, and edit workflows.
```

### Manage conversations

```
Edit messages, regenerate responses, and navigate conversation branches.



Queue multiple messages while the agent processes them sequentially.
```

### Advanced streaming

```
Disconnect from and reconnect to running agent streams without losing progress.



Inspect, navigate, and resume from any checkpoint in the conversation history.
```

## Integrations

`useStream` is UI-agnostic. Use it to any component library or generative UI framework.

```
Composable shadcn/ui components for AI chat: `Conversation`, `Message`, `Tool`, `Reasoning`.



Headless React framework with built-in thread management, branching, and attachment support.



Generative UI library for data-rich reports and dashboards using the openui-lang component DSL.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/frontend/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
