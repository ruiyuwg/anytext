Queries the monitoring data of an Elastic Compute Service (ECS) instance. The monitoring data can include the vCPU utilization, CPU credits of the burstable instance, amount of received data traffic, amount of sent data traffic, and average bandwidth.

## Operation description

## [](#usage-notes)[](#)Usage notes

Take note of the following items:

-   Up to 400 monitoring data entries can be returned at a time. Make sure that the `TotalCount` value does not exceed 400. The value is calculated by using the following formula: `TotalCount = (EndTime - StartTime)/Period`. If the TotalCount value is greater than 400, the `InvalidParameter.TooManyDataQueried` error is returned.
-   You can query the monitoring data in the last 30 days. If the value of `StartTime` is more than 30 days earlier than the current time, an error is returned.
-   In some scenarios, such as when the instance is in the Stopped state, the system cannot obtain the relevant information and specific information may be missing from the returned monitoring data.
-   You cannot call this operation to obtain the CPU basic monitoring information of an ECS bare metal instance. To obtain the CPU monitoring information of an ECS bare metal instance, install the CloudMonitor agent on the instance. For more information, see [InstallCloudMonitor](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceMonitorData)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceMonitorData)

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

ecs:DescribeInstanceMonitorData

get

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

InstanceId

string

Yes

The instance ID.

i-bp1a36962lrhj4ab\*\*\*\*

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (`ss`) is not `00`, the time is rounded up to the next minute.

2014-10-29T23:00:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (`ss`) is not `00`, the time is rounded up to the next minute.

2014-10-30T08:00:00Z

Period

integer

No

The interval at which to retrieve monitoring data. Unit: seconds. Valid values:

-   60
-   600
-   3600

Default value: 60.

60

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

MonitorData

array<object>

The monitoring data of the instance.

InstanceMonitorData

object

CPUCreditBalance

float

The total number of CPU credits of the burstable instance.

120

BPSRead

integer

The read bandwidth of the cloud disks (system disk and data disks). Unit: Byte/s.

1000

InternetTX

integer

The Internet traffic sent by the instance during the period that is specified by the `Period` parameter. The period starts from the point in time that is specified by the `TimeStamp` parameter. Unit: Kbit.

343

CPU

integer

The vCPU utilization of the instance. Unit: percent (%).

2

CPUCreditUsage

float

The number of CPU credits consumed by the burstable instance.

30

IOPSWrite

integer

The number of write I/O operations per second on the cloud disks (system disk and data disks).

200

IntranetTX

integer

The internal data traffic sent by the instance during the period that is specified by the `Period` parameter. The period starts from the point in time that is specified by the `TimeStamp` parameter. Unit: Kbit.

343

InstanceId

string

The instance ID.

i-bp1a36962lrhj4\*\*\*\*

BPSWrite

integer

The write bandwidth of the cloud disks (system disk and data disks). Unit: Byte/s.

13585

CPUNotpaidSurplusCreditUsage

float

The unpaid overdrawn CPU credits.

0.5

CPUAdvanceCreditBalance

float

The overdrawn CPU credits of the burstable instance.

0.4

IOPSRead

integer

The number of read I/O operations per second on the cloud disks (system disk and data disks).

1000

InternetBandwidth

integer

The public bandwidth of the instance. Unit: Kbit/s.

10

InternetRX

integer

The Internet traffic received by the instance during the period that is specified by the `Period` parameter. The period starts from the point in time that is specified by the `TimeStamp` parameter. Unit: Kbit.

122

TimeStamp

string

The timestamp of the monitoring data.

2014-10-30T05:00:00Z

IntranetRX

integer

The internal data traffic received by the instance during the period that is specified by the `Period` parameter. The period starts from the point in time that is specified by the `TimeStamp` parameter. Unit: Kbit.

122

IntranetBandwidth

integer

The internal bandwidth of the instance. Unit: Kbit/s.

10

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "MonitorData": {
    "InstanceMonitorData": [
      {
        "CPUCreditBalance": 120,
        "BPSRead": 1000,
        "InternetTX": 343,
        "CPU": 2,
        "CPUCreditUsage": 30,
        "IOPSWrite": 200,
        "IntranetTX": 343,
        "InstanceId": "i-bp1a36962lrhj4****",
        "BPSWrite": 13585,
        "CPUNotpaidSurplusCreditUsage": 0.5,
        "CPUAdvanceCreditBalance": 0.4,
        "IOPSRead": 1000,
        "InternetBandwidth": 10,
        "InternetRX": 122,
        "TimeStamp": "2014-10-30T05:00:00Z",
        "IntranetRX": 122,
        "IntranetBandwidth": 10
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

InvalidStartTime.ValueNotSupported

The specified parameter StartTime is later than EndTime.

\-

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-15

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceMonitorData?updateTime=2025-01-15#workbench-doc-change-demo)
