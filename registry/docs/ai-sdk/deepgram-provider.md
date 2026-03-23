# Deepgram Provider

The [Deepgram](https://deepgram.com/) provider contains language model support for the Deepgram transcription API.

## Setup

The Deepgram provider is available in the `@ai-sdk/deepgram` module. You can install it with

## Provider Instance

You can import the default provider instance `deepgram` from `@ai-sdk/deepgram`:

```ts
import { deepgram } from '@ai-sdk/deepgram';
```

If you need a customized setup, you can import `createDeepgram` from `@ai-sdk/deepgram` and create a provider instance with your settings:

```ts
import { createDeepgram } from '@ai-sdk/deepgram';

const deepgram = createDeepgram({
  // custom settings, e.g.
  fetch: customFetch,
});
```

You can use the following optional settings to customize the Deepgram provider instance:

- **apiKey** *string*

  API key that is being sent using the `Authorization` header.
  It defaults to the `DEEPGRAM_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Transcription Models

You can create models that call the [Deepgram transcription API](https://developers.deepgram.com/docs/pre-recorded-audio)
using the `.transcription()` factory method.

The first argument is the model id e.g. `nova-3`.

```ts
const model = deepgram.transcription('nova-3');
```

You can also pass additional provider-specific options using the `providerOptions` argument. For example, supplying the `summarize` option will enable summaries for sections of content.

```ts highlight="6"
import { experimental_transcribe as transcribe } from 'ai';
import { deepgram } from '@ai-sdk/deepgram';
import { readFile } from 'fs/promises';

const result = await transcribe({
  model: deepgram.transcription('nova-3'),
  audio: await readFile('audio.mp3'),
  providerOptions: { deepgram: { summarize: true } },
});
```

The following provider options are available:

- **language** *string*

  Language code for the audio.
  Supports numerous ISO-639-1 and ISO-639-3 language codes.
  Optional.

- **smartFormat** *boolean*

  Whether to apply smart formatting to the transcription.
  Optional.

- **punctuate** *boolean*

  Whether to add punctuation to the transcription.
  Optional.

- **paragraphs** *boolean*

  Whether to format the transcription into paragraphs.
  Optional.

- **summarize** *enum | boolean*

  Whether to generate a summary of the transcription.
  Allowed values: `'v2'`, `false`.
  Optional.

- **topics** *boolean*

  Whether to detect topics in the transcription.
  Optional.

- **intents** *boolean*

  Whether to detect intents in the transcription.
  Optional.

- **sentiment** *boolean*

  Whether to perform sentiment analysis on the transcription.
  Optional.

- **detectEntities** *boolean*

  Whether to detect entities in the transcription.
  Optional.

- **redact** *string | array of strings*

  Specifies what content to redact from the transcription.
  Optional.

- **replace** *string*

  Replacement string for redacted content.
  Optional.

- **search** *string*

  Search term to find in the transcription.
  Optional.

- **keyterm** *string*

  Key terms to identify in the transcription.
  Optional.

- **diarize** *boolean*

  Whether to identify different speakers in the transcription.
  Defaults to `true`.
  Optional.

- **utterances** *boolean*

  Whether to segment the transcription into utterances.
  Optional.

- **uttSplit** *number*

  Threshold for splitting utterances.
  Optional.

- **fillerWords** *boolean*

  Whether to include filler words (um, uh, etc.) in the transcription.
  Optional.

### Model Capabilities

| Model                                                                                              | Transcription       | Duration            | Segments            | Language            |
| -------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `nova-3` (+ [variants](https://developers.deepgram.com/docs/models-languages-overview#nova-3))     |  |  |  |  |
| `nova-2` (+ [variants](https://developers.deepgram.com/docs/models-languages-overview#nova-2))     |  |  |  |  |
| `nova` (+ [variants](https://developers.deepgram.com/docs/models-languages-overview#nova))         |  |  |  |  |
| `enhanced` (+ [variants](https://developers.deepgram.com/docs/models-languages-overview#enhanced)) |  |  |  |  |
| `base` (+ [variants](https://developers.deepgram.com/docs/models-languages-overview#base))         |  |  |  |  |

# Gladia
