Image Processing (IMG) is a secure, cost-effective, and highly reliable image processing service provided by OSS to help you process large amounts of data. After you upload source images to OSS, call RESTful API operations to process them from any internet-connected device.

## Prerequisites

Before you begin, make sure that you have:

-   An OSS bucket containing the source image
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables configured with valid access credentials
    

## Usage notes

-   Examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint instead. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Examples in this topic create an OSSClient instance using an OSS endpoint. To create an OSSClient instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## Set up the client

All examples in this topic use the following initialization code to create an OSSClient instance. Replace the placeholder values with your actual bucket name, object name, and local file path before running any example.

```
using System;
using System.IO;
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Util;

// Endpoint for the region where your bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";

// Read access credentials from environment variables.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

// The bucket containing the source image.
var bucketName = "examplebucket";

// The full object path. If the image is not in the bucket root,
// include the directory prefix. Example: exampledir/example.jpg
var objectName = "exampledir/example.jpg";

// Local path where the processed image will be saved.
var localImageFilename = "D:\\localpath\\example.jpg";

// Region ID for the bucket. Example: cn-hangzhou for China (Hangzhou).
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and use signature algorithm V4.
var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

// Create the OSSClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
```

A helper method used by all download examples to write the response stream to a local file:

```
private static void WriteToFile(string filePath, Stream stream)
{
    using (var requestStream = stream)
    {
        using (var fs = File.Open(filePath, FileMode.OpenOrCreate))
        {
            IoUtils.WriteTo(stream, fs);
        }
    }
}
```

## Use IMG parameters to process an image

Pass an IMG parameter string to `GetObjectRequest` to apply image processing when downloading an object. The processed image is returned in the response and saved locally — the original object in OSS is unchanged.

### Example 1: Apply a single IMG parameter

This example resizes the image to 100x100 pixels using the fixed mode and saves the result locally.

```
namespace Samples
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // See "Set up the client" for initialization code.

            try
            {
                // Resize the image to 100x100 pixels.
                var process = "image/resize,m_fixed,w_100,h_100";
                var ossObject = client.GetObject(new GetObjectRequest(bucketName, objectName, process));
                WriteToFile(localImageFilename, ossObject.Content);
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
    }
}
```

### Example 2: Apply multiple IMG parameters in sequence

This example applies three separate operations — resize, crop, and rotate — each in its own request. Each result is saved to the same local path, with the later result overwriting the earlier one.

```
namespace Samples
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // See "Set up the client" for initialization code.
            // If the image does not exist in the bucket, upload it first:
            // client.PutObject(bucketName, objectName, localImageFilename);

            try
            {
                // Resize the image to 100x100 pixels.
                var process = "image/resize,m_fixed,w_100,h_100";
                var ossObject = client.GetObject(new GetObjectRequest(bucketName, objectName, process));
                WriteToFile(localImageFilename, ossObject.Content);

                // Crop a 100x100 region starting at coordinate (100, 100).
                process = "image/crop,w_100,h_100,x_100,y_100";
                ossObject = client.GetObject(new GetObjectRequest(bucketName, objectName, process));
                WriteToFile(localImageFilename, ossObject.Content);

                // Rotate the image 90 degrees.
                process = "image/rotate,90";
                ossObject = client.GetObject(new GetObjectRequest(bucketName, objectName, process));
                WriteToFile(localImageFilename, ossObject.Content);
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
    }
}
```

### Example 3: Chain multiple IMG parameters in a single request

Chain multiple operations into one request by separating parameters with a forward slash (`/`). This example resizes the image to 100x100 pixels and then rotates it 90 degrees in a single call.

```
namespace ImageProcessCascade
{
    class Program
    {
        static void Main(string[] args)
        {
            Program.ImageProcessCascade();
            Console.ReadKey();
        }

        public static void ImageProcessCascade()
        {
            // See "Set up the client" for initialization code.
            // If the image does not exist in the bucket, upload it first:
            // client.PutObject(bucketName, objectName, localImageFilename);

            try
            {
                // Resize to 100x100 pixels, then rotate 90 degrees — in one request.
                var process = "image/resize,m_fixed,w_100,h_100/rotate,90";
                var ossObject = client.GetObject(new GetObjectRequest(bucketName, objectName, process));
                WriteToFile(localImageFilename, ossObject.Content);
                Console.WriteLine("Get Object:{0} with process:{1} succeeded ", objectName, process);
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
    }
}
```

## Use an image style to process an image

An image style encapsulates multiple IMG parameters so you can apply them with a single identifier. Create styles in the OSS console before using them in code. For more information, see [Image styles](/help/en/oss/user-guide/image-styles#concept-mr2-x3c-wdb).

This example applies a custom image style to the source image.

```
namespace ImageProcessCustom
{
    class Program
    {
        static void Main(string[] args)
        {
            Program.ImageProcessCustomStyle();
            Console.ReadKey();
        }

        public static void ImageProcessCustomStyle()
        {
            // See "Set up the client" for initialization code.
            // If the image does not exist in the bucket, upload it first:
            // client.PutObject(bucketName, objectName, localImageFilename);

            try
            {
                // Replace yourCustomStyleName with the name of the image style
                // you created in the OSS console.
                var process = "style/yourCustomStyleName";
                var ossObject = client.GetObject(new GetObjectRequest(bucketName, objectName, process));
                WriteToFile(localImageFilename, ossObject.Content);
                Console.WriteLine("Get Object:{0} with process:{1} succeeded ", objectName, process);
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
    }
}
```

## Generate a signed URL that includes IMG parameters

Private objects require a signed URL for access. To apply image processing to a private object, include the IMG parameter in the `Process` field of `GeneratePresignedUriRequest` — this embeds the parameter into the signature itself.

> Do not append IMG parameters directly to a signed URL after it is generated. The signature covers the full request, and modifying the URL after signing will invalidate it.

This example generates a signed URL that resizes the image to 100x100 pixels. The URL expires after one hour.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Endpoint for the region where your bucket is located.
var endpoint = "yourEndpoint";

// Read access credentials from environment variables.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

var bucketName = "examplebucket";
var objectName = "exampledir/exampledir.jpg";

const string region = "cn-hangzhou";

var conf = new ClientConfiguration();
conf.SignatureVersion = SignatureVersion.V4;

var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // The IMG parameter is included in the signature via the Process field,
    // so it is covered by the URL signing and cannot be modified afterward.
    var process = "image/resize,m_fixed,w_100,h_100";
    var req = new GeneratePresignedUriRequest(bucketName, objectName, SignHttpMethod.Get)
    {
        Expiration = DateTime.Now.AddHours(1),
        Process = process
    };

    // Generate the signed URL.
    var uri = client.GeneratePresignedUri(req);
    Console.WriteLine("Generate Presigned Uri:{0} with process:{1} succeeded ", uri, process);
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

-   For the complete sample code, see the [OSS C# SDK image processing sample on GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/ImageProcessSample.cs).
    
-   For all supported IMG parameters, see [IMG parameters](/help/en/oss/user-guide/overview-17/#section-tx1-qtj-ar8).
