A progress bar reports upload and download progress by tracking bytes transferred in real time.

## Usage notes

-   These examples use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   These examples create an `OssClient` instance using an OSS endpoint. To create an `OssClient` using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## How it works

Attach a progress callback to a `GetObjectRequest` by subscribing to its `StreamTransferProgress` event. Each time data is read from the response stream, OSS invokes the callback with a `StreamTransferProgressArgs` object containing the following properties:

**Property**

**Type**

**Description**

`TransferredBytes`

`long`

Bytes transferred so far

`TotalBytes`

`long`

Total size of the object in bytes

Compute the completion percentage as `TransferredBytes * 100 / TotalBytes`.

## Track download progress

The following example downloads an object and prints the transfer progress to the console.

```
using System;
using System.IO;
using Aliyun.OSS;
using Aliyun.OSS.Common;

namespace GetObjectProgress
{
    class Program
    {
        static void Main(string[] args)
        {
            Program.GetObjectProgress();
            Console.ReadKey();
        }

        public static void GetObjectProgress()
        {
            // Set the endpoint for the region where your bucket is located.
            // Example: https://oss-cn-hangzhou.aliyuncs.com
            var endpoint = "yourEndpoint";

            // Read credentials from environment variables.
            // Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this example.
            var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
            var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

            // Specify the bucket name and the full object path (excluding the bucket name).
            var bucketName = "examplebucket";
            var objectName = "exampledir/exampleobject.txt";

            // Specify the region where the bucket is located. Example: cn-hangzhou.
            const string region = "cn-hangzhou";

            // Create a ClientConfiguration instance and enable Signature V4.
            var conf = new ClientConfiguration();
            conf.SignatureVersion = SignatureVersion.V4;

            // Create an OssClient instance.
            var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
            client.SetRegion(region);

            try
            {
                // Attach the progress callback to the request.
                var getObjectRequest = new GetObjectRequest(bucketName, objectName);
                getObjectRequest.StreamTransferProgress += streamProgressCallback;

                // Download the object.
                var ossObject = client.GetObject(getObjectRequest);
                using (var stream = ossObject.Content)
                {
                    var buffer = new byte[1024 * 1024];
                    var bytesRead = 0;
                    while ((bytesRead = stream.Read(buffer, 0, buffer.Length)) > 0)
                    {
                        // Process the downloaded data here.
                    }
                }
                Console.WriteLine("Get object:{0} succeeded", objectName);
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

        // Progress callback: prints the transfer percentage, total bytes, and transferred bytes.
        private static void streamProgressCallback(object sender, StreamTransferProgressArgs args)
        {
            Console.WriteLine("ProgressCallback - Progress: {0}%, TotalBytes:{1}, TransferredBytes:{2}",
                args.TransferredBytes * 100 / args.TotalBytes, args.TotalBytes, args.TransferredBytes);
        }
    }
}
```

## See also

For the complete sample, see [ProgressSample.cs on GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/ProgressSample.cs).
