This topic describes how to modify the permissions of a standard account on an ApsaraDB RDS for MySQL instance. You can modify permissions through the ApsaraDB RDS console, the Data Management (DMS) console, or SQL statements. The permissions of a privileged account can only be reset to the default settings but cannot be modified.

**Important**

Follow the principle of least privilege when assigning database permissions. Grant each standard account only the permissions required for its intended purpose.

## Prerequisites

Before you begin, make sure that you have:

-   An ApsaraDB RDS for MySQL instance
    
-   A standard account created on the instance
    
-   (SQL method only) A privileged account created on the instance
    

## Modify permissions in the ApsaraDB RDS console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Accounts**.
    
3.  Find the standard account whose permissions you want to modify and click **Change Permissions** in the Actions column.
    
4.  In the **Edit Account Permissions** panel, modify the permissions of the account.
    
    -   To add or remove a database, select the database and click the **\>** or **<** icon.
        
    -   To change permissions on an authorized database, select the database in the **Authorized Databases** section, then select a permission level.
        
        Permission level
        
        Description
        
        **Read/Write (DDL + DML)**
        
        Full read and write access, including schema changes and data manipulation
        
        **Read-only**
        
        Read access only
        
        **DDL Only**
        
        Schema changes only (CREATE, ALTER, DROP)
        
        **DML Only**
        
        Data manipulation only (SELECT, INSERT, UPDATE, DELETE)
        
        **Note**
        
        For finer-grained permission control, use SQL statements. For details, see [Account permissions](/help/en/rds/apsaradb-rds-for-mysql/account-permissions#concept-2359294).
        
    
5.  Click **OK**.
    

### Verify the result

After modifying permissions, check the **Authorized Databases** list for the account on the **Accounts** page to confirm the changes.

## Modify permissions in the DMS console

To define custom permission combinations or manage permissions on specific tables, use the Account Authorization and Management feature of DMS. For more information, see [Manage user permissions on MySQL databases](/help/en/dms/manage-user-permissions-on-mysql-databases#task-1940075).

## Modify permissions by using SQL statements

**Note**

A privileged account is required to grant permissions to a standard account through SQL statements.

### Procedure

1.  [Connect to the RDS instance using a client or the CLI](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance#concept-n1v-qpf-vdb).
    
2.  Run the GRANT statement to grant permissions to the standard account.
    
    **Grant all permissions on a specific database:**
    
    ```
    GRANT ALL ON <database-name>.* TO '<account-name>'@'%';
    ```
    
    **Grant specific permissions on a specific database:**
    
    ```
    GRANT SELECT, INSERT, UPDATE ON <database-name>.* TO '<account-name>'@'%';
    ```
    
    Replace `<database-name>` with the target database name and `<account-name>` with the standard account name.
    
    **Note**
    
    -   For the full GRANT statement syntax, see the [official MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/grant.html).
        
    -   For a list of permissions that can be granted, see [Account permissions](/help/en/rds/apsaradb-rds-for-mysql/account-permissions#concept-2359294).
        
    

### Verify the result

After granting permissions, confirm the changes by running the following statement:

```
SHOW GRANTS FOR '<account-name>'@'%';
```

## FAQ

### Why does `ERROR 1044 (42000): Access denied for user` appear when I create a database with a standard account?

By default, a standard account has only the permissions to log on to databases. To create a database, first use a privileged account to grant the CREATE permission:

```
GRANT CREATE ON *.* TO '<account-name>'@'%';
```

### How do I deny all access to the RDS instance?

Delete all IP addresses from the IP address whitelist, keep only the `127.0.0.1` entry, and restart the RDS instance.

### Can I lock an account?

Use a privileged account to run the following statement, then restart the instance to terminate existing connections:

```
ALTER USER '<username>' ACCOUNT LOCK;
```

This locks a privileged account or a standard account. To reset the permissions of a locked privileged account, see [Reset the permissions of a privileged account](/help/en/rds/apsaradb-rds-for-mysql/reset-the-permissions-of-a-privileged-account).

**Note**

The `ALTER USER ... ACCOUNT LOCK` statement is not supported for RDS instances that run MySQL 5.6.

### How do I grant permissions to view binary log files?

Viewing binary log files requires the `REPLICATION SLAVE` and `REPLICATION CLIENT` permissions. These permissions are automatically granted for standard accounts and privileged accounts created in the ApsaraDB RDS console.

If binary log access is unavailable, use a privileged account or run SQL statements to manually grant these permissions.
