Local disks reside on the physical machines that host the associated Elastic Compute Service (ECS) instances of the disks, and provide ECS instances access to local storage. Local disks are physically attached to physical machines and deliver cost-effectiveness, high random IOPS, high throughput, and low latency. Local disks are suitable for scenarios that require high-performance storage, such as cache systems that involve a large number of accesses. This topic describes the categories and performance specifications of local disks.

**Warning**

The durability of data stored on a local disk is determined by the reliability of the associated physical machine. The risk of a single point of failure (SPOF) exists. A SPOF in a physical machine may affect multiple running instances. Data stored on local disks may be lost when a hardware failure occurs on their associated physical machine. We recommend that you store only temporary data on local disks.

You can improve the disaster recovery and backup capabilities of your local disk data with the following methods, however it is difficult to completely eliminate the risk of data loss.

-   Use Cloud Backup to back up and restore data and implement disaster recovery. Cloud Backup is a unified platform that is developed by Alibaba Cloud for backup and disaster recovery. It supports file and file directory level backups and restoration for ECS instances.
    
-   Back up data from a local disk to Object Storage Service (OSS). Alibaba Cloud offers multiple backup methods for data in OSS.
    
-   Back up data from a local disk to a cloud disk, which implements cross-zone or cross-region disaster recovery of disks based on async replication capabilities.
    

For more information, see [Back up data on a local disk](/help/en/ecs/user-guide/backup-local-disk-data).

## Limits

-   Local disks can be used once they have been initialized.
    
    After you purchase an ECS instance that has local disks attached, log on to the instance to initialize the local disks. For more information, see [Initialize a data disk](/help/en/ecs/user-guide/initialize-a-data-disk/).
    
-   Local disks do not support the following operations:
    
    -   Create a separate local disk.
        
    -   Use a snapshot to create a local disk.
        
    -   Attach a local disk.
        
    -   Detach and release a local disk.
        
    -   Resize a local disk.
        
        **Important**
        
        Do not resize local disks. If you resize local disks, the partition table and file system structure on the disks may be corrupted, which affects business continuity.
        
    -   Re-initialize a local disk.
        
    -   Create a snapshot for a local disk.
        
    -   Use a snapshot to roll back a local disk.
        

## Local disk categories

**Note**

This topic provides information about local disks that are purchased together with ECS instances. For information about the performance of instance families that are equipped with local SSDs and big data instance families, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

Local disks are suitable for scenarios that require high storage I/O performance, mass storage, and high cost efficiency. Alibaba Cloud provides two categories of local disks. The following table describes the categories.

**Category**

**Supported instance family**

**Scenario**

Local non-volatile memory express (NVMe) SSD

The following instance families use local NVMe SSDs:

-   Instance families equipped with local SSDs: i4, i4g, i4r, i3, i3g, i2, i2g, i2ne, i2gne, and i1
    
-   GPU-accelerated compute-optimized instance family: gn5
    

Instance families equipped with local NVMe SSDs are suitable for the following scenarios:

-   I/O-intensive applications that require high I/O performance and low latency, such as online gaming, e-commerce, live streaming, and media
    
-   Applications that require high storage I/O performance and a high-availability architecture at the application layer, such as NoSQL databases (including Cassandra, MongoDB, and HBase), Massively Parallel Processing (MPP) data warehouses, and distributed file systems
    

Local SATA HDD

The d3s, d2c, d2s, d1ne, and d1 big data instance families use local SATA HDDs.

Local SATA HDDs are the preferred storage media for industries such as Internet and finance that have high requirements for big data computing, storage, and analytics. These disks are suited for mass storage and offline computing scenarios and can meet the high requirements of distributed computing services such as Hadoop in terms of storage performance, storage capacity, and internal network bandwidth.

## Performance of local disks

For information about the performance of local disks, see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance).

## Billing

