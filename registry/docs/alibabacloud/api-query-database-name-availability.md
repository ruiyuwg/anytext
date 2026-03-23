You can call the CheckDBNameAvailable operation to check whether a database name is duplicate and conforms to the naming conventions on an ApsaraDB RDS instance.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=CheckDBNameAvailable&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

CheckDBNameAvailable

The operation that you want to perform. Set the value to **CheckDBNameAvailable**.

DBInstanceId

String

Yes

rm-t4n3axxxxx

The ID of the instance.

DBName

String

Yes

test1

The database name to query.

ClientToken

String

No

ETnLKlblzczshOTUbOCzxxxxxxxxxx

The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

6EF82B07-28D2-48D1-B5D6-7E78FED277C7

The ID of the request.

**Note** If this operation returns only the ID of the request, the database name can be used. Otherwise, an error message is returned to indicate that the database name is duplicate or does not conform to the naming conventions.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=CheckDBNameAvailable
&DBInstanceId=rm-t4n3axxxxx
&DBName=test1
&<Common request parameters>
```

Sample success responses

`XML` format

```
<CheckDBNameAvailableResponse>
  <RequestId>6EF82B07-28D2-48D1-B5D6-7E78FED277C7</RequestId>
</CheckDBNameAvailableResponse>
```

`JSON` format

```
{"RequestId":"6EF82B07-28D2-48D1-B5D6-7E78FED277C7"}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
