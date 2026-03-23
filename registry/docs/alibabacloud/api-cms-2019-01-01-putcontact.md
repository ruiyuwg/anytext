Creates or modifies an alert contact.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cms/2019-01-01/PutContact)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cms/2019-01-01/PutContact)

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

cms:PutContact

create

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

ContactName

string

Yes

The name of the alert contact.

Alice

Describe

string

Yes

The description of the alert contact.

ECS\_Instance

Channels.SMS

string

No

The phone number of the alert contact. After you add or modify a phone number, the recipient receives a text message that contains an activation link. The system adds the recipient to the list of alert contacts only after the recipient activates the phone number.

Specify at least one of the following alert notification methods: email address and DingTalk chatbot.

1333333\*\*\*\*

Channels.Mail

string

No

The email address. After you add or modify an email address, the recipient receives an email that contains an activation link. The system adds the recipient to the list of alert contacts only after the recipient activates the email address.

Specify at least one of the following alert notification methods: email address and DingTalk chatbot.

test@aliyun.com

Channels.AliIM

string

No

The TradeManager ID of the alert contact.

Specify at least one of the following alert notification methods: email address and DingTalk chatbot.

Jim

Channels.DingWebHook

string

No

The webhook URL of the DingTalk chatbot.

Specify at least one of the following alert notification methods: email address and DingTalk chatbot.

https://oapi.dingtalk.com/robot/send?access\_token=7d49515e8ebf21106a80a9cc4bb3d247771305d52fb15d6201234565\*\*\*\*

Lang

string

No

The language in which the alert information is displayed. Valid values:

-   zh-cn: simplified Chinese
-   en: English

**Note** If you do not specify this parameter, CloudMonitor identifies the language of the alert information based on the region of your Alibaba Cloud account.

zh-cn

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The status code.

**Note** The status code 200 indicates that the request was successful.

200

Message

string

The error message.

The Request is not authorization.

RequestId

string

The request ID.

181C406E-9DE4-484C-9C61-37AE9A1A12EE

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "The Request is not authorization.",
  "RequestId": "181C406E-9DE4-484C-9C61-37AE9A1A12EE",
  "Success": true
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameterValue

%s

\-

403

InvalidAuthorization

Permission denied

Permission denied.

500

InternalError

The request processing has failed due to some unknown error.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
