# Image Generation Quickstart

This quickstart walks you through generating your first image with AI Gateway.

- ### Set up your project
  Create a new directory and initialize a Node.js project:
  ```bash filename="Terminal"
  mkdir ai-image-demo
  cd ai-image-demo
  pnpm init
  ```

- ### Install dependencies
  Install the AI SDK and development dependencies:
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

- ### Set up your API key

  Go to the [AI Gateway API Keys page](https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai-gateway%2Fapi-keys\&title=AI+Gateway+API+Keys) in your Vercel dashboard and click **Create key** to generate a new API key.

  Create a `.env.local` file and save your API key:

  ```bash filename=".env.local"
  AI_GATEWAY_API_KEY=your_ai_gateway_api_key
  ```

- ### Generate an image
  Create an `index.ts` file. This example uses Nano Banana Pro (`google/gemini-3-pro-image`), a multimodal model that generates high-quality images:
  ```typescript filename="index.ts"
  import { generateText } from 'ai';
  import fs from 'node:fs';
  import 'dotenv/config';

  async function main() {
    const result = await generateText({
      model: 'google/gemini-3-pro-image',
      prompt: 'A serene mountain landscape at sunset with a calm lake reflection',
    });

    // Nano Banana models return images in result.files with uint8Array
    const imageFiles = result.files.filter((f) =>
      f.mediaType?.startsWith('image/'),
    );

    if (imageFiles.length > 0) {
      const extension = imageFiles[0].mediaType?.split('/')[1] || 'png';
      fs.writeFileSync(`output.${extension}`, imageFiles[0].uint8Array);
      console.log(`Image saved to output.${extension}`);
    }
  }

  main().catch(console.error);
  ```
  Run your script:
  ```bash filename="Terminal"
  pnpm tsx index.ts
  ```
  The generated image will be saved in your project directory.

- ### Next steps
  - See [supported image generation models](https://vercel.com/ai-gateway/models?type=image)
  - Learn about [multimodal LLMs](/docs/ai-gateway/capabilities/image-generation/ai-sdk#multimodal-llms) that can generate images alongside text
  - Explore [image editing capabilities](/docs/ai-gateway/capabilities/image-generation/openai#editing-images) with OpenAI models

## Alternative models

### Nano Banana (`google/gemini-2.5-flash-image`)

Fast image generation with Gemini 2.5 Flash. Uses the same `generateText` function and saves images the same way as Nano Banana Pro:

```typescript filename="nano-banana.ts"
import { generateText } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateText({
  model: 'google/gemini-2.5-flash-image',
  prompt: 'Create an illustration of a hummingbird at sunrise',
});

// Nano Banana models return images in result.files with uint8Array
const imageFiles = result.files.filter((f) =>
  f.mediaType?.startsWith('image/'),
);

if (imageFiles.length > 0) {
  fs.writeFileSync('output.png', imageFiles[0].uint8Array);
}
```

### Flux 2 Flex (`bfl/flux-2-flex`)

Fast, high-quality image generation from Black Forest Labs. Image-only models use `experimental_generateImage` and return images in `result.images` with base64 encoding:

```typescript filename="flux-example.ts"
import { experimental_generateImage as generateImage } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateImage({
  model: 'bfl/flux-2-flex',
  prompt: 'A vibrant coral reef with tropical fish',
  aspectRatio: '4:3',
});

// Image-only models return images in result.images with base64
const image = result.images[0];
const buffer = Buffer.from(image.base64, 'base64');
fs.writeFileSync('output.png', buffer);
```

### Recraft V3 (`recraft/recraft-v3`)

Professional-grade image generation. Same pattern as Flux:

```typescript filename="recraft-example.ts"
import { experimental_generateImage as generateImage } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateImage({
  model: 'recraft/recraft-v3',
  prompt: 'A minimalist logo design for a tech startup',
});

const buffer = Buffer.from(result.images[0].base64, 'base64');
fs.writeFileSync('output.png', buffer);
```

### Imagen (`google/imagen-4.0-generate-001`)

Google's Imagen model for high-fidelity image generation:

```typescript filename="imagen-example.ts"
import { experimental_generateImage as generateImage } from 'ai';
import fs from 'node:fs';
import 'dotenv/config';

const result = await generateImage({
  model: 'google/imagen-4.0-generate-001',
  prompt: 'A photorealistic image of a mountain landscape at golden hour',
  aspectRatio: '16:9',
});

const buffer = Buffer.from(result.images[0].base64, 'base64');
fs.writeFileSync('output.png', buffer);
```

## Saving images

How you save images depends on the model type:

| Model type                                | Function                     | Image location  | Format          |
| ----------------------------------------- | ---------------------------- | --------------- | --------------- |
| Nano Banana models                        | `generateText`               | `result.files`  | `uint8Array`    |
| Image-only models (Flux, Recraft, Imagen) | `experimental_generateImage` | `result.images` | `base64` string |

For more details, see the [Image Generation Capabilities docs](/docs/ai-gateway/capabilities/image-generation).

title: "Getting Started"
description: "Get started with AI Gateway by generating text, images, or video."
last\_updated: "2026-03-23T09:40:04.405Z"
source: "https://vercel.com/docs/ai-gateway/getting-started"

# Getting Started

Choose a quickstart to set up a project and make your first request:

**Text Generation**: Generate and stream text with GPT-5.2, Claude Sonnet 4.6, Gemini 3 Flash, Llama 4, and 100+ more models. [Learn more →](/docs/ai-gateway/getting-started/text)

**Image Generation**: Create images from text prompts or edit existing images with Flux 2 Flex, Recraft V3, Imagen, and more. [Learn more →](/docs/ai-gateway/getting-started/image)

**Video Generation**: Create videos from text prompts, images, or video input with Veo 3.1, KlingAI, Wan, Grok Imagine Video, and more. [Learn more →](/docs/ai-gateway/getting-started/video)

title: "Text Generation Quickstart"
description: "Generate and stream text responses using AI Gateway."
last\_updated: "2026-03-23T09:40:04.422Z"
source: "https://vercel.com/docs/ai-gateway/getting-started/text"
