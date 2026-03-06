# ByteDance Provider

The [ByteDance](https://www.bytedance.com/) provider contains support for the Seedance family of video generation models through the [BytePlus ModelArk](https://docs.byteplus.com/en/docs/ModelArk/Video_Generation_API) platform. Seedance provides high-quality text-to-video and image-to-video generation capabilities, including audio-video synchronization, first-and-last frame control, and multi-reference image generation.

## Setup

The ByteDance provider is available via the `@ai-sdk/bytedance` module. You can install it with

## Provider Instance

You can import the default provider instance `byteDance` from `@ai-sdk/bytedance`:

```ts
import { byteDance } from '@ai-sdk/bytedance';
```

If you need a customized setup, you can import `createByteDance` and create a provider instance with your settings:

```ts
import { createByteDance } from '@ai-sdk/bytedance';

const byteDance = createByteDance({
  apiKey: 'your-api-key', // optional, defaults to ARK_API_KEY environment variable
  baseURL: 'custom-url', // optional
  headers: {
    /* custom headers */
  }, // optional
});
```

You can use the following optional settings to customize the ByteDance provider instance:

- **baseURL** *string*

  Use a different URL prefix for API calls, e.g. to use proxy servers.
  The default prefix is `https://ark.ap-southeast.bytepluses.com/api/v3`.

- **apiKey** *string*

  API key that is being sent using the `Authorization` header.
  It defaults to the `ARK_API_KEY` environment variable.
  You can [obtain an API key](https://console.byteplus.com/ark/apiKey) from the BytePlus console.

- **headers** *Record\<string,string>*

  Custom headers to include in the requests.

- **fetch** *(input: RequestInfo, init?: RequestInit) => Promise\<Response>*

  Custom [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation.
  You can use it as a middleware to intercept requests,
  or to provide a custom fetch implementation for e.g. testing.

## Video Models

You can create ByteDance video models using the `.video()` factory method.
For more on video generation with the AI SDK see [generateVideo()](/docs/reference/ai-sdk-core/generate-video).

### Text-to-Video

Generate videos from text prompts:

```ts
import {
  byteDance,
  type ByteDanceVideoProviderOptions,
} from '@ai-sdk/bytedance';
import { experimental_generateVideo as generateVideo } from 'ai';

const { video } = await generateVideo({
  model: byteDance.video('seedance-1-0-pro-250528'),
  prompt:
    'Photorealistic style: Under a clear blue sky, a vast expanse of white daisy fields stretches out. The camera gradually zooms in and fixates on a close-up of a single daisy.',
  aspectRatio: '16:9',
  duration: 5,
  providerOptions: {
    bytedance: {
      watermark: false,
    } satisfies ByteDanceVideoProviderOptions,
  },
});

console.log(video.url);
```

### Image-to-Video

Generate videos from a first-frame image with an optional text prompt:

```ts
import {
  byteDance,
  type ByteDanceVideoProviderOptions,
} from '@ai-sdk/bytedance';
import { experimental_generateVideo as generateVideo } from 'ai';

const { video } = await generateVideo({
  model: byteDance.video('seedance-1-5-pro-251215'),
  prompt: {
    image: 'https://example.com/first-frame.png',
    text: 'The cat slowly turns its head and blinks',
  },
  duration: 5,
  providerOptions: {
    bytedance: {
      watermark: false,
    } satisfies ByteDanceVideoProviderOptions,
  },
});
```

### Image-to-Video with Audio

Seedance 1.5 Pro supports generating synchronized audio alongside the video:

```ts
import {
  byteDance,
  type ByteDanceVideoProviderOptions,
} from '@ai-sdk/bytedance';
import { experimental_generateVideo as generateVideo } from 'ai';

const { video } = await generateVideo({
  model: byteDance.video('seedance-1-5-pro-251215'),
  prompt: {
    image: 'https://example.com/pianist.png',
    text: 'A young man sits at a piano, playing calmly. Gentle piano music plays in sync with his movements.',
  },
  duration: 5,
  providerOptions: {
    bytedance: {
      generateAudio: true,
      watermark: false,
    } satisfies ByteDanceVideoProviderOptions,
  },
});
```

### First-and-Last Frame Video

Generate smooth transitions between a starting and ending keyframe image:

```ts
import {
  byteDance,
  type ByteDanceVideoProviderOptions,
} from '@ai-sdk/bytedance';
import { experimental_generateVideo as generateVideo } from 'ai';

const { video } = await generateVideo({
  model: byteDance.video('seedance-1-5-pro-251215'),
  prompt: {
    image: 'https://example.com/first-frame.jpg',
    text: 'Create a 360-degree orbiting camera shot based on this photo',
  },
  duration: 5,
  providerOptions: {
    bytedance: {
      lastFrameImage: 'https://example.com/last-frame.jpg',
      generateAudio: true,
      watermark: false,
    } satisfies ByteDanceVideoProviderOptions,
  },
});
```

### Multi-Reference Image-to-Video

Using the Seedance 1.0 Lite I2V model, you can provide multiple reference images (1-4) that the model uses to faithfully reproduce object shapes, colors, and textures:

```ts
import {
  byteDance,
  type ByteDanceVideoProviderOptions,
} from '@ai-sdk/bytedance';
import { experimental_generateVideo as generateVideo } from 'ai';

const { video } = await generateVideo({
  model: byteDance.video('seedance-1-0-lite-i2v-250428'),
  prompt:
    'A boy wearing glasses and a blue T-shirt from [Image 1] and a corgi dog from [Image 2], sitting on the lawn from [Image 3], in 3D cartoon style',
  aspectRatio: '16:9',
  duration: 5,
  providerOptions: {
    bytedance: {
      referenceImages: [
        'https://example.com/boy.png',
        'https://example.com/corgi.png',
        'https://example.com/lawn.png',
      ],
      watermark: false,
    } satisfies ByteDanceVideoProviderOptions,
  },
});
```

### Video Provider Options

The following provider options are available via `providerOptions.bytedance`:

#### Generation Options

- **watermark** *boolean*

  Whether to add a watermark to the generated video.

- **generateAudio** *boolean*

  Whether to generate synchronized audio for the video. Only supported by Seedance 1.5 Pro.

- **cameraFixed** *boolean*

  Whether to fix the camera during generation.

- **returnLastFrame** *boolean*

  Whether to return the last frame of the generated video. Useful for chaining consecutive videos.

- **serviceTier** *'default' | 'flex'*

  Inference tier. `'default'` for online inference. `'flex'` for offline inference at 50% of the price, with higher latency (response times on the order of hours).

- **draft** *boolean*

  Enable draft sample mode for low-cost preview generation. Only supported by Seedance 1.5 Pro. Generates a 480p preview video for rapid iteration before committing to a full-quality generation.

#### Image Input Options

- **lastFrameImage** *string*

  URL of the last frame image for first-and-last frame video generation. The model generates smooth transitions between the first frame (provided via the `image` prompt) and this last frame. Supported by Seedance 1.5 Pro, 1.0 Pro, and 1.0 Lite I2V.

- **referenceImages** *string\[]*

  Array of reference image URLs (1-4 images) for multi-reference image-to-video generation. The model extracts key features from each image and reproduces them in the video. Use `[Image 1]`, `[Image 2]`, etc. in your prompt to reference specific images. Supported by Seedance 1.0 Lite I2V.

#### Polling Options

- **pollIntervalMs** *number*

  Control how frequently the API is checked for completed videos while they are
  being processed. Defaults to 3000ms.

- **pollTimeoutMs** *number*

  Maximum time to wait for video generation to complete before timing out.
  Defaults to 300000ms (5 minutes).

  Video generation is an asynchronous process that can take several minutes.
  Consider setting `pollTimeoutMs` to at least 10 minutes (600000ms) for
  reliable operation.

### Video Model Capabilities

| Model                   | Model ID                       | Capabilities                                                                                                                  |
| ----------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Seedance 1.5 Pro        | `seedance-1-5-pro-251215`      | T2V, I2V (first frame), I2V (first+last frame), audio-video sync, draft mode. Duration: 4-12s. Resolution: 480p, 720p, 1080p. |
| Seedance 1.0 Pro        | `seedance-1-0-pro-250528`      | T2V, I2V (first frame), I2V (first+last frame). Duration: 2-12s. Resolution: 480p, 720p, 1080p.                               |
| Seedance 1.0 Pro Fast   | `seedance-1-0-pro-fast-251015` | T2V, I2V (first frame). Optimized for speed and cost. Duration: 2-12s.                                                        |
| Seedance 1.0 Lite (T2V) | `seedance-1-0-lite-t2v-250428` | Text-to-video only. Duration: 2-12s. Resolution: 480p, 720p, 1080p.                                                           |
| Seedance 1.0 Lite (I2V) | `seedance-1-0-lite-i2v-250428` | I2V (first frame), I2V (first+last frame), multi-reference images (1-4). Duration: 2-12s. Resolution: 480p, 720p.             |

Supported aspect ratios: `16:9`, `4:3`, `1:1`, `3:4`, `9:16`, `21:9`, `adaptive` (image-to-video only).

All models output MP4 video at 24 fps.

You can also pass any model ID string if needed, e.g. for future models not
yet listed here.

# Kling AI
