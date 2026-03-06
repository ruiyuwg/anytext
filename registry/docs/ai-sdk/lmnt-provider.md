# LMNT Provider

The [LMNT](https://lmnt.com/) provider contains speech model support for the LMNT speech synthesis API.

## Setup

The LMNT provider is available in the `@ai-sdk/lmnt` module. You can install it with

## Provider Instance

You can import the default provider instance `lmnt` from `@ai-sdk/lmnt`:

```ts
import { lmnt } from '@ai-sdk/lmnt';
```

If you need a customized setup, you can import `createLMNT` from `@ai-sdk/lmnt` and create a provider instance with your settings:

```ts
import { createLMNT } from '@ai-sdk/lmnt';

const lmnt = createLMNT({
  // custom settings, e.g.
  fetch: customFetch,
});
```

You can use the following optional settings to customize the LMNT provider instance:

- **apiKey** *string*

  API key that is being sent using the `Authorization` header.
  It defaults to the `LMNT_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Speech Models

You can create models that call the [LMNT speech API](https://docs.lmnt.com/api-reference/speech/synthesize-speech-bytes)
using the `.speech()` factory method.

The first argument is the model id e.g. `aurora`.

```ts
const model = lmnt.speech('aurora');
```

The `voice` parameter can be set to a voice ID from LMNT. You can find available voices in the [LMNT documentation](https://docs.lmnt.com/api-reference/voices/list-voices).

```ts highlight="7"
import { experimental_generateSpeech as generateSpeech } from 'ai';
import { lmnt } from '@ai-sdk/lmnt';

const result = await generateSpeech({
  model: lmnt.speech('aurora'),
  text: 'Hello, world!',
  voice: 'ava',
  language: 'en',
});
```

You can also pass additional provider-specific options using the `providerOptions` argument:

```ts highlight="10-14"
import { experimental_generateSpeech as generateSpeech } from 'ai';
import { lmnt } from '@ai-sdk/lmnt';
import { type LMNTSpeechModelOptions } from '@ai-sdk/lmnt';

const result = await generateSpeech({
  model: lmnt.speech('aurora'),
  text: 'Hello, world!',
  voice: 'ava',
  language: 'en',
  providerOptions: {
    lmnt: {
      conversational: true,
      speed: 1.2,
    } satisfies LMNTSpeechModelOptions,
  },
});
```

### Provider Options

The LMNT provider accepts the following options via `providerOptions.lmnt`:

- **format** *'aac' | 'mp3' | 'mulaw' | 'raw' | 'wav'*

  The audio format to return. Defaults to `'mp3'`.

- **sampleRate** *8000 | 16000 | 24000*

  The sample rate of the audio in Hz. Defaults to `24000`.

- **speed** *number*

  The speed of the speech. Must be between 0.25 and 2. Defaults to `1`.

- **seed** *number*

  An optional seed for deterministic generation.

- **conversational** *boolean*

  Whether to use a conversational style. Defaults to `false`. Does not work with the `blizzard` model.

- **length** *number*

  Maximum length of the audio in seconds. Maximum value is 300. Does not work with the `blizzard` model.

- **topP** *number*

  Top-p sampling parameter. Must be between 0 and 1. Defaults to `1`.

- **temperature** *number*

  Temperature parameter for sampling. Must be at least 0. Defaults to `1`.

### Model Capabilities

| Model      | Instructions        |
| ---------- | ------------------- |
| `aurora`   |  |
| `blizzard` |  |

# Google Generative AI Provider

The [Google Generative AI](https://ai.google.dev) provider contains language and embedding model support for
the [Google Generative AI](https://ai.google.dev/api/rest) APIs.

## Setup

The Google provider is available in the `@ai-sdk/google` module. You can install it with

## Provider Instance

You can import the default provider instance `google` from `@ai-sdk/google`:

```ts
import { google } from '@ai-sdk/google';
```

If you need a customized setup, you can import `createGoogleGenerativeAI` from `@ai-sdk/google` and create a provider instance with your settings:

```ts
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  // custom settings
});
```

You can use the following optional settings to customize the Google Generative AI provider instance:

- **baseURL** *string*

  Use a different URL prefix for API calls, e.g. to use proxy servers.
  The default prefix is `https://generativelanguage.googleapis.com/v1beta`.

- **apiKey** *string*

  API key that is being sent using the `x-goog-api-key` header.
  It defaults to the `GOOGLE_GENERATIVE_AI_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

- **generateId** *() => string*

  Optional function to generate unique IDs for each request.
  Defaults to the SDK's built-in ID generator.

- **name** *string*

  Custom provider name.
  Defaults to `'google.generative-ai'`.
