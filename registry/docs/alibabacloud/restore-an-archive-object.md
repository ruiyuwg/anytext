Archive, Cold Archive, and Deep Cold Archive objects must be restored before they can be read. Restoring an object is asynchronous — submitting the request returns HTTP 202, and the object becomes readable only after the restore completes. Restore time varies by storage class; see [RestoreObject](/help/en/oss/developer-reference/restoreobject) for details.

## Prerequisites

Before you begin, ensure that you have:

-   An OSSClient instance initialized. See [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib) for setup options, including a custom domain name and Security Token Service (STS)
    

## Restore an object

The following example restores `exampleobject.txt` from the `examplebucket` bucket. The object's storage class is Archive, Cold Archive, or Deep Cold Archive.

`asyncRestoreObject` submits the restore request asynchronously. When the request is accepted, OSS returns HTTP 202 and begins restoring the object in the background.

```
// Build the restore request
RestoreObjectRequest restore = new RestoreObjectRequest();
// Specify the bucket name. Example: examplebucket.
restore.setBucketName("examplebucket");
// Specify the full path of the object. Do not include the bucket name. Example: exampleobject.txt.
restore.setObjectKey("exampleobject.txt");

// Submit the restore request asynchronously
OSSAsyncTask task = oss.asyncRestoreObject(restore, new OSSCompletedCallback<RestoreObjectRequest,
        RestoreObjectResult>() {
    @Override
    public void onSuccess(RestoreObjectRequest request, RestoreObjectResult result) {
        // HTTP 202: restore request accepted. The object is not yet readable.
        Log.i("info", "code::"+result.getStatusCode());
    }

    @Override
    public void onFailure(RestoreObjectRequest request, ClientException clientException,
                          ServiceException serviceException) {
        Log.e("errorMessage", "error: "+serviceException.getRawMessage());
    }
});

task.waitUntilFinished();
```

**Note**

HTTP 202 means the restore request was accepted, not that the object is ready. The object becomes readable after the restore completes. For expected restore durations by storage class, see [RestoreObject](/help/en/oss/developer-reference/restoreobject).

## What's next

-   For the complete sample code, see [RestoreObjectTest](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/RestoreObjectTest.java) on GitHub.
    
-   For the RestoreObject API reference, see [RestoreObject](/help/en/oss/developer-reference/restoreobject#reference-mfr-5bx-wdb).
    
-   For OSSClient initialization options, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
