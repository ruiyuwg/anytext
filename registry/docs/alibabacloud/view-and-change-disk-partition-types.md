You can use a disk partitioning tool to divide a disk into one or more separate areas for management. The separate areas are called partitions. A disk stores the position and size of each partition in a partition table, and the operating system considers a partition as a logical disk based on the partition information. This helps prevent data loss and improve disk space usage. This topic describes how to manage disk partitions, including how to create disk partitions, change the size of disk partitions, change the type of the partition table, and delete disk partitions.

## Disk partition

-   The maximum number of partitions that can be created on a disk and the size of each partition may vary based on the partition table type.
    
-   The types of partition tables include Master Boot Record (MBR) and GUID partition table (GPT).
    

### **Maximum number of partitions per disk**

-   On an MBR disk, you can create up to four primary partitions or up to three primary partitions and one extended partition. The extended partition can also be divided into multiple logical partitions.
    
-   On a GPT disk, you can create an unlimited number of partitions. However, specific partitioning tools, such as `parted`, may limit the number of partitions that you can create.
    

### **Maximum disk size**

On MBR disks:

-   If the sector size is 512 bytes, the maximum disk size is 2 TB.
    
-   If the sector size is 4,096 bytes, the maximum disk size is 16 TB.
    

On GPT disks:

-   If the sector size is 512 bytes, the maximum disk size is 8 ZB.
    
-   If the sector size is 4,096 bytes, the maximum disk size is 64 ZB.
    

In the following example, the fdisk tool is used to partition an MBR disk. Perform the following steps:

1.  View information about the operating system.
    
    ```
    sudo cat /etc/os-release
    ```
    
    Sample command output:
    
    ```
    NAME="Alibaba Cloud Linux"
    VERSION="3 (Soaring Falcon)"
    ID="alinux"
    ID_LIKE="rhel fedora centos anolis"
    VERSION_ID="3"
    UPDATE_ID="9"
    PLATFORM_ID="platform:al8"
    PRETTY_NAME="Alibaba Cloud Linux 3 (Soaring Falcon)"
    ANSI_COLOR="0;31"
    HOME_URL="https://www.aliyun.com/"
    ```
    
2.  Check whether fdisk is installed.
    
    ```
    fdisk --help
    ```
    
3.  If an error message appears and indicates that fdisk is not found, run the following command to install fdisk:
    
    ```
    sudo yum install -y util-linux
    ```
    
4.  Check whether fdisk is installed as expected.
    
    ```
    fdisk --help
    ```
    
    The following sample command output indicates that fdisk is installed:
    
    ```
    Usage:
     fdisk [options] <disk>      change partition table
     fdisk [options] -l [<disk>] list partition table(s)
    
    ...
    
    For more details see fdisk(8).
    ```
    

## Create a partition table

In this example, a partition table is created on the `/dev/vdb` disk.

1.  View disk information.
    
    ```
    lsblk
    ```
    
    Sample command output:
    
    ```
    NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
    vda    253:0    0   40G  0 disk 
    ├─vda1 253:1 0 2M 0 part 
    ├─vda2 253:2 0 200M 0 part /boot/efi
    └─vda3 253:3 0 39.8G 0 part /
    vdb    253:16   0   20G  0 disk 
    ```
    
2.  Access the `fdisk` interface.
    
    ```
    sudo fdisk /dev/vdb
    ```
    
3.  Enter `m` to view all supported commands. Sample command output:
    
    ```
    ...
      Create a new label
       g   create a new empty GPT partition table
       G   create a new empty SGI (IRIX) partition table
       o   create a new empty DOS partition table
       s   create a new empty Sun partition table
    ```
    
4.  Enter `g` to create a GPT partition table or `o` to create an MBR partition table. Enter `p` to view the disk information. Sample command output:
    
    ```
    Command (m for help): o
    Created a new DOS disklabel with disk identifier 0x34c3f526.
    
    Command (m for help): p
    Disk /dev/vdb: 20 GiB, 21474836480 bytes, 41943040 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0x34c3f526
    ```
    
5.  Enter `w` to save the partition table information into the disk and exit.
    

## Create a partition

In this example, a partition is created on the `/dev/vdb` disk.

1.  Access the `fdisk` interface.
    
    ```
    sudo fdisk /dev/vdb
    ```
    
