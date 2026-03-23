Resumable download lets your app continue a large file download after a network interruption, without restarting from the beginning.

## Prerequisites

Before you begin, ensure that you have:

-   An OSSClient instance initialized using a custom domain name or Security Token Service (STS). See [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
    

## Download an object

`ResumableDownloadRequest` splits the object into parts and downloads each part independently. When a download is interrupted, the next attempt reads the checkpoint file and resumes from the last completed part.

```
// Full path of the object in the bucket. Do not include the bucket name.
String objectKey = "exampledir/exampleobject.txt";
// Full path of the local file where the downloaded content is saved.
String localFile = "/storage/emulated/0/oss/examplefile.txt";

ResumableDownloadRequest request = new ResumableDownloadRequest(bucketName, objectKey, localFile);

// Set the part size in bytes. Default: 256 KB (256 * 1024).
request.setPartSize(256 * 1024);

// Enable resumable download. OSS saves a checkpoint file after each part completes.
// If the download is interrupted, the next attempt reads the checkpoint file and skips already-downloaded parts.
request.setEnableCheckPoint(true);

// Directory where the checkpoint file is stored. Required to resume after an interruption.
request.setCheckPointFilePath("/storage/emulated/0/oss");

// Track download progress.
request.setProgressListener(new OSSProgressCallback() {
    @Override
    public void onProgress(Object request, long currentSize, long totalSize) {
        Log.d("ResumableDownload", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});

OSSAsyncTask task = oss.asyncResumableDownload(request, new OSSCompletedCallback<ResumableDownloadRequest, ResumableDownloadResult>() {
    @Override
    public void onSuccess(ResumableDownloadRequest request, ResumableDownloadResult result) {
        Log.d("ResumableDownload", "DownloadSuccess");
    }

    @Override
    public void onFailure(ResumableDownloadRequest request, ClientException clientException, ServiceException serviceException) {
        if (clientException != null) {
            // A client-side error occurred, such as a network failure.
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            // A server-side error occurred.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

### Parameters

**Parameter**

**Method**

**Default**

**Description**

Part size

`setPartSize(long)`

256 KB (256 \* 1024 bytes)

Size of each downloaded part in bytes

Resumable mode

`setEnableCheckPoint(boolean)`

`false`

Set to `true` to enable checkpoint-based resumable download

Checkpoint file path

`setCheckPointFilePath(String)`

—

Directory where the checkpoint file is stored; required to resume after an interruption

Progress listener

`setProgressListener(OSSProgressCallback)`

—

Callback that receives `currentSize` and `totalSize` on each progress update

## What's next

-   Complete sample code: [ResumableDownloadTest](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/ResumableDownloadTest.java) on GitHub
    
-   Underlying API operation: [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db)
    
-   OSSClient setup: [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
