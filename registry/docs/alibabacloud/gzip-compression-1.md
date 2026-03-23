If you enable the Gzip compression feature, Edge Security Acceleration (ESA) points of presence (POPs) return Gzip-compressed files to clients. This reduces the file size, speeds up file transmission, and improves bandwidth utilization.

## Usage notes

-   Gzip or Brotli can compress only files whose size ranges from 1 KB to 10 KB. For files whose size falls outside the range, Gzip or Brotli cannot be used.
    
-   Gzip or Brotli can compress files in the following formats: text/xml, text/plain, text/css, application/javascript, application/x-javascript, application/rss+xml, text/javascript, image/tiff, image/svg+xml, application/json, and application/xml.
    
-   The Gzip compression feature takes effect on only responses whose client requests carry the `Accept-Encoding: gzip` header.
    
-   For origin responses that carry the `Content-Encoding: gzip` header, no secondary compression is performed.
    
-   If you enable the Gzip compression feature and the Brotli compression feature at the same time, the Brotli compression feature takes precedence over the Gzip compression feature.
    

## **Enable Gzip compression**

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list).
    
2.  In the left-side navigation pane, click **Websites**.
    
3.  On the **Websites** page, find the website that you want to manage, and click the website name or **View Details** in the **Actions** column.
    
4.  In the left-side navigation tree, click **Speed and Network**, and choose the **Speed Optimization** tab.
    
5.  Turn on the Gzip switch.
