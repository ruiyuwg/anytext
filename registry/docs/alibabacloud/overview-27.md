After you attach a new empty data disk to an Elastic Compute Service (ECS) instance, you must create partitions on the disk and mount file systems to the disk before you can use the disk to store data. This topic describes the scenarios in which cloud disks need to be initialized and how to initialize a cloud disk. This topic also describes the partition formats and device names of cloud disks.

## Scenarios

You can initialize only the following new data disks that do not contain data:

-   Data disks that are created together with ECS instances that run Linux operating systems
    
-   Empty data disks that are separately created
    

**Note**

-   You do not need to initialize the system disks that are created together with ECS instances or the data disks that are created together with ECS instances that run Windows operating systems. The disks are automatically partitioned and file systems are automatically mounted to the disks.
    
-   In most cases, a disk created from a snapshot contains data. In this case, you need to only `mount` file systems on the disk or bring the disk **online**. For more information, see [Step 8](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#b9940e383besa) in the "Create a data disk from a snapshot" topic.
    
-   You do not need to initialize a disk when you test block storage performance or if applications, such as databases, directly perform operations on the disk, because no additional file systems are required.
    

## Procedure

1.  Determine whether a disk needs to be partitioned.
    
    -   If the disk needs to be partitioned, you must perform complete initialization operations on the disk, including creating partitions and mounting file systems.
        
    -   If the disk does not need to be partitioned, you do not need to create partitions on the disk. On a Linux instance, you need to only perform [Step 3: Create and mount file systems](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance#c4eeb9b8ad55m) on the disk.
        
2.  Different sizes of cloud disks support different partition formats due to the limitations of partition formats. Select an initialization method based on the size of the cloud disk that you want to initialize.
    
    **Note**
    
    The maximum size of a partition and the maximum number of partitions per disk vary based on the partition format. For more information, see the [Partition formats](#section-tf0-e9p-ki2) section of this topic.
    
    #### **Initialize a data disk whose size does not exceed 2 TiB**
    
    **Operating system**
    
    **Initialization tool**
    
    **Partition format**
    
    **Common file system**
    
    **References**
    
    Linux
    
    -   Partition: Parted or fdisk
        
    -   File system: e2fsprogs
        
    
    -   GUID Partition Table (GPT) (recommended)
        
    -   Master Boot Record (MBR)
        
    
    -   Extended File System 4 (Ext4)
        
    -   eXtensible File System (XFS)
        
    
    [Initialize a data disk on a Linux instance](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance#concept-jl1-qzd-wdb)
    
    Windows
    
    Disk Management
    
    -   GPT (recommended)
        
    -   MBR
        
    
    New Technology File System (NTFS)
    
    [Initialize a data disk on a Windows instance](/help/en/ecs/user-guide/initialize-a-data-disk-up-to-2-tib-in-size-on-a-windows-instance#concept-a3f-mg2-wdb)
    
    #### **Initialize a data disk whose size exceeds 2 TiB**
    
    **Operating system**
    
    **Initialization tool**
    
    **Partition format**
    
    **Common file system**
    
    **References**
    
    Linux
    
    -   Partition: Parted
        
    -   File system: e2fsprogs
        
    
    GPT
    
    -   Ext4
        
    -   XFS
        
    
    [Initialize a data disk on a Linux instance](/help/en/ecs/user-guide/initialize-a-data-disk-that-is-larger-than-2-tib-in-size#section-3ht-26h-foc)
    
    Windows
    
    Disk Management
    
    GPT
    
    NTFS
    
    [Initialize a data disk on a Windows instance](/help/en/ecs/user-guide/initialize-a-data-disk-that-is-larger-than-2-tib-in-size#section-enm-psc-ydb)
    

## Partition formats

Data disks support the MBR and GPT partition formats. The following table describes the differences between the two partition formats.

**Partition format**

**Maximum partition size**

**Number of partitions**

**Description**

MBR

2 TiB

An MBR disk can have one of the following groups of partitions:

-   Four primary partitions
    
-   Three primary partitions and one extended partition
    

-   MBR partitions are classified into primary, extended, and logical partitions.
    
-   Before you can use the extended partition, you must divide the partition into logical partitions. You can create an unlimited number of logical partitions in the extended partition.
    

GPT

18 EiB (1 EiB = 1,048,576 TiB)

**Note**

An Alibaba Cloud GPT disk can be up to 32 TiB in size.

-   Linux: unlimited
    
-   Windows: 128
    

All partitions are primary partitions. No extended partitions or logical partitions exist.

**Important**

An MBR partition can be up to 2 TiB in size. A GPT partition can be up to 18 EiB in size. If the size of your data disk exceeds 2 TiB or if you want to resize your data disk to larger than 2 TiB, you must use the GPT partition format. If you partition the data disk in the MBR format, you cannot extend the disk to a size larger than 2 TiB. If you extend the data disk in the MBR partition format to a size larger than 2 TiB, you may need to repartition and reformat the disk, which causes data loss.

## Device names of data disks on Linux instances

By default, data disks that are attached to Linux instances are automatically assigned device names based on the following naming conventions:

-   I/O optimized instance:
    
    -   The device names of data disks that are attached by using the Non-Volatile Memory Express (NVMe) protocol are in the /dev/nvmeXn1 format. Examples: /dev/nvme1n1, /dev/nvme2n1, and /dev/nvme3n1. For information about disks that support the NVMe protocol, see [NVMe disks](/help/en/ecs/user-guide/nvme-disks#concept-2085746).
        
    -   The device names of data disks that are attached by using protocols other than the NVMe protocol are in the /dev/vd\[b-z\] format. Examples: /dev/vdb, /dev/vdc, and /dev/vdd.
        
-   Non-I/O optimized instances: The device names of data disks that are attached to non-I/O optimized Linux instances are in the /dev/xvd\[b-z\] format. Examples: /dev/xvdb, /dev/xvdc, and /dev/xvdd.
