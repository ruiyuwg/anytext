Edge Security Acceleration (ESA) provides a unified rules engine that lets you create and deploy conditional rules across different features -- including cache, redirection, compression, origin fetch, and WAF (Web Application Firewall) -- all using the same syntax and configuration logic. Instead of configuring each feature separately, you define rule conditions that identify parameters in user requests and determine whether a configuration applies. This gives you flexible and precise control over how ESA handles traffic to your site.

## Before you begin

Before you create rules, make sure you meet the following requirements:

-   You have an Alibaba Cloud account with ESA activated.
    
-   You have added at least one site to the ESA console and completed DNS configuration.
    
-   You can access the [ESA console](https://esa.console.alibabacloud.com/siteManage/list).
    

## ESA rules

[Rules](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/) let you create and deploy conditional rules across different features, such as cache, redirection, compression, origin fetch, and WAF, using the same basic syntax and configuration logic.

Each rule is built from three components:

-   [Match fields](/help/en/edge-security-acceleration/esa/user-guide/phase-list) -- the request attribute to evaluate (for example, hostname, URI path, or country/region).
    
-   [Match operators](/help/en/edge-security-acceleration/esa/user-guide/operators) -- how the field is compared to the value (for example, equals, does not equal, or contains).
    
-   [Match values](/help/en/edge-security-acceleration/esa/user-guide/match-value) -- the specific value to compare against (for example, `www.example.com` or `/content`).
    

> **Note**
> 
> -   For a specific feature, if you add configurations at both the global level and the rule level, the rule configuration takes precedence when a user request matches the rule conditions.
>     
> -   A single rule configuration, which includes rule conditions and the feature configuration, is limited to 4 K characters.
>     
> -   All configuration information for a site, including global and rule configurations, is limited to 512 K characters. This limit excludes rule configurations for security protection.
>     
> -   A rule name is limited to 128 characters.
>     

## Rule templates

ESA provides rule configuration templates for common scenarios. You can click a template to quickly create a rule without building conditions from scratch.

After you add a rule, when a user requests a resource, ESA matches and executes rules sequentially based on the [rule execution priority](/help/en/edge-security-acceleration/esa/user-guide/overview-of-rules/#29cc23f5ebozm).

### Procedure

The following example shows how to use the **Redirect to a New URL** template to create a redirection rule.

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and in the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Rule Template**.
    
3.  On the Rule Templates page, select **Redirect to a New URL** and click **Create** in the upper-right corner.
    
4.  In the custom rule settings, enter the URI path to redirect, such as `/esa.jpg`.
    
5.  In the URL Redirect section, enter the full redirection URL, such as `https://www.aliyun.com`.
    
6.  Test the access by visiting `http://yourDomain/esa.jpg`. A 301 status code is returned, which indicates that the redirection is active.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3846848471/p960625.png)

## Use rules for WAF protection

This example demonstrates how to use WAF custom rules to restrict access by geographic location. You can block all countries and regions except a specific one.

### Example: Block all countries and regions except the Chinese mainland

To block all countries and regions except for a single one (the Chinese mainland in this example), perform the following steps.

#### Configure rule conditions

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and in the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Security** > **WAF** > **Custom Rules** > **Create Rule**.
    
3.  Enter a **Rule Name**, such as `rule-01`.
    
4.  From the Match Type drop-down list, select **Country/Region**.
    
5.  From the Operator drop-down list, select **does not equal**.
    
6.  From the Match Value drop-down list, select **Chinese Mainland**.
    
7.  Finally, from the **Action** drop-down list, select **Block**, and then click **OK**.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5659764371/p867455.png)

To block a single country or region, select **equals** from the **Operator** drop-down list. Then, follow the same steps.

Expression: (`ip.geoip.country ne "CN"`).

#### Verify the blocking rule

If a request originates from a region outside the Chinese mainland, such as Singapore, the default block page and a 403 status code are returned.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5659764371/p882113.png)

## Set a redirection rule

This example shows how to create a rule that redirects requests from one URL to another. This is useful when you move content to a new location and want to automatically send visitors to the updated URL.

### Example: Redirect requests from one URL to another

The following steps show how to redirect requests for a specific hostname and URI path to a new URL.

#### Configure rule conditions

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and in the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Redirect Rules** > **Create Rule**.
    
3.  Enter a **Rule Name**, such as `rule-02`.
    
4.  From the Match Type drop-down list, select **Hostname**.
    
5.  From the Operator drop-down list, select **equals**.
    
6.  In the Match Value text box, enter the hostname `www.example.com`.
    
7.  Add another rule expression for the URI path. Click **And**, and from the Match Type drop-down list, select **URI Path**.
    
8.  From the Operator drop-down list, select **equals**.
    
9.  In the Match Value text box, enter the path `/image1.jpg`.
    
10.  In the URL Redirect section, enter the URL to redirect to: `https://www.example.com/image/image2.jpg`.
     

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5659764371/p882154.png)

#### Verify the redirection

Access the original URL. The request is redirected to `https://www.example.com/image/image2.jpg`. The `301` status code confirms the redirection is active.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5659764371/p882157.png)

## Set a browser cache time-to-live rule

This example shows how to set a custom browser cache TTL for specific resources. By controlling how long browsers cache your content, you can balance performance with content freshness.

### Example: Cache resources for 1 hour if the hostname is `www.example.com` and the URL path is `/content`

#### Configure rule conditions

1.  In the ESA console, choose [**Websites**](https://esa.console.alibabacloud.com/siteManage/list), and in the **Website** column, click the target site.
    
2.  In the navigation pane on the left, choose **Rules** > **Cache Rules** > **Create Rule**.
    
3.  Enter a **Rule Name**, such as `rule-03`.
    
4.  From the Match Type drop-down list, select **Hostname**.
    
5.  From the Operator drop-down list, select **equals**.
    
6.  In the Match Value text box, enter the hostname `www.example.com`.
    
7.  Add another rule expression for the URI path. Click **And**, and from the Match Type drop-down list, select **URI Path**.
    
8.  From the Operator drop-down list, select **equals**.
    
9.  In the Match Value text box, enter the path `/content`.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5659764371/p882511.png)

#### Configure the browser cache TTL

Select **Use Custom TTL**. Enter 1 and select **Hours** as the unit.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5659764371/p867884.png)

#### Verify the browser cache TTL

Test access to the file. The response header `cache-control: max-age=3600` is returned, which confirms that the browser cache TTL is set to 1 hour.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5659764371/p882488.png)
