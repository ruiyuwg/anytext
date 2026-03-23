Versioning applies to all objects in a bucket. When you enable versioning, OSS preserves every version of each object, including versions created by overwrites and deletes.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:PutBucketVersioning` permission to set the versioning state
    
-   The `oss:GetBucketVersioning` permission to retrieve the versioning state
    

For more information, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies).

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. For endpoint details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   To create an OSSClient instance using a custom domain name or Security Token Service (STS), see [Create an OSSClient instance](/help/en/oss/developer-reference/initialization-12).
    

## Enable or suspend versioning

The following example enables versioning on a bucket. To suspend versioning instead, replace `VersioningStatus::Enabled` with `VersioningStatus::Suspended`.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Replace yourEndpoint with the endpoint for your bucket's region.
       For example, for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
    std::string Endpoint = "yourEndpoint";
    /* Replace yourRegion with the region ID of your bucket.
       For example, for China (Hangzhou): cn-hangzhou */
    std::string Region = "yourRegion";
    /* Replace examplebucket with your bucket name. */
    std::string BucketName = "examplebucket";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Load access credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Set the versioning state to Enabled. Use VersioningStatus::Suspended to suspend versioning. */
    SetBucketVersioningRequest setrequest(BucketName, VersioningStatus::Enabled);
    auto outcome = client.SetBucketVersioning(setrequest);

    if (!outcome.isSuccess()) {
        std::cout << "SetBucketVersioning fail"
                  << ", code: " << outcome.error().Code()
                  << ", message: " << outcome.error().Message()
                  << ", requestId: " << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## Get the versioning state of a bucket

Use `GetBucketVersioning` to confirm the current versioning state after setting it, or to check the state before performing version-sensitive operations.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Replace yourEndpoint with the endpoint for your bucket's region.
       For example, for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
    std::string Endpoint = "yourEndpoint";
    /* Replace yourRegion with the region ID of your bucket.
       For example, for China (Hangzhou): cn-hangzhou */
    std::string Region = "yourRegion";
    /* Replace examplebucket with your bucket name. */
    std::string BucketName = "examplebucket";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Load access credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Get the current versioning state of the bucket. */
    auto outcome = client.GetBucketVersioning(GetBucketVersioningRequest(BucketName));

    if (!outcome.isSuccess()) {
        std::cout << "GetBucketVersioning fail"
                  << ", code: " << outcome.error().Code()
                  << ", message: " << outcome.error().Message()
                  << ", requestId: " << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## List all object versions in a bucket

`ListObjectVersions` returns all object versions and delete markers in a bucket. Use `NextKeyMarker` and `NextVersionIdMarker` to paginate through all results.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Replace yourEndpoint with the endpoint for your bucket's region.
       For example, for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
    std::string Endpoint = "yourEndpoint";
    /* Replace yourRegion with the region ID of your bucket.
       For example, for China (Hangzhou): cn-hangzhou */
    std::string Region = "yourRegion";
    /* Replace examplebucket with your bucket name. */
    std::string BucketName = "examplebucket";

    /* Initialize network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Load access credentials from environment variables OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    ListObjectVersionsRequest request(BucketName);
    bool IsTruncated = false;

    do {
        auto outcome = client.ListObjectVersions(request);

        if (outcome.isSuccess()) {
            /* Print the key and version ID of each delete marker. */
            for (auto const &marker : outcome.result().DeleteMarkerSummarys()) {
                std::cout << "marker key: " << marker.Key()
                          << ", marker versionId: " << marker.VersionId() << std::endl;
            }

            /* Print the key and version ID of each object version. */
            for (auto const &obj : outcome.result().ObjectVersionSummarys()) {
                std::cout << "object key: " << obj.Key()
                          << ", object versionId: " << obj.VersionId() << std::endl;
            }
        } else {
            std::cout << "ListObjectVersions fail"
                      << ", code: " << outcome.error().Code()
                      << ", message: " << outcome.error().Message()
                      << ", requestId: " << outcome.error().RequestId() << std::endl;
            break;
        }

        /* If the response is truncated, set the key marker and version ID marker
           to retrieve the next page of results. */
        request.setKeyMarker(outcome.result().NextKeyMarker());
        request.setVersionIdMarker(outcome.result().NextVersionIdMarker());
        IsTruncated = outcome.result().IsTruncated();
    } while (IsTruncated);

    /* Release network resources. */
    ShutdownSdk();
    return 0;
}
```

## References

-   [PutBucketVersioning](/help/en/oss/developer-reference/putbucketversioning#reference-w2w-nm3-fhb)
    
-   [GetBucketVersioning](/help/en/oss/developer-reference/getbucketversioning#reference-fhn-kt3-fhb)
