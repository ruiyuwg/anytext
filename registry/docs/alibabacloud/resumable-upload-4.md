Uploading large files over a wireless network can be time-consuming. An upload might fail due to poor network conditions or network changes, which requires you to restart the upload from the beginning. The Android software development kit (SDK) provides a resumable upload feature to address this issue.

## Usage notes

OSS SDK for Android provides the following methods for performing resumable upload: resumableUpload and sequenceUpload.

-   (Recommended) resumableUpload specifies that multiple parts are uploaded in parallel. Up to five parts can be uploaded in parallel.
    
-   sequenceUpload specifies that parts are sequentially uploaded. The next part is uploaded after the previous part is uploaded.
    

In this topic, the following sample code provides only examples on how to perform resumable upload using the resumableUpload method. If you want to upload multiple objects by performing resumable upload, you must create multiple resumableUpload requests.

## Usage notes

Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).

We recommend that you do not use resumable upload when you upload objects that are smaller than 5 GB in size from a mobile device. Resumable upload is implemented using the multipart upload feature. Resumable upload of a single object requires multiple network requests, which is inefficient. When you upload an object that is larger than 5 GB in size by performing resumable upload, take note of the following items:

-   Before resumable upload
    
    Before you upload an object to OSS by performing resumable upload, you can specify a directory for the checkpoint file that stores the resumable upload progress. The checkpoint file applies only to the current resumable upload task.
    
    -   If you do not specify the directory for the checkpoint file and a part of a large object fails to be uploaded due to network issues, a long period of time is required and a large amount of traffic is consumed to re-upload the entire object.
        
    -   If you specify the directory for the checkpoint file, a failed resumable upload task can be resumed from the position recorded in the checkpoint file.
        
