Maps a custom domain name to a bucket.

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Description**

PutCname

oss:PutCname

Maps a custom domain name to a bucket.

yundun-cert:DescribeSSLCertificatePrivateKey

When mapping a custom domain name to a bucket, if a certificate is attached, these three operation permissions are required.

yundun-cert:DescribeSSLCertificatePublicKeyDetail

yundun-cert:CreateSSLCertificate

## Request syntax

```
POST /?cname&comp=add HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Content-Type: application/xml
Content-Length: 186
Date: GMT Date
Authorization: SignatureValue
<BucketCnameConfiguration>
  <Cname>
    <Domain>example.com</Domain>
  </Cname>
</BucketCnameConfiguration>
```

## Request headers

All request headers in a PutCname request are common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Request elements

**Element**

**Type**

**Required**

**Example**

**Description**

BucketCnameConfiguration

Container

Yes

N/A

The container that stores the CNAME record.

Parent nodes: none

Child nodes: Cname

Cname

Container

Yes

N/A

The container that stores the CNAME information.

Parent nodes: BucketCnameConfiguration

Child nodes: Domain

Domain

String

Yes

example.com

The custom domain name.

Parent nodes: Cname

Child nodes: none

CertificateConfiguration

Container

No

N/A

The container for which the certificate is configured.

Parent nodes: Cname

Child nodes: CertId, Certificate, PrivateKey, PreviousCertId, Force, and DeleteCertificate

CertId

String

No

493\*\*\*\*-cn-hangzhou

The ID of the certificate.

Parent nodes: CertificateConfiguration

Child nodes: none

Certificate

String

No

\-----BEGIN CERTIFICATE----- MIIDhDCCAmwCCQCFs8ixARsyrDANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMC \*\*\*\* -----END CERTIFICATE-----

The public key of the certificate.

Parent nodes: CertificateConfiguration

Child nodes: none

PrivateKey

String

No

\-----BEGIN CERTIFICATE----- MIIDhDCCAmwCCQCFs8ixARsyrDANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMC \*\*\*\* -----END CERTIFICATE-----

The private key of the certificate.

Parent nodes: CertificateConfiguration

Child nodes: none

PreviousCertId

String

No

493\*\*\*\*-cn-hangzhou

The ID of the certificate. If the Force parameter is not set to true, the OSS server checks whether the value of the Force parameter matches the current certificate ID. If the value does not match the certificate ID, an error is returned.

**Important**

If you do not specify the PreviousCertId parameter when you bind a certificate, you must set the Force parameter to true.

Parent nodes: CertificateConfiguration

Child nodes: none

Force

String

No

true

Specifies whether to overwrite the certificate. Valid values:

-   true: overwrites the certificate.
    
-   false: does not overwrite the certificate.
    

Parent nodes: CertificateConfiguration

Child nodes: none

DeleteCertificate

String

No

true

Specifies whether to delete the certificate. Valid values:

-   true: deletes the certificate.
    
-   false: does not delete the certificate.
    

Parent nodes: CertificateConfiguration

Child nodes: none

## Response headers

