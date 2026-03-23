Queries the information about the metadata index library of a bucket.

## Usage notes

If you want to query the information about the metadata index library of a bucket, you must have the `oss:GetMetaQueryStatus` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Request syntax

```
GET /?metaQuery HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue
```

## Request headers

All headers in this request are common request headers. For more information, see [Common Request Headers](/help/en/oss/developer-reference/common-http-headers).

## Response headers

All headers in the response are common response headers. For more information, see [Common Response Headers](/help/en/oss/developer-reference/common-http-headers).

## Response elements

**Element**

**Type**

**Example**

**Description**

MetaQueryStatus

Container

N/A

The container that stores metadata information.

Child nodes: State, Phase, CreateTime, and UpdateTime.

Phase

String

FullScanning

The scan type. Valid values:

-   FullScanning: Full scanning is in progress.
    
-   IncrementalScanning: Incremental scanning is in progress.
    

Parent node: MetaQueryStatus

State

String

Running

The status of the metadata index library. Valid values:

-   Ready: The metadata index library is being prepared after it is created.
    
    In this case, the metadata index library cannot be used to query data.
    
-   Stop: The metadata index library is paused.
    
-   Running: The metadata index library is running.
    
-   Retrying: The metadata index library failed to be created and is being created again.
    
-   Failed: The metadata index library failed to be created.
    
-   Deleted: The metadata index library is deleted.
    

Parent node: MetaQueryStatus

CreateTime

String

2021-08-02T10:49:17.289372919+08:00

The time when the metadata index library was created. The value follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ss+TIMEZONE format. YYYY-MM-DD indicates the year, month, and day. T indicates the beginning of the time element. HH:mm:ss indicates the hour, minute, and second. TIMEZONE indicates the time zone.

Parent node: MetaQueryStatus

UpdateTime

String

2021-08-02T10:49:17.289372919+08:00

The time when the metadata index library was updated. The value follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ss+TIMEZONE format. YYYY-MM-DD indicates the year, month, and day. T indicates the beginning of the time element. HH:mm:ss indicates the hour, minute, and second. TIMEZONE indicates the time zone.

Parent node: MetaQueryStatus

MetaQueryMode

String

basic

Retrieval modes:

-   basic: Scalar search
    
-   semantic: Vector search
    

Parent node: MetaQueryStatus

## Examples

Sample requests

```
GET /?metaQuery HTTP/1.1
Host: oss-example.oss-cn-hangzhou.aliyuncs.com
Date: Wed, 11 Sep 2024 13:08:38 GMT
Authorization: OSS qn6q**************:77Dv****************
```

Sample responses

```
HTTP/1.1 200 OK
x-oss-request-id: 5C1B138A109F4E405B2D****
Date: Wed, 11 Sep 2024 13:08:38 GMT
Content-Length: 118
Content-Type: application/xml
Connection: keep-alive
Server: AliyunOSS
<?xml version="1.0" encoding="UTF-8"?>
<MetaQueryStatus>
  <State>Running</State>
  <Phase>FullScanning</Phase>
  <CreateTime>2024-09-11T10:49:17.289372919+08:00</CreateTime>
  <UpdateTime>2024-09-11T10:49:17.289372919+08:00</UpdateTime>
  <MetaQueryMode>basic<MetaQueryMode>
</MetaQueryStatus>
```

## OSS SDKs

You can use OSS SDKs for the following programming languages to call GetMetaQueryStatus:

-   [Java](/help/en/oss/developer-reference/data-indexing-2)
    
-   [Python](/help/en/oss/developer-reference/manage-object-metadata-8)
    
-   [Go V2](/help/en/oss/developer-reference/data-indexing-3)
    

## **ossutil**

For information about the ossutil command that corresponds to the GetMetaQueryStatus operation, see [get-meta-query-status](/help/en/oss/developer-reference/get-meta-query-status).
