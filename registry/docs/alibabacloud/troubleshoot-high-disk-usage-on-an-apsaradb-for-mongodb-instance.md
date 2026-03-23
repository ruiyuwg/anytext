Disk utilization is a key metric to monitor an ApsaraDB for MongoDB instance. If the disk utilization on an instance reaches 100%, the instance becomes unavailable. This topic describes how to view the disk usage of an ApsaraDB for MongoDB and troubleshoot high disk utilization issues on the instance.

## Background information

If the disk utilization on an instance exceeds 80%, you can reduce the disk usage of the instance or expand the storage space to prevent the disk utilization from reaching 100%.

## View storage usage

### Replica set instance

You can use one of the following methods to view the disk usage on a replica set instance in the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/):

-   Overview
    
    In the **Specification Information** section of the **Basic Information** page, view the **Disk Space** and **Utilization** information of the instance.
    
-   Detail analysis by using monitoring charts
    
    In the left-side navigation pane, click **Monitoring Data**. On the page that appears, specify a node and view the **Disk Usage (Bytes)** and **Disk Usage (%)** values of the node.
    
    A replica set instance consists of a primary node that supports read and write operations, one or more high-availability secondary nodes, a hidden node, and one or more optional read-only nodes. The disk of a node is used by data and logs and the storage capacity of the disk can be calculated based on the following formula: ins\_size = data\_size + log\_size, Where,
    
    -   data\_size: the disk space used by data files such as physical data files whose names start with collection, physical index files whose names start with index, and some physical metadata files such as WiredTiger.wt. The data files exclude data stored in the local database.
        
    -   log\_size: the physical size of the local database, MongoDB running logs, and some audit logs.
        
    
