## Multi-agent streaming

When working with multi-agent systems or graphs with multiple nodes, use message metadata to identify which node generated each message. This is particularly useful when multiple LLMs run in parallel and you want to display their outputs with distinct visual styling.

```python agent.py theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, START, END, Send
from langgraph.graph.state import CompiledStateGraph
from langchain.messages import BaseMessage, AIMessage
from typing import TypedDict, Annotated
import operator

# Use different model instances for variety
analytical_model = ChatOpenAI(model="gpt-4.1-mini", temperature=0.3)
creative_model = ChatOpenAI(model="gpt-4.1-mini", temperature=0.9)
practical_model = ChatOpenAI(model="gpt-4.1-mini", temperature=0.5)

class State(TypedDict):
    messages: Annotated[list[BaseMessage], operator.add]
    topic: str
    analytical_research: str
    creative_research: str
    practical_research: str

def fan_out_to_researchers(state: State) -> list[Send]:
    return [
        Send("researcher_analytical", state),
        Send("researcher_creative", state),
        Send("researcher_practical", state),
    ]

def dispatcher(state: State) -> dict:
    last_message = state["messages"][-1] if state["messages"] else None
    topic = last_message.content if last_message else ""
    return {"topic": topic}

async def researcher_analytical(state: State) -> dict:
    response = await analytical_model.ainvoke([
        {"role": "system", "content": "You are an analytical research expert."},
        {"role": "user", "content": f"Research: {state['topic']}"},
    ])
    return {
        "analytical_research": response.content,
        "messages": [AIMessage(content=response.content, name="researcher_analytical")],
    }

# Similar nodes for creative and practical researchers...

workflow = StateGraph(State)
workflow.add_node("dispatcher", dispatcher)
workflow.add_node("researcher_analytical", researcher_analytical)
workflow.add_node("researcher_creative", researcher_creative)
workflow.add_node("researcher_practical", researcher_practical)
workflow.add_edge(START, "dispatcher")
workflow.add_conditional_edges("dispatcher", fan_out_to_researchers)
workflow.add_edge("researcher_analytical", END)
workflow.add_edge("researcher_creative", END)
workflow.add_edge("researcher_practical", END)

agent: CompiledStateGraph = workflow.compile()
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { AgentState } from "./types";
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

```typescript types.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message } from "@langchain/langgraph-sdk";

// State matches your Python agent's State TypedDict
export interface AgentState {
  messages: Message[];
  topic: string;
  analytical_research: string;
  creative_research: string;
  practical_research: string;
}
```

See a complete implementation of multi-agent streaming with three parallel researchers and distinct visual styling in the `parallel-research` example.
