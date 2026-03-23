Identity and access management ensures that only authorized administrators and end users can access or operate specific Alibaba Cloud resources, preventing unauthorized or malicious access. This helps meet compliance and audit requirements. This topic describes the identity and access management capabilities provided by Elastic Desktop Service (EDS) Enterprise to enhance security.

## 01 Account management

### 1.1 Use a RAM user as the administrator account

To reduce potential risks associated with excessive access, avoid using your Alibaba Cloud account, which has full access to all cloud resources, as the administrator account. Instead, create a Resource Access Management (RAM) user with administrator privileges to log on to the EDS Enterprise console and assign permissions to this RAM user according to your specific business needs.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: RAM
    
-   Conditions: none
    

Configuration or usage

-   [Attach EDS Enterprise system policies to a RAM user](/help/en/wuying-workspace/user-guide/grant-a-ram-user)
    

### 1.2 Manage end user account lifecycles

Administrators of EDS Edition can assign cloud resources (such as cloud computers) to end users. To maintain security throughout the account lifecycle, perform the following actions as needed:

-   Promptly reclaim cloud computers allocated to end users when they're no longer in use.
    
-   Disable end user accounts as necessary.
    
-   Ensure timely deletion of accounts that are no longer required.
    

-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    

Configuration or usage

#### **Reclaim unused cloud computers**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Cloud Computer Enterprise Edition** page, find the target cloud computer, click the ⋮ icon in the **Actions** column, and select **View/Add Users**.
    
5.  In the **View/Add Users** panel, click **Add User**.
    
6.  In the **Add User** dialog box, select one or more users to add and click **OK**.
    
    The added users appear in the **Added Users** list. To remove a user, select the user, click **Remove**, and then click **OK** in the confirmation dialog box.
    

#### **Disable inactive accounts**

To temporarily disable a convenience account, you can lock it.

-   For administrator-activated convenience accounts, you can set an automatic lock date during creation or lock them manually at any time after creation. For user-activated convenience accounts, you can only lock them manually after creation.
    
-   When an end user logs on to a WUYING Terminal, the account is automatically locked for 20 minutes after 10 consecutive incorrect password attempts. The account is automatically unlocked after 20 minutes.
    

To manually lock a convenience account, perform the following steps:

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, perform one of the following operations as needed:
    
    -   Single operation: Find the convenience account and click **Lock** in the **Actions** column.
        
    -   Batch operation: Select multiple convenience accounts and click **Lock** at the bottom of the list.
        
        **Note**
        
        Batch operations are only supported for convenience accounts of the same activation type.
        
3.  In the dialog box that appears, click **Confirm**.
    
    **Important**
    
    End users cannot use a locked convenience account to log on to a WUYING Terminal. Use this feature with caution.
    

#### **Delete unnecessary accounts**

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, perform one of the following operations as needed:
    
    -   Single operation: Find the convenience account. In the **Actions** column, click the ⋮ icon and choose **Delete**.
        
    -   Batch operation: Select multiple convenience accounts and at the bottom of the list, choose **More** > **Delete**.
        
        **Note**
        
        Batch operations are only supported for convenience accounts of the same activation type.
        
3.  In the dialog box that appears, click **Confirm**.
    

### 1.3 Configure the password validity period

By default, end user accounts have permanent password validity. However, you can set a password validity period between 30 and 365 days. Once a password expires, the owner must change it before logging on again.

-   Default state: permanently valid
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: The feature is in invitational preview. If you want to use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=1373).
    

Configuration or usage

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Users** > **Users**.
    
3.  On the **User** tab of the **Users & Organizations** page, find the desired convenience account whose password validity period you want to change and click the icon in the **Password Expiration in N Days** column.
    
4.  In the window that appears, enter a new validity period and click **OK**.
    

## 02 Permission management

### 2.1 RAM-based tiered administrator access control

With EDS Enterprise, you can manage permissions by using Resource Access Management (RAM), allowing different RAM users to handle specific aspects of cloud computers. This enables granular access control for streamlined management.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: RAM
    
-   Conditions: none
    

Configuration or usage

-   [Attach EDS Enterprise system policies to a RAM user](/help/en/wuying-workspace/user-guide/grant-a-ram-user)
    
-   [Implement fine-grained access control by using tags](/help/en/wuying-workspace/user-guide/use-tags-to-control-cloud-computer-access)
    
-   [Implement fine-grained access control on cloud computers by using resource-level policies](/help/en/wuying-workspace/user-guide/attach-resource-level-policies-to-ram-users)
    

