This topic describes how to back up an ApsaraDB RDS for PostgreSQL instance. ApsaraDB RDS for PostgreSQL supports automatic backups and manual backups. You can configure a backup policy that allows the system to automatically back up your RDS instance. You can also manually back up your RDS instance.

For more information about how to back up an RDS instance that runs a different database engine, see the following topics:

-   [Back up an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb)
    
-   [Back up an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#concept-l1m-xgn-ydb)
    
-   [Back up an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/back-up-an-apsaradb-rds-for-mariadb-instance#concept-l1m-xgn-ydb)
    

**Note**

The automatic backup feature that is provided by ApsaraDB RDS stores backup files in the same region as your RDS instance. If you want to store backup files to a region that is different from the region of your RDS instance, follow the instructions provided in [Use the cross-region backup feature](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2054022).

## Backup description

**Data backup**

**Log backup**

Data backups are copies of the data of your RDS instance. Physical backups and snapshot backups are supported. You can use these backups to restore the data of your RDS instance. For more information, see [Restore data of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance#concept-rxd-d5g-2fb). Your RDS instance automatically performs physical backups or snapshot backups based on the type of storage type that you use.

-   If your RDS instance is equipped with Premium Local SSDs, full physical backups are supported.
    
-   If your RDS instance is equipped with cloud disks, snapshot backups are supported. You can restore the data of your RDS instance from snapshot backup files to a new RDS instance.
    

**Note**

You can download full physical backup files and snapshot backup files. For more information, see [Download backup files](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb).

Log backups are copies of the archived log files of your RDS instance.

**Note**

If your RDS instance runs RDS Basic Edition, log backups are not supported.

## Prerequisites

If you use the backup features of RDS for the first time, use your Alibaba Cloud account to [authorize the service-linked role (AliyunServiceRoleForDBS)](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs).

## Usage notes

-   Do not execute DDL statements during a backup operation. If DDL statements are executed during a backup operation, the relevant tables are locked and the backup operation fails.
    
-   We recommend that you back up your RDS instance during off-peak hours.
    
-   If your RDS instance has a large amount of data, a backup may require a long period of time.
    
-   Backup files are retained for a specified period of time. Before the specified retention period elapses, we recommend that you download the backup files to your computer.
    

## Billing rules

Each RDS instance is allocated a free quota for backup storage. If the backup storage of your RDS instance does not exceed the free quota, you are not charged for backup storage. If the backup storage exceeds the free quota, you are charged for the excess storage that you use. For more information about the free quota and billing rules, see [Backup storage fees](/help/en/rds/apsaradb-rds-for-postgresql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-postgresql-instance#concept-ipg-lm4-ydb).

## Configure automatic backups

After you configure a backup policy for your RDS instance, the system regularly backs up the RDS instance based on the backup policy. In some regions, you can use the spare backup feature of RDS instances that use **cloud disks** by enabling the advanced backup settings on the Backup Strategy tab. **If you cannot find the entry point to enable the advanced backup settings on the Backup Strategy tab,** [**submit an application**](https://page.aliyun.com/form/act872942882/index.htm)**.** For more information, see [Switch to the advanced backup policy](/help/en/rds/apsaradb-rds-for-postgresql/sparse-backup-1#8b968ab0c1tul) and [Sparse backup](/help/en/rds/apsaradb-rds-for-postgresql/sparse-backup-1). After you enable the advanced backup settings, the entry point to configure backup policies and the method to configure some parameters are changed. You must configure the backup policies and parameters based on your business requirements.

## Regular backup (before the upgrade)

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, click the **Backup Strategy** tab. In the **Data Backup Settings** section, click **Edit**.
    
4.  In the dialog box that appears, configure the following parameters and click **Save**.
    
    Table 1. Data backup settings
    
    **Instance category**
    
    **Parameter**
    
    **Description**
    
    **RDS instances that use cloud disks**
    
    **Snapshot Backup Period**
    
    The cycle based on which you want to perform a backup. You can select one or more days of the week.
    
    **Note**
    
    For data security purposes, we recommend that you select at least two days of the week.
    
    **Single-digit Second Backup**
    
    Specifies whether to enable the single-digit second backup feature. If you enable this feature, the system completes each backup in 1 second.
    
    **Note**
    
    -   If you enable this feature, the system performs a single-digit second backup on the RDS instance based on the backup period and backup time that you specified.
        
    -   If you enable this feature, each manual backup is performed as a single-digit second backup. For more information, see [Manually back up an RDS instance](#section-yvd-yk4-ydb).
        
    
    **Snapshot Backup Start Time**
    
    Specifies the period of time during which a data backup operation is performed. For example, you can set this parameter to 06:00-07:00. We recommend that you select an off-peak hour.
    
    **Increase Snapshot Frequency**
    
    The frequency at which snapshot backups are created. This feature enables you to configure a shorter interval to create snapshots by using the single-digit second backup feature, which increases the frequency of the snapshots. You can increase the frequency to up to once every 15 minutes. For more information, see [Use the high-frequency snapshot backup feature](/help/en/rds/apsaradb-rds-for-postgresql/use-the-high-frequency-snapshot-backup-feature-for-an-apsaradb-rds-for-postgresql-instance).
    
    **Note**
    
    If you want to enable the Increase Snapshot Frequency feature, you must enable the **Single-digit Second Backup** feature. If the **Single-digit Second Backup** feature is disabled, the system automatically enables the **Single-digit Second Backup** feature when you enable the Increase Snapshot Frequency feature.
    
    **Snapshot Backup Retention (Days)**
    
    The number of days for which you want to retain data backup files. Valid values: 7 to 730. Default value: 7. Unit: days.
    
    **Note**
    
    This parameter takes effect only for data backup files that are generated from standard backups. This parameter does not take effect for data backup files that are generated from **single-digit second backups**.
    
    **Fast Restoration**
    
    Specifies whether to enable the fast restoration feature for individual databases and tables for your RDS instance. If you enable the feature, you can restore a specified database to the original RDS instance by backup set or point in time without the need to restore all data. This feature can be used in scenarios such as quick restoration after misoperations and historical data analysis. For more information, see [Restore individual databases and tables of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-postgresql-instance#main-2318078).
    
    **Note**
    
    The fast restoration feature for individual databases and tables is unavailable in some Alibaba Cloud regions.
    
    **RDS instance that uses Premium Local SSDs**
    
    **Data Backup Retention (Days)**
    
    The number of days for which you want to retain data backup files. Valid values: 7 to 730. Default value: 7. Unit: days.
    
    **Backup Cycle**
    
    The cycle based on which you want to perform a backup. You can select one or more days of the week.
    
    **Note**
    
    The cycle based on which you want to perform a backup. You can select one or more days of the week.
    
    **Backup Time**
    
    Specifies the period of time during which a data backup operation is performed. For example, you can set this parameter to 06:00-07:00. We recommend that you select an off-peak hour.
    
    Table 2. Log backup settings
    
    **Parameter**
    
    **Description**
    
    **Log Backup**
    
    Specifies whether to enable the log backup feature. After this feature is enabled, you can restore the data of your RDS instance to a specified point in time.
    
    **Important**
    
    If you disable this feature, all log backup files are deleted and you cannot restore the data of the RDS instance to a specified point in time.
    
    **Log Backup Retention Period**
    
    -   The log backup retention period. Default value: 7. Unit: days.
        
    -   The log backup retention period must be less than or equal to the data backup retention period. Valid values: 7 to 7300. Unit: days.
        
    

## Sparse backup (after the upgrade)

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, click the **Backup Strategy** tab and click the **circled number** between **PostgreSQL** and **level-1 Backup**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2177652171/p713525.png)
    
4.  Configure the following parameters and click **OK**.
    
    Table 3. Data backup settings
    
    **Instance category**
    
    **Parameter**
    
    **Description**
    
    **RDS instances that use cloud disks**
    
    **Backup Policy**
    
    The time range within which the backup is performed and the retention period of the backup sets. The backup must be performed at least twice a week.
    
    **Note**
    
    You can click **Add Backup Policy** to configure the sparse backup feature. This way, you can configure backup policies in a more flexible manner and retain the minimum number of backup sets. For more information, see [Sparse backup](/help/en/rds/apsaradb-rds-for-postgresql/sparse-backup-1).
    
    **Single-digit Second Backup**
    
    Specifies whether to enable the single-digit second backup feature. If you enable this feature, the system completes each backup in 1 second.
    
    **Note**
    
    -   If you enable this feature, the system performs a single-digit second backup on the RDS instance based on the backup period and backup time that you specified.
        
    -   If you enable this feature, each manual backup is performed as a single-digit second backup. For more information, see [Manually back up an RDS instance](#section-yvd-yk4-ydb).
        
    
    **Snapshot Backup Start Time**
    
    Specifies the period of time during which a data backup operation is performed. For example, you can set this parameter to 06:00-07:00. We recommend that you select an off-peak hour.
    
    Table 4. Log backup settings
    
    **Parameter**
    
    **Description**
    
    **Log Backup**
    
    Specifies whether to enable the log backup feature. After this feature is enabled, you can restore the data of your RDS instance to a specified point in time.
    
    **Important**
    
    If you disable this feature, all log backup files are deleted and you cannot restore the data of the RDS instance to a specified point in time.
    
    **Log Backup Retention Period**
    
    The log backup retention period. The log backup retention period must be less than or equal to the data backup retention period. Valid values: 7 to 7300. Unit: days. Default value: 7.
    
5.  Click **Save** in the lower-left corner of the **Backup Strategy** tab.
    

## Manually back up an RDS instance

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the upper-right corner of the page, click **Backup Instance**. In the dialog box that appears, click **OK**.
    
    ![物理备份](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9430359951/p40345.png)
    
3.  In the upper-right corner of the page, click **Task Center**. On the **Task Center** page, select **Manually Back Up Instance** for the **Task Type** filter and select **Pending Execution** and **In Progress** for **Status** to view the progress of the backup task.
    
    **Note**
    
    After the backup task is complete, you can download the backup file on the **Data Backup** or **Log Backup** tab under the **Base Backups** tab of the **Backup and Restoration** page. Some RDS instances do not support the download of backup files. These RDS instances include RDS instances that use cloud disks. For more information, see [Download backup files](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb).
    

## FAQ

1.  Can I disable the data backup feature for my RDS instance?
    
    No, you cannot disable the log backup feature for your RDS instance. You can reduce the backup frequency to at least twice a week.
    
2.  Can I disable the log backup feature for my RDS instance?
    
    Yes, you can disable the log backup feature for your RDS instance. To disable the feature, log on to the ApsaraDB RDS console, go to the Backup Settings tab of your RDS instance, and then modify the backup settings.
    

## Related operations

**Operation**

**Description**

[CreateBackup](/help/en/rds/api-create-a-backup-task#doc-api-Rds-CreateBackup)

Creates data backup files for an instance.

[DescribeBackups](/help/en/rds/api-query-data-backup-files#doc-api-Rds-DescribeBackups)

Queries the data backups of an instance.

[DescribeBackupPolicy](/help/en/rds/api-query-backup-settings#doc-api-Rds-DescribeBackupPolicy)

Queries the backup settings of an instance.

[ModifyBackupPolicy](/help/en/rds/api-modify-backup-settings#doc-api-Rds-ModifyBackupPolicy)

Modifies the backup settings of an instance.

[Delete data backup files](/help/en/rds/api-delete-backup-sets#doc-api-Rds-DeleteBackup)

Deletes the data backup files of an instance.

[DescribeBackupTasks](/help/en/rds/api-query-backup-tasks#doc-api-Rds-DescribeBackupTasks)

Queries the backup tasks of an instance.

[DescribeBinlogFiles](/help/en/rds/api-query-log-backup-files#doc-api-Rds-DescribeBinlogFiles)

Queries the binary log files of an instance.
