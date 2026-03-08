### Tool retry

Automatically retry failed tool calls with configurable exponential backoff. Tool retry is useful for the following:

- Handling transient failures in external API calls.
- Improving reliability of network-dependent tools.
- Building resilient agents that gracefully handle temporary errors.

**API reference:** [`toolRetryMiddleware`](https://reference.langchain.com/javascript/langchain/index/toolRetryMiddleware)

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, toolRetryMiddleware } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [searchTool, databaseTool],
  middleware: [
    toolRetryMiddleware({
      maxRetries: 3,
      backoffFactor: 2.0,
      initialDelayMs: 1000,
    }),
  ],
});
```

```
Maximum number of retry attempts after the initial call (3 total attempts with default). Must be >= 0.



Optional array of tools or tool names to apply retry logic to. Can be a list of `BaseTool` instances or tool name strings. If `undefined`, applies to all tools.
```

boolean) | (new (...args: any\[]) => Error)\[]">
Either an array of error constructors to retry on, or a function that takes an error and returns `true` if it should be retried. Default is to retry on all errors.

string)">
Behavior when all retries are exhausted. Options:

```
* `'continue'` (default) - Return a `ToolMessage` with error details, allowing the LLM to handle the failure and potentially recover
* `'error'` - Re-raise the exception, stopping agent execution
* Custom function - Function that takes the exception and returns a string for the `ToolMessage` content, allowing custom error formatting

**Deprecated values:** `'raise'` (use `'error'` instead) and `'return_message'` (use `'continue'` instead). These deprecated values still work but will show a warning.



Multiplier for exponential backoff. Each retry waits `initialDelayMs * (backoffFactor ** retryNumber)` milliseconds. Set to `0.0` for constant delay. Must be >= 0.



Initial delay in milliseconds before first retry. Must be >= 0.



Maximum delay in milliseconds between retries (caps exponential backoff growth). Must be >= 0.



Whether to add random jitter (`±25%`) to delay to avoid thundering herd
```

The middleware automatically retries failed tool calls with exponential backoff.

**Key configuration:**

- `maxRetries` - Number of retry attempts (default: 2)
- `backoffFactor` - Multiplier for exponential backoff (default: 2.0)
- `initialDelayMs` - Starting delay in milliseconds (default: 1000ms)
- `maxDelayMs` - Cap on delay growth (default: 60000ms)
- `jitter` - Add random variation (default: true)

**Failure handling:**

- `onFailure: "continue"` (default) - Return error message
- `onFailure: "error"` - Re-raise exception
- Custom function - Function returning error message

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, toolRetryMiddleware } from "langchain";
import { tool } from "@langchain/core/tools";
import { z } from "zod";

// Basic usage with default settings (2 retries, exponential backoff)
const agent = createAgent({
  model: "gpt-4.1",
  tools: [searchTool, databaseTool],
  middleware: [toolRetryMiddleware()],
});

// Retry specific exceptions only
const retry = toolRetryMiddleware({
  maxRetries: 4,
  retryOn: [TimeoutError, NetworkError],
  backoffFactor: 1.5,
});

// Custom exception filtering
function shouldRetry(error: Error): boolean {
  // Only retry on 5xx errors
  if (error.name === "HTTPError" && "statusCode" in error) {
    const statusCode = (error as any).statusCode;
    return 500 <= statusCode && statusCode < 600;
  }
  return false;
}

const retryWithFilter = toolRetryMiddleware({
  maxRetries: 3,
  retryOn: shouldRetry,
});

// Apply to specific tools with custom error handling
const formatError = (error: Error) =>
  "Database temporarily unavailable. Please try again later.";

const retrySpecificTools = toolRetryMiddleware({
  maxRetries: 4,
  tools: ["search_database"],
  onFailure: formatError,
});

// Apply to specific tools using BaseTool instances
const searchDatabase = tool(
  async ({ query }) => {
    // Search implementation
    return results;
  },
  {
    name: "search_database",
    description: "Search the database",
    schema: z.object({ query: z.string() }),
  }
);

const retryWithToolInstance = toolRetryMiddleware({
  maxRetries: 4,
  tools: [searchDatabase], // Pass BaseTool instance
});

// Constant backoff (no exponential growth)
const constantBackoff = toolRetryMiddleware({
  maxRetries: 5,
  backoffFactor: 0.0, // No exponential growth
  initialDelayMs: 2000, // Always wait 2 seconds
});

// Raise exception on failure
const strictRetry = toolRetryMiddleware({
  maxRetries: 2,
  onFailure: "error", // Re-raise exception instead of returning message
});
```
