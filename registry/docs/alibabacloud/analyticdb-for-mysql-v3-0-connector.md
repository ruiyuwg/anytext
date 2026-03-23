This topic describes how to use the AnalyticDB for MySQL V3.0 connector.

## Background information

[AnalyticDB for MySQL V3.0](/help/en/analyticdb/analyticdb-for-mysql/product-overview/what-is-analyticdb-for-mysql#concept-n4h-2rr-vy) is a cloud-native enterprise-class data warehousing service that integrates database and big data technologies. AnalyticDB for MySQL supports high-throughput real-time data addition, removal, and modification, low-latency real-time data analysis, and complex extract, transform, and load (ETL) operations. AnalyticDB for MySQL is compatible with upstream and downstream ecosystem tools and can be used to build enterprise-class report systems, data warehouses, and data service engines.

The following table describes the capabilities supported by the AnalyticDB for MySQL V3.0 connector.

**Item**

**Description**

Table type

Source table, dimension table, and sink table

**Note**

Only Ververica Runtime (VVR) 8.0.4 or later supports source tables. For more information about the parameters and configurations of source tables, see [Use Flink to subscribe to binary logs](/help/en/analyticdb/analyticdb-for-mysql/user-guide/flink-subscribes-binlog#e56f1d254epwo). For more information about the parameters of dimension tables and sink tables, see [Parameters in the WITH clause](#title-x9s-qwc-ely).

Running mode

Streaming mode and batch mode

Data format

N/A

Metric

N/A

API type

SQL API

Data update or deletion in a sink table

Supported

## Prerequisites

-   An AnalyticDB for MySQL cluster and an AnalyticDB for MySQL table are created. For more information, see [Create a cluster](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-a-cluster#task1307) and [CREATE TABLE](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/create-table/#concept-2138836).
    
-   A whitelist is configured for the AnalyticDB for MySQL cluster. For more information, see [Configure an IP address whitelist](/help/en/analyticdb/analyticdb-for-mysql/getting-started/configure-a-whitelist#task-2195045).
    

## Syntax

```
CREATE TEMPORARY TABLE adb_table (
  `id` INT,
  `num` BIGINT,
  PRIMARY KEY (`id`) NOT ENFORCED
) WITH (
  'connector' = 'adb3.0',
  'url' = '<yourUrl>',
  'userName' = '<yourUsername>',
  'password' = '<yourPassword>',
  'tableName' = '<yourTablename>'
);
```

**Important**

**The primary key that is specified in the Flink DDL statement must be consistent with the primary key of the physical table in the AnalyticDB for MySQL database. The primary key must be specified in the Flink DDL statement and exist in the physical table in the AnalyticDB for MySQL database at the same time. The name of the primary key specified in the Flink DDL statement must be the same as the name of the primary key of the physical table. If the primary keys are not the same, data may be incorrect.**

## Parameters in the WITH clause

-   Common parameters
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The type of the sink table.
    
    String
    
    Yes
    
    No default value
    
    Set the value to adb3.0.
    
    url
    
    The Java Database Connectivity (JDBC) URL of the database.
    
    String
    
    Yes
    
    No default value
    
    The JDBC URL of the AnalyticDB for MySQL database. The URL is in the jdbc:mysql://<endpoint>:<port>/<databaseName> format.
    
    -   endpoint and port: You can log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/?spm=a2c4g.11186623.2.23.2c952b809T8asM). In the left-side navigation pane, click the name of the desired cluster in the **Cluster ID/Cluster Description** column. On the page that appears, obtain the information in the **Network Information** section.
        
    -   databaseName: the name of the AnalyticDB for MySQL database.
        
    
    userName
    
    The username that is used to access the database.
    
    String
    
    Yes
    
    No default value
    
    N/A.
    
    password
    
    The password that is used to access the database.
    
    String
    
    Yes
    
    No default value
    
    N/A.
    
    tableName
    
    The name of the table in the database.
    
    String
    
    Yes
    
    No default value
    
    N/A.
    
    maxRetryTimes
    
    The maximum number of retries that are allowed if a data writing or reading attempt fails.
    
    Integer
    
    No
    
    10
    
    N/A.
    
-   Parameters only for sink tables
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    batchSize
    
    The number of data records that can be written at a time.
    
    Integer
    
    No
    
    1000
    
    This parameter takes effect only after you specify the primary key.
    
    bufferSize
    
    The maximum number of data records that can be cached in the memory. Write operations are triggered if the value of the batchSize or bufferSize parameter reaches the specified threshold.
    
    Integer
    
    No
    
    1000
    
    This parameter takes effect only after you specify the primary key.
    
    flushIntervalMs
    
    The interval at which the cache is cleared. This value indicates that if the number of cached data records does not reach the upper limit in a specified period of time, all cached data is written to the sink table.
    
    Integer
    
    No
    
    3000
    
    Unit: millisecond.
    
    ignoreDelete
    
    Specifies whether to ignore delete operations.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true: The delete operations are ignored.
        
    -   false: The delete operations are not ignored.
        
    
    replaceMode
    
    Specified whether to use the REPLACE INTO statement to insert data into the table if a primary key is specified in the DDL statement.
    
    Boolean
    
    No
    
    true
    
    Valid values (VVR 11.2+):
    
    -   `replace`: Uses the `REPLACE INTO` syntax. If a primary key is duplicated, the new row overwrites the existing one.
        
    -   `upsert`: Uses the `INSERT INTO ... ON DUPLICATE KEY UPDATE` syntax. Inserts a new row if the primary key doesn't exist; updates the existing row if it does. Example: For a table with fields `a` (primary key), `b`, `c`, `d`, if data is provided only for `a` and `b`, only field `b` is updated upon duplicate primary key detection. Fields `c` and `d` remain unchanged.
        
    -   `insert`: Uses `INSERT IGNORE INTO` syntax. If a primary key is duplicated, the first data entry is kept, and subsequent entries are ignored.
        
    
    Valid values (earlier than VVR 11.2):
    
    -   `true`: Same behavior as `replace`.
        
    -   `false`: Same behavior as `upsert`.
        
    
    **Note:** VVR 11.2 and later versions are compatible with the `true` and `false` values from earlier versions.
    
    **Note**
    
    -   Only AnalyticDB for MySQL V3.1.3.5 or later supports this parameter.
        
    -   This option takes effect only when a primary key is defined in the DDL of the sink table. If no primary key is defined in the DDL of the sink table, the insert ignore into syntax is always used to insert data.
        
    
    excludeUpdateColumns
    
    The fields that are not updated when data that has the same primary key is updated.
    
    String
    
    No
    
    An empty string
    
    Separate multiple fields with commas (,). Example: `excludeUpdateColumns='column1,column2'`.
    
    Consider a sink table with fields `a` (primary key), `b`, `c`, and `d`, and `excludeUpdateColumns='c,d'` is set. When inserted data has unique primary key values, all fields are inserted. When inserted data has duplicate primary key values, only field `b` is updated, and fields `c` and `d` retain their original values.
    
    **Note**
    
    -   This option takes effect only when `replaceMode` is set to `upsert` or `false`.
        
    -   Ensure the columns to ignore are written in one line and are not wrapped.
        
    
    connectionMaxActive
    
    The maximum size of the thread pool.
    
    Integer
    
    No
    
    40
    
    N/A.
    
-   Parameters only for dimension tables
    
    **Parameter**
    
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
        
    -   ALL: All data in the dimension table is cached. This is the default value. Before a deployment runs, the system loads all data in the dimension table to the cache. This way, the cache is searched for all subsequent queries in the dimension table. If the system does not find the data record in the cache, the join key does not exist. The system reloads all data in the cache after cache entries expire.
        
    
    If the amount of data in a remote table is small and a large number of missing keys exist, we recommend that you set this parameter to ALL. The source table and dimension table cannot be associated based on the ON clause.
    
    **Note**
    
    -   If you set the cache parameter to ALL, you must monitor the memory usage of the node to prevent out of memory (OOM) errors.
        
    -   If you set the cache parameter to ALL, you must increase the memory of the node for joining tables because the system asynchronously loads data from the dimension table. The increased memory size is twice that of the remote table.
        
    
    cacheSize
    
    The maximum number of data records that can be cached.
    
    Integer
    
    No
    
    100000
    
    You must configure the cacheSize parameter when the cache parameter is set to LRU.
    
    cacheTTLMs
    
    The cache timeout period. Unit: milliseconds.
    
    Integer
    
    No
    
    Long.MAX\_VALUE
    
    You must configure the cacheTTLMs parameter when the cache parameter is set to LRU or ALL.
    
    -   If the cache parameter is set to LRU, the cacheTTLMs parameter specifies the cache timeout period. Default value: `Long.MAX_VALUE`. The default value indicates that cache entries do not expire.
        
    -   If the cache parameter is set to ALL, the cacheTTLMs parameter specifies the interval at which the system reloads the data in the physical table. Default value: `Long.MAX_VALUE`. The default value indicates that data in the physical table is not reloaded.
        
    
    **Note**
    
    If the cache parameter is set to None, you do not need to configure the cacheTTLMs parameter. If the cache parameter is set to None, data is not cached. Therefore, you do not need to configure the cacheTTLMs parameter.
    
    maxJoinRows
    
    The maximum number of results returned after each data record in the primary table is mapped to the data in the dimension table.
    
    Integer
    
    No
    
    1024
    
    If you can estimate that each data record in the primary table is mapped to a maximum of n data records in the dimension table, you can configure maxJoinRows='n' to ensure efficient matching in Realtime Compute for Apache Flink.
    
    **Note**
    
    When you join the primary table with a dimension table, the number of results returned after an input data record in the primary table is mapped to the data records in the dimension table is limited by this parameter.
    

## Data type mappings

**Data type of AnalyticDB for MySQL V3.0**

**Data type of Realtime Compute for Apache Flink**

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

FLOAT

FLOAT

DOUBLE

DOUBLE

DECIMAL(p, s) or NUMERIC(p, s)

DECIMAL(p, s)

VARCHAR

STRING

BINARY

BYTES

DATE

DATE

TIME

TIME

DATETIME

TIMESTAMP

TIMESTAMP

TIMESTAMP

POINT

STRING

## Sample code

-   Sample code for a sink table
    
    ```
    CREATE TEMPORARY TABLE datagen_source (
      `name` VARCHAR,
      `age` INT
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE adb_sink (
      `name` VARCHAR,
      `age` INT
    ) WITH (
      'connector' = 'adb3.0',
      'url' = '<yourUrl>',
      'userName' = '<yourUsername>',
      'password' = '<yourPassword>',
      'tableName' = '<yourTablename>'
    );
    
    INSERT INTO adb_sink
    SELECT * FROM datagen_source;
    ```
    
-   Sample code for a dimension table
    
    ```
    CREATE TEMPORARY TABLE datagen_source(
      `a` INT,
      `b` VARCHAR,
      `c` STRING,
      `proctime` AS PROCTIME()
    ) WITH (
      'connector' = 'datagen'
    );
    
    CREATE TEMPORARY TABLE adb_dim (
      `a` INT,
      `b` VARCHAR,
      `c` VARCHAR
    ) WITH (
      'connector' = 'adb3.0',
      'url' = '<yourUrl>',
      'userName' = '<yourUsername>',
      'password' = '<yourPassword>',
      'tableName' = '<yourTablename>'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink(
      `a` INT,
      `b` VARCHAR
    ) WITH (
      'connector' = 'blackhole'
    );
    
    INSERT INTO blackhole_sink SELECT T.a,H.b
    FROM datagen_source AS T JOIN adb_dim FOR SYSTEM_TIME AS OF T.proctime AS H ON T.a = H.a;
    ```
    

## **References**

[Error: multi-statement be found](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#92c898e466ihr)
