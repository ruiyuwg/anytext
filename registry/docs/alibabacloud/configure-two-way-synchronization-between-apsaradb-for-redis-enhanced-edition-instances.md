Data Transmission Service (DTS) supports two-way data synchronization between Tair (Enterprise Edition) instances. This feature is suitable for scenarios such as active geo-redundancy and disaster recovery. This topic describes how to configure a data synchronization job.

You can complete the configuration in the console or by calling an OpenAPI operation. For more information, see [Call an OpenAPI operation to configure one-way or two-way data synchronization between Tair Enterprise Edition instances](/help/en/dts/user-guide/use-openapi-explorer-to-configure-one-way-or-two-way-data-synchronization-between-apsaradb-for-redis-enhanced-edition-instances).

## **Function overview**

To use the two-way synchronization feature, you must configure two synchronization links in sequence: a forward data synchronization task and a remote sync task. The forward data synchronization task performs **full migration** and **incremental synchronization**. The remote sync task performs only **incremental data** synchronization.

-   **Full migration**: DTS migrates all historical data from the source database to the destination database. Full migration is free of charge.
    
-   **Incremental synchronization**: After full migration, DTS synchronizes incremental data from the source database to the destination database in real time. You are charged for incremental migration based on the duration. The fee is not related to the amount of data that is migrated. For more information, see [Billable items](/help/en/dts/product-overview/billable-items).
    

**Warning**

To prevent data inconsistency, do not modify or write data to the same key in both databases at the same time while the two-way synchronization tasks are running.

## Prerequisites

The source and destination instances are Tair (Enterprise Edition) instances.

**Note**

-   Tair (Enterprise Edition) disk-based instances do not support two-way data synchronization.
    
-   If a Tair persistent memory-optimized instance is used as the source database, you must manually enable the appendonly parameter.
    

## **Precautions**

-   When you run a data migration task, do not scale or change the specifications or endpoint of the source or destination database. Otherwise, the data migration task fails. If the data migration task fails, reconfigure the task to account for the changes. In addition, the data migration consumes resources of the source and destination databases. We recommend that you perform the data migration during off-peak hours.
    
-   If the source or destination instance of a two-way synchronization task is in a region outside China, two-way data synchronization is supported only between instances in the same region. Cross-region two-way data synchronization is not supported. For example, two-way data synchronization is supported between instances in the Japan (Tokyo) region. It is not supported between an instance in the Japan (Tokyo) region and an instance in the Germany (Frankfurt) region.
    
-   A two-way data synchronization instance contains a forward synchronization task and a reverse synchronization task. If an object is to be synchronized in both the forward and reverse synchronization tasks when you configure or reset the instance, the following rules apply:
    
    -   Only one of the tasks can synchronize both the full data and incremental data of objects. The other task synchronizes only the incremental data of the objects.
        
    -   The source data of the current task can be synchronized only to the destination database in the task. The synchronized data is not used as the source data of the other task.
        
    

## Procedure

1.  Go to the Data Synchronization Tasks page.
    
    1.  Log on to the [Data Management (DMS) console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, click **Data + AI**.
        
    3.  In the left-side navigation pane, choose **DTS (DTS)** > **Data Synchronization**.
        
2.  Click **Create Task**.
    
3.  Configure the source and destination databases, and then click the **Test Connection And Proceed** button at the bottom of the page.
    
    **Category**
    
    **Configuration**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the DTS task. DTS automatically generates a task name. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select DMS Database Instance**
    
    If you added the source database to DMS, you can select it here. After you select the source database, you do not need to enter information about the database. If you did not add the source database to DMS, ignore this option.
    
    **Database Type**
    
    Select **Tair/Redis**.
    
    **Access Method**
    
    Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    Select the region where the instance resides.
    
    **Cross-account Data Synchronization**
    
    This example is for a migration within the same Alibaba Cloud account. Select **No**.
    
    **Instance ID**
    
    Select the ID of the source instance.
    
    **Authentication Method**
    
    Select **Password Login** or **Password-free Login** as needed. In this example, select **Password Login**.
    
    **Note**
    
    If the [password-free access feature](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b) is not enabled for the instance, select **Password Login**.
    
    **Database Password**
    
    Enter the password of the account that is used to connect to the source instance.
    
    **Note**
    
    -   This parameter is not required. If no password is set, you can leave this parameter empty.
        
    -   If you use a custom account, the account must have the read permission. The format of the account and password is <user>:<password>. For example, if the username of the custom account is admin and the password is Rp829dlwa, enter admin:Rp829dlwa for this parameter.
        
    
    **Destination Database**
    
    **Select DMS Database Instance**
    
    If you added the destination database to DMS, you can select it here. After you select the destination database, you do not need to enter information about the database. If you did not add the destination database to DMS, ignore this option.
    
    **Database Type**
    
    By default, **Tair/Redis** is selected.
    
    **Access Method**
    
    Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    Select the region where the destination instance resides.
    
    **Instance ID**
    
    Select the ID of the destination instance.
    
    **Authentication Method**
    
    Select **Password Logon** or **Password-free Logon** based on your requirements. In this example, select **Password Logon**.
    
    **Note**
    
    If the [password-free access feature](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b) is not enabled for the instance, select **Password Login**.
    
    **Database Password**
    
    Enter the password for connecting to the destination database.
    
    **Note**
    
    If you use a custom account, the account must have the write permission. The format of the account and password is <user>:<password>. For example, if the username of the custom account is admin and the password is Rp829dlwa, enter admin:Rp829dlwa for this parameter.
    
4.  Configure the task objects and click **Next: Advanced Configuration** at the bottom of the page.
    
    **Configuration**
    
    **Description**
    
    **Synchronization Types**
    
    Select whether to enable **Full Synchronization** based on your requirements. **Incremental Synchronization** is always selected.
    
    **Synchronization Topology**
    
    The synchronization topology of the data synchronization task. Select **Two-way Synchronization**.
    
    **Processing Mode of Conflicting Tables**
    
    -   **Precheck And Report Errors** (default): checks whether keys exist in the destination database.
        
        If data exists, an error is reported during the precheck and the migration task does not start. If no data exists, the precheck is passed.
        
    
    -   **Ignore Errors And Proceed**: skips the **Check The Existence Of Objects In The Destination Database** check item. If a key with the same name already exists in the destination database, the key is overwritten.
        
    
    **Source Objects** and **Selected Objects**
    
    Select the objects that you want to synchronize in the **Source Objects** section, and click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1341977961/p710008.png) to move the objects to the **Selected Objects** section. To remove a selected object, select the object in the **Selected Objects** section, and click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1341977961/p710004.png) to move the object to the **Source Objects** section.
    
    **Note**
    
    You can select objects to migrate at the database level (DB 0 to DB 255).
    
