When an origin server returns a non-2xx status code, Edge Security Acceleration (ESA) points of presence (POPs) can cache the status code. For the duration of the cache validity period, the POPs respond directly to requests. This process avoids repeated origin requests and reduces the load on the origin server.

## Scenarios

Normally, an ESA POP caches a resource when it successfully fetches it from an origin server that returns a 2xx status code. However, if the origin server returns a non-2xx status code, such as 404 or 502, you can avoid sending all requests back to the origin. Configure a cache time-to-live (TTL) for the status code. The ESA POP then responds directly with the status code, which reduces the load on your origin server.

**Typical scenario**

File A has been deleted from the origin server, but clients continue to access it. Because the ESA POP has not cached File A, all requests for File A are sent to the origin server. The origin server then responds with a 404 status code. This significantly increases the load on the origin server.

If you configure the ESA POP to cache the 404 status code, the POP caches it after the first origin fetch. For the duration of the cache validity period, subsequent requests receive a 404 response directly from the ESA POP. This avoids origin fetches and reduces the load on the origin server.

## **Procedure**

1.  In the ESA console, select [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Cache Rules**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** area, set the request attributes to match. For more information about rule configuration, see [Composition of rule expressions](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Bypass Cache** section, specify whether to bypass cache. For more information, see [Cache eligibility](/help/en/edge-security-acceleration/esa/user-guide/cache-bypass).
    
6.  In the **Edge Cache TTL** area, click **Configure**.
    
7.  Click **Add** for **Status Code Cache TTL**. Configure the following parameters and then click **OK**:
    
    -   **Status Code**: The HTTP status code to cache. Supports 4xx (client error) and 5xx (server-side error) status codes, such as 404, 502, and 503.
        
    -   **Expired At**: The period for which the POP caches the status code. The value can range from 1 second to 31,536,000 seconds (1 year). After the TTL expires, the POP fetches the status code from the origin server again.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6967613771/p1058021.png)
    

## Configuration examples

### Scenario 1: Cache 404 errors for static resources

**Business need**: Images in the website's image folder might be deleted, but the frontend page still references the old path.

**Configuration**:

-   **Matching condition**: URL path contains `/images`
    
-   **Status code**: 404
    
-   **Cache TTL**: 600 seconds (10 minutes)
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6967613771/p1058022.png)

**Result**: When the first request for a non-existent image is made, the POP fetches a 404 response from the origin and caches it for 10 minutes. For the next 10 minutes, subsequent requests for the same image receive a 404 response directly from the POP without an origin fetch.

### Scenario 2: Short-term Cache Origin Server Failure

**Business need**: The origin server is occasionally unavailable for a short time and returns 5xx errors. You want to quickly recover the service.

**Configuration**:

-   **Matching condition**: **All Requests**
    
-   **Status code**: 5xx
    
-   **Cache TTL**: 60 seconds (1 minute)
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6967613771/p1058044.png)

**Result**: When the origin server fails, the POP caches the 5xx status code for 1 minute. This prevents many origin requests from increasing the load on the origin server. After 1 minute, the POP fetches from the origin again to check if the server has recovered.

## Verify the configuration

After you finish the configuration, use the following methods to verify that it has taken effect.

### Method 1: Use the curl command

1.  Clear the local cache and send the first request:
    
    ```
    curl -I https://example.com/non-existent-page
    ```
    
    The response header should contain `x-site-cache-status: MISS`. This indicates the first origin fetch.
    
2.  Immediately request the same `URL` again:
    
    ```
    curl -I https://example.com/non-existent-page
    ```
    
    The response header should contain `x-site-cache-status: HIT`, which indicates a cache hit. The value of the field indicating the cache duration should also automatically increment.
    

### Method 2: Use browser developer tools

1.  Open Chrome DevTools (press F12), switch to the Network tab, and check Preserve log.
    
2.  Access a non-existent resource, such as `https://example.com/test404`.
    
3.  View the `Response Headers` in the request details. The first request shows `x-site-cache-status: MISS`. Subsequent requests show `x-site-cache-status: HIT`, and the value of the field indicating the cache duration automatically increments.
    

## FAQ

### Why are requests still being sent to the origin server after configuration?

1.  **The cache has expired**: Check whether the configured `TTL` value is too short. You can examine response headers such as `Cache-Control` to confirm the cache time to live.
    
2.  **Different URL parameters**: By default, different `URL` parameters are treated as different cache keys. Configure cache key rules to ignore irrelevant parameters.
    
3.  **The rule has not taken effect**: Verify the rule’s matching conditions, such as the path pattern, to ensure they cover the target request.
    

### How do I verify the cache status of a specific URL?

You can use the `curl` command to view the detailed response headers:

```
curl -v -I https://example.com/target-url
```

Key response headers:

-   `x-site-cache-status: HIT` — Cache hit
    
-   `x-site-cache-status: MISS` — Cache miss, origin fetch performed
    
-   `Cache-Control:max-age=120` — The cache has been active for 120 seconds
    

### How do I manually purge the cache for a specific status code?

You can refresh the cache [by URL](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-url) or [by folder](/help/en/edge-security-acceleration/esa/user-guide/refresh-cache-by-directory).

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
