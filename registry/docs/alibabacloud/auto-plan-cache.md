You can use the Auto Plan Cache feature provided by PolarDB for MySQL to cache the execution plans of SQL statements to shorten the query optimization time and improve the query performance of SQL statements. This topic describes the auto plan cache feature.

## Background information

The selection of an execution plan depends on many factors such as statistics, join orders, and query transformations. Optimization time varies for different query statements. The optimization time for some SQL statements may be very long in comparison to the overall execution time. If such SQL statements are executed several times, the system load increases due to their long optimization time. Caching and reusing the execution plans of SQL statements can reduce the optimization time when SQL statements are executed. This improves query performance, reduces database loads, and boosts throughput.

In contrast, some query statements have very short query optimization time. Their execution time depends heavily on execution plans. Parameter values in SQL statements also determine optimal execution plans. In some scenarios, MySQL optimizes actual data obtained from the engine based on parameter values.

If the preceding query statements use fixed execution plans, their query response time and load overheads are not significantly optimized. The query performance may even be degraded.

To improve the query performance of SQL statements that have very long optimization time, reduce system loads, and avoid query performance degradation caused by fixed execution plans when SQL statements are executed, PolarDB for MySQL launches the auto plan cache feature. The auto plan cache feature supports three modes: AUTO, DEMAND, and ENFORCE. You can select one by setting the `loose_plan_cache_type` parameter to cache execution plans of SQL statements in the plan cache to reduce optimization time and improve query performance. When the statistics of the tables referenced in the execution plans cached in the plan cache change or DDL operations are performed on the tables referenced by the execution plans cached in the plan cache, the cached execution plans automatically become invalid.

## Prerequisites

Your PolarDB cluster uses one of the following versions:

-   A cluster of PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.33 or later.
    
-   A cluster of PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.12 or later.
    

## Parameters

