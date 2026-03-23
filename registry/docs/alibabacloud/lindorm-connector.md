This topic describes how to use the Lindorm connector.

## Background

[Lindorm](/help/en/lindorm/product-overview/product-introduction-overview#topic-1912877) is a cloud-native hyper-converged database service that is developed and optimized to store and process multimodal data in various scenarios such as IoT, Internet, and Internet of Vehicles (IoV). Lindorm is suitable for various scenarios, such as logging, monitoring, billing, advertising, social networking, travel, and risk management. Lindorm is also one of the database services that support the core business of Alibaba Group.

Lindorm provides the following features:

-   Supports unified access and processing of various data, such as wide tables, time series, text, objects, streams, and spaces.
    
-   Is compatible with multiple standard interfaces, such as SQL, Apache HBase, Apache Cassandra, Amazon S3, Time Series Database (TSDB), Hadoop Distributed File System (HDFS), Apache Solr, and Kafka. Lindorm can also be seamlessly integrated with third-party ecosystem tools.
    

The following table describes the capabilities supported by the Lindorm connector.

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

Metrics for sink tables:

-   numBytesOut
    
-   numBytesOutPerSecond
    
-   numRecordsOut
    
-   numRecordsOutPerSecond
    

**Note**

For more information about the metrics, see [Metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

SQL API

Lindorm engine

LindormTable

Data update or deletion in a sink table

Supported

## Usage notes

-   Lindorm HBase tables are not supported.
    
-   A Lindorm wide table engine and a Lindorm table are created in advance. For more information, see [Create an instance](/help/en/lindorm/getting-started/create-an-instance#task-2045184).
    
-   A network connection must be established between the Lindorm cluster and the Flink workspace. For example, the Lindorm cluster and Realtime Compute for Apache Flink reside in the same virtual private cloud (VPC).
    

## Syntax

```
CREATE TABLE white_list (
id varchar,
name varchar,
age int,
PRIMARY KEY (id) NOT ENFORCED
) WITH (
'connector' = 'lindorm',
'seedserver' = '<yourSeedServer>',
'namespace' = '<yourNamespace>',
'username' = '<yourUsername>',
'password' = '<yourPassword>',
'tableName' = '<yourTableName>',
'columnFamily' = '<yourColumnFamily>'
);
```

## Connector options

-   General
    
    **Option**
    
    **Description**
    
    **Type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The table type.
    
    String
    
    Yes
    
    No default value
    
    Set the value to lindorm.
    
    seedserver
    
    The endpoint of the Lindorm server.
    
    String
    
    Yes
    
    No default value
    
    Realtime Compute for Apache Flink calls the ApsaraDB for HBase API for Java to access Lindorm and use LindormTable. The endpoint of the Lindorm server is in the `host:port` format. For more information, see [Use Flink to connect to and use LindormTable](/help/en/lindorm/user-guide/use-flink-to-connect-to-a-lindorm-cluster).
    
    namespace
    
    The namespace of the Lindorm database.
    
    String
    
    Yes
    
    No default value
    
    N/A
    
    username
    
    The username that is used to access the Lindorm database.
    
    String
    
    Yes
    
    No default value
    
    N/A
    
    password
    
    The password that is used to access the Lindorm database.
    
    String
    
    Yes
    
    No default value
    
    N/A
    
    tableName
    
    The name of the Lindorm table.
    
    String
    
    Yes
    
    No default value
    
    N/A
    
    columnFamily
    
    The name of the column family of the Lindorm table.
    
    String
    
    Yes
    
    No default value
    
    If the column family name is not specified when you create the Lindorm table, enter the default column family name f.
    
    retryIntervalMs
    
    The interval at which the read operation is retried when data reading fails.
    
    Integer
    
    No
    
    1000
    
    Unit: milliseconds.
    
    maxRetryTimes
    
    The maximum number of retries for reading or writing data.
    
    Integer
    
    No
    
    5
    
    N/A
    
-   Sink-specific
    
    **Option**
    
    **Description**
    
    **Type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    bufferSize
    
    The number of data records that can be written at a time.
    
    Integer
    
    No
    
    500
    
    N/A
    
    flushIntervalMs
    
    The interval at which data is written to the table when the amount of data is small.
    
    Integer
    
    No
    
    2000
    
    Unit: milliseconds.
    
    ignoreDelete
    
    Specifies whether to skip delete operations.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true
        
    -   false (default)
        
    
    dynamicColumnSink
    
    Specifies whether to enable the dynamic table feature. For more information about the dynamic table feature, see the [Dynamic table](#section-9jm-dmv-nfz) section of this topic.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true
        
    -   false (default)
        
    
    excludeUpdateColumns
    
    The fields not to be updated. Updated values of the specified fields are not inserted into the sink table.
    
    String
    
    No
    
    No default value
    
    Separate multiple fields with commas (`,`). For example, if you set the `excludeUpdateColumns` option to `a,b,c`, updates on the `a, b, and c` fields are ignored.
    
    **Note**
    
    Only VVR 8.0.9 or later supports this option.
    
-   Dimension table-specific
    
    **Option**
    
    **Description**
    
    **Type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    partitionedJoin
    
    Specifies whether to use the JoinKey for partitioning.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true: The JoinKey is used for partitioning. Data is distributed to each JOIN node to improve the cache hit rate.
        
    -   false (default): The JoinKey is not used for partitioning.
        
    
    shuffleEmptyKey
    
    Specifies whether to randomly shuffle empty upstream keys to downstream nodes.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true: The system randomly shuffles empty upstream keys to downstream nodes.
        
    -   false (default): The system shuffles empty upstream keys to the first parallel thread of each downstream node. The first parallel thread is numbered 0.
        
    
    cache
    
    The cache policy.
    
    String
    
    No
    
    None
    
    Valid values:
    
    -   None (default): No data is cached.
        
    -   LRU: Only recently accessed data in the dimension table is cached.
        
    
    If you set the `cache` option to `LRU`, you must configure the `cacheSize` and `cacheTTLMs` options.
    
    cacheSize
    
    The number of rows of data that can be cached.
    
    Integer
    
    No
    
    1000
    
    If you set the `cache` option to `LRU`, you can configure the `cacheSize` option.
    
    cacheTTLMs
    
    The cache timeout period.
    
    Integer
    
    No
    
    No default value
    
    Unit: milliseconds. If you set the `cache` option to `LRU`, you can configure the `cacheTTLMs` option. By default, cache entries do not expire.
    
    cacheEmpty
    
    Specifies whether to cache the JOIN queries whose return value is empty.
    
    Boolean
    
    No
    
    true
    
    **Note**
    
    The Lindorm connector supports one-to-many lookup joins. Pay close attention to caching strategies and throughput for optimal performance.
    
    async
    
    Specifies whether to enable data synchronization in asynchronous mode.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true
        
    -   false (default)
        
    
    asyncLindormRpcTimeoutMs
    
    The timeout period when data is requested in asynchronous mode.
    
    Integer
    
    No
    
    300000
    
    Unit: milliseconds.
    

## Dynamic table

The dynamic table feature is suitable for scenarios in which no columns are specified in a table and columns are created and inserted into the table based on the deployment status. For example, you use days as the primary key and hours as columns to calculate the hourly transaction volume per day. Data for each hour is dynamically generated. The following table shows the dynamic table.

**Primary key**

**Column name: 00:00**

**Column name: 01:00**

2025-06-01

45

32

2025-06-02

76

34

The dynamic table must comply with the following DDL rules: The first several columns are defined as the primary key. The value of the first column in the last two columns is used as the column name, the value of the last column is used as the value of the previous column, and the data type of the last two columns must be VARCHAR. Sample code:

```
CREATE TABLE lindorm_dynamic_output(
pk1 varchar,
pk2 varchar,
pk3 varchar,
c1 varchar,
c2 varchar,
PRIMARY KEY (pk1,pk2,pk3) NOT ENFORCED
) WITH (
'connector' = 'lindorm',
'seedserver' = '<yourSeedServer>',
'namespace' = '<yourNamespace>',
'username' = '<yourUsername>',
'password' = '<yourPassword>',
'tableName' = '<yourTableName>',
'columnFamily' = '<yourColumnFamily>'
);
```

In the preceding example, pk1, pk2, and pk3 are used as the primary key. c1 and c2 are the two columns that are required for the dynamic table and must be the last two columns. Except for c1 and c2, columns that are not used as the primary key are not allowed. Each time data is written to the Lindorm sink table, a column is added to or modified in the data record that corresponds to the values <pk1, pk2, pk3> of the primary key. The value of c1 is used as the name of the column, and the value of c2 is used as the value of the column. Each time a data record is received, only the value in one column is added or changed. The values of other columns remain unchanged.

## Data type mappings

All data in Lindorm is in the binary format. The following table shows how to convert data into bytes of binary data or parse bytes of binary data based on the data type of a field in Realtime Compute for Apache Flink.

**Data type of Flink SQL**

**Method used to convert data into bytes for Lindorm**

**Method used to parse bytes from Lindorm**

CHAR

org.apache.flink.table.data.StringData::toBytes

org.apache.flink.table.data.StringData::fromBytes

VARCHAR

BOOLEAN

com.alibaba.lindorm.client.core.utils.Bytes::toBytes(boolean)

com.alibaba.lindorm.client.core.utils.Bytes::toBigDecimal

BINARY

Directly convert data into bytes.

Directly return bytes.

VARBINARY

DECIMAL

com.alibaba.lindorm.client.core.utils.Bytes::toBytes(BigDecimal)

com.alibaba.lindorm.client.core.utils.Bytes::toBigDecimal

TINYINT

Directly encapsulate data into the first byte of byte\[\].

Directly return bytes\[0\].

SMALLINT

com.alibaba.lindorm.client.core.utils.Bytes::toBytes(short)

com.alibaba.lindorm.client.core.utils.Bytes::toShort

INT

com.alibaba.lindorm.client.core.utils.Bytes::toBytes(int)

com.alibaba.lindorm.client.core.utils.Bytes::toInt

BIGINT

com.alibaba.lindorm.client.core.utils.Bytes::toBytes(long)

com.alibaba.lindorm.client.core.utils.Bytes::toLong

FLOAT

com.alibaba.lindorm.client.core.utils.Bytes::toBytes(float)

com.alibaba.lindorm.client.core.utils.Bytes::toFloat

DOUBLE

com.alibaba.lindorm.client.core.utils.Bytes::toBytes(double)

com.alibaba.lindorm.client.core.utils.Bytes::toDouble

DATE

Call com.alibaba.lindorm.client.core.utils.Bytes::toBytes(int) after the number of days since January 1, 1970 is obtained.

Call com.alibaba.lindorm.client.core.utils.Bytes::toInt to obtain the number of days since January 1, 1970.

TIME

Call com.alibaba.lindorm.client.core.utils.Bytes::toBytes(int) after the number of milliseconds since 00:00:00 of the current day is obtained.

Call com.alibaba.lindorm.client.core.utils.Bytes::toInt to obtain the number of milliseconds since 00:00:00 of the current day.

TIMESTAMP

Call com.alibaba.lindorm.client.core.utils.Bytes::toBytes(long) after the number of milliseconds since 00:00:00 on January 1, 1970 is obtained.

Call com.alibaba.lindorm.client.core.utils.Bytes::toLong to obtain the number of milliseconds since 00:00:00 on January 1, 1970.

## Sample code

```
CREATE TEMPORARY TABLE example_source(
 id INT,
 proc_time AS PROCTIME()
) WITH (
 'connector' = 'datagen',
 'number-of-rows' = '10',
 'fields.id.kind' = 'sequence',
 'fields.id.start' = '0',
 'fields.id.end' = '9'
);

CREATE TEMPORARY TABLE lindorm_hbase_dim(
 `id` INT,
 `name` VARCHAR,
 `birth` VARCHAR,
 PRIMARY KEY (id) NOT ENFORCED
) WITH (
 'connector'='lindorm',
 'tablename'='${lindorm_dim_table}',
 'seedserver'='${lindorm_seed_server}',
 'namespace'='default',
 'username'='${lindorm_username}',
 'password'='${lindorm_username}'
);

CREATE TEMPORARY TABLE lindorm_hbase_sink(
 `id` INT,
 `name` VARCHAR,
 `birth` VARCHAR,
 PRIMARY KEY (id) NOT ENFORCED
) WITH (
 'connector'='lindorm',
 'tablename'='${lindorm_sink_table}',
 'seedserver'='${lindorm_seed_server}',
 'namespace'='default',
 'username'='${lindorm_username}',
 'password'='${lindorm_username}'
);

INSERT INTO lindorm_hbase_sink
SELECT example_source.id as id, lindorm_hbase_dim.name as name, lindorm_hbase_dim.birth as birth
FROM example_source JOIN lindorm_hbase_dim FOR SYSTEM_TIME AS OF PROCTIME() ON example_source.id = lindorm_hbase_dim.id;
```

## **FAQ**

[Lindorm connection errors and solutions](/help/en/lindorm/support/lindorm-connection-errors-and-solutions)
