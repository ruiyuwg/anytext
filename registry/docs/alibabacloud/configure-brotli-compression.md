Brotli is a new open source compression algorithm, which has better performance than the Gzip compression. After you enable the Brotli compression, points of presence (POPs) compress resources before the resources are returned to clients. This reduces file sizes, accelerates file distribution, and reduces bandwidth consumption.

## Background information

-   Compression can be implemented by using Gzip or Brotli. Intelligent compression uses Gzip to compress files. For more information about intelligent compression, see [Configure Gzip compression](/help/en/cdn/user-guide/use-the-gzip-compression-feature#task-187634).
    
-   If the size of files on the origin server ranges from 1 KB to 10 MB, you can use the intelligent compression or Brotli compression feature to compress the files. Files that are smaller than 1 KB or larger than 10 MB are not compressed.
    
-   Brotli compression supports the following formats: text/xml, text/plain, text/css, application/javascript, application/x-javascript, application/rss+xml, text/javascript, image/tiff, image/svg+xml, application/json, and application/xml.
    
-   If a response from the origin server includes the `Content-Encoding: br` response header, the resources returned to the client are Brotli-compressed.
    
-   If a request includes the `Accept-Encoding: br` request header, the client expects the requested resources to be Brotli-compressed.
    

## Usage notes

-   When DCDN compresses static files, the MD5 values of the files are changed. If the origin server has MD5 verification enabled, disable intelligent compression or Brotli compression.
    
-   If compression is enabled on the origin server and the response from the origin server carries `content_encoding`, compression on POPs does not take effect.
    
-   If both Brotli compression and intelligent compression are enabled, and the `Accept-Encoding` request header includes both `br` and `gzip`, only Brotli compression takes effect.
    
-   If both HTML optimization and Intelligent or Brotli compression are enabled, HTML optimization does not take effect. DCDN only compresses files.
    
-   Brotli is not compatible with all browsers. You can [query](https://caniuse.com) whether a browser is compatible with Brotli as needed.
    
-   Common types of image files such as PNG, JPG, and JPEG and video files such as MP4, AVI, and WMV are already compressed. Intelligent compression and Brotli compression do not take effect for these files. We recommend that you disable compression. If you want to reduce the size of image files, you can use the image editing feature. For more information, see [Image editing and its benefits](/help/en/doc-detail/194301.html#concept-2005620). If you want to reduce the size of video files, you can use the video transcoding feature. For more information, see [Audio and video transcoding](/help/en/mps/product-overview/features#concept-1960458). Both image editing and video transcoding reduce image resolution.
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
2.  In the left-side navigation pane, click **Domain Names**.
3.  On the **Domain Names** page, find the domain name that you want to manage, and click **Configure** in the Actions column.
4.  In the left-side navigation pane of the specified domain name, click **Optimization**.
    
5.  In the **Brotli Compression** section, turn on **Brotli Compression**.
    
    After you enable Brotli compression, you can compare the file types before and after the file is compressed. If the file name extension is .br, the file is compressed.![开启](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2400165461/p365163.png)
    

## Related API operations

[BatchSetDcdnDomainConfigs](/help/en/edge-security-acceleration/api-batchsetdcdndomainconfigs#doc-api-dcdn-BatchSetDcdnDomainConfigs)
