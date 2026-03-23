Queries the monitoring data of a cloud disk within a specific period of time, such as the read IOPS, write IOPS, read bandwidth (byte/s), write bandwidth (byte/s), read latency (microseconds), and write latency (microseconds).

## Operation description

Take note of the following items:

-   Monitoring data of only disks that are in the In Use (`In_use`) state can be queried. For more information, see [Disk states](/help/en/ecs/developer-reference/disk-states).
    
    \*\*
    
    **Note** Some information may be missing from the monitoring data of a disk because the disk is not in the In Use `(In_use)` state and the system cannot obtain the relevant information.
    
-   Up to 400 monitoring data entries can be returned at a time. Make sure that the `TotalCount` value does not exceed 400. The value is calculated by using the following formula: `TotalCount = (EndTime - StartTime)/Period`. If the TotalCount value is greater than 400, the `InvalidParameter.TooManyDataQueried` error is returned.
    
-   You can query the monitoring data in the last 30 days. If the value of `StartTime` is more than 30 days earlier than the current time, an error is returned.
    

## [](#sample-requests)[](#)Sample requests

For example, you want to query the monitoring data of a cloud disk whose ID is `d-bp14emm68wx98vjk****` in the China (Hangzhou) region every 600 seconds from `2025-02-17T00:00:00Z` to `2025-02-18T10:00:00Z`. Request parameters:

```
RegionId:"cn-hangzhou", // Set the region ID to cn-hangzhou, which specifies the China (Hangzhou) region.
DiskId:"d-bp14emm68wx98vjk****", // Specify the disk ID.
StartTime:"2025-02-15T00:00:00Z", // Specify the beginning of the time range to query.
EndTime:"2025-02-17T00:00:00Z", // Specify the end of the time range to query.
Period:"600", // Specify the interval at which to retrieve the monitoring data.
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiskMonitorData)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiskMonitorData)

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

ecs:DescribeDiskMonitorData

get

\*Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DiskId

string

Yes

The ID of the cloud disk that you want to query.

d-bp1bq5g3dxxo1x4o\*\*\*\*

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.

**Note** You can query the monitoring data in the last 30 days. If the value of `StartTime` is more than 30 days earlier than the current time, an error is returned.

2014-07-23T12:07:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.

2014-07-23T12:09:00Z

Period

integer

No

The interval at which to retrieve the monitoring data. Unit: seconds. Valid values:

-   60
-   600
-   3600

Default value: 60.

**Note** Up to 400 monitoring data entries can be returned at a time. Make sure that the TotalCount value does not exceed 400. The value is calculated by using the following formula: TotalCount = (EndTime - StartTime)/Period.

60

## Response parameters

Parameter

Type

Description

Example

object

TotalCount

integer

The total number of monitoring data entries returned.

3

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

MonitorData

array<object>

The monitoring data of the disk.

DiskMonitorData

object

BPSRead

integer

The read bandwidth of the disk. Unit: byte/s.

0

IOPSRead

integer

The number of read I/O operations per second on the disk.

0

LatencyRead

integer

The read latency of the disk. Unit: microseconds.

0

BPSTotal

integer

The total read and write bandwidth of the disk. Unit: byte/s.

204

IOPSTotal

integer

The total number of read and write I/O operations per second on the disk.

0

TimeStamp

string

The timestamp of the monitoring data. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2014-07-23T12:07:00Z

LatencyWrite

integer

The write latency of the disk. Unit: microseconds.

0

IOPSWrite

integer

The number of write I/O operations per second on the disk.

0

DiskId

string

The ID of the disk.

d-bp1bq5g3dxxo1x4o\*\*\*\*

BPSWrite

integer

The write bandwidth of the disk. Unit: byte/s.

204

## Examples

Sample success responses

`JSON`format

```
{
  "TotalCount": 3,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "MonitorData": {
    "DiskMonitorData": [
      {
        "BPSRead": 0,
        "IOPSRead": 0,
        "LatencyRead": 0,
        "BPSTotal": 204,
        "IOPSTotal": 0,
        "TimeStamp": "2014-07-23T12:07:00Z",
        "LatencyWrite": 0,
        "IOPSWrite": 0,
        "DiskId": "d-bp1bq5g3dxxo1x4o****",
        "BPSWrite": 204
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

400

InvalidInstanceType.NotSupportCredit

The InstanceType of the specified instance does not support credit.

The instance type does not support burstable instances.

400

InvalidParameter.EndTime

The specified parameter EndTime is earlier than StartTime.

The end time cannot be earlier than the start time.

404

InvalidDiskId.NotFound

The DiskId provided does not exist in our records.

The specified disk does not exist. Check whether the disk ID is correct.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-04

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDiskMonitorData?updateTime=2024-12-04#workbench-doc-change-demo)

2023-05-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDiskMonitorData?updateTime=2023-05-06#workbench-doc-change-demo)
