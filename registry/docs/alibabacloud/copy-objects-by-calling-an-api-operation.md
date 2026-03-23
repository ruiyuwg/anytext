Copy objects within the same bucket or between buckets in the same region.

> For cross-bucket copies, we recommend using this command for objects smaller than 1 GB. For objects larger than 1 GB, use [upload-part-copy](/help/en/oss/developer-reference/upload-part-copy) instead.

## Usage notes

-   **Version recovery**: Copy a previous version of an object to the same bucket to restore it as the current version.
    
-   **Symbolic links**: Only the symbolic link itself is copied. The object it points to is not copied.
    
-   **Same-bucket copies**: No size limit applies.
    

## Prerequisites

Before you begin, ensure that you have:

-   Read permission on the source object
    
-   The required permissions on the destination bucket (see [Permissions](#section-a7cb0316))
    

## Syntax

```
ossutil api copy-object --bucket <dest-bucket> --key <dest-key> --copy-source /<source-bucket>/URL-encode(<source-key>) [flags]
```

To copy `reports/january.pdf` from `src-bucket` to `examplebucket`:

```
ossutil api copy-object --bucket examplebucket --key reports/january.pdf --copy-source /src-bucket/reports%2Fjanuary.pdf
```

> This command maps to the CopyObject API operation. For the full parameter reference, see [CopyObject](/help/en/oss/developer-reference/copyobject). For global flags, see [Command-line options](/help/en/oss/command-line-options#65785a4884d85).

## Parameters

**Parameter**

**Type**

**Description**

`--bucket`

string

Name of the destination bucket.

`--key`

string

Full path of the destination object.

`--copy-source`

string

Source object address in the format `/<bucket>/URL-encode(<key>)`. For example, to reference `reports/january.pdf` in `src-bucket`, use `/src-bucket/reports%2Fjanuary.pdf`. The object key must be URL-encoded. You must have read permission on the source object.

`--forbid-overwrite`

string

Whether to prevent overwriting an existing object with the same name at the destination.

`--copy-source-if-match`

string

Copy only if the source object's ETag matches this value. If not, OSS returns `412 Precondition Failed`.

`--copy-source-if-none-match`

string

Copy only if the source object's ETag does not match this value. If it matches, OSS returns `304 Not Modified`; otherwise, the copy proceeds and OSS returns `200 OK`.

`--copy-source-if-modified-since`

string

Copy only if the source object was modified after this time. If not modified, OSS returns `304 Not Modified`; otherwise, the copy proceeds and OSS returns `200 OK`.

`--copy-source-if-unmodified-since`

string

Copy only if the source object was not modified after this time. If modified, OSS returns `412 Precondition Failed`; otherwise, the copy proceeds and OSS returns `200 OK`.

`--metadata`

stringArray

User metadata for the destination object in `key=value` format. Custom metadata keys must use the `x-oss-meta-` prefix.

`--metadata-directive`

string

How to set metadata on the destination object.

`--object-acl`

string

Access control list (ACL) for the destination object.

`--server-side-encryption`

string

Server-side encryption method for the destination object.

`--server-side-encryption-key-id`

string

ID of the customer master key (CMK) managed by Key Management Service (KMS).

`--storage-class`

string

Storage class for the destination object.

`--tagging`

string

Tags for the destination object.

`--tagging-directive`

string

How to set tags on the destination object.

## Permissions

The required permissions depend on what you are copying.

**Basic copy (within or between buckets)**

**Action**

**Description**

`oss:GetObject`

Read the source object.

`oss:PutObject`

Write to the destination.

**Versioned objects** (when using `versionId`)

**Action**

**Description**

`oss:GetObjectVersion`

Required when specifying the source object version via `versionId`.

`oss:GetObjectVersionTagging`

Required when specifying tags of a specific version via `versionId`.

**Tagged objects** (when using `x-oss-tagging`)

**Action**

**Description**

`oss:GetObjectTagging`

Read tags from the source object.

`oss:PutObjectTagging`

Write tags to the destination object.

**KMS-encrypted destination** (when destination metadata includes `X-Oss-Server-Side-Encryption: KMS`)

**Action**

**Description**

`kms:GenerateDataKey`

Generate an encryption key.

`kms:Decrypt`

Decrypt the data key.

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default and must be granted the required actions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).

## Examples

All examples use `examplebucket` as the destination bucket and `exampleobject` as the destination key.

**Copy between buckets**

Copy `srcObject` from `srcBucket` to `examplebucket/exampleobject`:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /srcBucket/srcObject
```

**Copy within the same bucket**

Copy `srcObject` to `exampleobject` in the same bucket:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /examplebucket/srcObject
```

**Control output format**

Display results in JSON:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /examplebucket/srcObject --output-format json
```

Display results in YAML:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /examplebucket/srcObject --output-format yaml
```

**Prevent overwriting**

Fail the copy if an object with the same name already exists at the destination:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /examplebucket/srcObject --forbid-overwrite true
```

**Conditional copy by ETag**

Copy only if the source object's ETag equals `123`:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /examplebucket/srcObject --copy-source-if-match 123
```

**Conditional copy by modification time**

Copy only if the source object has not been modified since Mon, 11 May 2020 08:16:23 GMT:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /examplebucket/srcObject --copy-source-if-unmodified-since "Mon, 11 May 2020 08:16:23 GMT"
```

**Replace metadata**

Copy the object and replace its metadata with new values instead of inheriting from the source:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /examplebucket/srcObject --metadata-directive REPLACE --metadata user=aliyun --metadata email=ali***@aliyuncs.com
```

**Replace tags**

Copy the object and apply new tags to the destination:

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /examplebucket/srcObject --tagging-directive Replace --tagging "TagA=A&TagB=B"
```

**Set ACL and storage class**

Copy the object and set its ACL to private and storage class to Infrequent Access (IA):

```
ossutil api copy-object --bucket examplebucket --key exampleobject --copy-source /examplebucket/srcObject --object-acl private --storage-class IA
```
