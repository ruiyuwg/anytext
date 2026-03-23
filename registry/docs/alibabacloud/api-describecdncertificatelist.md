Queries the certificates of accelerated domain names.

## Operation description

**Note** You can call this operation up to 30 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnCertificateList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnCertificateList)

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

cdn:DescribeCdnCertificateList

get

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

DomainName

string

No

The accelerated domain name. Separate multiple accelerated domain names with commas (,).

If you do not specify an accelerated domain name, SSL certificates of all your accelerated domain names are queried.

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

FC0E34AC-0239-44A7-AB0E-800DE522C8DA

CertificateListModel

object

Details about certificates.

Count

integer

The number of certificates that are returned.

2

CertList

array<object>

The list of certificates.

Cert

object

LastTime

long

The timestamp.

1512388610

Fingerprint

string

The fingerprint of the certificate.

2ED68FD33786C5B42950D40A6C50353575BB\*\*\*\*

CertName

string

The name of the certificate.

Certificate1

Issuer

string

The certificate authority (CA) that issued the certificate.

CO\*\*\*\*

CertId

long

The ID of the certificate.

1

Common

string

The Common Name (CN) attribute of the certificate. In most cases, the CN is a domain name.

example.com

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "FC0E34AC-0239-44A7-AB0E-800DE522C8DA",
  "CertificateListModel": {
    "Count": 2,
    "CertList": {
      "Cert": [
        {
          "LastTime": 1512388610,
          "Fingerprint": "2ED68FD33786C5B42950D40A6C50353575BB****",
          "CertName": "Certificate1\n",
          "Issuer": "CO****",
          "CertId": 1,
          "Common": "example.com"
        }
      ]
    }
  }
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

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnCertificateList?updateTime=2024-12-18#workbench-doc-change-demo)

2024-11-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnCertificateList?updateTime=2024-11-25#workbench-doc-change-demo)

2023-10-10

The API operation is deprecated

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnCertificateList?updateTime=2023-10-10#workbench-doc-change-demo)
