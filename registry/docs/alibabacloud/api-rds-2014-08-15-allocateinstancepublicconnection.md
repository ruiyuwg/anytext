Apply for a public endpoint for an ApsaraDB RDS instance

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)References

**Note** Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Apply for a public endpoint for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance)
-   [Apply for a public endpoint for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance)
-   [Apply for a public endpoint for an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-sql-server-instance)
-   [Apply for a public endpoint for an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mariadb-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/AllocateInstancePublicConnection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/AllocateInstancePublicConnection)

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

rds:AllocateInstancePublicConnection

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

rm-uf6wjk5\*\*\*\*\*

ConnectionStringPrefix

string

Yes

The prefix of the public endpoint. A valid public endpoint is in the following format: `Prefix.Database engine.rds.aliyuncs.com`. Example: `test1234.mysql.rds.aliyuncs.com`.

**Note** The value can be 5 to 40 characters in length and can contain letters, digits, and hyphens (-). The value cannot contain any of the following characters: ~ ! # % ^ & \* = + | {} ; : ' " , <> / ?

test1234

Port

string

Yes

The public port of the instance. Valid values: **1000 to 5999**.

3306

BabelfishPort

string

No

The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.

**Note** This parameter applies only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see [Introduction to Babelfish](/help/en/doc-detail/428613.html).

1433

GeneralGroupName

string

No

The name of the dedicated cluster to which the instance belongs. This parameter is available only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.

rgc-bp1tkv8\*\*\*\*\*

PGBouncerPort

string

No

The PgBouncer port.

**Note** This parameter is available only for instances that run PostgreSQL.

6432

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

DbInstanceName

string

The ID of the instance.

rm-bp1\*\*\*\*\*

RequestId

string

The ID of the request.

65BDA532-28AF-4122-AA39-B382721EEE64

ConnectionString

string

The endpoint that is used to connect to the database instance.

test\*\*\*\*\*.mysql.rds.aliyuncs.com

## Examples

Sample success responses

`JSON`format

```
{
  "DbInstanceName": "rm-bp1*****",
  "RequestId": "65BDA532-28AF-4122-AA39-B382721EEE64",
  "ConnectionString": "test*****.mysql.rds.aliyuncs.com"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OtherEndpoint.Exist

Other endpoint exist.

The prefix of the connection address already exists

400

IncorrectDBInstanceState

The current instance state does not support this operation.

The operation is not supported. The RDS instance is not in a ready state.

400

ConnectionStringContainIllegalCharacterFault

The connection string contain Illegal character.

The endpoint contains invalid characters. Modify the endpoint and try again.

400

InvalidInstanceNetworkType

The specified InstanceNetworkType is invalid.

The specified InstanceNetworkType is invalid.

400

InvalidConnectionString.Format

Specified connection string is not valid.

The endpoint of the RDS instance is invalid. The prefix of the endpoint must be 5 to 40 characters in length.

400

InvalidPort.Malformed

Specified port is not valid.

The port number is invalid.

400

InvalidVpcIdRegion.NotSupported

The specified region does not allow you to create a VPC instance.

\-

400

InvalidInstanceNetworkType.ValueNotSupported

The specified parameter "InstanceNetworkType" is not valid.

The network type failed the verification check. The supported network types are VPC and classic network.

400

InvalidBizType.Format

Specified biz type is not valid.

\-

400

EndpointNum.Error

The number of endpoint is too many.

\-

400

EndpointNum.Error

Endpoint number error.

\-

403

Invalid.DbInstanceNetType

The specified parameter DbInstanceNetType is not valid.

The network type of the RDS instance is invalid. Set the network type to Internet or Intranet.

403

OperationDenied.SwitchToVPC

Specified instance cannot be switched to VPC.

The network type of the RDS instance cannot be changed to VPC.

404

InvalidConnectionString.Duplicate

Specified connection string already exists in the Aliyun RDS.

The endpoint is duplicate. Specify a different endpoint.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/AllocateInstancePublicConnection?updateTime=2025-03-25#workbench-doc-change-demo)

2024-04-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/AllocateInstancePublicConnection?updateTime=2024-04-18#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/AllocateInstancePublicConnection?updateTime=2023-09-08#workbench-doc-change-demo)

2023-06-27

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/AllocateInstancePublicConnection?updateTime=2023-06-27#workbench-doc-change-demo)

2023-06-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/AllocateInstancePublicConnection?updateTime=2023-06-12#workbench-doc-change-demo)

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/AllocateInstancePublicConnection?updateTime=2022-10-28#workbench-doc-change-demo)

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/AllocateInstancePublicConnection?updateTime=2022-06-23#workbench-doc-change-demo)

2022-02-23

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/AllocateInstancePublicConnection?updateTime=2022-02-23#workbench-doc-change-demo)