Fees for local disks are included in the fees for the instances to which the disks are attached. For more information, see [Subscription](/help/en/ecs/subscription#subs-china) and [Pay-as-you-go](/help/en/ecs/pay-as-you-go-1#Pay-As-You-Go).

## Disk initialization sequence

When you use an image to create an instance that has local disks attached, disks on the created instance are initialized based on the following rules:

-   Rule 1: If the image does not contain data disk snapshots, the local disks are initialized prior to the cloud disks that are created together with the instance.
    
-   Rule 2: If the image contains data disk snapshots, the data disks created from the snapshots are initialized in the order of data disk device names that are recorded in the image. The other disks on the instance are initialized based on Rule 1.
    

The following section provides an example on how disks are initialized based on Rule 2. In this example, an instance created from a Linux image that contains two data disk snapshots is used.

-   If the data disk device names recorded in the image are /dev/xvdb and /dev/xvdc, Alibaba Cloud first allocates /dev/xvdb and /dev/xvdc as device names to the data disks created from the image. The system disk is initialized first. Then, the data disks are initialized in the following sequence: data disk 1 created from the image, data disk 2 created from the image, local disk 1, local disk 2, cloud disk 1, cloud disk 2, and so on. The following figure shows the sequence in which the disks are initialized.![规则二原理图1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2672909951/p39625.png)
    
-   If the data disk device names recorded in the image are /dev/xvdc and /dev/xvdd, Alibaba Cloud first allocates /dev/xvdc and /dev/xvdd as device names to the data disks created from the image. Then, Alibaba Cloud allocates other available device names in alphabetic order to the local disks first and then to other disks. The system disk is initialized first. Then, the data disks are initialized in the following sequence: local disk 1, data disk 1 created from the image, data disk 2 created from the image, local disk 2, cloud disk 1, cloud disk 2, and so on. The following figure shows the sequence in which the disks are initialized.![规则二原理图2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2672909951/p39626.png)
    

## Lifecycle

A local disk shares the same lifecycle as the instance to which it is attached. For more information, see [Instance lifecycle](/help/en/ecs/user-guide/instance-lifecycle#concept-zg1-gv2-5db).

## Impacts of instance operations on data stored on local disks

The following table describes the impacts of instance operations on data stored on local disks.

**Instance operation**

**Data stored on local disks**

**Local disk**

Restart the operating system, restart an instance in the ECS console, or forcefully restart an instance.

Retained

Retained

Shut down the operating system, stop an instance in the ECS console, or forcefully stop an instance.

Retained

Retained

Automatically recover an instance. For more information about instance recovery methods, see [Modify instance maintenance attributes](/help/en/ecs/user-guide/modify-instance-maintenance-attributes).

Erased

Retained

[Release an instance](/help/en/ecs/user-guide/release-an-instance#concept-jfp-wbf-5db)

Erased

Released

A subscription instance is stopped on expiration and has not been released, or a pay-as-you-go instance is stopped due to an overdue payment and has not been released.

Retained

Retained

A subscription instance is stopped on expiration and then released, or a pay-as-you-go instance is stopped due to an overdue payment and then released.

Erased

Released

Manually renew an expired subscription instance.

Retained

Retained

Reactivate a pay-as-you-go instance that is stopped due to an overdue payment.

Retained

Retained

## References

-   You can test the bandwidth, IOPS, and latency of local disks to verify the benchmark performance data provided by Alibaba Cloud and the Quality of Service (QoS) of local disks. For more information, see the [Commands used to test the performance of local disks](/help/en/ecs/user-guide/test-the-performance-of-block-storage-devices#section-f8v-673-2po) section of the "Test the performance of block storage devices" topic.
    
-   For information about retired local SSDs, see [Previous-generation disks - local SSDs](/help/en/ecs/user-guide/previous-generation-disks-local-ssds).
    
-   For information about how to handle system events of instances that are equipped with local disks, see [O&M scenarios and system events for instances equipped with local disks](/help/en/ecs/user-guide/operations-and-maintenance-scenarios-and-system-events-for-instances-equipped-with-local-disks#concept-x5k-24p-tgb).
