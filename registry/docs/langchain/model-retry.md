### Model retry

Automatically retry failed model calls with configurable exponential backoff. Model retry is useful for the following:

- Handling transient failures in model API calls.
- Improving reliability of network-dependent model requests.
- Building resilient agents that gracefully handle temporary model errors.

**API reference:** [`modelRetryMiddleware`](https://reference.langchain.com/javascript/langchain/index/modelRetryMiddleware)

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, modelRetryMiddleware } from "langchain";

const agent = createAgent({
  model: "gpt-4.1",
  tools: [searchTool, databaseTool],
  middleware: [
    modelRetryMiddleware({
      maxRetries: 3,
      backoffFactor: 2.0,
      initialDelayMs: 1000,
    }),
  ],
});
```

```
Maximum number of retry attempts after the initial call (3 total attempts with default). Must be >= 0.
```

boolean) | (new (...args: any\[]) => Error)\[]">
Either an array of error constructors to retry on, or a function that takes an error and returns `true` if it should be retried. Default is to retry on all errors.

string)">
Behavior when all retries are exhausted. Options:

```
* `'continue'` (default) - Return an `AIMessage` with error details, allowing the agent to potentially handle the failure gracefully
* `'error'` - Re-raise the exception, stopping agent execution
* Custom function - Function that takes the exception and returns a string for the `AIMessage` content, allowing custom error formatting



Multiplier for exponential backoff. Each retry waits `initialDelayMs * (backoffFactor ** retryNumber)` milliseconds. Set to `0.0` for constant delay. Must be >= 0.



Initial delay in milliseconds before first retry. Must be >= 0.



Maximum delay in milliseconds between retries (caps exponential backoff growth). Must be >= 0.



Whether to add random jitter (`±25%`) to delay to avoid thundering herd
```

The middleware automatically retries failed model calls with exponential backoff.

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { createAgent, modelRetryMiddleware } from "langchain";

// Basic usage with default settings (2 retries, exponential backoff)
const agent = createAgent({
  model: "gpt-4.1",
  tools: [searchTool],
  middleware: [modelRetryMiddleware()],
});

class TimeoutError extends Error {
    // ...
}
class NetworkError extends Error {
    // ...
}

// Retry specific exceptions only
const retry = modelRetryMiddleware({
  maxRetries: 4,
  retryOn: [TimeoutError, NetworkError],
  backoffFactor: 1.5,
});

// Custom exception filtering
function shouldRetry(error: Error): boolean {
  // Only retry on rate limit errors
  if (error.name === "RateLimitError") {
    return true;
  }
  // Or check for specific HTTP status codes
  if (error.name === "HTTPError" && "statusCode" in error) {
    const statusCode = (error as any).statusCode;
    return statusCode === 429 || statusCode === 503;
  }
  return false;
}

const retryWithFilter = modelRetryMiddleware({
  maxRetries: 3,
  retryOn: shouldRetry,
});

// Return error message instead of raising
const retryContinue = modelRetryMiddleware({
  maxRetries: 4,
  onFailure: "continue", // Return AIMessage with error instead of throwing
});

// Custom error message formatting
const formatError = (error: Error) =>
  `Model call failed: ${error.message}. Please try again later.`;

const retryWithFormatter = modelRetryMiddleware({
  maxRetries: 4,
  onFailure: formatError,
});

// Constant backoff (no exponential growth)
const constantBackoff = modelRetryMiddleware({
  maxRetries: 5,
  backoffFactor: 0.0, // No exponential growth
  initialDelayMs: 2000, // Always wait 2 seconds
});

// Raise exception on failure
const strictRetry = modelRetryMiddleware({
  maxRetries: 2,
  onFailure: "error", // Re-raise exception instead of returning message
});
```
