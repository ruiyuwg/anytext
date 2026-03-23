Conditional download lets you attach HTTP conditional headers to a `GetObjectRequest` so OSS returns the object only when your specified condition is met — otherwise it returns a `304 Not Modified` or `412 Precondition Failed` without transferring the object body. Use conditional download for cache validation and to ensure you only retrieve a specific version of an object.

## Prerequisites

Before you begin, ensure that you have:

-   An OSSClient instance initialized. For setup options, including custom domain names and Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
    

## Download conditions

Each condition is set as an HTTP request header. OSS evaluates the header against the stored object metadata before streaming the object body.

An object's ETag is a string that identifies a specific version of the object. Last-Modified is the timestamp of the object's most recent modification. Use ETag-based conditions (`If-Match`, `If-None-Match`) for version checks and timestamp-based conditions (`If-Modified-Since`, `If-Unmodified-Since`) for cache control.

> `If-Modified-Since` and `If-Unmodified-Since` can be used together. `If-Match` and `If-None-Match` can also be used together. To get an object's ETag, call `ossClient.getObjectMeta`.

**Header**

**Download condition**

**Response when condition is not met**

`If-Modified-Since`

Object was modified after the specified time

`304 Not Modified`

`If-Unmodified-Since`

Object was last modified at or before the specified time

`412 Precondition Failed`

`If-Match`

Object's ETag matches the specified value

`412 Precondition Failed`

`If-None-Match`

Object's ETag does not match the specified value

`304 Not Modified`

## Download an object conditionally

The following example uses `If-Modified-Since` to download `exampledir/exampleobject.txt` only if it has been modified after the specified date. The other three headers are shown commented out — uncomment any of them to apply that condition instead.

```
// Bucket name and full object path (the path must not include the bucket name)
String bucketName = "examplebucket";
String objectKey = "exampledir/exampleobject.txt";

// Build the conditional request headers
Map<String, String> headers = new HashMap<>();

// Download only if the object was modified after this date; otherwise returns 304 Not Modified
headers.put(OSSHeaders.GET_OBJECT_IF_MODIFIED_SINCE, "Fri, 13 Nov 2015 14:47:53 GMT");

// Download only if the object was NOT modified after this date; otherwise returns 412 Precondition Failed
// headers.put(OSSHeaders.GET_OBJECT_IF_UNMODIFIED_SINCE, "Fri, 13 Nov 2015 14:47:53 GMT");

// Download only if the object's ETag matches; otherwise returns 412 Precondition Failed
// headers.put(OSSHeaders.GET_OBJECT_IF_MATCH, "5B3C1A2E0563E1B002CC607C*****");

// Download only if the object's ETag does not match; otherwise returns 304 Not Modified
// headers.put(OSSHeaders.GET_OBJECT_IF_NONE_MATCH, "5B3C1A2E0563E1B002CC607C*****");

GetObjectRequest get = new GetObjectRequest(bucketName, objectKey);
get.setRequestHeaders(headers);

OSSAsyncTask task = oss.asyncGetObject(get, new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
    @Override
    public void onSuccess(GetObjectRequest request, GetObjectResult result) {
        InputStream inputStream = result.getObjectContent();
        byte[] buffer = new byte[2048];
        int len;
        try {
            while ((len = inputStream.read(buffer)) != -1) {
                // Process the downloaded data
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onFailure(GetObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        if (clientExcepion != null) {
            // Client-side error, such as a network failure
            clientExcepion.printStackTrace();
        }
        if (serviceException != null) {
            // Server-side error returned by OSS
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

## What's next

-   Full test code: [OSSGetObjectTest.java on GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/OSSGetObjectTest.java)
    
-   Underlying API: [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db)
    
-   OSSClient setup: [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib)
