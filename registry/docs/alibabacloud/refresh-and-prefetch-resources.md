Purging instantly removes specified content from the CDN cache, forcing a retrieval of the latest version from your origin server. This ensures immediate content updates, lets you apply configuration changes, and removes non-compliant materials without waiting for the cache to expire. Prefetching proactively loads your resources onto CDN points of presence (POPs) before peak traffic hits. This protects your origin server from overload and guarantees a fast, cached response for the first wave of users during launches or high-demand events.

## Function Introduction

### **Resource purge**

A purge operation sends a cache invalidation command to CDN POPs, rather than directly deleting files. When a POP receives the command, it marks the matching cached resources as invalid or expired. The next time a user requests the resource, the POP detects the invalid cache, retrieves the latest version from the origin server, and serves it to the user while caching the new version.

**Scenarios**

1.  **Update and release content:** After you update resources on your origin server, you can purge their URLs or directories. This ensures that users receive the latest versions instead of stale content.
    
2.  **Remove non-compliant content:** If you delete non-compliant content from your origin server, it might still be accessible from the CDN cache. You can use the URL purge feature to clear the cache and ensure that the content is completely removed.
    

### **Resource prefetch**

Prefetching prompts CDN POPs to retrieve resources from your origin server based on a provided URL list and cache them. This process differs from the origin server actively pushing content. Prefetching improves the loading speed of new resources or promotional pages for first-time visitors and reduces back-to-origin traffic during high-traffic events, which protects your origin server.

**Scenarios**

1.  **Onboard Alibaba Cloud CDN:** When you first start using Alibaba Cloud CDN, you can prefetch your popular static resources to the POPs. This improves access speeds and enhances the user experience.
    
2.  **Support promotional campaigns:** Before you launch a major promotional campaign, you can prefetch all static resources for the campaign pages to the CDN POPs. When the campaign begins, the POPs directly serve all user requests for these resources, which ensures fast page loads.
    
3.  **Publish installation packages or large files:** Before you release a new software version or update package, you can prefetch the resources to the CDN POPs. After the official launch, the POPs directly handle user download requests, which accelerates download speeds and reduces the load on your origin server.
    

## Scenarios

The following table lists common scenarios for the refresh and prefetch features.

**Feature**

**Scenarios**

Refresh

-   **Resource updates and publishing**
    
    After resources on the origin server are updated or upgraded, purge them by submitting their URLs or directories to allow users to bypass the stale cache and directly access the latest resources, which are then cached on the or DCDN nodes.
    
