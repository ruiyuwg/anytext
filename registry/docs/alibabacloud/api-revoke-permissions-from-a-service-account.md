You can call the RevokeOperatorPermission operation to revoke permissions from the service account of an ApsaraDB RDS instance.

After Alibaba Cloud technical support resolves the issues on your instance, you can revoke permissions from the service account of your instance.

This operation is available only when your instance runs one of the following database engines:

-   MySQL
-   SQL Server
-   PostgreSQL

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=RevokeOperatorPermission&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

RevokeOperatorPermission

The operation that you want to perform. Set the value to **RevokeOperatorPermission**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxx

The ID of the instance.

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
http(s)://rds.aliyuncs.com/?Action=RevokeOperatorPermission
&DBInstanceId=rm-uf6wjk5xxxxxxx
&<Common request parameters>
```

Sample success responses

`XML` format

```
<RevokeOperatorPermissionResponse>
      <RequestId>842B73C8-5776-4BD9-9872-69C8C46DD7D3</RequestId>
</RevokeOperatorPermissionResponse>
```

`JSON` format

```
{
    "RequestId":"842B73C8-5776-4BD9-9872-69C8C46DD7D3"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
