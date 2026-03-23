Learn the basic OSS Android SDK operations: creating a bucket, uploading an object, and downloading an object.

## Prerequisites

-   The Android SDK is installed. For more information, see [Install the Android SDK](/help/en/oss/developer-reference/installation-1#concept-32043-zh).
    
-   An AccessKey pair is created. For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair).
    
-   A Security Token Service (STS) authentication server is set up. For more information, see [Quickly build a service for direct data transfer from mobile apps](/help/en/oss/user-guide/set-up-direct-data-transfer-for-mobile-apps#concept-kxc-brw-5db).
    

## Object model overview

OSS organizes data with two core concepts:

**OSS concept**

**SDK class**

**Description**

Service operations

`OSSClient`

Entry point for all OSS operations. Requires an endpoint and a credential provider. When using V4 signing, also set the region.

Bucket

`CreateBucketRequest` / `CreateBucketResult`

A globally unique container that stores objects.

Object (upload)

`PutObjectRequest` / `PutObjectResult`

A file stored in a bucket. Upload with a bucket name, object name, and local file path.

Object (download)

`GetObjectRequest` / `GetObjectResult`

Download an object by bucket name and object name. Returns an `InputStream`.

Credentials

`OSSStsTokenCredentialProvider`

Supplies temporary STS credentials (AccessKey ID, AccessKey secret, and security token).

Async task

`OSSAsyncTask`

Handle for an asynchronous operation. Supports `cancel()` and `waitUntilFinished()`.

The examples below use the asynchronous API. Each async method accepts an `OSSCompletedCallback` that delivers either a success result or an error.

## Initialize the SDK

Every operation requires an `OSSClient` instance. The following code creates one with STS temporary credentials.

```
// Specify the endpoint of the region where the bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
String endpoint = "yourEndpoint";

// Specify the region. Example: cn-hangzhou
String region = "yourRegion";

// Temporary credentials obtained from STS.
String accessKeyId = "yourAccessKeyId";
String accessKeySecret = "yourAccessKeySecret";
String securityToken = "yourSecurityToken";

OSSCredentialProvider credentialProvider =
        new OSSStsTokenCredentialProvider(accessKeyId, accessKeySecret, securityToken);

ClientConfiguration config = new ClientConfiguration();
config.setSignVersion(SignVersion.V4);

// Create an OSSClient instance.
OSSClient oss = new OSSClient(getApplicationContext(), endpoint, credentialProvider);
oss.setRegion(region);
```

> The examples in this guide use STS temporary credentials for authentication. Never embed long-lived AccessKey pairs in mobile apps. For details on setting up an STS authentication server, see [Quickly build a service for direct data transfer from mobile apps](/help/en/oss/user-guide/set-up-direct-data-transfer-for-mobile-apps#concept-kxc-brw-5db).

## Sample project

A sample project with runnable examples is available on GitHub. The project includes examples for uploading local files, downloading files, resumable uploads, and setting callbacks.

-   Browse the sample folder: [GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/tree/master/app)
    
-   Clone the repository:
    
    ```
      git clone https://github.com/aliyun/aliyun-oss-android-sdk.git
    ```
    

Before running the sample project, configure the required parameters in the `Config` class:

```
public class Config {

    // Specify the endpoint. Example: China (Hangzhou) region.
    public static final String OSS_ENDPOINT = "https://oss-cn-hangzhou.aliyuncs.com";
    // Specify the callback URL.
    public static final String OSS_CALLBACK_URL = "https://oss-demo.aliyuncs.com:23450";
    // Specify the address of the STS authentication server.
    // You can also start a local STS authentication server using the script
    // in the sts_local_server directory of the project.
    public static final String STS_SERVER_URL = "http://****/sts/getsts";

    public static final String BUCKET_NAME = "yourBucketName";
    public static final String OSS_ACCESS_KEY_ID = "yourAccessKeyId";
    public static final String OSS_ACCESS_KEY_SECRET = "yourAccessKeySecret";

    public static final int DOWNLOAD_SUC = 1;
    public static final int DOWNLOAD_Fail = 2;
    public static final int UPLOAD_SUC = 3;
    public static final int UPLOAD_Fail = 4;
    public static final int UPLOAD_PROGRESS = 5;
    public static final int LIST_SUC = 6;
    public static final int HEAD_SUC = 7;
    public static final int RESUMABLE_SUC = 8;
    public static final int SIGN_SUC = 9;
    public static final int BUCKET_SUC = 10;
    public static final int GET_STS_SUC = 11;
    public static final int MULTIPART_SUC = 12;
    public static final int STS_TOKEN_SUC = 13;
    public static final int FAIL = 9999;
    public static final int REQUESTCODE_AUTH = 10111;
    public static final int REQUESTCODE_LOCALPHOTOS = 10112;
}
```

-   For details on the STS local server script, see [GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/app/sts_local_server/python).
    

## Create a bucket

A bucket is a globally unique namespace in OSS that stores objects. The following code creates a bucket asynchronously.

```
// Specify the endpoint of the region where the bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
String endpoint = "yourEndpoint";
// Specify the region. Example: cn-hangzhou
String region = "yourRegion";
// Temporary credentials obtained from STS.
String accessKeyId = "yourAccessKeyId";
String accessKeySecret = "yourAccessKeySecret";
String securityToken = "yourSecurityToken";

OSSCredentialProvider credentialProvider =
        new OSSStsTokenCredentialProvider(accessKeyId, accessKeySecret, securityToken);
ClientConfiguration config = new ClientConfiguration();
config.setSignVersion(SignVersion.V4);
// Create an OSSClient instance.
OSSClient oss = new OSSClient(getApplicationContext(), endpoint, credentialProvider);
oss.setRegion(region);

// Specify the bucket name.
CreateBucketRequest createBucketRequest = new CreateBucketRequest("bucketName");
// Set the access control list (ACL) to public-read. The default ACL is private.
createBucketRequest.setBucketACL(CannedAccessControlList.PublicRead);
// Specify the region where the bucket is located.
createBucketRequest.setLocationConstraint("oss-cn-hangzhou");

OSSAsyncTask createTask = oss.asyncCreateBucket(createBucketRequest,
        new OSSCompletedCallback<CreateBucketRequest, CreateBucketResult>() {
    @Override
    public void onSuccess(CreateBucketRequest request, CreateBucketResult result) {
        Log.d("locationConstraint", request.getLocationConstraint());
    }

    @Override
    public void onFailure(CreateBucketRequest request,
            ClientException clientException, ServiceException serviceException) {
        // Handle the error.
        if (clientException != null) {
            // A client-side error occurred, such as a network issue.
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

## Upload an object

The following code uploads a local file to a bucket.

```
// Specify the endpoint of the region where the bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
String endpoint = "yourEndpoint";
// Temporary credentials obtained from STS.
// Specify the region. Example: cn-hangzhou
String region = "yourRegion";
String accessKeyId = "yourAccessKeyId";
String accessKeySecret = "yourAccessKeySecret";
String securityToken = "yourSecurityToken";

OSSCredentialProvider credentialProvider =
        new OSSStsTokenCredentialProvider(accessKeyId, accessKeySecret, securityToken);
ClientConfiguration config = new ClientConfiguration();
config.setSignVersion(SignVersion.V4);
// Create an OSSClient instance.
OSSClient oss = new OSSClient(getApplicationContext(), endpoint, credentialProvider);
oss.setRegion(region);

// Create an upload request.
PutObjectRequest put = new PutObjectRequest("<bucketName>", "<objectName>", "<uploadFilePath>");

// Set a progress callback for the asynchronous upload.
put.setProgressCallback(new OSSProgressCallback<PutObjectRequest>() {
    @Override
    public void onProgress(PutObjectRequest request, long currentSize, long totalSize) {
        Log.d("PutObject", "currentSize: " + currentSize + " totalSize: " + totalSize);
    }
});

OSSAsyncTask task = oss.asyncPutObject(put,
        new OSSCompletedCallback<PutObjectRequest, PutObjectResult>() {
    @Override
    public void onSuccess(PutObjectRequest request, PutObjectResult result) {
        Log.d("PutObject", "UploadSuccess");
        Log.d("ETag", result.getETag());
        Log.d("RequestId", result.getRequestId());
    }

    @Override
    public void onFailure(PutObjectRequest request,
            ClientException clientExcepion, ServiceException serviceException) {
        // Handle the error.
        if (clientExcepion != null) {
            // A client-side error occurred, such as a network issue.
            clientExcepion.printStackTrace();
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
// task.cancel(); // Cancel the upload.
// task.waitUntilFinished(); // Wait until the upload completes.
```

## Download an object

The following code downloads an object from OSS to a local file.

```
// Specify the endpoint of the region where the bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
String endpoint = "yourEndpoint";
// Temporary credentials obtained from STS.
String accessKeyId = "yourAccessKeyId";
String accessKeySecret = "yourAccessKeySecret";
String securityToken = "yourSecurityToken";
// Specify the region. Example: cn-hangzhou
String region = "yourRegion";

OSSCredentialProvider credentialProvider =
        new OSSStsTokenCredentialProvider(accessKeyId, accessKeySecret, securityToken);
ClientConfiguration config = new ClientConfiguration();
config.setSignVersion(SignVersion.V4);
// Create an OSSClient instance.
OSSClient oss = new OSSClient(getApplicationContext(), endpoint, credentialProvider);
oss.setRegion(region);

// Create a download request.
GetObjectRequest get = new GetObjectRequest("<bucketName>", "<objectName>");

OSSAsyncTask task = oss.asyncGetObject(get,
        new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
    @Override
    public void onSuccess(GetObjectRequest request, GetObjectResult result) {
        // Download succeeded.
        Log.d("asyncGetObject", "DownloadSuccess");
        Log.d("Content-Length", "" + result.getContentLength());

        InputStream inputStream = result.getObjectContent();
        byte[] buffer = new byte[2048];
        int len;

        try {
            while ((len = inputStream.read(buffer)) != -1) {
                // Process the downloaded data here.
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    // If the GetObject request succeeds, a GetObjectResult is returned.
    // The GetObjectResult contains an input stream instance that you must process.
    public void onFailure(GetObjectRequest request,
            ClientException clientExcepion, ServiceException serviceException) {
        // Handle the error.
        if (clientExcepion != null) {
            // A client-side error occurred, such as a network issue.
            clientExcepion.printStackTrace();
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
// task.cancel(); // Cancel the download.
// task.waitUntilFinished(); // Wait until the download completes.
```

## Error handling

All async operations return errors through the `onFailure` callback. Two exception types are possible:

-   **`ClientException`** -- A client-side error, such as a network timeout or DNS resolution failure. Call `printStackTrace()` for details.
    
-   **`ServiceException`** -- A server-side error returned by OSS. Inspect the following fields to diagnose the issue:
    
    -   `getErrorCode()` -- The OSS error code (for example, `BucketAlreadyExists`).
        
    -   `getRequestId()` -- The unique request ID. Include this when contacting support.
        
    -   `getHostId()` -- The host that returned the error.
        
    -   `getRawMessage()` -- The raw error message from the server.
        

## What's next

-   [Create buckets](/help/en/oss/developer-reference/create-buckets-5) -- Create and configure buckets with the Android SDK.
    
-   [Authorize access](/help/en/oss/developer-reference/authorize-access) -- Learn about STS credentials and other authorization methods.
    
-   [Exception handling](/help/en/oss/developer-reference/exception-handling-3) -- Handle errors returned by OSS operations.
