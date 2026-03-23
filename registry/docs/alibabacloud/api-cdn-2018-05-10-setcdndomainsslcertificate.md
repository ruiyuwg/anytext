Enables or disables the certificate for a domain name and updates the certificate information.

## Operation description

-   You can call this operation up to 30 times per second per account.
    
-   Method: POST.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/SetCdnDomainSSLCertificate)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/SetCdnDomainSSLCertificate)

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

cdn:SetCdnDomainSSLCertificate

update

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

The accelerated domain name for which you want to configure the SSL certificate. The type of request supported by the domain name must be HTTPS. You can specify only one domain name in each request.

example.com

CertName

string

No

The name of the certificate. You can specify only one certificate name. This parameter is optional if you set CertType to upload.

yourCertName

CertId

integer

No

The ID of the certificate. This parameter is required if you set CertType to cas.

8089870

CertType

string

No

The type of the certificate. Valid values:

-   **upload**: custom certificate
    
-   **cas**: a certificate that is acquired through Certificate Management Service.
    

upload

SSLProtocol

string

Yes

Specifies whether to enable the SSL certificate.

-   **on**
    
-   **off**
    

off

SSLPub

string

No

The certificate content. Specify the certificate content only if you want to enable the certificate.

xxx

SSLPri

string

No

The private key. Specify the private key only if you want to enable the certificate.

y\*\*\*\*

CertRegion

string

No

The region of the certificate. This parameter takes effect only when **CertType is set to cas**. Valid values: **cn-hangzhou** and **ap-southeast-1**. Default value: **cn-hangzhou**. **ap-southeast-1** is recommended for users on the International site.

**Valid values:**

-   ap-southeast-1 :
    
    ap-southeast-1
    
-   cn-hangzhou :
    
    cn-hangzhou
    

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

A7C69682-7F88-40DD-A198-10D0309E439D

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A7C69682-7F88-40DD-A198-10D0309E439D\n"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidSSLProtocol.ValueNotSupported

The specified SSLProtocol is invalid.

400

SSLPub.MissingParameter

The SSLPub parameter is required.

400

SSLPri.MissingParameter

The SSLPri parameter is required.

400

InvalidSSLPub

The specified SSLPub is invalid.

400

InvalidSSLPri

The specified SSLPri is invalid.

400

Certificate.MissMatch

The SSLPri does not match the certificate.

400

InvalidCertificate.TooLong

The maximum length of the certificate is exceeded.

400

InvalidCertName.TooLong

The length of the certificate name cannot exceed 128 characters.

400

AuthenticationFailed

Error performing verification.

400

SetDomainCertificate.ParameterError

The specified parameters are invalid.

The specified parameter is invalid.

400

Certificate.StatusError

The status of the certificate is invalid.

400

DeleteFailed

Error deleting the certificate.

400

Certificate.NotFind

The certificate does not exist.

400

Certificate.Duplicated

The certificate name already exists.

400

Certificate.FormatError

The format of the certificate is invalid.

The specified certificate is invalid.

400

Certificate.KeyNull

The private key is required.

400

Key.Malformed

The specified Key format is invalid.

400

CertStorage.failed

Error saving the certificate.

400

CertificateContent.Duplicated

The certificate has been uploaded; do not upload again.

400

Certificate.Expired

The certificate has expired.

400

InvalidDomain.notOnline

The domain is offline. Check the status of the domain and try again later.

400

Decode.Error

Error decoding the SSLPub or SSLPri certificate.

400

sslPub.Error

Error encoding SSLPub.

400

sslPri.Error

Error encoding SSLPri.

400

DomainInSafeMode

The domain is in safe mode. To request permission, contact Customer Service.

400

CreateCertificateFailed

Create certificate failed,please try again.

400

Abs.CertRegion.ValueNotSupported

CertRegion is not supported.

The certificate region is not supported.

400

CertNameAlreadyExists

The CertName already exists.

The certificate name already exists.

400

InvalidDomain.Offline

The domain provided is offline.

The domain name is disabled.

400

InvalidEnv

The specified Env is invalid.

The specified Env is invalid.

403

DomainInProtectedMode

The domain is in protection mode. To request permission, contact Customer Service.

404

CertName.MissingParameter

You must specify CertName.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/SetCdnDomainSSLCertificate#workbench-doc-change-demo) for a complete list.
