You can use Data Transmission Service (DTS) to migrate a Redis database deployed on-premises, on an ECS instance, or in a third-party cloud to Tair (Redis OSS-compatible) without service interruptions. DTS supports full and incremental migration to Tair (Redis OSS-compatible) while your database service remains operational. This method offers higher performance and security than migrating data using the AOF method.

## **Function overview**

-   **Full migration**
    
    DTS migrates all historical data from the source database to the destination database. Full migration is free of charge.
    
-   **Incremental migration**
    
    In addition to full migration, DTS synchronizes incremental updates from the source database to the destination database in real time. To perform an incremental migration, you must be able to run the `PSYNC` or `SYNC` command on the source database. Otherwise, you can only perform a full migration. Incremental migration is billed based on the duration of the migration, not the data volume. For more information, see [Billing items](/help/en/dts/product-overview/billable-items).
    
    **Note**
    
    To ensure a successful incremental migration, disable the replication output buffer limit on the source database. To do this, connect to the source database and run the following command: `CONFIG SET client-output-buffer-limit 'slave 0 0 0'`.
    

## Prerequisites

Create a Tair (Redis OSS-compatible) instance. The destination instance must have more memory than the memory used by your self-managed Redis database. For more information, see [Create an instance](/help/en/redis/getting-started/step-1-create-an-apsaradb-for-redis-instance#concept-kqh-vv5-tdb).

**Note**

The total memory of the destination database must be at least 10% larger than the memory used by the source database. If the destination database has insufficient memory, data inconsistency or task failures may occur. If this happens, clear the destination database and reconfigure the task.

## **Precautions**

During the migration, do not scale the instance, change the instance type, or change the endpoint of the source or destination database. These operations can cause the migration task to fail, and you will need to reconfigure it. The migration process consumes resources on both the source and destination databases. Perform the migration during off-peak hours.

## Procedure

1.  Go to the migration task list page.
    
    1.  Log on to the [Data Management (DMS)](https://dms.alibabacloud.com) console.
        
    2.  In the top menu bar, select **Data + AI** > **Data Transmission Service (DTS)** > **Data Migration**.
        
    3.  To the right of **Migration Tasks**, select the region where your destination instance is located.
        
2.  Click **Create Task**.
    
3.  Configure the source and destination database information, and then click **Test Connection and Proceed** at the bottom of the page.
    
    **Category**
    
    **Configuration**
    
    **Description**
    
    None
    
    **Task Name**
    
    DTS automatically generates a task name. We recommend that you specify a descriptive name for easy identification. The name does not need to be unique.
    
    **Source Database**
    
    **Select DMS Database Instance**
    
    If you have added the source database to DMS, you can select it here. After selection, you do not need to fill in the source database information below. If it is not added, ignore this option.
    
    **Database Type**
    
    Select **Tair/Redis**.
    
    **Connection Type**
    
    Select a connection type based on where the source database is deployed. If the instance is in an on-premises data center or a third-party cloud, select **Public IP**.
    
    This example uses **Self-managed Database On ECS**.
    
    **Instance Region**
    
    Select the region where the ECS instance resides. If the instance is in an on-premises data center or a third-party cloud, select the region closest to the source database.
    
    **Cross-Alibaba Cloud Account**
    
    This example shows a migration within the same Alibaba Cloud account. Select **No**.
    
    **ECS Instance ID**
    
    Select the ID of the ECS instance where the source database is located.
    
    **Note**
    
    If the source database uses a cluster architecture, select the ID of the ECS instance where any master node is located.
    
    **Instance Mode**
    
    Select the mode based on the source database architecture:
    
    -   **Basic Edition**: Standard architecture (master-replica).
        
    -   **Cluster Edition**: Cluster architecture. If the source database uses a cluster architecture, enter the port number of any master node for the **Port** parameter.
        
    
    **Port**
    
    Enter the port of the source Redis database. The default is **6379**.
    
    **Authentication Method**
    
    Select **Password Logon** or **Password-free Logon** as needed.
    
    **Note**
    
    If your self-managed Redis database does not have a password, you can select **Password-free Logon**.
    
    **Database Password**
    
    Enter the password used to connect to the source Redis database.
    
    **Note**
    
    -   This parameter is optional. If no password is set, you can leave it empty.
        
    -   If you use a custom account, the account must have read permissions. The format for the account and password is <user>:<password>. For example, if the custom account for the Redis instance is admin and the password is Rp829dlwa, enter admin:Rp829dlwa for the database password.
        
    
    **Connection Method**
    
    Select **Unencrypted Connection** or **SSL Encrypted Connection** as needed.
    
    **Note**
    
    If your self-managed Redis database (where **Connection Type** is not **Cloud Instance**) uses an **SSL Encrypted Connection**, you must also upload a **CA Certificate** and enter the **CA Key**.
    
    **Destination Database**
    
    **Select DMS Database Instance**
    
    If you have added the destination database to DMS, you can select it here. After selection, you do not need to fill in the destination database information below. If it is not added, ignore this option.
    
    **Database Type**
    
    **Tair/Redis** is selected by default.
    
    **Connection Type**
    
    Select **Cloud Instance**.
    
    **Instance Region**
    
    Select the region where the destination instance resides.
    
    **Instance ID**
    
    Select the destination instance ID.
    
    **Authentication Method**
    
    Select **Password Logon** or **Password-free Logon** as needed. This example uses **Password Logon**.
    
    **Note**
    
    If the [password-free access feature for VPCs](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b) is not enabled for the Tair (Redis OSS-compatible) instance, select **Password Logon**.
    
    **Database Password**
    
    Enter the password to connect to the destination database.
    
    **Note**
    
    If you use a custom account, the account must have write permissions. The format for the account and password is <user>:<password>. For example, if the custom account for the Redis instance is admin and the password is Rp829dlwa, enter admin:Rp829dlwa for the database password.
    
    **Connection Method**
    
    Select **Unencrypted Connection** or **SSL Encrypted Connection** as needed.
    
4.  Configure the task objects, and then click **Next: Advanced Configuration** at the bottom of the page.
    
    **Configuration**
    
    **Description**
    
    **Migration Types**
    
    Select a **Migration Types** as needed.
    
    -   **Full Migration + Incremental Migration** (Default): Uses the native Redis synchronization logic to write data to the destination as a memory snapshot. This allows for migration without stopping the source database.
        
        If you do not have SYNC or PSYNC permissions on the source database, select **Full Data Migration**.
        
    -   **Full Data Migration**: Uses the SCAN command to traverse the entire source database and write the traversed data to the destination. To ensure data consistency, do not write new data to the source instance during the migration.
        
    
    **Processing Mode for Existing Destination Tables**
    
    -   **Precheck and Block on Error** (Default): Checks if any keys exist in the destination database.
        
        If keys exist, an error is reported during the precheck phase, and the migration task does not start. If no keys exist, the check passes.
        
    
    -   **Ignore and Continue**: Skips the **Check For Existing Objects In The Destination Database**. If keys with the same names already exist in the destination database, they will be overwritten.
        
    
    **Source Objects** and **Selected Objects**
    
    In the **Source Objects** box, select the objects to migrate, and then click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1341977961/p710008.png) to move them to the **Selected Objects** box. To remove a selected object, click it in the **Selected Objects** box, and then click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1341977961/p710004.png) to move it back to the **Source Objects** box.
    
    **Note**
    
    The migration granularity is at the database level (DB 0 to DB 255).
    
