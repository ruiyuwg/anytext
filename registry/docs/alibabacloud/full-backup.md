This topic describes how to perform full backups for your database, both automatically and manually. It covers how to configure automatic backup policies and perform on-demand manual backups to meet your data protection and disaster recovery needs.

## **Scenarios**

-   **Automatic backup**: Use for daily data protection and disaster recovery. The system automatically performs full backups based on a preset policy. These backups, combined with log backups, provide the data foundation for point-in-time recovery (PITR). This minimizes data loss in the event of a failure.
    
-   **Manual backup**: Before you perform high-risk operations such as schema changes (DDL), application upgrades, or data migrations, you can create an on-demand data snapshot. This backup serves as a clear and reliable recovery point. If the changes cause issues, you can quickly roll back the data to its state before the operation. This ensures business stability and continuity.
    

## **Prerequisites**

The first time you use the RDS backup service, you must use your Alibaba Cloud account to authorize the [service-linked role for Data Backup Service (AliyunServiceRoleForDBS)](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs).

## **Billing**

If your backup usage is within the free quota, you are not charged for backups. If your usage exceeds the free quota, you are billed based on usage. For more information about the free quota and pricing, see [Backup storage costs](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance).

## **Notes**

-   **Enabled by default**: Data backup (full backup) is enabled by default and cannot be disabled. Backups are retained for at least 7 days and run at least twice a week.
    
-   **Minor engine version restrictions:** You cannot initiate backups for locked instances with the following minor engine versions:
    
    -   ApsaraDB RDS for MySQL 5.1 and 5.5: All minor versions.
        
    -   ApsaraDB RDS for MySQL 5.6, 5.7, and 8.0: Minor versions earlier than 20190815.
        
    
    **Note**
    
    -   To upgrade the major version or minor engine version of the instance, see [Upgrade database version](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance) or [Upgrade minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance).
        
    -   For more information, see [What to do when an instance's status is "Locking"](/help/en/rds/support/what-do-i-do-if-my-apsaradb-rds-instance-is-in-the-locking-state).
        
    
-   **Read-only instances:** You can only set a [local log retention policy](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance#section-w5j-ovn-ebb). You cannot set an automatic backup policy.
    
-   **DDL operations:** Do not perform DDL operations during a backup. This can cause table locks and result in backup failure.
    
-   **Avoid peak hours:** Perform backups during off-peak hours.
    
-   **Backup and recovery exceptions:** If the number of tables in a backup exceeds 50,000, you cannot use the **restoration for individual databases and tables** feature. The **database recovery** feature is not affected.
    
-   **Backup failure**: If the number of tables to be backed up exceeds 600,000, the backup fails.
    
-   **Backup policy modification:** Modifying the backup policy immediately triggers a full backup.
    

## **Perform a backup**

## Procedure for automatic backup

### **Step 1: Go to the configuration page**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the navigation pane on the left, click **Backup and Recovery**.
    
3.  Click the **Backup Policy** tab. The console displays either the standard backup policy page or the advanced backup policy page, depending on whether you have upgraded.
    

How to distinguish between standard and advanced backup policies

-   Standard backup policy page
    
    -   The page contains a **Basic Backup** section.
        
    -   When you click the **Edit** button, the parameters are displayed directly in a form.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5073550671/p1016092.png)
    
-   Advanced backup policy page
    
    -   The page has **MySQL** and **Level-1 Backup** tabs at the top.
        
    -   Click the circular icon with a number in the middle to open the parameter settings page.
        
    -   It supports advanced features such as [sparse backup](/help/en/rds/apsaradb-rds-for-mysql/sparse-backup-2).
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5073550671/p1005532.png)
    

**Note**

How to upgrade to the Premium Edition

