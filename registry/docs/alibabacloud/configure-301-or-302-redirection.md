The 301/302 redirection feature supports HTTP 301 and 302 status codes that are returned by the origin server. All features that are supported by the HTTP 302 status code in this topic are supported by the HTTP 301 status code. After you configure 301/302 redirection, points of presence (POPs) process the HTTP 301 or 302 status code that is returned by the origin server instead of returning the status code to clients. This simplifies request processing and accelerates content delivery.

## Prerequisites

-   301/302 redirection is used on the origin server.
    
-   The permissions to configure 301/302 redirection have been obtained. By default, this is unavailable to external users. To request permissions, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    

## Background information

301 and 302 are HTTP status codes, which indicate that an existing resource is relocated and the request failed to access the resource. In most cases, servers add the Location header to the response header to resolve this issue. After a client receives a response that carries the HTTP 301 or 302 status code and the Location header, the request is redirected to the address that is specified by the Location header to retrieve the resource.

## How it works

If a POP redirects a request to an origin server and receives HTTP status code 301 or 302 from the origin server, the POP processes the status code. The request is redirected to the address that is specified by the Location header returned from the origin server to retrieve the resource. In this case, HTTP status code 301 or 302 is not returned to the client.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4245535671/CAEQTxiBgIDrxcGd2BkiIGE1NTBlZGMyZGQzNTRjZjc4ZWU2MGJlMjVkYzIxYTMw4024004_20231007142343.234.svg)

1.  A user requests `http://example.com/examplefile.txt` from a POP.
    
2.  The requested file is not cached on the POP. The POP redirects the request to the origin server.
    
3.  The origin server receives the request and returns the HTTP 301 or 302 status code. The response header carries the Location header that specifies the address `http://www.example.org/examplefile.txt`.
    
4.  The POP receives the response and redirects the request to `http://www.example.org/examplefile.txt`.
    
5.  The POP retrieves and caches the file.
    
6.  The POP returns the retrieved file to the user.
    

If other users request `http://example.com/examplefile.txt`, the requested file is served directly from the POP.

## Usage notes

Before you configure 301/302 redirection for a domain name, check whether an origin host is configured for the domain name. For more information, see [Configure an origin host](/help/en/edge-security-acceleration/dcdn/user-guide/configure-the-origin-host#task-2329891).

-   If an origin host is not configured for the domain name: When the origin server returns HTTP status code 301 or 302 and the Location header that specifies a URL to the POP, the request is redirected to the URL that is specified by the Location header. The value of the Host header in the request is the domain name that is specified by the Location header.
    
-   If an origin host is configured for the domain name: When the origin server returns HTTP status code 301 or 302 and the Location header that specifies a URL to the POP, the value of the Host header in the request is the Host header that is configured for the accelerated domain name. By default, the Host header value is the accelerated domain name. If you use the domain name that is specified by the Location header as the value of the Host header in the origin request, an error occurs. If you want DCDN to support this scenario, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
    
-   The Location header that is returned from the origin server can be in the following formats:
    
    -   Location: `http://www.example.net/index.html`. The POP redirects the request to the full URL specified by the Location header.
        
    -   Location: `//www.example.net/index.html`. The POP redirects the request to the URL that includes the protocol that the original request uses and the value of the Location header.
        
    -   Location: `/index.html`. The POP redirects the request to the URL that includes the protocol and domain name that the original request uses and the value of the Location header.
        

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name that you want to manage and click **Configure**.
    
4.  In the left-side navigation tree of the domain name, click **Origin Fetch**.
    
5.  On the **Origin Fetch** tab, find **301/302 Redirection**.
    
6.  Turn on the **301/302 Redirection** switch.
    
7.  Click **Modify** and configure the parameters according to the following table.
    
    **Parameter**
    
    **Description**
    
    **Maximum Number of Redirects**
    
    Specify the maximum number of times that a POP can redirect to the URL that is specified by the Location header for each request. If the maximum value is exceeded, HTTP status code 301 or 302 is returned to the user. Valid values: 1 to 5. Default value: 2.
    
    **Note**
    
    The maximum number of 301/302 redirects determines the number of origin requests that can be redirected to the origin server by a POP.
    
    Maximum number of origin requests = Maximum number of 301/302 redirects + 1. In this case, the default maximum number of origin requests is 3. Valid values: 2 to 6.
    
    **Retention Request Parameters**
    
    -   **Yes**: In 301/302 redirects, the parameters in requests that are redirected to the origin server are retained. The request parameters are passed to the server specified by the Location header.
        
    -   **No**: In 301/302 redirects, the parameters in requests that are redirected to the origin server are not retained.
        
    
    **Retain Request Headers**
    
    -   **Yes**: In 301/302 redirects, the headers in requests that are redirected to the origin server are retained. The header parameters are passed to the server specified by the Location header.
        
    -   **No**: In 301/302 redirects, the headers in requests that are redirected to the origin server are not retained.
        
    
8.  Click **OK**.
