You can create standard, privileged, and global read-only accounts for an ApsaraDB RDS for SQL Server instance in the ApsaraDB RDS console or by calling an API operation.

## **Scope**

-   **The first account for an instance must be a privileged account or a** [superuser account (SA permissions)](/help/en/rds/apsaradb-rds-for-sql-server/create-a-system-admin-account-for-an-apsaradb-rds-for-sql-server-instance)**.**
    
-   Privileged and standard accounts can be created for instances of all specifications. Global read-only accounts can be created for instances that meet the following requirements:
    
    -   Database version: SQL Server 2016 or later.
        
    -   Instance family: General-purpose or dedicated.
        
-   **Account limits**:
    
    -   Standard accounts: No limit.
        
    -   Privileged accounts: A maximum of one privileged account per instance.
        
    -   Global read-only accounts: A maximum of two global read-only accounts per instance.
        

## **Account permission rules**

## Privileged account management rules

**Scenarios**

**Permission behavior**

Create a privileged account

When created, the account is automatically granted the [db\_owner role](/help/en/rds/apsaradb-rds-for-sql-server/database-advanced-feature-management#e4b313001ejia) for all existing databases. No manual authorization is required.

Add a database

-   The account has no access permissions on databases that are created after the account is created.
    
-   Log on to the ApsaraDB RDS console and [modify the permission scope of the privileged account](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions#section-tzz-qbp-ydb) to grant it the db\_owner permission on the new database.
    

[Delete a privileged account](/help/en/rds/apsaradb-rds-for-sql-server/delete-an-account-for-an-rds-sql-server-instance)

-   This operation permanently removes the account and its permissions on all databases.
    
-   The account can no longer be used to log on to the instance or perform any database operations.
    

Recreate a privileged account

-   If you create a privileged account again, regardless of whether you use the original account name, the system automatically grants the new account the db\_owner permission on **all existing databases in the current instance**.
    
-   For databases created after this, you must still [manually modify permissions](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions#section-tzz-qbp-ydb) to grant the account the db\_owner permission.
    

## Standard account management rules

**Scenario**

**Permission behavior**

Create a standard account

-   When you create the account, you must manually specify the databases to authorize and the corresponding permissions (read/write, read-only, or owner).
    
-   If you do not select any database, the account is created but has no access permissions on any database.
    
-   The account has no permissions on any database. You must [manually grant permissions](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions#section-tzz-qbp-ydb).
    

Add a database

-   A standard account has no access permissions on new databases by default.
    
-   The account is not automatically associated with new databases, even if it was previously granted permissions.
    
-   You must [manually add the new database to the account's authorization list and set the appropriate permissions](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions#section-tzz-qbp-ydb).
    

[Delete a standard account](/help/en/rds/apsaradb-rds-for-sql-server/delete-an-account-for-an-rds-sql-server-instance)

-   After the account is deleted, all its database access permissions are permanently removed.
    
-   The account can no longer be used to log on to the instance or perform any database operations.
    
-   Connections from associated applications will fail. Update the account and password information promptly.
    

Recreate a standard account with the same name

-   Even if you recreate an account with the same name, its original permissions are not automatically restored.
    
-   The new account is in a "blank state" with no permissions on any database.
    
-   You must [manually reauthorize databases and set permissions](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions#section-tzz-qbp-ydb) to restore access.
    

## Global read-only account management rules

**Scenario**

**Permission behavior**

Create a global read-only account

-   After the account is created, it is automatically granted read-only permissions on all existing databases in the instance. You do not need to grant permissions for each database.
    
-   The account does not have access permissions on the `master` and `rdscore` (if it exists) system databases.
    

Add a database

For new databases (databases created after the account is created), the account is automatically granted read-only access. You do not need to manually grant permissions or change the scope.

Delete a global read-only account

-   This operation permanently removes the account and its read-only permissions.
    
-   The account can no longer be used to log on to the instance or perform any database operations.
    

Recreate a global read-only account

-   If you create a global read-only account again, regardless of whether you use the original account name, the system automatically grants it read-only permissions on all existing databases in the current instance.
    
-   For databases created after this, the account is still automatically granted read-only permissions. No manual authorization is required.
    

## **Notes**

-   **Set a strong password**: To ensure database security, set a strong password for the database account and change it regularly. You can also [set a password policy for the account](/help/en/rds/apsaradb-rds-for-sql-server/customize-account-password-policies) to control the password validity period and enhance account security.
    
-   **Principle of least privilege**: When you assign permissions to a database account, follow the principle of least privilege. Create accounts based on business roles and assign read-only and read/write permissions as needed. If necessary, you can create database accounts and databases with finer granularity. This ensures that each database account can access only the data required for its business. If write operations are not required, assign read-only permissions.
    

## Create an account

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Accounts**.
    
3.  Click **Create Account** and set the following parameters.
    
    **Note**
    
    The first account for an ApsaraDB RDS for SQL Server instance must be a **privileged account** or a [superuser account](/help/en/rds/apsaradb-rds-for-sql-server/create-a-system-admin-account-for-an-apsaradb-rds-for-sql-server-instance). You can create a standard or global read-only account only after you create a privileged or superuser account.
    
    ## Privileged account
    
    **Parameter**
    
    **Description**
    
    **Database Account**
    
    Enter a database account name. The name must start with a letter and end with a letter or a digit. It can contain lowercase letters, digits, and underscores (\_). The account name cannot be a [keyword](/help/en/rds/developer-reference/forbidden-keywords).
    
    **Account Type**
    
    Select **Privileged Account**. Each instance supports only one privileged account.
    
    **New Password**
    
    Enter a password for the account. The password must meet the following requirements:
    
    -   8 to 32 characters in length.
        
    -   Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   Special characters are `!@#$%^&*()_+-=`.
        
    
    **Confirm Password**
    
    Enter the same password again to confirm it.
    
    **Apply password policy**
    
    Applying a password policy lets you control the password validity period and enhance account security. Before you apply a policy, you must first [set a password policy for the account](/help/en/rds/apsaradb-rds-for-sql-server/customize-account-password-policies#353cf8e42efxj).
    
    **Description**
    
    Enter a description. The description can be up to 256 characters in length.
    
    ## Standard account
    
    **Parameter**
    
    **Description**
    
    **Database Account**
    
    Enter a database account name. The name must start with a letter and end with a letter or a digit. It can contain lowercase letters, digits, and underscores (\_). The account name cannot be a [keyword](/help/en/rds/developer-reference/forbidden-keywords).
    
    **Account Type**
    
    Select **Standard Account**. An instance can have multiple standard accounts.
    
    **Authorize Database:**
    
    You can grant a **Standard Account** permissions on one or more databases and set different permissions for each. If no database has been created, you can leave this field empty and grant permissions to the account later. To grant permissions:
    
    1.  In the **Unauthorized Databases** list, select the databases that you want to authorize.
        
    2.  Click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0556798861/p687377.png) to add the databases to the **Authorized Databases** list.
        
    3.  Set permissions on the databases for the account. The permissions can be **Read/Write (DML)**, **Read-Only**, or **Owner**. For more information about permissions, see [Account permissions](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions#1e306fbb283p9).
        
    
    **New Password**
    
    Enter a password for the account. The password must meet the following requirements:
    
    -   8 to 32 characters in length.
        
    -   Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   Special characters are `!@#$%^&*()_+-=`.
        
    
    **Confirm Password**
    
    Enter the same password again to confirm it.
    
    **Apply password policy**
    
    Applying a password policy lets you control the password validity period and enhance account security. Before you apply a policy, you must first [set a password policy for the account](/help/en/rds/apsaradb-rds-for-sql-server/customize-account-password-policies#353cf8e42efxj).
    
    **Description**
    
    Enter a description. The description can be up to 256 characters in length.
    
    ## Global read-only account
    
    **Parameter**
    
    **Description**
    
    **Database Account**
    
    Enter a database account name. The name must start with a letter and end with a letter or a digit. It can contain lowercase letters, digits, and underscores (\_). The account name cannot be a [keyword](/help/en/rds/developer-reference/forbidden-keywords).
    
    **Account Type**
    
    Select **Global Read-Only Account**. After this account is created, it is automatically granted read-only permissions on all existing databases in the instance. These permissions also apply to any new databases.
    
    **New Password**
    
    Enter a password for the account. The password must meet the following requirements:
    
    -   8 to 32 characters in length.
        
    -   Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   Special characters are `!@#$%^&*()_+-=`.
        
    
    **Confirm Password**
    
    Enter the same password again to confirm it.
    
    **Apply password policy**
    
    Applying a password policy lets you control the password validity period and enhance account security. Before you apply a policy, you must first [set a password policy for the account](/help/en/rds/apsaradb-rds-for-sql-server/customize-account-password-policies#353cf8e42efxj).
    
    **Description**
    
    Enter a description. The description can be up to 256 characters in length.
    
4.  Click **OK**. After the page refreshes, you can view the created account.
    

## **References**

-   Use the console to [create a database account with SA permissions](/help/en/rds/apsaradb-rds-for-sql-server/create-a-system-admin-account-for-an-apsaradb-rds-for-sql-server-instance).
    
-   Create different types of database accounts by calling the [CreateAccount](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-createaccount-sqlserver) API operation.
    
-   Delete different types of database accounts by calling the [DeleteAccount](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-deleteaccount-sqlserver) API operation.
    

## **FAQ**

#### **Can an account created on a primary instance be used on a read-only instance?**

Accounts created on a primary instance are synchronized to its read-only instances. You cannot manage accounts on read-only instances. Accounts on a read-only instance have only read-only permissions and cannot be used to perform write operations.

#### **How do I bypass the password complexity requirements for an ApsaraDB RDS for SQL Server instance?**

To ensure database security, ApsaraDB RDS for SQL Server requires that a password **contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The password must be 8 to 32 characters in length**.

However, if you must bypass the password complexity requirements for business needs, perform the following steps:

**Important**

A simple password increases the risk of attacks on your system. Set a strong password for your database account and change it regularly.

1.  Create a user account **A** in the RDS instance, and use account **A** with SQL Server Management Studio (SSMS) to [connect to the SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/connection-instance).
    
2.  Use account A to create the destination account. When you create the destination account, disable the password complexity check. The SQL statement is as follows:
    
    **Note**
    
    You cannot switch to the master database when you connect to a SQL Server database using DMS. You must connect to the instance using SSMS to execute the SQL statement.
    
    ```
    -- Switch to the master database
    USE master
    GO
    -- Create the destination account
    CREATE LOGIN [Destination Account Name] WITH PASSWORD=N'Destination Account Password', CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
    GO
    -- Enable the destination account
    ALTER LOGIN [Destination Account Name] ENABLE
    GO
    ```
    
    `CHECK_EXPIRATION = OFF` disables the password expiration feature. `CHECK_POLICY = OFF` disables the password complexity policy check, which includes requirements for password length and complexity.
    
    **Note**
    
    You can use the RDS console to [customize password policies](/help/en/rds/apsaradb-rds-for-sql-server/customize-account-password-policies) for individual user accounts on an RDS SQL Server instance to implement fine-grained password management and enhance account security.
    

#### **Why does an ApsaraDB RDS for SQL Server account show as Inactive and a** `**The account is disabled.**` **error is reported upon logon?**

## Symptoms

On the **Accounts** page of an ApsaraDB RDS for SQL Server instance, the account status is displayed as **Inactive**. When you try to log on to the database using an inactive account, the error message `The account is disabled.` is returned.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5827651571/p978569.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5827651571/p978500.png)

## **Causes**

User accounts that you create on the **Accounts** page of an ApsaraDB RDS for SQL Server instance or by calling an [API operation](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-createaccount-sqlserver) are active by default. You do not need to manually activate them. If an account becomes inactive, it is usually for one of the following reasons:

-   You specified the account status as disabled when you created the account using an SQL statement.
    
-   You manually changed the account status to disabled after you created the account in the RDS console or by calling an API operation.
    

## **Solution**

1.  Use another active account to [connect to the SQL Server instance using SSMS](/help/en/rds/apsaradb-rds-for-sql-server/connection-instance).
    
2.  Check if the target account is disabled. If it is, enable the account.
    
    -   **Method 1: View and modify the account status in the SQL Server Management Studio (SSMS) graphical user interface (GUI).**
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5827651571/p978544.png)
        
    -   **Method 2: View and modify the account status using SQL statements.**
        
        1.  Execute the following SQL query to check the current status of the target account:
            
            ```
            -- Query the status of the target logon name.
            SELECT 
                name AS LoginName,          -- Logon name
                is_disabled AS IsDisabled   -- Status: 1 indicates disabled, 0 indicates enabled.
            FROM 
                sys.server_principals
            WHERE 
                name = 'Replace with the target logon name';
            ```
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5827651571/p978578.png)
            
        2.  If the target account is disabled (`is_disabled = 1`), execute the following SQL command to enable the account:
            
            ```
            ALTER LOGIN [Replace with the target logon name] ENABLE;
            ```
            
            ### ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5827651571/p978581.png)
            

#### **Why is an** `**AccountLimitExceeded**` **error reported when I call the CreateAccount operation to create a user?**

## **Problem**

When you call the [CreateAccount](/help/en/rds/developer-reference/api-rds-2014-08-15-createaccount) API operation to create a database account, you may receive the following error if you specify incorrect parameters:

```
"Code": "AccountLimitExceeded",
"Message": "AccountQuotaExceeded: Exceeding the allowed amount of account"
```

This error indicates that the number of accounts in the instance has reached the maximum limit.

## **Cause**

-   Account limit: A maximum of one privileged account and one Sysadmin account is allowed per instance. The privileged account cannot be deleted.
    
-   Incorrect parameter settings: For SQL Server instances, the `AccountLimitExceeded` error is triggered if you set the `AccountType` parameter to `Sysadmin` or `Super`, but an account of that type already exists.
    

## **Solutions**

-   To create a standard account, set the `AccountType` parameter to `Normal`. RDS typically does not limit the number of standard accounts. The actual limit depends on the instance kernel.
    
-   To create a privileged account, set the `AccountType` parameter to `Super`. On the **Accounts** page of the RDS console, check whether a privileged account already exists. **If one exists, do not create another.**
    
-   To create a Sysadmin account, set the `AccountType` parameter to `Sysadmin`. On the **Accounts** page of the RDS console, check whether a Sysadmin account already exists. **If one exists, do not create another.**
