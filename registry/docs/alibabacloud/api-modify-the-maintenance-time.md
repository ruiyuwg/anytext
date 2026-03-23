Modifies the maintenance time of an ApsaraDB for RDS instance.

You can set the maintenance time to a period of time during off-peak hours. Alibaba Cloud performs routine maintenance within the maintenance time to minimize impacts on your business.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=ModifyDBInstanceMaintainTime&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

ModifyDBInstanceMaintainTime

The operation that you want to perform. Set the value to **ModifyDBInstanceMaintainTime**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxx

The ID of the instance.

MaintainTime

String

Yes

22:00Z-02:00Z

The maintenance time of the instance. Specify the time in the ISO 8601 standard in the _HH:mm_Z-_HH:mm_Z format. The time must be in UTC.

ClientToken

String

No

ETnLKlblzczshOTUbOCzxxxxxxxxxx

The client token that is used to ensure the idempotency of requests. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.

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
http(s)://rds.aliyuncs.com/? Action=ModifyDBInstanceMaintainTime
&DBInstanceId=rm-uf6wjk5xxxxxxx
&MaintainTime=22:00Z-02:00Z 
&<Common request parameters>
```

Sample success responses

`XML` format

```
<ModifyDBInstanceMaintainTimeResponse>
           <RequestId>65BDA532-28AF-4122-AA39-B382721EEE64</RequestId>
</ModifyDBInstanceMaintainTimeResponse>
```

`JSON` format

```
{
  "RequestId": " 65BDA532-28AF-4122-AA39-B382721EEE64"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
