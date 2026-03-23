This topic describes instance creation failure events and how to improve the success rate of your Elastic Compute Service (ECS) instance creation.

## **Instance creation failures**

When you call the [RunInstances](/help/en/ecs/api-runinstances) operation to create instances, the inventory of ECS instance resources and the number of assignable private IP addresses of vSwitches dynamically change. If the system does not have sufficient resources to create instances, the system retries to create the instances. In extreme cases, an instance cannot be created and the system automatically recycles or releases the instance resources. When Alibaba Cloud detects that an ECS instance fails to be created, Alibaba Cloud immediately sends an instance creation failure event named SystemFailure.Delete to the system. The system handles the event and releases the instance resources involved. If you already paid for the instance, you are refunded after the instance resources are released. For pay-as-you-go instances, no payments are required during instance creation.

When you receive the SystemFailure.Delete event during instance creation, you can use one of the following methods to handle the event:

-   Wait until the system automatically releases the resources of the instance that fails to be created. In most cases, instance resources are automatically released within 5 minutes of an instance creation failure.
    
-   Manually release the instance.
    

## **View an instance creation failure event**

Use Alibaba Cloud CLI to call the [DescribeInstanceHistoryEvents](/help/en/ecs/api-describeinstancehistoryevents) operation to check whether an instance creation failure event occurs.

The following sample code provides an example on how to query all historical instance creation failure events that are in the Executing and Executed states. You can configure the `EventPublishTime.Start` and `EventPublishTime.End` parameters to specify a time range to query.

```
aliyun ecs DescribeInstanceHistoryEvents --InstanceEventCycleStatus.1 Executing --InstanceEventCycleStatus.2 Executed --EventType SystemFailure.Delete
```

The following table describes the relationships between the status in the DescribeInstances operation and the status in the DescribeInstanceHistoryEvents operation.

**Status**

**Instance status in the DescribeInstances operation**

**Instance status in the DescribeInstanceHistoryEvents operation**

The instance is being created.

Creating or Starting

None

The instance fails to be created and is to be recycled.

Stopped

Executing state of the SystemFailure.Delete event

The instance to be recycled is manually released.

The instance cannot be found.

Avoided state of the SystemFailure.Delete event

The instance that fails to be created is recycled.

The instance cannot be found.

Executed state of the SystemFailure.Delete event

## **Improve the success rate of instance creation**

After you create instances by calling the [RunInstances](/help/en/ecs/api-runinstances) operation, you can monitor the instance creation progress.

-   If all instances are in the Running state, the instances are batch created.
    
-   If specific instances are in the Stopped or Creating state, you can call the [DescribeInstanceHistoryEvents](/help/en/ecs/api-describeinstancehistoryevents) operation to check whether the instances fail to be created. The instance resources are released within 5 minutes after the instances fail to be created.
    
-   If an instance fails to be created, you can call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource) operation to check whether the system has insufficient resources or the vSwitch has insufficient private IP addresses.
    

To ensure that instances can be created, we recommend that you perform the following operations:

-   Before you create ECS instances in a region and zone, query ECS resource availability and the number of idle private IP addresses in the CIDR block associated with the specified vSwitch in the region and zone. For example, you can call the [DescribeAvailableResource](/help/en/ecs/api-describeavailableresource#doc-api-Ecs-DescribeAvailableResource) operation to query resources in a zone.
    
-   Use Auto Provisioning to flexibly create instances from larger resource pools. For more information, see [Overview](/help/en/ecs/user-guide/overview-46).
    
-   You can use an elasticity assurance to reserve resources that match specific attributes in a private pool in advance. For more information, see [Overview of Elasticity Assurance](/help/en/ecs/user-guide/overview-of-elasticity-assurance).
