Simple upload uses the PutObject method to upload a single file (object). You can upload strings and local files synchronously or asynchronously. You can also use MD5 validation to ensure data integrity during the upload process.

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Definition**

PutObject

`oss:PutObject`

Uploads an object.

`oss:PutObjectTagging`

When uploading an object, if you specify object tags through `x-oss-tagging`, this permission is required.

`kms:GenerateDataKey`

When uploading an object, if the object metadata contains `X-Oss-Server-Side-Encryption: KMS`, these two permissions are required.

`kms:Decrypt`

## Upload a string

The following code shows how to upload a string to the exampleobject.txt file in the examplebucket bucket.

```
using System.Text;
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. For example, examplebucket.
var bucketName = "examplebucket";
// Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt.
var objectName = "exampledir/exampleobject.txt";
// Specify the string.
var objectContent = "More than just cloud.";
// Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature version to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    byte[] binaryData = Encoding.ASCII.GetBytes(objectContent);
    MemoryStream requestContent = new MemoryStream(binaryData);
    // Upload the file.
    client.PutObject(bucketName, objectName, requestContent);
    Console.WriteLine("Put object succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed, {0}", ex.Message);
}
```

## Upload a local file

The following code shows how to upload the local file examplefile.txt to the exampleobject.txt file in the examplebucket bucket.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. For example, examplebucket.
var bucketName = "examplebucket";
// Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt.
var objectName = "exampledir/exampleobject.txt";
// Specify the full path of the local file. If you do not specify a local path, the file is uploaded from the local path that corresponds to the project of the sample program by default.
var localFilename = "D:\\localpath\\examplefile.txt";
// Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature version to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    // Upload the file.
    client.PutObject(bucketName, objectName, localFilename);
    Console.WriteLine("Put object succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed, {0}", ex.Message);
}
```

## Upload a file with MD5 validation

To ensure that the data sent by the client is the same as the data received by the OSS server, add the Content-Md5 value to ObjectMeta. The OSS server uses this MD5 hash for validation.

**Important**

MD5 validation may reduce performance.

The following code shows how to perform MD5 validation when you upload a local file.

```
using System;
using System.IO;

using Aliyun.OSS;
using Aliyun.OSS.Util;
using Aliyun.OSS.Common;

// Set yourEndpoint to the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. For example, examplebucket.
var bucketName = "examplebucket";
// Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt.
var objectName = "exampledir/exampleobject.txt";
// Specify the full path of the local file. For example, D:\\localpath\\examplefile.txt. If you do not specify a local path, the file is uploaded from the local path that corresponds to the project of the sample program by default.
var localFilename = "D:\\localpath\\examplefile.txt";
// Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature version to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    // Calculate the MD5 hash.
    string md5;
    using (var fs = File.Open(localFilename, FileMode.Open))
    {
        md5 = OssUtils.ComputeContentMd5(fs, fs.Length);
    }
    var objectMeta = new ObjectMetadata
    {
        ContentMd5 = md5
    };
    // Upload the file.
    client.PutObject(bucketName, objectName, localFilename, objectMeta);
    Console.WriteLine("Put object succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed, {0}", ex.Message);
}
```

## Asynchronous upload

The following code shows how to asynchronously upload the local file examplefile.txt to the exampleobject.txt file in the examplebucket bucket. When you perform an asynchronous upload, you must implement your own callback handler function.

```
using System;
using System.IO;
using System.Threading;

using Aliyun.OSS;
using Aliyun.OSS.Common;

// Asynchronous upload.
namespace AsyncPutObject
{
    class Program
    {
        // Set yourEndpoint to the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com.
        static string endpoint = "yourEndpoint";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
        var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
        // Specify the bucket name. For example, examplebucket.
        static string bucketName = "examplebucket";
        // Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt.
        static string objectName = "exampledir/exampleobject.txt";
        // Specify the full path of the local file. For example, D:\\localpath\\examplefile.txt. If you do not specify a local path, the file is uploaded from the local path that corresponds to the project of the sample program by default.
        static string localFilename = "D:\\localpath\\examplefile.txt";

        static AutoResetEvent _event = new AutoResetEvent(false);
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        const string region = "cn-hangzhou";
        // Create a ClientConfiguration instance and modify the default parameters as needed.
        var conf = new ClientConfiguration();
        // Set the signature version to V4.
        conf.SignatureVersion = SignatureVersion.V4;

        // Create an OssClient instance.
        var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
        client.SetRegion(region);
        
        private static void PutObjectCallback(IAsyncResult ar)
        {
            try
            {
                client.EndPutObject(ar);
                Console.WriteLine(ar.AsyncState as string);
                Console.WriteLine("Put object succeeded");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                _event.Set();
            }
        }

        public static void AsyncPutObject()
        {
            try
            {
                using (var fs = File.Open(localFilename, FileMode.Open))
                {
                    var metadata = new ObjectMetadata();
                    // Add custom metadata.
                    metadata.UserMetadata.Add("mykey1", "myval1");
                    metadata.UserMetadata.Add("mykey2", "myval2");
                    metadata.CacheControl = "No-Cache";
                    metadata.ContentType = "text/txt";
                    string result = "Notice user: put object finish";

                    // Asynchronous upload.
                    client.BeginPutObject(bucketName, objectName, fs, metadata, PutObjectCallback, result.ToCharArray());

                    _event.WaitOne();
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
        }

        static void Main(string[] args)
        {
            Program.AsyncPutObject();
        }
    }
}            
```

## References

-   For the complete sample code for simple upload, see the [GitHub example](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/PutObjectSample.cs).
    
-   For more information about the API operation for simple upload, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).
