If the resource path on your origin server changes but you want to keep the URL that clients access unchanged, you can use URL rewrite rules. Configure these rules on Edge Security Acceleration (ESA) points of presence (POPs). The rules automatically modify the path and query string (request parameters) of a URL during the origin fetch stage. ESA then sends the rewritten URL to your origin server to retrieve the resource. This feature enables smooth migration and integration without changes to frontend links or origin server configurations.

## **Use cases**

-   **Origin server migration**: The file path on the origin server changes, but you want to keep the user access path unchanged.
    
-   **API version adaptation**: Rewrite the path of a legacy API to a new version when a user makes a request.
    
-   **Parameter standardization**: Unify the format of parameters passed by different clients.
    
-   **Path normalization**: Map complex backend paths to simple user-facing paths.
    

## **How it works**

**Note**

If you have rewritten the URL, use the rewritten URL for prefetching when you submit a [prefetch cache](/help/en/edge-security-acceleration/esa/user-guide/warm-up-cache) job.

URL rewrite affects only the origin fetch and does not impact the internal process in ESA. The cache key is generated from the original URL to ensure consistent cache hits. The rewritten URL is used only for the origin fetch request that is sent to the origin server. This process keeps the external path the same while allowing for flexible internal adaptation.

### **Workflow**

1.  Check for a cache hit: When a user request reaches an ESA POP, ESA uses the original URL to find a cached resource. If a cache miss occurs, ESA executes the URL rewrite rule to rewrite the original URL into the target URL.
    
2.  Fetch from origin on a cache miss: ESA uses the rewritten URL to request the resource from the origin server. The origin server responds, and ESA caches the content. ESA uses the original URL as the cache key.
    
3.  Return cached content to the client: ESA returns the cached content to the client.
    

### **Execution order**

URL rewrite runs after the cache hit check but before the origin fetch request is sent. It is executed after origin server selection rules but before origin fetch request header modification rules. This ensures that the request path can be flexibly adjusted after the origin server is determined, without affecting subsequent header processing.

## **Configure URL rewrite rules**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Transform Rules**.
    
