## Reasoning models

Extended reasoning/thinking support is currently experimental. The streaming interface for reasoning tokens varies by provider (OpenAI vs. Anthropic) and may change as abstractions are developed.

When using models with extended reasoning capabilities (like OpenAI's reasoning models or Anthropic's extended thinking), the thinking process is embedded in the message content. You'll need to extract and display it separately.

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { Message } from "@langchain/langgraph-sdk";
import type { agent } from "./agent";
import { getReasoningFromMessage, getTextContent } from "./utils";

function ReasoningChat() {
  const stream = useStream({
    assistantId: "reasoning-agent",
    apiUrl: "http://localhost:2024",
  });

  return (
    
      {stream.messages.map((message, idx) => {
        if (message.type === "ai") {
          const reasoning = getReasoningFromMessage(message);
          const textContent = getTextContent(message);

          return (
            
              {/* Render reasoning bubble if present */}
              {reasoning && (
                
                  
                    Reasoning
                  
                  
                    
                      {reasoning}
                    
                  
                
              )}

              {/* Render text content */}
              {textContent && (
                
                  {textContent}
                
              )}
            
          );
        }

        return ;
      })}

      {stream.isLoading && (
        
          Thinking...
        
      )}
    
  );
}
```

```typescript utils.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message, AIMessage } from "@langchain/langgraph-sdk";

/**
 * Extracts reasoning/thinking content from an AI message.
 * Supports both OpenAI reasoning (additional_kwargs.reasoning.summary)
 * and Anthropic extended thinking (content blocks with type "thinking").
 */
export function getReasoningFromMessage(message: Message): string | undefined {
  type MessageWithExtras = AIMessage & {
    additional_kwargs?: {
      reasoning?: {
        summary?: Array<{ type: string; text: string }>;
      };
    };
    contentBlocks?: Array<{ type: string; thinking?: string }>;
  };

  const msg = message as MessageWithExtras;

  // Check for OpenAI reasoning in additional_kwargs
  if (msg.additional_kwargs?.reasoning?.summary) {
    const content = msg.additional_kwargs.reasoning.summary
      .filter((item) => item.type === "summary_text")
      .map((item) => item.text)
      .join("");

    if (content.trim()) return content;
  }

  // Check for Anthropic thinking in contentBlocks
  if (msg.contentBlocks?.length) {
    const thinking = msg.contentBlocks
      .filter((b) => b.type === "thinking" && b.thinking)
      .map((b) => b.thinking)
      .join("\n");

    if (thinking) return thinking;
  }

  // Check for thinking in message.content array
  if (Array.isArray(msg.content)) {
    const thinking = msg.content
      .filter((b): b is { type: "thinking"; thinking: string } =>
        typeof b === "object" && b?.type === "thinking" && "thinking" in b
      )
      .map((b) => b.thinking)
      .join("\n");

    if (thinking) return thinking;
  }

  return undefined;
}

/**
 * Extracts text content from a message.
 */
export function getTextContent(message: Message): string {
  if (typeof message.content === "string") return message.content;

  if (Array.isArray(message.content)) {
    return message.content
      .filter((c): c is { type: "text"; text: string } => c.type === "text")
      .map((c) => c.text)
      .join("");
  }

  return "";
}
```

See a complete implementation of reasoning token display with OpenAI and Anthropic models in the `reasoning-agent` example.

## Custom state types

For custom LangGraph applications, embed your tool call types in your state's messages property.

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Message } from "@langchain/langgraph-sdk";
import { useStream } from "@langchain/langgraph-sdk/react";

// Define your tool call types as a discriminated union
type MyToolCalls =
  | { name: "search"; args: { query: string }; id?: string }
  | { name: "calculate"; args: { expression: string }; id?: string };

// Embed tool call types in your state's messages
interface MyGraphState {
  messages: Message<MyToolCalls>[];
  context?: string;
}

function CustomGraphChat() {
  const stream = useStream<MyGraphState>({
    assistantId: "my-graph",
    apiUrl: "http://localhost:2024",
  });

  // stream.values is typed as MyGraphState
  // stream.toolCalls[0].call.name is typed as "search" | "calculate"
}
```

You can also specify additional type configuration for interrupts and configurable options:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
interface MyGraphState {
  messages: Message<MyToolCalls>[];
}

function CustomGraphChat() {
  const stream = useStream<
    MyGraphState,
    {
      InterruptType: { question: string };
      ConfigurableType: { userId: string };
    }
  >({
    assistantId: "my-graph",
    apiUrl: "http://localhost:2024",
  });

  // stream.interrupt is typed as { question: string } | undefined
}
```
