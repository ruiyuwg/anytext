OSS Image Processing (IMG) lets you resize, crop, rotate, and transform images stored in OSS without modifying the source objects. Processing happens on download: attach an `x-oss-process` parameter to the request, and OSS returns the transformed image.

## Prerequisites

Before you begin, ensure that you have:

-   An initialized `OSSClient` instance. See [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib) for setup options, including custom domain names and Security Token Service (STS)
    
-   An image object uploaded to an OSS bucket
    

## How it works

All three access methods follow the same pattern: attach `x-oss-process:<operation>` to a download request. The operation string specifies the transformation to apply.

For example, `image/resize,m_fixed,w_100,h_100` resizes the image to exactly 100×100 pixels. To apply a different transformation, replace this string with the corresponding IMG parameter. See [IMG parameters](/help/en/oss/user-guide/overview-17/#section-tx1-qtj-ar8) for the full list.

**Note**

IMG parameters apply only to the downloaded image data. The source object in OSS is not modified. To save a processed image as a new object, see [Save processed images](#section-omx-ylp-wfb).

## Apply image processing

Choose the access method that matches your use case:

**Method**

**When to use**

[Authorized access](#section-f046c50f)

Signed download requests using the Android SDK — the most common approach

[Access using the OSS SDK](#section-c6d12612)

Simplified SDK usage with minimal setup

[Anonymous access](#section-a5eea6e6)

Publicly readable objects that don't require signing

### Authorized access

Call `request.setxOssProcess()` to attach the processing parameter to a signed download request.

```
// Create a download request.
// Replace "examplebucket" with your bucket name.
// Replace "exampledir/exampleobject.jpg" with the full object path (excluding the bucket name).
GetObjectRequest request = new GetObjectRequest("examplebucket", "exampledir/exampleobject.jpg");

// Attach the image processing parameter.
// Replace the value with the IMG operation you want to apply.
request.setxOssProcess("image/resize,m_fixed,w_100,h_100");

OSSAsyncTask task = oss.asyncGetObject(request, new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
    @Override
    public void onSuccess(GetObjectRequest request, GetObjectResult result) {
        InputStream inputStream = result.getObjectContent();
        byte[] buffer = new byte[2048];
        int len;

        try {
            while ((len = inputStream.read(buffer)) != -1) {
                // Process the downloaded image data.
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onFailure(GetObjectRequest request, ClientException clientException, ServiceException serviceException) {
        // Handle exceptions as needed.
    }
});
```

To apply a different transformation, replace the value passed to `setxOssProcess()`. For example, use `"image/rotate,90"` to rotate the image 90 degrees.

### Access using the OSS SDK

```
GetObjectRequest request = new GetObjectRequest("bucket-name", "image-name");
request.setxOssProcess("image/resize,m_lfit,w_100,h_100");
OSSAsyncTask task = ossClient.asyncGetObject(request, getCallback);
```

### Anonymous access

For publicly readable objects, generate a URL with `presignPublicObjectURL()`, then append `x-oss-process:<operation>` as a query parameter.

```
String url = oss.presignPublicObjectURL(testBucket, testObject);
OSSLog.logDebug("signPublicURL", "get url: " + url);
// Append x-oss-process to the URL.
// Example: url + "?x-oss-process=image/resize,m_fixed,w_100,h_100"
```

## Save processed images

To persist a processed image as a new object in OSS, use `ImagePersistRequest` and `asyncImagePersist()`.

The following parameters are required:

**Parameter**

**Description**

**Example**

`fromBucket`

Source bucket name

`my-source-bucket`

`fromObjectKey`

Full path of the source object, including the file extension

`photos/sample.jpg`

`toBucket`

Destination bucket name

`my-output-bucket`

`toObjectKey`

Full path of the destination object, including the file extension

`processed/sample-resized.jpg`

`action`

IMG operation string to apply

`image/resize,m_lfit,w_100,h_100`

```
ImagePersistRequest request = new ImagePersistRequest(
    fromBucket,
    fromObjectKey,
    toBucket,
    toObjectKey,
    action
);

OSSAsyncTask task = oss.asyncImagePersist(request, new OSSCompletedCallback<ImagePersistRequest, ImagePersistResult>() {
    @Override
    public void onSuccess(ImagePersistRequest request, ImagePersistResult result) {
        Log.i("info", "Success");
    }

    @Override
    public void onFailure(ImagePersistRequest request, ClientException clientException, ServiceException serviceException) {
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

## What's next

-   [IMG parameters](/help/en/oss/user-guide/overview-17/#section-tx1-qtj-ar8) — full reference for all supported image transformations
    
-   [Complete sample code on GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/ImagePersistTest.java)
    
-   [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib) — set up your `OSSClient` instance
