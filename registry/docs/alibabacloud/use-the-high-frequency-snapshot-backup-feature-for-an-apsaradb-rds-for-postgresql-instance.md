High-frequency snapshot backup takes snapshots as often as every 15 minutes, reducing your recovery point objective (RPO) from the default once-daily schedule. Use this feature to protect workloads where data changes frequently, consistency matters, and downtime must be minimized.

## Supported instances

**Requirement**

**Details**

Storage type

Enterprise SSDs (ESSDs) or Premium ESSDs

Instance type

Serverless RDS instances are not supported

Service-linked role

If this is your first time using the backup feature of ApsaraDB RDS, create the [AliyunServiceRoleForDBS service-linked role](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs) with your Alibaba Cloud account

**Note**

You can change the storage type from standard SSD to ESSD. For more information, see [Upgrade the storage type from standard SSDs to ESSDs](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance).

## Enable high-frequency snapshot backup

1.  On the details page of your RDS instance, choose **Backup and Restoration** in the left-side navigation pane.
    
2.  On the **Backup Strategy** tab, locate the **Data Backup Settings** section and click **Edit**.
    
3.  Set the snapshot backup frequency to a value between 15 minutes and 12 hours.
    

**Note**

The **Single-digit Second Backup** feature must be enabled before high-frequency snapshot backup. If it is disabled, the system enables it automatically when you enable high-frequency snapshot backup.

For details on other backup parameters, see [Back up an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#concept-l1m-xgn-ydb).

After high-frequency snapshot backup files are generated, they can be used to restore your RDS instance. The files are also automatically uploaded to an Object Storage Service (OSS) bucket. To check the upload progress, go to [Task Center](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2) and filter tasks by the **Back Up Snapshot to OSS** type.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5123033961/p706012.png)

## Snapshot retention policies

Without high-frequency snapshot backup, snapshots are taken once a day. When you enable the feature, the retention policy depends on the frequency tier you select.

### Minute-level frequency (15 minutes to less than 1 hour)

Snapshots are thinned over time to balance recovery granularity and storage use:

**Age of snapshot**

**Retention rule**

Within 1 hour

All snapshots retained

1 to 24 hours

Only the first snapshot completed after each hour is retained

24 hours to 7 days

Only the first snapshot completed after 00:00 each day is retained

**Example -- 15-minute frequency:** 33 snapshots are retained in a week. Four snapshots are generated within 1 hour and all are retained. For snapshots 1 to 24 hours old, 23 snapshots are retained (one per hour). For snapshots 24 hours to 7 days old, 6 snapshots are retained (one per day).

### Hour-level frequency (1 hour to 12 hours)

**Age of snapshot**

**Retention rule**

Within 24 hours

All snapshots retained

Older than 24 hours

Only the first snapshot completed after 00:00 each day is retained

**Example -- 6-hour frequency:** 10 snapshots are retained in a week. Four snapshots are generated within 24 hours and all are retained. For snapshots 24 hours to 7 days old, 6 snapshots are retained (one per day).

**Note**

For more information, see [Retention policies for snapshots generated for backup](/help/en/rds/apsaradb-rds-for-mysql/retention-policies-for-snapshots-generated-for-backup#task-2201869).

## Storage redundancy

Before high-frequency snapshot backup files are uploaded to OSS, locally redundant storage (LRS) is used.

After the files are uploaded to OSS, the storage redundancy depends on the region:

-   If the region supports [ZRS buckets](/help/en/oss/user-guide/zrs), zone-redundant storage (ZRS) is used automatically.
    
-   If the region does not support ZRS buckets, LRS is used.
    

## Billing

Backup storage within the free quota incurs no charges. When the total size of backup files exceeds the free quota, fees apply for the excess backup storage. For details, see [Backup storage fees](/help/en/rds/apsaradb-rds-for-postgresql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-postgresql-instance#concept-ipg-lm4-ydb).

## References

-   To configure the snapshot backup frequency through the API, use the [ModifyBackupPolicy](/help/en/rds/developer-reference/api-rds-2014-08-15-modifybackuppolicy#doc-api-Rds-ModifyBackupPolicy) operation. Set the `BackupInterval` parameter to the desired frequency.
    
-   [Backup features of an ApsaraDB RDS for PostgreSQL instance](/help/en/doc-detail/444451.html)
    
-   [Overview of data restoration methods](/help/en/doc-detail/444453.html)
