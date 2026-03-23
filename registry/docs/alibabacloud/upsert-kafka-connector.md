This topic describes how to use the Upsert Kafka connector.

## Background information

The Upsert Kafka connector reads data from and writes data to Kafka topics using the upsert operation.

-   As a source table, the connector can convert data stored in Kafka into a changelog stream. Each record in the stream represents an update or delete event. The value in a data record is interpreted as an UPDATE for the last value of the same key, if that key exists. If the key does not exist, the update is treated as an INSERT. In table terms, a record in the changelog stream is an UPSERT, also known as an INSERT or UPDATE, because any existing row with the same key is overwritten. A message with an empty value is treated as a DELETE message.
    
-   As a sink table or data ingestion sink, the connector can consume a changelog stream produced by an upstream job. It writes INSERT or UPDATE\_AFTER data as normal Kafka messages. It writes DELETE data as Kafka messages with empty values, which indicates that the message for the corresponding key is deleted. Flink partitions data based on the values of the primary key column. This ensures that messages with the same primary key are ordered. As a result, update or delete messages for the same primary key are written to the same partition.
    

**Category**

**Description**

Supported types

Source table, sink table, and data ingestion sink

Running mode

Streaming mode

Data formats

avro, avro-confluent, csv, json, and raw

Specific monitoring metrics

-   Source table
    
    -   numRecordsIn
        
    -   numRecordsInPerSecond
        
    -   numBytesIn
        
    -   numBytesInPerScond
        
    -   currentEmitEventTimeLag
        
    -   currentFetchEventTimeLag
        
    -   sourceIdleTime
        
    -   pendingRecords
        
-   Sink table
    
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        
    -   numBytesOut
        
    -   numBytesOutPerSecond
        
    -   currentSendTime
        

API types

SQL and data ingestion YAML job

Update or delete data in a sink table

Yes

## Prerequisites

