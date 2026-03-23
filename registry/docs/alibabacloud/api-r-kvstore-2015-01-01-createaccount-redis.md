Creates an account that has specific permissions for a Tair (Redis OSS-compatible) instance.

## Operation description

-   This operation is supported only for instances that are compatible with Redis 4.0 or later.
-   The instance must be in the running state.
-   You can create up to 18 accounts for an instance.

**Note** For more information about how to create an account in the console, see [Manage database accounts](/help/en/redis/user-guide/create-and-manage-database-accounts).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/CreateAccount)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/CreateAccount)

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

kvstore:CreateAccount

create

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

The name of the account. The name must meet the following requirements:

-   The name must start with a lowercase letter and can contain lowercase letters, digits, and underscores (\_).
-   The name can be up to 100 characters in length.
-   The name cannot be one of the reserved words listed in the [Reserved words for Redis account names](/help/en/redis/user-guide/create-and-manage-database-accounts) section.

demoaccount

AccountPrivilege

string

No

The permissions of the account. Valid values:

-   **RoleReadOnly**: The account has read-only permissions.
-   **RoleReadWrite**: The account has read and write permissions.

RoleReadOnly

AccountPassword

string

Yes

The password of the account. The password must be 8 to 32 characters in length and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and specific special characters. These special characters include `! @ # $ % ^ & * ( ) _ + - =`

uWonno21\*\*\*\*

AccountDescription

string

No

The description of the account.

-   The description must start with a letter, and cannot start with `http://` or `https://`.
-   The description can contain letters, digits, underscores (\_), and hyphens (-).
-   The description must be 2 to 256 characters in length.

testaccount

AccountType

string

No

The type of the account. Set the value to **Normal**, which indicates that the account is a standard account.

Normal

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

ABAF95F6-35C1-4177-AF3A-70969EBD\*\*\*\*

InstanceId

string

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

AcountName

string

The name of the account.

demoaccount

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "ABAF95F6-35C1-4177-AF3A-70969EBD****",
  "InstanceId": "r-bp1zxszhcgatnx****",
  "AcountName": "demoaccount"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidAccountName.Duplicate

Specified AccountName already exists in this instance.

The error message returned because the account already exists.

400

InvalidAccountName.Format

Specified AccountName is not valid.

\-

400

InvalidEngineVersion.Format

Current EngineVersion does not support operations.

The operation is not supported while the instance runs this engine version.

400

InvalidAccountDescription.Format

Specified AccountDescription is not valid.

\-

400

InvalidAccountPassword.Format

Specified AccountPassword is not valid.

\-

400

InvalidDBInstanceAccountMode.Format

Current DB instance AccountMode does not support this operation.

\-

400

InvalidAccountName.Forbid

Specified AccountName is a keyword.

\-

400

InvalidAccountPrivilege.Malformed

Specified account privilege is not valid.

\-

403

AccountLimitExceeded

Exceeding the allowed amount of account.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-10-27

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/CreateAccount?updateTime=2025-10-27#workbench-doc-change-demo)

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/CreateAccount?updateTime=2025-03-25#workbench-doc-change-demo)

2024-07-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/CreateAccount?updateTime=2024-07-11#workbench-doc-change-demo)
