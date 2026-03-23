Some data uploaded to Object Storage Service (OSS) may not be frequently accessed but still needs to be stored in cold storage due to compliance or archiving requirements. Also, you may want to delete data that is no longer required in batches to reduce storage costs. In such cases, you can configure lifecycle rules based on the last modified time to periodically convert hot data to cold data or delete unwanted objects.

## Usage notes

-   Before you configure lifecycle rules based on the last modified time of objects, make sure that you familiarize yourself with this feature. For more information, see [Lifecycle rules based on the last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time).
    

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   To configure lifecycle rules, you must have the `oss:PutBucketLifecycle` permission. To query lifecycle rules, you must have the `oss:GetBucketLifecycle` permission. To clear lifecycle rules, you must have the `oss:DeleteBucketLifecycle` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Configure lifecycle rules for a bucket

The following sample code provides an example on how to configure lifecycle rules based on the last modified time for a bucket named examplebucket. To modify lifecycle rules, follow the instructions as described in [How do I change the configurations of one or more lifecycle rules?](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#66e3fe0b87hr7)

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. 
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. Example: examplebucket. 
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
    var setBucketLifecycleRequest = new SetBucketLifecycleRequest(bucketName);
    // Create the first lifecycle rule. 
    LifecycleRule lcr1 = new LifecycleRule()
    {
        ID = "delete obsoleted files",
        Prefix = "obsoleted/",
        Status = RuleStatus.Enabled,
        ExpriationDays = 3,
        Tags = new Tag[1]
    };
    // Specify a tag for the rule. 
    var tag1 = new Tag
    {
        Key = "project",
        Value = "projectone"
    };

    lcr1.Tags[0] = tag1;

    // Create the second lifecycle rule. 
    LifecycleRule lcr2 = new LifecycleRule()
    {
        ID = "delete temporary files",
        Prefix = "temporary/",
        Status = RuleStatus.Enabled,
        ExpriationDays = 20,
        Tags = new Tag[1]         
    };
    // Specify a tag for the rule. 
    var tag2 = new Tag
    {
        Key = "user",
        Value = "jsmith"
    };
    lcr2.Tags[0] = tag2;

    // Specify that parts expire 30 days after they are last modified. 
    lcr2.AbortMultipartUpload = new LifecycleRule.LifeCycleExpiration()
    {
        Days = 30
    };

    LifecycleRule lcr3 = new LifecycleRule();
    lcr3.ID = "only NoncurrentVersionTransition";
    lcr3.Prefix = "test1";
    lcr3.Status = RuleStatus.Enabled;
    lcr3.NoncurrentVersionTransitions = new LifecycleRule.LifeCycleNoncurrentVersionTransition[2]
    {
        // Specify that the storage classes of the previous versions of objects are converted to IA 90 days after they are last modified. 
        new LifecycleRule.LifeCycleNoncurrentVersionTransition(){
            StorageClass = StorageClass.IA,
            NoncurrentDays = 90
        },
        // Specify that the storage classes of the previous versions of objects are converted to Archive 180 days after they are last modified. 
        new LifecycleRule.LifeCycleNoncurrentVersionTransition(){
            StorageClass = StorageClass.Archive,
            NoncurrentDays = 180
        }
    };
    setBucketLifecycleRequest.AddLifecycleRule(lcr1);
    setBucketLifecycleRequest.AddLifecycleRule(lcr2);
    setBucketLifecycleRequest.AddLifecycleRule(lcr3);

    // Configure lifecycle rules. 
    client.SetBucketLifecycle(setBucketLifecycleRequest);
    Console.WriteLine("Set bucket:{0} Lifecycle succeeded ", bucketName);
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

## Query the lifecycle rules of a bucket

The following sample code provides an example on how to query the lifecycle rules configured for examplebucket:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. 
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. Example: examplebucket. 
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
    // Query the lifecycle rules of the bucket. 
    var rules = client.GetBucketLifecycle(bucketName);
    Console.WriteLine("Get bucket:{0} Lifecycle succeeded ", bucketName);
    foreach (var rule in rules)
    {
        Console.WriteLine("ID: {0}", rule.ID);
        Console.WriteLine("Prefix: {0}", rule.Prefix);
        Console.WriteLine("Status: {0}", rule.Status);
        // Query the tags that are specified for the lifecycle rules. 
        foreach (var tag in rule.Tags)
        {
            Console.WriteLine("key:{0}, value:{1}", tag.Key, tag.Value);
        }
        // Query the expiration rule for the previous versions of objects. 
        foreach (var version in rule.NoncurrentVersionTransitions)
        {
            Console.WriteLine("expiration day:{0}, storage class:{1}", version.NoncurrentDays, version.StorageClass);
        }
        if (rule.ExpriationDays.HasValue)
            Console.WriteLine("ExpirationDays: {0}", rule.ExpriationDays);
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
```

## Delete all lifecycle rules of a bucket

The following sample code provides an example on how to delete lifecycle rules configured for examplebucket. To delete one or more lifecycle rules, follow the instructions as described in [How do I delete one or more lifecycle rules?](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#80811cc9cawfo)

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. 
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. Example: examplebucket. 
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
    // Delete the lifecycle rules. 
    client.DeleteBucketLifecycle(bucketName);
    Console.WriteLine("Delete bucket:{0} Lifecycle succeeded ", bucketName);
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

-   For the complete sample code that is used to manage lifecycle rules, visit [GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/SetBucketLifecycleSample.cs).
    
-   For more information about the API operation that you can call to configure lifecycle rules, see [PutBucketLifecycle](/help/en/oss/developer-reference/putbucketlifecycle#reference-xlw-dbv-tdb).
    
-   For more information about the API operation that you can call to query lifecycle rules, see [GetBucketLifecycle](/help/en/oss/developer-reference/getbucketlifecycle#reference-zq5-grw-tdb).
    
-   For more information about the API operation that you can call to delete lifecycle rules, see [DeleteBucketLifecycle](/help/en/oss/developer-reference/deletebucketlifecycle#reference-wl1-xsw-tdb).
