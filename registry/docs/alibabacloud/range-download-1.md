You can perform range download to download a specific range of data of an object.

## **Usage notes**

-   Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

## Examples

The following sample code provides an example on how to perform range download to download a specific range of data of an object:

```
// Construct a request to download a file.
// Specify the bucket name (for example, examplebucket) and the full path of the object (for example, exampledir/exampleobject.txt). The full path of the object cannot contain the bucket name.
GetObjectRequest get = new GetObjectRequest("examplebucket", "exampledir/exampleobject.txt");

// Set the range.
get.setRange(new Range(0, 99)); // Download 100 bytes of data from byte 0 to byte 99. The range starts from byte 0.
// get.setRange(new Range(100, Range.INFINITE)); // Download data from byte 100 to the end of the file.

OSSAsyncTask task = oss.asyncGetObject(get, new OSSCompletedCallback<GetObjectRequest, GetObjectResult>() {
    @Override
    public void onSuccess(GetObjectRequest request, GetObjectResult result) {
        // The request is successful.
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
        // The request failed.
        if (clientExcepion != null) {
            // A client exception occurred, such as a network error.
            clientExcepion.printStackTrace();
        }
        if (serviceException != null) {
            // A service exception occurred.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

## References

-   For the complete sample code that is used to perform range download, visit [GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/OSSGetObjectTest.java).
    
-   For more information about the API operation that you can call to perform range download, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).
    
-   For more information about how to initialize an OSSClient instance, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
