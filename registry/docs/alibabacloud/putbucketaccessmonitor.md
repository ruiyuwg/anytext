Enables or disables access tracking for a bucket. If access tracking is enabled for a bucket, OSS records the last access time of objects in the bucket. In this case, you can configure lifecycle rules based on last access time to identify hot and cold data based on data access patterns and move cold data to a more cost-effective storage class.

## Usage notes

To enable or disable access tracking for a bucket, you must have the `oss:PutBucketAccessMonitor` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Request syntax

```
PUT /?accessmonitor HTTP/1.1
Host: BucketName.oss.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue 
<?xml version="1.0" encoding="UTF-8"?>
<AccessMonitorConfiguration>
  <Status>Enabled</Status>
</AccessMonitorConfiguration>
```

## Request headers

All headers in a DescribeRegions request are common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Request elements

**Element**

**Type**

**Required**

**Example**

**Description**

AccessMonitorConfiguration

Container

Yes

N/A

The access tracking configurations of the bucket.

Child nodes: Status

Status

String

Yes

Enabled

Specifies whether to enable access tracking for the bucket. Valid values:

-   Enabled: enables access tracking.
    
    OSS initially uses the time when access tracking is enabled as the last access time of objects in the bucket and updates the last access time of an object if the object is accessed.
    
    The last access time of an object is updated asynchronously. If an object is accessed several times within a period of 24 hours, only the first access operation on the object within the period updates the last access time. You can specify a lifecycle rule based on last access time for the bucket.
    
-   Disabled: disables access tracking.
    
    Access tracking can be disabled only if the bucket does not have a lifecycle rule that is based on last access time.
    

Parent nodes: AccessMonitorConfiguration

## Response headers

All headers in the response to a DescribeRegions request are common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Examples

Sample request

```
PUT /?accessmonitor HTTP/1.1
Host: oss-example.oss.aliyuncs.com
Date: Thu, 17 Apr 2025 13:08:38 GMT
Authorization: OSS4-HMAC-SHA256 Credential=LTAI********************/20250417/cn-hangzhou/oss/aliyun_v4_request,Signature=a7c3554c729d71929e0b84489addee6b2e8d5cb48595adfc51868c299c0c218e
<?xml version="1.0" encoding="UTF-8"?>
<AccessMonitorConfiguration>
  <Status>Enabled</Status>
</AccessMonitorConfiguration>
```

Sample response

```
HTTP/1.1 200 OK
x-oss-request-id: 5C1B138A109F4E405B2D****
Date: Mon, 26 Jul 2021 13:08:38 GMT
Content-Length: 0
Connection: keep-alive
Server: AliyunOSS
```

## **References**

-   For more information about lifecycle rules based on last access time, see [Lifecycle rules based on last access time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-access-time).
    
-   After access tracking is enabled, you can call the PutBucketLifecycle operation to configure a lifecycle rule based on last access time. For more information, see [PutBucketLifecycle](/help/en/oss/developer-reference/putbucketlifecycle).
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call PutBucketAccessMonitor:

-   [Java](/help/en/oss/developer-reference/access-tracking-2)
    
-   [Python V2](/help/en/oss/developer-reference/access-monitor-using-oss-sdk-for-python-v2)
    
-   [Go V2](/help/en/oss/developer-reference/v2-access-tracking)
    
-   [PHP V2](/help/en/oss/developer-reference/php-access-tracking)
    

## **ossutil**

For information about the ossutil command that corresponds to the PutBucketAccessMonitor operation, see [put-bucket-access-monitor](/help/en/oss/developer-reference/put-bucket-access-monitor).

## Error codes

**Error code**

**HTTP status code**

**Description**

MalformedXML

400

The access tracking configuration is invalid.

AccessMonitorDisableNotAllowed

400

The access tracking status cannot be set to Disabled because the bucket has a lifecycle rule based on last access time.

AccessDenied

403

You are not authorized to access the bucket.

NoSuchBucket

404

The bucket does not exist.
