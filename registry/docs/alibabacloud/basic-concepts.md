Hologres is a high-performance, distributed, real-time data warehouse engine with a compute-storage separation architecture. Data is stored in the underlying storage system on data partitions, which are also known as shards. This topic describes the concepts of table groups and shard count in Hologres.

## Table groups and shards

In Hologres, data is stored on the Apsara Distributed File System. A shard is a data partition. A table group is a logical storage concept for managing these shards. A table's data is stored on a fixed group of shards. This group is assigned when the table is created and is managed by the table group. When data is written, it is distributed to specific shards based on a distribution key.

A table group is a logical storage concept specific to Hologres and does not exist in PostgreSQL. A table group is different from a tablespace in PostgreSQL. A tablespace identifies the storage location of a database object, similar to a directory, whereas a table group represents a group of underlying logical shards.

The following figure shows the layout of a table group.![tg布局图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5049589661/p512067.png)The figure illustrates the following relationships:

-   The difference between a table group and a schema
    
    A schema is a standard database concept, whereas a table group is a logical storage concept specific to Hologres. Tables in different schemas can belong to the same table group, which means they use the same group of underlying shards for data storage.
    
-   The relationship between a table group and a database (DB)
    
    A database (DB) can contain one or more table groups, but only one can be the default table group. When you create a DB, the system also creates a default table group. You can add more table groups or change the default table group as needed.
    
-   The difference between table groups
    
    A DB can have multiple table groups. However, the shards in different table groups do not overlap. Each shard has a unique ID at the instance level.
    
-   Shard count
    
    The number of shards in a table group is its shard count. You must specify the shard count when you create a table group. After a table group is created, you cannot change its shard count. To adjust the shard count, you must create a new table group with the desired number of shards.
    
-   The relationship between shards and tables
    
    -   Shards store and query table data. The system distributes data across shards based on the distribution key. If you do not set a distribution key, data is distributed randomly across the shards.
        
    -   A table group can contain multiple tables, which are then distributed on the same group of shards. However, a table can belong to only one table group. If a table group contains no tables, the system automatically deletes it.
        
    -   To move a table to a different table group, you must either recreate the table in the new table group or use a migration function to migrate the data.
        

## Relationship between shards and worker nodes

In Hologres, the storage engine (SE) is responsible for managing and processing data. For Data Manipulation Language (DML) operations, the SE provides interfaces for single or batch create, read, update, and delete (CRUD) access. The query engine (QE) uses these interfaces to access data on shards, enabling high-performance data writes and reads.

The following figure shows the layout of worker nodes, SEs, and shards.![布局关系图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6049589661/p511561.png)The figure shows that table groups and shards are related to worker nodes in addition to data distribution:

-   After you create a table group and set its shard count, each worker node creates multiple internal SEs. Each SE is responsible for the read and write operations for a single shard. If you do not explicitly set a table group and shard count, Hologres creates a default table group and sets a default shard count when the database is created. For more information, see [Instance management](/help/en/hologres/user-guide/instance-management/#concept-2042629).
    
-   The system attempts to distribute SEs evenly among all workers to ensure that compute resources are allocated evenly.
    
-   The system ensures that shards within a table group are distributed across multiple workers. This prevents a scenario where all shards of a table group are assigned to a single worker, leaving other workers idle. However, if a table group has a small shard count and the instance has many workers, some workers may not be assigned any shards and will remain idle. Therefore, when you determine the shard count, consider your business needs to ensure a balance between the number of workers and the total number of shards in the instance.
    
    The preceding figure illustrates a potential issue. If the shard count of a table group is not a multiple of the number of workers (for example, `Table Group 1` has three shards but only two workers), one worker is inevitably assigned more SEs than the others. This can easily cause resource skew and long-tail latency during computation. Therefore, you should set the shard count to be a multiple of the number of workers. As shown in the following figure, the shard counts of `Table Group 1` and `Table Group 2` are multiples of the number of workers, so compute resources can be distributed evenly.![均匀分配示意图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6049589661/p511667.png)
    
    In practice, a worker might fail over for reasons such as an out-of-memory (OOM) error. When this occurs, the shards on the failed worker are automatically reassigned to other workers. The system ensures that the shards are distributed as evenly as possible among the remaining workers. For example, consider an instance with 4 workers and 8 shards from 2 table groups, where each worker has 2 SEs and the shards are evenly distributed. If `Worker 4` fails over, and assuming it was responsible for `Shard 7` and `Shard 8`, then `Shard 7` and `Shard 8` are quickly reassigned to the other three workers. Because only two shards need to be reassigned, the system randomly selects two of the remaining workers for the assignment to keep the number of SEs on each worker as balanced as possible.![Example](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5049589661/p511828.png)
    

## Summary

The number of workers is closely related to the shard count. Properly configuring table groups and the shard count enables a higher degree of parallelism for data writes, queries, and analysis. This configuration maximizes the use of compute resources and improves the efficiency of data storage and computation. Conversely, if the table group and shard count are not set properly, performance may not meet expectations and can be difficult to optimize.

-   Within a certain range, a table group with more shards can achieve a higher degree of parallelism for data writes, queries, and analysis. However, increasing the number of shards is not always beneficial. More shards require more internode communication, compute resources, and memory. If resources are insufficient or queries are small, a higher shard count can be counterproductive.
    
-   The minimum shard count is 1. If the data volume is very small, such as a few hundred or thousand rows, you should set the shard count to 1. The recommended maximum shard count for a table group is the total number of compute cores in the instance. This configuration ensures that each shard has at least one core for computation. If the shard count exceeds the number of compute cores, some shards will not be consistently allocated CPU resources during a query. This can lead to long-tail latency and context-switching overhead.
    
-   Increasing the number of table groups is not always beneficial. Each shard, whether in use or not, occupies memory to store metadata, schema information, and other data. A shard consumes even more memory when data is written to the tables it contains. Therefore, more table groups result in more total shards in the instance, which increases memory consumption. Additionally, if tables have special relationships, such as requiring a local join, they must be in the same table group.
    
-   On disk, using more shards for the same table results in more scattered data. This can lead to a higher number of small files. If you have many tables and many shards, the total number of files can become very large. This increases overhead during queries and failovers, which leads to more query I/O and longer recovery times.
