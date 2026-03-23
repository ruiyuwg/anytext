By default, uploading an object overwrites any existing object with the same name. Set the `x-oss-forbid-overwrite` request header to block this behavior. The header works for simple uploads, object copies, and multipart uploads.

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint. For supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   Access credentials are read from environment variables. For configuration details, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    
-   The examples create an `OSSClient` instance using an OSS endpoint. To use a custom domain name or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    

## How x-oss-forbid-overwrite works

Set `x-oss-forbid-overwrite` in the object metadata or request headers. The header has three states:

**Value**

**Behavior**

Not set

Overwrites any existing object with the same name (default)

`false`

Overwrites any existing object with the same name

`true`

Blocks the write and returns an error if an object with the same name already exists

## Simple upload

Set `x-oss-forbid-overwrite` on the `PutObjectRequest` via `ObjectMetadata` before calling `putObject`.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.io.ByteArrayInputStream;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Replace with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Credentials are read from OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // Full object path, excluding the bucket name.
        String objectName = "exampledir/object";
        String content = "Hello OSS!";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, objectName, new ByteArrayInputStream(content.getBytes()));

            // Set x-oss-forbid-overwrite to true to block overwrites.
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setHeader("x-oss-forbid-overwrite", "true");
            putObjectRequest.setMetadata(metadata);

            ossClient.putObject(putObjectRequest);
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

## Copy an object

### Copy a small object

Set `x-oss-forbid-overwrite` on the `CopyObjectRequest` via `ObjectMetadata` before calling `copyObject`. The destination bucket must be in the same region as the source bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String sourceBucketName = "srcexamplebucket";
        // Full path of the source object, excluding the bucket name.
        String sourceObjectName = "srcexampleobject.txt";
        // The destination bucket must be in the same region as the source bucket.
        String destinationBucketName = "desexamplebucket";
        // Full path of the destination object, excluding the bucket name.
        String destinationObjectName = "desexampleobject.txt";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            CopyObjectRequest copyObjectRequest = new CopyObjectRequest(sourceBucketName, sourceObjectName, destinationBucketName, destinationObjectName);

            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType("text/html");
            // Set x-oss-forbid-overwrite to true to block overwrites.
            metadata.setHeader("x-oss-forbid-overwrite", "true");
            copyObjectRequest.setNewObjectMetadata(metadata);

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

### Copy a large object

For large objects, use multipart copy. Set `x-oss-forbid-overwrite` on `InitiateMultipartUploadRequest` when initiating the upload, and on `CompleteMultipartUploadRequest` when completing it.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String sourceBucketName = "srcexamplebucket";
        String sourceObjectName = "srcexampleobject.txt";
        // The destination bucket must be in the same region as the source bucket.
        String destinationBucketName = "desexamplebucket";
        String destinationObjectName = "desexampleobject.txt";
        String region = "cn-hangzhou";

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
            long contentLength = objectMetadata.getContentLength();

            // Part size: 10 MB.
            long partSize = 1024 * 1024 * 10;

            int partCount = (int) (contentLength / partSize);
            if (contentLength % partSize != 0) {
                partCount++;
            }
            System.out.println("total part count:" + partCount);

            // Set x-oss-forbid-overwrite on InitiateMultipartUploadRequest to block overwrites.
            InitiateMultipartUploadRequest initiateMultipartUploadRequest = new InitiateMultipartUploadRequest(destinationBucketName, destinationObjectName);
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setHeader("x-oss-forbid-overwrite", "true");
            initiateMultipartUploadRequest.setObjectMetadata(metadata);

            InitiateMultipartUploadResult initiateMultipartUploadResult = ossClient.initiateMultipartUpload(initiateMultipartUploadRequest);
            String uploadId = initiateMultipartUploadResult.getUploadId();

            // Copy parts.
            List<PartETag> partETags = new ArrayList<PartETag>();
            for (int i = 0; i < partCount; i++) {
                long skipBytes = partSize * i;
                long size = partSize < contentLength - skipBytes ? partSize : contentLength - skipBytes;

                UploadPartCopyRequest uploadPartCopyRequest =
                        new UploadPartCopyRequest(sourceBucketName, sourceObjectName, destinationBucketName, destinationObjectName);
                uploadPartCopyRequest.setUploadId(uploadId);
                uploadPartCopyRequest.setPartSize(size);
                uploadPartCopyRequest.setBeginIndex(skipBytes);
                uploadPartCopyRequest.setPartNumber(i + 1);
                UploadPartCopyResult uploadPartCopyResult = ossClient.uploadPartCopy(uploadPartCopyRequest);

                partETags.add(uploadPartCopyResult.getPartETag());
            }

            // Set x-oss-forbid-overwrite on CompleteMultipartUploadRequest.
            CompleteMultipartUploadRequest completeMultipartUploadRequest = new CompleteMultipartUploadRequest(
                    destinationBucketName, destinationObjectName, uploadId, partETags);
            completeMultipartUploadRequest.addHeader("x-oss-forbid-overwrite", "true");

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

