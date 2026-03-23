When a request fails, OSS SDK for C returns error details in an `aos_status_s` struct. Use these details to determine whether to retry the request and to diagnose the root cause.

## Error response structure

All failed requests return an `aos_status_s` struct with the following fields.

**Field**

**Type**

**Description**

`code`

Integer

HTTP status code of the failed request

`error_code`

String

Error code returned by OSS

`error_msg`

String

Error message returned by OSS

`req_id`

String

UUID that uniquely identifies the request

The following example shows how to inspect these fields after a failed request:

```
/* Check whether the request succeeded */
if (resp_status->code < 200 || resp_status->code >= 300) {
    /* HTTP status code — use to determine error category */
    printf("HTTP status code: %d\n", resp_status->code);

    /* OSS error code — use to identify the specific error */
    printf("Error code: %s\n", resp_status->error_code);

    /* Human-readable error message */
    printf("Error message: %s\n", resp_status->error_msg);

    /* Request ID — provide this to Alibaba Cloud Support when reporting issues */
    printf("Request ID: %s\n", resp_status->req_id);
}
```

> **Note:** Save the request ID (`req_id`) when an error occurs. Alibaba Cloud Support uses this ID to look up the corresponding request logs.

## Timeout errors

Timeout errors occur when the connection or request times out. They are indicated by:

-   HTTP status code is **not** 2xx, **and**
    
-   `error_code` is `-992` (connection timeout) or `-995` (request timeout)
    

When a timeout occurs, retry the request. Use `aos_should_retry(aos_status_t *)` from `aos_status.h` to determine whether a retry is appropriate:

```
#include "aos_status.h"

/* aos_should_retry returns 1 if the error warrants a retry */
if (aos_should_retry(resp_status) == 1) {
    /* Retry the request */
}
```

## OSS error codes

OSS error codes are server-side errors returned in `error_code`. The following tables list common error codes grouped by HTTP status code.

### 4xx errors

**Error code**

**HTTP status code**

**Description**

`AccessDenied`

403

Access denied

`BucketAlreadyExists`

409

The bucket already exists

`BucketNotEmpty`

409

The bucket is not empty

`EntityTooLarge`

400

The entity size exceeds the maximum limit

`EntityTooSmall`

400

The entity size is below the minimum limit

`FileGroupTooLarge`

400

The file group size exceeds the maximum limit

`FilePartNotExist`

400

The part does not exist

`FilePartStale`

400

The part has expired

`InvalidArgument`

400

The parameter format is invalid

`InvalidAccessKeyId`

403

The AccessKey ID does not exist

`InvalidBucketName`

400

The bucket name is invalid

`InvalidDigest`

400

The digest is invalid

`InvalidObjectName`

400

The object name is invalid

`InvalidPart`

400

The part is invalid

`InvalidPartOrder`

400

The part sequence is invalid

`InvalidTargetBucketForLogging`

400

The logging target bucket is invalid

`MalformedXML`

400

The XML format is invalid

`MethodNotAllowed`

405

The method is not supported

`MissingArgument`

411

One or more required parameters are missing

`MissingContentLength`

411

The content length is missing

`NoSuchBucket`

404

The bucket does not exist

`NoSuchKey`

404

The object does not exist

`NoSuchUpload`

404

The multipart upload ID does not exist

`PreconditionFailed`

412

An error occurred during preprocessing

`RequestTimeTooSkewed`

403

The time difference between the client and OSS server exceeds 15 minutes

`RequestTimeout`

400

The request timed out

`SignatureDoesNotMatch`

403

The request signature does not match

`TooManyBuckets`

400

The number of buckets exceeds the limit

### 5xx errors

**Error code**

**HTTP status code**

**Description**

`InternalError`

500

An internal OSS error occurred

`NotImplemented`

501

The method is not implemented
