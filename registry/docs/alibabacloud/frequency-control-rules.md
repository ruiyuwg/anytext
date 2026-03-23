You can create rate limiting rules via Edge Security Acceleration (ESA) to limit the rate of requests that match specific conditions. For example, if an IP address visits your website at a high frequency within a specific period of time, you can create a rate limiting rule to specify a request rate limit, and enable slider CAPTCHA verification or add the IP address to the blacklist for a period of time when the configured limit is reached.

## **What is rate limiting**

Rate limiting identifies and blocks distributed denial-of-service (DDoS) attacks and HTTP flood attacks by using dynamic risk control. This feature supports queries per second (QPS) threshold configurations and adopts policies such as observation, slider CAPTCHA verification, and blocking (10 seconds to 24 hours). The system enables multidimensional rules such as client IP address and user agent matching to take effect in real time. This feature is finally deeply integrated with Web Application Firewall (WAF) and Anti-DDoS to provide an end-to-end risk control solution.

## **Create a rate limiting rule**

The following procedure describes how to configure a rate limiting rule. The rule specifies that if 20 requests with the hostname `www.example.com` or `image.example.com` are coming from the same client IP address within 10 seconds, the system performs the slider CAPTCHA verification on this type of requests for 5 minutes. In this case, requests are responded only if the user passes the slider CAPTCHA verification. If the user fails the verification, requests are blocked.

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and then click your target website.
    
2.  In the navigation pane on the left, choose **Security** > **WAF**.
    
3.  On the **Rate Limiting Rules** tab, click **Create Rule**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4391769271/p854868.png)
    

-   Fill in the **Rule Name**.
    
-   **If requests match...**: filters requests by **using the rule expression**. For more information, see [Work with rules](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/). In this example, you can select Hostname for the match type field, select is in for the match operator field, and enter `www.example.com` and `image.example.com` in the match value field.
    
-   **Apply to Cache**: Rate limiting helps control the rate of client requests that match specific conditions and reduces the load on your origin server. Requests that hit the cache are directly served from ESA POPs, without burdening your origin server. If you do not want to apply the rate limiting rule to requests that hit the cache, clear this check box.
    
-   **With the same characteristics...**: filters the requests that **meet the rule expression**.
    
-   **When the rate exceeds...**: Set the maximum number of requests allowed at the given frequency.
    
    **Note**
    
    -   When the action is set to **Apply to Matched Requests**, the action duration is equal to the interval set in **Rate**.
        
    -   Rate limiting counts a request after the server response is completely transmitted. For requests involving large file downloads, long download times may delay actions like blocking.
        
    
-   **Then execute...**: Select the action that you want to execute when the request rate reaches the limit. You can execute the action only on requests that exceed the limit or on all requests that match the characteristics after the limit is exceeded. For more information about the actions, see [Actions](/help/en/edge-security-acceleration/esa/user-guide/security-overview/#5c4318e354bti).
    
    In the preceding figure, all requests whose hostname is `www.example.com` or `image.example.com` are collected based on the source IP addresses, including requests that hit the cache and origin requests. The system performs the slider CAPTCHA verification on all requests for one minute if more than 20 requests are coming from the source IP address within 10 seconds.
    

6.  Click **OK**.
    

## **Availability**

**Item**

**Entrance**

**Pro**

**Premium**

**Enterprise**

Number of rate limiting rules

Not supported

2

5

10
