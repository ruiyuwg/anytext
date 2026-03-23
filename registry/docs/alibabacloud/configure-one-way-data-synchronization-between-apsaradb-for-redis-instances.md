Data Transmission Service (DTS) supports one-way synchronization for Tair (Redis OSS-compatible) databases. This feature is suitable for various scenarios, such as active geo-redundancy and data disaster recovery. This topic uses the one-way data synchronization between Tair (Redis OSS-compatible) instances as an example to describe how to configure a data synchronization job.

## **Function overview**

-   **Full migration**
    
    DTS migrates all historical data from the source database to the destination database. Full migration is free of charge.
    
-   **Incremental synchronization**
    
    After the full migration is complete, DTS synchronizes incremental updates from the source database to the destination database in real time. Incremental synchronization is charged based on the duration of use, regardless of the amount of data synchronized. For more information, see [Billing items](/help/en/dts/product-overview/billable-items).
    

## Prerequisites

You must create a Tair (Redis OSS-compatible) instance. The destination instance must have more memory than the memory used by the source instance. For more information, see [Create an instance](/help/en/redis/getting-started/step-1-create-an-apsaradb-for-redis-instance#concept-kqh-vv5-tdb).

**Note**

We recommend that you keep the total amount of memory of the destination database at least 10% larger than the amount of memory used by the source database. If the amount of memory of the destination database is insufficient when you run the data migration task, issues such as data inconsistency or task failures may occur. In this case, empty the destination database and reconfigure the data migration task.

## **Precautions**

When you run a data migration task, do not scale or change the specifications or endpoint of the source or destination database. Otherwise, the data migration task fails. If the data migration task fails, reconfigure the task to account for the changes. In addition, the data migration consumes resources of the source and destination databases. We recommend that you perform the data migration during off-peak hours.

## Procedure

1.  Go to the Data Synchronization Tasks page.
    
    1.  Log on to the [DMS console](https://dms.alibabacloud.com).
        
    2.  In the top menu bar, choose **Data + AI** > **Data Transmission Service (DTS)** > **Data Synchronization**.
        
    3.  To the right of **Sync Tasks**, select the region of the instance to sync.
        
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
    
    If you have added the source database to DMS, you can select it here. After you select it, you do not need to fill in the source database information below. If you have not added it, ignore this option.
    
    **Database Type**
    
    Select **Tair/Redis**.
    
    **Access Method**
    
    Select **Cloud Instance**.
    
    **Instance Region**
    
    Select the region where the instance is located.
    
    **Cross-Alibaba Cloud Account**
    
    This example shows a migration between instances within the same Alibaba Cloud account. Select **No**.
    
    **Instance ID**
    
    Select the instance ID of the source database.
    
    **Authentication Method**
    
    Select **Password Logon** or **Password-free Logon** as needed. This example uses **Password Logon**.
    
    **Note**
    
    If the password-free access feature is not enabled for the instance over a [VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b), select **Password Logon**.
    
    **Database Password**
    
    Enter the password for the account used to connect to the source instance.
    
    **Note**
    
    -   This is optional. If no password is set, you can leave this blank.
        
    -   If you use a custom account, it must have read permissions. The format for the account and password is <user>:<password>. For example, if the custom account for the instance is admin and the password is Rp829dlwa, enter admin:Rp829dlwa for the database password.
        
    
    **Destination Database**
    
    **Select DMS Database Instance**
    
    If you have added the destination database to DMS, you can select it here. After you select it, you do not need to fill in the destination database information below. If you have not added it, ignore this option.
    
    **Database Type**
    
    **Tair/Redis** is selected by default.
    
    **Access Method**
    
    Select **Cloud Instance**.
    
    **Instance Region**
    
    Select the region where the destination instance is located.
    
    **Instance ID**
    
    Select the destination instance ID.
    
    **Authentication Method**
    
    Select **Password Logon** or **Password-free Logon** as needed. This example uses **Password Logon**.
    
    **Note**
    
    If the password-free access feature is not enabled for the instance over a [VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b), select **Password Logon**.
    
    **Database Password**
    
    Enter the password to connect to the destination database.
    
    **Note**
    
    If you use a custom account, it must have write permissions. The format for the account and password is <user>:<password>. For example, if the custom account for the instance is admin and the password is Rp829dlwa, enter admin:Rp829dlwa for the database password.
    
4.  Configure the task objects, and then click **Next: Advanced Configurations** at the bottom of the page.
    
    **Configuration**
    
    **Description**
    
    **Synchronization Types**
    
    **Full Synchronization + Incremental Synchronization** is selected by default.
    
    **Processing Mode of Conflicting Tables**
    
    -   **Precheck And Block** (Default): Checks if data (keys) exist in the destination database.
        
        If keys exist, an error is reported during the precheck phase, and the migration task does not start. If no keys exist, the check passes.
        
    
    -   **Ignore Errors And Continue Execution**: Skips the **Destination Object Data Existence Check** item. If a key with the same name already exists in the destination database, it is overwritten.
        
    
    **Source Objects** and **Selected Objects**
    
    In the **Source Objects** box, select the objects to be synchronized, and then click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1341977961/p710008.png) to move them to the **Selected Objects** box. To remove an object, select it in the **Selected Objects** box, and then click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1341977961/p710004.png) to move it back to the **Source Objects** box.
    
    **Note**
    
    The migration objects are selected at the database level (DB 0 to DB 255).
    
