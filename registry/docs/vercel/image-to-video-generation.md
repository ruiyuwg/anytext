# Image-to-Video Generation

Animate a static image into a video. The image you provide becomes the video content itself - you're adding motion to that exact scene.

This is different from [reference-to-video](/docs/ai-gateway/capabilities/video-generation/reference-to-video), where reference images show the model what characters look like, but the video is a completely new scene.

## Google Veo

Google's Veo models support image-to-video generation, animating a starting image into a video.

### Veo models

| Model                              | Description                      |
| ---------------------------------- | -------------------------------- |
| `google/veo-3.1-generate-001`      | Latest model with audio          |
| `google/veo-3.1-fast-generate-001` | Fast generation                  |
| `google/veo-3.0-generate-001`      | Previous generation, 1080p max   |
| `google/veo-3.0-fast-generate-001` | Faster generation, lower quality |

### Veo parameters

| Parameter                                 | Type                                               | Required | Description                                                          |
| ----------------------------------------- | -------------------------------------------------- | -------- | -------------------------------------------------------------------- |
| `prompt.image`                            | `string`                                           | Yes      | URL or base64-encoded image to animate                               |
| `prompt.text`                             | `string`                                           | No       | Description of the motion or animation                               |
| `duration`                                | `4` | `6` | `8`                                  | No       | Video length in seconds. Defaults to 8                               |
| `resolution`                              | `string`                                           | No       | Resolution (`'720p'`, `'1080p'`). Defaults to `'720p'`               |
| `providerOptions.vertex.generateAudio`    | `boolean`                                          | No       | Generate audio alongside the video                                   |
| `providerOptions.vertex.resizeMode`       | `'pad'` | `'crop'`                                | No       | How to resize the image to fit video dimensions. Defaults to `'pad'` |
| `providerOptions.vertex.enhancePrompt`    | `boolean`                                          | No       | Use Gemini to enhance prompts. Defaults to `true`                    |
| `providerOptions.vertex.negativePrompt`   | `string`                                           | No       | What to discourage in the generated video                            |
| `providerOptions.vertex.personGeneration` | `'dont_allow'` | `'allow_adult'` | `'allow_all'` | No       | Whether to allow person generation. Defaults to `'allow_adult'`      |
| `providerOptions.vertex.pollIntervalMs`   | `number`                                           | No       | How often to check task status. Defaults to `5000`                   |
| `providerOptions.vertex.pollTimeoutMs`    | `number`                                           | No       | Maximum wait time. Defaults to `600000` (10 minutes)                 |

### Veo example

