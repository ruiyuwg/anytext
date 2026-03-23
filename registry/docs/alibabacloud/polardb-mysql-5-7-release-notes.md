This topic contains the release notes for PolarDB for MySQL 5.7, which describe the features of each version.

## **5.7.1.0.40**

**Category**

**Description**

**Release date**

Fixed issues

Fixed an issue where creating an outline for an extra-long SQL statement (> 1 KB) could lead to a truncated SQL digest, which broke subsequent plan matching.

To ensure execution plan stability, the system now prevents the creation of such outlines and returns an error, avoiding potential silent failures. If you must create an outline for such a long SQL statement, you can increase the `max_digest_length` parameter to a value at least 1.2 times the length of the target SQL text.

2025-11-27

## **5.7.1.0.39**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added compression for Bulk Load redo logs during DDL operations.
    
-   Added support for compressing redo logs for `BLOB` data types.
    
-   Optimized `BLOB` data write performance during table rebuilds.
    

2025-08-25

Fixed issues

-   Fixed a potential cluster crash during a High Availability (HA) failover triggered by zero-filling under high write loads.
    
-   Fixed an issue where the `LOCK TABLES` permission was required to execute `SELECT ... FOR UPDATE` statements.
    
-   Fixed a rare issue where the background purge process could corrupt a secondary index during a transaction rollback.
    

## **5.7.1.0.38**

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed an issue where a cluster could crash when a NULL value was updated to an empty string. This occurred in tables that used the REDUNDANT row format and contained columns added using the instant add column feature.
    
-   Fixed an occasional out-of-bounds read/write issue for ROW LOGs when you performed online DDL operations on tables with virtual columns.
    
-   Fixed an issue where `memory profile` could not be enabled by restarting a version 5.7 production cluster.
    
-   Optimized the configuration of variables for [global consistency (high-performance mode)](/help/en/polardb/polardb-for-mysql/user-guide/global-consistency-high-performance-mode/). The configuration scope is changed from the system level to the connection level, and you can enable or disable it in PolarProxy.
    
-   Fixed an issue where a cluster crashed during a DDL operation because a read-only node failed to find a file it tried to open.
    
-   Fixed an issue where a "file not found" error was reported when you executed SHOW BINLOG EVENTS on a read-only node.
    
-   Fixed a potential corruption issue in secondary indexes that were created on virtual columns.
    
-   Fixed a compatibility issue between the [database and table restoration](/help/en/polardb/polardb-for-mysql/user-guide/method-1-for-database-and-table-restoration-restore-data-from-a-backup-set) feature and the file space extension feature. The issue occurred because the `loose_innodb_initialize_in_space_extend` parameter could not be set to 0.
    
-   Fixed an issue where the [database and table restoration](/help/en/polardb/polardb-for-mysql/user-guide/method-1-for-database-and-table-restoration-restore-data-from-a-backup-set) task was interrupted. This was caused by the feature that prevents setting the space extension parameter to 0.
    
-   Fixed an issue where data could not be recovered using IMPORT TABLESPACE after the optimized BLOB write process was unexpectedly interrupted.
    

2025-06-20

## **5.7.1.0.37**

**Category**

**Description**

**Release date**

New features and performance optimizations

Added the `sm4_encrypt()` and `sm4_decrypt()` functions to implement field-level access encryption using the SM4 algorithm.

2025-01-13

Fixed issues

-   Fixed a compatibility issue with system variables. The system no longer reports an error for duplicate items when you set a `flagset` variable, such as `optimizer_switch`.
    
-   Fixed an issue where Redo Log synchronization was too slow when `Innodb_flush_log_at_trx_commit` was set to 0. This could cause an [SCC](/help/en/polardb/polardb-for-mysql/user-guide/scc) consistency timeout.
    
-   Fixed a rare issue where a secondary node could crash during a reverse search on an index structure. This was caused by the loss of a synchronization offset.
    
-   Fixed an issue where a cluster failed to start after crashing during a non-atomic DDL operation.
    
-   Fixed an issue in earlier community versions where the JOIN ORDER in a multi-table UPDATE statement was not correctly optimized.
    

## 5.7.1.0.36

**Category**

**Description**

**Release date**

New features and performance optimizations

