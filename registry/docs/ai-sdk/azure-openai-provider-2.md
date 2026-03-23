# Azure OpenAI Provider

The [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service) provider contains language model support for the Azure OpenAI chat API.

## Setup

The Azure OpenAI provider is available in the `@ai-sdk/azure` module. You can install it with

## Provider Instance

You can import the default provider instance `azure` from `@ai-sdk/azure`:

```ts
import { azure } from '@ai-sdk/azure';
```

If you need a customized setup, you can import `createAzure` from `@ai-sdk/azure` and create a provider instance with your settings:

```ts
import { createAzure } from '@ai-sdk/azure';

const azure = createAzure({
  resourceName: 'your-resource-name', // Azure resource name
  apiKey: 'your-api-key',
});
```

You can use the following optional settings to customize the OpenAI provider instance:

- **resourceName** *string*

  Azure resource name.
  It defaults to the `AZURE_RESOURCE_NAME` environment variable.

  The resource name is used in the assembled URL: `https://{resourceName}.openai.azure.com/openai/v1{path}`.
  You can use `baseURL` instead to specify the URL prefix.

- **apiKey** *string*

  API key that is being sent using the `api-key` header.
  It defaults to the `AZURE_API_KEY` environment variable.

- **apiVersion** *string*

  Sets a custom [api version](https://learn.microsoft.com/en-us/azure/ai-services/openai/api-version-deprecation).
  Defaults to `v1`.

- **baseURL** *string*

  Use a different URL prefix for API calls, e.g. to use proxy servers.

  Either this or `resourceName` can be used.
  When a baseURL is provided, the resourceName is ignored.

  With a baseURL, the resolved URL is `{baseURL}/v1{path}`.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

- **useDeploymentBasedUrls** *boolean*

  Use deployment-based URLs for API calls. Set to `true` to use the legacy deployment format:
  `{baseURL}/deployments/{deploymentId}{path}?api-version={apiVersion}` instead of
  `{baseURL}/v1{path}?api-version={apiVersion}`.
  Defaults to `false`.

  This option is useful for compatibility with certain Azure OpenAI models or deployments
  that require the legacy endpoint format.

## Language Models

The Azure OpenAI provider instance is a function that you can invoke to create a language model:

```ts
const model = azure('your-deployment-name');
```

You need to pass your deployment name as the first argument.

### Reasoning Models

Azure exposes the thinking of `DeepSeek-R1` in the generated text using the `<think>` tag.
You can use the `extractReasoningMiddleware` to extract this reasoning and expose it as a `reasoning` property on the result:

```ts
import { azure } from '@ai-sdk/azure';
import { wrapLanguageModel, extractReasoningMiddleware } from 'ai';

const enhancedModel = wrapLanguageModel({
  model: azure('your-deepseek-r1-deployment-name'),
  middleware: extractReasoningMiddleware({ tagName: 'think' }),
});
```

You can then use that enhanced model in functions like `generateText` and `streamText`.

### Example

You can use OpenAI language models to generate text with the `generateText` function:

```ts
import { azure } from '@ai-sdk/azure';
import { generateText } from 'ai';

const { text } = await generateText({
  model: azure('your-deployment-name'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
```

OpenAI language models can also be used in the `streamText`, `generateObject`, and `streamObject` functions
(see [AI SDK Core](/docs/ai-sdk-core)).

Azure OpenAI sends larger chunks than OpenAI. This can lead to the perception
that the response is slower. See [Troubleshooting: Azure OpenAI Slow To
Stream](/docs/troubleshooting/common-issues/azure-stream-slow)

### Provider Options

When using OpenAI language models on Azure, you can configure provider-specific options using `providerOptions.openai`. More information on available configuration options are on [the OpenAI provider page](/providers/ai-sdk-providers/openai#language-models).

```ts highlight="12-14,22-24"
const messages = [
  {
    role: 'user',
    content: [
      {
        type: 'text',
        text: 'What is the capital of the moon?',
      },
      {
        type: 'image',
        image: 'https://example.com/image.png',
        providerOptions: {
          openai: { imageDetail: 'low' },
        },
      },
    ],
  },
];

const { text } = await generateText({
  model: azure('your-deployment-name'),
  providerOptions: {
    openai: {
      reasoningEffort: 'low',
    },
  },
});
```

### Chat Models

The URL for calling Azure chat models will be constructed as follows:
`https://RESOURCE_NAME.openai.azure.com/openai/v1/chat/completions?api-version=v1`

Azure OpenAI chat models support also some model specific settings that are not part of the [standard call settings](/docs/ai-sdk-core/settings).
You can pass them as an options argument:

```ts
import { azure } from '@ai-sdk/azure';
import { generateText } from 'ai';

const result = await generateText({
  model: azure('your-deployment-name'),
  prompt: 'Write a short story about a robot.',
  providerOptions: {
    openai: {
      logitBias: {
        // optional likelihood for specific tokens
        '50256': -100,
      },
      user: 'test-user', // optional unique user identifier
    },
  },
});
```

The following optional provider options are available for OpenAI chat models:

- **logitBias** *Record\<number, number>*

  Modifies the likelihood of specified tokens appearing in the completion.

  Accepts a JSON object that maps tokens (specified by their token ID in
  the GPT tokenizer) to an associated bias value from -100 to 100. You
  can use this tokenizer tool to convert text to token IDs. Mathematically,
  the bias is added to the logits generated by the model prior to sampling.
  The exact effect will vary per model, but values between -1 and 1 should
  decrease or increase likelihood of selection; values like -100 or 100
  should result in a ban or exclusive selection of the relevant token.

  As an example, you can pass `{"50256": -100}` to prevent the token from being generated.

- **logprobs** *boolean | number*

  Return the log probabilities of the tokens. Including logprobs will increase
  the response size and can slow down response times. However, it can
  be useful to better understand how the model is behaving.

  Setting to true will return the log probabilities of the tokens that
  were generated.

  Setting to a number will return the log probabilities of the top n
  tokens that were generated.

- **parallelToolCalls** *boolean*

  Whether to enable parallel function calling during tool use. Default to true.

- **user** *string*

  A unique identifier representing your end-user, which can help OpenAI to
  monitor and detect abuse. Learn more.

### Responses Models

You can use the Azure OpenAI responses API with the `azure.responses(deploymentName)` factory method.

```ts
const model = azure.responses('your-deployment-name');
```

Further configuration can be done using OpenAI provider options.
You can validate the provider options using the `OpenAIResponsesProviderOptions` type.

```ts
import { azure, OpenAIResponsesProviderOptions } from '@ai-sdk/azure';
import { generateText } from 'ai';

const result = await generateText({
  model: azure.responses('your-deployment-name'),
  providerOptions: {
    openai: {
      parallelToolCalls: false,
      store: false,
      user: 'user_123',
      // ...
    } satisfies OpenAIResponsesProviderOptions,
  },
  // ...
});
```

The following provider options are available:

- **parallelToolCalls** *boolean*
  Whether to use parallel tool calls. Defaults to `true`.

- **store** *boolean*
  Whether to store the generation. Defaults to `true`.

- **metadata** *Record\<string, string>*
  Additional metadata to store with the generation.

- **previousResponseId** *string*
  The ID of the previous response. You can use it to continue a conversation. Defaults to `undefined`.

- **instructions** *string*
  Instructions for the model.
  They can be used to change the system or developer message when continuing a conversation using the `previousResponseId` option.
  Defaults to `undefined`.

- **user** *string*
  A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. Defaults to `undefined`.

- **reasoningEffort** *'low' | 'medium' | 'high'*
  Reasoning effort for reasoning models. Defaults to `medium`. If you use `providerOptions` to set the `reasoningEffort` option, this model setting will be ignored.

- **strictJsonSchema** *boolean*
  Whether to use strict JSON schema validation. Defaults to `false`.

The Azure OpenAI responses provider also returns provider-specific metadata:

```ts
const { providerMetadata } = await generateText({
  model: azure.responses('your-deployment-name'),
});

const openaiMetadata = providerMetadata?.openai;
```

The following OpenAI-specific metadata is returned:

- **responseId** *string*
  The ID of the response. Can be used to continue a conversation.

- **cachedPromptTokens** *number*
  The number of prompt tokens that were a cache hit.

- **reasoningTokens** *number*
  The number of reasoning tokens that the model generated.

  The providerMetadata is only returned with the default responses API, and is
  not supported when using 'azure.chat' or 'azure.completion'

#### Web Search Tool

The Azure OpenAI responses API supports web search(preview) through the `azure.tools.webSearchPreview` tool.

```ts
const result = await generateText({
  model: azure('gpt-4.1-mini'),
  prompt: 'What happened in San Francisco last week?',
  tools: {
    web_search_preview: azure.tools.webSearchPreview({
      // optional configuration:
      searchContextSize: 'low',
      userLocation: {
        type: 'approximate',
        city: 'San Francisco',
        region: 'California',
      },
    }),
  },
  // Force web search tool (optional):
  toolChoice: { type: 'tool', toolName: 'web_search_preview' },
});

console.log(result.text);

// URL sources directly from `results`
const sources = result.sources;
for (const source of sources) {
  console.log('source:', source);
}
```

The tool must be named `web_search_preview` when using Azure OpenAI's web
search(preview) functionality. This name is required by Azure OpenAI's API
specification and cannot be customized.

The 'web\_search\_preview' tool is only supported with the default responses
API, and is not supported when using 'azure.chat' or 'azure.completion'

#### File Search Tool

The Azure OpenAI responses API supports file search through the `azure.tools.fileSearch` tool.

You can force the use of the file search tool by setting the `toolChoice` parameter to `{ type: 'tool', toolName: 'file_search' }`.

```ts
const result = await generateText({
  model: azure.responses('gpt-5'),
  prompt: 'What does the document say about user authentication?',
  tools: {
    file_search: azure.tools.fileSearch({
      // optional configuration:
      vectorStoreIds: ['vs_123', 'vs_456'],
      maxNumResults: 10,
      ranking: {
        ranker: 'auto',
      },
    }),
  },
  // Force file search tool:
  toolChoice: { type: 'tool', toolName: 'file_search' },
});
```

The tool must be named `file_search` when using Azure OpenAI's file search
functionality. This name is required by Azure OpenAI's API specification and
cannot be customized.

#### Image Generation Tool

Azure OpenAI Responses API
[image\_generation](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/responses?tabs=python-secure#image-generation-preview)
is now Preview release(Not GA release).Image tool does not currently support
streaming mode. You can not use the image tool with `streamText` currently.

Azure OpenAI's Responses API supports multi-modal image generation as a provider-defined tool.
Availability is restricted to specific models (for example, `gpt-5` variants).

You can use the image tool with `generateText`.

```ts
import { createAzure } from '@ai-sdk/azure';
import { generateText } from 'ai';

const azure = createAzure({
  headers: {
    'x-ms-oai-image-generation-deployment': 'gpt-image-1', // use your own image model deployment
  },
});

const result = await generateText({
  model: azure.responses('gpt-5'),
  prompt:
    'Generate an image of an echidna swimming across the Mozambique channel.',
  tools: {
    image_generation: azure.tools.imageGeneration({ outputFormat: 'png' }),
  },
});

for (const toolResult of result.staticToolResults) {
  if (toolResult.toolName === 'image_generation') {
    const base64Image = toolResult.output.result;
  }
}
```

To use image\_generation, you must first create an image generation model. You
must add a deployment specification to the header
`x-ms-oai-image-generation-deployment`. Please note that the Responses API
model and the image generation model must be in the same resource.

When you set `store: false`, then previously generated images will not be
accessible by the model. We recommend using the image generation tool without
setting `store: false`.

#### Code Interpreter Tool

The Azure OpenAI responses API supports the code interpreter tool through the `azure.tools.codeInterpreter` tool. This allows models to write and execute Python code.

```ts
import { azure } from '@ai-sdk/azure';
import { generateText } from 'ai';

const result = await generateText({
  model: azure.responses('gpt-5'),
  prompt: 'Write and run Python code to calculate the factorial of 10',
  tools: {
    code_interpreter: azure.tools.codeInterpreter({
      // optional configuration:
      container: {
        fileIds: ['assistant-123', 'assistant-456'], // optional file IDs to make available
      },
    }),
  },
});
```

The code interpreter tool can be configured with:

- **container**: Either a container ID string or an object with `fileIds` to specify uploaded files that should be available to the code interpreter

  The tool must be named `code_interpreter` when using Azure OpenAI's code
  interpreter functionality. This name is required by Azure OpenAI's API
  specification and cannot be customized.

#### PDF support

The Azure OpenAI Responses API supports reading PDF files.
You can pass PDF files as part of the message content using the `file` type:

```ts
const result = await generateText({
  model: azure.responses('your-deployment-name'),
  messages: [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: 'What is an embedding model?',
        },
        {
          type: 'file',
          data: fs.readFileSync('./data/ai.pdf'),
          mediaType: 'application/pdf',
          filename: 'ai.pdf', // optional
        },
      ],
    },
  ],
});
```

The model will have access to the contents of the PDF file and
respond to questions about it.
The PDF file should be passed using the `data` field,
and the `mediaType` should be set to `'application/pdf'`.

### Completion Models

You can create models that call the completions API using the `.completion()` factory method.
The first argument is the model id.
Currently only `gpt-35-turbo-instruct` is supported.

```ts
const model = azure.completion('your-gpt-35-turbo-instruct-deployment');
```

OpenAI completion models support also some model specific settings that are not part of the [standard call settings](/docs/ai-sdk-core/settings).
You can pass them as an options argument:

```ts
import { azure } from '@ai-sdk/azure';
import { generateText } from 'ai';

const result = await generateText({
  model: azure.completion('your-gpt-35-turbo-instruct-deployment'),
  prompt: 'Write a haiku about coding.',
  providerOptions: {
    openai: {
      echo: true, // optional, echo the prompt in addition to the completion
      logitBias: {
        // optional likelihood for specific tokens
        '50256': -100,
      },
      suffix: 'some text', // optional suffix that comes after a completion of inserted text
      user: 'test-user', // optional unique user identifier
    },
  },
});
```

The following optional provider options are available for Azure OpenAI completion models:

- **echo**: *boolean*

  Echo back the prompt in addition to the completion.

- **logitBias** *Record\<number, number>*

  Modifies the likelihood of specified tokens appearing in the completion.

  Accepts a JSON object that maps tokens (specified by their token ID in
  the GPT tokenizer) to an associated bias value from -100 to 100. You
  can use this tokenizer tool to convert text to token IDs. Mathematically,
  the bias is added to the logits generated by the model prior to sampling.
  The exact effect will vary per model, but values between -1 and 1 should
  decrease or increase likelihood of selection; values like -100 or 100
  should result in a ban or exclusive selection of the relevant token.

  As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|>
  token from being generated.

- **logprobs** *boolean | number*

  Return the log probabilities of the tokens. Including logprobs will increase
  the response size and can slow down response times. However, it can
  be useful to better understand how the model is behaving.

  Setting to true will return the log probabilities of the tokens that
  were generated.

  Setting to a number will return the log probabilities of the top n
  tokens that were generated.

- **suffix** *string*

  The suffix that comes after a completion of inserted text.

- **user** *string*

  A unique identifier representing your end-user, which can help OpenAI to
  monitor and detect abuse. Learn more.

## Embedding Models

You can create models that call the Azure OpenAI embeddings API
using the `.textEmbedding()` factory method.

```ts
const model = azure.textEmbedding('your-embedding-deployment');
```

Azure OpenAI embedding models support several additional settings.
You can pass them as an options argument:

```ts
import { azure } from '@ai-sdk/azure';
import { embed } from 'ai';

const { embedding } = await embed({
  model: azure.textEmbedding('your-embedding-deployment'),
  value: 'sunny day at the beach',
  providerOptions: {
    openai: {
      dimensions: 512, // optional, number of dimensions for the embedding
      user: 'test-user', // optional unique user identifier
    },
  },
});
```

The following optional provider options are available for Azure OpenAI embedding models:

- **dimensions**: *number*

  The number of dimensions the resulting output embeddings should have.
  Only supported in text-embedding-3 and later models.

- **user** *string*

  A unique identifier representing your end-user, which can help OpenAI to
  monitor and detect abuse. Learn more.

## Image Models

You can create models that call the Azure OpenAI image generation API (DALL-E) using the `.image()` factory method. The first argument is your deployment name for the DALL-E model.

```ts
const model = azure.image('your-dalle-deployment-name');
```

Azure OpenAI image models support several additional settings. You can pass them as `providerOptions.openai` when generating the image:

```ts
await generateImage({
  model: azure.image('your-dalle-deployment-name'),
  prompt: 'A photorealistic image of a cat astronaut floating in space',
  size: '1024x1024', // '1024x1024', '1792x1024', or '1024x1792' for DALL-E 3
  providerOptions: {
    openai: {
      user: 'test-user', // optional unique user identifier
      responseFormat: 'url', // 'url' or 'b64_json', defaults to 'url'
    },
  },
});
```

### Example

You can use Azure OpenAI image models to generate images with the `generateImage` function:

```ts
import { azure } from '@ai-sdk/azure';
import { experimental_generateImage as generateImage } from 'ai';

const { image } = await generateImage({
  model: azure.image('your-dalle-deployment-name'),
  prompt: 'A photorealistic image of a cat astronaut floating in space',
  size: '1024x1024', // '1024x1024', '1792x1024', or '1024x1792' for DALL-E 3
});

// image contains the URL or base64 data of the generated image
console.log(image);
```

### Model Capabilities

Azure OpenAI supports DALL-E 2 and DALL-E 3 models through deployments. The capabilities depend on which model version your deployment is using:

| Model Version | Sizes                           |
| ------------- | ------------------------------- |
| DALL-E 3      | 1024x1024, 1792x1024, 1024x1792 |
| DALL-E 2      | 256x256, 512x512, 1024x1024     |

DALL-E models do not support the `aspectRatio` parameter. Use the `size`
parameter instead.

When creating your Azure OpenAI deployment, make sure to set the DALL-E model
version you want to use.

## Transcription Models

You can create models that call the Azure OpenAI transcription API using the `.transcription()` factory method.

The first argument is the model id e.g. `whisper-1`.

```ts
const model = azure.transcription('whisper-1');
```

If you encounter a "DeploymentNotFound" error with transcription models,
try enabling deployment-based URLs:

```ts
const azure = createAzure({
  useDeploymentBasedUrls: true,
  apiVersion: '2025-04-01-preview',
});
```

This uses the legacy endpoint format which may be required for certain Azure OpenAI deployments.
When using useDeploymentBasedUrls, the default api-version is not valid. You must set it to `2025-04-01-preview` or an earlier value.

You can also pass additional provider-specific options using the `providerOptions` argument. For example, supplying the input language in ISO-639-1 (e.g. `en`) format will improve accuracy and latency.

```ts highlight="6"
import { experimental_transcribe as transcribe } from 'ai';
import { azure } from '@ai-sdk/azure';
import { readFile } from 'fs/promises';

const result = await transcribe({
  model: azure.transcription('whisper-1'),
  audio: await readFile('audio.mp3'),
  providerOptions: { openai: { language: 'en' } },
});
```

The following provider options are available:

- **timestampGranularities** *string\[]*
  The granularity of the timestamps in the transcription.
  Defaults to `['segment']`.
  Possible values are `['word']`, `['segment']`, and `['word', 'segment']`.
  Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.

- **language** *string*
  The language of the input audio. Supplying the input language in ISO-639-1 format (e.g. 'en') will improve accuracy and latency.
  Optional.

- **prompt** *string*
  An optional text to guide the model's style or continue a previous audio segment. The prompt should match the audio language.
  Optional.

- **temperature** *number*
  The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
  Defaults to 0.
  Optional.

- **include** *string\[]*
  Additional information to include in the transcription response.

### Model Capabilities

| Model                    | Transcription       | Duration            | Segments            | Language            |
| ------------------------ | ------------------- | ------------------- | ------------------- | ------------------- |
| `whisper-1`              |  |  |  |  |
| `gpt-4o-mini-transcribe` |  |  |  |  |
| `gpt-4o-transcribe`      |  |  |  |  |

# Anthropic
