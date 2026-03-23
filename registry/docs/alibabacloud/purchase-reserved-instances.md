This topic describes how to purchase reserved instances in the Elastic Compute Service (ECS) console.

## Before you begin

Understand the matching rules for reserved instances before you make a purchase. This helps you purchase a reserved instance that meets your needs. For more information, see [Deduction rules for reserved instances](/help/en/ecs/match-between-reserved-instances-and-pay-as-you-go-instances#concept-af1-zxq-dgb).

## Procedure

1.  Go to [ECS console - Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Go to the reserved instance buy page.
    
    -   If you have not purchased a reserved instance in the current region, click **Purchase** on the homepage.
        
    -   If you have already purchased reserved instances in the current region, click **Purchase Reserved Instance** above the list.
        
4.  Configure the parameters for the reserved instance.
    
    Take note of the following parameters. For information about other parameters, see the tooltips on the page.
    
    **Parameter**
    
    **Description**
    
    **Resource Reservation**
    
    -   **Reserved**: Select this option for a zonal reserved instance.
        
        -   You must specify a region and an availability zone.
            
        -   It provides a discount on matching pay-as-you-go instances within a single availability zone and reserves capacity for those instances.
            
    -   **Not Reserved**: This option is for a regional reserved instance.
        
        -   You only need to specify a region.
            
        -   It provides a discount on matching pay-as-you-go instances across all availability zones in the region. The discount can be applied to different instance types within the same instance family. However, if the inventory of matching pay-as-you-go instances is insufficient, you may need to wait for resources to become available.
            
    
    **Note**
    
    You can convert a zonal reserved instance to a regional reserved instance, and vice versa, at any time after purchase. For more information, see [Change the zone of a reserved instance](/help/en/ecs/split-merge-or-modify-reserved-instances#6d95c5c88fdmi).
    
    **Instance Type**
    
    Select the instance type that receives the discount. The available instance types are listed on the page.
    
    Each reserved instance applies to only one instance type. For more information about instance types, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families).
    
    **Note**
    
    You must ensure that there is sufficient inventory for the selected instance resources for both Reserved and Not Reserved options. Otherwise, the order fails. You can call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource) operation to check the resource inventory in a specific region or availability zone.
    
    **Operating System Platform**
    
    -   The reserved instance provides a discount only if the operating system of the matching pay-as-you-go instance's image matches your selected platform.
        
    -   The supported operating system platforms are **Linux** and **Windows**.
        
    
    **Important**
    
    The operating system platform cannot be changed after purchase. Choose the platform carefully based on your needs.
    
    **Payment Option**
    
    Reserved instances support three payment options: **All Upfront**, **Partial Upfront**, and **No Upfront**. For more information, see [Payment options](/help/en/ecs/reserved-instances#b96d9fcbfbasf).
    
    **Quantity**
    
    The **Quantity** parameter serves the following purposes:
    
    -   It is used to calculate the computing power of the reserved instances.
        
    -   For a zonal reserved instance, it specifies the number of instances for which capacity is reserved.
        
        For example, if you purchase a reserved instance for the ecs.g6.xlarge instance type with a quantity of 2, capacity is reserved for two ecs.g6.xlarge instances.
        
    
    **Term**
    
    You must specify a term when you purchase a reserved instance.
    
    **Note**
    
    After a reserved instance expires, it no longer provides a discount on your pay-as-you-go instance bills. However, this does not affect the pay-as-you-go instance itself, and your services will not be interrupted.
    
    **Effective Time**
    
    -   **Now**: The discount is applied immediately after the reserved instance is successfully purchased.
        
    -   **Specify Effective Time**: The discount is not applied immediately after purchase. Instead, it takes effect at the specified time.
        
    
    For information about the relationship between the effective time and the billing start time of a reserved instance, see [How billing works](/help/en/ecs/reserved-instances#f65eb47db6b7i).
    
5.  Use the reserved instance.
    
    After a successful purchase, you do not need to manually apply the reserved instance. The system automatically applies the discount to matching pay-as-you-go instances during the term of the reserved instance. For more information about the matching rules and for discount examples, see [Usage rules for reserved instances](/help/en/ecs/match-between-reserved-instances-and-pay-as-you-go-instances).
    

## References

-   You can split, merge, modify, or view reserved instances. For more information, see [Split, merge, or modify reserved instances](/help/en/ecs/split-merge-or-modify-reserved-instances) and [View reserved instances](/help/en/ecs/view-reserved-instances).
    
-   You can also call the [PurchaseReservedInstancesOffering](/help/en/ecs/api-purchasereservedinstancesoffering) operation to purchase reserved instances to discount the bills of matching pay-as-you-go instances.
    
-   You can also call the following API operations to manage your reserved instances:
    
    -   [ModifyReservedInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyreservedinstances): Modifies the configurations of a reserved instance to split, merge, or change its scope.
        
    -   [DescribeReservedInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describereservedinstances): Queries the details of your purchased reserved instances.
        
    -   [RenewReservedInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-renewreservedinstances): Renews a reserved instance.
        
    -   [ModifyReservedInstanceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyreservedinstanceautorenewattribute): Enables or disables auto-renewal for a reserved instance, or changes it to manual renewal.
        
    -   [DescribeReservedInstanceAutoRenewAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describereservedinstanceautorenewattribute): Queries the auto-renewal duration and status of a reserved instance.
