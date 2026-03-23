A low Content Delivery Network (CDN) cache hit ratio increases the workload on your origin server and reduces the access speed for static resources. You can select an optimization policy based on the cause of the low cache hit ratio to improve it.

## Background information

CDN accelerates resource access by caching static resources on points of presence (POPs). When a client requests a resource that is cached on a POP, the request hits the cache. The resource is then retrieved directly from the cache and returned to the client. This prevents requests from being redirected to the origin server, which improves response speeds and reduces the bandwidth pressure on the origin server. A low CDN cache hit ratio negatively affects the user experience and increases the bandwidth pressure on the origin server.

CDN byte hit ratio:

-   Byte hit ratio = (Traffic served by L1 POPs – Back-to-origin traffic served by L1 POPs) / Traffic served by L1 POPs
    
    **Note**
    
    A lower byte hit ratio indicates higher back-to-origin traffic, which increases the outbound traffic, bandwidth consumption, and workload on the origin server. Therefore, back-to-origin traffic represents the workload on the origin server. In most cases, you should focus on the byte hit ratio.
    

-   Request hit ratio = Number of requests that hit the CDN cache / Total number of requests to CDN
    
    **Important**
    
    If range origin fetch is enabled, we recommend that you use the byte hit ratio as the metric for the hit rate.
    

## View the cache hit ratio of CDN

### **Method 1: View the cache hit ratio in the console**

The cache hit ratio provided in the CDN console is the byte hit ratio. You can view the cache hit ratio using the following methods:

-   Query data using the Resource Monitoring feature
    
    You can query data over a long period. This feature is suitable for viewing the hit rate over a long period, such as 30 days. If the time granularity is 5 minutes, the data latency is about 15 minutes. For more information, see [Resource Monitoring](/help/en/cdn/user-guide/resource-monitoring#task-261642).![命中率](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2829645071/p278844.png)
    
-   Query data using the real-time monitoring feature
    
    You can query data over a short period. This feature is suitable for viewing the real-time hit ratio over a short period, such as one hour. If the time granularity is 1 minute, the data latency is about 3 minutes. For more information, see [Real-time monitoring](/help/en/cdn/user-guide/real-time-monitoring#task-2036744).![质量监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2829645071/p63526.png)
    

### **Method 2: Call an API operation**

-   API operations for the Resource Monitoring feature
    
    **API**
    
    **Description**
    
    [DescribeDomainHitRateData](/help/en/cdn/api-describedomainhitratedata#doc-api-Cdn-DescribeDomainHitRateData)
    
    Queries the byte hit ratio of an accelerated domain name. You can query data in the last 90 days.
    
    [DescribeDomainReqHitRateData](/help/en/cdn/api-describedomainreqhitratedata#doc-api-Cdn-DescribeDomainReqHitRateData)
    
    Queries the request hit ratio of an accelerated domain name. You can query data in the last 90 days.
    
-   API operations for the real-time monitoring feature
    
    **API**
    
    **Description**
    
    [DescribeDomainRealTimeByteHitRateData](/help/en/cdn/api-describedomainrealtimebytehitratedata#doc-api-Cdn-DescribeDomainRealTimeByteHitRateData)
    
    Queries the byte hit ratio of an accelerated domain name at a 1-minute granularity. You can query data in the last 7 days.
    
    [DescribeDomainRealTimeReqHitRateData](/help/en/cdn/api-describedomainrealtimereqhitratedata#doc-api-Cdn-DescribeDomainRealTimeReqHitRateData)
    
    Queries the request hit ratio of an accelerated domain name at a 1-minute granularity. You can query data in the last 7 days.
    

## Improve the cache hit ratio of CDN

The following table describes the factors that affect the CDN cache hit ratio and the methods to improve it.

**Policy**

**Factors and scenarios**

**Configuration method**

Prefetch popular resources before peak hours

Factor: If you do not prefetch resources to POPs before you launch a large-scale operational activity or release a new installation package, many resources must be retrieved from the origin server. This causes a low CDN cache hit ratio.

Scenarios:

-   **Operational Activities**
    
    Before you launch a large-scale operational activity, prefetch the static resources for the activity page to POPs. After the activity starts, all static resources that users access are cached on POPs. The POPs can then respond directly to user requests.
    
-   **Installation Package Release**
    
    Before you release a new installation package or an upgrade package, prefetch the resources to POPs. After the product is released, POPs can directly respond to the large number of download requests from users. This improves download speeds, significantly reduces the pressure on the origin server, and improves the user experience.
    

[Refresh and prefetch resources](/help/en/cdn/user-guide/refresh-and-prefetch-resources#section-81a-rm1-sis)

Configure a reasonable time-to-live (TTL):

-   For static files that are infrequently updated, such as images and application installation packages, we recommend that you set the TTL to one month or longer.
    
-   For frequently updated static files, such as JS and CSS files, set the TTL as needed.
    
-   For dynamic files, such as PHP, JSP, and ASP files, we recommend that you set the TTL to 0s. This prevents the files from being cached.
    

Factors:

-   A cache policy is not configured in CDN. All user requests are redirected to the origin server.
    
-   The TTL configured in CDN is too short. Cached resources frequently expire. This causes a low cache hit ratio.
    

Scenario: A user releases static resources on the origin server, but POPs do not cache the resources, or the resources cached on POPs expire in a short period.

[Configure a time-to-live (TTL)](/help/en/cdn/user-guide/configure-the-cdn-cache-expiration-time#task-261642)

Remove the parameters that follow the question mark (?) in a URL from the cache key

Factor: When a URL contains a _queryString_ or other variable parameters, requests that use different URLs to access the same resource are redirected to the origin server. This causes a low CDN cache hit ratio.

Scenario: You need to access the same resource using different URLs that contain different parameters.

[Ignore parameters](/help/en/cdn/user-guide/ignore-parameters#task-187634)

Configure a range origin fetch policy for large files

Factor: A user may stop downloading an installation package or watching a video partway through. In this case, the user needs to access only a part of the resource file. However, the POP requests the entire file from the origin server. As a result, the size of the content that the POP downloads from the origin server is larger than the size of the content that is returned to the user. This causes a low cache hit ratio.

Scenario: A user downloads an application installation package or watches a video.

[Configure range origin fetch](/help/en/cdn/user-guide/object-chunking#task-187634)

Other hit rate optimization policies

In addition to the common optimization measures, Alibaba Cloud CDN provides other optimization features that can be configured for different business scenarios, such as central 302 scheduling, edge 302 scheduling, merged origin fetch, and shared cache.

These features are configured by Alibaba Cloud technical support engineers in the background.

## View logs about the cache hit status

The cache hit status of all CDN requests is recorded in the CDN request logs. For more information about the log format, see [Fields in offline logs](/help/en/cdn/user-guide/download-logs#task-187634).

Description of the cache hit status field:

-   HIT: The cache is hit.
    
-   MISS: The cache is missed.
    

**Note**

The hit status indicates only the status of L1 POPs. For example, if a request misses the cache on an L1 POP but hits the cache on an L2 POP, the log still records a MISS.

Log example:

```
26/Jun/2019:10:38:19 +0800] 192.168.53.146 - 1542 "-" "GET http://example.aliyundoc.com/index.html" 200 191 2830 MISS "Mozilla/5.0 (compatible; AhrefsBot/5.0; +http://example.com/robot/)" "text/html"
```

You can also call the [DescribeCdnDomainLogs](/help/en/cdn/developer-reference/api-cdn-2018-05-10-describecdndomainlogs) operation to obtain the download URLs of offline logs for an accelerated domain name.
