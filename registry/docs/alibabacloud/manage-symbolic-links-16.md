Symbolic links work like file shortcuts on Windows and allow you to quickly access associated objects in Object Storage Service (OSS).

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket in the target region
    
-   The `oss:PutObject` permission to create a symbolic link
    
-   The `oss:GetObject` permission to query a symbolic link
    

For permission setup, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies).

## Usage notes

-   The examples on this page use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint instead. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples initialize `OssClient` using an OSS endpoint. To initialize `OssClient` with a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## Create a symbolic link

A symbolic link points to a target object in the same bucket. Call `CreateSymlink` with the bucket name, symbolic link name, and target object name.

```
using Aliyun.OSS;
using System.Text;
using Aliyun.OSS.Common;

// Specify the endpoint for the region where your bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
var endpoint = "yourEndpoint";

// Load access credentials from environment variables.
// Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

// Specify the bucket name and object names.
var bucketName = "examplebucket";
var targetObjectName = "yourTargetObjectName";
var symlinkObjectName = "yourSymlinkObjectName";
var objectContent = "More than just cloud.";

// Specify the region where your bucket is located. Example: cn-hangzhou.
const string region = "cn-hangzhou";

// Initialize the OssClient with signature version V4.
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Upload the target object first.
    byte[] binaryData = Encoding.ASCII.GetBytes(objectContent);
    MemoryStream requestContent = new MemoryStream(binaryData);
    client.PutObject(bucketName, targetObjectName, requestContent);

    // Create the symbolic link pointing to the target object.
    client.CreateSymlink(bucketName, symlinkObjectName, targetObjectName);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

## Get a symbolic link

Call `GetSymlink` to retrieve the target object that a symbolic link points to. The response includes the target object name in the `Target` property.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

var endpoint = "yourEndpoint";
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
var bucketName = "examplebucket";
var symlinkObjectName = "yourSymlinkObjectName";
const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Query the symbolic link to get the target object name.
    var ossSymlink = client.GetSymlink(bucketName, symlinkObjectName);
    Console.WriteLine("Target object is {0}", ossSymlink.Target);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

## What's next

-   [PutSymlink](/help/en/oss/developer-reference/putsymlink#reference-qzz-qzw-wdb) — API reference for creating a symbolic link
    
-   [GetSymlink](/help/en/oss/developer-reference/getsymlink#reference-s3d-s1x-wdb) — API reference for querying a symbolic link
