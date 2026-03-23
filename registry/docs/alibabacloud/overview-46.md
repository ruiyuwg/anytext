PolarDB partitioned tables are fully compatible with the syntax and features of the native MySQL. PolarDB partitioned tables also provide higher performance than the native MySQL, support more partition types and combinations, and deliver convenience, ease of use, and efficiency.

Partitioning divides a large logical table into multiple small physical tables based on partitioning rules. The large logical table is a partitioned table and the small physical tables are partitions. Each partition independently organizes and manages data and indexes on the storage engine. Partitioning rules mainly include **RANGE**, **LIST**, and **HASH**. You must specify partition keys to distribute data to different partitions based on partitioning rules. PolarDB also allows you to [Create a hybrid partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#concept-2234558) to use different storage engines for partitions. The following figure shows the subpartitioned table Orders.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1831882471/CAEQGBiBgIC5wZyo7hgiIDgzNWRlMTI3NGZlNDRkZDg4NjA0NGNjN2UxNGI4Njdm4211657_20240219102257.190.svg)

## Benefits

-   A wide range of partition types and combinations
    
    -   **RANGE**, **LIST**, **HASH**, and [LIST DEFAULT HASH](/help/en/polardb/polardb-for-mysql/user-guide/list-default-hash#concept-2183627) partitions and their combinations are supported. This helps partitioned tables provide flexible data governance methods.
        
    -   [INTEVAL RANGE](/help/en/polardb/polardb-for-mysql/user-guide/overview-64#concept-2042828) partitions are supported. This simplifies automatic partition maintenance.
        
    -   [Hybrid partitioning](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#concept-2234558) by using **INNODB** and **OSS** is supported to reduce costs and increase efficiency.
        
    -   [Partial indexes](/help/en/polardb/polardb-for-mysql/user-guide/overview-5#main-2275322) and [global secondary indexes](/help/en/polardb/polardb-for-mysql/user-guide/global-secondary-index#main-2261525) are supported to better meet the different requirements on table indexes from partition-based HTAP transactions and query loads.
        
-   Improved performance
    
    -   Partition pruning: When you query data, the optimizer automatically filters out partitions based on query conditions and partition metadata to reduce data scanning. PolarDB also supports the dynamic partition pruning feature to improve query efficiency.
        
    -   Partitionwise joins: When you join partitions, the system breaks down the partitioned table into joins of partitions based on partition conditions and filters out the joins that do not meet the conditions to minimize the number of joins and enhance query efficiency.
        
    -   Statistics collection and management: Partition-based collection and management is accurate and flexible and therefore allows you to select better query plans.
        
    -   Parallel queries significantly improve the performance of the partition-based large table solution.
        
-   Strengthened data management
    
    -   You can create, delete, and rebuild indexes for partitions.
        
    -   You can back up and restore data for partitions.
        
-   Lower costs
    
    Partitions can be stored based on **data importance**, **data storage performance**, **data storage reliability**, and **data storage form**.
    

## Feature optimizations

Compared with the native MySQL, PolarDB provides the optimizations as shown in the following table.

**Category**

**Optimization**

**References**

Extended partitions

All types of subparartitions

Subpartitioning of HASH and KEY partitions

[When to use subpartitioning](/help/en/polardb/polardb-for-mysql/user-guide/overview-66#concept-2189724)

RANGE and LIST subpartitions

Pruning of subpartitions

Some DDL operations on subpartitions

LIST DEFAULT HASH partitions

LIST DEFAULT HASH partitions

[LIST DEFAULT HASH](/help/en/polardb/polardb-for-mysql/user-guide/list-default-hash#concept-2183627)

Subpartitioning of LIST DEFAULT HASH partitions

LIST DEFAULT subpartitions

REORGANIZE PARTITION statement to split a LIST partition from the DEFAULT HASH partition

REORGANIZE PARTITION statement to merge a LIST partition into a DEFAULT HASH partition

REORGANIZE PARTITION statement to modify the number of DEFAULT partitions

Pruning of LIST DEFAULT HASH partitions

ADD PARTITION statement to add a LIST DEFAULT HASH partition

INTERVAL-RANGE partitions

INTERVAL-RANGE partitions

[Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-64#concept-2042828)

Hash subpartitioning of INTERVAL-RANGE partitions

[Switch an INTERVAL RANGE partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/switch-an-interval-range-partitioned-table#concept-2182386)

Partitions whose primary key and unique key might not be unique among partitions (UNIQUE CHECK IGNORE)

`UNIQUE CHECK IGNORE` is supported for creating partitioned tables.

[UNIQUE CHECK IGNORE](/help/en/polardb/polardb-for-mysql/user-guide/unique-check-ignore)

`UNIQUE CHECK IGNORE` is supported for converting non-partitioned tables to partitioned tables.

Partitioned indexes

Partial indexes

Partial indexes on partitions

[Partial indexes](/help/en/polardb/polardb-for-mysql/user-guide/overview-5#main-2275322)

Partial indexes on subpartitions

ADD, DROP, and REBUILD indexes on partitions and subpartitions.

Pruning of partial indexes

Statistics on partial indexes

Partial indexes on hybrid partitioned tables

Partial indexes on LIST DEFAULT HASH partitions

Global partitioned indexes

CREATE and DROP global secondary indexes

[GSIs](/help/en/polardb/polardb-for-mysql/user-guide/global-secondary-index#main-2261525)

Global secondary indexes for DML and most DDL operations on tables

Global secondary indexes for DDL operations

Unique global secondary indexes

Query optimization

Query optimizers

Partial partitionwise joins

N/A

Dynamic pruning of partitions

Pruning of partitioned indexes

HyperLogLog

Parallel scanning of partition in a partitioned table

Global index optimizer selection and parallel scanning

Combination of partitioning and MPP

Partition-based MDLs

ADD PARTITION and DROP PARTITION support partition-based MDLs

[Online partition maintenance](/help/en/polardb/polardb-for-mysql/user-guide/online-partition-maintenance#concept-2182330)

EXCHANGE PARTITION supports partition-based MDLs

REBUILD PARTITION and REORGANIZE PARTITION supports partition-based MDLs

Subpartitions support subpartition-based MDLs

DDL operations

DDL operations for common tables and partitioned tables

DDL operation for switching a common table to a partitioned table

[Switch a common table to a RANGE partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/switch-a-common-table-to-a-range-partitioned-table#task-2293518)

Hybrid partitions

Different types of storage engines supported

[Create a hybrid partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#concept-2234558)

## References

[Partitioned table types](/help/en/polardb/polardb-for-mysql/user-guide/overview-68#concept-2181254)

[Select a partitioning policy](/help/en/polardb/polardb-for-mysql/user-guide/when-to-use-range-partitioning#concept-2182540)
