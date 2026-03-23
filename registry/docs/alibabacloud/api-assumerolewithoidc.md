For role-based single sign-on (SSO) that uses OpenID Connect (OIDC), call the AssumeRoleWithOIDC operation to obtain a temporary identity credential (a Security Token Service token) to assume a RAM role.

## Operation description

### Prerequisites

-   Obtain an OpenID Connect (OIDC) token from an external identity provider (IdP).
    
-   Create an OIDC identity provider in RAM. For more information, see [Create an OIDC identity provider](/help/en/ram/manage-an-oidc-idp) or [CreateOIDCProvider](/help/en/ram/api-createoidcprovider).
    
-   Create a RAM role that uses an OIDC identity provider as the trusted entity. For more information, see [Create a RAM role for a trusted identity provider](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp) or [CreateRole](/help/en/ram/api-createrole).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sts/2015-04-01/AssumeRoleWithOIDC)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sts/2015-04-01/AssumeRoleWithOIDC)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

OIDCProviderArn

string

No

The Alibaba Cloud Resource Name (ARN) of the OIDC identity provider.

You can view the ARN of the OIDC identity provider in the RAM console or by calling an API operation:

-   RAM console: For more information, see [View the information about an OIDC identity provider](/help/en/ram/manage-an-oidc-idp).
    
-   API: For more information, see [GetOIDCProvider](/help/en/ram/api-getoidcprovider) or [ListOIDCProviders](/help/en/ram/api-listoidcproviders).
    

acs:ram::113511544585\*\*\*\*:oidc-provider/TestOidcIdp

RoleArn

string

No

The ARN of the RAM role that you want to assume.

You can view the ARN of the role in the RAM console or by calling an API operation:

-   RAM console: For more information, see [View the ARN of a RAM role](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens).
    
-   API: For more information, see [ListRoles](/help/en/ram/api-listroles) or [GetRole](/help/en/ram/api-getrole).
    

acs:ram::113511544585\*\*\*\*:role/testoidc

OIDCToken

string

No

The OIDC token that is issued by an external IdP.

The token must be 4 to 20,000 characters long.

**Note**

Enter the original OIDC token. Do not Base64-decode the token.

eyJraWQiOiJKQzl3eHpyaHFKMGd0\*\*\*\*

Policy

string

No

An access policy to further restrict the permissions of the STS token.

-   If you specify this policy, the permissions of the STS token are the intersection of the permissions that are granted to the RAM role and the permissions that are specified in this policy.
    
-   If you do not specify this policy, the STS token has the same permissions as the RAM role.
    

The policy must be 1 to 2,048 characters long.

{"Statement": \[{"Action": \["\*"\],"Effect": "Allow","Resource": \["\*"\]}\],"Version":"1"}

DurationSeconds

integer

No

The validity period of the token, in seconds.

Valid values: 900 to the value of the `MaxSessionDuration` parameter. The default value is 3600.

For more information about how to set the `MaxSessionDuration` parameter, see [CreateRole](/help/en/ram/api-createrole) or [UpdateRole](/help/en/ram/api-updaterole).

3600

RoleSessionName

string

Yes

The name of the role session.

A custom parameter used to distinguish role sessions. The value is typically the identity of the user who calls the operation, such as a username. In ActionTrail, you can use the value of this parameter to identify the user who assumes the RAM role. This provides user-level access auditing.

The name can contain letters, digits, periods (.), at signs (@), hyphens (-), and underscores (\_).

The name must be 2 to 64 characters long.

TestOidcAssumedRoleSession

**Note**

The AssumeRoleWithOIDC operation uses an OIDC token for identity authentication and allows anonymous access. Therefore, you do not need to specify the `Signature`, `SignatureMethod`, `SignatureVersion`, or `AccessKeyId` common request parameters. For more information, see [Common parameters](/help/en/sdk/product-overview/rpc-mechanism).

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The returned parameters.

RequestId

string

The request ID.

3D57EAD2-8723-1F26-B69C-F8707D8B565D

OIDCTokenInfo

object

Information about the OIDC token.

Subject

string

The subject of the OIDC token.

This corresponds to the value of the `sub` field in the OIDC token.

KryrkIdjylZb7agUgCEf\*\*\*\*

Issuer

string

The issuer of the OIDC token.

This corresponds to the value of the `iss` field in the OIDC token.

https://dev-xxxxxx.okta.com

ClientIds

string

The audience of the OIDC token. Multiple audiences are separated by commas (,).

This corresponds to the value of the `aud` field in the OIDC token.

496271242565057\*\*\*\*

ExpirationTime

string

The expiration time of the OIDC token.

2021-10-20T04:27:09Z

IssuanceTime

string

The time when the OIDC token was issued.

2021-10-20T03:27:09Z

VerificationInfo

string

The verification information for the OIDC token. For more information, see [Manage OIDC identity providers](/help/en/ram/manage-an-oidc-idp).

Success

AssumedRoleUser

object

The assumed temporary identity.

AssumedRoleId

string

The ID of the temporary identity.

33157794895460\*\*\*\*

Arn

string

The ARN of the temporary identity.

acs:ram::113511544585\*\*\*\*:role/testoidc/TestOidcAssumedRoleSession

Credentials

object

The temporary access credential (STS token).

SecurityToken

string

The security token.

**Note**

The length of the security token is not fixed. Do not set a maximum length for the security token.

CAIShwJ1q6Ft5B2yfSjIr5bSEsj4g7BihPWGWHz\*\*\*\*

Expiration

string

The time when the token expires, in Coordinated Universal Time (UTC).

2021-10-20T04:27:09Z

AccessKeySecret

string

The AccessKey secret.

CVwjCkNzTMupZ8NbTCxCBRq3K16jtcWFTJAyBEv2\*\*\*\*

AccessKeyId

string

The AccessKey ID.

STS.NUgYrLnoC37mZZCNnAbez\*\*\*\*

SourceIdentity

string

The source identity.

The value of this identity persists throughout chained role-assuming sessions and cannot be changed. This ensures operational traceability and security.

This parameter is returned only if a source identity is configured.

Alice

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3D57EAD2-8723-1F26-B69C-F8707D8B565D",
  "OIDCTokenInfo": {
    "Subject": "KryrkIdjylZb7agUgCEf****",
    "Issuer": "https://dev-xxxxxx.okta.com",
    "ClientIds": "496271242565057****",
    "ExpirationTime": "2021-10-20T04:27:09Z",
    "IssuanceTime": "2021-10-20T03:27:09Z",
    "VerificationInfo": "Success"
  },
  "AssumedRoleUser": {
    "AssumedRoleId": "33157794895460****",
    "Arn": "acs:ram::113511544585****:role/testoidc/TestOidcAssumedRoleSession"
  },
  "Credentials": {
    "SecurityToken": "CAIShwJ1q6Ft5B2yfSjIr5bSEsj4g7BihPWGWHz****",
    "Expiration": "2021-10-20T04:27:09Z",
    "AccessKeySecret": "CVwjCkNzTMupZ8NbTCxCBRq3K16jtcWFTJAyBEv2****",
    "AccessKeyId": "STS.NUgYrLnoC37mZZCNnAbez****"
  },
  "SourceIdentity": "Alice"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Sts/2015-04-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sts/2015-04-01/AssumeRoleWithOIDC#workbench-doc-change-demo) for a complete list.
