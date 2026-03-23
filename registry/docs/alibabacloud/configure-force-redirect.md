Alibaba Cloud CDN provides the URL redirection feature that can redirect client requests to HTTP or HTTPS.

## Prerequisites

An SSL certificate is configured. For more information, see [Configure an SSL certificate](/help/en/edge-security-acceleration/dcdn/user-guide/configure-an-ssl-certificate#task-2339799).

## Scenarios

DCDN supports URL redirection in the following scenarios:

-   Accelerated domain names that have SSL certificates configured: You can enable 301 redirection to redirect HTTP requests between clients and DCDN points of presence (POPs) to HTTPS. Compared with HTTP, HTTPS provides reinforced protection. ![Verify the result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7581247061/p3707.png)
    
-   Security-insensitive applications: You can enable 301 redirection to redirect HTTPS requests between clients and DCDN POPs to HTTP.
    

By default, the force redirect feature uses the HTTP 301 status code. You can change the HTTP status code to 308. To change the HTTP status code, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex)

**HTTP status code**

**Message**

**Description**

**Use scenario**

301

Moved Permanently

GET requests remain unchanged. Requests that use other request methods are converted to GET.

Website refactoring.

308

Permanent Redirect

Both the request method and message body remain unchanged.

Website refactoring. This HTTP status code is suitable for requests that use request methods other than GET. (with non-GET links/operations)

## Procedure

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the domain name whose acceleration region you want to change and click **Configure**.
4.  In the left-side navigation tree of the domain name, click **HTTPS Settings**.
    
5.  In the **Force Redirect** section, click **Modify**.
    
6.  In the **Force Redirect** dialog box, select a redirect type.
    
    ![跟随方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2796254661/p495982.png)
    
    **Redirect Type**
    
    **Description**
    
    **Default**
    
    Both HTTP and HTTPS requests are supported.
    
    **HTTPS -> HTTP**
    
    Redirects client requests from HTTPS to HTTP.
    
    **HTTP -> HTTPS**
    
    Redirects client requests from HTTP to HTTPS to secure data transmission.
    
7.  Click **OK**.
