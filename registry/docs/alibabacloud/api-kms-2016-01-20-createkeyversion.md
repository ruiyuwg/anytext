Creates a version for a customer master key (CMK).

## Operation description

-   You can create a version only for an asymmetric CMK that is in the Enabled state. You can call the [CreateKey](/help/en/kms/key-management-service/developer-reference/api-createkey) operation to create an asymmetric CMK and the [DescribeKey](/help/en/kms/key-management-service/developer-reference/api-describekey) operation to query the status of the CMK. The status is specified by the KeyState parameter.
-   The minimum interval for creating a version of the same CMK is seven days. You can call the [DescribeKey](/help/en/kms/key-management-service/developer-reference/api-describekey) operation to query the time when the last version of a CMK was created. The time is specified by the LastRotationDate parameter.
-   If a CMK is in a private key store, you cannot create a version for the CMK.
-   You can create a maximum of 50 versions for a CMK in the same region.

You can create a version for the CMK whose ID is `0b30658a-ed1a-4922-b8f7-a673ca9c****` by using the parameter settings provided in this topic.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Kms/2016-01-20/CreateKeyVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Kms/2016-01-20/CreateKeyVersion)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

KeyId

string

Yes

The ID of the CMK. The ID must be globally unique.

**Note** You can also set the value to an alias that is bound to the CMK. For more information, see [Overview of aliases](/help/en/kms/key-management-service/support/overview).

0b30658a-ed1a-4922-b8f7-a673ca9c\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

b96f250a-4b75-498c-91be-22c6928f85be

KeyVersion

object

The metadata of the version.

KeyId

string

The ID of the CMK. The ID must be globally unique.

0b30658a-ed1a-4922-b8f7-a673ca9c\*\*\*\*

KeyVersionId

string

The ID of the version.

c0a3d5dc-0b47-4199-a050-b289349a\*\*\*\*

CreationDate

string

The date and time when the version was created. The time is displayed in UTC.

2019-08-02T10:38:27Z

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "b96f250a-4b75-498c-91be-22c6928f85be",
  "KeyVersion": {
    "KeyId": "0b30658a-ed1a-4922-b8f7-a673ca9c****",
    "KeyVersionId": "c0a3d5dc-0b47-4199-a050-b289349a****",
    "CreationDate": "2019-08-02T10:38:27Z"
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Kms/2016-01-20/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-10-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Kms/2016-01-20/CreateKeyVersion?updateTime=2023-10-18#workbench-doc-change-demo)
