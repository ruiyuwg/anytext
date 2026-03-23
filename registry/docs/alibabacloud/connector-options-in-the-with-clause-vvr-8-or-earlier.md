This topic describes Hologres connector options in the WITH clause for Ververica Runtime (VVR) 8.0.x or earlier.

## Connector options in the WITH clause

### **General**

**Option**

**Description**

**Data type**

**Required?**

**Default value**

**Remarks**

`connector`

The type of the connector.

String

Yes

No default value

Set this option to `hologres`.

`dbname`

The database name.

String

Yes

No default value

Hologres V2.0 introduces virtual warehouse instances as a new type of elastic and high-availability instances. Computing resources are divided into multiple virtual warehouses to implement high-availability deployments. Different virtual warehouses share the same endpoint.

You can add a specific suffix to the value of the `dbname` option to specify the virtual warehouse to which you want to connect. For example, if you want to connect a dimension table to the virtual warehouse `read_warehouse`, specify `'dbname' = 'db_test@read_warehouse'`.

**Note**

Virtual warehouses are supported only when JDBC-related modes are used for tables. For more information, see the `sdkMode` option of the source, dimension, or sink table.

`tablename`

The table name.

String

Yes

No default value

If the schema is not public, set `tablename` to `schema.tableName`.

`username`

-   The custom account username. Format: `BASIC$<user_name>`.
    
-   The AccessKey ID of your Alibaba Cloud account or a RAM user.
    

String

Yes

No default value

