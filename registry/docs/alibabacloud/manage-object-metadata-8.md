Objects that are stored in Object Storage Service (OSS) consist of keys, data, and object metadata. Object metadata describes the object. Object metadata includes standard HTTP headers and user metadata. You can create custom HTTP request policies such as object cache policies and forced object download policies by configuring standard HTTP headers. You can configure user metadata for an object to identify the purposes or attributes of the object.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   To configure object metadata, you must have the `oss:PutObject` permission. To query object metadata, you must have the `oss:GetObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Sample code

The following code shows how to set, modify, and retrieve file metadata:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Util;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name.
var bucketName = "examplebucket";
// Specify the full path of the object. The full path cannot contain the bucket name.
var objectName = "exampleobject.txt";
// Specify the full path of the local file. If you do not specify this path, the file is uploaded from the project's local path.
var localFilename = "D:\\localpath\\examplefile.txt";
// Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Use Signature V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    using (var fs = File.Open(localFilename, FileMode.Open))
    {
        // Create metadata for the file to be uploaded. You can set HTTP headers using file metadata.
        var metadata = new ObjectMetadata()
        {
            // Specify the file type.
            ContentType = "text/html",
            // Set the cache expiration time. The format is Greenwich Mean Time (GMT).
            ExpirationTime = DateTime.Parse("2025-10-12T00:00:00.000Z"),
        };
        // Set the length of the file to be uploaded. If the file is larger than this length, the file is truncated to this length. If the file is smaller, the actual file length is used.
        metadata.ContentLength = fs.Length;
        // Set the caching behavior of the web page when the file is downloaded.
        metadata.CacheControl = "No-Cache";
        // Set the value of the mykey1 metadata to myval1.
        metadata.UserMetadata.Add("mykey1", "myval1");
        // Set the value of the mykey2 metadata to myval2.
        metadata.UserMetadata.Add("mykey2", "myval2");
        var saveAsFilename = "file-name-test-123.txt";
        var contentDisposition = string.Format("attachment;filename*=utf-8''{0}", HttpUtils.EncodeUri(saveAsFilename, "utf-8"));
        // Specify a default file name for the content that is saved from the request.
        metadata.ContentDisposition = contentDisposition;
        // Upload the file and set its metadata.
        client.PutObject(bucketName, objectName, fs, metadata);
        Console.WriteLine("Put object succeeded");
        // Get the file metadata.
        var oldMeta = client.GetObjectMetadata(bucketName, objectName);
        // Set new file metadata.
        var newMeta = new ObjectMetadata()
        {
            ContentType = "application/octet-stream",
            ExpirationTime = DateTime.Parse("2035-11-11T00:00:00.000Z"),
            // Specify the content encoding format to be used when the file is downloaded.
            ContentEncoding = null,
            CacheControl = ""
        };
        // Add custom metadata.
        newMeta.UserMetadata.Add("author", "oss");
        newMeta.UserMetadata.Add("flag", "my-flag");
        newMeta.UserMetadata.Add("mykey2", "myval2-modified-value");
        // Modify the file metadata using the ModifyObjectMeta method.
        client.ModifyObjectMeta(bucketName, objectName, newMeta);
    }
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed, {0}", ex.Message);
}
```

## References

-   For the complete sample code that is used to set, modify, and retrieve file metadata, see [GitHub sample](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/PutObjectSample.cs).
    
-   For more information about the API operation that you can call to configure object metadata during simple upload, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).
    
-   For more information about the API operation used to modify file metadata when you copy a file, see [CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db).
    
-   For more information about the API operation that you can call to query object metadata, see [GetObjectMeta](/help/en/oss/developer-reference/getobjectmeta#reference-sg4-k2w-wdb) and [HeadObject](/help/en/oss/developer-reference/headobject#reference-bgh-cbw-wdb).
