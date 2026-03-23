You can modify parameters for your ApsaraDB for MongoDB instance in the console. Incorrect values for important parameters can cause performance issues or application errors. This topic provides tuning recommendations for key parameters to help you configure them correctly.

**Note**

This topic covers only kernel parameters. It does not include client-side driver parameters, such as socketTimeout.

## Replica sets

### operationProfiling.mode

-   **Applicable major versions**: 3.0 and later
    
-   **Restart required after modification**: Yes
    
-   **Default value**: `off`
    
-   **Function**: Specifies the level for the query profiler.
    
-   **Symptoms**:
    
    -   If this parameter is set to `all` or `slowOp` and many slow query logs are generated, instance performance may degrade.
        
    -   Some users may forget to disable the query profiler and find a `system.profile` collection in one of their databases.
        
    -   Some users may mistakenly believe that this parameter must be set to `slowOp` to generate slow query logs.
        
-   **Recommendations**:
    
    Keep the default value. Enabling the query profiler can degrade instance performance, and slow query logs usually provide similar information for analysis. Enable the profiler only when necessary, and disable it promptly after you finish your analysis. For more information about the Database Profiler, see the [official documentation](https://www.mongodb.com/docs/v6.0/tutorial/manage-the-database-profiler/#std-label-database-profiling-overhead).
    

### operationProfiling.slowOpThresholdMs

-   **Applicable major versions**: 3.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `100`
    
-   **Function**: Defines the threshold for a slow query.
    
-   **Symptoms**:
    
    -   If the value is too small, many slow query and audit logs are generated. This creates noise that complicates slow query analysis.
        
    -   If the value is too large, many slow queries are not recorded in the logs. This complicates the slow query analysis process.
        
-   **Recommendations**: Adjust the threshold based on your business needs. Set this parameter to a value slightly higher than the average running time of your core queries. For example:
    
    -   For a business that is sensitive to query latency and has a typical query time of around 30 ms, you can lower this parameter to 50 to help analyze transient slow query jitter.
        
    -   For a business with heavy analytical queries and a typical query time of 300 ms to 400 ms, you can increase this parameter to 500 ms to reduce slow log noise.
        

### replication.oplogGlobalIdEnabled

-   **Applicable major versions**: 4.0 and later
    
-   **Restart required after modification**: Yes
    
-   **Default value**: `false`
    
-   **Function**: Specifies whether to enable global IDs (GIDs) in the oplog to support two-way synchronization with DTS or mongoShake. This is a self-developed parameter. GIDs are used to resolve circular synchronization issues in two-way synchronization.
    
-   **Recommendations**: Enable this parameter only when you need two-way synchronization. This change requires an instance restart, so make the change during off-peak hours.
    

### replication.oplogSizeMB

-   **Applicable major versions**: 3.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `10% of the disk space for the instance type`. For example, if the instance has 500 GB of disk space, the initial oplogSizeMB is 51200, which is 50 GB.
    
-   **Function**: Specifies the maximum logical size of the oplog collection that stores logical synchronization logs.
    
-   **Symptoms**: If this value is too small, secondary nodes may fail to keep up and enter the RECOVERING state. Log backups may also miss oplog records, creating gaps that prevent a point-in-time restore.
    
-   **Recommendations**: Keep the default value. Do not decrease it. Increase it if needed. Consider increasing the value if your workload involves a small data volume but frequent updates, which generates oplog entries quickly. A larger \`oplogSizeMB\` allows the oplog to cover a longer period, which prevents gaps in the oplog records. As a best practice, set the oplog size to retain at least one hour of oplog records.
    

**Note**

This parameter is not modified by changing it in the configuration file. The Alibaba Cloud control plane adjusts the oplog size using a dedicated replsetResizeOplog command.

### setParameter.cursorTimeoutMillis

-   **Applicable major versions**: 3.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `600000` (10 min)
    
-   **Function**: The expiration threshold for an idle cursor, in milliseconds. If a cursor is idle for longer than this threshold, MongoDB automatically cleans it up.
    
-   **Symptom**: If you try to access a cursor that has been cleaned up, the client receives an error in the following format:
    
    ```
    Message: "cursor id xxxxxxx not found"
    ErrorCode: CursorNotFound(43)
    ```
    
-   **Recommendations**: Do not increase this value. To reduce the resource overhead of idle cursors, you can decrease the value, for example, to 300000. In all scenarios, avoid having long-idling cursors on the business side.
    

### setParameter.flowControlTargetLagSeconds

-   **Applicable major versions**: 4.2 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `10`
    
-   **Function**: The threshold that triggers the [flow control](https://www.mongodb.com/docs/manual/replication/#replication-lag-and-flow-control) mechanism. Flow control ensures that most commit points do not fall too far behind.
    
-   **Symptom**: Slow query logs similar to the following appear. The requests are noticeably affected, and the running time increases significantly. The \`durationMillis\` is nearly equal to \`flowControl.timeAcquiringMicros\`, which indicates that the slow request is mainly affected by flow control.
    
    ```
    {
      "t": {
        "$date": "2024-04-25T13:28:45.840+08:00"
      },
      "s": "I",
      "c": "WRITE",
      "id": 51803,
      "ctx": "conn199253",
      "msg": "Slow query",
      "attr": {
        "type": "update",
        "ns": "xxx.xxxxx",
        "command": ...,
        "planSummary": "IDHACK",
        "totalOplogSlotDurationMicros": 61,
        "keysExamined": 1,
        "docsExamined": 1,
        "nMatched": 1,
        "nModified": 1,
        "nUpserted": 0,
        "keysInserted": 0,
        "keysDeleted": 0,
        "numYields": 0,
        "locks": ...,
        "flowControl": {
          "acquireCount": 1,
          "acquireWaitCount": 1,
          "timeAcquiringMicros": 959000
        },
        "readConcern": {
          "level": "local",
          "provenance": "implicitDefault"
        },
        "storage": {},
        "cpuNanos": 258845,
        "remote": "172.16.6.38:52368",
        "durationMillis": 959
      }
    }
    ```
    
-   **Recommendations**: You can increase this parameter to reduce the sensitivity of the flow control mechanism. If requests are still frequently throttled after you increase the value, the instance has a performance bottleneck in primary-secondary synchronization. You must analyze this issue further and take other actions to resolve it, such as upgrading the instance configuration or setting the write concern to majority.
    

### setParameter.oplogFetcherUsesExhaust

-   **Applicable major versions**: 4.4 and later
    
-   **Restart required after modification**: Yes
    
-   **Default value**: `true`
    
-   **Function**: Specifies whether to enable [Stream Replication](https://www.mongodb.com/docs/v4.4/core/replica-set-sync/#std-label-replica-set-streaming-replication). If you disable this feature, primary-secondary synchronization reverts to the pull method used in previous versions. In this method, a secondary node sends a request to the sync source to retrieve a batch of oplog entries and then waits for a reply. This means each batch of oplog entries requires one network round trip.
    
-   **Symptom**: In some scenarios, the stream replication mechanism may cause extra performance overhead and network bandwidth overhead.
    
-   **Recommendations**: Do not adjust this parameter. Stream replication can reduce replication delay in high-load and high-latency network environments. It can also reduce the risk of data loss from writes if the primary node with a write concern of `{w:1}` goes down unexpectedly. It can also reduce write latency for other write concerns that depend on primary-secondary replication, such as `{w:majority}` or `{w:>1}`.
    

### setParameter.maxTransactionLockRequestTimeoutMillis

-   **Applicable major versions**: 4.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `5`
    
-   **Function**: Specifies the timeout for a transaction to acquire a lock, in milliseconds. If an operation in a transaction cannot acquire the required lock within the specified time, the transaction automatically aborts.
    
-   **Symptom**: A lock timeout error message similar to the following appears in logs or on the client. Newer drivers automatically retry on a \`TransientTransactionError\`, so the error may only appear in the logs and not be visible to the client.
    
    ```
    Message: "Unable to acquire lock '{8442595743001781021: Database, 1525066715360699165}' within a max lock request timeout of '5ms' milliseconds."
    ErrorCode: LockTimeout(24)
    ```
    
-   **Recommendations**: If the client frequently encounters similar errors, you can try to increase this parameter. This can help reduce transaction aborts caused by the inability to acquire a concurrent lock. However, it also delays the abortion of deadlocked transaction operations. If the problem persists after you increase the parameter, do not increase it further. Instead, optimize your business logic. For example, avoid concurrent modifications to the same document within a transaction. Also, review the operations in the transaction to check for any operations that might hold locks for a long time, such as Data Definition Language (DDL) or unoptimized queries. This helps prevent similar issues at the source.
    

### setParameter.replWriterThreadCount

-   **Applicable major versions**: 3.2 and later
    
-   **Restart required after modification**: Yes
    
-   **Default value**: `16`
    
-   **Function**: Specifies the maximum number of threads for parallel replication during primary-secondary synchronization. The effective maximum number of threads is twice the number of CPU cores of the instance type.
    
-   **Symptom**: In extreme scenarios, primary-secondary synchronization may be delayed, causing the replication delay (lag) on secondary nodes to increase continuously.
    
-   **Recommendations**: In most cases, do not adjust this parameter. In special cases, adjust it based on the recommendations of Alibaba Cloud engineers.
    

### setParameter.tcmallocAggressiveMemoryDecommit

-   **Applicable major versions**: 4.2 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `0` (Disables aggressive decommit for TCMalloc)
    
-   **Function**: MongoDB uses TCMalloc as its memory allocator. This parameter controls whether to enable the aggressive decommit policy for TCMalloc. When enabled, MongoDB actively tries to merge contiguous free memory blocks and return some memory to the operating system.
    
-   **Symptoms**:
    
    -   An out-of-memory (OOM) error occurs on a mongod node because memory cannot be reclaimed fast enough to keep up with high memory consumption from queries.
        
    -   As the instance runs, heap memory fragments increase. This appears as memory usage that exceeds 80% and rises slowly but steadily.
        
-   **Recommendations**: In most cases, do not adjust this parameter. If you have memory-related issues, consider adjusting it during off-peak hours.
    

**Important**

Enabling this parameter may cause some performance degradation, depending on your workload. Try to enable this parameter only during off-peak hours. After the adjustment, monitor your business for a period of time. If your business is affected, promptly roll back the parameter change.

### setParameter.transactionLifetimeLimitSeconds

-   **Applicable major versions**: 4.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `60`
    
-   **Function**: Specifies the lifecycle of a transaction, in seconds. If the total running time of a transaction exceeds this limit, it is marked as expired and is actively aborted by a periodic background cleanup thread.
    
-   **Symptom**: The client encounters an error in the following format:
    
    ```
    Message: "Aborting transaction with txnNumber xxx on session with lsid xxxxxxxxxx because it has been running for longer than 'transactionLifetimeLimitSeconds'"
    ```
    
-   **Recommendations**: You can decrease this value, for example, to `30`. Do not increase it. Long-running transactions that are not committed can put heavy pressure on the WiredTiger storage engine's cache. An overloaded cache can lead to more problems, such as database stuttering, large increases in request latency, and full CPU utilization, which can harm your business. Avoid long-running transactions in all scenarios. To resolve timeout issues, break transactions into smaller parts that can finish within the configured time limit. You must also optimize your queries and ensure they have proper index coverage for fast data access within transactions.
    

For more information about best practices for using transactions, see [Transactions and Read/Write Concern](/help/en/mongodb/use-cases/transactions-and-read-write-concern).

### storage.oplogMinRetentionHours

-   **Applicable major versions**: 4.4 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `0` (This parameter is disabled. The oplog size is controlled entirely by the `replication.oplogSizeMB` parameter.)
    
-   **Function**: Specifies the minimum retention period for the oplog collection, which stores logical synchronization logs.
    
-   **Symptoms**:
    
    -   If this value is too large, the oplog collection occupies too much disk space.
        
    -   Some users forget that they have set this parameter and are confused by fluctuations in the instance's disk space.
        
-   **Recommendations**: For relatively stable workloads, keep the default value. For workloads that may experience large changes in write operations, set this parameter to a floating-point number greater than 1.0. When you set this parameter, also evaluate the potential disk space usage to avoid triggering a disk-full lock, which can cause other issues.
    

### storage.wiredTiger.collectionConfig.blockCompressor

-   **Applicable major versions**: 3.0 and later
    
-   **Restart required after modification**: Yes
    
-   **Default value**: `snappy`
    
-   **Function**: Sets the storage compression algorithm for collection data. This change affects only new collections. Existing collections are not affected. Supported algorithms include \`none\` (no compression), `snappy`, `zlib`, and `zstd`. The `zstd` algorithm is supported only in MongoDB 4.2 and later.
    
-   **Recommendations**: Modify this parameter as needed. Different compression algorithms have different performance characteristics. Some offer higher compression ratios but have greater CPU overhead for compression and decompression. The actual comparison between compression algorithms should be based on your own test results. If the instance is mainly used to store cold data, consider changing this parameter to `zstd` to achieve a higher compression ratio.
    
    **Note**
    
    If you want to use different compression algorithms for different collections, use the explicit `createCollection` command with the relevant options. For more information, see the [MongoDB official documentation](https://www.mongodb.com/docs/manual/reference/method/db.createCollection/#specify-storage-engine-options).
    

### **setParameter.minSnapshotHistoryWindowInSeconds/setParameter.maxTargetSnapshotHistoryWindowInSeconds**

-   **Applicable major versions**: 4.4 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `300` (5 minutes)
    
-   **Function**: The size of the window for which the WiredTiger engine retains snapshot history. The unit is seconds. A value of 0 disables the snapshot history window. This parameter is mainly used to support reads using [atClusterTime](https://www.mongodb.com/docs/manual/reference/read-concern-snapshot/#std-label-atClusterTime).
    
-   **Symptom**: This parameter can add pressure to the WiredTiger cache (WT cache), especially in scenarios where the same document is frequently updated.
    
-   **Recommendations**: In most cases, no adjustment is needed.
    
    -   If your business does not use the read historical snapshot (read atClusterTime) feature, you can set this parameter to 0 to obtain a performance improvement.
        
    -   If your business needs to read snapshot data from more than 5 minutes ago, you can increase this parameter. However, be aware of the extra memory consumption and performance overhead that this may cause.
        
    
    **Note**
    
    If this parameter value is small and you specify an earlier time when reading a historical snapshot, a `SnapshotTooOld` error is returned.
    

### **rsconf.chainingAllowed**

-   **Applicable major versions**: 4.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `true`
    
-   **Function**: Specifies whether to allow chained replication in the replica set.
    
-   **Symptoms**:
    
    -   Disabling chained replication may increase the load on the primary node, for example, CPU utilization and network traffic.
        
    -   Enabling chained replication may make it easier for secondary nodes to lag in data replication.
        
-   **Recommendations**:
    
    -   For four or fewer nodes: Enable or disable chained replication as needed.
        
    -   For five or more nodes: If the write concern is set to `{w:majority}`, you must make a trade-off between primary node load and instance performance. Disabling chained replication improves write performance, but it also significantly increases the load on the primary node.
        

#### **setParameter.internalQueryMaxPushBytes/setParameter.internalQueryMaxAddToSetBytes**

-   **Applicable major versions:** 4.2 and later
    
-   **Restart required after modification:** No
    
-   **Default value:** 104857600 B (100 MB)
    
-   **Function:** Limits the maximum memory that the `$push` and `$addToSet` operators can use.
    
-   **Symptom**: A specific query that contains `$push` or `$addToSet` fails and returns an error message similar to the following.
    
    ```
    "errMsg": "$push used too much memory and cannot spill to disk. Memory limit: 104857600... 
    ```
    
-   **Recommendation:** In most cases, no adjustment is needed. If you encounter this error when you run a specific query, you can increase the value. Note that if you set this parameter to a very large value, an out-of-memory (OOM) error may occur on the mongod node.
    

## **Sharded clusters (Shard)**

### setParameter.migrateCloneInsertionBatchSize

-   **Applicable major versions**: 4.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `0` (Limited by the 16 MB document size limit)
    
-   **Function**: Specifies the maximum number of documents in a single batch during the clone step of a chunk migration.
    
-   **Symptom**: In some scenarios, chunk migration may cause performance fluctuations on the shard.
    
-   **Recommendations**: In most cases, no adjustment is needed. If your sharded cluster instance experiences performance fluctuations due to chunk migration during balancing, consider adjusting this parameter to a fixed batch size.
    

### setParameter.rangeDeleterBatchDelayMS

-   **Applicable major versions**: 4.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `20`
    
-   **Function**: The interval between batch deletions during the cleanup step of a chunk migration. This also affects the `cleanupOrphaned` command, which cleans up orphaned documents. The unit is milliseconds.
    
-   **Symptoms**:
    
    -   In some scenarios, asynchronous deletion of documents after a chunk migration can cause a CPU spike.
        
    -   If the value is too large, documents may not be deleted in time and become orphaned. Alternatively, if too many documents need to be deleted, a timeout may occur, resulting in the following error log:
        
        ```
        Message: "OperationFailed: Data transfer error: ExceededTimeLimit: Failed to delete orphaned <db>.<collection> range [xxxxxx,xxxxx] :: caused by :: operation exceeded time limit"
        ```
        
-   **Recommendations**: In most cases, no adjustment is needed. If the CPU utilization of your sharded cluster instance spikes due to asynchronous document deletion during balancing, consider increasing this parameter, for example, to `200`.
    

### setParameter.rangeDeleterBatchSize

-   **Applicable major versions**: 4.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `0` (Automatically selects a reasonable batch size, usually 128)
    
-   **Function**: Specifies the maximum number of documents in a single batch for asynchronous deletion during the cleanup step of a chunk migration.
    
-   **Symptom**: In some scenarios, asynchronous deletion of documents after a chunk migration can cause a CPU utilization spike.
    
-   **Recommendations**: In most cases, no adjustment is needed. If the CPU utilization of your sharded cluster instance spikes due to asynchronous document deletion during balancing, consider adjusting this parameter to a fixed batch size.
    

**Note**

This parameter and the setParameter.rangeDeleterBatchDelayMS parameter work together to affect the asynchronous document deletion process after chunk migration. You can adjust them separately, in combination, or incrementally.

### **setParameter.receiveChunkWaitForRangeDeleterTimeoutMS**

-   **Applicable major versions**: 4.4 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `10000` (10 seconds)
    
-   **Function**: Specifies the timeout for waiting to delete orphaned documents before a chunk migration, in milliseconds.
    
-   **Symptom**: While the balancer is running, you may see the following timeout error log:
    
    ```
    ExceededTimeLimit: Failed to delete orphaned <db.collection> range [{ <shard_key>: MinKey }, { <shard_key>: -9186000910690368367 }) :: caused by :: operation exceeded time limit
    ```
    
-   **Recommendations**: In most cases, no adjustment is needed. If you encounter the preceding error, you can increase this parameter. This allows the moveChunk operation to wait longer for the orphaned document deletion to complete, which helps avoid similar timeout errors.
    

### **setParameter.minSnapshotHistoryWindowInSeconds/setParameter.maxTargetSnapshotHistoryWindowInSeconds**

-   **Applicable major versions**: 4.4 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `300` (5 minutes)
    
-   **Function**: The size of the window for which the WiredTiger engine retains snapshot history. The unit is seconds. A value of 0 disables the snapshot history window. This parameter is mainly used to support reads using [atClusterTime](https://www.mongodb.com/docs/manual/reference/read-concern-snapshot/#std-label-atClusterTime).
    
-   **Symptom**: This parameter can add pressure to the WiredTiger cache (WT cache), especially in scenarios where the same document is frequently updated.
    
-   **Recommendations**: In most cases, no adjustment is needed.
    
    -   If your business does not use the read historical snapshot (read atClusterTime) feature, you can set this parameter to 0 to obtain a performance improvement.
        
    -   If your business needs to read snapshot data from more than 5 minutes ago, you can increase this parameter. However, be aware of the extra memory consumption and performance overhead that this may cause.
        
    
    **Note**
    
    If this parameter value is small and you specify an earlier time when reading a historical snapshot, a `SnapshotTooOld` error is returned.
    

### **rsconf.chainingAllowed**

-   **Applicable major versions**: 4.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `true`
    
-   **Function**: Specifies whether to allow chained replication in the shard.
    
-   **Symptoms**:
    
    -   Disabling chained replication may increase the load on the primary node, for example, CPU utilization and network traffic.
        
    -   Enabling chained replication may make it easier for secondary nodes to lag in data replication.
        
-   **Recommendations**:
    
    -   For four or fewer nodes: Enable or disable chained replication as needed.
        
    -   For five or more nodes: If the write concern is set to `{w:majority}`, you must make a trade-off between primary node load and instance performance. Disabling chained replication improves write performance, but it also significantly increases the load on the primary node.
        

### **setParameter.internalQueryMaxPushBytes/setParameter.internalQueryMaxAddToSetBytes**

-   **Applicable major versions:** 4.2 and later
    
-   **Restart required after modification:** No
    
-   **Default value:** 104857600 B (100 MB)
    
-   **Function:** Limits the maximum memory that the `$push` and `$addToSet` operators can use.
    
-   **Symptom**: A specific query that contains `$push` or `$addToSet` fails and returns an error message similar to the following.
    
    ```
    "errMsg": "$push used too much memory and cannot spill to disk. Memory limit: 104857600... 
    ```
    
-   **Recommendation:** In most cases, no adjustment is needed. If you encounter this error when you run a specific query, you can increase the value. Note that if you set this parameter to a very large value, an out-of-memory (OOM) error may occur on the mongod node.
    

## **Sharded clusters (Mongos)**

### operationProfiling.slowOpThresholdMs

-   **Applicable major versions**: 3.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `100`
    
-   **Function**: Defines the threshold for a slow query.
    
-   **Symptoms:**
    
    -   If the value is too small, many slow query and audit logs are generated. This creates noise that complicates slow query analysis.
        
    -   If the value is too large, many slow queries are not recorded in the logs. This complicates the slow query analysis process.
        
-   **Recommendations**: Adjust the threshold based on your business needs. Set this parameter to a value slightly higher than the average running time of your core queries. For example:
    
    -   For a business that is sensitive to query latency and has a typical query time of around 30 ms, you can lower this parameter to 50 to help analyze transient slow query jitter.
        
    -   For a business with heavy analytical queries and a typical query time of 300 ms to 400 ms, you can increase this parameter to 500 ms to reduce slow log noise.
        

### setParameter.ShardingTaskExecutorPoolMaxConnecting

-   **Applicable major versions**: 3.6 and later
    
-   **Restart required after modification**:
    
    -   For 3.6 and 4.0: Yes
        
    -   For 4.2 and later: No
        
-   **Default value**: `2`
    
-   **Function**: Specifies the maximum concurrency for initializing connections in the TaskExecutor connection pool on a Mongos node of a sharded cluster instance. This controls the speed at which connections are established from Mongos to mongod.
    
-   **Symptom**: If this value is large, the CPU utilization of the Mongos node may spike when many connections are created.
    
-   **Recommendations**: Do not adjust this parameter.
    

### setParameter.ShardingTaskExecutorPoolMaxSize

-   **Applicable major versions**: 3.6 and later
    
-   **Restart required after modification**:
    
    -   For 3.6 and 4.0: Yes
        
    -   For 4.2 and later: No
        
-   **Default value**: `2^64-1` (the maximum value for a 64-bit integer)
    
-   **Function**: Specifies the maximum number of connections in each TaskExecutor connection pool on a Mongos node of a sharded cluster instance.
    
-   **Recommendations**: No adjustment is needed. You can set this parameter to limit the upper bound of the connection pool from Mongos to a shard. However, do not set it to a very small value. Otherwise, requests on Mongos may be blocked when the connection pool is exhausted.
    

### setParameter.ShardingTaskExecutorPoolMinSize

-   **Applicable major versions**: 3.6 and later
    
-   **Restart required after modification**:
    
    -   For 3.6 and 4.0: Yes
        
    -   For 4.2 and later: No
        
-   **Default value**: `1`
    
-   **Function**: Specifies the minimum number of connections in each TaskExecutor connection pool on a Mongos node of a sharded cluster instance.
    
-   **Symptom**: In some scenarios, a burst of requests on Mongos can cause the TaskExecutor connection pool to create many new connections. This can lead to a CPU spike and other issues on the Mongos node.
    
-   **Recommendations**: Set this to a reasonable value in the range of `[10,50]`. The specific value depends on the topology of your sharded cluster, such as the number of shards and the number of nodes in each shard. Note that Mongos incurs a small resource overhead to maintain these idle connections to shards.
    

### setParameter.cursorTimeoutMillis

-   **Applicable major versions**: 3.0 and later
    
-   **Restart required after modification**: No
    
-   **Default value**: `600000` (10 min)
    
-   **Function**: The expiration threshold for an idle cursor, in milliseconds. If a cursor is idle for longer than this threshold, MongoDB automatically cleans it up.
    
-   **Symptom**: If you try to access a cursor that has been cleaned up, the client receives an error in the following format:
    
    ```
    Message: "cursor id xxxxxxx not found"
    ErrorCode: CursorNotFound(43)
    ```
    
-   **Recommendations**: Do not increase this value. To reduce the resource overhead of idle cursors, you can decrease the value, for example, to 300000. In all scenarios, avoid having long-idling cursors on the business side.