## Multipart upload

Set `x-oss-forbid-overwrite` on `InitiateMultipartUploadRequest` and `CompleteMultipartUploadRequest`.

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
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // Full object path, excluding the bucket name.
        String objectName = "exampledir/object";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            // Set x-oss-forbid-overwrite on InitiateMultipartUploadRequest.
            InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucketName, objectName);
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setHeader("x-oss-forbid-overwrite", "true");
            request.setObjectMetadata(metadata);

            InitiateMultipartUploadResult upresult = ossClient.initiateMultipartUpload(request);
            // The upload ID uniquely identifies this multipart upload session.
            // Use it to upload parts and to abort or query the upload.
            String uploadId = upresult.getUploadId();

            // partETags holds the ETag and part number for each uploaded part.
            List<PartETag> partETags = new ArrayList<PartETag>();
            final long partSize = 1 * 1024 * 1024L;   // 1 MB per part
            final File sampleFile = new File("<localFile>");
            long fileLength = sampleFile.length();
            int partCount = (int) (fileLength / partSize);
            if (fileLength % partSize != 0) {
                partCount++;
            }

            for (int i = 0; i < partCount; i++) {
                long startPos = i * partSize;
                long curPartSize = (i + 1 == partCount) ? (fileLength - startPos) : partSize;
                InputStream instream = new FileInputStream(sampleFile);
                instream.skip(startPos);

                UploadPartRequest uploadPartRequest = new UploadPartRequest();
                uploadPartRequest.setBucketName(bucketName);
                uploadPartRequest.setKey(objectName);
                uploadPartRequest.setUploadId(uploadId);
                uploadPartRequest.setInputStream(instream);
                // Minimum part size is 100 KB, except for the last part.
                uploadPartRequest.setPartSize(curPartSize);
                // Part numbers range from 1 to 10,000. OSS assembles parts in part-number order.
                uploadPartRequest.setPartNumber(i + 1);
                UploadPartResult uploadPartResult = ossClient.uploadPart(uploadPartRequest);
                partETags.add(uploadPartResult.getPartETag());
            }

            // Set x-oss-forbid-overwrite on CompleteMultipartUploadRequest.
            // OSS verifies each part and assembles them into the final object.
            CompleteMultipartUploadRequest completeMultipartUploadRequest =
                    new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);
            completeMultipartUploadRequest.addHeader("x-oss-forbid-overwrite", "true");

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

-   Complete sample code covering all upload scenarios: [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/ObjectOperationSample.java)
    
-   API reference for simple upload: [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb)
    
-   API reference for object copy: [CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db)
    
-   API reference for multipart upload: [InitiateMultipartUpload](/help/en/oss/developer-reference/initiatemultipartupload#reference-zgh-cnx-wdb) and [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb)
