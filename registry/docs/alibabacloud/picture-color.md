If chromatic aberration or image blur caused by improper camera settings or device incompatibility occurs, you can adjust the brightness, contrast, or sharpness of base images on ESA points of presence (POPs) to improve image resolution and visual effects.

### Parameters

image\_process=sharpen, bright, or contrast

**Parameter**

**Description**

**Valid value**

bright

The brightness of the image.

\[-100, 100\]

-   A value smaller than 0 decreases the brightness of the image.
    
-   A value of 0 does not change the brightness of the image.
    
-   A value greater than 0 increases the brightness of the image.
    

contrast

The contrast of the image.

\[-100,100\]

-   A value smaller than 0 decreases the contrast.
    
-   A value of 0 does not change the contrast.
    
-   A value greater than 0 increases the contrast.
    

sharpen

The sharpness of the image.

\[50,399\]

A greater value specifies a clearer image. However, an excessively large value may result in image artifacts. We recommend that you use the following values: 50, 100, 150, 200, 250, and 300.

### **Examples**

-   If you want to sharpen an image and set the sharpen parameter to 100, the request URL is `http(s)://example.com/image01.png?image_process=sharpen,100`.
    
-   If you want to increase the brightness of an image by 50 degrees, the request URL is: `http(s)://example.com/image01.png?image_process=bright,50`.
    
-   If you want to reduce the contrast of an image by 50 degrees, the request URL is `http(s)://example.com/image01.png?image_process=contrast,50`.
