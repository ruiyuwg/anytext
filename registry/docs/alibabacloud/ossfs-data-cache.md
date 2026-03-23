ossfs data cache reduces read latency and OSS API request volume by storing frequently accessed objects on the local disk. Once an object is cached, subsequent reads come from the local disk rather than OSS.

**Important**

Cached data may be stale. Do not enable ossfs data cache when your workload requires up-to-date reads.

## When to use data cache

Data cache works best when your workload reads the same small objects repeatedly and your local disk has enough free space to hold the hot dataset. If your workload reads large objects sequentially or requires strong read-after-write consistency across multiple clients, see [When not to use data cache](#section-439d6d52).

## How it works

By default, ossfs creates a temporary file named `tmpfile` under `/tmp` each time you open an object. The file is invisible to users and is deleted when all file handles are closed, so every subsequent open triggers a fresh download from OSS.

When data cache is enabled, ossfs writes the object to a persistent cache file on first read. Later reads return data directly from that file without contacting OSS. The cache file persists after the file is closed, so it is available the next time the object is opened.

The table below compares both modes.

**Default mode (no data cache)**

**Data cache mode**

**Read**

Downloads from the bucket to a temporary file on each open; deletes the file when all handles close.

Downloads to a cache file on first read; serves later reads from the cache file.

**Write**

Buffers to a temporary file; deletes when all handles close. If the disk fills up, uploads parts in advance and deletes the buffer — write speed is then limited by OSS upload speed.

Writes to the local cache first; uploads to the bucket when the file is flushed or closed. If the cache fills up, uploads parts in advance and deletes the buffer — write speed is then limited by OSS upload speed.

**Performance**

Varies with disk speed and OSS latency on every access.

Varies with disk speed only when a cache hit occurs; otherwise falls back to default-mode performance.

**Note**

In default mode, use the `tmpdir` option to move `tmpfile` from `/tmp` to a data disk directory to avoid filling the system disk.

## Configure data cache

The following parameters control ossfs data cache behavior.

**Parameter**

**Description**

**Default**

`use_cache`

Enables data cache and sets the cache directory path. Example: `-ouse_cache=/tmp/your_foldername`

Disabled

`ensure_diskfree`

Size of disk capacity reserved to prevent the disk from being fully occupied and affecting other applications. Unit: MB. Example: `-oensure_diskfree=1024`

None

`del_cache`

Deletes all cached files in the `use_cache` directory. Example: `-odel_cache`

Cache is not deleted

`max_dirty_data`

Uploads a file when its unwritten size exceeds this threshold, even if the file is still open. Unit: MB. Example: `-omax_dirty_data=2000`

5120

**Important**

Data cache relaxes read consistency. When multiple clients access the same objects — or one client writes while others read — cached data on one client may not reflect writes from another. Do not enable data cache in multi-client scenarios where consistency is required.

## Disk space management

By default, ossfs does not reserve free disk space. During read and write operations, ossfs checks available disk space. If the disk capacity is insufficient, the data reclaim operation is triggered. The data reclaim operation is performed on a single cached file as the smallest unit.

If the cache directory is on a disk shared with other applications or the OS, always set `ensure_diskfree` to reserve enough disk capacity to ensure the normal operation of the system.

## Best practices

**Use data cache for hot, small objects.** Data cache is most effective for small objects that are read repeatedly. For large objects read sequentially, enable [direct read mode](/help/en/oss/developer-reference/common-options#table-jmb-bon-z3k) instead to avoid consuming disk space without a meaningful cache hit rate.

**Reserve disk space on shared disks.** If the cache directory is on a disk used by other applications, set `ensure_diskfree` to reserve enough space for those applications to continue writing.

**Choose high-performance disks for the cache.** Cache performance depends on the disk where cached data is stored. For low-latency reads, use ESSD AutoPL disks with performance burst enabled, elastic ephemeral disks, or local disks. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks#title-o1i-hf2-ntl).

## When not to use data cache

Avoid enabling data cache in these scenarios:

-   **Multi-client write or mixed read/write**: When multiple clients write to ossfs, or one client writes while multiple clients read, and data consistency across clients is required.
    
-   **Single-client writes**: When a client writes to ossfs and you do not want to use disk capacity for the cache. Use [ossutil](/help/en/oss/developer-reference/command-line-tool-ossutil-version-2#72bc8fa976rui) instead.
    
-   **Large sequential reads**: When your workload reads large objects from start to finish. The cache rarely helps and consumes significant disk space.
    
-   **Real-time data requirements**: When your application depends on always reading the most current version of an object.
