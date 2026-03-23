Streaming download lets you download a large object incrementally by reading it as an input stream, without waiting for the entire object to transfer first. Use this approach when the object is large or the transfer may take a long time.

To perform streaming download, you must have read permission on the object.

## Prerequisites

Before you begin, ensure that you have:

-   An initialized `OSSClient` instance. For setup instructions, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
    
-   Read permission on the object you want to download
    

## Download an object as a stream

The SDK supports both synchronous and asynchronous invocation. Use the synchronous call when blocking the thread until the download completes is acceptable. Use the asynchronous call when you need a non-blocking operation, such as on the Android main thread.

### Synchronous call

```
// Specify the bucket name and the full path of the object.
// The object's full path must not include the bucket name.
GetObjectRequest get = new GetObjectRequest("examplebucket", "exampledir/exampleobject.txt");

// Track download progress.
get.setProgressListener(new OSSProgressCallback<GetObjectRequest>() {
    @Override
    public void onProgress(GetObjectRequest request, long currentSize, long totalSize) {
        OSSLog.logDebug("getobj_progress: " + currentSize + "  total_size: " + totalSize, false);
    }
});

try {
    // Execute the download and get the result.
    GetObjectResult getResult = oss.getObject(get);

    Log.d("Content-Length", "" + getResult.getContentLength());

    // Read the object content from the input stream.
    InputStream inputStream = getResult.getObjectContent();
    byte[] buffer = new byte[2048];
    int len;

    while ((len = inputStream.read(buffer)) != -1) {
        // Process the data — for example, write to a file or render an image.
    }

    // Inspect object metadata after the download completes.
    ObjectMetadata metadata = getResult.getMetadata();
    Log.d("ContentType", metadata.getContentType());

} catch (ClientException e) {
    // Handle local exceptions such as network errors.
    e.printStackTrace();
} catch (ServiceException e) {
    // Handle service-side errors.
    Log.e("RequestId", e.getRequestId());
    Log.e("ErrorCode", e.getErrorCode());
    Log.e("HostId", e.getHostId());
    Log.e("RawMessage", e.getRawMessage());
} catch (IOException e) {
    e.printStackTrace();
}
```

### Asynchronous invocation

`asyncGetObject` returns an `OSSAsyncTask`. Both calls support a progress listener set on the request.

```
// Specify the bucket name and the full path of the object.
// The object's full path must not include the bucket name.
GetObjectRequest get = new GetObjectRequest("examplebucket", "exampledir/exampleobject.txt");

// Track download progress.
get.setProgressListener(new OSSProgressCallback<GetObjectRequest>() {
    @Override
    public void onProgress(GetObjectRequest request, long currentSize, long totalSize) {
        OSSLog.logDebug("getobj_progress: " + currentSize + "  total_size: " + totalSize, false);
    }
});

OSSAsyncTask task = oss.asyncGetObject(get, new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
    @Override
    public void onSuccess(GetObjectRequest request, GetObjectResult result) {
        InputStream inputStream = result.getObjectContent();
        byte[] buffer = new byte[2048];
        int len;

        try {
            while ((len = inputStream.read(buffer)) != -1) {
                // Process the downloaded data.
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onFailure(GetObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        if (clientExcepion != null) {
            // Handle local exceptions such as network errors.
            clientExcepion.printStackTrace();
        }
        if (serviceException != null) {
            // Handle service-side errors.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

## What's next

-   For the complete sample code, see [GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/OSSGetObjectTest.java).
    
-   For the underlying API operation, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).
    
-   For OSSClient initialization options, including custom domain name and Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
