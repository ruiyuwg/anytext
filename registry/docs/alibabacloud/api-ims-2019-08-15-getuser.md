Queries the information about a RAM user.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ims/2019-08-15/GetUser)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ims/2019-08-15/GetUser)

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

ram:GetUser

get

\*User

`acs:ram::{#accountId}:user/{#UserName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

UserPrincipalName

string

No

The logon name of the RAM user.

The name is in the format of `<username>@<AccountAlias>.onaliyun.com`. `<username>` indicates the name of the RAM user. `<AccountAlias>.onaliyun.com` indicates the default domain name.

The value of `UserPrincipalName` must be `1 to 128` characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (\_). The value of `<username>` must be `1 to 64` characters in length.

**Note** You must specify only one of the following parameters: `UserPrincipalName`, `UserId`, and `UserAccessKeyId`.

test@example.onaliyun.com

UserId

string

No

The ID of the RAM user.

**Note** You must specify only one of the following parameters: `UserPrincipalName`, `UserId`, and `UserAccessKeyId`.

20732900249392\*\*\*\*

UserAccessKeyId

string

No

The AccessKey ID of the RAM user.

**Note** You must specify only one of the following parameters: `UserPrincipalName`, `UserId`, and `UserAccessKeyId`.

LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

User

object

The information about the RAM user.

DisplayName

string

The display name of the RAM user.

test

UserPrincipalName

string

The logon name of the RAM user.

test@example.onaliyun.com

Email

string

The email address of the RAM user.

**Note** This parameter is valid only on the China site (aliyun.com).

alice@example.com

UpdateDate

string

The time when the information about the RAM user was updated.

2020-10-13T07:39:22Z

MobilePhone

string

The mobile phone number of the RAM user.

**Note** This parameter is valid only on the China site (aliyun.com).

86-1868888\*\*\*\*

UserId

string

The ID of the RAM user.

20732900249392\*\*\*\*

Comments

string

The description.

This is a cloud computing engineer.

LastLoginDate

string

The last time when the RAM user logged on to the Alibaba Cloud Management Console.

2020-10-12T09:12:00Z

CreateDate

string

The time when the RAM user was created.

2020-10-12T09:12:00Z

ProvisionType

string

The source of the RAM user. Valid value:

-   Manual: The RAM user is manually created in the RAM console.
-   SCIM: The RAM user is mapped by using System for Cross-domain Identity Management (SCIM).
-   CloudSSO: The RAM user is mapped from a CloudSSO user.

CloudSSO

Tags

array<object>

The tags.

Tag

object

TagKey

string

The tag key.

operator

TagValue

string

The tag value.

alice

UserName

string

The username of the RAM user, which is the prefix of the logon name of the RAM user.

test

RequestId

string

The request ID.

4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B

## Examples

Sample success responses

`JSON`format

```
{
  "User": {
    "DisplayName": "test",
    "UserPrincipalName": "test@example.onaliyun.com",
    "Email": "alice@example.com",
    "UpdateDate": "2020-10-13T07:39:22Z",
    "MobilePhone": "86-1868888****",
    "UserId": "20732900249392****",
    "Comments": "This is a cloud computing engineer.",
    "LastLoginDate": "2020-10-12T09:12:00Z",
    "CreateDate": "2020-10-12T09:12:00Z",
    "ProvisionType": "CloudSSO",
    "Tags": {
      "Tag": [
        {
          "TagKey": "operator",
          "TagValue": "alice"
        }
      ]
    },
    "UserName": "test"
  },
  "RequestId": "4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-08-14

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Ims/2019-08-15/GetUser?updateTime=2024-08-14#workbench-doc-change-demo)
