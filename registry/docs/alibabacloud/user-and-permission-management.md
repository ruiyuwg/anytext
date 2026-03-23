Database accounts are used to manage permissions in AnalyticDB for PostgreSQL and have operation permissions on database objects. Before you connect to a database or manage database objects, you must create a database account.

## **Account types**

AnalyticDB for PostgreSQL provides two types of database accounts:

-   Privileged account: includes the initial account that is created in the AnalyticDB for PostgreSQL console and the database account that has the RDS\_SUPERUSER permission created by executing SQL statements. Privileged accounts have all the following permissions on all databases:
    
    -   Create databases and database accounts and perform operations such as LOGIN, excluding the SUPERUSER permission.
        
    -   View and modify the data tables of other database accounts and perform operations such as SELECT, UPDATE, DELETE, and changing owners.
        
    -   View the connection information of other database accounts, cancel their SQL statements, and close their connections.
        
    -   Create and delete extensions by executing the CREATE EXTENSION and DROP EXTENSION statements.
        
    -   Create other database accounts that have the RDS\_SUPERUSER permission.
        
    
    **Note**
    
    AnalyticDB for PostgreSQL does not provide superuser permissions, but offers a similar role RDS\_SUPERUSER. This is consistent with the permission system of ApsaraDB RDS for PostgreSQL.
    
-   Standard account: also called a standard user. By default, standard accounts do not have permissions. Standard accounts must be granted the permissions on one or more database objects by a privileged account.
    

## Usage notes

Privileged accounts have all permissions on all databases. To ensure data security, we recommend that you do not use privileged accounts to perform operations on business databases. You can create standard accounts and grant specific permissions only on the required database objects to prevent unauthorized access and changes.

## Create a database account

### **Create an initial account**

The initial account is a privileged account and has the RDS\_SUPERUSER permission. Before you can create other privileged accounts or standard accounts, you must create an initial account and use the initial account to connect to a database.

**Important**

After you create an initial account for an instance, you cannot delete the initial account. If you forget the password of the initial account, you can reset the password.

You can create an initial account in the AnalyticDB for PostgreSQL console or by calling API operations.

## Console

1.  Log on to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list?spm=a2c4g.11186623.0.0.30157758jqvhJH). In the upper-left corner of the console, select a region. Find the instance that you want to manage and click the instance ID.
    
2.  In the left-side navigation pane, click **Account Management**.
    
3.  Click **Create Account**. In the **Create Account** panel, enter an account name and the password. Then, click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Account**
    
    The name of the initial account.
    
    -   The name can contain lowercase letters, digits, and underscores (\_).
        
    -   The name must start with a lowercase letter and end with a lowercase letter or a digit.
        
    -   The name cannot start with gp.
        
    -   The name must be 2 to 16 characters in length.
        
    
    **New Password** and **Confirm Password**
    
    The password of the initial account.
    
    -   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   Special characters include `! @ # $ % ^ & * ( ) _ + - =`.
        
    -   The password must be 8 to 32 characters in length.
        
    
    **Important**
    
    To ensure data security, we recommend that you change your password on a regular basis and do not use passwords that you used before.
    

## API

Call the [CreateAccount](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-createaccount) operation to create an initial account.

### **Create a privileged account that has the RDS\_SUPERUSER permission**

To create a privileged account, add the RDS\_SUPERUSER parameter to the CREATE ROLE statement.

```
CREATE ROLE username WITH LOGIN ENCRYPTED PASSWORD 'userPassword' RDS_SUPERUSER;
```

### **Create a standard account**

A standard account is a database account that does not have the RDS\_SUPERUSER permission. You cannot create standard accounts in the AnalyticDB for PostgreSQL console or by calling API operations.

You can execute SQL statements to create standard accounts.

```
CREATE ROLE username WITH LOGIN ENCRYPTED PASSWORD 'userPassword';
```

For more information about the complete SQL syntax to create privileged and standard accounts, see the "CREATE ROLE" section of the [SQL syntax](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/sql-syntax#section-dfs-r3h-thb) topic.

## Query a database account

In the AnalyticDB for PostgreSQL console, only the initial account is displayed. Other privileged accounts and standard accounts created by executing SQL statements are not displayed. You can execute SQL statements or call API operations to query all privileged accounts (including the initial account) and standard accounts of an instance.

## SQL

```
SELECT * FROM pg_roles;
```

> Both adbpgadmin and aurora in the query result are system accounts.

## API

-   Call the [DescribeAccounts](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeaccounts) operation to query all database accounts, account types (privileged account or standard account), and whether a database account is created.
    
-   Call the [DescribeDiagnosisDimensions](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describediagnosisdimensions) operation to query all database accounts and databases. This API operation does not return the account type or whether the account is created.
    
-   Call the [DescribeRoles](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeroles) operation to query a list of database accounts. This API operation does not return the account type or whether the account is created.
    

## Change the password of a database account

If you forget the password of a database account, you can change the password in the AnalyticDB for PostgreSQL console or by executing SQL statements or calling API operations.

## Console

You can change the password only for the initial account in the AnalyticDB for PostgreSQL console. To change the password of a standard account, execute SQL statements.

1.  Log on to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list?spm=a2c4g.11186623.0.0.30157758jqvhJH). In the upper-left corner of the console, select a region. Find the instance that you want to manage and click the instance ID.
    
2.  In the left-side navigation pane, click **Account Management**.
    
3.  Find the database account whose password you want to change and click **Reset Password** in the Actions column. In the dialog box that appears, re-enter the new password.
    

## SQL

```
ALTER ROLE username WITH PASSWORD 'userPassword';
```

For more information about the complete SQL syntax to change the password or the attributes of a database account, see [ALTER ROLE](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/sql-syntax#section-xss-ztg-thb).

## API

Call the [ResetAccountPassword](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-resetaccountpassword) operation to change the password of a database account.

## **What to do next**

After you create a standard account, you cannot manage or access databases. You must grant the operation permissions on database objects to the standard account. For more information, see [Manage account permissions](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/account-permission-management).
