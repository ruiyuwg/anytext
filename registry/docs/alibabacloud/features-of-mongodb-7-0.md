This topic describes the new features and optimizations of MongoDB 7.0.

## **Quick preview**

ApsaraDB for MongoDB

-   New features
    
    -   [Queryable encryption](#508d25e98e168)
        
    -   [Shard metadata consistency check](#a18bca3fbfmkn)
        
    -   [Sampled queries and shard key analysis (analyzeShardKey)](#2c8c96e1caywh)
        
    -   [AutoMerger](#1d882ace90lpp)
        
-   Optimizations
    
    -   [Others](#b178e0d371s3l)
        
    -   [Security](#208792eedbayj)
        
    -   [Aggregation](#d4c642b4f51g6)
        
    -   [Time-series collections](#6c8dcdba3d4ht)
        
    -   [Sharding](#8a5c15b863fqa)
        

For more information about other features and optimizations of MongoDB 7.0, see [Release Notes for MongoDB 7.0](https://www.mongodb.com/docs/manual/release-notes/7.0/).

## Queryable encryption

In MongoDB 6.0, the queryable encryption feature is in preview. In MongoDB 7.0, this feature is generally available. For more information, see [Queryable Encryption](https://www.mongodb.com/docs/manual/core/queryable-encryption/).

## Shard metadata consistency check

The **checkMetadataConsistency** command is added in MongoDB 7.0 to check metadata inconsistency across different shards. Examples:

Example 1:

```
// Command
db.runCommand( {
   checkMetadataConsistency: 1,
   checkIndexes: true
} )
```

Example 2:

```
//mongosh
db.checkMetadataConsistency()
db.collection.checkMetadataConsistency()
sh.checkMetadataConsistency() 
```

You can include this check item in daily O&M to identify potential inconsistencies at the earliest opportunity. For more information, see [checkMetadataConsistency](https://www.mongodb.com/docs/manual/reference/command/checkMetadataConsistency/#mongodb-dbcommand-dbcmd.checkMetadataConsistency).

## Sampled queries and shard key analysis (analyzeShardKey)

You can analyze whether the shard key of a collection is proper based on the results of sampled queries. This can help you efficiently design the schema and shard key for the collection and make more informed decisions on using a sharding architecture. Syntax of the **analyzeShardKey** command:

```
db.adminCommand(
   {
     analyzeShardKey: <string>,
     key: <shardKey>,
     keyCharacteristics: <bool>,
     readWriteDistribution: <bool>,
     sampleRate: <double>,
     sampleSize: <int>
   }
 )
```

**Note**

This command does not block read and write operations on the collection. However, to minimize the impact on your business, we recommend that you use the command in conjunction with the **secondary** or **secondaryPreferred** read preference. On a sharded cluster, mongos automatically sets the read preference to **secondaryPreferred**.

For more information, see [analyShardKey](https://www.mongodb.com/docs/manual/reference/command/analyzeShardKey/#analyzeshardkey) and [configureQueryAnalyzer](https://www.mongodb.com/docs/manual/reference/command/configureQueryAnalyzer/#std-label-configureQueryAnalyzer).

## AutoMerger

MongoDB 7.0 introduces a new feature called AutoMerger for the balancer. When data or indexes are unevenly distributed, excessive shards exist, or data is migrated, AutoMerger merges chunks to balance data distribution and improve database performance. By default, AutoMerger is enabled in MongoDB 7.0. You can also configure an active window for the balancer to enable AutoMerger.

The **configureCollectionBalancing** command that was introduced in earlier versions of MongoDB to configure balancer settings for a sharded collection also supports AutoMerger.

```
db.adminCommand(
   {
     configureCollectionBalancing: "<db>.<collection>",
     chunkSize: <num>,
     defragmentCollection: <bool>,
     enableAutoMerger: <bool>
   }
)
```

You can also run the **mergeAllChunksOnShard** command to merge all chunks or ranges that can be merged in a shard.

```
db.adminCommand( { mergeAllChunksOnShard: "db.coll", shard: "Shard0" } )
```

## Sharding

In addition to AutoMerger, MongoDB 7.0 introduces the following optimizations:

-   The `rangeDeleterHighPriority` parameter can be used to specify whether the deletion of orphan documents has a high priority. By default, this parameter is set to **false**, which indicates that MongoDB prioritizes business-related delete operations over the deletion of orphan documents.
    
-   MongoDB 7.0 removes the `operationsBlockedByRefresh` document that contains statistics about operations blocked by catalog cache refreshes. This is because the operationsBlockedByRefresh counters increase on mongos nodes for every operation that uses collection routing information, even if the operation is not blocked by a catalog refresh activity.
    
-   Monitoring metrics related to resharding are added.
    
-   The `maxSize` option is no longer supported for the **addShard** command.
    
-   When the chunk size of the `config.settings` collection is adjusted, a validity check is performed to ensure that the new value falls within a reasonable range of 1 to 1,024.
    
-   Starting in MongoDB 6.0.3, several adjustments are made to the balancer policy.
    
    -   The balancer evenly distributes data based on the difference in data volume rather than the number of chunks between shards.
        
    -   Partitioning is performed by range instead of by chunk.
        
    -   Automatic splitting takes effect only when data is migrated across shards.
        

## **Security**

-   Key Management Interoperability Protocol (KMIP) V1.0 and V1.1 are supported.
    
-   OpenSSL 3.0 and OpenSSL FIPS are supported.
    

## Aggregation

The following operators are added to perform bit calculations and support percentiles.

**Operator**

**Description**

`$bitAnd`

Returns the result of the bitwise AND operation on a numeric value of the INT or LONG type.

`$bitNot`

Returns the result of the bitwise inverse operation on a numeric value of the INT or LONG type.

`$bitOr`

Returns the result of the bitwise OR operation on a numeric value of the INT or LONG type.

`$bitXor`

Returns the result of a bitwise XOR operation on a numeric value of the INT or LONG type.

`$median`

Returns the approximate median, which is equivalent to the 50th percentile.

`$percentile`

Returns the specified percentile.

## Time series collections

-   The restrictions imposed in earlier versions on the use of the **DELETE** command for time series collections are removed. The only restriction on the current **DELETE** command is that the command cannot be used in a multi-document transaction.
    
-   Time series collections are supported for the COMPACT command.
    

## **Others**

-   Fields such as `catalogCacheIndexLookupDurationMillis` are added to slow query logs. For more information, see [Logging Slow Operations](https://www.mongodb.com/docs/manual/reference/log-messages/#std-label-log-message-slow-ops).
    
-   The transaction concurrency of the storage engine can be dynamically adjusted. The default concurrency before adjustment is 128. Starting in MongoDB 7.0, the transaction concurrency is automatically adjusted. For more information, see [Concurrent Storage Engine Transactions (Read and Write Tickets)](https://www.mongodb.com/docs/manual/release-notes/7.0/#concurrent-storage-engine-transactions--read-and-write-tickets-).
    
-   Fields related to query sampling are added to the currentOp command. For more information, see [currentOp Metrics](https://www.mongodb.com/docs/manual/release-notes/7.0/#currentop-metrics).
    
-   Composite wildcard indexes are supported. For more information, see [Compound Wildcard Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-wildcard/index-wildcard-compound/#std-label-wildcard-index-compound).
    
-   The `$changeStreamSplitLargeEvent` operator is added to allow you to split large change events that exceed 16 MB in size. For more information, see [Large Change Stream Events](https://www.mongodb.com/docs/manual/release-notes/7.0/#large-change-stream-events).
    
-   The performance of the slot-based query execution engine is optimized.
    
-   Metrics related to chunk migrations are added. For more information, see [New Sharding Statistics for Chunk Migrations](https://www.mongodb.com/docs/manual/release-notes/7.0/#new-sharding-statistics-for-chunk-migrations).
    
-   The `USER_ROLES` system variable can be used to obtain the role of the current user.
    
-   Global parameters related to `analyzeShardKey`, `balancer`, and `queryAnalyzers` are added.
    
-   More fields are added to the results returned for serverStatus. For more information, see [serverStatus Output Change](https://www.mongodb.com/docs/manual/release-notes/7.0/#serverstatus-output-change).
