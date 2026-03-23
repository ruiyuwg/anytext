Modifies the permissions of an account for a Tair (Redis OSS-compatible) instance.

## Operation description

**Note**

-   Only Tair (Redis OSS-compatible) instances of Redis 4.0 or later are supported.
-   The Tair (Redis OSS-compatible) instance must be in the running state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/GrantAccountPrivilege)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/GrantAccountPrivilege)

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

kvstore:GrantAccountPrivilege

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

The ID of the instance to which the account belongs.

r-bp1zxszhcgatnx\*\*\*\*

AccountName

string

Yes

The name of the account. You can call the [DescribeAccounts](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeaccounts-redis) operation to obtain the name of the account.

demoaccount

AccountPrivilege

string

Yes

The permissions of the account. Default value: RoleReadWrite. Valid values:

-   RoleReadOnly: The account has the read-only permissions.
-   RoleReadWrite: The account has the read and write permissions.

RoleReadWrite

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

3845BDF5-15A6-4444-B770-78501819\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "3845BDF5-15A6-4444-B770-78501819****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidAccountName.Format

Specified AccountName is not valid.

\-

400

InvalidAccountPrivilege.Format

Specified AccountPrivilege is not valid.

\-

400

IncorrectAccount

Current DB instance account does not support this operation.

\-

400

IncorrectMinorVersion

Current engine minor version does not support operations.

The operation is not supported by the minor version of the instance. Update the instance to the latest minor version and try again.

404

InvalidAccountName.NotFound

Specified AccountName does not exist.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/GrantAccountPrivilege?updateTime=2024-07-11#workbench-doc-change-demo)

2023-07-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/GrantAccountPrivilege?updateTime=2023-07-20#workbench-doc-change-demo)
