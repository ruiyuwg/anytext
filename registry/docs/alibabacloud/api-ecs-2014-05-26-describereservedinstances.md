Queries the details of reserved instances that you have purchased in a specific region. You can query the details of reserved instances based on parameters, such as tags and reserved instance attributes.

## Operation description

### [](#scenarios)[](#)Scenarios

-   Query all reserved instances in a specific region.
-   Query the details of a reserved instance based on the ID or name.
-   Query your purchased reserved instances based on the instance type or instance family.
-   Query your purchased reserved instances based on the scope or status of reserved instances.

### [](#sample-requests)[](#)Sample requests

**Example: Query all purchased reserved instances in the China (Hangzhou) region**

```
"RegionId":"cn-hangzhou", //The ID of the region.
```

**Example: Query the details of the reserved instance whose ID is ecsri-bp129enntoynwwj5\*\*\*\* in the China (Hangzhou) region**

```
"RegionId":"cn-hangzhou", //The ID of the region."ReservedInstanceId":"ecsri-bp129enntoynwwj5****" //The ID of the reserved instance.
```

**Example: Query the reserved instances that can be used to offset the bills of ecs.c5.2xlarge instances in the China (Hangzhou) region**

```
"RegionId":"cn-hangzhou", //The ID of the region."InstanceType":"ecs.c5.2xlarge", //The instance type.
```

**Example: Query the regional reserved instances that are within the validity period in the China (Hangzhou) region**

```
"RegionId":"cn-hangzhou", //The ID of the region."Scope":"Region", //Set the scope of the reserved instance to regional."Status":["Active"] //Set the status to Active, which indicates that the reserved instance is within the validity period.
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeReservedInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeReservedInstances)

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

ecs:DescribeReservedInstances

get

ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/*`

ReservedInstance

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

The region ID of the reserved instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

PageNumber

integer

No

The page number. Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 100.

Default value: 10.

50

Tag

array<object>

No

The tags of the reserved instance. You can specify up to 20 tags.

object

No

Tag N of the reserved instance.

Key

string

No

The key of tag N of the reserved instance. The tag key cannot be empty and can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.

**Note** If you specify a single tag to query resources, up to 1,000 resources to which the tag is added are returned. If you specify multiple tags to query resources, up to 1,000 resources to which all specified tags are added are returned. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

TestKey

Value

string

No

The value of tag N of the reserved instance. The tag value cannot be empty and can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.

TestValue

ZoneId

string

No

The zone ID of the reserved instance. This parameter is valid and required if you set Scope to Zone. You can call the [DescribeZones](/help/en/ecs/api-describezones) operation to query the most recent zone list.

cn-hangzhou-z

ReservedInstanceName

string

No

The name of the reserved instance.

**Note** Only exact search is supported.

testReservedInstanceName

LockReason

string

No

The reason why the reserved instance is locked. Valid values:

-   financial: The reserved instance is locked because the account has overdue payments or the service expires.
-   security: The reserved instance is locked due to security reasons.

security

InstanceType

string

No

The instance type of the reserved instance. For information about the valid values, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

**Note** Specify the instance type that you selected when you purchased the reserved instance. If the reserved instance is a regional reserved instance, it can be used to offset the bills of instance types that belong to the same instance family as the specified instance type, regardless of instance specifications.

ecs.g5.large

InstanceTypeFamily

string

No

The instance family of the reserved instance. For information about the valid values, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

ecs.g5

Scope

string

No

The scope level of the reserved instance. Valid values:

-   Region: regional
-   Zone: zonal

Region

OfferingType

string

No

The payment option of the reserved instance. Valid values:

-   No Upfront
-   Partial Upfront
-   All Upfront

All Upfront

AllocationType

string

No

The allocation type of the reserved instances. Valid values:

-   Normal: queries all reserved instances that belong to the current account.
-   Shared: queries the reserved instances that are shared between the current main account and linked accounts.

Default value: Normal.

Normal

ReservedInstanceId

array

No

The IDs of reserved instances. You can specify up to 100 IDs of reserved instances.

string

No

The ID of reserved instance N.

ri-bpzhex2ulpzf53\*\*\*\*

Status

array

No

The status of the reserved instances.

string

No

The status of reserved instance N. Valid values:

-   Creating: The reserved instance is being created.
-   Active: The reserved instance is active.
-   Retired: The reserved instance expired.
-   Updating: The attributes of the reserved instance are being modified.
-   Expired: The reserved instance has expired. The reserved instance becomes invalid immediately after it expires. This value is currently obsolete and will be removed in the future.

