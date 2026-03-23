This topic describes how to create and manage PolarDB for MySQL accounts and explains the differences between privileged accounts and standard accounts.

## Background information

You can create and manage privileged accounts and standard accounts in the PolarDB console.

**Note**

To ensure data security, you cannot create nor use a root account in PolarDB.

**Account type**

**Description**

**Privileged Account**

-   Privileged accounts can be created and managed only in the console.
    
-   Only one privileged account can be created for each cluster. The privileged account can manage all the standard accounts and databases in the corresponding cluster.
    
-   A privileged account can be used to create databases and standard accounts and authorize a standard account to perform add, delete, modify, and view operations on a database.
    
-   A privileged account has the permissions to implement fine-grained control over user permissions based on your business requirements. For example, you can use a privileged account to grant different users the permissions to query different tables.
    
-   A privileged account has the permissions to disconnect all standard accounts on the cluster.
    

**Standard Account**

-   Standard accounts can be created and managed in the console or by using SQL statements.
    
-   Multiple standard accounts can be created for each cluster. The maximum number of standard accounts that you can create depends on the database engine.
    
-   A standard account cannot be used to create databases or standard accounts. A standard account can only manage databases on which it has permissions.
    
-   A standard account does not have permissions to manage or disconnect other accounts of the cluster.
    

**Global read-only account**

-   Global read-only accounts can be created and managed in the console or by using SQL statements.
    
-   A global read-only account cannot be used to create or manage databases.
    
-   A global read-only account cannot be used to create databases or standard accounts. It can only view databases.
    
-   You can create multiple global read-only accounts for a cluster. By default, read-only accounts have the read-only permissions on all data.
    
-   A global read-only account does not have permissions to manage or disconnect other accounts of the cluster.
    

## Create a privileged account

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Accounts**.
    
3.  Click **Create Account**.
    
4.  In the **Create Account** panel, configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Account Name**
    
    The username of the account. The account name must meet the following requirements:
    
    -   It must start with a lowercase letter and end with a letter or a digit.
        
    -   It can contain lowercase letters, digits, and underscores (\_).
        
    -   It must be 2 to 32 characters in length.
        
    -   It cannot be root, admin, or another username that is reserved by the system.
        
    
    **Account Type**
    
    The type of the account. Select **Privileged Account**.
    
    **Note**
    
    -   If you have already created a privileged account, you cannot select **Privileged Account**. You can create only one privileged account for each cluster.
        
    -   For more information about the permissions of a privileged account, see [Account permissions](/help/en/polardb/polardb-for-mysql/user-guide/account-permissions).
        
    
    **Password**
    
    The password of the account. The password must meet the following requirements:
    
    -   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   It must be 8 to 32 characters in length,
        
    -   It can contain the following special characters:
        
        !@#$%^&\*()\_+-=~
        
    
    **Confirm Password**
    
    Enter the password again.
    
    **Description**
    
    The information that can help you manage the account. The information must meet the following requirements:
    
    -   It cannot start with `http://` or `https://`.
        
    -   It must be 2 to 256 characters in length.
        
    
5.  Click **OK**.
    

## Create a standard account

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Accounts**.
    
3.  Click **Create Account**.
    
