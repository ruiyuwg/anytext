This topic provides the release notes for PolarDB for MySQL 8.0.2.

## **2025**

### **8.0.2.2.31.1 (October 15, 2025)**

#### **Bug fixes**

**Description**

Fixed an issue where queries using [In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) with [Hybrid Plan for accelerating wide table queries](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries) unexpectedly fell back to the row store. This was caused by a query optimization that converted the `AVG` function to `SUM/COUNT`.

### **8.0.2.2.31 (September 24, 2025)**

#### **New features**

**Description**

-   Added a feature that lets you configure whether to display the `display width` attribute for integer fields, such as `BIGINT`, `INT`, `MEDIUMINT`, `SMALLINT`, and `TINYINT`, when the `ZEROFILL` attribute is not defined.
    
-   Added concurrency management and status query features for the background creation of vector indexes in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). This allows for effective resource control and real-time progress tracking when you create large-scale vector indexes.
    
-   Added the CXL memory extension feature. This feature lets you dynamically increase the `buffer pool` capacity for a cluster through a Compute Express Link (CXL) memory pool to improve large-scale data processing performance and system throughput.
    
-   Added two new vector index types, `HNSW` and `HNSWPQ`, based on the `FAISS` library to [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). These index types support higher-performance, lower-memory approximate nearest neighbor (ANN) search for high-dimensional vectors.
    
-   Added an `inline filter` mode to vector retrieval in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). This mode combines scalar filtering and vector retrieval into a single operator for computation.
    
-   Added the SYNONYM feature, which is compatible with Oracle syntax. This feature lets you create synonyms for tables or views and then use the synonyms to operate on them directly.
    
-   Expanded the subpartitioning feature. It now supports `RANGE COLUMNS`, `LIST COLUMNS`, and `LIST COLUMNS+DEFAULT` partition types, along with various subpartition key fields such as `DATE`, `DATETIME`, and `CHAR`. As a result, [partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/partitioned-tables/) now support any combination of all primary and secondary partition types, with partition pruning optimization available for related queries.
    
-   Added support for full materialized views that are refreshed with acceleration from [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). This provides pre-computed result sets for complex queries, significantly improving the response speed of frequent aggregation or join queries.
    
-   Added the `embedding` expression, which converts input text into vectors in real time. Also supports automatically converting text content into vectors and storing them upon data write using materialized virtual columns.
    
-   Added alias support for the `INSERT ... VALUES/SET ... ON DUPLICATE KEY UPDATE` syntax. This lets you use an alias in the `UPDATE` clause to reference new data from the `INSERT` part, making the SQL logic clearer and more concise.
    
-   Expanded the [automatic cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/data-lifecycle-management/) feature. It now supports archiving cold data partitions from a partitioned table to the X-Engine storage engine. After archiving, the table becomes a hybrid partitioned table of `InnoDB` and `X-Engine`, supporting unified queries across partitions of different storage engines.
    
-   Added a forced forwarding feature for sessions with an isolation level other than `RU` (Read Uncommitted) on non-[In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) nodes. By enabling the `imci_ignore_unsupported_isolation_level` parameter, requests from these sessions can be forwarded to column store nodes for execution to leverage the column store acceleration capability.
    
-   Added the `json_arrayagg` expression. This expression aggregates multi-row results into a JSON array in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) queries, enhancing the ability to process data in JSON format.
    
-   Adapted Resource Control for the Orca feature (Redis-compatible). This lets you manage the overall CPU resource utilization of the Orca system through a parameter, which defaults to 100%.
    
-   Added support for `PUBSUB` commands to the Orca feature (Redis-compatible), including `PUBLISH`, `SUBSCRIBE`, `UNSUBSCRIBE`, `PSUBSCRIBE`, `PUNSUBSCRIBE`, `PUBSUB CHANNELS`, `PUBSUB NUMPAT`, and `PUBSUB NUMSUB`. This expands the message publishing and subscription capabilities.
    
-   The [SQL Trace](/help/en/polardb/polardb-for-mysql/user-guide/sql-trace/) feature now supports sampling and recording actual SQL statements into `shared SQL`. This helps database administrators to accurately troubleshoot and optimize ultra-long or high-frequency slow queries.
    
-   Added the `rds_max_tmp_disk_space` parameter to control the total local disk space usage of temporary tables generated by large queries, preventing the disk from being filled up.
    
-   Added support for `dbms_oss.delete_table_file` to clean up files corresponding to a partitioned table on OSS after the table schema is deleted.
    
-   The [Data Cleanup (TTL)](/help/en/polardb/polardb-for-mysql/user-guide/second-level-node-1/) feature does not support `COPY` DDL syntax. Currently, only `INPLACE` DDL is supported.
    

#### **Performance optimizations**

**Description**

-   Optimized the cost estimation model for the [HTAP automatic request distribution](/help/en/polardb/polardb-for-mysql/user-guide/request-distribution-among-row-store-and-column-store-nodes/) solution. It can now perform calculations based on sequential execution overhead instead of relying on the cost after parallel optimization. This allows for better execution plan choices in specific scenarios.
    
-   Added a feature to measure the time consumed by internal operations of row store and column store execution operators. This provides accurate data support for coefficient fitting and automatic optimization of the row-column cost model.
    
-   Added a feature to [Statement Outline](/help/en/polardb/polardb-for-mysql/user-guide/statement-outline) to record the original SQL statement. This supports regenerating an `Outline` based on the original SQL in the current environment, improving the flexibility of execution plan management and fixation.
    
-   Refactored the command processing structure and optimized the lock path of [Orca (Redis-compatible)](/help/en/polardb/polardb-for-mysql/user-guide/orca/), improving its overall read and write performance by about 10%.
    
-   Optimized the query performance of partitioned tables. Fixed an issue where new partition key constant conditions generated during the query optimization phase (such as MEP) could not trigger secondary partition pruning. Also enabled partition pruning for the inner tables of `nested outer join`.
    
-   Optimized the processing logic for `union` queries with many `query blocks`. This resolves the issue of the `find_cloned_select_lex` function consuming excessive time and causing a single-core CPU to be fully loaded.
    
-   Optimized the metadata loading process when a column store node restarts in a massive data scenario. This prevents out-of-memory (OOM) issues caused by an overly long metadata list.
    
-   Unified the naming convention for local files related to [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). The naming is no longer dependent on the node role, which simplifies file management during high-availability switchovers.
    
-   Optimized the logic for the background elastic thread pool of a read-only column store node when obtaining task status, reducing its CPU resource consumption.
    

#### **Bug fixes**

**Description**

-   Fixed a potential cluster crash in parallel queries under specific condition pushdown scenarios.
    
-   Fixed a potential data inconsistency issue on read-only nodes when reading large JSON fields or frequently partially updated JSON fields in some scenarios.
    
-   Fixed an issue where the Native Columnar Index (NCI) of [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) failed to automatically trigger expansion when an insertion into the `lru cache` failed.
    
-   Fixed an issue of abnormal storage space growth caused by the failure to promptly clean up vector index data files.
    
-   Fixed a memory error during the row store execution phase of aggregate function queries. This was caused by an abnormal initialization of the `dec_buffs` member in the `Item_sum_sum::resolve_type` function.
    
-   Fixed issues in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) where vector retrieval queries could incorrectly fall back to row store execution, and where the query optimizer made poor cost-based choices for scalar filter queries.
    
-   Fixed a potential issue with the `dbms_oss.list_table_file` command when displaying the OSS file list.
    
-   Fixed an out-of-memory (OOM) issue on read/write (RW) nodes when performing an `ONLINE DDL` on a table with an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). This was caused by the default batch writing.
    
-   Fixed a potential cluster crash when performing a DDL operation on an ORC hybrid partitioned table with an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) if the table name contained special characters.
    
-   Fixed an issue where a read-only node might fail to query some records during B-tree index structure adjustments under high write pressure.
    
-   Fixed a potential cluster anomaly when adding an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) to a table that has no primary key but has a `UNIQUE KEY`.
    
-   Fixed a permission verification issue when archiving partitioned table data to an OSS external table using `dbms_dlm.archive_partition2table`. The permission requirements have been lowered, and now only `INSERT`, `CREATE`, `DROP`, and `ALTER` permissions are needed.
    
-   Fixed a cluster crash in [Orca (Redis-compatible)](/help/en/polardb/polardb-for-mysql/user-guide/orca/) caused by the `LPOS` command when the `MAXLEN` option value exceeded the list's own length.
    
-   Fixed a potential memory leak when reading data from a cold-archived table in ORC format.
    
-   Fixed an issue where some queries failed with an `OOM Error` due to inaccurate memory usage calculation.
    
-   Fixed a potential query performance degradation issue in [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) under high pressure.
    
-   Fixed an issue where constant condition propagation in query optimization failed due to inconsistent character set lengths.
    
-   Fixed an issue where a gap appeared in `gtid_executed` after executing a `CREATE ... IF NOT EXISTS` statement on an aggregation node in a [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/).
    
-   Fixed a potential cluster crash during a high-availability switchover between primary and secondary nodes in a [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/).
    
-   Fixed an issue where an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) query could return incorrect results if it contained both `DISTINCT` and `AVG` aggregate functions.
    
-   Fixed a cluster crash on reuse caused by the `result_field` of `Item_func_conv_charset` not being cleared after the SQL statement ended.
    
-   Fixed a potential RW node crash in a [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) when performing a DML operation on an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) table after a local read-only (RO) node was hot-switched to a read/write (RW) node.
    
-   Fixed an issue caused by a dangling pointer access when releasing an index during an `INSTANT DDL` execution on an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
    
-   Fixed a potential cluster crash in parallel queries with multi-level nested `derived tables`.
    
-   Fixed an issue where [Data Cleanup (TTL)](/help/en/polardb/polardb-for-mysql/user-guide/second-level-node-1/) information was lost during `CREATE PARTITION TABLE` because the main Data Dictionary (DD) information was not updated.
    
-   Fixed an issue where the [adaptive execution plan switching feature](/help/en/polardb/polardb-for-mysql/user-guide/adaptive-execution-capability) (`adaptive ordering`) optimization could not correctly adapt to `LIMIT OFFSET` statements.
    
-   Fixed a potential sorting error when using `ORDER BY DISTANCE` for vector similarity sorting with distance values close to 0.
    
-   Fixed an issue in [Elastic Parallel Query](/help/en/polardb/polardb-for-mysql/user-guide/elastic-parallel-query/) where multi-node MPP execution could cause incorrect results or a cluster crash when there were multi-level nested `shared` subqueries.
    
-   Fixed a potential cluster crash caused by column pruning optimization when a query contained a recursive Common Table Expression (CTE).
    
-   Fixed a potential illegal memory access issue in the Query Cache under multi-threaded concurrent access.
    
-   Fixed a potential cluster crash in [Orca (Redis-compatible)](/help/en/polardb/polardb-for-mysql/user-guide/orca/) when setting an expiration time for a hash (`Hash`) field that contained duplicate fields.
    
-   Fixed an issue in [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) where a cluster might fail to start or data could not be persisted after a high-availability switchover.
    
-   Fixed an issue where duplicate data could be retrieved when accessing a spatial index on a read-only node.
    
-   Fixed a potential inconsistency between row store and column store execution results for the [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) `json_valid` function when the first parameter is of the `varchar` type.
    
-   Fixed an issue where duplicate data appeared in the result set after an `EXISTS` subquery was converted to a `SEMI JOIN` (with the `duplicate weedout` policy) when parallel query was enabled.
    
-   Fixed an issue where the column index of a cold-archived table on a read-only column store node could be missing in an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) shared storage architecture.
    
-   Fixed an occasional cluster crash that could occur after enabling adaptive aggregation in queries from older versions.
    
-   Removed unnecessary checks for compressed row status in the code to avoid triggering unexpected errors in special cases.
    

### **8.0.2.2.30.2 (August 20, 2025)**

#### **Bug fixes**

**Description**

