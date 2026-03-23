Byte-range segments allow Edge Security Acceleration (ESA) points of presence (POPs) to include Range information in back-to-origin HTTP requests. When an origin server receives such a request, it returns only the specified byte range of content to the ESA POP. Byte-range segments improve file distribution efficiency, increase the cache hit ratio, reduce back-to-origin traffic and the load on the origin server, and accelerate resource responses.

## How it works

Range is an HTTP request header that specifies the byte range of content to retrieve. For example, `Range: bytes=0-100` tells the origin server to return the first 101 bytes of the requested file.

After you enable byte-range segments, when ESA receives a client request for a resource that is not cached or has expired on the ESA POP, the ESA POP fetches only the required segment of the resource from the origin server using a Range request. It then caches that segment on the ESA POP.

The following diagram shows how byte-range segments work:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2670870771/CAEQUxiBgICfl6.a4hkiIGQ1MmVlZTQ2OTNiNjQ4YTBiNmVmMTczYmI0NWM5N2Ni4809541_20241210135920.932.svg)

## Prerequisites

Before you enable byte-range segments, ensure that your origin server supports Range requests. The origin server must accept HTTP requests that contain a Range header and respond with the HTTP 206 status code. If your origin server does not support Range requests, enabling this feature prevents resources from being cached.

## Notes

If a client accesses a dynamic resource, Range requests are not processed for that resource during origin fetch. A resource is considered dynamic if its file extension is not in the default cache file list of the ESA POP, no explicit cache policy is configured for the resource on the ESA POP, and the cache status in the ESA POP's response is DYNAMIC.

The segment size affects the overall cache hit ratio and download speed for uncached resources. You should set the segment size based on your use case. Consider the following two scenarios:

-   If ESA POPs and origin servers have good back-to-origin network performance, such as low network latency, we recommend that you use a smaller Range request segment size to ensure a higher back-to-origin download rate and improve the cache hit ratio.
    
-   If the origin fetch network performance between ESA POPs and origin servers is moderate, such as in cross-border or intercontinental back-to-origin scenarios with high network latency, you should use a larger Range request size. Although this approach may not achieve the optimal cache hit ratio, it ensures a higher back-to-origin download rate.
    
-   Enabling the Range requests feature increases the queries per second (QPS) of origin fetches. This may trigger traffic limits if your origin server has rate limiting enabled. To prevent this issue, you can enable the [origin protection](/help/en/edge-security-acceleration/esa/user-guide/origin-protection) feature for ESA and add the IP addresses of the ESA origin-fetch POPs to the IP address whitelist on your origin server.
    

## Procedure

1.  In the ESA console, go to [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the name of the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Origin Rules**.
    
3.  Click **Create Rule** and specify the **Rule Name**.
    
4.  In the **If requests match...** section, configure the matching conditions for client requests. For more information, see [Structure of rule expressions](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Range Requests** section, click **Configure**. Then choose one of the following options:  
    — **Match Client (Default)**— **Disable**  
    — **Enable (Recommended If Large Files Requested)**
    
    When you select **Match Client (Default)** or **Enable (Recommended If Large Files Requested)** , you can set the segment size to 512 KB, 1 MB, 2 MB, or 4 MB. The default segment size is 512 KB.
    
    **Parameter Name**
    
    **Options**
    
    **Description**
    
    **Example**
    
    **Origin Mode**
    
    **Match Client (Default)**
    
    The default option is **Match Client (Default)**. When a client sends a Range request to an ESA POP, the POP then performs a Range-based origin fetch. For its first origin-fetch request, the ESA POP rounds up the Range size from the client request and then sends a request to your origin server (The size is rounded up to the nearest integer multiple of the shard size). Subsequent origin-fetch requests are sent to your origin server based on the shard size specified in the "Shard Size" parameter.
    
    For example, when the shard size is 512 KB, if a client sends a request containing `Range:bytes=0-614399` (i.e., 600 KB) to an ESA POP and no cache file exists on the ESA POP, the first origin request retrieves data in 1024 KB shards (600 KB is rounded up to 1024 KB). For subsequent client requests for other uncached shards of this file, the ESA POP retrieves data from the origin server in 512 KB shards.
    
    **Disable**
    
    If you enable **Disable**, regardless of whether a client sends a Range request to an ESA POP, the ESA POP requests the entire file during an origin fetch, which reduces file distribution efficiency in large file scenarios.
    
    For example, if a client sends a request containing `Range:bytes=0-100` to an ESA POP, the ESA POP does not include the Range parameter in its request to the origin server. The origin server responds to the ESA POP with the complete file (assuming the complete file is 10 MB, the origin server sends a 10 MB file to the ESA POP). After receiving the file from the origin server, the ESA POP caches the file and responds to the client with the content specified in the `range:0-100` request.
    
    **Enable (Recommended If Large Files Requested)**
    
    **Enable (Recommended If Large Files Requested)**After you enable this setting, ESA POPs use Range requests to fetch from the origin server regardless of whether the client sends Range requests.ESA POPs always use Range requests to fetch from the origin server.ESA POPs send all origin-fetch Range requests to the origin server using the shard size configured in the ESA shard size parameter.
    
    None
    
    **Shard Size**
    
    -   512 KB
        
    -   1 MB
        
    -   2 MB
        
    -   4 MB
        
    
    You can set the segment size only when the back-to-origin mode is **Match Client (Default)** or **Enable (Recommended If Large Files Requested)**. The default is 512 KB.
    
    1 MB
    
6.  Click **OK** .
    

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
