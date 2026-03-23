You can configure the URL redirection feature to forcibly redirect requests from clients to POPs to HTTPS.

## Prerequisites

An SSL certificate is configured. For more information, see [Configure an HTTPS certificate](/help/en/cdn/user-guide/configure-an-ssl-certificate#task-261642).

## Use case

For accelerated domain names for which SSL certificates are configured, you can enable URL redirection to redirect HTTP requests between clients and points of presence (POPs) to HTTPS. Compared with HTTP, HTTPS provides reinforced protection.![结果验证](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7581247061/p3707.png)

By default, the URL redirection feature uses the HTTP 301 status code. You can change the HTTP status code to 308. To change the HTTP status code, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).

**HTTP status code**

**Message**

**Description**

**Scenario**

301

Moved Permanently

GET requests remain unchanged. Requests that use other methods may be changed to GET requests.

Website refactoring.

308

Permanent Redirect

The request method and message body remain unchanged.

Website refactoring. This HTTP status code is suitable for requests that use request methods other than GET (with non-GET links/operations). (with non-GET links/operations)

## Procedure

1.  Log on to the [CDN console](https://cdn.console.alibabacloud.com).
    
2.  In the left navigation pane, click **Domain Names**.
    
3.  On the **Domain Names** page, find the target domain name and click **Manage** in the **Actions** column.
    
4.  In the domain's navigation pane, click **HTTPS**.
    
5.  In the **HTTP/S Redirect** section, click **Modify**.
    
6.  In the **HTTP/S Redirect** dialog box, Configure the **Redirect Type** parameter.
    
    ![强制跳转](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6294327671/p64228.png)
    
    **Redirect Type**
    
    **Description**
    
    **Default**
    
    HTTP and HTTPS requests are supported.
    
    **HTTPS -> HTTP**
    
    Redirects requests from clients to POPs to HTTP.
    
    **Warning**
    
    Do not [configure HSTS](/help/en/cdn/user-guide/configure-hsts) when HTTPS to HTTP direction is on. The combination creates a redirection loop and prevents access to resources.
    
    **HTTP -> HTTPS**
    
    Redirects requests from clients to POPs to HTTPS to secure data transmission.
    
7.  Click **OK**.
