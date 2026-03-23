If you want to set different edge cache TTLs for different requests, create cache rules and specify cache settings and request characters in the rules.

**Note**

You can also set global [Edge cache TTL](/help/en/edge-security-acceleration/esa/user-guide/edge-cache-expiration-time).

## **Procedure**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list). In the **Website** column, click the target website.
    
2.  In the left navigation pane, choose **Rules** > **Cache Rules**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, set the request features to match. For more information about how to configure rules, see [Rule expression components](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/).
    
5.  In the **Bypass Cache** section, specify whether to bypass cache. For more information, see [Cache eligibility](/help/en/edge-security-acceleration/esa/user-guide/cache-bypass).
    
6.  In the **Edge Cache TTL** section, click **Configure** and select an option as needed.
    
    -   **Honor Origin TTL or Use Default Cache Rule**: Follow the cache rule carried in the origin response if the response contains a header that indicates the TTL. Otherwise, use the [default cache rules](/help/en/edge-security-acceleration/esa/user-guide/default-cache-rule).
        
    -   **Honor Origin TTL or Do Not Cache**: Follow the cache rule carried in the origin response if the response contains a header that indicates the TTL. Otherwise, skip caching entirely.
        
    -   **Do Not Cache**: Do not cache any response from the origin server, regardless of whether the response contains a header that indicates the TTL.
        
    -   **Use Custom TTL**: Follow the custom TTL that you configure in the ESA console, regardless of whether the response contains a header that indicates the TTL.
        
7.  Click **OK**.
    

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

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
