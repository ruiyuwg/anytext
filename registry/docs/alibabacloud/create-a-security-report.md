Security Center provides comprehensive risk assessment tools to summarize and compare the risk status, security posture, and remediation progress of your protected assets. With the security report feature, you can customize the security data that you want to monitor and periodically send reports to the mailboxes of your helpdesk staff. This allows for more effective real-time monitoring of your asset security status.

## **Version limits**

-   **Subscription**: **Advanced**, **Enterprise**, or **Ultimate**. If your current edition is not supported, you must [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
    
-   **Pay-as-you-go**: You must enable at least one pay-as-you-go feature. To enable this billing method, see [Purchase](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
    

## Limits

-   By default, you can manually create up to 10 security reports in the China region and 10 security reports in Regions Outside China. The quotas for these regions are calculated independently, which lets you create a maximum of 20 security reports.
    
-   A single security report can have a maximum of 10 email recipients.
    
-   If you are a new user of a paid Security Center edition (subscription or pay-as-you-go), the latest security report data becomes available on the next day (T+1).
    

## Procedure

Follow this procedure to generate and manage security reports.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1014509671/CAEQThiBgICIgKz6yxkiIDk4MzM1ZWZmZDk4YzRiMWRhZjNkMzM3ZjVlMTA5YzAy5018509_20250327162224.482.svg)

## Step 1: Create a security report

Creating a security report involves two steps: **Configure basic information** and **Configure report content**.

### **1\. Configure basic information**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **System Settings** > **Security Report**. In the upper-left corner of the console, select the region where your assets are located: **China** or **Outside China**.
    
3.  On the **Security Report** page, click **Create Security Report**.
    
4.  On the **Configure Basic Information** page, configure the basic information for the security report as described in the following table. Then, click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Report Name**
    
    Enter a custom name for the security report.
    
    **Report Scope**
    
    Select a scope based on the data distribution you need to analyze: **Single Account**, **Multiple Accounts**, or ****Multiple Groups****.
    
    -   **Single Account**: The report includes statistics for all data under the current account by default.
        
    -   **Multiple Accounts**: You must select the **Accounts** (accounts for which to collect statistics). By default, the report includes statistics only for the specified accounts. You can also enable automatic onboarding for new accounts.
        
        **Important**
        
        Only administrators who have configured **Multi-account Management** can select the multi-account scope. For more information, see [Multi-account Security Management](/help/en/security-center/user-guide/use-the-multi-account-management-feature).
        
    -   **Multiple Groups**: You must select the **Report Group**. The report includes statistics only for the specified groups.
        
        **Important**
        
        Data for the specified groups is updated on the day after the configuration takes effect (T+1).
        
    
    **Accounts**
    
    This parameter is available only when you set **Report Scope** to **Multiple Accounts**.
    
    -   **Selection limit:** You can select up to 30 accounts.
        
    -   **Account source:** The accounts are synchronized from the ones you configured in [Multi-account Security Management](/help/en/security-center/user-guide/use-the-multi-account-management-feature).
        
    -   **Automatically add new accounts (Recommended):** If you select **New Accounts Added by Default**, the system automatically includes new accounts that you add in "Multi-account Security Management" in future report analyses. This eliminates the need for manual reconfiguration and ensures that the report always covers the latest set of accounts.
        
    
    **Report Group**
    
    This parameter is available only when you set **Report Scope** to **Multiple Groups**.
    
    -   **Selection limit:** You can select up to 30 groups.
        
    -   **Group source**:
        
        -   **By resource group**: Resource groups configured in Resource Management are automatically synchronized. For more information about how to view resource group information, see [View resource groups](/help/en/resource-management/resource-group/user-guide/view-basic-information-of-a-resource-group).
            
        -   **By asset group**: Server groups configured in the Host Assets module are automatically synchronized. For more information about how to view server group information, see [View server groups](/help/en/security-center/user-guide/manage-servers#44949bd0f4gm9).
            
    
    **Data Collection Period**
    
    -   **Periodic report**: Automatically sends security reports based on a specified period. You can select **Last 1 Day**, **Last 1 Week**, **Last 1 Month**, **Last 1 Year**, or **Custom Number Of Recent Days**.
        
    -   **Custom report**: You can only specify a **Custom Time Range**. You do not need to set a sending time. You must manually publish security reports for custom periods.
        
    
    **Note**
    
    -   For periodic reports, Security Center sends only one report email to the **Recipient** per day. Even if you change the Sending Time on the same day, the change takes effect the next day.
        
    -   For custom reports, you can go to the **Security Report** page, find the security report card, and click **Send Now** to manually send the report to the **Recipient**.
        
    
    **Language**
    
    Select the language for the report content. You can select **Simplified Chinese** or **English**.
    
    **Note**
    
    The exported HTML report, PDF report, and email body are rendered in the language you select.
    
    **Sent At**
    
    Set the time when the security report is sent to the specified mailboxes. The report is sent within 2 hours of the specified time. The actual sending time may vary due to scheduling.
    
    **Recipient**
    
    Enter the email addresses to receive the security reports. You can enter up to 10 email addresses.
    
    **Note**
    
    -   The recipients do not need to have an Alibaba Cloud account.
        
    -   An email address must be verified before it can receive emails. If an email address is not verified, it cannot receive report emails. Security Center sends a verification email to the specified address. The mailbox owner must complete the email verification as prompted.
        
    
    **Sticky**
    
    Select whether to pin the current security report to the top of the security report list and prioritize its content in the Security Operations Trend module on the **Overview** page.
    
    **Note**
    
    Security Center lets you pin only one security report. If a report is already pinned and you want to pin a new one, you must first unpin the current report by setting its pinned status to **No**.
    

### **2\. Configure report content**

1.  On the **Specify Report Data** page, subscribe to the data you want to display in the security report.
    
    The data metric subscription feature for security reports is designed to support diverse security management needs and meet the specific requirements of different roles and scenarios. You can subscribe to the data metrics that you want to monitor.
    
    **Metric Name**
    
    **Core Feature and Purpose**
    
    **Target User/Scenario**
    
    **Display Condition/Note**
    
    **Multi-account Ranking Metrics**
    
    Compare and rank accounts in a multi-account environment to identify high-risk accounts for centralized administration.
    
    Administrators of multi-account environments
    
    Displayed only when Report Scope is set to **Multi-account**.
    
    **Overall Operations Metrics**
    
    Provide a high-level overview of the security status to understand the overall security posture and the status of key features.
    
    Senior management, decision-makers
    
    Displayed only when Report Scope is set to **Single Account** or **Multi-group**.
    
    **Asset Operations Metrics**
    
    Display the overall status of business assets and the trend of risky assets to facilitate asset management and prioritization.
    
    Asset management teams
    
    N/A
    
    **Security Alert Operations Metrics**
    
    Track and analyze security alert trends, response, and handling to evaluate threat detection and response capabilities.
    
    Security operations center (SOC) staff
    
    N/A
    
    **Vulnerability Operations Metrics**
    
    Provide an overview of the system vulnerability status, track the progress and efficiency of vulnerability remediation, and promote vulnerability management.
    
    IT O&M and security teams
    
    N/A
    
    **Baseline Operations Metrics**
    
    Monitor the compliance status of systems and adherence to baseline settings to help maintain secure system configurations.
    
    Compliance and security configuration teams
    
    N/A
    
    **Cloud Product Operations Metrics**
    
    Summarize the security status of cloud platform configurations and track configuration changes and their responses.
    
    Cloud security administrators
    
    N/A
    
    **Attack Analysis Operations Metrics**
    
    Analyze and evaluate potential or actual security attacks to help effectively identify security risks.
    
    Security analysts, threat intelligence teams
    
    N/A
    
    **Application Protection Operations Metrics**
    
    Provide an overview of application protection status, attack trends, and their changes to enhance application protection capabilities.
    
    Application security teams, DevSecOps
    
    N/A
    
    **Tamper-proofing Operations Metrics**
    
    Provide an overview of web tamper proofing risks and the trend of monitored events to promptly respond to tampering risks.
    
    Website/Web application administrators
    
    N/A
    
    **Cloud Honeypot Operations Metrics**
    
    Monitor honeypot systems to understand attack trends and response effectiveness, enhancing threat intelligence comprehension.
    
    Threat hunting and intelligence analysis teams
    
    N/A
    
    **AK Leakage Operations Metrics**
    
    Detect the usage of AccessKeys (AKs) and potential leakage risks.
    
    Cloud security administrators, developers
    
    Displayed only when Report Scope is set to **Single Account** or **Multi-group**.
    
    **Large Model Operations Metrics**
    
    Provide model-based security recommendations based on large-scale data analytics to help optimize security policies.
    
    Security policy makers, senior analysts
    
    N/A
    
2.  Click **Save Report Data** to create the report. After the report is created, it is enabled by default.
    
    **Important**
    
    If you are a new user of a paid Security Center edition (subscription or pay-as-you-go), the latest security report data becomes available on the next day (T+1).
    

## Step 2: Manage security reports

You can manage security reports as needed. The following operations are available:

-   **Disable automatic sending of security reports**
    
    After a security report is created, it is enabled by default. If you no longer need to receive the report, click the ![启用图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4342868071/p199117.png) icon on the security report card to disable automatic sending.
    
-   **Edit a security report**
    
    On the security report card, click **Edit** to modify the basic information and content of the report.
    
-   **Clone a security report**
    
    On the security report card, click **Clone**, or click the More ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4460287471/p951738.png) icon and select **Clone** to create a copy of the security report.
    
-   **Export a security report**
    
    On the security report card, click **Export** and select a format to export the security report to an HTML or PDF file.
    
-   **Send now**
    
    For custom reports, you can click **Send Now** on the security report card to manually send the report to the **Email Recipients**.
    
-   **Delete a security report**
    
    On the security report card, click the More ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4460287471/p951740.png) icon and select **Delete** to delete the security report.
    
    **Important**
    
    -   Deleted reports cannot be recovered. Proceed with caution.
        
    -   Default security reports created by Security Center cannot be deleted.
        
    

