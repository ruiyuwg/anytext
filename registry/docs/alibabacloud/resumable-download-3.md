Resumable download splits an OSS object into parts, downloads each part concurrently, and combines them into a complete local file. Use it when downloading large files over unstable networks — if the download is interrupted, it resumes from a checkpoint rather than restarting from the beginning.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket containing the object to download
    
-   The `oss:GetObject` permission on the target object
    
-   AccessKey credentials stored in environment variables `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`
    

## How it works

1.  `DownloadFileRequest` splits the object into parts based on the configured part size.
    
2.  The OSS SDK downloads the parts concurrently using the configured number of tasks.
    
3.  If the download is interrupted, the SDK writes progress to a checkpoint file. On the next run, the download resumes from where it stopped.
    
4.  After all parts download successfully, the SDK merges them into the local file and deletes the checkpoint file.
    

## Download an object with resumable download

### Key parameters

Configure `DownloadFileRequest` with the following parameters before calling the download:

**Parameter**

**Method**

**Default**

**Description**

Local file path

`setDownloadFile(path)`

—

The local path where the downloaded file is saved

Part size

`setPartSize(bytes)`

100 KB

Size of each download part, from 100 KB to 5 GB. Increase for large files on high-bandwidth networks.

Concurrent tasks

`setTaskNum(n)`

1

Number of parts downloaded in parallel. The example uses 10.

Checkpoint recovery

`setEnableCheckpoint(true)`

Disabled

Enables resumable download. Without this, a failed download restarts from the beginning.

Checkpoint file path

`setCheckpointFile(path)`

Auto-generated

Path where the checkpoint file is saved. Omit to use the default path.

> The defaults (100 KB part size, 1 task) suit low-bandwidth or constrained environments. For large files or high-bandwidth networks, increase both `setPartSize` and `setTaskNum` to improve throughput. Test with your target environment before deploying to production.

### Code example

```
import com.aliyun.oss.ClientBuilderConfiguration;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class ResumableDownload {

    public static void main(String[] args) throws Exception {
        // Replace with the public endpoint for your bucket's region.
        // Use the internal endpoint when accessing OSS from another Alibaba Cloud
        // service in the same region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Read credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider =
            CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampledir/exampleobject.txt";
        // Local path where the downloaded file is saved.
        String localFilePath = "D:\\localpath\\examplefile.txt";
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
            DownloadFileRequest downloadFileRequest =
                new DownloadFileRequest(bucketName, objectName);

            // Set the local file path.
            downloadFileRequest.setDownloadFile(localFilePath);
            // Set part size to 1 MB.
            downloadFileRequest.setPartSize(1 * 1024 * 1024);
            // Download 10 parts concurrently.
            downloadFileRequest.setTaskNum(10);
            // Enable checkpoint recovery so an interrupted download resumes
            // rather than restarting.
            downloadFileRequest.setEnableCheckpoint(true);
            // Optional: specify a custom checkpoint file path.
            // If omitted, the checkpoint file is created in the same directory
            // as the local file with a .dcp extension.
            // downloadFileRequest.setCheckpointFile("D:\\localpath\\examplefile.txt.dcp");

            // Run the resumable download.
            DownloadFileResult downloadRes = ossClient.downloadFile(downloadFileRequest);

            // Access object metadata from the result.
            downloadRes.getObjectMetadata().getETag();
            downloadRes.getObjectMetadata().getLastModified();
            downloadRes.getObjectMetadata().getUserMetadata().get("meta");

        } catch (OSSException oe) {
            // OSS rejected the request. The error details identify the cause.
            System.out.println("OSS error. Message: " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (Throwable ce) {
            // The request did not reach OSS. Check network connectivity or credentials.
            System.out.println("Client error. Message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

> Replace the placeholder values in the example with your actual bucket name, object name, local file path, and region. See [Create an OSSClient instance](/help/en/oss/developer-reference/initialization) for alternative credential and endpoint options, including Security Token Service (STS) and custom domain names.

### Checkpoint file behavior

-   The SDK creates the checkpoint file automatically when a download is interrupted.
    
-   The SDK deletes the checkpoint file automatically when the download completes successfully.
    
-   If you delete the checkpoint file manually before restarting, the download starts over from the beginning.
    
-   The default checkpoint file path is the local file path with a `.dcp` extension appended (for example, `examplefile.txt.dcp`).
    

## What's next

-   [GetObject API reference](/help/en/oss/developer-reference/getobject) — underlying API used by resumable download
    
-   [Complete example on GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/DownloadSample.java) — runnable sample with additional download scenarios
    
-   [Multipart upload](https://www.alibabacloud.com/help/en/oss/developer-reference/multipart-upload-12) — for uploading large files with similar resumable semantics
