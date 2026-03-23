If you run long-lived online applications and specify instance types of Elastic Compute Service (ECS) when you create an elastic container instance, we recommend that you use reserved instances to offset the bills of the elastic container instance. This topic describes how to use reserved instances to offset the bills of long-lived elastic container instances.

## Purchase reserved instances

Reserved instances can match pay-as-you-go ECS instances (excluding preemptible instances) within your account to provide a billing discount. If your elastic container instance is created by specifying ECS instance types, you can use reserved instances to offset the bills of the elastic container instance. For more information about reserved instances, see [Overview](/help/en/ecs/user-guide/overview-6#concept-tc4-zhq-dgb).

Reserved instances can be applied only to elastic container instances that are created by specifying ECS instance types. Before you purchase a reserved instance, take note of the following items:

-   You can use only specific ECS instance types to create pods. Make sure that the ECS instance types that you select are supported by Elastic Container Instance. For more information, see [Specify ECS instance types to create an elastic container instance](/help/en/eci/user-guide/specify-ecs-instance-types-to-create-an-elastic-container-instance/#topic-1860130).
    
-   Reserved instances can be applied only to elastic container instances that meet the matching rules. Make sure that your elastic container instances can be matched with the reserved instances.
    
    **Note**
    
    When you purchase reserved instances, you commit to the specified terms and instance types. After a reserved instance is purchased, it automatically matches pay-as-you-go instances that have specific attributes within the term of the reserved instance. You cannot manually manage how the reserved instance is matched to pay-as-you-go instances. After a reserved instance is matched, the system checks for eligible pay-as-you-go instances on an hourly basis and offsets bills based on the computing power of the reserved instance. For more information, see [Usage rules for reserved instances](/help/en/ecs/match-between-reserved-instances-and-pay-as-you-go-instances#concept-af1-zxq-dgb).
    

You can purchase and manage reserved instances on the [Reserved Instances](https://ecs.console.alibabacloud.com/reservedInstance/region/cn-shanghai) page in the ECS console. For more information, see [Purchase reserved instances](/help/en/ecs/purchase-reserved-instances#concept-wvj-gjr-dgb).

-   If you want to optimize the costs of existing elastic container instances, you can find elastic container instances that were created by specifying ECS instance types, and purchase reserved instances that can apply to the specified ECS instance types.
    
-   If you have no existing elastic container instances, select ECS instance types based on your business requirements and purchase reserved instances that can apply to the ECS instance types. Then, create elastic container instances based on the selected ECS instance types.
    
-   To apply your purchased reserved instances to elastic container instances, you must specify the ECS instance types that match the reserved instances when you create the elastic container instances.
    

## View the offset information of a reserved instance

You can view the billing details of elastic container instances and reserved instances in the [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview) console.

**Important**

In scenarios where multiple zones are specified to create elastic container instances, the created elastic container instances may be located in multiple zones. If you find that a reserved instance is not applied to offset bills as expected, check whether the reserved instance and the elastic container instance are within the same zone. If the reserved instance and the elastic container instance are located in different zones of a region, you can change the zonal reserved instance into a regional reserved instance. For more information, see [Change the zone of a reserved instance](/help/en/ecs/split-merge-or-modify-reserved-instances#6d95c5c88fdmi).

-   View bills of elastic container instances
    
    In the left-side navigation pane of the Expenses and Costs console, choose **Bills** > **Bill Details**. On the **Billing Details** tab, you can view the billing details by instance. No bills are generated for the fees of elastic container instances that are offset by reserved instances.
    
-   View the bill of a reserved instance
    
    In the left-side navigation pane of the Expenses and Costs console, click Manage Reserved Instances. On the **Manage Reserved Instances** page, select **RI** for the **Resource Type** parameter. On the **Details** tab, you can view the offset information of reserved instances.
    
    The usage details of reserved instances show the elastic container instances whose fees are offset by the reserved instances in each billing cycle (hour).
