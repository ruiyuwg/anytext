A symbolic link in Object Storage Service (OSS) works like a shortcut on Windows, allowing you to quickly access associated objects in OSS.

## Prerequisites

Before you begin, ensure that you have an initialized `OSSClient` instance. For setup instructions, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).

## Create a symbolic link

The following code:

1.  Builds a `PutSymlinkRequest` with the bucket name, symbolic link name, and target object name.
    
2.  Optionally sets metadata headers to control overwrite behavior, access control list (ACL), and storage class.
    
3.  Calls `asyncPutSymlink()` to submit the request asynchronously and waits for completion.
    

```
// Build the request
PutSymlinkRequest putSymlink = new PutSymlinkRequest();
putSymlink.setBucketName("<your-bucket-name>");
putSymlink.setObjectKey("<your-symlink-name>");
putSymlink.setTargetObjectName("<your-target-object-name>");

ObjectMetadata metadata = new ObjectMetadata();
// Optional: prevent overwriting an existing object with the same name
//metadata.setHeader("x-oss-forbid-overwrite", "true");
// Optional: set the ACL to private
//metadata.setHeader("x-oss-object-acl", "private");
// Optional: set the storage class to Standard
//metadata.setHeader("x-oss-storage-class", "Standard");
putSymlink.setMetadata(metadata);

OSSAsyncTask task = oss.asyncPutSymlink(putSymlink, new OSSCompletedCallback<PutSymlinkRequest, PutSymlinkResult>() {
    @Override
    public void onSuccess(PutSymlinkRequest request, PutSymlinkResult result) {
        Log.d("PutSymlink", "PutSymlink success");
    }

    @Override
    public void onFailure(PutSymlinkRequest request, ClientException clientException,
                          ServiceException serviceException) {
        if (clientException != null) {
            // Handle client exceptions such as network exceptions
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            // Handle server-side exceptions
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
task.waitUntilFinished();
```

Replace the placeholders with actual values:

**Placeholder**

**Description**

**Example**

`<your-bucket-name>`

Name of the bucket

`my-bucket`

`<your-symlink-name>`

Name of the symbolic link to create

`my-symlink.jpg`

`<your-target-object-name>`

Name of the target object the symbolic link points to

`original.jpg`

## Query the target object of a symbolic link

> You must have read permissions on the symbolic link to query it.

The following code:

1.  Builds a `GetSymlinkRequest` with the bucket name and symbolic link name.
    
2.  Calls `asyncGetSymlink()` to retrieve the target object name and logs the result.
    

```
// Build the request
GetSymlinkRequest getSymlink = new GetSymlinkRequest();
getSymlink.setBucketName("<your-bucket-name>");
getSymlink.setObjectKey("<your-symlink-name>");

OSSAsyncTask task = oss.asyncGetSymlink(getSymlink, new OSSCompletedCallback<GetSymlinkRequest,
        GetSymlinkResult>() {
    @Override
    public void onSuccess(GetSymlinkRequest request, GetSymlinkResult result) {
        OSSLog.logInfo("Target object: " + result.getTargetObjectName());
    }

    @Override
    public void onFailure(GetSymlinkRequest request, ClientException clientException,
                          ServiceException serviceException) {
        if (clientException != null) {
            // Handle client exceptions such as network exceptions
            clientException.printStackTrace();
        }
        if (serviceException != null) {
            // Handle server-side exceptions
            OSSLog.logError("Error: " + serviceException.getRawMessage());
        }
    }
});
task.waitUntilFinished();
```

Replace the placeholders with actual values:

**Placeholder**

**Description**

**Example**

`<your-bucket-name>`

Name of the bucket

`my-bucket`

`<your-symlink-name>`

Name of the symbolic link to query

`my-symlink.jpg`

## What's next

-   [PutSymlink](/help/en/oss/developer-reference/putsymlink#reference-qzz-qzw-wdb) — API reference for creating a symbolic link
    
-   [GetSymlink](/help/en/oss/developer-reference/getsymlink#reference-s3d-s1x-wdb) — API reference for querying a symbolic link
    
-   [GitHub — SymlinkTest.java](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/SymlinkTest.java) — complete sample code
    
-   [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib) — how to initialize an OSSClient instance
