# OpenAI Compatible Providers

You can use the [OpenAI Compatible Provider](https://www.npmjs.com/package/@ai-sdk/openai-compatible) package to use language model providers that implement the OpenAI API.

Below we focus on the general setup and provider instance creation. You can also [write a custom provider package leveraging the OpenAI Compatible package](/providers/openai-compatible-providers/custom-providers).

We provide detailed documentation for the following OpenAI compatible providers:

- [LM Studio](/providers/openai-compatible-providers/lmstudio)
- [NIM](/providers/openai-compatible-providers/nim)
- [Heroku](/providers/openai-compatible-providers/heroku)
- [Clarifai](/providers/openai-compatible-providers/clarifai)

The general setup and provider instance creation is the same for all of these providers.

## Setup

The OpenAI Compatible provider is available via the `@ai-sdk/openai-compatible` module. You can install it with:

## Provider Instance

To use an OpenAI compatible provider, you can create a custom provider instance with the `createOpenAICompatible` function from `@ai-sdk/openai-compatible`:

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const provider = createOpenAICompatible({
  name: "providerName",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
  includeUsage: true, // Include usage information in streaming responses
});
```

You can use the following optional settings to customize the provider instance:

- **baseURL** _string_

  Set the URL prefix for API calls.

- **apiKey** _string_

  API key for authenticating requests. If specified, adds an `Authorization`
  header to request headers with the value `Bearer <apiKey>`. This will be added
  before any headers potentially specified in the `headers` option.

- **headers** _Record\<string,string>_

  Optional custom headers to include in requests. These will be added to request headers
  after any headers potentially added by use of the `apiKey` option.

- **queryParams** _Record\<string,string>_

  Optional custom url query parameters to include in request urls.

- **fetch** _(input: RequestInfo, init?: RequestInit) => Promise\<Response>_

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

- **includeUsage** _boolean_

  Include usage information in streaming responses. When enabled, usage data will be included in the response metadata for streaming requests. Defaults to `undefined` (`false`).

- **supportsStructuredOutputs** _boolean_

  Set to true if the provider supports structured outputs. Only relevant for `provider()`, `provider.chatModel()`, and `provider.languageModel()`.

- **transformRequestBody** _(args: Record\<string, any>) => Record\<string, any>_

  Optional function to transform the request body before sending it to the API.
  This is useful for proxy providers that may require a different request format
  than the official OpenAI API.

- **metadataExtractor** _MetadataExtractor_

  Optional metadata extractor to capture provider-specific metadata from API responses.
  See [Custom Metadata Extraction](#custom-metadata-extraction) for details.

## Language Models

You can create provider models using a provider instance.
The first argument is the model id, e.g. `model-id`.

```ts
const model = provider("model-id");
```

You can also use the following factory methods:

- `provider.languageModel('model-id')` - creates a chat language model (same as `provider('model-id')`)
- `provider.chatModel('model-id')` - creates a chat language model

### Supported Capabilities

Chat models created with this provider support the following capabilities:

- **Text generation** - Generate text completions
- **Streaming** - Stream text responses in real-time
- **Tool calling** - Call tools/functions with streaming support
- **Structured outputs** - Generate JSON with schema validation (when `supportsStructuredOutputs` is enabled)
- **Reasoning content** - Support for models that return reasoning/thinking tokens (e.g., DeepSeek R1)
- **System messages** - Support for system prompts
- **Multi-modal inputs** - Support for images and other content types (provider-dependent)

### Example

You can use provider language models to generate text with the `generateText` function:

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText } from "ai";

const provider = createOpenAICompatible({
  name: "providerName",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
});

const { text } = await generateText({
  model: provider("model-id"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});
```

### Including model ids for auto-completion

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText } from "ai";

type ExampleChatModelIds =
  | "meta-llama/Llama-3-70b-chat-hf"
  | "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"
  | (string & {});

type ExampleCompletionModelIds =
  | "codellama/CodeLlama-34b-Instruct-hf"
  | "Qwen/Qwen2.5-Coder-32B-Instruct"
  | (string & {});

type ExampleEmbeddingModelIds =
  | "BAAI/bge-large-en-v1.5"
  | "bert-base-uncased"
  | (string & {});

