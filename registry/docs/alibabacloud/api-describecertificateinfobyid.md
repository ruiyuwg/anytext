Queries the information about a specific certificate by certificate ID.

## Operation description

-   You can call this operation up to 100 times per second per account.
-   If a certificate is associated with a domain name but the certificate is not enabled, the result of this operation shows that the certificate does not exist.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCertificateInfoByID)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCertificateInfoByID)

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

cdn:DescribeCertificateInfoByID

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

CertId

string

Yes

The ID of the certificate. You can query only one certificate in each call.

1644xx

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

5C1E43DC-9E51-4771-82C0-7D5ECEB547A1

CertInfos

array<object>

The information about the certificate.

CertInfo

object

CertExpireTime

string

The time at which the certificate expires.

2098-02-08 08:02:07 +0000 UTC

CreateTime

string

The time when the certificate became effective.

2015-12-21 08:02:07 +0000 UTC

CertType

string

The type of the certificate.

-   free: a free certificate
-   cas: a certificate purchased by using Certificate Management Service
-   upload: a user-uploaded certificate

cas

CertName

string

The name of the certificate.

example\_cert

CertId

string

The ID of the certificate.

1644xx

DomainList

string

The domain names that use the certificate.

\["example.com"\]

HttpsCrt

string

The content of the certificate.

\-----BEGIN CERTIFICATE-----\\nxxx-----END CERTIFICATE-----\\n

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5C1E43DC-9E51-4771-82C0-7D5ECEB547A1",
  "CertInfos": {
    "CertInfo": [
      {
        "CertExpireTime": "2098-02-08 08:02:07 +0000 UTC",
        "CreateTime": "2015-12-21 08:02:07 +0000 UTC",
        "CertType": "cas",
        "CertName": "example_cert",
        "CertId": "1644xx",
        "DomainList": "[\"example.com\"]",
        "HttpsCrt": "-----BEGIN CERTIFICATE-----\\nxxx-----END CERTIFICATE-----\\n"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

400

CertNotExisted

The Cert doesn't exist.

403

SignatureDoesNotMatch

The signature we calculated does not match the one you provided. Please refer to the API reference about authentication for details.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).
