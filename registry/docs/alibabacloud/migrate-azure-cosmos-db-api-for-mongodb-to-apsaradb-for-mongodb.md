MongoDB provides native backup utilities that you can use to migrate Azure Cosmos DB's API for MongoDB to ApsaraDB for MongoDB.

## Precautions

-   This is a full migration. To ensure data consistency we recommend that you stop all write operations to the database before migration.
    
-   If you have used mongodump commands to back up the database, move the files in the dump folder to other directories. Make sure that the default dump folder is empty before data migration. Otherwise, existing backup files in this folder will be overwritten.
    
-   Run mongodump and mongorestore commands on servers on which MongoDB is installed. Do not run these commands in the mongo shell.
    

## Required database account permissions

**Instance**

**Account permission**

Azure Cosmos DB

Read

Destination MongoDB instance

Read and write

## Environment configuration

1.  Create an ApsaraDB for MongoDB instance. For more information, see [Create an instance](/help/en/mongodb/create-a-replica-set-instance-1#task-hwt-zlx-p2b).
    
    **Note**
    
    -   The instance storage capacity must be larger than Azure Cosmos DB.
        
    -   Select MongoDB version 4.0 or later.
        
    
2.  Set a password for the ApsaraDB for MongoDB instance. For more information, see [Set a password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance#task-xxj-svb-kfb).
    
3.  Install MongoDB on a server. For more information, see [Install MongoDB](https://docs.mongodb.com/manual/administration/install-community/).
    
    **Note**
    
    -   Install a MongoDB version later than 3.0.
        
    -   This server is used to temporarily store data during backup and recovery, and is not needed after the migration is complete.
        
    -   The capacity of the disk where the backup is stored must be larger than Azure Cosmos DB.
        
    
    This example installs MongoDB on a Linux server. You can also use other operating systems, such as Windows.
    

## Procedure

1.  Log on to the Azure portal.
    
2.  In the left-side navigation pane, click **Azure Cosmos DB**.
    
3.  On the **Azure Cosmos DB** page, click the account name of the Azure Cosmos DB that you want to migrate.
    
4.  On the account details page, click **Connection String**.
    
5.  Click the **Read-only Keys** tab to view the database connection information.
    
    Figure 1. Azure connection information![Azure connection information](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2381166951/p32319.png)
    
    **Note**
    
    To migrate data, you only need a database account that has read-only permissions.
    
6.  Run the following command on the MongoDB server to back up the Azure Cosmos DB to this server.
    
    ```
    mongodump --host <HOST>:10255 --authenticationDatabase admin -u <USERNAME> -p <PRIMARY PASSWORD> --ssl --sslAllowInvalidCertificates
    ```
    
    Note: Replace <HOST>, <USERNAME>, and <SECONDARY PASSWORD> with the actual values shown in [Azure connection information](#fig-qbq-fy5-vfb).
    
    After the backup is complete, backups of the Azure Cosmos DB are stored in the dump folder.
    
7.  Obtain the endpoint of the primary node of the ApsaraDB for MongoDB instance. For more information, see [Overview of replica set instance connections](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance#concept-44623-zh).
    
8.  Run the following command on the MongoDB server to export the backups to the ApsaraDB for MongoDB instance.
    
    ```
     mongorestore --host <mongodb_host>:3717 --authenticationDatabase admin -u <username> -p <password> dump
    ```
    
    Parameter description:
    
    -   <mongodb\_host>: the endpoint of the primary node of the MongoDB instance.
        
    -   <username>: the account used to log on to the ApsaraDB for MongoDB instance.
        
    -   <password>: the password used to log on to the ApsaraDB for MongoDB instance.
        
    

After the recovery is complete, backups of the Azure Cosmos DB are migrated to the ApsaraDB for MongoDB instance.
