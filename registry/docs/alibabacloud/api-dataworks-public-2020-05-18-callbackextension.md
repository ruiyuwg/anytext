Sends the processing result of an extension point event by an extension to DataWorks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/CallbackExtension)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2020-05-18/CallbackExtension)

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

ExtensionCode

string

Yes

The unique code of the extension.

8abcb91f-d266-4073-b907-2ed670378ed1

MessageId

string

Yes

The message ID in DataWorks OpenEvent. You can obtain the ID from a received message when an extension point event is triggered.

03400b03-b721-4c34-8727-2d6884077091

CheckResult

string

Yes

The check status of the extension point event. Valid values:

-   OK: The event passes the check.
-   FAIL: The event fails to pass the check. You must check and handle the reported error at the earliest opportunity to ensure that your program is run as expected.
-   WARN: The event passes the check, but an alert is reported.

FAIL

CheckMessage

string

No

The check message of the extension point event. If CheckResult is set to FAIL, you must provide the failure cause.

The xxx rule is hit. Modify it and try again.

## Response parameters

Parameter

Type

Description

Example

object

The data returned.

RequestId

string

The request ID.

7C352CB7-CD88-50CF-9D0D-E81BDF020E7F

Success

string

Indicates whether the request was successful. Valid values:

true

false

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "7C352CB7-CD88-50CF-9D0D-E81BDF020E7F",
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
