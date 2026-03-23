If you want to migrate data from one Tair (Redis OSS-compatible) instance to another Tair (Redis OSS-compatible) instance but have not yet created a destination instance, we recommend using **backup set cloning** or the **data flashback feature** to clone the data to a new instance. If you have already created a destination instance, we recommend using Data Transmission Service (DTS) to perform one-way data migration between the instances. The source and destination instances can be self-managed Redis databases or Tair (Redis OSS-compatible) instances. DTS supports full and incremental data migration. When you configure a data migration task, you can select both types to ensure service continuity. This topic compares the three data migration methods and describes how to use DTS to migrate Redis data.

## Comparison of methods for data migration between **Tair (Redis OSS-compatible)** instances

**Comparison item**

**DTS**

[Restore from a backup set](/help/en/redis/user-guide/restore-data-from-a-backup-set-to-a-new-instance)

[Restore to a point in time](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time)

**Scenarios**

Migrate data to an existing Tair (Redis OSS-compatible) instance.

Clone a new instance based on the backup data of an existing instance.

Clone a new instance based on the backup data of an existing instance.

**Data migration fees for** Tair (Redis OSS-compatible) instances

-   Link configuration fees:
    
    -   Full data migration links are free of charge.
        
    -   Incremental data migration links are billed on a pay-as-you-go basis.
        
-   Data transfer fees:
    
    You are charged for data transfer when you export data from Alibaba Cloud or connect using an Internet IP address. In other cases, data transfer is free of charge.
    

For more information about billing, see [Billable items](/help/en/dts/product-overview/billable-items).

-   Data restoration is free of charge.
    
-   New instance creation: You are charged for the new instance.
    

