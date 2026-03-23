Disables the metadata management feature for an Object Storage Service (OSS) bucket. After the metadata management feature is disabled for a bucket, OSS automatically deletes the metadata index library of the bucket. After the metadata index library is deleted, you cannot perform metadata indexing.

## Usage notes

-   To disable the metadata management feature for a bucket, you must have the `oss:CloseMetaQuery` permission. For more information, see [Common examples of RAM policies](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   HTTP status code 200 is returned when you call the CloseMetaQuery operation to disable the metadata management feature, regardless of whether the metadata management feature is enabled for a bucket.
    
-   This operation is an asynchronous operation and does not immediately take effect. After you call the CloseMetaQuery operation, it takes some time for OSS to delete the metadata index library.
    

## Request syntax

```
POST /?metaQuery&comp=delete HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue
```

## Request headers

All headers in a DescribeRegions request are common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Response headers

All headers in the response to a DescribeRegions request are common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Examples

Sample request

```
POST /?metaQuery&comp=delete HTTP/1.1
Host: oss-example.oss-cn-hangzhou.aliyuncs.com
Date: Mon, 26 Jul 2021 13:08:38 GMT
Authorization: OSS qn6q**************:77Dv**************** 
```

Sample response

```
HTTP/1.1 200 OK
x-oss-request-id: 5C1B138A109F4E405B2D****
Date: Mon, 26 Jul 2021 13:08:38 GMT
Content-Length: 0
Connection: keep-alive
Server: AliyunOSS
x-oss-server-time: 178
```

## OSS SDKs

You can use OSS SDKs for the following programming languages to call CloseMetaQuery:

-   [Java](/help/en/oss/developer-reference/data-indexing-2)
    
-   [Python](/help/en/oss/developer-reference/manage-object-metadata-8)
    
-   [Go V2](/help/en/oss/developer-reference/data-indexing-3)
    

## **ossutil**

For information about the ossutil command that corresponds to the CloseMetaQuery operation, see [close-meta-query](/help/en/oss/developer-reference/close-meta-query).

## Error codes

**Error code**

**HTTP status code**

**Description**

AccessDenied

403

You do not have permissions to access the bucket. Make sure that the RAM user is granted permissions to access the bucket.

NoSuchBucket

404

The destination bucket does not exist. Specify a valid bucket name.
