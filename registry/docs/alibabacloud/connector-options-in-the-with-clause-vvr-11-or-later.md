This topic describes the WITH parameters for the Hologres connector in Ververica Runtime (VVR) 11 and later.

## Version parameter removal

To optimize the system architecture and improve maintenance efficiency, some legacy parameters in Ververica Runtime (VVR) versions 8 and earlier have been adjusted or removed. The following lists detail the removed legacy parameters and their corresponding replacements.

**Removed parameters**

**Original parameter**

**Description**

**Alternative/Removal reason**

jdbcRetrySleepInitMs

The fixed wait time for each retry.

You can use `retry-sleep-step-ms` to set an incremental wait time.

jdbcMetaAutoRefreshFactor

The system automatically refreshes the cache when the remaining cache time is less than the trigger time.

This parameter is no longer required. You can configure the `meta-cache-ttl-ms` parameter to set the cache TTL.

type-mapping.timestamp-converting.legacy

Specifies whether to convert time types between Flink and Hologres.

This parameter was introduced for backward compatibility to support the TIMESTAMP\_LTZ type. It is no longer required.

property-version

The version of the connector parameters.

This parameter is removed because the default values of common parameters have been optimized.

field\_delimiter

The separator used between rows when you export data.

This parameter is removed because the data reading method has been optimized.

jdbcBinlogSlotName

The slot name of the binary logging source table in JDBC mode.

This parameter is removed because the data reading method has been optimized.

binlogMaxRetryTimes

The number of retries when an error occurs while reading binary logging data.

You can configure this by setting the `retry-count` parameter.

cdcMode

Specifies whether to use CDC mode to read binary logging data.

This parameter is removed because CDC mode is used by default. For non-CDC mode, use the `source.binlog.change-log-mode` parameter.

upsertSource

Specifies whether the source table uses the upsert changelog type.

You can use the `source.binlog.change-log-mode` parameter for configuration.

bulkload

Specifies whether to use bulk load for writes.

You can set the `sink.write-mode` parameter.

useRpcMode

Specifies whether to use the Hologres connector over RPC.

For JDBC connections, we recommend configuring the `sink.deduplication.enabled` parameter to enable or disable deduplication.

partitionrouter

Specifies whether to write to a partitioned table.

This parameter is removed because writing to partitioned tables is supported by default.

ignoredelete

Specifies whether to ignore retraction messages.

Configure the `sink.delete-strategy` parameter to specify the policy for processing revoked messages.

sdkMode

The SDK mode.

This parameter has been optimized. Configure the `source.binlog.read-mode` and `sink.write-mode` parameters based on the table type.

jdbcReadBatchQueueSize

The size of the buffer queue for dimension table point query requests.

If you experience poor point query performance, you can configure the `connection.pool.size` parameter.

jdbcReadRetryCount

The number of retries when a dimension table point query times out.

All configuration items for the general retry mechanism are consolidated into the `retry-count` parameter.

jdbcScanTransactionSessionTimeoutSeconds

The timeout period for the transaction of a scan operation.

This parameter is merged into the general scan timeout parameter `source.scan.timeout-seconds`.

**Renamed parameters**

**Original parameter (VVR 8)**

**VVR 11**

**Description**

jdbcRetryCount

retry-count

The number of retries for writes and queries when a connection fails.

jdbcRetrySleepStepMs

retry-sleep-step-ms

The incremental wait time for each retry.

jdbcConnectionMaxIdleMs

connection.max-idle-ms

The idle timeout for a JDBC connection.

jdbcMetaCacheTTL

meta-cache-ttl-ms

The time-to-live (TTL) for the cached TableSchema information.

binlog

source.binlog

Specifies whether to consume binary logging data.

sdkMode

source.binlog.read-mode

The read mode.

binlogRetryIntervalMs

source.binlog.request-timeout-ms

The retry interval after an error occurs when reading binary logging data.

binlogBatchReadSize

source.binlog.batch-size

The number of rows for batch reading of binary logging data.

binlogStartupMode

source.binlog.startup-mode

The consumption mode for binary logging data.

jdbcScanFetchSize

source.scan.fetch-size

The batch size for scans.

jdbcScanTimeoutSeconds

source.scan.timeout-seconds

The timeout for scan operations.

enable\_filter\_push\_down

source.scan.filter-push-down.enabled

Specifies whether to push down filters during the full data read phase.

partition-binlog.mode

source.binlog.partition-binlog-mode

The consumption mode for binary logging of partitioned tables.

partition-binlog-lateness-timeout-minutes

source.binlog.partition-binlog-lateness-timeout-minutes

