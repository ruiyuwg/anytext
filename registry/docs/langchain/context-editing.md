### Context editing

Manage conversation context by clearing older tool call outputs when token limits are reached, while preserving recent results. This helps keep context windows manageable in long conversations with many tool calls. Context editing is useful for the following:

- Long conversations with many tool calls that exceed token limits
- Reducing token costs by removing older tool outputs that are no longer relevant
- Maintaining only the most recent N tool results in context

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, contextEditingMiddleware, ClearToolUsesEdit } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [],
  middleware: [
    contextEditingMiddleware({
      edits: [
        new ClearToolUsesEdit({
          triggerTokens: 100000,
          keep: 3,
        }),
      ],
    }),
  ],
});
```

```
Array of [`ContextEdit`](https://reference.langchain.com/javascript/langchain/index/ContextEdit) strategies to apply
```

**[`ClearToolUsesEdit`](https://reference.langchain.com/javascript/langchain/index/ClearToolUsesEdit) options:**

```
Token count that triggers the edit. When the conversation exceeds this token count, older tool outputs will be cleared.



Minimum number of tokens to reclaim when the edit runs. If set to 0, clears as much as needed.



Number of most recent tool results that must be preserved. These will never be cleared.



Whether to clear the originating tool call parameters on the AI message. When `true`, tool call arguments are replaced with empty objects.



List of tool names to exclude from clearing. These tools will never have their outputs cleared.



Placeholder text inserted for cleared tool outputs. This replaces the original tool message content.
```

The middleware applies context editing strategies when token limits are reached. The most common strategy is `ClearToolUsesEdit`, which clears older tool results while preserving recent ones.

**How it works:**

1. Monitor token count in conversation
2. When threshold is reached, clear older tool outputs
3. Keep most recent N tool results
4. Optionally preserve tool call arguments for context

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, contextEditingMiddleware, ClearToolUsesEdit } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [searchTool, calculatorTool, databaseTool],
  middleware: [
    contextEditingMiddleware({
      edits: [
        new ClearToolUsesEdit({
          triggerTokens: 2000,
          keep: 3,
          clearToolInputs: false,
          excludeTools: [],
          placeholder: "[cleared]",
        }),
      ],
    }),
  ],
});
```
