You can use range download to download a specific range of data from an object.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   To perform range download, you must have the `oss:GetObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Sample code

The following code provides an example on how to download a specific range of object data.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. 
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the name of the bucket. Example: examplebucket. 
var bucketName = "examplebucket";
// Specify the full path of the object. Do not include the bucket name in the full path. Example: exampledir/exampleobject.txt. 
var objectName = "exampledir/exampleobject.txt";
// Download the object to D:\\localpath. After the object is downloaded, the local file is named examplefile.txt. If a file with the same name already exists, the downloaded object overwrites the file. Otherwise, the downloaded object is saved in the path. 
// If you do not specify a path for the downloaded object, the downloaded object is saved to the path of the project to which the sample program belongs. 
var downloadFilename = "D:\\localpath\\examplefile.txt";
// Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters based on your requirements.
var conf = new ClientConfiguration();

// Use the signature algorithm V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OSSClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    var getObjectRequest = new GetObjectRequest(bucketName, objectName);
    // Set the range to byte 20 to byte 100. 
    getObjectRequest.SetRange(20, 100);
    // Start range download. You can use setRange in getObjectRequest to perform range download and resumable download. 
    var obj = client.GetObject(getObjectRequest);
    // Download data and write the data to the file. 
    using (var requestStream = obj.Content)
    {
        byte[] buf = new byte[1024];
        var fs = File.Open(downloadFilename, FileMode.OpenOrCreate);
        var len = 0;
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

The following table describes the parameters that you can configure for GetObjectRequest.

**Parameter**

**Description**

Range

You can specify the scope of the file transfer.

ModifiedSinceConstraint

The object download condition. If the specified time is earlier than the actual object modification time, the object can be downloaded. Otherwise, HTTP status code 304 Not Modified is returned.

UnmodifiedSinceConstraint

The object download condition. If the specified time is equal to or later than the actual object modification time, the object can be downloaded. Otherwise, HTTP status code 412 precondition failed is returned.

MatchingETagConstraints

The object download condition. If the specified ETag matches the ETag of the object, the object can be downloaded. Otherwise, HTTP status code 412 precondition failed is returned.

NonmatchingEtagConstraints

The object download condition. If the specified ETag does not match the ETag of the object, the object can be downloaded. Otherwise, HTTP status code 304 Not Modified is returned.

ResponseHeaderOverrides

The headers that you want the response to return.

## References

-   For the complete sample code that is used to perform range download, visit [GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/GetObjectByRangeSample.cs).
    
-   For more information about the API operation that you can call to perform range download, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).
