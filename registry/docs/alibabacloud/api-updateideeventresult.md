Returns the check result of an extension point event to DataStudio after the extension point event is triggered during data development and checked by an extension.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/UpdateIDEEventResult)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/UpdateIDEEventResult)

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

dataworks:\*

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

MessageId

string

No

The message ID. You can obtain the ID from a received message when an extension point event is triggered.

8abcb91f-d266-4073-b907-2ed670378ed1

ExtensionCode

string

No

The unique identifier of the extension. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Extensions tab of the Open Platform page to view the identifier.

8abcb91f-d266-4073-b907-2ed670378ed1

CheckResult

string

No

The check status of the extension point event. Valid values:

-   OK: The event passes the check.
-   FAIL: The event fails to pass the check. You must check and handle the reported error at the earliest opportunity to ensure that your program is run as expected.
-   WARN: The event passes the check, but an alert is reported.

OK

CheckResultTip

string

No

The summary information of the check result. The information is displayed in DataStudio. If an alert is reported or the event fails the check, you can troubleshoot errors based on the information.

Succeeded

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

8abcb91f-d266-4073-b907-2ed670378ed1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8abcb91f-d266-4073-b907-2ed670378ed1"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InternalError.UserId.Missing

An internal system error occurred. Try again later.

\-

403

Forbidden.Access

Access is forbidden. Please first activate DataWorks Enterprise Edition or Flagship Edition.

No permission, please authorize

429

Throttling.Api

The request for this resource has exceeded your available limit.

\-

429

Throttling.System

The DataWorks system is busy. Try again later.

\-

429

Throttling.User

Your request is too frequent. Try again later.

\-

500

InternalError.System

An internal system error occurred. Try again later.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2020-05-18/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
