Changes the expiration time of a classic network endpoint.

When an ApsaraDB for RDS instance is in the hybrid access mode, which uses both a VPC endpoint and a classic network endpoint, this operation is used to extend the expiration time of the classic network endpoint.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=ModifyDBInstanceNetworkExpireTime&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

ModifyDBInstanceNetworkExpireTime

The operation that you want to perform. Set the value to **ModifyDBInstanceNetworkExpireTime**.

ClassicExpiredDays

Integer

Yes

7

The retention days of the classic network endpoint. Valid values: **1 to 120**. Unit: days.

ConnectionString

String

Yes

rm-uf6wjk5xxxxx.mysql.rds.aliyuncs.com

The classic network endpoint whose expiration time you want to extend. Two types of classic network endpoints are supported:

-   The internal endpoint of the classic network.
-   The read/write splitting endpoint of the classic network.

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

4C467B38-3910-447D-87BC-AC049166F216

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=ModifyDBInstanceNetworkExpireTime
&DBInstanceId=rm-uf6wjk5xxxxxxx
&ConnectionString=rm-uf6wjk5xxxxx.mysql.rds.aliyuncs.com
&ClassicExpiredDays=7
&<Common request parameters>
```

Sample success responses

`XML` format

```
<ModifyDBInstanceNetworkExpireTimeResponse>
	  <RequestId>4C467B38-3910-447D-87BC-AC049166F216</RequestId>
    </ModifyDBInstanceNetworkExpireTimeResponse>
```

`JSON` format

```
{
    "RequestId": "4C467B38-3910-447D-87BC-AC049166F216"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
