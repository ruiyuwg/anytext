# Reasoning tokens

Source: https://docs.langchain.com/oss/python/langchain/frontend/reasoning-tokens

Display model thinking and reasoning processes in collapsible blocks

Reasoning tokens expose the internal thought process of advanced models like OpenAI's o1/o3 and Anthropic's Claude with extended thinking. These models produce structured content blocks that separate reasoning from the final answer, letting you build UIs that show *how* the model arrived at its response.

## What are reasoning tokens?

When models with reasoning capabilities process a prompt, they generate two distinct types of content:

1. **Reasoning blocks**: the model's internal chain-of-thought, problem decomposition, and step-by-step analysis
2. **Text blocks**: the final, polished response presented to the user

These are delivered as typed content blocks within an `AIMessage`, accessible via the `contentBlocks` property:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
// Reasoning block
{ type: "reasoning", reasoning: "Let me think about this step by step..." }

// Text block
{ type: "text", text: "The answer is 42." }
```

Not all models produce reasoning tokens. This pattern applies specifically to models that support extended thinking or chain-of-thought output. Standard chat models return only text blocks.

## Use cases

- **Transparency**: show users the model's reasoning process to build trust in its answers
- **Debugging**: inspect the model's thought process to identify where it goes wrong
- **Educational tools**: teach students problem-solving by revealing how an AI approaches questions
- **Decision support**: let domain experts validate the reasoning behind recommendations
- **Quality assurance**: audit reasoning chains for compliance in regulated industries

## Extracting reasoning and text blocks

The `contentBlocks` array on an `AIMessage` contains all blocks in the order they were generated. Filter them by `type` to separate reasoning from text:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { AIMessage } from "@langchain/core/messages";

function extractBlocks(msg: AIMessage) {
  const reasoningBlocks = msg.contentBlocks
    .filter((b) => b.type === "reasoning")
    .map((b) => b.reasoning);

  const textBlocks = msg.contentBlocks
    .filter((b) => b.type === "text")
    .map((b) => b.text);

  return {
    reasoning: reasoningBlocks.join(""),
    text: textBlocks.join(""),
  };
}
```

A single message may contain multiple reasoning blocks (e.g., if the model pauses its reasoning, produces partial text, then reasons further). Joining them gives you the complete thought process.

## Accessing messages from `useStream`

Define a TypeScript interface matching your agent's state schema and pass it as a type parameter to `useStream` for type-safe access to state values. In the examples below, replace `typeof myAgent` with your interface name:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import type { BaseMessage } from "@langchain/core/messages";

interface AgentState {
  messages: BaseMessage[];
}
```

```tsx React theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useStream } from "@langchain/react";
import { AIMessage, HumanMessage } from "@langchain/core/messages";

function Chat() {
  const stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "reasoning",
  });

  return (
    
      {stream.messages.map((msg, i) => {
        if (HumanMessage.isInstance(msg)) {
          return ;
        }
        if (AIMessage.isInstance(msg)) {
          return (
            <AIResponse
              key={i}
              message={msg}
              isStreaming={stream.isLoading && i === stream.messages.length - 1}
            />
          );
        }
        return null;
      })}
    
  );
}
```

```vue Vue theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

import { useStream } from "@langchain/vue";
import { AIMessage, HumanMessage } from "@langchain/core/messages";

const stream = useStream({
  apiUrl: "http://localhost:2024",
  assistantId: "reasoning",
});



  
    
      
      <AIResponse
        v-else-if="AIMessage.isInstance(msg)"
        :message="msg"
        :isStreaming="stream.isLoading && i === stream.messages.length - 1"
      />
    
  

```

```svelte Svelte theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}

  import { useStream } from "@langchain/svelte";
  import { AIMessage, HumanMessage } from "@langchain/core/messages";

  const { messages, isLoading, submit } = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "reasoning",
  });





      
    {:else if AIMessage.isInstance(msg)}
      <AIResponse
        message={msg}
        isStreaming={$isLoading && i === $messages.length - 1}
      />
    {/if}
  {/each}

```

```ts Angular theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { Component } from "@angular/core";
import { useStream } from "@langchain/angular";
import { AIMessage, HumanMessage } from "@langchain/core/messages";

@Component({
  selector: "app-chat",
  template: `
    
      @for (msg of stream.messages(); track $index) {
        @if (isHuman(msg)) {
          
        } @else if (isAI(msg)) {
          <ai-response
            [message]="msg"
            [isStreaming]="stream.isLoading() && $index === stream.messages().length - 1"
          />
        }
      }
    
  `,
})
export class ChatComponent {
  stream = useStream({
    apiUrl: "http://localhost:2024",
    assistantId: "reasoning",
  });

