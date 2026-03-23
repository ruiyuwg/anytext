Configures the versioning state for a bucket.

## Usage notes

-   Before you configure the versioning state for a bucket, you must have the PutBucketVersioning permission.
    
-   A bucket can be in one of the following versioning states: disabled, enabled, or suspended. By default, versioning is disabled for a bucket.
    
-   If versioning is enabled for a bucket, OSS generates unique version IDs for all objects that are added to the bucket. In this case, OSS stores multiple versions of the objects.
    
-   If versioning is suspended for a bucket, OSS generates the version ID null for all objects that are added to the bucket. In this case, OSS does not store new versions for objects that are deleted or overwritten.
    

For more information about versioning, see [Versioning](/help/en/oss/user-guide/overview-78/).

## Request syntax

```
PUT /?versioning HTTP/1.1
Host: BucketName.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue
<?xml version="1.0" encoding="UTF-8"?>
<VersioningConfiguration>
    <Status>Enabled</Status>
</VersioningConfiguration>
```

## Request headers

All headers in a DescribeRegions request are common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

VersioningConfiguration

Container

Yes

N/A

The container that stores the versioning state of the bucket.

Child nodes: Status

Parent nodes: none

Status

String

Yes

Enabled

The versioning state of the bucket.

Parent nodes: VersioningConfiguration

Valid values:

-   Enabled: indicates that versioning is enabled for the bucket.
    
-   Suspended: indicates that versioning is suspended for the bucket.
    

## Response headers

All headers in the response to a DescribeRegions request are common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Examples

-   Sample requests for enabling versioning for a bucket
    
    ```
    PUT /?versioning HTTP/1.1
    Host: bucket-versioning.oss-cn-hangzhou.aliyuncs.com
    Date: Tue, 09 Apr 2019 02:20:12 GMT
    Authorization: OSS qn6q**************:77Dv****************
    <?xml version="1.0" encoding="UTF-8"?>
    <VersioningConfiguration>
        <Status>Enabled</Status>
    </VersioningConfiguration>
    ```
    
    Sample responses
    
    ```
    HTTP/1.1 200 OK
    x-oss-request-id: 5CAC015CB7AEADE01700****
    Date: Tue, 09 Apr 2019 02:20:12 GMT
    Content-Length: 0
    Connection: keep-alive
    Server: AliyunOSS
    ```
    
-   Sample requests for suspending versioning for a bucket
    
    ```
    PUT /?versioning HTTP/1.1
    Host: bucket-versioning.oss-cn-hangzhou.aliyuncs.com
    Date: Tue, 09 Apr 2019 02:28:18 GMT
    Authorization: OSS qn6q**************:77Dv****************
    <?xml version="1.0" encoding="UTF-8"?>
    <VersioningConfiguration>
        <Status>Suspended</Status>
    </VersioningConfiguration>
    ```
    
    Sample responses
    
    ```
    HTTP/1.1 200 OK
    x-oss-request-id: 5CAC0342B7AEADE01700****
    Date: Tue, 09 Apr 2019 02:28:18 GMT
    Content-Length: 0
    Connection: keep-alive
    Server: AliyunOSS
    ```
    

## OSS SDKs

You can use OSS SDKs for the following programming languages to call the PutBucketVersioning operation:

-   [Java](/help/en/oss/developer-reference/versioning-8#concept-265070)
    
-   [Python](/help/en/oss/developer-reference/manage-versioning-2#concept-265070)
    
-   [Go V2](/help/en/oss/developer-reference/v2-manage-versioning-3)
    
-   [C++](/help/en/oss/developer-reference/manage-versioning#concept-2331567)
    
-   [.NET](/help/en/oss/developer-reference/versioning-4#concept-2486979)
    
-   [Node.js](/help/en/oss/developer-reference/versioning-9#concept-2435967)
    

## **ossutil**

For information about the ossutil command that corresponds to the PutBucketVersioning operation, see [put-bucket-versioning](/help/en/oss/developer-reference/put-bucket-versioning).

## Error codes

**Error code**

**HTTP status code**

**Description**

AccessDenied

403

The error message returned because you do not have permissions to configure the versioning state for the bucket.

InvalidArgument

400

The error message returned because the versioning state that you want to configure is invalid. You can set the versioning state of a bucket to only Enabled or Suspended.
