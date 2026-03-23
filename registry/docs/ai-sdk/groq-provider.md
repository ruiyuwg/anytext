# Groq Provider

The [Groq](https://groq.com/) provider contains language model support for the Groq API.

## Setup

The Groq provider is available via the `@ai-sdk/groq` module.
You can install it with

## Provider Instance

You can import the default provider instance `groq` from `@ai-sdk/groq`:

```ts
import { groq } from '@ai-sdk/groq';
```

If you need a customized setup, you can import `createGroq` from `@ai-sdk/groq`
and create a provider instance with your settings:

```ts
import { createGroq } from '@ai-sdk/groq';

const groq = createGroq({
  // custom settings
});
```

You can use the following optional settings to customize the Groq provider instance:

- **baseURL** *string*

  Use a different URL prefix for API calls, e.g. to use proxy servers.
  The default prefix is `https://api.groq.com/openai/v1`.

- **apiKey** *string*

  API key that is being sent using the `Authorization` header.
  It defaults to the `GROQ_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Language Models

You can create [Groq models](https://console.groq.com/docs/models) using a provider instance.
The first argument is the model id, e.g. `gemma2-9b-it`.

```ts
const model = groq('gemma2-9b-it');
```

### Reasoning Models

Groq offers several reasoning models such as `qwen-qwq-32b` and `deepseek-r1-distill-llama-70b`.
You can configure how the reasoning is exposed in the generated text by using the `reasoningFormat` option.
It supports the options `parsed`, `hidden`, and `raw`.

```ts
import { groq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const result = await generateText({
  model: groq('qwen-qwq-32b'),
  providerOptions: {
    groq: { reasoningFormat: 'parsed' },
  },
  prompt: 'How many "r"s are in the word "strawberry"?',
});
```

Only Groq reasoning models support the `reasoningFormat` option.

### Example

You can use Groq language models to generate text with the `generateText` function:

```ts
import { groq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const { text } = await generateText({
  model: groq('gemma2-9b-it'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
```

## Model Capabilities

| Model                                       | Image Input         | Object Generation   | Tool Usage          | Tool Streaming      |
| ------------------------------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `meta-llama/llama-4-scout-17b-16e-instruct` |  |  |  |  |
| `gemma2-9b-it`                              |  |  |  |  |
| `llama-3.3-70b-versatile`                   |  |  |  |  |
| `llama-3.1-8b-instant`                      |  |  |  |  |
| `llama-guard-3-8b`                          |  |  |  |  |
| `llama3-70b-8192`                           |  |  |  |  |
| `llama3-8b-8192`                            |  |  |  |  |
| `mixtral-8x7b-32768`                        |  |  |  |  |
| `qwen-qwq-32b`                              |  |  |  |  |
| `mistral-saba-24b`                          |  |  |  |  |
| `qwen-2.5-32b`                              |  |  |  |  |
| `deepseek-r1-distill-qwen-32b`              |  |  |  |  |
| `deepseek-r1-distill-llama-70b`             |  |  |  |  |

The table above lists popular models. Please see the [Groq
docs](https://console.groq.com/docs/models) for a full list of available
models. The table above lists popular models. You can also pass any available
provider model ID as a string if needed.

## Transcription Models

You can create models that call the [Groq transcription API](https://console.groq.com/docs/speech-to-text)
using the `.transcription()` factory method.

The first argument is the model id e.g. `whisper-large-v3`.

```ts
const model = groq.transcription('whisper-large-v3');
```

You can also pass additional provider-specific options using the `providerOptions` argument. For example, supplying the input language in ISO-639-1 (e.g. `en`) format will improve accuracy and latency.

```ts highlight="6"
import { experimental_transcribe as transcribe } from 'ai';
import { groq } from '@ai-sdk/groq';
import { readFile } from 'fs/promises';

const result = await transcribe({
  model: groq.transcription('whisper-large-v3'),
  audio: await readFile('audio.mp3'),
  providerOptions: { groq: { language: 'en' } },
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

### Model Capabilities

| Model                        | Transcription       | Duration            | Segments            | Language            |
| ---------------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `whisper-large-v3`           |  |  |  |  |
| `whisper-large-v3-turbo`     |  |  |  |  |
| `distil-whisper-large-v3-en` |  |  |  |  |

# Fal
