Edge Security Acceleration (ESA) allows you to enable caching on ports to cache content on specific ports. By default, ESA caches only static requests on the default HTTP or HTTPS port, such as 80 or 443. You can also enable caching on specific non-standard ports to optimize applications and services of various types.

## **Supported ports**

In addition to common HTTP and HTTPS ports, such as 80, 8080, and 443, ESA also allows you to cache content on the following ports:

-   HTTP ports: 8880, 2052, 2082, 2086, 2095
    
-   HTTPS ports: 2053, 2083, 2087, 2096, 8443
    

## Configure custom ports for caching

1.  In the ESA console, choose [Websites](https://esa.console.alibabacloud.com/siteManage/list) and click the website name you want to manage.
    
2.  In the left-side navigation pane, choose **Rules** > **Cache Rules**.
    
3.  Click **Create Rule**, and fill in the **Rule Name**.
    
4.  In the **If Requests Match...** area, specify the conditions for matching incoming requests. For more information about how to configure a rule, see [Rules](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/).
    
5.  In the **Bypass Cache** section, specify whether to bypass cache. For more information, see [Bypass cache](/help/en/edge-security-acceleration/esa/user-guide/cache-bypass).
    
6.  In the **Caching on Ports** section, click **Configure**. In the port list, select one or more ports.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0908492271/p817265.png)
    
7.  Click **OK**.
    

## **Availability**

The feature is supported on the Enterprise plan.
