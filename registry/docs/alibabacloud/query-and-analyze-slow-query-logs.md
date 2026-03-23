If your Hologres instance responds slowly or queries take too long, view and analyze slow query logs to quickly identify the issue. This process helps you identify, diagnose, and analyze slow or failed queries so you can optimize your system and improve performance. This topic describes how to view and analyze slow query logs in Hologres.

## **Version guide**

**Hologres version**

**Feature**

**Description**

V0.10

Added the feature to view and analyze slow query logs.

-   This feature is available only in Hologres V0.10 and later. Check your instance version on the instance product page in the Hologres console. If your instance is earlier than V0.10, see [Common upgrade preparation errors](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group for feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   In Hologres V0.10, logs for FAILED queries do not show runtime statistics such as memory, disk reads, data read volume, CPU time, or query\_stats.
    

V2.2.7

Optimized the default value of the log\_min\_duration\_statement parameter.

Slow query logs record all DDL statements, all failed SQL statements, and SQL statements (such as INSERT, SELECT, UPDATE, and DELETE) that run longer than the value of `log_min_duration_statement`.

Starting from Hologres V2.2.7, the default value of `log_min_duration_statement` is optimized from 1s to 100 ms. You do not need to change it manually. If your instance is earlier than V2.2.7, you can manually change the value using [log\_min\_duration\_statement](#14cc2919e4ebf). The minimum value is 100 ms.

## Limits

The following limits apply when you query slow query logs in Hologres:

-   Slow query logs are retained for one month by default. You can query data from any time period within that month.
    
-   To ensure system stability and prevent traffic overload, a single query can return a maximum of 10,000 slow query logs. Some fields in the slow query logs have length limits. For more information, see the field descriptions for the `query_log` table.
    
-   Slow query logs are part of the Hologres metadata warehouse. A failed slow query log search does not affect business queries in your instance. Therefore, the stability of slow query logs is not covered by the product's Service-Level Agreement (SLA).
    

## View query\_log table

Hologres stores slow query logs in the **hologres.hg\_query\_log** system table. The **hg\_query\_log** table records only completed SQL statements. Queries that are still running are not written to this table. This behavior is consistent across Hologres V2, V3, and later versions. In addition:

-   After you upgrade an instance to V0.10, Hologres collects logs for slow DML queries that run longer than 100 ms and all DDL operations by default.
    
-   Starting from V3.0.2, Hologres supports aggregated records for DML and query operations that run for less than 100 ms in the **hologres.hg\_query\_log** table.
    
    -   The system aggregates records for successful DQL and DML queries that have a fingerprint and run for less than 100 ms.
        
    -   The main columns for aggregation are server\_addr, usename, datname, warehouse\_id, application\_name, and digest.
        
    -   Each connection summarizes and reports data once per minute.
        

The following table describes the fields in the **hologres.hg\_query\_log** system table.

**Field**

**Data type**

**Description for detailed DML and DQL records (over 100 ms)**

**Description for aggregated DML and DQL records (under 100 ms)**

usename

text

The username for the query.

The username for the query.

status

text

The final status of the query is either success or failure.

-   SUCCESS
    
-   FAILED
    

The final status of the query. The value is SUCCESS. Aggregate data includes only successful records.

query\_id

text

The ID of the query. This ID is unique.

A failed query always has a query\_id. A successful query might not have one.

The query ID of the first query with the same primary aggregation key within the aggregation period.

digest

text

The SQL fingerprint code.

For SELECT, INSERT, DELETE, and UPDATE queries, the system calculates a MD5 hash value as the SQL fingerprint. For more information about the rules for collecting and calculating SQL fingerprints, see [SQL fingerprint](#444cadde13uqp).

**Note**

Starting from Hologres V2.2, the digest column is added to display the SQL fingerprint code. If your instance is V2.1 or earlier, contact Hologres technical support to upgrade your instance.

The SQL fingerprint code.

datname

text

The name of the database for the query.

The name of the database for the query.

command\_tag

text

The type of query.

Includes:

-   DML: COPY, DELETE, INSERT, SELECT, UPDATE, and more.
    
-   DDL: ALTER TABLE, BEGIN, COMMENT, COMMIT, CREATE FOREIGN TABLE, CREATE TABLE, DROP FOREIGN TABLE, DROP TABLE, IMPORT FOREIGN SCHEMA, ROLLBACK, and TRUNCATE TABLE.
    
-   Other: CALL, CREATE EXTENSION, EXPLAIN, GRANT, SECURITY LABEL, and more.
    

The query type of the first query with the same primary aggregation key within the aggregation period.

warehouse\_id

integer

The ID of the virtual warehouse used for the query.

The compute group ID for the first query that has the same aggregation primary key within the aggregation period.

warehouse\_name

integer

The name of the virtual warehouse used for the query.

Within the aggregation period, the name of the compute group for the first query that shares the same aggregation primary key.

warehouse\_cluster\_id

integer

This field is added in Hologres V3.0.2. It is the cluster ID in the virtual warehouse used for the query. The cluster ID in each virtual warehouse starts from 1.

The cluster ID of the first query with the same primary aggregation key within the aggregation period.

duration

integer

The query duration in milliseconds (ms).

`duration` represents the total time of the SQL statement, which includes:

-   Optimization Cost: The time to generate the execution plan. A high cost usually means the SQL statement is complex.
    
-   Start Query Cost: The query startup time. A high cost usually means the query is waiting for locks or resources.
    
-   Get Result Cost: The query execution time. A high cost usually means the computation is large and the execution takes a long time. You can optimize the SQL statement based on your business needs.
    
-   Other costs: You can view other costs in the `extend_cost` field. These usually include the following:
    
    -   build\_dag: The time to build the computation directed acyclic graph (DAG) required by the execution engine. For example, when accessing a foreign table, this step gets the foreign table's metadata. A high cost usually means it takes a long time to access the foreign table's metadata.
        
    -   prepare\_reqs: The time to prepare requests to be sent to the execution engine. This includes preparing components for running and getting the addresses of each shard. A high cost usually means it takes a long time to get shard addresses from internal services.
        

By default, the system displays only DML statements that run longer than 1s and all DDL statements. You can change the collection time using the GUC parameter `log_min_duration_statement`. For more information, see [Configuration items](#section-ri1-pq0-k3p).

The average query duration of all queries with the same primary aggregation key within the aggregation period.

message

text

The error message.

Empty.

query\_start

timestamptz

The query start time.

The query start time of the first query with the same primary aggregation key within the aggregation period.

query\_date

text

The query start date.

The query start date of the first query with the same primary aggregation key within the aggregation period.

query

text

The text content of the query.

The maximum length of a query is 51,200 characters. Longer queries might be truncated.

The text content of the first query with the same primary aggregation key within the aggregation period.

result\_rows

bigint

The number of rows returned.

For an INSERT command, this is the number of rows inserted.

The average value of result\_rows for all queries with the same primary aggregation key within the aggregation period.

result\_bytes

bigint

The number of bytes returned.

The average value of result\_bytes for all queries with the same primary aggregation key within the aggregation period.

read\_rows

bigint

The number of data rows read.

This is not an exact value. If a bitmap index is used, this value might differ from the actual number of scanned rows.

The average value of read\_rows for all queries with the same primary aggregation key within the aggregation period.

read\_bytes

bigint

The number of bytes read.

The average value of read\_bytes for all queries with the same primary aggregation key within the aggregation period.

affected\_rows

bigint

The number of rows affected by the DML statement.

The average value of affected\_rows for all queries with the same primary aggregation key within the aggregation period.

affected\_bytes

bigint

The number of bytes affected by the DML statement.

The average value of affected\_bytes for all queries with the same primary aggregation key within the aggregation period.

memory\_bytes

bigint

The cumulative peak memory usage on each node (not exact).

This represents the sum of peak memory usage across all nodes where the query ran. It roughly reflects the amount of data read by the query.

The average value of memory\_bytes for all queries with the same primary aggregation key within the aggregation period.

shuffle\_bytes

bigint

The estimated number of bytes for data shuffle (not exact).

This roughly reflects the amount of data transferred over the network.

The average value of shuffle\_bytes for all queries with the same primary aggregation key within the aggregation period.

cpu\_time\_ms

bigint

The total CPU time in milliseconds (ms) (not exact).

This reflects the CPU time consumed by all computation tasks. It is the sum of computation times from multiple CPU cores and roughly indicates the complexity.

The average value of cpu\_time\_ms for all queries with the same primary aggregation key within the aggregation period.

physical\_reads

bigint

The number of physical reads.

This reflects the number of times a record batch was read from the disk. It roughly indicates the number of memory cache misses.

The average value of physical\_reads for all queries with the same primary aggregation key within the aggregation period.

pid

integer

Query the process ID of the service.

The query service process ID of the first query with the same primary aggregation key within the aggregation period.

application\_name

text

You can query the application type.

Common application types include the following:

-   Alibaba Cloud Flink (VVR): {client\_version}\_ververica-connector-hologres.
    
-   Open source Flink: {client\_version}\_hologres-connector-flink.
    
-   DataWorks data integration for offline read sync from Hologres: datax\_{jobId}.
    
-   DataWorks data integration for offline write sync to Hologres: {client\_version}\_datax\_{jobId}.
    
-   DataWorks data integration for real-time sync: {client\_version}\_streamx\_{jobId}.
    
-   HoloWeb: holoweb.
    
-   Accessing Hologres through a foreign table in MaxCompute: MaxCompute.
    
-   SQL initiated by Auto Analyze to periodically update statistics: AutoAnalyze.
    
-   Quick BI: QuickBI\_public\_{version}.
    
-   DataWorks scheduling for Hologres tasks: {client\_version}\_dwscheduler\_{tenant\_id}\_{scheduler\_id}\_{scheduler\_task\_id}\_{bizdate}\_{cyctime}\_{scheduler\_alisa\_id}, where:
    
    -   client\_version: The JDBC driver version.
        
    -   scheduler\_id: Obtained from the `${SKYNET_ID}` environment variable. If it is empty, it is set to `-`.
        
    -   scheduler\_task\_id: Obtained from the `${SKYNET_TASKID}` environment variable. If it is empty, it is set to `-`.
        
    -   scheduler\_alisa\_id: Obtained from the `${ALISA_TASK_ID}` environment variable. This is never empty.
        
    -   bizdate: Obtained from the `${SKYNET_BIZDATE}` environment variable. If it is empty, it is set to `-`.
        
    -   cyctime: Obtained from the `${SKYNET_CYCTIME}` environment variable. If it is empty, it is set to `-`.
        
    -   tenant\_id: Obtained from the `${SKYNET_TENANT_ID}` environment variable. This is never empty.
        
-   Data Security Guard: dsg.
    

For other applications, explicitly specify the `application_name` in the connection string when connecting to Hologres.

The query application type.

engine\_type

text\[\]

The engine used for the query.

Engine types include the following:

-   HQE: Hologres' native proprietary engine. Most queries use HQE for high execution efficiency.
    
-   PQE: The PostgreSQL engine. The presence of PQE means some SQL operators are executed in PQE, usually because they are not natively supported by HQE. You can rewrite functions as described in [Optimize query performance](/help/en/hologres/user-guide/optimize-performance-of-queries-on-hologres-internal-tables#task-1948728) to use HQE and improve efficiency.
    
-   SDK: The execution engine for Fixed Plan. It can efficiently execute serving-type SQL such as point reads, point writes, and PrefixScan. For more information, see [Accelerate SQL execution with Fixed Plan](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#task-2183947).
    
    **Note**
    
    Starting from Hologres V2.2, the SDK execution engine is officially renamed FixedQE.
    
-   PG: Frontend local computation. This is generally used for metadata queries on system tables and does not read user table data. It consumes very few system resources. Note that DDL statements also use the PostgreSQL engine.
    

The engine used for the first query with the same primary aggregation key within the aggregation period.

client\_addr

text

The source address of the query.

This represents the egress IP address of the application, which is not necessarily the real application IP address.

The source address of the first query with the same primary aggregation key within the aggregation period.

table\_write

text

The table to which the SQL statement writes data.

The table to which the first query with the same primary aggregation key writes data within the aggregation period.

table\_read

text\[\]

The table from which the SQL statement reads data.

The table from which the first query with the same primary aggregation key reads data within the aggregation period.

session\_id

text

The session ID.

The session ID of the first query with the same primary aggregation key within the aggregation period.

session\_start

timestamptz

The session start time.

This represents the time when the connection was established.

The session start time of all queries with the same primary aggregation key within the aggregation period.

command\_id

text

The command or statement ID.

The command or statement ID of all queries with the same primary aggregation key within the aggregation period.

optimization\_cost

integer

The time to generate the query execution plan.

A high cost usually means the SQL statement is complex.

The time to generate the execution plan for all queries with the same primary aggregation key within the aggregation period.

start\_query\_cost

integer

The query startup time.

A high cost usually means the query is waiting for locks or resources.

The query startup time for all queries with the same primary aggregation key within the aggregation period.

get\_next\_cost

integer

The query execution duration.

A high cost usually means the computation is large and the execution takes a long time. You can optimize the SQL statement based on your business needs.

The query execution duration for all queries with the same primary aggregation key within the aggregation period.

extended\_cost

text

Other detailed query timing information.

You can view costs other than optimization\_cost, start\_query\_cost, and get\_next\_cost in the `extend_cost` field. These usually include the following costs.

-   build\_dag: The time to build the computation DAG required by the execution engine. For example, when accessing a foreign table, this step gets the foreign table's metadata. A high cost usually means it takes a long time to access the foreign table's metadata.
    
-   prepare\_reqs: The time to prepare requests to be sent to the execution engine. This includes preparing components for running and getting the addresses of each shard. A high cost usually means it takes a long time to get shard addresses from internal services.
    
-   serverless\_allocated\_cores: The amount of Serverless resources requested (in CUs). This field is present only for Serverless queries.
    
-   serverless\_allocated\_workers: The number of Serverless resource workers requested. This field is present only for Serverless queries.
    
-   serverless\_resource\_used\_time\_ms: The actual time that Serverless resources were used to execute the query, excluding resource queuing time. Unit: milliseconds (ms).
    

Other detailed costs of the first query with the same primary aggregation key within the aggregation period.

plan

text

The execution plan for the query.

The maximum length of an execution plan is 102,400 characters. Longer plans might be truncated. You can change the length limit using the GUC parameter `log_min_duration_query_plan`. For more information, see [Configuration items](#section-ri1-pq0-k3p).

The execution plan for the first query with the same primary aggregation key within the aggregation period.

statistics

text

The execution statistics for the query.

The maximum length of statistics information is 102,400 characters. Longer information might be truncated. You can change the length limit using the GUC parameter `log_min_duration_query_stats`. For more information, see [Configuration items](#section-ri1-pq0-k3p).

The execution statistics for the first query with the same primary aggregation key within the aggregation period.

visualization\_info

text

The visualization information for the query plan.

The query plan visualization information of the first query with the same primary aggregation key within the aggregation period.

query\_detail

text

Other extended information about the query (stored in JSON format).

**Note**

The maximum length of extended information is 10,240 characters. Longer information might be truncated.

Other extended information about the first query with the same primary aggregation key within the aggregation period.

query\_extinfo

text\[\]

-   serverless\_computing: This field is present only for queries executed using Serverless resources.
    
-   Other extended information about the query (stored in ARRAY format). Starting from V2.0.29, the query\_extinfo field collects the account's AccessKey ID to help identify the account owner.
    

**Note**

The AccessKey ID is not recorded for logons with a local account, a Service-Linked Role (SLR), or Security Token Service (STS). If you log on with a temporary account, only the temporary AccessKey ID is recorded.

Other extended information about the first query with the same primary aggregation key within the aggregation period.

calls

INT

The value is 1 because detailed records have no aggregation behavior.

The number of queries with the same primary aggregation key within the aggregation period.

agg\_stats

JSONB

Empty.

Records statistical values such as MIN, MAX, and AVG for numeric fields like duration, memory\_bytes, cpu\_time\_ms, physical\_reads, optimization\_cost, start\_query\_cost, and get\_next\_cost for queries with the same primary aggregation key within the aggregation period.

extended\_info

JSONB

Other extended information. Records extended information such as [Work with query queues](/help/en/hologres/user-guide/query-queue-function) and [Serverless Computing](/help/en/hologres/serverless-computing-1).

-   serverless\_computing\_source: The source of the SQL statement. It indicates that the SQL statement was executed using Serverless Computing resources. Valid values:
    
    -   user\_submit: The SQL statement was manually specified to run using Serverless resources, independent of Query Queue.
        
    -   query\_queue: All SQL statements in the specified query queue are executed by Serverless resources. For more information, see [Use Serverless Computing resources to execute queries in a query queue](/help/en/hologres/user-guide/query-queue-function#bdd4b8e401ktm).
        
    -   query\_queue\_rerun: The SQL statement was automatically rerun using Serverless resources by the large query control feature of Query Queue. For more information, see [Large query control](/help/en/hologres/user-guide/query-queue-function#5a578164588mb).
        
-   query\_id\_of\_triggered\_rerun: This field exists only when serverless\_computing\_source is query\_queue\_rerun. It indicates the original query ID of the rerun SQL statement.
    

Empty.

**Note**

The calls and agg\_stats fields are added in V3.0.2.

## Grant permissions

You need specific permissions to view slow query logs. The permission rules and authorization methods are as follows:

-   **View slow query logs for all databases in an instance.**
    
    -   Grant Superuser permissions to the user.
        
        A superuser account can view all slow query logs for all databases in an instance. After you grant the superuser permission to a user, the user can view these logs. When you grant the permission, replace "Alibaba Cloud account ID" with the actual username. If you use a RAM user, replace the Alibaba Cloud account ID with "p4\_AccountID". Note: This is the account ID, not the RAM user's name. You can find the account ID on the account page.
        
        ```
        ALTER USER "Alibaba Cloud account ID" SUPERUSER;
        ```
        
    -   Add the user to the pg\_read\_all\_stats user group.
        
        Besides superusers, Hologres also allows users in the pg\_read\_all\_stats group to view slow query logs for all databases. If a regular user needs to view all logs, they can contact a superuser to be added to this group. The authorization commands are as follows:
        
        ```
        GRANT pg_read_all_stats TO "Alibaba Cloud account ID";-- Grant permission in the standard PostgreSQL authorization model
        CALL spm_grant('pg_read_all_stats', 'Alibaba Cloud account ID');  -- Grant permission in the simple permission model
        CALL slpm_grant('pg_read_all_stats', 'Alibaba Cloud account ID'); -- Grant permission in the schema-level permission model
        ```
        
-   **View slow query logs for the current database.**
    
    Enable the simple permission model (SPM) or the schema-level permission model (SLPM) and add the user to the db\_admin user group. The db\_admin role can view query logs for the current database.
    
    ```
    CALL spm_grant('<db_name>_admin', 'Alibaba Cloud account ID');  -- Grant permission in the simple permission model
    CALL slpm_grant('<db_name>.admin', 'Alibaba Cloud account ID'); -- Grant permission in the schema-level permission model
    ```
    
-   **Regular users can only query the slow query logs for the queries they executed in the current database.**
    

## View slow queries in HoloWeb

You can use HoloWeb to view slow query logs.

**Note**

-   HoloWeb currently supports viewing historical slow query logs for up to seven days.
    
-   Only Superuser accounts can view this information. Regular authorized accounts must use SQL commands.
    

1.  Log on to the HoloWeb console. For more information, see [Connect to HoloWeb and run a query](/help/en/hologres/getting-started/connect-to-holoweb#task-2523359).
    
2.  In the top navigation bar, click **Diagnostics and Optimization**.
    
3.  In the navigation pane on the left, click **Historical Slow Query**.
    
4.  At the top of the **Historical Slow Query** page, edit the query conditions.
    
    For a description of the parameters, see [Historical Slow Queries](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs-1#task-2097979).
    
5.  Click **Search**. The results are displayed in the **Query Trend Analysis** and **Queries** areas.
    
    -   **Query Trend Analysis**
        
        Query Trend Analysis displays the recent trends of slow and failed queries. You can monitor periods with a high frequency of slow queries to better identify and resolve issues.
        
    -   **Queries**
        
        The Query List displays detailed information about slow and failed queries. For a description of the parameters, see [Historical Slow Queries](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs-1#task-2097979). You can also click **Customize Columns** to select the columns to display in the query list.
        

## **SQL fingerprint**

Starting from Hologres V2.2, the hologres.hg\_query\_log system table, which stores slow query logs, includes the digest column to display SQL fingerprints. For SELECT, INSERT, DELETE, and UPDATE queries, the system calculates an MD5 hash value as the SQL fingerprint. This helps you categorize and analyze queries.

The rules for collecting and calculating SQL fingerprints are as follows:

-   By default, fingerprints are collected only for SELECT, INSERT, DELETE, and UPDATE queries.
    
-   For `INSERT` statements that insert data as constants, the SQL fingerprint is not affected by the volume of data inserted.
    
-   When calculating the SQL fingerprint, the handling of letter case in SQL statements is consistent with Hologres' rules for letter case in queries.
    
-   The calculation ignores all whitespace characters in the query, such as spaces, line breaks, and tab characters. It considers only the structural information of the SQL statement.
    
-   The calculation ignores the effect of specific constant values in the query on the fingerprint.
    
    Example: The queries `SELECT * FROM t WHERE a > 1;` and `SELECT * FROM t WHERE a > 2;` have the same SQL fingerprint.
    
-   For array constants in a query, the calculation is not affected by the number of elements in the array.
    
    Example: The queries `SELECT * FROM t WHERE a IN (1, 2);` and `SELECT * FROM t WHERE a IN (3, 4, 5);` have the same SQL fingerprint.
    
-   The calculation considers the database name and automatically completes the schema property for each table. It uses both the table name and its properties to distinguish between tables in different queries.
    
    Example: For the queries `SELECT * FROM t;` and `SELECT * FROM public.t;`, the SQL fingerprints are the same only if the table `t` is in the `public` schema and both queries refer to the same table.
    

## Query diagnosis

You can query the hologres.hg\_query\_log table to retrieve slow query logs. The following sections provide common SQL statements for diagnosing query logs:

-   [Query the total number of queries in query\_log](#li-tm1-fm2-vja)
    
-   [Query the number of slow queries for each user](#li-xan-3rn-r6g)
    
-   [Query the details of a specific slow query](#li-r9l-74a-gu1)
    
-   [Query high-consumption queries from the last 10 minutes](#li-akg-cfs-gzu)
    
-   [View the query volume and total data read per hour for the last 3 hours](#li-3bm-gyy-0gx)
    
-   [View the data access volume for the past 3 hours compared to the same time yesterday](#li-w8g-pzf-obj)
    
-   [Query queries with high duration in each stage from the last 10 minutes](#li-pf3-lq9-849)
    
-   [Query the first failed query](#li-4fm-59h-gn0)
    
-   Query the total number of queries in query\_log (defaults to data from the last month).
    
    ```
    SELECT count(*) FROM hologres.hg_query_log;
    ```
    
    The following result indicates that 44 queries with a duration greater than the specified threshold were executed in the last month.
    
    ```
    count
    -------
        44
    (1 row)
    ```
    
-   Query the number of slow queries for each user.
    
    ```
    SELECT usename AS "User",
           count(1) as "Query Count"
    FROM hologres.hg_query_log
    GROUP BY usename
    order by count(1) desc;
    ```
    
    The following result is returned. The unit for `count(1)` is the number of queries.
    
    ```
    User                   | Query Count
    -----------------------+-----
     1111111111111111      |  27
     2222222222222222      |  11
     3333333333333333      |   4
     4444444444444444      |   2
    (4 rows)
    ```
    
-   Query the details of a specific slow query.
    
    ```
    SELECT * FROM hologres.hg_query_log WHERE query_id = '13001450118416xxxx';
    ```
    
    The following result is returned. For more information about the parameters, see [The query\_log table](#section-4g5-hg4-dhj).
    
    ```
           usename      | status  |      query_id      | datname| command_tag | duration | message |      query_start       | query_date |                                             query                                                  | result_rows | result_bytes | read_rows |read_bytes | affected_rows | affected_bytes | memory_bytes | shuffle_bytes | cpu_time_ms | physical_reads |   pid   | application_name | engine_type |  client_addr  | table_write | table_read |   session_id   |     session_start      | command_id | optimization_cost | start_query_cost | get_next_cost | extended_cost | plan | statistics | visualization_info | query_detail | query_extinfo
    -----------------------+---------+--------------------+---------+-------------+----------+---------+------------------------+------------+---------------------------------------------------------------------------------------------------------+-------------+--------------+-----------+------------+---------------+----------------+--------------+---------------+-------------+----------------+---------+------------------+-------------+---------------+-------------+------------+-----------------+------------------------+------------+-------------------+------------------+---------------+---------------+------+------------+--------------------+--------------+---------------
     p4_11111111111xxxx | SUCCESS | 13001450118416xxxx | dbname | SELECT      |      149 |         | 2021-03-30 23:45:01+08 | 20210330   | explain analyze SELECT  * FROM tablename WHERE user_id = '20210330010xxxx' limit 1000;             |        1000 |       417172 |         0 |         0 |            -1 |             -1 |     26731376 |     476603616 |      321626 |              0 | 1984913 | psql             | {HQE}      | 33.41.xxx.xxx |             |            | 6063475a.1e4991 | 2021-03-30 23:44:26+08 | 0          |                58 |               22 |            67 |               |      |            |                    |              |
    (1 row)
    ```
    
-   Query high-consumption queries from a recent time period, such as the last 10 minutes. You can also change the time period to query high-consumption queries for a specific duration as needed.
    
    ```
    SELECT status AS "Status",
           duration AS "Duration (ms)",
           query_start AS "Start Time",
           (read_bytes/1048576)::text || ' MB' AS "Data Read",
           (memory_bytes/1048576)::text || ' MB' AS "Memory",
           (shuffle_bytes/1048576)::text || ' MB' AS "Shuffle",
           (cpu_time_ms/1000)::text || ' s' AS "CPU Time",
           physical_reads as "Disk Reads",
           query_id as "QueryID",
           query::char(30)
     FROM hologres.hg_query_log
     WHERE query_start >= now() - interval '10 min'
     ORDER BY duration DESC,
              read_bytes DESC,
              shuffle_bytes DESC,
              memory_bytes DESC,
              cpu_time_ms DESC,
              physical_reads DESC
    LIMIT 100;
    ```
    
    The following result is returned:
    
    ```
    Status   |Duration (ms) |    Start Time          | Data Read | Memory| Shuffle | CPU Time | Disk Reads |      QueryID       |             query
    ---------+---------+------------------------+--------+-------+---------+---------+------+--------------------+--------------------------------
     SUCCESS |  149    | 2021-03-30 23:45:01+08 | 0 MB   | 25 MB | 454 MB  | 321 s   |    0 | 13001450118416xxxx | explain analyze SELECT  * FROM
     SUCCESS |  137    | 2021-03-30 23:49:18+08 | 247 MB | 21 MB | 213 MB  | 803 s   | 7771 | 13001491818416xxxx | explain analyze SELECT  * FROM
     FAILED  |   53    | 2021-03-30 23:48:43+08 | 0 MB   | 0 MB  | 0 MB    | 0 s     |    0 | 13001484318416xxxx | SELECT ds::bigint / 0 FROM pub
    (3 rows)
    ```
    
-   View the number of new queries from yesterday.
    
    -   Count the total number of new queries from yesterday.
        
        ```
        SELECT
            COUNT(1)
        FROM ( SELECT DISTINCT
                t1.digest
            FROM
                hologres.hg_query_log t1
            WHERE
                t1.query_start >= CURRENT_DATE - INTERVAL '1 day'
                AND t1.query_start < CURRENT_DATE
                AND NOT EXISTS (
                    SELECT
                        1
                    FROM
                        hologres.hg_query_log t2
                    WHERE
                        t2.digest = t1.digest
                        AND t2.query_start < CURRENT_DATE - INTERVAL '1 day')
                AND digest IS NOT NULL
         ) AS a;
        ```
        
        The following result indicates that a total of 10 new queries were added yesterday.
        
        ```
        count  
        -------
            10 
        (1 row)
        ```
        
    -   Group and count the number of new queries from yesterday by query type (command\_tag).
        
        ```
        SELECT
            a.command_tag,
            COUNT(1)
        FROM ( SELECT DISTINCT
                t1.digest,
                t1.command_tag
            FROM
                hologres.hg_query_log t1
            WHERE
                t1.query_start >= CURRENT_DATE - INTERVAL '1 day'
                AND t1.query_start < CURRENT_DATE
                AND NOT EXISTS (
                    SELECT
                        1
                    FROM
                        hologres.hg_query_log t2
                    WHERE
                        t2.digest = t1.digest
                        AND t2.query_start < CURRENT_DATE - INTERVAL '1 day')
                    AND t1.digest IS NOT NULL) AS a
        GROUP BY
            1
        ORDER BY
            2 DESC;
        ```
        
        The following result indicates that 8 new `INSERT` queries and 2 new `SELECT` queries were added yesterday.
        
        ```
        command_tag	| count  
        ------------+--------
        INSERT	    |    8   
        SELECT	    |    2
        (2 rows)
        ```
        
-   View the details of new queries from yesterday.
    
    ```
    SELECT
        a.usename,
        a.status,
        a.query_id,
        a.digest, 
        a.datname,
        a.command_tag,
        a.query,
        a.cpu_time_ms,
        a.memory_bytes
    FROM (
        SELECT DISTINCT
            t1.usename,
            t1.status,
            t1.query_id,
            t1.digest, 
            t1.datname,
            t1.command_tag,
            t1.query,
            t1.cpu_time_ms,
            t1.memory_bytes
        FROM
            hologres.hg_query_log t1
        WHERE
             t1.query_start >= CURRENT_DATE - INTERVAL '1 day' 
            AND t1.query_start < CURRENT_DATE 
            AND NOT EXISTS (
                SELECT
                    1
                FROM
                    hologres.hg_query_log t2
                WHERE
                    t2.digest = t1.digest
                    AND t2.query_start < CURRENT_DATE - INTERVAL '1 day'
            )
            AND t1.digest IS NOT NULL
    ) AS a; 
    ```
    
    The following result is returned:
    
    ```
    usename	         |status  |query_id	           |digest	                            |datname|command_tag	|query	                            |cpu_time_ms   |memory_bytes
    -----------------+--------+--------------------+------------------------------------+-------+-------------+-----------------------------------+--------------+--------------
    111111111111xxxx |SUCCESS |100100425827776xxxx |md58cf93d91c36c6bc9998add971458ba1a |dbname	|INSERT	      |INSERT INTO xxx SELECT * FROM xxx  | 	   		 1748|	   898808596
    111111111111xxxx |SUCCESS |100100425827965xxxx |md5f7e87e2c9e0b3d9eddcd6b3bc7f04b3b |dbname	|INSERT       |INSERT INTO xxx SELECT * FROM xxx  | 	   		59891|	  6819529886
    111111111111xxxx |SUCCESS |100100425829654xxxx |md55612dc09d2d81074fd5deed1aa3eca9b |dbname	|INSERT	      |INSERT INTO xxx SELECT * FROM xxx  |   	   		  3|	     2100039
    111111111111xxxx |SUCCESS |100100425829664xxxx |md58d3bf67fbdf2247559bc916586d40011 |dbname	|INSERT	      |INSERT INTO xxx SELECT * FROM xxx  |     		10729|	  2052861937
    111111111111xxxx |SUCCESS |100100425830099xxxx |md503bd45d6b2d7701c2617d079b4d55a10 |dbname	|INSERT	      |INSERT INTO xxx SELECT * FROM xxx  |	   		   2196|     897948034
    111111111111xxxx |SUCCESS |100100425830186xxxx |md5c62169eaf3ea3a0c59bdc834a8141ac4 |dbname	|INSERT	      |INSERT INTO xxx SELECT * FROM xxx  |	   		   5268|    1734305972
    111111111111xxxx |SUCCESS |100100425830448xxxx |md59aa0c73b24c9c9eba0b34c8fdfc23bb0 |dbname	|INSERT	      |INSERT INTO xxx SELECT * FROM xxx  |	   		      2|       2098402
    111111111111xxxx |SUCCESS |100100425830459xxxx |md57d22c1d37b68984e9472f11a4c9fd04e |dbname	|INSERT	      |INSERT INTO xxx SELECT * FROM xxx  |	   		    113|      76201984
    111111111111xxxx |SUCCESS |100100525468694xxxx |md5ac7d6556fae123e9ea9527d8f1c94b1c |dbname	|SELECT	      |SELECT * FROM xxx limit 200	      |     		    6|	     1048576
    111111111111xxxx |SUCCESS |100101025538840xxxx |md547d09cdad4d5b5da74abaf08cba79ca0 |dbname	|SELECT	      |SELECT * FROM xxx limit 200	      |\N	           |\N        
    (10 rows)
    ```
    
-   View the trend of new queries from yesterday (displayed by hour).
    
    ```
    SELECT
        to_char(a.query_start, 'HH24') AS query_start_hour,
        a.command_tag,
        COUNT(1)
    FROM (
        SELECT DISTINCT
            t1.query_start,
            t1.digest,
            t1.command_tag
        FROM
            hologres.hg_query_log t1
        WHERE
             t1.query_start >= CURRENT_DATE - INTERVAL '1 day' 
             AND t1.query_start < CURRENT_DATE 
             AND NOT EXISTS (
                SELECT
                    1
                FROM
                    hologres.hg_query_log t2
                WHERE
                    t2.digest = t1.digest
                    AND t2.query_start < CURRENT_DATE - INTERVAL '1 day'
             )
             AND t1.digest IS NOT NULL
    ) AS a 
    GROUP BY 1, 2
    ORDER BY 
    	3 DESC; 
    ```
    
    The following result indicates that at 11:00, 13:00, and 21:00 yesterday, 1 SELECT, 1 SELECT, and 8 INSERT queries were added, respectively.
    
    ```
    query_start_hour	|command_tag	|count
    ------------------+-------------+-----
    	            21	|INSERT	      |    8
    	            11	|SELECT	      |    1
    	            13	|SELECT	      |    1
    (3 rows)
    ```
    
-   Number of categorized slow queries.
    
    ```
    SELECT
        digest,
        command_tag,
        count(1)
    FROM
        hologres.hg_query_log
    WHERE
        query_start >= CURRENT_DATE - INTERVAL '1 day'
        AND query_start < CURRENT_DATE
    GROUP BY
        1,2
    ORDER BY
        3 DESC;
    ```
    
-   Query the top 10 queries with the highest average CPU time in the last day.
    
    ```
    SELECT
        digest,
        avg(cpu_time_ms)
    FROM
        hologres.hg_query_log
    WHERE
        query_start >= CURRENT_DATE - INTERVAL '1 day'
        AND query_start < CURRENT_DATE
        AND digest IS NOT NULL
        AND usename != 'system'
        AND cpu_time_ms IS NOT NULL
    GROUP BY
        1
    ORDER BY
        2 DESC
    LIMIT 10;
    ```
    
-   View the top 10 queries with the highest average memory consumption (memory\_bytes) in the last week.
    
    ```
    SELECT
        digest,
        avg(memory_bytes)
    FROM
        hologres.hg_query_log
    WHERE
        query_start >= CURRENT_DATE - INTERVAL '7 day'
        AND query_start < CURRENT_DATE
        AND digest IS NOT NULL
        AND memory_bytes IS NOT NULL
    GROUP BY
        1
    ORDER BY
        2 DESC
    LIMIT 10;
    ```
    
-   View the query volume and total data read per hour for the last 3 hours to check for changes in data volume.
    
    ```
    SELECT
        date_trunc('hour', query_start) AS query_start,
        count(1) AS query_count,
        sum(read_bytes) AS read_bytes,
        sum(cpu_time_ms) AS cpu_time_ms
    FROM
        hologres.hg_query_log
    WHERE
        query_start >= now() - interval '3 h'
    GROUP BY 1;
    ```
    
-   View the data access volume for the past 3 hours compared to the same time yesterday to check for changes in data access volume.
    
    ```
    SELECT
        query_date,
        count(1) AS query_count,
        sum(read_bytes) AS read_bytes,
        sum(cpu_time_ms) AS cpu_time_ms
    FROM
        hologres.hg_query_log
    WHERE
        query_start >= now() - interval '3 h'
    GROUP BY
        query_date
    UNION ALL
    SELECT
        query_date,
        count(1) AS query_count,
        sum(read_bytes) AS read_bytes,
        sum(cpu_time_ms) AS cpu_time_ms
    FROM
        hologres.hg_query_log
    WHERE
        query_start >= now() - interval '1d 3h'
        AND query_start <= now() - interval '1d'
    GROUP BY
        query_date;
    ```
    
-   Query queries with high duration in each stage from a recent time period, such as the last 10 minutes. You can also change the time period to query queries with high duration in each stage for a specific duration as needed.
    
    ```
    SELECT
        status AS "Status",
        duration AS "Duration (ms)",
        optimization_cost AS "Optimization Cost (ms)",
        start_query_cost AS "Startup Cost (ms)",
        get_next_cost AS "Execution Cost (ms)",
        duration - optimization_cost - start_query_cost - get_next_cost AS "Other Cost (ms)",
        query_id AS "QueryID",
        query::char(30)
    FROM
        hologres.hg_query_log
    WHERE
        query_start >= now() - interval '10 min'
    ORDER BY
        duration DESC,
        start_query_cost DESC,
        optimization_cost,
        get_next_cost DESC,
        duration - optimization_cost - start_query_cost - get_next_cost DESC
    LIMIT 100;
    ```
    
    The following result is returned:
    
    ```
    Status   | Duration (ms) | Optimization Cost (ms) | Startup Cost (ms) | Execution Cost (ms) | Other Cost (ms) |      QueryID       |             query
    ---------+----------+--------------+--------------+--------------+--------------+--------------------+--------------------------------
     SUCCESS |     4572 |          521 |          320 |         3726 |            5 | 6000260625679xxxx  | -- /* user: wang ip: xxx.xx.x
     SUCCESS |     1490 |          538 |           98 |          846 |            8 | 12000250867886xxxx | -- /* user: lisa ip: xxx.xx.x
     SUCCESS |     1230 |          502 |           95 |          625 |            8 | 26000512070295xxxx | -- /* user: zhang ip: xxx.xx.
    (3 rows)
    ```
    
-   Query the first failed query.
    
    ```
    SELECT
        status AS "Status",
        regexp_replace(message, '\n', ' ')::char(150) AS "Error Message",
        duration AS "Duration (ms)",
        query_start AS "Start Time",
        query_id AS "QueryID",
        query::char(100) AS "Query"
    FROM
        hologres.hg_query_log
    WHERE
        query_start BETWEEN '2021-03-25 17:00:00'::timestamptz AND '2021-03-25 17:42:00'::timestamptz + interval '2 min'
        AND status = 'FAILED'
    ORDER BY
        query_start ASC
    LIMIT 100;
    ```
    
    The following result is returned:
    
    ```
    Status  |                                                                     Error Message                                                                          | Duration (ms)  |        Start Time        |     QueryID       | Query
    --------+--------------------------------------------------------------------------------------------------------------------------------------------------------+-------+------------------------+-------------------+-------
     FAILED | Query:[1070285448673xxxx] code: kActorInvokeError msg: "[holo_query_executor.cc:330 operator()] HGERR_code XX000 HGERR_msge internal error: status { c |  1460 | 2021-03-25 17:28:54+08 | 1070285448673xxxx | S...
     FAILED | Query:[1016285560553xxxx] code: kActorInvokeError msg: "[holo_query_executor.cc:330 operator()] HGERR_code XX000 HGERR_msge internal error: status { c |   131 | 2021-03-25 17:28:55+08 | 1016285560553xxxx | S...
    (2 rows)
    ```
    

## **Modify the lifecycle of slow query logs**

Starting from Hologres V3.0.27, you can modify the lifecycle of slow query logs. You can run the following SQL statement to make changes at the database level:

```
ALTER DATABASE <db_name> SET hg_query_log_retention_time_sec = 2592000;
```

-   The parameter is in seconds. You can set the lifecycle to a value between 3 and 30 days, which corresponds to a range of 259,200 to 2,592,000 seconds.
    
-   The modified lifecycle applies only to new logs. Existing logs still follow the previous configuration.
    
-   The modified lifecycle applies only to new connections.
    
-   After you set the lifecycle with this parameter, expired logs are cleaned up immediately, not asynchronously.
    

## Export slow query logs

Hologres lets you use INSERT statements to export data from slow query logs (hg\_query\_log) to your custom internal tables or to foreign tables such as MaxCompute or OSS.

-   Notes
    
    To export data from slow query logs correctly and efficiently, note the following:
    
    -   The account that runs `INSERT INTO ... SELECT ... FROM hologres.hg_query_log;` must have the required access permissions for the `hologres.hg_query_log` table. For more information, see [Grant permissions](#section-6wh-73s-rey). To export slow query logs for the entire instance, the account running the `INSERT` command must have superuser or pg\_read\_all\_stats permissions. Otherwise, the data queried from the `hologres.hg_query_log` table will be incomplete, and the exported data will also be incomplete.
        
    -   query\_start is an index of the slow query log table. To export data for a specific time range, include the `query_start` column in your query conditions. This improves performance and reduces resource consumption.
        
    -   When you use `query_start` to filter by time range, do not use nested expressions on `query_start`. This prevents the index from being hit. For example, a better way to write `WHERE to_char(query_start, 'yyyymmdd') = '20220101';` is: `WHERE query_start >= to_char('20220101', 'yyyy-mm-dd') AND query_start < to_char('20220102', 'yyyy-mm-dd');`.
        
    
-   Example 1: Export to a Hologres internal table.
    
    Run the following commands in Hologres to export slow query logs to the query\_log\_download internal table.
    
    ```
    --Hologres SQL
    CREATE TABLE query_log_download (
        usename text,
        status text,
        query_id text,
        datname text,
        command_tag text,
        duration integer,
        message text,
        query_start timestamp with time zone,
        query_date text,
        query text,
        result_rows bigint,
        result_bytes bigint,
        read_rows bigint,
        read_bytes bigint,
        affected_rows bigint,
        affected_bytes bigint,
        memory_bytes bigint,
        shuffle_bytes bigint,
        cpu_time_ms bigint,
        physical_reads bigint,
        pid integer,
        application_name text,
        engine_type text[],
        client_addr text,
        table_write text,
        table_read text[],
        session_id text,
        session_start timestamp with time zone,
        trans_id text,
        command_id text,
        optimization_cost integer,
        start_query_cost integer,
        get_next_cost integer,
        extended_cost text,
        plan text,
        statistics text,
        visualization_info text,
        query_detail text,
        query_extinfo text[]
    );
    
    INSERT INTO query_log_download SELECT
      usename,
      status,
      query_id,
      datname,
      command_tag,
      duration,
      message,
      query_start,
      query_date,
      query,
      result_rows,
      result_bytes,
      read_rows,
      read_bytes,
      affected_rows,
      affected_bytes,
      memory_bytes,
      shuffle_bytes,
      cpu_time_ms,
      physical_reads,
      pid,
      application_name,
      engine_type,
      client_addr,
      table_write,
      table_read,
      session_id,
      session_start,
      trans_id,
      command_id,
      optimization_cost,
      start_query_cost,
      get_next_cost,
      extended_cost,
      plan,
      statistics,
      visualization_info,
      query_detail,
      query_extinfo
    FROM hologres.hg_query_log
    WHERE query_start >= '2022-08-03'
      		AND query_start < '2022-08-04';
    ```
    
-   Example 2: Export to a MaxCompute foreign table.
    
    1.  Run the following command in MaxCompute to create a table to receive the data.
        
        ```
        CREATE TABLE if NOT EXISTS mc_holo_query_log (
            username STRING COMMENT 'The username for the query'
            ,status STRING COMMENT 'The final status of the query: success or failed'
            ,query_id STRING COMMENT 'The query ID'
            ,datname STRING COMMENT 'The name of the database for the query'
            ,command_tag STRING COMMENT 'The type of query'
            ,duration BIGINT COMMENT 'The query duration in milliseconds (ms)'
            ,message STRING COMMENT 'The error message'
            ,query STRING COMMENT 'The text content of the query'
            ,read_rows BIGINT COMMENT 'The number of rows read by the query'
            ,read_bytes BIGINT COMMENT 'The number of bytes read by the query'
            ,memory_bytes BIGINT COMMENT 'The peak memory consumption on a single node (not exact)'
            ,shuffle_bytes BIGINT COMMENT 'The estimated number of bytes for data shuffle (not exact)'
            ,cpu_time_ms BIGINT COMMENT 'The total CPU time in milliseconds (not exact)'
            ,physical_reads BIGINT COMMENT 'The number of physical reads'
            ,application_name STRING COMMENT 'The query application type'
            ,engine_type ARRAY<STRING> COMMENT 'The engine used for the query'
            ,table_write STRING COMMENT 'The table to which the SQL statement writes data'
            ,table_read ARRAY<STRING> COMMENT 'The table from which the SQL statement reads data'
            ,plan STRING COMMENT 'The execution plan for the query'
            ,optimization_cost BIGINT COMMENT 'The time to generate the query execution plan'
            ,start_query_cost BIGINT COMMENT 'The query startup time'
            ,get_next_cost BIGINT COMMENT 'The query execution duration'
            ,extended_cost STRING COMMENT 'Other detailed costs of the query'
            ,query_detail STRING COMMENT 'Other extended information about the query (stored in JSON format)'
            ,query_extinfo ARRAY<STRING> COMMENT 'Other extended information about the query (stored in ARRAY format)'
            ,query_start STRING COMMENT 'The query start time'
            ,query_date STRING COMMENT 'The query start date'
        ) COMMENT 'hologres instance query log daily'
        PARTITIONED BY (
            ds STRING COMMENT 'stat date'
        ) LIFECYCLE 365;
        
        ALTER TABLE mc_holo_query_log ADD PARTITION (ds=20220803);
        ```
        
    2.  Run the following commands in Hologres to export slow query logs to the MaxCompute foreign table.
        
        ```
        IMPORT FOREIGN SCHEMA project_name LIMIT TO (mc_holo_query_log)
        FROM SERVER odps_server INTO public;
        
        INSERT INTO mc_holo_query_log
        SELECT
            usename AS username,
            status,
            query_id,
            datname,
            command_tag,
            duration,
            message,
            query,
            read_rows,
            read_bytes,
            memory_bytes,
            shuffle_bytes,
            cpu_time_ms,
            physical_reads,
            application_name,
            engine_type,
            table_write,
            table_read,
            plan,
            optimization_cost,
            start_query_cost,
            get_next_cost,
            extended_cost,
            query_detail,
            query_extinfo,
            query_start,
            query_date,
            '20220803'
        FROM
            hologres.hg_query_log
        WHERE
            query_start >= '2022-08-03'
            AND query_start < '2022-08-04';
        ```
        

## Configuration items

Hologres provides the following configuration items to help you record specific queries.

#### **log\_min\_duration\_statement**

-   **Description**:
    
    This item specifies the minimum duration for a query to be logged as a slow query. By default, the system collects queries that run longer than 100 ms, but only queries that run longer than 1 s are displayed. You can use this item to change the display threshold. Note:
    
    -   Changes to this item apply only to new queries. Previously collected queries are displayed based on the original default value.
        
    -   Only a superuser can change this setting.
        
    -   Set it to `-1` to stop logging any queries. If you set it to a positive number, the minimum value is 100 ms.
        
-   **Example**:
    
    Set the threshold so that all SQL statements that run for `250 ms` or longer are logged and can be queried:
    
    ```
    -- Set at the DB level (requires superuser)
    ALTER DATABASE dbname SET log_min_duration_statement = '250ms';
    
    -- Set at the current session level (can be run by regular users)
    SET log_min_duration_statement = '250ms';
    ```
    

#### **log\_min\_duration\_query\_stats**

-   **Description**:
    
    This item records the execution statistics of a query. By default, the system records statistics for queries that run longer than 10 s. Note:
    
    -   Changes to this item apply only to new queries. Previously recorded queries are displayed based on the original default value.
        
    -   Set it to `-1` to stop recording query statistics.
        
    -   This information requires a large amount of storage. Recording too much information can slow down the analysis of slow query logs. Therefore, you can set it to less than 10 s when troubleshooting specific issues. Otherwise, do not set it to a smaller value.
        
-   **Example**:
    
    Set the system to record statistics for queries that run longer than 20 s:
    
    ```
    --Set at the DB level (requires superuser)
    ALTER DATABASE dbname SET log_min_duration_query_stats = '20s';
    
    -- Set at the current session level (can be run by regular users)
    SET log_min_duration_query_stats = '20s';
    ```
    

#### **log\_min\_duration\_query\_plan**

-   **Description:**
    
    This item records the execution plan information for a query. By default, the system displays the execution plan for slow query logs that are 10 s or longer. Note:
    
    -   Changes to this item apply only to new queries. Previously recorded queries are displayed based on the original default value.
        
    -   If a statement's execution time is greater than or equal to the set number of milliseconds, its execution plan is recorded in the slow query log.
        
    -   In general, you can get the execution plan instantly using `EXPLAIN`. You do not need to record it separately.
        
    -   Set it to `-1` to stop recording query execution plans.
        
-   **Example**:
    
    Set the system to record the execution plan for query logs that are longer than 10 s:
    
    ```
    -- Set at the DB level (requires superuser)
    ALTER DATABASE dbname SET log_min_duration_query_plan = '10s';
    
    -- Set at the current session level (can be run by regular users)
    SET log_min_duration_query_plan = '10s';
    ```
    

## FAQ

-   Symptom:
    
    When viewing slow query logs in Hologres V1.1, information such as the number of rows queried and the number of rows returned is not displayed.
    
-   Cause:
    
    The slow query log collection is incomplete.
    
-   Solution:
    
    In Hologres V1.1.36 to V1.1.49, you can use the following GUC parameter to display the complete information. This information is displayed by default in Hologres V1.1.49 and later.
    
    **Note**
    
    If your Hologres instance is earlier than V1.1.36, see [Common upgrade preparation errors](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group for feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
    ```
    -- (Recommended) At the database level, set this once per database.
    ALTER DATABASE <db_name> SET hg_experimental_force_sync_collect_execution_statistics = ON;
    
    -- At the session level
    SET hg_experimental_force_sync_collect_execution_statistics = ON;
    ```
    
    db\_name is the name of the database.
    

## **References**

To diagnose and manage queries in your instance, see [Manage queries](/help/en/hologres/user-guide/manage-queries).
