Queries the cross-origin resource sharing (CORS) rules of a bucket.

## Request structure

```
GET /? cors HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue
```

## Request headers

All headers in a DescribeRegions request are common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Response headers

All headers in the response to a DescribeRegions request are common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

CORSRule

Container

N/A

The container that stores CORS rules. Up to 10 rules can be configured for a bucket.

Parent nodes: CORSConfiguration

AllowedOrigin

String

\*

The sources from which cross-origin requests are allowed. If AllowedOrigin is set to an asterisk (\*), cross-origin requests from all sources are allowed.

Parent nodes: CORSRule

AllowedMethod

Enumeration (GET, PUT, DELETE, POST, and HEAD)

GET

The cross-origin request methods that are allowed.

Parent nodes: CORSRule

AllowedHeader

String

\*

Indicates whether the headers specified by Access-Control-Request-Headers in the OPTIONS preflight request are allowed. Each header specified by Access-Control-Request-Headers must match the value of an AllowedHeader element.

Parent nodes: CORSRule

ExposeHeader

String

x-oss-test

The response headers for allowed access requests from applications, such as an XMLHttpRequest object in JavaScript.

Parent nodes: CORSRule

MaxAgeSeconds

Integer

100

The period of time within which the browser can cache the response for an OPTIONS preflight request to specific resources. A CORS rule can contain only one MaxAgeSeconds parameter.

Unit: seconds

Parent nodes: CORSRule

CORSConfiguration

Container

N/A

The container that stores CORS configurations of the bucket.

Parent nodes: none

ResponseVary

Boolean

false

Indicates whether the Vary: Origin header was returned. Default value: false.

-   true: The Vary: Origin header is returned regardless whether the request is a cross-origin request or whether the cross-origin request succeeds.
    
-   false: The Vary: Origin header is not returned.
    

Parent nodes: CORSConfiguration

## Examples

Sample request

```
Get /? cors HTTP/1.1
Host: oss-example.oss-cn-hangzhou.aliyuncs.com  
Date: Thu, 17 Apr 2025 07:51:28 GMT
Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
```

Sample response

```
HTTP/1.1 200
x-oss-request-id: 50519080C4689A033D00****
Date: Thu, 13 Sep 2012 07:51:28 GMT
Connection: keep-alive
Content-Length: 218  
Server: AliyunOSS
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration>
    <CORSRule>
      <AllowedOrigin>*</AllowedOrigin>
      <AllowedMethod>GET</AllowedMethod>
      <AllowedHeader>*</AllowedHeader>
      <ExposeHeader>x-oss-test</ExposeHeader>
      <MaxAgeSeconds>100</MaxAgeSeconds>
    </CORSRule>
    <ResponseVary>false</ResponseVary>
</CORSConfiguration>
```

## OSS SDKs

You can use OSS SDKs for the following programming languages to call GetBucketCors:

-   [Java](/help/en/oss/developer-reference/cors-1#undefined)
    
-   [Python V2](/help/en/oss/developer-reference/cross-domain-resource-sharing-using-oss-sdk-for-python-v2)
    
-   [PHP V2](/help/en/oss/developer-reference/cross-domain-resource-sharing-for-php-sdk-v2)
    
-   [Go V2](/help/en/oss/developer-reference/cross-domain-resource-sharing-for-go-sdk-v2)
    
-   [C++](/help/en/oss/developer-reference/cors-10#undefined)
    
-   [C](/help/en/oss/developer-reference/cors-3#undefined)
    
-   [.NET](/help/en/oss/developer-reference/cors-9#undefined)
    
-   [Node.js](/help/en/oss/developer-reference/cors-8#section-f4k-x3e-px9)
    
-   [Ruby](/help/en/oss/developer-reference/cors-6#undefined)
    

## **ossutil**

For information about the ossutil command that corresponds to the GetBucketCors operation, see [get-bucket-cors](/help/en/oss/developer-reference/get-bucket-cors).

## Error codes

**Error code**

**HTTP status code**

**Description**

NoSuchBucket

404

The error message returned because the specified bucket does not exist.

NoSuchCORSConfiguration

404

The error message returned because the specified CORS rule does not exist.

AccessDenied

403

The error message returned because you are not authorized to perform this operation. Only the owner of a bucket can query the CORS rules configured for the bucket.
