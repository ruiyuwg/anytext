PolarDB for MySQL optimizes the concurrency control of B-tree indexes to improve the performance of highly concurrent read and write operations. This topic describes the limitations, prerequisites, and how to use the B-tree index concurrency control optimization.

## **Background information**

The InnoDB storage engine uses indexes to organize tables. The data of a table is stored in a clustered index. Other indexes in the table are called secondary indexes. InnoDB uses the B-tree index structure. The flat and balanced tree structure ensures that the number of I/O operations per data access is small and fixed.

InnoDB uses locks to control concurrent accesses to the memory structure of physical pages (B-tree nodes). Each physical page provides a read/write lock. A B-tree index consists of multiple nodes and edges. In general, locking a single node does not guarantee read/write consistency when multiple threads access data. For example, a thread changes multiple physical pages during a B-tree structure modification operation (SMO). If other threads access the B-tree structure at the same time, because the B-tree structure is modified, errors occur during the read or write operations.

To avoid such errors, InnoDB allows a thread to hold locks of multiple nodes at the same time to ensure read/write consistency of concurrent accesses to B-tree. Locking rules are provided to prevent deadlock when multiple threads access the B-tree structure. InnoDB optimizes the algorithm of B-tree concurrency control multiple times to improve the concurrent read and write capability of B-tree. The following issues still exist:

-   **Concurrent SMOs are not supported**: Only one SMO is allowed at a time. As a result, the index lock becomes an overall performance bottleneck of highly concurrent read and write operations.
    
-   **A thread holds a large number of locks**: To avoid deadlocks, an optimistic operation must hold the shared (S) locks on all nodes on the traversal path. An pessimistic operation must hold all exclusive (X) locks that may modify nodes. When the threads hold a large number of locks, higher concurrency causes more intensive lock contentions. The lock contentions are more intensive on key nodes.
    

PolarDB for MySQL optimizes the concurrency control for B-tree indexes and provides the following benefits:

-   **Higher concurrency**: allows all operations to concurrently access the B-tree index and keeps thread conflicts at the page level.
    
-   **Smaller lock granularity**: uses latch coupling for all operations to reduce the number of locks and thread conflicts.
    

## **Limitations**

-   This optimization is applicable to only B-tree primary and secondary indexes. Full-text index and spatial indexes are not supported.
    
-   To use the B-tree concurrency control optimization, set the value of the `innodb_adaptive_hash_index` parameter to **OFF**.
    

## **Supported versions**

The PolarDB for MySQL cluster is of Enterprise Edition or Standard Edition and runs the following database engine versions:

-   MySQL 8.0.1 whose revision version is 8.0.1.1.28 or later.
    
-   MySQL 8.0.2 whose revision version is 8.0.2.2.17 or later.
    

For information about how to check the cluster version, see [Query an engine version](/help/en/polardb/polardb-for-mysql/engine-versions#section-zpr-kam-8wb).

## **Usage**

Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). Set the value of the `loose_innodb_polar_blink_tree` parameter to **ON** to enable the B-tree concurrency control optimization. For more information about how to set the parameter values, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters). The following table describes the `loose_innodb_polar_blink_tree` parameter:

**Parameter**

**Level**

**Description**

loose\_innodb\_polar\_blink\_tree

Global

Enables or disables the B-tree concurrency control optimization. Valid values:

-   **OFF**: disables the B-tree concurrency control optimization. This is the default value.
    
-   **ON**: enables the B-tree concurrency control optimization.
    

**Note**

This optimization is disabled by default. After you modify the value of the `loose_innodb_polar_blink_tree` parameter, the cluster is automatically restarted. During the restart, services may be interrupted for up to one minute. The length of recovery time varies based on the data volume and the number of tables. We recommend that you perform this operation during off-peak hours and make sure that your application is configured to automatically reconnect to the database service.

## **Performance test**

The performance of InnoDB when the B-tree concurrency control optimization is enabled or disabled in high-concurrency scenarios (1,000 warehouses) is tested based on the TPC-C benchmarks.

-   When the B-tree concurrency control optimization is disabled, reaches the highest performance when the number of concurrent threads is 128.
    
-   When the B-tree concurrency control optimization is enabled, reaches the highest performance when the number of concurrent threads is 256. The read and write performance is 140% higher than that when the B-tree concurrency control optimization is disabled.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5334082171/p762522.png)
