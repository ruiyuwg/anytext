This topic describes how to manage the access control lists (ACLs) of objects.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-ossclient#concept-32087-zh).
    
-   To configure the ACL for an object, you must have the `oss:PutObjectAcl` permission. To query object ACLs, you must have the `oss:GetObjectAcl` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## ACL types

The following table describes the ACLs that you can configure for an object.

**Note**

The ACL of an object takes precedence over the ACL of the bucket in which the object is stored. For example, if the ACL of an object in a private bucket is set to public-read, all users, including anonymous users, can read the object.

**ACL type**

**Description**

**Value**

Inherited from bucket

The ACL of the object is the same as that of the bucket in which the object is stored. This is the default ACL of an object.

CannedAccessControlList.Default

Private

Only the object owner can read and write the object. Other users cannot access the object.

CannedAccessControlList.Private

Public-read

Only the object owner can write the object. Other users, including anonymous users, can only read the object.

**Warning**

This may result in unauthorized access to data in your bucket and high costs. Exercise caution when you set the object ACL to public-read.

CannedAccessControlList.PublicRead

Public-read-write

All users, including anonymous users, can read and write the object.

**Warning**

If you set the object ACL to this value, all users can access the object and write data to the object over the Internet. This may result in unauthorized access to data in your bucket and high costs. If a user uploads prohibited data or information to the bucket, your legitimate interests and rights may be infringed. Therefore, we recommend that you do not set the ACL of a bucket to public-read-write unless necessary.

CannedAccessControlList.PublicReadWrite

## Sample code

The following code provides an example on how to configure and query the ACL of a specific object:

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
var objectName = "exampleobject.txt";
// Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters based on your requirements.
var conf = new ClientConfiguration();

// Use the signature algorithm V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OSSClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
c.SetRegion(region);
// Configure the ACL of the object. 
try
{
    // Call SetObjectAcl to configure the ACL of the object. 
    client.SetObjectAcl(bucketName, objectName, CannedAccessControlList.PublicRead);
    Console.WriteLine("Set Object:{0} ACL succeeded ", objectName);
}
catch (Exception ex)
{
    Console.WriteLine("Set Object ACL failed with error info: {0}", ex.Message);
}
// Query the ACL of the object. 
try
{
    // Call GetObjectAcl to query the ACL of the object. 
    var result = client.GetObjectAcl(bucketName, objectName);
    Console.WriteLine("Get Object ACL succeeded, Id: {0}  ACL: {1}",
        result.Owner.Id, result.ACL.ToString());
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
```

## References

-   For the complete sample code that is used to manage the ACL of an object, visit [GitHub](https://github.com/aliyun/aliyun-oss-csharp-sdk/blob/master/samples/Samples/GetObjectAclSample.cs).
    
-   For more information about the API operation that you can call to configure the ACL of an object, see [PutObjectACL](/help/en/oss/developer-reference/putobjectacl#reference-fs3-gfw-wdb).
    
-   For more information about the API operation that you can call to query the ACL of an object, see [GetObjectACL](/help/en/oss/developer-reference/getobjectacl#reference-lzc-24w-wdb).
