ApsaraDB RDS for SQL Server supports automatic backup and manual backup. You can manually back up your instance, or configure a backup policy to automatically back up your instance. If log backup is enabled for your instance, you can restore the instance to **any point in time** within the backup retention period.

## **Backup features**

## Data backup

RDS for SQL Server supports two data backup methods: physical backup and [snapshot backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance). For more information, see [Differences between snapshot backup and physical backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#section-cwj-t5p-dr4).

**Backup method**

**Description**

**Physical backup**

-   Full physical backups and incremental physical backups are supported. Logical backups are not supported.
    
-   **By default, the incremental backup feature** is enabled to reduce the size of backup files. Automatic backups are performed based on the backup cycle of a full backup following incremental backups.
    
    **Expand to view the incremental backup policy**
    
    -   **Backup cycle**: After a full backup is successfully performed, the system automatically performs an incremental backup within three days starting from the day on which the full backup is performed. The system automatically performs a full backup three days after the previous full backup.
        
    -   **Conditions for automatic upgrade to a full backup**: To ensure the absolute integrity of the backup chain and data security, the system automatically upgrades a scheduled incremental backup to a full backup if any of the following conditions are met:
        
        -   **Periodic mandatory rotation**: More than three days have passed since the last successful full backup.
            
        -   **Ensuring data integrity**: A new database is detected on the instance.
            
        -   **Repairing the backup chain**: The last backup task failed, or there are risks of data corruption, such as a database creation failure.
            
    -   **Global settings:** If you disable the incremental backup feature in the console, the preceding policy does not apply. All backup jobs performed by the system will be full backups.
        
    
-   Backups for individual databases are supported. You can back up one or more databases of your RDS instance.
    
-   The system shrinks the transaction logs of the RDS instance during each backup. You can log on to the ApsaraDB RDS console and go to the **Backup and Restoration** page of your RDS instance. Then, click **Shrink Transaction Log** to manually shrink transaction logs.
    
-   By default, backups are performed on the primary RDS instance. If your RDS instance runs RDS [Cluster Edition](/help/en/rds/apsaradb-rds-for-sql-server/rds-cluster-edition), you can configure settings to allow [physical backups to be preferentially performed on the secondary RDS instance](#section-f33-lk4-ydb). This reduces the I/O loads of the primary RDS instance and improves instance performance and stability.
    
    **Expand to view the notes for the secondary instance backup**
    
    -   **Feature limitation**: RDS Cluster Edition instances do not support setting backup priority on the [advanced backup policy page](/help/en/rds/apsaradb-rds-for-sql-server/sparse-backup#f36b76b0c114t).
        
    -   **Incremental backup limitations**: The secondary instance backup feature does not support incremental backups. If you use this feature, the system performs full backups instead of incremental backups. This increases the amount of backup data. To prevent this issue, we recommend modifying the backup policy. For example, you can change the backup policy from one backup every day to one backup every two days.
        
    -   **Automatic failover**: To ensure that backup tasks always succeed, the system automatically switches the backup task to the primary instance if the secondary instance does not meet the backup conditions.
        
    -   **Operations forced on the primary database**: Some maintenance operations, such as transaction log shrinking, are forcefully performed on the primary RDS instance, and cannot be performed on the secondary RDS instance. If the RDS instance uses the secondary instance backup policy and you manually shrink the transaction logs of the instance, transaction log shrinking is forcefully scheduled to the primary RDS instance.
        
    -   **Impact of backup configuration changes**: If you change the backup policy to secondary instance backup and modify the backup time, a full backup may be triggered 2 minutes later. In this case, if the secondary RDS instance does not meet the backup conditions, backups are automatically performed on the primary RDS instance. This affects your workloads. To reduce the impact of resource consumption caused by backup operations on instance performance, we recommend modifying the backup policy and backup time during off-peak hours.
        
    

**Snapshot backup**

[Full snapshot backups](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance) are periodically performed based on the backup cycle that you specify. Compared with physical backup, the snapshot backup method is **faster and has minimal impact on instance performance**.

## Log backup

-   The system automatically generates log backup files for your RDS instance based on the backup frequency that you specify. The following backup frequencies are supported: **Same as Data Backup** , **Every 5 Minutes** , and **Every 30 Minutes**.
    
    **Note**
    
    -   The total size of log backup files does not vary with the backup frequency.
        
    -   After you change the backup method to **Snapshot Backup** , the backup frequency can be set only to **Every 5 Minutes** or **Every 30 Minutes** .
        
    
-   The log backup feature is enabled by default and cannot be disabled. You can specify a log backup retention period that ranges from 7 days to 730 days.
    
-   You can [download log backup files](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance).
    
    **Note**
    
    If the backup frequency is set to **Every 30 Minutes** or **Every 5 Minutes**, you can restore the data of your RDS instance that runs RDS Basic Edition to a specific point in time within the previous 30 minutes or 5 minutes in the event of cloud disk damage or other unexpected failures.
    

## **Backup data protection**

-   **Tamper-proofing**
    
    Full physical backups and log backups for RDS for SQL Server are stored in OSS. Full snapshot backups are stored in the snapshot service of enterprise SSD (ESSD). Both storage methods feature Write Once Read Many (WORM) for tamper-proofing.
    
-   **Protection against malicious or accidental deletion**
    
    -   Automatic deletion upon expiration: The system automatically deletes expired backup sets based on the expiration time set in the [backup policy](#section-f33-lk4-ydb). Additionally, [automatic backups cannot be disabled](#section-f33-lk4-ydb). The minimum retention period is 7 days, and the minimum backup frequency is twice per week. Therefore, the full and log data generated by automatic backups cannot be completely deleted.
        
    -   Manual deletion by users: Users are not allowed to manually delete backup data.
        

## **Prerequisites**

If you use the backup features of RDS for the first time, use your Alibaba Cloud account to [authorize the service-linked role (AliyunServiceRoleForDBS)](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs).

## **Usage notes**

-   After you modify the backup time of your RDS instance, a backup may be triggered 2 minutes later. This may cause high I/O bandwidth on the primary RDS instance and affect your workloads. We recommend that you modify the backup time during off-peak hours to minimize the impact of resource consumption caused by backup operations on the performance of your RDS instance.
    
-   When you perform a physical backup on your RDS instance, the backup speed is fast and cannot be limited. This may cause high I/O bandwidth and affect your workloads. To minimize the impact on the performance of your RDS instance, we recommend that you perform physical backups during off-peak hours.
    
-   If your RDS instance has a large amount of data, a backup may require a long period of time.
    
-   You cannot back up or restore cold storage databases. This applies if you enable [data archiving to OSS](/help/en/rds/apsaradb-rds-for-sql-server/archive-data-to-an-oss-bucket) and the required database is converted into a cold storage database.
    
-   Backup files are retained for a specific period of time. Before the retention period elapses, we recommend that you [download the backup files that need to be retained for a long period of time to your computer](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance). This prevents data loss due to expiration.
    
-   The RDS instance collects traffic statistics from the network interface controllers to reflect the bandwidth usage in SQL Server. Statistics about the traffic that is consumed by data backups are also collected. The amount of traffic on your RDS instance surges during a data backup.
    

## Billing

Each RDS instance is allocated a free quota for backup storage. If the backup storage of your RDS instance does not exceed the free quota, you are not charged for backup storage. If the backup storage exceeds the free quota, you are charged for the excess storage that you use. For more information about the free quota and billing rules, see [Backup fee](/help/en/rds/apsaradb-rds-for-sql-server/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-sql-server-instance).

## **Configure automatic backups**

After you configure a backup policy for your RDS instance, the system automatically and periodically backs up the RDS instance based on the backup policy. In some regions, you can use the [sparse backup](/help/en/rds/apsaradb-rds-for-sql-server/sparse-backup) feature by accessing the [advanced backup policy page](/help/en/rds/apsaradb-rds-for-sql-server/sparse-backup#f36b76b0c114t) on the Backup Strategy tab. **If you cannot find the entry point to enable the advanced backup settings on the Backup Strategy tab, submit an** [**application**](https://page.aliyun.com/form/act872942882/index.htm). The parameters and configuration methods vary with the page that you access.

## Standard backup policy page

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, select the **Backup Strategy** tab. In the **Data Backup Settings** area, click **Edit**.
    
4.  Set the following parameters and click **Save**.
    
    **Parameter**
    
    **Description**
    
    **Data Backup Retention Days**
    
    The default value is 7 days. You can set it to a value from 7 to 730 days.
    
    **Backup Cycle**
    
    Select at least two days of the week to back up data.
    
    **Backup Method**
    
    RDS for SQL Server supports the following two backup methods:
    
    -   **[Snapshot backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#task-2067291)**: A backup file of a disk's data state at a specific point in time. The backup speed is fast.
        
    -   **Physical Backup**: This is the default backup method for an instance. The system creates a replica of the instance data. The backup speed is slow.
        
    
    **Important**
    
    After you switch to **Snapshot Backup**, you can still select **Physical Backup** when you perform a [manual backup](#section-yvd-yk4-ydb).
    
    **Backup Priority**
    
    When the backup method for Cluster Edition instances is **Physical Backup**, you can set the backup priority:
    
    -   **Back Up From Primary Database Only**: Specifies that backups are performed only on the primary database.
        
    -   **Prioritize Backup From Secondary Instance**: Backups are performed on the secondary instance to reduce the I/O load on the primary instance and improve the performance and stability of the instance. However, if the secondary instance does not meet the backup conditions, such as when it is unavailable, backups are automatically performed on the primary instance.
        
    
    **Note**
    
    This feature is supported only for Cluster Edition instances. If you enable backups from the secondary database, [incremental backup](#6dc8ae8016aru) or [5-minute log backup](/help/en/rds/apsaradb-rds-for-sql-server/5-minute-log-backup) is not supported.
    
    **Incremental Backup**
    
    Select whether to enable [incremental backup](#6dc8ae8016aru).
    
    **Note**
    
    Incremental backup is not supported when the **Backup Method** is **Snapshot Backup**, or is **Physical Backup** for Cluster Edition instances.
    
    **Backup Time**
    
    Select a time range for the data backup to start, for example, 06:00-07:00. We recommend setting this to off-peak hours.
    
    **Backup Frequency**
    
    You can set the frequency at which log files are generated. You can select **Same as Data Backup**, **Every 30 Minutes**, or **Every 5 Minutes**.
    
    **Important**
    
    -   The [log backup retention period](#6dc8ae8016aru) is the same as the data backup retention period and cannot be configured separately.
        
    -   When the backup priority is set to secondary database backup, you cannot configure [5-minute log backups](/help/en/rds/apsaradb-rds-for-sql-server/5-minute-log-backup).
        
    

## Advanced backup policy page

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, select the **Backup Strategy** tab, and click the **circled number** between **SQL Server** and **Level-1 Backup**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4017204171/p713354.png)
    
4.  Set the following parameters, and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Backup Policy**
    
    Select the backup time and backup set retention period. You must set at least two backups per week.
    
    **Note**
    
    You can click the **Add Backup Policy** button to add a [sparse backup](/help/en/rds/apsaradb-rds-for-sql-server/sparse-backup) policy, allowing you to set backup policies more flexibly and retain the minimum number of backup sets.
    
    **Backup Time**
    
    Select the time when the data backup starts, for example, 07:00-08:00. We recommend setting this to off-peak hours.
    
    **Incremental Backup**
    
    Select whether to enable [incremental backup](#6dc8ae8016aru).
    
    **Note**
    
    When the **Backup Method** is **Snapshot Backup**, you cannot enable incremental backup.
    
    **Backup Method**
    
    ApsaraDB RDS for SQL Server supports the following two backup methods:
    
    -   **[Snapshot backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#task-2067291)**: A backup file of the data on a disk at a specific point in time. The backup process is fast.
        
    -   **Physical Backup**: The default backup method for an instance. The system creates a replica of the target data. The backup speed is slow.
        
    
    **Important**
    
    After you switch to **Snapshot Backup**, you can still select **Physical Backup** when [performing a manual backup](#section-yvd-yk4-ydb).
    
    **Backup Frequency**
    
    You can set the frequency of log backups. You can select **Same as Data Backup** or **Every 30 Minutes**.
    
    **Note**
    
    [The log backup retention period](#6dc8ae8016aru) is the same as the data backup retention period and cannot be set separately.
    
    **Log Backup Retention**
    
    Must be less than or equal to the data backup retention period. The range is 7 to 7300 days. The default is 7 days.
    
5.  In the lower-left corner of the **Backup Policy** page, click **Save**.
    

## Manual backup

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the upper-right corner of the page, click **Backup Instance**.
    
3.  Configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Backup Policy**
    
    -   **[Snapshot backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#task-2067291)**: A fast backup method that creates a point-in-time copy of the data on a disk. For more information, see .
        
    -   **Physical Backup**: This is the default backup method for an instance. The system creates a replica of the target data. The backup speed is slow.
        
    
    **Note**
    
    When the automatic backup policy is **Snapshot Backup**, this configuration item displays the **Snapshot Backup** option.
    
    **Select Backup Mode**
    
    -   **Full Backup**: Executes a full backup immediately.
        
    -   **Automatic Backup**: Starts a backup immediately. The system automatically determines whether to perform a full backup or a differential backup based on preset rules.
        
        Rule: If the instance has had a full backup in the last three days, this automatic backup will be a differential backup, which backs up all data that has changed since the last full backup. Otherwise, the system performs a full backup.
        
        **Note**
        
        If the instance edition is [Cluster Edition](/help/en/rds/apsaradb-rds-for-sql-server/rds-cluster-edition), the automatic backup policy is **Physical Backup**, and a **Preferred Secondary Database** is set, only **Full Backup** is supported.
        
    
    **Backup Policy**
    
    This option is available only when **Select Backup Mode** is set to **Full Backup**.
    
    -   **Instance Backup**: Backs up the entire instance.
        
    -   **Single-Database Backup**: This option is available only when the **Backup Policy** is set to **Physical Backup**. You can configure the retention period for backup sets and back up specified databases:
        
        -   **Backup Set Retention Period**: The supported retention period is 7 to 730 days. A value of -1 indicates long-term retention.
            
        -   **Database**: In the list on the left, select the databases that you want to back up and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0665191571/p982736.png) icon to add them to the list on the right. If you do not have a database, [create a database](/help/en/rds/apsaradb-rds-for-sql-server/create-a-database-on-an-apsaradb-rds-for-sql-server-instance#concept-cg3-ljq-wdb) first.
            
    
4.  After you configure a backup policy, a backup task is created. You can click the ![查看备份进度](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9334497861/p505712.png) icon in the upper-right corner of the page. On the **Tasks** page, set the **Task Type** parameter to **Manual Backup** and view the progress of the backup task. ![备份进程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9334497861/p615639.png)
    
    **Note**
    
    After the backup is complete, you can [download data backups and log backups](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance) by accessing **Backup and Restoration** > **Base Backups** > **Data Backup** (or **Log Backup**).
    

## **Related operations**

### **Extend the expiration time of a single-database backup set**

You can use the RDS console or call the [ModifyBackupSetExpireTime](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-modifybackupsetexpiretime-sqlserver) API to **extend** the expiration time of single-database backup sets (physical backups, full backups, and single-database backups) that are generated by [manual backups](#section-yvd-yk4-ydb). Shortening the expiration time is not currently supported.

**Note**

When you call the API to extend the expiration time of a backup set, you must pass a UTC time. The RDS console automatically converts this time to UTC+8 for display. Example:

-   If you pass the time `2025-07-15T12:10:23Z` through the API, the RDS console displays it as `20:10:23 on July 15, 2025`.
    
-   Conversely, to set a specific UTC+8 time as the expiration time, you must convert it to the corresponding UTC time before passing it to the API.
    

1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0665191571/p982745.png) in the **Actions** column of the target backup set, and select **Change Expiration Time**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0665191571/p982751.png)
    
2.  In the dialog box, set a new expiration time and click **OK**.
    
    After you save the change, you can view the updated expiration time in the **Expiration Time** column of the target backup set. The system retains the backup set until the new expiration time.
    

## References

-   You can [download to a local machine](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance) existing data or log backups for purposes such as data archiving.
    
-   You can use data backups and log backups to restore data to existing instances, new instances, or local databases. For more information, see [Overview of Restoration Scenarios](/help/en/doc-detail/444449.html).
    
-   This topic describes the default backup feature, which stores backup files in the same region as your instance. To back up data to other regions, see [Cross-region backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance).
    
-   You can also use APIs to manage RDS instance backup policies and perform other operations:
    
    -   [CreateBackup - Create a backup set for an RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-createbackup-sqlserver)
        
    -   [DescribeBackups - View the backup set list of an RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describebackups-sqlserver)
        
    -   [DescribeBackupPolicy - View the backup settings of an instance](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describebackuppolicy-sqlserver)
        
    -   [ModifyBackupPolicy - Modify the backup policy of an instance](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-modifybackuppolicy-sqlserver)
        
    -   [DescribeBackupTasks - Query the backup job list of an instance](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describebackuptasks-sqlserver)
        
    -   [DescribeLogBackupFiles - Query the log backup files of an instance](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describelogbackupfiles-sqlserver)
        

## FAQ

Can data backup and log backup be disabled?

No, they cannot. Data backup and log backup are enabled by default and cannot be disabled. However, you can reduce the backup frequency. Note that you must perform at least two backups per week.

**Note**

-   The log backup retention period is the same as the data backup retention period and cannot be set separately.
    

How can I delete or reduce data and log backups?

You cannot manually delete existing data and log backup sets. If you have too many backups and have exceeded your free backup quota, you can use the following solutions:

-   Reduce the total size of backup files
    
    You can reduce the number of backup sets by decreasing the backup frequency, or shorten the backup retention period to allow the system to automatically delete existing backups (**manual deletion of backup sets is not supported**). For more information, see [Back up SQL Server data](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#concept-l1m-xgn-ydb).
    
-   Increase the free backup quota
    
    The free quota is related to the storage space. [Expanding the storage space](/help/en/rds/apsaradb-rds-for-sql-server/change-the-specifications-of-an-apsaradb-rds-for-sql-server-instance#concept-efl-pln-wdb) can increase the free backup quota of the instance. For example, when the backup method is physical backup, if you expand the instance storage space from 150 GB to 300 GB, the free quota will increase from 75 GB to 150 GB.
    

Why does snapshot backup not support incremental backup?

Snapshot backup periodically backs up snapshots of data on a disk. The characteristics of snapshots allow for rapid data restoration to a specific point in time. However, because snapshots are based on the disk rather than backup files, incremental backup is not supported.

**Note**

Snapshots use an incremental snapshot chain mechanism. This mechanism retains the state of snapshots at every point in the past, so each snapshot backup backs up only new and updated data on the disk.

Why is incremental backup not supported after I select the secondary-database-first backup policy?

Because of the kernel characteristics of ApsaraDB RDS for SQL Server, the secondary database cannot clear the differential bitmap and therefore does not support incremental backup. For more information, see the [official documentation](https://learn.microsoft.com/en-us/sql/database-engine/availability-groups/windows/active-secondaries-backup-on-secondary-replicas-always-on-availability-groups?view=sql-server-ver16).

If incremental backup is enabled, will performing a manual full backup affect the existing automatic backup policy?

Yes, it will. If incremental backup is enabled, performing a manual full backup during the backup cycle resets the base for subsequent incremental backups. For example, assume a full backup is scheduled for Monday and an incremental backup for Tuesday. If you manually perform a full backup on Wednesday, the system performs incremental backups on Thursday and Friday based on the manual full backup from Wednesday.

What are the differences between [snapshot backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance) and physical backup?

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
