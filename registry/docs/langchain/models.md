# Models

Source: https://docs.langchain.com/oss/javascript/deepagents/models

Deep Agents work with any [LangChain chat model](/oss/javascript/langchain/models) that supports [tool calling](/oss/javascript/langchain/models#tool-calling).

## Pass a model string

The simplest way to specify a model is to pass a string to [createDeepAgent](https://reference.langchain.com/javascript/deepagents/agent/createDeepAgent). Use the `provider:model` format to select a specific provider:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const agent = createDeepAgent({ model: "openai:gpt-5.3-codex" });
```

Under the hood, this calls [init\_chat\_model](https://reference.langchain.com/javascript/langchain/chat_models/universal/initChatModel) with default parameters.

## Configure model parameters

To configure model-specific parameters, use [init\_chat\_model](https://reference.langchain.com/javascript/langchain/chat_models/universal/initChatModel) or instantiate a provider model class directly:

```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { initChatModel } from "langchain/chat_models/universal";
import { createDeepAgent } from "deepagents";

const model = await initChatModel("anthropic:claude-sonnet-4-6", {
    maxTokens: 16000,
    thinking: { type: "enabled", budgetTokens: 10000 },  // [!code highlight]
});
const agent = createDeepAgent({ model });
```

```typescript Provider package theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";
import { createDeepAgent } from "deepagents";

const model = new ChatAnthropic({
    model: "claude-sonnet-4-6",
    maxTokens: 16000,
    thinking: { type: "enabled", budgetTokens: 10000 },  // [!code highlight]
});
const agent = createDeepAgent({ model });
```

Available parameters vary by provider. See the [chat model integrations](/oss/javascript/integrations/chat) page for provider-specific configuration options.

## Supported models

Deep Agents work with any chat model that supports [tool calling](/oss/javascript/langchain/models#tool-calling). See [chat model integrations](/oss/javascript/integrations/chat) for the full list of supported providers.

### Suggested models

These models perform well on the [Deep Agents eval suite](https://github.com/langchain-ai/deepagents/tree/main/libs/deepagents/tests/evals), which tests basic agent operations. Passing these evals is necessary but not sufficient for strong performance on longer, more complex tasks.

| Provider                                                      | Models                                                                                                                                   |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [Anthropic](/oss/javascript/integrations/providers/anthropic) | `claude-opus-4-6`, `claude-opus-4-5`, `claude-sonnet-4-6`, `claude-sonnet-4`, `claude-sonnet-4-5`, `claude-haiku-4-5`, `claude-opus-4-1` |
| [OpenAI](/oss/javascript/integrations/providers/openai)       | `gpt-5.4`, `gpt-4o`, `gpt-4.1`, `o4-mini`, `gpt-5.2-codex`, `gpt-4o-mini`, `o3`                                                          |
| [Google](/oss/javascript/integrations/providers/google)       | `gemini-3-flash-preview`, `gemini-3.1-pro-preview`                                                                                       |
| Open-weight                                                   | `GLM-5`, `Kimi-K2.5`, `MiniMax-M2.5`, `qwen3.5-397B-A17B`, `devstral-2-123B`                                                             |

Open-weight models are available through providers like [OpenRouter](/oss/javascript/integrations/chat/openrouter), [Fireworks](/oss/javascript/integrations/chat/fireworks) or [Ollama](/oss/javascript/integrations/chat/ollama).

## Learn more

- [Models in LangChain](/oss/javascript/langchain/models): chat model features including tool calling, structured output, and multimodality

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/deepagents/models.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
