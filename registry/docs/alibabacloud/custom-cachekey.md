You can create rules based on different parts of a user request, such as the query string, HTTP request header, or cookie, to generate custom cache keys. This feature unifies the cache key for a class of requests that access the same file. This prevents requests for the same file from being cached as different files because of varying request parameters. As a result, the cache hit rate increases, and both response time and bandwidth consumption are reduced.

## **Background information**

-   The custom cache key feature does not modify the back-to-origin URL. It only modifies the cache identity of the request. This ensures that the back-to-origin request is consistent with the client request.
    
-   A cache key is the unique identifier for a file cached on an ESA point of presence (POP). Each file cached on a POP has a unique cache key. By default, the cache key is the complete URL of the client request, including parameters.
    

## **Notes**

If you configure a custom CacheKey with parameters such as HTTP request headers, cookies, or user features, you cannot use [Purge cache by URL](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-url) to purge cache files for a specific URL. Instead, you must use [Purge cache by custom cache key](/help/en/edge-security-acceleration/esa/user-guide/purge-cache-by-custom-cachekey) to purge the cache files for that URL.

## **Use cases**

Use case 1: Unify cache keys

A customer's request URLs contain complex parameters. Consequently, even when multiple requests access the same file, the ESA POP treats them as requests for different files because of the varying URL parameters. The POP then caches them as multiple files, which increases the number of back-to-origin requests.

To resolve this issue, you can use the custom cache key feature to ignore query strings. This unifies the cache keys for the same class of requests and reduces the back-to-origin rate.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4270846671/CAEQTxiBgICFrYP91BkiIDBkMmVmMDUwY2VkNTQ2MWZhYzU0YmRmYTkzYjJhMzg44510764_20240703152432.085.svg)

Use case 2: Differentiate cache keys

When client request URLs are identical, ESA treats them as requests for the same file. However, the `client` field in the HTTP request header can distinguish between different client systems. This indicates that different files are being requested.

In this case, you can use the custom cache key feature to generate different cache keys based on the client type. This ensures that the two requests are identified by two different cache keys.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4270846671/CAEQTxiBgMCErIP91BkiIDAxOTA2Y2M5NTg4NTRkNjliNGVmOTU4ZjliODVmYjhh4510764_20240703153430.477.svg)

## **Procedure**

After you add a rule, when a user requests a resource, ESA matches and executes rules sequentially based on the [rule execution priority](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/#29cc23f5ebozm).

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Cache Rules**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, configure the conditions that a request must match. For more information, see [Composition of a rule expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Cache Eligibility** section, set **Cache Eligibility** to **Eligible for Cache**.
    
6.  In the **Custom Cache Keys** section, click **Configure**, and set the following parameters.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0808492271/p816908.png)
    
    **Parameter**
    
    **Description**
    
    **Sort Query Strings**
    
    Specifies whether to enable the [Sort Query String](/help/en/edge-security-acceleration/esa/user-guide/query-string-sorting) feature.
    
    **Query String**
    
    Specifies whether to remove the `?` and the subsequent [query string](/help/en/edge-security-acceleration/esa/user-guide/query-string) from the request URL.
    
    **HTTP Request Header**
    
    -   **Include Header Names and Their Values**: Adds the specified HTTP request header names and their values to the Cachekey.
        
    -   **Check Presence of**: Checks whether the specified HTTP request headers exist. If they exist, their names are added to the Cachekey.
        
    
    **Cookie**
    
    -   **Include Cookie Names and Their Values**: Adds the specified cookie parameter names and their values to the Cachekey.
        
    -   **Check Presence of**: Checks whether the specified cookie parameters exist. If they exist, their names are added to the Cachekey.
        
    
    **User**
    
    -   **Device Type**: Identifies the client type based on the `User-Agent` information of the client and then generates a Cachekey based on the client type.
        
    -   **Country/Region**: Identifies the country or region of the client based on the client IP address and then generates a Cachekey based on the country or region.
        
    -   **Language**: Identifies the client language based on the `Accept-Language` information in the client request and then generates a Cachekey based on the language type.
        
    
    **Cache Deception Defense**
    
    Defends against web cache deception attacks while allowing static content to be cached.
    
7.  Click **OK**.
    

## Configuration examples

**Example scenario**

-   User request URL: `http://www.example.com/image.jpg?key123=321&key456=654`
    
-   Request headers carried in the user request:
    
    -   `name123:321`
        
    -   `name456:654`
        
    -   `User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.X.X Safari/537.36`
        
    -   `Accept-Language:zh-CN`
        
-   The client uses an IP address of China Telecom to access the service.
    

**Feature configuration**

-   **Query String**: `Delete parameter key456`
    
-   **HTTP Request Header**:
    
    -   **Include Header Names and Their Values**: `name123`
        
    -   **Check Presence of**: `name456`
        
-   **User**: The **Device Type**, **Country/Region**, and **Language** switches are all turned on.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0808492271/p822786.png)

**Generated Cachekey**

The Cachekey fragments generated for each parameter are:

-   `http://www.example.com/image.jpg?key123=321`
    
-   `name123:321`
    
-   `name456`
    
-   `desktop`
    
-   `CN`
    
-   `Accept-Language:zh-CN`
    

Therefore, the final Cachekey is a concatenation of these fragments: `http://example.com/image.jpg?key123=321name123:321name456desktopCNAccept-Language:zh-CN`

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