5.  Configure advanced settings, and then click **Next: Data Verification** at the bottom of the page.
    
    You can usually keep the default settings. For more information, see [Appendix: Advanced settings](/help/en/redis/user-guide/migrate-data-from-a-self-managed-redis-database-to-an-apsaradb-for-redis-instance#13f7e61083n5r).
    
6.  Configure data verification and click **Next: Save Task Settings and Precheck** in the lower part of the page.
    
    In most cases, you can retain the default settings. For more information, see [Configure data verification](/help/en/dts/user-guide/enable-data-verification#section-uhi-nvx-wwh).
    
7.  Perform a precheck, and click **Next: Purchase Instance** in the lower part of the page.
    
    If **Warning** or **Failed** items are generated during the precheck, check the items individually. You can click **View Details** and troubleshoot the issues. You can also click **Confirm Alert Details** and ignore the check items. However, issues such as data inconsistency may occur, which may pose risks to your business. For more information, see [FAQ](/help/en/dts/support/faq#section-piu-4az-yz1). After you complete the preceding operations, perform another precheck.
    
8.  On the **Purchase** page, configure the settings, and then click **Purchase And Start**.
    
    -   (Optional) For **Resource Group Configuration**, select a resource group for the DTS instance. If you do not specify a resource group, the **default resource group** is used.
        
    -   (Optional) Select the specification for the DTS sync link. A higher specification provides a faster synchronization speed but costs more. The default value is **large**. For more information, see [Specifications of data synchronization links](/help/en/dts/product-overview/specifications-of-data-synchronization-channels).
        
    -   Read and select the terms of service.
        
    
    After you complete the purchase, the synchronization task starts. You can view the progress of the task on the Data Synchronization Tasks page.
    

## **What to do next**

If you no longer need to synchronize data, you can manually end or release the task in the console.

## **FAQ**

-   Why does the connectivity test fail?
    
    Take note of the following factors when you perform troubleshooting:
    
    -   The account password is invalid. The password must be in the `user:password` format. For more information, see [Connect to an instance](/help/en/redis/user-guide/logon-methods).
        
    -   If the source database is a self-managed database that is deployed in an on-premises data center or on a third-party cloud platform, a network firewall may block access from DTS servers. In this case, manually add the CIDR blocks of DTS servers in the corresponding region to allow access from the servers. For more information, see [Add DTS server IP addresses to a whitelist](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases).
        
    
-   Why does the migration task fail to run?
    
    -   If you scale or change the specifications or endpoint of the source or destination database when you run a data migration task, the task fails. In this case, reconfigure the data migration task to account for the changes.
        
    -   If the destination instance does not have sufficient available memory or the destination instance is a cluster instance whose specific shard has reached the upper memory limit, the DTS data migration task fails due to an out of memory (OOM) error.
        
    -   If transparent data encryption (TDE) is enabled for the destination instance, you cannot use DTS to migrate data.
        
    
-   Why are data volumes different in the source and destination databases?
    
    -   If an expiration policy is enabled for specific keys in the source database, these keys may not be deleted at the earliest opportunity after they expire. In this case, the number of keys in the destination database may be smaller than the number of keys in the source database.
        
    -   When you run the **PSYNC** or **SYNC** command to transmit list data, DTS does not perform the **FLUSH** operation on the existing data in the destination database. As a result, duplicate data may exist.
        
    -   If the network is interrupted during a full data migration, DTS may perform multiple full data migrations after the connection is reestablished. In this case, DTS automatically overwrites existing keys that have the same name in the destination database. If you perform a delete operation on the source database at this time, the command is not synchronized to the destination database. As a result, the destination database may have more keys than the source database.
        
    
-   Why should I check whether the eviction policy is **noeviction**?
    
    By default, the **maxmemory-policy** parameter that specifies how data is evicted is set to **volatile-lru** for Tair (Redis OSS-compatible) instances. If the destination database does not have sufficient memory, data inconsistency may occur between the source and destination databases due to data eviction. In this case, the data migration task does not stop running. To prevent data inconsistency, we recommend that you set the maxmemory-policy parameter to **noeviction** for the destination database. This way, the data migration task fails if the destination database does not have sufficient memory, but you can prevent data loss in the destination database. For more information about data eviction policies, see [What is the default eviction policy?](/help/en/redis/support/how-does-apsaradb-for-redis-evict-data-by-default#concept-e5v-hs5-ydb)
    
-   Why does a key whose prefix is **DTS\_REDIS\_TIMESTAMP\_HEARTBEAT** exist in the source database?
    
    To ensure the efficiency of data migration and synchronization, DTS inserts a key whose prefix is **DTS\_REDIS\_TIMESTAMP\_HEARTBEAT** into the source database to record the points in time when updates occur. If the source database uses the cluster architecture, DTS inserts the key into each shard. DTS filters out the key during data migration. After the data migration is complete, the key automatically expires.
    
-   Why do I get the `CROSSSLOT Keys in request don't hash to the same slot` error?
    
    If the destination instance uses a cluster architecture, Redis does not support cross-slot operations in a single command. During DTS synchronization, you must perform only single-key operations to avoid link interruptions.
    
-   Which commands are supported for synchronization?
    
    -   The following commands are supported:
        
        -   APPEND
            
        -   BITOP, BLPOP, BRPOP, and BRPOPLPUSH
            
        -   DECR, DECRBY, and DEL
            
        -   EVAL, EVALSHA, EXEC, EXPIRE, and EXPIREAT
            
        -   GEOADD and GETSET
            
        -   HDEL, HINCRBY, HINCRBYFLOAT, HMSET, HSET, and HSETNX
            
        -   INCR, INCRBY, and INCRBYFLOAT
            
        -   LINSERT, LPOP, LPUSH, LPUSHX, LREM, LSET, and LTRIM
            
        -   MOVE, MSET, MSETNX, and MULTI
            
        -   PERSIST, PEXPIRE, PEXPIREAT, PFADD, PFMERGE, and PSETEX
            
        -   RENAME, RENAMENX, RESTORE, RPOP, RPOPLPUSH, RPUSH, and RPUSHX
            
        -   SADD, SDIFFSTORE, SELECT, SET, SETBIT, SETEX, SETNX, SETRANGE, SINTERSTORE, SMOVE, SPOP, SREM, and SUNIONSTORE
            
        -   ZADD, ZINCRBY, ZINTERSTORE, ZREM, ZREMRANGEBYLEX, ZUNIONSTORE, ZREMRANGEBYRANK, and ZREMRANGEBYSCORE
            
        -   SWAPDB and UNLINK. These two commands can be synchronized only if the engine version of the source database is Redis 4.0.
            
        -   XADD, XCLAIM, XDEL, XAUTOCLAIM, XGROUP CREATECONSUMER, and XTRIM
            
        
    -   PUBLISH commands cannot be synchronized.
        
    -   If you run the EVAL or EVALSHA command to call Lua scripts, DTS cannot identify whether these Lua scripts are executed in the destination database. This is because the destination database does not explicitly return the execution results of Lua scripts during incremental data synchronization.
