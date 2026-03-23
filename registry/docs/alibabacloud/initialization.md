The OSS Browser.js SDK client manages Object Storage Service (OSS) resources such as buckets and objects. Initialize a client instance before sending any OSS request.

## Prerequisites

Before you begin, ensure that you have:

-   Installed the Browser.js SDK. For more information, see [Installation (Browser.js SDK)](/help/en/oss/developer-reference/installation)
    

## How it works

Three credential strategies are available when you initialize a client. Choose the one that matches your use case:

1.  **Single-use Security Token Service (STS) token** — Pass an STS-issued temporary AccessKey pair and token at initialization. The token is valid for one session.
    
2.  **Auto-refreshing STS token** — Pass a `refreshSTSToken` callback that fetches fresh STS credentials before the current token expires. Use this for long-running sessions.
    
3.  **Static AccessKey pair (testing only)** — Pass a permanent AccessKey ID and AccessKey secret directly. Never use this in production browser applications, because static credentials embedded in browser code are exposed to end users.
    

**Important**

Always use STS temporary credentials in browser environments. Unlike server-side code, browser JavaScript is visible to users, which makes static credentials a security risk.

## Initialize the client

### V4 signature (recommended)

Use the V4 signature algorithm for stronger security. Set `authorizationV4: true` in the constructor. V4 signatures require Browser.js SDK version 6.20.0 or later.

The following example initializes a client using an OSS domain name and an STS token.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <!--Import the SDK file.-->
    <script
      type="text/javascript"
      src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.20.0.min.js"
    ></script>
    <script type="text/javascript">
      const client = new OSS({
        // Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set yourRegion to oss-cn-hangzhou.
        region: 'yourRegion',
        authorizationV4: true,
        // The temporary AccessKey pair (AccessKey ID and AccessKey secret) obtained from Security Token Service (STS).
        accessKeyId: 'yourAccessKeyId',
        accessKeySecret: 'yourAccessKeySecret',
        // The security token obtained from STS.
        stsToken: 'yourSecurityToken',
        // Specify the bucket name. For example, examplebucket.
        bucket: "examplebucket",
      });
    </script>
  </body>
</html>
```

For other scenarios — such as initializing with a custom domain name — adjust the `endpoint` and `cname` parameters. See [Configuration examples](#b3c26c19a5bcy) below.

### V1 signature (not recommended)

**Important**

From March 1, 2025, the V1 signature algorithm is no longer available to new customers with new UIDs. From September 1, 2025, OSS no longer updates or maintains the V1 signature algorithm, and it is no longer available for new buckets. Upgrade to V4 signatures to prevent impact on your business.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <!--Import the SDK file.-->
    <script
      type="text/javascript"
      src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.18.0.min.js"
    ></script>
    <script type="text/javascript">
      const client = new OSS({
        // Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set yourRegion to oss-cn-hangzhou.
        region: 'yourRegion',
        // The temporary AccessKey pair (AccessKey ID and AccessKey secret) obtained from STS.
        accessKeyId: 'yourAccessKeyId',
        accessKeySecret: 'yourAccessKeySecret',
        // The security token obtained from STS.
        stsToken: 'yourSecurityToken',
        // Specify the bucket name. For example, examplebucket.
        bucket: "examplebucket",
      });
    </script>
  </body>
</html>
```

## Configuration options

Pass these options to the `new OSS({...})` constructor.

**Parameter**

**Type**

**Required**

**Default**

**Description**

`accessKeyId`

String

Yes

—

AccessKey ID from the Alibaba Cloud Management Console.

`accessKeySecret`

String

Yes

—

AccessKey secret from the Alibaba Cloud Management Console.

`stsToken`

String

No

—

Security Token Service (STS) token for temporary authorization.

`refreshSTSToken`

Function

No

—

Called automatically when the STS token expires. Must return an object containing `stsToken`, `accessKeyId`, and `accessKeySecret`.

`refreshSTSTokenInterval`

Number

No

300,000 ms (5 min)

How often to call `refreshSTSToken`, in milliseconds. Set this to less than the STS token expiration period.

`bucket`

String

No

—

Default bucket to access. If the bucket does not exist, call `putBucket()` to create it.

`endpoint`

String

No

—

OSS region-specific domain name. Takes priority over `region`. Set to a public endpoint, an internal same-region endpoint, or an accelerated endpoint.

`region`

String

No

`oss-cn-hangzhou`

Region where the bucket is located.

`internal`

Boolean

No

`false`

Set to `true` to access OSS over the Alibaba Cloud internal network and reduce data transfer costs.

`secure`

Boolean

No

—

