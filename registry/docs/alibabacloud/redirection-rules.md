If the storage path of resources on your origin server changes but the request URL stays the same, you can configure redirect rules on Edge Security Acceleration (ESA) points of presence (POPs). These rules match the origin path and redirect the request URL to a destination URL. This reduces the number of origin requests and improves client access performance.

## **How it works**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7687173771/CAEQQRiBgMC1p5v_vBkiIGM3Mzg4M2Y5NWQ2NDQ1Yzg4YzQyYjc2Y2IzMGYwZGRl4216812_20240222171329.374.svg)

Redirect rules are described as follows:

1.  After you configure a redirect rule on an ESA POP, a client sends a request to access a resource.
    
2.  The ESA POP returns a redirect status code, such as 301 or 302, to the client. The HTTP header includes the destination URL.
    
3.  After the client receives the response, it sends a new request to the URL in the Location header from the ESA POP to access the resource.
    

## ESA**\-supported redirect status codes and common scenarios**

**Status code**

**Meaning**

**Processing method**

**Common scenarios**

301

Moved Permanently

The GET method is unchanged. Other methods might change to GET.

The requested resource has been permanently moved to the new URL specified in the Location header. Search engines update the link.

302

Found

The GET method is unchanged. Other methods might change to GET.

The page is temporarily unavailable. Search engines do not update the link.

303

See Other

The GET method is unchanged. Other methods are forced to change to GET. The request body is lost.

Used for page jumps after a PUT or POST request is complete to prevent repeated operations caused by page refreshes.

307

Temporary Redirect

The method and request body are unchanged.

The page is temporarily unavailable. If the site supports links or operations that use methods other than GET, this status code is better than 302.

308

Permanent Redirect

The method and request body are unchanged.

Permanently migrates resources. It forces the client to keep the original request method and request body. This is useful for scenarios that require semantic consistency, such as website refactoring or API migration.

## Procedure