-   Create a Kafka cluster. For more information, see [Create a DataFlow Kafka cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-dataflow-kafka-cluster#task-2209533) or [Create resources in Kafka](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-3-create-resources#concept-99952-zh).
    
-   Establish a network connection between your Flink cluster and your Kafka cluster. For Kafka on EMR, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575) and [Security group overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb). For ApsaraMQ for Kafka, you must [configure a whitelist](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/user-guide/configure-a-whitelist#concept-113174-zh).
    

## Limits

-   The Kafka connector is supported only by Flink that uses Ververica Runtime (VVR) 2.0.0 or later.
    
-   The connector only supports reading from and writing to Apache Kafka 0.10 or later.
    
-   The connector supports only the client parameters of Apache Kafka 2.8. For more information, see the [consumer](https://kafka.apache.org/28/documentation.html?spm=a2c4g.11186623.0.0.715524aaf54Prv#consumerconfigs) and [producer](https://kafka.apache.org/28/documentation.html?spm=a2c4g.11186623.0.0.715524aaf54Prv#producerconfigs) configuration documentation from Apache Kafka.
    
-   If an Upsert Kafka sink table uses exactly-once semantics, the transaction feature must be enabled for the destination Kafka cluster. The cluster must be Apache Kafka 0.11 or later.
    
-   Upsert Kafka source tables support only the \`earliest-offset\` startup mode. This mode is not configurable. The connector reads all historical change data to obtain a complete changelog. This ensures that you can process a complete changelog in SQL and that the entire pipeline provides exactly-once semantics. If you specify another startup mode, such as by timestamp or \`latest-offset\`, the connector reads an incomplete changelog. This can cause data correctness issues in downstream computations.
    

## SQL

The Upsert Kafka connector reads data from and writes data to Kafka topics using the upsert operation.

### **Syntax**

```
CREATE TABLE upsert_kafka_sink(
user_region STRING,
pv BIGINT,
uv BIGINT,
PRIMARY KEY(user_region) NOT ENFORCED
)WITH(
'connector'='upsert-kafka',
'topic'='<yourTopicName>',
'properties.bootstrap.servers'='...',
'key.format'='avro',
'value.format'='avro'
);
```

### **WITH parameters**

-   General
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default**
    
    **Remarks**
    
    connector
    
    The type of the table.
    
    String
    
    Yes
    
    None
    
    Set the value to \`upsert-kafka\`.
    
    properties.bootstrap.servers
    
    The addresses of Kafka brokers.
    
    String
    
    Yes
    
    None
    
    The format is `host:port,host:port,host:port`. Separate multiple addresses with commas (,).
    
    properties.\*
    
    The parameters for the Kafka client.
    
    String
    
    No
    
    None
    
    The suffix must be a configuration defined in the official Kafka documentation for [producers](https://kafka.apache.org/28/documentation.html#producerconfigs) and [consumers](https://kafka.apache.org/28/documentation.html#consumerconfigs).
    
    Flink removes the \`properties.\` prefix and passes the remaining configuration to the Kafka client. For example, you can use `'properties.allow.auto.create.topics' = 'false'` to disable automatic topic creation.
    
    Do not modify the following configurations this way, because the Kafka connector overwrites them:
    
    -   key.deserializer
        
    -   value.deserializer
        
    
    key.format
    
    The format for the key part of Kafka messages.
    
    String
    
    Yes
    
    None
    
    If you configure this parameter, you must also configure key.fields or key.fields-prefix.
    
    Valid values:
    
    -   csv
        
    -   json
        
    -   avro
        
    -   debezium-json
        
    -   canal-json
        
    -   maxwell-json
        
    -   avro-confluent
        
    -   raw
        
    
    key.fields-prefix
    
    A custom prefix for all key fields in Kafka messages. This avoids name conflicts with fields in the value format.
    
    String
    
    No
    
    None
    
    This parameter is used only to distinguish column names between source and sink tables. The prefix is removed when the key part of Kafka messages is parsed and generated.
    
    **Note**
    
    If you configure this parameter, you must set value.fields-include to \`EXCEPT\_KEY\`.
    
    value.format
    
    The format for the value part of Kafka messages.
    
    String
    
    Yes
    
    None
    
    This parameter is equivalent to format. You can configure only one of them. A conflict occurs if you configure both format and value.format.
    
    value.fields-include
    
    Specifies whether to include the fields that correspond to the message key when the value part of a Kafka message is parsed or generated.
    
    String
    
    Yes
    
    ALL
    
    Valid values:
    
    -   ALL (Default): All columns are processed as the value part of the Kafka message.
        
    -   EXCEPT\_KEY: All columns except for the fields defined by \`key.fields\` are processed as the value part of the Kafka message.
        
    
    topic
    
    The name of the topic to read from or write to.
    
    String
    
    Yes
    
    None
    
    None.
    
-   Sink-specific parameters
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default**
    
    **Remarks**
    
    sink.parallelism
    
    The concurrency of the Kafka sink operator.
    
    Integer
    
    No
    
    The concurrency of the upstream operator, which is determined by the framework.
    
    None.
    
    sink.buffer-flush.max-rows
    
    The maximum number of records that can be cached before the cache is flushed.
    
    Integer
    
    No
    
    0 (disabled)
    
    If the sink table receives many updates on the same key, the cache retains only the last record for that key. This helps reduce the amount of data sent to the Kafka topic and avoids potential tombstone messages.
    
    **Note**
    
    To enable sink caching, set both sink.buffer-flush.max-rows and sink.buffer-flush.interval to values greater than zero.
    
    sink.buffer-flush.interval
    
    The interval at which the cache is flushed.
    
    Duration
    
    No
    
    0 (disabled)
    
    The unit can be milliseconds (ms), seconds (s), minutes (min), or hours (h). For example, `'sink.buffer-flush.interval'='1 s'`.
    
    If the sink table receives many updates on the same key, the cache retains only the last record for that key. This helps reduce the amount of data sent to the Kafka topic and avoids potential tombstone messages.
    
    **Note**
    
    To enable sink caching, set both sink.buffer-flush.max-rows and sink.buffer-flush.interval to values greater than zero.
    

## Data ingestion

The Upsert Kafka connector can be used as a sink in a YAML data ingestion job. The data is written in JSON format, and the primary key fields are also included in the message body.

### **Syntax**

```
sink:
  type: upsert-kafka
  name: upsert-kafka Sink
  properties.bootstrap.servers: localhost:9092
  # ApsaraMQ for Kafka
  aliyun.kafka.accessKeyId: ${secret_values.kafka-ak}
  aliyun.kafka.accessKeySecret: ${secret_values.kafka-sk}
  aliyun.kafka.instanceId: ${instancd-id}
  aliyun.kafka.endpoint: ${endpoint}
  aliyun.kafka.regionId: ${region-id}
```

### **Parameters**

**Parameter**

**Description**

**Data type**

**Required**

**Default**

**Remarks**

type

The type of the sink.

STRING

Yes

None

Set the value to \`upsert-kafka\`.

name

The name of the sink.

STRING

No

None

None.

properties.bootstrap.servers

The addresses of Kafka brokers.

STRING

Yes

None

The format is `host:port,host:port,host:port`. Separate multiple addresses with commas (,).

properties.\*

The parameters for the Kafka client.

STRING

No

None

The suffix must be a configuration defined in the official Kafka documentation for [producers](https://kafka.apache.org/28/documentation.html#producerconfigs).

Flink removes the \`properties.\` prefix and passes the remaining configuration to the Kafka client. For example, you can use `'properties.allow.auto.create.topics' = 'false'` to disable automatic topic creation.

sink.delivery-guarantee

Semantic patterns for write operations.

STRING

No

at-least-once

Valid values:

-   none: No guarantee. Data may be lost or duplicated.
    
-   at-least-once (Default): Guarantees that no data is lost, but data may be duplicated.
    
-   exactly-once: Uses Kafka transactions to guarantee that data is not lost or duplicated.
    

sink.add-tableId-to-header-enabled

Specifies whether to write table information to the header.

BOOLEAN

No

false

If enabled, \`namespace\`, \`schemaName\`, and \`tableName\` are written to the header.

aliyun.kafka.accessKeyId

The AccessKey ID of your Alibaba Cloud account.

STRING

No

None

For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task-354412).

**Note**

Configure this parameter when you synchronize data to ApsaraMQ for Kafka.

aliyun.kafka.accessKeySecret

The AccessKey secret of your Alibaba Cloud account.

STRING

No

None

For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task-354412).

**Note**

Configure this parameter when you synchronize data to ApsaraMQ for Kafka.

aliyun.kafka.instanceId

The ID of the ApsaraMQ for Kafka instance.

STRING

No

None

You can view the instance details on the Alibaba Cloud Kafka interface.

**Note**

Configure this parameter when you synchronize data to ApsaraMQ for Kafka.

aliyun.kafka.endpoint

The API endpoint for ApsaraMQ for Kafka.

STRING

No

None

For more information, see [Endpoints](/help/en/doc-detail/183264.html#reference-1949589).

**Note**

Configure this parameter when you synchronize data to ApsaraMQ for Kafka.

aliyun.kafka.regionId

The region ID of the instance where the topic resides.

STRING

No

None

For more information, see [Endpoints](/help/en/doc-detail/183264.html#reference-1949589).

**Note**

Configure this parameter when you synchronize data to ApsaraMQ for Kafka.

### **Supported type changes**

The Upsert Kafka connector for data ingestion supports all types of change operations. However, to read the data, you must use the Flink Upsert Kafka SQL connector with a fixed schema.

## Examples

-   Source table
    
    Create a Kafka source table that contains the browsing data of website users.
    
    ```
    CREATE TABLE pageviews(
    user_id BIGINT,
    page_id BIGINT,
    viewtime TIMESTAMP,
    user_region STRING,
    WATERMARK FOR viewtime AS viewtime - INTERVAL '2' SECOND
    )WITH(
    'connector'='kafka',
    'topic'='<yourTopicName>',
    'properties.bootstrap.servers'='...',
    'format'='json'
    );
    ```
    
-   Sink table
    
    -   Create an Upsert Kafka sink table.
        
        ```
        CREATE TABLE pageviews_per_region(
        user_region STRING,
        pv BIGINT,
        uv BIGINT,
        PRIMARY KEY(user_region) NOT ENFORCED
        )WITH(
        'connector'='upsert-kafka',
        'topic'='<yourTopicName>',
        'properties.bootstrap.servers'='...',
        'key.format'='avro',
        'value.format'='avro'
        );
        ```
        
    -   Write the browsing data of website users to the sink table.
        
        ```
        INSERT INTO pageviews_per_region
        SELECT
        user_region,
        COUNT(*),
        COUNT(DISTINCTuser_id)
        FROM pageviews
        GROUP BY user_region;
        ```
        
-   Data ingestion sink
    
    ```
    source:
      type: mysql
      name: MySQL Source
      hostname: ${mysql.hostname}
      port: ${mysql.port}
      username: ${mysql.username}
      password: ${mysql.password}
      tables: ${mysql.source.table}
      server-id: 8601-8604
    
    sink:
      type: upsert-kafka
      name: Upsert Kafka Sink
      properties.bootstrap.servers: ${upsert.kafka.bootstraps.server}
      aliyun.kafka.accessKeyId: ${upsert.kafka.aliyun.ak}
      aliyun.kafka.accessKeySecret: ${upsert.kafka.aliyun.sk}
      aliyun.kafka.instanceId: ${upsert.kafka.aliyun.instanceid}
      aliyun.kafka.endpoint: ${upsert.kafka.aliyun.endpoint}
      aliyun.kafka.regionId: ${upsert.kafka.aliyun.regionid}
    
    route:
      - source-table: ${mysql.source.table}
        sink-table: ${upsert.kafka.topic}
    ```
    

## Best practices

-   [Synchronize an entire MySQL database to Kafka using Flink CDC](/help/en/flink/realtime-flink/use-cases/synchronize-data-from-all-tables-in-a-mysql-database-to-kafka#task-2240113)
    
-   [Resolve Flink dependency conflicts](/help/en/flink/realtime-flink/support/faq-about-draft-development#ae57bc13a7gat)
