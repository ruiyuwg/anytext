## Transcription Models

You can create models that call the [OpenAI transcription API](https://platform.openai.com/docs/api-reference/audio/transcribe)
using the `.transcription()` factory method.

The first argument is the model id e.g. `whisper-1`.

```ts
const model = openai.transcription('whisper-1');
```

You can also pass additional provider-specific options using the `providerOptions` argument. For example, supplying the input language in ISO-639-1 (e.g. `en`) format will improve accuracy and latency.

```ts highlight="6"
import { experimental_transcribe as transcribe } from 'ai';
import { openai, type OpenAITranscriptionModelOptions } from '@ai-sdk/openai';

const result = await transcribe({
  model: openai.transcription('whisper-1'),
  audio: new Uint8Array([1, 2, 3, 4]),
  providerOptions: {
    openai: { language: 'en' } satisfies OpenAITranscriptionModelOptions,
  },
});
```

To get word-level timestamps, specify the granularity:

```ts highlight="8-9"
import { experimental_transcribe as transcribe } from 'ai';
import { openai, type OpenAITranscriptionModelOptions } from '@ai-sdk/openai';

const result = await transcribe({
  model: openai.transcription('whisper-1'),
  audio: new Uint8Array([1, 2, 3, 4]),
  providerOptions: {
    openai: {
      //timestampGranularities: ['word'],
      timestampGranularities: ['segment'],
    } satisfies OpenAITranscriptionModelOptions,
  },
});

// Access word-level timestamps
console.log(result.segments); // Array of segments with startSecond/endSecond
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

## Speech Models

You can create models that call the [OpenAI speech API](https://platform.openai.com/docs/api-reference/audio/speech)
using the `.speech()` factory method.

The first argument is the model id e.g. `tts-1`.

```ts
const model = openai.speech('tts-1');
```

The `voice` argument can be set to one of OpenAI's available voices: `alloy`, `ash`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage`, or `shimmer`.

```ts highlight="6"
import { experimental_generateSpeech as generateSpeech } from 'ai';
import { openai } from '@ai-sdk/openai';

const result = await generateSpeech({
  model: openai.speech('tts-1'),
  text: 'Hello, world!',
  voice: 'alloy', // OpenAI voice ID
});
```

You can also pass additional provider-specific options using the `providerOptions` argument:

```ts highlight="7-9"
import { experimental_generateSpeech as generateSpeech } from 'ai';
import { openai, type OpenAISpeechModelOptions } from '@ai-sdk/openai';

const result = await generateSpeech({
  model: openai.speech('tts-1'),
  text: 'Hello, world!',
  voice: 'alloy',
  providerOptions: {
    openai: {
      speed: 1.2,
    } satisfies OpenAISpeechModelOptions,
  },
});
```

- **instructions** *string*
  Control the voice of your generated audio with additional instructions e.g. "Speak in a slow and steady tone".
  Does not work with `tts-1` or `tts-1-hd`.
  Optional.

- **speed** *number*
  The speed of the generated audio.
  Select a value from 0.25 to 4.0.
  Defaults to 1.0.
  Optional.

### Model Capabilities

| Model             | Instructions        |
| ----------------- | ------------------- |
| `tts-1`           |  |
| `tts-1-hd`        |  |
| `gpt-4o-mini-tts` |  |

# Azure OpenAI
