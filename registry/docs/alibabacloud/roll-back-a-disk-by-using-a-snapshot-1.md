If you lose data on a disk due to accidental operations, ransomware attacks, or other incidents, you can use a snapshot of that disk to roll it back. Rolling back a disk restores it to the exact state it was in when the snapshot was created. This topic describes how to roll back a disk by using a snapshot.

## Limitations

-   A snapshot can only roll back the disk it was created from. To restore data to a different disk, [create a disk from a snapshot](/help/en/ecs/user-guide/create-a-cloud-disk-using-a-snapshot).
    
-   After replacing the operating system of an Elastic Compute Service (ECS) instance, snapshots of the original system disk cannot roll back the new system disk. As a workaround, create a pay-as-you-go disk from the snapshot, attach it to the instance, copy the data, and then release the temporary disk as soon as possible to avoid unnecessary charges. For details, see [Create a data disk from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#concept-yyn-11b-ydb), [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb), and [Release a disk](/help/en/ecs/user-guide/release-a-disk#concept-bly-hrh-ydb).
    
-   Shared snapshots and snapshot copies cannot be used for disk rollback.
    

## Prerequisites

Before you begin, make sure that:

-   A snapshot exists for the disk, the snapshot is available for rollback, and no snapshot is currently being created
    
-   The disk has not been released
    
-   If the disk is attached to an ECS instance, stop the ECS instance before you roll back the disk
    
-   If the disk is part of a dynamic extended volume or RAID array, all services and applications using the disk are stopped, with no active read or write operations
    

## Procedure

**Warning**

Disk rollback is irreversible. All data added, removed, or modified between the snapshot creation time and the rollback time is permanently lost. Back up the current disk state by creating a snapshot before proceeding. For details, see [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).

The following steps use the **Snapshots** page. The rollback operation is also available from the **Instance** page.

1.  Go to [ECS console - Snapshots](https://ecs.console.alibabacloud.com/snapshot).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  On the **Disk Snapshots** tab, find the target snapshot. In the **Actions** column, click **Roll Back Disk**.
    
4.  In the **Roll Back Disk** dialog, select the confirmation checkbox acknowledging that data after the snapshot creation time will be cleared, and then click **Confirm**.
    

## What to do next

After a rollback, the disk reverts to the exact state captured in the snapshot. Be aware of the following impacts:

**System disk rollback: host configuration reset**

After a rollback, all data that was added, removed, or modified since the snapshot was created is lost. This includes host configuration settings such as the hostname, SSH settings, passwords, network settings, system software repository settings, and clock source. These settings revert to the state they were in when the snapshot was created. You must reconfigure them based on your business requirements.

**Note**

Rolling back the system disk of an ECS instance does not affect the current SSH key pair, username, or password. You can continue to use them to log on to the instance after the rollback.

**Data disk rollback: disk size may revert**

If you resized a data disk after creating the snapshot and then use that snapshot to roll back the disk, the disk reverts to its original size at the time of the snapshot. The additional disk space is lost. To restore the disk to the expanded size, log on to the ECS instance and resize the disk again:

-   Linux instance: [Extend the partitions and file systems of disks on a Linux instance](/help/en/ecs/user-guide/resize-linux-cloud-disks)
    
-   Windows instance: [Extend the partitions and file systems of disks on a Windows instance](/help/en/ecs/user-guide/extend-the-partitions-and-file-systems-of-a-disk-on-a-windows-instance#task-1920103)
    

## FAQ

**How do I restore a specific file or folder without rolling back the entire disk?**

Disk rollback restores the entire disk -- there is no option to recover individual files. To restore specific files from a Windows D drive (or any data disk), use a temporary disk instead:

1.  Create a temporary pay-as-you-go disk from the snapshot. See [Create a data disk from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#concept-yyn-11b-ydb).
    
2.  Attach the disk to an ECS instance. See [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
    
3.  Bring the disk **Online**.
    
4.  Copy the specific files or folders to the original disk.
    
5.  Detach and release the temporary disk. See [Detach a data disk](/help/en/ecs/user-guide/detach-a-data-disk) and [Release a disk](/help/en/ecs/user-guide/release-a-disk).
    

## API reference

To roll back a disk programmatically, call the [ResetDisk](/help/en/ecs/api-resetdisk#doc-api-Ecs-ResetDisk) API operation.
