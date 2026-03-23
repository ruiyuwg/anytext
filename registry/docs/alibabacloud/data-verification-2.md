OSS provides MD5 and 64-bit cyclic redundancy check (CRC-64) for data validation to ensure data integrity when you upload, download, and copy objects.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    

## MD5 validation

When you upload a file, you can set the Content-MD5 header to ensure data integrity. OSS calculates the MD5 hash of the received content. If the MD5 hash calculated by OSS does not match the MD5 hash that you provided, OSS returns an InvalidDigest error. If this error occurs, you must upload the file again.

MD5 validation is also supported for multipart uploads. For multipart uploads, MD5 validation is performed on each part. To do this, call the setMd5Digest method in UploadPartRequest to set the MD5 hash of the part that is calculated by the client.

**Note**

MD5 validation is supported for the putObject, getObject, appendObject, postObject, multipart upload, and uploadPart operations.

-   Perform MD5 validation when you upload a file:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.common.utils.BinaryUtil;
    import com.aliyun.oss.model.ObjectMetadata;
    import java.io.ByteArrayInputStream;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // This example uses the endpoint of the China (Hangzhou) region. Replace the value with the actual endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Specify the full path of the object. The full path cannot contain the bucket name.
            String objectName = "exampledir/object";
            // Specify the region where the bucket is located. This example uses cn-hangzhou for a bucket in the China (Hangzhou) region.
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
                // Upload a string.
                String content = "Hello OSS";
    
                ObjectMetadata meta = new ObjectMetadata();
                // Set MD5 validation.
                String md5 = BinaryUtil.toBase64String(BinaryUtil.calculateMd5(content.getBytes()));
                meta.setContentMD5(md5);
    
                ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(content.getBytes()), meta);
    
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
    
-   Perform MD5 validation for a multipart upload:
    
    ```
    import java.io.File;
    import java.io.FileInputStream;
    import java.io.InputStream;
    import java.util.ArrayList;
    import java.util.List;
    
    import com.aliyun.oss.ClientBuilderConfiguration;
    import com.aliyun.oss.OSS;
    import com.aliyun.oss.OSSClientBuilder;
    import com.aliyun.oss.common.auth.CredentialsProviderFactory;
    import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.common.utils.BinaryUtil;
    import com.aliyun.oss.model.CompleteMultipartUploadRequest;
    import com.aliyun.oss.model.CompleteMultipartUploadResult;
    import com.aliyun.oss.model.InitiateMultipartUploadRequest;
    import com.aliyun.oss.model.InitiateMultipartUploadResult;
    import com.aliyun.oss.model.PartETag;
    import com.aliyun.oss.model.UploadPartRequest;
    import com.aliyun.oss.model.UploadPartResult;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // This example uses the endpoint of the China (Hangzhou) region. Replace the value with the actual endpoint.
            String endpoint = "http://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.  
            String bucketName = "examplebucket";
            // Specify the full path of the object. The full path cannot contain the bucket name.
            String objectName = "exampledir/object";
            // The path of the local file to upload.
            String localFile = "D:\\localpath\\examplefile.txt";
            // Specify the region where the bucket is located. This example uses cn-hangzhou for a bucket in the China (Hangzhou) region.
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
            // Create an InitiateMultipartUploadRequest object.
            InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucketName, objectName);
            // To set the storage class when you initialize a multipart upload, see the following sample code.
            // ObjectMetadata metadata = new ObjectMetadata();
            // metadata.setHeader(OSSHeaders.OSS_STORAGE_CLASS, StorageClass.Standard.toString());
            // request.setObjectMetadata(metadata);
            // Initialize the multipart upload.
            InitiateMultipartUploadResult upresult = ossClient.initiateMultipartUpload(request);
            // The upload ID is returned. The upload ID uniquely identifies the multipart upload event. You can use the upload ID to perform operations, such as canceling the multipart upload and querying parts.
            String uploadId = upresult.getUploadId();
            // partETags is a collection of PartETag objects. A PartETag object consists of the ETag and part number of a part.
            List<PartETag> partETags = new ArrayList<PartETag>();
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
                InputStream instream1 = new FileInputStream(sampleFile);
             // Skip the uploaded parts.
                instream.skip(startPos);
                instream1.skip(startPos);
                String md5;
                if(i==partCount-1){
             // Note: For the last part, the data is read to the end-of-file, not the size of a part.
                    md5 = md5(instream1,fileLength - startPos);
                }else{
                    md5 = md5(instream1,partSize);
                }
              // instream1.skip(n)
                UploadPartRequest uploadPartRequest = new UploadPartRequest();
                uploadPartRequest.setBucketName(bucketName);
                uploadPartRequest.setKey(objectName);
                uploadPartRequest.setUploadId(uploadId);
                uploadPartRequest.setInputStream(instream);
                uploadPartRequest.setMd5Digest(md5);
             // Set the part size. The minimum size of a part is 100 KB, except for the last part.
                uploadPartRequest.setPartSize(curPartSize);
             // Set the part number. Each uploaded part has a part number that ranges from 1 to 10,000. If a part number is not in the range, OSS returns an InvalidArgument error.
                uploadPartRequest.setPartNumber( i + 1);
             // You do not need to upload parts in sequence. You can even upload parts from different clients. OSS combines the parts into a complete file based on their part numbers.
                UploadPartResult uploadPartResult = ossClient.uploadPart(uploadPartRequest);
             // System.out.println("server md5" +uploadPartResult.getETag());
             // After each part is uploaded, OSS returns a result that contains a PartETag. The PartETag is stored in partETags.
                partETags.add(uploadPartResult.getPartETag());
            }
            // Create a CompleteMultipartUploadRequest object.
            // When you complete a multipart upload, you must provide all valid partETags. After OSS receives the submitted partETags, it verifies the validity of each part. After all parts are verified, OSS combines them into a complete file.
            CompleteMultipartUploadRequest completeMultipartUploadRequest =
                    new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);
            // To set access permissions on the file when you complete the multipart upload, see the following sample code.
            // completeMultipartUploadRequest.setObjectACL(CannedAccessControlList.PublicRead);
            // Complete the upload.
            CompleteMultipartUploadResult completeMultipartUploadResult = ossClient.completeMultipartUpload(completeMultipartUploadRequest);
            // Shut down the OSSClient.
            ossClient.shutdown();
        }
        public static String md5(InputStream in , long length1) throws Exception{
            byte[] bytes = new byte[(int) length1];
            long length_tmp = length1;
            int readSize = in.read(bytes, (int) 0, (int) length_tmp);
            return BinaryUtil.toBase64String(BinaryUtil.calculateMd5(bytes));
        }
    }
    ```
    

