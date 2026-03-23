The Postgres CDC connector reads a full snapshot of a PostgreSQL database and then captures subsequent change data. This process ensures that each record is processed exactly once. This topic describes how to use the Postgres CDC connector.

## Background information

The Postgres CDC connector supports the following.

**Category**

**Details**

Supported types

Source table

**Note**

Use the [JDBC](/help/en/flink/realtime-flink/developer-reference/jdbc-connector#t2303558.html) connector for sink tables and dimension tables.

Mode

Stream mode only

Data format

Not applicable

Unique metrics

**Unique monitoring metrics**

-   currentFetchEventTimeLag: The interval from when data is generated to when it is pulled by the Source operator.
    
-   currentEmitEventTimeLag: The interval from when data is generated to when it leaves the Source operator.
    
-   sourceIdleTime: The duration for which the source has not produced new data.
    

**Note**

-   The currentFetchEventTimeLag and currentEmitEventTimeLag metrics are valid only in the incremental phase. In the full phase, their value is always 0.
    
-   For more information about the metrics, see [Metric description](/help/en/flink/realtime-flink/user-guide/metrics).
    

API type

SQL and Data Ingestion YAML

Supports updating or deleting sink table data

Not applicable

## Features

The Postgres CDC connector integrates with the incremental snapshot framework for Change Data Capture (CDC), which is available in Ververica Runtime (VVR) 8.0.6 and later. After reading the full historical data, the connector automatically switches to reading change logs from the write-ahead log (WAL). This process guarantees exactly-once semantics. The Postgres CDC source table supports concurrent, lock-free reading of full data and can resume from breakpoints.

As a source table, its features and advantages are as follows:

-   Unified stream and batch processing. The connector supports reading both full and incremental data, which eliminates the need to maintain two separate data processing jobs.
    
-   Concurrent reading of full data. This feature allows for horizontal scaling to improve performance.
    
-   Seamless switching from full to incremental reading. The connector automatically scales in to conserve compute resources.
    
-   Resumable reads. The connector can resume from breakpoints during the full data reading phase, which improves job stability.
    
-   Lock-free reading. Reading full data does not require locks, which prevents any impact on your online business operations.
    

## Prerequisites

The Postgres CDC connector reads change data capture (CDC) streams using the [logical replication](https://www.postgresql.org/docs/current/logical-replication.html) feature of PostgreSQL. The connector supports **Alibaba Cloud RDS for PostgreSQL**, **Amazon RDS for PostgreSQL**, and **self-managed PostgreSQL**.

**Important**

The required configurations may differ for **Alibaba Cloud RDS for PostgreSQL**, **Amazon RDS for PostgreSQL**, and **self-managed PostgreSQL**. For detailed configuration instructions, see the [Configure Postgres](/help/en/flink/realtime-flink/developer-reference/configure-a-postgresql-database#concept-2116236) document.

After you complete the configuration, ensure that the following conditions are met:

-   The [wal\_level](https://www.postgresql.org/docs/current/runtime-config-wal.html#:~:text=wal_level%20determines%20how%20much%20information,queries%20on%20a%20standby%20server.) parameter must be set to \`logical\`. This setting adds the necessary information to the write-ahead log (WAL) to support logical decoding.
    
-   The [REPLICA IDENTITY](https://www.postgresql.org/docs/current/static/sql-altertable.html#SQL-CREATETABLE-REPLICA-IDENTITY) of the subscribed table must be set to \`FULL\`. This setting ensures that \`INSERT\` and \`UPDATE\` events include the previous values of all columns in the table, which guarantees data consistency.
    
    **Note**
    
    \`REPLICA IDENTITY\` is a table-level setting specific to PostgreSQL. It determines whether \`INSERT\` and \`UPDATE\` events include the previous values of the affected columns. For more information about the values of \`REPLICA IDENTITY\`, see [REPLICA IDENTITY](https://debezium.io/documentation/reference/stable/connectors/postgresql.html#postgresql-replica-identity).
    
-   Ensure that the values of the \`max\_wal\_senders\` and \`max\_replication\_slots\` parameters are greater than the sum of the replication slots that are currently in use and the number of slots required by the Flink job.
    
-   Ensure the account has \`SUPERUSER\` privileges, or both \`LOGIN\` and \`REPLICATION\` permissions. The account must also have \`SELECT\` permission on the subscribed tables to query full data.
    

## Usage notes

Only Realtime Compute for Apache Flink V8.0.6 and later supports the Postgres CDC **incremental snapshot** feature.

### **Replication slots**

Flink PostgreSQL CDC jobs use **replication slots** to prevent the write-ahead log (WAL) from being purged prematurely and to ensure data consistency. If not managed properly, replication slots can cause issues such as **wasted disk space** or **data read delays**. We recommend that you follow these best practices:

-   **Clean up unused slots promptly**
    
    -   Flink **does not automatically delete** replication slots, even after a job stops. This is especially true for stateless restarts. This behavior prevents data loss that could occur if the WAL is purged.
        
    -   **If you confirm that a job will not be restarted, you must manually delete its associated replication slot** to free up disk space.
        
        **Important**
        
        Lifecycle management: Treat replication slots as job resources and manage them in synchronization with job starts and stops.
        
-   **Avoid reusing old slots**
    
    -   **New jobs should use a new slot name** instead of reusing an old one. Reusing a slot can cause the job to read a large amount of historical WAL data upon startup, which delays the processing of the latest data.
        
    -   PostgreSQL logical replication requires that **a slot can only be used by one connection**. Different jobs must use different slot names.
        
        **Important**
        
        Naming convention: When you customize \`slot.name\`, avoid using names with numeric suffixes, such as \`my\_slot\_1\`, to prevent conflicts with temporary slots.
        
-   **Slot behavior with incremental snapshots enabled**
    
    -   **Prerequisites:** Checkpoints must be enabled, and the source table must have a primary key defined.
        
    -   **Slot creation rules:**
        
        -   Incremental snapshot disabled: Only single concurrency is supported. One global slot is used.
            
        -   Incremental snapshot enabled:
            
            -   Full phase: Each concurrent source subtask creates a temporary slot. The naming format is `${slot.name}_${task_id}`.
                
            -   Incremental phase: All temporary slots are automatically reclaimed. Only one global slot is retained.
                
    -   **Maximum number of slots**: Source concurrency + 1 (during the full phase)
        
-   **Resources and performance**
    
    -   If the number of available slots or the amount of disk space in PostgreSQL is limited, you can reduce the concurrency for the full phase to use fewer temporary slots. This action reduces the read speed during the full phase.
        
    -   If the downstream sink supports idempotent writes, you can set `scan.incremental.snapshot.backfill.skip = true`. This setting skips the WAL backfill during the full phase and accelerates job startup.
        
        This configuration provides only at-least-once semantics. **It is not suitable for jobs with stateful computations, such as aggregations or dimension table joins**, because historical changes that are required for intermediate states may be lost.
        

-   **When incremental snapshots are disabled, checkpoints are not supported during the full table scan phase.**
    
    **Configuration to avoid timeouts during the full synchronization phase**
    
    When incremental snapshots are disabled, if your job triggers a checkpoint during the full table scan phase, the job may fail over due to a checkpoint timeout. To prevent this, you can configure the following parameters in **Other Configurations**. For more information, see [How do I configure custom runtime parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp). This configuration prevents failovers caused by checkpoint timeouts during the full synchronization phase.
    
    ```
    execution.checkpointing.interval: 10min
    execution.checkpointing.tolerable-failed-checkpoints: 100
    restart-strategy: fixed-delay
    restart-strategy.fixed-delay.attempts: 2147483647
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Remarks**
    
    execution.checkpointing.interval
    
    The interval between checkpoints.
    
    The unit is a Duration value, such as 10min or 30s.
    
    execution.checkpointing.tolerable-failed-checkpoints
    
    The number of checkpoint failures that can be tolerated before the job fails.
    
    The product of this parameter and the checkpoint scheduling interval is the allowed snapshot read time.
    
    **Note**
    
    If the table is very large, set this parameter to a larger value.
    
    restart-strategy
    
    The job restart strategy.
    
    Valid values:
    
    -   fixed-delay: Fixed-delay restart strategy.
        
    -   failure-rate: Failure-rate restart strategy.
        
    -   exponential-delay: Exponential-delay restart strategy.
        
    
    For more information, see [Restart Strategies](https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/task_failure_recovery/#restart-strategy).
    
    restart-strategy.fixed-delay.attempts
    
    The maximum number of restart attempts for the fixed-delay restart strategy.
    
    None.
    

### Reuse Postgres subscription

The Postgres CDC connector relies on a **publication** to determine which tables' changes are pushed to a slot. **If multiple jobs share the same publication, their configurations will be overwritten.**

**Cause**

The default value of `publication.autocreate.mode` is `filtered`, which includes only the tables that are specified in the connector configuration. This mode changes the tables in the publication when a job starts, which can affect the read operations of other jobs.

**Solution**

1.  Manually create a publication in PostgreSQL that includes all tables to be monitored. Alternatively, create a separate publication for each job.
    
    ```
    -- Create a publication named my_flink_pub that includes all tables (or specified tables, creating one publication per job)
    CREATE PUBLICATION my_flink_pub FOR TABLE table_a, table_b;
    -- Or more simply, include all tables in the database
    CREATE PUBLICATION my_flink_pub FOR ALL TABLES;
    ```
    
    **Note**
    
    Subscribing to all tables in the database is not recommended. If the database is large and contains many tables, this can cause **wasted network bandwidth** and **high CPU consumption on the Flink cluster**.
    
2.  Add the following Flink configurations:
    
    -   `debezium.publication.name = 'my_flink_pub'` (Specifies the publication name)
        
    -   `debezium.publication.autocreate.mode = 'disabled'` (Prevents Flink from trying to create or modify the publication on startup)
        

This approach provides complete isolation and lets you manage the publication manually instead of relying on Flink. This prevents new jobs from affecting existing ones and provides more secure access control.

## **SQL**

### **Syntax**

```
CREATE TABLE postgrescdc_source (
  id INT NOT NULL,
  name STRING,
  description STRING,
  weight DECIMAL(10,3)
) WITH (
  'connector' = 'postgres-cdc',
  'hostname' = '<host name>',
  'port' = '<port>',
  'username' = '<user name>',
  'password' = '<password>',
  'database-name' = '<database name>',
  'schema-name' = '<schema name>',
  'table-name' = '<table name>',
  'decoding.plugin.name'= 'pgoutput',
  'scan.incremental.snapshot.enabled' = 'true',
  -- Skipping backfill can speed up reads and reduce resource usage, but it may cause data duplication. Enable this if the downstream sink is idempotent.
  'scan.incremental.snapshot.backfill.skip' = 'false',
  -- In a production environment, set this to 'filtered' or 'disabled' and manage the publication manually instead of through Flink.
  'debezium-publication.autocreate.mode' = 'disabled'
  -- If you have multiple sources, configure a different publication for each source.
  --'debezium.publication.name' = 'my_flink_pub'
);
```

### **WITH parameters**

**Parameter**

**Description**

**Data type**

**Required**

**Default**

**Remarks**

connector

The connector type.

STRING

Yes

None

The value must be `postgres-cdc`.

hostname

The IP address or hostname of the PostgreSQL database.

STRING

Yes

None

None.

username

The username for the PostgreSQL database service.

STRING

Yes

None

None.

password

The password for the PostgreSQL database service.

STRING

Yes

None

None.

database-name

The database name.

STRING

Yes

None

The database name.

schema-name

The PostgreSQL schema name.

STRING

Yes

None

The schema name supports regular expressions to read data from multiple schemas.

table-name

The PostgreSQL table name.

STRING

Yes

None

The table name supports regular expressions to read data from multiple tables.

port

The port number of the PostgreSQL database service.

INTEGER

No

5432

None.

decoding.plugin.name

The name of the PostgreSQL logical decoding plugin.

STRING

No

decoderbufs

This is determined by the plugin installed on the PostgreSQL service. The supported plugins are:

-   decoderbufs (default): Supported on PostgreSQL 9.6 and later. This plugin must be installed.
    
-   pgoutput (recommended): The official built-in plugin for PostgreSQL 10 and later.
    

slot.name

The name of the logical decoding slot.

STRING

Required for VVR 8.0.1 and later. Optional for earlier versions.

None for VVR 8.0.1 and later. The default is \`flink\` for earlier versions.

Set a unique `slot.name` for each table to avoid the `PSQLException: ERROR: replication slot "debezium" is active for PID 974` error. For more information, see [Replication slots](#f56582c470zbn).

debezium.\*

Debezium properties and parameters

STRING

No

None

Provides finer-grained control over the Debezium client's behavior. For example, `'debezium.snapshot.mode' = 'never'`. For more information, see [Configuration properties](https://debezium.io/documentation/reference/2.6/connectors/postgresql.html#postgresql-connector-properties).

scan.incremental.snapshot.enabled

Specifies whether to enable incremental snapshots.

BOOLEAN

No

false

Valid values:

-   false (default): Disables incremental snapshots.
    
-   true: Enables incremental snapshots.
    

**Note**

-   This is an experimental feature. This parameter is supported only in real-time computing engine V8.0.6 and later.
    
-   For more information about the benefits, prerequisites, and limits of incremental snapshots, see [Features](#293646c9aap88), [Prerequisites](#section-opv-l2z-4w4), and [Usage notes](#section-1ok-2nv-7yl).
    

scan.startup.mode

The startup mode for data consumption.

STRING

No

initial

Valid values:

-   **initial** (default): Scans the full historical data on the first startup, and then reads the latest WAL data.
    
-   **latest-offset**: Does not scan the full historical data on the first startup. It starts reading from the end of the WAL, which means it only reads the latest changes made after the connector starts.
    
-   **snapshot**: Scans the full historical data, reads the new WAL data generated during the full phase, and then the job stops.
    

changelog-mode

The changelog mode for encoding stream changes.

String

No

all

Supported changelog modes:

-   ALL: Supports all types, including INSERT, DELETE, UPDATE\_BEFORE, and UPDATE\_AFTER.
    
-   UPSERT: Supports only the upsert type, which includes INSERT, DELETE, and UPDATE\_AFTER.
    

heartbeat.interval.ms

The interval for sending heartbeat packets.

Duration

No

30s

The unit is milliseconds.

The Postgres CDC connector actively sends heartbeats to the database to advance the slot offset. When table changes are infrequent, setting this value ensures timely reclamation of WAL logs.

scan.incremental.snapshot.chunk.key-column

Specifies a column to be used as the chunk key for splitting shards during the snapshot phase.

STRING

No

None

By default, the first column of the primary key is selected.

scan.incremental.close-idle-reader.enabled

Specifies whether to close idle readers after the snapshot is complete.

Boolean

No

false

To enable this configuration, set `execution.checkpointing.checkpoints-after-tasks-finish.enabled` to true.

scan.incremental.snapshot.backfill.skip

Specifies whether to skip reading logs during the full phase.

Boolean

No

false

Valid values:

-   true: The operation is skipped.
    
    The incremental phase starts reading logs from the low watermark.
    
    If the downstream operator or storage supports idempotence, skipping the log read for the full phase is recommended. This reduces the number of WAL slots but provides only at-least-once semantics.
    
-   false: Do not skip.
    
    During the full phase, logs between the low and high watermarks are read to ensure consistency.
    
    If your SQL involves operations such as aggregations or joins, do not skip reading logs for the full phase.
    

### **Type mapping**

The following table shows the mapping between PostgreSQL and Flink field types.

**PostgreSQL field type**

**Flink field type**

SMALLINT

SMALLINT

INT2

SMALLSERIAL

SERIAL2

INTEGER

INT

SERIAL

BIGINT

BIGINT

BIGSERIAL

REAL

FLOAT

FLOAT4

FLOAT8

DOUBLE

DOUBLE PRECISION

NUMERIC(p, s)

DECIMAL(p, s)

DECIMAL(p, s)

BOOLEAN

BOOLEAN

DATE

DATE

TIME \[(p)\] \[WITHOUT TIMEZONE\]

TIME \[(p)\] \[WITHOUT TIMEZONE\]

TIMESTAMP \[(p)\] \[WITHOUT TIMEZONE\]

TIMESTAMP \[(p)\] \[WITHOUT TIMEZONE\]

CHAR(n)

STRING

CHARACTER(n)

VARCHAR(n)

CHARACTER VARYING(n)

TEXT

BYTEA

BYTES

### **Example**

```
CREATE TABLE source (
  id INT NOT NULL,
  name STRING,
  description STRING,
  weight DECIMAL(10,3)
) WITH (
  'connector' = 'postgres-cdc',
  'hostname' = '<host name>',
  'port' = '<port>',
  'username' = '<user name>',
  'password' = '<password>',
  'database-name' = '<database name>',
  'schema-name' = '<schema name>',
  'table-name' = '<table name>'
);

SELECT * FROM source;
```

## **Data ingestion**

Starting from Realtime Compute for Apache Flink V11.4, you can use the PostgreSQL connector as a data source in a Data Ingestion YAML job.

### **Syntax**

```
source:
  type: postgres
  name: PostgreSQL Source
  hostname: localhost
  port: 5432
  username: pg_username
  password: pg_password
  tables: db.scm.tbl
  slot.name: test_slot
  scan.startup.mode: initial
  server-time-zone: UTC
  connect.timeout: 120s
  decoding.plugin.name: decoderbufs

sink:
  type: ...
```

### **Parameters**

**Parameter**

**Description**

**Required**

**Data type**

**Default**

**Remarks**

type

The data source type.

Yes

STRING

None

The value must be \`postgres\`.

name

The data source name.

No

STRING

None

None.

hostname

The domain name or IP address of the PostgreSQL database server.

Yes

STRING

(none)

None.

port

The port exposed by the PostgreSQL database server.

No

INTEGER

5432

None.

username

The PostgreSQL username.

Yes

STRING

(none)

None.

password

The PostgreSQL password.

Yes

STRING

(none)

None.

tables

The name of the PostgreSQL database tables to capture.

Regular expressions are supported to monitor multiple tables that match the expression.

Yes

STRING

(none)

**Important**

Currently, only tables in the same database can be captured.

A period (.) is treated as a separator for database, schema, and table names. To use a period (.) in a regular expression to match any character, you must escape it with a backslash. For example: `bdb.schema_\.*.order_\.*`.

slot.name

The name of the PostgreSQL replication slot.

Yes

STRING

(none)

The name must comply with PostgreSQL replication slot naming rules and can contain lowercase letters, numbers, and underscores.

decoding.plugin.name

The name of the PostgreSQL logical decoding plugin installed on the server.

No

STRING

`pgoutput`

Optional values include `decoderbufs` and `pgoutput`.

tables.exclude

The name of the PostgreSQL database tables to exclude. This parameter takes effect after the \`tables\` parameter.

No

STRING

(none)

Table names also support regular expressions to exclude multiple tables that match the expression. The usage is the same as the \`tables\` parameter.

server-time-zone

The session time zone of the database server, such as "Asia/Shanghai".

No

STRING

(none)

If not set, the system default time zone (`ZoneId.systemDefault()`) is used.

scan.incremental.snapshot.chunk.size

The size (number of rows) of each chunk in the incremental snapshot framework.

No

INTEGER

8096

When incremental snapshot reading is enabled, the table is split into multiple chunks for reading. The data of a chunk is cached in memory before it is fully read.

A smaller number of rows per chunk results in a larger total number of chunks for the table. Although this reduces the granularity of fault recovery, it may lead to out-of-memory (OOM) errors and lower overall throughput. Therefore, you need to find a balance and set a reasonable chunk size.

scan.snapshot.fetch.size

The maximum number of records to fetch at a time when reading the full data of a table.

No

INTEGER

1024

None.

scan.startup.mode

The startup mode for data consumption.

No

STRING

initial

Valid values:

-   initial (default): Scans the full historical data on the first startup, and then reads the latest binary logging data.
    
-   latest-offset: Does not scan the full historical data on the first startup. It starts reading from the end of the binary log, which means it only reads the latest changes made after the connector starts.
    
-   committed-offset: Does not scan the full historical data. It consumes incremental data from a specified offset.
    
-   snapshot: Consumes only the full historical data and not the incremental data.
    

scan.incremental.close-idle-reader.enabled

Specifies whether to close idle readers after the snapshot is complete.

No

BOOLEAN

false

To enable this configuration, set \`execution.checkpointing.checkpoints-after-tasks-finish.enabled\` to \`true\`.

scan.lsn-commit.checkpoints-num-delay

The number of checkpoints to delay before starting to commit LSN offsets.

No

INTEGER

3

Checkpoint LSN offsets are committed on a rolling basis to prevent the inability to recover from state.

connect.timeout

The maximum time the connector should wait after trying to connect to the PostgreSQL database server before timing out.

No

DURATION

30s

This value cannot be less than 250 milliseconds.

connect.max-retries

The maximum number of times the connector attempts to establish a connection to the PostgreSQL database server.

No

INTEGER

3

None.

connection.pool.size

The connection pool size.

No

INTEGER

20

None.

jdbc.properties.\*

Allows users to pass custom JDBC URL properties.

No

STRING

20

Users can pass custom properties, such as `'jdbc.properties.useSSL' = 'false'`.

heartbeat.interval

The interval for sending heartbeat events to track the latest available WAL log offset.

No

DURATION

30s

None.

debezium.\*

Passes Debezium properties to the Debezium Embedded Engine, which is used to capture data changes from the PostgreSQL server.

No

STRING

(none)

For more information about Debezium PostgreSQL connector properties, see the [relevant documentation](https://debezium.io/documentation/reference/1.9/connectors/postgresql.html).

chunk-meta.group.size

The size of the chunk metadata.

No

STRING

1000

If the metadata is larger than this value, it is passed in multiple parts.

metadata.list

A list of readable metadata passed to the downstream, which can be used in the transform module.

No

STRING

false

Use commas (,) as separators. Currently, the available metadata is: `op_ts`.

scan.incremental.snapshot.unbounded-chunk-first.enabled

Specifies whether to dispatch the unbounded chunk first during the snapshot reading phase.

No

STRING

false

Valid values:

-   true: The unbounded chunk is dispatched first during the snapshot reading phase.
    
-   false (default): The unbounded chunk is not dispatched first during the snapshot reading phase.
    

**Important**

This is an experimental feature. Enabling it can reduce the risk of out-of-memory (OOM) errors when the TaskManager synchronizes the last chunk during the snapshot phase. We recommend adding this before the job's first startup.

## **References**

-   For a list of connectors supported by Realtime Compute for Apache Flink, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors).
    
-   To write data to a PolarDB for PostgreSQL (Oracle Compatible) sink table, see [PolarDB for PostgreSQL (Oracle Compatible)](/help/en/flink/realtime-flink/developer-reference/polardb-for-postgresql-compatible-with-oracle-1-0-connector).
    
-   To read from or write to an RDS for MySQL, PolarDB for MySQL, or self-managed MySQL database, use the [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/) connector.
