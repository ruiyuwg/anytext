### Image Models

You can create image models using the `.image()` factory method. The Google Vertex provider supports both [Imagen](https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview) and [Gemini image models](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-flash-image). For more on image generation with the AI SDK see [generateImage()](/docs/reference/ai-sdk-core/generate-image).

#### Imagen Models

[Imagen models](https://cloud.google.com/vertex-ai/generative-ai/docs/image/generate-images) generate images using the Imagen on Vertex AI API.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateImage } from "ai";

const { image } = await generateImage({
  model: vertex.image("imagen-4.0-generate-001"),
  prompt: "A futuristic cityscape at sunset",
  aspectRatio: "16:9",
});
```

Further configuration can be done using Google Vertex provider options. You can validate the provider options using the `GoogleVertexImageModelOptions` type.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { GoogleVertexImageModelOptions } from "@ai-sdk/google-vertex";
import { generateImage } from "ai";

const { image } = await generateImage({
  model: vertex.image("imagen-4.0-generate-001"),
  providerOptions: {
    vertex: {
      negativePrompt: "pixelated, blurry, low-quality",
    } satisfies GoogleVertexImageModelOptions,
  },
  // ...
});
```

The following provider options are available:

- **negativePrompt** _string_
  A description of what to discourage in the generated images.

- **personGeneration** `allow_adult` | `allow_all` | `dont_allow`
  Whether to allow person generation. Defaults to `allow_adult`.

- **safetySetting** `block_low_and_above` | `block_medium_and_above` | `block_only_high` | `block_none`
  Whether to block unsafe content. Defaults to `block_medium_and_above`.

- **addWatermark** _boolean_
  Whether to add an invisible watermark to the generated images. Defaults to `true`.

- **storageUri** _string_
  Cloud Storage URI to store the generated images.

  Imagen models do not support the `size` parameter. Use the `aspectRatio`
  parameter instead.

Additional information about the images can be retrieved using Google Vertex meta data.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { GoogleVertexImageModelOptions } from "@ai-sdk/google-vertex";
import { generateImage } from "ai";

const { image, providerMetadata } = await generateImage({
  model: vertex.image("imagen-4.0-generate-001"),
  prompt: "A futuristic cityscape at sunset",
  aspectRatio: "16:9",
});

console.log(
  `Revised prompt: ${providerMetadata.vertex.images[0].revisedPrompt}`,
);
```

##### Image Editing

Google Vertex Imagen models support image editing through inpainting, outpainting, and other edit modes. Pass input images via `prompt.images` and optionally a mask via `prompt.mask`.

Image editing is supported by `imagen-3.0-capability-001`. The
`imagen-4.0-generate-001` model does not currently support editing operations.

###### Inpainting (Insert Objects)

Insert or replace objects in specific areas using a mask:

```ts
import { vertex, GoogleVertexImageModelOptions } from "@ai-sdk/google-vertex";
import { generateImage } from "ai";
import fs from "fs";

const image = fs.readFileSync("./input-image.png");
const mask = fs.readFileSync("./mask.png"); // White = edit area

const { images } = await generateImage({
  model: vertex.image("imagen-3.0-capability-001"),
  prompt: {
    text: "A sunlit indoor lounge area with a pool containing a flamingo",
    images: [image],
    mask,
  },
  providerOptions: {
    vertex: {
      edit: {
        baseSteps: 50,
        mode: "EDIT_MODE_INPAINT_INSERTION",
        maskMode: "MASK_MODE_USER_PROVIDED",
        maskDilation: 0.01,
      },
    } satisfies GoogleVertexImageModelOptions,
  },
});
```

###### Outpainting (Extend Image)

Extend an image beyond its original boundaries:

```ts
import { vertex, GoogleVertexImageModelOptions } from "@ai-sdk/google-vertex";
import { generateImage } from "ai";
import fs from "fs";

const image = fs.readFileSync("./input-image.png");
const mask = fs.readFileSync("./outpaint-mask.png"); // White = extend area

const { images } = await generateImage({
  model: vertex.image("imagen-3.0-capability-001"),
  prompt: {
    text: "Extend the scene with more of the forest background",
    images: [image],
    mask,
  },
  providerOptions: {
    vertex: {
      edit: {
        baseSteps: 50,
        mode: "EDIT_MODE_OUTPAINT",
        maskMode: "MASK_MODE_USER_PROVIDED",
      },
    } satisfies GoogleVertexImageModelOptions,
  },
});
```

###### Edit Provider Options

The following options are available under `providerOptions.vertex.edit`:

- **mode** - The edit mode to use:
  - `EDIT_MODE_INPAINT_INSERTION` - Insert objects into masked areas
  - `EDIT_MODE_INPAINT_REMOVAL` - Remove objects from masked areas
  - `EDIT_MODE_OUTPAINT` - Extend image beyond boundaries
  - `EDIT_MODE_CONTROLLED_EDITING` - Controlled editing
  - `EDIT_MODE_PRODUCT_IMAGE` - Product image editing
  - `EDIT_MODE_BGSWAP` - Background swap

- **baseSteps** _number_ - Number of sampling steps (35-75). Higher values = better quality but slower.

- **maskMode** - How to interpret the mask:
  - `MASK_MODE_USER_PROVIDED` - Use the provided mask directly
  - `MASK_MODE_DEFAULT` - Default mask mode
  - `MASK_MODE_DETECTION_BOX` - Mask from detected bounding boxes
  - `MASK_MODE_CLOTHING_AREA` - Mask from clothing segmentation
  - `MASK_MODE_PARSED_PERSON` - Mask from person parsing

- **maskDilation** _number_ - Percentage (0-1) to grow the mask. Recommended: 0.01.

  Input images must be provided as `Buffer`, `ArrayBuffer`, `Uint8Array`, or
  base64-encoded strings. URL-based images are not supported for Google Vertex
  image editing.

##### Imagen Model Capabilities

| Model                           | Aspect Ratios             |
| ------------------------------- | ------------------------- |
| `imagen-3.0-generate-001`       | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-3.0-generate-002`       | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-3.0-fast-generate-001`  | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-4.0-generate-001`       | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-4.0-fast-generate-001`  | 1:1, 3:4, 4:3, 9:16, 16:9 |
| `imagen-4.0-ultra-generate-001` | 1:1, 3:4, 4:3, 9:16, 16:9 |

#### Gemini Image Models

[Gemini image models](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-flash-image) (e.g. `gemini-2.5-flash-image`) are multimodal output language models that can be used with `generateImage()` for a simpler image generation experience. Internally, the provider calls the language model API with `responseModalities: ['IMAGE']`.

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateImage } from "ai";

const { image } = await generateImage({
  model: vertex.image("gemini-2.5-flash-image"),
  prompt: "A photorealistic image of a cat wearing a wizard hat",
  aspectRatio: "1:1",
});
```

Gemini image models also support image editing by providing input images:

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateImage } from "ai";
import fs from "node:fs";

