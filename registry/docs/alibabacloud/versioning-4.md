Versioning applies to all objects in a bucket. With versioning, you can restore an object to any of its previous versions in the bucket if it is accidentally overwritten or deleted.

A bucket can be in one of the following versioning states: disabled (default), enabled, or suspended. For more information about versioning, see [Versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb).

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   To set the versioning state of a bucket, you must have the `oss:PutBucketVersioning` permission. To retrieve the versioning state of a bucket, you must have the `oss:GetBucketVersioning` permission. For more information, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Set the versioning state of a bucket

The following sample code provides an example on how to enable or suspend versioning for a bucket:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, for the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Enter the bucket name. For example, examplebucket.
var bucketName = "examplebucket";
// Enter the region where the bucket is located. For example, for the China (Hangzhou) region, enter cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set Signature Version 4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    // Set the versioning state of the bucket to Enabled.
    client.SetBucketVersioning(new SetBucketVersioningRequest(bucketName, VersioningStatus.Enabled));
    Console.WriteLine("Create bucket Version succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Create bucket Version failed. {0}", ex.Message);
}
```

## Get the versioning state of a bucket

The following sample code provides an example on how to query the versioning state of a bucket:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
// Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, for the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Enter the bucket name. For example, examplebucket.
var bucketName = "examplebucket";
// Enter the region where the bucket is located. For example, for the China (Hangzhou) region, enter cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set Signature Version 4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    // Get the versioning state of the bucket.
    var result = client.GetBucketVersioning(bucketName);
    Console.WriteLine("Get bucket:{0} Version succeeded ", bucketName);

    Console.WriteLine("bucket version status: {0}", result.Status);
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

## List all object versions in a bucket

The following sample code provides an example on how to list the versions of all objects including delete markers in a bucket:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
// Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, for the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Enter the bucket name. For example, examplebucket.
var bucketName = "examplebucket";
// Enter the region where the bucket is located. For example, for the China (Hangzhou) region, enter cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set Signature Version 4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{   
    ObjectVersionList result = null;
    var request = new ListObjectVersionsRequest(bucketName);
    do {        
        result = client.ListObjectVersions(request);
        Console.WriteLine("ListObjectVersions succeeded");
        // View the versions of the listed objects.
        foreach (var objectversion in result.ObjectVersionSummaries)
        {
            Console.WriteLine("objectversion key: {0}; objectversion versionid: {1}", objectversion.Key, objectversion.VersionId);
        }
        // View the versions of the listed object delete markers.
        foreach (var deletemarker in result.DeleteMarkerSummaries)
        {
            Console.WriteLine("deletemarker key: {0}; deletemarker versionid: {1}", deletemarker.Key, deletemarker.VersionId);
        }
        request.KeyMarker = result.NextKeyMarker;
        request.NextVersionIdMarker = result.NextVersionIdMarker;
    } while (result.IsTruncated)
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

-   For information about the API operation used to set the versioning state of a bucket, see [PutBucketVersioning](/help/en/oss/developer-reference/putbucketversioning#reference-w2w-nm3-fhb).
    
-   For information about the API operation used to retrieve the versioning state of a bucket, see [GetBucketVersioning](/help/en/oss/developer-reference/getbucketversioning#reference-fhn-kt3-fhb).
