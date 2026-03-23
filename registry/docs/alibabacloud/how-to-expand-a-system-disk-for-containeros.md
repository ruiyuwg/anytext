You can extend system disks to meet the increasingly growing storage demand, avoid system failures caused by insufficient storage space, and ensure sufficient storage space for installing applications and storing data. This topic describes how to extend the system disks of ContainerOS nodes without service interruptions.

## **Before you begin**

Before you resize a system disk, we recommend that you read the [Disk resizing overview](/help/en/ecs/user-guide/overview-19) topic to learn about the usage notes for resizing system disks and data disks:

-   The procedure for resizing a system disk includes partition extension and file system extension.
    
-   The maximum capacity to which a system disk can be resized is limited.
    
-   You are charged for resizing a system disk.
    

## Step 1: Resize a disk to extend its capacity

Refer to [Step 1: Resize a disk to extend its capacity](/help/en/ecs/user-guide/step-1-resize-a-disk-to-extend-its-capacity) to learn about the usage notes. Then, log on to the [ECS console](https://ecs.console.alibabacloud.com) to specify a new capacity, such as 200 GiB. We recommend that you use the online resizing method, which does not require you to restart the node for the resize operation to take effect.

## Step 2: Extend the partitions

1.  Use Cloud Assistant to run the following command to query the partitions on the node:
    
    ```
    fdisk -l
    ```
    
    Expected output:
    
    ## NVMe disks
    
    ```
    Disk /dev/nvme0n1: 150 GiB, 161061273600 bytes, 314572800 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: gpt
    Disk identifier: 00000000-0000-4000-A000-000000000001
    
    Device           Start      End  Sectors  Size Type
    /dev/nvme0n1p1    2048     4095     2048    1M BIOS boot
    /dev/nvme0n1p2    4096   264191   260096  127M EFI System
    /dev/nvme0n1p3  264192  1050623   786432  384M Linux filesystem
    /dev/nvme0n1p4 1050624 19924991 18874368    9G Linux filesystem
    ```
    
    ## Other disks
    
    ```
    Disk /dev/vda: 120 GiB, 161061273600 bytes, 314572800 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: gpt
    Disk identifier: 00000000-0000-4000-A000-000000000001
    
    Device           Start      End  Sectors  Size Type
    /dev/vda1    2048     4095     2048    1M BIOS boot
    /dev/vda2    4096   264191   260096  127M EFI System
    /dev/vda3  264192  1050623   786432  384M Linux filesystem
    /dev/vda4 1050624 19924991 18874368    9G Linux filesystem
    ```
    
    **Note**
    
    Decide the command for extending disks based on the format used by your disks. In this section, an NVMe system disk named nvme0n1p4 is used as an example.
    
2.  Use Cloud Assistant to run the following command to extend the specified partition:
    
    ## NVMe disks
    
    ```
    growpart /dev/nvme0n1 4
    ```
    
    ## Other disks
    
    ```
    growpart /dev/vda 4
    ```
    
    If the following output is returned, the disk partition is extended.
    
    ```
    CHANGED: partition=4 start=1050624 old: size=18874368 end=19924991 new: size=313522143 end=314572766
    ```
    

## Step 3: Extend the file system

1.  Use Cloud Assistant to run the following command to change the partition mounting mode.
    
    By default, `/sysroot` in ContainerOS is mounted in read-only mode. You cannot directly extend the file system. Therefore, you need to create a new namespace and mount `/sysroot` in writable mode in the new namespace before you extend the file system. This avoids affecting the mounting mode of the default namespace.
    
    ## NVMe disks
    
    ```
    unshare --mount -- mount -o remount,rw /dev/nvme0n1p4 /sysroot
    ```
    
    ## Other disks
    
    ```
    unshare --mount -- mount -o remount,rw /dev/vda4 /sysroot
    ```
    
2.  Use Cloud Assistant to run the following command to extend the file system in the new namespace:
    
    ## NVMe disks
    
    ```
    unshare --mount -- resize2fs /dev/nvme0n1p4
    ```
    
    ## Other disks
    
    ```
    unshare --mount -- resize2fs /dev/vda4
    ```
    
    If the following output is returned, the file system is extended.
    
    ```
    resize2fs 1.46.0 (29-Jan-2020)
    Filesystem at /dev/nvme0n1p4 is mounted on /; on-line resizing required
    old_desc_blocks = 19, new_desc_blocks = 19
    The filesystem on /dev/nvme0n1p4 is now 39452411 (4k) blocks long.
    ```
    
3.  Verify that the system disk is extended.
    
    Use Cloud Assistant to run the following command to query the size of the root partition:
    
    ```
    df -h
    ```
    
    The following output indicates that the root partition is extended to the specified size. The system disk of the node is extended.
    
    ```
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/root       199G  9.1G  163G   5% /sysroot
    devtmpfs        3.8G     0  3.8G   0% /dev
    tmpfs           3.8G     0  3.8G   0% /dev/shm
    tmpfs           3.8G  2.0M  3.8G   1% /run
    tmpfs           3.8G     0  3.8G   0% /sys/fs/cgroup
    tmpfs           3.8G   16K  3.8G   1% /tmp
    overlay         149G  9.1G  133G   7% /var/opt
    /dev/nvme0n1p3  362M   16M  324M   5% /boot
    ```
