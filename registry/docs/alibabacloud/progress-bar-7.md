You can use a progress bar to indicate the progress of an object that is being uploaded or downloaded.

## **Usage notes**

-   Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

## Examples

The following sample code provides an example on how to use a progress bar when you use asyncPutObject to asynchronously upload an object:

```
// Create an upload request.
// Specify the bucket name (for example, examplebucket), the full path of the object (for example, exampledir/exampleobject.txt), and the full path of the local file (for example, /storage/emulated/0/oss/examplefile.txt).
// Do not include the bucket name in the full path of the object.
PutObjectRequest put = new PutObjectRequest("examplebucket", "exampledir/exampleobject.txt", "/storage/emulated/0/oss/examplefile.txt");

// Set the progress callback function to display the progress bar.
put.setProgressCallback(new OSSProgressCallback<PutObjectRequest>() {
    @Override
    public void onProgress(PutObjectRequest request, long currentSize, long totalSize) {
        // currentSize is the size of the uploaded part. Unit: bytes.
        // totalSize is the total size of the file to upload. Unit: bytes.
        Log.d("PutObject", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});

// Upload the file asynchronously.
OSSAsyncTask task = oss.asyncPutObject(put, new OSSCompletedCallback<PutObjectRequest, PutObjectResult>() {
    @Override
    public void onSuccess(PutObjectRequest request, PutObjectResult result) {
        Log.d("PutObject", "UploadSuccess");
        Log.d("ETag", result.getETag());
        Log.d("RequestId", result.getRequestId());
    }

    @Override
    public void onFailure(PutObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Request exceptions.
        if (clientExcepion != null) {
            // Client exceptions, such as network exceptions.
            clientExcepion.printStackTrace();
        }
        if (serviceException != null) {
            // Service exceptions.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
// task.cancel(); // Cancels the task.
// task.waitUntilFinished(); // Waits for the task to complete.
```

## References

For the complete sample code on how to use a progress bar during object upload, visit [GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/OSSPutObjectTest.java).
