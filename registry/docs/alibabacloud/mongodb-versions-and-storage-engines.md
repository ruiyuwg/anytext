Use this page to choose a MongoDB version for your ApsaraDB for MongoDB instance. Each version introduces specific features and supports different instance types. All versions use the WiredTiger storage engine.

## Supported versions

ApsaraDB for MongoDB supports the following versions.

-   [MongoDB 8.0](#a34822cf3enog)
    
-   [MongoDB 7.0](#875a5fd49dyoj)
    
-   [MongoDB 6.0](#section-vwm-4kd-wvm)
    
-   [MongoDB 5.0](#section-okn-x4c-bfb)
    
-   [MongoDB 4.4](#section-xqe-k55-w3o)
    
-   [MongoDB 4.2](#section-k4i-qxv-99p)
    
-   [MongoDB 4.0](#section-tgo-7he-zvr)
    
-   [MongoDB 3.4 (discontinued)](#section-y72-p29-2h0)
    
-   MongoDB 3.2 (discontinued)
    
    MongoDB 3.2 has been discontinued. For more information, see [\[Notice\] ApsaraDB for MongoDB discontinued version 3.2 and launched version 4.2 on February 4](/help/en/mongodb/product-overview/notice-apsaradb-for-mongodb-has-phased-mongodb-3-2-out-and-released-mongodb-4-2-since-february#concept-2347576).
    

**Note** You can manually upgrade the database version while an instance is running. However, you cannot downgrade after an upgrade. For more information, see [Upgrade the major version of an instance](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance#concept-ut5-fp4-fgb).

## Storage engine

**Storage engine**

**Description**

WiredTiger

Default engine for all versions. Uses a B-tree structure and supports data compression, which lowers storage costs. Suitable for most business scenarios.

## Version and instance type matrix

**Instance type**

**MongoDB 4.4 or later**

**MongoDB 4.2**

**MongoDB 4.0**

**MongoDB 3.4 (discontinued)**

Standalone

Not supported

Not supported

Supported

Supported

Replica set

Supported

Supported

Supported

Supported

Sharded cluster

Supported

Supported

Supported

Supported

**Note** Standalone instances are available only in MongoDB 4.0 and 3.4. MongoDB 4.2 and later do not support standalone instances.

## MongoDB 8.0

MongoDB 8.0 introduces an upgraded TCMalloc, improved replication and resharding performance, and changes to sharding, logging, aggregation, and security.

### Upgraded TCMalloc

The upgraded TCMalloc uses per-CPU caches instead of per-thread caches to reduce memory fragmentation and improve adaptability under high-pressure workloads. A background thread attempts to release memory back to the operating system every second.

### Replication performance

When `writeConcern` is set to `majority`, MongoDB 8.0 returns oplog entries after they have been written to most replica set members, rather than waiting for the changes to be applied. This improves write performance in `majority` mode.

Secondary nodes write and apply each batch of oplog entries in parallel. A Writer thread reads new oplog entries from a primary node and writes them to the local oplog, while an Applier thread asynchronously applies these changes to the local database. This improves replication throughput on secondary nodes.

### Resharding performance

MongoDB 8.0 supports the `forceRedistribution` option, which lets you reshard a collection using the same shard key and redistribute data to new shards. This process is much faster than migrating chunks by range. You can also combine this option with `zones` to migrate data to a specific region.

### Sharding

-   Hash sharding creates 1 chunk per shard by default. Prior to MongoDB 8.0, 2 chunks were created by default.
    
-   The `dbhash` command can run on shards.
    
-   The `findAndModify` and `deleteOne` commands can use partial shard keys as query predicates.
    
-   When using the `updateOne` command with `upsert` set to `true` on a sharded collection, you can exclude all shard keys in query predicates.
    
-   You can use the `unshardCollection` command or the `sh.unshardCollection()` method to cancel a sharding operation for an existing collection. This moves all documents to a specific shard or the shard with the least data.
    
-   You can use the `moveCollection` command to move an unsharded collection to a specific shard, without being limited by the primary shard. Time series collections and Queryable Encryption collections cannot be moved, and a collection write block lasts about 2 seconds.
    
-   The following database commands and mongosh helper functions are supported:
    

**Command**

**mongosh helper function**

**Description**

moveCollection

sh.moveCollection()

Moves an unsharded collection to a specific shard.

unshardCollection

sh.unshardCollection()

Cancels sharding for a collection and moves data to a specific shard.

abortMoveCollection

sh.abortMoveCollection()

Stops an ongoing `moveCollection` operation.

abortUnshardCollection

sh.abortUnshardCollection()

Stops an ongoing `unshardCollection` operation.

None

sh.shardAndDistributeCollection()

Shards a collection and immediately redistributes data with an existing shard key. Equivalent to `shardCollection` combined with `reshardCollection`.

### Logging

The `workingMillis` field is added to slow query logs to show time spent on actual operations. Unlike `durationMillis`, which indicates total operation latency, `workingMillis` excludes time consumed by lock waits or traffic throttling.

### Aggregation

-   **binData conversion**: Use the [$convert](https://www.mongodb.com/docs/manual/reference/operator/aggregation/convert/#mongodb-expression-exp.-convert) operator to convert between string and binData values. The [$toUUID](https://www.mongodb.com/docs/manual/reference/operator/aggregation/toUUID/#mongodb-expression-exp.-toUUID) expression provides simplified syntax for converting strings to UUID values.
    
-   **$queryStats**: The [$queryStats](https://www.mongodb.com/docs/manual/reference/operator/aggregation/queryStats/#std-label-queryStats-change-stream-behavior) stage returns statistics for recorded queries and optimizes tracking and reporting metrics in change streams.
    

### Security

-   **Queryable Encryption**: MongoDB 8.0 supports range queries on encrypted fields using `$lt`, `$lte`, `$gt`, and `$gte`.
    
-   **Ingress queue**: MongoDB 8.0 introduces an ingress queue for entrance access control (`ingressAdmissionControllerTicketPoolSize`). Operations sent from the network enter this queue. The queue is unlimited by default. You can set a maximum queue value to control request queuing.
    

### Other changes

-   A new [Query Shape](https://www.mongodb.com/docs/manual/core/query-shapes/) replaces the previous query shape, now called plan cache query shape. The query optimizer uses query settings as additional input for query plan selection.
    
    -   [setQuerySettings](https://www.mongodb.com/docs/manual/reference/command/setQuerySettings/#mongodb-dbcommand-dbcmd.setQuerySettings) includes query settings:
        
        -   Specify index selection. MongoDB 8.0 does not allow `planCacheSetFilter` to set `index filter`.
            
        -   Specify traffic throttling. Use the `reject` option to reject a specific Query Shape.
            
    -   `removeQuerySettings` deletes query settings.
        
    -   `$querySettings` views query settings.
        
-   The `explain()` command includes query plan optimization time in `queryPlanner.optimizationTimeMillis`, measured in milliseconds.
    
-   The `defaultMaxTimeMS` parameter specifies the default time limit for a single read operation, in milliseconds.
    
    -   Applicable operations: `find`, `aggregate` (excluding `$merge` and `$out` stages), `count`, `distinct`, and `dbHash`.
        
    -   If a client specifies `maxTimeMS`, `defaultMaxTimeMS` does not take effect for that operation.
        
-   The `bulkWrite` command can perform insert, update, and delete operations on multiple collections in a single request.
    
-   `updateOne` supports sorting with the `sort` option.
    
-   TTL indexes can be created on capped collections.
    
-   Non-transactional bulk inserts are batch processed in a single oplog entry instead of separate entries. All inserted documents share the same `clusterTime` in change stream events. This improves bulk insert performance and avoids replication delays on secondary nodes.
    
-   Concurrent DDL operations can run on different collections within the same database.
    
-   Adding or removing shards is blocked during DDL operations on a sharded cluster, such as `reshardCollection`. You can perform these actions only after DDL operations complete.
    
-   Index building is improved with faster error reporting and stronger disaster recovery.
    

**Action**

**MongoDB 8.0**

**Prior to MongoDB 8.0**

When to stop index building after errors

An index error detected during the collection scan phase (except duplicate key errors) is returned immediately, and index building stops. For example, an incompatible index value format triggers an immediate error.

An index error detected during the collection scan phase is returned in the commit phase at the end of index building, which may delay error reporting.

Resilient deployment

If an index building error occurs, secondary members can request the primary member to stop index building without crashing. If a member has already voted to commit an index, secondary members cannot request to stop, and they crash (same as MongoDB 7.0 and earlier).

Index building errors may cause secondary members to crash.

Disk space

If available disk space is less than the value specified in `indexBuildMinAvailableDiskSpaceMB`, index building may automatically stop. If a member has voted to commit an index, index building does not stop.

Index building also stops when available disk space is insufficient.

## MongoDB 7.0

MongoDB 7.0 introduces Queryable Encryption (generally available), sharded metadata consistency verification, sampled queries and shard key analysis (analyzeShardKey), and AutoMerger. It also includes changes to sharding, time series collections, aggregation, and security.

### Queryable Encryption

In MongoDB 6.0, Queryable Encryption was in preview. In MongoDB 7.0, this feature is generally available. For more information, see [Queryable Encryption](https://www.mongodb.com/docs/manual/core/queryable-encryption/).

### Sharded metadata consistency verification

MongoDB 7.0 adds the **checkMetadataConsistency** command to check for metadata inconsistencies across shards. Add this check to routine operations and maintenance (O&M) to identify inconsistency risks early. For more information, see [checkMetadataConsistency](https://www.mongodb.com/docs/manual/reference/command/checkMetadataConsistency/#mongodb-dbcommand-dbcmd.checkMetadataConsistency).

### Sampled queries and shard key analysis

You can analyze whether a collection's shard key is appropriate based on sampled query results. This helps you design your schema and shard key more effectively. For more information, see [analyzeShardKey](https://www.mongodb.com/docs/manual/reference/command/analyzeShardKey/#analyzeshardkey) and [configureQueryAnalyzer](https://www.mongodb.com/docs/manual/reference/command/configureQueryAnalyzer/#std-label-configureQueryAnalyzer).

### AutoMerger

MongoDB 7.0 introduces AutoMerger for the balancer. When data or indexes are unevenly distributed, excessive shards exist, or data is migrated, AutoMerger merges chunks to balance data distribution and improve performance. AutoMerger is enabled by default. You can also configure an active window for the balancer to enable AutoMerger.

### Sharding

-   The `rangeDeleterHighPriority` parameter specifies whether orphan document deletion has high priority. By default, this is set to **false**, meaning MongoDB prioritizes business-related delete operations.
    
-   MongoDB 7.0 removes the `operationsBlockedByRefresh` document that contains statistics about operations blocked by catalog cache refreshes. The counters increased on mongos nodes for every operation that used collection routing information, even if not blocked by a catalog refresh.
    
-   Monitoring metrics for resharding are added.
    
-   The `maxSize` option is no longer supported for the **addShard** command.
    
-   When the chunk size of the `config.settings` collection is adjusted, a validity check ensures the new value falls within a range of 1 to 1,024.
    
-   Starting in MongoDB 6.0.3, the balancer policy changed:
    
    -   The balancer distributes data based on data volume difference rather than chunk count between shards.
        
    -   Partitioning is performed by range instead of by chunk.
        
    -   Automatic splitting takes effect only during cross-shard data migration.
        

### Time series collections

-   Restrictions on the **DELETE** command for time series collections from earlier versions are removed. The only remaining restriction is that the command cannot be used in a multi-document transaction.
    
-   Time series collections support the COMPACT command.
    

### Aggregation

MongoDB 7.0 adds operators for bitwise calculations and percentiles:

**Operator**

**Description**

`$bitAnd`

Returns the result of a bitwise AND operation on an INT or LONG value.

`$bitNot`

Returns the result of a bitwise inverse operation on an INT or LONG value.

`$bitOr`

Returns the result of a bitwise OR operation on an INT or LONG value.

`$bitXor`

Returns the result of a bitwise XOR operation on an INT or LONG value.

`$median`

Returns the approximate median (50th percentile).

`$percentile`

Returns the specified percentile.

### Security

-   Key Management Interoperability Protocol (KMIP) V1.0 and V1.1 are supported.
    
-   OpenSSL 3.0 and OpenSSL FIPS are supported.
    

### Other changes

-   Fields such as `catalogCacheIndexLookupDurationMillis` are added to slow query logs. For more information, see [Logging Slow Operations](https://www.mongodb.com/docs/manual/reference/log-messages/#std-label-log-message-slow-ops).
    
-   Storage engine transaction concurrency can be dynamically adjusted. The default concurrency is 128. Starting in MongoDB 7.0, transaction concurrency adjusts automatically. For more information, see [Concurrent Storage Engine Transactions (Read and Write Tickets)](https://www.mongodb.com/docs/manual/release-notes/7.0/#concurrent-storage-engine-transactions--read-and-write-tickets-).
    
-   Fields related to query sampling are added to the currentOp command. For more information, see [currentOp Metrics](https://www.mongodb.com/docs/manual/release-notes/7.0/#currentop-metrics).
    
-   Composite wildcard indexes are supported. For more information, see [Compound Wildcard Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-wildcard/index-wildcard-compound/#std-label-wildcard-index-compound).
    
-   The `$changeStreamSplitLargeEvent` operator splits large change events that exceed 16 MB. For more information, see [Large Change Stream Events](https://www.mongodb.com/docs/manual/release-notes/7.0/#large-change-stream-events).
    
-   Slot-based query execution engine performance is optimized.
    
-   Metrics related to chunk migrations are added. For more information, see [New Sharding Statistics for Chunk Migrations](https://www.mongodb.com/docs/manual/release-notes/7.0/#new-sharding-statistics-for-chunk-migrations).
    
-   The `USER_ROLES` system variable returns the role of the current user.
    
-   Global parameters related to `analyzeShardKey`, `balancer`, and `queryAnalyzers` are added.
    
-   More fields are added to serverStatus results. For more information, see [serverStatus Output Change](https://www.mongodb.com/docs/manual/release-notes/7.0/#serverstatus-output-change).
    

## MongoDB 6.0

MongoDB 6.0 introduces Queryable Encryption and Cluster-to-Cluster Sync. It also includes improvements to time series collections, change streams, aggregation, queries, elasticity, and security.

### Queryable Encryption

Queryable Encryption encrypts sensitive data on the client side, stores it as fully randomized encrypted data on the database server, and supports expressive queries on the encrypted data.

Only the client can view plaintext. When a query reaches the server, it includes an encryption key from Key Management Service (KMS). The server processes the query on ciphertext and returns an encrypted response. The client decrypts the response and presents it in plaintext.

### Cluster-to-Cluster Sync

Cluster-to-Cluster Sync introduces the mongosync tool for continuous, unidirectional data synchronization between two MongoDB instances across any environment, including hybrid, Atlas, on-premises, and edge environments. You can start, stop, resume, or reverse synchronization and monitor the process in real time.

### Time series collections

MongoDB 6.0 improves time series collections in indexing, querying, and sorting:

-   Secondary and compound indexes improve read performance.
    
-   Geo-Indexing adds geographic information to time series data for spatio-temporal analysis. Example scenarios include tracking temperature changes during cold chain transport and monitoring fuel consumption on shipping routes.
    
-   `last point` queries are optimized. You no longer need to scan the entire collection to query the last data point.
    
-   Sorting operations complete more efficiently using clustered and secondary indexes on time and metadata fields.
    

### Change streams

-   Pre-images of changes are now viewable.
    

**Note** Versions before MongoDB 6.0 only support post-images. Starting from MongoDB 6.0, you can view both pre-images and post-images. For more information, see [Change Streams with Document Pre- and Post-Images](https://www.mongodb.com/docs/manual/changeStreams/#change-streams-with-document-pre--and-post-images).

-   DDL statements such as `create`, `createIndexes`, `modify`, and `shardCollection` are supported. For more information, see [Change Events](https://www.mongodb.com/docs/manual/reference/change-events/).
    
-   The `wallTime` field is added to Change Events. The timestamp supports conversion and display operators including `$toDate`, `$tsSeconds`, and `tsIncrement`.
    

### Aggregation

-   Sharded cluster instances support `$lookup` and `$graphLookup`.
    
-   `$lookup` JOINS support is improved.
    
-   `$graphLookup` graph traversal support is improved.
    
-   `$lookup` performance is improved, with up to a hundredfold improvement in some scenarios.
    

**Note** For more information about `$lookup` and `$graphLookup`, see [$lookup (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/) and [$graphLookup (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/graphLookup/).

### Query

MongoDB 6.0 adds operators such as `$maxN`, `$topN`, `$minN`, `$bottomN`, `$lastN`, and `$sortArray`. These operators offload computations from the business layer to the database, making the business layer more lightweight.

**Note** For more information, see [Aggregation Pipeline Operators](https://www.mongodb.com/docs/v6.0/reference/operator/aggregation/).

### Elasticity

-   The default chunk size increases from 64 MB to 128 MB. This reduces data migration frequency and decreases networking and routing layer overhead.
    
-   The `configureCollectionBalancing` command is supported:
    
    -   Set different chunk sizes for different sharded tables. For example, set 256 MB for very large tables and 64 MB or 32 MB for smaller tables where you want even distribution.
        
    -   Actively defragment a collection. Compared with `compact`, this command provides better defragmentation and reduces disk space usage.
        

**Note** For more information, see [configureCollectionBalancing](https://www.mongodb.com/docs/v6.0/reference/command/configureCollectionBalancing/).

### Security

MongoDB 6.0 optimizes Client-Side Field-Level Encryption (CSFLE). CSFLE now supports any key management provider that complies with Key Management Interoperability Protocol (KMIP). In addition to local key management based on KeyFile, MongoDB can integrate with third-party key management devices using KMIP.

**Note** The CSFLE feature is widely used in managing sensitive data, especially in data migration scenarios.

## MongoDB 5.0

The new release cycle in MongoDB 5.0 enables faster delivery of new features.

### Native time series platform

MongoDB 5.0 natively supports the entire lifecycle of time series data, from ingestion, storage, and querying to real-time analysis, visualization, and online archiving or automatic expiration. This makes building and running time series applications faster and more cost-effective. It extends MongoDB's application scenarios in areas such as the Internet of Things (IoT), financial analytics, and logistics.

### Live resharding

You can change a collection's shard key on demand as your business runs and data grows, without database downtime or complex migrations. Run the reshardCollection command in MongoDB Shell, select the database and collection, and specify the new shard key:

```
reshardCollection: "<database>.<collection>", key: <shardkey>
```

**Note** `<database>`: The name of the database to reshard.

**Note** `<collection>`: The name of the collection to reshard.

**Note** `<shardkey>`: The name of the shard key.

**Note** When you call the reshardCollection command, MongoDB clones the existing collection, applies all oplog entries from the existing collection to the new collection, and then automatically switches to the new collection after all oplog entries are applied. The old collection is deleted in the background.

### Versioned API

The Versioned API lets MongoDB add new features and improvements in each release while maintaining backward compatibility. When you need to change an API, you can add a new version and run it concurrently with existing versioned APIs on the same server.

The Versioned API defines a set of commonly used commands and parameters that remain unchanged across major and rapid releases. By pinning your driver to a specific API version, your application can continue running for years without code modifications, even as the database is upgraded.

### Default majority write concern

Starting from MongoDB 5.0, the default write concern is `majority`. A write operation is committed and a success response is returned only when the write has been applied to the primary node and persisted to the logs of a majority of replica set members. This provides stronger data reliability out of the box.

### Long-running snapshot queries

Long-running snapshot queries run with a default duration of 5 minutes (adjustable) while maintaining snapshot isolation consistent with a real-time transactional database. You can run snapshot queries on secondary nodes, which lets you run different workloads in a single cluster and scale them across shards.

### New MongoDB Shell

MongoDB 5.0 redesigned the MongoDB Shell (mongosh) from the ground up. It is the default shell for the MongoDB platform. Features include syntax highlighting, intelligent auto-completion, contextual help, and useful error messages.

### Version release adjustment

Starting from MongoDB 5.0, releases are divided into Major Releases and Rapid Releases. Rapid Releases are development versions for download and testing but are not recommended for production environments.

## MongoDB 4.4

MongoDB 4.4 addresses the top user pain points from previous versions.

### Hidden indexes

You can hide existing indexes to prevent them from being used in subsequent queries. This lets you observe whether deleting a target inefficient index causes performance fluctuations. If there is no impact, you can safely delete the index.

### Refinable shard keys

You can add one or more suffix fields to improve the distribution of existing documents on chunks. This avoids concentrating access on a single shard and distributes the server load.

### Compound hashed shard keys

You can specify a single hashed field in a compound index, which simplifies business logic.

### Hedged reads

For sharded cluster instances, a read request can be sent to two replica set members of a shard simultaneously. The result from the fastest member is returned to the client, reducing request latency.

### Streaming replication

Oplog entries from the primary node are actively streamed to the secondary node. Compared with the polling method in previous versions, this saves nearly half the round-trip time and improves primary-secondary replication performance.

### Simultaneous indexing

Index creation on the primary and secondary nodes is synchronous. This reduces index creation latency and ensures that the secondary node can promptly access the latest data.

### Mirrored reads

The primary node replicates a portion of read traffic to the secondary node. This ensures the secondary node handles some read traffic, reducing business access latency.

### Resumable initial sync

Resumable Initial Sync provides a resumable transfer feature during full synchronization between primary and secondary nodes. This prevents full synchronization from restarting due to network disconnections.

### Time-based oplog retention

Time-Based Oplog Retention lets you customize the retention period for oplog entries to prevent them from being cleared on the primary node, which would trigger a full synchronization.

### Union

MongoDB 4.4 adds the [$unionWith stage](https://docs.mongodb.com/master/reference/operator/aggregation/unionWith/) to implement functionality similar to SQL's `union all`, expanding query capabilities.

### Custom aggregation expressions

MongoDB 4.4 adds [$accumulator](https://docs.mongodb.com/master/reference/operator/aggregation/accumulator/#grp._S_accumulator) and [$function](https://docs.mongodb.com/master/reference/operator/aggregation/function/#exp._S_function) to implement custom Aggregation Expressions.

**Note** For more information about the new features of MongoDB 4.4, see [Overview of MongoDB 4.4 features](/help/en/mongodb/product-overview/features-of-mongodb-4#concept-1956750).

## MongoDB 4.2

MongoDB 4.2 uses a two-phase commit method to ensure the atomicity, consistency, isolation, and durability (ACID) properties of transactions in sharded clusters.

### Distributed transactions

Distributed transactions use a two-phase commit method to ensure ACID properties in sharded clusters. This marks a leap from NoSQL to NewSQL.

### Retryable reads

Retryable reads provide an automatic retry capability in weak network environments. This reduces complexity on the business side and ensures business continuity.

### Wildcard indexes

For fields that are not predetermined, you can create a wildcard index to cover multiple feature fields under a document.

### Field-level encryption

Field-level encryption is supported at the driver level. You can encrypt specific sensitive information, such as account names, passwords, prices, and phone numbers. This avoids full-database encryption and improves flexibility and security.

### Materialized views

Materialized views cache calculation results to avoid repeated calculations, improve operational efficiency, and reduce logical complexity.

## MongoDB 4.0

MongoDB 4.0 is suitable for scenarios such as finance that rely on transactions and use NoSQL features.

### Cross-document transaction support

MongoDB 4.0 is the first NoSQL cloud database to support cross-document transactions. It combines the speed, flexibility, and functionality of the document model with ACID guarantees.

### 40% faster migration speed

Concurrent reads and writes allow newly added shard nodes to complete data migration faster.

### Expanded read performance

With the transaction feature, secondary nodes no longer block read requests due to log synchronization. Alibaba Cloud also supports a multi-node extension feature across all versions, which can improve the read capabilities of your business.

## MongoDB 3.4 (discontinued)

MongoDB 3.4 offers various improvements in performance and security compared with version 3.2.

**Note** MongoDB 3.2 has been discontinued. For more information, see [\[Notice\] ApsaraDB for MongoDB discontinued version 3.2 and launched version 4.2 on February 4](/help/en/mongodb/product-overview/notice-apsaradb-for-mongodb-has-phased-mongodb-3-2-out-and-released-mongodb-4-2-since-february#concept-2347576).

### Faster primary-secondary synchronization

All indexes are built while data is being synchronized. Previous versions only built the \_id index. During the data synchronization phase, secondary nodes continuously read new oplog information to ensure enough storage space for temporary data.

### More efficient load balancing

In version 3.2 and earlier, load balancing for sharded clusters was handled by mongos nodes. Multiple mongos nodes competed for a distributed lock. The node that acquired the lock performed load balancing and migrated chunks between shard nodes. In version 3.4, load balancing is handled by the primary node in the config server, which improves both concurrency and efficiency.

### Richer aggregation operations

Version 3.4 introduces several aggregation operators. For example, `bucket` simplifies data categorization, `$graphLookup` supports more complex relationship operations than the `$lookup` operator from version 3.2, and `$addFields` enables advanced document operations such as summing specific fields and storing the result as a new field.

### Support for sharding zones

The Zone concept replaces the tag-aware sharding mechanism in sharded clusters. It assigns data to one or more specified shard nodes, facilitating cross-data-center deployment.

### Support for collation

In previous versions, strings were compared byte by byte regardless of language or case. With Collation, string content is interpreted and compared according to the locale. Case-insensitive comparison is also supported.

### Support for read-only views

Version 3.4 adds read-only views. Data in a collection that meets a specific query condition can be virtualized into a special collection for further query operations.
