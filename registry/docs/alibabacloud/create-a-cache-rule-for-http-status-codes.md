When an Alibaba Cloud DCDN point of presence (POP) fetches a resource from your origin server, the origin server returns a response status code. You can configure a cache duration for these status codes in DCDN. When a client requests the same resource again, the DCDN POP returns the status code directly without performing an origin fetch. This reduces the load on your origin server. When the cache duration for the status code expires, a new origin fetch is triggered.

## Use cases

Configuring the cache expiration time for status codes is primarily used to specify the caching action that a DCDN node performs when your origin server returns an abnormal status code.

By default, when a DCDN node successfully retrieves a resource from the origin server and receives an HTTP 2xx status code, the response is processed based on the [default cache rules and priorities of Alibaba Cloud CDN and DCDN](/help/en/edge-security-acceleration/dcdn/user-guide/add-a-cache-rule-for-resources#af18f0e135xr1). However, if the origin server frequently returns non-2xx status codes and you want to avoid forwarding every request to the origin, you can set a time-to-live (TTL) for these HTTP status codes. DCDN nodes can then return the cached status codes directly to clients. This reduces the load on the origin server.

#### **Example**

A file named File A is deleted from the origin server, but clients continue to request it. The DCDN node does not have File A cached, so all requests are forwarded to the origin server, which returns a 4xx status code. This increases the load on the origin server. If you configure DCDN to cache 4xx status codes, the DCDN node caches the 4xx status code after the first origin fetch. Within the configured cache duration, when a client requests File A again, DCDN returns the cached 4xx status code directly.

## Cache rules for abnormal status codes

-   For status codes 204, 305, 404, 405, 414, 424, 429, 500, 501, 502, 503, and 504, the cache rules are as follows:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4783234671/CAEQTxiBgIDvx9mQ0xkiIGMyZWRhZjFiODg5NTQ1MjY4ZGI5MzE5M2E0M2YyNTg55715141_20250911152743.664.svg)
    1.  If the origin server returns a `set-cookie` response header, DCDN does not cache the response.
        
    2.  If the origin server does not return a Set-Cookie response header, the response is cached based on the expiration time of the status code that you configure in the DCDN console. For information about how multiple rules take effect, see the Priority of multiple rules section.
        
    3.  If the origin server does not return a Set-Cookie response header and you do not configure an expiration time for the status code in the DCDN console, the response is cached based on the Pragma, Cache-Control, or Expires response header from the origin server.
        
    4.  If the origin server does not return a Set-Cookie, Pragma, Cache-Control, or Expires response header and you do not configure an expiration time for the status code in the DCDN console, the response is cached for 1 second by default.
        
-   For status codes 302, 307, and 403, the cache rules are as follows:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4783234671/CAEQTxiBgMDmyNmQ0xkiIDRmNWJkN2U4MGIxNTQxZDZhN2ZjOGZhY2IwMDZlNmQ35715141_20250915141827.184.svg)
    1.  If the origin server returns a `set-cookie` response header, DCDN does not cache the response.
        
    2.  If the origin server does not return a Set-Cookie response header, the response is cached based on the expiration time of the status code that you configure in the DCDN console. For information about how multiple rules take effect, see the Priority of multiple rules section.
        
    3.  If the origin server does not return a Set-Cookie response header and you do not configure an expiration time for the status code in the DCDN console, the response is cached based on the Pragma, Cache-Control, or Expires response header from the origin server.
        
    4.  If the origin server does not return a Set-Cookie, Pragma, Cache-Control, or Expires response header and you do not configure an expiration time for the status code in the DCDN console, the response is not cached.
        
-   For the 304 status code, DCDN does not cache the response. You cannot set a cache duration for this status code.
    

-   For other abnormal status codes, such as 400, the cache rules are as follows:
    
    1.  If the origin server returns a `set-cookie` response header, DCDN does not cache the response.
        
    2.  If the origin server does not return a Set-Cookie response header, the response is cached based on the expiration time of the status code that you configure in the DCDN console. For information about how multiple rules take effect, see the Priority of multiple rules section.
        
    3.  In other scenarios, the response is not cached.
        
-   For requests that use range origin fetch, if a DCDN POP receives a non-206 status code from the origin server, the DCDN POP deletes the cached file shards. An origin fetch timeout does not cause the cached file shards to be deleted.
    
    In a range origin fetch scenario, the origin server splits a large file into multiple smaller file shards and returns them to the DCDN POP. For example, a file is split into 10 shards. The DCDN POP has already cached five shards. When the POP requests the sixth shard, the origin server returns a 5xx status code. In this case, the five previously cached shards are deleted.
    

## How multiple rules take effect

You can set multiple cache rules for status codes. If a request matches multiple rules, only one rule takes effect. The effective rule is determined as follows:

-   **Evaluation order**:
    
    Rules are evaluated first by type (File Extension > Directory), and then by creation time (older > newer).
    
