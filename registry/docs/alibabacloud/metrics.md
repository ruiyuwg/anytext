This topic describes the metrics for instance monitoring, node monitoring, advanced monitoring, and Performance Trend in ApsaraDB for MongoDB, and explains the meaning of each metric.

**Note**

To improve readability, byte units in the console are automatically converted to MB, GB, or TB.

## Instance monitoring

**Note**

For information about the metrics supported by different instance types, see the console.

**Metric**

**Key**

**Metric name**

**Metric meaning**

**Unit**

**Detailed description**

**Supported instance types**

Disk usage

DiskUsage

disk\_usage

Disk usage

%

The percentage of the total disk capacity that is used by the instance. This metric indicates the disk load of the instance. If the disk usage exceeds 80%, change the instance configuration on the instance details page in the console or see [Change instance configuration](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-yzz-dgl-j2b) or [High disk usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-disk-usage-on-an-apsaradb-for-mongodb-instance) for solutions.

-   Standalone
    
-   Replica set
    
-   Sharded cluster
    
-   Serverless
    

Network traffic

MongoDB\_Network

bytes\_in

Inbound network traffic

Bytes

\-

bytes\_out

Outbound network traffic

Bytes

\-

num\_requests

Number of processed requests

count

\-

Operation QPS

MongoDB\_Opcounters

insert

Insert operations QPS

count

