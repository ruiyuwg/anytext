Switches workloads between primary and secondary ApsaraDB RDS instances.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Switch workloads between primary and secondary ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances)
-   [Switch workloads between primary and secondary ApsaraDB RDS for PostgreSQL instances](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances)
-   [Switch workloads between primary and secondary ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-sql-server-instances)
-   [Switch workloads between primary and secondary ApsaraDB RDS for MariaDB instances](/help/en/rds/apsaradb-rds-for-mariadb/switch-over-workloads-between-primary-and-secondary-apsaradb-rds-for-mariadb-instances)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/SwitchDBInstanceHA)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/SwitchDBInstanceHA)

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

rds:SwitchDBInstanceHA

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

rm-uf6wjk5xxxxxxxxxx

NodeId

string

Yes

The secondary instance ID. You can call the DescribeDBInstanceHAConfig operation to query the secondary instance ID.

349054

Force

string

No

Specifies whether to enable forcible switching. Valid values:

-   **Yes**
-   **No**

Default value: **No**.

No

EffectiveTime

string

No

The time when the switching takes effect. Valid values:

-   **Immediate**: The switching immediately takes effect.
-   **MaintainTime**: The switching takes effect during the maintenance time.

Default value: **Immediate**.

Immediate

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

1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC"
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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/SwitchDBInstanceHA?updateTime=2022-06-23#workbench-doc-change-demo)
