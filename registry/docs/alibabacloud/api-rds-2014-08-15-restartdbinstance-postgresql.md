Restarts an instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server
-   RDS MariaDB

### [](#references)References

**Note** : Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Restart an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restart-an-apsaradb-rds-for-mysql-instance)
-   [Restart an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/restart-an-apsaradb-rds-for-postgresql-instance)
-   [Restart an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/restart-an-apsaradb-rds-for-sql-server-instance)
-   [Restart an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/restart-an-apsaradb-rds-for-mysql-instance-1)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/RestartDBInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/RestartDBInstance)

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

rds:RestartDBInstance

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCzxxxxxx

DBInstanceId

string

Yes

The instance ID. You can call the [DescribeDBInstances](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstances) operation to query the ID of the instance.

rm-uf6wjk5xxxxxx

NodeId

string

No

The node ID, which can be used to restart a specified node. You can call the [DescribeDBInstanceHAConfig](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstancehaconfig) operation to obtain the node ID.

**Note** : The secondary instance restart feature is supported for RDS instances that run SQL Server EE on RDS Cluster Edition. For more information, see [Restart a secondary database](/help/en/rds/apsaradb-rds-for-sql-server/restart-standby-library).

2614\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

65BDA532-28AF-4122-AA39-B382721EEE64

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "65BDA532-28AF-4122-AA39-B382721EEE64"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

GeneralIns.Creating

The general instance is creating.

An RDS instance is in production. Please wait.

400

GeneralIns.Maintaining

The general instance is maintaining.

An RDS instance is being migrated or maintained. Please wait.

400

GeneralIns.Switching

The general instance is Switching.

A switchover for high availability is in progress. Please wait.

400

InvalidDBInstanceStatus.NotSupport

The Specified instance status is not supported to restart instance.

\-

400

InvalidEffectiveTime.SpecialTimeIsNull

SpecialTime is not valid.

\-

400

IncorrectDBInstanceLockMode.ValueNotSupported

The Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

400

InvalidDBInstanceName.Format

Specified DB instance name is not valid.

The instance does not exist. Check the instance information.

400

MGRMasterNodeRestart.Unsupported

Specific primary node is not supported to restart in MGR instance.

The MGR instance cannot specify a primary restart.

403

IncorrectRestartMethod

The specified RestartMethod params is not valid.

\-

403

IncorrectEffectiveTime

The specified EffectiveTime params is not valid.

The value of the EffectiveTime parameter is invalid.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

InvalidKmsKey

Kms key is disabled.

\-

403

IncorrectDBInstanceCharacterType

Current DB Instance character\_type does not support this operation.

This operation is not supported for the character type of the current instance.

403

InvalidRestartPolicy.Format

Specified Restart Policy is not valid.

\-

404

InvalidDBInstanceName.NotFound

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

404

InvalidDBInstance.NotFound

The specified instance does not exist or is not supported.

The RDS instance cannot be found. Check the ID or name of the RDS instance.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/RestartDBInstance?updateTime=2025-03-31#workbench-doc-change-demo)

2023-10-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/RestartDBInstance?updateTime=2023-10-11#workbench-doc-change-demo)

2023-07-13

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/RestartDBInstance?updateTime=2023-07-13#workbench-doc-change-demo)

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/RestartDBInstance?updateTime=2022-10-28#workbench-doc-change-demo)

2022-07-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/RestartDBInstance?updateTime=2022-07-08#workbench-doc-change-demo)
