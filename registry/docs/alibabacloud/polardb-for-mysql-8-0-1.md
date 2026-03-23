This topic provides the release notes for the minor engine versions of PolarDB for MySQL 8.0.1.

## **2025**

### **8.0.1.1.51.2 (2025-11-05)**

#### **Performance optimizations**

**Description**

Optimized the switching efficiency for binary logs when many files are retained. This reduces the switchover time and prevents transaction commits from being blocked.

#### **Bug fixes**

**Description**

-   Fixed an issue where connections could hang after a DDL statement finished executing. This happened when the [thread pool](/help/en/polardb/polardb-for-mysql/user-guide/thread-pool) feature was dynamically disabled by setting the `loose_thread_pool_enabled` parameter to OFF.
    
-   Fixed an issue where [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) consumed excessive memory after large transactions were executed.
    

### **8.0.1.1.51.1 (2025-10-16)**

#### **New features**

**Description**

Added a dynamic switch to control the cursor position adjustment feature on read-only (RO) nodes.

#### **Bug fixes**

**Description**

-   Fixed an issue where queries unexpectedly fell back to the row store for execution. This occurred when using [hybrid plans to accelerate wide table queries](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries) with [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) due to a query optimization that converted the `AVG` function to `SUM/COUNT`.
    
-   Fixed an issue where creating a partitioned table on a read/write (RW) node took an excessive amount of time after the Parallel Parse feature was enabled.
    

### **8.0.1.1.51 (2025-09-29)**

#### **New features**

**Description**

-   Added support for full materialized views. This feature pre-calculates and stores complex query results to provide faster query responses for reporting and analysis scenarios that involve large volumes of static or quasi-static aggregate data.
    
-   Added support for [Orca (Redis-compatible)](/help/en/polardb/polardb-for-mysql/user-guide/orca/), which is compatible with Redis 7.0 and earlier protocols. Orca is a built-in in-memory database service in PolarDB that lets you access the database using the Redis protocol. This is suitable for scenarios that require a high-performance key-value cache to accelerate application access. The `__orca_in_polardb_m_` database, created by default for this feature, does not consume storage space when not in use.
    
-   Added an `AUTH password` authentication method for [Orca (Redis-compatible)](/help/en/polardb/polardb-for-mysql/user-guide/orca/) based on the `default` account. After you configure the `default` account, clients can use the standard Redis `AUTH` command for identity verification. This enhances the access security of the Orca service.
    
-   Added support for the [adaptive execution plan switching feature](/help/en/polardb/polardb-for-mysql/user-guide/adaptive-execution-capability) in Index Condition Pushdown (ICP) scenarios.
    
-   Added the `rds_max_tmp_disk_space` parameter to limit the total disk space that can be occupied by temporary tables created by all sessions in a single cluster.
    
-   Added a fast recovery feature for the row-to-column mapping module of the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). This feature significantly reduces the time a column index spends in the [LOADING\_NCI state](/help/en/polardb/polardb-for-mysql/user-guide/loading-nci-status-description-and-impact-on-read-consistency) after a column store node restarts, enabling restoration within seconds.
    

#### **Performance optimizations**

**Description**

-   Optimized the allocation strategy for BLOB pages. When serialized dictionary information (SDI) is enabled, pre-allocation of BLOB pages is disabled to prevent unnecessary storage waste caused by frequent SDI updates. This improves space utilization.
    
-   Optimized the metadata loading mechanism for [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) nodes. This resolves potential out-of-memory (OOM) issues during node restarts in large-scale data scenarios, which were caused by excessively long metadata lists.
    
-   Standardized the naming convention for local files related to the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). The names no longer vary by node role, which simplifies file management during high availability (HA) switchovers.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where DDL statements executed on a newly created read-only (RO) node could fail after an HA switchover due to a failure in modifying the serialized dictionary information (SDI). This ensures the stability of DDL operations in the cluster after an HA switchover.
    
-   Fixed an issue where a [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) could crash during an HA switchover between primary and secondary nodes.
    
-   Fixed an issue caused by a dangling pointer access when an index was released during the execution of an `INSTANT DDL` statement on a [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
    
-   Fixed an issue where a cluster could crash during a high availability (HA) switchover under high write pressure after being scaled out without initialization.
    
-   Fixed an issue where point-in-time restore (PITR) tasks could occasionally fail after the Parallel Parse feature was enabled.
    
-   Fixed an issue that could cause an exception when adding a [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) to a table that had no primary key but contained a unique key.
    
-   Fixed an issue in [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) where, in an HA switchover scenario, the cluster might fail to start or data could not be persisted after the switchover.
    
-   Fixed an issue in [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) where a gap appeared in `gtid_executed` after a `CREATE ... IF NOT EXISTS` statement was executed on an aggregation node.
    
-   Fixed an issue in [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) where executing DML operations on a table with a [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) could trigger a crash on the RW node after a local RO node was hot-swapped to an RW node.
    
-   Fixed an issue where the Delta module of the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) could cause a cluster crash by accessing a null pointer during serialization. This was due to incomplete logic for identifying rolled-back rows.
    
-   Fixed an issue with `CREATE PARTITION TABLE` where [TTL](/help/en/polardb/polardb-for-mysql/user-guide/second-level-node-1/) information was lost because the primary Data Dictionary (DD) information was not updated.
    
-   Fixed an issue where queries on a [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) that contained both `DISTINCT` and the `AVG` aggregate function could return incorrect results.
    
-   Fixed an issue where query performance in a [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) could degrade under heavy pressure.
    
-   Fixed an issue where some queries could not be pushed down to the IMCI for execution when the `imci_implicit_orderby_rollup` parameter was enabled.
    

### **8.0.1.1.50.2 (2025-08-26)**

#### **Bug fixes**

**Description**

-   Fixed a rare issue where the background purge process could cause secondary index corruption during a transaction rollback.
    
-   Fixed an issue where a read-only node might temporarily fail to query some records during a B-tree index restructuring triggered by a high write workload.
    

### **8.0.1.1.50.1 (2025-08-12)**

#### **Bug fixes**

**Description**

-   Fixed an issue in the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) feature where a node could `crash`. This occurred when the `deltastore` was performing a `swap` task, due to a `pax` page length overflowing `uint32` or encountering a null pointer.
    
-   Fixed an issue where file operations on a follower in a one-writer, multiple-reader [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) were unexpectedly prohibited due to improper initialization order of global variables.
    

### **8.0.1.1.50 (2025-07-17)**

#### **New features**

**Description**

-   Expanded the functionality of window functions to support the `FRAME` clause. This lets you define calculation ranges more precisely in both `ROWS` and `RANGE` modes, enhancing the flexibility of complex analytical queries.
    
-   Added query-level `Pruner` statistics for the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). You can query the `INFORMATION_SCHEMA.IMCI_SQL_PROFILING` view to understand the block pruning efficiency of the `TableScan` operator during execution. This allows for more precise analysis and optimization of query performance.
    
-   Added support for modifying auto-increment column values in [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-1/) using online DDL. This update lets you perform modifications without blocking DML operations, ensuring business continuity.
    
-   Expanded the query pushdown capability of the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). It now supports complex SQL statements that contain `ROLLUP` and a subquery with an aggregate function in the projection column. This allows more types of analysis and reporting queries to benefit from the performance improvements of IMCI.
    
-   The [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) now supports the `JSON_ARRAYAGG` expression. This function aggregates data from multiple rows in a query result into a single JSON array, enriching the processing capabilities for JSON data.
    

#### **Performance optimizations**

**Description**

-   Optimized the scheduling mechanism of the elastic background thread pool for the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). This significantly reduces CPU usage when fetching task statuses, thereby lowering system overhead and freeing up more computing resources for core services.
    
-   Improved the efficiency of `Page Apply` during physical replication. By preventing secondary nodes from reading cold data, which could cause physical replication latency, the possibility of occasional jitter is reduced. This enhances the stability of data synchronization.
    
-   Optimized the unpublishing logic for column store nodes. By making the cleanup of junk files asynchronous and optimizing throttling, the node unpublishing process is smoother and has less impact on running services.
    
-   Improved the execution efficiency of the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) when processing complex analytical queries by merging window functions that have the same `PARTITION BY` definition.
    
-   Improved the performance of the `HashJoin` operator in the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). The processing speed of join queries is accelerated by optimizing the build process and implementation of its internal `Hash` table.
    
-   [Hybrid Plan](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries) in the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) now supports executing queries on tables without an explicitly defined primary key. This expands the applicability of hybrid row-column storage, allowing its performance advantages to be utilized even if the table schema does not include a primary key.
    
-   Added the `adaptive_digest_length_multiplier` parameter. This parameter can be used to adjust the memory pre-allocated for a SQL `digest`. You can optimize memory usage efficiency by setting an appropriate coefficient for the SQL text length.
    
-   Reduced the lock wait granularity in the snapshot retention feature of read-only IMCI nodes. This effectively prevents occasional stuttering of monitoring information caused by long lock waits and improves system observability.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where some eligible queries were not correctly routed to the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) for execution after the `imci_implicit_orderby_rollup` parameter was enabled. This ensures the stability of the query acceleration feature.
    
-   Fixed an issue where the `table_name` cache in the `INFORMATION_SCHEMA` view of the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) was not updated promptly after a `RENAME` operation was performed on a partitioned table. This ensures metadata consistency.
    
-   Fixed an issue where an update task based on old IMCI information could trigger an assertion failure after an `INSTANT DDL` was committed. This improves the stability of the `INSTANT DDL` feature.
    
-   Fixed an issue where string types might incorrectly use the collation information of `character_set_client` when using the `PREPARE EXECUTE` mode. This ensures correct character set handling.
    
-   Fixed an issue in `Sharding Outline` where table aliases and `ORDER BY`/`LIMIT BY` clauses were not correctly supported due to a flaw in the `token` calculation logic.
    
-   Fixed an issue where some statements in `PREPARE STATEMENT` mode could not be correctly routed to the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) for execution. This ensures that prepared statements can also benefit from performance acceleration.
    
-   Fixed an issue where the `Delta` module of the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) could cause a cluster crash by accessing a null pointer during data serialization. This was due to an omission in the logic for identifying rolled-back rows.
    
-   Fixed an issue where the `Index Join` in the [Hybrid Plan](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries) of the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) occasionally reported an `Assertion failed: false` error when executing queries related to partitioned tables.
    
-   Fixed an issue where reading JSON data on a read-only (RO) node could return an `invalid json` error in some scenarios. This ensures data format consistency between read/write and read-only nodes.
    
-   Fixed an issue where the query results from the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) and the row store could be inconsistent when the first parameter of the `json_valid` function was of the `varchar` type.
    
-   Fixed an issue where updating a `NULL` value to an empty string could cause a cluster crash in tables that use the `REDUNDANT` row format and involve [instant column addition](/help/en/polardb/polardb-for-mysql/user-guide/column-ddl/).
    
-   Fixed an issue of occasional inaccurate timing when using [Analyze the IMCI-based query performance](/help/en/polardb/polardb-for-mysql/user-guide/analyzing-column-store-index-query-performance) on an [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). This improves the reliability of the performance analysis tool.
    
-   Fixed an issue where accessing a partitioned table after restoring it with the [database and table restoration](/help/en/polardb/polardb-for-mysql/user-guide/method-1-for-database-and-table-restoration-restore-data-from-a-backup-set) feature could cause an exception. This occurred if the table involved [instant column addition](/help/en/polardb/polardb-for-mysql/user-guide/column-ddl/) and had 10 or more partitions.
    
-   Fixed an issue where queries containing unsupported user-defined functions were incorrectly routed to the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) by adaptive distribution, causing an error.
    
-   Fixed an issue where the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) could return an out of memory (OOM) error when performing a `GROUP BY` operation on variable-length strings with extremely large data volumes.
    
-   Fixed an issue where a cluster could crash during a `BNL` (batch nested-loop) execution when `CTE` and `SEMI JOIN DuplicateWeedout` were executed together.
    
-   Fixed a memory leak issue in the internal thread pool of the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) that occurred during elastic scale-in. This prevents memory leaks when adjusting the PCU of a Serverless cluster.
    
-   Fixed a deadlock issue caused by adding unnecessary unique key (UK) index transaction locks. This improves system stability in high-concurrency scenarios.
    
-   Fixed an issue where a concurrent `DROP INDEX` operation could cause a loading task to hang during the [LOADING\_NCI](/help/en/polardb/polardb-for-mysql/user-guide/loading-nci-status-description-and-impact-on-read-consistency) phase of a [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) execution.
    
-   Fixed an issue where queries occasionally could not use a [Hybrid Plan](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries) after [global consistency (high-performance mode)](/help/en/polardb/polardb-for-mysql/user-guide/global-consistency-high-performance-mode/) was enabled. This ensures the correct selection of query plans in high-performance mode.
    

### **8.0.1.1.49.2 (2025-06-11)**

#### **Bug fixes**

**Description**

-   Fixed an issue where point-in-time restore operations could not guarantee idempotence in parallel parsing mode.
    
-   Fixed an issue where online DDL in [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) could lead to inaccurate data in versions 8.0.1 and later.
    
