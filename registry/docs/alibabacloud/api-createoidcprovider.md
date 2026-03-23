Creates an OpenID Connect (OIDC) identity provider (IdP) to configure a trust relationship between Alibaba Cloud and an external IdP. This topic provides an example on how to create an IdP named TestOIDCProvider to configure a trust relationship between the external IdP Okta and Alibaba Cloud.

### [](#prerequisites)[](#)Prerequisites

Before you call this operation, make sure that the information such as the URL of the issuer, the fingerprints of HTTPS certificate authority (CA) certificates, and the client IDs are obtained from an external IdP, such as Google Workspace or Okta.

### [](#limits)[](#)Limits

-   You can create a maximum of 100 OIDC IdPs in an Alibaba Cloud account.
-   You can add a maximum of 50 client IDs to an OIDC IdP.
-   You can add a maximum of five fingerprints to an OIDC IdP.

### [](#operation-description)[](#)Operation description

This topic provides an example on how to create an IdP named `TestOIDCProvider` to configure a trust relationship between the external IdP and Alibaba Cloud.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ims/2019-08-15/CreateOIDCProvider)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ims/2019-08-15/CreateOIDCProvider)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ram:CreateOIDCProvider

create

\*All Resources

`*`

-   ram:OidcIssuerUrl

none

## Request parameters

Parameter

Type

Required

Description

Example

OIDCProviderName

string

Yes

The name of the OIDC IdP.

The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are `periods, (.), hyphens (-), and underscores (_)`.\`\`

The name can be up to 128 characters in length.

TestOIDCProvider

IssuerUrl

string

Yes

The URL of the issuer, which is provided by the external IdP. The URL of the issuer must be unique within an Alibaba Cloud account.

The URL of the issuer must start with `https` and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (`?`) or logon information that is identified by at signs (`@`). The URL cannot be a fragment URL that contains number signs (`#`).

The URL can be up to 255 characters in length.

https://dev-xxxxxx.okta.com

Description

string

No

The description of the OIDC IdP.

The description can be up to 256 characters in length.

This is an OIDC Provider.

ClientIds

string

No

The ID of the client, which is provided by the external IdP. If you want to specify multiple client IDs, separate the client IDs with commas (,).

The client ID can contain letters, digits, and special characters and cannot start with the special characters. The special characters are `periods (.), hyphens (-), underscores (_), colons (:), and forward slashes (/)`.\`\`

The client ID can be up to 128 characters in length.

498469743454717\*\*\*\*

Fingerprints

string

No

The fingerprint of the HTTPS CA certificate, which is provided by the external IdP. If you want to specify multiple fingerprints, separate the fingerprints with commas (,).

The fingerprint can contain letters and digits.

The fingerprint can be up to 128 characters in length.

902ef2deeb3c5b13ea4c3d5193629309e231\*\*\*\*

IssuanceLimitTime

long

No

The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.

6

For more information about common request parameters, see [API Reference](/help/en/ram/common-parameters-2).

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

64B11B41-636D-51E3-A39B-C8703CD2218C

OIDCProvider

object

The information about the OIDC IdP.

UpdateDate

string

The time when the OIDC IdP was modified. The time is displayed in UTC.

2021-11-11T06:56:03Z

Description

string

The description of the OIDC IdP.

This is an OIDC Provider.

OIDCProviderName

string

The name of the OIDC IdP.

TestOIDCProvider

CreateDate

string

The time when the OIDC IdP was created. The time is displayed in UTC.

2021-11-11T06:56:03Z

Arn

string

The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.

acs:ram::177242285274\*\*\*\*:oidc-provider/TestOIDCProvider

IssuerUrl

string

The URL of the issuer.

https://dev-xxxxxx.okta.com

Fingerprints

string

The fingerprint of the HTTPS certificate.

902ef2deeb3c5b13ea4c3d5193629309e231\*\*\*\*

ClientIds

string

The ID of the client.

498469743454717\*\*\*\*

GmtCreate

string

The timestamp when the OIDC IdP was created.

1636613763000

GmtModified

string

The timestamp when the OIDC IdP was modified.

1636613763000

IssuanceLimitTime

long

The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.

6

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "64B11B41-636D-51E3-A39B-C8703CD2218C",
  "OIDCProvider": {
    "UpdateDate": "2021-11-11T06:56:03Z",
    "Description": "This is an OIDC Provider.",
    "OIDCProviderName": "TestOIDCProvider",
    "CreateDate": "2021-11-11T06:56:03Z",
    "Arn": "acs:ram::177242285274****:oidc-provider/TestOIDCProvider",
    "IssuerUrl": "https://dev-xxxxxx.okta.com",
    "Fingerprints": "902ef2deeb3c5b13ea4c3d5193629309e231****",
    "ClientIds": "498469743454717****",
    "GmtCreate": 1636613763000,
    "GmtModified": 1636613763000,
    "IssuanceLimitTime": 6
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-08-14

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Ims/2019-08-15/CreateOIDCProvider?updateTime=2024-08-14#workbench-doc-change-demo)

2023-07-20

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ims/2019-08-15/CreateOIDCProvider?updateTime=2023-07-20#workbench-doc-change-demo)
