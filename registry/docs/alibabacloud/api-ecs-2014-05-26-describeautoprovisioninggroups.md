Queries information about one or more auto provisioning groups.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroups)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroups)

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

ecs:DescribeAutoProvisioningGroups

get

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the auto provisioning group.

cn-hangzhou

PageNumber

integer

No

The page number.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

2

AutoProvisioningGroupName

string

No

The name of the auto provisioning group.

testAutoProvisioningGroupName

ResourceGroupId

string

No

The ID of the resource group to which the auto provisioning group belongs.

rg-bp67acfmxazb4p\*\*\*\*

AutoProvisioningGroupId

array

No

The ID of the auto provisioning group. You can specify up to 20 IDs.

string

No

The ID of the auto provisioning group.

apg-sn54avj8htgvtyh8\*\*\*\*

AutoProvisioningGroupStatus

array

No

The status of the auto provisioning group.

string

No

The status of auto provisioning group N. Valid values:

-   submitted: The auto provisioning group is created but has not started to execute scheduling tasks.
-   active: The auto provisioning group is executing scheduling tasks.
-   deleted: The auto provisioning group is deleted.
-   deleted-running: The auto provisioning group is being deleted.
-   modifying: The auto provisioning group is being modified.

active

Tag

array<object>

No

The tags that are added to the auto provisioning group.

object

No

Key

string

No

The key of tag N that is added to the auto provisioning group.

Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

TestKey

Value

string

No

The value of tag N that is added to the auto provisioning group.

Valid values of N: 1 to 20. The tag value can be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries returned per page.

10

RequestId

string

The ID of the request.

745CEC9F-0DD7-4451-9FE7-8B752F39\*\*\*\*

PageNumber

integer

The number of the page returned.

1

TotalCount

integer

The number of queried auto provisioning groups.

10

AutoProvisioningGroups

array<object>

Details about the auto provisioning groups.

AutoProvisioningGroup

object

CreationTime

string

The time when the auto provisioning group was created.

2019-04-01T15:10:20Z

AutoProvisioningGroupName

string

The name of the auto provisioning group.

EcsDocTest

Status

string

The status of the auto provisioning group. Valid values:

-   submitted: The auto provisioning group was created but did not execute scheduling tasks.
-   active: The auto provisioning group was executing scheduling tasks.
-   deleted: The auto provisioning group was deleted.
-   delete-running: The auto provisioning group was being deleted.
-   modifying: The auto provisioning group was being modified.

submitted

TerminateInstances

boolean

Indicates whether to release instances in the auto provisioning group when the auto provisioning group is deleted. Valid values:

-   true: releases the instances.
-   false: only removes the instances from the auto provisioning group but does not release the instances.

false

MaxSpotPrice

float

The maximum price of spot instances in the auto provisioning group.

**Note** When both the MaxSpotPrice and LaunchTemplateConfig.N.MaxPrice parameters are specified, the smaller one of the two parameter values is used.

The LaunchTemplateConfig.N.Priority parameter is set when the auto provisioning group is created, and cannot be modified.

2

State

string

The overall status of instance scheduling in the auto provisioning group. Valid values:

-   fulfilled: Scheduling was complete and the instances were delivered.
-   pending-fulfillment: The instances were being created.
-   pending-termination: The instances were being removed.
-   error: An exception occurred during scheduling and the instances were not delivered.

fulfilled

LaunchTemplateId

string

The ID of the launch template associated with the auto provisioning group.

lt-bp1fgzds4bdogu03\*\*\*\*

ValidFrom

string

The time at which the auto provisioning group is started. The provisioning group is effective until the point in time specified by `ValidUntil`.

2019-04-01T15:10:20Z

LaunchTemplateVersion

string

The version of the launch template associated with the auto provisioning group.

1

TerminateInstancesWithExpiration

boolean

Indicates whether to release instances in the auto provisioning group when the group expires. Valid values:

-   true: releases the instances.
-   false: only removes the instances from the auto provisioning group but does not release the instances.

true

RegionId

string

The region ID of the auto provisioning group.

cn-hangzhou

ValidUntil

string

The time at which the auto provisioning group expires. The period of time between this point in time and the point in time specified by the `ValidFrom` parameter is the validity period of the auto provisioning group.

2019-06-01T15:10:20Z

AutoProvisioningGroupType

string

The delivery type of the auto provisioning group. Valid values:

-   request: one-time delivery. When the auto provisioning group is started, it delivers instances only once. If the instances fail to be delivered, the auto provisioning group does not retry the delivery.
-   maintain: continuous delivery. When the auto provisioning group is started, it attempts to deliver instances that meet the target capacity and monitors the real-time capacity. If the target capacity of the auto provisioning group is not reached, the auto provisioning group continues to create instances until the target capacity is reached.

maintain

AutoProvisioningGroupId

string

The ID of the auto provisioning group.

apg-sn54avj8htgvtyh8\*\*\*\*

ExcessCapacityTerminationPolicy

string

Indicates whether to release the scaled-in instances when the real-time capacity of the auto provisioning group exceeds the target capacity and the group is triggered to scale in. Valid values:

-   termination: releases the scaled-in instances.
-   no-termination: only removes the scaled-in instances from the auto provisioning group but does not release the instances.

termination

ResourceGroupId

string

The ID of the resource group to which the auto provisioning group belongs.

rg-bp67acfmxazb4p\*\*\*\*

LaunchTemplateConfigs

array<object>

Details about the extended configurations.

