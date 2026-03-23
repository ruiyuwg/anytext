Multipart upload lets you split a large object into parts, upload them independently, and combine them into a complete object. Use it when your file exceeds a few hundred MB, or when you need progress tracking and the ability to abort an in-progress upload.

## Prerequisites

Before you begin, ensure that you have:

-   An initialized `OSSClient` instance. See [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
    
-   A target OSS bucket and the object key you want to write to
    

## How it works

A multipart upload runs in three sequential steps:

1.  **Initiate** — Call `initMultipartUpload` to start the upload. OSS returns a globally unique `uploadId` that identifies this upload session.
    
2.  **Upload parts** — Call `uploadPart` once per part, passing the `uploadId` and a part number. Parts can be uploaded in any order.
    
3.  **Complete** — Call `completeMultipartUpload` with the full list of part ETags. OSS assembles the parts into a single object.
    

To stop before completing, call `abortMultipartUpload` to delete all uploaded parts and invalidate the `uploadId`.

## Upload a file

### Option 1: Use MultipartUploadRequest (recommended)

`MultipartUploadRequest` encapsulates all three steps. Pass a local file path or a file URI and the SDK handles the rest. Use this option unless you need fine-grained control over individual parts.

**Upload options**

**Option**

**Type**

**Description**

**Default**

`setPartSize(long)`

`long`

Part size in bytes. Minimum is 100 KB (102,400).

256 KB (262,144)

`setProgressCallback(OSSProgressCallback)`

callback

Receives `currentSize` and `totalSize` during upload.

None

**Upload from a file path (synchronous)**

```
String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";
String localFilepath = "/storage/emulated/0/oss/examplefile.txt";

ObjectMetadata meta = new ObjectMetadata();
meta.setHeader("x-oss-object-acl", "public-read-write");

MultipartUploadRequest rq = new MultipartUploadRequest(bucketName, objectName, localFilepath, meta);
// Default part size is 256 KB. Minimum is 100 KB.
rq.setPartSize(1024 * 1024);
rq.setProgressCallback(new OSSProgressCallback<MultipartUploadRequest>() {
    @Override
    public void onProgress(MultipartUploadRequest request, long currentSize, long totalSize) {
        OSSLog.logDebug("[testMultipartUpload] - " + currentSize + " " + totalSize, false);
    }
});

CompleteMultipartUploadResult result = oss.multipartUpload(rq);
```

**Upload from a file URI (synchronous)**

On Android 10 and later, use a file URI instead of a file path to support scoped storage:

```
String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";

ObjectMetadata meta = new ObjectMetadata();
meta.setHeader("x-oss-object-acl", "public-read-write");

MultipartUploadRequest rq = new MultipartUploadRequest(bucketName, objectName, fileUri, meta);
rq.setPartSize(1024 * 1024);
rq.setProgressCallback(new OSSProgressCallback<MultipartUploadRequest>() {
    @Override
    public void onProgress(MultipartUploadRequest request, long currentSize, long totalSize) {
        OSSLog.logDebug("[testMultipartUpload] - " + currentSize + " " + totalSize, false);
    }
});

CompleteMultipartUploadResult result = oss.multipartUpload(rq);
```

**Upload asynchronously**

Use `asyncMultipartUpload` to run the upload on a background thread:

```
String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";
String localFilepath = "/storage/emulated/0/oss/examplefile.txt";

MultipartUploadRequest request = new MultipartUploadRequest(bucketName, objectName, localFilepath);
request.setProgressCallback(new OSSProgressCallback<MultipartUploadRequest>() {
    @Override
    public void onProgress(MultipartUploadRequest request, long currentSize, long totalSize) {
        OSSLog.logDebug("[testMultipartUpload] - " + currentSize + " " + totalSize, false);
    }
});

OSSAsyncTask task = oss.asyncMultipartUpload(request, new OSSCompletedCallback<MultipartUploadRequest, CompleteMultipartUploadResult>() {
    @Override
    public void onSuccess(MultipartUploadRequest request, CompleteMultipartUploadResult result) {
        OSSLog.logInfo(result.getServerCallbackReturnBody());
    }

    @Override
    public void onFailure(MultipartUploadRequest request, ClientException clientException, ServiceException serviceException) {
        OSSLog.logError(serviceException.getRawMessage());
    }
});

task.waitUntilFinished();
```

To cancel the upload before it finishes:

```
task.cancel();
```

> For Android 10 and later, pass a file URI instead of a file path to the `MultipartUploadRequest` constructor when using scoped storage.

### Option 2: Call the API steps directly

Use this approach when you need to control how parts are read, split, or retried — for example, when uploading from a stream or implementing custom retry logic.

**Constraints**

**Constraint**

**Detail**

Part number range

1–10,000. OSS returns `InvalidArgument` if out of range.

Minimum part size

100 KB for all parts except the last. OSS enforces this when you call `completeMultipartUpload`.

Maximum part size

5 GB

Duplicate part number

Uploading a part with an existing part number overwrites the earlier part.

MD5 verification

OSS verifies the MD5 hash of each part. If hashes differ, OSS returns `InvalidDigest`.

Stream position

Position the stream at the correct byte offset before reading each part.

The following example splits a local file into 4 parts and uploads them sequentially. Part numbers start at 1.

```
String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";
String localFilepath = "/storage/emulated/0/oss/examplefile.txt";

// Step 1: Initiate the multipart upload.
InitiateMultipartUploadRequest init = new InitiateMultipartUploadRequest(bucketName, objectName);
InitiateMultipartUploadResult initResult = oss.initMultipartUpload(init);
// Save the uploadId — you need it to upload parts, complete, or abort.
String uploadId = initResult.getUploadId();

// Step 2: Upload parts. Each part except the last must be at least 100 KB.
int partSize = 100 * 1024;
List<PartETag> partETags = new ArrayList<>();

for (int i = 1; i <= 4; i++) {
    byte[] data = new byte[partSize];

    RandomAccessFile raf = new RandomAccessFile(localFilepath, "r");
    long skip = (long)(i - 1) * partSize;
    raf.seek(skip);
    raf.readFully(data, 0, partSize);

    UploadPartRequest uploadPart = new UploadPartRequest();
    uploadPart.setBucketName(bucketName);
    uploadPart.setObjectKey(objectName);
    uploadPart.setUploadId(uploadId);
    uploadPart.setPartNumber(i);  // Part numbers range from 1 to 10,000.
    uploadPart.setPartContent(data);

    try {
        UploadPartResult result = oss.uploadPart(uploadPart);
        // Save the ETag for each part — required to complete the upload.
        partETags.add(new PartETag(uploadPart.getPartNumber(), result.getETag()));
    } catch (ServiceException serviceException) {
        OSSLog.logError(serviceException.getErrorCode());
    }
}

// Sort parts by part number before calling completeMultipartUpload.
Collections.sort(partETags, new Comparator<PartETag>() {
    @Override
    public int compare(PartETag lhs, PartETag rhs) {
        return Integer.compare(lhs.getPartNumber(), rhs.getPartNumber());
    }
});

// Step 3: Complete the multipart upload.
CompleteMultipartUploadRequest complete = new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);

// Optional: Set a server-side callback URL to receive a notification after the upload completes.
complete.setCallbackParam(new HashMap<String, String>() {{
    put("callbackUrl", CALLBACK_SERVER); // Replace with your server address.
    put("callbackBody", "test");
}});

CompleteMultipartUploadResult completeResult = oss.completeMultipartUpload(complete);
OSSLog.logError("serverCallback: " + completeResult.getServerCallbackReturnBody());
```

## Abort a multipart upload

Call `abortMultipartUpload` to stop an in-progress upload. All uploaded parts are deleted and the `uploadId` is invalidated.

```
String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";
// Obtain the uploadId from the initMultipartUpload response.
String uploadId = "0004B999EF518A1FE585B0C9****";

AbortMultipartUploadRequest abort = new AbortMultipartUploadRequest(bucketName, objectName, uploadId);
AbortMultipartUploadResult abortResult = oss.abortMultipartUpload(abort);
```

> After calling `abortMultipartUpload`, the `uploadId` can no longer be used for any operations.

## List uploaded parts

Call `listParts` to retrieve the parts already uploaded for a given `uploadId`. Use this to verify upload progress or to resume an interrupted upload.

```
String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";
// Specify the uploadId obtained from initMultipartUpload.
String uploadId = "0004B999EF518A1FE585B0C9****";

ListPartsRequest listParts = new ListPartsRequest(bucketName, objectName, uploadId);
ListPartsResult result = oss.listParts(listParts);

List<PartETag> partETagList = new ArrayList<>();
for (PartSummary part : result.getParts()) {
    partETagList.add(new PartETag(part.getPartNumber(), part.getETag()));
}
```

**Important**

By default, OSS returns at most 1,000 parts per request. If there are more, the response sets `IsTruncated` to `true` and returns `NextPartNumberMarker` as the starting position for the next list request.

## What's next

-   For the complete sample code, see [GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/MultipartUploadTest.java).
    
-   For the underlying API reference:
    
    -   [InitiateMultipartUpload](/help/en/oss/developer-reference/listmultipartuploads#reference-hj2-3wx-wdb)
        
    -   [UploadPart](/help/en/oss/developer-reference/uploadpart)
        
    -   [CompleteMultipartUpload](/help/en/oss/developer-reference/abortmultipartupload#reference-txp-bvx-wdb)
        
    -   [AbortMultipartUpload](/help/en/oss/developer-reference/abortmultipartupload#reference-txp-bvx-wdb)
        
    -   [ListParts](/help/en/oss/developer-reference/listparts#reference-hzm-1zx-wdb)
        
    -   [ListMultipartUploads](/help/en/oss/developer-reference/listmultipartuploads#reference-hj2-3wx-wdb)
        
-   To set up an OSSClient instance, see [Initialize an OSSClient instance for Android](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