-   **Priority for rules of different types: File Extension > Directory.**
    
    For example, if a user request matches two rules (both configured for the 404 status code) of the File Extension and Directory types, the expiration time for the 404 status code is determined by the File Extension rule. For a detailed example, see [Configuration examples](#section-bmj-k2e-f4f).
    
-   **Priority for rules of the same type: Older > Newer** (from top to bottom in the rule list).
    
    For example, if a user request matches two rules (both configured for the 404 status code) of the same type (both File Extension or both Directory), the expiration time for the 404 status code is determined by the rule that was created first. For a detailed example, see [Configuration examples](#section-bmj-k2e-f4f).
    

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure** in the **Actions** column.
    
4.  In the left-side navigation tree of the domain name, click **Caching**.
    
5.  Click the **Status Codes and Expiration Time** tab.
    
6.  Click **Add** to configure the cache expiration time for status codes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0802524671/p980468.png)
    
    **Type**
    
    **Notes**
    
    **Type**
    
    Supports **Directory** and **File Extension** types. Select a type as needed.
    
    **Note**
    
    Priority for rules of different types: File Extension > Directory. For more information, see [How multiple rules take effect](#section-elx-i7d-l9q).
    
    **Object**
    
    -   If you select **Directory** as the type, note the following:
        
        -   You can add only one directory at a time.
            
        -   Enter the full path of the directory. The path must start with a forward slash (`/`), for example, `/directory/aaa`.
            
    -   If you select **File Extension** as the type, the description is as follows:
        
        -   Enter one or more file extensions. Separate multiple extensions with commas (,), for example, `jpg,txt`.
            
            **Note**
            
            If you configure multiple records for the same file extensions that differ only in case, the record that you create later overwrites the earlier ones. For example, if you create a rule for `jpg,txt` and then create another rule for `jpg,txt`, the previously created `jpg,txt` record is overwritten. In this case, if you want to configure a rule for lowercase extensions, you can create separate rules for `txt` and `jpg`. File extensions are case-sensitive.
            
        -   You cannot use an asterisk (`*`) to match all file types.
            
    
    **HTTP Status Codes and Expiration Time**
    
    The status codes to cache and their cache duration. You can set the duration up to 3 years. The unit is seconds. The configuration rules are as follows:
    
    -   Separate multiple status codes with commas (`,`).
        
    -   For 2xx and 3xx status codes, you can only specify individual codes. Wildcard matching is not supported. For example, 201=10 is supported, but 2xx=12 is not.
        
    -   For 4xx and 5xx status codes, both individual codes and wildcard matching are supported. For example, both 401=10 and 4xx=12 are supported.
        
    
    **Honor Origin TTL**
    
    If you enable this feature, the cache policy from the origin server takes precedence if the origin server response includes cache policy headers, such as `Cache-Control` and `Pragma`.
    
    **Ignore Origin No-Cache Header**
    
    If you enable this feature, DCDN nodes ignore the following no-cache headers from the origin server.
    
    -   `Cache-Control: no-store`
        
    -   `Cache-Control: no-cache`
        
    -   `Cache-Control: max-age=0`
        
    -   `Pragma: no-cache`
        
    
    **Follow POP TTL**
    
    If you enable this feature, the DCDN node sends the final effective cache policy to the client.
    
    **Force Revalidation**
    
    This parameter takes effect only when the cache expiration time is set to 0. The effects are as follows:
    
    -   Disabled (default): When the time-to-live for DCDN is set to 0, files are not cached on DCDN nodes, and each request requires an origin fetch to retrieve content.
        
    -   Enabled: When the time-to-live (TTL) for DCDN is set to 0, files can be cached on DCDN nodes. Each request requires an origin fetch to validate the cached content.
        
    
7.  Click **OK**.
    
    > After you configure a cache expiration rule for a status code, the rule appears in the **Status Codes and Expiration Time** list. You can then **Modify** or **Delete** the rule.
    

## Configuration examples

-   **Example 1: Directory type rule**
    
    Create a directory type rule as shown in the following figure:![Example 1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5467821461/p375804.png)
    
    For the `/directory/aaa` directory, all 4xx status codes are cached for 10 seconds, and the 201 status code is cached for 15 seconds. During the cache duration, DCDN nodes respond directly to matching access requests. After the cache expires, requests are forwarded to the origin server.
    
-   **Example 2: File extension type rule**
    
    Create a file extension type rule as shown in the following figure:![Example 2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5467821461/p375805.png)
    
    For files with the `.jpg` or `.txt` extension, the 403 status code is cached for 10 seconds, and the 404 status code is cached for 15 seconds. During the cache duration, DCDN nodes respond directly to matching access requests. After the cache expires, requests are forwarded to the origin server.
    
-   **Example 3: Priority for rules of different types**
    
    A `Directory type rule` and a `File extension type rule` are created with different status code expiration times, as shown in the following figure:![Example 3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5467821461/p375806.png)
    
    A user requests `http://example.com/directory/aaa/test.jpg`. The resource is not cached on the DCDN node. The DCDN node requests the resource from the origin server, and the origin server returns a 404 status code. This request matches both the `Directory type rule` and the `File extension type rule`. Because the priority of rule types is **File Extension > Directory**, the `File extension type rule` takes effect. The actual cache duration for the 404 status code is 20 seconds.
    
-   **Example 4: Priority for multiple rules of the same type**
    
    `Directory type rule 1` is created first for the `/directory` path. Then, `Directory type rule 2` is created for the `/directory/aaa` path. They have different status code expiration times, as shown in the following figure:![Example 4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5467821461/p375808.png)
    
    A user requests `http://example.com/directory/aaa/test.jpg`. The resource is not cached on the DCDN node. The DCDN node requests the resource from the origin server, and the origin server returns a 404 status code. This request matches both `Directory type rules`. Because the priority for rules of the same type is **Older > Newer**, the first rule created, `Directory type rule 1`, takes effect. The actual cache duration for the 404 status code is 15 seconds.
    

## Related API

[Add domain names in batches](/help/en/edge-security-acceleration/dcdn/developer-reference/api-dcdn-2018-01-15-batchadddcdndomain)
