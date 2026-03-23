Security rules in Edge Security Acceleration (ESA) use a comprehensive threat intelligence library to protect your core services. By analyzing request characteristics like Client IP, Request Path, and User-Agent, ESA identifies potential threats and automatically initiates a challenge.

> To set a consistent security level for all requests on the current site, see [Security level](/help/en/edge-security-acceleration/esa/user-guide/setup#a93fcc68b51p7).

## **Use cases**

In website operations, core functionalities like admin backends, login interfaces, and payment APIs are frequent targets for automated tools, malicious crawlers, and cyberattacks. A single, fixed global protection policy is often ineffective: if it is too strict, it blocks legitimate users, and if it is too lenient, it fails to stop targeted attacks.

Creating fine-grained security rules lets you apply stricter security policies only to requests that access specific paths or exhibit suspicious characteristics. This provides targeted protection for your core services while minimizing the impact on regular users.

## **How security rules work**

The ESA security rules are powered by an intelligent decision engine that matches request features against threat intelligence. When a user request reaches an ESA point of presence (POP), the system sequentially matches and processes it against the configured list of security rules.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2363574671/CAEQThiBgIDooaT6yxkiIGNmY2NhMzk0Y2E2NTRmMmE5YTY4NjE0MzY1Njc2NGUy5733826_20250917133609.309.svg)

This process involves three core mechanisms: threat detection, challenge validation, and security levels. The following sections describe these mechanisms.

### **Threat evaluation**

ESA leverages Alibaba Cloud's comprehensive threat intelligence library, which aggregates global cyber threat data in real time.

-   **Intelligence sources**: Includes known malicious IP addresses, attack sources, botnets, and proxy services.
    
-   **Detection dimensions**: The system evaluates multiple aspects including IP reputation, geographic location, access patterns, and request attributes such as User-Agent. It then generates a dynamic threat score to determine the appropriate security level.
    

### **Security levels**

Security levels define the sensitivity of threat detection and the strictness of countermeasures. Higher levels increase protection strength but may also increase friction for legitimate users.

**Level**

**Recommended use cases**

**Description**

**I'm Under Attack**

Recommended only as an emergency measure during large-scale attacks.

Challenges all visitors to ensure maximum website availability.

**Low** (Default)

For daily protection of websites with no history of targeted attacks.

Challenges IP addresses with the most severe threats.

**Medium**

For websites with a history of volumetric attacks or requiring enhanced security.

Challenges IP addresses with elevated threat scores.

**High**

For websites currently under attack or during critical events requiring heightened security.

Challenges any IP address exhibiting suspicious behavior.

**Essentially Off**

Recommended only for temporary use when troubleshooting significant false positives.

Disables most security rules but retains essential platform-level protection against critical threats.

**Off (Available in Enterprise Plans)**

Available only in Enterprise plans for debugging or special use cases.

Completely disables all active security features.

## **Procedure**

After creating a rule, ESA executes rules sequentially according to their [Priorities](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/#29cc23f5ebozm), when processing user requests.

### **Create a security rule**

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), then click the target website in the **Website** column.
    
2.  In the left navigation pane, choose **Rules** > **Security Rules**.
    
3.  Click **Create Rule** and enter a **Rule Name**.
    
4.  In the **If requests match...** section, specify the [user request features](/help/en/edge-security-acceleration/esa/user-guide/work-with-rules-engine/) to match. In the **Then execute...** section, select the desired security level. For example, to `set a medium security level for requests to the hostname www.example.com`, refer to the following settings:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5846701671/p1007803.png)
    
5.  (Optional) To adjust the rule’s execution priority, drag the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6656878571/p1008095.png) icon in the **Order** column or click **Move to** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6656878571/p1008100.png)
    

### **Verify the rule**

After creating the security rule, if you create a rule to block abnormal requests from `example.com`, the response is a challenge page HTML.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5846701671/p1008032.png)

