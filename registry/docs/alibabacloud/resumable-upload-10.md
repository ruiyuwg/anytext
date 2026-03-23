Resumable upload splits a file into parts and tracks progress in a checkpoint file. If the upload is interrupted by a network error or program crash, it resumes from the last checkpoint rather than starting over.

**Benefits:**

-   **Faster uploads** — configure multiple concurrent threads to upload parts simultaneously
    
-   **Resilient to interruptions** — resumes from the last checkpoint after any failure
    
-   **Flexible control** — tune part size and concurrency to match your network conditions
    

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The `oss:PutObject` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables configured. For details, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials)
    

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. For a full list of endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The `OSSClient` instance in these examples is initialized with an OSS endpoint. To initialize using a custom domain name or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    
-   Resumable upload is disabled by default. Call `setEnableCheckpoint(true)` to enable it.
    
-   The checkpoint file records upload progress. OSS deletes the checkpoint file automatically after the upload completes. If you do not set a checkpoint file path, OSS stores it in the same directory as the local file and names it `${uploadFile}.ucp`.
    

## Upload a file using resumable upload

The following example uploads a local file to OSS using `UploadFileRequest`. Set all parameters on the request object before calling `ossClient.uploadFile()`.

```
import com.aliyun.oss.ClientBuilderConfiguration;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class UploadFile {
    public static void main(String[] args) throws Exception {
        // Endpoint for the China (Hangzhou) region. Replace with the endpoint for your bucket's region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Region ID for the bucket. Replace cn-hangzhou with your bucket's region.
        String region = "cn-hangzhou";

        // Load credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider =
            CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

        // Build the OSSClient instance with Signature V4.
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
            // Optional: set the content type of the object.
            // meta.setContentType("text/plain");

            // Optional: set the ACL of the object.
            // meta.setObjectAcl(CannedAccessControlList.Private);

            // Specify the destination bucket and object path.
            // The object path cannot include the bucket name.
            UploadFileRequest uploadFileRequest =
                new UploadFileRequest("examplebucket", "exampledir/exampleobject.txt");

            // Path to the local file to upload.
            // If you omit the path, OSS looks for the file in the project directory.
            uploadFileRequest.setUploadFile("D:\\localpath\\examplefile.txt");

            // Number of concurrent upload threads. Default: 1.
            uploadFileRequest.setTaskNum(5);

            // Part size in bytes. Must be between 100 KB and 5 GB. Default: 100 KB.
            uploadFileRequest.setPartSize(1 * 1024 * 1024);

            // Enable resumable upload. Required to use checkpoint-based recovery.
            uploadFileRequest.setEnableCheckpoint(true);

            // Path for the checkpoint file.
            // If omitted, OSS uses ${uploadFile}.ucp in the same directory as the local file.
            // OSS deletes this file automatically after the upload completes.
            uploadFileRequest.setCheckpointFile("yourCheckpointFile");

            // Attach object metadata.
            uploadFileRequest.setObjectMetadata(meta);

            // Optional: attach an upload callback.
            // uploadFileRequest.setCallback("yourCallbackEvent");

            // Start the resumable upload.
            ossClient.uploadFile(uploadFileRequest);

        } catch (OSSException oe) {
            System.out.println("OSS rejected the request.");
            System.out.println("Error message: " + oe.getErrorMessage());
            System.out.println("Error code:    " + oe.getErrorCode());
            System.out.println("Request ID:    " + oe.getRequestId());
            System.out.println("Host ID:       " + oe.getHostId());
        } catch (Throwable ce) {
            System.out.println("Client-side error: could not reach OSS.");
            System.out.println("Error message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Key parameters

**Parameter**

**Method**

**Description**

**Default**

Local file path

`setUploadFile`

Absolute or relative path of the file to upload

Project directory

Concurrent threads

`setTaskNum`

Number of parallel upload threads

1

Part size

`setPartSize`

Size of each part in bytes. Range: 100 KB–5 GB

100 KB

Resumable upload

`setEnableCheckpoint`

Set to `true` to enable checkpoint-based recovery

Disabled

Checkpoint file path

`setCheckpointFile`

Path where upload progress is saved. OSS deletes the file after the upload completes

`${uploadFile}.ucp` in the same directory as the local file

Object metadata

`setObjectMetadata`

Metadata to attach to the uploaded object, such as content type and ACL

None

Upload callback

`setCallback`

Callback event triggered after a successful upload

None

## References

For the complete sample code, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/UploadSample.java).
