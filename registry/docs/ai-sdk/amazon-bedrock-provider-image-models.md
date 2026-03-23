## Image Models

You can create models that call the Bedrock API [Bedrock API](https://docs.aws.amazon.com/nova/latest/userguide/image-generation.html)
using the `.image()` factory method.

For more on the Amazon Nova Canvas image model, see the [Nova Canvas
Overview](https://docs.aws.amazon.com/ai/responsible-ai/nova-canvas/overview.html).

The `amazon.nova-canvas-v1:0` model is available in the `us-east-1`,
`eu-west-1`, and `ap-northeast-1` regions.

```ts
const model = bedrock.image('amazon.nova-canvas-v1:0');
```

You can then generate images with the `experimental_generateImage` function:

```ts
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { experimental_generateImage as generateImage } from 'ai';

const { image } = await generateImage({
  model: bedrock.image('amazon.nova-canvas-v1:0'),
  prompt: 'A beautiful sunset over a calm ocean',
  size: '512x512',
  seed: 42,
});
```

You can also pass the `providerOptions` object to the `generateImage` function to customize the generation behavior:

```ts
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { experimental_generateImage as generateImage } from 'ai';

const { image } = await generateImage({
  model: bedrock.image('amazon.nova-canvas-v1:0'),
  prompt: 'A beautiful sunset over a calm ocean',
  size: '512x512',
  seed: 42,
  providerOptions: {
    bedrock: {
      quality: 'premium',
      negativeText: 'blurry, low quality',
      cfgScale: 7.5,
      style: 'PHOTOREALISM',
    },
  },
});
```

The following optional provider options are available for Amazon Nova Canvas:

- **quality** *string*

  The quality level for image generation. Accepts `'standard'` or `'premium'`.

- **negativeText** *string*

  Text describing what you don't want in the generated image.

- **cfgScale** *number*

  Controls how closely the generated image adheres to the prompt. Higher values result in images that are more closely aligned to the prompt.

- **style** *string*

  Predefined visual style for image generation.\
  Accepts one of:
  `3D_ANIMATED_FAMILY_FILM` · `DESIGN_SKETCH` · `FLAT_VECTOR_ILLUSTRATION` ·\
  `GRAPHIC_NOVEL_ILLUSTRATION` · `MAXIMALISM` · `MIDCENTURY_RETRO` ·\
  `PHOTOREALISM` · `SOFT_DIGITAL_PAINTING`.

Documentation for additional settings can be found within the [Amazon Bedrock
User Guide for Amazon Nova
Documentation](https://docs.aws.amazon.com/nova/latest/userguide/image-gen-req-resp-structure.html).

### Image Model Settings

You can customize the generation behavior with optional options:

```ts
await generateImage({
  model: bedrock.image('amazon.nova-canvas-v1:0'),
  prompt: 'A beautiful sunset over a calm ocean',
  size: '512x512',
  seed: 42,
  maxImagesPerCall: 1, // Maximum number of images to generate per API call
});
```

- **maxImagesPerCall** *number*

  Override the maximum number of images generated per API call. Default can vary
  by model, with 5 as a common default.

### Model Capabilities

The Amazon Nova Canvas model supports custom sizes with constraints as follows:

- Each side must be between 320-4096 pixels, inclusive.
- Each side must be evenly divisible by 16.
- The aspect ratio must be between 1:4 and 4:1. That is, one side can't be more than 4 times longer than the other side.
- The total pixel count must be less than 4,194,304.

For more, see [Image generation access and
usage](https://docs.aws.amazon.com/nova/latest/userguide/image-gen-access.html).

| Model                     | Sizes                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| `amazon.nova-canvas-v1:0` | Custom sizes: 320-4096px per side (must be divisible by 16), aspect ratio 1:4 to 4:1, max 4.2M pixels |

## Response Headers

The Amazon Bedrock provider will return the response headers associated with
network requests made of the Bedrock servers.

```ts
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { generateText } from 'ai';

const { text } = await generateText({
  model: bedrock('meta.llama3-70b-instruct-v1:0'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});

console.log(result.response.headers);
```

Below is sample output where you can see the `x-amzn-requestid` header. This can
be useful for correlating Bedrock API calls with requests made by the AI SDK:

```js highlight="6"
{
  connection: 'keep-alive',
  'content-length': '2399',
  'content-type': 'application/json',
  date: 'Fri, 07 Feb 2025 04:28:30 GMT',
  'x-amzn-requestid': 'c9f3ace4-dd5d-49e5-9807-39aedfa47c8e'
}
```

This information is also available with `streamText`:

```ts
import { bedrock } from '@ai-sdk/amazon-bedrock';
import { streamText } from 'ai';

const result = streamText({
  model: bedrock('meta.llama3-70b-instruct-v1:0'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}
console.log('Response headers:', (await result.response).headers);
```

With sample output as:

```js highlight="6"
{
  connection: 'keep-alive',
  'content-type': 'application/vnd.amazon.eventstream',
  date: 'Fri, 07 Feb 2025 04:33:37 GMT',
  'transfer-encoding': 'chunked',
  'x-amzn-requestid': 'a976e3fc-0e45-4241-9954-b9bdd80ab407'
}
```
