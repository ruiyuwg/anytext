To improve the security of your account, this topic describes how to change the logon password for your Alibaba Cloud account while you are logged on.

## **Prerequisites**

This topic applies only to changing the logon password for your **Alibaba Cloud account** while you are logged on. For other scenarios, see the appropriate solution:

### **Password validity**

-   If you **forgot your password and cannot log on**, see [Reset a forgotten password](/help/en/account/self-service-login-or-password-reset).
    
-   If your current password is valid and you can log on, you can follow the steps in this topic to change it.
    

### **Change the password for a non-root account**

-   To change the password for a **Resource Access Management (RAM) user**, contact your account administrator or RAM administrator to change the password in the RAM console. For more information, see [Change the logon password of a RAM user](/help/en/ram/user-guide/change-the-logon-password-of-a-ram-user).
    
-   To change the password for an **enterprise Single Sign-On (SSO)** user, change it in your corporate identity provider (IdP).
    
-   To change the logon password for a **server**, such as an Elastic Compute Service (ECS) or Simple Application Server instance, see [Manage instance logon credentials (logon name/password/key pair)](/help/en/ecs/user-guide/instance-logon-credential-management) or [Set or reset the password of a server](/help/en/simple-application-server/user-guide/manage-the-password-of-a-server).
    

## **Procedure**

If you log on as a RAM user, with a **RAM role**, or through **enterprise SSO**, you cannot change the password of the root account. You must contact the account administrator to log on to the root account and perform this operation.

1.  Log on to the Alibaba Cloud **[Account Center](https://myaccount.console.alibabacloud.com/)** and go to the **Security Settings** page. In the **Basic Settings** area, find **Logon Password** and click **Modify**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6542710771/p1040899.png)
    
    Alternatively, on the **Overview** page, in the **My Account** area, you can click the ![p867968](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6542710771/p1051691.png) icon next to **Logon Password** to make changes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6542710771/p1051758.png)
    
2.  On the **Verify Identity** page, you can verify your identity using your **original secure phone**, **logon email**, or **TOTP**. If you cannot complete the identity verification, you can submit a ticket to change your phone number or email address. For more information, see [The email address of my account is unavailable](/help/en/account/account-email-unavailable).
    
3.  After the verification is successful, the **Change Password** page appears. Enter a **New logon password** and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6371804371/p875621.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6371804371/p875622.png)
    
4.  After the password is **changed successfully**, you must **remember the new logon password**. Click **Log On Again** to log on to the Alibaba Cloud website.
    

## What to do next

After you change your password, your Alibaba Cloud account is immediately logged out from all devices.

-   Use your new password to log on to the Alibaba Cloud console or Alibaba Cloud app.
    
-   To ensure account security, you may be required to complete secondary authentication, such as by text message, when you use the new password to log on from an unfamiliar device or network environment.
    

## FAQ

### **What do I do if my secure phone number or email address is no longer in use during identity verification?**

If you cannot complete the identity verification, you can submit a ticket to change your password. For more information, see [The email address of my account is unavailable](/help/en/account/account-email-unavailable).

### **What do I do if I do not receive a text message **or email** verification code?**

Check the following items:

-   **Text message verification code**: Check whether your phone has an overdue payment, has a stable signal, has call-blocking software installed, or has blacklisted the carrier's number.
    
-   **Email verification code**: Check whether the email was moved to the spam or subscriptions folder.
    
-   If you do not receive the code after a long time because of network latency, wait a moment and try again. If the issue persists, contact technical support.
