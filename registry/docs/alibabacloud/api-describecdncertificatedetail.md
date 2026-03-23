Queries the detailed information about an SSL certificate.

## Operation description

**Note** You can call this operation up to 20 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnCertificateDetail)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnCertificateDetail)

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

cdn:DescribeCdnCertificateDetail

none

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

CertName

string

Yes

The ID of the SSL certificate. You can query only one certificate at a time.

cert-15480655xxxx

## Response parameters

Parameter

Type

Description

Example

object

CertName

string

The name of the certificate.

cert-15480655xxxx

Key

string

The key of the SSL certificate.

xxxx

Cert

string

The certificate.

\-----BEGIN CERTIFICATE-----\\nMIIFzDCCBLSgAwIBxxxx

CertId

long

The ID of the certificate.

881049

RequestId

string

The ID of the request.

0AEDAF20-4DDF-4165-8750-47FF9C1929C9

## Examples

Sample success responses

`JSON`format

```
{
  "CertName": "cert-15480655xxxx",
  "Key": "xxxx",
  "Cert": "-----BEGIN CERTIFICATE-----\\nMIIFzDCCBLSgAwIBxxxx",
  "CertId": 881049,
  "RequestId": "0AEDAF20-4DDF-4165-8750-47FF9C1929C9"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnCertificateDetail?updateTime=2024-12-18#workbench-doc-change-demo)

2024-11-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnCertificateDetail?updateTime=2024-11-25#workbench-doc-change-demo)
