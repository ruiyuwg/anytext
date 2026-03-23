This topic describes how to use the SelectDB connector.

## **Background information**

ApsaraDB for SelectDB is a next-generation real-time data warehouse service. It is a fully managed service on Alibaba Cloud and is 100% compatible with Apache Doris. You can easily purchase ApsaraDB for SelectDB to meet your needs for massive data analytics. For more information about the benefits and scenarios, see [What is ApsaraDB for SelectDB](/help/en/selectdb/product-overview/what-is-xxx-required).

The custom SelectDB connector supports the following features:

**Category**

**Details**

Supported type

Source table, sink table, dimension table, and data ingestion sink

Running mode

Stream and batch

Data format

JSON and CSV

Specific monitoring metrics

None

API type

DataStream and SQL

Update/Delete support

Yes

## **Features**

-   Supports full database data synchronization.
    
-   The SelectDB connector provides exactly-once semantics to ensure that data is not duplicated or lost.
    
-   The connector is compatible with Apache Doris 1.0 or later. You can use the Flink SelectDB custom connector to synchronize data to Apache Doris.
    

## **Usage notes**

-   Only Ververica Runtime (VVR) 8.0.10 or later of Realtime Compute for Apache Flink supports the SelectDB custom connector.
    
-   If you have questions when using the SelectDB custom connector, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket) to ApsaraDB for SelectDB.
    
-   Before you synchronize data to ApsaraDB for SelectDB, meet the following requirements:
    
    -   Create an ApsaraDB for SelectDB instance. For more information, see [Create an instance](/help/en/selectdb/create-an-instance).
        
    -   Configure an IP address whitelist. For more information, see [Configure a whitelist](/help/en/selectdb/configure-ip-address-whitelist).
        

## SQL

### **Usage**

**Note**

The SelectDB connector is built into VVR 11.1 or later. You can skip the following steps.