-   **Non-compliant resource removal**
    
    If your origin server contains non-compliant content mentioned in [Limits](/help/en/edge-security-acceleration/dcdn/product-overview/before-you-start#concept-nc4-qbf-xdb), the content may still be accessible from DCDN POPs due to caching even after you delete it from the origin server. In this case, use the URL refresh feature to update the cached resources.
    

Prefetch

-   **Operational activities**
    
    For a large-scale event, you can prefetch the static resources on the event page to or DCDN nodes in advance. After the event starts, all static resources that users access are already cached on or DCDN POPs and are served directly by these POPs.
    
-   **Installation package releases**
    
    Prefetch resources to the or DCDN POPs before you publish a new version of an installation or update package. After the product is officially launched, download requests from many users are served directly by the or DCDN POPs. This improves download speeds, significantly reduces the load on the origin server, and enhances the user experience.
    

## Notes

-   ### **Notes on cache purge:**
    
    -   Submitting many purge tasks clears a significant amount of cache. This causes a sudden increase in back-to-origin bandwidth and requests, which increases the load on your origin server. We recommend that you perform this operation during off-peak hours.
        
    -   A purge task takes about 5 to 6 minutes to take effect. If the cache time-to-live (TTL) for a file or directory is less than 5 minutes, you do not need to perform a purge. You can wait for the cache to expire and update automatically.
        
    -   URL purge, directory purge, and regex-based purge all support shared cache. If a domain name is configured with a shared cache, you can submit a purge task using the primary domain name or any associated domain name to clear the cache.
        
-   ### **Notes on cache prefetch:**
    
    -   After a prefetch task is submitted and successfully executed, the or DCDN nodes immediately retrieve the required resources from the origin server. Submitting many prefetch tasks at once generates many concurrent back-to-origin tasks, which causes a sudden increase in back-to-origin bandwidth and requests. We recommend that you perform this operation during off-peak hours.
        
    -   By default, a prefetch request includes the `Accept-Encoding:gzip` header. If you need the prefetch request to include other headers or to implement multi-replica prefetching, you can call the [Prefetch URLs](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-preloaddcdnobjectcaches) OpenAPI operation and set the `WithHeader` request parameter to customize prefetch headers.
        
    -   During prefetching, if the origin server returns a redirection-related status code, such as 307, the prefetch task does not follow the redirection to retrieve the resource. As a result, the prefetch task fails. However, if the origin server returns a 301 or 302 status code and you have enabled the [301/302 redirects for origin fetch](/help/en/edge-security-acceleration/dcdn/configure-301-or-302-redirection) feature on DCDN, the prefetch task is not affected.
        
-   ### **General notes:**
    
    -   If a domain name is configured with [Rewrite Access URL](/help/en/cdn/user-guide/create-an-access-url-rewrite-rule), the node uses the rewritten URL to generate the CacheKey. Therefore, you must submit the rewritten URL for refresh and prefetch operations.
        
    -   To use a Resource Access Management (RAM) user to refresh and prefetch resources, you must first grant the required permissions to the RAM user. For more information, see [Grant permissions to a RAM user to refresh and prefetch resources](/help/en/edge-security-acceleration/dcdn/user-guide/authorize-a-ram-user-to-prefetch-and-refresh-resources#task-2239499).
        
    -   You cannot abort a URL purge or cache prefetch task after it is submitted.
        
    -   When you submit a cache purge or prefetch task, if the URI contains non-ASCII characters, such as spaces or Chinese characters, you must encode the URL. Otherwise, the task cannot be recognized.
        

## Refresh resources

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the navigation pane on the left, choose **Tools** > **Purge and Prefetch**.
    
3.  On the **Purge Cache** tab, configure the refresh rules.
    
    ![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3162953671/p549085.png)
    
    **Parameter**
    
    **Description**
    
    **Operation**
    
    Select **Purge**.
    
    **Operation Method**
    
    You can refresh by **URL**, **Directory**, or **Regular Expression**.
    
    **URL**
    
    -   By default, each Alibaba Cloud account can refresh content from a maximum of 10,000 URLs and 100 directories including subdirectories per day. If the daily peak bandwidth of your Alibaba Cloud account is greater than 200 Mbps, you can request a quota increase in [Quota Management](/help/en/edge-security-acceleration/dcdn/user-guide/quota-management#concept-2086246). Alibaba Cloud will evaluate your request and configure the quota based on your actual business needs.
        
    -   By default, an Alibaba Cloud account can submit a maximum of 20 regex-based refresh tasks per day. If the peak bandwidth of your Alibaba Cloud account is greater than 10 Gbps, you can [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex) to apply for a quota increase.
        
    -   URL refresh
        
        -   The URL must start with `http://` or `https://`.
            
        -   To refresh multiple URLs, enter one URL per line.
            
    -   Directory refresh
        
        -   The URL must start with `http://` or `https://` and end with a forward slash (/).
            
            -   To refresh all files in the root directory: `http://example.com/`.
                
            -   To refresh all files in the `/path/test/` subdirectory: `http://example.com/path/test/`.
                
        -   To refresh multiple URLs, enter one URL per line.
            
        -   You can submit a maximum of 100 directory refresh tasks at a time. You can submit a maximum of 100 directory refresh tasks per minute for a single domain name.
            
        -   By default, directory refresh uses the "refresh changed resources" method. If a user request matches a resource in the directory, the DCDN node retrieves the Last-Modified information of the resource from the origin server. If the information is the same as that of the currently cached resource, the node directly returns the cached resource. If it is different, the node pulls the new resource from the origin server, returns it to the user, and caches the new resource.
            
    -   Regex-based refresh
        
        For more information, see [Regex-based refresh](/help/en/edge-security-acceleration/dcdn/user-guide/configure-url-refresh-rules-that-contain-regular-expressions#task-2348130).
        
    
4.  Click **Submit**.
    
5.  View the refresh progress.
    
    After you submit a refresh task, you can view the details and progress of the task on the **Records** tab. The task may take a long time to complete if you refresh many resources.
    

## Prefetch resources

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the navigation pane on the left, choose **Tools** > **Purge and Prefetch**.
    
3.  On the **Purge Cache** tab, configure the prefetch rules.
    
    ![8](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3162953671/p549089.png)
    
    **Parameter**
    
    **Description**
    
    **Operation**
    
    Select **Prefetch**.
    
    **Operation Method**
    
    Only **URL** prefetch is supported.
    
    **URL**
    
    -   The URL must start with `http://` or `https://`. The prefetch URL must be the exact path of a resource file. Directories ending with a forward slash (`/`) are not supported.
        
    -   To prefetch multiple URLs, enter one URL per line.
        
    -   URL prefetch quota (daily): An Alibaba Cloud account can submit a maximum of 1,000 URL prefetch tasks per day. You can submit a maximum of 100 URL prefetch tasks at a time.
        
        If the daily peak bandwidth of your account is greater than 500 Mbps, you can refer to [Quota Management](/help/en/edge-security-acceleration/dcdn/user-guide/quota-management#concept-2086246) to request a daily quota increase. Alibaba Cloud evaluates and configures the quota based on your actual business needs.
        
    -   Prefetch queue rule: The prefetch queue for each account can hold a maximum of 100,000 URLs. DCDN prefetches URLs in the order they are submitted. When the number of URLs to be prefetched in the queue reaches 100,000, DCDN rejects new prefetch tasks.
        
    -   Prefetch speed: The execution speed of a prefetch task is related to the average size of the files to be prefetched. The smaller the average file size, the faster the prefetch speed.
        
    
4.  Click **Submit**.
    
5.  View the prefetch progress.
    
    After you submit a prefetch task, you can view the details and progress of the task on the **Records** tab. The task may take a long time to complete if you prefetch many resources.
    

## Related API operations

You can call API operations to refresh and prefetch resources. The following table provides details.

**API**

**Description**

[RefreshDcdnObjectCaches](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-refreshdcdnobjectcaches)

Refreshes file content on POPs. Refreshes the content of specified URLs to cache nodes. Supports batch URL refresh.

**Note**

URL refresh, directory refresh, and regex-based refresh all support shared cache. If shared cache is configured for a domain name, you can submit a refresh task using the primary domain name or any associated domain name to purge the cache.

[PreloadDcdnObjectCaches](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-preloaddcdnobjectcaches)

Proactively prefetches content from the origin server to L2 cache nodes. This allows users to directly hit the cache on their first access and reduces the load on the origin server.

[DescribeDcdnRefreshQuota](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnrefreshquota)

Queries the daily quotas and remaining quotas for URL refreshes, URL prefetches, and directory refreshes.

[DescribeDcdnRefreshTasks](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnrefreshtasks)

Queries whether a refresh or prefetch task has taken effect across the entire network.

[DescribeDcdnUserQuota](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-describedcdnuserquota)

Queries the resource quotas and usage for a user.

[DescribeDcdnRefreshTaskById](/help/en/doc-detail/217613.html#doc-api-dcdn-DescribeDcdnRefreshTaskById)

Queries whether a refresh or prefetch task has taken effect across the entire network.
