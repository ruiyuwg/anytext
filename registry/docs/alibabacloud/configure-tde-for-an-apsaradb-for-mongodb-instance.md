Transparent Data Encryption (TDE) encrypts and decrypts data I/O in real time. It encrypts data before writing it to disk and decrypts data when reading it into memory. TDE does not increase data file size and requires no changes to your applications. To enhance data security, you can enable TDE in the console to encrypt your instance data.

## Prerequisites

-   Architecture: Replica set instances or sharded cluster instances.
    
-   Storage engine: WiredTiger.
    
-   Storage type: Local SSD.
    
-   Database version: 4.0 or 4.2. If the database version is earlier, you can [upgrade the major database version](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance#concept-ut5-fp4-fgb).
    
    **Note**
    
    Before you enable TDE, you can create a Pay-As-You-Go instance of version 4.0 or 4.2 to test application compatibility. You can release the instance after the test is complete.
    

If your instance does not meet the architecture or storage engine requirements, you can [change instance configuration](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-1580302).

## Impacts

-   Enabling TDE restarts the instance, causing a transient connection interruption. We recommend performing this operation during off-peak hours and ensuring your application has a reconnection mechanism.
    
-   After you enable TDE, the CPU utilization of the instance increases.
    
-   Encrypted collections cannot be restored to a self-managed database using physical backups. To perform such a restoration, use a logical backup. For more information, see [Restore data to a self-managed database by using a logical backup](/help/en/mongodb/user-guide/restore-data-of-an-apsaradb-for-mongodb-instance-to-a-self-managed-mongodb-database-by-using-logical-backup#task336).
    

## Considerations

-   Once enabled, TDE cannot be disabled.
    
-   A released instance with TDE enabled cannot be restored from the **Recycle Bin**.
    
-   TDE is enabled at the instance level and supports only collection-level encryption. For field-level encryption, see [Client-Side Field Level Encryption](https://docs.mongodb.com/manual/core/security-explicit-client-side-encryption/) (available only for MongoDB 4.2 instances).
    
    **Note**
    
    If you have special business requirements, you can specify that a collection not be encrypted when you create it. For more information, see [Specify that a collection not be encrypted](#section-1ip-yvb-vv4).
    
-   After you enable TDE, it encrypts only new collections. Existing collections remain unencrypted.
    
-   [Key Management Service (KMS)](/help/en/kms/key-management-service/support/what-is-key-management-service#concept-28935-zh) generates and manages the keys used by TDE. ApsaraDB for MongoDB does not provide the keys or certificates required for encryption.
    
    **Note**
    
    Currently, only the default KMS key is supported.
    
-   Key rotation is not supported. To change keys, you must migrate the data to a new instance by using DTS. For more information about data migration, see [Migrate data between ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/migrate-data-between-apsaradb-for-mongodb-instances/).
    

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the resource group and region to which the desired instance belongs. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane of the instance details page, choose **Data Security** > **TDE**.
    
3.  Turn on the switch to the right of **TDE Status:**.
    
4.  In the **Enable TDE** dialog box, select a key generation method.
    
    -   **Use Automatically Generated Key**: Use a system-generated key.
        
    -   **Use Custom Key**: Select a key from the drop-down list. If the key that you want to use does not exist, you can create one first and then select it. For more information about how to create a key, see [Create a key](/help/en/kms/key-management-service/support/create-a-cmk#task-1939967).
        
    
5.  Click **OK**.
    
    The instance status changes to **Updating TDE**. The operation is complete when the status returns to **Running**.
    

## Excluding collections from encryption

Once TDE is enabled, all newly created collections will be encrypted by default. To create a collection without encryption, please follow the steps below.

1.  Connect to the database using the mongo shell. For more information, see [Connect to a replica set instance](/help/en/mongodb/connect-to-a-replica-set-instance-by-using-the-mongo-shell#concept-qgf-hv4-dgb) or [Connect to a sharded cluster instance](/help/en/mongodb/connect-to-a-sharded-cluster-apsaradb-for-mongodb-instance-by-using-the-mongo-shell#concept-mnd-xg2-qgb).
    
2.  Run the following command to create an unencrypted collection.
    
    -   Syntax:
        
        ```
        db.createCollection("<collection_name>",{ storageEngine: { wiredTiger: { configString: "encryption=(name=none)" } } })
        ```
        
    -   Example:
        
        ```
        db.createCollection("customer",{ storageEngine: { wiredTiger: { configString: "encryption=(name=none)" } } })
        ```
