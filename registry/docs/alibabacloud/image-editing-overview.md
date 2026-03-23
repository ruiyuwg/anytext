You may need to resize, crop, rotate, or compress images from content sharing websites. However, initiating an origin request for each image processing task can substantially increase the number of origin requests and the cache size on POPs. Alibaba Cloud CDN provides the image editing feature, which allows you to edit images and cache the edited images on POPs. This accelerates content delivery, reduces loads on origin servers, and lowers origin traffic.

**Note**

-   The image editing feature of Alibaba Cloud CDN, the image editing feature of DCDN, and the Image Processing (IMG) feature of Object Storage Service (OSS) are three different features.
    
-   Image editing is free of charge until further notice.
    
-   When you use the image editing feature, conversion between different image formats, such as JPEG to WebP, JPEG to PNG, and PNG to WebP, may result in larger image sizes. This is because different image formats use different compression algorithms. If you want to reduce image sizes, we recommend that you configure the `quality` parameter to reduce the image quality.
    

## Use cases

After you enable image editing, images are edited and cached on POPs. This reduces loads on origin servers.

The following table describes some common use cases.

**Use cases**

**Description**

E-commerce platforms

-   Provides abundant image processing styles to meet different image display requirements on multiple devices, and enables efficient and simplified image editing.
    
-   Allows compression of product images and image comments to reduce image sizes, which further reduces traffic costs.
    
-   Supports brands as watermarks to protect copyrights and promote products.
    

Social media

-   Allows you to easily and flexibly convert your images into standard formats that you can post on social media.
    
-   Supports watermarks to prevent image theft.
    

Online education

-   Edits images for online education based on user requirements.
    
-   Allows you to apply compression features as needed to balance the compression costs and image quality.
    

Design resource websites

-   Provides abundant image processing styles to meet different image display requirements on multiple devices, and enables efficient and simplified image editing.
    
-   Allows you to compress images without compromising the image quality to accelerate image delivery. This allows websites to provide high-resolution images.
    

## Benefits

Image editing provides the following benefits:

-   Accelerated delivery
    
    After source images are cached on POPs, client requests for images of different sizes can be directly handled on the POPs and edited images are returned from the POPs to the clients. This reduces unnecessary trips to the origin server and ensures faster response times.
    
-   Reduced loads on origin servers
    
    Image editing on the origin server consumes a large number of storage and computing resources, which increases the maintenance costs of the origin server. Alibaba Cloud CDN supports image processing and caching on POPs, which alleviates strain on the origin server.
    
-   Improved purge and prefetch efficiency
    
    If a source image expires, all images that are edited based on the source image also become unavailable. To address this issue, images are edited and cached on POPs. This solution reduces the necessity of frequent purge and prefetch tasks and the amount of bandwidth resources consumed by origin requests. Also, edited images cached on POPs ensure higher availability, mitigating the impact of source image expiration on content delivery.
    
-   Custom image editing on POPs
    
    You can specify image editing parameters to edit images to adapt to different browsers and clients.
    

## Notes

Before you use image editing, take note of the following items:

-   Source images
    
    -   You can use this feature to edit only images in the following formats: JPEG, JPG, PNG, WebP, BMP, GIF, TIFF, and JPEG 2000.
        
    -   The size of a source image cannot exceed 10 MB.
        
    -   The total number of pixels of a source image cannot exceed 16,777,216.
        
        **Note**
        
        For a GIF image, the total number of pixels is the sum of all frames. You can use tools such as ImageMagick to query the frame information about a GIF image.
        
-   Edited images
    
    -   The total number of pixels of an edited image cannot exceed 16,777,216.
        
    -   If you want to convert an image into the WebP format, the total number of pixels of the image cannot exceed 16,777,216, and neither the width nor the height can exceed 16,384 pixels. If a source image is a dynamic image, a static image is generated when you convert the source image to the WebP format.
        

## Enable and use image editing

For information, see [Enable and use image editing](/help/en/cdn/user-guide/image-processing-operation-method#task-2061324).
