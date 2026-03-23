This topic describes how to troubleshoot high I/O issues on an ApsaraDB RDS for SQL Server instance. High I/O affects query performance.

## Background information

I/O performance varies based on two major factors: IOPS and I/O throughput. In most cases, IOPS is unlikely to become the source of a performance bottleneck. However, I/O throughput may cause a performance bottleneck after it reaches the specified upper limit.

## Limits on I/O throughput

-   RDS instances using Premium Local SSDs
    
    RDS instances using Premium Local SSDs share the Premium Local SSDs of the physical host on which these instances are deployed. The maximum IOPS per RDS instance is limited, but the I/O throughput per RDS instance is not limited. Therefore, the maximum I/O throughput of an RDS instance can reach more than 1 GB per second. However, these RDS instances may compete for I/O resources. If you require an exclusive allocation of I/O resources, we recommend that you select the dedicated host instance family. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    
-   RDS instances using cloud disks
    
    Cloud disks that are attached to an RDS instance are dedicated to the instance. Therefore, each instance has an exclusive allocation of I/O resources. The maximum I/O throughput of an RDS instance that uses cloud disks varies based on the following factors:
    
    -   The computing resources of the instance: The computing resources of an RDS for SQL Server instance using cloud disks are defined based on the [specifications of the Elastic Compute Service (ECS) g6 instance families](/help/en/ecs/user-guide/overview-of-instance-families#g6).
        
    -   The storage type and storage capacity of the instance: RDS instances supports standard SSDs and ESSDs. The I/O throughput [varies based on the storage type and storage capacity](/help/en/rds/apsaradb-rds-for-sql-server/storage-type/).
        

## View the I/O throughput of an RDS instance

**Note**

Your RDS instance does not run SQL Server 2008 R2 with cloud disks.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, choose **Autonomy Services** **\>** **Performance Optimization**. On the page that appears, click the **Performance Insight** tab.
    
3.  In the upper-right corner of the tab, click **Custom metric**. In the dialog box that appears, select **I/O Throughput** and click **OK**.
    
    **Note**
    
    After you select **I/O Throughput**, the following metrics are selected:
    
    -   IO\_Throughput\_Read\_Kb: the I/O throughput per second for read operations on the disk
        
    -   IO\_Throughput\_Write\_kb: the I/O throughput per second for write operations on the disk
        
    -   IO\_Throughput\_Total\_Kb: the total I/O throughput per second for read and write operations on the disk
        
    
    ![IO吞吐量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5014568261/p232853.png)
    

## Analyze and optimize the I/O throughput of an RDS instance

The I/O load on an RDS instance includes two major parts: the read operations on data files and the read and write operations on transaction log files. The read operations on data files include the read operations on data pages during queries and backups. For transaction log files, a majority of the read operations are derived from backups, and the write operations are derived from related scenarios other than backups.

If the I/O throughput of an RDS instance is high, you can click **Custom metric**. In the dialog box that appears, you can select the following metrics to identify the type of load that causes an increase in I/O throughput.

**Metric**

**I/O type**

**Description**

**Page\_Reads**

Read

The number of data pages that are read from data files per second. These data pages cannot be hit in the cache.

**Page\_Write**

Write

The number of data pages that are written to data files per second.

**Log\_Bytes\_Flushed/sec**

Write

The number of bytes that are written to transaction log files per second.

**Backup\_Restore\_Throughput/sec**

Read

The number of bytes that are read from and written to data files and transaction log files per second. This metric is valid for backup and restore operations.

**Note**

The size per data page is 8 KB.

### **Case analysis**

![IO吞吐量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5014568261/p232888.png)![page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5014568261/p232891.png)![log](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5014568261/p232893.png)![备份](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5014568261/p232894.png)

The overall I/O throughput statistics show that the read load is higher than the write load. From 08:00 to 22:00, the I/O throughput is relatively stable. From 01:00 to 03:00 and from 22:00 to 24:00, the I/O throughput shows peak values. To further analyze the I/O throughput statistics during these peak hours, you must obtain more performance data.

-   The I/O throughput statistics of data pages show that the I/O throughput suddenly increases at around 01:00 due to read operations on data pages. The peak read speed reaches approximately 50,000 data pages per second, which is equal to approximately 400 MB per second.
    
-   The I/O throughput statistics of data pages, logs, and backups show that the I/O throughput peak during the period of time from 02:00 to 03:00 is derived from four sources. These sources are read operations on data pages, write operations on data pages, write operations on transaction log files, and log backups. I/O throughput peaks at approximately 40 MB per second for both read and write operations on data pages, approximately 30 MB per second for write operations on transaction log files, and approximately 50 MB per second for log backups. The cumulative I/O throughput peaks at approximately 150 MB per second.
    
-   The I/O throughput statistics of data pages and logs show that the I/O load during the period of time from 08:00 to 22:00 is derived from three sources in descending order based on their proportions. These sources are read operations on data pages, write operations on data pages, and write operations on transaction log files. I/O throughput reaches 80 MB to 100 MB per second for read operations on data pages, approximately 30 MB per second for write operations on data pages, and approximately 5 MB per second for write operations on transaction log files.
    
-   The I/O throughput statistics of backups show that the I/O throughput peak during the period of time from 22:00 to 24:00 is derived only from backups. The I/O throughput for backups remains higher than 220 MB per second.
    

## Troubleshoot high I/O throughput caused by read operations on data pages

The high I/O throughput issue that is caused by read operations on data pages is one of the most common high I/O throughput issues in ApsaraDB RDS for SQL Server. In most cases, this issue occurs if the cache size is insufficient. If the cache size of the RDS instance is insufficient, a large number of data pages that are requested by queries cannot be hit in the cache. As a result, ApsaraDB RDS needs to read these data pages from the disk.

Page Life Expectancy (PLE) is a common metric that is used to diagnose the performance of the cache. This metric indicates the average amount of time that each cached data page is retained in the memory. The time is measured in seconds. A shorter period of time indicates higher pressure on the cache.

In normal cases, we recommend that you set the threshold of the PLE metric to a value that is greater than or equal to 300 seconds. Higher memory specifications indicate a larger recommended threshold. You can use the following formula to calculate the recommended threshold:

`Recommended threshold = (The memory size of the buffer pool/4) × 300`

For example, if the RDS instance provides 16 GB of memory, the amount of memory that can be allocated to the buffer pool cannot exceed 12 GB. In this case, we recommend that you set the threshold to 900 seconds based on the following calculation: `(12/4) × 300 = 900.`

**Note**

For more information, see [Page Life Expectancy (PLE) in SQL Server](https://www.sqlshack.com/page-life-expectancy-ple-in-sql-server/).

If the high I/O throughput issue is caused by read operations on data pages, we recommend that you upgrade the memory specifications of your RDS instance. We recommend that you do not upgrade the performance level (PL) of the disk.

In addition, you can reduce the total number of data pages to mitigate the read load on the RDS instance. For example, you can archive or delete historical data files, enable the data compression feature on tables, delete low-value indexes, and defragment indexes.

## Troubleshoot high I/O throughput caused by write operations on data pages and transaction log files

You can use the autonomy service to check whether data manipulation language (DML) or data definition language (DDL) operations are frequently performed during the period of time that shows high I/O throughput. The supported DML operations include INSERT, DELETE, UPDATE, and MERGE. The supported DDL operations include CREATE INDEX and ALTER INDEX.

-   High I/O throughput caused by DML operations
    
    Check whether these DML operations are routine workloads. If these DML operations are not routine workloads, we recommend that you perform these DML operations during off-peak hours. For example, you can perform temporary data processing and archiving operations during off-peak hours. If these DML operations are routine workloads, we recommend that you upgrade the PL of the disk. For example, you can upgrade the PL of an ESSD from PL1 to PL2.
    
    We also recommend that you optimize the index structure and delete the nonclustered indexes that are no longer required.
    
-   High I/O throughput caused by DDL operations
    
    In most cases, DDL operations are maintenance or temporary workloads. We recommend that you perform DDL operations during off-peak hours.
    
    In addition, when you perform operations, such as creating and rebuilding indexes, we recommend that you specify the maximum degree of parallelism (MAXDOP) in the SQL statements that are used. This reduces the peak I/O throughput during the running of the SQL statements. However, this increases the time that is required for DDL operations.
    

## Troubleshoot high I/O throughput caused by backups

ApsaraDB RDS for SQL Server supports backups only on primary RDS instances. This increases the I/O throughput of primary RDS instances. Among all types of backups, full backups have the largest impact on I/O throughput, and log backups have the smallest impact on I/O throughput.

Backups are important to ensure the security and reliability of your data. We recommend that you specify suitable backup settings to reduce the impact of backups on your workloads. For more information, see [Back up an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#concept-l1m-xgn-ydb).

You can log on to the ApsaraDB RDS console and go to the **Backup and Restoration** page. On this page, you can view the time that is required for each data backup. Then, you can set the backup time to an off-peak hour and specify a suitable backup cycle.

![执行耗时](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5014568261/p232937.png)

-   For example, a full backup requires approximately 6 hours, and your business peak hours start from 09:00 to 21:00 every day. In addition, the background system runs data processing tasks from 22:00 on the current day to 01:00 on the next day. In this case, you can set the backup time to 01:00 to 02:00. This way, each full backup can be finished before 08:00. You can also set the backup cycle to every day of the week. This expedites the restoration process.
    
-   For example, a full backup requires approximately 15 hours, and your workloads are interrupted by every backup on weekdays. We recommend that you set the backup cycle to Saturday and Sunday. However, if you want to restore data to a specific point in time, the restoration process may be time-consuming.
    

If you cannot prevent the conflicts between your workloads and full backups by adjusting the backup settings, we recommend that you upgrade the PL of the disk or split your data. Data splitting reduces the amount of data on individual RDS instances. Data splitting also reduces the time that is required for each full backup.
