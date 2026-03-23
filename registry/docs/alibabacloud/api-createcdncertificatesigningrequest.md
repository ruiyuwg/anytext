Creates a certificate signing request (CSR).

## Operation description

**Note** You can call this operation up to 100 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/CreateCdnCertificateSigningRequest)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/CreateCdnCertificateSigningRequest)

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

cdn:CreateCdnCertificateSigningRequest

create

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

CommonName

string

Yes

The Common Name of the certificate.

CommonName

SANs

string

No

The Subject Alternative Name (SAN) extension of the SSL certificate. This extension is used to add domain names to the certificate. Separate multiple domain names with commas (,).

example.com

Organization

string

No

The name of the organization. Default value: Alibaba Inc.

Alibaba Inc

OrganizationUnit

string

No

The name of the department. Default value: Aliyun CDN.

Aliyun CDN

Country

string

No

The country or region in which the organization is located. Default value: CN.

CN

State

string

No

The provincial district. Default value: Zhejiang.

Zhejiang

City

string

No

The city. Default value: Hangzhou.

Hangzhou

Email

string

No

The email address.

username@example.com

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

PubMd5

string

The MD5 hash value of the certificate public key.

629bf4fd8104eda171135bcb0f77\*\*\*\*

Csr

string

The content of the CSR file.

CSRName

CommonName

string

The Common Name of the certificate.

CommonName

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0AEDAF20-4DDF-4165-8750-47FF9C1929C9",
  "PubMd5": "629bf4fd8104eda171135bcb0f77****",
  "Csr": "CSRName",
  "CommonName": "CommonName"
}
```

## Error codes

HTTP status code

Error code

Error message

400

InvalidValue.Malformed

Country must be 2 characters.

500

Internal.KeyError

Failed to generate rsa key.

500

Internal.CreateCSRError

Failed to create CSR.

500

Internal.EncodeCSRError

Failed to encode CSR.

500

Internal.EncodeKeyError

Failed to encode private key.

500

Internal.Error

The request processing has failed due to backend service exception.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/CreateCdnCertificateSigningRequest?updateTime=2024-12-18#workbench-doc-change-demo)
