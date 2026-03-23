Upload objects to a versioning-enabled or versioning-suspended bucket using the OSS Node.js SDK. The examples cover simple upload, append upload, and multipart upload.

## Prerequisites

Before you begin, make sure that you have:

-   An OSS bucket with versioning enabled or suspended
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid access credentials
    
-   The `ali-oss` package installed (`npm install ali-oss`)
    

## Simple upload

When you upload an object to a versioning-enabled bucket, OSS generates a unique version ID for the object and returns it in the `x-oss-version-id` response header.

If the bucket is versioning-suspended, OSS assigns a version ID of `null`. If an object with the same name already exists, the existing object is overwritten and only one version with ID `null` is retained.

```
const OSS = require('ali-oss');
const path = require('path');

const client = new OSS({
  // Replace with the region where your bucket is located, for example, oss-cn-hangzhou.
  region: '<your-region>',
  // Load access credentials from environment variables.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Replace with your bucket name.
  bucket: '<your-bucket-name>',
});

async function put() {
  try {
    const result = await client.put(
      'exampleobject.txt',
      path.normalize('D:\\localpath\\examplefile.txt')
    );
    // Print the version ID assigned to the uploaded object.
    console.log('Version ID:', result.res.headers['x-oss-version-id']);
  } catch (err) {
    console.error('Upload failed:', err.name, err.message);
  }
}

put();
```

## Append upload

Append upload adds data to an existing appendable object. In a versioning-enabled bucket, AppendObject can only be performed on the current version of an appendable object.

**Note:** The following behaviors apply in a versioning-enabled bucket:

-   Appending to an appendable object does not create a previous version.
    
-   Running PutObject or DeleteObject on an appendable object stores it as a previous version and prevents further appending.
    
-   AppendObject cannot be performed on a non-appendable object such as a normal object or a delete marker.
    

```
const OSS = require('ali-oss');
const path = require('path');

const client = new OSS({
  // Replace with the region where your bucket is located, for example, oss-cn-hangzhou.
  region: '<your-region>',
  // Load access credentials from environment variables.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Replace with your bucket name.
  bucket: '<your-bucket-name>',
});

async function append() {
  try {
    await client.append(
      'exampleobject.txt',
      path.normalize('D:\\localpath\\examplefile.txt'),
      {
        // partSize sets the size of each appended chunk in bytes. 100 * 1024 = 100 KiB.
        partSize: 100 * 1024,
      }
    );
    console.log('Append succeeded.');
  } catch (err) {
    console.error('Append failed:', err.name, err.message);
  }
}

append();
```

## Multipart upload

Use multipart upload for large files. After all parts are uploaded, OSS assembles them into a single object and assigns a unique version ID, returned in the `x-oss-version-id` response header.

```
const OSS = require('ali-oss');
const path = require('path');

const client = new OSS({
  // Replace with the region where your bucket is located, for example, oss-cn-hangzhou.
  region: '<your-region>',
  // Load access credentials from environment variables.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  authorizationV4: true,
  // Replace with your bucket name.
  bucket: '<your-bucket-name>',
});

async function multipartUpload() {
  try {
    const result = await client.multipartUpload(
      'exampleobject.txt',
      path.normalize('D:\\localpath\\examplefile.txt'),
      {
        // partSize sets the size of each part in bytes. 100 * 1024 = 100 KiB.
        partSize: 100 * 1024,
      }
    );
    // Print the version ID assigned to the assembled object.
    console.log('Version ID:', result.res.headers['x-oss-version-id']);
  } catch (err) {
    console.error('Multipart upload failed:', err.name, err.message);
  }
}

multipartUpload();
```

## What's next

-   [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb) — API reference for simple upload
    
-   [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db) — API reference for append upload
    
-   [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb) — API reference for multipart upload
