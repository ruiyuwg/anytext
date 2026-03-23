HTTP response headers are a component of the header section in response messages that are transmitted over HTTP. HTTP response headers deliver specific parameters to clients to manage caching. You can configure HTTP response headers and allow DCDN to return the configured response headers. This way, specific features, such as cross-origin resource sharing (CORS), can be implemented.

## Background information

HTTP response headers can be used to manage caching of content that is transmitted over HTTP. When a client requests a resource, a point of presence (POP) returns HTTP response headers to the client, which allow the client and POP to cache the response under specific conditions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5617721571/CAEQQRiBgIDtuOWAvhkiIDgxMmI4YWE5MzM0YjQ3ZDhhMTJkNTMxMDMyN2YwZGEw4019958_20231215163116.534.svg)

**Note**

-   The configuration of an HTTP response header applies to a domain name. After you configure an HTTP response header, the configuration of the response header takes effect for responses to all requests destined for your domain name.
    
-   An HTTP response header affects only the response behavior of clients, such as browsers. An HTTP response header does not affect the caching behavior of DCDN POPs.
    

## Scenarios

-   **Notify clients of the type of the resource that is returned.** For example, you can add the `Content-Type: text/html` response header to inform clients that the returned file is in the HTML format.
    
-   **Enable cross-origin resource sharing (CORS)**: When a user requests resources from a DCDN-accelerated domain name, you can add the Access-Control-Allow-Origin header to the responses to enable CORS. For more information, see [Configure CORS](/help/en/edge-security-acceleration/dcdn/user-guide/configure-cross-domain-resource-sharing).
    
    In addition, DCDN allows you to enable authentication on cross-origin requests based on custom CORS rules to regulate access control for CORS.
    
-   **Specify custom response behavior:** You can add or modify custom headers to implement specific features or track responses. For example, you can adjust the response content and format returned to clients based on your business requirements.
    

## **Usage notes**

If multiple rules are configured for the same header, the rules are executed from top to bottom in the configuration list. Examples:

-   Configuration 1: Add the `cache-control: max-age=3600` response header.
    
-   Configuration 2: Add the `cache-control: no-cache` response header.
    

In the preceding combined configurations, Configuration 2 takes effect.

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Caching**.
    
