Deletes the endpoint that is used to connect to the dedicated proxy of an instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL

### [](#references)References

**Note** Before you call this operation, carefully read the following documentation. Make sure that you fully understand the prerequisites and impacts for calling this operation.

-   [Configure the dedicated proxy endpoint of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/manage-the-dedicated-proxy-endpoints-of-an-apsaradb-rds-for-mysql-instance)
-   [Configure the dedicated proxy endpoint for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-database-proxy-endpoints-of-an-apsaradb-rds-for-postgresql-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DeleteDBProxyEndpointAddress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DeleteDBProxyEndpointAddress)

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

rds:DeleteDBProxyEndpointAddress

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

RegionId

string

Yes

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-t4n3a\*\*\*\*

DBProxyEndpointId

string

Yes

The proxy endpoint ID. You can call the DescribeDBProxyEndpoint operation to query the proxy endpoint ID.

ta9um4\*\*\*\*

DBProxyConnectStringNetType

string

Yes

The network type of the proxy endpoint. Valid values:

-   **Public**: Internet
-   **VPC**: virtual private cloud (VPC)
-   **Classic**: classic network

If the instance runs MySQL, the default value of this parameter is **Classic**.

**Note** If the instance runs PostgreSQL, you must set this parameter to **Public** or **VPC**.

Public

DBProxyEngineType

string

No

A reserved parameter. You do not need to specify this parameter.

normal

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

343356C6-64B2-4245-ADEB-C9BD165EDD11

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "343356C6-64B2-4245-ADEB-C9BD165EDD11"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidVpcInstanceId

Specified vpc instance id is not valid.

The specified VPC ID is invalid.

400

IncorrectDBInstanceNetType

Current DB instance net type does not support this operation.

The operation failed. The operation is not supported for the network type of the RDS instance.

400

AtLeastOneNetTypeExists

The current database instance network type does not support the operation

The operation failed. The operation is not supported for the network type of the RDS instance.

400

InvalidEndPoint.Format

The specified EndPoint is not valid.

\-

400

InvalidDBInstanceName

Specified parameter DBInstanceName is not valid.

The value of the DBInstanceName parameter is invalid. Check that the value of this parameter is not null or an empty string.

400

MaxscaleNotSupport

Current custins can not support Maxscale.

This operation is not supported for instances with maxscale.

403

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

IncorrectKindCode

The current KindCode of the custins does not support the operation.

\-

403

IncorrectDBInstanceEngine

Current DB Instance engine does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectKindCode

Current custins kindCode does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

404

Endpoint.NotFound

Specified endpoint is not found.

The port that is associated with the dedicated proxy endpoint cannot be found.

404

InvalidDBInstanceName.NotFound

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

404

Maxscale.NotFound

The related maxscale instance is not found.

The operation failed. No associated MaxScale instances can be found.

404

InvalidDBInstanceNetType.NotFound

Specified DB instance net type is not found.

The operation failed. The network type of the RDS instance is invalid. Specify a valid network type.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DeleteDBProxyEndpointAddress?updateTime=2023-12-19#workbench-doc-change-demo)

2022-06-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DeleteDBProxyEndpointAddress?updateTime=2022-06-08#workbench-doc-change-demo)
