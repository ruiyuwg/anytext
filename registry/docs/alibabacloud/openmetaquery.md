Call the OpenMetaQuery operation to enable the metadata management feature for a bucket and select a retrieval mode. After you enable this feature, Object Storage Service (OSS) creates a metadata index library for the bucket. OSS then builds metadata indexes for all objects in the bucket. After the index library is created, OSS performs Near Real-Time incremental scans to track and build indexes for new objects.

## Notes

-   By default, an Alibaba Cloud account has the permission to enable the metadata management feature. If you want to use a Resource Access Management (RAM) user to enable this feature, make sure that the RAM user is granted the `oss:OpenMetaQuery` permission. For more information, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   For more information about data indexing, see [Data indexing](/help/en/oss/user-guide/data-indexing-overview/).
    

## Request syntax

```
POST /?metaQuery&comp=add&mode=basic HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue
```

## Request headers

This operation uses only common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Request elements

**Name**

**Type**

**Required**

**Example**

**Description**

mode

String

Yes

basic

The retrieval mode. Valid values:

-   basic (default): Scalar search
    
-   semantic: Semantic search
    

role

String

No

my-oss-role

The name of the RAM role used to access OSS. You can grant permissions to the role in the console to ensure secure access.

## Response headers

All headers in the response to a DescribeRegions request are common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Examples

### **Request example**

```
POST /?metaQuery&comp=add&mode=basic HTTP/1.1
Host: oss-example.oss-cn-hangzhou.aliyuncs.com
Date: Thu, 17 Apr 2025 13:08:38 GMT
Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
```

### **Response example**

```
HTTP/1.1 200 OK
x-oss-request-id: 5C1B138A109F4E405B2D****
Date: Mon, 26 Jul 2021 13:08:38 GMT
Content-Length: 0
Connection: keep-alive
Server: AliyunOSS
x-oss-request-id: 5C06A3B67B8B5A3DA422299D
x-oss-server-time: 544
```

## SDK

You can call this operation using the following SDKs:

-   [Java](/help/en/oss/developer-reference/data-indexing-2)
    
-   [Python V2](/help/en/oss/developer-reference/data-indexing-using-oss-sdk-for-python-v2)
    
-   [Go V2](/help/en/oss/developer-reference/data-indexing-3)
    
-   [PHP V2](/help/en/oss/developer-reference/data-indexing-using-oss-sdk-for-php-v2)
    

## **ossutil command-line interface**

For information about the ossutil command that corresponds to the OpenMetaQuery operation, see [open-meta-query](/help/en/oss/developer-reference/open-meta-query).
