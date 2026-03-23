When memory usage on an ApsaraDB for MongoDB instance is high, identify the root cause by checking WiredTiger cache utilization, connection counts, and tcmalloc retained memory, then apply the appropriate optimization.

## Quick diagnostic checklist

Run through these checks in order:

1.  **Check WiredTiger cache utilization.** If cache usage exceeds 95% of the configured size, user threads begin evicting pages, which may increase request latency.
    
2.  **Check the cache dirty ratio.** If dirty data exceeds 20%, user threads begin evicting dirty pages, causing request blocking.
    
3.  **Check the connection count.** Each connection consumes memory. Spikes in connections often correlate with memory spikes.
    
4.  **Check tcmalloc retained memory.** tcmalloc may hold large amounts of unreturned memory that the OS cannot reclaim.
    
5.  **Check plan cache size.** Queries with many candidate execution plans can inflate the plan cache.
    

## Check memory usage in the console

On the **Monitoring Data** page of the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/), select the node that matches your database architecture:

-   **Replica set instance**: Includes one Primary node, one or more Secondary nodes, one Hidden node, and optionally one or more ReadOnly nodes.
    
-   **Sharded cluster instance**: Each shard follows the same pattern as a replica set. The Config Server stores configuration metadata. Memory usage on Mongos routing nodes depends on the size of aggregation result sets, the number of connections, and the size of metadata.
    

## Check memory usage from the command line

[Connect to the instance](/help/en/mongodb/user-guide/instance-connection/) with MongoDB Shell and run:

```
db.serverStatus().mem
```

Sample output:

```
{
  "bits" : 64,
  "resident" : 13116,
  "virtual" : 20706,
  "supported" : true
}
```

-   `resident`: Physical memory used by the mongod process, in MB.
    
-   `virtual`: Virtual memory used by the mongod process, in MB.
    

