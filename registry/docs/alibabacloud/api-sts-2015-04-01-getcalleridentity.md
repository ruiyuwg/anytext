A call to the GetCallerIdentity operation returns information about the identity of the current caller.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sts/2015-04-01/GetCallerIdentity)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sts/2015-04-01/GetCallerIdentity)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

No parameters required.

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

IdentityType

string

The type of the identity. Valid values:

-   Account: an Alibaba Cloud account.
    
-   RAMUser: a RAM user.
    
-   AssumedRoleUser: a RAM role.
    

RAMUser

AccountId

string

The ID of the Alibaba Cloud account to which the current caller belongs.

196813200012\*\*\*\*

RequestId

string

The request ID.

3C87BF47-3724-5443-ADC1-5AEAD9A03EB1

PrincipalId

string

The ID of the principal.

28877424437521\*\*\*\*

UserId

string

The user ID. Details are as follows:

-   If the caller is an Alibaba Cloud account, the ID of the Alibaba Cloud account is returned.
    
-   If the caller is a RAM user, the ID of the RAM user is returned.
    

**Note**

This parameter is returned only when the caller is an Alibaba Cloud account or a RAM user.

216959339000\*\*\*\*

Arn

string

The Alibaba Cloud Resource Name (ARN) of the current caller.

acs:ram::196813200012\*\*\*\*:user/admin

RoleId

string

The ID of the RAM role.

**Note**

This parameter is returned only when the caller is a RAM role.

33537620082992\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "IdentityType": "RAMUser",
  "AccountId": "196813200012****",
  "RequestId": "3C87BF47-3724-5443-ADC1-5AEAD9A03EB1",
  "PrincipalId": "28877424437521****",
  "UserId": "216959339000****",
  "Arn": "acs:ram::196813200012****:user/admin",
  "RoleId": "33537620082992****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

500

InternalError

STS Server Internal Error happened, please send the RequestId to us.

See [Error Codes](https://api.alibabacloud.com/document/Sts/2015-04-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sts/2015-04-01/GetCallerIdentity#workbench-doc-change-demo) for a complete list.
