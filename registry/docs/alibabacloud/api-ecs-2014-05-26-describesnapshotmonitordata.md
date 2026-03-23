Queries the monitoring data of snapshot sizes in a region within the last 30 days.

## Operation description

## [](#usage-notes)[](#)Usage notes

Take note of the following items:

-   Up to 400 monitoring data entries can be returned at a time. Make sure that the `TotalCount` value does not exceed 400. The value is calculated by using the following formula: `TotalCount = (EndTime - StartTime)/Period`. If the TotalCount value is greater than 400, the `InvalidParameter.TooManyDataQueried` error is returned.
-   You can query the monitoring data of snapshot sizes in the last 30 days. If the value of `StartTime` is more than 30 days earlier than the current time, an error is returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshotMonitorData)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSnapshotMonitorData)

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

ecs:DescribeSnapshotMonitorData

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.

2019-05-10T00:00:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.

2019-05-10T03:00:00Z

Period

integer

No

The interval at which to query the monitoring data of snapshot sizes. Unit: seconds. Valid values:

-   60
-   600
-   3600

Default value: 60.

60

Category

string

No

The type of the snapshot. Valid values:

-   Standard: standard snapshot
-   Flash: local snapshot
-   Archive: archive snapshot

Default value: Standard.

Standard

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

9F8163A8-F5DE-47A2-A572-4E062D223E09

MonitorData

array<object>

The monitoring data of snapshot sizes.

DataPoint

object

Size

long

The total size of snapshots. Unit: bytes.

243036848128

TimeStamp

string

The timestamp that corresponds to a snapshot size.

2019-05-10T04:00:00Z

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "9F8163A8-F5DE-47A2-A572-4E062D223E09",
  "MonitorData": {
    "DataPoint": [
      {
        "Size": 243036848128,
        "TimeStamp": "2019-05-10T04:00:00Z"
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

InvalidStartTime.Malformed

The specified parameter "StartTime" is not valid.

The specified StartTime parameter does not conform to the specification.

400

InvalidEndTime.Malformed

The specified parameter "EndTime" is not valid.

The specified EndTime parameter is invalid.

400

InvalidPeriod.ValueNotSupported

The specified parameter "Period" is not valid.

\-

400

InvalidStartTime.TooEarly

The specified parameter "StartTime" is too early.

\-

400

InvalidParameter.TooManyDataQueried

Too many data queried.

\-

400

Throttling

Request was denied due to request throttling.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-10

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSnapshotMonitorData?updateTime=2024-12-10#workbench-doc-change-demo)
