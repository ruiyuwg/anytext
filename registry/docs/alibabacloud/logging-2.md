OSS generates hourly access logs for resources in your buckets and stores them in a destination bucket you specify. Use the OSS C# SDK to enable, query, and disable this log storage configuration.

> The complete, runnable sample code for all examples in this topic is available on [GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/SetBucketLoggingSample.cs).

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket to act as the log source
    
-   A destination bucket to store the log files (can be the same bucket)
    
-   The required RAM permissions:
    
    -   `oss:PutBucketLogging` — to enable logging
        
    -   `oss:GetBucketLogging` — to query the logging configuration
        
    -   `oss:DeleteBucketLogging` — to disable logging
        

For details on granting permissions, see [Grant custom access policies to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies).

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region (`https://oss-cn-hangzhou.aliyuncs.com`). To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint instead. For endpoint details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an `OSSClient` instance using an OSS endpoint. To use a custom domain name or Security Token Service (STS) instead, see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## Enable logging for a bucket

Required permission: `oss:PutBucketLogging`

The following example enables logging on `examplebucket` and stores log files under the `log/` prefix in `destbucket`. To store logs in the root directory of the destination bucket, omit the prefix parameter.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Load credentials from environment variables.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
var targetBucketName = "destbucket";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Enable logging. Log files are stored under the log/ prefix in destbucket.
    var request = new SetBucketLoggingRequest(bucketName, targetBucketName, "log/");
    client.SetBucketLogging(request);
    Console.WriteLine("Set bucket:{0} Logging succeeded ", bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}. Error message: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error message: {0}", ex.Message);
}
```

After enabling logging, OSS generates log files hourly and saves them to the destination bucket.

## Query the logging configuration of a bucket

Required permission: `oss:GetBucketLogging`

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var result = client.GetBucketLogging(bucketName);
    Console.WriteLine("Get bucket:{0} Logging succeeded, prefix:{1}", bucketName, result.TargetPrefix);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}. Error message: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error message: {0}", ex.Message);
}
```

## Disable logging for a bucket

Required permission: `oss:DeleteBucketLogging`

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    client.DeleteBucketLogging(bucketName);
    Console.WriteLine("Delete bucket:{0} Logging succeeded ", bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}. Error message: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error message: {0}", ex.Message);
}
```

## What's next

-   [PutBucketLogging](/help/en/oss/developer-reference/putbucketlogging) — API reference for enabling logging
    
-   [GetBucketLogging](/help/en/oss/developer-reference/getbucketlogging) — API reference for querying the logging configuration
    
-   [DeleteBucketLogging](/help/en/oss/developer-reference/deletebucketlogging) — API reference for disabling logging
