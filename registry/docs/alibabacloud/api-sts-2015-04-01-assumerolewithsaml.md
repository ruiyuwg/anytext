For role-based single sign-on (SSO) that uses Security Assertion Markup Language (SAML), call the AssumeRoleWithSAML operation to obtain a temporary identity credential (a Security Token Service (STS) token) for a RAM role.

## Operation description

### Prerequisites

-   Obtain a SAML response from an external identity provider (IdP).
    
-   Create a SAML identity provider in Resource Access Management (RAM). For more information, see [Create a SAML identity provider](/help/en/ram/create-a-saml-idp) or [CreateSAMLProvider](/help/en/ram/developer-reference/api-createsamlprovider).
    
-   Create a RAM role for a SAML identity provider. For more information, see [Create a RAM role for an identity provider](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp) or [CreateRole](/help/en/ram/api-createrole).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sts/2015-04-01/AssumeRoleWithSAML)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sts/2015-04-01/AssumeRoleWithSAML)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

SAMLProviderArn

string

No

The Alibaba Cloud Resource Name (ARN) of the SAML IdP that is created in RAM.

Format: `acs:ram::<account_id>:saml-provider/<saml_provider_name>`.

You can view the ARN of the IdP in the RAM console or by calling an API operation:

-   RAM console: For more information, see [View the basic information of a SAML identity provider](/help/en/ram/view-the-basic-information-about-a-saml-idp).
    
-   API: For more information, see [GetSAMLProvider](/help/en/ram/api-getsamlprovider) or [ListSAMLProviders](/help/en/ram/api-listsamlproviders).
    

acs:ram::123456789012\*\*\*\*:saml-provider/company1

RoleArn

string

No

The ARN of the RAM role to assume.

The trusted entity of the RAM role is a SAML IdP. For more information, see [Create a RAM role for an identity provider](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-idp) or [CreateRole](/help/en/ram/api-createrole).

Format: `acs:ram::<account_id>:role/<role_name>`.

You can view the ARN of the role in the RAM console or by calling an API operation:

-   RAM console: For more information, see [How do I view the ARN of a RAM role?](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens).
    
-   API: For more information, see [ListRoles](/help/en/ram/api-listroles) or [GetRole](/help/en/ram/api-getrole).
    

acs:ram::123456789012\*\*\*\*:role/adminrole

SAMLAssertion

string

No

The Base64-encoded SAML assertion.

The value must be 4 to 100,000 characters in length.

**Note**

Obtain the complete SAML response from the IdP. Do not use only the SAML assertion field.

base64\_encoded\_saml\_assertion

Policy

string

No

An access policy to further limit the permissions of the STS token. This parameter works as follows:

-   If you specify this policy, the permissions of the STS token are the intersection of the permissions that are granted to the RAM role and the permissions that are specified in this policy.
    
-   If you do not specify this policy, the STS token has all the permissions that are granted to the RAM role.
    

The value must be 1 to 2,048 characters in length.

url\_encoded\_policy

DurationSeconds

integer

No

The expiration duration of the token. Unit: seconds.

The minimum value is 900 seconds. The maximum value is the value of the `MaxSessionDuration` parameter. The default value is 3600 seconds.

You can set the `MaxSessionDuration` parameter when you call the CreateRole or UpdateRole operation. For more information, see [CreateRole](/help/en/ram/api-createrole) or [UpdateRole](/help/en/ram/api-updaterole).

3600

**Note**

Because the AssumeRoleWithSAML operation uses a SAML assertion for identity authentication and allows anonymous access, you do not need to specify the common request parameters `Signature`, `SignatureMethod`, `SignatureVersion`, or `AccessKeyId`. For more information about common request parameters, see [Common request parameters](/help/en/sdk/product-overview/rpc-mechanism).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

6894B13B-6D71-4EF5-88FA-F32781734A7F

SAMLAssertionInfo

object

The information about the SAML assertion.

SubjectType

string

The format of the NameID element in the SAML assertion. If the prefix is `urn:oasis:names:tc:SAML:2.0:nameid-format:`, the prefix is removed. Examples: `persistent` and `transient`.

persistent

Subject

string

The value of the `Subject - NameID` field in the SAML assertion.

alice@example.com

Issuer

string

The value of the `Issuer` field in the SAML assertion.

http://example.com/adfs/services/trust

Recipient

string

The value of the `Recipient` attribute in the `Subject - SubjectConfirmation - SubjectConfirmationData` field of the SAML assertion.

https://signin.aliyun.com/saml-role/SSO

AssumedRoleUser

object

The temporary identity of the assumed role.

AssumedRoleId

string

The ID of the temporary identity.

34458433936495\*\*\*\*:alice

Arn

string

The ARN of the temporary identity.

acs:sts::123456789012\*\*\*\*:assumed-role/AdminRole/alice

Credentials

object

The access credential.

SecurityToken

string

The security token.

**Note**

The security token has a variable length. Do not impose a maximum length limit on the security token.

\*\*\*\*\*\*\*\*

Expiration

string

The expiration time of the token. The time is in UTC.

2015-04-09T11:52:19Z

AccessKeySecret

string

The AccessKey secret.

wyLTSmsyPGP1ohvvw8xYgB29dlGI8KMiH2pK\*\*\*\*

AccessKeyId

string

The AccessKey ID.

STS.L4aBSCSJVMuKg5U1\*\*\*\*

SourceIdentity

string

The source identity.

When you assume a role, you can specify a source identity for the role user. The source identity is used as the initial identity of the session. The value of the source identity persists throughout chained role-assuming sessions and cannot be changed. This ensures the traceability and security of operations.

This parameter is not returned if you do not set a source identity.

Alice

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6894B13B-6D71-4EF5-88FA-F32781734A7F",
  "SAMLAssertionInfo": {
    "SubjectType": "persistent",
    "Subject": "alice@example.com",
    "Issuer": "http://example.com/adfs/services/trust",
    "Recipient": "https://signin.aliyun.com/saml-role/SSO"
  },
  "AssumedRoleUser": {
    "AssumedRoleId": "34458433936495****:alice",
    "Arn": "acs:sts::123456789012****:assumed-role/AdminRole/alice"
  },
  "Credentials": {
    "SecurityToken": "********",
    "Expiration": "2015-04-09T11:52:19Z",
    "AccessKeySecret": "wyLTSmsyPGP1ohvvw8xYgB29dlGI8KMiH2pK****",
    "AccessKeyId": "STS.L4aBSCSJVMuKg5U1****"
  },
  "SourceIdentity": "Alice"
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

See [Release Notes](https://api.alibabacloud.com/document/Sts/2015-04-01/AssumeRoleWithSAML#workbench-doc-change-demo) for a complete list.
