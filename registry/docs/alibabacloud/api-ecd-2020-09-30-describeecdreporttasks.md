Queries data report export tasks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeEcdReportTasks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeEcdReportTasks)

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

ecd:DescribeEcdReportTasks

none

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

TaskId

string

No

The ID of the report export task.

ret-sfkdsjfi\*\*\*\*\*

TaskType

string

No

The type of the report.

Valid value:

-   RESOURCE\_REPORT

RESOURCE\_REPORT

SubType

string

No

The sub-type of the report export task.

Valid value:

-   DESKTOP: cloud computer

DESKTOP

Status

array

No

The task status.

Valid values:

-   INIT: initializing
-   FAILED
-   RUNNING
-   EXPIRED
-   FINISHED

string

No

The task status.

RUNNING

PageNum

integer

No

The number of the page to return. Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries returned per page. Maximum value: 200.

20。

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

TotalCount

long

The total number of entries returned.

20

ExportTaskList

array<object>

The report export tasks.

exportTask

object

TaskId

string

The ID of the report export task.

ret-asdfkjg\*\*\*\*\*

TaskType

string

The type of the report.

Valid value:

-   RESOURCE\_REPORT

RESOURCE\_REPORT

SubType

string

The sub-type of the report export task.

Valid value:

-   DESKTOP: cloud computer

DESKTOP

ReportFileName

string

The name of the report file.

TestFileName

Status

string

The task status.

Running

Progress

float

The progress of the report export task. Unit: %.

80

GmtCreate

string

The time when the task was created.

2025-07-14T07:46:49.000+00:00

GmtModified

string

The time when the task was last modified.

2025-07-14T07:46:49.000+00:00

DownloadUrl

string

The download URL of the report file.

https://cn-shanghai-ecd-report-files.oss-cn-shanghai.aliyuncs.com/ecd\_report/resource/desktop/100721430\*\*\*\*\*/DESKTOP\_20250709140932\_\*\*\*\*\*.xlsx?Expires=\*\*\*\*\*&OSSAccessKeyId=STS.\*\*\*\*&Signature=\*\*\*\*%3D&security-token=\*\*\*\*

ErrorCode

string

The error code returned.

Success

ErrorMsg

string

The error message.

No Data.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "TotalCount": 20,
  "ExportTaskList": [
    {
      "TaskId": "ret-asdfkjg*****",
      "TaskType": "RESOURCE_REPORT",
      "SubType": "DESKTOP",
      "ReportFileName": "TestFileName",
      "Status": "Running",
      "Progress": 80,
      "GmtCreate": "2025-07-14T07:46:49.000+00:00",
      "GmtModified": "2025-07-14T07:46:49.000+00:00",
      "DownloadUrl": "https://cn-shanghai-ecd-report-files.oss-cn-shanghai.aliyuncs.com/ecd_report/resource/desktop/100721430*****/DESKTOP_20250709140932_*****.xlsx?Expires=*****&OSSAccessKeyId=STS.****&Signature=****%3D&security-token=****",
      "ErrorCode": "Success",
      "ErrorMsg": "No Data."
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
