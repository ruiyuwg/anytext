Queries a specified account of a Tair (Redis OSS-compatible) instance.

## Operation description

**Note** Only Tair (Redis OSS-compatible) instances of Redis 4.0 or later are supported.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeAccounts)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeAccounts)

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

kvstore:DescribeAccounts

get

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

No

The name of the account that you want to query.

demoaccount

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

6C9E114C-217C-4118-83C0-B4070222\*\*\*\*

Accounts

array<object>

Details about returned accounts of the instance.

Account

object

Details about the account.

AccountDescription

string

The description of the account.

testdec

InstanceId

string

The ID of the instance.

r-bp10noxlhcoim2\*\*\*\*

AccountType

string

The type of the account. Valid values:

-   **Normal**: standard account
-   **Super**: super account

Normal

AccountStatus

string

The state of the account. Valid values:

-   **Unavailable**: The account is unavailable.
-   **Available**: The account is available.

Available

AccountName

string

The name of the account.

demoaccount

DatabasePrivileges

array<object>

Details about account permissions.

DatabasePrivilege

object

The permission of the account.

AccountPrivilege

string

The permission of the account. Default value: RoleReadWrite. Valid values:

-   **RoleReadOnly**: The account has the read-only permissions.
-   **RoleReadWrite**: The account has the read and write permissions.

RoleReadWrite

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "6C9E114C-217C-4118-83C0-B4070222****",
  "Accounts": {
    "Account": [
      {
        "AccountDescription": "testdec",
        "InstanceId": "r-bp10noxlhcoim2****",
        "AccountType": "Normal",
        "AccountStatus": "Available",
        "AccountName": "demoaccount",
        "DatabasePrivileges": {
          "DatabasePrivilege": [
            {
              "AccountPrivilege": "RoleReadWrite"
            }
          ]
        }
      }
    ]
  }
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

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeAccounts?updateTime=2025-03-25#workbench-doc-change-demo)
