OSSClient is the iOS client for Object Storage Service (OSS). Before making any OSS requests, initialize an OSSClient instance with your credentials and endpoint.

> Match the OSSClient lifecycle to your application lifecycle. Create one global instance in `application(_:didFinishLaunchingWithOptions:)` and release it when the application terminates.

## Prerequisites

Before you begin, ensure that you have:

-   Installed the OSS iOS SDK
    
-   A Security Token Service (STS) temporary AccessKey pair (AccessKey ID, AccessKey secret, and security token)
    
-   The endpoint of the region where your bucket is located (format: `https://oss-<region-id>.aliyuncs.com`)
    

## Initialize OSSClient

**Important**

Mobile terminals are untrusted environments. Storing an AccessKey ID and AccessKey secret directly on the device creates a significant security risk. Use STS authentication or self-signed mode instead.

### Create an OSSClient using STS

```
// Endpoint of the region where your bucket is located.
// Example: https://oss-cn-hangzhou.aliyuncs.com
NSString *endpoint = @"<yourEndpoint>";

// Temporary AccessKey pair and security token obtained from STS.
NSString *accessKeyId     = @"<yourAccessKeyId>";
NSString *accessKeySecret = @"<yourAccessKeySecret>";
NSString *securityToken   = @"<yourSecurityToken>";
NSString *region          = @"<yourRegion>";

id<OSSCredentialProvider> credentialProvider =
    [[OSSStsTokenCredentialProvider alloc] initWithAccessKeyId:accessKeyId
                                                   secretKeyId:accessKeySecret
                                                 securityToken:securityToken];

OSSClientConfiguration *configuration = [OSSClientConfiguration new];
configuration.signVersion = OSSSignVersionV4;

OSSClient *client = [[OSSClient alloc] initWithEndpoint:endpoint
                                     credentialProvider:credentialProvider
                                    clientConfiguration:configuration];
client.region = region;
```

### Create an OSSClient using a custom domain name

Set `endpoint` to your custom domain name. All other parameters remain the same as the STS example above.

```
// Set yourEndpoint to your custom domain name.
NSString *endpoint = @"<yourCustomDomain>";

NSString *accessKeyId     = @"<yourAccessKeyId>";
NSString *accessKeySecret = @"<yourAccessKeySecret>";
NSString *securityToken   = @"<yourSecurityToken>";
NSString *region          = @"<yourRegion>";

id<OSSCredentialProvider> credentialProvider =
    [[OSSStsTokenCredentialProvider alloc] initWithAccessKeyId:accessKeyId
                                                   secretKeyId:accessKeySecret
                                                 securityToken:securityToken];

OSSClientConfiguration *configuration = [OSSClientConfiguration new];
configuration.signVersion = OSSSignVersionV4;

OSSClient *client = [[OSSClient alloc] initWithEndpoint:endpoint
                                     credentialProvider:credentialProvider
                                    clientConfiguration:configuration];
client.region = region;
```

### Create an OSSClient in an Apsara Stack or private domain environment

For Apsara Stack or private domain environments, add the endpoint to `cnameExcludeList` to skip canonical name (CNAME) resolution.

```
NSString *endpoint = @"<yourEndpoint>";

NSString *accessKeyId     = @"<yourAccessKeyId>";
NSString *accessKeySecret = @"<yourAccessKeySecret>";
NSString *securityToken   = @"<yourSecurityToken>";
NSString *region          = @"<yourRegion>";

id<OSSCredentialProvider> credentialProvider =
    [[OSSStsTokenCredentialProvider alloc] initWithAccessKeyId:accessKeyId
                                                   secretKeyId:accessKeySecret
                                                 securityToken:securityToken];

OSSClientConfiguration *configuration = [OSSClientConfiguration new];
// Skip CNAME resolution for private domain endpoints.
configuration.cnameExcludeList = @[endpoint];
configuration.signVersion = OSSSignVersionV4;

OSSClient *client = [[OSSClient alloc] initWithEndpoint:endpoint
                                     credentialProvider:credentialProvider
                                    clientConfiguration:configuration];
client.region = region;
```

## Configure OSSClient

`OSSClientConfiguration` lets you tune connection behavior, timeouts, proxy settings, and more. The following table lists all supported parameters.

**Parameter**

**Description**

**Default**

`maxRetryCount`

Maximum number of retries for a failed request.

`3`

`maxConcurrentRequestCount`

Maximum number of concurrent requests.

`5`

`enableBackgroundTransmitService`

Enables background transfers. By default, this feature is disabled.

`NO`

