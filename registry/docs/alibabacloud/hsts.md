By enabling HTTP Strict Transport Security (HSTS), you can force clients, such as browsers, to use HTTPS when connecting to Edge Security Acceleration (ESA) points of presence (POPs), which improves security.

## HSTS

HSTS (HTTP Strict Transport Security) is a method that websites use to declare that they support HTTPS only.

After you configure HSTS, the first time a client connects to a POP over HTTPS, the ESA POP sends the response header `Strict-Transport-Security` to instruct the client to use HTTPS exclusively for subsequent requests during a specified period and to block HTTP requests. The HSTS response header syntax is: `Strict-Transport-Security:max-age=expireTime [;includeSubDomains] [;preload]`. For metric descriptions, see the following table.

**Parameter**

**Description**

max-age

The time-to-live (TTL) for the HSTS header, in seconds. During this period, clients are forced to use HTTPS for access.

includeSubDomains

Optional parameter. If this parameter is included, HSTS is enabled for the domain and all its subdomains.

preload

Optional parameter. Use the preload list when you request to add your domain to the browser's built-in list.

## **Notes**

-   Before you enable HSTS, ensure that you have configured an SSL/TLS certificate for your site and [Configure Edge Certificate](/help/en/edge-security-acceleration/esa/user-guide/configure-edge-certificates/#42d98177ceu19). For more information, see [Configure Edge Certificate](/help/en/edge-security-acceleration/esa/user-guide/configure-edge-certificates/).
    
-   The HSTS policy applies only to domain names, not to IP addresses.
    
-   After you configure HTTP Strict Transport Security (HSTS), if a client uses HTTP on its first visit, the ESA POP forcibly redirects the HTTP request to HTTPS because the HSTS policy has not yet been synchronized to the client. This avoids the associated security risk.
    
-   After you configure HSTS, clients can access only ESA POPs over HTTPS. Do not configure a force redirect from HTTPS to HTTP.
    
-   Because the HSTS policy takes effect on the client, disabling HSTS does not take effect immediately. Perform a refresh to send the updated HSTS policy to the client during its next HTTPS request.
    

## **Enable HSTS**

1.  In the ESA console, select [Site Management](https://esa.console.alibabacloud.com/siteManage/list), and click the target site in the **Website** column.
    
2.  In the navigation pane on the left, select **Edge Certificates**.
    
3.  In the **HSTS** area, click **Configure**, turn on the **Status** switch, and then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2149190771/p842718.png)
    

## **Site-level and rule-based rules mapping**

A site-level rule applies to all requests for the site. If you want to enable this feature only for specific requests, use a rule-based feature. A rule-based feature uses rule conditions to identify specific parameters in user requests, allowing you to precisely control where the configuration applies. The rule-based feature corresponding to the site-level global HSTS configuration is [HSTS](/help/en/edge-security-acceleration/esa/user-guide/https-application-configuration).
