Each object stored in OSS has three components: a key, data, and metadata. Object metadata describes the object's attributes and falls into two categories:

-   **Standard HTTP headers** — control how browsers and caches handle the object (for example, Content-Type, Cache-Control, and Content-Disposition)
    
-   **User metadata** — arbitrary key-value pairs you attach to identify the object's purpose or attributes
    

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:PutObject` permission to set object metadata
    
-   The `oss:GetObject` permission to query object metadata
    

For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Usage notes

-   Examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. See [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials are read from environment variables. See [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    
-   Examples use an OSSClient instance created with an OSS endpoint. For other configurations (custom domain, Security Token Service (STS)), see [Client configuration](/help/en/oss/developer-reference/oss-java-sdk/).
    

## Standard HTTP headers reference

The following table lists the standard HTTP headers you can set on OSS objects. Total metadata size must not exceed 8 KB.

**Header**

**SDK method**

**Can you set it?**

**Description**

`Content-Type`

`setContentType(value)`

Yes

MIME type of the object. Defaults to `application/octet-stream` if omitted and no file extension is present.

`Content-MD5`

`setContentMD5(value)`

Yes

Base64-encoded MD5 hash. OSS verifies integrity on upload and rejects the request if there is a mismatch.

`Content-Disposition`

`setContentDisposition(value)`

Yes

Download filename shown in the browser (for example, `attachment; filename="report.pdf"`).

`Content-Length`

`setContentLength(value)`

Yes

Maximum bytes to upload. If actual content is longer, the upload is truncated to this length.

`Content-Encoding`

`setContentEncoding(value)`

Yes

Encoding applied to the content (for example, `gzip`).

`Cache-Control`

`setCacheControl(value)`

Yes

Browser caching directive (for example, `no-cache`, `max-age=3600`).

`Expires`

`setExpirationTime(date)`

Yes

Cache expiration time in UTC (ISO 8601 format).

`x-oss-storage-class`

`setHeader("x-oss-storage-class", value)`

Yes

Storage class for the object (for example, `StorageClass.Standard`).

`Last-Modified`

—

No

Set by OSS when the object is created or modified.

`ETag`

—

No

Set by OSS after upload.

**Important**

When you call `setNewObjectMetadata`, any header not explicitly set is cleared. To preserve existing headers, read the current metadata first, then re-include the fields you want to keep.

## Set object metadata on upload

Attach metadata to an object when you call `putObject`.

### Set standard HTTP headers

The following example sets Content-Type, Content-MD5, and a storage class header on upload. Additional headers (Content-Disposition, Content-Length, Cache-Control, Expires, Content-Encoding) are shown as commented-out lines — uncomment the ones you need.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.common.utils.DateUtil;
import com.aliyun.oss.model.ObjectMetadata;
import java.io.ByteArrayInputStream;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Replace with your actual endpoint. This example uses China (Hangzhou).
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Credentials are read from OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // Full object key — do not include the bucket name. Example: testfolder/exampleobject.txt
        String objectName = "testfolder/exampleobject.txt";
        String content = "Hello OSS";
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
            ObjectMetadata meta = new ObjectMetadata();

            // Enable MD5 verification: OSS compares the hash on receipt and rejects
            // the upload if there is a mismatch.
            String md5 = BinaryUtil.toBase64String(BinaryUtil.calculateMd5(content.getBytes()));
            meta.setContentMD5(md5);

            // Set Content-Type. If omitted, OSS infers the type from the object key
            // extension, or falls back to application/octet-stream.
            meta.setContentType("text/plain; charset=utf-8");

            // Set the storage class.
            meta.setHeader("x-oss-storage-class", StorageClass.Standard);

            // Uncomment the headers you need:
            // Set the filename shown in the browser when the object is downloaded.
            // meta.setContentDisposition("attachment; filename=\"DownloadFilename\"");
            // Truncate the upload at this byte length if the actual content is longer.
            // meta.setContentLength(content.length());
            // Control browser caching behavior.
            // meta.setCacheControl("Download Action");
            // Set cache expiration time in UTC.
            // meta.setExpirationTime(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));
            // Declare the content encoding (for example, gzip).
            // meta.setContentEncoding("gzip");

            ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(content.getBytes()), meta);
        } catch (OSSException oe) {
            System.out.println("OSS error — the request reached OSS but was rejected.");
            System.out.println("Error message: " + oe.getErrorMessage());
            System.out.println("Error code:    " + oe.getErrorCode());
            System.out.println("Request ID:    " + oe.getRequestId());
            System.out.println("Host ID:       " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error — the SDK could not reach OSS.");
            System.out.println("Error message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

For a full list of standard HTTP headers and their semantics, see [RFC 2616](https://tools.ietf.org/html/rfc2616).

### Set user metadata

User metadata keys are arbitrary strings. We recommend that you use the Base64 encoding method for metadata values. Total metadata size (all headers combined) must not exceed 8 KB.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.ObjectMetadata;
import java.io.ByteArrayInputStream;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "testfolder/exampleobject.txt";
        String content = "Hello OSS";
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
            ObjectMetadata meta = new ObjectMetadata();
            // Add as many key-value pairs as needed. Total metadata size must not exceed 8 KB.
            meta.addUserMetadata("key1", "value1");
            meta.addUserMetadata("key2", "value2");

            ossClient.putObject(bucketName, objectName, new ByteArrayInputStream(content.getBytes()), meta);
        } catch (OSSException oe) {
            System.out.println("OSS error — the request reached OSS but was rejected.");
            System.out.println("Error message: " + oe.getErrorMessage());
            System.out.println("Error code:    " + oe.getErrorCode());
            System.out.println("Request ID:    " + oe.getRequestId());
            System.out.println("Host ID:       " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error — the SDK could not reach OSS.");
            System.out.println("Error message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Modify object metadata

OSS object data is immutable once written, so there is no direct "update metadata" operation. To modify metadata, copy the object to itself (or a new destination) using `CopyObjectRequest` and supply the updated `ObjectMetadata`. The copy operation replaces all metadata — any header not included in `setNewObjectMetadata` is cleared.

**Important**

The destination bucket must be in the same region as the source bucket. To update metadata in place, set the source and destination to the same bucket and object key.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.common.utils.DateUtil;
import com.aliyun.oss.model.CopyObjectRequest;
import com.aliyun.oss.model.ObjectMetadata;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String sourceBucketName = "examplebucket";
        String sourceObjectName = "testfolder/exampleobject.txt";
        // To update metadata in place, set the destination to the same bucket and object key.
        String destinationBucketName = "examplebucket";
        String destinationObjectName = "testfolder/exampleobject.txt";
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
            CopyObjectRequest request = new CopyObjectRequest(sourceBucketName, sourceObjectName,
                destinationBucketName, destinationObjectName);

            // Specify the complete set of metadata you want. Any header not set here is cleared.
            ObjectMetadata meta = new ObjectMetadata();
            meta.setContentType("text/plain; charset=utf-8");
            meta.setHeader("x-oss-storage-class", StorageClass.Standard);
            // Uncomment the headers you need:
            // meta.setContentDisposition("attachment; filename=\"DownloadFilename\"");
            // meta.setContentLength(content.length());
            // meta.setCacheControl("Download Action");
            // meta.setExpirationTime(DateUtil.parseIso8601Date("2022-10-12T00:00:00.000Z"));
            // meta.setContentEncoding("gzip");
            meta.addUserMetadata("key1", "value1");
            meta.addUserMetadata("key2", "value2");

            request.setNewObjectMetadata(meta);
            ossClient.copyObject(request);
        } catch (OSSException oe) {
            System.out.println("OSS error — the request reached OSS but was rejected.");
            System.out.println("Error message: " + oe.getErrorMessage());
            System.out.println("Error code:    " + oe.getErrorCode());
            System.out.println("Request ID:    " + oe.getRequestId());
            System.out.println("Host ID:       " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error — the SDK could not reach OSS.");
            System.out.println("Error message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Query object metadata

Two methods are available depending on how much metadata you need:

**Method**

**Underlying API**

**Returns**

**When to use**

`ossClient.getSimplifiedObjectMeta`

`GetObjectMeta`

ETag, size, and last modified time

Checking basic object properties without downloading the object

`ossClient.getObjectMetadata`

`HeadObject`

All metadata (Content-Type, ETag, expiration time, user metadata, and more)

Reading full metadata including Content-Type and user metadata

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.ObjectMetadata;
import com.aliyun.oss.model.SimplifiedObjectMeta;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String objectName = "testfolder/exampleobject.txt";
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
            // Get basic metadata: ETag, size, and last modified time.
            SimplifiedObjectMeta objectMeta = ossClient.getSimplifiedObjectMeta(bucketName, objectName);
            System.out.println("Size:          " + objectMeta.getSize());
            System.out.println("ETag:          " + objectMeta.getETag());
            System.out.println("Last modified: " + objectMeta.getLastModified());
            // x-oss-last-access-time is available only when access tracking is enabled
            // and you are using OSS SDK for Java V3.16.0 or later.
            System.out.println("Last access:   " + objectMeta.getHeaders().get("x-oss-last-access-time"));

            // Get all metadata.
            ObjectMetadata metadata = ossClient.getObjectMetadata(bucketName, objectName);
            System.out.println("Content-Type:   " + metadata.getContentType());
            System.out.println("Last modified:  " + metadata.getLastModified());
            System.out.println("Expiration:     " + metadata.getExpirationTime());
            System.out.println("ETag:           " + metadata.getETag());
            System.out.println("Content-MD5:    " + metadata.getContentMD5());
            System.out.println("Content-Length: " + metadata.getContentLength());
            System.out.println("Object type:    " + metadata.getObjectType());
            System.out.println("User metadata:  " + metadata.getUserMetadata());
        } catch (OSSException oe) {
            System.out.println("OSS error — the request reached OSS but was rejected.");
            System.out.println("Error message: " + oe.getErrorMessage());
            System.out.println("Error code:    " + oe.getErrorCode());
            System.out.println("Request ID:    " + oe.getRequestId());
            System.out.println("Host ID:       " + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Client error — the SDK could not reach OSS.");
            System.out.println("Error message: " + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## What's next

-   [Manage object metadata](/help/en/oss/user-guide/manage-object-metadata-10/) — concept guide for object metadata
    
-   [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb) — API reference for uploading objects with metadata
    
-   [GetObjectMeta](/help/en/oss/developer-reference/getobjectmeta#reference-sg4-k2w-wdb) — API reference for `getSimplifiedObjectMeta`
    
-   [HeadObject](/help/en/oss/developer-reference/headobject#reference-bgh-cbw-wdb) — API reference for `getObjectMetadata`
    
-   [Sample code on GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/ObjectMetaSample.java) — complete working example
