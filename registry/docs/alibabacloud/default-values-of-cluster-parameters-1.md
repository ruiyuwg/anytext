You can adjust database parameters to optimize performance, enhance security, or meet specific feature requirements. PolarDB for PostgreSQL pre-optimizes certain parameters from the community edition to provide good performance and stability in a cloud environment. The following sections provide a complete parameter reference and configuration recommendations for core parameters to assist with parameter tuning.

## Important parameters

The default parameter values for PolarDB for PostgreSQL are configured to optimize performance, availability, and reliability. These values may differ from the defaults in the community edition. Specifically, PolarDB sets the following parameters to default values to ensure optimal performance. You can modify them in the console as needed.

**Parameter**

**Description**

`synchronous_commit`

This parameter controls whether a transaction must wait for write-ahead logging (WAL) records to be written to disk before returning a success indicator to the client. Valid values are:

-   off (default): A transaction does not need to wait for WAL records to be written to disk before returning a success indicator to the client.
    
    **Note**
    
    Setting this parameter to off can improve the transaction commit efficiency of the database. This is because there is a delay between returning success to the client and ensuring transaction persistence. The maximum delay is three times the value of \`wal\_writer\_delay\`, which defaults to 10 ms.
    
-   on: A transaction must wait for WAL records to be written to disk before returning a success indicator to the client.
    
    **Note**
    
    If your application requires that a transaction is persisted to disk after it is committed, set this parameter to on in the console.
    
-   remote\_apply: A transaction must wait for WAL records to be written to disk before returning a success indicator to the client. It also requires confirmation that the data is applied to the local transaction log of the backup. This requires waiting for the backup to finish applying the transaction to ensure data consistency. This will cause a greater commit delay because it needs to wait for WAL replay.
    
-   remote\_write: A transaction must wait for WAL records to be written to the file system before returning a success indicator to the client.
    
-   local: A transaction must wait for WAL records to be written to disk, but there is no restriction on returning a success indicator to the client.
    

**Note**

Run the `SHOW synchronous_commit;` command to view the current setting of this parameter in the database.

`wal_level`

This parameter determines how much information is written to the WAL. Valid values are:

-   replica (default): The WAL does not contain the information required for logical decoding. This reduces the amount of WAL written, which can improve database write performance.
    
-   logical: Your business involves the logical replication feature. The WAL contains the information required for logical replication, which increases the amount of WAL written.
    

**Note**

-   Modifying this parameter will cause the database to restart. Proceed with caution.
    
-   Run the `SHOW wal_level;` command to view the current setting of this parameter in the database.
    

`log_statement`

This parameter sets the level of the audit log. The default value is ddl, which means only SQL statements corresponding to DDL are audited. Printing fewer logs can improve database performance. Valid values are:

-   none: Does not record statements.
    
-   ddl (default): Records DDL statements such as CREATE, ALTER, and `DROP`.
    
-   mod: Records DDL and DML (INSERT, UPDATE, `DELETE`) statements.
    
-   all: Records all SQL statements.
    

**Note**

-   Enabling or disabling the SQL Explorer and Audit feature in the console automatically modifies this parameter:
    
    -   Enabling the audit log sets `log_statement = all`.
        
    -   Disabling the audit log sets `log_statement = ddl`.
        
-   Run the `SHOW log_statement;` command to view the current setting of this parameter in the database.
    

## Common parameter reference

**Note**

Some parameters cannot be modified in the console. You can log on to the cluster and use the command line to view and modify them.

### Connection and authentication

**Parameter**

**Description**

`authentication_timeout`

Sets the maximum time to wait for a client to complete identity authentication. If the client fails to authenticate within this time, the server closes the connection to prevent problematic clients from occupying connection resources for a long time.

-   Value range: 1 to 600
    
-   Default value: 60
    
-   Unit: seconds
    

`ssl`

Controls whether the instance enables and supports Secure Sockets Layer (SSL) encryption connections.

-   Value range: ON/OFF
    
-   Default value: OFF
    

### Autovacuum

The autovacuum process reclaims space occupied by dead tuples (rows from deleted or updated data) and updates table statistics. This process is critical to maintaining database performance.

**Parameter**

**Description**

`autovacuum`

Controls whether to enable the `autovacuum` background process. For this feature to work correctly, the `track_counts` parameter must also be enabled.

-   Value range: ON/OFF
    
-   Default value: ON
    

**Note**

Even if this parameter is disabled, the system will still force a vacuum process to start when it is necessary to prevent transaction ID wraparound.

`autovacuum_max_workers`

Specifies the maximum number of autovacuum worker processes (other than the autovacuum launcher) that can run at the same time.

-   Value range: 1 to 262143
    
-   Default value: 5
    
-   Unit: processes
    

`autovacuum_naptime`

Specifies the minimum hibernation time for the autovacuum process between checks on a database. In each round, the background process checks the database and issues `VACUUM` and `ANALYZE` commands for tables in the database as needed.

-   Value range: 1 to 2147483
    
-   Default value: 30
    
-   Unit: seconds
    

`autovacuum_vacuum_threshold`

The minimum number of changed (inserted, deleted, or updated) tuples required to trigger a `VACUUM` operation.

-   Value range: 0 to 2147483647
    
-   Default value: 50
    
-   Unit: tuples
    

`autovacuum_vacuum_scale_factor`

The table size scale factor for triggering a `VACUUM` operation. The actual threshold is determined by both the `autovacuum_vacuum_threshold` and this factor, using the formula: `autovacuum_vacuum_threshold + (autovacuum_vacuum_scale_factor * number of tuples in the table)`.

-   Value range: 0 to 100
    
-   Default value: 0.02
    
-   Unit: percent
    

`autovacuum_analyze_threshold`

The minimum number of changed (inserted, deleted, or updated) tuples required to trigger an `ANALYZE` operation.

-   Value range: 0 to 2147483647
    
-   Default value: 50
    
-   Unit: tuples
    

`autovacuum_analyze_scale_factor`

The table size scale factor for triggering an `ANALYZE` operation. The actual threshold is determined by both the `autovacuum_analyze_threshold` and this factor, using the formula: `autovacuum_analyze_threshold + (autovacuum_analyze_scale_factor * number of tuples in the table`).

-   Value range: 0 to 2147483647
    
-   Default value: 0.05
    
-   Unit: percent
    

`autovacuum_freeze_max_age`

The maximum age that a table's oldest transaction ID can have before a `VACUUM` is forced to prevent transaction ID wraparound. The system automatically initiates a vacuum to prevent wraparound, regardless of whether the `autovacuum` parameter is disabled.

-   Value range: 100000 to 2000000000
    
-   Default value: 500000000
    
-   Unit: transaction IDs
    

**Note**

Even if autovacuum is disabled, the system will still initiate autovacuum processes to prevent wraparound.

`autovacuum_multixact_freeze_max_age`

The maximum age that a table's oldest multixact ID can have before a `VACUUM` is forced to prevent multixact ID wraparound.

-   Value range: 10000 to 2000000000
    
-   Default value: 700000000
    
-   Unit: transaction IDs
    

**Note**

Even if autovacuum is disabled, the system will still initiate autovacuum processes to prevent wraparound.

`autovacuum_vacuum_cost_delay`

The cost delay time for automatic `VACUUM` operations. If set to -1, the value of `vacuum_cost_delay` is used.

-   Value range: -1 to 100
    
-   Default value: 0
    
-   Unit: milliseconds
    

`autovacuum_vacuum_cost_limit`

The cost limit for automatic `VACUUM` operations. This total limit is proportionally distributed among all running autovacuum worker processes (if there are multiple). The sum of the limits for each worker process will not exceed the value in this variable. If set to -1, the value of `vacuum_cost_limit` is used.

-   Value range: -1 to 10000
    
-   Default value: 10000
    
-   Unit: cost value
    

### Checkpoints and background writing

**Parameter**

**Description**

`checkpoint_timeout`

Sets the maximum time interval between automatic WAL checkpoints.

-   Value range: 30 to 86400
    
-   Default value: 30
    
-   Unit: seconds
    

`bgwriter_delay`

The hibernation time for the background writer between two rounds of flushing dirty pages.

-   Value range: 10 to 10000
    
-   Default value: 600000
    
-   Unit: milliseconds
    

`backend_flush_after`

When the number of dirty pages written by a background process exceeds this threshold, the operating system flushes data from the file cache to the disk.

-   Value range: 0 to 256
    
-   Default value: 0
    
-   Unit: blocks
    

`full_page_writes`

Controls whether the entire content of a data page is written to the WAL log when it is first modified after a checkpoint. This feature is used to prevent partial page writes caused by failures such as power outages.

-   Value range: ON/OFF
    
-   Default value: OFF
    

`wal_buffers`

The size of shared memory used to temporarily store WAL data in memory.

-   Value range: -1 to 262143 (2097144 KB)
    
-   Default value: 16 MB
    
-   Unit: WAL blocks (8 KB each)
    

`wal_level`

Controls the level of information written to the write-ahead logging (WAL). Different levels support different features: `replica` provides for read-only secondary nodes, and `logical` provides for logical replication services.

-   Value range: replica/logical
    
-   Default value: replica
    

`wal_writer_delay`

The maximum hibernation time for the walwriter process between two rounds of WAL flush operations.

-   Value range: 1 to 10000
    
-   Default value: 600000
    
-   Unit: milliseconds
    

### Query planning and execution

**Parameter**

**Description**

`constraint_exclusion`

Controls whether the query optimizer uses table constraints (such as CHECK constraints) to optimize queries, especially for query pruning on partitioned tables.

-   Value range:
    
    -   on: Checks constraints for all tables.
        
    -   Off: Disabled
        
    -   partition: Applies only to partitioned tables and `UNION ALL` subqueries.
        
-   Default value: partition
    

`cpu_index_tuple_cost`

Sets the planner's cost estimation for processing each index entry during an index scan.

-   Value range: 0 to 1.79769e+308
    
-   Default value: 0.005
    

`cpu_operator_cost`

Sets the planner's cost estimation for processing each operator or function in a query.

-   Value range: 0 to 1.79769e+308
    
-   Default value: 0.0025
    

`cpu_tuple_cost`

Sets the planner's cost estimation for processing each row in a query.

-   Value range: 0 to 1.79769e+308
    
-   Default value: 0.01
    

`enable_partition_pruning`

Controls whether the query optimizer enables partition pruning optimization during the planning and execution phases to skip scanning irrelevant partitions.

-   Value range: ON/OFF
    
-   Default value: ON
    

`seq_page_cost`

Sets the planner's cost estimation for a sequential disk page fetch.

-   Value range: 0 to 1.79769e+308
    
-   Default value: 1
    

`jit`

Controls whether to enable Just-In-Time (JIT) compilation for specific queries to accelerate execution.

-   Value range: ON/OFF
    
-   Default value: OFF
    

### Timeout settings

**Parameter**

**Description**

`deadlock_timeout`

The maximum time a transaction waits for a lock before checking for a potential deadlock.

-   Value range: 0 to 2147483647
    
-   Default value: 1000
    
-   Unit: milliseconds
    

`idle_in_transaction_session_timeout`

The maximum allowed time for a transaction to be in an "idle in transaction" state. The session is terminated if this time is exceeded. Set to 0 to disable this timeout.

-   Value range: 0 to 2147483647
    
-   Default value: 3600000
    
-   Unit: milliseconds
    

`lock_timeout`

The maximum time a single operation waits to acquire a lock on a table, row, or other object. The operation exits with an error if this time is exceeded. Set to 0 to disable this timeout, which means it will wait indefinitely.

-   Value range: 0 to 2147483647
    
-   Default value: 0
    
-   Unit: milliseconds
    

`statement_timeout`

Limits the maximum execution time for a single SQL statement. The statement is terminated if this time is exceeded. Set to 0 for no timeout limit.

-   Value range: 0 to 262143
    
-   Default value: 0
    
-   Unit: milliseconds
    

### Logging and auditing

**Parameter**

**Description**

`logging_collector`

Controls whether to enable the log collection process, which is responsible for catching and writing logs during cluster operation.

-   Value range: ON/OFF
    
-   Default value: ON
    

`log_connections`

Controls whether to record each successful client connection in the log.

-   Value range: ON/OFF
    
-   Default value: OFF
    

`log_disconnections`

Controls whether to record each client disconnection in the log.

-   Value range: ON/OFF
    
-   Default value: OFF
    

`log_error_verbosity`

Sets the verbosity of the error log.

-   Value range:
    
    -   terse: Includes only severity, primary message, and position.
        
    -   default: Includes more details, such as detailed information and hints.
        
    -   verbose: Includes all detailed logs.
        
-   Default value: default
    

`log_min_duration_statement`

Records slow SQL statements that exceed a specified running time threshold. Set to 0 to record all SQL statements. Set to -1 to disable the slow SQL statement log feature.

-   Value range: 0 to 2147483647
    
-   Default value: 5000
    
-   Unit: milliseconds
    

`log_statement`

Controls the type of SQL statements recorded in the log.

-   Value range:
    
    -   none: Does not record statements.
        
    -   ddl: Records DDL statements such as CREATE, ALTER, and `DROP`.
        
    -   mod: Records DDL and DML (INSERT, UPDATE, `DELETE`) statements.
        
    -   all: Records all SQL statements.
        
-   Default value: ddl
    

### Replication and high availability

**Parameter**

**Description**

`hot_standby`

Controls whether a secondary node (read-only node) can accept read-only queries.

-   Value range: ON/OFF
    
-   Default value: ON
    

`hot_standby_feedback`

Controls whether a read-only node sends feedback to the primary node about its running queries. When enabled, the primary node delays cleaning up old data rows that are still being used by queries on the read-only node to reduce query conflicts.

-   Value range: ON/OFF
    
-   Default value: ON
    

`max_replication_slots`

The maximum number of replication slots that the instance can support.

-   Value range: 0 to 262143
    
-   Default value: 64
    

### Resource management

**Parameter**

**Description**

`dynamic_shared_memory_type`

Specifies the implementation method for dynamic shared memory.

-   Value range: posix/sysv/mmap
    
-   Default value: posix
    

`gin_pending_list_limit`

Sets the maximum memory size of the pending list for a GIN index in fast update mode.

-   Value range: 64 to 2097151
    
-   Default value: 4096
    
-   Unit: KB
    

`huge_pages`

Controls whether the instance attempts to use large pages provided by the operating system.

-   Value range: ON/OFF
    
-   Default value: ON
    

`max_files_per_process`

The maximum number of file handles that each database background process is allowed to open simultaneously.

-   Value range: 64 to 2147483647
    
-   Default value: 10000
    

`max_locks_per_transaction`

The maximum number of locks that each transaction can hold.

-   Value range: 10 to 2147483647
    
-   Default value: 64
    

`max_prepared_transactions`

The maximum number of transactions that can be in the prepared state (two-phase commit protocol) at the same time in the cluster.

-   Value range: 0 to 262143
    
-   Default value: 800
    

`max_worker_processes`

The maximum total number of background worker processes that the cluster can start, including parallel query worker processes.

-   Value range: 0 to 262143
    
-   Default value: 256
    

`temp_file_limit`

Limits the total size of temporary files (used for operations such as sorting and hashing) that a single background process can use. Set to -1 for no limit.

-   Value range: -1 to 2147483647
    
-   Default value: 104857600 (100 GB)
    
-   Unit: KB
    

### Formatting and behavior

**Parameter**

**Description**

`datestyle`

Sets the display format for date and time values.

-   Value range:
    
    -   Output format declaration: ISO/Postgres/SQL/German
        
    -   Input/output year/month/day order: DMY/MDY/YMD
        
-   Default value: 'ISO,YMD'
    

`default_with_oids`

A deprecated parameter that controlled whether `CREATE TABLE` included OIDs by default. The current version no longer supports OIDs, so this can only be set to OFF.

`extra_float_digits`

Controls the number of extra significant digits displayed for floating-point numbers beyond the standard precision. This is used to display floating-point values more accurately.

-   Value range: -15 to 3
    
-   Default value: 0
    

`fsync`

Controls whether the database forces data changes to be synchronized from the operating system cache to the physical disk after critical operations, such as `COMMIT`.

-   Value range: ON/OFF
    
-   Default value: ON
    

`timezone`

Specifies the time zone that the database session uses to display and interpret timestamps.

-   Value range: Standard time zone names, such as `Asia/Shanghai` and `UTC`. For the detailed value range, see the modification range for parameters in the console.
    
-   Default value: 'UTC'
