The OSS iOS SDK returns two types of exceptions: `ClientError` and `ServerError`.

-   **\`ClientError\`**: originates on the device — parameter validation failures, network issues, file I/O errors, and task cancellations.
    
-   **\`ServerError\`**: originates on the OSS server — the server received the request but returned an error HTTP status code.
    

This page covers all `ClientError` codes and common `ServerError` patterns. For the full list of OSS server-side error codes, see [OSS error codes](/help/en/oss/user-guide/overview-14#section-zzm-z5v-zi9).

## Client errors

All client errors share the error domain `com.aliyun.oss.clientError`.

**Code**

**Constant**

**Description**

**Resolution**

0

`OSSClientErrorCodeNetworkingFailWithResponseCode0`

Connection failed with response code 0.

Check network connectivity and retry.

1

`OSSClientErrorCodeSignFailed`

Request signature failed.

See [Troubleshoot signature errors](/help/en/oss/developer-reference/faq-24#concept-op3-h2s-xgb).

2

`OSSClientErrorCodeFileCantWrite`

Failed to write to the file.

The breakpoint record path or download destination path is invalid. Correct the file path and retry.

3

`OSSClientErrorCodeInvalidArgument`

Invalid parameter value or format.

Check the parameter format against the [API reference](/help/en/oss/developer-reference/list-of-operations-by-function#reference-wrz-l2q-tdb) and correct the value.

4

`OSSClientErrorCodeNilUploadid`

Failed to get the `uploadId` for a resumable upload.

Verify that parameters such as `objectMeta` are correct, then retry.

5

`OSSClientErrorCodeTaskCancelled`

Task was canceled.

Check whether your cancellation logic is intentional or triggered by a network issue.

6

`OSSClientErrorCodeNetworkError`

Network exception.

Check network connectivity and retry.

7

`OSSClientErrorCodeInvalidCRC`

Cyclic redundancy check (CRC) failed.

Data inconsistency occurred during transfer. Verify that the file was not modified during transfer and retry.

8

`OSSClientErrorCodeCannotResumeUpload`

Resumable upload cannot continue.

The file changed during upload, causing a size mismatch. Do not modify the file while an upload is in progress.

9

`OSSClientErrorCodeExcpetionCatched`

Exception caught.

Check the full error message for details and troubleshoot accordingly.

## Server errors

Server errors use the error domain `com.aliyun.oss.serverError`. The error code is `-1 × httpResponse.statusCode` and the `UserInfo` dictionary contains the parsed XML response body.

The server may have encountered an error and could not complete the request. For more information, see [OSS error codes](/help/en/oss/user-guide/overview-14#section-zzm-z5v-zi9).
