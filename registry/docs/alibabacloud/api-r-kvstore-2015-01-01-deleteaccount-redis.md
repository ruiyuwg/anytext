Deletes an account from a Tair (Redis OSS-compatible) instance.

## Operation description

-   This operation is supported only for instances that are compatible with Redis 4.0 or later.
-   The instance must be in the Running state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DeleteAccount)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DeleteAccount)

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

kvstore:DeleteAccount

delete

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

The instance ID.

r-bp1zxszhcgatnx\*\*\*\*

AccountName

string

Yes

The username of the account. You can call the [DescribeAccounts](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeaccounts-redis) operation to query the username of the account.

demoaccount

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

The request ID.

8129F11A-D70B-43A6-9455-CE9EAA71\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "8129F11A-D70B-43A6-9455-CE9EAA71****"
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

InvalidEngineVersion.Format

Current EngineVersion does not support operations.

The operation is not supported while the instance runs this engine version.

403

OperationDenied.AccountStatus

The operation is not permitted due to status of account.

This operation is not allowed due to the state of the account.

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

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DeleteAccount?updateTime=2024-07-11#workbench-doc-change-demo)

2024-02-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DeleteAccount?updateTime=2024-02-26#workbench-doc-change-demo)

2023-03-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DeleteAccount?updateTime=2023-03-02#workbench-doc-change-demo)
