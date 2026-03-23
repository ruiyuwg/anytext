Queries the session statistics of a region.

## Operation description

-   This is a central operation and can be called only by using services in the China (Shanghai) region.
-   You can query session statistics for the past hour.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeSessionStatistic)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeSessionStatistic)

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

ecd:DescribeSessionStatistic

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

The region ID.

cn-shanghai

SearchRegionId

string

Yes

Specifies to search for session information by region ID. This parameter is used to filter desktop information of a specific region.

cn-hangzhou

OfficeSiteId

string

No

The workspace ID.

cn-shanghai+dir-259382\*\*\*\*

StartTime

string

Yes

The beginning of the time range to query.

1679449506572

EndTime

string

No

The end of the time range to query.

1677808889806

Period

integer

No

The query interval. Unit: seconds. Valid values:

-   60
-   120

60

## Response parameters

Parameter

Type

Description

Example

object

TotalCount

string

The total number of sessions returned.

1

RequestId

string

The request ID.

C5528624-C6ED-5CA4-A4A2-7C30DBF2\*\*\*\*

Statistic

array<object>

The statistics.

statistic

object

TimePoint

long

The point in time.

1690164443508

Count

long

The total number of sessions in the time range.

4

## Examples

Sample success responses

`JSON`format

```
{
  "TotalCount": 1,
  "RequestId": "C5528624-C6ED-5CA4-A4A2-7C30DBF2****",
  "Statistic": [
    {
      "TimePoint": 1690164443508,
      "Count": 4
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