> For the full `serverStatus` reference, see [serverStatus](https://docs.mongodb.com/manual/reference/command/serverStatus/).

## Diagnose WiredTiger storage engine cache pressure

The storage engine cache is the largest memory consumer. ApsaraDB for MongoDB sets `wiredTigerCacheSizeGB` to approximately **60%** of the instance memory specification. For details, see [Product specifications](/help/en/mongodb/product-overview/specifications/).

> ApsaraDB for MongoDB specifies the cache size. You cannot modify this value.

When the cache reaches certain thresholds, eviction behavior changes:

-   At **95% cache usage**, user threads start evicting clean pages alongside background threads.
    
-   When **dirty data exceeds 20%** of the cache size, user threads also evict dirty pages.
    

Expect significant request blocking during these eviction events. See [WiredTiger eviction parameters](#section-a591ed32) for the full threshold table.

### Check WiredTiger cache usage

Run in MongoDB Shell:

```
db.serverStatus().wiredTiger.cache
```

Look for the `bytes currently in the cache` field. Sample output:

```
{
  "bytes belonging to page images in the cache": 6511653424,
  "bytes belonging to the cache overflow table in the cache": 65289,
  "bytes currently in the cache": 8563140208,
  "bytes dirty in the cache cumulative": NumberLong("369249096605399"),
  ...
}
```

### Check cache dirty ratio

Use either method:

-   In the [Database Autonomy Service (DAS) console](https://hdm.console.alibabacloud.com/), go to the **[Real-Time Monitoring Data](/help/en/das/user-guide/view-real-time-performance-metrics)** page.
    
-   Use the [mongostat](https://docs.mongodb.com/v4.2/reference/program/mongostat/) tool.
    

## Diagnose connection and request memory consumption

A high number of concurrent connections consumes significant memory for three reasons.

**Thread stack overhead**

Each connection has a dedicated backend thread. Each thread can consume up to **1 MB** of stack space, though typical usage is in the range of tens to hundreds of KB.

**TCP connection kernel buffers**

At the kernel level, each TCP connection has read and write buffers. The sizes are determined by kernel parameters such as `net.ipv4.tcp_rmem` and `net.ipv4.tcp_wmem`. More concurrent connections and a larger default socket buffer result in higher TCP memory consumption.

**tcmalloc memory retention**

When a request arrives, the system creates a request context and allocates temporary buffers (request packets, response packets, sort buffers). After the request completes, these buffers return to the tcmalloc cache rather than directly to the operating system. tcmalloc gradually releases this memory back to the OS, but the delay can cause unreleased memory to accumulate to **tens of gigabytes**.

### Check connection usage

-   On the **Monitoring Data** page of the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/), view the connection count.
    
-   In MongoDB Shell, [query the number of connections](/help/en/mongodb/support/connection-access-and-network#c28cd557bcwc6).
    

### Check tcmalloc retained memory

Run in MongoDB Shell:

```
db.serverStatus().tcmalloc
```

Calculate retained memory: **tcmalloc cache = `pageheap_free_bytes` + `total_free_byte`**

Sample output:

```
{
  "tcmalloc": {
    "pageheap_free_bytes": NumberLong("3048677376"),
    "pageheap_unmapped_bytes": NumberLong("544994184"),
    "current_total_thread_cache_bytes": 95717224,
    "total_free_byte": NumberLong(1318185960),
    ...
  }
}
```

In this example, tcmalloc retains roughly 4.1 GB (`3048677376 + 1318185960`) that has not been returned to the OS.

## Diagnose metadata and index creation memory

### Metadata memory

When an instance has a large number of databases, collections, and indexes, the associated metadata can consume significant memory. Earlier MongoDB versions have specific issues:

-   **MongoDB versions earlier than 4.0**: A full logical backup may open a large number of file handles. If these handles are not returned to the operating system promptly, memory usage increases rapidly.
    
-   **MongoDB 4.0 and earlier**: Deleting a large number of collections may not properly remove the corresponding file handles, which can cause a memory leak.
    

### Index creation memory

During normal data writes, a Secondary node maintains a buffer of approximately **256 MB** for oplog application. Index creation on Secondary nodes uses more memory.

-   **MongoDB versions earlier than 4.2**: Index creation supports the `background` option. With `{background: true}`, the index builds in the background. Oplog application for index creation is serial and can consume up to **500 MB** of memory.
    
-   **MongoDB 4.2 and later**: The `background` option is deprecated. Secondary nodes apply index creation in parallel, which consumes more memory. Creating multiple indexes at the same time may cause an out-of-memory (OOM) error.
    

> For more details, see [Index Build Impact on Database Performance](https://docs.mongodb.com/manual/core/index-creation/#index-build-impact-on-database-performance) and [Index Build Process](https://docs.mongodb.com/manual/core/index-creation/#index-build-process).

### Plan cache memory

A single query with many candidate execution plans can cause the plan cache to consume a large amount of memory.

Check plan cache size (MongoDB 4.0 and later):

```
db.serverStatus().metrics.query.planCacheTotalSizeEstimateBytes
```

> -   If this command does not return the field on a MongoDB 4.0 instance, the instance runs an older minor version. [Upgrade the minor version](/help/en/mongodb/user-guide/upgrade-the-minor-version-of-an-apsaradb-for-mongodb-instance) to access this metric.
>     
> -   For background on plan cache memory growth, see [SERVER-48400](https://jira.mongodb.org/browse/SERVER-48400).
>     

## Reduce memory usage

### Control concurrent connections

Based on performance testing, the database server supports a maximum of 100 concurrent connections. The MongoDB driver default connection pool size is also 100. When multiple clients connect, reduce the pool size for each client. Keep the total number of persistent connections under **1,000** to avoid increased memory overhead and multi-threading context-switch latency.

### Optimize queries

Create indexes to reduce collection scans and in-memory sorting. This lowers the memory overhead of individual requests.

### Speed up tcmalloc memory release

If memory usage exceeds **80%**, adjust tcmalloc parameters on the **Parameters** page in the console:

1.  Enable the `tcmallocAggressiveMemoryDecommit` parameter. This parameter has been extensively tested and is effective for resolving memory retention issues.
    
2.  If step 1 does not produce the expected results, gradually increase the `tcmallocReleaseRate` value (for example, from 1 to 3, then to 5).
    

**Important**

Adjust these parameters during off-peak hours. Modifying `tcmallocAggressiveMemoryDecommit` and `tcmallocReleaseRate` may degrade database performance. If performance is affected, roll back the changes immediately.

### Reduce database and collection count

If the instance has too many databases and collections, take one or more of these actions:

-   Remove unnecessary collections and indexes.
    
-   Consolidate data from multiple tables.
    
-   Split the instance.
    
-   Migrate to a sharded cluster.
    

For more information, see [Performance Degradation from Too Many Databases or Tables](/help/en/mongodb/support/what-do-i-do-if-the-slow-running-or-an-exception-occurs-on-my-instance-due-to-a-large-number-of-collections).

### Upgrade the instance specification

If memory usage remains high after optimizing queries and tuning connections, upgrade the memory specification. This prevents potential OOM errors and performance degradation from excessive cache eviction.

> If you encounter other memory leak scenarios while using ApsaraDB for MongoDB, contact Alibaba Cloud technical support.

## How ApsaraDB for MongoDB uses memory

When an ApsaraDB for MongoDB process starts, it loads binary files and system libraries into memory. It then manages memory allocation and deallocation for client connections, request processing, and the storage engine. By default, ApsaraDB for MongoDB uses Google's tcmalloc (Thread-Caching Malloc) as its memory allocator.

The two largest memory consumers are:

-   **WiredTiger storage engine**: Holds the data cache (typically the largest share).
    
-   **Client connections and request processing**: Thread stacks, TCP buffers, and temporary request buffers.
    

## FAQ

### How do I increase the memory limit for aggregation operations?

ApsaraDB for MongoDB does not support directly increasing the aggregation memory limit. MongoDB enforces a [100 MB memory limit](https://www.mongodb.com/docs/v5.0/core/aggregation-pipeline-limits/#memory-restrictions) per aggregation pipeline stage. If a stage exceeds this limit, MongoDB returns an error.

To work around this limit, specify `{allowDiskUse: true}` in the aggregation pipeline. Starting with MongoDB 6.0, the [allowDiskUseByDefault](https://www.mongodb.com/docs/manual/reference/parameters/#mongodb-parameter-param.allowDiskUseByDefault) parameter enables this behavior globally. When an aggregation operation requires more memory than the limit, MongoDB automatically uses temporary disk space.

For additional strategies, see [Reduce memory usage](#section-1a9d5b2a).

## WiredTiger eviction parameters

**Parameter**

**Default value**

**Description**

`eviction_target`

80%

When cache usage exceeds this value, background threads start evicting clean pages.

`eviction_trigger`

95%

When cache usage exceeds this value, user threads also start evicting clean pages.

`eviction_dirty_target`

5%

When the dirty cache ratio exceeds this value, background threads start evicting dirty pages.

`eviction_dirty_trigger`

20%

When the dirty cache ratio exceeds this value, user threads also start evicting dirty pages.

`eviction_updates_target`

2.5%

When the cache update ratio exceeds this value, background threads start evicting memory fragments related to small objects.

`eviction_updates_trigger`

10%

When the cache update ratio exceeds this value, user threads also start evicting memory fragments related to small objects.
