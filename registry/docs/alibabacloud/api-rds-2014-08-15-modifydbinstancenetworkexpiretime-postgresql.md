Changes the expiration time of the classic network endpoint of an instance in hybrid access mode.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   SQL Server

### [](#references)[](#)References

-   [Configure the hybrid access solution for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-the-hybrid-access-solution-for-an-apsaradb-rds-for-mysql-instance)
-   [Configure the hybrid access solution for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/configure-the-hybrid-access-solution-for-an-apsaradb-rds-for-sql-server-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceNetworkExpireTime)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceNetworkExpireTime)

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

rds:ModifyDBInstanceNetworkExpireTime

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

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxx

ConnectionString

string

Yes

The classic network endpoint whose expiration time you want to extend. Two types of classic network endpoints are supported:

-   The internal endpoint of the classic network.
-   The read/write splitting endpoint of the classic network.

rm-uf6wjk5xxxxx.mysql.rds.aliyuncs.com

ClassicExpiredDays

integer

Yes

The retention days of the classic network endpoint. Valid values: **1 to 120**. Unit: days.

7

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

4C467B38-3910-447D-87BC-AC049166F216

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4C467B38-3910-447D-87BC-AC049166F216"
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

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceNetworkExpireTime?updateTime=2022-06-23#workbench-doc-change-demo)
