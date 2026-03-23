This topic introduces ApsaraDB for MongoDB sharded cluster instances. You can use sharded cluster instances to store large amounts of data.

## Scenarios

If you encounter one of the following issues, you can use sharded cluster instances:

-   The storage capacity of a single physical host is limited.
-   The read and write capabilities of a single physical host are limited due to insufficient CPU, memory, or network interface controller (NIC) resources.

## Number of shard nodes and number of mongos nodes

You can specify the number of shard nodes and number of mongos nodes in a sharded cluster instance based on your business requirements.

-   The sharded cluster instance is used only to store a large amount of data, which is not frequently accessed. For example, if the size of the data that a single shard node can store is M and the total size of the data that needs to be stored is N, calculate the number of shard nodes and the number of mongos nodes by using the following formulas:
    -   Number of shard nodes = N/M/0.75. The water mark for storage usage is 75%.
    -   Number of mongos nodes = 2 or more. When the data is not frequently accessed, at least two mongos nodes must be deployed to ensure high availability.
-   The sharded cluster instance is used to store a small amount of data, which is accessed by highly concurrent read or write operations. The shard nodes and mongos nodes of the sharded cluster instance must deliver the required read and write performance. For example, the maximum queries per second (QPS) of a single shard node is M, the maximum QPS of a single mongos node is Ms, and the QPS that is required for your business is Q. In this case, calculate the number of shard nodes and the number of mongos nodes by using the following formulas:
    
    -   Number of shard nodes = Q/M/0.75 (The water mark for storage usage is 75%.)
    -   Number of mongos nodes = Q/Ms/0.75
    
    **Note** The QPS of a single mongos or mongod node in MongoDB varies based on the features that are enabled. To obtain the actual QPS, you must perform tests.
    

**Note**

-   If you want a sharded cluster instance to meet the requirements in both the preceding scenarios, you must estimate the number of shard nodes and number of mongos nodes in the instance based on higher specification requirements.
-   The preceding formulas are used to estimate the number of shard nodes and number of mongos nodes in a sharded cluster instance based on the assumption that the data and requests in the instance are evenly distributed. In actual scenarios, data and requests in the instance may be unevenly distributed. To balance the loads in the instance, you must select an appropriate shard key for each shard node.

## Shard key selection