When the challenge is passed, the response is the page content, and its header contains verified `u_atoken` and `u_asession`.

### **Handle exceptions and optimize rules**

During rule execution, legitimate user IPs or API clients might be incorrectly challenged or blocked. Address such issues promptly. Consider this use case:

`**Your service is under a high-risk attack, and you have set the security level to High. However, you want to allow requests from the internal testing IP address 1.2.3.4.**`

-   **Method 1: Add a whitelist rule**
    
    Add a WAF [whitelist rule](/help/en/edge-security-acceleration/esa/user-guide/whitelist-rules) to allow known IP addresses, ensuring critical traffic remains unaffected.
    
    1.  On the **Security Rules** page, copy the corresponding **Rule ID**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6656878571/p1008686.png)
        
    2.  In the left navigation pane, choose **Security** > **WAF**. Click the **Whitelist Rules** tab, then click **Create Rule**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6656878571/p1008685.png)
        
    3.  Configure the settings as follows and click **OK**:
        
        -   **Rule Name**: Enter a custom name, e.g., `rule-allow-test-ip`.
            
        -   **If requests match...**: Set the match field to `**Client IP**`, operator to `**is in**`, and input `**1.2.3.4**` in the text box.
            
        -   **Rule**: **Specific Rule Category/ID**.
            
        -   **Rule Category**: **Security Level**.
            
        -   **Rule ID**: Paste the **Rule ID** copied in Step a from the **Security Rules** page.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6656878571/p1008688.png)
        
-   **Method 2: Adjust security rule priority**
    
    Since ESA executes rules in sequence, create a new rule to lower the security level for test requests. Assign this rule a higher priority (executed earlier) than the blocking rule so it takes effect first.
    
    1.  In the left navigation pane, go to **Rules** > **Security Rules**, then click **Create Rule**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6656878571/p1008690.png)
        
    2.  Set up the rule as described below and click **OK**: In the **If requests match...** section, precisely match the affected IP, User-Agent, or path. In the **Then execute...** section, set **Security Level** to **Essentially Off** or **Off (Available in Enterprise Plans)** to bypass checks.
        
        -   **Rule Name**: Use a descriptive name such as `rule-allow-test-ip`.
            
        -   **Apply to**: Keep default **Filtered Requests**. For the match field, select `**Client IP**`; for operator, choose `**is in**`; enter `**1.2.3.4**` in the text box.
            
        -   **Security Level**: **Essentially Off** or **Off (Available in Enterprise Plans)**.
            
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6656878571/p1008691.png)
        
    3.  On the **Security Rules** page, drag the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6656878571/p1008696.png) icon to reorder rules. Move the `rule-allow-test-ip` rule above the original restrictive rule.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6656878571/p1007891.png)
        

## **Availability**

**Security rules**

**Entrance**

**Pro**

**Premium**

**Enterprise**

Number of security rules

5

25

50

125

## **FAQ**

### **What are the types of challenges?**

When the system identifies a request as a potential threat, it initiates a challenge based on the configured security level to distinguish between real users and automated programs.

-   **JavaScript challenge**: Injects JavaScript code into the client to verify a genuine browser environment. While seamless for human users, this will block most automated tools and API clients that do not execute JavaScript.
    
-   **CAPTCHA**: Requires the user to complete an interactive task, such as solving a puzzle or sliding verification, to prove they are human. This interrupts the user's access flow.
    

### **What's different between security rules and WAF rules?**

**Security levels and WAF rules are independent of each other**. The system automatically determines a security level based on a threat intelligence database to block a visitor or issue a JavaScript challenge. WAF rules, on the other hand, are custom rules that you configure to block requests or issue a JavaScript challenge for specific paths, parameters, or behaviors. These rules provide more granular security control.

## **References**

Rule-related features vary in **execution priority**, **rule behavior**, and **configuration scope**. For more information, see [How ESA rules take effect](/help/en/edge-security-acceleration/esa/user-guide/how-esa-rules-take-effect).
