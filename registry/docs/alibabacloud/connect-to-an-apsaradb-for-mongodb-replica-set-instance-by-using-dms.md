After you create an ApsaraDB for MongoDB instance, you must connect to it using a client tool.

## **Prerequisites**

-   You have [configured a whitelist](/help/en/mongodb/getting-started/set-up-a-white-list) as described in the Quick Start.
    
-   The instance is in the **Running** state.
    

## **Procedure**

## DMS

1.  Go to the [ApsaraDB for MongoDB replica set instances](https://mongodb.console.alibabacloud.com/replicate/instances) page or the [ApsaraDB for MongoDB sharded cluster instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. At the top of the page, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the upper-right corner of the page, click **Log On**.
    
    -   For a replica set instance: In the drop-down list, select **Primary**. You are redirected to the Data Management (DMS) console.
        
        **Note**
        
        Secondary nodes support only read operations. To write data, select the primary node.
        
    -   For a sharded cluster instance: In the drop-down list, select any node. You are redirected to the DMS console.
        
    -   For a standalone instance: No selection is required. You are redirected to the DMS console.
        
3.  In the **Log on to Database Instance** dialog box in the DMS console, enter the **Database Account** and **Database Password**. Keep the other settings as their defaults.
    
    **Note**
    
    If you have forgotten the password or did not set one when you created the instance, go to the ApsaraDB for MongoDB console to [reset the password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance).
    
4.  Click **Test Connection**. In the success dialog box, click **OK**.
    
5.  Click **Login**.
    

**Note**

When you query data using DMS, the maximum size of a single document is 512 KB. This limit cannot be adjusted. To query larger documents, you can use the MongoDB Shell.

## MongoDB Shell

### **Install MongoDB Shell on a local device or an ECS instance**

MongoDB provides two command-line interface (CLI) tools: MongoDB Shell (mongosh) and mongo shell. The mongo shell is the legacy client tool, and MongoDB Shell is the upgraded tool. This topic uses MongoDB Shell as an example.

1.  On your client, [download MongoDB Shell](https://www.mongodb.com/try/download/shell).
    
2.  [Install mongosh](https://www.mongodb.com/zh-cn/docs/mongodb-shell/install/).
    

### **Obtain a connection address**

1.  Go to the [ApsaraDB for MongoDB replica set instances](https://mongodb.console.alibabacloud.com/replicate/instances) page or the [ApsaraDB for MongoDB sharded cluster instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. At the top of the page, select a resource group and a region. Then, click the ID of the target instance.
    
2.  In the navigation pane on the left, click **Database Connections**.
    
3.  On the Database Connections page, obtain the required connection address.
    
    This topic uses the **High-availability Connection String URI** in the **Private Connection - VPC** section as an example. To connect to the instance over the internet, you must first [request a public endpoint](/help/en/mongodb/user-guide/public-ip-connection/#7bd531f5b8mri).
    
    ```
    mongodb://root:****@dds-bp1d9a7c2908e****.mongodb.rds.aliyuncs.com:3717,dds-bp1d9a7c2908e****.mongodb.rds.aliyuncs.com:3717/admin?replicaSet=mgset-8970****
    ```
    
    Replace `root:****` with your database account and password. If you have forgotten the password or did not set one when you created the instance, go to the ApsaraDB for MongoDB console to [reset the password](/help/en/mongodb/user-guide/reset-the-password-of-an-account-for-an-apsaradb-for-mongodb-instance).
    

### **Connect to the database**

On the client, run the following command to connect to the MongoDB instance.

**Note**

If you use mongo shell, replace `mongosh` with `mongo` in the command.

```
mongosh "<High-availability connection string URI>"
```

The following example shows how to connect to the instance. The database account is `root`, the password is `PassWord123!`, and the authentication database is `admin`.

```
mongosh "mongodb://root:PassWord123%21@dds-bp1d9a7c2908e****.mongodb.rds.aliyuncs.com:3717,dds-bp1d9a7c2908e****.mongodb.rds.aliyuncs.com:3717/admin?replicaSet=mgset-8970****"
```

Special characters in the connection string password must be escaped. For example, the exclamation point (`!`) in the example password must be escaped as `%21`. For more information, see [How do I resolve a connection failure that is caused by special characters in the username or password of a connection string?](/help/en/mongodb/support/connection-access-and-network#f6af5f0b4fvfk)

## Program code

-   [Connect to a standalone instance using program code](/help/en/mongodb/connect-to-an-apsaradb-for-mongodb-standalone-instance-by-using-program-code)
    
-   [Connect to a replica set instance using program code](/help/en/mongodb/connect-to-a-replica-set-instance-by-using-the-program-code)
    
-   [Connect to a sharded cluster instance using program code](/help/en/mongodb/connect-to-a-sharded-cluster-instance-by-using-the-program-code)
    
-   [Connect to a DynamoDB-compatible instance using program code](/help/en/mongodb/connect-to-a-dynamodb-compatible-instance-by-using-the-program-code)
    

## **Next step**

[Write data](/help/en/mongodb/getting-started/create-a-collection-and-write-data)

## **References**

Do not use the root account to connect to an instance in a production environment. Instead, create other database accounts and grant them the required permissions. If you connect to an instance using an account that does not have the required permissions, you cannot perform any database operations. An error message such as `Exception authenticating...` is returned.

-   [Use DMS to manage database accounts](/help/en/mongodb/user-guide/use-dms-to-manage-database-accounts)
    
-   [Use the mongo shell to manage database accounts](/help/en/mongodb/user-guide/use-mongo-shell-to-manage-database-accounts)