### 2.2 Alibaba Cloud Workspace account system-based tiered administrator access control

The Alibaba Cloud account that you use to log on to the EDS console has full permissions on EDS features and resources. If your company has a complex organizational structure, multiple departments, and a large number of employees and cloud computers, one administrator is not sufficient to manage all tasks. Additionally, having only one administrator does not meet the permission isolation requirements for business. In this scenario, the main administrator needs one or more sub-administrators to help manage tasks. In this situation, the following requirements must be met:

-   Different sub-administrators have varying levels of permissions. For example, Sub-administrator A can create and manage users but cannot create and manage cloud computers, while Sub-administrator B can only view data and cannot perform any other operations.
    
-   Access to different data is restricted to specific permissions. For example, Sub-administrator C has permissions to view and manage only cloud computers in the R&D department, while Sub-administrator D has permissions to view and manage only cloud computers in the design department.
    

EDS Enterprise's permission management module addresses the preceding requirements.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0626772771/CAEQORiBgICKjsHvrhkiIDBiN2VmZGVjYTliZjQ4YjE5ZmJlZWU1MjQwNTljNDA44216213_20240221151537.762.svg)

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    

Configuration or usage

**Important**

EDS Enterprise and Cloud Phone use the same tiered access control module. Therefore, grant permissions in either product console and the change applies to both products.

1.  In the left-side navigation pane, choose **Security & Audits** > **Administrator Permissions**.
    
2.  On the **Administrator Permissions** page, click **Create Administrator**, configure the following parameters, and then click **OK**.
    
    -   Associate with RAM User: the Resource Access Management (RAM) user that the sub-administrator uses to log on to the EDS console to complete management tasks. Associate a RAM user with a sub-administrator by using one of the following methods:
        
        -   Select a RAM user that exists in the current Alibaba Cloud account: Click **Existing RAM Users** and select a RAM role from the drop-down list.
            
        -   Create a new RAM user: Click **Create RAM User**. On the **RAM Quick Authorization** page, click **Authorize**.
            
            **Note**
            
            The name and initial password of the RAM user are sent to the sub-administrator by the specified email address or mobile number.
            
    -   **Nickname**: the display name of the sub-administrator.
        
    -   **Role**: the default or custom role that the sub-administrator plays. The role defines the permissions granted to the sub-administrator.
        
    -   **Email Address**: the email address of the sub-administrator, which is used to receive the logon credentials of the RAM user.
        
    -   **Mobile Number**: the mobile number of the sub-administrator, which is used to receive the logon credentials of the RAM user. This parameter is optional.
        
3.  On the **Administrator** tab, find the newly created sub-administrator and click **Manage Authorization** in the **Actions** column.
    
4.  In the **Manage Authorization** panel, configure the authorization scope and click **Confirm**. You can grant permissions based on resource types and resource groups. The final scope of authorization is the combination of the two dimensions.
    
    1.  **Resource Type**: You can select **Cloud Computer** or **User**.
        
        **Important**
        
        After you select a specific type of resource for the sub-administrator, the sub-administrator will have full management permissions for that type of resource, including any future resources of the same type. For example, if you select **Cloud Computer**, the sub-administrator has management permissions for all cloud computers in the current Alibaba Cloud account, including cloud computers that will be purchased in the future.
        
    2.  **Available Resource Group**: In the **Available Resource Group** section, select the resource group whose permissions you want to grant to the sub-administrator and click the icon to move it to the **Authorized Resource Group** section.
        

## 03 Identity authentication

### 3.1 MFA

Multi-factor authentication (MFA) is a simple yet effective security measure that adds an extra layer of protection beyond just a username and password. It requires secondary authentication when administrators log on to the EDS Enterprise console or end users access a terminal, ensuring enhanced security for your account and cloud resources. Note that this process does not affect API calls made by using an AccessKey pair.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    
-   References: [Configure MFA](/help/en/wuying-workspace/user-guide/configure-mfa-1)
    

Configuration or usage

#### **Enable MFA for an Alibaba Cloud account**