Set to `true` for HTTPS, `false` for HTTP.

`timeout`

String or Number

No

`60` (seconds)

Timeout for all operations, in seconds.

`cname`

Boolean

No

`false`

Set to `true` to use a custom domain name. Also set `endpoint` to the custom domain name.

`isRequestPay`

Boolean

No

`false`

Set to `true` to enable the Requester Pays feature. Sends the `x-oss-request-payer: requester` header with each request.

`useFetch`

Boolean

No

`false`

Browser only. Set to `true` to upload objects using the Fetch API instead of XMLHttpRequest.

`retryMax`

Number

No

—

Maximum number of retries for requests that fail due to a network error or timeout. Not supported for `putStream` operations.

`authorizationV4`

Boolean

No

`false`

Set to `true` to use the V4 signature algorithm.

## Configuration examples

### Basic usage

**Use when:** Getting started or running a quick test with STS credentials.

```
const OSS = require('ali-oss');

const store = new OSS({
  region: 'yourRegion',
  authorizationV4: true,
  accessKeyId: 'your access key',
  accessKeySecret: 'your access secret',
  stsToken: 'yourSecurityToken',
  bucket: 'your bucket name',
});
```

### Use an accelerated endpoint

**Use when:** Your users are geographically distributed and you want to reduce upload and download latency.

> Two accelerated endpoints are available:

> Global Accelerator: `oss-accelerate.aliyuncs.com`

> Outside the Chinese mainland: `oss-accelerate-overseas.aliyuncs.com`

```
const OSS = require('ali-oss');

const store = new OSS({
  region: 'yourRegion',
  authorizationV4: true,
  accessKeyId: 'your access key',
  accessKeySecret: 'your access secret',
  stsToken: 'yourSecurityToken',
  bucket: 'your bucket name',
  endpoint: 'oss-accelerate.aliyuncs.com',
});
```

### Use a custom domain name

**Use when:** You serve OSS content through your own domain (CNAME record pointing to OSS).

```
const OSS = require('ali-oss');

const store = new OSS({
  region: 'yourRegion',
  authorizationV4: true,
  accessKeyId: 'your access key',
  accessKeySecret: 'your access secret',
  stsToken: 'yourSecurityToken',
  cname: true,
  endpoint: 'your custom domain',
});
```

### Auto-refresh an STS token

**Use when:** Building a long-running upload or download flow where the initial STS token may expire.

The `refreshSTSToken` callback fetches fresh credentials from your STS server. Set `refreshSTSTokenInterval` to a value less than the STS token's expiration period so credentials are refreshed before they expire.

```
const OSS = require('ali-oss');

const store = new OSS({
  region: 'yourRegion',
  authorizationV4: true,
  accessKeyId: 'your STS key',
  accessKeySecret: 'your STS secret',
  stsToken: 'your STS token',
  refreshSTSToken: async () => {
    const info = await fetch('you sts server');
    return {
      accessKeyId: info.accessKeyId,
      accessKeySecret: info.accessKeySecret,
      stsToken: info.stsToken,
    };
  },
  refreshSTSTokenInterval: 300000,
});
```

### Retry a stream upload

**Use when:** Uploading a stream that may fail due to transient network errors. Note that `putStream` does not support automatic retries, so implement the retry loop manually.

```
for (let i = 0; i <= store.options.retryMax; i++) {
  try {
    const result = await store.putStream('<example-object>', fs.createReadStream('<example-path>'));
    console.log(result);
    break; // break if success
  } catch (e) {
    console.log(e);
  }
}
```

### Use V4 signature with additional headers

**Use when:** Your request includes custom headers that must be covered by the V4 signature (for example, to prevent request tampering).

Specify the header keys in `additionalHeaders`. These keys must also appear in the actual request headers.

```
const OSS = require('ali-oss');

const store = new OSS({
  accessKeyId: 'your access key',
  accessKeySecret: 'your access secret',
  bucket: 'your bucket name',
  region: 'oss-cn-hangzhou',
  authorizationV4: true,
  stsToken: 'yourSecurityToken',
});

try {
  const bucketInfo = await store.getBucketInfo('your bucket name');
  console.log(bucketInfo);
} catch (e) {
  console.log(e);
}

try {
  const putObjectResult = await store.put('your bucket name', 'your object name', {
    headers: {
      // The headers of this request
      header1: 'value1',
      header2: 'value2',
    },
    // The keys of the request headers to include in the V4 signature calculation. Ensure that these additional headers are included in the request headers.
    additionalHeaders: ['additional header1', 'additional header2'],
  });
  console.log(putObjectResult);
} catch (e) {
  console.log(e);
}
```
