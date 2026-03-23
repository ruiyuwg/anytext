Queries the monitoring data of a secondary elastic network interface (ENI) over a specific period of time.

## Operation description

## [](#usage-notes)[](#)Usage notes

The monitoring data of a secondary ENI includes the amount of traffic sent and received over the internal network, the number of packets sent and received by the secondary ENI, and the number of sent and received packets that are dropped by the secondary ENI. Specific information may be missing from the returned monitoring data. This may be because the system cannot obtain the relevant information. For example, if the instance to which the secondary ENI is attached is in the Stopped state or if the secondary ENI is not attached to an instance and is in the Available state, the monitoring data of the secondary ENI cannot be obtained. Take note of the following items:

-   Up to 400 monitoring data entries can be returned at a time. Make sure that the `TotalCount` value does not exceed 400. The value is calculated by using the following formula: `TotalCount = (EndTime - StartTime)/Period`. If the TotalCount value is greater than 400, the `InvalidParameter.TooManyDataQueried` error is returned.
-   You can query the monitoring data in the last 30 days. If the value of `StartTime` is more than 30 days earlier than the current time, an error is returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeEniMonitorData)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeEniMonitorData)

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

ecs:DescribeEniMonitorData

get

NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

EniId

string

No

The secondary ENI ID. By default, all secondary ENIs that are bound to the specified instance are queried.

eni-bp19da36d6xdwey\*\*\*\*

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

Yes

The ID of the instance to which the secondary ENI is bound.

i-bp1a5zr3u7nq9cx\*\*\*\*

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.

2018-05-21T12:19:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.

2018-05-21T12:22:00Z

Period

integer

No

The interval at which to retrieve the monitoring data. Unit: seconds. Default value: Month. Valid values:

-   60
-   600
-   3600

Default: 60.

60

## Response parameters

Parameter

Type

Description

Example

object

TotalCount

integer

The total number of entries returned.

4

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

MonitorData

array<object>

The monitoring data of the secondary ENI.

EniMonitorData

object

PacketRx

string

The number of packets received by the secondary ENI over the internal network.

0

TimeStamp

string

The timestamp of the monitoring data. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2018-05-21T03:22:00Z

DropPacketRx

string

The number of received packets that were dropped by the secondary ENI over the internal network.

0

EniId

string

The ID of the secondary ENI.

eni-bp19da36d6xdwey\*\*\*\*

DropPacketTx

string

The number of sent packets that were dropped by the secondary ENI over the internal network.

0

PacketTx

string

The number of packets sent by the secondary ENI over the internal network.

0

IntranetTx

string

The average rate at which the secondary ENI sent data over the internal network. Unit: Kbit/s.

0

IntranetRx

string

The average rate at which the secondary ENI received data over the internal network. Unit: Kbit/s.

0

## Examples

Sample success responses

`JSON`format

```
{
  "TotalCount": 4,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "MonitorData": {
    "EniMonitorData": [
      {
        "PacketRx": 0,
        "TimeStamp": "2018-05-21T03:22:00Z",
        "DropPacketRx": 0,
        "EniId": "eni-bp19da36d6xdwey****",
        "DropPacketTx": 0,
        "PacketTx": 0,
        "IntranetTx": 0,
        "IntranetRx": 0
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

InvalidEniId.NotFound

The specified ENI ID does not exist.

The specified ENI ID does not exist.

403

InvalidStartTime.Malformed

The specified parameter "StartTime" is not valid.

The specified StartTime parameter does not conform to the specification.

403

InvalidEndTime.Malformed

The specified parameter "EndTime" is not valid.

The specified EndTime parameter is invalid.

403

InvalidPeriod.ValueNotSupported

The specified parameter "Period" is not valid.

\-

403

InvalidStartTime.TooEarly

The specified parameter "StartTime" is too early.

\-

403

InvalidParameter.TooManyDataQueried

Too many data queried.

\-

403

Throttling

Request was denied due to request throttling.

\-

403

InvalidInstanceType.NotSupportCredit

The InstanceType of the specified instance does not support credit.

The instance type does not support burstable instances.

403

InvalidParameter.EndTime

The specified parameter EndTime is earlier than StartTime.

The end time cannot be earlier than the start time.

404

InvalidDiskId.NotFound

The DiskId provided does not exist in our records.

The specified disk does not exist. Check whether the disk ID is correct.

404

InvalidEcsId.NotFound

The specified instance ID is invalid.

The specified instance ID is invalid.

4003

InvalidParam.Malformed

The specified parameter "EniId" and "InstanceId" are not valid

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeEniMonitorData?updateTime=2025-11-27#workbench-doc-change-demo)

2024-12-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeEniMonitorData?updateTime=2024-12-19#workbench-doc-change-demo)
