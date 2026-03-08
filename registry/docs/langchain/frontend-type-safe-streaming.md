## Type-safe streaming

The `useStream` hook supports full type inference when used with agents created via @\[`createAgent`] or graphs created with [`StateGraph`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph). Pass `typeof agent` or `typeof graph` as the type parameter to automatically infer tool call types.

### With `createAgent`

When using @\[`createAgent`], tool call types are automatically inferred from the tools you register to your agent:

```python agent.py theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain import create_agent, tool

@tool
def get_weather(location: str) -> str:
    """Get weather for a location."""
    return f"Weather in {location}: Sunny, 72°F"

agent = create_agent(
    model="openai:gpt-4.1-mini",
    tools=[get_weather],
)
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { AgentState } from "./types";

function Chat() {
  // Use the manually defined state type
  const stream = useStream({
    assistantId: "agent",
    apiUrl: "http://localhost:2024",
  });

  // stream.toolCalls[0].call.name is typed as "get_weather"
  // stream.toolCalls[0].call.args is typed as { location: string }
}
```

```typescript types.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message } from "@langchain/langgraph-sdk";

// Define tool call types to match your Python agent
export type GetWeatherToolCall = {
  name: "get_weather";
  args: { location: string };
  id?: string;
};

export type AgentToolCalls = GetWeatherToolCall;

export interface AgentState {
  messages: Message[];
}
```

### With `StateGraph`

For custom [`StateGraph`](https://reference.langchain.com/python/langgraph/graph/state/StateGraph) applications, the state types are inferred from the graph's annotation:

```python graph.py theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langchain_openai import ChatOpenAI
from typing import TypedDict, Annotated

class State(TypedDict):
    messages: Annotated[list, add_messages]

model = ChatOpenAI(model="gpt-4.1-mini")

async def agent(state: State) -> dict:
    response = await model.ainvoke(state["messages"])
    return {"messages": [response]}

workflow = StateGraph(State)
workflow.add_node("agent", agent)
workflow.add_edge(START, "agent")
workflow.add_edge("agent", END)

graph = workflow.compile()
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { GraphState } from "./types";

function Chat() {
  // Use the manually defined state type
  const stream = useStream({
    assistantId: "my-graph",
    apiUrl: "http://localhost:2024",
  });

  // stream.values is typed based on your defined state
}
```

```typescript types.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message } from "@langchain/langgraph-sdk";

// Define state to match your Python graph's State TypedDict
export interface GraphState {
  messages: Message[];
}
```

### With Annotation types

If you're using LangGraph.js, you can reuse your graph's annotation types. Make sure to only import types to avoid importing the entire LangGraph.js runtime:

### Advanced type configuration

You can specify additional type parameters for interrupts, custom events, and configurable options:
