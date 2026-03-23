Each specification of a PolarDB for MySQL cluster has a maximum storage capacity. As data, logs, and temporary files grow, your storage space can become saturated. This can cause the cluster to be locked in a read-only state, disrupting normal business operations. To help you effectively manage storage resources and ensure cluster stability, this topic provides a detailed overview of how storage space is used, along with specific methods for viewing usage, cleaning up files, and reclaiming space.

## **Storage space com**position

Understanding the components of PolarDB for MySQL storage space helps you manage it effectively. This lets you accurately identify issues and take appropriate optimization measures.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2437242671/CAEQTxiBgIDj7Ouz0hkiIGUwNGFlMDM2YzRmYjQ4MDBiMWViMmM0NDIxZGI3NWFi5484694_20250721114543.627.svg)

-   **Data files**: Store your business data, such as data tables and indexes.
    
-   **Log files**: Include binary logs, redo logs, and undo logs. These log files can grow rapidly when you execute large transactions or high-concurrency write operations.
    
    **Note**
    
    By default, binary logging is disabled for PolarDB for MySQL clusters. A more efficient physical log (Redo Log) is used instead. If binary logging is not enabled for your cluster, you can ignore this information.
    
-   **Temporary files**: Generated when you perform operations such as sorting (ORDER BY), grouping (GROUP BY), or join queries. In addition, uncommitted large transactions also generate temporary binary log cache files.
    
-   **System files**: Store core components required for database operations, such as the data dictionary, transaction information, and the doublewrite buffer. These files are fundamental to the self-management of the InnoDB engine and are crucial for ensuring data consistency and cluster recovery. You cannot directly manipulate these files.
    

## **View storage space usage**

You can check your cluster's storage usage in two ways:

-   Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). On the **Basic Information** page of the target cluster, view the storage capacity of the current cluster in the **Distributed Storage** area.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6269546571/p987758.png)
    
-   Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). On the **Storage Analysis** tab of the **Diagnostics and Optimization** > **Quick Diagnostics** page of the target cluster, view the storage space usage at a specified point in time.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6269546571/p987770.png)
    

## **Clean up data files and reclaim table space**

Over time, PolarDB for MySQL may consume excessive storage space due to data fragmentation. In addition, when you use the `DELETE` command to delete data, the system only marks the record's position or data page as reusable. It does not shrink the physical table file. This leads to the accumulation of fragmented space.

**Note**

The console interface may take some time to update after you clean up data files. Wait for the changes to be effective.

### **Clean up files**

For tables that are no longer needed, use the `TRUNCATE TABLE` or `DROP TABLE` command to quickly release all occupied space.

**Note**

Before you perform this operation, make sure your data is backed up to prevent data loss.

### **Reclaim table space**

For tables that have a large amount of fragmentation and need to be retained, run the OPTIMIZE TABLE command during off-peak hours. This operation rebuilds the table, eliminates fragmentation, and reclaims free space. You can also perform this optimization using the [DMS tool](#d82910ce18shi). DMS supports throttling, which minimizes the impact on your workload, although the execution speed is slower.

#### **Notes**

-   If the fragmentation rate of the target table is low, running the `OPTIMIZE TABLE` command does not significantly reduce the tablespace size. You can view the fragmentation rate of the target table in the `DATA_FREE` field of the `information_schema.tables` view.
    
-   When you run the `OPTIMIZE TABLE` command, table data is copied to a new temporary table. This temporarily increases the storage space usage of the cluster.
    
-   For tables that do not contain a full-text index, the `OPTIMIZE TABLE` statement is executed using Online DDL, which supports concurrent reads and writes.
    
-   Running the `OPTIMIZE TABLE` operation on a large table causes a burst in I/O and buffer pool usage. This can lead to locked tables and resource contention. Running this operation during peak hours might cause the cluster to become unavailable and result in monitoring breakpoints. You must run this operation during off-peak hours.
    

#### **Comparison of methods**

You can choose a reclamation method based on your business scenario.

**Tablespace reclamation method**

**Concurrent reads and writes**

**Execution speed**

**Rate limiting**

**Scenarios**

Reclaim tablespace using the `OPTIMIZE TABLE` command

Yes

Fast

No

If the business workload is light and high execution efficiency is required, `OPTIMIZE TABLE` can quickly reclaim tablespace and reduce the space overhead of the cluster.

Reclaim tablespace using DMS

Yes

Slow

Yes

If the cluster workload is sensitive and execution efficiency is not, the DMS tool can reclaim tablespace with a lower impact on your business. This reduces the impact of the space reclamation operation on cluster performance.

#### **Procedure**

## Reclaim tablespace using the OPTIMIZE TABLE command

You can reclaim tablespace by running the following command:

```
OPTIMIZE TABLE [Database1].[Table1],[Database2].[Table2]
```

**Note**

-   `[Database1]` and `[Database2]` are database names. `[Table1]` and `[Table2]` are table names.
    
-   When you run the `OPTIMIZE TABLE` command in the InnoDB engine, the message `Table does not support optimize, doing recreate + analyze instead` is returned. This is a normal response. You can ignore it. Confirm that `ok` is returned. For more information about the `OPTIMIZE TABLE` statement, see [OPTIMIZE TABLE Statement](https://dev.mysql.com/doc/refman/8.0/en/optimize-table.html).
    

## **Reclaim tablespace using DMS**

1.  **Log on to the database**: Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/), click the **Log on to Database** button in the top-right corner of the **Basic Information** page of the target cluster, and log on to the PolarDB for MySQL cluster in the Data Management (DMS) platform.
    
2.  **Reclaim tablespace**: In the left pane, select the target cluster ID, double-click the destination database, right-click any table name, and then select **Batch Operations On Tables**. On the Batch Operations on Tables page, select the tables for which you want to release space and click **Table Maintenance** > **Optimize Table**.
    

## **Clean up log files**

A PolarDB for MySQL cluster might rapidly generate binary logs, redo logs, or undo logs from the processing of large transactions. This can cause a large amount of storage space to be occupied or even filled. **In this situation, first consider expanding the storage capacity, and then investigate the cause of the rapid generation of log files.**

**Note**

The console interface may take some time to update after you clean up binary logs, undo logs, or redo logs. Please wait for the changes to be reflected.

## Binary logs

By default, binary logging is disabled for PolarDB for MySQL clusters. A more efficient physical log (Redo Log) is used instead. If binary logging is not enabled for your cluster, see the cleanup solutions for redo logs and undo logs.

### **Data retention policy**

Binary log files have the following two retention policies:

-   After you enable binary logging, files are retained for 3 days by default. Files older than 3 days are automatically deleted.
    
    **Note**
    
    -   For PolarDB for MySQL clusters purchased before November 23, 2023, binary log files are retained for two weeks (14 days) by default.
        
    -   For PolarDB for MySQL clusters purchased before January 17, 2024, binary log files are retained for one week (7 days) by default.
        
    
-   After you disable binary logging, existing binary log files are retained indefinitely and are not automatically deleted.
    
    **Note**
    
    To delete binary log files, you must set the binary log retention period parameter (`loose_expire_logs_hours` or `binlog_expire_logs_seconds`) to a small value while binary logging is enabled. After the files that exceed the retention period are automatically deleted, you can disable binary logging.
    

### **Modify the retention period**

**Important**

-   Modifying the retention period of binary log files does not cause transient connections or require a cluster restart.
    
-   If modifying the retention period causes many binary log files to be purged (for example, 10 TB), a short-term database write exception may occur during the purge. Therefore, if the total size of the binary log files is large, perform this operation during off-peak hours. Shorten the binary log retention period in multiple steps to purge a portion of the binary log data each time.
    
-   Purged binary log files cannot be recovered after they are deleted.
    

You can modify the binary log file retention period in the following ways:

-   MySQL 5.6: You can set the binary log retention period by modifying the value of the `loose_expire_logs_hours` parameter. The value is in hours. The value range is 0 to 2376. The default value is 72. A value of 0 indicates that binary log files are not automatically deleted.
    
-   MySQL 5.7 or MySQL 8.0: You can set the binary log retention period by modifying the value of the `binlog_expire_logs_seconds` parameter. The value is in seconds. The value range is 0 to 4294967295. The default value is 259200. A value of 0 indicates that binary log files are not automatically deleted.
    

### **Clean up historical files**

After you modify the binary log retention period parameter (`loose_expire_logs_hours` or `binlog_expire_logs_seconds`), historical binary log files in the cluster are not immediately purged. In this case, you can use one of the following three methods to purge historical files:

-   **Wait for automatic purge**: When the last binary log file in the cluster reaches its maximum size (the `max_binlog_size` parameter), the system switches to a new binary log file. The historical binary log files are then automatically purged.
    
-   **Manual purge**: Use a privileged account to run the `flush binary logs` command. This immediately triggers a binary log file switch and purges the expired binary log files.
    
-   **Restart the cluster**: After the cluster is restarted, the system automatically purges the historical binary log files.
    

## Undo logs

In a PolarDB for MySQL cluster, undo logs serve as historical versions for multiversion concurrency control (MVCC). Therefore, if an uncommitted transaction on a read-only node or a read/write node holds an old read view, the undo log cleanup process is blocked. This causes space to accumulate continuously.

### **Identify and terminate uncommitted transactions**

1.  **Log on to the database**: Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/), click the **Log on to Database** button in the upper-right corner of the **Basic Information** page for the target cluster to log on to the PolarDB for MySQL cluster in the Data Management (DMS) platform.
    
2.  **Find uncommitted transactions**: Run the following command to check for long-running uncommitted transactions.
    
    ```
    SELECT * FROM INFORMATION_SCHEMA.innodb_trx;
    ```
    
    Pay close attention to transactions where the `trx_started` (transaction start time) is very old, or the `trx_state` (transaction status) has been `RUNNING` for a long time. Record their `trx_mysql_thread_id` (thread ID).
    
3.  **Terminate the transaction**: After you confirm that it will not affect your business, run the KILL command to terminate the target transaction.
    
    ```
    kill [Thread ID];
    ```
    

