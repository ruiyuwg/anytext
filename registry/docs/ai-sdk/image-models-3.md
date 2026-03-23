## Image Models

You can create models that call the [OpenAI image generation API](https://platform.openai.com/docs/api-reference/images)
using the `.image()` factory method.

```ts
const model = openai.image('dall-e-3');
```

Dall-E models do not support the `aspectRatio` parameter. Use the `size`
parameter instead.

### Image Editing

OpenAI's `gpt-image-1` model supports powerful image editing capabilities. Pass input images via `prompt.images` to transform, combine, or edit existing images.

#### Basic Image Editing

Transform an existing image using text prompts:

```ts
const imageBuffer = readFileSync('./input-image.png');

const { images } = await generateImage({
  model: openai.image('gpt-image-1'),
  prompt: {
    text: 'Turn the cat into a dog but retain the style of the original image',
    images: [imageBuffer],
  },
});
```

#### Inpainting with Mask

Edit specific parts of an image using a mask. Transparent areas in the mask indicate where the image should be edited:

```ts
const image = readFileSync('./input-image.png');
const mask = readFileSync('./mask.png'); // Transparent areas = edit regions

const { images } = await generateImage({
  model: openai.image('gpt-image-1'),
  prompt: {
    text: 'A sunlit indoor lounge area with a pool containing a flamingo',
    images: [image],
    mask: mask,
  },
});
```

#### Background Removal

Remove the background from an image by setting `background` to `transparent`:

```ts
const imageBuffer = readFileSync('./input-image.png');

const { images } = await generateImage({
  model: openai.image('gpt-image-1'),
  prompt: {
    text: 'do not change anything',
    images: [imageBuffer],
  },
  providerOptions: {
    openai: {
      background: 'transparent',
      output_format: 'png',
    },
  },
});
```

#### Multi-Image Combining

Combine multiple reference images into a single output. `gpt-image-1` supports up to 16 input images:

```ts
const cat = readFileSync('./cat.png');
const dog = readFileSync('./dog.png');
const owl = readFileSync('./owl.png');
const bear = readFileSync('./bear.png');

const { images } = await generateImage({
  model: openai.image('gpt-image-1'),
  prompt: {
    text: 'Combine these animals into a group photo, retaining the original style',
    images: [cat, dog, owl, bear],
  },
});
```

Input images can be provided as `Buffer`, `ArrayBuffer`, `Uint8Array`, or
base64-encoded strings. For `gpt-image-1`, each image should be a `png`,
`webp`, or `jpg` file less than 50MB.

### Model Capabilities

| Model              | Sizes                           |
| ------------------ | ------------------------------- |
| `gpt-image-1.5`    | 1024x1024, 1536x1024, 1024x1536 |
| `gpt-image-1-mini` | 1024x1024, 1536x1024, 1024x1536 |
| `gpt-image-1`      | 1024x1024, 1536x1024, 1024x1536 |
| `dall-e-3`         | 1024x1024, 1792x1024, 1024x1792 |
| `dall-e-2`         | 256x256, 512x512, 1024x1024     |

You can pass optional `providerOptions` to the image model. These are prone to change by OpenAI and are model dependent. For example, the `gpt-image-1` model supports the `quality` option:

```ts
const { image, providerMetadata } = await generateImage({
  model: openai.image('gpt-image-1.5'),
  prompt: 'A salamander at sunrise in a forest pond in the Seychelles.',
  providerOptions: {
    openai: { quality: 'high' },
  },
});
```

For more on `generateImage()` see [Image Generation](/docs/ai-sdk-core/image-generation).

OpenAI's image models return additional metadata in the response that can be
accessed via `providerMetadata.openai`. The following OpenAI-specific metadata
is available:

- **images** *Array\<object>*

  Array of image-specific metadata. Each image object may contain:

  - `revisedPrompt` *string* - The revised prompt that was actually used to generate the image (OpenAI may modify your prompt for safety or clarity)
  - `created` *number* - The Unix timestamp (in seconds) of when the image was created
  - `size` *string* - The size of the generated image. One of `1024x1024`, `1024x1536`, or `1536x1024`
  - `quality` *string* - The quality of the generated image. One of `low`, `medium`, or `high`
  - `background` *string* - The background parameter used for the image generation. Either `transparent` or `opaque`
  - `outputFormat` *string* - The output format of the generated image. One of `png`, `webp`, or `jpeg`

For more information on the available OpenAI image model options, see the [OpenAI API reference](https://platform.openai.com/docs/api-reference/images/create).
