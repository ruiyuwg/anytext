When the base table of a dynamic table’s data source changes, the dynamic table refreshes to update its data. Dynamic tables automatically run refresh tasks in the background based on the configured start time and refresh interval. This topic describes how to view and maintain dynamic table refresh tasks.

## Monitoring and alerting

### Monitoring metrics

Starting from Hologres V4.0.8, dynamic tables provide the following monitoring metrics to help you manage refresh tasks:

#### Instance-level dynamic table refresh failure QPS (count/s)

This metric shows the queries per second (QPS) of failed refresh tasks across all dynamic tables in an instance. It reflects the overall health of the refresh process. Normally, this value should be close to zero. If it remains consistently nonzero or increases significantly, refresh tasks are likely failing repeatedly. Go to the [HoloWeb console](https://holoweb-ap-southeast-3.data.alibabacloud.com/?spm=a2cbu.13822726.0.0.43bf3be3BStWoW) to review the failed tasks and resolve the issues as soon as possible.

#### Dynamic table data latency (s)

This metric shows the data latency of each dynamic table in an instance relative to the latest data in the upstream base table or a specified point in time. The unit is seconds. It reflects data freshness. Set a reasonable alert threshold for latency based on your requirements. If latency continues to increase, possible causes include the following:

-   Refresh tasks are continuously failing or auto-refresh is paused. Go to the dynamic table management page in the [HoloWeb console](https://holoweb-ap-southeast-3.data.alibabacloud.com/?spm=a2cbu.13822726.0.0.43bf3be3BStWoW) to investigate.
    
-   A large volume of data has changed in the upstream data source, and insufficient instance resources are slowing down the refresh process. Investigate by reviewing Hologres monitoring metrics such as refresh duration.
    

#### Duration of running dynamic table refresh tasks (ms)

This metric shows how long the current refresh task for each dynamic table in an instance has been running. The unit is milliseconds. Use this metric to detect whether the refresh epoch has lengthened. Configure refresh duration alerts for individual tables based on your business scenarios. If this metric suddenly increases or remains significantly higher than its historical average, investigate potential causes such as instance resource bottlenecks or changes in upstream data volume.

#### Dynamic table refresh failure QPM (count/m)

This metric shows the number of failed refresh tasks per minute for each dynamic table in an instance. It helps assess the refresh stability of a single table. Normally, this value should be zero. Occasional failures—such as those caused by system pressure or instance upgrades—can generally be ignored if subsequent refreshes succeed. If this metric remains greater than zero for a table over time, it indicates a persistent issue with that table’s refresh tasks. Investigate and resolve the issue using the error message in the dynamic table’s failure log.

### Alerting

You can configure alert rules for dynamic table refresh tasks in Cloud Monitor to detect anomalies promptly. For more information, see [Instance observalability with Cloud Monitor](/help/en/hologres/user-guide/cloudmonitor).

## **View refresh tasks**

### **View running refresh tasks**

#### View using `hologres.hg_dynamic_table_refresh_activity`

You can use the `hologres.hg_dynamic_table_refresh_activity` system table to view running refresh tasks—including full and incremental refreshes—and their resource consumption. For more information about the fields in the `hologres.hg_dynamic_table_refresh_activity` system table, see [hologres.hg\_dynamic\_table\_refresh\_activity system table](/help/en/hologres/user-guide/dynamic-table-system-tables#e882722d9ccuv).

**Note**

This system table is supported only in Hologres V3.0, and V4.0.8 and later.

```
-- View currently running refresh tasks
SELECT
    pid,
    query_id,
    refresh_mode,
    'RUNNING' as status,
    refresh_start,
    extract(epoch from duration) as duration, -- milliseconds
    serverless_queue_time_ms::bigint / 1000 AS serverless_queue_time_sec,
    serverless_resource_used_time_ms::bigint / 1000 AS serverless_resource_used_time_sec,
    serverless_allocated_cores
FROM
    hologres.hg_dynamic_table_refresh_activity
WHERE datname = '${database}'
  AND table_write = quote_ident('${schema}') || '.' || quote_ident('${tableName}')
ORDER BY refresh_start DESC
limit 2000;
```

#### **View using** `**hg_stat_activity**`

You can use the `hg_stat_activity` system view to view running refresh tasks. The display differs depending on the refresh mode in `hg_stat_activity`:

-   Full refresh: An \`INSERT\` statement appears.
    
-   Incremental refresh: A \`Refresh\` task appears.
    

### **View refresh tasks using monitoring metrics**

You can check metrics such as QPS, records per second (RPS), and latency to confirm the execution status of dynamic table refresh tasks. A \`Command Type\` of \`refresh\` indicates a dynamic table refresh task. For more information about monitoring metrics, see [Hologres console monitoring metrics](/help/en/hologres/user-guide/hologres-metrics).

If a dynamic table refresh task runs on Serverless Computing resources, you can also view its status in the relevant Serverless Computing metrics.

**Note**

You can create alert rules for dynamic table refresh tasks in Cloud Monitor. For more information, see [Instance observalability with Cloud Monitor](/help/en/hologres/user-guide/cloudmonitor).

### **View historical refresh tasks**

#### **View using** `hologres.hg_dynamic_table_refresh_history`

The `hologres.hg_dynamic_table_refresh_history` system table records the history of all dynamic table refresh tasks for the last month, including full, incremental, and manual refreshes. For more information about the fields in the `hologres.hg_dynamic_table_refresh_history` system table, see [hologres.hg\_dynamic\_table\_refresh\_history system table](/help/en/hologres/user-guide/dynamic-table-system-tables#498772f5e35xc).

**Note**

-   By default, records for the last month are retained. You cannot query data older than one month.
    
-   Table owners can view only their own refresh history, while Superusers can view all refresh records.
    

-   Example 1: View incremental refresh records from the past day.
    
    ```
    -- Example 1: View the records of incremental refreshes over the past day
    SELECT
        query_id,
        refresh_mode,
        status,
        refresh_start,
        duration,
        refresh_latency / 1000 AS refresh_latency_second,
        serverless_allocated_cores,
        queue_time_ms::bigint / 1000 AS queue_time_second,
        serverless_resource_used_time_ms::bigint / 1000 AS serverless_resource_used_time_second
    FROM
        hologres.hg_dynamic_table_refresh_history
    WHERE
        refresh_start >= CURRENT_DATE - INTERVAL '1 day'
        AND dynamic_table_name = '<dynamic_table>'
        AND refresh_mode = 'incremental'
    ORDER BY
        refresh_start DESC
    limit 100;
    ```
    
-   Example 2: View all refresh tasks in the current instance from the past day.
    
    ```
    -- View all refresh records in the instance over the past day
    SELECT 
    query_id,
        refresh_mode,
        status,
        refresh_start,
        duration,
        refresh_latency / 1000 AS refresh_latency_second,
        serverless_allocated_cores,
        queue_time_ms::bigint / 1000 AS queue_time_second,
        serverless_resource_used_time_ms::bigint / 1000 AS serverless_resource_used_time_second
    FROM hologres.hg_dynamic_table_refresh_history where refresh_start >= CURRENT_DATE - INTERVAL '1 day'
    ```
    
-   Example 3: View refresh records for a specific table from the past day.
    
    ```
    -- View the refresh records for a specific table over the past day
    SELECT 
    query_id,
        refresh_mode,
        status,
        refresh_start,
        duration,
        refresh_latency / 1000 AS refresh_latency_second,
         serverless_allocated_cores,
        queue_time_ms::bigint / 1000 AS queue_time_second,
        serverless_resource_used_time_ms::bigint / 1000 AS serverless_resource_used_time_second
    FROM hologres.hg_dynamic_table_refresh_history where schema_name='<scehma_name>' and dynamic_table_name='<dynamic_table>' and  refresh_start >= CURRENT_DATE - INTERVAL '1 day'
    ```
    

**Note**

For full-refresh dynamic tables created with the legacy 3.0 syntax, `hologres.hg_dynamic_table_refresh_history` may not reflect the true success or failure status of a refresh. A failed refresh might appear as \`Success\`. To retrieve the true historical refresh status of a full-refresh dynamic table created with the 3.0 syntax, do the following:

1.  Retrieve the `cron_job_name` from `hologres.hg_dynamic_table_properties`.
    
2.  Use the `cron_job_name` to query the Cron task execution records in `hologres.hg_user_cron_tasks`.
    

```
-- Get the cron_job_name
SELECT property_value AS cron_job_name
FROM hologres.hg_dynamic_table_properties
WHERE dynamic_table_name = '<dt_name>' AND property_key = 'cron_job_name';

-- Query Cron task execution records by cron_job_name
SELECT *
FROM hologres.hg_user_cron_tasks
WHERE jobname = '<cron_job_name>'
ORDER BY start_time DESC;
```

#### **View using slow query logs**

You can view dynamic table refresh tasks in the slow query logs. The \`Command Type\` is \`refresh\`. For more information about viewing slow query logs, see [Get and analyze slow query logs](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs).

## **View the execution plan of a refresh task**

Like regular queries, you can use [EXPLAIN and EXPLAIN ANALYZE](/help/en/hologres/developer-reference/explain-and-explain-analyze) to view the execution plan and runtime information of a refresh task. This helps you identify performance bottlenecks and optimize the query further. The following example shows how to do this:

```
 explain refresh dynamic table hmtest.dt_order_lineitem;
                                                                                                  QUERY PLAN                                                 
                                                 
-------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------
 Gather  (cost=0.00..10.13 rows=1 width=16)
   ->  Insert  (cost=0.00..10.13 rows=1 width=16)
         ->  Redistribution  (cost=0.00..10.11 rows=1 width=16)
               ->  Final HashAggregate  (cost=0.00..10.11 rows=1 width=16)
                     Group Key: orders.o_orderpriority
                     ->  Redistribution  (cost=0.00..10.11 rows=10 width=16)
                           Hash Key: orders.o_orderpriority
                           ->  Partial HashAggregate  (cost=0.00..10.11 rows=10 width=16)
                                 Group Key: orders.o_orderpriority
                                 ->  Hash Left Semi Join  (cost=0.00..10.11 rows=1000 width=8)
                                       Hash Cond: (orders.o_orderkey = lineitem.l_orderkey)
                                       ->  Redistribution  (cost=0.00..5.03 rows=1000 width=16)
                                             Hash Key: orders.o_orderkey
                                             ->  Local Gather  (cost=0.00..5.01 rows=1000 width=16)
                                                   ->  Seq Scan on orders  (cost=0.00..5.01 rows=1000 width=16)
                                                         Filter: ((o_orderdate >= '1996-07-01 00:00:00+08'::timestamp with time zone) AND (o_orderdate < '199
6-10-01 00:00:00+08'::timestamp with time zone))
                                       ->  Hash  (cost=5.03..5.03 rows=1000 width=8)
                                             ->  Redistribution  (cost=0.00..5.03 rows=1000 width=8)
                                                   Hash Key: lineitem.l_orderkey
                                                   ->  Local Gather  (cost=0.00..5.03 rows=1000 width=8)
                                                         ->  Seq Scan on lineitem  (cost=0.00..5.03 rows=1000 width=8)
                                                               Filter: (l_commitdate < l_receiptdate)
 Optimizer: HQO version 2.1.0
(23 rows)
```

## Set the refresh timeout duration

Like regular queries, you can set a timeout duration for dynamic table refresh tasks.

### **Table-level settings**

When you create a dynamic table, you can set a refresh task timeout duration that applies to all refresh tasks for that table. The following SQL code uses the `tpch_10g` public dataset as an example. Before you run the code, make sure you have successfully imported the `tpch_10g` public dataset. For more information, see [Create a task to import a public dataset](/help/en/hologres/user-guide/one-click-import-of-public-datasets#ab3265b01ecf8).

```
-- Set the refresh task timeout duration when creating the table.
CREATE DYNAMIC TABLE tpch_q1_batch
  WITH (
    refresh_mode='full',
    auto_refresh_enable='true',
    full_auto_refresh_interval='1 hours',
    refresh_guc_statement_timeout='30 mins'-- The refresh timeout duration is 30 mins
       ) 
AS
  SELECT
        l_returnflag,
        l_linestatus,
        SUM(l_quantity) AS sum_qty,
        SUM(l_extendedprice) AS sum_base_price,
        SUM(l_extendedprice * (1 - l_discount)) AS sum_disc_price,
        SUM(l_extendedprice * (1 - l_discount) * (1 + l_tax)) AS sum_charge,
        AVG(l_quantity) AS avg_qty,
        AVG(l_extendedprice) AS avg_price,
        AVG(l_discount) AS avg_disc,
        COUNT(*) AS count_order
FROM
        hologres_dataset_tpch_10.lineitem
WHERE
        l_shipdate <= DATE '1998-12-01' - INTERVAL '120' DAY
GROUP BY
        l_returnflag,
        l_linestatus;
```

### **Session-level settings**

When you perform a manual refresh, you can set the timeout duration using a session-level Grand Unified Configuration (GUC) parameter. The following is a sample SQL statement:

```
SET statement_timeout = <time>;
refresh DYNAMIC TABLE <dynamic_schema_name.dynamic_table_name>;
```

For more information about settings, see [Modify the timeout duration for active queries](/help/en/hologres/user-guide/manage-queries#section-8js-89g-oon).

### **Set using \`refresh with option\`**

When you perform a manual refresh, you can also use `refresh ... with (refresh_guc_statement_timeout = '...')` to specify a timeout duration for the current refresh. The following is an example.

```
REFRESH DYNAMIC TABLE <schema_name.table_name> WITH (
    refresh_guc_statement_timeout = '30 mins'
);
```

## **Manual refresh**

You can manually refresh a dynamic table. The syntax is as follows:

```
REFRESH DYNAMIC TABLE <schema_name.table_name>;
```

**Note**

If auto-refresh is enabled in the table properties, a manual refresh runs in parallel with the auto-refresh task. Both tasks run normally. The system ensures that only one copy of the latest data is retained.

## Cancel a refresh task

### Dynamic tables created with the new 3.1 syntax

#### **Cancel a running refresh task**

For a dynamic table created with the new 3.1 syntax, first query the `query_job_id` of the running refresh task from `hologres.hg_dynamic_table_refresh_log`, then cancel the task using `hologres.hg_internal_cancel_query_job`.

```
-- Get the query_job_id
SELECT query_job_id
FROM hologres.hg_dynamic_table_refresh_log('<dt_name>')
WHERE status = 'Running';

-- Cancel the refresh task based on the query_job_id
SELECT hologres.hg_internal_cancel_query_job('<query_job_id>');
```

**Note**

Only a Superuser can cancel a refresh task using `hologres.hg_internal_cancel_query_job`.

#### **Cancel all refresh tasks for a table**

If refresh tasks are configured for a dynamic table, you can run the ALTER TABLE statement to cancel all subsequent refresh tasks at the table level. To re-enable refreshing, see [ALTER DYNAMIC TABLE](/help/en/hologres/user-guide/alter-dynamic-table).

```
ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema>.]<table_name> SET (auto_refresh_enable=false);
```

**Important**

Use this operation with caution. Otherwise, subsequent data may not be updated.

### Dynamic tables created with the 3.0 syntax

#### **Cancel a running refresh task**

If a refresh task runs for an extended period without completing or exhibits issues such as stuttering, you can cancel the running refresh task using `pg_cancel_backend`.

Run the following command to cancel a single running refresh task.

```
-- pid is the refresh task ID. You can obtain the query_id by viewing the refresh task.
SELECT pg_cancel_backend(<pid>);
```

The \`pid\` parameter is the refresh task ID. You can obtain the refresh task ID (\`query\_id\`) by viewing the refresh task. For more information, see [View refresh tasks](#b6159372c2e51).

**Note**

The method for canceling running refresh tasks in batches is the same as for regular queries. For more information, see [Stop a query](/help/en/hologres/user-guide/manage-queries#section-702-ew2-jgy).

#### **Cancel all refresh tasks for a table**

If refresh tasks are configured for a dynamic table, you can use the [ALTER DYNAMIC TABLE](/help/en/hologres/user-guide/alter-dynamic-table) command to cancel all subsequent refresh tasks at the table level.

```
ALTER DYNAMIC TABLE [IF EXISTS ] [<schema>.]<table_name> set (auto_refresh_enable=false);
```

**Important**

Use this operation with caution. Otherwise, subsequent data may not be updated.
