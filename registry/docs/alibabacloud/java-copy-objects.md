This topic describes how to copy an object within a bucket or across buckets in the same region.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   This topic demonstrates creating an OSSClient instance with an OSS endpoint. For alternative configurations, such as using a custom domain or authenticating with credentials from Security Token Service (STS), see [Client configuration](/help/en/oss/developer-reference/oss-java-sdk/#fdfc11b71667l).
    
-   To copy an object, you must have read permissions on the source object and read and write permissions on the destination bucket.
    
-   Make sure that no retention policies are configured for the source bucket and the destination bucket. Otherwise, the error message The object you specified is immutable. is returned.
    
-   The source bucket and destination bucket must be in the same region. For example, objects cannot be copied from a bucket located in the China (Hangzhou) region to another bucket located in the China (Qingdao) region.
    

## Copy a small object

You can use the ossClient.copyObject method to copy an object that is smaller than 1 GB in size. The following table describes the configuration methods for ossClient.copyObject.

**Configuration method**

**Description**

CopyObjectResult copyObject(String sourceBucketName, String sourceKey, String destinationBucketName, String destinationKey)

Allows you to specify the source bucket, source object, destination bucket, and destination object. After an object is copied, the content and metadata of the destination object are the same as the content and metadata of the source object. This method is called simple copy.

CopyObjectResult copyObject(CopyObjectRequest copyObjectRequest)

Allows you to specify the metadata of the destination object and copy conditions. If the URLs of the source object and destination object are the same, the metadata that is specified in the request replaces the metadata of the source object.

The following table describes the parameters that you can configure for CopyObjectRequest.

**Parameter**

**Description**

**Method**

sourceBucketName

The name of the source bucket.

setSourceBucketName(String sourceBucketName)

sourceKey

The name of the source object.

setSourceKey(String sourceKey)

destinationBucketName

The name of the destination bucket.

setDestinationBucketName(String destinationBucketName)

destinationKey

The name of the destination object.

setDestinationKey(String destinationKey)

newObjectMetadata

The metadata of the destination object.

setNewObjectMetadata(ObjectMetadata newObjectMetadata)

matchingETagConstraints

The condition for the copy operation. If the ETag value of the source object is the same as the ETag value that is specified in the request, the copy operation is performed. Otherwise, an error is returned.

setMatchingETagConstraints(List<String> matchingETagConstraints)

nonmatchingEtagConstraints

The condition for the copy operation. If the ETag value of the source object is different from the ETag value that is specified in the request, the copy operation is performed. Otherwise, an error is returned.

setNonmatchingETagConstraints(List<String> nonmatchingEtagConstraints)

unmodifiedSinceConstraint

The condition for the copy operation. If the time that is specified in the request is equal to or later than the actual modified time of the source object, the copy operation is performed. Otherwise, an error is returned.

setUnmodifiedSinceConstraint(Date unmodifiedSinceConstraint)

modifiedSinceConstraint

The condition for the copy operation. If the source object is modified after the time that is specified in the request, the copy operation is performed. Otherwise, an error is returned.

setModifiedSinceConstraint(Date modifiedSinceConstraint)

The following table describes the parameters that you can configure for CopyObjectResult.

**Parameter**

**Description**

**Method**

etag

The unique tag of the object.

String getETag()

lastModified

The last modified time of the object.

Date getLastModified()

You can use one of the following methods to copy small objects:

-   Simple copy
    
    The following code provides an example on how to use simple copy to copy an object named srcexampleobject.txt from the srcexamplebucket bucket to an object named desexampleobject.txt in the desexamplebucket bucket:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.*;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the source bucket. 
            String sourceBucketName = "srcexamplebucket";
            // Specify the full path of the source object. Do not include the bucket name in the full path. 
            String sourceKey = "srcexampleobject.txt";
            // Specify the name of the destination bucket. The destination bucket must be located in the same region as the source bucket. 
            String destinationBucketName = "desexamplebucket";
            // Specify the full path of the destination object. Do not include the bucket name in the full path. 
            String destinationKey = "desexampleobject.txt";
            // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance. 
            // Call the shutdown method to release resources when the OSSClient is no longer in use.
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Copy the object. 
                CopyObjectResult result = ossClient.copyObject(sourceBucketName, sourceKey, destinationBucketName, destinationKey);
                System.out.println("ETag: " + result.getETag() + " LastModified: " + result.getLastModified());
            } catch (OSSException oe) {
                System.out.println("Caught an OSSException, which means your request made it to OSS, "
                        + "but was rejected with an error response for some reason.");
                System.out.println("Error Message:" + oe.getErrorMessage());
                System.out.println("Error Code:" + oe.getErrorCode());
                System.out.println("Request ID:" + oe.getRequestId());
                System.out.println("Host ID:" + oe.getHostId());
            } catch (ClientException ce) {
                System.out.println("Caught an ClientException, which means the client encountered "
                        + "a serious internal problem while trying to communicate with OSS, "
                        + "such as not being able to access the network.");
                System.out.println("Error Message:" + ce.getMessage());
            } finally {
                if (ossClient != null) {
                    ossClient.shutdown();
                }
            }
        }
    }                   
    ```
    
-   Use CopyObjectRequest to copy objects
    
    The following code provides an example on how to use CopyObjectRequest to copy an object named srcexampleobject.txt from the srcexamplebucket bucket to an object named desexampleobject.txt in the desexamplebucket bucket:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.*;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the source bucket. 
            String sourceBucketName = "srcexamplebucket";
            // Specify the full path of the source object. Do not include the bucket name in the full path. 
            String sourceKey = "srcexampleobject.txt";
            // Specify the name of the destination bucket. The destination bucket must be located in the same region as the source bucket. 
            String destinationBucketName = "desexamplebucket";
            // Specify the full path of the destination object. Do not include the bucket name in the full path. 
            String destinationKey = "desexampleobject.txt";
            // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // Call the shutdown method to release resources when the OSSClient is no longer in use. 
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Create a CopyObjectRequest object. 
                CopyObjectRequest copyObjectRequest = new CopyObjectRequest(sourceBucketName, sourceKey, destinationBucketName, destinationKey);
    
                // Configure new metadata for the object. 
                ObjectMetadata meta = new ObjectMetadata();
                meta.setContentType("text/plain");
                // Specify whether the CopyObject operation overwrites an object that has the same name. In this example, this parameter is set to true, which specifies that the operation does not overwrite an object that has the same name. 
                // meta.setHeader("x-oss-forbid-overwrite", "true");
                // Specify the path of the source object. 
                // meta.setHeader(OSSHeaders.COPY_OBJECT_SOURCE, "/examplebucket/recode-test.txt");
                // If the ETag value of the source object is the same as the ETag value specified in the request, OSS copies the object and returns 200 OK. 
                // meta.setHeader(OSSHeaders.COPY_OBJECT_SOURCE_IF_MATCH, "5B3C1A2E053D763E1B002CC607C5****");
                // If the ETag value of the source object is different from the ETag value specified in the request, OSS copies the object and returns 200 OK. 
                // meta.setHeader(OSSHeaders.COPY_OBJECT_SOURCE_IF_NONE_MATCH, "5B3C1A2E053D763E1B002CC607C5****");
                // If the time specified in the request is the same as or later than the modification time of the object, OSS copies the object and returns 200 OK. 
                // meta.setHeader(OSSHeaders.COPY_OBJECT_SOURCE_IF_UNMODIFIED_SINCE, "2021-12-09T07:01:56.000Z");
                // If the source object is modified after the time specified in the request, OSS copies the object. 
                // meta.setHeader(OSSHeaders.COPY_OBJECT_SOURCE_IF_MODIFIED_SINCE, "2021-12-09T07:01:56.000Z");
                // Specify the method that is used to configure the metadata of the destination object. In this example, the method is set to COPY, which specifies that the metadata of the source object is copied to the destination object. 
                // meta.setHeader(OSSHeaders.COPY_OBJECT_METADATA_DIRECTIVE, "COPY");
                // Specify the server-side encryption algorithm that is used to encrypt the destination object when the object is created. 
                // meta.setHeader(OSSHeaders.OSS_SERVER_SIDE_ENCRYPTION, ObjectMetadata.KMS_SERVER_SIDE_ENCRYPTION);
                // Specify the customer master key (CMK) that is managed by Key Management Service (KMS). This parameter takes effect only when you set x-oss-server-side-encryption to KMS. 
                // meta.setHeader(OSSHeaders.OSS_SERVER_SIDE_ENCRYPTION_KEY_ID, "9468da86-3509-4f8d-a61e-6eab1eac****");
                // Specify the access control list (ACL) of the destination object. In this example, the ACL is set to private, which specifies that only the object owner and authorized users have read and write permissions on the object. 
                // meta.setHeader(OSSHeaders.OSS_OBJECT_ACL, CannedAccessControlList.Private);
                // Specify the storage class of the destination object. In this example, the storage class is set to Standard. 
                // meta.setHeader(OSSHeaders.OSS_STORAGE_CLASS, StorageClass.Standard);
                // Specify tags for the destination object. You can specify multiple tags for the object at a time. 
                // meta.setHeader(OSSHeaders.OSS_TAGGING, "a:1");
                // Specify the method that is used to configure tags for the destination object. In this example, the method is set to COPY, which specifies that the tags of the source object are copied to the destination object. 
                // meta.setHeader(OSSHeaders.COPY_OBJECT_TAGGING_DIRECTIVE, "COPY");
                copyObjectRequest.setNewObjectMetadata(meta);
    
                // Copy the source object. 
                CopyObjectResult result = ossClient.copyObject(copyObjectRequest);
                System.out.println("ETag: " + result.getETag() + " LastModified: " + result.getLastModified());
            } catch (OSSException oe) {
                System.out.println("Caught an OSSException, which means your request made it to OSS, "
                        + "but was rejected with an error response for some reason.");
                System.out.println("Error Message:" + oe.getErrorMessage());
                System.out.println("Error Code:" + oe.getErrorCode());
                System.out.println("Request ID:" + oe.getRequestId());
                System.out.println("Host ID:" + oe.getHostId());
            } catch (ClientException ce) {
                System.out.println("Caught an ClientException, which means the client encountered "
                        + "a serious internal problem while trying to communicate with OSS, "
                        + "such as not being able to access the network.");
                System.out.println("Error Message:" + ce.getMessage());
            } finally {
                if (ossClient != null) {
                    ossClient.shutdown();
                }
            }
        }
    }                 
    ```
    

