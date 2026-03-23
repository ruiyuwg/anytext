Queries the details of capacity reservations.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeCapacityReservations)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeCapacityReservations)

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

ecs:DescribeCapacityReservations

get

\*CapacityReservation

`acs:ecs:{#regionId}:{#accountId}:capacityreservation/*`

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

The region ID of the capacity reservation. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group to which the capacity reservation belongs. If you specify this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.

**Note** Resources in the default resource group are displayed in the response regardless of whether you specify this parameter.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags of the capacity reservation.

object

No

Tag N of the capacity reservation.

Key

string

No

The key of tag N of the capacity reservation. Valid values of N: 1 to 20.

If you specify a single tag to query resources, up to 1,000 resources to which the tag is added are returned. If you specify multiple tags to query resources, up to 1,000 resources to which all specified tags are added are returned. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

TestKey

Value

string

No

The value of tag N of the capacity reservation. Valid values of N: 1 to 20.

TestValue

MaxResults

integer

No

The maximum number of entries per page.

Maximum value: 100

Default value: 10.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of the NextToken parameter.

caeba0bbb2be03f84eb48b699f0a4883

PrivatePoolOptions.Ids

string

No

The IDs of capacity reservations. The value can be a JSON array that consists of up to 100 capacity reservation IDs. Separate the IDs with commas (,).

\["crp-bp1gubrkqutenqdd\*\*\*\*", "crp-bp67acfmxazb5\*\*\*\*"\]

Platform

string

No

The operating system of the instance. Valid values:

-   windows: Windows operating systems.
-   linux: Linux operating systems.
-   all: all operating system types.

Default value: all.

linux

InstanceType

string

No

The instance type of the capacity reservation. You can specify this parameter to query only effective capacity reservations. To query capacity reservations that are released, you must specify PrivatePoolOptions.Ids.

ecs.c6.large

ZoneId

string

No

The zone ID of the capacity reservation.

cn-hangzhou-h

InstanceChargeType

string

No

The billing method of the instance. Valid values:

-   PostPaid: pay-as-you-go.
-   PrePaid: subscription.

Default value: PostPaid.

PostPaid

Status

string

No

The status of the capacity reservation. Valid values:

-   All: All states.
-   Pending: The capacity reservation is being initialized. Scheduled capacity reservations enter the Pending state after they are created.
-   Preparing: The capacity reservation is being prepared. Scheduled capacity reservations are in the Preparing state while resources are being provisioned.
-   Prepared: The capacity reservation is to take effect. After resources are provisioned, scheduled capacity reservations remain in the Prepared state until they take effect.
-   Active: The capacity reservation is in effect.
-   Released: The capacity reservation is manually or automatically released when it expires.

If you do not specify this parameter, capacity reservations in states other than Pending and Released are queried.

Active

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.If NextToken is empty, no next page exists.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

TotalCount

integer

The total number of entries returned.

1

MaxResults

integer

The maximum number of entries returned per page.

10

CapacityReservationSet

array<object>

Details of the capacity reservations.

CapacityReservationItem

object

Details of the capacity reservation.

Status

string

The status of the capacity reservation. Valid values:

-   Pending: The capacity reservation is being initialized.
-   Preparing: The capacity reservation is being prepared.
-   Prepared: The capacity reservation is to take effect.
-   Active: The capacity reservation is in effect.
-   Released: The capacity reservation has been released manually or automatically when it expired.

Active

TimeSlot

string

**Note** This parameter is in invitational preview and is not publicly available.

null

PrivatePoolOptionsMatchCriteria

string

The type of the private pool generated after the capacity reservation takes effect. Valid values:

-   Open: open private pool. If you use the capacity reservation to create Elastic Compute Service (ECS) instances, the open private pool that is associated with the capacity reservation is automatically matched. If no capacity is available in the open private pool, resources in the public pool are automatically used to create the instances.
-   Target: targeted private pool. If you use the capacity reservation to create ECS instances, the targeted private pool that is associated with the capacity reservation is automatically matched. If no capacity is available in the private pool, the instances fail to be created.

Open

PrivatePoolOptionsId

string

The ID of the capacity reservation.

crp-bp1gubrkqutenqdd\*\*\*\*

PrivatePoolOptionsName

string

The name of the capacity reservation.

crpTestName

RegionId

string

The region ID of the capacity reservation.

cn-hangzhou

InstanceChargeType

string

The billing method of the instances created by using the capacity reservation. Valid values:

-   PostPaid: pay-as-you-go.
-   PrePaid: subscription.

PostPaid

EndTime

string

The time when the capacity reservation expires.

2021-02-19T03:02Z

StartTime

string

The time when the capacity reservation takes effect.

2021-02-19T02:01Z

Description

string

The description of the capacity reservation.

This is description.

EndTimeType

string

The release mode of the capacity reservation. Valid values:

-   Limited: The capacity reservation is automatically released at a specified time.
-   Unlimited: The capacity reservation is manually released. You can release the capacity reservation anytime.

Unlimited

ResourceGroupId

string

The ID of the resource group to which the capacity reservation belongs.

