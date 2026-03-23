This topic describes how to upload files (objects) to a versioning-enabled bucket.

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To upload a file, you must have the `oss:PutObject` permission. For more information, see [Grant custom access policies to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Simple upload

In a bucket with versioning enabled, OSS automatically generates a unique version ID for each new object. This ID is returned in the x-oss-version-id field of the response header. In a bucket with versioning suspended, the version ID of a new object is "null". If you upload an object with the same name, the new object overwrites the previous one. OSS ensures that only one version of an object has a "null" version ID.

The following code shows how to perform a simple upload:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.io.ByteArrayInputStream;

public class Demo {
    public static void main(String[] args) throws Exception {
        // The Endpoint for the China (Hangzhou) region is used as an example. Replace it with the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Get access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. The full path cannot contain the bucket name.
        String objectName = "exampledir/object";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // The following example shows how to upload a string.
            String content = "Hello OSS";
            PutObjectResult result = ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(content.getBytes()));
            // View the version ID of the uploaded object.
            System.out.println("result.versionid: " + result.getVersionId());
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

## Append upload

In a versioning-enabled bucket, you can append data only to the current version of an appendable object by calling the AppendObject operation. You cannot append data to a previous version of an appendable object.

**Note**

-   When you call the AppendObject operation on the current version of an appendable object, OSS does not create a previous version for the object.
    
-   When you call the PutObject or DeleteObject operation on the current version of an appendable object, OSS saves the appendable object as a previous version. You can no longer append data to this object.
    
-   You cannot call the AppendObject operation on the current version of a non-appendable object, such as a normal object or a delete marker.
    

The following code shows how to perform an append upload:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.io.ByteArrayInputStream;

public class Demo {
    public static void main(String[] args) throws Exception {
        // The Endpoint for the China (Hangzhou) region is used as an example. Replace it with the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Get access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. The full path cannot contain the bucket name.
        String objectName = "exampledir/object";
        String content1 = "Hello OSS A \n";
        String content2 = "Hello OSS B \n";
        String content3 = "Hello OSS C \n";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            ObjectMetadata meta = new ObjectMetadata();
            // Specify the content type of the uploaded content.
            meta.setContentType("text/plain");

            // Set multiple parameters using AppendObjectRequest.
            AppendObjectRequest appendObjectRequest = new AppendObjectRequest(bucketName, objectName, new ByteArrayInputStream(content1.getBytes()),meta);

            // Set a single parameter using AppendObjectRequest.
            // Set the bucket name.
            //appendObjectRequest.setBucketName("<yourBucketName>");
            // Set the file name.
            //appendObjectRequest.setKey("<yourObjectName>");
            // Set the content to append. You can use an InputStream or a File. This example uses an InputStream.
            //appendObjectRequest.setInputStream(new ByteArrayInputStream(content1.getBytes()));
            // Set the content to append. You can use an InputStream or a File. This example uses a File.
            //appendObjectRequest.setFile(new File("<yourLocalFile>"));
            // Specify the metadata of the file. This is valid only for the first append operation.
            //appendObjectRequest.setMetadata(meta);

            // First append operation.
            // Set the position to start appending data.
            appendObjectRequest.setPosition(0L);
            AppendObjectResult appendObjectResult = ossClient.appendObject(appendObjectRequest);
            // The 64-bit CRC value of the file.
            System.out.println(appendObjectResult.getObjectCRC());

            // Second append operation.
            // nextPosition specifies the position for the next append operation, which is the current length of the file.
            appendObjectRequest.setPosition(appendObjectResult.getNextPosition());
            appendObjectRequest.setInputStream(new ByteArrayInputStream(content2.getBytes()));
            appendObjectResult = ossClient.appendObject(appendObjectRequest);

            // Third append operation.
            appendObjectRequest.setPosition(appendObjectResult.getNextPosition());
            appendObjectRequest.setInputStream(new ByteArrayInputStream(content3.getBytes()));
            appendObjectResult = ossClient.appendObject(appendObjectRequest);
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

## Multipart upload

In a versioning-enabled bucket, you can call the CompleteMultipartUpload operation to complete a multipart upload. OSS generates a unique version ID for the entire file. This ID is returned in the x-oss-version-id field of the response header.

The following code shows how to perform a multipart upload:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        // The Endpoint for the China (Hangzhou) region is used as an example. Replace it with the actual Endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Get access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. The full path cannot contain the bucket name.
        String objectName = "exampledir/object";
        String localFile = "D://example.txt";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            /* Step 1: Initialize a multipart upload event.
             */
            InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucketName, objectName);
            InitiateMultipartUploadResult upresult = ossClient.initiateMultipartUpload(request);
            // The upload ID is returned. It is the unique identifier of the multipart upload event. You can use this upload ID to perform operations such as canceling or querying the multipart upload.
            String uploadId = upresult.getUploadId();

            /* Step 2: Upload parts.
             */
            // partETags is a collection of PartETag objects. A PartETag consists of the ETag and part number of a part.
            List<PartETag> partETags =  new ArrayList<PartETag>();
            // Calculate the number of parts.
            final long partSize = 1 * 1024 * 1024L;   // 1 MB
            final File sampleFile = new File(localFile);
            long fileLength = sampleFile.length();
            int partCount = (int) (fileLength / partSize);
            if (fileLength % partSize != 0) {
                partCount++;
            }
            // Traverse the parts and upload them.
            for (int i = 0; i < partCount; i++) {
                long startPos = i * partSize;
                long curPartSize = (i + 1 == partCount) ? (fileLength - startPos) : partSize;
                InputStream instream = new FileInputStream(sampleFile);
                // Skip the uploaded parts.
                instream.skip(startPos);
                UploadPartRequest uploadPartRequest = new UploadPartRequest();
                uploadPartRequest.setBucketName(bucketName);
                uploadPartRequest.setKey(objectName);
                uploadPartRequest.setUploadId(uploadId);
                uploadPartRequest.setInputStream(instream);
                // Set the part size. Except for the last part, the minimum size of each part is 100 KB.
                uploadPartRequest.setPartSize(curPartSize);
                // Set the part number. Each uploaded part has a part number that ranges from 1 to 10,000. If the part number is out of this range, OSS returns an InvalidArgument error code.
                uploadPartRequest.setPartNumber( i + 1);
                // The parts do not need to be uploaded in sequence. They can even be uploaded from different clients. OSS combines the parts into a complete file based on their part numbers.
                UploadPartResult uploadPartResult = ossClient.uploadPart(uploadPartRequest);
                // After each part is uploaded, the response from OSS contains a PartETag. The PartETag is saved to partETags.
                partETags.add(uploadPartResult.getPartETag());
            }

            /* Step 3: Complete the multipart upload.
             */
            // When you perform this operation, you must provide all valid partETags. After OSS receives the submitted partETags, it verifies the validity of each part. After all parts are verified, OSS combines them into a complete file.
            CompleteMultipartUploadRequest completeMultipartUploadRequest =
                    new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);

            CompleteMultipartUploadResult completeMultipartUploadResult = ossClient.completeMultipartUpload(completeMultipartUploadRequest);
            // View the version ID of the uploaded file.
            System.out.println("restore object versionid: " + completeMultipartUploadResult.getVersionId());

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

-   For more information about simple uploads, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).
    
-   For more information about append uploads, see [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db).
    
-   For more information about multipart uploads, see [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb).
