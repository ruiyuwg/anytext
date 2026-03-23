Modifies the password of an account for a Tair (Redis OSS-compatible) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyAccountPassword)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyAccountPassword)

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

kvstore:ModifyAccountPassword

update

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

AccountName

string

Yes

The username of the account for which you want to change the password. You can call the [DescribeAccounts](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeaccounts-redis) operation to query the username of the account.

testaccount

OldAccountPassword

string

Yes

The current password of the account.

**Note** If you forget your password, you can call the [ResetAccountPassword](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-resetaccountpassword-redis) operation to reset your password.

oldPassWd999\*\*\*\*

NewAccountPassword

string

Yes

The new password to be set for the account. The password must be 8 to 32 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and specific special characters. These special characters include `! @ # $ % ^ & * ( ) _ + - =`

newPassWd888\*\*\*\*

SourceBiz

string

No

This parameter is used only for internal maintenance. You do not need to specify this parameter.

SDK

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

5D622714-AEDD-4609-9167-F5DDD3D1\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5D622714-AEDD-4609-9167-F5DDD3D1****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyAccountPassword?updateTime=2025-03-25#workbench-doc-change-demo)

2024-07-11

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyAccountPassword?updateTime=2024-07-11#workbench-doc-change-demo)
