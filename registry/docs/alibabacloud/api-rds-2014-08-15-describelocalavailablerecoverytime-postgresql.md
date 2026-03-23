Queries the time range to which an RDS instance can be restored.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeLocalAvailableRecoveryTime)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeLocalAvailableRecoveryTime)

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

rds:DescribeLocalAvailableRecoveryTime

get

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

The instance ID.

rm-uf6wjk5xxxxxxx

Region

string

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

ResourceGroupId

string

No

The resource group ID.

rg-acfmy\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RecoveryEndTime

string

The end of the time range to which the instance can be restored.

2020-03-20T08:41:29Z

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxxx

RequestId

string

The request ID.

14E986AC-0F27-4FFB-8EED-9A8A3A2A0309

RecoveryBeginTime

string

The start of the time range to which the instance can be restored.

2020-03-16T07:59:18Z

## Examples

Sample success responses

`JSON`format

```
{
  "RecoveryEndTime": "2020-03-20T08:41:29Z",
  "DBInstanceId": "rm-uf6wjk5xxxxxxx",
  "RequestId": "14E986AC-0F27-4FFB-8EED-9A8A3A2A0309",
  "RecoveryBeginTime": "2020-03-16T07:59:18Z"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ParameterLeastAssociate

Must input at least one optional parameter

You must enter at least one selectable parameter.

400

InvalidParameters.Format

Specified parameter is not valid

The operation failed. The values of some parameters are invalid.

400

ParameterAbsence

Necessary parameter is absence.

You must pass in the required parameter.

400

MissingUserID

The request is missing a user\_id parameter.

The user ID cannot be found.

400

MissingUID

The request is missing a uid parameter.

The operation failed. The UID in the request is left unspecified.

400

LogBackupNotEnabled

Specified instance does not enabled logbackup

Log backup is not enabled for the specified instance.

403

IncorrectDBInstanceCharacterType

Current DB Instance character\_type does not support this operation.

This operation is not supported for the character type of the current instance.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

IncorrectDBInstanceEngine

Current DB Instance engine does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

404

InvalidDBInstance.NotFound

Specified instance does not exist or not support.

The RDS instance cannot be found, is deleted, or does not support the operation.

404

InvalidUser.NotFound

Specified user does not exist.

The specified user is not found. Please check again.

404

InvalidBinlog.NotFound

The available binlog does not exist in recovery time.

The binary log file at the specified point in time is invalid.

404

InvalidBackup.NotFound

The available backup does not exist in recovery time.

No available data backup file can be used to restore data.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeLocalAvailableRecoveryTime?updateTime=2024-11-20#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeLocalAvailableRecoveryTime?updateTime=2022-09-01#workbench-doc-change-demo)
