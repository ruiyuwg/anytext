Changes the method to update the minor version of an ApsaraDB for RDS instance.

This operation is supported only for instances that run MySQL.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=ModifyDBInstanceAutoUpgradeMinorVersion&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

ModifyDBInstanceAutoUpgradeMinorVersion

The operation that you want to perform. Set this parameter to **ModifyDBInstanceAutoUpgradeMinorVersion**.

AutoUpgradeMinorVersion

String

Yes

Auto

The method to update the minor version of the instance. Valid values:

-   **Auto:** automatic upgrade.
-   **Manual**: Instances are forcibly upgraded to a higher minor version when the current version goes offline.

DBInstanceId

String

Yes

rm-uf6wjk5xxx

The ID of the instance.

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

A31818D5-0550-4A81-8D13-B45948D7193F

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=ModifyDBInstanceAutoUpgradeMinorVersion
&DBInstanceId=rm-uf6wjk5xxx
&AutoUpgradeMinorVersion=Auto
&<Common request parameters>
```

Sample success responses

`XML` format

```
<ModifyDBInstanceAutoUpgradeMinorVersionResponse>
    <RequestId>A31818D5-0550-4A81-8D13-B45948D7193F</RequestId>
</ModifyDBInstanceAutoUpgradeMinorVersionResponse>
```

`JSON` format

```
{
	"RequestId": "A31818D5-0550-4A81-8D13-B45948D7193F"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
