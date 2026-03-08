## Multi-agent streaming

When working with multi-agent systems or graphs with multiple nodes, use message metadata to identify which node generated each message. This is particularly useful when multiple LLMs run in parallel and you want to display their outputs with distinct visual styling.

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { agent } from "./agent";
import { MessageBubble } from "./MessageBubble";

// Node configuration for visual display
const NODE_CONFIG: Record<string, { label: string; color: string }> = {
  researcher_analytical: { label: "Analytical Research", color: "cyan" },
  researcher_creative: { label: "Creative Research", color: "purple" },
  researcher_practical: { label: "Practical Research", color: "emerald" },
};

function MultiAgentChat() {
  const stream = useStream({
    assistantId: "parallel-research",
    apiUrl: "http://localhost:2024",
  });

  return (
    
      {stream.messages.map((message, idx) => {
        if (message.type !== "ai") {
          return ;
        }

        // Get streaming metadata to identify the source node
        const metadata = stream.getMessagesMetadata?.(message);
        const nodeName =
          (metadata?.streamMetadata?.langgraph_node as string) ||
          (message as { name?: string }).name;

        const config = nodeName ? NODE_CONFIG[nodeName] : null;

        if (!config) {
          return ;
        }

        return (
          <div
            key={message.id ?? idx}
            className={`bg-${config.color}-950/30 border border-${config.color}-500/30 rounded-xl p-4`}
          >
            
              {config.label}
            
            
              {typeof message.content === "string" ? message.content : ""}
            
          
        );
      })}
    
  );
}
```

```typescript agent.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";
import {
  StateGraph,
  START,
  END,
  Send,
  StateSchema,
  MessagesValue,
  GraphNode,
  ConditionalEdgeRouter,
} from "@langchain/langgraph";
import { AIMessage } from "@langchain/core/messages";
import { z } from "zod";

// Use different model instances for variety
const analyticalModel = new ChatOpenAI({ model: "gpt-4.1-mini", temperature: 0.3 });
const creativeModel = new ChatOpenAI({ model: "gpt-4.1-mini", temperature: 0.9 });
const practicalModel = new ChatOpenAI({ model: "gpt-4.1-mini", temperature: 0.5 });

// Define the state schema
const StateAnnotation = new StateSchema({
  messages: MessagesValue,
  topic: z.string().default(""),
  analyticalResearch: z.string().default(""),
  creativeResearch: z.string().default(""),
  practicalResearch: z.string().default(""),
});

type State = typeof StateAnnotation.State;

// Fan-out to parallel researchers
const fanOutToResearchers: ConditionalEdgeRouter = (state) => {
  return [
    new Send("researcher_analytical", state),
    new Send("researcher_creative", state),
    new Send("researcher_practical", state),
  ];
};

const dispatcherNode: GraphNode = async (state) => {
  const lastMessage = state.messages.at(-1);
  const topic = typeof lastMessage?.content === "string" ? lastMessage.content : "";
  return { topic };
};

const analyticalResearcherNode: GraphNode = async (state) => {
  const response = await analyticalModel.invoke([
    { role: "system", content: "You are an analytical research expert. Focus on data and evidence." },
    { role: "user", content: `Research: ${state.topic}` },
  ]);
  return {
    analyticalResearch: response.content as string,
    messages: [new AIMessage({ content: response.content as string, name: "researcher_analytical" })],
  };
};

// Similar nodes for creative and practical researchers...

// Build the graph with parallel execution
const workflow = new StateGraph(StateAnnotation)
  .addNode("dispatcher", dispatcherNode)
  .addNode("researcher_analytical", analyticalResearcherNode)
  .addNode("researcher_creative", creativeResearcherNode)
  .addNode("researcher_practical", practicalResearcherNode)
  .addEdge(START, "dispatcher")
  .addConditionalEdges("dispatcher", fanOutToResearchers)
  .addEdge("researcher_analytical", END)
  .addEdge("researcher_creative", END)
  .addEdge("researcher_practical", END);

export const agent = workflow.compile();
```

See a complete implementation of multi-agent streaming with three parallel researchers and distinct visual styling in the `parallel-research` example.
