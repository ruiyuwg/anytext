You can create a data disk from a snapshot. The data on the data disk is the same as the data on the source disk when the snapshot was created. Snapshot-based disk creation allows you to quickly replicate cloud disks in the same zone or across zones for environment cloning or data backup. This topic describes how to create a data disk from a snapshot.

## Limits

-   You cannot create snapshots for local disks or elastic ephemeral disks. Therefore, you cannot create local disks or elastic ephemeral disks from snapshots.
    
-   Block storage devices are independent of each other. After you create block storage devices, you cannot merge the storage space of the block storage devices by formatting them. Before you create block storage devices, we recommend that you determine the required number and capacity of the block storage devices based on your business requirements.
    
-   Cloud disks created from system disk snapshots can be used only as data disks. You can use a snapshot of a system disk to roll back the system disk and restore disk data. For more information, see [Roll back a disk by using a snapshot](/help/en/ecs/user-guide/roll-back-a-disk-by-using-a-snapshot-1).
    

## Prerequisites

-   A snapshot is created for a cloud disk and the snapshot ID is obtained. For more information, see [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
    
-   The ID of an Elastic Compute Service (ECS) instance is obtained if you want to attach the data disk to be created from a snapshot to the instance.
    

## Procedure

**Note**

The following section describes how to create a cloud disk from a snapshot on the Snapshots page in the Elastic Compute Service (ECS) console. You can perform the same operation on the cloud disk buy page or ECS instance buy page. On the cloud disk buy page, click **Create from Snapshot** in the **Storage** section. On the ECS instance buy page, click **Create from Snapshot** in the **Data Disk** section.

1.  Go to [ECS console - Snapshots](https://ecs.console.alibabacloud.com/snapshot).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the snapshot from which you want to create a cloud disk. In the **Actions** column, click **Create Disk**.
    
4.  On the cloud disk buy page, configure the parameters described in the following table.
    
    **Parameter or section**
    
    **Description**
    
    **Attach**
    
    Specifies whether to attach the new disk to an instance immediately.
    
    -   **Do Not Attach**: Creates only the disk without attaching it to an ECS instance.
        
        If you select this option, you can only create pay-as-you-go disks. Except for regional Enterprise SSDs (ESSDs), other disks must be attached to an ECS instance in the same zone. Select the **Region** and **Zone** carefully.
        
    -   **Attach to ECS Instance**: Creates the disk and attaches it to a specified ECS instance in the same zone. This does not apply to regional ESSDs, which store data across multiple zones and can be attached to any supported ECS instance in those zones. For more information about the limits, see [Limits](/help/en/ecs/user-guide/regional-essd-disks#e6a30ae806qud).
        
        If you select this option, you must select a destination region and an ECS instance.
        
    
    **Billing Method**
    
    Set the billing method for the disk.
    
    -   **Pay-as-you-go**: Can be attached to subscription or pay-as-you-go ECS instances.
        
    -   **Subscription**: Must be attached to a subscription ECS instance.
        
    
    **Cloud Disk**
    
    -   The snapshot information is automatically populated.
        
    -   Select a disk category and specify a disk capacity.
        
        **The disk capacity must be greater than or equal to the size of the snapshot of the historical data disk.**
        
        **Important**
        
        -   If the capacity of the new disk is greater than the size of the snapshot of the source disk, you must repartition the new disk or extend partitions and file systems on the cloud disk to ensure that the excess disk capacity can be used.
            
        -   If the snapshot of the source disk is less than 2,048 GiB in size and you want to specify a disk capacity that is greater than 2,048 GiB, check whether the source disk of the snapshot uses the GUID Partition Table (GPT) partition style. You can run the `fdisk -lu` command and determine the partition style of a disk based on the value of the `Disk label type` parameter in the command output. If the parameter value is `gpt`, the disk uses the GPT partition style. If the source disk does not use the GPT partition style, we recommend that you specify a disk capacity that is less than 2,048 GiB to prevent data loss during partitioning. For more information, see [Initialize a data disk (Linux)](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance).
            
        
    
    -   **Performance**: Only enterprise SSDs can have a performance level (PL). You can select a PL based on the ESSD capacity to achieve different single-disk performance. For more information, see [Enterprise SSDs](/help/en/ecs/user-guide/essds#concept-727754).
        
    -   **Multi-attach**: When you create an ESSD, you can enable the multi-attach feature. This lets you attach a single ESSD to multiple instances in the same zone. For more information, see [Multi-attach](/help/en/ecs/user-guide/enable-multi-attach).
        
    -   **Encryption**: Select whether to encrypt the disk. If you enable encryption, data stored on the disk is automatically encrypted. For more information, see [Disk encryption](/help/en/ecs/user-guide/encryption-overview).
        
    -   **Provisioned Performance** and **Enable Performance Burst**: For an ESSD AutoPL disk, you must set the provisioned performance and enable performance burst. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).
        
    -   Release Settings: When you select **Attach to ECS Instance** and the disk billing method is **Pay-as-you-go**, you can set whether the disk and its automatic snapshots are released with the instance.
        
    
5.  Confirm the configurations and costs and follow the on-screen instructions to complete the purchase.
    
    After a cloud disk is created, you can view the disk on the Cloud Disk tab. However, the cloud disk cannot be directly used on ECS instances.
    
6.  Perform operations on the created cloud disk.
    
    **Important**
    
    Cloud disks created from snapshots already have partitions and file systems and do not need to be initialized. You need to only attach the cloud disk to an ECS instance and mount the file systems of the disk in the instance operating system. This way, the file systems can be recognized by the instance operating system and the cloud disk can be used for data storage.
    
    **Scenario**
    
    **What to do next**
    
    You set the Attach parameter to **Attach to ECS Instance** when you created the cloud disk.
    
    1.  `Mount` the partitions of the cloud disk or bring the cloud disk **online**.
        
        -   **Linux instance**
            
            1.  Connect to the ECS instance to which the cloud disk is attached and run the following command to `mount` a partition of the disk:
                
                ```
                sudo mount <Disk partition name> <Mount point>
                ```
                
                -   `<Disk partition name>`: Specify the name of the partition. Run the `sudo fdisk -lu` command to query the partition name. Example: `/dev/vdc`.
                    
                -   `<Mount point>`: Specify an existing directory or run the `sudo mkdir -p <New directory>` command to create a new directory as the mount point. Example: `sudo mkdir -p /data`.
                    
                
                Sample `mount` command: `sudo mount /dev/vdc /data`.
                
            2.  Write the new partition information to the `/etc/fstab` file. This way, the partition is automatically mounted upon system startup. For more information, see the [Initialize a data disk (Linux)](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance#section-pa2-lan-ybg) section of the "Initialize a data disk on a Linux instance" topic.
                
        -   **Windows instance**
            
            1.  Connect to the ECS instance to which the cloud disk is attached, click the ![开始图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8116265661/p467093.png) icon, and then select **Disk Management**.
                
            2.  Find the cloud disk that you want to manage, right-click a blank area, and then select **Online**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6949924271/p630888.png)
                
    2.  (Conditionally required) If the cloud disk created from a snapshot is attached to the Linux ECS instance to which the source disk of the snapshot is attached, the UUID of the new cloud disk conflicts with the UUID of the source disk. You must change the UUID of the new cloud disk. For more information, see [Change the UUID of a disk](/help/en/ecs/user-guide/modify-the-uuid-of-a-disk#task-2023818).
        
    3.  (Conditionally required) If the cloud disk created from a snapshot is larger than the source disk of the snapshot in size, you must extend the partitions and file systems of the cloud disk before you can use the cloud disk.
        
        -   If the cloud disk is attached to a Linux instance, see [Extend the partitions and file systems of disks on a Linux instance](/help/en/ecs/user-guide/extend-the-partitions-and-file-systems-of-disks-on-a-linux-instance).
            
        -   If the cloud disk is attached to a Windows instance, see [Extend the partitions and file systems of disks on Windows instances](/help/en/ecs/user-guide/extend-the-partitions-and-file-systems-of-a-disk-on-a-windows-instance).
            
    4.  (Optional) Configure the partitions of the disk to automatically mount on instance startup. For more information, see the [(Optional) Step 4: Configure the disk partition to automatically mount on instance startup](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance#section-pa2-lan-ybg) section of the "Initialize a data disk on a Linux instance" topic.
        
    
    You set the Attach parameter to **Not Attach** when you created the cloud disk.
    
    Attach the cloud disk to an ECS instance and mount the file systems of the cloud disk in the operating system of the instance. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
    

## **FAQ**

#### **How do I restore the data of an ECS instance from a disk created from a snapshot when an exception occurs on the instance after an attack or intrusion?**

**Note**

-   If you created a snapshot for the system disk of the instance before an attack or intrusion occurred, you can use the snapshot to roll back the system disk and restore the disk to the state when the snapshot was created. For more information, see [Roll back a disk by using a snapshot](/help/en/ecs/user-guide/roll-back-a-disk-by-using-a-snapshot-1).
    
-   The snapshot created after an attack or intrusion occurred may contain malicious code or tampered data. The following operations are only for reference. You can perform the related operations based on your actual business deployment.
    

1.  Create a snapshot for the system disk to back up data. For more information, see [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot).
    
2.  Re-initialize the system disk and clear data from the system disk. For more information, see [Re-initialize a system disk](/help/en/ecs/user-guide/re-initialize-a-system-disk).
    
3.  Perform the operations that are described in this topic to create a temporary pay-as-you-go cloud disk from the snapshot that you created.
    
4.  Attach the temporary cloud disk that you created to the ECS instance as a data disk. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
    
5.  Copy the business data from the temporary cloud disk to the system disk of the ECS instance and redeploy the business, including applications and configurations, based on your business scenario.
    
6.  Detach and release the temporary cloud disk. For more information, see [Detach a data disk](/help/en/ecs/user-guide/detach-a-data-disk) and [Release a disk](/help/en/ecs/user-guide/release-a-disk).
    

## References

You can call the following operations:

-   [CreateDisk](/help/en/ecs/api-createdisk#doc-api-Ecs-CreateDisk): creates a pay-as-you-go or subscription data disk.
    
-   [DescribeDisks](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedisks): queries information about created data disks.
