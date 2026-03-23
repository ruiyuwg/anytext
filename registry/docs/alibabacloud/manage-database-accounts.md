A PolarDB-X instance supports two types of accounts: privileged accounts and standard accounts. By default, a newly created PolarDB-X instance does not have accounts. This topic describes how to create and manage database accounts for a PolarDB-X instance.

## Account types

The following table describes the types of database accounts that are supported by PolarDB-X instances.

**Account type**

**Description**

Privileged account

-   You can create and manage privileged accounts by using the PolarDB-X console or API operations.
    
-   You can create only one privileged account for each instance. The privileged account can be used to manage all standard accounts and databases in the instance.
    
-   The privileged account is granted more permissions than a standard account. You can use the privileged account to perform fine-grained permission management based on your business requirements. For example, you can use the privileged account to grant different RAM users permissions to access different tables.
    
-   The privileged account is granted full permissions on all databases in the instance and can be used to close connections that are established by using standard accounts.
    

Standard account

-   You can create and manage standard accounts by using the PolarDB-X console, calling API operations, or executing SQL statements.
    
-   You can create one or more standard accounts for each instance. The maximum number of standard accounts that can be created is determined by the kernel engine of the instance.
    
-   You must grant standard accounts the required permissions on specific databases.
    
-   You cannot use a standard account to create or manage other accounts, or close connections that are established by using other accounts.
    

**Note**

-   After an account is created, the type of the account cannot be changed. If you want to change the type of the account, delete the account and then use the same username of the account to create an account of the other type.
    
-   You can create RAM users within your Alibaba Cloud account and grant permissions on specific instances to the RAM users. For more information, see [Create a RAM user](/help/en/ram/create-a-ram-user-1#task-187540).
    

The following sections describe the operations that you can perform on database accounts in the console.

-   [Create an account](#section-4dx-xe0-xkj)
    
-   [Reset the password of a database account](#title-qwv-6pw-160)
    
-   [Modify permissions for a standard account](#section-629-kwt-5ji)
    
-   [Delete an account](#section-hnd-ln9-yn4)
    

## Precautions

-   You can create only one privileged account for each PolarDB-X instance.
    
-   You cannot delete the privileged account after it is created.
    
-   The host value of a database account created in the console is `%`. It means that you can use this account to access the database from any IP address in the [whitelists](/help/en/polardb/polardb-for-xscale/configure-whitelists). To specify the host value, use a privileged account to log on to the instance and execute the `CREATE USER` statement to create a database account.
    
    ```
    -- Specify the host value based on your requirements
    CREATE USER <username>@<host> IDENTIFIED BY <password>'password';
    ```
    

## Create an account

1.  Log on to the [PolarDB-X console](https://polardb-x.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the **PolarDB-X 2.0** tab.
    
4.  Find the instance that you want to manage and click the instance ID.
    
5.  In the left-side navigation pane, choose **Configuration Management** > **Account Management**.
    
6.  Click **Create an account**. In the panel that appears, configure the parameters.
    
    **Parameter**
    
    **Description**
    
    Account name
    
    The username of the account.
    
    **Note**
    
    The username must meet the following requirements:
    
    -   The username can be up to 16 characters in length and can contain lowercase letters, digits, and underscores (\_).
        
    -   The username must start with a lowercase letter and end with a lowercase letter or a digit.
        
    -   The username must be unique and cannot be the same as the username of an existing account.
        
    
    Account types
    
    The type of the account. You can specify the account to be a **privileged account** or a **standard account**.
    
    Authorization database
    
    The databases that can be accessed by using the credentials of the account. You can specify one or more databases.
    
    1.  Select one or more databases and click the ![456789](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2502677861/p686286.png) icon to move the selected databases from the **Unauthorized database** section on the left side to the **Authorized database** section on the right side.
        
    2.  In the **Authorized database** section, select the database permissions that you want to grant to the account.
        
    
    **Note**
    
    -   This parameter is available only when you create a **standard account**.
        
    -   This parameter is optional. You can grant permissions to the account after the account is created.
        
    -   Supported permissions: **Read and Write**, **Read Only**, **DML Only**, and **DDL Only**.
        
    -   If you want to grant the same permissions on all selected databases, click the permission name such as **All Read and Write** next to **Authorized database**.
        
    
    Password
    
    The password of the account.
    
    **Note**
    
    The password must meet the following requirements:
    
    -   The password must be 8 to 20 characters in length.
        
    -   The password must contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters.
        
    -   Special characters include @ # $ % ^ & + =
        
    
    Confirm password
    
    Enter the same password to confirm.
    
    Descr
    
    Optional. The description of the account. The description can help you identify the account. The description can be up to 256 characters in length.
    
7.  Click **OK**.
    

## Reset the password of a database account

1.  Log on to the [PolarDB-X console](https://polardb-x.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the **PolarDB-X 2.0** tab.
    
4.  Find the instance that you want to manage and click the instance ID.
    
5.  In the left-side navigation pane, choose **Configuration Management** > **Account Management**.
    
6.  On the **Account Management** page, find the account for which you want to reset the password and click **Change Password** in the **Actions** column.
    
7.  In the dialog box that appears, enter and confirm the new password, and then click **OK**.
    
    **Note**
    
    The password must meet the following requirements:
    
    -   The password must be 8 to 20 characters in length.
        
    -   The password must contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters.
        
    -   Supported special characters: @#$%^&+=
        
    

## Modify permissions for a standard account

1.  Log on to the [PolarDB-X console](https://polardb-x.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the **PolarDB-X 2.0** tab.
    
4.  Find the instance that you want to manage and click the instance ID.
    
5.  In the left-side navigation pane, choose **Configuration Management** > **Account Management**.
    
6.  On the **Account Management** page that appears, find the account for which you want to modify permissions and click **Modify Permissions** in the **Actions** column.
    
    **Note**
    
    The privileged account of an instance is granted full permissions on all databases in the instance. You do not need to modify permissions for the privileged account.
    
7.  In the panel that appears, select one or more databases in the **Unauthorized database** section and click the ![456789](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8884633861/p667994.png) icon to move the selected databases to the **Authorized database** section.
    
8.  In the **Authorized database** section, select the database permissions that you want to grant to the account.
    
    **Note**
    
    -   Supported permissions: **Read and Write**, **Read Only**, **DML Only**, and **DDL Only**.
        
    -   If you want to grant the same permissions on multiple selected databases, click the permission name such as **All DDL Only** next to **Authorized database**.
        
    
9.  Click **OK**.
    

## Delete an account

**Warning**

If you delete an account, clients that use the account fail to connect to the database. Proceed with caution.

1.  Log on to the [PolarDB-X console](https://polardb-x.console.alibabacloud.com).
    
2.  In the top navigation bar, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the **PolarDB-X 2.0** tab.
    
4.  Find the instance that you want to manage and click the instance ID.
    
5.  In the left-side navigation pane, choose **Configuration Management** > **Account Management**.
    
6.  On the **Account Management** page, find the account that you want to delete and click **Delete** in the **Actions** column.
    
7.  In the message that appears, click **OK**.
