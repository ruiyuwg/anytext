This topic describes how to use the Simple Log Service (SLS) connector.

## Background information

The [Simple Log Service](/help/en/sls/what-is-log-service#concept-mt2-ykn-vdb) is a comprehensive service for log data. It enables you to quickly collect, consume, deliver, and query log data, which improves O&M and operational efficiency and builds large-scale log processing capabilities.

The following table lists information supported by the SLS connector.

**Category**

**Details**

Supported types

Source tables and sink tables

Execution mode

Streaming mode only

Custom monitoring metrics

Not applicable

Data format

None

API types

SQL, DataStream, and data ingestion YAML

Support for updating or deleting sink table data

Does not support updating or deleting sink table data. Supports insert operations only.

## Key features

The SLS connector's source table supports direct reading of message metadata fields. The supported metadata fields are listed in the following table.

**Field name**

**Field type**

**Description**

\_\_source\_\_

STRING METADATA VIRTUAL

Message source.

\_\_topic\_\_

STRING METADATA VIRTUAL

Message topic.

\_\_timestamp\_\_

BIGINT METADATA VIRTUAL

Log time.

\_\_tag\_\_

MAP<VARCHAR, VARCHAR> METADATA VIRTUAL

Message tag.

For the property `"__tag__:__receive_time__":"1616742274"`, `'__receive_time__'` and '1616742274' are stored as a key-value pair in a Map and can be accessed in SQL using `__tag__['__receive_time__']`.

## Prerequisites

You must create an SLS project and Logstore. For more information, see [Create a project and a Logstore](/help/en/sls/getting-started#section-2l7-ol2-zro).

## Limits

-   Only Ververica Runtime (VVR) 11.1 and later support SLS as a synchronized data source for data ingestion YAML.
    
-   The SLS connector guarantees at-least-once semantics.
    
-   Avoid setting the source concurrency higher than the number of shards, as this wastes resources. In VVR 8.0.5 and earlier, if the number of shards changes, automatic failover may stop working, which can result in some shards not being consumed.
    

## **SQL**

### **Syntax**

```
CREATE TABLE sls_table(
  a INT,
  b INT,
  c VARCHAR
) WITH (
  'connector' = 'sls',
  'endPoint' = '<yourEndPoint>',
  'project' = '<yourProjectName>',
  'logStore' = '<yourLogStoreName>',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}'
);
```

### **WITH parameters**

-   Common parameters
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    connector
    
    Table type.
    
    String
    
    Yes
    
    None
    
    Fixed value: sls.
    
    endPoint
    
    Endpoint address.
    
    String
    
    Yes
    
    None
    
    Enter the private network endpoint for SLS. For more information, see [Service endpoint](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).
    
    **Note**
    
    -   Realtime Compute for Apache Flink does not support public network access by default. However, Alibaba Cloud NAT Gateway enables communication between VPC networks and the public network. For more information, see [How do I access the public network?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#69d744e13et7x).
        
    -   Avoid accessing SLS across the public network. If required, use HTTPS and enable Global Accelerator (GA) for SLS. For more information, see [Manage transfer acceleration](/help/en/sls/transmission-acceleration).
        
    
    project
    
    SLS project name.
    
    String
    
    Yes
    
    None
    
    None.
    
    logStore
    
    SLS Logstore or metricstore name.
    
    String
    
    Yes
    
    None
    
    Logstores and metricstores use the same consumption method.
    
    accessId
    
    AccessKey ID of your Alibaba Cloud account.
    
    String
    
    Yes
    
    None
    
    For more information, see [How do I view my AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe).
    
    **Important**
    
    To avoid exposing your AccessKey information, use variables to specify AccessKey values. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).
    
    accessKey
    
    AccessKey secret of your Alibaba Cloud account.
    
    String
    
    Yes
    
    None
    
-   Source-specific parameters
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    enableNewSource
    
    Whether to enable the new source that implements the [FLIP-27](https://cwiki.apache.org/confluence/display/FLINK/FLIP-27%3A+Refactor+Source+Interface) interface.
    
    Boolean
    
    No
    
    false
    
    The new source automatically adapts to shard changes and distributes shards evenly across all source tasks.
    
    **Important**
    
    -   This parameter is supported in VVR 8.0.9 and later. Starting from VVR 11.1, the default value is true.
        
    -   If you change this parameter, the job cannot resume from its previous state. To resume consumption from a historical offset, first start the job with the consumerGroup parameter to record the consumption progress in the SLS consumer group. Then set consumeFromCheckpoint to true and restart the job without state.
        
    -   If read-only shards exist in SLS, some Flink tasks may continue requesting other unprocessed shards after finishing consumption of read-only shards. This may cause uneven shard distribution among concurrent tasks, reducing overall consumption efficiency and system performance. To mitigate this issue, adjust concurrency, optimize task scheduling, or merge small shards to reduce shard count and task assignment complexity.
        
    
    shardDiscoveryIntervalMs
    
    Interval to dynamically detect shard changes, in milliseconds.
    
    Long
    
    No
    
    60000
    
    Set to a negative value to disable dynamic detection.
    
    **Note**
    
    -   This value must be at least 60000 ms (1 minute).
        
    -   This parameter takes effect only when enableNewSource is true.
        
    -   This parameter is supported in VVR 8.0.9 and later.
        
    
    startupMode
    
    Startup mode for the source table.
    
    String
    
    No
    
    timestamp
    
    -   `timestamp` (default): Consume logs starting from a specified time.
        
    -   `latest`: Consume logs starting from the latest offset.
        
    -   `earliest`: Consume logs starting from the earliest offset.
        
    -   `consumer_group`: Consume logs starting from the offset recorded in the consumer group. If no offset is recorded for a shard, consumption starts from the earliest offset.
        
    
    **Important**
    
    -   VVR versions earlier than 11.1 do not support consumer\_group. Set `consumeFromCheckpoint` to `true`. Consumption then starts from the offset recorded in the specified consumer group, and startupMode has no effect.
        
    
    startTime
    
    Start time for consuming logs.
    
    String
    
    No
    
    Current time
    
    Format: `yyyy-MM-dd hh:mm:ss`.
    
    Takes effect only when `startupMode` is set to `timestamp`.
    
    **Note**
    
    startTime and stopTime are based on the \_\_receive\_time\_\_ attribute in SLS, not \_\_timestamp\_\_.
    
    stopTime
    
    End time for consuming logs.
    
    String
    
    No
    
    None
    
    Format: `yyyy-MM-dd hh:mm:ss`.
    
    **Note**
    
    -   Use this parameter to consume historical logs only. Set it to a past time. If set to a future time, consumption may end early due to lack of new logs, causing data stream interruption without error messages.
        
    -   To exit the Flink program when log consumption finishes, also set exitAfterFinish=true.
        
    
    consumerGroup
    
    Consumer group name.
    
    String
    
    No
    
    None
    
    A consumer group records consumption progress. You can define custom names without restrictions.
    
    **Note**
    
    You cannot coordinate consumption across multiple jobs using the same consumer group. Each Flink job must use a unique consumer group. If multiple jobs share the same consumer group, they consume all data. This occurs because Flink does not assign partitions through the SLS consumer group, so each consumer independently processes messages regardless of the shared group.
    
    consumeFromCheckpoint
    
    Whether to consume logs starting from the checkpoint saved in the specified consumer group.
    
    String
    
    No
    
    false
    
    -   `true`: Specify a consumer group. The Flink program consumes logs starting from the checkpoint saved in that group. If no checkpoint exists, consumption starts from the startTime value.
        
    -   `false` (default): Do not consume logs starting from the checkpoint saved in the specified consumer group.
        
    
    **Important**
    
    VVR 11.1 and later do not support this parameter. For VVR 11.1 and later, set `startupMode` to `consumer_group`.
    
    maxRetries
    
    Number of retries after failed SLS reads.
    
    String
    
    No
    
    3
    
    None.
    
    batchGetSize
    
    Number of log groups to read per request.
    
    String
    
    No
    
    100
    
    The `batchGetSize` value must not exceed 1000. Otherwise, an error occurs.
    
    exitAfterFinish
    
    Whether the Flink program exits after data consumption completes.
    
    String
    
    No
    
    false
    
    -   `true`: The Flink program exits after data consumption completes.
        
    -   `false` (default): The Flink program continues running after data consumption completes.
        
    
    query
    
    **Important**
    
    Deprecated starting from VVR 11.3. Still compatible in later versions.
    
    SLS consumption pre-processing statement.
    
    String
    
    No
    
    None
    
    Use the query parameter to filter SLS data before consumption. This avoids consuming all data into Flink, saving costs and improving processing speed.
    
    For example, `**'query' = '*| where request_method = ''GET'''**` matches logs where the request\_method field equals GET before Flink reads them.
    
    **Note**
    
    Use SPL syntax for queries. For more information, see [SPL syntax](/help/en/sls/spl-overview/).
    
    **Important**
    
    -   This parameter is supported in VVR 8.0.1 and later.
        
    -   This feature incurs SLS charges. For more information, see [Pricing](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
        
    
    processor
    
    SLS consumer processor. Takes precedence over query when both are present.
    
    String
    
    No
    
    None
    
    Use the processor parameter to filter SLS data before consumption. This avoids consuming all data into Flink, saving costs and improving processing speed. We recommend processor over query.
    
    For example, `'processor' = 'test-filter-processor'` applies the SLS consumer processor before Flink reads the data.
    
    **Note**
    
    Use SPL syntax for processors. For more information, see [SPL syntax](/help/en/sls/spl-overview/). For instructions on creating or updating consumer processors, see [Manage consumer processors](/help/en/sls/manage-consumer-processors).
    
    **Important**
    
    This parameter is supported in VVR 11.3 and later.
    
    This feature incurs SLS charges. For more information, see [Pricing](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   For sink tables only
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    topicField
    
    Name of the field whose value overrides the \_\_topic\_\_ metadata field. Represents the log topic.
    
    String
    
    No
    
    None
    
    This field must exist in the table.
    
    timeField
    
    Name of the field whose value overrides the \_\_timestamp\_\_ metadata field. Represents the log write time.
    
    String
    
    No
    
    Current time
    
    This field must exist in the table and have the INT data type. If unspecified, the current time is used.
    
    sourceField
    
    Name of the field whose value overrides the \_\_source\_\_ metadata field. Represents the log source, such as the IP address of the machine that generated the log.
    
    String
    
    No
    
    None
    
    This field must exist in the table.
    
    partitionField
    
    Name of the field. Data is written to shards based on the hash value of this field. Data with the same hash value goes to the same shard.
    
    String
    
    No
    
    None
    
    If unspecified, each record is randomly written to an available shard.
    
    buckets
    
    Number of buckets to reassign data to when partitionField is specified.
    
    String
    
    No
    
    64
    
    Valid values: integers from 1 to 256 that are powers of two. Buckets must be greater than or equal to the number of shards. Otherwise, some shards receive no data.
    
    flushIntervalMs
    
    Time interval that triggers data writes.
    
    String
    
    No
    
    2000
    
    Unit: milliseconds.
    
    writeNullProperties
    
    Whether to write null values as empty strings to SLS.
    
    Boolean
    
    No
    
    true
    
    -   `true` (default): Write null values as empty strings.
        
    -   `false`: Skip fields with null values during writing.
        
    
    **Note**
    
    This parameter is supported in VVR 8.0.6 and later.
    

### **Type mapping**

**Flink field type**

**SLS field type**

BOOLEAN

STRING

VARBINARY

VARCHAR

TINYINT

INTEGER

BIGINT

FLOAT

DOUBLE

DECIMAL

## **Data ingestion (public preview)**

### Limits

This feature is supported only in VVR 11.1 and later.

### **Syntax**

```
source:
   type: sls
   name: SLS Source
   endpoint: <endpoint>
   project: <project>
   logstore: <logstore>
   accessId: <accessId>
   accessKey: <accessKey>
```

### **Configuration items**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Notes**

type

Data source type.

String

Yes

None

Fixed value: sls.

endpoint

Endpoint address.

String

Yes

None

Enter the private network endpoint for SLS. For more information, see [Service endpoint](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).

**Note**

-   Realtime Compute for Apache Flink does not support public network access by default. However, Alibaba Cloud NAT Gateway enables communication between VPC networks and the public network. For more information, see [How do I access the public network?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#69d744e13et7x).
    
-   Avoid accessing SLS across the public network. If required, use HTTPS and enable Global Accelerator (GA) for SLS. For more information, see [Manage transfer acceleration](/help/en/sls/transmission-acceleration).
    

accessId

AccessKey ID of your Alibaba Cloud account.

String

Yes

None

For more information, see [How do I view my AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe).

**Important**

To avoid exposing your AccessKey information, use variables to specify AccessKey values. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).

accessKey

AccessKey secret of your Alibaba Cloud account.

String

Yes

None

project

SLS project name.

String

Yes

None

None.

logStore

SLS Logstore or metricstore name.

String

Yes

None

Logstores and metricstores use the same consumption method.

schema.inference.strategy

Schema inference strategy.

String

No

continuous

-   `continuous`: Infer schema for every record. When schemas are incompatible, infer a wider schema and generate a schema change event.
    
-   `static`: Infer schema once at job startup. Parse subsequent records using the initial schema. No schema change events are generated.
    

maxPreFetchLogGroups

Maximum number of log groups to attempt to read and parse per shard during initial schema inference.

Integer

No

50

Before actual data reading and processing, attempt to consume the specified number of log groups per shard to initialize schema information.

shardDiscoveryIntervalMs

Interval to dynamically detect shard changes, in milliseconds.

Long

No

60000

Set to a negative value to disable dynamic detection.

**Note**

This value must be at least 60000 ms (1 minute).

startupMode

Startup mode.

String

No

None

-   `timestamp` (default): Consume logs starting from a specified time.
    
-   `latest`: Consume logs starting from the latest offset.
    
-   `earliest`: Consume logs starting from the earliest offset.
    
-   `consumer_group`: Consume logs starting from the offset recorded in the consumer group. If no offset is recorded for a shard, consumption starts from the earliest offset.
    

startTime

Start time for consuming logs.

String

No

Current time

Format: yyyy-MM-dd hh:mm:ss.

Takes effect only when startupMode is set to timestamp.

**Note**

startTime and stopTime are based on the \_\_receive\_time\_\_ attribute in SLS, not \_\_timestamp\_\_.

stopTime

The end time of log consumption.

String

No

None

Format: yyyy-MM-dd hh:mm:ss.

**Note**

To exit the Flink program when log consumption finishes, also set exitAfterFinish=true.

consumerGroup

Consumer group name.

String

No

None

A consumer group records consumption progress. You can define custom names without restrictions.

batchGetSize

Number of log groups to read per request.

Integer

No

100

The **batchGetSize** value must not exceed 1000. Otherwise, an error occurs.

maxRetries

Number of retries after failed SLS reads.

Integer

No

3

None.

exitAfterFinish

Whether the Flink program exits after data consumption completes.

Boolean

No

false

-   `true`: The Flink program exits after data consumption completes.
    
-   `false` (default): The Flink program continues running after data consumption completes.
    

query

Preprocessing statement for SLS consumption.

String

No

None

Use the query parameter to filter SLS data before consumption. This avoids consuming all data into Flink, saving costs and improving processing speed.

For example, `'query' = '*| where request_method = ''GET'''` matches logs where the request\_method field equals GET before Flink reads them.

**Note**

Use SPL syntax for queries. For more information, see [SPL syntax](/help/en/sls/spl-overview/).

**Important**

-   For regions where SLS supports this feature, see [Consume logs based on rules](/help/en/sls/rule-based-consumption).
    
-   This feature is free during public preview. Charges may apply later. For more information, see [Pricing](/help/en/sls/rule-based-consumption#r5nzl).
    

compressType

SLS compression type.

String

No

None

Supported compression types:

-   lz4
    
-   deflate
    
-   zstd
    

timeZone

Time zone for startTime and stopTime.

String

No

None

No offset is added by default.

regionId

Region where SLS is available.

String

No

None

For configuration details, see the [Available regions](/help/en/sls/sls-supported-regions1) documentation.

signVersion

SLS request signature version.

String

No

None

For configuration details, see the [Request signing](/help/en/sls/developer-reference/request-signatures) documentation.

shardModDivisor

Divisor used when reading SLS Logstore shards.

Int

No

\-1

For configuration details, see the [Shard](/help/en/sls/shard) documentation.

shardModRemainder

Remainder used when reading SLS Logstore shards.

Int

No

\-1

For configuration details, see the [Shard](/help/en/sls/shard) documentation.

metadata.list

Metadata columns to pass to downstream systems.

String

No

None

Supported metadata fields include `__source__`, `__topic__`, `__timestamp__`, and `__tag__`. Separate multiple fields with commas.

decode.table-id.fields

Fields used to generate the table ID when parsing SLS log data.

String

No

None

Multiple fields are connected by an English comma (`,`). For example, when the upstream SLS log record is `{"col0":"a", "col1":"b", "col2":"c"}`, different parameter settings produce the following results:

**Configuration**

**Table ID**

None

All messages are stored in `Project.LogStore`.

col0

`a`

col0,col1

`a.b`

col0,col1,col2

`a.b.c`

**Note**

This configuration is supported in VVR 11.6 and later.

fixed-types

Field types to specify when parsing SLS log data.

String

No

None

When parsing data, specify the data types of certain fields. Separate multiple fields with English `,` commas. For example, `id BIGINT, name VARCHAR(10)` specifies that the id field in the data is of type BIGINT, and the name field is of type VARCHAR(10).

**Note**

This configuration is supported in VVR 11.6 and later.

timestamp-format.standard

Format of timestamp fields in SLS log data.

String

No

SQL

Valid values:

-   SQL: Parses timestamps in yyyy-MM-dd HH:mm:ss.s{precision} format, such as 2020-12-30 12:13:14.123, and outputs them in the same format.
    
-   ISO-8601: Parses timestamps in yyyy-MM-ddTHH:mm:ss.s{precision} format, such as 2020-12-30T12:13:14.123, and outputs them in the same format.
    

**Note**

This configuration is supported in VVR 11.6 and later.

ingestion.ignore-errors

Whether to ignore errors during data parsing.

Boolean

No

false

**Note**

This configuration is supported in VVR 11.6 and later.

ingestion.error-tolerance.max-count

Maximum number of parsing errors allowed before the job fails, when ingestion.ignore-errors is enabled.

Integer

No

\-1

Takes effect only when ingestion.ignore-errors is enabled. A default value of -1 means parsing errors do not trigger job failure.

**Note**

This configuration is supported in VVR 11.6 and later.

### **Type mapping**

When fixed-types is not configured, the data ingestion type mapping is as follows:

**SLS field type**

**CDC field type**

STRING

STRING

When fixed-types is configured, the connector attempts to parse data using the specified types.

### **Schema inference and schema change synchronization**

-   Shard pre-consumption and schema initialization
    
    The SLS connector maintains the current schema of the Logstore from which it reads data. Before reading data, it pre-consumes up to \`maxPreFetchLogGroups\` log groups per shard. It then parses the schema of each log and merges these schemas to initialize the table structure. Subsequently, before actual consumption, it generates corresponding table creation events based on the initialized schema.
    
    **Note**
    
    For each shard, the SLS connector attempts to consume and parse log schemas starting one hour before the current time.
    
-   Primary key information
    
    SLS logs do not contain primary key information. You can manually add a primary key using transform rules:
    
    ```
    transform:
      - source-table: <project>.<logstore>
        projection: \*
        primary-keys: key1, key2
    ```
    
-   Schema inference and schema changes
    
    After schema initialization, if **schema.inference.strategy** is set to static, the SLS connector parses each log using the initial schema, and it does not generate schema change events. If **schema.inference.strategy** is set to continuous, the SLS connector parses each log, infers physical columns, and compares them with the current schema. It then merges schemas when they differ. Merging rules:
    
    -   If inferred physical columns include fields not present in the current schema, those fields are added to the schema, and a new nullable column event is generated.
        
    -   If inferred physical columns exclude fields already present in the current schema, those fields remain. Their data is filled with NULL, and no column deletion event is generated.
        
    
    The SLS connector infers all field types in logs as \`STRING\`. Currently, only column addition is supported. New columns are appended to the end of the current schema and are set as nullable.
    

## Code examples

-   SQL source and sink tables
    
    ```
    CREATE TEMPORARY TABLE sls_input(
      `time` BIGINT,
      url STRING,
      dt STRING,
      float_field FLOAT,
      double_field DOUBLE,
      boolean_field BOOLEAN,
      `__topic__` STRING METADATA VIRTUAL,
      `__source__` STRING METADATA VIRTUAL,
      `__timestamp__` STRING METADATA VIRTUAL,
       __tag__ MAP<VARCHAR, VARCHAR> METADATA VIRTUAL,
      proctime as PROCTIME()
    ) WITH (
      'connector' = 'sls',
      'endpoint' ='cn-hangzhou-intranet.log.aliyuncs.com',
      'accessId' = '${secret_values.ak_id}',
      'accessKey' = '${secret_values.ak_secret}',
      'starttime' = '2023-08-30 00:00:00',
      'project' ='sls-test',
      'logstore' ='sls-input'
    );
    
    CREATE TEMPORARY TABLE sls_sink(
      `time` BIGINT,
      url STRING,
      dt STRING,
      float_field FLOAT,
      double_field DOUBLE,
      boolean_field BOOLEAN,
      `__topic__` STRING,
      `__source__` STRING,
      `__timestamp__` BIGINT ,
      receive_time BIGINT
    ) WITH (
      'connector' = 'sls',
      'endpoint' ='cn-hangzhou-intranet.log.aliyuncs.com',
      'accessId' = '${ak_id}',
      'accessKey' = '${ak_secret}',
      'project' ='sls-test',
      'logstore' ='sls-output'
    );
    
    INSERT INTO sls_sink
    SELECT 
     `time`,
      url,
      dt,
      float_field,
      double_field,
      boolean_field,
      `__topic__` ,
      `__source__` ,
      `__timestamp__` ,
      cast(__tag__['__receive_time__'] as bigint) as receive_time
    FROM sls_input; 
    ```
    
-   Data ingestion source
    
    SLS can serve as a data source for data ingestion jobs, writing SLS data in real time to supported downstream systems. For example, you can configure a data ingestion job to write data from a Logstore to a DLF data lake in Paimon format. The job automatically infers field data types and downstream table structures, and it supports dynamic schema evolution during runtime.
    

```
source:
  type: sls
  name: SLS Source
  endpoint: ${endpoint}
  project: test_project
  logstore: test_log
  accessId: ${accessId}
  accessKey: ${accessKey}
   
# Add primary key information to the table 
transform:
  - source-table: \.*.\.*
    projection: \*
    primary-keys: id
    
# Write all data from test_log to the test_database.inventory table
route:
  - source-table: test_project.test_log
    sink-table: test_database.inventory

sink:
  type: paimon
  catalog.properties.metastore: rest
  catalog.properties.uri: dlf_uri
  catalog.properties.warehouse: your_warehouse
  catalog.properties.token.provider: dlf
  # (Optional) Enable deletion vectors to improve read performance
  table.properties.deletion-vectors.enabled: true
```

## DataStream API

**Important**

To read or write data using DataStream, you must use the corresponding DataStream connector for Flink. For instructions, see [Use DataStream connectors](/help/en/flink/realtime-flink/developer-reference/settings-of-datastream-connectors#main-2309395).

If you use VVR earlier than 8.0.10, missing dependency JAR files may prevent job startup. You must add the corresponding -uber JAR file as an additional dependency.

#### **Read from SLS**

VVR provides the \`SlsSourceFunction\` class for reading from SLS. The following example shows how to read from SLS.

```
public class SlsDataStreamSource {

    public static void main(String[] args) throws Exception {
        // Sets up the streaming execution environment
        final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        // Creates and adds SLS source and sink.
        env.addSource(createSlsSource())
                .map(SlsDataStreamSource::convertMessages)
                .print();
        env.execute("SLS Stream Source");
    }

    private static SlsSourceFunction createSlsSource() {
        SLSAccessInfo accessInfo = new SLSAccessInfo();
        accessInfo.setEndpoint("yourEndpoint");
        accessInfo.setProjectName("yourProject");
        accessInfo.setLogstore("yourLogStore");
        accessInfo.setAccessId("yourAccessId");
        accessInfo.setAccessKey("yourAccessKey");

        // The batch get size must be given.
        accessInfo.setBatchGetSize(10);

        // Optional parameters
        accessInfo.setConsumerGroup("yourConsumerGroup");
        accessInfo.setMaxRetries(3);

        // time to start consuming, set to current time.
        int startInSec = (int) (new Date().getTime() / 1000);

        // time to stop consuming, -1 means never stop.
        int stopInSec = -1;

        return new SlsSourceFunction(accessInfo, startInSec, stopInSec);
    }

    private static List<String> convertMessages(SourceRecord input) {
        List<String> res = new ArrayList<>();
        for (FastLogGroup logGroup : input.getLogGroups()) {
            int logsCount = logGroup.getLogsCount();
            for (int i = 0; i < logsCount; i++) {
                FastLog log = logGroup.getLogs(i);
                int fieldCount = log.getContentsCount();
                for (int idx = 0; idx < fieldCount; idx++) {
                    FastLogContent f = log.getContents(idx);
                    res.add(String.format("key: %s, value: %s", f.getKey(), f.getValue()));
                }
            }
        }
        return res;
    }
}
```

#### **Write to SLS**

VVR provides the \`SLSOutputFormat\` class for writing to SLS. The following example shows how to write to SLS.

```
public class SlsDataStreamSink {

    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        env.fromSequence(0, 100)
                .map((MapFunction<Long, SinkRecord>) aLong -> getSinkRecord(aLong))
                .addSink(createSlsSink())
                .name(SlsDataStreamSink.class.getSimpleName());
        env.execute("SLS Stream Sink");
    }

    private static OutputFormatSinkFunction createSlsSink() {
        Configuration conf = new Configuration();
        conf.setString(SLSOptions.ENDPOINT, "yourEndpoint");
        conf.setString(SLSOptions.PROJECT, "yourProject");
        conf.setString(SLSOptions.LOGSTORE, "yourLogStore");
        conf.setString(SLSOptions.ACCESS_ID, "yourAccessId");
        conf.setString(SLSOptions.ACCESS_KEY, "yourAccessKey");
        SLSOutputFormat outputFormat = new SLSOutputFormat(conf);
        return new OutputFormatSinkFunction<>(outputFormat);
    }

    private static SinkRecord getSinkRecord(Long seed) {
        SinkRecord record = new SinkRecord();
        LogItem logItem = new LogItem((int) (System.currentTimeMillis() / 1000));
        logItem.PushBack("level", "info");
        logItem.PushBack("name", String.valueOf(seed));
        logItem.PushBack("message", "it's a test message for " + seed.toString());
        record.setContent(logItem);
        return record;
    }

}
```

#### **XML**

The SLS DataStream connector is available in the Maven Central Repository at the following link: [SLS DataStream connector](https://mvnrepository.com/artifact/com.alibaba.ververica/ververica-connector-sls).

```
<dependency>
    <groupId>com.alibaba.ververica</groupId>
    <artifactId>ververica-connector-sls</artifactId>
    <version>${vvr-version}</version>
    <exclusions>
        <exclusion>
            <groupId>org.apache.flink</groupId>
            <artifactId>flink-format-common</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

## FAQ

[When recovering a failed Flink job, the TaskManager runs out of memory, and the source table reports \`java.lang.OutOfMemoryError: Java heap space\`](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-hok-xz7-3uz)