4.  In the **Create Account** panel, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Account Name**
    
    The username of the account. The account name must meet the following requirements:
    
    -   It must start with a lowercase letter and end with a letter or a digit.
        
    -   It can contain lowercase letters, digits, and underscores (\_).
        
    -   It must be 2 to 32 characters in length.
        
    -   It cannot be root, admin, or another username that is reserved by the system.
        
    
    **Account Type**
    
    The type of the account. Select **Standard Account**.
    
    **Authorized Databases**
    
    You can grant permissions on one or more databases to the account. You can leave this parameter empty. You can grant the account the database permissions after the account is created.
    
    1.  Select one or more databases from the **Unauthorized Database** list and click the ![icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1214604061/p170235.png) icon to add the selected databases to the **Authorized Database** list.
        
    2.  In the **Authorized Database** list, specify the permissions on the selected databases. Valid values for the permissions: **Read/Write**, **Read-only**, **DML Only**, **DDL Only**, and **Read-only + Index**.
        
    
    **Note**
    
    -   If you need to customize the permissions or grant the account specific table permissions, click **Customize Permissions** below the **Unauthorized Database** list. On the page that appears, you can use the permission management feature of Database Management Service (DMS) to manage the account permissions. For more information, see [Manage user permissions on MySQL databases](/help/en/dms/manage-user-permissions-on-mysql-databases#task-1940075).
        
    -   If you are managing a large number of databases, grant permissions to the account in batches. In each batch, select up to 80 databases.
        
    
    **Password**
    
    The password of the account. The password must meet the following requirements:
    
    -   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   It must be 8 to 32 characters in length,
        
    -   It can contain the following special characters:
        
        !@#$%^&\*()\_+-=~
        
    
    **Confirm Password**
    
    Enter the password again.
    
    **Description**
    
    The information that can help you manage the account. The information must meet the following requirements:
    
    -   It cannot start with `http://` or `https://`.
        
    -   It must be 2 to 256 characters in length.
        
    
5.  Click **OK**.
    

## Create a global read-only account

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Accounts**.
    
3.  Click **Create Account**.
    
4.  In the **Create Account** panel, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Account Name**
    
    The username of the account. The account name must meet the following requirements:
    
    -   It must start with a lowercase letter and end with a letter or a digit.
        
    -   It can contain lowercase letters, digits, and underscores (\_).
        
    -   It must be 2 to 32 characters in length.
        
    -   It cannot be root, admin, or another username that is reserved by the system.
        
    
    **Account Type**
    
    The type of the account. Select **Global Read-only Account**.
    
    **Authorized Databases**
    
    By default, global read-only accounts have the read-only permissions on all data.
    
    **Password**
    
    The password of the account. The password must meet the following requirements:
    
    -   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   It must be 8 to 32 characters in length,
        
    -   It can contain the following special characters:
        
        !@#$%^&\*()\_+-=~
        
    
    **Confirm Password**
    
    Enter the password again.
    
    **Description**
    
    The information that can help you manage the account. The information must meet the following requirements:
    
    -   It cannot start with `http://` or `https://`.
        
    -   It must be 2 to 256 characters in length.
        
    

## Reset the permissions of a privileged account

If the permissions of a privileged account are accidentally revoked or encounter exceptions, you can reset the permissions to restore the privileged account to the initial state. To reset the permissions of the account, perform the following steps:

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Accounts**.
    
3.  Find the privileged account that you want to manage and click **Reset Permissions** in the **Actions** column of the account.
    
4.  In the dialog box that appears, enter the password of the privileged account and click **OK**.
    

## Modify the permissions of a standard account

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Accounts**.
    
3.  Find the account that you want to manage and click **Modify Permissions** in the **Actions** column.
    
4.  In the **Modify Permissions** dialog box, modify the permissions of authorized databases and unauthorized databases, and click **OK**.
    

## Modify the permissions of a global read-only account

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Accounts**.
    
3.  Find the account that you want to manage and click **Modify Permissions** in the **Actions** column.
    
4.  In the **Modify Permissions** dialog box, modify the permissions of authorized databases and unauthorized databases, and click **OK**.
    
    **Note**
    
    -   Authorizing the read and write permissions on a specific database to the global read-only account does not affect its read-only permissions on other databases.
        
    -   After the permission changes, the account is still a global read-only account, but shows granted permissions in the Database column.
        
    

## Modify the permissions of an account by running commands

You can log on to the cluster with the privileged account and run the following command to modify the permissions of an account:

```
GRANT privileges ON databasename.tablename TO 'username'@'host' WITH GRANT OPTION;
```

**Parameter**

**Description**

privileges

The operation permissions to be granted to the account, such as **SELECT**, **INSERT**, and **UPDATE**. To grant all permissions to the account, set this parameter to ALL.

**Note**

If an account is granted the **SELECT, LOCK TABLES** and **SHOW VIEW** permissions on all tables in all databases but not write permissions, it is displayed as a global read-only account.

databasename

The name of the database. To grant the operation permissions of all databases to the account, set this parameter to an asterisk (\*).

tablename

The name of the table. To grant the operation permissions of all tables to the account, set this parameter to an asterisk (\*).

username

The account to be authorized.

host

The host from which the account can be used to log on to the database. If you set this parameter to a percent sign (%), you can log on to the database from all hosts by using the account.

**Note**

If you want to delete a custom account for which this parameter is not set to a percent sign (%), use a privileged account to log on to the DMS console and perform deletion operations.

WITH GRANT OPTION

Grants the account the permission to run the GRANT command. This parameter is optional.

## Delete an account

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Accounts**.
    
3.  Find the account that you want to delete and click **Delete** in the **Actions** column.
    
4.  In the **Delete Account** dialog box, click **OK**.
    

## Related API operations

**API**

**Description**

[CreateAccount](/help/en/polardb/polardb-for-mysql/api-createaccount#doc-api-polardb-CreateAccount)

Creates an account.

[DescribeAccounts](/help/en/polardb/polardb-for-mysql/api-describeaccounts#doc-api-polardb-DescribeAccounts)

Queries the accounts of the specified cluster.

[ModifyAccountDescription](/help/en/polardb/polardb-for-mysql/api-modifyaccountdescription#doc-api-polardb-ModifyAccountDescription)

Modifies the description of a database account for the specified PolarDB cluster.

[ModifyAccountPassword](/help/en/polardb/polardb-for-mysql/api-modifyaccountpassword#doc-api-polardb-ModifyAccountPassword)

Changes the password of a database account for the specified PolarDB cluster.

[GrantAccountPrivilege](/help/en/polardb/polardb-for-mysql/api-grantaccountprivilege#doc-api-polardb-GrantAccountPrivilege)

Grants a specified standard account the permissions on one or more databases of the specified PolarDB cluster.

[RevokeAccountPrivilege](/help/en/polardb/polardb-for-mysql/api-revokeaccountprivilege#doc-api-polardb-RevokeAccountPrivilege)

Revokes the permissions on one or more databases from the specified PolarDB standard account.

[ResetAccount](/help/en/polardb/polardb-for-mysql/api-resetaccount#doc-api-polardb-ResetAccount)

Resets the permissions of a privileged account for the specified PolarDB cluster.
