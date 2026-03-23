## Flagship models

## International

In the [International deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Inference computing resources are dynamically scheduled worldwide, excluding Chinese Mainland.

Qwen3.5-Plus supports text, image, and video inputs. Its text performance is comparable to Qwen3-Max, but faster and more cost-effective. Its multimodal capabilities also significantly outperform the Qwen3-VL series.

**Flagship models**

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen3-Max**

Best for complex tasks, most capable

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen3.5-Plus**

Balanced performance, speed, and cost

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen3.5-Flash**

Best for simple tasks, fast and cost-effective

Max context window

(tokens)

262,144

1,000,000

1,000,000

Min input price

(per 1M tokens)

$1.2

$0.4

$0.1

Min output price

(per 1M tokens)

$6

$2.4

$0.4

## Global

In the [Global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Inference computing resources are dynamically scheduled worldwide.

Qwen3.5-Plus supports text, image, and video inputs. Its text performance is comparable to Qwen3-Max, but faster and more cost-effective. Its multimodal capabilities also significantly outperform the Qwen3-VL series.

**Flagship models**

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen3-Max**

Best for complex tasks, most capable

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen3.5-Plus**

Balanced performance, speed, and cost

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen3.5-Flash**

Best for simple tasks, fast and cost-effective

Max context window

(tokens)

262,144

1,000,000

1,000,000

Min input price

(per 1M tokens)

$0.359

$0.115

$0.029

Min output price

(per 1M tokens)

$1.434

$0.688

$0.287

## United States

In the [US deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Inference computing resources are limited to the United States.

**Flagship models**

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen-Plus**

Balanced performance, speed, and cost

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen-Flash**

Best for simple tasks, fast and cost-effective

Max context window

(tokens)

1,000,000

1,000,000

Min input price

(per 1M tokens)

$0.4

$0.05

Min output price

(per 1M tokens)

$1.2

$0.4

## **Chinese Mainland**

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Inference computing resources are limited to Chinese Mainland.

Qwen3.5-Plus supports text, image, and video inputs. Its text performance is comparable to Qwen3-Max, but faster and more cost-effective. Its multimodal capabilities also significantly outperform the Qwen3-VL series.

**Flagship models**

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen3-Max**

Best for complex tasks, most capable

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen3.5-Plus**

Balanced performance, speed, and cost

![new](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1921776571/p838707.png) **Qwen3.5-Flash**

Best for simple tasks, fast and cost-effective

Max context window

(tokens)

262,144

1,000,000

1,000,000

Min input price

(per 1M tokens)

$0.359

$0.115

$0.029

Min output price

(per 1M tokens)

$1.434

$0.688

$0.287

## **Model overview**

## International

In the [International deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**, and model inference compute resources are dynamically scheduled globally, excluding Chinese mainland.

**Category**

**Subcategory**

**Description**

Text generation

[General-purpose large language models](#74502d60f4wy5)

Qwen large language models:

-   Commercial: [Qwen-Max](#131ff25c87sj6), [Qwen-Plus](#bb1e0794618ty) (upgraded to Qwen3.5), [Qwen-Flash](#c299c2b53eyoh)
    
-   Open source: [Qwen3.5](#568c06efe4440), [Qwen3](#fa618290fc24d), [Qwen2.5](#cae1159e00ixp)
    

[Multimodal models](#5540e6e52e1xx)

Visual understanding models ([Qwen-Plus](#bb1e0794618ty), [Qwen-VL](#5540e6e52e1xx), [QVQ](#cd0150a4cd3zh)), omni-modal model [Qwen-Omni](#d77d57d3436d2), and real-time multimodal model [Qwen-Omni-Realtime](#43cbf9fc7deew)

[Domain models](#673bef6a2fxfg)

[Coder models](#673bef6a2fxfg), [translation models](#a196bb6f3bdg7), [role-playing models](#269738a1dc6k1)

Image generation

[Text-to-image](#9fe27e73efius)

-   [Qwen image generation](#9648161a22le8): handles complex instructions, renders Chinese and English text, and generates high-definition realistic images. It also supports selecting different models based on efficiency and quality requirements.
    
-   Wan text-to-image:
    
    -   [Basic text-to-image](#85611ff8f3x8d): Generates high-quality images from a single sentence.
        
    -   [Mixed text and image output](#1e79f0e8c4ddo): Generates a text description followed by a corresponding image to create a continuous "text + image" output.
        
-   [Z-Image](#38805c272btew): A lightweight text-to-image model that quickly generates high-quality images and supports bilingual rendering (Chinese and English), complex semantic understanding, and multiple artistic styles.
    

[Image editing](#809eb92b1fyko)

-   [Qwen image editing](#809eb92b1fyko): Supports Chinese and English prompt input, enabling complex image-text editing operations such as style transfer, text modification, and object editing. It also supports multi-image fusion, suitable for a wide range of industrial application scenarios.
    
-   [Wan image editing](#1e79f0e8c4ddo): Suitable for scenarios such as multi-image fusion, style transfer, object detection, image inpainting, and watermark removal. The model series includes: [Wan2.6](#1e79f0e8c4ddo) and [Wan2.5](#d1308a9056se5).
    

Speech synthesis and recognition

[Speech synthesis (text-to-speech)](#26219b47e7fs8)

[Qwen speech synthesis](#4735866a686jb) and [Qwen real-time speech synthesis](#3d4b20fdb94v4) enable text-to-speech and are suitable for scenarios such as intelligent voice customer service, audiobooks, in-vehicle navigation, and education tutoring.

[Speech recognition and translation](#71f4397c320nb)

[Qwen real-time ASR](#d400e7537a5zv), [Qwen audio file ASR](#b65bcd10fdn71), [Qwen3-LiveTranslate-Flash-Realtime](#5ebcab5ffcp0z), and [Fun-ASR](#92e59d3d13v5v) enable speech-to-text conversion and are suitable for scenarios such as real-time meeting transcription, real-time live streaming captions, and telephone customer service.

Video generation

[Text-to-video](#036e059db2oqx)

Generates a video from a single sentence, featuring rich styles and fine image quality.

[Image-to-video](#9b1ed58801v4i)

-   [First-frame-to-video](#9b1ed58801v4i): Uses an input image as the first frame of the video and generates the video based on the prompt.
    
-   [First-and-last-frame-to-video](#9f9da7912a14i): You only need to provide the first and last frame images to generate a smooth dynamic video based on a prompt.
    
-   [Multi-image video generation](#a7abce6ee219j): Supports one or more images, references the entities or background in the images, and generates video using prompts.
    

[Video-to-video](#32ae196135fk9)

[Reference-to-video](#32ae196135fk9): Generates performance videos by referencing a character's appearance from an input video or image, the voice from the input video, and text prompts.

[General-purpose video editing](#a7abce6ee219j)

[General video editing](#a7abce6ee219j): Based on input text, images, and videos, you can perform various video editing tasks. For example, extract motion features from input videos and generate new videos using prompts.

Embedding

[Text embedding](#cff6607866tsg)

Converts text into a set of numbers that represent the text, suitable for search, clustering, recommendation, and classification tasks.

## Global

In the [Global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**, and model inference computing resources are dynamically scheduled globally.

**Category**

**Subcategory**

**Description**

Text generation

[General-purpose large language models](#74502d60f4wy5)

Qwen large language models:

-   Commercial: [Qwen-Max](#131ff25c87sj6), [Qwen-Plus](#bb1e0794618ty), [Qwen-Flash](#c299c2b53eyoh)
    
-   Open source: [Qwen3](#fa618290fc24d)
    

[Multimodal models](#5540e6e52e1xx)

Visual understanding model [Qwen-VL](#5540e6e52e1xx)

[Domain models](#673bef6a2fxfg)

[Coder models](#673bef6a2fxfg), [translation models](#a196bb6f3bdg7)

Image generation

[Text-to-image](#9fe27e73efius)

-   Wan text-to-image:
    
    -   [Basic text-to-image](#85611ff8f3x8d): Generate stunning images from a single sentence.
        
    -   [Mixed text and image output](#1e79f0e8c4ddo): It first generates a text description and then immediately generates the corresponding image to achieve seamless text-and-image output.
        

[Image editing](#809eb92b1fyko)

-   [Wan image editing](#1e79f0e8c4ddo): Suitable for scenarios such as multi-image fusion, style transfer, object detection, image inpainting, watermark removal, etc. Model series: [Wan2.6](#1e79f0e8c4ddo).
    

Video generation

[Text-to-video](#036e059db2oqx)

Generates a video from a single sentence, featuring rich styles and fine image quality.

[Image-to-video](#9b1ed58801v4i)

[Image-to-video – first frame](#9b1ed58801v4i): Uses an input image as the first frame to generate a video based on a prompt.

[Video-to-video](#32ae196135fk9)

[Reference-to-video](#32ae196135fk9): Generates performance videos by referencing a character's appearance from an input video or image, the voice from the input video, and text prompts.

## US

In the [US deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**, and model inference compute resources are limited to the United States.

**Category**

**Subcategory**

**Description**

Text generation

[General-purpose large language models](#74502d60f4wy5)

Qwen large language models: Commercial ([Qwen-Plus](#bb1e0794618ty), [Qwen-Flash](#c299c2b53eyoh))

[Multimodal models](#5540e6e52e1xx)

Visual understanding model [Qwen-VL](#5540e6e52e1xx)

Video generation

[Text-to-video](#036e059db2oqx)

Generates a video from a single sentence, featuring rich styles and fine image quality.

[Image-to-video](#9b1ed58801v4i)

[First frame to video](#9b1ed58801v4i): Uses the input image as the first frame to generate a video based on the prompt.

Speech recognition

[Speech recognition](#71f4397c320nb)

[Qwen audio file recognition](#b65bcd10fdn71) enables speech-to-text conversion and is suitable for scenarios such as meeting minutes and live captions.

## **Chinese mainland**

In the [Chinese mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**, and model inference compute resources are limited to Chinese mainland.

**Category**

**Subcategory**

**Description**

Text generation

[General-purpose large language models](#74502d60f4wy5)

-   Qwen large language models:
    
    -   Commercial: [Qwen-Max](#131ff25c87sj6), [Qwen-Plus](#bb1e0794618ty) (upgraded to Qwen3.5), [Qwen-Flash](#c299c2b53eyoh)
        
    -   Open source: [Qwen3.5](#568c06efe4440), [Qwen3](#fa618290fc24d), [Qwen2.5](#cae1159e00ixp)
        
-   Third-party models: [DeepSeek](#861a0645aapcl), [Kimi](#82d3721d122dy), [GLM](#db96fdc924eng)
    

[Multimodal models](#5540e6e52e1xx)

Visual understanding models ([Qwen-Plus](#bb1e0794618ty), [Qwen-VL](#5540e6e52e1xx), and [QVQ](#cd0150a4cd3zh)) and the omni-modal model [Qwen-Omni](#d77d57d3436d2)

[Domain models](#673bef6a2fxfg)

[Coder models](#673bef6a2fxfg), [mathematical models](#5c1c8e4f08mr5), [translation models](#a196bb6f3bdg7), [data mining models](#55013b0caagpp), [in-depth research models](#99556eb0d7q5w), [intention recognition models](#4f2054106eh3l), [role assumption models](#269738a1dc6k1)

Image generation

[Text-to-image](#9fe27e73efius)

-   [Qwen image generation](#9648161a22le8): Excels in handling complex instructions, rendering Chinese and English text, and generating high-definition realistic images. It lets you select different models based on your efficiency and quality requirements.
    
-   Wanx text-to-image:
    
    -   [Basic text-to-image](#85611ff8f3x8d): Generate beautiful images from a single sentence.
        
    -   [Mixed text and image output](#1e79f0e8c4ddo): Generates a segment of text description, followed by the corresponding image, to create a continuous text-and-image output.
        
-   [Z-Image](#38805c272btew): A lightweight text-to-image model that can quickly generate high-quality images and supports bilingual rendering (Chinese and English), complex semantic understanding, and multiple artistic styles.
    

[Image editing](#809eb92b1fyko)

General-purpose models:

-   [Qwen image editing](#809eb92b1fyko): Supports Chinese and English prompt input to perform complex image and text editing operations, such as style transfer, text modification, and object editing. It also supports multi-image fusion and is suitable for a wide variety of industrial application scenarios.
    
-   [Wan image editing](#1e79f0e8c4ddo): Supports scenarios including multi-image fusion, style transfer, object detection, image inpainting, and watermark removal. The model series includes: [Wan2.6](#1e79f0e8c4ddo), [Wan2.5](#d1308a9056se5), and [Wan2.1](#30608e5733a8x).
    

More models: [Qwen image translation](#fcf2057296lk0), [OutfitAnyone](#877f8a1a2amxq)

Speech synthesis and recognition

[Speech synthesis (text-to-speech)](#26219b47e7fs8)

[Qwen speech synthesis](#4735866a686jb), [Qwen real-time speech synthesis](#3d4b20fdb94v4), and [CosyVoice speech synthesis](#dd6868057ctvw) support text-to-speech conversion and are suitable for scenarios such as intelligent voice customer service, audiobooks, in-vehicle navigation, and education tutoring.

[Speech recognition and translation](#71f4397c320nb)

[Qwen real-time speech recognition](#d400e7537a5zv), [Qwen audio file transcription](#b65bcd10fdn71), [Fun-ASR speech recognition](#92e59d3d13v5v), and [Paraformer speech recognition](#a39f4b6951jsm) convert speech to text and are suitable for scenarios such as real-time meeting transcription, real-time live streaming captions, and call center services.

Video editing and generation

[Text-to-video](#036e059db2oqx)

Generates a video from a single sentence, featuring rich styles and fine image quality.

[Image-to-video](#9b1ed58801v4i)

-   [Image-to-video – first frame](#9b1ed58801v4i): Generates a complete video based on an input image as the first frame and a prompt.
    
-   [Image-to-video – first and last frames](#9f9da7912a14i): Provide first and last frame images and combine them with prompts to generate videos with natural transitions.
    
-   [Multi-image to video](#a7abce6ee219j): Supports generating a video based on the entity or background from one or more input images and a prompt.
    
-   Image + action template generates dance videos: [AnimateAnyone](#c5f5423b1e567) generates dance videos from a person image and an action video.
    
-   Image + audio to generate lip-sync video
    
    -   [Wan digital human](#3045310914gf7) uses a person's **image** and audio to generate digital humans with large and natural movements, supports full-body, half-body, and portrait framing options, and is ideal for scenarios such as singing and performing.
        
    -   [EMO](#28e8a7f8ab3zw) uses a person's **portrait image** and audio to deliver excellent lip-sync and facial expression capabilities, supports portrait and half-body formats, and is ideal for close-up character scenarios.
        
    -   [LivePortrait](#d25a12ab48vdr) uses a person's **image** and audio, and is suitable for voice announcement scenarios.
        
-   Image + Emoji Template generates emoji sticker videos: [Emoji](#20caaedb2cgkx) generates facial emoji sticker videos based on face images and preset facial animation templates.
    

[Video-to-video](#32ae196135fk9)

[Reference-to-video](#32ae196135fk9): Generates performance videos by referencing a character's appearance from an input video or image, the voice from the input video, and text prompts.

[General video editing](#a7abce6ee219j)

-   [General video editing](#a7abce6ee219j): Based on input text prompts, images, and videos, you can perform various video editing tasks. For example, you can extract motion features from the input video and combine them with prompts to generate new videos.
    
-   Video lip-sync replacement: [VideoRetalk](#20c842015a8xp) uses a person's **video** and audio, and is suitable for scenarios such as short video production and video translation.
    
-   Video style transfer: [Video style transform](#101f9ad4210ev) can convert videos into styles such as Japanese manga and American comics.
    

Embedding

[Text embedding](#cff6607866tsg)

Converts text into a set of numbers that represent the text, used for search, clustering, recommendation, classification, and more.

[Multimodal embedding](#0b924d17b402q)

Converts text, images, and audio into a set of numbers, used for audio/video classification, image classification, image-text retrieval, and more.

## Text generation – Qwen

This section covers the commercial versions of the Qwen models. Compared with the open-source versions, commercial models offer the latest capabilities and improvements.

> The parameter count for commercial models is not disclosed.

> Models are updated periodically. To use a fixed version, you can select a snapshot version. Snapshot versions are typically maintained until one month after the next snapshot version is released.

> We recommend using stable or latest versions. These versions have more relaxed [rate limiting](/help/en/model-studio/rate-limit) conditions.

### Qwen-Max

The most powerful model in the Qwen series, ideal for complex, multi-step tasks. [Usage](/help/en/model-studio/text-generation#24e54b27d4agt) | [Thinking](/help/en/model-studio/deep-thinking) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try online](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt?modelId=qwen3-max-preview)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

Output cost

**CoT + output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen3-max

> Currently qwen3-max-2026-01-23

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> Supports [calling built-in tools](/help/en/model-studio/compatibility-with-openai-responses-api#11cd08d0ffnxw)

Stable

Thinking

262,144

258,048

81,920

32,768

Tiered pricing. See details below.

1 million tokens each

Valid for 90 days after activating Model Studio

Non-thinking

\-

65,536

qwen3-max-2026-01-23

> Thinking mode aka [Qwen3-Max-Thinking](https://qwen.ai/blog?id=qwen3-max-thinking)

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> Supports [calling built-in tools](/help/en/model-studio/compatibility-with-openai-responses-api#11cd08d0ffnxw)

Snapshot

Thinking

81,920

32,768

Non-thinking

\-

65,536

qwen3-max-2025-09-23

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

Non-thinking only

qwen3-max-preview

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Preview

Thinking

81,920

32,768

Non-thinking

\-

65,536

The models above use tiered pricing based on the number of input tokens in the current request.

**Input tokens per request**

**Input cost (per 1M tokens)**

> qwen3-max and qwen3-max-preview support [context cache](/help/en/model-studio/context-cache).

**Output cost (per 1M tokens)**

0<Token≤32K

$1.2

$6

32K<Token≤128K

$2.4

$12

128K<Token≤252K

$3

$15

**More models**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen-max**

> Currently qwen-max-2025-01-25

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

32,768

30,720

8,192

$1.6

$6.4

1 million tokens each

Valid for 90 days after activating Model Studio

**qwen-max-latest**

> Always the latest snapshot

Latest

$1.6

$6.4

qwen-max-2025-01-25

> Also known as qwen-max-0125, [Qwen2.5-Max](https://qwenlm.github.io/zh/blog/qwen2.5-max/)

Snapshot

#### Global

In [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled worldwide.

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen3-max

> Currently qwen3-max-2025-09-23

> [context cache](/help/en/model-studio/context-cache) discount available

Stable

Non-thinking only

262,144

258,048

\-

65,536

Tiered pricing. See details below.

None

qwen3-max-2025-09-23

Snapshot

Non-thinking only

qwen3-max-preview

> [Context cache](/help/en/model-studio/context-cache) discount available

Preview

Thinking

81,920

32,768

Non-thinking

\-

65,536

The models above use tiered pricing based on the number of input tokens in the current request.

**Model**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

> **CoT + response**

qwen3-max

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

> [context cache](/help/en/model-studio/context-cache) discount available

0<Token≤32K

$0.359

$1.434

32K<Token≤128K

$0.574

$2.294

128K<Token≤252K

$1.004

$4.014

qwen3-max-2026-01-23

0<Token≤32K

$0.359

$1.434

32K<Token≤128K

$0.574

$2.294

128K<Token≤252K

$1.004

$4.014

qwen3-max-2025-09-23

0<Token≤32K

$0.861

$3.441

32K<Token≤128K

$1.434

$5.735

128K<Token≤252K

$2.151

$8.602

qwen3-max-preview

> [context cache](/help/en/model-studio/context-cache) discount available

0<Token≤32K

$0.861

$3.441

32K<Token≤128K

$1.434

$5.735

128K<Token≤252K

$2.151

$8.602

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwen3-max

> Currently qwen3-max-2026-01-23

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> Supports [calling built-in tools](/help/en/model-studio/compatibility-with-openai-responses-api#11cd08d0ffnxw)

Stable

Thinking

262,144

258,048

81,920

32,768

Tiered pricing. See details below.

Non-thinking

\-

65,536

qwen3-max-2026-01-23

> Thinking mode aka [Qwen3-Max-Thinking](https://qwen.ai/blog?id=qwen3-max-thinking)

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> Supports [calling built-in tools](/help/en/model-studio/compatibility-with-openai-responses-api#11cd08d0ffnxw)

Snapshot

Thinking

81,920

32,768

Non-thinking

\-

65,536

qwen3-max-2025-09-23

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

Non-thinking only

qwen3-max-preview

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Preview

Thinking

81,920

32,768

Non-thinking

\-

65,536

The models above use tiered pricing based on the number of input tokens in the current request.

**Model**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

> **CoT + response**

qwen3-max

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

> [context cache](/help/en/model-studio/context-cache) discount available

0<Token≤32K

$0.359

$1.434

32K<Token≤128K

$0.574

$2.294

128K<Token≤252K

$1.004

$4.014

qwen3-max-2026-01-23

0<Token≤32K

$0.359

$1.434

32K<Token≤128K

$0.574

$2.294

128K<Token≤252K

$1.004

$4.014

qwen3-max-2025-09-23

0<Token≤32K

$0.861

$3.441

32K<Token≤128K

$1.434

$5.735

128K<Token≤252K

$2.151

$8.602

qwen3-max-preview

> [context cache](/help/en/model-studio/context-cache) discount available

0<Token≤32K

$0.861

$3.441

32K<Token≤128K

$1.434

$5.735

128K<Token≤252K

$2.151

$8.602

**More models**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-max**

> Currently qwen-max-2024-09-19

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

32,768

30,720

8,192

$0.345

$1.377

**qwen-max-latest**

> Always the latest snapshot.

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Latest

131,072

129,024

qwen-max-2025-01-25

> Also known as qwen-max-0125, [Qwen2.5-Max](https://qwenlm.github.io/zh/blog/qwen2.5-max/)

Snapshot

qwen-max-2024-09-19

> Also known as qwen-max-0919

32,768

30,720

$2.868

$8.602

#### China (Hong Kong)

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen3-max

> Currently qwen3-max-2026-01-23

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> Supports [Call built-in tools](/help/en/model-studio/compatibility-with-openai-responses-api#11cd08d0ffnxw)

Stable

Thinking

262,144

258,048

81,920

32,768

Tiered pricing. See details below.

1 million tokens each

Valid for 90 days after activating Model Studio

Non-thinking

\-

65,536

qwen3-max-2026-01-23

> Thinking mode aka [Qwen3-Max-Thinking](https://qwen.ai/blog?id=qwen3-max-thinking)

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> Supports [Call built-in tools](/help/en/model-studio/compatibility-with-openai-responses-api#11cd08d0ffnxw)

Snapshot

Thinking

81,920

32,768

Non-thinking

\-

65,536

The models above use tiered pricing based on the number of input tokens in the current request.

**Input tokens per request**

**Input cost (per 1M tokens)**

> qwen3-max and qwen3-max-preview support [Context cache](/help/en/model-studio/context-cache).

**Output cost (per 1M tokens)**

0<Token≤32K

$1.2

$6

32K<Token≤128K

$2.4

$12

128K<Token≤252K

$3

$15

> qwen3-max-2026-01-23 thinking mode: Compared to the snapshot from September 23, 2025, it effectively integrates thinking and non-thinking modes, significantly improving overall model performance. In thinking mode, the model integrates three tools-web search, web extractor, and code interpreter-to achieve higher accuracy on complex problems by leveraging external tools during reasoning.

The qwen3-max, qwen3-max-2026-01-23, and qwen3-max-2025-09-23 models natively support search agents. For more information, see [web search](/help/en/model-studio/web-search).

### Qwen-Plus

A balanced model with inference performance, cost, and speed between Qwen-Max and Qwen-Flash, ideal for moderately complex tasks.

[Usage](/help/en/model-studio/text-generation#24e54b27d4agt) | [Thinking](/help/en/model-studio/deep-thinking) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try online](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt)

Qwen3.5 Plus supports text, image, and video inputs. It performs on par with Qwen3 Max on plain-text tasks while delivering superior performance at a lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.

#### International

In the [International deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Inference computing resources are dynamically scheduled worldwide, excluding Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen3.5-plus**

> Currently, qwen3.5-plus-2026-02-15

> Thinking enabled by default

Stable

1,000,000

**Thinking mode**

983,616

**Non-thinking mode**

991,808

65,536

> Max CoT 81,920

Tiered pricing. See details below.

1 million tokens each

Valid for 90 days after activating Model Studio

qwen3.5-plus-2026-02-15

> Thinking enabled by default

Snapshot

**Thinking mode**

983,616

**Non-thinking mode**

991,808

65,536

> Max CoT 81,920

**qwen-plus**

> Currently, qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

**Thinking mode**

995,904

**Non-thinking mode**

997,952

32,768

> Max CoT 81,920

**qwen-plus-latest**

> Currently, qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Latest

**Thinking mode**

995,904

**Non-thinking mode**

997,952

qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

**Thinking mode**

995,904

**Non-thinking mode**

997,952

qwen-plus-2025-09-11

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

qwen-plus-2025-07-28

> Also known as qwen-plus-0728

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

qwen-plus-2025-07-14

> Also known as qwen-plus-0714

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

131,072

**Thinking mode**

98,304

**Non-thinking mode**

129,024

16,384

> Max CoT 38,912

$0.4

Thinking mode

$4

Non-thinking mode

$1.2

qwen-plus-2025-04-28

> Also known as qwen-plus-0428

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

qwen-plus-2025-01-25

> Also known as qwen-plus-0125

129,024

8,192

$1.2

qwen3.5-plus, qwen3.5-plus-2026-02-15, qwen-plus, qwen-plus-latest, qwen-plus-2025-12-01, qwen-plus-2025-09-11, and qwen-plus-2025-07-28 use tiered pricing based on the number of input tokens in the current request.

##### **Qwen3.5-Plus**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤256K

$0.4

$2.4

256K<Token≤1M

$0.5

$3

##### Qwen-Plus

**Input tokens per request**

**Mode**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤256K

Non-thinking mode

$0.4

$1.2

Thinking mode

$4

256K<Token≤1M

Non-thinking mode

$1.2

$3.6

Thinking mode

$12

#### **Global**

In the [Global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Inference computing resources are dynamically scheduled worldwide.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen3.5-plus**

> Currently, qwen3.5-plus-2026-02-15

> Thinking enabled by default

Stable

1,000,000

**Thinking mode**

983,616

**Non-thinking mode**

991,808

65,536

> Max CoT 81,920

Tiered pricing. See details below.

qwen3.5-plus-2026-02-15

> Thinking enabled by default

Snapshot

**Thinking mode**

983,616

**Non-thinking mode**

991,808

65,536

> Max CoT 81,920

**qwen-plus**

> Currently, qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Stable

**Thinking mode**

995,904

**Non-thinking mode**

997,952

32,768

> Max CoT 81,920

qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

**Thinking mode**

995,904

**Non-thinking mode**

997,952

qwen-plus-2025-09-11

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

qwen-plus-2025-07-28

> Also known as qwen-plus-0728

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

The above models use tiered pricing based on the number of input tokens in the current request.

##### **Qwen3.5-Plus**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤128K

$0.115

$0.688

128K≤Token≤256K

$0.287

$1.72

256K<Token≤1M

$0.573

$3.44

##### Qwen-Plus

**qwen-plus, qwen-plus-2025-12-01 , qwen-plus-2025-09-11, qwen-plus-2025-07-28**

**Input tokens per request**

**Mode**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤128K

Non-thinking mode

$0.115

$0.287

Thinking mode

$1.147

128K<Token≤256K

Non-thinking mode

$0.345

$2.868

Thinking mode

$3.441

256K<Token≤1M

Non-thinking mode

$0.689

$6.881

Thinking mode

$9.175

#### US

In the [US deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Inference computing resources are limited to the United States.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen-plus-us**

> Currently **qwen-plus-2025-12-01-us**

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/)series

Stable

1,000,000

**Thinking mode**

995,904

**Non-thinking mode**

997,952

32,768

> Max CoT 81,920

Tiered pricing. See details below.

None

**qwen-plus-2025-12-01-us**

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

**Thinking mode**

995,904

**Non-thinking mode**

997,952

The models above use tiered pricing based on the number of input tokens in the current request. qwen-plus-us supports [Context cache](/help/en/model-studio/context-cache).

**Input tokens per request**

**Input cost (per 1M tokens)**

**Mode**

**Output cost (per 1M tokens)**

0<Token≤256K

$0.4

Non-thinking mode

$1.2

Thinking mode

$4

256K<Token≤1M

$1.2

Non-thinking mode

$3.6

Thinking mode

$12

#### **Chinese Mainland**

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Inference computing resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen3.5-plus**

> Currently, qwen3.5-plus-2026-02-15

> Thinking enabled by default

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

1,000,000

**Thinking mode**

983,616

**Non-thinking mode**

991,808

65,536

> Max CoT 81,920

Tiered pricing. See details below.

qwen3.5-plus-2026-02-15

> Thinking enabled by default

Snapshot

**Thinking mode**

983,616

**Non-thinking mode**

991,808

65,536

> Max CoT 81,920

**qwen-plus**

> Currently, qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

**Thinking mode**

995,904

**Non-thinking mode**

997,952

32,768

> Max CoT 81,920

qwen-plus-latest

> Currently, qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Latest

**Thinking mode**

995,904

**Non-thinking mode**

997,952

qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

**Thinking mode**

995,904

**Non-thinking mode**

997,952

qwen-plus-2025-09-11

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

qwen-plus-2025-07-28

> Also known as qwen-plus-0728

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

qwen-plus-2025-07-14

> Also known as qwen-plus-0714

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

131,072

**Thinking mode**

98,304

**Non-thinking mode**

129,024

16,384

> Max CoT 38,912

$0.115

**Thinking mode**

$1.147

**Non-thinking mode**

$0.287

qwen-plus-2025-04-28

> Also known as qwen-plus-0428

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

qwen3.5-plus, qwen3.5-plus-2026-02-15, qwen-plus, qwen-plus-latest, qwen-plus-2025-12-01, qwen-plus-2025-09-11, and qwen-plus-2025-07-28 use tiered pricing based on the number of input tokens in the current request.

##### **Qwen3.5-Plus**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤128K

$0.115

$0.688

128K≤Token≤256K

$0.287

$1.72

256K<Token≤1M

$0.573

$3.44

##### Qwen-Plus

**Input tokens per request**

**Input cost (per 1M tokens)**

**Mode**

**Output cost (per 1M tokens)**

0<Token≤128K

$0.115

Non-thinking mode

$0.287

Thinking mode

$1.147

128K<Token≤256K

$0.345

Non-thinking mode

$2.868

Thinking mode

$3.441

256K<Token≤1M

$0.689

Non-thinking mode

$6.881

Thinking mode

$9.175

The models above support Thinking mode and Non-thinking mode. You can switch between the two modes using the`enable_thinking` parameter. For the models above, if no thinking process is output when Thinking mode is enabled, the model is charged at Non-thinking mode pricing.

**More models**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwen-plus-2025-01-25

> Also known asqwen-plus-0125

Snapshot

131,072

129,024

8,192

$0.115

$0.287

qwen-plus-2025-01-12

> Also known asqwen-plus-0112

qwen-plus-2024-12-20

> Also known asqwen-plus-1220

#### China (Hong Kong)

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-plus**

> Currently qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Stable

1,000,000

**Thinking**

995,904

**Non-thinking**

997,952

32,768

> Max CoT 81,920

Tiered pricing. See details below.

qwen-plus-2025-12-01

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

The qwen-plus-2025-12-01 model uses tiered pricing based on the number of input tokens in the current request.

**Input tokens per request**

**Mode**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤256K

Non-thinking mode

$0.4

$1.2

Thinking mode

$4

256K<Token≤1M

Non-thinking mode

$1.2

$3.6

Thinking mode

$12

### Qwen-Flash

The fastest and most cost-effective model in the Qwen series, ideal for simple tasks. Qwen-Flash uses flexible tiered pricing and is more cost-efficient than Qwen-Turbo. [Usage](/help/en/model-studio/text-generation#24e54b27d4agt) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try online](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt) | [Thinking](/help/en/model-studio/deep-thinking)

#### International

In the [International deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Inference computing resources are dynamically scheduled worldwide, excluding Chinese Mainland.

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + response**

**Free quota**

[(note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen3.5-flash**

> Currently, qwen3.5-flash-2026-02-23

> Thinking mode enabled by default

Stable

Thinking

1,000,000

983,616

81,920

65,536

$0.1

$0.4

1 million tokens each

Valid for 90 days after activating Model Studio

Non-thinking

991,808

\-

**qwen3.5-flash-2026-02-23**

> Thinking mode enabled by default

Snapshot

Thinking

983,616

81,920

Non-thinking

991,808

\-

**qwen-flash**

> Currently, qwen-flash-2025-07-28

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

Thinking

995,904

81,920

32,768

Tiered pricing. See details below.

Non-thinking

997,952

\-

**qwen-flash-2025-07-28**

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

Thinking

995,904

81,920

Non-thinking

997,952

\-

**qwen-flash and qwen-flash-2025-07-28 tiered pricing**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤256K

$0.05

$0.4

256K<Token≤1M

$0.25

$2

#### **Global**

In the [Global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Inference computing resources are dynamically scheduled worldwide.

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + response**

**(tokens)**

**(per 1M tokens)**

**qwen3.5-flash**

> Currently, qwen3.5-flash-2026-02-23

> Thinking mode enabled by default

Stable

Thinking

1,000,000

983,616

81,920

65,536

Tiered pricing. See details below.

Non-thinking

991,808

\-

**qwen3.5-flash-2026-02-23**

> Thinking mode enabled by default

Snapshot

Thinking

983,616

81,920

Non-thinking

991,808

\-

**qwen-flash**

> Currently, qwen-flash-2025-07-28

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Stable

Thinking

995,904

81,920

32,768

Non-thinking

997,952

\-

**qwen-flash-2025-07-28**

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

Thinking

995,904

81,920

Non-thinking

997,952

\-

The models above use tiered pricing based on the number of input tokens in the current request. qwen-flash supports [context cache](/help/en/model-studio/context-cache).

**qwen3.5-flash and qwen3.5-flash-2026-02-23 tiered pricing**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤128K

$0.029

$0.287

128K<Token≤256K

$0.115

$1.147

256K<Token≤1M

$0.172

$1.72

**qwen-flash and qwen-flash-2025-07-28 tiered pricing**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤128K

$0.022

$0.216

128K<Token≤256K

$0.087

$0.861

256K<Token≤1M

$0.173

$1.721

#### US

In the [US deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Inference computing resources are limited to the United States.

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + response**

**Free quota**

[(note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen-flash-us**

> Currently, qwen-flash-2025-07-28-us

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Stable

Thinking

1,000,000

995,904

81,920

32,768

Tiered pricing. See details below.

None

Non-thinking

997,952

\-

**qwen-flash-2025-07-28-us**

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

Thinking

995,904

81,920

Non-thinking

997,952

\-

The models above use tiered pricing based on the number of input tokens in the current request.

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤256K

$0.05

$0.4

256K<Token≤1M

$0.25

$2

#### **Chinese Mainland**

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Inference computing resources are limited to Chinese Mainland.

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + response**

**(tokens)**

**(per 1M tokens)**

**qwen3.5-flash**

> Currently, qwen3.5-flash-2026-02-23

> Thinking mode enabled by default

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

Thinking

1,000,000

983,616

81,920

65,536

Tiered pricing. See details below.

Non-thinking

991,808

\-

**qwen3.5-flash-2026-02-23**

> Thinking mode enabled by default

Snapshot

Thinking

983,616

81,920

Non-thinking

991,808

\-

**qwen-flash**

> Currently, qwen-flash-2025-07-28

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

Thinking

995,904

81,920

32,768

Non-thinking

997,952

\-

**qwen-flash-2025-07-28**

> Part of [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

Thinking

995,904

81,920

Non-thinking

997,952

\-

The models above use tiered pricing based on the number of input tokens in the current request. qwen3.5-flash supports [context cache](/help/en/model-studio/context-cache) and [batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/).

**qwen3.5-flash and qwen3.5-flash-2026-02-23 tiered pricing**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤128K

$0.029

$0.287

128K<Token≤256K

$0.115

$1.147

256K<Token≤1M

$0.172

$1.72

**qwen-flash and qwen-flash-2025-07-28 tiered pricing**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤128K

$0.022

$0.216

128K<Token≤256K

$0.087

$0.861

256K<Token≤1M

$0.173

$1.721

#### China (Hong Kong)

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen3.5-flash**

> Currently qwen3.5-flash-2026-02-23

> Thinking mode enabled by default

Stable

Thinking

1,000,000

983,616

81,920

65,536

$0.1

$0.4

1 million tokens each

Valid for 90 days after activating Model Studio

Non-thinking

991,808

\-

**qwen3.5-flash-2026-02-23**

> Thinking mode enabled by default

Snapshot

Thinking

983,616

81,920

Non-thinking

991,808

\-

### Qwen-Turbo

Qwen-Turbo will no longer receive updates. Replace it with Qwen-Flash. Qwen-Flash uses flexible tiered pricing for more cost-effective billing. [Usage](/help/en/model-studio/text-generation#24e54b27d4agt) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try online](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt) | [Thinking](/help/en/model-studio/deep-thinking)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference computing resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen-turbo**

> Currently qwen-turbo-2025-04-28

> Part of the [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

**Thinking**

131,072

**Non-thinking mode**

1,000,000

**Thinking**

98,304

**Non-thinking mode**

1,000,000

16,384

> Max CoT : 38,912

$0.05

Thinking mode: $0.5

Non-thinking mode: $0.2

1 million tokens each

Valid for 90 days after activating Model Studio

**qwen-turbo-latest**

> Always the latest snapshot

> Part of the [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Latest

$0.05

Thinking mode: $0.5

Non-thinking mode: $0.2

qwen-turbo-2025-04-28

> Also known as qwen-turbo-0428

> Part of the [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

qwen-turbo-2024-11-01

> Also known as qwen-turbo-1101

1,000,000

1,000,000

8,192

$0.2

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference computing resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-turbo**

> Currently qwen-turbo-2025-04-28

> Part of the [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Stable

**Thinking**

131,072

**Non-thinking mode**

1,000,000

**Thinking**

98,304

**Non-thinking mode**

1,000,000

16,384

> Max CoT : 38,912

$0.044

**Thinking**

$0.431

**Non-thinking mode**

$0.087

**qwen-turbo-latest**

> Always the latest snapshot

> Part of the [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Latest

qwen-turbo-2025-07-15

> Also known as qwen-turbo-0715

> Part of the [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

Snapshot

qwen-turbo-2025-04-28

> Also known as qwen-turbo-0428

> Part of the [Qwen3](https://qwenlm.github.io/zh/blog/qwen3/) series

### **QwQ**

QwQ is a reasoning model trained on the Qwen2.5 base and significantly enhanced through reinforcement learning. It achieves performance comparable to the full-capacity DeepSeek-R1 on core metrics, such as AIME 24/25 and LiveCodeBench, and on certain general benchmarks, such as IFEval and LiveBench. [Usage](/help/en/model-studio/deep-thinking)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Version**

**Context window**

**Max input**

**Max CoT**

**Max response**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwq-plus**

Stable

131,072

98,304

32,768

8,192

$0.8

$2.4

1 million tokens

Valid for 90 days after activating Model Studio

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max CoT**

**Max response**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwq-plus**

> Currently qwq-plus-2025-03-05

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

131,072

98,304

32,768

8,192

$0.230

$0.574

**qwq-plus-latest**

> Always the latest snapshot

Latest

qwq-plus-2025-03-05

> Also known as qwq-plus-0305

Snapshot

### **Qwen-Long**

This Qwen series model features the longest context window, balanced capabilities, and a low cost. It is ideal for long-text analysis, information extraction, summarization, and classification tasks. [Usage](/help/en/model-studio/long-context-qwen-long#72cee64e7ff13) | [Try online](https://bailian.console.alibabacloud.com/?tab=model#/model-market/detail/qwen-long?modelGroup=qwen-long)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-long-latest**

> Always the latest snapshot

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

10,000,000

10,000,000

32,768

$0.072

$0.287

qwen-long-2025-01-25

> Also known as qwen-long-0125

Snapshot

### **Qwen-Omni**

Qwen-Omni accepts multimodal inputs, such as text, images, audio, and video, and generates text or speech responses. It offers multiple expressive, human-like voice options and supports multilingual and dialect speech output. This makes it suitable for audiovisual chat scenarios, such as visual recognition, emotion sensing, and education. [Usage](/help/en/model-studio/qwen-omni) | [API reference](/help/en/model-studio/qwen-api-reference/)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore** region. Model inference computing resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-omni-flash**

> This model, qwen3-omni-flash-2025-12-01.

Stable

Thinking

65,536

16,384

32,768

16,384

1 million tokens (regardless of modality)

Valid for 90 days after activating Model Studio

Non-thinking

49,152

\-

qwen3-omni-flash-2025-12-01

Snapshot

Thinking

65,536

16,384

32,768

16,384

Non-thinking

49,152

\-

qwen3-omni-flash-2025-09-15

> Also known as qwen3-omni-flash-0915

Snapshot

Thinking

65,536

16,384

32,768

16,384

Non-thinking

49,152

\-

After the free quota is used up, input and output are billed as follows. The pricing is the same for thinking and non-thinking modes. Audio output is not supported in thinking mode.

**Input**

**Unit price (per 1M tokens)**

Text

$0.43

Audio

$3.81

Image/Video

$0.78

**Output**

**Unit price (per 1M tokens)**

Text

$1.66 (when input contains text only)

$3.06 (when input contains images, video, or audio)

Text + Audio

> This item is not billed in thinking mode.

$15.11 (audio)

> Text output is not billed.

**More models**

**Model**

**Version**

**Context window (tokens)**

**Max input (tokens)**

**Max output (tokens)**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen-omni-turbo**

> Currently, the qwen-omni-turbo-2025-03-26 snapshot.

Stable

32,768

30,720

2,048

1 million tokens (regardless of modality)

Valid for 90 days after activating Model Studio

**qwen-omni-turbo-latest**

> Always uses the latest snapshot.

> Identical capabilities

Latest

qwen-omni-turbo-2025-03-26

> Also known as qwen-omni-turbo-0326.

Snapshot

After the free quota for commercial models is used up, the following input and output billing rules apply:

**Enter the billing item.**

**Unit price (per 1M tokens)**

Text

$0.07

Audio

$4.44

Image/Video

$0.21

**Output**

**Unit price (per 1M tokens)**

Text

$0.27 (when input contains text only)

$0.63 (when input contains images, video, or audio)

Text + Audio

$8.89 (audio)

> Text output is not billed.

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing** region. Model inference computing resources are limited to Chinese Mainland.

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-omni-flash**

> Currently qwen3-omni-flash-2025-12-01

Stable

Thinking

65,536

16,384

32,768

16,384

No free quota

Non-thinking

49,152

\-

qwen3-omni-flash-2025-12-01

Snapshot

Thinking

65,536

16,384

32,768

16,384

Non-thinking

49,152

\-

qwen3-omni-flash-2025-09-15

> Also known as qwen3-omni-flash-0915

Snapshot

Thinking

65,536

16,384

32,768

16,384

Non-thinking

49,152

\-

After the free quota is used up, input and output are billed as follows. The pricing is the same for thinking and non-thinking modes. Audio output is not supported in thinking mode.

**Input Billing Item**

**Unit price (per 1M tokens)**

Text

$0.258

Audio

$2.265

Image/Video

$0.473

**Billing Output**

**Unit price (per 1M tokens)**

Text

$0.989 (when input contains text only)

$1.821 (when input contains images, video, or audio)

Text + Audio

> This item is not billed in thinking mode.

$8.974 (audio)

> Text output is not billed.

**More models**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**free quota**

[Note](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen-omni-turbo**

> Provides the same capabilities as qwen-omni-turbo-2025-03-26.

Stable

32,768

30,720

2,048

No free quota

**qwen-omni-turbo-latest**

> Always uses the latest snapshot.

> Same capabilities

Latest

qwen-omni-turbo-2025-03-26

> Also known as qwen-omni-turbo-0326.

Snapshot

qwen-omni-turbo-2025-01-19

> Also known as qwen-omni-turbo-0119.

The input and output billing rules are as follows:

**Billing Item**

**Unit price (per 1M tokens)**

Text

$0.058

Audio

$3.584

Image/Video

$0.216

**Output**

**Unit price (per 1M tokens)**

Text

$0.230 (when input contains text only)

$0.646 (when input contains images, audio, or video)

Text + Audio

$7.168 (audio)

> Text output is not billed.

Billing example: A request with 1,000 text tokens and 1,000 image tokens as input, generating 1,000 text tokens and 1,000 audio tokens as output, costs: $0.000058 (text input) + $0.000216 (image input) + $0.007168 (audio output).

Use the **Qwen3-Omni-Flash** model for its significant capability improvements over Qwen-Omni-Turbo, which is no longer updated:

-   It is a hybrid thinking model that supports both thinking and non-thinking modes. Switch between modes using the `enable_thinking` parameter. By default, thinking mode is disabled.
    
-   Audio output is not supported in thinking mode. For audio output in non-thinking mode:
    
    -   qwen3-omni-flash-2025-12-01 supports up to 49 voice options, qwen3-omni-flash-2025-09-15 and qwen3-omni-flash support up to 17 voice options, and Qwen-Omni-Turbo supports only 4.
        
    -   Supports up to 10 languages, while Qwen-Omni-Turbo supports only 2.
        

### **Qwen-Omni-Realtime**

Compared to Qwen-Omni, Qwen-Omni-Realtime supports streaming audio input and includes built-in Voice Activity Detection (VAD) to automatically detect the start and end of user speech. [Usage](/help/en/model-studio/realtime) | [Client events](/help/en/model-studio/client-events) | [Server events](/help/en/model-studio/server-events)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-omni-flash-realtime**

> Currently qwen3-omni-flash-realtime**\-**2025-12-01.

Stable

65,536

49,152

16,384

1 million tokens (regardless of modality)

Valid for 90 days after activating Model Studio

qwen3-omni-flash-realtime**\-**2025-12-01

Snapshot

qwen3-omni-flash-realtime**\-**2025-09-15

After the free quota is used up, input and output are billed as follows:

**Input**

**Unit price (per 1M tokens)**

Text

$0.52

Audio

$4.57

Image

$0.94

**Output**

**Unit price (per 1M tokens)**

Text

$1.99 (for text-only input)

$3.67 (for inputs with images or audio)

Text + Audio

$18.13 (for audio)

> Text output is not billed.

**More models**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen-omni-turbo-realtime**

> Currently qwen-omni-turbo-realtime**\-**2025-05-08

Stable

32,768

30,720

2,048

1 million tokens each (regardless of modality)

Valid for 90 days after activating Model Studio

**qwen-omni-turbo-realtime-latest**

> Always the latest snapshot.

Latest

qwen-omni-turbo-realtime**\-**2025-05-08

Snapshot

After the free quota is used up, input and output are billed as follows:

**Input Billing Item**

**Unit price (per 1M tokens)**

Text

$0.270

Audio

$4.440

Image

$0.840

**Output**

**Unit price (per 1M tokens)**

Text

$1.070 (when the input contains only text)

$2.52 (if the input contains images or audio)

Text + Audio

$8.890 (for audio)

> The text portion of the output is not subject to billing.

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-omni-flash-realtime**

> This model currently, qwen3-omni-flash-realtime**\-**2025-12-01.

Stable

65,536

49,152

16,384

No free quota

qwen3-omni-flash-realtime**\-**2025-12-01

Snapshot

qwen3-omni-flash-realtime**\-**2025-09-15

After the free quota is used up, input and output are billed as follows:

**Enter a billing item**

**Unit price (per 1M tokens)**

Text

$0.315

Audio

$2.709

Image

$0.559

**Output**

**Unit price (per 1M tokens)**

text

$1.19 (if the input contains only text)

$2.179 (if the input contains images or audio)

Text + Audio

$10.766 (for audio)

> The text part is not billed.

**More models**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen-omni-turbo-realtime**

> This model currently, the qwen-omni-turbo-2025-05-08 snapshot.

Stable

32,768

30,720

2,048

No free quota

**qwen-omni-turbo-realtime-latest**

> It always provides the same capabilities as the latest snapshot.

Latest

qwen-omni-turbo-realtime**\-**2025-05-08

Snapshot

The input and output billing rules are as follows:

**Billing Item Input**

**Unit price (per 1M tokens)**

Text

$0.230

Audio

$3.584

Image

$0.861

**Output**

**Unit price (per 1M tokens)**

text

$0.918 (for text-only input)

$2.581 (for input with images or audio)

Text + Audio

$7.168 (for audio)

> Text output is not billed.

Use the **Qwen3-Omni-Flash-Realtime** model instead of Qwen-Omni-Turbo-Realtime, which will no longer be updated. Qwen3-Omni-Flash-Realtime offers significant capability improvements. For audio output:

-   qwen3-omni-flash-realtime-2025-12-01 supports 49 voices. qwen3-omni-flash-realtime-2025-09-15 and qwen3-omni-realtime-flash support 17 voices. Qwen-Omni-Turbo-Realtime supports only 4.
    
-   Supports 10 languages, compared to Qwen-Omni-Turbo-Realtime's 2.
    

### QVQ

QVQ is a visual reasoning model that supports visual input and CoT output. It demonstrates stronger capabilities in math, programming, visual analysis, creation, and general tasks. [Usage](/help/en/model-studio/visual-reasoning) | [Try online](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/efm/prompt?modelId=qvq-max)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Version**

**Context window**

**Max input**

**Max CoT**

**Max response**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qvq-max**

> Currently qvq-max-2025-03-25.

Stable

131,072

106,496

> Max per image: 16,384

16,384

8,192

$1.2

$4.8

1 million input tokens each

Valid for 90 days after activating Model Studio

**qvq-max-latest**

> Always the latest snapshot.

Latest

qvq-max-2025-03-25

> Also known as qvq-max-0325.

Snapshot

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max CoT**

**Max response**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qvq-max**

> Offers stronger visual reasoning and instruction-following capabilities than qvq-plus and delivers optimal performance for more complex tasks.

> Currently qvq-max-2025-03-25

Stable

131,072

106,496

> Max per image: 16,384

16,384

8,192

$1.147

$4.588

**qvq-max-latest**

> Always the latest snapshot.

Latest

qvq-max-2025-05-15

> Also known as qvq-max-0515.

Snapshot

qvq-max-2025-03-25

> Also known as qvq-max-0325.

**qvq-plus**

> Currently qvq-plus-2025-05-15

Stable

$0.287

$0.717

**qvq-plus-latest**

> Always the latest snapshot.

Latest

qvq-plus-2025-05-15

> Also known as qvq-plus-0515.

Snapshot

### Qwen-VL

Qwen-VL is a text generation model with visual (image) understanding capabilities. It performs OCR, and can further summarize and reason. For example, it extracts attributes from product photos or solves problems based on exercise diagrams. [Usage](/help/en/model-studio/vision) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try online](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt)

> Qwen-VL models are billed based on the total number of input and output tokens. For more information about image token calculation rules, see [Visual Understanding](/help/en/model-studio/vision#7487c7f6eakzl).

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the access point and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT and output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen3-vl-plus**

> Currently qwen3-vl-plus-2025-12-19

Stable

Thinking

262,144

258,048

> Max per image: 16,384

81,920

32,768

Tiered pricing. See details below.

1 million input tokens and 1 million output tokens

Valid for 90 days after activating Model Studio

Non-thinking

260,096

> Max per image: 16,384

\-

qwen3-vl-plus-2025-12-19

Snapshot

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

qwen3-vl-plus-2025-09-23

Snapshot

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

**qwen3-vl-flash**

> Currently qwen3-vl-flash-2025-10-15

Stable

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

qwen3-vl-flash-2026-01-22

Snapshot

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

qwen3-vl-flash-2025-10-15

Snapshot

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

The models above use tiered pricing based on the number of input tokens in the current request. The input and output prices are the same for thinking and non-thinking modes. In addition, `qwen3-vl-plus` and `qwen3-vl-flash` models support [context cache](/help/en/model-studio/context-cache).

##### **qwen3-vl-plus** series

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0 < Tokens ≤ 32K

$0.2

$1.6

32K < Tokens ≤ 128K

$0.3

$2.4

128K < Tokens ≤ 256K

$0.6

$4.8

##### **qwen3-vl-flash** series

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0 < Tokens ≤ 32K

$0.05

$0.40

32K < Tokens ≤ 128K

$0.075

$0.6

128K < Tokens ≤ 256K

$0.12

$0.96

**More models**

##### Qwen-VL-Max

> All models below belong to the [Qwen2.5-VL](https://qwenlm.github.io/blog/qwen2.5-vl/) series, and the `qwen-vl-max` model supports [context cache](/help/en/model-studio/context-cache).

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen-vl-max**

> Provides enhanced visual reasoning and instruction-following capabilities compared to qwen-vl-plus, delivering optimal performance for more complex tasks.

> Currently qwen-vl-max-2025-08-13.

Stable

131,072

129,024

> Max per image: 16,384

8,192

$0.8

$3.2

1 million tokens for input and 1 million tokens for output

Valid for 90 days after activating Model Studio

**qwen-vl-max-latest**

> Always the latest snapshot.

Latest

$0.8

$3.2

qwen-vl-max-2025-08-13

> Also known as qwen-vl-max-0813.

> Visual understanding metrics have been fully upgraded, providing significantly enhanced capabilities in mathematics, reasoning, object recognition, and multilingual processing.

Snapshot

qwen-vl-max-2025-04-08

> Also known as qwen-vl-max-0408.

> As part of the [Qwen2.5-VL](https://qwenlm.github.io/blog/qwen2.5-vl/) series, this model extends the context window to 128,000 tokens and significantly enhances mathematics and reasoning capabilities.

##### Qwen-VL-Plus

> All models below belong to the [Qwen2.5-VL](https://qwenlm.github.io/blog/qwen2.5-vl/) series, and the `qwen-vl-plus` model supports [context cache](/help/en/model-studio/context-cache).

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen-vl-plus**

> Currently qwen-vl-plus-2025-08-15.

Stable

131,072

129,024

> Max per image: 16,384

8,192

$0.21

$0.63

1 million tokens each

Valid for 90 days after activating Model Studio

**qwen-vl-plus-latest**

> Always the latest snapshot.

Latest

$0.21

$0.63

qwen-vl-plus-2025-08-15

> Also known as qwen-vl-plus-0815.

> Features significantly improved object recognition and localization, and multilingual processing capabilities.

Snapshot

qwen-vl-plus-2025-05-07

> Also known as qwen-vl-plus-0507.

> Features significantly improved math, reasoning, and surveillance video content understanding capabilities.

qwen-vl-plus-2025-01-25

> Also known as qwen-vl-plus-0125.

> Part of the [Qwen2.5-VL](https://qwenlm.github.io/blog/qwen2.5-vl/) series, this model extends the context window to 128K tokens and significantly enhances image and video understanding capabilities.

#### **Global**

In [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the access point and data storage are both located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled worldwide.

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT and output**

**(tokens)**

**(per 1M tokens)**

**qwen3-vl-plus**

> Currently qwen3-vl-plus-2025-12-19.

Stable

Thinking

262,144

258,048

> Max per image: 16,384.

81,920

32,768

Tiered pricing. See details below.

Non-thinking

260,096

> Max per image: 16,384.

\-

qwen3-vl-plus-2025-09-23

Snapshot

Thinking

258,048

> Max per image: 16,384.

81,920

Non-thinking

260,096

> Max per image: 16,384.

\-

**qwen3-vl-flash**

> Currently qwen3-vl-flash-2025-10-15.

Stable

Thinking

258,048

> Max per image: 16,384.

81,920

Non-thinking

260,096

> Max per image: 16,384.

\-

qwen3-vl-flash-2025-10-15

Snapshot

Thinking

258,048

> Max per image: 16,384.

81,920

Non-thinking

260,096

> Max per image: 16,384.

\-

The models above use tiered pricing based on the number of input tokens in the current request. The input and output prices are the same for thinking and non-thinking modes. In addition, `qwen3-vl-plus` and `qwen3-vl-flash` models support [context cache](/help/en/model-studio/context-cache).

##### **qwen3-vl-plus** series

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0 < Tokens ≤ 32K

$0.143

$1.434

32K < Tokens ≤ 128K

$0.215

$2.15

128K < Tokens ≤ 256K

$0.43

$4.301

##### **qwen3-vl-flash** series

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0 < Tokens ≤ 32K

$0.022

$0.215

32K < Tokens ≤ 128K

$0.043

$0.43

128K < Tokens ≤ 256K

$0.086

$0.859

#### US

In [US deployment mode](/help/en/model-studio/regions/#080da663a75xh), the access point and data storage are both located in the **US (Virginia) region**. Model inference compute resources are limited to the US.

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + output**

**(tokens)**

**(per 1M tokens)**

**qwen3-vl-flash-us**

> Currently qwen3-vl-flash-2025-10-15-us

Stable

Thinking

262,144

258,048

> Max 16,384 per image

81,920

32,768

Tiered pricing. See details below.

Non-thinking

260,096

> Max 16,384 per image

\-

qwen3-vl-flash-2026-01-22-us

Snapshot

Thinking

258,048

> Max 16,384 per image

81,920

Non-thinking

260,096

> Max 16,384 per image

\-

qwen3-vl-flash-2025-10-15-us

Snapshot

Thinking

258,048

> Max 16,384 per image

81,920

Non-thinking

260,096

> Max 16,384 per image

\-

The models above use tiered pricing based on the number of input tokens in the current request. The input and output prices are the same for thinking and non-thinking modes. In addition, `qwen3-vl-flash-us` model supports [context cache](/help/en/model-studio/context-cache).

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0 < Tokens ≤ 32K

$0.05

$0.4

32K < Tokens ≤ 128K

$0.075

$0.6

128K < Tokens ≤ 256K

$0.12

$0.96

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the access point and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Mode**

**Context window (tokens)**

**Max input (tokens)**

**Max CoT**

**Max output (tokens)**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**Token count**

**per 1 M tokens**

**qwen3-vl-plus**

> Currently qwen3-vl-plus-2025-12-19

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

Thinking

262,144

258,048

> Max per image: 16,384

81,920

32,768

Tiered pricing. See details below.

No free quota

Non-thinking

260,096

> Max per image: 16,384

\-

qwen3-vl-plus-2025-12-19

Snapshot

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

qwen3-vl-plus-2025-09-23

Snapshot

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

**qwen3-vl-flash**

> Currently qwen3-vl-flash-2025-10-15

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

Stable

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

qwen3-vl-flash-2026-01-22

Snapshot

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

qwen3-vl-flash-2025-10-15

Snapshot

Thinking

258,048

> Max per image: 16,384

81,920

Non-thinking

260,096

> Max per image: 16,384

\-

The models above use tiered pricing based on the number of input tokens in the current request. The input and output prices are the same for thinking and non-thinking modes. In addition, `qwen3-vl-plus` and `qwen3-vl-flash` models support [context cache](/help/en/model-studio/context-cache).

##### **qwen3-vl-plus** series

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0 < Tokens ≤ 32K

$0.143

$1.434

32K < Tokens ≤ 128K

$0.215

$2.15

128K < Tokens ≤ 256K

$0.43

$4.301

##### **qwen3-vl-flash** series

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0 < Tokens ≤ 32K

$0.022

$0.215

32K < Tokens ≤ 128K

$0.043

$0.43

128K < Tokens ≤ 256K

$0.086

$0.859

**More models**

##### Qwen-VL-Max series

> Models updated on or after qwen-vl-max-2025-01-25 belong to the [Qwen2.5-VL](https://qwenlm.github.io/blog/qwen2.5-vl/) series, and the `qwen-vl-max` model supports [context cache](/help/en/model-studio/context-cache).

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-vl-max**

> Offers enhanced visual reasoning and instruction-following capabilities compared with qwen-vl-plus, delivering **optimal performance** for more complex tasks.

> Currently qwen-vl-max-2025-08-13.

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) are available at half price.

Stable

131,072

129,024

> Max per image: 16,384

8,192

$0.23

$0.574

**qwen-vl-max-latest**

> Always the latest snapshot

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) are available at half price.

Latest

qwen-vl-max-2025-08-13

> Also known as qwen-vl-max-0813.

> Features fully upgraded visual understanding metrics, with significantly enhanced capabilities in mathematics, reasoning, object recognition, and multilingual processing.

Snapshot

qwen-vl-max-2025-04-08

> Also known as qwen-vl-max-0408.

> Provides enhanced mathematics and reasoning capabilities.

$0.431

$1.291

qwen-vl-max-2025-04-02

> Also known as qwen-vl-max-0402.

> Delivers significantly improved accuracy when solving complex mathematics problems.

qwen-vl-max-2025-01-25

> Also known as qwen-vl-max-0125.

> Upgraded to the [Qwen2.5-VL](https://qwenlm.github.io/blog/qwen2.5-vl/) series, it extends the context window to 128K tokens and significantly enhances image and video understanding capabilities.

qwen-vl-max-2024-12-30

> Also known as qwen-vl-max-1230.

32,768

30,720

> Max per image: 16,384

2,048

$0.431

$1.291

qwen-vl-max-2024-11-19

> Also known as qwen-vl-max-1119.

##### Qwen-VL-Plus series

> `qwen-vl-plus-2025-01-25` belong to the [Qwen2.5-VL](https://qwenlm.github.io/blog/qwen2.5-vl/) series, and the `qwen-vl-plus` model supports [context cache](/help/en/model-studio/context-cache).

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-vl-plus**

> Currently qwen-vl-plus-2025-08-15.

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price.

Stable

131,072

129,024

> Max per image: 16,384

8,192

$0.115

$0.287

**qwen-vl-plus-latest**

> Always the latest snapshot.

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price.

Latest

qwen-vl-plus-2025-08-15

> Also known as qwen-vl-plus-0815.

> Significantly improved object recognition and localization, and multilingual processing capabilities.

Snapshot

qwen-vl-plus-2025-07-10

> Also known as qwen-vl-plus-0710.

> Further improves the understanding of surveillance video content.

32,768

30,720

> Max per image: 16,384

$0.022

$0.216

qwen-vl-plus-2025-05-07

> Also known as qwen-vl-plus-0507.

> Significantly improved math, reasoning, and surveillance video content understanding capabilities.

131,072

129,024

> Max per image: 16,384

$0.216

$0.646

qwen-vl-plus-2025-01-25

> Also known as qwen-vl-plus-0125.

> Upgraded to the [Qwen2.5-VL](https://qwenlm.github.io/blog/qwen2.5-vl/) series, it extends the context to 128K tokens and significantly enhances image and video understanding capabilities.

qwen-vl-plus-2025-01-02

> Also known as qwen-vl-plus-0102.

32,768

30,720

> Max per image: 16,384

2,048

#### China (Hong Kong)

**Model**

**Version**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen3-vl-plus**

> Currently qwen3-vl-plus-2025-12-19

Stable

Thinking

262,144

258,048

> Max 16,384 per image

81,920

32,768

Tiered pricing. See details below.

1 million tokens each

Valid for 90 days after activating Model Studio

Non-thinking

260,096

> Max 16,384 per image

\-

qwen3-vl-plus-2025-12-19

Snapshot

Thinking

258,048

> Max 16,384 per image

81,920

Non-thinking

260,096

> Max 16,384 per image

\-

The models above use tiered pricing based on the number of input tokens in the current request. Thinking and non-thinking modes share the same input and output pricing.

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤32K

$0.2

$1.6

32K<Token≤128K

$0.3

$2.4

128K<Token≤256K

$0.6

$4.8

> The qwen3-vl-flash-2026-01-22 model effectively integrates thinking and non-thinking modes. Compared to the snapshot of October 15, 2025, it significantly improves the model's overall performance. It achieves higher inference accuracy in business scenarios such as general visual recognition, security, store inspection, patrol inspection, and photo-based problem solving.

### Qwen-OCR

Qwen-OCR is a model that specializes in text extraction. Compared to Qwen-VL, it focuses more on extracting text from images of items such as documents, tables, exam questions, and handwriting. It can recognize multiple languages, including English, French, Japanese, Korean, German, Russian, and Italian. [Usage](/help/en/model-studio/qwen-vl-ocr) | [API reference](/help/en/model-studio/qwen-vl-ocr-api-reference) | [Try online](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input price**

**Output price**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen-vl-ocr**

> Equivalent to qwen-vl-ocr-2025-11-20.

Stable

38,192

30,000

> Max per image: 30,000

8,192

$0.07

$0.16

1 million input tokens and 1 million output tokens

Valid for 90 days after activating Model Studio

qwen-vl-ocr-2025-11-20

> Also known as qwen-vl-ocr-1120.

> Based on the Qwen3-VL architecture, this model significantly improves document parsing and text localization.

Snapshot

#### **Global**

In [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled worldwide.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input price**

**Output price**

**(tokens)**

**(per 1M tokens)**

**qwen-vl-ocr**

> Equivalent to qwen-vl-ocr-2025-11-20.

Stable

38,192

30,000

> Max per image: 30,000

8,192

$0.043

$0.072

qwen-vl-ocr-2025-11-20

> Also known as qwen-vl-ocr-1120.

> Based on the Qwen3-VL architecture, this model significantly improves document parsing and text localization.

Snapshot

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input price**

**Output price**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen-vl-ocr**

> Currently qwen-vl-ocr-2025-11-20.

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) are available at half price.

Stable

38,192

30,000

> Max per image: 30,000

8,192

$0.043

$0.072

No free quota

**qwen-vl-ocr-latest**

> Always the latest

Latest

qwen-vl-ocr-2025-11-20

> Also known as qwen-vl-ocr-1120.

> Based on the Qwen3-VL architecture, this model significantly improves document parsing and text localization.

Snapshot

qwen-vl-ocr-2025-08-28

> Also known as qwen-vl-ocr-0828.

34,096

4,096

$0.717

$0.717

qwen-vl-ocr-2025-04-13

> Also known as qwen-vl-ocr-0413.

qwen-vl-ocr-2024-10-28

> Also known as qwen-vl-ocr-1028.

### Qwen-Math

Qwen-Math is a language model that specializes in solving mathematical problems. [Usage](/help/en/model-studio/math-language-model) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try online](https://bailian.console.alibabacloud.com/?tab=model#/model-market/detail/qwen-math-plus?modelGroup=qwen-math-plus)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-math-plus**

> This model currently, qwen-math-plus-2024-09-19.

Stable

4,096

3,072

3,072

$0.574

$1.721

**qwen-math-plus-latest**

> Always the latest snapshot

Latest

qwen-math-plus-2024-09-19

> Also known as qwen-math-plus-0919

Snapshot

qwen-math-plus-2024-08-16

> Also known as qwen-math-plus-0816

**qwen-math-turbo**

> Currently qwen-math-turbo-2024-09-19.

Stable

$0.287

$0.861

**qwen-math-turbo-latest**

> Always the latest snapshot

Latest

qwen-math-turbo-2024-09-19

> Also known as qwen-math-turbo-0919

Snapshot

### **Qwen-Coder**

Qwen-Coder is a code generation model. The latest Qwen3-Coder-Plus series builds on Qwen3 and delivers advanced coding agent capabilities. It excels at tool calling, environment interaction, and autonomous programming-combining strong coding proficiency with general-purpose intelligence. [Usage](/help/en/model-studio/qwen-coder) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try online](https://bailian.console.alibabacloud.com/?tab=model#/efm/model_experience_center/text?currentTab=textChat&modelId=qwen3-coder-plus)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide, excluding Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen3-coder-plus**

> Currently qwen3-coder-plus-2025-09-23

Stable

1,000,000

997,952

65,536

Pricing is tiered. See the notes below the table.

1 million tokens each

Validity period: 90 days after you activate Alibaba Cloud Model Studio

qwen3-coder-plus-2025-09-23

Snapshot

qwen3-coder-plus-2025-07-22

Snapshot

**qwen3-coder-flash**

> Currently qwen3-coder-flash-2025-07-28

Stable

qwen3-coder-flash-2025-07-28

Snapshot

The models above use tiered pricing based on the number of input tokens in the current request.

##### qwen3-coder-plus series

qwen3-coder-plus, qwen3-coder-plus-2025-09-23, and qwen3-coder-plus-2025-07-22 are priced as follows. qwen3-coder-plus supports [context cache](/help/en/model-studio/context-cache). Input text that hits the **implicit cache** is billed at 20% of the unit price, while input text that hits the **explicit cache** is billed at 10% of the unit price.

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤32K

$1

$5

32K < Tokens ≤ 128K

$1.80

$9

128K < Tokens ≤ 256K

$3

$15

256,000 < Tokens ≤ 1,000,000

$6

$60

##### qwen3-coder-flash series

qwen3-coder-flash and qwen3-coder-flash-2025-07-28 are priced as follows. qwen3-coder-flash supports [context cache](/help/en/model-studio/context-cache). Input text that hits the **implicit cache** is billed at 20% of the unit price, while input text that hits the **explicit cache** is billed at 10% of the unit price.

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

Up to 32,000

$0.30

$1.50

32K < Tokens ≤ 128K

$0.50

$2.50

128K < Tokens ≤ 256K

$0.80

$4.00

256,000 < Tokens ≤ 1,000,000

$1.6

$9.60

#### **Global**

In [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled worldwide.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen3-coder-plus**

> Currently qwen3-coder-plus-2025-09-23

Stable

1,000,000

997,952

65,536

Pricing is tiered. See the note below the table.

qwen3-coder-plus-2025-09-23

Snapshot

qwen3-coder-plus-2025-07-22

Snapshot

**qwen3-coder-flash**

> Currently qwen3-coder-flash-2025-07-28

Stable

qwen3-coder-flash-2025-07-28

Snapshot

The models above use tiered pricing based on the number of input tokens in the current request.

##### qwen3-coder-plus series

qwen3-coder-plus, qwen3-coder-plus-2025-09-23, and qwen3-coder-plus-2025-07-22 are priced as follows. qwen3-coder-plus supports [context cache](/help/en/model-studio/context-cache). Input text that hits the **implicit cache** is billed at 20% of the unit price.

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤32K

$0.574

$2.294

32K < Tokens ≤ 128K

$0.861

$3.441

128K < Tokens ≤ 256K

$1.434

$5.735

256K < Tokens ≤ 1M

$2.868

$28.671

##### qwen3-coder-flash series

qwen3-coder-flash and qwen3-coder-flash-2025-07-28 are priced as follows. qwen3-coder-flash supports [context cache](/help/en/model-studio/context-cache). Input text that hits the **implicit cache** is billed at 20% of the unit price.

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0 < Token ≤ 32K

$0.144

$0.574

32 K < Tokens ≤ 128 K

$0.216

$0.861

128 K < Tokens ≤ 256 K

$0.359

$1.434

256 K < Tokens ≤ 1 M

$0.717

$3.584

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen3-coder-plus**

> Currently qwen3-coder-plus-2025-09-23

Stable

1,000,000

997,952

65,536

Tiered pricing. See details below.

qwen3-coder-plus-2025-09-23

Snapshot

qwen3-coder-plus-2025-07-22

Snapshot

**qwen3-coder-flash**

> Currently qwen3-coder-flash-2025-07-28

Stable

qwen3-coder-flash-2025-07-28

Snapshot

The models above use tiered pricing based on the number of input tokens in the current request.

##### qwen3-coder-plus series

qwen3-coder-plus, qwen3-coder-plus-2025-09-23, and qwen3-coder-plus-2025-07-22 are priced as follows. qwen3-coder-plus supports [context cache](/help/en/model-studio/context-cache). Input text that hits the **implicit cache** is billed at 20% of the unit price, while input text that hits the **explicit cache** is billed at 10% of the unit price.

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0<Token≤32K

$0.574

$2.294

32K < Tokens ≤ 128K

$0.861

$3.441

128K < Tokens ≤ 256K

$1.434

$5.735

256K < Tokens ≤ 1M

$2.868

$28.671

##### qwen3-coder-flash series

qwen3-coder-flash and qwen3-coder-flash-2025-07-28 are priced as follows. qwen3-coder-flash supports [context cache](/help/en/model-studio/context-cache). Input text that hits the **implicit cache** is billed at 20% of the unit price, while input text that hits the **explicit cache** is billed at 10% of the unit price.

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

0 < Token ≤ 32K

$0.144

$0.574

32 K < Tokens ≤ 128 K

$0.216

$0.861

128 K < Tokens ≤ 256 K

$0.359

$1.434

256 K < Tokens ≤ 1 M

$0.717

$3.584

**More models**

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-coder-plus**

> Same as qwen-coder-plus-2024-11-06

Stable

131,072

129,024

8,192

$0.502

$1.004

**qwen-coder-plus-latest**

> Same as the latest snapshot of qwen-coder-plus

Latest

qwen-coder-plus-2024-11-06

> Also known as qwen-coder-plus-1106

Snapshot

**qwen-coder-turbo**

> Same as qwen-coder-turbo-2024-09-19

Stable

131,072

129,024

8,192

$0.287

$0.861

**qwen-coder-turbo-latest**

> Same as the latest snapshot of qwen-coder-turbo

Latest

qwen-coder-turbo-2024-09-19

> Also known as qwen-coder-turbo-0919

Snapshot

### **Qwen-MT**

Qwen-MT is a flagship Large Language Model (LLM) for translation, fully upgraded from Qwen 3. It supports translation between 92 languages, such as Chinese, English, Japanese, Korean, French, Spanish, German, Thai, Indonesian, Vietnamese, and Arabic. It features comprehensive upgrades in model performance and translation quality. The model offers more stable glossary customization, format retention, and domain-specific prompting, making translations more accurate and natural. [Usage](/help/en/model-studio/machine-translation)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore** region. Model inference computing resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[Rule description](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

**qwen-mt-plus**

> Part of [Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

16,384

8,192

8,192

$2.46

$7.37

1 million tokens

Valid for 90 days after activating Model Studio

**qwen-mt-flash**

> Part of [Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

$0.16

$0.49

**qwen-mt-lite**

> Part of [Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

$0.12

$0.36

qwen-mt-turbo

> Part of [Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

$0.16

$0.49

#### **Global**

In [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **US (Virginia)** region. Model inference computing resources are dynamically scheduled worldwide.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-mt-plus**

> Part of [Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

16,384

8,192

8,192

$0.259

$0.775

**qwen-mt-flash**

> Part of [Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

$0.101

$0.280

**qwen-mt-lite**

> Part of [Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

$0.086

$0.229

#### **Chinese Mainland**

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing** region. Model inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

**qwen-mt-plus**

> Belongs to[Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

16,384

8,192

8,192

$0.259

$0.775

**qwen-mt-flash**

> Belongs to[Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

$0.101

$0.280

**qwen-mt-lite**

> Belongs to[Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

$0.086

$0.229

qwen-mt-turbo

> Belongs to[Qwen3-MT](https://modelscope.cn/studios/Qwen/Qwen3-MT-demo)

$0.101

$0.280

### **Qwen-Doc**

The Qwen data mining model extracts structured information from documents for use in data annotation, content moderation, and other applications. [Usage](/help/en/model-studio/data-mining-qwen-doc) | [API reference](/help/en/model-studio/qwen-api-reference/)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

**(tokens)**

**(per 1M tokens)**

qwen-doc-turbo

262,144

253,952

32,768

$0.087

$0.144

No free quota

### **Qwen-Deep-Research**

The Qwen deep research model can break down complex problems, perform reasoning and analysis using web searches, and generate research reports.[Usage](/help/en/model-studio/qwen-deep-research) | [API reference](/help/en/model-studio/qwen-api-reference/)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1K tokens)**

qwen-deep-research

1,000,000

997,952

32,768

$0.007742

$0.023367

## Text generation – Qwen – Open source

-   In model names, \`xxb\` indicates the parameter scale. For example, qwen2-72b-instruct has 72 billion parameters.
    
-   Model Studio supports calling open-source Qwen models. You do not need to deploy them locally. For open-source models, we recommend using Qwen3 and Qwen2.5.
    

### **Qwen3.5**

Supports text, image, and video inputs. It performs on par with Qwen3 Max on plain-text tasks while delivering superior performance at a lower cost. In multimodal capabilities, it delivers significant improvements over the Qwen3 VL series.

**Model**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max response**

**Input cost**

**Output cost**

> **CoT + response**

**Free quota**

[(note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen3.5-397b-a17b

> Thinking mode enabled by default

Thinking

262,144

258,048

81,920

65,536

Tiered pricing. See details below.

1 million tokens each

Valid for 90 days after activating Model Studio

> International only

Non-thinking

260,096

\-

qwen3.5-122b-a10b

> Thinking mode enabled by default

Thinking

262,144

258,048

81,920

65,536

Non-thinking

260,096

\-

qwen3.5-27b

> Thinking mode enabled by default

Thinking

262,144

258,048

81,920

65,536

Non-thinking

260,096

\-

qwen3.5-35b-a3b

> Thinking mode enabled by default

Thinking

262,144

258,048

81,920

65,536

Non-thinking

260,096

\-

The qwen3.5-397b-a17b, qwen3.5-122b-a10b, qwen3.5-27b, and qwen3.5-35b-a3b models use tiered pricing based on the number of input tokens in the current request.

#### International

**Model**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

qwen3.5-397b-a17b

0<Token≤256K

$0.6

$3.6

qwen3.5-122b-a10b

$0.4

$3.2

qwen3.5-27b

$0.3

$2.4

qwen3.5-35b-a3b

$0.25

$2

#### Global

**Model**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

qwen3.5-397b-a17b

0<Token≤128K

$0.172

$1.032

128K<Token≤256K

$0.43

$2.58

qwen3.5-122b-a10b

0<Token≤128K

$0.115

$0.917

128K<Token≤256K

$0.287

$2.294

qwen3.5-27b

0<Token≤128K

$0.086

$0.688

128K<Token≤256K

$0.258

$2.064

qwen3.5-35b-a3b

0<Token≤128K

$0.057

$0.459

128K<Token≤256K

$0.229

$1.835

#### Chinese Mainland

**Model**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

qwen3.5-397b-a17b

0<Token≤128K

$0.172

$1.032

128K<Token≤256K

$0.43

$2.58

qwen3.5-122b-a10b

0<Token≤128K

$0.115

$0.917

128K<Token≤256K

$0.287

$2.294

qwen3.5-27b

0<Token≤128K

$0.086

$0.688

128K<Token≤256K

$0.258

$2.064

qwen3.5-35b-a3b

0<Token≤128K

$0.057

$0.459

128K<Token≤256K

$0.229

$1.835

### **Qwen3**

The qwen3-next-80b-a3b-thinking model, released in September 2025, supports only thinking mode. It improves instruction-following capabilities and delivers more concise summary responses than qwen3-235b-a22b-thinking-2507.

The qwen3-next-80b-a3b-instruct model, released in September 2025, supports only non-thinking mode. It enhances Chinese understanding, logical reasoning, and text generation capabilities compared to qwen3-235b-a22b-instruct-2507.

The qwen3-235b-a22b-thinking-2507 and qwen3-30b-a3b-thinking-2507 models, released in July 2025, support only thinking mode and are upgrades of qwen3-235b-a22b (thinking mode) and qwen3-30b-a3b (thinking mode), respectively.

The qwen3-235b-a22b-instruct-2507 and qwen3-30b-a3b-instruct-2507 models, released in July 2025, support only non-thinking mode and are upgrades of qwen3-235b-a22b (non-thinking mode) and qwen3-30b-a3b (non-thinking mode), respectively.

The Qwen3 models, released in April 2025, support both thinking and non-thinking modes. You can switch between modes using the `enable_thinking` parameter. Additionally, Qwen3 models deliver significant improvements in the following areas:

1.  **Reasoning ability**: Significantly outperforms QwQ and similarly sized non-reasoning models on evaluations for math, code, and logical reasoning, achieving top-tier industry performance for a model of its size.
    
2.  **Human preference alignment**: Features greatly enhanced capabilities for creative writing, role assumption, multi-turn conversation, and instruction following. Its general abilities significantly surpass those of similarly sized models.
    
3.  **Agent capabilities**: Achieves industry-leading performance in both thinking and non-thinking modes and enables precise external tool invocation.
    
4.  **Multilingual support**: Supports over 100 languages and dialects and provides notable improvements in multilingual translation, instruction understanding, and commonsense reasoning.
    
    **Supported languages**
    
    English
    
    Simplified Chinese
    
    Traditional Chinese
    
    French
    
    Spanish
    
    Arabic is written in the Arabic script and is the official language of many Arab countries.
    
    Russian is written in the Cyrillic script and is the official language of Russia and several other countries.
    
    Portuguese uses the Latin alphabet and is the official language of Portugal, Brazil, and other Portuguese-speaking countries.
    
    German is written in the Latin alphabet and is an official language in Germany, Austria, and other regions.
    
    Italian uses the Latin alphabet and is an official language in Italy, San Marino, and parts of Switzerland.
    
    Dutch uses the Latin alphabet and is an official language in the Netherlands, the Flemish Region of Belgium, and Suriname.
    
    Danish, which uses the Latin alphabet, is the official language of Denmark.
    
    Irish uses the Latin alphabet and is one of the official languages of Ireland.
    
    Welsh uses the Latin alphabet and is one of the official languages of Wales.
    
    Finnish, which uses the Latin alphabet, is an official language of Finland.
    
    Icelandic, which uses the Latin alphabet, is the official language of Iceland.
    
    Swedish, which uses the Latin alphabet, is the official language of Sweden.
    
    Norwegian Nynorsk, which uses the Latin alphabet, is one of Norway's two official written standards, alongside Bokmål.
    
    Norwegian Bokmål, which uses the Latin alphabet, is a major written standard for Norway.
    
    Japanese is the official language of Japan and uses Japanese characters.
    
    Korean is written in the Hangul script and is the official language of South Korea and North Korea.
    
    Vietnamese, which uses the Latin alphabet, is the official language of Vietnam.
    
    Thai, which uses the Thai alphabet, is the official language of Thailand.
    
    Indonesian, which uses the Latin alphabet, is the official language of Indonesia.
    
    Malay uses the Latin alphabet and is the primary language of Malaysia and surrounding regions.
    
    Burmese, which uses the Burmese alphabet, is the official language of Myanmar.
    
    Tagalog is one of the major languages of the Philippines and uses the Latin alphabet.
    
    Khmer is written in the Khmer script and is the official language of Cambodia.
    
    Lao is written in the Lao script and is the official language of Laos.
    
    Hindi is one of the official languages of India and uses the Devanagari script.
    
    Bengali is written in the Bengali script and is the official language of Bangladesh and the Indian state of West Bengal.
    
    Urdu is written in the Arabic script and is one of the official languages of Pakistan. It is also spoken in India.
    
    Nepali is written in the Devanagari script and is the official language of Nepal.
    
    Hebrew is written in the Hebrew script and is the official language of Israel.
    
    Turkish is written in the Latin alphabet and is the official language of Türkiye and Northern Cyprus.
    
    Persian uses the Arabic script and is the official language in countries such as Iran and Tajikistan.
    
    Polish, which uses the Latin alphabet, is the official language of Poland.
    
    Ukrainian is written in the Cyrillic script and is the official language of Ukraine.
    
    Czech, which uses the Latin alphabet, is the official language of the Czech Republic.
    
    Romanian is written in the Latin alphabet and is the official language of Romania and Moldova.
    
    Bulgarian, which uses the Cyrillic script, is the official language of Bulgaria.
    
    Slovak, which uses the Latin alphabet, is the official language of Slovakia.
    
    Hungarian uses the Latin alphabet and is the official language of Hungary.
    
    Slovenian, which uses the Latin alphabet, is the official language of Slovenia.
    
    Latvian, which uses the Latin alphabet, is the official language of Latvia.
    
    Estonian, which uses the Latin alphabet, is the official language of Estonia.
    
    Lithuanian, which uses the Latin alphabet, is the official language of Lithuania.
    
    Belarusian is written in the Cyrillic script and is one of the official languages of Belarus.
    
    Greek is written in the Greek alphabet and is the official language of Greece and Cyprus.
    
    Croatian, which uses the Latin alphabet, is the official language of Croatia.
    
    Macedonian is the official language of North Macedonia and is written in the Cyrillic script.
    
    Maltese, which uses the Latin alphabet, is an official language in Malta.
    
    Serbian, which uses the Cyrillic script, is the official language of Serbia.
    
    Bosnian is one of the official languages of Bosnia and Herzegovina and uses the Latin alphabet.
    
    Georgian is the official language of Georgia and is written in the Georgian script.
    
    Armenian, which uses the Armenian alphabet, is the official language of Armenia.
    
    Northern Azerbaijani uses the Latin alphabet and is the official language of Azerbaijan.
    
    Kazakh, which uses the Cyrillic script, is the official language of Kazakhstan.
    
    Northern Uzbek is written in the Latin alphabet and is the official language of Uzbekistan.
    
    Tajik, which uses the Cyrillic script, is the official language of Tajikistan.
    
    Swahili uses the Latin alphabet and is a lingua franca or official language in many East African countries.
    
    Afrikaans uses the Latin alphabet and is spoken mainly in South Africa and Namibia.
    
    Cantonese is written in Traditional Chinese characters and is a primary language in China's Guangdong Province, Hong Kong, and Macau.
    
    Luxembourgish uses the Latin alphabet and is one of the official languages of Luxembourg. It is also spoken in parts of Germany.
    
    Limburgish is written in the Latin alphabet and is spoken mainly in parts of the Netherlands, Belgium, and Germany.
    
    Catalan uses the Latin alphabet and is spoken in Catalonia and other parts of Spain.
    
    Galician uses the Latin alphabet and is spoken mainly in the Galicia region of Spain.
    
    Asturian uses the Latin alphabet and is spoken mainly in the Asturias region of Spain.
    
    Basque, which uses the Latin alphabet, is spoken mainly in the Basque Country of Spain and France. It is one of the official languages of the Basque Autonomous Community in Spain.
    
    Occitan uses the Latin alphabet and is spoken mainly in southern France.
    
    Venetian is spoken mainly in the Veneto region of Italy and uses the Latin alphabet.
    
    Sardinian uses the Latin alphabet and is spoken mainly in Sardinia, Italy.
    
    Sicilian is written in the Latin alphabet and is spoken mainly in Sicily, Italy.
    
    Friulian uses the Latin alphabet and is spoken mainly in Friuli-Venezia Giulia, Italy.
    
    Lombard is spoken mainly in the Lombardy region of Italy and uses the Latin alphabet.
    
    Ligurian uses the Latin alphabet and is spoken mainly in the Liguria region of Italy.
    
    Faroese is written in the Latin alphabet and is spoken mainly in the Faroe Islands, where it is one of the official languages.
    
    Tosk Albanian, which uses the Latin alphabet, is the primary southern dialect of Albanian.
    
    Silesian uses the Latin alphabet and is spoken mainly in Poland.
    
    Bashkir uses the Cyrillic script and is spoken mainly in Bashkortostan, Russia.
    
    Tatar uses the Cyrillic script and is spoken mainly in Tatarstan, Russia.
    
    Mesopotamian Arabic is written in the Arabic script and is spoken mainly in Iraq.
    
    Najdi Arabic uses the Arabic script and is spoken mainly in the Najd region of Saudi Arabia.
    
    Egyptian Arabic is written in the Arabic script and is spoken mainly in Egypt.
    
    Levantine Arabic uses the Arabic script and is spoken mainly in Syria and Lebanon.
    
    Ta'izzi-Adeni Arabic, a Semitic language written in the Arabic script, is spoken mainly in Yemen and the Hadhramaut region of Saudi Arabia.
    
    Dari uses the Arabic script and is one of the official languages of Afghanistan.
    
    Tunisian Arabic is written in the Arabic script and is spoken mainly in Tunisia.
    
    Moroccan Arabic is written in the Arabic script and is spoken mainly in Morocco.
    
    Kabuverdianu is spoken mainly in Cape Verde and uses the Latin alphabet.
    
    Tok Pisin is a primary lingua franca in Papua New Guinea and uses the Latin alphabet.
    
    Eastern Yiddish is written in the Hebrew script and is used mainly in Jewish communities.
    
    Sindhi is written in the Arabic script and is one of the official languages of Pakistan's Sindh province.
    
    Sinhala is written in the Sinhala script and is one of the official languages of Sri Lanka.
    
    Telugu is written in the Telugu script and is one of the official languages of the Indian states of Andhra Pradesh and Telangana.
    
    Punjabi is written in the Gurmukhi script, spoken in the Indian state of Punjab, and is one of the official languages of India.
    
    Tamil is written in the Tamil script and is one of the official languages of the Indian state of Tamil Nadu and Sri Lanka.
    
    Gujarati is written in the Gujarati script and is an official language of the Indian state of Gujarat.
    
    Malayalam is written in the Malayalam script and is one of the official languages of the Indian state of Kerala.
    
    Marathi is written in the Devanagari script and is one of the official languages of the Indian state of Maharashtra.
    
    Kannada is written in the Kannada script and is one of the official languages of the Indian state of Karnataka.
    
    Magahi is written in the Devanagari script and is spoken mainly in the Indian state of Bihar.
    
    Oriya uses the Urdu script and is one of the official languages of the Indian state of Odisha.
    
    Awadhi is written in the Devanagari script and is spoken mainly in the Indian state of Uttar Pradesh.
    
    Maithili is written in the Devanagari script. It is one of India's official languages and is spoken in the Indian state of Bihar and the Terai plains of Nepal.
    
    Assamese uses the Bengali script and is one of the official languages of the Indian state of Assam.
    
    Chhattisgarhi is written in the Devanagari script and is spoken mainly in the Indian state of Chhattisgarh.
    
    Bhojpuri uses the Devanagari script and is spoken in parts of India and Nepal.
    
    Minangkabau is written in the Latin alphabet and is spoken mainly on the island of Sumatra in Indonesia.
    
    Balinese is written in the Latin alphabet and is spoken mainly on the island of Bali, Indonesia.
    
    Javanese is widely spoken on the island of Java in Indonesia and is written using both the Latin alphabet and the Javanese script.
    
    Banjar is written in the Latin alphabet and is spoken mainly on the island of Kalimantan in Indonesia.
    
    Sundanese, spoken mainly in western Java, Indonesia, is written in the Latin alphabet but traditionally used the Sundanese script.
    
    Cebuano uses the Latin alphabet and is spoken mainly in the Cebu region of the Philippines.
    
    Pangasinan is written in the Latin alphabet and is spoken mainly in the Pangasinan province of the Philippines.
    
    Iloko is spoken mainly in the Philippines and uses the Latin alphabet.
    
    Waray is a language of the Philippines that uses the Latin alphabet.
    
    Haitian Creole, which uses the Latin alphabet, is an official language of Haiti.
    
    Papiamento uses the Latin alphabet and is spoken mainly in Caribbean regions such as Aruba and Curaçao.
    
5.  **Response formatting**: Fixes issues found in previouss, such as incorrect Markdown rendering, response truncation, and incorrectly formatted boxed output.
    

> Qwen3 open-source models released in April 2025 do not support non-streaming output in thinking mode.

> If you enable thinking mode for Qwen3 open-source models and no reasoning process appears in the output, billing applies at the non-thinking mode rate.

[Thinking](/help/en/model-studio/deep-thinking) | [Non-thinking mode](/help/en/model-studio/stream) | [Usage](/help/en/model-studio/qwen-api-reference/)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota)

**(tokens)**

**(per 1M tokens)**

qwen3-next-80b-a3b-thinking

Thinking only

131,072

126,976

81,920

32,768

$0.15

$1.2

1 million tokens each

Valid for 90 days after activating Model Studio

qwen3-next-80b-a3b-instruct

Non-thinking

129,024

\-

qwen3-235b-a22b-thinking-2507

Thinking only

126,976

81,920

$0.23

$2.3

qwen3-235b-a22b-instruct-2507

Non-thinking

129,024

\-

$0.92

qwen3-30b-a3b-thinking-2507

Thinking only

126,976

81,920

$0.2

$2.4

qwen3-30b-a3b-instruct-2507

Non-thinking

129,024

\-

$0.8

qwen3-235b-a22b

> This model and the following models were released in April 2025.

Non-thinking

129,024

\-

16,384

$0.7

$2.8

Thinking

98,304

38,912

$8.4

qwen3-32b

Non-thinking

129,024

\-

$0.16

$0.64

Thinking

98,304

38,912

qwen3-30b-a3b

Non-thinking

129,024

\-

$0.2

$0.8

Thinking

98,304

38,912

$2.4

qwen3-14b

Non-thinking

129,024

\-

8,192

$0.35

$1.4

Thinking

98,304

38,912

$4.2

qwen3-8b

Non-thinking

129,024

\-

$0.18

$0.7

Thinking

98,304

38,912

$2.1

qwen3-4b

Non-thinking

129,024

\-

$0.11

$0.42

Thinking

98,304

38,912

$1.26

qwen3-1.7b

Non-thinking

32,768

30,720

\-

$0.42

Thinking

28,672

The sum of the values must not exceed 30,720.

$1.26

qwen3-0.6b

Non-thinking

30,720

\-

$0.42

Thinking

28,672

The sum of the inputs cannot exceed 30,720.

$1.26

#### Global

In [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled worldwide.

**Model**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota)

**(tokens)**

**(per 1M Tokens)**

qwen3-next-80b-a3b-thinking

Thinking only

131,072

126,976

81,920

32,768

$0.144

$1.434

No free quota

qwen3-next-80b-a3b-instruct

Non-thinking only

129,024

\-

$0.574

qwen3-235b-a22b-thinking-2507

Thinking only

126,976

81,920

$0.23

$2.3

qwen3-235b-a22b-instruct-2507

Non-thinking only

129,024

\-

$0.92

qwen3-30b-a3b-thinking-2507

Thinking only

126,976

81,920

$0.108

$1.076

qwen3-30b-a3b-instruct-2507

Non-thinking only

129,024

\-

$0.431

qwen3-235b-a22b

Non-thinking

129,024

\-

16,384

$0.287

$1.147

Thinking

98,304

38,912

$2.868

qwen3-32b

Non-thinking

129,024

\-

$0.16

$0.64

Thinking

98,304

38,912

qwen3-30b-a3b

Non-thinking

129,024

\-

$0.108

$0.431

Thinking

98,304

38,912

$1.076

qwen3-14b

Non-thinking

129,024

\-

8,192

$0.144

$0.574

Thinking

98,304

38,912

$1.434

qwen3-8b

Non-thinking

129,024

\-

$0.072

$0.287

Thinking

98,304

38,912

$0.717

#### Chinese Mainland

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota)

**(tokens)**

**(per 1M tokens)**

qwen3-next-80b-a3b-thinking

Thinking only

131,072

126,976

81,920

32,768

$0.144

$1.434

No free quota

qwen3-next-80b-a3b-instruct

Thinking mode is unavailable.

129,024

\-

$0.574

qwen3-235b-a22b-thinking-2507

Thinking only

126,976

81,920

$0.287

$2.868

qwen3-235b-a22b-instruct-2507

Non-thinking

129,024

\-

$1.147

qwen3-30b-a3b-thinking-2507

Thinking only

126,976

81,920

$0.108

$1.076

qwen3-30b-a3b-instruct-2507

Non-thinking

129,024

\-

$0.431

qwen3-235b-a22b

Non-thinking

129,024

\-

16,384

$0.287

$1.147

Thinking

98,304

38,912

$2.868

qwen3-32b

Non-thinking

129,024

\-

$0.287

$1.147

Thinking

98,304

38,912

$2.868

qwen3-30b-a3b

Non-thinking

129,024

\-

$0.108

$0.431

Thinking

98,304

38,912

$1.076

qwen3-14b

Non-thinking

129,024

\-

8,192

$0.144

$0.574

Thinking

98,304

38,912

$1.434

qwen3-8b

Non-thinking

129,024

\-

$0.072

$0.287

Thinking

98,304

38,912

$0.717

qwen3-4b

Non-thinking

129,024

\-

$0.044

$0.173

Thinking

98,304

38,912

$0.431

qwen3-1.7b

Non-thinking

32,768

30,720

\-

$0.173

Thinking

28,672

The sum of the input values must not exceed 30,720.

$0.431

qwen3-0.6b

Non-thinking

30,720

\-

$0.173

Thinking

28,672

The sum of the input must not exceed 30,720.

$0.431

### **QwQ – Open source**

QwQ is an inference model trained on Qwen2.5-32B. It uses reinforcement learning to significantly improve its reasoning ability. Its core metrics, including math and coding benchmarks (AIME 24/25, LiveCodeBench) and general benchmarks (IFEval, LiveBench), match those of the full DeepSeek-R1 model. Its performance on all metrics notably exceeds that of DeepSeek-R1-Distill-Qwen-32B, which is also based on Qwen2.5-32B. [Usage](/help/en/model-studio/deep-thinking) | [API reference](/help/en/model-studio/qwen-api-reference/)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwq-32b

131,072

98,304

32,768

8,192

$0.287

$0.861

### **QwQ-Preview**

qwq-32b-preview is an experimental research model developed by the Qwen team in 2024. It focuses on enhancing AI reasoning, especially for math and programming. For its limitations, see the [QwQ official blog](https://qwenlm.github.io/zh/blog/qwq-32b-preview/#%E6%A8%A1%E5%9E%8B%E5%B1%80%E9%99%90%E6%80%A7). [Usage](/help/en/model-studio/text-generation#24e54b27d4agt) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try it online](https://bailian.console.alibabacloud.com/?tab=model#/model-market/detail/qwq-32b-preview)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwq-32b-preview

32,768

30,720

16,384

$0.287

$0.861

### **Qwen2.5**

Qwen2.5 is a large language model series from Qwen. This series includes multiple base and instruction-tuned models, with parameter counts that range from 7 billion to 72 billion. Key improvements over Qwen2 include the following:

-   Pre-trained on our latest large-scale dataset that contains up to 18 trillion tokens.
    
-   Expanded knowledge and significantly improved coding and math abilities, thanks to domain-specific expert models.
    
-   Better instruction following, long-text generation (over 8K tokens), structured data understanding (such as tables), and structured output generation (especially JSON). More robust handling of diverse system prompts, better role assumption, and conditional settings for chatbots.
    
-   Supports over 29 languages, such as Chinese, English, French, Spanish, Portuguese, German, Italian, Russian, Japanese, Korean, Vietnamese, Thai, and Arabic.
    

[Usage](/help/en/model-studio/text-generation#24e54b27d4agt) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try it online](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

**(tokens)**

**(per 1M tokens)**

qwen2.5-14b-instruct-1m

1,008,192

1,000,000

8,192

$0.805

$3.22

1 million tokens each

Valid for 90 days after activating Model Studio

qwen2.5-7b-instruct-1m

$0.368

$1.47

qwen2.5-72b-instruct

131,072

129,024

$1.4

$5.6

qwen2.5-32b-instruct

$0.7

$2.8

qwen2.5-14b-instruct

$0.35

$1.4

qwen2.5-7b-instruct

$0.175

$0.7

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwen2.5-14b-instruct-1m

1,000,000

1,000,000

8,192

$0.144

$0.431

qwen2.5-7b-instruct-1m

$0.072

$0.144

qwen2.5-72b-instruct

131,072

129,024

$0.574

$1.721

qwen2.5-32b-instruct

$0.287

$0.861

qwen2.5-14b-instruct

$0.144

$0.431

qwen2.5-7b-instruct

$0.072

$0.144

qwen2.5-3b-instruct

32,768

30,720

$0.044

$0.130

qwen2.5-1.5b-instruct

Limited-time free

qwen2.5-0.5b-instruct

### **QVQ**

qvq-72b-preview is an experimental research model developed by the Qwen team. It focuses on improving visual reasoning, especially in math. For its limitations, see the [QVQ official blog](https://qwenlm.github.io/blog/qvq-72b-preview/). [Usage](/help/en/model-studio/vision) | [API reference](/help/en/model-studio/qwen-api-reference/#15ef0a40798a3)

> To show the reasoning process before the final answer, you can use the commercial QVQ model.

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qvq-72b-preview

32,768

16,384

> Max 16,384 per image

16,384

$1.721

$5.161

### **Qwen-Omni**

This is a new multimodal understanding and generation model built on Qwen2.5. It supports text, image, audio, and video inputs. It generates text and speech simultaneously in streaming mode. Its multimodal understanding speed is significantly improved. [Usage](/help/en/model-studio/qwen-omni) | [API reference](/help/en/model-studio/qwen-api-reference/)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Free quota**

[Note](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

qwen2.5-omni-7b

32,768

30,720

2,048

1 million tokens (no modality distinction)

Valid for 90 days after activating Model Studio

After your free quota runs out, billing applies as follows:

**Input**

**Unit price (per 1M tokens)**

Text

$0.10

Audio

$6.76

Image / video

$0.28

**Output**

**Unit price (per 1M tokens)**

Text

$0.40 (text-only input)

$0.84 (input includes images, audio, or video)

Text + audio

$13.51 (audio)

> Text output is not billed.

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**(tokens)**

qwen2.5-omni-7b

32,768

30,720

2,048

Billing rules for input and output:

**Input**

**Unit price (per 1M tokens)**

Text

$0.087

Audio

$5.448

Image / video

$0.287

**Output**

**Unit price (per 1M tokens)**

Text

$0.345 (text-only input)

$0.861 (input includes images, audio, or video)

Text + audio

$10.895 (audio)

> Text output is not billed.

### **Qwen3-Omni-Captioner**

Qwen3-Omni-Captioner is an open-source model built on Qwen3-Omni. It generates precise, comprehensive descriptions for complex audio, including ambient sounds, music, and sound effects, without requiring prompts. It detects speaker emotion, musical elements (such as genre and instruments), and sensitive content. Use cases include audio content analysis, security review, intent recognition, and audio editing. [Usage](/help/en/model-studio/qwen3-omni-captioner) | [API reference](/help/en/model-studio/qwen-api-reference/)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide, excluding Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen3-omni-30b-a3b-captioner

65,536

32,768

32,768

$3.81

$3.06

1 million tokens

Valid for 90 days after activating Model Studio

#### Chinese Mainland

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen3-omni-30b-a3b-captioner

65,536

32,768

32,768

$2.265

$1.821

No free quota.

### **Qwen-VL**

The Qwen-VL open-source model from Alibaba Cloud. [Usage](/help/en/model-studio/vision) | [API reference](/help/en/model-studio/qwen-api-reference/#15ef0a40798a3)

Compared to Qwen2.5-VL, Qwen3-VL delivers significant improvements:

-   **Agent interaction:** It can operate computer or mobile interfaces, recognize GUI elements, understand their functions, and call tools to perform tasks, achieving top-tier performance in evaluations such as OS World.
    
-   **Visual coding:** It generates code from images or videos and supports creating HTML, CSS, and JavaScript code from design mockups, website screenshots, and similar inputs.
    
-   **Spatial intelligence:** It supports 2D and 3D positioning and accurately judges object orientation, perspective changes, and occlusion relationships.
    
-   **Long video understanding:** It supports understanding video content up to 20 minutes long and provides precise localization down to the second.
    
-   **Deep thinking:** It has deep thinking capabilities and excels at capturing fine details and analyzing cause-and-effect relationships, achieving top-tier performance in evaluations such as MathVista and MMMU.
    
-   **OCR:** Language support is expanded to 33 languages. The model delivers more stable performance in scenarios with complex lighting, blur, or tilted text. It also provides significantly improved accuracy for rare characters, ancient texts, and professional terminology.
    
    **Supported languages**
    
    The model supports the following 33 languages: Chinese, Japanese, Korean, Indonesian, Vietnamese, Thai, English, French, German, Russian, Portuguese, Spanish, Italian, Swedish, Danish, Czech, Norwegian, Dutch, Finnish, Turkish, Polish, Swahili, Romanian, Serbian, Greek, Kazakh, Uzbek, Cebuano, Arabic, Urdu, Persian, Hindi/Devanagari, and Hebrew.
    

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide, excluding Chinese Mainland.

**Model**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen3-vl-235b-a22b-thinking

Thinking only

126,976

81,920

$0.4

$4

1 million tokens each

Valid for 90 days after activating Model Studio

qwen3-vl-235b-a22b-instruct

Non-thinking

129,024

\-

$1.6

qwen3-vl-32b-thinking

Thinking only

131,072

126,976

81,920

32,768

$0.16

$0.64

qwen3-vl-32b-instruct

Non-thinking only

129,024

\-

qwen3-vl-30b-a3b-thinking

Thinking only

126,976

81,920

$0.2

$2.4

qwen3-vl-30b-a3b-instruct

Non-thinking

129,024

\-

$0.8

qwen3-vl-8b-thinking

Thinking

126,976

81,920

$0.18

$2.1

qwen3-vl-8b-instruct

Non-thinking

129,024

\-

$0.7

**More models**

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen2.5-vl-72b-instruct

131,072

129,024

> Max per image: 16,384

8,192

$2.8

$8.4

1 million tokens each

Valid for 90 days after Model Studio activation

qwen2.5-vl-32b-instruct

$1.4

$4.2

qwen2.5-vl-7b-instruct

$0.35

$1.05

qwen2.5-vl-3b-instruct

$0.21

$0.63

#### **Global**

In [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled worldwide.

**Model**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + output**

**(tokens)**

**(per 1M tokens)**

qwen3-vl-235b-a22b-thinking

Thinking only

126,976

81,920

$0.287

$2.867

qwen3-vl-235b-a22b-instruct

Non-thinking only

129,024

\-

$1.147

qwen3-vl-32b-thinking

Thinking only

131,072

126,976

81,920

32,768

$0.16

$0.64

qwen3-vl-32b-instruct

Non-thinking only

129,024

\-

qwen3-vl-30b-a3b-thinking

Thinking only

126,976

81,920

$0.108

$1.076

qwen3-vl-30b-a3b-instruct

Non-thinking only

129,024

\-

$0.431

qwen3-vl-8b-thinking

Thinking only

126,976

81,920

$0.072

$0.717

qwen3-vl-8b-instruct

Non-thinking only

129,024

\-

$0.287

#### Chinese Mainland

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

> **CoT + output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen3-vl-235b-a22b-thinking

Thinking only

131,072

126,976

81,920

$0.287

$2.867

No free quota

qwen3-vl-235b-a22b-instruct

Non-thinking only

129,024

\-

$1.147

qwen3-vl-32b-thinking

Thinking only

131,072

126,976

81,920

32,768

$0.287

$2.868

qwen3-vl-32b-instruct

Non-thinking only

129,024

\-

$1.147

qwen3-vl-30b-a3b-thinking

Thinking only

126,976

81,920

$0.108

$1.076

qwen3-vl-30b-a3b-instruct

Non-thinking only

129,024

\-

$0.431

qwen3-vl-8b-thinking

Thinking only

126,976

81,920

$0.072

$0.717

qwen3-vl-8b-instruct

Non-thinking only

129,024

\-

$0.287

**More models**

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(per 1M tokens)**

qwen2.5-vl-72b-instruct

131,072

129,024

> Max per image: 16,384

8,192

$2.294

$6.881

No free quota

qwen2.5-vl-32b-instruct

$1.147

$3.441

qwen2.5-vl-7b-instruct

$0.287

$0.717

qwen2.5-vl-3b-instruct

$0.173

$0.517

qwen2-vl-72b-instruct

32,768

30,720

> Max per image: 16,384

2,048

$2.294

$6.881

### Qwen-Math

A language model built on Qwen, specialized for solving math problems. Qwen2.5-Math supports **Chinese** and **English**, and integrates multiple reasoning methods, including Chain of Thought (CoT), Program of Thought (PoT), and Tool-Integrated Reasoning (TIR). [Usage](/help/en/model-studio/math-language-model) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try it online](https://bailian.console.alibabacloud.com/?tab=model#/model-market/detail/qwen2.5-math-72b-instruct)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwen2.5-math-72b-instruct

4,096

3,072

3,072

$0.574

$1.721

qwen2.5-math-7b-instruct

$0.144

$0.287

qwen2.5-math-1.5b-instruct

Limited-time free

### Qwen-Coder

The open-source Qwen code model. The latest Qwen3-Coder series excels at Coding Agent tasks, especially tool calling and environment interaction, which enables autonomous programming while maintaining strong general-purpose capabilities. [Usage](/help/en/model-studio/qwen-coder) | [API reference](/help/en/model-studio/qwen-api-reference/)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide, excluding Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(Number of tokens)**

qwen3-coder-next

262,144

204,800

65,536

Tiered pricing. See the note below the table.

1 million tokens each

Valid for 90 days after activating Model Studio

qwen3-coder-480b-a35b-instruct

qwen3-coder-30b-a3b-instruct

The above models use tiered pricing based on the number of input tokens in the current request.

**Model**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

qwen3-coder-next

0 < tokens ≤ 32K

$0.3

$1.5

32K < tokens ≤ 128K

$0.5

$2.5

128K < tokens ≤ 256K

$0.8

$4

qwen3-coder-480b-a35b-instruct

0 < tokens ≤ 32K

$1.5

$7.5

32K < tokens ≤ 128K

$2.7

$13.5

128K < tokens ≤ 200K

$4.5

$22.5

qwen3-coder-30b-a3b-instruct

0 < tokens ≤ 32K

$0.45

$2.25

32K < tokens ≤ 128K

$0.75

$3.75

128K < tokens ≤ 200K

$1.2

$6

#### Global

In [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled worldwide.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwen3-coder-480b-a35b-instruct

262,144

204,800

65,536

Pricing is tiered. See the note below the table.

qwen3-coder-30b-a3b-instruct

qwen3-coder-480b-a35b-instruct and qwen3-coder-30b-a3b-instruct use tiered pricing based on the number of input tokens in the current request.

**Model**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

qwen3-coder-480b-a35b-instruct

0<Token≤32K

$0.861

$3.441

32K<Token≤128K

$1.291

$5.161

128K<Token≤200K

$2.151

$8.602

qwen3-coder-30b-a3b-instruct

0<Token≤32K

$0.216

$0.861

32K<Token≤128K

$0.323

$1.291

128K<Token≤200K

$0.538

$2.151

#### Chinese Mainland

In Chinese Mainland [deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwen3-coder-next

262,144

204,800

65,536

Tiered pricing. See the description below the table.

qwen3-coder-480b-a35b-instruct

qwen3-coder-30b-a3b-instruct

The above models use tiered pricing based on the number of input tokens in the current request.

**Model**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

qwen3-coder-next

0 < Tokens ≤ 32K

$0.144

$0.574

32K < Tokens ≤ 128K

$0.216

$0.861

128K < Tokens ≤ 256K

$0.359

$1.434

qwen3-coder-480b-a35b-instruct

0 < Tokens ≤ 32K

$0.861

$3.441

32K < Tokens ≤ 128K

$1.291

$5.161

128K < Tokens ≤ 200K

$2.151

$8.602

qwen3-coder-30b-a3b-instruct

0 < Tokens ≤ 32K

$0.216

$0.861

32K < Tokens ≤ 128K

$0.323

$1.291

128K < Tokens ≤ 200K

$0.538

$2.151

**More models**

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwen2.5-coder-32b-instruct

131,072

129,024

8,192

$0.287

$0.861

qwen2.5-coder-14b-instruct

qwen2.5-coder-7b-instruct

$0.144

$0.287

qwen2.5-coder-3b-instruct

32,768

30,720

Limited-time free trial

qwen2.5-coder-1.5b-instruct

qwen2.5-coder-0.5b-instruct

## Text generation – Third-party

### **DeepSeek**

DeepSeek is a large language model developed by DeepSeek. [API reference](/help/en/model-studio/deepseek-api) | [Try it online](https://bailian.console.alibabacloud.com/?tab=model#/model-market/detail/group-deepseek?modelGroup=group-deepseek)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max CoT**

**Max response**

**Input cost**

**Output cost**

**Free quota**

**(tokens)**

**(per 1M tokens)**

deepseek-v3.2

> 685B parameter size

> [Context cache](/help/en/model-studio/context-cache) discounts apply

131,072

98,304

32,768

65,536

$0.57

$1.71

1 million tokens

Validity: within 90 days after Model Studio activation

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max CoT**

**Max response**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

deepseek-v3.2

> 685B parameter size

> [Context cache](/help/en/model-studio/context-cache) discounts apply

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

131,072

98,304

32,768

65,536

$0.287

$0.431

deepseek-v3.2-exp

> 685B parameter size

deepseek-v3.1

> 685B parameter size

$0.574

$1.721

deepseek-r1

> 685B parameter size

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

16,384

$2.294

deepseek-r1-0528

> 685B parameter size

deepseek-v3

> 671B parameter size

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

131,072

Not applicable

$0.287

$1.147

deepseek-r1-distill-qwen-1.5b

> Based on Qwen2.5-Math-1.5B

32,768

32,768

16,384

16,384

Limited-time free trial

deepseek-r1-distill-qwen-7b

> Based on Qwen2.5-Math-7B

$0.072

$0.144

deepseek-r1-distill-qwen-14b

> Based on Qwen2.5-14B

$0.144

$0.431

deepseek-r1-distill-qwen-32b

> Based on Qwen2.5-32B

$0.287

$0.861

deepseek-r1-distill-llama-8b

> Based on Llama-3.1-8B

Limited-time free trial

deepseek-r1-distill-llama-70b

> Based on Llama-3.3-70B

### **Kimi**

Kimi-K2 is a large language model developed by Moonshot AI. It excels at coding and tool calling. [Usage](/help/en/model-studio/kimi-api) | [Try it online](https://bailian.console.alibabacloud.com/?tab=model#/efm/model_experience_center/text?currentTab=textChat&modelId=Moonshot-Kimi-K2-Instruct)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Mode**

**Context window**

**Max input**

**Max CoT**

**Max response**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

kimi-k2.5

Thinking

262,144

258,048

81,920

98,304

$0.574

$3.011

Non-thinking

262,144

260,096

\-

98,304

$0.574

$3.011

kimi-k2-thinking

Thinking

262,144

229,376

32,768

16,384

$0.574

$2.294

Moonshot-Kimi-K2-Instruct

Non-thinking

131,072

131,072

\-

8,192

$0.574

$2.294

### **MiniMax**

MiniMax is a large language model developed by MiniMax. It is specifically designed to handle complex real-world tasks, with core strengths in multilingual coding and agent task processing. [Usage](/help/en/model-studio/minimax-api)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max CoT + response**

> **thinking\_budget not supported**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

MiniMax-M2.5

196,608

196,601

32,768

$0.304

$1.213

### **GLM**

GLM models are hybrid reasoning models from Zhipu AI, designed specifically for agents. They support both thinking and non-thinking modes. [Usage](/help/en/model-studio/glm)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max CoT**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

glm-5

202,752

202,752

32,768

16,384

Tiered pricing, see the table below

glm-4.7

169,984

glm-4.6

Pricing for these models depends on the number of input tokens per request.

**Model**

**Input tokens per request**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

glm-5

0 < tokens ≤ 32K

$0.573

$2.58

32K < tokens ≤ 198K

$0.86

$3.154

glm-4.7

0 < tokens ≤ 32K

$0.431

$2.007

32K < tokens ≤ 166K

$0.574

$2.294

glm-4.6

0 < tokens ≤ 32K

$0.431

$2.007

32K < tokens ≤ 166K

$0.574

$2.294

> These models are not third-party services. They run entirely on Alibaba Cloud Model Studio servers.

> GLM models charge the same rate for thinking and non-thinking modes.

## **Image generation**

### **Qwen image generation**

Qwen text-to-image models excel at rendering complex text, especially bilingual Chinese-English text. [API reference](/help/en/model-studio/qwen-image-api)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Unit price**

**Free quota**

qwen-image-2.0-pro

> Currently has the same capabilities as qwen-image-2.0-pro-2026-03-03

$0.075/image

[Free quota for new users](/help/en/model-studio/new-free-quota): 100 images each

Validity: within 90 days after activating Model Studio

qwen-image-2.0-pro-2026-03-03

$0.075/image

qwen-image-2.0

> Currently has the same capabilities as qwen-image-2.0-2026-03-03

$0.035/image

qwen-image-2.0-2026-03-03

$0.035/image

qwen-image-max

> Currently has the same capabilities as qwen-image-max-2025-12-30

$0.075/image

qwen-image-max-2025-12-30

$0.075/image

qwen-image-plus

> Currently has the same capabilities as qwen-image

$0.03/image

qwen-image-plus-2026-01-09

$0.03/image

qwen-image

$0.035/image

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota**

qwen-image-2.0-pro

> Currently has the same capabilities as qwen-image-2.0-pro-2026-03-03

$0.071676/image

No free quota

qwen-image-2.0-pro-2026-03-03

$0.071676/image

qwen-image-2.0

> Currently has the same capabilities as qwen-image-2.0-2026-03-03

$0.028671/image

qwen-image-2.0-2026-03-03

$0.028671/image

qwen-image-max

> Currently has the same capabilities as qwen-image-max-2025-12-30

$0.071677/image

qwen-image-max-2025-12-30

$0.071677/image

qwen-image-plus

> Currently has the same capabilities as qwen-image

$0.028671/image

qwen-image-plus-2026-01-09

$0.028671/image

qwen-image

$0.035/image

**Input prompt**

**Output image**

Healing-style hand-drawn poster featuring three puppies playing with a ball on lush green grass, adorned with decorative elements such as birds and stars. The main title **“Come Play Ball!”** is prominently displayed at the top in bold, blue cartoon font. Below it, the subtitle **“Come \[Show Off Your Skills\]!**” appears in green font. A speech bubble adds playful charm with the text: **“Hehe, watch me amaze my little friends next!”** At the bottom, supplementary text reads: **“We get to play ball with our friends again!”** The color palette centers on fresh greens and blues, accented with bright pink and yellow tones to highlight a cheerful, childlike atmosphere.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6492803771/p1005422.png)

### **Qwen image editing**

Qwen image editing models support precise bilingual (Chinese-English) text editing, color correction, detail enhancement, style transfer, object addition or removal, position changes, and motion adjustments, which enables complex image-text editing. [API reference](/help/en/model-studio/qwen-image-edit-api)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Unit price**

**Free quota**

qwen-image-2.0-pro

> Currently has the same capabilities as qwen-image-2.0-pro-2026-03-03

$0.075/image

[Free quota for new users](/help/en/model-studio/new-free-quota): 100 images each

Validity: within 90 days after activating Model Studio

qwen-image-2.0-pro-2026-03-03

$0.075/image

qwen-image-2.0

> Currently has the same capabilities as qwen-image-2.0-2026-03-03

$0.035/image

qwen-image-2.0-2026-03-03

$0.035/image

qwen-image-edit-max

> Currently has the same capabilities as qwen-image-edit-max-2026-01-16

$0.075/image

qwen-image-edit-max-2026-01-16

$0.075/image

qwen-image-edit-plus

> Currently has the same capabilities as qwen-image-edit-plus-2025-10-30

$0.03/image

qwen-image-edit-plus-2025-12-15

$0.03/image

qwen-image-edit-plus-2025-10-30

$0.03/image

qwen-image-edit

$0.045/image

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota**

qwen-image-2.0-pro

> Currently has the same capabilities as qwen-image-2.0-pro-2026-03-03

$0.071676/image

No free quota

qwen-image-2.0-pro-2026-03-03

$0.071676/image

qwen-image-2.0

> Currently has the same capabilities as qwen-image-2.0-2026-03-03

$0.028671/image

qwen-image-2.0-2026-03-03

$0.028671/image

qwen-image-edit-max

> Currently has the same capabilities as qwen-image-edit-max-2026-01-16

$0.071677/image

qwen-image-edit-max-2026-01-16

$0.071677/image

qwen-image-edit-plus

> Currently has the same capabilities as qwen-image-edit-plus-2025-10-30

$0.028671/image

qwen-image-edit-plus-2025-12-15

$0.028671/image

qwen-image-edit-plus-2025-10-30

$0.028671/image

qwen-image-edit

$0.043/image

![dog_and_girl (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4187755571/p998448.jpeg)

Original image

![狗修改图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7292516571/p998447.png)

Change the person’s pose to standing and bending to hold the dog’s front paw.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6569265571/p998451.png)

Original image

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6569265571/p998452.png)

Replace the words “HEALTH INSURANCE” on the letter blocks with “明天会更好.”

![5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5402776571/p998591.webp)

Original image

![5out](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5402776571/p998592.webp)

Replace the polka-dot shirt with a light blue shirt.

![6](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5402776571/p998612.webp)

Original image

![6out](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7292516571/p998613.webp)

Change the background to Antarctica.

![7](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9746565571/p998616.webp)

Original image

![7out](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7292516571/p998617.webp)

Generate a cartoon avatar of the person.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7292516571/p998449.png)

Original image

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7292516571/p998450.png)

Remove the hair from the plate.

### **Qwen image translation**

Qwen image translation models support translating text in images from 11 languages into Chinese or English. They preserve the original layout and content precisely, and offer custom features such as term definitions, sensitive words filtering, and subject detection. [API reference](/help/en/model-studio/qwen-mt-image-api)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota**

qwen-mt-image

$0.000431/image

No free quota

![en](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7089386571/p1000391.png)

Original image

![ja](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7089386571/p1000392.png)

Japanese

![es](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7089386571/p1000393.png)

Portuguese

![ar](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7089386571/p1000394.png)

Arabic

### **Z-Image**

Tongyi - text-to-image - Z-Image is a lightweight model that quickly generates high-quality images. The model supports Chinese and English text rendering, complex semantic understanding, various styles, and multiple resolutions and aspect ratios. [API reference](/help/en/model-studio/z-image-api-reference)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

Valid for 90 days after activating Model Studio

z-image-turbo

Prompt extension disabled (`prompt_extend=false`): $0.015/image

Prompt extension enabled (`prompt_extend=true`): $0.03/image

100 images

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota**

z-image-turbo

Prompt extension disabled (`prompt_extend=false`): $0.01434/image

Prompt extension enabled (`prompt_extend=true`): $0.02868/image

No free quota

**Input prompt**

**Output image**

Photo of a stylish young woman with short black hair standing confidently in front of a vibrant cartoon-style mural wall. She wears an all-black outfit: a puffed bomber jacket with a ruffled collar, cargo shorts, fishnet tights, and chunky black Doc Martens, with a gold chain dangling from her waist. The background features four colorful comic-style panels: one reads “**GRAND STAGE**” and includes sneakers and a Gatorade bottle; another displays green Nike sneakers and a slice of pizza; the third reads “**HARAJUKU st**” with floating shoes; and the fourth shows a blue mouse riding a skateboard with the text “**Takeshita WELCOME.**” Dominant bright colors include yellow, teal, orange, pink, and green. Speech bubbles, halftone patterns, and playful characters enhance the urban street-art aesthetic. Daylight evenly illuminates the scene, and the ground beneath her feet is white tiled pavement. Full-body portrait, centered composition, slightly tilted stance, direct eye contact with the camera. High detail, sharp focus, dynamic framing.

![b16c8008-83c1-4c80-ae22-786a2299bec3-1-转换自-png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1753716671/p1036752.webp)

### **Wan text-to-image**

Wan text-to-image models generate high-quality images from simple text prompts. [API reference](/help/en/model-studio/text-to-image-v2-api-reference) | [Try it online](https://wan.video/wanxiang/creation)

## Global

In the [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled globally.

**Model**

**Description**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

Valid for 90 days after activating Model Studio

wan2.6-t2i `**Recommended**`

Wan 2.6. Supports new synchronous interfaces and lets you freely select dimensions within the constraints of total pixel area and aspect ratio.

$0.028671/image

No free quota

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Description**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

Valid for 90 days after activating Model Studio

wan2.6-t2i `**Recommended**`

Wan 2.6. Supports new synchronous interfaces and lets you freely select dimensions within the constraints of total pixel area and aspect ratio.

$0.03/image

50 images

wan2.5-t2i-preview `**Recommended**`

Wan 2.5 preview. Removes single-side length limits and lets you freely select dimensions within the constraints of total pixel area and aspect ratio.

$0.03/image

50 images

wan2.2-t2i-plus

Wan 2.2 Professional Edition. Fully upgraded in creativity, stability, and realistic texture.

$0.05/image

100 images

wan2.2-t2i-flash

Wan 2.2 Flash Edition. Fully upgraded in creativity, stability, and realistic texture.

$0.025/image

100 images

wan2.1-t2i-plus

Wan 2.1 Professional Edition. Supports multiple styles and generates images with rich details.

$0.05/image

200 images

wan2.1-t2i-turbo

Wan 2.1 Turbo Edition. Supports multiple styles and offers fast generation speed.

$0.025/image

200 images

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

Valid for 90 days after activating Model Studio

wan2.6-t2i `**Recommended**`

Wan 2.6. Supports new synchronous interfaces and lets you freely select dimensions within the constraints of total pixel area and aspect ratio.

$0.028671/image

No free quota

wan2.5-t2i-preview `**Recommended**`

Wan 2.5 preview. Removes single-side length limits and lets you freely select dimensions within the constraints of total pixel area and aspect ratio.

$0.028671/image

No free quota

wan2.2-t2i-plus

Wan 2.2 Professional Edition. Fully upgraded in creativity, stability, and realistic texture.

$0.02007/image

No free quota

wan2.2-t2i-flash

Wan 2.2 Flash Edition. Fully upgraded in creativity, stability, and realistic texture.

$0.028671/image

No free quota

wanx2.1-t2i-plus

Wan 2.1 Professional Edition. Supports multiple styles and generates images with rich details.

$0.028671/image

No free quota

wanx2.1-t2i-turbo

Wan 2.1 Turbo Edition. Supports multiple styles and offers fast generation speed.

$0.020070/image

No free quota

wanx2.0-t2i-turbo

Wan 2.0 Turbo Edition. Excels at textured portraits and creative designs. It is cost-effective.

$0.005735/image

No free quota

**Prompt**

**Generated image**

A needle-felted **Santa holding a gift**, **with a white cat standing beside him**. The background shows many colorful gifts. The scene should feel cute, warm, and cozy, with some green plants in the background.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8307364571/p990300.png)

### **Wan image generation and editing 2.6**

Wan image generation models support image editing and mixed text-image outputs to meet diverse generation and integration needs. [API reference](/help/en/model-studio/wan-image-generation-api-reference)

## Global

In [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), both endpoint and data storage are located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled globally.

**Model**

**Unit price**

**Free quota**

wan2.6-image

$0.028671/image

No free quota

## International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), both endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

Valid for 90 days after activating Model Studio

wan2.6-image

$0.03/image

50 images

## Chinese Mainland

In [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), both endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota**

wan2.6-image

$0.028671/image

No free quota

### **Wan general image editing 2.5**

Wan general image editing 2.5 supports subject-consistent editing using text, a single image, or multiple images. It also enables multi-image fusion creation. [API reference](/help/en/model-studio/wan2-5-image-edit-api-reference)

## International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

Valid for 90 days after activating Model Studio

wan2.5-i2i-preview

$0.03/image

50 units

## Chinese Mainland

In [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are both located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota**

wan2.5-i2i-preview

$0.028671/image

No free quota

**Feature**

**Input example**

**Output image**

Single-image editing

![damotest2023_Portrait_photography_outdoors_fashionable_beauty_409ae3c1-19e8-4515-8e50-b3c9072e1282_2-转换自-png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9774878571/p1011665.webp)

![a26b226d-f044-4e95-a41c-d1c0d301c30b-转换自-png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9774878571/p1011666.webp)

Change the floral dress to a vintage-style lace long dress with exquisite embroidery details on the collar and cuffs.

Multi-image fusion

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3509593671/p1020961.png)

![p1028883](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2509593671/p1028892.webp)

Place the alarm clock from Image 1 next to the vase on the dining table in Image 2.

### **Wan general image editing 2.1**

Wan general image editing models enable diverse image editing tasks using simple instructions. Use cases include image expansion, watermark removal, style transfer, image inpainting, and image enhancement. [Usage](/help/en/model-studio/wanx-image-edit) | [API reference](/help/en/model-studio/wanx-image-edit-api-reference)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota**

wanx2.1-imageedit

$0.020070 per image

No free quota

General image editing currently supports the following features:

**Features**

**Input image**

**Prompt**

**Output image**

**Global stylization**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930138.png)

Convert to a French picture-book style.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930139.png)

**Local stylization**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930188.png)

Turn the house into a wooden plank style.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930413.png)

**Instruction-based editing**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p942602.png)

Change the girl's hair to red.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p942603.png)

**Local repaint**

Input image

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930416.png)

Masked area (indicated in white)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930417.png)

A ceramic rabbit holding a ceramic flower.

Output image

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930415.png)

**Text watermark removal**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930146.png)

Remove text from the image.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930418.png)

**Image expansion**

![20250319105917](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930580.jpg)

A green fairy.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930750.png)

**Super resolution**

Blurry image

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930151.png)

Apply super resolution.

Sharp image

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930152.png)

**Image coloring**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930149.png)

Blue background, yellow leaves.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930150.png)

**Sketch-to-image**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930155.png)

A Nordic minimalist living room.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930156.png)

**Reference image**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930153.png)

A cartoon character cautiously peeks at a brilliant blue gemstone inside the room.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9666834571/p930154.png)

### **OutfitAnyone**

-   OutfitAnyone Plus improves image clarity, fabric texture detail, and logo fidelity over the Basic Edition but takes longer to generate. It is suitable for scenarios where generation time is not a critical factor. [API reference](/help/en/model-studio/aitryon-plus-api) | [Try it online](https://bailian.console.alibabacloud.com/?tab=model#/model-market/detail/aitryon-plus)
    
-   OutfitAnyone image parsing separates models and clothing images. You can use it for pre- and post-processing AI try-on images. [API reference](/help/en/model-studio/aitryon-parsing-api)
    

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Description**

**Sample input**

**Sample output**

aitryon-plus

OutfitAnyone Plus

![output26](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2446786571/p1001096.webp)

![output29](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2446786571/p1001097.webp)

aitryon-parsing-v1

OutfitAnyone image parsing

**OutfitAnyone unit pricing**

**Service**

**Model**

**Unit price**

**Discount**

**Tier**

OutfitAnyone Plus

aitryon-plus

$0.071677 per image

None

None

OutfitAnyone image parsing

aitryon-parsing-v1

$0.000574 per image

None

None

## **Video generation – Wan**

### **Text-to-video**

Wan text-to-video models generate videos from a single sentence, delivering rich artistic styles and cinematic quality. [API reference](/help/en/model-studio/text-to-video-api-reference) | [Try it online](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/efm/model_experience_center/vision?currentTab=videoGenerate)

## Global

In the [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled globally.

**Model**

**Description**

**Unit price**

**Free quota**

wan2.6-t2v `**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

720P: $0.086012/second

1080P: $0.143353/second

No free quota

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Description**

**Unit price**

**Free quota** [(Claim)](/help/en/model-studio/new-free-quota)

Valid for 90 days after activating Model Studio

wan2.6-t2v `**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

720P: $0.10/second

1080P: $0.15/second

50 seconds

wan2.5-t2v-preview `**Recommended**`

Wan 2.5 preview. Supports automatic voiceover and custom audio file input.

480P: $0.05/second

720P: $0.10/second

1080P: $0.15/second

50 seconds

wan2.2-t2v-plus

Wan 2.2 Professional Edition. Significantly improved image detail and motion stability.

480P: $0.02/second

1080P: $0.10/second

50 seconds

wan2.1-t2v-turbo

Wan 2.1 Turbo Edition. Fast generation speed and balanced performance.

$0.036/second

200 seconds

wan2.1-t2v-plus

Wan 2.1 Professional Edition. Generates rich details and higher-quality visuals.

$0.10/second

200 seconds

## US

In the [US deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Model inference compute resources are limited to the US.

**Model**

**Description**

**Unit price**

**Free quota**

wan2.6-t2v-us `**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

720P: $0.1/second

1080P: $0.15/second

No free quota

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

**Free quota**

wan2.6-t2v`**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

720P: $0.086012/second

1080p: 0.143353 per second

No free quota

wan2.5-t2v-preview`**Recommended**`

Wan 2.5 preview. Supports automatic voiceover and custom audio file input.

480P: $0.043006/second

720P: $0.086012/second

1080P: $0.143353/second

No free quota

wan2.2-t2v-plus

Wan 2.2 Professional Edition. Significantly improved image detail and motion stability.

480P: $0.02007/second

1080P: $0.100347/second

No free quota

wanx2.1-t2v-turbo

Faster generation speed and balanced performance.

$0.034405/second

No free quota

wanx2.1-t2v-plus

Generates richer details and higher-quality visuals.

$0.100347/second

No free quota

**Input prompt**

**Output video (wan2.6, multi-shot video)**

Shot from a low angle, in a medium close-up, with warm tones, mixed lighting (the practical light from the desk lamp blends with the overcast light from the window), side lighting, and a central composition. In a classic detective office, wooden bookshelves are filled with old case files and ashtrays. A green desk lamp illuminates a case file spread out in the center of the desk. A fox, wearing a dark brown trench coat and a light gray fedora, sits in a leather chair, its fur crimson, its tail resting lightly on the edge, its fingers slowly turning yellowed pages. Outside, a steady drizzle falls beneath a blue sky, streaking the glass with meandering streaks. It slowly raises its head, its ears twitching slightly, its amber eyes gazing directly at the camera, its mouth clearly moving as it speaks in a smooth, cynical voice: **'The case was cold, colder than a fish in winter. But every chicken has its secrets, and I, for one, intended to find them'**.

### **Image-to-video – first frame**

Wan image-to-video models use your input image as the first frame, then generate a video based on your prompt, delivering rich artistic styles and cinematic quality. [API reference](/help/en/model-studio/image-to-video-api-reference/) | [Try it online](https://modelstudio.console.alibabacloud.com/?tab=dashboard#/efm/model_experience_center/vision?currentTab=videoGenerate)

## Global

In the [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled globally.

**Model**

**Description**

**Unit price**

**Free quota**

wan2.6-i2v `**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

720P: $0.086012/second

1080P: $0.143353/second

No free quota

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Description**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

Valid for 90 days after activating Model Studio

wan2.6-i2v-flash `**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

Output video with audio `audio=true`:

-   720P: $0.05/second
    
-   1080P: $0.075/second
    

Output video without audio `audio=false`:

-   720P: $0.025/second
    
-   1080P: $0.0375/second
    

50 seconds

wan2.6-i2v `**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

720P: $0.10/second

1080P: $0.15/second

50 seconds

wan2.5-i2v-preview `**Recommended**`

Wan 2.5 preview. Supports automatic dubbing and custom audio file uploads.

480P: $0.05/second

720P: $0.10/second

1080P: $0.15/second

50 seconds

wan2.2-i2v-flash

Wan 2.2 Flash Edition. Extremely fast generation speed with significant improvements in visual detail and motion stability.

480P: $0.015/second

720P: $0.036/second

50 seconds

wan2.2-i2v-plus

Wan 2.2 Professional Edition. Delivers significant improvements in visual detail and motion stability.

480P: $0.02/second

1080P: $0.10/second

50 seconds

wan2.1-i2v-turbo

Wan 2.1 Turbo Edition. Fast generation speed with balanced performance.

$0.036/second

200 seconds

wan2.1-i2v-plus

Wan 2.1 Professional Edition. Generates rich details and produces higher-quality, more textured visuals.

$0.10/second

200 seconds

## US

In the [US deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Model inference compute resources are limited to the US.

**Model**

**Description**

**Unit price**

**Free quota**

wan2.6-i2v-us `**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

720P: $0.1/second

1080P: $0.15/second

No free quota

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

**Free quota**

wan2.6-i2v-flash `**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

Output video with audio `audio=true`:

-   720P: $0.043006/second
    
-   1080P: $0.071676/second
    

Output video without audio `audio=false`:

-   720P: $0.021503/second
    
-   1080P: $0.035838/second
    

No free quota

wan2.6-i2v `**Recommended**`

Wan 2.6. Introduces multi-shot narrative capability and supports automatic voiceover and custom audio file input.

720P: $0.086012/second

1080P: $0.143353/second

No free quota

wan2.5-i2v-preview

Wan 2.5 preview. Supports automatic dubbing and custom audio file uploads.

480P: $0.043006/second

720P: $0.086012/second

1080P: $0.143353/second

No free quota

wan2.2-i2v-plus

Wan 2.2 Professional Edition. Delivers significant improvements in visual detail and motion stability.

480P: $0.02007/second

1080P: $0.100347/second

No free quota

wanx2.1-i2v-turbo

Wan 2.1 Turbo Edition. Fast generation speed with balanced performance.

$0.034405/second

No free quota

wanx2.1-i2v-plus

Wan 2.1 Professional Edition. Generates rich details and produces higher-quality, more textured visuals.

$0.100347/second

No free quota

**Input prompt**

**Input first-frame image and audio**

**Output video (wan2.6, multi-shot video)**

A scene of urban fantasy art. A dynamic graffiti-style character. A boy painted with spray paint comes alive from a concrete wall. He raps in English at high speed while striking a classic, energetic rapper pose. The setting is under a railway bridge in an urban area at night. Lighting comes from a single streetlamp, creating a cinematic atmosphere full of high energy and stunning detail. The video's audio consists entirely of his rap, with no other dialogue or noise.

![rap-转换自-png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1682878571/p1011609.webp)

Input audio:

### **Image-to-video – first and last frames**

Wan first-and-last-frame video generation models generate smooth, fluid videos from just two input frames, the first and last, plus a prompt. Videos feature rich artistic styles and cinematic quality. [API reference](/help/en/model-studio/image-to-video-by-first-and-last-frame-api-reference) | [Try it online](https://wan.video/wanxiang/videoCreation)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

Valid for 90 days after activating Model Studio

wan2.2-kf2v-flash

480P: $0.015/second

720P: $0.036/second

1080P: $0.07/second

50 seconds

wan2.1-kf2v-plus

$0.10/second

200 seconds

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

wan2.2-kf2v-flash

480P: $0.014335/second

720P: $0.028671/second

1080P: $0.068809/second

No free quota

wanx2.1-kf2v-plus

$0.100347/second

No free quota

**Input example**

**Output video**

**First frame**

**Last frame**

**Prompt**

![first_frame](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1166661571/p944793.png)

![last_frame](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1166661571/p944794.png)

Realistic style. A black kitten curiously looks up at the sky. The camera starts at eye level and gradually rises to an overhead view of the kitten’s curious gaze.

### **Reference-to-video**

The Wan reference-to-video model generates performance videos by referencing a character's appearance from an input video or image, the voice from the input video, and text prompts. [API reference](/help/en/model-studio/wan-video-to-video-api-reference)

Billing rules: Both input and output videos are billed by **video seconds**. Failed requests are not billed and do not consume the free quota.

-   The input video billing duration is capped at **5 seconds**. For more information, see [Wan Reference-to-video](/help/en/model-studio/wan-video-to-video-api-reference#f79461ca408qn).
    
-   The output video billing duration equals the **number of successfully generated seconds**.
    

## Global

In the [global deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **US (Virginia) region**. Model inference compute resources are dynamically scheduled globally.

**Model**

**Output video type**

**Input & output price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

wan2.6-r2v

Video with audio

720P: $0.086012/second

1080P: $0.143353/second

No free quota

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Output video type**

**Input & output price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

wan2.6-r2v-flash `**Recommended**`

Video with audio

`audio=true`

720P: $0.05/second

1080P: $0.075/second

50 seconds

Valid for 90 days after activating Model Studio

Video without audio

`audio=false`

720P: $0.025/second

1080P: $0.0375/second

wan2.6-r2v

Video with audio

720P: $0.10/second

1080P: $0.15/second

50 seconds

Valid for 90 days after activating Model Studio

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Output video type**

**Input & output price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

wan2.6-r2v-flash `**Recommended**`

Video with audio

`audio=true`

720P: $0.043006/second

1080P: $0.071676/second

No free quota

Video without audio

`audio=false`

720P: $0.021503/second

1080P: $0.035838/second

wan2.6-r2v

Video with audio

720P: $0.086012/second

1080P: $0.143353/second

No free quota

### **General video editing**

Wan general video editing models support multimodal inputs, including text, images, and video, and perform both video generation and general editing tasks. [API reference](/help/en/model-studio/wanx-vace-api-reference) | [Try it online](https://wan.video/wanxiang/videoCreation?tab=edit)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

wan2.1-vace-plus

$0.1/second

50 seconds

Valid for 90 days after activating Model Studio

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota)

wanx2.1-vace-plus

$0.100347/second

No free quota

General video editing models support the following features:

**Feature**

**Input reference image**

**Input prompt**

**Output video**

**Multi-image reference**

Reference image 1 (for entity)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1007461571/p955656.png)

Reference image 2 (for background)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1007461571/p955657.png)

In the video, a girl gracefully **walks out from the depths of an ancient, misty forest**. Her steps are light, and the camera captures her every nimble movement. When the girl stops and looks around at the lush woods, she **breaks into a smile of surprise and joy**. This moment is captured in the interplay of light and shadow, recording the wonderful encounter between the girl and nature.

Output video

**Video restyling**

The video shows a black **steampunk-style car** driven by a gentleman, adorned with gears and copper pipes. The background is a steam-powered candy factory with retro elements, creating a vintage and playful scene.

**Local editing**

Input video

Input mask image (The white area indicates the editing region)

![mask](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3160651571/p955179.png)

The video shows a Parisian-style French cafe where a **lion in a suit** is elegantly sipping coffee. It holds a coffee cup in one hand, drinking with a look of contentment. The cafe is tastefully decorated, with soft tones and warm lighting illuminating the area where the lion is.

The content in the editing region is modified based on the prompt

**Video extension**

Input initial video segment (1 second)

A **dog wearing sunglasses skateboards on a street**, 3D cartoon.

Output extended video (5 seconds)

**Video outpainting**

An elegant lady is passionately playing the violin, with **a full symphony orchestra behind her**.

### **Wan digital human**

You can generate natural-speaking, singing, or performing videos from a single portrait image and audio file. To use this model, call the following models in order. [wan2.2-s2v image detection](/help/en/model-studio/wan-s2v-detect-api) | [wan2.2-s2v video generation](/help/en/model-studio/wan-s2v-api)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

wan2.2-s2v-detect

Checks whether the input image meets requirements, such as clarity, single-person framing, and front-facing orientation.

$0.000574 per image

wan2.2-s2v

Generates a dynamic video of the person using a validated image and an audio clip.

480P: $0.071677 per second

720P: $0.129018 per second

**Example input**

**Output video**

![p1001125-转换自-jpeg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7691140671/p1012867.webp)

Audio Input:

### Wan image-to-action

This service offers Standard and Professional modes. It uses a person image and reference video to transfer the video subject’s actions and expressions onto the image subject to generate a dynamic action video. [API reference](/help/en/model-studio/wan-animate-move-api)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Service**

**Description**

**Unit price**

**Free quota** [View](/help/en/model-studio/new-free-quota)

wan2.2-animate-move

Standard mode `wan-std`

Generates animations faster and meets light requirements, such as basic animation demos. Offers high value for money.

$0.12 per second

50 seconds total across both modes

Professional mode `wan-pro`

Delivers higher animation smoothness with natural transitions between actions and expressions. Closely resembles real-world filming.

$0.18 per second

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Service**

**Description**

**Unit price**

**Free quota** [View](/help/en/model-studio/new-free-quota)

wan2.2-animate-move

Standard mode `wan-std`

Provides faster generation. Suitable for light needs, such as basic animation demos, and offers high value.

$0.06 per second

No free quota

Professional mode `wan-pro`

Achieves higher animation smoothness with natural transitions between actions and expressions, closely mimicking real-world filming.

$0.09 per second

**Portrait**

**Reference video**

**Output video (Standard mode)**

**Output video (Professional mode)**

![move_input_image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3287512671/p1008736.jpeg)

### **Wan video character swap**

This service offers Standard and Professional modes. It swaps the main subject in a video with a person from an input image while preserving the original scene, lighting, and color tone. [API reference](/help/en/model-studio/wan-animate-mix-api)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Service**

**Description**

**Unit price**

**Free quota** [View](/help/en/model-studio/new-free-quota)

wan2.2-animate-mix

Standard mode `wan-std`

Generates animations faster and meets light workloads, such as basic animation demos. Offers high value for money.

$0.18 per second

50 seconds total across both services

Professional mode `wan-pro`

Delivers higher animation smoothness with natural transitions between actions and expressions. Produces results closer to real-world filming.

$0.26 per second

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Service**

**Description**

**Unit price**

**Free quota** [View](/help/en/model-studio/new-free-quota)

wan2.2-animate-mix

Standard mode `wan-std`

Faster generation. Suitable for light needs such as basic animation demos. Cost-effective.

$0.09 per second

No free quota

Professional mode `wan-pro`

Enhanced animation smoothness. Provides natural transitions between actions and expressions. Delivers results that closely resemble real-world filming.

$0.13 per second

**Person image**

**Reference video**

**Output video (Standard mode)**

**Output video (Professional mode)**

![mix_input_image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0050602671/p1008733.jpeg)

### AnimateAnyone

This service generates animated videos from a person image and motion templates. To use this service directly, call the following three models in order. [AnimateAnyone image detection API details](/help/en/model-studio/animate-anyone-detect-api) | [AnimateAnyone motion template generation](/help/en/model-studio/animate-anyone-template-api) | [AnimateAnyone video generation API details](/help/en/model-studio/animateanyone-video-generation-api)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

animate-anyone-detect-gen2

Checks if the input image meets requirements.

$0.000574/image

animate-anyone-template-gen2

Fetches character actions from a motion video and generates an action template.

$0.011469/second

animate-anyone-gen2

Generates a character motion video from a character image and an action template.

**Input image**

**Action video**

**Output with image background**

**Output with video background**

![04-9_16](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1017834571/p885846.png)

**Note**

-   The preceding examples were generated by an app that integrates AnimateAnyone.
    
-   AnimateAnyone outputs only video frames, not audio.
    

### EMO

This service generates dynamic portrait videos from a portrait image and human voice audio file. To use this service, call the following models in order. [EMO image detection API reference](/help/en/model-studio/emo-detect-api) | [EMO video generation API reference](/help/en/model-studio/emo-api)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

emo-detect-v1

Checks if the input image meets requirements. It requires no deployment and can be called directly.

$0.000574 per image

emo-v1

Generates a dynamic portrait video. It requires no deployment and can be called directly.

-   1:1 aspect ratio video: $0.011469 per second
    
-   3:4 aspect ratio video: $0.022937 per second
    

**Input: A portrait image and a human voice audio file**

**Output: A dynamic portrait video**

Portrait image:

![上春山](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6317834571/p872312.png)

Human voice audio: See the video on the right.

Portrait video:

Use the action style intensity setting: active ("style\_level": "active").

### LivePortrait

This service generates dynamic portrait videos from a portrait image and human voice audio file quickly and efficiently. Compared with EMO, LivePortrait is faster and less expensive but produces lower visual quality. To use this service, call the following two models in order. [LivePortrait image detection](/help/en/model-studio/liveportrait-detect-api) | [LivePortrait video generation](/help/en/model-studio/liveportrait-api)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

liveportrait-detect

Checks whether the input image meets requirements

$0.000574 per image

liveportrait

Generates a dynamic portrait video

$0.002868 per second

**Input: Portrait image and voice audio file**

**Output: Dynamic portrait video**

Portrait image:

![Emoji男孩](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7517834571/p874897.png)

Voice audio: See the video on the right.

Portrait video:

### **Emoji**

This service generates animated face videos from a face image and preset facial motion templates. Use cases include emoji creation and video asset generation. To use this service, call the following models in order. [Emoji image detection](/help/en/model-studio/emoji-detect-api) | [Emoji video generation](/help/en/model-studio/emoji-api)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

emoji-detect-v1

Checks if the input image meets requirements.

$0.000574 per image

emoji-v1

Generates a matching emoji video from a portrait image and a specified emoji template.

$0.011469 per second

**Input: portrait image**

**Output: dynamic portrait video**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7292516571/p906298.png)

"Happy" emoji template sequence ("input.driven\_id": "mengwa\_kaixin")

### VideoRetalk

This service generates new videos where the speaker’s lip movements match the input audio from a source video and human voice audio file. To use this service, call the following model. [API reference](/help/en/model-studio/videoretalk-api)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

videoretalk

Generates a video by synchronizing the speaker's lip movements with the input audio

$0.011469 per second

### **Video style transform**

This service generates videos in different styles based on user-provided text or restyles an input video. [API reference](/help/en/model-studio/video-style-transform-api-reference)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Description**

**Unit price**

video-style-transform

Converts input video into Japanese manga, American comic, or other artistic styles.

720P

$0.071677 per second

540P

$0.028671 per second

**Input video**

**Output video (Japanese manga)**

## Speech synthesis (text-to-speech)

### **Qwen speech synthesis**

Supports mixed-language text input and streaming audio output. [Usage](/help/en/model-studio/qwen-tts) | [API reference](/help/en/model-studio/qwen-tts-api)

#### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

##### **Qwen3-TTS-Instruct-Flash**

**Model**

**Version**

**Unit price**

**Max input characters**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-instruct-flash

> Currently, qwen3-tts-instruct-flash-2026-01-26.

Stable

$0.115/10K characters

600

10,000 characters

Valid for 90 days after activating Model Studio

qwen3-tts-instruct-flash-2026-01-26

Snapshot

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### **Qwen3-TTS-VD**

**Model**

**Version**

**Unit price**

**Max input characters**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-vd-2026-01-26

Snapshot

$0.115 per 10,000 characters

600

10,000 characters

Valid for 90 days after activating Model Studio

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### **Qwen3-TTS-VC**

**Model**

**Version**

**Unit price**

**Max input characters**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-vc-2026-01-22

Snapshot

$0.115/10K characters

600

10,000 characters

Valid for 90 days after activating Model Studio.

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### Qwen3-TTS-Flash

**Model**

**Version**

**Unit price**

**Max input characters**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-flash

> Currently, qwen3-tts-flash-2025-11-27.

Stable

$0.10 per 10,000 characters

600

10,000 characters

Valid for 90 days after activating Model Studio

qwen3-tts-flash-2025-11-27

Snapshot

qwen3-tts-flash-2025-09-18

Snapshot

If you activate Alibaba Cloud Model Studio before 00:00 on November 13, 2025: 2,000 characters

If you activate Alibaba Cloud Model Studio after 00:00 on November 13, 2025: 10,000 characters

Valid for 90 days after activating Model Studio.

-   **Supported languages**: Chinese (Mandarin, Beijing, Shanghai, Sichuan, Nanjing, Shaanxi, Minnan, Tianjin, Cantonese), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

#### Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

##### **Qwen3-TTS-Instruct-Flash**

**Model**

**Version**

**Unit price**

**Max input characters**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-instruct-flash

> Currently, qwen3-tts-instruct-flash-2026-01-26.

Stable

$0.115/10K characters

600

No free quota is available.

qwen3-tts-instruct-flash-2026-01-26

Snapshot

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### **Qwen3-TTS-VD**

**Model**

**Version**

**Unit price**

**Max input characters**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-vd-2026-01-26

Snapshot

$0.115/10K characters

600

No free quota is available.

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### **Qwen3-TTS-VC**

**Model**

**Version**

**Unit price**

**Max input characters**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-vc-2026-01-22

Snapshot

$0.115/10K characters

600

No free quota is available.

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### Qwen3-TTS-Flash

**Model**

**Version**

**Unit price**

**Max input characters**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-flash

> Currently, qwen3-tts-flash-2025-11-27.

Stable

$0.114682 per 10,000 characters

600

No free quota is available.

qwen3-tts-flash-2025-11-27

Snapshot

qwen3-tts-flash-2025-09-18

Snapshot

-   **Supported languages**: Chinese (Mandarin, Beijing, Shanghai, Sichuan, Nanjing, Shaanxi, Minnan, Tianjin, Cantonese), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### Qwen-TTS

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(Per 1,000 tokens)**

qwen-tts

> Provides the same capabilities as qwen-tts-2025-04-10.

Stable

8,192

512

7,680

$0.230

$1.434

No free quota is available.

qwen-tts-latest

> Provides the same capabilities as the latest snapshot.

Latest

qwen-tts-2025-05-22

Snapshot

qwen-tts-2025-04-10

Audio-to-token conversion rule: Each second of audio corresponds to 50 tokens. Audio shorter than 1 second is calculated as 50 tokens.

### **Qwen real-time speech synthesis**

Supports streaming text input and streaming audio output. It can automatically adjust the speech rate based on the text content and punctuation. [Usage](/help/en/model-studio/qwen-tts-realtime) | [API reference](/help/en/model-studio/qwen-tts-realtime-api-reference/)

Qwen3-TTS-Instruct-Flash-Realtime supports [Qwen real-time speech synthesis](/help/en/model-studio/qwen-tts-realtime#12884a10929p9) and can only use the default voice. It does not support cloned or designed voices.

Qwen3-TTS-VD-Realtime supports using voices from [Qwen voice design API reference](/help/en/model-studio/qwen-tts-voice-design) for real-time speech synthesis, but does not support the default voice.

Qwen3-TTS-VC-Realtime supports using voices from [Qwen voice cloning API reference](/help/en/model-studio/qwen-tts-voice-cloning) for real-time speech synthesis, but does not support the default voice.

Qwen3-TTS-Flash-Realtime and Qwen-TTS-Realtime can only use the default voice. They do not support cloned or designed voices.

#### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

##### **Qwen3-TTS-Instruct-Flash-Realtime**

**Model**

**Version**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-instruct-flash-realtime

> Currently, qwen3-tts-instruct-flash-realtime-2026-01-22.

Stable

$0.143/10K characters

10,000 characters

Valid for 90 days after activating Model Studio.

qwen3-tts-instruct-flash-realtime-2026-01-22

Snapshot

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### Qwen3-TTS-VD-Realtime

**Model**

**Version**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-vd-realtime-2026-01-15

Snapshot

$0.143353 per 10,000 characters

10,000 characters

Valid for 90 days after activating Model Studio

qwen3-tts-vd-realtime-2025-12-16

Snapshot

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### **Qwen3-TTS-VC-Realtime**

**Model**

**Version**

**Unit price**

**Free quota**[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-vc-realtime-2026-01-15

Snapshot

$0.13/10K characters

10,000 characters

Valid for 90 days after activating Model Studio.

qwen3-tts-vc-realtime-2025-11-27

Snapshot

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### Qwen3-TTS-Flash-Realtime

**Model**

**Version**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-flash-realtime

> Currently, qwen3-tts-flash-realtime-2025-11-27.

Stable

$0.13 per 10,000 characters

10,000 characters

Valid for 90 days after activating Model Studio

qwen3-tts-flash-realtime-2025-11-27

Snapshot

qwen3-tts-flash-realtime-2025-09-18

Snapshot

If you activate Alibaba Cloud Model Studio before 00:00 on November 13, 2025: 2,000 characters

If you activate Alibaba Cloud Model Studio after 00:00 on November 13, 2025: 10,000 characters

Valid for 90 days after activating Model Studio

-   **Supported languages**: Chinese (Mandarin, Beijing, Shanghai, Sichuan, Nanjing, Shaanxi, Minnan, Tianjin, Cantonese), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

#### Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

##### **Qwen3-TTS-Instruct-Flash-Realtime**

**Model**

**Version**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-instruct-flash-realtime

> Current capabilities match qwen3-tts-instruct-flash-realtime-2026-01-22.

Stable

$0.143 per 10,000 characters

No free quota

qwen3-tts-instruct-flash-realtime-2026-01-22

Snapshot

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### Qwen3-TTS-VD-Realtime

**Model**

**Version**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-vd-realtime-2026-01-15

Snapshot

$0.143353 per 10,000 characters

No free quota

qwen3-tts-vd-realtime-2025-12-16

Snapshot

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### **Qwen3-TTS-VC-Realtime**

**Model**

**Version**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-vc-realtime-2026-01-15

Snapshot

$0.143353 per 10,000 characters

No free quota is available.

qwen3-tts-vc-realtime-2025-11-27

Snapshot

-   **Supported languages**: Chinese (Mandarin), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### Qwen3-TTS-Flash-Realtime

**Model**

**Version**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-tts-flash-realtime

> Currently, qwen3-tts-flash-realtime-2025-11-27.

Stable

$0.143353 per 10,000 characters

No free quota is available.

qwen3-tts-flash-realtime-2025-11-27

Snapshot

qwen3-tts-flash-realtime-2025-09-18

Snapshot

-   **Supported languages**: Chinese (Mandarin, Beijing, Shanghai, Sichuan, Nanjing, Shaanxi, Minnan, Tianjin, Cantonese), English, Spanish, Russian, Italian, French, Korean, Japanese, German, Portuguese
    
-   **Character calculation rules**: Billing is based on the number of input characters. The rules are as follows:
    
    -   One Chinese character (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) = 2 characters
        
    -   Other characters, such as an English letter, a punctuation mark, or a space = 1 character
        

##### Qwen-TTS-Realtime

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Supported languages**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**(Per 1,000 tokens)**

qwen-tts-realtime

> Currently, qwen-tts-realtime-2025-07-15.

Stable

8,192

512

7,680

$0.345

$1.721

Chinese, English

No free quota is available.

qwen-tts-realtime-latest

> Currently, qwen-tts-realtime-2025-07-15.

Latest

Chinese, English

qwen-tts-realtime-2025-07-15

Snapshot

Chinese, English

Audio-to-token conversion rule: Each second of audio corresponds to 50 tokens. Audio shorter than 1 second is calculated as 50 tokens.

### **Qwen voice cloning**

Voice cloning uses a large model for feature extraction, allowing you to clone voices without training. Provide 10 to 20 seconds of audio to generate a highly similar and natural-sounding custom voice. [Usage](/help/en/model-studio/qwen-tts-realtime) | [API reference](/help/en/model-studio/qwen-tts-voice-cloning)

#### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen-voice-enrollment

$0.01 per voice

1,000 voices

Valid for 90 days after activating Model Studio.

#### Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen-voice-enrollment

$0.01 per sound

No free quota is available.

### **Qwen voice design**

Voice design generates custom voices from text descriptions. It supports multi-language and multi-dimensional voice feature definitions, making it suitable for applications such as ad dubbing, character creation, and audio content production. [Usage](/help/en/model-studio/qwen-tts-realtime) | [API reference](/help/en/model-studio/qwen-tts-voice-design)

#### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen-voice-design

$0.2 per voice

10 voices

Valid for 90 days after activating Model Studio.

#### Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen-voice-design

$0.20 per voice

No free quota is available.

### CosyVoice speech synthesis

CosyVoice is a next-generation generative speech synthesis model from Alibaba Cloud. It deeply integrates text understanding and speech generation based on a large-scale pre-trained language model and supports real-time streaming text-to-speech synthesis. [Usage](/help/en/model-studio/text-to-speech) | [API reference](/help/en/model-studio/cosyvoice-large-model-for-speech-synthesis/)

#### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide (excluding Chinese Mainland).

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

cosyvoice-v3-plus

$0.26/10K characters

10,000 characters

Valid for 90 days after activating Model Studio.

cosyvoice-v3-flash

$0.13/10K characters

Character calculation rules: Chinese characters (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) are counted as 2 characters. All other characters (such as letters, numbers, and Japanese/Korean syllabaries) are counted as 1 character. SSML tag content is not billed.

#### Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

cosyvoice-v3.5-plus

$0.22/10K characters

No free quota

cosyvoice-v3.5-flash

$0.116/10K characters

cosyvoice-v3-plus

$0.286706/10K characters

cosyvoice-v3-flash

$0.14335/10K characters

cosyvoice-v2

$0.286706/10K characters

Character calculation rules: Chinese characters (including simplified/traditional Chinese, Japanese Kanji, and Korean Hanja) are counted as 2 characters. All other characters (such as letters, numbers, and Japanese/Korean syllabaries) are counted as 1 character. SSML tag content is not billed.

## **Speech recognition (speech-to-text) and translation (speech-to-translation)**

### Qwen3-LiveTranslate-Flash

Qwen3-LiveTranslate-Flash is an audio and video translation model based on the Qwen3-Omni architecture. It supports translation between 18 languages, including Chinese, English, Russian, and French. The model can use visual context to improve translation accuracy and outputs both text and speech. [Usage](/help/en/model-studio/qwen3-livetranslate-flash) | [API reference](/help/en/model-studio/qwen3-livetranslate-flash-api)

#### **International**

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide, excluding Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-livetranslate-flash**

> Currently, qwen3-livetranslate-flash-2025-12-01.

Stable

53,248

49,152

4,096

1 million tokens each

Valid for 90 days after activating Model Studio

qwen3-livetranslate-flash-2025-12-01

Snapshot

The billing rules for input and output are as follows:

**Input**

**Unit price (per 1M tokens)**

Audio

$1.577

Video

> The audio portion is billed separately.

$0.631

**Output**

**Unit price (per 1M tokens)**

Audio

$6.308

Text

$1.577

#### Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-livetranslate-flash**

> Currently, qwen3-livetranslate-flash-2025-12-01.

Stable

53,248

49,152

4,096

No free quota is available.

qwen3-livetranslate-flash-2025-12-01

Snapshot

The billing rules for input and output are as follows:

**Input**

**Unit price (per 1M tokens)**

Audio

$1.434

Video

> The audio portion is billed separately.

$0.573

**Output**

**Unit price (per 1M tokens)**

Audio

$5.734

Text

$1.434

### Qwen3-LiveTranslate-Flash-Realtime

Qwen3-LiveTranslate-Flash-Realtime is a multilingual, real-time audio and video translation model. It can recognize 18 languages and translate them into audio in 10 languages in real time.

**Core features:**

-   **Multi-language support**: Supports 18 languages, such as Chinese, English, French, German, Russian, Japanese, and Korean, and 6 Chinese dialects, including Mandarin, Cantonese, and Sichuanese.
    
-   **Visual enhancement**: Uses visual content to improve translation accuracy. The model analyzes lip movements, actions, and on-screen text to improve translation in noisy environments or for words with multiple meanings.
    
-   **Low latency**: Achieves simultaneous interpretation latency as low as 3 seconds.
    
-   **High-quality simultaneous interpretation**: Addresses cross-language word order issues using semantic unit prediction technology. The real-time translation quality is comparable to offline translation results.
    
-   **Natural voice**: Generates natural-sounding, human-like speech. The model adapts its tone and emotion based on the source speech content.
    

[Usage](/help/en/model-studio/qwen3-livetranslate-flash-realtime) | [API reference](/help/en/model-studio/live-translator-api/)

#### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide, excluding Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota**

[(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-livetranslate-flash-realtime**

> Currently, qwen3-livetranslate-flash-realtime-2025-09-22.

Stable

53,248

49,152

4,096

1 million tokens

Valid for 90 days after activating Model Studio.

qwen3-livetranslate-flash-realtime-2025-09-22

Snapshot

After the free quota is used up, the billing rules for input and output are as follows:

**Input**

**Unit price (per 1M tokens)**

Audio

$10

Image

$1.3

**Output**

**Unit price (per 1M tokens)**

Text

$10

Audio

$38

**Token calculation rules:**

-   **Audio**: Each second of audio input or output consumes 12.5 tokens.
    
-   **Image**: Each 28×28 pixel input consumes 0.5 tokens.
    

#### Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Context window**

**Max input**

**Max output**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

**(tokens)**

**qwen3-livetranslate-flash-realtime**

> Currently, qwen3-livetranslate-flash-realtime-2025-09-22.

Stable

53,248

49,152

4,096

No free quota is available.

qwen3-livetranslate-flash-realtime-2025-09-22

Snapshot

The billing rules for input and output are as follows:

**Input**

**Unit price (per 1M tokens)**

Audio

$9.175

Image

$1.147

**Output**

**Unit price (per 1M tokens)**

Text

$9.175

Audio

$34.405

**Token calculation rules:**

-   **Audio**: Each second of audio input or output consumes 12.5 tokens.
    
-   **Image**: Each 28×28 pixel input consumes 0.5 tokens.
    

### **Qwen audio file recognition**

Based on the Qwen multimodal foundation model, this model supports features such as multi-language recognition, singing recognition, and noise rejection. [Usage](/help/en/model-studio/qwen-speech-recognition) | [API reference](/help/en/model-studio/qwen-asr-api-reference)

#### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled worldwide, excluding Chinese Mainland.

##### Qwen3-ASR-Flash-Filetrans

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-asr-flash-filetrans

> Currently, qwen3-asr-flash-filetrans-2025-11-17.

Stable

$0.000035/second

36,000 seconds (10 hours)

Valid for 90 days after activating Model Studio.

qwen3-asr-flash-filetrans-2025-11-17

Snapshot

-   **Supported languages**: Chinese (Mandarin, Sichuanese, Minnan, Wu, Cantonese), English, Japanese, German, Korean, Russian, French, Portuguese, Arabic, Italian, Spanish, Hindi, Indonesian, Thai, Turkish, Ukrainian, Vietnamese, Czech, Danish, Filipino, Finnish, Icelandic, Malay, Norwegian, Polish, Swedish
    
-   **Supported sample rates**: Any
    

##### **Qwen3-ASR-Flash**

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-asr-flash

> Currently, qwen3-asr-flash-2025-09-08.

Stable

$0.000035 per second

36,000 seconds (10 hours)

Valid for 90 days after activating Model Studio.

qwen3-asr-flash-2026-02-10

Snapshot

qwen3-asr-flash-2025-09-08

Snapshot

-   **Supported languages**: Chinese (Mandarin, Sichuanese, Minnan, Wu, Cantonese), English, Japanese, German, Korean, Russian, French, Portuguese, Arabic, Italian, Spanish, Hindi, Indonesian, Thai, Turkish, Ukrainian, Vietnamese, Czech, Danish, Filipino, Finnish, Icelandic, Malay, Norwegian, Polish, Swedish
    
-   **Supported sample rates**: Any
    

#### US

In the [US deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **US (Virginia) region**. Model inference compute resources are limited to the US.

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-asr-flash-us

> Currently, qwen3-asr-flash-2025-09-08-us.

Stable

$0.000035/second

No free quota is available.

qwen3-asr-flash-2025-09-08-us

Snapshot

-   **Supported languages**: Chinese (Mandarin, Sichuanese, Minnan, Wu, Cantonese), English, Japanese, German, Korean, Russian, French, Portuguese, Arabic, Italian, Spanish, Hindi, Indonesian, Thai, Turkish, Ukrainian, Vietnamese, Czech, Danish, Filipino, Finnish, Icelandic, Malay, Norwegian, Polish, Swedish
    
-   **Supported sample rates**: Any
    

#### **Chinese Mainland**

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoints and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

##### Qwen3-ASR-Flash-Filetrans

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-asr-flash-filetrans

> It offers the same capabilities as qwen3-asr-flash-filetrans-2025-11-17.

Stable

$0.000032/second

No free quota is available.

qwen3-asr-flash-filetrans-2025-11-17

Snapshot

-   **Supported languages**: Chinese (Mandarin, Sichuanese, Minnan, Wu, Cantonese), English, Japanese, German, Korean, Russian, French, Portuguese, Arabic, Italian, Spanish, Hindi, Indonesian, Thai, Turkish, Ukrainian, Vietnamese, Czech, Danish, Filipino, Finnish, Icelandic, Malay, Norwegian, Polish, Swedish
    
-   **Supported sample rates**: Any
    

##### **Qwen3-ASR-Flash**

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-asr-flash

> Currently, qwen3-asr-flash-2025-09-08.

Stable

$0.000032/second

No free quota is available.

qwen3-asr-flash-2026-02-10

Snapshot

qwen3-asr-flash-2025-09-08

Snapshot

-   **Supported languages**: Chinese (Mandarin, Sichuanese, Minnan, Wu, Cantonese), English, Japanese, German, Korean, Russian, French, Portuguese, Arabic, Italian, Spanish, Hindi, Indonesian, Thai, Turkish, Ukrainian, Vietnamese, Czech, Danish, Filipino, Finnish, Icelandic, Malay, Norwegian, Polish, Swedish
    
-   **Supported sample rates**: Any
    

### **Qwen real-time speech recognition**

Qwen Real-Time Speech Recognition is a model with automatic language detection. It supports 11 languages and delivers accurate transcription even in complex audio environments. [How to use](/help/en/model-studio/qwen-real-time-speech-recognition) | [API reference](/help/en/model-studio/qwen-asr-realtime-api/)

#### International

In [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoints and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled across global regions, excluding Chinese Mainland.

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-asr-flash-realtime

> Currently, qwen3-asr-flash-realtime-2025-10-27

Stable

$0.00009/second

36,000 seconds (10 hours)

Valid for 90 days after activating Model Studio.

qwen3-asr-flash-realtime-2026-02-10

Snapshot

qwen3-asr-flash-realtime-2025-10-27

Snapshot

-   **Languages supported**: Chinese (Mandarin, Sichuanese, Minnan, Wu, Cantonese), English, Japanese, German, Korean, Russian, French, Portuguese, Arabic, Italian, Spanish, Hindi, Indonesian, Thai, Türkçe, Ukrainian, Vietnamese, Czech, Danish, Filipino, Finnish, Icelandic, Malay, Norwegian, Polish, Swedish
    
-   **Sample rates supported**: 8 kHz, 16 kHz
    

#### Chinese Mainland

In [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoints and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland only.

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

qwen3-asr-flash-realtime

> Currently, qwen3-asr-flash-realtime-2025-10-27

Stable

$0.000047/second

No free quota

qwen3-asr-flash-realtime-2026-02-10

Snapshot

qwen3-asr-flash-realtime-2025-10-27

Snapshot

-   **Languages supported**: Chinese (Mandarin, Sichuanese, Minnan, Wu, Cantonese), English, Japanese, German, Korean, Russian, French, Portuguese, Arabic, Italian, Spanish, Hindi, Indonesian, Thai, Türkçe, Ukrainian, Vietnamese, Czech, Danish, Filipino, Finnish, Icelandic, Malay, Norwegian, Polish, Swedish
    
-   **Sample rates supported**: 8 kHz, 16 kHz
    

### **Paraformer** speech recognition

Paraformer speech recognition offers two versions: recorded file recognition and real-time speech recognition.

**Recorded file recognition**

[Usage](/help/en/model-studio/recording-file-recognition) | [API reference](/help/en/model-studio/paraformer-recorded-speech-recognition-api-reference/)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

paraformer-v2

$0.000012/second

No free quota

paraformer-8k-v2

-   **Languages supported**:
    
    -   paraformer-v2: Chinese (Mandarin, Cantonese, Wu, Minnan, Northeastern, Gansu, Guizhou, Henan, Hubei, Hunan, Ningxia, Shanxi, Shaanxi, Shandong, Sichuan, Tianjin, Jiangxi, Yunnan, Shanghai), English, Japanese, Korean, German, French, Russian
        
    -   paraformer-8k-v2: Mandarin Chinese
        
-   **Sample rates supported**:
    
    -   paraformer-v2: Any
        
    -   paraformer-8k-v2: 8 kHz
        
-   **Audio formats supported**: AAC, AMR, AVI, FLAC, FLV, M4A, MKV, MOV, MP3, MP4, MPEG, OGG, OPUS, WAV, WEBM, WMA, WMV
    

**Real-time speech recognition**

[Usage](/help/en/model-studio/real-time-speech-recognition) | [API reference](/help/en/model-studio/paraformer-real-time-speech-recognition-api-reference/)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

paraformer-realtime-v2

$0.000035/second

No free quota

paraformer-realtime-8k-v2

-   **Languages supported**:
    
    -   paraformer-realtime-v2: Chinese (Mandarin, Cantonese, Wu, Minnan, Northeastern, Gansu, Guizhou, Henan, Hubei, Hunan, Ningxia, Shanxi, Shaanxi, Shandong, Sichuan, Tianjin, Jiangxi, Yunnan, Shanghai), English, Japanese, Korean, German, French, Russian
        
    -   paraformer-realtime-8k-v2: Mandarin Chinese
        
-   **Sample rates supported**:
    
    -   paraformer-realtime-v2: Any
        
    -   paraformer-realtime-8k-v2: 8 kHz
        
-   **Audio formats supported**: PCM, WAV, MP3, OPUS, SPEEX, AAC, AMR
    

### Fun-ASR speech recognition

Fun-ASR speech recognition offers two versions: audio file recognition and real-time speech recognition.

**Audio file recognition**

[Usage](/help/en/model-studio/recording-file-recognition) | [API reference](/help/en/model-studio/fun-asr-recorded-speech-recognition-api-reference/)

#### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoints and data storage are in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

fun-asr

> Currently, fun-asr-2025-11-07

Stable

$0.000035/second

36,000 seconds (10 hours)

Valid for 90 days

fun-asr-2025-11-07

> Improved far-field VAD over fun-asr-2025-08-25 for higher accuracy

Snapshot

fun-asr-2025-08-25

fun-asr-mtl

> Currently, fun-asr-mtl-2025-08-25

Stable

fun-asr-mtl-2025-08-25

Snapshot

-   **Languages supported**:
    
    -   fun-asr and fun-asr-2025-11-07: Mandarin, Cantonese, Wu, Minnan, Hakka, Gan, Xiang, and Jin. Also supports Mandarin accents from Zhongyuan, Southwest, Jilu, Jianghuai, Lanyin, Jiaoliao, Northeast, Beijing, and Hong Kong–Taiwan regions—including Henan, Shaanxi, Hubei, Sichuan, Chongqing, Yunnan, Guizhou, Guangdong, Guangxi, Hebei, Tianjin, Shandong, Anhui, Nanjing, Jiangsu, Hangzhou, Gansu, and Ningxia. Also supports English and Japanese.
        
    -   fun-asr-2025-08-25: Mandarin and English.
        
    -   fun-asr-mtl and fun-asr-mtl-2025-08-25: Mandarin, Cantonese, English, Japanese, Korean, Vietnamese, Indonesian, Thai, Malay, Filipino, Arabic, Hindi, Bulgarian, Croatian, Czech, Danish, Dutch, Estonian, Finnish, Greek, Hungarian, Irish, Latvian, Lithuanian, Maltese, Polish, Portuguese, Romanian, Slovak, Slovenian, and Swedish.
        
-   **Sample rates supported**: Any
    
-   **Audio formats supported**: aac, amr, avi, flac, flv, m4a, mkv, mov, mp3, mp4, mpeg, ogg, opus, wav, webm, wma, wmv
    

#### Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoints and data storage are in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

fun-asr

> Currently, fun-asr-2025-11-07

Stable

$0.000032 / second

No free quota

fun-asr-2025-11-07

> Improved far-field VAD over fun-asr-2025-08-25 for higher accuracy

Snapshot

fun-asr-2025-08-25

fun-asr-mtl

> Currently, fun-asr-mtl-2025-08-25

Stable

fun-asr-mtl-2025-08-25

Snapshot

-   **Languages supported**:
    
    -   fun-asr and fun-asr-2025-11-07: Mandarin, Cantonese, Wu, Minnan, Hakka, Gan, Xiang, and Jin. Also supports Mandarin accents from Zhongyuan, Southwest, Jilu, Jianghuai, Lanyin, Jiaoliao, Northeast, Beijing, and Hong Kong–Taiwan regions—including Henan, Shaanxi, Hubei, Sichuan, Chongqing, Yunnan, Guizhou, Guangdong, Guangxi, Hebei, Tianjin, Shandong, Anhui, Nanjing, Jiangsu, Hangzhou, Gansu, and Ningxia. Also supports English and Japanese.
        
    -   fun-asr-2025-08-25: Mandarin and English.
        
    -   fun-asr-mtl and fun-asr-mtl-2025-08-25: Mandarin, Cantonese, English, Japanese, Korean, Vietnamese, Indonesian, Thai, Malay, Filipino, Arabic, Hindi, Bulgarian, Croatian, Czech, Danish, Dutch, Estonian, Finnish, Greek, Hungarian, Irish, Latvian, Lithuanian, Maltese, Polish, Portuguese, Romanian, Slovak, Slovenian, and Swedish.
        
-   **Sample rates supported**: Any
    
-   **Audio formats supported**: aac, amr, avi, flac, flv, m4a, mkv, mov, mp3, mp4, mpeg, ogg, opus, wav, webm, wma, wmv
    

**Real-time speech recognition**

[Usage](/help/en/model-studio/real-time-speech-recognition) | [API reference](/help/en/model-studio/fun-asr-real-time-speech-recognition-api-reference/)

#### International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoints and data storage are in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

fun-asr-realtime

> Currently, fun-asr-realtime-2025-11-07

Stable

$0.00009/second

36,000 seconds (10 hours)

Valid for 90 days

fun-asr-realtime-2025-11-07

Snapshot

-   **Languages supported**: Mandarin, Cantonese, Wu, Minnan, Hakka, Gan, Xiang, and Jin. Also supports Mandarin accents from Zhongyuan, Southwest, Jilu, Jianghuai, Lanyin, Jiaoliao, Northeast, Beijing, and Hong Kong–Taiwan regions—including Henan, Shaanxi, Hubei, Sichuan, Chongqing, Yunnan, Guizhou, Guangdong, Guangxi, Hebei, Tianjin, Shandong, Anhui, Nanjing, Jiangsu, Hangzhou, Gansu, and Ningxia. Also supports English and Japanese.
    
-   **Sample rates supported**: 16 kHz
    
-   **Audio formats supported**: pcm, wav, mp3, opus, speex, aac, amr
    

#### Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), endpoints and data storage are in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Version**

**Unit price**

**Free quota** [**(Note)**](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

fun-asr-realtime

> Currently, fun-asr-realtime-2025-11-07

Stable

$0.000047/second

No free quota

fun-asr-realtime-2026-02-28

Snapshot

fun-asr-realtime-2025-11-07

Snapshot

fun-asr-realtime-2025-09-15

fun-asr-flash-8k-realtime

> Currently, fun-asr-flash-8k-realtime-2026-01-28

Stable

$0.000032/second

fun-asr-flash-8k-realtime-2026-01-28

Snapshot

-   **Languages supported**:
    
    -   fun-asr-realtime, fun-asr-realtime-2026-02-28, fun-asr-realtime-2025-11-07: Chinese (Mandarin, Cantonese, Wu, Minnan, Hakka, Gan, Xiang, and Jin. Also supports Mandarin accents from Zhongyuan, Southwest, Jilu, Jianghuai, Lanyin, Jiaoliao, Northeast, Beijing, and Hong Kong–Taiwan regions—including Henan, Shaanxi, Hubei, Sichuan, Chongqing, Yunnan, Guizhou, Guangdong, Guangxi, Hebei, Tianjin, Shandong, Anhui, Nanjing, Jiangsu, Hangzhou, Gansu, and Ningxia), English, and Japanese.
        
    -   fun-asr-realtime-2025-09-15: Chinese (Mandarin), English
        
-   **Sample rates supported**: 16 kHz
    
-   **Sample rates supported**:
    
    -   fun-asr-flash-8k-realtime and fun-asr-flash-8k-realtime-2026-01-28: 8 kHz
        
    -   All other models: 16 kHz
        
-   **Audio formats supported**: pcm, wav, mp3, opus, speex, aac, amr
    

## Text embedding

Text embedding models convert text into numeric vectors that represent its meaning. They support search, clustering, recommendation, and classification tasks. Billing is based on the input token count. [API reference](/help/en/model-studio/developer-reference/text-embedding-quick-start-1)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Embedding dimensions**

**Batch size**

**Max tokens per batch**

**Languages supported**

**Unit price**

**(per 1M input tokens)**

**Free quota**

[Note](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

text-embedding-v4

> Part of the [Qwen3-Embedding](https://qwenlm.github.io/zh/blog/qwen3-embedding/) series

2,048, 1,536, 1,024 (default), 768, 512, 256, 128, or 64

10

8,192

Chinese, English, Spanish, French, Portuguese, Indonesian, Japanese, Korean, German, Russian, and over 100 other major languages, including multiple programming languages

$0.07

1 million tokens

Valid for 90 days after activating Model Studio

text-embedding-v3

1,024 (default), 768, or 512

10

8,192

Chinese, English, Spanish, French, Portuguese, Indonesian, Japanese, Korean, German, Russian, and over 50 languages

500,000 tokens

Valid for 90 days after activating Model Studio

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Embedding dimensions**

**Batch size**

**Max tokens per batch**

**Languages supported**

**Unit price**

**(per 1M input tokens)**

**Free quota**

[Note](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

text-embedding-v4

> Part of the [Qwen3-Embedding](https://qwenlm.github.io/zh/blog/qwen3-embedding/) series

> [Batch calls](/help/en/model-studio/batch-interfaces-compatible-with-openai/) at half price

2,048, 1,536, 1,024 (default), 768, 512, 256, 128, or 64

10

8,192

Chinese, English, Spanish, French, Portuguese, Indonesian, Japanese, Korean, German, Russian, and over 100 other major languages, plus multiple programming languages

$0.072

No free quota

## China (Hong Kong)

**Model**

**Embedding dimensions**

**Batch size**

**Max tokens per batch**

**Languages supported**

**Unit price**

**(per 1M input tokens)**

**Free quota**

[Note](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

text-embedding-v4

> Part of the [Qwen3-Embedding](https://qwenlm.github.io/zh/blog/qwen3-embedding/) series

2,048, 1,536, 1,024 (default), 768, 512, 256, 128, or 64

10

8,192

Chinese, English, Spanish, French, Portuguese, Indonesian, Japanese, Korean, German, Russian, and over 100 other major languages, including multiple programming languages

$0.07

1 million tokens

Valid for 90 days after activating Model Studio

**Note**

Batch size is the maximum number of texts that can be processed in one API call. For example, text-embedding-v4 has a batch size of 10, which means you can send up to 10 texts per request, and each text cannot be longer than 8,192 tokens. This limit applies to:

-   String array input: The array can contain at most 10 elements.
    
-   File input: The text file can contain at most 10 lines.
    

## **Multimodal embedding**

Multimodal embedding models convert text, images, or video into floating-point vectors. They support video classification, image classification, and cross-modal retrieval. [API reference](/help/en/model-studio/multimodal-embedding-api-reference)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Data type**

**Embedding dimensions**

**Unit price (per 1M input tokens)**

**Free quota** [(Note)](/help/en/model-studio/new-free-quota#591f3dfedfyzj)

tongyi-embedding-vision-plus

float(32)

1,152

$0.09

1 million tokens

Valid for 90 days after activating Model Studio

tongyi-embedding-vision-flash

float(32)

768

Images or video: $0.03

Text: $0.09

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Data type**

**Embedding dimensions**

**Unit price (per 1M input tokens)**

qwen3-vl-embedding

float32

2560, 2048, 1536, 1024, 768, 512, or 256

Images or video: $0.258

Text: $0.10

multimodal-embedding-v1

1,024

Free trial

## **Reranking**

Given a query and a list of candidate texts (Documents), it ranks the candidates by relevance to the query, from highest to lowest. [API reference](/help/en/model-studio/text-rerank-api)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Max documents**

**Max tokens per line**

**Max input tokens**

**Languages supported**

**Unit price (per 1M input tokens)**

qwen3-rerank

500

4,000

30,000

Chinese, English, Spanish, French, Portuguese, Indonesian, Japanese, Korean, German, Russian, and more than 100 other major languages

$0.1

-   **Max tokens per line**: Each Query or Document may contain up to 4,000 tokens. Inputs that exceed this length are truncated.
    
-   **Max documents**: Up to 500 Documents per request.
    
-   **Max input tokens**: The total number of tokens across all Queries and Documents must not exceed 30,000 per request.
    

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Max documents**

**Max tokens per line**

**Max input tokens**

**Languages supported**

**Unit price (per 1M input tokens)**

qwen3-vl-rerank

100

8,000

120,000

33 languages including Chinese, English, Japanese, Korean, French, and German

Image: $0.258

Text: $0.1

gte-rerank-v2

500

4,000

30,000

Chinese, English, Japanese, Korean, Thai, Spanish, French, Portuguese, German, Indonesian, Arabic, and over 50 languages

$0.115

-   **Max tokens per line**: Each Query or Document may contain up to 4,000 tokens. Inputs that exceed this length are truncated.
    
-   **Max documents**: Up to 500 Documents per request.
    
-   **Max input tokens**: The total number of tokens across all Queries and Documents must not exceed 30,000 per request.
    

## **Domain specific**

### **Intent understanding**

Intent understanding models rapidly and accurately parse user intent in under 100 milliseconds and select appropriate tools to resolve user requests. [API reference](/help/en/model-studio/qwen-api-reference/) | [Usage](/help/en/model-studio/intent-detect-capability)

**Note**

Only the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh) is supported. In this mode, the endpoint and data storage are located in the **Beijing region**, and inference computing resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

tongyi-intent-detect-v3

8,192

8,192

1,024

$0.058

$0.144

### **Role playing**

Qwen role assumption models are designed for anthropomorphic dialog scenarios, such as virtual socializing, game NPCs, IP replication, and hardware, toys, or in-vehicle systems. Compared with other Qwen models, they improve persona fidelity, topic progression, and empathetic listening. [Usage](/help/en/model-studio/role-play)

## International

In the [international deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Singapore region**. Model inference compute resources are dynamically scheduled globally, excluding Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwen-plus-character

32,768

30,000

4,000

$0.5

$1.4

qwen-plus-character-ja

8,192

7,680

512

$0.5

$1.4

## Chinese Mainland

In the [Chinese Mainland deployment mode](/help/en/model-studio/regions/#080da663a75xh), the endpoint and data storage are located in the **Beijing region**. Model inference compute resources are limited to Chinese Mainland.

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**(tokens)**

**(per 1M tokens)**

qwen-plus-character

32,768

32,000

4,096

$0.115

$0.287

## **Retired models**

## Retired on January 30, 2026

**Category**

**Model**

**Context window**

**Max input**

**Max output**

**Input cost (per 1M tokens)**

**Output cost (per 1M tokens)**

**Alternative**

**(tokens)**

Qwen-Plus

qwen-plus-2024-11-27

131,072

129,024

8,192

$0.115

$0.287

qwen-plus-2025-12-01

qwen-plus-2024-11-25

qwen-plus-2024-09-19

qwen-plus-2024-08-06

128,000

$0.574

$1.721

Qwen-Turbo

qwen-turbo-2024-09-19

131,072

129,023

8,192

$0.044

$0.087

qwen-flash-2025-07-28

Qwen-VL

qwen-vl-max-2024-10-30

32,768

30,720

> Max 16,384 per image

2,048

$2.868

$2.868

qwen3-vl-plus-2025-12-19

qwen-vl-max-2024-08-09

qwen-vl-plus-2024-08-09

$0.216

$0.646

qwen3-vl-flash-2025-10-15

## Retired on August 20, 2025

### Qwen2

The Qwen2 open-source model from Alibaba Cloud. [Usage](/help/en/model-studio/text-generation#24e54b27d4agt) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try it online](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt)

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Alternative**

**(tokens)**

**(per 1M tokens)**

qwen2-72b-instruct

131,072

128,000

6,144

Limited-time free

Qwen3, DeepSeek, Kimi, and others

qwen2-57b-a14b-instruct

65,536

63,488

qwen2-7b-instruct

131,072

128,000

### Qwen1.5

The Qwen1.5 open-source model from Alibaba Cloud. [Usage](/help/en/model-studio/text-generation#24e54b27d4agt) | [API reference](/help/en/model-studio/qwen-api-reference/) | [Try it online](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt)

**Model**

**Context window**

**Max input**

**Max output**

**Input cost**

**Output cost**

**Alternative**

**(tokens)**

**(per 1M tokens)**

qwen1.5-110b-chat

8,000

6,000

2,000

Limited-time free

Qwen3, DeepSeek, Kimi, and others

qwen1.5-72b-chat

qwen1.5-32b-chat

qwen1.5-14b-chat

qwen1.5-7b-chat
