Obtains the created CNAME token.

## Request syntax

```
GET /?comp=token&cname=example.com HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Content-Type: application/xml
Content-Length: 186
Date: GMT Date
Authorization: SignatureValue
```

## Request headers

All request headers in a GetCnameToken request are common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Response parameters

All headers in the response to a GetCnameToken request are common response headers. For more information, see [Common HTTP headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Response elements

**Element**

**Type**

**Example**

**Description**

CnameToken

Container

N/A

The container in which the CNAME token is stored.

Parent nodes: none

Child nodes: Bucket, Cname, Token, and ExpireTime

Bucket

String

examplebucket

The name of the bucket to which the CNAME record is mapped.

Parent nodes: CnameToken

Child nodes: none

Cname

String

example.com

The name of the CNAME record that is mapped to the bucket.

Parent nodes: CnameToken

Child nodes: none

Token

String

be1d49d863dea9ffeff3df7d6455\*\*\*\*

The CNAME token that is returned by OSS.

Parent nodes: CnameToken

Child nodes: none

ExpireTime

String

Wed, 23 Feb 2022 21:16:37 GMT

The time when the CNAME token expires.

Parent nodes: CnameToken

Child nodes: none

## Examples

-   Sample request
    
    ```
    GET /?comp=token&cname=example.com HTTP/1.1
    Host: oss-example.oss-cn-hangzhou.aliyuncs.com
    Content-Type: application/xml
    Content-Length: 186
    Date: Thu, 17 Apr 2025 15:39:12 GMT
    Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,AdditionalHeaders=content-length,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
    ```
    
-   Sample responses
    
    -   The CNAME token is not created or has expired.
        
        ```
        HTTP/1.1 404 Not Found
        x-oss-request-id: 5C1B138A109F4E405B2D
        Date: Mon, 26 Jul 2021 13:08:38 GMT
        Content-Length: 118
        Content-Type: application/xml
        Connection: keep-alive
        Server: AliyunOSS
        <?xml version="1.0" encoding="UTF-8"?>
        <Error>
          <Code>CnameTokenNotFound</Code>
          <Message>Cname token not found.</Message>
          <RequestId>6215FE05DA0E27393F005F0E</RequestId>
          <HostId>127.0.0.1</HostId>
          <Bucket>mybucket</Bucket>
          <Cname>example.com</Cname>
          <EC>0018-00000301</EC>
        </Error>
        ```
        
    -   The CNAME token is found.
        
        ```
        HTTP/1.1 200 OK
        x-oss-request-id: 5C1B138A109F4E405B2D
        Date: Mon, 26 Jul 2021 13:08:38 GMT
        Content-Length: 118
        Content-Type: application/xml
        Connection: keep-alive
        Server: AliyunOSS
        <?xml version="1.0" encoding="UTF-8"?>
        <CnameToken>
          <Bucket>mybucket</Bucket>
          <Cname>example.com</Cname>
          <Token>be1d49d863dea9ffeff3df7d6455****</Token>
          <ExpireTime>Wed, 23 Feb 2022 21:39:42 GMT</ExpireTime>
        </CnameToken>
        ```
        

## OSS SDKs

You can use OSS SDKs for the following programming languages to call GetCnameToken:

-   [Java](/help/en/oss/developer-reference/map-custom-domain-names-14)
    
-   [Python V2](/help/en/oss/developer-reference/bind-custom-domain-using-oss-sdk-for-python-v2)
    
-   [Go V2](/help/en/oss/developer-reference/v2-map-custom-domain-names)
    
-   [Node.js](/help/en/oss/developer-reference/use-custom-domain-names)
    
-   [PHP V2](/help/en/oss/developer-reference/php-v2-map-custom-domain-names)
    

## **ossutil**

For information about the ossutil command that corresponds to the GetCnameToken operation, see [get-cname-token](/help/en/oss/developer-reference/get-cname-token).

## Error codes

**Error code**

**HTTP status code**

**Description**

InvalidArgument

400

The CNAME record that you want to query is not included in the parameter list or the format of the CNAME record is invalid.

CnameTokenNotFound

404

The CNAME token is not created or has expired.
