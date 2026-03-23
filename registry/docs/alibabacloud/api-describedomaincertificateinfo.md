Call the DescribeDomainCertificateInfo operation to query certificate information for a specified accelerated domain name.

## Operation description

**Note**

Each user can call this operation up to 100 times per second.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeDomainCertificateInfo)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeDomainCertificateInfo)

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

cdn:DescribeDomainCertificateInfo

get

\*Domain

`acs:cdn:*:{#accountId}:domain/{#DomainName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DomainName

string

Yes

The accelerated domain name. You can query only one domain name at a time.

example.com

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

5C1E43DC-9E51-4771-82C0-7D5ECEB547A1

CertInfos

object

CertInfo

array<object>

The list of certificate information.

object

CertExpireTime

string

The expiration time of the certificate.

2018-06-03T22:03:39Z

CertLife

string

The unit of the certificate validity period.

-   **months**
    
-   **years**
    

months

Status

string

The status of the certificate.

-   **success**: The certificate has taken effect.
    
-   **checking**: The system is checking whether the domain name is added to Alibaba Cloud CDN.
    
-   **cname\_error**: The CNAME record of the domain name does not point to Alibaba Cloud CDN.
    
-   **top\_domain\_cname\_error**: The CNAME record of the top-level domain name does not point to Alibaba Cloud CDN.
    
-   **domain\_invalid**: The domain name contains invalid characters.
    
-   **unsupport\_wildcard**: Wildcard domain names are not supported.
    
-   **applying**: The certificate application is in progress.
    
-   **get\_token\_timeout**: The certificate application timed out.
    
-   **check\_token\_timeout**: The verification timed out.
    
-   **get\_cert\_timeout**: The request to obtain the certificate timed out.
    
-   **failed**: The certificate application failed.
    

success

CertUpdateTime

string

The time when the certificate was updated.

2018-06-03T22:03:39Z

CertDomainName

string

The domain name that matches the certificate.

example.com

ServerCertificateStatus

string

The status of HTTPS.

-   **on**: Enabled.
    
-   **off**: Disabled.
    

on

CertOrg

string

The name of the certificate authority (CA) that issued the certificate.

Let's Encrypt

DomainName

string

The accelerated domain name.

example.com

CertStartTime

string

The start time of the certificate validity period.

2018-06-03T22:03:39Z

CertType

string

The type of the certificate.

-   **free**: A free certificate.
    
-   **cas**: An Alibaba Cloud Security certificate.
    
-   **upload**: A custom certificate that you uploaded.
    

free

CertName

string

The certificate name.

example.com

DomainCnameStatus

string

The CNAME status of the domain name.

-   **ok**: The CNAME record of the domain name points to Alibaba Cloud CDN.
    
-   **cname\_error**: The CNAME record of the domain name does not point to Alibaba Cloud CDN.
    
-   **top\_domain\_cname\_error**: The CNAME record of the top-level domain name does not point to Alibaba Cloud CDN.
    
-   **unsupport\_wildcard**: Wildcard domain names are not supported.
    

ok

ServerCertificate

string

The public key of the certificate.

asdadaxxxx

CertId

string

The certificate ID.

9002448

CertRegion

string

The region where the certificate is located.

cn-hangzhou

## Examples

Success response

`JSON` format

```
{
  "RequestId": "5C1E43DC-9E51-4771-82C0-7D5ECEB547A1",
  "CertInfos": {
    "CertInfo": [
      {
        "CertExpireTime": "2018-06-03T22:03:39Z",
        "CertLife": "months",
        "Status": "success",
        "CertUpdateTime": "2018-06-03T22:03:39Z",
        "CertDomainName": "example.com",
        "ServerCertificateStatus": "on",
        "CertOrg": "Let's Encrypt",
        "DomainName": "example.com",
        "CertStartTime": "2018-06-03T22:03:39Z",
        "CertType": "free",
        "CertName": "example.com",
        "DomainCnameStatus": "ok",
        "ServerCertificate": "asdadaxxxx",
        "CertId": "9002448",
        "CertRegion": "cn-hangzhou"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

500

InternalError

The request processing has failed due to internal error.

403

SignatureDoesNotMatch

The signature we calculated does not match the one you provided. Please refer to the API reference about authentication for details.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeDomainCertificateInfo#workbench-doc-change-demo) for a complete list.
