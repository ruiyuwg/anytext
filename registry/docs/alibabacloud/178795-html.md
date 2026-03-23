This topic describes the Hologres connector.

## Background information

[Hologres](/help/en/hologres/product-overview/what-is-hologres#concept-1681168) is a unified engine for real-time data warehousing. It supports real-time writing, updating, and analysis of massive datasets. It uses standard SQL syntax and is compatible with PostgreSQL protocols. It supports petabyte-scale OLAP and ad hoc analysis, delivering high-concurrency, low-latency online data services. It integrates deeply with MaxCompute, Realtime Compute for Apache Flink, and DataWorks to provide end-to-end offline and real-time data warehousing solutions. The following table summarizes the capabilities of the Hologres connector.

**Category**

**Details**

Supported types

Source tables, dimension tables, and sink tables

Execution modes

Stream mode and batch mode

Data format

Not supported

Monitoring metrics

**Monitoring metrics**

-   Source table:
    
    -   numRecordsIn
        
    -   numRecordsInPerSecond
        
-   Sink table:
    
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        
    -   currentSendTime
        
    
    **Note**
    
    For more information, see [Monitoring metrics](/help/en/flink/realtime-flink/user-guide/metrics).
    

API types

DataStream and SQL

Supports updates or deletions in sink tables

Yes

## Features

**Feature**

**Details**

[Real-time consumption of Hologres data](#fbf72a356bigl)

You can read Hologres data with or without binary logging (binlog). This feature is compatible with both change data capture (CDC) and non-CDC modes.

[Unified full and incremental ingestion](#fa7f0073dfkis)

You can perform full, incremental, or **unified full and incremental** consumption.

[Handle primary key conflicts](#e4b07579218qu)

You can ignore new data, replace entire rows, or update only **specific fields**.

[Merge and partial updates for wide tables with multi-stream writes](#8235fb3832n5g)

You can update only **modified columns**, not the entire row.

[Read binlogs from partitioned tables (Beta)](#23c8ce699ev7j)

You can consume binlogs from physical partitioned tables. A single job can monitor all partitions, including **newly added ones**. You can also consume binlogs from logical partitioned tables.

[Write to partitioned tables](#7556c425d78xd)

You can write data to the parent table of a partitioned table and **automatically create** the corresponding child partitions.

Real-time synchronization for a single table or an entire database

You can perform **real-time synchronization of data at the single-table or entire-database level**. This feature provides the following capabilities:

-   **Automatic detection of source table schema evolution**: If the schema of the source database table changes, Hologres can synchronize these changes to the sink table in real time.
    
-   **Automatic handling of schema evolution:** If new data flows into Hologres, Flink first triggers a schema modification operation before writing the data. This process requires no manual intervention.
    

For more information, see [CREATE TABLE AS (CTAS) statement](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#concept-2156279) and [Quick Start for real-time database synchronization](/help/en/flink/realtime-flink/getting-started/ingest-data-into-data-warehouses-in-real-time#task-2157512).

## Limits and suggestions

#### **Limits**

-   **Foreign tables not supported**: The Hologres connector does not support access to [Hologres foreign tables](/help/en/hologres/user-guide/foreign-tables#task-2563663), such as MaxCompute foreign tables.
    
-   **Time type limit**: Real-time consumption of TIMESTAMP data is not supported. Use the TIMESTAMPTZ type when you create tables.
    
-   **Source table scan** (VVR 8 and earlier): Data is read from Hologres in batch mode by default. This means incremental data is not consumed.
    
-   **Watermark limit** (VVR 8 and earlier): CDC mode does not support defining watermarks. To perform windowed aggregations, use a [non-windowed aggregation solution](/help/en/flink/realtime-flink/support/faq-about-cdc#section-e72-p90-qm7).
    

#### **Suggestions**

-   **Storage Mode Selection**
    
    -   **Dimension tables for point lookups**: We recommend using row-oriented storage. This requires setting both a primary key and a clustering key.
        
    -   **Dimension tables for one-to-many queries**: We recommend using column-oriented storage and configuring the [distribution key](/help/en/hologres/user-guide/distribution-key) and [segment key](/help/en/hologres/user-guide/segment-key) to optimize performance.
        
    -   **Frequently updated tables for analytical queries**: We recommend using row-column hybrid storage if such tables must support both real-time binlog consumption and OLAP analysis.
        
    
    **Important**
    
    If you do not explicitly specify a storage format when creating a Hologres table, it defaults to columnar storage. This storage format is immutable and cannot be altered post-creation. For more information, see [Create a table in Hologres](/help/en/hologres/developer-reference/create-tables#section-l9q-k83-z01) and [Table storage formats: columnar, row-oriented, and row-column hybrid](/help/en/hologres/user-guide/storage-models-of-tables#section-4s2-q43-qef).
    
-   **Job parallelism**: You can set the Flink job parallelism to match the number of shards in the Hologres table.
    
    ```
    # Run this command in HoloWeb to view the number of shards in a table.
    select tg.property_value from hologres.hg_table_properties tb join hologres.hg_table_group_properties tg on tb.property_value = tg.tablegroup_name where tb.property_key = 'table_group' and tg.property_key = 'shard_count' and table_name = '<tablename>';
    ```
    
-   **Version and features**: You can regularly check the [Hologres Connector Release Note](/help/en/hologres/user-guide/import-using-flink/#title-z9q-fy5-roi) for known issues, feature updates, and version compatibility information.
    

## **Important Notes**

-   **Hologres and VVR version compatibility and limitations**
    
    #### **Source table**
    
    -   VVR 8 and earlier: Set the consumption mode using `sdkMode`.
        
    -   VVR 11+: Set the consumption mode using `source.binlog.read-mode`.
        
    
    **VVR version**
    
    **Hologres version**
    
    **Default/Recommended parameter value**
    
    **Actual consumption mode**
    
    **Notes**
    
    ≥ 6.0.7
    
    < 2.0
    
    Custom
    
    holohub (default)
    
    We recommend configuring JDBC.
    
    6.0.7–8.0.4
    
    ≥ 2.0
    
    jdbc (automatic switchover)
    
    jdbc (forced)
    
    Hologres 2.0 and later has deprecated HoloHub. If holohub is set, the connector automatically falls back to jdbc, which may require additional user permissions. For permission configurations, see [Permission issues](#9ba6a81c39h51).
    
    ≥ 8.0.5
    
    ≥ 2.1
    
    jdbc (automatic switchover)
    
    jdbc (forced)
    
    No permission issues. For Hologres 2.1.27 and later, the connector switches to jdbc\_fixed.
    
    ≥ 11.1
    
    Any version
    
    AUTO (default)
    
    Automatically selected based on the Hologres version
    
    -   For Hologres 2.1.27 and later, the connector selects jdbc and enables lightweight connections by default (connection.fixed.enabled is set to true).
        
    -   For versions 2.1.0–2.1.26, you can select JDBC mode.
        
    -   For Hologres 2.0 and earlier, the connector selects holohub.
        
    
    **Important**
    
    In VVR 11.1 and later, the connector enables binlogs consumption by default. Ensure that you have [enabled binlog](#a98364679cawa) to avoid errors.
    
    **Permission issues**
    
    If a user is not a superuser, you must grant permissions to read binlogs in JDBC mode.
    
    **user\_name** is the ID of an Alibaba Cloud account or RAM user. For more information, see [Account overview](/help/en/hologres/security-and-compliance/overview-16#concept-1597881).
    
    ```
    -- In the standard PostgreSQL authorization model, grant the CREATE permission to the user and grant the replication role permission on the instance to the user.
    GRANT CREATE ON DATABASE <db_name> TO <user_name>;
    alter role <user_name> replication;
    
    -- If the database uses the simple permission model (SLMP), you cannot run the GRANT statement. Use spm_grant to grant the Admin permission on the database to the user. You can also grant the permission in the HoloWeb console.
    call spm_grant('<db_name>_admin', '<user_name>');
    alter role <user_name> replication;
    ```
    
    #### **Sink table**
    
    -   In VVR 8 and earlier versions, the consumption mode is selected by specifying the `sdkMode` parameter.
        
    -   VVR 11+: Set the data writing mode using `sink.write-mode`.
        
    
    **VVR version**
    
    **Hologres version**
    
    **Is RPC affected?**
    
    **Actual RPC consumption mode**
    
    **Recommended/Default parameter value**
    
    **Notes**
    
    6.0.4–8.0.2
    
    < 2.0
    
    No
    
    rpc
    
    Custom
    
    /
    
    6.0.4–8.0.2
    
    ≥ 2.0
    
    Yes
    
    jdbc\_fixed (automatic switchover)
    
    Custom
    
    To prevent deduplication, set 'jdbcWriteBatchSize'='1'.
    
    ≥ 8.0.3
    
    Any version
    
    Yes
    
    jdbc\_fixed (automatic switchover)
    
    Custom
    
    If you set rpc, the connector automatically switches to jdbc\_fixed and sets 'jdbcWriteBatchSize'='1' to prevent deduplication.
    
    ≥ 8.0.5
    
    Any version
    
    Yes
    
    jdbc\_fixed (automatic switchover)
    
    Custom
    
    If you set rpc, the connector automatically switches to jdbc\_fixed and sets 'deduplication.enabled'='false' to prevent deduplication.
    
    **Important**
    
    -   RPC has been deprecated in Hologres 2.0 and later. If you set the data write mode to rpc, the connector automatically switches to jdbc\_fixed. However, if you set another value, the connector uses your specified value.
        
    -   VVR 11.1 and later no longer support RPC. We recommend using JDBC for connections.
        
    -   For high-concurrency write scenarios, use `jdbc_copy` or `COPY_STREAM`.
        
    
    #### **Dimension table**
    
    **VVR version**
    
    **Hologres version**
    
    **Is RPC affected?**
    
    **Actual RPC consumption mode**
    
    **Recommended/Default parameter value**
    
    **Notes**
    
    6.0.4–8.0.2
    
    < 2.0
    
    No
    
    rpc
    
    Custom
    
    /
    
    6.0.4–8.0.2
    
    ≥ 2.0
    
    Yes
    
    jdbc\_fixed (automatic switchover)
    
    Custom
    
    If your Hologres instance is version 2.0 or later, the connector automatically switches to jdbc\_fixed because RPC has been deprecated. However, if you set another value, the connector uses your specified value.
    
    ≥ 8.0.3
    
    Any version
    
    Yes
    
    jdbc\_fixed (automatic switchover)
    
    Custom
    
    ≥ 8.0.5
    
    Any version
    
    Yes
    
    jdbc\_fixed (automatic switchover)
    
    Custom
    
    **Important**
    
    VVR 11.1 and later no longer support RPC and use JDBC by default. To enable lightweight connection, set `connection.fixed.enabled`.
    
-   **JDBC mode binlog source tables support reading JSONB data, but you must enable the GUC parameter at the database level.**
    
    ```
    -- Enable the GUC parameter at the database level. Only a superuser can execute this command. Each database needs this setting only once.
    alter database <db_name> set hg_experimental_enable_binlog_jsonb = on;
    ```
    
-   An UPDATE operation generates two consecutive binlog records. The old data (update\_before) appears first, followed by the new data (update\_after).
    
-   Avoid truncating or recreating a binlog-enabled source table. For more information, see [FAQ](#f24d1b91420tw).
    
-   To avoid errors, maintain consistent `DECIMAL` precision between Flink and Hologres. For more information, see [FAQ](#f24d1b91420tw).
    
-   When using INITIAL mode for unified full and incremental ingestion, global ordering is not guaranteed. If your downstream application relies on timestamp-based calculations, use pure binlog reading mode instead.
    

## Enable binlog

## Table Not Created

Real-time data consumption is disabled by default. When creating a Hologres table in HoloWeb, set the `binlog.level` and `binlog.ttl` parameters. Sample code:

```
begin;
create table test_table(
  id int primary key, 
  title text not null, 
  body text);
call set_table_property('test_table', 'orientation', 'row');-- Create a row-oriented table named test_table.
call set_table_property('test_table', 'clustering_key', 'id');-- Create a clustering key on the id column.
call set_table_property('test_table', 'binlog.level', 'replica');-- Enable binlog.
call set_table_property('test_table', 'binlog.ttl', '86400');-- Set binlog TTL, in seconds.
commit;
```

## Existing tables

In HoloWeb, use the following statements to enable binlog and set binlog TTL for an existing table. Replace `table_name` with your actual table name.

```
-- Enable binlog.
begin;
call set_table_property('<table_name>', 'binlog.level', 'replica');
commit;

-- Set binlog TTL, in seconds.
begin;
call set_table_property('<table_name>', 'binlog.ttl', '2592000');
commit;
```

## WITH parameters

Starting with VVR 11, connector options for Hologres have been updated to improve support. Some options may have been renamed or removed. VVR 11 remains backward compatible with VVR 8. Consult the parameter documentation specific to your VVR version for details.

-   [Connector options (VVR 11 or later)](/help/en/flink/realtime-flink/developer-reference/connector-options-in-the-with-clause-vvr-11-or-later)
    
-   [Connector options (VVR 8 or earlier)](/help/en/flink/realtime-flink/developer-reference/connector-options-in-the-with-clause-vvr-8-or-earlier)
    

## Type mapping

See [Data type mappings between Flink and Hologres](/help/en/hologres/developer-reference/data-types#section-x29-ngb-txf).

**Note**

Hologres supports defining generated columns using the `GENERATED ALWAYS AS` syntax. Example:

```
ds TIMESTAMP NOT NULL GENERATED ALWAYS AS (date_trunc('month', create_time)) STORED
```

The `NOT NULL` constraint on generated columns maps to a **nullable field**. This is expected behavior: Hologres computes generated columns automatically, so Flink does not pass values for them. Retaining the `NOT NULL` constraint would cause HologresClient write validation to fail. The `NOT NULL` constraint on regular columns remains unaffected (for example: `ds TIMESTAMP NOT NULL`).

## Examples

### **Source tables**

#### **Binlog-enabled source tables**

## **CDC mode**

This mode enables mirror synchronization of table data. The source consumes binary logging data and, based on `hg_binlog_event_type`, automatically assigns the correct Flink RowKind type (such as INSERT, DELETE, UPDATE\_BEFORE, or UPDATE\_AFTER) to each row without requiring explicit declaration. This process mirrors changes, similar to MySQL or PostgreSQL CDC functionality. The following sample code shows the DDL statement for creating a source table in this mode.

#### **VVR 11+**

```
CREATE TEMPORARY TABLE test_message_src_binlog_table(
  id INTEGER,
  title VARCHAR,
  body VARCHAR
) WITH (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username'='${secret_values.ak_id}',            -- We recommend using variables for AK/SK to prevent key leakage.
  'password'='${secret_values.ak_secret}',        
  'endpoint'='<yourEndpoint>',
  'source.binlog.change-log-mode'='ALL',  -- Read all changeLog types, including INSERT, DELETE, UPDATE_BEFORE, and UPDATE_AFTER.
  'retry-count'='10',                     -- Number of retries after a binlog read error.
  'retry-sleep-step-ms'='5000',           -- Incremental backoff time between retries. The first retry waits 5s, the second 10s, and so on.
  'source.binlog.batch-size'='512'        -- Number of rows to read from binlog in a batch.
);
```

#### **VVR 8+**

```
CREATE TEMPORARY TABLE test_message_src_binlog_table(
  id INTEGER,
  title VARCHAR,
  body VARCHAR
) WITH (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username' = '${secret_values.ak_id}',       -- We recommend using variables for AK/SK to prevent key leakage.   
  'password' = '${secret_values.ak_secret}',
  'endpoint'='<yourEndpoint>',
  'binlog' = 'true',
  'cdcMode' = 'true',
  'sdkMode'='jdbc',
  'binlogMaxRetryTimes' = '10',     -- Number of retries after a binlog read error.
  'binlogRetryIntervalMs' = '500',  -- Retry interval after a binlog read error, in milliseconds.
  'binlogBatchReadSize' = '100'     -- Number of rows to read from binlog in a batch.
);
```

## **Non-CDC mode**

In this mode, binlog data consumed by the source is passed to descendant nodes as regular Flink data. This means all data is of the INSERT type. You can decide how to process data of a specific `hg_binlog_event_type` type as needed. The following sample code shows the DDL statement for the source table.

#### **VVR 11+**

```
CREATE TEMPORARY TABLE test_message_src_binlog_table(
  id INTEGER,
  title VARCHAR,
  body VARCHAR
) WITH (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username' = '${secret_values.ak_id}',       -- We recommend using variables for AK/SK to prevent key leakage.   
  'password' = '${secret_values.ak_secret}',
  'endpoint'='<yourEndpoint>',
  'source.binlog.change-log-mode'='ALL_AS_APPEND_ONLY',  -- Treat all changelog types as INSERT.
  'retry-count'='10',                     -- Number of retries after a binlog read error.
  'retry-sleep-step-ms'='5000',           -- Incremental backoff time between retries. The first retry waits 5s, the second 10s, and so on.
  'source.binlog.batch-size'='512'        -- Number of rows to read from binlog in a batch.
);
```

#### **VVR 8+**

```
CREATE TEMPORARY TABLE test_message_src_binlog_table(
  hg_binlog_lsn BIGINT,
  hg_binlog_event_type BIGINT,
  hg_binlog_timestamp_us BIGINT,
  id INTEGER,
  title VARCHAR,
  body VARCHAR
) WITH (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username' = '${secret_values.ak_id}',       -- We recommend using variables for AK/SK to prevent key leakage.   
  'password' = '${secret_values.ak_secret}',
  'endpoint'='<yourEndpoint>',
  'binlog' = 'true',
  'binlogMaxRetryTimes' = '10',     -- Number of retries after a binlog read error.
  'binlogRetryIntervalMs' = '500',  -- Retry interval after a binlog read error, in milliseconds.
  'binlogBatchReadSize' = '100'     -- Number of rows to read from binlog in a batch.
);
```

#### **Binlog-disabled source tables**

#### **VVR 11+**

**Important**

By default, Ververica Runtime (VVR) versions 11.1 and later consume binary logging data. For more information, see [the Binlog Source table](#445ea9a19brrq).

```
CREATE TEMPORARY TABLE hologres_source (
  name varchar, 
  age BIGINT,
  birthday BIGINT
) WITH (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username' = '${secret_values.ak_id}',       -- We recommend using variables for AK/SK to prevent key leakage.   
  'password' = '${secret_values.ak_secret}',
  'endpoint'='<yourEndpoint>',
  'source.binlog'='false'                      -- Do not read binlog data.
);
```

#### **VVR 8+**

```
CREATE TEMPORARY TABLE hologres_source (
  name varchar, 
  age BIGINT,
  birthday BIGINT
) WITH (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username' = '${secret_values.ak_id}',       -- We recommend using variables for AK/SK to prevent key leakage.   
  'password' = '${secret_values.ak_secret}',
  'endpoint'='<yourEndpoint>',
  'sdkMode' = 'jdbc'
);
```

### **Sink tables**

```
CREATE TEMPORARY TABLE datagen_source(
  name varchar, 
  age BIGINT,
  birthday BIGINT
) WITH (
  'connector'='datagen'
);
CREATE TEMPORARY TABLE hologres_sink (
  name varchar, 
  age BIGINT,
  birthday BIGINT
) WITH (
  'connector'='hologres',           
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username' = '${secret_values.ak_id}',       -- We recommend using variables for AK/SK to prevent key leakage.   
  'password' = '${secret_values.ak_secret}',
  'endpoint'='<yourEndpoint>'
);
INSERT INTO hologres_sink SELECT * from datagen_source;
```

### **Dimension Table Example**

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
  'connector'='hologres',           
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username' = '${secret_values.ak_id}',       -- We recommend using variables for AK/SK to prevent key leakage.   
  'password' = '${secret_values.ak_secret}',
  'endpoint'='<yourEndpoint>'
);
CREATE TEMPORARY TABLE blackhole_sink (
  a INT,
  b STRING
) WITH (
  'connector' = 'blackhole'
);
INSERT INTO blackhole_sink SELECT T.a,H.b
FROM datagen_source AS T JOIN hologres_dim FOR SYSTEM_TIME AS OF T.proctime AS H ON T.a = H.a;
```

## Feature details

### **Unified full and incremental ingestion**

#### **Scenarios**

-   This feature applies only to target tables with a primary key. We recommend using it with Hologres source tables in CDC mode.
    
-   Hologres supports enabling binlog on demand. You can [enable binlog](#4d411a4e2420w) for tables containing historical data.
    

#### **Sample code**

#### **VVR 11+**

```
CREATE TABLE test_message_src_binlog_table(
  hg_binlog_lsn BIGINT,
  hg_binlog_event_type BIGINT,
  hg_binlog_timestamp_us BIGINT,
  id INTEGER,
  title VARCHAR,
  body VARCHAR
) WITH (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username'='<yourAccessID>',
  'password'='<yourAccessSecret>',
  'endpoint'='<yourEndpoint>',
  'source.binlog.startup-mode' = 'INITIAL',   -- First reads all historical data, then reads binlog incrementally.
  'retry-count'='10',                         -- Number of retries after a binlog read error.
  'retry-sleep-step-ms'='5000',               -- Incremental backoff time between retries. The first retry waits 5s, the second 10s, and so on.
  'source.binlog.batch-size'='512'            -- Number of rows to read from binlog in a batch.
  );
```

**Note**

-   Set `source.binlog.startup-mode` to `INITIAL` to first read all historical data and then start incremental reading.
    
-   If you set the `startTime` parameter or select a start time on the startup interface, `binlogStartUpMode` is forced to use the `timestamp` consumption mode, and other consumption modes are ignored because the `startTime` parameter has a higher priority.
    

#### **VVR 8+**

```
CREATE TABLE test_message_src_binlog_table(
  hg_binlog_lsn BIGINT,
  hg_binlog_event_type BIGINT,
  hg_binlog_timestamp_us BIGINT,
  id INTEGER,
  title VARCHAR,
  body VARCHAR
) WITH (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username'='<yourAccessID>',
  'password'='<yourAccessSecret>',
  'endpoint'='<yourEndpoint>',
  'binlog' = 'true',
  'cdcMode' = 'true',
  'binlogStartUpMode' = 'initial', -- First reads all historical data, then reads binlog incrementally.
  'binlogMaxRetryTimes' = '10',     -- Number of retries after a binlog read error.
  'binlogRetryIntervalMs' = '500',  -- Retry interval after a binlog read error, in milliseconds.
  'binlogBatchReadSize' = '100'     -- Number of rows to read from binlog in a batch.
  );
```

**Note**

-   Set `binlogStartUpMode` to `initial` to first read all historical data and then start incremental reading.
    
-   `startTime` takes precedence over `binlogStartUpMode`. If you set the `startTime` parameter or select a start time in the startup interface, `binlogStartUpMode` is automatically forced to use the `timestamp` mode for consumption, and other consumption modes will not take effect.
    

### **Handle primary key conflicts**

When writing to Hologres, if data with a duplicate primary key exists, the connector provides three handling strategies.

#### **VVR 11+**

Specify the `sink.on-conflict-action` option to implement different strategies.

**sink.on-conflict-action value**

**Description**

INSERT\_OR\_IGNORE

Keeps the first occurrence of the data and ignores subsequent duplicates.

INSERT\_OR\_REPLACE

Replaces the existing row with the new data.

INSERT\_OR\_UPDATE (default)

Updates only the specified columns, leaving other columns in the existing row unchanged.

#### **VVR 8+**

Specify the `mutatetype` option to implement different strategies.

**mutatetype value**

**Description**

insertorignore (default)

Keeps the first occurrence of the data and ignores subsequent duplicates.

insertorreplace

Replaces the existing row with the new data.

insertorupdate

Updates only the specified columns, leaving other columns in the existing row unchanged.

> Assume a table has fields a, b, c, and d, where a is the primary key. If the sink table contains only fields a and b, then when you configure `INSERT_OR_UPDATE`, only field b is updated, and fields c and d remain unchanged.

**Note**

The number of columns in the sink table can be fewer than in the physical Hologres table, but any missing columns must be nullable. Otherwise, the write operation fails.

### **Write to partitioned tables**

By default, the Hologres sink only supports importing data into a non-partitioned table. To import data into a partitioned table, enable the following configuration:

#### **VVR 11+**

Set `sink.create-missing-partition` to `true`. This allows the connector to automatically create child partitions if they do not exist.

**Note**

-   VVR 11.1 and later support writing to partitioned tables, automatically routing data to the corresponding child partitions.
    
-   Set `**tablename**` to the name of the parent table.
    
-   If you do not create a child table beforehand and do not set `**sink.create-missing-partition=true**`, writes fail.
    

#### **VVR 8+**

-   Set `partitionRouter` to `true` to automatically route data to the corresponding child partitions.
    
-   Set `createparttable` to `true` to automatically create child partitions if they do not exist.
    

**Note**

-   Set `**tablename**` to the name of the parent table.
    
-   To ensure successful writes, either create child partitions in advance or set `**createparttable=true**`.
    

### Merge and Partial Updates for Wide Tables with Multi-Stream Writes

The connector can efficiently merge multiple data streams into a single Hologres wide table. It supports partial row updates, applying changes only to modified columns based on the primary key. This optimizes write efficiency and ensures data consistency.

#### **Limits**

-   A wide table must have a primary key.
    
-   Each data stream must contain all primary key fields.
    
-   If your Hologres wide table uses column-oriented storage, high RPS can lead to elevated CPU usage. Consider disabling dictionary encoding for the table's columns to mitigate this.
    

#### **Example**

Assume there are two data streams. One stream contains columns a, b, and c, and the other contains columns a, d, and e. The Hologres wide table WIDE\_TABLE contains columns a, b, c, d, and e, where a is the primary key.

#### **VVR 11+**

```
// Assume source1 and source2 are already defined.
CREATE TEMPORARY TABLE hologres_sink ( -- Declare five columns: a, b, c, d, e.
  a BIGINT, 
  b STRING,
  c STRING,
  d STRING,
  e STRING,
  primary key(a) not enforced
) WITH (
  'connector'='hologres',           
  'dbname'='<yourDbname>',
  'tablename'='<yourWideTablename>',  -- The Hologres wide table, containing columns a, b, c, d, e.
  'username' = '${secret_values.ak_id}',
  'password' = '${secret_values.ak_secret}',
  'endpoint'='<yourEndpoint>',
  'sink.on-conflict-action'='INSERT_OR_UPDATE',   -- Update only specified columns based on the primary key.
  'sink.delete-strategy'='IGNORE_DELETE',         -- Strategy for handling retraction messages. IGNORE_DELETE is suitable for scenarios that only require inserts or updates, not deletes.
  'sink.partial-insert.enabled'='true'            -- Enable partial column updates. This allows the connector to update or insert only the columns specified in the `INSERT` statement.
);

BEGIN STATEMENT SET;
INSERT INTO hologres_sink(a,b,c) select * from source1;  -- Insert only columns a, b, and c.
INSERT INTO hologres_sink(a,d,e) select * from source2;  -- Insert only columns a, d, and e.
END;
```

#### **VVR 8+**

```
// Assume source1 and source2 are already defined.
CREATE TEMPORARY TABLE hologres_sink ( -- Declare five columns: a, b, c, d, e.
  a BIGINT, 
  b STRING,
  c STRING,
  d STRING,
  e STRING,
  primary key(a) not enforced
) WITH (
  'connector'='hologres',           
  'dbname'='<yourDbname>',
  'tablename'='<yourWideTablename>',  -- The Hologres wide table, containing columns a, b, c, d, e.
  'username' = '${secret_values.ak_id}',
  'password' = '${secret_values.ak_secret}',
  'endpoint'='<yourEndpoint>',
  'mutatetype'='insertorupdate',    -- Update only specified columns based on the primary key.
  'ignoredelete'='true',            -- Ignore delete requests generated by retraction messages.
  'partial-insert.enabled'='true'   -- Enable partial column updates, supporting updates for only the columns declared in the INSERT statement.
);

BEGIN STATEMENT SET;
INSERT INTO hologres_sink(a,b,c) select * from source1;  -- Insert only columns a, b, and c.
INSERT INTO hologres_sink(a,d,e) select * from source2;  -- Insert only columns a, d, and e.
END;
```

**Note**

`ignoredelete` is set to `true` to ignore Delete requests generated by retraction messages. In VVR 8.0.8 and later, we recommend using `sink.delete-strategy` to configure various strategies for partial updates.

## Read binlogs from partitioned tables (Beta)

Partitioned tables improve data archiving and query performance. The Hologres connector supports reading binlogs from both physical and logical partitioned tables. For more information, see [CREATE LOGICAL PARTITION TABLE](/help/en/hologres/developer-reference/create-logical-partition-table#32e49b34511gz).

### **Consuming binary logs from physical partitioned tables**

The Hologres connector supports reading binlogs from partitioned tables and dynamically monitors for new partitions within a single job, greatly enhancing real-time data processing efficiency and usability.

#### **Notes**

-   Reading binlogs from partitioned tables requires: VVR 8.0.11+, Hologres 2.1.27+, binlog-enabled tables, and JDBC consumption.
    
-   Partition names must strictly consist of the parent table name, an underscore (\_), and the partition value—that is, `{parent_table}_{partition_value}`. Partitions that do not follow this format cannot be consumed. For more information, see [Dynamic partition management](/help/en/hologres/developer-reference/dynamic-partition-management#5660a3b690lsz).
    
    **Important**
    
    -   For `DYNAMIC` mode, VVR 8.0.11 does not support partition fields with a `-` separator (such as `YYYY-MM-DD`).
        
    -   VVR 11.1+ fully supports reading from partitions with custom name formats.
        
    -   This restriction applies only to reading; writing to partitioned tables is unaffected.
        
    
-   When declaring a Hologres source table in Flink, include the partition columns of the Hologres partitioned table.
    
-   For DYNAMIC mode, ensure your partitioned table has [dynamic partition management](/help/en/hologres/developer-reference/dynamic-partition-management) enabled. Also, the partition pre-creation parameter `auto_partitioning.num_precreate` must be greater than 1. Otherwise, the job throws an exception when reading the latest partition.
    
-   In DYNAMIC partition binlog consumption mode, once a new partition is added, incremental data from older partitions is not read.
    

#### **Examples**

**Pattern type**

**Feature**

**Description**

DYNAMIC

Dynamic partition reading

Automatically monitors new partitions and dynamically advances reading progress in chronological order. Suitable for real-time use cases.

STATIC

Static partition consumption

Reads only existing partitions (or explicitly specified ones) and does not automatically discover new partitions. Suitable for processing historical data within a fixed range.

#### **DYNAMIC Mode**

#### **VVR 11+**

Assume that Hologres contains the following DDL-defined partitioned table, with binary logging and dynamic partitioning enabled.

```
CREATE TABLE "test_message_src1" (
    id int,
    title text,
    body text,
    dt text,
    PRIMARY KEY (id, dt)
)
PARTITION BY LIST (dt) WITH (
    binlog_level = 'replica', 
    auto_partitioning_enable =  'true',   -- Enable dynamic partitioning.
    auto_partitioning_time_unit = 'DAY',  -- Partitions are created daily. Example partition names: test_message_src1_20250512, test_message_src1_20250513.
    auto_partitioning_num_precreate = '2' -- Pre-create two partitions.
);
-- For existing partitioned tables, you can also enable dynamic partitioning using ALTER TABLE.
```

In Flink, use the following SQL statement to consume data from the partitioned table `test_message_src1` in DYNAMIC mode.

```
CREATE TEMPORARY TABLE hologres_source
(
  id INTEGER,
  title VARCHAR,
  body VARCHAR,
  dt VARCHAR  -- The partition column of the Hologres partitioned table.
)
with (
  'connector' = 'hologres',
  'dbname' = '<yourDatabase>',
  'tablename' = 'test_message_src1',  -- The Hologres table with dynamic partitioning enabled.
  'username' = '<yourUserName>',
  'password' = '<yourPassword>',
  'endpoint' = '<yourEndpoint>',
  'source.binlog.partition-binlog-mode' = 'DYNAMIC', -- Dynamically monitor the latest partitions.
  'source.binlog.startup-mode' = 'initial'           -- First read all existing data, then start reading binlog incrementally.
);
```

#### **VVR 8.0.11**

Assume Hologres contains the following DDL-defined partitioned table, with binary logging and dynamic partitioning enabled.

```
CREATE TABLE "test_message_src1" (
    id int,
    title text,
    body text,
    dt text,
    PRIMARY KEY (id, dt)
)
PARTITION BY LIST (dt) WITH (
    binlog_level = 'replica', 
    auto_partitioning_enable =  'true',   -- Enable dynamic partitioning.
    auto_partitioning_time_unit = 'DAY',  -- Partitions are created daily. Example partition names: test_message_src1_20241027, test_message_src1_20241028.
    auto_partitioning_num_precreate = '2' -- Pre-create two partitions.
);

-- For existing partitioned tables, you can also enable dynamic partitioning using ALTER TABLE.
```

In Flink, use the following SQL statement to consume data from the partitioned table `test_message_src1` in DYNAMIC mode.

```
CREATE TEMPORARY TABLE hologres_source
(
  id INTEGER,
  title VARCHAR,
  body VARCHAR,
  dt VARCHAR  -- The partition column of the Hologres partitioned table.
)
with (
  'connector' = 'hologres',
  'dbname' = '<yourDatabase>',
  'tablename' = 'test_message_src1',  -- The Hologres table with dynamic partitioning enabled.
  'username' = '<yourUserName>',
  'password' = '<yourPassword>',
  'endpoint' = '<yourEndpoint>',
  'binlog' = 'true',
  'partition-binlog.mode' = 'DYNAMIC',  -- Dynamically monitor the latest partitions.
  'binlogstartUpMode' = 'initial',      -- First read all existing data, then start reading binlog incrementally.
  'sdkMode' = 'jdbc_fixed'              -- Use this mode to avoid connection limit issues.
);
```

#### **STATIC mode**

## **VVR 11+**

Assume that Hologres contains the following partitioned table defined by Data Definition Language (DDL), and binary logging is enabled.

```
CREATE TABLE test_message_src2 (
    id int,
    title text,
    body text,
    color text,
    PRIMARY KEY (id, color)
)
PARTITION BY LIST (color) WITH (
    binlog_level = 'replica'
);
create table test_message_src2_red partition of test_message_src2 for values in ('red');
create table test_message_src2_blue partition of test_message_src2 for values in ('blue');
create table test_message_src2_green partition of test_message_src2 for values in ('green');
create table test_message_src2_black partition of test_message_src2 for values in ('black');
```

In Flink, use the following SQL statement to consume the partitioned table `test_message_src2` in STATIC mode.

```
CREATE TEMPORARY TABLE hologres_source
(
  id INTEGER,
  title VARCHAR,
  body VARCHAR,
  color VARCHAR  -- The partition column of the Hologres partitioned table.
)
with (
  'connector' = 'hologres',
  'dbname' = '<yourDatabase>',
  'tablename' = 'test_message_src2',  -- The partitioned table.
  'username' = '<yourUserName>',
  'password' = '<yourPassword>',
  'endpoint' = '<yourEndpoint>',
  'source.binlog.partition-binlog-mode' = 'STATIC', -- Read a fixed set of partitions.
  'source.binlog.partition-values-to-read' = 'red,blue,green',  -- Read only the three specified partitions; the 'black' partition is not read. New partitions are also not read. If not set, all partitions of the parent table are read.
  'source.binlog.startup-mode' = 'initial'  -- First read all existing data, then start reading binlog incrementally.
);
```

## **VVR 8.0.11**

Assume that the following DDL partitioned table exists in Hologres and has binary logging enabled.

```
CREATE TABLE test_message_src2 (
    id int,
    title text,
    body text,
    color text,
    PRIMARY KEY (id, color)
)
PARTITION BY LIST (color) WITH (
    binlog_level = 'replica'
);
create table test_message_src2_red partition of test_message_src2 for values in ('red');
create table test_message_src2_blue partition of test_message_src2 for values in ('blue');
create table test_message_src2_green partition of test_message_src2 for values in ('green');
create table test_message_src2_black partition of test_message_src2 for values in ('black');
```

In Flink, use the following SQL statement to read data from the partitioned table `test_message_src2` in STATIC mode.

```
CREATE TEMPORARY TABLE hologres_source
(
  id INTEGER,
  title VARCHAR,
  body VARCHAR,
  color VARCHAR  -- The partition column of the Hologres partitioned table.
)
with (
  'connector' = 'hologres',
  'dbname' = '<yourDatabase>',
  'tablename' = 'test_message_src2',  -- The partitioned table.
  'username' = '<yourUserName>',
  'password' = '<yourPassword>',
  'endpoint' = '<yourEndpoint>',
  'binlog' = 'true',
  'partition-binlog.mode' = 'STATIC', -- Read a fixed set of partitions.
  'partition-values-to-read' = 'red,blue,green',  -- Read only the three specified partitions; the 'black' partition is not read. New partitions are also not read. If not set, all partitions of the parent table are read.
  'binlogstartUpMode' = 'initial',  -- First read all existing data, then start reading binlog incrementally.
  'sdkMode' = 'jdbc_fixed' -- Use this mode to avoid connection limit issues.
);
```

### **Consuming Binary Logging from Logical Partitioned Tables**

The Hologres connector supports reading binlogs from logical partitioned tables and allows explicitly specifying which partitions to read.

#### **Precautions**

-   Reading binlog from specific partitions requires: VVR 11.0.0+ and Hologres V3.1+.
    
-   Reading binlog from all partitions is equivalent to reading binlog from a non-partitioned Hologres table. For instructions, see [Source tables](#f5f94d4944ras).
    

#### **Example**

**Parameter Name**

**Description**

**Example**

source.binlog.logical-partition-filter-column-names

The partition column names, enclosed in double quotes. Separate multiple column names with commas. If a column name contains a double quote, escape it with another double quote.

'source.binlog.logical-partition-filter-column-names'='"Pt","id"'

The partition columns are Pt and id.

source.binlog.logical-partition-filter-column-values

The partition column values. Each partition is specified by a set of column values. Values for different columns are separated by commas and enclosed in double quotes. If a value contains a double quote, escape it with another double quote. Multiple partitions are separated by semicolons.

'source.binlog.logical-partition-filter-column-values'='"20240910","0";"special""value","9"'

Specify consumption of two partitions. The partition key has two columns. The first partition key value is (20240910, 0), and the second partition key value is (special"value, 9).

Assume the following table has been created in Hologres:

```
CREATE TABLE holo_table (
    id int not null,
    name text,
    age numeric(18,4),
    "Pt" text,
    primary key(id, "Pt")
)
LOGICAL PARTITION BY LIST ("Pt", id)
WITH (
    binlog_level ='replica'
);
```

Consume the binary logging of this table in Flink.

```
CREATE TEMPORARY TABLE test_src_binlog_table(
  id INTEGER,
  name VARCHAR,
  age decimal(18,4),
  `Pt` VARCHAR
) WITH (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='holo_table',
  'username'='<yourAccessID>',
  'password'='<yourAccessSecret>',
  'endpoint'='<yourEndpoint>',
  'source.binlog'='true',
  'source.binlog.logical-partition-filter-column-names'='"Pt","id"',
  'source.binlog.logical-partition-filter-column-values'='<yourPartitionColumnValues>',
  'source.binlog.change-log-mode'='ALL',  -- Read all changeLog types, including INSERT, DELETE, UPDATE_BEFORE, and UPDATE_AFTER.
  'retry-count'='10',                     -- Number of retries after a binlog read error.
  'retry-sleep-step-ms'='5000',           -- Incremental backoff time between retries. The first retry waits 5s, the second 10s, and so on.
  'source.binlog.batch-size'='512'        -- Number of rows to read from binlog in a batch.
);
```

## DataStream API

**Important**

To use the DataStream API, include the Hologres DataStream connector dependency in your project. For instructions on setting up DataStream connectors, see [Integrate and use connectors in DataStream programs](/help/en/flink/realtime-flink/developer-reference/settings-of-datastream-connectors#main-2309395). The [Hologres DataStream connector](https://mvnrepository.com/artifact/com.alibaba.ververica/ververica-connector-hologres) is available in our Maven Central Repository. For local debugging, use the corresponding Uber JAR. For more information, see [Run and debug jobs that contain connectors locally](/help/en/flink/realtime-flink/developer-reference/run-or-debug-a-flink-deployment-that-includes-a-connector-in-an-on-premises-environment).

### **Hologres source table**

#### **Binlog-enabled source table**

Realtime Compute for Apache Flink provides the HologresBinlogSource class to read Hologres binlog data. The following example shows how to create a HologresBinlogSource.

## VVR 11.3+

**Important**

As of VVR 11.1.2, the `JDBCOptions` and `startTimeMs` parameters have been removed from the HologresBinlogSource constructor. As of VVR 11.3, the `List<Subscribe.BinlogFilter>` parameter has been added. If you are using VVR 11 or later, we recommend using VVR 11.3 or later.

```
public class Sample {                                                                                                                                                                          
        public static void main(String[] args) throws Exception {
            final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
            // Initialize the schema of the table to be read. It must match the columns of the Hologres table schema. You can define a subset of columns.
            TableSchema schema = TableSchema.builder()
                    .field("a", DataTypes.INT())
                    .field("b", DataTypes.STRING())
                    .field("c", DataTypes.TIMESTAMP())
                    .build();

            // Name of the table to read.
            String sourceTableName = "sourceTableName";

            // Hologres connector options.
            Configuration config = new Configuration();
            config.setString(HologresConfigs.ENDPOINT, "yourEndpoint");
            config.setString(HologresConfigs.USERNAME, "yourUserName");
            config.setString(HologresConfigs.PASSWORD, "yourPassword");
            config.setString(HologresConfigs.DATABASE, "yourDatabaseName");
            config.setString(HologresConfigs.TABLE, sourceTableName);
            config.set(HologresConfigs.BINLOG, true);
            config.set(HologresConfigs.BINLOG_CHANGE_LOG_MODE, BinlogChangeLogMode.ALL);
            // Build the HologresBinlogSource.
            HologresBinlogSource source = new HologresBinlogSource(
                    new HologresConnectionParam(config),
                    schema,
                    config,
                    StartupMode.INITIAL,
                    sourceTableName,
                    "",
                    Collections.emptyList(),
                    -1,
                    Collections.emptySet(),
                    Collections.emptyList()
            );
            env.fromSource(source, WatermarkStrategy.noWatermarks(), "Test source").print();
            env.execute();
        }
  }
```

#### **VVR 8.0.11+**

```
public class Sample {
    public static void main(String[] args) throws Exception {
        final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        // Initialize the schema of the table to be read. It must match the columns of the Hologres table schema. You can define a subset of columns.
        TableSchema schema = TableSchema.builder()
                .field("a", DataTypes.INT())
                .field("b", DataTypes.STRING())
                .field("c", DataTypes.TIMESTAMP())
                .build();
        // Hologres connector options.
        Configuration config = new Configuration();
        config.setString(HologresConfigs.ENDPOINT, "yourEndpoint");
        config.setString(HologresConfigs.USERNAME, "yourUserName");
        config.setString(HologresConfigs.PASSWORD, "yourPassword");
        config.setString(HologresConfigs.DATABASE, "yourDatabaseName");
        config.setString(HologresConfigs.TABLE, "yourTableName");
        config.setString(HologresConfigs.SDK_MODE, "jdbc");
        config.setBoolean(HologresBinlogConfigs.OPTIONAL_BINLOG, true);
        config.setBoolean(HologresBinlogConfigs.BINLOG_CDC_MODE, true);
        // Build JDBCOptions.
        JDBCOptions jdbcOptions = JDBCUtils.getJDBCOptions(config);
        // Build the HologresBinlogSource.
        long startTimeMs = 0;
        HologresBinlogSource source = new HologresBinlogSource(
                new HologresConnectionParam(config),
                schema,
                config,
                jdbcOptions,
                startTimeMs,
                StartupMode.INITIAL,
                "",
                "",
                -1,
                Collections.emptySet(),
                new ArrayList<>()
        );
        env.fromSource(source, WatermarkStrategy.noWatermarks(), "Test source").print();
        env.execute();
    }
}
```

#### **VVR 8.0.7+**

```
public class Sample {
    public static void main(String[] args) throws Exception {
        final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        // Initialize the schema of the table to be read. It must match the columns of the Hologres table schema. You can define a subset of columns.
        TableSchema schema = TableSchema.builder()
                .field("a", DataTypes.INT())
                .field("b", DataTypes.STRING())
                .field("c", DataTypes.TIMESTAMP())
                .build();
        // Hologres connector options.
        Configuration config = new Configuration();
        config.setString(HologresConfigs.ENDPOINT, "yourEndpoint");
        config.setString(HologresConfigs.USERNAME, "yourUserName");
        config.setString(HologresConfigs.PASSWORD, "yourPassword");
        config.setString(HologresConfigs.DATABASE, "yourDatabaseName");
        config.setString(HologresConfigs.TABLE, "yourTableName");
        config.setString(HologresConfigs.SDK_MODE, "jdbc");
        config.setBoolean(HologresBinlogConfigs.OPTIONAL_BINLOG, true);
        config.setBoolean(HologresBinlogConfigs.BINLOG_CDC_MODE, true);
        // Build JDBCOptions.
        JDBCOptions jdbcOptions = JDBCUtils.getJDBCOptions(config);
        // Build the HologresBinlogSource.
        long startTimeMs = 0;
        HologresBinlogSource source = new HologresBinlogSource(
                new HologresConnectionParam(config),
                schema,
                config,
                jdbcOptions,
                startTimeMs,
                StartupMode.INITIAL,
                "",
                "",
                -1,
                Collections.emptySet()
        );
        env.fromSource(source, WatermarkStrategy.noWatermarks(), "Test source").print();
        env.execute();
    }
}
```

#### **VVR 6.0.7+**

```
public class Sample {
    public static void main(String[] args) throws Exception {
        final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        // Initialize the schema of the table to be read. It must match the columns of the Hologres table schema. You can define a subset of columns.
        TableSchema schema = TableSchema.builder()
                .field("a", DataTypes.INT())
                .build();
         // Hologres connector options.
        Configuration config = new Configuration();
        config.setString(HologresConfigs.ENDPOINT, "yourEndpoint");
        config.setString(HologresConfigs.USERNAME, "yourUserName");
        config.setString(HologresConfigs.PASSWORD, "yourPassword");
        config.setString(HologresConfigs.DATABASE, "yourDatabaseName");
        config.setString(HologresConfigs.TABLE, "yourTableName");
        config.setString(HologresConfigs.SDK_MODE, "jdbc");
        config.setBoolean(HologresBinlogConfigs.OPTIONAL_BINLOG, true);
        config.setBoolean(HologresBinlogConfigs.BINLOG_CDC_MODE, true);
        // Build JDBCOptions.
        JDBCOptions jdbcOptions = JDBCUtils.getJDBCOptions(config);
        // Set or create the default slot name.
        config.setString(HologresBinlogConfigs.JDBC_BINLOG_SLOT_NAME, HoloBinlogUtil.getOrCreateDefaultSlotForJDBCBinlog(jdbcOptions));

        boolean cdcMode = config.get(HologresBinlogConfigs.BINLOG_CDC_MODE) && config.get(HologresBinlogConfigs.OPTIONAL_BINLOG);
        // Build the JDBCBinlogRecordConverter.
        JDBCBinlogRecordConverter recordConverter = new JDBCBinlogRecordConverter(
                jdbcOptions.getTable(),
                schema,
                new HologresConnectionParam(config),
                cdcMode,
                Collections.emptySet());
        
        // Build the HologresBinlogSource.
        long startTimeMs = 0;
        HologresJDBCBinlogSource source = new HologresJDBCBinlogSource(
                new HologresConnectionParam(config),
                schema,
                config,
                jdbcOptions,
                startTimeMs,
                StartupMode.TIMESTAMP,
                recordConverter,
                "",
                -1);
        env.fromSource(source, WatermarkStrategy.noWatermarks(), "Test source").print();
        env.execute();
    }
}
```

**Important**

If you use a Realtime Compute for Apache Flink engine version earlier than 8.0.5 or a Hologres version earlier than V2.1, ensure the user is a superuser or has the Replication Role permission. For more information, see [Hologres permission issues](/help/en/flink/developer-reference/realtime-compute-real-time-consumption-of-hologres-in-flink#fa7e1612dfavc).

#### **Binlog-disabled source table**

Realtime Compute for Apache Flink provides the HologresBulkreadInputFormat class, an implementation of RichInputFormat, to read data from Hologres tables. The following example shows how to build a Hologres source to read data from a binlog-disabled Hologres table.

```
public class Sample {
    public static void main(String[] args) throws Exception {
        // Set up the Java DataStream API
        final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        // Initialize the schema of the table to be read. It must match the columns of the Hologres table schema. You can define a subset of columns.
        TableSchema schema = TableSchema.builder()
                .field("a", DataTypes.INT())
                .field("b", DataTypes.STRING())
                .field("c", DataTypes.TIMESTAMP())
                .build();
        // Hologres connector options.
        Configuration config = new Configuration();
        config.setString(HologresConfigs.ENDPOINT, "yourEndpoint");
        config.setString(HologresConfigs.USERNAME, "yourUserName");
        config.setString(HologresConfigs.PASSWORD, "yourPassword");
        config.setString(HologresConfigs.DATABASE, "yourDatabaseName");
        config.setString(HologresConfigs.TABLE, "yourTableName");
        // Build JDBCOptions.
        JDBCOptions jdbcOptions = JDBCUtils.getJDBCOptions(config);
        HologresBulkreadInputFormat inputFormat = new HologresBulkreadInputFormat(
                new HologresConnectionParam(config),
                jdbcOptions,
                schema,
                "",
                -1);
        TypeInformation<RowData> typeInfo = InternalTypeInfo.of(schema.toRowDataType().getLogicalType());
        env.addSource(new InputFormatSourceFunction<>(inputFormat, typeInfo)).returns(typeInfo).print();
        env.execute();
    }
}
```

#### **Maven dependency**

The [Hologres DataStream connector](https://mvnrepository.com/artifact/com.alibaba.ververica/ververica-connector-hologres) is available in our Maven Central Repository.

```
<dependency>
    <groupId>com.alibaba.ververica</groupId>
    <artifactId>ververica-connector-hologres</artifactId>
    <version>${vvr-version}</version>
</dependency>
```

### **Hologres sink table**

## VVR 11+

```
public class Sample {
      public static void main(String[] args) throws Exception {
          final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
          // Initialize the schema of the table to be written. It must match the columns of the Hologres table schema. You can define a subset of columns.
          TableSchema tableSchema = TableSchema.builder()
                  .field("a", DataTypes.INT().notNull())
                  .field("b", DataTypes.STRING())
                  .primaryKey("a")
                  .build();
          // Hologres connector options.
          Configuration config = new Configuration();
          config.set(HologresConfigs.ENDPOINT, "yourEndpoint");
          config.set(HologresConfigs.USERNAME, "yourUserName");
          config.set(HologresConfigs.PASSWORD, "yourPassword");
          config.set(HologresConfigs.DATABASE, "yourDatabaseName");
          config.set(HologresConfigs.TABLE, "yourTableName");
          HologresConnectionParam connectionParam = new HologresConnectionParam(config);
          HologresTableSchema hologresTableSchema =
                  HologresTableSchema.get(connectionParam.getJDBCOptions());
          // Column indexes to write to the sink.
          Integer[] targetColumnIndexes = {0, 1};
          // Build the Hologres sink.
          HologresSinkFunction sinkFunction =
                  new HologresSinkFunction(
                          connectionParam, tableSchema, targetColumnIndexes, hologresTableSchema);
          TypeInformation<RowData> typeInfo = InternalTypeInfo.of(tableSchema.toRowDataType().getLogicalType());
          env.fromElements((RowData) GenericRowData.of(101, StringData.fromString("name"))).returns(typeInfo).addSink(sinkFunction);
          env.execute();
      }
  }
```

## VVR 8+

```
public class Sample {
    public static void main(String[] args) throws Exception {
        // Set up the Java DataStream API
        final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        // Initialize the schema of the table to be written. It must match the columns of the Hologres table schema. You can define a subset of columns.
        TableSchema schema = TableSchema.builder()
                .field("a", DataTypes.INT())
                .field("b", DataTypes.STRING())
                .build();
        // Hologres connector options.
        Configuration config = new Configuration();
        config.setString(HologresConfigs.ENDPOINT, "yourEndpoint");
        config.setString(HologresConfigs.USERNAME, "yourUserName");
        config.setString(HologresConfigs.PASSWORD, "yourPassword");
        config.setString(HologresConfigs.DATABASE, "yourDatabaseName");
        config.setString(HologresConfigs.TABLE, "yourTableName");
        config.setString(HologresConfigs.SDK_MODE, "jdbc");
        HologresConnectionParam hologresConnectionParam = new HologresConnectionParam(config);
        
         // Build a Hologres writer to write data as RowData.
        AbstractHologresWriter<RowData> hologresWriter = HologresJDBCWriter.createRowDataWriter(
                hologresConnectionParam, 
                schema, 
                HologresTableSchema.get(hologresConnectionParam), 
                new Integer[0]);
        // Build the Hologres sink.
        HologresSinkFunction sinkFunction = new HologresSinkFunction(hologresConnectionParam, hologresWriter);
        TypeInformation<RowData> typeInfo = InternalTypeInfo.of(schema.toRowDataType().getLogicalType());
        env.fromElements((RowData) GenericRowData.of(101, StringData.fromString("name"))).returns(typeInfo).addSink(sinkFunction);
        env.execute();
    }
}
```

## Metadata columns

Realtime Compute for Apache Flink VVR 8.0.11 and later support metadata columns for binlog-enabled source tables. Starting from this version, we recommend declaring binlog fields, such as hg\_binlog\_event\_type, as metadata columns. [Metadata columns](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/dev/table/sql/create/#columns) extend the SQL standard. They let you access specific information, such as the database and table name of the source, and the change type and timestamp of the data. You can use this information to define custom processing logic, such as filtering out DELETE events.

**Field name**

**Data type**

**Description**

db\_name

STRING NOT NULL

The name of the database containing the row.

table\_name

STRING NOT NULL

The name of the table containing the row.

hg\_binlog\_lsn

BIGINT NOT NULL

A binlog system column representing the binlog sequence number. It is monotonically increasing but not continuous within a shard. It is not guaranteed to be unique or ordered across different shards.

hg\_binlog\_timestamp\_us

BIGINT NOT NULL

The timestamp of the change event in the database, in microseconds (us).

hg\_binlog\_event\_type

BIGINT NOT NULL

The CDC event type for the row. Valid values:

-   5: INSERT
    
-   2: DELETE
    
-   3: UPDATE\_BEFORE
    
-   7: UPDATE\_AFTER
    

hg\_shard\_id

INT NOT NULL

The shard where the data resides. For more information, see [Table Groups and Shards](/help/en/hologres/user-guide/basic-concepts#section-m8y-uki-27y).

In a DDL statement, declare a metadata column using `<meta_column_name> <datatype> METADATA VIRTUAL`. The following is an example:

```
CREATE TABLE test_message_src_binlog_table(
  hg_binlog_lsn bigint METADATA VIRTUAL
  hg_binlog_event_type bigint METADATA VIRTUAL
  hg_binlog_timestamp_us bigint METADATA VIRTUAL
  hg_shard_id int METADATA VIRTUAL
  db_name string METADATA VIRTUAL
  table_name string METADATA VIRTUAL
  id INTEGER,
  title VARCHAR,
  body VARCHAR
) WITH (
  'connector'='hologres',
  ...
  );
```

## **FAQ**

-   [Permission denied for database error during job publishing](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#cce85607f3mt5)
    
-   [Table ID mismatch error during checkpoint recovery](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#967b13621cy20)
    
-   [Unexpected precision in binlog consumption using JDBC mode](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#4d56e5e4d3urq)
    
-   [No table defined in publication or missing slot error after table recreation](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#3997f4f8cfhfb)
    
-   [Hologres Connector Release Note](/help/en/hologres/user-guide/import-using-flink/#section-y35-bdv-cc9)
    
-   [BackPressure Exceed reject Limit error](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-7jd-5gs-jh8)
    
-   [Error: remaining connection slots are reserved for non-replication superuser connections](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-w9g-0b2-kn5)
    
-   [No table defined in publication error](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#edeccb8053vzn)
    
-   [Blink and Flink: FAQ and Troubleshooting](/help/en/hologres/support/troubleshoot-blink-and-flink-issues)
    
-   [Relationship between Hologres Sink checkpoint interval and data visibility](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#f7a50f0b97o1l)
    

## **References**

-   For more information about managing Hologres catalogs, see [Manage Hologres catalogs](/help/en/flink/realtime-flink/user-guide/manage-hologres-catalogs).
    
-   For more information about building integrated real-time data warehouses with Hologres and Flink, see [Build a real-time data warehouse with Flink and Hologres](/help/en/flink/realtime-flink/use-cases/build-real-time-data-warehouse-based-on-flink-hologres).
    
-   Hologres efficiently supports data updates and corrections, making it suitable for building wide tables in multi-stream write scenarios. For more information, see [MongoDB+Hologres User Behavior Analysis](/help/en/flink/realtime-flink/use-cases/wide-table-data-analysis-based-on-mongodb-hologres).
