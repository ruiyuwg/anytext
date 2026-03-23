ApsaraDB RDS for MariaDB supports automatic backup and manual backup. You can configure a backup policy to adjust the data backup cycle and log backup cycle for ApsaraDB RDS to automatically back up your ApsaraDB RDS for MariaDB instance. You can also manually back up the RDS instance.

## **Prerequisites**

The AliyunServiceRoleForDBS service-linked role is created by using your Alibaba Cloud account when you use the backup feature of ApsaraDB RDS for the first time. For more information, see [How do I create a service-linked role for Data Disaster Recovery?](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs)

## Usage notes

-   Backup files occupy backup storage. Each RDS instance is allocated a free quota on backup storage. If the amount of backup storage that you use exceeds the free quota, you are charged for the excess backup storage that you use. We recommend that you specify a backup cycle based on your business requirements to maximize the usage of the free quota. For more information about the free quota on backup storage, see [View the free quota for backup storage of an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/view-the-free-quota-for-backup-storage-of-an-apsaradb-rds-for-mariadb-instance#concept-ipg-lm4-ydb).
    
-   We recommend that you familiarize yourself with the billing methods and billable items of backup storage. For more information, see [Billable items, billing methods, and pricing](/help/en/rds/product-overview/billable-items-billing-methods-and-pricing#concept-qxr-pd2-vdb).
    
-   For more information about the billing rules of the backup storage usage, see [ApsaraDB RDS pricing](https://www.alibabacloud.com/product/apsaradb-for-rds#pricing).
    
-   Do not execute DDL statements during a backup operation. If DDL statements are executed during a backup operation, the relevant tables are locked and the backup operation fails.
    
-   We recommend that you back up your RDS instance during off-peak hours.
    
-   If your RDS instance has a large amount of data, a backup may require a long period of time to complete.
    
-   Backup files are retained for a specified period of time. Before the specified retention period elapses, we recommend that you download the backup files to your computer.
    

## Backup description

**Data backup**

**Log backup**

Snapshot backup is supported. Physical backup and logical backup are not supported.

-   Log files occupy the storage capacity of the RDS instance.
    
-   If the size of a log file exceeds 500 MB or the period of time during which log data is being written to a log file exceeds 6 hours, a new log file is generated. The original log file is asynchronously uploaded.
    
-   You can use the Upload Binlogs feature to upload log files to an Object Storage Service (OSS) bucket. This does not affect the data restoration of the RDS instance, and log files no longer occupy the storage capacity of the RDS instance.
    

**Note**

The OSS bucket in which the log files are stored is inaccessible.

## Trigger an automatic backup

ApsaraDB RDS automatically backs up your RDS instance based on the backup policy that you specify.

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, click the **Backup Strategy** tab. On the tab that appears, click **Edit** in the **Data Backup Settings** section.
    
4.  In the **Backup Settings** dialog box, specify a backup policy and click **Save**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Data Backup Retention (Days)
    
    The number of days for which you want to retain data backup files. Valid values: 7 to 730. Default value: 7.
    
    Backup Cycle
    
    The cycle based on which you want to perform a backup. You can select one or more days of the week.
    
    **Note**
    
    For data security purposes, we recommend that you select at least two days of the week.
    
    Backup Time
    
    The period in hours during which you want to perform a backup.
    
    Log Backup
    
    Specifies whether to enable or disable the log backup feature.
    
    **Important**
    
    If you disable this feature, all log backup files are deleted and you cannot restore the data of the RDS instance to a specified point in time.
    
    Log Retention Period (Days)
    
    -   The number of days for which you want to retain log backup files. Valid values: 7 to 730. Default value: 7.
        
    -   The log retention period must be less than or equal to the data backup retention period.
        
    

## Perform a manual backup

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the upper-right corner of the page that appears, click **Backup Instance**. In the **Backup Instance** dialog box, click **OK**.
    

After the backup is complete, you can choose **Backup and Restoration** **>** **Base Backups** and click the **Data Backup** tab or the **Log Backup** tab to restore the backup file to another RDS instance.

## FAQ

1.  Can I disable the data backup feature for my RDS instance?
    
    No, you cannot disable the data backup feature for your RDS instance. The data backup retention period must be within the range of 7 days to 730 days.
    
2.  Can I disable the log backup feature for my RDS instance?
    
    Yes, you can disable the log backup feature for your RDS instance in the Backup Settings dialog box.
    

## Related operations

**Operation**

**Description**

[CreateBackup](/help/en/rds/api-create-a-backup-task#doc-api-1084693)

Creates a backup task for an instance.

[DescribeBackups](/help/en/rds/api-query-data-backup-files#doc-api-1091844)

Queries the backup files of an instance.

[DescribeBackupPolicy](/help/en/rds/api-query-backup-settings#doc-api-Rds-DescribeBackupPolicy)

Queries the backup settings of an instance.

[ModifyBackupPolicy](/help/en/rds/api-modify-backup-settings#doc-api-Rds-ModifyBackupPolicy)

Modifies the backup settings of an instance.

[DescribeBackupTasks](/help/en/rds/api-query-backup-tasks#doc-api-Rds-DescribeBackupTasks)

Queries the backup tasks of an instance.

[DescribeBinlogFiles](/help/en/rds/api-query-log-backup-files#doc-api-Rds-DescribeBinlogFiles)

Queries the log files of an instance.