type ExampleImageModelIds = "dall-e-3" | "stable-diffusion-xl" | (string & {});

const model = createOpenAICompatible<
  ExampleChatModelIds,
  ExampleCompletionModelIds,
  ExampleEmbeddingModelIds,
  ExampleImageModelIds
>({
  name: "example",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.example.com/v1",
});

// Subsequent calls to e.g. `model.chatModel` will auto-complete the model id
// from the list of `ExampleChatModelIds` while still allowing free-form
// strings as well.

const { text } = await generateText({
  model: model.chatModel("meta-llama/Llama-3-70b-chat-hf"),
  prompt: "Write a vegetarian lasagna recipe for 4 people.",
});
```

### Custom query parameters

Some providers may require custom query parameters. An example is the [Azure AI
Model Inference
API](https://learn.microsoft.com/en-us/azure/machine-learning/reference-model-inference-chat-completions?view=azureml-api-2)
which requires an `api-version` query parameter.

You can set these via the optional `queryParams` provider setting. These will be
added to all requests made by the provider.

```ts highlight="7-9"
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const provider = createOpenAICompatible({
  name: "providerName",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
  queryParams: {
    "api-version": "1.0.0",
  },
});
```

For example, with the above configuration, API requests would include the query parameter in the URL like:
`https://api.provider.com/v1/chat/completions?api-version=1.0.0`.

## Image Models

You can create image models using the `.imageModel()` factory method:

```ts
const model = provider.imageModel("model-id");
```

### Basic Image Generation

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateImage } from "ai";

const provider = createOpenAICompatible({
  name: "providerName",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
});

const { images } = await generateImage({
  model: provider.imageModel("model-id"),
  prompt: "A futuristic cityscape at sunset",
  size: "1024x1024",
});
```

### Image Editing

The OpenAI Compatible provider supports image editing through the `/images/edits` endpoint. Pass input images via `prompt.images` to transform or edit existing images.

#### Basic Image Editing

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateImage } from "ai";
import fs from "fs";

const provider = createOpenAICompatible({
  name: "providerName",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
});

const imageBuffer = fs.readFileSync("./input-image.png");

const { images } = await generateImage({
  model: provider.imageModel("model-id"),
  prompt: {
    text: "Turn the cat into a dog but retain the style of the original image",
    images: [imageBuffer],
  },
});
```

#### Inpainting with Mask

Edit specific parts of an image using a mask:

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateImage } from "ai";
import fs from "fs";

const provider = createOpenAICompatible({
  name: "providerName",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
});

const image = fs.readFileSync("./input-image.png");
const mask = fs.readFileSync("./mask.png");

const { images } = await generateImage({
  model: provider.imageModel("model-id"),
  prompt: {
    text: "A sunlit indoor lounge area with a pool containing a flamingo",
    images: [image],
    mask,
  },
});
```

Input images can be provided as `Buffer`, `ArrayBuffer`, `Uint8Array`,
base64-encoded strings, or URLs. The provider will automatically download
URL-based images and convert them to the appropriate format.

## Embedding Models

You can create embedding models using the `.embeddingModel()` factory method:

```ts
const model = provider.embeddingModel("model-id");
```

### Example

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { embed } from "ai";

const provider = createOpenAICompatible({
  name: "providerName",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
});

const { embedding } = await embed({
  model: provider.embeddingModel("text-embedding-model"),
  value: "The quick brown fox jumps over the lazy dog",
});
```

### Embedding Model Options

The following provider options are available for embedding models via `providerOptions`:

- **dimensions** _number_

  The number of dimensions the resulting output embeddings should have.
  Only supported in models that allow dimension configuration.

- **user** _string_

  A unique identifier representing your end-user, which can help providers to
  monitor and detect abuse.

```ts
const { embedding } = await embed({
  model: provider.embeddingModel("text-embedding-model"),
  value: "The quick brown fox jumps over the lazy dog",
  providerOptions: {
    providerName: {
      dimensions: 512,
      user: "user-123",
    },
  },
});
```

## Completion Models

You can create completion models (for text completion, not chat) using the `.completionModel()` factory method:

```ts
const model = provider.completionModel("model-id");
```

