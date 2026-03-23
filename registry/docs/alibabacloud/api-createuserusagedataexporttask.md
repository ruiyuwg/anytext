Creates a task to export your resource usage history to a PDF file.

## Operation description

-   You can create a task to query data in the last year. The maximum time range that can be queried is one month.
-   You can call this operation up to 100 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/CreateUserUsageDataExportTask)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/CreateUserUsageDataExportTask)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:CreateUserUsageDataExportTask

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

StartTime

string

Yes

The start of the time range to query. The data is collected every 5 minutes.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2015-12-10T20:00:00Z

EndTime

string

Yes

The end of the time range to query. The end time must be later than the start time.

Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

2015-12-10T21:00:00Z

TaskName

string

No

The name of the task.

Refresh

Language

string

No

The language in which you want to export the file. Default value: zh-cn. Valid values:

-   **zh-cn**: Chinese
-   **en-us**: English

zh-cn

## Response parameters

Parameter

Type

Description

Example

object

EndTime

string

The end of the time range during which data was queried.

2015-12-10T21:00:00Z

StartTime

string

The start of the time range during which data was queried.

2015-12-10T20:00:00Z

RequestId

string

The ID of the request.

ED61C6C3-8241-4187-AAA7-5157AE175CEC

TaskId

string

The ID of the task.

129456

## Examples

Sample success responses

`JSON`format

```
{
  "EndTime": "2015-12-10T21:00:00Z",
  "StartTime": "2015-12-10T20:00:00Z",
  "RequestId": "ED61C6C3-8241-4187-AAA7-5157AE175CEC",
  "TaskId": "129456"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingTimeParameter

The StartTime and EndTime must be both specified.

You must set both the start time and the end time.

400

InvalidStartTime.Malformed

The specified StartTime is invalid.

The format of the start time is invalid. Specify a valid value.

400

InvalidEndTime.Malformed

The specified EndTime is invalid.

The EndTime parameter is set in an invalid format. For more information, see the API references.

400

InvalidStartTime.ValueNotSupported

The specified StartTime is invalid.

The specified start time is invalid. For more information, see the API references.

400

InvalidParameterProduct

Invalid Parameter Product.

The Product parameter is set to an invalid value.

400

InvalidParameterAliuid

Invalid Parameter Aliuid.

The Aliuid parameter is set to an invalid value.

400

InvalidParameterStartTime

The parameter StartTime is invalid.

The specified StartTime parameter is invalid.

400

InvalidParameterEndTime

The parameter EndTime is invalid.

\-

400

InvalidTimeRange

Invalid StartTime and EndTime range.

The specified time range is invalid.

400

InvalidParameterOperator

Invalid Parameter Operator.

The Operator parameter is set to an invalid value.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/CreateUserUsageDataExportTask?updateTime=2024-12-18#workbench-doc-change-demo)

2023-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/CreateUserUsageDataExportTask?updateTime=2023-06-13#workbench-doc-change-demo)
