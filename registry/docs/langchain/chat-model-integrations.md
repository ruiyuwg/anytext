# Chat model integrations

Source: https://docs.langchain.com/oss/javascript/integrations/chat/index

Integrate with chat models using LangChain JavaScript.

[Chat models](/oss/javascript/langchain/models) are language models that use a sequence of [messages](/oss/javascript/langchain/messages) as inputs and return messages as outputs (as opposed to plaintext).

## Install and use

See [this section for general instructions on installing LangChain packages](/oss/javascript/langchain/install).

````
Install:


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/openai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/openai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/openai
  ```


Add environment variables:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
OPENAI_API_KEY=your-api-key
```

Instantiate the model:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({ model: "gpt-4.1-mini" });
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await model.invoke("Hello, world!")
```



Install:


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/anthropic
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/anthropic
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/anthropic
  ```


Add environment variables:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
ANTHROPIC_API_KEY=your-api-key
```

Instantiate the model:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatAnthropic } from "@langchain/anthropic";

const model = new ChatAnthropic({
model: "claude-3-sonnet-20240620",
temperature: 0
});
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await model.invoke("Hello, world!")
```



Install:


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/google
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/google
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/google
  ```


Add environment variables:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
GOOGLE_API_KEY=your-api-key
```

Instantiate the model:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatGoogle } from "@langchain/google";

const model = new ChatGoogle("gemini-2.5-flash");
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await model.invoke("Hello, world!")
```



Install:


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/mistralai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/mistralai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/mistralai
  ```


Add environment variables:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
MISTRAL_API_KEY=your-api-key
```

Instantiate the model:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatMistralAI } from "@langchain/mistralai";

const model = new ChatMistralAI({
model: "mistral-large-latest",
temperature: 0
});
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await model.invoke("Hello, world!")
```



Install:


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/community
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/community
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/community
  ```


Add environment variables:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
FIREWORKS_API_KEY=your-api-key
```

Instantiate the model:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatFireworks } from "@langchain/community/chat_models/fireworks";

const model = new ChatFireworks({
model: "accounts/fireworks/models/llama-v3p1-70b-instruct",
temperature: 0
});
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await model.invoke("Hello, world!")
```



Install:


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm i @langchain/groq
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/groq
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/groq
  ```


Add environment variables:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
GROQ_API_KEY=your-api-key
```

Instantiate the model:

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
model: "llama-3.3-70b-versatile",
temperature: 0
});
```

```javascript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
await model.invoke("Hello, world!")
```
````

## Featured models

**While these LangChain classes support the indicated advanced feature**, you may need to refer to provider-specific documentation to learn which hosted models or backends support the feature.

| Model                                                                                | Stream | [Tool Calling](/oss/javascript/langchain/tools/) | [`withStructuredOutput()`](/oss/javascript/langchain/structured-output#the-.withstructuredoutput-method) | [Multimodal](/oss/javascript/langchain/messages#multimodal) |
| ------------------------------------------------------------------------------------ | ------ | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`ChatOpenAI`](/oss/javascript/integrations/chat/openai/)                            | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`ChatAnthropic`](/oss/javascript/integrations/chat/anthropic/)                      | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`ChatGoogle`](/oss/javascript/integrations/chat/google/)                            | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`BedrockChat`](/oss/javascript/integrations/chat/bedrock/)                          | ✅      | 🟡 (Bedrock Anthropic only)                      | 🟡 (Bedrock Anthropic only)                                                                              | 🟡 (Bedrock Anthropic only)                                 |
| [`ChatBedrockConverse`](/oss/javascript/integrations/chat/bedrock_converse/)         | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`ChatCloudflareWorkersAI`](/oss/javascript/integrations/chat/cloudflare_workersai/) | ✅      | ❌                                                | ❌                                                                                                        | ❌                                                           |
| [`ChatCohere`](/oss/javascript/integrations/chat/cohere/)                            | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`ChatFireworks`](/oss/javascript/integrations/chat/fireworks/)                      | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`ChatGroq`](/oss/javascript/integrations/chat/groq/)                                | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`ChatMistralAI`](/oss/javascript/integrations/chat/mistral/)                        | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`ChatOllama`](/oss/javascript/integrations/chat/ollama/)                            | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`ChatTogetherAI`](/oss/javascript/integrations/chat/togetherai/)                    | ✅      | ✅                                                | ✅                                                                                                        | ✅                                                           |
| [`ChatXAI`](/oss/javascript/integrations/chat/xai/)                                  | ✅      | ✅                                                | ✅                                                                                                        | ❌                                                           |

## Chat completions API

Certain model providers offer endpoints that are compatible with OpenAI's (legacy) [Chat Completions API](https://platform.openai.com/docs/guides/completions). In such case, you can use [`ChatOpenAI`](/oss/javascript/integrations/chat/openai) with a custom `base_url` to connect to these endpoints. Note that features built on top of the Chat Completions API may not be fully supported by `ChatOpenAI`; in such cases, consider using a provider-specific class if available.

To use OpenRouter, you will need to sign up for an account and obtain an [API key](https://openrouter.ai/docs/api/reference/authentication).

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
    model: "...", // Specify a model available on OpenRouter
    configuration: {
    apiKey: "OPENROUTER_API_KEY",
    baseURL: "https://openrouter.ai/api/v1",
    }
});
```

Refer to the [OpenRouter documentation](https://openrouter.ai/docs/quickstart) for more details.

## All chat models

If you'd like to contribute an integration, see [Contributing integrations](/oss/javascript/contributing#add-a-new-integration).

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/javascript/integrations/chat/index.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# ChatOpenAI integration

Source: https://docs.langchain.com/oss/javascript/integrations/chat/openai

Integrate with the ChatOpenAI chat model using LangChain JavaScript.

[OpenAI](https://en.wikipedia.org/wiki/OpenAI) is an artificial intelligence (AI) research laboratory.

This guide will help you getting started with ChatOpenAI [chat models](/oss/javascript/langchain/models). For detailed documentation of all ChatOpenAI features and configurations head to the [API reference](https://api.js.langchain.com/classes/langchain_openai.ChatOpenAI.html).

**Chat Completions API compatibility**

`ChatOpenAI` is fully compatible with OpenAI's (legacy) [Chat Completions API](https://platform.openai.com/docs/guides/completions). If you are looking to connect to other model providers that support the Chat Completions API, you can do so – see [instructions](/oss/javascript/integrations/chat#chat-completions-api).

**OpenAI models hosted on Azure**

Note that certain OpenAI models can also be accessed via the [Microsoft Azure platform](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai/).
