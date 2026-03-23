Copy objects within a bucket or across buckets in the same region using the OSS SDK for C#.

## Prerequisites

Before you begin, make sure you have:

-   Read permissions on the source object, and read and write permissions on the destination bucket
    
-   Source and destination buckets in the same region — cross-region copy is not supported
    
-   No retention policies on either bucket — if a retention policy exists, the copy returns the error `The object you specified is immutable.`
    

> The examples in this topic use the public endpoint for the China (Hangzhou) region (`https://oss-cn-hangzhou.aliyuncs.com`) and create an `OssClient` instance using an OSS endpoint. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. To use an internal endpoint or create the client with a custom domain name or Security Token Service (STS), see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints) and [Initialization](/help/en/oss/developer-reference/initialization-ossclient).

## Choose a copy method

**Object size**

**Method**

**API**

Up to 1 GB

Simple copy

`CopyObject`

Larger than 1 GB

Multipart copy

`UploadPartCopy`

Any size, with resume support

Resumable copy

`ResumableCopyObject`

## Copy a small object

Use `CopyObjectRequest` to copy objects up to 1 GB in a single operation.

Set `NewObjectMetadata` to control how metadata is handled:

-   `null` — copies the source object's metadata (COPY mode)
    
-   An `ObjectMetadata` instance — replaces the metadata with the values you specify (REPLACE mode)
    

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint for the region where the bucket is located.
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";

// Get credentials from environment variables.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

// Specify the source and destination bucket names and object paths.
// The full path cannot include the bucket name.
var sourceBucket = "srcexamplebucket";
var sourceObject = "srcdir/scrobject.txt";
var targetBucket = "destbucket";
var targetObject = "destdir/destobject.txt";

const string region = "cn-hangzhou";

// Create the client with Signature V4.
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Set custom metadata (REPLACE mode).
    // To copy the source object's metadata instead, set NewObjectMetadata = null.
    var metadata = new ObjectMetadata();
    metadata.AddHeader("mk1", "mv1");
    metadata.AddHeader("mk2", "mv2");

    var req = new CopyObjectRequest(sourceBucket, sourceObject, targetBucket, targetObject)
    {
        NewObjectMetadata = metadata
    };

    client.CopyObject(req);
    Console.WriteLine("Copy object succeeded");
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID: {2} \tHostID: {3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

For the complete sample, see [CopyObjectSample.cs on GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/CopyObjectSample.cs).

## Copy a large object

For objects larger than 1 GB, split the object into parts and copy each part using `UploadPartCopy`. The process has three steps:

1.  Call `InitiateMultipartUpload` to initialize the multipart upload and get an upload ID.
    
2.  Call `UploadPartCopy` in a loop to copy each part. Specify the byte range using `BeginIndex` and `PartSize`.
    
3.  Call `CompleteMultipartUpload` with the collected `PartETag` values. OSS verifies each part and assembles them into the final object.
    

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

var sourceBucket = "srcexamplebucket";
var sourceObject = "srcdir/scrobject.txt";
var targetBucket = "destbucket";
var targetObject = "destdir/destobject.txt";
var uploadId = "";
var partSize = 50 * 1024 * 1024;  // 50 MB per part

const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Step 1: Initialize the multipart upload.
    var request = new InitiateMultipartUploadRequest(targetBucket, targetObject);
    var result = client.InitiateMultipartUpload(request);
    uploadId = result.UploadId;
    Console.WriteLine("Init multipart upload succeeded, Upload Id: {0}", result.UploadId);

    // Step 2: Calculate part count and copy each part.
    var metadata = client.GetObjectMetadata(sourceBucket, sourceObject);
    var fileSize = metadata.ContentLength;
    var partCount = (int)fileSize / partSize;
    if (fileSize % partSize != 0)
    {
        partCount++;
    }

    var partETags = new List<PartETag>();
    for (var i = 0; i < partCount; i++)
    {
        var skipBytes = (long)partSize * i;
        var size = (partSize < fileSize - skipBytes) ? partSize : (fileSize - skipBytes);

        var uploadPartCopyRequest = new UploadPartCopyRequest(
            targetBucket, targetObject, sourceBucket, sourceObject, uploadId)
        {
            PartSize = size,
            PartNumber = i + 1,
            BeginIndex = skipBytes  // Starting byte position of this part
        };

        var uploadPartCopyResult = client.UploadPartCopy(uploadPartCopyRequest);
        Console.WriteLine("UploadPartCopy: {0}", i);
        partETags.Add(uploadPartCopyResult.PartETag);
    }

    // Step 3: Complete the multipart copy.
    // OSS verifies each part ETag and assembles the final object.
    var completeRequest = new CompleteMultipartUploadRequest(targetBucket, targetObject, uploadId);
    foreach (var partETag in partETags)
    {
        completeRequest.PartETags.Add(partETag);
    }

    client.CompleteMultipartUpload(completeRequest);
    Console.WriteLine("CompleteMultipartUpload succeeded");
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID: {2} \tHostID: {3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

For the complete sample, see [MultipartUploadSample.cs on GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/MultipartUploadSample.cs).

## Resume an interrupted copy

Use `ResumableCopyObject` to resume a copy from where it stopped after a failure. Pass a `checkpointDir` path to store progress between attempts. If the copy fails, the next call reads from the checkpoint and skips parts already copied.

After the copy completes, the checkpoint file is deleted.

> If `checkpointDir` is `null`, resumable copy is disabled and the task restarts from the beginning on each attempt.

```
using Aliyun.OSS;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

var sourceBucket = "srcexamplebucket";
var sourceObject = "srcdir/scrobject.txt";
var targetBucket = "destbucket";
var targetObject = "destdir/destobject.txt";

// Specify the directory that stores checkpoint state.
// Replace <yourCheckpointDir> with the actual directory path.
var checkpointDir = @"<yourCheckpointDir>";

const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var request = new CopyObjectRequest(sourceBucket, sourceObject, targetBucket, targetObject);
    client.ResumableCopyObject(request, checkpointDir);
    Console.WriteLine("Resumable copy succeeded: {0}", request.DestinationKey);
}
catch (Exception ex)
{
    Console.WriteLine("Resumable copy failed: {0}", ex.Message);
}
```

For the complete sample, see [ResumableSample.cs on GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/ResumableSample.cs).

## References

-   [CopyObject API reference](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db)
    
-   [UploadPartCopy API reference](/help/en/oss/developer-reference/uploadpartcopy#reference-t4b-vpx-wdb)
