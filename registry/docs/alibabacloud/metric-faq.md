This topic describes frequently asked questions (FAQ) about Hologres monitoring metrics.

-   [How do I view and kill connections when the number of connections is too high?](#section-vti-zh5-uui)
    
-   [What do I do if query latency is too high?](#section-wfa-xal-scw)
    
-   [What causes high memory usage and how do I resolve it?](#section-nc0-h2m-aky)
    
-   [Why does the CPU usage of a Hologres instance reach 100% with only one task?](#section-8zo-ldp-qeq)
    
-   [How do I resolve slow writes?](#section-p6a-szd-lg1)
    
-   [What do I do if CPU usage remains at 100% for a long time?](#section-eh0-swq-350)
    
-   [How do I handle long-running queries?](#section-988-ir2-tjp)
    
-   [How do I troubleshoot failed queries?](#section-14q-f33-ni5)
    
-   [How do I resolve uneven CPU load among workers?](#section-t4u-gwh-fhe)
    

## How do I view and kill connections when the number of connections is too high?

Connections include the total number of SQL connections in an instance, such as active and idle connections from Java Database Connectivity (JDBC) or PSQL. The number of connections for an instance is usually related to its specifications. If you find that the number of connections is too high, exceeds the maximum connections for the instance, or you encounter the following errors:

-   The `FATAL: sorry, too many clients already connection limit exceeded for superusers` error occurs.
    
-   The `FATAL: remaining connection slots are reserved for non-replication superuser connections` error occurs.
    

This indicates that the instance has reached its connection limit. View the current connections in HoloWeb or using SQL. For more information, see [Connection management](/help/en/hologres/user-guide/manage-connections#concept-2058301). Use a superuser account to **Kill** unexpected or idle connections.

## What do I do if query latency is too high?

High query latency is often caused by the following reasons. First, identify the corresponding slow SQL statements in the slow query log and resolve the issue based on the following scenarios. For more information, see [View and analyze slow query logs](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs#concept-2069482).

-   Query latency is high because queries per second (QPS) are low but the SQL statements are complex.
    
    Solution: Optimize the SQL statements and set appropriate indexes to improve query performance. For more information, see [Optimize query performance](/help/en/hologres/user-guide/optimize-performance-of-queries-on-hologres-internal-tables#task-1948728) and [Optimize the query performance of MaxCompute foreign tables](/help/en/hologres/user-guide/optimize-the-performance-of-querying-maxcompute-tables-in-hologres#concept-2535937).
    
-   Query latency is high because the QPS of queries is high.
    
    Solution: If the SQL statements are already optimized but you need higher QPS and lower latency, scale out the instance. More resources provide better performance. For more information, see [Upgrade an instance](/help/en/hologres/user-guide/instance-list#concept-2448798).
    
-   Query latency is high because many write operations occur during queries, which affects query performance.
    
    Solution: If write operations affect query performance, perform the following operations.
    
    -   Perform write operations during off-peak query hours to reduce the impact on queries.
        
    -   Reduce the write concurrency to improve query efficiency. If you are writing to a foreign table, use the following parameters to reduce concurrency.
        
        ```
        -- Set the maximum concurrency for MaxCompute execution. The default value is 128. Set this to a smaller value to prevent one query from affecting others and causing system errors.
        set hg_experimental_foreign_table_executor_max_dop = 32; -- Recommended setting
        
        -- Adjust the batch size for each read from a MaxCompute table. The default value is 8192.
        set hg_experimental_query_batch_size = 1024;
        
        -- Directly read ORC files.
        set hg_experimental_enable_access_odps_orc_via_holo = on;
        
        -- Set the split size for accessing MaxCompute tables. This adjusts the number of concurrent tasks. The default value is 64 MB. Increase this value for large tables to prevent too many splits from affecting performance.
        set hg_experimental_foreign_table_split_size = 512MB;
        ```
        
    

## What causes high memory usage and how do I resolve it?

The memory usage of a Hologres instance is the overall memory utilization rate. Hologres uses a reservation model for memory resources. Even when there are no queries, metadata, indexes, and data caches for tables are loaded into memory to speed up retrieval and computation. It is normal for memory usage to be above zero in this state. Theoretically, memory usage of around 30% to 40% is normal when no queries are running.

In some cases, memory usage can continuously increase and even approach 80%. The main reasons are as follows:

-   The number of tables and the total data volume are increasing, causing the data scale to far exceed the current compute specifications. Memory usage is positively correlated with the amount of metadata and indexes. Therefore, more tables, larger data volumes, and more indexes all lead to higher memory usage.
    
-   Indexes are not configured properly. For example, a table has many columns, most of which are TEXT columns, and too many bitmap or dictionary indexes are set. In this case, consider removing some bitmap or dictionary indexes. For more information, see [ALTER TABLE](/help/en/hologres/developer-reference/alter-table#concept-2463316).
    

However, when memory usage steadily increases and remains near 80% for a long time, it usually means that memory resources may have become a system bottleneck. This can affect the stability or performance of the instance. The impact on stability occurs when oversized metadata occupies memory space that should be available for normal queries. During the query process, errors such as `SERVER_INTERNAL_ERROR`, `ERPC_ERROR_CONNECTION_CLOSED`, or `Total memory used by all existing queries exceeded memory limitation` may occasionally occur. The impact on performance occurs when oversized metadata occupies cache space that would otherwise be used by normal queries. This reduces the cache hit rate and increases query latency.

Therefore, if memory usage remains near 80% for a long time, consider the following actions.

-   Delete data that is no longer queried to release the memory occupied by metadata.
    
-   Set appropriate indexes. If bitmap and dictionary indexes are not used in your business scenario, you can remove them. However, do not remove them directly without a specific analysis of your business requirements.
    
-   Upgrade the compute and storage resources of the instance. The recommendations for upgrading are as follows:
    
    -   General scenarios: If you can tolerate latency from reading data from disks and response time requirements are not strict, 1 CU (1 Core + 4 GB memory) can support 50 GB to 100 GB of data storage.
        
    -   Serving scenarios with low response time requirements: For best performance, all hot spot data for queries should be in the memory cache. By default, the cache occupies 30% of the total memory. For a 1 CU instance (1 Core + 4 GB memory), 1.3 GB is used for the data cache. Some of this cache is also used by table metadata. For example, in a low-latency scenario with 100 GB of hot spot data, you need at least 100 GB of available cache. After the data is read and decompressed, it will occupy more than 100 GB of memory. Therefore, you need at least 320 GB of memory, which means you need at least 96 CUs of compute resources.
        

## Why does the CPU usage of a Hologres instance reach 100% with only one task?

The CPU usage of a Hologres instance is the overall CPU utilization rate of the instance. Hologres can fully leverage multi-core parallel computing. A single query can quickly increase CPU usage to 100%. This indicates that compute resources are fully utilized. High CPU usage is not an issue in itself. The problem arises when high CPU usage leads to slow queries and writes, which requires comprehensive analysis.

## How do I resolve slow writes?

When `insert`, `insert on conflict`, or `update` commands are time-consuming, it indicates poor write performance. This issue is typically caused by SQL queries that do not use a Fixed Plan. SQL commands that do not use a Fixed Plan are subject to table locks. During concurrent execution, these commands must wait for the locks, which leads to long execution times. As a result, the `Real-time Write RPS` monitoring metric shows the write type as `insert`. You can analyze the query's characteristics and rewrite it to use a Fixed Plan. This changes the write type in the monitoring metric to `SDK` and improves write performance. For more information, see [Accelerate SQL Execution with a Fixed Plan](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#task-2183947).

## What do I do if CPU usage remains at 100% for a long time?

When the CPU usage of a Hologres instance remains near 100% for a long time (for example, at 100% for 3 consecutive hours or above 90% for 12 consecutive hours), it indicates a very high instance load. This usually means that CPU resources have become a system bottleneck. You need to analyze your business scenarios and queries to determine the cause. You can troubleshoot from the following aspects.

-   Troubleshooting 1: Significant increase in QPS or RPS.
    
    Compare the QPS and RPS monitoring metrics before and after the CPU usage increase. If there is a clear upward trend that causes the CPU usage to rise, proceed with the following solutions.
    
    The solutions are as follows.
    
    -   If select operations cause the CPU usage to increase, use the slow query log to identify long-running queries and optimize them.
        
    -   If executing `insert`, `update`, or `delete` operations causes an increase in CPU usage, check the slow query log to determine whether the query is not using a Fixed Plan, as shown in the following SQL. `insert`, `update`, or `delete` commands that do not use a Fixed Plan create table locks. Concurrent queries then cause lock waits. You can evaluate from a business logic perspective whether the SQL statement can be rewritten to use a Fixed Plan to avoid table locks and reduce CPU usage.
        
        ```
        -- Example: View insert/update/delete operations that did not use a Fixed Plan in the last 3 hours.
        select *
        from hologres.hg_query_log
        where query_start >= now() - interval '3 h'
            and command_tag in ('INSERT','UPDATE','DELETE')
            and 'HQE'=ANY(engine_type)
        order by query_start desc limit 500;
        ```
        
    -   If all SQL statements are optimized but CPU usage is still high, the instance resources have reached a bottleneck. You can scale out the instance or deploy multiple instances with shared storage to implement read/write splitting. For more information, see [Upgrade an instance](/help/en/hologres/user-guide/instance-list#concept-2448798) or [Deploy primary and secondary instances for read/write splitting (shared storage)](/help/en/hologres/user-guide/configure-multi-instance-high-availability-deployment#task-2149412).
        
    
-   Troubleshooting 2: No significant increase in QPS or RPS, but long-running queries exist.
    
    If monitoring metrics show no significant increase in QPS or RPS, but CPU usage suddenly increases and remains high, check the `Running Query Duration` metric for long-running queries. If the metric shows queries running for more than half an hour or an hour, these queries are the cause of the high CPU usage. Use the following commands to find active queries and terminate them to reduce CPU usage.
    
    ```
    -- View long-running queries.
    SELECT current_timestamp - query_start as runtime, datname::text, usename, query, pid::text
        FROM pg_stat_activity
        WHERE state != 'idle'
        order by 1 desc;
    
    -- Cancel a query.
    select pg_cancel_backend(<pid>);
    ```
    
-   Troubleshooting 3: No significant increase in QPS or RPS, but high-CPU-consuming queries exist.
    
    If monitoring metrics show no significant increase in QPS or RPS, but CPU usage suddenly increases and remains high, use the following command to find high-CPU-consuming queries in the slow query log. This helps you locate the operations that consume CPU and optimize the SQL statements.
    
    ```
    -- Query for high-consumption queries in the last 3 hours.
    select status as "Status",
    duration as "Duration (ms)",
    query_start as "Start Time",
    (read_bytes/1048576)::text || ' MB' as "Read Volume",
    (memory_bytes/1048576)::text || ' MB' as "Memory",
    (shuffle_bytes/1048576)::text || ' MB' as "Shuffle",
    (cpu_time_ms/1000)::text || ' s' as "CPU Time",
    physical_reads as "Disk Reads",
    query_id as "QueryID",
    query
    from hologres.hg_query_log
    where query_start > current_timestamp - interval'3 h'
    and command_tag in ('SELECT','INSERT','UPDATE','DELETE')
    and duration > 1000
    order by duration desc,
    read_bytes desc,
    shuffle_bytes desc,
    memory_bytes desc,
    cpu_time_ms desc,
    physical_reads desc
    limit 500;
    ```
    
-   Troubleshooting 4: PQE SQL statements cause CPU usage to reach 100%.
    
    If monitoring metrics show no significant increase in QPS or RPS, use the following SQL command to check the slow query log for new PQE SQL statements that may be causing the CPU usage to increase. If PQE SQL statements exist, optimize the operators in the SQL that use the PQE engine. For more information, see [Optimize query performance](/help/en/hologres/user-guide/optimize-performance-of-queries-on-hologres-internal-tables#task-1948728).
    
    ```
    -- Query for queries that used the PQE engine in the last 3 hours.
    select *
    from hologres.hg_query_log
    where query_start > current_timestamp - interval'3 h'
        and 'PQE'=ANY(engine_type)
    order by query_start desc limit 500;
    ```
    
-   Troubleshooting 5: Bitmap or dictionary indexes of a table were modified.
    
    Modifying the bitmap or dictionary indexes of a table triggers an asynchronous background compaction process, which consumes some CPU resources. The storage usage of the instance may first increase and then decrease. Use the following SQL command to check the slow query log for index modification records.
    
    ```
    -- Query for index modification records in the last 3 hours.
    select *
    from hologres.hg_query_log
    where query_start >= now() - interval '3 h'
    and command_tag in ('CALL')
    order by query_start desc limit 500;
    ```
    

## How do I handle long-running queries?

The Running Query Duration metric shows long-running queries, for example, queries with a runtime of more than 1 hour. When long-running queries appear, first go to the **Active Query Tasks** page to view the running queries. For more information, see [Manage queries](/help/en/hologres/user-guide/manage-queries#section-4fu-999-irk). Long-running queries usually occur in the following situations. Troubleshoot based on your situation.

-   Scenario 1: The instance has long-running write operations.
    
    Solution: Check the Real-time Write RPS metric to see if there are continuous write tasks that are causing long query runtimes.
    
-   Scenario 2: Idle in transaction.
    
    -   A client opens a transaction and performs a DDL operation but does not commit it. Use the following SQL command to query the status of active queries. The query status is displayed as `idle in transaction` and the runtime is long.
        
        ```
        -- View long-running queries.
        SELECT current_timestamp - query_start as runtime, datname::text, usename, query, pid::text
            FROM pg_stat_activity
            WHERE state != 'idle'
            order by 1 desc;
        ```
        
    -   A query is stuck due to lock waits or other reasons, causing it to run for a long time.
        
    
    Solution: Use the following SQL example to find long-running queries. If the long runtime is caused by `idle in transaction`, close the transaction on the client or set an appropriate idle transaction timeout. For more information, see [Modify the idle query timeout](/help/en/hologres/user-guide/manage-queries#section-p9p-x1t-0r9).
    
    ```
    -- View long-running queries.
    SELECT current_timestamp - query_start as runtime, datname::text, usename, query, pid::text
        FROM pg_stat_activity
        WHERE state != 'idle'
        order by 1 desc;
    
    -- A superuser cancels a query.
    select pg_cancel_backend(<pid>);
    ```
    
-   Scenario 3: The query involves complex SQL and uses the PQE engine.
    
    Solution: Use the following command to find currently running and long-running queries. Then, use an execution plan (\`explain sql\`) to check if any SQL statement is using the PQE engine (the execution plan contains `External SQL (Postgres)`), which causes a long execution time.
    
    ```
    -- View long-running queries.
    SELECT current_timestamp - query_start as runtime, datname::text, usename, query, pid::text
        FROM pg_stat_activity
        WHERE state != 'idle'
        order by 1 desc;
    
    -- View the execution plan of a query.
    explain sql
    ```
    
    -   Use a superuser account to kill the long-running query.
        
    -   Optimize the operators in the SQL statement that use the PQE engine. For more information, see [Optimize query performance](/help/en/hologres/user-guide/optimize-performance-of-queries-on-hologres-internal-tables#task-1948728).
        
    
-   Scenario 4: Concurrent DDL execution causes lock contention.
    
    Concurrent DDL operations lock tables, which leads to lock contention and lock waits, resulting in long runtimes.
    
    Solution:
    
    -   Use the following command to check if any DDL operations are in progress and kill them to release the locks.
        
        ```
        SELECT datname::text,usename,query,pid::text,state
           FROM pg_stat_activity
           WHERE state != 'idle' ;
        ```
        
    -   Execute DDL operations sequentially.
        
    

## How do I troubleshoot failed queries?

Failed Queries represents the number of failed queries per second. The total number of queries is the time range multiplied by the QPS, which is the area under the curve. Do not rely on QPS to determine the total number of failed queries. Use the slow query log to find the total number of failed queries and the reasons for failure. Then, resolve the issues based on the specific errors. For more information, see [View and analyze slow query logs](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs#concept-2069482).

## How do I resolve uneven CPU load among workers?

In Hologres, data partitioning (shards) determines how data is distributed. A worker may access data from one or more shards during computation. Within the same instance, a shard can be accessed by only one worker at a time. If different workers in an instance access a different total number of shards, an uneven load on worker resources may occur. The main reasons are as follows:

-   Reason 1: Data skew exists.
    
    If there is severe data skew, the worker load will be concentrated on specific shards, leading to uneven CPU load.
    
    Solution: Use the following statement to check for data skew. In the example result, the count for one shard is much larger than the others, indicating data skew. Handle the skewed data or set an appropriate distribution key as needed. For more information, see [Optimize query performance](/help/en/hologres/user-guide/optimize-performance-of-queries-on-hologres-internal-tables#task-1948728).
    
    ```
    select hg_shard_id,count(1) from <table_name> group by hg_shard_id;
    
    -- Example result: The count for shard 39 is large, indicating skew.
    hg_shard_id | count
    -------------+--------
              53 |  29130
              65 |  28628
              66 |  26970
              70 |  28767
              77 |  28753
              24 |  30310
              15 |  29550
              39 | 164983
    ```
    
-   Reason 2: The number of shards set for the instance is not an integer multiple of the number of workers.
    
    When the number of shards set in a table group is not an integer multiple of the total number of workers in the instance, different numbers of shards are allocated to different workers. This results in an uneven load.
    
    Solution: Set an appropriate shard count based on the instance specifications. For more information, see [Manage table groups and shard counts](/help/en/hologres/user-guide/user-guide-of-table-groups-and-shard-counts#concept-2069037). This situation usually occurs on large-specification instances (more than 256 cores). For small-specification instances, you can use the default shard count.
    
-   Reason 3: Uneven shard distribution after a worker failover.
    
    When a worker is terminated (killed) due to an out-of-memory (OOM) error or other reasons, the system quickly migrates the shards of that worker to other workers to promptly recover queries. When the killed worker is restarted, the system reallocates some shards to it. This can lead to uneven shard distribution among workers.
    
    Solution: If the instance load is low, you can ignore this uneven load distribution. If the instance load is high, restart the instance to redistribute shard resources evenly.
