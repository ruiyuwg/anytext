Configure remote authentication to forward user requests to your authentication server for validation.

## Feature overview

Remote authentication is similar to URL signing. Both protect resources from unauthorized access. Only authorized users can retrieve resources from POPs. Key differences between URL signing and remote authentication:

-   URL signing: After you apply authentication rules to POPs, the POPs complete the authentication process.
    
-   Remote authentication: You specify a self-managed authentication server. After POPs receive client requests, they redirect the requests to the specified authentication server.
    

The following figure shows how remote authentication works.![远程鉴权交互图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2737034861/p245797.png)

**No.**

**Description**

1

A client sends a request to a POP. The request carries parameters that are used for authentication. Examples:

-   Original request URL: `https://example.com/123/test.txt?key=xxxxxxxxxx`
    
-   The header in the original request: `test=123`
    

2

The POP receives the request, and then redirects the request to the authentication server. You can specify whether the request is processed by the POP before the request is redirected to the authentication server. Examples:

-   URL of the authentication server: `https://192.0.2.1/auth`
    
-   Configurations of the remote authentication feature in the Alibaba Cloud CDN console: **retain all request parameters** and **retain all request headers**.
    
-   The URL of the request that is forwarded by CDN to the authentication server: `https://192.0.2.1/auth?key=xxxxxxxxxx`
    
-   The header in the request that is forwarded by CDN to the authentication server: `test=123`
    

3

The authentication server checks the parameters in the request, and then returns the authentication result to the POP.

4

The POP performs the corresponding action based on the authentication result, and then returns data to the client.

Examples:

-   Example 1: The request passes the authentication. The POP returns the requested resources to the client.
    
-   Example 2: The request fails the authentication. The POP returns the HTTP 403 status code to the client.
    
-   Example 3: The request fails the authentication. The POP throttles requests that are sent from the client.
    
-   Example 4: The authentication process times out. The POP performs the specified action, such as allow or reject.
    

## Usage notes

-   After you configure remote authentication, requests that fail the authentication can still reach POPs. However, POPs reject the requests and return an HTTP 403 status code. The requests are recorded in CDN logs.
    
-   In remote authentication, user requests are forwarded to the specified authentication server, and the authentication server verifies the user requests. You are charged for data transfer that is generated when POPs block malicious requests. If clients request resources over HTTPS, you are also charged for HTTPS requests.
    

## Procedure

