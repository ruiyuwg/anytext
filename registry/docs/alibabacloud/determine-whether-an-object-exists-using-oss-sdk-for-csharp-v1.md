## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket in the target region
    
-   The `oss:GetObject` permission on the target object. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid credentials
    

## Usage notes

-   The sample code uses the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. See [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   To create an `OSSClient` instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## Check whether an object exists

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set the endpoint for the region where your bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
var endpoint = "yourEndpoint";

// Load credentials from environment variables.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

// Specify the bucket name.
var bucketName = "examplebucket";

// Specify the full object path, excluding the bucket name.
var objectName = "exampledir/exampleobject.txt";

// Specify the region ID of the bucket.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and enable Signature V4.
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);

try
{
    bool exist = client.DoesObjectExist(bucketName, objectName);
    Console.WriteLine("Object exists: " + exist);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestId:{2}\tHostId:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

> **Note:** For the complete sample, see [GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/DoesObjectExistSample.cs).
