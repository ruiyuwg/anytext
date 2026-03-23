The edge cache time-to-live (TTL) is the period of time during which origin resources are cached on Edge Security Acceleration (ESA) points of presence (POPs). When the TTL ends, resources that are cached on POPs are marked as expired. If the requested resource has expired on a POP, the POP retrieves the most recent resource from the origin server and caches it. You can configure a cache TTL for static resources based on file directories or file name extensions. This reduces the load on the origin server and improves access performance.

## **Configure an** edge cache TTL

1.  In the ESA console, choose [Websites](https://esa.console.alibabacloud.com/siteManage/list) and click the name of the website you want to manage.
    
2.  In the left-side navigation pane, choose **Cache** > **Settings**.
    
3.  In the **Edge Cache TTL** section, click **Configure** and select a cache policy.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0685276271/p833520.png)
    
    -   **Honor Origin TTL or Use Default Cache Rule**: Follow the cache rule carried in the origin response if the response contains a header that indicates the TTL. Otherwise, use the [default cache rules](/help/en/edge-security-acceleration/esa/user-guide/default-cache-rule).
        
    -   **Honor Origin TTL or Do Not Cache**: Follow the cache rule carried in the origin response if the response contains a header that indicates the TTL. Otherwise, skip caching entirely.
        
    -   **Do Not Cache**: Do not cache any response from the origin server, regardless of whether the response contains a header that indicates the TTL.
        
    -   **Use Custom TTL**: Follow the custom TTL that you configure in the ESA console, regardless of whether the response contains a header that indicates the TTL.
        
4.  Click **OK**.
    

## Availability

**Entrance**

**Pro**

**Premium**

**Enterprise**

Minimum edge cache TTL

2 hours

1 second

1 second

1 second
