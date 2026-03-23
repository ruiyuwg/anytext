This topic describes how to add parameters in an object upload or download request to set the limit of upload or download bandwidth. This ensures sufficient bandwidth for other applications.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    

## Configure single-connection bandwidth throttling for simple upload and download

The following sample code provides an example on how to configure single-connection bandwidth throttling for simple upload and download:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GetObjectRequest;
import com.aliyun.oss.model.PutObjectRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket. 
        String bucketName = "examplebucket";
        // Specify the full path of the object. Do not include the bucket name in the full path. Example: exampledir/exampleobject.txt. 
        String objectName = "exampledir/exampleobject.txt";
        // Specify the full path of the local file that you want to upload. Example: D:\\localpath\\examplefile.txt. 
        // If you do not specify the path of the local file, the local file is uploaded from the path of the project to which the sample program belongs. 
        String localFileName = "D:\\localpath\\examplefile.txt";
        // Specify the full path to which you want to download the object. If a file that has the same name already exists, the downloaded object overwrites the file. Otherwise, the downloaded object is saved in the path. 
        // If you do not specify a path for the downloaded object, the downloaded object is saved to the path of the project to which the sample program belongs. 
        String downLoadFileName = "D:\\localpath\\exampleobject.txt";

        // Set the bandwidth limit to 100 KB/s. 
        int limitSpeed = 100 * 1024 * 8;
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. 
        String region = "cn-hangzhou";

        // Create an OSS Client instance. 
        // Call the shutdown method to release associated resources when the OSS Client is no longer in use.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Configure bandwidth throttling for object upload. 
            InputStream inputStream = new FileInputStream(localFileName);
            PutObjectRequest PutObjectRequest = new PutObjectRequest(bucketName, objectName, inputStream);
            PutObjectRequest.setTrafficLimit(limitSpeed);
            ossClient.putObject(PutObjectRequest);

            // Configure bandwidth throttling for object download. 
            GetObjectRequest getObjectRequest = new GetObjectRequest(bucketName, objectName);
            getObjectRequest.setTrafficLimit(limitSpeed);
            File localFile = new File(downLoadFileName);
            ossClient.getObject(getObjectRequest, localFile);
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

## Configure single-connection bandwidth throttling for multipart upload

The following code provides an example on how to configure single-connection bandwidth throttling for multipart upload:

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

public class DemoApi2 {

    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket. 
        String bucketName = "examplebucket";
        // Specify the full path of the object. Example: exampledir/exampleobject.txt. Do not include the bucket name in the full path. 
        String objectName = "exampledir/exampleobject.txt";
        // Set the bandwidth limit to 100 KB/s. 
        int limitSpeed = 100 * 1024 * 8;
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. 
        String region = "cn-hangzhou";

        // Create an OSS Client instance. 
        // Call the shutdown method to release associated resources when the OSS Client is no longer in use.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();
        
        try {
            // Create an InitiateMultipartUploadRequest object. 
            InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucketName, objectName);


            // Initialize the multipart upload task. 
            InitiateMultipartUploadResult upresult = ossClient.initiateMultipartUpload(request);
            // Obtain the upload ID, which uniquely identifies the multipart upload task. You can use the upload ID to perform related operations, such as canceling and querying the multipart upload task. 
            String uploadId = upresult.getUploadId();

            // partETags is the set of PartETags. A PartETag consists of the part number and ETag of an uploaded part 
            List<PartETag> partETags =  new ArrayList<PartETag>();
            // Specify the size of each part, which is used to calculate the number of parts of the object. Unit: bytes. 
            final long partSize = 1 * 1024 * 1024L;   // Set the part size to 1 MB. 

