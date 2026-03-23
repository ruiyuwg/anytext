# Hume Provider

The [Hume](https://hume.ai/) provider contains language model support for the Hume transcription API.

## Setup

The Hume provider is available in the `@ai-sdk/hume` module. You can install it with

## Provider Instance

You can import the default provider instance `hume` from `@ai-sdk/hume`:

```ts
import { hume } from '@ai-sdk/hume';
```

If you need a customized setup, you can import `createHume` from `@ai-sdk/hume` and create a provider instance with your settings:

```ts
import { createHume } from '@ai-sdk/hume';

const hume = createHume({
  // custom settings, e.g.
  fetch: customFetch,
});
```

You can use the following optional settings to customize the Hume provider instance:

- **apiKey** *string*

  API key that is being sent using the `Authorization` header.
  It defaults to the `HUME_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Speech Models

You can create models that call the [Hume speech API](https://dev.hume.ai/docs/text-to-speech-tts/overview)
using the `.speech()` factory method.

```ts
const model = hume.speech();
```

You can also pass additional provider-specific options using the `providerOptions` argument. For example, supplying a voice to use for the generated audio.

```ts highlight="6"
import { experimental_generateSpeech as generateSpeech } from 'ai';
import { hume } from '@ai-sdk/hume';

const result = await generateSpeech({
  model: hume.speech(),
  text: 'Hello, world!',
  voice: 'd8ab67c6-953d-4bd8-9370-8fa53a0f1453',
  providerOptions: { hume: {} },
});
```

The following provider options are available:

- **context** *object*

  Either:

  - `{ generationId: string }` - A generation ID to use for context.
  - `{ utterances: HumeUtterance[] }` - An array of utterance objects for context.

### Model Capabilities

| Model     | Instructions        |
| --------- | ------------------- |
| `default` |  |

# Google Vertex AI

# Google Vertex Provider

The Google Vertex provider for the [AI SDK](/docs) contains language model support for the [Google Vertex AI](https://cloud.google.com/vertex-ai) APIs. This includes support for [Google's Gemini models](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models) and [Anthropic's Claude partner models](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude).

The Google Vertex provider is compatible with both Node.js and Edge runtimes.
The Edge runtime is supported through the `@ai-sdk/google-vertex/edge`
sub-module. More details can be found in the [Google Vertex Edge
Runtime](#google-vertex-edge-runtime) and [Google Vertex Anthropic Edge
Runtime](#google-vertex-anthropic-edge-runtime) sections below.

## Setup

The Google Vertex and Google Vertex Anthropic providers are both available in the `@ai-sdk/google-vertex` module. You can install it with

```
<Snippet
  text="yarn add @ai-sdk/google-vertex @google-cloud/vertexai"
  dark
/>



```
