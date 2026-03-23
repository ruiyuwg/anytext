PolarDB for MySQL automatically enables both data backup and log backup for every cluster. These backups cannot be disabled. However, you can adjust the backup policy for a cluster to match your business requirements while maintaining data reliability.

PolarDB uses a tiered backup architecture:

-   **Level-1 backups** are stored locally and provide fast data restoration. All storage classes support level-1 backups.
    
-   **Level-2 backups** are stored remotely for long-term retention and disaster recovery. Only PSL4/PSL5 storage classes support level-2 backups.
    

Depending on your needs, you can customize the backup policy in the following ways:

-   Change the level-1 backup method from **Standard Backup** to **High-frequency Backup**. This shortens the backup interval, increases backup frequency, and improves data restoration speed.
    
-   Enable **Cross-region Backup** for level-2 backups to minimize data loss caused by natural disasters or hardware failures. Cross-region backup provides high availability for data restoration and meets requirements for data reliability, security, geo-redundant recovery, disaster recovery, long-term data archiving, and regulatory compliance.
    

**Note**

Only PolarDB for MySQL Enterprise Edition supports cross-region backup.

## Procedure

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). Select the region where the cluster is located. On the **Clusters** page, click the ID of the target cluster. In the navigation pane on the left, choose **Settings and Management** > **Backup and Restoration**.
    
2.  On the **Backup Policy Settings** page, click **Modify** to configure the parameters. The available parameters vary based on the storage class, as described in the following sections.
    

**Note**

For more information about the backup policy parameters, see [Data backup policy](#dc93ec7b57qt5), [Log backup policy](#title-1we-04j-pun), and [General backup policy](#title-rvc-zg3-j9b).

### PSL4/PSL5

Data backups are categorized as level-1 or level-2 backups depending on their storage location. You can configure the **Level-1 Backup**, **Level-2 Backup**, **Log Backup**, and **General** parameters.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0649042471/p930513.png)

### ESSD (PL0, PL1, PL2, PL3, and AutoPL)

Data backups can be saved only locally. They are also called level-1 backups. You can configure the **Level-1 Backup**, **Log Backup**, and **General** parameters.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0649042471/p930541.png)

## Backup policy parameters

### Quick reference

The following table summarizes the key defaults and ranges for backup policy parameters.

**Parameter**

**Default**

**Range**

**Applies to**

**Backup Method** (Level-1)

**Standard Backup**

**Standard Backup** or **High-frequency Backup**

All storage classes

**Backup Cycle** (Standard)

Once a day (PSL4/PSL5); Mon-Fri (ESSD)

Any days, minimum twice a week

All storage classes

**Backup Frequency** (High-frequency)

\--

Every 2, 3, or 4 hours

All storage classes

**Backup Retention Period** (Level-1)

7 days

3--14 days

All storage classes

**Backup Switch** (Level-2)

Disabled

Enabled / Disabled

PSL4/PSL5 only

**Same-region Backup Retention** (Level-2)

\--

30--7,300 days or long-term

PSL4/PSL5 only

**Cross-region Backup Retention** (Level-2)

\--

30--7,300 days or long-term

PSL4/PSL5 only

**Log Backup Retention** (Same-region)

\--

3--7,300 days or long-term

All storage classes

**Log Backup Retention** (Cross-region)

\--

3--7,300 days or long-term

PSL4/PSL5 only

### Data backup policy

#### Level-1 backup

Level-1 backup parameters are the same for all storage classes, except where noted.

**Parameter**

**Description**

**Backup Method**

The frequency of automatic backups. You can select **Standard Backup** or **High-frequency Backup**. See the descriptions below.

**Backup Cycle**

The days of the week to perform automatic data backups. This parameter is required only if you select **Standard Backup (at specified intervals)**.

**Backup Start Time**

The time of day to start automatic data backups. This parameter is required only if you select **Standard Backup (at specified intervals)**.

**Backup Frequency**

The interval for automatic data backups. This parameter is required only if you select **High-frequency Backup**. Options: Every 2 hours in the last 24 hours, Every 3 hours in the last 24 hours, Every 4 hours in the last 24 hours.

**Backup Retention Period**