const sourceImage = fs.readFileSync("./cat.png");

const { image } = await generateImage({
  model: vertex.image("gemini-2.5-flash-image"),
  prompt: {
    text: "Add a small wizard hat to this cat",
    images: [sourceImage],
  },
});
```

You can also use URLs (including `gs://` Cloud Storage URIs) for input images:

```ts
import { vertex } from "@ai-sdk/google-vertex";
import { generateImage } from "ai";

const { image } = await generateImage({
  model: vertex.image("gemini-2.5-flash-image"),
  prompt: {
    text: "Add a small wizard hat to this cat",
    images: ["https://example.com/cat.png"],
  },
});
```

Gemini image models do not support the `size` or `n` parameters. Use
`aspectRatio` instead of `size`. Mask-based inpainting is also not supported.

Gemini image models are multimodal output models that can generate both text
and images. For more advanced use cases where you need both text and image
outputs, or want more control over the generation process, you can use them
directly with `generateText()`.

##### Gemini Image Model Capabilities

| Model                            | Image Generation | Image Editing | Aspect Ratios                                       |
| -------------------------------- | ---------------- | ------------- | --------------------------------------------------- |
| `gemini-3.1-flash-image-preview` |                  |               | 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9 |
| `gemini-3-pro-image-preview`     |                  |               | 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9 |
| `gemini-2.5-flash-image`         |                  |               | 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9 |

`gemini-3-pro-image-preview` supports additional features including up to 14
reference images for editing (6 objects, 5 humans), resolution options (1K,
2K, 4K via `providerOptions.vertex.imageConfig.imageSize`), and Google Search
grounding.
