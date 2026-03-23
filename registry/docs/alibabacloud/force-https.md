You can configure the force redirect to HTTPS feature to redirect client requests that are sent to Edge Security Acceleration (ESA) POPs to the more secure HTTPS protocol.

## **Use case**

The Always Use HTTPS feature is typically used to improve website security and protect user data. When an ESA POP receives an HTTP request from a client, it redirects the request to the more secure HTTPS protocol using an HTTP 301 status code.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7380612771/CAEQUxiBgID1xq_X4hkiIGEyMmY5MzZiYmJmNzRmMzJiZGNjYmYzNTY1OGFjMjgx4214700_20240221144428.433.svg)

## **Notes**

-   Before you configure redirection to HTTPS, make sure that you have configured an SSL/TLS certificate for your site as described in [Configure an edge certificate](/help/en/edge-security-acceleration/esa/user-guide/configure-edge-certificates/#42d98177ceu19). For more information, see [Configure an edge certificate](/help/en/edge-security-acceleration/esa/user-guide/configure-edge-certificates/).
    
-   After enabling Always Use HTTPS, if your application still references non-encrypted HTTP resources, visitors' browsers may display a "Mixed Content" warning.
    

## **Enable Always Use HTTPS**

1.  In the ESA console, go to [Websites](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click your target site.
    
2.  In the navigation pane on the left, choose **Edge Certificates**.
    
3.  Enable **Always Use HTTPS**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0193702771/p888351.png)
    

## **Site-level and rule-based features mapping**

A site-wide configuration applies to all requests for that site. To apply Always Use HTTPS only to specific requests, use the rule-based feature instead. You can define rules with conditions that detect specific parameters in client requests. This gives you precise control over which requests the rule affects. The rule-based equivalent of the site-wide Always Use HTTPS feature is [HTTPS rules](/help/en/edge-security-acceleration/esa/user-guide/https-application-configuration).
