Streaming download reads an object's content incrementally as a stream, rather than loading the entire object into memory at once. This approach suits large objects or objects that take a long time to transfer.

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket with at least one object to download
    
-   The `oss:GetObject` permission. For setup instructions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with your AccessKey ID and AccessKey secret
    

## Usage notes

-   The example uses the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. For a full list of endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The example creates an `OssClient` instance using an OSS endpoint. To create an instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## Download an object as a stream

The following example calls `GetObject` to download an object. The method returns an `OssObject`, which includes the bucket name, object name, object metadata, and a `Content` stream. The code reads from that stream in 1024-byte chunks and writes each chunk to a local file.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint for the region where your bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
var endpoint = "yourEndpoint";

// Load access credentials from environment variables.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

// Replace the following values with your actual bucket name, object path, and local output path.
var bucketName = "examplebucket";
var objectName = "exampledir/exampleobject.txt";
var downloadFilename = "D:\\localpath\\examplefile.txt";

// Specify the region where your bucket is located. Example: cn-hangzhou
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and enable signature algorithm V4.
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Call GetObject to download the object.
    // OssObject.Content is a readable stream containing the object data.
    var obj = client.GetObject(bucketName, objectName);
    using (var requestStream = obj.Content)
    {
        byte[] buf = new byte[1024];
        var fs = File.Open(downloadFilename, FileMode.OpenOrCreate);
        var len = 0;

        // Read the stream in 1024-byte increments and write each chunk to the local file.
        while ((len = requestStream.Read(buf, 0, 1024)) != 0)
        {
            fs.Write(buf, 0, len);
        }
        fs.Close();
    }
    Console.WriteLine("Get object succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Get object failed. {0}", ex.Message);
}
```

## What's next

-   For the complete sample code, see [GetObjectSample.cs on GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/GetObjectSample.cs).
    
-   For the full API reference, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).
