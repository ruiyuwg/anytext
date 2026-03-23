You can call the ModifyDBInstanceDescription operation to change the name of an ApsaraDB RDS instance.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=ModifyDBInstanceDescription&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

ModifyDBInstanceDescription

The operation that you want to perform. Set the value to **ModifyDBInstanceDescription**.

DBInstanceDescription

String

Yes

Instance in Alibaba Cloud staging environment

The name of the instance.

**Note** The name must be 2 to 64 characters in length.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxxxxx

The ID of the instance.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

17F57FEE-EA4F-4337-8D2E-9C23CAA63D74

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=ModifyDBInstanceDescription
&DBInstanceDescription=Instance in Alibaba Cloud staging environment
&DBInstanceId=rm-uf6wjk5xxxxxxxxxx
&<Common request parameters>
```

Sample success responses

`XML` format

```
<ModifyDBInstanceDescriptionResponse>
           <RequestId>17F57FEE-EA4F-4337-8D2E-9C23CAA63D74</RequestId>
</ModifyDBInstanceDescriptionResponse>
```

`JSON` format

```
{
    "RequestId": " 17F57FEE-EA4F-4337-8D2E-9C23CAA63D74"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
