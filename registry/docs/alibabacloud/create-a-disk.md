You can create an empty subscription or pay-as-you-go data disk and attach the disk to an Elastic Compute Service (ECS) instance to increase the storage space of the instance. This topic describes how to create an empty data disk.

## Limits

-   The following table describes the limits that are imposed on cloud disks that use different billing methods.
    
    **Cloud disk**
    
    **Limits**
    
    Pay-as-you-go disk
    
    For information about the pay-as-you-go billing method, see [Pay-as-you-go](/help/en/ecs/pay-as-you-go-1#Pay-As-You-Go).
    
    Subscription cloud disk
    
    -   When you create a subscription disk, you must attach the disk to a subscription ECS instance. You cannot separately create subscription disks.
        
    -   You cannot separately detach or release subscription disks. Subscription disks expire and are released together with the ECS instances to which the disks are attached. If you want to release a subscription disk, you can convert the disk into a pay-as-you-go disk and then detach and release the pay-as-you-go disk.
        
    
-   You cannot merge block storage devices after you create them. Block storage devices are independent of each other. You cannot merge the storage space of multiple block storage devices by formatting the devices. Before you create block storage devices, we recommend that you determine the required number and capacity of block storage devices based on your business requirements.
    
-   You can create system disks only together with ECS instances. You cannot separately create system disks.
    

## Procedure

**Note**

To create an empty data disk on the cloud disk buy page, click **Create Cloud Disk** on the Cloud Disk tab of the Block Storage page or on the **Block Storage** tab of the Instance Details page of an ECS instance. Alternatively, click **Add Data Disk** in the **Data Disk** section on the instance buy page to create data disks together with ECS instances. This section describes how to create an empty data disk on the cloud disk buy page.

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
2.  Click **Create Cloud Disk**.
    
3.  On the cloud disk buy page, configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Attach**
    
    Specify whether to attach the cloud disk to an ECS instance.
    
    -   **Not Attach**: creates a cloud disk without attaching the disk to an ECS instance.
        
        If you select this option, you can create only pay-as-you-go cloud disks. If you create a cloud disk that is not a Regional Enterprise SSD (ESSD), you can attach the cloud disk only to an ECS instance that resides in the same zone. Proceed with caution when you configure the **Region** and **Zone** parameters.
        
    -   **Attach to ECS Instance**: creates a cloud disk and attaches the disk to a specific ECS instance. If the cloud disk is not a Regional ESSD, you can attach the disk only to an ECS instance that resides in the same zone. If the cloud disk is a Regional ESSD, you can attach the disk to an ECS instance in the same region regardless of the zone. For information about the limits of Regional ESSDs, see [Limits](/help/en/ecs/user-guide/regional-essd-disks#e6a30ae806qud).
        
        If you select this option, you must select a region and then select an ECS instance from the ECS Instance drop-down list.
        
    
    **Billing Method**
    
    Specify the billing method of the cloud disk.
    
    -   **Pay-as-you-go**: A pay-as-you-go cloud disk can be attached to a subscription or pay-as-you-go ECS instance.
        
    -   **Subscription**: A subscription cloud disk can be attached only to a subscription ECS instance.
        
    
    **Cloud Disk**
    
    Select a disk category and specify the disk capacity.
    
    Take note of the following parameters:
    
    -   **Performance Level**: You can specify performance levels only for ESSDs. You can select a performance level based on the capacity of the ESSD. The performance of an ESSD varies based on the capacity and performance level of the ESSD. For more information, see [ESSDs](/help/en/ecs/user-guide/essds#concept-727754).
        
    -   **Create from Snapshot**: Select a snapshot to create cloud disks. The created cloud disks contain data from the selected snapshot. For more information, see [Create a data disk from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#concept-yyn-11b-ydb).
        
    -   **Multi-attach**: You can select this option to enable the multi-attach feature for ESSD-series disks. This way, you can attach each ESSD-series disk to multiple ECS instances in the same zone. For more information, see [Attach a cloud disk to multiple ECS instances (multi-attach)](/help/en/ecs/user-guide/enable-multi-attach).
        
    -   **Encryption**: Specify whether to encrypt the cloud disk. If you select this option, data stored on the created cloud disk is automatically encrypted. For more information, see [Disk encryption](/help/en/ecs/user-guide/encryption-overview).
        
    -   **Enable Performance Provision** and **Enable Performance Burst**: You can select these options to enable the performance provision and performance burst features when you create ESSD AutoPL disks. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).
        
    -   Release settings: If you set the Attach parameter to **Attach to ECS Instance** and the Billing Method parameter to **Pay-as-you-go**, you can select the release options to automatically release the created cloud disk when the associated ECS instance is released and automatically delete the automatic snapshots of the created cloud disk when the disk is released.
        
    
4.  Confirm the configurations and fees and then follow the on-screen instructions to create the cloud disk.
    
    After a cloud disk is created, you can view the disk on the Cloud Disk tab. The cloud disk cannot be directly used on ECS instances.
    
5.  Perform operations on the cloud disk.
    
    **Important**
    
    To use the created cloud disk, you must attach or initialize the disk based on your business scenario.
    
    **Scenario**
    
    **What to do next**
    
    You set the Attach parameter to **Attach to ECS Instance** when you created the cloud disk.
    
    To initialize the disk, perform the following operations:
    
    -   If the disk is attached to a Linux ECS instance, perform the operations described in [Initialize a data disk (Linux)](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance).
        
    -   If the disk is attached to a Windows ECS instance, perform the operations described in [Initialize a data disk on a Windows instance](/help/en/ecs/user-guide/initialize-a-data-disk-up-to-2-tib-in-size-on-a-windows-instance).
        
    
    You set the Attach parameter to **Not Attach** when you created the cloud disk.
    
    To attach and initialize the disk, perform the following steps:
    
    Step 1: Attach the disk to an ECS instance. For more information, see [Attach a data disk](/help/en/ecs/user-guide/attach-a-data-disk).
    
    Step 2: Initialize the disk.
    
    -   If the disk is attached to a Linux ECS instance, perform the operations described in [Initialize a data disk (Linux)](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance).
        
    -   If the disk is attached to a Windows ECS instance, perform the operations described in [Initialize a data disk on a Windows instance](/help/en/ecs/user-guide/initialize-a-data-disk-up-to-2-tib-in-size-on-a-windows-instance).
        
    

## References

-   You can call the [CreateDisk](/help/en/ecs/api-createdisk#doc-api-Ecs-CreateDisk) operation to create a data disk.
    
-   You can call the [DescribeDisks](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describedisks) operation to query the information of disks that you created.
