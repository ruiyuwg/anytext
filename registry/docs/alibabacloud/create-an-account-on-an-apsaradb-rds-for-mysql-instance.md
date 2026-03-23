This topic describes how to create a management account for a database in an ApsaraDB RDS for MySQL instance.

## Prerequisites

An [ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb) is created.

**Note**

If you want to create a RAM user for your Alibaba Cloud account and authorize that user to manage specific instances, see [Create a RAM user](/help/en/ram/create-a-ram-user-1).

## Account types

An ApsaraDB RDS for MySQL instance supports two types of database accounts: privileged accounts and standard accounts. You can manage all accounts and databases in the console. For more information about the permissions of an account, see [List of account permissions](/help/en/rds/apsaradb-rds-for-mysql/account-permissions#concept-2359294).

**Note**

After an account is created, you cannot change its type. You can [delete the account](/help/en/rds/apsaradb-rds-for-mysql/delete-a-standard-account-from-an-apsaradb-rds-for-mysql-instance#concept-zpq-mdp-ydb) and create a new one with the same name.

**Account type**

**Description**

**Privileged Account**

-   Can be created and managed only in the console or by calling an API operation.
    
-   You can create only one privileged account for an instance. The privileged account can be used to manage all standard accounts and databases.
    
-   More permissions are granted to meet personalized and fine-grained permission management requirements. For example, you can grant the query permissions on different tables to different users.
    
-   Has permissions on all databases of the instance.
    
-   Can disconnect any account.
    

**Standard Account**

-   Can be created and managed in the console, by calling an API operation, or by running an SQL statement.
    
-   You can create multiple standard accounts for an instance. The specific number of standard accounts that can be created is related to the instance kernel.
    
-   By default, a standard account has only the logon permission. You must manually grant other permissions to the standard account. For more information, see [Modify the permissions of an account](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance#concept-ys2-4bp-ydb).
    
-   A standard account cannot be used to create or manage other accounts, or disconnect other accounts.
    

**Account type**

**Number of databases that can be created**

**Number of tables that can be created**

**Number of users**

Privileged account

Unlimited

<200,000

Related to the kernel parameters of the instance

Standard account

500

<200,000

Related to the kernel parameters of the instance

**Note**

The number of databases that you can create may be limited by the number of folders allowed by the underlying file system.

## Create a privileged account

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Accounts**.
    
3.  Click **Create Account**.
    
4.  Set the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Database Account**
    
    Enter an account name. The name must meet the following requirements:
    
    -   The name must be 2 to 16 characters in length for MySQL 5.6, or 2 to 32 characters in length for MySQL 8.0 and MySQL 5.7.
        
    -   The name can contain letters, digits, and underscores (\_).
        
    -   The name must start with a letter and end with a letter or a digit.
        
    -   The name cannot be the same as an existing account name.
        
    -   The name of a standard account cannot be similar to the name of a privileged account. For example, if the name of the privileged account is `Test1`, the name of a standard account cannot be `test1`.
        
    -   The name cannot contain reserved keywords.
        
    
    **Account Type**
    
    Select **Privileged Account**.
    
    **New Password**
    
    Set a password for the account. The password must meet the following requirements:
    
    -   The password must be 8 to 32 characters in length.
        
    -   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   Special characters are !@#$%^&\*()\_+-=
        
    
    **Note**
    
    -   Keep the password secure. If you forget the password when you log on to the database, you can [reset the password](/help/en/rds/apsaradb-rds-for-mysql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-mysql-instance).
        
    -   ApsaraDB RDS for MySQL instances that run MySQL 5.7 or MySQL 8.0 allow you to [customize the password policy for database accounts](/help/en/rds/apsaradb-rds-for-mysql/configure-a-custom-password-policy-for-an-apsaradb-rds-for-mysql-instance#task-2058487) to enhance the security of database access.
        
    
    **Confirm Password**
    
    Enter the password again.
    
    **Description**
    
    Enter a description for the account to facilitate subsequent account management. The description can be up to 256 characters in length. The description cannot contain `http://` or `https://`.
    
5.  Click **OK**.
    

## Reset account permissions

If an issue occurs with a privileged account, such as its permissions being unexpectedly revoked, you can reset the permissions to recover them.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Accounts**.
    
3.  To the right of **Privileged Account**, click **Reset Account Permissions**.
    
4.  Enter the password of the privileged account and click **OK** to reset the account permissions.
    

## Create a standard account

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Accounts**.
    
3.  Click **Create Account**.
    
4.  Set the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Database Account**
    
    Enter an account name. The name must meet the following requirements:
    
    -   The name must be 2 to 16 characters in length for MySQL 5.6, or 2 to 32 characters in length for MySQL 8.0 and MySQL 5.7.
        
    -   The name can contain letters, digits, and underscores (\_).
        
    -   The name must start with a letter and end with a letter or a digit.
        
    -   The name cannot be the same as an existing account name.
        
    -   The name of a standard account cannot be similar to the name of a privileged account. For example, if the name of the privileged account is `Test1`, the name of a standard account cannot be `test1`.
        
    -   The name cannot contain reserved keywords.
        
    
    **Account Type**
    
    Select **Standard Account**.
    
    **Authorize Database:**
    
    Grant permissions on one or more databases to the account. You can leave this parameter empty and grant permissions to the account after the account is created.
    
    1.  Select one or more databases from the box on the left and click the **\>** icon to add them to the box on the right.
        
    2.  In the box on the right, select **Read/Write (DDL + DML)**, **Read-Only**, **DDL Only**, or **DML Only** for a database.
        
        If you want to grant the same permissions on multiple databases in a batch, click the required permission type next to **Set All to** in the upper-right corner of the box on the right.
        
        **Note**
        
        For more information about different permissions, see [List of account permissions](/help/en/rds/apsaradb-rds-for-mysql/account-permissions#concept-2359294).
        
    
    **New Password**
    
    Set a password for the account. The password must meet the following requirements:
    
    -   The password must be 8 to 32 characters in length.
        
    -   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   Special characters are !@#$%^&\*()\_+-=
        
    
    **Note**
    
    -   Keep the password secure. If you forget the password when you log on to the database, you can [reset the password](/help/en/rds/apsaradb-rds-for-mysql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-mysql-instance).
        
    -   ApsaraDB RDS for MySQL instances that run MySQL 5.7 or MySQL 8.0 allow you to [customize the password policy for database accounts](/help/en/rds/apsaradb-rds-for-mysql/configure-a-custom-password-policy-for-an-apsaradb-rds-for-mysql-instance#task-2058487) to enhance the security of database access.
        
    
    **Confirm Password**
    
    Enter the password again.
    
    **Description**
    
    Enter a description for the account to facilitate subsequent account management. The description can be up to 256 characters in length. The description cannot contain `http://` or `https://`.
    
5.  Click **OK**.
    

## Related API operations

Use the [CreateAccount](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-createaccount-mysql) operation to create a database account.

## FAQ

### **Can I configure an account to be accessible only from an internal network?**

No, you cannot configure this setting in the console. However, you can run an SQL command to restrict the source IP addresses from which a user can log on. For more information, see [Allow an account to access a database only from specified IP addresses](/help/en/rds/apsaradb-rds-for-mysql/authorize-an-account-to-access-its-authorized-databases-from-specified-ip-addresses-in-an-apsaradb-rds-for-mysql-instance#task-cz5-gpl-sfb).

### **Can I configure more fine-grained permissions for an account, such as permissions to access only a specific table?**

No, you cannot configure this setting in the console. However, you can run an SQL command to configure the permissions. For more information, see [Allow an account to access only specified tables, views, and fields](/help/en/rds/apsaradb-rds-for-mysql/authorize-accounts-to-manage-tables-views-and-fields#task-s31-gql-sfb).

### **How do I create a root account?**

You cannot create a root account in ApsaraDB RDS. You can create only a **Privileged Account**, which has the highest permissions in ApsaraDB RDS, and a **Standard Account**.

### **Why is the** `**AccountLimitExceeded**` **error reported when I call the CreateAccount operation to create a user?**

## **Problem description**

When you call the [CreateAccount](/help/en/rds/developer-reference/api-rds-2014-08-15-createaccount) operation to create a database account, the following error may be reported if the parameters are not set correctly:

```
"Code": "AccountLimitExceeded",
"Message": "AccountQuotaExceeded: Exceeding the allowed amount of account"
```

This error indicates that the number of accounts in the current instance has reached the upper limit.

## **Cause**

-   Account quantity limit: Only one privileged account is allowed.
    
-   Parameter settings: In MySQL, if `AccountType` is set to `Super` (a privileged account) and a privileged account already exists in the database, the `AccountLimitExceeded` error occurs.
    

## **Solution**

-   Create a standard account: Make sure that `AccountType` is set to `Normal`. ApsaraDB RDS does not limit the number of standard accounts. The number of standard accounts that you can create depends on the instance kernel.
    
-   Create a privileged account: Make sure that `AccountType` is set to `Super`. You can go to the **Accounts** page in the ApsaraDB RDS console to check whether a privileged account already exists in the instance. **If a privileged account already exists, do not create another one**.
