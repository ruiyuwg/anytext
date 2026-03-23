This topic describes how to use the Tablestore connector.

## Background information

Tablestore is a table-based, low-cost serverless storage service that is optimized for storing large amounts of structured data. Tablestore allows you to query and retrieve online data within milliseconds and analyze stored data in multiple dimensions. Tablestore is suitable for various scenarios such as a large number of bills, instant messaging (IM), IoT, Internet of Vehicles (IoV), risk management, and intelligent recommendation. Tablestore also provides a deeply optimized end-to-end storage solution for IoT applications. For more information, see [What is Tablestore](/help/en/tablestore/product-overview/what-is-tablestore#concept-27280-zh)

The following table describes the capabilities supported by the Tablestore connector.

**Item**

**Description**

Running mode

Streaming mode

API type

SQL API

Table type

Source table, dimension table, and sink table

Data format

N/A

Metric

-   Metrics for source tables: none
    
-   Metrics for dimension tables: none
    
-   Metrics for sink tables:
    
    -   numBytesOut
        
    -   numBytesOutPerSecond
        
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        
    -   currentSendTime
        

**Note**

For more information about the metrics, see [Monitoring metrics](/help/en/flink/realtime-flink/user-guide/metrics).

Data update or deletion in a sink table

Supported

## Prerequisites

A Tablestore instance is purchased and a Tablestore table is created. For more information, see [Use Tablestore](/help/en/tablestore/procedure-of-using-tablestore#concept-27293-zh).

## Syntax

-   Statement for creating a sink table
    
    ```
    CREATE TABLE ots_sink (
      name VARCHAR,
      age BIGINT,
      birthday BIGINT,
      primary key(name,age) not enforced
    ) WITH (
      'connector'='ots',
      'instanceName'='<yourInstanceName>',
      'tableName'='<yourTableName>',
      'accessId'='${ak_id}',
      'accessKey'='${ak_secret}',
      'endPoint'='<yourEndpoint>',
      'valueColumns'='birthday'
    );
    ```
    
    **Note**
    
    You must specify a primary key for a Tablestore sink table. The latest output data is appended to the Tablestore sink table to update the table data.
    
-   Statement for creating a dimension table
    
    ```
    CREATE TABLE ots_dim (
      id int,
      len int,
      content STRING
    ) WITH (
      'connector'='ots',
      'endPoint'='<yourEndpoint>',
      'instanceName'='<yourInstanceName>',
      'tableName'='<yourTableName>',
      'accessId'='${ak_id}',
      'accessKey'='${ak_secret}'
    );
    ```
    
-   Statement for creating a source table
    
    ```
    CREATE TABLE tablestore_stream(
      `order` VARCHAR,
      orderid VARCHAR,
      customerid VARCHAR,
      customername VARCHAR
    ) WITH (
      'connector'='ots',
      'endPoint' ='<yourEndpoint>',
      'instanceName' = 'flink-source',
      'tableName' ='flink_source_table',
      'tunnelName' = 'flinksourcestream',
      'accessId' ='${ak_id}',
      'accessKey' ='${ak_secret}',
      'ignoreDelete' = 'false'
    );
    ```
    
    The fields whose data needs to be consumed and the `OtsRecordType` and `OtsRecordTimestamp` fields in the returned data of Tunnel Service can be read and written as attribute columns. The following table describes the fields.
    
    **Field**
    
    **Mapping field in Realtime Compute for Apache Flink**
    
    **Description**
    
    OtsRecordType
    
    type
    
    The data operation type.
    
    OtsRecordTimestamp
    
    timestamp
    
    The data operation time. Unit: microseconds.
    
    **Note**
    
    If full data is read, the value of the OtsRecordTimestamp parameter is set to 0.
    
    If you want to read the `OtsRecordType` and `OtsRecordTimestamp` fields, you can use the METADATA keyword provided by Realtime Compute for Apache Flink to obtain the attribute fields from the Tablestore source table. The following example shows the DDL statement.
    
    ```
    CREATE TABLE tablestore_stream(
      `order` VARCHAR,
      orderid VARCHAR,
      customerid VARCHAR,
      customername VARCHAR,
      record_type STRING METADATA FROM 'type',
      record_timestamp BIGINT METADATA FROM 'timestamp'
    ) WITH (
      ...
    );
    ```
    

## Connector options in the WITH clause

-   General
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required?**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The type of the table.
    
    String
    
    Yes
    
    No default value
    
    Set the value to `ots`.
    
    instanceName
    
    The name of the Tablestore instance.
    
    String
    
    Yes
    
    No default value
    
    endPoint
    
    The endpoint of the Tablestore instance.
    
    String
    
    Yes
    
    No default value
    
    For more information, see [Endpoints](/help/en/tablestore/product-overview/endpoints#concept-bsx-btj-bfb).
    
    tableName
    
    The name of the table
    
    String
    
    Yes
    
    No default value
    
    accessId
    
    The AccessKey ID of your Alibaba Cloud account or a Resource Access Management (RAM) user.
    
    String
    
    Yes
    
    No default value
    
    See the [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
    
    **Important**
    
    To protect your AccessKey pair, use [variables](/help/en/flink/realtime-flink/user-guide/manage-keys) rather than hardcode your AccessKey pair.
    
    accessKey
    
    The AccessKey secret of your Alibaba Cloud account or a RAM user.
    
    String
    
    Yes
    
    No default value
    
    connectTimeout
    
    The timeout period for the Tablestore connector to connect to Tablestore.
    
    Integer
    
    No
    
    30000
    
    Unit: milliseconds.
    
    socketTimeout
    
    The socket timeout period for the Tablestore connector to connect to Tablestore.
    
    Integer
    
    No
    
    30000
    
    Unit: milliseconds.
    
    ioThreadCount
    
    The number of I/O threads.
    
    Integer
    
    No
    
    4
    
    callbackThreadPoolSize
    
    The size of the callback thread pool.
    
    Integer
    
    No
    
    4
    
-   Source-specific
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required?**
    
    **Default value**
    
    **Remarks**
    
    tunnelName
    
    The tunnel name of the Tablestore source table.
    
    String
    
    Yes
    
    No default value
    
    You must create a tunnel in the Tablestore console in advance. When you create a tunnel, specify the tunnel name and tunnel type. The tunnel type can be Incremental, Full, or Differential. For more information about how to create a tunnel, see the "Create a tunnel" section of the [Quick start](/help/en/tablestore/quick-start-of-tunnel-clients#section-to8-id1-vyq) topic.
    
    ignoreDelete
    
    Specifies whether to ignore delete operations.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true: Delete operations are ignored.
        
    -   false (default): Delete operations are not ignored.
        
    
    skipInvalidData
    
    Specifies whether to ignore dirty data. If dirty data is not ignored, an error is reported when the system processes the dirty data.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true: Dirty data is ignored.
        
    -   false (default): Dirty data is not ignored.
        
    
    **Note**
    
    Only VVR 8.0.4 or later supports this option.
    
    retryStrategy
    
    The retry policy.
    
    Enum
    
    No
    
    TIME
    
    Valid values:
    
    -   TIME: The system continuously retries until the timeout period specified by the retryTimeoutMs parameter ends.
        
    -   COUNT: The system continuously retries until the maximum number of retries specified by the retryCount parameter is reached.
        
    
    retryCount
    
    The maximum number of retries.
    
    Integer
    
    No
    
    3
    
    If you set the retryStrategy parameter to COUNT, you can specify this parameter.
    
    retryTimeoutMs
    
    The timeout period for the retry.
    
    Integer
    
    No
    
    180000
    
    If you set the retryStrategy parameter to TIME, you can specify this parameter. Unit: milliseconds.
    
    streamOriginColumnMapping
    
    The mapping between an original column name and the related real column name.
    
    String
    
    No
    
    No default value
    
    Separate an original column name and the related real column name with a colon (:). Separate multiple mappings with commas (,). Example: `origin_col1:col1,origin_col2:col2`.
    
    outputSpecificRowType
    
    Specifies whether to pass through a specific row type.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   false: does not pass through a specific row type. All data is of the INSERT type.
        
    -   true: passes through a specific row type. Data can be of the INSERT, DELETE, or UPDATE\_AFTER type.
        
    
    dataFetchTimeoutMs
    
    The maximum duration for fetching data from a partition.
    
    Integer
    
    No
    
    10000
    
    Unit: milliseconds.
    
    When synchronizing numerous partitions with a low-latency requirement, reduce this option value to decrease overall synchronization latency.
    
    **Note**
    
    This option is supported in VVR 8.0.10 or later.
    
    enableRequestCompression
    
    Specifies whether to enable data compression.
    
    Boolean
    
    No
    
    false
    
    Enabling this option can save bandwidth but increase CPU load.
    
    **Note**
    
    This option is supported in VVR 8.0.10 or later.
    
-   Sink-specific
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required?**
    
    **Default value**
    
    **Remarks**
    
    retryIntervalMs
    
    The retry interval.
    
    Integer
    
    No
    
    1000
    
    Unit: milliseconds.
    
    maxRetryTimes
    
    The maximum number of retries.
    
    Integer
    
    No
    
    10
    
    valueColumns
    
    The names of the columns that you want to insert.
    
    String
    
    Yes
    
    No default value
    
    Separate multiple fields, such as the ID or NAME field, with commas (,).
    
    bufferSize
    
    The maximum number of data records that can be stored in the buffer before data is written to the sink table.
    
    Integer
    
    No
    
    5000
    
    batchWriteTimeoutMs
    
    The write timeout period.
    
    Integer
    
    No
    
    5000
    
    Unit: milliseconds. If the number of cached data records does not reach the upper limit within the period of time specified by the batchWriteTimeoutMs parameter, all cached data is written to the sink table.
    
    batchSize
    
    The number of data records that can be written at a time.
    
    Integer
    
    No
    
    100
    
    Maximum value: 200.
    
    ignoreDelete
    
    Specifies whether to ignore delete operations.
    
    Boolean
    
    No
    
    False
    
    N/A.
    
    autoIncrementKey
    
    The name of the auto-increment primary key column. If the sink table contains an auto-increment primary key column, you can configure this parameter to specify the name of the auto-increment primary key column.
    
    String
    
    No
    
    No default value
    
    If the sink table does not have an auto-increment primary key column, you do not need to configure this parameter.
    
    **Note**
    
    Only Realtime Compute for Apache Flink that uses VVR 8.0.4 or later supports this parameter.
    
    overwriteMode
    
    The data overwrite mode.
    
    Enum
    
    No
    
    PUT
    
    Valid values:
    
    -   PUT: Data is written to the Tablestore table in PUT mode.
        
    -   UPDATE: Data is written to the Tablestore table in UPDATE mode.
        
    
    **Note**
    
    Only the UPDATE mode is supported in dynamic column mode.
    
    defaultTimestampInMillisecond
    
    The default timestamp that is used to write data to the Tablestore table.
    
    Long
    
    No
    
    \-1
    
    If you do not specify this parameter, the timestamp of the current system time is used.
    
    dynamicColumnSink
    
    Specifies whether to enable the dynamic column mode.
    
    Boolean
    
    No
    
    false
    
    The dynamic column mode is suitable for scenarios in which no columns are specified in a table and columns are inserted into the table based on the deployment status. The first several columns are defined as the primary key in the table creation statement. The value of the first column in the last two columns is used as the column name, the value of the last column is used as the value of the previous column, and the data type of the last two columns must be STRING.
    
    **Note**
    
    If you enable the dynamic column mode, auto-increment primary key columns are not supported and you must set the overwriteMode parameter to UPDATE.
    
    checkSinkTableMeta
    
    Specifies whether to check the metadata of the sink table.
    
    Boolean
    
    No
    
    true
    
    If you set this parameter to true, the system checks whether the primary key column of the Tablestore table is the same as the primary key specified in the table creation statement.
    
    enableRequestCompression
    
    Specifies whether to enable data compression during data writing.
    
    Boolean
    
    No
    
    false
    
    maxColumnsCount
    
    The maximum number of columns written to the downstream table.
    
    Integer
    
    No
    
    128
    
    If this option is set to a value higher than 128, the error `The count of attribute columns exceeds the maximum` will occur. To resolve this, adjust the option value.
    
    **Note**
    
    This option is supported by 8.0.10 or later.
    
    storageType
    
    The sink table type.
    
    String
    
    No
    
    `WIDE_COLUMN`
    
    Valid values:
    
    -   `WIDE_COLUMN`: The sink table is a wide table.
        
    -   `TIMESERIES`: The sink table is a time-series table.
        
    
-   Dimension table-specifc
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required?**
    
    **Default value**
    
    **Remarks**
    
    retryIntervalMs
    
    The retry interval.
    
    Integer
    
    No
    
    1000
    
    Unit: milliseconds.
    
    maxRetryTimes
    
    The maximum number of retries.
    
    Integer
    
    No
    
    10
    
    N/A.
    
    cache
    
    The cache policy.
    
    String
    
    No
    
    ALL
    
    Valid values:
    
    -   None: No data is cached.
        
    -   LRU: Only specific data in the dimension table is cached. Each time the system receives a data record, the system searches the cache. If the system does not find the record in the cache, the system searches for the data record in the physical dimension table.
        
        If this cache policy is used, you must configure the cacheSize and cacheTTLMs parameters.
        
    -   ALL (default): All data in the dimension table is cached. Before a job runs, the system loads all data in the dimension table to the cache. This way, the cache is searched for all subsequent queries in the dimension table. If no keys exist, the system cannot find the data record in the cache. The system reloads all data in the cache after cache entries expire.
        
        If the amount of data in a remote table is small and a large number of missing keys exist, we recommend that you set this parameter to ALL. The source table and dimension table cannot be associated based on the ON clause. If you use this cache policy, you must configure the cacheTTLMs and cacheReloadTimeBlackList parameters.
        
        **Note**
        
        If you set the cache parameter to ALL, you must increase the memory of the node for joining tables because the system asynchronously loads data from the dimension table. The increased memory size is twice that of the remote table.
        
    
    cacheSize
    
    The maximum number of data records that can be cached.
    
    Integer
    
    No
    
    No default value
    
    If you set the cache parameter to LRU, you can specify this parameter.
    
    **Note**
    
    The value of this parameter is the maximum number of data records that can be cached.
    
    cacheTTLMs
    
    The cache timeout period.
    
    Integer
    
    No
    
    No default value
    
    Unit: milliseconds. The configuration of the cacheTTLMs parameter varies based on the value of the cache parameter.
    
    -   If you set the cache parameter to None, the cacheTTLMs parameter can be left empty. This indicates that cache entries do not expire.
        
    -   If you set the cache parameter to LRU, the cacheTTLMs parameter specifies the timeout period of the cache. By default, cache entries do not expire.
        
    -   If you set the cache parameter to ALL, the cacheTTLMs parameter specifies the interval at which the system refreshes the cache. By default, the cache is not reloaded.
        
    
    cacheEmpty
    
    Specifies whether to cache empty results.
    
    Boolean
    
    No
    
    No default value
    
    -   true: Empty results are cached.
        
    -   false: Empty results are not cached.
        
    
    cacheReloadTimeBlackList
    
    The time periods during which cache is not refreshed. This parameter takes effect when the cache parameter is set to ALL. The cache is not refreshed during the periods of time that you specify for this parameter. This parameter is suitable for large-scale online promotional events such as Double 11.
    
    String
    
    No
    
    No default value
    
    The following example shows the format of the values: **2017-10-24 14:00 -> 2017-10-24 15:00**, **2017-11-10 23:30 -> 2017-11-11 08:00**. Use delimiters based on the following rules:
    
    -   Separate multiple time periods with commas (,).
        
    -   Separate the start time and end time of each time period with an arrow (->) that is a combination of a hyphen (-) and a closing angle bracket (>).
        
    
    async
    
    Specifies whether to enable data synchronization in asynchronous mode.
    
    Boolean
    
    No
    
    false
    
    -   true: Data synchronization in asynchronous mode is enabled. By default, data is not sorted when data is synchronized in asynchronous mode.
        
    -   false (default): Data synchronization in asynchronous mode is disabled.
        
    

## Data type mappings

-   Source table
    
    **Data type of fields in Tablestore**
    
    **Data type of fields in Realtime Compute for Apache Flink**
    
    INTEGER
    
    BIGINT
    
    STRING
    
    STRING
    
    BOOLEAN
    
    BOOLEAN
    
    DOUBLE
    
    DOUBLE
    
    BINARY
    
    BINARY
    
-   Sink table
    
    **Data type of fields in Realtime Compute for Apache Flink**
    
    **Data type of fields in Tablestore**
    
    BINARY
    
    BINARY
    
    VARBINARY
    
    CHAR
    
    STRING
    
    VARCHAR
    
    TINYINT
    
    INTEGER
    
    SMALLINT
    
    INTEGER
    
    BIGINT
    
    FLOAT
    
    DOUBLE
    
    DOUBLE
    
    BOOLEAN
    
    BOOLEAN
    

## Examples

### **Example 1**

Read data from Tablestore and write to Tablestore:

```
CREATE TEMPORARY TABLE tablestore_stream(
 `order` VARCHAR,
  orderid VARCHAR,
  customerid VARCHAR,
  customername VARCHAR
) WITH 
  'connector'='ots',
  'endPoint' ='<yourEndpoint>',
  'instanceName' = 'flink-source',
  'tableName' ='flink_source_table',
  'tunnelName' = 'flinksourcestream',
  'accessId' ='${ak_id}',
  'accessKey' ='${ak_secret}',
  'ignoreDelete' = 'false',
  'skipInvalidData' ='false' 
);

CREATE TEMPORARY TABLE ots_sink (
  `order` VARCHAR,
  orderid VARCHAR,
  customerid VARCHAR,
  customername VARCHAR,
  PRIMARY KEY (`order`,orderid) NOT ENFORCED
) WITH (
  'connector'='ots',
  'endPoint'='<yourEndpoint>',
  'instanceName'='flink-sink',
  'tableName'='flink_sink_table',
  'accessId'='${ak_id}',
  'accessKey'='${ak_secret}',
  'valueColumns'='customerid,customername',
  'autoIncrementKey'='${auto_increment_primary_key_name}' 
);

INSERT INTO ots_sink
SELECT `order`, orderid, customerid, customername FROM tablestore_stream;
```

### **Example 2**

Synchronize data from a wide table to a time-series table.

```
CREATE TEMPORARY TABLE timeseries_source (
    measurement STRING,
    datasource STRING,
    tag_a STRING,
    `time` BIGINT,
    binary_value BINARY,
    bool_value BOOLEAN,
    double_value DOUBLE,
    long_value BIGINT,
    string_value STRING,
    tag_b STRING,
    tag_c STRING,
    tag_d STRING,
    tag_e STRING,
    tag_f STRING
) 
WITH (
    'connector' = 'ots',
    'endPoint' = 'https://iotstore-test.cn-hangzhou.vpc.tablestore.aliyuncs.com',
    'instanceName' = 'iotstore-test',
    'tableName' = 'test_ots_timeseries_2',
    'tunnelName' = 'timeseries_source_tunnel_2',
    'accessId' = '${ak_id}',
    'accessKey' = '${ak_secret}',
    'ignoreDelete' = 'true', -- Ignore deletions
);
CREATE TEMPORARY TABLE timeseries_sink (
    measurement STRING,
    datasource STRING,
    tags Map<String, String>, 
    `time` BIGINT,
    binary_value BINARY,
    bool_value BOOLEAN,
    double_value DOUBLE,
    long_value BIGINT,
    string_value STRING,
    tag_b STRING,
    tag_c STRING,
    tag_d STRING,
    tag_e STRING,
    tag_f STRING,
    PRIMARY KEY(measurement, datasource, tags, `time`) NOT ENFORCED
) 
WITH (
    'connector' = 'ots',
    'endPoint' = 'https://iotstore-test.cn-hangzhou.vpc.tablestore.aliyuncs.com',
    'instanceName' = 'iotstore-test',
    'tableName' = 'test_timeseries_sink_table_2',
    'accessId' = '${ak_id}',
    'accessKey' = '${ak_secret}',
    'storageType' = 'TIMESERIES',
);

-- Insert data from the source table to the sink table
INSERT INTO timeseries_sink
    select 
        m_name,
        data_source,
        MAP["tag_a":tag_a,"tag_b":tag_b,"tag_c":tag_c,"tag_d":tag_d,"tag_e":tag_e,"tag_f":tag_f] AS tags,
        `time`,
        cpu_sys,
        cpu_user,
        disk_0,
        disk_1,
        disk_2,
        memory_used,
        net_in,
        net_out 
    from
        timeseries_source;
```