The number of days to retain backups. Default: 7 days. Range: 3 to 14 days.

**Standard Backup (at specified intervals)**

-   Default setting:
    
    -   PSL4/PSL5: An automatic backup is performed once a day.
        
    -   ESSD: An automatic backup is performed once a day from Monday to Friday.
        
-   Custom options:
    
    -   **Backup Cycle**: You can specify the days of the week to perform backups.
        
    -   **Backup Start Time**: You can specify the time of day to perform backups.
        
-   Security limit: To ensure data security, set the standard backup frequency to at least twice a week.
    

**High-frequency Backup**

-   Provides enhanced protection by shortening the backup interval, increasing backup frequency, and improving data restoration speed.
    
-   You can choose to perform a backup every 2, 3, or 4 hours within the last 24 hours.
    
-   Backup retention rules:
    
    -   Last 24 hours: All backup files completed within this period are retained.
        
    -   Older than 24 hours: The system retains only the first backup file completed after 00:00 each day. Other backups are automatically deleted.
        

##### High-frequency backup example

Suppose you enable **High-frequency Backup** with the **Create A Backup Every 4 Hours** option at 08:00 on March 1. The system automatically creates the first backup within 4 hours (from 08:00 to 12:00 on March 1) and continues to create a backup every 4 hours after that.

**Note**

After you enable the **High-frequency Backup** feature, all backups completed within the last 24 hours are retained. For backups older than 24 hours, the system retains only the first backup completed after 00:00 each day. Other backups are deleted.

**Snapshot at 16:00 on March 4**

**Date**

**Retained backups**

**Reason**

March 4 (16:00--)

\--

Future; no backups yet

March 3, 16:00 -- March 4, 16:00

All backups in this window

Within the last 24 hours

March 3

First backup completed after 00:00 (00:00--04:00)

Older than 24 hours; daily retention rule

March 2

First backup completed after 00:00 (00:00--04:00)

Older than 24 hours; daily retention rule

March 1

First backup completed (08:00--12:00)

First day; this is the earliest available backup

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3055640471/p919389.png)

**Snapshot at 20:00 on March 4** (four hours later)

**Date**

**Retained backups**

**Reason**

March 4 (20:00--)

\--

Future; no backups yet

March 3, 20:00 -- March 4, 20:00

All backups in this window

Within the last 24 hours

March 3

First backup completed after 00:00 (00:00--04:00)

Older than 24 hours; daily retention rule

March 2

First backup completed after 00:00 (00:00--04:00)

Older than 24 hours; daily retention rule

March 1

First backup completed (08:00--12:00)

First day; this is the earliest available backup

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3055640471/p919389.png)

#### Level-2 backup (PSL4/PSL5 only)

**Parameter**

**Description**

**Backup Switch**

Enable or disable level-2 backup. Level-2 backup is disabled by default.

**Backup Method**

You can select **Same-region Backup** or **Cross-region Backup**. After you enable level-2 backup, same-region backup is enabled by default.

**Backup Cycle**

The backup cycle for level-2 backups. You can select only the dates that correspond to level-1 backups.

**Same-region Backup Retention**

The retention period for same-region backups. Range: 30 to 7,300 days, or select **Long-term Retain Backups before Cluster Deletion**.

**Cross-region Backup Region**

The region where cross-region backups are stored.

**Cross-region Backup Retention**

The retention period for cross-region backups. Range: 30 to 7,300 days, or select **Long-term Retain Backups before Cluster Deletion**.

**Note**