The maximum lateness timeout when consuming a partitioned table in DYNAMIC mode.

partition-values-to-read

source.binlog.partition-values-to-read

In STATIC mode, specifies the partitions to consume. Separate partition values with commas (,).

sdkMode

sink.write-mode

The write mode.

mutatetype

sink.on-conflict-action

The policy for handling primary key conflicts.

createparttable

sink.create-missing-partition

Specifies whether to automatically create a partition if it does not exist when writing to a partitioned table.

jdbcWriteBatchSize

sink.insert.batch-size

The maximum number of records to buffer in the Hologres sink before writing.

jdbcWriteBatchByteSize

sink.insert.batch-byte-size

The maximum size in bytes of records to buffer in the Hologres sink before writing.

jdbcWriteFlushInterval

sink.insert.flush-interval-ms

The maximum wait time before buffered data is written from the Hologres sink to Hologres.

ignoreNullWhenUpdate

sink.ignore-null-when-update.enabled

When mutatetype is 'insertOrUpdate', specifies whether to ignore null values in the updated data.

jdbcEnableDefaultForNotNullColumn

sink.default-for-not-null-column.enabled

Specifies whether to allow the connector to fill in a default value when a null value is written to a NOT NULL column that has no default value.

remove-u0000-in-text.enabled

sink.remove-u0000-in-text.enabled

Specifies whether to allow the connector to remove the invalid character \\u0000 from strings during writes.

partial-insert.enabled

sink.partial-insert.enabled

Specifies whether to insert only the fields defined in the INSERT statement.

deduplication.enabled

sink.deduplication.enabled

Specifies whether to remove duplicates during batch writing.

check-and-put.column

sink.insert.check-and-put.column

Enables conditional updates and specifies the field to check.

check-and-put.operator

sink.insert.check-and-put.operator

The comparison operator for conditional updates.

check-and-put.null-as

sink.insert.check-and-put.null-as

During a conditional update, treats a null value in the old data as the value specified by this parameter.

aggressive.enabled

sink.aggressive-flush.enabled

Specifies whether to enable aggressive commit mode.

connectionSize

connection.pool.size

The size of the JDBC connection pool created for a single Flink dimension table task.

connectionPoolName

connection.pool.name

The name of the connection pool. Tables with the same connection pool name in the same TaskManager can share the connection pool.

jdbcReadBatchSize

lookup.read.batch-size

The maximum number of records in a batch for dimension table point queries.

jdbcReadTimeoutMs

lookup.read.timeout-ms

The timeout for dimension table point queries.

## WITH parameters

### **General**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

connector

Table type.

String

Yes

None

Set this parameter to `hologres`.

dbname

The database name.

String

Yes

None

