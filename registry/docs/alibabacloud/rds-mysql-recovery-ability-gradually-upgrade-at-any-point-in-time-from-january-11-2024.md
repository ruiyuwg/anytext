Starting January 11, 2024, the log backup feature of ApsaraDB RDS for MySQL is upgraded to the point-in-time recovery (PITR) feature in phases. The PITR feature allows you to restore the data of your ApsaraDB RDS for MySQL instance to any point in time that you specify. After the upgrade, you do not need to consider the consistency of the retention periods of full and log backup files. You need to only configure the **Time Range of Specific Points in Time for Restoration** parameter, and the system implements PITR based on the correlation between the full and log backup files.

## **Effective date and supported regions**

**Note**

-   The PITR feature will be rolled out for new and existing RDS instances in other regions **in phases**. The information in the ApsaraDB RDS console shall prevail.
    
-   If you enable the PITR feature for a **newly created RDS instance**, the feature takes effect several hours later.
    

**Date**

**Involved RDS instance**

**Supported region**

Rollout in phases from January 11, 2024

RDS instances that use local disks

China (Hohhot), China (Chengdu), China (Zhangjiakou), Singapore, Japan (Tokyo), South Korea (Seoul), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), India (Mumbai) Closing Down, Germany (Frankfurt), and UK (London).

Rollout in phases from February 15, 2024

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Shenzhen), China (Ulanqab), China (Heyuan), and China (Guangzhou)

Rollout in phases from January 30, 2024

RDS instances that use cloud disks and serverless RDS instances

China (Hohhot), China (Chengdu), China (Zhangjiakou), Singapore, Japan (Tokyo), South Korea (Seoul), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), Thailand (Bangkok), Germany (Frankfurt), and UK (London)

Rollout in phases from February 15, 2024

China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Shenzhen), China (Ulanqab), China (Heyuan), and China (Guangzhou)

## **Upgrade impacts**

**Note**

-   After you upgrade the log backup feature to the PITR feature for your RDS instance, the backup retention policy is also upgraded. The system retains the backup sets that are generated based on the value of the **Log Backup Retention Period (Days)** parameter.
    
-   Before the upgrade, you can restore the data of an existing RDS instance only to a point in time after the first full backup that is performed within the log backup retention period. After the upgrade, you can restore the data to any point in time based on the value of the **Time Range of Specific Points in Time for Restoration** parameter.
    

**Storage type**

**Impact scope**

**Description**

Local disk

New RDS instances

By default, the PITR feature is supported for RDS instances that are created on or after January 11, 2024. You can disable the **PITR** feature based on your business requirements. After you disable the PITR feature, the log backup feature is no longer supported, and you cannot restore data to any point in time.

Existing RDS instances

You can upgrade the log backup feature to the PITR feature for RDS instances that are created before January 11, 2024. You cannot roll back the upgrade.

You can disable the **PITR** feature based on your business requirements. After you disable the PITR feature, the log backup feature is no longer supported, and you cannot restore data to any point in time. For more information, see [Upgrade to the PITR feature](#7d9756d951y1b).

Cloud disk

New RDS instances

By default, the PITR feature is supported for RDS instances that are created on or after January 30, 2024. You can disable the **PITR** feature based on your business requirements. After you disable the PITR feature, the log backup feature is no longer supported, and you cannot restore data to any point in time.

Existing RDS instances

You can upgrade the log backup feature to the PITR feature for RDS instances that are created before January 30, 2024. You cannot roll back the upgrade.

You can disable the **PITR** feature based on your business requirements. After you disable the PITR feature, the log backup feature is no longer supported, and you cannot restore data to any point in time. For more information, see [Upgrade to the PITR feature](#7d9756d951y1b).

## **Billing rules**

The billing rules remain unchanged. To implement PITR, the system retains additional backup sets based on the value of the **Time Range of Specific Points in Time for Restoration** parameter. You are also charged for the storage of the additional backup sets. For more information, see [View and manage the size of backup files](/help/en/rds/apsaradb-rds-for-mysql/view-and-manage-the-size-of-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-2045428). A free quota on storage is provided to store backup files. If the total size of the backup files of your RDS instance does not exceed the free quota, you are not charged. If the total size exceeds the free quota, you are charged for the excess storage. For more information, see [Backup fees](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance).

## **Upgrade to the PITR feature**

To upgrade the log backup feature to the PITR feature for existing RDS instances, you can perform the following operations. For more information, see [Differences between the PITR and log backup features](/help/en/rds/apsaradb-rds-for-mysql/any-point-in-time-recovery-protection#5c96c2b90fur0).

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, click the **Backup Strategy** tab. In the **Basic Backup** section, click **Edit**.
    
4.  In the dialog box that appears, read the description and click **Enable**.
    
5.  In the dialog box that appears, read the related notes, select **Known**, and then click **I Understand and Upgrade to PITR**.
    

## **References**

-   Modify the PITR policy such as the Time Range of Specific Points in Time for Restoration parameter or disable the PITR feature. For more information, see [Configure the PITR feature](/help/en/rds/apsaradb-rds-for-mysql/any-point-in-time-recovery-protection).
    
-   Use data backups and log backups to restore data to an existing RDS instance, a new RDS instance, or a self-managed MySQL instance. For more information, see [Overview of data restoration methods](/help/en/doc-detail/157519.html).
    
-   Download existing data backups or log backups to your on-premises device for archiving, or download backup files and upload the backup files to Object Storage Service (OSS) buckets. For more information, see [Download backup files](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb).
