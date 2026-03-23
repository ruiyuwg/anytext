Hologres exposes monitoring metrics through the console and Cloud Monitor so you can track resource usage, query execution, and system health in real time.

## Metrics overview

**Category**

**Metric**

**Description**

**Supported instance types**

**Notes**

CPU

Instance CPU Usage (%)

CPU usage of the instance.

General-purpose, follower, compute group

\--

CPU

Worker Node CPU Usage (%)

CPU usage of each Worker node.

General-purpose, follower, compute group

V1.1+

CPU

Cluster CPU Usage (%)

CPU usage of each Cluster in the compute group.

Compute group

V4.0+

Memory

Instance Memory Usage (%)

Total memory usage of the instance.

General-purpose, follower, compute group

\--

Memory

Worker Node Memory Usage (%)

Memory usage of each Worker node.

General-purpose, follower, compute group

V1.1+

Memory

Detailed Compute Group Memory Usage (%)

Memory usage broken down by System, Meta, Cache, Query, and Background.

General-purpose, follower, compute group

V2.0+

Memory

QE Query Memory Usage (bytes)

Memory used by QE engine queries.

General-purpose, follower, compute group

V2.0.44+ / V2.1.22+

Memory

QE Query Memory Usage (%)

Percentage of memory used by QE engine queries.

General-purpose, follower, compute group

V2.0.44+ / V2.1.22+

Memory

Cluster Memory Usage (%)

Memory usage of each Cluster in the compute group.

Compute group

V4.0+

Query QPS and RPS

Query QPS (count/s)

Total queries per second. `Query QPS >= QE QPS + FixedQE QPS`.

General-purpose, follower, compute group, shared cluster

\--

Query QPS and RPS

QE Query QPS (count/s)

Queries per second executed by the QE engine.

General-purpose, follower, compute group

V2.2+

Query QPS and RPS

FixedQE Query QPS (count/s)

Queries per second executed by the FixedQE engine.

General-purpose, follower, compute group

V2.2+

Query QPS and RPS

DML RPS (count/s)

Total rows per second for DML operations. `DML RPS = QE RPS + FixedQE RPS`.

General-purpose, compute group

\--

Query QPS and RPS

QE DML RPS (count/s)

DML rows per second by the QE engine.

General-purpose, compute group

V2.2+

Query QPS and RPS

FixedQE DML RPS (count/s)

DML rows per second by the FixedQE engine.

General-purpose, compute group

V2.2+

Query Latency

Query Latency (milliseconds)

Average latency of all queries. `Query Latency >= MAX(QE Latency, FixedQE Latency)`.

General-purpose, follower, compute group, shared cluster

\--

Query Latency

QE Query Latency (milliseconds)

Average latency of QE engine queries.

General-purpose, follower, compute group

V2.2+

Query Latency

FixedQE Query Latency (milliseconds)

Average latency of FixedQE engine queries.

General-purpose, follower, compute group

V2.2+

Query Latency

Optimization Phase Duration (milliseconds)

Time spent in the query optimization phase.

General-purpose, follower, compute group, shared cluster

V2.0.44+ / V2.1.22+

Query Latency

Start Query Phase Duration (milliseconds)

Time spent in query initialization (locking, schema alignment).

General-purpose, follower, compute group, shared cluster

V2.0.44+ / V2.1.22+

Query Latency

Get Next Phase Duration (milliseconds)

Time from initialization to result delivery.

General-purpose, follower, compute group, shared cluster

V2.0.44+ / V2.1.22+

Query Latency

Query P99 Latency (milliseconds)

99th percentile latency of all queries.

General-purpose, follower, compute group, shared cluster

\--

Query Latency

Longest Running Query Duration in This Instance (milliseconds)

Duration of the longest-running active query.

General-purpose, follower, compute group, shared cluster

V1.1+

Failed Query QPS

Failed Query QPS (milliseconds)

Total failed queries per second. `Failed QPS >= QE Failed QPS + FixedQE Failed QPS`.

General-purpose, follower, compute group, shared cluster

\--

Failed Query QPS

QE Failed Query QPS (count/s)

Failed queries per second by the QE engine.

General-purpose, follower, compute group

V2.2+

Failed Query QPS

FixedQE Failed Query QPS (count/s)

Failed queries per second by the FixedQE engine.

General-purpose, compute group

V2.2+

Locks

Maximum FE Lock Wait Time (milliseconds)

DDL lock wait time on FE nodes.

General-purpose, follower, compute group

V2.0.44+ / V2.1.22+

Locks

FixedQE Backend Lock Wait Time (milliseconds)

Lock wait time for FixedQE (typically HQE locks).

General-purpose, follower, compute group

V2.0.44+ / V2.1.22+

Locks

Total Backend Lock Wait Time for Instance (milliseconds)

Total HQE lock wait time, including FixedQE lock waits.

