Resets permissions of the privileged account.

**Note** This operation is not applicable to instances that run SQL Server 2008 R2, which do not have a privileged account.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=ResetAccount&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

ResetAccount

The operation that you want to perform. Set the value to **ResetAccount**.

AccountName

String

Yes

test1

The name of the privileged account.

AccountPassword

String

Yes

Test123456

The new password of the privileged account.

**Note**

-   The password must be 8 to 32 characters in length.
-   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
-   Special characters include: !@#$&amp;%^\*()\_+-=

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

81BC9559-7B22-4B7F-B705-5F56DEECDEA7

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=ResetAccount
&AccountName=test1
&AccountPassword=Test123456
&DBInstanceId=rm-uf6wjk5xxxxxxxxxx
&<Common request parameters>
```

Sample success responses

`XML` format

```
<ResetAccountResponse>
      <RequestId>81BC9559-7B22-4B7F-B705-5F56DEECDEA7</RequestId>
</ResetAccountResponse>
```

`JSON` format

```
{
       "RequestId":"81BC9559-7B22-4B7F-B705-5F56DEECDEA7"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).
