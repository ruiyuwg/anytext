This topic describes how to add a domain name to the new edition of Web Application Firewall (WAF) to help you quickly get started with the new edition of WAF.

**Important**

New users cannot purchase DCDN WAF starting from May 1, 2025 at 00:00 (UTC +8). Current users won't be affected.

We recommend you upgrade to [ESA](/help/en/edge-security-acceleration/esa/product-overview/how-to-upgrade-from-cdn-and-dcdn-to-esa/) to use the enhanced [WAF](/help/en/edge-security-acceleration/esa/user-guide/waf-overview/) ESA provides.

## Enable WAF

If WAF is not enabled, log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview). In the left-side navigation pane, choose **WAF** > **Security Overview**. On the page that appears, click **Activate Now**. ![开通边缘WAF](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7519341761/p532455.png)

## Step 1: (Optional) Configure the default protection policy

WAF provides a built-in basic web protection policy that is used as the default policy to defend against common web application attacks. The attacks include SQL injection, cross-site scripting (XSS) attacks, unauthorized code execution, webshells, and command injection. If the built-in basic protection policy cannot meet your requirements, you can configure a custom default protection policy. For example, if you want to specify different protection actions for requests from different protected objects, configure a custom default protection policy. For more information, see [Configure a default protection policy](/help/en/edge-security-acceleration/dcdn/user-guide/configure-a-default-protection-policy#concept-2202109).

## Step 2: Add a domain name for protection

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, choose **WAF** > **Protected Domain Names**.
    
3.  On the **Protected Domain Names** page, click **Add Domain Name**.
    
4.  In the **Add Domain Name** dialog box, select the domain names that you want to add to WAF and specify the Client IP parameter.
    
    ![添加防护域名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7519341761/p422545.png)
    
    **Parameter**
    
    **Description**
    
    **Add Domain Name**
    
    Select the domain names that you want WAF to protect.
    
    **Note**
    
    You can add up to 50 domain names at a time.
    
    **Client IP**
    
    Valid values: **Client IP** and **Custom Header**.
    
    Default value: **Client IP**. If you have used gateway services such as Anti-DDoS and EdgeRoutine (ER), the IP addresses of the requests that are received by WAF are those of the Anti-DDoS and ER servers. In this case, you can change the IP address source to other headers such as X-Forwarded-For (XFF). This prevents WAF from blocking Anti-DDoS and ER requests.
    
    **Custom Headers**
    
    This parameter is valid only when you set **Client IP** to **Custom Header**.
    
    Sample custom headers:
    
    ```
    text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apgn,*/*;q=0.8
    ```
    
    **Note**
    
    Separate multiple headers with commas (,). You can enter up to five headers.
    
    **Note**
    
    WAF protection policies are immediately executed after requests reach DCDN points of presence (POPs). The execution priority of WAF protection policies is higher than that of other configurations, such as cache and authentication.
    
5.  Click **OK**.
    
    After you add a protected domain name, the default protection policy is automatically configured for the domain name.
    
    **Note**
    
    If you do not configure other default policies in [Step 1: (Optional) Configure the default protection policy](#section-mti-9fh-3da), only the built-in basic web protection policy is configured for the domain name that you added, and you are charged based on the number of requests that are processed by WAF.
    

## Step 3: (Optional) Add or modify a protection rule

If you want to modify the status of a protection rule and the action that can be performed for a protection rule, you can modify the protection rule on the Protection Policies page. For example, if you want to change the value of the Action parameter from Block to Monitor, modify the protection rule on the Protection Policies page. For more information, see [Overview](/help/en/edge-security-acceleration/dcdn/user-guide/overview-5#concept-2200928).

![编辑防护规则](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1979684071/p423958.png)
