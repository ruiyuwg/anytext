Use the OSS C++ SDK to upload an object from memory or from a local file.

## How it works

Simple upload uses the `PutObject` API. The C++ SDK represents each upload as a `PutObjectRequest` that carries the bucket name, object name, and content. Content can be any `std::iostream`\-derived stream — a `std::stringstream` for in-memory data or a `std::fstream` for local files. Pass the request to `OssClient::PutObject()` and check the returned outcome for success or failure.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket in the target region
    
-   The `oss:PutObject` permission granted to your RAM user or RAM role via [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid credentials
    

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default. Grant the required permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**When required**

PutObject

`oss:PutObject`

Always — uploads an object

PutObject

`oss:PutObjectTagging`

When you set object tags using the `x-oss-tagging` header

PutObject

`kms:GenerateDataKey`

When object metadata includes `X-Oss-Server-Side-Encryption: KMS`

PutObject

`kms:Decrypt`

When object metadata includes `X-Oss-Server-Side-Encryption: KMS`

## Upload an object from memory

The following example uploads an in-memory string to `exampledir/exampleobject.txt` in `examplebucket` using `std::stringstream`.

Key steps:

-   Initialize the SDK and create an `OssClient` with your endpoint, region, and credentials.
    
-   Create a `std::stringstream`, write your content to it, and pass it to `PutObjectRequest`.
    
-   Call `PutObject()` and check the outcome for success or failure.
    

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Set the endpoint for the region where your bucket is located.
       Example for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
    std::string Endpoint = "yourEndpoint";
    /* Set the region ID where your bucket is located.
       Example for China (Hangzhou): cn-hangzhou */
    std::string Region = "yourRegion";
    /* Bucket name. Example: examplebucket */
    std::string BucketName = "examplebucket";
    /* Full object path, excluding the bucket name.
       Example: exampledir/exampleobject.txt */
    std::string ObjectName = "exampledir/exampleobject.txt";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Write content to a stringstream and attach it to the request. */
    std::shared_ptr<std::iostream> content = std::make_shared<std::stringstream>();
    *content << "Thank you for using Alibaba Cloud Object Storage Service!";
    PutObjectRequest request(BucketName, ObjectName, content);

    /* (Optional) Set the access control list (ACL) and storage class. */
    //request.MetaData().addHeader("x-oss-object-acl", "private");
    //request.MetaData().addHeader("x-oss-storage-class", "Standard");

    /* Upload the object. */
    auto outcome = client.PutObject(request);

    if (!outcome.isSuccess()) {
        std::cout << "PutObject fail"
                  << ", code: "      << outcome.error().Code()
                  << ", message: "   << outcome.error().Message()
                  << ", requestId: " << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## Upload a local file

This example differs from the previous one only in how the content stream is created: it opens a local file with `std::fstream` in binary read mode instead of using `std::stringstream`.

Key steps:

-   Initialize the SDK and create an `OssClient` with your endpoint, region, and credentials.
    
-   Open the local file with `std::fstream` in binary read mode and pass it to `PutObjectRequest`.
    
-   Call `PutObject()` and check the outcome for success or failure.
    

```
#include <alibabacloud/oss/OssClient.h>
#include <fstream>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Set the endpoint for the region where your bucket is located.
       Example for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
    std::string Endpoint = "yourEndpoint";
    /* Set the region ID where your bucket is located.
       Example for China (Hangzhou): cn-hangzhou */
    std::string Region = "yourRegion";
    /* Bucket name. Example: examplebucket */
    std::string BucketName = "examplebucket";
    /* Full object path, excluding the bucket name.
       Example: exampledir/exampleobject.txt */
    std::string ObjectName = "exampledir/exampleobject.txt";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Open the local file in binary read mode.
       Example path: D:\\localpath\\examplefile.txt */
    std::shared_ptr<std::iostream> content =
        std::make_shared<std::fstream>("D:\\localpath\\examplefile.txt",
                                      std::ios::in | std::ios::binary);
    PutObjectRequest request(BucketName, ObjectName, content);

    /* (Optional) Set the access control list (ACL) and storage class. */
    //request.MetaData().addHeader("x-oss-object-acl", "private");
    //request.MetaData().addHeader("x-oss-storage-class", "Standard");

    /* Upload the object. */
    auto outcome = client.PutObject(request);

    if (!outcome.isSuccess()) {
        std::cout << "PutObject fail"
                  << ", code: "      << outcome.error().Code()
                  << ", message: "   << outcome.error().Message()
                  << ", requestId: " << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint instead. For the full list of regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an `OssClient` instance using an OSS endpoint. To create an `OssClient` using a custom domain name or Security Token Service (STS), see [Create an OSSClient instance](/help/en/oss/developer-reference/initialization-12).
    

## What's next

-   For the complete sample code, see [GitHub](https://github.com/aliyun/aliyun-oss-cpp-sdk/blob/16a995a66b14f236e7fed9787e2dc0bb463d6e47/sample/src/object/ObjectSample.cc).
    
-   For the PutObject API reference, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).
