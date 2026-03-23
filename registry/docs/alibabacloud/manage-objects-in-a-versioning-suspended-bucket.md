When you suspend versioning for a bucket, OSS stops creating new versions for subsequent uploads. Existing versions are not affected — you can still read and delete them by specifying their version IDs after versioning is suspended.

This topic describes how upload, download, and delete operations behave in a versioning-suspended bucket.

## Upload objects

Every object uploaded to a versioning-suspended bucket is stored as a version with ID `null`. Because each object can have at most one `null` version, the behavior depends on what already exists:

**Existing state**

**What happens after upload**

No existing version

OSS creates a new version with ID `null`.

Existing version with a non-null ID (for example, `111111`)

The upload becomes the current version (ID `null`); the previous version (`111111`) is retained.

Existing `null` version

The `null` version is overwritten — the version ID stays `null`, but the object content is replaced by the new upload.

**Scenario 1: No existing version**

When you use PutObject to upload an object to a versioning-suspended bucket, OSS stores the object as a `null` version.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8595688951/p40340.jpg)

**Scenario 2: Existing version with a non-null ID**

When the bucket contains a version with ID `111111` and you upload an object with the same name, the upload becomes the current version (ID `null`) and version `111111` is saved as a previous version.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8595688951/p40343.jpg)

**Scenario 3: Existing null version**

When the bucket already contains a `null` version and you upload an object with the same name, the existing `null` version is permanently overwritten.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8595688951/p40352.jpg)

To upload objects to a versioning-suspended bucket, use the ossutil [cp (upload objects)](/help/en/oss/developer-reference/cp-upload-file) command or one of the following SDKs: [OSS SDK for Java](/help/en/oss/developer-reference/upload-objects-8#concept-265516), [OSS SDK for PHP](/help/en/oss/developer-reference/upload-objects-11#concept-1961930), [OSS SDK for Node.js](/help/en/oss/developer-reference/upload-objects-13#concept-2436164), [OSS SDK for Python](/help/en/oss/developer-reference/upload-an-object#concept-265516), [OSS SDK for .NET](/help/en/oss/developer-reference/upload-objects-to-version-bucket-using-oss-sdk-for-csharp-v1#concept-2487109), [OSS SDK for Go](/help/en/oss/developer-reference/upload-objects-20#concept-265516), and [OSS SDK for C++](/help/en/oss/developer-reference/upload-an-object-1#concept-2331592).

## Download objects

Download behavior is determined by whether you specify a version ID in the GetObject request:

-   **No version ID specified:** OSS returns the current version. In a versioning-suspended bucket, the current version typically has ID `null`.
    
-   **Version ID specified:** OSS returns the exact version you request, regardless of whether it is the current version.
    

**Scenario 1: No version ID specified**

The current version (ID `null`) is returned.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8595688951/p40355.jpg)

**Scenario 2: Version ID specified**

The version with the specified ID (for example, `222222`) is returned.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9595688951/p40356.jpg)

To download objects from a versioning-suspended bucket, use the ossutil [cp (download objects)](/help/en/oss/developer-reference/cp-download-file) command or one of the following SDKs: [OSS SDK for Java](/help/en/oss/developer-reference/upload-objects-8#concept-265516), [OSS SDK for PHP](/help/en/oss/developer-reference/upload-objects-11#concept-1961930), [OSS SDK for Node.js](/help/en/oss/developer-reference/upload-objects-13#concept-2436164), [OSS SDK for Python](/help/en/oss/developer-reference/upload-an-object#concept-265516), [OSS SDK for .NET](/help/en/oss/developer-reference/upload-objects-to-version-bucket-using-oss-sdk-for-csharp-v1#concept-2487109), [OSS SDK for Go](/help/en/oss/developer-reference/upload-objects-20#concept-265516), and [OSS SDK for C++](/help/en/oss/developer-reference/upload-an-object-1#concept-2331592).

## Delete objects

A DeleteObject request in a versioning-suspended bucket follows these rules:

-   **No version ID specified:** OSS inserts a delete marker with ID `null` as the new current version. If the object already has a `null` version, that version is replaced by the delete marker (since an object can have only one `null` version). Previous non-null versions are retained.
    
-   **Version ID specified:** OSS permanently deletes that specific version.
    

**Scenario 1: Deleting an object whose current version ID is not null**

OSS adds a delete marker with ID `null` as the current version. The existing non-null version becomes a previous version.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9595688951/p40362.jpg)

**Scenario 2: Deleting an object whose current version ID is null**

OSS adds a delete marker with ID `null`, which overwrites the existing `null` version. Because an object can have only one `null` version, the original `null` version is replaced.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3157244371/p40363.jpg)

**Scenario 3: Deleting a specified version**

When you specify a version ID (for example, `333333`) in the DeleteObject request, that version is permanently deleted.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9595688951/p40360.jpg)

To delete objects from a versioning-suspended bucket, use the ossutil [rm](/help/en/oss/developer-reference/rm#concept-303805) command or one of the following SDKs: [OSS SDK for Java](/help/en/oss/developer-reference/upload-objects-8#concept-265516), [OSS SDK for PHP](/help/en/oss/developer-reference/upload-objects-11#concept-1961930), [OSS SDK for Node.js](/help/en/oss/developer-reference/upload-objects-13#concept-2436164), [OSS SDK for Python](/help/en/oss/developer-reference/upload-an-object#concept-265516), [OSS SDK for .NET](/help/en/oss/developer-reference/upload-objects-to-version-bucket-using-oss-sdk-for-csharp-v1#concept-2487109), [OSS SDK for Go](/help/en/oss/developer-reference/upload-objects-20#concept-265516), and [OSS SDK for C++](/help/en/oss/developer-reference/upload-an-object-1#concept-2331592).
