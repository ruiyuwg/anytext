Queries accelerated domain names by SSL certificate.

## Operation description

**Note** You can call this operation up to 100 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnDomainByCertificate)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnDomainByCertificate)

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

cdn:DescribeCdnDomainByCertificate

get

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

SSLPub

string

Yes

The public key of the SSL certificate. You must encode the public key in Base64 and then call the encodeURIComponent function to encode the public key again.

The public key must be in the PEM format.

\*\*\*\*\*\*

SSLStatus

boolean

No

Specifies whether the domain name list to return contains only domain names with HTTPS enabled or disabled.

-   true: The domain name list contains only domain names with HTTPS enabled.
-   false: The domain name list contains only domain names with HTTPS disabled.

true

Exact

boolean

No

Specifies whether the domain name list to return match the SSL certificate.

-   true: The domain name list match the SSL certificate.
-   false: The domain name list do not match the SSL certificate.

true

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

ASAF2FDS-12SADSA-DDSAE3D-DSADCD4C-CDADS2D

CertInfos

array<object>

The information about the certificate.

CertInfo

object

CertStartTime

string

The time when the certificate became effective.

Nov 29 23:59:59 2017 GMT

CertExpireTime

string

The expiration time of the certificate.

Nov 29 00:00:00 2016 GMT

CertCaIsLegacy

string

Indicates whether the SSL certificate is obsolete. Valid values:

-   **yes**: The SSL certificate is obsolete.
-   **no**: The SSL certificate is working as expected.

yes

CertSubjectCommonName

string

The name of the SSL certificate owner.

owner

CertType

string

The type of the certificate. Valid values: **RSA**, **DSA**, and **ECDSA**.

RSA

DomainNames

string

The domain names (DNS fields) that match the SSL certificate. Multiple domain names are separated by commas (,).

\*.example.com,aliyundoc.com

CertExpired

string

Indicates whether the SSL certificate is expired. Valid values:

-   **yes**: The SSL certificate is expired.
-   **no**: The SSL certificate is not expired.

yes

Issuer

string

The certificate authority (CA) that issued the certificate.

C=US, O=Symantec Corporation, OU=Symantec Trust Network, OU=Domain Validated SSL, CN=Symantec Basic DV SSL CA - G1

DomainList

string

If a value is returned, the value matches the SSL certificate. Multiple domain names are separated by commas (,).

example.com,aliyundoc.com

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "ASAF2FDS-12SADSA-DDSAE3D-DSADCD4C-CDADS2D",
  "CertInfos": {
    "CertInfo": [
      {
        "CertStartTime": "Nov 29 23:59:59 2017 GMT",
        "CertExpireTime": "Nov 29 00:00:00 2016 GMT",
        "CertCaIsLegacy": "yes",
        "CertSubjectCommonName": "owner",
        "CertType": "RSA",
        "DomainNames": "*.example.com,aliyundoc.com",
        "CertExpired": "yes",
        "Issuer": "C=US, O=Symantec Corporation, OU=Symantec Trust Network, OU=Domain Validated SSL, CN=Symantec Basic DV SSL CA - G1",
        "DomainList": "example.com,aliyundoc.com"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Certificate.FormatError

The format of the certificate is invalid.

The specified certificate is invalid.

400

SSLPub.MissingParameter

The Cert parameter is required.

\-

400

Decode.Error

Error decoding the SSLPub certificate.

\-

400

Certificate.DecodeError

An error occurred while decoding the certificate.

\-

500

InternalError

The request processing has failed due to backend service exception.

Failed to process request. Backend server exception

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnDomainByCertificate?updateTime=2024-12-18#workbench-doc-change-demo)

2023-08-22

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnDomainByCertificate?updateTime=2023-08-22#workbench-doc-change-demo)
