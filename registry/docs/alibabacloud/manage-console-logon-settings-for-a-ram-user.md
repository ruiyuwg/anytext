This topic describes how to enable console logon, and view, modify, or clear the console logon settings for a Resource Access Management (RAM) user.

## Enable console logon for a RAM user

A RAM user that has administrative rights can enable console logon for a RAM user and configure parameters such as the logon password.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  In the **User Logon Name/Display Name** column, click the username of the RAM user that you want to manage.
    
4.  In the **Console Logon Management** section of the **Authentication** tab, click **Enable Console Logon**.
    
5.  In the **Modify Logon Settings** panel, configure the following parameters.
    
    -   **Console Password Logon**: Select **Enabled**.
        
    -   **Set Logon Password**: Select Automatically Regenerate Default Password or Reset Custom Password based on your business requirements.
        
        **Warning**
        
        After a password is configured, keep the new password confidential and notify the RAM user of the password. If you do not notify the RAM user of the password, the RAM user cannot log on to the Alibaba Cloud Management Console.
        
    -   **Password Reset**: Set this parameter to specify whether to reset the password upon the next logon of the RAM user.
        
    -   **Enable MFA**: Set this parameter to specify whether to enable multi-factor authentication (MFA) for the RAM user. If you select **Required**, the page on which a RAM user can enable an MFA device automatically appears upon the next logon of the RAM user.
        
    
6.  Click **OK**.
    

## View console logon settings of a RAM user

After console logon is enabled for a RAM user, a RAM user that has administrative rights can view the console logon settings.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  In the **User Logon Name/Display Name** column, click the username of the RAM user that you want to manage.
    
4.  In the **Console Logon Management** section of the **Authentication** tab, view the console logon settings.
    
    -   **Console Access**: indicates whether console logon is enabled.
        
    -   **Last Console Logon**: indicates the last time that the RAM user logged on to the console.
        
    -   **Required to Enable MFA**: indicates whether MFA is required when the RAM user logs on to the console.
        
    -   **Reset Password at Next Logon**: indicates whether password resetting is required when the RAM user logs on to the console the next time.
        

## Modify console logon settings for a RAM user

After console logon is enabled for a RAM user, a RAM user that has administrative rights can modify console logon settings based on business requirements. For example, a RAM user that has administrative rights can disable console logon or modify the logon password.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  In the **User Logon Name/Display Name** column, click the username of the RAM user that you want to manage.
    
4.  In the **Console Logon Management** section of the **Authentication** tab, click **Modify Logon Settings**.
    
5.  In the **Modify Logon Settings** panel, configure the following parameters.
    
    -   **Console Password Logon**: Select **Disabled**.
        
        **Note**
        
        -   If you select Disabled, you can still modify logon settings for the RAM user. However, the settings after modification do not take effect. The settings take effect only after you select **Enabled**.
            
        -   If you select Disabled, the RAM user and the RAM role that the RAM user assumes are forcefully logged out.
            
        
    -   **Set Logon Password**: Select Keep Current Password Unchanged, Automatically Regenerate Default Password, or Reset Custom Password based on your business requirements.
        
        **Note**
        
        After you change the logon password of a RAM user, the RAM user and the RAM role that the RAM user assumes are forcefully logged out. The RAM user must use the new password to log on again.
        
    -   **Password Reset**: Set this parameter to specify whether to reset the password upon the next logon of the RAM user.
        
    -   **Enable MFA**: Set this parameter to specify whether to enable multi-factor authentication (MFA) for the RAM user. If you select **Required**, the page on which a RAM user can enable an MFA device automatically appears upon the next logon of the RAM user.
        
    
6.  Click **OK**.
    

## Clear console logon settings for a RAM user

A RAM user that has administrative rights can clear console logon settings for a RAM user with a few clicks and disable console logon for the RAM user.

**Warning**

-   Console logon settings cannot be automatically restored after you clear the settings. Proceed with caution.
    
-   After you clear the console logon settings for a RAM user, the RAM user and the RAM role that the RAM user assumes are forcefully logged out.
    

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  In the **User Logon Name/Display Name** column, click the username of the RAM user that you want to manage.
    
4.  In the **Console Logon Management** section of the **Authentication** tab, click **Remove Logon Settings**.
    
5.  Click **OK**.
