Upload objects to a versioned OSS bucket using simple upload (string or byte stream), append upload (file stream), or multipart upload (large local files split into parts).

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket with versioning enabled or suspended
    
-   The `oss:PutObject` permission. For details, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    
-   OSS C# SDK V1 installed
    

## Usage notes

-   The examples use the public endpoint of the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use an internal endpoint instead. For endpoint details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an `OssClient` instance using an OSS endpoint. To use a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## How versioning affects uploads

-   **Versioning-enabled bucket:** OSS generates a unique version ID for each uploaded object and returns it in the `x-oss-version-id` response header.
    
-   **Versioning-suspended bucket (simple upload):** OSS assigns a version ID of `null`. If an object with the same name already exists, it is overwritten, leaving only a single `null`\-versioned object.
    

For multipart upload, OSS generates the version ID and returns it in the `x-oss-version-id` response header only after `CompleteMultipartUpload` succeeds.

## Simple upload

Use `PutObject` to upload a string or byte stream directly to a versioned bucket.

```
using System.Text;
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Replace with the endpoint of the region where your bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
var endpoint = "yourEndpoint";

// Load access credentials from environment variables.
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

var bucketName = "examplebucket";
// Full object path, excluding the bucket name. Example: exampledir/exampleobject.txt
var objectName = "exampleobject.txt";
var objectContent = "More than just cloud.";

// Replace with the region where your bucket is located. Example: cn-hangzhou
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
// Use Signature Version 4.
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    byte[] binaryData = Encoding.ASCII.GetBytes(objectContent);
    MemoryStream requestContent = new MemoryStream(binaryData);
    var result = client.PutObject(bucketName, objectName, requestContent);
    Console.WriteLine("Put object succeeded, version ID: {0}", result.VersionId);
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed: {0}", ex.Message);
}
```

## Append upload

Use `AppendObject` to append data to an existing appendable object in a versioned bucket.

> `AppendObject` can only target the current version of an appendable object. Keep the following behaviors in mind:

> Appending to an appendable object does not create a previous version of that object.

> Running `PutObject` or `DeleteObject` on an appendable object stores it as a previous version and prevents further appending.

> `AppendObject` cannot target a non-appendable object (a normal object or a delete marker).

The first append starts at position `0`. Each subsequent append must start at the byte offset returned in `NextAppendPosition`.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

var bucketName = "examplebucket";
var objectName = "exampleobject.txt";
// Full path to the local file. Example: D:\\localpath\\examplefile.txt
var localFilename = "D:\\localpath\\examplefile.txt";

const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

// Determine the starting position:
// - For a new object, start at 0.
// - For an existing object, start at its current size.
long position = 0;
try
{
    var metadata = client.GetObjectMetadata(bucketName, objectName);
    position = metadata.ContentLength;
}
catch (Exception) { }

try
{
    // First append
    using (var fs = File.Open(localFilename, FileMode.Open))
    {
        var request = new AppendObjectRequest(bucketName, objectName)
        {
            ObjectMetadata = new ObjectMetadata(),
            Content = fs,
            Position = position
        };
        var result = client.AppendObject(request);
        position = result.NextAppendPosition;
        Console.WriteLine("Append succeeded. Next position: {0}, version ID: {1}", position, result.VersionId);
    }

    // Second append, starting at the position returned by the first
    using (var fs = File.Open(localFilename, FileMode.Open))
    {
        var request = new AppendObjectRequest(bucketName, objectName)
        {
            ObjectMetadata = new ObjectMetadata(),
            Content = fs,
            Position = position
        };
        var result = client.AppendObject(request);
        position = result.NextAppendPosition;
        Console.WriteLine("Append succeeded. Next position: {0}, version ID: {1}", position, result.VersionId);
    }
}
catch (Exception ex)
{
    Console.WriteLine("Append object failed: {0}", ex.Message);
}
```

## Multipart upload

Use multipart upload to split a large local file into parts and upload them sequentially. OSS assigns a unique version ID only after `CompleteMultipartUpload` succeeds.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

var bucketName = "examplebucket";
// Full object path, excluding the bucket name.
var objectName = "exampledir/exampleobject.txt";
// Full path to the local file. Example: D:\\localpath\\examplefile.txt
var localFilename = "D:\\localpath\\examplefile.txt";

const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

// Step 1: Initiate the multipart upload to get an upload ID.
// You can set ObjectMeta in InitiateMultipartUploadRequest, but ContentLength is not required here.
var uploadId = "";
try
{
    var request = new InitiateMultipartUploadRequest(bucketName, objectName);
    var result = client.InitiateMultipartUpload(request);
    uploadId = result.UploadId;
    Console.WriteLine("Multipart upload initiated. Upload ID: {0}", result.UploadId);
}
catch (Exception ex)
{
    Console.WriteLine("InitiateMultipartUpload failed: {0}", ex.Message);
}

// Step 2: Upload each part and collect its ETag.
var partSize = 100 * 1024;
var fi = new FileInfo(localFilename);
var fileSize = fi.Length;
var partCount = fileSize / partSize;
if (fileSize % partSize != 0)
{
    partCount++;
}

// OSS verifies each part's ETag after CompleteMultipartUpload and then assembles the object.
var partETags = new List<PartETag>();
try
{
    using (var fs = File.Open(localFilename, FileMode.Open))
    {
        for (var i = 0; i < partCount; i++)
        {
            var skipBytes = (long)partSize * i;
            fs.Seek(skipBytes, 0);
            // The last part may be smaller than partSize.
            var size = (partSize < fileSize - skipBytes) ? partSize : (fileSize - skipBytes);
            var request = new UploadPartRequest(bucketName, objectName, uploadId)
            {
                InputStream = fs,
                PartSize = size,
                PartNumber = i + 1
            };
            var result = client.UploadPart(request);
            partETags.Add(result.PartETag);
            Console.WriteLine("Uploaded part {0}/{1}", partETags.Count, partCount);
        }
        Console.WriteLine("All parts uploaded.");
    }
}
catch (Exception ex)
{
    Console.WriteLine("UploadPart failed: {0}", ex.Message);
}

// Step 3: Complete the upload. OSS assembles the parts and assigns a version ID.
try
{
    var completeRequest = new CompleteMultipartUploadRequest(bucketName, objectName, uploadId);
    foreach (var partETag in partETags)
    {
        completeRequest.PartETags.Add(partETag);
    }
    var result = client.CompleteMultipartUpload(completeRequest);
    Console.WriteLine("Multipart upload complete. Version ID: {0}", result.VersionId);
}
catch (Exception ex)
{
    Console.WriteLine("CompleteMultipartUpload failed: {0}", ex.Message);
}
```

## What's next

-   [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb) — API reference for simple upload
    
-   [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db) — API reference for append upload
    
-   [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb) — API reference for multipart upload
