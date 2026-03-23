Grant temporary access to Object Storage Service (OSS) resources using Security Token Service (STS) temporary credentials or a presigned URL. Both approaches let you expose OSS operations to third-party clients without sharing your permanent AccessKey pair.

**Important**

When you use STS temporary credentials to generate a presigned URL, the shorter validity period takes precedence. For example, if your STS credentials expire in 1,200 seconds and the presigned URL is set to 3,600 seconds, the URL stops working when the STS credentials expire at 1,200 seconds.

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. For details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The OSSClient instances in these examples are initialized with an OSS endpoint. To initialize OSSClient using a custom domain name or STS, see [Create an OSSClient instance](/help/en/oss/developer-reference/initialization-12).
    

## Use STS for temporary access

Security Token Service (STS) is a web service that issues short-lived credentials for cloud computing users. Use STS when a third-party client — such as a mobile app or partner service — needs to access OSS directly without routing all traffic through your backend.

**How STS temporary access works:**

1.  Your backend calls STS to get temporary credentials.
    
2.  Your backend passes the credentials to the client.
    
3.  The client uses the credentials to call OSS directly.
    

STS credentials expire automatically, so you never need to revoke them manually.

### Why use STS

-   Share a scoped security token instead of your permanent AccessKey pair.
    
-   Set a custom validity period and permission scope per token.
    
-   Tokens expire on their own — no manual cleanup required.
    

### How to get STS credentials

