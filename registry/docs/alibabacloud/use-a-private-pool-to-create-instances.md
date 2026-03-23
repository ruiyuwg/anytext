After you purchase a resource reservation, Alibaba Cloud reserves resources that match the attributes of the resource reservation in a private pool. You can use the reserved resources to create instances. This topic describes how to use a private pool to create Elastic Compute Service (ECS) instances.

**Important**

When you release a reserved Bare Metal Instance, it takes a long time for the capacity of the private pool occupied by the instance to become active again. During this period, attempts to create new instances using this capacity may fail. Please properly plan the release time and frequency of instances.

## Prerequisites

-   The private pool that you want to use is in the **Active** state.
    
-   The private pool has available capacity. For information about how to view the resource usage of a private pool, see [View reserved resources in private pool](/help/en/ecs/user-guide/view-a-private-pool#task-2100080).
    

## Procedure

## Use the ECS console

This section describes only the private pool-related parameters involved in the procedure for creating ECS instances. For information about other parameters involved in the procedure for creating ECS instances, see [Custom launch ECS instances](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).

1.  Before you can use a private pool to create ECS instances in the ECS console, use one of the following methods to go to the ECS instance buy page:
    
    -   On the **Instance** page, click **Create Instance**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1912225171/p789503.png)
        
    -   On the **Resource Reservations** page, find a resource reservation that is in the **Active** state and click **Purchase Instance** in the **Actions** column.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1912225171/p789501.png)
        
2.  Configure the basic settings.
    
    The following table describes the parameters related to the basic settings.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    -   To use the private pool that is associated with an elasticity assurance, an immediate capacity reservation, or a capacity reservation with Savings Plan, set this parameter to **Pay-as-you-go**.
        
    -   To use the private pool that is associated with a capacity reservation for subscription resources, set this parameter to **Subscription**.
        
    
    **Region**
    
    Select the same region as the resource reservation.
    
    **Network and Zone**
    
    Select the same network and zone as the resource reservation.
    
    **Instance**
    
    Select the same instance type as the resource reservation.
    
    **Image**
    
    To use the private pool that is associated with an immediate capacity reservation, select an image that uses the Linux or Windows operating system that is the same operating system used by the immediate capacity reservation.
    
3.  Configure the parameters in the **Storage**, **Bandwidths & Security Groups**, and **Management** sections. Then, click **Advanced Settings(Optional)**.
    
4.  In the **Advanced Settings(Optional)** section, configure the parameters based on your business requirements. In the **Private Pool Type** field, specify whether to use a private pool and how to use the private pool.
    
    -   Specify the ID of a private pool: When you create instances, select **Targeted** from the **Private Pool Type** drop-down list and specify the ID of the private pool that you want to use. The ID of a private pool is the same as the ID of the associated resource reservation. If the specified private pool has no available capacity, instances cannot be created.
        
        **Note**
        
        You can specify the ID of an open private pool or a targeted private pool to use the private pool.
        
    -   Use an open private pool that is assigned by the system. If you select **Open** from the **Private Pool Type** drop-down list, the system automatically selects an open private pool. If the open private pool does not have available capacity, the system attempts to use the capacity of a public pool.
        
        **Note**
        
        The system selects only open private pools.
        
    -   Specify not to use the private pool capacity. When you create instances, select **None** from the **Private Pool Type** drop-down list. The public pool is used.
        
    
5.  Check your configurations and read and agree to the terms of service. Confirm to create the instance and complete the payment.
    

## Call an API operation

When you call the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) operation to create an ECS instance, configure the `PrivatePoolOptions.MatchCriteria` parameter to specify the private pool type of the instance.

-   Open: open private pool. The system selects a matching open private pool to start the instance. If no matching open private pools are found, resources in the public pool are used. If you set the PrivatePoolOptions.MatchCriteria parameter to Open, you can leave the `PrivatePoolOptions.Id` parameter empty.
    
-   Target: targeted private pool. The system uses the capacity in a specified private pool to start the instance. If the specified private pool is unavailable, the instance cannot be started. If you set the PrivatePoolOptions.MatchCriteria parameter to Target, you must specify the `PrivatePoolOptions.Id` parameter.
    
-   None: no private pool. The capacity in private pools is not used.
    

## What to do next

After you use a private pool to create instances, you can check whether the instances are created and which instances are associated with the private pool on the **Private Pools** tab of the Resource Advisor page. For more information, see [View reserved resources in private pool](/help/en/ecs/user-guide/view-a-private-pool#task-2100080).
