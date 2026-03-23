Download a specific byte range of an object instead of the entire object. This is useful for resumable downloads, streaming large media files, and parallel chunked downloads.

## Prerequisites

Before you begin, make sure that you have:

-   The `oss:GetObject` permission. For details, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   An OSSClient instance configured with a valid endpoint and access credentials. For setup details, see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    

> The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. For a full list of endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

## Download a byte range

Call `setRange(start, end)` on a `GetObjectRequest` to specify the byte range. The range is **inclusive on both ends**: `setRange(0, 999)` returns bytes 0 through 999, a total of 1,000 bytes.

If the specified range is invalid — for example, a negative value or a value beyond the object size — OSS ignores the range and returns the entire object.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GetObjectRequest;
import com.aliyun.oss.model.OSSObject;
import java.io.InputStream;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Specify the endpoint for the region where the bucket is located.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Load access credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider =
                CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // Specify the full object path, excluding the bucket name. Example: exampledir/exampleobject.txt.
        String objectName = "exampledir/exampleobject.txt";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        InputStream in = null;
        try {
            GetObjectRequest getObjectRequest = new GetObjectRequest(bucketName, objectName);
            // Download bytes 0 through 999 (1,000 bytes total, both ends inclusive).
            getObjectRequest.setRange(0, 999);

            OSSObject ossObject = ossClient.getObject(getObjectRequest);

            // Read the response stream in a loop — a single read() call may not return all data.
            byte[] buf = new byte[1024];
            in = ossObject.getObjectContent();
            for (int n = 0; n != -1; ) {
                n = in.read(buf, 0, buf.length);
            }
            ossObject.close();
        } catch (OSSException oe) {
            System.out.println("OSS rejected the request: " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client-side error (for example, network failure): " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
            // Always close the stream to prevent connection leaks.
            if (in != null) {
                in.close();
            }
        }
    }
}
```

> A single `InputStream.read()` call may return fewer bytes than requested. Loop until `read()` returns `-1` to ensure all data is consumed. For details, see [InputStream.read](https://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html).

## How OSS handles out-of-range requests

OSS has two behaviors for range requests that fall outside the valid byte range of an object.

### Default behavior

By default, if any part of the requested range falls outside the valid range, OSS ignores the `Range` header and returns the entire object with HTTP 200.

For an object that is 1,000 bytes (valid range: `0–999`):

**Request**

**OSS response**

`Range: bytes=500-2000` (end out of range)

Entire object, HTTP 200

`Range: bytes=1000-2000` (start out of range)

Entire object, HTTP 200

### Standard behavior

Add the `x-oss-range-behavior: standard` header to make OSS handle out-of-range requests more precisely:

-   If the end is out of range, OSS returns the valid portion with HTTP 206.
    
-   If the start is out of range, OSS returns HTTP 416 and the `InvalidRange` error code.
    

For an object that is 1,000 bytes (valid range: `0–999`):

**Request**

**OSS response**

`Range: bytes=500-2000` (end out of range)

Bytes 500–999, HTTP 206

`Range: bytes=1000-2000` (start out of range)

HTTP 416, `InvalidRange`

The following example demonstrates both cases:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GetObjectRequest;
import com.aliyun.oss.model.OSSObject;

public class Demo {

    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider =
                CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "exampledir/exampleobject.txt";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .region(region)
                .build();

        try {
            // End is out of range: OSS returns bytes 500-999 with HTTP 206.
            GetObjectRequest getObjectRequest = new GetObjectRequest(bucketName, objectName);
            getObjectRequest.setRange(500, 2000);
            getObjectRequest.addHeader("x-oss-range-behavior", "standard");
            OSSObject ossObject = ossClient.getObject(getObjectRequest);
            ossObject.close();

            System.out.println("Status: " + ossObject.getResponse().getStatusCode());
            System.out.println("Content-Length: " + ossObject.getResponse().getContentLength());

            // Start is out of range: OSS returns HTTP 416 and throws OSSException with InvalidRange.
            getObjectRequest = new GetObjectRequest(bucketName, objectName);
            getObjectRequest.setRange(1000, 2000);
            getObjectRequest.addHeader("x-oss-range-behavior", "standard");
            OSSObject ossObject2 = ossClient.getObject(getObjectRequest);
            ossObject2.close();
        } catch (OSSException oe) {
            System.out.println("OSS rejected the request: " + oe.getErrorMessage());
            System.out.println("Error code: " + oe.getErrorCode());
            System.out.println("Request ID: " + oe.getRequestId());
            System.out.println("Host ID: " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client-side error: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## References

-   [GetObject API reference](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db)
