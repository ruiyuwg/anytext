This topic helps you diagnose and resolve common issues when you use Hologres as a source, sink, or dimension table in Flink (including fully managed Flink, Ververica Runtime (VVR), and open source Flink) and Blink.

## Quick reference: error messages

Use this table to locate the solution for a specific error message.

**Error message**

**Category**

**Link**

`ERPC_ERROR_TIMEOUT` / `ERPC CONNECTION CLOSED`

[Write errors](#h3-8f658238)

[Error: ERPC TIMEOUT or ERPC CONNECTION CLOSED](#faaa3336fax5o)

`BackPresure Exceed Reject Limit`

[Write errors](#h3-8f658238)

[Error: BackPresure Exceed Reject Limit](#0bd9b6920d4bg)

`Modify record by primary key is not on this table`

[Write errors](#h3-8f658238)

[Error: Modify record by primary key](#2408f60c57b4n)

`shard columns count is no match`

[Write errors](#h3-8f658238)

[Error: Shard columns count mismatch](#605f0256c9gan)

`Full row is required, but the column xxx is missing`

[Write errors](#h3-8f658238)

[Error: Full row required, column missing](#f224e7bae12wc)

`table name xxx mismatches the version`

[Schema and DDL errors](#h3-d2426ab3)

[Error: Table name version mismatch](#ea36b19ba5eey)

`Failed to query table meta for table`

[Schema and DDL errors](#h3-d2426ab3)

[Error: Failed to query table meta](#31f22a9e885rr)

`Column type does not match: TIMESTAMP(6) WITH LOCAL TIME ZONE`

[Schema and DDL errors](#h3-d2426ab3)

[Error: Timestamp type mismatch](#0a212664f2zn1)

`table writer init failed: Fail to fetch table meta from sm`

[Schema and DDL errors](#h3-d2426ab3)

[Error: Table writer init failed after truncate or rename](#NLRrX)

`Cloud authentication failed for access id`

[Permission errors](#h3-d13cc3b1)

[Error: Cloud authentication failed](#444a1607588j6)

`Rejected by ip white list`

[Permission errors](#h3-d13cc3b1)

[Error: IP whitelist rejection](#66c0e52845k6f)

`permission denied for database`

[Permission errors](#h3-d13cc3b1)

[Error: Permission denied for binary log consumption](#ae56ed3ce1n26)

Dimension table join returns no data

[Read and dimension table errors](#h3-76119438)

[Dimension table join returns no data](#01d66e46f3ugk)

`Hologres rpc mode dimension table does not support one to many join`

[Read and dimension table errors](#h3-76119438)

[Error: RPC mode dimension table one-to-many join](#3ecdfee3bdk63)

`invalid byte sequence for encoding "UTF8": 0x00`

[Read and dimension table errors](#h3-76119438)

[Error: Invalid UTF-8 byte sequence](#a04adb1045yu2)

`TableVersionExpired`

[Binary log errors](#h3-3eed00e0)

[Error: TableVersionExpired during binary log consumption](#235b369045sld)

`Shard ID does not exist`

[Binary log errors](#h3-3eed00e0)

[Exception: Shard ID does not exist on binary log startup](#61181d4145uhx)

`hologres.org.postgresql.util.PSQLException: ERROR: syntax error`

[Binary log errors](#h3-3eed00e0)

[Error: Syntax error in JDBC binary log slot](#a04b022345cg8)

`create table hologres.hg_replication_progress failed`

[Binary log errors](#h3-3eed00e0)

[Error: Failed to create hg\_replication\_progress](#a04b7750456t9)

`DatahubClientException: Queue Full`

[Binary log errors](#h3-3eed00e0)

[Error: DatahubClientException Queue Full](#f2b6c9ea6frnb)

`Get binlog timeout`

[Binary log errors](#h3-3eed00e0)

[Error: Binary log read timeout](#ca2588deecbpx)

`no table is defined in publication` / `has no slot named`

[Binary log errors](#h3-3eed00e0)

[Exception: Residual publication after table recreation](#MTRaT)

`Binlog Convert Failed` / shard data stall

[Binary log errors](#h3-3eed00e0)

[Exception: Binlog Convert Failed or shard data stall](#23ea1a06763w5)

Connection failure from Flink/Blink

[Connection errors](#h3-96604a81)

[Connection failure from Flink or Blink](#f5cd42d9db0uy)

JDBC connection surge

[Connection errors](#h3-96604a81)

[JDBC connection surge](#34e6bba15edwt)

Thread dump stuck at `Class.forName`

[Connection errors](#h3-96604a81)

[Exception: Job stuck at JDBC driver loading](#a04bec82451vy)

`ClassNotFoundException: HologresBinlogRecordEmitter`

[Development errors](#h3-858e26d6)

[Exception: ClassNotFoundException in local Datastream development](#nQ9sI)

## Compatibility and prerequisites

Before you troubleshoot, review the compatibility matrix and key concepts for Hologres integration with Flink and Blink.

### Flink and Blink compatibility matrix

**Platform**

**Source table**

**Sink table**

**Dimension table**

**Binary logging**

**Hologres Catalog**

**Notes**

Fully managed Flink

Row + column

Row + column

Use row-oriented

Supported

Supported

\--

Blink Dedicated

Row + column

Row + column

Use row-oriented

V0.8: row only; V0.9+: row + column. Use row-oriented.

Not supported

Being phased out. Migrate to fully managed Flink.

Open source Flink 1.10

Row + column

Row + column

Not supported

Not supported

Not supported

\--

Open source Flink 1.11+

Row + column

Row + column

Use row-oriented

Not supported

Not supported

Hologres connector is open source. See [GitHub](https://github.com/aliyun/alibabacloud-hologres-connectors).

### Write modes

Hologres supports three write modes when a sink table has a primary key and encounters a duplicate:

**Mode**

**Behavior on duplicate primary key**

**Best for**

InsertOrIgnore

Discards the new record. Keeps the existing one.

Scenarios where duplicate records can be safely discarded.

InsertOrReplace

Overwrites the entire row. Columns not in the new record are set to null.

Full-row updates where every column is always present.

InsertOrUpdate

Updates only the columns in the new record. Missing columns retain existing values.

Partial updates where only a subset of columns changes.

**Write performance by storage type:**

-   **Column-oriented tables**: InsertOrIgnore > InsertOrReplace > InsertOrUpdate
    
-   **Row-oriented tables**: InsertOrReplace = InsertOrUpdate > InsertOrIgnore
    

**Point query performance by storage type:**

Row-oriented storage > row-column hybrid storage > column-oriented storage

### How Flink maps to Hologres tables

Flink SQL declares a Flink table and maps it to a physical table in Hologres through connector parameters. Mapping to a foreign table is not supported.

The following example maps a Flink source table to a Hologres table with binary logging enabled:

```
CREATE TABLE holo_source(
  'hg_binlog_lsn' BIGINT HEADER,
  'hg_binlog_event_type' BIGINT HEADER,
  'hg_binlog_timestamp_us' BIGINT HEADER,
  A INT,
  B INT,
  C TIMESTAMP
) WITH (
  'type' = 'hologres',
  'endpoint' = 'xxx.hologres.aliyuncs.com:80',  -- The endpoint of the Hologres instance.
  'userName' = '',                                -- The AccessKey ID of your Alibaba Cloud account.
  'password' = '',                                -- The AccessKey secret of your Alibaba Cloud account.
  'dbName' = 'binlog',                            -- The name of the database in the Hologres instance.
  'tableName' = 'test',                           -- The name of the table in the Hologres instance.
  'binlog' = 'true'
);
```

## Troubleshoot slow real-time writes

Follow these steps in order.

### Step 1: Confirm the table configuration

Check the following:

-   **Storage format**: Is the sink table row-oriented, column-oriented, or row-column hybrid storage?
    
-   **Insert mode**: Is the job using InsertOrIgnore, InsertOrUpdate, or InsertOrReplace?
    
-   **Table Group and shard count**: Are these configured appropriately for the workload?
    

### Step 2: Check the write latency metric

If the average write latency is in the hundreds of milliseconds or higher, the Hologres backend has likely hit a write bottleneck. Investigate these common causes:

**Cause A: InsertOrUpdate on a column-oriented table.** Partial updates on column-oriented tables are expensive. Under high traffic, this causes high CPU usage and write latency.

-   **Fix**: Switch to a row-oriented table. If your Hologres instance is V1.1 or later, you can also use row-column hybrid storage.
    

**Cause B: CPU usage near 100% with no partial updates.** This typically means the instance is handling too many queries or too much write volume.

-   **Fix**: Scale out the Hologres instance.
    

**Cause C: Continuous** `**INSERT INTO SELECT FROM**` **statements.** These trigger BulkLoad writes, which block real-time writes.

-   **Fix**: Convert BulkLoad writes to real-time writes, or schedule them during off-peak hours.
    

### Step 3: Check for data skew

Run the following SQL to check whether data is evenly distributed across shards:

```
SELECT hg_shard_id, count(1) FROM t1 GROUP BY hg_shard_id ORDER BY hg_shard_id;
```

If the counts vary significantly, modify the distribution key to distribute data more evenly.

### Step 4: Check for backend pressure

If the previous steps reveal no issues but write performance drops suddenly, the backend cluster is likely under high pressure. Contact Hologres technical support to investigate. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres#concept-2379947).

### Step 5: Check for Flink/Blink-side backpressure

If Hologres metrics look normal, the bottleneck is usually on the Flink or Blink side. Check whether the sink node is experiencing backpressure. If the job has a single node, backpressure is not visible in the graph. Separate the sink node from upstream operators and observe again. For details, contact Flink technical support.

## Troubleshoot data write correctness issues

Data written to Hologres does not match expected values? This is usually caused by out-of-order writes. When data with the same primary key is distributed across different Flink tasks, the write order is not guaranteed.

**Fix**: In the Flink SQL logic, shuffle data by the Hologres table's primary key before writing. This ensures that all records for a given primary key are processed by the same task.

## Troubleshoot dimension table query issues

### Dimension table join vs. dual-stream join

When you read from Hologres, first confirm that you are using a dimension table join, not a dual-stream join. A dimension table join requires both `proctime AS PROCTIME()` in the source table and `FOR SYSTEM_TIME AS OF` in the join clause. If either keyword is missing, Flink treats it as a dual-stream join.

**Correct example -- dimension table join:**

```
CREATE TEMPORARY TABLE datagen_source (
   a INT,
   b BIGINT,
   c STRING,
   proctime AS PROCTIME()
) WITH (
   'connector' = 'datagen'
);

CREATE TEMPORARY TABLE hologres_dim (
   a INT,
   b VARCHAR,
   c VARCHAR
) WITH (
   'connector' = 'hologres',
   ...
);

CREATE TEMPORARY TABLE blackhole_sink (
   a INT,
   b STRING
) WITH (
   'connector' = 'blackhole'
);

INSERT INTO blackhole_sink SELECT T.a, H.b
FROM datagen_source AS T JOIN hologres_dim FOR SYSTEM_TIME AS OF T.proctime AS H ON T.a = H.a;
```

### High latency in dimension table queries

Backpressure on the join node (on the Flink or Blink side) is the most common cause of throughput degradation in dimension table scenarios. Work through these checks:

**1\. Check the join mode (synchronous vs. asynchronous).**

The Hologres Flink connector supports synchronous and asynchronous dimension table join modes. Asynchronous mode performs significantly better. Verify the mode by checking whether `'async' = 'true'` is set in the Flink SQL:

```
CREATE TABLE hologres_dim(
  id INT,
  len INT,
  content VARCHAR
) WITH (
  'connector' = 'hologres',
  'dbname' = '<yourDbname>',      -- The name of the Hologres database.
  'tablename' = '<yourTablename>',-- The name of the table in Hologres.
  'username' = '<yourUsername>',   -- The AccessKey ID of your Alibaba Cloud account.
  'password' = '<yourPassword>',  -- The AccessKey secret of your Alibaba Cloud account.
  'endpoint' = '<yourEndpoint>',  -- The VPC endpoint of your Hologres instance.
  'async' = 'true'                -- Enable asynchronous mode.
);
```

**2\. Check the storage type and backend query latency.**

-   Column-oriented tables used as dimension tables have high overhead under high-QPS scenarios. Switch to row-oriented storage.
    
-   If the dimension table is already row-oriented but latency is still high, the overall instance load is likely too high. Scale out the instance.
    

**3\. Check whether the join key is the primary key.**

Starting from VVR 4.x (Flink 1.13), the Hologres connector supports non-primary key queries on dimension tables via Holo Client. However, this typically results in poor performance and high instance load, especially without schema optimization. The most effective optimization is to set the join key as the distribution key so that shard pruning takes effect.

**4\. Check for Flink/Blink-side backpressure.**

If the Hologres side looks normal, check whether backpressure exists on the Flink or Blink side. If the job has a single node, backpressure is not visible. Separate the sink node and the join node, then observe again. Contact Flink technical support for further analysis.

## Connection management

The Hologres connector uses Java Database Connectivity (JDBC) related modes by default. Understanding connection behavior is critical for capacity planning.

### JDBC\_FIXED mode

The JDBC\_FIXED mode does not occupy connections and is not limited by the maximum number of walsenders when consuming binary logs. For configuration details, see [Hologres connector](/help/en/flink/realtime-flink/developer-reference/hologres-connector/).

### Connection reuse

Starting from VVR-8.0.5-Flink-1.17, connection reuse is enabled by default with `'connectionPoolName' = 'default'`. For most jobs, this has no impact. If a single job has many tables, performance may decrease after an upgrade. In this case, configure a separate `connectionPoolName` for hot-spot tables.

### Default connections per table type

**Table type**

**Default connections (per Flink job concurrency)**

Binary logging source table

0

Batch source table

1

Dimension table

3 (adjustable with the `connectionSize` parameter)

Sink table

3 (adjustable with the `connectionSize` parameter)

### Calculate maximum connections

**Without connection reuse:**

```
Maximum connections = (batch source tables x 1 + dimension tables x connectionSize + sink tables x connectionSize) x job concurrency
```

**Example**: A job with 1 full and incremental source table, 2 dimension tables, and 3 sink tables. All use the default `connectionSize` of 3. Job concurrency is 5.

```
(1 x 1 + 2 x 3 + 3 x 3) x 5 = 80 connections
```

**With connection reuse (VVR 4.1.12 / Flink 1.13 and later):**

Dimension tables and sink tables with the same `connectionPoolName` within the same concurrency share one connection pool. Using the same example, if all 2 dimension tables and 3 sink tables share a `connectionPoolName` and `connectionSize` is increased to 5:

```
(1 x 1 + 5) x 5 = 30 connections
```

**Note**

Connection reuse works well in most scenarios. However, when many dimension tables use synchronous point queries without caching, multi-table connection reuse can slow down queries. In that case, configure connection reuse only for sink tables.

### Other scenarios that use connections

-   **Job startup**: The connector temporarily establishes 3 to 6 connections for table metadata validation. These connections are released after the job starts running.
    
-   **Hologres Catalog, CTAS, and CDAS**: Jobs that use Hologres Catalog, CREATE TABLE AS SELECT (CTAS), or CREATE DATABASE AS (CDAS) occupy additional connections. By default, a Catalog job uses 3 extra connections for DDL operations such as creating tables.
    

### Diagnose connection usage

When a job has many tables or high concurrency, it can exhaust the total connections available on the Hologres instance. Use these methods to diagnose.

**Query active connections in** `**pg_stat_activity**`**:**

```
SELECT application_name, COUNT(1) AS count
FROM pg_stat_activity
WHERE backend_type = 'client backend'
  AND application_name != 'hologres'
GROUP BY application_name;
```

Connections where `application_name` is `ververica-connector-hologres` represent read/write connections from Realtime Compute for Apache Flink. For more information, see [Query the pg\_stat\_activity view](/help/en/hologres/user-guide/manage-connections#section-gnd-zky-4q7).

**Identify excessive concurrency:**

On the [Monitoring Information](/help/en/hologres/user-guide/hologres-metrics) page for the instance in the Hologres **Instances** list, if connections spike at startup and then drop over time, many connections are idle and getting closed. This means the job does not need that many connections. Reduce the concurrency or `connectionSize`, or enable connection reuse.

**Right-size Hologres operator concurrency:**

By default, all operators in a Flink job share the same concurrency. Operators with complex logic may need higher concurrency, but this concurrency is often excessive for Hologres sink tables. In the job resource configuration, select expert mode and set a lower concurrency for the Hologres write operator to reduce total connection usage.

## Common errors

### Write errors

#### Error: ERPC TIMEOUT or ERPC CONNECTION CLOSED

**Symptom**:

```
com.alibaba.blink.store.core.rpc.RpcException: request xx UpsertRecordBatchRequest failed on final try 4, maxAttempts=4, errorCode=3, msg=ERPC_ERROR_TIMEOUT
```

**Cause**: The write operation failed due to excessive backend pressure. `CONNECTION CLOSED` may mean a backend node crashed due to excessive load, resulting in an out-of-memory (OOM) error or core dump.

**Fix**:

1.  Retry the write operation.
    
2.  If the issue persists, check whether the CPU load of the Hologres instance is maxed out in Cloud Monitor.
    
3.  Contact Hologres technical support if needed. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres#concept-2379947).
    

#### Error: BackPresure Exceed Reject Limit

**Cause**: The Hologres backend is under excessive write pressure. The memtable cannot flush to disk fast enough, causing write failures.

**Fix**:

1.  If failures are occasional, they can be safely ignored.
    
2.  To increase resilience, add the parameter `rpcRetries = '100'` to the sink table to increase write retries.
    
3.  If this error persists, contact Hologres technical support to check the backend instance status.
    

#### Error: Modify record by primary key

**Symptom**:

```
Modify record by primary key is not on this table
```

**Cause**: The job uses an update write mode (InsertOrReplace or InsertOrUpdate), but the Hologres sink table does not have a primary key.

**Fix**: Add a primary key to the Hologres sink table.

#### Error: Shard columns count mismatch

**Symptom**:

```
shard columns count is no match
```

**Cause**: The Flink job does not write all distribution key columns. By default, the distribution key is the primary key.

**Fix**: Include all distribution key columns in the write operation.

#### Error: Full row required, column missing

**Symptom**:

```
Full row is required, but the column xxx is missing
```

**Cause**: This error occurs in older Hologres versions. A non-nullable column was not assigned a value.

**Fix**: Assign a value to the non-nullable column, or set the column to allow null values.

### Schema and DDL errors

#### Error: Table name version mismatch

**Symptom**:

```
The requested table name xxx mismatches the version of the table xxx from server
```

or

```
org.postgresql.util.PSQLException: An I/O error occurred while sending to the backend.
Caused by: java.net.SocketTimeoutException: Read timed out
```

**Cause**: An `ALTER TABLE` operation changed the table schema. The schema version carried by the Flink write is lower than the server-side version, and the client retries are exhausted.

**Fix**: If this is occasional, it can be safely ignored. The job recovers after a failover. If the error persists, contact Hologres technical support.

#### Error: Failed to query table meta

**Symptom**:

```
Failed to query table meta for table
```

**Cause**: The job is reading from or writing to a Hologres foreign table. The Hologres connector does not support foreign tables. If you are not using a foreign table, there may be an issue with instance metadata.

**Fix**:

1.  Verify that the target table is not a foreign table.
    
2.  If the issue persists, contact Hologres technical support.
    

#### Error: Timestamp type mismatch

**Symptom**:

```
Caused by: java.lang.IllegalArgumentException: Column: created_time type does not match:
flink row type: TIMESTAMP(6) WITH LOCAL TIME ZONE, hologres type: timestamp
```

**Cause**: A field in the Flink table uses the `TIMESTAMP(6) WITH LOCAL TIME ZONE` type. Mapping this type to Hologres is not currently supported.

**Fix**: Change the field type from `TIMESTAMP(6) WITH LOCAL TIME ZONE` to `TIMESTAMP`.

#### Error: Table writer init failed after truncate or rename

**Symptom**:

```
table writer init failed: Fail to fetch table meta from sm
```

**Applies to**: Hologres V2.1.1 through V2.1.14

**Cause**: A `TRUNCATE` or table rename operation was performed while the job was writing. In Hologres versions V2.1.1 through V2.1.14, the FE node replay cache time is increased, which slows down DDL replay after a DML. This increases the probability of this exception.

**Fix**:

1.  If this occurs occasionally, it can be ignored. The job recovers after a failover.
    
2.  For a permanent fix, upgrade to the latest Hologres V2.1 version.
    

### Permission errors

#### Error: Cloud authentication failed

**Symptom**:

```
Cloud authentication failed for access id
```

**Cause**: The AccessKey ID or AccessKey secret is incorrect, or the account has not been added to the Hologres instance.

**Fix**:

1.  Verify that the AccessKey ID and AccessKey secret are correct. The AccessKey secret is often mistyped or contains extra spaces.
    
2.  If the credentials look correct, test the connection using the same AccessKey in HoloWeb (log on with the account and password). If the test returns the same error, the AccessKey is invalid. If the error is `FATAL: role "ALIYUN$xxxx" Does not exist`, the account does not have permission for the instance. Ask the instance administrator to grant the required permissions.
    

#### Error: IP whitelist rejection

**Symptom**:

```
Caused by: org.postgresql.util.PSQLException: FATAL: Rejected by ip white list.
db = xxx, usr=xxx, ip=xx.xx.xx.xx
```

**Cause**: An IP whitelist is configured on the Hologres instance, but the IP address from which Flink accesses Hologres is not in the whitelist.

**Fix**: Add the Flink cluster's IP address to the Hologres IP whitelist. For more information, see [IP whitelist](/help/en/hologres/security-and-compliance/configure-an-ip-address-whitelist#task-2037120).

#### Error: Permission denied for binary log consumption

**Symptom**:

```
permission denied for database
```

**Applies to**: Hologres V1.3 and V2.0 with JDBC mode binary log consumption

**Cause**: For Hologres V1.3 and V2.0, consuming binary logs in JDBC mode requires additional permission configuration.

**Fix**:

1.  Upgrade Hologres to V2.1 and use a connector of VVR-8.0.5 or later. With this combination, only read-only permission on the table is required to consume binary logs.
    
2.  If upgrading is not feasible, refer to the permission granting instructions in [Limits](/help/en/flink/developer-reference/realtime-compute-real-time-consumption-of-hologres-in-flink#fa7e1612dfavc).
    

### Read and dimension table errors

#### Dimension table join returns no data

**Cause**: The Hologres dimension table is a partitioned table. Partitioned tables are not supported as dimension tables.

**Fix**: Replace the partitioned table with a non-partitioned table.

#### Error: RPC mode dimension table one-to-many join

**Symptom**:

```
Hologres rpc mode dimension table does not support one to many join
```

**Cause**: The RPC mode dimension table requires a row-oriented table, and the join field must be the primary key. This error occurs when one or both conditions are not met.

**Fix**: Switch to JDBC mode, and use a row-oriented or row-column hybrid storage table for the dimension table.

#### Error: Invalid UTF-8 byte sequence

**Symptom**:

```
ERROR,22021,"invalid byte sequence for encoding ""UTF8"": 0x00"
```

**Cause**: During a dimension table point query, the primary key (string type) contains non-UTF-8 encoded characters, causing the SQL execution to fail.

**Fix**: Clean the upstream data to remove or replace non-UTF-8 characters before they reach the dimension table query.

### Binary log errors

#### Error: DatahubClientException Queue Full

**Symptom**:

```
Caused by: com.aliyun.datahub.client.exception.DatahubClientException:
[httpStatus:503, requestId:null, errorCode:null,
errorMessage:{"ErrorCode":"ServiceUnavailable","ErrorMessage":"Queue Full"}]
```

**Cause**: Many binary log consumption jobs restarted simultaneously, exhausting the thread pool.

**Fix**: Restart binary log consumption jobs in batches rather than all at once.

#### Error: Binary log read timeout

**Symptom**:

```
Error occurs when reading data from datahub, msg: [httpStatus:500, requestId:xxx,
errorCode:InternalServerError, errorMessage:Get binlog timeout.]
```

**Cause**: Individual binary log records are too large. After batching, the total RPC request size exceeds the maximum limit.

**Fix**: Reduce the batching configuration. This is common when each row has many fields or long string values.

#### Error: TableVersionExpired during binary log consumption

**Symptom**:

```
Caused by: java.lang.RuntimeException:
shaded.hologres.com.aliyun.datahub.client.exception.DatahubClientException:
[httpStatus:400, requestId:xx, errorCode:TableVersionExpired,
errorMessage:The specified table has been modified, please refresh cursor and try again
```

**Cause**: A DDL operation on the source table changed the table version, causing consumption to fail.

**Fix**: Upgrade Flink to VVR 4.0.16 or later, which automatically retries in this situation.

#### Exception: Shard ID does not exist on binary log startup

**Cause**: The shard count of the consumed table changed -- for example, due to a table rename or recreation. The job tries to recover from a checkpoint that references the old table's shard information.

**Fix**: Restart the job without state (discard the checkpoint). After operations such as recreating a table, the binary log checkpoint information is no longer valid.

#### Error: Syntax error in JDBC binary log slot

**Symptom**:

```
hologres.org.postgresql.util.PSQLException: ERROR: syntax error
```

**Cause**: When consuming a binary log table in JDBC mode, a slot must be specified. This error occurs if the slot name contains unsupported characters. Slot names support only lowercase letters, numbers, and underscores.

**Fix**:

1.  Recreate the slot with a valid name.
    
2.  Alternatively, use the automatic slot creation feature available in VVR-6.0.7 and later.
    

#### Error: Failed to create hg\_replication\_progress

**Symptom**:

```
create table hologres.hg_replication_progress failed
```

**Cause**: JDBC-based binary log consumption requires the `hg_replication_progress` table. If this table does not exist in the current database, the connector tries to create it. The creation fails when the instance has reached its maximum shard limit.

**Fix**: Clean up unused databases to free up shards.

#### Exception: Residual publication after table recreation

**Symptom**: When consuming binary logs in JDBC mode, one of these exceptions is thrown:

```
no table is defined in publication
```

```
The table xxx has no slot named xxx
```

**Cause**: When a table is deleted and a table with the same name is recreated, the publication bound to the original table is not automatically cleaned up.

**Fix**:

1.  Query for orphaned publications:
    
    ```
       SELECT * FROM pg_publication WHERE pubname NOT IN (SELECT pubname FROM pg_publication_tables);
    ```
    
2.  Drop the residual publications:
    
    ```
       DROP PUBLICATION <publication_name>;
    ```
    
3.  Restart the Flink job.
    

#### Exception: Binlog Convert Failed or shard data stall

**Symptom**: When consuming binary logs in JDBC mode, a `Binlog Convert Failed` exception occurs, or data reading for some shards stops at a certain point.

**Cause**: When the Hologres gateway receives a timeout exception from the backend, there is an issue in the process of returning the exception to the client. This causes data reading to stall or a data parsing failure.

**Fix**:

1.  This typically occurs only when the job has backpressure. If data reading stalls, restart the job and recover from the latest checkpoint.
    
2.  To permanently resolve this issue, upgrade Hologres to version 2.2.21 or later.
    

### Connection errors

#### Connection failure from Flink or Blink

**Cause**: The Flink or Blink cluster has slow or no access to the public network by default.

**Fix**: Ensure the Flink or Blink cluster is in the same region as the Hologres instance, and use the VPC endpoint to connect.

#### JDBC connection surge

**Cause**: The Hologres connector in JDBC mode uses this many connections: `Number of Hologres tables x job concurrency x connectionSize (default: 3)`.

**Fix**:

1.  Plan connections carefully. Reduce the job concurrency or `connectionSize` parameter.
    
2.  Enable connection reuse by setting the same `connectionPoolName` for dimension and sink tables. See [Connection reuse](#h3-0222cb52) for details.
    
3.  If you cannot lower concurrency or `connectionSize`, set `useRpcMode = 'true'` for the table to switch to RPC mode, which does not consume JDBC connections.
    

**Related**: [Calculate maximum connections](#h3-80980164) | [Diagnose connection usage](#h3-5ab32f32)

#### Exception: Job stuck at JDBC driver loading

**Symptom**: The job gets stuck during runtime. A thread dump shows it is stuck at the JDBC driver loading point, typically at `Class.forName`.

**Cause**: JDK 8 performs static initialization when loading a JDBC driver. A race condition can occur when multiple threads load it simultaneously.

**Fix**:

1.  Retry the job.
    
2.  Upgrade to connector version VVR-6.0.7 or later, which handles this race condition.
    

### Development errors

#### Exception: ClassNotFoundException in local Datastream development

**Symptom**:

```
java.lang.ClassNotFoundException:
com.alibaba.ververica.connectors.hologres.binlog.source.reader.HologresBinlogRecordEmitter
```

**Cause**: The commercial connector JAR package for Realtime Compute for Apache Flink does not include some runtime classes needed for local execution.

**Fix**: Adjust the project dependencies for local debugging and development. For instructions, see [Run and debug jobs that contain connectors locally](/help/en/flink/realtime-flink/developer-reference/run-or-debug-a-flink-deployment-that-includes-a-connector-in-an-on-premises-environment).
