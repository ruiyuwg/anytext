If your enterprise does not use a dedicated identity provider to manage its organizational structure, you can create a custom identity provider in SASE. This helps ensure that SASE App users are authorized, which improves the security of your work environment. This topic describes how to configure a custom identity provider.

## Limits

You can enable only one custom identity provider at a time. If a custom identity provider is already enabled, you must disable it before you can enable another one.

## Configure a SASE custom identity provider

After you activate SASE, a custom identity provider is created for you by default. If you already have a custom identity provider, you can skip this step.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Identity Authentication** > **Identity Access**.
    
3.  Click the **Identity synchronization** tab, and then click **Create IdP**.
    
4.  In the **Create IdP** panel, select **Custom IdP**, and then click **Configure**.
    
5.  In the **Basic Configurations** section, set the **IdP Name** and **IdP Status** parameters as described in the following table. Then, click **Next**.
    
    **Parameter**
    
    **Description**
    
    **IdP Name**
    
    The name of the custom identity provider.
    
    The name must be 2 to 100 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **IdP Status**
    
    The status of the identity provider. Set the status as needed. Valid values:
    
    -   **Enabled**: If no other custom identity provider is enabled, you can enable the one you are creating.
        
    -   **Closed**: If another custom identity provider is already enabled, you can set the one you are creating to Disabled. After you disable the other custom identity provider, you can enable the new one.
        
        **Important**
        
        Disabling the custom identity provider prevents end users from using the SASE App to access internal applications. Proceed with caution.
        
    
6.  In the **Logon Settings** section, configure the logon methods.
    
    **Parameter**
    
    **Description**
    
    **PC Logon Method**
    
    Supports **Logon with Account and Password** and **Password-free Logon**.
    
    -   If you use logon with username and password, you can enable **Two-factor Authentication**. Valid values:
        
        -   **OTP-based Authentication**: After you enable this feature, select an **OTP Mode**. The following modes are supported:
            
            -   Allow SASE mobile client to display tokens: This is the built-in one-time password (OTP) feature of SASE. Employees must install the SASE mobile app.
                
            -   Allow third-party app tokens: Make sure that the clock of the OTP client is synchronized. Standard and common OTP authentication software, such as the Alibaba Cloud app, is supported.
                
            -   Allow proprietary enterprise tokens: To ensure compatibility with your self-developed OTP system, configure this with the support of technical personnel.
                
        -   **Verification Code-based Authentication**: Supports verification codes sent by text message or email. Make sure that a mobile phone number or email address is entered for each user in the identity provider.
            
    -   If you use passwordless logon, you must first download and log on to the SASE mobile app, and then scan a QR code for authentication.
        
    
    **Mobile Device Logon Method**
    
    Supports **Logon with Account and Password** and **Fingerprint or Face Recognition**.
    
    -   If you use logon with username and password, you can enable **Two-factor Authentication**. Valid values:
        
        -   **OTP-based Authentication**: Before you enable **OTP-based Authentication**, you must enable OTP authentication for PCs and select **Allow Tokens on Third-party Applications** or **Allow Enterprise-owned Tokens**. The token configuration for mobile devices is the same as that for PCs.
            
        -   **Verification Code-based Authentication**: Before you enable **Verification Code-based Authentication**, make sure that a mobile phone number or email address is entered for each user in the identity provider.
            
    -   If you use fingerprint or facial recognition authentication, you still need to enter a username and password the first time you log on to the SASE App.
        
    
7.  Click **Confirm** to complete the configuration.
    

## **Edit** a custom **identity provider**

On the **Identity synchronization** page, find the custom identity provider that you want to edit and click **Edit** in the **Actions** column.

## **Disable a custom identity provider**

On the **Identity synchronization** tab, find the custom identity provider that you want to disable and turn off the switch in the **IdP Status** column.

## **Delete** a custom **identity provider**

On the **Identity synchronization** page, find the custom identity provider that you want to delete and click **Delete** in the **Actions** column.

**Note**

Automatic synchronization is not supported for custom identity providers.

## **References**

### **Connect to a third-party identity provider**

If your enterprise already uses an identity provider such as LDAP, DingTalk, WeCom, Lark, or IDaaS to manage its organizational structure, you can connect it to SASE to access the identity provider information.

-   [Connect to an LDAP identity provider](/help/en/sase/user-guide/connect-an-ldap-identity-source)
    
-   [Connect to a DingTalk identity provider](/help/en/sase/user-guide/connect-a-dingtalk-identity-source)
    
-   [Connect to a WeCom identity provider](/help/en/sase/user-guide/connect-a-wecom-identity-source)
    
-   [Connect to a Lark identity provider](/help/en/sase/user-guide/connect-a-lark-data-source)
    
-   [Connect to an IDaaS identity provider](/help/en/sase/user-guide/connect-an-idaas-identity-source)
    

### **Configure user groups**

For information about how to create user groups outside your enterprise organizational structure, see [User Group Management](/help/en/sase/user-guide/manage-user-groups).
