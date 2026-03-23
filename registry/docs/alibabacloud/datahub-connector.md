This topic describes how to use the DataHub connector.

## Background

Alibaba Cloud DataHub is a real-time data distribution platform designed to process streaming data. You can publish and subscribe to streaming data in DataHub and distribute the data to other platforms. DataHub allows you to analyze streaming data and build applications based on the streaming data. For more information, see [What is DataHub](/help/en/datahub/product-overview/what-is-datahub#topic-2083877).

**Note**

DataHub is compatible with the Kafka protocol. You can use the standard Kafka connector instead of the Upsert Kafka connector to read data from or write data to DataHub. For details, see [Compatibility with Kafka](/help/en/datahub/developer-reference/compatibility-with-kafka/).

The following table describes the capabilities supported by the DataHub connector.

**Item**

**Description**

Supported type

Source and sink

Running mode

Streaming and batch

Data format

N/A

Metrics

N/A

API type

DataStream and SQL

Data update/deletion support in the sink

Not supported. The sink can write insert-only rows to the target topic.

## Syntax

```
CREATE TEMPORARY TABLE datahub_input (
  `time` BIGINT,
  `sequence`  STRING METADATA VIRTUAL,
  `shard-id` BIGINT METADATA VIRTUAL,
  `system-time` TIMESTAMP METADATA VIRTUAL
) WITH (
  'connector' = 'datahub',
  'subId' = '<yourSubId>',
  'endPoint' = '<yourEndPoint>',
  'project' = '<yourProjectName>',
  'topic' = '<yourTopicName>',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}'
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
    
    The connector that you want to use.
    
    String
    
    Yes
    
    No default value
    
    The value must be datahub.
    
    endPoint
    
    The consumer endpoint.
    
    String
    
    Yes
    
    No default value
    
    The option value varies based on the region of the DataHub project. For details, see [Endpoints](/help/en/datahub/product-overview/endpoints#topic-2083882).
    
    project
    
    The DataHub project name.
    
    String
    
    Yes
    
    No default value
    
    For information about how to create a DataHub project, see [Get started with DataHub](/help/en/datahub/getting-started/quick-start#22fd30807axkb).
    
    topic
    
    The DataHub topic name.
    
    String
    
    Yes
    
    No default value
    
    For information about how to create a DataHub topic, see [Get started with DataHub](/help/en/datahub/getting-started/quick-start#22fd30807axkb).
    
    **Note**
    
    For DataHub topics of the BLOB type (for untyped and unstructured data), the corresponding Flink table must contain exactly one VARBINARY column.
    
    accessId
    
    The AccessKey ID of your Alibaba Cloud account.
    
    String
    
    Yes
    
    No default value
    
    For more information, see [Console operations](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe).
    
    **Important**
    
    To protect your AccessKey pair, provide the information using variables. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
    accessKey
    
    The AccessKey secret of your Alibaba Cloud account.
    
    String
    
    Yes
    
    No default value
    
    retryTimeout
    
    The maximum timeout period for a retry.
    
    Integer
    
    No
    
    1800000
    
    We recommend using the default value. Unit: milliseconds.
    
    retryInterval
    
    The retry interval.
    
    Integer
    
    No
    
    1000
    
    We recommend using the default value. Unit: milliseconds.
    
    CompressType
    
    The compression policy for reads and writes.
    
    String
    
    No
    
    lz4
    
    -   lz4: lz4 compression algorithm.
        
    -   deflate: deflate compression algorithm.
        
    -   "": an empty string, indicating that data compression is disabled.
        
    
    **Note**
    
    Only Realtime Compute for Apache Flink that uses VVR 6.0.5 or later supports this option.
    
-   Source-specific
    
    **Option**
    
    **Description**
    
    **Type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    subId
    
    The subscription ID.
    
    String
    
    Yes
    
    No default value
    
    For more information about how to create a DataHub subscription, see [Create a subscription](/help/en/datahub/user-guide/create-a-subscription#d0b9455085yo1).
    
    maxFetchSize
    
    The number of data records that are read at a time.
    
    Integer
    
    No
    
    50
    
    This option influences the read performance. You can set it to a bigger value to increase the read throughput.
    
    maxBufferSize
    
    The maximum number of cached data records that are read asynchronously.
    
    Integer
    
    No
    
    50
    
    This option influences the read performance. You can set it to a bigger value to increase the read throughput.
    
    fetchLatestDelay
    
    The sleep duration after which no data is fetched from the data source.
    
    Integer
    
    No
    
    500
    
    Unit: milliseconds. If data is infrequently sent from the data source, specify a smaller value for this option to optimize read throughput.
    
    lengthCheck
    
    The rule for checking the number of fields per row.
    
    String
    
    No
    
    NONE
    
    -   NONE
        
        -   If the number of fields that are parsed from a row is greater than the number of defined fields, data is extracted from left to right based on the number of defined fields.
            
        -   If the number of fields that are parsed from a row is less than the defined number of fields, this row is skipped.
            
    -   SKIP: If the number of fields that are parsed from a row is different from the number of defined fields, this row is skipped.
        
    -   EXCEPTION: If the number of fields that are parsed from a row is different from the defined number of fields, an exception is reported.
        
    -   PAD: Data is padded from left to right based on the order of defined fields.
        
        -   If the number of fields that are parsed from a row is greater than the number of defined fields, data is extracted from left to right based on the number of defined fields.
            
        -   If the number of fields that are parsed from a row is less than the defined number of fields, the values of the missing fields are padded with "Null" from left to right.
            
    
    columnErrorDebug
    
    Specifies whether to enable debugging.
    
    Boolean
    
    No
    
    false
    
    -   false: Debugging is disabled.
        
    -   true: Debugging is enabled and the logs about parsing exceptions are printed.
        
    
    startTime
    
    The time at which log consumption starts.
    
    String
    
    No
    
    No default value
    
    Format: yyyy-MM-dd hh:mm:ss.
    
    endTime
    
    The time at which log consumption is stopped.
    
    String
    
    No
    
    No default value
    
    Format: yyyy-MM-dd hh:mm:ss.
    
    startTimeMs
    
    The time at which log consumption starts.
    
    Long
    
    No
    
    \-1
    
    Unit: milliseconds. This option takes precedence over `startTime`. A default value of -1 indicates consumption from the latest offset in the DataHub topic. If no offset exists, consumption will begin from the earliest offset.
    
    **Important**
    
    Relying on the default value can result in data loss. If your job fails before its initial checkpoint, the latest offset in the DataHub topic may have advanced, causing you to miss data. To prevent this, explicitly configure this option instead of using the default.
    
-   Sink-specific
    
    **Option**
    
    **Description**
    
    **Type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    batchCount
    
    The number of rows that can be written at a time.
    
    Integer
    
    No
    
    500
    
    Increasing this option value improves write throughput at the cost of higher latency.
    
    batchSize
    
    The size of data that can be written at a time.
    
    Integer
    
    No
    
    512000
    
    Increasing this value improves write throughput at the cost of higher latency. Unit: bytes.
    
    flushInterval
    
    The data flush interval.
    
    Integer
    
    No
    
    5000
    
    Increasing this option value improves write throughput at the cost of higher latency. Unit: milliseconds.
    
    hashFields
    
    The column names. After column names are specified, the values of the columns with the same name are written to the same shard.
    
    String
    
    No
    
    null
    
    Separate multiple column values with commas (,), for example, `hashFields=a,b`. The default value "null" indicates random writes.
    
    timeZone
    
    The time zone of the data.
    
    String
    
    No
    
    No default value
    
    The option value affects the conversion of TIMESTAMP fields between time zones.
    
    schemaVersion
    
    The version in the registered schema.
    
    Integer
    
    No
    
    \-1
    
    N/A
    

## Data type mappings

**Flink**

**DataHub**

TINYINT

TINYINT

BOOLEAN

BOOLEAN

INTEGER

INTEGER

BIGINT

BIGINT

BIGINT

TIMESTAMP

TIMESTAMP

FLOAT

FLOAT

DOUBLE

DOUBLE

DECIMAL

DECIMAL

VARCHAR

STRING

SMALLINT

SMALLINT

VARBINARY

BLOB

## Metadata

**Key**

**Type**

**Description**

shard-id

BIGINT METADATA VIRTUAL

The shard ID.

sequence

STRING METADATA VIRTUAL

The data sequence.

system-time

TIMESTAMP METADATA VIRTUAL

The system time.

**Note**

You can obtain the preceding DataHub metadata only if you use VVR 3.0.1 or later.

## Sample code

-   Source
    
    ```
    CREATE TEMPORARY TABLE datahub_input (
      `time` BIGINT,
      `sequence`  STRING METADATA VIRTUAL,
      `shard-id` BIGINT METADATA VIRTUAL,
      `system-time` TIMESTAMP METADATA VIRTUAL
    ) WITH (
      'connector' = 'datahub',
      'subId' = '<yourSubId>',
      'endPoint' = '<yourEndPoint>',
      'project' = '<yourProjectName>',
      'topic' = '<yourTopicName>',
      'accessId' = '${secret_values.ak_id}',
      'accessKey' = '${secret_values.ak_secret}'
    );
    
    CREATE TEMPORARY TABLE test_out (
      `time` BIGINT,
      `sequence`  STRING,
      `shard-id` BIGINT,
      `system-time` TIMESTAMP
    ) WITH (
      'connector' = 'print',
      'logger' = 'true'
    );
    
    INSERT INTO test_out
    SELECT
      `time`,
      `sequence` ,
      `shard-id`,
      `system-time`
    FROM datahub_input;
    ```
    
-   Sink
    
    ```
    CREATE TEMPORARY table datahub_source(
      name VARCHAR
    ) WITH (
      'connector'='datahub',
      'endPoint'='<endPoint>',
      'project'='<yourProjectName>',
      'topic'='<yourTopicName>',
      'subId'='<yourSubId>',
      'accessId'='${secret_values.ak_id}',
      'accessKey'='${secret_values.ak_secret}',
      'startTime'='2018-06-01 00:00:00'
    );
    
    CREATE TEMPORARY table datahub_sink(
      name varchar
    ) WITH (
      'connector'='datahub',
      'endPoint'='<endPoint>',
      'project'='<yourProjectName>',
      'topic'='<yourTopicName>',
      'accessId'='${secret_values.ak_id}',
      'accessKey'='${secret_values.ak_secret}',
      'batchSize'='512000',
      'batchCount'='500'
    );
    
    INSERT INTO datahub_sink
    SELECT
      LOWER(name)
    from datahub_source;
    ```
    

## Datastream API

**Important**

If you want to call a DataStream API to read or write data, you must use a DataStream connector of the related type to connect to Realtime Compute for Apache Flink. For more information about how to configure a DataStream connector, see [Settings of DataStream connectors](/help/en/flink/realtime-flink/developer-reference/settings-of-datastream-connectors#main-2309395).

#### **DataHub source**

VVR provides the DatahubSourceFunction class that implements the SourceFunction interface. You can use the class to read data from a DataHub source. The following sample code shows how to read data from DataHub.

```

env.setParallelism(1);
-- Specify the connection configurations. 
DatahubSourceFunction datahubSource =
    new DatahubSourceFunction(
    <yourEndPoint>,
    <yourProjectName>,
    <yourTopicName>,
    <yourSubId>,
    <yourAccessId>,
    <yourAccessKey>,
    "public",
    <yourStartTime>,
    <yourEndTime>
    );
datahubSource.setRequestTimeout(30 * 1000);
datahubSource.enableExitAfterReadFinished();
env.addSource(datahubSource)
    .map((MapFunction<RecordEntry, Tuple2<String, Long>>) this::getStringLongTuple2)
    .print();
env.execute();
private Tuple2<String, Long> getStringLongTuple2(RecordEntry recordEntry) {
    Tuple2<String, Long> tuple2 = new Tuple2<>();
    TupleRecordData recordData = (TupleRecordData) (recordEntry.getRecordData());
    tuple2.f0 = (String) recordData.getField(0);
    tuple2.f1 = (Long) recordData.getField(1);
    return tuple2;StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
```

#### **DataHub sink**

VVR provides the OutputFormatSinkFunction class that implements the DatahubSinkFunction interface. You can use the class to write data to DataHub. The following sample code shows how to write data to DataHub.

```
StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
-- Specify the connection configurations. 
env.generateSequence(0, 100)
    .map((MapFunction<Long, RecordEntry>) aLong -> getRecordEntry(aLong, "default:"))
    .addSink(
    new DatahubSinkFunction<>(
       <yourEndPoint>,
       <yourProjectName>,
       <yourTopicName>,
       <yourSubId>,
       <yourAccessId>,
       <yourAccessKey>,
       "public",
       <schemaVersion> // If schemaRegistry is enabled, you must specify the value of schemaVersion for data writing. In other cases, you can set this schemaVersion to 0. 
       );
env.execute();
private RecordEntry getRecordEntry(Long message, String s) {
    RecordSchema recordSchema = new RecordSchema();
    recordSchema.addField(new Field("f1", FieldType.STRING));
    recordSchema.addField(new Field("f2", FieldType.BIGINT));
    recordSchema.addField(new Field("f3", FieldType.DOUBLE));
    recordSchema.addField(new Field("f4", FieldType.BOOLEAN));
    recordSchema.addField(new Field("f5", FieldType.TIMESTAMP));
    recordSchema.addField(new Field("f6", FieldType.DECIMAL));
    RecordEntry recordEntry = new RecordEntry();
    TupleRecordData recordData = new TupleRecordData(recordSchema);
    recordData.setField(0, s + message);
    recordData.setField(1, message);
    recordEntry.setRecordData(recordData);
    return recordEntry;
}
```

#### **XML**

You can use the [DataHub DataStream connectors](https://mvnrepository.com/artifact/com.alibaba.ververica/ververica-connector-datahub) of different versions stored in the Maven central repository.

```
<dependency>
    <groupId>com.alibaba.ververica</groupId>
    <artifactId>ververica-connector-datahub</artifactId>
    <version>${vvr-version}</version>
</dependency>
```

## References

-   For more information about the connectors that are supported by Realtime Compute for Apache Flink, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors).
    
-   For information about how to use the Kafka connector to access DataHub, see [Message Queue for Apache Kafka](/help/en/flink/realtime-flink/developer-reference/kafka-connector/).
    
-   [How do I resume a deployment of Realtime Compute for Apache Flink that fails to run after a DataHub topic is split or scaled in?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-wyu-gz3-678)
    
-   [Can I delete a DataHub topic that is being consumed?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-9cc-z2v-iwb)