  isHuman = HumanMessage.isInstance;
  isAI = AIMessage.isInstance;
}
```

## Building a ThinkingBubble component

The `ThinkingBubble` presents reasoning tokens in a visually distinct, collapsible container. Users can expand it to see the full thought process or collapse it to focus on the final answer.

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { useState } from "react";

function ThinkingBubble({
  reasoning,
  isStreaming,
}: {
  reasoning: string;
  isStreaming: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const charCount = reasoning.length;
  const previewLength = 120;
  const preview =
    reasoning.length > previewLength
      ? reasoning.slice(0, previewLength) + "..."
      : reasoning;

  return (
    <div className="thinking-bubble">
      <button
        className="thinking-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="thinking-icon">
          {isStreaming ? (
            <span className="thinking-spinner" />
          ) : (
            "💭"
          )}
        </span>
        <span className="thinking-label">
          {isStreaming ? "Thinking..." : `Thought process (${charCount} chars)`}
        </span>
        <span className={`chevron ${isExpanded ? "expanded" : ""}`}>▶</span>
      </button>

      {isExpanded && (
        <div className="thinking-content">
          <pre>{reasoning}</pre>
        </div>
      )}

      {!isExpanded && !isStreaming && (
        <div className="thinking-preview">{preview}</div>
      )}
    </div>
  );
}
```

### Styling the ThinkingBubble

Differentiate reasoning blocks from regular messages with a distinct visual treatment:

```css theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
.thinking-bubble {
  background-color: #f8f5ff;
  border: 1px solid #e2d9f3;
  border-radius: 8px;
  padding: 12px;
  margin: 8px 0;
  font-size: 0.9em;
}

.thinking-header {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  color: #6b21a8;
  font-weight: 500;
}

.thinking-content {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #e2d9f3;
  white-space: pre-wrap;
  color: #4a4a4a;
  line-height: 1.5;
}

.thinking-preview {
  margin-top: 4px;
  color: #9ca3af;
  font-style: italic;
  font-size: 0.85em;
}

.chevron {
  margin-left: auto;
  transition: transform 0.2s;
}

.chevron.expanded {
  transform: rotate(90deg);
}
```

## Streaming indicator for reasoning

While the model is still generating reasoning tokens, show an animated indicator to communicate that thinking is in progress:

```css theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
.thinking-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #e2d9f3;
  border-top-color: #6b21a8;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

During streaming, keep the ThinkingBubble collapsed by default and show only the spinner. Expanding mid-stream can cause layout jitter as new tokens arrive. Let users expand after the reasoning phase completes.

## Rendering the complete AI response

Combine the `ThinkingBubble` and a standard text bubble into a single `AIResponse` component:

```tsx theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
function AIResponse({
  message,
  isStreaming,
}: {
  message: AIMessage;
  isStreaming: boolean;
}) {
  const reasoningBlocks = message.contentBlocks
    .filter((b) => b.type === "reasoning")
    .map((b) => b.reasoning)
    .join("");

  const textBlocks = message.contentBlocks
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");

  const hasReasoning = reasoningBlocks.length > 0;
  const hasText = textBlocks.length > 0;

  const isReasoningPhase = isStreaming && !hasText;
  const isTextPhase = isStreaming && hasText;

  return (
    <div className="ai-response">
      {hasReasoning && (
        <ThinkingBubble
          reasoning={reasoningBlocks}
          isStreaming={isReasoningPhase}
        />
      )}
      {hasText && (
        <div className="ai-text-bubble">
          <p>{textBlocks}</p>
          {isTextPhase && <span className="cursor-blink">▊</span>}
        </div>
      )}
    </div>
  );
}
```

## Handling edge cases

### Messages without reasoning

Not every AI message will contain reasoning blocks. When `contentBlocks` has only text blocks, render a standard message bubble without the ThinkingBubble.

### Empty reasoning blocks

Some models produce empty reasoning blocks as placeholders. Filter these out:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const meaningfulReasoning = message.contentBlocks
  .filter((b) => b.type === "reasoning" && b.reasoning.trim().length > 0);
```

### Multiple reasoning-text cycles

A single message can alternate between reasoning and text blocks. If you need to preserve this interleaving, iterate `contentBlocks` in order rather than grouping by type:

```ts theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
message.contentBlocks.forEach((block) => {
  if (block.type === "reasoning") {
    // Render ThinkingBubble
  } else if (block.type === "text") {
    // Render text paragraph
  }
});
```

## Best practices

- **Default to collapsed**: show reasoning on demand, not by default
- **Show character count**: gives users a quick sense of how much thinking went into the response
- **Differentiate visually**: use distinct colors, borders, or backgrounds so reasoning is never confused with the actual answer
- **Animate transitions**: smooth expand/collapse animations improve perceived quality
- **Consider accessibility**: use proper ARIA attributes (`aria-expanded`, `aria-controls`) on the toggle button
- **Truncate in previews**: show a short preview of the reasoning when collapsed so users can decide whether to expand

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/frontend/reasoning-tokens.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