rg-bp67acfmxazb4p\*\*\*\*

Platform

string

The operating system type of the instances created by using the capacity reservation. Valid values:

-   windows
-   linux

linux

AllocatedResources

array<object>

Details of the allocated resources.

AllocatedResource

object

UsedAmount

integer

The number of instances that have used the capacity reservation.

2

TotalAmount

integer

The total number of instances for which the capacity of an instance type is reserved.

2

AvailableAmount

integer

The number of available instances.

2

zoneId

string

The zone ID.

cn-hangzhou-h

InstanceType

string

The instance type of the instances.

ecs.c6.large

CapacityReservationUsages

array<object>

Details of instance usage.

CapacityReservationUsage

object

Details of instance usage.

AccountId

string

The ID of the Alibaba Cloud account.

105909559088\*\*\*\*

ServiceName

string

The name of the Alibaba Cloud service.

maxcompute.aliyuncs.com

UsedAmount

integer

The number of instances that are used by the Alibaba Cloud account or service.

20

Tags

array<object>

The tags that are added to the capacity reservation.

Tag

object

TagValue

string

The tag value.

TestValue

TagKey

string

The tag key.

TestKey

StartTimeType

string

The mode in which the capacity reservation takes effect. Valid values:

-   Now: The capacity reservation takes effect immediately after it is created.
-   Later: The capacity reservation takes effect at a specified time.

Now

SavingPlanId

string

The ID of the savings plan used with the capacity reservation.

spn-c29b5e18pJMT\*\*\*\*

ReservedInstanceId

string

The ID of the reserved instance used with the capacity reservation.

ri-bpzhex2ulpzf53\*\*\*\*

CapacityReservationOwnerId

string

The ID of the capacity reservation owner.

