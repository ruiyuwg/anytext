If your workloads change, for example, if they are dispersed across multiple low-specification instances, concentrated on a few high-specification instances, or extended across zones, you can split, merge, or modify existing reserved instances to match pay-as-you-go instances of different instance types and in different zones. This practice ensures that you continue to receive discounts while meeting the computing resource requirements of the new environment, which helps you efficiently manage and optimize the cost and usage of your cloud resources.

**Note**

**For clarity, the reserved instances to be split, merged, or modified are called source reserved instances. The reserved instances that result from the split, merge, or modification are called destination reserved instances.**

## **Prerequisites**

Before you split, merge, or modify reserved instances, take note of the following items:

-   The source reserved instances are in the **Active** state.
    
-   The source reserved instances are not being split, merged, or modified.
    

## Split a reserved instance

If your workloads are distributed across multiple smaller pay-as-you-go instances, you can split a reserved instance into multiple reserved instances with lower computing power to better match the pay-as-you-go instances.

#### **Limits**

The following limits apply when you split a reserved instance:

-   Reserved instances that belong to the gn6i and t5 instance families cannot be split.
    
-   The reservation type, payment type, end time, region/zone, and instance type prefix of the destination reserved instances must be the same as those of the source reserved instance.
    
-   The sum of the computing power of the destination reserved instances must be equal to the computing power of the source reserved instance.
    
    **Note**
    
    **Computing power of a reserved instance = Normalization factor of the instance type × Number of instances that can be offset by a reserved instance.** For more information about how to view the normalization factors of different instance types, see [View the normalization factor table](/help/en/ecs/view-reserved-instances#ecc56a86c9210).
    

#### **Procedure**

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  On the **Reserved Instances** page, in the **Actions** column for the reserved instance that you want to split, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1793054571/p994331.png) > **Split**.
    
3.  In the **Split Reserved Instance** pane, configure the names, instance types, and quantities of the destination reserved instances.
    
4.  Click **Confirm**. You can then [view the operation results](#fe3a96d664rag).
    

## **Merge reserved instances**

If your workloads are concentrated on a few large-sized instances, you can merge multiple reserved instances into a single reserved instance with greater computing power to better cover these large instances and match the corresponding pay-as-you-go instances.

#### **Limits**

The following limits apply when you merge reserved instances:

-   Reserved instances that belong to the gn6i and t5 instance families cannot be merged.
    
-   The reserved instances that you select for merging must have the same reservation type, payment type, end time, region/zone, and instance type prefix.
    
-   The number of pay-as-you-go instances to which the destination reserved instance can be applied cannot exceed 100.
    
-   The sum of the computing power of the destination reserved instances must be equal to the computing power of the source reserved instance.
    
    **Note**
    
    **Computing power of a reserved instance = Normalization factor of the instance type × Number of instances in the reserved instance.** For more information, see [View normalization factors](/help/en/ecs/view-reserved-instances#ecc56a86c9210).
    

#### **Procedure**

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  On the **Reserved Instances** page, in the **Actions** column of one of the reserved instances that you want to merge, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1793054571/p994400.png) > **Merge**.
    
3.  In the **Merge Reserved Instances** pane, select the reserved instances that you want to merge with the current reserved instance. Then, configure the name, instance type, and quantity of the destination reserved instance.
    
4.  Click **Confirm**. You can then [view the operation results](#fe3a96d664rag).
    

## Change the zone of a reserved instance

If a source reserved instance is no longer applicable to the new region or zone due to business expansion or migration, you can change the zone of the reserved instance to better match pay-as-you-go instances.

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  On the **Reserved Instances** page, find the reserved instance that you want to manage and click **Modify** in the **Actions** column.
    
3.  In the **Modify Reserved Instance** dialog box, configure the **Name** and **Region and Zone** of the reserved instance.
    
    You can change the zone in the **Region and Zone** field only to a different zone in the same region.
    
    -   For a zonal reserved instance:
        
        -   You can change the zone to another zone in the same region.
            
        -   You can change a zonal reserved instance to a regional reserved instance.
            
    -   For a regional reserved instance, you can change the instance to a zonal reserved instance in the same region.
        
    
    **Note**
    
    If resources for the instance type used by the destination reserved instance are insufficient in a zone, you cannot select the zone for the reserved instance.
    
4.  Click **Confirm**. You can then [view the operation results](#fe3a96d664rag).
    

## Operation result **description**

After you submit the request to split, merge, or modify reserved instances, the source reserved instances enter the **Updating** state, and the destination reserved instances in the **Creating** state are displayed.

**Note**

You cannot cancel a request that is in progress. If you want to undo a change, you must split, merge, or modify the reserved instances again. For example, to undo the split operation, you can merge the destination reserved instances back into the source reserved instance.

After the split, merge, or modify request is processed, take note of the following billing considerations:

-   If the reserved instances are split, merged, or modified as expected, the following situations occur:
    
    -   Source Voucher
        
        -   The source reserved instances enter the **Inactive** state and are invalidated on the hour when the source reserved instance configuration was changed. The price of the source reserved instances becomes USD 0.
            
        -   For source reserved instances, you can only view historical bills.
            
    -   Targeted Coupon
        
        -   The destination reserved instances enter the **Active** state and take effect on the hour when the source reserved instances are split, merged, or modified.
            
            Assume that you split an ecs.g6.2xlarge zonal reserved instance into two ecs.g6.xlarge zonal reserved instances at 20:30 on May 28, 2020. The source reserved instance is invalidated at 20:00 on May 28, 2020, the same time as when the destination reserved instances take effect.
            
        -   If the destination reserved instance is a zonal reserved instance, the type of reserved resources is updated automatically.
            
        -   If the destination reserved instance matches pay-as-you-go instances, the billing discount provided by the reserved instance is applied to the matching pay-as-you-go instances starting from the hour when the destination reserved instance takes effect.
            
-   If the configuration modification fails, the source reserved instance is unchanged and remains in the Active state.
    

## References

You can call the following API operations:

-   To query purchased reserved instances, call the [DescribeReservedInstances](/help/en/ecs/api-describereservedinstances#doc-api-Ecs-DescribeReservedInstances) operation.
    
-   To split, merge, or modify a reserved instance, call the [ModifyReservedInstances](/help/en/ecs/api-modifyreservedinstances#doc-api-Ecs-ModifyReservedInstances) operation.
    
-   To modify the attributes of a reserved instance, such as the name and description of the instance, call the [ModifyReservedInstanceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyreservedinstanceattribute) operation.
