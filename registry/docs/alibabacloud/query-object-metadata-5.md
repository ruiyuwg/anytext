Use the HeadObject method to retrieve the metadata of an object without its content.

## **Notes**

-   Object metadata describes the properties of an object. It includes standard HTTP headers and user-defined metadata. You can set standard HTTP headers to define HTTP request policies, such as object cache policies or forced download policies. You can also set user-defined metadata to identify the purpose or properties of an object. For more information, see [Object metadata](/help/en/oss/user-guide/manage-object-metadata-10/#concept-lkf-swy-5db).
    
-   The OSS SDK for Android does not support setting or modifying object metadata.
    
-   Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

## Sample code

The following code shows how to retrieve object metadata.

```
// Create a request to synchronously get object metadata.
// Specify the bucket name, such as examplebucket, and the full path of the object, such as exampledir/exampleobject.txt. The full path cannot contain the bucket name.
HeadObjectRequest head = new HeadObjectRequest("examplebucket", "exampledir/exampleobject.txt");

// Get the object metadata.
OSSAsyncTask task = oss.asyncHeadObject(head, new OSSCompletedCallback<HeadObjectRequest, HeadObjectResult>() {
    @Override
    public void onSuccess(HeadObjectRequest request, HeadObjectResult result) {
    
    // Get the object length.
        Log.d("headObject", "object Size: " + result.getMetadata().getContentLength()); 
    // Get the object type.
        Log.d("headObject", "object Content Type: " + result.getMetadata().getContentType()); 
    }

    @Override
    public void onFailure(HeadObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Request exception.
        if (clientExcepion != null) {
            // A client exception occurred, such as a network error.
            clientExcepion.printStackTrace();
        }
        if (serviceException != null) {
            // A server exception occurred.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});

// task.waitUntilFinished(); // Wait for the task to complete.
```

## References

-   For more information about the API operation to retrieve object metadata, see [GetObjectMeta](/help/en/oss/developer-reference/getobjectmeta#reference-sg4-k2w-wdb).
    
-   For more information about how to initialize an OSSClient instance, see [Initialize an OSSClient instance for Android](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
