Edge Security Acceleration (ESA) supports image optimization rules, which apply to requests that match the specified filter conditions. You can convert image formats and quality, crop, resize, and cache images from the origin server. This accelerates image retrieval and reduces origin traffic.

**Note**

If you want to configure website-level image optimization rules, see [Image transformations](/help/en/edge-security-acceleration/esa/user-guide/image-conversion-overview).

## Scenarios

ESA enables images to be transformed and cached on ESA POPs, without affecting the running of the origin server.

**E-commerce platforms**

-   Provides abundant image processing styles to meet different image display requirements on multiple devices, and enables efficient and simplified image editing.
    
-   Allows compression of product images and image comments to reduce image sizes, further lowering traffic costs.
    
-   Supports brands as watermarks to protect copyrights and promote products.
    

**Social media**

-   Easily and flexibly converts your images into standard formats that you can post on social media.
    
-   Supports watermarks to prevent image theft.
    

**Online education**

-   Edits images for online education based on user requirements.
    
-   Allows you to choose the type of compression that you want to enable based on business requirements. This helps you balance compression with image quality.
    

**Design resource websites**

-   Provides abundant image processing styles to meet different image display requirements on multiple devices, and enables efficient and simplified image editing.
    
-   Compresses images without compromising the image quality to accelerate image delivery. This allows websites to provide high-resolution images.
    

## **Before you begin**

Before you use image transformations, take note of the following items:

**Limitations on source images:**

-   Supported image formats: JPEG, JPG, PNG, WebP, BMP, GIF, TIFF, and JPEG 2000.
    
-   The size of a source image cannot exceed 10 MB.
    
-   The total number of pixels of a source image cannot exceed 16,777,216.
    
    **Note**
    
    If a source image is a GIF image, the total number of pixels is the sum of all frames. You can use tools such as ImageMagick to query the frame information of a GIF image.
    

**Limitations on processed images:**

-   The total number of pixels of a transformed image cannot exceed 16,777,216.
    
-   If you want to convert a transformed image to the WebP format, the total pixels of the image cannot exceed 16,777,216 pixels. The width or height cannot exceed 16,384 pixels. If a source image is a dynamic image, a static image is generated when you convert the source image to the WebP format.
    

## **Create an optimization rule**

1.  In the ESA console, choose [Websites](https://esa.console.alibabacloud.com/siteManage/list) and click the website name you want to manage.
    
2.  In the left-side navigation pane, choose **Rules** > **Content Optimization Rules**.
    
3.  On the **Content Optimization** page, click the **Image Optimization** tab. Click **Create Rule**, and fill in the **Rule Name**.
    
4.  In the **If Requests Match...** area, specify the conditions for matching incoming requests. For more information about how to configure a rule, see [Rules](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/).
    
5.  Turn on **Image Transformations**. For more information, see [Match conditions](/help/en/edge-security-acceleration/dcdn/user-guide/match-conditions#concept-2200026).
    
    -   **Rule Name**
        
        Enter the name of the rule. It can be up to 64 characters in length, and can contain letters, digits, and underscores (`_`).
        
    -   **Match Condition**
        
        -   Specify the request characteristics for matching.
            
        -   Click the logical operator to add conditions. You can add up to five conditions.
            
        -   Each condition consists of a match field, logical operator, and match value.
            

## Image editing methods

The following part describes the image editing parameters that are supported by ESA.

-   [Convert image formats](/help/en/edge-security-acceleration/esa/user-guide/format-conversion)
    
    Parameter: format
    
    Description: Converts images into specified formats.
    
-   [Adjust image quality](/help/en/edge-security-acceleration/esa/user-guide/quality-conversion)
    
    Parameter: quality
    
    Description: Adjusts the quality of images.
    
-   [Crop images](/help/en/edge-security-acceleration/esa/user-guide/picture-clipping)
    
    Parameter: crop
    
    Description: Crops images.
    
-   [Resize images](/help/en/edge-security-acceleration/esa/user-guide/picture-zoom)
    
    Parameter: resize
    
    Description: Resizes images. The feature only supports decreasing the size of images.
    
-   [Rotate images](/help/en/edge-security-acceleration/esa/user-guide/picture-rotation)
    
    Parameter:
    
    -   auto-orient: automatically rotates images.
        
    -   rotate: rotates images to specific orientations.
        
    
    Description: Rotates images based on the orientation parameter, or rotates images clockwise based on the angle that you specify.
    
-   [Change the color of images](/help/en/edge-security-acceleration/esa/user-guide/picture-color)
    
    Parameter:
    
    -   bright: the brightness of images.
        
    -   contrast: the contrast of images.
        
    -   sharpen: the sharpness of images.
        
    
    Description: Adjusts the brightness, contrast, and sharpness of images.
    
-   [Add watermarks](/help/en/edge-security-acceleration/esa/user-guide/add-watermark)
    
    Parameter: watermark
    
    Description: Adds picture or text watermarks to images.
    
-   [Query image information](/help/en/edge-security-acceleration/esa/user-guide/get-information)
    
    Parameter: info
    
    Description: Queries image information, including the width, height, format, and quality.
