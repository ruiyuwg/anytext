ossfs 2.0 uses a configuration file to control how an Object Storage Service (OSS) bucket is mounted as a local file system. Use mount options to define your endpoint, credentials, caching behavior, permissions, and performance tuning. This topic lists all available mount options grouped by function.

## Basic configuration

Basic options specify which bucket to mount and how to authenticate. Every ossfs 2.0 configuration file must include an endpoint and bucket name, plus at least one set of credentials.

ossfs 2.0 supports three authentication methods:

-   **AccessKey pair** -- Provide an AccessKey ID and AccessKey secret directly.
    
-   **Elastic Compute Service (ECS) RAM role** -- Let ossfs 2.0 get temporary credentials from the instance metadata of an ECS instance.
    
-   **External credential process** -- Run an external command that returns credentials to stdout.
    

### Bucket settings

**Parameter**

**Required**

**Default**

**Version**

**Description**

`oss_endpoint`

Yes

None

v2.0.0 and later

The endpoint used to access the bucket.

`oss_bucket`

Yes

None

v2.0.0 and later

The name of the bucket to mount.

### Credential settings

**Parameter**

**Required**

**Default**

**Version**

**Description**

`oss_access_key_id`

Conditionally required

None

v2.0.0 and later

The AccessKey ID. Required for AccessKey authentication.

`oss_access_key_secret`

Conditionally required

None

v2.0.0 and later

The AccessKey secret. Required for AccessKey authentication.

`ram_role`

Conditionally required

None

v2.0.2 and later

The ECS RAM role name. Required for ECS RAM role authentication.

`credential_process`

Conditionally required

None

v2.0.5 and later

The command that runs an external process to return access credentials. Required for external process authentication.

## Common configuration

Common options control everyday behavior such as mounting a subfolder, caching metadata, logging, running mode, and file system permissions. Most workloads only need to adjust options in this section.

### Bucket prefix and region

**Parameter**

**Required**

**Default**

**Version**

**Description**

`oss_bucket_prefix`

No

Empty

v2.0.0 and later

Mounts a specific folder in the bucket instead of the root.

`oss_region`

No

Empty

v2.0.0 and later

The region ID of the bucket. Set this parameter to enable the OSS V4 signature algorithm. If not set, the V1 signature algorithm is used.

### Metadata cache

These options control how long ossfs 2.0 caches file and directory metadata locally. Longer cache durations reduce the number of requests sent to OSS but may return stale data.

**Parameter**

**Required**

**Default**

**Version**

**Description**

`attr_timeout`

No

60 (seconds)

v2.0.0 and later

The time-to-live (TTL) for the file metadata cache, in seconds.

`negative_timeout`

No

0 (seconds)

v2.0.0 and later

The TTL for the invalid directory entry cache, in seconds.

`readdirplus`

No

true

v2.0.0 and later

Enables the readdirplus feature. When enabled, ossfs 2.0 builds the file metadata cache synchronously during the readdir operation. This consumes more memory.

### Logging

**Parameter**

**Required**

**Default**

**Version**

**Description**

`log_level`

No

info

v2.0.0 and later

The log level. Valid values: `info`, `debug`.

`log_dir`

No

/tmp/ossfs2

v2.0.0 and later

The directory where log files are stored.

`log_file_max_size`

No

67108864 (bytes, 64 MB)

v2.0.3 and later

The maximum size of a single log file, in bytes.

`log_file_max_count`

No

8

v2.0.3 and later

The maximum number of log files to retain.

### Running mode

**Parameter**

**Required**

**Default**

**Version**

**Description**

`f`

No

false

v2.0.0 and later

Runs ossfs 2.0 in the foreground.

`d`

No

false

v2.0.0 and later

Runs ossfs 2.0 in the foreground and enables Filesystem in Userspace (FUSE) debug logs.

### Mount mode

**Parameter**

**Required**

**Default**

**Version**

**Description**

`ro`

No

false

v2.0.0 and later

Mounts the file system in read-only mode.

### Permission settings

These options set default ownership and permission bits for all files and directories under the mount point. They are useful when the mounting user differs from the users who need access.

**Parameter**

**Required**

**Default**

**Version**

**Description**

`gid`

No

GID of the mounting user

v2.0.1 and later

The group ID (GID) for all files and directories under the mount point.

`uid`

No

UID of the mounting user

v2.0.1 and later

The user ID (UID) for all files and directories under the mount point.

`file_mode`

No

0777

v2.0.1 and later

The permission bits for all files under the mount point.

`dir_mode`

No

0777

v2.0.1 and later

The permission bits for all directories under the mount point.

`allow_other`

No

true

v2.0.1 and later

Allows non-root users to access files under the mount point. Access is verified based on file permissions.

## Advanced configuration

Advanced options give you fine-grained control over network, upload, download prefetch, memory management, file verification, and file operations. Adjust these options only when the default behavior does not meet your performance or resource requirements.

### Network

**Parameter**

**Required**

**Default**

**Version**

**Description**

`bind_ips`

No

Empty

v2.0.3 and later

A comma-separated list of IP addresses to use as source IPs for OSS access. For example, `192.168.0.1,192.168.0.2`. Use this option to control which network interface card (NIC) sends traffic to OSS. Binding multiple NICs can increase total throughput.

### Upload

These options control how ossfs 2.0 uploads data to OSS through multipart upload. The value of `upload_buffer_size` serves as the part size and determines the maximum file size you can write.

