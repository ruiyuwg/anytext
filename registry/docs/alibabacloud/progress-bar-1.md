Track download or upload progress in your Android app by attaching a progress listener to an OSS request. The following example uses the `GetObject` operation to demonstrate download progress tracking.

## Prerequisites

Before you begin, ensure that you have:

-   An `OSSClient` instance initialized using a custom domain name or Security Token Service (STS). For details, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
    

## Track download progress

Attach an `OSSProgressCallback` listener to the `GetObjectRequest` before submitting the asynchronous download. The listener receives `currentSize` and `totalSize` on each progress update, which you can use to update a UI progress bar.

```
// Construct a download request.
// Specify the bucket name and the full path of the object.
// The full path cannot contain the bucket name.
GetObjectRequest get = new GetObjectRequest("examplebucket", "exampledir/exampleobject.txt");

// Attach a progress listener to receive download progress updates.
get.setProgressListener(new OSSProgressCallback<GetObjectRequest>() {
    @Override
    public void onProgress(GetObjectRequest request, long currentSize, long totalSize) {
        Log.d("GetObject", "currentSize: " + currentSize + " totalSize: " + totalSize);
        // Update your UI progress bar here.
    }
});

// Download the object asynchronously.
OSSAsyncTask task = oss.asyncGetObject(get, new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
    @Override
    public void onSuccess(GetObjectRequest request, GetObjectResult result) {
        Log.d("GetObject", "downLoadSuccess");
    }

    @Override
    public void onFailure(GetObjectRequest request, ClientException clientException, ServiceException serviceException) {
        if (clientException != null) {
            // A client-side error occurred, such as a network failure.
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            // The server returned an error.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

## What's next

-   For the complete sample code, see [OSSGetObjectTest.java](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/OSSGetObjectTest.java) on GitHub.
    
-   To initialize an `OSSClient` instance, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
