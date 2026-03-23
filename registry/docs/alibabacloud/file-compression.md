ESA compresses static resources to reduce data transfer sizes and improve page load speeds.

## **Introduction**

ESA provides three compression methods: **Gzip**, **Brotli**, and **Zstd**. They differ in compression efficiency, decompression speed, and compatibility, making them suitable for different scenarios.

**Compression type**

**Compression efficiency**

**Compatibility**

**Use case**

**Gzip**

Fast compression, medium decompression speed

High

General web services

**Brotli**

Slow compression, high decompression speed

Medium

Static resource optimization

**Zstd**

Very fast compression, very fast decompression

Low

Real-time stream data processing

**Note**

The Entrance plan only supports Zstd compression.

## Notes

-   If you enable Gzip, Brotli, and Zstd at the same time, they are applied in the following order: Zstd > Brotli > Gzip.
    
-   ESA supports compression for the following file types: `text/xml`, `text/plain`, `text/css`, `application/javascript`, `application/x-javascript`, `application/rss+xml`, `text/javascript`, `image/tiff`, `image/svg+xml`, `application/json`, and `application/xml`.
    

## Cases where compression rules do not take effect

Compression rules are not applied in certain cases because of conflicting settings on the origin server or client.

### For origin server

-   Gzip or Brotli compression is applied only to files from the origin server that are between 1 KB and 10 MB. Files outside this size range are not compressed.
    
-   If the response from the origin server includes the `Content-Encoding` header, ESA does not apply compression.
    
-   If the response from the origin server contains the `cache-control: no-transform` HTTP header, ESA does not apply compression.
    

### For client

If a client does not support the configured compression algorithm, the response is not compressed. Client support is indicated by the `Accept-Encoding` request header.

**Note**

File compression rules apply only to requests that match the specified rule conditions. For more information about how to configure site-level compression rules, see [Gzip](/help/en/edge-security-acceleration/esa/user-guide/content-compression#497752e4cdvzn), [Brotli](/help/en/edge-security-acceleration/esa/user-guide/content-compression#b8f3369154nph), and [Zstd](/help/en/edge-security-acceleration/esa/user-guide/content-compression#c9283b6935aic).

## **Add a file compression rule**

1.  In the ESA console, select [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, select **Rules** > **Content Optimization**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, set the conditions that the request must match. For more information about how to configure rules, see [Components of a rule expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Then execute...** section, enable the required compression method.
    
    **Rule item**
    
    **Description**
    
    **Rule Name**
    
    A custom rule name. It can contain Chinese characters, letters (case-sensitive), digits (0-9), and underscores (`_`). The name can be up to 64 characters long.
    
    **Matching conditions**
    
    Set the request features that the rule must match.
    
    Click the logical operator **And** or **Or** to add a condition. You can add up to five conditions to a rule.
    
    Each condition consists of a **Matching field**, a **Logical operator**, and a **Matching content**.
    
    **Compression method**
    
    You can choose to enable only **Gzip**, **Brotli**, or **Zstd**. If you enable all three compression methods, **Zstd** has the highest priority, followed by **Brotli**.
    

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