2.  Enter `p` to view information about the current disk.
    
    ```
    Command (m for help): p
    Disk /dev/vdb: 20 GiB, 21474836480 bytes, 41943040 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0x34c3f526
    ```
    
3.  Enter `n` to create a partition.
    
    ```
    Command (m for help): n 
    Partition type
       p   primary (0 primary, 0 extended, 4 free)
       e   extended (container for logical partitions)
    Select (default p): p
    Partition number (1-4, default 1):  
    First sector (2048-41943039, default 2048): 
    Last sector, +sectors or +size{K,M,G,T,P} (2048-41943039, default 41943039): +100M
    
    Created a new partition 1 of type 'Linux' and of size 100 MiB.
    ```
    
4.  Enter `p` to select the primary partition type.
    
5.  Enter `1` to use the default partition number.
    
6.  Enter `2048` to default the start sector to 2048.
    
    **Note**
    
    The number of the start sector is 2048 (default) and the end sector is 100 MB away from the beginning of the start sector. Specify the size of a partition by using one of the following parameters:
    
    -   +sectors: specifies sectors to use the size of the sectors as the partition size.
        
    -   +size: specifies the size of the partition. For example, you can set the parameter to +100 M, which sets the partition size to 100 MB.
        
    
7.  Enter `+100 M` to set the partition size to 100 MB.
    
8.  The following command output indicates that the created partition is 100 MB in size.
    
    ```
    ...
    Created a new partition 1 of type 'Linux' and of size 100 MiB.
    ```
    
9.  Enter `w` to save the partition information into the partition table and exit.
    
    ```
    Command (m for help): w
    The partition table has been altered.
    Calling ioctl() to re-read partition table.
    Syncing disks.
    ```
    

## Change the partition size

This section describes how to extend a partition. The `fdisk` tool does not provide commands to change the size of a partition. When you use `fdisk` to change the size of a partition, you must delete the original partition and create a new partition of a new size. This operation may lead to the loss of existing disk data. `parted` is another disk partitioning tool that provides commands to change the size of a partition. The following section describes how to use `parted` to change the partition size.

1.  Install `parted`.
    
    ```
    sudo yum install -y parted
    ```
    
2.  Check whether parted is installed as expected.
    
    ```
    sudo parted --help
    ```
    
    The following command output is returned, which indicates that parted is installed as expected:
    
    ```
    Usage: parted [OPTION]... [DEVICE [COMMAND [PARAMETERS]...]...]
    Apply COMMANDs with PARAMETERS to DEVICE.  If no COMMAND(s) are given, run in
    interactive mode.
    
    OPTIONs:
      -h, --help                      displays this help message
    
    ...
    ```
    
3.  Access the `parted` interface.
    
    ```
    sudo parted /dev/vdb
    ```
    
4.  Set the unit of `parted` to MiB.
    
    ```
    (parted) unit MiB
    ```
    
5.  Enter `p` to view all partition information.
    
    ```
    (parted) p                                                                
    Model: Virtio Block Device (virtblk)
    Disk /dev/vdb: 20480MiB
    Sector size (logical/physical): 512B/512B
    Partition Table: msdos
    Disk Flags: 
    
    Number  Start    End     Size    Type     File system  Flags
     1      1.00MiB  101MiB  100MiB  primary
     2      101MiB   201MiB  100MiB  primary
    ```
    
6.  Change the partition size.
    
    Replace the `NUMBER` and END values with the corresponding partition number and end position.
    
    ```
    resizepart NUMBER END
    ```
    
    The start position of Partition 2 is 101 MiB. To extend the size to 500 MiB, set the end position of Partition 2to 601 MiB.
    
    ```
    (parted) resizepart 2 601MiB
    (parted) p                                                                
    Model: Virtio Block Device (virtblk)
    Disk /dev/vdb: 20480MiB
    Sector size (logical/physical): 512B/512B
    Partition Table: msdos
    Disk Flags: 
    
    Number  Start    End     Size    Type     File system  Flags
     1      1.00MiB  101MiB  100MiB  primary
     2      101MiB   601MiB  500MiB  primary
    ```
    
7.  Enter `quit` to exit.
    
8.  Access the `fdisk` interface.
    
    ```
    sudo fdisk /dev/vdb
    ```
    
