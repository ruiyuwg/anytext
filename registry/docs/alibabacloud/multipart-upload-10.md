Object Storage Service (OSS) provides the multipart upload feature. Multipart upload allows you to split a large object into multiple parts to upload. After these parts are uploaded, you can call the CompleteMultipartUpload operation to combine the parts into a complete object.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   To perform a multipart upload, you must have the `oss:PutObject` permission. For more information, see [Common examples of RAM policies](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Multipart upload flow

A multipart upload consists of the following three steps:

1.  Initiate a multipart upload.
    
    Call the InitiateMultipartUploadRequest method. OSS returns a globally unique upload ID.
    
2.  Upload parts.
    
    Call the UploadPartRequest method to upload each part.
    
    **Note**
    
    -   In a multipart upload task, part numbers are used to identify the relative positions of the parts in an object. If you upload a part that has the same part number as an existing part, the existing part is overwritten by the uploaded part.
        
    -   OSS includes the MD5 hash of each uploaded part in the ETag header in the response.
        
    -   OSS calculates the MD5 hash of the uploaded parts and compares the MD5 hash with the MD5 hash that is calculated by OSS SDK for Java. If the two hashes are different, OSS returns the InvalidDigest error code.
        
    
3.  Complete the multipart upload.
    
    After you upload all parts, call the CompleteMultipartUploadRequest method to combine them into a complete file.
    

## Complete example of a multipart upload

The following sample code provides an example on how to implement a multipart upload task by following the multipart upload process:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Set the bucket name.
var bucketName = "examplebucket";
// Set the full path of the object. The full path cannot include the bucket name.
var objectName = "exampleobject.txt";
// Set the full path of the local file. If a local path is not specified, the file is uploaded from the local path of the project that contains the sample program by default.
var localFilename = "D:\\localpath\\examplefile.txt";
// Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and change the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

// Initialize the multipart upload and return the upload ID.
var uploadId = "";
try
{
    // Define the name of the file to upload and the bucket where it belongs. You can set ObjectMeta in InitiateMultipartUploadRequest, but you do not need to specify ContentLength.
    var request = new InitiateMultipartUploadRequest(bucketName, objectName);
    var result = client.InitiateMultipartUpload(request);
    uploadId = result.UploadId;
    // Print the upload ID.
    Console.WriteLine("Init multi part upload succeeded");
    // Use the upload ID to cancel the multipart upload event or list the uploaded parts.
    // To use the upload ID to cancel the multipart upload event, get the upload ID after you call InitiateMultipartUpload to initialize the multipart upload. 
    // To use the upload ID to list the uploaded parts, get the upload ID after you call InitiateMultipartUpload to initialize the multipart upload and before you call CompleteMultipartUpload to complete the multipart upload.
    Console.WriteLine("Upload Id:{0}", result.UploadId);
}
catch (Exception ex)
{
    Console.WriteLine("Init multi part upload failed, {0}", ex.Message);
    Environment.Exit(1);
}
// Calculate the total number of parts.
// The minimum size of a part is 100 KB, and the maximum size is 5 GB. The last part can be smaller than 100 KB.
var partSize = 100 * 1024;
var fi = new FileInfo(localFilename);
var fileSize = fi.Length;
var partCount = fileSize / partSize;
if (fileSize % partSize != 0)
{
    partCount++;
}
//  When the multipart upload is initialized, start uploading the parts. PartETags is a list that stores PartETag information. After OSS receives the list of parts that you submit, it verifies the validity of each part. After all data parts are verified, OSS combines them into a complete file.
var partETags = new List<PartETag>();
try
{
    using (var fs = File.Open(localFilename, FileMode.Open))
    {
        for (var i = 0; i < partCount; i++)
        {
            var skipBytes = (long)partSize * i;
            // Locate the start position for this upload.
            fs.Seek(skipBytes, 0);
            // Calculate the size of the part for this upload. The last part is the size of the remaining data.
            var size = (partSize < fileSize - skipBytes) ? partSize : (fileSize - skipBytes);
            var request = new UploadPartRequest(bucketName, objectName, uploadId)
            {
                InputStream = fs,
                PartSize = size,
                PartNumber = i + 1
            };
            // Call the UploadPart operation to upload the part. The result contains the ETag value of this data part.
            var result = client.UploadPart(request);
            partETags.Add(result.PartETag);
            Console.WriteLine("finish {0}/{1}", partETags.Count, partCount);
        }
        Console.WriteLine("Put multi part upload succeeded");
    }
}
catch (Exception ex)
{
    Console.WriteLine("Put multi part upload failed, {0}", ex.Message);
    Environment.Exit(1);
}
// After the parts are uploaded, merge the parts.
try
{
    var completeMultipartUploadRequest = new CompleteMultipartUploadRequest(bucketName, objectName, uploadId);
    foreach (var partETag in partETags)
    {
        completeMultipartUploadRequest.PartETags.Add(partETag);
    }
    var result = client.CompleteMultipartUpload(completeMultipartUploadRequest);
    Console.WriteLine("complete multi part succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("complete multi part failed, {0}", ex.Message);
    Environment.Exit(1);
}
```

## Cancel a multipart upload event

You can call the client.AbortMultipartUpload method to cancel a multipart upload. After a multipart upload is canceled, you cannot use its upload ID for any operations, and the uploaded parts are deleted.

The following code provides an example of how to cancel a multipart upload.

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Set the bucket name.
var bucketName = "examplebucket";
// Set the full path of the object. The full path cannot include the bucket name.
var objectName = "exampleobject.txt";
// Set the upload ID. The upload ID is returned after you call InitiateMultipartUpload to initialize the multipart upload.
var uploadId = "yourUploadId";
// Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and change the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
// Initialize the multipart upload.
try
{
    var request = new InitiateMultipartUploadRequest(bucketName, objectName);
    var result = client.InitiateMultipartUpload(request);
    uploadId = result.UploadId;
    // Print the upload ID.
    Console.WriteLine("Init multi part upload succeeded");
    Console.WriteLine("Upload Id:{0}", result.UploadId);
}
catch (Exception ex)
{
    Console.WriteLine("Init multi part upload failed, {0}", ex.Message);
}
// Cancel the multipart upload.
try
{
    var request = new AbortMultipartUploadRequest(bucketName, objectName, uploadId);
    client.AbortMultipartUpload(request);
    Console.WriteLine("Abort multi part succeeded, {0}", uploadId);
}
catch (Exception ex)
{
    Console.WriteLine("Abort multi part failed, {0}", ex.Message);
}
```

## List uploaded parts

The following code provides an example of how to list uploaded parts:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Set the bucket name.
var bucketName = "examplebucket";
// Set the full path of the object. The full path cannot include the bucket name.
var objectName = "exampleobject.txt";
// Set the upload ID. The upload ID is returned after you call InitiateMultipartUpload to initialize the multipart upload and before you call CompleteMultipartUpload to complete the multipart upload.
var uploadId = "yourUploadId";
// Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and change the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    PartListing listPartsResult = null;
    var nextMarker = 0;
    do 
    {
        var listPartsRequest = new ListPartsRequest(bucketName, objectName, uploadId) 
        {
            PartNumberMarker = nextMarker,
        };
        // List the uploaded parts.
        listPartsResult = client.ListParts(listPartsRequest);
        Console.WriteLine("List parts succeeded");
        // Traverse all parts.
        var parts = listPartsResult.Parts;
        foreach (var part in parts)
        {
            Console.WriteLine("partNumber: {0}, ETag: {1}, Size: {2}", part.PartNumber, part.ETag, part.Size);
        }
        nextMarker = listPartsResult.NextPartNumberMarker;
    } while (listPartsResult.IsTruncated);
}
catch (Exception ex)
{
    Console.WriteLine("List parts failed, {0}", ex.Message);
}
```

## List multipart upload events

You can call the ossClient.listMultipartUploads method to list all ongoing multipart uploads. Ongoing multipart uploads are uploads that are initialized but not yet completed or canceled. You can set the following parameters:

**Parameter**

**Description**

**Method**

prefix

Specifies that the names of returned files must have the specified prefix. Note that when you use the prefix parameter in a query, the returned file names still contain the prefix.

ListMultipartUploadsRequest.setPrefix(String prefix)

delimiter

A character used to group file names. All file names that contain the specified prefix and appear before the first occurrence of the delimiter are grouped as a single element.

ListMultipartUploadsRequest.setDelimiter(String delimiter)

maxUploads

The maximum number of multipart upload events to return. The default value and the maximum value are both 1000.

ListMultipartUploadsRequest.setMaxUploads(Integer maxUploads)

keyMarker

Lists multipart upload events for files whose names are alphabetically after the value of the keyMarker parameter. You can use this parameter with the uploadIdMarker parameter to specify the starting position of the returned results.

ListMultipartUploadsRequest.setKeyMarker(String keyMarker)

uploadIdMarker

Used with the keyMarker parameter to specify the starting position of the returned results. If the keyMarker parameter is not set, this parameter is ignored. If the keyMarker parameter is set, the query results include the following:

-   All files whose names are alphabetically after the value of the keyMarker parameter.
    
-   All multipart upload events for files that have the same name as the value of the keyMarker parameter and have upload IDs that are greater than the value of the uploadIdMarker parameter.
    

ListMultipartUploadsRequest.setUploadIdMarker(String uploadIdMarker)

The following sample code provides an example on how to list multipart upload tasks by using simple list:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Set the bucket name.
var bucketName = "examplebucket";

// Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and change the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    MultipartUploadListing multipartUploadListing = null;
    var nextMarker = string.Empty;
    do
    {
        // List multipart upload events.
        var request = new ListMultipartUploadsRequest(bucketName)
        {
            KeyMarker = nextMarker,
        };
        multipartUploadListing = client.ListMultipartUploads(request);
        Console.WriteLine("List multi part succeeded");
        // List the information for each multipart upload event.
        foreach (var mu in multipartUploadListing.MultipartUploads)
        {
            Console.WriteLine("Key: {0},  UploadId: {1}", mu.Key, mu.UploadId);
        }
        // If the result is truncated, nextKeyMarker specifies the starting point for the next request.
        nextMarker = multipartUploadListing.NextKeyMarker;
    } while (multipartUploadListing.IsTruncated);
}
catch (Exception ex)
{
    Console.WriteLine("List multi part uploads failed, {0}", ex.Message);
}
```

## Specify a prefix and the maximum number of returned entries

The following code provides an example of how to list multipart uploads by specifying a prefix and the maximum number of returned entries:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Set the bucket name.
var bucketName = "examplebucket";

// Define the prefix.
var prefix = "yourObjectPrefix";
// Define the maximum number of returned entries as 100.
var maxUploads = 100;
// Set the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and change the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    MultipartUploadListing multipartUploadListing = null;
    var nextMarker = string.Empty;
    do
    {
        // List multipart upload events. By default, 1,000 events are listed.
        var request = new ListMultipartUploadsRequest(bucketName)
        {
            KeyMarker = nextMarker,
            // Specify the prefix.
            Prefix = prefix,
            // Specify the maximum number of returned entries.
            MaxUploads = maxUploads,
        };
        multipartUploadListing = client.ListMultipartUploads(request);
        Console.WriteLine("List multi part succeeded");
        // List the information for each multipart upload event.
        foreach (var mu in multipartUploadListing.MultipartUploads)
        {
            Console.WriteLine("Key: {0},  UploadId: {1}", mu.Key, mu.UploadId);
        }
        nextMarker = multipartUploadListing.NextKeyMarker;
    } while (multipartUploadListing.IsTruncated);
}
catch (Exception ex)
{
    Console.WriteLine("List multi part uploads failed, {0}", ex.Message);
}
```

## References

-   For the complete sample code for a multipart upload, see [GitHub example](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/MultipartUploadSample.cs).
    
-   A multipart upload involves three API operations. For more information about the operations, see the following topics:
    
    -   [InitiateMultipartUpload](/help/en/oss/developer-reference/initiatemultipartupload#reference-zgh-cnx-wdb)
        
    -   [UploadPart](/help/en/oss/developer-reference/uploadpart#reference-pnq-2px-wdb)
        
    -   [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb)
        
-   For more information about the API operation that you can call to cancel a multipart upload task, see [AbortMultipartUpload](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.AbortMultipartUpload).
    
-   For more information about the API operation that you can call to list uploaded parts, see [ListUploadedParts](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.ListUploadedParts).
    
-   For more information about the API operation that you can call to list all ongoing multipart upload tasks, see [ListMultipartUploads](https://pkg.go.dev/github.com/aliyun/aliyun-oss-go-sdk/oss#Bucket.ListMultipartUploads). Ongoing multipart upload tasks include tasks that were initiated but are not completed or canceled.
