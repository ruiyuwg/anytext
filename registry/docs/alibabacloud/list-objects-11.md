Use `ListObjects` to retrieve objects in a bucket. OSS returns results alphabetically, up to 1,000 objects per request. Use `prefix`, `delimiter`, `maxKeys`, and `marker` to filter and paginate results.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with objects to list
    
-   The `oss:ListObjects` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables configured with your access credentials
    

## Usage notes

-   These examples use the public endpoint of the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For region and endpoint details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   These examples create an `OssClient` instance using an OSS endpoint. To create one using a custom domain name or Security Token Service (STS), see [Create an OSSClient instance](/help/en/oss/developer-reference/initialization-12).
    

## Listing options

`ListObjects` supports three overloads:

**Overload signature**

**Description**

`ListObjectOutcome ListObjects(const std::string& bucket) const`

Lists objects in a bucket. Returns up to 1,000 objects per request.

`ListObjectOutcome ListObjects(const std::string& bucket, const std::string& prefix) const`

Lists objects with a specified prefix. Returns up to 1,000 objects per request.

`ListObjectOutcome ListObjects(const ListObjectsRequest& request) const`

Provides multiple filtering options for flexible queries.

All examples in this document use the request-based overload, which gives you the most control.

The following parameters control what results are returned:

**Parameter**

**Description**

**Default**

**Maximum**

`prefix`

Return only objects whose keys start with this value

—

—

`delimiter`

Group keys that share a prefix up to the first delimiter occurrence into `CommonPrefixes`

—

—

`maxKeys`

Maximum number of objects to return per request

100

1,000

`marker`

Return objects that appear after this key in alphabetical order (used for pagination)

—

—

When `IsTruncated` is `true` in the response, more results exist. Use the returned `NextMarker` value as the next `marker` to fetch the following page.

## List all objects in a bucket

The following example lists objects in a bucket. By default, up to 100 objects are returned.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    // Read credentials from environment variables.
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    ListObjectsRequest request(BucketName);
    auto outcome = client.ListObjects(request);

    if (!outcome.isSuccess()) {
        std::cout << "ListObjects failed"
            << ", code: " << outcome.error().Code()
            << ", message: " << outcome.error().Message()
            << ", requestId: " << outcome.error().RequestId() << std::endl;
        ShutdownSdk();
        return -1;
    }

    for (const auto& object : outcome.result().ObjectSummarys()) {
        std::cout << "name: " << object.Key()
            << ", size: " << object.Size()
            << ", last modified: " << object.LastModified() << std::endl;
    }

    ShutdownSdk();
    return 0;
}
```

## List a specific number of objects

Set `maxKeys` to control how many objects are returned in a single request. The following example returns up to 200 objects.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    ListObjectsRequest request(BucketName);
    request.setMaxKeys(200);
    auto outcome = client.ListObjects(request);

    if (!outcome.isSuccess()) {
        std::cout << "ListObjects failed"
            << ", code: " << outcome.error().Code()
            << ", message: " << outcome.error().Message()
            << ", requestId: " << outcome.error().RequestId() << std::endl;
        ShutdownSdk();
        return -1;
    }

    for (const auto& object : outcome.result().ObjectSummarys()) {
        std::cout << "name: " << object.Key()
            << ", size: " << object.Size()
            << ", last modified: " << object.LastModified() << std::endl;
    }

    ShutdownSdk();
    return 0;
}
```

## List objects with a prefix

Set `prefix` to filter objects by key prefix. When a bucket contains more objects than `maxKeys` allows in one request, use a `do-while` loop with `IsTruncated` and `NextMarker` to page through all matching results: if `IsTruncated` is `true`, assign `NextMarker` to `marker` and send another request.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";
    std::string keyPrefix = "yourkeyPrefix";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    std::string nextMarker = "";
    bool isTruncated = false;
    do {
        ListObjectsRequest request(BucketName);
        request.setPrefix(keyPrefix);
        request.setMarker(nextMarker);
        auto outcome = client.ListObjects(request);

        if (!outcome.isSuccess()) {
            std::cout << "ListObjects failed"
                << ", code: " << outcome.error().Code()
                << ", message: " << outcome.error().Message()
                << ", requestId: " << outcome.error().RequestId() << std::endl;
            break;
        }

        for (const auto& object : outcome.result().ObjectSummarys()) {
            std::cout << "name: " << object.Key()
                << ", size: " << object.Size()
                << ", last modified: " << object.LastModified() << std::endl;
        }

        // If IsTruncated is true, use NextMarker to fetch the next page.
        nextMarker = outcome.result().NextMarker();
        isTruncated = outcome.result().IsTruncated();
    } while (isTruncated);

    ShutdownSdk();
    return 0;
}
```

## List objects after a marker

Set `marker` to an object key to retrieve only objects that appear after it alphabetically. This is useful for resuming a listing from a known position.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";
    std::string YourMarker = "yourMarker";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    ListObjectOutcome outcome;
    do {
        ListObjectsRequest request(BucketName);
        request.setMarker(YourMarker);
        outcome = client.ListObjects(request);

        if (!outcome.isSuccess()) {
            std::cout << "ListObjects failed"
                << ", code: " << outcome.error().Code()
                << ", message: " << outcome.error().Message()
                << ", requestId: " << outcome.error().RequestId() << std::endl;
            break;
        }

        for (const auto& object : outcome.result().ObjectSummarys()) {
            std::cout << "name: " << object.Key()
                << ", size: " << object.Size()
                << ", last modified: " << object.LastModified() << std::endl;
        }

        // If IsTruncated is true, use NextMarker to fetch the next page.
        YourMarker = outcome.result().NextMarker();
    } while (outcome.result().IsTruncated());

    ShutdownSdk();
    return 0;
}
```

