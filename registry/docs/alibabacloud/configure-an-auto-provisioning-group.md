This topic describes and provides examples on how to configure an auto provisioning group. In the following example, an auto provisioning group is used to create multiple Elastic Compute Service (ECS) instances to implement machine learning or build a ticketing website. An auto provisioning group can also be used to employ multiple resource pools at the lowest cost or a specific resource pool to create multiple ECS instances.

## **Configure an auto provisioning group in the ECS console**

## Example **1: Implement machine learning**

You plan to complete a machine learning task in the next week. The task involves analyzing risk factors in mortgage loans. You have the following requirements on the instance cluster:

-   Region: China (Hangzhou).
    
-   Instances are equipped with NVIDIA V100 GPUs. The GPU memory of a single instance is up to 32 GB in size.
    
-   Target capacity: 20 instances.
    
-   To minimize costs, we recommend that you create only spot instances. The number of instances in the instance cluster can be less than the target capacity.
    
-   Instances must be released after the task is completed.
    

The following table describes the settings of an auto provisioning group that meets the preceding requirements.

**Section**

**Parameter**

**Description**

**Capacity Configuration**

**Target Capacity**

Configure the following settings based on the target capacity and instance category requirements:

-   Select **Instances** from the Target Capacity drop-down list.
    
-   Specify **20** in the spin box.
    

**Instance Configuration**

**Instance Configuration**

Perform the following operations to meet the requirements for instances that use NVIDIA V100 GPUs and the GPU memory of no larger than 32 GB per instance:

1.  Select the ecs.gn6v-c8g1.2xlarge and ecs.gn6e-c12g1.3xlarge instance types from the Instance Type column.
    
    **Note**
    
    For information about instance types, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
2.  Query the number of available resources of the ecs.gn6v-c8g1.2xlarge and ecs.gn6e-c12g1.3xlarge instance types in Hangzhou Zone H and Hangzhou Zone I.
    
    **Note**
    
    You can go to the [ECS Instance Types Available for Each Region page](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion) to view the instance types available in each region.
    

You can add instance configurations based on the zones and instance types:

1.  Perform the following operations to add an instance configuration:
    
    -   Specify a vSwitch in Hangzhou Zone H.
        
    -   Add the ecs.gn6v-c8g1.2xlarge and ecs.gn6e-c12g1.3xlarge instance types.
        
2.  Perform the following operations to add another instance configuration:
    
    -   Specify a vSwitch in Hangzhou Zone I.
        
    -   Add the ecs.gn6v-c8g1.2xlarge and ecs.gn6e-c12g1.3xlarge instance types.
        

The following resource pools are formed after you add the preceding configurations:

-   The ecs.gn6v-c8g1.2xlarge instance type in Hangzhou Zone H
    
-   The ecs.gn6e-c12g1.3xlarge instance type in Hangzhou Zone H
    
-   The ecs.gn6v-c8g1.2xlarge instance type in Hangzhou Zone I
    
-   The ecs.gn6e-c12g1.3xlarge instance type in Hangzhou Zone I
    

**Provisioning Policy**

Select **Cost Optimization Policy**. After the auto provisioning group is started, the resource pool that is available at the lowest price is used to create an instance cluster.

**Spot Instance Interruption Settings**

To minimize costs, the number of instances in the instance cluster can be less than the value specified by the Target Capacity parameter. In this case, select **Release**.

**Advanced**

**Group Type**

To minimize costs, the number of instances in the instance cluster can be less than the value specified by the Target Capacity parameter. In this case, select **One-time Delivery**.

**Start Time** and **End Time**

Specify the start time and expiration time based on the next-week time requirement.

**Global Maximum Price for Spot Instances**

To minimize costs, select **Set Maximum Price** to specify a maximum price that you can afford.

**Instance Shutdown Settings**

-   Instances in the auto provisioning group must be released after the task is completed. Therefore, select **Shut Down Instances Upon Group Expiration**.
    
-   To minimize costs, select **Shut Down Excessive Instances When Target Capacity Is Exceeded**.
    

## Example **2: Build a ticketing website**

For example, you want to build a ticketing website to provide reliable ticketing services at all hours, especially during peak hours. You have the following requirements on the instance cluster:

-   Region: China (Hangzhou).
    
-   Instances: The number of vCPUs on a single instance does not exceed 8.
    
-   Target capacity: 80 vCPUs.
    
