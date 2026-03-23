Queries fine-grained monitoring data of multiple disks. You can query only the burst performance data of ESSD AutoPL disks. The data is aggregated by hour.

## Operation description

## [](#usage-notes)Usage notes

CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeDiskMonitorDataList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ebs/2021-07-30/DescribeDiskMonitorDataList)

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

ebs:DescribeDiskMonitorDataList

list

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-disks-describeregions) operation to query the list of regions that support CloudLens for EBS.

cn-hangzhou

Type

string

Yes

The type of the monitoring data. Set the value to pro.

pro: burst performance data, such as burst I/O operations.

pro

DiskIds

string

No

The IDs of the disks. The value is a JSON array that contains multiple disk IDs. Separate the IDs with commas (,).

\["d-bp67acfmxazb4p\*\*\*\*","d-bp67acfmxazs5t\*\*\*\*"\]

StartTime

string

Yes

The beginning of the time range during which you want to query the near real-time monitoring data of the disks. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

2022-06-01T03:00:00Z

EndTime

string

Yes

The end of the time range during which you want to query the near real-time monitoring data of the disks. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

2022-06-01T05:00:00Z

MaxResults

string

No

The number of entries per page. If you specify this parameter, both `MaxResults` and `NextToken` are used for a paged query.

Valid values: 1 to 100.

Default value: 10.

10

NextToken

string

No

The pagination token that is used in this request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

e71d8a535bd9c\*\*\*\*

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

MonitorData

array<object>

The near real-time monitoring data of the disks.

DiskMonitorData

object

The near real-time monitoring data of the disks.

DiskId

string

The ID of the disk.

d-bp67acfmxazb4p\*\*\*\*

Timestamp

string

The beginning of the time range during which the performance of the disk bursts. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2022-06-01T08:00:00Z

BurstIOCount

long

The number of burst I/O operations.

2000

TotalCount

long

The total number of entries returned.

3

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.

e71d8a535bd9c\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "MonitorData": [
    {
      "DiskId": "d-bp67acfmxazb4p****",
      "Timestamp": "2022-06-01T08:00:00Z",
      "BurstIOCount": 2000
    }
  ],
  "TotalCount": 3,
  "NextToken": "e71d8a535bd9c****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter

The parameter %s is invalid.

The specified parameter value is invalid.

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

2023-03-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ebs/2021-07-30/DescribeDiskMonitorDataList?updateTime=2023-03-22#workbench-doc-change-demo)