### Example

```ts
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText } from "ai";

const provider = createOpenAICompatible({
  name: "providerName",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
});

const { text } = await generateText({
  model: provider.completionModel("completion-model-id"),
  prompt: "The quick brown fox",
});
```

### Completion Model Options

The following provider options are available for completion models via `providerOptions`:

- **echo** _boolean_

  Echo back the prompt in addition to the completion.

- **logitBias** _Record\<string, number>_

  Modify the likelihood of specified tokens appearing in the completion.
  Accepts a JSON object that maps tokens (specified by their token ID) to an
  associated bias value from -100 to 100.

- **suffix** _string_

  The suffix that comes after a completion of inserted text.

- **user** _string_

  A unique identifier representing your end-user, which can help providers to
  monitor and detect abuse.

```ts
const { text } = await generateText({
  model: provider.completionModel("completion-model-id"),
  prompt: "The quick brown fox",
  providerOptions: {
    providerName: {
      echo: true,
      suffix: " The end.",
      user: "user-123",
    },
  },
});
```

## Chat Model Options

The following provider options are available for chat models via `providerOptions`:

- **user** _string_

  A unique identifier representing your end-user, which can help the provider to
  monitor and detect abuse.

- **reasoningEffort** _string_

  Reasoning effort for reasoning models. The exact values depend on the provider.

- **textVerbosity** _string_

  Controls the verbosity of the generated text. The exact values depend on the provider.

- **strictJsonSchema** _boolean_

  Whether to use strict JSON schema validation. When true, the model uses constrained
  decoding to guarantee schema compliance. Only used when the provider supports
  structured outputs and a schema is provided. Defaults to `true`.

```ts
const { text } = await generateText({
  model: provider("model-id"),
  prompt: "Solve this step by step: What is 15 * 23?",
  providerOptions: {
    providerName: {
      user: "user-123",
      reasoningEffort: "high",
    },
  },
});
```

## Provider-specific options

The OpenAI Compatible provider supports adding provider-specific options to the request body. These are specified with the `providerOptions` field in the request body.

For example, if you create a provider instance with the name `providerName`, you can add a `customOption` field to the request body like this:

```ts
const provider = createOpenAICompatible({
  name: "providerName",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
});

const { text } = await generateText({
  model: provider("model-id"),
  prompt: "Hello",
  providerOptions: {
    providerName: { customOption: "magic-value" },
  },
});
```

Note that the `providerOptions` key will be in camelCase. If you set the provider name to `provider-name`, the options still need to be set on `providerOptions.providerName`.

The request body sent to the provider will include the `customOption` field with the value `magic-value`. This gives you an easy way to add provider-specific options to requests without having to modify the provider or AI SDK code.

## Custom Metadata Extraction

The OpenAI Compatible provider supports extracting provider-specific metadata from API responses through metadata extractors.
These extractors allow you to capture additional information returned by the provider beyond the standard response format.

Metadata extractors receive the raw, unprocessed response data from the provider, giving you complete flexibility
to extract any custom fields or experimental features that the provider may include.
This is particularly useful when:

- Working with providers that include non-standard response fields
- Experimenting with beta or preview features
- Capturing provider-specific metrics or debugging information
- Supporting rapid provider API evolution without SDK changes

Metadata extractors work with both streaming and non-streaming chat completions and consist of two main components:

1. A function to extract metadata from complete responses
2. A streaming extractor that can accumulate metadata across chunks in a streaming response

Here's an example metadata extractor that captures both standard and custom provider data:

```typescript
import { MetadataExtractor } from "@ai-sdk/openai-compatible";

const myMetadataExtractor: MetadataExtractor = {
  // Process complete, non-streaming responses
  extractMetadata: ({ parsedBody }) => {
    // You have access to the complete raw response
    // Extract any fields the provider includes
    return {
      myProvider: {
        standardUsage: parsedBody.usage,
        experimentalFeatures: parsedBody.beta_features,
        customMetrics: {
          processingTime: parsedBody.server_timing?.total_ms,
          modelVersion: parsedBody.model_version,
          // ... any other provider-specific data
        },
      },
    };
  },

  // Process streaming responses
  createStreamExtractor: () => {
    let accumulatedData = {
      timing: [],
      customFields: {},
    };

    return {
      // Process each chunk's raw data
      processChunk: (parsedChunk) => {
        if (parsedChunk.server_timing) {
          accumulatedData.timing.push(parsedChunk.server_timing);
        }
        if (parsedChunk.custom_data) {
          Object.assign(accumulatedData.customFields, parsedChunk.custom_data);
        }
      },
      // Build final metadata from accumulated data
      buildMetadata: () => ({
        myProvider: {
          streamTiming: accumulatedData.timing,
          customData: accumulatedData.customFields,
        },
      }),
    };
  },
};
```

