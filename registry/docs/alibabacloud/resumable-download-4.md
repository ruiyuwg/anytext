Resumable download splits a large object into multiple parts and downloads them concurrently. If the download is interrupted, it resumes from the last checkpoint rather than restarting from the beginning.

## Prerequisites

Before you begin, make sure that you have:

-   The `oss:GetObject` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies).
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with your AccessKey ID and AccessKey secret.
    

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   To create an OssClient instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## How it works

1.  The SDK splits the object into parts based on `PartSize`.
    
2.  Parts are downloaded concurrently using up to `ParallelThreadCount` threads.
    
3.  If the download is interrupted, the checkpoint file records the progress. The next attempt reads from that file and skips already-downloaded parts.
    
4.  After all parts are downloaded, OSS combines them into the final file.
    

## Key parameters

**Parameter**

**Description**

`PartSize`

Size of each part in bytes. The example uses 8 MiB (`8 * 1024 * 1024`).

`ParallelThreadCount`

Number of concurrent download threads. The example uses `3`.

`CheckpointDir`

Path to the checkpoint file (`.dcp`). Set to a file path to enable resumable download. Set to `null` to disable it — if the download fails, it restarts from the beginning.

## Download an object

The following example downloads an object using resumable download with checkpoint tracking enabled.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set the endpoint for the region where your bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
var endpoint = "yourEndpoint";

// Read credentials from environment variables.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

// Specify the bucket name and object path.
var bucketName = "examplebucket";
var objectName = "exampleobject.txt";

// Specify the local path to save the downloaded file.
// If the file exists, it is overwritten. If it does not exist, it is created.
var downloadFilename = "D:\\localpath\\examplefile.txt";

// Specify the checkpoint file path.
// You need to specify the breakpoint record file only when the download is interrupted and a breakpoint record file is generated. After the download is complete, this file is deleted.
// Set this to null to disable resumable download.
var checkpointDir = "D:\\localpath\\examplefile.txt.dcp";

const string region = "cn-hangzhou";

// Initialize the client with Signature Version 4.
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var request = new DownloadObjectRequest(bucketName, objectName, downloadFilename)
    {
        // Part size in bytes (8 MiB).
        PartSize = 8 * 1024 * 1024,
        // Number of concurrent download threads.
        ParallelThreadCount = 3,
        // Checkpoint file path. Set to null to disable resumable download.
        CheckpointDir = checkpointDir,
    };

    client.ResumableDownloadObject(request);
    Console.WriteLine("Resumable download object:{0} succeeded", objectName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

## What's next

For details on the underlying API operation, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).
