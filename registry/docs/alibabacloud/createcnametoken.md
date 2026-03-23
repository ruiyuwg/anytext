Creates a CNAME token to verify the ownership of the domain name.

**Note**

By default, a CNAME token expires within 72 hours after it is created. If a new CNAME token is created within the validity period of the existing token, the existing CNAME token is returned.

## Request syntax

```
POST /?cname&comp=token HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Content-Type: application/xml
Content-Length: 186
Date: GMT Date
Authorization: SignatureValue
```

## Request headers

The request headers in a RestoreObject request are only common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

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

The container in which the CNAME information is stored.

Parent nodes: BucketCnameConfiguration

Child nodes: Domain

Domain

String

Yes

example.com

The custom domain name.

Parent nodes: Cname

Child nodes: none

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

The CNAME token that is returned by Object Storage Service (OSS).

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
    POST /?cname&comp=token HTTP/1.1
    Host: oss-example.oss-cn-hangzhou.aliyuncs.com
    Content-Type: application/xml
    Content-Length: 186
    Date: Thu, 24 Sep 2015 15:39:12 GMT
    Authorization: OSS qn6q**************:77Dv****************
    
    <BucketCnameConfiguration>
      <Cname>
        <Domain>example.com</Domain>
      </Cname>
    </BucketCnameConfiguration>
    ```
    
-   Sample responses
    
    -   The CNAME token is created.
        
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
          <Bucket>examplebucket</Bucket>
          <Cname>example.com</Cname>;
          <Token>be1d49d863dea9ffeff3df7d6455****</Token>
          <ExpireTime>Wed, 23 Feb 2022 21:16:37 GMT</ExpireTime>
        </CnameToken>
        ```
        
    -   The number of CNAME tokens exceeds the limit.
        
        ```
        HTTP/1.1 400 Bad Request
        x-oss-request-id: 5C1B138A109F4E405B2D
        Date: Mon, 26 Jul 2021 13:08:38 GMT
        Content-Length: 118
        Content-Type: application/xml
        Connection: keep-alive
        Server: AliyunOSS
        <?xml version="1.0" encoding="UTF-8"?>
        <Error>
          <Code>TooManyCnameToken</Code>
          <Message>You have attempted to create more cname token than allowed.</Message>
          <RequestId>6215FD21DA0E27393F004E9E</RequestId>
          <HostId>127.0.0.1</HostId>
          <Bucket>examplebucket</Bucket>
        </Error>
        ```
        

## OSS SDKs

You can use OSS SDKs for the following programming languages to call CreateCnameToken:

-   [Java](/help/en/oss/developer-reference/map-custom-domain-names-14)
    
-   [Python](/help/en/oss/developer-reference/map-custom-domain-names-4)
    
-   [Go V2](/help/en/oss/developer-reference/v2-map-custom-domain-names)
    
-   [Node.js](/help/en/oss/developer-reference/use-custom-domain-names)
    
-   [PHP](/help/en/oss/developer-reference/map-custom-domain-names-3)
    

## **ossutil**

For information about the ossutil command that corresponds to the CreateCnameToken operation, see [create-cname-token](/help/en/oss/developer-reference/create-cname-token).

## Error codes

**Error code**

**HTTP status code**

**Description**

TooManyCnameToken

400

The error message returned because the number of tokens created for a bucket exceeds the upper limit 1000.

NoNeedCreateCnameToken

403

The error message returned because the CNAME token is in effect. You do not need to create a new CNAME token for the bucket.
