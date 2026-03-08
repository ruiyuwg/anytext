# Text-to-Video Generation

Generate videos from text prompts. Describe what you want to see and the model creates a video matching your description.

## Google Veo

Google's Veo models generate high-quality videos with optional audio.

### Veo models

| Model                              | Description                        |
| ---------------------------------- | ---------------------------------- |
| `google/veo-3.1-generate-001`      | Latest model with audio generation |
| `google/veo-3.1-fast-generate-001` | Fast generation                    |
| `google/veo-3.0-generate-001`      | Previous generation, 1080p max     |
| `google/veo-3.0-fast-generate-001` | Faster generation, lower quality   |

### Veo parameters

| Parameter                                   | Type                                               | Required | Description                                                     |
| ------------------------------------------- | -------------------------------------------------- | -------- | --------------------------------------------------------------- |
| `prompt`                                    | `string`                                           | Yes      | Text description of the video to generate                       |
| `aspectRatio`                               | `string`                                           | No       | Aspect ratio (`'16:9'`, `'9:16'`). Defaults to `'16:9'`         |
| `duration`                                  | `4` | `6` | `8`                                  | No       | Video length in seconds. Defaults to 8                          |
| `resolution`                                | `string`                                           | No       | Resolution (`'720p'`, `'1080p'`). Defaults to `'720p'`          |
| `providerOptions.vertex.generateAudio`      | `boolean`                                          | No       | Generate audio alongside the video. Required for Veo 3 models   |
| `providerOptions.vertex.enhancePrompt`      | `boolean`                                          | No       | Use Gemini to enhance prompts. Defaults to `true`               |
| `providerOptions.vertex.negativePrompt`     | `string`                                           | No       | What to discourage in the generated video                       |
| `providerOptions.vertex.personGeneration`   | `'dont_allow'` | `'allow_adult'` | `'allow_all'` | No       | Whether to allow person generation. Defaults to `'allow_adult'` |
| `providerOptions.vertex.compressionQuality` | `'optimized'` | `'lossless'`                      | No       | Compression quality. Defaults to `'optimized'`                  |
| `providerOptions.vertex.sampleCount`        | `number`                                           | No       | Number of output videos (1-4)                                   |
| `providerOptions.vertex.seed`               | `number`                                           | No       | Seed for deterministic generation (0-4,294,967,295)             |
| `providerOptions.vertex.gcsOutputDirectory` | `string`                                           | No       | Cloud Storage URI to store the generated videos                 |
| `providerOptions.vertex.referenceImages`    | `array`                                            | No       | Reference images for style or asset guidance                    |
| `providerOptions.vertex.pollIntervalMs`     | `number`                                           | No       | How often to check task status. Defaults to `5000`              |
| `providerOptions.vertex.pollTimeoutMs`      | `number`                                           | No       | Maximum wait time. Defaults to `600000` (10 minutes)            |

### Veo example

