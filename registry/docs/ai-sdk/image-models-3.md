## Image Models

You can create image models that call the Google Generative AI API using the `.image()` factory method.
For more on image generation with the AI SDK see [generateImage()](/docs/reference/ai-sdk-core/generate-image).

The Google provider supports two types of image models:

- **Imagen models**: Dedicated image generation models using the `:predict` API
- **Gemini image models**: Multimodal language models with image output capabilities using the `:generateContent` API

### Imagen Models

[Imagen](https://ai.google.dev/gemini-api/docs/imagen) models are dedicated image generation models.

```ts
import { google } from '@ai-sdk/google';
import { generateImage } from 'ai';

const { image } = await generateImage({
  model: google.image('imagen-4.0-generate-001'),
  prompt: 'A futuristic cityscape at sunset',
  aspectRatio: '16:9',
});
```

Further configuration can be done using Google provider options. You can validate the provider options using the `GoogleImageModelOptions` type.

```ts
import { google } from '@ai-sdk/google';
import { GoogleImageModelOptions } from '@ai-sdk/google';
import { generateImage } from 'ai';

const { image } = await generateImage({
  model: google.image('imagen-4.0-generate-001'),
  providerOptions: {
    google: {
      personGeneration: 'dont_allow',
    } satisfies GoogleImageModelOptions,
  },
  // ...
});
```

The following provider options are available for Imagen models:

- **personGeneration** `allow_adult` | `allow_all` | `dont_allow`
  Whether to allow person generation. Defaults to `allow_adult`.

  Imagen models do not support the `size` parameter. Use the `aspectRatio`
  parameter instead.

#### Imagen Model Capabilities

| Model                           | Aspect Ratios             |
| ------------------------------- | ------------------------- |
| `imagen-4.0-generate-001`       | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-4.0-ultra-generate-001` | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-4.0-fast-generate-001`  | 1:1, 3:4, 4:3, 9:16, 16:9 |

### Gemini Image Models

[Gemini image models](https://ai.google.dev/gemini-api/docs/image-generation) (e.g. `gemini-2.5-flash-image`) are technically multimodal output language models, but they can be used with the `generateImage()` function for a simpler image generation experience. Internally, the provider calls the language model API with `responseModalities: ['IMAGE']`.

```ts
import { google } from '@ai-sdk/google';
import { generateImage } from 'ai';

const { image } = await generateImage({
  model: google.image('gemini-2.5-flash-image'),
  prompt: 'A photorealistic image of a cat wearing a wizard hat',
  aspectRatio: '1:1',
});
```

Gemini image models also support image editing by providing input images:

```ts
import { google } from '@ai-sdk/google';
import { generateImage } from 'ai';
import fs from 'node:fs';

const sourceImage = fs.readFileSync('./cat.png');

const { image } = await generateImage({
  model: google.image('gemini-2.5-flash-image'),
  prompt: {
    text: 'Add a small wizard hat to this cat',
    images: [sourceImage],
  },
});
```

You can also use URLs for input images:

```ts
import { google } from '@ai-sdk/google';
import { generateImage } from 'ai';

const { image } = await generateImage({
  model: google.image('gemini-2.5-flash-image'),
  prompt: {
    text: 'Add a small wizard hat to this cat',
    images: ['https://example.com/cat.png'],
  },
});
```

Gemini image models do not support the `size` or `n` parameters. Use
`aspectRatio` instead of `size`. Mask-based inpainting is also not supported.

For more advanced use cases where you need both text and image outputs, or
want more control over the generation process, you can use Gemini image models
directly with `generateText()`. See [Image Outputs](#image-outputs) for
details.

#### Gemini Image Model Capabilities

| Model                            | Image Generation    | Image Editing       | Aspect Ratios                                       |
| -------------------------------- | ------------------- | ------------------- | --------------------------------------------------- |
| `gemini-2.5-flash-image`         |  |  | 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9 |
| `gemini-3-pro-image-preview`     |  |  | 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9 |
| `gemini-3.1-flash-image-preview` |  |  | 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9 |

`gemini-3-pro-image-preview` supports additional features including up to 14
reference images for editing (6 objects, 5 humans), resolution options (1K,
2K, 4K via `providerOptions.google.imageConfig.imageSize`), and Google Search
grounding.
