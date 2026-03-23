Append upload lets you add content to the end of an appendable object using the AppendObject method.

**Note**

Objects uploaded using the AppendObject operation are appendable objects. Objects uploaded using the PutObject operation are normal objects.

## **Usage notes**

-   Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

When you upload an object by appending data, you must correctly set the position parameter.

-   When you create an appendable object, set the position parameter to 0.
    
-   When you append content to an appendable object, set the position parameter to the current length of the object.
    
    You can obtain the object length from the response of the previous append upload or using the HeadObject operation.
    

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Definition**

AppendObject

`oss:PutObject`

You can call this operation to upload an object by appending the object to an existing object.

`oss:PutObjectTagging`

When uploading an object by appending the object to an existing object, if you specify object tags through x-oss-tagging, this permission is required.

## Code examples

The following code shows how to append data to an object.

```
// Specify the bucket name, the full path of the object, and the full path of the local file. Example: examplebucket, exampledir/exampleobject.txt, and /storage/emulated/0/oss/examplefile.txt.
// The full path of the object cannot contain the bucket name.
AppendObjectRequest append = new AppendObjectRequest("examplebucket", "exampledir/exampleobject.txt", "/storage/emulated/0/oss/examplefile.txt");

ObjectMetadata metadata = new ObjectMetadata();
metadata.setContentType("text/plain");
append.setMetadata(metadata);

// Set the append position.
append.setPosition(0);

// Set the callback.
append.setProgressCallback(new OSSProgressCallback<AppendObjectRequest>() {
    @Override
    public void onProgress(AppendObjectRequest request, long currentSize, long totalSize) {
        Log.d("AppendObject", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});
// Asynchronously append data.
OSSAsyncTask task = oss.asyncAppendObject(append, new OSSCompletedCallback<AppendObjectRequest, AppendObjectResult>() {
    @Override
    public void onSuccess(AppendObjectRequest request, AppendObjectResult result) {
        Log.d("AppendObject", "AppendSuccess");
        Log.d("NextPosition", "" + result.getNextPosition());
    }

    @Override
    public void onFailure(AppendObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Handle exceptions.
    }
});
```

For scoped storage in Android 10 and later, you can use the URI of a file to upload the file to OSS.

```
// Specify the bucket name and the full path of the object. Example: examplebucket and exampledir/exampleobject.txt.
// The full path of the object cannot contain the bucket name.
AppendObjectRequest append = new AppendObjectRequest("examplebucket", "exampledir/exampleobject.txt", fileUri);

ObjectMetadata metadata = new ObjectMetadata();
metadata.setContentType("text/plain");
append.setMetadata(metadata);

// Set the append position.
append.setPosition(0);

// Set the callback.
append.setProgressCallback(new OSSProgressCallback<AppendObjectRequest>() {
    @Override
    public void onProgress(AppendObjectRequest request, long currentSize, long totalSize) {
        Log.d("AppendObject", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});
// Asynchronously append data.
OSSAsyncTask task = oss.asyncAppendObject(append, new OSSCompletedCallback<AppendObjectRequest, AppendObjectResult>() {
    @Override
    public void onSuccess(AppendObjectRequest request, AppendObjectResult result) {
        Log.d("AppendObject", "AppendSuccess");
        Log.d("NextPosition", "" + result.getNextPosition());
    }

    @Override
    public void onFailure(AppendObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Handle exceptions.
    }
});
```

## References

-   For complete sample code for append uploads, see [the GitHub example](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/OSSPutObjectTest.java).
    
-   For information about the API operation for append uploads, see [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db).
    
-   For information about how to initialize an OSSClient, see [Initialize an OSSClient instance for Android](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