100\*\*\*\*\*\*\*\*\*\*\*\*7

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "TotalCount": 1,
  "MaxResults": 10,
  "CapacityReservationSet": {
    "CapacityReservationItem": [
      {
        "Status": "Active",
        "TimeSlot": null,
        "PrivatePoolOptionsMatchCriteria": "Open",
        "PrivatePoolOptionsId": "crp-bp1gubrkqutenqdd****",
        "PrivatePoolOptionsName": "crpTestName",
        "RegionId": "cn-hangzhou",
        "InstanceChargeType": "PostPaid",
        "EndTime": "2021-02-19T03:02Z",
        "StartTime": "2021-02-19T02:01Z",
        "Description": "This is description.",
        "EndTimeType": "Unlimited",
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "Platform": "linux",
        "AllocatedResources": {
          "AllocatedResource": [
            {
              "UsedAmount": 2,
              "TotalAmount": 2,
              "AvailableAmount": 2,
              "zoneId": "cn-hangzhou-h",
              "InstanceType": "ecs.c6.large",
              "CapacityReservationUsages": {
                "CapacityReservationUsage": [
                  {
                    "AccountId": "105909559088****",
                    "ServiceName": "maxcompute.aliyuncs.com",
                    "UsedAmount": 20
                  }
                ]
              }
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
        },
        "StartTimeType": "Now",
        "SavingPlanId": "spn-c29b5e18pJMT****",
        "ReservedInstanceId": "ri-bpzhex2ulpzf53****",
        "CapacityReservationOwnerId": "100************7\n"
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

MissingParameter.RegionId

The specified RegionId should not be null.

The RegionId parameter is required.

400

InvalidParameter.Name

The specified PrivatePoolOptions.Name is invalid.

\-

400

InvalidParameter.PrivatePoolOptions.Ids

The specified PrivatePoolOptions.Ids is invalid.

\-

400

DedicatedHostNotSupported

DedicatedHost is not supported for PrivatePool.

The private pool does not support dedicated hosts.

400

SpotNotSupported

Spot is not supported for PrivatePool.

The private pool does not support spot instances.

400

ClassicNetworkNotSupported

Classic network is not supported for PrivatePool.

The private pool does not support instances in the classic network.

400

Invalid.InstanceId

Instance does not exist.

The specified instance does not exist.

400

Invalid.PrivatePoolOptions.MatchCriteria

Target mode does not support this operation.

The operation is not supported while the PrivatePoolOptions.MatchCriteria parameter is set to Target.

400

MissingParameter.PrivatePoolOptions.Id

The specified PrivatePoolOptions.Id should not be null.

The PrivatePoolOptions.Id parameter is required.

400

Invalid.PrivatePoolOptions.Id

The PrivatePool does not exist.

The private pool does not exist.

400

Invalid.InstanceType

The InstanceType does not match the PrivatePool.

The instance type and the private pool do not match.

400

Invalid.InstanceChargeType

The InstanceChargeType does not match the PrivatePool.

The instance billing method and the private pool do not match.

400

Invalid.ZoneId

The ZoneId does not match the PrivatePool.

The zone and the private pool do not match.

400

Invalid.PrivatePoolOptions.status

The PrivatePool has been used up.

The resource is exhausted.

400

Invalid.PrivatePoolOptions.MatchCriteria

The PrivatePoolOptions.MatchCriteria does not match the PrivatePool.

The specified PrivatePoolOptions.MatchCriteria parameter does not match the private pool.

400

InvalidPlatform.ValueNotSupported

The Platform does not match the PrivatePool.

The specified Platform parameter does not match the private pool.

400

Invalid.PrivatePoolOptions.status

The PrivatePool is expired or inactive.

The private pool has expired or is not activated.

400

Invalid.PrivatePoolOptions.status

The PrivatePool status is not valid.

The specified private pool state is incorrect.

400

Invalid.PrivatePoolOptions.status

The Instance should be created within 48 hours once the PrivatePool is started.

The Instance should be created within 48 hours once the PrivatePool is started.

400

InvalidAliUid

The PrivatePool does not belong to the user of the Instance.

The specified private pool does not belong to the user who attempted to create the instance.

400

Invalid.InstanceId

The Instance dose not attached to a PrivatePool.

The instance and the private pool do not match.

400

MissingParameter.PackageType

The specified parameter "PackageType" can not be empty.

\-

400

MissingParameter.PrivatePoolOptions.Ids

The specified parameter "PrivatePoolOptions.Ids" can not be empty.

Specifies that the parameter "PrivatePoolOptions.ids" cannot be empty.

400

MissingParameter.PrivatePoolOptions.Id

The specified parameter "PrivatePoolOptions.Id" can not be empty.

The specified parameter PrivatePoolOptions.Id cannot be empty.

400

MissingParameter.InstanceCpuCoreCount

The specified parameter "InstanceCpuCoreCount" can not be empty.

The specified parameter 'InstanceCpuCocount' cannot be empty.

400

MissingParameter.InstanceAmount

The specified parameter "InstanceAmount" can not be empty.

The specified parameter InstanceAmount cannot be empty.

400

MissingParameter.InstanceCpuCoreCountOrInstanceAmount

The specified parameter "InstanceCpuCoreCount" and "InstanceAmount" must not be empty at the same time.

The specified parameter InstanceCpuCoreCount and InstanceAmount cannot be both empty.

400

Invalid.TooManyPrivatePoolOptions.Ids

Too many PrivatePoolOptions.Ids in this request.

The number of specified private pool IDs exceeds the upper limit.

400

Invalid.TooManyZoneIds

Too many ZoneIds in the request.

The number of specified zone IDs exceeds the upper limit.

400

Invalid.TooManyInstanceTypes

Too many InstanceTypes in the request.

The number of specified instance types exceeds the upper limit.

400

Invalid.TooManyUnpaidPrivatePool

Too many PrivatePools create but still unpaid.

Multiple private pools are created but not paid.

400

Invalid.InstanceCpuCoreCountOrInstanceAmount

Both InstanceCpuCoreCount and InstanceAmount are provided.

The InstanceCpuCoreCount and InstanceAmount parameters cannot be both specified.

400

Invalid.PrivatePoolOptions.Ids

The specified parameter "PrivatePoolOptions.Ids" exist invalid element Id.

The specified private pool ID does not exist.

400

Invalid.PackageType

The specified parameter "PackageType" is invalid.

The specified parameter PackageType is invalid.

400

Invalid.PrivatePool.Purchase

The PrivatePool has already paid.

The private pool is already paid.

400

Invalid.AssuranceTimes.NotSupported

The value of AssuranceTimes is not supported.

The specified AssuranceTimes parameter is invalid.

400

Invalid.TooManyInstanceTypes

The specified parameter "InstanceType" should only has one item.

The specified parameter InstanceType can have only one entry.

400

Invalid.PrivatePoolOptions.MatchCriteria

The specified parameter "PrivatePoolOptions.MatchCriteria" is invalid.

The specified parameter PrivatePoolOptions.MatchCriteria is invalid.

400

RepeatStartPrivatePool

PrivatePool has already been started.

The private pool is already started.

400

Invalid.PrivatePoolOptions.Id

The specified parameter "PrivatePoolOptions.Id" should be empty.

Specifies that the parameter PrivatePoolOptions.Id should be empty.

400

Invalid.InstanceId

Modify DedicatedHost Instance's attachment attributes is not supported.

Modify DedicatedHost Instance's attachment attributes is not supported.

400

Invalid.InstanceId

Modify Spot Instance's attachment attributes is not supported.

Modify Spot Instance's attachment attributes is not supported.

400

Invalid.InstanceId

Modify Classic Network Instance's attachment attributes is not supported.

Modify Classic Network Instance's attachment attributes is not supported.

400

InvalidParameter.RegionId

The specified RegionId is not exist.

The specified RegionId parameter does not exist.

400

InvalidPermission.ResourceShareAssocoated

The current resource is associated to a shared relationship and cannot be released.

The current resource is bound to a sharing relationship and cannot be released.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCapacityReservations?updateTime=2025-02-26#workbench-doc-change-demo)

2023-12-07

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCapacityReservations?updateTime=2023-12-07#workbench-doc-change-demo)

2021-06-18

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeCapacityReservations?updateTime=2021-06-18#workbench-doc-change-demo)
