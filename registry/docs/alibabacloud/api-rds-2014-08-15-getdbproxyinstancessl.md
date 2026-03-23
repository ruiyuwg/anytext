Queries the SSL encryption settings for a dedicated proxy endpoint of an ApsaraDB RDS for MySQL instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

RDS MySQL

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/GetDbProxyInstanceSsl)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/GetDbProxyInstanceSsl)

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

rds:GetDbProxyInstanceSsl

get

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

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

DbInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-t4n3axxxxx

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

The request ID.

D330E60C-8AAA-4D63-8F64-5B78F4692F98

DbProxyCertListItems

array<object>

An array that consists of SSL encryption settings.

DbProxyCertListItems

object

DbInstanceName

string

The instance ID.

rm-t4n3axxxxx

EndpointName

string

The ID of the dedicated proxy endpoint.

buxxxxxxx

EndpointType

string

The default identifier of the dedicated proxy endpoint. The value is fixed as **RWSplit**.

RWSplit

SslExpiredTime

string

The time at which the certificate expires.

2021-12-16T08:43:20Z

CertCommonName

string

The dedicated proxy endpoint for which SSL encryption is enabled.

test1234.rwlb.rds.aliyuncs.com

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "D330E60C-8AAA-4D63-8F64-5B78F4692F98",
  "DbProxyCertListItems": {
    "DbProxyCertListItems": [
      {
        "DbInstanceName": "rm-t4n3axxxxx",
        "EndpointName": "buxxxxxxx",
        "EndpointType": "RWSplit",
        "SslExpiredTime": "2021-12-16T08:43:20Z",
        "CertCommonName": "test1234.rwlb.rds.aliyuncs.com"
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

InvalidVpcInstanceId

The specified VPC instance ID is invalid.

\-

400

InvalidDBInstanceName

Specified parameter DBInstanceName is not valid.

The value of the DBInstanceName parameter is invalid. Check that the value of this parameter is not null or an empty string.

403

IncorrectDBInstanceType

The current database instance type does not support the operation.

This operation is not supported for the database engine of the current instance.

404

InvalidDBInstance.NotFound

The specified instance does not exist or is not supported.

The RDS instance cannot be found. Check the ID or name of the RDS instance.

404

Endpoint.NotFound

The specified endpoint is not found.

\-

404

InvalidDBInstanceName.NotFound

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

404

Maxscale.NotFound

The related maxscale instance is not found.

The operation failed. No associated MaxScale instances can be found.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GetDbProxyInstanceSsl?updateTime=2024-01-09#workbench-doc-change-demo)

2023-12-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GetDbProxyInstanceSsl?updateTime=2023-12-19#workbench-doc-change-demo)

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GetDbProxyInstanceSsl?updateTime=2022-06-23#workbench-doc-change-demo)

2022-06-08

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/GetDbProxyInstanceSsl?updateTime=2022-06-08#workbench-doc-change-demo)
