# Vercel Provider

The [Vercel](https://vercel.com) provider gives you access to the [v0 API](https://v0.app/docs/api/model), designed for building modern web applications. The v0 models support text and image inputs and provide fast streaming responses.

You can create your Vercel API key at [v0.dev](https://v0.dev/chat/settings/keys).

The v0 API is currently in beta and requires a Premium or Team plan with
usage-based billing enabled. For details, visit the [pricing
page](https://v0.dev/pricing). To request a higher limit, contact Vercel at
support@v0.dev.

## Features

- **Framework aware completions**: Evaluated on modern stacks like Next.js and Vercel
- **Auto-fix**: Identifies and corrects common coding issues during generation
- **Quick edit**: Streams inline edits as they're available
- **Multimodal**: Supports both text and image inputs

## Setup

The Vercel provider is available via the `@ai-sdk/vercel` module. You can install it with:

## Provider Instance

You can import the default provider instance `vercel` from `@ai-sdk/vercel`:

```ts
import { vercel } from '@ai-sdk/vercel';
```

If you need a customized setup, you can import `createVercel` from `@ai-sdk/vercel` and create a provider instance with your settings:

```ts
import { createVercel } from '@ai-sdk/vercel';

const vercel = createVercel({
  apiKey: process.env.VERCEL_API_KEY ?? '',
});
```

You can use the following optional settings to customize the Vercel provider instance:

- **baseURL** *string*

  Use a different URL prefix for API calls. The default prefix is `https://api.v0.dev/v1`.

- **apiKey** *string*

  API key that is being sent using the `Authorization` header. It defaults to
  the `VERCEL_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Language Models

You can create language models using a provider instance. The first argument is the model ID, for example:

```ts
import { vercel } from '@ai-sdk/vercel';
import { generateText } from 'ai';

const { text } = await generateText({
  model: vercel('v0-1.5-md'),
  prompt: 'Create a Next.js AI chatbot',
});
```

Vercel language models can also be used in the `streamText` function (see [AI SDK Core](/docs/ai-sdk-core)).

## Models

### v0-1.5-md

The `v0-1.5-md` model is for everyday tasks and UI generation.

### v0-1.5-lg

The `v0-1.5-lg` model is for advanced thinking or reasoning.

### v0-1.0-md (legacy)

The `v0-1.0-md` model is the legacy model served by the v0 API.

All v0 models have the following capabilities:

- Supports text and image inputs (multimodal)
- Supports function/tool calls
- Streaming responses with low latency
- Optimized for frontend and full-stack web development

## Model Capabilities

| Model       | Image Input         | Object Generation   | Tool Usage          | Tool Streaming      |
| ----------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `v0-1.5-md` |  |  |  |  |
| `v0-1.5-lg` |  |  |  |  |
| `v0-1.0-md` |  |  |  |  |

# OpenAI

# OpenAI Provider

The [OpenAI](https://openai.com/) provider contains language model support for the OpenAI responses, chat, and completion APIs, as well as embedding model support for the OpenAI embeddings API.

## Setup

The OpenAI provider is available in the `@ai-sdk/openai` module. You can install it with

## Provider Instance

You can import the default provider instance `openai` from `@ai-sdk/openai`:

```ts
import { openai } from '@ai-sdk/openai';
```

If you need a customized setup, you can import `createOpenAI` from `@ai-sdk/openai` and create a provider instance with your settings:

```ts
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  // custom settings, e.g.
  headers: {
    'header-name': 'header-value',
  },
});
```

You can use the following optional settings to customize the OpenAI provider instance:

- **baseURL** *string*

  Use a different URL prefix for API calls, e.g. to use proxy servers.
  The default prefix is `https://api.openai.com/v1`.

- **apiKey** *string*

  API key that is being sent using the `Authorization` header.
  It defaults to the `OPENAI_API_KEY` environment variable.

- **name** *string*

  The provider name. You can set this when using OpenAI compatible providers
  to change the model provider property. Defaults to `openai`.

- **organization** *string*

  OpenAI Organization.

- **project** *string*

  OpenAI project.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Language Models

The OpenAI provider instance is a function that you can invoke to create a language model:

```ts
const model = openai('gpt-5');
```

It automatically selects the correct API based on the model id.
You can also pass additional settings in the second argument:

```ts
const model = openai('gpt-5', {
  // additional settings
});
```

The available options depend on the API that's automatically chosen for the model (see below).
If you want to explicitly select a specific model API, you can use `.responses`, `.chat`, or `.completion`.

Since AI SDK 5, the OpenAI responses API is called by default (unless you
specify e.g. 'openai.chat')

### Example

You can use OpenAI language models to generate text with the `generateText` function:

```ts
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

const { text } = await generateText({
  model: openai('gpt-5'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
```

OpenAI language models can also be used in the `streamText` function
and support structured data generation with [`Output`](/docs/reference/ai-sdk-core/output)
(see [AI SDK Core](/docs/ai-sdk-core)).