Active

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

1

RequestId

string

The request ID.

E572643C-6A29-49D6-9D4E-6CFA4E063A3E

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of reserved instances.

1

ReservedInstances

array<object>

Details about the reserved instances.

ReservedInstance

object

Details about the reserved instance.

Status

string

The status.

Active

CreationTime

string

The creation time.

2018-12-10T12:07Z

ReservedInstanceName

string

The name.

riZbpzhex2ulpzf53\*\*\*\*

ReservedInstanceId

string

The reserved instance ID.

ri-bpzhex2ulpzf53\*\*\*\*

InstanceType

string

The instance type of the pay-as-you-go instances that can be matched to the reserved instance.

ecs.g5.large

InstanceAmount

integer

The number of pay-as-you-go instances that are of the same instance type as the reserved instance and can be matched to the reserved instance.

10

RegionId

string

The region ID.

cn-hangzhou

OfferingType

string

The payment option.

All Upfront

StartTime

string

The effective time.

2018-12-10T12:00Z

Description

string

The description.

testDescription

AllocationStatus

string

Indicates the sharing status of the reserved instance when the AllocationType parameter is set to Shared. Valid values:

-   allocated: The reserved instance is allocated to another account.
-   beAllocated: The reserved instance is allocated by another account.

allocated

ExpiredTime

string

The expiration time.

2019-12-10T12:07Z

ResourceGroupId

string

The resource group ID.

EcsDocTest

ZoneId

string

The zone ID.

cn-hangzhou-z

Platform

string

The operating system of the image used by the instance. Valid values:

-   Windows
-   Linux

Linux

Scope

string

The scope.

region

OperationLocks

array<object>

Details about the lock status of the reserved instance.

OperationLock

object

Details about the lock status of the reserved instance.

LockReason

string

The reason why the instance is locked.

security

Tags

array<object>

The tags of the reserved instance.

Tag

object

The tag of the reserved instance.

TagValue

string

The tag value.

TestValue

TagKey

string

The tag key.

TestKey

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 1,
  "RequestId": "E572643C-6A29-49D6-9D4E-6CFA4E063A3E",
  "PageNumber": 1,
  "TotalCount": 1,
  "ReservedInstances": {
    "ReservedInstance": [
      {
        "Status": "Active",
        "CreationTime": "2018-12-10T12:07Z",
        "ReservedInstanceName": "riZbpzhex2ulpzf53****",
        "ReservedInstanceId": "ri-bpzhex2ulpzf53****",
        "InstanceType": "ecs.g5.large",
        "InstanceAmount": 10,
        "RegionId": "cn-hangzhou",
        "OfferingType": "All Upfront",
        "StartTime": "2018-12-10T12:00Z",
        "Description": "testDescription",
        "AllocationStatus": "allocated",
        "ExpiredTime": "2019-12-10T12:07Z",
        "ResourceGroupId": "EcsDocTest",
        "ZoneId": "cn-hangzhou-z",
        "Platform": "Linux",
        "Scope": "region",
        "OperationLocks": {
          "OperationLock": [
            {
              "LockReason": "security"
            }
          ]
        },
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
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

InvalidRegion.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

400

InvalidZone.NotFound

The specified parameter ZoneId is not valid.

The specified ZoneId parameter is invalid.

400

InvalidReservedInstanceOfferingType.ValueNotSupported

the OfferingType is not supported

\-

400

InvalidReservedInstanceOfferingClass.ValueNotSupported

the OfferingClass is not supported

\-

400

OperationDenied

The specified InstanceType or Zone is not authorized for current user.

\-

400

InvalidEndTime.ValueNotSupported

The specified endTime is out of the permitted range.

The specified end time is invalid.

400

InvalidReservedInstanceLockReason.ValueNotSupported

The specified LockReason is not supported.

\-

400

InvalidReservedInstanceStatus.ValueNotSupported

The specified Status is not supported.

\-

400

InvalidAllocationType.ValueNotSupported

The specified AllocationType is not supported.

The specified AllocationType parameter is invalid.

403

RAM.ApiNotSupported

This call is not supported from ram accessing.

RAM users are not authorized to perform this operation.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified RegionId parameter does not exist. Check whether the service is available in the specified region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeReservedInstances?updateTime=2024-12-26#workbench-doc-change-demo)
