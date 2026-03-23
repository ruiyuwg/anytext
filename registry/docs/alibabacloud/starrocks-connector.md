This topic describes how to use the StarRocks connector.

## Background

StarRocks is a new generation of Massively Parallel Processing (MPP) data warehouses that provide extremely fast query performance in all scenarios. StarRocks is dedicated to providing extremely fast and unified analytics experience. StarRocks provides the following benefits:

-   Is compatible with the MySQL protocol. You can use a MySQL client or a common business intelligence (BI) tool to access StarRocks for data analytics.
    
-   Uses a distributed architecture that provides the following capabilities:
    
    -   Horizontally splits tables and stores data in multiple replicas.
        
    -   Scales clusters in a flexible manner to support analytics of 10 PB of data.
        
    -   Supports the MPP architecture to accelerate data computing.
        
    -   Supports multiple replicas to ensure fault tolerance.
        

Flink connectors cache data and use Stream Load to import data in batches to generate result tables, and read data in batches to generate source tables. The following table describes the capabilities supported by the StarRocks connector.

**Item**

**Description**

Table type

Source table, dimension table, sink table, and data ingestion sink

Running mode

Streaming mode and batch mode

Data format

CSV

Metric

N/A

API type

DataStream API, SQL API, and YAML API for data ingestion

Data update or deletion in a result table

Supported

## Prerequisites

A StarRocks cluster is created. The StarRocks cluster can be a StarRocks cluster of EMR or a self-managed StarRocks cluster that is hosted on Elastic Compute Service (ECS) instances.

## Limitations

-   The StarRocks connector supports only the at-least-once and exactly-once semantics.
    
-   Only Ververica Runtime (VVR) 11.1 or later supports lookup joins with a StarRocks dimension tables.
    
-   To prevent network restrictions, whitelist the following ports for your StarRocks cluster in your security group or firewall: `9030`, `8030`, `8040`, `9060`, `8060`, `9020`.
    

## **SQL statements**

### **Features**