9.  Enter p to view the current disk information and confirm the partition size.
    
    ```
    Command (m for help): p
    Disk /dev/vdb: 20 GiB, 21474836480 bytes, 41943040 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0xefabc860
    
    Device     Boot  Start     End Sectors  Size Id Type
    /dev/vdb1         2048  206847  204800  100M 83 Linux
    /dev/vdb2       206848 1230847 1024000  500M 83 Linux
    ```
    
10.  Enter `q` to exit.
     

## Change the partition type

Use `fdisk` to change the partition type.

1.  Access the `fdisk` interface.
    
    ```
    sudo fdisk /dev/vdb
    ```
    
2.  Enter `p` to view the current partition information. Sample command output:
    
    ```
    Command (m for help): p
    Disk /dev/vdb: 20 GiB, 21474836480 bytes, 41943040 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0xefabc860
    
    Device     Boot  Start     End Sectors  Size Id Type
    /dev/vdb1         2048  206847  204800  100M 83 Linux
    /dev/vdb2       206848 1230847 1024000  500M 83 Linux
    ```
    
3.  Enter `l` to view all partition types. Sample command output:
    
    ```
     0  Empty           24  NEC DOS         81  Minix / old Lin bf  Solaris        
     1  FAT12           27  Hidden NTFS Win 82  Linux swap / So c1  DRDOS/sec (FAT-
     2  XENIX root      39  Plan 9          83  Linux           c4  DRDOS/sec (FAT-
     3  XENIX usr       3c  PartitionMagic  84  OS/2 hidden or  c6  DRDOS/sec (FAT-
     4  FAT16 <32M      40  Venix 80286     85  Linux extended  c7  Syrinx         
     5  Extended        41  PPC PReP Boot   86  NTFS volume set da  Non-FS data    
     6  FAT16           42  SFS             87  NTFS volume set db  CP/M / CTOS / .
    ......
    ```
    
4.  Change the partition type.
    
    For example, you want to change Partition 2 to an extended partition whose type number is 5. Enter `t`, 2, and then 5 in sequence.
    
    ```
    Command (m for help): t
    Partition number (1,2, default 2): 2
    Hex code (type L to list all codes): 5
    
    Changed type of partition 'Linux' to 'Extended'.
    ```
    
5.  Enter `p` to view the partition information.
    
    ```
    Command (m for help): p
    Disk /dev/vdb: 20 GiB, 21474836480 bytes, 41943040 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0xefabc860
    
    Device     Boot  Start     End Sectors  Size Id Type
    /dev/vdb1         2048  206847  204800  100M 83 Linux
    /dev/vdb2       206848 1230847 1024000  500M  5 Extended
    ```
    
6.  Enter `w` to save the partition information into the partition table and exit.
    
    ```
    Command (m for help): w
    The partition table has been altered.
    Calling ioctl() to re-read partition table.
    Syncing disks.
    ```
    

## Delete a partition

1.  Access the `fdisk` interface.
    
    ```
    sudo fdisk /dev/vdb
    ```
    
2.  Enter `p` to view the partition information.
    
    ```
    Command (m for help): p
    Disk /dev/vdb: 20 GiB, 21474836480 bytes, 41943040 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0xefabc860
    
    Device     Boot  Start     End Sectors  Size Id Type
    /dev/vdb1         2048  206847  204800  100M 83 Linux
    /dev/vdb2       206848 1230847 1024000  500M  5 Extended
    ```
    
3.  For example, you want to delete Partition 2. Enter `d` and then the partition number 2. The following command output indicates that Partition 2 is deleted:
    
    ```
    Command (m for help): d
    Partition number (1,2, default 2): 2
    
    Partition 2 has been deleted.
    ```
    
4.  Enter `p` to view the partition information. The following command output indicates that Partition 2 is deleted:
    
    ```
    Command (m for help): p
    Disk /dev/vdb: 20 GiB, 21474836480 bytes, 41943040 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0xefabc860
    
    Device     Boot Start    End Sectors  Size Id Type
    /dev/vdb1        2048 206847  204800  100M 83 Linux
    ```
    
5.  Enter `w` to save the partition information into the partition table and exit.
    
    ```
    Command (m for help): w
    The partition table has been altered.
    Calling ioctl() to re-read partition table.
    Syncing disks.
    ```