After you add a redirect rule, when a user sends a resource access request, ESA matches and executes the rules in order of [priority](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/#29cc23f5ebozm) and returns the result.

1.  In the ESA console, choose [Site Management](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Redirect Rules**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, set the request features to match. For more information, see [Components of a rule expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Single Redirect** section, set Type to **Static**, enter the **URL**, and select a **Status Code**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5961653471/p833583.png)
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **Type**
    
    Static
    
    To redirect to a fixed URL, select **Static** and set the destination URL to a fixed string. For example, enter `https://test.example.com/image/1.jpg?test=123` for **URL**.
    
    Dynamic
    
    To dynamically modify the original URL, select **Dynamic** and set the destination URL to an [expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/). For example, enter `concat("https://www.example.com", http.request.uri.path)` for **Expression**. This replaces the hostname in the request URL with a new domain name but keeps the URL path.
    
    **Status Code**
    
    The response status code for the redirection. Valid values are 301 (default), 302, 303, 307, and 308. For more information, see [ESA-supported redirect status codes and common scenarios](#e8554c819a7sj).
    
    **Preserve query string**
    
    Specifies whether to carry over the query parameters from the original request to the destination URL. This feature is disabled by default, which means the query parameters from the original request are not carried over after redirection.
    
    If you enable **Preserve query string**:
    
    -   If the request URL contains a query string, it overwrites the query string in the redirect URL.
        
    -   If the request URL does not contain a query string, the query string in the redirect URL is used.
        
    
    For configuration examples, see [Configuration examples](#b25db1c736px0).
    
6.  Click **OK**.
    

## **Configuration examples**

### **Example where the operation type is static**

#### **Scenario 1**

-   Request contains query string: No
    
-   Redirect URL contains query string: Yes
    
-   Preserve query string setting: Enabled/Disabled
    
-   Sample request URL: `http://test.example.com/1.jpg`
    
-   Sample configured redirect URL: `http://test.example.com/image/1.jpg?test=123`
    
-   Sample actual redirect Location: `http://test.example.com/image/1.jpg?test=123`
    
-   Note: If the original request has no query parameters, the final Location always retains the query string from the configured URL, regardless of whether the preserve setting is enabled.
    

#### **Scenario 2**

-   Request contains query string: Yes
    
-   Redirect URL contains query string: Yes
    
-   Preserve query string setting: Enabled
    
-   Sample request URL: `http://test.example.com/1.jpg?test=321`
    
-   Sample configured redirect URL: `http://test.example.com/image/1.jpg?test=123`
    
-   Sample actual redirect Location: `http://test.example.com/image/1.jpg?test=321`
    
-   Note: When the preserve setting is enabled, only the query string from the original request is retained. The query string from the configured URL is ignored.
    

#### **Scenario 3**

-   Request contains query string: Yes
    
-   Redirect URL contains query string: Yes
    
-   Preserve query string setting: Disabled
    
-   Sample request URL: `http://test.example.com/1.jpg?test=321`
    
-   Sample configured redirect URL: `http://test.example.com/image/1.jpg?test=123`
    
-   Sample actual redirect Location: `http://test.example.com/image/1.jpg?test=123`
    
-   Note: When the preserve setting is disabled, only the query string from the configured URL is retained. The query string from the original request is ignored.
    

#### **Scenario 4**

-   Request contains query string: Yes
    
-   Redirect URL contains query string: No
    
-   Preserve query string setting: Enabled
    
-   Sample request URL: `http://test.example.com/1.jpg?test=321`
    
-   Sample configured redirect URL: `http://test.example.com/image/1.jpg`
    
-   Sample actual redirect Location: `http://test.example.com/image/1.jpg?test=321`
    
-   Note: When the preserve setting is enabled, the query string from the original request is automatically appended to the configured URL, even if the configured URL has no query parameters.
    

#### **Scenario 5**

-   Request contains query string: Yes
    
-   Redirect URL contains query string: No
    
-   Preserve query string setting: Disabled
    
-   Sample request URL: `http://test.example.com/1.jpg?test=321`
    
-   Sample configured redirect URL: `http://test.example.com/image/1.jpg`
    
-   Sample actual redirect Location: `http://test.example.com/image/1.jpg`
    
-   Note: When the preserve setting is disabled, the query string from the original request is discarded. Only the configured URL is returned.
    

### **Example of a dynamic operation type**

#### **Scenario 1**

-   Preserve query string setting: Disabled
    
-   Sample request URL: `https://test.example.com/image/1.jpg?test=123`
    
-   Function expression: `concat("https://www.example.com", http.request.uri.path)`
    
-   Sample actual redirect Location: `https://www.example.com/image/1.jpg`
    
-   Note:
    
    -   When the setting is disabled, only the path part (`/image/1.jpg`) is retained. The query string from the original request (`?test=123`) is ignored.
        
    -   The function expression only joins the domain name and path. It does not process query parameters.
        

#### **Scenario 2**

-   Preserve query string setting: Enabled
    
-   Sample request URL: `https://test.example.com/image/1.jpg?test=123`
    
-   Function expression: `concat("https://www.example.com", http.request.uri.path)`
    
-   Sample actual redirect Location: `https://www.example.com/image/1.jpg?test=123`
    
-   Note:
    
    -   When the setting is enabled, the query string from the original request is automatically appended to the generated URL, even if the function expression does not explicitly handle query parameters.
        
    -   The function expression only handles path joining. The system automatically appends the query string based on the setting.
        

#### **Scenario 3**

-   Preserve query string setting: Enabled
    
-   Sample request URL: `https://www.example.com/image-flower-20250816-1.html?src=cdn`
    
-   Function expression: `wildcard_replace(http.request.full_uri, "https://www.example.com/image-*", "https://www.example.com/${1}")`
    
-   Sample actual redirect Location: `https://www.example.com/flower-20250816-1.html?src=cdn`
    
-   Note:
    
    -   When the setting is enabled, the system automatically appends the query string from the original request, such as `?src=cdn`, to the end of the destination URL generated by the function expression.
        
    -   The function expression only needs to handle the path rewrite and joining. It does not need to explicitly process query parameters. The system automatically passes through the query string based on the setting.
        

#### **Scenario 4**

-   Preserve query string setting: Disabled
    
-   Sample request URL: `https://www.example.com/index.html?place=garden&date=20250816`
    
-   Function expression: `wildcard_replace(http.request.full_uri, "https://www.example.com/index.html?place=garden&date=*", "https://www.example.com/flower-${1}-1.html")`
    
-   Sample actual redirect Location: `https://www.example.com/flower-20250816-1.html`
    
-   Note:
    
    -   When the setting is disabled, the system does not automatically preserve the query string from the original request. The destination URL is generated entirely by the function expression. The original parameters, such as `place=garden`, are used only for rule matching. The `*` matches the value after `date`, which is then used as `${1}` in the rewrite.
        
    -   The final redirect URL does not include the original query parameters, which aligns with the expected static redirect logic.
        

## **Availability**

**Feature**

**Entrance**

**Pro**

**Premium**

**Enterprise**

Number of rules

10

25

50 items

125 items

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
