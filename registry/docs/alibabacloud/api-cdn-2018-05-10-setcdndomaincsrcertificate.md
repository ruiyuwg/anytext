You can call this operation to configure an SSL certificate for a specific domain name.

## Operation description

**Note** You can call this operation up to 100 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/SetCdnDomainCSRCertificate)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/SetCdnDomainCSRCertificate)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:SetCdnDomainCSRCertificate

update

\*Domain

`acs:cdn:*:{#accountId}:domain/{#DomainName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ServerCertificate

string

Yes

The content of the certificate. The certificate must match the certificate signing request (CSR) created by calling the [CreateCdnCertificateSigningRequest](/help/en/cdn/api-createcdncertificatesigningrequest) operation. Make sure that the content of the certificate is encoded in Base64 and then encoded by encodeURIComponent.

\----BEGIN CERTIFICATE----- MIIFz\*\*\*\*-----END CERTIFICATE-----

DomainName

string

Yes

The accelerated domain name for which you want to configure an SSL certificate. The domain name must have HTTPS secure acceleration enabled.

example.com

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

0AEDAF20-4DDF-4165-8750-47FF9C1929C9

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0AEDAF20-4DDF-4165-8750-47FF9C1929C9"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Certificate.MissingParameter

You must specify the Certificate parameter.

You must specify the Certificate parameter.

400

Certificate.EncodeError

An error occurred while encoding the certificate.

\-

400

Certificate.DecodeError

An error occurred while decoding the certificate.

\-

400

Certificate.FormatError

The format of the certificate is invalid.

The specified certificate is invalid.

400

Certificate.MissMatch

The certificate does not match the domain.

The certificate and domain name do not match.

400

Certificate.NoPrivateKey

The private key of the certificate does not exist.

\-

500

Internal.ForbidError

You cannot modify the configurations when some features of the domain are in a canary deployment.

This domain cannot be changed because a feature is in canary release.

500

Internal.ConfigError

An error occurred while configuring the certificate.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/SetCdnDomainCSRCertificate?updateTime=2024-12-18#workbench-doc-change-demo)
