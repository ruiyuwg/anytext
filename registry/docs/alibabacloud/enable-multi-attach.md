The multi-attach feature allows you to attach a single Enterprise SSD (ESSD), ESSD AutoPL disk, or Regional ESSD to multiple Elastic Compute Service (ECS) instances that support the Non-Volatile Memory Express (NVMe) protocol and reside in the same zone, to enable efficient data sharing and fast failover. The attached disk is called a shared NVMe disk.

For information about NVMe, see [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol).

## Scenarios

The multi-attach feature is suitable for the following scenarios:

-   **Data sharing**
    
    After data is written to a shared NVMe disk from one attachment node, all other attachment nodes can access it. This reduces storage costs and improves read/write performance. For example, a single NVMe-capable container image in the cloud can be read and loaded by multiple instances that run the same operating system.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3493859671/CAEQLBiBgIChg9rkihkiIGIyOWFiMDQzYWVhZDRjZjBiZGU2NjFkNWI4NTUzNmY03963382_20230830144006.372.svg)
    
-   **High-availability failover**
    
    Shared NVMe disks enable business continuity in primary/secondary deployment modes. Traditional SAN-based databases such as Oracle Real Application Clusters (RAC) and SAP HANA, as well as cloud-native high-availability databases, may encounter single points of failure (SPOFs). Shared NVMe disks help maintain high availability for cloud-based storage and networks when SPOFs occur.
    
    For example, in a database scenario, if the primary database fails, the secondary database takes over:
    
    1.  The primary database instance (Database Instance 1) fails, which causes the service to stop.
        
    2.  Run an NVMe Persistent Reservation (PR) command to prevent data from being written to Database Instance 1 and allow data to be written to the secondary database instance (Database Instance 2).
        
    3.  Restore Database Instance 2 to the same state as Database Instance 1 by using methods such as log replay.
        
    4.  Database Instance 2 takes over as the primary database instance to provide services externally.
        
    
    **Note**
    
    PR is a part of the NVMe protocol that can precisely control read and write permissions on a cloud disk to make sure that compute nodes can write data as expected. For more information, see [NVM Express Base Specification](https://nvmexpress.org/wp-content/uploads/NVM-Express-1_3c-2018.05.24-Ratified.pdf).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3493859671/CAEQORiBgMDd5pDyrhkiIDZhNzdiODFjNGVmMDRkYzFhZjFlZWQ4NjhlMTk0ZWM43963382_20230830144006.372.svg)
    
-   **Distributed data cache acceleration**
    
    Multi-attach-enabled cloud disks deliver high IOPS and throughput and can serve as a high-speed cache for storage systems with slower access patterns. For example, data lakes built on Object Storage Service (OSS) deliver high sequential read and append write throughput but have high latency and low random read/write performance. To improve access performance, attach a high-speed, multi-attach-enabled cloud disk as a cache to compute nodes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3493859671/CAEQLBiBgID8hNrkihkiIDNlYzQyNTU1ZTYxNjQyYzRhMDhkMTUzYjdiNGUwNjFk3963382_20230830144006.372.svg)
    
-   **Machine learning**
    
    After a sample is labeled and written, it is split and distributed across multiple nodes for parallel computing. The multi-attach feature allows each compute node to directly access shared storage without frequent network data transfers. This reduces data transfer latency and accelerates model training.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3493859671/CAEQLBiBgMDwhdrkihkiIDE0NTJhNjc1NzAwZjQxZGI4NDI3MTVhNjFhNGFjZmNh3963382_20230830144006.372.svg)
    

## Billing

The multi-attach feature is free of charge. You are charged only for the underlying resources, such as cloud disks and ECS instances. For more information, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db).

## Limits

The following table describes the limits on the multi-attach feature.

**Resource**

**Limit**

Cloud disks

-   You can enable multi-attach only when you separately create a cloud disk. You cannot enable or disable multi-attach for existing cloud disks.
    
-   Multi-attach is available for data disks only, not system disks.
    
-   Only pay-as-you-go [ESSDs](/help/en/ecs/user-guide/essds), [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks), and [Regional ESSDs](/help/en/ecs/user-guide/regional-essd-disks) are supported.
    
-   The total performance of all attached instances cannot exceed the maximum performance of the cloud disk.
    
