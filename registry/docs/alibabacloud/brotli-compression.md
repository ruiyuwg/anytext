Brotli is a new open source compression algorithm, which has better performance than Gzip. After you enable the Brotli compression, points of presence (POPs) compress resources before the resources are returned to clients. This reduces file sizes, accelerates file distribution, and reduces bandwidth consumption.

## **Usage notes**

-   Gzip or Brotli can compress only files whose size ranges from 1 KB to 10 KB. For files whose size falls outside the range, Gzip or Brotli cannot be used.
    
-   Gzip or Brotli can compress files in the following formats: text/xml, text/plain, text/css, application/javascript, application/x-javascript, application/rss+xml, text/javascript, image/tiff, image/svg+xml, application/json, and application/xml.
    
-   You can use Brotli to compress only content whose client request headers carry the `Accept-Encoding: br` field.
    
-   You cannot use Brotli to compress content whose response headers returned by the origin server carry the `Content-Encoding:` field.
    
-   If you enable the Gzip compression feature and the Brotli compression feature at the same time, the Brotli compression feature takes precedence over the Gzip compression feature.
    

## **Enable** Brotli **compression**

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list).
    
2.  In the left-side navigation pane, click **Websites**.
    
3.  On the **Websites** page, find the website that you want to manage, and click the website name or **View Details** in the **Actions** column.
    
4.  In the left-side navigation tree, click **Speed and Network**, and choose the **Speed Optimization** tab.
    
5.  Turn on the Brotli switch.
