# Video Generation

> **⚠️ Warning:** Video generation requires **AI SDK v6** and uses the `experimental_generateVideo` function. This API is experimental and subject to change in future releases.

AI Gateway supports video generation, letting you create videos from text prompts, images, or video input. You can control resolution, duration, aspect ratio, and audio through a unified API across multiple providers.

To see all supported video models, use the **Video** filter at the [AI Gateway Models page](https://vercel.com/ai-gateway/models?type=video).

## Capabilities

Some video models are tagged by capability in their model name. You can also see capability tags on the [AI Gateway Models page](https://vercel.com/ai-gateway/models?type=video) or via the `/v1/models` endpoint, which is useful for models that support multiple capabilities:

| Tag              | Capability                                                                              | Description                                                         |
| ---------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `t2v`            | [Text-to-video](/docs/ai-gateway/capabilities/video-generation/text-to-video)           | Generate video from a text prompt                                   |
| `i2v`            | [Image-to-video](/docs/ai-gateway/capabilities/video-generation/image-to-video)         | Animate a static image into a video                                 |
| `r2v`            | [Reference-to-video](/docs/ai-gateway/capabilities/video-generation/reference-to-video) | Generate video featuring characters from reference images or videos |
| `motion-control` | [Motion control](/docs/ai-gateway/capabilities/video-generation/motion-control)         | Transfer motion from a reference video onto a character image       |
| -                | [Video editing](/docs/ai-gateway/capabilities/video-generation/video-editing)           | Edit existing videos using text prompts                             |

For example, `klingai/kling-v2.6-t2v` is a text-to-video model, `alibaba/wan-v2.6-i2v` is an image-to-video model, and `bytedance/seedance-v1.5-pro` supports both text-to-video and image-to-video.

## Common parameters

These parameters work across all video models, though support varies by provider.

| Parameter     | Type                          | Description                                                                                  |
| ------------- | ----------------------------- | -------------------------------------------------------------------------------------------- |
| `prompt`      | `string` or `{ image, text }` | Text description of the video. For image-to-video, use object format with `image` and `text` |
| `duration`    | `number`                      | Video length in seconds. Supported range varies by model                                     |
| `aspectRatio` | `string`                      | Aspect ratio as `{width}:{height}` (e.g., `'16:9'`, `'9:16'`)                                |
| `resolution`  | `string`                      | Resolution as `{width}x{height}` (e.g., `'1920x1080'`, `'1280x720'`)                         |

## Saving videos

Video models return results in `result.videos`. Each video object contains:

- `uint8Array`: Raw video data as `Uint8Array`
- `base64`: Base64-encoded video data

```typescript filename="save-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'google/veo-3.1-generate-001',
  prompt: 'A serene mountain landscape at sunset',
  duration: 8,
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

## Extending timeouts for Node.js

Video generation can take several minutes. In Node.js, the default `fetch` implementation (via Undici) enforces a 5-minute timeout. This can cause requests to fail before the video finishes generating.

To extend these timeouts, create a custom gateway instance with a longer Undici `Agent` timeout:

```typescript filename="lib/gateway.ts"
import { createGateway } from 'ai';
import { Agent } from 'undici';

export const gateway = createGateway({
  fetch: (url, init) =>
    fetch(url, {
      ...init,
      dispatcher: new Agent({
        headersTimeout: 15 * 60 * 1000, // 15 minutes
        bodyTimeout: 15 * 60 * 1000,
      }),
    } as RequestInit),
});
```

Then use the custom gateway instance:

```typescript filename="generate.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import { gateway } from './lib/gateway';

const { videos } = await generateVideo({
  model: gateway.video('google/veo-3.1-generate-001'),
  prompt: 'A timelapse of a flower blooming',
  duration: 8,
});
```

### Global default provider

To use plain string model IDs with extended timeouts, set your custom gateway as the [global default provider](/docs/ai-gateway/models-and-providers#globally-for-all-requests-in-your-application). In a Next.js app, add this to `instrumentation.ts`:

```typescript filename="instrumentation.ts"
import { createGateway } from 'ai';
import { Agent } from 'undici';

export async function register() {
  globalThis.AI_SDK_DEFAULT_PROVIDER = createGateway({
    fetch: (url, init) =>
      fetch(url, {
        ...init,
        dispatcher: new Agent({
          headersTimeout: 15 * 60 * 1000,
          bodyTimeout: 15 * 60 * 1000,
        }),
      } as RequestInit),
  });
}
```

title: "Reference-to-Video Generation"
description: "Generate videos featuring characters from reference images or videos using Wan through AI Gateway."
last\_updated: "2026-03-23T09:40:04.105Z"
source: "https://vercel.com/docs/ai-gateway/capabilities/video-generation/reference-to-video"
