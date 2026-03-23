AnalyticDB for PostgreSQL provides base backup and log backup on a regular basis to prevent data loss.

## How it works

AnalyticDB for PostgreSQL uses base backup and log backup to restore instance data to a specific point in time and ensure the consistency in the status and data of a distributed instance.

**Backup type**

**Elastic storage mode**

**Serverless mode**

Base backup

Base backup backs up all data of an instance. Base backup compresses a snapshot of all instance data and saves the snapshot to offline storage media. Base backup does not block your read or write operations. The operation logs that are generated during a base backup are also backed up to ensure the integrity of base backup.

-   AnalyticDB for PostgreSQL V6.6.2.2 and later use snapshot backup. AnalyticDB for PostgreSQL V6.6.2.1 and earlier use physical backup.
    
-   AnalyticDB for PostgreSQL V7.0 uses snapshot backup.
    

Base backup backs up the metadata of a database. The Serverless mode uses a storage-compute-decoupled architecture. Data is stored in Object Storage Service (OSS) and does not require backup. Instance metadata is compressed and stored in the same OSS directory. Base backup does not block your read or write operations.

Log backup (also called incremental backup)

Log backup backs up log files that are generated from an instance and saves them to offline storage media. Log files record the DML and DDL operations that are performed on databases.

**Important**

AnalyticDB for PostgreSQL V6.0 provides the mechanism of **proactively discarding xlog archiving**. If the disk usage of a node reaches a predefined threshold, which is set to 85% by default, the system considers the risk that excessive I/O writes to the instance can reduce the speed of xlog archiving. To prevent the risk of xlogs accumulating until the disk becomes completely full and write operations are locked out, AnalyticDB PostgreSQL V6.0 proactively discards xlog archiving for the corresponding period of time. This ensures that the over-accumulation of unarchived logs does not affect instance I/O operations. This means that the status of the instance cannot be restored during the period **from the moment the system proactively discards xlog archiving until the next full backup is complete**.

If you have specific business requirements on the disk usage of instance nodes, [Submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to request technical support to modify the threshold for proactively discarding xlog archiving.

AnalyticDB for PostgreSQL uses a full base backup and continuous log backups to restore data at a specific point in time to new instances and ensure data security.

After the base backup data is restored, all nodes execute the data change statements that are recorded in the log backup files in sequence until the restore point in time is reached. The point in time ensures consistency among all nodes when the data restoration of each node is complete.

## Backup policies

**Elastic storage mode**

**Serverless mode**

AnalyticDB for PostgreSQL allows you to view and modify backup policies. For more information, see the "[View and modify backup policies](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/data-backup#section-6xq-7xt-dg8)" section of the Back up data topic.

The system performs incremental backup for data that is added or removed within a backup cycle without compressing the data. The default backup cycle is seven days, and the ratio of backup to data storage is approximately 68%. For more information, see the "[Backup policy](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/backup-and-restoration-serverless-mode#section-rzx-zxs-f00)" section of the Backup and restoration (Serverless mode) topic.

To change the retention period of the backup data, [Submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).

## Scenarios

The backup and restoration feature can be used in the following scenarios:

-   Instance data is lost for reasons such as accidental changes.
    
-   The source instance data is corrupted or unavailable.
    
-   An instance needs to be cloned with the same data.
    
-   The instance specifications except for the number of nodes need to be changed.
    

## Limits

Data can be restored from the source instance only when the source instance has at least one backup set in the successful state.

## Billing

**Elastic storage mode**

**Serverless mode**

The backup and restoration feature is in public preview and is free of charge. You may be charged for this feature in the future.

The backup and restoration feature is not billed separately. Backup data uses disk storage and may incur storage fees. For more information about the billing methods and pricing of disk storage, see [Pricing](/help/en/analyticdb/analyticdb-for-postgresql/product-overview/pricing-1#concept-wpv-tnl-v2b).

## References

-   Elastic storage mode
    
    -   [Back up data](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/data-backup#task-2084911)
        
    -   [Restore data](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/data-restore#task-2084953)
        
-   Serverless mode
    
    -   [Backup and restoration (Serverless mode)](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/backup-and-restoration-serverless-mode#task-2193336)
