Queries the Object Storage Service (OSS) storage plans that you purchased in an Alibaba Cloud region. OSS storage plans can be used to offset the storage fees for standard snapshots instead of local snapshots.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshotPackage)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshotPackage)

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

ecs:DescribeSnapshotPackage

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

PageNumber

integer

No

The page number. Pages start from page 1.

Default value: 1

1

PageSize

integer

No

The number of entries per page. Maximum value: 1 to 100.

Default value: 10

10

RegionId

string

Yes

The ID of the request.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of OSS storage plans.

1

SnapshotPackages

array<object>

Details about the OSS storage plans.

SnapshotPackage

object

DisplayName

string

The name of the OSS storage plan.

testDisplayName

EndTime

string

The time when the OSS storage plan expires. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2018-11-30T06:32:31Z

StartTime

string

The time when the OSS storage plan was purchased. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2017-11-30T06:32:31Z

InitCapacity

long

The maximum storage capacity offered by the OSS storage plan.

500

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 1,
  "SnapshotPackages": {
    "SnapshotPackage": [
      {
        "DisplayName": "testDisplayName",
        "EndTime": "2018-11-30T06:32:31Z",
        "StartTime": "2017-11-30T06:32:31Z",
        "InitCapacity": 500
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-07

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotPackage?updateTime=2025-11-07#workbench-doc-change-demo)

2024-12-04

API Description Update. The API operation is not deprecated.

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotPackage?updateTime=2024-12-04#workbench-doc-change-demo)