```typescript filename="veo-image-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'google/veo-3.1-generate-001',
  prompt: {
    image: 'https://example.com/landscape.png',
    text: 'Camera slowly pans across the scene as clouds drift by',
  },
  resolution: '1080p',
  providerOptions: {
    vertex: {
      resizeMode: 'crop',
      generateAudio: true,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

***

## KlingAI

KlingAI's image-to-video models animate images with standard or professional quality modes.

### KlingAI models

| Model                          | Description                                            |
| ------------------------------ | ------------------------------------------------------ |
| `klingai/kling-v3.0-i2v`       | Multi-shot generation, 15s clips, enhanced consistency |
| `klingai/kling-v2.6-i2v`       | Audio-visual co-generation, cinematic motion           |
| `klingai/kling-v2.5-turbo-i2v` | Faster generation, lower cost                          |

### KlingAI parameters

| Parameter                                | Type               | Required | Description                                                                                                                                          |
| ---------------------------------------- | ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prompt.image`                           | `string \| Buffer` | Yes      | The image to animate. See [image requirements](#image-requirements) below.                                                                           |
| `prompt.text`                            | `string`           | No       | Description of the motion. Max 2500 characters.                                                                                                      |
| `duration`                               | `number`           | No       | Video length in seconds. 5 or 10 for v2.x, 3-15 for v3.0. Defaults to `5`.                                                                           |
| `providerOptions.klingai.mode`           | `'std'` | `'pro'` | No       | `'std'` for standard quality. `'pro'` for professional quality. Defaults to `'std'`.                                                                 |
| `providerOptions.klingai.negativePrompt` | `string`           | No       | What to avoid in the video. Max 2500 characters.                                                                                                     |
| `providerOptions.klingai.cfgScale`       | `number`           | No       | Prompt adherence (0-1). Higher = stricter. Defaults to `0.5`. Not supported on v2.x.                                                                 |
| `providerOptions.klingai.sound`          | `'on'` | `'off'`  | No       | Generate audio. Defaults to `'off'`. Requires v2.6+.                                                                                                 |
| `providerOptions.klingai.voiceList`      | `array`            | No       | Voice IDs for speech. Max 2 voices. Requires v3.0+ with `sound: 'on'`. Cannot coexist with `elementList`. See [voice generation](#voice-generation). |
| `providerOptions.klingai.multiShot`      | `boolean`          | No       | Enable multi-shot generation. Requires v3.0+. See [multi-shot](#multi-shot).                                                                         |
| `providerOptions.klingai.elementList`    | `array`            | No       | Reference elements for element control. Up to 3 elements. Requires v3.0+. Cannot coexist with `voiceList`.                                           |
| `providerOptions.klingai.watermarkInfo`  | `object`           | No       | Set `{ enabled: true }` to generate watermarked result.                                                                                              |
| `providerOptions.klingai.pollIntervalMs` | `number`           | No       | How often to check task status. Defaults to `5000`.                                                                                                  |
| `providerOptions.klingai.pollTimeoutMs`  | `number`           | No       | Maximum wait time. Defaults to `600000` (10 minutes).                                                                                                |

### KlingAI image requirements

The input image (`prompt.image`) must meet these requirements:

- **Formats**: `.jpg`, `.jpeg`, `.png`
- **File size**: 10MB or less
- **Dimensions**: Minimum 300px
- **Aspect ratio**: Between 1:2.5 and 2.5:1

When using base64 encoding, submit only the raw base64 string without any prefix:

```ts
// Correct
const image = 'iVBORw0KGgoAAAANSUhEUgAAAAUA...';

// Incorrect - do not include data: prefix
const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...';
```

### KlingAI example

```typescript filename="klingai-image-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'klingai/kling-v2.6-i2v',
  prompt: {
    image: 'https://example.com/cat.png',
    text: 'The cat slowly turns its head and blinks',
  },
  duration: 5,
  providerOptions: {
    klingai: {
      mode: 'std',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### KlingAI first and last frame

Generate a video that transitions between a starting and ending image. The model interpolates the motion between the two frames.

| Parameter                           | Type               | Required | Description                                                                |
| ----------------------------------- | ------------------ | -------- | -------------------------------------------------------------------------- |
| `prompt.image`                      | `string \| Buffer` | Yes      | The first frame (starting image).                                          |
| `providerOptions.klingai.imageTail` | `string \| Buffer` | Yes      | The last frame (ending image). Same format requirements as `prompt.image`. |

When using `imageTail`, the following features are mutually exclusive and cannot be combined:

- First/last frame (`image` + `imageTail`)
- Motion brush (`dynamicMasks` / `staticMask`)
- Camera control (`cameraControl`)

```typescript filename="first-last-frame.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const firstFrame = fs.readFileSync('start.png');
const lastFrame = fs.readFileSync('end.png');

const result = await generateVideo({
  model: 'klingai/kling-v2.6-i2v',
  prompt: {
    image: firstFrame,
    text: 'Smooth transition between the two scenes',
  },
  providerOptions: {
    klingai: {
      imageTail: lastFrame,
      mode: 'pro',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### KlingAI voice generation

Add speech to your video using voice IDs. Requires v2.6+ models with `sound: 'on'`.

Reference voices in your prompt using `<<<voice_1>>>` syntax, where the number matches the order in `voiceList`:

```typescript filename="voice-generation.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'klingai/kling-v2.6-i2v',
  prompt: {
    image: 'https://example.com/person.png',
    text: 'The person<<<voice_1>>> says: "Hello, welcome to my channel"',
  },
  providerOptions: {
    klingai: {
      mode: 'std',
      sound: 'on',
      voiceList: [{ voiceId: 'your_voice_id' }],
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

You can use up to 2 voices per video. Voice IDs come from KlingAI's voice customization API or system preset voices.

### KlingAI camera control

Control camera movement during video generation. This is mutually exclusive with first/last frame and motion brush features.

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
  model: 'klingai/kling-v2.6-i2v',
  prompt: {
    image: 'https://example.com/landscape.png',
    text: 'A serene mountain landscape',
  },
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

### KlingAI motion brush

Control which parts of the image move and how using mask images. This is mutually exclusive with first/last frame and camera control features.

| Parameter                                             | Type     | Required | Description                                        |
| ----------------------------------------------------- | -------- | -------- | -------------------------------------------------- |
| `providerOptions.klingai.staticMask`                  | `string` | No       | Mask image for areas that should remain static.    |
| `providerOptions.klingai.dynamicMasks`                | `array`  | No       | Array of dynamic mask configurations (up to 6).    |
| `providerOptions.klingai.dynamicMasks[].mask`         | `string` | Yes      | Mask image for areas that should move.             |
| `providerOptions.klingai.dynamicMasks[].trajectories` | `array`  | Yes      | Motion path coordinates. 2-77 points for 5s video. |

Mask requirements:

- Same format as input image (`.jpg`, `.jpeg`, `.png`)
- Aspect ratio must match the input image
- All masks (`staticMask` and `dynamicMasks[].mask`) must have identical resolution

Trajectory coordinates use the bottom-left corner of the image as origin. More points create more accurate paths.

```typescript filename="motion-brush.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'klingai/kling-v2.6-i2v',
  prompt: {
    image: 'https://example.com/scene.png',
    text: 'A ball bouncing across the scene',
  },
  providerOptions: {
    klingai: {
      mode: 'std',
      dynamicMasks: [
        {
          mask: 'https://example.com/ball-mask.png',
          trajectories: [
            { x: 100, y: 200 },
            { x: 200, y: 300 },
            { x: 300, y: 200 },
            { x: 400, y: 300 },
          ],
        },
      ],
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### KlingAI multi-shot

Generate videos with multiple storyboard shots, combining a start frame image with per-shot prompts. Requires Kling v3.0+ models.

| Parameter                                        | Type      | Required | Description                                    |
| ------------------------------------------------ | --------- | -------- | ---------------------------------------------- |
| `providerOptions.klingai.multiShot`              | `boolean` | Yes      | Set to `true` to enable multi-shot generation  |
| `providerOptions.klingai.shotType`               | `string`  | No       | Set to `'customize'` for custom shot durations |
| `providerOptions.klingai.multiPrompt`            | `array`   | Yes      | Array of shot configurations                   |
| `providerOptions.klingai.multiPrompt[].index`    | `number`  | Yes      | Shot order (starting from 1)                   |
| `providerOptions.klingai.multiPrompt[].prompt`   | `string`  | Yes      | Text description for this shot                 |
| `providerOptions.klingai.multiPrompt[].duration` | `string`  | Yes      | Duration in seconds for this shot              |

```typescript filename="multi-shot-i2v.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'klingai/kling-v3.0-i2v',
  prompt: {
    image: 'https://example.com/start-frame.png',
    text: '',
  },
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
          prompt: 'The character looks up at the sky.',
          duration: '4',
        },
        {
          index: 2,
          prompt: 'A bird flies across the frame.',
          duration: '3',
        },
        {
          index: 3,
          prompt: 'The character smiles and waves.',
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

Wan offers image-to-video with standard and flash variants. Both support audio generation. Wan requires image URLs (not buffers). Use [Vercel Blob](/docs/vercel-blob) to host local images.

### Wan models

| Model                        | Description               |
| ---------------------------- | ------------------------- |
| `alibaba/wan-v2.6-i2v`       | Standard model with audio |
| `alibaba/wan-v2.6-i2v-flash` | Fast generation           |

### Wan parameters

| Parameter                                | Type      | Required | Description                                                                        |
| ---------------------------------------- | --------- | -------- | ---------------------------------------------------------------------------------- |
| `prompt.image`                           | `string`  | Yes      | URL of the image to animate (URLs only, not buffers)                               |
| `prompt.text`                            | `string`  | Yes      | Description of the motion or animation                                             |
| `resolution`                             | `string`  | No       | `'1280x720'` or `'1920x1080'`                                                      |
| `duration`                               | `number`  | No       | 2-15 seconds                                                                       |
| `providerOptions.alibaba.audio`          | `boolean` | No       | Generate audio. Standard models default to `true`, flash models default to `false` |
| `providerOptions.alibaba.negativePrompt` | `string`  | No       | What to avoid in the video. Max 500 characters                                     |
| `providerOptions.alibaba.audioUrl`       | `string`  | No       | URL to audio file for audio-video sync (WAV/MP3, 3-30s, max 15MB)                  |
| `providerOptions.alibaba.watermark`      | `boolean` | No       | Add watermark to the video. Defaults to `false`                                    |
| `providerOptions.alibaba.pollIntervalMs` | `number`  | No       | How often to check task status. Defaults to `5000`                                 |
| `providerOptions.alibaba.pollTimeoutMs`  | `number`  | No       | Maximum wait time. Defaults to `600000` (10 minutes)                               |

### Wan example

```typescript filename="wan-image-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'alibaba/wan-v2.6-i2v-flash',
  prompt: {
    image: 'https://example.com/cat.png',
    text: 'The cat waves hello and smiles',
  },
  duration: 5,
  providerOptions: {
    alibaba: {
      audio: true,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

***

## Grok Imagine Video

Grok Imagine Video (by xAI) can animate images into videos. The output defaults to the input image's aspect ratio. If you specify `aspectRatio`, it will override this and stretch the image to the desired ratio.

### Grok models

| Model                    | Duration | Resolution |
| ------------------------ | -------- | ---------- |
| `xai/grok-imagine-video` | 1-15s    | 480p, 720p |

### Grok parameters

| Parameter                            | Type                 | Required | Description                                                   |
| ------------------------------------ | -------------------- | -------- | ------------------------------------------------------------- |
| `prompt.image`                       | `string`             | Yes      | URL of the image to animate                                   |
| `prompt.text`                        | `string`             | No       | Description of the motion or animation                        |
| `duration`                           | `number`             | No       | Video length in seconds (1-15)                                |
| `aspectRatio`                        | `string`             | No       | Override the input image's aspect ratio (stretches the image) |
| `providerOptions.xai.resolution`     | `'480p'` | `'720p'` | No       | Video resolution. Defaults to 480p                            |
| `providerOptions.xai.pollIntervalMs` | `number`             | No       | How often to check task status. Defaults to `5000`            |
| `providerOptions.xai.pollTimeoutMs`  | `number`             | No       | Maximum wait time. Defaults to `600000` (10 minutes)          |

### Grok example

```typescript filename="grok-image-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'xai/grok-imagine-video',
  prompt: {
    image: 'https://example.com/cat.png',
    text: 'The cat slowly turns its head and blinks',
  },
  duration: 5,
  providerOptions: {
    xai: {
      pollTimeoutMs: 600000,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

***

## ByteDance Seedance

ByteDance's Seedance models animate images into videos with support for first-and-last-frame control, multi-reference images, and optional audio generation. All models output MP4 at 24fps. Seedance requires image URLs (not buffers). Use [Vercel Blob](/docs/vercel-blob) to host local images.

### Seedance models

| Model                              | Description                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| `bytedance/seedance-v1.5-pro`      | Latest model with audio sync. First frame and first+last frame. 4-12s, up to 1080p |
| `bytedance/seedance-v1.0-pro`      | First frame and first+last frame. 2-12s, up to 1080p                               |
| `bytedance/seedance-v1.0-pro-fast` | First frame only. Optimized for speed. 2-12s                                       |
| `bytedance/seedance-v1.0-lite-i2v` | First frame, first+last frame, multi-reference (1-4 images). 2-12s, up to 720p     |

### Seedance parameters

| Parameter                                   | Type                    | Required | Description                                                                                                                            |
| ------------------------------------------- | ----------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `prompt.image`                              | `string`                | Yes      | URL of the image to animate (first frame)                                                                                              |
| `prompt.text`                               | `string`                | No       | Description of the motion or animation                                                                                                 |
| `aspectRatio`                               | `string`                | No       | Aspect ratio (`'16:9'`, `'4:3'`, `'1:1'`, `'3:4'`, `'9:16'`, `'21:9'`, `'adaptive'`). `'adaptive'` uses the input image's aspect ratio |
| `resolution`                                | `string`                | No       | Resolution (`'854x480'`, `'1280x720'`, `'1920x1080'`). Lite I2V supports up to 720p                                                    |
| `duration`                                  | `number`                | No       | Video length in seconds. v1.5: 4-12s. v1.0: 2-12s                                                                                      |
| `providerOptions.bytedance.lastFrameImage`  | `string`                | No       | URL of the last frame image. Enables first+last frame mode. See [first and last frame](#seedance-first-and-last-frame)                 |
| `providerOptions.bytedance.referenceImages` | `string[]`              | No       | 1-4 reference image URLs. Lite I2V only. See [multi-reference images](#seedance-multi-reference-images)                                |
| `providerOptions.bytedance.generateAudio`   | `boolean`               | No       | Generate synchronized audio. Seedance v1.5 Pro only                                                                                    |
| `providerOptions.bytedance.watermark`       | `boolean`               | No       | Add a watermark to the video                                                                                                           |
| `providerOptions.bytedance.cameraFixed`     | `boolean`               | No       | Fix the camera position during generation                                                                                              |
| `providerOptions.bytedance.returnLastFrame` | `boolean`               | No       | Return the last frame of the generated video. Useful for chaining consecutive videos                                                   |
| `providerOptions.bytedance.serviceTier`     | `'default'` | `'flex'` | No       | `'default'` for online inference. `'flex'` for offline at 50% cost, higher latency                                                     |
| `providerOptions.bytedance.pollIntervalMs`  | `number`                | No       | How often to check task status. Defaults to `3000`                                                                                     |
| `providerOptions.bytedance.pollTimeoutMs`   | `number`                | No       | Maximum wait time. Defaults to `300000` (5 minutes)                                                                                    |

### Seedance example

```typescript filename="seedance-image-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'bytedance/seedance-v1.5-pro',
  prompt: {
    image: 'https://example.com/cat.png',
    text: 'The cat slowly turns its head and blinks',
  },
  duration: 5,
  providerOptions: {
    bytedance: {
      pollTimeoutMs: 600000,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### Seedance first and last frame

Generate a video that transitions smoothly between a starting and ending image. Provide the first frame via `prompt.image` and the last frame via `lastFrameImage`.

| Parameter                                  | Type     | Required | Description                                                             |
| ------------------------------------------ | -------- | -------- | ----------------------------------------------------------------------- |
| `prompt.image`                             | `string` | Yes      | The first frame (starting image)                                        |
| `providerOptions.bytedance.lastFrameImage` | `string` | Yes      | The last frame (ending image). Model transitions between the two frames |

Supported by Seedance v1.5 Pro, v1.0 Pro, and v1.0 Lite I2V.

```typescript filename="seedance-first-last-frame.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'bytedance/seedance-v1.5-pro',
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
      pollTimeoutMs: 600000,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### Seedance multi-reference images

Provide 1-4 reference images that the model uses to faithfully reproduce object shapes, colors, and textures. Use `[Image 1]`, `[Image 2]`, etc. in your prompt to reference each image. Requires the `seedance-v1.0-lite-i2v` model.

| Parameter                                   | Type       | Required | Description                       |
| ------------------------------------------- | ---------- | -------- | --------------------------------- |
| `providerOptions.bytedance.referenceImages` | `string[]` | Yes      | Array of 1-4 reference image URLs |

```typescript filename="seedance-multi-reference.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';

const result = await generateVideo({
  model: 'bytedance/seedance-v1.0-lite-i2v',
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
      pollTimeoutMs: 600000,
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

> **💡 Note:** Video generation can take several minutes. Set `pollTimeoutMs` to at least 10
> minutes (600000ms) for reliable operation.

***

title: "Motion Control Video Generation"
description: "Transfer motion from a reference video to a character image using KlingAI through AI Gateway."
last\_updated: "2026-03-23T09:40:04.062Z"
source: "https://vercel.com/docs/ai-gateway/capabilities/video-generation/motion-control"