The MongoDB\_Opcounters parameter includes all operations received by the instance, regardless of whether they were executed successfully. Batch operations of the [Bulk.insert()](https://www.mongodb.com/zh-cn/docs/manual/reference/method/Bulk.insert/#bulk.insert--) type are recorded as a single operation. For more granular records, see the MongoDB\_Documents metric.

For more information, see [Opcounters and Repl Opcounters metrics](/help/en/mongodb/user-guide/opcounters-and-repl-opcounters-metrics).

query

Query operations QPS

count

update

Update operations QPS

count

delete

Delete operations QPS

count

getmore

Read operations QPS

count

command

Protocol command operations QPS

count

Connections

MongoDB\_TotalConns

connections\_active

Current active connections

count

The number of client connections to the server that are performing operations.

current\_conn

Current connections

count

The total number of client connections to the server. This includes connections established by other nodes in a replica set or connections established between Mongos and shard nodes.

connections\_totalCreated\_ps

Total new connections per second

count

\-

-   Standalone
    
-   Replica set
    
-   Sharded cluster
    

connections\_available

Current available connections

count

\-

Connection usage

ConnectionUsage

conn\_usage

Connection usage

%

-   The ratio of the current number of connections to the maximum number of connections for the instance. This metric indicates the connection load of the instance.
    
-   The maximum number of connections varies based on the instance type that you purchase. For more information, see [Instance types](/help/en/mongodb/product-overview/instance-types/#concept-wrp-kg4-tdb).
    
-   To increase the connection limit, change the instance configuration on the instance details page in the console. You can also adjust the number of client connections. For more information, see [Change instance configuration](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-yzz-dgl-j2b) or [Query and limit the number of connections](/help/en/mongodb/how-do-i-query-and-limit-the-number-of-connections).
    

CPU usage

CpuUsage

cpu\_usage

CPU usage

%

The sum of system CPU usage and user CPU usage. This metric indicates the service load of the instance. High CPU usage can cause slow data reads and writes, affecting normal services. For troubleshooting, see [High CPU usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-cpu-utilization-on-an-apsaradb-for-mongodb-instance).

MongoDB\_CpuDetail

cpu\_sys

System CPU usage

%

\-

cpu\_user

User CPU usage

%

\-

Memory usage

MemoryUsage

mem\_usage

Memory usage

%

Memory is mainly occupied by the WiredTiger storage engine, client connections, and request processing. For information about the causes of high memory usage and optimization strategies, see [High memory usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-memory-usage-on-an-apsaradb-for-mongodb-instance).

IOPS usage

MongoDB\_IOPS

iops

IOPS usage

times/s

-   Replica set and sharded cluster instances of ApsaraDB for MongoDB 4.2 that use cloud disks do not support viewing IOPS usage and IOPS usage rate.
    
-   The data\_iops and log\_iops metrics from older monitoring versions are now merged into iops.
    

IOPS usage rate

IOPSUsage

iops\_usage

IOPS usage rate

%

The ratio of the instance's IOPS usage to the maximum IOPS of the current instance type. This metric indicates the service load of the instance. If the IOPS usage of a MongoDB instance reaches or approaches 100%, it can cause slow service responses or even service unavailability. [High IOPS usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-iops-usage-on-an-apsaradb-for-mongodb-instance) describes how to view the IOPS usage rate and explains the causes of high IOPS usage and optimization strategies.

**Note**

Replica set and sharded cluster instances of ApsaraDB for MongoDB 4.2 that use cloud disks do not support viewing IOPS usage and IOPS usage rate.

Disk space usage

MongoDB\_DetailedSpaceUsage

ins\_size

Used disk space

Bytes

-   For local disk instances, the used disk space is the sum of the used data disk space and log disk space.
    
-   For cloud disk instances, the used disk space also includes the space occupied by file system metadata.
    

data\_size

Used data disk space

Bytes

The space used by the data disk (excluding the local database). This mainly includes physical data files starting with "collection", physical index files starting with "index", and some physical metadata files, such as WiredTiger.wt.

log\_size

Used log disk space

Bytes

The physical size of the local database.

Operation details

MongoDB\_OperationDetails

operation\_exactIDCount\_ps

Number of count operations for a specific ID

count

The number of single update operations that use \_id instead of a shard key on a [sharded](/help/en/mongodb/use-cases/configure-sharding-to-maximize-the-performance-of-shards) collection whose data is distributed across multiple shards. In current versions, this causes a traversal of all chunks in the instance. If the number of chunks is large, it may lead to full CPU utilization and affect instance performance.

operation\_scanAndOrder\_ps

Number of sort operations without an index

count

The number of sorted queries that cannot use an index to perform the sort operation. A large number can degrade instance performance. Based on your business query conditions, see [Best practices for creating indexes in ApsaraDB for MongoDB](/help/en/mongodb/use-cases/best-practices-of-creating-indexes-in-apsaradb-for-mongodb) for solutions.

operation\_writeConflicts\_ps

Number of write conflicts

count

The number of queries that encountered write conflicts. A small number of write conflicts generally does not have a significant impact. However, many write conflicts can lead to decreased database performance.

BPS

MongoDB\_Disk\_Detail

read\_io\_bandwidth\_mbps

Disk read throughput

MB/s

\-

write\_io\_bandwidth\_mbps

Disk write throughput

MB/s

\-

io\_bandwidth\_mbps

Total disk throughput

MB/s

The sum of disk read throughput and disk write throughput.

Transaction operands

MongoDB\_Transactions

trans\_totalPrepared\_ps

Number of prepared transactions

count

\-

-   Replica set
    
-   Sharded cluster (shard nodes only)
    

trans\_totalPreparedThenCommited\_ps

Number of prepared transactions that were successfully committed

count

\-

trans\_totalPreparedThenAborted\_ps

Number of prepared transactions that were successfully rolled back

count

\-

trans\_totalStarted\_ps

Number of started transactions

count

\-

-   Standalone
    
-   Replica set
    
-   Sharded cluster
    

trans\_totalCommited\_ps

Number of successfully committed transactions

count

\-

trans\_totalAborted\_ps

Number of successfully rolled back transactions

count

\-

Cursors

MongoDB\_AllCursors

total\_open

Number of currently open cursors

count

\-

timed\_out

Number of cursors closed due to timeout

count

If this value is large, check the client-side business code that processes data.

job\_cursors\_closed

Number of cursors closed due to session closure

count

\-

pinned\_open

Number of currently open and in-use cursors

count

For example, find or getMore operations pin a cursor to prevent it from being deleted while fetching the next batch of results, and unpin it after returning the results.

noTimeout\_open

Number of currently open and non-timed-out cursors

count

The number of open and non-timed-out cursors that use the noCursorTimeout option. This option prevents a cursor from timing out after a period of inactivity. However, the noCursorTimeout configuration is limited by the session timeout. For more information, see the [documentation](https://www.mongodb.com/zh-cn/docs/manual/reference/method/cursor.noCursorTimeout/#session-idle-timeout-overrides-nocursortimeout).

-   Standalone
    
-   Replica set
    
-   Sharded cluster (shard and Configserver nodes only)
    

WiredTiger

MongoDB\_Wt\_Cache

bytes\_read\_into\_cache

Bytes read into cache

Bytes

The number of bytes of data read from disk into the WiredTiger cache.

bytes\_written\_from\_cache

Bytes written from cache

Bytes

The number of bytes of data written from the WiredTiger cache to disk.

maximum\_bytes\_configured

Maximum cache size

Bytes

The maximum number of bytes configured for the WiredTiger cache. For compatibility and security, ApsaraDB for MongoDB sets the CacheSize of the WiredTiger storage engine to about 60% of the requested instance memory size. For more information, see [High memory usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-memory-usage-on-an-apsaradb-for-mongodb-instance).

WT concurrent transactions

MongoDB\_Wt\_Concurrent\_Trans

write\_concurrent\_trans\_out

Current concurrent write transactions

count

Before V7.0, the limit for concurrent read and write transactions for an instance was 128. If the availability parameter was 0 for a long time, it could indicate an overload. Starting from V7.0, MongoDB uses a default algorithm to dynamically adjust the maximum number of concurrent storage engine transactions to optimize database throughput during overload. An availability parameter of 0 for a long time does not necessarily indicate an overload. For more information, see the [documentation](https://www.mongodb.com/docs/manual/release-notes/7.0/#concurrent-storage-engine-transactions--read-and-write-tickets-).

write\_concurrent\_trans\_available

Available concurrent write transactions

count

read\_concurrent\_trans\_out

Current concurrent read transactions

count

read\_concurrent\_trans\_available

Available concurrent read transactions

count

WiredTigerUsage

MongoDB\_WTCacheUsage

wt\_cache\_dirty\_usage

WiredTiger dirty cache usage

%

For more information, see [High memory usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-memory-usage-on-an-apsaradb-for-mongodb-instance).

wt\_cache\_usage

WiredTiger cache usage

%

Average response time

MongoDB\_RT

avg\_rt

Total average response time

μs

\-

reads\_avg\_rt

Average response time for read operations

μs

\-

writes\_avg\_rt

Average response time for write operations

μs

\-

commands\_avg\_rt

Average response time for command operations

μs

\-

trans\_avg\_rt

Average response time for transaction operations

μs

\-

Number of affected documents

MongoDB\_Documents

document\_deleted\_ps

Number of deleted documents

count

\-

document\_inserted\_ps

Number of inserted documents

count

\-

document\_returned\_ps

Number of returned documents

count

\-

document\_updated\_ps

Number of updated documents

count

\-

GlobalLock

MongoDB\_GlobalLocks

gl\_ac\_readers

Number of active client connections performing read operations

count

\-

gl\_ac\_writers

Number of active client connections performing write operations

count

\-

gl\_cq\_writers

Number of operations queued for a write lock

count

\-

gl\_cq\_readers

Number of operations queued for a read lock

count

\-

gl\_cq\_total

Total number of operations queued for a lock

count

The sum of the number of operations queued for a write lock and the number of operations queued for a read lock. A large value indicates that client operations may be delayed, which can affect application response time.

Number of scanned index entries and documents in queries

MongoDB\_QueryExecutors

queryExecutor\_scannedObject\_ps

Number of documents scanned by queries

count

The total number of documents scanned during query execution and query plan evaluation. This is the same as `explain()` in the `totalDocsExamined` output. A large number indicates that the database needs to scan many non-indexed entries. Create an index for fields with a large scan count.

queryExecutor\_scanned\_ps

Number of index entries scanned by queries

count

The total number of index entries scanned during query execution and query plan evaluation. This is the same as `totalKeysExamined` in the `explain()` output. If this value is large but the number of returned documents is small, it indicates that the database scanned many index keys to get the result documents. This means the index is not efficient. Adjust the index or create other indexes.

TTL

MongoDB\_TTLs

ttl\_deletedDocuments\_ps

Number of documents deleted due to TTL index

count

A large value indicates that many documents are being deleted, which may affect instance performance. For more information, see the [documentation](https://www.mongodb.com/zh-cn/docs/manual/core/index-ttl/).

ttl\_passes\_ps

Number of times the background TTL thread performs deletions

count

The total number of times the TTL background process checks for expired documents. Each time it checks, the TTL monitor attempts to delete as many candidate documents as possible from all TTL indexes.

Repl Opcounters

MongoDB\_ReplOpcounters

repl\_command

Number of Command operands in the replica set

count

During replication, MongoDB serializes operations, which may affect the count of each operation. Therefore, the values of the MongoDB\_ReplOpcounters and MongoDB\_Opcounters counters may differ. For more information, see [Opcounters and Repl Opcounters metrics](/help/en/mongodb/user-guide/opcounters-and-repl-opcounters-metrics).

repl\_delete

Number of Delete command operands in the replica set

count

repl\_getmore

Number of Getmore command operands in the replica set

count

repl\_insert

Number of Insert command operands in the replica set

count

repl\_query

Number of Query command operands in the replica set

count

repl\_update

Number of Update command operands in the replica set

count

Eviction scan count

MongoDB\_WtCacheHPCheckEntriesWalked

wiredTiger\_cache\_hazardPointerCheckEntriesWalked

Number of items in the hazard pointer array scanned during eviction

count

Number of page evictions blocked by hazard pointers during eviction.

Lock Acquisitions

MongoDB\_WtLockAcquisitions

wt\_checkPoint\_lock

Number of checkpoint lock acquisitions

count

\-

wt\_dhandle\_read\_lock

Number of data handle read lock acquisitions

count

If an instance has too many databases and collections, client requests may have to wait a long time for a handle lock. This affects instance performance. For more information, see [Instance stuttering or abnormality caused by too many databases and collections](/help/en/mongodb/support/what-do-i-do-if-the-slow-running-or-an-exception-occurs-on-my-instance-due-to-a-large-number-of-collections).

wt\_dhandle\_write\_lock

Number of data handle write lock acquisitions

count

wt\_metadata\_lock

Number of metadata lock acquisitions

count

wt\_schema\_lock

Number of schema lock acquisitions

count

Frequent deletion and creation of databases, collections, or indexes, and having too many databases and collections can lead to higher schemaLock overhead, affecting instance performance. For more information, see [Instance stuttering or abnormality caused by too many databases and collections](/help/en/mongodb/support/what-do-i-do-if-the-slow-running-or-an-exception-occurs-on-my-instance-due-to-a-large-number-of-collections).

wt\_table\_read\_lock

Number of table read lock acquisitions

count

\-

wt\_table\_write\_lock

Number of table write lock acquisitions

count

\-

wt\_txn\_global\_read\_lock

Number of transaction global read lock acquisitions

count

\-

wt\_txn\_global\_write\_lock

Number of transaction global write lock acquisitions

count

\-

BPS usage rate

MongoDB\_MbpsUsage

total\_mbps\_usage

Disk read/write bandwidth usage rate

%

The ratio of the instance's total disk throughput to the maximum BPS of the instance. This metric indicates the service load of the instance. If the BPS usage of a MongoDB instance reaches or approaches 100%, it can cause slow service responses or even service unavailability. For more information about cloud disk BPS, see [Instance types](/help/en/mongodb/product-overview/instance-types/).

**Note**

Only supported for cloud disk instances.

-   Standalone
    
-   Replica set
    
-   Sharded cluster (shard nodes only)
    

Primary-secondary latency

MongoDB\_Repl\_Lag

repl\_lag

Data synchronization latency between primary and secondary nodes

s

-   The heartbeat interval between replica set members is 2s. Therefore, a repl\_lag value between -2 and 2 is normal for replica set instances, and for shard and Configserver nodes of sharded cluster instances.
    
-   The repl\_lag value for a secondary node can be negative. This does not mean that the secondary node is ahead of the primary node. To get the latest primary-secondary latency status of a replica set, run [rs.printSecondaryReplicationInfo()](https://www.mongodb.com/docs/manual/reference/method/rs.printSecondaryReplicationInfo/#mongodb-method-rs.printSecondaryReplicationInfo) on the primary node.
    

-   ReplicaSet
    
-   Sharded cluster (Shard and ConfigServer only)
    

Oplog retention period

MongoDB\_OplogTimeInterval

oplog\_time\_interval

Oplog retention period

Hours

For versions 4.4 and later, modify the storage.oplogMinRetentionHours parameter on the instance product page.

moveChunk

MongoDB\_MoveChunks

moveChunk\_donor\_started\_ps

The number of times the current node acts as a migration source.

Count

This value increases regardless of whether the migration is successful.

-   Sharded cluster (Shard only)
    

moveChunk\_recip\_stared\_ps

The number of times the current node is the target for a chunk migration.

Count

Items per access

\-

sl\_qps

Accesses per second

Count

\-

-   Serverless instance
    

Query executor information

MongoDB\_QueryExecutors

collscans\_nontailable

Number of full table scans for non-tailable cursors

Count

\-

-   ReplicaSet
    
-   Sharded cluster (excluding mongos)
    

collscans\_total

Total number of full table scans

Item

\-

Number of databases and tables

MongoDB\_CollectionNums

admin\_user\_coll

Number of user tables in the admin database

Count

\-

-   ReplicaSet versions 4.2 and earlier
    
-   Sharded clusters
    

Number of assertions

MongoDB\_Asserts

Regular

Normal level

Count

The number of assertions that passed.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

warning

Warning level

Count

The number of warning-level assertions. This value is always 0.

msg

Message level

Count

The number of message-level assertions.

user

User level

Item

The number of user-level assertions.

Number of data handles

MongoDB\_DataHandle

opened\_fd\_num

Active handle count

Item

The number of active connection data handles in the WiredTiger cache.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

closed\_fd\_num

Number of closed handles

Count

The number of closed data handles for connections scanned in the WiredTiger cache.

opened\_fd\_mem

Memory used by active handles

MB

The memory used by currently active connection data handles in the WiredTiger cache.

Operation latency

MongoDB\_Latencies

reads\_latency\_ps

Latency of successful read requests

us

The latency of all successful read requests.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

writes\_latency\_ps

Successful write request latency

us

The latency of all successful write requests. The unit is us.

commands\_latency\_ps

Latency of successful command operations

us

The latency of all successful requests for command operations, in us.

trans\_latency\_ps

Latency of successful transaction requests

us

The time it takes for all successful requests in a transaction to be processed. The unit is us.

TCMalloc memory fragmentation ratio

MongoDB\_TcmallocCacheMemRatio

tcmalloc\_cache\_mem\_ratio

TCMalloc memory fragmentation ratio

%

\-

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

Average write time for follows

MongoDB\_GetLastErrorWtime

metrics\_getLastError\_avg\_wtime

Average time for write follow operations

ms

The average time to perform a write-follow operation.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster (mongod only)
    

metrics\_getLastError\_wtimeouts

Timeouts for write and follow operations

Times

Number of write concern operations that exceeded the \`wtimeout\` threshold.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

Replication buffer size

MongoDB\_Repl\_Buffer

repl\_buffer\_size

Current replication buffer size

MB

The current size of the replication buffer in the ReplicaSet.

-   ReplicaSet
    
-   sharded cluster
    

repl\_buffer\_max\_size

Maximum replication buffer size

MB

The maximum size of the replication buffer in the ReplicaSet.

WiredTiger cache page evictions

MongoDB\_WtCacheEviction

pages\_selected\_count

Number of pages that are forcibly evicted

Count

\-

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

pages\_selected\_unable\_to\_evict\_count

The number of pages that cannot be evicted.

Count

\-

hazard\_pointer\_blocked\_page\_eviction

Number of page evictions blocked by hazard pointers

Count

\-

max\_page\_size

The maximum page size encountered during the page eviction process.

MB

\-

pages\_evicted\_by\_application\_threads

Number of pages in the WiredTiger cache evicted by user threads

Item

\-

moveChunk

MongoDB\_MoveChunks

moveChunk\_deleter\_task

Number of pending and running chunk range deletion tasks

Count

\-

Sharded cluster

LockAcquisitions

MongoDB\_WtLockAcquisitions

wt\_checkPoint\_lock

Number of checkpoint lock acquisitions in the WiredTiger cache

Item

\-

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

wt\_dhandle\_read\_lock

The number of read locks acquired for data handles in the WiredTiger cache.

Count

\-

wt\_dhandle\_write\_lock

The number of times a write lock is acquired for a data handle in the WiredTiger cache.

Count

\-

wt\_metadata\_lock

The number of metadata locks acquired in the WiredTiger cache

Count

\-

wt\_schema\_lock

The number of schema locks acquired in the WiredTiger cache.

Count

\-

wt\_table\_read\_lock

The number of table read locks acquired in the WiredTiger cache.

Count

\-

wt\_table\_write\_lock

The number of table write locks acquired in the WiredTiger cache.

Count

\-

wt\_txn\_global\_read\_lock

The number of times the global read lock is acquired in the WiredTiger cache.

Count

\-

wt\_txn\_global\_write\_lock

The number of global write locks acquired in the WiredTiger cache.

Count

\-

Thread yielding

MongoDB\_WtCache\_Thread\_Yield

page\_acquire\_eviction\_blocked

Number of times blocked waiting for page eviction

Count

\-

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

page\_acquire\_locked\_blocked

Number of waits for a locked target page

Times

\-

page\_acquire\_time\_sleeping

Total thread sleep duration when fetching a page

us

\-

WiredTigerUsage

MongoDB\_WTCacheUsage

wt\_cache\_updates\_usage

WiredTiger update cache utilization

%

The proportion of the maximum cache size in bytes that is allocated for update operations.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

Classic multi-planner execution statistics

MongoDB\_MultiPlanner\_Worker

metrics\_query\_multiplanner\_classicworks

Total number of tasks

Count

The total number of tasks executed by the classic multi-planner.

-   ReplicaSet
    
-   Sharded cluster (mongod only)
    

Logical session cache information

MongoDB\_LogicalSession

active\_sessions\_count

Number of logical sessions in the cache

Item

The total number of logical sessions in the cache since the last refresh.

-   ReplicaSet
    
-   sharded cluster
    

## Node monitoring (formerly basic monitoring)

**Note**

For information about the metrics supported by different instance types, see the console.

**Metric**

**Key**

**Metric name**

**Metric meaning**

**Unit**

**Detailed description**

**Supported instance types**

Disk usage

DiskUsage

disk\_usage

Disk usage

%

The percentage of the total disk capacity that is used by the instance. This metric indicates the disk load of the instance. If the disk usage exceeds 80%, change the instance configuration on the instance details page in the console or see [Change instance configuration](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-yzz-dgl-j2b) or [High disk usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-disk-usage-on-an-apsaradb-for-mongodb-instance) for solutions.

-   Standalone
    
-   Replica set
    
-   Sharded cluster
    
-   Serverless
    

Network traffic

MongoDB\_Network

bytes\_in

Inbound network traffic

Bytes

\-

bytes\_out

Outbound network traffic

Bytes

\-

num\_requests

Number of processed requests

count

\-

Operation QPS

MongoDB\_Opcounters

insert

Insert operations QPS

count

The MongoDB\_Opcounters parameter includes all operations received by the instance, regardless of whether they were executed successfully. Batch operations of the [Bulk.insert()](https://www.mongodb.com/zh-cn/docs/manual/reference/method/Bulk.insert/#bulk.insert--) type are recorded as a single operation. For more granular records, see the MongoDB\_Documents metric.

For more information, see [Opcounters and Repl Opcounters metrics](/help/en/mongodb/user-guide/opcounters-and-repl-opcounters-metrics).

query

Query operations QPS

count

update

Update operations QPS

count

delete

Delete operations QPS

count

getmore

Read operations QPS

count

command

Protocol command operations QPS

count

Connections

MongoDB\_TotalConns

connections\_active

Current active connections

count

The number of client connections to the server that are performing operations.

current\_conn

Current connections

count

The total number of client connections to the server. This includes connections established by other nodes in a replica set or connections established between Mongos and shard nodes.

connections\_totalCreated\_ps

Total new connections per second

count

\-

-   Standalone
    
-   Replica set
    
-   Sharded cluster
    

connections\_available

Current available connections

count

\-

Connection usage

ConnectionUsage

conn\_usage

Connection usage

%

-   The ratio of the current number of connections to the maximum number of connections for the instance. This metric indicates the connection load of the instance.
    
-   The maximum number of connections varies based on the instance type that you purchase. For more information, see [Instance types](/help/en/mongodb/product-overview/instance-types/#concept-wrp-kg4-tdb).
    
-   To increase the connection limit, change the instance configuration on the instance details page in the console. You can also adjust the number of client connections. For more information, see [Change instance configuration](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-yzz-dgl-j2b) or [Query and limit the number of connections](/help/en/mongodb/how-do-i-query-and-limit-the-number-of-connections).
    

CPU usage

CpuUsage

cpu\_usage

CPU usage

%

The sum of system CPU usage and user CPU usage. This metric indicates the service load of the instance. High CPU usage can cause slow data reads and writes, affecting normal services. For troubleshooting, see [High CPU usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-cpu-utilization-on-an-apsaradb-for-mongodb-instance).

MongoDB\_CpuDetail

cpu\_sys

System CPU usage

%

\-

cpu\_user

User CPU usage

%

\-

Memory usage

MemoryUsage

mem\_usage

Memory usage

%

Memory is mainly occupied by the WiredTiger storage engine, client connections, and request processing. For information about the causes of high memory usage and optimization strategies, see [High memory usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-memory-usage-on-an-apsaradb-for-mongodb-instance).

IOPS usage

MongoDB\_IOPS

iops

IOPS usage

times/s

-   Replica set and sharded cluster instances of ApsaraDB for MongoDB 4.2 that use cloud disks do not support viewing IOPS usage and IOPS usage rate.
    
-   The data\_iops and log\_iops metrics from older monitoring versions are now merged into iops.
    

IOPS usage rate

IOPSUsage

iops\_usage

IOPS usage rate

%

The ratio of the instance's IOPS usage to the maximum IOPS of the current instance type. This metric indicates the service load of the instance. If the IOPS usage of a MongoDB instance reaches or approaches 100%, it can cause slow service responses or even service unavailability. [High IOPS usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-iops-usage-on-an-apsaradb-for-mongodb-instance) describes how to view the IOPS usage rate and explains the causes of high IOPS usage and optimization strategies.

**Note**

Replica set and sharded cluster instances of ApsaraDB for MongoDB 4.2 that use cloud disks do not support viewing IOPS usage and IOPS usage rate.

Disk space usage

MongoDB\_DetailedSpaceUsage

ins\_size

Used disk space

Bytes

-   For local disk instances, the used disk space is the sum of the used data disk space and log disk space.
    
-   For cloud disk instances, the used disk space also includes the space occupied by file system metadata.
    

data\_size

Used data disk space

Bytes

The space used by the data disk (excluding the local database). This mainly includes physical data files starting with "collection", physical index files starting with "index", and some physical metadata files, such as WiredTiger.wt.

log\_size

Used log disk space

Bytes

The physical size of the local database.

Operation details

MongoDB\_OperationDetails

operation\_exactIDCount\_ps

Number of count operations for a specific ID

count

The number of single update operations that use \_id instead of a shard key on a [sharded](/help/en/mongodb/use-cases/configure-sharding-to-maximize-the-performance-of-shards) collection whose data is distributed across multiple shards. In current versions, this causes a traversal of all chunks in the instance. If the number of chunks is large, it may lead to full CPU utilization and affect instance performance.

operation\_scanAndOrder\_ps

Number of sort operations without an index

count

The number of sorted queries that cannot use an index to perform the sort operation. A large number can degrade instance performance. Based on your business query conditions, see [Best practices for creating indexes in ApsaraDB for MongoDB](/help/en/mongodb/use-cases/best-practices-of-creating-indexes-in-apsaradb-for-mongodb) for solutions.

operation\_writeConflicts\_ps

Number of write conflicts

count

The number of queries that encountered write conflicts. A small number of write conflicts generally does not have a significant impact. However, many write conflicts can lead to decreased database performance.

BPS

MongoDB\_Disk\_Detail

read\_io\_bandwidth\_mbps

Disk read throughput

MB/s

\-

write\_io\_bandwidth\_mbps

Disk write throughput

MB/s

\-

io\_bandwidth\_mbps

Total disk throughput

MB/s

The sum of disk read throughput and disk write throughput.

Transaction operands

MongoDB\_Transactions

trans\_totalPrepared\_ps

Number of prepared transactions

count

\-

-   Replica set
    
-   Sharded cluster (shard nodes only)
    

trans\_totalPreparedThenCommited\_ps

Number of prepared transactions that were successfully committed

count

\-

trans\_totalPreparedThenAborted\_ps

Number of prepared transactions that were successfully rolled back

count

\-

trans\_totalStarted\_ps

Number of started transactions

count

\-

-   Standalone
    
-   Replica set
    
-   Sharded cluster
    

trans\_totalCommited\_ps

Number of successfully committed transactions

count

\-

trans\_totalAborted\_ps

Number of successfully rolled back transactions

count

\-

Cursors

MongoDB\_AllCursors

total\_open

Number of currently open cursors

count

\-

timed\_out

Number of cursors closed due to timeout

count

If this value is large, check the client-side business code that processes data.

job\_cursors\_closed

Number of cursors closed due to session closure

count

\-

pinned\_open

Number of currently open and in-use cursors

count

For example, find or getMore operations pin a cursor to prevent it from being deleted while fetching the next batch of results, and unpin it after returning the results.

noTimeout\_open

Number of currently open and non-timed-out cursors

count

The number of open and non-timed-out cursors that use the noCursorTimeout option. This option prevents a cursor from timing out after a period of inactivity. However, the noCursorTimeout configuration is limited by the session timeout. For more information, see the [documentation](https://www.mongodb.com/zh-cn/docs/manual/reference/method/cursor.noCursorTimeout/#session-idle-timeout-overrides-nocursortimeout).

-   Standalone
    
-   Replica set
    
-   Sharded cluster (shard and Configserver nodes only)
    

WiredTiger

MongoDB\_Wt\_Cache

bytes\_read\_into\_cache

Bytes read into cache

Bytes

The number of bytes of data read from disk into the WiredTiger cache.

bytes\_written\_from\_cache

Bytes written from cache

Bytes

The number of bytes of data written from the WiredTiger cache to disk.

maximum\_bytes\_configured

Maximum cache size

Bytes

The maximum number of bytes configured for the WiredTiger cache. For compatibility and security, ApsaraDB for MongoDB sets the CacheSize of the WiredTiger storage engine to about 60% of the requested instance memory size. For more information, see [High memory usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-memory-usage-on-an-apsaradb-for-mongodb-instance).

WT concurrent transactions

MongoDB\_Wt\_Concurrent\_Trans

write\_concurrent\_trans\_out

Current concurrent write transactions

count

Before V7.0, the limit for concurrent read and write transactions for an instance was 128. If the availability parameter was 0 for a long time, it could indicate an overload. Starting from V7.0, MongoDB uses a default algorithm to dynamically adjust the maximum number of concurrent storage engine transactions to optimize database throughput during overload. An availability parameter of 0 for a long time does not necessarily indicate an overload. For more information, see the [documentation](https://www.mongodb.com/docs/manual/release-notes/7.0/#concurrent-storage-engine-transactions--read-and-write-tickets-).

write\_concurrent\_trans\_available

Available concurrent write transactions

count

read\_concurrent\_trans\_out

Current concurrent read transactions

count

read\_concurrent\_trans\_available

Available concurrent read transactions

count

WiredTigerUsage

MongoDB\_WTCacheUsage

wt\_cache\_dirty\_usage

WiredTiger dirty cache usage

%

For more information, see [High memory usage of ApsaraDB for MongoDB instances](/help/en/mongodb/user-guide/troubleshoot-high-memory-usage-on-an-apsaradb-for-mongodb-instance).

wt\_cache\_usage

WiredTiger cache usage

%

Average response time

MongoDB\_RT

avg\_rt

Total average response time

μs

\-

reads\_avg\_rt

Average response time for read operations

μs

\-

writes\_avg\_rt

Average response time for write operations

μs

\-

commands\_avg\_rt

Average response time for command operations

μs

\-

trans\_avg\_rt

Average response time for transaction operations

μs

\-

Number of affected documents

MongoDB\_Documents

document\_deleted\_ps

Number of deleted documents

count

\-

document\_inserted\_ps

Number of inserted documents

count

\-

document\_returned\_ps

Number of returned documents

count

\-

document\_updated\_ps

Number of updated documents

count

\-

GlobalLock

MongoDB\_GlobalLocks

gl\_ac\_readers

Number of active client connections performing read operations

count

\-

gl\_ac\_writers

Number of active client connections performing write operations

count

\-

gl\_cq\_writers

Number of operations queued for a write lock

count

\-

gl\_cq\_readers

Number of operations queued for a read lock

count

\-

gl\_cq\_total

Total number of operations queued for a lock

count

The sum of the number of operations queued for a write lock and the number of operations queued for a read lock. A large value indicates that client operations may be delayed, which can affect application response time.

Number of scanned index entries and documents in queries

MongoDB\_QueryExecutors

queryExecutor\_scannedObject\_ps

Number of documents scanned by queries

count

The total number of documents scanned during query execution and query plan evaluation. This is the same as `explain()` in the `totalDocsExamined` output. A large number indicates that the database needs to scan many non-indexed entries. Create an index for fields with a large scan count.

queryExecutor\_scanned\_ps

Number of index entries scanned by queries

count

The total number of index entries scanned during query execution and query plan evaluation. This is the same as `totalKeysExamined` in the `explain()` output. If this value is large but the number of returned documents is small, it indicates that the database scanned many index keys to get the result documents. This means the index is not efficient. Adjust the index or create other indexes.

TTL

MongoDB\_TTLs

ttl\_deletedDocuments\_ps

Number of documents deleted due to TTL index

count

A large value indicates that many documents are being deleted, which may affect instance performance. For more information, see the [documentation](https://www.mongodb.com/zh-cn/docs/manual/core/index-ttl/).

ttl\_passes\_ps

Number of times the background TTL thread performs deletions

count

The total number of times the TTL background process checks for expired documents. Each time it checks, the TTL monitor attempts to delete as many candidate documents as possible from all TTL indexes.

Repl Opcounters

MongoDB\_ReplOpcounters

repl\_command

Number of Command operands in the replica set

count

During replication, MongoDB serializes operations, which may affect the count of each operation. Therefore, the values of the MongoDB\_ReplOpcounters and MongoDB\_Opcounters counters may differ. For more information, see [Opcounters and Repl Opcounters metrics](/help/en/mongodb/user-guide/opcounters-and-repl-opcounters-metrics).

repl\_delete

Number of Delete command operands in the replica set

count

repl\_getmore

Number of Getmore command operands in the replica set

count

repl\_insert

Number of Insert command operands in the replica set

count

repl\_query

Number of Query command operands in the replica set

count

repl\_update

Number of Update command operands in the replica set

count

Eviction scan count

MongoDB\_WtCacheHPCheckEntriesWalked

wiredTiger\_cache\_hazardPointerCheckEntriesWalked

Number of items in the hazard pointer array scanned during eviction

count

Number of page evictions blocked by hazard pointers during eviction.

Lock Acquisitions

MongoDB\_WtLockAcquisitions

wt\_checkPoint\_lock

Number of checkpoint lock acquisitions

count

\-

wt\_dhandle\_read\_lock

Number of data handle read lock acquisitions

count

If an instance has too many databases and collections, client requests may have to wait a long time for a handle lock. This affects instance performance. For more information, see [Instance stuttering or abnormality caused by too many databases and collections](/help/en/mongodb/support/what-do-i-do-if-the-slow-running-or-an-exception-occurs-on-my-instance-due-to-a-large-number-of-collections).

wt\_dhandle\_write\_lock

Number of data handle write lock acquisitions

count

wt\_metadata\_lock

Number of metadata lock acquisitions

count

wt\_schema\_lock

Number of schema lock acquisitions

count

Frequent deletion and creation of databases, collections, or indexes, and having too many databases and collections can lead to higher schemaLock overhead, affecting instance performance. For more information, see [Instance stuttering or abnormality caused by too many databases and collections](/help/en/mongodb/support/what-do-i-do-if-the-slow-running-or-an-exception-occurs-on-my-instance-due-to-a-large-number-of-collections).

wt\_table\_read\_lock

Number of table read lock acquisitions

count

\-

wt\_table\_write\_lock

Number of table write lock acquisitions

count

\-

wt\_txn\_global\_read\_lock

Number of transaction global read lock acquisitions

count

\-

wt\_txn\_global\_write\_lock

Number of transaction global write lock acquisitions

count

\-

BPS usage rate

MongoDB\_MbpsUsage

total\_mbps\_usage

Disk read/write bandwidth usage rate

%

The ratio of the instance's total disk throughput to the maximum BPS of the instance. This metric indicates the service load of the instance. If the BPS usage of a MongoDB instance reaches or approaches 100%, it can cause slow service responses or even service unavailability. For more information about cloud disk BPS, see [Instance types](/help/en/mongodb/product-overview/instance-types/).

**Note**

Only supported for cloud disk instances.

-   Standalone
    
-   Replica set
    
-   Sharded cluster (shard nodes only)
    

Primary-secondary latency

MongoDB\_Repl\_Lag

repl\_lag

Data synchronization latency between primary and secondary nodes

s

-   The heartbeat interval between replica set members is 2s. Therefore, a repl\_lag value between -2 and 2 is normal for replica set instances, and for shard and Configserver nodes of sharded cluster instances.
    
-   The repl\_lag value for a secondary node can be negative. This does not mean that the secondary node is ahead of the primary node. To get the latest primary-secondary latency status of a replica set, run [rs.printSecondaryReplicationInfo()](https://www.mongodb.com/docs/manual/reference/method/rs.printSecondaryReplicationInfo/#mongodb-method-rs.printSecondaryReplicationInfo) on the primary node.
    

-   ReplicaSet
    
-   Sharded cluster (Shard and ConfigServer only)
    

Oplog retention period

MongoDB\_OplogTimeInterval

oplog\_time\_interval

Oplog retention period

Hours

For versions 4.4 and later, modify the storage.oplogMinRetentionHours parameter on the instance product page.

moveChunk

MongoDB\_MoveChunks

moveChunk\_donor\_started\_ps

The number of times the current node acts as a migration source.

Count

This value increases regardless of whether the migration is successful.

-   Sharded cluster (Shard only)
    

moveChunk\_recip\_stared\_ps

The number of times the current node is the target for a chunk migration.

Count

Items per access

\-

sl\_qps

Accesses per second

Count

\-

-   Serverless instance
    

Query executor information

MongoDB\_QueryExecutors

collscans\_nontailable

Number of full table scans for non-tailable cursors

Count

\-

-   ReplicaSet
    
-   Sharded cluster (excluding mongos)
    

collscans\_total

Total number of full table scans

Item

\-

Number of databases and tables

MongoDB\_CollectionNums

admin\_user\_coll

Number of user tables in the admin database

Count

\-

-   ReplicaSet versions 4.2 and earlier
    
-   Sharded clusters
    

Number of assertions

MongoDB\_Asserts

Regular

Normal level

Count

The number of assertions that passed.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

warning

Warning level

Count

The number of warning-level assertions. This value is always 0.

msg

Message level

Count

The number of message-level assertions.

user

User level

Item

The number of user-level assertions.

Number of data handles

MongoDB\_DataHandle

opened\_fd\_num

Active handle count

Item

The number of active connection data handles in the WiredTiger cache.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

closed\_fd\_num

Number of closed handles

Count

The number of closed data handles for connections scanned in the WiredTiger cache.

opened\_fd\_mem

Memory used by active handles

MB

The memory used by currently active connection data handles in the WiredTiger cache.

Operation latency

MongoDB\_Latencies

reads\_latency\_ps

Latency of successful read requests

us

The latency of all successful read requests.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

writes\_latency\_ps

Successful write request latency

us

The latency of all successful write requests. The unit is us.

commands\_latency\_ps

Latency of successful command operations

us

The latency of all successful requests for command operations, in us.

trans\_latency\_ps

Latency of successful transaction requests

us

The time it takes for all successful requests in a transaction to be processed. The unit is us.

TCMalloc memory fragmentation ratio

MongoDB\_TcmallocCacheMemRatio

tcmalloc\_cache\_mem\_ratio

TCMalloc memory fragmentation ratio

%

\-

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

Average write time for follows

MongoDB\_GetLastErrorWtime

metrics\_getLastError\_avg\_wtime

Average time for write follow operations

ms

The average time to perform a write-follow operation.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster (mongod only)
    

metrics\_getLastError\_wtimeouts

Timeouts for write and follow operations

Times

Number of write concern operations that exceeded the \`wtimeout\` threshold.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

Replication buffer size

MongoDB\_Repl\_Buffer

repl\_buffer\_size

Current replication buffer size

MB

The current size of the replication buffer in the ReplicaSet.

-   ReplicaSet
    
-   sharded cluster
    

repl\_buffer\_max\_size

Maximum replication buffer size

MB

The maximum size of the replication buffer in the ReplicaSet.

WiredTiger cache page evictions

MongoDB\_WtCacheEviction

pages\_selected\_count

Number of pages that are forcibly evicted

Count

\-

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

pages\_selected\_unable\_to\_evict\_count

The number of pages that cannot be evicted.

Count

\-

hazard\_pointer\_blocked\_page\_eviction

Number of page evictions blocked by hazard pointers

Count

\-

max\_page\_size

The maximum page size encountered during the page eviction process.

MB

\-

pages\_evicted\_by\_application\_threads

Number of pages in the WiredTiger cache evicted by user threads

Item

\-

moveChunk

MongoDB\_MoveChunks

moveChunk\_deleter\_task

Number of pending and running chunk range deletion tasks

Count

\-

Sharded cluster

LockAcquisitions

MongoDB\_WtLockAcquisitions

wt\_checkPoint\_lock

Number of checkpoint lock acquisitions in the WiredTiger cache

Item

\-

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

wt\_dhandle\_read\_lock

The number of read locks acquired for data handles in the WiredTiger cache.

Count

\-

wt\_dhandle\_write\_lock

The number of times a write lock is acquired for a data handle in the WiredTiger cache.

Count

\-

wt\_metadata\_lock

The number of metadata locks acquired in the WiredTiger cache

Count

\-

wt\_schema\_lock

The number of schema locks acquired in the WiredTiger cache.

Count

\-

wt\_table\_read\_lock

The number of table read locks acquired in the WiredTiger cache.

Count

\-

wt\_table\_write\_lock

The number of table write locks acquired in the WiredTiger cache.

Count

\-

wt\_txn\_global\_read\_lock

The number of times the global read lock is acquired in the WiredTiger cache.

Count

\-

wt\_txn\_global\_write\_lock

The number of global write locks acquired in the WiredTiger cache.

Count

\-

Thread yielding

MongoDB\_WtCache\_Thread\_Yield

page\_acquire\_eviction\_blocked

Number of times blocked waiting for page eviction

Count

\-

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

page\_acquire\_locked\_blocked

Number of waits for a locked target page

Times

\-

page\_acquire\_time\_sleeping

Total thread sleep duration when fetching a page

us

\-

WiredTigerUsage

MongoDB\_WTCacheUsage

wt\_cache\_updates\_usage

WiredTiger update cache utilization

%

The proportion of the maximum cache size in bytes that is allocated for update operations.

-   Single node
    
-   ReplicaSet
    
-   Sharded cluster
    

Classic multi-planner execution statistics

MongoDB\_MultiPlanner\_Worker

metrics\_query\_multiplanner\_classicworks

Total number of tasks

Count

The total number of tasks executed by the classic multi-planner.

-   ReplicaSet
    
-   Sharded cluster (mongod only)
    

Logical session cache information

MongoDB\_LogicalSession

active\_sessions\_count

Number of logical sessions in the cache

Item

The total number of logical sessions in the cache since the last refresh.

-   ReplicaSet
    
-   sharded cluster
    

## Advanced monitoring

**Note**

-   Only standalone, replica set, and sharded cluster instances support **Advanced Monitoring**.
    
-   For information about the specific metrics supported by your instance type, see the console.
    

**Supported instances**

**Metric**

**Metric and description**

**Description**

**Unit**

-   Standalone instances
    
-   Replica set instances
    
-   Sharded cluster instances
    

CPU usage

cpu\_usage

The CPU usage of the instance.

%

Memory usage

mem\_usage

The memory usage of the instance.

%

Disk space usage

ins\_size

Total space used.

Bytes

data\_size

Data disk space used.

Bytes

log\_size

Log disk space used.

Bytes

Connection usage

conn\_usage

The ratio of the current number of connections to the maximum number of connections.

%

Cursors

open\_no\_timedout

The number of open cursors that do not have a timeout.

Unit

pinned\_open

The number of cursors that are currently in use.

Unit

open\_total

The total number of open cursors.

Item

closed\_by\_timeout

The number of cursors closed due to a timeout.

Unit

closed\_by\_session

The number of cursors closed because a session was closed.

Unit

Read/write queues

currentQueue\_total

The total number of operations waiting for a lock.

Unit

currentQueue\_readers

The number of operations waiting for a read lock.

Unit

currentQueue\_writers

The number of operations waiting for a write lock.

Count

active\_readers

The number of active client connections performing read operations.

Item

active\_writers

The number of active client connections performing write operations.

Item

Average response time (MongoDB\_RT)

avg\_RT

The average response time of the instance.

microseconds

reads\_avg\_rt

The average response time for read operations.

microseconds

writes\_avg\_rt

The average response time for write operations.

microseconds

commands\_avg\_rt

The average response time for command operations.

microseconds

trans\_avg\_rt

The average response time for transaction operations.

microseconds

WiredTiger request queues

write\_concurrent\_trans\_out

The number of concurrent write requests.

Count

read\_concurrent\_trans\_out

The number of concurrent read requests.

Unit

write\_concurrent\_trans\_available

The number of available concurrent write requests.

Unit

read\_concurrent\_trans\_available

The number of available concurrent read requests.

Unit

I/O latency

iocheck\_cost

The response performance of the current I/O.

**Note**

Supported only for standalone instances and replica set instances that run MongoDB 4.0 or earlier.

ms

WiredTiger cache usage

wt\_cache\_usage

The WiredTiger cache usage.

%

wt\_cache\_dirty\_usage

The WiredTiger dirty cache usage.

%

Number of documents affected

deletedDocuments

The number of documents deleted.

Unit

insertedDocuments

The number of documents inserted.

Unit

returnDocuments

The number of documents returned.

Count

updatedDocuments

The number of documents updated.

Item

Operation details

scanAndOrder

The number of requests that cannot use an index for sorting.

Item

writeConflicts

The number of write conflicts.

Unit

exactIDCount

The number of requests that need to obtain matching \_id information by broadcasting.

Count

Number of indexes and documents scanned in queries

scannedKeys

The number of index keys scanned in queries.

Count

scannedDocs

The number of documents scanned in queries.

Unit

TTL

ttlDeletedDocuments

The number of documents deleted due to a TTL index.

Item

ttlPasses

The number of times the background TTL thread performed deletions.

Item

Lock acquisitions

wiredTiger\_schema\_lock\_delta

The number of times a schema lock was acquired.

Item

wiredTiger\_metadata\_lock\_delta

The number of times a metadata lock was acquired.

Units

wiredTiger\_table\_read\_lock\_delta

The number of times a table read lock was acquired.

Unit

wiredTiger\_table\_write\_lock\_delta

The number of times a table write lock was acquired.

Item

wiredTiger\_txn\_global\_read\_lock\_delta

The number of times a global read lock for transactions was acquired.

Unit

wiredTiger\_txn\_global\_write\_lock\_delta

The number of times a global write lock for transactions was acquired.

Unit

MBPS

read\_io\_bandwidth\_mbps

The disk read throughput.

MB/s

write\_io\_bandwidth\_mbps

The disk write throughput.

MB/s

io\_bandwidth\_mbps

The total disk throughput.

MB/s

Number of transaction operations

trans\_totalPrepared\_ps

The number of prepared transactions.

Unit

trans\_totalPreparedThenCommited\_ps

The number of prepared transactions that were successfully committed.

Count

trans\_totalPreparedThenAborted\_ps

The number of prepared transactions that were successfully rolled back.

Unit

trans\_totalStarted\_ps

The number of started transactions.

Item

trans\_totalCommited\_ps

The number of successfully committed transactions.

Unit

trans\_totalAborted\_ps

The number of successfully rolled back transactions.

Unit

MBPS usage

total\_mbps\_usage

The disk read/write bandwidth usage.

**Note**

-   Supported only for instances that use disks.
    
-   For sharded cluster instances, this metric is valid only for the shard component.
    

%

WiredTiger

bytes\_read\_into\_cache

The amount of data read into the cache.

Bytes

bytes\_written\_from\_cache

The amount of data written to the disk from the cache.

Bytes

maximum\_bytes\_configured

The maximum configured disk size.

Bytes

Disk space usage

disk\_usage

The ratio of the total space used to the maximum available space.

%

Operation QPS

insert

You can insert an operand.

Unit

query

The number of query operations.

Unit

update

The number of update operations.

Count

delete

The number of delete operations.

Item

getmore

The number of read operations.

Count

command

The number of protocol command operations.

Count

Connections

current\_conn

The total number of current connections to the instance.

Item

active\_conn

The number of active connections to the instance.

Unit

Network traffic

bytes\_in

Inbound traffic.

Bytes

bytes\_out

Outbound traffic.

Bytes

-   Replica set instances
    
-   Sharded cluster instances
    

IOPS usage

data\_iops(iops)

IOPS usage.

**Note**

-   Viewing IOPS usage or utilization is not currently supported for disk-based instances of version 4.2.
    
-   The data\_iops and log\_iops metrics from earlier monitoring versions are now merged into data\_iops(iops).
    

counts/s

IOPS usage rate

iops\_usage

The ratio of the IOPS used by the instance to the maximum available IOPS.

**Note**

Instances that use disks and run MongoDB 4.2 do not support viewing IOPS usage and IOPS usage rate.

%

Primary-secondary latency

repl\_lag

The data synchronization latency between the primary and secondary nodes of the instance.

**Note**

-   The heartbeat interval between replica set nodes is 2 seconds. Therefore, a repl\_lag value between -2 and 2 is normal for replica set instances, shard nodes of sharded cluster instances, and ConfigServer nodes.
    
-   A negative repl\_lag value for a secondary node does not mean that the secondary node is ahead of the primary node. To get the latest replication latency status of a replica set, run [rs.printSecondaryReplicationInfo()](https://www.mongodb.com/docs/manual/reference/method/rs.printSecondaryReplicationInfo/#mongodb-method-rs.printSecondaryReplicationInfo) on the primary node.
    

s

Sharded cluster instances

Total operation QPS for the shard component of a sharded cluster

insert\_primary

The number of insert operations on the primary node.

Unit

query\_primary

The number of query operations on the primary node.

Item

update\_primary

The number of update operations on the primary node.

Count

delete\_primary

The number of delete operations on the primary node.

Unit

getmore\_primary

The number of read operations on the primary node.

Unit

command\_primary

The number of protocol command operations on the primary node.

Unit

insert\_secondary

The number of insert operations on secondary nodes.

Item

query\_secondary

The number of query operations on secondary nodes.

Item

insert\_hidden

The number of insert operations on hidden nodes.

Count

query\_hidden

The number of query operations on hidden nodes.

Unit

update\_hidden

The number of update operations on hidden nodes.

Item

delete\_hidden

The number of delete operations on hidden nodes.

Unit

getmore\_hidden

The number of read operations on hidden nodes.

Unit

command\_hidden

The number of protocol command operations on hidden nodes.

Count

Total operation QPS for the Mongos component of a sharded cluster

insert

You can insert an operand.

Unit

query

The number of query operations.

Count

update

The number of update operations.

Item

delete

The number of delete operations.

Count

getmore

The number of read operations.

Item

command

The number of protocol command operations.

Unit

moveChunk

donorCount

The number of times the current node acted as the source for a moveChunk or moveRange operation.

Unit

recipientCount

The number of times the current node acted as the destination shard to receive chunks.

Unit

## **Performance Trend**

**Note**

For information about the metrics supported by each instance type, see the console.

**Supported instances**

**Metric**

**Metric and description**

-   Standalone instance
    
-   Replica set instance
    
-   Sharded cluster instance
    

CPU usage

mongodb.cpu\_usage: The CPU usage of the instance.

Memory usage

mongodb.mem\_usage: The memory usage of the instance.

Disk space usage

The performance trend of disk space usage for the instance. This includes:

-   mongodb.detailed\_space\_usage.ins\_size: The total disk space used.
    
-   mongodb.detailed\_space\_usage.data\_size: The data disk space used.
    
-   mongodb.detailed\_space\_usage.log\_size: The log disk space used.
    

Cursors

The performance trend of the number of cursors for the instance. This includes:

-   mongodb.metrics.cursor.timedOut: The number of cursors that have timed out.
    
-   mongodb.metrics.cursor.open.total: The number of currently open cursors.
    

WiredTiger request queue

The performance trend of the number of read/write requests and the number of available concurrent operations. This includes:

-   mongodb.wiredTiger.write\_concurrent\_trans\_out: The number of concurrent write requests.
    
-   mongodb.wiredTiger.read\_concurrent\_trans\_out: The number of concurrent read requests.
    
-   mongodb.wiredTiger.write\_concurrent\_trans\_available: The number of available concurrent write operations.
    
-   mongodb.wiredTiger.read\_concurrent\_trans\_available: The number of available concurrent read operations.
    

**Note**

This metric is supported only for Standard Edition replica set instances.

WiredTiger

The performance trend of metrics for the cache layer of the instance's WiredTiger engine. This includes:

-   mongodb.wiredTiger.cache.pages.read.into.cache: The volume of data read into the cache.
    
-   mongodb.wiredTiger.cache.pages.written.from.cache: The volume of data written from the cache.
    
-   mongodb.wiredTiger.cache.maximum.bytes.configured: The maximum cache size.
    

**Note**

This metric is supported only for Standard Edition replica set instances.

-   Standalone instance
    
-   Replica set instance
    
-   Sharded cluster instance
    
-   Serverless instance
    

Disk usage

mongodb.disk\_usage: The disk usage of MongoDB.

Operation QPS

The performance trend of operations per second (QPS) for the instance. This includes:

-   mongodb.opcounters.insert: The number of insert operations.
    
-   mongodb.opcounters.query: The number of query operations.
    
-   mongodb.opcounters.update: The number of update operations.
    
-   mongodb.opcounters.delete: The number of delete operations.
    
-   mongodb.opcounters.getmore: The number of getMore operations.
    
-   mongodb.opcounters.command: The number of command operations.
    

Connections

mongodb.connections.current: The total number of current connections to the instance.

Network traffic

The performance trend of network traffic for the instance. This includes:

-   mongodb.network.bytesIn: The inbound traffic.
    
-   mongodb.network.bytesOut: The outbound traffic.
    
-   mongodb.network.numRequests: The number of requests processed.
    

-   Replica set instance
    
-   Sharded cluster instance
    

IOPS usage

The performance trend of input/output operations per second (IOPS) usage. This includes:

-   mongodb.iops.data\_iops: The number of read and write operations on the data disk.
    
-   mongodb.iops.log\_iops: The number of read and write operations on the log disk.
    

IOPS usage rate

mongodb.iops\_usage: The IOPS usage rate.

**Note**

IOPS usage and IOPS usage rate are not supported for version 4.2 replica set instances and sharded cluster instances that use cloud disks.

Replica set instance

GlobalLock

The performance trend of the global lock for the instance. This includes:

-   mongodb.globalLock.currentQueue.total: The total length of the global lock queue.
    
-   mongodb.globalLock.currentQueue.writers: The total length of the global lock write queue.
    
-   mongodb.globalLock.currentQueue.readers: The total length of the global lock read queue.
