Track upload and download progress in OSS by attaching a `ProgressListener` to your requests. This topic shows how to monitor download progress using `ossClient.getObject`.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with at least one object to download
    
-   Access credentials configured as environment variables (`OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`)
    
-   The OSS Java SDK V1 dependency added to your project
    

## Usage notes

-   The example uses the public endpoint of the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For a full list of regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials are read from environment variables. For configuration details, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    
-   The example creates an `OSSClient` instance using an OSS endpoint. To create one using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    

## Supported methods

The progress bar feature is supported on the following methods. The integration pattern is the same as shown in the example below.

**Method**

**Description**

`ossClient.putObject`

Upload an object

`ossClient.getObject`

Download an object

`ossClient.uploadPart`

Upload a part in a multipart upload

`ossClient.uploadFile`

Upload a file using multipart upload with resumable transfer

`ossClient.downloadFile`

Download a file using multipart download with resumable transfer

## How it works

1.  Implement the `ProgressListener` interface with a `progressChanged(ProgressEvent event)` method.
    
2.  Attach the listener to your request using `withProgressListener(listener)`.
    
3.  As the transfer runs, OSS fires events that your listener receives and processes.
    

The `progressChanged` method receives a `ProgressEvent` on each callback. Use `event.getEventType()` to identify the event and `event.getBytes()` to read the byte count.

### Progress event types

**Event type**

**When it fires**

**`getBytes()` value**

`TRANSFER_STARTED_EVENT`

Transfer begins

—

`RESPONSE_CONTENT_LENGTH_EVENT`

Total size is known

Total bytes to transfer

`RESPONSE_BYTE_TRANSFER_EVENT`

Each data chunk arrives

Bytes transferred in this chunk

`TRANSFER_COMPLETED_EVENT`

Transfer finishes successfully

—

`TRANSFER_FAILED_EVENT`

Transfer fails

—

## Download an object with a progress bar

The following example implements a `ProgressListener` that tracks download progress and prints it to the console.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.event.ProgressEvent;
import com.aliyun.oss.event.ProgressEventType;
import com.aliyun.oss.event.ProgressListener;
import com.aliyun.oss.model.GetObjectRequest;
import java.io.File;

public class GetObjectProgressListener implements ProgressListener {
    private long bytesRead = 0;
    private long totalBytes = -1;
    private boolean succeed = false;

    public static void main(String[] args) throws Exception {
        // Replace with your actual endpoint. This example uses China (Hangzhou).
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Read credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider =
                CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Replace with your bucket name, object path, and local destination path.
        String bucketName = "examplebucket";
        String objectName = "testfolder/exampleobject.txt";
        String pathName = "D:\\localpath\\examplefile.txt";
        String region = "cn-hangzhou";

        // Build the OSSClient with signature version V4.
        // Call ossClient.shutdown() when done to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Attach the progress listener to the download request.
            ossClient.getObject(
                    new GetObjectRequest(bucketName, objectName)
                            .<GetObjectRequest>withProgressListener(new GetObjectProgressListener()),
                    new File(pathName));
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

    @Override
    public void progressChanged(ProgressEvent progressEvent) {
        long bytes = progressEvent.getBytes();
        ProgressEventType eventType = progressEvent.getEventType();
        switch (eventType) {
            case TRANSFER_STARTED_EVENT:
                System.out.println("Start to download......");
                break;
            case RESPONSE_CONTENT_LENGTH_EVENT:
                this.totalBytes = bytes;
                System.out.println(this.totalBytes + " bytes in total will be downloaded to a local file");
                break;
            case RESPONSE_BYTE_TRANSFER_EVENT:
                this.bytesRead += bytes;
                if (this.totalBytes != -1) {
                    int percent = (int)(this.bytesRead * 100.0 / this.totalBytes);
                    System.out.println(bytes + " bytes have been read at this time, download progress: "
                            + percent + "%(" + this.bytesRead + "/" + this.totalBytes + ")");
                } else {
                    System.out.println(bytes + " bytes have been read at this time, download ratio: unknown"
                            + "(" + this.bytesRead + "/...)");
                }
                break;
            case TRANSFER_COMPLETED_EVENT:
                this.succeed = true;
                System.out.println("Succeed to download, " + this.bytesRead + " bytes have been transferred in total");
                break;
            case TRANSFER_FAILED_EVENT:
                System.out.println("Failed to download, " + this.bytesRead + " bytes have been transferred");
                break;
            default:
                break;
        }
    }

    public boolean isSucceed() {
        return succeed;
    }
}
```

When the download runs, the console output looks similar to:

```
Start to download......
10485760 bytes in total will be downloaded to a local file
65536 bytes have been read at this time, download progress: 0%(65536/10485760)
131072 bytes have been read at this time, download progress: 1%(131072/10485760)
...
Succeed to download, 10485760 bytes have been transferred in total
```

## References

For the complete sample code, see [GetProgressSample.java](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/GetProgressSample.java) on GitHub.
