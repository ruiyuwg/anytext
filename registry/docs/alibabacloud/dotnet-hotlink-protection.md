Hotlink protection lets you control which websites can embed or link to resources in your OSS bucket by filtering HTTP Referer headers. Configure a Referer whitelist or blacklist to block unauthorized access and prevent unexpected traffic fees.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The `oss:PutBucketReferer` permission to configure hotlink protection
    
-   The `oss:GetBucketReferer` permission to query hotlink protection configurations
    
-   (Optional) Familiarity with [hotlink protection concepts](/help/en/oss/user-guide/hotlink-protection)
    

## Operations overview

**Operation**

**Method**

**Description**

Configure hotlink protection

`SetBucketReferer`

Sets the Referer whitelist or blacklist for a bucket

Query hotlink protection configurations

`GetBucketReferer`

Retrieves the current Referer configuration of a bucket

Clear hotlink protection configurations

`SetBucketReferer`

Overwrites the existing configuration to allow all Referers

## Usage notes

-   All examples use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint instead. See [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   All examples create an `OssClient` instance using an OSS endpoint. To use custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## Configure hotlink protection for a bucket

Use `SetBucketReferer` to apply a Referer whitelist. Wildcards `*` (any sequence) and `?` (single character) are supported in Referer entries.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Endpoint of the region where the bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
var endpoint = "yourEndpoint";

// Load access credentials from environment variables.
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

var bucketName = "examplebucket";

// Region where the bucket is located. Example: cn-hangzhou
const string region = "cn-hangzhou";

// Create an OssClient instance using signature algorithm V4.
// Enumerated values for SignatureVersion: V1, V4
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Build the Referer whitelist.
    // Wildcards supported: * (any sequence of characters), ? (single character)
    var refererList = new List<string>();
    refererList.Add("http://www.aliyun.com");
    refererList.Add("https://www.aliyun.com");
    // refererList.Add("http://www.help.alibabacloud.com");
    // refererList.Add("http://www.?.aliyuncs.com");

    var srq = new SetBucketRefererRequest(bucketName, refererList);
    client.SetBucketReferer(srq);
    Console.WriteLine("Set bucket:{0} Referer succeeded ", bucketName);
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

## Query hotlink protection configurations

Use `GetBucketReferer` to retrieve the current Referer configuration. The response includes whether empty Referers are allowed and the list of configured Referer entries.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;  // Enumerated values: V1, V4

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var rc = client.GetBucketReferer(bucketName);
    Console.WriteLine("Get bucket:{0} Referer succeeded ", bucketName);

    // Whether requests with an empty Referer header are allowed (true = allowed, false = denied)
    Console.WriteLine("Allow empty Referer: " + (rc.AllowEmptyReferer ? "yes" : "no"));

    // The configured Referer entries (whitelist or blacklist)
    if (rc.RefererList.Referers != null)
    {
        for (var i = 0; i < rc.RefererList.Referers.Length; i++)
            Console.WriteLine(rc.RefererList.Referers[i]);
    }
    else
    {
        Console.WriteLine("Empty Referer List");
    }
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
finally
{
    // Clean up: reset the bucket Referer configuration after the query.
    client.SetBucketReferer(new SetBucketRefererRequest(bucketName));
}
```

## Clear hotlink protection configurations

Hotlink protection configurations cannot be deleted directly. To remove restrictions, overwrite the existing configuration with a new rule that allows requests with an empty Referer header.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;  // Enumerated values: V1, V4

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Pass only the bucket name (no Referer list) to allow all Referers, including empty ones.
    var srq = new SetBucketRefererRequest(bucketName);
    client.SetBucketReferer(srq);
    Console.WriteLine("Set bucket:{0} Referer succeeded ", bucketName);
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

-   [Hotlink protection](/help/en/oss/user-guide/hotlink-protection) — feature overview and configuration options
    
-   [PutBucketReferer](/help/en/oss/developer-reference/putbucketreferer#reference-prc-ys5-tdb) — API reference for configuring hotlink protection
    
-   [GetBucketReferer](/help/en/oss/developer-reference/getbucketreferer#reference-bs5-rpw-tdb) — API reference for querying hotlink protection configurations
    
-   [Complete sample code on GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/SetBucketRefererSample.cs)
