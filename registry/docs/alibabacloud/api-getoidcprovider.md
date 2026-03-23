Queries the information about an OIDC IdP.

## Operation description

### [](#)

This topic provides an example on how to query the information about an OpenID Connect (OIDC) identity provider (IdP) named `TestOIDCProvider`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ims/2019-08-15/GetOIDCProvider)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ims/2019-08-15/GetOIDCProvider)

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

ram:GetOIDCProvider

get

\*OIDCProvider

`acs:ram::{#accountId}:oidc-provider/{#OIDCProviderName}`

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

TestOIDCProvider

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

E5E1A300-279D-5FBD-A8CF-F4EDC20C4896

OIDCProvider

object

The information about the OIDC IdP.

UpdateDate

string

The time when the OIDC IdP was modified. The time is displayed in UTC.

2021-11-12T08:38:29Z

Description

string

The description of the OIDC IdP.

This is a new OIDC Provider.

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

The fingerprint of the HTTPS certificate. If multiple fingerprints are returned, the fingerprints are separated by commas (,).

902ef2deeb3c5b13ea4c3d5193629309e231\*\*\*\*

ClientIds

string

The ID of the client. If multiple client IDs are returned, the client IDs are separated by commas (,).

498469743454717\*\*\*\*

GmtCreate

string

The timestamp when the OIDC IdP was created.

1636613763000

GmtModified

string

The timestamp when the OIDC IdP was modified.

1636706309000

IssuanceLimitTime

long

The earliest time when an external IdP can issue an ID token. If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.

12

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "E5E1A300-279D-5FBD-A8CF-F4EDC20C4896",
  "OIDCProvider": {
    "UpdateDate": "2021-11-12T08:38:29Z",
    "Description": "This is a new OIDC Provider.",
    "OIDCProviderName": "TestOIDCProvider",
    "CreateDate": "2021-11-11T06:56:03Z",
    "Arn": "acs:ram::177242285274****:oidc-provider/TestOIDCProvider",
    "IssuerUrl": "https://dev-xxxxxx.okta.com",
    "Fingerprints": "902ef2deeb3c5b13ea4c3d5193629309e231****",
    "ClientIds": "498469743454717****",
    "GmtCreate": 1636613763000,
    "GmtModified": 1636706309000,
    "IssuanceLimitTime": 12
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

[View Change Details](https://api.alibabacloud.com/document/Ims/2019-08-15/GetOIDCProvider?updateTime=2024-08-14#workbench-doc-change-demo)

2023-07-20

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ims/2019-08-15/GetOIDCProvider?updateTime=2023-07-20#workbench-doc-change-demo)
