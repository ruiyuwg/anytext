The Compliance Report feature lets you receive scheduled compliance audit reports for your current account, an account group, or a custom scope. These reports are automatically sent to your specified email address. You can create reusable report templates to flexibly define report content and combine them with subscriptions to receive inspection results on a recurring basis.

## **Function Overview**

Compliance Report is a CloudConfig feature that addresses the inefficiency of manually downloading and processing compliance data. Compared to the legacy [Compliance Check Report](/help/en/cloud-config/latest/download-a-compliance-evaluation-report), the new Compliance Report offers the following core capabilities:

-   **Custom report scope**: Choose all rules or filter specific rules by account group, compliance package, or individual rule to generate tailored reports.
    
-   **Multi-account data aggregation**: A resource directory management account or a delegated CloudConfig administrator can create aggregated reports that cover multiple member accounts. You can also generate separate reports for specific account groups or member accounts.
    
-   **Automated subscription**: Set the subscription frequency to daily, weekly, or monthly. Reports are generated automatically and delivered by email or internal message, enabling unattended and periodic compliance inspections.
    
-   **Rich statistical analysis**: Reports are in Excel format and include multi-dimensional charts and summaries, such as resource compliance rate and non-compliant risk distribution, to help you quickly assess your compliance posture.
    

## **Create a Compliance Report Template**

To generate or subscribe to a compliance report, you must first create a report template. A template defines the report's data scope, aggregation method, and subscription settings, and can be reused.

1.  Log on to the Alibaba Cloud [CloudConfig console](https://confignew.console.alibabacloud.com/).
    
2.  In the left navigation pane, click **Compliance Report**.
    
3.  You can click **Create Template** on the **Compliance Report** page.
    
4.  On the **Create Template** page, configure the following settings:
    
    -   **Basic Information**:
        
        -   **Template Name**: Give your template a clear, descriptive name, for example, "Group Monthly Security Compliance Overview".
            
        -   **Description**: Briefly describe the template's purpose.
            
    -   **Report Aggregation Method** (visible only to resource directory management accounts or delegated administrators): Define how the report handles data from multiple accounts.
        
        **Aggregation Method**
        
        **Report Output**
        
        **Description**
        
        **Merge all accounts into one report**
        
        One aggregated report
        
        Generate one overview report containing data from all relevant accounts. “All accounts” here means all member accounts in existing **account groups**.
        
        **Generate one report per account group**
        
        One report per account group, plus one report for the current account
        
        Generate one independent report for each account group. The system also generates one report for the current account to avoid missing its own resources.
        
        **Generate one report per account**
        
        One report per account
        
        Generate one independent report for each relevant member account. “Each account” here means only member accounts in existing **account groups**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052346.png)
        
    -   **Report Scope**: Define which rule evaluation results the report includes.
        
        -   **Include All**: If no account group exists, the report includes all rules in the current account. If account groups exist, the report includes all rules in the current account and all account groups.
            
        -   **Custom Scope**: Filter compliance packages or rules using the following conditions:
            
            -   **Current Account**: Filter compliance packages or rules within the current account.
                
            -   **Account Group**: Filter compliance packages or rules within a specified account group (visible only after you create an account group).
                
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052365.png)
            
    -   **Subscription Settings (Optional)**: You can enable the subscription here or configure it later when you edit the template. For more information, see [Subscribe to Reports and Manage Notifications](#2a0f39495cjs5).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052709.png)
        
5.  Click **Submit** to finish creating the template.
    

## **Subscribe to Reports and Manage Notifications**

To receive automated notifications for inspection results, configure a subscription for your report template. The system then generates reports on a schedule and sends them to you through the Message Hub.

### **Configure Subscription in the Template**

1.  On the **Compliance Report** page, click the template block that you want to view to open its details page.
    
2.  On the template details page, locate the **Subscription Information** section.
    
3.  Turn on the **Subscription** toggle. In the **Subscription Settings** dialog box, configure the following settings:
    
    -   **Delivery Frequency**: Choose daily, weekly, or monthly.
        
    -   **Delivery Time**: Set the exact time for report generation.
        
    
    ![Snipaste_2026-02-03_20-20-34](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052171.png)
    
    **Note**
    
    Report generation time uses the **UTC+8** time zone. Adjust for your local time zone if needed.
    
4.  Click **Submit** to save the settings.
    

### **Configure Message Delivery Channels and Contacts**

Subscribed reports are delivered through the Alibaba Cloud Message Hub. Ensure that your message delivery channels and contacts are set up correctly.

1.  Go to **[Message Hub](https://notifications.console.alibabacloud.com/innerMsg/unread/)** > **Message Receiving Management** > **Basic Receiving Management**.
    
2.  On the **Basic Receiving Management** page, click the **Service Messages** tab.
    
3.  In the **Message Type** column, find **Inspection Report**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052161.png)
    
4.  Ensure that your preferred delivery channel (**Internal Message** or **Email**) is enabled.
    
    **Important**
    
    A single message type group in the Message Hub is often shared across multiple cloud services. If you disable Internal Message, you will not receive CloudConfig internal messages and possibly inspection reports from other cloud services.
    
5.  Click the **Edit** button in the Actions column for the inspection report. Then, select the **Message Recipients** tab and confirm that the correct recipients are set. The account contacts are the default recipients.
    
    To add or change message recipients, click the **Manage Message Recipients** button. On the Manage Message Recipients page, add recipients, complete email verification, and then return to the Edit Message Recipients page to assign them.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052163.png)
    

