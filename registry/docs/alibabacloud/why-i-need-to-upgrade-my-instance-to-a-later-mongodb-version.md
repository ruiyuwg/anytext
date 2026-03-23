As the MongoDB community evolves, MongoDB provides more benefits such as enhanced performance, optimized security, and a wider range of features in the later versions. The MongoDB community has also gradually stopped support and maintenance for earlier MongoDB versions. If you continue to use earlier MongoDB versions, you may encounter various issues and security and stability risks.

MongoDB 4.4 entered the End of Life (EOL) state on February 2024 based on the lifecycle schedules of MongoDB software. To enjoy optimized services, we recommend that you upgrade your instance to a later version, such as MongoDB 5.0, MongoDB 6.0, MongoDB 7.0, or MongoDB 8.0. For more information, see [Lifecycle Schedules](https://www.mongodb.com/legal/support-policy/lifecycles).

## **Risks in earlier versions**

The ApsaraDB for MongoDB team summarizes risks in earlier versions based on the long-term experience in cloud database O&M. This section describes the risks and the recommended versions for resolving these risks.

### Data inconsistency occurs during data migration due to the existence of orphaned documents in sharded cluster instances

-   **Affected versions and architecture**: sharded cluster instances that run MongoDB 4.2 or later.
    
-   **Description**: If you do not clean up orphaned documents in sharded cluster instances at the earliest opportunity, data inconsistency may occur during data migration.
    
-   **Recommended version**: MongoDB 4.4 or later.
    
-   **Reason for recommendation**:
    
    After a chunk is migrated from the source shard to a new shard, the chunk in the source shard is retained for a period of time before deletion. In most cases, orphaned documents are generated due to migration interruption. Orphaned documents do not affect requests on mongos nodes because the requests are checked by the routing data of ConfigServer nodes.
    
    MongoDB 4.4 or later supports self-recovery chunk migration and automatic orphaned document cleanup. If nodes fail, MongoDB automatically recovers the interrupted migration process. You do not need to run the `cleanupOrphaned` command to clean up orphaned documents. You can run this command to confirm whether backend threads are cleaned up orphaned documents in an instance.
    
    For more information, see [cleanupOrphaned](https://www.mongodb.com/docs/v4.4/reference/command/cleanupOrphaned/#mongodb-dbcommand-dbcmd.cleanupOrphaned).
    

### Compact operations block read and write requests

-   **Affected versions and architectures**: instances of all architectures that run MongoDB 4.2 or earlier.
    
-   **Description**: If you want to defragment a disk, read and write requests are blocked after you perform a compact operation on an instance that runs an earlier version. In this case, you can only restart the instance because the operation cannot be interrupted. This affects your business.
    
-   **Recommended version**: MongoDB 4.4 or later.
    
-   **Reason for recommendation**:
    
    Starting from MongoDB 4.4, the locking behavior of the compact command is optimized to ensure that read and write (CRUD) operations are not blocked except for some DDL operations such as `createIndex and dropIndex`. You can run the compact command in a period of time outside a specified maintenance window.
    
    For more information, see [Defragment the disks of an instance to increase disk utilization](/help/en/mongodb/use-cases/defragment-a-disk-to-improve-disk-usage) and [compact Blocking](https://www.mongodb.com/docs/v4.4/reference/command/compact/#blocking).
    
    **Note**
    
    To defragment a disk, we recommend that you use the storage analysis feature provided by ApsaraDB for MongoDB. For more information about the feature, see [Storage analysis](/help/en/mongodb/user-guide/view-the-storage-usage-of-an-apsaradb-for-mongodb-instance).
    

### Compact operations cause nodes to enter the RECOVERING state

-   **Affected versions and architectures**: instances of all architectures whose major version is MongoDB 4.2 or earlier and whose minor version is earlier than MongoDB 4.2.18.
    
-   **Description**: If you want to defragment a disk, nodes in an instance that runs an earlier version enter the RECOVERING state after you perform a compact operation on the instance. If the nodes remain in the state for a long time, the nodes are considered unhealthy by the instance activation component of ApsaraDB for MongoDB. In this case, a re-build operation is triggered.
    
-   **Recommended version**: MongoDB 4.4 or later.
    
-   **Reason for recommendation**:
    
    Starting from MongoDB 4.2.18, mongos nodes do not enter the RECOVERING state after you run the compact command in the nodes. This prevents the existence of unavailable mongos nodes and unexpected re-build task flows.
    
    For more information, see [Defragment the disks of an instance to increase disk utilization](/help/en/mongodb/use-cases/defragment-a-disk-to-improve-disk-usage) and [compact RECOVERING](https://www.mongodb.com/docs/v4.2/reference/command/compact/#replica-sets).
    
    **Note**
    
    To defragment a disk, we recommend that you use the storage analysis feature provided by ApsaraDB for MongoDB. For more information about the feature, see [Storage analysis](/help/en/mongodb/user-guide/view-the-storage-usage-of-an-apsaradb-for-mongodb-instance).
    

### Physical backups in hidden nodes consume a large amount of disk space

-   **Affected versions and architectures**: Instances of all architectures that run MongoDB 4.2 or earlier and uses local disks.
    
-   **Description**: The size of disk files keeps increasing during back uploads due to the physical backup mechanism. If a large number of disk files are accumulated, a large amount of disk space is consumed. If a node failure or switchover occurs, an incorrect alert related to disk usage is triggered.
    
-   **Recommended version**: MongoDB 5.0 or later (cloud disks).
    
-   **Reason for recommendation**:
    
    Full backup in instances that use cloud disks combines physical backup with disk snapshots. Full backup reduces the time required to maintain backup checkpoints in WiredTiger (WT) and resolves disk space bloats due to backups on hidden nodes in an efficient manner.
    
    Snapshot backup and data restoration based on snapshot backup provided by instances that use cloud disks deliver improved performance. If the amount of data in a replica set instance exceeds 2 TB, we recommend that you use snapshot backup to back up data in the instance. This way, do not occur during backup. These issues include long physical backup time required for instances that use local disks, high backup failure rate, and failures to perform other O&M operations.
    

### Routing data exists in a sharded cluster instance when you recreate a database that has the same name as a deleted database

-   **Affected versions and architectures**: sharded cluster instances that run MongoDB 4.4 or earlier.
    
-   **Description**: When you run the `dropDatabase` command in a sharded cluster instance and then recreate a database that has the same name as a deleted database, read and write operations in the instance cannot be performed as expected because routing data exists in the ConfigServer node of the instance.
    
-   **Recommended version**: MongoDB 5.0 or later.
    
-   **Reason for recommendation**:
    
    MongoDB 5.0 or later optimizes the routing data processing of the `dropDatabase` command. This way, routing data does not exist in a sharded cluster instance that runs MongoDB 5.0 or later. In MongoDB 4.2 or earlier, you must repeatedly run the `dropDatabase` command. You must also run the `flushRouterConfig` command on all mongos nodes to refresh routing data. Otherwise, residual routing data degrades database performance.
    
    For more information, see [dropDatabase](https://www.mongodb.com/docs/manual/reference/method/db.dropDatabase/#replica-set-and-sharded-clusters) and [flushRouterConfig](https://www.mongodb.com/docs/manual/reference/command/flushRouterConfig/).
    

### Data synchronization between the primary and secondary nodes is abnormal due to the default writeConcern settings of {w:1}

-   **Affected versions and architectures**: instances of all architectures that run a version earlier than MongoDB 5.0.
    
-   **Description**: If data is quickly written to the primary node of an instance, secondary nodes in the instance may receive only parts of the data and then enter the RECOVERING state. This degrades the availability of the instance. The secondary nodes may fail to read expected data, which compromises business that requires read/write splitting. In this case, incremental backup cannot be performed as expected. and data cannot be restored to a previous point in time.
    
-   **Recommended version**: MongoDB 5.0 or later.
    
-   **Reason for recommendation**:
    
    Starting from MongoDB 5.0, the default value of writeConcern is changed from `{w:1}` to `{w:"majority"}`, indicating that data to be written can be queried only after the data is confirmed by most nodes in a replica set instance. This improves data reliability at a slight performance loss. This also resolves data loss caused by slow query responses or the primary node in the ROLLBACK state due to parts of data received by secondary nodes and flow control triggered on the primary node.
    
    You can set writeConcern to `{w:1}` in scenarios that require high write performance.
    
    For more information, see [Default Write Concern](https://www.mongodb.com/docs/manual/reference/mongodb-defaults/#default-write-concern) and [setDefaultRWConcern](https://www.mongodb.com/docs/manual/reference/command/setDefaultRWConcern/#mongodb-dbcommand-dbcmd.setDefaultRWConcern).
    

### Balancer evenly distributes data at a slow speed, provides poor scaling performance, and fails to perform scale-out activities during peak hours

-   **Affected versions and architectures**: instances of all architectures that run a version earlier than MongoDB 5.0.
    
-   **Description**: The balancer cannot migrate data at a higher speed. Consequently, data cannot be evenly distributed at a fast speed in scenarios that require scale-out activities. This degrades database performance.
    
-   **Recommended version**: MongoDB 5.0 or later.
    
-   **Reason for recommendation**:
    
    Starting from MongoDB 5.0, the `chunkMigrationConcurrency` and `balancerMigrationsThrottlingMs` parameters are added to adjust the migration concurrency and performance of the balancer.
    
    For more information, see [chunkMigrationConcurrency](https://www.mongodb.com/docs/manual/reference/parameters/#mongodb-parameter-param.chunkMigrationConcurrency) and [balancerMigrationsThrottlingMs](https://www.mongodb.com/docs/manual/reference/parameters/#mongodb-parameter-param.balancerMigrationsThrottlingMs).
    
    **Note**
    
    If your instance runs MongoDB 5.0 and does not support the two parameters, update the minor version of the instance. For more information, see [Update the minor version of an instance](/help/en/mongodb/user-guide/upgrade-the-minor-version-of-an-apsaradb-for-mongodb-instance).
    

### Load in a sharded cluster instance is unevenly distributed due to data unbalance

-   **Affected versions and architectures**: instances of all architectures whose major version is MongoDB 5.0 or earlier and whose minor version is earlier than MongoDB 6.0.3.
    
-   **Description**: The balancer checks whether data is evenly distributed based on the number of chunks among shards. If Jumbo and empty chunks exist and portions of data is frequently accessed, data and load unbalance occurs among shards.
    
-   **Recommended version**: MongoDB 6.0 or later.
    
-   **Reason for recommendation**:
    
    Starting from MongoDB 6.0.3, the balancer evenly distributes data based on the difference in data volume among shards instead of that in the number of chunks among shards. This resolves data and load unbalance due to the existence of Jumbo and empty chunks and frequently accessed data in earlier versions.
    
    For more information, see [Changes to the balancer in MongoDB 6.0.3](https://developer.aliyun.com/article/1322986).
    

### Other kernel issues

**Version**

**Kernel issue**

**Risk level**

**Description**

MongoDB 3.4

[SERVER-34192](https://jira.mongodb.org/browse/SERVER-34192)

[SERVER-20328](https://jira.mongodb.org/browse/SERVER-20328)

[SERVER-21307](https://jira.mongodb.org/browse/SERVER-21307)

Medium

\[Cause\]: Read/write splitting is enabled for your instance.

\[Issue description\]: Global locks are added when secondary nodes replay oplogs, which causes slow requests.

MongoDB

4.0

[SERVER-70783](https://jira.mongodb.org/browse/SERVER-70783)

Low

\[Cause\]: The number of connections on the server is significantly increased.

\[Issue description\]: Assertions may be triggered due to insufficient sessions. In this case, mongos nodes fail and a node switchover is triggered.

MongoDB

3.6 to MongoDB 4.2

[SERVER-40535](https://jira.mongodb.org/browse/SERVER-40535)

Low

\[Cause\]: Occasional.

\[Issue description\]: You receive the `Cache Reader No keys found for HMAC that is valid for time` error. In this case, the retry logic is required.

MongoDB

4.2 or earlier

[SERVER-43641](https://jira.mongodb.org/browse/SERVER-43641)

[SERVER-51803](https://jira.mongodb.org/browse/SERVER-51803)

Low

\[Cause\]: Occasional. This issue is related to `/dev/urandom`.

\[Issue description\]: Mongos nodes crash. The nodes automatically recover from failures after the nodes are restarted.

MongoDB

4.0 to MongoDB 4.2

[SERVER-43889](https://jira.mongodb.org/browse/SERVER-43889)

Low

\[Cause\]: Occasional.

\[Issue description\]: The server cannot correctly distinguish transactions from retryable writes, which causes a failed request and an error.

MongoDB

4.0 to MongoDB 4.4

[SERVER-51281](https://jira.mongodb.org/browse/SERVER-51281)

[SERVER-50365](https://jira.mongodb.org/browse/SERVER-50365)

High

\[Cause\]: Long-running transactions.

\[Issue description\]: The write-through cache fails to be evicted as expected, and the percentage of dirty cache lines exceeds 20%. Threads that clean up timeout transaction may be stuck, which causes a significant increase in request latency and degraded database performance.

MongoDB

3.6 to MongoDB 4.4

[SERVER-52654](https://jira.mongodb.org/browse/SERVER-52654)

High

\[Trigger condition\]: ConfigServer nodes are not switched for 90 days.

\[Issue description\]: Issues related to generating Hash-based Message Authentication Code (HMAC) keys on ConfigServer nodes cause mongos nodes to crash and fail to automatically recover from failures.

MongoDB

4.0 to MongoDB 4.4

[SERVER-53566](https://jira.mongodb.org/browse/SERVER-53566)

Medium

\[Cause\]: Occasional.

\[Issue description\]: An assertion error triggered by an opContext causes that mongod crashes and a switchover is triggered.

MongoDB

4.4 or earlier

[SERVER-21307](https://jira.mongodb.org/browse/SERVER-21307)

High

\[Cause\]: DDL operations are recorded in oplogs when indexes are being created on secondary nodes in the backend.

\[Issue description\]: DDL operations are blocked and secondary nodes fail.

MongoDB

4.4 or earlier

[WT-5809](https://jira.mongodb.org/browse/WT-5809)

Medium

\[Cause\]: Nodes are restarted or data synchronization is initialized.

\[Issue description\]: In the node recovery process, issues related to determine the temporal order of history store in WT trigger a WT assertion error, which causes mongod to crash.

MongoDB

4.2 to MongoDB 4.4

[SERVER-51041](https://jira.mongodb.org/browse/SERVER-51041)

High

\[Cause\]: Read/write splitting is enabled for your instance, and the load on secondary nodes are high.

\[Issue description\]: When POSIX threads compete for mutex locks, read tickets on secondary nodes are exhausted and database performance is degraded.

MongoDB

4.2 to MongoDB 4.4

[SERVER-52556](https://jira.mongodb.org/browse/SERVER-52556)

[SERVER-66176](https://jira.mongodb.org/browse/SERVER-66176)

Medium

\[Cause\]: Your application frequently calls the listCollections operation.

\[Issue description\]: Issues related to mutex locks in the underlying CollectionCatalog component significantly degrade database performance.

MongoDB

6.0 or earlier

[SERVER-63865](https://jira.mongodb.org/browse/SERVER-63865)

[SERVER-67038](https://jira.mongodb.org/browse/SERVER-67038)

[SERVER-69877](https://jira.mongodb.org/browse/SERVER-69877)

High

\[Cause\]: An out-of-memory (OOM) error occurs in an instance that runs an earlier version when indexes are being created for the instance.

\[Issue description\]: Mongod is repeatedly restarted and fails to automatically recover from failures. If two nodes in a replica set instance enter this state, the instance becomes unavailable.

MongoDB

6.0 or earlier

[SERVER-56194](https://jira.mongodb.org/browse/SERVER-56194)

Low

\[Cause\]: A large number of expired documents are generated after you create Time to Live (TTL) indexes or modify expiration time.

\[Issue description\]: Backend TTL threads get stuck and fail to automatically recover from failures. This causes that the TTL feature does not take effect.

## New features and optimizations in the later versions

**Version**

**New feature or optimization**

**Description**

MongoDB 5.0

**Time series collections**

Starting from MongoDB 5.0, time series data can be processed in a more effective manner in scenarios such as Internet of Vehicles (IoV) and Internet of Things (loT).

**Long-running snapshot queries**

Starting from MongoDB 5.0, historical snapshots can be read.

**Versioned API**.

Starting from MongoDB 5.0, the versioned API feature is supported. The feature decouples the application lifecycle from the database lifecycle and ensures full compatibility. You **do not need to handle compatibility risks caused by database version upgrades**.

MongoDB 6.0

**ChangeStream**

Starting from MongoDB 6.0, ChangeStream are optimized in the following aspects:

-   **Pre-change views are displayed**.
    
-   Execution efficiency and resource utilization are improved.
    
-   Orphaned document updates can be filtered.
    
-   More DDL change events can be handled. This enhances the support of ApsaraDB for MongoDB for Change Data Capture (CDC) scenarios.
    

**JOIN queries**

ApsaraDB for MongoDB sharded cluster instances that run MongoDB 6.0 or later support the `$lookup` and `$graphLookup` operators to perform JOIN queries and improves the performance of operators related to the JOIN queries.

**Automatic defragmentation in sharded cluster instances**

ApsaraDB for MongoDB sharded cluster instances that run MongoDB 6.0 or later allow you to run the `configureCollectionBalancing` command to specify different chunk size for multiple shards and support automatic defragmentation. **You do not need to run the compact command to defragment the disks of sharded cluster instances.**

**Time series collections**

Starting from MongoDB 6.0, time series collections are optimized in the following aspects:

-   Sharding is supported.
    
-   Columnar compression is supported to reduce storage usage.
    
-   Secondary and compound indexes are introduced to improve read performance.
    
-   Geospatial indexes are introduced for spatio-temporal data.
    
-   Time series data sorting is optimized. You can use time series collections in more time series scenarios and performance is significantly improved.
    

**Enhanced compact command**

ApsaraDB for MongoDB fully optimizes the compact command in WT. This significantly improves the performance of the command and reduces failures caused by the eviction process during the execution of the command.

MongoDB 7.0

**Shard key analysis**

Starting from MongoDB 7.0, you can determine whether the shard key of a collection is reasonable based on the results of sampled queries. This way, you can **configure schema and shard keys** for your instance and use the sharded cluster architecture in a more efficient manner.

**Queryable encryption**

Starting from MongoDB 7.0, queryable encryption ensures that sensitive data is encrypted throughout the data lifetime and is decrypted only on a client. The data lifetime includes the following phases: transmission, at rest, in use, logging, and backing up. This feature ensures enhanced and comprehensive data security and effectively mitigates the risks of **data leaks** caused by data theft.

**Metadata consistency check**

MongoDB 7.0 or later can automatically detect potential **metadata or index inconsistency risks** after a database maintenance period ends or an exception such as an OOM error or a failover does not occur.

**Large change events handled by ChangeStream**

Starting from MongoDB 7.0, the `$changeStreamSplitLargeEvent` operator is added to allow you to split large change events that exceed 16 MB in size. This resolves **the failure of ChangeStream to handle large change events** in earlier versions.

**Dynamic throttling in WT**

MongoDB 7.0 or later dynamically adjusts the transaction concurrency of WT to implement throttling. By default, the transaction concurrency of WT is set to 128. This resolves **database failures caused by accumulated requests after exceptions** in earlier versions.

MongoDB 8.0

**Advanced TCMalloc**

Starting from MongoDB 8.0, advanced TCMalloc is used.

-   Advanced TCMalloc uses the cache of each CPU rather than each thread to reduce memory fragments and enable databases to run more heavy loads.
    
-   Advanced TCMalloc creates a backend thread that attempts to release memory back to operating systems per second.
    

**Optimized replication performance**

-   Starting from MongoDB 8.0, when `writeConcern` is set to `majority`, MongoDB returns oplogs after them have been written to most replica set members, rather than waiting for the change to be applied before returning. This improves write performance in `majority` mode.
    
-   Starting from MongoDB 8.0, secondary nodes write and apply each batch of oplogs in parallel. When a Writer thread reads new oplog entries from a primary node and writes them to the local oplog, an Applier thread asynchronously applies these changes to a local database. This improves the replication throughput of secondary nodes.
    

**Optimized resharding performance**

Starting from MongoDB 8.0, the `reshardCollection` performance is improved. You can use this command to change the shard key of a collection and the distribution of data.

## **References**

-   [MongoDB Software Lifecycle Schedules](https://www.mongodb.com/legal/support-policy/lifecycles)
    
-   [Lifecycle policies for ApsaraDB for MongoDB](/help/en/mongodb/product-overview/mongodb-product-lifecycle-policies)
    
-   [Upgrade the major version of an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/upgrade-the-major-version-of-an-apsaradb-for-mongodb-instance)
    
-   [New features of MongoDB 5.0](/help/en/mongodb/product-overview/features-of-mongodb-5-0)
    
-   [New features of MongoDB 6.0](/help/en/mongodb/product-overview/features-of-mongodb-6-0)
    
-   [New features of MongoDB 7.0](/help/en/mongodb/product-overview/features-of-mongodb-7-0)
    
-   [New features of MongoDB 8.0](/help/en/mongodb/product-overview/features-of-mongodb-8-0)
