Brotli is a new open source compression algorithm, which has better performance than Gzip. If you enable the Brotli compression feature, Edge Security Acceleration (ESA) points of presence (POPs) return Brotli-compressed files to clients. This reduces the file size, speeds up file transmission, and improves bandwidth utilization.

## Usage notes

-   If the origin server or client does not support compression, the compression rules do not take effect. For more information, see [Compression rules](/help/en/doc-detail/2703173.html#c77a32b7641g2).
    
-   If Gzip compression and Brotli compression are enabled, and the `Accept-Encoding` header contains both `br` and `gzip`, only Brotli compression takes effect.
    
-   When Edge Security Acceleration (ESA) compresses files, the MD5 values of the files are changed. If MD5 verification is enabled for the origin server, disable Gzip compression and Brotli compression.
    
-   If you enable the page optimization feature and the Gzip or Brotli compression feature at the same time, the page optimization feature does not take effect and ESA only compresses files.
    
-   Image files in common formats, including PNG, JPG, and JPEG, and video files in common formats, including MP4, AVI, and WMV, are already compressed. Gzip compression and Brotli compression do not take effect for these files. In this case, we recommend that you disable Gzip compression and Brotli compression. If you want to reduce the size of image files, you can use the image editing feature. For more information, see [Overview](/help/en/cdn/user-guide/image-editing-overview#concept-2534200). If you want to reduce the size of video files, you can use the video transcoding feature. For more information, see [Functions and features](/help/en/mps/product-overview/features#concept-1960458).
    
-   Brotli can compress files in the following formats: text/xml, text/plain, text/css, application/javascript, application/x-javascript, application/rss+xml, text/javascript, image/tiff, image/svg+xml, application/json, and application/xml.
    
-   Brotli is not compatible with all browsers. Before you enable the Brotli compression feature, you must check [whether your browser is compatible with Brotli](https://caniuse.com).
    

## **Create** a **Brotli compression rule**

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list).
    
2.  In the left-side navigation pane, click **Websites**.
    
3.  On the **Websites** page, find the website that you want to manage, and click the website name or **View Details** in the **Actions** column.
    
4.  In the left-side navigation tree, choose **Rules** > **Compression Rules**.
    
5.  Click **Create Rule** and enter a rule name in the **Rule Name** field.
    
6.  Specify a custom filter expression that you want to use to match user requests, and turn on the **Brotli Compression** switch.
    
7.  Click **OK**.
