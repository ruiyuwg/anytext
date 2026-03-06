# Gladia Provider

The [Gladia](https://gladia.io/) provider contains language model support for the Gladia transcription API.

## Setup

The Gladia provider is available in the `@ai-sdk/gladia` module. You can install it with

## Provider Instance

You can import the default provider instance `gladia` from `@ai-sdk/gladia`:

```ts
import { gladia } from '@ai-sdk/gladia';
```

If you need a customized setup, you can import `createGladia` from `@ai-sdk/gladia` and create a provider instance with your settings:

```ts
import { createGladia } from '@ai-sdk/gladia';

const gladia = createGladia({
  // custom settings, e.g.
  fetch: customFetch,
});
```

You can use the following optional settings to customize the Gladia provider instance:

- **apiKey** *string*

  API key that is being sent using the `Authorization` header.
  It defaults to the `GLADIA_API_KEY` environment variable.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  Defaults to the global `fetch` function.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Transcription Models

You can create models that call the [Gladia transcription API](https://docs.gladia.io/chapters/pre-recorded-stt/getting-started)
using the `.transcription()` factory method.

```ts
const model = gladia.transcription();
```

You can also pass additional provider-specific options using the `providerOptions` argument. For example, supplying the `summarize` option will enable summaries for sections of content.

```ts highlight="7"
import { experimental_transcribe as transcribe } from 'ai';
import { gladia } from '@ai-sdk/gladia';
import { type GladiaTranscriptionModelOptions } from '@ai-sdk/gladia';
import { readFile } from 'fs/promises';

const result = await transcribe({
  model: gladia.transcription(),
  audio: await readFile('audio.mp3'),
  providerOptions: {
    gladia: {
      summarization: true,
    } satisfies GladiaTranscriptionModelOptions,
  },
});
```

Gladia does not have various models, so you can omit the standard `model` id
parameter.

The following provider options are available:

- **contextPrompt** *string*

  Context to feed the transcription model with for possible better accuracy.
  Optional.

- **customVocabulary** *boolean | any\[]*

  Custom vocabulary to improve transcription accuracy.
  Optional.

- **customVocabularyConfig** *object*

  Configuration for custom vocabulary.
  Optional.

  - **vocabulary** *Array\<string | { value: string, intensity?: number, pronunciations?: string\[], language?: string }>*
  - **defaultIntensity** *number*

- **detectLanguage** *boolean*

  Whether to automatically detect the language.
  Optional.

- **enableCodeSwitching** *boolean*

  Enable code switching for multilingual audio.
  Optional.

- **codeSwitchingConfig** *object*

  Configuration for code switching.
  Optional.

  - **languages** *string\[]*

- **language** *string*

  Specify the language of the audio.
  Optional.

- **callback** *boolean*

  Enable callback when transcription is complete.
  Optional.

- **callbackConfig** *object*

  Configuration for callback.
  Optional.

  - **url** *string*
  - **method** *'POST' | 'PUT'*

- **subtitles** *boolean*

  Generate subtitles from the transcription.
  Optional.

- **subtitlesConfig** *object*

  Configuration for subtitles.
  Optional.

  - **formats** *Array<'srt' | 'vtt'>*
  - **minimumDuration** *number*
  - **maximumDuration** *number*
  - **maximumCharactersPerRow** *number*
  - **maximumRowsPerCaption** *number*
  - **style** *'default' | 'compliance'*

- **diarization** *boolean*

  Enable speaker diarization.
  Optional.

- **diarizationConfig** *object*

  Configuration for diarization.
  Optional.

  - **numberOfSpeakers** *number*
  - **minSpeakers** *number*
  - **maxSpeakers** *number*
  - **enhanced** *boolean*

- **translation** *boolean*

  Enable translation of the transcription.
  Optional.

- **translationConfig** *object*

  Configuration for translation.
  Optional.

  - **targetLanguages** *string\[]*
  - **model** *'base' | 'enhanced'*
  - **matchOriginalUtterances** *boolean*

- **summarization** *boolean*

  Enable summarization of the transcription.
  Optional.

- **summarizationConfig** *object*

  Configuration for summarization.
  Optional.

  - **type** *'general' | 'bullet\_points' | 'concise'*

- **moderation** *boolean*

  Enable content moderation.
  Optional.

- **namedEntityRecognition** *boolean*

  Enable named entity recognition.
  Optional.

- **chapterization** *boolean*

  Enable chapterization of the transcription.
  Optional.

- **nameConsistency** *boolean*

  Enable name consistency in the transcription.
  Optional.

- **customSpelling** *boolean*

  Enable custom spelling.
  Optional.

- **customSpellingConfig** *object*

  Configuration for custom spelling.
  Optional.

  - **spellingDictionary** *Record\<string, string\[]>*

- **structuredDataExtraction** *boolean*

  Enable structured data extraction.
  Optional.

- **structuredDataExtractionConfig** *object*

  Configuration for structured data extraction.
  Optional.

  - **classes** *string\[]*

- **sentimentAnalysis** *boolean*

  Enable sentiment analysis.
  Optional.

- **audioToLlm** *boolean*

  Enable audio to LLM processing.
  Optional.

- **audioToLlmConfig** *object*

  Configuration for audio to LLM.
  Optional.

  - **prompts** *string\[]*

- **customMetadata** *Record\<string, any>*

  Custom metadata to include with the request.
  Optional.

- **sentences** *boolean*

  Enable sentence detection.
  Optional.

- **displayMode** *boolean*

  Enable display mode.
  Optional.

- **punctuationEnhanced** *boolean*

  Enable enhanced punctuation.
  Optional.

### Model Capabilities

| Model     | Transcription       | Duration            | Segments            | Language            |
| --------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `Default` |  |  |  |  |

# LMNT
