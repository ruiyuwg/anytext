This topic describes how to reset the password of an account on an ApsaraDB RDS for MySQL instance. If the password of an account is lost, you can reset the password in the ApsaraDB RDS console.

## Procedure

**Note**

For data security purposes, we recommend that you change passwords on a regular basis.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Accounts**.
    
3.  On the tab that appears, find the account for which you want to reset the password and click **Reset Password** in the **Actions** column.
    
4.  In the dialog box that appears, configure the new password and confirm the password.
    
    The password must meet the following requirements:
    
    -   The password is 8 to 32 characters in length.
        
    -   The password contains at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters.
        
    -   The password can contain the following special characters: ! @ # $ % ^ & \* ( ) \_ + - =
        
    
    **Note**
    
    -   We recommend that you keep the password confidential. If you forget your password, you can reset the password. For more information, see [Reset the password of an account on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-mysql-instance).
        
    -   If your RDS instance runs MySQL 5.7, you can configure a custom password policy for the RDS instance. For more information, see [Configure a custom password policy](/help/en/rds/apsaradb-rds-for-mysql/configure-a-custom-password-policy-for-an-apsaradb-rds-for-mysql-instance#task-2058487).
        
    
5.  (Optional) Turn on the **Also Reset Account** switch to reset the account permission together with the password.
    
6.  Click **OK**.
    

## **References**

[Create an account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance)

## Related operations

**Operation**

**Description**

[ResetAccountPassword](/help/en/rds/api-reset-account-password#doc-api-Rds-ResetAccountPassword)

Resets the password of an account on an instance.
