This topic describes how to copy an object within a bucket or across buckets in the same region.

## Precautions

-   To copy a file, you must have read permissions on the source file and read and write permissions on the destination bucket.
    
-   Cross-region copy is not supported. For example, you cannot copy a file from a bucket in the China (Hangzhou) region to a bucket in the China (Qingdao) region.
    
-   The size of the file to copy cannot exceed 1 GB.
    
-   Before you run the sample code in this topic, you must create an OSSClient instance by using methods such as using a custom domain name or Security Token Service (STS). For more information, see [Initialization](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
    

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Definition**

CopyObject

`oss:GetObject`

Copies objects within a bucket or between buckets in the same region.

`oss:PutObject`

`oss:GetObjectVersion`

If you specify the source object version through versionId, this permission is also required.

`oss:GetObjectTagging`

If you copy object tags through x-oss-tagging, these permissions are required.

`oss:PutObjectTagging`

`oss:GetObjectVersionTagging`

If you specify the tags of a specific version of the source object through versionId, this permission is also required.

`kms:GenerateDataKey`

When copying an object, if the destination object metadata contains X-Oss-Server-Side-Encryption: KMS, these two permissions are required.

`kms:Decrypt`

## Sample code

The following code shows how to copy a file:

```
// Specify the name of the source bucket.
String srcBucketName = "src-bucket";
// Specify the full path of the object in the source bucket.
String srcObjectKey = "dir1/source-object.txt";
// Specify the name of the destination bucket, which must be in the same region as the source bucket.
String destBucketName = "dest-bucket";
// Specify the full path of the object in the destination bucket.
String destObjectKey = "dir2/destination-object.txt";
// Create a copy request.
CopyObjectRequest copyObjectRequest = new CopyObjectRequest(srcBucketName, srcObjectKey, destBucketName, destObjectKey);

// ObjectMetadata objectMetadata = new ObjectMetadata();
// Set the access control list (ACL) of the object. In this example, the ACL is set to private.
// objectMetadata.setHeader("x-oss-object-acl", "private");
// Set the storage class of the object. In this example, the storage class is set to Standard.
// objectMetadata.setHeader("x-oss-storage-class", "Standard");
// Specify whether to overwrite an existing object that has the same name in the destination bucket. In this example, the value is set to true, which indicates that the existing object cannot be overwritten.
// objectMetadata.setHeader("x-oss-forbid-overwrite", "true");
// The copy operation is performed only if the ETag of the source object matches the specified ETag.
// objectMetadata.setHeader("x-oss-copy-source-if-match", "5B3C1A2E053D763E1B002CC607C5****");
// Specify the source address for the copy operation.
// objectMetadata.setHeader("x-oss-copy-source", "/example-bucket/recode-test.txt");
// The copy operation is performed only if the ETag of the source object does not match the specified ETag.
// objectMetadata.setHeader("x-oss-copy-source-if-none-match", "5B3C1A2E053D763E1B002CC607C5****");
// The copy operation is performed only if the actual modification time of the object is earlier than or the same as the specified time.
// objectMetadata.setHeader("x-oss-copy-source-if-unmodified-since", "2021-12-09T07:01:56.000Z");
// The copy operation is performed only if the source object was modified after the specified time.
// objectMetadata.setHeader("x-oss-copy-source-if-modified-since", "2021-12-09T07:01:56.000Z");
// Specify how to configure the metadata of the destination object. In this example, the value is set to COPY, which indicates that the metadata of the source object is copied to the destination object.
// objectMetadata.setHeader("x-oss-metadata-directive", "COPY");
// Specify the server-side encryption algorithm that OSS uses to create the destination object.
// objectMetadata.setHeader("x-oss-server-side-encryption", "SSE-KMS");
// The customer master key (CMK) managed by KMS. This parameter is valid only when x-oss-server-side-encryption is set to KMS.
// objectMetadata.setHeader("x-oss-server-side-encryption-key-id", "9468da86-3509-4f8d-a61e-6eab1eac****");
// Specify the tags of the object. You can specify multiple tags at the same time.
// objectMetadata.setHeader("x-oss-tagging", "a:1");
// Specify how to configure the tags of the destination object. In this example, the value is set to COPY, which indicates that the tags of the source object are copied to the destination object.
// objectMetadata.setHeader("x-oss-tagging-directive", "COPY");

// Perform an asynchronous copy.
OSSAsyncTask copyTask = oss.asyncCopyObject(copyObjectRequest, new OSSCompletedCallback<CopyObjectRequest, CopyObjectResult>() {
    @Override
    public void onSuccess(CopyObjectRequest request, CopyObjectResult result) {
        Log.d("copyObject", "copy success!");
    }

    @Override
    public void onFailure(CopyObjectRequest request, ClientException clientExcepion, ServiceException serviceException) {
        // The request failed.
        if (clientExcepion != null) {
            // A client exception occurred, such as a network exception.
            clientExcepion.printStackTrace();
        }
        if (serviceException != null) {
            // A server-side exception occurred.
            Log.e("ErrorCode", serviceException.getErrorCode());
            Log.e("RequestId", serviceException.getRequestId());
            Log.e("HostId", serviceException.getHostId());
            Log.e("RawMessage", serviceException.getRawMessage());
        }
    }
});
```

## References

-   For the complete sample code for copying a file, see [the example on GitHub](https://github.com/aliyun/aliyun-oss-android-sdk/blob/master/oss-android-sdk/src/androidTest/java/com/alibaba/sdk/android/ManageObjectTest.java).
    
-   For information about the API operation for copying a file, see [CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db).
    
-   For information about how to initialize an OSSClient instance, see [Initialize an OSSClient instance for Android](/help/en/oss/developer-reference/initialization-1#88938d5b6cvib).
