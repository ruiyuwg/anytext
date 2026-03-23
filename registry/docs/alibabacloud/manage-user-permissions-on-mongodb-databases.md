You can use Data Management (DMS) to manage the database accounts of ApsaraDB for MongoDB. This topic describes how to use DMS to create and query database accounts.

## Usage notes

-   Database accounts must be unique within a database.
    

## **Procedure**

## Use the user management feature to manage database accounts and their permissions

**Note**

To use the user management feature in DMS, your account must be an administrator, a database administrator (DBA), or the owner of the instance whose database account you want to manage. For more information about DMS user roles, see [System roles](/help/en/dms/product-overview/system-roles#task1376).

### **Create a database account**

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  Log on to the MongoDB database. For more information, see [Log on to a database instance](/help/en/dms/log-on-to-a-database-instance#multiTask356).
    
    **Important**
    
    If your database instance is an ApsaraDB for MongoDB replica set instance, log on to the primary node of the instance.
    
3.  In the left-side navigation pane of the DMS console, right-click the instance that you want to manage and select **Account Management**.
    
4.  Click **Create a database account** in the upper-left corner and configure the following parameters.
    
    1.  Configure the information about the database account.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8884214171/p767699.png)
        
        **Parameter**
        
        **Description**
        
        Destination Database
        
        The database for which you want to create an account.
        
        **Note**
        
        -   If you do not set the Destination Database parameter to admin, the account to be created is a regular account.
            
        -   If you set the Destination Database parameter to admin, the account to be created is a privileged account.
            
        
        Database Account
        
        The username of the account.
        
        -   The name cannot contain Chinese characters.
            
        -   The name can contain letters, digits, and special characters.
            
        -   The name can contain the following special characters: `! # $ % ^ & * ( ) _ + - =`
            
        
        Password
        
        The password that is used to log on to the database.
        
        we recommend that you set a password that is 8 to 32 characters in length and consists of three types of the following characters:
        
        -   English letters (case-sensitive)
            
        -   Digits
            
        -   Special characters: `! # $ % ^ & * ( ) _ + - =`
            
        
        Confirm password
        
        Enter the password again to confirm the password.
        
    2.  Grant permissions to the account.
        
    
5.  Click **OK**.
    
    **Note**
    
    SQL statements can be generated based on the parameters that you configure. If the database instance is managed in Security Collaboration mode, the SQL statements may fail to be executed due to security rules. In this case, you can perform operations as prompted or contact a database administrator (DBA) or DMS administrator.
    

### **Edit or delete a account**

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  In the left-side instance list, right-click the database instance for which you want to manage a database account and select **Database Accounts**.
    
3.  On the **Database Accounts** page, find the database account that you want to manage.
    
4.  Click **Edit** or **Delete** in the Actions column.
    

## Use the Command Line Interface (CLI) to manage database accounts and their permissions

Use DMS to connection to an instance. Connection methods vary based on the instance architecture. For more information, see the following topics:

-   [Connect to a standalone instance by using DMS](/help/en/mongodb/connect-to-an-apsaradb-for-mongodb-standalone-instance-by-using-dms#concept-xdd-13v-cgb)
    
-   [Connect to a replica set instance by using DMS](/help/en/mongodb/connect-to-an-apsaradb-for-mongodb-replica-set-instance-by-using-dms#concept-xdd-13v-cgb)
    
-   [Connect to a sharded cluster instance by using DMS](/help/en/mongodb/connect-to-a-sharded-cluster-instance-by-using-dms#concept-qz5-3k2-2gb)
    

### **Create a database account**

For more information, see [Create a database account](/help/en/mongodb/user-guide/use-mongo-shell-to-manage-database-accounts#section-z3w-74e-dsi).

### **Query a database account**

For more information, see [Query database accounts](/help/en/mongodb/user-guide/use-mongo-shell-to-manage-database-accounts#section-hw0-6h3-qgb).

## Permissions of different roles

The following table describes the permissions of different roles. For more information, visit the [MongoDB official website](https://docs.mongodb.com/manual/reference/built-in-roles/).

**Role type**

**Permission**

**Description**

Common operation role

read

Allows a user to query data in the database.

readWrite

Allows a user to insert, delete, update, and query data in the database.

Administrator action role

dbAdmin

Allows a user to manage data in the database, but not to read data from or write data to the database.

userAdmin

Allows a user to create users for the database.

dbOwner

Allows a user to perform all operations on the database.

Instance-level role

readAnyDatabase

Allows a user to query data in all databases of the instance.

readWriteAnyDatabase

Allows a user to insert, delete, update, and query data in all databases of the instance.

userAdminAnyDatabase

Allows a user to create users for all databases of the instance.

dbAdminAnyDatabase

Allows a user to manage data in all databases of the instance.

Cluster administrator role

hostManager

Allows a user to manage data in the database, but not to read data from or write data to the database.

clusterMonitor

Allows a user to query clusters and replica sets.

clusterManager

Allows a user to manage and monitor clusters and replica sets.

clusterAdmin

Allows a user to perform all operations on clusters.

Backup and Recovery roles

backup

Allows a user to query data in all databases of the instance.

restore

Allows a user to insert, delete, update, and query data in all databases of the instance.

Super role

Root

Allows a user to perform all operations on all resources in an instance.

## References

[Use the mongo shell to manage database accounts](/help/en/mongodb/user-guide/use-mongo-shell-to-manage-database-accounts#task-2225841)

## **FAQ**

**Why am I unable to view a new account on the DMS account management page?**

In most cases, a new account is displayed on the **Database Accounts** page of the DMS console after the account is created. The **Database Accounts** page displays only all accounts that belong to the currently selected database. If a new account is not displayed on this page, you can switch to a different database in the upper part of this page to check whether the account exists in the database.
