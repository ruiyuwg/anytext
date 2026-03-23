ossfs exposes options through the standard FUSE `-o` flag. To see all supported options for your installed version, run:

```
./ossfs -h
```

Run this from the directory containing the ossfs binary. The default installation path is `/usr/local/bin/`.

## Option format

```
-o option_name[=option_value]
```

Most options follow the `-ooption_name=option_value` or `-o option_name=option_value` format. Options that act as switches take no value — just include the flag:

```
# Specify UID, GID, and endpoint at mount time
ossfs bucket_name mount_point -ourl=endpoint -ouid=uid -ogid=gid
```

## Common options

ossfs is built on FUSE (Filesystem in Userspace) and supports both its own options and standard FUSE options. The following options cover the most frequent configuration needs.

### url

Specifies the bucket endpoint. If you omit the protocol, ossfs uses HTTP by default.

```
-ourl=oss-cn-hangzhou.aliyuncs.com
-ourl=http://oss-cn-hangzhou.aliyuncs.com
-ourl=https://oss-cn-hangzhou.aliyuncs.com
```

### passwd\_file (default: /etc/passwd-ossfs)

Specifies the file that stores the AccessKey pair for the bucket. The file format is:

```
${bucket}:${access-key-id}:${access-key-secret}
```

File permissions must be set correctly:

**Key file path**

**Required permissions**

`/etc/passwd-ossfs`

640

Any other path

600

```
# Write the AccessKey pair to the default location
echo bucket-test:yourAccessKeyID:yourAccessKeySecret > /etc/passwd-ossfs
chmod 640 /etc/passwd-ossfs

# Use a custom key file path
echo bucket-test:yourAccessKeyID:yourAccessKeySecret > /passwd-path/passwd-ossfs
chmod 600 /passwd-path/passwd-ossfs
-opasswd_file=/passwd-path/passwd-ossfs
```

### max\_stat\_cache\_size (default: 100,000)

Controls how many file metadata entries ossfs caches in memory. The default caches 100,000 entries, consuming roughly 40 MB of extra memory.

-   **Large directories**: Increase this value to speed up `ls` operations.
    
-   **Disable caching**: Set to `0`.
    

```
ossfs bucket_name mount_point -omax_stat_cache_size=0
```

### allow\_other

Opens the mount point to all users. Without this option, only the user who mounted the bucket (typically root) can access the mount directory.

> `allow_other` grants access to the directory, not to individual files. Manage file permissions separately:

> For individual files, use `chmod`.

> To apply uniform permissions to all files, use the `umask` option.

Only root can set `-oallow_other`. The option takes no value:

```
ossfs bucket_name mount_point -ourl=endpoint -oallow_other
```

### dbglevel (default: error)

Sets the ossfs log level. Logs are written to the system log by default (CentOS: `/var/log/messages`; Ubuntu: `/var/log/syslog`).

**Level**

**When to use**

`critical`

Capture only fatal errors that stop ossfs from functioning

`error`

Default — log errors that prevent normal operation

`warn`

Log recoverable issues, such as requests that triggered automatic retries

`info`

Log general activity including mount and unmount events. Equivalent to the `-d` flag

`debug`

Log all internal operations. Use when reproducing intermittent issues or when `warn` does not provide enough context

```
ossfs bucket_name mount_point -odbglevel=info
```

### logfile

Redirects logs to a file instead of the system log.

**Important**

ossfs does not rotate log files automatically. Monitor disk space when this option is set.

### f

Runs ossfs in the foreground instead of as a daemon process, writing logs to the terminal. Use this option when debugging mount issues.

```
ossfs bucket_name mount_point -f
```

### d

Enables logging at the `info` level. This option is also passed to FUSE. Equivalent to `-odbglevel=info`.

```
ossfs bucket_name mount_point -d
```

## Full option reference

> The following option descriptions apply to ossfs 1.91.2 and later. Some options may not be supported or may have different default values in other versions. To check your version, run `./ossfs --version` from the ossfs directory.

### ossfs options

#### Connection and authentication

**Option**

**Default**

**Description**

`url`

—

Bucket endpoint. Omitting the protocol uses HTTP.

`passwd_file`

`/etc/passwd-ossfs`

File storing the AccessKey pair.

`connect_timeout`

300 seconds

Connection timeout.

`readwrite_timeout`

120 seconds

Timeout for read or write requests.

`retries`

2

Number of retry attempts after a request failure.

`public_bucket`

`0`

Set to `1` to access the bucket anonymously. Valid only for buckets with a public-read-write ACL.

`ram_role`

—

Use a RAM role to authenticate. When set, the AccessKey pair in the key file is ignored.

`no_check_certificate`

(certificate verification enabled)

Disables server certificate verification. HTTPS only. Takes no value: `-ono_check_certificate`.

#### Performance and metadata caching

**Option**

**Default**

**Description**

`max_stat_cache_size`