### **View background cleanup progress**

After the thread corresponding to the transaction is cleaned up, you need to check the progress of the `Undo history`. If you find that the length of the `Undo history` is still growing rapidly, you need to tune the background purge performance.

**Note**

When the write pressure is high, the PolarDB policy is to prioritize current write performance. This may cause a lag in undo log cleanup.

1.  **Monitor cleanup progress**: Run the following command to observe the length of the `Undo history`.
    
    ```
    SELECT COUNT FROM INFORMATION_SCHEMA.innodb_metrics WHERE name = 'trx_rseg_history_len';
    ```
    
    If this value is greater than 1,000,000, or if it continues to rise over a few minutes while the current pressure is high, it indicates that the cleanup speed cannot keep up with the write speed.
    
2.  **Adjust cleanup parameters**: Improve cleanup efficiency.
    
    1.  Increase the value of the `innodb_purge_batch_size` parameter to increase the batch size for each cleanup.
        
    2.  Increase the value of the `innodb_purge_threads` parameter to increase the number of purge threads. We recommend that you set this value to the number of CPU cores in the cluster specification.
        
        **Note**
        
        This operation restarts the cluster. You must perform this operation during off-peak hours.
        

### **Reclaim occupied space**

After the `Undo history` length decreases and stabilizes, if you want to clean up the space occupied by undo logs, you can enable the `undo log truncation` feature.

-   **Enable the feature**: Set the `innodb_undo_log_truncate` parameter to ON.
    
-   **Trigger mechanism**: When the size of a single undo file exceeds `innodb_max_undo_log_size`, `undo log truncation` is triggered.
    
-   **Version restrictions**: Some earlier minor versions have bugs related to `undo log truncation`. The system has disabled permission to modify this parameter for these versions. If you encounter this situation, you need to [upgrade the minor version](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version) of the cluster to the latest version.
    
-   **Disable promptly**: This feature introduces extra overhead during cluster switchovers or restarts. **After the space is reclaimed, immediately set this parameter back to OFF**, especially before you perform maintenance operations such as a [minor version upgrade](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version). Enable this feature only when needed.
    

## Redo logs

A PolarDB for MySQL cluster uses redo logs instead of binary logs to achieve data synchronization between the primary node and read-only nodes.

-   Excluding log backups, local redo logs occupy 2 GB to 11 GB of storage space. This includes eight redo logs in the buffer pool (8 GB), the redo log that is being written (1 GB), a pre-created redo log (1 GB), and the last redo log (1 GB).
    
-   Including log backups, local redo logs are retained for about one hour after the backup is complete. If the write speed is fast (for example, more than 35 MB/s), it may lead to a temporary accumulation of local redo logs.
    

### **Cleanup rules**

Redo logs do not support manual cleanup. They are usually cleaned up automatically after a log backup is completed.

**Note**

You can adjust the cluster's [log backup policy](/help/en/polardb/polardb-for-mysql/user-guide/configure-backup-settings) in the [PolarDB console](https://polardb.console.alibabacloud.com/). The default retention period is 7 days.

## **Clean up temporary files**

A PolarDB for MySQL cluster may generate many temporary files from complex queries or large transactions. This can cause a large amount of storage space to be occupied or even filled. In this case, an error message may appear, such as: `error: 1114 The table '/home/mysql/log/tmp/#sqlxxx_xxx_xxx' is full`.

You can handle this in the following two ways:

## Terminate sessions

Terminate sessions that have a state of `Copy to tmp table` or `Sending data`.

1.  **Log on to a database**: You can go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/) and click the **Log on to Database** button in the upper-right corner of the target cluster's **Basic Information** page to log on to the PolarDB for MySQL cluster in the Data Management (DMS) platform.
    
2.  **View session status**: Run the following command to view the session status in the database.
    
    ```
    SHOW PROCESSLIST;
    ```
    
3.  **Find the target session**: In DMS, click the `State` column in the query results to sort the data in that column. Find sessions with a state of `Copy to tmp table` or `Sending data`, and record the session ID.
    
4.  **Terminate the session**: Run the following command to terminate the target session.
    
    ```
    kill [Session ID];
    ```
    
    **Important**
    
    Before you terminate the session, make sure it will not affect your running business.
    

If you still cannot release storage space after you perform the preceding steps, you can [restart each node in the cluster](/help/en/polardb/polardb-for-mysql/user-guide/node-management#1e8cd74053icj) to release the storage space occupied by temporary files.

## Adjust parameters

Go to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). On the **Settings and Management** > **Parameters** page of the target cluster, modify the `tmp_table_size` and `max_heap_table_size` parameters to increase the temporary tablespace size.

## FAQ

**Why does the storage space size not change after I use the** `**DELETE**` **command to delete data?**

The `DELETE` operation only marks the record's position or data page as reusable. It does not reduce the physical file size. This leads to space fragmentation. You must run the [OPTIMIZE TABLE](#85b888e334uqk) command on the table during off-peak hours to reclaim this fragmented space.
