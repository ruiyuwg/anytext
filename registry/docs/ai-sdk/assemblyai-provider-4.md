# AssemblyAI Provider

The [AssemblyAI](https://assemblyai.com/) provider contains language model support for the AssemblyAI transcription API.

## Setup

The AssemblyAI provider is available in the `@ai-sdk/assemblyai` module. You can install it with

## Provider Instance

You can import the default provider instance `assemblyai` from `@ai-sdk/assemblyai`:

```ts
import { assemblyai } from '@ai-sdk/assemblyai';
```

If you need a customized setup, you can import `createAssemblyAI` from `@ai-sdk/assemblyai` and create a provider instance with your settings:

```ts
import { createAssemblyAI } from '@ai-sdk/assemblyai';

const assemblyai = createAssemblyAI({
  // custom settings, e.g.
  fetch: customFetch,
});
```

You can use the following optional settings to customize the AssemblyAI provider instance:

- **apiKey** *string*

  API key that is being sent using the `Authorization` header.
  It defaults to the `ASSEMBLYAI_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Transcription Models

You can create models that call the [AssemblyAI transcription API](https://www.assemblyai.com/docs/getting-started/transcribe-an-audio-file/typescript)
using the `.transcription()` factory method.

The first argument is the model id e.g. `best`.

```ts
const model = assemblyai.transcription('best');
```

You can also pass additional provider-specific options using the `providerOptions` argument. For example, supplying the `contentSafety` option will enable content safety filtering.

```ts highlight="7"
import { experimental_transcribe as transcribe } from 'ai';
import { assemblyai } from '@ai-sdk/assemblyai';
import { type AssemblyAITranscriptionModelOptions } from '@ai-sdk/assemblyai';
import { readFile } from 'fs/promises';

const result = await transcribe({
  model: assemblyai.transcription('best'),
  audio: await readFile('audio.mp3'),
  providerOptions: {
    assemblyai: {
      contentSafety: true,
    } satisfies AssemblyAITranscriptionModelOptions,
  },
});
```

The following provider options are available:

- **audioEndAt** *number*

  End time of the audio in milliseconds.
  Optional.

- **audioStartFrom** *number*

  Start time of the audio in milliseconds.
  Optional.

- **autoChapters** *boolean*

  Whether to automatically generate chapters for the transcription.
  Optional.

- **autoHighlights** *boolean*

  Whether to automatically generate highlights for the transcription.
  Optional.

- **boostParam** *enum*

  Boost parameter for the transcription.
  Allowed values: `'low'`, `'default'`, `'high'`.
  Optional.

- **contentSafety** *boolean*

  Whether to enable content safety filtering.
  Optional.

- **contentSafetyConfidence** *number*

  Confidence threshold for content safety filtering (25-100).
  Optional.

- **customSpelling** *array of objects*

  Custom spelling rules for the transcription.
  Each object has `from` (array of strings) and `to` (string) properties.
  Optional.

- **disfluencies** *boolean*

  Whether to include disfluencies (um, uh, etc.) in the transcription.
  Optional.

- **entityDetection** *boolean*

  Whether to detect entities in the transcription.
  Optional.

- **filterProfanity** *boolean*

  Whether to filter profanity in the transcription.
  Optional.

- **formatText** *boolean*

  Whether to format the text in the transcription.
  Optional.

- **iabCategories** *boolean*

  Whether to include IAB categories in the transcription.
  Optional.

- **languageCode** *string*

  Language code for the audio.
  Supports numerous ISO-639-1 and ISO-639-3 language codes.
  Optional.

- **languageConfidenceThreshold** *number*

  Confidence threshold for language detection.
  Optional.

- **languageDetection** *boolean*

  Whether to enable language detection.
  Optional.

- **multichannel** *boolean*

  Whether to process multiple audio channels separately.
  Optional.

- **punctuate** *boolean*

  Whether to add punctuation to the transcription.
  Optional.

- **redactPii** *boolean*

  Whether to redact personally identifiable information.
  Optional.

- **redactPiiAudio** *boolean*

  Whether to redact PII in the audio file.
  Optional.

- **redactPiiAudioQuality** *enum*

  Quality of the redacted audio file.
  Allowed values: `'mp3'`, `'wav'`.
  Optional.

- **redactPiiPolicies** *array of enums*

  Policies for PII redaction, specifying which types of information to redact.
  Supports numerous types like `'person_name'`, `'phone_number'`, etc.
  Optional.

- **redactPiiSub** *enum*

  Substitution method for redacted PII.
  Allowed values: `'entity_name'`, `'hash'`.
  Optional.

- **sentimentAnalysis** *boolean*

  Whether to perform sentiment analysis on the transcription.
  Optional.

- **speakerLabels** *boolean*

  Whether to label different speakers in the transcription.
  Optional.

- **speakersExpected** *number*

  Expected number of speakers in the audio.
  Optional.

- **speechThreshold** *number*

  Threshold for speech detection (0-1).
  Optional.

- **summarization** *boolean*

  Whether to generate a summary of the transcription.
  Optional.

- **summaryModel** *enum*

  Model to use for summarization.
  Allowed values: `'informative'`, `'conversational'`, `'catchy'`.
  Optional.

- **summaryType** *enum*

  Type of summary to generate.
  Allowed values: `'bullets'`, `'bullets_verbose'`, `'gist'`, `'headline'`, `'paragraph'`.
  Optional.

- **webhookAuthHeaderName** *string*

  Name of the authentication header for webhook requests.
  Optional.

- **webhookAuthHeaderValue** *string*

  Value of the authentication header for webhook requests.
  Optional.

- **webhookUrl** *string*

  URL to send webhook notifications to.
  Optional.

- **wordBoost** *array of strings*

  List of words to boost in the transcription.
  Optional.

### Model Capabilities

| Model  | Transcription       | Duration            | Segments            | Language            |
| ------ | ------------------- | ------------------- | ------------------- | ------------------- |
| `best` |  |  |  |  |
| `nano` |  |  |  |  |

# DeepInfra