-   Fixed an issue where the `Index Join` of the Hybrid Plan in [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) could cause a crash when executing in `Anti Semi Join` mode with a `Post Filter`.
    
-   Fixed an issue where the Window Function feature could cause an abnormal result set when internal temporary table data was written to disk.
    
-   Fixed an issue where [Time to Live (TTL)](/help/en/polardb/polardb-for-mysql/user-guide/ttl-overview) could cause a crash if a transaction was rolled back due to a deadlock during data cleanup.
    
-   Fixed an issue where the [Time to Live (TTL)](/help/en/polardb/polardb-for-mysql/user-guide/ttl-overview) thread could cause a crash if the transaction (trx) object was not released during shutdown.
    

### **8.0.1.1.49.1 (2025-05-21)**

#### **Bug fixes**

**Description**

Fixed a memory leak issue in the internal thread pool of the [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) that occurred during elastic scale-in. This effectively prevents memory leaks when the PolarDB Capacity Unit (PCU) of a Serverless cluster is dynamically adjusted.

### **8.0.1.1.49 (2025-04-25)**

#### **New features**

**Description**

-   The [TTL feature](/help/en/polardb/polardb-for-mysql/user-guide/ttl-syntax-description) now allows setting an expiration time, after which data automatically expires.
    
-   Added the [EXPLAIN DDL](/help/en/polardb/polardb-for-mysql/user-guide/explain-ddl) feature, which lets you query the execution features of specific DDL statements.
    
-   The [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless/) feature for read-only (RO) nodes now includes a feature to reclaim unused memory in the parse buf (parsing log memory block), which can reduce some memory usage.
    
-   Added support for asynchronous I/O and Partition I/O for Redo logs in a [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/).
    
-   Added a cost threshold to control the [adaptive execution](/help/en/polardb/polardb-for-mysql/user-guide/adaptive-execution-capability) for automatic request distribution among row store and column store nodes.
    
-   The `Index Join` of the Hybrid Plan in [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) now supports `Semi Join` and `Anti Semi Join` modes.
    

#### **Performance optimizations**

**Description**

-   Improved the performance of [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) queries that use an IN-List.
    
-   Optimized the implementation mechanism of Hash Groupby in [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/overview-29). It now adaptively selects partitioning strategies and algorithms based on data distribution characteristics to improve query performance.
    
-   Optimized the query optimizer's logic for handling subqueries, significantly improving the performance of [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) when processing complex IN and EXISTS subqueries.
    
-   Fixed an issue where database performance degraded when using the max\_execution\_time parameter under high concurrency.
    

#### **Bug fixes**

**Description**

-   Fixed an occasional issue of ImciFollower memory block stacking in a multi-machine shared architecture for [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/overview-29).
    
-   Fixed an issue where WITH ROLLUP might not correctly output NULL values when the column in the GROUP BY clause contained an expression.
    
-   Fixed an occasional issue where a column store node accessed cached data from before a DDL operation.
    
-   Fixed compatibility issues with the [Fast import feature](/help/en/polardb/polardb-for-mysql/user-guide/fast-import-instructions) for [partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/partitioned-tables/) and Instant Columns.
    
-   Fixed an issue where [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) could not control the sorting of query results with the `imci_implicit_orderby_rollup` switch when processing queries with ROLLUP.
    
-   Fixed an issue where accessing a spatial index on a read-only node could retrieve duplicate data.
    
-   Fixed a scale-in issue with [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) in a [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless/) cluster when the primary node had large specifications.
    
-   Fixed an issue where [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) did not support the LIMIT 1 query restriction in SQL subqueries.
    
-   Fixed an issue where the [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) hybrid materialization Mixoutput did not perform time zone conversion when reading timestamp data.
    
-   Fixed an occasional ROW LOG read/write out-of-bounds issue when performing ONLINE DDL on a table with a virtual column.
    
-   Fixed an issue where parallel query results could be incorrect when the subquery contained the Having keyword.
    
-   Fixed an issue where the Redo Cache feature could read dirty data when reading edge Redo logs. This issue could cause the Redo log validity check to fail, leading to a cluster crash.
    
-   Fixed an issue where using the parallel query (PQ) and performance\_schema features could cause a cluster crash in high-concurrency scenarios.
    
-   Fixed an issue where a secondary node in a multi-master cluster could crash when switching databases or object endpoints before the node.
    
-   Fixed an index corruption issue that could occur on a secondary index created on a virtual column.
    
-   Fixed a compatibility issue between the [database and table restoration](/help/en/polardb/polardb-for-mysql/user-guide/method-1-for-database-and-table-restoration-restore-data-from-a-backup-set) feature and the file space parameter name extension feature.
    
-   Fixed an issue where adding a read/write node to a multi-master cluster with a global read-only node caused the new node to fail to start.
    
-   Fixed an issue where an IMPORT TABLESPACE operation could not be performed due to an unexpected crash during an optimized BLOB write.
    
-   Fixed an issue where using an extended space parameter name could interrupt a [database and table restoration](/help/en/polardb/polardb-for-mysql/user-guide/method-1-for-database-and-table-restoration-restore-data-from-a-backup-set) task.
    
-   Fixed an issue where a database and table restoration task could be interrupted if the source table had an IMCI.
    
-   Fixed an issue where executing Show Binlog Events on a read-only node reported a "file not found" error.
    
-   Fixed a rare issue where a statement could not exit normally if the connection corresponding to a Kill DDL was executed when the cluster's nonblocking DDL was enabled.
    
-   Fixed a compatibility issue with [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) in non-full-groupby scenarios when executing a SELECT DISTINCT query.
    
-   Fixed a series of issues with the memory elasticity of [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) to improve memory utilization and cluster stability.
    
-   Fixed an issue where a cluster could crash when a materialized table with sorting was merged into an outer query in a parallel query scenario.
    
-   Fixed an issue where the kernel of a [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless/) cluster RO node supported a lower limit of 0.25 PCU. The RO node was scaled down to 0.25PCU during the synchronization of RO (read-only node) and RW (read/write node) specifications.
    
-   Fixed a cluster crash issue when creating a temporary table with a CREATE TABLE AS SELECT statement.
    

### **8.0.1.1.48.1 (2025-03-20)**

#### **Bug fixes**

**Description**

Fixed an issue where read requests on a read-only (RO) node would slow down in scenarios with low Redo workload when the multi-version engine feature was enabled.

### **8.0.1.1.48 (**2025-02-21**)**

#### **New features**

**Description**

-   The Delete statement now supports Index Hints, allowing you to specify the use of a particular index with USE INDEX, FORCE INDEX, or IGNORE INDEX syntax.
    
-   Added support for sending Redo Log logs to column store nodes over the network, reducing the IOPS usage of column store nodes.
    
-   Added the encryption functions `SM4_encrypt()`/`SM4_decrypt()` to implement field-level access encryption using the SM4 algorithm.
    
-   Added the parallel parsing of Redo feature for physical replication to improve physical replication performance.
    
-   The Explain result now displays the called Outline ID. If a single statement calls multiple Outlines, they are separated by commas.
    
-   [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-1/) now supports large wide tables, with the maximum number of columns in a table increased to 10,000.
    
-   Added the [Resource Management Instructions](/help/en/polardb/polardb-for-mysql/user-guide/resource-management-instructions/) feature to implement CPU resource isolation at the `User` and `Database` levels.
    
-   [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) now supports local read-only nodes, providing read pressure distribution and high availability switchover.
    

#### **Performance optimizations**

**Description**

-   Optimized the global mutex lock for SHOW VARIABLES to improve performance under high concurrency.
    
-   Optimized the DDL scenario for [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-1/) by automatically enabling the pre-commit feature of the X-Engine.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where the kernel of a [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless/) cluster RO node supported a lower limit of 0.25 PCU. The RO (read-only node) would not scale down to 0.25 PCU during the synchronization of RO and RW (read/write node) specifications.
    
-   Fixed an issue where a crash could occur if Hybrid Plan was disabled at runtime in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29).
    
-   Fixed a rare issue of data redundancy in the IMCI that could be triggered by a cluster restart during a large transaction on a column store node, followed by a crash recovery.
    
-   Fixed an issue where a query could trigger an exception if all data in a stored block was identical.
    
-   Fixed an issue by opening session-level `binlog_rows_query_log_events` permission to support SQL backup and rollback using DMS.
    
-   Fixed an issue where the Online DDL process for IMCI in a multi-master cluster scenario did not adapt to LLSN (Logical Log Sequence Number) logic, resulting in missed replay of columnstore Redo logs.
    
-   Fixed a leak in old tablespace recovery after a DDL change in [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-1/).
    
-   Fixed an index selection error in IMCI for constant range filtering (`const between field1 and field2`) scenarios.
    
-   Fixed a crash issue in IMCI that occurred when executing an Explain for Connection statement for a [partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/partitioned-tables/) query in another session.
    
-   Fixed an unnecessary restriction in algorithm selection. Now, some correlated subqueries can choose the efficient HASH JOIN algorithm for query execution.
    
-   Fixed an issue where IMCI I\_S (IMCI-related views in the Information\_Schema database) query results with a `name` filter were incomplete due to the use of a case-insensitive string comparison function.
    
-   Fixed an issue where a metadata lock (MDL) could not be obtained during the DDL SCAN phase, resulting in only an error message being displayed and the IMCI data not being recovered.
    
-   Fixed an issue where the `gtid_purged` variable on a read-only node was not synchronized with the primary node.
    
-   Fixed an issue where deleting a database in a multi-master cluster could cause the entire cluster to hang.
    
-   Fixed an issue by changing the [global consistency (high-performance mode)](/help/en/polardb/polardb-for-mysql/user-guide/global-consistency-high-performance-mode/) related variable to the Connection level, allowing it to be enabled or disabled through the proxy endpoint.
    
-   Fixed an issue where executing `TRUNCATE` and `RENAME` table statements in a multi-master cluster could cause the entire cluster to hang.
    
-   Fixed an issue where the XEngine unexpectedly cleared metadata of data blocks when a read-only node was restarted.
    
-   Fixed an issue where the MDL lock system could become abnormal when the number of connections exceeded 65536.
    
-   If a Multi-master Cluster contains many database tables, repairing it may cause read/write nodes to become unavailable.
    
-   Fixed an issue where setting a `flagset` type variable, such as (`optimizer_switch`), no longer reports an error if there are duplicate items.
    
-   Fixed an issue where earlier community versions did not correctly optimize the join order in multi-table update statements.
    
-   Fixed an issue in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) where the status was set incorrectly when multiple runtime filters were pushed down to the same table.
    
-   Fixed a potential crash when processing an empty string output from GROUP\_CONCAT with the SUBSTRING\_INDEX expression, and the separator length is greater than 1.
    

### **8.0.1.1.47.1 (**2025.01.07**)**

#### **Bug fixes**

**Description**

Fixed an occasional data read failure when reading large JSON or GIS fields through the [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29).

## **2024**

### **8.0.1.1.47 (**2024.12.19**)**

#### **New features**

**Description**

-   Added a feature in Outline to support table partitioning scenarios. A single Outline can match all statements with the same template, applicable to different partitioned tables.
    
-   Added the ability to dynamically adjust the selection result of `Order Index` during execution based on actual conditions.
    
-   Added the parallel parsing of Redo feature for physical replication to improve physical replication performance.
    
-   Added the variable `ignore_use_force_index`. When enabled, it ignores all use or `force index` in statements and Outlines (but does not affect Index() in Hints).
    
-   Added string conversion functions `convert_sys_to_filename()` and `convert_filename_to_sys()` for converting between `system_charset_info` encoding and `my_charset_filename` encoding.
    
-   Added support for [setting transparent data encryption (TDE)](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster) for OSS cold data.
    
-   Added support for enabling asymmetric MTT buffers for RW and RO nodes. Supports enabling [MTT optimization](/help/en/polardb/polardb-for-mysql/user-guide/scc) in conjunction between RO and RW nodes.
    
-   The IMCI `i_s.imci_index_stats` table now includes the PRUNED\_PERCENT field, which indicates the Data Skipping ratio for each IMCI.
    
-   Added a feature to the SHOW ProcessList result to display whether a session is waiting for thread pool scheduling.
    
-   Supports rebuilding an IMCI by modifying the `pack_shift` in the COMMENT, without needing to delete it beforehand.
    

#### **Performance optimizations**

**Description**

-   Optimized the dynamic Buffer Pool scale-in process to reduce lock conflicts.
    
-   Optimized [SQL Trace](/help/en/polardb/polardb-for-mysql/user-guide/usage-2) so that when `Call procedure` is used, the SQL and execution plan can be correctly recorded.
    
-   Optimized the memory overhead of columnstore wide tables.
    
-   Optimized the startup speed of columnstore read-only nodes. Supports independent startup of the columnstore engine from the columnstore snapshot offset.
    
-   Optimized the thread startup and destruction code for logical pre-reading and simplified the memory check logic.
    
-   Optimized the long startup time of [column store nodes](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) in scenarios with a massive number of tables.
    
-   Optimized the performance and memory usage of IMCI for large transactions.
    
-   Optimized the performance of the materialized HASH KEY expression in IMCI.
    
