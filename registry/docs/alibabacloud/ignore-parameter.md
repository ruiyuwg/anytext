After you enable the ignore parameter feature, Alibaba Cloud Dynamic Content Delivery Network (DCDN) can remove parameters that follow the question mark (`?`) in the request URLs. This improves the cache hit ratio, reduces the number of requests that are redirected to the origin server, reduces the costs of back-to-origin data transfer, and accelerates content delivery. This topic describes how to configure the ignore parameter feature.

## When to use it

-   Enable ignore parameter
    
    If your request URL contains a question mark (`?`) followed by parameters, such as `http://alibaba.com/content?a`, but a low priority is assigned to the parameters and content can be retrieved even if the parameters are ignored, we recommend that you enable the feature. If you enable the feature, DCDN ignores the parameters that follow the question mark (`?`) in the request URL when resources are retrieved from the origin server. This increases the cache hit ratio.
    
    For example, the first time you visit `http://example.aliyundoc.com/image_01.jpg`, the requested resource is not cached on DCDN points of presence (POPs). DCDN retrieves the resource from the origin server. The second time you visit `http://example.aliyundoc.com/image_01.jpg?test1`, the parameters that follow the question mark (`?`) in the URL are ignored. The request can directly hit the cached resource `http://example.aliyundoc.com/image_01.jpg`.
    
-   Disable ignore parameter
    
    If your request URL contains a question mark (`?`) followed by parameters, but the parameters contain important information, we recommend that you disable the feature. After the feature is disabled, DCDN checks the entire URL, including the parameters that follow the question mark (`?`). Exact matches increase the accuracy of content retrieval.
    
    For example, the first time you visit `http://example.aliyundoc.com/image_01.jpg`, the requested resource is not cached on DCDN POPs. DCDN retrieves the requested resource from the origin server. The second time you visit `http://example.aliyundoc.com/image_01.jpg?test1`, the parameters that follow the question mark (`?`) are retained. DCDN checks the entire URL. The request cannot hit the cached resource because the request URL is different from `http://example.aliyundoc.com/image_01.jpg`. The request is redirected to the origin server to retrieve the resource at `http://example.aliyundoc.com/image_01.jpg?test1`.
    

**Note**