-   The configured account must have access to the corresponding Hologres database. For more information, see [Hologres permission models](/help/en/hologres/security-and-compliance/hologres-permission-model/#concept-2021277) and [Manage users](/help/en/hologres/user-guide/manage-users#section-fv0-kzc-n35).
    
-   For information about how to obtain an AccessKey pair, see [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
    

**Important**

To enhance security, [use variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb) instead of hardcoding your AccessKey pair.

`password`

-   The password of the custom account.
    
-   The AccessKey secret of your Alibaba Cloud account or RAM user.
    

String

Yes

No default value

`endpoint`

The endpoint of Hologres.

String

Yes

No default value

See [Endpoint](/help/en/hologres/user-guide/endpoints-for-connecting-to-hologres#concept-1715026).

`connection.ssl.mode`

Specifies whether to enable SSL-encrypted transmission and specifies the SSL-encrypted transmission mode to use.

String

No

`disable`

-   `disable`: SSL-encrypted transmission is disabled.
    
-   `require`: SSL is enabled to encrypt the data link.
    
-   `verify-ca`: SSL is enabled to encrypt the data link, and a CA certificate is used to verify the authenticity of the Hologres server.
    
-   `verify-full`: SSL is enabled to encrypt the data link; and the client uses a CA certificate to verify the authenticity of the Hologres server, and checks the consistency between the common name (CN) or Domain Name System (DNS) in the CA certificate and the configured Hologres endpoint.
    

**Note**

-   Only VVR 8.0.5 or later supports this option.
    
-   Hologres V2.1 or later supports the `verify-ca` and `verify-full` modes. For more information, see [Encryption in transit](/help/en/hologres/security-and-compliance/ssl-encrypted-transmission).
    
-   If you set this option to `verify-ca` or `verify-full`, you must configure `connection.ssl.root-cert.location`.
    

`connection.ssl.root-cert.location`

The path of the certificate if a CA certificate is used.

String

No

No default value

If you set `connection.ssl.mode` to `verify-ca` or `verify-full`, this option becomes required. You can use the [artifacts](/help/en/flink/realtime-flink/user-guide/resource-management) feature in the Realtime Compute for Apache Flink console to upload the certificate, which will be stored in the /flink/usrlib directory. For example, if the CA certificate file name is `certificate.crt`, set this option to `'/flink/usrlib/certificate.crt'`.

**Note**

-   Only VVR 8.0.5 or later supports this parameter.
    
-   For information about how to obtain a CA certificate, see [Download the CA certificate](/help/en/hologres/security-and-compliance/ssl-encrypted-transmission#0c8bcca0891oq).
    

`jdbcRetryCount`

The maximum number of retries allowed to read and write data if a connection failure occurs.

Integer

No

`10`

`jdbcRetrySleepInitMs`

The fixed waiting period for each retry.

Long

No

`1000`

The actual waiting period for each retry is calculated by using the following formula: `jdbcRetrySleepInitMs+retry*jdbcRetrySleepStepMs`. Unit: milliseconds.

`jdbcRetrySleepStepMs`

The accumulated waiting period for each retry.

Long

No

`5000`

The actual waiting period for each retry is calculated by using the following formula: `jdbcRetrySleepInitMs+retry*jdbcRetrySleepStepMs`. Unit: milliseconds.

`jdbcConnectionMaxIdleMs`

The maximum duration for which the JDBC connection can remain idle.

Long

No

`60000`

If a JDBC connection stays idle for a period of time that exceeds the value of this option, the connection is closed and released. Unit: milliseconds.

`jdbcMetaCacheTTL`

The maximum time for storing the TableSchema information in the cache.

Long

No

`60000`

Unit: milliseconds.

`jdbcMetaAutoRefreshFactor`

The factor for triggering automatic cache refresh. If the remaining time for storing data in the cache is less than the time for triggering an automatic refresh of the cache, the system automatically refreshes the cache.

Integer

No

`4`

The remaining time for storing data in the cache is calculated by using the following formula:

**Remaining time for storing data in the cache = Cache expiration time - Time for which data has been stored in the cache.**

After the cache is automatically refreshed, the duration for which data is cached is recalculated from 0.

The time for triggering an automatic refresh of the cache is calculated by using the following formula:

jdbcMetaCacheTTL/jdbcMetaAutoRefreshFactor.

`type-mapping.timestamp-converting.legacy`

Specifies whether to perform time type conversions between Realtime Compute for Apache Flink and Hologres.

Boolean

No

`true`

-   `true`: Time zone conversion is performed based on the time zone of Java Virtual Machine (JVM) in the runtime environment.
    
-   `false` (recommended): Time zone conversion is performed based on the time zone of Realtime Compute for Apache Flink.
    

**Note**

-   Only VVR 8.0.6 or later supports this parameter.
    
-   For more information, see [Time zones of Realtime Compute for Apache Flink and Hologres](#8d6a844857tw9).
    
-   If property-version\=0, the default value is `true`. If property-version\=1, the default value is `false`.
    

`property-version`

The connector option version.

Integer

No

`0`

Valid values:

-   `0`
    
-   `1` (recommended)
    

**Note**

-   Only VVR 8.0.6 or later supports this option.
    
-   The set of available connector options and their default values may vary in different VVR major versions. We will describe any differences in the option remarks.
    

### **Source-specific**

**Option**

**Description**

**Data type**

**Required?**

**Default value**

**Remarks**

`field_delimiter`

The delimiter used between rows when data is being exported.

String

No

`"\u0002"`

`binlog`

Specifies whether to consume binary log data.

Boolean

No

`false`

-   `true`
    
-   `false`
    

**Note**

-   If property-version=0, the default value is `false`.
    
-   If property-version=1, the default value is `true`.
    

`sdkMode`

The SDK mode.

String

No

`holohub`

-   `holohub`: Binary log data is consumed in HoloHub mode.
    
-   `jdbc`: Binary log data is consumed in JDBC mode.
    
-   `jdbc_fixed`: Binary log data is consumed in fixed JDBC mode, which is not subject to connection limits. This mode does not support consuming binary logs from a database with [data masking](/help/en/hologres/security-and-compliance/data-masking) enabled.
    

For information about recommended values for different versions, see [Important Notes](/help/en/flink/realtime-flink/developer-reference/hologres-connector/#769ce6511cb2f).

`jdbcBinlogSlotName`

The slot name of the binary log source table in JDBC mode.

String

No

No default value

This option is effective only when `sdkMode` is set to `jdbc`. If you do not specify this option, the Hologres connector automatically creates a slot. For more information, see [Binary log consumption in JDBC mode](/help/en/flink/developer-reference/realtime-compute-real-time-consumption-of-hologres-in-flink#fa7f4e90dfe6k).

**Note**

If you use Hologres V2.1 or later and VVR 8.0.5 or later, skip configuring this option, and the connector does not attempt to automatically create a slot.

`binlogMaxRetryTimes`

The number of retries after Realtime Compute for Apache Flink fails to read binary log data.

Integer

No

`60`

`binlogRetryIntervalMs`

The interval between retries after Realtime Compute for Apache Flink fails to read the binary log data.

Long

No

`2000`

Unit: milliseconds.

`binlogBatchReadSize`

The number of rows in which the binary log data is read at a time.

Integer

No

`100`

`cdcMode`

Specifies whether to read binary log data in CDC mode.

Boolean

No

`false`

-   `true`: Binary log data is read in CDC mode.
    
-   `false`: Binary log data is not read in CDC mode.
    

**Note**

-   If property-version=0, the default value is `false`.
    
-   If property-version=1, the default value is `true`.
    

`upsertSource`

Specifies whether the source table reads a changelog stream that contains UPSERT messages.

Boolean

No

`false`

This option takes effect only in CDC mode.

-   `true`: Only UPSERT messages are supported, including INSERT, DELETE, and UPDATE\_AFTER messages.
    
-   `false`: All types of messages are supported, including INSERT, DELETE, UPDATE\_BEFORE, and UPDATE\_AFTER messages.
    

**Note**

If retraction operators exist in the sink table, such as the `ROW_NUMBER()` function is used together with an OVER clause for deduplication, you must set `upsertSource` to `true`.

`binlogStartupMode`

The binary logs consumption mode.

String

No

`earliestOffset`

-   `initial`: Consumes all data first and then binary logs is consumed.
    
-   `earliestOffset`: Consumes binary logs from the earliest one.
    
-   `timestamp`: Consumes binary logs from the time specified by the `startTime` option.
    

**Note**

The startTime option has a higher priority. This means if you configure the startTime option or select a start time point at job startup, the binlogStartupMode option is forcibly set to `timestamp`.

**Note**

-   If property-version=0, the default value is `false`.
    
-   If property-version=1, the default value is `true`.
    

`startTime`

The start time when Hologres data is consumed.

String

No

No default value

The format is yyyy-MM-dd hh:mm:ss. If this option is not configured and jobs are not resumed from a state, Realtime Compute for Apache Flink starts to consume Hologres data from the earliest binary log.

`jdbcScanFetchSize`

The number of records that can be buffered during the scan operation.

Integer

No

`256`

`jdbcScanTimeoutSeconds`

The timeout period of the scan operation.

Integer

No

`60`

Unit: seconds.

`jdbcScanTransactionSessionTimeoutSeconds`

The timeout period for the transaction to which the scan operation belongs.

Integer

No

`600`

This option corresponds to the Hologres [GUC parameter](/help/en/hologres/developer-reference/guc-parameters#task-2165646) idle\_in\_transaction\_session\_timeout.

The value `0` means timeout is not allowed.

`enable_filter_push_down`

Specifies whether to perform filter pushdown during the full data reading phase.

Boolean

No

`false`

-   `false`: Filter pushdown is not performed.
    
-   `true`: The supported filter conditions are pushed down to Hologres during the full data reading phase. The filter pushdown operation is performed in the following full data reading scenarios: full data reading from a Hologres source table in which the binary logging feature is disabled, and full data reading in a binary log source table when the Hologres connector consumes full and incremental data in a source table.
    
    **Important**
    
    We recommend that you use VVR 6.0.7 or later and specify this option in the source table's DDL statement to enable filter pushdown, improving the overall performance.
    

`partition-binlog.mode`

The mode in which binary logs in a partitioned table are consumed.

Enum

No

`DISABLE`

-   `DISABLE`: The source table is not a partitioned table. If the specified Hologres table is a partitioned table, an exception is reported.
    
-   `DYNAMIC`: The latest partition of the partitioned table is continuously consumed. The [dynamic partitioning](/help/en/hologres/developer-reference/dynamic-partition-management) feature must be enabled for the partitioned table. In dynamic mode, partitions are consumed chronologically, from oldest to latest. When data in a partition previous to the latest is being consumed, the connector starts to consume data in the latest partition when the new unit time arrives.
    
-   `STATIC`: Fixed partitions of the partitioned table are consumed. Multiple partitions can be consumed at the same time. Partitions cannot be added or removed during the consumption process. By default, all partitions of the partitioned table are consumed.
    

`partition-binlog-lateness-timeout-minutes`

The maximum latency allowed before a timeout is triggered when data in a partitioned table is dynamically consumed.

Boolean

No

`60`

-   Unit: minutes.
    
-   In dynamic mode, the Hologres connector starts consuming data from the latest partition when a new unit time arrives. However, it does not immediately stops consuming the previous partition. Instead, it continuously monitors the previous partition to ensure all late data is consumed.
    
    For example, in a day-partitioned table with a 60-minute maximum latency, data consumption for the 20240920 partition will extend until 01:00:00 on September 21, 2024, instead of concluding at 00:00:00.
    
-   The option's value cannot exceed the partitioning unit time.
    
    For a table partitioned by day, the maximum value of this option is 24 × 60 = 1440 minutes. In dynamic mode, typically, the connector consumes one partition at a time. However, it can consume two partitions in parallel during the defined max latency period.
    

`partition-values-to-read`

The partitions to be consumed when data in a partitioned table is consumed in static mode.

String

No

No default value

-   If you do not configure this option, the Hologres connector consumes all partitions of the specified table in static mode. If you configure this option, the connector consumes only the specified partitions.
    
-   Provide partition values for this option rather than complete partition names. Separate multiple partition values with commas (`,`). Regular expressions are not supported.
    

### **Sink-specific**

**Option**

**Description**

**Data type**

**Required?**

**Default value**

**Remarks**

`sdkMode`

The SDK mode.

String

No

`jdbc`

-   `jdbc`: Data is written by using a JDBC driver.
    
-   `jdbc_copy`: Data is written in jdbc\_copy mode.
    
    This mode is highly performant in writing streaming data, and is useful for high-throughput, low-latency scenarios. It does not support deleting data, writing to a partitioned table, or the `ignoreNullWhenUpdate` option.
    
-   `rpc`: Data is written in RPC mode. Data of the JSONB or RoarinBitmap type cannot be written to Hologres.
    
-   `jdbc_fixed` (in public preview): Data is written in fixed JDBC mode.
    
    Compared to JDBC mode, fixed JDBC does not occupy connections. Data of the JSONB or RoarinBitmap type cannot be written to Hologres. This mode does not support writing data to a database with [data masking](/help/en/hologres/security-and-compliance/data-masking) enabled.
    

For information about recommended values in different VVR versions, see [Important Notes](/help/en/flink/realtime-flink/developer-reference/hologres-connector/#769ce6511cb2f).

`bulkload`

Specifies whether to write data in bulkload mode.

Boolean

No

`false`

This option takes effect only when the `sdkMode` option is set to `jdbc_copy`. Enable this mode when writing data to tables without a primary key; to write data to tables with a primary key, ensure the uniqueness of primary key values to avoid exceptions. Compared with the jdbc\_copy mode, less Hologres resources are consumed when you write data in bulkload mode.

**Note**

This option is supported when you use VVR 8.0.5 or later and Hologres V2.1 or later.

`useRpcMode`

Specifies whether to use the Hologres connector in RPC mode.

Boolean

No

`false`

-   `true`: Use the RPC mode.
    
-   `false`: Use the JDBC mode.
    
    JDBC drivers require SQL connections, increasing the number of JDBC connections.
    

**Note**

-   Setting this option to `true` has equivalent effects to setting `sdkMode` to `rpc`. In RPC mode, the number of SQL connections is reduced. For more information about the recommended configurations, see [Important Notes](/help/en/flink/realtime-flink/developer-reference/hologres-connector/#769ce6511cb2f).
    
-   When property-version=1, this option is not available.
    

`mutatetype`

The data writing mode.

String

No

`insertorignore`

-   `insertorignore`: Ignores duplicate records.
    
-   `insertorreplace`: Replaces existing rows with duplicate records.
    
-   `insertorupdate`: Updates specified fields for duplicate records, preserving values in other fields.
    
    Consider a table with four fields: `a` (primary key), `b`, `c`, and `d`. Only fields `a` and `b` are defined in the sink table. When an incoming record's primary key value is duplicate, only field `b` is updated while fields `c` and `d` remain unchanged.
    

**Note**

-   If property-version=0, the default value is `insertorignore`.
    
-   If property-version=1, the default value is `insertorupdate`.
    

`partitionrouter`

Specifies whether to write data to a partitioned table.

Boolean

No

`false`

`createparttable`

Specifies whether to automatically create non-existing partitioned tables based on partition values.

Boolean

No

`false`

In RPC mode, if partition values contain hyphens (`-`), new partitioned tables cannot be automatically created.

**Note**

-   For VVR 8.0.3 or later, a partitioned table can be automatically created when you use a field of the DATE type as the partition key.
    
-   Make sure that partition values do not contain dirty data. If dirty data exists, a failover occurs because an invalid partitioned table is created. Proceed with caution when you use this option.
    
-   If you set the `sdk_mode` option to `jdbc_copy`, data cannot be written to a parent partitioned table.
    

`ignoredelete`

Specifies whether to ignore retraction messages.

Boolean

No

`true`

**Note**

-   This option is effective only when the `mutatetype` option is set to `insertorupdate`.
    
-   For VVR 8.0.8 or later, we recommend that you use the `sink.delete-strategy` option instead of this one. If both options are configured, only the `sink.delete-strategy` option takes effect.
    
-   If property-version=0, the default value is `true`.
    
-   If property-version=1, the default value is `false`.
    

`sink.delete-strategy`

Specifies the strategy to process retraction messages.

String

No

No default value

Valid values:

-   `IGNORE_DELETE`: Ignores UPDATE\_BEFORE and DELETE messages. This is ideal for scenarios focused on inserting and updating data and requiring no deletions.
    
-   `NON_PK_FIELD_TO_NULL`: Ignores UPDATE\_BEFORE messages, and handles DELETE messages by updating non-primary key values to null. This strategy enables you to remove specific data without affecting other columns during **partial update**.
    
-   `DELETE_ROW_ON_PK`: Ignores UPDATE\_BEFORE messages and processes DELETE messages by deleting entire rows based on their primary key values. This strategy enables you to delete entire rows during **partial update**.
    
-   `CHANGELOG_STANDARD`: Adheres to the Flink SQL changelog standard: Does not ignore DELETE messages and treats an UPDATE message as a DELETE followed by an INSERT, ensuring data accuracy. **This strategy applies to scenarios without partial update**.
    

**Note**

-   Only VVR 8.0.8 or later supports this option.
    
-   Setting this option to `NON_PK_FIELD_TO_NULL` may result in records with non-primary key values set to null.
    

`connectionSize`

The size of the JDBC connection pool created in a job.

Integer

No

`3`

The size of the JDBC connection pool is proportional to data throughput. If the deployment has poor performance, increase the size of the connection pool.

`jdbcWriteBatchSize`

The maximum number of records that can be buffered by the sink operator in JDBC mode.

Integer

No

`256`

Unit: rows.

**Note**

If you specify all the preceding parameters (jdbcWriteBatchSize, jdbcWriteBatchByteSize, and jdbcWriteFlushInterval), the system writes data to a Hologres sink table when one of the related conditions is met.

`jdbcWriteBatchByteSize`

The maximum number of bytes of data that can be buffered by the sink operator before they are processed at once in JDBC mode.

Long

No

`2097152` (2 × 1024 × 1024 bytes = 2 MB)

**Note**

You can specify only one of the following options: jdbcWriteBatchSize, jdbcWriteBatchByteSize, and jdbcWriteFlushInterval. If you specify all of them, the system writes data to a Hologres sink table when one of the conditions is met.

`jdbcWriteFlushInterval`

The maximum waiting time for the sink operator to buffer data before processing it at once in JDBC mode.

Long

No

`10000`

Unit: milliseconds.

**Note**

You can specify only one of the following options: jdbcWriteBatchSize, jdbcWriteBatchByteSize, and jdbcWriteFlushInterval. If you specify all of them, the system writes data to a Hologres sink table when one of the conditions is met.

`ignoreNullWhenUpdate`

Specifies whether to ignore null values in the data that is written when mutatetype='insertOrUpdate' is specified.

Boolean

No

`false`

-   `false`: Null values are written to the Hologres sink table.
    
-   `true`: Null values in the data that is written are ignored.
    

**Note**

If you set the `sdk_mode` option to `jdbc_copy`, this option is not supported.

`connectionPoolName`

The name of the connection pool. In the same TaskManager, tables for which the same connection pool is configured can share the connection pool.

String

No

No default value

Set this option to any string other than `'default'`. If you set the same connection pool for multiple tables, you must also set the connectionSize options to the same value for these tables.

**Note**

-   VVR 8.0.3 and earlier: By default, each table uses its own connection pool.
    
-   VVR 8.0.4 or later: By default, tables that use the same endpoint in the same job share a connection pool. If the number of tables in a job is high, the connections in a connection pool may be insufficient, which affects job performance. In this case, we recommend that you set the `connectionPoolName` options to different values for different tables.
    
-   Specify this option as needed. Consider a job that involves the following tables: dimension tables `A` and `B` and sink tables `C`, `D`, and `E`. You can configure the connection pool `pool1` for `A` and `B`, the connection pool `pool2` for `C` and `D`, and the connection pool `pool3` for `E` where massive amounts of data is processed.
    

`jdbcEnableDefaultForNotNullColumn`

Specifies whether to allow the Hologres connector to fill a default value if a null value is written to a non-null column for which the default value is not configured in the Hologres table.

Boolean

No

`true`

-   `true`: The connector fills in a default value based on the following rules:
    
    -   If the column is of the STRING type, the column is left empty.
        
    -   If the column is of the NUMBER type, the null value is converted into 0.
        
    -   If the column is of the DATE, TIMESTAMP, or TIMESTAMPTZ type, the null value is converted into **1970-01-01 00:00:00**.
        

-   `false`: The connector does not fill in a default value. If a null value is written to a non-null column, an exception is reported.
    

`remove-u0000-in-text.enabled`

Specifies whether to allow the Hologres connector to remove the invalid characters \\u0000 from STRING data written to the sink table.

Boolean

No

`false`

-   `false`: The connector does not remove the invalid characters, but may report an error, such as `ERROR: invalid byte sequence for encoding "UTF8": 0x00`, when identifying dirty data.
    
    To resolve this error, manually remove the dirty data from the source table or define how to process dirty data in the job code.
    

-   `true`: The connector removes the invalid characters \\u0000.
    

**Important**

-   For VVR 8.0.1 or later, this option is supported only when `sdkMode='jdbc'`.
    
-   For VVR 8.0.8 or later, this option is supported only when `sdkMode='jdbc_copy'` or `sdkMode='jdbc'` is specified.
    
-   If data contains content such as `aaa\00bbb`, enabling this option may cause data mismatches. Proceed with caution.
    

`partial-insert.enabled`

Specifies whether to insert only the fields declared in the INSERT statement.

Boolean

No

`false`

-   `false`: All fields defined in the sink table's DDL statement are updated. Values of fields not declared in the INSERT statement are updated to null.
    
-   `true`: Fields defined in the INSERT statement are pushed down to the connector. This way, only the declared fields are updated or inserted.
    

**Note**

This option takes effect only if the `mutatetype` option is set to `InsertOrUpdate`.

`deduplication.enabled`

Specifies whether to perform deduplication when buffered data is written in JDBC or jdbc\_fixed mode.

Boolean

No

`true`

-   `true`: Retains the latest record in the buffer among those with identical primary key values. Assume the first column serves as the primary key:
    
    -   If `INSERT (1,'a')` and `INSERT (1,'b')` arrive in sequence, only `(1,'b')` is retained and written to Hologres.
        
    -   If the record `(1,'a')` already exists in the Hologres sink table and `DELETE (1,'a')` and `INSERT (1,'b')` arrive in sequence, only `(1,'b')` is retained and written to Hologres. This is equivalent to a direct update operation, instead of a deletion followed by an insertion.
        
-   `false`: Deduplication is not performed during the buffering process. If a new record arrives with a primary key that duplicates one already in the buffer, the connector writes the older record before the new one.
    

**Note**

-   Only VVR 8.0.5 or later supports this option.
    
-   In extreme cases where all data has the same primary key, if no deduplication is performed, data record is written one by one, rather than in batches. This affects the job performance.
    

`check-and-put.column`

Specifies whether to enable the conditional update feature and configure the names of the fields that you want to check.

String

No

No default value

You must set this option to a field name in the Hologres table.

**Important**

-   Only VVR 8.0.11 or later supports this option.
    
-   This option is supported only when the `sdkMode` option is set to `jdbc_fixed` or `jdbc`.
    
-   The sink table must have a primary key, and the `mutateType` option must be set to `Insertorupdate` or `insertorreplace`.
    
-   We recommend that you create a row-based sink table or a hybrid row-column sink table when reverse lookup is required.
    
-   In data with many duplicates, check-and-put operations will degenerate into single writes, which will reduce the write performance.
    

`check-and-put.operator`

The comparison operator for the conditional update operation.

String

No

`GREATER`

This option allows you to compare the check field in the new data record with the check field in the old data record in the table. If the comparison result meets the value of this option, you can perform the conditional update operation.

Valid values: GREATER, GREATER\_OR\_EQUAL, EQUAL, NOT\_EQUAL, LESS, LESS\_OR\_EQUAL, IS\_NULL, and IS\_NOT\_NULL.

**Note**

Only VVR 8.0.11 or later supports this option.

`check-and-put.null-as`

When you perform the conditional update operation, if the old data record is null, the null value is regarded as the valid value of this option.

String

No

No default value

In PostgreSQL, the result of comparing any value with NULL is FALSE. Therefore, when the original data in the table is NULL, you must set NULL-AS as a parameter when you perform the conditional update operation. The NULL-AS parameter equals the COALESCE function in Flink SQL.

**Note**

Only VVR 8.0.11 or later supports this option.

`aggressive.enabled`

Specifies whether to enable the aggressive commit mode.

Boolean

No

`false`

If you set this option to `true`, data will be forced to commit during connection idle periods, even if the configured condition is not met. This reduces data write latency when traffic is low.

**Note**

-   Only VVR 8.0.11 or later supports this option.
    
-   This option is supported only when the `sdkMode` option is set to `jdbc_fixed`, `jdbc`, or `jdbc_copy`.
    

### **Dimension table-specific**

**Option**

**Description**

**Data type**

**Required?**

**Default value**

**Remarks**

`sdkMode`

The SDK mode.

String

No

`jdbc`

-   `jdbc`: Data is queried by using a JDBC driver. Both point queries based on primary keys and queries that are not based on primary keys are supported. However, queries that are not based on primary keys significantly affect the performance and are slow.
    

-   `rpc`: Data is queried in RPC mode. Only point queries based on a primary key are supported. When you join a Hologres dimension table with another table, you must specify all the fields in the primary keys of the dimension table in the ON clause. The difference between RPC mode and JDBC mode is that RPC mode does not occupy connections and does not support reading data of the JSONB or RoarinBitmap type from Hologres.
    
-   `jdbc_fixed`: Data is queried in fixed JDBC mode. The difference between fixed jdbc mode and jdbc mode is that fixed jdbc mode does not occupy connections and does not support reading data of the JSONB or RoarinBitmap type from Hologres. Only point queries based on a primary key are supported. When you join a Hologres dimension table with another table, you must specify all the fields in the primary keys of the dimension table in the ON clause. This mode does not support querying a database for which the [data masking](/help/en/hologres/security-and-compliance/data-masking) feature is enabled.
    

For more information about the recommended values for different VVR versions, see [Important Notes](/help/en/flink/realtime-flink/developer-reference/hologres-connector/#769ce6511cb2f).

`useRpcMode`

Specifies whether to connect to the Hologres connector by using RPC.

Boolean

No

`false`

Valid values:

-   `true`: The Hologres connector is connected by using RPC. The effect of this setting is the same as the effect when you set the `sdkMode` option to `rpc`. If RPC is used, the number of SQL connections is reduced.
    
-   `false`: The Hologres connector is connected by using JDBC.
    
    JDBC drivers require SQL connections. This increases the number of JDBC connections.
    

**Note**

If you set this option to `true`, the effect is the same as the effect when you set the `sdkMode` option to `rpc`. For more information about the recommended operations, see [Important Notes](/help/en/flink/realtime-flink/developer-reference/hologres-connector/#769ce6511cb2f).

`connectionSize`

The size of the JDBC connection pool that is created in a job.

Integer

No

`3`

If the job has poor performance, we recommend that you increase the size of the connection pool. The size of the JDBC connection pool is proportional to data throughput.

`connectionPoolName`

The name of the connection pool. In the same TaskManager, tables for which the same connection pool is configured can share the connection pool.

String

No

No default value

Set this option to any string other than `'default'`. If you set the same connection pool for multiple tables, you must also set the connectionSize option to the same value for these tables.

**Note**

-   VVR 8.0.3 and earlier: By default, each table uses its own connection pool.
    
-   VVR 8.0.4 or later: By default, tables that use the same endpoint in the same job share a connection pool. If the number of tables in a job is high, the connections in a connection pool may be insufficient, which affects job performance. In this case, we recommend that you set the `connectionPoolName` options to different values for different tables.
    
-   Specify this option as needed. Consider a job that involves the following tables: dimension tables `A` and `B` and sink tables `C`, `D`, and `E`. You can configure the connection pool `pool1` for `A` and `B`, the connection pool `pool2` for `C` and `D`, and the connection pool `pool3` for `E` where massive amounts of data is processed.
    

`jdbcReadBatchSize`

The maximum number of records that can be buffered and processed in a single batch for a point lookup on a Hologres dimension table.

Integer

No

`128`

`jdbcReadBatchQueueSize`

The maximum number of queued requests allowed in a thread to perform a point query in a Hologres dimension table.

Integer

No

`256`

`jdbcReadTimeoutMs`

The timeout period for performing a point query in a Hologres dimension table.

Long

No

`0`

The default value `0` means timeout isn't allowed.

`jdbcReadRetryCount`

The number of retries when a point query performed in a Hologres dimension table times out.

Integer

No

-   VVR version earlier than 8.0.5: `1`
    
-   VVR 8.0.5 or later: `10`
    

This option is different from `jdbcRetryCount`. The `jdbcRetryCount` option specifies the maximum number of retries allowed to read and write data if a connection failure occurs.

`jdbcScanFetchSize`

The number of records that can be buffered and processed in a single batch at the same time by calling the scan operation when you perform a one-to-many table join. In a one-to-many table join, no complete primary key is used.

Integer

No

`256`

`jdbcScanTimeoutSeconds`

The maximum timeout period for a scan operation.

Integer

No

`60`

Unit: seconds.

`cache`

The cache policy.

String

No

`None`

Valid values:

-   `None`
    
-   `LRU`
    

`cacheSize`

The maximum number of rows of data that can be cached.

Integer

No

`10000`

This option is available after you set `cache` to **LRU**. Unit: row.

`cacheTTLMs`

The interval at which the system refreshes the cache.

Long

No

See the remarks column.

Unit: milliseconds. The default value of the cacheTTLMs option varies based on the value of the cache parameter:

-   If the `cache` option is set to `LRU`, the cacheTTLMs option specifies the cache timeout period. By default, cache entries do not expire.
    
-   If the `cache` option is set to `None`, you do not need to configure the cacheTTLMs option, which indicates that the cache does not time out.
    

`cacheEmpty`

Specifies whether to cache the JOIN queries whose return results are empty.

Boolean

No

`true`

-   `true`: The JOIN queries whose return results are empty are cached.
    
-   `false`: The JOIN queries whose return results are empty are not cached.
    
    If the condition before AND is met but the condition after AND is not met in a JOIN statement, the JOIN queries whose return results are empty are also cached. The following sample code provides an example:
    
    ```
    LEFT JOIN latest_emergency FOR SYSTEM_TIME AS OF PROCTIME() AS t2
     ON t1.alarm_id = t2.alarm_id -- If dynamic alerting is configured, add the alert id during matching.
     AND CASE
     WHEN alarm_type = 2 THEN t1.dynamic_id = t2.dynamic_alarm_id
     ELSE true
     END
    ```
    

`async`

Specifies whether to return data asynchronously.

Boolean

No

`false`

-   `true`
    
-   `false`
    

**Note**

Data is not sorted when data is synchronized in asynchronous mode.

## Time zones of Realtime Compute for Apache Flink and Hologres

### **Time types**

**Service**

**Type**

**Description**

Flink

[Flink TIMESTAMP](https://nightlies.apache.org/flink/flink-docs-master/zh/docs/dev/table/timezone/#timestamp-%E7%B1%BB%E5%9E%8B)

The date and time without the time zone. Data of the TIMESTAMP type is a timestamp that represents the year, month, day, hour, minute, second, and fractional second. Data of the TIMESTAMP type can be a string, such as `1970-01-01 00:00:04.001`.

[Flink TIMESTAMP\_LTZ](https://nightlies.apache.org/flink/flink-docs-master/zh/docs/dev/table/timezone/#timestamp_ltz-%e7%b1%bb%e5%9e%8b)

Used to describe an absolute point in time on the timeline. Data of the LONG type indicates the number of milliseconds that have elapsed since the epoch time. Data of the INT type indicates the number of nanoseconds in milliseconds. The epoch time refers to 00:00:00 UTC on January 1, 1970 in Java. Data of the TIMESTAMP\_LTZ type is interpreted for calculations and visualization based on the time zone that is configured in the current session. The TIMESTAMP\_LTZ type can be used for calculations across time zones because it represents the same absolute point in time in different time zones based on the epoch time.

The same TIMESTAMP\_LTZ value may reflect different local TIMESTAMP values in different time zones. For example, if a TIMESTAMP\_LTZ value is `2024-03-19T04:00:00Z`, the local timestamp in Shanghai time zone (UTC+8) will be displayed as `2024-03-19T12:00:00`, while in Greenwich time zone (UTC+0) it will be displayed as `2024-03-19T04:00:00`.

Hologres

TIMESTAMP

The date and time without the time zone, which is similar to the `TIMESTAMP` type of Realtime Compute for Apache Flink. Data of the TIMESTAMP type in Hologres does not change even if the time zone of the Hologres client changes. For example, data of the TIMESTAMP type can be expressed as `2022-01-01 01:01:01.123456`.

TIMESTAMP WITH TIME ZONE (TIMESTAMPTZ)

The date and time with the time zone, which is similar to the `TIMESTAMP_LTZ` type of Realtime Compute for Apache Flink. When Hologres stores `TIMESTAMPTZ` data, Hologres converts the data into the values of the time zone in UTC. When you query data, Hologres converts the values of the time zone in UTC into the values of the time zone on the client based on the time zone parameters of the client.

For example, if the timestamp of the time zone of Beijing (UTC+8) is `2022-02-01 10:33:20.125+08` and the timestamp is stored as the TIMESTAMPTZ type in Hologres, the timestamp is expressed as `2022-02-01 10:33:20.125+08`.

### Time zone mappings

-   If you set the `type-mapping.timestamp-converting.legacy` option to `false` in VVR 8.0.6 or later, you can perform conversions of all [time types](/help/en/flink/realtime-flink/developer-reference/hologres-connector/#3f4016e9101ke) between Realtime Compute for Apache Flink and Hologres.
    
    **Flink**
    
    **Hologres**
    
    **Description**
    
    TIMESTAMP
    
    TIMESTAMP
    
    Time type conversions are performed without time zone conversions. We recommend that you use this type of time type conversion to read data from or write data to Hologres.
    
    TIMESTAMP LTZ
    
    TIMESTAMPTZ
    
    TIMESTAMP
    
    TIMESTAMPTZ
    
    Time type conversions are performed with time zone conversions. To maintain accuracy during conversion, you need to set the Flink time zone through `table.local-time-zone`. For more information, see [How do I configure custom running parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp).
    
    For example, you specify `'table.local-time-zone': 'Asia/Shanghai'` to set the time zone of Realtime Compute for Apache Flink to the time zone of Shanghai (UTC+8). After you write the data 2022-01-01 01:01:01.123456 of the TIMESTAMP type from Realtime Compute for Apache Flink to Hologres, the data is converted to 2022-01-01 01:01:01: 01.123456+8 of the TIMESTAMPTZ type.
    
    TIMESTAMP LTZ
    
    TIMESTAMP
    
-   In VVR 8.0.6 or later and you specify `type-mapping.timestamp-converting.legacy=true` or in VVR 8.0.5 or earlier, data deviation may occur during time type conversions except for the conversions of the TIMESTAMP type.
    
    **Flink**
    
    **Hologres**
    
    **Notes**
    
    TIMESTAMP
    
    TIMESTAMP
    
    Time type conversions are performed without time zone conversions. We recommend that you use this type of time type conversion to read data from or write data to Hologres.
    
    TIMESTAMP LTZ
    
    TIMESTAMPTZ
    
    **Data of the TIMESTAMP LTZ and TIMESTAMPTZ types is expressed as the time without the time zone when Realtime Compute for Apache Flink reads data from or write data to Hologres. This may cause data deviation.**
    
    For example, if data of the TIMESTAMP\_LTZ type in Realtime Compute for Apache Flink is 2024-03-19T04:00:00Z, the time without the time zone in Shanghai (UTC+8) is 2024-03-19T12:00:00. However, when data is written to Hologres, 2024-03-19T04:00:00 is used as the time without the time zone and is converted to 2024-03-19T04:00:00+08 of the TIMESTAMPTZ type in Hologres. This causes an 8-hour data deviation.
    
    TIMESTAMP
    
    TIMESTAMPTZ
    
    Time zone conversions are performed based on the time zone of JVM in the runtime environment instead of the time zone of Realtime Compute for Apache Flink. This is different from the time zone conversions in Realtime Compute for Apache Flink. **If the time zone of Realtime Compute for Apache Flink is different from the time zone of JVM, data deviation may occur.** We recommend that you read data from and write data to Hologres based on the time zone of Realtime Compute for Apache Flink.
    
    TIMESTAMP LTZ
    
    TIMESTAMP
