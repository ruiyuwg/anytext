This topic describes how to use the OSS SDK for C# to list all objects in a specified bucket.

## **Precautions**

-   The sample code in this topic uses the China (Hangzhou) region (`cn-hangzhou`) as an example. By default, the public endpoint is used. If you want to access OSS from other Alibaba Cloud services in the same region, use the internal endpoint. For more information about the regions and endpoints that OSS supports, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   This topic provides an example of reading access credentials from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/configure-access-credentials-using-oss-sdk-for-csharp-v2#2e77e67568y99).
    
-   To list objects, you must have the `oss:ListObjects` permission. For more information, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## **Sample code**

You can use the following code to list all objects in the specified bucket.

```
using OSS = AlibabaCloud.OSS.V2;  // Create an alias for the Alibaba Cloud OSS SDK to simplify subsequent use.

var region = "cn-hangzhou";  // Required. Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Region to cn-hangzhou.
var endpoint = null as string;  // Optional. Specify the domain name used to access the OSS service. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var bucket = "your bucket name";  // Required. The name of the destination bucket.

// Load the default configurations of the OSS SDK. The configurations automatically read credential information (such as AccessKey) from environment variables.
var cfg = OSS.Configuration.LoadDefault();
// Explicitly set the use of environment variables to obtain credentials for identity verification (format: OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET).
cfg.CredentialsProvider = new OSS.Credentials.EnvironmentVariableCredentialsProvider();
// Set the region of the bucket in the configuration.
cfg.Region = region;   
// If an endpoint is specified, it overwrites the default endpoint. 
if(endpoint != null) 
{
    cfg.Endpoint = endpoint;
} 

// Create an OSS client instance using the configuration information.
using var client = new OSS.Client(cfg); 

// Call the ListObjectsV2Paginator method to obtain all objects in the destination bucket.
var paginator = client.ListObjectsV2Paginator(new OSS.Models.ListObjectsV2Request()
{
    Bucket = bucket
});

//  Print the information of all objects in the bucket.
Console.WriteLine("Objects:");
await foreach (var page in paginator.IterPageAsync())  // Asynchronously traverse each page of results.
{
    // Traverse each object on the current page.
    foreach (var content in page.Contents ?? [])
    {
        // Print the object information: key, size (in bytes), and last modified time.
        Console.WriteLine($"Object:{content.Key}, {content.Size}, {content.LastModified}");
    }
}
```

## References

For the complete sample code, see [ListObjects.cs](https://github.com/aliyun/alibabacloud-oss-csharp-sdk-v2/blob/master/sample/ListObjectsV2/Program.cs).
