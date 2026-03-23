Returns the processing result sent by an extension after a process in Operation Center is blocked by the extension.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/UpdateWorkbenchEventResult)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/UpdateWorkbenchEventResult)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

MessageId

string

Yes

The ID of the message received when the related extension point event is triggered after you enable message subscription by using the OpenEvent module.

03400b03-b721-4c34-8727-2d6884077091

ExtensionCode

string

Yes

The code of the extension.

58e95e2acd6f408e8707f1bf2591f9e9

CheckResult

string

Yes

The check result of the extension point event. Valid values: OK and Fail.

FAIL

CheckResultTip

string

No

The cause of the check failure.

SQL is too long

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

0bc1ec92159376\*\*\*\*

Success

boolean

Indicates whether the request was successful.

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0bc1ec92159376****",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2020-05-18/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
