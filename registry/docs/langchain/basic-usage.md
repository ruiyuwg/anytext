## Basic usage

Models can be utilized in two ways:

1. **With agents** - Models can be dynamically specified when creating an [agent](/oss/javascript/langchain/agents#model).
2. **Standalone** - Models can be called directly (outside of the agent loop) for tasks like text generation, classification, or extraction without the need for an agent framework.

The same model interface works in both contexts, which gives you the flexibility to start simple and scale up to more complex agent-based workflows as needed.

### Initialize a model

The easiest way to get started with a standalone model in LangChain is to use `initChatModel` to initialize one from a [chat model provider](/oss/javascript/integrations/chat) of your choice (examples below):

````
👉 Read the [OpenAI chat model integration docs](/oss/javascript/integrations/chat/openai/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/openai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/openai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/openai
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/openai
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.OPENAI_API_KEY = "your-api-key";

  const model = await initChatModel("gpt-5.2");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatOpenAI } from "@langchain/openai";

  const model = new ChatOpenAI({
    model: "gpt-5.2",
    apiKey: "your-api-key"
  });
  ```




👉 Read the [Anthropic chat model integration docs](/oss/javascript/integrations/chat/anthropic/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/anthropic
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/anthropic
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/anthropic
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm add @langchain/anthropic
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.ANTHROPIC_API_KEY = "your-api-key";

  const model = await initChatModel("claude-sonnet-4-6");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatAnthropic } from "@langchain/anthropic";

  const model = new ChatAnthropic({
    model: "claude-sonnet-4-6",
    apiKey: "your-api-key"
  });
  ```




👉 Read the [Azure chat model integration docs](/oss/javascript/integrations/chat/azure/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/azure
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/azure
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/azure
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/azure
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.AZURE_OPENAI_API_KEY = "your-api-key";
  process.env.AZURE_OPENAI_ENDPOINT = "your-endpoint";
  process.env.OPENAI_API_VERSION = "your-api-version";

  const model = await initChatModel("azure_openai:gpt-5.2");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { AzureChatOpenAI } from "@langchain/openai";

  const model = new AzureChatOpenAI({
    model: "gpt-5.2",
    azureOpenAIApiKey: "your-api-key",
    azureOpenAIApiEndpoint: "your-endpoint",
    azureOpenAIApiVersion: "your-api-version"
  });
  ```




👉 Read the [Google GenAI chat model integration docs](/oss/javascript/integrations/chat/google_generative_ai/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/google-genai
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/google-genai
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/google-genai
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/google-genai
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  process.env.GOOGLE_API_KEY = "your-api-key";

  const model = await initChatModel("google-genai:gemini-2.5-flash-lite");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: "your-api-key"
  });
  ```




👉 Read the [AWS Bedrock chat model integration docs](/oss/javascript/integrations/chat/bedrock_converse/)


  ```bash npm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  npm install @langchain/aws
  ```

  ```bash pnpm theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  pnpm install @langchain/aws
  ```

  ```bash yarn theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  yarn add @langchain/aws
  ```

  ```bash bun theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  bun add @langchain/aws
  ```



  ```typescript initChatModel theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { initChatModel } from "langchain";

  // Follow the steps here to configure your credentials:
  // https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  const model = await initChatModel("bedrock:gpt-5.2");
  ```

  ```typescript Model Class theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  import { ChatBedrockConverse } from "@langchain/aws";

  // Follow the steps here to configure your credentials:
  // https://docs.aws.amazon.com/bedrock/latest/userguide/getting-started.html

  const model = new ChatBedrockConverse({
    model: "gpt-5.2",
    region: "us-east-2"
  });
  ```
````

```typescript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
const response = await model.invoke("Why do parrots talk?");
```

See [`initChatModel`](https://reference.langchain.com/javascript/langchain/chat_models/universal/initChatModel) for more detail, including information on how to pass model [parameters](#parameters).

### Supported models

LangChain supports all major model providers, including OpenAI, Anthropic, Google, Azure, AWS Bedrock, and more. Each provider offers a variety of models with different capabilities. For a full list of supported models in LangChain, see the [integrations page](/oss/javascript/integrations/providers/overview).

### Key methods

The model takes messages as input and outputs messages after generating a complete response.

Invoke the model, but stream the output as it is generated in real-time.

Send multiple requests to a model in a batch for more efficient processing.

In addition to chat models, LangChain provides support for other adjacent technologies, such as embedding models and vector stores. See the [integrations page](/oss/javascript/integrations/providers/overview) for details.
