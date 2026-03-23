After an object is successfully uploaded, Object Storage Service (OSS) can send a callback request to your application server. To configure an upload callback, add the callback parameters to the upload request.

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples use an OSSClient instance created with an OSS endpoint. To create an OSSClient instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient).
    

## Sample code

The following example shows how to configure an upload callback for a `PutObject` request. The callback sends object metadata — including the bucket name, object key, ETag, size, MIME type, and custom variables — to your application server. The callback response is returned as part of the upload result.

For more information about callback parameters, see [Callback](/help/en/oss/developer-reference/callback#reference-zkm-311-hgb).

```
using System;
using System.IO;
using System.Text;
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Util;

namespace Callback
{
    class Program
    {
        static void Main(string[] args)
        {
            Program.PutObjectCallback();
            Console.ReadKey();
        }

        public static void PutObjectCallback()
        {
            // Get access credentials from environment variables.
            // Set the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables before running this example.
            var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
            var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");

            // Specify the bucket name.
            var bucketName = "examplebucket";
            // Specify the full object path, excluding the bucket name.
            var objectName = "exampledir/exampleobject.txt";
            // Specify the full path of the local file to upload.
            var localFilename = "D:\\localpath\\examplefile.txt";

            // Specify the callback server URL.
            const string callbackUrl = "yourCallbackServerUrl";
            // Specify the request body for the callback. OSS replaces the variables with actual values before sending the request.
            const string callbackBody = "bucket=${bucket}&object=${object}&etag=${etag}&size=${size}&mimeType=${mimeType}&" +
                                        "my_var1=${x:var1}&my_var2=${x:var2}";

            // Specify the endpoint of the region where the bucket is located.
            // For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
            const string endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Specify the region ID. For example, cn-hangzhou for China (Hangzhou).
            const string region = "cn-hangzhou";

            // Create a ClientConfiguration instance and set the signature version to V4.
            var conf = new ClientConfiguration();
            conf.SignatureVersion = SignatureVersion.V4;

            // Create an OSSClient instance.
            var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
            client.SetRegion(region);

            try
            {
                string responseContent = "";
                var metadata = BuildCallbackMetadata(callbackUrl, callbackBody);
                using (var fs = File.Open(localFilename, FileMode.Open))
                {
                    var putObjectRequest = new PutObjectRequest(bucketName, objectName, fs, metadata);
                    var result = client.PutObject(putObjectRequest);
                    responseContent = GetCallbackResponse(result);
                }
                Console.WriteLine("Put object:{0} succeeded, callback response content:{1}", objectName, responseContent);
            }
            catch (OssException ex)
            {
                Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID: {2}\tHostID: {3}",
                    ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Failed with error info: {0}", ex.Message);
            }
        }

        // Build the object metadata containing the callback configuration.
        // The callback URL and body are encoded into the x-oss-callback header.
        // Custom variables (x:var1, x:var2) are encoded into the x-oss-callback-var header.
        private static ObjectMetadata BuildCallbackMetadata(string callbackUrl, string callbackBody)
        {
            string callbackHeaderBuilder = new CallbackHeaderBuilder(callbackUrl, callbackBody).Build();
            string CallbackVariableHeaderBuilder = new CallbackVariableHeaderBuilder()
                .AddCallbackVariable("x:var1", "x:value1")
                .AddCallbackVariable("x:var2", "x:value2")
                .Build();

            var metadata = new ObjectMetadata();
            metadata.AddHeader(HttpHeaders.Callback, callbackHeaderBuilder);
            metadata.AddHeader(HttpHeaders.CallbackVar, CallbackVariableHeaderBuilder);
            return metadata;
        }

        // Read the response body returned by the callback server.
        // OSS forwards the callback server's response to the upload result.
        private static string GetCallbackResponse(PutObjectResult putObjectResult)
        {
            string callbackResponse = null;
            using (var stream = putObjectResult.ResponseStream)
            {
                var buffer = new byte[4 * 1024];
                var bytesRead = stream.Read(buffer, 0, buffer.Length);
                callbackResponse = Encoding.Default.GetString(buffer, 0, bytesRead);
            }
            return callbackResponse;
        }
    }
}
```

## What's next

-   For a complete upload callback sample, see the [GitHub sample](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/UploadCallbackSample.cs).
    
-   For the full list of callback parameters, see [Callback](/help/en/oss/developer-reference/callback#reference-zkm-311-hgb).
