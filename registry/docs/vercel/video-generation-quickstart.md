# Video Generation Quickstart

This quickstart walks you through generating your first video with AI Gateway. Supported models include Veo, Kling, Wan, Grok Imagine Video, and Seedance.

> **💡 Note:** Video generation requires the latest version of AI SDK v6. Check your `ai` package version with `npm list ai`.

- ### Set up your project
  Create a new directory and initialize a Node.js project:
  ```bash filename="Terminal"
  mkdir ai-video-demo
  cd ai-video-demo
  pnpm init
  ```

- ### Install dependencies
  Install AI SDK v6 and development dependencies:
  #### npm
  ```bash filename="Terminal"
  npm install ai dotenv @types/node tsx typescript
  ```
  #### yarn
  ```bash filename="Terminal"
  yarn add ai dotenv @types/node tsx typescript
  ```
  #### pnpm
  ```bash filename="Terminal"
  pnpm add ai dotenv @types/node tsx typescript
  ```
  #### bun
  ```bash filename="Terminal"
  bun add ai dotenv @types/node tsx typescript
  ```
  If you already have AI SDK installed, upgrade to the latest version of AI SDK v6:
  ```bash filename="Terminal"
  pnpm update ai@latest
  ```
  The `@latest` forces an upgrade even if your package.json has an older version like `^5.0.0`.

- ### Set up your API key

  Go to the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys\&title=AI+Gateway+API+Keys) in your Vercel dashboard and click **Create key** to generate a new API key.

  Create a `.env.local` file and save your API key:

  ```bash filename=".env.local"
  AI_GATEWAY_API_KEY=your_ai_gateway_api_key
  ```

- ### Generate a video
  Create an `index.ts` file:
  ```typescript filename="index.ts"
  import { experimental_generateVideo as generateVideo } from 'ai';
  import fs from 'node:fs';
  import 'dotenv/config';

  async function main() {
    const result = await generateVideo({
      model: 'google/veo-3.1-generate-001',
      prompt: 'A serene mountain landscape at sunset with clouds drifting by',
      aspectRatio: '16:9',
      duration: 8,
    });

    // Save the generated video
    fs.writeFileSync('output.mp4', result.videos[0].uint8Array);

    console.log('Video saved to output.mp4');
  }

  main().catch(console.error);
  ```
  Run your script:
  ```bash filename="Terminal"
  pnpm tsx index.ts
  ```
  > **💡 Note:** Video generation can take several minutes.
  > If you hit timeout issues, see [extending timeouts for Node.js](/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js).
  > The generated video will be saved as `output.mp4` in your project directory.

- ### Next steps
  - See [supported video generation models](https://vercel.com/ai-gateway/models?type=video)
  - Learn about [image-to-video generation](/docs/ai-gateway/capabilities/video-generation/image-to-video) to animate images
  - Explore [KlingAI motion control](/docs/ai-gateway/capabilities/video-generation/motion-control) for character animation

> **💡 Note:** Video models vary in their input formats and required parameters. Some accept buffers while others require URLs. Always check the [Video Generation docs](/docs/ai-gateway/capabilities/video-generation) for model-specific requirements.

## More ways to generate video

### Image-to-video

Transform a single image into a video by adding motion. The image becomes the video content itself.

```typescript filename="image-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateVideo({
  model: 'alibaba/wan-v2.6-i2v',
  prompt: {
    image: 'https://example.com/your-image.png',
    text: 'The scene slowly comes to life with gentle movement',
  },
  duration: 5,
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### First and last frame

Generate a video that transitions between a starting and ending image. The model interpolates the motion between them.

```typescript filename="first-last-frame.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

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

### Motion control

Transfer motion from a reference video onto a character image. The character performs the movements from the reference video.

```typescript filename="motion-control.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateVideo({
  model: 'klingai/kling-v2.6-motion-control',
  prompt: {
    image: fs.readFileSync('./character.png'),
  },
  providerOptions: {
    klingai: {
      videoUrl: 'https://example.com/dance-reference.mp4',
      characterOrientation: 'video',
      mode: 'std',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

### Reference-to-video

Generate a new video scene featuring characters or content from reference media. References can be images or videos that show the model what your characters look like.

```typescript filename="reference-to-video.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateVideo({
  model: 'alibaba/wan-v2.6-r2v',
  prompt: 'character1 and character2 have a friendly conversation in a cozy cafe',
  resolution: '1920x1080',
  duration: 4,
  providerOptions: {
    alibaba: {
      // References can be images or videos
      referenceUrls: [
        'https://example.com/cat.png',
        'https://example.com/dog.png',
      ],
      shotType: 'single',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

## Using URLs for input media

Some video models require URLs instead of raw file data for image or video inputs. You can use [Vercel Blob](/docs/vercel-blob) to host your media files.

### Set up Vercel Blob

1. Go to the [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project (or create one)
3. Click **Storage** in the top navigation
4. Click **Create Database** and select **Blob**
5. Follow the prompts to create your blob store
6. Copy the `BLOB_READ_WRITE_TOKEN` to your `.env.local` file

```bash filename=".env.local"
AI_GATEWAY_API_KEY=your_ai_gateway_api_key
BLOB_READ_WRITE_TOKEN=your_blob_token
```

Install the Vercel Blob package:

```bash filename="Terminal"
pnpm add @vercel/blob
```

### Upload and use media URLs

```typescript filename="url-input.ts"
import { experimental_generateVideo as generateVideo } from 'ai';
import { put } from '@vercel/blob';
import fs from 'node:fs';
import 'dotenv/config';

// Upload image to Vercel Blob
const imageBuffer = fs.readFileSync('input.png');
const { url: imageUrl } = await put('input.png', imageBuffer, {
  access: 'public',
});

const result = await generateVideo({
  model: 'klingai/kling-v2.6-i2v',
  prompt: {
    image: imageUrl, // Pass URL instead of buffer
    text: 'The scene slowly comes to life with gentle movement',
  },
  providerOptions: {
    klingai: {
      mode: 'std',
    },
  },
});

fs.writeFileSync('output.mp4', result.videos[0].uint8Array);
```

See the [Vercel Blob docs](/docs/vercel-blob) for more details on uploading and managing files.

For more details, see the [Video Generation Capabilities docs](/docs/ai-gateway/capabilities/video-generation).

title: "Automatic Caching"
description: "Enable automatic prompt caching across providers with AI Gateway to reduce costs and latency."
last\_updated: "2026-03-23T09:40:04.469Z"
source: "https://vercel.com/docs/ai-gateway/models-and-providers/automatic-caching"
