Simple upload uses the PutObject method to upload a single file, which is called an object. You can use simple upload to upload local files or binary byte\[\] arrays.

## **Usage notes**

-   Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Definition**

PutObject

`oss:PutObject`

Uploads an object.

`oss:PutObjectTagging`

When uploading an object, if you specify object tags through `x-oss-tagging`, this permission is required.

`kms:GenerateDataKey`

When uploading an object, if the object metadata contains `X-Oss-Server-Side-Encryption: KMS`, these two permissions are required.

`kms:Decrypt`

## Upload a local file

You can upload local files to OSS synchronously or asynchronously.

Upload synchronously

The following code shows how to synchronously upload the local file examplefile.txt as an object named exampleobject.txt to the exampledir/ folder in the examplebucket bucket.

```
// Create an upload request.
// Specify the bucket name (for example, examplebucket), the full path of the object (for example, exampledir/exampleobject.txt), and the full path of the local file (for example, /storage/emulated/0/oss/examplefile.txt).
// The full path of the object cannot contain the bucket name.
PutObjectRequest put = new PutObjectRequest("examplebucket", "exampledir/exampleobject.txt", "/storage/emulated/0/oss/examplefile.txt");

// Setting file metadata is optional.
 ObjectMetadata metadata = new ObjectMetadata();
// metadata.setContentType("application/octet-stream"); // Set the content type.
// metadata.setContentMD5(BinaryUtil.calculateBase64Md5(uploadFilePath)); // Verify the MD5 hash.
// Set the access permissions of the object to private.
metadata.setHeader("x-oss-object-acl", "private");
// Set the storage class of the object to Standard.
metadata.setHeader("x-oss-storage-class", "Standard");
// Prevent overwriting an object with the same name.
// metadata.setHeader("x-oss-forbid-overwrite", "true");
// Specify object tags. You can specify multiple tags.
// metadata.setHeader("x-oss-tagging", "a:1");
// Specify the server-side encryption algorithm that OSS uses to create the destination object.
// metadata.setHeader("x-oss-server-side-encryption", "AES256");
// Specifies the customer master key (CMK) managed by KMS. This parameter is valid only when x-oss-server-side-encryption is set to KMS.
// metadata.setHeader("x-oss-server-side-encryption-key-id", "9468da86-3509-4f8d-a61e-6eab1eac****");

put.setMetadata(metadata);

try {
    PutObjectResult putResult = oss.putObject(put);

    Log.d("PutObject", "UploadSuccess");
    Log.d("ETag", putResult.getETag());
    Log.d("RequestId", putResult.getRequestId());
} catch (ClientException e) {
    // Client exception, such as a network exception.
    e.printStackTrace();
} catch (ServiceException e) {
    // Server exception.
    Log.e("RequestId", e.getRequestId());
    Log.e("ErrorCode", e.getErrorCode());
    Log.e("HostId", e.getHostId());
    Log.e("RawMessage", e.getRawMessage());
}
```

For partitioned storage on Android 10 or later, use the file URI to upload the file to OSS.

```
// Create an upload request.
// Specify the bucket name (for example, examplebucket) and the full path of the object (for example, exampledir/exampleobject.txt).
// The full path of the object cannot contain the bucket name.
PutObjectRequest put = new PutObjectRequest("examplebucket", "exampledir/exampleobject.txt",fileUri);

// Set the file metadata.
// ObjectMetadata metadata = new ObjectMetadata();
// Set the Content-Type.
// metadata.setContentType("text/plain"); 
// Verify the MD5 hash.
// metadata.setContentMD5(BinaryUtil.calculateBase64Md5(uploadFilePath)); 
// put.setMetadata(metadata);

try {
    PutObjectResult putResult = oss.putObject(put);

    Log.d("PutObject", "UploadSuccess");
    Log.d("ETag", putResult.getETag());
    Log.d("RequestId", putResult.getRequestId());
} catch (ClientException e) {
    // Client exception, such as a network exception.
    e.printStackTrace();
} catch (ServiceException e) {
    // Server exception.
    Log.e("RequestId", e.getRequestId());
    Log.e("ErrorCode", e.getErrorCode());
    Log.e("HostId", e.getHostId());
    Log.e("RawMessage", e.getRawMessage());
}
```

Upload asynchronously

**Note**

In Android, you must call the synchronous API operation from a subthread, not the UI thread. Otherwise, an exception occurs. To upload directly from the UI thread, use the asynchronous API operation.

