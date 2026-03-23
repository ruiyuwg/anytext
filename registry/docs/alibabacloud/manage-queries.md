Monitor, diagnose, and control running queries in a Hologres instance. Use SQL views or the HoloWeb console to identify slow or resource-intensive queries, cancel problematic statements, configure timeouts, and troubleshoot lock contention.

## Available methods

Hologres supports two approaches for query management:

**Method**

**Best for**

**Details**

**SQL** (`hg_stat_activity` / `pg_stat_activity`)

Programmatic access, scripting, detailed resource metrics (CPU, memory)

[View active queries using SQL](#section-hne-4no-4cb)

**HoloWeb console**

Visual monitoring, one-click cancellation, batch operations

[Manage active queries in the HoloWeb console](#section-2zj-zt4-md7)

## View active queries using SQL

Query the `hg_stat_activity` view (Hologres V2.0 and later) or `pg_stat_activity` view (V1.3 and earlier) to inspect running statements, resource consumption, and execution stages.

**Note**

Superusers can view SQL runtime information for all users. Non-superusers can only view their own.

### List active queries

```
-- Hologres V2.0 and later
SELECT query, state, query_id, transaction_id, running_info, extend_info
FROM hg_stat_activity
WHERE state = 'active'
AND   backend_type = 'client backend'
AND   application_name != 'hologres';

-- Hologres V1.3 and earlier
SELECT query, state, pid
FROM pg_stat_activity
WHERE state = 'active'
AND   backend_type = 'client backend'
AND   application_name != 'hologres';
```

Sample output (V2.0+):

```
query          | insert into test_hg_stat_activity select i, (i % 7) :: text, (i % 1007) from generate_series(1, 10000000)i;
state          | active
query_id       | 100713xxxx
transaction_id | 100713xxxx
running_info   | {"current_stage" : {"stage_duration_ms" :5994,
                                      "stage_name" :"EXECUTE" },
                   "engine_type" :"{HQE,PQE}",
                   "fe_id" :1,
                   "warehouse_id" :0 }
extend_info    | {"affected_rows" :9510912,
                  "scanned_rows" :9527296 }
```

### Sort queries by CPU consumption

```
-- Hologres V2.0 and later
SELECT query,
       ((extend_info::json)->'total_cpu_max_time_ms')::text::bigint AS cpu_cost,
       state, query_id, transaction_id
FROM hg_stat_activity
WHERE state = 'active'
ORDER BY 2 DESC;
```

Sample output:

```
query          | select xxxxx
cpu_cost       | 523461
state          | active
query_id       | 10053xxxx
transaction_id | 10053xxxx
-------------------------------------------------
query          | insert xxxx
cpu_cost       | 4817
state          | active
query_id       | 1008305xxx
transaction_id | 1008305xxx
```

### Sort queries by memory consumption

```
-- Hologres V2.0 and later
SELECT query,
       ((extend_info::json)->'total_mem_max_bytes')::text::bigint AS mem_max_cost,
       state, query_id, transaction_id
FROM hg_stat_activity
WHERE state = 'active'
ORDER BY 2 DESC;
```

Sample output:

```
query          | update xxxx;
mem_max_cost   | 5727634542
state          | active
query_id       | 10053302784827629
transaction_id | 10053302784827629
-------------------------------------------------
query          | select xxxx;
mem_max_cost   | 19535640
state          | active
query_id       | 10083259096119559
transaction_id | 10083259096119559
```

### Find long-running queries

```
-- Hologres V2.0 and later
SELECT current_timestamp - query_start AS runtime,
       datname::text, usename, query, query_id
FROM hg_stat_activity
WHERE state != 'idle'
AND   backend_type = 'client backend'
AND   application_name != 'hologres'
ORDER BY 1 DESC;

-- Hologres V1.3 and earlier
SELECT current_timestamp - query_start AS runtime,
       datname::text, usename, query, pid
FROM pg_stat_activity
WHERE state != 'idle'
AND   backend_type = 'client backend'
AND   application_name != 'hologres'
ORDER BY 1 DESC;
```

Sample output:

```
runtime          |  datname  | usename  | query_id |      query
-----------------+-----------+----------+----------+--------------------
 00:00:24.258388 | holotest  | 123xxx   | 1267xx   | UPDATE xxx;
 00:00:1.186394  | testdb    | 156xx    | 1783xx   | select xxxx;
```

In this example, the `UPDATE` statement has been running for 24 seconds and has not finished.

## Manage active queries in the HoloWeb console

The HoloWeb console provides a visual interface for monitoring and canceling active queries.

### Procedure

1.  Log on to the [HoloWeb console](/help/en/hologres/getting-started/connect-to-holoweb#task-2523359).
    
2.  In the top navigation bar, click **Diagnostics and Optimization**.
    
3.  In the left-side navigation pane, choose **Management for Information About Active Queries** > **Active Query Tasks**.
    
4.  On the **Active Query Tasks** page, click **Search** to load the active queries for the current instance.
    

The results table contains the following fields:

**Field**

**Description**

**Query Start**

Time when the query started

**Runtime**

How long the query has been running

**PID**

Process ID of the query

**Query**

SQL statement being executed

**State**

Connection state. See [Connection states](#h2-195c9cbb) for details.

**User Name**

Username of the connection

**Application**

Query application type

**Client Address**

IP address of the client that initiated the query

### Cancel queries

-   To cancel a single query, click **Cancel** in the **Actions** column.
    
-   To cancel multiple queries at once, select them and click **Batch Cancel**.
    

### View query details

Click **Details** in the **Actions** column to open the query detail page, where you can:

-   **Copy** -- Copy the SQL statement.
    
-   **Format** -- Format the SQL statement for readability.
    

## Cancel a query

If a query consumes too many resources or runs longer than expected, cancel it with `pg_cancel_backend()`.

First, find the process ID (PID) of the target query using any of the [SQL statements above](#section-hne-4no-4cb), then cancel it:

```
-- Cancel a single query
SELECT pg_cancel_backend(<pid>);
```

To cancel all active user queries in batch:

```
SELECT pg_cancel_backend(pid),
       query, datname, usename,
       application_name, client_addr, client_port,
       backend_start, state
FROM   pg_stat_activity
WHERE  length(query) > 0
AND    pid != pg_backend_pid()
AND    backend_type = 'client backend'
AND    application_name != 'hologres';
```

## Set the active query timeout

The `statement_timeout` parameter controls how long a query can run before it is automatically canceled. The default timeout is **8 hours**.

### Syntax

```
SET statement_timeout = <time>;
```

**Attribute**

**Details**

**Scope**

Session level

**Value range**

0 -- 2147483647

**Default unit**

Milliseconds (ms)

**Default value**

8 hours

When specifying a unit (such as `min`, `s`, or `h`), enclose the value in single quotes. Without quotes, the value is interpreted as milliseconds.

**Note**

Run the `SET statement_timeout` statement in the same session as the query it applies to.

### Examples

Set the timeout to 5,000 minutes:

```
SET statement_timeout = '5000min';
SELECT * FROM tablename;
```

Set the timeout to 5,000 milliseconds:

```
SET statement_timeout = 5000;
SELECT * FROM tablename;
```

## Set the idle transaction timeout

The `idle_in_transaction_session_timeout` parameter controls how long a transaction can remain idle before it is automatically rolled back and the connection is closed. Without this setting, uncommitted transactions can stay open indefinitely and cause deadlocks.

### When to use

Consider the following scenario: a `BEGIN` starts a transaction, but the corresponding `COMMIT` is never executed.

```
BEGIN;
SELECT * FROM t;
-- Missing COMMIT causes a transaction leak
```

This leaked transaction holds locks, which can escalate to a database-level deadlock affecting other queries. Setting `idle_in_transaction_session_timeout` prevents this by automatically rolling back idle transactions after the specified period.

### Syntax

```
-- Session level
SET idle_in_transaction_session_timeout = <time>;

-- Database level
ALTER DATABASE db_name SET idle_in_transaction_session_timeout = <time>;
```

**Attribute**

**Details**

**Scope**

Session level or database level

**Value range**

0 -- 2147483647

**Default unit**

Milliseconds (ms)

**Default (V0.10 and earlier)**

0 (idle transactions are not automatically cleared)

**Default (V1.1 and later)**

10 minutes (transaction is rolled back after 10 minutes)

**Note**

Do not set this value too low. A short timeout can cause active transactions to be rolled back prematurely.

### Example

Set the timeout to 300,000 milliseconds (5 minutes):

```
-- Session level
SET idle_in_transaction_session_timeout = 300000;

-- Database level
ALTER DATABASE db_name SET idle_in_transaction_session_timeout = 300000;
```

## Troubleshoot locks

Active queries can reveal whether a SQL statement holds a lock or is waiting for one. For detailed troubleshooting steps, see [Locks and lock troubleshooting](/help/en/hologres/user-guide/locks-and-lock-troubleshooting#task-2208970).

## Query slow query logs

Starting from Hologres V0.10, slow query logs are available for diagnosing and optimizing failed or slow queries. For details, see [View and analyze slow query logs](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs#concept-2069482).

## Connection states

The `state` field in query results and the HoloWeb console indicates the current connection status:

**State**

**Description**

`active`

The connection is running a query.

`idle`

The connection is idle and waiting for a new command.

`idle in transaction`

The connection is idle inside an open transaction.

`idle in transaction (Aborted)`

The connection is idle inside a failed transaction.

`\N`

A background system process, not a user connection. Safe to ignore.

## FAQ

### Why do I get `ERROR: canceling statement due to statement timeout`?

This error means a query exceeded its configured timeout. Check the following in order:

1.  **Client or tool-level timeout** -- Some tools have fixed, non-configurable timeouts: If you hit one of these limits, optimize the SQL statement to reduce execution time.
    
    -   DataService Studio APIs: **10 seconds**
        
    -   HoloWeb console and the Hologres SQL module in DataWorks: **1 hour**
        
2.  **Instance-level timeout** -- Run `SHOW statement_timeout;` to check the current value. Reset it if needed:
    
    ```
       SHOW statement_timeout;
    ```
    
3.  **Application-level timeout** -- Check timeout settings in your client driver or connection pool configuration.
    
4.  **Lock contention from concurrent DDL** -- A `DROP` or `TRUNCATE` on the same table while a Data Manipulation Language (DML) statement is running causes the DML to be canceled. `TRUNCATE` internally runs `DROP` followed by `CREATE`, which competes for the lock held by the DML statement. To confirm, query the slow query logs for concurrent `DROP` or `TRUNCATE` operations: Avoid running DDL and DML on the same table at the same time.
    
    ```
       -- Check for DROP/TRUNCATE on a specific table in the last day
       SELECT * FROM hologres.hg_query_log
       WHERE command_tag IN ('DROP TABLE', 'TRUNCATE TABLE')
       AND   query LIKE '%xxx%'
       AND   query_start >= now() - interval '1 day';
    ```
