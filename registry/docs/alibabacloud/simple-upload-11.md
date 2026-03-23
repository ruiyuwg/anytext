Use the `PutObject` operation to upload a single object to OSS. You can upload data from a string, a byte array, a network stream, a file stream, or a local file.

> If an object with the same name already exists in the bucket, the upload overwrites it. If no object with that name exists, OSS creates a new one.

## Usage notes

-   Examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials are read from environment variables. For configuration details, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    
-   To create an OSSClient instance using a custom domain or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default. Grant the required permissions using [RAM Policy](/help/en/oss/ram-policy-overview/) or [bucket policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**When required**

PutObject

`oss:PutObject`

Always

PutObject

`oss:PutObjectTagging`

When the `x-oss-tagging` header is specified

PutObject

`kms:GenerateDataKey`

When `X-Oss-Server-Side-Encryption: KMS` is set

PutObject

`kms:Decrypt`

When `X-Oss-Server-Side-Encryption: KMS` is set

## Initialize the client

All examples in this topic share the same OSSClient initialization. Create the client once, then reuse it across upload calls.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

// Replace with your actual endpoint
String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Replace with your actual region
String region = "cn-hangzhou";

// Read credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET
EnvironmentVariableCredentialsProvider credentialsProvider =
    CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);

OSS ossClient = OSSClientBuilder.create()
    .endpoint(endpoint)
    .credentialsProvider(credentialsProvider)
    .clientConfiguration(clientBuilderConfiguration)
    .region(region)
    .build();
```

Call `ossClient.shutdown()` when the client is no longer needed to release associated resources.

## Streaming upload

Use streaming upload to upload data directly from an `InputStream`. The following table summarizes which input type maps to which data source:

**Data source**

**Input type**

**Example section**

String

`new ByteArrayInputStream(content.getBytes())`

[Upload a string](#section-e6a99d47)

Byte array

`new ByteArrayInputStream(content)`

[Upload a byte array](#section-2c226722)

Network stream

`new URL(url).openStream()`

[Upload a network stream](#section-d3318c77)

File stream

`new FileInputStream(filePath)`

[Upload a file stream](#section-aea1381f)

### Upload a string

Upload a string using a `ByteArrayInputStream`:

```
import com.aliyun.oss.model.*;
import java.io.ByteArrayInputStream;

String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";

try {
    String content = "Hello OSS, hello world";

    PutObjectRequest putObjectRequest = new PutObjectRequest(
        bucketName, objectName, new ByteArrayInputStream(content.getBytes()));

    // Optional: set storage class and ACL
    // ObjectMetadata metadata = new ObjectMetadata();
    // metadata.setHeader(OSSHeaders.OSS_STORAGE_CLASS, StorageClass.Standard.toString());
    // metadata.setObjectAcl(CannedAccessControlList.Private);
    // putObjectRequest.setMetadata(metadata);

    PutObjectResult result = ossClient.putObject(putObjectRequest);
} catch (OSSException oe) {
    System.out.println("Caught an OSSException, which means your request made it to OSS, "
            + "but was rejected with an error response for some reason.");
    System.out.println("Error Message: " + oe.getErrorMessage());
    System.out.println("Error Code: " + oe.getErrorCode());
    System.out.println("Request ID: " + oe.getRequestId());
    System.out.println("Host ID: " + oe.getHostId());
} catch (ClientException ce) {
    System.out.println("Caught an ClientException, which means the client encountered "
            + "a serious internal problem while trying to communicate with OSS, "
            + "such as not being able to access the network.");
    System.out.println("Error Message: " + ce.getMessage());
} finally {
    if (ossClient != null) {
        ossClient.shutdown();
    }
}
```

### Upload a byte array

Upload a byte array using a `ByteArrayInputStream`:

```
import com.aliyun.oss.model.*;
import java.io.ByteArrayInputStream;

String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";

try {
    byte[] content = "Hello OSS, hello world".getBytes();

    PutObjectRequest putObjectRequest = new PutObjectRequest(
        bucketName, objectName, new ByteArrayInputStream(content));

    PutObjectResult result = ossClient.putObject(putObjectRequest);
} catch (OSSException oe) {
    System.out.println("Caught an OSSException, which means your request made it to OSS, "
            + "but was rejected with an error response for some reason.");
    System.out.println("Error Message: " + oe.getErrorMessage());
    System.out.println("Error Code: " + oe.getErrorCode());
    System.out.println("Request ID: " + oe.getRequestId());
    System.out.println("Host ID: " + oe.getHostId());
} catch (ClientException ce) {
    System.out.println("Caught an ClientException, which means the client encountered "
            + "a serious internal problem while trying to communicate with OSS, "
            + "such as not being able to access the network.");
    System.out.println("Error Message: " + ce.getMessage());
} finally {
    if (ossClient != null) {
        ossClient.shutdown();
    }
}
```

### Upload a network stream

Open a URL as an `InputStream` and upload the stream directly:

```
import com.aliyun.oss.model.*;
import java.io.InputStream;
import java.net.URL;

