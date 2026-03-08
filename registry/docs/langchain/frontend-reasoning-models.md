## Reasoning models

Extended reasoning/thinking support is currently experimental. The streaming interface for reasoning tokens varies by provider (OpenAI vs. Anthropic) and may change as abstractions are developed.

When using models with extended reasoning capabilities (like OpenAI's reasoning models or Anthropic's extended thinking), the thinking process is embedded in the message content. You'll need to extract and display it separately.

```python agent.py theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain import create_agent
from langchain_openai import ChatOpenAI

# Use a reasoning-capable model
# For OpenAI: o1, o1-mini, o1-preview
# For Anthropic: claude-sonnet-4-20250514 with extended thinking enabled
model = ChatOpenAI(model="o1-mini")

agent = create_agent(
    model=model,
    tools=[],  # Reasoning models work best for complex reasoning tasks
)
```

```tsx Chat.tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/langgraph-sdk/react";
import type { AgentState } from "./types";
import { getReasoningFromMessage, getTextContent } from "./utils";
import { MessageBubble } from "./MessageBubble";

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
            
              {reasoning && (
                
                  
                    Reasoning
                  
                  
                    
                      {reasoning}
                    
                  
                
              )}

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

```typescript types.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message } from "@langchain/langgraph-sdk";

export interface AgentState {
  messages: Message[];
}
```

```typescript utils.ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { Message, AIMessage } from "@langchain/langgraph-sdk";

/**
 * Extracts reasoning/thinking content from an AI message.
 * Supports both OpenAI reasoning and Anthropic extended thinking.
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

## Custom transport

For custom API endpoints or non-standard deployments, use the `transport` option with `FetchStreamTransport` to connect to any streaming API.

## Related

- [Streaming overview](/oss/python/langchain/streaming/overview) — Server-side streaming with LangChain agents
- [useStream API Reference](https://reference.langchain.com/javascript/functions/_langchain_langgraph-sdk.react.useStream.html) — Full API documentation
- [Agent Chat UI](/oss/python/langchain/ui) — Pre-built chat interface for LangGraph agents
- [Human-in-the-loop](/oss/python/langchain/human-in-the-loop) — Configuring interrupts for human review
- [Multi-agent systems](/oss/python/langchain/multi-agent) — Building agents with multiple LLMs

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/streaming/frontend.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Overview

Source: https://docs.langchain.com/oss/python/langchain/streaming/overview

Stream real-time updates from agent runs

LangChain implements a streaming system to surface real-time updates.

Streaming is crucial for enhancing the responsiveness of applications built on LLMs. By displaying output progressively, even before a complete response is ready, streaming significantly improves user experience (UX), particularly when dealing with the latency of LLMs.

## Overview

LangChain's streaming system lets you surface live feedback from agent runs to your application.

What's possible with LangChain streaming:

- [**Stream agent progress**](#agent-progress) — get state updates after each agent step.
- [**Stream LLM tokens**](#llm-tokens) — stream language model tokens as they're generated.
- [**Stream thinking / reasoning tokens**](#streaming-thinking-/-reasoning-tokens) — surface model reasoning as it's generated.
- [**Stream custom updates**](#custom-updates) — emit user-defined signals (e.g., `"Fetched 10/100 records"`).
- [**Stream multiple modes**](#stream-multiple-modes) — choose from `updates` (agent progress), `messages` (LLM tokens + metadata), or `custom` (arbitrary user data).

See the [common patterns](#common-patterns) section below for additional end-to-end examples.

## Supported stream modes

Pass one or more of the following stream modes as a list to the [`stream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.stream) or [`astream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.astream) methods:

| Mode       | Description                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updates`  | Streams state updates after each agent step. If multiple updates are made in the same step (e.g., multiple nodes are run), those updates are streamed separately. |
| `messages` | Streams tuples of `(token, metadata)` from any graph nodes where an LLM is invoked.                                                                               |
| `custom`   | Streams custom data from inside your graph nodes using the stream writer.                                                                                         |

## Agent progress

To stream agent progress, use the [`stream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.stream) or [`astream`](https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph.astream) methods with `stream_mode="updates"`. This emits an event after every agent step.

For example, if you have an agent that calls a tool once, you should see the following updates:

- **LLM node**: [`AIMessage`](https://reference.langchain.com/python/langchain-core/messages/ai/AIMessage) with tool call requests
- **Tool node**: [`ToolMessage`](https://reference.langchain.com/python/langchain-core/messages/tool/ToolMessage) with execution result
- **LLM node**: Final AI response

```python title="Streaming agent progress" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""

    return f"It's always sunny in {city}!"

agent = create_agent(
    model="gpt-5-nano",
    tools=[get_weather],
)
for chunk in agent.stream(  # [!code highlight]
    {"messages": [{"role": "user", "content": "What is the weather in SF?"}]},
    stream_mode="updates",
):
    for step, data in chunk.items():
        print(f"step: {step}")
        print(f"content: {data['messages'][-1].content_blocks}")
```

```shell title="Output" theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
step: model
content: [{'type': 'tool_call', 'name': 'get_weather', 'args': {'city': 'San Francisco'}, 'id': 'call_OW2NYNsNSKhRZpjW0wm2Aszd'}]

step: tools
content: [{'type': 'text', 'text': "It's always sunny in San Francisco!"}]

step: model
content: [{'type': 'text', 'text': 'It's always sunny in San Francisco!'}]
```
