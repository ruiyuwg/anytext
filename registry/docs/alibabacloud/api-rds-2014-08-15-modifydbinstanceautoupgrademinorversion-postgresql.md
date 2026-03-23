Changes the method that is used to update the minor engine version of an ApsaraDB RDS for MySQL instance or an ApsaraDB RDS for PostgreSQL instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL

### [](#references)[](#)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Modify automatic update settings for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance)
-   [Modify automatic update settings for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceAutoUpgradeMinorVersion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceAutoUpgradeMinorVersion)

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

rds:ModifyDBInstanceAutoUpgradeMinorVersion

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

ETnLKlblzczshOTUbOCzxxxxxxxxxx

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxx

AutoUpgradeMinorVersion

string

Yes

The method that is used to update the minor engine version of the instance. Valid values:

-   **Auto:** automatic update.
-   **Manual**: manual update. ApsaraDB RDS automatically updates the current minor engine version of the instance only when the current minor engine version is phased out.

Auto

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

A31818D5-0550-4A81-8D13-B45948D7193F

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A31818D5-0550-4A81-8D13-B45948D7193F"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-06-23

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceAutoUpgradeMinorVersion?updateTime=2022-06-23#workbench-doc-change-demo)
