Snapshots are an important disaster recovery method, which provide complete point-in-time replicas of cloud disk data. To protect against data loss caused by accidental operations, attacks, or viruses, you can use snapshots to periodically back up business data stored on cloud disks. If data loss or exceptions occur on a cloud disk, you can restore the disk data to an earlier point in time by using a snapshot of the cloud disk. This ensures business continuity.

**Important**

Elastic Compute Service (ECS) instances do not automatically back up data stored on cloud disks. To reduce the risk of data loss caused by major O&M operations (such as configuration changes and upgrades), attacks, or viruses, we recommend that you create snapshots on a periodical basis to back up cloud disk data after you create ECS instances.

## Scenarios

We recommend using snapshots in the following scenarios:

-   Daily data backup
    
    To back up cloud disk data and protect against data loss caused by accidental operations, attacks, or viruses, you can use automatic snapshot policies to periodically create automatic snapshots for cloud disks and retain the snapshots for a specific period of time.
    
-   Disaster recovery and fault tolerance
    
    Before you perform O&M operations on ECS instances and cloud disks, such as capacity extension, configuration changes, or migration, you can manually create snapshots to back up data. This allows you to restore your business data from the snapshots.
    
-   Fast data restoration
    
    If your system encounters a software compatibility issue during an upgrade or a service interruption occurs, you can roll back cloud disks by using the corresponding snapshots to quickly restore business data and ensure business continuity.
    
-   Batch business deployment
    
    To batch deploy or upgrade your business on multiple sites, you can create custom images based on snapshots and then create ECS instances from the images.
    
-   Batch data distribution
    
    To quickly distribute business data, you can batch create cloud disks from snapshots and attach the cloud disks to ECS instances based on your business requirements.
    

**Note**

Snapshots are created as backups of a cloud disk or cloud disk group. To simultaneously create snapshots for all cloud disks on an ECS instance to back up or clone the instance, use the [ECS instance backup feature](/help/en/cloud-backup/user-guide/ecs-server-backup/) of Cloud Backup.

## Get started with snapshots

### **Working principles**