### **Test Your Subscription Channel**

After configuration, you can use the **Test Send** feature to verify that the full notification path works.

1.  On the **Compliance Report** page, find the template that you want to use.
    
2.  Click **Test Send**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052170.png)
    
3.  The system sends the most recently generated successful report to your configured notification channel. Check your internal messages or email inbox to confirm receipt.
    

**Note**

For a quick test, select a single rule with few evaluated resources in your account as the report scope. This selection speeds up report generation. After the report is successfully generated, click Test Send to verify message delivery.

## **Download Reports**

## Download from the Compliance Report Page

After you create a template, you can generate a one-time compliance report and download it to your local computer for analysis.

1.  On the **Compliance Report** page, find your target template.
    
2.  Click **Download Report**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052154.png)
    
3.  When the generation finishes, the Excel-formatted compliance report downloads automatically. If the download does not start, check whether your browser has blocked pop-up windows.
    

## Download from Internal Messages

After you configure and trigger a report subscription, find the internal message with the type **Service Message – Inspection Report**. Click the download link to obtain the report.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052142.png)

**Note**

For security reasons, report download links expire within 24 hours. If you click a download link and see an error such as `InvalidAccessKeyId`, the link has expired. Go to the Compliance Report page in the console and click Test Send to resend the latest completed report for this template, or click Download Report to regenerate and download it.

## Download from Email

After you configure and trigger a report subscription, the compliance report arrives as an email attachment. Download and open the attachment.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8159520771/p1052146.png)

## **View Report Content**

Compliance reports are Excel files that contain the following worksheets:

**Worksheet Name**

**Description**

**Overview**

Provides a high-level view of the report, including the following:

-   **Report Basics**: **Template Name**, **Description**, **Report Generation Time**, and **Report Scope** (account group, compliance package, rules).
    
-   **Compliance Summary**: Key metrics such as resource compliance rate and number of non-compliant resources.
    
-   **Non-Compliant Risk Distribution**: Charts showing counts of non-compliant resources and rules grouped by high, medium, and low risk level.
    
-   Per-Account Resource Compliance: Resource compliance rates for each account in the current account group (shown only when you select **Generate one report per account group** as the aggregation method).
    

**Rule List**

Lists all rules in the report scope and their details. Typically includes: Rule ID, Rule Name, Risk Level, Execution Status, Number of Compliant/Non-Compliant/Not Applicable/Excluded Resources, Creation Time, Remediation Settings, and **Remediation Suggestions**.

**Non-Compliant Resources**

Lists all resources flagged as “non-compliant”. Typically includes: Resource Type, Resource ID, Resource Name, Audit Rule Name, Rule ID, Reason for Non-Compliance, and **Link to Remediation Suggestion**.

**Compliant Resources**

Lists all resources flagged as “compliant”. Typically includes: **Resource Type**, **Resource ID**, **Resource Name**, **Audit Rule Name**, and **Rule ID**.

**Excluded Resources**

Lists all resources marked as “excluded”. Typically includes: **Resource Type**, **Resource ID**, **Resource Name**, **Audit Rule Name**, and **Rule ID**.

## **FAQ**

### **Why does my report show data only for the current account?**

An account group is required for multi-account report aggregation. First, create an account group in CloudConfig to view and aggregate data from the member accounts. Also, check the following:

1.  **Confirm account group rules**: Verify that you created compliance packages or rules that are assigned to the account group.
    
2.  **Check report scope**: Verify that your report template is configured with a custom report scope and filtered to include only the current account.
    

### **Why did I not receive my subscribed report?**

Check the following items in order:

1.  **Check report generation status**: Subscription tasks must first generate a successful report. In the console, confirm that the report for your template is available for manual download. Report generation takes time. If your subscription is scheduled to run too soon, the report may not be ready.
    
2.  **Check Message Hub settings**: Follow the steps in [Configure Message Delivery Channels and Contacts](#9c271b9640vh3) to confirm that the **Inspection Report** delivery channels (**Internal Message** or **Email**) are enabled.
    
3.  **Check message recipient settings**: Follow the steps in [Configure Message Delivery Channels and Contacts](#9c271b9640vh3) to confirm that the recipients are set correctly.
    
4.  **Check message limits**: To prevent spam, each account can receive a maximum of 20 messages per day for each channel (email or internal message). If you have many high-frequency subscriptions, excess messages are not delivered. Plan your subscription frequency carefully.
    

If all settings are correct but you still do not receive reports, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket?entrance=100&product=config) to technical support.

### **What do I do if report generation fails?**

Report generation may fail (for example, with FAILED or TIMEOUT errors), usually because the report scope is too large, which causes data processing to exceed system limits.

-   **Suggestion**: Reduce the report scope. For example, use fewer rules or select an account group with fewer resources, and then try again.
    
-   If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket?entrance=100&product=config) to technical support.
