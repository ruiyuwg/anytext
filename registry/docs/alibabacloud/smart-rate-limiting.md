**Smart Rate Limiting** is an AI-powered enhancement of rate limiting rules, designed for users new to web security. It greatly simplifies configuring rate limits. You no longer need to manually analyze site traffic, identify abnormal request patterns, and set thresholds. Simply enable the feature and select a protection level. Smart rate limiting automatically trains a baseline from your website's traffic patterns over the past 7 days and updates rate limiting thresholds daily.

## **Enable smart rate limiting**

Smart rate limiting automatically identifies anomalous access traffic. The ESA AI engine analyzes your website's access behavior over the past 7 days to dynamically adjust mitigation thresholds. You just need to select a Protection Level, and the system will continuously optimize the security policy. This provides 24/7 automated attack interception, reducing security risks without manual intervention.

**Note**

-   If your online business anticipates a legitimate surge in traffic (e.g., from a promotional event), disable this feature beforehand to avoid false positives.
    
-   The feature takes effect approximately 10 seconds after being enabled. IPs that trigger the rate limit are blocked for about 24 hours. If a legitimate IP is incorrectly blocked, you can add it to the WAF [whitelist rules](/help/en/edge-security-acceleration/esa/user-guide/whitelist-rules).
    
-   **Smart Rate Limiting** trains its baseline and blocks IPs based on the total requests from a single IP to the entire website. Therefore, this feature is not recommended for websites where traffic volume varies significantly across subdomains.
    
    -   For example, if most IPs access `record A` 100 times and `record B` 1,000,000 times over the past 7 days, the baseline for the entire website might be around 1,000,000. If a malicious IP launches a high-frequency scraping attack on `record A`, the smart rate limiting feature may be ineffective.
        

1.  In the ESA console, choose [Site Management](https://esa.console.alibabacloud.com/siteManage/list), and in the **Website** column, click the target site.
    
2.  In the left navigation pane, choose **Security** > **WAF**.
    
3.  On the **Overview** tab, in the **Smart Rate Limiting** section, click **Configure**. Turn on the **Status** switch, and select a **Protection Level** and an **Action**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0195085371/p898687.png)
    
    **Note**
    
    -   For more information, see [Protection levels](#1f716147b0tg9).
        
    -   For more information, see [Actions](#6cbc971136i1p).
        
    

## **Protection levels**

-   **Strict**: Recommended for use during periods of malicious activity. The initial rate limit for a single IP address is 40 requests per 10 seconds.
    
-   **Medium**: The default protection level. Recommended for daily use. The initial rate limit for a single IP address is 200 requests per 10 seconds.
    
-   **Loose**: Recommended if false positives occur. You can also disable intelligent rate limiting. The initial rate limit for a single IP address is 4,000 requests per 10 seconds.
    

## Actions

-   **JavaScript Challenge**: WAF returns a piece of JavaScript code that a standard browser can automatically execute. If the client executes the JavaScript code correctly, WAF allows all subsequent requests from that client for a period of time (30 minutes by default) without another challenge. Otherwise, WAF blocks the request.
    
-   **Monitor**: Does not block requests that hit a rule. Instead, it only logs the event. You can query WAF logs to find requests that hit the rule and analyze its effectiveness, for example, to check for false positives. Monitor mode is useful for testing newly configured rules. After you confirm that the rule does not cause false positives, set the action to Block.
    
    **Note**
    
    You must activate Simple Log Service to use the log query feature.
    
-   **Block**: Blocks requests that hit a rule and returns a block response page to the client.
