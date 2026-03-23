The HTML optimization feature allows Dynamic Content Delivery Network (DCDN) to automatically remove redundant content from web pages, such as comments and additional whitespace characters in HTML pages, CSS code, and JavaScript code. This reduces file sizes, accelerates content delivery, and improves website readability.

## Usage notes

-   If MD5 verification is configured for files on the origin server, do not enable HTML optimization.
    
    The HTML optimization feature changes the MD5 value of a file. After the file is optimized, the MD5 value of the file is no longer the same as that of the original file that is stored on the origin server.
    
-   If the origin server has Gzip or Brotli compression enabled, HTML optimization does not take effect. DCDN directly returns compressed files to clients.
    
-   If both HTML optimization and compression are enabled, HTML optimization does not take effect. DCDN only compresses files.
    
-   In some special cases, if you enable the HTML optimization feature to rewrite HTML files, CSS files, and JavaScript files on the webpages, the business logic of the website may be affected, and an error message similar to the following one may be returned when a client accesses the rewritten webpages: `Hydration completed but contains mismatches.` To fix the error, disable HTML optimization.
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Optimization**.
    
5.  In the **HTML Beautifier** section, turn on **HTML Optimization**, **CSS Optimization**, or **JavaScript Optimization**.
    
    **Note**
    
    The HTML Optimization switch controls only HTML optimization. If you want to enable CSS or JavaScript optimization, you need to first turn on HTML Optimization, and then turn on CSS Optimization or JavaScript Optimization.
    
    ![页面优化](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7176717161/p69832.png)
    
    -   Turn on **HTML Optimization**: Alibaba Cloud CDN optimizes HTML pages.
        
    -   Turn on **CSS Optimization**: Alibaba Cloud CDN optimizes CSS styling.
        
    -   Turn on **JavaScript Optimization**: Alibaba Cloud CDN optimizes JavaScript code.
        
    

## Related API operations

[BatchSetDcdnDomainConfigs](/help/en/edge-security-acceleration/api-batchsetdcdndomainconfigs#doc-api-dcdn-BatchSetDcdnDomainConfigs)
