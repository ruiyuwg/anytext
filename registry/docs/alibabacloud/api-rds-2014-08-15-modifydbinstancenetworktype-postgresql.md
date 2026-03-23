Changes the network type of an ApsaraDB RDS instance from classic network to VPC

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server

### [](#references)[](#)References

**Note** : Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Change the network type of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/change-the-network-type-of-an-apsaradb-rds-for-mysql-instance)
-   [Change the network type of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/change-the-network-type-of-an-apsaradb-rds-for-postgresql-instance)
-   [Change the network type of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/change-the-network-type-of-an-apsaradb-rds-for-sql-server-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceNetworkType)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDBInstanceNetworkType)

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

rds:ModifyDBInstanceNetworkType

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag
-   rds:InstanceNetworkType

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

RetainClassic

string

No

Specifies whether to retain the classic network endpoint. Valid values:

-   **True**: retains the classic network endpoint.
-   **False** (default): does not retain the classic network endpoint.

True

ClassicExpiredDays

string

No

The number of days for which you want to retain the classic network endpoint. Valid values: **1 to 120**. Default value: **7**.

**Note** If you set the **RetainClassic** parameter to **True**, you must also specify this parameter.

7

InstanceNetworkType

string

Yes

The network type after the modification. Set the value to **VPC**.

VPC

ReadWriteSplittingClassicExpiredDays

integer

No

The number of days for which you want to retain the read/write splitting endpoint of the classic network type. Valid values: **1 to 120**. Default value: **7**.

**Note** This parameter takes effect only when a read/write splitting endpoint of the classic network type exists and the **RetainClassic** parameter is set to **True**.

7

VPCId

string

No

The VPC ID.

vpc-uf6f7l4fg90xxxxxx

VSwitchId

string

No

The ID of the vSwitch. This parameter is required if the **VPCId** parameter is specified.

vsw-uf6adz52c2pxxxxx

PrivateIpAddress

string

No

The internal IP address of the instance. The internal IP address must be within the CIDR block supported by the specified vSwitch. The system automatically assigns a private IP address to an instance based on the values of **VPCId** and **VSwitchId**.

172.10.40.25

ReadWriteSplittingPrivateIpAddress

string

No

The internal IP address that corresponds to the read/write splitting endpoint of the instance. The internal IP address must be within the CIDR block supported by the specified vSwitch. The system automatically assigns a private IP address to an instance based on the values of **VPCId** and **VSwitchId**.

**Note** This parameter is valid when a read/write splitting endpoint of the classic network type exists.

192.168.0.22

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

1AD222E9-E606-4A42-BF6D-8A4442913CEF

TaskId

string

The ID of the task.

1025486523574

ConnectionString

string

The endpoint that is used to connect to the instance.

rm-bp1\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*.mysql.rds.aliyuncs.com

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1AD222E9-E606-4A42-BF6D-8A4442913CEF",
  "TaskId": 1025486523574,
  "ConnectionString": "rm-bp1*****************.mysql.rds.aliyuncs.com"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NetTypeExists

Specified network type already exists.

Failed to change the network type. The new network type is the type of network in which the RDS instance resides.

400

VswitchIpExhausted

Vswitch IP exhausted.

The operation failed. No vSwitch IP addresses are available.

400

OperationDenied.Switch

The specified instance must not be switched to VPC.

The operation failed. The RDS instance cannot be switched to a VPC.

400

OperationDenied.DBInstanceNetType

Operation is denied by the network type of current database instance.

The operation failed. The operation is not supported for the network type of the RDS instance.

400

OperationDenied.DBInstanceStatus

Operation is denied by the current database instance status.

The operation failed. The RDS instance is not in a ready state.

400

OperationNotSupported

This operation is not currently supported.

This operation is not supported.

403

OperationDenied.DBInstanceConnType

The current DB instance connection type does not support this operation.

The operation failed. The operation is not supported for the network connection type of the RDS instance.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDBInstanceNetworkType?updateTime=2022-06-23#workbench-doc-change-demo)
