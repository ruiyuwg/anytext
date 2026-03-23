Queries all CNAME records that are mapped to a bucket.

## Request syntax

```
GET /?cname HTTP/1.1
Host: oss-example.oss-cn-hangzhou.aliyuncs.com
Content-Type: application/xml
Content-Length: 186
Date: Thu, 17 Apr 2025 15:39:12 GMT
Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,AdditionalHeaders=content-length,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
```

## Request headers

All headers in a ListCname request are common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Response headers

All headers in the response to a ListCname request are common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Response elements

**Element**

**Type**

**Example**

**Description**

ListCnameResult

Container

N/A

The container that is used to query information about all CNAME records.

Parent nodes: none

Child nodes: Bucket, Owner, and Cname

Bucket

String

examplebucket

The name of the bucket to which the CNAME records you want to query are mapped.

Parent nodes: ListCnameResult

Child nodes: none

Owner

String

testowner

The name of the bucket owner.

Parent nodes: ListCnameResult

Child nodes: none

Cname

Container

N/A

The container that is used to store the information about all CNAME records.

Parent nodes: ListCnameResult

Child nodes: Domain, LastModified, Status, and Certificate

Domain

String

example.com

The custom domain name.

Parent nodes: Cname

Child nodes: none

LastModified

String

2021-09-15T02:35:07.000Z

The time when the custom domain name was mapped.

Parent nodes: Cname

Child nodes: none

Status

String

Enabled

The status of the domain name. Valid values:

-   Enabled:: The domain name is enabled.
    
-   Disabled: The domain name is disabled.
    

Parent nodes: Cname

Child nodes: none

Certificate

Container

N/A

The container in which the certificate information is stored.

Parent nodes: Cname

Child nodes: Type, CertId, Status, CreationDate, Fingerprint, ValidStartDate, and ValidEndDate

Type

String

CAS

The source of the certificate. Valid values:

-   CAS: The certificate that is obtained by using SSL Certificates Service.
    
-   Upload: The certificate that is uploaded by the user to the earlier version of the certificate hosting service.
    

Parent nodes: Certificate

Child nodes: none

CertId

String

493\*\*\*\*-cn-hangzhou

The ID of the certificate.

Parent nodes: Certificate

Child nodes: none

Status

String

Enabled

The status of the certificate. Valid values:

-   Enabled: The certificate is used.
    
-   Disabled: The certificate is not used.
    

Parent nodes: Certificate

Child nodes: none

CreationDate

String

Wed, 15 Sep 2021 02:35:06 GMT

The time when the certificate was bound.

Parent nodes: Certificate

Child nodes: none

Fingerprint

String

DE:01:CF:EC:7C:A7:98:CB:D8:6E:FB:1D:97:EB:A9:64:1D:4E:\*\*:\*\*

The signature of the certificate.

Parent nodes: Certificate

Child nodes: none

ValidStartDate

String

Wed, 12 Apr 2023 10:14:51 GMT

The time when the certificate takes effect.

Parent nodes: Certificate

Child nodes: none

ValidEndDate

String

Mon, 4 May 2048 10:14:51 GMT

The time when the certificate expires.

Parent nodes: Certificate

Child nodes: none

## Examples

-   Sample request
    
    ```
    GET /?cname HTTP/1.1
    Host: oss-example.oss-cn-hangzhou.aliyuncs.com
    Content-Type: application/xml
    Content-Length: 186
    Date: Tues, 11 May 2022 11:39:12 GMT
    Authorization: OSS qn6q**************:77Dv****************
    ```
    
-   Sample response
    
    ```
    content-length: 1855
    x-oss-console-auth: success
    server: AliyunOSS
    x-oss-server-time: 7
    connection: keep-alive
    x-oss-request-id: 614169F1AE63BD37355CA12B
    date: Tues, 11 May 2022 11:39:12 GMT
    content-type: application/xml
    <?xml version="1.0" encoding="UTF-8"?>
    <ListCnameResult>
      <Bucket>targetbucket</Bucket>
      <Owner>testowner</Owner>
      <Cname>
        <Domain>example.com</Domain>
        <LastModified>2021-09-15T02:35:07.000Z</LastModified>
        <Status>Enabled</Status>
        <Certificate>
          <Type>CAS</Type>
          <CertId>493****-cn-hangzhou</CertId>
          <Status>Enabled</Status>
          <CreationDate>Wed, 15 Sep 2021 02:35:06 GMT</CreationDate>
          <Fingerprint>DE:01:CF:EC:7C:A7:98:CB:D8:6E:FB:1D:97:EB:A9:64:1D:4E:**:**</Fingerprint>
          <ValidStartDate>Wed, 12 Apr 2023 10:14:51 GMT</ValidStartDate>
          <ValidEndDate>Mon, 4 May 2048 10:14:51 GMT</ValidEndDate>
        </Certificate>
      </Cname>
      <Cname>
        <Domain>example.org</Domain>
        <LastModified>2021-09-15T02:34:58.000Z</LastModified>
        <Status>Enabled</Status>
      </Cname>
      <Cname>
        <Domain>example.edu</Domain>
        <LastModified>2021-09-15T02:50:34.000Z</LastModified>
        <Status>Enabled</Status>
      </Cname>
    </ListCnameResult>
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call ListCname:

-   [Java](/help/en/oss/developer-reference/map-custom-domain-names-14)
    
-   [Python V2](/help/en/oss/developer-reference/bind-custom-domain-using-oss-sdk-for-python-v2)
    
-   [Go V2](/help/en/oss/developer-reference/v2-map-custom-domain-names)
    
-   [Node.js](/help/en/oss/developer-reference/use-custom-domain-names)
    
-   [PHP V2](/help/en/oss/developer-reference/php-v2-map-custom-domain-names)
    

## **ossutil**

For information about the ossutil command that corresponds to the ListCname operation, see [list-cname](/help/en/oss/developer-reference/list-cname).

## Error codes

**Error code**

**HTTP status code**

**Description**

AccessDenied

403

The error message returned because you do not have the permissions to call the ListCname operation. Only the bucket owner and RAM users that are granted the `oss:ListCname` permission can query all CNAME records mapped to the bucket.

NoSuchCname

404

The error message returned because no CNAME record is mapped to the bucket.
