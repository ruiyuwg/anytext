This topic describes how to add parameters in an object upload or download request to set the limit of upload or download bandwidth. This ensures sufficient bandwidth for other applications.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    

## Configure single-connection bandwidth throttling for simple upload and download

The following sample code provides an example on how to configure single-connection bandwidth throttling for simple upload and download:

```
using System.Text;
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. 
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the name of the bucket. Example: examplebucket. 
var bucketName = "examplebucket";
// Specify the full path of the object. Do not include the bucket name in the full path. Example: exampledir/exampleobject.txt. 
var objectName = "exampledir/exampleobject.txt";
var objectContent = "More than just cloud.";
// Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";
            
// Create a ClientConfiguration instance and modify parameters as required.
var conf = new ClientConfiguration();
            
// Use the signature algorithm V4.
conf.SignatureVersion = SignatureVersion.V4;
            
// Create an OSSClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    byte[] binaryData = Encoding.ASCII.GetBytes(objectContent);
    MemoryStream requestContent = new MemoryStream(binaryData);
    // Set the bandwidth limit for object upload to 100 KB/s, which is equal to 819,200 bit/s. 
    var putRequest = new PutObjectRequest(bucketName, objectName, requestContent)
    {
        TrafficLimit = 100*1024*8
    };
    client.PutObject(putRequest);
    Console.WriteLine("Put object succeeded");

    // Set the bandwidth limit for object download to 100 KB/s, which is equal to 819,200 bit/s. 
    var getRequest = new GetObjectRequest(bucketName, objectName)
    {
        TrafficLimit = 100 * 1024 * 8
    };
    var getResult = client.GetObject(getRequest);
    Console.WriteLine("Get object succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed, {0}", ex.Message);
}
```

## Configure bandwidth throttling for upload and download that use signed URLs

The following sample code provides an example on how to configure single-connection bandwidth throttling when you use signed URLs to upload or download objects:

```
using System.Text;
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. 
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the name of the bucket. Example: examplebucket. 
var bucketName = "examplebucket";
// Specify the full path of the object. Do not include the bucket name in the full path. Example: exampledir/exampleobject.txt. 
var objectName = "exampledir/exampleobject.txt";
var objectContent = "More than just cloud.";
var downloadFilename  = "D:\\localpath\\examplefile.txt";
// Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";
            
// Create a ClientConfiguration instance and modify parameters as required.
 var conf = new ClientConfiguration();
            
// Use the signature algorithm V4.
conf.SignatureVersion = SignatureVersion.V4;
            
// Create an OSSClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{       
    // Generate a signed URL to upload the object. 
    var generatePresignedUriRequest = new GeneratePresignedUriRequest(bucketName, objectName, SignHttpMethod.Put)
    {
        Expiration = DateTime.Now.AddHours(1),
    };

    // Set the bandwidth limit to 100 KB/s, which is equal to 819,200 bit/s. 
    generatePresignedUriRequest.AddQueryParam("x-oss-traffic-limit", "819200");

    var signedUrl = client.GeneratePresignedUri(generatePresignedUriRequest);
    // Use the signed URLs to upload the object. 
    var buffer = Encoding.UTF8.GetBytes(objectContent);
    using (var ms = new MemoryStream(buffer))
    {
        client.PutObject(signedUrl, ms);
    }
    Console.WriteLine("Put object by signatrue succeeded. {0} ", signedUrl.ToString());


    var metadata = client.GetObjectMetadata(bucketName, objectName);
    var etag = metadata.ETag;
    // Generate a signed URL to download the object. 
    // Set the bandwidth limit to 100 KB/s, which is equal to 819,200 bit/s. 
    var req = new GeneratePresignedUriRequest(bucketName, objectName, SignHttpMethod.Get);
    req.AddQueryParam("x-oss-traffic-limit", "819200");

    var uri = client.GeneratePresignedUri(req);
    // Use the signed URL to download the object. 
    OssObject ossObject = client.GetObject(uri);
    using (var file = File.Open(downloadFilename, FileMode.OpenOrCreate))
    {
        using (Stream stream = ossObject.Content)
        {
            int length = 4 * 1024;
            var buf = new byte[length];
            do
            {
                length = stream.Read(buf, 0, length);
                file.Write(buf, 0, length);
            } while (length != 0);
        }
    }
    Console.WriteLine("Get object by signatrue succeeded. {0} ", uri.ToString());
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed, {0}", ex.Message);
}
```