The URL signing feature takes priority over the ignore parameter feature. The authentication information in type A contains the parameters of an HTTP request. Therefore, a DCDN POP must verify the signed URL of the request before the DCDN POP caches a version of the requested resource. For more information about how to configure URL signing, see [Configure URL signing](/help/en/cdn/user-guide/configure-url-signing#task-187634).

## Subfeatures

-   Parameter filtering
    
    **Description**
    
    **Scenario**
    
    DCDN removes the parameters that follow the question mark (`?`) in request URLs so that requests that are destined for the same file but carry different URL parameters can hit the cache. This increases the cache hit ratio, reduces the back-to-origin routing frequency, and accelerates file distribution.
    
    Some users append parameters after the question mark (`?`) in request URLs to pass information such as user IDs (UIDs), request sources, and recommendation codes to the origin servers. In this case, these URLs carry different query strings even if the requests are sent to the same file.
    
    We recommend that you enable parameter filtering if the parameters that follow the question mark (`?`) in URLs are irrelevant to the requested resource. Examples:
    
    -   Request from User A: `http://example.com/1.jpg?uid=123***`
        
    -   Request from User B: `http://example.com/1.jpg?uid=654***`
        
    
    If a DCDN POP uses the original URLs from User A and User B, the requests cannot hit the same file in the cache. The requests must be redirected to the origin server.
    
    After parameter filtering is enabled, the DCDN POP removes the UIDs that follow the question mark (`?`) in the request URLs. The final URL `http://example.com/1.jpg` is used to match against the cache.
    
-   Retain parameters in back-to-origin requests
    
    **Description**
    
    **Scenario**
    
    The original URLs are redirected to the origin server so that key user information can be passed to the origin server.
    
    If you enable parameter filtering, DCDN POPs redirect the URLs processed to the origin servers. In the preceding example, the requests from User A and User B both use the URL `http://example.com/1.jpg`. The UIDs are not passed to the origin server during back-to-origin routing.
    
    If retaining parameters is enabled, DCDN POPs redirect the original URLs to the origin server so that the UIDs are passed to the origin server.
    

This feature can retain or remove specified parameters. The following figure shows how it works.![Parameter filtering](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0510577761/p514373.png)

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Optimization**.
    
5.  In the **Ignore Parameters** section, click **Modify**, select a filtering mode based on your business requirements, and then set the parameters.
    
    **Note**
    
    If you change the filtering mode, the current configuration is cleared.
    
    -   **Filter Mode: Retain Specified Parameters**![Parameter filtering](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6125019471/p259342.png)
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Parameter Filtering**
        
        -   **Yes**: DCDN removes the parameters that follow the question mark (`?`) in the request URL when resources are retrieved from the origin server. This increases the cache hit ratio.
            
            **Note**
            
            If you enable **Parameter Filtering** and do not set the **Retain Specified Parameters** parameter, all parameters that follow the question mark (`?`) are removed.
            
        -   **No**: DCDN checks the entire URL, including the parameters that follow the question mark `?`. Exact matches increase the accuracy of content retrieval.
            
        
        If the original URL is `http://example.com/1.jpg?key1=1&key2=2&key3=3`, the following examples show how the URL is processed based on different settings:
        
        -   Example 1: remove all parameters and redirect the final URL to the origin server.
            
            -   Parameter settings: Parameter Filtering is set to Yes, no value is specified for Retain Specified Parameters, and Retain Origin Parameters is set to No.
                
            -   Cache key: `http://example.com/1.jpg`.
                
            -   URL redirected to the origin server: `http://example.com/1.jpg`.
                
        -   Example 2: retain specified parameters and redirect the final URL to the origin server.
            
            -   Parameter settings: Parameter Filtering is set to Yes, Retain Specified Parameters is set to `key1`, and Retain Origin Parameters is set to No.
                
            -   Cache key: `http://example.com/1.jpg?key1=1`.
                
            -   URL redirected to the origin server: `http://example.com/1.jpg?key1=1`.
                
        -   Example 3: remove all parameters and redirect the original URL to the origin server.
            
            -   Parameter settings: Parameter Filtering is set to Yes, no value is specified for Retain Specified Parameters, and Retain Origin Parameters is set to Yes.
                
            -   Cache key: `http://example.com/1.jpg`.
                
            -   URL redirected to the origin server: `http://example.com/1.jpg?key1=1&key2=2&key3=3`.
                
        -   Example 4: retain specified parameters and redirect the original URL to the origin server.
            
            -   Parameter settings: Parameter Filtering is set to Yes, Retain Specified Parameters is set to `key1`, and Retain Origin Parameters is set to Yes.
                
            -   Cache key: `http://example.com/1.jpg?key1=1`
                
            -   URL redirected to the origin server: `http://example.com/1.jpg?key1=1&key2=2&key3=3`.
                
        
        **Retain Specified Parameters**
        
        You can specify up to 10 parameters that you want to retain. Separate multiple parameters with commas (,).
        
        **Retain Origin Parameters**
        
        -   **Yes**: retains all parameters in URLs during back-to-origin routing.
            
        -   **No**: retains only specified parameters in URLs during back-to-origin routing. The parameters are the same as those in the cache key.
            
        
    -   **Filter Mode: Remove Specified Parameters**
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6125019471/p964217.png)
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Delete Specified Parameters**
        
        You can specify up to 10 parameters that you want to remove. Separate multiple parameters with commas (,).
        
        If the original URL is `http://example.com/1.jpg?key1=1&key2=2&key3=3`, the following examples show how the URL is processed based on different settings:
        
        -   Example 1: remove specified parameters and redirect the final URL to the origin server.
            
            -   Parameter filtering: Delete Specified Parameters is set to `key1`, and Retain Origin Parameters is set to No.
                
            -   Cache key: `http://example.com/1.jpg?key2=2&key3=3`.
                
            -   URL redirected to the origin server: `http://example.com/1.jpg?key2=2&key3=3`.
                
        -   Example 2: remove specified parameters and redirect the original URL to the origin server.
            
            -   Parameter settings: Remove Specified Parameters is set to `key1`, and Retain Parameters in Back-to-origin Requests is set to Yes.
                
            -   Cache key: `http://example.com/1.jpg?key2=2&key3=3`.
                
            -   URL redirected to the origin server: `http://example.com/1.jpg?key1=1&key2=2&key3=3`.
                
        
        **Retain Origin Parameters**
        
        -   **Yes**: retains all parameters in URLs during back-to-origin routing.
            
        -   **No**: removes only specified parameters in URLs during back-to-origin routing. The parameters are the same as those in the cache key.
            
        
    
6.  Click **OK**.
