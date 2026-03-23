Performs a precheck before the upgrade of the major engine version of an ApsaraDB RDS for PostgreSQL instance.

## Operation description

### [](#supported-database-engine)Supported database engine

PostgreSQL

### [](#references)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

[Upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/UpgradeDBInstanceMajorVersionPrecheck)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/UpgradeDBInstanceMajorVersionPrecheck)

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

rds:UpgradeDBInstanceMajorVersionPrecheck

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

The ID of the instance. You can call the [DescribeDBInstances](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstances) operation to query the ID of the instance.

pgm-bp1c808s731l\*\*\*\*

TargetMajorVersion

string

Yes

The new major engine version of the instance. The new major engine version must be later than the original major engine version.

12.0

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

DBInstanceName

string

The instance name.

pgm-bp1c808s731l\*\*\*\*

TargetMajorVersion

string

The new major engine version of the instance.

12.0

RequestId

string

The request ID.

99C1FEEE-FB44-5342-8EBA-DC1E1A1557A4

TaskId

string

The task ID.

41698\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceName": "pgm-bp1c808s731l****",
  "TargetMajorVersion": 12,
  "RequestId": "99C1FEEE-FB44-5342-8EBA-DC1E1A1557A4",
  "TaskId": "41698****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDBInstanceName.NotFound

The specified DB instance name does not exist.

The instance name does not exist.

400

InvalidDBInstanceEngineType.Format

the DB instance engine type does not support this operation.

This operation is not supported for the database engine of the instance.

403

ParamNotFound

The parameter is not found for the interface.

The parameter is not found for the interface.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-17

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersionPrecheck?updateTime=2025-04-17#workbench-doc-change-demo)

2024-10-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersionPrecheck?updateTime=2024-10-10#workbench-doc-change-demo)

2024-07-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersionPrecheck?updateTime=2024-07-05#workbench-doc-change-demo)

2024-06-07

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersionPrecheck?updateTime=2024-06-07#workbench-doc-change-demo)

2021-10-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/UpgradeDBInstanceMajorVersionPrecheck?updateTime=2021-10-25#workbench-doc-change-demo)
