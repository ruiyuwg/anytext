OSS SDK for Browser.js lets you access Object Storage Service (OSS) directly from a web browser — upload files, download objects, and process images without a backend proxy.

This guide covers installation, browser access configuration, and initializing the SDK client.

## Prerequisites

Before you begin, ensure that you have:

-   A RAM user or Security Token Service (STS) temporary credentials configured for OSS access
    
-   CORS rules configured on your bucket (required for all browser-based requests)
    

## Configure browser access

Browsers enforce two security boundaries that require upfront configuration before your app can reach OSS:

-   **Cross-origin resource sharing (CORS)**: Browsers block requests to a different origin by default. Configure CORS rules on your bucket to allow your web app's domain.
    
-   **Temporary credentials**: Never embed a long-term AccessKey pair in client-side code — it exposes your credentials to anyone who views the page source. Use STS to issue short-lived tokens instead.
    

### Configure CORS rules

In the OSS console, add a CORS rule to your bucket with the following settings:

**Field**

**Value**

**Notes**

**Source**

`https://your-domain.com` or `https://*.your-domain.com`

Use a wildcard (`*`) only for development

**Allowed methods**

Select based on your requirements

For example, select `PUT` for multipart upload and `DELETE` to delete objects

**Allowed headers**

`*`

Required for SDK request headers

**Exposed headers**

`ETag`, `x-oss-request-id`, `x-oss-version-id`

Select based on your requirements

![CORS configuration in the OSS console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4742053071/p745256.png)

For detailed steps, see [Configure CORS](/help/en/oss/user-guide/cors-settings).

**Important**

The wildcard origin (`*`) is convenient for development but grants access to any domain. In production, specify exact origins to limit access to your application.

### Set up STS temporary credentials

Call the [AssumeRole](/help/en/ram/api-assumerole#reference-clc-3sv-xdb) API or use an [STS SDK](/help/en/ram/developer-reference/sts-sdk-overview#reference-w5t-25v-xdb) to obtain temporary credentials (AccessKey ID, AccessKey secret, and STS token) from a backend endpoint you control. The SDK's `refreshSTSToken` callback calls this endpoint automatically before credentials expire.

For a complete walkthrough, see [Use temporary credentials provided by STS to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#concept-xzh-nzk-2gb).

## Install the SDK

OSS SDK for Browser.js uses [Browserify](http://browserify.org/) and [Babel](https://babeljs.io/) to compile code for browser environments.

### Option 1: npm (recommended for bundled apps)

Install the package:

```
npm install ali-oss
```

Import it in your code:

```
const OSS = require('ali-oss');
```

> Browsers do not natively support the `require` syntax. Use a bundler such as webpack or Browserify as part of your build process.

### Option 2: CDN script tag

Add one of the following `<script>` tags to your HTML:

```
<!-- Load from Alibaba Cloud CDN -->
<script src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.20.0.min.js"></script>

<!-- Or load from a local copy -->
<script src="./aliyun-oss-sdk-6.20.0.min.js"></script>
```

> CDN availability depends on Alibaba Cloud CDN stability. For production apps, serve the SDK from your own infrastructure or use the npm package. For other SDK versions, see the [releases page](https://github.com/ali-sdk/ali-oss/releases).

Some older browsers (such as Internet Explorer 10 and 11) do not support Promises natively. Import `promise-polyfill` before loading the SDK.

## Initialize the client

Both installation methods use `new OSS()` to create a client. Pass your STS credentials and a `refreshSTSToken` function that fetches fresh credentials before they expire.

```
const client = new OSS({
  // Region where the bucket is located, e.g., oss-cn-hangzhou
  region: '<region-id>',
  // Use V4 request signing
  authorizationV4: true,
  // Temporary credentials from STS
  accessKeyId: '<sts-access-key-id>',
  accessKeySecret: '<sts-access-key-secret>',
  stsToken: '<sts-token>',
  // Fetch fresh credentials before expiry
  refreshSTSToken: async () => {
    const response = await fetch('<your-sts-endpoint>');
    const info = await response.json();
    return {
      accessKeyId: info.accessKeyId,
      accessKeySecret: info.accessKeySecret,
      stsToken: info.stsToken,
    };
  },
  // Refresh interval in milliseconds (5 minutes)
  refreshSTSTokenInterval: 300000,
  // Target bucket
  bucket: '<bucket-name>',
});
```

Replace the following placeholders:

**Placeholder**

**Description**

**Example**

`<region-id>`

Region where your bucket is located

`oss-cn-hangzhou`

`<sts-access-key-id>`

Temporary AccessKey ID from STS

—

`<sts-access-key-secret>`

Temporary AccessKey secret from STS

—

`<sts-token>`

STS security token

—

`<your-sts-endpoint>`

Your backend endpoint that calls AssumeRole

`https://your-app.com/sts`

`<bucket-name>`

Name of your OSS bucket

`my-app-uploads`

## Use the SDK

All API operations return a Promise. The SDK supports both async/await and Promise chaining.

### async/await

```
async function uploadFile(file) {
  try {
    // object: the key under which the file is stored in OSS
    // file: a File or Blob object from the browser
    const result = await client.put('uploads/my-file.jpg', file);
    console.log('Upload successful:', result.url);
  } catch (err) {
    console.error('Upload failed:', err);
  }
}
```

### Promise chaining

```
client
  .put('uploads/my-file.jpg', file)
  .then((result) => {
    console.log('Upload successful:', result.url);
    return client.get('uploads/my-file.jpg');
  })
  .then((downloaded) => {
    console.log('Download successful:', downloaded);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
```

## Supported browsers

**Browser**

**Minimum version**

Google Chrome

Major versions

Firefox

Major versions

Safari

Major versions

Edge

All versions

Internet Explorer

V10 or later

Android browser

Major versions

iOS browser

Major versions

Windows Phone browser

Major versions

## Limitations

The following features are not available in browser environments:

**Feature**

**Limitation**

**Alternative**

Streaming upload

Chunked encoding cannot be configured in browsers

Use multipart upload

Local file system access

Browsers cannot read the local file system directly

Use signed URLs to download objects

Bucket management

Cross-origin bucket-related requests are not supported

Perform bucket operations in the OSS console

## SDK resources

-   [GitHub repository](https://github.com/ali-sdk/ali-oss) — source code and issues
    
-   [API reference](https://github.com/ali-sdk/ali-oss#summary) — all supported operations
    
-   [Changelog](https://github.com/ali-sdk/ali-oss/blob/master/CHANGELOG.md) — version history
    

This documentation covers SDK v6.x. For v5.x, see the [v5.x README](https://github.com/ali-sdk/ali-oss/blob/5.x/README.md). To upgrade from v5.x to v6.x, follow the [upgrade guide](https://github.com/ali-sdk/ali-oss/blob/master/UPGRADING.md).

## What's next

-   [Permissions and access control](/help/en/oss/user-guide/permissions-and-access-control-overview#concept-e4s-mhv-tdb) — RAM policies and access control for OSS
    
-   [Use temporary credentials provided by STS to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#concept-xzh-nzk-2gb) — end-to-end STS integration guide
    
-   [Configure CORS](/help/en/oss/user-guide/cors-settings) — detailed CORS configuration steps
