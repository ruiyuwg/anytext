After you enable the Gzip compression feature, Dynamic Content Delivery Network (DCDN) points of presence (POPs) use Gzip to compress resources before the resources are returned to clients. The Gzip compression feature reduces file sizes, accelerates file distribution, and reduces bandwidth consumption.

## Background information

-   Both Gzip compression and Brotli compression are supported. For information about Brotli compression, see [Configure Brotli compression](/help/en/edge-security-acceleration/dcdn/user-guide/configure-brotli-compression#task-2569034).
    
-   You can use the Gzip compression or Brotli compression feature to compress the files only if the size of files on the origin server ranges from 1 KB to 10 MB. Files that are smaller than 1 KB or larger than 10 MB are not compressed.
    
-   The Gzip compression feature supports the following formats: text/xml, text/plain, text/css, application/javascript, application/x-javascript, application/rss+xml, text/javascript, image/tiff, image/svg+xml, application/json, and application/xml.
    
-   If a request carries the `Accept-Encoding: gzip` request header, the client wants to use Gzip compression to compress the requested resources.
    
-   If a response from the origin server carries the `Content-Encoding: gzip` response header, the resources returned to the client are Gzip-compressed.
    

## Usage notes

-   The Gzip compression feature is compatible with all browsers. The Brotli compression feature is not compatible with outdated browsers. You can [query](https://caniuse.com) whether a browser supports Brotli compression based on your business requirements.
    
-   When DCDN compresses static files, the MD5 values of the files are changed. If the MD5 verification is enabled for the origin server, disable Gzip compression and Brotli compression features.
    
-   If compression is enabled on the origin server and the response from the origin server contains `Content_Encoding`, compression on POPs does not take effect.
    
-   If both the Gzip compression and Brotli compression features are enabled, and the `Accept-Encoding` request header contains both `br` and `gzip`, only the Brotli compression feature takes effect.
    
-   If both HTML optimization and compression are enabled, HTML optimization does not take effect. DCDN only compresses files.
    
-   Image files in common formats, including PNG, JPG, and JPEG, and video files in common formats, including MP4, AVI, and WMV, are already compressed. Given that Gzip compression and Brotli compression do not take effect for these files, we recommend that you disable the features. If you want to further compress image or video files, you can use the image editing or video transcoding feature. For more information, see [Image editing and its benefits](/help/en/doc-detail/194301.html#concept-2005620) and [Audio and video transcoding](/help/en/mps/product-overview/features#concept-1960458).
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Optimization**.
    
5.  In the **Gzip Compression** section, turn on **Gzip Compression**.
    
    You can compare the format of a file before and after the Gzip compression feature is enabled. If the file name extension is .gzip, the file is compressed.
    
    ![智能压缩](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8541705761/p69831.png)
    

## **FAQ**

[What do I do if Gzip compression fails when a request is routed back to the origin server?](/help/en/cdn/gzip-compression-is-not-normally-enabled-after-the-request-is)

## Related API operations

[BatchSetDcdnDomainConfigs](/help/en/edge-security-acceleration/api-batchsetdcdndomainconfigs#doc-api-dcdn-BatchSetDcdnDomainConfigs): configures features for multiple accelerated domain names, including the **gzip** feature.