All headers in the response to a PutCname request are common response headers. For more information, see [Common Response Headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Examples

-   Sample requests
    
    -   Map a domain name
        
        ```
        POST /?cname&comp=add HTTP/1.1
        Host: oss-example.oss-cn-hangzhou.aliyuncs.com
        Content-Type: application/xml
        Content-Length: 186
        Date: Thu, 24 Sep 2015 15:39:12 GMT
        Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,AdditionalHeaders=host,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
        <BucketCnameConfiguration>
          <Cname>
            <Domain>example.com</Domain>
          </Cname>
        </BucketCnameConfiguration>
        ```
        
    -   Bind a certificate to the domain name
        
        ```
        POST /?cname&comp=add HTTP/1.1
        Host: oss-example.oss-cn-hangzhou.aliyuncs.com
        Content-Type: application/xml
        Content-Length: 186
        Date: Thu, 24 Sep 2015 15:39:12 GMT
        Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,AdditionalHeaders=host,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
        <BucketCnameConfiguration>
          <Cname>
            <Domain>example.com</Domain>
            <CertificateConfiguration>
              <CertId>493****-cn-hangzhou</CertId>
              <Certificate>-----BEGIN CERTIFICATE----- MIIDhDCCAmwCCQCFs8ixARsyrDANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMC **** -----END CERTIFICATE-----</Certificate>
              <PrivateKey>-----BEGIN CERTIFICATE----- MIIDhDCCAmwCCQCFs8ixARsyrDANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMC **** -----END CERTIFICATE-----</PrivateKey>
              <PreviousCertId>493****-cn-hangzhou</PreviousCertId>
              <Force>true</Force>
            </CertificateConfiguration>
          </Cname>
        </BucketCnameConfiguration>
        ```
        
    -   Unbind a certificate from the domain name
        
        If you do not want the domain name to continue using the certificate, you can unbind the certificate.
        
        ```
        POST /?cname&comp=add HTTP/1.1
        Host: oss-example.oss-cn-hangzhou.aliyuncs.com
        Content-Type: application/xml
        Content-Length: 186
        Date: Thu, 24 Sep 2015 15:39:12 GMT
        Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,AdditionalHeaders=host,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
        <BucketCnameConfiguration>
          <Cname>
            <Domain>example.com</Domain>
              <CertificateConfiguration>
              <DeleteCertificate>True</DeleteCertificate>
            </CertificateConfiguration>
          </Cname>
        </BucketCnameConfiguration>
        ```
        
-   Sample success responses
    
    ```
    content-length: 0
    x-oss-console-auth: success
    server: AliyunOSS
    x-oss-server-time: 980
    connection: keep-alive
    x-oss-request-id: 5C1B138A109F4E405B2D
    date: Wed, 15 Sep 2021 03:33:37 GMT
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call PutCname:

-   [Java](/help/en/oss/developer-reference/map-custom-domain-names-14)
    
-   [Python V2](/help/en/oss/developer-reference/bind-custom-domain-using-oss-sdk-for-python-v2)
    
-   [Go V2](/help/en/oss/developer-reference/v2-map-custom-domain-names)
    
-   [Node.js](/help/en/oss/developer-reference/use-custom-domain-names)
    

## **ossutil**

For information about the ossutil command that corresponds to the PutCname operation, see [put-cname](/help/en/oss/developer-reference/put-cname).

## Error codes

**Error code**

**HTTP status code**

**Description**

InvalidArgument

400

The error message returned because the format of the CNAME record is invalid. You can view the error fields and the cause of error in the XML content that is returned.

NeedVerifyDomainOwnership

403

The error message returned because the ownership of the domain name is not verified.

Perform the following steps to verify the ownership of a domain name :

1.  Call the [CreateCnameToken](/help/en/oss/developer-reference/createcnametoken#reference-2210351) operation to create a CNAME token that is used to verify the ownership of a domain name.
    
    **Note**
    
    By default, a CNAME token expires within 72 hours after it is created. If a new CNAME token is created within the validity period of the existing token, the existing CNAME token is returned.
    
2.  Add a TXT record in the system of your domain name provider.
    
    For example, add a TXT record for the custom domain `example.com`. When you add a record, select TXT as the record type, enter \_dnsauth.example as the host record, and enter the CNAME token returned from [Step 1](#li-yw4-iem-x80) as the record value. Keep the default settings for other parameters. For more information about how to add a CNAME record, see the "Manually add a CNAME record" section in the [Map custom domain names](/help/en/oss/manage-a-domain-map-custom-domain-names#section-6de-13t-9cr) topic.
    
    **Note**
    
    After you add a TXT record, the TXT record requires several minutes to take effect.
    
3.  Call the PutCname operation to map a custom domain name.
    

CnameDenied

403

The error message returned because the domain name is in use.

CnameIsForbidden

403

The error message returned because the domain name is reserved for OSS and cannot be mapped.

CnameIsRisk

403

The error message returned because the domain name is a high-risk domain name and cannot be mapped.

NoSuchCnameInRecord

404

The error message returned because the specified domain name does not have an ICP license. For more information about how to apply for an ICP filing for a domain name, see [What is Domains?](/help/en/dws/product-overview/what-is-domains#concept-t42-dlv-12b).

CnameAlreadyExists

409

Possible causes:

-   The domain name is mapped to another bucket that belongs to the current account.
    
    Problem description: The value of the CnameType parameter in the returned error message is CNAME\_OSS.
    
-   The domain name is used for image processing.
    
    Problem description: The value of the CnameType parameter in the returned error message is CNAME\_IMG.
    

To solve the preceding issues, you must remove the mapping between the current domain name and the bucket. For more information, see the "CnameAlreadyExists" section in the [HTTP 409 status code](/help/en/oss/user-guide/http-status-code-409#section-p5a-h8b-3mh) topic.
