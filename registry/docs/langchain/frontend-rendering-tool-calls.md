## Rendering tool calls

Use `getToolCalls` to extract and render tool calls from AI messages. Tool calls include the call details, result (if completed), and state.

```python agent.py theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain import create_agent, tool

@tool
def get_weather(location: str) -> str:
    """Get the current weather for a location."""
    return f'{{"status": "success", "content": "Weather in {location}: Sunny, 72°F"}}'

agent = create_agent(
    model="openai:gpt-4.1-mini",
    tools=[get_weather],
)
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { AgentState, AgentToolCalls } from "./types";
import { ToolCallCard } from "./ToolCallCard";
import { MessageBubble } from "./MessageBubble";

function Chat() {
  const stream = useStream({
    assistantId: "agent",
    apiUrl: "http://localhost:2024",
  });

  return (
    
      {stream.messages.map((message, idx) => {
        if (message.type === "ai") {
          const toolCalls = stream.getToolCalls(message);

          if (toolCalls.length > 0) {
            return (
              
                {toolCalls.map((toolCall) => (
                  
                ))}
              
            );
          }
        }

        return ;
      })}
    
  );
}
```

```tsx ToolCallCard.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { ToolCallWithResult, ToolCallState } from "@langchain/langgraph-sdk/react";
import type { ToolMessage } from "@langchain/langgraph-sdk";
import type { AgentToolCalls, GetWeatherToolCall } from "./types";
import { parseToolResult } from "./utils";
import { WeatherCard } from "./WeatherCard";
import { GenericToolCallCard } from "./GenericToolCallCard";

export function ToolCallCard({
  toolCall,
}: {
  toolCall: ToolCallWithResult;
}) {
  const { call, result, state } = toolCall;

  if (call.name === "get_weather") {
    return ;
  }

  return ;
}
```

```tsx WeatherCard.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { ToolCallState } from "@langchain/langgraph-sdk/react";
import type { ToolMessage } from "@langchain/langgraph-sdk";
import type { GetWeatherToolCall } from "./types";
import { parseToolResult } from "./utils";

export function WeatherCard({
  call,
  result,
  state,
}: {
  call: GetWeatherToolCall;
  result?: ToolMessage;
  state: ToolCallState;
}) {
  const isLoading = state === "pending";
  const parsedResult = parseToolResult(result);

  return (
    
      
      
        
          {call.args.location}
          {isLoading && Loading...}
        
        {parsedResult.status === "error" ? (
          
            {parsedResult.content}
          
        ) : (
          
            {parsedResult.content || "Fetching weather..."}
          
        )}
      
    
  );
}
```

```typescript types.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message } from "@langchain/langgraph-sdk";

// Define tool call types to match your Python agent's tools
export type GetWeatherToolCall = {
  name: "get_weather";
  args: { location: string };
  id?: string;
};

// Union of all tool calls in your agent
export type AgentToolCalls = GetWeatherToolCall;

// Define state type with your tool calls
export interface AgentState {
  messages: Message[];
}
```

```typescript utils.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { ToolMessage } from "@langchain/langgraph-sdk";

export function parseToolResult(result?: ToolMessage): {
  status: string;
  content: string;
} {
  if (!result) return { status: "pending", content: "" };
  try {
    return JSON.parse(result.content as string);
  } catch {
    return { status: "success", content: result.content as string };
  }
}
```

See a complete implementation of tool call rendering with weather, calculator, and note-taking tools in the `tool-calling-agent` example.
