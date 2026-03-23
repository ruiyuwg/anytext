Modifies the configurations of an auto provisioning group.

## Operation description

Before you call this operation, take note of the following items:

-   If you modify the capacity or capacity-related settings of an auto-provisioning group, the group executes a scheduling task after the group is modified.
-   You cannot modify an auto-provisioning group when the group is being deleted.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyAutoProvisioningGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyAutoProvisioningGroup)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ecs:ModifyAutoProvisioningGroup

update

\*autoprovisioninggroup

`acs:ecs:{#regionId}:{#accountId}:autoprovisioninggroup/{#autoprovisioninggroupId}`

none

-   ram:CreateServiceLinkedRole

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the auto-provisioning group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

AutoProvisioningGroupId

string

No

The auto-provisioning group ID.

apg-bp67acfmxazb4ph\*\*\*\*

ExcessCapacityTerminationPolicy

string

No

Specifies whether to release the removed instances when the real-time capacity of the auto-provisioning group exceeds the target capacity and a scale-in event is triggered. Valid values:

-   termination: releases the removed instances.
-   no-termination: removes the instances from the auto-provisioning group but does not release them.

no-termination

DefaultTargetCapacityType

string

No

The type of supplemental instances. When the sum of the PayAsYouGoTargetCapacity and SpotTargetCapacity values is smaller than the TotalTargetCapacity value, the auto-provisioning group creates instances of the specified type to meet the target capacity. Valid values:

-   PayAsYouGo: pay-as-you-go instances
-   Spot: spot instances

Spot

TerminateInstancesWithExpiration

boolean

No

Specifies whether to release instances that are located in the auto-provisioning group after the group expires. Valid values:

-   true: releases instances that are located in the auto-provisioning group.
-   false: removes instances from the auto-provisioning group but does not release them.

false

MaxSpotPrice

float

No

The maximum price of spot instances in the auto-provisioning group.

**Note** When both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the smaller one of the two parameter values is used. The LaunchTemplateConfig.N.MaxPrice parameter is specified when the auto-provisioning group is created, and cannot be modified.

0.5

TotalTargetCapacity

string

No

The total target capacity of the auto-provisioning group. The value must be a positive integer.

The total target capacity of the auto-provisioning group must be greater than or equal to the sum of the target capacity of pay-as-you-go instances specified by the PayAsYouGoTargetCapacity parameter as well as the target capacity of spot instances specified by the SpotTargetCapacity parameter.

70

PayAsYouGoTargetCapacity

string

No

The target capacity of pay-as-you-go instances in the auto-provisioning group. Valid values: Set this parameter to a value smaller than the TotalTargetCapacity value.

30

SpotTargetCapacity

string

No

The target capacity of spot instances in the auto-provisioning group. Valid values: Set this parameter to a value smaller than the TotalTargetCapacity value.

30

AutoProvisioningGroupName

string

No

The name of the auto-provisioning group. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. [It can contain letters, digits, colons (:), underscores (\_), and hyphens (-).](http://https://%E3%80%82%E3%80%81%EF%BC%88:%EF%BC%89%E3%80%81%EF%BC%88_%EF%BC%89%EF%BC%88-%EF%BC%89%E3%80%82)

apg-test

LaunchTemplateConfig

array<object>

No

The extended configurations of the launch template.

object

No

Extended configuration N.

VSwitchId

string

No

The ID of the vSwitch in extended configuration N. The zone of the instances created from the extended configuration is determined by the vSwitch.

vsw-sn5bsitu4lfzgc5o7\*\*\*\*

MaxPrice

double

No

The maximum price of spot instances in extended configuration N.

3

Priority

integer

No

The priority of extended configuration N. A value of 0 indicates the highest priority. The value must be greater than 0.

1

InstanceType

string

No

The instance type in extended configuration N. Valid values of N: 1 to 20. For more information about the valid values of this parameter, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

ecs.g5.large

WeightedCapacity

double

No

The weight of the instance type specified in the extended configuration. A greater weight indicates that a single instance has more computing power and fewer instances are required. The value must be greater than 0.

The weight is calculated based on the computing power of the instance type and the minimum computing power of a single instance in the cluster that can created by the auto-provisioning group. For example, assume that the minimum computing power of a single instance is 8 vCPUs and 60 GiB of memory.

-   For an instance type with 8 vCPUs and 60 GiB of memory, you can set the weight to 1.
-   For an instance type with 16 vCPUs and 120 GiB of memory, you can set the weight to 2.

2

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

B48A12CD-1295-4A38-A8F0-0E92C937\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "B48A12CD-1295-4A38-A8F0-0E92C937****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter

The specified parameter "AutoProvisioningGroupId" should not be null.

Elastic Supply Group Id(AutoProvisioningGroupId) must be filled in.

400

MissingParameter

The specified parameter "AutoProvisioningGroupConfig" should not be null.

\-

400

NoPermission

%s

\-

400

InvalidLaunchTemplateConfigs.SizeExceed

The size of LaunchTemplateConfigs exceeds limit.

The number of LaunchTemplateConfig in the elastic supply group exceeds the limit.

400

QuotaExceed.LaunchTemplateConfigs

%s

\-

400

OperationDenied

%s

The operation is denied.

403

Forbidden.RAM

User not authorized to operate on the specified resource, or this API doesn't support RAM.

\-

403

InvalidName.Malformed

The specified parameter "AutoProvisioningGroupName" is not valid.

\-

403

AutoProvisioningGroup.Unauthorized

Unauthorized to operate current action.

\-

403

AutoProvisioningGroup.IncorrectStatus

Current status of AutoProvisioningGroup does not support curren action.

\-

403

InvalidParameter.TargetCapacity

The Capacity is illegal, TotalTargetCapacity, PayAsYouGoTargetCapacity, SpotTargetCapacity must be specified, meanwhile, the TargetCapacity must be larger than or equal to the sum of SpotCapacity and OnDemandCapacity.

\-

404

InvalidAutoProvisioningGroupId.NotFound

The specified AutoProvisioningGroupId does not exist.

The specified elastic supply group does not exist.

404

InvalidParameter.MaxPrice

The specified parameter "MaxSpotPrice" is not valid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
