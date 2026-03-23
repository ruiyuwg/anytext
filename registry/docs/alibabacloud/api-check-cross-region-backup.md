Queries whether an instance can be restored by using a cross-region backup set.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server

**Note** If your ApsaraDB RDS for PostgreSQL instance uses the new architecture and is created after October 10, 2022, this feature is not supported for the RDS instance. For more information, see [\[Notice\] SLR authorization is required to create an ApsaraDB RDS for PostgreSQL instance from October 10, 2022](/help/en/rds/apsaradb-rds-for-postgresql/slr-authorization-is-required-to-create-an-apsaradb-rds-for-postgresql-instance-from-october-10-2022).

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Use the cross-region backup feature of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance) and [Restore the data of an ApsaraDB RDS for MySQL instance across regions](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-across-regions)
-   [Use the cross-region backup feature of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance) and [Restore the data of an ApsaraDB RDS for PostgreSQL across regions](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions)
-   [Use the cross-region backup feature of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance) and [Restore the data of an ApsaraDB RDS for SQL Server across regions](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance-across-regions)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CheckCreateDdrDBInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CheckCreateDdrDBInstance)

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

rds:CheckCreateDdrDBInstance

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the destination instance. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

Engine

string

Yes

The database engine of the destination instance. Valid values:

-   **MySQL**
-   **SQLServer**
-   **PostgreSQL**

MySQL

EngineVersion

string

Yes

The major engine version of the destination instance. The value of this parameter varies based on the value of **Engine**.

-   Valid values when Engine is set to MySQL: **5.5, 5.6, 5.7, and 8.0**
-   Valid values when Engine is set to SQLServer: **2008r2, 08r2\_ent\_ha, 2012, 2012\_ent\_ha, 2012\_std\_ha, 2012\_web, 2014\_std\_ha, 2016\_ent\_ha, 2016\_std\_ha, 2016\_web, 2017\_std\_ha, 2017\_ent, 2019\_std\_ha, and 2019\_ent**
-   PostgreSQL: **10.0, 11.0, 12.0, 13.0, 14.0, and 15.0**

5.6

DBInstanceClass

string

Yes

The instance type of the destination instance. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

rds.mysql.s1.small

DBInstanceStorage

integer

Yes

The storage capacity of the destination instance. Valid values: **5 to 2000**. Unit: GB. You can increase the storage capacity in increments of 5 GB. For more information, see [Primary instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

20

RestoreType

string

Yes

The method that is used to restore data. Valid values:

-   **0**: restores data from a backup set. If you set this parameter to 0, you must also specify the **BackupSetId** parameter.
-   **1**: restores data to a point in time. If you set this parameter to 1, you must also specify the **RestoreTime**, **SourceRegion**, and **SourceDBInstanceName** parameters.

Default value: **0**.

0

BackupSetId

string

No

The ID of the backup set that is used for the restoration. You can call the DescribeCrossRegionBackups operation to query the backup set ID.

**Note** This parameter must be specified when the **RestoreType** parameter is set to **0**.

14358

RestoreTime

string

No

The point in time to which you want to restore data. The point in time that you specify must be earlier than the current time. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** If you set **RestoreType** to **1**, you must also specify this parameter.

2019-05-30T03:29:10Z

SourceRegion

string

No

The region ID of the source instance if you want to restore data to a point in time.

**Note** If you set **RestoreType** to **1**, you must also specify this parameter.

cn-hangzhou

SourceDBInstanceName

string

No

The ID of the source instance if you want to restore data to a point in time.

**Note** This parameter must be specified when the **RestoreType** parameter is set to **1**.

rm-uf6wjk5xxxxxxx

ResourceGroupId

string

No

The resource group ID. You can call the DescribeDBInstanceAttribute to query the resource group ID.

rg-acfmy\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

IsValid

string

Indicates whether the data of the source instance can be restored across regions. Valid values:

-   **true**
-   **false**

true

RequestId

string

The request ID.

1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC

## Examples

Sample success responses

`JSON`format

```
{
  "IsValid": true,
  "RequestId": "1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorrectDBInstanceType

Current DB instance engine and type does not support operations.

The operation failed. The operation is not supported for the database engine of the RDS instance.

400

InvalidRestoreType.Format

Specified restore type is not valid.

The restoration type is invalid. Specify a valid restoration type.

400

NoBackupSetRegion

BackupSetRegion is absence.

The backup region does not exist.

400

IncorrectBackupSetType

Backup set type should be ddr.

The type of backup set must be DDR.

400

NoSourceInstanceName

No SourceDBInstanceName.

The source instance name is not found.

400

NoAvailableDisasterRestoreBakset

No available disaster restore bakset.

No available restore set is found.

400

IncorrectBackupSetMethod

Current backup set method does not support operations.

The operation failed. The data backup file does not support the restoration of individual databases and tables.

400

InvalidBackupType.Format

Specified backup type is not valid.

The operation failed. The backup type is invalid.

400

IncorrectEngineVersion

Current engine version does not support operations.

The operation failed. The operation is not supported for the version of the database engine that is run on the RDS instance.

400

IncorrectBaksetVersion

Current bakset version does not support operations.

The operation failed. The operation is not supported for the version of the data backup file.

400

CrossRegionUnsupportTDE

Cross-region disaster restore not support TDE bakset.

\-

400

DisasterRestoreRegionNotMatched

Disaster restore should be operated in the ddr region or source region.

\-

400

InvalidMinorVersion.NotFound

Specified minor version does not exists.

The operation failed. The database engine version cannot be found.

400

InvalidDBInstanceId.MalFormed

The specified parameter DBInstanceId is not valid.

The instance ID is invalid. Check the instance ID.

400

InvalidEngine.Malformed

Specified engine is not valid.

The database engine is invalid. Specify a valid database engine.

400

InvalidEngineVersion.Malformed

Specified engine version is not valid.

The database engine version is invalid. Check the database engine version and try again.

400

MissingUserID

The request is missing a user\_id parameter.

The user ID cannot be found.

400

MissingUID

The request is missing a uid parameter.

The operation failed. The UID in the request is left unspecified.

400

UserPermissionFailure

The request processing has failed due to user permission.

\-

400

InvalidServiceType.Format

Specified service type is not valid.

The service type is invalid. Set the service type to 0 or 1. The value 0 indicates an Alibaba Cloud service, and the value 1 indicates a JST service.

400

InvalidStorage.Format

Specified Storage is not valid.

The value of the Storage parameter is invalid. Specify a valid value.

403

IncorrectDBType

The current DB type does not support this operation.

The operation failed. The operation is not supported by the database engine of the RDS instance. Specify a different database engine.

403

IncorrectDBInstance

The current DB instance does not support this operation.

The operation failed. The operation is not supported for the RDS instance.

403

ResourceConfigError

The request processing has failed due to resource config error.

\-

404

RestoreType.NotFound

RestoreType is not found.

RestoreType is not found.

404

InvalidBackupSetID.NotFound

Specified backup set ID does not exist.

The backup set does not exist. Specify an available backup set.

404

InvalidDBInstance.NotFound

The specified instance does not exist or is not supported.

The RDS instance cannot be found. Check the ID or name of the RDS instance.

404

InvalidDBInstanceClass.NotFound

Specified DB instance class is not found.

The configuration or the instance type cannot be found or has been discontinued. Specify a different configuration or a different instance type.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-25

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CheckCreateDdrDBInstance?updateTime=2023-07-25#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CheckCreateDdrDBInstance?updateTime=2022-09-01#workbench-doc-change-demo)
