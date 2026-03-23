Purchases one or more storage capacity units (SCUs).

## Operation description

\*\*Before you call this operation, make sure that you understand the [billing methods](/help/en/ecs/storage-capacity-units-1) and [pricing](https://www.alibabacloud.com/zh/pricing-calculator#/commodity/vm_intl) of SCUs.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/PurchaseStorageCapacityUnit)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/PurchaseStorageCapacityUnit)

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

ecs:PurchaseStorageCapacityUnit

create

\*StorageCapacityUnit

`acs:ecs:{#regionId}:{#accountId}:scu/*`

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

The ID of the region in which to purchase the SCU. The purchased SCU can offset the bills of pay-as-you-go disks that reside in the specified region. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

Name

string

No

The name of the SCU. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

ScuPurchaseDemo

Capacity

integer

Yes

The capacity of the SCU. Unit: GiB. Valid values: 20, 40, 100, 200, 500, 1024, 2048, 5210, 10240, 20480, and 52100.

20

Description

string

No

The description of the SCU. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

ScuPurchaseDemo

StartTime

string

No

The time at which the SCU takes effect. The time can be up to 180 days from the creation time of the SCU. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHHZ format. The time must be in UTC.

This parameter is left empty by default, which indicates that the SCU takes effect immediately after it is created.

2020-09-09T02:00:00Z

Period

integer

No

The validity period of the SCU. Valid values:

-   Valid values when PeriodUnit is set to Month: 1, 2, 3, and 6.
-   Valid values when PeriodUnit is set to Year: 1, 3, and 5.

Default value: 1.

1

PeriodUnit

string

No

The unit of the validity period of the SCU. Valid values:

-   Month
-   Year

Default value: Month.

Month

FromApp

string

No

The source of the request. The value is automatically set to OpenAPI and does not need to be changed. Default value: OpenAPI.

OpenAPI

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique across requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

Amount

integer

No

The number of SCUs that you want to purchase. Valid values: 1 to 20.

Default value: 1.

1

Tag

array<object>

No

The tags to add to the SCU. You can specify up to 20 tags.

object

No

Tag N to add to the SCU.

Key

string

No

The key of tag N to add to the SCU. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

TestKey

Value

string

No

The value of tag N to add to the SCU. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:`.

TestValue

ResourceGroupId

string

No

The ID of the resource group to which to add the SCU. You can specify only the IDs of the resource groups that you have permissions to access.

rg-bp67acfmxazb4p\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

OrderId

string

The order ID.

204135153880\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

StorageCapacityUnitIds

array

The IDs of the SCUs.

StorageCapacityUnitId

string

The ID of the SCU.

scu-bp67acfmxazb4p\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "OrderId": "204135153880****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "StorageCapacityUnitIds": {
    "StorageCapacityUnitId": [
      "scu-bp67acfmxazb4p****"
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

InvalidParameter.Period

The specified Period is not valid.

The specified effective date is invalid.

400

MissingParameter.RegionId

The specified RegionId should not be null.

The RegionId parameter is required.

400

InvalidParameter.Name

The specified Name is invalid.

The specified Name parameter is invalid.

400

InvalidParameter.Capacity

The specified Capacity is invalid.

The specified Capacity value is out of range.

400

MissingParameter.Capacity

The specified Capacity should be not null.

The Capacity parameter is required.

400

InvalidParameter.PeriodUnit

The specified PeriodUnit is not supported.

The specified PeriodUnit parameter is invalid.

400

InvalidParameter.CapacityExceed

The specified Capacity exceeds the limitation of quota.

The specified Capacity value exceeds the maximum allowed value.

400

InvalidStartTime.NotSupported

The specified StartTime should be within 180 calendar days from the current date, and you must specify a precision to hour.

The specified StartTime value is out of range.

400

InvalidStartTime.MalFormed

The specified StartTime is out of the permitted range.

The specified StartTime value exceeds the maximum allowed value.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/PurchaseStorageCapacityUnit?updateTime=2025-11-24#workbench-doc-change-demo)

2025-03-12

The API operation is not deprecated.. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/PurchaseStorageCapacityUnit?updateTime=2025-03-12#workbench-doc-change-demo)

2023-07-28

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/PurchaseStorageCapacityUnit?updateTime=2023-07-28#workbench-doc-change-demo)
