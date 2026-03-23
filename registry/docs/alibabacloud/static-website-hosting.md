Enable static website hosting on an OSS bucket to serve your website's content directly from object storage. Once configured, requests to the bucket automatically redirect to the designated index document or error document.

All three operations in this topic—configure, retrieve, and delete—map to the `PutBucketWebsite`, `GetBucketWebsite`, and `DeleteBucketWebsite` API operations respectively.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The following RAM permissions, depending on the operation:
    
    -   Configure static website hosting: `oss:PutBucketWebsite`
        
    -   Retrieve the hosting configuration: `oss:GetBucketWebsite`
        
    -   Delete the hosting configuration: `oss:DeleteBucketWebsite`
        

For details on granting these permissions, see [Grant custom access policies to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. If your application runs in the same region as your bucket, use the internal endpoint to reduce latency and avoid egress charges. For a full list of endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The `OssClient` instances in these examples are initialized with an OSS endpoint. To initialize using a custom domain name or Security Token Service (STS) credentials, see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## Configure static website hosting

The following example sets the index document to `index.html` and the error document to `error.html`.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Replace with the endpoint for the region where your bucket is located.
// For example, for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com
var endpoint = "yourEndpoint";

// Load access credentials from environment variables.
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this example.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

// Replace with your bucket name.
var bucketName = "examplebucket";

// Replace with the region where your bucket is located. For example: cn-hangzhou
const string region = "cn-hangzhou";

// Create an OssClient instance using Signature Version 4.
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Set the index document and error document for static website hosting.
    var request = new SetBucketWebsiteRequest(bucketName, "index.html", "error.html");
    client.SetBucketWebsite(request);
    Console.WriteLine("Set bucket:{0} Website succeeded ", bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error message: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error message: {0}", ex.Message);
}
```

## Retrieve the static website hosting configuration

The following example retrieves and prints the index document and error document configured for the bucket.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
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
    // Retrieve the static website hosting configuration.
    var result = client.GetBucketWebsite(bucketName);
    Console.WriteLine("Get bucket:{0} Website succeeded, index doc:{1}, error doc:{2}",
                      bucketName, result.IndexDocument, result.ErrorDocument);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error message: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error message: {0}", ex.Message);
}
```

## Delete the static website hosting configuration

Deleting the configuration disables static website hosting for the bucket. Existing objects in the bucket are not affected.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
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
    // Delete the static website hosting configuration.
    client.DeleteBucketWebsite(bucketName);
    Console.WriteLine("Delete bucket:{0} Website succeeded ", bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error message: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error message: {0}", ex.Message);
}
```

## What's next

After configuring static website hosting, complete the following steps to make the website accessible:

-   **Upload your website content**: Upload `index.html` and other website files to the bucket.
    
-   **(Optional) Configure a custom domain name**: Bind a custom domain to the bucket for a branded URL. See the OSS custom domain name documentation.
    

## References

-   Complete sample code: [GitHub sample](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/SetBucketWetbsiteSample.cs)
    
-   [PutBucketWebsite](/help/en/oss/developer-reference/putbucketwebsite) API operation
    
-   [GetBucketWebsite](/help/en/oss/developer-reference/getbucketwebsite) API operation
    
-   [DeleteBucketWebsite](/help/en/oss/developer-reference/deletebucketwebsite) API operation