1.  Log on to the [Alibaba Cloud Management Console](https://home.console.alibabacloud.com/) with an Alibaba Cloud account.
    
2.  Move the pointer over the profile picture in the upper-right corner of the console, and click **Security Settings**.
    
3.  In the **Account Protection** section of the **Security Settings** page, click **Edit**.
    
    **Note**
    
    MFA is renamed Time-based One-time Password (TOTP).
    
4.  On the **Turn on Account Protection** page, select scenarios and the **TOTP** verification method. Then, click **Submit**.
    
5.  In the **Verify identity** step, select a verification method.
    
6.  In the **Install the application** step, click **Next**.
    
7.  On your mobile device, bind a virtual MFA device.
    
    **Note**
    
    The following example shows how to bind a virtual MFA device in the Google Authenticator app on your mobile device that runs iOS.
    
    1.  Open the Google Authenticator app.
        
    2.  Click **Get started** and select one of the following methods to enable a virtual MFA device:
        
        -   Tap **Scan a QR code** in the Google Authenticator app and scan the QR code that is displayed in the **Enable the MFA** step of the Alibaba Cloud Management Console. This method is recommended.
            
        -   Tap **Enter a setup key**, enter an account and the key of the account, and then tap **Add**.
            
            **Note**
            
            In the **Enable the MFA** step of the Alibaba Cloud Management Console, move the pointer over **Scan failed** to view the account and key.
            
        
8.  In the Enable the MFA step of the Alibaba Cloud Management Console, enter the dynamic verification code that is displayed in the Google Authenticator app. Then, click **Next** to complete the account protection settings.
    
    **Note**
    
    Verification codes in the Google Authenticator app are updated at an interval of 30 seconds.
    

#### **Enable MFA for an end user account (organization ID)**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Users** > **Logon Settings**.
    
3.  On the **Organization ID-based Logon** tab, click the **Logon Security** tab, and set **MFA** to **Enable**.
    
4.  In the confirmation dialog box, select an authentication method.
    
    1.  TOTP
        
        Use the Alibaba Cloud app or other common OTP apps, such as Google Authenticator, for two-factor authentication.
        
    2.  Email Verification Code
        
        Applies only to desktop clients with version 7.6 or later and mobile clients with version 7.3 or later. Supports both convenience and AD accounts.
        
        **Note**
        
        If an account does not have an email address associated with it, the user will be unable to complete the verification process.
        

## **Enable MFA for an end user account (office network)**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Office Networks** page, find the office network that you want to manage and click the ID of the office network.
    
5.  In the **Other Information** section, turn on the **MFA** switch. In the message that appears, click **OK**.
    
    **Note**
    
    Make sure that the **Client Logon Verification** and **SSO** switches are turned off.
    

### 3.2 Specify permitted terminals

Each terminal has a unique, tamper-proof identifier called a UUID, which serves as its trusted identity. This UUID is globally unique and cannot be forged, ensuring secure authentication. Administrators can enable trusted device authentication, restricting end users to log on to only the specified terminals. Once trusted device authentication is enabled, end users cannot access cloud computers from unauthorized terminals.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions:
    
    -   Trusted device authentication must be enabled. For more information, see [Enable trusted device authentication](/help/en/wuying-workspace/user-guide/certification-overview#sc-trusted-device).
        
    -   Terminals have been added. When an end user logs on to a software client with your organization ID, the software client information is automatically added to the console.
        
-   References: [Add restricted logon terminals for a convenience account](/help/en/wuying-workspace/user-guide/manage-convenience-users-1#sc-associate-terminal) and [Specify permitted logon terminals for enterprise AD accounts](/help/en/wuying-workspace/user-guide/create-modify-and-delete-ad-users#sc-bind-terminal-for-ad-user)
    

Configuration or usage

1.  In the left-side navigation pane, choose **Users** > **Users**.
    
2.  On the **User** tab of the **Users** page, find the user. In the **Actions** column, click the ⋮ icon and choose **View/Restrict Logon Terminals**.
    
3.  On the **View/Specify Logon Terminals** panel, click **Add Terminal**.
    
4.  In the **Add Terminal** dialog box, select the software clients (desktop and mobile) to add as restricted logon terminals and click **OK**.
    
    To remove a restricted logon terminal, click **Remove** in the **Action** column for the target client, and then click **OK** in the confirmation dialog box.
    

### 3.3 Client logon verification

By default, this feature is disabled. When this feature is enabled, end users are required to verify their identity by entering a verification code sent to their email addresses. This occurs when end users logging on to Alibaba Cloud Workspace from new devices. Logon access is granted only after the verification is successfully completed.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions:
    
    **Note**
    
    This feature takes effect only if end users use convenience accounts to access cloud computers over the Internet.
    
-   References: [Enable client logon verification](/help/en/wuying-workspace/user-guide/certification-overview#sc-client)
    

Configuration or usage

#### **Enable for organization IDs**

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Users** > **Logon Settings**.
    
3.  On the **Organization ID-based Logon** tab, click the **Logon Security** tab, and turn on **Client Logon Verification**.
    
4.  In the message that appears, click **OK**.
    

#### **Enable for** office networks

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Networks & Storage** > **Office Networks**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Office Networks** page, find the desired office network and click its ID.
    
5.  In the **Other Information** section of the office network details page, turn on **Client Logon Verification**.
    
    **Note**
    
    The SSO, MFA, and Client Logon Verification features are mutually exclusive. You can enable only one of the features for an office network within a period of time. For organization IDs, these features are not mutually exclusive. You can enable all of them at the same time.
    
6.  In the message that appears, click **OK**.
    

## 04 Access control

### 4.1 Terminal access control

Cloud computer policies enable you to manage terminal access through logon method controls and IP address whitelisting. To enhance security, we recommend that you configure these policies to restrict end users to specific terminal types and approved IP address ranges when they access cloud computers.

-   You can configure the **Logon Method Control** parameter to choose the type of Alibaba Cloud Workspace terminals that can be used by end users.
    
    Example: To ensure the information security of an enterprise, the administrator sets this parameter to Windows Client and macOS Client.
    
-   You can configure the **CIDR Block Whitelist** parameter to specify the allowed CIDR blocks for accessing cloud computers from Alibaba Cloud Workspace terminals.
    
    Example: To enhance enterprise information security, the administrator adds the CIDR blocks of all office-based Alibaba Cloud Workspace terminals to the whitelist. This restricts employees to connecting to cloud computers only from these whitelisted Alibaba Cloud Workspace terminals.
    

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    

Configuration or usage

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Operation & Maintenance** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
4.  On the **Create Policy** page, enter a **Policy Name**, modify the policy configurations as needed, and then click **OK**.
    
    After the policy is created, it appears in the policy list on the **Policies** page.
    

**Parameter**

**Description**

Logon Method Control

The type of Alibaba Cloud Workspace terminals that can be used by end users to connect to cloud computers. The following types of Alibaba Cloud Workspace terminals are supported:

-   Windows client
    
-   macOS client
    
-   iOS client
    
-   Android client
    
-   Web client
    

By default, all the types are selected. Configure this parameter based on your business requirements.

CIDR Block Whitelist

The allowed IP ranges (CIDR blocks) from which Alibaba Cloud Workspace terminals can access cloud computers.

Click **Add CIDR block**. In the **Add CIDR block** dialog box, enter CIDR blocks based on your business requirements and click **OK**.

Examples: `192.0.XX.XX/32` and`10.0.XX.XX/8`.

### 4.2 Timeout-triggered automatic logout

By default, timeout-triggered automatic logout is disabled. When this feature is enabled, Alibaba Cloud Workspace terminals automatically log off end users if they do not connect to cloud resources, such as cloud computers, applications, phones, or enterprise drives, within the specified timeout period. This feature enhances data security by ensuring inactive sessions are terminated promptly.

-   Default state: off
    
-   Configuration responsibility: customers
    
-   Feature cost: free
    
-   Dependent services: none
    
-   Conditions: none
    

Configuration or usage

1.  Log on to the [Elastic Desktop Service Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Users** > **Logon Settings**.
    
3.  On the **General** tab of the **Logon Settings** page, click **Modify Logon Configurations** to the right of the **Logon Settings** parameter.
    
4.  In the **Modify Logon Configurations** panel, configure the following parameters as needed and click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    Timeout-triggered Automatic Logout
    
    You can turn on or turn off this switch.
    
    Timeout Period
    
    The duration during which end users are disconnected from cloud resources after logging onto Alibaba Cloud Workspace terminals. This parameter is available only if you turn on the **Timeout-triggered Automatic Logout** switch.
    
    Terminal
    
    The Alibaba Cloud Workspace terminals on which this feature takes effect.
    
    **Note**
    
    If you select **Alibaba Cloud Workspace Hardware Terminal**, make sure that the terminal version is V7.5.0 or later. If password-free logon is enabled for the hardware terminals, this feature does not take effect.
    
    **Note**
    
    -   If you select software clients, this feature will apply to subsequent logons of end users.
        
    -   The system notifies end users prior to the expiration of the timeout period. End users may choose to terminate the process. If the notification is ignored, clients are automatically logged off once the timeout period concludes.
