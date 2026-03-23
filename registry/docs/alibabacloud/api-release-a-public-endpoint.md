Releases the public endpoint of an ApsaraDB for RDS instance.

To ensure data security, you can release the public endpoint when you do not need to access the database from the Internet.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=ReleaseInstancePublicConnection&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

ReleaseInstancePublicConnection

The operation that you want to perform. Set the value to **ReleaseInstancePublicConnection**.

CurrentConnectionString

String

Yes

rm-uf6wjk5xxxx.mysql.rds.aliyuncs.com

The public endpoint.

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

65BDA532-28AF-4122-AA39-B382721EEE64

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=ReleaseInstancePublicConnection
&DBInstanceId=rm-uf6wjk5xxxxxxx
&CurrentConnectionString=rm-uf6wjk5xxxx.mysql.rds.aliyuncs.com
&<Common request parameters>
```

Sample success responses

`XML` format

```
<ReleaseInstancePublicConnectionResponse>  
         <RequestId>65BDA532-28AF-4122-AA39-B382721EEE64</RequestId>
</ReleaseInstancePublicConnectionResponse>
```

`JSON` format

```
{
  "RequestId": " 65BDA532-28AF-4122-AA39-B382721EEE64"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