-   You can now [create custom temporary tables on read-only nodes](/help/en/polardb/polardb-for-mysql/user-guide/to-create-a-custom-temporary-table-on-a-read-only-node). This feature supports only the MEMORY and MyISAM engines.
    
-   Optimized the instant add column feature to support adding columns to [partitioned tables](/help/en/polardb/polardb-for-mysql/user-guide/overview-46).
    
-   Optimized the lock contention between the buffer pool scale-out process and user threads to improve the scale-out experience.
    

2024-11-28

Fixed issues

-   Fixed an issue where a conflict between the advanced transaction splitting feature of PolarProxy and the [Fast Query Cache](/help/en/polardb/polardb-for-mysql/user-guide/fast-query-cache) feature affected result sets.
    
-   Fixed an issue where the [new database and table restoration process](/help/en/polardb/polardb-for-mysql/overall-process-and-estimated-time#title-i13-vg3-6x4) was interrupted after the same table was restored multiple times.
    
-   Fixed an issue where a cluster could crash when you executed the `CHECK TABLE` statement on a read-only (RO) node.
    
-   Fixed a rare issue where the redo log of some pages was written incorrectly. This occurred if you modified the `innodb_bulk_load_page_grained_redo_enable` parameter within the time window during a parallel DDL execution.
    
-   Fixed an issue where the auto-increment value of a table was rolled back. This occurred when you executed an `INSERT ... ON DUPLICATE KEY UPDATE` statement after an RO node was switched to an RW node.
    
-   Disabled the `index merge intersection` access path for DML statements by default to improve performance and prevent deadlocks.
    

## 5.7.1.0.35

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added support for physically migrating data from a PolarDB 5.6 cluster to a PolarDB 5.7 cluster.
    
-   Added a feature to automatically [encrypt new tables with TDE](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster) after TDE is enabled.
    
-   Added a fine-grained data modification tracking capability to improve the performance of [global consistency (high-performance mode)](/help/en/polardb/polardb-for-mysql/user-guide/scc).
    
-   Added support for [user-defined in-memory temporary tables](/help/en/polardb/polardb-for-mysql/user-guide/to-create-a-custom-temporary-table-on-a-read-only-node) on read-only nodes. This feature currently supports only the MEMORY and MyISAM engines.
    
-   Optimized the read-only variable `max_digest_length` to be dynamically configurable.
    
-   Improved the performance of simulated AIO.
    
-   Optimized the outline database to allow the outline database name to be empty during each execution.
    
-   Optimized PolarDB I/O threads to be dynamically adjustable without a cluster restart.
    

2024-08-30

Fixed issues

-   Fixed a lock conflict issue during dynamic buffer pool scale-in operations.
    
-   Fixed issues related to purge prefetching for the `blob` data type.
    
-   Fixed an issue where auto-increment values in a [partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/overview-46) were rolled back after an HA switchover.
    
-   Fixed a performance issue with large JSON serialization.
    
-   Fixed an issue of insufficient precision for floating-point numbers in JSON.
    
-   Fixed a deadlock issue caused by record locks that resulted from unnecessary unique key (UK) constraints.
    
-   Fixed an issue where user threads waited too long for a free page when the buffer pool of an RO node was full.
    
-   Fixed an issue where the auto-increment value could be rolled back to 0 after all data in a table was cleared.
    

## 5.7.1.0.34

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added the preemptive DDL feature to resolve metadata lock (MDL) acquisition failures during DDL synchronization.
    
-   Optimized thread priorities in PolarFileSystem to ensure that transaction requests are processed promptly. This improves the DDL performance of PolarDB for MySQL.
    
-   Optimized the page read performance of read-only nodes on PolarFileSystem.
    

2024-07-01

Fixed issues

-   Fixed an issue where the MDL system could become abnormal if the number of connections exceeded 65,536.
    

## 5.7.1.0.33

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Optimized the error message that is displayed when an RO node fails to synchronize an MDL.
    
-   Added the `polar_only_allow_discard_with_admin` parameter. When enabled, this parameter prohibits users from performing DISCARD operations. The default value is **ON**. You can configure this parameter as needed.
    
-   The [Fast Query Cache](/help/en/polardb/polardb-for-mysql/user-guide/fast-query-cache) feature is optimized to include the number of returned rows. For queries that hit the cache, the number of returned rows is displayed in the audit log.
    

2024-05-27

Fixed issues

-   Fixed an issue where system O&M access affected the slow\_queries status metric.
    
-   Fixed an issue where a comma (,) had to be added at the end when you used the `SET_VAR hint` to set the `loose_optimizer_switch` parameter.
    

## 5.7.1.0.32

**Category**

**Description**

**Release date**

New features and performance optimizations

-   After the global transaction identifier (GTID) feature is enabled, you can create and delete temporary tables in transactions.
    
-   The Variable-Setting Hint syntax is supported in the global consistency (high-performance mode) feature.
    
-   Optimized the performance of the thread pool when concurrent writing of multi-threaded binary logs is enabled.
    

2024-03-27

Fixed issues

-   Fixed an issue where TDE was incompatible with RDMA memory when forking a child process.
    
-   Fixed an issue where subsequent scale-out requests could not be processed after a buffer pool scale-in. This occurred because large SQL statements occupied many pages for a long time.
    
-   Fixed an issue where a node had to be restarted to recover from an auto-increment value rollback.
    
-   Fixed a deadlock issue that occurred in parallel DDL scenarios when DDL read-ahead was enabled.
    
-   Fixed an issue where a new INSERT request would encounter an "autoinc duplicate key" error after a DDL statement that modifies a partition was executed on a partitioned table.
    

## 5.7.1.0.31

**Category**

**Description**

**Release date**

New features and performance optimizations

Improved the speed at which the thread pool feature processes connection requests in low-concurrency scenarios.

2024-01-31

Fixed issues

-   Fixed an issue where a node could crash when the logical prefetching feature was used.
    
-   Fixed a memory leak issue that occurred when the logical prefetching feature was used.
    
-   Fixed an issue where a thread could not exit due to a full disk when a new process for database and table restoration was executed.
    
-   Fixed an issue where a new RO node failed to be added because the registration offset of the RO node was too low during the new database and table restoration process.
    

## 5.7.1.0.30.1

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed an issue where an auto-increment value rollback occurred after an HA switchover when autoinc\_persist was enabled.
    
-   Fixed an issue where an auto-increment value rollback occurred after repeated HA switchovers between the RW node and a standby or RO node.
    
-   Fixed an issue where the physical replication reconnection mechanism was lost on a standby node after a Degrade operation was performed on the RW node.
    

2023-12-11

## 5.7.1.0.30

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Optimized the database and table restoration feature. For example, the restoration speed is increased, and failed tasks can be rolled back.
    
-   Optimized the log output feature by deleting unnecessary error logs in fil\_space\_extend.
    

2023-11-23

Fixed issues

-   Fixed an issue where dirty page flushing on the RW node was blocked. This occurred when the physical machine of an RO node failed and the RW node did not terminate the replication relationship in special cases.
    
-   Fixed an issue where an auto-increment value rollback occurred after an HA switchover. This was caused by table cache eviction due to many tables.
    
-   Fixed an issue where the migration link was interrupted due to a PolarDB cluster restart when you upgraded an RDS for MySQL instance to a PolarDB for MySQL cluster with one click.
    
-   Fixed an issue where an abnormal checkpoint occurred during an undo truncate process.
    
-   Fixed an issue where an RO node did not use the polarfs dir fast scan interface to connect to the RW node upon startup.
    

## 5.7.1.0.29

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed a deadlock issue that occurred when a logical prefetch cross-page operation conflicted with an SMO merge operation.
    
-   Fixed an issue where temporary tables in the InnoDB engine could not be flushed.
    
-   Fixed an issue where a node could crash when you deleted the last CCL rule of the same SQL statement type that specified only a keyword but no schema or table.
    

2023-09-14

## 5.7.1.0.28.4

**Category**

**Description**

**Release date**

Fixed issues

Fixed an issue where write performance decreased because the page cleaner thread flushed too much data when the dirty page level was low.

2023-08-28

## 5.7.1.0.28.2

**Category**

**Description**

**Release date**

Fixed issues

Fixed an issue where SQL latency increased due to high pressure on local disks after audit logging was enabled.

2023-08-02

## 5.7.1.0.28

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added the `innodb_polar_import_tablespace_strict_mode` parameter. The default value is **ON**, which specifies that an error is reported if the table schema contains a full-text index during a database and table restoration operation.
    
-   Added the session-level `innodb_polar_scc` parameter to control whether the current connection request requires strong consistency. When the global consistency (high-performance mode) feature is enabled and `innodb_polar_scc=true` for the current connection, global consistency takes effect.
    

2023-07-23

Fixed issues

-   Fixed an issue where a regular user could delete the `performance_schema` database.
    
-   Fixed an issue where the checkpoint LSN did not advance as expected.
    
-   Fixed an issue where an error could be reported when you executed an `ALTER TABLE ... IMPORT TABLESPACE` operation on an RW node while performing a query on an RO node.
    
-   Fixed an issue where the reconnection mechanism was not triggered on a secondary node when the primary node was shut down and restarted.
    
-   Fixed an issue where the GROUP\_CONCAT function returned an incorrect result due to an arithmetic overflow when a large value was set for the `group_concat_max_len` parameter.
    
-   Fixed a mutex lock contention issue in high-concurrency range update scenarios after PolarTrans was dynamically enabled.
    
-   Fixed an issue where an RO node would crash if it connected to the database to read data after the undo log recycle mechanism was triggered on the RW node.
    

## 5.7.1.0.27.2

**Category**

**Description**

**Release date**

Fixed issues

Fixed an issue where SQL requests were stacked due to an abnormal internal counter in the thread pool during concurrent recording of slow query logs.

2023-06-14

## 5.7.1.0.27

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added support for recording DDL and LOCK TABLE statements to system tables.
    
-   Made the thread pool feature compatible with CCL. After the thread pool feature is enabled, if a user connection is blocked by CCL, the connection is marked within the thread pool. The thread pool then creates extra threads to execute SQL statements on other connections.
    
-   When you use Statement Outline, if a specified Index Hint does not exist, only an alert is reported instead of an error.
    
-   Optimized `show full tables from db_name like table_name`.
    
-   Added the `Innodb_scc_timeout_count` parameter for global consistency (high-performance mode) to record the number of timeouts during a query.
    
-   Added the `Innodb_scc_timeout_degrade_count` parameter for global consistency (high-performance mode) to record the number of times a query times out and is converted to an asynchronous query.
    
-   Optimized the Statement Outline process to skip digest hash calculation for a statement execution when no outline is available.
    
-   Improved the efficiency of truncating temporary tables.
    
-   Added support for querying GTID information on read-only nodes.
    
-   Optimized the internal lock granularity of PolarFS to significantly improve performance in some high-load scenarios.
    

2023-05-08

Fixed issues

-   Fixed an issue where a created event could not be deleted.
    
-   Fixed an issue where the database could not be connected due to a read timeout when physical replication was established on a read-only node.
    
-   Fixed an issue where undo logs could not be truncated.
    
-   Fixed a replication delay issue that occurred when a read-only node applied the Redo logs of a wide table.
    

## 5.7.1.0.26.2

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed an issue where a hot replica could unexpectedly crash when the global consistency (high-performance mode) feature was enabled.
    
-   Fixed an issue where PolarTrans logs could not be reclaimed after the RW node was restarted.
    

2023-03-25

## 5.7.1.0.26

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed an issue where the `AUTO_INCREMENT` value in a `CREATE TABLE` statement was lost after a primary/secondary failover.
    
-   Fixed an issue where the `innodb_buffer_pool_in_core_file` parameter setting in the `my.cnf` file did not take effect at cluster startup.
    
-   Fixed an issue of slow communication with the TDE plugin on instances with large memory specifications.
    

2023-02-27

## 5.7.1.0.25

**Category**

**Description**

**Release date**

New features and performance optimizations

-   The semicolon (;) at the end of the SQL statement in the query parameter is ignored for the following built-in stored procedures: `dbms_ccl.add_ccl_digest_rule`, `dbms_outln.add_index_outline`, and `dbms_outln.add_optimizer_outline`.
    
-   Statement Outline supports all UNION clauses.
    
-   Adjusted the timeout parameters for physical replication connections to prevent connection issues when the physical machine of the RW node fails.
    
-   Thread pool optimizations:
    
    -   You can use the `thread_pool_high_priority_users` parameter to configure a list of high-priority users. The thread pool preferentially allocates threads to requests from high-priority users.
        
    -   Added a bypass mechanism. You can configure the `bypass_thread_pool_ips` parameter for privileged connections. When a user connects to the database from an IP address in `bypass_thread_pool_ips`, the connection bypasses the thread pool.
        
    -   Added a slow query timeout mechanism. The thread pool ignores the number of threads in a slow query state when it calculates the total number of threads. This ensures that the total number of threads is no longer limited by the number of slow query threads.
        

2023-01-06

Fixed issues

Fixed an issue where database performance could be degraded in long-running transaction scenarios.

## 5.7.1.0.24

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added the `Innodb_scc_timeout_count` parameter for the global consistency (high-performance mode) feature to record the number of timeouts that occur during a query.
    
-   Added the `Innodb_scc_timeout_degrade_count` parameter for the global consistency (high-performance mode) feature to record the number of times that a query times out and is converted to an asynchronous query.
    

2022-11-11

Fixed issues

-   Fixed an issue where the physical replication module on the RW node occupied extra memory.
    
-   Fixed an issue where undo logs could not be cleared in special scenarios.
    
-   Fixed an issue where keepalive checks failed in special scenarios. This improves system stability in high-concurrency scenarios.
    

## 5.7.1.0.23.3

**Category**

**Description**

**Release date**

Fixed issues

Fixed an issue where RO nodes crashed due to file name hash conflicts.

2022-09-17

## 5.7.1.0.23

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added the global consistency (high-performance mode) feature. After this feature is enabled for a PolarDB cluster, RO nodes in the cluster provide strong consistency for read operations. For more information, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/scc#concept-2200031).
    
-   Optimized the DDL read-ahead feature to improve the efficiency of creating indexes.
    
-   Optimized DDL sorting. Two-way merging is changed to multi-way merging to reduce I/O operations and improve the performance of adding indexes using DDL.
    
-   Improved the performance of the thread pool in high-concurrency environments.
    

2022-08-30

Fixed issues

Fixed an issue where slow logs were not recorded when a database was deleted.

## 5.7.1.0.22

**Category**

**Description**

**Release date**

New features and performance optimizations

Added support for the DDL read-ahead feature, which improves the efficiency of index creation.

2022-06-17

Fixed issues

-   Index path selection optimization for an Ordering index does not consider the cost of table lookups.
    
-   Fixed an issue where the LRU list cleanup was blocked, preventing page release. This occurred when the buffer pool had too many dirty pages and flushing was slow.
    

## 5.7.1.0.21

**Category**

**Description**

**Release date**

New features and performance optimizations

Physical replication between primary and secondary nodes now supports millisecond-level latency.

2022-05-20

Fixed issues

-   Fixed an issue of excessive physical replication latency under low cluster loads.
    
-   Optimized the selection of an ordering index. The optimizer now prioritizes index paths that can use index conditions and provide ordering at the same time.
    
-   Fixed an issue where the optimizer did not choose a better index range path for some GROUP BY statements.
    
-   Fixed an issue where a checkpoint was not triggered when an RO node registered with an RW node.
    

## 5.7.1.0.20

**Category**

**Description**

**Release date**

New features and performance optimizations

Changed `OF`, `COMMIT_ON_SUCCESS`, `ROLLBACK_ON_FAIL`, and `TARGET_AFFECT_ROW` from reserved keywords to non-reserved keywords in SQL parsing.

2022-04-07

## 5.7.1.0.17

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added support for the hot row optimization feature. For more information, see [Hot row optimization](/help/en/polardb/polardb-for-mysql/user-guide/hot-row-optimization#concept-2567754).
    
-   Added support for the hot replica feature to further optimize high availability efficiency.
    

2022-01-14

## 5.7.1.0.16

**Category**

**Description**

**Release date**

Fixed issues

Optimized the policy for manually triggering checkpoints.

2021-12-14

## 5.7.1.0.15

**Category**

**Description**

**Release date**

New features and performance optimizations

Added the Fast Query Cache feature. For more information, see [Fast Query Cache](/help/en/polardb/polardb-for-mysql/user-guide/fast-query-cache#concept-1955745).

2021-11-17

## 5.7.1.0.14

**Category**

**Description**

**Release date**

Fixed issues

-   Provided an optimizer hint that lets you control whether to force views to merge. For more information, see the [official MySQL documentation](https://dev.mysql.com/worklog/task/?id=9307).
    
-   Added support for the `SELECT FOR UPDATE WAIT N` syntax. N indicates the timeout period in seconds and applies only to a single row lock. If a query needs to lock multiple rows, the system does not accumulate the time for multiple rows but detects the timeout for a single row. If the wait time exceeds N seconds, the system returns a lock wait timeout error: `Lock wait timeout exceeded; try restarting transaction`.
    

2021-10-19

## 5.7.1.0.13

**Category**

**Description**

**Release date**

New features and performance optimizations

A read-only node of a secondary cluster in a Global Database Network (GDN) can be promoted to the primary node by running the \`alter polar to slave\` command. This implements high availability for the secondary cluster.

2021-09-10

## 5.7.1.0.12

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Multiple connections are supported between the primary cluster and synchronization nodes in a GDN to improve the throughput of physical replication.
    
-   You can obtain binary logs from read-only nodes. For more information, see [Remotely obtain and parse binary logs of PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/remotely-obtain-and-parse-binary-log-records-from-a-cluster-of-the-polardb-for-mysql#concept-2009811).
    

2021-08-27

Fixed issues

-   Fixed an issue where Statement Concurrency Control rules that specified a database and table could not be matched.
    
-   Accelerated the application of redo logs on read-only nodes and secondary clusters to improve the synchronization efficiency of the primary node.
    

## 5.7.1.0.11

**Category**

**Description**

**Release date**

New features and performance optimizations

Added the polar\_replica\_work\_on\_nonblock\_mdl\_mode parameter. When this parameter is enabled, uncommitted transactions with RU/RC isolation levels on a read-only node no longer block DDL operations on the primary node. At the same time, the transactional properties of table definitions are no longer guaranteed on the read-only node.

2021-07-08

## 5.7.1.0.10

**Category**

**Description**

**Release date**

New features and performance optimizations

This version is compatible with MySQL 8.0 and supports the SELECT FOR UPDATE/SHARE SKIP LOCKED/NOWAIT syntax. For more information, see [MySQL 8.0](https://dev.mysql.com/worklog/task/?id=3597).

2021-06-15

Fixed issues

RO nodes support flushing InnoDB temporary table data to disk.

## 5.7.1.0.9

**Category**

**Description**

**Release date**

Fixed issues

-   Added support for Quick Launch of the storage engine in multi-table scenarios.
    
-   Fixed an issue where the database crashed when an Update operation on a virtual column was rolled back.
    

2021-05-13

## 5.7.1.0.8

**Category**

**Description**

**Release date**

New features and performance optimizations

Added a feature to control whether the primary node must immediately perform a checkpoint when a replication relationship is established between the read-only node and the primary node.

2021-04-19

Fixed issues

-   Changed KICKOUT to a non-reserved keyword.
    
-   Fixed an issue where encrypted information in a TDE-encrypted table could be lost during a primary/secondary failover, leading to decryption failure.
    

## 5.7.1.0.7

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added the parallel DDL feature to improve DDL performance. For more information, see [Parallel DDL](/help/en/polardb/polardb-for-mysql/user-guide/parallel-ddl#concept-1998449).
    
-   Added the innodb\_buffer\_pool\_in\_core\_file parameter to remove the buffer pool from the core file.
    
-   Index Hints now support the following keywords, which let the optimizer use or ignore specified indexes when processing queries:
    
    -   `GROUP_INDEX` or `NO_GROUP_INDEX`: Use or ignore the specified index for an index scan with a GROUP BY operation.
        
    -   `INDEX` or `NO_INDEX`: Force the server to use or ignore the specified index.
        
    -   `JOIN_INDEX` or `NO_JOIN_INDEX`: Force MySQL to use or ignore the specified index for any access method.
        
-   Join Order Hint now supports the following keywords, which let the optimizer select an appropriate table join order:
    
    -   `JOIN_FIXED_ORDER`: Force the optimizer to join tables in the order they appear in the FROM clause.
        
    -   `JOIN_ORDER`: Instruct the optimizer to join tables in the specified order. This hint applies to named tables. The optimizer can place unnamed tables anywhere in the join order, including between specified tables.
        
    -   `JOIN_PREFIX`: Instruct the optimizer to join the first few tables of the join execution plan in the specified order. This hint applies to named tables. The optimizer places all other tables after the named tables.
        
    -   `JOIN_SUFFIX`: Instruct the optimizer to join the last few tables of the join execution plan in the specified order. This hint applies to named tables. The optimizer places all other tables before the named tables.
        

2021-03-10

Fixed issues

-   Partitioned the token number lookup table and reserved some tokens to fix an issue where the digest hash value of the same statement was inconsistent after a new token was inserted.
    
-   Fixed an issue where a specification change failed because a read-only node could not be successfully registered on the primary node.
    
-   Fixed an issue where a cluster would exit abnormally if you created or deleted a temporary table in a stored procedure while the `session_track_temporary_tables` system variable was enabled.
    

## 5.7.1.0.6.3

**Category**

**Description**

**Release date**

Fixed issues

Fixed an issue where SHOW PROCESSLIST returned an incorrect result in some scenarios.

2021-02-22

## 5.7.1.0.6.2

**Category**

**Description**

**Release date**

Fixed issues

Fixed a rare issue where error code 1032 with the message `Can't find record in TABLE` was reported when a query that used Index Merge optimization was executed on a read-only node.

2021-02-10

## 5.7.1.0.6.1

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed an issue of abnormal dirty page flushing on read/write nodes.
    
-   Fixed an issue where the primary zone could not be changed for a cluster on which a primary/secondary failover had been performed.
    
-   Fixed a database crash caused by an incorrect call to THD (Thread Descriptor) when executing SHOW PROCESSLIST.
    

2021-02-02

## 5.7.1.0.6

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added support for the Statement Queue feature. For more information, see [Statement Queue](/help/en/polardb/polardb-for-mysql/user-guide/statement-queue#task-2315487).
    
-   Added support for the `Instant add column` feature. For more information, see [Instant add column](/help/en/polardb/polardb-for-mysql/user-guide/instant-add-column#concept-2021980).
    
-   Added support for the Returning feature. For more information, see [Returning](/help/en/polardb/polardb-for-mysql/user-guide/returning#concept-2042118).
    
-   The default value of the `innodb_adaptive_hash_index` parameter is changed from `ON` to `OFF`.
    

2021-01-29

Fixed issues

Fixed an issue where system tables were lost when the PolarDB kernel version was upgraded.

## 5.7.1.0.5

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed an issue where a read-only node would crash when you performed a query on it after the key of the primary node was modified.
    
-   Fixed an issue where a read-only node would crash when you analyzed a partitioned table on it.
    
-   Fixed an issue where the new primary node would crash due to tablespace inconsistency after a primary/secondary failover.
    

2020-12-31

## 5.7.1.0.4

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed an issue where data could not be inserted into a temporary table after a primary/secondary failover.
    
-   Fixed an issue where a read-only node became unavailable when a temporary tablespace was extended on it.
    
-   Fixed an issue where Simulated AIO did not work as expected.
    

2020-11-17

## 5.7.1.0.3

**Category**

**Description**

**Release date**

New features and performance optimizations

Added support for the [transparent data encryption (TDE)](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster#task-2462076) feature.

2020-10-21

Fixed issues

-   Fixed an issue of inconsistent statistics between the primary node and read-only nodes.
    
-   Fixed an issue where an error message was displayed in the result of SHOW PROCESSLIST.
    

## 5.7.1.0.2

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed an issue where .IDB files could not be extended after migration from RDS for MySQL 5.7.
    
-   Prohibited the execution of CF\_STATUS\_COMMAND-related commands during a primary/secondary failover to ensure normal operation.
    
-   Fixed an issue where the primary node became unavailable due to page contention between the background thread for updating statistics and the Truncate logic.
    

2020-08-28

## 5.7.1.0.1

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed an issue where maxscale became inaccessible because some PolarDB-exclusive commands were missing their corresponding command numbers.
    
-   Fixed an issue where a cluster created by [restoring from the recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/restore-a-released-cluster#task-2491537) became unavailable because the tablespace could not be found.
    
-   Fixed an issue where a PFS file failed to unmount and crashed because a file was not closed when the `promote replica` command was executed.
    

2020-07-30