STS credentials include a security token and a temporary AccessKey pair (AccessKey ID and AccessKey secret). The validity period ranges from 900 seconds (minimum) to the maximum session duration configured for the RAM role. For details, see [Specify the maximum session duration for a RAM role](/help/en/ram/user-guide/specify-the-maximum-session-duration-for-a-ram-role#task-2498608).

Get STS credentials using one of the following methods:

-   **Call the AssumeRole API:** See [AssumeRole](/help/en/ram/api-assumerole#reference-clc-3sv-xdb).
    
-   **Use an STS SDK:** See [STS SDK overview](/help/en/ram/developer-reference/sts-sdk-overview#reference-w5t-25v-xdb).
    

Both methods return the same credential structure: a `SecurityToken`, a temporary `AccessKeyId`, and a temporary `AccessKeySecret`. Store these values in the environment variables `OSS_ACCESS_KEY_ID`, `OSS_ACCESS_KEY_SECRET`, and `OSS_SESSION_TOKEN` before running the following code.

### Create an OSSClient with STS credentials

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    // Specify the endpoint for the region where your bucket is located.
    // Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
    std::string Endpoint = "yourEndpoint";
    // Specify the region ID. Example: cn-hangzhou.
    std::string Region = "yourRegion";

    // Initialize SDK resources (network resources, etc.).
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;

    // Load STS credentials from environment variables:
    // OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET, OSS_SESSION_TOKEN.
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    // Add your OSS operations here.

    // Release SDK resources.
    ShutdownSdk();
    return 0;
}
```

## Use a presigned URL for temporary access

A presigned URL embeds a signature in the URL itself, so the recipient can perform a specific OSS operation — such as uploading or downloading an object — without any credentials. The signature is computed locally using the `GeneratePresignedUrl` method. No server round-trip is required.

**Important**

A presigned URL is a bearer token — anyone who holds the URL can perform the authorized operation. Treat it as a short-lived access credential and share it only with the intended recipient.

### Prerequisites

The principal that generates the presigned URL must hold the permission for the intended operation:

**Operation**

**Required permission**

Upload (PUT)

`oss:PutObject`

Download (GET)

`oss:GetObject`

### Usage notes

-   To generate a presigned URL for HTTPS access, set the endpoint protocol to `https://`.
    
-   The maximum validity period for a presigned URL is 32,400 seconds. If you generate the URL using STS temporary credentials, the effective expiry is the shorter of the two validity periods.
    
-   If the generated URL contains a plus sign (`+`), replace it with `%2B` before use. Otherwise, the URL may not resolve correctly.
    

### Generate a presigned URL for upload

The following example generates a presigned PUT URL, valid for 1,200 seconds, that allows uploading an object to a specified path.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    // Specify the endpoint for the region where your bucket is located.
    // Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
    std::string Endpoint = "yourEndpoint";
    // Specify the region ID. Example: cn-hangzhou.
    std::string Region = "yourRegion";
    // Specify the bucket name. Example: examplebucket.
    std::string BucketName = "examplebucket";
    // Specify the full object path, excluding the bucket name.
    // Example: exampledir/exampleobject.txt.
    std::string PutobjectUrlName = "exampledir/exampleobject.txt";

    // Initialize SDK resources (network resources, etc.).
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;

    // Load credentials from environment variables:
    // OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET.
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    // Set the expiry time to 1,200 seconds from now.
    std::time_t t = std::time(nullptr) + 1200;

    // Generate a presigned PUT URL.
    auto genOutcome = client.GeneratePresignedUrl(BucketName, PutobjectUrlName, t, Http::Put);
    if (genOutcome.isSuccess()) {
        std::cout << "Presigned URL: " << genOutcome.result().c_str() << std::endl;
    }
    else {
        std::cout << "GeneratePresignedUrl failed"
                  << ", code: " << genOutcome.error().Code()
                  << ", message: " << genOutcome.error().Message()
                  << ", requestId: " << genOutcome.error().RequestId() << std::endl;
        return -1;
    }

    // Release SDK resources.
    ShutdownSdk();
    return 0;
}
```

To upload a file using the generated URL, see [Authorize access](/help/en/oss/developer-reference/authorize-access#section-fhz-qki-j3e).

### Generate a presigned URL for download

The following example generates a presigned GET URL, valid for 1,200 seconds, that allows downloading a specified object.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    // Specify the endpoint for the region where your bucket is located.
    // Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou).
    std::string Endpoint = "yourEndpoint";
    // Specify the region ID. Example: cn-hangzhou.
    std::string Region = "yourRegion";
    // Specify the bucket name. Example: examplebucket.
    std::string BucketName = "examplebucket";
    // Specify the full object path, excluding the bucket name.
    // Example: exampledir/exampleobject.txt.
    std::string GetobjectUrlName = "exampledir/exampleobject.txt";

    // Initialize SDK resources (network resources, etc.).
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;

    // Load credentials from environment variables:
    // OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET.
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    // Set the expiry time to 1,200 seconds from now.
    std::time_t t = std::time(nullptr) + 1200;

    // Generate a presigned GET URL.
    auto genOutcome = client.GeneratePresignedUrl(BucketName, GetobjectUrlName, t, Http::Get);
    if (genOutcome.isSuccess()) {
        std::cout << "Presigned URL: " << genOutcome.result().c_str() << std::endl;
    }
    else {
        std::cout << "GeneratePresignedUrl failed"
                  << ", code: " << genOutcome.error().Code()
                  << ", message: " << genOutcome.error().Message()
                  << ", requestId: " << genOutcome.error().RequestId() << std::endl;
        return -1;
    }

    // Release SDK resources.
    ShutdownSdk();
    return 0;
}
```

To download an object using the generated URL, see [Authorize access (Android SDK)](/help/en/oss/developer-reference/authorize-access#section-fhz-qki-j3e).

## FAQ

**Why does my presigned URL stop working before it expires?**

If you generated the URL with STS temporary credentials, the URL becomes invalid as soon as the STS credentials expire — regardless of the URL's own validity period. The effective expiry is always the shorter of the two. Regenerate the STS credentials and the URL if you need continued access.

**Why do I get a signature mismatch error?**

The most common causes are:

-   A plus sign (`+`) in the URL that was not encoded. Replace every `+` in the URL with `%2B` and retry.
    
-   A significant clock difference between the signing machine and the OSS server. Make sure your system clock is synchronized with a reliable NTP source.
    
-   A corporate proxy that modifies request headers or query strings. If you are behind a proxy, verify that it does not alter the presigned URL before it reaches OSS.
