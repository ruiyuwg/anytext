If you want to use different browser cache TTLs in different business scenarios, you can create multiple cache rules and specify different cache policies for the rules.

## Set up browser cache TTL

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target website.
    
2.  In the left navigation pane, choose **Rules** > **Cache Rules**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, set the request features to match. For more information about how to configure rules, see [Rule expression components](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Bypass Cache** section, specify whether to bypass cache. For more information, see [Cache eligibility](/help/en/edge-security-acceleration/esa/user-guide/cache-bypass).
    
6.  In the **Browser Cache TTL** section, click **Configure** to specify a cache policy.
    
    -   **Honor Origin TTL**: The browser uses the cache policy that is contained in the response from the origin server. If the response from the origin server does not contain a cache policy, the point of presence (POP) does not add a cache policy to the response.
        
    -   **Do Not Cache**: All resources that are received by the browser from POPs are not cached, regardless of whether the responses from the origin server contain a cache policy.
        
    -   **Use Custom TTL**: The TTL that is configured on POPs is used, regardless of whether the responses from the origin server contain a cache policy.
        
7.  Click **OK**.
    

## Availability

**Entrance**

**Pro**

**Premium**

**Enterprise**

Minimum browser cache TTL

2 hours

1 second

1 second

1 second

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
