Queries the databases and tables whose data is included in a cross-region backup file of an instance.

## Operation description

ApsaraDB RDS for MySQL instances support cross-region backup and restoration. For more information, see [Back up an ApsaraDB RDS for MySQL instance across regions](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance) and [Restore the data of an ApsaraDB RDS for MySQL instance across regions](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-across-regions).

Before you call this operation, make sure that the instance runs one of the following database engines:

-   MySQL. For more information, see [Back up an ApsaraDB RDS for MySQL instance across regions](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance).
-   SQL Server. For more information, see [Back up an ApsaraDB RDS for SQL Server instance across regions](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance).
-   PostgreSQL. For more information, see [Enable cross-region backups for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeCrossBackupMetaList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeCrossBackupMetaList)

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

rds:DescribeCrossBackupMetaList

get

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

BackupSetId

string

Yes

The ID of the cross-region backup file that you want to use. You can call the [DescribeCrossRegionBackups](/help/en/rds/api-query-cross-region-data-backup-files) operation to query the ID of the cross-region backup file.

123456

GetDbName

string

No

The name of the database that you want to query. The system implements exact match based on the value of this parameter and returns the name of the matched database and the names of the tables in the matched database.

testdb1

Pattern

string

No

The name of the database that you want to query. The system implements fuzzy match based on the value of this parameter and returns only the name of the matched database.

**Note** You can implement fuzzy match and then exact match. For example, you can set the Pattern parameter to test to query the testdb1 and testdb2 databases. Then, you can specify the **GetDbName** parameter to query only the matched database and the tables in the matched database.

test

PageSize

string

No

The number of entries to return per page. Default value: **1**.

**Note** This parameter only takes effect when you specify the **PageIndex** parameter.

30

PageIndex

string

No

The number of the page to return. Valid values: any non-zero positive integer.

**Note** This parameter only takes effect when you specify the **PageSize** parameter.

1

Region

string

No

The region ID of the instance.

cn-hangzhou

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmy\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

DBInstanceName

string

The instance to which the cross-region backup file belongs.

rm-uf6wjk5xxxxxxx

TotalPageCount

integer

The total number of pages returned.

1

RequestId

string

The ID of the request.

60F9A12A-16B8-4728-B099-4CA38D32C31C

PageRecordCount

integer

The number of entries returned per page.

1

TotalRecordCount

integer

The total number of returned entries.

1

PageNumber

integer

The page number of the returned page.

1

Items

array<object>

An array that consists of the information about the databases and tables whose data is included in the cross-region backup file.

Meta

object

Tables

string

An array that consists of the names of the tables that the database contains. If the database contains more than one table, the names of these tables are separated by commas (,).

test1,test2

Database

string

The name of the database.

testdb1

Size

string

The size of the table. Unit: KB. If the database contains more than one table, the names of these tables are separated by commas (,).

1000

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceName": "rm-uf6wjk5xxxxxxx",
  "TotalPageCount": 1,
  "RequestId": "60F9A12A-16B8-4728-B099-4CA38D32C31C",
  "PageRecordCount": 1,
  "TotalRecordCount": 1,
  "PageNumber": 1,
  "Items": {
    "Meta": [
      {
        "Tables": "test1,test2",
        "Database": "testdb1",
        "Size": 1000
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NoAvailableDisasterRestoreBakset

No available disaster restore bakset

\-

400

InvalidPageSize

The page size is invalid

The value of the pageSize parameter is invalid. The value of this parameter must be a number.

400

InvalidPageIndex

The page index is invalid

\-

400

InvalidRestoreTime.Format

Specified restore time is not valid.

The operation failed. The point in time is invalid. Specify a valid point in time.

403

InvalidMeta.Empty

Meta information is empty.

The meta information is empty. Check whether a full backup has not been performed after the database table is restored.

403

InvalidMeta.TooLarge

Meta information is too large.

The metadata information is too large. Check whether the number of instance tables exceeds 50000.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

IncorrectEngineVersion

Current engine version does not support operations.

The operation failed. The operation is not supported for the version of the database engine that is run on the RDS instance.

403

InvalidBackupLogStatus

Current backup log enable status does not support this operation.

The operation failed. Log backups are not enabled, and therefore data cannot be restored to a specified point in time.

404

InvalidBackupSetID.NotFound

Specified backup set ID does not exist.

The backup set does not exist. Specify an available backup set.

404

InvalidParameters.Format

Specified parameter({}) is not valid.

\-

404

Request.NotFound

The requested resource is not available.

The requested resources are unavailable.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-08-04

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeCrossBackupMetaList?updateTime=2022-08-04#workbench-doc-change-demo)
