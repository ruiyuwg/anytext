If you create a disk from a snapshot and attach the created disk to the Elastic Compute Service (ECS) Linux instance to which the source disk of the snapshot is attached, the UUIDs of the new disk and source disk conflict. This topic describes how to change the UUID of a new disk.

## Background information

The disk that is created from a snapshot has the same UUID as the source disk of the snapshot. If you attach the new disk to the Linux instance to which the source disk is attached, the UUID of the new disk conflicts with that of the source disk. The following issues may occur:

-   If you create a disk from a system disk snapshot of the Linux instance and attach the created disk as a data disk to the instance, the Linux operating system may boot from the new data disk rather than the system disk.
    
-   If your disk uses an XFS file system, the `mount` operation is denied due to the UUID conflict. The `"mount: wrong fs type, bad option, bad superblock on /dev/vdd1,"` error message appears.
    

For information about how to create a disk from a snapshot, see [Create a disk from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#concept-yyn-11b-ydb).

After you create a disk from a disk snapshot of a Linux instance and attach the created disk to the Linux instance in the ECS console, you need to log on to the instance to change the UUID of the new disk before you can `mount` the disk. To change the UUID of a disk, you can run the `blkid` command to query the file system type of the disk and use one of the following methods based on the command output:

-   If `TYPE="ext4"`, `TYPE="ext3"`, or `TYPE="ext2"` is displayed in the command output, perform the operations that are described in the [Change the UUID of an ext2, ext3, or ext4 file system](#section-gqh-rma-fsw) section of this topic.
    
-   If `TYPE="xfs"` is displayed in the command output, perform the operations that are described in the [Change the UUID of an XFS file system](#section-qw6-51s-l6y) section of this topic.
    

## Change the UUID of an ext2, ext3, or ext4 file system

**Note**

In this example, /dev/vdb1 is used as the new disk that is created from a snapshot. Modify the commands based on your device name.

1.  Connect to an ECS instance.
    
    For more information, see [Connect using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc#concept-sdk-1jx-wdb).
    
2.  Run the following command to query the UUIDs of disks:
    
    ```
    blkid
    ```
    
    The following command output shows that the new disk has the same UUID as the source disk of the snapshot.![uuid信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7139898161/p210223.png)
    
3.  Run the following command to check the file system on the new disk:
    
    ```
    e2fsck -f /dev/vdb1
    ```
    
4.  Run the following command to generate a new UUID for the new disk:
    
    ```
    uuidgen | xargs tune2fs /dev/vdb1 -U
    ```
    
5.  Run the following command to check whether the UUID of the new disk is changed:
    
    ```
    blkid
    ```
    
    The following command output shows that the UUID of /dev/vdb1 is changed.![uuid已变动](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7139898161/p210347.png)
    
6.  Run the following command to `mount` the new disk:
    
    ```
    mount /dev/vdb1 /mnt
    ```
    
7.  Configure the `/etc/fstab` file to automatically mount the new disk on startup.
    
    For information about how to configure the /etc/fstab file, see [Configure UUIDs in the fstab file to automatically mount data disks](/help/en/ecs/user-guide/configure-uuids-in-the-fstab-file-to-automatically-attach-data-disks#task-2000719).
    

## Change the UUID of an XFS file system

**Note**

In this example, /dev/vdd1 is used as the new disk that is created from a snapshot. Modify the commands based on your device name.

1.  Connect to an ECS instance.
    
    For more information, see [Connect using VNC](/help/en/ecs/user-guide/log-on-to-an-instance-by-using-vnc#concept-sdk-1jx-wdb).
    
2.  Run the following command to query the UUIDs of disks:
    
    ```
    blkid
    ```
    
    The following command output shows that the new disk has the same UUID as the source disk of the snapshot.![xfs-uuid](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7139898161/p210365.png)
    
3.  Run the following command to generate a new UUID for the new disk:
    
    ```
    xfs_admin -U generate /dev/vdd1
    ```
    
4.  Run the following command to check whether the UUID of the new disk is changed:
    
    ```
    blkid
    ```
    
    The following command output shows that the UUID of /dev/vdd1 is changed.![uuid结果-xfs](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7139898161/p210558.png)
    
5.  Run the following command to `mount` the new disk:
    
    ```
    mount /dev/vdd1 /mnt
    ```
    
6.  Configure the `/etc/fstab` file to automatically mount the new disk on startup.
    
    For information about how to configure the /etc/fstab file, see [Configure UUIDs in the fstab file to automatically mount data disks](/help/en/ecs/user-guide/configure-uuids-in-the-fstab-file-to-automatically-attach-data-disks#task-2000719).