-   During resumable upload
    
    -   Resumable upload lets you upload only local files. Resumable upload supports the upload callback feature, which is used in the same manner as in common upload tasks. For more information, see [Callback](/help/en/oss/developer-reference/callback#reference-zkm-311-hgb).
        
    -   You can perform resumable upload by calling the following API operations: InitMultipartUpload, UploadPart, ListParts, CompleteMultipartUpload, and AbortMultipartUpload. If you want to perform resumable upload using Security Token Service (STS), make sure that you are authorized to call the preceding API operations.
        
    -   By default, MD5 validation is enabled for each part during a resumable upload. Therefore, you do not need to set the `Content-Md5` header in the request.
        
    -   If a resumable upload task fails and is not completed, the uploaded parts become unnecessary in OSS. To resolve this issue, you can configure lifecycle rules for the bucket in which the parts are stored to delete the parts on a regular basis. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
        

## Examples

You can synchronously or asynchronously upload a local file to OSS by performing resumable upload.

Synchronization methods

The following sample code provides an example on how to synchronously upload a local file named examplefile.txt to the exampledir directory in the examplebucket bucket. After the local file is uploaded, the object is named exampleobject.txt. The checkpoint file is stored in your computer.

```
// Specify the bucket name, for example, examplebucket.
String bucketName = "examplebucket";
// Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
String objectName = "exampledir/exampleobject.txt";
// Specify the full path of the file, for example, /storage/emulated/0/oss/examplefile.txt.
String localFilepath = "/storage/emulated/0/oss/examplefile.txt";

String recordDirectory = Environment.getExternalStorageDirectory().getAbsolutePath() + "/oss_record/";

File recordDir = new File(recordDirectory);

// Make sure that the folder to save the breakpoint record exists. If the folder does not exist, create it.
if (!recordDir.exists()) {
    recordDir.mkdirs();
}

// Create a resumable upload request and specify the path to save the breakpoint record file. The path must be an absolute path.
ResumableUploadRequest request = new ResumableUploadRequest(bucketName, objectName, localFilepath, recordDirectory);
// When you call the OSSAsyncTask cancel() method, set DeleteUploadOnCancelling to false. This setting prevents the deletion of the breakpoint record file. The next time you upload the same file, the upload resumes from the breakpoint. If you do not set this parameter, the default value is true, which deletes the breakpoint record file. The next time you upload the same file, the upload starts from the beginning.
request.setDeleteUploadOnCancelling(false);
// Set the upload callback.
request.setProgressCallback(new OSSProgressCallback<ResumableUploadRequest>() {
    @Override
    public void onProgress(ResumableUploadRequest request, long currentSize, long totalSize) {
        Log.d("resumableUpload", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});


ResumableUploadResult uploadResult = oss.resumableUpload(request);
```

The following sample code provides an example on how to use the URI of a file to upload the file to OSS for scoped storage on Android 10 or later:

```
// Specify the bucket name, for example, examplebucket.
String bucketName = "examplebucket";
// Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
String objectName = "exampledir/exampleobject.txt";

String recordDirectory = getApplication().getFilesDir().getAbsolutePath() + "/oss_record/";

File recordDir = new File(recordDirectory);

// Make sure that the folder to save the breakpoint record exists. If the folder does not exist, create it.
if (!recordDir.exists()) {
    recordDir.mkdirs();
}

// Create a resumable upload request and specify the path to save the breakpoint record file. The path must be an absolute path.
// The "fileUri" parameter must be set to the actual URI of the file.
ResumableUploadRequest request = new ResumableUploadRequest(bucketName, objectName, fileUri, recordDirectory);
// When you call the OSSAsyncTask cancel() method, set DeleteUploadOnCancelling to false. This setting prevents the deletion of the breakpoint record file. The next time you upload the same file, the upload resumes from the breakpoint. If you do not set this parameter, the default value is true, which deletes the breakpoint record file. The next time you upload the same file, the upload starts from the beginning.
request.setDeleteUploadOnCancelling(false);
// Set the upload callback.
request.setProgressCallback(new OSSProgressCallback<ResumableUploadRequest>() {
    @Override
    public void onProgress(ResumableUploadRequest request, long currentSize, long totalSize) {
        Log.d("resumableUpload", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});


ResumableUploadResult uploadResult = oss.resumableUpload(request);
```

The following sample code provides an example on how to perform resumable upload without storing the checkpoint file on your computer:

```
// Specify the bucket name, for example, examplebucket.
String bucketName = "examplebucket";
// Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
String objectName = "exampledir/exampleobject.txt";
// Specify the full path of the file, for example, /storage/emulated/0/oss/examplefile.txt.
String localFilepath = "/storage/emulated/0/oss/examplefile.txt";

// Create a resumable upload request.
ResumableUploadRequest request = new ResumableUploadRequest(bucketName, objectName, localFilepath);
// Set the upload callback.
request.setProgressCallback(new OSSProgressCallback<ResumableUploadRequest>() {
    @Override
    public void onProgress(ResumableUploadRequest request, long currentSize, long totalSize) {
        Log.d("resumableUpload", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});


ResumableUploadResult uploadResult = oss.resumableUpload(request);
```

Asynchronous method

The following sample code provides an example on how to asynchronously upload a local file named examplefile.txt to the exampledir directory in the examplebucket bucket. After the local file is uploaded, the object is named exampleobject.txt. The checkpoint file is stored on your computer.

```
// Specify the bucket name, for example, examplebucket.
String bucketName = "examplebucket";
// Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
String objectName = "exampledir/exampleobject.txt";
// Specify the full path of the file, for example, /storage/emulated/0/oss/examplefile.txt.
String localFilepath = "/storage/emulated/0/oss/examplefile.txt";
String recordDirectory = Environment.getExternalStorageDirectory().getAbsolutePath() + "/oss_record/";

File recordDir = new File(recordDirectory);

// Make sure that the path to save the breakpoint record exists. If the path does not exist, create it.
if (!recordDir.exists()) {
    recordDir.mkdirs();
}

// Create a resumable upload request and specify the path to save the breakpoint record file. The path must be an absolute path.
ResumableUploadRequest request = new ResumableUploadRequest(bucketName, objectName, localFilepath, recordDirectory);
// When you call the OSSAsyncTask cancel() method, set DeleteUploadOnCancelling to false. This setting prevents the deletion of the breakpoint record file. The next time you upload the same file, the upload resumes from the breakpoint. If you do not set this parameter, the default value is true, which deletes the breakpoint record file. The next time you upload the same file, the upload starts from the beginning.
request.setDeleteUploadOnCancelling(false);
// Set the upload progress callback.
request.setProgressCallback(new OSSProgressCallback<ResumableUploadRequest>() {
    @Override
    public void onProgress(ResumableUploadRequest request, long currentSize, long totalSize) {
        Log.d("resumableUpload", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});


OSSAsyncTask resumableTask = oss.asyncResumableUpload(request, new OSSCompletedCallback<ResumableUploadRequest, ResumableUploadResult>() {
    @Override
    public void onSuccess(ResumableUploadRequest request, ResumableUploadResult result) {
        Log.d("resumableUpload", "success!");
    }

    @Override
    public void onFailure(ResumableUploadRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Handle exceptions.
    }
});

// Wait for the resumable upload task to complete.
resumableTask.waitUntilFinished();                
```

The following sample code provides an example on how to use the URI of a file to upload the file to OSS for scoped storage on Android 10 or later:

```
// Specify the bucket name, for example, examplebucket.
String bucketName = "examplebucket";
// Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
String objectName = "exampledir/exampleobject.txt";
String recordDirectory = getApplication().getFilesDir().getAbsolutePath() + "/oss_record/";

File recordDir = new File(recordDirectory);

// Make sure that the folder to save the breakpoint record exists. If the folder does not exist, create it.
if (!recordDir.exists()) {
    recordDir.mkdirs();
}

// Create a resumable upload request and specify the path to save the breakpoint record file. The path must be an absolute path.
// The "fileUri" parameter must be set to the actual URI of the file.
ResumableUploadRequest request = new ResumableUploadRequest(bucketName, objectName, fileUri, recordDirectory);
// When you call the OSSAsyncTask cancel() method, set DeleteUploadOnCancelling to false. This setting prevents the deletion of the breakpoint record file. The next time you upload the same file, the upload resumes from the breakpoint. If you do not set this parameter, the default value is true, which deletes the breakpoint record file. The next time you upload the same file, the upload starts from the beginning.
request.setDeleteUploadOnCancelling(false);
// Set the upload callback.
request.setProgressCallback(new OSSProgressCallback<ResumableUploadRequest>() {
    @Override
    public void onProgress(ResumableUploadRequest request, long currentSize, long totalSize) {
        Log.d("resumableUpload", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});


OSSAsyncTask resumableTask = oss.asyncResumableUpload(request, new OSSCompletedCallback<ResumableUploadRequest, ResumableUploadResult>() {
    @Override
    public void onSuccess(ResumableUploadRequest request, ResumableUploadResult result) {
        Log.d("resumableUpload", "success!");
    }

    @Override
    public void onFailure(ResumableUploadRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Handle exceptions.
    }
});

// Wait for the resumable upload task to complete.
resumableTask.waitUntilFinished();
```

The following sample code provides an example on how to perform resumable upload without storing the checkpoint file on your computer:

```
// Specify the bucket name, for example, examplebucket.
String bucketName = "examplebucket";
// Specify the full path of the object, for example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
String objectName = "exampledir/exampleobject.txt";
// Specify the full path of the file, for example, /storage/emulated/0/oss/examplefile.txt.
String localFilepath = "/storage/emulated/0/oss/examplefile.txt";

// Create a resumable upload request.
ResumableUploadRequest request = new ResumableUploadRequest(bucketName, objectName, localFilepath);

// Set the upload progress callback.
request.setProgressCallback(new OSSProgressCallback<ResumableUploadRequest>() {
    @Override
    public void onProgress(ResumableUploadRequest request, long currentSize, long totalSize) {
        Log.d("resumableUpload", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});
// Asynchronously call the resumable upload method.
OSSAsyncTask resumableTask = oss.asyncResumableUpload(request, new OSSCompletedCallback<ResumableUploadRequest, ResumableUploadResult>() {
    @Override
    public void onSuccess(ResumableUploadRequest request, ResumableUploadResult result) {
        Log.d("resumableUpload", "success!");
    }

    @Override
    public void onFailure(ResumableUploadRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Handle exceptions.
    }
});

// Wait for the resumable upload task to complete.
resumableTask.waitUntilFinished();                     
```

## References

-   For more information about how to configure lifecycle rules for a bucket, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
-   For more information about how to implement an upload callback in resumable upload, see [Callback](/help/en/oss/developer-reference/callback#reference-zkm-311-hgb).
    
-   For more information about how to initialize an OSSClient instance, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
