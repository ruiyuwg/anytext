Use the `cp` command to download objects from Object Storage Service (OSS) to your local machine. Supports single-object downloads, batch recursive downloads, range downloads, speed limiting, filtered downloads, and versioned-object downloads.

## Usage notes

Starting from ossutil 1.6.16, `ossutil` works as the binary name on all operating systems. Earlier versions require an OS-specific binary name. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).

## Permissions

By default, an Alibaba Cloud account has full permissions on its resources. A Resource Access Management (RAM) user or RAM role has no permissions by default. Grant permissions using a [RAM policy](/help/en/oss/ram-policy-overview/) or a [bucket policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API action**

**Description**

`oss:GetObject`

Required to download an object.

`oss:GetObjectVersion`

Optional. Required to download a specific version using `--version-id`.

`kms:GenerateDataKey`

Optional. Required if the object is server-side encrypted with KMS.

`kms:Decrypt`

Optional. Required if the object is server-side encrypted with KMS.

`oss:ListObjects`

Optional. Required for batch downloads (recursive operations).

## Syntax

```
ossutil cp <cloud_url> <file_url> [options]
```

`cloud_url` is the OSS source path (`oss://bucket[/prefix]`, for example `oss://examplebucket/examplefile.txt`).

`file_url` is the local destination path. To save to a directory, end the path with a separator (`/` on Linux, `\` on Windows). For example: `/localfolder/` or `D:\localfolder\`.

## Options

### Basic download options

**Option**

**Description**

`-r, --recursive`

Downloads all objects under the specified prefix. Without this option, only the single specified object is downloaded.

`-f, --force`

Forces the operation without prompting for confirmation.

`-u, --update`

Downloads an object only if the local file doesn't exist or the OSS object has a later last-modified time.

`--only-current-dir`

Downloads only objects in the current directory, ignoring subdirectories.

`--encoding-type`

Encoding type for object names. Set to `url` to URL-encode names.

`--disable-crc64`

Disables CRC-64 verification. CRC-64 is enabled by default for all transfers.

`--payer`

Payment method for the request. Set to `requester` to enable requester-pays.

### Filter options

**Option**

**Description**

`--include`

Downloads only objects matching the specified pattern. For details, see [include and exclude options](/help/en/oss/developer-reference/view-options#d6b2c8e04afii).

`--exclude`

Skips objects matching the specified pattern. For details, see [include and exclude options](/help/en/oss/developer-reference/view-options#d6b2c8e04afii).

`--start-time`

A UNIX timestamp. Objects with a last-modified time earlier than this value are skipped. Requires ossutil 1.7.18 or later.

`--end-time`

A UNIX timestamp. Objects with a last-modified time later than this value are skipped. If both `--start-time` and `--end-time` are set, only objects modified within that range are downloaded. Requires ossutil 1.7.18 or later.

### Performance options

**Option**

**Description**

`-j, --jobs`

Number of concurrent tasks for multi-object operations. Default: `3`. Value range: 1–10,000.

`--parallel`

Number of concurrent tasks for single-object operations. Value range: 1–10,000. If not set, ossutil determines the value based on operation type and object size.

`--maxdownspeed`

Maximum download speed in KB/s. Default: `0` (no limit).

`--snapshot-path`

Directory to store snapshot information for incremental downloads. On subsequent runs with this option, ossutil reads the snapshot to skip already-downloaded objects.

### Advanced options

**Option**

**Description**

`--range`

Downloads a specific byte range of the object. Byte numbering is zero-based. Formats: `3-9` (bytes 3 to 9, inclusive), `3-` (byte 3 to end), `-9` (bytes 0 to 9).

`--bigfile-threshold`

Size threshold in bytes for resumable download. Default: 100 MB. Value range: 0–9,223,372,036,854,775,807.

`--part-size`

Part size in bytes for resumable downloads. By default, ossutil calculates an appropriate size. Value range: 1–9,223,372,036,854,775,807.

`--checkpoint-dir`

Directory to store checkpoint files for resumable downloads. On failure, ossutil creates a `.ossutil_checkpoint` directory here. The directory is deleted after a successful download. Make sure the directory can be deleted.

`--disable-ignore-error`

Causes the command to stop on the first error in batch operations instead of skipping it.

`--version-id`

Downloads a specific version of an object. For use with versioning-enabled buckets only. To enable versioning, see [bucket-versioning (Versioning)](/help/en/oss/developer-reference/bucket-versioning#concept-610185).

`--partition-download`

Downloads a partition of the object. Format: `<partition number>:<total partitions>`. For example, `1:5` downloads partition 1 of 5. Partition numbers are 1-based. Use multiple ossutil commands in parallel, each with a different partition number, to split and download a large object concurrently.

`--meta`

Sets metadata on the downloaded object. Format: `header:value#header:value`. Example: `Cache-Control:no-cache#Content-Encoding:gzip`. For details, see [set-meta (Manage object metadata)](/help/en/oss/developer-reference/set-meta#concept-303809).

`--acl`

Access control list (ACL) for the object. Valid values: `default` (inherits the bucket ACL), `private`, `public-read` (all users including anonymous users have read access — this can lead to data leaks and increased fees, use with caution), `public-read-write` (anyone including anonymous users can read and write — this can lead to data leaks, increased fees, and potential legal liabilities, avoid unless required for specific use cases).

For additional common options, see [Common options](/help/en/oss/developer-reference/view-options#section-yhn-ko6-gqj).

## Performance tuning

For batch transfers of large objects, actual concurrency = `-j` (jobs) x `--parallel`. Tune both options based on your machine's network, memory, and CPU resources.

-   If resources are constrained, keep concurrency below 100.
    
-   Setting concurrency too high causes thread-switching overhead and can produce EOF errors. Start with a low value and increase gradually to find the optimal setting.
    

## Examples

All examples use a Linux system. Adjust paths and separators for your OS.

Assumptions:

-   Bucket: `examplebucket`
    
-   OSS directory: `destfolder/`
    
-   Local directory: `localfolder/`
    

### Download a single object

Download an object and keep its original name:

```
ossutil cp oss://examplebucket/destfolder/examplefile.txt localfolder/
```

Download an object and rename it to `example.txt`:

```
ossutil cp oss://examplebucket/destfolder/examplefile.txt localfolder/example.txt
```

### Batch download

> Before running a large batch download, use the [`ls`](/help/en/oss/developer-reference/ls) command to confirm which objects will be affected.

Use `-r` to download `destfolder` and all its subdirectories:

```
ossutil cp -r oss://examplebucket/destfolder/ localfolder/
```

Use `--only-current-dir` to download only the objects in `destfolder`, skipping any subdirectories:

```
ossutil cp -r oss://examplebucket/destfolder/ localfolder/ --only-current-dir
```

Use `-u` to skip objects that already exist locally with the same last-modified time (incremental download):

```
ossutil cp -r -u oss://examplebucket/destfolder/ localfolder/
```

### Download filtered objects

Download all objects in `destfolder` except JPG files:

```
ossutil cp -r oss://examplebucket/destfolder/ localfolder/ --exclude "*.jpg"
```

Download objects whose names contain `abc` but are not JPG or TXT files:

```
ossutil cp -r oss://examplebucket/destfolder/ localfolder/ --include "*abc*" --exclude "*.jpg" --exclude "*.txt"
```

### Limit download speed

Limit download speed to 1 MB/s (1,024 KB/s):

```
ossutil cp -r oss://examplebucket/destfolder/ localfolder/ --maxdownspeed 1024
```

### Range download

Download bytes 10 to 20 of an object:

```
ossutil cp oss://examplebucket/destfolder/examplefile.txt localfolder/ --range 10-20
```

### Download objects within a time range

Download only objects in `destfolder` last modified between 10:09:18 and 12:55:58 on October 31, 2023 (UTC+8):

```
ossutil cp -r oss://examplebucket/destfolder/ localfolder/ --start-time 1698718158 --end-time 1698728158
```

### Download a specific version

First, get all version IDs for the object:

```
ossutil ls --all-versions oss://examplebucket/test.jpg
```

Then download the specific version:

```
ossutil cp oss://examplebucket/test.jpg localfolder/ --version-id CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3MDRk
```

> `--version-id` requires a versioning-enabled bucket. To enable versioning, see [bucket-versioning (Versioning)](/help/en/oss/developer-reference/bucket-versioning#concept-610185).

### Download objects and generate snapshot information

Use `--snapshot-path` to record which objects were downloaded. Subsequent downloads with the same option skip already-downloaded objects:

```
ossutil cp -r oss://examplebucket/destfolder/ localfolder/ --snapshot-path /path/to/snapshot/dir/
```

For details on how snapshot information works, see [Upload objects and generate snapshots](/help/en/oss/developer-reference/upload-objects-6#title-z9p-vdz-ene).

### Cross-account or cross-region download

Use the `-e`, `-i`, and `-k` options to download from a bucket owned by another account in the China (Shanghai) region:

```
ossutil cp oss://examplebucket/exampleobject.txt localfolder/ -e oss-cn-shanghai.aliyuncs.com -i <yourAccessKeyID> -k <yourAccessKeySecret>
```

> Specify the endpoint for the region where the bucket is located. For a full list of endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