-   Enabling level-2 backup incurs additional [fees](/help/en/polardb/polardb-for-mysql/backup-storage-beyond-free-quota#921c96033b7e0). You cannot manually delete level-2 backups. You can adjust the retention period of level-2 backups to automatically delete them.
    
-   If you enable both same-region backup and cross-region backup, two copies of backup data are created.
    
-   If you cannot select cross-region backup, see [Regions that support cross-region backup](/help/en/polardb/polardb-for-mysql/user-guide/backup-and-restoration/#li-cm5-sy0-7gu).
    
-   Low-frequency level-2 backup: The backup cycle for level-2 backups is set to a lower frequency than that for level-1 backups. For example, if the level-1 backup cycle is five days a week and the level-2 backup cycle is three days a week, this is a low-frequency level-2 backup.
    
-   Low-frequency replication rule: After you enable low-frequency level-2 backup, if you select a specific day for the backup cycle, the earliest backup set of that day is replicated to level-2 storage.
    
-   After you enable low-frequency level-2 backup, subsequent backup sets can be replicated only if they meet the low-frequency replication rule.
    
-   If you select **Long-term Retain Backups before Cluster Deletion**, you cannot set a retention period in days.
    

### Log backup policy

Log backups are created by saving every database redo log file offline. The available log backup parameters vary based on the storage class.

#### PSL4/PSL5

**Parameter**

**Description**

**Backup Method**

You can select **Same-region Backup** or **Cross-region Backup**.

**Same-region Backup Retention**

The retention period for same-region log backups. Range: 3 to 7,300 days, or select **Long-term Retain Backups before Cluster Deletion**.

**Cross-region Backup Region**

This is the same as the cross-region backup region for level-2 backups. You do not need to select a region.

**Cross-region Backup Retention**

The retention period for cross-region log backups. Range: 3 to 7,300 days, or select **Long-term Retain Backups before Cluster Deletion**.

**Note**

-   Same-region log backup is enabled by default and cannot be disabled.
    
-   You can select cross-region backup for log backups only if cross-region backup is enabled for level-2 backups.
    
-   Same-region and cross-region log backups cannot be deleted within their retention period.
    
-   If you select **Long-term Retain Backups before Cluster Deletion**, you cannot set a retention period in days. Currently, only Enterprise Edition clusters support this option.
    

#### ESSD (PL0, PL1, PL2, PL3, and AutoPL)

**Parameter**

**Description**

**Log Backup Retention**

The retention period for log backups. Range: 3 to 7,300 days, or select **Long-term Retain Backups before Cluster Deletion**.

**Note**

-   Log backups cannot be deleted within their retention period.
    
-   If you select **Long-term Retain Backups before Cluster Deletion**, you cannot set a retention period in days. Currently, only Enterprise Edition clusters support this option.
    

### General backup policy

The general backup policy defines how backup files are handled when a cluster is released.

**Parameter**

**Description**

**When Cluster Is Deleted**

The backup retention policy for when a cluster is deleted. Options: **Retain all backups**, **Retain only the final backup**, **Delete all backups**.

The following table describes each option.

**Option**

**Behavior**

**Retain all backups**

Retains all backups of the cluster when it is released. The system performs a full backup before the cluster is released to save all data.

**Retain only the final backup**

Performs a full backup before the cluster is released and retains only this backup.

**Delete all backups**

Immediately deletes all backups and logs after the cluster is released. This action cannot be undone.

**Note**

-   If cross-region backup is configured and you select the **Delete all backups** policy, all cross-region backup sets and logs are deleted when the cluster is released. This action cannot be undone. If you select another policy, the configured expiration policy is executed.
    
-   After a cluster is released, level-1 backups are automatically converted to level-2 backups. You can view all saved backups in the [cluster recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/cluster-recycle-bin/).
    
-   After a cluster is released, the free quota is no longer available. You may be charged a small fee for retained backups. You can [delete the backups of the released cluster](/help/en/polardb/polardb-for-mysql/user-guide/delete-a-released-cluster) at any time to save costs.
    

## Related API operations

**API**

**Description**

[DescribeBackupPolicy](/help/en/polardb/polardb-for-mysql/api-describebackuppolicy#doc-api-polardb-DescribeBackupPolicy)

Queries the data backup retention policy of a PolarDB cluster.

[ModifyBackupPolicy](/help/en/polardb/polardb-for-mysql/api-modifybackuppolicy#doc-api-polardb-ModifyBackupPolicy)

Modifies the data backup retention policy of a PolarDB cluster.

[DescribeLogBackupPolicy](/help/en/polardb/api-polardb-2017-08-01-describelogbackuppolicy)

Queries the log backup retention policy of a PolarDB cluster.

[ModifyLogBackupPolicy](/help/en/polardb/api-polardb-2017-08-01-modifylogbackuppolicy)

Modifies the log backup retention policy of a PolarDB cluster.
