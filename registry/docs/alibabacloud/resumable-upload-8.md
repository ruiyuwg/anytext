When you upload an object to Object Storage Service (OSS) by using resumable upload, you can specify a directory for the checkpoint file that stores resumable upload progress. If an object fails to be uploaded because of a network exception or program error, the upload task is resumed from the position recorded in the checkpoint file.

During the upload, progress information is recorded in a checkpoint file. If a part fails to upload, the next attempt resumes from the breakpoint recorded in the checkpoint file. After the upload is complete, the checkpoint file is deleted.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   To use resumable upload, you must have the `oss:PutObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Sample code

The following code provides an example of how to perform a resumable upload.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. Example: examplebucket.
var bucketName = "examplebucket";
// Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt.
var objectName = "exampledir/exampleobject.txt";
// Specify the full path of the local file. Example: D:\\localpath\\examplefile.txt.
// If you specify only the file name (for example, examplefile.txt) without a full path, the file is uploaded from the local path that corresponds to the project of the sample program.
var localFilename = "D:\\localpath\\examplefile.txt";
// The directory to store the checkpoint file. The progress of the upload is saved in this file.
string checkpointDir = "yourCheckpointDir";
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
    // Set multiple parameters using UploadObjectRequest.
    UploadObjectRequest request = new UploadObjectRequest(bucketName, objectName, localFilename)
    {
        // Specify the size of each part.
        PartSize = 8 * 1024 * 1024,
        // Specify the number of concurrent threads.
        ParallelThreadCount = 3,
        // The checkpointDir parameter specifies the directory that stores the intermediate state of a resumable upload. This allows the upload to resume after a failure.
        // If checkpointDir is set to null, the resumable upload feature is disabled. After a failure, the entire file is re-uploaded.
        CheckpointDir = checkpointDir,
    };
    // Perform a resumable upload.
    client.ResumableUploadObject(request);
    Console.WriteLine("Resumable upload object:{0} succeeded", objectName);
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

## References

For the complete sample code for resumable uploads, see the [example on GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/ResumableSample.cs).
