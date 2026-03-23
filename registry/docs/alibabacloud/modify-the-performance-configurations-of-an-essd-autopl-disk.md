When you use an enhanced SSD (ESSD) AutoPL disk, you can enable or disable the performance provision and performance burst features for the disk based on your business requirements to reduce costs. After the performance provision feature is enabled for the disk, you can modify the provisioned IOPS to improve disk performance without changing the disk size. This topic describes how to modify the performance configurations of an ESSD AutoPL disk.

## Usage notes

When you modify the performance configurations of an ESSD AutoPL disk, take note of the following items:

-   After the provisioned IOPS of the disk is modified, the provisioned throughput and total throughput of the disk change simultaneously.
    
    For information about the formula used to calculate the IOPS and throughput of an ESSD AutoPL disk, see the [ESSD AutoPL disk specifications](/help/en/ecs/user-guide/essd-autopl-disks#section-642-kxg-fs5) section in the "ESSD AutoPL disks" topic.
    
-   The new performance configurations of the disk take effect immediately after the configurations are modified.
    
-   For the same ESSD AutoPL disk, the time interval between two adjustments of provisioned IOPS configuration must be more than one hour.
    

## Billing

If you enable the performance provision and performance burst features for a disk or change the provisioned IOPS of the disk, bills are generated based on the new disk configurations. We recommend that you modify the performance configurations of the disk based on your business requirements. For more information, see [Block storage devices](/help/en/ecs/block-storage-devices).

For information about the pricing of ESSD AutoPL disks, visit the Pricing tab of the [Elastic Compute Service product page](https://www.alibabacloud.com/product/ecs#pricing).

## Modify the provisioned performance of an ESSD AutoPL disk

You can change the configurations of an ESSD AutoPL disk to enable or disable performance provision for the disk or modify the provisioned IOPS of the disk.

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the disk whose configurations you want to modify. In the **Actions** column, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6895777861/p479245.png)** > **Change Category**.
    
4.  In the **Change Category** dialog box, select **ESSD AutoPL Disk** from the **New Disk Category** drop-down list and then specify the provisioned IOPS of the disk.
    
    **Note**
    
    If you set the provisioned IOPS to 0, the performance provision feature is automatically disabled for the ESSD AutoPL disk.
    
5.  Confirm the configuration fees and click **Confirm**.
    

## Enable or disable performance burst for an ESSD AutoPL disk

By default, performance burst is enabled when you create an ESSD AutoPL disk. You can disable performance burst as needed. After an ESSD AutoPL disk is created, you can perform the following operations to enable or disable performance burst for the ESSD AutoPL disk when you modify its attributes.

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the ESSD AutoPL disk that you want to manage and choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6895777861/p479245.png)** > **Modify Attributes** in the **Actions** column.
    
4.  In the **Modify Disk Attributes** dialog box, select or clear **Start** for performance burst as needed.
    
5.  Click **Confirm**.
    

## References

-   You can call the [ModifyDiskAttribute](/help/en/ecs/api-modifydiskattribute#doc-api-Ecs-ModifyDiskAttribute) operation to enable or disable performance burst for ESSD AutoPL disks.
    
-   If the storage capacity is insufficient when you use an ESSD AutoPL disk, you can resize the disk to increase the storage space to meet your business requirements. For more information, see [Overview](/help/en/ecs/user-guide/overview-19).
