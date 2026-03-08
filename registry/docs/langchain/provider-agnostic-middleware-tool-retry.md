### Tool retry

Automatically retry failed tool calls with configurable exponential backoff. Tool retry is useful for the following:

- Handling transient failures in external API calls.
- Improving reliability of network-dependent tools.
- Building resilient agents that gracefully handle temporary errors.

**API reference:** [`ToolRetryMiddleware`](https://reference.langchain.com/python/langchain/agents/middleware/tool_retry/ToolRetryMiddleware)

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import ToolRetryMiddleware

agent = create_agent(
    model="gpt-4.1",
    tools=[search_tool, database_tool],
    middleware=[
        ToolRetryMiddleware(
            max_retries=3,
            backoff_factor=2.0,
            initial_delay=1.0,
        ),
    ],
)
```

```
Maximum number of retry attempts after the initial call (3 total attempts with default)



Optional list of tools or tool names to apply retry logic to. If `None`, applies to all tools.



Either a tuple of exception types to retry on, or a callable that takes an exception and returns `True` if it should be retried.



Behavior when all retries are exhausted. Options:

* `'return_message'` - Return a `ToolMessage` with error details (allows LLM to handle failure)
* `'raise'` - Re-raise the exception (stops agent execution)
* Custom callable - Function that takes the exception and returns a string for the `ToolMessage` content



Multiplier for exponential backoff. Each retry waits `initial_delay * (backoff_factor ** retry_number)` seconds. Set to `0.0` for constant delay.



Initial delay in seconds before first retry



Maximum delay in seconds between retries (caps exponential backoff growth)



Whether to add random jitter (`±25%`) to delay to avoid thundering herd
```

The middleware automatically retries failed tool calls with exponential backoff.

**Key configuration:**

- `max_retries` - Number of retry attempts (default: 2)
- `backoff_factor` - Multiplier for exponential backoff (default: 2.0)
- `initial_delay` - Starting delay in seconds (default: 1.0)
- `max_delay` - Cap on delay growth (default: 60.0)
- `jitter` - Add random variation (default: True)

**Failure handling:**

- `on_failure='return_message'` - Return error message
- `on_failure='raise'` - Re-raise exception
- Custom function - Function returning error message

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import ToolRetryMiddleware


agent = create_agent(
    model="gpt-4.1",
    tools=[search_tool, database_tool, api_tool],
    middleware=[
        ToolRetryMiddleware(
            max_retries=3,
            backoff_factor=2.0,
            initial_delay=1.0,
            max_delay=60.0,
            jitter=True,
            tools=["api_tool"],
            retry_on=(ConnectionError, TimeoutError),
            on_failure="continue",
        ),
    ],
)
```
