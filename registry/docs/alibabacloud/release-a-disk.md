If you no longer need a disk and want to stop billing for it, you can release the disk. When a disk is released, the disk and its data are deleted, and billing for the disk stops. This topic describes how to manually release a disk or configure a disk to be automatically released with its associated instance.

## Disk release methods

You can manually release a disk or configure the disk to be automatically released with its associated instance. If you enable the Release with Instance feature for a disk, the disk is automatically released when you release the associated ECS instance.

-   System disk:
    
    -   Can only be released with its instance.
        
    -   By default, the Release with Instance feature is enabled when you create a system disk. You can disable this feature. If you disable the feature, the system disk is detached and retained as a data disk when the instance is released.
        
-   Data disk:
    
    -   Can be manually released or automatically released with its associated instance.
        
    -   By default, the Release with Instance feature is disabled when you create a pay-as-you-go data disk separately. In other cases, the feature is enabled by default. You can disable this feature.
        

## Prerequisites

-   When you release a disk, its data is permanently deleted. Before you release the disk, create a snapshot to back up its data. For more information, see [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
    
-   To manually release a disk, the disk must be in the **Available** state.
    
-   Confirm whether to retain the automatic snapshots of the disk. If the **Release with Disk** property is enabled for automatic snapshots, the automatic snapshots are released when the disk is released. For more information, see [Enable release with disk for automatic snapshots](/help/en/ecs/user-guide/enable-or-disable-an-automatic-snapshot-policy#1abb5dfb98d4a).
    
    **Note**
    
    Manual snapshots are not affected by disk releases.
    
-   If you want to configure a disk to be released with its associated instance, make sure that the multi-attach feature is disabled for the disk.
    
    **Note**
    
    The Release with Instance feature is not supported for disks for which the multi-attach feature is enabled. For more information, see [Enable the multi-attach feature for a disk](/help/en/ecs/user-guide/enable-multi-attach#task-2085284).
    

## **Manually release a disk**

The following steps describe how to manually release a data disk on the Disks page.

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the disk that you want to release. The disk must be in the **Available** state. In the **Operation** column, choose  **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6895777861/p479245.png)** > **Release**.
    
    **Warning**
    
    When you release a disk, its data is permanently deleted. [Create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb) to back up data before you release the disk. Creating snapshots incurs fees. For more information about the billing of snapshots, see [Snapshot pricing](/help/en/ecs/snapshots-1).
    
4.  In the **Release Disk** dialog box, confirm the information about associated snapshots, select **I understand that the selected resources and their associated resources will be released, and I am aware of the related data risks.**, and then click **OK**.
    

## **Release a disk with its instance**

You can enable or disable the Release with Instance feature for an existing disk.

**Note**

You can also enable or disable the Release with Instance feature for a system disk or data disk when you purchase a new instance or disk.

### **Impact of release**

**Disk type**

**Enable** **Release Disk With Instance**

**Disable** **Release With Instance**

System disk

The disk belongs to the source instance. If release with instance is enabled, the system disk is automatically released with the source instance, even if the disk is detached or attached to another instance as a data disk.

When the instance is released, the disk is detached and retained as a data disk.

Data disk

When the ECS instance is released, the disk is automatically released with the currently attached instance.

**Note**

If the disk is in the **Available** state, the disk is not affected by the instance release.

-   Subscription disk: When the instance expires and is released, the disk is automatically converted to a pay-as-you-go disk and is retained.
    
-   Pay-as-you-go disk: The disk is retained when the instance is released.
    

**Note**

-   To prevent failures when you retain disks in the Chinese mainland region, your account must have completed identity verification.
    
-   The retained disk is billed on a pay-as-you-go basis. You can view the billing details based on the disk ID in the User Center.
    

### **Procedure**

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the disk that you want to modify. In the **Operation** column, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6895777861/p479245.png)** > **Edit Attribute**.
    
4.  In the **Edit Attribute** dialog box, enable or disable **Release Disk with Source Instance**, and then click **Confirm**.
    

## References

You can also call the following API operations:

-   [DeleteDisk](/help/en/ecs/api-deletedisk#doc-api-Ecs-DeleteDisk): Releases a pay-as-you-go data disk.
    
-   [ModifyDiskAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifydiskattribute): Sets whether to release a disk with its associated instance.
