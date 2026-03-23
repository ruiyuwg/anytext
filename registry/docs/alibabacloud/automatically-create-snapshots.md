You can create an automatic snapshot policy and associate the policy with cloud disks to create snapshots for the disks on a regular basis. This protects disk data and reduces the risk of data loss due to irregular snapshot creation.

## Use cases

You can use an automatic snapshot policy to create snapshots for cloud disks on a regular basis and retain the snapshots for a specific period of time. This way, you can back up disk data on a regular basis, prevent data loss or system failures caused by accidental deletion or issues such as viruses, and ensure that disk data can be quickly restored for business continuity.

## Operations

The following figure shows the common operations that can be performed for automatic snapshots from the time when an automatic snapshot policy is created until the time when the automatic snapshots are deleted.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9638023771/CAEQORiBgICkmdSXqxkiIDg2YWE1NmZlOGFiMDRjMDZhMjEwZDk5MmQ2YzhhZmIz4914705_20250218103150.896.svg)

**Operation**

**Description**

[Create policy](/help/en/ecs/user-guide/create-an-automatic-snapshot-policy-1#task-1443510)

Create an automatic snapshot policy and specify when to create automatic snapshots and how long to retain the snapshots.

[Set an automatic snapshot policy for a disk](/help/en/ecs/user-guide/enable-or-disable-an-automatic-snapshot-policy#concept-nyv-k3l-xdb)

After you associate an automatic snapshot policy with cloud disks, the system automatically creates snapshots for the disks based on the schedule specified in the policy to back up disk data.

[Modify policy](/help/en/ecs/user-guide/modify-an-automatic-snapshot-policy#task-1443818)

You can modify the parameters in an automatic snapshot policy, such as the creation time and retention period of automatic snapshots, as needed.

Create automatic snapshots on a regular basis

The system automatically creates snapshots for a cloud disk based on the schedule specified in the automatic snapshot policy associated with the disk.

[Delete policy](/help/en/ecs/user-guide/delete-an-automatic-snapshot-policy#task-1443760)

You can delete automatic snapshot policies that you no longer require.

[Delete a snapshot](/help/en/ecs/user-guide/delete-a-snapshot-1)

An automatic snapshot can be deleted in the following scenarios:

-   You manually delete an automatic snapshot. This does not affect the creation of automatic snapshots based on the associated automatic snapshot policy.
    
-   If the **Delete Automatic Snapshots While Releasing Disk** attribute is enabled for a cloud disk, the automatic snapshots of the disk are automatically deleted when the disk is released.
    
-   When the retention period specified in the associated automatic snapshot policy for an automatic snapshot ends, the snapshot is deleted.
    
-   If the maximum number of automatic snapshots is reached, the oldest automatic snapshots are automatically deleted when new automatic snapshots are created.
    

## **Billing**

You are not charged for creating an automatic snapshot policy. However, you are charged for snapshot storage based on the snapshot capacity and usage duration. For information about the billing of snapshots, see [Snapshot billing](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).

## Limits

When you use an automatic snapshot policy to create automatic snapshots, take note of the limits described in the following table.

**Limit**

**Description**

Snapshot quotas

-   Up to 100 automatic snapshot policies can be retained per region per account.
    
-   For the limits on the number of automatic snapshot policies and retained automatic snapshots per disk, see [Snapshots](/help/en/ecs/user-guide/limitations#SnapshotQuota1).
    
    **Note**
    
    If the maximum number of automatic snapshots is reached, the oldest automatic snapshots are automatically deleted when new automatic snapshots are created.
    

Categories of block storage devices

You cannot create snapshots for local disks or elastic ephemeral disks.

Others

The following limits are imposed on manual and automatic snapshots:

-   ESSD series disks (ESSD, ESSD AutoPL, ESSD Entry, and ESSD zone-redundant disks)
    
    A single disk supports the concurrent creation of manual and automatic snapshots. However, the number of concurrent snapshots that can be created is limited. For more information, see [Snapshot limits](/help/en/ecs/user-guide/limitations#SnapshotQuota). If the number of concurrent snapshots that are being created for a disk reaches the upper limit, subsequent snapshot creation tasks fail.
    
-   Previous generation disks (standard SSDs, ultra disks, and basic disks)
    
    -   Concurrent creation of manual and automatic snapshots is not supported.
        
    -   At the point in time when an automatic snapshot is scheduled to be created, if a snapshot (manual or automatic) is being created for the disk, the system does not create an automatic snapshot at this point in time. An automatic snapshot is created at the next scheduled point in time.
        
    -   If an automatic snapshot is being created for a disk, you must wait for the automatic snapshot to be created before you can manually create a snapshot.
        

## Differences between automatic snapshots and manual snapshots

Automatic and manual snapshots are point-in-time backups of disk data. The following table describes the differences between the creation methods and snapshot names of automatic snapshots and manual snapshots.

**Differences**

**Automatic snapshot**

**Manual snapshot**

Creation method

Automatic snapshots are created based on automatic snapshot policies.

After you create an automatic snapshot policy and associate the policy with cloud disks, the system automatically creates snapshots for the disks based on the schedule specified in the policy.

It must be created manually each time.

You can create snapshots for cloud disks and configure snapshot parameters as needed.

Snapshot name

The name of an automatic snapshot is automatically generated.

The name of an automatic snapshot starts with auto2.0 and is in the auto2.0\_yyyyMMdd\_SnapshotPolicyId format.

-   auto2.0: the prefix contained in the name of an automatic snapshot.
    
-   yyyyMMdd: the date on which the automatic snapshot is created. yyyy indicates the year, MM indicates the month, and dd indicates the day.
    
-   SnapshotPolicyId: the ID of the automatic snapshot policy based on which the automatic snapshot is created.
    

You can customize the settings when you create a snapshot.
