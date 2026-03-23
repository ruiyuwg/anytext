This topic describes how an administrator can configure the data protection feature of Secure Access Service Edge (SASE). This feature helps enterprises monitor outbound sensitive data transfers in real time, identify data breach risks, and ensure office data security.

## **Scenarios**

-   **Detection of outbound transfers of sensitive files**: Prevent employees from transferring sensitive files through channels such as instant messaging tools, emails, and cloud storage services.
    
-   **Audit log query**: Record and analyze outbound sensitive file transfers to promptly detect potential data breach risks.
    

## **Prerequisites**

-   You have purchased the Data Protection for Internet Access edition of SASE. For more information, see [Billing overview](/help/en/sase/product-overview/billing-overview) and [Get started with SASE](/help/en/sase/getting-started/how-to-use-the-office-security-platform).
    
-   The SASE client installed on office devices is version 4.3.1 or later.
    

## **Procedure**

### **Step 1: Add an identity source**

An identity source provides identity authentication for enterprise employees. SASE supports third-party and self-managed identity authentication systems. Supported identity sources include Lightweight Directory Access Protocol (LDAP), DingTalk, WeCom, Lark, Identity as a Service (IDaaS), and custom identity sources. If your business uses multiple identity sources, you can configure all of them. This lets you use SASE services with different identity sources.

This topic uses a custom identity source as an example to demonstrate how to verify this feature.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Identity Authentication** > **Identity Access**.
    
3.  Click the **Identity synchronization** tab, and then click **Create IdP**.
    
4.  In the **Create IdP** panel, select **Custom IdP**, and then click **Configure**.
    
5.  In the **Basic Configurations** section, set **IdP Name** and **IdP Status** according to the following table, and then click **Next**.
    
    **Parameter**
    
    **Description**
    
    **IdP Name**
    
    The name of the custom identity source.
    
    The name must be 2 to 100 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **IdP Status**
    
    Set the status as needed. Valid values:
    
    -   **Enabled**: If no other custom identity source is enabled, you can enable the one you are creating.
        
    -   **Closed**: If another custom identity source is already enabled, you can set the new one to disabled. After you disable the other custom identity source, you can then enable this new one.
        
        **Important**
        
        If you disable a custom identity source, end users cannot use the SASE client to access internal applications. Proceed with caution.
        
    
6.  In the **Logon Settings** section, set the logon method.
    
    **Parameter**
    
    **Description**
    
    **PC Logon Method**
    
    Supports **Logon with Account and Password** and **Password-free Logon**.
    
    -   When using account and password logon, you can enable **Two-factor Authentication**. Valid values:
        
        -   **OTP-based Authentication**: If enabled, you must select an **OTP Mode**. The following modes are supported:
            
            -   Allow SASE mobile client to display tokens: This is the built-in SASE OTP, which requires employees to install the SASE mobile client.
                
            -   Allow third-party app tokens: Ensure the OTP client clock is synchronized. Standard and common OTP authentication software, such as the Alibaba Cloud app, is supported.
                
            -   Allow enterprise-owned tokens: To support a self-developed enterprise OTP, configure it with the assistance of technical support personnel.
                
        -   **Verification Code-based Authentication**: Supports email verification codes. Ensure that email address is recorded for each user in the configured identity source.
            
    -   When using password-free logon, you must first download and log on to the SASE mobile client, and then perform QR code authentication.
        
    
    **Mobile Device Logon Method**
    
    Supports **Logon with Account and Password** and **Fingerprint or Face Recognition**.
    
    -   When using account and password logon, you can enable **Two-factor Authentication**. Valid values:
        
        -   **OTP-based Authentication**: Before enabling **OTP-based Authentication**, you must enable OTP authentication for PCs and select **Allow Tokens on Third-party Applications** or **Allow Enterprise-owned Tokens**. The mobile token configuration is the same as the PC configuration.
            
        -   **Verification Code-based Authentication**: Before enabling **Verification Code-based Authentication**, ensure that email address is recorded for each user in the configured identity source.
            
    -   When using fingerprint or facial recognition authentication, you still need to enter an account name and password for the first logon to the SASE client.
        
    
7.  Click **Confirm** to complete the configuration.
    

### **Step 2: Add a user group**

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Identity Authentication** > **Identity Access**.
    
3.  On the **User Group Management** tab, click **Create User Group**.
    
4.  In the **Create User Group** panel, enter the user group information as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **User Group Name**
    
    The name of the user group.
    
    **Description**
    
    The description of the user group.
    
    **Group Scope**
    
    Set the scope for the user group. Valid values:
    
    -   **Organizational Structure**: If you select **Organizational Structure**, the existing **Organizational Structure** information is displayed. Select the required structure.
        
    -   **Account Name**: If you select **Account Name**, the **Configure** **Account Name** input box appears.
        
    -   **Email Address**: If you select **Email Address**, the **Configure** **Email Address** input box appears.
        
    -   **Mobile Phone Number**: If you select **Mobile Phone Number**, the **Configure** **Mobile Phone Number** input box appears.
        
    
    **Configure Relationship**
    
    Set the relationship for the user group. Valid values:
    
    -   **Equal To**
        
    -   **Not Equal To**
        
    
