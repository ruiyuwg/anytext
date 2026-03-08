### Summarization

Automatically summarize conversation history when approaching token limits, preserving recent messages while compressing older context. Summarization is useful for the following:

- Long-running conversations that exceed context windows.
- Multi-turn dialogues with extensive history.
- Applications where preserving full conversation context matters.

**API reference:** [`SummarizationMiddleware`](https://reference.langchain.com/python/langchain/agents/middleware/summarization/SummarizationMiddleware)

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import SummarizationMiddleware

agent = create_agent(
    model="gpt-4.1",
    tools=[your_weather_tool, your_calculator_tool],
    middleware=[
        SummarizationMiddleware(
            model="gpt-4.1-mini",
            trigger=("tokens", 4000),
            keep=("messages", 20),
        ),
    ],
)
```

````
The `fraction` conditions for `trigger` and `keep` (shown below) rely on a chat model's [profile data](/oss/python/langchain/models#model-profiles) if using `langchain>=1.1`. If data are not available, use another condition or specify manually:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.chat_models import init_chat_model

custom_profile = {
    "max_input_tokens": 100_000,
    # ...
}
model = init_chat_model("gpt-4.1", profile=custom_profile)
```



Model for generating summaries. Can be a model identifier string (e.g., `'openai:gpt-4.1-mini'`) or a `BaseChatModel` instance. See [`init_chat_model`](https://reference.langchain.com/python/langchain/chat_models/base/init_chat_model) for more information.



Condition(s) for triggering summarization. Can be:

* A single [`ContextSize`](https://reference.langchain.com/python/langchain/agents/middleware/summarization/ContextSize) tuple (specified condition must be met)
* A list of [`ContextSize`](https://reference.langchain.com/python/langchain/agents/middleware/summarization/ContextSize) tuples (any condition must be met - OR logic)

Condition should be one of the following:

* `fraction` (float): Fraction of model's context size (0-1)
* `tokens` (int): Absolute token count
* `messages` (int): Message count

At least one condition must be specified. If not provided, summarization will not trigger automatically.

See the API reference for [`ContextSize`](https://reference.langchain.com/python/langchain/agents/middleware/summarization/ContextSize) for more information.



How much context to preserve after summarization. Specify exactly one of:

* `fraction` (float): Fraction of model's context size to keep (0-1)
* `tokens` (int): Absolute token count to keep
* `messages` (int): Number of recent messages to keep

See the API reference for [`ContextSize`](https://reference.langchain.com/python/langchain/agents/middleware/summarization/ContextSize) for more information.



Custom token counting function. Defaults to character-based counting.



Custom prompt template for summarization. Uses built-in template if not specified. The template should include `{messages}` placeholder where conversation history will be inserted.



Maximum number of tokens to include when generating the summary. Messages will be trimmed to fit this limit before summarization.



**Deprecated:** Use `summary_prompt` to provide the full prompt instead.



**Deprecated:** Use `trigger: ("tokens", value)` instead. Token threshold for triggering summarization.



**Deprecated:** Use `keep: ("messages", value)` instead. Recent messages to preserve.
````

The summarization middleware monitors message token counts and automatically summarizes older messages when thresholds are reached.

**Trigger conditions** control when summarization runs:

- Single condition object (specified must be met)
- Array of conditions (any condition must be met - OR logic)
- Each condition can use `fraction` (of model's context size), `tokens` (absolute count), or `messages` (message count)

**Keep condition** control how much context to preserve (specify exactly one):

- `fraction` - Fraction of model's context size to keep
- `tokens` - Absolute token count to keep
- `messages` - Number of recent messages to keep

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import SummarizationMiddleware


# Single condition: trigger if tokens >= 4000
agent = create_agent(
    model="gpt-4.1",
    tools=[your_weather_tool, your_calculator_tool],
    middleware=[
        SummarizationMiddleware(
            model="gpt-4.1-mini",
            trigger=("tokens", 4000),
            keep=("messages", 20),
        ),
    ],
)

# Multiple conditions: trigger if number of tokens >= 3000 OR messages >= 6
agent2 = create_agent(
    model="gpt-4.1",
    tools=[your_weather_tool, your_calculator_tool],
    middleware=[
        SummarizationMiddleware(
            model="gpt-4.1-mini",
            trigger=[
                ("tokens", 3000),
                ("messages", 6),
            ],
            keep=("messages", 20),
        ),
    ],
)

# Using fractional limits
agent3 = create_agent(
    model="gpt-4.1",
    tools=[your_weather_tool, your_calculator_tool],
    middleware=[
        SummarizationMiddleware(
            model="gpt-4.1-mini",
            trigger=("fraction", 0.8),
            keep=("fraction", 0.3),
        ),
    ],
)
```
