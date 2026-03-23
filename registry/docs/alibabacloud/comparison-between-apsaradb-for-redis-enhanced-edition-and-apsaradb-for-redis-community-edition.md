This topic compares the features of Tair (Enterprise Edition) with Redis Open-Source Edition. Use this information to help you select the right product.

## Selection guide

**Category**

**Series**

**Features**

**Scenarios**

Tair (Enterprise Edition)

[Memory-optimized](/help/en/redis/product-overview/dram-based-instances#concept-1254543)

-   Ultra-high performance: Uses a multi-threaded model to achieve read/write performance up to 3× that of a Redis Open-Source Edition instance with the same specifications. For more information, see [Performance whitepaper for Redis Open-Source Edition, Redis Yitian Edition, and memory-optimized Tair](/help/en/redis/support/performance-whitepaper-of-community-edition-instances).
    
-   Provides a wide range of proprietary enhanced data structures, including exString (with enhanced Redis String commands), exHash, exZset, GIS, Bloom, Doc, TS, Cpc, Roaring, Search, and Vector, helping you streamline your code, improve overall business performance, and focus on business innovation.
    
-   It supports numerous enterprise-grade features, such as [point-in-time restore with data flashback](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time), [Global Distributed Cache](/help/en/redis/user-guide/overview-of-global-distributed-cache-for-tair/), and proxy query cache.
    
-   Supports advanced enterprise-level product encryption, such as [TLS encrypted connections](/help/en/redis/user-guide/enable-tls-encryption) and [TDE](/help/en/redis/user-guide/enable-tde).
    

Performance-centric, mission-critical business scenarios.

[Persistent memory](/help/en/redis/product-overview/persistent-memory-optimized-instances-1#concept-1952913)

-   Offers ultra-high cost-effectiveness. The price of persistent memory-optimized instances is approximately 30% lower than that of Redis Open-Source Edition instances that have the same capacity. The performance of persistent memory-optimized instances reaches 90% of that of Redis Open-Source Edition instances. For more information, see [Performance whitepaper of persistent memory-optimized instances](/help/en/redis/support/performance-white-paper-of-persistent-memory-optimized-instances).
    
-   Supports enhanced data modules. These modules include [exString](/help/en/redis/developer-reference/tairsting-command) (including [commands that enhance Redis string functionality](/help/en/redis/developer-reference/cas-cad-command)), [exHash](/help/en/redis/developer-reference/the-tairhash-command), and [Cpc](/help/en/redis/developer-reference/taircpc-command).
    
-   Prevents data loss caused by power failure. Persistent memory-optimized instances implement persistence for each command. The system returns a success response for each write operation only after the data is persistently stored. You can use persistent memory-optimized instances as in-memory databases instead of caches.
    

Data caching and storage scenarios that require high performance and high data persistence, where cost is a secondary consideration.

[Disk-based](/help/en/redis/product-overview/essd-based-instances-1#concept-1952915)

-   Reduced costs: ESSD/SSD-based instances reduce up to 85% of costs compared with Redis Open-Source Edition instances.
    
-   High performance: An ESSD/SSD-based instance delivers approximately 60% of the performance of a Redis Open-Source Edition instance. For more information, see [Performance whitepaper of ESSD-based instances](/help/en/redis/support/performance-white-paper-of-essd-based-instances) and [Performance whitepaper of SSD-based instances](/help/en/redis/support/disk-ssd-performance-white-paper).
    
-   Storage in disks: ESSD/SSD-based instances store data in ESSDs or SSDs to ensure high data reliability. The capacity of an ESSD/SSD-based instance can reach hundreds of terabytes.
    
-   Data distribution: ESSD/SSD-based instances use the Alibaba Cloud TairDB storage engine and combine disks and memory to provide an optimal balance between data persistence and quick access to data.
    
-   High compatibility: ESSD/SSD-based instances are compatible with most data structures and commands of Redis 6.0.
    

Data storage scenarios with large storage needs, low access density, and low latency requirements, where cost is the primary consideration.

Redis Open-Source Edition

N/A

Compatible with open source Redis. High performance.

Suitable for standard Redis use and migration scenarios.

**Note**

For more information, see [Product selection reference](/help/en/redis/product-overview/select-an-apsaradb-for-redis-instance/#concept-2081318).

## Feature comparison

In the following table, ✔️ indicates that the feature is supported, and ❌ indicates that the feature is not supported.

**Category**

**Item**

**Tair (Enterprise Edition)**

**Redis Open-Source Edition**

[Memory-optimized](/help/en/redis/product-overview/dram-based-instances#concept-1254543)

[Persistent memory](/help/en/redis/product-overview/persistent-memory-optimized-instances-1#concept-1952913)

[Disk-based](/help/en/redis/product-overview/essd-based-instances-1#concept-1952915) (ESSD)

[Disk-based](/help/en/redis/product-overview/essd-based-instances-1#concept-1952915) (SSD)

Versions 2.8, 4.0, and 5.0

Versions 6.0 and 7.0

Redis for ARM

Baseline performance

Performance baseline (relative to Redis Open-Source Edition)

300%

90%

Read: 40%

Read: 60%

Same

120%

120%

Write: 30%

Write: 40%

Maximum connections per data node

30,000

10,000

10,000

40,000

10,000

10,000

10,000

Single-key service capability (QPS reference) ①

450,000

130,000

30,000 to 60,000

50,000 to 60,000

140,000

160,000

160,000

Maximum bandwidth (MB/s)

96 to 2,048

96 to 2,048

187.5 to 1,000

187.5 to 2,048

10 to 2048

48 to 2,048

96 to 2,048

Instance attributes

I/O and worker model

Multi-I/O (Real Multi-I/O) ③

Single-threaded

Multi-I/O + Multi-worker (Real Multi-I/O)

Multi-I/O + Multi-worker (Real Multi-I/O)

Single-threaded

Single-threaded

Single-threaded

Cost per unit (relative to Redis Open-Source Edition)

117%

70%

15% to 20%

15%

Same

Same

51% to 67%

Data structures

Support for basic data structures and commands

Supported commands vary by edition. For more information, see [Tair (Enterprise Edition) Command Support and Limitations](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition).

Some commands are not supported. For more information, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition#concept-1960075).

[Tair extended data structures overview](/help/en/redis/developer-reference/extended-data-structures-of-apsaradb-for-redis-enhanced-edition/)

✔️

✔️️️ (Partial)

❌

❌

❌

❌

❌

Disk persistence mode

Primary/replica consistency

Eventual consistency

Eventual consistency

Eventual consistency

Eventual consistency

Eventual consistency

Eventual consistency

Eventual consistency

Disk persistence consistency ④

Write Back

Write Through

Write Through

Write Through

Write Back

Write Back

Write Back

Persistence level

Second-level

Command-level

Command-level

Command-level

Second-level

Second-level

Second-level

Security

[Enable TLS encryption](/help/en/redis/user-guide/enable-tls-encryption#task-2314850)

✔️

✔️

❌

❌

✔️

✔️

✔️

[TDE](/help/en/redis/user-guide/enable-tde)

✔️

❌

❌

❌

❌

❌

❌

[IP whitelist](/help/en/redis/getting-started/step-2-configure-whitelists#concept-lmv-qhf-vdb)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

Performance analysis

[Top key statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature#task-2096542)

✔️

✔️

❌

❌

✔️

✔️

✔️

[Query historical hot spot keys](/help/en/redis/user-guide/query-historical-hotkeys#task-1938160)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Offline analysis of large keys](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb)

✔️

✔️

❌

❌

✔️

✔️

✔️

[Audit log](/help/en/redis/user-guide/enable-the-new-audit-log-feature/#concept-ddc-ydr-3gb)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

Advanced features

[Restore data to a point in time using data flashback](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time)

✔️

✔️

❌

✔️

❌

❌

❌

[Semi-synchronous mode](/help/en/redis/user-guide/modify-the-synchronization-mode-of-a-persistent-memory-optimized-instance)

✔️

❌

✔️

✔️

❌

❌

❌

Proxy query cache

✔️

✔️

❌

❌

❌

❌

❌

[Global Distributed Cache](/help/en/redis/user-guide/overview-of-global-distributed-cache-for-tair/)

✔️

❌

❌

❌

❌

❌

❌

[DTS one-way synchronization](/help/en/redis/user-guide/configure-one-way-data-synchronization-between-apsaradb-for-redis-instances#concept-960573)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[DTS two-way synchronization](/help/en/redis/user-guide/configure-two-way-synchronization-between-apsaradb-for-redis-enhanced-edition-instances#task-2473941)

✔️

✔️

✔️

❌

❌

❌

❌

The numbered items in the table are explained as follows:

-   ①: This queries per second (QPS) reference value is measured using commands with a time complexity of O(1). The higher the time complexity, the lower the QPS.
    
-   ②: This performance is related to the distribution of hot and cold data access. The higher the memory hit ratio, the closer the performance is to the baseline performance of Redis Open-Source Edition.
    
-   ③: Unlike the I/O multi-threading in Redis 6.0, the Real Multi-I/O of the memory-optimized series fully accelerates I/O and command execution. It provides higher resistance to connection spikes and can linearly increase throughput.
    
-   ④: There are two main methods for data persistence to disk:
    
    -   Write Through: The operation returns after the data is successfully written and synchronously persisted to disk.
        
    -   Write Back: The operation returns as soon as the data is successfully written. The data is then asynchronously flushed to disk.
        

  

## References

-   [Tair (Enterprise Edition)](/help/en/redis/product-overview/overview-1/#concept-2352921)
    
-   [Instance types](/help/en/redis/product-overview/overview-4/#concept-gph-q34-tdb)
    
-   [Service architecture](/help/en/redis/product-overview/product-architecture/#concept-nc2-vsl-l2b)
