A video effect template is a preset for video generation effects. Provide a **first-frame image** and a **template value** to generate a video with a specific dynamic effect, such as "Magic Levitation" or "Squeeze".

**Important**

This document applies only to the China (Beijing) region. To use the model, you must use an [API key](https://bailian.console.alibabacloud.com/?tab=model#/api-key) from the China (Beijing) region.

**Input first-frame image**

![wanx-demo-1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6896834571/p976602.png)

**Output example 1: Use the "Magic Levitation" effect**

> The template is set to "flying"

**Output example 2: Use the "Squeeze" effect**

> The template is set to "squish"

## **Usage**

-   **Scope**: Video effect templates are supported only in [Wan - image-to-video - first frame](/help/en/model-studio/image-to-video-api-reference/) tasks.
    
-   **Method**: In the request body, pass `**template**` to the desired template value, such as "flying". For all available templates, see [Video effect templates](#89f64eb5a812c).
    
-   **Note:** When you use the template parameter, the model ignores the prompt field. Omit this field or leave it empty.
    

## Send a request

The following example shows only the request. For a complete example, see [Image-to-Video API](/help/en/model-studio/image-to-video-api-reference/).

```
curl --location 'https://dashscope.aliyuncs.com/api/v1/services/aigc/video-generation/video-synthesis' \
    -H 'X-DashScope-Async: enable' \
    -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
    "model": "wanx2.1-i2v-turbo",
    "input": {
        "img_url": "https://cdn.translate.alibaba.com/r/wanx-demo-1.png",
        "template": "flying"
    },
    "parameters": {
        "resolution": "720P"
    }
}'
```

## **Video effect templates**

For optimal results, refer to the "Input image suggestions" for each template.

### Model support summary

**Model**

**Supported templates**

**wanx2.1-i2v-plus**

All templates

**wanx2.1-i2v-turbo**

General effects, Carousel, Love You, Single-person or animal effects, Two-person effects

### **General effects**

All general effects support both **wanx2.1-i2v-plus** and **wanx2.1-i2v-turbo**.

These effects work with any entity. For best results, use an image where the entity is prominent and clearly distinguished from the background.

**Effect name**

**template value**

**Example effect**

**Input image suggestions**

Squeeze

**squish**

-   Supports any entity.
    
-   Use an image where the entity is prominent and clearly distinguished from the background.
    

Spin

**rotation**

-   Supports any entity.
    
-   Use an image where the entity is prominent and clearly distinguished from the background.
    

Poke

**poke**

-   Supports any entity.
    
-   Use an image where the entity is prominent and clearly distinguished from the background.
    

Balloon Inflation

**inflate**

-   Supports any entity.
    
-   Use an image where the entity is prominent and clearly distinguished from the background.
    

Molecular Diffusion

**dissolve**

-   Supports any entity.
    
-   Use an image where the entity is prominent and clearly distinguished from the background.
    

### **Single-person effects**

**Effect name**

**template parameter value**

**Example effect**

**Input image suggestions**

Carousel

**carousel**

-   Supports single-person photos.
    
-   Use a half-body to full-body frontal photo.
    

Love You

**singleheart**

-   Supports single-person photos.
    
-   Use a half-body to full-body frontal photo.
    

Swing Time

dance1

-   Supports single-person photos.
    
-   Use a half-body to full-body frontal photo.
    

Swing Dance

**dance2**

-   Supports single-person photos.
    
-   Use a full-body frontal photo.
    

Star Swing

**dance3**

-   Supports single-person photos.
    
-   Use a full-body frontal photo.
    

Mermaid Awakening

**mermaid**

-   Supports single-person photos.
    
-   Use a half-body frontal photo.
    

Academic Coronation

**graduation**

-   Supports single-person photos.
    
-   Use a half-body to full-body frontal photo.
    

Beast Pursuit

**dragon**

-   Supports single-person photos.
    
-   Use a half-body to full-body frontal photo.
    

Money from Heaven

money

-   Supports single-person photos.
    
-   Use a half-body to full-body frontal photo.
    

### **Single-person or animal effects**

All effects in this category support both **wanx2.1-i2v-plus** and **wanx2.1-i2v-turbo**.

These effects work with single-person or animal photos.

**Effect name**

**template value**

**Example effect**

Magic Levitation

**flying**

Rose for You

**rose**

Shining Rose

**crystalrose**

### **Two-person effects**

All effects in this category support both **wanx2.1-i2v-plus** and **wanx2.1-i2v-turbo**.

These effects work with two-person photos. A half-body or full-body photo where both people face the camera or each other is recommended.

**Effect name**

**template value**

**Example effect**

Loving Hug

**hug**

Interdependent

**frenchkiss**

Double Heartbeat

**coupleheart**

## **References**

-   For API parameter descriptions and code examples, see [Image-to-video API](/help/en/model-studio/image-to-video-api-reference/).
