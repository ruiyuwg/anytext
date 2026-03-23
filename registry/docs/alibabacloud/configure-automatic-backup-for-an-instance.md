ApsaraDB for MongoDB automatically backs up your instance data according to a customizable backup policy. This topic explains how to configure automatic backups, including backup methods, scheduling, retention periods, and cost optimization.

## Prerequisites

You have created a MongoDB instance (standalone, replica set, or sharded cluster).

## Usage notes

**Version and instance requirements**

-   For instances running MongoDB versions earlier than 4.0, **High-frequency Backup** may fail if your instance has more than 10,000 collections and indexes combined. We recommend upgrading to MongoDB 4.0 or later before enabling this feature. For more information, see [Upgrade the major database version](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance#concept-ut5-fp4-fgb).
    
    **Important**
    
    Backup files created before upgrading to MongoDB 4.0 cannot be used to restore or clone instances after the upgrade.
    
-   The instant backup feature (Backup Within Seconds) is available only for replica set instances running MongoDB 4.4 or later.
    
-   Log backup (required for point-in-time recovery) is supported only for replica set and sharded cluster instances.
    
    **Note**
    
    For sharded cluster instances, log backup is always enabled and cannot be disabled. Disabling log backup on replica sets prevents point-in-time recovery.
    

**Configuration constraints**

-   Log backup retention period cannot exceed the full backup retention period.
    

**Critical warnings**

-   Disabling log backup permanently deletes all existing log backup files. This action cannot be undone.
    

## Backup methods

ApsaraDB for MongoDB offers two backup methods optimized for different instance types. All backup files are stored in Object Storage Service (OSS) for durability and are separate from your instance storage.

The backup method available depends on your instance architecture and disk type:

**Architecture**

**Backup method**

**Description**

-   Standalone instances
    
-   Replica set instances that use cloud disks
    
-   Sharded cluster instance that uses cloud disks
    

**Snapshot Backup**

Uses disk snapshots to capture your database state at a specific point in time. Restoration from snapshot backup typically completes within minutes.

**Note**

Note: Standard Backup temporarily consumes instance I/O resources during the backup process.

-   Replica set instances that use local disks
    
-   Sharded cluster instances that use local disks
    

**Physical Backup**

Creates physical copies of your database files.

**Note**

-   Physical backup runs on hidden nodes, ensuring zero impact on primary and secondary node performance.
    
-   Large databases may require extended time to complete physical backups.
    

## Costs

ApsaraDB for MongoDB includes generous free backup storage quotas. You're only charged for backup storage that exceeds your free quota, calculated hourly using this formula: **Hourly backup cost = (Total backup storage - Free quota) × Unit price**.

View your current backup storage usage and free quota allocation:

**Storage type**

**Free quota**

**View backup storage and free quota**

Cloud disk instances

200% of your purchased storage capacity

View your current backup storage usage and free quota on the **Basic Information** page, under the **Specification Information** section.

Local disk instances

50% of your purchased storage capacity

Backup storage pricing for usage beyond your free quota:

**Storage type**

**Unit price of backup (USD per GB-day)**

Cloud disk-based instances

The unit price varies in different regions:

-   Regions in the Chinese mainland: 0.0009375
    
-   China (Hong Kong) and regions outside China: 0.001125
    

Local disk-based instances

The unit price varies in different regions:

-   Regions in the Chinese mainland: 0.00375
    
-   China (Hong Kong) and regions outside China: 0.0045
    

For detailed pricing information, visit [the ApsaraDB for MongoDB Pricing page](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).

**Warning**

Prices shown are for reference only. Actual billing rates are determined at purchase time and reflected in your bills.

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the resource group and region to which the desired instance belongs. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane of the instance details page, click **Backup and Restoration**.
    
3.  Click the **Backup Settings** tab.
    
4.  On the **Backup Settings** tab, click **Edit** and then configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Backup Method**
    
    Choose between **Standard Backup** or **High-frequency Backup**.
    
    This guide focuses on Standard Backup configuration. For High-frequency Backup settings, refer to [High-frequency backup](/help/en/mongodb/user-guide/high-frequency-backup).
    
    **Full Backup Retention Period (Days)**
    
    Specify how long to retain full backup files. Valid range: 7 to 730 days.
    
    **Note**
    
    Default: 30 days for instances created after September 10, 2021.
    
    **Backup Within Seconds**
    
    Enable **Backup Within Seconds** to complete backups in just seconds instead of minutes. This feature is disabled by default.
    
    When enabled, backup operations complete within a few seconds, minimizing any potential performance impact.
    
    **Note**
    
    Available only for replica set instances running MongoDB 4.4 or later.
    
    **Backed Up At**
    
    Select the time window when backups should run. We strongly recommend choosing off-peak hours to minimize impact on your application.
    
    **Note**
    
    Backup times are displayed in your local computer's time zone.
    
    **Day of Week**
    
    Select which days of the week to run backups. By default, backups run daily (all seven days selected).
    
    **Note**
    
    For data security, schedule backups at least twice weekly. More frequent backups enable faster recovery.
    
    **Log Backup**
    
    Enable **Log Backup** for point-in-time recovery (PITR) capability. This feature is enabled by default.
    
    -   When enabled, MongoDB oplogs are continuously uploaded to OSS for real-time backup. This allows you to restore your instance to any specific point in time within your retention period. Additional storage charges apply for log backups.
        
        **Note**
        
        -   Configure the log backup retention period below, and view log backup details on the **Log Backup** tab.
            
        -   Log backup is supported only for replica set and sharded cluster instances.
            
        
    -   When disabled, oplogs are not backed up to OSS (no log backup charges). However, without log backups, point-in-time recovery is not available. The system will restore from the full backup closest to your requested time, which may result in data loss. We strongly recommend keeping **Log Backup** enabled for production databases.
        
        **Warning**
        
        Disabling log backup immediately and permanently deletes all existing log backup files. This action cannot be undone.
        
    
    **Log Backup Retention Period (Days)**
    
    If log backup is enabled, specify the retention period for log files. Valid range: 7 to 730 days. Default: 7 days.
    
    **Note**
    
    Log backup retention cannot exceed your full backup retention period.
    
5.  Click **OK**.
    

## FAQ

How can I view backup storage charges for my instance?

Navigate to the [Bill Details](https://usercenter2-intl.console.alibabacloud.com/finance/expense-report/expense-detail-by-instance) page and look for the **Backup Storage Size** billable item to view your backup-related charges.

Can I manually delete backup files to reduce costs?

Backup files cannot be deleted manually. However, the system automatically deletes backups after they exceed the retention period you configure. To reduce backup storage costs, adjust your backup policy by reducing the backup frequency or shortening the retention period. For detailed instructions, see [Procedure](#section-msc-bsp-dgb).

## Related APIs

**Operation**

**Description**

[DescribeBackupPolicy](/help/en/mongodb/api-describebackuppolicy#doc-api-Dds-DescribeBackupPolicy)

Retrieves the current backup policy configuration for an instance.

[ModifyBackupPolicy](/help/en/mongodb/api-modifybackuppolicy#doc-api-Dds-ModifyBackupPolicy)

Updates the backup policy configuration for an instance.