1.  Log on to the [CDN console](https://cdn.console.alibabacloud.com).
    
2.  In the left navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the target domain name and click **Manage** in the **Actions** column.
    
4.  In the domain's navigation pane, click **Access Control**.
    
5.  Click the **Remote Authentication** tab.
    
6.  Turn on **Remote Authentication** and configure the parameters as prompted.
    
    **Note**
    
    After you enable remote authentication, all user requests are redirected to the authentication server. If a large number of requests are sent to POPs, make sure that the authentication server can handle traffic spikes without compromising the performance.
    
    **Parameter**
    
    **Description**
    
    **Authentication Server Address**
    
    The address of the authentication server. This address must be publicly accessible. CDN checks the specified server address and the address format.
    
    -   **Supported formats**
        
        HTTP and HTTPS addresses are supported. Examples:
        
        -   http://example.com/auth
            
        -   https://example.com/auth
            
        -   http://192.0.2.1/auth
            
        -   https://192.0.2.1/auth
            
        
    -   **Address requirements**
        
        The server address cannot contain 127.0.0.1 or localhost. Otherwise, the server address is considered invalid.
        
    
    **Request method**
    
    The request method that is supported by the authentication server. Valid values: **GET**, **HEAD**, and **POST**. Default value: GET.
    
    **File Types**
    
    -   **All**: The authentication server checks all file types.
        
    -   **Specified**: The authentication server checks only the specified file types.
        
        -   You can specify one or more file types. Separate multiple file types with vertical bars (|). Example: mp4|flv.
            
        -   File types are case-sensitive. For example, .jpg and JPG are considered different file types.
            
    
    **URL Signing Parameters**
    
    **Parameters to Retain**
    
    The URL parameters that you want the authentication server to check. Valid values: **Retain All Parameters**, **Retain Specified Parameters**, and **Delete All URL Parameters**.
    
    -   If you specify multiple parameters that you want to retain, separate the parameters with vertical bars (|). Example: user|token.
        
    -   Parameters are case-sensitive. For example, key and KEY are considered different parameters.
        
    
    **Custom Parameters**
    
    The parameters that you want to add to the URLs of requests before the requests are redirected to the authentication server. You can specify key-value pairs or select the variables that are provided by CDN.
    
    -   When you specify key-value pairs, take note of the following rules:
        
        -   Separate key-value pairs with vertical bars (|). Example: token=$arg\_token|vendor=ali\_cdn.
            
        -   Values are case-sensitive. For example, key and KEY are considered different values.
            
    -   If you use preset variables, the values of the variables are added to requests that are sent to the POP before the requests are redirected to the authentication server.
        
        For example, if you select the $http\_host variable, host=$http\_host is added to the URLs of requests before the requests are redirected to the authentication server. In this example, host is the value of the Host request header. For more information about the variables, see [Variables](#section-hn0-h9w-g6l).
        
    
    **Parameters to Retain in Request Headers**
    
    **Request Headers to Retain**
    
    The request headers that you want the authentication server to check. Valid values: **Retain All Request Headers**, **Retain Specified Request Headers**, and **Delete All Request Headers**.
    
    -   If you specify multiple request headers that you want to retain, separate the request headers with vertical bars (|). Example: user\_agent|referer|cookies.
        
    -   Request headers are not case-sensitive. For example, http\_remote\_addr and HTTP\_Remote\_Addr are considered the same request header.
        
    
    **Note**
    
    If you select Retain All Request Headers, POPs delete the Host header from requests. If you want to retain the Host header in requests, you can select Retain Specified Request Headers or configure Custom Parameters. The Host header in requests that are redirected to the authentication server specifies the accelerated domain name. Therefore, POPs automatically delete the Host header from requests. Otherwise, the authentication server may fail to identify these requests and return errors, such as the HTTP 404 status code, which indicates authentication failures.
    
    **Custom Parameters**
    
    The parameters to add to request headers before they are redirected to the authentication server. You can specify key-value pairs or select variables provided by CDN.
    
    -   When you specify key-value pairs, take note of the following rules:
        
        -   Separate multiple request headers with vertical bars (|). Example: User-Agent=$http\_user\_agent|vendor=ali\_cdn.
            
        -   Request headers are not case-sensitive. For example, http\_remote\_addr and HTTP\_Remote\_Addr are considered the same request header.
            
    -   If you use preset variables, the values of the variables are added to requests that are sent to the POP before the requests are redirected to the authentication server.
        
        For example, if you select the $http\_host variable, host=$http\_host is added to the URLs of requests before the requests are redirected to the authentication server. In this example, host is the value of the Host request header. For more information about the variables, see [Variables](#section-hn0-h9w-g6l).
        
    
    **HTTP Status Code to Return**
    
    **Passes Authentication**
    
    **Description**
    
    This parameter specifies the HTTP status code that is returned by the authentication server if a request passes the authentication. You can specify multiple status codes. Separate multiple status codes with commas (,).
    
    **Example**
    
    If you set this parameter to `200,206`, the authentication server returns the HTTP status code `200` or `206` to POPs for client requests that pass the authentication.
    
    **Exception processing**
    
    If the HTTP status code that is returned by the authentication server does not indicate whether a request passes or fails the authentication, the POP allows the request. This ensures that no request is blocked due to exceptions.
    
    **Fails Authentication**
    
    **Description**
    
    This parameter specifies the HTTP status code that is returned by the authentication server if a request fails the authentication. You can specify multiple status codes. Separate multiple status codes with commas (,).
    
    **Example**
    
    If you set the HTTP status code to `400,403`, the authentication server returns the HTTP status code `400` or `403` to POPs for client requests that fail the authentication.
    
    **Exception processing**
    
    If the HTTP status code that is returned by the authentication server does not indicate whether a request passes or fails the authentication, the POP allows the request. This ensures that no request is blocked due to exceptions.
    
    **Allow Other Status Codes**
    
    -   **Yes**: If the HTTP status code that is returned by the authentication server does not indicate whether a request passes or fails the authentication, the POP allows the request. This ensures that no request is blocked due to exceptions.
        
        **Note**
        
        Examples:
        
        -   If the HTTP status code specified for requests that pass the authentication is 200, but the authentication server returns the HTTP 201 status code for a request, the POP allows the request.
            
        -   If the HTTP status code specified for requests that fail the authentication is 403, but the authentication server returns the HTTP 404 status code for a request, the POP allows the request.
            
        
    -   **No**: If the HTTP status code that is returned by the authentication server does not indicate whether a request passes or fails the authentication, the POP rejects the request.
        
    
    **Response if authentication Fails**
    
    **Custom HTTP Status Code**
    
    The HTTP status code that is returned from POPs to clients after the POPs receive an HTTP status code indicating that the request fails the authentication from the authentication server.
    
    If you set Custom HTTP Status Code to 403, the POP returns the HTTP 403 status code to the user for requests that fail the authentication.
    
    **Authentication Timeout Settings**
    
    **Timeout**
    
    The timeout period starts when the POP redirects a request to the authentication server. The timeout period ends when the POP receives the authentication result from the authentication server. The timeout period is measured in milliseconds. You can set the timeout period to up to 3,000 milliseconds.
    
    **Action After Timeout**
    
    The action that you want the POPs to perform on a request when the authentication of the request times out. Valid values: **Allow** and **Reject**.
    
    -   **Allow**: When the authentication of a request times out, the POP allows the request.
        
    -   **Reject**: When the authentication of a request times out, the POP rejects the request, and then returns the HTTP status code that is specified in **Custom HTTP Status Code** to the client.
        
    
7.  Click **OK**.
    
    After remote authentication is configured, you can modify the settings of remote authentication or disable remote authentication on the **Remote Authentication** tab.
    

## Variables

When you add custom parameters, you can select the variables that are provided by CDN. The following table describes the variables.

**Variable**

**Description**

$http\_host

The value of the Host header.

$http\_user\_agent

The value of the User-Agent header.

$http\_referer

The value of the Referer header.

$http\_content\_type

The value of the Content-Type header.

$http\_x\_forward\_for

The value of the X-Forwarded-For header.

$remote\_addr

The client IP address.

$scheme

The protocol of the request.

$server\_protocol

The protocol version of the request.

$uri

The original URI of the request.

$args

The query string of the request URL. The query string does not include the question mark (?).

$request\_method

The request method.

$request\_uri

The content of uri+'`?`'+args.

## **FAQ**

-   [Can I enable the URL signing and remote authentication features of Alibaba Cloud CDN at the same time?](/help/en/cdn/user-guide/access-control-faq#fa50904b4dk03)
    
-   [Can I use the internal IP address of an authentication server in remote authentication?](/help/en/cdn/user-guide/access-control-faq#c22f533eccjaw)
    
-   [Why does Alibaba Cloud CDN allow a request even if the status code that is returned by the authentication server does not indicate success or failure?](/help/en/cdn/user-guide/access-control-faq#5cf6bba1e2kal)
    
-   [Does Alibaba Cloud CDN allow all requests if the remote authentication server fails?](/help/en/cdn/user-guide/access-control-faq#94b82b3e85w4k)
    

## Related API

[BatchSetCdnDomainConfig](/help/en/cdn/api-batchsetcdndomainconfig#doc-api-Cdn-BatchSetCdnDomainConfig)
