If you do not enable real-time access of Archive objects, you can access Archive objects only after you restore them. Real-time access of Archive objects is not supported for Cold Archive and Deep Cold Archive objects. You can access Cold Archive and Deep Cold Archive objects only after you restore them. The following access operations are supported: GetObject, ProcessImage, CopyObject, UploadPartCopy, SelectObject, and PostProcessTask. This topic describes how to restore Archive, Cold Archive, and Deep Cold Archive objects to access these objects.

## **Prerequisites**

-   The storage class of the object that you want to restore is Archive, Cold Archive, or Deep Cold Archive. For more information, see [Storage classes](/help/en/oss/user-guide/overview-53/).
    
-   You are granted the `oss:RestoreObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Usage notes

-   The RestoreObject operation applies only to Archive, Cold Archive, and Deep Cold Archive objects. This operation does not apply to Standard or Infrequent Access (IA) objects.
    
-   When you call non-access operations, such as `DeleteObject`, `DeleteMultipleObjects`, `GetObjectMeta`, and `HeadObject`, on Archive, Cold Archive, and Deep Cold Archive objects, you do not need to restore the objects. For the preceding operations, unnecessary fees are incurred if the objects are restored.
    
-   The first time you call the RestoreObject operation on an Archive object, a Cold Archive object, or a Deep Cold Archive object, the HTTP status code 202 is returned. When you call the RestoreObject operation on an object that is restored, 200 OK is returned.
    
-   If you call the RestoreObject operation on an object in the restoring state, the operation fails and the HTTP status code 409 is returned. After the object is restored, you can call the RestoreObject operation on the object again.
    
-   In a versioning-enabled bucket, the storage classes of different versions of an object can be different. By default, when you call the RestoreObject operation on an object, the current version of the object is restored. You can specify a version ID in the request to restore a specific version of an object.
    

## Process

The following restoration process applies to Archive, Cold Archive, and Deep Cold Archive objects:

1.  Initially, the object is in the frozen state.
    
2.  After a request is submitted to restore the object, the object enters the restoring state.
    
3.  After the OSS server completes the restoration task, the object enters the restored state and can be accessed.
    
4.  You can initiate another restoration request on the object in the restored state to extend the duration of the restored state of the object. The duration of the restored state of an object cannot exceed the maximum duration supported for the corresponding storage class.
    
5.  After the duration of the restored state ends, the object returns to the frozen state.
    

## **Restoration time**

The following table describes the time required to restore objects in different storage classes. The given amounts of restoration time are for references. The restoration time may vary based on actual scenarios.

**Storage class**

**Restoration time**

Archive

1 minute

Cold Archive

-   Expedited: within 1 hour
    
-   Standard: 2 to 5 hours
    
-   Bulk: 5 to 12 hours
    

Deep Cold Archive

-   Expedited: within 12 hours
    
-   Standard: within 48 hours
    

## **Duration of the restored state**

The following table describes the duration of the restored state of objects in different storage classes.

**Storage class**

**Duration of the restored state**

Archive

An integer from 1 to 7. Unit: days.

Cold Archive

An integer from 1 to 365. Unit: days.

Deep Cold Archive

An integer from 1 to 365. Unit: days.

## Billing rules

-   You are charged data retrieval fees based on the size of the restored Archive, Cold Archive, or Deep Cold archive objects. For more information, see [Data processing fees](/help/en/oss/data-processing-fees#concept-2558464).
    
-   You are charged API operation calling fees based on the number of PUT requests when you restore Archive objects. For more information, see [API operation calling fees](/help/en/oss/api-operation-calling-fees).
    
-   You are charged data retrieval requests when you restore Cold Archive or Deep Cold Archive objects. For more information, see [API operation calling fees](/help/en/oss/api-operation-calling-fees).
    
-   You are charged storage fees based on billing rules for Archive, Cold Archive, and Deep Cold Archive objects during and after the restoration. For more information, see [Storage fees](/help/en/oss/storage-fees).
    
-   When you restore a Cold Archive or Deep Cold Archive object, a Standard replica of the object is generated for temporary access. You are charged for the temporary storage of the replica based on the Standard storage class until the Cold Archive or Deep Cold Archive object returns to the frozen state. For more information, see [Temporary storage fees](/help/en/oss/temporary-storage-fees#concept-2558617).
    
-   An Archive object can remain in the restored state for up to seven days. A Cold Archive or Deep Cold Archive object can remain in the restored state for up to 365 days. You are not charged data retrieval fees when an object is in the restored state.
    
-   After the period of time during which an object is in the restored state ends, the object returns to the frozen state. If you restore the object after it returns to the frozen state, you are charged data retrieval fees.
    

## Request syntax

```
POST /ObjectName?restore HTTP/1.1
Host: archive-bucket.oss-cn-hangzhou.aliyuncs.com
Date: GMT Date
Authorization: SignatureValue
```

## Request headers

The request headers in a RestoreObject request are only common request headers. For more information, see [Common request headers](/help/en/oss/developer-reference/common-http-headers#section-eq1-b2y-wdb).

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

RestoreRequest

Container

Yes

N/A

The container that stores information about the RestoreObject request.

Child nodes: Days and JobParameters

Days

Integer

Yes

2

The duration within which the object remains in the restored state.

-   Valid values for Archive objects: 1 to 7. Unit: days.
    
-   Valid values for Cold Archive and Deep Cold Archive objects: 1 to 365. Unit: days.
    

Parent nodes: RestoreRequest

JobParameters

Container

No

N/A

The container that stores the restoration priority. This parameter is valid only when you restore Cold Archive or Deep Cold Archive objects.

If you do not specify the JobParameters parameter, the default restoration priority Standard is used.

Parent nodes: RestoreRequest

Child nodes: Tier

Tier

String

No

Standard

The restoration priority of a Cold Archive or Deep Cold Archive object. Valid values:

-   Cold Archive objects
    
    -   Expedited: The object is restored within 1 hour.
        
    -   Standard: The object is restored within 2 to 5 hours.
        
    -   Bulk: The object is restored within 5 to 12 hours.
        
-   Deep Cold Archive Objects
    
    -   Expedited: The object is restored within 12 hours.
        
    -   Standard (default): The object is restored within 48 hours.
        

Parent nodes: JobParameters

## Response headers

**Header**

**Type**

**Example**

**Description**

x-oss-object-restore-priority

String

Standard

The restoration priority. This header is displayed only for the Cold Archive or Deep Cold Archive object in the restored state.

x-oss-version-id

String

CAEQNRiBgMClj7qD0BYiIDQ5Y2QyMjc3NGZkODRlMTU5M2VkY2U3MWRiNGRh\*\*\*\*

The version ID of the object. This header is displayed only when a version ID of the object is specified in the request.

The response to a RestoreObject request contains common response headers. For more information, see [Common response headers](/help/en/oss/developer-reference/common-http-headers#section-hcd-m2y-wdb).

## Examples

-   Initiate a RestoreObject request for an Archive object in the frozen state for the first time
    
    Sample request
    
    ```
    POST /oss.jpg?restore HTTP/1.1
    Host: oss-archive-example.oss-cn-hangzhou.aliyuncs.com
    Date: Sat, 15 Apr 2017 07:45:28 GMT
    Authorization: OSS qn6q**************:77Dv****************
    ```
    
    Sample success response
    
    ```
    HTTP/1.1 202 Accepted
    Date: Sat, 15 Apr 2017 07:45:28 GMT
    Content-Length: 0
    Connection: keep-alive
    Server: AliyunOSS
    x-oss-request-id: 5374A2880232A65C23002D74
    ```
    
-   Initiate a RestoreObject request for an Archive object in the restoring state
    
    Sample request
    
    ```
    POST /oss.jpg?restore HTTP/1.1
    Host: oss-archive-example.oss-cn-hangzhou.aliyuncs.com
    Date: Sat, 15 Apr 2017 07:45:29 GMT
    Authorization: OSS qn6q**************:77Dv****************
    ```
    
    Sample success response
    
    ```
    HTTP/1.1 409 Conflict
    Date: Sat, 15 Apr 2017 07:45:29 GMT
    Content-Length: 556
    Connection: keep-alive
    Server: AliyunOSS
    x-oss-request-id: 5374A2880232A65C23002D74
    <?xml version="1.0" encoding="UTF-8"?>
    <Error>
      <Code>RestoreAlreadyInProgress</Code>
      <Message>The restore operation is in progress.</Message>
      <RequestId>58EAF141461FB42C2B000008</RequestId>
      <HostId>10.101.XX.XX</HostId>
    </Error>
    ```
    
-   Initiate a RestoreObject request for an Archive object in the restored state
    
    Sample request
    
    ```
    POST /oss.jpg?restore HTTP/1.1
    Host: oss-archive-example.oss-cn-hangzhou.aliyuncs.com
    Date: Sat, 15 Apr 2017 07:45:29 GMT
    Authorization: OSS qn6q**************:77Dv****************
    <RestoreRequest>
      <Days>2</Days>
    </RestoreRequest>
    ```
    
    Sample success response
    
    ```
    HTTP/1.1 200 Ok
    Date: Sat, 15 Apr 2017 07:45:30 GMT
    Content-Length: 0
    Connection: keep-alive
    Server: AliyunOSS
    x-oss-request-id: 5374A2880232A65C23002D74
    ```
    
-   Initiate a RestoreObject request for a Cold Archive or Deep Cold Archive object in the restored state
    
    Sample request
    
    ```
    POST /coldarchiveobject?restore HTTP/1.1
    Host: cold-archive-bucket.oss-cn-hangzhou.aliyuncs.com
    User-Agent: aliyun-sdk-go/v2.1.0 (Darwin/17.5.0/x86_64;go1.11.8)/ossutil-v1.6.12
    Content-Length: 99
    Authorization: OSS qn6q**************:77Dv****************
    Content-Type: text/plain; charset=utf-8
    Date: Tue, 21 Apr 2020 11:09:19 GMT
    Accept-Encoding: gzip
    <RestoreRequest>
      <Days>2</Days>
      <JobParameters>
        <Tier>Standard</Tier>
      </JobParameters>
    </RestoreRequest>
    ```
    
    Sample success response
    
    ```
    HTTP/1.1 200 OK
    Server: AliyunOSS
    Date: Tue, 21 Apr 2020 11:09:19 GMT
    Content-Length: 0
    Connection: keep-alive
    x-oss-request-id: 5E9ED45F093E2F3930318EA0
    x-oss-object-restore-priority: Standard
    x-oss-server-time: 10
    ```
    
-   Specify the version ID when you call the RestoreObject operation to restore an object
    
    Sample request
    
    ```
    POST /oss.jpg?restore&versionId=CAEQNRiBgMClj7qD0BYiIDQ5Y2QyMjc3NGZkODRlMTU5M2VkY2U3MWRiNGRh**** HTTP/1.1
    Host: oss-archive-example.oss-cn-hangzhou.aliyuncs.com
    Date: Tue, 09 Apr 2019 06:50:48 GMT
    Authorization: OSS qn6q**************:77Dv****************
    ```
    
    Sample success response
    
    ```
    HTTP/1.1 202 Accepted
    Date: Tue, 09 Apr 2019 06:50:48 GMT
    Content-Length: 0
    Connection: keep-alive
    Server: AliyunOSS
    x-oss-version-id: CAEQNRiBgMClj7qD0BYiIDQ5Y2QyMjc3NGZkODRlMTU5M2VkY2U3MWRiNGRh****
    x-oss-request-id: 5CAC40C8B7AEADE017000653
    ```
    

## SDK

You can use OSS SDKs for the following programming languages to call the RestoreObject operation:

-   [Java](/help/en/oss/developer-reference/restore-objects-3#concept-84846-zh)
    
-   [Python](/help/en/oss/developer-reference/restore-objects-1#concept-88467-zh)
    
-   [PHP](/help/en/oss/developer-reference/restore-objects-5#concept-88515-zh)
    
-   [Go V2](/help/en/oss/developer-reference/v2-restore-an-object)
    
-   [C](/help/en/oss/developer-reference/restore-archive-objects#concept-90491-zh)
    
-   [C++](/help/en/oss/developer-reference/restore-objects-8#concept-90491-zh)
    
-   [.NET](/help/en/oss/developer-reference/restore-objects-12#concept-91926-zh)
    
-   [Android](/help/en/oss/developer-reference/restore-an-archive-object#concept-2150681)
    
-   [iOS](/help/en/oss/developer-reference/restore-objects-4#concept-2056695)
    
-   [Node.js](/help/en/oss/developer-reference/restore-objects-11#concept-525793)
    

## **ossutil**

For information about the ossutil command that corresponds to the RestoreObject operation, see [restore-object](/help/en/oss/developer-reference/restore-object).

## Error codes

**Error code**

**HTTP status code**

**Description**

OperationNotSupported

400

The object cannot be restored because the storage class of the object is not Archive, Cold Archive, or Deep Cold Archive.

NoSuchKey

404

The specified object does not exist.

RestoreAlreadyInProgress

409

The RestoreObject operation is in progress. Do not repeatedly call the RestoreObject operation.

## **References**

-   For more information about the amount of time required for restoration and the number of days in which an object remains in the restored state, see [Restore objects](/help/en/oss/user-guide/restore-objects-for-access).
    
-   For more information about how to use ossutil to restore an object, see [restore](/help/en/oss/developer-reference/restore).
    
-   For more information about how to permanently retain an object in the restored state, see [What do I do to make an object permanently in the restored state?](/help/en/oss/how-can-i-make-an-oss-file-permanently-unfrozen)