5.  Configure the advanced settings and click **Next: Data Validation** at the bottom of the page.
    
    In most cases, you can use the default settings. For more information, see [Appendix: Advanced settings](/help/en/redis/user-guide/migrate-data-from-a-self-managed-redis-database-to-an-apsaradb-for-redis-instance#13f7e61083n5r).
    
6.  Configure data verification and click **Next: Save Task Settings and Precheck** in the lower part of the page.
    
    In most cases, you can retain the default settings. For more information, see [Configure data verification](/help/en/dts/user-guide/enable-data-verification#section-uhi-nvx-wwh).
    
7.  Perform a precheck, and click **Next: Purchase Instance** in the lower part of the page.
    
    If **Warning** or **Failed** items are generated during the precheck, check the items individually. You can click **View Details** and troubleshoot the issues. You can also click **Confirm Alert Details** and ignore the check items. However, issues such as data inconsistency may occur, which may pose risks to your business. For more information, see [FAQ](/help/en/dts/support/faq#section-piu-4az-yz1). After you complete the preceding operations, perform another precheck.
    
8.  On the **buy** page, configure the parameters and click **Buy and Start**.
    
    -   (Optional) Select the **resource group** to which the DTS data migration instance belongs. The default value is **default resource group**.
        
    -   (Optional) Select the specifications of the DTS data migration instance. Higher specifications result in faster migration speed and higher costs. The default value is **large**. For more information, see [Specifications of data migration instances](/help/en/dts/product-overview/specifications-of-data-synchronization-channels).
        
    -   Read and select the terms of service.
        
    
    After you purchase the DTS data migration instance, the data migration task starts. You can view the progress of the data migration task on the data migration page.
    
9.  Wait for the **Status** of the forward sync task to change to **Running**. Then, click **Configure Task** for the reverse task below.
    
10.  Configure the remote sync task by following the preceding steps.
     
     Once the **Precheck Pass Rate** reaches 100%, the configuration is complete and you can click **Return To List**.
     
11.  In the data synchronization list, two-way data synchronization is configured successfully if the **Running Status** of both the forward and reverse synchronization tasks is **Running**.
     

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
        
    
-   Why should I check whether the eviction policy is **noeviction**?
    
    By default, the **maxmemory-policy** parameter that specifies how data is evicted is set to **volatile-lru** for Tair (Redis OSS-compatible) instances. If the destination database does not have sufficient memory, data inconsistency may occur between the source and destination databases due to data eviction. In this case, the data migration task does not stop running. To prevent data inconsistency, we recommend that you set the maxmemory-policy parameter to **noeviction** for the destination database. This way, the data migration task fails if the destination database does not have sufficient memory, but you can prevent data loss in the destination database. For more information about data eviction policies, see [What is the default eviction policy?](/help/en/redis/support/how-does-apsaradb-for-redis-evict-data-by-default#concept-e5v-hs5-ydb)
    
-   Why does the `CROSSSLOT Keys in request don't hash to the same slot` error occur?
    
    If the destination instance uses a cluster architecture, Redis does not support cross-slot operations in a single command. We recommend that you perform operations on only a single key during DTS synchronization to prevent the link from being interrupted.
    
-   Which commands can be synchronized?
    
    -   The following commands can be synchronized:
        
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