String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";
String url = "https://www.aliyun.com/";

try {
    InputStream inputStream = new URL(url).openStream();

    PutObjectRequest putObjectRequest = new PutObjectRequest(
        bucketName, objectName, inputStream);

    PutObjectResult result = ossClient.putObject(putObjectRequest);
} catch (OSSException oe) {
    System.out.println("Caught an OSSException, which means your request made it to OSS, "
            + "but was rejected with an error response for some reason.");
    System.out.println("Error Message: " + oe.getErrorMessage());
    System.out.println("Error Code: " + oe.getErrorCode());
    System.out.println("Request ID: " + oe.getRequestId());
    System.out.println("Host ID: " + oe.getHostId());
} catch (ClientException ce) {
    System.out.println("Caught an ClientException, which means the client encountered "
            + "a serious internal problem while trying to communicate with OSS, "
            + "such as not being able to access the network.");
    System.out.println("Error Message: " + ce.getMessage());
} finally {
    if (ossClient != null) {
        ossClient.shutdown();
    }
}
```

### Upload a file stream

Open a local file as a `FileInputStream` and upload the stream:

```
import com.aliyun.oss.model.*;
import java.io.FileInputStream;
import java.io.InputStream;

String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";
// Replace with the full path to your local file
String filePath = "D:\\localpath\\examplefile.txt";

try {
    InputStream inputStream = new FileInputStream(filePath);

    PutObjectRequest putObjectRequest = new PutObjectRequest(
        bucketName, objectName, inputStream);

    PutObjectResult result = ossClient.putObject(putObjectRequest);
} catch (OSSException oe) {
    System.out.println("Caught an OSSException, which means your request made it to OSS, "
            + "but was rejected with an error response for some reason.");
    System.out.println("Error Message: " + oe.getErrorMessage());
    System.out.println("Error Code: " + oe.getErrorCode());
    System.out.println("Request ID: " + oe.getRequestId());
    System.out.println("Host ID: " + oe.getHostId());
} catch (ClientException ce) {
    System.out.println("Caught an ClientException, which means the client encountered "
            + "a serious internal problem while trying to communicate with OSS, "
            + "such as not being able to access the network.");
    System.out.println("Error Message: " + ce.getMessage());
} finally {
    if (ossClient != null) {
        ossClient.shutdown();
    }
}
```

## Upload a local file

Pass a `File` object directly to `PutObjectRequest` to upload a local file without opening an explicit stream:

```
import com.aliyun.oss.model.*;
import java.io.File;

String bucketName = "examplebucket";
String objectName = "exampledir/exampleobject.txt";
// Replace with the full path to your local file
String filePath = "D:\\localpath\\examplefile.txt";

try {
    PutObjectRequest putObjectRequest = new PutObjectRequest(
        bucketName, objectName, new File(filePath));

    // Optional: set storage class and ACL
    // ObjectMetadata metadata = new ObjectMetadata();
    // metadata.setHeader(OSSHeaders.OSS_STORAGE_CLASS, StorageClass.Standard.toString());
    // metadata.setObjectAcl(CannedAccessControlList.Private);
    // putObjectRequest.setMetadata(metadata);

    PutObjectResult result = ossClient.putObject(putObjectRequest);
} catch (OSSException oe) {
    System.out.println("Caught an OSSException, which means your request made it to OSS, "
            + "but was rejected with an error response for some reason.");
    System.out.println("Error Message: " + oe.getErrorMessage());
    System.out.println("Error Code: " + oe.getErrorCode());
    System.out.println("Request ID: " + oe.getRequestId());
    System.out.println("Host ID: " + oe.getHostId());
} catch (ClientException ce) {
    System.out.println("Caught an ClientException, which means the client encountered "
            + "a serious internal problem while trying to communicate with OSS, "
            + "such as not being able to access the network.");
    System.out.println("Error Message: " + ce.getMessage());
} finally {
    if (ossClient != null) {
        ossClient.shutdown();
    }
}
```

## FAQ

-   [Share objects with signed URLs](/help/en/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects#concept-39607-zh)
    
-   [How do I restrict file types and size when uploading objects to OSS?](/help/en/oss/how-do-i-limit-object-formats-and-sizes-when-i-upload-objects-to-oss#concept-2469072)
    
-   [How do I upload directories to and download directories from OSS?](/help/en/oss/how-to-upload-directories-to-and-download-directories-from-oss#concept-4943)
    

## References

-   For the complete sample code, see [GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/SimpleGetObjectSample.java).
    
-   For the API reference, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).
