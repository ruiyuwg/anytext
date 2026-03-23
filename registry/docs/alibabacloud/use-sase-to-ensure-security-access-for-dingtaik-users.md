Connect Secure Access Service Edge (SASE) to DingTalk. This allows your enterprise users to log on to the SASE client with their DingTalk accounts. You can then manage their access permissions in SASE to secure your enterprise data. This topic describes how to connect SASE to DingTalk.

## Scenarios

SASE helps you manage private and Internet access permissions for your employees and protect your enterprise data. If you use DingTalk to manage your enterprise's user information, you can connect SASE to DingTalk. This connection allows users to log on to the SASE client with their DingTalk accounts. You do not need to maintain a separate identity management system for SASE, which reduces user information maintenance costs.

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0073351671/CAEQLxiBgMCRobSwmxkiIGQ1YmQwZDkzYjdlYzQxYjM5NjA4YjAwNmY2MjJhOWNk4672362_20240911170612.668.svg)

## Prerequisites

Activate [Secure Access Service Edge](/help/en/sase/product-overview/billing-overview) and [install the SASE client](/help/en/sase/user-guide/install-and-log-on-to-sase-client).

**Important**

The DingTalk operations in this topic are performed in the new DingTalk console. The information about the DingTalk Open Platform is for reference only. For more information, see the official DingTalk documentation.

## Step 1: Create a DingTalk application and add the application homepage URL

### **1.1 Create a DingTalk application**

To synchronize DingTalk data to SASE, you must first create a DingTalk application in the DingTalk Open Platform.

**Note**

-   The DingTalk Robot webhook was commercialized in phases starting from January 1, 2024, and was fully commercialized on February 1, 2024. The free quota is 5,000 calls per calendar month. For more information, see [Webhook Commercialization Announcement](https://open.dingtalk.com/document/orgapp/webhook-stream-free-to-commercialization-announcement?spm=5176.2020520111.help.4.11086610aDKp8C).
    
-   In the DingTalk marketplace, you can activate the Alibaba Cloud miniapp to receive alert notifications from DingTalk for free. Click [Activate Now](https://oa.dingtalk.com/register_new.htm?spm=5176.2020520111.help.5.11086610aDKp8C&source=aliyun_app#/).
    

1.  Use an administrator account to log on to the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp). In the top menu bar, click **Application Development**.
    
2.  In the navigation pane, choose **Internal-facing Applications** > **DingTalk Application**.
    
3.  On the **DingTalk Application** page, click **Create Application**.
    
4.  In the **Create Internal-facing Application** dialog box, set the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Application Name**
    
    The name of the application.
    
    The name can contain Chinese characters, uppercase letters, lowercase letters, and digits.
    
    AlibabaCloudSASE
    
    **Application Description**
    
    A description of the application.
    
    AlibabaCloudSASE
    
    **Application Icon**
    
    The icon for the application.
    
    The image must be in JPG or PNG format, 240 × 240 pixels or larger, have an aspect ratio of 1:1, be no larger than 120 KB, and have no border radius.
    
    ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3120702371/p358133.png)
    
5.  Click **Create**.
    

### **1.2 Configure the homepage URL**

Add a homepage URL for the AlibabaCloudSASE application that you created.

1.  On the **DingTalk Application** page, click the **AlibabaCloudSASE** application that you created.
    
2.  In the navigation pane, choose **Application Capabilities** > **Web App**.
    
3.  On the **Web App** page, set **Application Homepage URL** to https://login.aliyuncsas.com/ui/dingAuth/, and click **Save**.
    

## Step 2: Add API permissions, security settings, and sharing settings

### 2.1 Add API permissions

You must add API permissions to synchronize the DingTalk organizational structure.

1.  Use an administrator account to log on to the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp). In the top menu bar, click **Application Development**.
    
2.  In the navigation pane, choose **Internal-facing Applications** > **DingTalk Application**.
    
3.  On the **DingTalk Application** page, click the **AlibabaCloudSASE** application that you created.
    
4.  In the navigation pane, click **Permission Management**.
    
5.  On the **Permission Management** page, you can set the permission scope and enable the following permissions.
    
    Set the permission scope to **All Employees**.
    
    -   **Personal Mobile Number Information**
        
    -   **Read Permission For Personal Information In The Address Book**
        
    -   **Enterprise Employee Mobile Number Information**
        
    -   **Email And Other Personal Information**
        
    -   **Read Permission For Department Information In The Address Book**
        
    -   **Read Permission For Member Information**
        
    -   **Read Permission For Department Members In The Address Book**
        
    

