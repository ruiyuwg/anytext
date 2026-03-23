Queries the details of screen recording files.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeRecordings)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeRecordings)

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

ecd:DescribeRecordings

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

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.

cn-beijing

MaxResults

integer

No

The maximum number of entries per page.

Maximum value: 100.

Default value: 10.

20

NextToken

string

No

The pagination token that is used in the request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1\*\*\*\*

PolicyGroupId

string

No

The policy ID.

pg-gx2x1dhsmthe9\*\*\*\*

DesktopId

string

No

The cloud computer ID. If this parameter is not specified, the screen recording files on all cloud computers in the designated region will be queried.

ecd-hlh41mk78dugw\*\*\*\*

StartTime

string

No

The start time of the query. Specify the time in the `YYYYMMDDhhmmss` format. The time must be in UTC+8.

20230424000000

EndTime

string

No

The end time of the query. Specify the time in the `YYYYMMDDhhmmss` format. The time must be in UTC+8.

20230424004441

NeedSignedUrl

boolean

No

Specifies whether to return a URL.

Valid values:

-   true
-   false (default)

false

SignedUrlExpireMinutes

integer

No

The validity period of the returned URL. Unit: minutes.

10

StandardStartTime

string

No

The start time of the query. Specify the time in the ISO 8601 standard in the `yyyy-mm-ddthh:mm:ssz` format. The time must be in UTC+0.

2025-01-27T02:20:10Z

StandardEndTime

string

No

The end time of the query. Specify the time in the ISO 8601 standard in the `yyyy-mm-ddthh:mm:ssz` format. The time must be in UTC+0.

2025-01-27T02:30:10Z

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.

AAAAAV3MpHK1AP0pfERHZN5pu6nbCQ7ar+fECeh1IuWQXi39R5eoJ68zWp99mTAKRRNRhw==

RequestId

string

The request ID.

327CFE78-1C0D-51AC-A9C6-BCEDF0DD44D6

Recordings

array<object>

The screen recording files.

Recording

object

The screen recording file.

EndTime

string

The end time of the recording.

2023-04-10T07:26:06Z

FilePath

string

The file path.

pg-4w5nk44zo5yl129dd/1mk78dugw344.mp4

StartTime

string

The start time of the recording.

2023-04-10T07:26:06Z

RecordingType

string

The type of event that triggers the recording.

Valid values:

-   byaction\_cmd\_ft: triggered by copy-paste or file transfer events.
-   period: triggered at scheduled intervals.
-   session: triggered by session lifecycle monitoring.
-   byaction\_commands: triggered by copy-paste only.
-   alltime: continuous recording.
-   byaction\_file\_transfer: triggered by file transfer only.

alltime

RecordingSize

integer

The size of the screen recording file. Unit: bytes.

1742845

DesktopId

string

The cloud computer ID.

ecd-10v0vuvm616sk\*\*\*\*

EndUserIds

array

The end user IDs.

EndUserId

string

The end user ID.

alice

PolicyGroupId

string

The policy ID.

pg-6dn811rzrwh9ws4z6

DesktopName

string

The cloud computer name.

DemoComputer

SignedUrl

string

The download URL of the screen recording file.

https://eds-recording-bucket-cn-hangzhou-137187566615\*\*\*\*.oss-cn-hangzhou.aliyuncs.com/pg-28l5tdjd33txz\*\*\*\*/ecd-e0so9m9u6chf1\*\*\*\*\_gftest001\_alltime\_s0\_\*\*\*\*.mp4?Expires=171256\*\*\*\*&OSSAccessKeyId=STS.NSwQo6S\*\*\*\*&Signature=\*\*\*\*4WyAA

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "AAAAAV3MpHK1AP0pfERHZN5pu6nbCQ7ar+fECeh1IuWQXi39R5eoJ68zWp99mTAKRRNRhw==",
  "RequestId": "327CFE78-1C0D-51AC-A9C6-BCEDF0DD44D6",
  "Recordings": [
    {
      "EndTime": "2023-04-10T07:26:06Z",
      "FilePath": "pg-4w5nk44zo5yl129dd/1mk78dugw344.mp4",
      "StartTime": "2023-04-10T07:26:06Z",
      "RecordingType": "alltime",
      "RecordingSize": 1742845,
      "DesktopId": "ecd-10v0vuvm616sk****",
      "EndUserIds": [
        "alice"
      ],
      "PolicyGroupId": "pg-6dn811rzrwh9ws4z6",
      "DesktopName": "DemoComputer",
      "SignedUrl": "https://eds-recording-bucket-cn-hangzhou-137187566615****.oss-cn-hangzhou.aliyuncs.com/pg-28l5tdjd33txz****/ecd-e0so9m9u6chf1****_gftest001_alltime_s0_****.mp4?Expires=171256****&OSSAccessKeyId=STS.NSwQo6S****&Signature=****4WyAA"
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

2025-01-16

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeRecordings?updateTime=2025-01-16#workbench-doc-change-demo)

2022-04-24

Add Operation

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeRecordings?updateTime=2022-04-24#workbench-doc-change-demo)
