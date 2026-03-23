Modifies the configurations of a reserved instance, such as the instance type, quantity, and zone, to split, merge, or change the scope of the reserved instance.

## Operation description

This operation is an asynchronous operation. After you call this operation to modify a reserved instance, the operation starts the modification process and returns the ID of the resulting new reserved instance. The original reserved instance enters the `Updating` state and then the `Inactive` state. At the same time, the resulting new reserved instance is generated and enters the Creating state and then the Active state. You can call the [DescribeReservedInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describereservedinstances) operation to query the states of the reserved instance.

-   You can modify the configurations of a reserved instance only if the reserved instance is in the **Active** state.
-   Make sure that the [computing power](/help/en/ecs/view-reserved-instances#2742f3844abzz) of the reserved instance remains unchanged before and after the modification. Otherwise, the modification fails.
-   You cannot split, merge, or change the scope of a reserved instance at the same time.

For more information, see [Split, merge, or modify reserved instances](/help/en/ecs/split-merge-or-modify-reserved-instances).

## [](#sample-requests)[](#)Sample requests

-   **Sample request to split a reserved instance**: Split a regional reserved instance that is scoped to the China (Hangzhou) region and can match two pay-as-you-go instances of the ecs.g5.xlarge instance type into two regional reserved instances that are scoped to the China (Hangzhou) region and each can match one pay-as-you-go instance of the ecs.g5.large instance type:

```
"RegionId":"cn-hangzhou", //The ID of the region.
"ReservedInstanceId":["ecsri-bp1hd03e9uv19e75****"], //The ID of the reserved instance that you want to split.
"Configuration":[
  {
    "ReservedInstanceName":"testReservedInstanceName1", //The name of the new reserved instance.
    "InstanceType":"ecs.g5.large", //The instance type that the new reserved instance can match.
    "Scope":"Region", //The scope level of the new reserved instance, which must be the same as the scope level of the original reserved instance.
    "InstanceAmount":1 //The number of pay-as-you-go instances of the specified instance type that each new reserved instance can match.
  },
  {
    "ReservedInstanceName":"testReservedInstanceName2",
    "InstanceType":"ecs.g5.large",
    "Scope":"Region",
    "InstanceAmount":1
  }
]
```

-   **Sample request to merge reserved instance:**: Merge two zonal reserved instances that are scoped to Hangzhou Zone H and can match four pay-as-you-go instances of the ecs.g5.xlarge instance type into one zonal reserved instance that is scoped to Hangzhou Zone H and can match two pay-as-you-go instances of the ecs.g5.4xlarge instance type:

```
"RegionId":"cn-hangzhou", //The ID of the region.
"ReservedInstanceId":["ecsri-bp1hd03e9uv16b75****",""ecsri-bp1hd03e9uv16b76****""], //The IDs of the reserved instances that you want to merge.
"Configuration":[
  {
    "ReservedInstanceName":"testReservedInstanceName", //The name of the new reserved instance.
    "InstanceType":"ecs.g5.4xlarge", //The instance type that the new reserved instance can match.
    "Scope":"Zone", //The scope level of the new reserved instance, which must be the same as the scope level of the original reserved instances.
    "ZoneId":"cn-hangzhou-h", //
    "InstanceAmount":2 //The number of pay-as-you-go instances of the specified instance type that the new reserved instance can match.
  }
]
```

-   **Sample request to change the scope of a reserved instance**: Change a regional reserved instance that is scoped to Hangzhou Zone H and can match six pay-as-you-go instances of the ecs.g5.xlarge instance type to a regional reserved instance that is scoped to the China (Hangzhou) region and can match three pay-as-you-go instances of the ecs.g5.2xlarge instance type.

```
"RegionId":"cn-hangzhou", //The ID of the region.
"ReservedInstanceId":["ecsri-bp1hd03e9uv16b77****"], //The ID of the reserved instance whose scope you want to change.
"Configuration":[
  {
    "ReservedInstanceName":"testReservedInstanceName", //The name of the new reserved instance.
    "InstanceType":"ecs.g5.2xlarge", //The instance type that the new reserved instance can match.
    "Scope":"Region", //The scope level of the new reserved instance.
    "InstanceAmount":3 //The number of pay-as-you-go instances of the specified instance type that the new reserved instance can match.
  }
]
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyReservedInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyReservedInstances)

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

ecs:ModifyReservedInstances

update

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}`

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

The region ID of the reserved instance.

You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ReservedInstanceId

array

Yes

The IDs of reserved instances that you want to modify. You can specify up to 20 reserved instance IDs.

string

Yes

The ID of the reserved instance.

ecsri-bp15xx2\*\*\*\*

Configuration

array<object>

No

The configurations of the new reserved instances. You can specify up to 100 new reserved instances.

object

No

The configurations of the new reserved instance.

ReservedInstanceName

string

No

The name of the new reserved instance.

The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

testReservedInstanceName

ZoneId

string

No

The zone ID of the new reserved instance.

This parameter is required when you set `Scope` to `Zone`.

You can call the [DescribeZones](/help/en/ecs/api-regions-describeregions) operation to query the most recent zone list.

cn-hangzhou-i

Scope

string

Yes

The scope level of the new reserved instance. Valid values:

-   Region
-   Zone

Default value: Region.

Zone

InstanceType

string

Yes

The instance types that the new reserved instance can match.

**Note** The supported instance types are continuously updated. For information about the instance types supported by reserved instances, see [Overview of reserved instances](/help/en/ecs/user-guide/overview-6#3c1b682051vt4).

ecs.c5.4xlarge

InstanceAmount

integer

Yes

The number of pay-as-you-go instances of the specified instance type that the new reserved instance can match. The value of this parameter must be greater than or equal to 1.

1

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

Details about the reserved instance.

ED9E4A5F-FF4D-4C96-BE80-6B4227060DD7

ReservedInstanceIdSets

array

The IDs of the reserved instances.

ReservedInstanceId

string

The ID of the reserved instance.

{"ReservedInstanceId":"ecsri-bp1cx3\*\*\*\*","ecsri-bp15xx2\*\*\*\*"\]}

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "ED9E4A5F-FF4D-4C96-BE80-6B4227060DD7",
  "ReservedInstanceIdSets": {
    "ReservedInstanceId": [
      "{\"ReservedInstanceId\":\"ecsri-bp1cx3****\",\"ecsri-bp15xx2****\"]}"
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

InvalidInstanceType.ValueUnauthorized

The specified InstanceType is not authorized.

You are not authorized to use the specified instance type.

400

InvalidParameter.Conflict

The specified region and cluster do not match.

The specified region and cluster do not correspond to each other.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidPeriodUnit.ValueNotSupported

The specified parameter PeriodUnit is not valid.

The specified PeriodUnit parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

InvalidChargeType.ValueNotSupported

ChargeType is not valid.

This billing method is not supported. Select another billing method.

400

OperationDenied

The specified InstanceType or Zone is not authorized for current user.

\-

403

OperationDenied.NoStock

The requested resource is sold out in the specified zone; try other types of resources or other regions and zones.

The requested resources are insufficient.

403

OperationDenied

Sales of this resource are temporarily suspended in the specified region; please try again later.

The requested resource is unavailable in the specified region. Try again later.

403

NodeControllerUnavailable

The Node Controller is temporarily unavailable.

The node controller is unavailable.

403

OperationDenied

The resource is out of usage.

Insufficient resource inventory

403

InvalidParameter.ResourceOwnerAccount

ResourceOwnerAccount is Invalid.

The specified ResourceOwnerAccount parameter is invalid.

403

Zone.NotOpen

The specified zone is not granted to you to buy resources yet.

You are not authorized to purchase resources in the specified zone.

403

Zone.NotOnSale

The specified zone is not available for purchase.

The requested resources are unavailable in the specified zone. Try a different instance type or select a different region or zone.

403

Account.Arrearage

Your account has been in arrears.

Your account does not have enough balance. Please add funds to your account.

403

InvalidReservedInstanceName.Malformed

The specified parameter ReservedInstanceName is invalid.

\-

403

InvalidParameter.Scope

The specified parameter 'Scope' is invalid.

\-

403

InvalidReservedInstanceStatus.ValueNotSupported

ReservedInstance status is not supported.

\-

403

InvalidReservedInstanceOfferingType.ValueNotSupported

The OfferingType is not supported.

\-

403

InvalidReservedInstanceOfferingClass.ValueNotSupported

The OfferingClass is not supported.

\-

403

MissingParameter.ZoneId

The specified zoneId should be not empty.

\-

403

MissingParameter.InstanceType

The instanceType should be not empty.

\-

403

MissingParameter.ReservedInstanceId

The ids of reservedInstance can not be empty.

\-

403

MissingParameter.ReservedInstanceConfiguration

The configurations of reservedInstance can not be empty.

\-

403

InvalidParameter.SplitOrMerge

The Many-to-many of modification is not supported.

\-

403

MissingParameter.InstanceTypeAndAmountBothEmpty

The instanceType and amount can not be both empty.

\-

403

InvalidReservedInstancePlatform.ValueNotSupported

The Platform is not supported.

\-

403

InvalidParameter.ReservedInstanceName

The reservedInstanceName is invalid.

reservedInstanceName field value is illegal

403

InvalidReservedInstanceZone.ValueNotSupported

The zoneId is not exist.

\-

403

InvalidParameter.ValueNotSupported

The instanceTypeFamily of the instance to be changed must be consistent.

\-

403

InvalidParameter.ValueNotSupported

The expiration time of the instance to be changed must be consistent.

\-

403

InvalidParameter.ValueNotSupported

The factor of instanceType is not equal.

\-

403

InvalidParameter.ValueNotSupported

The offeringClass of instance is not same.

\-

403

InvalidParameter.ValueNotSupported

The offeringType of instance is not same.

\-

403

IncorrectInstanceStatus

The status of specified reservedInstance must be active.

\-

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InvalidPlatform.ValueNotSupported

The platform of reservedInstance is invalid.

\-

403

InvalidScope.ValueNotSupported

The scope of reservedInstance is invalid. The valid value is Zone or Region.

\-

403

InvalidConfiguration.ValueNotSupported

The modification Configuration should not be empty.

\-

403

InvalidZoneId.ValueNotSupported

The specified zoneId should be same.

\-

403

InvalidParameter

The parameter is invalid.Please check it.

\-

403

InvalidInstanceAmount.ValueNotSupported

The instanceAmount is invalid.

\-

403

OperationDenied.OnlyModifyName

It is not allowed to modify the ReservedInstanceName only.

The reserved instance name cannot be separately modified.

403

InvalidReservedInstanceId.NotFound

The specified parameter ReservedInstanceId is invalid.

\-

404

InvalidZoneId.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

404

InvalidZoneId.NotFound

The specified ZoneId does not exist.

The specified zone ID does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyReservedInstances?updateTime=2024-12-26#workbench-doc-change-demo)

2023-07-28

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyReservedInstances?updateTime=2023-07-28#workbench-doc-change-demo)

2023-05-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyReservedInstances?updateTime=2023-05-09#workbench-doc-change-demo)