-   Detail analysis
    
    You can use the following methods to view the details of disk usage:
    
    -   Run the `db.stats()` and `db.$collection_name.stats()` commands provided by ApsaraDB for MongoDB.
        
        For more information, see the following references:
        
        -   [db.stats()](https://docs.mongodb.com/manual/reference/method/db.stats/)
            
        -   [db.collection.stats()](https://docs.mongodb.com/manual/reference/method/db.collection.stats/)
            
        -   [db.collection.storageSize()](https://docs.mongodb.com/manual/reference/method/db.collection.storageSize/)
            
        -   [db.collection.totalIndexSize()](https://docs.mongodb.com/manual/reference/method/db.collection.totalIndexSize/)
            
        -   [db.collection.totalSize()](https://docs.mongodb.com/manual/reference/method/db.collection.totalSize/)
            
        
    -   Choose **CloudDBA** > **Storage Analysis** and view details on the Storage Analysis page.
        
        On the **Storage Analysis** page, you can view the following items:
        
        -   Overview of the disk usage of databases and collections, average daily increment, and predicted available days of storage
            
        -   Disk usage of abnormal databases and collections
            
        -   Details of the disk usage of a specific business collection, including the disk space used by index files and data files, compression ratio, and average row size
            
        
    

### Sharded cluster instance

You can use one of the following methods to view the disk usage on a sharded cluster instance in the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/):

-   Detail analysis by using monitoring charts
    
    On the **Monitoring Data** page of the instance, select a node and view the **Disk Usage (Bytes)** and **Disk Usage (%)** values of the node.
    
-   Detail analysis by running commands
    
    Run the `db.stats()` and `db.$collection_name.stats()` commands provided by ApsaraDB for MongoDB to analyze the disk usage on each node.
    

## Troubleshoot large data volume caused by the compact command

### Impacts on an instance during compact

The execution duration of the compact command is related to the data volume of a collection. If the data volume is large, the compact command runs for a long period of time. Therefore, we recommend that you run the compact command during off-peak hours.

### compact operations

Run the `db.runCommand({compact:"collectionName"})` command on a secondary node and then perform primary/secondary switchover to minimize the effect on your business. The `collectionName` parameter indicates the collection name. Replace the parameter value with your actual collection name.

For more information about the compact command, see [Defragment the disks of an instance to increase disk utilization](/help/en/mongodb/use-cases/defragment-a-disk-to-improve-disk-usage).

## Troubleshoot high space usage caused by a large amount of log data

### The gap between the spaces used by the primary and secondary nodes is large due to a large number of journal logs

In versions earlier than MongoDB 4.0, if the size of open files on the host reaches the specified upper limit, the cleaner threads on the MongoDB log server are terminated. As a result, journal logs infinitely increase in size. If content that is similar to the following code block appears in the runtime logs of an instance, you can temporarily solve the issue by upgrading the version of MongoDB to 4.0 or later or by restarting the mongod process. For more information, see [log-server thread exit quietly on error while the mongodb process still running](https://jira.mongodb.org/browse/WT-4083).

```
2019-08-25T09:45:16.867+0800 I NETWORK [thread1] Listener: accept() returns -1 Too many open files in system 
2019-08-25T09:45:17.000+0800 I - [ftdc] Assertion: 13538:couldn't open [/proc/55692/stat] Too many open files in system src/mongo/util/processinfo_linux.cpp 74
2019-08-25T09:45:17.002+0800 W FTDC [ftdc] Uncaught exception in 'Location13538: couldn't open [/proc/55692/stat] Too many open files in system' in full-time diagnostic data capture subsystem. Shutting down the full-time diagnostic data capture subsystem.
```

### Log space usage of secondary nodes may continuously increase due to latency on the secondary nodes and incremental backup

If latency occurs during synchronization between primary and secondary nodes, the available space of oplogs is not limited by the fixed collection size defined in the configuration file. In theory, the available space can reach 20% of the disk space for which you apply. However, after the latency on the secondary nodes has decreased to normal levels, the physical space used by oplogs is not released.

When you perform physical backups of an instance on a hidden node, a large number of checkpoints generate large volumes of data and occupy large log space.

To solve the issues in the preceding scenarios, perform the compact operation on oplogs, as shown in the following code.

**Note**

All write operations are blocked during the compact operation.

```
db.grantRolesToUser("root", [{db: "local", role: "dbAdmin"}])
use local
db.runCommand({ compact: "oplog.rs", force: true })
```

## Troubleshoot uneven data distribution caused by unreasonable sharding

### Data is unevenly distributed due to unreasonable selection of sharding key types

In a sharded cluster instance, it is important to select the sharding key type. In most cases, the hashed or ranged sharding is used. Hashed sharding is more suitable than ranged sharding for disk load balancing. Hashed sharding uses built-in hash functions to evenly distribute data among shards based on various key values. Ranged sharding distributes data among shards based on ranges of key values, which results in uneven data distribution. Data is distributed on a populated chunk. This may lead to high I/O workloads and short-term uneven data distribution in the disk in which the chunk is located.

**Note**

For information about sharding key types, see [sharding-shard-key](https://docs.mongodb.com/manual/core/sharding-shard-key/), [hashed-sharding](https://docs.mongodb.com/manual/core/hashed-sharding/), and [ranged-sharding](https://docs.mongodb.com/manual/core/ranged-sharding/).

### Data is unevenly distributed due to unreasonable selection of sharding key fields

The number of chunks on each shard is essentially the same. However, most data is stored only in several populated chunks, which results in uneven data distribution. To view the runtime logs of an instance, run the `sh.status()` command. Alert information may be displayed in the output. The following code provides an example of the alert information:

```
2019-08-27T13:31:22.076+0800 W SHARDING [conn12681919] possible low cardinality key detected in superHotItemPool.haodanku_all - key is { batch: "201908260000" } 
2019-08-27T13:31:22.076+0800 W SHARDING [conn12681919] possible low cardinality key detected in superHotItemPool.haodanku_all - key is { batch: "201908260200" } 
2019-08-27T13:31:22.076+0800 W SHARDING [conn12681919] possible low cardinality key detected in superHotItemPool.haodanku_all - key is { batch: "201908260230" }
```

The MongoDB balancer monitors the number of chunks on each shard regardless of the data volume. In this case, the number of chunks on each shard is balanced, whereas the data may be severely skewed. In a chunk, sharding keys are almost the same. When the chunk size reaches 64 MB, an empty chunk is created. This way, the number of chunks increases and chunk migration is complete. However, migrated chunks are empty chunks. As a result, shards may have an equal number of chunks but have largely different data sizes. In this case, you must redesign sharding keys by using appropriate columns that have a high degree of discrimination.

**Note**

For more information about how chunks are split, see [Data Partitioning with Chunks](https://docs.mongodb.com/manual/core/sharding-data-partitioning/) and [Split Chunks in a Sharded Cluster](https://docs.mongodb.com/manual/tutorial/split-chunks-in-sharded-cluster/).

### Jumbo shards arise from unsharded databases

You can shard some databases in an ApsaraDB for MongoDB sharded cluster instance. In this case, data in a unsharded database is stored only on one shard. If the database has a large amount of data, the shard that stores the data has a larger amount of data than other shards.

In another case, when data is logically imported from a source ApsaraDB for MongoDB instance to a destination ApsaraDB for MongoDB instance, the destination ApsaraDB for MongoDB instance may not be sharded.

To resolve the issues in the preceding scenarios, we recommend that you perform the following operations:

-   If data import to the destination sharded cluster instance is initialized, we recommend that you shard the destination instance before data import.
    
-   If a large number of databases are unsharded and the data volumes of the databases are similar, we recommend that you run the `movePrimary` command provided by ApsaraDB for MongoDB to migrate specific databases to specific shards.
    
-   If a database has an excessively large amount of data and is not sharded, we recommend that you shard the database or split the database as an individual replica set.
    
-   If disk space is sufficient, we recommend that you ignore these issues.
    

### Uneven disk usage of shards is caused by a large number of moveChunk operations

A moveChunk operation is used to remove the source data after data is written to destination shards. By default, the remove operation does not release space. Each collection has data files and index files in an instance that runs the wiredTiger engine. If the files are not deleted, the occupied space is not released. In most cases, this issue occurs because sharding is implemented in an instance after the instance runs for a period of time.

In principle, moveChunk operations, similar to large-scale deletion operations, result in fragmentation. Therefore, if a large number of documents that require moveChunk or remove operations are generated on a shard, you can perform a compact operation on the shard to defragment disks. In normal cases, data is reorganized after the compact operation to defragment disks.

**Note**

For more information about moveChunk, see [Migrate Ranges in a Sharded Cluster](https://docs.mongodb.com/manual/tutorial/migrate-chunks-in-sharded-cluster/) and [Manage Sharded Cluster Balancer](https://docs.mongodb.com/manual/tutorial/manage-sharded-cluster-balancer/).
