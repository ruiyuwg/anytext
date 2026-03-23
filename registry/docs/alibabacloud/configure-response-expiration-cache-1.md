Serving stale content is an important feature for fault tolerance and availability in the ESA service. If your origin server experiences an issue, such as a 4xx or 5xx error or a timeout, ESA points of presence (POPs) can serve expired static content. This keeps your website available during temporary origin server outages, which improves overall availability and the user experience. You do not need to enable this feature for dynamic resource requests.

## **How it works**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9145785671/CAEQUBiBgMCQgZOZ2RkiIDkzYWY4NTFjNzA2MTRlZGNiNzA4Njc2OGEyODNmYTM44409058_20240529181728.681.svg)

## **Use cases**

**The origin server fails or is unavailable:** When the origin server fails or becomes unavailable for various reasons, such as server downtime, network interruptions, or program errors, ESA POPs cannot fetch the latest content from the origin.

-   If serving stale content is disabled: When a POP receives a user request, it requests the content from the origin server. If the origin server is down, the request fails, and the user cannot access the website.
    
-   If serving stale content is enabled: If the origin server is down, the POP can serve expired cached content to the user. This ensures the website remains accessible.
    

## **Procedure**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Cache Rules**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, specify the conditions for incoming requests. For more information, see [Composition of rule expressions](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Bypass Cache** section, specify whether to bypass the cache. For more information, see [Cache eligibility](/help/en/edge-security-acceleration/esa/user-guide/cache-bypass).
    
6.  Turn on the **Serve Stale Content** switch.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5908492271/p814946.png)
    
7.  Click **OK**.
    

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