## List objects with URL-encoded names

If object names contain special characters, set the encoding type to `url` so that names are URL-encoded in the response. The following characters require encoding:

-   Single quotation marks (`'`)
    
-   Double quotation marks (`"`)
    
-   Ampersands (`&`)
    
-   Angle brackets (`<` `>`)
    
-   Chinese characters
    

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    std::string nextMarker = "";
    bool isTruncated = false;
    do {
        ListObjectsRequest request(BucketName);
        // OSS supports URL encoding only.
        request.setEncodingType("url");
        request.setMarker(nextMarker);
        auto outcome = client.ListObjects(request);

        if (!outcome.isSuccess()) {
            std::cout << "ListObjects failed"
                << ", code: " << outcome.error().Code()
                << ", message: " << outcome.error().Message()
                << ", requestId: " << outcome.error().RequestId() << std::endl;
            break;
        }

        for (const auto& object : outcome.result().ObjectSummarys()) {
            std::cout << "name: " << object.Key()
                << ", size: " << object.Size()
                << ", last modified: " << object.LastModified() << std::endl;
        }

        // If IsTruncated is true, use NextMarker to fetch the next page.
        nextMarker = outcome.result().NextMarker();
        isTruncated = outcome.result().IsTruncated();
    } while (isTruncated);

    ShutdownSdk();
    return 0;
}
```

## Simulate folder structure

OSS stores all data as flat objects — there are no real folders. A folder is a zero-byte object whose key ends with a forward slash (`/`). The OSS console renders these objects as folders.

Use `prefix` and `delimiter` together to navigate a simulated folder hierarchy:

-   **Flat listing** (`prefix` only): returns all objects whose keys start with the prefix, including those in nested subfolders. Results appear in `ObjectSummarys`.
    
-   **Hierarchical listing** (`prefix` + `delimiter="/"`): returns objects directly inside the prefix folder. Subfolders are collapsed into `CommonPrefixes` — their contents are not listed.
    

The following examples use a bucket that contains these objects:

```
oss.jpg
fun/test.jpg
fun/movie/001.avi
fun/movie/007.avi
```

### List all objects in the bucket

No prefix or delimiter — returns all objects across all levels.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    std::string nextMarker = "";
    bool isTruncated = false;
    do {
        ListObjectsRequest request(BucketName);
        request.setMarker(nextMarker);
        auto outcome = client.ListObjects(request);

        if (!outcome.isSuccess()) {
            std::cout << "ListObjects failed"
                << ", code: " << outcome.error().Code()
                << ", message: " << outcome.error().Message()
                << ", requestId: " << outcome.error().RequestId() << std::endl;
            ShutdownSdk();
            return -1;
        }

        for (const auto& object : outcome.result().ObjectSummarys()) {
            std::cout << "name: " << object.Key()
                << ", size: " << object.Size()
                << ", last modified: " << object.LastModified() << std::endl;
        }

        nextMarker = outcome.result().NextMarker();
        isTruncated = outcome.result().IsTruncated();
    } while (isTruncated);

    ShutdownSdk();
    return 0;
}
```

Expected output:

```
Objects:
fun/movie/001.avi
fun/movie/007.avi
fun/test.jpg
oss.jpg

CommonPrefixes:
(empty)
```

### List all objects in a folder (flat listing)

Set `prefix` to `fun/` with no delimiter. All objects inside `fun/`, including those in nested subfolders, appear in `ObjectSummarys`.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    std::string nextMarker = "";
    bool isTruncated = false;
    do {
        ListObjectsRequest request(BucketName);
        request.setPrefix("fun/");
        request.setMarker(nextMarker);
        auto outcome = client.ListObjects(request);

        if (!outcome.isSuccess()) {
            std::cout << "ListObjects failed"
                << ", code: " << outcome.error().Code()
                << ", message: " << outcome.error().Message()
                << ", requestId: " << outcome.error().RequestId() << std::endl;
            break;
        }

        for (const auto& object : outcome.result().ObjectSummarys()) {
            std::cout << "name: " << object.Key()
                << ", size: " << object.Size()
                << ", last modified: " << object.LastModified() << std::endl;
        }

        for (const auto& commonPrefix : outcome.result().CommonPrefixes()) {
            std::cout << "commonPrefix: " << commonPrefix << std::endl;
        }

        nextMarker = outcome.result().NextMarker();
        isTruncated = outcome.result().IsTruncated();
    } while (isTruncated);

    ShutdownSdk();
    return 0;
}
```

Expected output:

```
Objects:
fun/movie/001.avi
fun/movie/007.avi
fun/test.jpg

