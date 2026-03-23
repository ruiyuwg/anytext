Retrieves certificate details, including the basic information, certificate body, and private key. You can also use this operation to download the certificate content and private key.

## Operation description

The queries per second (QPS) limit for each user is 100. If you exceed this limit, the system throttles your API calls, which may affect your business. We recommend that you call this operation within this limit.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/cas/2020-04-07/GetUserCertificateDetail)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/cas/2020-04-07/GetUserCertificateDetail)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

yundun-cert:GetUserCertificateDetail

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

CertId

integer

Yes

The ID of the certificate. To get this ID, call the [ListUserCertificateOrder](/help/en/ssl-certificate/developer-reference/api-cas-2020-04-07-listusercertificateorder) operation.

6055048

CertFilter

boolean

No

Specifies whether to filter the certificate content from the response. Valid values: **true**: The Cert, Key, EncryptCert, EncryptPrivateKey, SignCert, and SignPrivateKey parameters are not returned. **false** (default): All parameters are returned.

false

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response object.

Cert

string

The content of the certificate that does not use a Chinese cryptographic algorithm. This parameter is returned only when the certFilter request parameter is false.

\---BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----

Key

string

The private key of the certificate that does not use a Chinese cryptographic algorithm. This parameter is returned only when the certFilter request parameter is false.

\-----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----

EncryptCert

string

The content of the encryption certificate that uses a Chinese cryptographic algorithm. The certificate is in PEM format. This parameter is returned only when the certFilter request parameter is false.

\-----BEGIN CERTIFICATE----- MIICDzCCA\*\*\* -----END CERTIFICATE-----

EncryptPrivateKey

string

The private key of the encryption certificate that uses a Chinese cryptographic algorithm. The private key is in PEM format. This parameter is returned only when the certFilter request parameter is false.

\-----BEGIN EC PRIVATE KEY----- MHcCAQEEI\*\*\*\* -----END EC PRIVATE KEY-----

SignCert

string

The content of the signing certificate that uses a Chinese cryptographic algorithm. The certificate is in PEM format. This parameter is returned only when the certFilter request parameter is false.

\-----BEGIN CERTIFICATE----- MIICDzCCAbagAw\*\*\*\* -----END CERTIFICATE-----

SignPrivateKey

string

The private key of the signing certificate that uses a Chinese cryptographic algorithm. The private key is in PEM format. This parameter is returned only when the certFilter request parameter is false.

\-----BEGIN EC PRIVATE KEY----- MHcCAQEEILR\*\*\*\* -----END EC PRIVATE KEY-----

Id

integer

The ID of the certificate.

121345

Name

string

The name of the certificate.

cert\_name

RequestId

string

The ID of the request. This unique ID is generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.

15C66C7B-671A-4297-9187-2C4477247A74

Common

string

The primary domain name that is bound to the certificate.

\*.com

Fingerprint

string

The fingerprint of the certificate.

1D7801BBE772D5DE55CBF1F88AEB41A42402DA07

Issuer

string

The certification authority (CA) that issued the certificate.

Digicert

OrgName

string

The name of the company or organization of the certificate purchaser.

Alibaba

Province

string

The province where the company or organization of the certificate purchaser is located.

zhejiang

City

string

The city where the company or organization of the certificate purchaser is located.

hangzhou

Country

string

The country where the company or organization of the certificate purchaser is located.

CN

StartDate

string

The issuance date of the certificate.

2018-07-13

EndDate

string

The expiration date of the certificate.

2023-10-25

Sans

string

All domain names that are bound to the certificate.

\*.com

Expired

boolean

Indicates whether the certificate has expired. Valid values:

-   **true**: The certificate has expired.
    
-   **false**: The certificate has not expired.
    

true

BuyInAliyun

boolean

Indicates whether the certificate was purchased from Alibaba Cloud. Valid values:

-   **true**: Yes
    
-   **false**: No
    

true

OrderId

integer

The ID of the certificate application order.

123456

ResourceGroupId

string

The ID of the resource group.

rg-aek\*\*\*\*wia

Algorithm

string

The algorithm of the certificate.

RSA

InstanceId

string

The ID of the resource instance.

cas-ivauto-hqito6

Sha2

string

The SHA-2 value of the certificate.

573415B23243066AD345AE5A57BD0FAE94F598BDD06D906278B5FF318F090FC8

SerialNo

string

The serial number of the certificate.

033cd852608689ef5e368fde89e0961769e8

CertIdentifier

string

The certificate ID followed by "-cn-hangzhou". For example, if the certificate ID is 123, the value of CertIdentifier is "123-cn-hangzhou".

13781326-cn-hangzhou

CertChain

array<object>

The information about the certificate chain.

object

The certificate chain object.

IssuerCommonName

string

The common name of the issuer.

Encryption Everywhere DV TLS CA - G2

CommonName

string

The common name of the certificate in the chain.

test

NotAfter

integer

The expiration date of the certificate in the chain.

17352613180000

NotBefore

integer

The issuance date of the certificate in the chain.

17322633180000

RemainDay

integer

The number of days until the certificate in the chain expires.

1000

NotAfter

integer

The end time of the validity period of the certificate.

17326613180000

NotBefore

integer

The start time of the validity period of the certificate.

17321613180000

Tags

array<object>

The list of tags.

object

The resource tag.

TagKey

string

The key of the tag.

test

TagValue

string

The value of the tag.

test

## Examples

Success response

`JSON` format

```
{
  "Cert": "---BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----",
  "Key": "-----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----",
  "EncryptCert": "-----BEGIN CERTIFICATE-----\nMIICDzCCA***\n-----END CERTIFICATE-----",
  "EncryptPrivateKey": "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEI****\n-----END EC PRIVATE KEY-----",
  "SignCert": "-----BEGIN CERTIFICATE-----\nMIICDzCCAbagAw****\n-----END CERTIFICATE-----\n",
  "SignPrivateKey": "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEILR****\n-----END EC PRIVATE KEY-----\n",
  "Id": 121345,
  "Name": "cert_name",
  "RequestId": "15C66C7B-671A-4297-9187-2C4477247A74",
  "Common": "*.com",
  "Fingerprint": "1D7801BBE772D5DE55CBF1F88AEB41A42402DA07",
  "Issuer": "Digicert",
  "OrgName": "Alibaba",
  "Province": "zhejiang",
  "City": "hangzhou",
  "Country": "CN",
  "StartDate": "2018-07-13",
  "EndDate": "2023-10-25",
  "Sans": "*.com",
  "Expired": true,
  "BuyInAliyun": true,
  "OrderId": 123456,
  "ResourceGroupId": "rg-aek****wia",
  "Algorithm": "RSA",
  "InstanceId": "cas-ivauto-hqito6",
  "Sha2": "573415B23243066AD345AE5A57BD0FAE94F598BDD06D906278B5FF318F090FC8",
  "SerialNo": "033cd852608689ef5e368fde89e0961769e8",
  "CertIdentifier": "13781326-cn-hangzhou",
  "CertChain": [
    {
      "IssuerCommonName": "Encryption Everywhere DV TLS CA - G2",
      "CommonName": "test",
      "NotAfter": 17352613180000,
      "NotBefore": 17322633180000,
      "RemainDay": 1000
    }
  ],
  "NotAfter": 17326613180000,
  "NotBefore": 17321613180000,
  "Tags": [
    {
      "TagKey": "test",
      "TagValue": "test"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/cas/2020-04-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/cas/2020-04-07/GetUserCertificateDetail#workbench-doc-change-demo) for a complete list.
