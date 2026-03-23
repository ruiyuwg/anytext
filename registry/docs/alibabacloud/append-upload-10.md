Append upload lets you add content to the end of an appendable object using the AppendObject method.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   If the object does not exist, the AppendObject operation creates an appendable object.
    
-   If the object exists:
    
    -   If the object is an appendable object and the specified append position matches the current length of the object, the content is appended to the end of the object.
        
    -   If the object is an appendable object but the specified append position does not match the current length of the object, a PositionNotEqualToLength exception is thrown.
        
    -   If the object is not an appendable object, such as a Normal object uploaded using simple upload, an ObjectNotAppendable exception is thrown.
        

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Definition**

AppendObject

`oss:PutObject`

You can call this operation to upload an object by appending the object to an existing object.

`oss:PutObjectTagging`

When uploading an object by appending the object to an existing object, if you specify object tags through x-oss-tagging, this permission is required.

## Sample code

The following code provides an example of how to perform an append upload:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Replace yourEndpoint with the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. For example, examplebucket.
var bucketName = "examplebucket";
// Specify the full path of the object. The full path cannot include the bucket name. For example, exampledir/exampleobject.txt.
var objectName = "exampledir/exampleobject.txt";
// Specify the full path of the local file. For example, D:\\localpath\\examplefile.txt. If you do not specify a local path, the file is uploaded from the local path of the project to which the sample program belongs.
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
// The position for the first append operation is 0. The return value is the position for the next append operation. The position for subsequent append operations is the length of the object before the append operation.
long position = 0;
try
{
    var metadata = client.GetObjectMetadata(bucketName, objectName);
    position = metadata.ContentLength;
}
catch (Exception) { }
try
{
    using (var fs = File.Open(localFilename, FileMode.Open))
    {
        var request = new AppendObjectRequest(bucketName, objectName)
        {
            ObjectMetadata = new ObjectMetadata(),
            Content = fs,
            Position = position
        };
        // Append the object.
        var result = client.AppendObject(request);
        // Set the append position of the object.
        position = result.NextAppendPosition;
        Console.WriteLine("Append object succeeded, next append position:{0}", position);
    }
    // Get the append position and append the object again.
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
        Console.WriteLine("Append object succeeded, next append position:{0}", position);
    }
}
catch (Exception ex)
{
    Console.WriteLine("Append object failed, {0}", ex.Message);
}
```

## References

-   For the complete sample code for append upload, see [GitHub example](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/AppendObjectSample.cs).
    
-   For more information about the API operation for append upload, see [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db).