### 2.2 Configure security settings

After you configure a callback domain name, employees can log on to the SASE client using their DingTalk credentials or by scanning a QR code with their mobile device.

1.  In the navigation pane, choose **Development Configuration** > **Security Settings**.
    
2.  On the **Security Settings** page, in the **Server Egress IP** field, enter the IP addresses of the servers that call the DingTalk server-side API.
    
3.  Set **Redirection URL (Callback Domain)** to https://login.aliyuncsas.com/open-dev/dingtalk, and click **Save**.
    
4.  In the navigation pane, choose **Development Configuration** > **Sharing Settings**.
    
5.  On the **Sharing Settings** page, in the **Login Integration** section, add https://login.aliyuncsas.com/open-dev/dingtalk as the callback domain name.
    

### 2.3 Configure sharing settings

Configure sharing settings as needed. This allows users to quickly share content after logging on, which facilitates information sharing and collaboration within the enterprise.

On the **Sharing Settings** page, in the **Share Integration** section, click **Edit**. Configure the parameters for **iOS Share** and **Android Share** as described in the following table, and then click **Save**.

**Category**

**Parameter**

**Value**

**IOS Share**

**iOS Bundle ID**

com.aliyun.security.saseiosApp

**Android Share**

**Android Package Name**

com.aliyun.security.sase

**Android Signature**

294e7d6880381b01ea56d91ee6656ff0

## Step 3: Connect SASE to DingTalk data

After you configure the settings in DingTalk, you must establish a connection to the DingTalk data in the SASE identity source settings.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane, choose **Identity Authentication** > **Identity Access**.
    
3.  On the **Identity synchronization** tab, click **Create IdP**.
    
4.  In the **Create IdP** panel, select **DingTalk**, and then click **Configure**. Complete the configuration by following the wizard.
    
5.  In the **Basic Configurations** step, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **IdP Name**
    
    The name of the DingTalk identity source.
    
    The name must be 2 to 100 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    test
    
    **Description**
    
    The description of the configuration.
    
    The description is displayed as the logon title on the SASE client interface to provide information about the identity source during logon.
    
    DingTalk Logon
    
    **IdP Status**
    
    Set the status of the identity source as required. Valid values are:
    
    -   **Enabled**: The identity source is enabled after creation.
        
    -   **Closed**: The identity source is disabled after creation.
        
        **Important**
        
        If you disable an identity source, end users cannot use the SASE App to access internal applications. Proceed with caution.
        
    
    Enabled
    
    **CorpId**
    
    The ID of the enterprise in DingTalk. Each enterprise has a unique CorpId. Obtain the CorpId from the home page of the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/#/).
    
    ding3608be7c4e5266ce4ac5d6980864\*\*\*\*
    
    **AppKey**
    
    The AppKey of the application created in the DingTalk Open Platform. Obtain the AppKey from the **Credentials And Basic Information** page of the target application in the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/fe/app#/corp/app).
    
    dingwjlht8b93ara\*\*\*\*
    
    **AppSecret**
    
    The AppSecret of the application created in the DingTalk Open Platform. Obtain the AppSecret from the **Credentials And Basic Information** page of the target application in the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/fe/app#/corp/app).
    
    1Uji1mEjhmWq\_SmE0KNScspYk0bBgDrlZ95vUTR-bn4FbfeVQQKNr1\_1giWA\*\*\*\*
    
    **Advanced Settings**
    
    **DingTalk Type**: Select **DingTalk Standard** or **Dedicated DingTalk**.
    
    **Event Subscription**: After you configure event subscription, the organizational structure of your employees is synchronized to SASE. This ensures that SASE security policies are promptly updated when the organizational structure is adjusted or an employee resigns.
    
    -   **AES Encryption Key**
        
        Obtain the encryption aes\_key from the **Event Subscription** page of the target application in the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/fe/app#/corp/app).
        
    -   **Encryption Token**
        
        Obtain the encryption token from the **Event Subscription** page of the target application in the [DingTalk Open Platform](https://open-dev.dingtalk.com/v2/fe/app#/corp/app).
        
    
    -   Encryption aes\_key: SRIcwnup1JHFJ4O2SzLS1RtQGJzC3RG2c33AM\*\*\*\*\*\*
        
    -   Encryption token: YYwR3A3rV6mrvpC\*\*\*\*\*\*
        
    
    **Automatic Synchronization**
    
    If you enable **Automatic Synchronization**, the system automatically synchronizes information from DingTalk based on the synchronous mode.
    
    If you do not enable **Automatic Synchronization**, you must manually synchronize the organizational structure. For more information, see [Connect an LDAP IdP to SASE](/help/en/sase/user-guide/connect-an-ldap-identity-source#a562e5a895fpv).
    
    Enabled
    
    **Synchronize User Information**
    
    If you enable **Synchronize User Information**, the system automatically synchronizes employee information from DingTalk based on the **Automatic Synchronization Cycle**.
    
    **Note**
    
    If **Automatic Synchronization** is disabled, the **Synchronize User Information** feature does not run.
    
    Enabled
    
    **Automatic Synchronization Cycle**
    
    Set the **Automatic Synchronization Cycle**. You can set the interval from 1 hour to 24 hours.
    
    24 hours
    
    The panel provides the required configuration links. You can click the links to copy them.
    
    -   **Copy Request URL**: Use this value to configure subscription management in the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp).
        
    -   **Copy Application Homepage Address**: Use this value to view application details in the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp).
        
    -   **Copy Callback Domain Name**: Use this value to configure the callback domain in the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp).
        