CommonPrefixes:
(empty)
```

### List objects and subfolders in a folder (hierarchical listing)

Set `prefix` to `fun/` and `delimiter` to `/`. Objects directly inside `fun/` appear in `ObjectSummarys`. Subfolders are collapsed into `CommonPrefixes` — their contents are not listed.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    std::string nextMarker = "";
    bool isTruncated = false;
    do {
        ListObjectsRequest request(BucketName);
        request.setDelimiter("/");
        request.setPrefix("fun/");
        request.setMarker(nextMarker);
        auto outcome = client.ListObjects(request);

        if (!outcome.isSuccess()) {
            std::cout << "ListObjects failed"
                << ", code: " << outcome.error().Code()
                << ", message: " << outcome.error().Message()
                << ", requestId: " << outcome.error().RequestId() << std::endl;
            break;
        }

        for (const auto& object : outcome.result().ObjectSummarys()) {
            std::cout << "name: " << object.Key()
                << ", size: " << object.Size()
                << ", last modified: " << object.LastModified() << std::endl;
        }

        for (const auto& commonPrefix : outcome.result().CommonPrefixes()) {
            std::cout << "commonPrefix: " << commonPrefix << std::endl;
        }

        nextMarker = outcome.result().NextMarker();
        isTruncated = outcome.result().IsTruncated();
    } while (isTruncated);

    ShutdownSdk();
    return 0;
}
```

Expected output:

```
Objects:
fun/test.jpg

CommonPrefixes:
fun/movie/
```

### Calculate the total size of a folder

The following example computes the total size of all objects inside a folder. For each subfolder found in `CommonPrefixes`, it recursively calls `calculateFolderLength` to sum the sizes of its contents.

```
#include <iostream>
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

static int64_t calculateFolderLength(const OssClient& client,
                                     const std::string& bucketName,
                                     const std::string& folder)
{
    std::string nextMarker = "";
    bool isTruncated = false;
    int64_t size = 0;
    do {
        ListObjectsRequest request(bucketName);
        request.setPrefix(folder);
        request.setMarker(nextMarker);
        auto outcome = client.ListObjects(request);

        if (!outcome.isSuccess()) {
            std::cout << "ListObjects failed"
                << ", code: " << outcome.error().Code()
                << ", message: " << outcome.error().Message()
                << ", requestId: " << outcome.error().RequestId() << std::endl;
            break;
        }

        for (const auto& object : outcome.result().ObjectSummarys()) {
            size += object.Size();
        }

        nextMarker = outcome.result().NextMarker();
        isTruncated = outcome.result().IsTruncated();
    } while (isTruncated);

    return size;
}

int main(void)
{
    std::string Endpoint = "yourEndpoint";
    std::string Region = "yourRegion";
    std::string BucketName = "examplebucket";
    std::string keyPrefix = "yourkeyPrefix";

    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    std::string nextMarker = "";
    bool isTruncated = false;
    do {
        ListObjectsRequest request(BucketName);
        // Use delimiter to identify immediate subfolders.
        request.setDelimiter("/");
        request.setPrefix(keyPrefix);
        request.setMarker(nextMarker);
        auto outcome = client.ListObjects(request);

        if (!outcome.isSuccess()) {
            std::cout << "ListObjects failed"
                << ", code: " << outcome.error().Code()
                << ", message: " << outcome.error().Message()
                << ", requestId: " << outcome.error().RequestId() << std::endl;
            break;
        }

        for (const auto& object : outcome.result().ObjectSummarys()) {
            std::cout << "name: " << object.Key()
                << ", size: " << object.Size() << std::endl;
        }

        for (const auto& commonPrefix : outcome.result().CommonPrefixes()) {
            // Recursively sum all objects inside each subfolder.
            int64_t folderSize = calculateFolderLength(client, BucketName, commonPrefix);
            std::cout << "folder: " << commonPrefix
                << ", size: " << folderSize << std::endl;
        }

        nextMarker = outcome.result().NextMarker();
        isTruncated = outcome.result().IsTruncated();
    } while (isTruncated);

    ShutdownSdk();
    return 0;
}
```

## What's next

-   For the complete sample code, see the [GitHub example](https://github.com/aliyun/aliyun-oss-cpp-sdk/blob/16a995a66b14f236e7fed9787e2dc0bb463d6e47/sample/src/bucket/BucketSample.cc#L261).
    
-   For the underlying API operations, see [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb) and [ListObjectsV2 (GetBucketV2)](/help/en/oss/developer-reference/listobjects-v2#reference-2520881).
