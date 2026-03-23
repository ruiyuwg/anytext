You can manage all your PolarDB databases in the console.

## Create a database

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters**. Select the **Region** of the cluster and then click the ID of the target cluster.
    
2.  In the navigation pane on the left, click **Settings and Management** > **Databases**.
    
3.  Click **Create Database**.
    
4.  In the **Create Database** panel, set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Database Name**
    
    -   Must start with a letter and end with a letter or a digit.
        
    -   Can contain only lowercase letters, digits, underscores (\_), and hyphens (-).
        
    -   Must be no more than 64 characters in length.
        
    -   The database name must be unique within the instance.
        
    
    **Note**
    
    Do not use a reserved keyword, such as `test` or `mysql`, as the database name.
    
    **Supported Character Set**
    
    Select a character set for the database, such as **utf8mb4**, **utf8**, **gbk**, or **latin1**.
    
    **Collate**
    
    Specifies the collation for the database.
    
    **Note**
    
    To view the valid values for this parameter, navigate to **PolarDB Console** > **Target Cluster** > **Configuration And Management** > **Database Management** tab, and click **Create Database**.
    
    **Authorized Account**
    
    Select the accounts to grant access to this database. This parameter can be left empty. You can grant access to accounts after the database is created.
    
    **Note**
    
    Only standard accounts are displayed here. Privileged accounts have all permissions on all databases and do not require authorization.
    
    **Account Permissions**
    
    Select the permissions to grant to the account. Valid values are **Read/Write**, **Read-only**, **DML Only**, **DDL Only**, or **Read-only + Index**.
    
    **Description**
    
    Enter a description for the database to help with future management. The description must meet the following requirements:
    
    -   Cannot start with `http://` or `https://`.
        
    -   Must be 2 to 256 characters in length.
        
    

## Delete a database

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters**. Select the **Region** of the cluster and then click the ID of the target cluster.
    
2.  In the navigation pane on the left, click **Settings and Management** > **Databases**.
    
3.  Find the target database and click **Delete** in the **Actions** column.
    
4.  In the dialog box that appears, click **OK**.
    

## **FAQ**

**What do I do if the "Operation failed. The specified database name already exists." error is reported when I create a database?**

This error indicates that the database name already exists. Log on to the cluster and run the following command to view all databases in the cluster:

```
SHOW DATABASES;
```

## Related APIs

**API**

**Description**

[CreateDatabase](/help/en/polardb/polardb-for-mysql/api-createdatabase#doc-api-polardb-CreateDatabase)

Creates a database.

[DescribeDatabases](/help/en/polardb/polardb-for-mysql/api-describedatabases#doc-api-polardb-DescribeDatabases)

Queries information about a list of databases.

[ModifyDBDescription](/help/en/polardb/polardb-for-mysql/api-modifydbdescription#doc-api-polardb-ModifyDBDescription)

Modifies the description of a database.

[DeleteDatabase](/help/en/polardb/polardb-for-mysql/api-deletedatabase#doc-api-polardb-DeleteDatabase)

Deletes a database.