6.  Click **Connectivity Test**. After the test is successful, click **Next**.
    
    **Note**
    
    If the **Connection Failed** message is displayed, verify that the server address and server port are correct.
    
7.  In the **Synchronization Settings** step, configure the synchronization scope for the organizational structure and the field mappings. Then, click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    **Organizational Structure Synchronization**
    
    Configure the synchronization scope for the organizational structure.
    
    -   **Synchronize All**: Synchronizes the entire DingTalk organizational structure to the SASE system.
        
    -   **Partially Synchronize**: Select the organizational structure to synchronize.
        
    
    **Field Synchronization Mapping**
    
    Configure the mapping between DingTalk organizational structure fields and SASE synchronization fields.
    
    **Note**
    
    If the built-in **Local Field After Mapping** in the SASE system does not meet your business requirements, click **View Extended Fields** in the upper-right corner of the list. In the **View Extended Fields** panel, you can add, edit, or delete extended fields.
    

## Step 4: Configure DingTalk event subscription

Configure DingTalk event subscription to ensure that the application can receive event notifications in real time.

1.  Use an administrator account to log on to the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp). In the top menu bar, click **Application Development**.
    
2.  In the navigation pane, choose **Internal-facing Applications** > **DingTalk Application**.
    
3.  On the **DingTalk Application** page, click the **AlibabaCloudSASE** application that you created.
    
4.  Configure event subscription.
    
    1.  In the navigation pane, click **Event Subscription**. Set **Push Method** to **HTTP Push**. Enter the **Encryption Aes\_key**, **Signature Token**, and **Request URL**. To configure these parameters, follow these steps:
        
        1.  In the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas), find the IdP that you created in Step 3. In the **Edit Identity Source** panel, copy the value of the **Request Address** parameter. Then, paste it into the **Request URL** field in the **Event Subscription** section of the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp) application.
            
        2.  Copy the **Encrypt Aes\_key** and **Signature Token** from the **Event Subscription** page of the [DingTalk Open Platform](https://open-dev.dingtalk.com/#/corpeapp) application. Paste them into the corresponding **Encrypt Aes\_key** and **Encryption Token** fields in the **Edit Identity Source** panel of the [SASE console](https://yundun.console.alibabacloud.com/?p=csas). For more information, see the following screenshot.
            
        3.  After you complete the configuration, click **Save** in both the identity source panel and on the event subscription page.
            
    2.  On the **Event Subscription** page, select the address book events that you want to enable.
        
        These events include **User Added To Address Book**, **User In Address Book Changed**, **User Removed From Address Book**, **Department Created In Address Book**, **Department In Address Book Modified**, and **Department In Address Book Deleted**. For more information about how to configure DingTalk event subscription, see [Event Subscription](https://open.dingtalk.com/document/org/push-events).
        
    

## Step 5: Verify the connection

1.  Open the SASE client that you installed.
    
2.  Enter the enterprise ID, and then click **Confirm**.
    
    Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas). In the navigation pane on the left, go to the **Settings** page to obtain the **Enterprise Authentication Identifier**.
    
3.  Enter your DingTalk username and password and click **Log On**, or scan the QR code to log on.
    
    A successful logon indicates that the connection is established.
