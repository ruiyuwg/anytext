Tair (Redis OSS-Compatible) uses RDB snapshots for data persistence. In-memory data is captured at specific points in time, compressed, and persisted to disk. The backup process does not affect data retrieval performance.

By default, each instance is configured to back up data automatically once a day. You can modify the automatic backup policy to suit your requirements, or create manual backups at any time. Backups are retained for 7 days by default. To keep backup data beyond this period, you can [download backup files](/help/en/redis/user-guide/download-a-backup-file) to your local machine.

## **Background information**

Tair (Redis OSS-compatible) instances use RDB snapshots for data persistence. In-memory data captured at specific points in time is persisted to files on disks. The backup process does not affect data retrieval performance.

By default, data is automatically backed up once a day for your instance. You can also manually create a backup at any time. Backup files can be retained only for seven days. To retain backup files for an extended period, you can download them to your computer. For more information, see [Download backup files](/help/en/redis/user-guide/download-a-backup-file#concept-2066205).

## Automatic vs. manual backups

The following table compares the two backup methods available for Tair (Redis OSS-Compatible) instances.

**Feature**

**Automatic backup**

**Manual backup**

**Trigger**

Runs on a schedule you define

Created on demand from the console or API

**Frequency**

One backup per day (configurable schedule)

Up to 30 per day per instance

**Retention**

7 days (fixed)

Standard, Independent (3--730 days), or Not expired

**Custom expiration**

Not configurable

Cloud-native instances only

**Deletion**

Automatically deleted after expiration

Can be deleted manually (cloud-native instances)

## Limits

-   Only one backup task can run at a time per instance. Wait for the current backup to complete before starting another.
    
-   By default, backups are created from the **replica**. If the [data flashback](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time) feature is enabled, backups are created from the **primary** instead.
    
-   Automatic backups are retained for 7 days and cannot be deleted manually. They are automatically removed when they expire.
    
-   You can create up to **30 manual backups per day** per instance. If you exceed this limit, the error `Exceeding the daily backup times of this DB instance.` is returned. The limit resets after 24 hours and does not affect automatic backups.
    
-   When an instance expires or is released, all backup data is deleted. To preserve your backups, [download backup files](/help/en/redis/user-guide/download-a-backup-file) in advance.
    

## Access the Backup and Recovery page

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  Click the instance ID to open the instance details page, and then click **Backup and Recovery** in the left-side navigation pane.
    

## Configure the automatic backup policy

1.  In the upper-right corner, click **Backup Settings**.
    
2.  In the panel that appears, configure the following parameters:
    
    -   **Retention Days**: Backup files are retained for 7 days.
        
    -   **Backup Cycle**: Select one or more days of the week on which to run backups. By default, one backup is created per day.
        
    -   **Backup Time**: Select a time window (in hours) during which the backup runs. We recommend that you schedule backups during off-peak hours to minimize any potential impact.
        
        **Note**
        
        The time displayed in the console is in the same time zone as your computer.
        
3.  Click **OK**.
    

## Create a manual backup

1.  In the upper-right corner, click **Create Backup**.
    
2.  In the dialog box that appears, configure **Backup Expiration Policy** and click **OK**.
    
    Only cloud-native instances support custom expiration policies for manual backups. Classic instances do not support this feature. The available options are:
    
    -   **Standard** (default): The backup follows the same retention rules as the current automatic backup policy.
        
    -   **Independent**: You set a specific retention period for the backup, ranging from 3 to 730 days.
        
    -   **Not expired**: The backup never expires and is retained for the lifetime of the instance. This is useful for periodic archival backups -- for example, backing up every Monday or at the start of each month.
        
    
    **Note**
    
    The expiration time of manual backup data can be extended after creation. You can call the [ModifyBackupExpireTime](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifybackupexpiretime-redis) API operation, or update the setting in the console.
    

## Delete a manual backup

For cloud-native instances, you can click the **Delete** button next to a manual backup to remove it. Automatic backups cannot be deleted manually -- they are automatically removed when they expire.

## FAQ

-   Q: How do I delete backup data?
    
    A: For cloud-native instances, you can directly click the **Delete** button next to the target manual backup data. However, automatic backup data cannot be deleted. Automatic backup data is automatically deleted after it expires.
    
-   **Does modifying the backup policy affect instance performance?**
    
    No. Changing the automatic backup policy does not affect the normal operation of your instance.
    
-   **Can I use the SAVE or BGSAVE command to back up data?**
    
    No. The `SAVE` and `BGSAVE` commands are not supported for creating backups on Tair (Redis OSS-Compatible) instances. To create a backup, click **Create Backup** in the console or call the [CreateBackup](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createbackup-redis) API operation.
    
-   **How do I run multiple backups per day?**
    
    The automatic backup policy supports a maximum of one backup per day. To run backups more frequently, call the [CreateBackup](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createbackup-redis) API operation at regular intervals to create manual backups programmatically. For example code, see the [CreateBackup API reference](https://next.api.alibabacloud.com/api/R-kvstore/2015-01-01/CreateBackup). Manual backups created through the API appear in the same backup list alongside automatic backups.
    
    **Note**
    
    For continuous data protection, consider the data flashback feature available on Tair (Enterprise Edition) instances. When enabled, data flashback provides 24/7 backup coverage and lets you restore data to any specific point in time within the previous seven days (point-in-time recovery, PITR). For more information, see [Data flashback](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time).
    
-   **What happens to backups when an instance expires or is released?**
    
    All backup data is deleted when the instance expires or is released. To preserve your data, [download backup files](/help/en/redis/user-guide/download-a-backup-file) before the instance is released.
    

## Related API operations

**API operation**

**Description**

[CreateBackup](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createbackup-redis)

Creates a backup for an instance.

[DescribeBackupPolicy](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describebackuppolicy-redis)

Queries the backup policy of an instance, including the backup cycle and backup time.

[ModifyBackupPolicy](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifybackuppolicy-redis)

Modifies the automatic backup policy of an instance.

[ModifyBackupExpireTime](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifybackupexpiretime-redis)

Extends the expiration time of manual backup data.

## References

-   [Restore data from a backup to a new instance](/help/en/redis/user-guide/restore-data-from-a-backup-set-to-a-new-instance#task-2489089)
    
-   [Download backup files](/help/en/redis/user-guide/download-a-backup-file#concept-2066205)
    
-   [Data flashback (point-in-time recovery)](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time)
