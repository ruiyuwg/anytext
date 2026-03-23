Object Storage Service (OSS) SDK for Android provides methods that can be used to verify data integrity and ensure data security when you upload, download, or copy objects.

## **Usage notes**

-   Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

## Background information

Due to the complex environment of mobile networks, an error may occur when data is transferred over a mobile network between the client and server. OSS SDK for Android provides the CRC-64 and MD5 verification methods to ensure data integrity.

## Cyclic Redundancy Check

If CRC-64 verification is enabled for data stream reading, OSS automatically verifies data integrity after data stream reading is complete.

The following sample code provides an example on how to enable CRC-64:

**Note**

In this example, synchronous operation getObject is used. An synchronous operation needs to run in a child thread.

```
// Specify the bucket name, such as examplebucket, and the full path of the object, such as exampledir/exampleobject.txt.
// Do not include the bucket name in the full path of the object.
String bucketName = "examplebucket";
String objectKey = "exampledir/exampleobject.txt";
GetObjectRequest request = new GetObjectRequest(bucketName, objectKey);
// Enable CRC-64 validation.
request.setCRC64(OSSRequest.CRC64Config.YES);
try{
    GetObjectResult result = oss.getObject(request);
    InputStream in = result.getObjectContent();
    ByteArrayOutputStream output = new ByteArrayOutputStream();
    byte[] buffer = new byte[2048];
    int len;
    while ((len = in.read(buffer)) > -1) {
        output.write(buffer, 0, len);
    }
    output.flush();
    in.close();
} catch (ServiceException e) {
    Log.e("ErrorCode", e.getErrorCode());
    Log.e("RequestId", e.getRequestId());
    Log.e("HostId", e.getHostId());
    Log.e("RawMessage", e.getRawMessage());
} catch (ClientException e) {
    e.printStackTrace();
} catch (IOException e) {
    e.printStackTrace();
}
```

## MD5 verification

To check whether the object that you uploaded by performing multipart upload is the same as the local file, you can upload the parts with the Content-MD5 value specified in the upload request. OSS checks MD5 value consistency to verify data integrity. The upload is successful only if the MD5 hash of the object received by the OSS server is the same as the Content-MD5 value. This method ensures the consistency of the uploaded object.

The following sample code provides an example on how to enable MD5 verification:

```
// Specify the bucket name, such as examplebucket, the full path of the object, such as exampledir/exampleobject.txt, and the full path of the local file, such as /storage/emulated/0/oss/examplefile.txt.
// Do not include the bucket name in the full path of the object.
String bucketName = "examplebucket";
String objectKey = "exampledir/exampleobject.txt";
String filePath = "/storage/emulated/0/oss/examplefile.txt";
// Construct an upload request.
ObjectMetadata metadata = new ObjectMetadata();
try {
    // Calculate the Base64-encoded MD5 hash.
    String fileMD5 = BinaryUtil.calculateBase64Md5(filePath);
    Log.i("oss", "file md5: " + fileMD5);
    metadata.setContentMD5(fileMD5);
} catch (IOException e) {
    Log.e("oss", "Calculate file md5 error: " + e.getMessage());
}
PutObjectRequest put = new PutObjectRequest(bucketName, objectKey, filePath);
put.setMetadata(metadata);

OSSAsyncTask task = oss.asyncPutObject(put, new OSSCompletedCallback<PutObjectRequest, PutObjectResult>() {
    @Override
    public void onSuccess(PutObjectRequest request, PutObjectResult result) {
        Log.d("PutObject", "UploadSuccess");
        Log.d("ETag", result.getETag());
        Log.d("RequestId", result.getRequestId());
    }

    @Override
    public void onFailure(PutObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // Handle request exceptions.
        if (clientExcepion != null) {
            // Handle client-side exceptions, such as network errors.
            clientExcepion.printStackTrace();
        }
        if (serviceException != null) {
            // Handle server-side exceptions.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

## References

-   For more information about how to initialize an OSSClient instance, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