            // Specify the full path of the local file that you want to upload. By default, if you do not specify the full path of the local file, the local file is uploaded from the path of the project to which the sample program belongs. 
            final File sampleFile = new File("D:\\localpath\\examplefile.txt");
            long fileLength = sampleFile.length();
            int partCount = (int) (fileLength / partSize);
            if (fileLength % partSize != 0) {
                partCount++;
            }
            // Upload all parts. 
            for (int i = 0; i < partCount; i++) {
                long startPos = i * partSize;
                long curPartSize = (i + 1 == partCount) ? (fileLength - startPos) : partSize;
                InputStream instream = new FileInputStream(sampleFile);
                // Skip the parts that are uploaded. 
                instream.skip(startPos);
                UploadPartRequest uploadPartRequest = new UploadPartRequest();
                uploadPartRequest.setBucketName(bucketName);
                uploadPartRequest.setKey(objectName);
                uploadPartRequest.setUploadId(uploadId);
                uploadPartRequest.setInputStream(instream);
                // Specify the size of each part. Each part except the last part must be equal to or greater than 100 KB. 
                uploadPartRequest.setPartSize(curPartSize);
                // Specify part numbers. Each part has a part number. The number ranges from 1 to 10000. If the specified number is beyond the range, OSS returns an InvalidArgument error code. 
                uploadPartRequest.setPartNumber( i + 1);
                // Specify the bandwidth limit.
                uploadPartRequest.setTrafficLimit(limitSpeed);
                // Parts are not necessarily uploaded in order. They can be uploaded from different OSS clients. OSS sorts the parts based on their part numbers and combines them into a complete object. 
                UploadPartResult uploadPartResult = ossClient.uploadPart(uploadPartRequest);
                // Each time a part is uploaded, OSS returns a result that contains a PartETag. The PartETags are stored in partETags. 
                partETags.add(uploadPartResult.getPartETag());
            }


            // Create a CompleteMultipartUploadRequest object. 
            // When you call the CompleteMultipartUpload operation, you must provide all valid PartETags. After OSS receives the PartETags, OSS verifies all parts one by one. After all parts are verified, OSS combines these parts into a complete object. 
            CompleteMultipartUploadRequest completeMultipartUploadRequest =
                    new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);

            // Complete the multipart upload task. 
            CompleteMultipartUploadResult completeMultipartUploadResult = ossClient.completeMultipartUpload(completeMultipartUploadRequest);
            System.out.println(completeMultipartUploadResult.getETag());
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

## Configure bandwidth throttling for upload and download that use signed URLs

The following sample code provides an example on how to configure single-connection bandwidth throttling when you use signed URLs to upload or download objects:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GeneratePresignedUrlRequest;
import com.aliyun.oss.model.GetObjectRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URL;
import java.util.Date;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket. 
        String bucketName = "examplebucket";
        // Specify the full path of the object. Do not include the bucket name in the full path. Example: exampledir/exampleobject.txt. 
        String objectName = "exampledir/exampleobject.txt";

        // Specify the full path of the local file that you want to upload. Example: D:\\localpath\\examplefile.txt. 
        // If you do not specify the path of the local file, the local file is uploaded from the path of the project to which the sample program belongs. 
        String localFileName = "D:\\localpath\\examplefile.txt";

        // Specify the full path to which you want to download the object. If a file that has the same name already exists, the downloaded object overwrites the file. Otherwise, the downloaded object is saved in the path. 
        // If you do not specify a path for the downloaded object, the downloaded object is saved to the path of the project to which the sample program belongs. 
        String downLoadFileName = "D:\\localpath\\exampleobject.txt";

        // Set the bandwidth limit to 100 KB/s. 
        int limitSpeed = 100 * 1024 * 8;
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. 
        String region = "cn-hangzhou";

        // Create an OSS Client instance. 
        // Call the shutdown method to release associated resources when the OSS Client is no longer in use.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Generate a signed URL that includes the bandwidth throttling parameter for object upload and set the validity period of the URL to 60 seconds. 
            Date date = new Date();
            date.setTime(date.getTime() + 60 * 1000);
            GeneratePresignedUrlRequest request = new GeneratePresignedUrlRequest(bucketName, objectName, HttpMethod.PUT);
            request.setExpiration(date);
            request.setTrafficLimit(limitSpeed);
            URL signedUrl = ossClient.generatePresignedUrl(request);
            System.out.println("put object url" + signedUrl);

            // Configure bandwidth throttling for object upload. 
            InputStream inputStream = new FileInputStream(localFileName);
            ossClient.putObject(signedUrl, inputStream, -1, null, true);

            // Generate a signed URL that includes the bandwidth throttling parameter for object download and set the validity period of the URL to 60 seconds. 
            date = new Date();
            date.setTime(date.getTime() + 60 * 1000);
            request = new GeneratePresignedUrlRequest(bucketName, objectName, HttpMethod.GET);
            request.setExpiration(date);
            request.setTrafficLimit(limitSpeed);
            signedUrl = ossClient.generatePresignedUrl(request);
            System.out.println("get object url" + signedUrl);

            // Configure bandwidth throttling for object download. 
            GetObjectRequest getObjectRequest =  new GetObjectRequest(signedUrl, null);
            ossClient.getObject(getObjectRequest, new File(downLoadFileName));
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

For the complete sample code for single-connection bandwidth throttling, visit [GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/TrafficLimitSample.java).