You can connect to a specific compute group by adding a suffix to the \`dbname\` parameter. For example, to connect a dimension table to a specific compute group named \`read\_warehouse\`, specify the connection as `'dbname' = 'db_test@read_warehouse'` .

tablename

The table name.

String

Yes

None

If the schema is not Public, specify the table name in the `schema.tableName` format.

username

-   The username of a custom account in the `BASIC$<user_name>` format.
    
-   The AccessKey ID of an Alibaba Cloud account or a RAM user.
    

String

Yes

None

-   The user must have permissions to access the specified Hologres database. For more information about database permissions and user management in Hologres, see [Permission model](/help/en/hologres/security-and-compliance/hologres-permission-model/#concept-2021277) and [Manage users](/help/en/hologres/user-guide/manage-users#section-fv0-kzc-n35).
    
-   For more information about how to obtain an AccessKey ID, see [Obtain an AccessKey pair](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe).
    

**Important**

To prevent your AccessKey information from being leaked, use variables to specify the AccessKey values. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).

password

-   The password of the custom account.
    
-   The AccessKey secret of an Alibaba Cloud account or a RAM user.
    

String

Yes

None

endpoint

The endpoint of the Hologres service.

String

Yes

None

For more information, see [Endpoints](/help/en/hologres/user-guide/endpoints-for-connecting-to-hologres#concept-1715026).

connection.pool.size

The size of the JDBC connection pool created for a single Flink table in a task.

Integer

No

5

If the job performance is poor, increase the pool size. The connection pool size is proportional to data throughput. This parameter is effective only for dimension tables and sink tables.

connection.pool.name

The name of the connection pool. Tables with the same connection pool name in the same TaskManager can share the connection pool.

String

No

`'default'`

The default value is `'default'`. If multiple tables are set to use the same connection pool, the largest value of the connection.pool.size parameter among them takes effect.

You can configure this parameter as needed. For example, if a job has two dimension tables A and B and three sink tables C, D, and E, you can use pool1 for tables A and B, pool2 for tables C and D, and a separate pool3 for table E if it handles high traffic.

**Note**

-   To share a connection pool, tables must have the same connection.pool.name, endpoint, database, and other connection information.
    
-   If a job contains many tables, an insufficient number of connections may affect performance. In this case, set different connection.pool.name values for different tables.
    

connection.fixed.enabled

Specifies whether to use the lightweight connection mode.

Boolean

No

None

Hologres has an upper limit on the [number of connections](/help/en/hologres/user-guide/manage-connections#section-gqt-jed-8hf). Starting from Hologres 2.1, real-time data writing supports the use of lightweight connections that are not limited by the maximum number of connections.

**Note**

-   The default value of this parameter depends on the Hologres instance version. For dimension and sink tables, the connector automatically selects the lightweight connection mode if the Hologres version is later than 3.0.28.
    
-   Lightweight connections for dimension tables do not support queries on JSONB and RoaringBitmap types.
    

connection.max-idle-ms

The idle timeout for a JDBC connection.

Long

No

60000

If the idle time exceeds this value, the connection is released. A new connection is automatically created when it is next used. The unit is milliseconds.

connection.ssl.mode

Specifies whether to enable SSL encryption for data in transit and which mode to use.

String

No

disable

-   `disable` (default): Disables encryption in transit.
    
-   `require`: Enables SSL to encrypt only the data link.
    
-   `verify-ca`: Enables SSL to encrypt the data link and uses a CA certificate to verify the authenticity of the Hologres server.
    
-   `verify-full`: Enables SSL to encrypt the data link, uses a CA certificate to verify the authenticity of the Hologres server, and checks whether the CN or DNS in the certificate matches the configured Hologres endpoint.
    

**Note**

-   Hologres V2.1 and later support the verify-ca and verify-full modes. For more information, see [Encryption in transit](/help/en/hologres/security-and-compliance/ssl-encrypted-transmission).
    
-   If you set this parameter to verify-ca or verify-full, you must also configure the connection.ssl.root-cert.location parameter.
    

connection.ssl.root-cert.location

The path to the certificate when the encryption mode requires a certificate.

String

No

None

If you set connection.ssl.mode to verify-ca or verify-full, you must also specify the path to the CA certificate. You can use the [File Management](/help/en/flink/realtime-flink/user-guide/resource-management) feature in the Realtime Compute console to upload the certificate, which is then stored in the /flink/usrlib directory. For example, if the CA certificate file is named certificate.crt, set this parameter to `'/flink/usrlib/certificate.crt'`.

**Note**

For information about how to obtain a CA certificate, see [Download a CA certificate](/help/en/hologres/security-and-compliance/ssl-encrypted-transmission#0c8bcca0891oq).

retry-count

The number of retries for writes and queries when a connection fails.

Integer

No

10

None.

retry-sleep-step-ms

The incremental wait time for each retry.

Long

No

5000

The unit is milliseconds. For example, if the value is 5000 (5 seconds), the first retry waits for 5 seconds, the second for 10 seconds, and so on.

meta-cache-ttl-ms

The TTL for the cached TableSchema information.

Long

No

600000

The unit is milliseconds.

serverless-computing.enabled

Specifies whether to use serverless resources.

Boolean

No

false

If set to true, Hologres serverless resources are used for reads and writes instead of the resources of your Hologres instance. This parameter is supported only for batch reads and batch imports. It is not effective for binary logging consumption, dimension table point queries, or real-time writes. For more information, see [Serverless Computing overview](/help/en/hologres/user-guide/overview-of-serverless-computing).

**Note**

-   Batch reading refers to the full data read phase when source.binlog is set to false, or when source.binlog.startup-mode is set to `INITIAL`.
    
-   Batch import refers to when sink.write-mode is set to `COPY_BULK_LOAD` or `COPY_BULK_LOAD_ON_CONFLICT`.
    

**Note**

To perform large-scale full data imports or exports and want to avoid affecting other queries on your Hologres instance, enable this parameter. For more information, see [Serverless Computing overview](/help/en/hologres/user-guide/overview-of-serverless-computing).

### **Specific to source tables**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

source.binlog

Specifies whether to consume binary logging data.

Boolean

No

true

-   `true` (default): Consumes binary logging data.
    
-   `false`: Does not consume binary logging data. Only batch reading is performed. The job stops after the reading is complete.
    

source.binlog.read-mode

The read mode.

ENUM

No

AUTO

-   `AUTO` (default): Automatically selects the optimal mode based on the instance version.
    
-   `HOLOHUB`: Uses HoloHub mode to consume binary logs.
    
-   `JDBC`: Uses JDBC mode to consume binary logs.
    

**Note**

The automatic selection logic for AUTO mode is as follows:

-   For Hologres instances of V2.1.27 and later, JDBC mode is selected, and lightweight connections are enabled by default. This means the connection.fixed.enabled parameter is set to true by default.
    
-   For Hologres instances of V2.1.0 to V2.1.26, JDBC mode is selected.
    
-   For Hologres instances of V2.0 and earlier, HOLOHUB mode is selected.
    

source.binlog.change-log-mode

The changelog types supported by the CDC source table.

ENUM

No

UPSERT

-   `ALL`: Supports all changelog types, including INSERT, DELETE, UPDATE\_BEFORE, and UPDATE\_AFTER.
    
-   `UPSERT` (default): Supports only upsert changelog types, including INSERT, DELETE, and UPDATE\_AFTER.
    
-   `ALL_AS_APPEND_ONLY`: Treats all changelog types as INSERT.
    

**Note**

If the downstream pipeline includes retraction operators, such as using ROW\_NUMBER OVER WINDOW to remove duplicates, you must set upsertSource to true. The source table then reads data from Hologres in an upsert manner.

source.binlog.startup-mode

The consumption mode for binary logging data.

ENUM

No

INITIAL

-   `INITIAL` (default): First consumes all existing data, and then reads binary logs to start incremental consumption.
    
-   `EARLIEST_OFFSET`: Starts consumption from the earliest binary log.
    
-   `TIMESTAMP`: Starts consumption of binary logs from the specified startTime.
    

**Note**

If you set the **startTime** parameter or select a start time in the startup interface, the **binlogStartupMode** is forced to timestamp mode. Other consumption modes do not take effect. The **startTime** parameter has a higher priority.

source.binlog.batch-size

The number of rows read from binary logs in each batch.

Integer

No

512

None.

source.binlog.request-timeout-ms

The timeout period for reading binary logging data.

Long

No

300000

The unit is milliseconds.

**Note**

A timeout may be caused by backpressure if downstream operators process source table data too slowly.

source.binlog.project-columns.enabled

Specifies whether to read only the fields specified in the user table when reading binary logging data.

Boolean

No

None

The specified fields are those declared in the `CREATE TEMPORARY TABLE` statement. Undeclared fields are not read. When a table has many fields but you want to consume only a subset, this can prevent unnecessary data transfer and conversion, improve read performance, and save bandwidth.

**Note**

This parameter is supported only in VVR 11.3 and later and Hologres V3.2 and later. You do not usually need to configure this parameter. The connector enables it by default if the version requirements are met.

source.binlog.compression.enabled

Specifies whether to enable data compression during transit when reading binary logging data.

Boolean

No

None

When consuming binary logs, the server returns a byte stream compressed with the LZ4 algorithm. This can improve read performance and save bandwidth.

**Note**

This parameter is supported only in VVR 11.3 and later and Hologres V3.2 and later. You do not usually need to configure this parameter. The connector enables it by default if the version requirements are met.

source.binlog.partition-binlog-mode

The consumption mode for binary logging of partitioned tables.

Enum

No

DISABLE

-   `DISABLE` (default): The source table is not a partitioned table. If the specified Hologres table is a partitioned table, an exception is thrown.
    
-   `DYNAMIC`: The latest partition of the partitioned table is continuously consumed. The [dynamic partitioning](/help/en/hologres/developer-reference/dynamic-partition-management) feature must be enabled for the partitioned table. In DYNAMIC mode, partitions are consumed chronologically, from oldest to latest. When data in the partition previous to the latest is being consumed, the connector starts to consume data in the latest partition when a new unit of time arrives.
    
-   `STATIC`: Consumes fixed partitions of the partitioned table. Multiple partitions can be consumed at the same time. Partitions cannot be added or removed during consumption. By default, all partitions of this parent table are consumed.
    

source.binlog.partition-binlog-lateness-timeout-minutes

The maximum lateness timeout when consuming a partitioned table in DYNAMIC mode.

Boolean

No

60

-   The unit is minutes. In DYNAMIC mode, when a new time unit arrives, consumption of the latest partition corresponding to the current time begins. However, the previous partition is not immediately closed. It is continuously monitored to ensure that late data from the previous partition can be read.
    

For example, if a table is partitioned by day and the partition is 20240920, and the maximum data lateness is 1 hour, consumption for this partition closes at 2024-09-21 01:00:00, not at 2024-09-21 00:00:00.

-   The lateness-timeout time cannot exceed the partition's time unit.
    

If the table is partitioned by day, the maximum value is 24 × 60 = 1440 (minutes). In DYNAMIC mode, only one table is consumed most of the time. During the lateness period, two partitions may be consumed at the same time.

source.binlog.partition-values-to-read

In STATIC mode, specifies the partitions to consume. Separate partition values with commas (,).

String

No

None

-   If this parameter is not configured, STATIC mode consumes all partitions of the specified parent table. If specified, only the designated partitions are consumed.
    
-   This parameter requires only the partition values, not the full partition names. Separate multiple partition values with commas (,). Regular expressions are not supported.
    

startTime

The start offset time.

String

No

None

The format is **yyyy-MM-dd hh:mm:ss**. If this parameter is not set and the job does not recover from a state, consumption of Hologres data starts from the earliest binary log.

source.scan.fetch-size

The batch size for batch reading.

Integer

No

512

None.

source.scan.timeout-seconds

The timeout period for batch reading.

Integer

No

60

The unit is seconds.

source.scan.filter-push-down.enabled

Specifies whether to push down filters during batch reading.

Boolean

No

false

-   `false` (default): Does not push down filters.
    
-   `true`: Pushes down supported filter conditions to Hologres during batch reading.
    

**Note**

-   Do not enable this parameter and the `source.binlog.filter-push-down.enabled` parameter at the same time.
    
-   This parameter takes effect in two cases:
    
    -   When `source.binlog` is set to false, which indicates batch reading, filter pushdown is effective.
        
    -   When `source.binlog` is set to true and `source.binlog.startup-mode` is set to `INITIAL`, which indicates full and incremental reading, filter pushdown is effective during the full data read phase.
        

source.binlog.filter-push-down.enabled

Specifies whether to push down filters during binary log consumption.

Boolean

No

false

-   `false` (default): Does not push down filters.
    
-   `true`: Pushes down supported filter conditions to Hologres during binary log consumption.
    

**Note**

-   This parameter is supported only in VVR 11.3 and later and Hologres V4.0 and later. Do not enable this parameter and the `source.scan.filter-push-down.enabled` parameter at the same time.
    
-   When `source.binlog` is set to true, filter pushdown is always effective. For example, when `source.binlog.startup-mode` is set to `INITIAL`, filter pushdown is effective for both the full and incremental phases.
    

scan.prefer.physical-column.over.metadata-column

Specifies whether to prioritize reading data from a physical column when it has the same name as a metadata column.

Boolean

No

false

This parameter is supported only in VVR 11.5 and later. Earlier versions always prioritize reading from the metadata column.

### **Sink table-specific parameters**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

sink.write-mode

The write mode.

ENUM

No

INSERT

-   `INSERT`: Default value. Uses JDBC to write data with INSERT statements.
    
-   `COPY_STREAM`: Uses the streaming fixed copy method for writing. Fixed copy is a high-performance streaming write method suitable for high-throughput and low-latency scenarios. However, this mode does not support deleting data, writing to a parent partitioned table, or the ignoreNullWhenUpdate parameter.
    
-   `COPY_BULK_LOAD`: Uses the COPY protocol for batch writing. `COPY_BULK_LOAD` is currently suitable only for tables without a primary key. A primary key conflict throws an exception. Compared with `COPY_STREAM`, this mode uses fewer Hologres resources.
    
-   `COPY_BULK_LOAD_ON_CONFLICT`: Uses the COPY protocol for batch writing and supports writing to tables with a primary key and handling primary key conflicts.
    

**Note**

-   The `COPY_BULK_LOAD_ON_CONFLICT` mode is supported only by Ververica Runtime (VVR) 11.3 or later and requires Hologres instance version 3.1 or later. The working principle is that Flink reshuffles data based on the DistributionKey of the Hologres sink table. This allows data for the same shard to be written by the same Flink Task, which reduces the table lock for batch imports to shard-level granularity and enables concurrent writes to different shards. Therefore, we recommend that the job concurrency matches the [number of shards](/help/en/hologres/user-guide/basic-concepts) in the Hologres sink table.
    
-   When writing in `COPY_BULK_LOAD` or `COPY_BULK_LOAD_ON_CONFLICT` mode, data is visible after a successful checkpoint. These modes are suitable for scenarios that do not require high data visibility or for batch imports of historical data.
    

sink.on-conflict-action

The policy for handling primary key conflicts.

ENUM

No

INSERT\_OR\_UPDATE

-   `INSERT_OR_IGNORE`: Keeps the first occurrence of the data and ignores all subsequent data.
    
-   `INSERT_OR_REPLACE`: Replaces the existing row with the new data.
    
-   `INSERT_OR_UPDATE` (default): Updates some columns of the existing data.
    
    For example, in a table with four fields a, b, c, and d, where a is the primary key, if the sink table provides only fields a and b, the system updates only field b when a primary key conflict occurs. Fields c and d remain unchanged.
    

sink.create-missing-partition

Specifies whether to automatically create a partition based on the partition value if the partition does not exist when writing to a partitioned table.

Boolean

No

false

-   When you use a field of the DATE type as the partition key and have [dynamic partitioning](/help/en/hologres/developer-reference/dynamic-partition-management) enabled, the name format of the automatically created partition table is consistent with that of dynamic partitions by default.
    
-   Make sure that partition values do not contain dirty data. Otherwise, an incorrect partition table is created, which causes a failover. Use this parameter with caution.
    
-   When sink.write-mode is not INSERT, writing to a parent partitioned table is not supported.
    

sink.delete-strategy

The policy for handling retraction messages.

String

No

CHANGELOG\_STANDARD

-   `IGNORE_DELETE`: Ignores Update Before and Delete messages. This is suitable for scenarios that require only inserting or updating data, but not deleting data.
    
-   `NON_PK_FIELD_TO_NULL`: Ignores Update Before messages and processes Delete messages by updating non-primary key fields to NULL. This is suitable for scenarios where you want to perform deletions during a partial update without affecting other columns.
    
-   `DELETE_ROW_ON_PK`: Ignores Update Before messages and processes Delete messages by deleting the entire row based on the primary key. This is suitable for scenarios where you want to delete an entire row during a partial update, which affects other columns.
    
-   `CHANGELOG_STANDARD`: The Flink framework operates according to the Flink SQL changelog principles. It does not ignore delete operations and performs updates by first deleting and then inserting data to ensure data accuracy. **This is suitable for scenarios that do not involve partial updates**.
    

**Note**

Enabling the NON\_PK\_FIELD\_TO\_NULL option may result in records that contain only the primary key, with all other columns being null.

sink.ignore-null-when-update.enabled

When **sink.on-conflict-action='INSERT\_OR\_UPDATE'**, specifies whether to ignore null values in the data being written for an update.

Boolean

No

false

-   `false` (default): Writes null values to the Hologres sink table.
    
-   `true`: Ignores null values in the data being written for an update.
    

**Note**

This parameter is supported only when `sink.write-mode` is set to `INSERT`.

sink.ignore-null-when-update-by-expr.enabled

When **sink.on-conflict-action='INSERT\_OR\_UPDATE'**, specifies whether to use an expression to ignore null values in the data being written for an update.

Boolean

No

false

Provides better performance than sink.ignore-null-when-update.enabled.

-   `false` (default):
    
    -   If sink.ignore-null-when-update.enabled is enabled, null values in the updated data are ignored.
        
    -   If sink.ignore-null-when-update.enabled is disabled, null values are written to the Hologres sink table.
        
-   `true`: Null values in the updated data are ignored, regardless of whether sink.ignore-null-when-update.enabled is enabled.
    

**Note**

-   This parameter is supported only when `sink.write-mode` is set to `INSERT`.
    
-   Hologres V4.0 or later is required.
    

sink.default-for-not-null-column.enabled

If a null value is written to a NOT NULL column that has no default value in a Hologres table, specifies whether to allow the connector to fill in a default value.

Boolean

No

true

-   `true` (default): Allows the connector to fill in and write a default value based on the following rules.
    
    -   If the field is a String type, an empty string ("") is written by default.
        
    -   If the field is a Number type, 0 is written by default.
        
    -   If the field is a Date, timestamp, or timestamptz type, **1970-01-01 00:00:00** is written by default.
        

-   `false`: Does not fill in a default value. An exception is thrown when writing a null value to a NOT NULL field.
    

**Note**

This parameter is supported only when `sink.write-mode` is set to `INSERT` and `sink.on-conflict-action` is set to an option other than `INSERT_OR_UPDATE`.

sink.remove-u0000-in-text.enabled

If a string type contains the invalid character \\u0000 during a write, specifies whether to allow the connector to remove it.

Boolean

No

true

-   `false`: The connector does not operate on the data, but writing may throw the following exception when encountering dirty data: `ERROR: invalid byte sequence for encoding "UTF8": 0x00`
    
    In this case, process the dirty data in the source table beforehand, or define the dirty data processing logic in SQL.
    

-   `true` (default): The connector helps remove \\u0000 from string types to prevent write exceptions.
    

sink.partial-insert.enabled

Specifies whether to insert only the fields defined in the INSERT statement.

Boolean

No

false

-   `false` (default): Regardless of which fields are declared in the INSERT statement, all fields defined in the sink table DDL are updated. Fields not declared in the INSERT statement are updated to null.
    
-   `true`: Pushes down the fields defined in the INSERT statement to the connector, so that only the declared fields can be updated or inserted.
    

**Note**

-   This parameter is effective only when the `sink.on-conflict-action` parameter is set to `INSERT_OR_UPDATE`.
    

sink.deduplication.enabled

Specifies whether to remove duplicates during batch writing.

Boolean

No

true

-   `true` (default): If a batch of data contains records with the same primary key, duplicates are removed by default, and only the last arriving record is kept. For example, consider data with two fields, where the first field is the primary key:
    
    -   If the records `INSERT (1,'a')` and `INSERT (1,'b')` arrive in sequence, only the last one, `(1,'b')`, is kept and written to the Hologres sink table after deduplication.
        
    -   If the record `(1,'a')` already exists in the Hologres sink table, and the records `DELETE (1,'a')` and `INSERT (1,'b')` arrive in sequence, only the last one, `(1,'b')`, is kept and written to Hologres. This appears as a direct update, not a delete followed by an insert.
        
-   `false`: Does not remove duplicates during batching. If a newly arrived record has the same primary key as a record currently in the batch, the existing batch is written first. After the write is complete, the new record is written.
    

**Note**

-   This parameter is supported only when `sink.write-mode` is set to `INSERT`.
    
-   If batch deduplication is not allowed, in extreme cases such as when all data has the same primary key, writing degrades to single-row writes without batching, which affects performance.
    

sink.aggressive-flush.enabled

Specifies whether to enable aggressive commit mode.

Boolean

No

false

If set to true, the connection is forced to commit when idle, even if the batch has not reached the expected size. This can effectively reduce data write latency when traffic is low.

**Note**

This parameter is supported only when `sink.write-mode` is set to `INSERT` or `COPY_STREAM`.

sink.insert.check-and-put.column

Enables conditional updates and specifies the field name to check.

String

No

None

The parameter value must be set to an existing field name in the Hologres table.

**Important**

-   This parameter is supported only when `sink.write-mode` is set to `INSERT`.
    
-   The sink table must have a primary key, and the `sink.on-conflict-action` parameter must be set to `INSERT_OR_UPDATE` or `INSERT_OR_REPLACE`.
    
-   Because a reverse lookup is required, create the sink table as a row-oriented table or a hybrid row-column table.
    
-   If there is a high number of duplicate records, check-and-put operations degrade to single-row writes, which reduces write performance.
    

sink.insert.check-and-put.operator

The comparison operator for the conditional update operation.

String

No

GREATER

Compares the check field of the new record with the old value in the table. The update is performed if the condition of the comparison operator is met. Supported values are GREATER, GREATER\_OR\_EQUAL, EQUAL, NOT\_EQUAL, LESS, LESS\_OR\_EQUAL, IS\_NULL, and IS\_NOT\_NULL.

sink.insert.check-and-put.null-as

During a conditional update, if the old data is null, the null value is treated as the effective value configured by this parameter.

String

No

None

In PostgreSQL, the result of any comparison with NULL is FALSE. Therefore, when the original data in the table is NULL, you must set a NULL-AS parameter for the update operation. This is equivalent to the COALESCE function in SQL.

sink.insert.batch-size

In INSERT mode, the maximum number of records to buffer in the Hologres sink before writing.

Integer

No

512

The `sink.insert.batch-size`, `sink.insert.batch-byte-size`, and `sink.insert.flush-interval-ms` parameters are related by a logical OR. If you set these three parameters, the data is written when any of the conditions is met.

sink.insert.batch-byte-size

In INSERT mode, the maximum size in bytes of records to buffer in the Hologres sink before writing.

Long

No

2 × 1024 × 1024 bytes, which is 2 MB

sink.insert.flush-interval-ms

In INSERT mode, the maximum wait time before buffered data is written from the Hologres sink to Hologres.

Long

No

10000

sink.copy.format

The transmission format used in COPY mode.

String

No

-   The default for `COPY_STREAM` mode is binary.
    
-   The default for `COPY_BULK_LOAD` or `COPY_BULK_LOAD_ON_CONFLICT` is text.
    

`COPY_STREAM` mode supports:

-   binary
    
-   text
    
-   binaryrow (Hologres engine version >= 4.1.0)
    

`COPY_BULK_LOAD` or `COPY_BULK_LOAD_ON_CONFLICT` supports only text.

**Note**

This parameter is supported only when `sink.write-mode` is set to `COPY_STREAM`, `COPY_BULK_LOAD`, or `COPY_BULK_LOAD_ON_CONFLICT`.

sink.insert.conflict-update-set

The Hologres expression for updates on primary key conflicts.

String

No

None

This is equivalent to the \`insert into tbl values(xxx) on conflict(pk) do update set <conflict-update-set>\` statement. You can specify a Hologres expression or function.

For example, if this parameter is set to col1=old.col1+excluded.col1,col2=excluded.col2, it means that on a primary key conflict, the value of col1 is updated to the sum of the old and new values, and col2 is updated to the new value.

-   If this parameter is not specified, all incoming fields are updated to their new values by default.
    
-   If the update expression is stateful, for example, col=old.col+excluded.col where the result depends on the old value, ensure that a field can be used as a row version number. Then, set sink.insert.conflict-where to excluded.seq>old.seq to ensure data correctness after a failover and recovery.
    

**Note**

This parameter is supported only when `sink.write-mode` is set to `INSERT`.

sink.insert.conflict-where

The Hologres filter condition that triggers an update on a primary key conflict.

String

No

None

This is equivalent to \`insert into tbl values(xxx) on conflict(pk) do update set <conflict-update-set> where <conflict-where>\`. You can specify a Hologres expression or function.

For example, if this parameter is set to excluded.col1>old.col1, it means that on a primary key conflict, the update is triggered only if the new value of col1 is greater than the old value.

**Note**

-   This parameter is supported only when `sink.write-mode` is set to `INSERT`.
    
-   This parameter conflicts with the sink.insert.check-and-put\* parameters. An error occurs if they are configured at the same time.
    

### **Dimension table-specific parameters**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

lookup.read.batch-size

The maximum number of records to buffer for batch processing during a point query on a Hologres dimension table.

Integer

No

256

None.

lookup.read.timeout-ms

The timeout period for a dimension table point query.

Long

No

The default value is 0, which means no timeout.

None.

lookup.read.column-table.enabled

Specifies whether to use a column-oriented table as a dimension table.

Boolean

No

false

Using a column-oriented table as a dimension table results in poor performance. Use a row-oriented table or a hybrid row-column table instead. If this parameter is enabled and a column-oriented table is used, a warning is logged.

lookup.insert-if-not-exists

Specifies whether to insert data that does not exist.

Boolean

No

false

If a point query finds that the current data does not exist in the dimension table, the current data is inserted.

cache

The cache policy.

String

No

None

Hologres supports only the None and LRU cache policies.

cacheSize

The cache size.

Integer

No

10000

After you select the **LRU** cache policy, you can set the cache size. The unit is rows.

cacheTTLMs

The cache refresh interval.

Long

No

See Remarks.

The unit is milliseconds. The default value of cacheTTLMs depends on the cache configuration:

-   If cache is set to LRU, cacheTTLMs is the cache timeout period. By default, the cache does not expire.
    
-   If cache is set to None, you do not need to configure cacheTTLMs. This means the cache does not time out.
    

cacheEmpty

Specifies whether to cache data for which the join result is empty.

Boolean

No

true

-   `true` (default): Caches data for which the join result is empty.
    
-   `false`: Does not cache data for which the join result is empty.
    
    However, if the condition before AND in a join statement is met but the condition after AND is not, data with an empty join result is still cached. The following code provides an example.
    
    ```
    LEFT JOIN latest_emergency FOR SYSTEM_TIME AS OF PROCTIME() AS t2
     ON t1.alarm_id = t2.alarm_id -- If a dynamic alert is detected, match the dynamic alert ID. Otherwise, ignore the dynamic_alarm_id field.
     AND CASE
     WHEN alarm_type = 2 THEN t1.dynamic_id = t2.dynamic_alarm_id
     ELSE true
     END
    ```
    

**Important**

Decide whether to enable this switch based on your business scenario. If you want to join with newly inserted records in the dimension table during job runtime, disable this option or set `cacheTTLMs` to a short interval. This prevents null results from being cached, which could cause subsequent dimension table joins to fail.

async

Specifies whether to return data asynchronously.

Boolean

No

false

-   `true`: Returns data asynchronously.
    
-   `false` (default): Does not return data asynchronously.
    

**Note**

Asynchronously returned data is unordered.

lookup.filter-push-down.enabled

Specifies whether to push down dimension table filter conditions to the Hologres server.

Boolean

No

false

Currently, the pushdown operation is executed only for comparison operations between columns and **constants** that use equality and comparison operators (such as <, <=, >, >=).

**Note**

This parameter can be configured only in VVR 11.4 and later.
