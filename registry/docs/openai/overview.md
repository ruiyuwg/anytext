## Overview

The OpenAI API lets you generate and edit images from text prompts, using GPT Image or DALL·E models. You can access image generation capabilities through two APIs:

### Image API

The [Image API](https://developers.openai.com/api/docs/api-reference/images) provides three endpoints, each with distinct capabilities:

- **Generations**: [Generate images](#generate-images) from scratch based on a text prompt
- **Edits**: [Modify existing images](#edit-images) using a new prompt, either partially or entirely
- **Variations**: [Generate variations](#image-variations) of an existing image (available with DALL·E 2 only)

This API supports GPT Image models (`gpt-image-1.5`, `gpt-image-1`, and `gpt-image-1-mini`) as well as `dall-e-2` and `dall-e-3`.

### Responses API

The [Responses API](https://developers.openai.com/api/docs/api-reference/responses/create#responses-create-tools) allows you to generate images as part of conversations or multi-step flows. It supports image generation as a [built-in tool](https://developers.openai.com/api/docs/guides/tools?api-mode=responses), and accepts image inputs and outputs within context.

Compared to the Image API, it adds:

- **Multi-turn editing**: Iteratively make high fidelity edits to images with prompting
- **Flexible inputs**: Accept image [File](https://developers.openai.com/api/docs/api-reference/files) IDs as input images, not just bytes

The image generation tool in responses uses GPT Image models (`gpt-image-1.5`, `gpt-image-1`, and `gpt-image-1-mini`).
When using `gpt-image-1.5` and `chatgpt-image-latest` with the Responses API, you can optionally set the `action` parameter, detailed below.
For a list of mainline models that support calling this tool, refer to the [supported models](#supported-models) below.

### Choosing the right API

- If you only need to generate or edit a single image from one prompt, the Image API is your best choice.
- If you want to build conversational, editable image experiences with GPT Image, go with the Responses API.

Both APIs let you [customize output](#customize-image-output) — adjust quality, size, format, compression, and enable transparent backgrounds.

### Model comparison

Our latest and most advanced model for image generation is `gpt-image-1.5`, a natively multimodal language model, part of the GPT Image family.

GPT Image models include `gpt-image-1.5` (state of the art), `gpt-image-1`, and `gpt-image-1-mini`. They share the same API surface, with `gpt-image-1.5` offering the best overall quality.

We recommend using `gpt-image-1.5` for the best experience, but if you are looking for a more cost-effective option and image quality isn't a priority, you can use `gpt-image-1-mini`.

You can also use specialized image generation models—DALL·E 2 and DALL·E 3—with the Image API, but please note these models are now deprecated and we will stop supporting them on 05/12, 2026.

| Model     | Endpoints                                                                            | Use case                                                                               |
| --------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| DALL·E 2  | Image API: Generations, Edits, Variations                                            | Lower cost, concurrent requests, inpainting (image editing with a mask)                |
| DALL·E 3  | Image API: Generations only                                                          | Higher image quality than DALL·E 2, support for larger resolutions                     |
| GPT Image | Image API: Generations, Edits – Responses API (as part of the image generation tool) | Superior instruction following, text rendering, detailed editing, real-world knowledge |

This guide focuses on GPT Image. To view the DALL·E model-specific content in this same guide, switch to the [DALL·E 2 view](https://developers.openai.com/api/docs/guides/image-generation?image-generation-model=dall-e-2) or [DALL·E 3 view](https://developers.openai.com/api/docs/guides/image-generation?image-generation-model=dall-e-3).

To ensure this model is used responsibly, you may need to complete the [API
Organization
Verification](https://help.openai.com/en/articles/10910291-api-organization-verification)
from your [developer
console](https://platform.openai.com/settings/organization/general) before
using GPT Image models, including `gpt-image-1.5`, `gpt-image-1`, and
`gpt-image-1-mini`.

<div
  className="not-prose"
  style={{ float: "right", margin: "10px 0 10px 10px" }}
>
  <img src="https://cdn.openai.com/API/docs/images/mug.png"
    alt="A beige coffee mug on a wooden table"
    style={{ height: "180px", width: "auto", borderRadius: "8px" }}
  />
