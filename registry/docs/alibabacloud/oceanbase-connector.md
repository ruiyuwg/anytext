This topic describes how to use the OceanBase connector.

## Background information

OceanBase is a native, distributed hybrid transactional and analytical processing (HTAP) database management system. For more information, see the [OceanBase official website](https://www.oceanbase.com/). To reduce the cost of modifying business systems during migration from a MySQL or Oracle database, OceanBase supports both Oracle and MySQL compatibility modes. In these modes, the data types, SQL features, and internal views are compatible with those of MySQL or Oracle databases. The recommended connectors for each mode are as follows:

-   Oracle mode: Use only the OceanBase connector.
    
-   MySQL mode: This mode is highly compatible with native MySQL syntax. You can use both the OceanBase and [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/) connectors to read and write data in OceanBase.
    
    **Important**
    
    -   The OceanBase connector is in public preview. For OceanBase 3.2.4.4 and later, you can use the [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/) connector to read and write data in OceanBase. This feature is also in public preview. Evaluate this feature thoroughly and use it with caution.
        
    -   When you use the [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/) connector to read incremental data from OceanBase, you must ensure that OceanBase binary logging (Binlog) is enabled and correctly configured. For more information about OceanBase Binlog, see [Overview](/help/en/apsaradb-for-oceanbase/latest/binlog-overview) or [Binlog-related operations](/help/en/apsaradb-for-oceanbase/latest/binlog-related-operations).
        
    

The OceanBase connector supports the following.

**Category**

**Details**

Supported type

Source, Dimension, and Sink Tables

Runtime mode

Streaming mode and batch mode

Data format

Not applicable

Specific monitoring metrics

None

API type

SQL

Supports updating or deleting data in sink tables

Yes

## Prerequisites

-   The database and tables to which you want to connect have been created.
    
-   An IP address whitelist has been configured. For more information, see [Configure a whitelist group](/help/en/apsaradb-for-oceanbase/latest/whitelist).
    
-   To collect incremental change data capture (CDC) data from OceanBase, you must also enable the [OceanBase Binlog service](/help/en/apsaradb-for-oceanbase/latest/binlog-overview). For more information, see [Binlog-related operations](/help/en/apsaradb-for-oceanbase/latest/binlog-related-operations).
    
-   To use bypass import for a sink table, you must first enable the bypass import port. For more information, see the [bypass import document](/help/en/apsaradb-for-oceanbase/latest/open-bypass-import).
    

## Limits

-   The OceanBase connector is supported in Ververica Runtime (VVR) 8.0.1 and later.
    
-   Semantic guarantees
    
    -   CDC source tables support exactly-once semantics. This ensures that data is not lost or duplicated when you read full historical data and then switch to reading Binlog data. Even if a fault occurs, these semantics guarantee the correctness of data processing.
        
    -   Sink tables support at-least-once semantics. If a sink table has a primary key, idempotence ensures data correctness.
        

## Syntax

```
CREATE TABLE oceanbase_source (
   order_id INT,
   order_date TIMESTAMP(0),
   customer_name STRING,
   price DECIMAL(10, 5),
   product_id INT,
   order_status BOOLEAN,
   PRIMARY KEY(order_id) NOT ENFORCED
) WITH (
  'connector' = 'oceanbase',
  'url' = '<yourJdbcUrl>',
  'tableName' = '<yourTableName>',
  'userName' = '<yourUserName>',
  'password' = '<yourPassword>'
);
```

**Note**

When writing to a sink table, the connector constructs and executes an SQL statement for each received data record. The type of SQL statement that is constructed depends on the following conditions:

-   If a sink table does not have a primary key, an INSERT INTO statement is constructed.
    
-   If a sink table has a primary key, an UPSERT statement is constructed based on the database compatibility mode.
    

## WITH parameters

-   General
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Data type**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The type of the table.
    
    Yes
    
    STRING
    
    None
    
    The static field is set to `oceanbase`.
    
    password
    
    The password.
    
    Yes
    
    STRING
    
    None
    
    None.
    
-   This applies only to source tables.
    
    **Important**
    
    Starting from Realtime Compute for Apache Flink VVR 11.4.0, the architecture and features of the OceanBase CDC connector have been upgraded. The following key changes can help you understand the updates and smoothly migrate versions:
    
    -   The original CDC connector, which was based on the OceanBase LogProxy service, is deprecated and has been removed from the distribution. Starting from VVR 11.4.0, the OceanBase CDC connector supports incremental log capture and data synchronization only through the [OceanBase Binlog service](/help/en/apsaradb-for-oceanbase/latest/binlog-overview).
        
    -   The OceanBase CDC connector provides enhanced protocol compatibility and connection stability with the OceanBase Binlog service. We recommend that you prioritize using the OceanBase CDC connector.
        
        The [OceanBase Binlog service](/help/en/apsaradb-for-oceanbase/latest/binlog-overview) is fully compatible with the MySQL replication protocol at the protocol layer. You can also connect the standard [MySQL CDC](/help/en/flink/realtime-flink/developer-reference/mysql-connector/) connector to the [OceanBase Binlog service](/help/en/apsaradb-for-oceanbase/latest/binlog-overview) for change tracking, but this is not recommended.
        
    -   Starting from Realtime Compute for Apache Flink VVR 11.4.0, the OceanBase CDC connector no longer supports incremental change tracking in Oracle compatibility mode. For incremental change tracking in Oracle compatibility mode, you can contact OceanBase Enterprise Technical Support.
        
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Data type**
    
    **Default value**
    
    **Remarks**
    
    hostname
    
    The IP address or hostname of the OceanBase database.
    
    Yes
    
    STRING
    
    No
    
    We recommend that you specify a virtual private cloud (VPC) address.
    
    **Note**
    
    If OceanBase and Realtime Compute for Apache Flink are not in the same VPC, you must establish a cross-VPC network connection or use a public endpoint for access. For more information, see [Workspace management and operations](/help/en/flink/realtime-flink/support/reference#section-b0b-5qz-thz) and [How can a fully managed Flink cluster access the Internet?](/help/en/flink/realtime-flink/support/reference#section-zjs-qq7-k4j).
    
    username
    
    The username for the OceanBase database service.
    
    Yes
    
    STRING
    
    No
    
    None.
    
    database-name
    
    The name of the OceanBase database.
    
    Yes
    
    STRING
    
    None
    
    -   When used as a source table, the database name supports regular expressions to read data from multiple databases.
        
    -   When you use a regular expression, avoid using the ^ and $ characters to match the beginning and end. For more information, see the remarks for the table-name parameter.
        
    
    table-name
    
    The name of the OceanBase table.
    
    Yes
    
    STRING
    
    None
    
    -   When used as a source table, the table name supports regular expressions to read data from multiple tables.
        
    -   When you use a regular expression, avoid using the ^ and $ characters to match the beginning and end. For more information, see the following note.
        
    
    **Note**
    
    When matching table names, the OceanBase source table connector concatenates the database-name and table-name that you specify with a \\\\. string (a . character is used for VVR versions earlier than 8.0.1) to form a regular expression for the full path. This regular expression is then used to match the fully qualified names of tables in the OceanBase database.
    
    For example, if you set 'database-name' to 'db\_.\*' and 'table-name' to 'tb\_.+', the connector uses the regular expression db\_.\*\\\\.tb\_.+ (or db\_.\*.tb\_.+ for versions earlier than 8.0.1) to match the fully qualified table names and determine which tables to read.
    
    port
    
    The port number of the OceanBase database service.
    
    No
    
    INTEGER
    
    3306
    
    None.
    
    server-id
    
    A numeric ID for the database client.
    
    No
    
    STRING
    
    A random value between 5400 and 6400 is generated.
    
    This ID must be globally unique. We recommend that you set a different ID for each job that connects to the same database.
    
    This parameter also supports an ID range, such as 5400-5408. When incremental reading is enabled, we recommend that you specify an ID range to allow each concurrent reader to use a different ID. For more information, see [Server ID usage](/help/en/flink/realtime-flink/developer-reference/mysql-connector/#d3892d6083cqd).
    
    scan.incremental.snapshot.chunk.size
    
    The size of each chunk in number of rows.
    
    No
    
    INTEGER
    
    8096
    
    When incremental snapshot reading is enabled, the table is split into multiple chunks for reading. Before the data in a chunk is fully read, it is buffered in memory.
    
    A smaller number of rows per chunk results in a larger total number of chunks for the table. This provides finer-grained fault recovery but may lead to out-of-memory (OOM) errors and lower overall throughput. Therefore, you must find a balance and set a reasonable chunk size.
    
    scan.snapshot.fetch.size
    
    The maximum number of records to pull at a time when reading the full data of a table.
    
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
    
    -   initial (default): Scans all historical data and then reads the latest Binlog data on the first startup.
        
    -   latest-offset: Does not scan historical data on the first startup. It starts reading from the end of the Binlog, which means it reads only the latest changes made after the connector starts.
        
    -   earliest-offset: Does not scan historical data. It starts reading from the earliest available Binlog.
        
    -   specific-offset: Does not scan historical data. It starts from a specific Binlog offset that you specify. You can specify the offset by setting both the scan.startup.specific-offset.file and scan.startup.specific-offset.pos parameters, or by setting only the scan.startup.specific-offset.gtid-set parameter to start from a specific GTID set.
        
    -   timestamp: Does not scan historical data. It starts reading the Binlog from a specified timestamp. The timestamp is specified by the scan.startup.timestamp-millis parameter in milliseconds.
        
    
    **Important**
    
    If you use the earliest-offset, specific-offset, or timestamp startup mode, make sure that the schema of the corresponding table does not change between the specified Binlog consumption position and the job startup time. This prevents errors caused by schema differences.
    
    scan.startup.specific-offset.file
    
    The Binlog filename for the start offset when using the specific offset startup mode.
    
    No
    
    STRING
    
    None
    
    To use this parameter, you must set scan.startup.mode to specific-offset. Example filename format: `mysql-bin.000003`.
    
    scan.startup.specific-offset.pos
    
    The offset within the specified Binlog file for the start offset when using the specific offset startup mode.
    
    No
    
    INTEGER
    
    None
    
    To use this parameter, you must set scan.startup.mode to specific-offset.
    
    scan.startup.specific-offset.gtid-set
    
    The GTID set for the start offset when using the specific offset startup mode.
    
    No
    
    STRING
    
    None
    
    To use this parameter, you must set scan.startup.mode to specific-offset. Example GTID set format: `24DA167-0C0C-11E8-8442-00059A3C7B00:1-19`.
    
    scan.startup.timestamp-millis
    
    The timestamp in milliseconds for the start offset when using the timestamp startup mode.
    
    No
    
    LONG
    
    None
    
    To use this parameter, you must set scan.startup.mode to timestamp. The unit is milliseconds.
    
    **Important**
    
    When you specify a time, OceanBase CDC attempts to read the initial event of each Binlog file to determine its timestamp and locate the Binlog file corresponding to the specified time. Make sure that the Binlog file for the specified timestamp has not been cleared from the database and can be read.
    
    server-time-zone
    
    The session time zone used by the database.
    
    No
    
    STRING
    
    If you do not specify this parameter, the system uses the time zone of the Flink job runtime environment as the database server time zone. This is the time zone of the zone that you selected.
    
    Example: Asia/Shanghai. This parameter controls how TIMESTAMP types are converted to STRING types. For more information, see [Debezium temporal types](https://debezium.io/documentation/reference/2.6/connectors/mysql.html#_temporal_values).
    
    debezium.min.row.count.to.stream.results
    
    When the number of rows in a table exceeds this value, batch reading mode is used.
    
    No
    
    INTEGER
    
    1000
    
    Flink reads data from an OceanBase source table in one of the following ways:
    
    -   Full read: Reads the entire table's data directly into memory. This method is fast but consumes a corresponding amount of memory. If the source table is very large, it may cause an OOM error.
        
    -   Batch read: Reads data in multiple batches, with a certain number of rows per batch, until all data is read. This method avoids OOM errors when reading large tables but is relatively slower.
        
    
    connect.timeout
    
    The maximum time to wait before retrying a connection when a connection to the OceanBase database server times out.
    
    No
    
    DURATION
    
    30s
    
    None.
    
    connect.max-retries
    
    The maximum number of retries after a failed connection to the OceanBase database service.
    
    No
    
    INTEGER
    
    3
    
    None.
    
    connection.pool.size
    
    The size of the database connection pool.
    
    No
    
    INTEGER
    
    20
    
    The database connection pool is used to reuse connections, which can reduce the number of database connections.
    
    jdbc.properties.\*
    
    Custom connection parameters in the JDBC URL.
    
    No
    
    STRING
    
    None
    
    You can pass custom connection parameters. For example, to not use the SSL protocol, you can configure 'jdbc.properties.useSSL' = 'false'.
    
    For more information about supported connection parameters, see [MySQL Configuration Properties](https://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html).
    
    debezium.\*
    
    Custom parameters for Debezium to read Binlog data.
    
    No
    
    STRING
    
    None
    
    You can pass custom Debezium parameters. For example, use 'debezium.event.deserialization.failure.handling.mode'='ignore' to specify the handling logic for parsing errors.
    
    heartbeat.interval
    
    The time interval at which the source uses heartbeat events to advance the Binlog offset.
    
    No
    
    DURATION
    
    30s
    
    Heartbeat events are used to advance the Binlog offset in the source, which is useful for tables in OceanBase that are updated infrequently. For such tables, the Binlog offset does not advance automatically. Heartbeat events can push the Binlog offset forward, preventing it from expiring. An expired Binlog offset causes the job to fail and makes it unrecoverable, requiring a stateless restart.
    
    scan.incremental.snapshot.chunk.key-column
    
    Specifies a column to be used as the chunk key for splitting chunks during the snapshot phase.
    
    See the Remarks column.
    
    STRING
    
    None
    
    -   This parameter is required for tables without a primary key. The selected column must be of a non-null type (NOT NULL).
        
    -   This parameter is optional for tables with a primary key. You can select only one column from the primary key.
        
    
    scan.incremental.close-idle-reader.enabled
    
    Specifies whether to close idle readers after the snapshot is complete.
    
    No
    
    BOOLEAN
    
    false
    
    -   Supported only in Realtime Compute for Apache Flink VVR 8.0.1 and later.
        
    -   For this configuration to take effect, set execution.checkpointing.checkpoints-after-tasks-finish.enabled to true.
        
    
    scan.read-changelog-as-append-only.enabled
    
    Specifies whether to convert the changelog stream to an append-only stream.
    
    No
    
    BOOLEAN
    
    false
    
    Valid values:
    
    -   true: All types of messages, including INSERT, DELETE, UPDATE\_BEFORE, and UPDATE\_AFTER, are converted to INSERT messages. Enable this only in special scenarios, such as when you need to save delete messages from an ancestor table.
        
    -   false (default): All types of messages are sent downstream as they are.
        
    
    **Note**
    
    Supported only in Realtime Compute for Apache Flink VVR 8.0.8 and later.
    
    scan.only.deserialize.captured.tables.changelog.enabled
    
    During the incremental phase, specifies whether to deserialize change events only for the specified tables.
    
    No
    
    BOOLEAN
    
    -   The default value is false in VVR 8.x versions.
        
    -   The default value is true in VVR 11.1 and later versions.
        
    
    Valid values:
    
    -   true: Deserializes change data only for the target tables, which speeds up Binlog reading.
        
    -   false (default): Deserializes change data for all tables.
        
    
    **Note**
    
    -   Supported only in Realtime Compute for Apache Flink VVR 8.0.7 and later.
        
    -   When used in Realtime Compute for Apache Flink VVR 8.0.8 and earlier, the parameter name must be changed to debezium.scan.only.deserialize.captured.tables.changelog.enable.
        
    
    scan.parse.online.schema.changes.enabled
    
    During the incremental phase, specifies whether to attempt to parse DDL events for ApsaraDB RDS lockless changes.
    
    No
    
    BOOLEAN
    
    false
    
    Valid values:
    
    -   true: Parses DDL events for ApsaraDB RDS lockless changes.
        
    -   false (default): Does not parse DDL events for ApsaraDB RDS lockless changes.
        
    
    This is an experimental feature. We recommend that you take a snapshot of the Flink job for recovery before performing an online lockless change.
    
    **Note**
    
    Supported only in Realtime Compute for Apache Flink VVR 11.1 and later.
    
    scan.incremental.snapshot.backfill.skip
    
    Specifies whether to skip backfill during the snapshot reading phase.
    
    No
    
    BOOLEAN
    
    false
    
    Valid values:
    
    -   true: Skips backfill during the snapshot reading phase.
        
    -   false (default): Does not skip backfill during the snapshot reading phase.
        
    
    If you skip backfill, changes to the table during the snapshot phase are read in the later incremental phase instead of being merged into the snapshot.
    
    **Important**
    
    Skipping backfill may cause data inconsistency because changes that occur during the snapshot phase might be replayed. Only at-least-once semantics are guaranteed.
    
    **Note**
    
    Supported only in Realtime Compute for Apache Flink VVR 11.1 and later.
    
    scan.incremental.snapshot.unbounded-chunk-first.enabled
    
    During the snapshot reading phase, specifies whether to distribute the unbounded chunk first.
    
    No
    
    BOOLEAN
    
    false
    
    Valid values:
    
    -   true: Distributes the unbounded chunk first during the snapshot reading phase.
        
    -   false (default): Does not distribute the unbounded chunk first during the snapshot reading phase.
        
    
    This is an experimental feature. Enabling it can reduce the risk of OOM errors when a TaskManager synchronizes the last chunk during the snapshot phase. We recommend that you add this parameter before the job starts for the first time.
    
    **Note**
    
    Supported only in Realtime Compute for Apache Flink VVR 11.1 and later.
    
-   For dimension tables only
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Data type**
    
    **Default value**
    
    **Remarks**
    
    url
    
    The JDBC URL.
    
    Yes
    
    STRING
    
    None
    
    -   The URL must contain the MySQL database name or the Oracle service name.
        
    
    userName
    
    The username.
    
    Yes
    
    STRING
    
    None
    
    None.
    
    cache
    
    The cache policy.
    
    No
    
    STRING
    
    ALL
    
    The following three cache policies are supported:
    
    -   ALL: Caches all data from the dimension table. Before the job runs, the system loads all data from the dimension table into the cache. All subsequent lookups for dimension table data are performed through the cache. If data is not found in the cache, the key does not exist. The full cache is reloaded after it expires.
        
        This policy is suitable for scenarios where the remote table is small and there are many miss keys (the ON condition cannot be associated when joining the source table and the dimension table).
        
    -   LRU: Caches a portion of the data from the dimension table. For each record from the source table, the system first looks for data in the cache. If not found, it looks in the physical dimension table. If you use this cache policy, you must configure the cacheSize parameter.
        
    -   None: No cache.
        
    
    **Important**
    
    -   If you use the ALL cache policy, pay attention to the node memory size to prevent OOM errors.
        
    -   Because the system loads dimension table data asynchronously, if you use the ALL cache policy, you must increase the memory of the dimension table join node. The increased memory size should be twice the size of the remote table data.
        
    
    cacheSize
    
    The maximum number of cached entries.
    
    No
    
    INTEGER
    
    100000
    
    -   If you select the LRU cache policy, you must set the cache size.
        
    -   If you select the ALL cache policy, you do not need to set the cache size.
        
    
    cacheTTLMs
    
    The cache timeout period.
    
    No
    
    LONG
    
    Long.MAX\_VALUE
    
    The configuration of cacheTTLMs depends on the cache parameter:
    
    -   If cache is set to None, you do not need to configure cacheTTLMs. This means the cache does not time out.
        
    -   If cache is set to LRU, cacheTTLMs is the cache timeout period. By default, the cache does not expire.
        
    -   If cache is set to ALL, cacheTTLMs is the cache reload time. By default, the cache is not reloaded.
        
    
    maxRetryTimeout
    
    The maximum retry time.
    
    No
    
    DURATION
    
    60s
    
    None.
    
-   Sink table: JDBC only
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Data type**
    
    **Default value**
    
    **Remarks**
    
    userName
    
    The username.
    
    Yes
    
    STRING
    
    None
    
    None.
    
    compatibleMode
    
    The compatibility mode of OceanBase.
    
    No
    
    STRING
    
    mysql
    
    Valid values:
    
    -   mysql
        
    -   oracle
        
    
    **Note**
    
    This is an OceanBase-specific parameter.
    
    url
    
    The JDBC URL.
    
    Yes
    
    STRING
    
    None
    
    -   The URL must contain the MySQL database name or the Oracle service name.
        
    
    tableName
    
    The table name.
    
    Yes
    
    STRING
    
    None
    
    None.
    
    sink.mode
    
    The write mode for the OceanBase sink table.
    
    Yes
    
    STRING
    
    jdbc
    
    Supports `jdbc` and `direct-load`.
    
    maxRetryTimes
    
    The maximum number of retries.
    
    No
    
    INTEGER
    
    3
    
    None.
    
    poolInitialSize
    
    The initial size of the database connection pool.
    
    No
    
    INTEGER
    
    1
    
    None.
    
    poolMaxActive
    
    The maximum number of connections in the database connection pool.
    
    No
    
    INTEGER
    
    8
    
    None.
    
    poolMaxWait
    
    The maximum time to wait for a connection from the database connection pool.
    
    No
    
    INTEGER
    
    2000
    
    The unit is milliseconds.
    
    poolMinIdle
    
    The minimum number of idle connections in the database connection pool.
    
    No
    
    INTEGER
    
    1
    
    None.
    
    connectionProperties
    
    The connection properties for JDBC.
    
    No
    
    STRING
    
    None
    
    The format is "k1=v1;k2=v2;k3=v3".
    
    ignoreDelete
    
    Specifies whether to ignore data delete operations.
    
    No
    
    Boolean
    
    false
    
    None.
    
    excludeUpdateColumns
    
    Specifies the names of columns to exclude. These columns are not updated during update operations.
    
    No
    
    STRING
    
    None
    
    If you specify multiple columns, separate them with commas (,), for example, `excludeUpdateColumns=column1,column2`.
    
    **Note**
    
    This value always includes the primary key columns. The columns that take effect are the ones you specify plus the primary key columns.
    
    partitionKey
    
    The partition key.
    
    No
    
    STRING
    
    None
    
    When a partition key is set, the connector first groups the data by the partition key, and each group is written to the database separately. This grouping occurs before the modRule processing.
    
    modRule
    
    The grouping rule.
    
    No
    
    STRING
    
    None
    
    The grouping rule format must be "column\_name mod number", such as `user_id mod 8`. The column type must be numeric.
    
    When a grouping rule is set, data is first partitioned by partitionKey. Within each partition, it is then grouped based on the result of the modRule calculation.
    
    bufferSize
    
    The size of the data buffer.
    
    No
    
    INTEGER
    
    1000
    
    None.
    
    flushIntervalMs
    
    The time interval for flushing the cache. If the data in the cache does not meet the output conditions after waiting for the specified time, the system automatically outputs all data in the cache.
    
    No
    
    LONG
    
    1000
    
    None.
    
    retryIntervalMs
    
    The maximum retry time.
    
    No
    
    INTEGER
    
    5000
    
    The unit is milliseconds.
    

-   For bypass import into sink tables only
    

**Important**

-   Bypass import for sink tables is available in Ververica Runtime (VVR) 11.5 and later. For more information about bypass import, see [the document](/help/en/apsaradb-for-oceanbase/latest/open-bypass-import).
    
-   **Supports only bounded streams**: The data source must be a bounded stream. Unbounded streams are not supported. You can use Flink Batch mode for better performance.
    
-   **High-throughput writes**: This method is suitable for large-batch data import scenarios.
    
-   **Table locking during import**: A bypass import locks the target table. While the table is locked, change data writes and DDL changes are blocked. Data queries are not affected.
    
-   **Not for real-time writes**: For real-time or stream writing scenarios, use the Java Database Connectivity (JDBC) sink table.
    

**Parameter**

**Description**

**Required**

**Data type**

**Default value**

**Remarks**

sink.mode

The method for writing data to the OceanBase sink table.

No

STRING

jdbc

Supports \`jdbc\` and \`direct-load\` modes. To write data to the OceanBase sink table using bypass import, set this parameter to the static field \`direct-load\`.

host

The IP address or hostname of the OceanBase database.

Yes

STRING

None

None.

port

The RPC port of the OceanBase database.

No

INTEGER

2882

None.

username

The username.

Yes

STRING

None

None.

tenant-name

The tenant name of the OceanBase database.

Yes

STRING

None

schema-name

-   For a MySQL tenant, enter the database name.
    
-   For an Oracle tenant, enter the owner name.
    

Yes

STRING

None

None.

table-name

The name of the OceanBase table.

Yes

STRING

None

None.

parallel

The server-side concurrency of the bypass import task.

No

INTEGER

8

-   This parameter defines the server-side CPU resources for the import task and is independent of client concurrency. The server limits the maximum degree of parallelism based on the tenant's CPU specifications without returning an error. The actual degree of parallelism is determined by the tenant's CPU specifications and the table's partition distribution.
    
-   For example, if a tenant has 2 CPU cores and the degree of parallelism is set to 10, the actual degree of parallelism is 4, calculated as MIN(2 cores \* 2, 10).
    
-   If the table partitions are distributed across 2 nodes, the total actual degree of parallelism is MIN(2 cores \* 2, 10) \* 2 = 8.
    

buffer-size

The buffer size for writing to OceanBase in a bypass import task.

No

INTEGER

1024

Flink caches the number of data records specified by `buffer-size` and then writes them to OceanBase in a single operation.

dup-action

The policy for handling duplicate primary keys during a bypass import task. Valid values are `STOP_ON_DUP` (the import fails), `REPLACE` (the existing row is replaced), or `IGNORE` (the new row is ignored).

No

STRING

REPLACE

-   STOP\_ON\_DUP: The import fails.
    
-   REPLACE: The imported row replaces the existing row.
    
-   IGNORE: The imported row is discarded, and the existing row is kept.
    

load-method

The bypass import mode.

full

-   `full`: Full bypass import. This is the default value.
    
-   `inc`: Incremental bypass import. This mode checks for primary key conflicts. Supported in observer 4.3.2 and later. Setting \`direct-load.dup-action\` to \`REPLACE\` is not supported.
    
-   `inc_replace`: Incremental bypass import in replace mode. This mode does not check for primary key conflicts and directly overwrites old data, which has the same effect as \`REPLACE\`. The \`direct-load.dup-action\` parameter is ignored. Supported in observer 4.3.2 and later.
    

max-error-rows

The maximum number of error rows that a bypass import task can tolerate.

No

LONG

0

A row is considered an error row in the following cases:

-   Rows with duplicate primary keys when \`dupAction\` is set to \`STOP\_ON\_DUP\`.
    
-   Rows with a mismatched number of columns (too many or too few).
    
-   Rows where data type conversion fails.
    

timeout

The overall timeout duration for the bypass import task.

No

DURATION

7d

heartbeat-timeout

The client-side heartbeat timeout for the bypass import task.

No

DURATION

60s

heartbeat-interval

The client-side heartbeat interval for the bypass import task.

No

DURATION

10s

## Type mapping

-   MySQL-compatible mode
    
    **OceanBase field type**
    
    **Flink field type**
    
    TINYINT
    
    TINYINT
    
    SMALLINT
    
    SMALLINT
    
    TINYINT UNSIGNED
    
    INT
    
    INT
    
    MEDIUMINT
    
    SMALLINT UNSIGNED
    
    BIGINT
    
    BIGINT
    
    INT UNSIGNED
    
    BIGINT UNSIGNED
    
    DECIMAL(20, 0)
    
    REAL
    
    FLOAT
    
    FLOAT
    
    DOUBLE
    
    DOUBLE
    
    NUMERIC(p, s)
    
    DECIMAL(p, s)
    
    **Note**
    
    where p <= 38.
    
    DECIMAL(p, s)
    
    BOOLEAN
    
    BOOLEAN
    
    TINYINT(1)
    
    DATE
    
    DATE
    
    TIME \[(p)\]
    
    TIME \[(p)\] \[WITHOUT TIME ZONE\]
    
    DATETIME \[(p)\]
    
    TIMESTAMP \[(p)\] \[WITHOUT TIME ZONE\]
    
    TIMESTAMP \[(p)\]
    
    CHAR(n)
    
    CHAR(n)
    
    VARCHAR(n)
    
    VARCHAR(n)
    
    BIT(n)
    
    BINARY(⌈n/8⌉)
    
    BINARY(n)
    
    BINARY(n)
    
    VARBINARY(N)
    
    VARBINARY(N)
    
    TINYTEXT
    
    STRING
    
    TEXT
    
    MEDIUMTEXT
    
    LONGTEXT
    
    TINYBLOB
    
    BYTES
    
    **Important**
    
    Flink supports BLOB records with a size of 2,147,483,647 (2^31 - 1) bytes or less.
    
    BLOB
    
    MEDIUMBLOB
    
    LONGBLOB
    
-   Oracle-compatible mode
    
    **OceanBase field type**
    
    **Flink field type**
    
    NUMBER(p, s <= 0), p - s < 3
    
    TINYINT
    
    NUMBER(p, s <= 0), p - s < 5
    
    SMALLINT
    
    NUMBER(p, s <= 0), p - s < 10
    
    INT
    
    NUMBER(p, s <= 0), p - s < 19
    
    BIGINT
    
    NUMBER(p, s <= 0), 19 <= p - s <= 38
    
    DECIMAL(p - s, 0)
    
    NUMBER(p, s > 0)
    
    DECIMAL(p, s)
    
    NUMBER(p, s <= 0), p - s > 38
    
    STRING
    
    FLOAT
    
    FLOAT
    
    BINARY\_FLOAT
    
    BINARY\_DOUBLE
    
    DOUBLE
    
    NUMBER(1)
    
    BOOLEAN
    
    DATE
    
    TIMESTAMP \[(p)\] \[WITHOUT TIME ZONE\]
    
    TIMESTAMP \[(p)\]
    
    CHAR(n)
    
    STRING
    
    NCHAR(n)
    
    NVARCHAR2(n)
    
    VARCHAR(n)
    
    VARCHAR2(n)
    
    CLOB
    
    BLOB
    
    BYTES
    
    ROWID
    

## Usage examples

-   Source table and sink table
    
    ```
    -- OceanBase CDC source table
    CREATE TEMPORARY TABLE oceanbase_source (
      a INT,
      b VARCHAR,
      c VARCHAR
    ) WITH (
      'connector' = 'oceanbase',
      'hostname' = '<yourHostname>',
      'port' = '3306',
      'username' = '<yourUsername>',
      'password' = '<yourPassword>',
      'database-name' = '<yourDatabaseName>',
      'table-name' = '<yourTableName>'
    );
    
    -- OceanBase JDBC sink table
    CREATE TEMPORARY TABLE oceanbase_sink (
      a INT,
      b VARCHAR,
      c VARCHAR
    ) WITH (
      'connector' = 'oceanbase',
      'url' = '<yourJdbcUrl>',
      'userName' = '<yourUserName>',
      'password' = '<yourPassword>',
      'tableName' = '<yourTableName>'
    );
    
    -- OceanBase direct load sink table
    CREATE TEMPORARY TABLE oceanbase_directload_sink (
      a INT,
      b VARCHAR,
      c VARCHAR
    ) WITH (
      'connector' = 'oceanbase',
      'sink.mode' = 'direct-load',
      'host' = '<yourHost>',
      'port' = 'yourPort',
      'tenant-name' = '<yourTenantName>',
      'schema-name' = '<yourSchemaName>',
      'table-name' = '<yourTableName>',
      'username' = '<yourUsername>',
      'password' = '<yourPassword>'
    );
    
    
    BEGIN STATEMENT SET;  
    INSERT INTO oceanbase_sink
    SELECT * FROM oceanbase_source;
    END; 
    ```
    
-   Dimension table
    
    ```
    CREATE TEMPORARY TABLE datagen_source(
      a INT,
      b BIGINT,
      c STRING,
      `proctime` AS PROCTIME()
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE oceanbase_dim (
      a INT,
      b VARCHAR,
      c VARCHAR
    ) WITH (
      'connector' = 'oceanbase',
      'url' = '<yourJdbcUrl>',
      'userName' = '<yourUserName>',
      'password' = '${secret_values.password}',
      'tableName' = '<yourTableName>'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink(
      a INT,
      b STRING
    ) WITH (
      'connector' = 'blackhole'
    );
    
    INSERT INTO blackhole_sink
    SELECT T.a, H.b
    FROM datagen_source AS T 
    JOIN oceanbase_dim FOR SYSTEM_TIME AS OF T.`proctime` AS H 
    ON T.a = H.a;
    ```
    

## **References**

For a list of connectors supported by Flink, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors).