100,000 (~40 MB)

Number of file metadata entries to cache. Set to `0` to disable.

`stat_cache_expire`

900 seconds

How long cached metadata entries remain valid.

`readdir_optimize`

disabled

When enabled, ossfs skips HeadObject requests for file metadata during `ls`, sending them only for zero-byte files. However, some HeadObject requests may still occur for reasons such as permission checks. Reduces API calls in read-heavy workloads. Add `-oreaddir_optimize` to enable.

`multireq_max`

20

Maximum concurrent metadata requests during file listing.

`parallel_count`

5

Number of concurrent parts for multipart uploads.

`multipart_size`

10 MB

Size of each part in a multipart upload. The default supports files up to 100 GB (10,000 parts x 10 MB). Increase this value to support larger files.

`notsup_compat_dir`

—

Restricts directory recognition to `dir/` only, skipping `dir` and `dir_$folder$`. Reduces server interactions. Add `-onotsup_compat_dir` to enable.

#### Direct read mode

Direct read streams data from OSS without caching to local disk. Enable it when local disk space is limited or you want to avoid write-through overhead.

> If ossfs detects a write, rename, or truncate on a file in direct read mode, that file exits direct read mode until it is reopened.

**Option**

**Default**

**Description**

`direct_read`

disabled

Enables direct read mode. Add `-odirect_read` to enable.

`direct_read_chunk_size`

4 MB

Amount of data fetched per read request. Range: 1–32 MB.

`direct_read_prefetch_thread`

64

Maximum concurrent prefetch threads.

`direct_read_prefetch_chunks`

32

Number of chunks prefetched into memory for sequential reads.

`direct_read_prefetch_limit`

1024 MB

Total memory limit for prefetched data.

#### Storage class

**Option**

**Default**

**Description**

`storage_class`

`Standard`

Storage class for objects written to OSS. Valid values: `Standard`, `IA` (Infrequent Access), `Archive`. For more information, see [Storage classes](/help/en/oss/user-guide/overview-53/#concept-fcn-3xt-tdb).

`listobjectsv2`

—

Use when versioning is enabled on the bucket to list objects correctly. Add `-olistobjectsv2` to enable.

`enable_content_md5`

disabled

Sets the `Content-MD5` header on uploads for integrity verification. Add `-oenable_content_md5` to enable.

#### Logging

**Option**

**Default**

**Description**

`dbglevel`

`error`

Log level. Supported values (least to most verbose): `critical`, `error`, `warn`, `info`, `debug`.

`logfile`

system log

Path to a custom log file. If unset, logs go to the system log (CentOS: `/var/log/messages`; Ubuntu: `/var/log/syslog`). **Log files are not rotated automatically — monitor disk space.**

`curldbg`

disabled

Enables libcurl-level logging for diagnosing HTTP issues. Add `-ocurldbg` to enable.

### Data cache options

For details on how data caching works in ossfs, see [Data caching](/help/en/oss/developer-reference/ossfs-data-cache#d8d6f7071crb1).

**Option**

**Default**

**Description**

`use_cache`

disabled

Enables data caching and sets the cache directory. Example: `-ouse_cache=/tmp/your_foldername`. Cannot be used with `tmpdir`.

`tmpdir`

`/tmp`

Temporary data cache directory when `use_cache` is not set. Cannot be used with `use_cache`. Example: `-otmpdir=/data/your_foldername`.

`ensure_diskfree`

no space reserved

Minimum free disk space to maintain, in MB. Prevents the cache from filling the disk. Example: `-oensure_diskfree=1024` reserves 1 GB.

`free_space_ratio`

—

Minimum free disk space to maintain, as a percentage of total disk size. Example: `-ofree_space_ratio=20` on a 50 GB disk reserves 10 GB.

`max_dirty_data`

5120 MB

When a file being written exceeds this size, ossfs uploads the intermediate file before the file is closed. If bucket versioning is enabled, intermediate uploads create additional object versions — increase this value to reduce how often intermediate uploads occur.

`del_cache`

disabled

Clears cached files in the `use_cache` directory during mount and umount. Add `-odel_cache` to enable.

`disable_noobj_cache`

enabled (added in 1.91.6)

By default, ossfs caches the non-existence of objects to avoid redundant HeadObject requests. Add `-o disable_noobj_cache` to disable this behavior.

### FUSE options

**Option**

**Default**

**Description**

`allow_other`

—

Allows all users to access the mount directory. Only root can set this option. Takes no value: `-oallow_other`.

`uid`

—

User ID (UID) of the folder owner.

`gid`

—

Group ID (GID) of the folder owner.

`umask`

Version-dependent (see below)

Permission mask for files and folders in the mount target. Example: `-oumask=007` sets permissions to 770; `-oumask=077` sets permissions to 700.

**Default permissions by ossfs version:**

**Version**

**Files**

**Folders**

1.91.\*

0640

0750

1.80.\*

0777

0777