-   Optimized the [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview) process for column store nodes. Added support for column store nodes to be added to the Proxy node to handle service traffic only after the index is ready.
    
-   Optimized the statistics sampling mechanism of IMCI, increasing the sampling frequency and the proportion of sampled data.
    
    Optimized the sampling logic for low-cardinality columns to avoid situations where inaccurate statistics lead to queries not being fully optimized.
    
-   Optimized the Simulated-AIO asynchronous performance blocking module.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where executing a DDL on a table containing a view could result in an error or have no effect after an HA (node switchover).
    
-   Fixed an issue where an RO node might remain unavailable after reconnecting to an RW node.
    
-   Fixed a process crash issue caused by the `CAST(REGEXP_SUBSTR(...)) AS DECIMAL` statement.
    
-   Fixed an issue where `REGEXP_SUBSTR` might return an incorrect `NULL` flag.
    
-   Fixed an issue where the table creation statement for the `dlm_policies` system table was recorded in the BINLOG, causing downstream synchronization to fail.
    
-   Fixed an issue where unique indexes were not fully utilized for acceleration in some queries.
    
-   Fixed an issue where using the `ALTER TABLE DROP` statement to delete multiple full-text indexes (FTS) simultaneously could leave residual metadata.
    
-   Fixed an unnecessary index rebuild issue caused by specifying a DEFAULT value when extending the length of a VARCHAR column.
    
-   Fixed compatibility, expansion, and contraction anomalies, and other issues between IMCI [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview) and internal memory elasticity.
    
-   Fixed an issue where full-text index retrieval would get stuck on a read-only node after a DDL operation.
    
-   Fixed an issue in [adaptive execution](/help/en/polardb/polardb-for-mysql/user-guide/adaptive-execution-capability) where certain types of queries were not routed correctly.
    
-   Fixed an availability issue with the [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) caused by the lack of support for online rebuilding.
    
-   Fixed a crash issue caused by not fully adapting to the DDL global lock when [batch adding columnstore indexes](/help/en/polardb/polardb-for-mysql/user-guide/library-level-column-store-index-ddl-syntax) in a multi-write database/table cluster.
    
-   Fixed a query crash issue in JSON\_TABLE scenarios with NULL Fields.
    
-   Fixed a conflict issue between multi-master Buffer Pool Resize and transaction access to blocks, and optimized the performance of multi-master Buffer Pool RDMA register or unregister.
    
-   Fixed an issue where Digest CCL did not support the PS (Prepared Statements) protocol.
    
-   Fixed an issue where an RO node could crash during the HA phase after the RO No Sync feature was enabled.
    
-   Fixed an issue where a transaction rollback required a pessimistic lock to delete an index when using a Spatial Index, leading to an infinite loop and prolonged lock holding.
    
-   Fixed a rare issue where the upgrade task from a historical version to 8.0.1.1.45.1 could be interrupted.
    
-   Fixed a rare issue where accessing string data types during columnstore execution could cause a query error due to accessing invalid data.
    
-   Fixed an issue where IMCI would fall back to row store when processing an expression containing multiple subqueries with SUM.
    
-   Fixed a circular wait issue with asynchronous column index rebuilding when [using Hybrid Plan to accelerate wide table queries](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries) was enabled in a one-writer, multiple-reader IMCI setup.
    
-   Fixed an issue where Redo was written incorrectly for some pages if the `innodb_bulk_load_page_grained_redo_enable` parameter was modified within a certain time window during parallel DDL execution.
    
-   Fixed a potential deadlock issue in BLINK for batch data deletion scenarios in tables containing LOB fields.
    