StarRocks of E-MapReduce (EMR) supports the CREATE TABLE AS (CTAS) and CREATE DATABASE AS (CDAS) statements. The CREATE TABLE AS statement can be used to synchronize the schema and data of a single table. The CREATE DATABASE AS statement can be used to synchronize data of an entire database or the schema and data of multiple tables in the same database. For more information, see [Use the CREATE TABLE AS and CREATE DATABASE AS statements of Realtime Compute for Apache Flink to synchronize data from an ApsaraDB RDS for MySQL instance to a StarRocks cluster](/help/en/emr/emr-on-ecs/user-guide/use-the-ctas-and-cdas-statements-of-realtime-compute-for-apache-flink-to-synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-starrocks-cluster#task-2282298).

### **Syntax**

```
CREATE TABLE USER_RESULT(
 name VARCHAR,
 score BIGINT
 ) WITH (
 'connector' = 'starrocks',
 'jdbc-url'='jdbc:mysql://fe1_ip:query_port,fe2_ip:query_port,fe3_ip:query_port?xxxxx',
 'load-url'='fe1_ip:http_port;fe2_ip:http_port;fe3_ip:http_port',
 'database-name' = 'xxx',
 'table-name' = 'xxx',
 'username' = 'xxx',
 'password' = 'xxx'
 );
```

### **Connector options in the WITH clause**

**Category**

**Option**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

General

connector

The table type.

String

Yes

No default value

Set the value to `starrocks`.

jdbc-url

The Java Database Connectivity (JDBC) URL that is used to connect to the database.

String

Yes

No default value

The specified IP address and JDBC port of a frontend (FE) are used. The value of this option is in the `jdbc:mysql://ip:port` format.

database-name

The name of the StarRocks database.

String

Yes

No default value

N/A

table-name

The name of the StarRocks table.

String

Yes

No default value

N/A

username

The username that is used to connect to the StarRocks database.

String

Yes

No default value

N/A

password

The password that is used to connect to the StarRocks database.

String

Yes

No default value

N/A

starrocks.create.table.properties

The properties of the StarRocks table.

String

No

No default value

The initial properties of the StarRocks table, such as the engine and the number of replicas, are specified. Example: 'starrocks.create.table.properties' = 'buckets 8','starrocks.create.table.properties' = 'replication\_num=1'

Source-specific

scan-url

The URL for data scan.

String

No

No default value

The specified IP address and HTTP port of an FE are used. The value of this option is in the `fe_ip:http_port;fe_ip:http_port` format.

**Note**

Separate multiple pairs of IP addresses and port numbers with semicolons (;).

scan.connect.timeout-ms

The timeout period for the StarRocks connector of Realtime Compute for Apache Flink to connect to the StarRocks database.

If the connection duration exceeds the value of this option, an error is returned.

String

No

1000

Unit: milliseconds.

scan.params.keep-alive-min

The keep-alive period of the query task.

String

No

10

N/A

scan.params.query-timeout-s

The timeout period of the query task.

If no query result is returned within the period specified by this option, the query task is stopped.

String

No

600

Unit: seconds.

scan.params.mem-limit-byte

The maximum memory for a single query in a backend (BE) node.

String

No

1073741824 (1 GB)

Unit: bytes.

scan.max-retries

The maximum number of retries when a query fails.

If the number of retries reaches the value of this option, an error is returned.

String

No

1

N/A

Sink-specific

load-url

The URL for data import.

String

Yes

No default value

The specified IP address and HTTP port of an FE are used. The value of this option is in the `fe_ip:http_port;fe_ip:http_port` format.

**Note**

Separate multiple pairs of IP addresses and port numbers with semicolons (;).

sink.semantic

The semantics for data writing.

String

No

at-least-once

Valid values:

-   at-least-once: The at-least-once semantics is used. This is the default value.
    
-   exactly-once: The exactly-once semantics is used.
    

sink.buffer-flush.max-bytes

The maximum amount of data that is allowed in the buffer.

String

No

94371840 (90 MB)

Valid values: 64 MB to 10 GB.

sink.buffer-flush.max-rows

The maximum number of rows that are allowed in the buffer.

String

No

500000

Valid values: 64000 to 5000000.

sink.buffer-flush.interval-ms

The interval at which the buffer is refreshed.

String

No

300000

Valid values: 1000 to 3600000. Unit: milliseconds.

sink.max-retries

The maximum number of retries for writing data to the table.

String

No

3

Valid values: 0 to 10.

sink.connect.timeout-ms

The timeout period for connecting to the StarRocks database.

String

No

1000

Valid values: 100 to 60000. Unit: millisecond.

sink.properties.\*

The properties of the sink table.

String

No

No default value

The import properties of Stream Load. For example, the sink.properties.format property specifies the format of data that is imported in Stream Load mode. The data format can be CSV. For more information about options, see [Stream Load](/help/en/emr/emr-on-ecs/user-guide/stream-load-ecs).

Dimension table-specific

lookup.cache.enabled

Specifies whether to cache dimension tables.

Boolean

No

true

Valid values:

-   true: Enables caching of dimension table data and retrieves data directly from the cache for subsequent queries until timeout. This reduces I/O overhead.
    
-   false: Disables dimension table caching and fetches data directly from the data source.
    

**Important**

-   This option is supported in VVR 11.1 or later.
    
-   Set this option to `false` in the following scenarios:
    
    -   The dimension table is frequently updated and up-to-date data is required.
        
    -   A dimension table has massive amounts of data.
        

### **Data type mappings**

**Data type of StarRocks**

**Data type of Realtime Compute for Apache Flink**

NULL

NULL

BOOLEAN

BOOLEAN

TINYINT

TINYINT

SMALLINT

SMALLINT

INT

INT

BIGINT

BIGINT

BIGINT UNSIGNED

**Note**

Only VVR 8.0.10 or later supports this data type mapping.

DECIMAL(20,0)

LARGEINT

DECIMAL(20,0)

FLOAT

FLOAT

DOUBLE

DOUBLE

DATE

DATE

DATETIME

TIMESTAMP

DECIMAL

DECIMAL

DECIMALV2

DECIMAL

DECIMAL32

DECIMAL

DECIMAL64

DECIMAL

DECIMAL128

DECIMAL

CHAR(m)

**Note**

-   Only Realtime Compute for Apache Flink that uses VVR 8.0.10 allows the length of a CHAR-type column to be automatically extended to three times the length before mapping (m=n × 3, n ≤ 85). This is adapted to the differences in encoding between MySQL and StarRocks.
    
-   Only Realtime Compute for Apache Flink that uses VVR 8.0.11 and later allow the length of a CHAR-type column to be automatically extended to four times the length before mapping (m=n × 4, n ≤ 63). This is adapted to the differences in encoding between MySQL and StarRocks.
    
-   The length of a CHAR-type column in StarRocks cannot exceed 255 bytes. Therefore, only CHAR-type columns whose length does not exceed 255 characters after automatic length extension in Realtime Compute for Apache Flink can be mapped to CHAR-type columns in StarRocks.
    

CHAR(n)

VARCHAR(m)

**Note**

-   Only Realtime Compute for Apache Flink that uses VVR 8.0.10 allows the length of a VARCHAR-type column to be automatically extended to three times the length before mapping (m=n × 4, n > 85). This is adapted to the differences in encoding between MySQL and StarRocks.
    
-   Only Realtime Compute for Apache Flink that uses VVR 8.0.11 and later allow the length of a VARCHAR-type column to be automatically extended to four times the length before mapping (m=n × 4, n > 63). This is adapted to the differences in encoding between MySQL and StarRocks.
    
-   The length of a CHAR-type column in StarRocks cannot exceed 255 bytes. Therefore, only CHAR-type columns whose length exceeds 255 characters after automatic length extension in Realtime Compute for Apache Flink can be mapped to VARCHAR-type columns in StarRocks.
    

CHAR(n)

VARCHAR

STRING

VARBINARY

**Note**

Only VVR 8.0.10 or later supports this data type mapping.

VARBINARY

### **Sample code**

```
CREATE TEMPORARY TABLE IF NOT EXISTS `runoob_tbl_source` (
  `runoob_id` BIGINT NOT NULL,
  `runoob_title` STRING NOT NULL,
  `runoob_author` STRING NOT NULL,
  `submission_date` DATE NULL
) WITH (
  'connector' = 'starrocks',
  'jdbc-url' = 'jdbc:mysql://ip:9030',
  'scan-url' = 'ip:18030',
  'database-name' = 'db_name',
  'table-name' = 'table_name',
  'password' = 'xxxxxxx',
  'username' = 'xxxxx'
);
CREATE TEMPORARY TABLE IF NOT EXISTS `runoob_tbl_sink` (
  `runoob_id` BIGINT NOT NULL,
  `runoob_title` STRING NOT NULL,
  `runoob_author` STRING NOT NULL,
  `submission_date` DATE NULL
  PRIMARY KEY(`runoob_id`)
  NOT ENFORCED
) WITH (
  'jdbc-url' = 'jdbc:mysql://ip:9030',
  'connector' = 'starrocks',
  'load-url' = 'ip:18030',
  'database-name' = 'db_name',
  'table-name' = 'table_name',
  'password' = 'xxxxxxx',
  'username' = 'xxxx',
  'sink.buffer-flush.interval-ms' = '5000'
);

INSERT INTO runoob_tbl_sink SELECT * FROM runoob_tbl_source;
```

**Note**

StarRocks allows nullable primary key columns, but Flink requires primary keys to be non-nullable and unique for data consistency. A nullable primary key in StarRocks will result in the error: `Invalid primary key. Column 'xxx' is nullable`. For more information, see [Why do I get the error "Invalid primary key. Column 'xxx' is nullable." when writing to a table?](/help/en/flink/realtime-flink/support/faq-about-draft-development#f7a9d54e0573b).

## Data ingestion

You can use the StarRocks pipeline connector to easily write data records and table schema changes from upstream data sources to external [StarRocks databases](https://github.com/StarRocks/starrocks). Both open source StarRocks and fully-managed EMR Serverless StarRocks are supported.

### **Features**

-   Automatic database and table creation
    
    If an upstream database and table do not exist in the downstream StarRocks instance, the database and table are automatically created. You can configure the `table.create.properties.*` options to specify the options for automatic table creation.
    
-   Synchronization of table schema changes
    
    The StarRocks connector automatically applies the CreateTableEvent, AddColumnEvent, and DropColumnEvent events to downstream databases.
    
-   Starting from VVR 11.1, compatible column type changes are supported. For more information, see [ALTER TABLE](https://docs.starrocks.io/docs/sql-reference/sql-statements/table_bucket_part_index/ALTER_TABLE/#modify-the-column-type-and-column-position-of-specified-index) in the StarRocks documentation.
    

### **Usage notes**

-   The StarRocks connector supports only at-least-once semantics and uses primary key tables to ensure the idempotence of write operations.
    
-   The table from which data is synchronized must contain a primary key. For tables that do not contain a primary key, you must specify a primary key for each table in the `TRANSFORM` statement block before data in the tables can be written to downstream databases. Sample code:
    
    ```
    transform:
      - source-table: ...
        primary-keys: id, ...
    ```
    
-   The bucket key of an automatically created table must be the same as the primary key, and the table cannot contain partition keys.
    
-   During synchronization of table schema changes, new columns can only be appended to the end of existing columns. By default, the Lenient mode is used for schema evolution. In this mode, columns that are inserted at other positions of a table are automatically moved to the end of existing columns.
    
-   If you use a StarRocks version earlier than 2.5.7, you must explicitly specify the number of buckets by using the `table.create.num-buckets` option. If you use StarRocks 2.5.7 or later, the number of buckets is automatically specified. For more information, see [Data distribution](https://docs.starrocks.io/docs/table_design/data_distribution/).
    
-   If you use StarRocks 3.2 or later, we recommend that you set the `table.create.properties.fast_schema_evolution` option to true to accelerate table schema changes.
    
-   Stream data issues might arise during data ingestion to EMR Serverless StarRocks using Flink CDC. To avoid these issues, use one of these options:
    
    -   Use SQL jobs and set `sink.version=V1` in the job draft.
        
    -   Continue to use Flink CDC, but enable `FE emr_internal_redirect`.
        
    -   Use an EMR Serverless StarRocks instance with built-in Private Zone rather than SLB for load balancing.
        

### **Syntax**

```
source:
  ...

sink:
  type: starrocks
  name: StarRocks Sink
  jdbc-url: jdbc:mysql://127.0.0.1:9030
  load-url: 127.0.0.1:8030
  username: root
  password: pass
  sink.buffer-flush.interval-ms: 5000 # Flush buffered data every 5 seconds.
```

### Connector options

**Option**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

`type`

The connector name.

String

Yes

No default value

Set the value to `starrocks`.

`name`

The display name of the sink.

String

No

No default value

N/A

`jdbc-url`

The JDBC URL that is used to connect to the database.

String

Yes

No default value

You can specify multiple URLs. Separate the URLs with commas (`,`). Example: `jdbc:mysql://fe_host1:fe_query_port1,fe_host2:fe_query_port2,fe_host3:fe_query_port3`.

`load-url`

The HTTP URL that is used to connect to the FE node.

String

Yes

No default value

You can specify multiple URLs. Separate the URLs with semicolons (`;`). Example: `fe_host1:fe_http_port1;fe_host2:fe_http_port2`.

`username`

The username that is used to connect to the StarRocks database.

String

Yes

No default value

The SELECT and INSERT permissions on the destination table must be granted to the user. You can grant the required permissions to the user by using the [GRANT](https://docs.starrocks.io/docs/sql-reference/sql-statements/account-management/GRANT/) command of StarRocks.

`password`

The password that is used to connect to the StarRocks database.

String

Yes

No default value

N/A

`sink.semantic`

The semantics for data writing.

String

No

at-least-once

Valid values:

-   at-least-once: The at-least-once semantics is used. This is the default value.
    
-   exactly-once: The exactly-once semantics is used.
    

`sink.label-prefix`

The label prefix that is used for [Stream Load](https://docs.starrocks.io/docs/faq/loading/Stream_load_faq/).

String

No

No default value

N/A

`sink.connect.timeout-ms`

The timeout period for HTTP connections.

Integer

No

30000

Unit: milliseconds. Valid values: 100 to 60000.

`sink.wait-for-continue.timeout-ms`

The timeout period for the client to wait for a 100 Continue response from the server.

Integer

No

30000

Unit: millisecond. Valid values: 3000 to 600000.

`sink.buffer-flush.max-bytes`

The size of data that can be cached in the memory before data is written to the StarRocks database.

Long

No

157286400

Unit: bytes. Valid values: 64 MB to 10 GB.

**Note**

-   The cache space is shared among all tables. When the cache size reaches the specified value, the connector performs a flush operation on multiple tables.
    
-   To improve the throughput, you can increase the value of this parameter. However, this may increase the data import latency.
    

`sink.buffer-flush.max-rows`

The number of records that can be cached in the memory before data is written to the StarRocks database.

Long

No

500000

Valid values: 64000 to 5000000.

`sink.buffer-flush.interval-ms`

The interval between two consecutive flush operations for each table.

Long

No

300000

Unit: millisecond.

**Note**

For smaller datasets, reduce this option to ensure promptly flushing of buffered data.

`sink.max-retries`

The maximum number of retries.

Long

No

3

Valid values: 0 to 1000.

`sink.scan-frequency.ms`

The interval between two consecutive checks to detect whether a flush operation needs to be performed.

Long

No

50

Unit: millisecond.

`sink.io.thread-count`

The number of threads during data import in the Stream Load mode.

Integer

No

2

N/A

`sink.at-least-once.use-transaction-stream-load`

Specifies whether to use the [Stream Load transaction interface](https://docs.starrocks.io/docs/faq/loading/Stream_load_faq/) for data import.

Boolean

No

true

The setting of this option takes effect only when a supported database is used.

`sink.properties.*`

The additional options that are provided for the sink.

String

No

No default value

You can view the supported options in the [Stream Load](https://docs.starrocks.io/docs/sql-reference/sql-statements/loading_unloading/STREAM_LOAD/) mode.

`table.create.num-buckets`

The number of buckets of an automatically created table.

Integer

No

No default value

-   StarRocks 2.5.7 and later: This option is optional. The number of buckets can be automatically specified. For more information, see [Data distribution](https://docs.starrocks.io/docs/table_design/data_distribution/).
    
-   StarRocks 2.5.6 and earlier: This option is required.
    

`table.create.properties.*`

The additional options to be specified when a table is automatically created.

String

No

No default value

For example, you can add the `'table.create.properties.fast_schema_evolution' = 'true'` configuration to enable the fast schema evolution feature. For more information, see the [StarRocks documentation](https://docs.starrocks.io/docs/table_design/table_types/primary_key_table).

`table.schema-change.timeout`

The timeout duration for a schema change operation.

Duration

No

30 min

The value of this option must be set to an integer. Unit: seconds.

**Note**

If the duration of a schema change operation exceeds the value specified by this option, the deployment fails.

`unicode-char.max-bytes`

The number of bytes to allocate for each Unicode character.

Integer

No

3

In Flink CDC, VARCHAR length is measured in characters, while in StarRocks, it's measured in bytes.

Typically, UTF-8 encoding uses at most 3 bytes per Unicode character. However, some uncommon characters and emoji may require more than 4 bytes.

### **Data type mappings**

**Note**

StarRocks does not support all Change Data Capture (CDC) YAML data types. If you write data of an unsupported type to a downstream database, the job will fail. You can use the built-in function CAST in the transform component to convert unsupported data types or use the projection statement to delete data of unsupported types from the sink table. For more information, see [Data Ingestion with Flink CDC](/help/en/flink/realtime-flink/developer-reference/data-ingestion-development-reference/).

**Data type of CDC**

**Data type of StarRocks**

**Remarks**

TINYINT

TINYINT

N/A.

SMALLINT

SMALLINT

INT

INT

BIGINT

BIGINT

FLOAT

FLOAT

DOUBLE

DOUBLE

BOOLEAN

BOOLEAN

DATE

DATE

TIMESTAMP

DATETIME

TIMESTAMP\_LTZ

DATETIME

DECIMAL(p, s)

DECIMAL(p, s)

StarRocks does not support DECIMAL as the data type of a primary key. Therefore, if a column of the DECIMAL data type in upstream data tables is used as a primary key, the data type of the primary key in the table schema synchronized to StarRocks is automatically changed from DECIMAL to VARCHAR.

CHAR(n)

(n ≤ 85)

CHAR(n × 3)

The length of a CHAR-type column in CDC specifies the number of characters that can be stored. However, the length of a CHAR-type column in StarRocks specifies the number of bytes encoded in UTF-8 that can be stored. In most cases, the length of a UTF-8 encoded Chinese character cannot exceed three bytes. Therefore, after a CHAR-type column in CDC is mapped to a CHAR-type column in StarRocks, the length of the column is three times the length before mapping.

**Note**

-   The length of a CHAR-type column in StarRocks cannot exceed 255 bytes. Therefore, only CDC CHAR-type columns whose length does not exceed 85 characters can be mapped to CHAR-type columns in StarRocks.
    
-   Use `unicode-char.max-bytes` to allocate more bytes for each Unicode character.
    

CHAR(n)

(n > 85)

VARCHAR(n × 3)

The length of a CHAR-type column in CDC specifies the number of characters that can be stored. However, the length of a CHAR-type column in StarRocks specifies the number of bytes encoded in UTF-8 that can be stored. In most cases, the length of a UTF-8 encoded Chinese character cannot exceed three bytes. Therefore, after a CHAR-type column in CDC is mapped to a VARCHAR-type column in StarRocks, the length of the column is three times the length before mapping.

**Note**

-   The length of a CHAR-type column in StarRocks cannot exceed 255 bytes. Therefore, CDC CHAR-type columns whose length is greater than 85 characters are mapped to VARCHAR-type columns in StarRocks.
    
-   Use `unicode-char.max-bytes` to allocate more bytes for each Unicode character.
    

VARCHAR(n)

VARCHAR(n × 3)

The length of a VARCHAR-type column in CDC specifies the number of characters that can be stored. However, the length of a VARCHAR-type column in StarRocks specifies the number of bytes encoded in UTF-8 that can be stored. In most cases, the length of a UTF-8 encoded Chinese character cannot exceed three bytes. Therefore, after a VARCHAR-type column in CDC is mapped to a VARCHAR-type column in StarRocks, the length of the column is three times the length before mapping.

BINARY(n)

BINARY(n+2)

Two padding bytes are added to prevent errors.

VARBINARY(n)

VARBINARY(n+1)

One padding byte is added to prevent errors.

### **Schema evolution**

As a data ingestion sink, StarRocks supports the following schema evolution events:

-   CREATE TABLE
    
    **Note**
    
    If the StarRocks table already exists, the connector does not try to create it again. You must ensure the existing table schema is compatible with the source schema.
    
-   ADD COLUMN
    
    **Note**
    
    StarRocks requires primary key columns are always positioned first. Newly added columns must also adhere to this restriction.
    

-   MODIFY COLUMN TYPE
    
    **Note**
    
    For more information about supported conversions, see the [official StarRocks documentation](https://docs.starrocks.io/docs/sql-reference/sql-statements/table_bucket_part_index/ALTER_TABLE/#modify-the-column-type-position-comment-and-other-properties).
    

-   DROP COLUMN
    
-   TRUNCATE TABLE
    
-   DROP TABLE
