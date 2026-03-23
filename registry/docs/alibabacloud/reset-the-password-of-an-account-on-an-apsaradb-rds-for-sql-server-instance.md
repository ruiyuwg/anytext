If you forget the password of an account on your ApsaraDB RDS for SQL Server instance or the password expires, you can reset the password in the ApsaraDB RDS console or by calling an API operation to ensure business continuity. To ensure data security, **we recommend that you** [configure a password policy](/help/en/rds/apsaradb-rds-for-sql-server/customize-account-password-policies) **or change the password on a regular basis**, especially in scenarios such as multi-user collaboration, permission change, and security audit.

## Limits

If Enforce password expiration and Enforce password policy are configured for your RDS instance, you cannot change the password in the ApsaraDB RDS console. In this case, you can execute the following SQL statements to change the password after you [connect to the RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/connection-instance).

```
USE Master
GO
ALTER LOGIN UserName WITH PASSWORD = 'password'
GO
ALTER LOGIN UserName WITH
      CHECK_POLICY = OFF,
      CHECK_EXPIRATION = OFF;
```

## Procedure

**Note**

For data security purposes, we recommend that you change passwords on a regular basis.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Accounts**.
    
3.  On the tab that appears, find the account for which you want to reset the password and click **Reset Password** in the **Actions** column.
    
    ![重置密码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3713778761/p563360.png)
    
4.  In the dialog box that appears, enter a new password in the New Password and Confirm New Password fields and click **OK**.
    
    The password must meet the following requirements:
    
    -   The password is 8 to 32 characters in length.
        
    -   The password contains at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters.
        
    -   The password can contain the following special characters: ! @ # $ % ^ & \* ( ) \_ + - =
        
    

## **References**

-   [ResetAccountPassword](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-resetaccountpassword-sqlserver)
    
-   [GrantAccountPrivilege](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-grantaccountprivilege-sqlserver)
    
-   [ResetAccount](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-resetaccount-sqlserver)