```typescript filename="veo-text-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'google/veo-3.1-generate-001',
  prompt: 'A pangolin curled on a mossy stone in a glowing bioluminescent forest',
  aspectRatio: '16:9',
  resolution: '1920x1080',
  providerOptions: {
    vertex: {
      generateAudio: true,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

***

## KlingAI

KlingAI offers text-to-video with standard and professional quality modes. Audio generation requires v2.6+ models. Duration is 5-10 seconds.

### KlingAI models

| Model                          | Description                                            |
| ------------------------------ | ------------------------------------------------------ |
| `klingai/kling-v3.0-t2v`       | Multi-shot generation, 15s clips, enhanced consistency |
| `klingai/kling-v2.6-t2v`       | Audio-visual co-generation, cinematic motion           |
| `klingai/kling-v2.5-turbo-t2v` | Faster generation, lower cost                          |

### KlingAI parameters

| Parameter                                | Type               | Required | Description                                                                                  |
| ---------------------------------------- | ------------------ | -------- | -------------------------------------------------------------------------------------------- |
| `prompt`                                 | `string`           | Yes      | Text description of the video to generate. Max 2500 characters.                              |
| `aspectRatio`                            | `string`           | No       | Aspect ratio (`'16:9'`, `'9:16'`, `'1:1'`). Defaults to `'16:9'`.                            |
| `duration`                               | `number`           | No       | Video length in seconds. 5 or 10 for v2.x, 3-15 for v3.0. Defaults to `5`.                   |
| `providerOptions.klingai.mode`           | `'std'` | `'pro'` | No       | `'std'` for standard quality. `'pro'` for professional quality. Defaults to `'std'`.         |
| `providerOptions.klingai.negativePrompt` | `string`           | No       | What to avoid in the video. Max 2500 characters.                                             |
| `providerOptions.klingai.sound`          | `'on'` | `'off'`  | No       | Generate audio. Defaults to `'off'`. Requires v2.6+.                                         |
| `providerOptions.klingai.cfgScale`       | `number`           | No       | Prompt adherence (0-1). Higher = stricter. Defaults to `0.5`. Not supported on v2.x.         |
| `providerOptions.klingai.voiceList`      | `array`            | No       | Voice IDs for speech. Max 2 voices. Requires v3.0+ with `sound: 'on'`.                       |
| `providerOptions.klingai.multiShot`      | `boolean`          | No       | Enable multi-shot generation. Requires v3.0+. See [KlingAI multi-shot](#klingai-multi-shot). |
| `providerOptions.klingai.watermarkInfo`  | `object`           | No       | Set `{ enabled: true }` to generate watermarked result.                                      |
| `providerOptions.klingai.pollIntervalMs` | `number`           | No       | How often to check task status. Defaults to `5000`.                                          |
| `providerOptions.klingai.pollTimeoutMs`  | `number`           | No       | Maximum wait time. Defaults to `600000` (10 minutes).                                        |

### KlingAI example

```typescript filename="klingai-text-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'klingai/kling-v2.6-t2v',
  prompt: 'A chicken flying into the sunset in the style of 90s anime',
  aspectRatio: '16:9',
  duration: 5,
  providerOptions: {
    klingai: {
      mode: 'std',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### KlingAI camera control

Control camera movement during video generation.

| Parameter                                      | Type     | Required | Description                                                 |
| ---------------------------------------------- | -------- | -------- | ----------------------------------------------------------- |
| `providerOptions.klingai.cameraControl.type`   | `string` | Yes      | Camera movement type. See options below.                    |
| `providerOptions.klingai.cameraControl.config` | `object` | No       | Movement configuration. Required when `type` is `'simple'`. |

**Camera movement types:**

| Type                   | Description                        | Config required |
| ---------------------- | ---------------------------------- | --------------- |
| `'simple'`             | Basic movement with one axis       | Yes             |
| `'down_back'`          | Camera descends and moves backward | No              |
| `'forward_up'`         | Camera moves forward and tilts up  | No              |
| `'right_turn_forward'` | Rotate right then move forward     | No              |
| `'left_turn_forward'`  | Rotate left then move forward      | No              |

**Simple camera config options** (use only one, set others to 0):

| Config       | Range     | Description                                                  |
| ------------ | --------- | ------------------------------------------------------------ |
| `horizontal` | \[-10, 10] | Camera translation along x-axis. Negative = left.            |
| `vertical`   | \[-10, 10] | Camera translation along y-axis. Negative = down.            |
| `pan`        | \[-10, 10] | Camera rotation around y-axis. Negative = left.              |
| `tilt`       | \[-10, 10] | Camera rotation around x-axis. Negative = down.              |
| `roll`       | \[-10, 10] | Camera rotation around z-axis. Negative = counter-clockwise. |
| `zoom`       | \[-10, 10] | Focal length change. Negative = narrower FOV.                |

```typescript filename="camera-control.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'klingai/kling-v2.6-t2v',
  prompt: 'A serene mountain landscape at sunset',
  aspectRatio: '16:9',
  providerOptions: {
    klingai: {
      mode: 'std',
      cameraControl: {
        type: 'simple',
        config: {
          zoom: 5,
          horizontal: 0,
          vertical: 0,
          pan: 0,
          tilt: 0,
          roll: 0,
        },
      },
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### KlingAI multi-shot

Generate videos with multiple storyboard shots, each with its own prompt and duration. Requires Kling v3.0+ models.

| Parameter                                        | Type      | Required | Description                                    |
| ------------------------------------------------ | --------- | -------- | ---------------------------------------------- |
| `providerOptions.klingai.multiShot`              | `boolean` | Yes      | Set to `true` to enable multi-shot generation  |
| `providerOptions.klingai.shotType`               | `string`  | No       | Set to `'customize'` for custom shot durations |
| `providerOptions.klingai.multiPrompt`            | `array`   | Yes      | Array of shot configurations                   |
| `providerOptions.klingai.multiPrompt[].index`    | `number`  | Yes      | Shot order (starting from 1)                   |
| `providerOptions.klingai.multiPrompt[].prompt`   | `string`  | Yes      | Text description for this shot                 |
| `providerOptions.klingai.multiPrompt[].duration` | `string`  | Yes      | Duration in seconds for this shot              |

```typescript filename="multi-shot.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'klingai/kling-v3.0-t2v',
  prompt: '',
  aspectRatio: '16:9',
  duration: 10,
  providerOptions: {
    klingai: {
      mode: 'pro',
      multiShot: true,
      shotType: 'customize',
      multiPrompt: [
        {
          index: 1,
          prompt: 'A sunrise over a calm ocean, warm golden light.',
          duration: '4',
        },
        {
          index: 2,
          prompt: 'A flock of seagulls take flight from the beach.',
          duration: '3',
        },
        {
          index: 3,
          prompt: 'Waves crash against rocky cliffs at sunset.',
          duration: '3',
        },
      ],
      sound: 'on',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

***

## Wan

Wan (by Alibaba) offers text-to-video with native audio generation and prompt enhancement. Use `resolution` parameter (e.g., `'1280x720'`), not `aspectRatio`.

### Wan models

| Model                          | Description                    |
| ------------------------------ | ------------------------------ |
| `alibaba/wan-v2.6-t2v`         | Latest model with native audio |
| `alibaba/wan-v2.5-t2v-preview` | Preview model                  |

### Wan parameters

| Parameter                                | Type                    | Required | Description                                                                  |
| ---------------------------------------- | ----------------------- | -------- | ---------------------------------------------------------------------------- |
| `prompt`                                 | `string`                | Yes      | Text description of the video to generate                                    |
| `resolution`                             | `string`                | No       | v2.6: `'1280x720'` or `'1920x1080'`. v2.5: also supports `'848x480'`         |
| `duration`                               | `number`                | No       | v2.6: 2-15s. v2.5: 5s or 10s only. Defaults to 5                             |
| `providerOptions.alibaba.promptExtend`   | `boolean`               | No       | Enhance prompt for better quality. Defaults to `true`                        |
| `providerOptions.alibaba.negativePrompt` | `string`                | No       | What to avoid in the video. Max 500 characters                               |
| `providerOptions.alibaba.audioUrl`       | `string`                | No       | URL to audio file for audio-video sync (WAV/MP3, 3-30s, max 15MB). v2.5 only |
| `providerOptions.alibaba.shotType`       | `'single'` | `'multi'` | No       | `'multi'` enables multi-shot cinematic narrative. v2.6 only                  |
| `providerOptions.alibaba.watermark`      | `boolean`               | No       | Add watermark to the video. Defaults to `false`                              |
| `providerOptions.alibaba.pollIntervalMs` | `number`                | No       | How often to check task status. Defaults to `5000`                           |
| `providerOptions.alibaba.pollTimeoutMs`  | `number`                | No       | Maximum wait time. Defaults to `600000` (10 minutes)                         |

### Wan example

```typescript filename="wan-text-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'alibaba/wan-v2.6-t2v',
  prompt: 'A chicken flying into the sunset in the style of 90s anime',
  resolution: '1280x720',
  duration: 5,
  providerOptions: {
    alibaba: {
      promptExtend: true,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

***

## Grok Imagine Video

Grok Imagine Video (by xAI) generates videos from text prompts with support for multiple aspect ratios and resolutions. Duration ranges from 1-15 seconds.

### Grok models

| Model                    | Duration | Aspect Ratios                       | Resolution |
| ------------------------ | -------- | ----------------------------------- | ---------- |
| `xai/grok-imagine-video` | 1-15s    | 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3 | 480p, 720p |

### Grok parameters

| Parameter                            | Type                 | Required | Description                                                                                          |
| ------------------------------------ | -------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `prompt`                             | `string`             | Yes      | Text description of the video to generate                                                            |
| `aspectRatio`                        | `string`             | No       | Aspect ratio (`'16:9'`, `'9:16'`, `'1:1'`, `'4:3'`, `'3:4'`, `'3:2'`, `'2:3'`). Defaults to `'16:9'` |
| `duration`                           | `number`             | No       | Video length in seconds (1-15)                                                                       |
| `resolution`                         | `string`             | No       | Resolution (`'854x480'` for 480p, `'1280x720'` for 720p). Defaults to 480p                           |
| `providerOptions.xai.resolution`     | `'480p'` | `'720p'` | No       | Native resolution format. Alternative to standard `resolution` parameter                             |
| `providerOptions.xai.pollIntervalMs` | `number`             | No       | How often to check task status. Defaults to `5000`                                                   |
| `providerOptions.xai.pollTimeoutMs`  | `number`             | No       | Maximum wait time. Defaults to `600000` (10 minutes)                                                 |

### Grok example

```typescript filename="grok-imagine-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'xai/grok-imagine-video',
  prompt: 'A chicken flying into the sunset in the style of 90s anime',
  aspectRatio: '16:9',
  duration: 5,
  providerOptions: {
    xai: {
      pollTimeoutMs: 600000,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

> **💡 Note:** Video generation can take several minutes. Set `pollTimeoutMs` to at least 10
> minutes (600000ms) for reliable operation. Generated video URLs are ephemeral
> and should be downloaded promptly.

***

## ByteDance Seedance

ByteDance's Seedance models generate high-quality videos from text prompts with optional synchronized audio and a draft mode for low-cost previews. All models output MP4 at 24fps.

### Seedance models

| Model                              | Description                                                     |
| ---------------------------------- | --------------------------------------------------------------- |
| `bytedance/seedance-v1.5-pro`      | Latest model with audio sync and draft mode. 4-12s, up to 1080p |
| `bytedance/seedance-v1.0-pro`      | Previous generation. 2-12s, up to 1080p                         |
| `bytedance/seedance-v1.0-pro-fast` | Optimized for speed and cost. 2-12s                             |
| `bytedance/seedance-v1.0-lite-t2v` | Lightweight text-to-video. 2-12s, up to 1080p                   |

### Seedance parameters

| Parameter                                  | Type                    | Required | Description                                                                        |
| ------------------------------------------ | ----------------------- | -------- | ---------------------------------------------------------------------------------- |
| `prompt`                                   | `string`                | Yes      | Text description of the video to generate                                          |
| `aspectRatio`                              | `string`                | No       | Aspect ratio (`'16:9'`, `'4:3'`, `'1:1'`, `'3:4'`, `'9:16'`, `'21:9'`)             |
| `resolution`                               | `string`                | No       | Resolution (`'854x480'`, `'1280x720'`, `'1920x1080'`)                              |
| `duration`                                 | `number`                | No       | Video length in seconds. v1.5: 4-12s. v1.0: 2-12s                                  |
| `providerOptions.bytedance.watermark`      | `boolean`               | No       | Add a watermark to the video                                                       |
| `providerOptions.bytedance.generateAudio`  | `boolean`               | No       | Generate synchronized audio. Seedance v1.5 Pro only                                |
| `providerOptions.bytedance.cameraFixed`    | `boolean`               | No       | Fix the camera position during generation                                          |
| `providerOptions.bytedance.draft`          | `boolean`               | No       | Generate a 480p preview for fast iteration. Seedance v1.5 Pro only                 |
| `providerOptions.bytedance.serviceTier`    | `'default'` | `'flex'` | No       | `'default'` for online inference. `'flex'` for offline at 50% cost, higher latency |
| `providerOptions.bytedance.pollIntervalMs` | `number`                | No       | How often to check task status. Defaults to `3000`                                 |
| `providerOptions.bytedance.pollTimeoutMs`  | `number`                | No       | Maximum wait time. Defaults to `300000` (5 minutes)                                |

### Seedance example

```typescript filename="seedance-text-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'bytedance/seedance-v1.5-pro',
  prompt: 'A chicken flying into the sunset in the style of 90s anime',
  resolution: '1280x720',
  duration: 5,
  providerOptions: {
    bytedance: {
      pollTimeoutMs: 600000,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### Seedance text-to-video with audio

Generate video with synchronized audio. Requires Seedance v1.5 Pro.

```typescript filename="seedance-text-to-video-audio.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'bytedance/seedance-v1.5-pro',
  prompt:
    'A thunderstorm rolling over a vast wheat field, lightning illuminating the clouds, rain beginning to fall',
  resolution: '1280x720',
  duration: 5,
  providerOptions: {
    bytedance: {
      generateAudio: true,
      pollTimeoutMs: 600000,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

> **💡 Note:** Video generation can take several minutes. Set `pollTimeoutMs` to at least 10
> minutes (600000ms) for reliable operation.

***

title: "Video Editing"
description: "Edit existing videos using text prompts with Grok Imagine Video through AI Gateway."
last\_updated: "2026-03-08T05:03:10.274Z"
source: "https://vercel.com/docs/ai-gateway/capabilities/video-generation/video-editing"
