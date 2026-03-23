You can call the GrantOperatorPermission operation to grant permissions to the service account of an ApsaraDB RDS instance.

When you seek help from Alibaba Cloud technical support to troubleshoot instance exceptions, you need to grant permissions to the service account of your instance. The service account is used by Alibaba Cloud technical support to perform operations on the databases of your instance.

This operation is available only when your instance runs one of the following database engines:

-   MySQL
-   SQL Server
-   PostgreSQL

For more information, see [Grant permissions to the service account of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/grant-permissions-to-the-service-account-of-an-apsaradb-rds-for-mysql-instance), [Grant permissions to the service account of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/grant-permissions-to-the-service-account-of-an-apsaradb-rds-for-sql-server-instance), and [Grant permissions to the service account of an ApsaraDB RDS for PostgreSQL instance](/help/en/doc-detail/146887.html).

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=GrantOperatorPermission&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

GrantOperatorPermission

The operation that you want to perform. Set the value to GrantOperatorPermission.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxx

The ID of the instance.

ExpiredTime

String

Yes

2019-03-27T16:00:00Z

The time when the permissions of the service account expire. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

Privileges

String

Yes

Control

The permissions that you want to grant to the service account. Valid values:

-   **Control**: the configuration permissions, which allow you to view and modify the configuration of the instance.
-   **Data**: the data permissions, which allow you to view the schemas, indexes, and SQL statements of the instance.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

842B73C8-5776-4BD9-9872-69C8C46DD7D3

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/?Action=GrantOperatorPermission
&DBInstanceId=rm-uf6wjk5xxxxxxx
&ExpiredTime=2019-03-27T16:00:00Z
&Privileges=Control
&<Common request parameters>
```

Sample success responses

`XML` format

```
<GrantOperatorPermissionResponse>
      <RequestId>842B73C8-5776-4BD9-9872-69C8C46DD7D3</RequestId>
</GrantOperatorPermissionResponse>
```

`JSON` format

```
{
    "RequestId":"842B73C8-5776-4BD9-9872-69C8C46DD7D3"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
