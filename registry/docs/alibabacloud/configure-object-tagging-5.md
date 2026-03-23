OSS supports object tagging to classify objects in buckets. You can set lifecycle rules and access permissions for objects that have the same tags.

## Notes

-   Before you configure object tags, make sure that you understand the feature. For more information, see [Object tagging](/help/en/oss/user-guide/object-tagging-8).
    

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   Object tagging is supported only in Java SDK 3.5.0 and later.
    
-   To set object tags, you must have the `oss:PutObjectTagging` permission. For more information, see [Grant custom access policies to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Add object tags when you upload an object

The following code provides examples of how to add object tags to an object during a simple upload, multipart upload, append upload, and resumable upload.

-   Add object tags during a simple upload
    
    The following code shows an example of adding object tags during a simple upload.
    
    ```
    import com.aliyun.oss.ClientException;
    import com.aliyun.oss.OSS;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.OSSClientBuilder;
    import com.aliyun.oss.OSSException;
    import com.aliyun.oss.model.*;
    import java.io.ByteArrayInputStream;
    import java.util.HashMap;
    import java.util.Map;
    import com.aliyun.oss.ClientBuilderConfiguration;
    import com.aliyun.oss.common.comm.SignVersion;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // Set the endpoint. Use the China (Hangzhou) region as an example. Set the endpoint to your actual region.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt.
            String objectName = "exampledir/exampleobject.txt";
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
                Map<String, String> tags = new HashMap<String, String>();
                // Specify the key and value for the object tag. Example: owner and John.
                tags.put("owner", "John");
                tags.put("type", "document");
    
                // Set the tag information in the HTTP header.
                ObjectMetadata metadata = new ObjectMetadata();
                metadata.setObjectTagging(tags);
    
                // Set the tag information when you upload the file.
                String content = "<yourtContent>";
                ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(content.getBytes()), metadata);
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
    
-   Add object tags during a multipart upload
    
    The following code demonstrates how to add object tags during a multipart upload.
    
    ```
    import com.aliyun.oss.ClientException;
    import com.aliyun.oss.OSS;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.OSSClientBuilder;
    import com.aliyun.oss.OSSException;
    import com.aliyun.oss.model.*;
    import java.io.*;
    import java.util.*;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // Set the endpoint. Use the China (Hangzhou) region as an example. Set the endpoint to your actual region.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt.
            String objectName = "exampledir/exampleobject.txt";
            // Specify the full path of the local file. If you do not specify a local path, the file is uploaded from the local path that corresponds to the project where the sample program is located.
            String localFile = "D:\\localpath\\examplefile.txt";
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
                /*
                   Step 1: Initialize a multipart upload event.
                */
                // Set the tag information in the HTTP header.
                Map<String, String> tags = new HashMap<String, String>();
                // Specify the key and value for the object tag. Example: owner and John.
                tags.put("owner", "John");
                tags.put("type", "document");
    
                ObjectMetadata metadata = new ObjectMetadata();
                metadata.setObjectTagging(tags);
    
                // Set the tag information when you send an InitiateMultipartUploadRequest request.
                InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucketName, objectName, metadata);
                InitiateMultipartUploadResult result = ossClient.initiateMultipartUpload(request);
                // The upload ID is returned, which uniquely identifies the multipart upload event. You can use this ID to perform operations, such as aborting the multipart upload and querying multipart uploads.
                String uploadId = result.getUploadId();
    
                /*
                   Step 2: Upload parts.
                */
                // partETags is a collection of PartETag objects. A PartETag consists of the ETag and part number of a part.
                List<PartETag> partETags =  new ArrayList<PartETag>();
                // Calculate the number of parts.
                final long partSize = 1 * 1024 * 1024L;   // 1 MB.
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
                    InputStream instream = null;
                    try {
                        instream = new FileInputStream(sampleFile);
                        // Skip the uploaded parts.
                        instream.skip(startPos);
                    } catch (FileNotFoundException e) {
                        e.printStackTrace();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    UploadPartRequest uploadPartRequest = new UploadPartRequest();
                    uploadPartRequest.setBucketName(bucketName);
                    uploadPartRequest.setKey(objectName);
                    uploadPartRequest.setUploadId(uploadId);
                    uploadPartRequest.setInputStream(instream);
                    // Set the part size. The minimum size of a part is 100 KB, except for the last part.
                    uploadPartRequest.setPartSize(curPartSize);
                    // Set the part number. Each uploaded part has a part number that ranges from 1 to 10,000. If the part number is not in the valid range, OSS returns an InvalidArgument error.
                    uploadPartRequest.setPartNumber( i + 1);
                    // Parts can be uploaded in any order and from different clients. OSS combines the parts into a complete object based on their part numbers.
                    UploadPartResult uploadPartResult = ossClient.uploadPart(uploadPartRequest);
                    // After each part is uploaded, the response from OSS contains a PartETag. The PartETag is saved to partETags.
                    partETags.add(uploadPartResult.getPartETag());
                }
    
                /* Step 3: Complete the multipart upload.
                 */
                // The partETags must be sorted in ascending order by part number.
                Collections.sort(partETags, new Comparator<PartETag>() {
                    public int compare(PartETag p1, PartETag p2) {
                        return p1.getPartNumber() - p2.getPartNumber();
                    }
                });
                // When you perform this operation, you must provide all valid partETags. After OSS receives the submitted partETags, it verifies the validity of each part. After all parts are verified, OSS combines them into a complete object.
                CompleteMultipartUploadRequest completeMultipartUploadRequest =
                        new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);
                ossClient.completeMultipartUpload(completeMultipartUploadRequest);
    
                // View the tag information of the object.
                TagSet tagSet = ossClient.getObjectTagging(bucketName, objectName);
                Map<String, String> getTags = tagSet.getAllTags();
                System.out.println("object tagging: "+ getTags.toString());
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
    