## CRC-64 validation

By default, CRC-64 data validation is enabled for file upload, download, and copy operations to ensure data integrity.

**Note**

-   The putObject, getObject, appendObject, and uploadPart operations support CRC-64 validation. By default, CRC-64 validation is enabled for uploads. If the CRC value calculated by the client is different from the CRC value returned by the server, an InconsistentException error is thrown.
    
-   Range downloads do not support CRC-64 validation.
    
-   CRC-64 validation consumes CPU resources and may affect upload and download speeds.
    

-   Perform CRC-64 validation when you download a file:
    
    The following code shows how to use CRC-64 to validate data integrity when you download a file:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.common.utils.IOUtils;
    import com.aliyun.oss.internal.OSSHeaders;
    import com.aliyun.oss.internal.OSSUtils;
    import com.aliyun.oss.model.GetObjectRequest;
    import com.aliyun.oss.model.OSSObject;
    import java.io.BufferedReader;
    import java.io.InputStreamReader;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // This example uses the endpoint of the China (Hangzhou) region. Replace the value with the actual endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
            // Specify the full path of the object. The full path cannot contain the bucket name.
            String objectName = "exampledir/object";
            // Specify the region where the bucket is located. This example uses cn-hangzhou for a bucket in the China (Hangzhou) region.
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
                // Perform a streaming download.
                GetObjectRequest getObjectRequest = new GetObjectRequest(bucketName, objectName);
                OSSObject ossObject = ossClient.getObject(bucketName, objectName);
    
                // Read the file content. You can obtain clientCrc only after you read the file content.
                System.out.println("Object content:");
                BufferedReader reader = new BufferedReader(new InputStreamReader(ossObject.getObjectContent()));
                while (true) {
                    String line = reader.readLine();
                    if (line == null) break;
    
                    System.out.println("\n" + line);
                }
                // After the data is read, you must close the stream. Otherwise, connection leaks may occur. This causes the program to run out of available connections and stop working.
                reader.close();
    
                // Check whether CRC validation is enabled on the client. By default, it is enabled.
                Boolean isCrcCheckEnabled = ((OSSClient)ossClient).getClientConfiguration().isCrcCheckEnabled();
                // Check whether the request is for a range download. Range download does not support CRC validation.
                Boolean isRangGetRequest = getObjectRequest.getHeaders().get(OSSHeaders.RANGE) != null;
    
                // Validate the CRC. You can obtain clientCRC only after you read the file content.
                if (isCrcCheckEnabled && !isRangGetRequest) {
                    Long clientCRC = IOUtils.getCRCValue(ossObject.getObjectContent());
                    OSSUtils.checkChecksum(clientCRC, ossObject.getServerCRC(), ossObject.getRequestId());
                }
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
    
-   Perform CRC-64 validation for an append upload:
    
    The following code shows how to use CRC-64 to validate data integrity for an append upload:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.*;
    import java.io.ByteArrayInputStream;
    
    public class Demo {
          public static void main(String[] args) throws Exception {
              // This example uses the endpoint of the China (Hangzhou) region. Replace the value with the actual endpoint.
              String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
              // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
              EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
              // Specify the bucket name. Example: examplebucket.
              String bucketName = "examplebucket";
              // Specify the full path of the object, for example, exampleobject.txt. The full path cannot contain the bucket name.
              String objectName = "exampleobject.txt";
              // Specify the content for the first append operation. Example: Hello.
              String firstAppendContent = "Hello";
              // Specify the content for the second append operation. Example: World.
              String secondAppendContent = "World";        
              // Specify the region where the bucket is located. This example uses cn-hangzhou for a bucket in the China (Hangzhou) region.
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
                  // Perform the first append operation.
                  AppendObjectRequest appendObjectRequest = new AppendObjectRequest(bucketName, objectName, new ByteArrayInputStream(firstAppendContent.getBytes()));
                  appendObjectRequest.setPosition(0L);
                  // Initialize the CRC. After initialization, the SDK performs CRC validation on the upload result by default.
                  appendObjectRequest.setInitCRC(0L);
                  AppendObjectResult appendObjectResult = ossClient.appendObject(appendObjectRequest);
      
                  // Perform the second append operation.
                  appendObjectRequest = new AppendObjectRequest(bucketName, objectName, new ByteArrayInputStream(secondAppendContent.getBytes()));
                  appendObjectRequest.setPosition(appendObjectResult.getNextPosition());
                  // Set the initial CRC to the CRC of the uploaded data. After initialization, the SDK performs CRC validation on the upload result by default.
                  appendObjectRequest.setInitCRC(appendObjectResult.getClientCRC());
                  ossClient.appendObject(appendObjectRequest);
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

For the complete sample code for data validation, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/CRCSample.java).
