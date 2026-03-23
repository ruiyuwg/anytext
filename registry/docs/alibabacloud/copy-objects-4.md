Use `ossutil cp` to copy objects between buckets in the same region, or between directories within the same bucket.

> `ossutil cp` does not delete objects at the destination. To mirror a source directory to a destination and remove objects that no longer exist at the source, use the `sync` command instead.

## Prerequisites

Before you begin, ensure that you have:

-   ossutil 1.6.16 or later installed. For earlier versions, rename the binary to match your operating system before use. See [Command-line tool ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    
-   The required permissions granted to your RAM user or RAM role via a [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket Policy](/help/en/oss/ram-policy-overview/).
    

### Required permissions

**API action**

**When required**

`oss:GetObject`

Always — copying objects between buckets in the same region

`oss:PutObject`

Always

`oss:GetObjectVersion`

Copying a specific version of an object

`oss:GetObjectTagging`

Copy operation involves object tagging

`oss:PutObjectTagging`

Copy operation involves object tagging

`oss:GetObjectVersionTagging`

Copy operation involves tags of a specific object version

`kms:GenerateDataKey`

Copy operation uses server-side encryption with KMS

`kms:Decrypt`

Copy operation uses server-side encryption with KMS

## Limitations

-   Cross-account and cross-region copy are not supported. Use [Data Online Migration](/help/en/oss/use-data-online-migration-to-migrate-data-between-accounts#task-2134221) for those scenarios.
    
-   Only complete objects can be copied. Copying individual parts is not supported.
    

## Command syntax

```
ossutil cp <source-cloud-url> <destination-cloud-url> [options]
```

Both `source-cloud-url` and `destination-cloud-url` use the format `oss://bucketname/objectname`.

### Options

Options are grouped by purpose below.

#### Basic options

**Option**

**Description**

`-r, --recursive`

Copy all matching objects in the source path recursively.

`-f, --force`

Overwrite existing objects without a confirmation prompt.

`-u, --update`

Copy only if the destination object does not exist or the source object is newer. Use this for incremental copy.

`--only-current-dir`

Copy only objects in the current directory; skip subdirectories.

`--disable-ignore-error`

Stop on error during batch operations instead of skipping.

`--encoding-type`

URL-encode object names. Set to `url`. Default: not encoded.

`--version-id`

Copy a specific version of an object. Requires versioning to be enabled on the source bucket.

`--payer`

Set to `requester` to enable pay-by-requester mode.

#### Filter options

**Option**

**Description**

`--include`

Include only objects whose names match the specified pattern.

`--exclude`

Exclude objects whose names match the specified pattern.

`--start-time`

UNIX timestamp. Objects last modified before this time are skipped. Requires ossutil 1.7.18 or later.

`--end-time`

UNIX timestamp. Objects last modified after this time are skipped. Requires ossutil 1.7.18 or later.

> When both `--start-time` and `--end-time` are set, only objects last modified within the specified range are copied.

#### Performance options

**Option**

**Description**

`-j, --jobs`

Number of concurrent tasks for batch operations. Default: `3`. Valid values: 1–10000.

`--parallel`

Number of concurrent tasks for a single object. Default: determined by ossutil based on object size. Valid values: 1–10000.

`-bigfile-threshold`

Size threshold for resumable copy, in bytes. Default: 100 MB. Valid values: 0–9223372036854775807.

`--part-size`

Part size for resumable copy, in bytes. Default: calculated by ossutil based on object size. Valid values: 1–9223372036854775807.

`--checkpoint-dir`

Directory for resumable copy checkpoint data. Default: `.ossutil_checkpoint`. Deleted automatically on success.

`--disable-crc64`

Disable CRC-64 verification. CRC-64 is enabled by default.

**Tuning concurrency:** For large batch transfers, effective concurrency equals `--jobs` multiplied by `--parallel`. If network, memory, or CPU resources are constrained, keep concurrency below 100. Excessively high concurrency can cause EOF errors from thread-switching overhead and resource contention. Start low during stress testing and increase incrementally to find the optimal value.

#### Metadata and encryption options

**Option**

**Description**

`--meta`

Set object metadata. Format: `header:value#header:value`. Example: `Cache-Control:no-cache#Content-Encoding:gzip`.

`--acl`

Set the access control list (ACL) of the destination object. Valid values: `default` (inherits bucket ACL), `private`, `public-read`, `public-read-write`.

`--tagging`

Add or update object tags. Separate multiple tags with `&`. Example: `"key1=value1&key2=value2"`.

For other common options, see [Common options](/help/en/oss/developer-reference/view-options#section-yhn-ko6-gqj).

## Examples

The following examples assume a Linux environment and use these resources:

**Resource**

**Name**

Source bucket

`examplebucket1`

Source directory 1

`srcfolder1`

Source directory 2

`srcfolder2`

Destination bucket

`examplebucket2`

Destination directory

`desfolder`

> **Tip:** On Windows, replace single quotes with double quotes in path arguments when using cmd.exe.

### Copy a single object

Copy an object from one directory to another within the same bucket and rename it.

```
ossutil cp oss://examplebucket1/srcfolder1/examplefile.txt oss://examplebucket1/srcfolder2/example.txt
```

### Copy objects in a batch

Use `-r` to copy multiple objects recursively.

**How trailing slashes affect the output path:**

When the source path does not end with `/`, ossutil copies the matching prefix and preserves the directory name in the destination.

```
ossutil cp oss://examplebucket1/srcfolder1 oss://examplebucket2 -r
```

Result — the destination contains:

```
srcfolder1/exampleobject1.txt
srcfolder1/exampleobject2.png
srcfolder1/dir1/
srcfolder1/dir1/exampleobject3.jpg
srcfolder1/dir2/
srcfolder1/dir2/exampleobject4.jpg
```

When the source path ends with `/`, ossutil copies only the contents, without the directory name.

```
ossutil cp oss://examplebucket1/srcfolder1/ oss://examplebucket2 -r
```

Result — the destination contains:

```
exampleobject1.txt
exampleobject2.png
dir1/
dir1/exampleobject3.jpg
dir2/
dir2/exampleobject4.jpg
```

### Copy incremental objects

Use `--update` to skip objects that already exist at the destination and are up to date. This is useful for retrying a failed batch copy without re-copying objects that already succeeded.

```
ossutil cp oss://examplebucket1/srcfolder1/ oss://examplebucket2/path2/ -r --update
```

### Copy objects in the current directory only

Skip subdirectories and copy only the objects directly under `srcfolder1`.

```
ossutil cp oss://examplebucket1/srcfolder1/ oss://examplebucket1/srcfolder2/ --only-current-dir -r
```

### Copy objects within a time range

Copy only objects last modified between 10:09:18 and 12:55:58 on October 31, 2023 (UTC+8).

```
ossutil cp -r oss://examplebucket1/srcfolder1/ oss://examplebucket2/path2/ --start-time 1698718158 --end-time 1698728158
```

### Copy objects matching a pattern

Use `--include` and `--exclude` to filter by file name pattern.

Copy all objects except those in JPG format:

```
ossutil cp oss://examplebucket1/srcfolder1/ oss://examplebucket2/desfolder/ --exclude "*.jpg" -r
```

Copy objects whose names contain `abc` but are not in JPG or TXT format:

```
ossutil cp oss://examplebucket1/srcfolder1/ oss://examplebucket2/desfolder/ --include "*abc*" --exclude "*.jpg" --exclude "*.txt" -r
```

### Copy an object and update its metadata

Use `--meta` to set or update object metadata during copy. The format is `header:value#header:value`.

```
ossutil cp oss://examplebucket1/examplefile.txt oss://examplebucket1/ --meta=Cache-Control:no-cache
```

### Copy an object in pay-by-requester mode

```
ossutil cp oss://examplebucket1/examplefile.txt oss://examplebucket2/desfolder/ --payer=requester
```

### Change the storage class of an object

Use `--meta` with `X-oss-Storage-Class` to change the storage class by overwriting the object in place. Supported storage classes:

**Value**

**Storage class**

`Standard`

Standard

`IA`

Infrequent Access

`Archive`

Archive Storage

`ColdArchive`

Cold Archive

`DeepColdArchive`

Deep Cold Archive

For more information about storage classes, see [Storage classes](#93866710b6kvz).

**Important**

By default, `--meta` overwrites all existing custom object metadata. To preserve existing metadata while changing the storage class, include `x-oss-metadata-directive:COPY` in the same `--meta` value.

#### Overwrite existing metadata

Change the storage class of a single object to Archive Storage:

```
ossutil cp oss://examplebucket1/srcfolder1/examplefile.txt oss://examplebucket1/srcfolder1/examplefile.txt --meta X-oss-Storage-Class:Archive
```

Change the storage class of all objects in a folder to Standard:

```
ossutil cp oss://examplebucket1/srcfolder1/ oss://examplebucket1/srcfolder1/ --meta X-oss-Storage-Class:Standard -r
```

#### Preserve existing metadata

Retain the metadata of a single object while changing its storage class:

```
ossutil cp oss://examplebucket1/srcfolder1/examplefile.txt oss://examplebucket1/srcfolder1/examplefile.txt --meta x-oss-metadata-directive:COPY
```

Retain the metadata of all objects in a folder:

```
ossutil cp oss://examplebucket1/srcfolder1/ oss://examplebucket1/srcfolder1/ --meta x-oss-metadata-directive:COPY -r -f
```

**Important**

-   PUT requests are charged based on the source storage class and billed to the destination bucket.
    
-   Converting an object to Infrequent Access, Archive Storage, Cold Archive, or Deep Cold Archive before its minimum storage duration is met incurs an early deletion fee. See [Storage fees](/help/en/oss/storage-fees#concept-2558327).
    
-   To convert an object from Archive Storage, Cold Archive, or Deep Cold Archive to Standard or Infrequent Access, restore the object first using the [restore](/help/en/oss/developer-reference/restore#concept-303811) command. Exception: if [real-time access of Archive objects](/help/en/oss/user-guide/archive-direct-reading#main-2356182) is enabled, Archive Storage objects can be converted without restoring.
    
-   For objects larger than 100 MB, ossutil automatically calculates a suitable part size. To override, use `--part-size`. The total number of parts must not exceed 10,000.
    

### Add or update object tags

Use `--tagging` to set tags during a copy. Separate multiple tags with `&`.

```
ossutil cp oss://examplebucket1/examplefile.txt oss://examplebucket1/ --tagging "abc=1&bcd=2&……"
```

For more information, see [object-tagging](/help/en/oss/developer-reference/object-tagging-10#concept-1614441).

### Copy an object with server-side encryption

For more information about server-side encryption, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8#concept-lqm-fkd-5db).

Encrypt with AES256:

```
ossutil cp oss://examplebucket1/examplefile.txt oss://examplebucket1/srcfolder2/ --meta=x-oss-server-side-encryption:AES256
```

Encrypt with KMS:

```
ossutil cp oss://examplebucket1/examplefile.txt oss://examplebucket2/desfolder/ --meta=x-oss-server-side-encryption:KMS
```

**Important**

KMS encryption causes OSS to call KMS to generate a master key, which incurs KMS API call fees. See [KMS billing](/help/en/kms/key-management-service/support/billing-of-kms#section-br1-k3j-kfb).

Encrypt with KMS and specify a customer master key (CMK) ID:

```
ossutil cp oss://examplebucket1/examplefile.txt oss://examplebucket2/desfolder/ --meta=x-oss-server-side-encryption:KMS#x-oss-server-side-encryption-key-id:7bd6e2fe-cd0e-483e-acb0-f4b9e1******
```

-   Copy a file and specify the CMK ID for KMS encryption.
    
    ```
    ossutil cp oss://examplebucket1/examplefile.txt oss://examplebucket2/desfolder/ --meta=x-oss-server-side-encryption:KMS#x-oss-server-side-encryption-key-id:7bd6e2fe-cd0e-483e-acb0-f4b9e1******
    ```
    

### Restore a previous version of an object

In versioning-enabled buckets, overwritten and deleted objects are preserved as historical versions. Use `--version-id` to copy a specific version, which overwrites the current version.

First, retrieve all version IDs using the [ls --all-versions](/help/en/oss/developer-reference/ls#li-l04-kkr-d01) command. Then copy the target version:

```
ossutil cp oss://examplebucket1/examplefile.txt oss://examplebucket2/ --version-id CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3MDRk
```

> `--version-id` requires versioning to be enabled on the bucket. See [bucket-versioning](/help/en/oss/developer-reference/bucket-versioning#concept-610185).

### Copy objects across accounts

Use the `-e`, `-i`, and `-k` options to supply the endpoint and credentials of the source account.

**Syntax:**

```
ossutil cp oss://<source-bucket>/<source-object> oss://<destination-bucket> -e <endpoint> -i <AccessKeyID> -k <AccessKeySecret>
```

**Example** — copy `srcobject.png` from `examplebucket` in the China (Shanghai) region belonging to another Alibaba Cloud account to `destbucket`:

```
ossutil cp oss://examplebucket/srcobject.png oss://destbucket -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

> Use the endpoint for the region where the source bucket is located. See [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

**Important**

Providing an AccessKey directly on the command line is a security risk. For automated or long-running tasks, create a RAM role for the source account and grant the destination account permission to assume that role.

## What's next

-   [sync (Synchronize objects)](/help/en/oss/developer-reference/sync/) — mirror a source directory to a destination, deleting objects that no longer exist at the source.
    
-   [set-meta (Manage object metadata)](/help/en/oss/developer-reference/set-meta#concept-303809) — update metadata without copying objects.
    
-   [restore (Restore an object)](/help/en/oss/developer-reference/restore#concept-303811) — restore Archive Storage, Cold Archive, or Deep Cold Archive objects before converting to a warmer storage class.
    
-   [object-tagging](/help/en/oss/developer-reference/object-tagging-10#concept-1614441) — manage object tags.