## References

To ensure the security of your assets, review any security reports that contain security risk alerts and take appropriate action immediately after you receive them.

-   For more information about security scores and how to improve them, see [Security score](/help/en/security-center/user-guide/asset-security-overview).
    
-   For more information about how to view and handle security alerts, see [Security alerts](/help/en/security-center/user-guide/view-and-handle-alert-events).
    
-   For more information about how to view and handle vulnerabilities such as Linux software vulnerabilities and Windows system vulnerabilities, see [Vulnerability management](/help/en/security-center/user-guide/view-and-handle-vulnerabilities).
    
-   For more information about how to view baseline check results and handle the corresponding risks, see [Baseline risk check](/help/en/security-center/user-guide/baseline-check/).
    
-   For more information about how to configure scan policies for cloud security posture management and handle the corresponding risks, see [Cloud security posture management](/help/en/security-center/user-guide/use-cloud-platform-configuration-check).
    
-   For more information about how to view and handle cloud honeypot alerts, see [View and handle alert events](/help/en/security-center/user-guide/view-and-handle-alerts).
    
-   For more information about how to view and handle attack alerts for application protection, see [Handle attack alerts](/help/en/security-center/user-guide/alert-handling).
    
-   For more information about how to handle web tamper proofing alert events, see [Web tamper proofing](/help/en/security-center/user-guide/use-the-feature-of-web-tamper-proofing).
    
-   For more information about how to view and handle AK leakage alert events, see [AK leakage detection](/help/en/security-center/user-guide/detection-of-accesskey-pair-leaks).
