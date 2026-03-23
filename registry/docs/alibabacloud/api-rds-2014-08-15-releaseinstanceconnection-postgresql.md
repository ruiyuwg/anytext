Releases the public endpoint of an instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)References

-   [Release the public endpoint of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance)
-   [Release the public endpoint of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance)
-   [Release the public endpoint of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-sql-server-instance)
-   [Release the public endpoint of an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mariadb-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ReleaseInstanceConnection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ReleaseInstanceConnection)

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

rds:ReleaseInstanceConnection

delete

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

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxx

CurrentConnectionString

string

Yes

The public endpoint of the instance.

rm-uf6wjk5xxxx.mysql.rds.aliyuncs.com

InstanceNetworkType

string

Yes

The network type of the instance. Valid values:

-   **0**: virtual private cloud (VPC)
-   **1**: classic network

0

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

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

404

Endpoint.NotFound

Specified endpoint is not existed.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ReleaseInstanceConnection?updateTime=2025-03-25#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ReleaseInstanceConnection?updateTime=2023-09-08#workbench-doc-change-demo)

2022-06-23

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ReleaseInstanceConnection?updateTime=2022-06-23#workbench-doc-change-demo)
