If writing or updating data to your Hologres tables is slower than expected, you can use this topic to identify the cause. Common causes include slow upstream data reads or Hologres resource bottlenecks. After you identify the cause, you can apply the appropriate tuning methods to improve write and update performance.

## Background information

Hologres is a one-stop real-time data warehouse engine that supports high-performance, real-time writes and updates for massive data volumes. This capability meets the high-performance and low-latency requirements of big data scenarios.

## Basic principles

Before you learn about tuning methods for writes and updates, it is important to understand the basic principles. This knowledge helps you better estimate the write performance of different write modes.

-   Write and update performance for different table storage formats.
    
    -   For full-column writes or updates, the performance is ranked as follows.
        
        `Row-oriented > Column-oriented > Row-column hybrid`.
        
    -   For partial-column writes or updates, the performance is ranked as follows.
        
        `Row-oriented > Row-column hybrid > Column-oriented`.
        
-   Performance of different write modes.
    
    The following are the supported write modes.
    
    **Write mode**
    
    **Description**
    
    Insert
    
    Writes data in append-only mode. The sink table has no primary key (PK).
    
    InsertOrIgnore
    
    Ignores updates during writes. The sink table has a primary key. During real-time writes, if a primary key is duplicated, the later data record is discarded.
    
    InsertOrReplace
    
    Overwrites data during writes. The sink table has a primary key. During real-time writes, if a primary key is duplicated, the record is updated based on the primary key. If a written row does not contain all columns, the missing columns are filled with NULL.
    
    InsertOrUpdate
    
    Updates data during writes. The sink table has a primary key. During real-time writes, if a primary key is duplicated, the record is updated based on the primary key. This includes full-row updates and partial-column updates. For partial-column updates, if a written row does not contain all columns, the missing columns are not updated.
    
    -   For column-oriented tables, the performance of different write modes is ranked as follows.
        
        -   Performance is highest when the sink table has no primary key.
            
        -   When the sink table has a primary key:
            
            `InsertOrIgnore > InsertOrReplace >= InsertOrUpdate (full row) > InsertOrUpdate (partial column)`.
            
    -   For row-oriented tables, the performance of different write modes is ranked as follows.
        
        `InsertOrReplace = InsertOrUpdate (full row) >= InsertOrUpdate (partial column) >= InsertOrIgnore`.
        
    
-   For tables with binary logging (Binlog) enabled, the write and update performance is ranked as follows.
    
    `Row-oriented > Row-column hybrid > Column-oriented`.
    

## Identify write bottlenecks

When you write or update table data, if the write performance is slow, you can check the CPU Usage metric in the Management Console to identify the performance bottleneck:

-   CPU usage is low.
    
    This indicates that Hologres resources are not fully utilized. The performance bottleneck is not on the Hologres side. Check for issues such as slow upstream data reads.
    