-   The following operations are not supported for multi-attach-enabled cloud disks:
    
    -   Release a cloud disk when its associated ECS instance is released.
        
    -   Partition a cloud disk in the ECS console.
        
        **Note**
        
        You can log on to an instance to which the cloud disk is attached to create partitions and mount file systems. For more information, see [Initialize a data disk](/help/en/ecs/user-guide/initialize-a-data-disk/).
        
    -   Change the billing method of a cloud disk.
        
    -   Re-initialize a cloud disk.
        
    -   Change the category of a cloud disk.
        
    -   Change the ESSD performance level.
        
    -   Create a snapshot-consistent group.
        

Regions and zones

Multi-attach-capable cloud disks are available in the same regions and zones as the instance families that support the cloud disks.

ECS instances

-   Instance families must support NVMe. For information about supported instance families, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
    **Note**
    
    To query instance families and check whether an instance family supports NVMe, call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes#doc-api-Ecs-DescribeInstanceTypes) operation and view the value of the NvmeSupport parameter in the response.
    
-   A single multi-attach-enabled cloud disk can be attached to up to 16 instances.
    

Images

Images must contain NVMe drivers.

**Note**

-   To check whether a custom image supports NVMe, call the [DescribeImages](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeimages) operation and configure the `NvmeSupport` parameter in the operation.
    
-   If your custom image does not have the NVMe driver, install the NVMe driver. For more information, see [How to install NVMe driver on an existing custom image?](/help/en/ecs/adapt-linux-custom-images-to-nvme-based-system-disks)
    

## Procedure

#### Step 1: Create a multi-attach cloud disk

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click **Create Cloud Disk**.
    
4.  On the cloud disk buy page, configure the following parameters.
    
    **Note**
    
    This step describes only the parameters required to enable multi-attach. For information about other parameters, see [Create an empty data disk](/help/en/ecs/user-guide/create-a-disk#concept-jx1-tx1-ydb).
    
    **Parameter**
    
    **Description**
    
    **Attach**
    
    Select **Not Attach**.
    
    **Region and Zone**
    
    Select a region and zone that supports multi-attach.
    
    **Billing Method**
    
    Select **Pay-as-you-go**.
    
    **Cloud Disk**
    
    Select the cloud disk category, specify the capacity, and then select **Multi-attach**.
    
    ![Create a multi-attach ESSD cloud disk](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8819902371/p414663.png)
    
5.  After the disk is created, verify that **Supported** is displayed in the **Multi-attach** column on the Cloud Disk tab.
    

#### Step 2: Attach the cloud disk to multiple ECS instances

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  Obtain the ID of an NVMe-capable ECS instance to which you want to attach the cloud disk from the instance list.
    
3.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
4.  Find the disk that you want to attach and click **Attach** in the **Actions** column.
    
5.  In the **Attach Cloud Disk** dialog box, configure the following parameters:
    
    -   **Destination Instance**: Enter the ID of the ECS instance that you obtained.
        
    -   **Release Cloud Disk with Instance**: Clear this option to retain the cloud disk if an associated instance is released.
        
    
    **Note**
    
    This step describes only the parameters specific to multi-attach. For information about other parameters, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk).
    
6.  Log on to the ECS instance to partition and format the cloud disk and mount file systems. For more information, see [Initialize a data disk](/help/en/ecs/user-guide/initialize-a-data-disk/).
    
    **Important**
    
    If the multi-attach-enabled cloud disk attached to multiple ECS instances uses a single-node file system, the instances may fail to synchronize data, which leads to data inconsistency. Single-node file systems include ext3, ext4, XFS, and NTFS. To prevent data inconsistency, use a cluster file system suitable for your business scenarios. A cluster file system makes sure that written data, created files, and modified metadata are synchronized across all instances in real time. Typical cluster file systems include OCFS2, GFS2, Veritas Cluster File System (Veritas CFS), Oracle ASM Cluster File System (Oracle ACFS), and Oracle Database File System (DBFS).
    
7.  (Optional) Repeat Step 2 to Step 5 as needed to attach the cloud disk to other NVMe-capable ECS instances.
    

After the cloud disk is attached to all required instances, the Status column displays **In Use** on the Cloud Disk tab of the Block Storage (Disks) page. Move the pointer over an instance ID or name in the **Associated Instance** column to view the mount information of the cloud disk on each ECS instance.

## References

-   To modify the NVMe driver attributes of a custom image, see the [Modify the attributes of an image](/help/en/ecs/user-guide/modify-the-attributes-of-a-custom-image#section-6tk-p42-yxy) section of the "Modify the attributes and tags of an image" topic.
    
-   If a multi-attach-enabled cloud disk is resized, the new capacity may not take effect. For more information, see [Step 1: Resize a disk to extend the disk capacity](/help/en/ecs/user-guide/step-1-resize-a-disk-to-extend-its-capacity#section-1g0-m46-l2a).