**Parameter**

**Required**

**Default**

**Version**

**Description**

`upload_buffer_size`

No

8388608 (bytes, 8 MB)

v2.0.0 and later

The size of each multipart upload part, in bytes. This value also serves as the upload buffer size. The maximum writable file size equals `upload_buffer_size` x 10,000 (approximately 80 GB at the default value).

`upload_concurrency`

No

64

v2.0.0 and later

The concurrency for multipart uploads.

`sync_upload`

No

true

v2.0.0 and later

When enabled, the close operation blocks until the file is fully uploaded to OSS.

> To write files larger than 80 GB, increase `upload_buffer_size`. For example, set it to `104857600` (100 MB) to support files up to approximately 1 TB.

### Download and prefetch

These options control read-ahead (prefetch) behavior. ossfs 2.0 prefetches data in chunks to improve sequential read performance.

**Parameter**

**Required**

**Default**

**Version**

**Description**

`prefetch_concurrency`

No

256

v2.0.0 and later

The global concurrency for download prefetching across all file handles.

`prefetch_concurrency_per_file`

No

64

v2.0.0 and later

The concurrency for download prefetching per file handle.

`prefetch_chunk_size`

No

8388608 (bytes, 8 MB)

v2.0.0 and later

The size of each prefetch chunk, in bytes.

`prefetch_chunks`

No

0 (auto: 3x `prefetch_concurrency`)

v2.0.0 and later

The number of prefetch chunks to allocate. The default value `0` sets this automatically to three times the value of `prefetch_concurrency`. Set to `-1` to remove the prefetch memory limit, allowing each file handle to acquire as much memory as needed.

### Memory management

**Warning**

Without `total_mem_limit`, read and write operations can allocate up to approximately 8 GB of memory (calculated as `prefetch_chunk_size` x `prefetch_chunks` for reads, plus `upload_buffer_size` x `upload_concurrency` for writes). Make sure your system has enough memory to avoid out-of-memory (OOM) issues.

**Parameter**

**Required**

**Default**

**Version**

**Description**

`total_mem_limit`

No

0

v2.0.0 and later

The total memory limit for ossfs 2.0, in bytes. When set, upload and prefetch concurrency are automatically adjusted to stay within this limit. On systems with 16 GB of memory or less, the default is half of the system memory. On systems with more than 16 GB, there is no limit.

`max_inode_cache_count`

No

0

v2.0.4 and later

The number of cached metadata (inode) entries. `0` (default): the operating system manages cache eviction automatically. A positive integer: ossfs 2.0 actively evicts excess entries when the cache exceeds this count.

### File verification and metadata

**Parameter**

**Required**

**Default**

**Version**

**Description**

`enable_crc64`

No

true

v2.0.0 and later

Enables cyclic redundancy check (CRC-64) verification for file writes.

`close_to_open`

No

false

v2.0.0 and later

Enables close-to-open consistency semantics. When enabled, ossfs 2.0 sends a GetObjectMeta request each time a file is opened to retrieve the latest metadata. When disabled (default), ossfs 2.0 uses the metadata cache TTL to decide whether to fetch updated metadata from OSS.

> Enabling `close_to_open` significantly increases access latency when reading many small files because each open call triggers a request to OSS.

### File operations

**Parameter**

**Required**

**Default**

**Version**

**Description**

`rename_dir_limit`

No

2000000

v2.0.0 and later

The maximum total number of descendant files and directories in a source directory for a single rename operation. If the actual count exceeds this limit, the rename fails.

`enable_appendable_object`

No

false

v2.0.0 and later

When enabled, ossfs 2.0 uses the AppendObject operation for file writes. This mode supports reading a file while it is being written.

`appendable_object_autoswitch_threshold`

No

0 (bytes)

v2.0.5 and later

When `enable_appendable_object` is enabled, non-appendable objects that are smaller than or equal to this size (in bytes) are automatically converted to appendable objects when data is appended.

### Request timeout

**Parameter**

**Required**

**Default**

**Version**

**Description**

`oss_request_timeout_ms`

No

60000 (milliseconds)

v2.0.0 and later

The timeout for requests sent to OSS, in milliseconds.

### OSS response cache

These options control caching of OSS 404 (Not Found) responses. Caching 404 responses reduces repeated lookups for objects that do not exist, which can improve performance when listing large directories.

**Parameter**

**Required**

**Default**

**Version**

**Description**

`oss_negative_cache_timeout`

No

0 (seconds)

v2.0.2 and later

The TTL for cached OSS 404 response entries, in seconds.

`oss_negative_cache_size`

No

10000

v2.0.2 and later

The maximum number of cached OSS 404 response entries.

### In-memory read cache

**Parameter**

**Required**

**Default**

**Version**

**Description**

`memory_data_cache_size`

No

0

v2.0.5 and later

The amount of memory (in bytes) to pre-allocate for the in-memory read cache. Reduces prefetch amplification when reading files concurrently, and can improve performance when loading large models on multiple GPUs.

## References

-   For configuration file examples covering common ossfs 2.0 scenarios, see [Configure ossfs 2.0](/help/en/oss/developer-reference/configure-ossfs-2-0#ed50989660a4u).
    
-   For step-by-step mounting instructions, see [Mount a bucket to a local file system using ossfs 2.0](/help/en/oss/developer-reference/mount-buckets-using-ossfs-2-0#d6ba04c253j4x).
