### Tool call limit

Control agent execution by limiting the number of tool calls, either globally across all tools or for specific tools. Tool call limits are useful for the following:

- Preventing excessive calls to expensive external APIs.
- Limiting web searches or database queries.
- Enforcing rate limits on specific tool usage.
- Protecting against runaway agent loops.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, toolCallLimitMiddleware } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [searchTool, databaseTool],
  middleware: [
    toolCallLimitMiddleware({ threadLimit: 20, runLimit: 10 }),
    toolCallLimitMiddleware({
      toolName: "search",
      threadLimit: 5,
      runLimit: 3,
    }),
  ],
});
```

Watch this [video guide](https://www.youtube.com/watch?v=oL6am5UqODY) demonstrating Tool Call Limit middleware behavior.

```
Name of specific tool to limit. If not provided, limits apply to **all tools globally**.



Maximum tool calls across all runs in a thread (conversation). Persists across multiple invocations with the same thread ID. Requires a checkpointer to maintain state. `undefined` means no thread limit.



Maximum tool calls per single invocation (one user message → response cycle). Resets with each new user message. `undefined` means no run limit.

**Note:** At least one of `threadLimit` or `runLimit` must be specified.



Behavior when limit is reached:

* `'continue'` (default) - Block exceeded tool calls with error messages, let other tools and the model continue. The model decides when to end based on the error messages.
* `'error'` - Throw a `ToolCallLimitExceededError` exception, stopping execution immediately
* `'end'` - Stop execution immediately with a ToolMessage and AI message for the exceeded tool call. Only works when limiting a single tool; throws error if other tools have pending calls.
```

Specify limits with:

- **Thread limit** - Max calls across all runs in a conversation (requires checkpointer)
- **Run limit** - Max calls per single invocation (resets each turn)

Exit behaviors:

- `'continue'` (default) - Block exceeded calls with error messages, agent continues
- `'error'` - Raise exception immediately
- `'end'` - Stop with ToolMessage + AI message (single-tool scenarios only)

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, toolCallLimitMiddleware } from "langchain";

const globalLimiter = toolCallLimitMiddleware({ threadLimit: 20, runLimit: 10 });
const searchLimiter = toolCallLimitMiddleware({ toolName: "search", threadLimit: 5, runLimit: 3 });
const databaseLimiter = toolCallLimitMiddleware({ toolName: "query_database", threadLimit: 10 });
const strictLimiter = toolCallLimitMiddleware({ toolName: "scrape_webpage", runLimit: 2, exitBehavior: "error" });

const agent = createAgent({
  model: "gpt-4.1",
  tools: [searchTool, databaseTool, scraperTool],
  middleware: [globalLimiter, searchLimiter, databaseLimiter, strictLimiter],
});
```

### Model fallback

Automatically fallback to alternative models when the primary model fails. Model fallback is useful for the following:

- Building resilient agents that handle model outages.
- Cost optimization by falling back to cheaper models.
- Provider redundancy across OpenAI, Anthropic, etc.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, modelFallbackMiddleware } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [],
  middleware: [
    modelFallbackMiddleware(
      "gpt-4.1-mini",
      "claude-3-5-sonnet-20241022"
    ),
  ],
});
```

The middleware accepts a variable number of string arguments representing fallback models in order:

````
One or more fallback model strings to try in order when the primary model fails

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
modelFallbackMiddleware(
  "first-fallback-model",
  "second-fallback-model",
  // ... more models
)
```
````