5.  Click **OK**.
    

### **Step 3: View data classification rules**

SASE provides built-in identification rules to identify common company data, customer data, and personal data. You can view these built-in rules to understand their coverage. You can also customize identification rules. For example, you can create a custom rule to detect outbound transfers of files that contain personal resumes.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Data Protection** > **Data Classification**.
    
3.  On the **Data Classification** > **Identification Rules** tab, view the details of the built-in identification rule for personal resumes in the **Data Category** section on the left.
    

### **Step 4: Configure an outbound file policy**

The SASE sensitive file detection feature automatically identifies sensitive files based on the characteristics of their data elements. SASE uses data elements, data types, and sensitivity levels to create a data template. This template is then combined with conditions, such as handling actions, to create a detection policy that identifies whether files sent by employees are sensitive.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Data Protection** > **Policy Center**.
    
3.  On the **Policy Center** > **Outbound Transfer Management** tab, click **Create Policy**.
    
4.  In the **Create Policy** panel, create an outbound file policy as described in the following table. Then, click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Policy Information**
    
    **Policy Name**
    
    The name of the policy.
    
    **Policy Description**
    
    The description of the policy.
    
    **Risk Level**
    
    You can set a policy to one of the following four risk levels:
    
    -   **Extremely High**: events such as outbound transfers from a user group of resigning employees, outbound transfers from an extremely high-risk user group, and outbound transfers of L4 files.
        
    -   **High**: events such as outbound transfers from a high-risk user group and outbound transfers of L3 files.
        
    -   **Medium**: events such as outbound transfers from a medium-risk user group and outbound transfers of L2 files.
        
    -   **Low**: all outbound transfers for auditing purposes.
        
    
    **Action**
    
    The action of the policy. Valid values:
    
    -   **Audit Only**
        
    -   **Audit and Prompt**
        
    -   **Block and Notify**
        
    -   **Block Only**
        
    
    If you set the action to Block and Notify or Block Only, you must also select a block type.
    
    -   **Block All**: The SASE app blocks and audits all outbound file transfers in real-time.
        
    -   **Intelligently Block**: The SASE app blocks outbound transfers of sensitive files in real-time based on the characteristics defined in the data template. To ensure effective real-time blocking, the SASE app scans files on endpoints and assigns sensitivity levels in advance. Before the scan task is complete, all outbound transfers are blocked by default and the blocking policy does not take effect. The scanning and labeling are performed on the endpoint and are not reported.
        
    
    **Source File Retention**
    
    Specifies whether to retain source file information.
    
    **Retain Screenshot File**
    
    Specifies whether to retain screenshot evidence.
    
    **Status**
    
    The status of the policy. Valid values:
    
    -   Enabled: The policy is in effect. SASE detects files based on the policy.
        
    -   Disabled: The policy is not in effect.
        
    
    **Data Identification Rule Settings**
    
    **Data Identification Rule**
    
    Select a configured identification rule. For more information about how to configure an identification rule, see [Configure detection rules for outbound file classification and categorization](/help/en/sase/user-guide/configure-classification-and-classification-detection-rules-for-outgoing-files).
    
    **Transmission Channel**
    
    Select the data transmission channels. When an employee transfers a file through a selected channel, sensitive file detection is triggered. You can select some or all of the following supported channel types.
    
    Instant Messaging (Software), Email (Software), FTP Channel, Network Share, Print, Mobile Storage, Cloud Drive (Software), Cloud Notes (Software), Remote Desktop, Code Hosting (Software), Large Language Model (Software), Cloud Drive (Web), Email (Web), Code Hosting (Web), Cloud Notes (Web), Cloud Blog, Large Language Model (Web), Social Media, Instant Messaging (Web), and Others.
    
    **Effective Scope**
    
    **User Group**
    
    Select the user group to which the policy applies.
    

### **Step 5: View audit logs**

After the configuration is complete, you can view the detection results for outbound sensitive file transfers in the audit logs.

1.  In the navigation pane on the left, choose **Log Analysis** > **Log Audit**.
    
2.  On the **Log Audit** > **Sensitive File Detection** tab, view the audit logs. You can select a time range, such as **Last Hour**, **Last 6 Hours**, **Last Day**, **Last 7 Days**, or **Last Month**.
    
3.  Find the detected outbound transfer that you want to manage and click **Details** in the **Actions** column to view details such as **Sensitive Message**, **Screenshot Evidence**, **Hit Policy**, **Office Terminal**, **Outbound Transfer Channel**, and **Account Information**.
    

## **References**

-   For more information about how to add other identity sources, see [Identity access](/help/en/sase/user-guide/untitled-document-1716536988072/).
    
-   For more information about how to add code repository operations and specific USB devices to a whitelist, see [Configure a channel whitelist](/help/en/sase/user-guide/configure-channel-whitelist).
    
-   For more information about managing screen and print watermarks for enterprise employees, see [Ensure data security by managing watermarks](/help/en/sase/user-guide/manage-watermarks-to-ensure-data-security).
    
-   For more information about managing peripheral devices, such as USB drives and Bluetooth devices, for enterprise employees, see [Ensure data security by managing peripheral devices](/help/en/sase/user-guide/manage-external-devices-to-ensure-data-security).
