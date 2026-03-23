Grants an account the permissions on a database of an instance.

## Operation description

Each account can be granted permissions on one or more databases. Before you call this operation, make sure that the instance is in the Running state.

**Note** This operation is not supported for instances that run SQL Server 2017 on RDS Cluster Edition or run PostgreSQL with local disks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/GrantAccountPrivilege)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/GrantAccountPrivilege)

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

rds:GrantAccountPrivilege

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag

none

## Request parameters

Parameter

Type

Required

Description

Example

DBInstanceId

string

Yes

The ID of the instance.

rm-uf6wjk5xxxxxxxxxx

AccountName

string

Yes

The username of the account.

test1

DBName

string

Yes

The name of the database on which you want to grant permissions. Separate multiple database names with commas (,).

testDB1

AccountPrivilege

string

Yes

The permissions that you want to grant to the account. The number of permissions must be the same as the number of databases that you specify for the DBName parameter. You can specify this parameter based on your business requirements. Valid values:

-   **ReadWrite**: read and write permissions
-   **ReadOnly**: read-only permissions
-   **DDLOnly**: DDL-only permissions
-   **DMLOnly**: DML-only permissions
-   **DBOwner**: database owner permissions

**Note**

-   If the instance runs MySQL or MariaDB, you can set this parameter to **ReadWrite**, **ReadOnly**, **DDLOnly**, or **DMLOnly**.
    
-   If the instance runs SQL Server, you can set this parameter to **ReadWrite**, **ReadOnly**, or **DBOwner**.
    
-   If the instance runs PostgreSQL and uses cloud disks, you can set this parameter to **DBOwner**.
    

ReadWrite

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

81BC9559-7B22-4B7F-B705-5F56DEECDEA7

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "81BC9559-7B22-4B7F-B705-5F56DEECDEA7"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Account.UpdateError

Update Account failed, please check your input value

Failed to update the account. Check the specified parameters or the parameter policy configuration.

400

Database.ConnectError

Database connect error. please check instance status and database processlist

A database connection error occurred. Check the instance state and the database connection pool.

400

DbRestoring

Database is in restoring state.

The database is in the restoring state.

400

InvalidAccountPrivilege.Malformed

Specified account privilege is not valid.

Your account does not have the required permissions.

400

IncorrectAccountStatus

Current account status does not support this operation.

\-

400

IncorrectAccount

Current DB instance account does not support this operation.

\-

400

InvalidDBNameOrAccountPrivilege

Account permissions and database names must correspond.

The account can have only one permission on the database.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

IncorrectAccountType

Current account type does not support this operation.

This operation is not supported for the current account type. Check the account type.

403

IncorrectAccountPrivilegeType

the current account privilege type does not support this operation.

The permission type of the current account does not support this operation.

403

OperationDenied.AccountMode

The operation is not permitted due to account mode of instance.

The operation failed. The account mode of the current instance does not support this operation.

403

IncorrectDBInstanceCharacterType

Current DB Instance character\_type does not support this operation.

This operation is not supported for the character type of the current instance.

404

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

404

InvalidAccountName.NotFound

Specified account name does not exist.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2025-05-07#workbench-doc-change-demo)

2025-04-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2025-04-02#workbench-doc-change-demo)

2025-03-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2025-03-31#workbench-doc-change-demo)

2024-05-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2024-05-28#workbench-doc-change-demo)

2024-04-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2024-04-17#workbench-doc-change-demo)

2023-12-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2023-12-14#workbench-doc-change-demo)

2023-08-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2023-08-08#workbench-doc-change-demo)

2023-05-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2023-05-19#workbench-doc-change-demo)

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2022-10-28#workbench-doc-change-demo)

2022-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2022-09-05#workbench-doc-change-demo)

2022-06-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GrantAccountPrivilege?updateTime=2022-06-24#workbench-doc-change-demo)
