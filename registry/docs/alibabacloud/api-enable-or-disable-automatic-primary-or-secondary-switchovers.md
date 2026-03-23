Enables or disables the automatic primary/secondary switchover feature for an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)[](#)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Use the automatic primary/secondary switchover feature for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances)
-   [Use the automatic primary/secondary switchover feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances)
-   [Use the automatic primary/secondary switchover feature for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-sql-server-instances)
-   [Use the automatic primary/secondary switchover feature for an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/switch-over-workloads-between-primary-and-secondary-apsaradb-rds-for-mariadb-instances)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyHASwitchConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyHASwitchConfig)

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

rds:ModifyHASwitchConfig

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

HAConfig

string

No

The mode of the automatic primary/secondary switchover feature. Valid values:

-   **Auto**: The automatic primary/secondary switchover feature is enabled. The system automatically switches your workloads over from the instance to its secondary instance in the event of a fault.
-   **Manual**: The automatic primary/secondary switchover feature is disabled. You must manually switch your workloads over from the instance to its secondary instance in the event of a fault.

Default value: **Auto**.

**Note** If you set this parameter to **Manual**, you must specify the **ManualHATime** parameter.

Manual

ManualHATime

string

No

The time to disable the automatic primary/secondary switchover feature. The time can range from the current time to 23:59:59 seven days later. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

**Note** This parameter takes effect only when you set the **HAConfig** parameter to **Manual**.

2019-08-29T15:00:00Z

RegionId

string

Yes

The region ID. You can call the DescribeRegions operation to query the most recent region list.

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

The request ID.

B6AE1448-D846-4831-B1C7-CFF3E99D5470

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "B6AE1448-D846-4831-B1C7-CFF3E99D5470"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

HaConfig.Format

The value of HaConfig must be auto or manual

The value of the HASwitchConfig parameter must be Auto or Manual.

400

HaConfigIsNull

HaConfig is null.

The value of the HASwitchConfig parameter is null.

400

ManualHATime.Format

Invalid format of ManualHATime.

\-

400

ManualHATimeIsNull

ManualHATime can not be null when the value of haConfig is Manual.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyHASwitchConfig?updateTime=2023-09-08#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyHASwitchConfig?updateTime=2022-09-01#workbench-doc-change-demo)
