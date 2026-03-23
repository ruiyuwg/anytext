This topic describes how to use the ApsaraDB for HBase connector.

## Background information

[ApsaraDB for HBase](/help/en/hbase/product-overview/what-is-apsaradb-for-hbase#concept-2659140) is a cost-effective cloud-based intelligent NoSQL service that provides high scalability and is compatible with open source HBase. ApsaraDB for HBase provides benefits such as low storage costs, high throughput and scalability, and intelligent data processing. ApsaraDB for HBase supports core services of Alibaba such as Taobao recommendations, risk control for Ant Credit Pay, advertising, data dashboards, Cainiao logistics track, Alipay transaction records, and Taobao Mobile messages. ApsaraDB for HBase is a fully managed service that provides enterprise-level capabilities such as the processing of petabytes of data, high concurrency, quick scaling within seconds, low response latency within milliseconds, high availability across data centers, and global distribution.

The following table describes the capabilities supported by the ApsaraDB for HBase connector.

**Item**

**Description**

Table type

Dimension table and sink table

Running mode

Streaming mode

Data format

N/A

Metric

**监控指标**

-   Source
    
    None
    
-   Dimension tables
    
    None
    
-   Sink
    
    numBytesOut, numBytesOutPerSecond, numRecordsOut, numRecordsOutPerSecond, and currentSendTime
    
    **Note**
    
    For more information about the metrics, see [Metrics](/help/en/flink/realtime-flink/user-guide/metrics).
    

API type

SQL API

Data update or deletion in a sink table

Supported

## Prerequisites

-   An ApsaraDB for HBase cluster is purchased and an ApsaraDB for HBase table is created. For more information about how to purchase an ApsaraDB for HBase cluster, see [Purchase a cluster](/help/en/hbase/getting-started/purchase-a-standard-edition-cluster#task-2046768).
    
-   A whitelist is configured for the ApsaraDB for HBase cluster. For more information, see [Configure a whitelist](/help/en/hbase/getting-started/configure-a-whitelist-for-standard-edition#concept-2659423).
    

## Usage notes

Before you use the ApsaraDB for HBase connector, confirm the type of your database instance and make sure that the type of the selected connector is correct. If the connector is improperly used, unexpected issues may occur.

-   The ApsaraDB for HBase connector described in this topic is used for ApsaraDB for HBase instances.
    
-   Lindorm instances are compatible with Apache HBase. Use the Lindorm connector for Lindorm instances. For more information, see [Lindorm](/help/en/flink/realtime-flink/developer-reference/lindorm-connector).
    
-   If you use the ApsaraDB for HBase connector to connect Realtime Compute for Apache Flink to an open source HBase database, data validity cannot be ensured.
    

## Syntax

```
CREATE TABLE hbase_table(
  rowkey INT,
  family1 ROW<q1 INT>,
  family2 ROW<q2 STRING, q3 BIGINT>,
  family3 ROW<q4 DOUBLE, q5 BOOLEAN, q6 STRING>
) WITH (
  'connector'='cloudhbase',
  'table-name'='<yourTableName>',
  'zookeeper.quorum'='<yourZookeeperQuorum>'
);
```

-   Column families of an ApsaraDB for HBase table must be declared as the ROW type. Each column family name is the field name of a row. In the DDL syntax, the following column families are declared: family1, family2, and family3.
    
-   A column in a column family corresponds to a field in a row. The column name is the field name. In the DDL syntax, the q2 and q3 columns are declared in the family2 column family.
    
-   In addition to the fields of the ROW type, only one field of the atomic type such as STRING and BIGINT can exist in an ApsaraDB for HBase table. The field of the atomic type is considered as the row key of the table, such as rowkey in the DDL statement.
    
-   The row key of an ApsaraDB for HBase table must be defined as the primary key of the sink table. If no primary key is defined, the row key is used as the primary key.
    
-   You need to only declare the required column families and columns of an ApsaraDB for HBase table in the sink table.
    

## Connector options in the WITH clause

-   General
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The type of the table.
    
    String
    
    Yes
    
    No default value
    
    Set the value to `cloudhbase`.
    
    table-name
    
    The name of the ApsaraDB for HBase table.
    
    String
    
    Yes
    
    No default value
    
    N/A.
    
    zookeeper.znode.quorum
    
    The URL that is used to access the ZooKeeper service of ApsaraDB for HBase.
    
    String
    
    Yes
    
    No default value
    
    N/A.
    
    zookeeper.znode.parent
    
    The root directory of ApsaraDB for HBase in the ZooKeeper service.
    
    String
    
    No
    
    `/hbase`
    
    This parameter takes effect only in the ApsaraDB for HBase Standard Edition.
    
    userName
    
    The username that is used to access the database.
    
    String
    
    No
    
    No default value
    
    This parameter takes effect only in the ApsaraDB for HBase Performance-enhanced Edition.
    
    password
    
    The password that is used to access the database.
    
    String
    
    No
    
    No default value
    
    This parameter takes effect only in the ApsaraDB for HBase Performance-enhanced Edition.
    
    haclient.cluster.id
    
    The ID of the ApsaraDB for HBase cluster in high availability (HA) mode.
    
    String
    
    No
    
    No default value
    
    This parameter is required only when you access zone-disaster recovery clusters. This parameter takes effect only in the ApsaraDB for HBase Performance-enhanced Edition.
    
    retires.number
    
    The number of retries that are allowed for the ApsaraDB for HBase client to connect to the ApsaraDB for HBase database.
    
    Integer
    
    No
    
    31
    
    N/A.
    
    null-string-literal
    
    If the data type of a field of ApsaraDB for HBase is STRING and the field data of Realtime Compute for Apache Flink is null, `null-string-literal` is assigned to the field of ApsaraDB for HBase and is written to the ApsaraDB for HBase database.
    
    String
    
    No
    
    null
    
    N/A.
    
-   Sink-specific
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    sink.buffer-flush.max-size
    
    The size of data in bytes cached in the memory before data is written to the ApsaraDB for HBase database. A larger value of this parameter improves the write performance of ApsaraDB for HBase but prolongs the write latency and consumes more memory.
    
    String
    
    No
    
    2MB
    
    Unit: B, KB, MB, or GB. The unit is not case-sensitive. If this parameter is set to 0, no data is cached.
    
    sink.buffer-flush.max-rows
    
    The number of data records cached in the memory before data is written to the ApsaraDB for HBase database. A larger value of this parameter improves the write performance of ApsaraDB for HBase but prolongs the write latency and consumes more memory.
    
    Integer
    
    No
    
    1000
    
    If this parameter is set to 0, no data is cached.
    
    sink.buffer-flush.interval
    
    The interval at which cached data is written to the ApsaraDB for HBase database. This parameter controls the latency of writing data to the ApsaraDB for HBase database.
    
    Duration
    
    No
    
    1s
    
    Unit: ms, s, min, h, or d. If this parameter is set to 0, periodic data writing is disabled.
    
    dynamic.table
    
    Specifies whether to use an ApsaraDB for HBase table that supports dynamic columns.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true
        
    -   false
        
    
    sink.ignore-delete
    
    Specifies whether to ignore retraction messages.
    
    Boolean
    
    No
    
    false
    
    If a stream contains `DELETE` or `UPDATE_BEFORE` events, and multiple sink tasks concurrently update a table's different fields, data inconsistency can occur.
    
    For example, after a record is deleted, another task updates some fields. Un-updated fields will then become null or be filled with default values, causing data errors.
    
    To prevent this issue, set `sink.ignore-delete` to `true` to ignore upstream `DELETE` and `UPDATE_BEFORE` events.
    
    **Note**
    
    -   `UPDATE_BEFORE` is part of Flink's retraction mechanism and is used to retract the old value during an update operation.
        
    -   If `ignoreDelete` is set to `true`, all `DELETE` and `UPDATE_BEFORE` events are skipped. Only `INSERT` and `UPDATE_AFTER` records are processed.
        
    
    sink.sync-write
    
    Specifies whether to write data to ApsaraDB for HBase in synchronous mode.
    
    Boolean
    
    No
    
    true
    
    Valid values:
    
    -   true: Data is written in synchronous mode. In this mode, data is written in sequence but the write performance is compromised.
        
    -   false: Data is written in asynchronous mode. In this mode, data may not be written in sequence but the write performance is improved.
        
    
    sink.buffer-flush.batch-rows
    
    The number of data records that are cached in the memory when data is written to ApsaraDB for HBase in synchronous mode. A larger value improves the write performance of ApsaraDB for HBase, but increases the write latency and memory usage.
    
    Integer
    
    No
    
    100
    
    This parameter takes effect only when the sink.sync-write parameter is set to true.
    
    sink.ignore-null
    
    Specifies whether to ignore null values.
    
    Boolean
    
    No
    
    false
    
    **Note**
    
    -   If this parameter is set to true, the `null-string-literal` parameter does not take effect.
        
    -   Only Realtime Compute for Apache Flink that uses VVR 8.0.9 or later supports this parameter.
        
    
-   Dimension-specific options (cache-related)
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    cache
    
    The cache policy.
    
    String
    
    No
    
    ALL
    
    Valid values:
    
    -   None: No data is cached.
        
    -   LRU: Only specific data in the dimension table is cached. Each time the system receives a data record, the system searches the cache. If the system does not find the record in the cache, the system searches for the data record in the physical dimension table.
        
        **Note**
        
        If this cache policy is used, you must configure the cacheSize and cacheTTLMs parameters.
        
    -   ALL: All data in the dimension table is cached. This is the default value. Before a job runs, the system loads all data in the dimension table to the cache. This way, the cache is searched for all subsequent queries in the dimension table. If the system does not find the data record in the cache, the join key does not exist. The system reloads all data in the cache after cache entries expire.
        
        **Note**
        
        -   If the amount of data in a remote table is small and a large number of missing keys exist, we recommend that you set this parameter to ALL. The source table and dimension table cannot be associated based on the ON clause. If you use this cache policy, you must configure the cacheTTLMs and cacheReloadTimeBlackList parameters.
            
        -   If all data in the dimension table is loaded to the cache, the startup speed of the deployment may slow down. You can flexibly configure the cache policy based on your business requirements.
            
        
    
    If you set the cache parameter to ALL, you must increase the memory of the node for joining tables because the system asynchronously loads data from the dimension table. The increased memory size is twice that of the remote table.
    
    cacheSize
    
    The maximum number of rows of data that can be cached.
    
    Long
    
    No
    
    10000
    
    You can configure this parameter when you set the cache parameter to LRU.
    
    cacheTTLMs
    
    The cache timeout period. Unit: milliseconds.
    
    Long
    
    No
    
    No default value
    
    The configuration of the cacheTTLMs parameter varies based on the **cache** parameter.
    
    -   If you set the cache parameter to None, the cacheTTLMs parameter can be left empty. This indicates that cache entries do not expire.
        
    -   If you set the cache parameter to LRU, the cacheTTLMs parameter specifies the cache timeout period. By default, cache entries do not expire.
        
    -   If you set the cache parameter to ALL, the cacheTTLMs parameter specifies the interval at which the system reloads the cache. By default, the cache is not reloaded.
        
    
    cacheEmpty
    
    Specifies whether to cache empty results.
    
    Boolean
    
    No
    
    true
    
    N/A.
    
    cacheReloadTimeBlackList
    
    The time periods during which cache is not refreshed. This parameter takes effect when the cache parameter is set to ALL. The cache is not refreshed during the periods of time that you specify for this parameter. This parameter is suitable for large-scale online promotional events such as Double 11.
    
    String
    
    No
    
    No default value
    
    The following example shows the format of the values: **2017-10-24 14:00 -> 2017-10-24 15:00**, **2017-11-10 23:30 -> 2017-11-11 08:00**. Use delimiters based on the following rules:
    
    -   Separate multiple time periods with commas (,).
        
    -   Separate the start time and end time of each time period with an arrow (->) that is a combination of a hyphen (-) and a closing angle bracket (>).
        
    
    cacheScanLimit
    
    The number of rows that the remote procedure call (RPC) server returns to a client when the server reads full data from an ApsaraDB for HBase dimension table.
    
    Integer
    
    No
    
    100
    
    This parameter is available only when you set the cache parameter to ALL.
    

## Data type mappings

A value of a data type of Realtime Compute for Apache Flink is converted into a byte array by using `org.apache.hadoop.hbase.util.Bytes` in an ApsaraDB for HBase table. The decoding process varies based on the following scenarios:

-   If the data type of Realtime Compute for Apache Flink is a non-STRING type and a value in the ApsaraDB for HBase table is an empty byte array, the value is decoded as null.
    
-   If the data type of Realtime Compute for Apache Flink is the STRING type and a value in the ApsaraDB for HBase dimension table is the byte array specified by `null-string-literal`, the value is decoded as null.
    

**Flink SQL type**

**Function used to convert a value into bytes for ApsaraDB for HBase**

**Function used to read bytes from ApsaraDB for HBase**

CHAR

byte\[\] toBytes(String s)

String toString(byte\[\] b)

VARCHAR

STRING

BOOLEAN

byte\[\] toBytes(boolean b)

boolean toBoolean(byte\[\] b)

BINARY

byte\[\]

byte\[\]

VARBINARY

DECIMAL

byte\[\] toBytes(BigDecimal v)

BigDecimal toBigDecimal(byte\[\] b)

TINYINT

new byte\[\] { val }

bytes\[0\]

SMALLINT

byte\[\] toBytes(short val)

short toShort(byte\[\] bytes)

INT

byte\[\] toBytes(int val)

int toInt(byte\[\] bytes)

BIGINT

byte\[\] toBytes(long val)

long toLong(byte\[\] bytes)

FLOAT

byte\[\] toBytes(float val)

float toFloat(byte\[\] bytes)

DOUBLE

byte\[\] toBytes(double val)

double toDouble(byte\[\] bytes)

DATE

Converts a date into an INT value that represents the number of days since January 1, 1970 and then into a byte array by using `byte[] toBytes(int val)`.

Converts a byte array of the ApsaraDB for HBase database into the INT data type by using `int toInt(byte[] bytes)`. The value of the INT data type represents the number of days since January 1, 1970.

TIME

Converts a time into an INT value that represents the number of milliseconds since 00:00:00 and then into a byte array by using `byte[] toBytes(int val)`.

Converts a byte array of the ApsaraDB for HBase database into the INT data type by using `int toInt(byte[] bytes)`. The value of the INT data type represents the number of milliseconds since 00:00:00.

TIMESTAMP

Converts a timestamp into a LONG value that represents the number of milliseconds since 00:00:00 on January 1, 1970 and then into a byte array by using `byte[] toBytes(long val)`.

Converts a byte array of the ApsaraDB for HBase database into the LONG data type by using `long toLong(byte[] bytes)`. The value of the LONG data type represents the number of milliseconds since 00:00:00 on January 1, 1970.

## Sample code

-   Sample code for a dimension table
    
    ```
    CREATE TEMPORARY TABLE datagen_source (
      a INT,
      b BIGINT,
      c STRING,
      `proc_time` AS PROCTIME()
    ) WITH (
      'connector'='datagen'
    );
    
    CREATE TEMPORARY TABLE hbase_dim (
      rowkey INT,
      family1 ROW<col1 INT>,
      family2 ROW<col1 STRING, col2 BIGINT>,
      family3 ROW<col1 DOUBLE, col2 BOOLEAN, col3 STRING>
    ) WITH (
      'connector' = 'cloudhbase',
      'table-name' = '<yourTableName>',
      'zookeeper.quorum' = '<yourZookeeperQuorum>'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink(
      a INT,
      f1c1 INT,
      f3c3 STRING
    ) WITH (
      'connector' = 'blackhole'
    );
    
    INSERT INTO blackhole_sink
         SELECT a, family1.col1 as f1c1,  family3.col3 as f3c3 FROM datagen_source
    JOIN hbase_dim FOR SYSTEM_TIME AS OF datagen_source.`proc_time` as h ON datagen_source.a = h.rowkey;
    ```
    
-   Sample code for a sink table
    
    ```
    CREATE TEMPORARY TABLE datagen_source (
      rowkey INT,
      f1q1 INT,
      f2q1 STRING,
      f2q2 BIGINT,
      f3q1 DOUBLE,
      f3q2 BOOLEAN,
      f3q3 STRING
    ) WITH (
      'connector'='datagen'
    );
    
    CREATE TEMPORARY TABLE hbase_sink (
      rowkey INT,
      family1 ROW<q1 INT>,
      family2 ROW<q1 STRING, q2 BIGINT>,
      family3 ROW<q1 DOUBLE, q2 BOOLEAN, q3 STRING>,
      PRIMARY KEY (rowkey) NOT ENFORCED
    ) WITH (
      'connector'='cloudhbase',
      'table-name'='<yourTableName>',
      'zookeeper.quorum'='<yourZookeeperQuorum>'
    );
     
    INSERT INTO hbase_sink
    SELECT rowkey, ROW(f1q1), ROW(f2q1, f2q2), ROW(f3q1, f3q2, f3q3) FROM datagen_source;
    ```
    
-   Sample code for a sink table that supports dynamic columns
    
    ```
    CREATE TEMPORARY TABLE datagen_source (
      id INT,
      f1hour STRING,
      f1deal BIGINT,
      f2day STRING,
      f2deal BIGINT
    ) WITH (
      'connector'='datagen'
    );
    
    CREATE TEMPORARY TABLE hbase_sink (
      rowkey INT,
      f1 ROW<`hour` STRING, deal BIGINT>,
      f2 ROW<`day` STRING, deal BIGINT>
    ) WITH (
      'connector'='cloudhbase',
      'table-name'='<yourTableName>',
      'zookeeper.quorum'='<yourZookeeperQuorum>',
      'dynamic.table'='true'
    );
    
    INSERT INTO hbase_sink
    SELECT id, ROW(f1hour, f1deal), ROW(f2day, f2deal) FROM datagen_source;
    ```
    
    -   If dynamic.table is set to true, an ApsaraDB for HBase table that supports dynamic columns is used.
        
    -   Two fields must be declared in the rows that correspond to each column family. The value of the first field indicates the dynamic column, and the value of the second field indicates the value of the dynamic column.
        
    -   For example, the datagen\_source table contains a row of data. The row of data indicates that the ID of the commodity is 1, the transaction amount of the commodity between 10:00 and 11:00 is 100, and the transaction amount of the commodity on July 26, 2020 is 10000. In this case, a row whose rowkey is 1 is inserted into the ApsaraDB for HBase table. **f1:10** is 100, and **f2:2020-7-26** is 10000.