3.  Select the **Rewrite URL** tab. Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** area, set the conditions that the user request must match. For more information, see [Components of a rule expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Rewrite URL** area, configure the rewrite for the **Path** and **Query String**, and then click **OK**.
    
    **Object to rewrite**
    
    **Action**
    
    **Description**
    
    **Example**
    
    **Path**
    
    **Retain**
    
    Does not modify the original path.
    
    \-
    
    **Rewrite to...**
    
    **Static**
    
    Replace with a fixed path. It must start with `/`.
    
    `/new/path`
    
    **Dynamic**
    
    Uses an [expression](#13d7f43bb8j56) to dynamically generate the path.
    
    `concat("/v2", http.request.uri.path)`
    
    **Query String**
    
    **Retain**
    
    Does not modify the original query parameters.
    
    \-
    
    **Rewrite to...**
    
    **Static**
    
    Replace with static parameters. Do not include the `?` character.
    
    `version=new&type=api`
    
    **Dynamic**
    
    Uses an [expression](#13d7f43bb8j56) to dynamically generate the parameters.
    
    `concat("version=new&", http.request.uri.query)`
    

## **Configuration examples**

### **Example 1: Origin server path migration**

-   **Scenario**: Images are migrated from the `/images/` folder to the `/static/img/` folder on the origin server.
    
-   **Matching condition**: `starts_with(http.request.uri.path, "/images/")`
    
-   **Rewrite configuration**:
    
    -   **Object to rewrite**: Path
        
    -   **Operation**: Dynamic
        
    -   **Expression**: `regex_replace(http.request.uri.path, "^/images/", "/static/img/")`
        
-   **Result**:
    
    -   **User request**: `https://example.com/**images**/logo.png`
        
    -   **Origin fetch request**: `https://origin.com/**static/img**/logo.png`
        

### **Example 2: API version adaptation**

-   **Scenario**: All requests to the legacy API `/api/v1/` are automatically directed to the new version `/api/v2/` during origin fetch, and a version identifier parameter is appended.
    
-   **Matching condition**: `starts_with(http.request.uri.path, "/api/v1/")`
    
-   **Rewrite configuration**:
    
    -   **Objects to rewrite**: Path, Query String
        
    -   **Operation**: Dynamic
        
    -   **Path rewrite expression**: `regex_replace(http.request.uri.path, "^/api/v1/", "**/api/v2/**")`
        
    -   **Query string rewrite expression**: `concat("**api_version=v2**&", http.request.uri.query)`
        
-   **Polished result**:
    
    -   **User request**: `https://example.com/**api/v1**/users?limit=10`
        
    -   **Origin fetch request**: `https://origin.com/**api/v2**/users?**api_version=v2**&limit=10`
        

### **Example 3: Parameter standardization**

-   **Scenario**: Different clients use different parameter names, such as `userid` and `uid`. Unify them by rewriting them to the standard `user_id`.
    
-   **Matching condition**: `http.request.uri.query contains "userid="`
    
-   **Rewrite configuration**:
    
    -   **Object to rewrite**: Query String
        
    -   **Operation**: Dynamic
        
    -   **Expression**: `regex_replace(http.request.uri.query, "userid=", "user_id=")`
        
-   **Result**:
    
    -   **User request**: `https://example.com/profile?**userid**=123`
        
    -   **Origin fetch request**: `https://origin.com/profile?**user_id**=123`
        

### **Example 4: Path normalization**

-   **Scenario**: Standardize URL characters to correct input errors. For example, you can `remove consecutive slashes (such as // or ///) from a URL`.
    
-   **Matching condition**: `http.request.uri.path contains "//"`
    
-   **Rewrite configuration**:
    
    -   **Object to rewrite**: Path
        
    -   **Operation**: Dynamic
        
    -   **Expression**: `regex_replace(http.request.uri.path, "/+", "/")`
        
-   **Result**:
    
    -   **User request**: `https://example.com/path**//**to**///**resource`
        
    -   **Origin fetch request**: `https://origin.com/path**/**to**/**resource`
        

### **Example 5: Delete all query parameters**

-   **Scenario**: For certain static resources, remove all query parameters to improve the processing efficiency of the origin server. For example, you can remove the query string from all URIs that end with `.css`.
    
-   **Matching condition**: `ends_with(http.request.uri.path, ".css")`
    
-   **Rewrite configuration**:
    
    -   **Object to rewrite**: Query String
        
    -   **Operation**: Static. Leave the content field empty.
        
-   **Result**:
    
    -   **User request**: https://example.com/style.css**?version=1.2.3**
        
    -   **Origin fetch request**: `https://origin.com/style.css`
        

### **Example 6: Simplify dynamic paths**

-   **Scenario:** Shorten long paths that contain redundant numbers or code. For example, ``delete all occurrences of <code data-tag="code" id="9a285905069nu">123</code> and the subsequent digit sequences from the `/example/` path.``
    
-   **Matching condition:** `http.request.uri matches "^/example/(.*)123[0-9]+(.*)$"`
    
-   **Rewrite configuration:**
    
    -   **Object to rewrite**: Path
        
    -   **Operation**: Dynamic
        
    -   **Expression**: `regex_replace(http.request.uri,"^/example/(.*)123[0-9]+(.*)$","/example/$1$2")`
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6154164671/p1031135.png)
    
-   **Result:**
    
    -   **User request**: `https://example.com/example/tool**12300341**features`
        
    -   **Origin fetch request**: `https://example.com/example/toolfeatures`
        

## **Related references**

### **Notes**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).

### **Expression reference**

**Note**

The variables and functions listed here are for reference only. For more information about expressions, see [Components of a rule expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).

#### **Common variables**

**Variable**

**Description**

**Example**

`http.request.uri.path`

Request path

`/api/user`

`http.request.uri.query`

Query string. Does not include the `?` character.

`id=123&type=user`

`http.request.uri`

Full URI (path + query)

`/api/user?id=123`

#### **Common functions**

**Function**

**Description**

**Example**

`concat(str1, str2, ...)`

Concatenates multiple strings.

`concat("/v2", http.request.uri.path)`

`regex_replace(text, pattern, replacement)`

Finds and replaces text using a regular expression.

`regex_replace(http.request.uri.query, "userid=", "user_id=")`

`starts_with(text, prefix)`

Checks if a string starts with a specified prefix.

`starts_with(http.request.uri.path, "/images/")`

`ends_with(text, suffix)`

Checks if a string ends with a specified suffix.

`ends_with(http.request.uri.path, ".html")`