The following code shows how to asynchronously upload the local file examplefile.txt as an object named exampleobject.txt to the exampledir/ folder in the examplebucket bucket.

```
// Create an upload request.
// Specify the bucket name (for example, examplebucket), the full path of the object (for example, exampledir/exampleobject.txt), and the full path of the local file (for example, /storage/emulated/0/oss/examplefile.txt).
// The full path of the object cannot contain the bucket name.
PutObjectRequest put = new PutObjectRequest("examplebucket", "exampledir/exampleobject.txt", "/storage/emulated/0/oss/examplefile.txt");

// You can set a progress callback for an asynchronous upload.
put.setProgressCallback(new OSSProgressCallback<PutObjectRequest>() {
    @Override
    public void onProgress(PutObjectRequest request, long currentSize, long totalSize) {
        Log.d("PutObject", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});

OSSAsyncTask task = oss.asyncPutObject(put, new OSSCompletedCallback<PutObjectRequest, PutObjectResult>() {
    @Override
    public void onSuccess(PutObjectRequest request, PutObjectResult result) {
        Log.d("PutObject", "UploadSuccess");
        Log.d("ETag", result.getETag());
        Log.d("RequestId", result.getRequestId());
    }

    @Override
    public void onFailure(PutObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Request exception.
        if (clientExcepion != null) {
            // Client exception, such as a network exception.
            clientExcepion.printStackTrace();
        }
        if (serviceException != null) {
            // Server exception.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
// Cancel the upload task.
// task.cancel(); 
// Wait for the upload task to complete.
// task.waitUntilFinished(); 
```

For partitioned storage on Android 10 or later, use the file URI to upload the file to OSS.

```
// Create an upload request.
// Specify the bucket name (for example, examplebucket) and the full path of the object (for example, exampledir/exampleobject.txt).
// The full path of the object cannot contain the bucket name.
PutObjectRequest put = new PutObjectRequest("examplebucket", "exampledir/exampleobject.txt", fileUri);

// You can set a progress callback for an asynchronous upload.
put.setProgressCallback(new OSSProgressCallback<PutObjectRequest>() {
    @Override
    public void onProgress(PutObjectRequest request, long currentSize, long totalSize) {
        Log.d("PutObject", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});

OSSAsyncTask task = oss.asyncPutObject(put, new OSSCompletedCallback<PutObjectRequest, PutObjectResult>() {
    @Override
    public void onSuccess(PutObjectRequest request, PutObjectResult result) {
        Log.d("PutObject", "UploadSuccess");
        Log.d("ETag", result.getETag());
        Log.d("RequestId", result.getRequestId());
    }

    @Override
    public void onFailure(PutObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Request exception.
        if (clientExcepion != null) {
            // Client exception, such as a network exception.
            clientExcepion.printStackTrace();
        }
        if (serviceException != null) {
            // Server exception.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
// Cancel the upload task.
// task.cancel(); 
// Wait for the upload task to complete.
// task.waitUntilFinished(); 
```

## Upload a binary byte\[\] array

The following code shows how to synchronously upload a binary byte\[\] array as an object named exampleobject.txt to the exampledir/ folder in the examplebucket bucket.

```
byte[] uploadData = new byte[100 * 1024];
new Random().nextBytes(uploadData);

// Create an upload request.
// Specify the bucket name (for example, examplebucket) and the full path of the object (for example, exampledir/exampleobject.txt).
// The full path of the object cannot contain the bucket name.
PutObjectRequest put = new PutObjectRequest("examplebucket", "exampledir/exampleobject.txt", uploadData);

try {
    PutObjectResult putResult = oss.putObject(put);

    Log.d("PutObject", "UploadSuccess");
    Log.d("ETag", putResult.getETag());
    Log.d("RequestId", putResult.getRequestId());
} catch (ClientException e) {
    // Client exception, such as a network exception.
    e.printStackTrace();
} catch (ServiceException e) {
    // Server exception.
    Log.e("RequestId", e.getRequestId());
    Log.e("ErrorCode", e.getErrorCode());
    Log.e("HostId", e.getHostId());
    Log.e("RawMessage", e.getRawMessage());
}
```

## References

-   For the complete sample code for a simple upload, see the [GitHub example](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/OSSPutObjectTest.java).
    
-   For more information about the API operation for a simple upload, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).
    
-   For more information about how to initialize an OSSClient instance, see [Initialize an OSSClient instance for Android](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