General-purpose, follower, compute group

V2.0.44+ / V2.1.22+

Connection

Total Connections (count)

Total active connections in the instance.

General-purpose, follower, compute group, shared cluster

\--

Connection

Connections by Database (count)

Connections aggregated by database.

General-purpose, follower, compute group

\--

Connection

Connections by FE (count)

Connections aggregated by FE node.

General-purpose, follower, compute group

\--

Connection

Connection Usage Rate of FE with Highest Usage (%)

Peak connection usage rate across all FE nodes.

General-purpose, follower, compute group

\--

Query Queue

Queued Queries Count

Queries waiting to be executed.

General-purpose, follower, compute group

V3.0+

Query Queue

Query Queue Entry QPS (count/s)

Queries submitted to the queue per second.

General-purpose, follower, compute group

V3.0+

Query Queue

Queries Transitioned from Queued to Running QPS (count/s)

Queries moving from waiting to running per second.

General-purpose, follower, compute group

V3.0+

Query Queue

QPS by State for Queries That Started Running (count/s)

Per-second count of queries grouped by execution state.

General-purpose, follower, compute group

V3.0+

Query Queue

Average Query Queue Wait Time (milliseconds)

Average time from queue entry to processing start.

General-purpose, follower, compute group

V3.0+

Query Queue

Query Queue Auto-Rate-Limit Max Concurrency (count)

Maximum concurrency for auto-rate-limited queues.

Compute group

V3.1+

I/O

Standard I/O Read Throughput (bytes/s)

Read throughput for Standard storage.

General-purpose, follower, compute group

\--

I/O

Standard I/O Write Throughput (bytes/s)

Write throughput for Standard storage.

General-purpose, compute group

\--

I/O

Low-Frequency IO Read Throughput (bytes/s)

Read throughput for IA storage.

General-purpose, follower, compute group

\--

I/O

Write throughput for low-frequency I/O (bytes/s)

Write throughput for IA storage.

General-purpose, compute group

\--

Storage

Standard Storage Used Capacity (bytes)

Capacity used in Standard storage.

General-purpose, compute group

\--

Storage

Standard Storage Usage (%)

Usage percentage of Standard storage.

General-purpose, compute group

\--

Storage

IA Storage Used Capacity (bytes)

Capacity used in IA storage.

General-purpose, compute group

\--

Storage

IA Storage Usage (%)

Usage percentage of IA storage.

General-purpose, compute group

\--

Storage

Recycle Bin Storage Usage (bytes)

Storage consumed by the recycle bin.

General-purpose, compute group

V3.1+

Framework

FE Replay Delay (milliseconds)

Replay delay for each FE node.

General-purpose, follower, compute group

V2.2+

Framework

Shard Multi-Replica Sync Delay (milliseconds)

Sync delay between Shard replicas.

General-purpose, follower, compute group

\--

Framework

Primary-Follower Sync Delay (milliseconds)

Data sync delay from primary to follower instance.

General-purpose, follower, compute group

\--

Framework

Cross-Instance File Sync Delay (milliseconds)

File sync delay between disaster recovery instances.

General-purpose

\--

Auto Analyze

Tables Missing Statistics per Database (count)

Tables lacking statistics in each database.

General-purpose, compute group

V2.2+

Serverless Computing

Longest Running Serverless Computing Query Duration (milliseconds)

Longest-running Serverless Computing query.

General-purpose, compute group

V2.1+

Serverless Computing

Serverless Computing Query Queue Count

Queries queued in the Serverless Computing pool.

General-purpose, compute group

V2.2+

Serverless Computing

Serverless Computing Resource Quota Usage (%)

Ratio of used to maximum allocatable Serverless Computing resources.

General-purpose, compute group

V2.2+

Binary Logging

Binlog Consumption Rate (count/s)

Binlog entries consumed per second.

General-purpose, follower, compute group

V2.2+

Binary Logging

Binlog Consumption Rate (bytes/s)

Bytes consumed from Binlog per second.

General-purpose, follower, compute group

V2.2+

Binary Logging

WAL Sender Count per FE (count)

WAL senders used per FE node.

General-purpose, follower, compute group

V2.2+

Binary Logging

WAL Sender Usage Rate of FE with Highest Usage (%)

Peak WAL sender usage across FE nodes.

General-purpose, follower, compute group

V2.2+

Computing Resource

Elastic Core Count for Compute Groups

Cores added by time-based scaling.

Compute group

V2.2.21+

Computing Resource

Compute Group Auto-Elastic Core Count (count)

Cores added by auto-scaling.

Compute group

V4.0+

Gateway

Gateway CPU Usage (%)

CPU usage of each Gateway.

Compute group

V2.0+

Gateway

Gateway Memory Usage (%)

Memory usage of each Gateway.

Compute group

V2.0+

Gateway

Gateway New Connection Requests per Second (count/s)

