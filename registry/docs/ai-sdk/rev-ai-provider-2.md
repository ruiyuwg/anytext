# Rev.ai Provider

The [Rev.ai](https://www.rev.ai/) provider contains language model support for the Rev.ai transcription API.

## Setup

The Rev.ai provider is available in the `@ai-sdk/revai` module. You can install it with

## Provider Instance

You can import the default provider instance `revai` from `@ai-sdk/revai`:

```ts
import { revai } from '@ai-sdk/revai';
```

If you need a customized setup, you can import `createRevai` from `@ai-sdk/revai` and create a provider instance with your settings:

```ts
import { createRevai } from '@ai-sdk/revai';

const revai = createRevai({
  // custom settings, e.g.
  fetch: customFetch,
});
```

You can use the following optional settings to customize the Rev.ai provider instance:

- **apiKey** *string*

  API key that is being sent using the `Authorization` header.
  It defaults to the `REVAI_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Transcription Models

You can create models that call the [Rev.ai transcription API](https://www.rev.ai/docs/api/transcription)
using the `.transcription()` factory method.

The first argument is the model id e.g. `machine`.

```ts
const model = revai.transcription('machine');
```

You can also pass additional provider-specific options using the `providerOptions` argument. For example, supplying the input language in ISO-639-1 (e.g. `en`) format can sometimes improve transcription performance if known beforehand.

```ts highlight="6"
import { experimental_transcribe as transcribe } from 'ai';
import { revai } from '@ai-sdk/revai';
import { readFile } from 'fs/promises';

const result = await transcribe({
  model: revai.transcription('machine'),
  audio: await readFile('audio.mp3'),
  providerOptions: { revai: { language: 'en' } },
});
```

The following provider options are available:

- **metadata** *string*

  Optional metadata that was provided during job submission.

- **notification\_config** *object*

  Optional configuration for a callback url to invoke when processing is complete.

  - **url** *string* - Callback url to invoke when processing is complete.
  - **auth\_headers** *object* - Optional authorization headers, if needed to invoke the callback.
    - **Authorization** *string* - Authorization header value.

- **delete\_after\_seconds** *integer*

  Amount of time after job completion when job is auto-deleted.

- **verbatim** *boolean*

  Configures the transcriber to transcribe every syllable, including all false starts and disfluencies.

- **rush** *boolean*

  \[HIPAA Unsupported] Only available for human transcriber option. When set to true, your job is given higher priority.

- **skip\_diarization** *boolean*

  Specify if speaker diarization will be skipped by the speech engine.

- **skip\_postprocessing** *boolean*

  Only available for English and Spanish languages. User-supplied preference on whether to skip post-processing operations.

- **skip\_punctuation** *boolean*

  Specify if "punct" type elements will be skipped by the speech engine.

- **remove\_disfluencies** *boolean*

  When set to true, disfluencies (like 'ums' and 'uhs') will not appear in the transcript.

- **remove\_atmospherics** *boolean*

  When set to true, atmospherics (like `<laugh>`, `<affirmative>`) will not appear in the transcript.

- **filter\_profanity** *boolean*

  When enabled, profanities will be filtered by replacing characters with asterisks except for the first and last.

- **speaker\_channels\_count** *integer*

  Only available for English, Spanish and French languages. Specify the total number of unique speaker channels in the audio.

- **speakers\_count** *integer*

  Only available for English, Spanish and French languages. Specify the total number of unique speakers in the audio.

- **diarization\_type** *string*

  Specify diarization type. Possible values: "standard" (default), "premium".

- **custom\_vocabulary\_id** *string*

  Supply the id of a pre-completed custom vocabulary submitted through the Custom Vocabularies API.

- **custom\_vocabularies** *Array*

  Specify a collection of custom vocabulary to be used for this job.

- **strict\_custom\_vocabulary** *boolean*

  If true, only exact phrases will be used as custom vocabulary.

- **summarization\_config** *object*

  Specify summarization options.

  - **model** *string* - Model type for summarization. Possible values: "standard" (default), "premium".
  - **type** *string* - Summarization formatting type. Possible values: "paragraph" (default), "bullets".
  - **prompt** *string* - Custom prompt for flexible summaries (mutually exclusive with type).

- **translation\_config** *object*

  Specify translation options.

  - **target\_languages** *Array* - Array of target languages for translation.
  - **model** *string* - Model type for translation. Possible values: "standard" (default), "premium".

- **language** *string*

  Language is provided as a ISO 639-1 language code. Default is "en".

- **forced\_alignment** *boolean*

  When enabled, provides improved accuracy for per-word timestamps for a transcript.
  Default is `false`.

  Currently supported languages:

  - English (en, en-us, en-gb)
  - French (fr)
  - Italian (it)
  - German (de)
  - Spanish (es)

  Note: This option is not available in low-cost environment.

### Model Capabilities

| Model      | Transcription       | Duration            | Segments            | Language            |
| ---------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `machine`  |  |  |  |  |
| `low_cost` |  |  |  |  |
| `fusion`   |  |  |  |  |

# Baseten
