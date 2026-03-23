This topic describes how to delete a single object, multiple objects, and objects whose names contain a specified prefix from a versioned bucket.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   This topic demonstrates creating an OSSClient instance with an OSS endpoint. For alternative configurations, such as using a custom domain or authenticating with credentials from Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   To delete an object, you must have the `oss:DeleteObjectVersion` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Delete operations on a versioning-enabled bucket

When you delete an object from a versioning-enabled bucket, you must determine whether to specify a version ID in the request.

-   Delete an object without specifying a version ID (temporary deletion)
    
    By default, if you do not specify the version ID of the object that you want to delete in the request, OSS does not delete the current version of the object but adds a delete marker to the object as the latest version. If you perform the GetObject operation on the object, OSS identifies the current version of the object as a delete marker and returns `404 Not Found`. In addition, `header:x-oss-delete-marker = true` and `x-oss-version-id` that indicates the version ID of the delete marker are included in the response.
    
    If the value of `x-oss-delete-marker` is true, the value of `x-oss-version-id` is the version ID of a delete marker.
    
-   Delete an object by specifying a version ID (permanent deletion)
    
    If you specify the version ID of the object that you want to delete in the request, OSS permanently deletes the specified version of the object based on the `versionId` parameter specified in `params`. To delete the version whose ID is null, add `params['versionId'] = "null"` to `params`. OSS identifies the string "null" as the ID of the version to delete and deletes the version whose ID is null.
    

## Delete a single object

The following examples show how to permanently or temporarily delete a single object from a versioned bucket.

-   Permanent deletion
    
    The following sample code provides an example on how to permanently delete an object version from a versioned bucket by specifying the version ID of the object in the request:
    
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
    // Specify the version ID of the object or the delete marker. 
    var versionid = "yourObjectVersionidOrDelMarkerVersionid";
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
        // Specify the version ID of the object or the delete marker that you want to delete. 
        var request = new DeleteObjectRequest(bucketName, objectName)
        {
            VersionId = versionid
        };
        client.DeleteObject(request);
        Console.WriteLine("Delete object succeeded");
    }
    catch (Exception ex)
    {
        Console.WriteLine("Delete object failed. {0}", ex.Message);
    }
    ```
    
-   Temporary deletion
    
    The following sample code provides an example on how to temporarily delete an object from a versioned bucket by sending a request in which no version ID is specified:
    
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
        // Temporarily delete an object without specifying its version ID. A delete marker is added to the object. 
        var result = client.DeleteObject(bucketName, objectName);
        Console.WriteLine("Delete object succeeded, versionid: {0}, DeleteMarker: {1}", result.VersionId, result.DeleteMarker);
    }
    catch (Exception ex)
    {
        Console.WriteLine("Delete object failed. {0}", ex.Message);
    }
    ```
    

## Delete multiple objects

The following examples describe how to permanently or temporarily delete multiple objects from a versioned bucket.

-   Permanent deletion
    
    The following sample code provides an example on how to permanently delete multiple objects or delete markers with specified version IDs from a versioned bucket:
    
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
        // Delete the objects with the specified version IDs or the objects whose current versions are delete markers with the specified version IDs. 
        var obj1 = new ObjectIdentifier
        {
            Key = "yourObject1Name",
            VersionId  = "yourObject1NameVersionid"
        };
    
        var obj2 = new ObjectIdentifier
        {
            Key = "yourObject2Name",
            VersionId  = "yourObject2DelMarkerVersionid"
        };
    
        IList<ObjectIdentifier> objects = new List<ObjectIdentifier>();
        objects.Add(obj1);
        objects.Add(obj2);
    
        var request = new DeleteObjectVersionsRequest(bucketName, objects);
    
        // Initiate a deleteVersions request. 
        client.DeleteObjectVersions(request);
        Console.WriteLine("DeleteObjectVersions succeeded ");
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
    
-   Temporary deletion
    
    The following code shows how to temporarily delete multiple objects without specifying their versionIds. Temporarily deleted object versions can be recovered.
    
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
        var keys = new List<string>();
        var listResult = client.ListObjects(bucketName);
        foreach (var summary in listResult.ObjectSummaries)
        {
            keys.Add(summary.Key);
        }
        // Specify the value of quietMode. true indicates quiet. In this mode, the deleted objects are not returned. false indicates verbose. In this mode, the deleted objects are returned. Default value: false. 
        var quietMode = false;
        // Specify the return mode by setting the value of quietMode in the DeleteObjectsRequest request. 
        var request = new DeleteObjectsRequest(bucketName, keys, quietMode);
        // Delete the objects without specifying their version IDs. Delete markers are added to the objects. 
        var result = client.DeleteObjects(request);
        if ((!quietMode) && (result.Keys != null))
        {
            foreach (var obj in result.Keys)
            {
                Console.WriteLine("Delete successfully : {0} ", obj.Key);
            }
        }
        Console.WriteLine("Delete objects succeeded");
    }
    catch (Exception ex)
    {
        Console.WriteLine("Delete objects failed. {0}", ex.Message);
    }
    ```
    

## Delete objects whose names contain a specific prefix

The following code shows how to delete files with a specified prefix.

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
var prefix = "yourkeyPrefix";
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
    ObjectVersionList result = null;
    var request = new ListObjectVersionsRequest(bucketName)
    {
        // Specify the prefix that is contained in the names of the objects that you want to list. 
        Prefix = prefix;
    };

    // List the versions of all objects whose names contain the specific prefix and delete the versions. 
    do {        
        result = client.ListObjectVersions(request);
        Console.WriteLine("ListObjectVersions succeeded");
        foreach (var deleteversion in result.DeleteMarkerSummaries)
        {
            var request = new DeleteObjectRequest(bucketName, deleteversion.Key)
            {
                VersionId = deleteversion.VersionId
            };
            client.DeleteObject(request);
        }

        foreach (var objectversion in result.ObjectVersionSummaries)
        {
            var request = new DeleteObjectRequest(bucketName, objectversion.Key)
            {
                VersionId = objectversion.VersionId
            };
            client.DeleteObject(request);            
        }
        request.KeyMarker = result.NextKeyMarker;
        request.NextVersionIdMarker = result.NextVersionIdMarker ;
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

-   For more information about the API operation that you can call to delete an object, see [DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb).
    
-   For more information about the API operation that you can call to delete multiple objects, see [DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb).
