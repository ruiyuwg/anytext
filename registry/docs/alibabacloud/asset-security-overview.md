Security Center provides a security operations dashboard for your cloud assets. The dashboard helps you understand the security status, assessment results, and real-time monitoring alerts for your assets.

## **Data overview**

The Overview page displays security data for your cloud assets from data centers in China and globally across multiple dimensions. These dimensions include security score, security risks, security operation trends, and an overview of asset information. The page also provides quick access to upgrade, renew, and expand your services for unified security management.

You can view the following information on the **Overview** page in the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas):

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7374198671/p951605.png)

**Module Name**

**Description**

**Supported operations**

**Security Score** (① in the figure)

This module displays the security score of your assets and security management statistics. This includes statistics on fixed vulnerabilities, resolved baseline risks, and handled alerts.

-   Click the security score to handle related risks or security alerts in the **Security Score Details** panel.
    
-   **Custom Security Score**: Security Center sets a default deduction value for each configuration item. You can customize the security score values based on your business priorities. For more information, see [Customize security score](#68bd16085e2y3).
    
-   Click **Security Score Description** to view [detailed information about the security score](#ee8c75fb3b80b).
    

**Overview of instance information** (② in the figure)

This module displays the edition, configuration details, expiration time, and protected asset statistics for your Security Center subscription. It also shows the status of your pay-as-you-go services.

**Note**

The user interface (UI) may vary depending on your Security Center edition.

-   **Asset overview**
    
    -   In the **Total Assets** area, click the number of assets to view details on the **Host Assets** page. For more information, see [Host assets](/help/en/security-center/user-guide/server-assets/).
        
    -   In the **Agent Not Installed** area, click **Install** to [install the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent#concept-dl4-ykc-zdb) for unprotected assets. Click **Scan** to go to the [Agentless Detection](/help/en/security-center/user-guide/use-the-agentless-detection-feature) page and create a scan task.
        
-   **Subscription service**
    
    -   Security Center supports operations such as **Try Now**, **Buy Now**, **Change**, and **Renewal**. For more information, see:
        
        -   [Activate a 7-day free trial](/help/en/security-center/user-guide/apply-for-a-7-day-free-trial-of-security-center#task-1940261)
            
        -   [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center#task-lxj-3bc-zdb)
            
        -   [Upgrades and Downgrades](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b)
            
        -   [Renewal policy (subscription)](/help/en/security-center/product-overview/renew-the-subscription-to-security-center#concept-qq3-dcc-zdb)
            
    -   After you purchase a subscription instance of Security Center **Anti-virus**, **Advanced**, **Enterprise**, or **Ultimate**, in the **Protected Servers** area, click **Manage** to bind the Security Center authorization to a specified server. For more information, see [Manage authorization for hosts and containers](/help/en/security-center/user-guide/authorization-number-management).
        
    -   When the usage of **Anti-ransomware** or **Log Analysis** capacity is less than 20%, an alert is triggered. You can hover over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5868276471/p942571.png) icon and click **Scale Out** to purchase more anti-ransomware storage or log storage.
        
-   **Pay-as-you-go service**
    
    -   Click **Activate** or **Deactivate** to enable or disable all pay-as-you-go items.
        
        **Important**
        
        If your service is suspended due to an overdue payment, use the **Deactivate** feature. This prevents new fees when the service automatically resumes after you add funds to your account.
        
    -   Click **View Bills** to view [bill details](/help/en/user-center/billing-details-1) in the Expenses and Costs console.
        
    -   Click **Learn More** to learn about the [billing methods](/help/en/security-center/product-overview/billing-overview#title-g25-uqv-iq4) for pay-as-you-go services.
        
    -   The status of each pay-as-you-go service is displayed. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5868276471/p942662.png) icon to quickly enable or disable the related service. For more information about the services, see:
        
        -   [Host and container security](/help/en/security-center/user-guide/authorization-number-management)
            
        -   [Vulnerability fixing](/help/en/security-center/user-guide/overview-4)
            
        -   [Cloud security posture management](/help/en/security-center/user-guide/cspm)
            
        -   [Agentic SOC](/help/en/security-center/user-guide/overview-of-threat-analysis)
            
        -   [Agentless Detection](/help/en/security-center/user-guide/use-the-agentless-detection-feature)
            
        -   [Serverless security](/help/en/security-center/user-guide/serverless-assets)
            

**Security Operations** (③ in the figure)

**Risk Governance**

This module provides statistics on the security risks of your cloud assets. These risks include vulnerabilities that require immediate attention, application and system vulnerabilities, weak passwords, baseline risks for cloud products and hosts, and API security risks. It also highlights data security risks, improperly connected security products, key feature configurations, and reminders for expiring products.

**Note**

The supported detection features vary by Security Center edition.

-   Click **Quick Check**. In the dialog box that appears, select **Detect Now** to perform a comprehensive risk scan.
    
-   Click the number next to **Unhandled Urgent Vulnerability** to view and handle vulnerabilities. For more information, see [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities#task-2239619).
    
-   Click the number next to **Unhandled Weak Password** to view and handle baseline risks. For more information, see [Baseline check](/help/en/security-center/user-guide/baseline-check/#task-2323753).
    
-   Click the number next to risk items such as **Pending CSPM Risk**, **Unhandled Application Vulnerability**, **Core Feature Configurations**, **Unhandled Weak Password**, and **Unhandled System Vulnerability**. In the panel that appears, select a specific risk item and click **Handle Now**. You are redirected to the risk handling page for the corresponding deduction item. View the risk list and fix the risks based on the provided details or hardening suggestions.
    

**Note**

Handle alerts promptly by referring to the relevant Security Center documentation.

**Security Protection**

This module displays attack behaviors that are intercepted in real time. Examples include the number of scrubbed DDoS attacks, attacks blocked by Web Application Firewall, attacks blocked by Cloud Firewall, host defenses provided by Security Center, and security risks intercepted by ID Verification.

Click the statistics in each area, select a specific risk item, and click **Handle Now**.

**Security Response**

This module displays risks that are related to security alerts. We recommend that you handle these alerts promptly to minimize potential impact. These alerts include unhandled urgent, reminder, and suspicious alert events.

Click the statistics in the **Pending Alerts** area, select a specific risk item, and click **Handle Now**. For more information, see [Evaluate and handle security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events).

**Security Operations Trend** (④ in the figure)

This module displays trends in your security operations. These trends include changes in the number of host assets, container assets, total cloud products, and associated risky assets.

In the upper-right corner of the Security operation trends section, click **Create Report** or **View Report** to view details on the Security Report page. For more information, see [Security report](/help/en/security-center/user-guide/create-a-security-report).

**Quick Help** (⑤ in the figure)

This module provides quick links to key information and resources related to Security Center.

Related information includes:

-   [What is Security Center?](/help/en/security-center/product-overview/what-is-security-center)
    
-   [Tutorial](/help/en/security-center/getting-started/quick-start)
    
-   [Data overview](#51db39c18aici)
    
-   [Features](/help/en/security-center/product-overview/functions-and-features)
    

**Release Notes** (⑥ in the figure)

This module displays recent feature optimizations, new feature releases, and information about newly available features.

Click **View More** to view more product update information on the Product Updates page.

## **Security score**

The Security Center security score is a health index from 0 to 100 that reflects the security posture of your cloud assets. A comprehensive evaluation mechanism, deployed in data centers in China and other regions worldwide, dynamically calculates the score by deducting points for security issues such as alert events and configuration defects. A higher score indicates fewer security risks and a higher degree of remediation.

### **Improve your security score**

The risk levels for cloud assets are categorized as Important (below 69), Medium (70–84), At Risk (85–94), and Secure (95–100). To improve the security of your cloud assets, handle risk alerts promptly to increase your security score.

1.  In the **Security Score** module, click the security score value.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5868276471/p951247.png)
    
2.  In the **Security Score Details** panel, view the specific deduction items. Click **Handle Now** to the right of a deduction item. You are redirected to the risk handling page for that item. View the risk list and fix the risks based on the provided details or hardening suggestions.
    
    **Note**
    
    -   The supported detection features vary by Security Center edition.
        
    -   The Security Score Details panel consolidates all pending items from **Risk Governance**, **Security Response**, and **Security Protection**. You can also refer to the category guidance in the Data Overview security operations module and the [priority for handling events in the security score](#350e9de07cp1o) to handle related risk alerts promptly.
        
    

### **Customize security score**

Security Center sets a default deduction value for each configuration item. You can customize the security score values based on your business priorities.

1.  In the upper-right corner of the **Security Score** module, click **Custom Security Score**.
    
2.  In the **Custom Security Score** panel, set the deduction value for each configuration item, and then click **OK**.
    
    -   The deduction modules for the security score include **Core Feature Configurations**, **Unhandled Alerts**, **Unfixed Vulnerabilities**, and more. The deduction threshold for each module ranges from **0 to 100**, and the sum of all module thresholds cannot exceed 100.
        
    -   Deduction modules contain different deduction items. The deduction value for an item ranges from **0 to the module's deduction threshold**. The sum of deduction values for all items within a module cannot exceed the module's threshold.
        
    
    **Note**
    
    If you have previously modified and saved your security score settings, the **Custom Security Score** panel displays the **Restore to Default Settings** option. Click it to restore the deduction values to the system defaults.
    

## FAQ

### **What is the priority for handling events in the security score?**

The following table lists the priority for handling events in the security score. A smaller number indicates a higher priority, with 1 being the highest.

**Priority**

**Event**

1

Configured or enabled key features, including the following:

-   Enable the web tamper-proofing feature.
    
-   Configure brute-force attacks protection rules.
    
-   Authorize one-click installation of the Security Center agent.
    
-   Authorize cloud security posture management.
    
-   Enable the log analysis feature.
    
-   Enable malicious host behavior defense.
    
-   Create an anti-ransomware policy.
    
-   Enable periodic scanning for virus detection.
    
-   Configure the scan scope for container image security.
    
-   Enable container Kubernetes threat detection.
    

2

Handled AccessKey pair leak events.

3

Handled cloud platform configuration risks.

4

Fixed baseline check issues.

5

Handled security alerts.

6

Fixed vulnerabilities.

### **What is the relationship between changing the vulnerability attention level and improving the security score?**

If you primarily focus on fixing important and medium-risk vulnerabilities and want to ignore low-risk ones, follow these steps. The security score will no longer include low-risk vulnerabilities in its calculation.

On the **Risk Governance** > **Vulnerabilities** page, click **Vulnerability Settings** in the upper-right corner. In the **Vulnerability Settings** panel, set the **Vulnerability Scan Level**. For more information, see [Scan for vulnerabilities](/help/en/security-center/user-guide/scan-for-vulnerabilities).

### **What is the relationship between changing the baseline attention level and improving the security score?**

If you primarily focus on fixing high-risk and medium-risk baselines and want to ignore low-risk ones, follow these steps. The security score will no longer include low-risk baseline risks in its calculation.

On the **Risk Governance** > **CSPM** page, click **Policy Management** in the upper-right corner. On the **Baseline Check Policy** tab, select the **Baseline Check Level**. For more information, see [Baseline check](/help/en/security-center/user-guide/baseline-check/).
