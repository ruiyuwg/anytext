When your applications experience traffic abuse from botnets, scrapers, or Peer-to-Peer Content Delivery Networks (PCDNs), the resulting cost inflation and resource exhaustion can disrupt normal operations. Abuse prevention uses the ESA IP intelligence database to automatically challenge or block requests from sources known for malicious activity.

## **How it works**

Abuse prevention combines global traffic monitoring with an open-source IP reputation database updated daily. It is particularly effective against automated threats from botnets, scrapers, and PCDNs, which are often used to disguise the origin of abusive traffic.

When a request arrives, ESA checks the source IP against the reputation database and logs, challenges, or blocks it, depending on your configuration.

## **Prerequisites**

Before you begin, make sure that you have:

-   An ESA website onboarded in the [ESA console](https://esa.console.alibabacloud.com/siteManage/list)
    
-   Access to the WAF configuration for your website
    

## **Enable abuse prevention**

**Important**

The prevention rules are strict and designed for situations where you are actively experiencing traffic abuse. You are responsible for any impact to legitimate traffic.

Start with **Monitor** mode to evaluate the impact before enforcing blocks.

### **Procedure**

1.  In the ESA console, select [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and then click the target website in the **Website** column.
    
2.  In the navigation pane on the left, choose **Security** > **WAF**.
    
3.  On the **Overview** tab, in the **Abuse Prevention** area, click **Configure**.
    
4.  Turn on the **Status** switch and select an action:
    
    1.  Set the action to **Monitor** first. This logs matching requests without blocking them.
        
    2.  Go to **Security Analytics** to review the requests that matched the abuse prevention rules. Confirm that the flagged IP addresses are suspicious and that legitimate traffic is not incorrectly identified.
        
    3.  If needed, change the action to **Block** or **Slider CAPTCHA**. Blocked request data is visible in the [Event analytics](/help/en/edge-security-acceleration/esa/user-guide/event-analytics) dashboard.
        
    
    ![Abuse Prevention configuration interface](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3490085571/p1000081.png)
    
5.  Click **OK**.
    

## **Manage exceptions**

If abuse prevention produces false positives or misses specific threats, create targeted exceptions using whitelist rules or custom rules.

### **Handle false positives**

A false positive occurs when a legitimate IP address is blocked by the abuse prevention rules. To resolve this, create a [whitelist rule](/help/en/edge-security-acceleration/esa/user-guide/whitelist-rules) that skips abuse prevention checks for that IP.

1.  In the ESA console, select [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and then click the target site in the **Website** column.
    
2.  In the navigation pane on the left, choose **Security** > **WAF**.
    
3.  Select the **Whitelist Rules** tab and click **Create Rule**. Configure the following settings:
    
    -   Set **Rule Name** to a value such as `False-Positive-01`.
        
    -   In the **If requests match...** area:
        
        -   Match Field: **Client IP**.
            
        -   Operator: **equals**.
            
        -   Match value: the legitimate client IP address, such as `192.168.0.1`.
            
    -   In the **Then skip...** area:
        
        -   **Rule**: **Specific Rule Category/ID**.
            
        -   **Rule Category**: **Abuse Prevention**.
            
    
    ![Whitelist rule configuration for false positive handling](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3490085571/p1000089.png)
    
4.  Click **OK**.
    

### **Handle false negatives**

A false negative occurs when a malicious IP address bypasses the abuse prevention rules. To block it manually, create a [custom rule](/help/en/edge-security-acceleration/esa/user-guide/waf-custom-rules). Additionally, [contact us](https://page-intl.aliyun.com/form/act1769249277/index.htm) to report the suspicious IP address. If verified, it will be added to the global malicious IP database.

1.  In the ESA console, select [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and then click the target site in the **Website** column.
    
2.  In the navigation pane on the left, choose **Security** > **WAF**.
    
3.  Click the **Custom Rules** tab, and then click **Create Rule**. Configure the following settings:
    
    -   Set **Rule Name** to a value such as `False-Negative-01`.
        
    -   In the **If requests match...** area:
        
        -   Match Field: **Client IP**
            
        -   Operator: **equals**
            
        -   Match value: the malicious client IP address, such as `192.168.0.1`.
            
    -   In the **Then execute...** area:
        
        -   **Action**: **Block**
            
        -   **Error Page**: **Default Error Page**
            
    
    ![Custom rule configuration for false negative handling](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3490085571/p1000085.png)
    
4.  Click **OK**.
    

## **Related topics**

-   [Event analytics](/help/en/edge-security-acceleration/esa/user-guide/event-analytics)
    
-   [Whitelist rules](/help/en/edge-security-acceleration/esa/user-guide/whitelist-rules)
    
-   [Custom rules](/help/en/edge-security-acceleration/esa/user-guide/waf-custom-rules)
