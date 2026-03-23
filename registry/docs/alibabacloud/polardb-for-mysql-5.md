This topic provides the release notes for PolarDB for MySQL 5.6.

## **5.6.1.0.46.1**

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed a rare issue where the background purge process could corrupt a secondary index during a transaction rollback.
    

2025-08-28

## **5.6.1.0.46**

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed a potential crash on read-only nodes caused by an uninitialized Hist\_View.
    
-   Fixed a potential cluster crash that occurred when updating a NULL value to an empty string in tables that use the REDUNDANT row format and contain columns added with second-level precision.
    
-   Fixed an issue where a [database and table restoration](/help/en/polardb/polardb-for-mysql/user-guide/method-1-for-database-and-table-restoration-restore-data-from-a-backup-set) job was interrupted if the database or table name in the job parameters contained uppercase letters.
    
-   Fixed an issue where BackQuery queries returned an error if consistent read was not ensured.
    
-   Fixed an issue where recording \`IMPORT TABLE\` restore SQL statements to the binary log could interrupt downstream binary log dump replication.
    

2025-06-18

## **5.6.1.0.45**

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed a system variable compatibility issue where setting a `flagset` type variable, such as `optimizer_switch`, with duplicate entries no longer causes an error.
    
-   Fixed an issue where a read-only node would continuously fail to provide services after reconnecting to the RW node.
    

2025-01-20

## **5.6.1.0.44**

**Category**

**Description**

**Release date**

Performance optimizations

-   Optimized the performance stability of the file system when table files are frequently created and deleted during DDL operations.
    

2024-10-18

Fixed issues

-   Fixed a crash that could occur when a read-only node with the RO No Sync feature enabled was promoted to an RW node through a high availability (HA) switchover.
    
-   Fixed an issue where user threads on a read-only node waited too long for a free page when the buffer pool reached its capacity limit.
    
-   Fixed a conflict between the advanced transaction splitting feature of the proxy and the [Fast Query Cache](/help/en/polardb/polardb-for-mysql/user-guide/fast-query-cache) feature that affected result sets.
    
-   Fixed an issue where the auto-increment value could roll back to 0 after all data in a table was cleared.
    

## **5.6.1.0.43**

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added the preemptive DDL feature to resolve metadata lock (MDL) acquisition failures during DDL synchronization.
    
-   Optimized the page read performance of read-only nodes on the distributed file system (PolarFileSystem).
    
-   Optimized thread priorities in the distributed file system (PolarFileSystem) to ensure timely processing of transaction requests and improve DDL performance in PolarDB for MySQL.
    
-   The [Fast Query Cache](/help/en/polardb/polardb-for-mysql/user-guide/fast-query-cache) feature now includes information about the number of returned rows. [SQL Explorer and Audit](/help/en/das/user-guide/sql-explorer-and-audit-5/) can display the number of rows returned by queries that hit the cache.
    

2024-07-08

Fixed issues

-   Fixed an issue where system O&M access affected the status metrics of [slow SQL statements](/help/en/polardb/polardb-for-mysql/user-guide/slow-sql-query).
    
-   Fixed an issue where the result set was incorrect when a function was used in the HAVING clause.
    

## 5.6.1.0.42

**Category**

**Description**

**Release date**

Fixed issues

-   Added a mechanism to reload the latest auto-increment value by running \`flush table\` when an auto-increment rollback occurs. This avoids the need to restart the RW node or run \`ALTER TABLE\`, reducing the impact.
    
-   Fixed an `auto-increment duplicate key` issue that occurred when an `insert` statement was executed on a [partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/overview-46) after a DDL statement modified its partitions.
    
-   Fixed a potential crash of the RW node triggered by a DDL statement when logical read-ahead was enabled.
    

2024-04-24

## 5.6.1.0.41

**Category**

**Description**

**Release date**

New features and performance optimizations

Optimized the database and table restoration feature. For example, the restoration speed is increased and task rollback on failure is supported.

2024-01-05

Fixed issues

-   Fixed an issue where abnormal checkpoints occurred during an undo truncate process.
    
-   Fixed an issue where dirty page flushing on the RW node was blocked because the RW node did not terminate its replication relationship with a read-only node whose physical server had failed.
    
-   Fixed an issue where the standby node lost the physical replication reconnection mechanism after a Degrade operation was performed on the RW node.
    
-   Fixed an issue where the migration link was interrupted due to a PolarDB cluster restart during a one-click upgrade from ApsaraDB RDS for MySQL to PolarDB for MySQL.
    
-   Fixed an issue where adding a new read-only (RO) node failed because the registration offset of the RO node was too low during the new database and table restoration process.
    
-   Fixed an error that occurred when performing a DDL operation on a table in the discarded state.
    

## 5.6.1.0.40

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports an SQL blacklist feature by setting the `Concurrency_count` parameter in the `concurrency_control` system table to 0.
    
-   Added the `innodb_polar_import_tablespace_strict_mode` parameter. The default value is **ON**. When this parameter is on, an error is reported if the table schema contains a full-text index during a database and table restoration operation.
    

2023-09-07

Fixed issues

-   Fixed an issue where a read-only (RO) node would crash if you connected to the database through the RO node to read data after an undo truncate operation was completed on the read/write (RW) node.
    

-   Fixed an issue where the HA process was stuck when an HA switchover was performed to promote an RO node to an RW node.
    

## 5.6.1.0.39.1

**Category**

**Description**

**Release date**

Fixed issues

Fixed an issue where SQL latency increased due to excessive pressure on the local disk after audit logging was enabled.

2023-08-02

## 5.6.1.0.39

**Category**

**Description**

**Release date**

New features and performance optimizations

-   The digest value of an SQL statement is no longer calculated when the statement is executed without an added Statement Outline.
    
-   Supports recording DDL and LOCK TABLE statements to system tables.
    
-   Added the `innodb_polar_import_tablespace_strict_mode` parameter. The default value is **ON**. When this parameter is on, an error is reported if the table schema contains a full-text index during a database and table restoration operation.
    
-   Added the `Innodb_trx_history_list_len` monitoring metric to view the length of the undo history list.
    
-   Optimized the internal lock granularity of PolarFS, significantly improving performance in some high-payload scenarios.
    

2023-07-11

Fixed issues

-   Fixed an issue where the secondary node did not trigger the reconnection mechanism when the primary node was shut down and restarted.
    
-   Fixed an issue where a regular user could delete the `performance_schema` database.
    
-   Fixed a potential error that occurred when running a query on an RO node while an `ALTER TABLE ... IMPORT TABLESPACE` operation was running on the RW node.
    
-   Fixed an issue where the checkpoint LSN did not advance as expected.
    
-   Fixed a replication delay issue that occurred when replaying redo logs of a wide table on an RO node.
    
-   Fixed an issue where a large value for the `group_concat_max_len` parameter caused an arithmetic overflow, leading to an incorrect result from the `GROUP_CONCAT` function.
    

## 5.6.1.0.38.1

**Category**

**Description**

**Release date**

Fixed issues

Fixed an issue where an abnormal internal counter in the thread pool could cause a backlog of SQL requests during concurrent recording of Redis Slow Log.

2023-06-14

## 5.6.1.0.38

**Category**

**Description**

**Release date**

New features and performance optimizations

Supports changing passwords for high-privilege accounts using the `SET PASSWORD` command.

2023-04-24

Fixed issues

-   Fixed a read timeout that occurred when establishing physical replication on a read-only node, which prevented database connection.
    
-   Fixed an issue where undo logs could not be recycled after the undo log recycling feature was enabled.
    
-   Fixed an issue where querying `information_schema` caused a subsequent drop in the cache hit rate due to table cache pollution.
    

## 5.6.1.0.37

**Category**

**Description**

**Release date**

New features and performance optimizations

Thread pool optimizations:

-   You can use the `thread_pool_high_priority_users` parameter to configure a list of high-priority users. The thread pool prioritizes allocating threads to meet the needs of high-priority users.
    
-   Added a slow query timeout mechanism. The thread pool ignores the number of threads in a slow query state when calculating the total number of threads. This ensures the total number of threads is no longer limited by the number of slow query threads.
    

2023-03-16

## 5.6.1.0.36

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports the [statement outline](/help/en/polardb/polardb-for-mysql/user-guide/statement-outline#concept-1664234) feature.
    
-   Adjusted the timeout parameters for physical replication connections to prevent connection issues when the physical server of the RW node fails.
    

2023-01-06

## 5.6.1.0.35.1

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Optimized the low limit in \`order by limit\` scenarios to select a better execution plan based on execution cost. A control switch, `loose_low_limit_check_enabled`, is added to choose whether to use the low limit optimization method. The default value is **ON**.
    
-   In \`order by limit\` scenarios, a control switch, `loose_prefer_ordering_index`, is added to control the optimization method for the ordering index. The default value is **ON**, which prioritizes sorting optimization using the \`order by\` column index.
    

2022-10-27

## 5.6.1.0.35

**Category**

**Description**

**Release date**

New features and performance optimizations

Optimized the memory overhead of accessing \`information\_schema.tables\`.

2022-10-14

## 5.6.1.0.34

**Category**

**Description**

**Release date**

New features and performance optimizations

Supports the DDL read-ahead feature to improve the efficiency of index creation.

2022-07-13

Fixed issues

Fixed an issue where the LRU List cleanup was blocked, preventing page release, in scenarios with excessive dirty pages in the Buffer Pool and slow dirty page flushing.

## 5.6.1.0.32

**Category**

**Description**

**Release date**

New features and performance optimizations

Supports the hot replica feature to further optimize HA efficiency.

2022-03-15

Fixed issues

Fixed an issue where running the `show engine innodb status` command displayed full deadlock information when `innodb_show_verbose_deadlock` was set to `ON` (the default value).

## 5.6.1.0.30

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed unstable statistics information for partitioned tables.
    
-   Fixed a number length encoding error when the message length is 251.
    

2021-11-10

## 5.6.1.0.29

**Category**

**Description**

**Release date**

New features and performance optimizations

-   The database kernel supports resumable transaction transmission.
    
-   Supports Fast Query Cache. For more information, see [Fast Query Cache](/help/en/polardb/polardb-for-mysql/user-guide/fast-query-cache#concept-1955745).
    

2021-09-09

Fixed issues

Accelerated redo log application on read-only nodes and secondary clusters to improve the synchronization efficiency of the primary node.

## 5.6.1.0.28

**Category**

**Description**

**Release date**

New features and performance optimizations

Added the polar\_replica\_work\_on\_nonblock\_mdl\_mode parameter. When this parameter is enabled, uncommitted transactions with RU/RC isolation levels on read-only nodes no longer block DDL operations on the primary node. Also, the transactional properties of table definitions are no longer guaranteed on read-only nodes.

2021-07-23

Fixed issues

Optimized the loading speed of tablespace metadata. For database instances with over a million table files, this significantly shortens the recovery time after a primary node crash and the startup time for secondary nodes.

## 5.6.1.0.27

**Category**

**Description**

**Release date**

Fixed issues

-   Optimized the \`truncate polar logs lsn\` command on standby nodes to use 4 KB alignment when deleting files.
    
-   Changed KICKOUT to a non-reserved keyword.
    
-   Adjusted the policy for whether to immediately trigger a checkpoint when a read-only node first registers with the primary node. A checkpoint may not be triggered if the LSN difference is less than a specific threshold.
    
-   The \`load polar logs\` command now supports adding conditional statements.
    
-   Fixed an issue with duplicate auto-increment values.
    

2021-06-01

## 5.6.1.0.26

**Category**

**Description**

**Release date**

Fixed issues

-   Fixed a potential connection failure when running \`FLUSH PRIVILEGES\` or \`FLUSH GRANT\` commands for batch authorization.
    
-   Fixed incorrect partitioned table estimations caused by the premature termination of the estimation logic in some cases.
    
-   Fixed incorrect results from \`SHOW PROCESSLIST\` in some scenarios.
    
-   Fixed an issue where creating or deleting a temporary table in a stored procedure could cause the cluster to become unavailable when the `session_track_temporary_tables` system variable was enabled.
    

2021-03-19

## 5.6.1.0.25

**Category**

**Description**

**Release date**

New features and performance optimizations

Optimized the database-level and table-level restoration feature to improve data restoration speed.

2021-02-05

Fixed issues

-   Fixed an issue where a read-only node became unavailable after reading a truncated undo page.
    
-   Fixed an issue where changing the primary zone might fail on a cluster that had already performed a primary/secondary failover.
    

## 5.6.1.0.24

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Optimized the PolarDB engine initialization process to shorten the engine startup time in large-table scenarios.
    
-   You can now view the **Kernel Version** of the cluster on the **Basic Information** page.
    
-   The default value of the `innodb_adaptive_hash_index` parameter is changed from `ON` to `OFF`.
    

2021-01-22

Fixed issues

-   Fixed an issue where Undo Log could not be truncated during migration from RDS to PolarDB.
    
-   Fixed an issue where new system tables could not be added.
    
-   Fixed an issue where the primary node became unavailable during database and table restoration.
    
-   Fixed incorrect sorting when query results were of the DECIMAL type.
    
-   Fixed several issues that could cause the MySQL service process to crash in special circumstances.
    

## 5.6.1.0.23

**Category**

**Description**

**Release date**

Fixed issues

Fixed memory leaks on read-only nodes.

2021-01-04

## 5.6.1.0.22

**Category**

**Description**

**Release date**

New features and performance optimizations

PFS now supports directory indexing to improve cluster performance in scenarios with a massive number of tables.

2020-12-25

Fixed issues

-   Fixed an issue where the cluster became unavailable due to incorrect node roles after a primary/secondary failover in some cases.
    
-   Fixed a crash on read-only nodes caused by an uninitialized Statement Queue.
    
-   Fixed an issue where new system tables were not initialized after a primary/secondary failover.
    
-   Fixed an issue where the thread pool and Connection Control features were enabled simultaneously.
    
-   Fixed an issue where the cluster became unavailable due to duplicate IDs in the full-text index.
    
-   Fixed query failures on read-only nodes in some cases.
    
-   Fixed a replication interruption caused by an abnormal exit of the log replication thread.
    

## 5.6.1.0.21

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports [Full restoration method 2: Restore to a point in time](/help/en/polardb/polardb-for-mysql/user-guide/method-2-for-full-restoration-point-in-time-restoration#task-2066967).
    
-   Supports the [Transparent Data Encryption (TDE)](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster#task-2462076) feature.
    
-   PFS supports mounting multiple disks as required for single-table restoration.
    
-   Optimized the resource consumption of the Adaptive Hash Index (AHI) lock in physical replication.
    

2020-11-12

Fixed issues

-   Fixed an out-of-memory (OOM) issue that occurred when using DYNAMIC RANGE AND INDEX MERGE in SELECT statements.
    
-   Fixed a cluster crash that occurred when creating or deleting an account in some cases.
    
-   Fixed an issue where STANDBY nodes could not be reconnected in some cases.
    
-   Fixed an issue where a cluster failed to start when an exception occurred during a primary/secondary failover.
    
-   Fixed an issue where the binary log thread was in an incorrect state in some cases.
    

## 5.6.1.0.20

**Category**

**Description**

**Release date**

New features and performance optimizations

Improved the efficiency of physical replication in some cases.

2020-10-27

Fixed issues

-   Fixed a cluster crash that could occur when executing the `CREATE TABLE... SELECT` command.
    
-   Fixed a memory leak in a stored procedure caused by excessive use of derived tables.
    
-   Fixed an issue where data was not restored to the correct point in time or the restore job failed during a point-in-time restore.
    
-   Fixed an issue with excessive output of PolarFS exception logs.
    
-   Fixed table loss when performing DDL operations after foreign key checks were disabled.
    
-   Fixed a crash on read-only nodes when truncating multiple temporary tables at the same time.
    

## 20200831

**Category**

**Description**

**Release date**

New features and performance optimizations

PFS supports local disks, mounting writable snapshots, and performance optimizations.

2020-09-22

Fixed issues

-   Fixed a cluster crash that could occur when using the Statement Queue feature in some cases.
    
-   Fixed an issue where Corefiles occupied too much space.
    
-   Fixed inconsistent statistics information between the primary node and read-only nodes.
    
-   Fixed an issue where other read-only nodes could not connect to the new primary node after a read-only node was promoted to primary.
    
-   Fixed inconsistent full-text index caches between the primary node and read-only nodes.
    

## 20200616

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports the Statement Queue feature. For more information, see [Statement Queue](/help/en/polardb/polardb-for-mysql/user-guide/statement-queue#task-2315487).
    
-   Optimized the replication delay between RO and RW nodes.
    
-   Supports replicating the MDL lock for \`LOCK TABLE\`.
    

2020-07-01

Fixed issues

-   Fixed issues in MDL lock replication.
    
-   Fixed an issue where an FTS INDEX was created on a system table.
    
-   Fixed some issues with hot spot update optimization.
    

## 20200601

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Supports hot row update optimization. For more information, see [Hot row optimization](/help/en/polardb/polardb-for-mysql/user-guide/hot-row-optimization#concept-2567754).
    
-   Supports the Statement Concurrency Control feature. For more information, see [Concurrency Control](/help/en/polardb/polardb-for-mysql/user-guide/concurrency-control#concept-1663731).
    

2020-06-05

Fixed issues

Fixed a write performance degradation issue caused by the thread pool.

## 20200507

**Category**

**Description**

**Release date**

New features and performance optimizations

-   Added a concurrency control feature.
    
-   Added a parameter to control the free space on index pages.
    
-   Optimized Simulate AIO.
    

2020-05-13

Fixed issues

-   Fixed a performance degradation issue caused by the bool flag class.
    
-   Fixed an issue where the cluster became unavailable because the \`pfs\_umount\` table was not closed.