You can set the following parameters in the [PolarDB console](https://polardb.console.alibabacloud.com/). For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).

**Parameter**

**Description**

loose\_plan\_cache\_type

The auto plan cache mode. Valid values:

-   **OFF** (default): disables the auto plan cache feature.
    
-   **AUTO**: automatically caches the execution plans of SQL statements that meet the cache conditions.
    
    **Note**
    
    Cache conditions:
    
    If the overall execution time of a SQL statement is greater than or equal to the `loose_auto_plan_cache_time_threshold` value and the ratio of the optimization time of the SQL statement to the overall execution time is greater than or equal to the `loose_auto_plan_cache_pct_threshold` value, the execution plan of the SQL statement is cached.
    
-   **DEMAND**: caches the execution plans of specified SQL statements.
    
-   **ENFORCE**: forcibly caches the execution plans of all SQL statements.
    

loose\_plan\_cache\_expire\_time

The time period before the plan cache is reclaimed when no execution plan is hit. Unit: seconds.

Valid values: 0 to 4294967295. Default value: 1800.

loose\_auto\_plan\_cache\_pct\_threshold

The specified ratio of the optimization time of a SQL statement to the overall execution time.

Valid values: 0 to 100. Default value: 20.

loose\_auto\_plan\_cache\_time\_threshold

The specified overall execution time of the SQL statement. Unit: microseconds.

Valid values: 0 to 18446744073709551615. Default value: 400.

loose\_auto\_plan\_cache\_count\_threshold

The number of allowed operations to cache the execution plans of the SQL statements that meet the cache conditions when the `loose_plan_cache_type` parameter is set to **AUTO**.

Valid values: 0 to 18446744073709551615. Default value: 512.

**Note**

The cached execution plan takes effect only when the number of allowed operations to cache execution plans is greater than or equal to the `loose_auto_plan_cache_count_threshold` value.

## Stored procedures

-   `dbms_sql.add_plan_cache(schema, query)`: caches the execution plans of the specified SQL statement in the plan cache.
    
    If the l`oose_plan_cache_type` parameter is set to **DEMAND**, you can use this built-in stored procedure to cache the execution plans of the specified SQL statement in the plan cache. Example:
    
    ```
    CALL dbms_sql.add_plan_cache("test", "SELECT * FROM t_for_plan WHERE c1 > 1 AND c1 < 10");
    ```
    
    After the preceding statements are executed, when your executed SQL statements meet the `SELECT * FROM t_for_plan WHERE c1 > ? AND c1 < ?` template, the execution plans of the SQL statements are cached in the plan cache.
    
-   `dbms_sql.display_plan_cache_table()`: displays information about tables referenced in the plan cache. Example:
    
    ```
    CALL dbms_sql.display_plan_cache_table()\G
    ```
    
    Sample result:
    
    ```
    *************************** 1. row ***************************
     SCHEMA_NAME: test
      TABLE_NAME: t_for_plan
       REF_COUNT: 1
         VERSION: 0
    VERSION_TIME: 2023-03-10 17:21:35.605264
    ```
    
    Parameters in the stored procedure:
    
    -   SCHEMA\_NAME: the name of the schema where the referenced table resides.
        
    -   TABLE\_NAME: the name of the referenced table.
        
    -   REF\_COUNT: the number of references of the table in the plan cache.
        
    -   VERSION: the version of the referenced table in the plan cache.
        
    -   VERSION\_TIME: the time when the table of the current version is referenced.
        
-   `dbms_sql.delete_sharing_by_rowid(row_id)`: deletes the execution plans of the specified SQL statement.
    
    `row_id`: the row ID value for the execution plan stored in the `mysql.sql_sharing` table.
    
    **Examples**
    
    1.  Execute the following SQL statement to query the execution plans cached in the plan cache:
        
        ```
        SELECT Id, Schema_name, Type, Digest_text FROM mysql.sql_sharing WHERE Type = 'PLAN_CACHE'\G
        ```
        
        Sample result:
        
        ```
        *************************** 1. row ***************************
                 Id: 1
        Schema_name: test
               Type: PLAN_CACHE
        Digest_text: SELECT * FROM `t_for_plan` WHERE `c1` > ? AND `c1` < ?
        ```
        
        The result indicates that the `row_id` value is 1.
        
    2.  Delete the execution plans obtained in the preceding query.
        
        ```
        CALL dbms_sql.delete_sharing_by_rowid(1);
        ```
        

## Query information of the plan cache

The execution plans of SQL statements are stored in the SQL Sharing module. You can execute the following SQL statement to query information of the plan cache from the `INFORMATION_SCHEMA.SQL_SHARING` table.

```
SELECT TYPE, REF_BY, SQL_ID, SCHEMA_NAME, DIGEST_TEXT, PLAN_ID, PLAN, PLAN_EXTRA, EXTRA FROM INFORMATION_SCHEMA.SQL_SHARING WHERE json_contains(REF_BY, '"PLAN_CACHE"') or json_contains(REF_BY, '"PLAN_CACHE(DEMAND)"')\G
```

**Examples**

1.  Prepare data.
    
    ```
    CREATE TABLE t_for_plan AS WITH RECURSIVE t(c1, c2, c3) AS (SELECT 1, 1, 1 UNION ALL SELECT c1+1, c1 % 50, c1 %200 FROM t WHERE c1 < 1000) SELECT c1, c2, c3 FROM t;
    CREATE INDEX i_c1_c2 on t_for_plan(c1, c2);
    ```
    
2.  Set the auto plan cache mode to **DEMAND**.
    
    You can use one of the following methods to set auto plan cache mode:
    
    -   On the **Parameters** page of the [PolarDB console](https://polardb.console.alibabacloud.com/), set the `loose_plan_cache_type` parameter to **DEMAND**. Disconnect and then reconnect to the database.
        
    -   Maintain the current database connection and execute the following statement to set the `plan_cache_type` parameter in the current session to `DEMAND`.
        
        ```
        SET plan_cache_type=demand;
        ```
        
    
3.  Execute the following statement to cache the execution plan of the specified SQL statement in the plan cache:
    
    ```
    CALL dbms_sql.add_plan_cache("test", "SELECT * FROM t_for_plan WHERE c1 > 1 AND c1 < 10");
    ```
    
4.  Execute the query statement.
    
    ```
    SELECT * FROM t_for_plan WHERE c1 > 1 AND c1 < 10;
    ```
    
5.  Query information of the plan cache.
    
    ```
    SELECT TYPE, REF_BY, SQL_ID, SCHEMA_NAME, DIGEST_TEXT, PLAN_ID, PLAN, PLAN_EXTRA, EXTRA FROM INFORMATION_SCHEMA.SQL_SHARING WHERE json_contains(REF_BY, '"PLAN_CACHE"') or json_contains(REF_BY, '"PLAN_CACHE(DEMAND)"')\G
    ```
    
    Sample result:
    
    ```
    *************************** 1. row ***************************
           TYPE: SQL
         REF_BY: ["PLAN_CACHE(DEMAND)"]
         SQL_ID: 9jrvksr3wjux6
    SCHEMA_NAME: test
    DIGEST_TEXT: SELECT * FROM `t_for_plan` WHERE `c1` > ? AND `c1` < ?
        PLAN_ID: NULL
           PLAN: NULL
     PLAN_EXTRA: NULL
          EXTRA: {"TRACE_ROW_ID":1}
    *************************** 2. row ***************************
           TYPE: PLAN
         REF_BY: ["PLAN_CACHE"]
         SQL_ID: 9jrvksr3wjux6
    SCHEMA_NAME: test
    DIGEST_TEXT: NULL
        PLAN_ID: 08xftakma6pm6
           PLAN: /*+ INDEX(`t_for_plan`@`select#1` `i_c1_c2`) */
     PLAN_EXTRA: {"access_type":["`t_for_plan`:range"]}
          EXTRA: {"PLAN_CACHE_INFO":{"tables":[`test`.`t_for_plan`], "versions":[0], "hits": 0}}
    ```
    
    The `PLAN_CACHE_INFO` item of the `EXTRA` field displays the referenced table, the version of the referenced table, and the number of hits of the execution plan.
    

## Performance data

A stress test is performed for a cluster that uses 8 cores and 32 GB of memory. 25 tables are created in the database. Each table stores 4 million rows of data. The SQL statement used in the test is `SELECT id FROM sbtestN WHERE k IN(...)`. The length of IN LIST is 20. The performance is tested when the `loose_plan_cache_type` parameter is set to **OFF**, **AUTO**, and **ENFORCE** for both the PS and non-PS protocols. Test results:

-   The following figure shows the performance test results for the PS protocol.![PS协议下的查询性能](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6703780961/p627532.png)
    
-   The following figure shows the performance test results for the non-PS protocol.![非PS协议下的查询性能](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6703780961/p627534.png)
    

The test results indicate that the auto plan cache feature can improve performance by more than 50% for both the PS protocol and non-PS protocol.
