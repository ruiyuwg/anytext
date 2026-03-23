You can create cache rules to bypass cache reserve for specific requests, such as those destined for popular resources. This helps reduce storage space occupied by cache reserve.

## **Prerequisites**

-   An **Enterprise** plan has been purchased for your website.
    
-   The cache reserve feature has been enabled and a cache reserve instance has been purchased. For more information, see [Cache reserve](/help/en/edge-security-acceleration/esa/user-guide/cache-hold).
    

## **Procedure**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target website.
    
2.  In the left navigation pane, choose **Rules** > **Cache Rules**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, set the request features to match. For more information about how to configure rules, see [Rule expression components](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Bypass Cache** section, specify whether to bypass cache. For more information, see [Cache eligibility](/help/en/edge-security-acceleration/esa/user-guide/cache-bypass).
    
6.  In the **Cache Reserve Eligibility** section, click **Configure** and select a policy.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9908492271/p822232.png)
    
    -   **Bypass Cache Reserve**: Requests that hit the conditions you configured bypass the cache reserve instance and go to your origin server.
        
    -   **Eligible for Cache Reserve**: Requests that hit the conditions you configured go to the cache reserve instance. This reduces the number of origin requests and relieves pressure on the origin server.
        
7.  Click **OK**.
    

## **Availability**

This feature is available with the Enterprise plan.

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
