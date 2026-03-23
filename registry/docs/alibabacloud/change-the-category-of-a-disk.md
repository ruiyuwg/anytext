To resolve performance bottlenecks or manage costs from business growth, you can change a disk's category online without service interruption.

## Usage notes

-   **Unsupported block storage**: basic disk, elastic ephemeral disk, or local disk.
    
-   **Instance type limitations**: You cannot change the disk category if the disk's attached instance type does not support the target category.
    
-   **Disk status limitations**:
    
    -   For a data disk, its status must be **In Use** or **Unattached**.
        
    -   For a system disk, its status must be **In Use**.
        
-   **Disk configuration limitations**: You cannot change the category of a disk that has the multi-attach feature enabled.
    
    > Navigate to the [ECS console - Elastic Block Storage - Disks](https://ecs.console.alibabacloud.com/disk/) page. Click the ID of the target disk to view its details page. The feature is enabled if the **Multi-attach** status is **Supported**.
    

## Procedure

**Important**

To protect your data, [create a snapshot](/help/en/ecs/user-guide/create-a-snapshot) of the disk before changing its category.

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk/). In the top navigation bar, select the target region and resource group.
    
2.  In the **Actions** column for the disk you want to modify, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4124977961/p494236.png)** > **Change Category**.
    
3.  In the **Change Category** dialog box, select the **New Disk Category**.
    
    -   **Locally Redundant disks**: Use a data redundancy mechanism within a single Availability Zone (AZ) to store data redundantly on different devices in the same AZ. This design protects against hardware failures and ensures data durability and availability.
        
    -   **Zone-redundant disks**: In regions with three or more AZs, provide disaster recovery against single-AZ failures by storing data redundantly across different AZs. This ensures that data remains accessible even if a single AZ becomes unavailable.
        
    
    #### Enterprise SSDs (ESSDs)
    
    These are locally redundant disks.
    
    -   A performance level (PL) 0 ESSD can be directly changed to one of the following types:
        
        -   ESSD PL1, PL2, or PL3
            
        -   ESSD AutoPL disk
            
        -   Regional ESSD
            
            > You can only change a disk to a Regional ESSD if it is a data disk.
            
    -   Changes for PL1, PL2, and PL3 ESSDs depend on the billing method:
        
        -   For pay-as-you-go disks:
            
            -   You can change between PL1, PL2, and PL3 performance levels.
                
            -   You can directly change the disk to an ESSD AutoPL disk.
                
            -   Only PL1 ESSDs can be directly changed to Regional ESSDs.
                
                > You can only change a disk to a Regional ESSD if it is a data disk.
                
        -   For subscription disks, you can only upgrade to a higher performance level:
            
            -   Change ESSD PL1 to ESSD PL2.
                
            -   Change ESSD PL1 to ESSD PL3.
                
            -   Change ESSD PL2 to ESSD PL3.
                
            -   Change ESSD PL1 to an ESSD AutoPL disk.
                
            -   Change an ESSD PL1 data disk to a Regional ESSD.
                
    
    #### ESSD AutoPL disks
    
    These are locally redundant disks. You can directly change them to one of the following types:
    
    -   ESSD AutoPL disks
        
        During the change, you can modify the provisioned performance but not the performance burst. You can [adjust](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk#section-bh2-kn8-5bm) the performance burst after the change is complete.
        
    -   Regional ESSDs
        
        -   When changing to a Regional ESSD, you must [disable provisioned performance](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk#section-k98-0hy-czs) and [performance burst](/help/en/ecs/user-guide/modify-the-performance-configurations-of-an-essd-autopl-disk#section-bh2-kn8-5bm).
            
            > Regional ESSDs and ESSD AutoPL disks have different performance limits. Disabling Provisioned Performance and performance burst may affect your services. Before you proceed, review the Block Storage performance documentation to ensure the new configuration meets your business needs.
            
        -   You can only change a disk to a Regional ESSD if it is a data disk.
            
    
    #### Regional ESSDs
    
    These are zone-redundant disks.
    
    1.  Select the zone for the change.
        
        -   If the disk status is **In Use**, this option is unavailable (grayed out). The AZ of the new locally redundant disk will be the same as the AZ of the instance to which it is attached.
            
        -   If the disk status is **Unattached**, the new locally redundant disk can be attached only to instances in the selected AZ.
            
    2.  Select the **New Disk Category**.
        
        You can directly change a Regional ESSD to:
        
        -   ESSD PL1, PL2, or PL3
            
        -   ESSD AutoPL disk
            
    
    #### **ESSD Entry disks**
    
    These are locally redundant disks. You can directly change them to one of the following types:
    
    -   ESSD PL0, PL1, PL2, or PL3
        
    -   ESSD AutoPL disk
        
    -   Zone-redundant ESSD
        
        > A disk can be changed to a zone-redundant ESSD only if it is used as a data disk.
        
    
    #### Ultra disks
    
    These are locally redundant disks. You can directly change them to one of the following types:
    
    -   Standard SSDs
        
    -   ESSD Entry disks
        
        > These disks can only be attached to **General Purpose (U-series)** and **e, economy instance family** instance types.
        
    -   ESSD PL0, PL1, PL2, or PL3
        
    -   ESSD AutoPL disks
        
    
    #### **Standard SSDs**
    
    These are locally redundant disks. You can directly change them to one of the following types:
    
    -   ESSD PL1, PL2, or PL3
        
    -   ESSD AutoPL disk
        
    
4.  Review the fees and click **Confirm**.
    
5.  Verify the result.
    
    Go to the [ECS console - Task Management](https://ecs.console.alibabacloud.com/task/region/) page. After the **Modify Disk Category** task is **Complete**, return to the disk list to confirm that the change was successful.
    
    > The time required depends on the disk's throughput, storage capacity, and original category. Please be patient.
    
6.  (Conditional) To ensure an ESSD PL3 disk reaches its optimal performance after a category change, [reattach the disk](/help/en/ecs/user-guide/attach-a-data-disk) or [restart the instance](/help/en/ecs/user-guide/restart-instances). This action affects only performance and does not impact data reliability.
    

## Apply in production

-   **Performance impact before the change:**
    
    Different disk categories have different performance limits. A category change may affect your services. Before you proceed, review the [block storage performance](/help/en/ecs/user-guide/block-storage-performance#concept-ytm-vwj-ydb) information to ensure the new configuration meets your business needs.
    
-   **Performance impact during the change**:
    
    The disk's read and write performance may be slightly affected during the change, but your services will not be interrupted and no data will be lost. To minimize business impact, perform this operation during off-peak hours.
    

## Quotas and limitations

-   **The following operations are not supported during an upgrade or downgrade:**
    
    -   Cancel the upgrade or downgrade
        
    -   Create snapshots
        
    -   Resize disks
        
    
    -   Format partitions
        
    -   Re-initialize disks
        
    -   Roll back disks using snapshots
        
    
    -   Attach and detach disks
        
    -   Edit properties
        
    -   Change the operating system
        
    
    -   Set snapshot policies
        
    -   Modify the ESSD performance level
        
    
-   **Disk capacity limitations**: Different ESSD performance levels have minimum capacity requirements. If you cannot select a higher performance level when changing to an ESSD, you must first [resize the disk](/help/en/ecs/user-guide/resize-cloud-disks/) and then try again.
    
-   **Task limit**: An account can run a maximum of 50 concurrent disk category change tasks in one region.
    
-   **Change interval limitations**:
    
    -   Changing only the PL of an ESSD: No interval limit.
        
    -   Changing only the provisioned IOPS of an ESSD AutoPL disk: Wait at least 1 hour between consecutive changes on the same disk.
        
    -   Changing from another disk category to an ESSD AutoPL disk:
        
        -   If you adjust the provisioned IOPS, wait at least 1 hour between consecutive changes on the same disk.
            
        -   If you do not adjust the provisioned IOPS, you can perform another change immediately after the first one. Subsequent changes must be at least 1 hour apart.
            
    -   All other disk category changes: You must wait at least 6 hours between consecutive changes on the same disk.
        

## Billing

After a successful category change, billing is as follows:

-   **Pay-as-you-go disks:** You are billed based on the new disk category, and the new rate takes effect immediately.
    
-   **Subscription disks:** You must pay the price difference for the remainder of the billing cycle based on the old and new configurations and the remaining duration (from 00:00 on the following day to the end of the subscription).
    

For more billing details, see [Elastic Block Storage billing](/help/en/ecs/block-storage-devices#concept-1937442).

## FAQ

-   #### How do I change an ultra disk to a Regional ESSD?
    
    -   As a system disk: The change is not supported.
        
    -   As a data disk: A direct change is not supported. First, change the disk to an ESSD PL0/PL1 or an ESSD AutoPL disk, and then change it to a Regional ESSD.
        
-   #### How do I change a standard SSD to a Regional ESSD?
    
    -   As a system disk: The change is not supported.
        
    -   As a data disk: A direct change is not supported. First, change the disk to an ESSD PL1 or an ESSD AutoPL disk, and then change it to a Regional ESSD.
        
-   #### How do I change an PL2 or PL3 ESSD data disk to a Regional ESSD?
    
    -   As a system disk: The change is not supported.
        
    -   As a data disk: A direct change is not supported. First, change the disk to an ESSD PL1 or an ESSD AutoPL disk, and then change it to a Regional ESSD.
        

## Reference

You can also change a disk's category using the [ModifyDiskSpec](/help/en/ecs/api-modifydiskspec#doc-api-Ecs-ModifyDiskSpec) API operation.
