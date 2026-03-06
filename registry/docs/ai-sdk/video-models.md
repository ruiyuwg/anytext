### Video Models

You can create [Veo](https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview) video models that call the Vertex AI API
using the `.video()` factory method. For more on video generation with the AI SDK see [generateVideo()](/docs/reference/ai-sdk-core/generate-video).

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { experimental_generateVideo as generateVideo } from 'ai';

const { video } = await generateVideo({
  model: vertex.video('veo-3.1-generate-001'),
  prompt:
    'A pangolin curled on a mossy stone in a glowing bioluminescent forest',
  aspectRatio: '16:9',
});
```

You can configure resolution and duration:

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { experimental_generateVideo as generateVideo } from 'ai';

const { video } = await generateVideo({
  model: vertex.video('veo-3.1-generate-001'),
  prompt: 'A serene mountain landscape at sunset',
  aspectRatio: '16:9',
  resolution: '1920x1080',
  duration: 8,
});
```

#### Provider Options

Further configuration can be done using Google Vertex provider options. You can validate the provider options using the `GoogleVertexVideoModelOptions` type.

```ts
import { vertex } from '@ai-sdk/google-vertex';
import { GoogleVertexVideoModelOptions } from '@ai-sdk/google-vertex';
import { experimental_generateVideo as generateVideo } from 'ai';

const { video } = await generateVideo({
  model: vertex.video('veo-3.1-generate-001'),
  prompt: 'A serene mountain landscape at sunset',
  aspectRatio: '16:9',
  providerOptions: {
    vertex: {
      generateAudio: true,
      personGeneration: 'allow_adult',
    } satisfies GoogleVertexVideoModelOptions,
  },
});
```

The following provider options are available:

- **generateAudio** *boolean*

  Whether to generate audio along with the video.

- **personGeneration** `'dont_allow'` | `'allow_adult'` | `'allow_all'`

  Whether to allow person generation in the video.

- **negativePrompt** *string*

  A description of what to discourage in the generated video.

- **gcsOutputDirectory** *string*

  Cloud Storage URI to store the generated videos.

- **referenceImages** *Array<{ bytesBase64Encoded?: string; gcsUri?: string }>*

  Reference images for style or asset guidance.

- **pollIntervalMs** *number*

  Polling interval in milliseconds for checking task status.

- **pollTimeoutMs** *number*

  Maximum wait time in milliseconds for video generation.

  Video generation is an asynchronous process that can take several minutes. For
  longer videos or higher resolutions, consider setting `pollTimeoutMs` to at
  least 10 minutes (600000ms).

#### Model Capabilities

| Model                       | Audio Support |
| --------------------------- | ------------- |
| `veo-3.1-generate-001`      | Yes           |
| `veo-3.1-fast-generate-001` | Yes           |
| `veo-3.0-generate-001`      | Yes           |
| `veo-3.0-fast-generate-001` | Yes           |
| `veo-2.0-generate-001`      | No            |

The table above lists popular models. You can also pass any available provider
model ID as a string if needed.