New connections established per second.

Compute group

V2.1.12+

Gateway

Gateway Inbound Traffic Rate (B/s)

Data entering through the Gateway per second.

Compute group

V2.1+

Gateway

Gateway Outbound Traffic Rate (B/s)

Data sent from the Gateway per second.

Compute group

V2.1+

Dynamic Table

[Instance-Level Dynamic Table Refresh Failure QPS (count/s)](/help/en/hologres/user-guide/maintain-dynamic-table-update-tasks#x1y2z3a4b5c6)

Refresh failure rate across all Dynamic Tables.

General-purpose, compute group

V4.0.8+

Dynamic Table

[Dynamic Table Data Latency (seconds)](/help/en/hologres/user-guide/maintain-dynamic-table-update-tasks#o9p0q1r2s3t4)

Latency relative to the latest upstream data.

General-purpose, compute group

V4.0.8+

Dynamic Table

[Dynamic Table Current Refresh Duration (milliseconds)](/help/en/hologres/user-guide/maintain-dynamic-table-update-tasks#k8l9m0n1o2p3)

Duration of the ongoing refresh task.

General-purpose, compute group

V4.0.8+

Dynamic Table

[Dynamic Table Refresh Failure QPM (count/minute)](/help/en/hologres/user-guide/maintain-dynamic-table-update-tasks#c6d7e8f9g0h1)

Refresh failures per minute per Dynamic Table.

General-purpose, compute group

V4.0.8+

## Cloud Monitor metric IDs

Each metric has a unique ID in Cloud Monitor. The ID prefix varies by instance type:

**Instance type**

**Prefix**

**Metric reference**

General-purpose instance

`standard_`

[General-purpose instance metrics](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hologres/hologres_standard)

Follower instance

`follower_`

[Follower instance metrics](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hologres/hologres_follower)

Compute group instance

`warehouse_`

[Compute group instance metrics](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hologres/hologres_warehouse)

Lakehouse Acceleration (Shared Cluster)

`shared_`

[Shared cluster metrics](https://cloudmonitor.console.alibabacloud.com/metric-meta/acs_hologres/hologres_shared)

## Engine categories and command types

**Engine categories in monitoring metrics:**

-   **QE** is a collective term for Hologres proprietary vector compute engines (HQE, SQE) under the XQE engine family. In slow query logs, queries with `Engine Type={XQE}` map to the QE category.
    
-   **FixedQE** refers to queries that use the [Fixed Plan path](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans). In slow query logs, queries with `Engine Type={FixedQE}` (or `SDK` in versions earlier than V2.2) map to the FixedQE category.
    

**Command Type classification:**

-   Command Type matches the SQL statement type. For example, both `INSERT xxx` and `INSERT xxx ON CONFLICT DO UPDATE/NOTHING` are classified as INSERT.
    
-   **UNKNOWN**: SQL statements that the DPI engine cannot recognize due to syntax errors.
    
-   **UTILITY**: Administrative, definition, and control commands other than INSERT, UPDATE, DELETE, and SELECT, including:
    
    -   DDL: CREATE, ALTER, DROP, TRUNCATE, COMMENT
        
    -   TCL: BEGIN, COMMIT, ROLLBACK, SAVEPOINT
        
    -   Administration and maintenance: ANALYZE, VACUUM, EXPLAIN, SET, SHOW, COPY, REFRESH
        
    -   Execution and procedural control: PREPARE, EXECUTE, DEALLOCATE, CALL, DECLARE CURSOR
        
    -   Others: LOCK TABLE, LISTEN, NOTIFY
        

## Access control

The Hologres console monitoring page retrieves data from Cloud Monitor. Resource Access Management (RAM) users need one of the following permissions to view monitoring information:

**Permission policy**

**Access level**

`AliyunCloudMonitorFullAccess`

Full management permissions for Cloud Monitor

`AliyunCloudMonitorReadOnlyAccess`

Read-only access to Cloud Monitor

For details on granting permissions, see [Grant permissions to RAM users](/help/en/cms/cloudmonitor-1-0/user-guide/grant-permissions-to-a-ram-user).

## General notes

-   If a metric shows no data, the instance version may not support it, or there has been no activity for an extended period.
    
-   Monitoring data is retained for up to 30 days.
    
-   Metrics are reported every minute.
    

## CPU

### Instance CPU Usage (%)

The overall CPU load of the instance.

Background processes and asynchronous compaction tasks consume CPU even without active queries, so some usage during idle periods is normal. Hologres uses multi-core parallel computing, which means a single query can push CPU usage to 100% -- this indicates full utilization of compute resources, not necessarily an issue.

**When to investigate:** If CPU usage remains near 100% for 3 hours or above 90% for 12 hours, the instance is heavily loaded and CPU is likely the bottleneck. Consider whether:

-   Large offline data imports (INSERT) are running with growing data volumes.
    
-   High-QPS queries or writes are consuming all CPU resources.
    
-   Hybrid workloads combine the above scenarios.
    

If sustained high CPU is expected for your business, scale up the instance to handle larger workloads.

For more information, see [FAQ for monitoring metrics](/help/en/hologres/support/metric-faq).

### Worker Node CPU Usage (%)

The CPU load on each Worker node. The number of Worker nodes varies by instance type. For more information, see [Instance management](/help/en/hologres/user-guide/instance-management/).

**Version:** V1.1+

-   If all Worker nodes show sustained CPU usage near 100%, the instance is heavily loaded. Optimize queries or scale up the instance.
    
-   If only some Worker nodes show high CPU usage, a resource skew exists. For common causes and troubleshooting, see [FAQ for monitoring metrics](/help/en/hologres/support/metric-faq).
    

### Cluster CPU Usage (%)

The CPU usage of each Cluster in the compute group.

**Version:** V4.0+. Compute group instances only.

## Memory

### Instance Memory Usage (%)

The overall memory consumption of the instance.

Hologres reserves memory for metadata, indexes, and data caches to accelerate queries. Idle memory usage of 30% to 40% is typical. If memory usage steadily climbs toward 80%, memory may become a bottleneck.

Use memory distribution metrics together with QPS and other indicators to identify high-memory consumers. For more information, see [Troubleshooting guide for out-of-memory issues](/help/en/hologres/user-guide/faq-about-oom#concept-2207172).

### Worker Node Memory Usage (%)

The memory load on each Worker node. The number of Worker nodes varies by instance type. For more information, see [Instance management](/help/en/hologres/user-guide/instance-management/).

**Version:** V1.1+

-   If all Worker nodes show sustained memory usage near 80%, the instance is heavily loaded. Optimize queries or scale up the instance.
    
-   If only some Worker nodes show high memory usage, a resource skew exists. For common causes and troubleshooting, see [FAQ for monitoring metrics](/help/en/hologres/support/metric-faq).
    

### Detailed Compute Group Memory Usage (%)

**Version:** V2.0+ (memory distribution metrics available from V2.0.15)

Hologres divides memory into six categories:

**Category**

**What it tracks**

**Typical behavior**

**System**

Holohub, Gateway, and FE (FE Master + FE Query)

Fluctuates with query activity

**Cache**

SQL caches (result cache, block cache) and Meta cache (schema/file metadata)

Fixed size, typically ~30% of total instance memory. Some usage persists when idle (mainly Meta cache). Higher cache hit rates improve query performance -- smaller `Physical read bytes` values in EXPLAIN ANALYZE indicate better hit rates.

**Meta**

Metadata and files. Uses lazy open mode -- frequently accessed metadata stays in memory, infrequently accessed metadata does not.

Keep under 30% of total memory. High Meta usage suggests many files or partitioned tables. Use [Table statistics overview and analysis](/help/en/hologres/user-guide/query-and-analyze-table-statistics) to investigate.

**Query**

Memory consumed during SQL execution, including Fixed Plan, HQE, and SQE.

Elastic allocation: minimum 20 GB per Worker, maximum depends on available free memory. High usage in other categories reduces Query memory.

**Background**

Compaction and flush tasks.

Typically under 5%. Temporarily increases during index changes, bulk writes, or updates.

**Memtable**

In-memory tables for real-time writes, updates, and deletes.

Typically under 5%.

**Troubleshooting:** High Query memory usage or out-of-memory (OOM) events typically indicate complex queries or high concurrency. For optimization guidance, see [Optimize query performance](/help/en/hologres/user-guide/optimize-performance-of-queries-on-hologres-internal-tables).

### QE Query Memory Usage (bytes)

The memory (in bytes) used by queries executed by HQE, SQE, or other XQE engines.

**Version:** V2.0.44+ / V2.1.22+

In memory breakdowns, Query memory usage exceeds QE Query memory usage because Query includes all engine types. Higher QE Query memory usage indicates more complex queries that require more memory.

### QE Query Memory Usage (%)

The percentage of memory used by QE engine queries.

**Version:** V2.0.44+ / V2.1.22+

High usage may lead to OOM errors. Optimize queries or scale up the instance.

### Cluster Memory Usage (%)

The memory usage of each Cluster in the compute group.

**Version:** V4.0+. Compute group instances only.

## Query QPS and RPS

### Query QPS (count/s)

The average number of SQL statements executed per second across the instance, including SELECT, INSERT, UPDATE, DELETE, UTILITY, and UNKNOWN statements.

**Relationship:** `Query QPS >= QE Query QPS + FixedQE Query QPS`

The total QPS includes all queries (such as UNKNOWN, UTILITY, and `Engine Type={PG}`), so it is greater than or equal to the sum of QE and FixedQE QPS.

### QE Query QPS (count/s)

Queries per second executed by the QE engine, including SELECT, INSERT, UPDATE, and DELETE statements.

**Version:** V2.2+

### FixedQE Query QPS (count/s)

Queries per second executed by the FixedQE engine (Fixed Plan path, formerly SDK), including SELECT, INSERT, UPDATE, and DELETE statements.

**Version:** V2.2+

### DML RPS (count/s)

The average number of data records imported or updated per second, including INSERT, UPDATE, and DELETE statements.

**Relationship:** `DML RPS = QE DML RPS + FixedQE DML RPS`

### QE DML RPS (count/s)

Data records imported or updated per second by the QE engine, including INSERT, UPDATE, and DELETE statements.

**Version:** V2.2+

Common QE scenarios:

-   Batch import or update from MaxCompute or OSS external tables
    
-   Batch write or update using COPY
    
-   Batch import between Hologres tables
    

### FixedQE DML RPS (count/s)

Data records imported or updated per second by the FixedQE engine (formerly SDK), including INSERT, UPDATE, and DELETE statements.

**Version:** V2.2+

Common FixedQE scenarios:

-   [Real-time writes using Flink](/help/en/hologres/user-guide/import-using-flink/)
    
-   [Writes using Holo-Client](https://github.com/hologres/holo-client)
    
-   [Imports using Spark](/help/en/hologres/write-data-from-apache-spark-to-hologres)
    
-   [Real-time synchronization of MySQL Binlog to Hologres](/help/en/hologres/user-guide/use-real-time-sync-nodes-of-dataworks-to-synchronize-data-from-databases-to-hologres)
    
-   [Imports from DataHub](/help/en/hologres/user-guide/synchronize-data-from-datahub-to-hologres-in-real-time)
    
-   Offline writes using Data Integration (DataX)
    
-   Writes using SQL or JDBC with `INSERT INTO VALUES()`
    

## Query Latency

### Query Latency (milliseconds)

The average latency of all queries in the instance, including SELECT, INSERT, UPDATE, DELETE, UTILITY, and UNKNOWN statements.

**Relationship:** `Query Latency >= MAX(QE Query Latency, FixedQE Query Latency)`

### QE Query Latency (milliseconds)

The average latency of queries executed by the QE engine, including SELECT, INSERT, UPDATE, and DELETE statements.

**Version:** V2.2+

To troubleshoot elevated QE Query latency, check the Optimization Phase Duration, Start Query Phase Duration, Get Next Phase Duration, and QE QPS metrics.

### FixedQE Query Latency (milliseconds)

The average latency of queries executed by the FixedQE engine, including SELECT, INSERT, UPDATE, and DELETE statements.

**Version:** V2.2+

**Troubleshooting:**

-   **Occasional spikes:** May indicate HQE locks. Check whether the FixedQE Backend Lock Wait Time has increased. If so, use [Get query insights](/help/en/hologres/user-guide/query-insights) to identify the locking queries.
    
-   **Persistent high latency:** May result from a suboptimal table design or interference from complex queries. See [Common issues and diagnostics for Blink and Flink](/help/en/hologres/support/troubleshoot-blink-and-flink-issues).
    

### Optimization Phase Duration (milliseconds)

The time spent in the Optimization phase, where the optimizer parses the SQL statement and generates a physical plan.

**Version:** V2.0.44+ / V2.1.22+

Long Optimization durations suggest complex queries. If queries differ only in their parameters, use Prepared Statements to reduce optimization overhead. For more information, see [JDBC](/help/en/hologres/user-guide/use-jdbc-to-connect-to-hologres).

### Start Query Phase Duration (milliseconds)

The time spent in the Start Query phase -- the initialization before actual query execution, including locking and schema version alignment.

**Version:** V2.0.44+ / V2.1.22+

Long Start Query durations often result from lock waits or high CPU usage. Use [execution plans](/help/en/hologres/developer-reference/explain-and-explain-analyze) for deeper analysis.

### Get Next Phase Duration (milliseconds)

The time from the end of the Start Query phase until all results are returned, including computation and result delivery.

**Version:** V2.0.44+ / V2.1.22+

Long Get Next durations often reflect complex computations. Correlate with QE memory usage and QE QPS. If no anomalies exist in those metrics, the client may simply be slow to consume the results.

### Query P99 Latency (milliseconds)

The 99th percentile latency of all queries in the instance, including SELECT, INSERT, UPDATE, UTILITY, and system queries.

### Longest Running Query Duration in This Instance (milliseconds)

The duration of the longest-running query currently executing in the instance, covering SELECT, INSERT, UPDATE, DELETE, UTILITY, and UNKNOWN statements.

**Version:** V1.1+

Hologres is a distributed system with multiple Worker nodes. Queries are distributed across Workers, and this metric reports the longest-running query across all Workers. For example, if Workers are running queries of 10 minutes, 5 minutes, and 30 seconds, the reported value is 10 minutes.

Combine this metric with [active queries](/help/en/hologres/user-guide/manage-queries) or [slow query logs](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs) to diagnose long-running queries and resolve deadlocks.

> Metrics are reported every minute, so the "current running duration" starts slightly after the query begins. This metric is useful for anomaly detection but does not provide precise timing.

## Failed Query QPS

### Failed Query QPS (milliseconds)

The average number of failed SQL statements per second in the instance, including SELECT, INSERT, UPDATE, DELETE, UTILITY, and UNKNOWN statements.

**Relationship:** `Failed Query QPS >= QE Failed Query QPS + FixedQE Failed Query QPS`

The total failed QPS includes all failed queries (such as UNKNOWN, UTILITY, and `Engine Type={PG}`), so it is greater than or equal to the sum of QE and FixedQE failed QPS.

Use the failed query type and frequency to find failing queries in the [slow query logs](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs), then analyze root causes to improve availability.

### QE Failed Query QPS (count/s)

Failed queries per second executed by the QE engine, including SELECT, INSERT, UPDATE, and DELETE statements.

**Version:** V2.2+

### FixedQE Failed Query QPS (count/s)

Failed queries per second executed by the FixedQE engine, including SELECT, INSERT, UPDATE, and DELETE statements.

**Version:** V2.2+

## Locks

### Maximum FE Lock Wait Time (milliseconds)

Hologres has multiple FE nodes that parse, dispatch, and route SQL statements. When multiple connections on the same FE perform DDL operations on the same table (such as CREATE or DROP), FE locks occur. This metric shows the DDL lock wait time per FE.

**Version:** V2.2+

If the FE lock wait time exceeds 5 minutes and the FE Replay Delay also spikes, a DDL operation may be stuck. Use [Manage queries](/help/en/hologres/user-guide/manage-queries) to find and terminate long-running queries.

### FixedQE Backend Lock Wait Time (milliseconds)

INSERT, DELETE, or UPDATE queries using HQE take table locks, while FixedPlan queries take row locks. This metric increases when FixedPlan queries wait for row locks while HQE queries hold table locks on the same table.

**Version:** V2.2+

If this value is high, check slow query logs for slow FixedQE queries, then use [Get query insights](/help/en/hologres/user-guide/query-insights) to identify the locking HQE queries.

### Total Backend Lock Wait Time for Instance (milliseconds)

The total lock wait time for INSERT, DELETE, or UPDATE queries in the instance, including both FixedQE and HQE lock waits.

**Version:** V2.2+

If this value is high, check slow query logs for slow INSERT, DELETE, or UPDATE queries, then use [Get query insights](/help/en/hologres/user-guide/query-insights) to identify the locking HQE queries.

## Connection

### Total Connections (count)

All active connections in the instance, including those in active, idle, and idle-in-transaction states. Hologres sets default connection limits based on instance type. For more information, see [Instance management](/help/en/hologres/user-guide/instance-management/).

Use [Manage queries](/help/en/hologres/user-guide/manage-queries) to view current usage. Kill idle connections if available connections are low.

### Connections by Database (count)

Connections aggregated by database, for assessing per-database connection usage.

-   Default connection limit per database: 128. For more information, see [Instance management](/help/en/hologres/user-guide/instance-management/).
    
-   If connections approach the limit, review idle versus business connections. Use [Connection management](/help/en/hologres/user-guide/manage-connections) to clean up idle connections or scale up.
    
-   If connection load skews across Workers, use [Connection management](/help/en/hologres/user-guide/manage-connections) to rebalance.
    

### Connections by FE (count)

Connections aggregated by FE node, for assessing per-FE connection usage.

-   Default connection limit per FE node: 128. For more information, see [Instance management](/help/en/hologres/user-guide/instance-management/).
    
-   If connections approach the limit, review idle versus business connections. Use [Connection management](/help/en/hologres/user-guide/manage-connections) to clean up idle connections or scale up.
    
-   If connection load skews across Workers, use [Connection management](/help/en/hologres/user-guide/manage-connections) to rebalance.
    

### Connection Usage Rate of FE with Highest Usage (%)

Reports the highest connection usage rate among all FE nodes: `Max(frontend_connection_used_rate)`. FE nodes use round-robin load balancing to distribute new connections evenly.

Use [Manage queries](/help/en/hologres/user-guide/manage-queries) to view current usage. Kill idle connections if available connections are low.

## Query Queue

### Queued Queries Count (count)

The number of query requests waiting to be executed.

**Version:** V3.0+

### Query Queue Entry QPS (count/s)

Queries submitted to the system queue per second. Use this to gauge the system load and query frequency.

**Version:** V3.0+

### Queries Transitioned from Queued to Running QPS (count/s)

Queries moving from the waiting state to the running state per second.

**Version:** V3.0+

### QPS by State for Queries That Started Running (count/s)

Per-second count of queries in the query queue, grouped by state:

-   **kReadyToRun** -- qualified to run
    
-   **kQueueTimeout** -- failed due to queue timeout
    
-   **kCanceled** -- failed due to cancellation
    
-   **kExceedConcurrencyLimit** -- failed due to concurrency limit
    

**Version:** V3.0+

### Average Query Queue Wait Time (milliseconds)

The average time from queue entry to processing start. This does not include actual query execution time.

**Version:** V3.0+

### Query Queue Auto-Rate-Limit Max Concurrency (count)

The maximum concurrency for auto-rate-limited query queues.

**Version:** V3.1+. Compute group instances only.

## I/O

I/O throughput reflects disk I/O activity. Note: `1 GiB = 1024 MiB = 1024 x 1024 KiB`.

**I/O throughput limits:**

-   **Standard storage (hot):** I/O throughput is not fixed. It depends primarily on CPU load.
    
-   **IA storage (cold):** Maximum I/O throughput is `80 MB/s x (number of cores / 16)`.
    

### Standard I/O Read Throughput (bytes/s)

Read throughput for Standard storage data.

### Standard I/O Write Throughput (bytes/s)

Write throughput for Standard storage data.

### Low-Frequency IO Read Throughput (bytes/s)

Read throughput for IA storage data.

### Write throughput for low-frequency I/O (bytes/s)

Write throughput for IA storage data.

## Storage

The logical disk space used by instance data -- the sum of all database storage, including the recycle bin. Note: `1 GiB = 1024 MiB = 1024 x 1024 KiB`. Hologres storage grows continuously with no hard cap.

For subscription instances, storage exceeding the purchased amount is automatically billed on a pay-as-you-go basis. This does not affect system stability or usability. After exceeding the storage capacity, promptly upgrade storage or delete unused data to avoid unnecessary costs.

Use [pg\_relation\_size](/help/en/hologres/query-the-storage-sizes-of-tables-and-databases) to view table and database storage sizes. Use [Table Info](/help/en/hologres/user-guide/query-and-analyze-table-statistics) for fine-grained table management.

### Standard Storage Used Capacity (bytes)

The capacity used in Standard storage. Scale up storage if usage exceeds the purchased capacity.

### Standard Storage Usage (%)

The usage percentage of Standard storage capacity. Scale up storage if usage exceeds the purchased capacity.

### IA Storage Used Capacity (bytes)

The capacity used in IA storage. Scale up storage if usage exceeds the purchased capacity.

### IA Storage Usage (%)

The usage percentage of IA storage capacity. Scale up storage if usage exceeds the purchased capacity.

### Recycle Bin Storage Usage (bytes)

**Version:** V3.1+

Hologres supports a [table recycle bin](/help/en/hologres/user-guide/table-recycle-bin) starting in V3.1. Tables dropped with `DROP` remain in the recycle bin for a retention period, allowing recovery of accidentally dropped tables. These tables still consume instance storage.

Monitor recycle bin usage per database. If frequent table drops cause high recycle bin usage, configure tables to skip the recycle bin upon deletion.

## Framework

### FE Replay Delay (milliseconds)

**Version:** V2.2+

Hologres has multiple FE nodes. For DDL operations, Hologres executes the operation on one FE and replays it on the others. Millisecond- or second-level replay delays are normal.

If an FE's replay delay exceeds several minutes, too many DDL operations may be overwhelming the replay process. If the delay continues to increase, a query may be stuck. Use [hg\_stat\_activity](/help/en/hologres/user-guide/serverless-computing/) to find and terminate long-running queries.

### Shard Multi-Replica Sync Delay (milliseconds)

The sync delay between Shard replicas after [Replication](/help/en/hologres/user-guide/shard-level-replication-for-high-throughout) is enabled.

The typical Shard replica delay is in milliseconds. Heavy data writes, updates, or frequent DDL operations may increase the sync delay.

### Primary-Follower Sync Delay (milliseconds)

The delay when a follower instance reads data from the primary instance. This metric appears only for follower instances, not primary instances.

-   Data appears only after a follower instance is bound to a primary instance (0 ms initially). The sync delay fluctuates when the primary instance receives writes.
    
-   Normal sync delay is in milliseconds. Occasional jitter from primary DDL operations is safe to ignore. Persistent high delay of more than a few seconds may indicate a high instance load or resource shortage -- check CPU and memory usage and scale up if needed.
    
-   Sync delay may spike to several minutes during restarts or upgrades and then recovers automatically.
    

### Cross-Instance File Sync Delay (milliseconds)

The file sync delay between disaster recovery instances. This metric appears only on follower instances (read-only followers).

## Auto Analyze

### Tables Missing Statistics per Database (count)

The number of tables lacking statistics in each database.

**Version:** V2.2+

For Hologres V2.0 and later, Auto Analyze runs by default. After table creation or bulk writes/updates, statistics may temporarily lag -- observe for a short period first.

If a database consistently lacks statistics for hours or days, Auto Analyze may not have been triggered. Use the [HG\_STATS\_MISSING view](/help/en/hologres/developer-reference/hg-stats-missing-view) to list affected tables, then manually run ANALYZE. For more information, see [ANALYZE and AUTO ANALYZE](/help/en/hologres/developer-reference/analyze-and-auto-analyze).

## Serverless Computing

### Longest Running Serverless Computing Query Duration (milliseconds)

The duration of the longest-running query in Serverless Computing. Serverless Computing runs specific queries in a dedicated resource pool, isolated from the main instance.

**Version:** V2.1+

Use [hg\_stat\_activity](/help/en/hologres/user-guide/serverless-computing/) to inspect the status of Serverless Computing queries.

### Serverless Computing Query Queue Count (count)

The number of queries queued in the Serverless Computing resource pool.

**Version:** V2.2+

### Serverless Computing Resource Quota Usage (%)

The ratio of actual Serverless Computing resources used to the maximum allocatable resources.

**Version:** V2.2+

## Binary Logging

### Binlog Consumption Rate (count/s)

The number of Binlog entries consumed per second. Hologres supports [subscribing to Hologres Binlog](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs) for real-time data tiering and accelerated data forwarding.

**Version:** V2.2+

### Binlog Consumption Rate (bytes/s)

The bytes consumed from Binlog per second. Larger fields or higher data volumes increase the byte count.

**Version:** V2.2+

### WAL Sender Count per FE (count)

The number of WAL senders used per FE node. Each shard of each table consumes one WAL sender connection when consuming Binlog using JDBC. WAL sender connections are independent of regular connections and have a default limit.

**Version:** V2.2+

### WAL Sender Usage Rate of FE with Highest Usage (%)

The peak WAL sender utilization across all FE nodes.

**Version:** V2.2+

If WAL sender usage reaches the limit, see [Consume Hologres Binlog via JDBC](/help/en/hologres/user-guide/use-jdbc-to-consume-hologres-binary-logs) for troubleshooting.

## Computing Resource

### Elastic Core Count for Compute Groups

The number of cores added by time-based scaling in the compute group. For more information, see [Time-based elasticity (Beta)](/help/en/hologres/user-guide/scheduled-scaling-of-virtual-warehouses).

**Version:** V2.2.21+. Compute group instances only.

### Compute Group Auto-Elastic Core Count (count)

The number of cores added by auto-scaling in the compute group. For more information, see [Multi-cluster and auto-elasticity (Beta)](/help/en/hologres/user-guide/multi-cluster-and-auto-elasticity-beta).

**Version:** V4.0+. Compute group instances only.

## Gateway

### Gateway CPU Usage (%)

The CPU usage of each Gateway in the instance.

**Version:** V2.0+. Compute group instances only.

Gateways use round-robin traffic forwarding, so CPU usage occurs even without new connections. Starting in V2.2.22, Gateways launch more worker threads by default to improve connection handling, which increases baseline CPU usage.

### Gateway Memory Usage (%)

The memory usage of each Gateway in the instance.

**Version:** V2.0+. Compute group instances only.

### Gateway New Connection Requests per Second (count/s)

The maximum number of new connections that the system can accept and successfully establish per second.

**Version:** V2.1.12+. Compute group instances only.

A single Gateway handles approximately 100 new connections per second. If new connection requests approach `100 x Gateway count`, the Gateways are the bottleneck. Configure a connection pool or scale up the number of Gateways.

### Gateway Inbound Traffic Rate (B/s)

The volume of data entering through the Gateway per second.

**Version:** V2.1+. Compute group instances only.

If inbound traffic approaches `200 MiB/s x Gateway count`, the Gateway network capacity is the bottleneck. Scale up the number of Gateways.

### Gateway Outbound Traffic Rate (B/s)

The volume of data sent from the Gateway per second.

**Version:** V2.1+. Compute group instances only.

If outbound traffic approaches `200 MiB/s x Gateway count`, the Gateway network capacity is the bottleneck. Scale up the number of Gateways.

## Dynamic Table monitoring and alerting

Starting in Hologres V4.0.8, Dynamic Tables offer monitoring metrics for managing refresh tasks. For more information, see [Monitoring and alerting](/help/en/hologres/user-guide/maintain-dynamic-table-update-tasks#83a0538de98tv).

## Common monitoring metric issues

The [FAQ for monitoring metrics](/help/en/hologres/support/metric-faq) topic covers common issues, root causes, and fixes.

## Monitoring metric alerting

Set alerts for monitoring metrics in Cloud Monitor to detect anomalies early. For more information, see [Cloud Monitor](/help/en/hologres/user-guide/cloudmonitor).
