You can call the DescribeScalingGroups operation to query basic information about a scaling group, such as its instances and scaling configurations.

## Try it now

[You can call this operation directly in OpenAPI Explorer to skip signature calculations. After a successful call, OpenAPI Explorer automatically generates sample code for different SDKs.](https://api.aliyun.com/#product=Ess&api=DescribeScalingGroups&type=RPC&version=2014-08-28)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

DescribeScalingGroups

The action to perform. Set the value to DescribeScalingGroups.

RegionId

String

Yes

cn-qingdao

The ID of the region where the scaling group is located.

PageNumber

Integer

No

1

The page number of the scaling group list. The value starts from 1.

Default value: 1.

PageSize

Integer

No

10

The number of entries to return on each page for a paged query. Maximum value: 50.

Default value: 10.

ScalingGroupName

String

No

scalinggroup\*\*\*\*

The name of the scaling group.

ScalingGroupName.1

String

No

scalinggroup\*\*\*\*

The name of scaling group 1. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.2

String

No

scalinggroup\*\*\*\*

The name of scaling group 2. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.3

String

No

scalinggroup\*\*\*\*

The name of scaling group 3. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.4

String

No

scalinggroup\*\*\*\*

The name of scaling group 4. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.5

String

No

scalinggroup\*\*\*\*

The name of scaling group 5. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.6

String

No

scalinggroup\*\*\*\*

The name of scaling group 6. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.7

String

No

scalinggroup\*\*\*\*

The name of scaling group 7. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.8

String

No

scalinggroup\*\*\*\*

The name of scaling group 8. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.9

String

No

scalinggroup\*\*\*\*

The name of scaling group 9. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.10

String

No

scalinggroup\*\*\*\*

The name of scaling group 10. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.11

String

No

scalinggroup\*\*\*\*

The name of scaling group 11. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.12

String

No

scalinggroup\*\*\*\*

The name of scaling group 12. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.13

String

No

scalinggroup\*\*\*\*

The name of scaling group 13. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.14

String

No

scalinggroup\*\*\*\*

The name of scaling group 14. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.15

String

No

scalinggroup\*\*\*\*

The name of scaling group 15. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.16

String

No

scalinggroup\*\*\*\*

The name of scaling group 16. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.17

String

No

scalinggroup\*\*\*\*

The name of scaling group 17. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.18

String

No

scalinggroup\*\*\*\*

The name of scaling group 18. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.19

String

No

scalinggroup\*\*\*\*

The name of scaling group 19. The query ignores the names of inactive scaling groups and does not report an error.

ScalingGroupName.20

String

No

scalinggroup\*\*\*\*

The name of scaling group 20. The query ignores the names of inactive scaling groups and does not report an error.

GroupType

String

No

ECS

The type of instances that are managed by the scaling group. Valid values:

-   ECS: ECS instances.
    
-   ECI: elastic container instances.
    

ScalingGroupId.N

String

No

asg-bp14wlu85wrpchm0\*\*\*\*

The ID of scaling group N. Valid values of N: 1 to 20. The query ignores the IDs of inactive scaling groups and does not report an error.

ResourceGroupId

String

No

rg-123\*\*\*\*

The ID of the resource group to which the scaling group belongs.

**Note**

If no scaling group exists in the specified resource group, the query returns an empty result and does not report an error.

Tag.N.Key

String

No

Department

The key of tag N of the scaling group.

Tag.N.Value

String

No

Finance

The value of the tag for the scaling group.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

The ID of the request.

PageNumber

Integer

1

The number of the current page.

PageSize

Integer

10

The number of entries returned per page.

TotalCount

Integer

1

The total number of scaling groups.

ScalingGroups

Array of ScalingGroup

A collection of scaling groups.

ScalingGroup

VpcId

String

vpc-bp1vwnn14rqpyiczj\*\*\*\*

The ID of the VPC to which the scaling group belongs.

CreationTime

String

2014-08-14T10:58Z

The time when the scaling group was created.

TotalInstanceCount

Integer

1

The total number of ECS instances in the scaling group.

ScalingGroupName

String

dyrSuvBOtO1dEdIlIbp\*\*\*\*

The name of the scaling group.

SpotInstancePools

Integer

5

The number of instance types that you can specify. Auto Scaling creates spot instances of multiple instance types that are provided at the lowest cost in a balanced manner. Valid values: 0 to 10.

If you set the `MultiAZPolicy` parameter to `COMPOSABLE`, the default value of this parameter is 2.

StoppedCapacity

Integer

1

The number of instances that are in the Economical Mode in the scaling group.

OnDemandPercentageAboveBaseCapacity

Integer

20

The percentage of on-demand instances among the excess instances created after the value of OnDemandBaseCapacity is reached. Valid values: 0 to 100.

If you set the `MultiAZPolicy` parameter to `COMPOSABLE`, the default value of this parameter is 100.

ModificationTime

String

2014-08-14T10:58Z

Last modified.

MinSize

Integer

1

The minimum number of ECS instances in the scaling group.

ScalingGroupId

String

asg-bp14wlu85wrpchm0\*\*\*\*

The ID of the scaling group.

CompensateWithOnDemand

Boolean

true

Indicates whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if spot instances cannot be created due to reasons such as price and inventory. This parameter is valid only when `MultiAZPolicy` is set to `COST_OPTIMIZED`. Valid values:

-   true: Pay-as-you-go instances are automatically created.
    
-   false: Pay-as-you-go instances are not automatically created.
    

ScalingPolicy

String

recycle

The reclaim mode of the scaling group. Valid values:

-   recycle: economical mode.
    
-   release: release mode.
    
-   forcerelease: forced release mode.
    

For more information about the actions on instances that are removed from a scaling group, see [RemoveInstances](/help/en/auto-scaling/developer-reference/api-removeinstances).

RemovingWaitCapacity

Integer

1

The number of ECS instances that are in the Pending Remove state in the scaling group.

ActiveCapacity

Integer

1

The number of ECS instances that are successfully added to the scaling group and running.

OnDemandBaseCapacity

Integer

30

The minimum number of on-demand instances that must be included in the scaling group. Valid values: 0 to 1000. If the number of on-demand instances in the scaling group is less than this value, Auto Scaling preferentially creates on-demand instances.

If you set the `MultiAZPolicy` parameter to `COMPOSABLE`, the default value of this parameter is 0.

ProtectedCapacity

Integer

1

The number of ECS instances that are in the Protected state in the scaling group.

HealthCheckType

String

ECS

The health check mode of the scaling group. Valid values:

-   NONE: No health checks are performed.
    
-   ECS: Health checks are performed on instances in the scaling group. This value can be used to enable health checks for both ECS and ECI scaling groups.
    
-   LOAD\_BALANCER: The health status of instances is determined based on the health check results of the load balancer. Health check results of Classic Load Balancer (CLB) instances are not supported.
    

LifecycleState

String

Active

The state of the scaling group. Valid values:

-   Active: The scaling group is active. An active scaling group can receive requests to execute scaling rules and trigger scaling activities.
    
-   Inactive: The scaling group is inactive. An inactive scaling group does not receive requests to execute scaling rules.
    
-   Deleting: The scaling group is being deleted. A scaling group in the Deleting state does not receive requests to execute scaling rules, and its parameters cannot be modified.
    

GroupDeletionProtection

Boolean

true

Indicates whether deletion protection is enabled for the scaling group. Valid values:

-   true: Deletion protection is enabled. The scaling group cannot be deleted.
    
-   false: Deletion protection is disabled.
    

ActiveScalingConfigurationId

String

asc-bp1et2qekq3ojr33\*\*\*\*

The ID of the active scaling configuration in the scaling group.

GroupType

String

ECS

The type of instances that are managed by the scaling group.

MultiAZPolicy

String

PRIORITY

The scaling policy for the ECS instances in the multi-zone scaling group. Valid values:

-   PRIORITY: Scales instances based on the vSwitch priority. The vSwitch priority is specified by the VSwitchIds.N parameter. Auto Scaling scales instances in the zone of the vSwitch that has the highest priority. If the scaling fails, Auto Scaling scales instances in the zone of the vSwitch that has the next highest priority.
    
-   COST\_OPTIMIZED: Tries to create instances in ascending order of vCPU unit price. If the scaling configuration specifies multiple instance types with a preemptible billing method, preemptible instances are created first. You can use the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances if preemptible instances cannot be created due to reasons such as inventory shortages.
    
    **Note**
    
    The COST\_OPTIMIZED policy is valid only when multiple instance types are specified in the scaling configuration or when preemptible instances are selected.
    
-   BALANCE: Distributes ECS instances evenly across the specified zones in the scaling group. If the distribution of ECS instances becomes uneven due to inventory shortages, you can call the [RebalanceInstance](/help/en/auto-scaling/developer-reference/api-rebalanceinstances) operation to rebalance the resources.
    
-   COMPOSABLE: A composite policy that lets you combine the preceding policies as needed to scale ECS instances in a multi-zone scaling group.
    

RemovingCapacity

Integer

0

The number of ECS instances that are being removed from the scaling group.

PendingWaitCapacity

Integer

1

The number of ECS instances that are in the Pending Add state in the scaling group.

StandbyCapacity

Integer

1

The number of instances that are in the standby state in the scaling group.

PendingCapacity

Integer

0

The number of ECS instances that are being added to the scaling group but have not completed their configurations.

LaunchTemplateId

String

lt-m5e3ofjr1zn1aw7\*\*\*\*

The ID of the launch template that is used by the scaling group.

TotalCapacity

Integer

1

If instance type weights are specified for the scaling group, this parameter indicates the total weighted capacity of all ECS instances in the scaling group. Otherwise, this parameter indicates the total number of all ECS instances in the scaling group.

DesiredCapacity

Integer

5

The expected number of ECS instances in the scaling group. Auto Scaling automatically maintains the number of ECS instances at the expected value.

SpotInstanceRemedy

Boolean

true

Indicates whether to supplement spot instances. If this feature is enabled, Auto Scaling attempts to create a new instance to replace a spot instance when the spot instance is reclaimed.

LaunchTemplateVersion

String

Default

The version of the launch template that is used by the scaling group.

RegionId

String

cn-qingdao

The ID of the region where the scaling group is located.

VSwitchId

String

vsw-bp1whw2u46cn8zubm\*\*\*\*

The ID of the vSwitch that is associated with the scaling group.

MaxSize

Integer

2

The maximum number of ECS instances in the scaling group.

DefaultCooldown

Integer

60

The default cooldown time of the scaling group. During the cooldown time, the scaling group does not execute other scaling activities. This parameter is valid only for scaling activities that are triggered by event-triggered tasks of [CloudMonitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor).

VServerGroups

Array of VServerGroup

The list of backend server groups.

VServerGroup

LoadBalancerId

String

147b46d767c-cn-qingdao-cm5\*\*\*\*

The ID of the SLB instance to which the backend server group belongs.

VServerGroupAttributes

Array of VServerGroupAttribute

The attributes of the backend server group.

VServerGroupAttribute

VServerGroupId

String

rsp-bp12bjrny\*\*\*\*

The ID of the backend server group.

Weight

Integer

1

The weight of the backend server group.

Port

Integer

22

The port number that the SLB instance uses to provide services.

LaunchTemplateOverrides

Array of LaunchTemplateOverride

The instance type information of the extended launch template.

LaunchTemplateOverride

WeightedCapacity

Integer

4

The weight of the instance type. The weight specifies the capacity of a single instance of the specified instance type in the scaling group. A higher weight requires fewer instances of the specified instance type to meet the expected capacity.

InstanceType

String

ecs.c5.xlarge

The specified instance type. This instance type overwrites the instance type in the launch template.

SpotPriceLimit

Float

0.025

The maximum bid price for the instance type specified in `LaunchTemplateOverride.N.InstanceType`. You can specify this parameter for N instance types. The launch template supports N instance types. Valid values of N: 1 to 10.

**Note**

This parameter is valid only when the `LaunchTemplateId` parameter is specified.

AlbServerGroups

Array of AlbServerGroup

A collection of information about the Application Load Balancer (ALB) server groups.

AlbServerGroup

AlbServerGroupId

String

sgp-ddwb0y0g6y9bjm\*\*\*\*

The ID of the ALB server group.

Weight

Integer

100

The weight of an ECS instance as a backend server after the instance is added to the ALB server group.

Port

Integer

80

The port number used by an ECS instance after the instance is added to the ALB server group.

ServerGroups

Array of ServerGroup

A collection of information about the load balancer server groups.

**Note**

You can use this parameter to obtain information about the Application Load Balancer (ALB), Network Load Balancer (NLB), and Gateway Load Balancer (GWLB) server groups that are associated with the scaling group.

ServerGroup

ServerGroupId

String

sgp-i9ouakeaerr\*\*\*\*\*

The ID of the server group.

Type

String

ALB

The type of the server group. Valid values:

-   ALB: Application Load Balancer.
    
-   NLB: Network Load Balancer.
    
-   GWLB: Gateway Load Balancer.
    

Weight

Integer

100

The weight of an ECS instance as a backend server after the instance is added to the server group.

Port

Integer

80

The port number used by an ECS instance after the instance is added to the server group.

RemovalPolicies

Array of String

OldestScalingConfiguration

The policies for removing ECS instances from the scaling group. Valid values:

-   OldestInstance: Removes the ECS instance that was created the earliest.
    
-   NewestInstance: Removes the ECS instance that was created most recently.
    
-   OldestScalingConfiguration: Removes the ECS instance that was created based on the earliest scaling configuration.
    
-   CustomPolicy: Removes ECS instances based on a custom scale-in policy that is specified by a Function Compute function.
    

DBInstanceIds

Array of String

rm-bp15556qzebg1\*\*\*\*

The IDs of the ApsaraDB RDS instances that are associated with the scaling group.

LoadBalancerIds

Array of String

lb-bp19byhscefk3x0li\*\*\*\*

The list of IDs of the SLB instances that are associated with the scaling group.

VSwitchIds

Array of String

vsw-bp1whw2u46cn8zubm\*\*\*\*

A collection of IDs of the vSwitches that are associated with the scaling group. If you specify the VSwitchIds parameter, the VSwitchId parameter is ignored.

SuspendedProcesses

Array of String

ScaleIn

The suspended processes. If no process is suspended, an empty value is returned. Valid values:

-   ScaleIn: the scale-in process.
    
-   ScaleOut: the scale-out process.
    
-   HealthCheck: the health check process.
    
-   AlarmNotification: the event-triggered task process.
    
-   ScheduledAction: the scheduled task process.
    

SystemSuspended

Boolean

true

Indicates whether Auto Scaling stops executing scaling activities in the scaling group. Valid values:

-   true: Auto Scaling stops executing scaling activities in the scaling group because scaling activities have failed for more than seven consecutive days. You must modify the scaling group or scaling configuration to resume the scaling activities.
    
-   false: Auto Scaling executes scaling activities in the scaling group.
    

MonitorGroupId

String

1497\*\*\*\*

The ID of the CloudMonitor application group that is associated with the scaling group.

AzBalance

Boolean

false

Indicates whether the capacity of the scaling group is evenly distributed across multiple zones. Valid values:

-   true: The capacity of the scaling group is evenly distributed across multiple zones.
    
-   false: The capacity of the scaling group is not evenly distributed across multiple zones.
    
    **Note**
    
    This parameter is valid only when the `MultiAZPolicy` parameter is set to `COMPOSABLE`.
    

AllocationStrategy

String

priority

The capacity allocation policy. This policy determines how Auto Scaling selects available instance types to meet the capacity requirement. The capacity allocation policy is valid for both on-demand and spot instances. Valid values:

-   priority: Creates instances in the order of the configured instance types.
    
-   lowestPrice: Creates instances based on the unit price of vCPUs from lowest to highest.
    
    **Note**
    
    This parameter is valid only when the `MultiAZPolicy` parameter is set to `COMPOSABLE`.
    

SpotAllocationStrategy

String

lowestPrice

The allocation policy for spot instances. You can use this parameter to separately specify the allocation policy for spot instances. This parameter is valid only when the `MultiAZPolicy` parameter is set to `COMPOSABLE`. Valid values:

-   priority: Creates instances in the order of the configured instance types.
    
-   lowestPrice: Creates instances based on the unit price of vCPUs from lowest to highest.
    

MaxInstanceLifetime

Integer

null

The maximum lifetime of an instance in the scaling group. Unit: seconds.

Valid values: 0 or a value in the range of `[86400, Integer.maxValue]`. A value of 0 clears the previously set MaxInstanceLifetime value, which means that the instance has an unlimited lifetime.

Default value: null.

**Note**

This parameter is not supported for ECI scaling groups or scaling groups for which the economical mode is enabled.

CustomPolicyARN

String

acs:fc:cn-zhangjiakou:16145688\*\*\*\*:services/ess\_custom\_terminate\_policy.LATEST/functions/ess\_custom\_terminate\_policy\_name

The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy that is specified by a Function Compute function. This parameter is valid only when the first removal policy is set to CustomPolicy.

InitCapacity

Integer

0

The number of instances that are in the initialization state before a scale-out activity in the scaling group.

ResourceGroupId

String

rg-123\*\*\*\*

The ID of the resource group to which the scaling group belongs.

LoadBalancerConfigs

Array of LoadBalancerConfig

The list of CLB configurations.

LoadBalancerConfig

LoadBalancerId

String

147b46d767c-cn-qingdao-cm5\*\*\*\*

The ID of the CLB instance.

Weight

Integer

10

The weight of an ECS instance as a backend server after Auto Scaling adds the instance to a CLB server group. A higher weight indicates that more access requests are forwarded to the ECS instance. If the weight is 0, no access requests are forwarded to the ECS instance.

Valid values: 0 to 100.

EnableDesiredCapacity

Boolean

false

Indicates whether the expected number of instances is enabled. Valid values:

-   true: The expected number of instances is enabled. The response returns information about the expected number of instances.
    
-   false: The expected number of instances is not enabled. The response does not return information about the expected number of instances.
    

Tags

Array of Tag

A collection of tags of the scaling group.

Tag

TagKey

String

Department

The tag key of the scaling group.

TagValue

String

Finance

The tag value of the scaling group.

Propagate

Boolean

false

Indicates whether the tag can be propagated. Valid values:

-   true: The tag is propagated only to newly created instances, not to instances that are already running in the scaling group.
    
-   false: The tag is not propagated to any instances.
    

Default value: false.

HealthCheckTypes

Array of String

ECS

The health check mode of the scaling group. Valid values:

-   NONE: No health checks are performed.
    
-   ECS: Health checks are performed on instances in the scaling group. This value can be used to enable health checks for both ECS and ECI scaling groups.
    
-   LOAD\_BALANCER: The health status of instances is determined based on the health check results of the load balancer. Health check results of CLB instances are not supported.
    

DBInstances

Array of DBInstance

The list of databases that are associated with the scaling group.

DBInstance

DBInstanceId

String

rm-m5eqju85s45mu0\*\*\*

The ID of the database instance.

Type

String

RDS

The type of the database. Valid values:

-   RDS
    
-   Redis
    
-   MongoDB
    

SecurityGroupIds

Array of String

sg-uf65zt66cf2a0q47\*\*\*

Indicates whether to remove the security groups in the list from the whitelists of the database security groups. This parameter is valid for the associated databases only when the `AttachMode` parameter in the CreateScalingGroup operation is set to `SecurityGroup`. Valid values:

-   true: The security groups are removed.
    
-   false: The security groups are not removed.
    

SpotCapacity

Integer

0

The number of spot instances in the scaling group.

StopInstanceTimeout

Integer

60

The timeout period for an ECS instance to enter the Stopped state during a scale-in activity. Unit: seconds.

CapacityOptions

Object

The capacity options.

OnDemandBaseCapacity

Integer

0

The minimum number of on-demand instances that must be included in the scaling group. If the number of on-demand instances in the scaling group is less than this value, Auto Scaling preferentially creates on-demand instances. Valid values: 0 to 1000.

OnDemandPercentageAboveBaseCapacity

Integer

0

The percentage of on-demand instances among the excess instances created after the value of `OnDemandBaseCapacity` is reached. Valid values: 0 to 100.

CompensateWithOnDemand

Boolean

true

Indicates whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if spot instances cannot be created due to reasons such as price and inventory. This parameter is valid only when `MultiAZPolicy` is set to `COST_OPTIMIZED`. Valid values:

-   true: Pay-as-you-go instances are automatically created.
    
-   false: Pay-as-you-go instances are not automatically created.
    

SpotAutoReplaceOnDemand

Boolean

false

After you enable `CompensateWithOnDemand`, if the percentage of on-demand instances exceeds the value of `OnDemandPercentageAboveBaseCapacity`, Auto Scaling attempts to replace the excess on-demand instances with spot instances. This typically occurs when `CompensateWithOnDemand` creates on-demand instances because spot instances are unavailable due to inventory or price issues. This replacement prevents on-demand instances from being retained for an extended period. Valid values:

-   true: Allows replacement.
    
-   false: Does not allow replacement.
    

PriceComparisonMode

String

PricePerUnit

The price comparison mode for the cost optimization policy of the scaling group. Valid values:

-   PricePerUnit: Compares prices based on the price per unit of capacity.
    
    The capacity of an instance in a scaling group is determined by the weight set for its instance type. The default weight is 1, which means one ECS instance has a capacity of 1.
    
-   PricePerVCpu: Compares prices based on the price per vCPU.
    

Default value: PricePerUnit.

BalanceMode

String

BalancedBestEffort

The zone balancing mode. This parameter is valid only when zone balancing is enabled. Valid values:

-   BalancedBestEffort:
    
    If resources cannot be created in a zone, the system attempts to create them in other zones to ensure resource delivery.
    
-   BalancedOnly:
    
    If resources cannot be created in a zone, the system does not attempt to create them in other zones. The scale-out activity is partially successful. This prevents resource imbalance across zones.
    

AutoRebalance

Boolean

false

Indicates whether to enable automatic rebalancing for the scaling group. This parameter is valid only if you enable zone balancing for the scaling group and set BalanceMode to BalancedOnly. Valid values:

-   false: Automatic rebalancing is disabled.
    
-   true: Automatic rebalancing is enabled. Auto Scaling automatically checks the capacity in each zone. If the capacity is imbalanced, Auto Scaling automatically performs scale-out or scale-in activities to rebalance the capacity across zones.
    

## Examples

Sample request

```
http(s)://ess.aliyuncs.com/?Action=DescribeScalingGroups
&RegionId=cn-qingdao
&PageNumber=1
&PageSize=10
&ScalingGroupName=scalinggroup****
&ScalingGroupName.1=scalinggroup****
&ScalingGroupName.2=scalinggroup****
&ScalingGroupName.3=scalinggroup****
&ScalingGroupName.4=scalinggroup****
&ScalingGroupName.5=scalinggroup****
&ScalingGroupName.6=scalinggroup****
&ScalingGroupName.7=scalinggroup****
&ScalingGroupName.8=scalinggroup****
&ScalingGroupName.9=scalinggroup****
&ScalingGroupName.10=scalinggroup****
&ScalingGroupName.11=scalinggroup****
&ScalingGroupName.12=scalinggroup****
&ScalingGroupName.13=scalinggroup****
&ScalingGroupName.14=scalinggroup****
&ScalingGroupName.15=scalinggroup****
&ScalingGroupName.16=scalinggroup****
&ScalingGroupName.17=scalinggroup****
&ScalingGroupName.18=scalinggroup****
&ScalingGroupName.19=scalinggroup****
&ScalingGroupName.20=scalinggroup****
&GroupType=ECS
&ScalingGroupId=["asg-bp14wlu85wrpchm0****"]
&ResourceGroupId=rg-123****
&Tag=[{"Key":"Department","Value":"Finance"}]
&Common request parameters
```

Sample responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeScalingGroupsResponse>
    <RequestId>473469C7-AA6F-4DC5-B3DB-A3DC0DE3****</RequestId>
    <PageNumber>1</PageNumber>
    <PageSize>10</PageSize>
    <TotalCount>1</TotalCount>
    <ScalingGroups>
        <VpcId>vpc-bp1vwnn14rqpyiczj****</VpcId>
        <CreationTime>2014-08-14T10:58Z</CreationTime>
        <TotalInstanceCount>1</TotalInstanceCount>
        <ScalingGroupName>dyrSuvBOtO1dEdIlIbp****</ScalingGroupName>
        <SpotInstancePools>5</SpotInstancePools>
        <StoppedCapacity>1</StoppedCapacity>
        <OnDemandPercentageAboveBaseCapacity>20</OnDemandPercentageAboveBaseCapacity>
        <ModificationTime>2014-08-14T10:58Z</ModificationTime>
        <MinSize>1</MinSize>
        <ScalingGroupId>asg-bp14wlu85wrpchm0****</ScalingGroupId>
        <CompensateWithOnDemand>true</CompensateWithOnDemand>
        <ScalingPolicy>recycle</ScalingPolicy>
        <RemovingWaitCapacity>1</RemovingWaitCapacity>
        <ActiveCapacity>1</ActiveCapacity>
        <OnDemandBaseCapacity>30</OnDemandBaseCapacity>
        <ProtectedCapacity>1</ProtectedCapacity>
        <HealthCheckType>ECS</HealthCheckType>
        <LifecycleState>Active</LifecycleState>
        <GroupDeletionProtection>true</GroupDeletionProtection>
        <ActiveScalingConfigurationId>asc-bp1et2qekq3ojr33****</ActiveScalingConfigurationId>
        <GroupType>ECS</GroupType>
        <MultiAZPolicy>PRIORITY</MultiAZPolicy>
        <RemovingCapacity>0</RemovingCapacity>
        <PendingWaitCapacity>1</PendingWaitCapacity>
        <StandbyCapacity>1</StandbyCapacity>
        <PendingCapacity>0</PendingCapacity>
        <LaunchTemplateId>lt-m5e3ofjr1zn1aw7****</LaunchTemplateId>
        <TotalCapacity>1</TotalCapacity>
        <DesiredCapacity>5</DesiredCapacity>
        <SpotInstanceRemedy>true</SpotInstanceRemedy>
        <LaunchTemplateVersion>Default</LaunchTemplateVersion>
        <RegionId>cn-qingdao</RegionId>
        <VSwitchId>vsw-bp1whw2u46cn8zubm****</VSwitchId>
        <MaxSize>2</MaxSize>
        <DefaultCooldown>60</DefaultCooldown>
        <VServerGroups>
            <LoadBalancerId>147b46d767c-cn-qingdao-cm5****</LoadBalancerId>
            <VServerGroupAttributes>
                <VServerGroupId>rsp-bp12bjrny****</VServerGroupId>
                <Weight>1</Weight>
                <Port>22</Port>
            </VServerGroupAttributes>
        </VServerGroups>
        <LaunchTemplateOverrides>
            <WeightedCapacity>4</WeightedCapacity>
            <InstanceType>ecs.c5.xlarge</InstanceType>
            <SpotPriceLimit>0.025</SpotPriceLimit>
        </LaunchTemplateOverrides>
        <AlbServerGroups>
            <AlbServerGroupId>sgp-ddwb0y0g6y9bjm****</AlbServerGroupId>
            <Weight>100</Weight>
            <Port>80</Port>
        </AlbServerGroups>
        <ServerGroups>
            <ServerGroupId>sgp-i9ouakeaerr*****</ServerGroupId>
            <Type>ALB</Type>
            <Weight>100</Weight>
            <Port>80</Port>
        </ServerGroups>
        <RemovalPolicies>OldestScalingConfiguration</RemovalPolicies>
        <DBInstanceIds>rm-bp15556qzebg1****</DBInstanceIds>
        <LoadBalancerIds>lb-bp19byhscefk3x0li****</LoadBalancerIds>
        <VSwitchIds>vsw-bp1whw2u46cn8zubm****</VSwitchIds>
        <SuspendedProcesses>ScaleIn</SuspendedProcesses>
        <SystemSuspended>true</SystemSuspended>
        <MonitorGroupId>1497****</MonitorGroupId>
        <AzBalance>false</AzBalance>
        <AllocationStrategy>priority</AllocationStrategy>
        <SpotAllocationStrategy>lowestPrice</SpotAllocationStrategy>
        <CustomPolicyARN>acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name</CustomPolicyARN>
        <InitCapacity>0</InitCapacity>
        <ResourceGroupId>rg-123****</ResourceGroupId>
        <LoadBalancerConfigs>
            <LoadBalancerId>147b46d767c-cn-qingdao-cm5****</LoadBalancerId>
            <Weight>10</Weight>
        </LoadBalancerConfigs>
        <EnableDesiredCapacity>false</EnableDesiredCapacity>
        <Tags>
            <TagKey>Department</TagKey>
            <TagValue>Finance</TagValue>
            <Propagate>false</Propagate>
        </Tags>
        <HealthCheckTypes>ECS</HealthCheckTypes>
        <DBInstances>
            <DBInstanceId>rm-m5eqju85s45mu0***</DBInstanceId>
            <Type>RDS</Type>
            <SecurityGroupIds>sg-uf65zt66cf2a0q47***</SecurityGroupIds>
        </DBInstances>
        <SpotCapacity>0</SpotCapacity>
        <StopInstanceTimeout>60</StopInstanceTimeout>
        <CapacityOptions>
            <OnDemandBaseCapacity>0</OnDemandBaseCapacity>
            <OnDemandPercentageAboveBaseCapacity>0</OnDemandPercentageAboveBaseCapacity>
            <CompensateWithOnDemand>true</CompensateWithOnDemand>
            <SpotAutoReplaceOnDemand>false</SpotAutoReplaceOnDemand>
        </CapacityOptions>
    </ScalingGroups>
</DescribeScalingGroupsResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "PageNumber" : 1,
  "PageSize" : 10,
  "TotalCount" : 1,
  "ScalingGroups" : [ {
    "VpcId" : "vpc-bp1vwnn14rqpyiczj****",
    "CreationTime" : "2014-08-14T10:58Z",
    "TotalInstanceCount" : 1,
    "ScalingGroupName" : "dyrSuvBOtO1dEdIlIbp****",
    "SpotInstancePools" : 5,
    "StoppedCapacity" : 1,
    "OnDemandPercentageAboveBaseCapacity" : 20,
    "ModificationTime" : "2014-08-14T10:58Z",
    "MinSize" : 1,
    "ScalingGroupId" : "asg-bp14wlu85wrpchm0****",
    "CompensateWithOnDemand" : true,
    "ScalingPolicy" : "recycle",
    "RemovingWaitCapacity" : 1,
    "ActiveCapacity" : 1,
    "OnDemandBaseCapacity" : 30,
    "ProtectedCapacity" : 1,
    "HealthCheckType" : "ECS",
    "LifecycleState" : "Active",
    "GroupDeletionProtection" : true,
    "ActiveScalingConfigurationId" : "asc-bp1et2qekq3ojr33****",
    "GroupType" : "ECS",
    "MultiAZPolicy" : "PRIORITY",
    "RemovingCapacity" : 0,
    "PendingWaitCapacity" : 1,
    "StandbyCapacity" : 1,
    "PendingCapacity" : 0,
    "LaunchTemplateId" : "lt-m5e3ofjr1zn1aw7****",
    "TotalCapacity" : 1,
    "DesiredCapacity" : 5,
    "SpotInstanceRemedy" : true,
    "LaunchTemplateVersion" : "Default",
    "RegionId" : "cn-qingdao",
    "VSwitchId" : "vsw-bp1whw2u46cn8zubm****",
    "MaxSize" : 2,
    "DefaultCooldown" : 60,
    "VServerGroups" : [ {
      "LoadBalancerId" : "147b46d767c-cn-qingdao-cm5****",
      "VServerGroupAttributes" : [ {
        "VServerGroupId" : "rsp-bp12bjrny****",
        "Weight" : 1,
        "Port" : 22
      } ]
    } ],
    "LaunchTemplateOverrides" : [ {
      "WeightedCapacity" : 4,
      "InstanceType" : "ecs.c5.xlarge",
      "SpotPriceLimit" : 0.025
    } ],
    "AlbServerGroups" : [ {
      "AlbServerGroupId" : "sgp-ddwb0y0g6y9bjm****",
      "Weight" : 100,
      "Port" : 80
    } ],
    "ServerGroups" : [ {
      "ServerGroupId" : "sgp-i9ouakeaerr*****",
      "Type" : "ALB",
      "Weight" : 100,
      "Port" : 80
    } ],
    "RemovalPolicies" : [ "OldestScalingConfiguration" ],
    "DBInstanceIds" : [ "rm-bp15556qzebg1****" ],
    "LoadBalancerIds" : [ "lb-bp19byhscefk3x0li****" ],
    "VSwitchIds" : [ "vsw-bp1whw2u46cn8zubm****" ],
    "SuspendedProcesses" : [ "ScaleIn" ],
    "SystemSuspended" : true,
    "MonitorGroupId" : "1497****",
    "AzBalance" : false,
    "AllocationStrategy" : "priority",
    "SpotAllocationStrategy" : "lowestPrice",
    "CustomPolicyARN" : "acs:fc:cn-zhangjiakou:16145688****:services/ess_custom_terminate_policy.LATEST/functions/ess_custom_terminate_policy_name",
    "InitCapacity" : 0,
    "ResourceGroupId" : "rg-123****",
    "LoadBalancerConfigs" : [ {
      "LoadBalancerId" : "147b46d767c-cn-qingdao-cm5****",
      "Weight" : 10
    } ],
    "EnableDesiredCapacity" : false,
    "Tags" : [ {
      "TagKey" : "Department",
      "TagValue" : "Finance",
      "Propagate" : false
    } ],
    "HealthCheckTypes" : [ "ECS" ],
    "DBInstances" : [ {
      "DBInstanceId" : "rm-m5eqju85s45mu0***",
      "Type" : "RDS",
      "SecurityGroupIds" : [ "sg-uf65zt66cf2a0q47***" ]
    } ],
    "SpotCapacity" : 0,
    "StopInstanceTimeout" : 60,
    "CapacityOptions" : {
      "OnDemandBaseCapacity" : 0,
      "OnDemandPercentageAboveBaseCapacity" : 0,
      "CompensateWithOnDemand" : true,
      "SpotAutoReplaceOnDemand" : false
    }
  } ]
}
```

## Error codes

For a list of error codes, see the [Error Center](https://error-center.alibabacloud.com/status/product/Ess).
