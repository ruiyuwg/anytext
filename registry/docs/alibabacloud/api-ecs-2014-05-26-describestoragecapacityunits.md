Queries the details of storage capacity units (SCUs). In the request, you can specify the name, status, or capacity of each SCU.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeStorageCapacityUnits)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeStorageCapacityUnits)

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

ecs:DescribeStorageCapacityUnits

get

StorageCapacityUnit

`acs:ecs:{#regionId}:{#accountId}:scu/*`

StorageCapacityUnit

`acs:ecs:{#regionId}:{#accountId}:scu/{#scuId}`

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

The region ID of the SCU. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

PageNumber

integer

No

The number of the page to return.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

1

Name

string

No

The name of the SCU. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

testScuName

Capacity

integer

No

The capacity of the SCU. Unit: GiB. Valid values: 20, 40, 100, 200, 500, 1024, 2048, 5120, 10240, 20480, and 51200.

20

AllocationType

string

No

The allocation type. Valid values:

-   Normal: queries SCUs that belong to the current Alibaba Cloud account.
-   Shared: queries SCUs shared between the Alibaba Cloud account and RAM users.

Default value: Normal.

Normal

StorageCapacityUnitId

array

No

The IDs of the SCUs. You can specify 1 to 100 SCU IDs.

string

No

The ID of SCU N.

scu-bp67acfmxazb4p\*\*\*\*

Status

array

No

The states of SCUs. The array is 1 to 4 in length.

string

No

The status of the SCU. Valid values:

-   Creating: The SCUs are being created.
-   Active: The SCUs are enabled.
-   Expired: The SCUs expired.
-   Pending: The SCUs have not taken effect.

Active

Tag

array<object>

No

The tags to add to the SCU. You can add up to 20 tags.

object

No

Key

string

No

The key of tag N to be added to the SCU.

TestKey

Value

string

No

The value of tag N to be added to the SCU.

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

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number of the returned page.

1

TotalCount

integer

The total number of SCUs.

1

StorageCapacityUnits

array<object>

Details about the SCUs.

StorageCapacityUnit

object

CreationTime

string

The time when the SCU was created.

2021-08-17T02:55Z

Status

string

The status of the SCU. Valid values:

-   Creating: The SCUs are being created.
-   Active: The SCUs are in effect.
-   Expired: The SCUs have expired.
-   Pending: The SCUs have not taken effect.

Active

StartTime

string

The time when the SCU took effect.

2021-08-17T02:55Z

Capacity

integer

The capacity of the SCU.

20

Description

string

The description of the SCU.

testScuDescription

AllocationStatus

string

Indicates the allocation state of the SCU when the AllocationType parameter is set to Shared. Valid values:

-   allocated: The SCU is allocated to other accounts.
-   BeAllocated: The SCU is allocated from another account.

allocated

ExpiredTime

string

The time when the SCU expires.

2021-09-17T16:00Z

StorageCapacityUnitId

string

The ID of the SCU.

scu-bp67acfmxazb4p\*\*\*\*

Name

string

The name of the SCU.

testScuName

RegionId

string

The region ID of the SCU.

cn-hangzhou

Tags

array<object>

The tag key-value pairs of the SCU.

Tag

object

TagValue

string

The value of tag N.

TestKey

TagKey

string

The key of tag N.

TestValue

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 1,
  "StorageCapacityUnits": {
    "StorageCapacityUnit": [
      {
        "CreationTime": "2021-08-17T02:55Z",
        "Status": "Active",
        "StartTime": "2021-08-17T02:55Z",
        "Capacity": 20,
        "Description": "testScuDescription",
        "AllocationStatus": "allocated",
        "ExpiredTime": "2021-09-17T16:00Z",
        "StorageCapacityUnitId": "scu-bp67acfmxazb4p****",
        "Name": "testScuName",
        "RegionId": "cn-hangzhou",
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestKey",
              "TagKey": "TestValue"
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

MissingParameter.RegionId

The specified RegionId should not be null.

The RegionId parameter is required.

400

InvalidParameter.Name

The specified Name is invalid.

The specified Name parameter is invalid.

400

InvalidParameter.CapacityExceed

The specified Capacity exceeds the limitation of quota.

The specified Capacity value exceeds the maximum allowed value.

400

InvalidAllocationType.ValueNotSupported

The specified AllocationType is not supported.

The specified AllocationType parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-12

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeStorageCapacityUnits?updateTime=2025-03-12#workbench-doc-change-demo)
