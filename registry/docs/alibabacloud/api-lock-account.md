You can call this operation to lock an account of an ApsaraDB RDS for PostgreSQL instance that uses cloud disks.

You cannot use a locked account to log on to the corresponding instance. You must first unlock the account. For more information, see [Lock and delete an account](/help/en/rds/apsaradb-rds-for-postgresql/lock-or-delete-an-account-from-an-apsaradb-rds-for-postgresql-instance).

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=LockAccount&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

LockAccount

The operation that you want to perform. Set the value to **LockAccount**.

AccountName

String

Yes

testaccount

The account that you want to lock. You can lock only one account at a time.

DBInstanceId

String

Yes

pgm-bpxxxxx

The ID of the ApsaraDB RDS for PostgreSQL instance.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

1B291C4B-DDCD-4D0A-8F6D-7F3241DE9228

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=LockAccount
&AccountName=testaccount
&DBInstanceId=pgm-bpxxxxx
&<Common request parameters>
```

Sample success responses

`XML` format

```
<LockAccountResponse>
  <RequestId>1B291C4B-DDCD-4D0A-8F6D-7F3241DE9228</RequestId>
</LockAccountResponse>
```

`JSON` format

```
{
    "RequestId": "1B291C4B-DDCD-4D0A-8F6D-7F3241DE9228"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