-   Add object tags during an append upload
    
    The following code demonstrates how to add object tags during an append upload.
    
    ```
    import com.aliyun.oss.ClientException;
    import com.aliyun.oss.OSS;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.OSSClientBuilder;
    import com.aliyun.oss.OSSException;
    import com.aliyun.oss.model.*;
    import java.io.*;
    import java.util.*;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // Set the endpoint. Use the China (Hangzhou) region as an example. Set the endpoint to your actual region.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt.
            String objectName = "exampledir/exampleobject.txt";
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
                String content1 = "Hello OSS A \n";
                String content2 = "Hello OSS B \n";
                String content3 = "Hello OSS C \n";
    
                Map<String, String> tags = new HashMap<String, String>();
                // Specify the key and value for the object tag. Example: owner and John.
                tags.put("owner", "John");
                tags.put("type", "document");
    
                ObjectMetadata meta = new ObjectMetadata();
                // Set the tags for the uploaded object.
                meta.setObjectTagging(tags);
                // Specify the content type of the uploaded object.
                meta.setContentType("text/plain");
    
                // Set multiple parameters using AppendObjectRequest.
                AppendObjectRequest appendObjectRequest = new AppendObjectRequest(bucketName, objectName, new ByteArrayInputStream(content1.getBytes()), meta);
    
                // Set a single parameter using AppendObjectRequest.
                //appendObjectRequest.setBucketName(bucketName);
                //appendObjectRequest.setKey(objectName);
                // Set the content to append. The content can be of the InputStream or File type. In this example, the content is of the InputStream type.
                //appendObjectRequest.setInputStream(new ByteArrayInputStream(content1.getBytes()));
                // Set the content to append. The content can be of the InputStream or File type. In this example, the content is of the File type.
                // Specify the full path of the local file. If you do not specify a local path, the file is uploaded from the local path that corresponds to the project where the sample program is located.
                //appendObjectRequest.setFile(new File("D:\\localpath\\examplefile.txt"));
                // Specify the metadata of the object. The metadata is valid only for the first append operation.
                //appendObjectRequest.setMetadata(meta);
    
                // The first append operation. The tags that you set are valid only for the first append upload.
                // Set the position from which to start appending data.
                appendObjectRequest.setPosition(0L);
                AppendObjectResult appendObjectResult = ossClient.appendObject(appendObjectRequest);
                // The 64-bit CRC value of the object.
                System.out.println(appendObjectResult.getObjectCRC());
    
                // The second append operation.
                // nextPosition indicates the position that must be provided in the next request, which is the current length of the object.
                appendObjectRequest.setPosition(appendObjectResult.getNextPosition());
                appendObjectRequest.setInputStream(new ByteArrayInputStream(content2.getBytes()));
                appendObjectResult = ossClient.appendObject(appendObjectRequest);
    
                // The third append operation.
                appendObjectRequest.setPosition(appendObjectResult.getNextPosition());
                appendObjectRequest.setInputStream(new ByteArrayInputStream(content3.getBytes()));
                appendObjectResult = ossClient.appendObject(appendObjectRequest);
    
                // View the tag information of the uploaded object.
                TagSet tagSet = ossClient.getObjectTagging(bucketName, objectName);
                Map<String, String> getTags = tagSet.getAllTags();
                System.out.println("object tagging: "+ getTags.toString());
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
    
-   Add object tags during a resumable upload
    
    The following code demonstrates how to add object tags during a resumable upload.
    
    ```
    import com.aliyun.oss.ClientException;
    import com.aliyun.oss.OSS;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.OSSClientBuilder;
    import com.aliyun.oss.OSSException;
    import com.aliyun.oss.model.*;
    import java.util.*;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // Set the endpoint. Use the China (Hangzhou) region as an example. Set the endpoint to your actual region.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt.
            String objectName = "exampledir/exampleobject.txt";
            // Specify the full path of the local file. If you do not specify a local path, the file is uploaded from the local path that corresponds to the project where the sample program is located.
            String localFile = "D:\\localpath\\examplefile.txt";
            // The file that records the results of a local multipart upload. The file must have a .ucp extension and be in the same directory as the local file specified by localFile.
            // After the upload is complete, this file is deleted.
            String yourCheckpointFile = "D:\\localpath\\uploadfile.ucp";
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
                // Set the tag information for the object.
                Map<String, String> tags = new HashMap<String, String>();
                // Specify the key and value for the object tag. Example: owner and John.
                tags.put("owner", "John");
                tags.put("type", "document");
    
                ObjectMetadata meta = new ObjectMetadata();
                // Specify the content type of the uploaded object.
                meta.setContentType("text/plain");
                // Set the object tags.
                meta.setObjectTagging(tags);
    
                // Set multiple parameters using UploadFileRequest.
                UploadFileRequest uploadFileRequest = new UploadFileRequest(bucketName,objectName);
    
                // Set a single parameter using UploadFileRequest.
                // Specify the bucket name.
                //uploadFileRequest.setBucketName(bucketName);
                // Specify the full path of the object. The full path cannot contain the bucket name.
                //uploadFileRequest.setKey(objectName);
                // Specify the local file to upload.
                uploadFileRequest.setUploadFile(localFile);
                // Specify the number of concurrent threads for the upload. The default value is 1.
                uploadFileRequest.setTaskNum(5);
                // Specify the size of each part. The value must be in the range of 100 KB to 5 GB. The default part size is 1/10,000 of the total object size.
                uploadFileRequest.setPartSize(1 * 1024 * 1024);
                // Enable resumable upload. By default, this feature is disabled.
                uploadFileRequest.setEnableCheckpoint(true);
                // The file that records the results of a local multipart upload. You must set this parameter when you enable resumable upload. The upload progress is saved to this file. If a part fails to be uploaded, the upload is resumed from the recorded breakpoint when you upload the part again. After the upload is complete, this file is deleted. By default, the file is in the same directory as the local file to be uploaded and is named uploadFile.ucp.
                uploadFileRequest.setCheckpointFile(yourCheckpointFile);
                // The metadata of the object.
                uploadFileRequest.setObjectMetadata(meta);
                // Set a callback for a successful upload. The parameter is of the Callback type.
                //uploadFileRequest.setCallback("yourCallbackEvent");
    
                // Perform a resumable upload and set object tags.
                ossClient.uploadFile(uploadFileRequest);
    
                // View the tag information of the object.
                TagSet tagSet = ossClient.getObjectTagging(bucketName, objectName);
                Map<String, String> getTags = tagSet.getAllTags();
                System.out.println("object tagging: "+ getTags.toString());
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
    

