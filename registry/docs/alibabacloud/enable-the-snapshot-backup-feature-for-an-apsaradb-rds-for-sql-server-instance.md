ApsaraDB RDS for SQL Server supports the snapshot backup feature. Compared with the physical backup method, the snapshot backup feature significantly reduces the time that is required to restore data and consumes a small number of I/O resources. **This has minimal impact on the performance of your ApsaraDB RDS for SQL Server instance.** This topic describes how to configure the snapshot backup feature. This topic also describes the benefits of the snapshot backup feature.

## Benefits

ApsaraDB RDS for SQL Server supports the snapshot backup and [physical backup](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance) features. The snapshot backup feature is developed based on [Volume Shadow Copy Service (VSS)](https://docs.microsoft.com/en-us/windows-server/storage/file-server/volume-shadow-copy-service), which is provided by Microsoft. The snapshot backup feature allows you to periodically back up data snapshots on cloud disks and use the snapshots to quickly restore data to a point in time. The snapshot backup feature provides the following benefits:

-   **Fast restoration and reduced impacts:** The snapshot backup feature can be used to restore data to a specific point in time at a high speed. This significantly reduces the recovery time objective (RTO) and improves the fault tolerance of your database service.
    
-   **Low resource consumption and lossless performance:** The snapshot backup feature does not consume CPU or memory resources. Snapshot backups consume a fewer I/O resources than the physical backup feature. When snapshot backups are being created, the performance of your RDS instance is not significantly affected. For more information, see [Troubleshoot high I/O issues on an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/troubleshoot-high-i-or-o-issues-on-an-apsaradb-rds-for-sql-server-instance#task-2038727) and [Troubleshoot the issues that cause high CPU utilization of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/troubleshoot-the-issues-that-cause-high-cpu-utilization-of-an-apsaradb-rds-for-sql-server-instance#task-2038352).
    

## Comparison between snapshot backup and physical backup

**Item**

**Physical backup**

**Snapshot backup**

Log backup frequency

The following backup frequencies are supported:

-   **Same as Data Backup**
    
-   **Every 30 Minutes**
    
-   **Every 5 Minutes**
    

The following backup frequencies are supported:

-   **Every 30 Minutes**
    
-   **Every 5 Minutes**
    

Restoration speed

The restoration is fast. The restoration speed varies based on the specifications of your RDS instance.

The restoration is extremely fast. The restoration speed is not affected by the amount of data. The speed of restoring data from a snapshot backup is higher than the speed of restoring data from a physical backup.

**Expand to view the estimated restoration time**

-   Restore data to a new RDS instance
    
    -   The time that is required to restore data from a backup set is approximately 30 minutes. This includes the time that is required to create an RDS instance and the time that is required to restore the data from the backup set.
        
    -   The time that is required to restore data to a point in time varies based on the log backup file that is used. This includes the time that is required to create an RDS instance and the time that is required to restore the data from the log backup file.
        
-   Restore data to an existing RDS instance
    
    -   The time that is required to restore data from a backup set is approximately 10 minutes.
        
    -   The time that is required to restore data to a point in time varies based on the log backup file that is used.
        

**Note**

The log backup files that are used are generated between the point in time at which the most recent snapshot backup file is generated and the point in time to which you want to restore data.

Amount of data supported

Unlimited.

Unlimited.

Impact on instance performance

A large number of resources are consumed. This significantly affects the performance of your RDS instance. We recommend that you perform a physical backup during off-peak hours.

Only a small number of I/O resources are consumed. This does not significantly affect the performance of your RDS instance. You can perform a snapshot backup at any time.

[Backup file download](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance)

Physical backup files can be downloaded.

Snapshot backup files cannot be downloaded.

## Prerequisites

-   Your RDS instance meets the following requirements:
    
    -   The RDS instance uses Enterprise SSDs (ESSDs). Serverless RDS instances are not supported.
        
    -   The RDS instance was created after January 01, 2021.
        
-   If the RDS instance runs RDS Basic Edition or RDS High-availability Edition, make sure that the [cross-region backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#section-opw-kjj-ntt) feature is disabled. If the cross-region backup feature is enabled, you must disable it before you enable the snapshot backup feature.
    
-   The [AliyunServiceRoleForDBS](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs) service-linked role is created by using your Alibaba Cloud account if you use the backup feature of ApsaraDB RDS for the first time.
    

## Limits

-   If your RDS instance runs RDS Basic Edition or RDS High-availability Edition, the snapshot backup feature does not support cross-region backups. For more information, see [Use the cross-region backup feature](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#concept-405443).
    
-   Snapshot backup files cannot be downloaded. For more information, see [Download data backup files and log backup files](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance).
    
-   Snapshots are created based on cloud disks instead of backup files. The snapshot backup feature does not support incremental backups.
    
    **Note**
    
    -   Snapshots use the incremental snapshot chain mechanism. This mechanism retains the status of snapshot at each point in time. As a result, a snapshot backup only backs up the incremental and updated data on cloud disks.
        
    -   If you use the snapshot backup feature, the following log backup frequencies are supported: **Every 30 Minutes** and **Every 5 Minutes**.
        
    
-   The name of a database or the name of a physical file that corresponds to the database cannot start with a space. Otherwise, snapshot backups fail. Example: `C:\Data\ MyDatabase.mdf`).
    

## Billing rules

Each RDS instance is allocated a free quota for backup storage. If the backup storage of your RDS instance does not exceed the free quota, you are not charged for backup storage. If the backup storage exceeds the free quota, you are charged for the excess storage that you use. For more information, see [Backup storage fees](/help/en/rds/apsaradb-rds-for-sql-server/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-sql-server-instance).

## Procedure

By default, an RDS instance uses the physical backup method. You can manually change the backup method to snapshot backup.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Backup Strategy** tab of the **Backup and Restoration** page, click **Edit** in the **Data Backup Settings** section.
    
4.  In the dialog box that appears, set the **Backup Method** parameter to **Snapshot Backup** and click **Save**.
    
    **Note**
    
    -   After you change the backup method to **Snapshot Backup**, physical backups are not regularly performed. However, you can still select **Physical Backup** to perform a physical backup when you manually back up your RDS instance. For more information, see [Back up an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance).
        
    -   After you change the backup method to **Snapshot Backup**, the log backup frequency is fixed as **Every 30 Minutes**.
        
    

## References

-   You can modify the automatic backup policy or perform a manual backup. For more information, see [Back up an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#concept-l1m-xgn-ydb).
    
-   You can restore data backup files to an existing RDS instance or a new RDS instance when you want to restore the data on which unintended operations are performed or to analyze historical data. For more information, see [Restore the data of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance).
    
-   You can create, query, and manage backup files by calling the following API operations.
    
    -   [CreateBackup](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-createbackup-sqlserver)
        
    -   [DescribeBackups](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describebackups-sqlserver)
        
    -   [DescribeBackupPolicy](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describebackuppolicy-sqlserver)
        
    -   [ModifyBackupPolicy](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-modifybackuppolicy-sqlserver)
        
    -   [DescribeBackupTasks](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describebackuptasks-sqlserver)