## Copy a large object

To copy an object whose size is larger than 1 GB, you must split the object into parts and sequentially copy the parts by using UploadPartCopy. To implement multipart copy, perform the following steps:

1.  Use ossClient.initiateMultipartUpload to initiate a multipart copy task.
    
2.  Use ossClient.uploadPartCopy to copy the parts. All parts except for the last part must be larger than 100 KB.
    
3.  Use ossClient.completeMultipartUpload to complete the multipart copy task.
    

The following code provides an example on how to use multipart copy to copy an object named srcexampleobject.txt from the srcexamplebucket bucket to an object named desexampleobject.txt object in the desexamplebucket bucket:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the source bucket. 
        String sourceBucketName = "srcexamplebucket";
        // Specify the full path of the source object. Do not include the bucket name in the full path. 
        String sourceKey = "srcexampleobject.txt";
        // Specify the name of the destination bucket. The destination bucket must be located in the same region as the source bucket. 
        String destinationBucketName = "desexamplebucket";
        // Specify the full path of the destination object. Do not include the bucket name in the full path. 
        String destinationKey = "desexampleobject.txt";
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // Call the shutdown method to release resources when the OSSClient is no longer in use. 
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {  
            ObjectMetadata objectMetadata = ossClient.getObjectMetadata(sourceBucketName, sourceKey);
            // Query the size of the object that you want to copy. 
            long contentLength = objectMetadata.getContentLength();

            // Set the size of each part to 10 MB. Unit: bytes. 
            long partSize = 1024 * 1024 * 10;

            // Calculate the total number of parts. 
            int partCount = (int) (contentLength / partSize);
            if (contentLength % partSize != 0) {
                partCount++;
            }
            System.out.println("total part count:" + partCount);

            // Initiate a multipart copy task. You can call the InitiateMultipartUploadRequest operation to specify the metadata of the destination object. 
            InitiateMultipartUploadRequest initiateMultipartUploadRequest = new InitiateMultipartUploadRequest(destinationBucketName, destinationKey);
            // Copy the ContentType and UserMetadata values of the source object. By default, the ContentType and UserMetadata values of the source object are not copied when you use multipart copy. 
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(objectMetadata.getContentType());
            metadata.setUserMetadata(objectMetadata.getUserMetadata());
            initiateMultipartUploadRequest.setObjectMetadata(metadata);
            InitiateMultipartUploadResult initiateMultipartUploadResult = ossClient.initiateMultipartUpload(initiateMultipartUploadRequest);
            String uploadId = initiateMultipartUploadResult.getUploadId();

            // Start the multipart copy task. 
            List<PartETag> partETags = new ArrayList<PartETag>();
            for (int i = 0; i < partCount; i++) {
                // Calculate the size of each part. 
                long skipBytes = partSize * i;
                long size = partSize < contentLength - skipBytes ? partSize : contentLength - skipBytes;

                // Create an UploadPartCopyRequest object. You can call the UploadPartCopyRequest operation to specify conditions. 
                UploadPartCopyRequest uploadPartCopyRequest =
                        new UploadPartCopyRequest(sourceBucketName, sourceKey, destinationBucketName, destinationKey);
                uploadPartCopyRequest.setUploadId(uploadId);
                uploadPartCopyRequest.setPartSize(size);
                uploadPartCopyRequest.setBeginIndex(skipBytes);
                uploadPartCopyRequest.setPartNumber(i + 1);
                //Map headers = new HashMap();
                // Specify the path of the source object. 
                // headers.put(OSSHeaders.COPY_OBJECT_SOURCE, "/examplebucket/desexampleobject.txt");
                // Specify the range of data that you want to copy. For example, if you set bytes to 0~1023, the first 1,024 bytes of the source object are copied. 
                // headers.put(OSSHeaders.COPY_SOURCE_RANGE, "bytes=0~1023");
                // If the ETag value of the source object is the same as the ETag value specified in the request, OSS copies the object and returns 200 OK. 
                // headers.put(OSSHeaders.COPY_OBJECT_SOURCE_IF_MATCH, "5B3C1A2E053D763E1B002CC607C5****");
                // If the ETag value of the source object is different from the ETag value specified in the request, OSS copies the object and returns 200 OK. 
                // headers.put(OSSHeaders.COPY_OBJECT_SOURCE_IF_NONE_MATCH, "5B3C1A2E053D763E1B002CC607C5****");
                // If the time specified in the request is the same as or later than the modification time of the object, OSS copies the object and returns 200 OK. 
                // headers.put(OSSHeaders.COPY_OBJECT_SOURCE_IF_UNMODIFIED_SINCE, "2021-12-09T07:01:56.000Z");
                // If the source object is modified after the time that is specified in the request, OSS copies the object. 
                // headers.put(OSSHeaders.COPY_OBJECT_SOURCE_IF_MODIFIED_SINCE, "2021-12-09T07:01:56.000Z");
                // uploadPartCopyRequest.setHeaders(headers);
                UploadPartCopyResult uploadPartCopyResult = ossClient.uploadPartCopy(uploadPartCopyRequest);

                // Store the returned PartETags in partETags. 
                partETags.add(uploadPartCopyResult.getPartETag());
            }

            // Complete the multipart copy task. 
            CompleteMultipartUploadRequest completeMultipartUploadRequest = new CompleteMultipartUploadRequest(
                    destinationBucketName, destinationKey, uploadId, partETags);
            ossClient.completeMultipartUpload(completeMultipartUploadRequest);
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## References

-   Copy a small object
    
    For more information about the API operation that you can call to copy a small object, see [CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db).
    
-   Copy a large object
    
    -   For more information about the complete sample code that is used to copy a large object, visit [GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/UploadPartCopySample.java).
        
    -   For more information about the API operation that you can call to copy a large object, see [UploadPartCopy](/help/en/oss/developer-reference/uploadpartcopy#reference-t4b-vpx-wdb).
