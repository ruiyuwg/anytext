Point-in-time protection for ApsaraDB RDS for MySQL guarantees that you can recover data to any point in time within a specified recovery window. To configure the guaranteed recovery window, turn on the **Point-in-time Recovery** switch on the backup policy page and set the log backup retention period. The system retains backup sets based on the association between full backups and log backups to make sure PITR is always available within the specified time range.

## How it works

Traditional backup retains backup sets based on the backup cycle. Even when backups complete on schedule, the actual recovery window is often shorter than the log retention period because it depends on the interval between full backups and the backup set retention period. If full backups fail or are delayed, the recovery window shrinks further.

Point-in-time protection takes a different approach: instead of organizing backups by cycle, it organizes them by recovery requirements. The system makes sure that a valid full backup and a continuous log backup chain always cover your specified recovery window. This guarantees that you can recover data to any point in time within that window.

![How point-in-time protection works](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6742085671/CAEQUBiBgMCgvoqI2RkiIDBjNWJkZGQ0N2QyYjQzYjk4Nzc0ZWE2YmMzZmM5ZGU04152092_20240105165951.594.svg)

## Point-in-time protection vs. traditional log backup

Point-in-time protection uses the same log generation and backup mechanism as log backup. The difference is how backup sets are expired and retained.

The following example compares the two approaches when three full backups run weekly (Monday, Wednesday, and Friday) and the **Log Backup Retention Period** is set to 7 days.

**Metric**

**Traditional log backup (7-day retention)**

**Point-in-time protection (7-day guaranteed window)**

Maximum recoverable days

Up to 7 days. In practice, the window is typically less than 7 days. A full 7-day window is only briefly available after a backup set expires and before the next scheduled cleanup.

Guaranteed 7 days

Recoverable days under normal conditions

Typically 4 to 5 days. The window depends on the interval between full backups and periodically shrinks to `retention period - full backup interval`.

Guaranteed 7 days

Recoverable days in extreme cases

Less than 3 days. Consecutive full backup failures (caused by database deadlocks or data anomalies) can reduce the window to 3 days or less. In the worst case, rollback becomes impossible.

Guaranteed 7 days

Backup storage cost

The system retains 7 days of backup data.

The system retains 7 to 9 days of backup data. The extra retention includes the latest full backup older than 7 days and the continuous log backups from that full backup to the 7-day mark. You are billed for only one full backup and a maximum of one additional week of log backups.

## Prerequisites

Before you begin, make sure that your ApsaraDB RDS for MySQL instance meets these requirements:

-   **Storage class**: High-performance local disk, standard SSD, premium performance disk, or enterprise SSD (ESSD). Serverless instances are also supported.
    
-   **Region**: Being rolled out to different regions. Check the ApsaraDB RDS console for availability in your region. For the rollout schedule, see [Point-in-time protection gradual upgrade starting from January 11, 2024](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-recovery-ability-gradually-upgrade-at-any-point-in-time-from-january-11-2024).
    

**Note**

View the storage class and region on the **Basic Information** page of your instance.

## Limitations

-   Point-in-time protection settings are available only on the regular backup policy page. The advanced backup policy page for sparse backups does not support this feature. For more information, see [Differences between backup policy pages](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#p-7rr-fdf-dtp).
    
-   For a Serverless instance, PITR is unavailable during the period from shutdown to startup and from startup until the first full backup completes.
    

## Billing

The backup billing logic remains unchanged. To guarantee PITR, the system retains some backup sets beyond the **Log Backup Retention Period** that you configure. These backup sets count toward [Total Backup Size](/help/en/rds/apsaradb-rds-for-mysql/view-and-manage-the-size-of-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-2045428). If the total backup size stays within the free quota, no backup charges apply. Any storage that exceeds the free quota is billed based on actual usage. For billing details, see [Backup guide](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance).

## Enable point-in-time recovery

**Note**

-   **Instances created on or after January 11, 2024**: Follow the steps below to set a point-in-time protection policy. After you turn on **Point-in-time Recovery**, new backup sets and existing unexpired backup sets are retained to satisfy the log backup retention period.
    
-   **Instances created before January 11, 2024**: Upgrade from traditional log backup to point-in-time protection through the dialog box on the **Backup Policy** page. This upgrade cannot be rolled back. For upgrade instructions, see [Upgrade to point-in-time protection](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-recovery-ability-gradually-upgrade-at-any-point-in-time-from-january-11-2024#7d9756d951y1b).
    

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region of your RDS instance. Find the instance and click its ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  Click the **Backup Strategy** tab. In the **Basic Backup** section, click **Edit**.
    
4.  Configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Log Backup**
    
    Enables point-in-time restore. This feature is enabled by default.
    
    **Point-in-time Restore**
    
    Enables point-in-time recovery (PITR) for your data.
    
    **Log Backup Retention Period (Days)**
    
    The number of days to retain log backups. Valid values: 7 to 730. Default: 7. The value must be less than or equal to the full backup retention period. For the MySQL 5.7 Basic series, retention is fixed at 7 days.
    

**Important**

If the **Point-in-time Recovery** switch does not appear on this page, join the Data Disaster Recovery Customer Service group (DingTalk group ID: 35585947) to request access.

After you turn on **Point-in-time Recovery**, all existing unexpired backup sets and all new backup sets are retained based on the **Log Backup Retention Period** that you specify.

## Verify the configuration

After you enable point-in-time protection, verify the settings:

1.  On the **Backup Strategy** tab, confirm that the **Point-in-time Restore** switch is turned on.
    
2.  Confirm that the **Log Backup Retention Period (Days)** value matches your intended recovery window.
    

## Disable point-in-time recovery

1.  On the **Backup Strategy** tab, click **Edit** in the **Basic Backup** section.
    
2.  Turn off the **Point-in-time Recovery** switch and click **OK**.
    

**Important**

Disabling the **Point-in-time Recovery** feature also disables the log backup capability, which makes point-in-time recovery unavailable. Proceed with caution.

![Disable point-in-time recovery](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8671876071/p760253.png)

## See also

-   [Data restoration solutions](/help/en/doc-detail/157519.html): Restore data to an existing instance, a new instance, or a local database using data backups and log backups.
    
-   [Download backups](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb): Download data or log backups for archiving. You can also upload backups to OSS.