`backgroundSesseionIdentifier`

Custom identifier for the background session.

`com.aliyun.oss.backgroundsession`

`isHttpdnsEnable`

Enables HttpDNS. Enabled by default in SDK versions 2.10.14 and earlier; disabled by default in later versions.

Version-dependent

`timeoutIntervalForRequest`

Request timeout, in seconds.

`15`

`timeoutIntervalForResource`

Resource timeout.

`7 days`

`proxyHost`

Proxy server host address.

—

`proxyPort`

Proxy server port.

—

`userAgentMark`

Custom value appended to the `User-Agent` HTTP header.

—

`cnameExcludeList`

Endpoints in this list skip CNAME resolution.

—

`crc64Verifiable`

Enables 64-bit cyclic redundancy check (CRC64) verification.

`NO`

`isAllowUACarrySystemInfo`

Allows the `User-Agent` header to include device system information.

`NO`

`isFollowRedirectsEnable`

Enables HTTP redirect following.

`NO`

The following example shows how to configure multiple parameters at once.

```
NSString *endpoint = @"<yourEndpoint>";

NSString *accessKeyId     = @"<yourAccessKeyId>";
NSString *accessKeySecret = @"<yourAccessKeySecret>";
NSString *securityToken   = @"<yourSecurityToken>";
NSString *region          = @"<yourRegion>";

id<OSSCredentialProvider> credentialProvider =
    [[OSSStsTokenCredentialProvider alloc] initWithAccessKeyId:accessKeyId
                                                   secretKeyId:accessKeySecret
                                                 securityToken:securityToken];

OSSClientConfiguration *configuration = [OSSClientConfiguration new];
// Use Signature Version 4.
configuration.signVersion                  = OSSSignVersionV4;
// Retry failed requests up to 3 times.
configuration.maxRetryCount               = 3;
// Allow up to 3 concurrent requests.
configuration.maxConcurrentRequestCount   = 3;
// Enable background transfers.
configuration.enableBackgroundTransmitService    = YES;
configuration.backgroundSesseionIdentifier       = @"<yourBackgroundSessionIdentifier>";
// Enable HttpDNS.
configuration.isHttpdnsEnable             = YES;
// Set request and resource timeouts.
configuration.timeoutIntervalForRequest   = 15;
configuration.timeoutIntervalForResource  = 24 * 60 * 60;
// Configure a proxy server.
configuration.proxyHost                   = @"<yourProxyHost>";
configuration.proxyPort                   = @8080;
// Append a custom User-Agent string.
configuration.userAgentMark               = @"<yourUserAgent>";
// Skip CNAME resolution for the specified endpoint.
configuration.cnameExcludeList            = @[@"<yourCname>"];
// Enable CRC64 verification.
configuration.crc64Verifiable             = YES;
// Allow User-Agent to carry system information.
configuration.isAllowUACarrySystemInfo    = YES;
// Disable HTTP redirect following.
configuration.isFollowRedirectsEnable     = NO;

OSSClient *client = [[OSSClient alloc] initWithEndpoint:endpoint
                                     credentialProvider:credentialProvider
                                    clientConfiguration:configuration];
client.region = region;
```

## Enable logging

Mobile environments are complex and connectivity issues can be difficult to reproduce. Enable logging to record SDK activity to a local file for diagnosis.

Call `[OSSLog enableLog]` before making any OSSClient calls:

```
// Log entries follow this format:
// 2017/10/25 11:05:43:863  [Debug]: 17th time: <NSThread: 0x7f8099108580>{number = 3, name = (null)}
[OSSLog enableLog];
```

Log files are stored in the `Caches/OSSLogs` folder of the app sandbox. Upload them to your own server or to Alibaba Cloud Simple Log Service for analysis.

## Use OSSTask

All SDK API calls return an `OSSTask`. Choose between asynchronous and synchronous handling depending on your needs.

**Asynchronous callback** — attach a continuation block that runs when the task completes:

```
OSSTask *task = [client getObject:get];

[task continueWithBlock:^(OSSTask *task) {
    // Handle the result here.
    return nil;
}];
```

**Synchronous wait** — block the current thread until the task finishes:

```
OSSTask *task = [client getObject:get];
[task waitUntilFinished];
```

## What's next

-   [Upload objects](/help/en/oss/developer-reference/simple-upload-2)
    
-   [Download objects](https://www.alibabacloud.com/help/en/oss/developer-reference/simple-download-2)
    
-   [Manage buckets](https://www.alibabacloud.com/help/en/oss/developer-reference/manage-buckets-2)
