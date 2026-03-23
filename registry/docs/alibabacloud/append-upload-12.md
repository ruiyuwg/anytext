Append upload uses the `AppendObject` API to add content to the end of an appendable object. Unlike simple upload, which replaces the object entirely, append upload lets you grow an object incrementally across multiple requests.

## Use cases

Append upload is suited for:

-   **Log collection**: Write application or server logs to a single object as they arrive.
    
-   **Stream ingestion**: Append chunks of video, audio, or sensor data without buffering an entire file first.
    
-   **Incremental data pipelines**: Build up a dataset record by record, then process it downstream.
    

## How it works

1.  Submit the first `AppendObject` request with `position=0`. If the object does not exist, OSS creates an appendable object.
    
2.  OSS returns `nextPosition` — the byte offset at the end of the current content.
    
3.  Pass `nextPosition` as `position` in the next request to append the next chunk.
    
4.  Repeat until all content is written.
    

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket. To create one, see [Create buckets](https://www.alibabacloud.com/help/en/oss/user-guide/create-buckets).
    
-   The `oss:PutObject` permission on the target object.
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid credentials. See [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    

## Append data to an object

The following example appends three chunks of content to the same object. All three requests use the `AppendObject` API — the first with `position=0`, and each subsequent request with the `nextPosition` returned by the previous response.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.AppendObjectRequest;
import com.aliyun.oss.model.AppendObjectResult;
import com.aliyun.oss.model.ObjectMetadata;
import java.io.ByteArrayInputStream;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Set the endpoint. This example uses China (Hangzhou). Replace with your bucket's region endpoint.
        // For internal access from other Alibaba Cloud services in the same region, use the internal endpoint.
        // For supported regions and endpoints, see https://www.alibabacloud.com/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";

        // Load access credentials from environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider =
                CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

        String bucketName = "examplebucket";
        String objectName = "exampledir/exampleobject.txt";
        String region = "cn-hangzhou";

        // Build the OSSClient with Signature V4.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Set object metadata. Metadata is applied only on the first append.
            ObjectMetadata meta = new ObjectMetadata();
            meta.setContentType("text/plain");

            // First append: position must be 0 for a new appendable object.
            AppendObjectRequest appendObjectRequest = new AppendObjectRequest(
                    bucketName, objectName,
                    new ByteArrayInputStream("Hello OSS A \n".getBytes()), meta);
            appendObjectRequest.setPosition(0L);
            AppendObjectResult result = ossClient.appendObject(appendObjectRequest);
            // The 64-bit CRC value of the object.
            System.out.println(result.getObjectCRC());

            // Second append: use nextPosition returned by the previous response.
            appendObjectRequest.setPosition(result.getNextPosition());
            appendObjectRequest.setInputStream(new ByteArrayInputStream("Hello OSS B \n".getBytes()));
            result = ossClient.appendObject(appendObjectRequest);

            // Third append.
            appendObjectRequest.setPosition(result.getNextPosition());
            appendObjectRequest.setInputStream(new ByteArrayInputStream("Hello OSS C \n".getBytes()));
            result = ossClient.appendObject(appendObjectRequest);

        } catch (OSSException oe) {
            System.out.println("OSS rejected the request: " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client failed to reach OSS: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

### Key parameters

**\`AppendObjectRequest\` parameters**

**Parameter**

**Type**

**Description**

`bucketName`

String

Name of the bucket that contains the object.

`key`

String

Full path of the object, excluding the bucket name. Example: `exampledir/exampleobject.txt`.

`inputStream`

InputStream

Content to append. Alternatively, pass a `File` object using `setFile()`.

`metadata`

ObjectMetadata

Object metadata such as content type. Applied only on the first append; ignored on subsequent appends.

`position`

Long

Byte offset at which to start appending. Must equal the current object length. Set to `0L` for the first append.

**\`AppendObjectResult\` fields**

**Field**

**Type**

**Description**

`getNextPosition()`

Long

The byte offset for the next append — equal to the current object length after this append. Pass this value as `position` in the next request.

`getObjectCRC()`

Long

CRC-64 checksum of the object after this append. Use this to verify data integrity.

## Usage notes

-   The endpoint in this example is the public endpoint for China (Hangzhou). For cross-region access or access from other Alibaba Cloud services in the same region, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   To create an `OSSClient` instance using a custom domain name or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    
-   Object metadata (set via `ObjectMetadata`) is applied only on the first append. Subsequent requests ignore metadata parameters.
    
-   Custom metadata headers (prefixed with `x-oss-meta-*`) can be added only during the first append.
    

**Behavioral reference**

**Condition**

**Result**

Object does not exist

`AppendObject` creates a new appendable object.

Object is appendable and `position` equals the current object length

Content is appended successfully.

Object is appendable but `position` does not equal the current object length

`PositionNotEqualToLength` exception is thrown.

Object is not appendable (for example, a Normal object uploaded via simple upload)

`ObjectNotAppendable` exception is thrown.

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default — the account owner or administrator must grant them via [RAM Policy](/help/en/oss/ram-policy-overview/) or [bucket policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Required action**

**Condition**

`AppendObject`

`oss:PutObject`

Always required.

`AppendObject`

`oss:PutObjectTagging`

Required only when specifying object tags via `x-oss-tagging`.

## What's next

-   For the complete sample code, see the [GitHub sample](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/AppendObjectSample.java).
    
-   For the full API reference, see [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db).