Snapshots use data blocks as the basic unit for data backup. A data block is the fundamental unit for managing data in a storage system. The first standard snapshot of a disk is a full snapshot, which backs up all data blocks on the disk. Subsequent standard snapshots are incremental. Incremental snapshots back up only the data blocks that have changed since the previous snapshot was created. This method saves storage space and reduces costs. For more information about how snapshots work, see [How snapshots work](/help/en/ecs/user-guide/how-do-snapshots-work#concept-zbn-tzw-ydb).

### **Storage locations**

Snapshots are stored by default in Object Storage Service (OSS) to ensure long-term data security and flexible recovery. The OSS bucket used for this purpose is not visible to you. For data security reasons, you cannot currently use your own OSS buckets to store snapshots.

-   By default, snapshot data is stored in zone-redundant storage (ZRS) buckets in regions where OSS supports ZRS to maximize data redundancy.
    
-   In regions where OSS does not support ZRS, snapshot data is stored in locally redundant storage (LRS) buckets. If your business requires high availability, we recommend that you [copy snapshots](/help/en/ecs/user-guide/copy-a-snapshot) to back up data across regions.
    

For information about the regions where OSS supports ZRS, see [Storage redundancy types](/help/en/oss/user-guide/overview-of-storage-redundancy-types/) and [Create a zone-redundant storage (ZRS) bucket](/help/en/oss/user-guide/zrs).

**Note**

After you use a snapshot to create or roll back a cloud disk, the data contained in the snapshot is loaded from OSS to the cloud disk. If you access the snapshot data that is not loaded, the system immediately loads the snapshot data from OSS to the cloud disk. The time required to complete the loading process varies based on the snapshot size and could be minutes or hours. Before all data contained in the snapshot is loaded to the cloud disk, the read latency of the cloud disk increases. When all data contained in the snapshot is loaded to the cloud disk, the read latency of the cloud disk returns to the normal level.

### **Instant access (IA)**

A cloud disk that contains a larger amount of data requires a longer period of time to create a snapshot for the disk and upload the snapshot to OSS. The IA feature allows you to use snapshots within seconds of snapshot creation, instead of after the snapshots are fully uploaded to OSS. You can use IA snapshots to perform various operations, such as creating cloud disks, rolling back cloud disks, and sharing snapshots. For more information, see [Snapshot instant access](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).

### Snapshot data security

To meet security and compliance requirements, we recommend that you encrypt snapshots during data storage and backup. Snapshot encryption ensures that data backups of encrypted cloud disks (including system disks and data disks) are encrypted. Encrypted snapshot data cannot be decrypted and remains confidential and integral even if data leaks occur.

If a cloud disk is encrypted, snapshots of the cloud disk are also encrypted. Snapshot data remains encrypted during storage or transmission. The snapshot data remains encrypted even if the snapshots are copied to another region or used to restore the cloud disk. For more information, see the [Confidentiality of data storage](/help/en/ecs/user-guide/data-security/#c64647b872ddj) section of the "Data security" topic.

## **Snapshot types**

By default, disk snapshots are standard snapshots. You can archive standard snapshots. Then, the standard snapshots are moved to the archive tier and converted to [archive snapshots](/help/en/ecs/user-guide/archive-snapshots). The following table describes the differences between standard snapshots and archive snapshots.

**Item**

**Standard snapshot**

**Archive snapshot**

Scenario

Suitable for daily data protection scenarios, such as temporary data backup and creation of cloud disks from snapshots for service distribution.

Suitable for scenarios in which data is infrequently used and require long-term storage, and storage costs are a concern.

Convertibility

Standard snapshots can be converted to archive snapshots.

Archive snapshots cannot be restored to standard snapshots.

Disk rollback, disk creation, image creation, and snapshot sharing

Supported.

Supported.

**Note**

You can share archive snapshots, but you cannot archive the snapshots that are shared to you.

Snapshot replication and encryption

Supported.

Not supported.

Retention period

-   1 to 65,536 days
    
-   Permanently
    

**Note**

If your Alibaba Cloud account has overdue payments, your Snapshot service is affected. For more information, see [Overdue payments](/help/en/ecs/overdue-payments#section-mc1-s21-h83).

The retention period of snapshots consists of the following periods:

-   Standard tier retention period: specifies how long standard snapshots are retained. Its value cannot be changed. A snapshot can be archived only after being retained at the standard tier for at least 14 days.
    
-   Archive tier retention period: specifies how long archive snapshots are retained. Valid values:
    
    -   60 to (65,536 days - Standard tier retention period)
        
    -   Permanently
        

**Note**

If your Alibaba Cloud account has overdue payments, your Snapshot service is affected. For more information, see [Overdue payments](/help/en/ecs/overdue-payments#section-mc1-s21-h83).

Fee

-   Unit prices: View the unit prices of standard snapshots on the [Pricing tab of the Elastic Compute Service product page](https://www.alibabacloud.com/product/ecs).
    
-   Billable items: You are charged **standard snapshot storage fees** based on the size and usage duration of standard snapshots.
    

For more information, see [Snapshot billing](/help/en/ecs/snapshots-1).

-   Unit prices: View the unit prices of archive snapshots on the [Pricing tab of the Elastic Compute Service product page](https://www.alibabacloud.com/product/ecs).
    
-   Billable items: You are charged **archive snapshot storage fees** based on the size and usage duration of archive snapshots.
    
-   **Important**
    
    The minimum retention period for an archive snapshot is 60 days (1,440 hours). If you delete an archive snapshot before this period ends, you are charged a **fee for deleting the snapshot before the minimum retention period**.
    

For more information, see [Snapshot billing](/help/en/ecs/snapshots-1#cdb5af0a32nsh).

## Snapshot functionality

The following figure shows the common snapshot operations that you can perform during the lifecycle of a snapshot.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9312342771/CAEQOhiBgMDYw7XisRkiIDYyMGI1YTY3ZTI5ZDRkZjc5OWY4NTkzMjQ4YjNmZjIz3963382_20230830144006.372.svg)

**Feature**

**Description**

**References**

Create a snapshot

You can manually or automatically create standard snapshots. Manually created standard snapshots are called manual standard snapshots. Automatically created standard snapshots are called automatic standard snapshots.

-   Manually create standard snapshots.
    
    -   You can manually create standard snapshots for a single cloud disk.
        
    -   To ensure backup data consistency, you can manually create snapshots for multiple cloud disks on one or more ECS instances at the same time by creating a snapshot-consistent group.
        
-   Automatically create standard snapshots.
    
    You can create and associate an automatic snapshot policy with cloud disks to automatically create snapshots for the cloud disks based on the policy.
    

-   Manually create standard snapshots.
    
    -   [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb)
        
    -   [Create a snapshot-consistent group](/help/en/ecs/user-guide/create-a-snapshot-consistent-group#task-1997214)
        
-   Automatically create standard snapshots.
    
    1.  [Create an automatic snapshot policy](/help/en/ecs/user-guide/create-an-automatic-snapshot-policy-1)
        
    2.  [Set an automatic snapshot policy for a disk](/help/en/ecs/user-guide/enable-or-disable-an-automatic-snapshot-policy)
        

Use a snapshot

Copy a snapshot

You can copy snapshots from one region to another region to back up data across regions.

[Copy a snapshot](/help/en/ecs/user-guide/copy-a-snapshot#task-2438417)

Archive a snapshot

You can convert standard snapshots that you do not need to access frequently but need to retain for an extend period of time to archive snapshots to reduce snapshot storage costs.

[Archive a snapshot](/help/en/ecs/user-guide/archive-snapshots)

Share a snapshot

You can share snapshots with other Alibaba Cloud accounts or within your organization based on resource directories. Other Alibaba Cloud accounts can use your shared snapshots to quickly create disks to meet daily O&M requirements.

[Share a snapshot](/help/en/ecs/user-guide/share-a-snapshot)

Roll back a cloud disk by using a snapshot

If system faults occur or data is lost due to accidental operations, you can use snapshots to roll back cloud disks to restore data.

-   You can use a snapshot to roll back a cloud disk.
    
-   You can use a snapshot-consistent group to roll back multiple cloud disks at the same time.
    

-   [Roll back a disk by using a snapshot](/help/en/ecs/user-guide/roll-back-a-disk-by-using-a-snapshot#concept-smh-y2l-xdb)
    
-   [Roll back disks by using a snapshot-consistent group](/help/en/ecs/user-guide/roll-back-disks-by-using-a-snapshot-consistent-group)
    

Create a cloud disk from a snapshot

You can create a data disk from a snapshot. The data on the data disk is the same as the data on the source disk when the snapshot was created. Snapshot-based disk creation allows you to quickly replicate cloud disks in the same zone or across zones for environment cloning or data backup.

[Create a disk from a snapshot](/help/en/ecs/user-guide/create-a-cloud-disk-using-a-snapshot)

Create an image from a system disk snapshot

If you have a snapshot of the system disk of an ECS instance, you can create a custom image from the snapshot. The custom image includes the instance operating system and data captured in the snapshot. You can use the custom image to create multiple instances that have identical application environments.

[Create a custom image from a snapshot](/help/en/ecs/user-guide/create-a-custom-image-from-a-snapshot)

Delete a snapshot

If you no longer require one or more snapshots or the maximum number of snapshots is reached, you can delete snapshots to free up storage space and prevent unnecessary charges.

-   [Delete a snapshot](/help/en/ecs/user-guide/delete-a-snapshot-1)
    
-   [Delete a snapshot-consistent group](/help/en/ecs/user-guide/modify-and-delete-a-snapshot-consistent-group#b7a89deb30nsn)
    

## Billing

-   Before you can create snapshots, you must [activate the Snapshot service](/help/en/ecs/user-guide/activate-ecs-snapshot). You are not charged for activating the Snapshot service, but you are charged for the snapshots that you create. By default, [manual snapshots](/help/en/ecs/user-guide/create-a-snapshot) and automatic snapshots created based on [automatic snapshot policies](/help/en/ecs/user-guide/automatically-create-snapshots/) are standard snapshots. Alibaba Cloud charges **storage fees for standard snapshots** based on the size and storage duration (billable duration) of the snapshots in each region.
    
-   To reduce storage costs, you can archive standard snapshots to convert them to [archive snapshots](/help/en/ecs/user-guide/archive-snapshots). Alibaba Cloud charges **storage fees for archive snapshots** based on the size and storage duration (billable duration) of the snapshots in each region.
    
    **Important**
    
    The minimum retention period for an archive snapshot is 60 days (1,440 hours). If you delete an archive snapshot before its 60-day minimum retention period ends, you will be charged for the **remaining portion** of the retention period.
    
-   If you use the [snapshot replication](/help/en/ecs/user-guide/copy-a-snapshot) feature to copy a standard snapshot from one region to another region, you are charged a **data transfer fee for the snapshot replication** and a **storage fee for the standard snapshot copy** in the destination region. Archive snapshots cannot be copied.
    

For more information about the billing of snapshots, see [Snapshot billing](/help/en/ecs/snapshots-1#cdb5af0a32nsh).

## Limits

When you use snapshots, take note of the limits described in the following table.

**Limit**

**Description**

Snapshot quotas

-   For information about the maximum number of snapshots that can be retained for a disk and the number of automatic snapshot policies you can configure, see [Snapshot limits](/help/en/ecs/user-guide/limitations#SnapshotQuota1).
    
-   Up to 100 automatic snapshot policies can be retained per region per account.
    
-   A single disk has a limit on the number of concurrent snapshot creation tasks, including manual snapshots, automatic snapshots, snapshots in a snapshot consistency group, and snapshots for images.
    
    -   Enterprise SSD (ESSD) series disks (ESSDs, ESSD AutoPL disks, ESSD Entry disks, and Regional ESSDs): 10
        
    -   Legacy disks (standard SSDs, ultra disks, and basic disks): 1
        
-   A single disk supports a maximum of 10 concurrent archive tasks. This limit includes tasks for manual snapshots, automatic snapshots, consistency group snapshots, and image snapshots. You cannot start new archive tasks if this limit is exceeded.
    

Categories of block storage devices

-   You cannot create snapshots for local disks or elastic ephemeral disks.
    
-   Only ESSD series disks (ESSDs, ESSD AutoPL disks, and ESSD Entry disks) for which the multi-attach feature is disabled support the snapshot-consistent group feature. For information about the multi-attach feature, see [Attach a cloud disk to multiple ECS instances (multi-attach)](/help/en/ecs/user-guide/enable-multi-attach).
    
-   Only ESSD series disks (ESSDs, ESSD AutoPL disks, ESSD Entry disks, and Regional ESSDs) support the IA feature. For more information, see [Snapshot instant access](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature).
    

Download or export of snapshots

You cannot download or export created snapshots.

You can [create custom images from snapshots](/help/en/ecs/user-guide/create-a-custom-image-from-a-snapshot) and [export the custom images](/help/en/ecs/user-guide/export-a-custom-image) to your on-premises device.

Others

The following limits apply to manual and automatic snapshots:

-   ESSD series disks (ESSD, ESSD AutoPL, ESSD Entry, and ESSD zone-redundant disks)
    
    A single disk supports the concurrent creation of manual and automatic snapshots. However, the number of concurrent snapshots that can be created is limited. For more information, see [Snapshot limits](/help/en/ecs/user-guide/limitations#SnapshotQuota). If the number of concurrent snapshots that are being created for a disk reaches the upper limit, subsequent snapshot creation tasks fail.
    
-   Previous generation disks (standard SSDs, ultra disks, and basic disks)
    
    -   Concurrent creation of manual and automatic snapshots is not supported.
        
    -   At the point in time when an automatic snapshot is scheduled to be created, if a snapshot (manual or automatic) is being created for the disk, the system does not create an automatic snapshot at this point in time. An automatic snapshot is created at the next scheduled point in time.
        
    -   If an automatic snapshot is being created for a disk, you must wait for the automatic snapshot to be created before you can manually create a snapshot.
        

**Note**

For information about the differences between manual and automatic snapshots, see [Differences between automatic and manual snapshots](/help/en/ecs/user-guide/automatically-create-snapshots/#7194e690b5410).

## **FAQ**

To get answers to frequently asked questions about how to use snapshots, see [Data protection and restoration](/help/en/ecs/data-protection-and-recovery-faqs).
