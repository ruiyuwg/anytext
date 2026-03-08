# Models

Source: https://docs.langchain.com/oss/python/deepagents/models

Deep agents work with any [LangChain chat model](/oss/python/langchain/models) that supports [tool calling](/oss/python/langchain/models#tool-calling).

## Pass a model string

The simplest way to specify a model is to pass a string to [create\_deep\_agent](https://reference.langchain.com/python/deepagents/graph/create_deep_agent). Use the `provider:model` format to select a specific provider:

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
agent = create_deep_agent(model="openai:gpt-5.3-codex")
```

Under the hood, this calls [init\_chat\_model](https://reference.langchain.com/python/langchain/chat_models/base/init_chat_model) with default parameters.

## Configure model parameters

To configure model-specific parameters, use [init\_chat\_model](https://reference.langchain.com/python/langchain/chat_models/base/init_chat_model) or instantiate a provider model class directly:

```python init_chat_model theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.chat_models import init_chat_model
from deepagents import create_deep_agent

model = init_chat_model(
    model="anthropic:claude-sonnet-4-6",
    thinking={"type": "enabled", "budget_tokens": 10000},  # [!code highlight]
)
agent = create_deep_agent(model=model)
```

```python Provider package theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain_anthropic import ChatAnthropic
from deepagents import create_deep_agent

model = ChatAnthropic(
    model="claude-sonnet-4-6",
    thinking={"type": "enabled", "budget_tokens": 10000},  # [!code highlight]
)
agent = create_deep_agent(model=model)
```

Available parameters vary by provider. See the [chat model integrations](/oss/python/integrations/chat) page for provider-specific configuration options.

## Supported models

Deep agents work with any chat model that supports [tool calling](/oss/python/langchain/models#tool-calling). See [chat model integrations](/oss/python/integrations/chat) for the full list of supported providers.

## Learn more

- [Models in LangChain](/oss/python/langchain/models): chat model features including tool calling, structured output, and multimodality

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/deepagents/models.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
