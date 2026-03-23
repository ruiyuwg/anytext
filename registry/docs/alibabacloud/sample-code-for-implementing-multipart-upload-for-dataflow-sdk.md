This page shows how to perform a multipart upload of a data stream using Object Storage Service (OSS) SDK for Java. The example reads a local file as a byte stream and uploads it in 5 MB parts using the three-step multipart upload flow: InitiateMultipartUpload → UploadPart → CompleteMultipartUpload.

## Usage notes

-   The example uses the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint instead. For region-to-endpoint mappings, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   Access credentials are read from environment variables. For setup instructions, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   The OSSClient instance in this example uses a public OSS endpoint. To create an OSSClient instance with a custom domain name or Security Token Service (STS), see [Configure a client](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   The full multipart upload process — InitiateMultipartUpload, UploadPart, and CompleteMultipartUpload — requires the `oss:PutObject` permission. For permission setup, see [Common examples of RAM policies](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## How it works

The example performs the following steps:

1.  **Initiate** — Calls `initiateMultipartUpload` with an `InitiateMultipartUploadRequest` (including detected content type). OSS returns an upload ID that identifies this upload session.
    
2.  **Upload parts** — Reads the file in 5 MB chunks using a `FileInputStream`. For each chunk, constructs a `ByteArrayInputStream` (the part stream) and calls `uploadPart`. Each `UploadPartResult` returns a `PartETag`, which is collected in a list.
    
3.  **Complete** — Calls `completeMultipartUpload` with the upload ID and the full `PartETag` list. OSS assembles the parts into the final object and returns the object's ETag.
    

## Sample code

```
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.CredentialsProviderFactory;
import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.internal.Mimetypes;
import com.aliyun.oss.model.*;

public class MultipartUploadforStream {
    public static void main(String[] args) throws Exception {
        // In this example, the endpoint for the China (Hangzhou) region is used.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";

        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";

        // Specify the full path of the object. Example: exampledir/exampleobject.txt. Do not include the bucket name in the full path.
        String objectName = "exampledir/exampleobject.txt";

        // Specify the path of the local file that you want to upload.
        String filePath = "/Users/localFilePath/example.txt";

        // Specify the region where the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
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
            // Create an InitiateMultipartUploadRequest object.
            InitiateMultipartUploadRequest request = new InitiateMultipartUploadRequest(bucketName, objectName);

            ObjectMetadata metadata = new ObjectMetadata();
            if (metadata.getContentType() == null) {
                metadata.setContentType(Mimetypes.getInstance().getMimetype(new File(filePath), objectName));
            }
            System.out.println("Content-Type: " + metadata.getContentType());
            request.setObjectMetadata(metadata);

            // Initiate the multipart upload task and obtain the upload ID in the response.
            InitiateMultipartUploadResult upresult = ossClient.initiateMultipartUpload(request);
            String uploadId = upresult.getUploadId();

            // partETags is a list of PartETags.
            List<PartETag> partETags = new ArrayList<>();

            // Calculate the number of parts.
            File sampleFile = new File(filePath);
            long fileLength = sampleFile.length();
            final long partSize = 5 * 1024 * 1024L; // Set the part size to 5 MB.

            // Upload all parts.
            try (FileInputStream instream = new FileInputStream(sampleFile)) {
                byte[] buffer = new byte[8192]; // Set the buffer.
                long remaining = fileLength;
                int partNumber = 1;

                while (remaining > 0) {
                    ByteArrayOutputStream baos = new ByteArrayOutputStream();
                    long bytesToRead = Math.min(partSize, remaining);

                    int bytesRead;
                    long totalRead = 0;
                    while (totalRead < bytesToRead && (bytesRead = instream.read(buffer)) > 0) {
                        baos.write(buffer, 0, bytesRead);
                        totalRead += bytesRead;
                    }

                    // Construct the part stream.
                    InputStream partStream = new ByteArrayInputStream(baos.toByteArray());

                    UploadPartRequest uploadPartRequest = new UploadPartRequest();
                    uploadPartRequest.setBucketName(bucketName);
                    uploadPartRequest.setKey(objectName);
                    uploadPartRequest.setUploadId(uploadId);
                    uploadPartRequest.setInputStream(partStream);
                    uploadPartRequest.setPartSize(totalRead);
                    uploadPartRequest.setPartNumber(partNumber++);

                    UploadPartResult uploadPartResult = ossClient.uploadPart(uploadPartRequest);
                    partETags.add(uploadPartResult.getPartETag());

                    remaining -= totalRead;
                }
            }

            // Create a CompleteMultipartUploadRequest object.
            CompleteMultipartUploadRequest completeMultipartUploadRequest =
                    new CompleteMultipartUploadRequest(bucketName, objectName, uploadId, partETags);

            // Complete the multipart upload task.
            CompleteMultipartUploadResult completeMultipartUploadResult = ossClient.completeMultipartUpload(completeMultipartUploadRequest);
            System.out.println("Upload successful, ETag: " + completeMultipartUploadResult.getETag());
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught a ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            // Shut down the OSSClient.
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## What's next

For a full overview of multipart upload concepts, limits, and operations, see [Multipart upload](/help/en/oss/developer-reference/java-multipart-upload).
