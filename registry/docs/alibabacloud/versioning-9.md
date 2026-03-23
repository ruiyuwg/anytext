OSS versioning protects objects from accidental overwrites and deletions by preserving every version of each object in a bucket. When you enable versioning, you can retrieve or restore any previous version at any time.

A bucket has one of three versioning states:

**State**

**Description**

Unversioned (default)

The default state.

Versioning-enabled

OSS assigns a unique version ID to every object upload.

Versioning-suspended

Versioning is suspended for new uploads. Existing versioned objects remain accessible by version ID.

> Versioning requires ali-oss SDK version 6.8.0 or later.

For more information, see [Versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb).

## Prerequisites

Before you begin, make sure that you have:

-   ali-oss SDK 6.8.0 or later installed
    
-   `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid access credentials
    

## Enable or suspend versioning

Set `status` to `'Enabled'` to enable versioning, or `'Suspended'` to suspend it.

```
const OSS = require('ali-oss');

const client = new OSS({
  // Set region to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set region to oss-cn-hangzhou.
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Set bucket to the name of your bucket.
  bucket: 'yourbucketname'
});

async function putBucketVersioning() {
  const status = 'Enabled'; // 'Enabled' or 'Suspended'
  const result = await client.putBucketVersioning('BucketName', status);
  console.log(result);
}
putBucketVersioning();
```

## Get the versioning state of a bucket

`getBucketVersioning()` returns a `versionStatus` field with the current versioning state of the bucket.

```
const OSS = require('ali-oss');

const client = new OSS({
  // Set region to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set region to oss-cn-hangzhou.
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Set bucket to the name of your bucket.
  bucket: 'yourbucketname'
});

async function getBucketVersioning() {
  const result = await client.getBucketVersioning('BucketName');
  console.log(result.versionStatus);
}
getBucketVersioning();
```

## List all object versions in a bucket

`getBucketVersions()` returns all object versions and delete markers in a bucket.

The result contains two arrays:

-   `result.objects` — versioned objects
    
-   `result.deleteMarker` — delete markers
    

```
const OSS = require('ali-oss');

const client = new OSS({
  // Set region to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set region to oss-cn-hangzhou.
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Set bucket to the name of your bucket.
  bucket: 'yourbucketname'
});

async function getBucketVersions() {
  const result = await client.getBucketVersions();
  console.log(result.objects);
  console.log(result.deleteMarker);
}
getBucketVersions();
```

## References

-   [GitHub example](https://github.com/ali-sdk/ali-oss?spm=a2c4g.11186623.0.0.13994772cq23ae#getBucketVersioningname-options) — complete sample code for managing versioning
    
-   [PutBucketVersioning](/help/en/oss/developer-reference/putbucketversioning#reference-w2w-nm3-fhb) — API reference for setting the versioning state
    
-   [GetBucketVersioning](/help/en/oss/developer-reference/getbucketversioning#reference-fhn-kt3-fhb) — API reference for retrieving the versioning state
    
-   [ListObjectVersions (GetBucketVersions)](/help/en/oss/developer-reference/listobjectversions#reference-n2s-xy3-fhb) — API reference for listing all object versions and delete markers
