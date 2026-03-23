Your logon name is the email address you use to log on to your Alibaba Cloud account. This topic describes how to change it.

**Note**

Changing your logon name only updates the credential used for logon. Your **account ID** (UID), cloud resources, configurations, RAM users, permissions, and AccessKey pairs are not affected. For more information, see [View your Alibaba Cloud account ID](/help/en/account/check-account-id).

## When to change your logon name

You may need to change your logon name in the following scenarios:

-   Your original email address is compromised or no longer meets your security requirements.
    
-   The account is being transferred to a new owner due to an employee departure or role change.
    
-   Your organization wants to standardize all Alibaba Cloud account logon email addresses under a corporate domain.
    

## Prerequisites

You must be logged on to your Alibaba Cloud account to change the logon name. The verification method depends on whether your original logon email address is available:

-   **Original logon email is available**: Complete identity verification using a code sent to your email address or secure phone.
    
-   **Original logon email is unavailable**
    
    -   If you remember your email address, you can still log on with it and your password. Then, receive a verification code on your **mobile phone** to complete the change.
        
-   If you have forgotten your email address and cannot log on, or if both your **secure phone** and **logon email** are unavailable, you must [file an appeal](/help/en/account/account-email-unavailable).
    

## Procedure

**Important**

Users logged on as either a **RAM user**, with a **RAM role**, or through **Enterprise SSO** cannot change the logon name of the Alibaba Cloud account. To make changes, ask the account administrator to log on to the Alibaba Cloud account and update the settings on your behalf.

1.  Log on to the [Account Center](https://myaccount.console.alibabacloud.com/security) and go to the **Security Settings** page. In the **Basic Settings** section, click **Modify** under **Username**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5388020771/p1044443.png)
    
    Alternatively, on the **Overview** page, in the **My Account** section, click the ![p867968](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5388020771/p1051692.png) icon next to **Username**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5388020771/p1051762.png)
    
2.  Complete identity verification using your **mobile phone number**, **original logon email**, or **TOTP**.
    
3.  After verification, enter your new **Logon Email Address**, click **Get Verification Code**, enter the code you receive, and then click **Confirm**.
    
4.  The **Modification successful** message is displayed.
    

## Security recommendations

-   Before changing your logon email, confirm that the new email address is fully under your control. Do not use a shared or third-party-owned address.
    
-   After the change, you can no longer log on with the old email address. All future logon attempts, password resets, and security notifications use the new address.
    

## FAQ

### What do I do if I do not receive a verification code?

1.  If your original logon email or secure phone is accessible, try resending the code. For troubleshooting steps, see [What do I do if I do not receive a verification code during registration or logon?](/help/en/account/no-verification-code-received-during-registration-or-logon-verification)
    
2.  If both your secure phone and logon email are unavailable, you must [file an appeal](/help/en/account/account-email-unavailable).
    

### What do I do if the new email address is already in use?

This means the email address is already registered to another Alibaba Cloud account. You can:

1.  Use a different email address that has not been registered.
    
2.  If the email address belongs to you but you have forgotten the password of the other account, recover access to it. For more information, see [How do I reset a forgotten password?](/help/en/account/self-service-login-or-password-reset)