## Add or change object tags for an existing object

If you did not add object tags when you uploaded an object, or if the existing tags do not meet your requirements, you can add or change the tags for the object after it is uploaded.

The following code shows how to add or change object tags for an existing object.

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import java.util.*;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // Set the endpoint. Use the China (Hangzhou) region as an example. Set the endpoint to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt.
        String objectName = "exampledir/exampleobject.txt";
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
            Map<String, String> tags = new HashMap<String, String>();
            // Specify the key and value for the object tag. Example: owner and John.
            tags.put("owner", "John");
            tags.put("type", "document");

            // Set tags for the object.
            ossClient.setObjectTagging(bucketName, objectName, tags);
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

## Add or change object tags for a specific version of an object

In a versioning-enabled bucket, you can add or change the object tags for a specific version of an object by specifying its version ID.

The following code shows how to add or change object tags for a specific version of an object.

**Note**

For more information about how to obtain a version ID, see [List objects (Java SDK V1)](/help/en/oss/developer-reference/list-objects-1#concept-1995004).

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.SetObjectTaggingRequest;
import java.util.*;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // Set the endpoint. Use the China (Hangzhou) region as an example. Set the endpoint to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt.
        String objectName = "exampledir/exampleobject.txt";
        // Specify the version ID of the object. Example: CAEQMxiBgICAof2D0BYiIDJhMGE3N2M1YTI1NDQzOGY5NTkyNTI3MGYyMzJm****.
        String versionId = "CAEQMxiBgICAof2D0BYiIDJhMGE3N2M1YTI1NDQzOGY5NTkyNTI3MGYyMzJm****";
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
            Map<String, String> tags = new HashMap<String, String>(1);
            // Specify the key and value for the object tag. Example: owner and John.
            tags.put("owner", "John");
            tags.put("type", "document");

            SetObjectTaggingRequest setObjectTaggingRequest = new SetObjectTaggingRequest(bucketName, objectName, tags);
            setObjectTaggingRequest.setVersionId(versionId);
            ossClient.setObjectTagging(setObjectTaggingRequest);
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

## Set object tags when you copy an object

You can use the one of following methods to configure object tagging when you copy an object:

-   Copy: The tag of the source object is copied to the destination object.
    
-   Replace: The destination object has the tag specified in the request instead of the tag of the source object.
    

The following code provides examples of how to set object tags when you copy an object using a simple copy operation for objects smaller than 1 GB and a multipart copy operation for objects that are 1 GB or larger.

-   Set object tags during a simple copy
    
    The following code provides an example of how to set object tags when you copy an object that is smaller than 1 GB.
    
    ```
    import com.aliyun.oss.ClientException;
    import com.aliyun.oss.OSS;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.OSSClientBuilder;
    import com.aliyun.oss.OSSException;
    import com.aliyun.oss.internal.OSSHeaders;
    import com.aliyun.oss.model.CopyObjectRequest;
    import com.aliyun.oss.model.CopyObjectResult;
    import com.aliyun.oss.model.TagSet;
    import java.util.*;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // Set the endpoint. Use the China (Hangzhou) region as an example. Set the endpoint to your actual region.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the source bucket. Example: srcexamplebucket.
            String sourceBucketName = "srcexamplebucket";
            // Specify the full path of the source object. The full path cannot contain the bucket name. Example: srcexampledir/exampleobject.txt.
            String sourceObjectName = "srcexampledir/exampleobject.txt";
            // Specify the name of the destination bucket. Example: destexamplebucket.
            String destinationBucketName = "destexamplebucket";
            // Specify the full path of the destination object. The full path cannot contain the bucket name. Example: destexampledir/exampleobject.txt.
            String destinationObjectName = "destexampledir/exampleobject.txt";
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
                // Create a CopyObjectRequest object.
                CopyObjectRequest copyObjectRequest = new CopyObjectRequest(sourceBucketName, sourceObjectName, destinationBucketName, destinationObjectName);
    
                // Set tags for the destination object. If you do not set headers, the tags of the source object are copied to the destination object by default.
                Map<String, String> headers = new HashMap<String, String>();
                headers.put(OSSHeaders.COPY_OBJECT_TAGGING_DIRECTIVE, "REPLACE");
                headers.put(OSSHeaders.OSS_TAGGING, "key1=value1&key2=value2");
                copyObjectRequest.setHeaders(headers);
    
                // Copy the object.
                CopyObjectResult result = ossClient.copyObject(copyObjectRequest);
                System.out.println("ETag: " + result.getETag() + " LastModified: " + result.getLastModified());
    
                // View the tag information of the destination object.
                TagSet tagSet = ossClient.getObjectTagging(destinationBucketName, destinationObjectName);
                Map<String, String> getTags = tagSet.getAllTags();
                System.out.println("dest object tagging: "+ getTags.toString());
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
    
-   Set object tags during a multipart copy
    
    The following code provides an example of how to set object tags when copying an object that is 1 GB or larger.
    
    ```
    import com.aliyun.oss.ClientException;
    import com.aliyun.oss.OSS;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.OSSClientBuilder;
    import com.aliyun.oss.OSSException;
    import com.aliyun.oss.model.*;
    import java.util.*;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // Set the endpoint. Use the China (Hangzhou) region as an example. Set the endpoint to your actual region.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the source bucket. Example: srcexamplebucket.
            String sourceBucketName = "srcexamplebucket";
            // Specify the full path of the source object. The full path cannot contain the bucket name. Example: srcexampledir/exampleobject.txt.
            String sourceObjectName = "srcexampledir/exampleobject.txt";
            // Specify the name of the destination bucket. Example: destexamplebucket.
            String destinationBucketName = "destexamplebucket";
            // Specify the full path of the destination object. The full path cannot contain the bucket name. Example: destexampledir/exampleobject.txt.
            String destinationObjectName = "destexampledir/exampleobject.txt";
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
                ObjectMetadata objectMetadata = ossClient.getObjectMetadata(sourceBucketName, sourceObjectName);
                // Obtain the size of the object to be copied.
                long contentLength = objectMetadata.getContentLength();
                // Set the part size to 10 MB.
                long partSize = 1024 * 1024 * 10;
                // Calculate the total number of parts.
                int partCount = (int) (contentLength / partSize);
                if (contentLength % partSize != 0) {
                    partCount++;
                }
    
                System.out.println("total part count:" + partCount);
    
                // Set the tag information in the HTTP header.
                Map<String, String> tags2 = new HashMap<String, String>();
                // Specify the key and value for the object tag. Example: owner and Lily.
                tags2.put("owner", "Lily");
                tags2.put("type", "document");
    
                ObjectMetadata metadata = new ObjectMetadata();
                metadata.setObjectTagging(tags2);
    
                // Initialize the copy task. At the same time, set tags for the destination object.
                InitiateMultipartUploadRequest initiateMultipartUploadRequest = new InitiateMultipartUploadRequest(destinationBucketName, destinationObjectName, metadata);
                InitiateMultipartUploadResult initiateMultipartUploadResult = ossClient.initiateMultipartUpload(initiateMultipartUploadRequest);
                String uploadId = initiateMultipartUploadResult.getUploadId();
    
                // Copy parts.
                List<PartETag> partETags = new ArrayList<PartETag>();
                for (int i = 0; i < partCount; i++) {
                    // Calculate the size of each part.
                    long skipBytes = partSize * i;
                    long size = partSize < contentLength - skipBytes ? partSize : contentLength - skipBytes;
    
                    // Create an UploadPartCopyRequest. You can specify conditions in the UploadPartCopyRequest.
                    UploadPartCopyRequest uploadPartCopyRequest =
                            new UploadPartCopyRequest(sourceBucketName, sourceObjectName, destinationBucketName, destinationObjectName);
                    uploadPartCopyRequest.setUploadId(uploadId);
                    uploadPartCopyRequest.setPartSize(size);
                    uploadPartCopyRequest.setBeginIndex(skipBytes);
                    uploadPartCopyRequest.setPartNumber(i + 1);
    
                    UploadPartCopyResult uploadPartCopyResult = ossClient.uploadPartCopy(uploadPartCopyRequest);
                    // Save the returned ETag of the part to partETags.
                    partETags.add(uploadPartCopyResult.getPartETag());
                }
    
                // Submit the multipart copy task.
                CompleteMultipartUploadRequest completeMultipartUploadRequest = new CompleteMultipartUploadRequest(
                        destinationBucketName, destinationObjectName, uploadId, partETags);
                CompleteMultipartUploadResult completeMultipartUploadResult = ossClient.completeMultipartUpload(completeMultipartUploadRequest);
                System.out.println("versionId: "+completeMultipartUploadResult.getVersionId());
    
                // View the tag information of the source object.
                TagSet tagSet = ossClient.getObjectTagging(sourceBucketName, sourceObjectName);
                Map<String, String> getTags = tagSet.getAllTags();
                System.out.println("src object tagging: "+ getTags.toString());
    
                // View the tag information of the destination object.
                tagSet = ossClient.getObjectTagging(destinationBucketName, destinationObjectName);
                getTags = tagSet.getAllTags();
                System.out.println("dest object tagging: "+ getTags.toString());
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
    

## Set object tags for a symbolic link

The following code shows how to set object tags for a symbolic link.

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.*;
import java.util.*;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // Set the endpoint. Use the China (Hangzhou) region as an example. Set the endpoint to your actual region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the symbolic link. Example: shortcut/myobject.txt.
        String symLink = "shortcut/myobject.txt";
        // Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt.
        String destinationObjectName = "exampledir/exampleobject.txt";
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
            // Set the tag information for the symbolic link.
            Map<String, String> tags = new HashMap<String, String>();
            // Specify the key and value for the object tag. Example: owner and John.
            tags.put("owner", "John");
            tags.put("type", "document");

            // Create metadata for the uploaded file.
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setObjectTagging(tags);

            // Create a CreateSymlinkRequest.
            CreateSymlinkRequest createSymlinkRequest = new CreateSymlinkRequest(bucketName, symLink, destinationObjectName);

            // Set the metadata.
            createSymlinkRequest.setMetadata(metadata);

            // Create the symbolic link.
            ossClient.createSymlink(createSymlinkRequest);

            // View the tag information of the symbolic link.
            TagSet tagSet = ossClient.getObjectTagging(bucketName, symLink);
            Map<String, String> getTags = tagSet.getAllTags();
            System.out.println("symLink tagging: "+ getTags.toString());
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

-   For the complete sample code that is used to set object tags, see [GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/ObjectTaggingSample.java).
    
-   For more information about the API operation that is used to set object tags, see [PutObjectTagging](/help/en/oss/developer-reference/putobjecttagging#reference-185784).
