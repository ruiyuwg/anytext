# Deepgram Provider

The [Deepgram](https://deepgram.com/) provider contains language model support for the Deepgram transcription and speech generation APIs.

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

## Speech Models

You can create models that call the [Deepgram text-to-speech API](https://developers.deepgram.com/docs/text-to-speech)
using the `.speech()` factory method.

The first argument is the model id, which includes the voice. Deepgram embeds the voice directly in the model ID (e.g., `aura-2-helena-en`).

```ts
const model = deepgram.speech('aura-2-helena-en');
```

You can use the model with the `generateSpeech` function:

```ts
import { experimental_generateSpeech as generateSpeech } from 'ai';
import { deepgram } from '@ai-sdk/deepgram';

const result = await generateSpeech({
  model: deepgram.speech('aura-2-helena-en'),
  text: 'Hello, world!',
});
```

You can also pass additional provider-specific options using the `providerOptions` argument:

```ts highlight="7-11"
import { experimental_generateSpeech as generateSpeech } from 'ai';
import { deepgram, type DeepgramSpeechModelOptions } from '@ai-sdk/deepgram';

const result = await generateSpeech({
  model: deepgram.speech('aura-2-helena-en'),
  text: 'Hello, world!',
  providerOptions: {
    deepgram: {
      encoding: 'linear16',
      sampleRate: 24000,
    } satisfies DeepgramSpeechModelOptions,
  },
});
```

The following provider options are available:

- **encoding** *string*

  Encoding type for the audio output.
  Supported values: `'linear16'`, `'mulaw'`, `'alaw'`, `'mp3'`, `'opus'`, `'flac'`, `'aac'`.
  Optional.

- **container** *string*

  Container format for the output audio.
  Supported values: `'wav'`, `'ogg'`, `'none'`.
  Optional.

- **sampleRate** *number*

  Sample rate for the output audio in Hz.
  Supported values depend on the encoding: `8000`, `16000`, `24000`, `32000`, `48000`.
  Optional.

- **bitRate** *number | string*

  Bitrate of the audio in bits per second.
  For `mp3`: `32000` or `48000`.
  For `opus`: `4000` to `650000`.
  For `aac`: `4000` to `192000`.
  Optional.

- **callback** *string*

  URL to which Deepgram will make a callback request with the audio.
  Optional.

- **callbackMethod** *enum*

  HTTP method for the callback request.
  Allowed values: `'POST'`, `'PUT'`.
  Optional.

- **mipOptOut** *boolean*

  Opts out requests from the Deepgram Model Improvement Program.
  Optional.

- **tag** *string | array of strings*

  Label your requests for identification during usage reporting.
  Optional.

### Model Capabilities

| Model                                                            |
| ---------------------------------------------------------------- |
| `aura-2-asteria-en`                                              |
| `aura-2-thalia-en`                                               |
| `aura-2-helena-en`                                               |
| `aura-2-orpheus-en`                                              |
| `aura-2-zeus-en`                                                 |
| `aura-asteria-en`                                                |
| `aura-luna-en`                                                   |
| `aura-stella-en`                                                 |
| [+ more voices](https://developers.deepgram.com/docs/tts-models) |

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
import {
  deepgram,
  type DeepgramTranscriptionModelOptions,
} from '@ai-sdk/deepgram';
import { readFile } from 'fs/promises';

const result = await transcribe({
  model: deepgram.transcription('nova-3'),
  audio: await readFile('audio.mp3'),
  providerOptions: {
    deepgram: {
      summarize: true,
    } satisfies DeepgramTranscriptionModelOptions,
  },
});
```

The following provider options are available:

- **language** *string*

  Language code for the audio.
  Supports numerous ISO-639-1 and ISO-639-3 language codes.
  Optional.

- **detectLanguage** *boolean*

  Whether to enable automatic language detection.
  When true, Deepgram will detect the language of the audio.
  Optional.

- **smartFormat** *boolean*

  Whether to apply smart formatting to the transcription.
  Optional.

- **punctuate** *boolean*

  Whether to add punctuation to the transcription.
  Optional.

- **summarize** *enum | boolean*

  Whether to generate a summary of the transcription.
  Allowed values: `'v2'`, `false`.
  Optional.

- **topics** *boolean*

  Whether to detect topics in the transcription.
  Optional.

- **detectEntities** *boolean*

  Whether to detect entities in the transcription.
  Optional.

- **redact** *string | array of strings*

  Specifies what content to redact from the transcription.
  Optional.

- **search** *string*

  Search term to find in the transcription.
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

# Black Forest Labs
