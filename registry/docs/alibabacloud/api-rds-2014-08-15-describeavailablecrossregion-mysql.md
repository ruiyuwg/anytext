Queries the available destination regions to which the cross-region backup files from a specific source region can be replicated.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server

### [](#references)[](#)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Use the cross-region backup feature of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)
-   [Use the cross-region backup feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeAvailableCrossRegion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeAvailableCrossRegion)

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

rds:DescribeAvailableCrossRegion

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

RegionId

string

Yes

The region ID. You can call the DescribeRegions operation to query the most recent zone list.

cn-hangzhou

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

39265F46-EC77-4036-8AC4-F035F32F6BE2

Regions

array

An array that consists of destination regions for cross-region backups.

Region

string

The list of destination regions that support cross-region backup.

"cn-qingdao","cn-shanghai", "cn-shenzhen"

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "39265F46-EC77-4036-8AC4-F035F32F6BE2",
  "Regions": {
    "Region": [
      "\"cn-qingdao\",\"cn-shanghai\", \"cn-shenzhen\""
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

InvalidRegion.Format

Specified Region is not valid.

The region ID is invalid. Check the region ID.

403

CrossBackupNotSupport

Specified region not support cross region backup.

Cross-zone backup is not supported in the specified region.

404

InvalidPage.notFound

Page not found.

The specified parameters are not found. Check your parameters.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-22

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAvailableCrossRegion?updateTime=2024-11-22#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAvailableCrossRegion?updateTime=2022-09-01#workbench-doc-change-demo)