5.  Configure advanced settings, and then click **Next: Data Validation** at the bottom of the page.
    
    In most cases, you can keep the default settings. For more information, see [Appendix: Advanced settings](#13f7e61083n5r).
    
6.  Configure validation settings, and then click **Next: Save Task and Precheck** at the bottom of the page.
    
    In most cases, you can keep the default settings. For more information, see [Configure data validation for a DTS sync or migration instance](/help/en/dts/user-guide/enable-data-verification#section-uhi-nvx-wwh).
    
7.  Perform a precheck. After the precheck is complete, click **Next: Purchase**.
    
    If the precheck returns any **Warning** or **Failed** items, you must address them one by one. You can click **View Details** to fix the item based on the provided instructions. You can also click **Confirm Alert Details** to ignore the item, but this may cause data inconsistency and pose risks to your business. For more information, see [Precheck issues](/help/en/dts/support/faq#section-piu-4az-yz1). After you resolve the issues, run the precheck again.
    
8.  On the **Purchase** page, configure the settings, and then click **Purchase and Start**.
    
    -   (Optional) Select a **Resource Group** for the DTS migration link. The **default resource group** is used by default.
        
    -   (Optional) Select an instance class for the DTS migration link. A higher instance class provides a faster migration rate but costs more. The default is **large**. For more information, see [Data migration link specifications](/help/en/dts/product-overview/specifications-of-data-migration-instances#concept-26606-zh).
        
    -   Read and select the terms of service.
        
    
    After the purchase, the migration task starts. You can view its progress on the Data Migration page.
    

## **What to do next**

-   If you performed an incremental migration, you must manually end or release the task in the console after the migration is complete.
    
-   You can validate the migrated data. For more information, see [Validate migrated data](/help/en/redis/user-guide/verify-migrated-redis-data).
    

## **References**

If your database does not require an online migration, you can use a lightweight tool such as redis-cli to import an AOF file for data migration. For more information, see [Migrate data from an AOF file](/help/en/redis/user-guide/use-aof-files-to-migrate-data).

## **FAQ**

-   Why does the connection test fail?
    
    Check the following items:
    
    -   The account or password is incorrect. The format for a Redis password is `user:password`. For more information, see [Logon methods for an instance](/help/en/redis/user-guide/logon-methods).
        
    -   If the source database is in an on-premises data center or a third-party cloud, a network firewall may be present. You must manually add the IP addresses of the DTS servers for the corresponding region to your firewall's whitelist to allow access from DTS. For more information, see [Add the CIDR blocks of DTS servers to a whitelist](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases).
        
    
-   Why does the task fail?
    
    -   During the migration, operations such as scaling, changing the instance type, or changing the endpoint of the source or destination database will cause the task to fail. You must reconfigure the task.
        
    -   If the destination instance has insufficient memory, or if it is a cluster instance and a shard has reached its memory limit, the DTS task will fail due to an out of memory (OOM) error.
        
    -   If Transparent Data Encryption (TDE) is enabled for the destination instance, data migration using DTS is not supported.
        
    
-   Why is there a data inconsistency?
    
    -   If some keys in the source database have a time-to-live (TTL) policy, the number of keys in the destination database might be less than in the source. This is because expired keys may not have been deleted promptly.
        
    -   For List objects, DTS does not perform a **FLUSH** operation on existing data in the destination when transferring data using **PSYNC** or **SYNC**. This can result in duplicate data.
        
    -   If the network is interrupted during a full migration, DTS might retry the full migration multiple times. This process automatically overwrites keys with the same name. If a delete operation is performed on the source database during a retry, the command is not synchronized to the destination. This can result in the destination database having more data than the source.
        
    
-   Why does the precheck verify if the Redis eviction policy is set to **noeviction**?
    
    The default data eviction policy (**maxmemory-policy**) for Tair (Redis OSS-compatible) is **volatile-lru**. If the destination database runs out of memory, data eviction is triggered, which can cause data inconsistency between the source and destination databases. This does not affect the normal operation of the task. To prevent this issue, set the data eviction policy of the destination database to **noeviction**. If you use this policy and the destination database runs out of memory, data writes fail and the task also fails. However, the destination database does not lose data due to eviction. For more information about data eviction policies, see [Redis data eviction policies](/help/en/redis/support/how-does-apsaradb-for-redis-evict-data-by-default#concept-e5v-hs5-ydb).
    
-   Why is there a **DTS\_REDIS\_TIMESTAMP\_HEARTBEAT** key in the source database?
    
    To ensure migration and sync quality, DTS inserts a key with the prefix **DTS\_REDIS\_TIMESTAMP\_HEARTBEAT** into the source database to record update timestamps. If the source database uses a cluster architecture, DTS inserts this key into each shard. DTS filters this key out during the task, and the key automatically expires after the task ends.
    
-   Which commands are supported for incremental migration?
    
    -   The following commands are supported:
        
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
            
    -   For Lua scripts called by EVAL or EVALSHA, DTS cannot confirm whether the script was executed successfully because the destination does not explicitly return an execution result.
        
    

## **Appendix: Advanced settings**

**Configuration**

**Description**

**Retry Time for Failed Connections**

If the migration task fails to connect, DTS continuously retries the connection. The default retry duration is 720 minutes, and the value range is 10 to 1440 minutes. If the connection is restored within the retry duration, the migration task automatically resumes. Otherwise, the task fails. You can customize the retry duration based on your business needs. We recommend that you set it to 30 minutes or more.

DTS continues to charge for the service during the retry period.

**Retry Time for Other Issues**

During the migration, if a non-connectivity issue occurs on the source or destination database, DTS reports an error and continuously retries. The default retry duration is 10 minutes, and the value range is 10 to 1440 minutes. If the related operations are performed successfully within the retry duration, the migration task automatically resumes. Otherwise, the task fails. We recommend that you set the duration to 10 minutes or more.

**Enable Throttling for Incremental Data Migration**

Writing incremental data can increase the load on the destination instance. You can throttle the incremental migration by setting limits on the number of rows and the amount of data migrated per second. This helps reduce the load on the destination instance. The default is **No**.

**Environment Tag**

You can select an environment tag to identify the instance.

**Extend Key Expiration Time In The Destination Database**

This setting extends the expiration time for keys in the destination database. The default extension is 1800s. If a key has already expired at the time of migration, it will not be migrated to the destination database.

**Use Slave Node**

When the **Instance Mode** of the self-managed source Redis is **Cluster**, you can choose whether to read data from a slave node. The default is **No**, which means data is read from the master node.

**Configure ETL**

Choose whether to configure the extract, transform, and load (ETL) feature. For more information about ETL, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705).

-   **Yes**: Configures the ETL feature. Enter the data processing statements in the text box. For more information, see [Configure ETL in a DTS migration or sync task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
    
-   **No** (Default): Does not configure the ETL feature.
    

**Monitoring and alerting**

Choose whether to set up alerts. If the synchronization fails or the latency exceeds the specified threshold, DTS sends a notification to the alert contacts.

-   **No**: No alerts are configured.
    
-   **Yes**: Configures alerts. You must also set the alert threshold and alert notifications. For more information, see [Configure monitoring and alerting during task configuration](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz).
