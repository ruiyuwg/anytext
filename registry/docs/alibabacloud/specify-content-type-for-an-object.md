Content-Type of an object specifies the type of the object and determines the method used to read the object.

## Usage notes

-   Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    
-   In some cases, you must specify Content-Type for the object that you want to upload. Otherwise, the object cannot be read using the specified method. If you do not specify Content-Type when you use Object Storage Service (OSS) SDK for Android to upload an object, OSS SDK for Android automatically specifies Content-Type based on the suffix of the object.
    

## Examples

The following sample code provides an example on how to specify Content-Type for an object:

```
// Create an upload request.
// Specify the bucket name (for example, examplebucket), the full path of the object (for example, exampledir/exampleobject.txt), and the full path of the local file (for example, /storage/emulated/0/oss/examplefile.txt).
// Do not include the bucket name in the full path of the object.
PutObjectRequest put = new PutObjectRequest("examplebucket", "exampledir/exampleobject.txt", "/storage/emulated/0/oss/examplefile.txt");

ObjectMetadata metadata = new ObjectMetadata();
// Specify the Content-Type.
metadata.setContentType("application/octet-stream");
// Specify custom user metadata.
metadata.addUserMetadata("x-oss-meta-name1", "value1");
put.setMetadata(metadata);

OSSAsyncTask task = oss.asyncPutObject(put, new OSSCompletedCallback<PutObjectRequest, PutObjectResult>() {
    ...
});
```

## References

-   For more information about how to initialize an OSSClient instance, see [Initialization (Android SDK)](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
