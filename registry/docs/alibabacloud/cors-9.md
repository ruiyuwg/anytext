Due to the same-origin policy of browsers, cross-origin requests may be rejected when data is exchanged or resources are shared between different domain names. To resolve the issue, you can configure cross-origin resource sharing (CORS) rules. In the CORS rules, you can specify the domain names from which requests can be sent, the methods that can be used to send cross-origin requests, and the allowed headers.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   To configure CORS rules, you must have the `oss:PutBucketCors` permission. To query CORS rules, you must have the `oss:GetBucketCors` permission. To delete CORS rules, you must have the `oss:DeleteBucketCors` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Configure CORS rules

The following sample code provides an example on how to configure a CORS rule for a specific bucket:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set endpoint to the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. Example: examplebucket.
var bucketName = "examplebucket";
// Set region to the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Use Signature Version 4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    var request = new SetBucketCorsRequest(bucketName);
    var rule1 = new CORSRule();
    // Specify the origins from which cross-origin requests are allowed.
    rule1.AddAllowedOrigin("http://example.com");
    // Specify the allowed methods for cross-origin requests, such as GET, PUT, DELETE, POST, and HEAD.
    rule1.AddAllowedMethod("POST");
    // Wildcard characters are not supported for AllowedHeaders and ExposeHeaders.
    rule1.AddAllowedHeader("*");
    // Specify the response headers that applications can access.
    rule1.AddExposeHeader("x-oss-test");
    // A maximum of 10 rules are allowed.
    request.AddCORSRule(rule1);
    var rule2 = new CORSRule();
    // AllowedOrigins and AllowedMethods support at most one asterisk (*) wildcard character. The asterisk (*) indicates that requests from all source domains or all methods are allowed.
    rule2.AddAllowedOrigin("http://example.net");
    rule2.AddAllowedMethod("GET");
    // Specify whether to allow the headers specified by Access-Control-Request-Headers in the preflight OPTIONS request.
    rule2.AddExposeHeader("x-oss-test2");
    // Specify the cache duration for the response to a preflight OPTIONS request for a specific resource. Unit: seconds.
    rule2.MaxAgeSeconds = 100;
    request.AddCORSRule(rule2);
    // Configure the CORS rules.
    client.SetBucketCors(request);
    Console.WriteLine("Set bucket:{0} Cors succeeded ", bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error info: {0}; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

## Query CORS rules

For the complete sample code to query CORS rules, see [GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/GetBucketCorsSample.cs).

The following sample code provides an example on how to query CORS rules of a specific bucket:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
// Set endpoint to the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. Example: examplebucket.
var bucketName = "examplebucket";
// Set region to the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Use Signature Version 4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    // Query the CORS rules.
    var result = client.GetBucketCors(bucketName);
    Console.WriteLine("Get bucket:{0} Cors succeeded ", bucketName);
    foreach (var rule in result)
    {
        foreach (var origin in rule.AllowedOrigins)
        {
            Console.WriteLine("Allowed origin:{0}", origin);
        }
    }
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error info: {0}; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

## Delete CORS rules

The following sample code provides an example on how to delete all CORS rules of a specific bucket:

```
using Aliyun.OSS;
using Aliyun.OSS.Common;
// Set endpoint to the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name. Example: examplebucket.
var bucketName = "examplebucket";
// Set region to the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Use Signature Version 4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    // Delete the CORS rules.
    client.DeleteBucketCors(bucketName);
    Console.WriteLine("Delete bucket:{0} Cors succeeded ", bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error info: {0} ; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

## References

-   For the complete sample code for CORS, see [GitHub examples](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/SetBucketCorsSample.cs).
    
-   For more information about the API operation that you can call to configure CORS rules, see [PutBucketCors](/help/en/oss/developer-reference/putbucketcors#reference-wtg-ttc-xdb).
    
-   For more information about the API operation that you can call to query CORS rules, see [GetBucketCors](/help/en/oss/developer-reference/getbucketcors#reference-m2w-ywc-xdb).
    
-   For more information about the API operation that you can call to delete CORS rules, see [DeleteBucketCors](/help/en/oss/developer-reference/deletebucketcors#reference-fjn-szc-xdb).
