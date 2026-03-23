This topic describes how to delete a single object or delete multiple objects at a time.

**Warning**

Deleted objects cannot be restored. Exercise caution when you delete objects.

## Usage notes

-   To delete an object, you must have the write permissions on the bucket in which the object is stored.
    
-   Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

## Delete a single object

The following sample code provides an example on how to delete an object named exampleobject.txt from a bucket named examplebucket:

```
// Create a delete request.
// Specify the bucket name (for example, examplebucket) and the full path of the object (for example, exampledir/exampleobject.txt). The full path of the object cannot contain the bucket name.
DeleteObjectRequest delete = new DeleteObjectRequest("examplebucket", "exampledir/exampleobject.txt");
// Delete the object asynchronously.
OSSAsyncTask deleteTask = oss.asyncDeleteObject(delete, new OSSCompletedCallback<DeleteObjectRequest, DeleteObjectResult>() {
    @Override
    public void onSuccess(DeleteObjectRequest request, DeleteObjectResult result) {
        Log.d("asyncDeleteObject", "success!");
    }

    @Override
    public void onFailure(DeleteObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Request error.
        if (clientExcepion != null) {
            // A client exception occurred, such as a network exception.
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
```

## Delete multiple objects at a time

You can delete up to 1,000 objects at a time.

The deletion result can be returned in the following two modes. Select a return mode based on your requirements.

-   verbose (default): If isQuiet is not specified or is set to false, a list of all deleted objects is returned.
    
-   quiet: If isQuiet is set to true, a list of objects that failed to be deleted is returned.
    

The following sample code provides an example on how to delete multiple specified objects from a bucket named examplebucket and return the result in the quiet mode:

```
// Specify the full paths of the objects that you want to delete. The full paths of the objects cannot contain the bucket name.
List<String> objectKeys = new ArrayList<String>();
objectKeys.add("exampleobject.txt");
objectKeys.add("testfolder/sampleobject.txt");

// Set the mode to basic mode to return only the list of files that failed to be deleted.
DeleteMultipleObjectRequest request = new DeleteMultipleObjectRequest("examplebucket", objectKeys, true);

oss.asyncDeleteMultipleObject(request, new OSSCompletedCallback<DeleteMultipleObjectRequest, DeleteMultipleObjectResult>() {
    @Override
    public void onSuccess(DeleteMultipleObjectRequest request, DeleteMultipleObjectResult result) {
        Log.i("DeleteMultipleObject", "success");
    }

    @Override
    public void onFailure(DeleteMultipleObjectRequest request, ClientException clientException, ServiceException serviceException) {
        // Request error.
        if (clientException != null) {
            // A client exception occurred, such as a network exception.
            clientException.printStackTrace();
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
```

## References

-   Delete a single object
    
    For more information about the API operation that you can call to delete a single object, see [DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb).
    
-   Delete multiple objects at a time
    
    For information about the API operation that you can call to delete multiple objects at a time, see [DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb).
    
-   For more information about how to initialize an OSSClient instance, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