-   CPU usage is high (consistently at 100%).
    
    This indicates that a Hologres resource bottleneck has been reached. You can handle this issue in the following ways.
    
    -   Use basic tuning methods to check whether improper basic settings are causing high resource loads and affecting write performance. For more information, see [Basic tuning methods](#section-cpk-fjp-uwz).
        
    -   After you apply the basic tuning methods, you can use advanced tuning methods for write channels, such as Flink and Data Integration, and for Hologres itself. This helps you further identify and resolve write bottlenecks. For more information, see [Tune Flink writes](#section-99h-ewq-1tm), [Tune Data Integration](#section-hq4-ctr-igt), and [Advanced tuning methods](#section-fxi-jhj-53z).
        
    -   Queries can affect writes. Running both concurrently can lead to high CPU usage. You can check the slow query logs to identify the CPU consumption of queries that are running at the same time. If queries are affecting writes, consider configuring a high availability (HA) deployment with read/write splitting for your instance. For more information, see [Deploy primary and secondary instances for read/write splitting (shared storage)](/help/en/hologres/user-guide/configure-multi-instance-high-availability-deployment#task-2149412).
        
    -   If the write performance still does not meet your expectations after you have tried all tuning methods, you can scale out your Hologres instance as needed.
        
    

## Basic tuning methods

Hologres typically delivers very high write performance. If the performance during data writes does not meet your expectations, you can use the following methods for routine tuning.

-   **Avoid using the public network to reduce network overhead**.
    
    Hologres provides network types such as VPC, classic network, and public network. For information about the scenarios for each type, see [Network configurations](/help/en/hologres/user-guide/instance-configurations#section-ldj-vsk-2to). When you write data, especially when you connect to Hologres from applications using Java Database Connectivity (JDBC) or psql, use a VPC connection instead of a public network connection. The public network has traffic limits and is less stable than a VPC.
    
-   **Use Fixed Plan for writes whenever possible**.
    
    The following figure shows the execution flow of an SQL statement in Hologres. For more information about the principles, see [Execution engine](/help/en/hologres/product-overview/qe#concept-2175510).![sql执行流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1344538761/p512487.png)
    
    -   If the SQL statement is for a normal online analytical processing (OLAP) write, it follows the path on the left. It passes through components such as the query optimizer (QO) and the query engine (QE). When data is written or updated, a lock is placed on the entire table. This is a table lock. If you concurrently execute `INSERT`, `UPDATE`, or `DELETE` commands, the SQL statements wait for each other to release the lock, which causes high latency.
        
    -   If the SQL statement is for a point query or point write, it follows the path on the right, which is called Fixed Plan. Queries that use Fixed Plan are simple enough to bypass the overhead of components such as the QO. Therefore, they use row locks for writes or updates. This greatly improves query concurrency and performance.
        
    
    Therefore, when you optimize write or update performance, prioritize making your queries use Fixed Plan.
    
    -   Ensuring queries use Fixed Plan
        
        SQL statements must meet certain criteria to use Fixed Plan. Common scenarios where Fixed Plan is not used include the following:
        
        -   Using the `insert on conflict` syntax for multi-row inserts and updates.
            
            ```
            INSERT INTO test_upsert(pk1, pk2, col1, col2)
                VALUES (1, 2, 5, 6), (2, 3, 7, 8)
            ON CONFLICT (pk1, pk2)
                DO UPDATE SET
                    col1 = excluded.col1, col2 = excluded.col2;
            ```
            
        -   Using the `insert on conflict` syntax for a partial update where the columns of the sink table do not correspond to the columns of the inserted data.
            
        -   The sink table contains columns of the SERIAL type.
            
        -   The sink table has the `Default` property set.
            
        -   An `update` or `delete` operation is based on the primary key. For example: `update table set col1 = ?, col2 = ? where pk1 = ? and pk2 = ?;`.
            
        -   Using data types that are not supported by Fixed Plan.
            
        
        If an SQL statement does not use a Fixed Plan, the `Real-time Import RPS` monitoring metric in the Management Console displays the insertion type as `INSERT`.![RPS metric](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1344538761/p512495.png)For SQL statements that do not use a Fixed Plan, the execution engine type is HQE or PQE. In most cases, the engine type for write operations is HQE. Therefore, if you find that write or update operations are slow, you can execute the following sample statement to query the slow query logs and check the execution engine type of the query (\`engine\_type\`).
        
        ```
        -- This example queries the insert, update, and delete operations that did not use Fixed Plan in the last 3 hours.
        SELECT
            *
        FROM
            hologres.hg_query_log
        WHERE
            query_start >= now() - interval '3 h'
            AND command_tag IN ('INSERT', 'UPDATE', 'DELETE')
            AND ARRAY['HQE'] && engine_type
        ORDER BY
            query_start DESC
        LIMIT 500;
        ```
        
        To improve performance, rewrite queries with the HQE engine type into SDK SQL statements that meet the Fixed Plan criteria. Pay attention to the following GUC parameters. We recommend that you enable them at the database level. For more information about how to use Fixed Plan, see [Use Fixed Plan to accelerate SQL execution](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#task-2183947).
        
        **Scenario**
        
        **GUC setting**
        
        **Description**
        
        Support Fixed Plan writes for multiple records that use the `insert on conflict` syntax.
        
        ```
        alter database <databasename> 
        set hg_experimental_enable_fixed_dispatcher_for_multi_values =on;
        ```
        
        We recommend that you enable this at the database level.
        
        Support Fixed Plan writes for tables that contain columns of the SERIAL type.
        
        ```
        alter database <databasename> 
        set hg_experimental_enable_fixed_dispatcher_autofill_series =on;
        ```
        
        We do not recommend setting the SERIAL type for tables because this can degrade write performance. This GUC parameter is set to `on` by default in Hologres V1.3.25 and later.
        
        Support Fixed Plan writes for columns with the Default property.
        
        In Hologres V1.3 and later, if you use the `insert on conflict` syntax to write data that contains a field with the Default property, the write operation uses Fixed Plan by default.
        
        We do not recommend setting the Default property for tables because it can degrade write performance. Hologres V1.1 does not support Fixed Plan for fields with the Default property. This feature is supported in Hologres V1.3 and later.
        
        UPDATE operations based on the primary key.
        
        ```
        alter database <databasename> 
        set hg_experimental_enable_fixed_dispatcher_for_update =on;
        ```
        
        This GUC parameter is set to `on` by default in Hologres V1.3.25 and later.
        
        DELETE operations based on the primary key.
        
        `alter database <databasename> set hg_experimental_enable_fixed_dispatcher_for_delete =on;`
        
        This GUC parameter is set to `on` by default in Hologres V1.3.25 and later.
        
        If an SQL statement uses Fixed Plan, the type for the `Real-time Import RPS` metric is `SDK`, as shown in the following figure. In the slow query logs, the `engine_type` of the SQL statement is also `SDK`.![sql走了fixed plan](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1344538761/p512503.png)
        
    -   Write performance remains slow after the Fixed Plan is executed.
        
        If an SQL statement already uses Fixed Plan but still takes a long time to execute, the possible reasons are as follows.
        
        -   Usually, this happens when a table has both Fixed Plan SDK writes or updates and HQE writes or updates. HQE uses table locks, which can cause SDK writes to wait for the lock and result in long execution times. You can run the following SQL statement to check whether the table has any HQE operations. Then, you can optimize them into SDK SQL statements based on your business needs. You can also use Query Insights in HoloWeb to quickly identify whether a Fixed Plan query is affected by an HQE lock. For more information, see [Query Insights](/help/en/hologres/user-guide/query-insights).
            
            ```
            -- Query for insert, update, and delete operations on a table that did not use Fixed Plan in the last 3 hours.
            SELECT
                *
            FROM
                hologres.hg_query_log
            WHERE
                query_start >= now() - interval '3 h'
                AND command_tag IN ('INSERT', 'UPDATE', 'DELETE')
                AND ARRAY['HQE'] && engine_type
                AND table_write = '<table_name>'
            ORDER BY
                query_start DESC
            LIMIT 500;
            ```
            
        -   If all writes to the table are SDK writes but are still slow, check the `CPU Usage` metric. If the CPU usage is consistently high, the instance may have reached a resource bottleneck. In this case, you can scale out the instance as needed.
            
        
    
-   **Enabling Binlog reduces write throughput**.
    
    Hologres Binlog records data changes, such as INSERT, UPDATE, and DELETE. It completely records the changes for each row. When you enable Binlog for a table, consider the following example UPDATE statement:
    
    ```
    update tbl set body =new_body where id='1';
    ```
    
    Because Binlog records data for all fields in a row, it needs to perform a point query on the entire row of the destination table using the filter field (the `id` field in the example). For a column-oriented table, this type of point query consumes more resources than it does for a row-oriented table. Therefore, for tables with Binlog enabled, the write performance ranks as follows: `row-oriented table > column-oriented table`.
    
-   **Avoid concurrent real-time and offline writes to the same table**.
    
    Offline writes, such as writing from MaxCompute to Hologres, use table locks. Most real-time writes, such as from Flink or DataWorks data integration, are Fixed Plan writes that use row locks. If you perform offline and real-time writes to the same table concurrently, the offline write acquires a table lock. The real-time write then has to wait for the lock, which results in slow write performance. Therefore, you should avoid concurrent real-time and offline writes to the same table.
    

## Tune Holo Client or JDBC writes

When you write data using clients such as Holo Client or JDBC, you can use the following methods to improve write performance.

-   **Write data in batches**.
    
    When you write data using a client, writing in batches provides higher throughput than writing single records. This method improves write performance.
    
    -   Holo Client automatically batches data. We recommend that you use the default configuration parameters for Holo Client. For more information, see [Holo Client](/help/en/hologres/user-guide/read-and-write-data-over-holo-client#concept-2037123).
        
    -   When you use JDBC, you can configure `WriteBatchedInserts=true` in the JDBC connection string to enable batching, as shown in the following example. For more information about JDBC, see [JDBC](/help/en/hologres/user-guide/use-jdbc-to-connect-to-hologres#task-1946174).
        
        ```
        jdbc:postgresql://{ENDPOINT}:{PORT}/{DBNAME}?ApplicationName={APPLICATION_NAME}&reWriteBatchedInserts=true
        ```
        
    
    The following example shows how to convert non-batched SQL statements into batched SQL statements.
    
    ```
    -- Two non-batched SQL statements
    insert into data_t values (1, 2, 3);
    insert into data_t values (2, 3, 4);
    
    -- Batched SQL statement
    insert into data_t values (1, 2, 3), (4, 5, 6);
    -- Another way to write a batched statement
    insert into data_t select unnest(ARRAY[1, 4]::int[]), unnest(ARRAY[2, 5]::int[]), unnest(ARRAY[3, 6]::int[]);
    ```
    
-   **Use Prepared Statement mode to write data**.
    
    Hologres is compatible with the PostgreSQL ecosystem. It supports Prepared Statement mode based on the PostgreSQL extended protocol. This mode caches the SQL compilation results on the server, which reduces the overhead of components such as the frontend (FE) and QO and improves write performance.
    
    For information about how to use Prepared Statement mode to write data with JDBC and Holo Client, see [JDBC](/help/en/hologres/user-guide/use-jdbc-to-connect-to-hologres#task-1946174).
    

## Tune Flink writes

-   Note the following points for different table types.
    
    -   Binlog source tables
        
        -   When Flink consumes Hologres Binlog data, it supports a limited number of data types. If you use an unsupported data type, such as SMALLINT, the job may fail to go online, even if you do not consume that field. In Flink engine Ververica Runtime (VVR) 6.0.3-Flink-1.15 and later, you can consume Hologres Binlog data in JDBC mode. This mode supports more data types.
            
        -   For Hologres tables with Binlog enabled, we recommend that you use row-oriented tables. Enabling Binlog for column-oriented tables consumes more resources and affects write performance.
            
    -   Dimension tables
        
        -   Dimension tables must be row-oriented or row-column hybrid tables. Column-oriented tables have high performance overhead in point query scenarios.
            
        -   When you create a row-oriented table, you must set a primary key. The performance is better when the primary key is also configured as the clustering key.
            
        -   The primary key of the dimension table must be the field used in the Flink \`JOIN ON\` clause. The field in the \`JOIN ON\` clause must also be the complete primary key of the table. The two must match exactly.
            
    -   Sink tables
        
        -   For wide table merges or partial updates, the corresponding Hologres table must have a primary key. Each sink table must declare and write to the primary key field. You must use the `InsertOrUpdate` write mode. The `ignoredelete` property of each sink table must be set to `true` to prevent retraction messages from generating DELETE requests.
            
        -   In wide table merge scenarios for column-oriented tables, CPU usage can be high at a high number of records per second (RPS). We recommend that you disable `Dictionary Encoding` for the fields in the table.
            
        -   If a sink table has a primary key, we recommend that you set a `segment_key`. This helps quickly locate the underlying file where the data resides during writes and updates. We recommend that you use a timestamp or date field as the `segment_key`. Ensure that the data in this field has a strong correlation with the write time.
            
-   Recommended Flink parameter settings.
    
    The default values for the Hologres Connector parameters are optimal for most scenarios. If the following issues occur, you can modify the parameters as needed.
    
    -   High latency in Binlog consumption:
        
        The default batch size for reading Binlog data (`binlogBatchReadSize`) is 100. If the `byte size` of a single row is small, you can increase this parameter to optimize consumption latency.
        
    -   Poor performance for dimension table point queries:
        
        -   Set the `async` parameter to `true` to enable asynchronous mode. This mode can process multiple requests and responses concurrently, which eliminates blocking between consecutive requests and improves query throughput. However, asynchronous mode does not guarantee the absolute order of requests.
            
        -   If a dimension table contains a large amount of data and is infrequently updated, we recommend that you use the dimension table cache to optimize query performance. The corresponding parameter is set to `cache = 'LRU'`. The default value of `cacheSize` is a conservative 10,000 rows, and we recommend that you increase this value based on your actual requirements.
            
    -   Insufficient connections:
        
        The `connector` uses JDBC by default. If you have many Flink jobs, you might run out of connections to Hologres. In this case, you can use the `connectionPoolName` parameter. This parameter allows tables with the same connection pool name within the same TaskManager to share connections.
        
    
-   Job development recommendations.
    
    Compared with DataStream, Flink SQL is more maintainable and portable. Therefore, we recommend that you use Flink SQL to implement jobs. If your business requires DataStream, we recommend that you use the Hologres DataStream Connector. For more information, see [Hologres DataStream Connector](/help/en/flink/developer-reference/hologres-datastream-connector#task-2103643). To develop a custom DataStream job, we recommend that you use Holo Client instead of JDBC. The recommended job development methods are ranked as follows: `Flink SQL > Flink DataStream (connector) > Flink DataStream (holo-client) > Flink DataStream (JDBC)`.
    
-   Troubleshooting slow writes.
    
    In many cases, slow writes can be caused by other steps in the Flink job. You can split the nodes of the Flink job and check for backpressure. If backpressure occurs at the data source or at complex compute nodes, the rate of data flowing into the Hologres sink table is slow. In this case, you must first check for optimization opportunities on the Flink side.
    
    If the CPU usage of the Hologres instance is high (for example, consistently at 100%) and write latency is also high, the problem is likely on the Hologres side.
    
-   For other common errors and troubleshooting methods, see [Blink and Flink FAQ and diagnostics](/help/en/hologres/support/troubleshoot-blink-and-flink-issues#task-2156621).
    

## Tune Data Integration

-   Relationship between concurrency and connections.
    
    In Data Integration, a job in wizard mode uses three connections per concurrent thread. For a job in code editor mode, you can use the `maxConnectionCount` parameter to configure the total number of connections for the task, or the `insertThreadCount` parameter to configure the number of connections per concurrent thread. In most cases, you can achieve good performance without modifying the concurrency and connection settings. You can modify them as needed.
    
-   Exclusive resource groups.
    
    Most Data Integration jobs require exclusive resource groups. The specifications of the exclusive resource group determine the upper limit of the task's performance. For optimal performance, we recommend one concurrent thread per core of the exclusive resource group. If the resource group is too small but the task concurrency is high, issues such as insufficient JVM memory may occur. Similarly, if the bandwidth of the exclusive resource group is saturated, the upper limit of the write task's performance is also affected. If this happens, we recommend that you break down large tasks into smaller ones and assign them to different resource groups. For more information about the specifications and metrics of exclusive resource groups for Data Integration, see [Performance metrics](/help/en/dataworks/billing-of-subscription-exclusive-resource-groups-for-data-integration#section-kk9-vve-b5c).
    
-   How to determine whether slow writes are caused by Data Integration, the upstream, or Hologres?
    
    -   When Data Integration writes to Hologres, if the wait time on the read end is longer than the wait time on the write end, the cause is usually a slow read end.
        
    -   If the CPU usage of the Hologres instance is high (for example, consistently at 100%) and write latency is also high, the problem is likely on the Hologres side.
        

## Advanced tuning methods

The basic tuning methods cover the fundamental ways to improve write performance. If used correctly, they can help you achieve excellent write performance. However, in practice, other factors can affect performance, such as index settings and data distribution. The advanced tuning methods described in this section build on the basic methods. They explain how to further troubleshoot and improve write performance. These methods are suitable for users who have a deeper understanding of Hologres principles.

-   Slow writes caused by data skew.
    
    If data is skewed or the distribution key is set improperly, the computing resources of the Hologres instance can become skewed. This condition prevents efficient resource use and affects write performance. For information about how to check for data skew and resolve related issues, see [View Worker skew relationships](/help/en/hologres/user-guide/query-the-shard-allocation-among-workers#task-2255914).
    
-   Slow writes caused by an improper segment key.
    
    When you write to a column-oriented table, an improper segment key can severely degrade write performance. The performance degradation becomes more noticeable as the data volume in the table increases. This is because the segment key is used to segment underlying files. During writes or updates, Hologres looks up the old data based on the primary key. For a column-oriented table, this lookup operation needs the segment key to quickly locate the underlying file where the data resides. If the column-oriented table has no segment key, the segment key is set to an improper field, or the data in the segment key field has no strong correlation with the write time (for example, it is mostly out of order), the lookup needs to scan a very large number of files. This process not only involves many I/O operations but also consumes a large amount of CPU. This affects the write performance and the load of the entire instance. In this case, the `IO Throughput` metric on the monitoring page in the console shows a high `Read` value, even if the workload consists mainly of write jobs.
    
    Therefore, we recommend that you use a timestamp or date field as the segment key. Ensure that the data in this field has a strong correlation with the write time.
    
-   Slow writes caused by an improper clustering key
    
    When a table has a primary key (PK), Hologres looks up the old data based on the primary key during writes or updates.
    
    -   For a row-oriented table, if the clustering key is different from the PK, the lookup operation needs to be performed twice: once using the PK index and once using the clustering key index. This behavior increases write latency. Therefore, for row-oriented tables, we recommend that you keep the clustering key and the PK the same.
        
    -   For a column-oriented table, the clustering key setting mainly affects query performance, not write performance. You can disregard this setting for now.