LaunchTemplateConfig

object

MaxPrice

float

The maximum price of the instance type specified in the extended configuration.

3

Priority

float

The priority of the instance type specified in the extended configuration. A value of 0 indicates the highest priority.

1

VSwitchId

string

The ID of the vSwitch specified in the extended configuration.

vsw-sn5bsitu4lfzgc5o7\*\*\*\*

WeightedCapacity

float

The weight of the instance type specified in the extended configuration.

2

InstanceType

string

The instance type that is specified in the extended configuration.

ecs.g5.large

SpotOptions

object

The policy related to spot instances.

InstancePoolsToUseCount

integer

The number of instances that the auto provisioning group creates by selecting the instance type of the lowest price.

**Note** This parameter is set when the auto provisioning group is created, and cannot be modified.

2

AllocationStrategy

string

The policy for creating spot instances. Valid values:

-   lowest-price: cost optimization policy. This policy indicates that the lowest-priced instance type is used to create instances.
-   diversified: balanced distribution policy. This policy indicates that instances are created evenly across multiple zones specified in the extended configuration.

diversified

InstanceInterruptionBehavior

string

The action to be performed after the excess spot instances are stopped. Valid values:

-   stop: retains the excess spot instances in the stopped state.
-   terminate: releases the excess spot instances.

stop

PayAsYouGoOptions

object

The policies related to pay-as-you-go instances.

AllocationStrategy

string

The policy for creating pay-as-you-go instances. Valid values:

-   lowest-price: cost optimization policy. This policy indicates that lowest-cost instance types are used to create instances.
-   prioritized: priority-based policy. This policy indicates that instances are created based on the priority specified by the LaunchTemplateConfig.N.Priority parameter.

**Note** The LaunchTemplateConfig.N.Priority parameter is set when the auto provisioning group is created, and cannot be modified.

prioritized

TargetCapacitySpecification

object

The settings of the target capacity of the auto provisioning group.

SpotTargetCapacity

float

The target capacity of spot instances that the auto provisioning group provisions.

20

PayAsYouGoTargetCapacity

float

The target capacity of pay-as-you-go instances that the auto provisioning group provisions.

30

DefaultTargetCapacityType

string

The type of supplemental instances. When the sum of the `PayAsYouGoTargetCapacity` and `SpotTargetCapacity` values is less than the `TotalTargetCapacity` value, the auto provisioning group creates instances of the specified billing method to meet the target capacity. Valid values:

-   PayAsYouGo: pay-as-you-go instances.
-   Spot: spot instances.

Spot

TotalTargetCapacity

float

The target capacity of the auto provisioning group. The capacity consists of the following parts:

-   PayAsYouGoTargetCapacity
-   SpotTargetCapacity
-   The supplemental capacity besides instance capacities specified by PayAsYouGoTargetCapacity and SpotTargetCapacity.

60

Tags

array<object>

The tags that are added to the auto provisioning group.

Tag

object

TagKey

string

The key of tag N that is added to the auto provisioning group.

Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

TestKey

TagValue

string

The value of tag N that is added to the auto provisioning group.

Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.

TestValue

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "745CEC9F-0DD7-4451-9FE7-8B752F39****",
  "PageNumber": 1,
  "TotalCount": 10,
  "AutoProvisioningGroups": {
    "AutoProvisioningGroup": [
      {
        "CreationTime": "2019-04-01T15:10:20Z",
        "AutoProvisioningGroupName": "EcsDocTest",
        "Status": "submitted",
        "TerminateInstances": false,
        "MaxSpotPrice": 2,
        "State": "fulfilled",
        "LaunchTemplateId": "lt-bp1fgzds4bdogu03****",
        "ValidFrom": "2019-04-01T15:10:20Z",
        "LaunchTemplateVersion": 1,
        "TerminateInstancesWithExpiration": true,
        "RegionId": "cn-hangzhou",
        "ValidUntil": "2019-06-01T15:10:20Z",
        "AutoProvisioningGroupType": "maintain",
        "AutoProvisioningGroupId": "apg-sn54avj8htgvtyh8****",
        "ExcessCapacityTerminationPolicy": "termination",
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "LaunchTemplateConfigs": {
          "LaunchTemplateConfig": [
            {
              "MaxPrice": 3,
              "Priority": 1,
              "VSwitchId": "vsw-sn5bsitu4lfzgc5o7****",
              "WeightedCapacity": 2,
              "InstanceType": "ecs.g5.large"
            }
          ]
        },
        "SpotOptions": {
          "InstancePoolsToUseCount": 2,
          "AllocationStrategy": "diversified",
          "InstanceInterruptionBehavior": "stop"
        },
        "PayAsYouGoOptions": {
          "AllocationStrategy": "prioritized"
        },
        "TargetCapacitySpecification": {
          "SpotTargetCapacity": 20,
          "PayAsYouGoTargetCapacity": 30,
          "DefaultTargetCapacityType": "Spot",
          "TotalTargetCapacity": 60
        },
        "Tags": {
          "Tag": [
            {
              "TagKey": "TestKey",
              "TagValue": "TestValue"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParamter.RegionId

The regionId should not be null.

The RegionId parameter is required.

400

InvalidName.Malformed

The specified parameter "AutoProvisioningGroupName" is not valid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-29

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeAutoProvisioningGroups?updateTime=2024-02-29#workbench-doc-change-demo)

2024-01-04

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeAutoProvisioningGroups?updateTime=2024-01-04#workbench-doc-change-demo)
