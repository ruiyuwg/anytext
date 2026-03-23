When you configure a data synchronization job to Kafka, you can adjust the Kafka partition synchronization strategy to improve performance. For example, you can synchronize data to different partitions based on hash results.

## Hash algorithm

DTS uses Java’s default hashcode algorithm to calculate hash values.

## Configuration method

Configure the **Policy for Shipping Data to Kafka Partitions** during the **Configure Objects** step of your data synchronization job.

**Warning**

After you start the data synchronization job, do not change the number of partitions in the destination topic. Otherwise, the synchronization task may fail or result in data inconsistency for downstream consumers.

## Strategy details

## Source database is Kafka

**Policy Name**

**Description**

**Pros and cons**

**Ship All Data to Partition 0**

This policy delivers all data and DDL information to Partition 0 of the destination topic.

-   Pros: The creation and change order of all objects is consistent with the source database.
    
-   Cons: Performance is average.
    

**Ship Data to Separate Partitions Based on Hash Values of Database and Table Names**

This policy merges the database and table names to use as the partition key for hash calculation. It then delivers the data and DDL information for each table to different partitions in the destination topic.

**Note**

-   Data and DDL information for the same table are delivered to the same partition.
    
-   DDL information not related to a table, such as CREATE DATABASE, is delivered to Partition 0.
    

-   Pros: The creation and change order for a single table is consistent with the source. Performance is good.
    
-   Cons: Because tables are delivered to different partitions, the order of operations across different tables is not guaranteed.
    

**Deliver full and incremental Redis data to different partitions**

This policy delivers the full and incremental data from the Redis instance to different partitions in the destination topic.

-   Pros: You can deliver data from a Redis instance to different partitions.
    
-   Cons: Data for the same key may appear in different partitions. Performance is average.
    

**Ship Data to Separate Partitions Based on Hash Values of Primary Keys**

This policy uses a column from the table as the partition key to calculate the hash value. By default, the primary key is used. If a table has no primary key, a unique key is used. The policy then delivers different rows to various partitions in the destination topic. You can also specify single or multiple columns as the partition key.

**Note**

-   With this policy, DDL information is delivered to Partition 0 of the destination topic by default.
    
-   If a table has no primary key or unique key, DTS delivers its data and DDL information to Partition 0 of the destination topic.
    

-   Pros: This policy provides the best performance.
    
-   Cons: This policy only guarantees the order of changes for a single record. The order of operations for tables without a primary key and across multiple tables is not guaranteed.
    

**Deliver to partitions based on Redis key hash**

This policy uses the key from the Redis instance as the partition key to calculate the hash value. It then delivers the full and incremental data to different partitions in the destination topic.

-   Pros: You can deliver data from a Redis instance to different partitions.
    
-   Cons: Data for the same key may appear in different partitions. Performance is average.
    

## Source database is Tair/Redis

**Policy Name**

**Description**

**Pros and cons**

**Ship All Data to Partition 0**

Deliver all data and DDL information to Partition 0 of the destination topic.

-   Advantage: The order of object creation and changes matches the source database.
    
-   Disadvantage: Performance is average.
    

**Ship the full data and incremental data of an ApsaraDB for Redis instance to separate partitions**

Deliver full data and incremental data from the Redis instance to different partitions in the destination topic.

-   Advantage: Data from the Redis instance is distributed across multiple partitions.
    
-   Disadvantage: Data for the same key might appear in different partitions. Performance is average.
    

**Ship data to separate partitions based on hash values of Redis Keys**

Use the Redis key as the partition key to compute a hash value. Then, deliver both full and incremental data to different partitions in the destination topic.

-   Advantage: Data from the Redis instance is distributed across multiple partitions.
    
-   Disadvantage: Data for the same key might appear in different partitions. Performance is average.
    

## Source database is another database

**Policy Name**

**Description**

**Pros and cons**

**Ship All Data to Partition 0**

Deliver all data and DDL information to Partition 0 of the destination topic.

-   Advantage: The order of object creation and changes matches the source database.
    
-   Disadvantage: Performance is average.
    

**Ship Data to Separate Partitions Based on Hash Values of Database and Table Names**

Combine the database name and table name as the partition key to compute a hash value. Then, deliver each table’s data and DDL information to different partitions in the destination topic.

**Note**

-   Data and DDL information for the same table go to the same partition.
    
-   DDL statements unrelated to tables (for example, CREATE DATABASE) go to Partition 0.
    

-   Advantage: The order of creation and changes for a single table matches the source. Performance is good.
    
-   Disadvantage: The relative order between different tables cannot be guaranteed.
    

**Ship Data to Separate Partitions Based on Hash Values of Primary Keys**

Use table columns (by default, the primary key. If no primary key exists, use a unique key) as the partition key to compute a hash value. Then, deliver different rows to different partitions in the destination topic. You can also specify one or more columns as the partition key.

**Note**

-   Under this policy, DDL information is delivered to Partition 0 by default.
    
-   If a table has neither a primary key nor a unique key, DTS delivers both its data and DDL information to Partition 0.
    

-   Advantage: This policy offers the best performance.
    
-   Disadvantage: Only the order of changes for a single record is guaranteed. Order cannot be guaranteed for tables without primary keys or across multiple tables.