-   Fixed an issue in the [In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) feature where, when `deltastore` was executing a `swap` task, a node could `crash` because the `pax` page length overflowed `uint32` or a null pointer was encountered.
    
-   Fixed an issue where one-write, multiple-read Follower file operations for [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) were unexpectedly disabled because of an improper initialization order of global variables.
    
-   Fixed a rare issue where the background purge process could corrupt a secondary index during a transaction rollback.
    

### **8.0.2.2.30.1 (July 3, 2025)**

#### **Performance optimizations**

**Description**

-   Optimized the memory and storage usage of [vector indexes](/help/en/polardb/polardb-for-mysql/user-guide/vector-index-usage) in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
    
-   Optimized the execution efficiency of [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) window functions by merging window functions that have the same PARTITION BY definition.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where a crash might occur during the cost-based query rewrite phase if an SQL statement contains both an `inline view` and a scalar subquery.
    
-   Fixed an issue where in [Hybrid Plan](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries) mode, when [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) executed queries on partitioned tables, an Index Join would occasionally trigger an error.
    
-   Fixed an issue where some statements could not be correctly routed to column store nodes in prepare statement mode.
    
-   Fixed an issue where a missed check for rolled-back rows during the serialization process of the [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) Delta module led to a null pointer access and caused a cluster crash.
    
-   Fixed an issue where some queries could not be pushed down to the IMCI for execution when the `imci_implicit_orderby_rollup` parameter is enabled.
    
-   Fixed an issue where an overly long IN-LIST prevented a query from hitting the columnstore index.
    

### **8.0.2.2.30 (July 1, 2025)**

#### **New features**

**Description**

-   Added the [column encryption](/help/en/polardb/polardb-for-mysql/user-guide/column-encryption) feature. This feature works with the [TDE feature](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster) to encrypt and store specified columns. When you access the data, you can use a decryption function to retrieve the raw data.
    
-   Added a feature that deconstructs query expressions with multi-value conditions (IN-LIST) or logical disjunctions (OR) into a UNION ALL operation of multiple independent subqueries. This allows for more efficient generation of index access plans.
    
-   The DELETE statement now supports Index Hints, which lets you use the USE INDEX and IGNORE INDEX syntax to specify a particular index. You can enable this feature using the `delete_enable_index_hint` parameter.
    
-   Added support for parallel execution for lateral derived tables. In [parallel query scenarios](/help/en/polardb/polardb-for-mysql/user-guide/elastic-parallel-query/), these tables can be pushed down to workers for execution.
    
-   [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) now supports subqueries that use Roll UP and include aggregate functions in the projection columns.
    
-   [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) now includes the [vector index](/help/en/polardb/polardb-for-mysql/user-guide/vector-index-usage) feature, which supports approximate nearest neighbor (ANN) search.
    

#### **Performance optimizations**

**Description**

-   Optimized the asynchronous operation and throttling for garbage file cleanup after a read-only column store node is deleted.
    
-   Removed the restriction that at least one InnoDB partition must be retained when you use ALTER TABLE for cold data archiving. This allows all partitions to be archived. You can now use [REORGANIZE PARTITION](/help/en/polardb/polardb-for-mysql/user-guide/reorganize-partition) to restore OSS partitions of a fully archived partitioned table back to InnoDB partitions.
    
-   Optimized the process of building hash tables for HASH JOINs in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) and the specific implementation of hash tables. This significantly improves the performance of HASH JOINs in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
    

#### **Bug fixes**

**Description**

-   Fixed an issue where parallelism could cause a crash if a constant table was an outer table in a LEFT JOIN with multiple inner tables.
    
-   Fixed an issue where the SCAN command of the [Orca feature](/help/en/polardb/polardb-for-mysql/user-guide/orca/) might not return a result and remain in a searching state.
    
-   Fixed an issue where Sharding Outline did not correctly support table aliases, ORDER BY, and LIMIT BY.
    
-   Fixed a crash issue caused by the base table and the dependent table not being pushed down to the same shard for execution when a default value references a table.
    
-   Fixed an issue where adding an index to a table with a SET type required a table lock.
    
-   Fixed a cluster crash that could be triggered when updating a NULL value to an empty string in a table that used the REDUNDANT row format and contained an instant add column.
    
-   Fixed an issue with the return value of the DISTANCE expression when calculating DOT similarity in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
    
-   Fixed an abnormal error that occurred when a cold-archived ORC format table contained BIT, ENUM, or SET types.
    
-   Fixed an issue where statistics for [adaptive execution](/help/en/polardb/polardb-for-mysql/user-guide/adaptive-execution-capability) were biased in plans with INDEX MERGE and Index Condition Pushdown (ICP).
    
-   Fixed an issue where reading JSON data on a read/write (RO) node could return an INVALID JSON error in some scenarios.
    
-   Fixed a potential crash caused by ORDER BY being merged into the outer layer in a materialized table.
    
-   Fixed an issue where disabling function pushdown caused incorrect results for [Elastic Parallel Query](/help/en/polardb/polardb-for-mysql/user-guide/elastic-parallel-query/).
    
