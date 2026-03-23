Upload objects to a versioning-enabled bucket using the OSS C++ SDK. Three upload methods are covered: simple upload, append upload, and multipart upload.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with versioning enabled
    
-   The `oss:PutObject` permission. For details, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with your access credentials
    

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use an internal endpoint instead. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an OSSClient instance using an OSS endpoint. To create an OSSClient using a custom domain name or Security Token Service (STS), see [Create an OSSClient instance](/help/en/oss/developer-reference/initialization-12).
    

## How versioning affects uploads

When you upload an object to a versioning-enabled bucket, OSS generates a unique version ID and returns it in the `x-oss-version-id` response header.

When you upload an object to a versioning-suspended bucket, OSS assigns a version ID of `null`. If an object with the same name already exists, the upload overwrites it, leaving only one version with a `null` version ID.

## Simple upload

Simple upload uses `PutObject` to upload an object in a single request. The following example uploads an in-memory string.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Set yourEndpoint to the endpoint of the region where the bucket is located.
       Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou). */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region ID of the bucket.
       Example: cn-hangzhou for China (Hangzhou). */
    std::string Region = "yourRegion";
    /* Specify the bucket name. Example: examplebucket. */
    std::string BucketName = "examplebucket";
    /* Specify the full object path, excluding the bucket name.
       Example: exampledir/exampleobject.txt. */
    std::string ObjectName = "exampledir/exampleobject.txt";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    std::shared_ptr<std::iostream> content = std::make_shared<std::stringstream>();
    *content << "test cpp sdk";
    PutObjectRequest request(BucketName, ObjectName, content);

    /* Upload the object. */
    auto outcome = client.PutObject(request);

    if (outcome.isSuccess()) {
        std::cout << "versionid:" << outcome.result().VersionId() << std::endl;
    }
    else {
        std::cout << "PutObject fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## Append upload

Append upload uses `AppendObject` to add data to the end of an appendable object. Each call returns the current object length, which you pass as the position for the next append.

In a versioning-enabled bucket, `AppendObject` has the following constraints:

-   `AppendObject` only operates on the current version of an appendable object. OSS does not generate a previous version when you append to it.
    
-   If you call `PutObject` or `DeleteObject` on an appendable object, OSS stores the current version as a previous version and the object can no longer be appended.
    
-   `AppendObject` cannot be performed on a non-appendable object (a normal object or a delete marker).
    

The following example appends data to an object in two sequential calls.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Set yourEndpoint to the endpoint of the region where the bucket is located.
       Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou). */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region ID of the bucket.
       Example: cn-hangzhou for China (Hangzhou). */
    std::string Region = "yourRegion";
    /* Specify the bucket name. Example: examplebucket. */
    std::string BucketName = "examplebucket";
    /* Specify the full object path, excluding the bucket name.
       Example: exampledir/exampleobject.txt. */
    std::string ObjectName = "exampledir/exampleobject.txt";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    auto meta = ObjectMetaData();
    meta.setContentType("text/plain");

    /* First append: position 0 creates the object if it doesn't exist.
       The return value contains the new object length, used as the position for the next append. */
    std::shared_ptr<std::iostream> content1 = std::make_shared<std::stringstream>();
    *content1 <<"Thank you for using Alibaba Cloud Object Storage Service!";
    AppendObjectRequest request(BucketName, ObjectName, content1, meta);
    request.setPosition(0L);

    auto result = client.AppendObject(request);

    if (result.isSuccess()) {
        std::cout << "versionid:" << result.result().VersionId() << std::endl;
    }
    else {
        std::cout << "AppendObject fail" <<
        ",code:" << result.error().Code() <<
        ",message:" << result.error().Message() <<
        ",requestId:" << result.error().RequestId() << std::endl;
        return -1;
    }

    /* Second append: start from the end of the first append. */
    std::shared_ptr<std::iostream> content2 = std::make_shared<std::stringstream>();
    *content2 <<"Thank you for using Alibaba Cloud Object Storage Service!";
    auto position = result.result().Length();
    AppendObjectRequest appendObjectRequest(BucketName, ObjectName, content2);
    appendObjectRequest.setPosition(position);

    auto outcome = client.AppendObject(appendObjectRequest);

    if (outcome.isSuccess()) {
        std::cout << "versionid:" << outcome.result().VersionId() << std::endl;
    }
    else {
        std::cout << "AppendObject fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## Multipart upload

Multipart upload splits a large file into parts, uploads them in parallel or sequentially, then assembles them with `CompleteMultipartUpload`. When the multipart upload completes on a versioning-enabled bucket, OSS generates a unique version ID and returns it in the `x-oss-version-id` response header.

The upload flow is: `InitiateMultipartUpload` → `UploadPart` (repeated for each part) → `CompleteMultipartUpload`.

```
#include <alibabacloud/oss/OssClient.h>
#include <fstream>

int64_t getFileSize(const std::string& file)
{
    std::fstream f(file, std::ios::in | std::ios::binary);
    f.seekg(0, f.end);
    int64_t size = f.tellg();
    f.close();
    return size;
}

using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Set yourEndpoint to the endpoint of the region where the bucket is located.
       Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou). */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region ID of the bucket.
       Example: cn-hangzhou for China (Hangzhou). */
    std::string Region = "yourRegion";
    /* Specify the bucket name. Example: examplebucket. */
    std::string BucketName = "examplebucket";
    /* Specify the full object path, excluding the bucket name.
       Example: exampledir/exampleobject.txt. */
    std::string ObjectName = "exampledir/exampleobject.txt";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Load credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    InitiateMultipartUploadRequest initUploadRequest(BucketName, ObjectName);

    /* Step 1: Initiate the multipart upload to get an upload ID. */
    auto uploadIdResult = client.InitiateMultipartUpload(initUploadRequest);
    auto uploadId = uploadIdResult.result().UploadId();
    std::string fileToUpload = "yourLocalFilename";
    int64_t partSize = 100 * 1024;
    PartList partETagList;
    auto fileSize = getFileSize(fileToUpload);
    int partCount = static_cast<int>(fileSize / partSize);
    /* Round up to include any remaining bytes as the last part. */
    if (fileSize % partSize != 0) {
        partCount++;
    }

    /* Step 2: Upload each part sequentially. Parts are numbered starting from 1. */
    for (int i = 1; i <= partCount; i++) {
        auto skipBytes = partSize * (i - 1);
        auto size = (partSize < fileSize - skipBytes) ? partSize : (fileSize - skipBytes);
        std::shared_ptr<std::iostream> content = std::make_shared<std::fstream>(fileToUpload, std::ios::in|std::ios::binary);
        content->seekg(skipBytes, std::ios::beg);

        UploadPartRequest uploadPartRequest(BucketName, ObjectName, content);
        uploadPartRequest.setContentLength(size);
        uploadPartRequest.setUploadId(uploadId);
        uploadPartRequest.setPartNumber(i);
        auto uploadPartOutcome = client.UploadPart(uploadPartRequest);
        if (uploadPartOutcome.isSuccess()) {
                Part part(i, uploadPartOutcome.result().ETag());
                partETagList.push_back(part);
        }
        else {
                std::cout << "uploadPart fail" <<
            ",code:" << uploadPartOutcome.error().Code() <<
            ",message:" << uploadPartOutcome.error().Message() <<
            ",requestId:" << uploadPartOutcome.error().RequestId() << std::endl;
        }
    }

    /* Step 3: Complete the multipart upload. OSS assembles all parts in order. */
    CompleteMultipartUploadRequest request(BucketName, ObjectName);
    request.setUploadId(uploadId);
    request.setPartList(partETagList);
    auto outcome = client.CompleteMultipartUpload(request);

    if (outcome.isSuccess()) {
        std::cout << "versionid:" << outcome.result().VersionId() << std::endl;
    }
    else {
        std::cout << "CompleteMultipartUpload fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## What's next

-   [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb) — API reference for simple upload
    
-   [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db) — API reference for append upload
    
-   [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb) — API reference for multipart upload
