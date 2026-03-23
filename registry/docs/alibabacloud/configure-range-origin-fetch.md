If a request that is redirected from a DCDN point of presence (POP) to the origin server includes the Range header, the origin server returns the content that is specified by the Range header to the DCDN POP. This process is called range origin fetch. Range origin fetch accelerates file distribution, increases cache hit ratios, reduces origin traffic and loads on origin servers, and speeds up site response.

## Background information

The Range header is an HTTP header that specifies the part of content to be retrieved. For example, `Range: bytes=0-100` specifies that the origin server is required to return the first 101 bytes in the requested file.

After you enable the range origin fetch feature, requests for resources that have expired or are not cached on DCDN POPs are redirected to the origin server with the Range header retained. Then, DCDN retrieves the specified chunk of file from the origin server and caches the file chunk on DCDN POPs.

The following figure shows how range origin fetch works:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8341120571/CAEQQBiBgIDcm8uguxkiIGY4NmQzYTU4NWNhYzRjYThiNTA1YTg1ZjkxM2ZiMjQ35268317_20250610154043.642.svg)

## Before you begin

-   Make sure that the origin server supports HTTP range requests, and the origin server can respond to requests with the HTTP 206 status code (partial content message). If the origin server does not support HTTP range requests, resources cannot be cached on POPs after the range origin fetch feature is enabled.
    
-   The Multipart Ranges feature is disabled by default and is not enabled after you enable the range origin fetch feature. To enable the Multipart Ranges feature, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket?spm=a2c4g.11186623.0.0.629c1faeE1XJOx).
    
-   After the range origin fetch feature is enabled, the queries per second (QPS) of origin fetch increase. If the rate limiting feature is enabled on the origin server, requests sent to the origin server could be throttled. To prevent this issue, you can call the [DescribeL2VipsByDomain](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describel2vipsbydomain) operation to query the IP addresses of origin fetch POPs of DCDN and add these IP addresses to the IP address whitelist of the origin server.
    

## Configure range origin fetch

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Origin Fetch**.
    
5.  In the **Range Origin Fetch** section, click **Modify**.
    
6.  Set the **Range Origin Fetch** parameter to **Do Not Enable Range Origin Fetch**, **Match Client**, or **Enable Range Origin Fetch (Recommended for Large File Delivery).**
    
    If you select **Match Client** or **Enable Range Origin Fetch (Recommended for Large File Delivery)**, you can set the **Shard Size** parameter. Default value: **512 KB**.
    
    -   **Range Origin Fetch**
        
        -   ****Do Not Enable Range Origin Fetch****
            
            -   Description
                
                This is the default option. DCDN POPs retrieve the entire file from the origin server, regardless of whether the request carries the Range header. In this case, the file distribution efficiency is lower than expected in large file distribution scenarios.
                
            -   Example
                
                A client sends a request that contains `Range: bytes=0-100` to a DCDN POP. The DCDN POP redirects the request to the origin server without the Range header. The origin server returns the entire file to the DCDN POP. The POP caches the received file and returns the chunk that is specified by `Range: bytes=0-100` to the client.
                
        -   **Match Client**
            
            -   Description
                
                When a client sends a Range request to a POP, the POP forwards the request to the origin server. For the first request for a resource that is redirected to the origin server, DCDN rounds up the value of the Range header to the nearest integer, which is an integer multiple of the shard size in this case. For subsequent requests for the same resource, you can set the size of the Range header to the value of the **Shard Size** parameter.
                
            -   Example
                
                If the **Shard Size** parameter is set to **512 KB**, a client sends a request that contains `Range:bytes=0-614399` (600 KB) to a DCDN POP. The DCDN POP retrieves content that is 1,024 KB (the nearest integer rounded up from 600 KB) in size from the origin server for the first request and retrieves content that is 512 KB in size for subsequent requests.
                
        -   ****Enable Range Origin Fetch (Recommended for Large File Delivery)****
            
            -   Description
                
                POPs redirect client requests to the origin server with the Range header included, regardless of whether the requests contain the Range header. Every range request pulls content in the configured size, which is the value of the **Shard Size** parameter, from the origin server.
                
            -   Example
                
                N/A
                
    -   **Shard Size**
        
        -   Valid values: **512 KB**, **1 MB**, **2 MB**, and **4 MB**.
            
        -   Description: If you set the **Range Origin Fetch** parameter to **On** or **Force**, you can set the **Shard Size** parameter. Default value: **512 KB**.
            
        -   Example: **1 MB**.
            
    -   **Rule Condition**
        
        -   Valid values:
            
            -   **Disable**
                
            -   Select the configured rule conditions in [Rules engine](/help/en/cdn/user-guide/rules-engine).
                
        -   Description:
            
            Rule conditions can identify parameters in a request to determine whether a configuration applies to the request.
            
        -   Example: **Disable**
