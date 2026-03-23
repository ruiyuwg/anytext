Enterprise SSDs (ESSDs) provide performance levels 0, 1, 2, and 3 (PL0, PL1, PL2, and PL3) to meet the storage requirements of different application scenarios. When you use ESSDs, you can change the performance levels of the ESSDs in response to workload changes to balance performance and costs. This topic describes how to change the performance level of an ESSD.

For information about the performance of ESSDs at each performance level, see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance).

## Limitations

The following limitations apply when modifying an ESSD's performance level:

-   Status requirements
    
    -   The ESSD disk must be in the **In Use** or **Unattached** state.
        
    -   If the ESSD disk is attached to an ECS instance, the instance must be in the **Running** or **Stopped** state. The instance cannot be **Expired**, and your account must not have overdue payments.
        
-   Performance level requirements
    
    -   You can only upgrade the performance level of subscription ESSD disks.
        
    -   For pay-as-you-go ESSD disks, you can upgrade or downgrade the performance level, but you cannot downgrade to PL0.
        
        **Note**
        
        Only ultra disks can be downgraded to PL0 ESSDs. For more information, see [Change disk category](/help/en/ecs/user-guide/change-the-category-of-a-disk).
        
    -   The available performance levels for an ESSD disk depend on its capacity. If you cannot select a higher PL, first [resize the disk](/help/en/ecs/user-guide/overview-19#concept-e1g-44g-ydb) and then upgrade its performance level.
        

## **Billing**

After you upgrade the performance level of an ESSD disk, you are charged the price of the new level. To balance performance and cost, modify the PL based on your business requirements. For more information, see [Block storage devices](/help/en/ecs/block-storage-devices).

The price of an ESSD disk varies by performance level. View the pricing schedule of ESSDs on the Pricing tab of the [Elastic Compute Service product page](https://www.alibabacloud.com/product/ecs).

## Procedure

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the target ESSD. In the **Actions** column, choose **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6895777861/p479245.png)** > **Modify Performance Level**.
    
4.  In the **Modify Performance Level** dialog box, select a new **Performance Level** and then click **Confirm**.
    

## References

-   You can also call the [ModifyDiskSpec](/help/en/ecs/api-modifydiskspec#doc-api-Ecs-ModifyDiskSpec) operation to change the performance level of an ESSD.
    
-   You can also modify an ESSD's performance level by changing its disk category. For more information, see [Change disk category](/help/en/ecs/user-guide/change-the-category-of-a-disk#task-2473687).
