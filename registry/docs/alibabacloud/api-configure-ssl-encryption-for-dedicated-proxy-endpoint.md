Configures SSL encryption for an dedicated proxy endpoint of an ApsaraDB RDS for MySQL instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

RDS MySQL

### [](#references)[](#)References

**Note** : Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation:

[Configure SSL encryption for a proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-ssl-encryption-for-a-proxy-endpoint-on-an-apsaradb-rds-for-mysql-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDbProxyInstanceSsl)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/ModifyDbProxyInstanceSsl)

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

rds:ModifyDbProxyInstanceSsl

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag
-   rds:DbProxySslEnabled

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

DbInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-t4n3axxxxx

DbProxyEndpointId

string

Yes

The ID of the proxy endpoint. You can call the DescribeDBProxyEndpoint operation to query the ID of the proxy endpoint.

ta9um4xxxxx

DbProxyConnectString

string

Yes

The dedicated proxy endpoint of the instance.

test123456.rwlb.rds.aliyuncs.com

DbProxySslEnabled

string

Yes

The SSL configuration setting that you want to apply on the instance. Valid values:

-   0: disables SSL encryption.
-   1: enables SSL encryption or modifies the endpoint that requires SSL encryption.
-   2: updates the validity period of the SSL certificate.

**Note** This setting causes your instance to restart. Proceed with caution.

1

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

BF46A62B-3717-4397-9338-36BB95C898B3

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "BF46A62B-3717-4397-9338-36BB95C898B3"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MinorVersionNotSupport

The current database minor version does not support the operation.

The current instance kernel iteration does not support this operation. You can upgrade the kernel iteration.

400

InvalidDbProxyStatus

The proxy status of the database is abnormal.

The operation failed. The database proxy of the RDS instance is abnormal.

400

InvalidDBInstanceName

Specified parameter DBInstanceName is not valid.

The value of the DBInstanceName parameter is invalid. Check that the value of this parameter is not null or an empty string.

400

MaxscaleNotSupport

Current custins can not support Maxscale.

This operation is not supported for instances with maxscale.

403

RDSCategoryNotSupport

The specified instance category does not support this operation.

\-

403

IncorrectDBInstanceEngine

Current DB Instance engine does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectKindCode

Current custins kindCode does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectDBInstanceType

Current DB instance engine and type does not support operations.

The operation failed. The operation is not supported for the database engine of the RDS instance.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

ConnectionStringLengthExceeded

Connection String is too long.

The endpoint is exceedingly long. Modify the endpoint and try again.

404

Endpoint.NotFound

The specified endpoint is not found.

\-

404

EnabledSSLNotSupport

The backend service does not support SSL.

The backend does not support SSL encryption.

404

InvalidDbProxyConnectionString.NotFound

The specified database proxy connection string is not found.

The operation failed. The database proxy endpoint cannot be found.

404

InvalidDBInstanceName.NotFound

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

404

EndpointType.NotFound

The specified endpoint type is not found.

The operation failed. Unknown types of proxy terminals are detected.

404

EndpointConfig.Invalid

Please check the endpoint config parameter.

Please check the endpoint configuration parameter.

404

InvalidMaxscaleConnectionString.NotFound

The specified database proxy connection string is not found.

The operation failed. The database proxy endpoint cannot be found.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDbProxyInstanceSsl?updateTime=2023-12-19#workbench-doc-change-demo)

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDbProxyInstanceSsl?updateTime=2022-06-23#workbench-doc-change-demo)

2022-06-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/ModifyDbProxyInstanceSsl?updateTime=2022-06-08#workbench-doc-change-demo)
