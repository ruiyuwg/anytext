Delete single objects, multiple objects, or objects with a specified name prefix from a versioning-enabled bucket.

## How versioning affects deletion

When deleting an object from a versioning-enabled bucket, the behavior depends on whether you specify a version ID.

-   **Without a version ID (temporary deletion):** OSS adds a delete marker as the latest version instead of removing the object. Subsequent `GetObject` requests return `404 Not Found` with the response headers `x-oss-delete-marker: true` and `x-oss-version-id` set to the delete marker's version ID.
    
-   **With a version ID (permanent deletion):** OSS permanently removes the specified version. To delete a version with a null ID, set `versionId` to the string `"null"`.
    

## Prerequisites

-   The `ali-oss` SDK is installed. For more information, see [Get started with OSS SDK for Node.js](/help/en/oss/developer-reference/getting-started-with-oss-sdk-for-node-js).
    
-   An `OSS` client instance is initialized. All examples in this topic use the following client configuration:
    
    ```
      const OSS = require("ali-oss");
    
      const client = new OSS({
        // Specify the region. Example: oss-cn-hangzhou.
        region: "<your-region>",
        // Obtain access credentials from environment variables.
        accessKeyId: process.env.OSS_ACCESS_KEY_ID,
        accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
        authorizationV4: true,
        bucket: "<your-bucket-name>",
      });
    ```
    

## Delete a single object

### Permanently delete by version ID

```
const versionId = "<your-version-id>";
const objectName = "exampleobject.txt";

async function deleteVersionObject() {
  const result = await client.delete(objectName, {
    versionId,
  });
  console.log(result);
}

deleteVersionObject();
```

### Temporarily delete (add a delete marker)

Calling `delete` without a `versionId` adds a delete marker. The object can be restored later by removing the delete marker.

```
const objectName = "exampleobject.txt";

async function deleteObject() {
  const result = await client.delete(objectName);
  console.log(result);
}

deleteObject();
```

## Delete multiple objects

### Permanently delete by version ID

Pass an array of `{ key, versionId }` objects to `deleteMulti` to permanently delete specific versions, including delete markers.

```
const names = [
  { key: "key1.js", versionId: "versionId1" },
  { key: "key2.js", versionId: "versionId2" },
];

async function deleteMulti() {
  const result = await client.deleteMulti(names);
  console.log(result);
}

deleteMulti();
```

### Temporarily delete (add delete markers)

Pass an array of object key strings to `deleteMulti`. OSS adds a delete marker to each object. The objects can be restored later.

```
const names = ["key1.js", "key2.js"];

async function deleteMulti() {
  const result = await client.deleteMulti(names);
  console.log(result);
}

deleteMulti();
```

## Delete objects by name prefix

List all object versions matching a prefix, then delete each version.

```
const prefix = "test";

async function deleteByPrefix() {
  const list = await client.getBucketVersions({
    prefix: prefix,
  });

  for (let i = 0; i < list.objects.length; i++) {
    const obj = list.objects[i];
    await client.delete(obj.name, {
      versionId: obj.versionId,
    });
  }
}

deleteByPrefix();
```

This example deletes all versions of objects with the specified prefix. For buckets with many objects, consider paginating with the `keyMarker` and `versionIdMarker` parameters.

## References

-   [DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb)
    
-   [DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb)