1.  Click [JAR package](https://repo.maven.apache.org/maven2/org/apache/doris/) to download the SelectDB custom connector (versions 1.15 to 1.17).
    
2.  In the Realtime Compute for Apache Flink development console, upload the SelectDB custom connector. For more information, see [Manage custom connectors](/help/en/flink/realtime-flink/user-guide/manage-custom-connectors).
    
3.  Use the SelectDB custom connector in an SQL job. The value of the connector parameter is fixed to `doris`.
    

### Syntax structure

**Note**

To use the connector as a source table, you must enable direct cluster connection to use the Arrow Flight feature.

In the ApsaraDB for SelectDB console, go to the **Instance Details** > **Network Information** page and click **Enable Direct Cluster Connection**.

```
CREATE TABLE selectdb_source (
  order_id      BIGINT,
  user_id       BIGINT,
  total_amount  DECIMAL(10, 2),
  order_status  TINYINT,
  create_time   TIMESTAMP(3),
  product_name  STRING COMMENT
) WITH (
  'connector' = 'doris',
  'fenodes' = 'selectdb-cn-*******.selectdbfe.rds.aliyuncs.com:8080',
  'table.identifier' = 'shop_db.orders',
  'username' = 'admin',
  'password' = '****'
);
```

### **WITH parameters**

-   **General**
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The table type.
    
    String
    
    Yes
    
    None
    
    The value is fixed to `doris`.
    
    fenodes
    
    The access address and HTTP protocol port of the ApsaraDB for SelectDB instance.
    
    String
    
    Yes
    
    None
    
    You can get the **VPC Address** (or **Public Address**) and **HTTP Protocol Port** from the **Instance Details** > **Network Information** page in the ApsaraDB for SelectDB console.
    
    Example: `selectdb-cn-****.selectdbfe.rds.aliyuncs.com:8080`.
    
    jdbc-url
    
    The Java Database Connectivity (JDBC) connection information.
    
    String
    
    No
    
    None
    
    You can obtain the **VPC Address** (or **Public Address**) and **MySQL Protocol Port** from the **Instance Details** **\>** **Network Information** page in the ApsaraDB for SelectDB console.
    
    Example: `jdbc:mysql://selectdb-cn-***.selectdbfe.rds.aliyuncs.com:9030`.
    
    table.identifier
    
    The database table name.
    
    String
    
    Yes
    
    None
    
    Example: `db.tbl`.
    
    username
    
    The username.
    
    String
    
    Yes
    
    None
    
    If you forget the password, you can reset it in the upper-right corner of the **Instance Details** page in the ApsaraDB for SelectDB console.
    
    password
    
    The password.
    
    String
    
    Yes
    
    None
    
    doris.request.retries
    
    The number of retries for sending a request.
    
    Integer
    
    No
    
    3
    
    None.
    
    doris.request.connect.timeout
    
    The connection timeout for sending a request.
    
    Duration
    
    No
    
    30s
    
    None.
    
    doris.request.read.timeout
    
    The read timeout for sending a request.
    
    Duration
    
    No
    
    30s
    
    None.
    
-   **Source table specific**
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    doris.request.query.timeout
    
    The query timeout. The default value is 6 hours.
    
    Duration
    
    No
    
    21600s
    
    The value is fixed to `doris`.
    
    doris.request.tablet.size
    
    The number of tablets corresponding to a partition.
    
    Integer
    
    No
    
    1
    
    A smaller value generates more partitions. This increases the degree of parallelism on the Flink side but also puts more pressure on the database.
    
    doris.batch.size
    
    The maximum number of rows to read from a BE at a time.
    
    Integer
    
    No
    
    4064
    
    Increasing this value can reduce the number of connections established between Flink and the database. This reduces the extra time overhead caused by network latency.
    
    doris.exec.mem.limit
    
    The memory limit for a single query.
    
    Integer
    
    No
    
    8192mb
    
    The default value is 8 GB. The unit is bytes.
    
    source.use-flight-sql
    
    Specifies whether to use Arrow Flight SQL for reading.
    
    Boolean
    
    No
    
    false
    
    **No configuration is required.** Simply go to the **Instance Details** > **Network Information** page in the ApsaraDB for SelectDB console and click **Enable Direct Cluster Connection**.
    
    source.flight-sql-port
    
    The arrow\_flight\_sql\_port of the FE when reading with Arrow Flight SQL.
    
    Integer
    
    No
    
    \-
    
    None.
    
-   **Sink table specific**
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    sink.label-prefix
    
    The label prefix used for Stream Load imports.
    
    String
    
    No
    
    \--
    
    The prefix must be globally unique across multiple jobs to ensure the exactly-once semantics of Flink. The same label can be imported only once to prevent duplicate writes.
    
    sink.properties.\*
    
    The import parameters for Stream Load.
    
    String
    
    No
    
    \--
    
    **CSV format configuration**
    
    ```
    'sink.properties.column_separator' = ',', -- Use a comma as the delimiter
    -- If the data may contain commas, use a non-printable character, such as:
    -- 'sink.properties.column_separator' = '\x01'
    ```
    
    **JSON format configuration**
    
    ```
    'sink.properties.format' = 'json',
    'sink.properties.read_json_by_line' = 'true' -- or use strip_outer_array
    ```
    
    sink.enable-delete
    
    Specifies whether to enable deletion. This option requires the Doris table to have batch deletion enabled.
    
    Boolean
    
    No
    
    true
    
    Only the Unique model is supported.
    
    sink.enable-2pc
    
    Specifies whether to enable the two-phase commit protocol (2PC).
    
    Boolean
    
    No
    
    true
    
    Ensures exactly-once semantics. For more information about 2PC, see [Explicit Transaction Operations](https://doris.apache.org/zh-CN/docs/4.x/data-operate/transaction/#streamload-2pc).
    
    sink.buffer-size
    
    The size of the data write cache buffer.
    
    Integer
    
    No
    
    1 MB
    
    The unit is bytes. We recommend that you do not modify this parameter. Use the default configuration.
    
    sink.buffer-count
    
    The number of data write cache buffers.
    
    Integer
    
    No
    
    3
    
    We recommend that you do not modify this parameter. Use the default configuration.
    
    sink.max-retries
    
    The maximum number of retries after a commit fails.
    
    Integer
    
    No
    
    3
    
    None.
    
    sink.enable.batch-mode
    
    Specifies whether to use batch mode for writing.
    
    Boolean
    
    No
    
    false
    
    If enabled, the write timing does not depend on checkpoints. It is controlled by the `sink.buffer-flush.max-rows/sink.buffer-flush.max-bytes/sink.buffer-flush.interval` parameters.
    
    If enabled, exactly-once semantics are not guaranteed. However, you can achieve idempotence using the Uniq model.
    
    sink.flush.queue-size
    
    The size of the cache queue in batch mode.
    
    Integer
    
    No
    
    2
    
    None.
    
    sink.buffer-flush.max-rows
    
    The maximum number of data rows to write in a single batch in batch mode.
    
    Integer
    
    No
    
    500000
    
    None.
    
    sink.buffer-flush.max-bytes
    
    The maximum number of bytes to write in a single batch in batch mode.
    
    Integer
    
    No
    
    100 MB
    
    The unit is bytes.
    
    sink.buffer-flush.interval
    
    The interval for asynchronously flushing the cache in batch mode.
    
    String
    
    No
    
    10s
    
    The unit is milliseconds.
    
    sink.ignore.update-before
    
    Specifies whether to ignore update-before events.
    
    Boolean
    
    No
    
    true
    
    None.
    
-   **Dimension table specific**
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    lookup.cache.max-rows
    
    The maximum number of rows for the lookup cache.
    
    Integer
    
    No
    
    \-1
    
    A value of `-1` means that caching is disabled by default.
    
    lookup.cache.ttl
    
    The maximum time-to-live (TTL) for the lookup cache.
    
    String
    
    No
    
    10s
    
    The unit is milliseconds.
    
    lookup.max-retries
    
    The number of retries after a lookup query fails.
    
    Integer
    
    No
    
    1
    
    None.
    
    lookup.jdbc.async
    
    Specifies whether to enable asynchronous lookup.
    
    Boolean
    
    No
    
    false
    
    None.
    
    lookup.jdbc.read.batch.size
    
    The maximum batch size for each query in asynchronous lookup.
    
    Integer
    
    No
    
    128
    
    None.
    
    lookup.jdbc.read.batch.queue-size
    
    The size of the intermediate buffer queue during asynchronous lookup.
    
    Integer
    
    No
    
    256
    
    None.
    
    lookup.jdbc.read.thread-size
    
    The number of JDBC lookup threads in each task.
    
    Integer
    
    No
    
    3
    
    None.
    

### **Usage examples**

## Source table

```
CREATE TEMPORARY TABLE selectdb_source (
  order_id      BIGINT,
  user_id       BIGINT,
  total_amount  DECIMAL(10, 2),
  order_status  TINYINT,
  create_time   TIMESTAMP(3),
  product_name  STRING COMMENT
) WITH (
  'connector' = 'doris',
  'fenodes' = 'selectdb-cn-*******.selectdbfe.rds.aliyuncs.com:8080',
  'table.identifier' = 'shop_db.orders',
  'username' = 'admin',
  'password' = '****'
);
```

## Sink table

```
CREATE TEMPORARY TABLE selectdb_source (
  order_id      BIGINT,
  user_id       BIGINT,
  total_amount  DECIMAL(10, 2),
  order_status  TINYINT,
  create_time   TIMESTAMP(3),
  product_name  STRING COMMENT
) WITH (
  'connector' = 'doris',
  'fenodes' = 'selectdb-cn-*******.selectdbfe.rds.aliyuncs.com:8080',
  'table.identifier' = 'shop_db.orders',
  'username' = 'admin',
  'password' = '****',
--  'sink.label-prefix' = 'flink_orders' -- The same label can be imported only once to prevent duplicate writes.
);
```

## Dimension table

```
CREATE TEMPORARY TABLE fact_table (
  `id` BIGINT,
  `name` STRING,
  `city` STRING,
  `process_time` as proctime()
) WITH (
  'connector' = 'kafka',
  ...
);

create TEMPORARY table dim_city(
  `city` STRING,
  `level` INT ,
  `province` STRING,
  `country` STRING
) WITH (
  'connector' = 'doris',
  'fenodes' = 'selectdb-cn-*******.selectdbfe.rds.aliyuncs.com:8080',
  'jdbc-url' = 'jdbc:mysql://selectdb-cn-***.selectdbfe.rds.aliyuncs.com:9030',
  'table.identifier' = 'dim.dim_city',
  'username' = 'admin',
  'password' = '****'
);

SELECT a.id, a.name, a.city, c.province, c.country,c.level 
FROM fact_table a
LEFT JOIN dim_city FOR SYSTEM_TIME AS OF a.process_time AS c
ON a.city = c.city
```

## Data ingestion

Use the SelectDB connector as a sink to write data in YAML jobs for data ingestion.

### Syntax structure

```
source:
   type: xxx

sink:
   type: doris
   name: Doris Sink
   fenodes: selectdb-cn-****.selectdbfe.rds.aliyuncs.com:8080
   username: root
   password: ""
```

### **Configuration items**

Parameter

Description

Required

Default value

Data type

Remarks

type

The sink type.

Yes

(none)

String

The value is fixed to `doris`.

name

The sink name.

No

(none)

String

None.

fenodes

The access address and HTTP protocol port of the ApsaraDB for SelectDB instance.

Yes

(none)

String

You can get the **VPC Address** (or **Public Address**) and **HTTP Protocol Port** from the **Instance Details** > **Network Information** page in the ApsaraDB for SelectDB console.

Example: `selectdb-cn-****.selectdbfe.rds.aliyuncs.com:8080`.

jdbc-url

The JDBC connection information of the ApsaraDB for SelectDB instance.

No

(none)

String

You can obtain the **VPC Address** (or **Public Address**) and **MySQL Protocol Port** from the **Instance Details** **\>** **Network Information** page in the ApsaraDB for SelectDB console.

Example: `jdbc:mysql://selectdb-cn-***.selectdbfe.rds.aliyuncs.com:9030`.

username

The database username of the ApsaraDB for SelectDB instance.

Yes

(none)

String

If you forget the password, you can reset it in the upper-right corner of the **Instance Details** page in the ApsaraDB for SelectDB console.

password

The password that corresponds to the database username of the ApsaraDB for SelectDB instance.

Yes

(none)

String

sink.enable.batch-mode

Specifies whether to use batch mode to write to SelectDB.

No

true

Boolean

If enabled, the write timing does not depend on checkpoints. It is controlled by the `sink.buffer-flush.max-rows/sink.buffer-flush.max-bytes/sink.buffer-flush.interval` parameters.

If enabled, exactly-once semantics are not guaranteed. However, you can achieve idempotence using the Uniq model.

sink.flush.queue-size

The size of the cache queue in batch processing mode.

No

2

Integer

Queue size for batch writing.

sink.buffer-flush.max-rows

The maximum number of data rows to write in a single batch in batch processing mode.

No

500000

Integer

None.

sink.buffer-flush.max-bytes

The maximum number of bytes to write in a single batch in batch processing mode.

No

100 MB

Integer

None.

sink.buffer-flush.interval

The interval for asynchronously flushing the cache in batch processing mode. The minimum value is 1s.

No

10s

String

None.

sink.properties.\*

The import parameters for Stream Load.

No

(none)

String

**CSV format configuration**

```
sink.properties.column_separator: ',' # Use a comma as the delimiter
# If the data may contain commas, use a non-printable character, such as:
# sink.properties.column_separator: '\x01'
```

**JSON format configuration**

```
sink.properties.format: 'json'
sink.properties.read_json_by_line: 'true' # or use strip_outer_array
```

### Type mapping

Flink CDC Type

SelectDB Type

TINYINT

TINYINT

SMALLINT

SMALLINT

INT

INT

BIGINT

BIGINT

DECIMAL

DECIMAL

FLOAT

FLOAT

DOUBLE

DOUBLE

BOOLEAN

BOOLEAN

DATE

DATE

TIMESTAMP \[(p)\]

DATETIME \[(p)\]

TIMESTAMP\_LTZ \[(p)\]

DATETIME \[(p)\]

CHAR(n)

CHAR(n\*3)

**Note**

In Doris, strings are stored in UTF-8 encoding. An English character occupies 1 byte, and a Chinese character occupies 3 bytes. Therefore, the length is multiplied by 3. The maximum length of a CHAR type is 255. If the length exceeds this limit, the type is automatically converted to VARCHAR.

VARCHAR(n)

VARCHAR(n\*3)

**Note**

Same as above. The length is multiplied by 3. The maximum length of a VARCHAR type is 65533. If the length exceeds this limit, the type is automatically converted to STRING.

BINARY(n)

STRING

VARBINARY(N)

STRING

STRING

STRING