-   ApsaraDB for MongoDB supports the following sharding strategies:
    -   Ranged sharding, which is used to divide data into contiguous ranges that are determined by shard key values
    -   Hashed sharding, which is used to distribute data among the configured shard nodes
    -   Tag aware sharding, which is used to customize the rules based on which chunks are distributed
        
        **Note**
        
        -   How sharding strategies work
            1.  ApsaraDB for MongoDB invokes the `sh.addShardTag()` method to add Tag A to a shard node.
            2.  ApsaraDB for MongoDB invokes the `sh.addTagRange()` method to add Tag A to a specific chunk range of a collection. This way, ApsaraDB for MongoDB can distribute the data within the chunk range labeled with Tag A to the shard node labeled with Tag A. ApsaraDB for MongoDB can also distribute the data within the supersets of the chunk range labeled with Tag A to the shard node labeled with Tag A.
        -   Scenarios
            -   Add tags to shard nodes based on the data centers in which these shard nodes are deployed. This way, ApsaraDB for MongoDB can distribute the data within a chunk range to the data center that has the same tag as the chunk range.
            -   Add tags to shard nodes based on the QPS values of these shard nodes. This way, ApsaraDB for MongoDB can distribute more chunks to the shard nodes that deliver high QPS.
        -   Usage notes
            
            ApsaraDB for MongoDB cannot directly distribute chunks to shard nodes that are labeled with the specified tags. Chunks are gradually distributed as chunk splitting and migration are frequently triggered by insert and update operations. Make sure that the balancer is enabled during the distribution process. After tags are added to chunk ranges, written data may not be distributed to the shard node that has the same tags as the chunk ranges.
            
        
        For more information, see [Tag aware sharding](https://docs.mongodb.com/manual/core/zone-sharding/).
        
-   Ranged sharding and hashed sharding cannot resolve the following issues:
    -   The value range of the shard key is small. For example, if data centers are selected as the shard key, sharding is inefficient because the number of data centers is limited.
    -   A specific value of the shard key is contained in a large number of documents. In this case, a single chunk may store a large number of documents. If the size of documents in a chunk exceeds the size per chunk, the chunk is labeled as a jumbo chunk and cannot be migrated by the balancer.
    -   If you query and update data based on criteria rather than the shard key, all the operations become scatter-gather queries, which are slow.
-   Sharding is efficient when the shard key has the following characteristics:
    -   Sufficient cardinality
    -   Evenly distributed write operations
    -   Targeted read operations

Example:

An IoT application uses a sharded cluster instance to store the logs of millions of devices. Each device sends logs to the sharded cluster instance once every 10 seconds. The logs contain information such as device IDs and timestamps. The logs that are generated for a specific device over a specific time range are frequently queried.

The following sharding methods are provided:

-   Method 1: Recommended. Use the combination of the device ID and the timestamp as the shard key and perform ranged sharding.
    -   Written data is evenly distributed among multiple shard nodes.
    -   The data that carries the same device ID can be further split and distributed among multiple chunks based on the timestamps of the data.
    -   When you query the logs that are generated for a specific device over a specific time range, ApsaraDB for MongoDB can combine the device ID and the timestamp to create a composite index based on which it completes the query.
-   Method 2: Use the timestamp as the shard key and perform ranged sharding.
    -   Written data that carries continuous timestamps is distributed to the same shard node. This causes uneven distribution of written data.
    -   Device ID-based queries are distributed to all shard nodes. This lowers query efficiency.
-   Method 3: Use the timestamp as the shard key and perform hashed sharding.
    -   Written data is evenly distributed among multiple shard nodes.
    -   Device ID-based queries are distributed to all shard nodes. This lowers query efficiency.
-   Method 4: Use the device ID as the shard key and perform hashed sharding.
    
    **Note** If no rules are imposed on the device ID, you can perform ranged sharding.
    
    -   Written data is evenly distributed among multiple shard nodes.
    -   The data that carries the same device ID can be distributed only to the same chunk. This causes jumbo chunks. Each device ID-based query can be distributed only to a single shard node, and the shard node needs to scan and sort all tables based on the timestamp range that is specified in the query.

## Jumbo chunk and size per chunk

The default size per chunk in a sharded cluster instance is 64 MB. If the size of a chunk exceeds 64 MB and the chunk cannot be split, the chunk is labeled as a jumbo chunk. For example, if all documents have the same shard key value, these documents are stored in the same chunk, which cannot be split. The balancer cannot migrate jumbo chunks, which may cause load imbalance. We recommend that you prevent jumbo chunks.

If you do not require load balancing, you do not need to prevent jumbo chunks because jumbo chunks do not affect read or write operations. You can use one of the following methods to handle jumbo chunks:

-   Split jumbo chunks. After a jumbo chunk is split, the configured mongos nodes automatically remove the jumbo label from the chunk.
-   If a chunk cannot be split, verify that the chunk is not a jumbo chunk and manually remove the jumbo label from the chunk.
    
    **Note** Before you remove the jumbo label from a chunk, you must back up the database named config to prevent data corruption that is caused by unintended operations.
    
-   Increase the size per chunk. When the size of a jumbo chunk no longer exceeds the size per chunk, the jumbo label is automatically removed from the chunk. However, some chunks may still become jumbo chunks as data is written. The best way to prevent jumbo chunks is to select an appropriate shard key.

You need to adjust the size per chunk in the following scenarios. Make sure that the size per chunk ranges from 1 MB to 1,024 MB.

-   If the I/O load is high during chunk migration, you can reduce the size per chunk.
-   When you perform tests to verify sharding efficiency, you can reduce the size per chunk.
-   If the initial size per chunk is large and consequently the loads are imbalanced due to a large number of jumbo chunks, you can increase the size per chunk.
-   If you want to shard a collection that stores terabytes of data, you must increase the size per chunk. For more information, see [Sharding Existing Collection Data Size](https://docs.mongodb.com/manual/core/sharded-cluster-requirements/).

## Balancer

Automatic load balancing in a sharded cluster instance is implemented by a background thread that runs on the mongos nodes of the instance. Only one migration task can be run for each collection at a specific point in time. Load balancing is triggered based on the number of chunks per collection on each shard node. If the difference between the number of chunks of a collection on a shard node and the total number of chunks of the collection reaches the specified threshold, ApsaraDB for MongoDB starts to migrate the chunks of the collection from the shard node to other shard nodes. You must specify a threshold based on the total number of chunks.

By default, the balancer is enabled. To prevent interruptions to your online workloads due to the migration of chunks in a sharded cluster instance, you can configure the instance to perform the migration during off-peak hours, such as 02:00 to 06:00.

```
use config
                db.settings.update(
                { _id: "balancer" },
                { $set: { activeWindow : { start : "02:00", stop : "06:00" } } },
                { upsert: true }
                )
            
```

**Notice** When you back up a sharded cluster instance by using the configured mongos nodes or when you separately back up the Configserver and each configured shard node, you must run the following command to stop the balancer. This allows you to prevent data inconsistencies in the backup data.

```
sh.stopBalancer()            
```

## Archiving setting in the moveChunk command

If a sharded cluster instance runs MongoDB 3.0 or earlier, the disk space usage in the data catalog may continue to increase even after data writes are stopped.

The preceding issue is caused by the value of the `sharding.archiveMovedChunks` parameter in the moveChunk command. In MongoDB 3.0 or earlier, the default value of this parameter is `true`. The value true indicates that chunks are archived on Shard A after they are migrated from Shard A to Shard B. If the chunks on Shard B are damaged, you can restore the chunks from Shard A. The chunks occupy storage space on both Shard A and Shard B. That is why the disk space usage in the data catalog continues to increase even after data writes are stopped.

**Note** In MongoDB 3.2, the default value of this parameter is `false`. The value false indicates that chunks are not archived on Shard A after they are migrated from Shard A to Shard B.