-   Minimum capacity: 60 vCPUs.
    
-   Optimize the website access experience based on the minimum capacity of the cluster to minimize costs.
    
-   The cluster must have disaster recovery capabilities.
    

The following table describes the settings of an auto provisioning group that meets the preceding requirements.

**Section**

**Parameter**

**Description**

**Capacity Configuration**

**Target Capacity**

Configure the following settings based on the target capacity and minimum capacity requirements:

-   Select **vCPUs** from the Target Capacity drop-down list.
    
-   Specify 80 in the spin box.
    
-   Select **Use Pay-as-you-go Instances to Provide Computing Power**.
    

**Pay-as-you-go Instance Capacity**

Specify 60 in the spin box to meet the minimum capacity requirement.

**Instance Configuration**

**Instance Configuration**

The c6 instance family is used because it is suitable for building frontend web servers. Perform the following operations to meet the requirements for instances that are equipped with no more than 8 vCPUs per instance:

1.  Select the ecs.c6.large, ecs.c6.xlarge, and ecs.c6.2xlarge instance types from the Instance Type column.
    
    **Note**
    
    For information about instance types, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
2.  Query the number of available resources of the ecs.c6.large, ecs.c6.xlarge, and ecs.c6.2xlarge instance types in Hangzhou Zone H, Hangzhou Zone I, and Hangzhou Zone J.
    
    **Note**
    
    You can go to the [ECS Instance Types Available for Each Region page](https://ecs-buy.alibabacloud.com/instanceTypes/#/instanceTypeByRegion) to view the instance types available in each region.
    

You can add instance configurations based on the zones and instance types:

1.  Perform the following operations to add an instance configuration:
    
    -   Specify a vSwitch in Hangzhou Zone H.
        
    -   Add the ecs.c6.large, ecs.c6.xlarge, and ecs.c6.2xlarge instance types.
        
2.  Perform the following operations to add another instance configuration:
    
    -   Specify a vSwitch in Hangzhou Zone I.
        
    -   Add the ecs.c6.large, ecs.c6.xlarge, and ecs.c6.2xlarge instance types.
        
3.  Perform the following operations to add another instance configuration:
    
    -   Specify a vSwitch in Hangzhou Zone J.
        
    -   Add the ecs.c6.large, ecs.c6.xlarge, and ecs.c6.2xlarge instance types.
        

The following resource pools are formed after you add the preceding configurations:

-   The ecs.c6.large instance type in Hangzhou Zone H
    
-   The ecs.c6.xlarge instance type in Hangzhou Zone H
    
-   The ecs.c6.2xlarge instance type in Hangzhou Zone H
    
-   The ecs.c6.large instance type in Hangzhou Zone I
    
-   The ecs.c6.xlarge instance type in Hangzhou Zone I
    
-   The ecs.c6.2xlarge instance type in Hangzhou Zone I
    
-   The ecs.c6.large instance type in Hangzhou Zone J
    
-   The ecs.c6.xlarge instance type in Hangzhou Zone J
    
-   The ecs.c6.2xlarge instance type in Hangzhou Zone J
    

**Provisioning Policy**

Select **Balanced Distribution Policy**. After the auto provisioning group is started, it attempts to evenly create instances across zones to prevent instance creation failures caused by insufficient resources within a single zone. This can improve the disaster recovery capabilities of applications.

**Instance Configuration**

**Spot Instance Interruption Settings**

Select **Stop** to ensure that the website can be accessed at a low latency. The time required to recover an instance from stopping in economical mode is less than the time required to create an instance.

**Advanced**

**Group Type**

Select **Continuous Delivery and Maintain Capacity** to continuously provide ticketing service.

**Start Time** and **End Time**

The auto provisioning group immediately starts and can be indefinitely retained to continuously provide ticketing service.

**Global Maximum Price for Spot Instances**

To optimize website access experience, select **Automatic Bidding** to maintain a stable number of instances in the cluster.

**Instance Shutdown Settings**

Select **Shut Down Excessive Instances When Target Capacity Is Exceeded** to minimize costs.

The target capacity is specified in the number of vCPUs. Therefore, the weight of each instance is related to the number of vCPUs of each instance type. The following table describes the weighted price of each instance type.

**Note**

Prices in the following table are for reference only. The actual prices displayed on the buy page prevail.

**Instance type**

**vCPUs**

**Pay-as-you-go price (USD)**

**Weight**

**Weighted price (USD)**

ecs.c6.large

2

0.06 per hour

2

0.03 per hour

ecs.c6.xlarge

4

0.121 per hour

4

0.03025 per hour

ecs.c6.2xlarge

8

0.241 per hour

8

0.030125 per hour

When an auto provisioning group attempts to create an instance cluster, the auto provisioning group first attempts to implement the balanced distribution policy and evenly creates instances across zones. Then, the auto provisioning group attempts to choose instance types that have lower weighted prices to create instances. If the weighted prices of all instance types are the same, the auto provisioning group chooses instance types at random to create instances.

## **Configure an auto provisioning group by calling an API operation**

## Example **1: Use multiple resource pools with the lowest prices**

If you want to minimize costs and alleviate the impact of spot instance reclamation caused by using a single resource pool, you can configure an auto provisioning group to use multiple resource pools that have the lowest prices to create instances.

You can only call the [CreateAutoProvisioningGroup](/help/en/ecs/api-createautoprovisioninggroup) operation with the SpotAllocationStrategy parameter set to lowest-price and the SpotInstancePoolsToUseCount parameter set. For example, you can make the configurations described in the following table to create an auto provisioning group with the following results:

-   Obtain five resource pools based on the lt-bp1ivgo4p5now3px\*\*\*\* launch template.
    
-   Set the target capacity to 30 instances and create only spot instances.
    
-   Use the three resource pools that have the lowest prices and create 10 spot instances from each resource pool.
    

**Parameter**

**Example**

**Description**

TotalTargetCapacity

30

Sets the target capacity to 30 instances.

SpotTargetCapacity

30

Creates 30 spot instances.

PayAsYouGoTargetCapacity

0

Creates no pay-as-you-go instances.

SpotAllocationStrategy

lowest-price

Uses the cost optimization policy for spot instances.

PayAsYouGoAllocationStrategy

lowest-price

Uses the cost optimization policy for pay-as-you-go instances.

SpotInstancePoolsToUseCount

3

Uses the three resource pools that have the lowest prices.

LaunchTemplateId

lt-bp1ivgo4p5now3px\*\*\*\*

The ID of the launch template used to create instances.

LaunchTemplateConfig.1.VSwitchId

vsw-bp1ygryo03m39xhsy\*\*\*\*

The ID of the vSwitch of the extended configuration 1 (Resource Pool 1).

LaunchTemplateConfig.1.InstanceType

ecs.c6e.large

The instance type of the extended configuration 1 (Resource Pool 1).

LaunchTemplateConfig.1.WeightedCapacity

1

The weight of the instance type of the extended configuration 1 (Resource Pool 1).

LaunchTemplateConfig.2.VSwitchId

vsw-bp16hgf8f3kvtcbyu\*\*\*\*

The ID of the vSwitch of the extended configuration 2 (Resource Pool 2).

LaunchTemplateConfig.2.InstanceType

ecs.c6e.xlarge

The instance type of the extended configuration 2 (Resource Pool 2).

LaunchTemplateConfig.2.WeightedCapacity

1

The weight of the instance type of the extended configuration 2 (Resource Pool 2).

LaunchTemplateConfig.3.VSwitchId

vsw-bp1oeawdo9tj2gvjp\*\*\*\*

The ID of the vSwitch of the extended configuration 3 (Resource Pool 3).

LaunchTemplateConfig.3.InstanceType

ecs.c6e.2xlarge

The instance type of the extended configuration 3 (Resource Pool 3).

LaunchTemplateConfig.3.WeightedCapacity

1

The weight of the instance type of the extended configuration 3 (Resource Pool 3).

LaunchTemplateConfig.4.VSwitchId

vsw-bp1oeawdo9tj2gvjp\*\*\*\*

The ID of the vSwitch of the extended configuration 4 (Resource Pool 4).

LaunchTemplateConfig.4.InstanceType

ecs.g6e.xlarge

The instance type of the extended configuration 4 (Resource Pool 4).

LaunchTemplateConfig.4.WeightedCapacity

1

The weight of the instance type of the extended configuration 4 (Resource Pool 4).

LaunchTemplateConfig.5.VSwitchId

vsw-bp1oeawdo9tj2gvjp\*\*\*\*

The ID of the vSwitch of the extended configuration 5 (Resource Pool 5).

LaunchTemplateConfig.5.InstanceType

ecs.g6e.2xlarge

The instance type of the extended configuration 5 (Resource Pool 5).

LaunchTemplateConfig.5.WeightedCapacity

1

The weight of the instance type of the extended configuration 5 (Resource Pool 5).

## Example **2: Preferentially use a specific resource pool**

You can configure an auto provisioning group to create instances by preferentially using a specific resource pool. For example, if you use reserved instances that can be applied to ecs.c6e.large instances, you can configure an auto provisioning group to preferentially select the ecs.c6e.large instance type to benefit from the billing discounts provided by the reserved instances.

You can only call the [CreateAutoProvisioningGroup](/help/en/ecs/api-createautoprovisioninggroup) operation with the PayAsYouGoAllocationStrategy parameter set to prioritized and the priority of the resource pool set to the highest one (0). For example, you can make the configurations described in the following table to create an auto provisioning group with the following results:

-   Obtain five resource pools based on the lt-bp1ivgo4p5now3px\*\*\*\* launch template.
    
-   Set the target capacity to 20 instances, including 10 spot instances and 10 pay-as-you-go instances.
    
-   Use the resource pool corresponding to the ecs.c6e.large instance type to create pay-as-you-go instances by specifying the LaunchTemplateConfig.1 parameter.
    

**Parameter**

**Example**

**Description**

TotalTargetCapacity

20

Sets the target capacity to 20 instances.

SpotTargetCapacity

10

Creates 10 spot instances.

PayAsYouGoTargetCapacity

10

Creates 10 pay-as-you-go instances.

SpotAllocationStrategy

lowest-price

Uses the cost optimization policy for spot instances.

PayAsYouGoAllocationStrategy

prioritized

Uses the cost optimization policy for pay-as-you-go instances.

LaunchTemplateId

lt-bp1ivgo4p5now3px\*\*\*\*

The ID of the launch template used to create instances.

LaunchTemplateConfig.1.VSwitchId

vsw-bp1ygryo03m39xhsy\*\*\*\*

The ID of the vSwitch of the extended configuration 1 (Resource Pool 1).

LaunchTemplateConfig.1.InstanceType

ecs.c6e.large

The instance type of the extended configuration 1 (Resource Pool 1).

LaunchTemplateConfig.1.WeightedCapacity

1

The weight of the instance type of the extended configuration 1 (Resource Pool 1).

LaunchTemplateConfig.1.Priority

0

The priority of the extended configuration 1. The value 0 indicates the highest priority.

LaunchTemplateConfig.2.VSwitchId

vsw-bp16hgf8f3kvtcbyu\*\*\*\*

The ID of the vSwitch of the extended configuration 2 (Resource Pool 2).

LaunchTemplateConfig.2.InstanceType

ecs.c6e.xlarge

The instance type of the extended configuration 2 (Resource Pool 2).

LaunchTemplateConfig.2.WeightedCapacity

1

The weight of the instance type of the extended configuration 2 (Resource Pool 2).

LaunchTemplateConfig.3.VSwitchId

vsw-bp1oeawdo9tj2gvjp\*\*\*\*

The ID of the vSwitch of the extended configuration 3 (Resource Pool 3).

LaunchTemplateConfig.3.InstanceType

ecs.c6e.2xlarge

The instance type of the extended configuration 3 (Resource Pool 3).

LaunchTemplateConfig.3.WeightedCapacity

1

The weight of the instance type of the extended configuration 3 (Resource Pool 3).

LaunchTemplateConfig.4.VSwitchId

vsw-bp1oeawdo9tj2gvjp\*\*\*\*

The ID of the vSwitch of the extended configuration 4 (Resource Pool 4).

LaunchTemplateConfig.4.InstanceType

ecs.g6e.xlarge

The instance type of the extended configuration 4 (Resource Pool 4).

LaunchTemplateConfig.4.WeightedCapacity

1

The weight of the instance type of the extended configuration 4 (Resource Pool 4).

LaunchTemplateConfig.5.VSwitchId

vsw-bp1oeawdo9tj2gvjp\*\*\*\*

The ID of the vSwitch of the extended configuration 5 (Resource Pool 5).

LaunchTemplateConfig.5.InstanceType

ecs.g6e.2xlarge

The instance type of the extended configuration 5 (Resource Pool 5).

LaunchTemplateConfig.5.WeightedCapacity

1

The weight of the instance type of the extended configuration 5 (Resource Pool 5).
