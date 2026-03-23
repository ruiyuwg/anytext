You can modify, delete, or add response headers from an origin server, such as `Cache-Control` and `Expires`. By controlling these headers, you can optimize cache policies, enhance security, and customize the user experience.

## **Background**

This feature modifies specified incoming response headers based on predefined rules. Response headers added using this feature take effect before the ESA server processes an object. If the response content is cacheable, these headers are stored in the cache along with the response. This behavior is different from that of [Modify outgoing response headers](/help/en/edge-security-acceleration/esa/user-guide/modify-outgoing-response-header). When you modify outbound response headers, headers are added or changed only after the ESA server processes the response and retrieves the complete response from the origin server or cache. The response is then immediately sent to the client.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7992828671/CAEQUBiBgMD9kr2I2RkiIGZjY2JjNDhmYjM1YjRkNzVhOWUzZWMwMzE2MTZlYzJk4018475_20230922151927.782.svg)

## **Procedure**

After you add a rule, when a user requests a resource, ESA matches and executes rules sequentially based on the [rule execution priority](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/#29cc23f5ebozm).

1.  In the ESA console, select [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the name of the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Transform Rules**.
    
3.  Click the **Modify Response Headers** tab. Then, choose **Origin to ESA**, click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, set the request conditions. For more information about how to configure rules, see [Components of a rule expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Modify Response Headers** section, you can select an **Operation**, enter a **Response Header Name** and a **Response Header Value**, and click **OK**.
    
    **Procedure**
    
    **Type**
    
    **Description**
    
    **Example**
    
    **Add**
    
    Static
    
    -   Adds the specified response header to the response sent to the client.
        
    -   If the response header already contains a header with the same name, the new header overwrites the existing one.
        
    
    To add a response header with the name `x-code` and the value `key1`, specify the following:
    
    -   **Response Header Name**: `x-code`
        
    -   **Response Header Value**: `key1`
        
    
    Dynamic
    
    The response header value can be set to an [expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
    To add a response header named `Client-Ip-Geo-Location` with the value `ip.geoip.country` to record the country or region of the client IP address, specify the following:
    
    -   **Response Header Name**: `Client-Ip-Geo-Location`
        
    -   **Response Header Value**: `ip.geoip.country`
        
    
    **Change**
    
    Static
    
    Changes the value of the specified response header in the response sent to the client.
    
    To modify the response header named `x-code` to the value `key2`, specify the following:
    
    -   **Response Header Name**: `x-code`
        
    -   **Response Header Value**: `key2`
        
    
    Dynamic
    
    The response header value can be set to an [expression](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
    To modify the response header named `Client-Ip-Geo-Location` to the value `ip.geoip.country`, changing the header value to the country or region of the client IP address, specify the following:
    
    -   **Response Header Name**: `Client-Ip-Geo-Location`
        
    -   **Response Header Value**: `ip.geoip.country`
        
    
    **Delete**
    
    Deletes all parameter values that match the **Response Header Name** from the response sent to the client, regardless of whether there are duplicate response header parameters.
    
    To delete the response header named `x-code`, specify the **Response Header Name**: `x-code`.
    
    **Note**
    
    -   The **Response Header Name** cannot start with `ali-` or `Ali-`.
        
    -   You can specify multiple values in the **Response Header Value** field. If you do, separate the values with commas (`,`).
        
    -   The delete operation works the same for both static and dynamic modes.
        
    -   The update operation modifies an existing response header. This operation takes effect only if a response header with the specified name exists in the original response.
        
    

## Response header parameters

**Response header parameter**

**Description**

**Example**

Custom

You can add custom response headers. The custom response header name must meet the following requirements:

-   It consists of uppercase letters, lowercase letters, hyphens (`-`), and digits.
    
-   It is 1 to 100 characters in length.
    

Test-Header

Cache-Control

Specifies the caching mechanism that client program requests and responses must follow.

no-cache

Content-Disposition

Specifies the default filename when the client program saves the requested content as a file.

examplefile.txt

Content-Type

Specifies the content type of the response object for the client program.

text/plain

Pragma

Pragma is a general header defined in HTTP/1.0. This header is typically used in server responses to define the client's caching behavior for files.

no-cache

Access-Control-Allow-Origin

Specifies which origins can access the resource. It is part of the cross-origin resource sharing (`CORS`, `Cross-Origin Resource Sharing`) mechanism, which allows a server to declare whether its resources can be accessed by a specified origin domain name. The value of this response header supports the following types:

-   **Wildcard character** `*****`: Using a wildcard character indicates that any origin can access the resource. This method is very loose and is suitable for public resources that can be accessed without authentication or authorization. However, use wildcard characters with caution in a production environment because they can introduce security risks, such as cross-site request forgery (CSRF) attacks.
    
-   **Single specified origin**: You can specify a specific origin domain name to allow only that origin to access the resource. For example, `http://example.com` or `https://api.example.com`. This requires that the request must come from the specified origin. Otherwise, it will be denied.
    

-   \*
    
-   http://www.aliyun.com
    

Access-Control-Allow-Methods

Specifies the allowed methods for cross-origin requests. Separate multiple methods with a comma (`,`).

POST,GET

Access-Control-Allow-Headers

Specifies the allowed fields for cross-origin requests.

X-Custom-Header

Access-Control-Expose-Headers

Specifies the custom headers that are allowed to be accessed.

Content-Length

Access-Control-Allow-Credentials

This response header indicates whether the response to the request can be exposed to the page.

-   true: Indicates that it can be exposed.
    
-   Other values: Indicates that it cannot be exposed.
    

true

Access-Control-Max-Age

Specifies the time in seconds that the client program can cache the result of a preflight request for a specific resource.

600

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
