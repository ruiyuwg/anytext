Restart an ApsaraDB for RDS instance.

If a large number of transactions need to be submitted or rolled back, the restart process may be delayed for a minute.

Before you call this operation, make sure that the following requirements are met:

-   The instance is in the running state.
-   The instance does not have ongoing backup tasks.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=RestartDBInstance&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

RestartDBInstance

The operation that you want to perform. Set the value to **RestartDBInstance**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxx

The ID of an instance.

ClientToken

String

No

ETnLKlblzczshOTUbOCzxxxxxx

The client token that is used to ensure idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.

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
http(s)://rds.aliyuncs.com/?Action=RestartDBInstance
&DBInstanceId=rm-uf6wjk5xxxxxxxxxx
&<Common request parameters>
```

Sample success responses

`XML` format

```
<RestartDBInstanceResponse>
      <RequestId> 65BDA532-28AF-4122-AA39-B382721EEE64</RequestId></RestartDBInstanceResponse>
```

`JSON` format

```
{
    "RequestId": " 65BDA532-28AF-4122-AA39-B382721EEE64"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
