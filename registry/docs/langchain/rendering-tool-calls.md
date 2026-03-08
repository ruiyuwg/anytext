## Rendering tool calls

Use `getToolCalls` to extract and render tool calls from AI messages. Tool calls include the call details, result (if completed), and state.

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { agent } from "./agent";
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
import type {
  ToolCallWithResult,
  ToolCallFromTool,
  ToolCallState,
  InferAgentToolCalls,
} from "@langchain/langgraph-sdk/react";
import type { ToolMessage } from "@langchain/langgraph-sdk";
import type { agent } from "./agent";
import type { getWeather } from "./tools";
import { parseToolResult } from "./utils";
import { WeatherCard } from "./WeatherCard";

/**
 * Define tool call types for this component.
 * Use InferAgentToolCalls for agents or ToolCallFromTool for individual tools.
 */
type AgentToolCalls = InferAgentToolCalls;

/**
 * Component that renders a tool call with its result.
 * Uses typed ToolCallWithResult for discriminated union narrowing.
 */
export function ToolCallCard({
  toolCall,
}: {
  toolCall: ToolCallWithResult;
}) {
  const { call, result, state } = toolCall;

  // Type narrowing works when call.name is a literal type
  if (call.name === "get_weather") {
    return ;
  }

  // Fallback for other tools
  return ;
}
```

```tsx GenericToolCallCard.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { ToolCallState } from "@langchain/langgraph-sdk/react";
import type { ToolMessage } from "@langchain/langgraph-sdk";
import { parseToolResult } from "./utils";

/**
 * Generic fallback for unknown or unhandled tools.
 * Uses a simple type that works with any tool call.
 */
export function GenericToolCallCard({
  call,
  result,
  state,
}: {
  call: { name: string; args: Record<string, unknown> };
  result?: ToolMessage;
  state: ToolCallState;
}) {
  const isLoading = state === "pending";
  const parsedResult = parseToolResult(result);

  return (
    
      
        
          
            {call.name}
          
          
            {isLoading ? "Processing..." : "Completed"}
          
        
      
      
        {JSON.stringify(call.args, null, 2)}
      
      {result && (
        
          {parsedResult.content}
        
      )}
    
  );
}
```

```tsx WeatherCard.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { ToolCallFromTool, ToolCallState } from "@langchain/langgraph-sdk/react";
import type { ToolMessage } from "@langchain/langgraph-sdk";
import type { getWeather } from "./tools";
import { parseToolResult } from "./utils";

// Infer tool call type directly from the tool definition
type GetWeatherToolCall = ToolCallFromTool;

/**
 * Weather-specific tool card with rich UI.
 * Uses ToolCallFromTool to infer args type from the tool schema.
 */
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
    
      {/* Sky gradient background */}
      

      
        
          {/* call.args is typed as { location: string } from the tool schema */}
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

```typescript tools.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { tool } from "@langchain/core/tools";
import { z } from "zod";

// Define the weather tool with a Zod schema
export const getWeather = tool(
  async ({ location }) => {
    // Tool implementation
    return JSON.stringify({ status: "success", content: `Weather in ${location}: Sunny, 72°F` });
  },
  {
    name: "get_weather",
    description: "Get the current weather for a location",
    schema: z.object({
      location: z.string().describe("The city and state, e.g. San Francisco, CA"),
    }),
  }
);
```

```typescript utils.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { ToolMessage } from "@langchain/langgraph-sdk";

/**
 * Helper to parse tool result safely.
 * Tool results may be JSON strings or plain text.
 */
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