-   Fixed a crash during the migrate process caused by a concurrency issue between high-frequency [INSTANT DDL](/help/en/polardb/polardb-for-mysql/user-guide/instant-add-column#concept-2021980) operations and background Compaction tasks.
    
-   Fixed an issue where `GROUP BY` could cause a temporary table to report a `table is full` error.
    
-   Fixed an issue where the index join in IMCI could lead to unstable results when using a constant as a join condition.
    

### **8.0.1.1.46.2 (2024-11-19)**

#### **Bug fixes**

**Description**

-   Fixed an issue where the table Autoinc value would roll back after executing an `INSERT ... ON DUPLICATE KEY UPDATE` statement following an RO node to RW node switchover.
    
-   Fixed compatibility, expansion, and contraction anomalies, and other issues between IMCI [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview) and internal memory elasticity.
    
-   Fixed a bug that caused a crash when the number of tables exceeded 61 during query transformation. Query rewrite is now skipped in this scenario.
    

### **8.0.1.1.46.1 (2024-11-06)**

#### **Bug fixes**

**Description**

-   Fixed an issue where full-text index retrieval would get stuck on a read-only node after a DDL operation.
    
-   Fixed an issue where the `backward index scan` feature was incompatible with optimizations such as ICP. A new `polar_optimizer_switch` switch has been added for control.
    

### **8.0.1.1.46 (2024-10-28)**

#### **New features**

**Description**

Added the variable `ignore_use_force_index`. When enabled, it ignores all use/force index in statements and Outlines (but does not affect index() in hints).

#### **Performance optimizations**

**Description**

-   The INFORMATION\_SCHEMA.IMCI\_INDEX\_STATS table in IMCI now includes the PRUNED\_PERCENT field, which indicates the [data skipping](/help/en/polardb/polardb-for-mysql/user-guide/query-pruning-optimization-technology) ratio for each columnstore index.
    
-   Optimized SQL trace so that when the SQL trace type is set to SLOW LOG, SQL trace will also apply to statements specified by DEMAND.
    
-   Optimized RW and RO to support asymmetric [MTT](/help/en/polardb/polardb-for-mysql/user-guide/scc#iVmln) buffers. Supports enabling MTT in conjunction between RO and RW nodes.
    
-   Optimized the Serverless process for column store nodes.
    
    Allows new column store nodes to serve traffic only after their indexes are ready, reducing slow queries caused by SQL statements being routed to new nodes and running row-store plans during this period.
    
-   Optimized the performance overhead of saving partition information during SQL execution in [columnstore index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/overview-29), improving [partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/overview-46) query performance.
    

#### **Bug fixes**

**Description**

-   Fixed a cluster crash issue during the Undo initialization phase when Force recovery was enabled.
    
-   Fixed a circular wait issue with asynchronous column index rebuilding when [Hybrid Plan](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries) was enabled in a one-writer, multiple-reader IMCI setup.
    
-   Fixed an error when re-importing the same data into a [UNIQUE CHECK IGNORE](/help/en/polardb/polardb-for-mysql/user-guide/unique-check-ignore) partitioned table using LOAD DATA with REPLACE.
    
-   Fixed an issue in a three-zone deployment where `recent_written` could introduce dirty data if the CRC calculation value of the incoming data was exactly 0.
    
-   Fixed an issue where an RO node could get stuck during the HA (node switchover) phase, preventing excessively long user HA times.
    
-   Fixed B-tree corruption when adding an auto-increment column and creating a descending primary key index on that column.
    
-   Fixed an issue where IMCI would fall back to row store when processing an expression containing multiple subqueries with SUM.
    
-   Fixed a rare memory residue issue when an error was encountered during parallel primary key rebuilding.
    
-   Fixed a potential crash issue when processing LOB fields in a `GROUP BY` query while using the Temptable engine.
    
-   Fixed an issue where parallel query results could be incorrect when the predicate condition contained a subquery.
    
-   Fixed a potential query crash issue in JSON\_TABLE scenarios with a NULL FieId.
    
-   Fixed an NCI encoding anomaly for EQUAL\_PACK\_LENGTH type DDL operations when modifying a PRIMARY KEY field.
    
-   Fixed a conflict between Proxy advanced transaction splitting and [Fast Query Cache](/help/en/polardb/polardb-for-mysql/user-guide/fast-query-cache) that affected the result set.
    
-   Fixed an issue where using a JSON\_ARRAY expression in a subquery could lead to incorrect results when IMCI was enabled.
    
-   Fixed a process interruption issue in the [new process](/help/en/polardb/polardb-for-mysql/overall-process-and-estimated-time#title-i13-vg3-6x4) for database and table restoration after multiple rounds of restoration on the same table.
    
-   Fixed a memory leak issue during the dynamic enabling process of the [RDMA log transfer](/help/en/polardb/polardb-for-mysql/user-guide/rdma-log-transfer) feature.
    
-   Fixed an availability issue with the [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) caused by the lack of support for online rebuilding.
    
-   Fixed an issue where asynchronous DDL could not be used when adding a [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) by modifying the COMMENT on a table with a full-text index.
    
-   Fixed an issue where transactions might not be `killed` in high-concurrency scenarios.
    

### **8.0.1.1.45.2 (2024-09-13)**

#### **Bug fixes**

**Description**

-   Fixed a rare issue where the upgrade task from a historical version to 8.0.1.1.45.1 could be interrupted.
    
-   Fixed a rare issue where accessing string data types during a columnstore execution query could cause a query error due to accessing invalid data.
    

### **8.0.1.1.45.1 (2024-09-09)**

#### **Performance optimizations**

**Description**

Optimized the memory overhead of IMCI columnstore wide tables.

### 8.0.1.1.45 (2024-09-03)

#### **New features**

**Description**

-   Added a display to show whether a session is waiting for thread pool scheduling.
    
-   Added a join reorder strategy based on a greedy algorithm in IMCI.
    
-   Added a stored procedure and extended SQL command to batch add [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) to an entire database.
    
-   Added a [major engine version upgrade](/help/en/polardb/polardb-for-mysql/user-guide/major-version-upgrades/) feature from a PolarDB 5.7 backup set to improve one-click migration efficiency.
    
-   The Hybrid Plan in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) now supports partitioned tables, virtual columns, and columns of ENUM, SET, and GIS types.
    

#### **Performance optimizations**

**Description**

-   Optimized PolarDB IO Threads to be dynamically adjustable without a restart.
    
-   Optimized the automatic elasticity of IMCI single-machine replay to reduce replay latency and out-of-memory (OOM) issues caused by high replay pressure.
    
-   Optimized the read performance of `Date` type fields in IMCI.
    
-   Optimized the IMCI statistics sampling mechanism, increasing the sampling frequency and the proportion of sampled data.
    
    Optimized the sampling logic for low-cardinality columns to avoid situations where inaccurate statistics lead to queries not being fully optimized.
    

#### **Bug fixes**

**Description**

-   Fixed a node crash issue caused by InnoDB full-text indexes in a multi-master cluster.
    
-   Fixed an issue where the optimizer significantly misestimated the selectivity when a JOIN condition in IMCI included a type conversion.
    
    Fixed an issue where the Hybrid Plan could not be correctly selected in IMCI due to an overestimation of the output cardinality of a JOIN.
    
-   Fixed an issue where JSON\_LENGTH returned incorrect results when wildcards were present.
    
-   Fixed an issue where Redo was written incorrectly for some pages if the `innodb_bulk_load_page_grained_redo_enable` parameter was modified within a certain time window during parallel DDL execution.
    
-   Fixed an issue where the Autoinc value of a partitioned table would roll back after a read-only node was switched to a read/write node.
    
-   Fixed an issue where removing an RO node could cause monitoring connections to be blocked for a period when `innodb_polar_log_rdma_transfer` was enabled.
    
-   Fixed an issue where the `index join` in IMCI could produce unstable results when using a constant as a JOIN condition.
    
-   Fixed an issue where a temporary table using a `group by` statement could cause temptable to report a `table is full` error even when the disk was not full.
    
-   Fixed an issue where user threads waited too long for a Free Page when the Buffer Pool on an RO node was very full.
    
-   Fixed a potential deadlock issue in blink for batch data deletion scenarios in tables containing `lob` fields.
    
-   Fixed an issue where applying JOIN elimination optimization in IMCI could lead to unstable results.
    
-   Fixed an issue where the Autoinc value would restart from 1 on the next write operation after all data in a table was deleted.
    
-   Fixed a `drop database` failure issue when a `database` contained tens of thousands of tables.
    
-   Fixed an issue where useless subqueries were not deleted during the view merging process.
    
-   Fixed an issue where a query could report an out-of-memory error when executed in IMCI if it had too many UNION ALL clauses.
    
-   Fixed an issue where a `desc` `select` statement could not correctly call an outline.
    
-   Fixed an issue where `table_comments` in `information_schema.tables` displayed `xxx is not base table`.
    
-   Fixed an issue where IMCI's implicit conversion of date types was incompatible with MySQL's behavior, leading to unexpected results.
    
-   Fixed a query result inconsistency issue caused by a mismatch in the default `pruner` type when adding a new partition to a partitioned table created in an older version after an upgrade.
    
-   Fixed a floating-point precision issue in JSON.
    

### 8.0.1.1.44 (2024-07-06)

#### **New features**

**Description**

-   Supports deriving corresponding views from `join` conditions.
    
-   Added a late materialization version of UnionAll for IMCI.
    

#### **Performance optimizations**

**Description**

-   Optimized the time taken for query optimization on simple queries (single-table queries).
    
-   Multi-master clusters now support fine-grained table-level locks.
    
-   Optimized the performance of decimal sum/avg in IMCI.
    
-   Optimized performance in hot spot update scenarios.
    
-   Optimized the performance of hash match in IMCI.
    
-   Optimized the memory for metadata used in IMCI queries.
    
-   IMCI now supports filter pushdown to outer join.
    
-   Adjusted the `PolarFS` transaction processing thread priority to improve PolarDB DDL performance.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where `import table` failed due to a blink dangling page.
    
-   Fixed an issue where the DB would hang during a manually triggered checkpoint in various processes.
    
-   Fixed an issue where frequently toggling RO No Sync dynamically could cause markers to be lost.
    
-   Fixed an issue where a Standby node in a multi-master cluster could not start due to an abnormal rollback segment.
    
-   Fixed an issue where an `InnoDB` table with a `function index` could not be archived.
    
-   Fixed an issue where `Last_query_cost` could become negative in a few optimization scenarios.
    
-   Fixed an issue where join elimination could not be performed when a function contained an aggregate function.
    
-   Fixed an issue where the IP address in audit logs was not updated in a timely manner when connections were reused under a session-level connection pool.
    
-   Fixed issues related to acquiring and releasing global table locks in a multi-master cluster.
    

### 8.0.1.1.43 (2024-06-03)

#### **New features**

**Description**

-   Added support for Binlog in transaction resumable upload.
    
-   Added the parameter `thread_pool_reset_waiting_state_before_queuing`.
    

#### **Performance optimizations**

**Description**

-   Columnstore index IMCI added an Index Join based on Hybrid Plan, which supports using InnoDB indexes for `Join` operations.
    
-   Optimized the Page read performance of read-only nodes on PFS.
    
-   Optimized the memory for metadata used in IMCI queries.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where setting `optimizer_switch` and `parallel_query_switch` values would report an Error instead of a Warning for certain incorrect values.
    
-   Fixed an issue where the `optimizer_switch` value would not take effect if a comma was added at the end.
    
-   Fixed an issue where index selection changed after adding a `limit` operation to an implicit aggregate query.
    
-   Fixed an issue where the undo log grew continuously after a follower was rebuilt in a 3AZ deployment.
    
-   Fixed an issue where Persist RO could cause the RO to read old data.
    
-   Fixed an issue of high replication delay on read-only nodes in a multi-master cluster.
    
-   Fixed an issue where the optimizer could not select the optimal Join Order due to an error in cardinality estimation.
    
-   Fixed a deadlock issue between threads that could occur during B-tree structure adjustment caused by record deletion.
    
-   Fixed an issue where archiving an archived table with a descending index failed.
    
-   Fixed an issue where no data was returned when using Limit Offset pushdown optimization combined with a secondary index equivalent condition and a primary key `In List` condition to get reverse-ordered paged output of the primary key.
    
-   Fixed an issue of excessive permissions during DLM policy execution.
    
-   Fixed an issue where executing a `Create Table Select` statement in a multi-master cluster affected the availability of other nodes.
    
-   Fixed an issue where system pages could be corrupted when executing DDL statements on multiple nodes simultaneously in a multi-master cluster.
    

### **8.0.1.1.42 (2024-04-30)**

#### **New features**

**Description**

-   Added predicate pushdown functionality, including pushing predicates from HAVING to WHERE, and from HAVING to derived and subquery.
    
-   Added a hybrid row-column optimizer and cost-based row-column routing capability.
    
-   Supports viewing the invocation of Statement Outlines in the **EXPLAIN** result.
    
-   Supports using a prefix murmur hash bloom filter in IMCI.
    
-   Supports using the LEFT JOIN elimination feature in **UPDATE** statements.
    
-   Supports using the instant column addition feature on tables with IMCI created.
    
-   Added returned row count information to the Fast Query Cache. Queries that hit the cache can now display the number of returned rows in the audit log.
    

#### **Performance optimizations**

**Description**

-   Introduced an execution feedback mechanism in row-column routing to collect real execution information and feed it back to the optimizer.
    
-   Disabled index merge intersection by default for DML statements to improve performance and prevent deadlocks.
    
-   Reduced the metadata overhead of memory allocation and memory statistics for IMCI to save memory.
    
-   IMCI supports using BatchProbe to improve the performance of JOIN operations.
    
-   Optimized the memory for metadata, file modules, and small RAM resident objects in IMCI to reduce resident memory usage.
    
-   Optimized the error message for importing cold data from OSS back to InnoDB.
    
-   When monitoring database performance, the impact of access by O&M engineers on the `slow_queries` status metric is ignored.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where the OSS path mapping of a table in the recycle bin was incorrect after restarting the cluster when an OSS IBD table was recycled with the RECYCLE BIN feature enabled.
    
-   Fixed an issue where a read-only (RO) node with excessive clock drift could preempt the read/write (RW) node's permissions when starting the NewHA vector voting disk.
    
-   Fixed an issue where the `dbms_oss.delete_table_file` built-in stored procedure could not delete cold data in CSV format.
    
-   Fixed an issue where the internal counter of the Thread Pool could become incorrect if an ACL lock wait was encountered during the asynchronous authentication process of the Thread Pool.
    
-   Fixed an issue where the Blob space of the original record could not be reclaimed when performing an **UPDATE** operation on a Blob types of column.
    
-   Fixed a data loss issue when repeatedly archiving an OSS foreign table.
    
-   Fixed an issue where the optimizer selected an ordering index (sorting index), but the sorting operation was not omitted during actual execution.
    
-   Fixed a node crash issue when creating an OSS foreign table because the oss\_prefix parameter was not configured in the OSS Server.
    
-   Fixed an issue where accessing some tables in the information\_schema database under a multi-master cluster could retrieve abnormal data.
    
-   Fixed an issue where performing a multiplication operation on Decimal type of data would return an assert message when at least one multiplier was 0 and the scale (decimal places) of the result exceeded 16.
    
-   Fixed an issue where updating statistics on a partitioned table with an IMCI could result in inaccurate statistics because only some partitions were sampled.
    
-   Fixed an issue where index equivalent access did not trigger adaptive row-column routing.
    
-   Fixed an issue of excessive Autoinc init log printing.
    
-   Fixed a potential error issue with OSS foreign tables in Order By Desc scenarios.
    
-   Fixed a rare node crash issue when executing the `TRUNCATE PARTITION` command on a partitioned table with an auto-increment column.
    
-   Fixed a data corruption issue caused by different index orders when executing an `EXCHANGE PARTITION` operation.
    
-   Fixed an issue where the Buffer Pool's automatic cancellation of a preceding scale-in operation could cause a node crash under high concurrency.
    

### **8.0.1.1.41 (2024-03-19)**

#### **New features**

**Description**

Added a Left Join feature based on TopK pushdown in columnstore index.

#### **Performance optimizations**

**Description**

-   Supports granting users global dynamic permissions to execute the `SHOW_ROUTINE`, `FLUSH_USER_RESOURCES`, `FLUSH_TABLES`, `FLUSH_STATUS`, and `FLUSH_OPTIMIZER_COSTS` commands.
    
-   Optimized the enabling process for global consistency high-performance mode. When the `innodb_polar_scc` parameter is set to **ON** on an RO node, the cluster automatically enables dependent features for high-performance global consistency, such as RDMA and PolarTrans, reducing the complexity of the control process.
    
-   Supports using Variable-Setting Hint syntax in global consistency high-performance mode.
    
-   Supports setting the `polar_oss_ddl_shared` parameter to **ON** to access table data that is being archived as cold data.
    
-   Disabled the partial update feature for Blob fields.
    
-   Supports using the database and table restoration feature for tables with an IMCI.
    
-   Supports using the most common value statistics collection feature in IMCI to improve the accuracy of records per key estimation in data skew scenarios.
    
-   Optimized the IMCI memory scheduling feature to improve memory utilization.
    
-   Optimized the nonblocking DDL feature to support more DDL statements.
    
-   Supports using the IMCI and global consistency (high-performance mode) features simultaneously.
    
-   Supports using the **CHECK TABLE** command to check a specific partition.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where a TRUNCATE statement could be executed on any node in a multi-master cluster.
    
-   Fixed a node crash issue caused by accessing an invalid Blob reference when pre-reading Blob type data.
    
-   Fixed a potential failure when exporting a local table to the OSS engine in parallel.
    
-   Fixed an issue where the crash recovery logic could not run normally after an abnormal cluster restart because the LSN offset of the checkpoint did not meet expectations during a checkpoint operation.
    
-   Fixed an issue where Autoinc would roll back and require a node restart to recover.
    
-   Fixed a node crash issue that could occur when a CTE (Common Table Expression) referenced a TempTable engine-based temporary table multiple times and used an index scan on the temporary table.
    
-   Fixed a memory out-of-bounds issue when IMCI processed extra-long string types.
    
-   Fixed a probabilistic node crash issue when using the IMCI feature with the pre-read feature enabled simultaneously.
    
-   Fixed an issue where the XEngine's compaction background task affected foreground operations and thus slow query performance due to overly strict concurrency control.
    
-   Fixed an issue where using a BIGINT types of column in a Join operation could lead to inaccurate cardinality estimation and prevent the use of an IMCI if the column contained very large values.
    
-   Fixed a deadlock issue in DDL read-ahead in parallel DDL scenarios.
    
-   Fixed a memory leak issue that occurred during a Reload operation for features such as Statement Outline and Concurrency Control.
    
-   Fixed an issue where BIT fields were displayed incorrectly after a Group By operation.
    
-   Fixed an incompatibility issue between TDE and RDMA memory when forking to create a child process.
    
-   Fixed an issue where duplicate groups appeared in the result set when a parallel query pushed GROUP BY down to a Worker for parallel execution in the presence of a partitioned table.
    
-   Fixed an issue where executing an **EXCHANGE PARTITION** operation could cause index corruption and prevent access to table data due to different index orders.
    
-   Fixed issues with partitioned tables whose primary key did not include the partition key during search, DML operations, and Binlog recording by the query optimizer.
    

### **8.0.1.1.40.2 (2024-02-07)**

#### **Bug fixes**

**Description**

-   Fixed an issue where the replication delay of a global read-only node could increase when the load on the primary nodes of a multi-master cluster was unbalanced.
    
-   Fixed an issue where a newly created read-only node might fail to start on a multi-master cluster.
    
-   Fixed an issue where executing a DDL on a multi-master cluster could cause the primary node to fail to restart.
    

### **8.0.1.1.40 (2024-01-19)**

#### **New features**

**Description**

-   Supports sampling statistics in the X-Engine to estimate the approximate compression ratio.
    
-   Supports enabling the columnstore index feature on a global read-only node of a Multi-master Cluster (Database/Table).
    
-   When using the columnstore index feature, allows users to ignore transaction isolation levels implicitly set by tools such as Metabase.
    
-   Stats Manager supports automatically dispatching histogram collection tasks to read-only or hot replica nodes for automatic histogram updates.
    
-   Supports using temporary tables when using the Hybrid Plan to accelerate wide table queries.
    
-   Added the ability to enable semi-sync adaptive degradation and automatic recovery.
    
-   Supports modifying the character set of a field using the INPLACE algorithm.
    
-   SQL Trace supports opening configuration options for a limited number of read-only nodes. This means the `sql_trace_type` parameter can be configured as **REPLICA\_DEMAND**, **REPLICA\_ALL**, or **REPLICA\_SLOW\_QUERY**.
    

#### **Performance optimizations**

**Description**

-   Improved the speed of handling connection requests by the Thread Pool in low-concurrency scenarios.
    
-   Improved database performance in short-lived connection scenarios.
    
-   Optimized the transaction mask calculation process in columnstore index (IMCI).
    
-   When using the adaptive execution plan switching feature, if there is a high amount of cold data read IO, the maximum execution time for switching is automatically increased.
    
-   Adjusted the maximum display length of query statements in SQL Trace.
    
-   The columnstore index feature now includes a dynamic filter to improve the join efficiency between tables.
    
-   When setting the value of the `loose_optimizer_switch` parameter using a SET\_VAR hint in a HINT statement, a comma is no longer required at the end.
    

#### **Bug fixes**

**Description**

-   Fixed an incorrect sorting result issue when querying TopK data using the columnstore index (IMCI) feature. This occurred when sorting in descending order on a table with too many NULL values in the query statement.
    
-   Fixed an issue where a read-only columnstore node could not recover columnstore data if it was started during the execution of a DDL involving a columnstore index table.
    
-   Fixed a space leak issue caused by an exception during a shrink operation.
    
-   Fixed an issue where concurrently modifying data structures during physical replication in the X-Engine caused a read-only node to become abnormal.
    
-   Fixed an upgrade failure issue when upgrading an X-Engine from a read replica to a synchronous standby.
    
-   Fixed an issue of excessive optimizer memory usage when using columnstore index in high-concurrency query scenarios.
    
-   Fixed an issue where updating statistics on a partitioned table with a columnstore index could result in inaccurate statistics because only some partitions were sampled.
    
-   Fixed an issue where a query statement containing a subquery that returned an empty result set could not be routed to a columnstore index node for execution.
    
-   Fixed an issue where a CCL rule matched by a DIGEST value could become invalid after a cluster upgrade.
    
-   Fixed an issue where querying the `information_schema.tables` table was abnormally slow when the database contained CSV or ORC external tables.
    
-   Fixed a Flink CDC parsing failure issue caused by a duplicate `table_id` in the global Binlog of a Multi-master Cluster (Database/Table).
    
-   Fixed an issue where resumable transaction data could not be queried when using the transaction breakpoint resumable upload feature because the parallel query feature was enabled.
    
-   Fixed a failure to add a new RO node when executing the new database and table restoration process, caused by a too-low registration offset of the read-only (RO) node.
    
-   Fixed an issue where a thread could not exit due to a full disk when executing the new database and table restoration process.
    
-   Fixed an issue of high memory consumption when using Prepare Statement to handle many concurrent requests or execute complex queries.
    
-   Fixed an issue where query results were incorrect when using columnstore index (IMCI) to query a view containing BIT type data.
    
-   Fixed an issue where an insert operation on a KEY partitioned table would report an error `"ERROR 1748 (HY000) Found a row not matching the given partition set"`. This was because the generated column (STORED GENERAGED COLUMN) was not considered when pruning the KEY partitioned table.
    
-   Fixed an issue where new connections would still access a discarded old file due to frequent DDL and HA operations when archiving cold data as an IBD format file.
    

## 2023

### **8.0.1.1.39**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports accessing the INFORMATION\_SCHEMA view information of the column store from any node. By default, it aggregates and displays information from all column store nodes.
    
-   Simplified the usage of parameters for automatic request distribution among row store and column store nodes.
    
-   When a query statement does not support using the columnstore engine, you can set the `use_imci_engine` parameter to **FORCED** and then execute the query statement. The query result will then return the reason why the columnstore engine cannot be used.
    
-   Supports using correlated subqueries in the Grouping clause and eliminating complex correlated subqueries.
    
-   The global Binlog of a multi-master cluster supports GTID (global transaction identifier).
    
-   Optimized the Buffer Pool expansion feature, such as automatically canceling preceding scale-in operations and timely expansion.
    
-   Optimized the startup process of columnstore index (IMCI) to reduce the startup preparation time for column indexes.
    
-   Supports adaptive routing capability for hybrid row-column queries.
    
-   Improved the read performance of RO nodes in scenarios where a secondary index returns to the primary key.
    

2023-12-14

Bug fixes

-   Fixed a node crash issue caused by an incorrect user-defined CONNECTION format when creating an OSS foreign table.
    
-   Introduced a patch from official MySQL 8.0.17 to fix an autoinc rollback issue caused by modifying auto\_increment\_increment on the client.
    
-   Introduced a patch from official MySQL 8.0.16 to fix a deadlock issue caused by an oversized Blob.
    
-   Fixed an RO node crash issue caused by Runtime Apply.
    
-   Fixed an issue where the RW node's dirty page flushing was blocked because it did not break its replication relationship with an RO node when the RO node's physical machine failed.
    
-   Fixed an Autoinc rollback issue caused by table cache eviction due to an excessive number of tables after an HA.
    
-   Fixed an issue where a read/write node in a multi-master cluster could not start if the cache center was restarted.
    
-   Fixed an issue where a table could not be opened when switching the write point in a multi-master cluster.
    
-   Fixed an issue of excessive memory usage during physical replication on an RO node.
    
-   Fixed an issue where an outline on an AP node did not take effect if the length of the SQL token exceeded the value of the max\_digest\_length parameter.
    
-   Fixed an issue where adding or deleting an outline could not be synchronized to an RO node after the RO node was upgraded.
    
-   Fixed an issue of high response time for low-concurrency writes to tables in X-Engine.
    
-   Fixed an issue where Hybrid Plan, when applied to an SQL statement with Order By and the output rows contained NULL, would report an error `"table definition has changed"`.
    

### **8.0.1.1.38.1**

**Category**

**Description**

**Release date**

Bug fixes

For clusters where no Statement Outline has been added, after a version upgrade, if a Statement Outline is added, outline matching is no longer affected by the character set.

2023-11-07

### **8.0.1.1.38**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports using the built-in stored procedure `dbms_oss.delete_table_flie` to delete unused files on OSS.
    
-   Optimized the database and table restoration feature. For example, improved restoration speed and supported task failure rollback.
    

2023-10-31

Bug fixes

-   Fixed an issue where a table with an IMCI column index could not be restored to a point in time.
    
-   Fixed an issue where the GroupJoin operator consumed excessive memory in some scenarios, causing query failure.
    
-   Fixed a RowID rollback failure issue when loading a checkpoint.
    
-   Fixed an issue where a read-only (RO) node of the X-Engine could not report version reference information, causing space reclamation to fail.
    
-   Fixed an issue where the optimizer could not accurately estimate the Join selectivity when joining an unsigned column with a signed column.
    
-   Fixed an issue where some queries with OR predicates could not be executed because the query plan could not bind to the correct columns.
    
-   Fixed an issue where a query terminated by the scheduler could cause a database restart.
    
-   Fixed an IO performance degradation issue in columnstore index in late materialization scenarios.
    
-   Fixed a rare issue where a multi-master cluster would crash because it did not release the metadata lock of a scheduled task in time.
    
-   Fixed an issue where queries on tables in the X-Engine were slow because an index covering scan result could not be used after accessing the primary key index.
    
-   Fixed an issue where a PolarDB cluster restart would interrupt the migration link when upgrading RDS for MySQL to PolarDB for MySQL with one click.
    
-   Fixed an issue where deleting a table or index in X-Engine, due to a concurrency relationship with an occasional background SwitchMemtable operation, produced an extreme redo log sequence, causing the replica node to crash.
    

### **8.0.1.1.37**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Optimized the rate at which read-only (RO) nodes read Redo logs in large Blob scenarios.
    
-   When calling built-in stored procedures, supports using uppercase stored procedure names.
    

2023-09-21

Bug fixes

-   Fixed a node crash issue caused by adding backticks to the input parameters when calling some built-in stored procedures.
    
-   Fixed a node crash issue that could occur when deleting the last CCL rule of the same SQL statement type, where only the keyword was filled in without a schema and table.
    
-   Fixed a rare crash issue that could occur during the upgrade of a read-only node to a read/write node if there were file extension logs after the checkpoint on the read/write node when the new read-only node connected to it.
    

### **8.0.1.1.36**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Improved the speed of archiving cold data to OSS in CSV format.
    
-   Optimized the cost model for equivalent non-covering index access.
    
-   Added the parameter `opt_non_covering_key_cost`, to control whether to consider the initial positioning cost of a secondary index.
    
-   Added the parameter `worst_seek_records_threshold`, to control whether to limit the maximum IO cost of equivalent non-covering index access during cost estimation.
    
-   Added a timeout degradation mechanism to the Redo semi-sync feature.
    

2023-08-22

Bug fixes

-   Fixed a crash issue with the JPPD optimization feature when a CTE contained a nested CTE and had multiple references.
    
-   Fixed an issue where the Slave node did not trigger a reconnection mechanism when the primary node was shut down and restarted.
    
-   Fixed a potential issue when using the JSON\_REMOVE function in the syntax for updating BLOB type data.
    
-   Fixed an issue where a node could restart abnormally due to accessing illegal memory during a transaction deadlock check.
    

### **8.0.1.1.35.1**

**Category**

**Description**

**Release date**

Bug fixes

Fixed an issue of high CPU usage on low-specification clusters.

2023-07-13

### **8.0.1.1.35**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added the `SELECT INTO DEFAULT OSSOUTFILE` statement.
    
-   Added the parameter `innodb_polar_import_tablespace_strict_mode` with a default value of **ON**. This means that if the table schema contains a full-text index during a database and table restoration operation, an error will be reported.
    
-   Supports querying data from a specified partition in a partitioned table using a columnstore index.
    
-   SQL Trace supports sampling specific SQL statements.
    

2023-07-05

Bug fixes

-   Fixed an issue where a regular user could delete `sys`.
    
-   Fixed an abnormal node restart issue when performing database and table restoration on a partitioned table after an HA.
    
-   Fixed an issue where the Standby node failed to switch to the master node during a point-in-time restore of a multi-master cluster.
    
-   Fixed an issue where stored procedures, user-defined functions, scheduled tasks, views, and triggers were not isolated between different nodes in a multi-master cluster.
    
-   Fixed an issue where stored procedures, user-defined functions, scheduled tasks, views, and triggers could not be switched between different nodes in a multi-master cluster.
    
-   Fixed an issue where data in the `Information_schema` database could not be synchronized and updated if data was updated after the query cache feature was enabled for a multi-master cluster.
    
-   Fixed a slow cleanup issue in a multi-master cluster with a very large number of data tables.
    

### **8.0.1.1.34**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports creating a columnstore index on a virtual column.
    
-   Supports using the recycle bin feature for tables with a columnstore index.
    
-   Supports [creating a hybrid partition](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#concept-2234558) table.
    
-   The federated query engine supports pushing down the Limit Offset syntax to the remote database for execution.
    
-   The federated query engine supports pushing down all compatible conditions to the remote server for execution and returns only the columns required by the query.
    
-   Added the primary key data slicing function `call dbms_dts.show_parallel_ranges (<schema_name>, <table_name>, [<suggestion_ranges>])`.
    
-   Supports using the cold data archiving feature for tables with an auto-increment primary key.
    
-   Optimized OSS query capability. After the elastic parallel query feature is enabled, if the system's `loose_csv_max_oss_threads` parameter value is greater than 1, a parallel query is performed directly.
    
-   Optimized the error message content for incorrect OSS foreign table file formats.
    
-   Supports adding the `without validation` option to the `ALTER TABLE PARTITION BY RANGE` syntax to quickly convert a standard table to a RANGE partitioned table.
    
-   Supports converting a partitioned table with the `'UNIQUE CHECK IGNORE=1'` attribute to a standard table using the `ALTER TABLE REMOVE PARTITIONING` syntax.
    
-   Optimized an issue where the digest hash calculation was skipped for an executed statement when there was no Outline during the use of Statement Outline.
    
-   Added the InnoDB on OSS feature.
    
-   After updating Statement Outline and Concurrency Control on a multi-master cluster, other master nodes are automatically synchronized.
    
-   Optimized the error message content for spelling errors.
    
-   Optimized the write performance of the RW node after enabling StandBy semi-sync.
    
-   Added the [list default hash partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/list-default-hash#concept-2183627) type.
    
-   Supports creating a LIST DEFAULT HASH type partitioned table using the `CREATE LIKE` syntax.
    
-   The `add partition` syntax for creating a LIST DEFAULT HASH partitioned table supports using the `without validation` option to add a LIST partition .
    
-   SQL Trace supports tracking the execution information of slow queries.
    
-   Optimized the internal lock granularity of PolarFS, significantly improving performance in some high-load scenarios.
    

2023-06-12

Bug fixes

-   Fixed an issue where OSS could not read JSON files.
    
-   Fixed a Hint Plan generation failure issue in ps mode.
    
-   Fixed an issue where the checkpoint LSN advancement did not meet expectations.
    
-   Fixed an issue where view\_definition was empty in the system view.
    
-   Fixed a potential error when executing a query on an RO node while an `ALTER TABLE ... IMPORT TABLESPACE` operation was being performed on the RW node.
    
-   Fixed an issue where data with `\n` could not be read after being archived by DLM.
    
-   Fixed an issue where temporary files could remain on OSS after cold data archiving.
    
-   Fixed an issue where only the first file might be read when reading CSV-formatted OSS cold data.
    
-   Fixed an issue where an abnormal internal counter in the thread pool could cause SQL request stacking during concurrent recording of slow query logs.
    
-   Fixed a potential auto-increment column conflict issue during concurrent `INSERT` command execution in a multi-master cluster.
    
-   Fixed a replication delay issue when replaying Redo logs of a wide table on an RO node.
    
-   Fixed an incorrect query result issue when using the Limit Offset pushdown optimization feature with a query statement containing a window function.
    
-   Fixed an issue where a lock needed to be held for the entire duration when executing a `CHECK TABLE` statement in a multi-master cluster.
    
-   Fixed an issue where the source file on OSS could not be deleted when executing the `ALTER TABLE engine = csv storage oss, force;` command.
    
-   Fixed a cluster crash issue when dynamically adjusting the cache of a multi-master cluster.
    
-   Fixed an issue where a multi-master cluster could not export a tablespace.
    
-   Fixed an incorrect pushdown issue for tables with NULL fields when the engine\_condition\_pushdown parameter was set to **true**.
    
-   Fixed a potential incorrect result set issue when using the Fast Query Cache feature with Time and timestamp comparisons.
    
-   Fixed a potential performance regression issue in high-concurrency update scenarios after dynamically enabling PolarTrans.
    

### 8.0.1.1.33

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Columnstore index supports instant column addition by rebuilding columnstore index data.
    
-   Columnstore index supports the REGEXPR function.
    
-   Columnstore index supports pruning optimization based on IS NULL and IS NOT NULL conditions.
    
-   Multi-master Cluster (Database/Table) supports using the cold data archiving feature.
    
-   When performing a minor engine version update on a Multi-master Cluster (Database/Table) edition cluster, supports parallel upgrade of each node in the cluster.
    
-   Multi-master Cluster (Database/Table) supports persisting statistics.
    
-   Optimized the Optimizer trace when OSS condition pushdown is enabled for an OSS foreign table.
    
-   Binary logs are not recorded during manual and automatic archiving of cold data.
    
-   Global consistency (high-performance mode) adds the `Innodb_scc_timeout_count` parameter to record the number of timeouts during a query.
    
-   Global consistency (high-performance mode) adds the `Innodb_scc_timeout_degrade_count` parameter to record the number of times a query times out and switches to an asynchronous query.
    
-   Supports querying gtid information on a read-only node.
    
-   Hint Plan adds the hint types BNL, BKA, and MRR.
    
-   Fast Query Cache adds the variable `qc_weak_read_time` to read non-real-time cache.
    
-   The Statement Outline feature adds the interface `dbms_outln.add_optimizer_outline('schema', 'hints', 'query')` to add Optimizer Hints.
    
-   Added the Auto Plan Cache feature.
    
-   SQL Sharing now displays plan\_extra, ref\_by, and extra in JSON format.
    
-   Displays the execution plan in the extended data of the slow log.
    
-   When using Statement Outline, if the specified Index Hints do not exist, it reports a warning instead of an error.
    
-   SQL Sharing adds the variable `by_expr_ignore_charset`. After setting `by_expr_ignore_charset` to **ON**, it eliminates digest differences generated by statements with Order By or Group By under different character sets. However, after setting it to **ON**, all digest values generated in this mode will be different from the digest values generated before it was set to **ON**.
    
-   Optimized memory consumption when scanning tables in the recycle bin.
    
-   Provides multi-version engine capability.
    

2023-04-14

Bug fixes

-   Fixed an issue where the database node would crash when performing a check operation on an empty OSS foreign table.
    
-   Fixed an occasional error when executing a query on a global read-only node of a Multi-master Cluster (Database/Table).
    
-   Fixed an issue where the metadata tablespace size was not synchronized in a Multi-master Cluster (Database/Table).
    
-   Fixed an issue where custom table data in the system tablespace would be rolled back in a Multi-master Cluster (Database/Table).
    
-   Fixed an issue where undo logs could not be recycled after enabling the undo log recycling feature.
    
-   Fixed a database connection failure issue due to a read timeout when establishing physical replication on a read-only node.
    
-   Fixed a node crash issue when executing an `ADD INDEX` or `DROP INDEX` statement after executing `ALTER TABLE DISCARD tablespace` in a Multi-master Cluster (Database/Table).
    

### 8.0.1.1.32

**Category**

**Description**

**Release date**

New features and performance optimizations

-   The columnstore index feature supports the MySQL DECIMAL data type.
    
-   When creating a columnstore index, supports sorting data by a specified column to improve pruning efficiency.
    
-   The columnstore index feature supports data scanning based on files in `ORC` or `PARQUET` format stored in OSS.
    
-   Cost-based computation supports pushing down the outer join conditions of a materialized `derived table` into the `derived table`.
    
-   Optimized the optimizer's ability to estimate the number of scanned rows for join columns in an equivalence derivation scenario.
    
-   The optimizer's join elimination feature supports eliminating the inner table of a left join (including inner tables with multi-level nested joins and Semi-Joins).
    
-   Supports the `CAST(... AS INT)` syntax, with behavior identical to `CAST(... AS SIGNED INT)` .
    
-   Multi-master clusters support multi-master backup.
    

2023-02-21

Bug fixes

-   Fixed an issue where the database performance slowed down in long-running transaction scenarios.
    
-   Fixed a compatibility issue between global consistency (high-performance mode) and PQ.
    
-   Fixed an issue where using the transparent tablespace transport feature in a multi-master cluster would block other nodes from executing DDL.
    
-   Fixed an issue where the free size of a table would, with a certain probability, be displayed as 4 PB.
    
-   Fixed an issue where some nodes could not start when multiple primary nodes of a multi-master cluster were restarted in parallel.
    
-   Fixed a cluster crash issue when switching the write point for full-text indexes and columnstore indexes in a multi-master cluster.
    
-   Fixed a database cache access anomaly when performing a copy DDL on a table with a Foreign Key.
    
-   Adjusted physical replication connection-related timeout parameters to avoid stuttering issues during physical machine failures.
    
-   Fixed an issue where table locks could not be recovered during a multi-master cluster crash recovery.
    
-   Fixed a potential node crash issue when accessing the `information_schema.tables` table when adding a new node.
    
-   Fixed a dirty page loss issue during the multi-master cluster crash recovery phase.
    
-   Fixed a cluster crash issue when switching the write point after deleting a database in a multi-master cluster.
    
-   Fixed an issue where using the TempTable engine could lead to illegal memory access when the thread pool was enabled.
    

## 2022

### **8.0.1.1.31**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   The Standard Edition of PolarDB for MySQL now includes the PolarDB high availability automatic switchover feature, which is based on the Reservation feature of NVMe (Non-Volatile Memory Express) disks.
    
-   The concurrency control (CCL) feature adds the built-in stored procedure `dbms_ccl.add_ccl_digest_rule`, which matches CCL rules by digest value.
    
-   Built-in stored procedures now support using variables starting with @ as input values.
    
-   Ignores the semicolon at the end of the SQL statement in the query parameter of the `dbms_ccl.add_ccl_digest_rule`, `dbms_outln.add_index_outline`, and `dbms_outln.add_optimizer_outline` built-in stored procedures.
    
-   Statement Outline supports all UNION clauses.
    
-   The username and password in the `mysql.servers` table are no longer stored and displayed in plaintext format.
    
    **Note**
    
    The username and password of an existing Server will not be encrypted after an upgrade. You need to manually delete and recreate it.
    
-   Supports using the LIMIT OFFSET pushdown feature when accessing a specific partition in a partitioned table.
    
-   Clusters of the X-Engine series support using the parallel DDL feature.
    
-   The thread pool feature now includes kernel autonomous capabilities.
    
-   The thread pool feature is compatible with CCL. After the Thread Pool feature is enabled, if a user's connection is blocked by CCL, the connection will be marked within the Thread Pool, and the Thread Pool will create additional threads to execute SQL statements on other connections.
    
-   Added the **hint** syntax `OSS_REPLACE_EXISTED_FILE()`. When executing a `SELECT INTO OSSOUTFILE` statement, if the current file already exists, it will be directly overwritten.
    
-   Supports single-machine parallel query on the OSS engine.
    
-   Added the table `INNODB_GLOBAL_DDL_LOCK_INFO` to the `information_schema` database to view global locks in a multi-master cluster.
    
-   Added the AWR SQL Detail feature to audit and manage statements such as DDL, LOCK DB, and LOCK TABLE.
    
-   Supports generating columnstore index statistics using the ANALYZE TABLE command to assist in query decisions.
    
-   Tables with a columnstore index now support the database (table) restoration feature.
    
-   The columnstore index feature supports using the cast\_as\_real function.
    
-   You can view the build status and progress of a columnstore index in the `INFORMATION_SCHEMA.IMCI_ASYNC_DDL_STATS` table.
    
-   Optimized join queries where the join field is a string type in a columnstore index.
    

2022-12-07

Bug fixes

-   Fixed an issue where IF NOT EXISTS could not be used in the syntax for creating a Server.
    
-   Fixed a potential anomaly when executing a DDL statement on a master node of a multi-master cluster.
    
-   Fixed a potential deadlock issue when querying tables in the `information_schema` database in a multi-master cluster.
    
-   Fixed a replace performance degradation issue in a multi-master cluster.
    
-   Fixed an issue where creating an implicit temporary table in a multi-master cluster required acquiring a global lock.
    
-   Fixed a potential hang issue during crash recovery of a multi-master cluster.
    
-   Fixed an issue where the number of logical reads counted by the SQL Trace feature was inaccurate.
    
-   Fixed an incorrect output result issue when a columnstore index contained ENUM and SET type data.
    
-   Fixed an issue where SQL statements with ROLL UP and GROUP BY could not be routed to columnstore for execution.
    

### **8.0.1.1.30**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Optimized the UNION ALL operation for the columnstore index feature.
    
-   The columnstore index feature adds a [built-in stored procedure](/help/en/polardb/polardb-for-mysql/user-guide/overview-87#main-2260632) to assist in creating columnstore indexes.
    
-   The columnstore index feature adds the global parameter `imci_default_pack_shift` to control the default pack size for creating a columnstore index.
    
-   The columnstore index feature supports using partition pruning technology to optimize the query performance of partitioned tables.
    
-   The columnstore index feature supports using BIT, JSON, and GEOMETRY data types.
    
-   The columnstore index feature supports the EXCHANGE PARTITION operation.
    
-   Optimized the performance of global consistency (high-performance mode) using MTT technology.
    
-   The Multi-master Cluster Edition supports adaptive eviction of data pages from the cache center.
    
-   The recursive depth of a JSON document now supports 150.
    
-   The Multi-master Cluster Edition adds the `mm_flush_autoinc_when_unlock` parameter to control whether to flush autoinc information in system tables when releasing a global database/table lock. The default value is false.
    
-   Supports Statement Outline matching for all SQL statements with the same Digest value when Schema\_name is empty.
    
-   Fast Query Cache supports accessing the cache of metadata tables (`information_schema.tables/columns`) in the database.
    
-   Added the [SQL Trace](/help/en/polardb/polardb-for-mysql/user-guide/usage-2#main-2270206) feature to trace the execution process of SQL statements.
    
-   Added the `SELECT INTO OSSOUTFILE` statement to export a local table (a table on PolarFS) to OSS.
    

2022-10-29

Bug fixes

-   Fixed an issue of incomplete data reading when remotely reading data via RDMA.
    
-   Fixed an abnormal state issue with the table clean thread when the master node was shut down.
    
-   Fixed a deadlock issue between Offline Master and WAR.
    
-   Fixed an issue where the master node could not be shut down normally when it lost connection with the cache center.
    
-   Fixed a node crash issue that could be caused by writing an implicit primary key through a scheduled task.
    
-   Fixed an issue where an SQL statement would record a Binlog during a hot upgrade.
    

### **8.0.1.1.29.1**

**Category**

**Description**

**Release date**

Bug fixes

Fixed a crash issue on the RO node caused by a filename hash collision.

2022-09-17

### **8.0.1.1.29**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Read-only nodes now support the failover with hot replica feature.
    
-   Concurrency Control (CCL) adds the `ccl_mode` parameter. When database access traffic reaches the concurrency control limit, other requests to access the current cluster are rejected.
    
-   The syntax for creating an OSS server adds the `oss_sts_token` parameter to configure a temporary access credential for OSS.
    
-   Supports adaptive digest length, meaning the memory space for statement digest calculation can be adaptively adjusted with the length of the query statement.
    
-   Supports querying tables related to columnstore index in INFORMATION\_SCHAME through the cluster endpoint.
    
-   The columnstore index feature adds an ETL mode, which supports creating a table from the query results of a read-only columnstore node and writing the query results of a read-only columnstore node to a table.
    
-   Optimized the performance of TopK queries (paging queries in the form of order by a limit n,m) for the columnstore index feature.
    
-   The columnstore index feature adds the status `Last_stmt_use_imci` to confirm whether a columnstore index is used in a query statement.
    
-   The columnstore index feature adds the global variable `polar_enable_implicit_imci_with_create_table`, which supports automatically creating a columnstore index when executing a CREATE TABLE statement.
    
-   The columnstore index feature supports using Cursor.
    
-   Supports using a columnstore index during an explicit transaction query.
    
-   Supports creating a columnstore index on a partitioned table.
    

2022-09-08

Bug fixes

-   Fixed an inconsistency issue between the cache and file caused by a transaction rollback when using the copy algorithm in a DDL statement.
    
-   Fixed an issue where deleting a database was not recorded in the slow log.
    
-   Fixed an incorrect result issue when Limit offset pushdown and MRR optimization were present in a query at the same time.
    

### **8.0.1.1.28.1**

**Category**

**Description**

**Release date**

New features and performance optimizations

Thread pool optimization: When a database transaction is waiting for a metadata lock or row lock, the thread pool can generate additional threads to process new requests.

2022-08-12

### **8.0.1.1.28**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports the columnstore index feature. With the columnstore index feature and a parallel vectorized execution engine for columnar data, the execution efficiency of complex queries can be significantly improved. For more information, see [Columnstore index](/help/en/polardb/polardb-for-mysql/user-guide/overview-29#topic-2175614).
    
-   Supports user creation and use of Federated engine tables.
    
-   Read-only nodes support custom memory temporary tables (currently only supports MEMORY engine and MyISAM engine).
    
-   Optimized DDL sorting: Changed two-way merge to multi-way merge to reduce IO times and improve DDL index creation performance.
    
-   Supports the DDL read-ahead feature to improve the efficiency of index creation.
    
-   The syntax for creating an OSS server adds the `oss_prefix` parameter to configure the OSS file path.
    

2022-07-20

### **8.0.1.1.27**

**Category**

**Description**

**Release date**

Bug fixes

Fixed an issue of excessive physical replication delay under low cluster load.

2022-05-25

Fixed an issue where the LRU List cleanup was blocked, preventing Page release, in scenarios with too many dirty pages in the Buffer Pool and slow flushing.

Optimized a memory allocation issue during data insertion.

Fixed an issue where the `show engine innodb status` command displayed full deadlock information when the value of `innodb_show_verbose_deadlock` was `ON` (the default value).

Fixed a crash issue on a new RO node registered to the cluster after the RW node completed an `undo truncate` operation.

Fixed an incorrect SKIP\_SCAN scan result set issue after a delete marker was set on data in the database.

### **8.0.1.1.26**

**Category**

**Description**

**Release date**

Bug fixes

Fixed an incorrect result issue with Using index for group by.

2022-05-05

Fixed an incorrect SKIP\_SCAN scan result set issue after a delete marker was set on data in the database.

Fixed a potential incorrect SKIP\_SCAN scan result set issue when multiple data groups existed in the index prefix.

### **8.0.1.1.25**

**Category**

**Description**

**Release date**

Bug fixes

Fixed an incorrect result issue with Using index for group by.

2022-04-12

### **8.0.1.1.24**

**Category**

**Description**

**Release date**

Bug fixes

-   Fixed an issue where threadpool\_high\_priority\_users was not correctly parsed at database startup.
    
-   Fixed an issue where dynamically modifying threadpool\_high\_priority\_users could affect other parameters.
    
-   Fixed an occasional Redo log replay crash issue on a read-only node of X-Engine.
    

2022-03-11

### **8.0.1.1.23**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports the Strict Consistency Cluster (strong consistency read on RO nodes) feature.
    
-   Statement Outline supports PrepareStatement.
    
-   Supports the hot replica feature to further optimize high availability efficiency.
    

2022-01-20

Bug fixes

-   Fixed an issue where Fast Query Cache acquiring an MDL lock on an RO node blocked Redo log synchronization.
    
-   Supports the SELECT FOR UPDATE/SHARE WAIT N syntax. Here, N represents the timeout in seconds for a single row lock. If a query needs to lock multiple rows, the time is not accumulated; timeout detection is performed only on a single row. If the wait time exceeds N seconds, a lock wait timeout error is returned: `Lock wait timeout exceeded; try restarting transaction`.
    

## **2021**

### **8.0.1.1.22**

**Category**

**Description**

**Release date**

Bug fixes

-   Optimized the degree of parallelism estimation accuracy for partitioned table index equivalent access in a parallel plan.
    
-   Fixed a long-running issue with the cost of statistics estimation by the optimizer in specific scenarios.
    
-   Fixed an issue where the optimizer did not choose a better index range path for some GROUP BY statements.
    
-   Fixed an issue where a new Redo log file failed to be created after a Standby node was switched to a primary node via HA.
    

2021-12-22

### **8.0.1.1.21**

**Category**

**Description**

**Release date**

Bug fixes

-   Fixed an incorrect GROUP\_CONCAT function result issue caused by an arithmetic overflow when the group\_concat\_max\_len parameter value was large.
    
-   Fixed a data error issue that occurred after a Standby node in a secondary zone recovered from a failure.
    
-   Fixed a data anomaly issue that occurred when a Standby node in a secondary zone was switched to a primary node (RW node).
    
-   Fixed an issue where the optimizer could only perform single-column index filtering instead of composite index filtering when a multi-column composite index filter condition was selected.
    

2021-11-26

### **8.0.1.1.19**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added a new concurrency control (CCL) rule for DDL operations.
    
-   Added the parameter restrict\_on\_limit\_without\_order to control whether to allow parallel query execution in a parallel query with a limit clause but no order by clause.
    

2021-09-18

Bug fixes

-   Fixed an unordered concurrent execution result issue when selecting the index of a group by column for implicit sorting of Group by in a parallel query.
    
-   Fixed an error where the transaction ID field was always 0 in the audit log when using the thread pool.
    

### **8.0.1.1.18**

**Category**

**Description**

**Release date**

New features and performance optimizations

The database kernel supports transaction resumable upload and reading uncommitted transactions on read-only nodes.

2021-08-14

Bug fixes

Optimized `master_key_id_mutex` to allow DDL operations to be executed in parallel.

### **8.0.1.1.17**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added the polar\_replica\_work\_on\_nonblock\_mdl\_mode parameter. When this parameter is enabled, uncommitted transactions at the RU/RC isolation level on a read-only node will no longer block DDL operations on the primary node. At the same time, the transactional properties of table definitions will no longer be guaranteed on the read-only node.
    
-   Optimized the maintenance mechanism for statistics in massive table scenarios (such as SaaS service scenarios) to significantly improve the performance of querying table structures (desc table) and read/write operations under high concurrency.
    

2021-07-23

Bug fixes

-   Fixed a crash issue at `m_recv_bits.is_set(fold)` during physical replication on a read-only node under high concurrency pressure.
    
-   Fixed a replay log crash issue on a read-only node under high concurrency pressure.
    

### **8.0.1.1.16**

**Category**

**Description**

**Release date**

Bug fixes

When an ACL Cache Lock request waits, prints the information of the requesting thread and the earliest lock-holding thread in the master error log to assist in diagnosing the problem.

2021-06-24

### **8.0.1.1.15**

**Category**

**Description**

**Release date**

New and optimized features

-   TDE supports automatic encryption for new MySQL tables in a cluster.
    
-   MySQL data tables support the utf8mb4\_0900\_bin character set.
    

2021-05-25

Bug fixes

-   Fixed a database crash issue caused by an excessively long record generated when rolling back an Update operation after an instant add column.
    
-   Fixed an issue to prevent mysql.slow\_log and mysql.general\_log from being forcibly used with the innodb engine by DDL statements, which caused confusion.
    
-   Fixed an incorrect result set issue caused by incorrect metadata information for the REGEXP function.
    
-   Fixed a database crash issue caused by rolling back an Update operation on a virtual column.
    
-   Adjusted the policy for whether to immediately trigger a checkpoint when an RO node first registers with the primary node. When the LSN difference is less than the specified threshold, a checkpoint may not be triggered.
    

### **8.0.1.1.14**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Optimized the maintenance of internal index information in massive table scenarios, such as Software as a Service (SaaS) scenarios, to improve the startup speed of read-only nodes.
    
-   The optimization of GDN synchronization connections reduces CPU resource consumption by synchronization threads and improves the Redo log synchronization speed from the secondary cluster for small-spec instances (instances with fewer than 8 cores).
    
-   Optimized the AutoDop strategy in the degree of parallelism control parameters to avoid affecting the use of PARALLEL HINT and `force_parallel_mode`.
    

2021-04-23

Bug fixes

-   Fixed an issue where an incorrect index was used for a wide-ranging RANGE query due to inaccurate `records_in_range` statistics.
    
-   Fixed an issue where a standby node crashed during a point-in-time restore of full data because the buffer pool was too small.
    
-   Fixed an issue where internal metadata in X-Engine used excessive memory.
    
-   Fixed two ACL DDL-related issues in official MySQL to prevent cluster unavailability caused by deadlocks from ACL DDL operations.
    
-   Fixed an issue where a parallel query returned an incorrect result set if it included the SQL\_BUFFER\_RESULT keyword and used an aggregate function without a GROUP BY clause.
    

### **8.0.1.1.13.2**

**Category**

**Description**

**Release date**

Bug fixes

Fixed a potential decryption failure caused by the loss of encryption information from a transparent data encryption (TDE)-encrypted table during a primary/secondary failover.

2021-04-19

### **8.0.1.1.13.1**

**Category**

**Description**

**Release date**

Bug fixes

Fixed a slow query issue in parallel queries. The issue occurred because constant filter conditions in the Block Nested-Loop Join (BNL) algorithm were not pushed down to a single table.

2021-04-08

### **8.0.1.1.13**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Read-only nodes now support the polar\_use\_statement\_mdl\_on\_replica parameter. This parameter prevents transactions on a read-only node (RC isolation level) from blocking DDL operations on the primary node. When a read transaction on the read-only node is concurrent with a DDL operation on the primary node, the read transaction sees different table definitions. For example, if an ADD COLUMN operation exists on the primary node between two statements of a read transaction on the read-only node, the second statement on the read-only node reads more columns than the first.
    
-   Removes unnecessary equivalent conditions from the index equivalent lookup path. This helps push down the Limit offset for execution in ORDER BY LIMIT scenarios.
    
-   Adds the `dbms_stats.gather_stats(timeout, workers)` command. Use this command to update outdated histograms by scheduling an event or by running the command manually.
    
-   `mysql.slow_log` now supports viewing the `log_version`, `log_id`, `origin_start_time`, and `rds_ext` fields.
    

2021-03-30

Bug fixes

-   Fixed an issue where queries could not be stopped when running `CHECK TABLE`, `COUNT(*)`, or DDL commands on an X-Engine table.
    
-   KICKOUT is now a non-reserved keyword.
    
-   Fixed an issue where parallel query was not fully utilized in some scenarios. This issue occurred because the estimated number of scanned rows during query plan generation was less than the actual number of scanned rows.
    

### **8.0.1.1.12.2**

**Category**

**Description**

**Release date**

Bug fixes

-   Fixed a cluster unavailability issue caused by creating or deleting a temporary table in a stored procedure when the `session_track_temporary_tables` system variable was enabled.
    
-   Introduced a patch from official MySQL 8.0.14 to resolve an issue where a CREATE USER statement was blocked because it could not obtain a metadata lock (MDL) on the MySQL database system tables.
    

2021-03-12

### **8.0.1.1.12.1**

**Category**

**Description**

**Release date**

New features and performance optimizations

Optimized the write performance of PolarDB X-Engine when continuously importing data in a multi-table scenario.

2021-03-02

Bug fixes

Fixed an issue where the metadata lock (MDL) state on a worker thread could be inconsistent due to a missing mutex protection on the leader thread in a parallel query.

### **8.0.1.1.12**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   The degree of parallelism control policy includes a new parameter, auto\_dop\_low\_degree\_cost. This parameter sets the selection policy for the degree of parallelism in parallel queries. For more information, see [Parallel resource control policy configuration](/help/en/polardb/polardb-for-mysql/user-guide/dop-policies#concept-2041772).
    
-   The `restore_table` command is now available to quickly recover tables from the recycle bin. For more information, see [Table Recycle Bin](/help/en/polardb/polardb-for-mysql/user-guide/table-recycle-bin#concept-2567755).
    
-   You can now fetch binary logs from read-only nodes. For more information, see [Remotely fetch and parse PolarDB for MySQL binary logs](/help/en/polardb/polardb-for-mysql/remotely-obtain-and-parse-binary-log-records-from-a-cluster-of-the-polardb-for-mysql#concept-2009811).
    
-   You can now print key information, such as `in_memory`, in `opt trace` to help identify the cause of issues with an execution plan.
    

2021-02-20

Bug fixes

-   Introduced the [Port Percona](https://jira.percona.com/browse/PS-7143) patch to resolve slow ACL CACHE metadata lock conflict detection in high concurrency scenarios.
    
-   Added the `preferred_ordering_index` parameter to the `optimizer_switch` system variable. This parameter fixes an issue where the optimal plan was not selected for queries, such as ORDER BY or GROUP BY with a LIMIT clause, because an ordered index was used.
    
-   Fixed an issue where SHOW PROCESSLIST returned incorrect results in some scenarios.
    
-   Fixed an issue that caused slow access to system tables after a minor version upgrade from a version earlier than 8.0.1.1.10. This issue occurred because the definition of the `information_schema.KEY_COLUMN_USAGE` system table was not updated.
    

### **8.0.1.1.11**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added support for setting the configuration policy for the degree of parallelism in parallel queries using the parallel\_degree\_policy parameter. For more information, see [Configure parallel resource control policies](/help/en/polardb/polardb-for-mysql/user-guide/dop-policies#concept-2041772).
    
-   Added support for using the SET GLOBAL statement to set the max\_digest\_length parameter to limit the length of detectable statements.
    
    **Note**
    
    After you modify the max\_digest\_length parameter, clients must reconnect to the cluster for the new value to take effect.
    
-   The default value of the `innodb_adaptive_hash_index` parameter is changed from `ON` to `OFF`.
    

2021-01-29

Bug fixes

-   Fixed inconsistent permissions between the primary node and read-only nodes.
    
-   Fixed an issue where a read-only node could not connect to the primary node after a primary/secondary failover.
    
-   Fixed an issue where the SPM processing logic was incorrect when a specific execution plan became invalid.
    

### **8.0.1.1.10**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added support for implicit sorting for `Group By`. The usage is the same as in PolarDB for MySQL 5.7.
    
-   Added a feature that disables parallel queries when BLOB fields are present.
    
-   Added a feature that automatically updates statement concurrency control cache information on read-only nodes.
    
-   Added the hot row optimization feature. For more information, see [Hot row update optimization](/help/en/polardb/polardb-for-mysql/user-guide/hot-row-optimization#concept-2567754).
    
-   Added support for DDL physical replication optimization. For more information, see [DDL physical replication optimization](/help/en/polardb/polardb-for-mysql/user-guide/ddl-physical-replication-optimization#concept-2021978).
    
-   Added support for async metadata lock replication. For more information, see [Async metadata lock replication](/help/en/polardb/polardb-for-mysql/user-guide/async-metadata-lock-replication#concept-2021981).
    
-   Added a feature for fast reverse traversal during computation pushdown.
    
-   Optimized the file system to accelerate opening tables in multi-table scenarios.
    
-   Reduced the primary/secondary failover time in multi-table scenarios to accelerate the recovery of the new primary node.
    

2021-01-12

Bug fixes

-   Fixed an issue where system tables were lost when a read-only node was promoted to a primary node.
    
-   Fixed an issue where using a range query with parallel query enabled caused an overestimation of scanned rows.
    
-   Fixed an issue where an aggregate query returned an integer result for a field of the BIT type.
    
-   Fixed an issue where a SELECT DISTINCT query returned incorrect results when enumeration fields were used.
    
-   Fixed an issue where a parallel query with an EXISTS condition returned abnormal results.
    
-   Fixed an issue where read-only nodes failed to restart in some cases.
    
-   Fixed an issue of abnormal data dictionary information on a read-only node. The issue occurred when a DDL operation on a table caused a related table with a foreign key to reopen the first table.
    
-   Fixed an issue where full-text index queries failed because the node restart flag was not correctly set after a primary/secondary failover.
    
-   Fixed an issue where a metadata lock (MDL) blocked the log application thread on a read-only node.
    
-   Fixed an issue where the new primary node became unavailable after a primary/secondary failover because released memory was reused.
    
-   Fixed an issue where all nodes became unavailable due to a data issue in `polar.info`.
    
-   Fixed an issue with abnormal auto-increment columns in partitioned tables.
    
-   Fixed an issue where data errors occurred because redo logs were overwritten on the primary node.
    
-   Fixed an issue where the primary node became unavailable while waiting for an MDL.
    
-   Fixed issues related to transparent data encryption (TDE).
    
-   Fixed an issue where the cluster became unavailable when Lock Table was executed with the table recycle bin feature enabled.
    
-   Fixed a deadlock issue that occurred when the primary node executed a DDL statement.
    
-   Fixed an issue where the thread pool and connection control could not take effect at the same time.
    

## 2020

### **8.0.1.1.9**

**Category**

**Description**

**Release Date**

New features and performance optimizations

Removed `SPM` and `PLAN` as keywords. This change prevents operation failures when table names contain these words.

2020-12-18

### **8.0.1.1.8**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Added a multi-plan mode to the execution plan manager.
    
-   Added the rds\_ap\_threshold system variable to block requests that the optimizer estimates will scan too many records.
    
-   Improved the efficiency of dirty page flushing on the primary node.
    
-   Added a multi-shard write mechanism for redo logs.
    

2020-12-09

Bug fixes

-   Fixed an issue where a metadata lock (MDL) key null pointer occurred during parallel query execution.
    
-   Fixed an issue where queries failed when a parallel thread cache was created.
    
-   Fixed an issue where parallel query Multi-Range Read (MRR) returned abnormal results.
    

### **8.0.1.1.7**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Improved the efficiency of parallel scans on driven tables in scenarios such as JOIN queries.
    
-   Added support for purging residual binary logging files even when binary logging is disabled.
    
-   Added an automatic check and reconnection mechanism for physical replication on secondary nodes. This prevents extended disconnections.
    
-   Improved the switchover efficiency between primary nodes and read-only nodes.
    
-   Added support for Quick Launch for clusters that contain many tables. This allows for faster scanning of table data files.
    

2020-11-16

Bug fixes

-   Fixed a cluster crash that occurred when getting the type of `trx->wait_lock`.
    
-   Fixed an issue where the number of AIO threads was limited when multi-queue Simulated AIO was enabled.
    
-   Fixed an issue where a query could not be terminated immediately if an index query failed during initialization.
    
-   Fixed an issue on secondary nodes where the \`Next Page\` of the current cursor pointed to a non-existent page during a Split Merge Operation (SMO).
    
-   Fixed an issue where read-only nodes could read log information that was already overwritten by the primary node.
    
-   Fixed an issue where purging redo log files failed because the timestamp interval in the redo logs was too large.
    
-   Fixed an issue where table cache information was not cleared from the relevant cache when a metadata lock (MDL) was released.
    

### **8.0.1.1.6**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Improved the compatibility between SQL plan manager (SPM) and parallel query.
    
-   Improved the efficiency of merge sort for parallel queries.
    
-   Added support for computation pushdown for delete operations.
    
-   Added support for the PolarDB Commit Timestamp (CTS) feature.
    

2020-09-21

Bug fixes

-   Fixed an issue where the description of `pq_optimize_switch` was incorrect.
    
-   Fixed an issue where subqueries could not be executed stably.
    

### **8.0.1.1.5**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Added a feature to control whether the primary node immediately performs a checkpoint when a read-only node establishes a replication relationship.
    
-   Added support for simple range queries and computation pushdown.
    
-   Added the \`pfs\_remount\` feature to the Polar file system (PFS). This prevents PFS file mounting failures caused by unclosed files.
    
-   Resolved a performance bottleneck on read-only nodes caused by forced pauses of the parse thread. This improves the efficiency of data synchronization during physical replication.
    
-   Optimized Early Lock Release performance in multi-connection scenarios. This improves cluster performance by up to 10 times in these scenarios.
    

2020-08-19

Bug fixes

-   Fixed an issue where read-only nodes became unavailable after failing to connect to the primary node.
    
-   Fixed an issue where read-only nodes became unavailable after a primary/secondary failover if a full-text index was used and a DDL query statement was executed.
    
-   Fixed an issue where \`purge binlog\` could not be performed after the \`UNDO TRUNCATE\` command was executed.
    
-   Fixed an issue where statistics information was inconsistent between read-only nodes and the primary node.
    

### **8.0.1.1.4**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Added support for parallel DDL to improve DDL execution efficiency.
    
-   Added support for dynamically adjusting the length of multiple queues for Simulated AIO.
    
-   Added support for full text search (FTS) cache consistency.
    
-   Added support for subqueries that contain aggregate functions in the \`WHERE\` clause. If the subquery supports index-based scans, it can also be executed in parallel.
    
-   Added support for lock mode checks for temporary tables, similar to standard tables.
    

2020-07-04

Bug fixes

-   Fixed a cluster unavailability issue that occurred when a primary node was demoted to a secondary node while some DDL operations were still being replicated.
    
-   Fixed a performance degradation issue caused by enabling the thread pool.
    
-   Fixed a deadlock issue caused by \`purge binlog\`.
    
-   Fixed several memory leak issues.
    
-   Fixed several issues in high availability (HA) scenarios.
    

### **8.0.1.1.3**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Enhanced security, such as password management.
    
-   Improved the performance of parallel query in the following scenarios:
    
    -   Enhanced parallel query performance for \`GROUP BY\`, \`UNION\`, and \`SELECT COUNT(\*) FROM <table>\` scenarios.
        
    -   Scenarios where the execution plan uses a shared InnoDB temporary table in a parallel subquery.
        
    -   Scenarios where the execution plan uses a \`VIEW\` or \`DERIVED TEMP TABLE\`.
        
    -   Scenarios where parallel query supports the definition of temporary tables, with the following limitations:
        
        -   \`SELECT COUNT(\*)\` without a conditional clause on a temporary table is not supported.
            
        -   Parallel execution on Memory Engine temporary tables is not supported.
            
-   Added support for a new audit log format that includes virtual IP address (VIP) information.
    
-   Added support for controlling the free space ratio of index pages. This reduces the probability of SMO and latch contention, improving write performance.
    
-   Added support for multi-queue simulated AIO to enhance dirty page flushing and write performance.
    
-   Added support for excluding buffer pool content from core files. This reduces the size of core files and prevents impact on online services.
    

2020-05-29

Bug fixes

-   Fixed an issue where the TempTable storage engine incorrectly reported an out-of-memory error instead of falling back to disk-based storage when the maximum memory limit for TempTable was reached.
    
-   Fixed a cluster unavailability issue that occurred when \`ORDER BY\` was used in an InnoDB full text search if the \`sort buffer size\` parameter was set to a small value.
    
-   Fixed an issue where the correct field could not be found when a temporary table had columns with the same name.
    
-   Fixed an issue in parallel query where a query could not be killed when it used \`MAX\`/\`MIN\` functions with \`GROUP BY\` and a loose scan.
    
-   Fixed several failover issues.
    
-   Fixed several parallel query issues.
    
-   Fixed an issue where the \`SHOW BINARY LOGS\` command could block transaction commits.
    

### **8.0.1.1.2**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Added a sorting optimization based on string prefixes. This optimization accelerates sorting for long character columns by first comparing prefixes. If the prefixes are identical, the full strings are then compared.
    
-   Added support for parallel query in the following scenarios:
    
    -   Parallel execution for the range cost estimation model.
        
    -   Parallel execution for temporary tables.
        
    -   Parallel execution for Semijoin materialization lookup and scan strategies.
        
-   Added three types of session state trackers that PolarDB smart routing can use to support persistent connections. When enabled, these trackers can trace changes to user variables, the creation and deletion of temporary tables, and \`prepare\` and \`dealloction\` operations in SQL statements.
    
-   Optimized the performance of \`Drop AHI\` during DDL operations to reduce the impact of DDL on cluster performance.
    
-   Added a recycle bin for tables to prevent data loss from accidental deletion.
    
-   Optimized the performance of truncating temporary tablespaces in large buffer pools. This reduces the impact of temporary table operations on cluster performance.
    

2020-04-09

Bug fixes

-   Fixed an issue with \`ROLLUP\` execution when an aggregate function was present in an \`IF\` function.
    
-   Fixed an issue with sorting BLOB types.
    
-   Fixed a specific issue with parallel execution of \`PREPARE\` statements that contain SQL with aggregate functions.
    
-   Fixed several parallel query issues.
    
-   Fixed an issue that could cause excessive purging of redo logs.
    
-   Fixed redo log-related issues on read-only nodes.
    

### **8.0.1.1.1**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Added support for parallel execution in scenarios where a subquery contains \`ROLLUP\`.
    
-   Added support for statement concurrency control.
    
-   Added the `POLARDB_INDEX` hint.
    
-   Optimized the synchronization latency between primary and read-only nodes.
    
-   Added support for [thread pool](/help/en/polardb/polardb-for-mysql/user-guide/thread-pool#concept-2473266).
    
-   Added support for the TDE keyring\_rds plugin.
    
-   Added support for [Global Database Network (GDN)](/help/en/polardb/polardb-for-mysql/user-guide/create-and-release-a-gdn#task-2449685).
    
-   Optimized the lock-free transaction system to improve read and write performance.
    

2020-03-28

Bug fixes

-   Fixed several parallel query issues.
    
-   Fixed an issue where statistics information could become zero during an online DDL process.
    
-   Optimized the user mode file system to accelerate cluster startup.
    
-   Fixed a cluster unavailability issue that could occur when innodb\_flush\_method was set to all\_o\_direct.
    
-   Fixed a cluster unavailability issue that could occur when locks were released during a transaction commit.
    
-   Fixed an issue where truncating the slow query log could block user requests.
    
-   Fixed a cluster unavailability issue that could be caused by compressed pages on a read-only node.
    
-   Fixed an issue where the thread pool could incorrectly terminate a replication connection.
    

### **8.0.1.1.0**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Enhanced parallel query capabilities. Added support for parallel computing of the \`ROLLUP\` function for enterprise-level analysis.
    
-   Enhanced the optimizer's estimation model capabilities, such as improving selectivity estimation for conditional filters and the cost estimation model for parallel queries. This allows SQL statements to more accurately choose between a parallel plan and a serial plan based on selectivity.
    
-   Added unified management for parallel worker threads that are allocated in FIFO mode. This prevents system resource exhaustion caused by many parallel queries.
    

2020-02-05

Bug fixes

-   Fixed a series of memory-related issues in parallel query.
    
-   Fixed several instability issues in parallel query.
    

### **8.0.1.0.6**

**Category**

**Description**

**Release Date**

Bug fixes

-   Fixed an issue where the binary logging index file was not closed when a primary node was demoted to a secondary node.
    
-   Fixed a cluster unavailability issue that occurred when a read-only node accessed a purged undo page.
    
-   Fixed an issue where a backend thread accessed a non-existent tablespace page during a primary/secondary failover on a read-only node.
    
-   Fixed a cluster unavailability issue caused by writing to the redo log after the log thread had already exited during cluster shutdown.
    

2020-01-01

## **2019**

### **8.0.1.0.5**

**Category**

**Description**

**Release Date**

New features and performance optimizations

-   Optimizer trace now includes information about parallel queries. For example, use the Optimizer trace tool to find out why a parallel query is or is not used.
    
-   Added hints for parallel queries. Use SQL hints to enable parallel queries and specify the degree of parallelism.
    
-   Enabled parallel scans for INSERT..SELECT statements under the READ COMMITTED isolation level. Use INSERT..SELECT statements to import data into another table.
    

2019-12-03

Bug fixes

-   Fixed several issues with parallel queries.
    
-   Fixed an issue where a secondary node became unavailable after being promoted to the primary node during a primary/secondary failover.
    
-   Fixed failures caused using certain DDL statements during a primary/secondary failover.
    
-   Fixed a "too many connection error" caused by lock limitations.
