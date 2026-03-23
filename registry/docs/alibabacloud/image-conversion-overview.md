Edge Security Acceleration (ESA) provides image transformation features. It transforms the format or quality of origin images, crops and scales them, and caches the results. This improves image delivery speed and reduces back-to-origin traffic.

## **Limits**

The following limits apply when using image processing features.

**Original image limits:**

-   Supported image formats include JPEG, JPG, PNG, WebP, BMP, GIF, TIFF, and JPEG 2000.
    
-   The original image size must not exceed **10 MB**.
    
-   The product of width × height must not exceed 16,777,216 pixels.
    
    **Note**
    
    For GIF images, the total width × height is the sum across all frames. You can use tools such as ImageMagick to view frame details of a GIF image.
    

**Transformed image limits:**

-   The product of width × height must not exceed 16,777,216 pixels.
    
-   When converting to WebP format, the product of width × height must not exceed 16,777,216 pixels, and neither width nor height may exceed 16,384 pixels individually. If the source image is animated, it becomes a static image after conversion to WebP.
    

**Cache prefetching limits:**

The image transformations feature does not apply to cache-prefetched content. During cache prefetch, ESA nodes only origin fetch the original image files and do not perform image transformations.

## **Enable image transformation**

1.  In the ESA console, go to [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click your target site.
    
2.  In the navigation pane on the left, choose **Speed and Network** > **Optimize**.
    
3.  Go to the **Speed Optimization** tab. Turn on the **Image Transformations** toggle. Then, add image processing parameters to your request URL to apply different image transformations.
    
    For example, in JavaScript, you can write a URL-handling function to convert an image to another format.
    
    ```
    function updateImageUrl(format) {
      let baseUrl = "https://example.com/image_01";
      let newUrl = `${baseUrl}.png?image_process=format,${format}`;
      document.getElementById('imageElement').src = newUrl;
    }
    
    // Example call to convert to BMP format
    updateImageUrl("bmp");
    
    // To convert to another format, such as JPG:
    // updateImageUrl("jpg");
    ```
    
    In the code above, `image_process=format,${format}` specifies the image transformation parameter. For more supported parameters and their valid values, see [Supported image processing methods](#57190e6859mvf).
    

## **Transformation validation**

### **Original request**

Request `example.com/bb.jpeg`. The response returns a normally oriented image in `.jpeg` format.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1573736671/p1034464.png)

### **Transformed request**

-   **Format conversion:** To convert a `.jpeg` image to `.png`, change the request URL to `example.com/bb.jpeg?image_process=format,png`. The response returns a `.png` image.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1573736671/p1034468.png)
    
-   **Image rotation:** To rotate the image 90° clockwise, change the request URL to `example.com/bb.jpeg?image_process=rotate,90`. The response returns the image rotated 90° clockwise.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1573736671/p1034471.png)
    

## **Supported image processing methods**

ESA supports applying one or more transformation parameters to an image. Supported parameters are listed in the table below.

**Image processing feature**

**Processing parameter**

**Description**

[Format conversion](/help/en/edge-security-acceleration/esa/user-guide/format-conversion)

format

Convert the image format.

[Quality conversion](/help/en/edge-security-acceleration/esa/user-guide/quality-conversion)

quality

Adjust image quality.

[Image cropping](/help/en/edge-security-acceleration/esa/user-guide/picture-clipping)

crop

Crop the image to a specified size.

[Image scaling](/help/en/edge-security-acceleration/esa/user-guide/picture-zoom)

resize

Scale the image to a specified size. Currently, only downscaling is supported; upscaling is not available.

[Image rotation](/help/en/edge-security-acceleration/esa/user-guide/picture-rotation)

-   Automatic rotation: auto-orient
    
-   Specified rotation: rotate
    

Automatically rotate the image based on its metadata, or rotate it clockwise by a specified angle.

[Image color](/help/en/edge-security-acceleration/esa/user-guide/picture-color)

-   Brightness: bright
    
-   Contrast: contrast
    
-   Sharpening: sharpen
    

Adjust image brightness, contrast, and definition.

[Add watermark](/help/en/edge-security-acceleration/esa/user-guide/add-watermark)

watermark

Add an image or text watermark to the picture.

[Get info](/help/en/edge-security-acceleration/esa/user-guide/get-information)

info

Retrieve image information, including dimensions, format, and quality.

## **Relationship between site-wide and rule-based features**

Configurations added under site-wide features apply to all requests for that site. If you want to enable this feature only for specific requests, use rule-based configurations. Define rule conditions to detect specific parameters in user requests so the configuration applies only to matching requests. The rule-based counterpart of the site-wide image transformation feature is [Image Optimization](/help/en/edge-security-acceleration/esa/user-guide/image-optimization).
