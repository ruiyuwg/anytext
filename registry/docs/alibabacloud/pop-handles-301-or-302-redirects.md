The 301/302 redirect follow feature supports HTTP 301 and 302 status codes from the origin server. Edge Security Acceleration (ESA) points of presence (POPs) handle these status codes on behalf of users, reducing data interactions and speeding up resource fetch.

## Prerequisites

The origin server uses HTTP 301 and 302 status codes to redirect requests.

## What are 301 and 302

HTTP 301 indicates a permanent redirect, while HTTP 302 indicates a temporary redirect. Both status codes include a Location header directing clients to the new resource address. When a client receives response with 301 or 302 status code, it redirects the request to the new address to access the resource.

## How 301/302 redirect works

When an ESA POP receives an HTTP 301 or 302 status code from the origin server, it processes the response for the user. The POP directly fetches the resource from the address specified by the Location header in the HTTP 301 or 302 response from the origin server, instead of returning the HTTP 301 or 302 status code to the user.

The following diagram shows the process:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8708406671/CAEQPhiBgIDrv8LPtRkiIGJlM2MxZDRhNDFlMjRiOTliYjcwYTEwNTY0YjEwYjJi4024004_20231007142343.234.svg)

1.  A user sends a request to an ESA POP to access the `http://example.com/examplefile.txt` file.
    
2.  The file is not cached on the ESA POP. POP requests the file from the origin server.
    
3.  When the origin server receives the request, it returns the HTTP 301 or 302 status code to the ESA POP, and the Location header points to `http://www.example.org/examplefile.txt`.
    
4.  After the ESA POP receives the response from the origin server, it directly sends a request to the address specified by the Location header: `http://www.example.org/examplefile.txt`.
    
5.  After the ESA POP retrieves the required resource, it caches the resource.
    
6.  The ESA POP returns the resource to the user.
    

If a subsequent user requests the `http://example.com/examplefile.txt` file, the request hits the cache on the ESA POP and the file is directly returned to the user.

## Supported header formats

-   The Location header in the HTTP 301 or 302 response that the origin server returns to the ESA POP supports the following two formats:
    
    -   Standard domain name format: `http://www.example.net/index.html`
        
    -   IPv4 address format: `http://10.10.10.10/index.html`
        
-   Regardless of whether the original request header is retained, the Host header remains unchanged during a redirect follow request.
    

## Set up redirect rules

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target website.
    
2.  In the left navigation pane, choose **Rules** > **Origin Rules**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, set the request features to match. For more information about how to configure rules, see [Rule expression components](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Then execute...** section, click **Configure** beside the feature, turn on **Maximum Redirects**, and set up the feature.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2871377471/p953257.png)
    
    -   **Maximum Redirects**: The maximum number of times that an ESA POP can follow the Location header to redirect requests during a single user request.
        
        If this limit is exceeded, the HTTP 301/302 status code is directly returned to the user. Valid values: 1 to 5. Default value: 2.
        
        **Note**
        
        The maximum redirects also determine the limit for how many times a POP can redirect fetch requests to the origin server.
        
        This limit refers to the number of times an ESA POP can access the origin during a single user request.
        
        It is calculated by adding one to the maximum number of 301/302 redirects. The default maximum is 3, with valid values ranging from 2 to 6.
        
    -   **Original Request Parameters**: Specifies whether the feature retains the original request parameters when forwarding the redirected request to the origin server.
        
    -   **Original Request Headers**: Specifies whether the feature retains the original request Header when forwarding the redirected request to the origin server.
        
    -   **Target Host**: When ESA POP initiates a redirect follow request, the value of the Host header follows these rules:
        
        -   The domain name configured here is used as the Host header value regardless of the format of the origin server in the Location header.
            
        -   If the origin in the Location header of the server response is a domain name, the Host header value will be the same as the origin's domain name.
            
        -   If the origin in the Location header of the server response is an IP address, the Host header value is the same as the Host header value from the original request.
            

6.  Click **OK**.
    

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
