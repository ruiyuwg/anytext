To ensure data security, ApsaraDB for MongoDB provides the high-frequency backup feature. You can configure high-frequency backup at an interval of several minutes or hours based on your business requirements. This topic describes how to configure high-frequency backup.

## Prerequisites

-   A replica set or sharded cluster instance is used.
    
-   The instance runs MongoDB 4.2 or later.
    
-   The instance uses Enterprise SSDs (ESSDs).
    

## Billing rules

ApsaraDB for MongoDB provides a certain amount of free backup storage capacity. The backup storage capacity of an instance that uses ESSDs is calculated based on the following formula: 200% × instance storage capacity.

After the free quota is reached, the excess backup storage capacity is billed on a daily basis based on the unit price of backup storage. For more information, go to [the Pricing tab of the ApsaraDB for MongoDB product page](https://www.alibabacloud.com/zh/product/apsaradb-for-mongodb/pricing).

## Enable high-frequency backup

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the region in which an instance resides. Then, find the instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the instance details page, click **Backup and Restoration**.
    
3.  (Optional) On the **Full Backup** tab, click **Upgrade to Cluster Backup Mode**.
    
    **Note**
    
    To enable high-frequency backup for sharded cluster instances that are created before October 19, 2023, you must switch the instances to the cluster backup mode. For replica set instances and sharded cluster instances that are created after October 19, 2023, skip this step.
    
4.  Click the **Backup Settings** tab.
    
5.  On the **Backup Settings** tab, click **Edit** to go to the backup configuration panel. Then, configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Backup Mode**
    
    The backup mode of the instance. Select **High-frequency Backup**.
    
    **Retention Period for High-frequency Backups (Days)**
    
    The retention period of high-frequency backups. Valid values: 1 to 7. Unit: day.
    
    **Hourly Sparse Backup**
    
    Specifies whether to enable hourly sparse backup. Once enabled, a snapshot is generated within minutes. Valid values:
    
    Enable: If the backup frequency is at the minute level, snapshots generated within the last 1 hour are retained. For snapshots generated more than 1 hour ago but within a specified **high-frequency backup retention period**, only the first snapshot generated after 00:00 00 each day is retained.
    
    Disable: Snapshots generated within a specified **high-frequency backup retention period** are retained.
    
    **Full Backup Retention Period (Days)**
    
    The retention period of full backups. Valid values: 7 to 730. Default value: 30. Unit: day.
    
    **Backup Within Seconds**
    
    By default, the single-digit second backup feature is enabled when high-frequency backup is enabled.
    
    **Note**
    
    This parameter is valid only for replica set instances that use cloud disks.
    
    **Snapshot Backup Frequency**
    
    The interval at which a snapshot backup is performed.
    
    **Note**
    
    -   The backup interval can be set to a period of 15 minutes to 12 hours for replica set instances.
        
    -   The backup interval can be set to a period of 30 minutes to 12 hours for sharded cluster instances.
        
    
    **Note**
    
    For more information about how to configure other parameters on the **Backup Settings** page, see [Configure automatic backup for an instance](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb).
    

## Backup retention policies

High-frequency backup uses the **snapshot backup** method. The following table describes sample backup retention policies.

**Snapshot backup frequency**

**Hourly sparse backup**

**Snapshot retention policy**

**Example**

Minutes

Enabled

-   All snapshots generated within the last 1 hour are retained.
    
-   For snapshots generated more than 1 hour ago but within a specified high-frequency backup retention period, only the first snapshot generated after 00:00 00 each day is retained.
    
-   For snapshots generated more than a specified high-frequency backup retention period ago, only the first snapshot generated after 00:00:00 each day is retained.
    

If you set the snapshot backup frequency to 30 minutes, the high-frequency backup retention period to 2 days (48 hours), and the full backup retention period to 30 days, the following snapshot retention policies apply:

-   Two snapshots generated within the last 1 hour are retained.
    
-   For snapshots generated more than 1 hour ago but within the last 48 hours, only the first snapshot generated after 00:00:00 each day is retained. This way, a total of 47 snapshots are retained.
    
-   For snapshots generated more than 48 hours ago, only the first snapshot generated after 00:00:00 each day is retained. This way, a total of 28 snapshots are retained.
    

As such, a maximum of 77 snapshots are retained within 30 days.

Disabled

-   All snapshots generated within a specified high-frequency backup retention period are retained.
    
-   For snapshots generated more than a specified high-frequency backup retention period ago, only the first snapshot generated after 00:00:00 each day is retained.
    

If you set the snapshot backup frequency to 30 minutes, the high-frequency backup retention period to 2 days (48 hours), and the full backup retention period to 30 days, the following snapshot retention policies apply:

-   96 snapshots generated within the last 48 hours are retained.
    
-   For snapshots generated more than 48 hours ago, only the first snapshot generated after 00:00:00 each day is retained. This way, a total of 28 snapshots are retained.
    

As such, a maximum of 124 snapshots are retained within 30 days.

Hours

N/A

-   All snapshots generated within a specified high-frequency backup retention period are retained.
    
-   For snapshots generated more than a specified high-frequency backup retention period ago, only the first snapshot generated after 00:00:00 each day is retained.
    

If you set the snapshot backup frequency to 6 hours, the high-frequency backup retention to 2 days (48 hours), and the full backup retention period to 30 days, the following snapshot retention policies apply:

-   8 snapshots generated within the last 48 hours are retained.
    
-   For snapshots generated more than 48 hours ago, only the first snapshot generated after 00:00:00 each day is retained.
    

As such, a maximum of 36 snapshots are retained within 30 days.

## **FAQ**

When is a backup task triggered after high-frequency backup is enabled for an instance?

The instance triggers a backup task on the hour. For example, if you set the backup interval to 15 minutes, the instance triggers backup tasks at 00:00, 00:15, 00:30, 00:45, 01:00, and so on. If you set the backup interval to 1 hour, the instance triggers backup tasks at 00:00, 01:00, 02:00, 03:00, and so on. When you change the backup mode from regular backup to high-frequency backup for the instance, if the interval between the last backup time and the current time is greater than the high-frequency backup interval, a backup task is immediately triggered, and subsequent backup tasks are still triggered on the hour. Assume that the instance triggers a regular task at 09:00, you change the regular backup mode to the high-frequency backup mode at 09:20, and you set the backup interval to 15 minutes. A backup task is immediately triggered after the modification because 20 minutes have been elapsed since the last backup. Subsequent backup tasks are still triggered on the hour. This means that the subsequent backup tasks are triggered at 09:20, 09:30, 09:45, 10:00, 10:15, 10:30, and so on.

Does frequent backup tasks affect instance performance after high-frequency backup is enabled for an instance?

The feature is supported only by instances that use cloud disks. The feature has a small impact on instance performance.

-   Backup execution node: High-frequency backup is executed only on secondary or hidden nodes and does not affect the performance of a primary node.
    
-   Physical backup optimization: High-frequency backup relies on physical backup at the kernel side. ApsaraDB for MongoDB optimizes physical backup to avoid expensive operations such as [fsync](https://www.mongodb.com/docs/manual/reference/command/fsync/) or writing new [checkpoint](https://www.mongodb.com/docs/manual/core/wiredtiger/#snapshots-and-checkpoints).
    
-   Overhead of disk snapshots: The creation of creating disk snapshots has a low overhead. For more information about the principles and implementation details, see [Overview](/help/en/ecs/user-guide/snapshot-overview).
    

## Related API operations

**Operation**

**Description**

[DescribeBackupPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackuppolicy)

Queries the backup policy of an ApsaraDB for MongoDB instance.

[ModifyBackupPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifybackuppolicy)

Modifies the backup policy of an ApsaraDB for MongoDB instance.
