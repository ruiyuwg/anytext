This topic describes the new features and optimizations of MongoDB 8.0.

## **Quick preview**

This topic introduces MongoDB 8.0 from the following aspects:

-   New features
    
    -   [Advanced TCMalloc](#48185db32csnz)
        
    -   [Replication performance optimization](#b440fff49279w)
        
    -   [Resharding performance optimization](#229b901031u5u)
        
-   Optimizations
    
    -   [Sharding](#3234284e07ks9)
        
    -   [Logging](#53996a7f4amk4)
        
    -   [Aggregation](#db13a1a6e6vv9)
        
    -   [Database security](#5d2b164f73e8z)
        
    -   [Other optimizations](#cc9c21c44feeo)
        

For more information, see [MongoDB 8.0 release-notes](https://www.mongodb.com/docs/manual/release-notes/8.0/).

## **Advanced TCMalloc**

MongoDB 8.0 uses advanced TCMalloc:

-   Caching mechanism adjustment: Advanced TCMalloc uses the cache of each CPU rather than each thread to reduce memory fragments and enable databases to run more heavy loads.
    
-   Memory release mechanism: Advanced TCMalloc creates a backend thread that attempts to release memory back to operating systems per second.
    
    The `tcmallocReleaseRate` parameter specifies the rate of memory release, measured in `bytes/s`. Prior to MongoDB 8.0, this parameter value is the vague one of `1-10`. The default value of `tcmallocReleaseRate` in ApsaraDB for MongoDB is `10485760`, which is equal to 10 MB. Even if this parameter value is 0, some memory is still released. You can customize this value based on your business requirements.
    

## **Replication performance optimization**

### **"Majority" write concern**

Starting from MongoDB 8.0, when `writeConcern` is set to `majority`, MongoDB returns oplogs after them have been written to most replica set members, rather than waiting for the change to be applied before returning. This improves write performance in `majority` mode.

Therefore, if an application reads data from a secondary node immediately after receiving a `majority` write confirmation, the returned result might not include the content changed by this write operation.

### **Oplog buffer**

Secondary nodes write and apply each batch of oplogs in parallel. When a Writer thread reads new oplog entries from a primary node and writes them to the local oplog, an Applier thread asynchronously applies these changes to a local database. This improves the replication throughput of secondary nodes.

Therefore, related metrics in `serverStatus` have also changed, becoming the `metrics.repl.buffer.write` and `metrics.repl.buffer.apply` buffers.

## **Resharding performance optimization**

The `reshardCollection` performance is improved. You can use this command to change the shard key of a collection and the distribution of data.

MongoDB 8.0 supports the `forceRedistribution` option, which allows resharding a collection with the same shard key as before and redistributing data to new shards. This takes shorter time than migrating a chunk to a specific range. You can use this option along with the `zones` option to migrate data to a specific zone.

```
db.adminCommand({
    reshardCollection: "db.coll",
    key: { shard_key: "hashed" },
    forceRedistribution: true
})
```

**Note**

Building indexes during resharding may cause failed index building without explicit error messages. Avoid building indexes during resharding or ensure that index building is completed before resharding.

During the incremental oplog catch-up stage, the source shard block writes to a collection only if the estimated remaining operation time is within two seconds, waiting for the destination shard to complete the catch-up. However, if your business can accept a longer blocking period, such as during service downtime or maintenance windows, you can use the [commitReshardCollection](https://www.mongodb.com/docs/manual/reference/command/commitReshardCollection/#mongodb-dbcommand-dbcmd.commitReshardCollection) command to prohibit writes to this collection in advance, accelerating the complettion of the resharding process.

For more information about the kernel flow of resharding, see [Resharding process](https://www.mongodb.com/docs/manual/reference/command/reshardCollection/#resharding-process). For more information about operations related to resharding, see [Shard a collection](https://www.mongodb.com/docs/manual/core/sharding-reshard-a-collection/#steps).

## **Sharding**

In addition to [resharding performance optimization](#229b901031u5u), MongoDB 8.0 optimizes sharding from the following aspects:

-   Hash sharding creates 1 chunk for each shard by default. Prior to MongoDB 8.0, 2 chunks are created by default).
    
-   The `dbhash` command can be run on shards.
    
-   The `findAndModify` and `deleteOne` commands can use partial shard keys as query predicates.
    
-   When using the `updateOne` command with `upsert` set to `true` on a sharded collection, you can exclude all shard keys in query predicates.
    
-   You can use the `unshardCollection` command or the `sh.unshardCollection()` method to cancel a sharding operation for an existing collection. This moves all documents in the collection to a specific shard or the shard with the least amount of data.
    
-   You can use the `moveCollection` command to move an unsharded collection to a specific shard, without being limited by the primary shard. However, time series collections and queryable encrypted collections cannot be moved, and a collection write block lasts for about 2 seconds.
    
-   The following database commands and mongosh helper functions are supported.
    
    **Command**
    
    **mongosh helper function**
    
    **Description**
    
    moveCollection
    
    sh.moveCollection()
    
    Moves an unsharded collection to a specific shard.
    
    unshardCollection
    
    sh.unshardCollection()
    
    Cancels a sharding operation for an existing sharded collection and moves the collection data to a specific shard.
    
    abortMoveCollection
    
    sh.abortMoveCollection()
    
    Stops an ongoing `moveCollection` operation.
    
    abortUnshardCollection
    
    sh.abortUnshardCollection()
    
    Stops an ongoing `unshardCollection` operation.
    
    None
    
    sh.shardAndDistributeCollection()
    
    Shards a collection and immediately redistributes data with an existing shard key.
    
    Accelebrates data migration. This helper function has the same result as `shardCollection` along with `reshardCollection`.
    

## **Logging**

The `workingMillis` field is added to slow query logs to show the time required for actual operations.

Unlike the `durationMillis` option indicating the total operation latency, `workingMillis` does not include time consumed by factors such as lock wait or traffic throttling.

## **Aggregation**

### **BinData conversion**

You can use the [$convert](https://www.mongodb.com/docs/manual/reference/operator/aggregation/convert/#mongodb-expression-exp.-convert) operator to perform the following conversions:

-   Convert string values to binData values.
    
-   Convert binData values to string values.
    

Additionally, the [$toUUID](https://www.mongodb.com/docs/manual/reference/operator/aggregation/toUUID/#mongodb-expression-exp.-toUUID) expression provides simplified syntax for converting string values to UUID values.

### **$queryStats**

The [$queryStats](https://www.mongodb.com/docs/manual/reference/operator/aggregation/queryStats/#std-label-queryStats-change-stream-behavior) stage returns statistics for recorded queries and optimizes tracking and reporting metrics in change streams.

## **Database security**

### **Queryable encryption: range queries**

Queryable encryption supports range queries on encrypted fields with `$lt`, `$lte`, `$gt`, or `$gte`.

### **Entrance queue**

MongoDB 8.0 introduces a new queue for entrance access control (`ingressAdmissionControllerTicketPoolSize`), indicating that operations sent to a database from the network enter the entrance queue.

The entrance queue is not limited by default. You can customize the maximum queue value to allow requests for queuing.

## **Other optimizations**

-   A new [Query Shape](https://www.mongodb.com/docs/manual/core/query-shapes/) is introduced. The previous query shape is called plan cache query shape. The query optimizer uses query settings as additional input information, affecting the final query plan selection.
    
    -   [setQuerySettings](https://www.mongodb.com/docs/manual/reference/command/setQuerySettings/#mongodb-dbcommand-dbcmd.setQuerySettings) includes query settings:
        
        -   Specify index selection. MongoDB 8.0 does not allow you to use `planCacheSetFilter` to set `index filter`.
            
        -   Specify traffic throttling settings. You can use the `reject` option to set rejection for a specific Query Shape.
            
    -   `removeQuerySettings` is used to delete query settings.
        
    -   `$querySettings` is used to view query settings.
        
-   The `explain()` command includes the time spent on query plan optimization in `queryPlanner.optimizationTimeMillis`, measured in milliseconds.
    
-   The new `defaultMaxTimeMS` parameter specifies the default time limit for a single read operation to complete, measured in milliseconds.
    
    -   Applicable operations:
        
        -   `find`
            
        -   `aggregate` (excluding the `$merge` and `$out` stages)
            
        -   `count`
            
        -   `distinct`
            
        -   `dbHash`
            
    -   If a client specifies `maxTimeMS`, `defaultMaxTimeMS` no longer takes effect for this operation.
        
-   The new `bulkWrite` command can perform multiple insert, update, and delete operations on multiple collections in a single request.
    
-   `updateOne` supports sorting with the `sort` option.
    
-   TTL indexes can be created on capped collections.
    
-   Non-transactional bulk inserts no longer generate separate oplogs but are batch processed in a single oplog. All inserted documents have the same `clusterTime` in change stream events. This improves the performance of bulk inserts and avoids replication delay that might be caused by replaying multiple oplogs from secondary nodes.
    
-   Concurrent DDL operations can be performed on different collections within the same database.
    
-   Addting or removing shards is blocked when DDL operations are performed on a sharded cluster, such as `reshardCollection` that modify collections. You can only perform these actions after DDL operations.
    
-   Index building is improved with faster error reporting and stronger disaster recovery capabilities.
    
    **Action**
    
    **MongoDB 8.0**
    
    **Prior to MongoDB 8.0**
    
    Situation to stop index building after detecting errors
    
    An index error detected during the collection scan phase (except for duplicate key errors) is returned immediately, and then index building stops.
    
    MongoDB 8.0 helps you quickly perform a diagnostics for an index error. For example, if an incompatible index value format is found, this error is returned immediately.
    
    Prior to MongoDB 8.0, an index error detected during the collection scan phase is returned in the commit phase, which occurs at the end of index building.
    
    Compared with MongoDB 8.0, earlier versions may take a longer time to return an index building error because the error is returned at the end of index building in the commit phase.
    
    Resilient deployment
    
    Deployment resilience is enhanced. If an index building error occurs, secondary members can request the primary member to stop index building, and them do not crash.
    
    Requests to stop index building are not always feasible. If a member has already voted to commit an index, secondary members cannot request to stop index building, and them crash. This situation is similar to one in MongoDB 7.0 and earlier versions.
    
    Index building errors may cause secondary members to crash.
    
    Disk space
    
    Disk space management is optimized for index building. If available disk space is less than the minimum value specified in the `indexBuildMinAvailableDiskSpaceMB` parameter, index building may automatically stop.
    
    If a member has voted to commit an index, index building does not stop.
    
    Index building also stops when available disk space is insufficient.