-   Data restoration: During the trial period, you can restore data from the last seven days free of charge. For more information, see [Billing](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time#section-vhn-u5f-1jp).
    
-   New instance creation: You are charged for the new instance.
    

**Migration granularity**

Database level.

Instance level: Restores all data from a specified backup set of the instance.

-   Instance level: Restores all data from a specified point in time of the instance.
    
-   Key level: Restores specified keys.
    

**Support for incremental migration**

Supported.

Not supported.

Not supported.

**Cross-region migration**

Supported.

Not supported.

Not supported.

**Data migration between different database versions**

Supported**1**.

Not supported.

Not supported.

**Data migration between different architectures**

Supported**2**.

Partially supported**2**.

Partially supported**2**.

**Important**

**1**When you use DTS to migrate data, we recommend that you use the same database version for the source and destination databases to avoid compatibility issues.

**2**Before you migrate data from a standard architecture instance to a cluster or read/write splitting architecture instance, you must understand the command limits for cluster and read/write splitting architectures. For more information, see [Command limits for cluster and read/write splitting instances](/help/en/redis/developer-reference/limits-on-commands-supported-by-cluster-and-read-write-splitting-instances#concept-2353537).

## **DTS features**

-   **Full migration**
    
    DTS migrates all historical data from the source database to the destination database. Full migration is free of charge.
    
-   **Incremental migration**
    
    In addition to full migration, DTS synchronizes incremental updates from the source database to the destination database in real time. You are charged for incremental migration based on the duration of the task, regardless of the amount of data migrated. For more information, see [Billable items](/help/en/dts/product-overview/billable-items).
    

## **Prerequisites**

You have created a destination Tair (Redis OSS-compatible) instance. The destination instance must have more memory than the memory used by the source instance. For more information, see [Create an instance](/help/en/redis/getting-started/step-1-create-an-apsaradb-for-redis-instance#concept-kqh-vv5-tdb).

**Note**

We recommend that you keep the total amount of memory of the destination database at least 10% larger than the amount of memory used by the source database. If the amount of memory of the destination database is insufficient when you run the data migration task, issues such as data inconsistency or task failures may occur. In this case, empty the destination database and reconfigure the data migration task.

## **Precautions**

When you run a data migration task, do not scale or change the specifications or endpoint of the source or destination database. Otherwise, the data migration task fails. If the data migration task fails, reconfigure the task to account for the changes. In addition, the data migration consumes resources of the source and destination databases. We recommend that you perform the data migration during off-peak hours.

## **Procedure**

1.  Go to the Data Migration Tasks page.
    
    1.  Log on to the [Data Management (DMS) console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, click ****Data + AI****.
        
    3.  In the left-side navigation pane, choose **DTS (DTS)** > **Data Migration**.
        
2.  Click **Create Task**.
    
3.  Configure the source and destination databases, and then click **Test Connection And Proceed** at the bottom of the page.
    
    **Category**
    
    **Configuration**
    
    **Description**
    
    None
    
    **Task Name**
    
    The name of the DTS task. DTS automatically generates a task name. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select DMS Database Instance**
    
    If you have added the source database to DMS, you can select it here. After you select the database, you do not need to configure the following parameters for the source database. If you have not added the source database to DMS, skip this parameter.
    
    **Database Type**
    
    Select **Tair/Redis**.
    
    **Access Method**
    
    Select a connection type based on the deployment location of the source database. In this example, **Cloud Instance** is selected.
    
    **Instance Region**
    
    Select the region where the instance resides.
    
    **Cross-account Migration**
    
    This example shows how to migrate data within the same Alibaba Cloud account. Select **No**.
    
    **Instance ID**
    
    Select the ID of the source instance.
    
    **Authentication Method**
    
    Select **Password Login** or **Password-free Login** as needed. In this example, **Password Login** is selected.
    
    **Note**
    
    If [password-free access over VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b) is not enabled for the instance, select **Password Login**.
    
    **Database Password**
    
    Enter the password of the account used to connect to the source instance.
    
    **Note**
    
    -   This parameter is optional. If no password is set, you can leave it empty.
        
    -   The password must be in the <user>:<password> format. For example, if the username is admin and the password is Rp829dlwa, enter admin:Rp829dlwa.
        
    
    **Destination Database**
    
    **Select a DMS database instance**
    
    If you have added the destination database to DMS, you can select it here. After you select the database, you do not need to configure the following parameters for the destination database. If you have not added the destination database to DMS, skip this parameter.
    
    **Database Type**
    
    **Tair/Redis** is selected by default.
    
    **Access Method**
    
    Select **Cloud Instance**.
    
    **Instance Region**
    
    Select the region where the destination instance resides.
    
    **Instance ID**
    
    Select the ID of the destination instance.
    
    **Authentication Method**
    
    Select **Password Login** or **Password-free Login** as needed. In this example, **Password Login** is selected.
    
    **Note**
    
    If [password-free access over VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b) is not enabled for the instance, select **Password Login**.
    
    **Database Password**
    
    Enter the password to connect to the destination database.
    
    **Note**
    
    The password must be in the <user>:<password> format. For example, if the username of the Redis instance is admin and the password is Rp829dlwa, enter admin:Rp829dlwa.
    
4.  Configure task objects and click **Next: Advanced Settings** in the lower part of the page. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Migration Types**
    
    The data migration type. Select a data migration type based on your business requirements.
    
    -   **Full Data Migration and Incremental Data Migration** (default): uses the native synchronization logic of Redis to write data to the destination database by means of memory snapshots. This way, data from the source database is migrated without downtime.
        
        If you do not have the SYNC or PSYNC permission on the source database, select **Full Data Migration**.
        
    -   **Full Data Migration**: runs the SCAN command to traverse the source database and writes the traversed data to the destination database. To ensure data consistency, do not write new data to the source database during migration.
        
    
    **Processing Mode of Conflicting Tables**
    
    -   **Precheck and Report Errors** (default): checks whether keys exist in the destination database.
        
        If keys exist, an error is returned during the precheck and the data migration task cannot be started. If keys do not exist, the precheck is passed.
        
    
    -   **Ignore Errors and Proceed**: skips the **Check the existence of objects in the destination database** check item. If a key with the same name already exists in the destination database, the key is overwritten.
        
    
    **Source Objects** and **Selected Objects**
    
    Select the objects that you want to migrate in the **Source Objects** section and click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1341977961/p710008.png) to move the objects to the **Selected Objects** section. To remove a selected object, select the object in the **Selected Objects** section and click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1341977961/p710004.png) to move the object to the **Source Objects** section.
    
    **Note**
    
    You can select databases (DB 0 to DB 255) as the objects that you want to migrate.
    
5.  Configure the advanced settings and click **Next Step: Data Verification** in the lower part of the page.
    
    In most cases, you can retain the default settings. For more information, see the "[Appendix: Advanced settings](/help/en/redis/user-guide/migrate-data-from-a-self-managed-redis-database-to-an-apsaradb-for-redis-instance#13f7e61083n5r)" section of this topic.
    
6.  Configure data verification and click **Next: Save Task Settings and Precheck** in the lower part of the page.
    
    In most cases, you can retain the default settings. For more information, see [Configure data verification](/help/en/dts/user-guide/enable-data-verification#section-uhi-nvx-wwh).
    
7.  Perform a precheck, and click **Next: Purchase Instance** in the lower part of the page.
    
    If **Warning** or **Failed** items are generated during the precheck, check the items individually. You can click **View Details** and troubleshoot the issues. You can also click **Confirm Alert Details** and ignore the check items. However, issues such as data inconsistency may occur, which may pose risks to your business. For more information, see [FAQ](/help/en/dts/support/faq#section-piu-4az-yz1). After you complete the preceding operations, perform another precheck.
    
8.  On the **buy** page, configure the parameters and click **Buy and Start**.
    
    -   (Optional) Select the **resource group** to which the DTS data migration instance belongs. The default value is **default resource group**.
        
    -   (Optional) Select the specifications of the DTS data migration instance. Higher specifications result in faster migration speed and higher costs. The default value is **large**. For more information, see [Specifications of data migration instances](/help/en/dts/product-overview/specifications-of-data-migration-instances#concept-26606-zh).
        
    -   Read and select the terms of service.
        
    
    After you purchase the DTS data migration instance, the data migration task starts. You can view the progress of the data migration task on the data migration page.
    

## **What to do next**

-   If you perform incremental data migration, you must manually terminate or release the data migration task in the console after the migration is complete.
    
-   You can verify the data. For more information, see [Verify migrated Redis data](/help/en/redis/user-guide/verify-migrated-redis-data).
    

## References

If you want to clone the full data of an existing Tair (Redis OSS-compatible) instance to a new Tair (Redis OSS-compatible) instance, you can use the backup and restore feature. For information about the differences between cloning data to a new instance using the backup and restore feature and migrating data using DTS, see [Comparison of methods for data migration between Tair (Redis OSS-compatible) instances](#conbody-3p8-kv1-yhn).

For more information, see [Restore from a backup set](/help/en/redis/user-guide/restore-data-from-a-backup-set-to-a-new-instance) and [Restore to a point in time](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time).

## **FAQ**

-   Why does the connectivity test fail?
    
    Take note of the following factors when you perform troubleshooting:
    
    -   The account password is invalid. The password must be in the `user:password` format. For more information, see [Connect to an instance](/help/en/redis/user-guide/logon-methods).
        
    -   If the source database is a self-managed database that is deployed in an on-premises data center or on a third-party cloud platform, a network firewall may block access from DTS servers. In this case, manually add the CIDR blocks of DTS servers in the corresponding region to allow access from the servers. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases).
        
    
-   Why does the migration task fail to run?
    
    -   If you scale or change the specifications or endpoint of the source or destination database when you run a data migration task, the task fails. In this case, reconfigure the data migration task to account for the changes.
        
    -   If the destination instance does not have sufficient available memory or the destination instance is a cluster instance whose specific shard has reached the upper memory limit, the DTS data migration task fails due to an out of memory (OOM) error.
        
    -   If transparent data encryption (TDE) is enabled for the destination instance, you cannot use DTS to migrate data.
        
    
-   Why are data volumes different in the source and destination databases?
    
    -   If an expiration policy is enabled for specific keys in the source database, these keys may not be deleted at the earliest opportunity after they expire. In this case, the number of keys in the destination database may be smaller than the number of keys in the source database.
        
    -   When you run the **PSYNC** or **SYNC** command to transmit list data, DTS does not perform the **FLUSH** operation on the existing data in the destination database. As a result, duplicate data may exist.
        
    -   If the network is interrupted during a full data migration, DTS may perform multiple full data migrations after the connection is reestablished. In this case, DTS automatically overwrites existing keys that have the same name in the destination database. If you perform a delete operation on the source database at this time, the command is not synchronized to the destination database. As a result, the destination database may have more keys than the source database.
        
    
-   Q: Why can't I select a Tair (Redis OSS-compatible) 2.8 instance?
    
    A: DTS does not support Tair (Redis OSS-compatible) 2.8 instances.
    
-   Why should I check whether the eviction policy is **noeviction**?
    
    By default, the **maxmemory-policy** parameter that specifies how data is evicted is set to **volatile-lru** for Tair (Redis OSS-compatible) instances. If the destination database does not have sufficient memory, data inconsistency may occur between the source and destination databases due to data eviction. In this case, the data migration task does not stop running. To prevent data inconsistency, we recommend that you set the maxmemory-policy parameter to **noeviction** for the destination database. This way, the data migration task fails if the destination database does not have sufficient memory, but you can prevent data loss in the destination database. For more information about data eviction policies, see [What is the default eviction policy?](/help/en/redis/support/how-does-apsaradb-for-redis-evict-data-by-default#concept-e5v-hs5-ydb)
    
-   Why does a key whose prefix is **DTS\_REDIS\_TIMESTAMP\_HEARTBEAT** exist in the source database?
    
    To ensure the efficiency of data migration and synchronization, DTS inserts a key whose prefix is **DTS\_REDIS\_TIMESTAMP\_HEARTBEAT** into the source database to record the points in time when updates occur. If the source database uses the cluster architecture, DTS inserts the key into each shard. DTS filters out the key during data migration. After the data migration is complete, the key automatically expires.
    
-   Which commands are supported for incremental data migration?
    
    -   The following commands are supported for incremental data migration:
        
        -   APPEND
            
        -   BITOP, BLPOP, BRPOP, and BRPOPLPUSH
            
        -   DECR, DECRBY, and DEL
            
        -   EVAL, EVALSHA, EXEC, EXPIRE, and EXPIREAT
            
        -   FLUSHALL and FLUSHDB
            
        -   GEOADD and GETSET
            
        -   HDEL, HINCRBY, HINCRBYFLOAT, HMSET, HSET, and HSETNX
            
        -   INCR, INCRBY, and INCRBYFLOAT
            
        -   LINSERT, LPOP, LPUSH, LPUSHX, LREM, LSET, and LTRIM
            
        -   MOVE, MSET, MSETNX, and MULTI
            
        -   PERSIST, PEXPIRE, PEXPIREAT, PFADD, PFMERGE, PSETEX, and PUBLISH
            
        -   RENAME, RENAMENX, RESTORE, RPOP, RPOPLPUSH, RPUSH, and RPUSHX
            
        -   SADD, SDIFFSTORE, SELECT, SET, SETBIT, SETEX, SETNX, SETRANGE, SINTERSTORE, SMOVE, SPOP, SREM, and SUNIONSTORE
            
        -   ZADD, ZINCRBY, ZINTERSTORE, ZREM, ZREMRANGEBYLEX, ZUNIONSTORE, ZREMRANGEBYRANK, and ZREMRANGEBYSCORE
            
        -   XADD, XCLAIM, XDEL, XAUTOCLAIM, XGROUP CREATECONSUMER, and XTRIM
            
    -   If you run the EVAL or EVALSHA command to call Lua scripts, DTS cannot identify whether these Lua scripts are executed in the destination database. This is because the destination database does not explicitly return the execution results of Lua scripts during incremental data migration.
