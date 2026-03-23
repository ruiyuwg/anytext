Queries fine-grained monitoring data of a disk.

## Operation description

## [](#usage-notes)Usage notes

-   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).
-   Up to 400 monitoring data entries can be returned at a time. An error is returned if the value calculated based on the following formula is greater than 400: `(EndTime - StartTime)/Period`.
-   You can query the monitoring data collected in the last three days. An error is returned if the time specified by `StartTime` is more than three days prior to the current time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeDiskMonitorData)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeDiskMonitorData)

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

ebs:DescribeDiskMonitorData

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

The region ID of the disk.

cn-hangzhou

DiskId

string

Yes

The ID of the disk.

d-bp67acfmxazb4p\*\*\*\*

StartTime

string

Yes

The beginning of the time range during which you want to query the near real-time monitoring data of the disk. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

2022-06-01T03:00:00Z

EndTime

string

Yes

The end of the time range during which you want to query the near real-time monitoring data of the disk. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

2022-06-01T05:00:00Z

Period

long

No

The interval at which the near real-time monitoring data is collected. Unit: seconds. Valid values:

-   5
-   60

Default value: 5.

5

Type

string

No

The type of the monitoring data. Valid values:

-   basic: baseline performance data.
-   pro: burst performance data, such as burst I/O operations.

basic

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

TotalCount

long

The total number of entries returned.

15

MonitorData

array<object>

The near real-time monitoring data of the disk.

DiskMonitorData

object

The near real-time monitoring data of the disk.

ReadBPS

long

The read bandwidth of the disk. Unit: MByte/s.

10

WriteBPS

long

The write bandwidth of the disk. Unit: MByte/s.

204

DiskId

string

The ID of the disk.

d-bp1bq5g3dxxo1x4o\*\*\*\*

ReadIOPS

long

The maximum number of read IOPS.

2000

WriteIOPS

long

The maximum number of write IOPS.

2000

IOPSPercent

long

The percentage of IOPS.

80(%)

BPSPercent

long

The percentage of BPS.

80(%)

Timestamp

string

The timestamp that is used to query the near real-time monitoring data of the disk. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2022-06-01T08:00:00Z

BurstIOCount

long

The number of burst I/O operations.

0

ReadBlockSize

long

Read IO block size. Unit: Bytes

4096

WriteBlockSize

long

Write IO block size. Unit: Bytes

4096

ReadLatency

long

Read IO latency. Unit: microsecond

100

WriteLatency

long

Write IO latency. Unit: microsecond

100

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "TotalCount": 15,
  "MonitorData": [
    {
      "ReadBPS": 10,
      "WriteBPS": 204,
      "DiskId": "d-bp1bq5g3dxxo1x4o****",
      "ReadIOPS": 2000,
      "WriteIOPS": 2000,
      "IOPSPercent": 0,
      "BPSPercent": 0,
      "Timestamp": "2022-06-01T08:00:00Z",
      "BurstIOCount": 0,
      "ReadBlockSize": 4096,
      "WriteBlockSize": 4096,
      "ReadLatency": 100,
      "WriteLatency": 100
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

Forbidden

User is not authorized to operate.

You are not authorized to manage the resource. Check the account permissions or contact the Alibaba Cloud account.

403

Forbidden.Action

User is not authorized to operate this action.

You are not authorized to perform this operation. Check the account permissions or contact the Alibaba Cloud account.

404

NoSuchResource

The specified resource does not exist.

The specified resource does not exist.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred.

504

RequestTimeout

The request is timeout, please try again later.

The request has timed out. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ebs/2021-07-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-02

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ebs/2021-07-30/DescribeDiskMonitorData?updateTime=2024-02-02#workbench-doc-change-demo)