5.  On the **Custom Outgoing Response Header** tab, click **Add**. Then configure the HTTP header according to the following table.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4080458471/p749319.png)
    
    **Parameter**
    
    **Description**
    
    **Operation**
    
    You can add, delete, change, or replace specific response headers.
    
    **Response Header**
    
    Select a response header. For more information, see [Response headers](#section-m6r-e3a-pxb).
    
    **Description**
    
    The description of the HTTP header that you select.
    
    **Response Header Name**
    
    If you set **Response Header** to **Custom Header**, you need to specify a header name based on the following rules:
    
    -   The name must contain letters, digits, and hyphens (-).
        
    -   The name must be 1 to 100 characters in length.
        
    
    **Header Value**
    
    The value of the response header. For more information, see [Response headers](#section-m6r-e3a-pxb).
    
    **Allow Duplicates**
    
    -   **Yes**: Duplicate headers are allowed. The header that is returned from the origin server and the header that is added to the response are returned to the client.
        
    -   **No**: Duplicate headers are not allowed. The header that is returned from the origin server is overwritten by the header that is added to the response.
        
    
    **Rule Condition**
    
    Rule conditions can identify parameters in a request to determine whether a configuration applies to the request.
    
    -   **Do not use conditions**
        
    -   Select the configured rule conditions in [Rules engine](/help/en/cdn/user-guide/rules-engine).
        
    
    **CORS**
    
    Default value: Disable. You can configure the CORS parameter only if you set **Operation** to Add and **Response Header** to Access-Control-Allow-Origin.
    
    -   **Enable**: POPs check the Origin header in user requests and specify a value for the Access-Control-Allow-Origin header based on the CORS rules.
        
    -   **Disable**: POPs do not check the Origin header in user requests. In this case, POPs return the configured value of Access-Control-Allow-Origin.
        
    
    For more information, see [CORS rules](#170b54382axvd).
    
6.  Click **OK**.
    
    In the custom HTTP response header list, you can click **Modify** or **Delete** to modify or delete the HTTP header.
    

## **CORS rules:**

**Important**

The **Allow Duplicates** and **CORS** settings are mutually exclusive. If you set **Allow Duplicates** to Yes, the setting of **Yes** becomes invalid.

-   Wildcard pattern match: If you set the Access-Control-Allow-Origin header to an asterisk (\*), Access-Control-Allow-Origin:\* is returned regardless of whether user requests contain the Origin header or the value that is specified for the Origin header.
    
-   Exact match: You can specify one or more values for the Access-Control-Allow-Origin header. Separate multiple values with commas (,).
    
    -   If the Origin value of a request header is an exact match of one of the specified values, a response header with the destination origin is returned.
        
    -   If the value of the Origin header does not match any of the specified values, Access-Control-Allow-Origin is not returned.
        
-   Wildcard domain name match: If you set the Access-Control-Allow-Origin header to a wildcard domain name, the value of the Origin header is matched against the wildcard domain name.
    

For more information, see [Configure CORS](/help/en/edge-security-acceleration/dcdn/user-guide/configure-cross-domain-resource-sharing).

## Response headers

**Response header**

**Description**

**Example**

Custom Header

You can create a custom response header based on the following rules:

-   The name can contain letters, underscores (-), and digits.
    
-   The name must be 1 to 100 characters in length.
    

Test-Header

Content-Type

Specifies the type of the content that is returned to the client.

text/html

Cache-Control

Specifies the cache policy that the client uses for requests and responses.

no-cache

Content-Disposition

The default file name that is used when the retrieved content is saved as a file on the client.

examplefile.txt

Content-Language

Specifies the language intended for the audience.

en-US

Expires

Specifies the time when the response expires.

Wed, 21 Oct 2015 07:28:00 GMT

Pragma

The Pragma HTTP/1.0 general header is an implementation-specific header that may have various effects along the request-response chain. Pragma HTTP/1.0 is compatible with HTTP/1.1.

no-cache

Access-Control-Allow-Origin

Specifies a list of origins that are allowed to make cross-origin requests. You can use an asterisk (\*) as a wildcard character in the Header Value field to specify all domain names. You can also enter a specific domain name, such as `http://www.aliyun.com`.

**Note**

-   You can set Header Value to a wildcard character (\*) to specify all domain names.
    
-   You can configure one or more IP addresses, domain names, or combinations of IP addresses and domain names. Separate multiple values with commas (,).
    
-   If you do not use an asterisk (\*) as a wildcard character for this header, the value must start with http:// or https://.
    
-   Port numbers are supported.
    
-   Wildcard domain names are supported.
    

-   \*
    
-   http://www.aliyun.com
    
-   https://aliyun.com:8080,http://10.10.10.10
    
-   http://\*.aliyun.com
    

Access-Control-Allow-Methods

Specifies the request methods that you can use in cross-origin requests. You can specify one or more request methods. Separate multiple request methods with commas (,).

POST,GET

Access-Control-Allow-Headers

Specifies the header fields that you can use in cross-origin requests.

X-Custom-Header

Access-Control-Max-Age

Specifies how long the results of a preflight request can be cached. Unit: seconds.

600

Access-Control-Expose-Headers

Specifies the headers that can be exposed as part of the response.

Content-Length

Access-Control-Request-Method

Informs the server about which HTTP methods are used in the actual request. The Access-Control-Request-Method header is used by browsers when a preflight request is issued.

POST

Access-Control-Request-Headers

Informs the server about which HTTP headers are used in the actual request. The Access-Control-Request-Headers header is used by browsers when a preflight request is issued.

X-PINGOTHER

Access-Control-Allow-Credentials

Specifies whether credentials can be carried in CORS requests.

-   true: Yes.
    
-   Other values: No.
    

true

## **FAQ**

### Why is a CORS issue reported and the Access-Control-Allow-Origin response header not returned even if I have configured the response header?

#### **Possible causes**

1.  **Incorrect configuration:** The configuration is incorrect or does not take effect.
    
2.  **POP cache:** The POP cache is returned, but the cache does not contain the new response header that you added.
    
3.  **Origin server:** The CORS response headers that you configured in the DCDN console may conflict with the response headers that are returned from the origin server. In this case, you must make sure that the response header configurations between DCDN POPs and the origin server are the same.
    
4.  **Browser cache:** The cached response by the browser already expired.
    

#### **Solutions**

1.  **Verify the configurations:** Make sure that the DCDN configurations, especially the CORS response headers, are correct and in effect.
    
2.  **Clear the POP cache:** You can use the purge feature of DCDN to clear the cached content and then re-access the resource. For more information, see [Purge and prefetch resources](/help/en/edge-security-acceleration/dcdn/user-guide/refresh-and-prefetch-resources).
    
3.  **Check origin server settings**: Make sure that the response headers returned from the origin server do not conflict with the headers that you configured in the DCDN console. We recommend that you set the response headers returned from an origin server to be the same as those returned from POPs.
    
4.  **Clear the browser cache:** Clear the browser cache or use the private browsing mode to ensure that the browser obtains the updated response headers.
    
5.  **Contact technical support:** If the issue persists, contact DCDN technical support or submit a ticket.