If you are using the standard interface and want to use advanced features such as sparse backup, find the 'Upgrade to Advanced Version' link on the page. For instances in some regions, you can [upgrade the backup policy page to the advanced version](/help/en/rds/apsaradb-rds-for-mysql/sparse-backup-2#0b7c4450bewz8). After the upgrade, the way you access and configure backup policy parameters changes. You must configure the parameters as needed.

### **Step 2: Configure core parameters**

The core parameters retain their meaning even if the backup policy is upgraded.

**Data backup settings**

Data backup (full backup) is enabled by default and cannot be disabled. Backups are retained for at least 7 days and run at least twice a week.

**Parameter**

**Description**

Backup cycle

At least twice a week. For cloud disk instances with high-frequency snapshot backup enabled, you can set the frequency to as high as once every 15 minutes.

Backup retention period

Default: 7 days. Range:

-   Cloud disk instances: 7 to 730 days.
    
    **Note**
    
    -   For ApsaraDB RDS for MySQL 5.7 Basic Edition, the retention period is fixed at 7 days and cannot be changed.
        
    
-   Instances with Premium Local SSDs: 7 days or more.
    
    -   Backups retained for up to 730 days are standard backups.
        
    -   Data backups retained for more than 730 days are archive backups, which have lower [backup storage costs](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#concept-ipg-lm4-ydb).
        
    
    **Note**
    
    If you set the retention period to more than 730 days or select **Long-term Retention Before Instance Release**, you must also set the number of archive backups to retain. For example, retain the first two archive backups of each month.
    

Backup start time

Select an off-peak time to reduce the potential impact on your services.

Retain backup files after instance release

Select whether to retain backup files after the instance is released.

**Note**

We recommend that you select **Retain The Last Backup** or **Retain All Backups**. After the instance is released, you can download the backup for recovery on the [Deleted Instance Backups](https://rds.console.alibabacloud.com/backupManage/cn-hangzhou/delInsBack) page. For more information, see [long-term retention backup](/help/en/rds/apsaradb-rds-for-mysql/retain-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-for-a-long-period-of-time#section-pwm-nbk-ii5).

**Log backup settings**

Log backup (incremental backup) is used for point-in-time recovery (PITR).

**Parameter**

**Description**

**Log Backup**

Enables point-in-time restore. This feature is enabled by default.

**Point-in-time Recovery**

Enables point-in-time recovery (PITR) for your data.

**Log Backup Retention Period (Days)**

Set the log backup retention period.

-   The valid range is 7 to 730 days. The default value is 7 days.
    
-   The value must be less than or equal to the full backup retention period.
    

**Note**

For the 5.7 Basic series, the retention period is fixed at 7 days.

**Important**

To guarantee point-in-time recovery, the instance retains some backup sets beyond the log backup retention period that you set.

Example: If you set **Log Backup Retention Period** to 7 days, backup data is retained for 7 to 9 days. Specifically, the system retains the latest full backup that is older than seven days and all continuous log backups from that full backup to the seven-day mark. However, you are billed for only one full backup and a maximum of one additional week of log backups.

**Advanced features (optional)**

**Parameter**

**Applicable instances**

**Description**

Backup within seconds

Cloud disk instances (High-availability Edition/Cluster Edition)

When enabled, snapshot backups can be completed in seconds.

Increase snapshot frequency

Cloud disk instances (High-availability Edition/Cluster Edition)

Enable the [high-frequency snapshot backup](/help/en/rds/apsaradb-rds-for-mysql/use-the-high-frequency-snapshot-backup-feature-for-an-apsaradb-rds-for-mysql-instance) feature to reduce the snapshot interval and increase snapshot density. This lets you create backups as frequently as every 15 minutes.

**Note**

This feature must be enabled together with Backup within seconds. If you enable this feature while Backup within seconds is disabled, the system automatically enables Backup within seconds.

Restoration for individual databases and tables

All instances

When enabled, the generated backup files support restoring a single database or table without restoring the entire instance.

Fast restoration for individual databases and tables

Instances with Premium Local SSDs (in some regions)

Enabling [fast restoration for individual databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#section-8p8-fif-uyh) sets the restoration speed to Fast. Otherwise, the speed defaults to Regular.

-   **Standard**: The standard restoration speed for individual databases and tables.
    
-   **Fast**: Increases the restoration speed by about 50% to 95% compared to the standard speed.
    

**Note**

After you enable fast restoration for individual databases and tables, you must also select the **CDM Billing Method** and **CDM Retention Period**.

Backup encryption status

Instances with Premium Local SSDs (advanced backup policy)

Encrypts backup files to improve data security.

### **Step 3: Save and verify**

1.  Click **OK** or **Save**.
    
2.  The system immediately triggers a full backup based on the new policy.
    
3.  You can view the newly generated backup set on the **Data Backup** tab of the **Backup and Recovery** page. After the first backup is successful, the system automatically performs subsequent backups based on the new policy.
    

## Procedure for manual backup

## Perform a backup

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the upper-right corner of the page, click **Backup Instance**.
    
3.  In the **Backup Instance** dialog box, specify whether to back up all databases or specific databases and tables, and then click **OK**.
    
    **Note**
    
    For more information, see [Logical Backups, Physical Backups, and Snapshots](/help/en/dbs/product-overview/backup-modes#multiTask1034).
    
    [Instance storage class](/help/en/rds/product-overview/storage-types#concept-kpg-5wx-5db)
    
    **Back up all databases**
    
    **Back up specific databases and tables**
    
    Instances with Premium Local SSDs
    
    Two methods:
    
    -   **Physical Backup** (faster backup and recovery than logical backup)
        
    -   **Logical Backup** > **Instance Backup**
        
    
    **Logical Backup** > **Single-Database Backup**
    
    Cloud disk instances
    
    **Snapshot Backup**
    
    Not supported
    

## **View backup progress**

After you start a backup, the system generates a backup task. You can view the backup progress on the [Task Hub](https://rds.console.alibabacloud.com/jobCenter/cn-hangzhou) page by setting the **Task Type** filter to **Manual Instance Backup** and the status to **Pending** and **Running**.![备份进程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9334497861/p615639.png)

**Note**

-   The retention period of a manual backup set depends on the **Backup Policy**.
    
-   A backup set is displayed only after the backup is complete. You can download the backup file on the **Backup and Restoration** > **Basic Backup List** page. For more information, see [Download a backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb).
    

## Related operations

-   After a backup is complete, you can download the backup file from the **Backup and Recovery** > **Basic Backup List** page. For more information, see [Download backups](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb).
    
-   In addition to the RDS automatic backup feature, you can also use the logical backup feature of [Data Disaster Recovery](/help/en/dbs/product-overview/what-is-dbs) to [automatically back up RDS for MySQL or self-managed MySQL databases](/help/en/dbs/user-guide/back-up-apsaradb-rds-for-mysql-or-self-managed-mysql-instances-by-using-logical-backup#task-1964148). This feature supports cross-account backup, single-database or single-table backup, geo-redundancy, and storing backups in OSS. For more information about the differences between these features, see [Differences between RDS default backup and Data Disaster Recovery](/help/en/rds/apsaradb-rds-for-mysql/differences-between-default-rds-backups-and-data-disaster-recovery#concept-2085540).
    
-   In addition to the RDS automatic backup feature, RDS also lets you [manually back up](/help/en/rds/apsaradb-rds-for-mysql/manually-back-up-an-apsaradb-rds-for-mysql-instance) all databases or specific databases and tables.
    
-   You can [download backups](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb) to a local machine or upload them to OSS.
    
-   You can use [data restoration solutions](/help/en/doc-detail/157519.html) to restore data backups and log backups to an existing instance, a new instance, or a local database.
    
-   By default, backup files are stored in the same region as the instance. To back up data to another region, see [Cross-region backup](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443).
    
-   You can use APIs to manage RDS instance backup policies or configure Data Disaster Recovery backup plans, as follows:
    
    **Category**
    
    **API**
    
    **Description**
    
    RDS default backup
    
    [ModifyBackupPolicy](/help/en/rds/api-modify-backup-settings#doc-api-Rds-ModifyBackupPolicy)
    
    Modifies the backup settings of an RDS instance.
    
    [DescribeBackupPolicy](/help/en/rds/api-query-backup-settings#doc-api-Rds-DescribeBackupPolicy)
    
    Queries the backup settings of an instance.
    
    [DescribeBackups](/help/en/rds/api-query-data-backup-files#doc-api-Rds-DescribeBackups)
    
    Views the list of backup sets.
    
    [DescribeBackupTasks](/help/en/rds/api-query-backup-tasks#doc-api-Rds-DescribeBackupTasks)
    
    Queries the list of backup jobs for an instance.
    
    Data Disaster Recovery backup
    
    [CreateBackupPlan](/help/en/dms/developer-reference/api-dbs-2019-03-06-createbackupplan#main-107864)
    
    Creates a backup plan.
    
    [ConfigureBackupPlan](/help/en/dms/developer-reference/api-dbs-2019-03-06-configurebackupplan#main-107864)
    
    Configures a backup plan.
    

## **Backup FAQ**

-   **Q: Do backups affect instance performance?**
    
    **RDS edition**
    
    **Impact**
    
    [RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-high-availability-edition#concept-1443745), [Cluster Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-cluster-edition#concept-vcs-h1c-5fb), or [RDS Enterprise Edition](/help/en/rds/rds-enterprise-edition#concept-yqy-zvw-5db)
    
    Backup operations are performed on the secondary RDS instance. In this case, the operations do not occupy the CPU resources or affect the performance of the primary RDS instance.
    
    **Note**
    
    In rare cases when the secondary instance is unavailable, backups are performed on the primary instance.
    
    [Basic Edition](/help/en/rds/apsaradb-rds-for-mysql/rds-basic-edition#concept-nyq-cvw-5db)
    
    If an RDS instance runs RDS Basic Edition, the instance stands alone. All backup operations are performed on the RDS instance. In this case, the performance of the RDS instance decreases during a backup.
    
-   **Q: Can I disable data backups or log backups?**
    
    A: Data backups cannot be disabled. However, you can reduce the backup frequency to a minimum of twice per week and set the retention period to at least 7 days. Log backups can be disabled. On the **Backup Strategy** page, you can disable log backups by turning off the corresponding switch. For more information, see the [Delete or reduce backups](/help/en/rds/apsaradb-rds-for-mysql/delete-the-backup-files-or-reduce-the-size-of-backup-files-of-an-apsaradb-rds-for-mysql-instance#DAS) tutorial to reduce RDS for MySQL backups.
    
-   **Q: Are automatic backups still performed for a pay-as-you-go instance with an overdue payment?**
    
    A: Within the negative balance threshold (that is, within 7 days of the payment becoming overdue), the automatic backup feature continues to run. After the 7-day threshold is exceeded, Alibaba Cloud suspends the service for the instance and stops billing. The automatic backup feature is also suspended. For more information, see [Overdue payments](/help/en/rds/apsaradb-rds-for-mysql/overdue-payments).
    
-   **Q: Why do backup jobs sometimes fail?**
    
    A: If DDL or update statements with long execution durations run during the backup procedure, tables can become locked. This can cause the backup to fail.
    
-   **Q: Why is the size of my snapshot backup significantly larger than my data volume?**
    
    A: The size of a backup file is not always the same as the data volume. Cloud disk instances use snapshot backups, and **the size of a single snapshot backup file can be much larger than the actual data size**. The free quota for backups of a cloud disk instance is 200% of the instance's storage capacity. The free quota for backups of an instance with Premium Local SSDs is 50% of the instance's storage capacity.
    
    **Note**
    
    When the size of a single snapshot backup file is calculated, the size of all non-empty blocks is included. If data is written in a scattered way (for example, 3 MB of data might occupy two, three, or even four blocks), more non-empty blocks are created, which increases the size of the snapshot backup.
    
    Therefore, the total size of all backup sets displayed on the **Backup and Restoration** page in the console may not match the displayed backup usage.
    

-   **Q: Do database backup files use the disk space of my instance?**
    
    A: Data backups and log backups are stored in backup storage provided by Alibaba Cloud. **They do not use the storage space of your instance**.
    
    **Note**
    
    -   Backup storage cannot be accessed externally. To download a backup, see [Download a backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb).
        
    -   Backup storage comes with a free quota. You are charged for usage that exceeds the free quota. For more information, see [Backup storage costs](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#concept-ipg-lm4-ydb).
        
    

## **Other engines**

-   [Back up SQL Server data](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#concept-l1m-xgn-ydb)
    
-   [Back up PostgreSQL data](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#concept-l1m-xgn-ydb)
    
-   [Back up MariaDB data](/help/en/rds/apsaradb-rds-for-mariadb/back-up-an-apsaradb-rds-for-mariadb-instance#concept-l1m-xgn-ydb)