You can provide a metadata extractor when creating your provider instance:

```typescript
const provider = createOpenAICompatible({
  name: "my-provider",
  apiKey: process.env.PROVIDER_API_KEY,
  baseURL: "https://api.provider.com/v1",
  metadataExtractor: myMetadataExtractor,
});
```

The extracted metadata will be included in the response under the `providerMetadata` field:

```typescript
const { text, providerMetadata } = await generateText({
  model: provider("model-id"),
  prompt: "Hello",
});

console.log(providerMetadata.myProvider.customMetric);
```

This allows you to access provider-specific information while maintaining a consistent interface across different providers.

// CONTRIBUTING GUIDE
// https://github.com/vercel/ai/blob/main/contributing/add-new-tool-to-registry.md

export interface Tool {
slug: string;
name: string;
description: string;
packageName: string;
tags?: string\[];
apiKeyEnvName?: string;
installCommand: {
pnpm: string;
npm: string;
yarn: string;
bun: string;
};
codeExample: string;
docsUrl?: string;
apiKeyUrl?: string;
websiteUrl?: string;
npmUrl?: string;
}

export const tools: Tool\[] = \[
{
slug: 'code-execution',
name: 'Code Execution',
description:
'Execute Python code in a sandboxed environment using Vercel Sandbox. Run calculations, data processing, and other computational tasks safely in an isolated environment with Python 3.13.',
packageName: 'ai-sdk-tool-code-execution',
tags: \['code-execution', 'sandbox'],
apiKeyEnvName: 'VERCEL_OIDC_TOKEN',
installCommand: {
pnpm: 'pnpm add ai-sdk-tool-code-execution',
npm: 'npm install ai-sdk-tool-code-execution',
yarn: 'yarn add ai-sdk-tool-code-execution',
bun: 'bun add ai-sdk-tool-code-execution',
},
codeExample: \`import { generateText, stepCountIs } from 'ai';
import { executeCode } from 'ai-sdk-tool-code-execution';

const { text } = await generateText({
model: 'openai/gpt-5.1-codex',
prompt: 'What is 5 + 5 minus 84 cubed?',
tools: {
executeCode: executeCode(),
},
stopWhen: stepCountIs(5),
});

console.log(text);`,
    docsUrl: 'https://vercel.com/docs/vercel-sandbox',
    apiKeyUrl: 'https://vercel.com/docs/vercel-sandbox#authentication',
    websiteUrl: 'https://vercel.com/docs/vercel-sandbox',
    npmUrl: 'https://www.npmjs.com/package/ai-sdk-tool-code-execution',
  },
  {
    slug: 'exa',
    name: 'Exa',
    description:
      'Exa is a web search API that adds web search capabilities to your LLMs. Exa can search the web for code docs, current information, news, articles, and a lot more. Exa performs real-time web searches and can get page content from specific URLs. Add Exa web search tool to your LLMs in just a few lines of code.',
    packageName: '@exalabs/ai-sdk',
    tags: ['search', 'web', 'extraction'],
    apiKeyEnvName: 'EXA_API_KEY',
    installCommand: {
      pnpm: 'pnpm add @exalabs/ai-sdk',
      npm: 'npm install @exalabs/ai-sdk',
      yarn: 'yarn add @exalabs/ai-sdk',
      bun: 'bun add @exalabs/ai-sdk',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { webSearch } from '@exalabs/ai-sdk';

const { text } = await generateText({
model: 'google/gemini-3-pro-preview',
prompt: 'Tell me the latest developments in AI',
tools: {
webSearch: webSearch(),
},
stopWhen: stepCountIs(3),
});

console.log(text);`,
    docsUrl: 'https://docs.exa.ai/reference/vercel',
    apiKeyUrl: 'https://dashboard.exa.ai/api-keys',
    websiteUrl: 'https://exa.ai',
    npmUrl: 'https://www.npmjs.com/package/@exalabs/ai-sdk',
  },
  {
    slug: 'parallel',
    name: 'Parallel',
    description:
      'Parallel gives AI agents best-in-class tools to search and extract context from the web. Web results returned by Parallel are compressed for optimal token efficiency at inference time.',
    packageName: '@parallel-web/ai-sdk-tools',
    tags: ['search', 'web', 'extraction'],
    apiKeyEnvName: 'PARALLEL_API_KEY',
    installCommand: {
      pnpm: 'pnpm add @parallel-web/ai-sdk-tools',
      npm: 'npm install @parallel-web/ai-sdk-tools',
      yarn: 'yarn add @parallel-web/ai-sdk-tools',
      bun: 'bun add @parallel-web/ai-sdk-tools',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { searchTool, extractTool } from '@parallel-web/ai-sdk-tools';

const { text } = await generateText({
model: 'google/gemini-3-pro-preview',
prompt: 'When was Vercel Ship AI?',
tools: {
webSearch: searchTool,
webExtract: extractTool,
},
stopWhen: stepCountIs(3),
});

console.log(text);`,
    apiKeyUrl: 'https://platform.parallel.ai',
    websiteUrl: 'https://parallel.ai',
    npmUrl: 'https://www.npmjs.com/package/@parallel-web/ai-sdk-tools',
  },
  {
    slug: 'ctx-zip',
    name: 'ctx-zip',
    description:
      'Transform MCP tools and AI SDK tools into code, write it to a Vercel sandbox file system and have the agent import the tools, write code, and execute it.',
    packageName: 'ctx-zip',
    tags: ['code-execution', 'sandbox', 'mcp', 'code-mode'],
    apiKeyEnvName: 'VERCEL_OIDC_TOKEN',
    installCommand: {
      pnpm: 'pnpm add ctx-zip',
      npm: 'npm install ctx-zip',
      yarn: 'yarn add ctx-zip',
      bun: 'bun add ctx-zip',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { createVercelSandboxCodeMode, SANDBOX_SYSTEM_PROMPT } from 'ctx-zip';

const { tools } = await createVercelSandboxCodeMode({
servers: \[
{
name: 'vercel',
url: 'https://mcp.vercel.com',
useSSE: false,
headers: {
Authorization: \`Bearer ${process.env.VERCEL_API_KEY}\`,
},
},
],
standardTools: {
weather: weatherTool,
},
});

const { text } = await generateText({
model: 'openai/gpt-5.2',
tools,
stopWhen: stepCountIs(20),
system: SANDBOX_SYSTEM_PROMPT,
messages: \[
{
role: 'user',
content: 'What tools are available from the Vercel MCP server?',
},
],
});

console.log(text);
`,
    docsUrl: 'https://github.com/karthikscale3/ctx-zip/blob/main/README.md',
    apiKeyUrl: 'https://vercel.com/docs/vercel-sandbox#authentication',
    websiteUrl: 'https://github.com/karthikscale3/ctx-zip/blob/main/README.md',
    npmUrl: 'https://www.npmjs.com/package/ctx-zip',
  },
  {
    slug: 'perplexity-search',
    name: 'Perplexity Search',
    description:
      "Search the web with real-time results and advanced filtering powered by Perplexity's Search API. Provides ranked search results with domain, language, date range, and recency filters. Supports multi-query searches and regional search results.",
    packageName: '@perplexity-ai/ai-sdk',
    tags: ['search', 'web'],
    apiKeyEnvName: 'PERPLEXITY_API_KEY',
    installCommand: {
      pnpm: 'pnpm add @perplexity-ai/ai-sdk',
      npm: 'npm install @perplexity-ai/ai-sdk',
      yarn: 'yarn add @perplexity-ai/ai-sdk',
      bun: 'bun add @perplexity-ai/ai-sdk',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { perplexitySearch } from '@perplexity-ai/ai-sdk';

const { text } = await generateText({
model: 'openai/gpt-5.2',
prompt: 'What are the latest AI developments? Use search to find current information.',
tools: {
search: perplexitySearch(),
},
stopWhen: stepCountIs(3),
});

console.log(text);`,
    docsUrl: 'https://docs.perplexity.ai/guides/search-quickstart',
    apiKeyUrl: 'https://www.perplexity.ai/account/api/keys',
    websiteUrl: 'https://www.perplexity.ai',
    npmUrl: 'https://www.npmjs.com/package/@perplexity-ai/ai-sdk',
  },
  {
    slug: 'tavily',
    name: 'Tavily',
    description:
      'Tavily is a web intelligence platform offering real-time web search optimized for AI applications. Tavily provides comprehensive web research capabilities including search, content extraction, website crawling, and site mapping to power AI agents with current information.',
    packageName: '@tavily/ai-sdk',
    tags: ['search', 'extract', 'crawl'],
    apiKeyEnvName: 'TAVILY_API_KEY',
    installCommand: {
      pnpm: 'pnpm add @tavily/ai-sdk',
      npm: 'npm install @tavily/ai-sdk',
      yarn: 'yarn add @tavily/ai-sdk',
      bun: 'bun add @tavily/ai-sdk',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { tavilySearch } from '@tavily/ai-sdk';

const { text } = await generateText({
model: 'google/gemini-3-pro-preview',
prompt: 'What are the latest developments in agentic search?',
tools: {
webSearch: tavilySearch,
},
stopWhen: stepCountIs(3),
});

console.log(text);`,
    docsUrl: 'https://docs.tavily.com/documentation/integrations/vercel',
    apiKeyUrl: 'https://app.tavily.com/home',
    websiteUrl: 'https://tavily.com',
    npmUrl: 'https://www.npmjs.com/package/@tavily/ai-sdk',
  },
  {
    slug: 'firecrawl',
    name: 'Firecrawl',
    description:
      'Firecrawl tools for the AI SDK. Web scraping, search, crawling, and data extraction for AI applications. Scrape any website into clean markdown, search the web, crawl entire sites, and extract structured data.',
    packageName: 'firecrawl-aisdk',
    tags: ['scraping', 'search', 'crawling', 'extraction', 'web'],
    apiKeyEnvName: 'FIRECRAWL_API_KEY',
    installCommand: {
      pnpm: 'pnpm add firecrawl-aisdk',
      npm: 'npm install firecrawl-aisdk',
      yarn: 'yarn add firecrawl-aisdk',
      bun: 'bun add firecrawl-aisdk',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { scrapeTool } from 'firecrawl-aisdk';

const { text } = await generateText({
model: 'openai/gpt-5-mini',
prompt: 'Scrape https://firecrawl.dev and summarize what it does',
tools: {
scrape: scrapeTool,
},
stopWhen: stepCountIs(3),
});

console.log(text);`,
    docsUrl: 'https://docs.firecrawl.dev/integrations/ai-sdk',
    apiKeyUrl: 'https://firecrawl.dev/app/api-keys',
    websiteUrl: 'https://firecrawl.dev',
    npmUrl: 'https://www.npmjs.com/package/firecrawl-aisdk',
  },
  {
    slug: 'bedrock-agentcore',
    name: 'Amazon Bedrock AgentCore',
    description:
      'Fully managed Browser and Code Interpreter tools for AI agents. Browser is a fast and secure cloud-based runtime for interacting with web applications, filling forms, navigating websites, and extracting information. Code Interpreter provides an isolated sandbox for executing Python, JavaScript, and TypeScript code to solve complex tasks.',
    packageName: 'bedrock-agentcore',
    tags: ['code-execution', 'browser-automation', 'sandbox'],
    apiKeyEnvName: 'AWS_ROLE_ARN',
    installCommand: {
      pnpm: 'pnpm add bedrock-agentcore',
      npm: 'npm install bedrock-agentcore',
      yarn: 'yarn add bedrock-agentcore',
      bun: 'bun add bedrock-agentcore',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { awsCredentialsProvider } from '@vercel/oidc-aws-credentials-provider';
import { CodeInterpreterTools } from 'bedrock-agentcore/code-interpreter/vercel-ai';
import { BrowserTools } from 'bedrock-agentcore/browser/vercel-ai';

const credentialsProvider = awsCredentialsProvider({
roleArn: process.env.AWS_ROLE_ARN!,
});

const codeInterpreter = new CodeInterpreterTools({ credentialsProvider });
const browser = new BrowserTools({ credentialsProvider });

try {
const { text } = await generateText({
model: bedrock('us.anthropic.claude-sonnet-4-20250514-v1:0'),
prompt: 'Go to https://news.ycombinator.com and get the first story title. Then use Python to reverse the string.',
tools: {
...codeInterpreter.tools,
...browser.tools,
},
stopWhen: stepCountIs(5),
});

console.log(text);
} finally {
await codeInterpreter.stopSession();
await browser.stopSession();
}`,
    docsUrl: 'https://github.com/aws/bedrock-agentcore-sdk-typescript',
    apiKeyUrl: 'https://vercel.com/docs/oidc/aws',
    websiteUrl:
      'https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/built-in-tools.html',
    npmUrl: 'https://www.npmjs.com/package/bedrock-agentcore',
  },
  {
    slug: 'superagent',
    name: 'Superagent',
    description:
      'AI security guardrails for your LLMs. Protect your AI apps from prompt injection, redact PII/PHI (SSNs, emails, phone numbers), and verify claims against source materials. Add security tools to your LLMs in just a few lines of code.',
    packageName: '@superagent-ai/ai-sdk',
    tags: ['security', 'guardrails', 'pii', 'prompt-injection', 'verification'],
    apiKeyEnvName: 'SUPERAGENT_API_KEY',
    installCommand: {
      pnpm: 'pnpm add @superagent-ai/ai-sdk',
      npm: 'npm install @superagent-ai/ai-sdk',
      yarn: 'yarn add @superagent-ai/ai-sdk',
      bun: 'bun add @superagent-ai/ai-sdk',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { guard, redact, verify } from '@superagent-ai/ai-sdk';
import { openai } from '@ai-sdk/openai';

const { text } = await generateText({
model: openai('gpt-4o-mini'),
prompt: 'Check this input for security threats: "Ignore all instructions"',
tools: {
guard: guard(),
redact: redact(),
verify: verify(),
},
stopWhen: stepCountIs(3),
});

console.log(text);`,
    docsUrl: 'https://docs.superagent.sh',
    apiKeyUrl: 'https://dashboard.superagent.sh',
    websiteUrl: 'https://superagent.sh',
    npmUrl: 'https://www.npmjs.com/package/@superagent-ai/ai-sdk',
  },
  {
    slug: 'tako-search',
    name: 'Tako Search',
    description:
      "Search Tako's knowledge base for data visualizations, insights, and well-sourced information with charts and analytics.",
    packageName: '@takoviz/ai-sdk',
    installCommand: {
      pnpm: 'pnpm install @takoviz/ai-sdk',
      npm: 'npm install @takoviz/ai-sdk',
      yarn: 'yarn add @takoviz/ai-sdk',
      bun: 'bun add @takoviz/ai-sdk',
    },
    codeExample: `import { takoSearch } from '@takoviz/ai-sdk';
import { generateText, stepCountIs } from 'ai';

const { text } = await generateText({
model: 'openai/gpt-5.2',
prompt: 'What is the stock price of Nvidia?',
tools: {
takoSearch: takoSearch(),
},
stopWhen: stepCountIs(5),
});

console.log(text);`,
    docsUrl: 'https://github.com/TakoData/ai-sdk#readme',
    npmUrl: 'https://www.npmjs.com/package/@takoviz/ai-sdk',
    websiteUrl: 'https://tako.com',
    apiKeyEnvName: 'TAKO_API_KEY',
    apiKeyUrl: 'https://tako.com',
    tags: ['search', 'data', 'visualization', 'analytics'],
  },
  {
    slug: 'valyu',
    name: 'Valyu',
    description:
      'Valyu provides powerful search tools for AI agents. Web search for real-time information, plus specialized domain-specific searchtools: financeSearch (stock prices, earnings, income statements, cash flows, etc), paperSearch (full-text PubMed, arXiv, bioRxiv, medRxiv), bioSearch (clinical trials, FDA drug labels, PubMed, medRxiv, bioRxiv), patentSearch (USPTO patents), secSearch (10-k/10-Q/8-k), economicsSearch (BLS, FRED, World Bank data), and companyResearch (comprehensive company research reports).',
    packageName: '@valyu/ai-sdk',
    tags: ['search', 'web', 'domain-search'],
    apiKeyEnvName: 'VALYU_API_KEY',
    installCommand: {
      pnpm: 'pnpm add @valyu/ai-sdk',
      npm: 'npm install @valyu/ai-sdk',
      yarn: 'yarn add @valyu/ai-sdk',
      bun: 'bun add @valyu/ai-sdk',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { webSearch } from '@valyu/ai-sdk';
// Available specialised search tools: financeSearch, paperSearch,
// bioSearch, patentSearch, secSearch, economicsSearch, companyResearch

const { text } = await generateText({
model: 'google/gemini-3-pro-preview',
prompt: 'Latest data center projects for AI inference?',
tools: {
webSearch: webSearch(),
},
stopWhen: stepCountIs(3),
});

console.log(text);`,
    docsUrl: 'https://docs.valyu.ai/integrations/vercel-ai-sdk',
    apiKeyUrl: 'https://platform.valyu.ai',
    websiteUrl: 'https://valyu.ai',
    npmUrl: 'https://www.npmjs.com/package/@valyu/ai-sdk',
  },
  {
    slug: 'airweave',
    name: 'Airweave',
    description:
      'Airweave is an open-source platform that makes any app searchable for your agent. Sync and search across 35+ data sources (Notion, Slack, Google Drive, databases, and more) with semantic search. Add unified search across all your connected data to your AI applications in just a few lines of code.',
    packageName: '@airweave/vercel-ai-sdk',
    tags: ['search', 'rag', 'data-sources', 'semantic-search'],
    apiKeyEnvName: 'AIRWEAVE_API_KEY',
    installCommand: {
      pnpm: 'pnpm install @airweave/vercel-ai-sdk',
      npm: 'npm install @airweave/vercel-ai-sdk',
      yarn: 'yarn add @airweave/vercel-ai-sdk',
      bun: 'bun add @airweave/vercel-ai-sdk',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { airweaveSearch } from '@airweave/vercel-ai-sdk';

const { text } = await generateText({
model: 'anthropic/claude-sonnet-4.5',
prompt: 'What were the key decisions from last week?',
tools: {
search: airweaveSearch({
defaultCollection: 'my-knowledge-base',
}),
},
stopWhen: stepCountIs(3),
});

console.log(text);`,
    docsUrl: 'https://docs.airweave.ai',
    apiKeyUrl: 'https://app.airweave.ai/settings/api-keys',
    websiteUrl: 'https://airweave.ai',
    npmUrl: 'https://www.npmjs.com/package/@airweave/vercel-ai-sdk',
  },
  {
    slug: 'bash-tool',
    name: 'bash-tool',
    description:
      'Provides bash, readFile, and writeFile tools for AI agents. Supports @vercel/sandbox for full VM isolation.',
    packageName: 'bash-tool',
    tags: ['bash', 'file-system', 'sandbox', 'code-execution'],
    installCommand: {
      pnpm: 'pnpm install bash-tool',
      npm: 'npm install bash-tool',
      yarn: 'yarn add bash-tool',
      bun: 'bun add bash-tool',
    },
    codeExample: `import { generateText, stepCountIs } from 'ai';
import { createBashTool } from 'bash-tool';

const { tools } = await createBashTool({
files: { 'src/index.ts': "export const hello = 'world';" },
});

const { text } = await generateText({
model: 'anthropic/claude-sonnet-4',
prompt: 'List the files in src/ and show me the contents of index.ts',
tools,
stopWhen: stepCountIs(5),
});

console.log(text);\`,
docsUrl: 'https://github.com/vercel/bash-tool',
websiteUrl: 'https://github.com/vercel/bash-tool',
npmUrl: 'https://www.npmjs.com/package/bash-tool',
},
];
