# Overview

Source: https://docs.langchain.com/oss/javascript/langgraph/frontend/overview

Render LangGraph agents to the frontend

Build frontends that visualize LangGraph pipelines in real time. These patterns show how to render multi-step graph execution with per-node status and streaming content from custom `StateGraph` workflows.

## Architecture

LangGraph graphs are composed of named nodes connected by edges. Each node executes a step (classify, research, analyze, synthesize) and writes output to a specific state key. On the frontend, `useStream` provides reactive access to node outputs, streaming tokens, and graph metadata so you can map each node to a UI card.

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
  GRAPH["StateGraph"]
  N1["Node A"]
  N2["Node B"]
  N3["Node C"]

  GRAPH --"stream"--> FRONTEND
  FRONTEND --"submit"--> GRAPH
  GRAPH --> N1
  N1 --> N2
  N2 --> N3

  classDef blueHighlight fill:#DBEAFE,stroke:#2563EB,color:#1E3A8A;
  classDef greenHighlight fill:#DCFCE7,stroke:#16A34A,color:#14532D;
  classDef orangeHighlight fill:#FEF3C7,stroke:#D97706,color:#92400E;
  class FRONTEND blueHighlight;
  class GRAPH greenHighlight;
  class N1,N2,N3 orangeHighlight;
```

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { StateGraph, StateSchema, MessagesValue, START, END } from "@langchain/langgraph";
import * as z from "zod";

const State = new StateSchema({
  messages: MessagesValue,
  classification: z.string(),
  research: z.string(),
  analysis: z.string(),
});

const graph = new StateGraph(State)
  .addNode("classify", classifyNode)
  .addNode("research", researchNode)
  .addNode("analyze", analyzeNode)
  .addEdge(START, "classify")
  .addEdge("classify", "research")
  .addEdge("research", "analyze")
  .addEdge("analyze", END)
  .compile();
```

On the frontend, `useStream` exposes `stream.values` for completed node outputs and `getMessagesMetadata` for identifying which node produced each streaming token.

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/react";

function Pipeline() {
  const stream = useStream<typeof graph>({
    apiUrl: "http://localhost:2024",
    assistantId: "pipeline",
  });

  const classification = stream.values?.classification;
  const research = stream.values?.research;
  const analysis = stream.values?.analysis;
}
```

## Patterns

```
Visualize multi-step graph pipelines with per-node status and streaming content.
```

## Related patterns

The [LangChain frontend patterns](/oss/javascript/langchain/frontend/overview)—markdown messages, tool calling, optimistic updates, and more—work with any LangGraph graph. The `useStream` hook provides the same core API whether you use `createAgent`, `createDeepAgent`, or a custom `StateGraph`.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langgraph/frontend/overview.md) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
