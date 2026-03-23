This topic describes how to configure a password policy for the Resource Access Management (RAM) users of your Alibaba Cloud account. You can specify password complexity requirements, including the password length, validity period, and password history check, to ensure password security. The password policy takes effect on all RAM users of your Alibaba Cloud account.

## Background information

Your password is hashed by using Secure Hash Algorithm 256 (SHA-256) with a salt value. Alibaba Cloud does not save your password in plaintext. This ensures password security.

## Procedure

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user who has administrative rights.
    
2.  In the **Password** section of the **Settings** page, click **Modify**. In the panel that appears, configure the password policy parameters. The following table describes the parameters.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2244466271/p836994.png)
    
    **Parameter**
    
    **Description**
    
    **Length**
    
    Specify the minimum length for a password. Valid values: 8 to 32.
    
    **Charset**
    
    Select the types of characters that must be included in a password. Valid values: Lower case, Upper case, Number, and Symbol.
    
    To ensure account security, we recommend that you select at least three types of characters.
    
    **Different Characters**
    
    Specify the minimum number of different characters in a password. Maximum value: 8.
    
    For example, if you set the parameter to 3, a password must contain at least three different characters. In this case, passwords abc and aabbccdef meet the requirement while password abb does not meet the requirement because it contains only two different characters a and b.
    
    **Do Not Contain Username**
    
    Specify whether a password can contain the username. To ensure account security, we recommend that you select **Enable**.
    
    **Max Age**
    
    Specify the validity period of a password. Unit: days. Maximum value: 1095.
    
    To ensure account security, we recommend that you set this parameter to a value less than or equal to 90.
    
    **Note**
    
    -   If you reset a password, the password validity period restarts.
        
    
    **Disable Login After Password Expired**
    
    Specify whether a password can be used for console logon after the validity period of the password elapses. If you select **Enable**, a RAM user who has administrative rights must reset the password for the RAM user to log on to the console. If you deselect **Enable**, a RAM user can log on to the console to change the expired password.
    
    **Do Not Repeat History**
    
    Specify whether a history password can be reused. If you select **Enable**, you must enter a number N to prevent the most recent N history passwords from being reused. Maximum value: 24.
    
    For example, if you set the parameter to 3, you cannot set the password to the most recent three history passwords.
    
    **Max Attempts**
    
    Specify the maximum number of failed password attempts within 1 hour. If you enter invalid passwords for the specified times, the RAM user is locked for 1 hour. Maximum value: 32.
    
    For example, if you set the parameter to 3, a RAM user is locked for 1 hour after three failed password attempts. After the one-hour locking, the RAM user can use the password for logon again.
    
    To ensure account security, we recommend that you set this parameter to a value less than or equal to 5.
    
    **Note**
    
    -   After you reset a password, the number of password retries is reset to zero.
        
    
3.  Click **OK**.
    

## References

[SetPasswordPolicy](/help/en/ram/developer-reference/api-ims-2019-08-15-setpasswordpolicy)