-   Fixed an issue where an archiving exception in [Data Lifecycle Management (DLM)](/help/en/polardb/polardb-for-mysql/user-guide/usage-4#task-2283597) left residual temporary tables, and added error logs for this scenario. Also fixed an ASSERT crash caused by an X lock conflict during the second lock upgrade in the DLM partition metadata lock (MDL) archiving process.
    
-   Fixed an issue where after a [partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/partitioned-tables/) was renamed, the `table_name` cache in the INFORMATION\_SCHEMA table for the [In-Memory Column Index (IMCI)](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) was not updated.
    
-   Fixed an issue in the \`prepare execute\` implementation where the collation of string types was incorrectly affected by `character_set_client`.
    
-   Fixed an assertion issue triggered by an update task based on old columnstore index information after an INSTANT DDL was committed.
    
-   Fixed a potential cluster crash in high-concurrency scenarios when both ePQ and performance\_schema were enabled.
    
-   Fixed an issue where MySQL Community Edition did not include the LIMIT keyword in the query performance cost.
    
-   Fixed an occasional inaccurate timing issue when profiling [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) queries using `imci_analyze_query`.
    
-   Fixed an issue where unsupported user-defined functions were adaptively routed to the column store, causing query errors.
    
-   Fixed a crash in the background scraping thread for IMCI statistics in the hybrid optimizer. This bug had a certain probability of being triggered if a virtual column was included.
    
-   Fixed a potential issue that could occur after restoring a [partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/partitioned-tables/) with INSTANT ADD COLUMN and 10 or more partitions using the database and table restoration feature.
    
-   Fixed an out-of-memory error that could occur in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) when performing a GROUP BY operation on variable-length strings with a large amount of data.
    
-   Fixed an issue where the `show binlog events` command would fail on a read-only node with a "file does not exist" error.
    
-   Fixed an issue in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) where queries occasionally could not use a Hybrid Plan after [global consistency (high-performance mode)](/help/en/polardb/polardb-for-mysql/user-guide/global-consistency-high-performance-mode/) was enabled.
    
-   Fixed a memory leak caused by the elastic scale-in of the internal thread pool in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). This prevents memory leaks when the PolarDB Capacity Unit (PCU) of a [serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless/) cluster is adjusted.
    
-   Fixed an issue for [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) where executing a `DROP INDEX` operation during the loading of an NCI (Non-Clustered Index) could block the loading process.
    
-   Fixed an issue where a crash occurred before the DDL log for a partition swap was written. This caused the cluster crash recovery process to skip applying the DDL log, which resulted in a cluster abnormality.
    
-   Fixed an issue in parallel scenarios for [partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/partitioned-tables/) where the degree of parallelism for a parallel plan involving PartitionWise Repartition exceeded max\_parallel\_degree.
    

### **8.0.2.2.29.2 (June 6, 2025)**

#### **Bug fixes**

**Description**

-   Fixed an issue where the `Index Join` in an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) Hybrid Plan could cause a crash when executing an `Anti Semi Join` pattern with a `Post Filter`.
    
-   Fixed a potential risk of system crash during online DDL operations due to data inconsistency when updating or deleting data with a dynamic mask.
    
-   Fixed a potential crash in the [Data Cleanup (TTL)](/help/en/polardb/polardb-for-mysql/user-guide/ttl-overview) feature if a deadlock caused a transaction rollback during data cleanup.
    
-   Fixed a potential crash in the [TTL](/help/en/polardb/polardb-for-mysql/user-guide/ttl-overview) feature if a transaction (trx) object was not released during the shutdown process of a TTL thread.
    

### **8.0.2.2.29.1 (May 14, 2025)**

#### **Bug fixes**

**Description**

Fixed a memory leak caused by the elastic scale-in of the internal thread pool in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/). This prevents memory leaks when the PolarDB Capacity Unit (PCU) of a serverless cluster is dynamically adjusted.

### **8.0.2.2.29 (May 8, 2025)**

#### **New features**

**Description**

-   Added a feature for read-only (RO) nodes in [serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless/) clusters to reclaim unused memory in the parse buffer (parse buf). This can reduce memory usage in some cases.
    
-   Added support for the frame clause in window functions. Currently supports Rows frame and the default Range frame scenarios.
    
-   Added support for modifying auto-increment column values in the [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-1/) using online DDL.
    
-   Added IMCI pruner statistics. You can query the INFORMATION\_SCHEMA.IMCI\_SQL\_PROFILING view to obtain the data block pruning status of the TableScan operator.
    
-   Added support for using hints to intervene in the execution plan of statements within a view definition.
    
-   Added support for querying related system tables in the `INFORMATION_SCHEMA.POLAR_INDEX_STATISTICS` view to retrieve the index hit statistics for each table.
    
-   Added the `FORCE STORAGE OSS` option to synchronously delete data from OSS during the [delete cold data](/help/en/polardb/polardb-for-mysql/user-guide/cold-data-archiving-instructions-for-use) operation.
    
-   Added the Range-prefix Skip Scan mechanism to expand the applicability of Skip Scan and optimize the execution efficiency of complex queries.
    
-   Extended the Hybrid Plan feature in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) to support tables that do not have an explicitly defined primary key.
    
-   Added the `adaptive_digest_length_multiplier` parameter to dynamically adjust the pre-allocated memory size for the Digest based on the length of the SQL text.
    
-   Added the parameter `oss_orc_read_buffer_size`, which supports the dynamic configuration of the read buffer size of the ORCReader.
    
-   Added the [Innodb\_ttl\_finished\_job\_expired\_days](/help/en/polardb/polardb-for-mysql/user-guide/ttl-syntax-description) parameter to control the cleanup of expired data in the ttl\_job\_history table.
    
-   In [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29), the `Index Join` in a Hybrid Plan now supports `Semi Join` and `Anti Semi Join` modes.
    

#### **Performance optimizations**

**Description**

-   Improved the query performance of [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) when using IN-List.
    
-   Optimized database performance when using the `max_execution_time` feature under high concurrency.
    
-   Optimized [Orca (Redis-compatible)](/help/en/polardb/polardb-for-mysql/user-guide/orca/) to support setting TTL expiration times for HASH data types at the field level.
    
-   Adjusted the settings of high-performance global consistency-related variables from the system level to the connection level. You can now configure whether to enable this feature in the [database proxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy).
    
-   Optimized the Hash Groupby implementation mechanism in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29). The system can now adaptively select partitioning strategies and algorithms based on data distribution characteristics to improve query performance.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where the ALTER TABLE command could fail and cause a database restart.
    
-   Fixed the snapshot feature of column store nodes to avoid occasional monitoring stuttering caused by long lock waits.
    
-   Fixed a deadlock issue caused by concurrent threads when archiving partition data in a [partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/partitioned-tables/).
    
-   Fixed an issue where parallel queries might return incorrect results when a query includes an `IS NULL` condition.
    
-   Fixed a potential cluster crash in the [adaptive selection of ordered indexes](/help/en/polardb/polardb-for-mysql/user-guide/adaptive-execution-capability#024de4218fumd) feature for certain types of query scenarios.
    
-   Fixed an occasional issue of memory block stacking on ImciFollower in the multi-node shared architecture of [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29).
    
-   Fixed an issue where executing a `DROP PARTITION` statement could cause a SQL access to crash if a SQL statement held a table-level metadata lock (MDL) but not a partition-level MDL.
    
-   Fixed an issue in [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-1/) where the Index\_merge path failed to correctly retrieve `Instant_ddl` metadata, which caused data queries to fail.
    
-   Fixed an issue where the Mixoutput of the hybrid materialization in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) did not perform time zone conversion when reading timestamp data.
    
-   Fixed an issue where a column store node occasionally accessed cached data from before a DDL operation.
    
-   Fixed an out-of-bounds memory access issue when performing an [instant modify column](/help/en/polardb/polardb-for-mysql/user-guide/instant-modify-column) operation on a table with many fields.
    
-   Fixed an issue where dynamically modifying the `thread_pool_size` parameter could cause the database to crash when the asynchronous execution feature is enabled.
    
-   Fixed an occasional out-of-bounds read/write issue with ROW LOG when performing an ONLINE DDL on a table with a virtual column.
    
-   Fixed a conversion issue between string and vector types, allowing the use of various whitespace characters.
    
-   Fixed an issue where an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) serverless cluster could not be scaled in when the primary node had large specifications.
    
-   Fixed an issue where [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) could not control the sorting of query results with the `imci_implicit_orderby_rollup` switch when handling queries with ROLLUP.
    
-   Fixed an issue where the database process could crash if the optimizer flattens a derived table that is referenced by the `GROUP BY` column of a SQL query containing a `GROUP BY + WITH ROLLUP` clause.
    
-   Fixed an issue where adding a new read/write node to a multi-master cluster with a global read-only node would cause the new node to fail to start.
    
-   Fixed a potential crash on a secondary node of a multi-master cluster when switching databases or object endpoints before the node.
    
-   Fixed an issue where the `innodb_log_buffer_size` parameter could not be dynamically modified after the `innodb_polar_log_rdma_transfer` parameter was dynamically shut down.
    
-   Fixed an issue where a query could not be executed on [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) if a correlated subquery in the SQL contained LIMIT 1.
    
-   Fixed a potential index corruption issue for secondary indexes created on a virtual column.
    

### **8.0.2.2.28 (March 12, 2025)**

#### **New features**

**Description**

-   Added an automatic collection feature for column statistics to keep statistics information up to date.
    
-   Added a cost threshold parameter to dynamically control adaptive request distribution among row store and column store nodes, separate from the cost distribution threshold.
    
-   Added support for range expressions in RANGE[partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/partitioned-tables/). The new `cast_for_range()` function converts data of the `double` type to the `int` type, which enables support for partition key fields of the `double` type.
    
-   PolarDB for MySQL now has an asynchronous execution capability, supporting asynchronous processing of lock waits and asynchronous log flushing waits.
    
-   Orca now provides comprehensive connection monitoring metrics, including total connections, current active connections, and current requests.
    
-   Added support for the `explain analyze` statement to call Outline, which makes its functionality consistent with the `explain` statement and improves query optimization capabilities.
    
-   Added support for the following GIS-related functions: `ST_HAUSDORFFDISTANCE`, `ST_FRECHETDISTANCE`, `ST_LineInterpolatePoints`, `ST_LineInterpolatePoint`, `ST_PointAtDistance`, `ST_Union`, `ST_Difference`, `ST_Buffer`, `ST_Collect`, `ST_Symdifference`, and `ST_Intersection`. This expands the GIS functionality.
    
-   Added a query priority scheduling feature for [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/), allowing priorities to be assigned to column store queries to optimize query execution efficiency.
    
-   The [Data Cleanup (TTL) feature](/help/en/polardb/polardb-for-mysql/user-guide/ttl-syntax-description) is now compatible with other products such as TiDB, and supports the `TTL = 'b' + INTERVAL 3 MONTH;` syntax.
    

#### **Performance optimizations**

**Description**

-   Optimized the partition cost model. For equality queries and IN condition queries on indexes that do not contain a partition key, a partition count factor has been introduced into the cost estimation to improve its accuracy.
    
-   Optimized the algorithm selection logic to support the use of efficient HASH JOIN for executing some correlated subqueries.
    
-   Optimized the performance of [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) when handling complex `IN` and `EXISTS` subqueries and improved the optimizer's logic for handling subqueries, thereby significantly improving query efficiency and execution performance.
    
-   [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) now supports Partition Redo and asynchronous Redo mechanisms, effectively increasing system throughput in game scenarios to better meet high-concurrency demands.
    
-   Optimized the logic in Orca for processing the Redis `SCAN` command with the `COUNT` option to ensure the accuracy and consistency of the number of returned elements.
    
-   Support for `SELECT DISTINCT ...` statements in IMCI is enhanced to allow for `non-full-groupby` cases. This improves compatibility with more scenarios and enhances the flexibility and applicability of queries.
    
-   Optimized the logic for multi-level nested IN subqueries, allowing them to be accelerated by the columnstore index.
    

#### **Bug fixes**

**Description**

-   Fixed a potential illegal memory access issue when executing an `INSERT ON DUPLICATE KEY UPDATE` statement on an [interval range partition](/help/en/polardb/polardb-for-mysql/user-guide/interval-range-partitioning/).
    
-   Fixed an incompatibility with the database and table restoration feature that occurred because the `loose_innodb_initialize_in_space_extend` parameter for file space extension could not be set to 0.
    
-   The [Hybrid Plan](/help/en/polardb/polardb-for-mysql/user-guide/use-hybrid-plan-to-speed-up-wide-table-queries) in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) now supports Semi Join and Anti Semi Join modes in its Index Join mechanism. This further expands query optimization capabilities and improves execution efficiency in complex query scenarios.
    
-   Fixed a potential system crash when using the TempTable engine with a Common Table Expression (CTE) in multiple reference scenarios.
    
-   Fixed a potential query exception when all data in a stored data block was identical, improving system stability and query reliability in data consistency scenarios.
    
-   Fixed an issue where read-only nodes failed to sync the `gtid_purged` variable, which caused queries to return empty values.
    
-   Fixed an issue where a database and table restoration task could be interrupted if the source table had a columnstore index.
    
-   Fixed a potential crash when disabling Hybrid Plan in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) while it was running.
    
-   Fixed a potential socket leak in the Orca network framework when a connection timed out or was actively closed.
    
-   Fixed a rare issue where a statement could not exit normally due to the termination of the corresponding DDL connection when the cluster's nonblocking DDL feature was enabled.
    
-   Optimized the DLM partition archiving process by changing the requested table-level MDL to a partition-level MDL in the final stage. This reduces lock granularity and improves system concurrency and partition archiving efficiency.
    
-   Fixed an issue of inaccurate memory preemption under mixed workloads.
    
-   Fixed an issue where an XENGINE partition required a table rebuild during an optimize operation. The operation process was optimized, significantly improving optimization efficiency and system performance.
    
-   Fixed a parallel query cluster crash caused by a sort operation after a materialized table was merged.
    
-   Fixed a potential crash when the materialized table pruning feature coexisted with the WITH ROLLUP feature.
    
-   Fixed a cluster crash when creating a temporary table with a CREATE TABLE AS SELECT statement, improving system stability.
    
-   Fixed a potential cluster crash when accessing statistics tables in a [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/).
    
-   Fixed an issue where an incorrect index was selected for constant range filtering (`const between field1 and field2`) in IMCI queries.
    
-   Fixed an issue in multi-master cluster scenarios where the online DDL process for the columnstore index was not adapted to the Logical Log Sequence Number (LLSN) logic. This caused the replay of column store redo logs to be missed.
    
-   Fixed a tablespace leak issue in the [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-1/) after a DDL change.
    
-   Fixed an issue where executing the `explain for connection` statement during a query on a partitioned table with an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) caused a crash.
    
-   Fixed an issue where columnstore index data could not be recovered due to an MDL acquisition failure during the metadata recovery phase.
    
-   Fixed an issue where queries on IMCI I\_S (IMCI-related views in the Information\_Schema database) with a `name` filter condition returned incomplete results because a case-sensitive string comparison function was not used.
    
-   Fixed an issue where a read-only node of the [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-1/) unexpectedly cleared data block metadata upon restart.
    
-   Fixed a potential anomaly in the MDL system when the number of connections exceeded 65,536.
    

### **8.0.2.2.27.2 (January 23, 2025)**

#### **Bug fixes**

**Description**

-   Fixed a potential data redundancy issue in the column index during crash recovery when a column store node cluster was restarted during a large transaction.
    
-   Fixed a syntax issue with the [TTL](/help/en/polardb/polardb-for-mysql/user-guide/ttl-overview) feature by changing TTL to a non-reserved keyword to ensure compatibility with the community version.
    

### **8.0.2.2.27.1 (January 14, 2025)**

#### **New features**

**Description**

#### **Bug fixes**

**Description**

Fixed an occasional data read failure when reading large JSON or GIS objects through [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29).

## **2024**

### **8.0.2.2.27 (December 28, 2024)**

#### **New features**

**Description**

-   Added support for adding read-only column store nodes to a [secondary cluster](/help/en/polardb/polardb-for-mysql/user-guide/manage-a-secondary-cluster) in a Global Database Network scenario.
    
-   Added support for [REORGANIZE PARTITION](/help/en/polardb/polardb-for-mysql/user-guide/reorganize-partition) and [LIST DEFAULT HASH](/help/en/polardb/polardb-for-mysql/user-guide/list-default-hash) partition to merge a [LIST](/help/en/polardb/polardb-for-mysql/user-guide/list) partition into a [HASH](/help/en/polardb/polardb-for-mysql/user-guide/hash) partition, and split a VALUE into a new LIST partition.
    
    Added support for using the prefix of a HASH partition as the entire [HASH](/help/en/polardb/polardb-for-mysql/user-guide/hash) partition name.
    
-   Added support for large wide tables by extending the maximum number of columns for tables in the [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-edition) to 10,000.
    
-   Added the DISTANCE expression, which supports calculating cosine similarity, dot product similarity, and Euclidean distance.
    
-   Added a feature to use IMCI to accelerate [vector retrieval](https://dev.mysql.com/doc/refman/9.0/en/vector.html) queries.
    
-   Added support for the `table value constructor` syntax. You can now use the VALUES ROW syntax in DML statements.
    
-   Added support for using a stored procedure to batch add [columnstore indexes](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) to all tables in a database.
    
-   Added a feature in Outline to support table partitioning scenarios. A single Outline can match all statements with the same template, applicable to different partitioned tables.
    
-   Added collection and use of non-index column statistics, and a unified management method for extended statistics.
    
-   Added support for dynamically adjusting `Order Index` selection results at runtime based on actual conditions.
    

#### **Performance optimizations**

**Description**

-   Optimized the startup speed of read-only column store nodes. The column store engine can now start independently from the column store snapshot offset.
    
-   Optimized the startup time of column store nodes in scenarios with a massive number of tables.
    
-   Optimized the Orca feature to support specifying a username and password in the Redis `AUTH` and `HELLO` commands using the `username:password` syntax.
    
-   Optimized DDL scenarios for the [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-edition) storage engine. The system will automatically enable the pre-commit feature for X-Engine.
    
-   Adjusted the lock granularity for the sorted set data type in Orca. Only flags are used for lock checks on secondary indexes.
    
-   Optimized the code for thread startup and destruction in logical pre-reading and simplified the memory check logic.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where DDL operations on a table with a view could report an error or not take effect after a high-availability (HA) switchover.
    
-   Fixed an issue where the parallel query parameter `pq_enable_xengine_mpp` did not take effect when set to OFF.
    
-   Fixed an issue where the Autoinc value of a partitioned table occasionally rolled back, causing a Duplicate key error on INSERT.
    
-   Fixed the session-level `binlog_rows_query_log_events` permission to support the execution of SQL backups and rollbacks in DMS.
    
-   Fixed an issue where an error was not reported for duplicate items when setting a `flagset`\-type variable, such as `optimizer_switch`.
    
-   Fixed an issue where enabling the `win magic` switch caused a subquery rewrite overflow due to insufficient `base_ref_items` space, resulting in a process crash.
    
-   Fixed an expression evaluation error when converting an INLIST to a JOIN result set if the INLIST VALUES contained a null value.
    
-   Fixed an issue where using a HASH JOIN in the plan could cause incorrect parallel query results.
    
-   Fixed an issue where incorrect results could be returned when Lateral Derived Tables (LDT) were present in a query.
    
-   Fixed the implementation of the Redis protocol transaction model in Orca, including the WATCH, UNWATCH, MULTI, EXEC, and DISCARD commands.
    
-   Fixed an issue where the results returned by the `BITOP`, `ZRANGEBYLEX`, `ZRANGEBYSCORE`, `ZREVRANGEBYSCORE`, and `ZREVRANGEBYLEX` commands in the Orca feature were inconsistent with official Redis.
    
-   Fixed an issue that could cause a process to crash when the `SUBSTRING_INDEX` expression processes an empty string from `GROUP_CONCAT` and the separator's length is greater than 1.
    
-   Fixed an issue where the `CAST(REGEXP_SUBSTR(...)) AS DECIMAL` statement caused a process to crash.
    
-   Fixed an issue where data validation was not performed when changing the dimension of a VECTOR type with a DDL statement.
    
-   Fixed a data dictionary inconsistency that occurred during a minor version upgrade from a version that did not support vector retrieval to one that did.
    
-   Fixed a rare issue of duplicate data on the primary key index when using partition MDL.
    
-   Fixed compatibility, scale-out, and scale-in issues between IMCI [Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview) and internal memory elasticity.
    
-   Fixed an issue where using the `ALTER TABLE DROP` statement to simultaneously delete multiple full-text indexes (FTS) could cause residual metadata.
    
-   Fixed an issue where the uniqueness of index values was not leveraged for acceleration when a unique index was used.
    
-   Fixed a cluster crash that occurred in extreme cases when performing DML operations on a table with an auto-increment column after [online partition maintenance (MDL)](/help/en/polardb/polardb-for-mysql/user-guide/online-partition-maintenance) was enabled.
    
-   Fixed a potential cluster crash when a multi-value index was selected in a [Multi-Range Read (MRR)](https://dev.mysql.com/doc/refman/8.4/en/mrr-optimization.html) optimization.
    
-   Fixed an issue where Orca did not lock the database when executing certain management commands, such as the `ORCA_OPTIMIZE`, `AUTH`, and `ACL` commands.
    
-   Fixed an issue where using a parallel query could lead to incorrect results when querying data that includes BLOBs.
    
-   Fixed an issue where certain types of queries were not correctly routed in adaptive execution.
    
-   Fixed an issue in cold data scenarios where the metadata cache on a read-only node was not updated after [archiving to CSV or ORC format](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss).
    
-   Fixed a cluster crash due to a memory issue during DDL operations on a table containing a BLOB field.
    
-   Fixed an issue where rebuilding an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) was not supported online, which made the columnstore index unavailable.
    

### **8.0.2.2.26.1 (November 21, 2024)**

#### **Bug fixes**

**Description**

Fixed an issue where an `INSERT ... ON DUPLICATE KEY UPDATE` statement caused a table's auto-increment value to roll back after an RO node switched to an RW node.

### **8.0.2.2.26 (October 21, 2024)**

#### **Performance optimizations**

**Description**

-   Optimized the statistics sampling mechanism by increasing the sampling frequency for large tables and ensuring coverage of the value range for each column. This improves the accuracy of the optimizer's cost estimation.
    
-   Optimized the Serverless process for column store nodes.
    
    Allows a new column store node to serve requests only after its indexes are ready. This reduces slow queries caused by SQL statements being routed to the new node and running row store plans during this period.
    
-   Optimized the performance overhead of saving partition information during SQL execution in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29), improving [partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/overview-46) query performance.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where the result set was incorrect when merging IN keywords in a nested subquery.
    
-   Fixed a crash that occurred when a related subquery used a nested `window function`.
    
-   Fixed a crash during the migrate process caused by a concurrency issue between high-frequency INSTANT DDL operations and background compaction tasks.
    
-   Fixed B-tree corruption caused by adding an auto-increment column and creating a reverse-order primary key index on that column.
    
-   Fixed an issue where the Autoinc value could roll back to 0 after all data in a table was cleared.
    
-   Fixed an issue where IMCI fell back to the row store when processing an expression that contained multiple subqueries with SUM.
    
-   Fixed an issue where results could be incorrect when using a JSON\_ARRAY expression in a subquery with [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) enabled.
    
-   Fixed a system crash that could occur during query transformation if the number of tables exceeded 61.
    
-   Fixed an error when re-importing the same data into a [UNIQUE CHECK IGNORE](/help/en/polardb/polardb-for-mysql/user-guide/unique-check-ignore) partitioned table using LOAD DATA with REPLACE.
    
-   Fixed an Autoinc rollback issue in a [partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/overview-46) after an HA switchover.
    
-   Fixed an issue where a process was interrupted after multiple rounds of restoration on the same table in the new database and table restoration process.
    
-   Fixed an issue where rebuilding an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) was not supported online, which made the columnstore index unavailable.
    
-   Fixed a rare issue where a query error was caused by accessing invalid data when the column store executed and accessed string type data.
    
-   Fixed an issue where using Index\_merge optimization for `UPDATE` statements could cause performance degradation.
    
-   Fixed an issue that could be triggered when an Index JOIN in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) used a constant as a JOIN condition.
    
-   Fixed an issue where `table function` condition pushdown caused execution failures during parallel execution.
    
-   Fixed an issue where specifying a non-existent index in an Outline caused an error after [multi-node ePQ](/help/en/polardb/polardb-for-mysql/user-guide/overview-22) was enabled.
    
-   Fixed an issue where asynchronous DDL could not be used when adding an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29) by modifying the COMMENT on a table with a full-text index.
    
-   Fixed a potential abnormal cluster crash during the Undo initialization phase when Force Recovery was enabled.
    
-   Fixed an issue where incorrect results could be returned in an InnoDB temporary table update scenario.
    
-   Fixed an issue where a conflict between advanced transaction splitting in the Proxy and the [Fast Query Cache](/help/en/polardb/polardb-for-mysql/user-guide/fast-query-cache) affected the result set.
    
-   Fixed an issue where [parallel query](/help/en/polardb/polardb-for-mysql/user-guide/quick-start) results could be incorrect if the query contained a constant table.
    
-   Fixed an issue where JSON\_Length returned incorrect results when using a wildcard character.
    
-   Fixed an issue where an RO node could get stuck during the HA phase, preventing prolonged HA times for users.
    

### **8.0.2.2.25.2 (August 13, 2024)**

#### **Bug fixes**

**Description**

Upgraded the file system version and optimized the process of restoring a cluster from a writable snapshot.

### **8.0.2.2.25.1 (August 10, 2024)**

#### **Bug fixes**

**Description**

Fixed a compatibility issue between the file system version and the control system.

### **8.0.2.2.25 (August 8, 2024)**

#### **New features**

**Description**

-   Added support for the JSON\_VALUE() function, which simplifies the operation of creating indexes on JSON columns.
    
-   Added support for continuous business updates during Copy DDL execution.
    
-   Added support for pushing down JOIN conditions to the corresponding views.
    
-   [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) adds support for an `index join` based on Hybrid Plan, which lets you use InnoDB indexes for JOIN operations.
    
-   Added support for directly accessing AI node data tables through federated external tables.
    
-   The OSS OUTFILE feature now supports [parallel export to the OSS engine](/help/en/polardb/polardb-for-mysql/user-guide/export-local-tables-to-oss-in-parallel).
    
-   Added a high-priority DDL capability to ensure successful DDL execution.
    
-   Added a LOCK method to lock archived tables.
    
-   Added a hybrid row-column optimizer and cost-based row-column routing capabilities.
    
-   Added an optimizer feature for inner join or semi-join elimination.
    
    Optimized the outer join elimination feature and expanded it to more scenarios.
    
-   Optimized [large transactions in binary logging](/help/en/polardb/polardb-for-mysql/user-guide/binlog-big-transaction-optimization) to avoid blocking other transaction commits.
    
-   The Hybrid Plan in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) now supports partitioned tables, virtual columns, and columns of ENUM, SET, and GIS types.
    
-   Added support for dynamically switching to the column store during the [in-row execution process](/help/en/polardb/polardb-for-mysql/user-guide/adaptive-execution-capability).
    
-   The OSS query acceleration feature now supports [archiving partitioned tables to OSS external tables](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#3af5b5b6f1gmv). [Manual](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss) or [automatic](/help/en/polardb/polardb-for-mysql/user-guide/usage-4) partition archiving can synchronously generate [OSS\_FILE\_FILTER query acceleration data](/help/en/polardb/polardb-for-mysql/user-guide/oss-file-filter-query-acceleration).
    

#### **Performance optimizations**

**Description**

-   Optimized PolarDB for MySQL 8.0.1 and later versions to support displaying outline call information in explain.
    
-   Optimized the ORDER BY LIMIT pushdown feature for PolarDB for MySQL, supporting the pushdown of ORDER BY LIMIT to JOIN Tables.
    
-   Optimized PolarDB IO Threads to be dynamically adjustable without requiring a restart.
    
-   Optimized the time taken for query optimization of single-table queries.
    
-   Optimized the DML transaction replay performance in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
    
-   Optimized the [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) `bloom filter` hash algorithm and reduced the overhead of building the `bloom filter` using string prefixes.
    
-   Optimized the performance of simulated AIO.
    
-   Optimized the low performance issue of 3AZ clusters under low concurrency.
    
-   Optimized the nonblocking DDL feature to support more DDL statements.
    
-   Optimized the memory usage of metadata information used in queries in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
    
-   Optimized and adjusted the priority of PolarFS transaction processing threads to improve the DDL performance of PolarDB for MySQL.
    
-   Optimized the performance stability of the file system when frequently creating and deleting table files during the DDL process.
    

#### **Bug fixes**

**Description**

-   Fixed a crash caused by a Hash JOIN between the same Common Table Expression (CTE) in a parallel query.
    
-   Fixed an out-of-memory error reported during IMCI execution when a query had too many UNION ALL clauses.
    
-   Fixed an issue where user threads on an RO node had to wait for a long time for a free page when the Buffer Pool was full.
    
-   Fixed the issue of frequent sampling of large tables in the statistics sampling mechanism.
    
-   Fixed an issue where removing an RO node when `innodb_polar_log_rdma_transfer` is enabled could block monitoring connections for a period of time.
    
-   Fixed an incompatibility issue between some [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) implicit conversions and the CASE statement in MySQL.
    
-   Fixed an issue where [global secondary indexes (GSIs)](/help/en/polardb/polardb-for-mysql/user-guide/global-secondary-index) were not supported when [archiving a partitioned table to an OSS external table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss).
    
-   Fixed an issue where connection errors in the acknowledgment (ACK) packets of a secondary node could not be identified.
    
-   Fixed an out-of-memory (OOM) error that occurred during the `analyze table` operation on a large table.
    
-   Fixed an issue where useless subqueries were not deleted during the view merging process.
    
-   Fixed an issue where during the `inlist`\-to-JOIN conversion, an inconsistent `inlist` type caused inconsistent result sets.
    
-   Fixed an issue where a query rewrite failed to read data when using `index_merge` to access a single-row subquery.
    
-   Fixed an issue where converting a subquery resulted in a `semi join crash`.
    
-   Fixed an issue where a query rewrite crashed when converting a scalar subquery with an `anti join` to a derived table.
    
-   Fixed an issue of insufficient precision for floating-point numbers in JSON.
    
-   Fixed an incompatibility issue between the [global consistency high-performance mode (SCC)](/help/en/polardb/polardb-for-mysql/user-guide/scc) Log RDMA feature and GDN secondary clusters.
    
-   Fixed an issue where converting a large `double` value to `uint` caused an overflow during the parallel computing planning process.
    
-   Fixed an issue where the REF or MULTI RANGE access cost was underestimated for secondary indexes that did not include the partition key in a UCI partitioned table.
    
-   Fixed an issue where the precision of a `double value` in JSON was abnormally lost during the parsing phase.
    
-   Fixed a bug where the DB would get stuck during a manually triggered checkpoint.
    
-   Fixed a crash caused by the interaction between the `derived merge` query rewrite and the scalar subquery unnesting rule**.**
    
-   Fixed a security issue in the crash recovery process of MySQL external XA transactions.
    
-   Fixed an issue where statistics on an IMCI partitioned table became invalid in a partition pruning scenario.
    
-   Fixed an issue where [cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss) failed for InnoDB tables with a `function index`.
    
-   Fixed an issue where an incorrect delimiter setting resulted in an error instead of a warning when you set the values for `optimizer_switch` and `parallel_query_switch`.
    
-   Disabled the `index merge intersection` access path by default for DML statements to improve performance and prevent deadlocks.
    
-   Fixed an issue where the optimizer could not select the optimal JOIN ORDER due to cardinality estimation errors.
    
-   Fixed an error when the CREATE TEMPORARY TABLE SELECT STATEMENT attribute had a column with column store.
    
-   Fixed a potential assertion failure during the table optimization process.
    
-   Fixed an issue where the query result cache could be inaccurate when `time` and `datetime` types are compared during single-node and multi-node parallel execution.
    
-   Fixed an incorrect IP address in the audit log for connection reuse under the session-level connection pool.
    
-   Fixed an issue where the cost of point queries and range queries based on the primary key was underestimated for UCI partitioned tables.
    

### **8.0.2.2.24 (June 21, 2024)**

#### **Performance optimizations**

**Description**

-   Optimized the memory usage of metadata information used in queries in [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
    
-   Optimized the memory footprint of the [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) optimizer for high-concurrency query scenarios.
    

#### **Bug fixes**

**Description**

-   Fixed an error when creating a [GSI](/help/en/polardb/polardb-for-mysql/user-guide/global-secondary-index) on an empty table using [parallel DDL](/help/en/polardb/polardb-for-mysql/user-guide/parallel-ddl).
    
-   Fixed an issue of incorrect statistics estimation for large tables with Blob fields.
    
-   Fixed an issue where the number of rows scanned by a derived table was not recorded in the audit and slow query logs.
    
-   Fixed a space leak issue caused by an exception during the Shrink process.
    
-   Fixed an error that occurred during a parallel query on a [hybrid partition](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table) that contained both InnoDB and [ORC](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss) partitions.
    
-   Fixed an issue where the result set was incorrect when a subquery was incorrectly collapsed.
    
-   Fixed an issue where an ADD COLUMN operation could not be performed on a partitioned table with [subpartitions](/help/en/polardb/polardb-for-mysql/user-guide/overview-66) after upgrading the kernel version from 8.0.1 to 8.0.2.
    
-   Fixed a potential cluster crash in a parallel query when a predicate condition contained a DEFAULT expression.
    
-   Fixed an issue of excessive permissions during the execution of a [DLM](/help/en/polardb/polardb-for-mysql/user-guide/usage-4) policy.
    
-   Fixed a failure when archiving an [archived table](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss) that had a descending index.
    
-   Fixed an issue where the Blob space of the original record could not be reclaimed when updating a Blob column.
    
-   Fixed an issue where [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) could not be used because of inaccurate cardinality estimation when a BIGINT column with large values was used as a JOIN condition.
    
-   Fixed an issue where statistics for an [IMCI](/help/en/polardb/polardb-for-mysql/user-guide/imcis/) partitioned table could be inaccurate because only some partitions were sampled when updating the statistics.
    
-   Fixed an issue where useless subqueries were not deleted during the view merging process.
    
-   Fixed a potential parallel query crash after a CTE, which was the right table of a LEFT JOIN, was eliminated.
    
-   Fixed an issue where the transaction ID for read-write transactions in [SQL Explorer](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit) could be 0 when the thread pool was enabled.
    

### **8.0.2.2.23.1 (May 20, 2024)**

#### **New features**

**Description**

Added returned row count information to the Fast Query Cache feature. The number of returned rows for a cache-hit query can now be displayed in the audit log.

#### **Bug fixes**

**Description**

-   Fixed an issue where the number of rows scanned by a derived table was not recorded in the audit and slow query logs.
    
-   Fixed an issue where no data was returned when Limit Offset pushdown was combined with an equality condition on a secondary index and an IN list condition on the primary key.
    
-   Fixed an issue where the result of a comparison between a FLOAT type and an INT type could be incorrect.
    

### **8.0.2.2.23 (May 8, 2024)**

#### **New features**

**Description**

-   Added the new parameter `limit_orderby_pushdown_mode` to control whether to push down \`LIMIT\` and \`Order By\` to derived tables or all sub-branches of a \`UNION ALL\`. When the \`LIMIT\` value is less than the value of the `limit_pushdown_to_union_threshold` parameter, \`LIMIT\` and \`Order By\` are pushed down to all sub-branches of the \`UNION ALL\`.
    
-   Added a Left Join feature based on TopK pushdown in IMCI.
    
-   Added an optimizer query transformation feature that can convert a LEFT JOIN to an INNER JOIN based on HAVING conditions and outer conditions of a VIEW.
    
-   Added an optimizer feature to eliminate redundant DISTINCT operators in query statements to improve query execution speed.
    

#### **Performance optimizations**

**Description**

-   Supports using the query acceleration feature for CSV format data files on OSS.
    
-   You can execute the `INSTANT DROP PARTITION` operation on a partitioned table with a global secondary index (GSI) without invalidating the GSI.
    
-   Optimized and improved the read performance of read-only (RO) nodes.
    
-   Supports using the LEFT JOIN elimination feature in **UPDATE** statements.
    
-   Optimized the SQL Trace feature to correctly record SQL statements and their execution plans when calling built-in stored procedures.
    
-   Supports using the instant add column feature on tables with a columnstore index created.
    
-   Supports using non-equivalent predicate derivation techniques to push down more predicates.
    
-   The usage of the parameters related to automatic request distribution among row store and column store nodes is simplified. In addition, when the column store is not used, you can use `SET use_imci_engine=FORCED` to obtain a specific reason.
    
-   Optimized the subquery execution process to collapse multiple subqueries as much as possible to eliminate them.
    
-   Supports using temporary tables when using the Hybrid Plan to accelerate wide table queries.
    
-   Optimized the speed of the Thread Pool in handling connection requests in low-concurrency scenarios.
    
-   Supports using the rman.import command for columnstore indexes.
    
-   Optimized the X-Engine sampling statistics feature to estimate the approximate compression ratio.
    
-   Supports creating Tair read-only (RO) nodes to provide Cache read capabilities.
    
-   When you monitor database performance, ignore the impact of access by system O&M engineers on the `slow_queries` status metric.
    
-   Reduced the overhead of metadata for memory allocation and memory statistics in IMCI to save memory.
    
-   Supports using the parallel query feature for single tables and partitioned tables in X-Engine.
    
-   IMCI supports using the BatchProbe optimization method to improve the performance of JOIN operations.
    
-   Optimized the memory of metadata, file modules, and small RAM resident objects in IMCI to reduce resident memory usage.
    
-   Supports using the columnstore index and global consistency (high-performance mode) features at the same time.
    
-   Stats Manager supports automatically dispatching the task of collecting histograms to read-only nodes or hot standby nodes for execution, to achieve automatic updating of histograms.
    
-   Optimized the IO performance of PolarFS read-only nodes to improve their query response speed.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where the automatic cancellation of a previous scale-in operation in the Buffer Pool could not be executed because a large user SQL query occupied pages and did not release them, preventing subsequent scale-out requests from being executed.
    
-   Fixed an issue where the `dbms_oss.delete_table_file` built-in stored procedure could not delete cold data in CSV or ORC formats.
    
-   Fixed a potential node crash caused by the automatic cancellation of a previous scale-in operation in the Buffer Pool under high concurrency.
    
-   Fixed an issue where a query could not be dispatched to the columnstore index for execution if it contained a subquery that returned an empty result set.
    
-   Fixed an issue where an internal counter error could occur in the Thread Pool if an ACL lock wait was encountered during the asynchronous authentication process.
    
-   Fixed an issue where an assert message was returned when performing a multiplication operation on Decimal type data, if at least one multiplier was 0 and the scale (decimal places) of the result exceeded 16.
    
-   Fixed an issue in the one-click upgrade scenario from RDS for MySQL to PolarDB for MySQL where a PolarDB for MySQL cluster restart interrupted the migration link.
    
-   Fixed a node crash when querying a hybrid partition that contained both InnoDB and ORC partitions.
    
-   Fixed data loss when repeatedly archiving data to an OSS external table.
    
-   Fixed a node crash caused by accessing an invalid Blob reference when pre-reading Blob type data.
    
-   Fixed a probabilistic node crash when the pre-read feature was enabled while using the columnstore index feature.
    
-   Fixed an issue where the HINT syntax was not supported in the join condition pushdown feature.
    
-   Fixed an issue where the HINT syntax was not supported in the predicate pushdown subquery feature.
    
-   Fixed an issue of incomplete HAVING condition pushdown.
    
-   Fixed a potential node crash in a parallel query when referencing a projection column in a **HAVING** clause and executing a non-correlated subquery.
    
-   Fixed an issue of excessive Autoinc init log printing.
    
-   Fixed an issue where the subquery merging feature did not support Optimizer HINT.
    
-   Fixed a potential error in an OSS external table in an Order By Desc scenario.
    
-   Fixed an out-of-bounds memory issue when compressing an oversized strpack in IMCI.
    
-   Fixed a potential performance regression when pushing down conditions to a derived table.
    
-   Fixed an issue where BIT fields were displayed incorrectly after a Group By.
    
-   Fixed a slow query performance degradation issue caused by the impact of strict concurrency control of background compaction tasks in X-Engine on foreground operations.
    
-   Fixed an issue where results could be incorrect in a parallel query if a plan segment had multiple tables performing a partition-wise parallel scan, and a parallel hash join operation was also executed in the segment.
    
-   Fixed an issue where pulling up some subqueries caused a `column in group statement is ambiguous` warning.
    

### **8.0.2.2.22.1 (April 17, 2024)**

#### **Performance optimizations**

**Description**

-   Optimized the error message content for importing cold data from OSS back to the InnoDB engine.
    
-   Supports configuring the tracking of slow query execution information in SQL Trace.
    

#### **Bug fixes**

**Description**

-   Fixed a memory leak that occurred when performing a Reload operation for features such as Statement Outline and Concurrency Control.
    
-   Fixed an issue where performing a LEFT JOIN on tables in the `INFORMATION_SCHEMA` database returned incorrect results.
    
-   Fixed an issue where a DLM policy could still take effect after the table structure of a table with a created DLM policy was changed.
    
-   Fixed an issue where executing the `INSERT INTO ON DUPLICATE VALUE` command on a partitioned table reported the `Can't find record on <table>` error.
    
-   Fixed a rare crash that occurred when executing the `TRUNCATE PARTITION` command on a partitioned table with an auto-increment column.
    
-   Fixed an issue where the number of parallel shards could be too small, or the data of concurrent workers could be unbalanced, when performing a parallel query on a large table with a high B-tree or skewed B-tree data.
    

### **8.0.2.2.22 (April 7, 2024)**

#### **Performance optimizations**

**Description**

-   Supports granting users global dynamic permissions to execute the `SHOW_ROUTINE`, `FLUSH_USER_RESOURCES`, `FLUSH_TABLES`, `FLUSH_STATUS`, and `FLUSH_OPTIMIZER_COSTS` commands.
    
-   Disabled the small partial update feature for Blob to avoid potential data read errors when reading Blob type fields.
    
-   When you use the HINT syntax **SET\_VAR** to set the value of the `loose_optimizer_switch` parameter, you no longer need to add a comma at the end.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where an index was corrupted and table data could not be accessed due to different index orders when executing an **EXCHANGE PARTITION** operation.
    
-   Fixed a deadlock issue in DDL read-ahead in parallel DDL scenarios.
    
-   Fixed an issue where the LSN offset of a checkpoint did not meet expectations during a checkpoint operation, causing the crash recovery logic to fail to run normally after an abnormal cluster restart.
    
-   Fixed an issue where a node restart was required to recover from an Autoinc rollback.
    
-   Fixed an issue where a `table definition has changed` error occurred when a Hybrid Plan was applied to an SQL statement that includes an \`Order By\` clause and returns \`NULL\` values.
    
-   Fixed an issue where an error was not correctly reported when the number of input variables for some built-in stored procedures was incorrect.
    
-   Fixed an issue where duplicate groups appeared in the result set when a parallel query pushed down GROUP BY to a Worker for parallel execution on a partitioned table.
    
-   Fixed an issue where the `“Row size too large. The maximum row size for the used table type, not counting BLOBs, is 65535. This includes storage overhead, check the manual. You have to change some columns to TEXT or BLOBs”` error was incorrectly reported when you create a table that contains a column of the DECIMAL type.
    
-   Fixed a rare crash during the undo cleanup process when using a temporary table after the backquery machine flashback query feature was enabled.
    
-   Fixed an issue where the optimizer selected an ordering index, but the sort operation was not omitted during actual execution.
    
-   Fixed an issue where the column information of the remaining tables was not updated after using the JOIN elimination optimization feature, which could prevent the selection of the optimal access method for the table.
    
-   Fixed a potential error in the query result when Semi join selected the Materialization policy.
    
-   Fixed an issue where a Binlog record failed to uniquely identify a record in a partitioned table whose primary key does not contain the partition key when `binlog_row_image=MINIMAL`.
    
-   Fixed an issue where a UCI index might not be unique when the primary key did not include the partition key in the following scenarios:
    
    -   Pulling up an inner table of a semi-join;
        
    -   **GROUP BY** or **DISTINCT** elimination;
        
    -   Adding a unique key dependency for JOIN elimination;
        
    -   Decorrelating a correlated scalar subquery by converting it to a derived table through a window function;
        
    -   The columnstore index is optimized for GroupJoin query scenarios.
        

### **8.0.2.2.21 (January 17, 2024)**

#### **New features**

**Description**

-   After enabling the global consistency (high-performance mode) feature, if the currently executed SQL statement does not need to use this feature, you can use the Hint syntax in the current SQL statement to disable it.
    
-   Supports using correlated subqueries in the Grouping clause and eliminating complex correlated subqueries.
    
-   Supports using Concurrency Control and Statement Outline in a Multi-master Cluster (Database/Table). When you add or delete Concurrency Control and Statement Outline on a primary node of a Multi-master Cluster (Database/Table), the other primary nodes in the cluster will automatically synchronize the addition or deletion.
    
-   Supports adding a Tair cache node to a PolarDB for MySQL cluster to read data from the PolarDB for MySQL database.
    

#### **Performance optimizations**

**Description**

-   Optimized the speed of the Thread Pool in handling connection requests in low-concurrency scenarios.
    
-   Optimized the startup process of IMCI to reduce the startup preparation time for the column index.
    
-   Improved the data read performance of read-only (RO) nodes in scenarios where a secondary index looks up data from tables based on the primary key.
    
-   Optimized the transaction mask calculation process in IMCI.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where CCL rules matched by DIGEST value could become invalid after a cluster upgrade.
    
-   Fixed a node crash caused by adding backticks to the input parameters when calling some built-in stored procedures.
    
-   Fixed an incorrect sorting result when querying TopK data using the IMCI feature, due to too many NULL values in the tables involved in the query statement, when sorting in descending order.
    
-   Fixed an issue where a read-only column store node could not recover column store data when it was started during the execution of a DDL on a table involving a columnstore index.
    
-   Fixed an issue where the elastic parallel query (ePQ) feature could not be used in query statements containing a Recursive CTE in some special scenarios.
    
-   Fixed a failure to add a new RO node due to a low registration offset of the RO node when executing the new database and table restoration process.
    
-   Fixed an issue where a thread could not exit due to a full disk when executing the new database and table restoration process.
    
-   Fixed an anomaly on a read-only node caused by concurrent modification of the data structure during physical replication in the X-Engine.
    
-   Fixed an upgrade failure when upgrading an X-Engine from a read replica to a standby.
    
-   Fixed an issue where data was not re-partitioned when modifying the character set of a partition key in a partitioned table.
    
-   Fixed an issue of incorrect query results when querying a view containing BIT type data using IMCI.
    
-   Fixed an issue of high latency when performing write operations on a table in the X-Engine under low concurrency.
    
-   Fixed an issue where GROUP BY could not find the corresponding column after a single-row subquery was pulled up.
    
-   Fixed an issue of incorrect result set after MySQL community enabled the subquery\_to\_derived feature.
    
-   Fixed an issue where using the `polar_abbrev_sort_key_size` parameter to control sorting operations caused memory corruption.
    
-   Fixed an issue where only data from the first partition was returned in an index merge scenario that selected a unique key (UK) when performing an equality query on a partitioned table whose primary key did not include the partition key.
    

## **2023**

### **8.0.2.2.20 (December 20, 2023)**

#### **Performance optimizations**

**Description**

-   For clusters that have not had a Statement Outline added, if a Statement Outline is added after a version upgrade, outline matching will no longer be affected by the character set.
    
-   Optimized the process of enabling global consistency (high-performance mode).
    
-   Supports accessing the INFORMATION\_SCHEMA view information of the column store from any node. By default, it aggregates and displays information from all column store nodes.
    
-   Optimized the database and table restoration feature. For example, it improves the restoration speed and supports task failure rollback.
    

#### **Bug fixes**

**Description**

-   Fixed a potential node crash when performing a parallel scan on a derived table that contained a ROLLUP calculation.
    
-   Fixed a node crash caused by an incorrect format of a user-defined CONNECTION when creating an OSS external table.
    
-   Fixed an issue where the RW node did not interrupt its replication relationship in special cases when the physical machine of an RO node failed, which caused the dirty page flushing of the RW node to be blocked.
    
-   Fixed an Autoinc rollback issue caused by table cache eviction due to an excessive number of tables after an HA switchover.
    
-   Fixed a replica node crash caused by an extreme Redo log sequence generated from a concurrency relationship between deleting a table or index in X-Engine and an occasional background SwitchMemtable operation.
    
-   Fixed an internal connection object leak caused by an abnormal execution of elastic parallel query (ePQ) when a remote connection was forcibly closed.
    
-   Fixed an incorrect query result when executing a ROLLUP statement in parallel, due to multiple identical constant columns in the GROUP BY clause.
    
-   Fixed an ASSERT CRASH (assertion error) triggered when accessing a GSI of a partitioned table using RANGE INDEX, in a case where all partitions of the partitioned table were pruned during the partition pruning phase.
    
-   Fixed an archiving failure when archiving cold data to ORC format, caused by a Blob type field in the table.
    
-   Fixed a restriction issue of parallel query on a GSI in MRR and other scenarios.
    

### **8.0.2.2.19.1 (November 13, 2023)**

#### **Bug fixes**

**Description**

Introduced a patch from the official MySQL 8.0.16 to fix a deadlock caused by an oversized Blob.

### **8.0.2.2.19 (October 30, 2023)**

#### **New features**

**Description**

-   A new parameter, `opt_non_covering_key_cost`, is added to control whether the initial seek cost of a secondary index is considered.
    
-   Added the parameter `worst_seek_records_threshold` to control whether to limit the maximum I/O cost of equality lookups on non-covering indexes during cost estimation.
    

#### **Performance optimizations**

**Description**

-   Optimized the logic for switching a read-only (RO) node to a primary node.
    
-   Optimized the logic of the Thread Pool for handling new connections.
    
-   Supports pushing down conditions to a materialized table when the subquery is a UNION clause.
    
-   Supports pushing down as many pushdown-able conditions as possible to a materialized table through the transitive relationship of equality conditions.
    
-   The optimizer supports pushing down eligible predicates into a subquery.
    
-   Optimized the cost model for equivalent non-covering index access.
    
-   Optimized memory by reducing the memory consumption of table object cache and table definition cache.
    
-   Supports using the DLM automatic cold data archiving feature for all RANGE type partitioned tables.
    
-   Supports the optimizer selecting a GSI of a partitioned table in a query with partition pruning.
    

#### **Bug fixes**

**Description**

-   Fixed a potential cluster startup failure when the AccessKey information of the OSS SERVER was corrupted.
    
-   Fixed a query failure in some scenarios due to the GroupJoin operator occupying too much memory.
    
-   Fixed an issue where some queries with OR predicates could not be executed because the query plan could not bind to the correct columns.
    
-   Fixed an issue where the optimizer could not accurately estimate the Join selectivity when joining an unsigned column with a signed column.
    
-   Fixed a potential database restart when a query was terminated by the scheduler.
    
-   Fixed a space reclamation failure caused by a read-only (RO) node of the X-Engine failing to report version reference information.
    
-   Fixed a RowID rollback failure when loading a checkpoint that was ahead.
    
-   Fixed an IO performance degradation issue in the columnstore index in a late materialization scenario.
    
-   Fixed a potential infinite loop issue during partition pruning if a partition was not located.
    

### **8.0.2.2.18 (September 17, 2023)**

#### **Bug fixes**

**Description**

Fixed a potential node crash when deleting the last CCL rule of the same SQL statement type, where only the keyword was filled in but not the schema and table.

### **8.0.2.2.17 (August 23, 2023)**

#### **Performance optimizations**

**Description**

Improved the speed of archiving cold data to OSS in CSV format.

#### **Bug fixes**

**Description**

-   Fixed an issue where a `Table definition has changed` error might be triggered when the global consistency (high-performance mode) and elastic parallel query (ePQ) features are enabled at the same time.
    
-   Fixed an issue of inaccurate scan row count statistics for SQL statements in an Index condition pushdown scenario.
    
-   Fixed a node crash when using the Phrase search mode in a full-text index.
    
-   Fixed an issue where a newly connected RO node would crash when the read-write (RW) node finished an undo truncate.
    

### **8.0.2.2.16.1 (July 25, 2023)**

#### **Bug fixes**

**Description**

-   Fixed an issue of high CPU usage by a background thread.
    
-   Fixed a potential cluster startup failure when the AccessKey information of the OSS Server was corrupted.
    

### **8.0.2.2.16 (July 23, 2023)**

#### **New features**

**Description**

Added the `innodb_polar_import_tablespace_strict_mode` parameter. The default value is **ON**, which means an error will be reported if the table structure contains a full-text index when performing a database and table restoration operation.

#### **Performance optimizations**

**Description**

-   Supports using the columnstore index to query data in specified partitions of a partitioned table.
    
-   Supports using the primary index in the InnoDB engine to accelerate queries for the columnstore index.
    
-   Supports converting an IN subquery to a Semi-Join subquery when performing an UPDATE or DELETE operation on a single table.
    
-   In a Join query, supports converting a scalar subquery to a materialized table.
    
-   Supports using the Fast Query Cache feature for partitioned tables in the InnoDB engine.
    
-   An implicit auto-increment primary key is not automatically created when creating an OSS external table.
    
-   Supports creating a GSI on a partitioned table with UNIQUE CHECK IGNORE=1.
    

#### **Bug fixes**

**Description**

-   Fixed a crash in the JPPD optimization feature when a CTE contained a nested CTE with multiple references.
    
-   Fixed a restoration failure when performing a database and table restoration operation on a hybrid partitioned table.
    
-   Fixed an issue where a secondary node did not trigger a reconnection mechanism when the primary node was shut down and restarted.
    
-   Fixed a rare re-interruption of the process during fault recovery.
    
-   Fixed an issue of inserting data into the wrong partition when inserting data into a UNIQUE CHECK IGNORE partitioned table.
    

### **8.0.2.2.15 (June 28, 2023)**

#### **New features**

**Description**

Added the `ALTER TABLE table_name CHANGE PARTITION partition_name ENGINE=CSV/ORC FORCE;` syntax.

#### **Performance optimizations**

**Description**

-   Supports log transmission between read-write (RW) nodes and read-only (RO) nodes through an RDMA network.
    
-   Supports archiving partitioned tables and standard tables with auto-increment columns to OSS.
    
-   The federated query engine supports pushing down the Order syntax to a remote database. The Order syntax can be used with Limit Offset to reduce network overhead.
    
-   Supports creating a columnstore index on a hybrid partitioned table (InnoDB+ORC).
    
-   Optimized the performance of the Thread Pool in handling short-lived connections.
    
-   The DLM feature supports archiving InnoDB partitions of a partitioned table to OSS.
    
-   Supports deleting and adding InnoDB partitions in a hybrid partitioned table.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where a query could not be promptly interrupted and temporary files could not be cleaned up after the temporary files used for a columnstore index query filled up the disk.
    
-   Fixed an issue where parameters were not effective when a stored procedure was executed repeatedly.
    
-   Fixed an issue where a regular user could delete `sys`.
    
-   Fixed an issue where an abnormal internal counter in the Thread Pool could cause a backlog of SQL requests during concurrent recording of slow query logs.
    
-   Fixed an abnormal node restart when performing a database and table restoration on a partitioned table after an HA switchover.
    
-   Fixed an issue where the checkpoint LSN did not advance as expected.
    
-   Fixed a potential error when executing a query on an RO node while an `ALTER TABLE ... IMPORT TABLESPACE` operation was being executed on the RW node.
    

### **8.0.2.2.14 (May 24, 2023)**

#### **New features**

**Description**

-   Added the `ALTER TABLE table_name CHANGE PARITION part_name ENGINE = 'csv';` command to archive partitions.
    
-   Added the row-level compression feature.
    
-   Added the primary key data slicing function `call dbms_dts.show_parallel_ranges (<schema_name>, <table_name>, [<suggestion_ranges>])`.
    

#### **Performance optimizations**

**Description**

-   Supports creating a columnstore index on a virtual column.
    
-   Supports using the recycle bin feature for tables with a created columnstore index.
    
-   Optimized the OSS query capability. After the elastic parallel query feature is enabled, a parallel query is directly performed if the value of the system's `loose_csv_max_oss_threads` parameter is greater than 1.
    
-   Optimized the error message content for incorrect OSS external table file formats.
    
-   Supports reading data in ORC format from OSS and writing data in ORC format to OSS.
    
-   Optimized the error message content for spelling errors.
    

#### **Bug fixes**

**Description**

-   Fixed a replication delay issue when replaying Redo logs of a wide table on an RO node.
    
-   Fixed a node crash when using order index optimization to query a hybrid partitioned table.
    
-   Fixed a node crash when truncating a hybrid partition.
    
-   Fixed an incorrect query result issue when using the Limit Offset pushdown optimization feature with a query statement that contained a window function.
    
-   Fixed an issue where OSS could not perform parallel execution.
    
-   Fixed an issue where OSS could not read JSON files.
    
-   Fixed a spelling error in the engine.
    
-   Fixed an issue where only the first file might be read when reading CSV format cold data from OSS.
    
-   Fixed an issue where data containing `\n` could not be read after being archived by DLM.
    
-   Fixed an issue where temporary files might remain on OSS after cold data archiving.
    

### **8.0.2.2.13 (April 21, 2023)**

#### **New features**

**Description**

-   Added the Hint types BNL, BKA, and MRR to Hint Plan.
    
-   Added the variable `by_expr_ignore_charset` to SQL Sharing. After setting `by_expr_ignore_charset` to **ON**, the digest differences generated by statements with Order By or Group By under different character sets will be eliminated. However, after setting it to **ON**, all digest values generated in this mode will be different from the digest values generated before it was set to **ON**.
    
-   The Statement Outline feature now has the interface `dbms_outln.add_optimizer_outline('schema', 'hints', 'query')` for adding Optimizer Hints.
    
-   Added the `ALTER TABLE table_name CHANGE PARTITION partition_name ENGINE = 'csv';` command to archive all data of a specified partition on a partitioned table to OSS.
    

#### **Performance optimizations**

**Description**

-   Optimized memory consumption when scanning tables in the recycle bin.
    
-   Supports querying gtid information on a read-only node.
    
-   The columnstore index supports instant add column by rebuilding the columnstore index data.
    
-   The columnstore index supports the REGEXPR function.
    
-   The columnstore index supports pruning optimization based on judgment conditions related to IS NULL and IS NOT NULL.
    
-   Supports using [parallel DDL](/help/en/polardb/polardb-for-mysql/user-guide/parallel-ddl#concept-1998449) to create a GSI in parallel.
    
-   Supports using the [instant add column](/help/en/polardb/polardb-for-mysql/user-guide/instant-add-column#concept-2021980) feature on a partitioned table with a created GSI.
    
-   Supports converting a table with a created GSI to an interval range partitioned table, and also supports creating a GSI on an interval range partitioned table.
    
-   When no Statement Outline is added, the Digest value of an SQL statement is no longer calculated when the SQL statement is executed.
    
-   Nonblocking DDL supports using the OPTIMIZE TABLE and TRUNCATE TABLE statements.
    

#### **Bug fixes**

**Description**

-   Fixed a database connection failure due to a read timeout when establishing physical replication on a read-only node.
    
-   Fixed an incorrect pushdown of a table with a NULL field when the engine\_condition\_pushdown parameter was set to **true**.
    
-   Fixed an issue where the source file on OSS could not be deleted when executing the `ALTER TABLE engine = csv storage oss, force;` command.
    
-   Fixed a database node crash when performing a check operation on an empty OSS external table.
    

### **8.0.2.2.12 (March 20, 2023)**

#### **New features**

**Description**

-   Added the [nonblocking DDL statement](/help/en/polardb/polardb-for-mysql/user-guide/nonblocking-ddl-statements#concept-2223849) feature.
    
-   Added the [SQL Trace](/help/en/polardb/polardb-for-mysql/user-guide/usage-2#main-2270206) feature.
    
-   Added the [SQL detail](/help/en/polardb/polardb-for-mysql/user-guide/sql-detail#concept-2293246) feature.
    
-   Added the Auto Plan Cache feature.
    
-   Added the [columnstore index](/help/en/polardb/polardb-for-mysql/user-guide/overview-29#8ebaa580c3xyy) feature.
    
-   Global consistency (high-performance mode) now has the `Innodb_scc_timeout_count` parameter to record the number of timeouts during a query.
    
-   Global consistency (high-performance mode) now has the `Innodb_scc_timeout_degrade_count` parameter to record the number of times a query timed out and was converted to an asynchronous query.
    

#### **Performance optimizations**

**Description**

-   When using Statement Outline, if a specified Index Hint does not exist, a warning is reported instead of an error.
    
-   The execution plan is now displayed in the extended data of the slow query log.
    
-   Supports adaptive digest length, which means the memory space for statement digest calculation can be adaptively adjusted according to the length of the query statement.
    
-   Concurrency Control (CCL) now has the `ccl_mode` parameter. When the database access traffic reaches the concurrency control limit, other requests to access the current cluster are rejected.
    
-   Built-in stored procedures now support using variables starting with the at sign (@) as input values.
    
-   Optimized the internal lock granularity of PolarFS, significantly improving performance in some high-load scenarios.
    

#### **Bug fixes**

**Description**

-   Fixed an issue where no error was reported when adding or deleting CCL rules or Statement Outlines on a hot standby node or a read-only node.
    
-   Fixed a cluster crash caused by executing the `SHOW SLAVE HOSTS` statement on the primary node.
    

### **8.0.2.2.11.1 (February 21, 2023)**

#### **New features**

**Description**

Added the `loose_group_by_compatible_sorting` parameter to control whether to enable the Group By compatible sorting mode.

#### **Performance optimizations**

**Description**

A Statement Outline with an empty Schema\_name now matches all SQL statements with the same Digest value.

#### **Bug fixes**

**Description**

Fixed a potential illegal memory access when using a DDL statement on a partitioned table.

### **8.0.2.2.11 (February 20, 2023)**

#### **Performance optimizations**

**Description**

-   When a partition expression contains an AUTO INCREMENT column, you can now specify a value for that column, and partition pruning will be performed based on the specified value.
    
-   You can use the `without validation` option in the `add partition` syntax to add a LIST partition to a [LIST DEFAULT HASH](/help/en/polardb/polardb-for-mysql/user-guide/list-default-hash#concept-2183627) partitioned table.
    

### **8.0.2.2.10 (January 9, 2023)**

#### **New features**

**Description**

The syntax for converting a standard table to a partitioned table now includes the `without validation` option. The syntax is as follows: `Alter table t1 partition by range(a) (partition p0 values less than (100), partition p1 values less than (200)) without validation`.

#### **Performance optimizations**

**Description**

-   Cost-based calculation now supports pushing down the outer join conditions of a materialized `derived table` into the `derived table`.
    
-   Supports converting a predicate condition with an IN-List to a temporary table, performing a semi-join with the query in the from clause, and avoiding the overhead of repeated materialization through a zero-copy method.
    
-   Supports pushing down conditions from the having clause to the where clause.
    
-   Subpartitions now support executing DDL operations under a partition-level MDL, reducing the lock granularity. During a DDL execution, only the modified partition is affected, and DML operations on other partitions are not affected.
    

#### **Bug fixes**

**Description**

-   When TDE is enabled, encryption of system tables is disabled. System tables are not allowed to be encrypted.
    
-   Adjusted timeout parameters related to physical replication connections to avoid stuttering issues during a physical machine failure.
    

## **2022**

### **8.0.2.2.9 (December 23, 2022)**

#### **Performance optimizations**

**Description**

-   The semicolon at the end of the SQL statement in the query parameter of the `dbms_ccl.add_ccl_digest_rule`, `dbms_outln.add_index_outline`, and `dbms_outln.add_optimizer_outline` built-in stored procedures is now ignored.
    
-   Changed the MEMBER keyword to a non-reserved keyword.
    
-   Supports the Partial Result Cache feature.
    
-   The optimizer's join elimination feature now supports eliminating the inner table of a left join (including inner tables with multi-level nested joins and Semi-Joins).
    
-   The federated query engine supports pushing down all compatible conditions to the remote server for execution, and only returns the columns required by the query.
    
-   The federated query engine supports pushing down the Limit Offset syntax to the remote database for execution.
    

#### **Bug fixes**

**Description**

Fixed an issue where `IF NOT EXISTS` could not be used in the syntax for creating a Server.

### **8.0.2.2.8 (November 30, 2022)**

#### **New features**

**Description**

-   Added the `SELECT INTO OSSOUTFILE` statement to export a local table (a table on PolarFS) to OSS.
    
-   Supports the [failover with hot standby](/help/en/polardb/polardb-for-mysql/user-guide/overview-28#concept-2188988) feature.
    
-   Added the `dynamic_partition_prune_enabled` parameter to control the dynamic partition pruning feature. When this feature is enabled, in multi-table join query scenarios involving partitioned tables, if the join condition meets the partition pruning condition, unnecessary partition scans can be reduced, thereby improving query performance.
    

#### **Performance optimizations**

**Description**

-   Supports creating indexes on some partitions of a partitioned table, which means it supports creating, deleting, and rebuilding indexes on a partitioned table at the partition granularity.
    
-   Supports performing REBUILD PARTITION and REORGANIZE PARTITION operations under a partition-level MDL, so that during a DDL operation on a certain partition, DML operations on other partitions are not affected.
    
-   The username and password in the `mysql.servers` table are no longer stored and displayed in plaintext.
    
    **Note**
    
    The username and password of an existing Server will not be encrypted after an upgrade. You need to manually delete and recreate it.
    
-   Supports using the partition-wise join technique between a partitioned table and a standard table, significantly improving the join efficiency of a partitioned table and a standard table with a large amount of data.
    
-   Statement Outline supports all UNION clauses.
    
-   Supports using the Limit Offset pushdown feature when accessing a specific partition in a partitioned table.
    

#### **Bug fixes**

**Description**

-   Fixed an issue of inaccurate estimation of the number of unique values for a GROUP BY field in the parallel optimizer.
    
-   Fixed an issue where an SQL statement would record a Binlog during a hot upgrade.
    

### **8.0.2.2.7 (October 25, 2022)**

#### **Performance optimizations**

**Description**

-   Multi-node elastic parallel query (ePQ) supports cross-node queries of external table data on OSS.
    
-   Supports using a GSI on a partitioned table.
    
-   Supports using multi-stage multi-node parallel query in queries with SJM (Semi-join Materialization).
    

#### **Bug fixes**

**Description**

-   Fixed an `ERROR 1028 (HY000): Sort aborted: Query execution was interrupted` issue caused by the early termination of limit1.
    
-   Fixed a potential node crash when writing an implicit primary key through a scheduled task.
    
-   Fixed an incorrect result set issue with count(distinct ...) under multi-node elastic parallel query (ePQ).
    
-   Fixed a potential incorrect query result set issue in a parallel query when the query condition contained DATE and DATETIME types.
    

### **8.0.2.2.6.1 (September 17, 2022)**

#### **Bug fixes**

**Description**

Fixed a crash issue on an RO node caused by a file name hash collision.

### **8.0.2.2.6 (August 19, 2022)**

#### **Performance optimizations**

**Description**

-   Thread pool optimization: When a database transaction is waiting for a metadata lock or row locks, the thread pool can generate additional threads to process new requests.
    
-   Enhanced CCL to support DDL throttling.
    
-   Accelerated the DDL data rebuilding process by asynchronously writing to a temporary file.
    
-   Improved thread pool performance under high concurrency.
    
-   Added the `oss_sts_token` parameter to the syntax for creating an OSS server, used to configure a temporary access credential for OSS.
    

#### **Bug fixes**

**Description**

Fixed an incorrect result issue when a query had both Limit offset pushdown and MRR optimization.

### **8.0.2.2.5.1 (July 22, 2022)**

#### **Performance optimizations**

**Description**

-   Supports creating a hybrid partitioned table. For more information, see [Create a hybrid partition](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#concept-2234558).
    
-   Read-only nodes support custom memory temporary tables (currently only the MEMORY engine and MyISAM engine are supported).
    
-   Supports the ReadableProto feature. By specifying the Protobuf protocol, you can directly read information serialized and stored in a BLOB type field on the database.
    
-   Optimized DDL sorting: Changed from two-way merge to multi-way merge to reduce the number of IOs and improve the performance of adding an index with DDL.
    
-   Added the `oss_prefix` parameter to the syntax for creating an OSS server, used to configure the OSS file path.
    

#### **Bug fixes**

**Description**

-   Fixed an unordered result issue in concurrent execution when `group_by_implicit_sorting` selected an index for a `group by` column.
    
-   Fixed an issue where `cost` and `rows` were incorrect in the `Hash Join` result displayed by the `EXPLAIN FORMAT=TREE` statement.
    
-   Fixed an issue of excessive physical replication latency under low cluster load.
    
-   Fixed an issue where the LRU List cleanup was blocked and could not release a Page when there were too many dirty pages in the Buffer Pool and flushing was slow.
    
-   Fixed a database crash caused by an overly long record generated when rolling back an Update operation after an `instant add column`.
    

### **8.0.2.2.4 (May 31, 2022)**

#### **New features**

**Description**

Supports users creating and using Federated engine tables.

#### **Bug fixes**

**Description**

-   Fixed a potential incorrect result set issue with SKIP\_SCAN when multiple sets of data existed in the index prefix.
    
-   Fixed an incorrect result set issue with SKIP\_SCAN after data in the database was marked for deletion.
    
-   Fixed an issue where the fast query cache feature blocked the synchronization of redo logs when the read-only node obtained a metadata lock (MDL).
    

### **8.0.2.2.3 (April 19, 2022)**

#### **Bug fixes**

**Description**

Fixed an issue where Using index for group by returned an incorrect result.

### **8.0.2.2.2 (2022-03-31)**

#### **Performance optimization**

**Note**

-   PolarDB's parallel query supports a multi-node parallel execution engine. For a single query, some or all Workers can be scheduled to run on remote nodes. This process uses the computing resources of multiple nodes in the cluster. Details are as follows:
    
    -   The degree of parallelism for a parallel query can exceed the bottleneck of a single node. This accelerates analytical queries, such as large queries.
        
    -   Scheduling queries to idle nodes based on the global resource load accelerates the queries and improves resource utilization.
        
    -   You can create multiple cluster groups to form a computing resource pool. This provides more flexible elasticity for computing resources.
        
-   The parallel query parameter `parallel_query_switch` has a new switch `restrict_on_limit_without_order`, which controls parallel queries with a limit but no order by.
    
-   PolarDB now supports condition pushdown to a materialized derived table.
    

### **8.0.2.2.1 (2022-03-15)**

#### **New features**

**Description**

The `SET INTERVAL` syntax is added to modify the interval type and value of interval range partitioning. You can also use this syntax to transform a range-partitioned table into an interval range partitioned table, and vice versa. For more information, see [Modify interval range partitioning](/help/en/polardb/polardb-for-mysql/user-guide/modify-an-interval-range-partition#concept-2189088) and [Transform a partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/switch-an-interval-range-partitioned-table#concept-2182386).

#### **Performance optimizations**

**Note**

-   OSS external tables are supported. For more information, see [Access OSS data through an OSS external table](/help/en/polardb/polardb-for-mysql/user-guide/use-oss-foreign-tables-to-access-oss-data#task-2187356).
    

#### **Issue resolution**

**Description**

-   Fixed an issue where the `history list` could not be deleted, causing the `undo log` to expand.
    
-   Fixed a failure when creating a partitioned table with `CREATE TABLE .. LIKE.. LIST DEFAULT HASH`.
    
-   Fixed a display issue of `UNIQUE CHECK IGNORE` in the system table `mysql.tables`.
    

### **8.0.2.2.0 (January 12, 2022)**

#### **Performance optimizations**

**Description**

-   Enhanced the [Elastic Parallel Query](/help/en/polardb/polardb-for-mysql/user-guide/elastic-parallel-query/) capability. The linear acceleration capability has been upgraded, and a multi-stage parallel computing capability has been introduced.
    
-   Enhanced partitioned table capabilities. More partitioned table types are supported, and Interval partitioning is supported. For more information, see [Partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/overview-68#concept-2181254).
    
-   Supports subquery decorrelation.
    
-   In conjunction with PolarProxy, supports defining sensitive fields through stored procedures and tagging the metadata of the values of these sensitive fields.
    
-   Added the STATUS variable `Online_altered_partition` to count the number of times `ALTER TABLE ADD PARTITION` and `ALTER TABLE DROP PARTITION` operations are performed online.
    
-   The database kernel supports transaction breakpoint resume and read-only nodes reading uncommitted transactions.
    

#### **Bug fixes**

**Description**

-   Supports the `SELECT FOR UPDATE WAIT N` and `SELECT FOR SHARE WAIT N` syntax. Here, N represents the timeout in seconds for a single row lock. If a query needs to lock multiple rows, the time is not accumulated. Timeout detection is performed only for a single row. If the wait time exceeds N seconds, a lock wait timeout error `Lock wait timeout exceeded; try restarting transaction` is returned.
    
-   Fixed an issue where the optimizer did not choose a better index range path for some `GROUP BY` statements.
    
-   Fixed an incorrect result from the GROUP\_CONCAT function caused by an arithmetic overflow when the `group_concat_max_len` parameter had a large value.
    
-   Supports modifying the database cache size.
    
-   Avoids unnecessary traversal of partitioned table partitions to improve query efficiency.
    
-   Fixed a DDL operation failure on an encrypted table.
    
-   Optimized `master_key_id_mutex` to allow DDL operations to be executed in parallel.
    
-   Fixed a replay log crash on a read-only node under high concurrent pressure.
    
-   Fixed a crash at `m_recv_bits.is_set(fold)` on a read-only node during physical replication under high concurrent pressure.
    

## **2021**

### **8.0.2.1.4.1 (2021.10.26)**

#### **Performance optimization**

**Description**

The default value of the `innodb_adaptive_hash_index` parameter has been changed from `ON` to `OFF`.

#### **Bug fixes**

**Note**

The database cache size can be modified.

## **2020**

### **8.0.2.1.4 (December 1, 2020)**

#### **New features**

**Description**

Supports the official MySQL 8.0.20 [Index Hints](https://dev.mysql.com/doc/refman/8.0/en/optimizer-hints.html#optimizer-hints-index-level) feature.

#### **Bug fixes**

**Description**

-   Fixed a stability issue with parallel Hash Join.
    
-   Fixed an incorrect estimation of the number of rows corresponding to each index key in the statistics.
    
-   Fixed an error when processing empty data while scanning a shared temporary table in parallel.
    
-   Fixed a data processing error in the official REGEXP\_REPLACE function.
    
-   Fixed a crash in the official version for complex queries containing subquery constants.
    
-   Fixed an issue where filesort returned incorrect data.
    

### **8.0.2.1.3 (October 26, 2020)**

#### **Performance optimizations**

**Description**

-   Enhanced the cost estimation model performance for Hash Join.
    
-   Supports parallel Hash Join, including parallel Build and Probe phases.
    

#### **Bug fixes**

**Description**

-   Fixed an incorrect display of the number of parallel partitions in a parallel execution plan.
    
-   Fixed an abnormal crash issue with a parallel subquery.
    
-   Fixed an issue where multiple worker threads could not produce random results when using the RAND() function in a parallel query.
    

### **8.0.2.1.2 (September 27, 2020)**

#### **Performance optimizations**

**Description**

PolarDB parallel processing now fully supports the latest Volcano model iterative executor.

### **8.0.2.1.1 (August 26, 2020)**

#### **Performance optimizations**

**Description**

Optimized the write performance of the cluster.

#### **Bug fixes**

**Description**

Fixed a memory leak issue.

### **8.0.2.1.0 (July 22, 2020)**

#### **New feature**

**Description**

Adds the [Warm Buffer Pool](/help/en/polardb/polardb-for-mysql/user-guide/persistent-cache-pool-warm-buffer-pool#main-2363393). Data in the Buffer Pool persists during crash restarts and upgrades. This feature significantly speeds up restarts and prevents performance degradation after a restart.

#### **Performance optimizations**

**Description**

-   EXPLAIN now supports displaying parallel plans. Use FORMAT=TREE to view the parallel execution plan tree.
    
-   Parallel query now supports hash join, which improves JOIN performance for queries that do not use an index. For more information, see [Parallel acceleration of Hash Join](/help/en/polardb/polardb-for-mysql/user-guide/hash-joins-in-parallel-queries#concept-2567762).
    
-   Adds support for the Resource Manager feature, which lets you monitor CPU and memory resources. For more information, see [Resource Manager](/help/en/polardb/polardb-for-mysql/resource-manager#concept-2567758).
    
-   Adds support for Performance Agent. This agent collects and aggregates internal performance data from nodes in a PolarDB for MySQL cluster. Query the PERF\_STATISTICS memory table to obtain performance data for specific metrics. For more information, see [Performance Agent](/help/en/polardb/polardb-for-mysql/user-guide/performance-agent#concept-2567756).
