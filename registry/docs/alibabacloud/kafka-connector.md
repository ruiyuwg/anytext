This topic describes the Message Queue for Apache Kafka connector.

## Background

Apache Kafka is an open-source, distributed Message Queue system widely used in the big data field for high-performance Data Processing, Streaming Analytics, and Data Integration. The Kafka connector for Realtime Compute for Apache Flink uses the open-source Apache Kafka Client to provide high-performance data throughput, support reading and writing multiple Data Formats, and offer Exactly-Once Semantics.

**Category**

**Description**

Supported type

Source Table, Sink Table, and Data Ingestion Sink

Running Mode

Streaming Mode

Data Format

**Supported data formats**

-   CSV
    
-   JSON
    
-   Apache Avro
    
-   Confluent Avro
    
-   Debezium JSON
    
-   Canal JSON
    
-   Maxwell JSON
    
-   Raw
    
-   Protobuf
    

**Note**

-   The built-in Protobuf Data Format is supported only for Ververica Runtime (VVR) 8.0.9 and later.
    
-   Each supported Data Format has corresponding Parameters that can be specified in the WITH clause. For more information, see [Formats](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/formats/overview/).
    

Metrics

**Metrics**

-   Source Table
    
    -   numRecordsIn
        
    -   numRecordsInPerSecond
        
    -   numBytesIn
        
    -   numBytesInPerSecond
        
    -   currentEmitEventTimeLag
        
    -   currentFetchEventTimeLag
        
    -   sourceIdleTime
        
    -   pendingRecords
        
-   Sink Table
    
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        
    -   numBytesOut
        
    -   numBytesOutPerSecond
        
    -   currentSendTime
        

**Note**

For more information about the metrics, see [Monitoring metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

SQL API, DataStream API, and Data Ingestion YAML API

Updating or deleting data in a Sink Table

The connector only supports inserting data into a Sink Table. Updates and deletions are not supported.

**Note**

For more information about how to update or delete data in a Sink Table, see [Upsert Kafka](/help/en/flink/realtime-flink/developer-reference/upsert-kafka-connector#concept-2306784).

## Prerequisites

Complete the prerequisites for your Kafka cluster type:

-   **Connect to an ApsaraMQ for Kafka cluster**
    
    -   The Kafka cluster is version 0.11 or later.
        
    -   You have created an ApsaraMQ for Kafka cluster. For more information, see [Step 3: Create resources](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-3-create-resources#concept-99952-zh).
        
    -   The Flink workspace and the Kafka cluster are in the same Virtual Private Cloud (VPC), and you have added the CIDR block of the Flink workspace to the ApsaraMQ for Kafka whitelist. For more information, see [Configure whitelists](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/user-guide/configure-a-whitelist#concept-113174-zh).
        
    
    **Important**
    
    Limitations on writing data to ApsaraMQ for Kafka:
    
    -   ApsaraMQ for Kafka does not support writing data in the Zstandard (zstd) compression format.
        
    -   ApsaraMQ for Kafka does not support idempotent or transactional writes, which prevents you from using the exactly-once semantics provided by Kafka sink tables. Starting with Realtime Compute Engine VVR 8.0.0, the Kafka connector uses Kafka client 3.x, where the `properties.enable.idempotence` property defaults to `true`. **Therefore, to prevent write failures when using Realtime Compute Engine VVR 8.0.0 or later to write to ApsaraMQ for Kafka, you must add the configuration** `**properties.enable.idempotence=false**` **to your sink table definition**. For a comparison of storage engines and feature limitations for ApsaraMQ for Kafka, see [Comparison between storage engines](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/product-overview/comparison-between-storage-engines#concept-123277-zh).
        
    
-   **Connect to a self-managed Apache Kafka cluster**
    
    -   The self-managed Apache Kafka cluster is version 0.11 or later.
        
    -   Network connectivity exists between the Flink workspace and the self-managed Apache Kafka cluster. For details about how to connect to a cluster over the public internet, see [FAQ about network connectivity](/help/en/flink/realtime-flink/user-guide/network-connections).
        
    -   Only client configuration options for Apache Kafka version 2.8 are supported. For more information, see the Apache Kafka [Consumer Configs](https://kafka.apache.org/28/documentation.html?spm=a2c4g.11186623.0.0.715524aaf54Prv#consumerconfigs) and [Producer Configs](https://kafka.apache.org/28/documentation.html?spm=a2c4g.11186623.0.0.715524aaf54Prv#producerconfigs) documentation.
        

## Notes

**Transactional writes are not recommended** due to known design limitations in Apache Flink and Apache Kafka. When you set `sink.delivery-guarantee = 'exactly-once'`, the Kafka connector enables transactional writes, with the following known issues:

-   A new Transaction ID is generated for each checkpoint. If the checkpoint interval is too short, an excessive number of Transaction IDs can be created. This can cause the coordinator in the Apache Kafka cluster to run out of memory, compromising cluster stability.
    
-   A Producer instance is created for each transaction. If too many transactions are committed concurrently, the TaskManager can run out of memory, compromising the stability of the Apache Flink job.
    
-   If multiple Apache Flink jobs use the same `sink.transactional-id-prefix`, their generated Transaction IDs can conflict. When a write operation fails in one job, it can prevent the Log Start Offset (LSO) of an Apache Kafka partition from advancing. This affects all consumers of that partition.
    

If you require Exactly-Once Semantics, use the [Upsert Kafka connector](/help/en/flink/realtime-flink/developer-reference/upsert-kafka-connector) to write to a primary key table, ensuring idempotence. If you must use transactional writes, see [Exactly-Once Semantics usage notes](#title-bgy-ky5-t96).

## Troubleshoot network connectivity

A `Timed out waiting for a node assignment` error when a Realtime Compute for Apache Flink Job fails to start typically indicates a network connectivity issue between Realtime Compute for Apache Flink and the Kafka cluster.

A Kafka client connects to brokers as follows:

1.  The client uses the addresses specified in `bootstrap.servers` to establish an initial connection to the Kafka cluster.
    
2.  The Kafka cluster returns metadata for each broker, including their endpoints.
    
3.  The client then uses these endpoints to connect to the brokers to read or write data.
    

Even if the `bootstrap.servers` addresses are reachable, the client cannot read or write data if Kafka returns incorrect broker endpoints. This issue often occurs in network architectures that use a proxy, port forwarding, or a leased line.

#### **Troubleshooting steps**

#### **Message Queue for Kafka**

1.  **Confirm the Endpoint type**
    
    -   Default Endpoint (internal network)
        
    -   SASL Endpoint (internal network with authentication)
        
    -   Public Endpoint (requires a separate application)
        
    
    Use the [Network Probe](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#c1e56cf164v5v) feature in the Realtime Compute for Apache Flink development console to rule out connectivity issues with the `bootstrap.servers` address.
    
2.  **Check security groups and whitelists**
    
    Add the CIDR block of the Realtime Compute for Apache Flink workspace to the whitelist of your Kafka instance. For more information, see [View VPC CIDR Block](/help/en/flink/realtime-flink/support/reference#title-kx2-mxa-0m0) and [Configure a whitelist](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/user-guide/configure-a-whitelist).
    
3.  **Check the SASL configuration (if enabled)**
    
    If you use a SASL\_SSL endpoint, ensure that the JAAS, SSL, and SASL mechanisms are configured correctly in your Realtime Compute for Apache Flink Job. Missing authentication can cause the connection to fail during the handshake phase, which might also appear as a timeout. For more information, see [Security and authentication](#title-qs5-7tt-j1q).
    

#### **Self-managed Kafka**

1.  **Use the** [Network Probe](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#c1e56cf164v5v) **feature**
    
    This feature helps you rule out connectivity issues with the `bootstrap.servers` address and verify that the correct internal or public endpoint is used.
    
2.  **Check security groups and whitelists**
    
    -   The security group for the Elastic Compute Service (ECS) instance must allow inbound traffic on the Kafka endpoint port, which is typically 9092 or 9093.
        
    -   Ensure that any firewall on the ECS instance allows traffic from the VPC of your Realtime Compute for Apache Flink workspace. For more information, see [View VPC CIDR Block](/help/en/flink/realtime-flink/support/reference#title-kx2-mxa-0m0).
        
3.  **Check the configuration**
    
    1.  Use the zkCli.sh or zookeeper-shell.sh tool to log on to the ZooKeeper cluster that Kafka uses.
        
    2.  Run a command to obtain broker metadata. For example, run `get /brokers/ids/0`. In the endpoints field of the response, find the address that Kafka advertises to clients.
        
        ![example](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0036591861/p578873.png)
        
    3.  Use the [Network Probe](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#c1e56cf164v5v) feature in the Realtime Compute for Apache Flink development console to test whether this address is accessible.
        
        **Note**
        
        -   If the address is not accessible, contact your Kafka administrators to check and correct the `listeners` and `advertised.listeners` configurations to ensure that the advertised address is accessible from Realtime Compute for Apache Flink.
            
        -   For more information on Kafka client connections, see [Troubleshoot Connectivity](https://www.confluent.io/blog/kafka-client-cannot-connect-to-broker-on-aws-on-docker-etc/).
            
        
4.  **Check the SASL configuration (if enabled)**
    
    If you use a SASL\_SSL endpoint, ensure that the JAAS, SSL, and SASL mechanisms are configured correctly in your Realtime Compute for Apache Flink Job. Missing authentication can cause the connection to fail during the handshake phase, which might also appear as a timeout. For more information, see [Security and authentication](#title-qs5-7tt-j1q).
    

## SQL

The Kafka Connector can be used as a source table or a sink table in SQL jobs.

### **Syntax**

```
CREATE TABLE KafkaTable (
  `user_id` BIGINT,
  `item_id` BIGINT,
  `behavior` STRING,
  `ts` TIMESTAMP_LTZ(3) METADATA FROM 'timestamp' VIRTUAL
) WITH (
  'connector' = 'kafka',
  'topic' = 'user_behavior',
  'properties.bootstrap.servers' = 'localhost:9092',
  'properties.group.id' = 'testGroup',
  'scan.startup.mode' = 'earliest-offset',
  'format' = 'csv'
)
```

### **Metadata columns**

Define metadata columns in a Source Table or Sink Table to access or write Kafka message metadata. For example, when defining multiple topics in the WITH clause, use a metadata column in the Source Table to identify the source topic for each record. The following code shows an example.

```
CREATE TABLE kafka_source (
  -- Read the message topic as the `record_topic` column
  `record_topic` STRING NOT NULL METADATA FROM 'topic' VIRTUAL,
  -- Read the timestamp from the ConsumerRecord as the `ts` column
  `ts` TIMESTAMP_LTZ(3) METADATA FROM 'timestamp' VIRTUAL,
  -- Read the message offset as the `record_offset` column
  `record_offset` BIGINT NOT NULL METADATA FROM 'offset' VIRTUAL,
  ...
) WITH (
  'connector' = 'kafka',
  ...
);

CREATE TABLE kafka_sink (
  -- Write the timestamp from the `ts` column as the ProducerRecord's timestamp to Kafka
  `ts` TIMESTAMP_LTZ(3) METADATA FROM 'timestamp' VIRTUAL,
  ...
) WITH (
  'connector' = 'kafka',
  ...
);
```

The following table lists the metadata columns supported by Kafka Source and Sink Tables.

**Key**

**Type**

**Description**

**Scope**

topic

STRING NOT NULL METADATA VIRTUAL

The topic of the message.

Source table

partition

INT NOT NULL METADATA VIRTUAL

The partition ID of the message.

Source table

headers

MAP<STRING, BYTES> NOT NULL METADATA VIRTUAL

The message headers.

Source table and sink table

leader-epoch

INT NOT NULL METADATA VIRTUAL

The message's leader-epoch.

Source table

offset

BIGINT NOT NULL METADATA VIRTUAL

The message offset.

Source table

timestamp

TIMESTAMP(3) WITH LOCAL TIME ZONE NOT NULL METADATA VIRTUAL

The message timestamp.

Source table and sink table

timestamp-type

STRING NOT NULL METADATA VIRTUAL

The timestamp type of the message. Valid values are:

-   `NoTimestampType`: No timestamp is defined in the message.
    
-   `CreateTime`: The time the message was created.
    
-   `LogAppendTime`: The time the message was appended to the Kafka broker's log.
    

Source table

\_\_raw\_key\_\_

STRING NOT NULL METADATA VIRTUAL

The raw message key.

Source table and sink table

**Note**

This parameter is supported only in Ververica Runtime (VVR) 11.4 and later.

\_\_raw\_value\_\_

STRING NOT NULL METADATA VIRTUAL

The raw message value.

Source table and sink table

**Note**

This parameter is supported only in Ververica Runtime (VVR) 11.4 and later.

### **WITH parameters**

-   **General**
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    **Required**
    
    **Default**
    
    **Remarks**
    
    connector
    
    The Connector to use.
    
    String
    
    Yes
    
    N/A
    
    The value must be `kafka`.
    
    properties.bootstrap.servers
    
    A list of Kafka broker addresses.
    
    String
    
    Yes
    
    N/A
    
    Format: `host:port,host:port,...`. Separate addresses with commas (,).
    
    properties.\*
    
    Additional properties for the Kafka client.
    
    String
    
    No
    
    N/A
    
    The property keys must be valid options defined in the official Apache Kafka documentation for [Producer Configs](https://kafka.apache.org/28/documentation.html#producerconfigs) and [Consumer Configs](https://kafka.apache.org/28/documentation.html#consumerconfigs).
    
    Realtime Compute for Apache Flink removes the properties. prefix and passes the remaining key-value pairs to the underlying Kafka client. For example, you can set `'properties.allow.auto.create.topics' = 'false'` to disable automatic topic creation.
    
    You cannot use this method to configure the following options because the Kafka Connector overwrites them:
    
    -   key.deserializer
        
    -   value.deserializer
        
    
    format
    
    The format for serializing and deserializing the value of a Kafka message.
    
    String
    
    No
    
    N/A
    
    Supported formats:
    
    -   csv
        
    -   json
        
    -   avro
        
    -   debezium-json
        
    -   canal-json
        
    -   maxwell-json
        
    -   avro-confluent
        
    -   raw
        
    
    **Note**
    
    For more information, see [Format options](https://nightlies.apache.org/flink/flink-docs-master/zh/docs/connectors/table/formats/csv/#format-%E5%8F%82%E6%95%B0).
    
    key.format
    
    The format for serializing and deserializing the key of a Kafka message.
    
    String
    
    No
    
    N/A
    
    Supported formats:
    
    -   csv
        
    -   json
        
    -   avro
        
    -   debezium-json
        
    -   canal-json
        
    -   maxwell-json
        
    -   avro-confluent
        
    -   raw
        
    
    **Note**
    
    When you use this configuration, key.options is required.
    
    key.fields
    
    The fields from the table schema to use as the Kafka message key.
    
    String
    
    No
    
    N/A
    
    Separate multiple field names with semicolons (;). For example, `'field1;field2'`.
    
    key.fields-prefix
    
    A custom prefix for all key fields to prevent name conflicts with value fields.
    
    String
    
    No
    
    N/A
    
    This prefix is used to distinguish between key and value fields. It is removed before serializing the key or after deserializing it.
    
    **Note**
    
    If you use this option, `value.fields-include` must be set to `EXCEPT_KEY`.
    
    value.format
    
    The format for serializing and deserializing the value of a Kafka message.
    
    String
    
    No
    
    N/A
    
    This configuration is equivalent to `format`. You can set only one of `format` or `value.format`. If both are configured, `value.format` overrides `format`.
    
    value.fields-include
    
    Defines whether the key fields are included in the value format.
    
    String
    
    No
    
    ALL
    
    Valid values:
    
    -   `ALL`: The Kafka message value includes all table columns.
        
    -   `EXCEPT_KEY`: The Kafka message value includes all table columns except those defined in `key.fields`.
        
    
-   **Source table**
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    **Required**
    
    **Default**
    
    **Remarks**
    
    topic
    
    The topic or topics to read from.
    
    String
    
    No
    
    N/A
    
    To subscribe to multiple topics, separate their names with semicolons (;), for example, `'topic-1;topic-2'`.
    
    **Note**
    
    You can specify either this option or `topic-pattern`, but not both.
    
    topic-pattern
    
    A regular expression that defines which topics to subscribe to. The Consumer subscribes to all topics with names that match this pattern.
    
    String
    
    No
    
    N/A
    
    **Note**
    
    You can specify either this option or `topic`, but not both.
    
    properties.group.id
    
    The ID of the Consumer Group for the Kafka source.
    
    String
    
    No
    
    KafkaSource-{Source-Table-Name}
    
    If you use a Consumer Group ID for the first time, you must also set properties.auto.offset.reset to either `earliest` or `latest` to define the initial Startup Offset.
    
    scan.startup.mode
    
    The Startup Offset for the Kafka Consumer.
    
    String
    
    No
    
    group-offsets
    
    Valid values:
    
    -   `earliest-offset`: Starts reading from the earliest available Offset.
        
    -   `latest-offset`: Starts reading from the latest Offset.
        
    -   `group-offsets`: Starts reading from the committed Offsets of the specified properties.group.id.
        
    -   `timestamp`: Starts reading from the specified scan.startup.timestamp-millis.
        
    -   `specific-offsets`: Starts reading from the Offsets specified in scan.startup.specific-offsets.
        
    
    **Note**
    
    This option is only effective when a Job starts from a clean State. If a Job restarts from a Checkpoint, it always resumes from the Offsets stored in the Checkpoint State.
    
    scan.startup.specific-offsets
    
    The starting Offset for each partition when `scan.startup.mode` is `specific-offsets`.
    
    String
    
    No
    
    N/A
    
    For example, `partition:0,offset:42;partition:1,offset:300`
    
    scan.startup.timestamp-millis
    
    The starting Timestamp in milliseconds when `scan.startup.mode` is set to `timestamp`.
    
    Long
    
    No
    
    N/A
    
    The unit is milliseconds.
    
    scan.topic-partition-discovery.interval
    
    The interval for discovering new partitions in topics.
    
    Duration
    
    No
    
    5 minutes
    
    The Connector periodically discovers and reads from new partitions. When using topic-pattern, the Connector also discovers new topics that match the pattern. Set the interval to a non-positive value to disable this feature.
    
    **Note**
    
    In Ververica Runtime (VVR) 6.0.x, dynamic partition discovery is disabled by default. Starting from VVR 8.0, this feature is enabled by default with a discovery interval of 5 minutes.
    
    scan.header-filter
    
    Filters messages based on Kafka message headers.
    
    String
    
    No
    
    N/A
    
    A header key and its value are separated by a colon (:). Multiple header conditions are connected by using logical operators (& and |). The NOT logical operator (!) is also supported. For example, `depart:toy|depart:book&!env:test` retains Kafka data if the header contains `depart=toy` or `depart=book` and does not contain `env=test`.
    
    **Note**
    
    -   This option is supported only in Ververica Runtime (VVR) 8.0.6 and later.
        
    -   Parentheses in expressions are not supported.
        
    -   Logical operations are evaluated left to right.
        
    -   Header values are converted to UTF-8 strings for comparison.
        
    
    scan.check.duplicated.group.id
    
    Specifies whether to check if another active Consumer is using the `properties.group.id`.
    
    Boolean
    
    No
    
    false
    
    Valid values:
    
    -   true: Before starting the Job, the system checks for a duplicate Consumer Group. If one is found, the Job fails to prevent conflicts.
        
    -   false: Starts the Job without checking for conflicts.
        
    
    **Note**
    
    This option is supported only in Ververica Runtime (VVR) 6.0.4 and later.
    
-   **Sink table**
    
    **Parameter**
    
    **Description**
    
    **Type**
    
    **Required**
    
    **Default**
    
    **Remarks**
    
    topic
    
    The topic to write to.
    
    String
    
    Yes
    
    N/A
    
    N/A
    
    sink.partitioner
    
    Defines how to map records from parallel sink instances to Kafka partitions.
    
    String
    
    No
    
    default
    
    Valid values:
    
    -   `default`: Uses the default Kafka partitioner.
        
    -   `fixed`: Each parallel sink instance writes to a fixed Kafka partition.
        
    -   `round-robin`: Records are distributed to partitions in a round-robin fashion.
        
    -   Custom partitioner: To use a custom partitioner, provide the fully qualified class name of a `FlinkKafkaPartitioner` subclass, for example, `org.mycompany.MyPartitioner`.
        
    
    sink.delivery-guarantee
    
    The delivery guarantee for the sink.
    
    String
    
    No
    
    at-least-once
    
    Valid values:
    
    -   `none`: Provides no guarantees. Records may be lost or duplicated.
        
    -   `at-least-once`: Guarantees that no records are lost, but they might be duplicated.
        
    -   `exactly-once`: Uses Kafka transactions to provide exactly-once Semantics, ensuring records are neither lost nor duplicated.
        
    
    **Note**
    
    When using `exactly-once` Semantics, you must also specify sink.transactional-id-prefix.
    
    sink.transactional-id-prefix
    
    The prefix for transaction IDs, required when `sink.delivery-guarantee` is `exactly-once`.
    
    String
    
    Yes, if `sink.delivery-guarantee` is `exactly-once`
    
    N/A
    
    Required only when sink.delivery-guarantee is set to `exactly-once`.
    
    sink.parallelism
    
    The Parallelism of the sink Operator.
    
    Integer
    
    No
    
    N/A
    
    By default, the framework determines the Parallelism based on the upstream Operators.
    

### **Security and authentication**

If the Kafka cluster requires a secure connection or authentication, prefix the relevant security and authentication configurations with `properties.` and set them in the WITH parameter. An example of configuring a Kafka table to use PLAIN as the SASL mechanism and provide a JAAS configuration is as follows.

```
CREATE TABLE KafkaTable (
  `user_id` BIGINT,
  `item_id` BIGINT,
  `behavior` STRING,
  `ts` TIMESTAMP_LTZ(3) METADATA FROM 'timestamp'
) WITH (
  'connector' = 'kafka',
  ...
  'properties.security.protocol' = 'SASL_PLAINTEXT',
  'properties.sasl.mechanism' = 'PLAIN',
  'properties.sasl.jaas.config' = 'org.apache.flink.kafka.shaded.org.apache.kafka.common.security.plain.PlainLoginModule required username="username" password="password";'
)
```

The following example shows how to use SASL\_SSL as the security protocol and SCRAM-SHA-256 as the SASL mechanism.

```
CREATE TABLE KafkaTable (
  `user_id` BIGINT,
  `item_id` BIGINT,
  `behavior` STRING,
  `ts` TIMESTAMP_LTZ(3) METADATA FROM 'timestamp'
) WITH (
  'connector' = 'kafka',
  ...
  'properties.security.protocol' = 'SASL_SSL',
  /* SSL configuration */
  /* Path to the truststore for the server's CA certificate. */
  /* Files uploaded using Artifacts are stored in the /flink/usrlib/ directory. */
  'properties.ssl.truststore.location' = '/flink/usrlib/kafka.client.truststore.jks',
  'properties.ssl.truststore.password' = 'test1234',
  /* If client authentication is required, you must also configure the path to the keystore (private key). */
  'properties.ssl.keystore.location' = '/flink/usrlib/kafka.client.keystore.jks',
  'properties.ssl.keystore.password' = 'test1234',
  /* The algorithm used to verify the server hostname. An empty string disables hostname verification. */
  'properties.ssl.endpoint.identification.algorithm' = '',
  /* SASL configuration */
  /* Set the SASL mechanism to SCRAM-SHA-256. */
  'properties.sasl.mechanism' = 'SCRAM-SHA-256',
  /* Configure JAAS. */
  'properties.sasl.jaas.config' = 'org.apache.flink.kafka.shaded.org.apache.kafka.common.security.scram.ScramLoginModule required username="username" password="password";'
)
```

You can use the [Artifacts](/help/en/flink/realtime-flink/user-guide/resource-management) feature of the Real-time Compute Console to upload the CA certificate and private key mentioned in the example. The uploaded files are stored in the `/flink/usrlib` directory. To use a CA certificate file named my-truststore.jks, you can set the `'properties.ssl.truststore.location'` property in the WITH clause in one of the following two ways:

-   Set `'properties.ssl.truststore.location' = '/flink/usrlib/my-truststore.jks'`. This method avoids dynamically downloading files from Object Storage Service (OSS) at runtime, but it does not support Debug Mode.
    
-   If the Realtime Compute engine version is VVR 11.5 or later, you can configure `properties.ssl.truststore.location` and `properties.ssl.keystore.location` to an absolute OSS path. The file path format is oss://flink-fullymanaged-<Workspace ID>/artifacts/namespaces/<Namespace name>/<file name>. This method dynamically downloads the OSS files during Flink runtime and supports Debug Mode.
    

**Note**

-   **Verify your configuration:** The examples in this topic show common configurations. Before you configure the Kafka connector, contact your Kafka O&M team to obtain the correct security and authentication settings.
    
-   **Escaping:** Unlike native Apache Flink, the Realtime Compute for Apache Flink SQL editor escapes double quotation marks (") by default. Therefore, you do not need to add backslashes (\\) to escape the double quotation marks used for the username and password in the `properties.sasl.jaas.config` option.
    

### **Source table start offset**

#### **Startup mode**

You can configure the scan.startup.mode option to specify the offset from which a Kafka source table starts reading data. Valid values include:

-   earliest-offset: Starts reading from the earliest offset.
    
-   latest-offset: Starts reading from the latest offset.
    
-   group-offsets: Starts reading from the committed offsets for the consumer group specified in properties.group.id.
    
-   timestamp: Starts reading from the first message with a timestamp greater than or equal to the value specified in scan.startup.timestamp-millis.
    
-   specific-offsets: Starts reading from the specific partition offsets specified in scan.startup.specific-offsets.
    

**Note**

-   If you do not specify a startup mode, the default is 'group-offsets'.
    
-   The scan.startup.mode option applies only to stateless jobs. When a stateful job starts, it always consumes from the offsets stored in its state.
    

The following code provides an example:

```
CREATE TEMPORARY TABLE kafka_source (
  ...
) WITH (
  'connector' = 'kafka',
  ...
  -- Consume from the earliest offset.
  'scan.startup.mode' = 'earliest-offset',
  -- Consume from the latest offset.
  'scan.startup.mode' = 'latest-offset',
  -- Consume from the committed offsets of the consumer group "my-group".
  'properties.group.id' = 'my-group',
  'scan.startup.mode' = 'group-offsets',
  'properties.auto.offset.reset' = 'earliest', -- If "my-group" is used for the first time, consumption starts from the earliest offset.
  'properties.auto.offset.reset' = 'latest', -- If "my-group" is used for the first time, consumption starts from the latest offset.
  -- Consume from the specified timestamp in milliseconds: 1655395200000.
  'scan.startup.mode' = 'timestamp',
  'scan.startup.timestamp-millis' = '1655395200000',
  -- Consume from specific offsets.
  'scan.startup.mode' = 'specific-offsets',
  'scan.startup.specific-offsets' = 'partition:0,offset:42;partition:1,offset:300'
);
```

#### **Start offset priority**

The start offset for a source table is determined based on the following priority, from highest to lowest:

Priority (highest to lowest)

The offset stored in a Checkpoint or Savepoint.

The start time selected in the Real-time Compute Console during job startup.

The start offset specified by scan.startup.mode in the WITH clause.

If scan.startup.mode is not specified, group-offsets is used to start consumption from the offsets of the corresponding consumer group.

If the offset determined by any of these steps is invalid, for example, because it has expired or an issue occurred in the Kafka cluster, the system resets the offset according to the policy specified in properties.auto.offset.reset. If this option is not configured, the system throws an exception that requires user intervention.

A common scenario is consuming data with a new consumer group ID. The source table first queries the Kafka cluster for the committed offsets of that group. Because the group ID is new, no valid offsets are found. As a result, the system resets the offset according to the policy specified in properties.auto.offset.reset. Therefore, when consuming with a new group ID, you must configure the properties.auto.offset.reset option.

### **Committing source offsets**

The Kafka source table commits the current consumer offset to the Kafka cluster only after a successful checkpoint. If the checkpoint interval is long, the consumer offset in the Kafka cluster lags. During a checkpoint, the Kafka source table stores its current reading progress in its state. The system uses this state for fault recovery and does not depend on the offsets committed to the Kafka cluster. Offsets are committed only to monitor reading progress in Kafka. Offset commit failures do not affect data accuracy.

### **Custom sink partitioner**

If Kafka's built-in partitioning strategy does not meet your requirements, you can implement a custom partitioner by extending the [FlinkKafkaPartitioner](https://github.com/apache/flink-connector-kafka/blob/369e7be46a70fd50d68746498aed82105741e7d6/flink-connector-kafka/src/main/java/org/apache/flink/streaming/connectors/kafka/partitioner/FlinkKafkaPartitioner.java) class. After development is complete, compile your code into a JAR package and upload it using the [Artifacts](/help/en/flink/realtime-flink/user-guide/resource-management) feature in the Realtime Compute console. After the JAR package is uploaded and referenced, set the sink.partitioner parameter in the WITH clause to your partitioner's fully qualified class name, for example, `org.mycompany.MyPartitioner`.

### **Kafka, Upsert Kafka, and Kafka JSON catalog**

Kafka is an append-only message queue system that does not support data updates or deletions. In streaming SQL, a standard Kafka sink table cannot handle upstream Change Data Capture (CDC) data or the retraction logic of operators such as aggregate and join. If you need to write data that contains changes or retractions, use an [Upsert Kafka](/help/en/flink/realtime-flink/developer-reference/upsert-kafka-connector#concept-2306784) sink table.

To simplify the batch synchronization of Change Data Capture (CDC) data from one or more upstream database tables to Kafka, you can use a Kafka JSON catalog. If the data stored in Kafka is in JSON format, a Kafka JSON catalog lets you skip the step of defining a schema and WITH parameters. For details, see [Manage Kafka JSON catalogs](/help/en/flink/realtime-flink/user-guide/manage-kafka-json-catalogs#task-2159375).

### **Examples**

#### **Example 1: Read from and write to Kafka**

This example reads data from a source Kafka topic and writes it to a sink topic. The data is in CSV format.

```
CREATE TEMPORARY TABLE kafka_source (
  id INT,
  name STRING,
  age INT
) WITH (
  'connector' = 'kafka',
  'topic' = 'source',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'properties.group.id' = '<yourKafkaConsumerGroupId>',
  'format' = 'csv'
);

CREATE TEMPORARY TABLE kafka_sink (
  id INT,
  name STRING,
  age INT
) WITH (
  'connector' = 'kafka',
  'topic' = 'sink',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'properties.group.id' = '<yourKafkaConsumerGroupId>',
  'format' = 'csv'
);

INSERT INTO kafka_sink SELECT id, name, age FROM kafka_source;
```

#### **Example 2: Synchronize table schema and data**

You can use the Kafka connector to synchronize messages from a Kafka topic to Hologres in real time. To prevent duplicate messages in Hologres during a failover, you can use the offset and partition ID of Kafka messages as a composite primary key.

```
CREATE TEMPORARY TABLE kafkaTable (
  `offset` INT NOT NULL METADATA,
  `part` BIGINT NOT NULL METADATA FROM 'partition',
  PRIMARY KEY (`part`, `offset`) NOT ENFORCED
) WITH (
  'connector' = 'kafka',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'topic' = 'kafka_evolution_demo',
  'scan.startup.mode' = 'earliest-offset',
  'format' = 'json',
  'json.infer-schema.flatten-nested-columns.enable' = 'true'
    -- Optional. Flattens all nested columns.
);

CREATE TABLE IF NOT EXISTS hologres.kafka.`sync_kafka`
WITH (
  'connector' = 'hologres'
) AS TABLE vvp.`default`.kafkaTable;
```

#### **Example 3: Synchronize Kafka keys and values**

If a Kafka message key contains relevant information, you can synchronize both the key and value.

```
CREATE TEMPORARY TABLE kafkaTable (
  `key_id` INT NOT NULL,
  `val_name` VARCHAR(200)
) WITH (
  'connector' = 'kafka',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'topic' = 'kafka_evolution_demo',
  'scan.startup.mode' = 'earliest-offset',
  'key.format' = 'json',
  'value.format' = 'json',
  'key.fields' = 'key_id',
  'key.fields-prefix' = 'key_',
  'value.fields-prefix' = 'val_',
  'value.fields-include' = 'EXCEPT_KEY'
);

CREATE TABLE IF NOT EXISTS hologres.kafka.`sync_kafka`(
WITH (
  'connector' = 'hologres'
) AS TABLE vvp.`default`.kafkaTable;
```

**Note**

Kafka message keys do not support Schema Evolution or automatic type parsing. You must declare the schema manually.

#### **Example 4: Synchronize data and perform computation**

Synchronizing data from Kafka to Hologres often requires lightweight computations.

```
CREATE TEMPORARY TABLE kafkaTable (
  `distinct_id` INT NOT NULL,
  `properties` STRING,
  `timestamp` TIMESTAMP_LTZ METADATA,
  `date` AS CAST(`timestamp` AS DATE)
) WITH (
  'connector' = 'kafka',
  'properties.bootstrap.servers' = '<yourKafkaBrokers>',
  'topic' = 'kafka_evolution_demo',
  'scan.startup.mode' = 'earliest-offset',
  'key.format' = 'json',
  'value.format' = 'json',
  'key.fields' = 'key_id',
  'key.fields-prefix' = 'key_'
);

CREATE TABLE IF NOT EXISTS hologres.kafka.`sync_kafka` WITH (
   'connector' = 'hologres'
) AS TABLE vvp.`default`.kafkaTable
ADD COLUMN
  `order_id` AS COALESCE(JSON_VALUE(`properties`, '$.order_id'), 'default');
--Use COALESCE to handle null values.
```

#### **Example 5: Parse nested JSON**

Below is a sample JSON message:

```
{
  "id": 101,
  "name": "VVP",
  "properties": {
    "owner": "Alibaba Cloud",
    "engine": "Flink"
  }
}
```

To avoid using functions such as `JSON_VALUE(payload, '$.properties.owner')` to parse fields, you can directly define the structure in the Source DDL:

```
CREATE TEMPORARY TABLE kafka_source (
  id          VARCHAR,
  `name`      VARCHAR,
  properties  ROW<`owner` STRING, engine STRING>
) WITH (
  'connector' = 'kafka',
  'topic' = 'xxx',
  'properties.bootstrap.servers' = 'xxx',
  'scan.startup.mode' = 'earliest-offset',
  'format' = 'json'
);
```

This way, Flink parses the JSON into structured fields all at once during the read phase. Subsequent SQL queries can then directly use `properties.owner` without additional function calls, which improves overall performance.

## **DataStream API**

**Important**

To read or write data with the **DataStream API**, use the corresponding **DataStream Connector** to connect to **Realtime Compute for Apache Flink**. For more information about how to set up a **DataStream Connector**, see [Integrate DataStream connectors](/help/en/flink/realtime-flink/developer-reference/settings-of-datastream-connectors#main-2309395).

-   **Build a Kafka Source**
    
    The **Kafka Source** provides a builder class to create a **Kafka Source** instance. The following [sample code](https://github.com/RealtimeCompute/ververica-connector-demo) builds a **Kafka Source** that **consumes** data from the earliest **Offset** of the `input-topic` **Topic**. The **Consumer Group** is `my-group`, and the Kafka **Message** **Value** is deserialized as a string.
    
    #### **Java**
    
    ```
    KafkaSource<String> source = KafkaSource.<String>builder()
        .setBootstrapServers(brokers)
        .setTopics("input-topic")
        .setGroupId("my-group")
        .setStartingOffsets(OffsetsInitializer.earliest())
        .setValueOnlyDeserializer(new SimpleStringSchema())
        .build();
    
    env.fromSource(source, WatermarkStrategy.noWatermarks(), "Kafka Source");
    ```
    
    To build a **Kafka Source**, you must specify the following properties.
    
    **Parameter**
    
    **Description**
    
    BootstrapServers
    
    A list of Kafka broker addresses. Set this property by calling the `setBootstrapServers(String)` method.
    
    GroupId
    
    The ID of the **Consumer Group**. Set this property by calling the `setGroupId(String)` method.
    
    Topics or Partitions
    
    The topics or partitions to **subscribe** to. The **Kafka Source** supports the following three methods to **subscribe** to topics or partitions:
    
    -   Subscribes to all partitions of the topics in a list.
        
        ```
        KafkaSource.builder().setTopics("topic-a","topic-b")
        ```
        
    -   Topic pattern: **Subscribe** to all partitions of topics whose names match the specified regular expression.
        
        ```
        KafkaSource.builder().setTopicPattern("topic.*")
        ```
        
    -   The list of partitions, where you can subscribe to a specified partition.
        
        ```
        final HashSet<TopicPartition> partitionSet = new HashSet<>(Arrays.asList(
                new TopicPartition("topic-a", 0),    // Partition 0 of topic "topic-a"
                new TopicPartition("topic-b", 5)));  // Partition 5 of topic "topic-b"
        KafkaSource.builder().setPartitions(partitionSet)
        ```
        
    
    Deserializer
    
    The deserializer used to parse Kafka messages.
    
    Specify the deserializer using the `setDeserializer(KafkaRecordDeserializationSchema)` method. `KafkaRecordDeserializationSchema` defines how to parse a Kafka `ConsumerRecord`. If you only need to parse the **Value** of a Kafka **Message**, you can use one of the following methods:
    
    -   Use the `setValueOnlyDeserializer(DeserializationSchema)` method from the builder class. The `DeserializationSchema` defines how to parse the binary data of the Kafka **Message** **Value**.
        
    -   Use a class that implements [Kafka's Deserializer interface](https://kafka.apache.org/24/javadoc/org/apache/kafka/common/serialization/Deserializer.html). For example, you can use StringDeserializer to parse the Kafka **Message** **Value** into a string.
        
        ```
        import org.apache.kafka.common.serialization.StringDeserializer;
        
        KafkaSource.<String>builder()
                .setDeserializer(KafkaRecordDeserializationSchema.valueOnly(StringDeserializer.class));
        ```
        
    
    **Note**
    
    To parse a complete `ConsumerRecord`, you must implement the `KafkaRecordDeserializationSchema` interface.
    
    #### **POM**
    
    The [Kafka DataStream Connector](https://mvnrepository.com/artifact/com.alibaba.ververica/ververica-connector-kafka) is available in the Maven central repository.
    
    ```
    <dependency>
        <groupId>com.alibaba.ververica</groupId>
        <artifactId>ververica-connector-kafka</artifactId>
        <version>${vvr-version}</version>
    </dependency>
    ```
    
    When using the Kafka **DataStream Connector**, consider the following properties:
    
    -   **Starting Offset**
        
        A **Kafka Source** specifies its **starting offset** using an **Offset Initializer** (`OffsetsInitializer`). The built-in initializers include:
        
        **Offset initializer**
        
        **Code**
        
        Starts consuming from the earliest **Offset**.
        
        `KafkaSource.builder().setStartingOffsets(OffsetsInitializer.earliest())`
        
        Starts consuming from the latest **Offset**.
        
        `KafkaSource.builder().setStartingOffsets(OffsetsInitializer.latest())`
        
        Starts consuming data whose timestamp is greater than or equal to the specified time. The unit is milliseconds.
        
        `KafkaSource.builder().setStartingOffsets(OffsetsInitializer.timestamp(1592323200000L))`
        
        Starts consuming from the committed **Offset** of the **Consumer Group**. If no committed **Offset** exists, it uses the specified reset strategy (for example, earliest **Offset**).
        
        `KafkaSource.builder().setStartingOffsets(OffsetsInitializer.committedOffsets(OffsetResetStrategy.EARLIEST))`
        
        Consumption starts from the offset committed by the consumer group, and no offset reset policy is specified.
        
        `KafkaSource.builder().setStartingOffsets(OffsetsInitializer.committedOffsets())`
        
        **Note**
        
        -   If the built-in initializers do not meet your requirements, you can implement a custom **Offset Initializer**.
            
        -   If you do not specify an **Offset Initializer**, the default is `OffsetsInitializer.earliest()`.
            
        
    -   **Streaming Mode and Batch Mode**
        
        The **Kafka Source** supports both **Streaming Mode** and **Batch Mode**. By default, it operates in **Streaming Mode**, where the **Job** runs indefinitely until it fails or is canceled. To configure the **Kafka Source** to run in **Batch Mode**, you can use `setBounded(OffsetsInitializer)` to specify a stop **Offset**. The **Kafka Source** exits when all partitions reach their specified stop offsets.
        
        **Note**
        
        A **Kafka Source** in **Streaming Mode** does not typically have a stop **Offset**. However, for testing purposes, you can use `setUnbounded(OffsetsInitializer)` to specify a stop **Offset** even in **Streaming Mode**. Note the different method names for specifying the stop **Offset**: `setUnbounded` for **Streaming Mode** and `setBounded` for **Batch Mode**.
        
    -   **Dynamic Partition Discovery**
        
        To handle **Topic** scaling or the creation of new topics without restarting the Flink **Job**, you can enable **Dynamic Partition Discovery** when subscribing to topics by pattern. This feature is disabled by default and must be explicitly enabled:
        
        ```
        KafkaSource.builder()
            .setProperty("partition.discovery.interval.ms", "10000") // Discover new partitions every 10 seconds.
        ```
        
        **Important**
        
        The dynamic partition discovery feature depends on the metadata update mechanism of the Kafka cluster. If the Kafka cluster does not update partition information in a timely manner, new partitions might not be discovered. Please ensure that the partition.discovery.interval.ms configuration of the Kafka cluster matches your actual scenario.
        
    -   **Event Time and Watermark**
        
        By default, the **Kafka Source** uses the timestamp from the Kafka **Message** as the **Event Time**. You can define a custom **Watermark** strategy to extract the **Event Time** from the **Message** body and emit a **Watermark** downstream.
        
        ```
        env.fromSource(kafkaSource, new CustomWatermarkStrategy(), "Kafka Source With Custom Watermark Strategy")
        ```
        
        To learn more about custom **Watermark** strategies, see [Generating Watermarks](https://ci.apache.org/projects/flink/flink-docs-release-1.13/docs/dev/datastream/event-time/generating_watermarks/).
        
        **Note**
        
        If a source subtask is idle (for example, when a Kafka **Partition** has no new data or the source **Parallelism** is higher than the number of Kafka partitions), the **Watermark** for that subtask will not advance. This can block downstream window computations.
        
        To resolve this issue, consider the following solutions:
        
        -   Configure a source idle timeout: Enable the [table.exec.source.idle-timeout](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-5gn-pjr-ti2) **Property** to mark an idle source as temporarily idle. This allows the downstream **Watermark** to advance.
            
        -   Set appropriate **Parallelism**: Ensure the source **Parallelism** is not greater than the number of Kafka partitions.
            
        
    -   **Offset Commit**
        
        When checkpointing is enabled, the **Kafka Source** commits the current consumer **Offset** to Kafka when a **Checkpoint** completes. This ensures the Flink **Checkpoint** state is consistent with the committed **Offset** on the Kafka broker. If checkpointing is disabled, the **Kafka Source** relies on the Kafka consumer's internal automatic periodic **Offset** commit mechanism. This feature is controlled by the `enable.auto.commit` and `auto.commit.interval.ms` Kafka consumer properties.
        
        **Note**
        
        The **Kafka Source** does not rely on committed offsets for fault tolerance and recovery. Committing offsets is only for monitoring the progress of the Kafka consumer and **Consumer Group**.
        
    -   **Other properties**
        
        In addition to the properties mentioned, you can use `setProperties(Properties)` and `setProperty(String, String)` to set any **Property** for the **Kafka Source** and its underlying Kafka consumer. The **Kafka Source** provides the following specific properties.
        
        **Parameter**
        
        **Description**
        
        client.id.prefix
        
        Specifies the client ID prefix for the Kafka consumer.
        
        partition.discovery.interval.ms
        
        Defines the interval in milliseconds for discovering new partitions. A value of `-1` disables dynamic partition discovery.
        
        **Note**
        
        In **Batch Mode**, this property is automatically set to `-1`.
        
        register.consumer.metrics
        
        Specifies whether to register Kafka consumer metrics in Flink.
        
        Other Kafka Consumer Configuration
        
        For a complete list of Kafka consumer configurations, see the [official Apache Kafka documentation](http://kafka.apache.org/documentation/#consumerconfigs).
        
        **Important**
        
        To ensure correct operation, the Kafka **DataStream Connector** overwrites the following manually configured properties:
        
        -   `key.deserializer` is always overwritten to org.apache.kafka.common.serialization.ByteArrayDeserializer.
            
        -   `value.deserializer` is always overwritten to org.apache.kafka.common.serialization.ByteArrayDeserializer.
            
        -   `auto.offset.reset.strategy` is overwritten by the strategy provided by the `OffsetsInitializer`.
            
        
        The following example shows how to configure a Kafka consumer to use the PLAIN SASL mechanism and provide a JAAS configuration.
        
        ```
        KafkaSource.builder()
            .setProperty("sasl.mechanism", "PLAIN")
            .setProperty("sasl.jaas.config", "org.apache.kafka.common.security.plain.PlainLoginModule required username=\"username\" password=\"password\";")
        ```
        
    -   **Monitoring**
        
        The **Kafka Source** exposes metrics through Flink's metrics system for monitoring and diagnostics.
        
        -   Metric scope
            
            All metrics for the Kafka source reader are registered under the `KafkaSourceReader` metric group, which is a subgroup of the operator's metric group. Metrics related to a specific **Topic** **Partition** are registered in the `KafkaSourceReader.topic.<topic_name>.partition.<partition_id>` subgroup.
            
            For example, the current **Consumer** **Offset** metric (`currentOffset`) for **Partition** 1 of the "my-topic" **Topic** is available at .operator.KafkaSourceReader.topic.my-topic.partition.1.currentOffset. The number of successful commits (`commitsSucceeded`) is available at .operator.KafkaSourceReader.commitsSucceeded.
            
        -   List of metrics
            
            **Metric**
            
            **Description**
            
            **Scope**
            
            currentOffset
            
            The current consumer **Offset** of a partition.
            
            TopicPartition
            
            committedOffset
            
            The last committed **Offset** for a partition.
            
            TopicPartition
            
            commitsSucceeded
            
            The total number of successful offset commits.
            
            KafkaSourceReader
            
            commitsFailed
            
            Number of failed commits
            
            KafkaSourceReader
            
        -   Kafka consumer metrics
            
            The underlying Kafka consumer's metrics are registered in the KafkaSourceReader.KafkaConsumer metric group. For example, the `records-consumed-total` **Metric** is registered at .operator.KafkaSourceReader.KafkaConsumer.records-consumed-total.
            
            You can use the `register.consumer.metrics` **Property** to specify whether to register the Kafka consumer metrics. This option is enabled by default (`true`). For more information about Kafka consumer metrics, see the [Apache Kafka documentation](http://kafka.apache.org/documentation/#consumer_monitoring).
            
        
    
-   **Build a Kafka Sink**
    
    The Flink **Kafka Sink** writes a data stream to one or more Kafka topics.
    
    ```
    DataStream<String> stream = ...
    
    Properties kafkaProperties = new Properties();
    kafkaProperties.setProperty("bootstrap.servers", "localhost:9092");
    
    KafkaSink<String> sink = KafkaSink.<String>builder()
            .setKafkaProducerConfig(kafkaProperties)
            .setRecordSerializer(
                    KafkaRecordSerializationSchema.builder()
                            .setTopic("my-topic")
                            .setValueSerializationSchema(new SimpleStringSchema())
                            .build())
            .setDeliveryGuarantee(DeliveryGuarantee.AT_LEAST_ONCE)
            .build();
    
    stream.sinkTo(sink);
    ```
    
    To build a Kafka Sink, you must configure the following properties.
    
    **Parameter**
    
    **Description**
    
    Kafka client properties
    
    The `bootstrap.servers` **Property** is required. It specifies a comma-separated list of Kafka brokers.
    
    Record serializer
    
    You must provide a `KafkaRecordSerializationSchema` to convert input data into a Kafka `ProducerRecord`. Flink provides a schema builder that offers common components, such as serialization for message keys and values, topic selection, and message partitioning. You can also implement the corresponding interfaces for more granular control. The ProducerRecord<byte\[\], byte\[\]> serialize(T element, KafkaSinkContext context, Long timestamp) method is called for each incoming record to generate a ProducerRecord to be written to Kafka.
    
    The `ProducerRecord` provides fine-grained control over how each record is written to Kafka, allowing you to:
    
    -   Set the destination **Topic**.
        
    -   Set the **Message** **Key**.
        
    -   Specify the destination **Partition**.
        
    
    Delivery guarantee
    
    The `bootstrap.servers` parameter is required and specifies a comma-separated list of Kafka brokers.
    
    Delivery guarantee
    
    When Flink checkpoints are enabled, the Flink Kafka Sink can provide exactly-once semantics. In addition to enabling checkpoints, you can use the DeliveryGuarantee parameter to specify different delivery guarantees. The DeliveryGuarantee parameter provides the following options:
    
    -   DeliveryGuarantee.NONE: (Default) Flink provides no guarantees. Data may be lost or duplicated.
        
    -   DeliveryGuarantee.AT\_LEAST\_ONCE: Guarantees that no data is lost, but duplication may occur.
        
    -   DeliveryGuarantee.EXACTLY\_ONCE: Uses Kafka transactions to provide exactly-once semantics.
        
        **Note**
        
        When using EXACTLY\_ONCE semantics, see [Considerations for EXACTLY\_ONCE semantics](#section-lxx-tpa-dzg).
        
    

## Data ingestion

You can use the Kafka Connector as a Source or Sink to create YAML jobs for data ingestion.

### **Limitations**

-   Use Realtime Compute for Apache Flink (VVR) 11.1 or later to ingest Flink CDC data from a Kafka Data Source.
    
-   Only JSON, Debezium JSON, and Canal JSON are supported.
    
-   Only Realtime Compute for Apache Flink (VVR) 8.0.11 and later supports reading data from a single table distributed across multiple Partitions.
    

### **Syntax**

```
source:
  type: kafka
  name: Kafka source
  properties.bootstrap.servers: localhost:9092
  topic: ${kafka.topic}
```

```
sink:
  type: kafka
  name: Kafka Sink
  properties.bootstrap.servers: localhost:9092
```

### **Parameter**

-   **General**
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Type**
    
    **Default**
    
    **Remarks**
    
    type
    
    The type of the source or sink.
    
    Yes
    
    String
    
    N/A
    
    The value must be `kafka`.
    
    name
    
    The name of the source or sink.
    
    No
    
    String
    
    N/A
    
    N/A
    
    properties.bootstrap.servers
    
    The addresses of the Kafka brokers.
    
    Yes
    
    String
    
    N/A
    
    The format is `host:port,host:port,host:port`, separated by commas (,).
    
    properties.\*
    
    Configuration properties for the Kafka client.
    
    No
    
    String
    
    N/A
    
    The property keys must be valid options as defined in the official Apache Kafka documentation for [Producer Configs](https://kafka.apache.org/28/documentation.html#producerconfigs) and [Consumer Configs](https://kafka.apache.org/28/documentation.html#consumerconfigs).
    
    Realtime Compute for Apache Flink (VVR) removes the `properties.` prefix before passing the remaining key-value pairs to the underlying Kafka client. For example, set `'properties.allow.auto.create.topics' = 'false'` to disable automatic topic creation.
    
    key.format
    
    The format for serializing and deserializing the Kafka message key.
    
    No
    
    String
    
    N/A
    
    -   For the source, only the `json` format is supported.
        
    -   For the sink, valid values are:
        
        -   csv
            
        -   json
            
    
    **Note**
    
    This option is supported only in Realtime Compute for Apache Flink (VVR) 11.0.0 and later.
    
    value.format
    
    The format for serializing and deserializing the Kafka message value.
    
    No
    
    String
    
    debezium-json
    
    -   For the source, valid values are:
        
        -   debezium-json 
            
        -   canal-json
            
        -   json
            
    -   For the sink, valid values are:
        
        -   debezium-json 
            
        -   canal-json
            
        -   canal-protobuf
            
    
    **Note**
    
    -   The `debezium-json` and `canal-json` formats require Realtime Compute for Apache Flink (VVR) version 8.0.10 or later.
        
    -   The `json` format requires Realtime Compute for Apache Flink (VVR) version 11.0.0 or later.
        
    
-   Source parameters
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Type**
    
    **Default**
    
    **Remarks**
    
    topic
    
    The topic or topics to read from.
    
    No
    
    String
    
    N/A
    
    To subscribe to multiple topics, separate their names with semicolons (;), for example, `topic-1;topic-2`.
    
    **Note**
    
    Specify either this parameter or `topic-pattern`, but not both.
    
    topic-pattern
    
    A regular expression that matches the names of topics to subscribe to.
    
    No
    
    String
    
    N/A
    
    **Note**
    
    Specify either this parameter or `topic`, but not both.
    
    properties.group.id
    
    The ID of the consumer group.
    
    No
    
    String
    
    N/A
    
    When specifying a new consumer group ID, you must set the **properties.auto.offset.reset** parameter to `earliest` or `latest` to define the initial start offset.
    
    scan.startup.mode
    
    The start offset for the Kafka consumer.
    
    No
    
    String
    
    group-offsets
    
    Valid values:
    
    -   earliest-offset: Starts reading from the earliest available offset.
        
    -   latest-offset: Starts reading from the latest offset.
        
    -   group-offsets (Default value): Starts reading from the committed offsets for the specified properties.group.id.
        
    -   timestamp: Starts reading from the timestamp specified by scan.startup.timestamp-millis.
        
    -   specific-offsets: Start reading from the offsets specified by scan.startup.specific-offsets.
        
    
    **Note**
    
    This parameter applies only when a job starts with a stateless startup. When a stateful job starts, it always consumes from the offsets stored in its state.
    
    scan.startup.specific-offsets
    
    The start offset for each partition when `scan.startup.mode` is set to `specific-offsets`.
    
    No
    
    String
    
    N/A
    
    For example, `partition:0,offset:42;partition:1,offset:300`
    
    scan.startup.timestamp-millis
    
    The start timestamp in milliseconds when `scan.startup.mode` is set to `timestamp`.
    
    No
    
    Long
    
    N/A
    
    The unit is milliseconds.
    
    scan.topic-partition-discovery.interval
    
    The interval for dynamically discovering new partitions within topics.
    
    No
    
    Duration
    
    5 minutes
    
    The connector periodically discovers and reads from new partitions. When using `topic-pattern`, the connector also discovers new topics that match the pattern. To disable discovery, set this value to 0 or less.
    
    scan.check.duplicated.group.id
    
    Checks whether the consumer group specified by `properties.group.id` is a duplicate.
    
    No
    
    Boolean
    
    false
    
    Valid values:
    
    -   true: Checks for a duplicate consumer group before the job starts. If a duplicate is found, the job fails.
        
    -   false: Starts the job without checking for conflicts.
        
    
    schema.inference.strategy
    
    The schema parsing strategy.
    
    No
    
    String
    
    continuous
    
    Valid values:
    
    -   continuous: Parses the schema of each data record. If schemas are incompatible, the system infers a wider schema and generates a schema change event.
        
    -   static: Performs schema parsing only once when the job starts. Data is then parsed based on this initial schema, and no schema change events are generated.
        
    
    **Note**
    
    -   For more information about schema parsing, see [Policies for schema parsing and evolution](#5a56e8882cs9w).
        
    -   This configuration option is supported only in Ververica Runtime (VVR) 8.0.11 and later.
        
    
    scan.max.pre.fetch.records
    
    The maximum number of messages to consume and parse from each partition for initial schema inference.
    
    No
    
    Int
    
    50
    
    Before data processing begins, the system pre-fetches and consumes the specified number of recent messages from each partition to initialize the schema.
    
    key.fields-prefix
    
    A custom prefix added to field names from the message key to avoid name conflicts.
    
    No
    
    String
    
    N/A
    
    For example, if this parameter is set to `key_`, and the message key contains a field named `a`, the parsed field name becomes `key_a`.
    
    **Note**
    
    The value of `key.fields-prefix` cannot be a prefix of the `value.fields-prefix` value.
    
    value.fields-prefix
    
    A custom prefix added to field names from the message value to avoid name conflicts.
    
    No
    
    String
    
    N/A
    
    For example, if this parameter is set to `value_`, and the message value contains a field named `b`, the parsed field name becomes `value_b`.
    
    **Note**
    
    The value of `value.fields-prefix` cannot be a prefix of the `key.fields-prefix` value.
    
    metadata.list
    
    The metadata columns to pass to the downstream sink.
    
    No
    
    String
    
    N/A
    
    The available metadata columns include `topic`, `partition`, `offset`, `timestamp`, `timestamp-type`, `headers`, and `leader-epoch`. Separate the column names with commas.
    
    scan.value.initial-schemas.ddls
    
    DDL statements that define the initial schema for specific tables.
    
    No
    
    String
    
    N/A
    
    Use a semicolon (`;`) to separate multiple DDL statements. For example, use `CREATE TABLE db1.t1 (id BIGINT, name VARCHAR(10)); CREATE TABLE db1.t2 (id BIGINT);` to specify the initial schema for tables db1.t1 and db1.t2, respectively.
    
    The table schema defined in the DDL must be consistent with the target sink table and comply with Flink SQL syntax.
    
    **Note**
    
    This configuration option is supported only in Ververica Runtime (VVR) 11.5 and later.
    
    ingestion.ignore-errors
    
    Specifies whether to ignore data parsing errors.
    
    No
    
    Boolean
    
    false
    
    **Note**
    
    This configuration option is supported only in Ververica Runtime (VVR) 11.5 and later.
    
    ingestion.error-tolerance.max-count
    
    If `ingestion.ignore-errors` is `true`, this parameter specifies the maximum number of parsing errors to tolerate before the job fails.
    
    No
    
    Integer
    
    \-1
    
    This parameter applies only when `ingestion.ignore-errors` is set to `true`. A value of -1 indicates unlimited tolerance, meaning parsing exceptions will not cause the job to fail.
    
    **Note**
    
    This configuration option is supported only in Ververica Runtime (VVR) 11.5 and later.
    
    -   Debezium JSON format parameters
        
        **Parameter**
        
        **Required**
        
        **Type**
        
        **Default**
        
        **Description**
        
        debezium-json.distributed-tables
        
        No
        
        Boolean
        
        false
        
        Set to `true` if data for a single Debezium JSON table is distributed across multiple partitions.
        
        **Note**
        
        This configuration option is supported only in Ververica Runtime (VVR) 8.0.11 and later.
        
        **Important**
        
        Modifying this parameter requires a stateless startup.
        
        debezium-json.schema-include
        
        No
        
        Boolean
        
        false
        
        Specifies whether the Debezium JSON message includes a schema. This corresponds to the `value.converter.schemas.enable` property in the Debezium Kafka Connect configuration.
        
        Valid values:
        
        -   true: The Debezium JSON message contains a schema.
            
        -   false: The Debezium JSON message does not contain a schema.
            
        
        debezium-json.ignore-parse-errors
        
        No
        
        Boolean
        
        false
        
        Valid values:
        
        -   true: Skips rows that cause a parsing exception.
            
        -   false: Throws an error and the job fails.
            
        
        debezium-json.infer-schema.primitive-as-string
        
        No
        
        Boolean
        
        false
        
        Specifies whether to parse all primitive types as the `String` type when parsing the table schema.
        
        Valid values:
        
        -   true: Parses all primitive types as `String`.
            
        -   false: Parses types based on the default rules.
            
        
    -   Canal JSON format parameters
        
        **Parameter**
        
        **Required**
        
        **Type**
        
        **Default**
        
        **Description**
        
        canal-json.distributed-tables
        
        No
        
        Boolean
        
        false
        
        If data for a single table in Canal JSON is distributed across multiple partitions, you must enable this option.
        
        **Note**
        
        This configuration option is supported only in Ververica Runtime (VVR) 8.0.11 and later.
        
        **Important**
        
        Modifying this parameter requires a stateless startup.
        
        canal-json.database.include
        
        No
        
        String
        
        N/A
        
        An optional regular expression for filtering changelogs by the `database` metadata field in Canal records. Only records from matching databases are processed. The regular expression is compatible with Java's [Pattern](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html) class.
        
        canal-json.table.include
        
        No
        
        String
        
        N/A
        
        An optional regular expression for filtering changelogs by the `table` metadata field in Canal records. Only records from matching tables are processed. The regular expression is compatible with Java's [Pattern](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html) class.
        
        canal-json.ignore-parse-errors
        
        No
        
        Boolean
        
        false
        
        Valid values:
        
        -   true: Skips the current row if a parsing exception occurs.
            
        -   false: Throws an error and the job fails to start.
            
        
        canal-json.infer-schema.primitive-as-string
        
        No
        
        Boolean
        
        false
        
        Specifies whether to parse all primitive types as the `String` type when parsing the table schema.
        
        Valid values:
        
        -   true: Parses all primitive types as `String`.
            
        -   false: Parses types based on the default rules.
            
        
        canal-json.infer-schema.strategy
        
        No
        
        String
        
        AUTO
        
        Specifies the strategy for parsing the table schema.
        
        Valid values:
        
        -   AUTO: Automatically parses the schema from the JSON data. Recommended if the data does not contain a `sqlType` field, to prevent parsing failures.
            
        -   SQL\_TYPE: Parses the schema from the `sqlType` array in the Canal JSON data. We recommend setting this to SQL\_TYPE to get more precise types if the data contains a `sqlType` field.
            
        -   MYSQL\_TYPE: Parses the schema from the `mysqlType` array in the Canal JSON data.
            
        
        For more information about `sqlType` type mapping rules, see [Canal JSON's Schema parse](#bf3629b3ab568).
        
        **Note**
        
        -   This configuration is supported only in Ververica Runtime (VVR) 11.1 and later.
            
        -   The `MYSQL_TYPE` value is supported in Ververica Runtime (VVR) 11.3 and later.
            
        
        canal-json.mysql.treat-mysql-timestamp-as-datetime-enabled
        
        No
        
        Boolean
        
        true
        
        Specifies whether to map the MySQL `TIMESTAMP` type to the CDC `TIMESTAMP` type.
        
        -   true: The MySQL `TIMESTAMP` type is mapped to the CDC `TIMESTAMP` type.
            
        -   false: The MySQL `TIMESTAMP` type is mapped to the CDC `TIMESTAMP_LTZ` type.
            
        
        canal-json.mysql.treat-tinyint1-as-boolean.enabled
        
        No
        
        Boolean
        
        true
        
        When using the `MYSQL_TYPE` parsing strategy, specifies whether to map the MySQL `TINYINT(1)` type to the CDC `BOOLEAN` type.
        
        -   true: The MySQL `TINYINT(1)` type is mapped to the CDC `BOOLEAN` type.
            
        -   false: The MySQL `TINYINT(1)` type is mapped to the CDC `TINYINT(1)` type.
            
        
        This option applies only when `canal-json.infer-schema.strategy` is set to `MYSQL_TYPE`.
        
    -   JSON format parameters
        
        **Parameter**
        
        **Required**
        
        **Type**
        
        **Default**
        
        **Description**
        
        json.timestamp-format.standard
        
        No
        
        String
        
        SQL
        
        The timestamp format for input and output data.
        
        -   SQL: Parses input timestamps in the `yyyy-MM-dd HH:mm:ss.s{precision}` format, such as `2020-12-30 12:13:14.123`.
            
        -   ISO-8601: Parses input timestamps in the `yyyy-MM-ddTHH:mm:ss.s{precision}` format, such as `2020-12-30T12:13:14.123`.
            
        
        json.ignore-parse-errors
        
        No
        
        Boolean
        
        false
        
        Valid values:
        
        -   true: Skips the current row if a parsing exception occurs.
            
        -   false: Throws an error and the job fails to start.
            
        
        json.infer-schema.primitive-as-string
        
        No
        
        Boolean
        
        false
        
        Specifies whether to parse all primitive types as the `String` type when parsing the table schema.
        
        Valid values:
        
        -   true: Parses all primitive types as `String`.
            
        -   false: Parses types based on the default rules.
            
        
        json.infer-schema.flatten-nested-columns.enable
        
        No
        
        Boolean
        
        false
        
        Specifies whether to recursively expand nested columns in JSON data. Valid values:
        
        -   true: Recursively expands nested columns.
            
        -   false: Treats nested columns as `String`.
            
        
        json.decode.parser-table-id.fields
        
        No
        
        String
        
        N/A
        
        Specifies whether to use the values of some JSON fields to generate a tableId when parsing data in JSON format. The values of multiple fields are concatenated by an English comma `,`. For example, if the JSON data is `{"col0":"a", "col1","b", "col2","c"}`, the generated result is as follows:
        
        **Configuration**
        
        **tableId**
        
        col0
        
        a
        
        col0,col1
        
        a.b
        
        col0,col1,col2
        
        a.b.c
        
        json.infer-schema.fixed-types
        
        No
        
        String
        
        N/A
        
        When you parse JSON data, you can specify the data types for specific fields. Use a comma `,` to separate multiple fields. For example, `id BIGINT, name VARCHAR(10)` specifies that the `id` field is of the BIGINT type and the `name` field is of the VARCHAR(10) type.
        
        **Note**
        
        -   This configuration option is supported only in Ververica Runtime (VVR) 11.5 and later.
            
        -   When using this configuration with Ververica Runtime (VVR) version 11.5, you must also add the configuration `scan.max.pre.fetch.records: 0`.
            
        
-   Sink table parameters
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Type**
    
    **Default**
    
    **Remarks**
    
    type
    
    The sink type.
    
    Yes
    
    String
    
    None.
    
    The value must be `kafka`.
    
    name
    
    The sink name.
    
    No
    
    String
    
    None.
    
    N/A
    
    topic
    
    The Kafka topic name.
    
    No
    
    String
    
    None.
    
    If this parameter is specified, all data is written to this topic.
    
    **Note**
    
    If this parameter is not specified, each record is written to a topic named after its TableID. The TableID is constructed by joining the database and table names with a period (`.`), for example, `databaseName.tableName`.
    
    partition.strategy
    
    The strategy for writing data to Kafka partitions.
    
    No
    
    String
    
    all-to-zero
    
    Valid values:
    
    -   `all-to-zero` (default): Writes all data to Partition 0.
        
    -   `hash-by-key`: Writes data to partitions based on the hash value of the primary key. This ensures records with the same primary key are written to the same partition, preserving their order.
        
    
    sink.tableId-to-topic.mapping
    
    The mapping from upstream table names to downstream Kafka topic names.
    
    No
    
    String
    
    None.
    
    Separate mappings with semicolons (`;`). Within each mapping, separate the upstream table name and the downstream Kafka topic name with a colon (`:`). You can use a regular expression for the table name. To map multiple tables to the same topic, separate the table names with commas (`,`). For example: `mydb.mytable1:topic1;mydb.mytable2:topic2`.
    
    **Note**
    
    This parameter allows you to modify the mapped topic while preserving the original table name information.
    
    -   Debezium JSON format parameters
        
        **Parameter**
        
        **Required**
        
        **Type**
        
        **Default**
        
        **Description**
        
        debezium-json.include-schema.enabled
        
        No
        
        Boolean
        
        false
        
        Specifies whether to include schema information in the Debezium JSON data.
        
        debezium-json.emit.full-table-id.enabled
        
        No
        
        Boolean
        
        false
        
        Specifies whether to write the full three-part table ID to the Debezium JSON metadata fields.
        
        If this parameter is enabled, the mapping is as follows:
        
        **CDC Table ID Part**
        
        **Debezium JSON Key**
        
        Namespace
        
        `db`
        
        Schema
        
        `schema`
        
        Table
        
        `table`
        
        If this parameter is disabled, the mapping is as follows:
        
        **CDC Table ID Part**
        
        **Debezium JSON Key**
        
        Namespace
        
        Not mapped
        
        Schema
        
        `db`
        
        Table
        
        `table`
        
        **Note**
        
        This parameter is supported only in Ververica Runtime (VVR) 11.6 and later.
        

### **Examples**

-   Use Kafka as a Data Ingestion Source:
    
    ```
    source:
      type: kafka
      name: Kafka source
      properties.bootstrap.servers: ${kafka.bootstraps.server}
      topic: ${kafka.topic}
      value.format: ${value.format}
      scan.startup.mode: ${scan.startup.mode}
     
    sink:
      type: hologres
      name: Hologres sink
      endpoint: <yourEndpoint>
      dbname: <yourDbname>
      username: ${secret_values.ak_id}
      password: ${secret_values.ak_secret}
      sink.type-normalize-strategy: BROADEN
    ```
    
-   Use Kafka as a Data Ingestion Sink:
    
    ```
    source:
      type: mysql
      name: MySQL Source
      hostname: ${secret_values.mysql.hostname}
      port: ${mysql.port}
      username: ${secret_values.mysql.username}
      password: ${secret_values.mysql.password}
      tables: ${mysql.source.table}
      server-id: 8601-8604
    
    sink:
      type: kafka
      name: Kafka Sink
      properties.bootstrap.servers: ${kafka.bootstraps.server}
    
    route:
      - source-table: ${mysql.source.table}
        sink-table: ${kafka.topic}
    ```
    
    The `route` module specifies the destination Kafka Topic for the Source Table.
    

**Note**

By default, the automatic Topic creation Feature is disabled for ApsaraMQ for Kafka. For more information, see [FAQ about automatic topic creation](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/support/faq-about-automatic-topic-creation). You must create the Topic before writing data to ApsaraMQ for Kafka. For more information, see [Step 3: Create resources](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-3-create-resources#section-zm0-ysj-343).

### **Policies for schema parsing and evolution**

The Kafka Connector maintains the schemas of all currently known tables.

**Table schema initialization**

Table Schema information includes column and data type information, database and table information, and Primary Key information. The following sections describe how to initialize these three types of information.

-   **Column and data type information**
    

A Data Ingestion job can automatically infer the columns and data types for a table from the data. However, in some scenarios, you might want to specify the columns and types for certain tables. Depending on the granularity of the user-specified types, there are three strategies for initializing the table schema:

1.  **Fully automatic schema inference**
    

Before reading data from Kafka, the Kafka connector attempts to consume up to scan.max.pre.fetch.records messages from each partition, parses the schema of each message, and merges these schemas to initialize the table schema. A table creation event is then generated based on this initialized schema before the data is actually consumed.

**Note**

For the Debezium JSON and Canal JSON formats, table information is contained within each message. The messages pre-fetched based on the scan.max.pre.fetch.records parameter may contain data from multiple tables. Therefore, the number of pre-fetched records for any single table cannot be determined. Pre-fetching and schema initialization are performed only once for each partition before its messages are consumed and processed. If data for a new table appears later, the schema parsed from the first record of that table is used as its initial schema, and the schema is not pre-fetched or initialized again.

**Important**

The distribution of data from a single table across multiple partitions is supported only in Ververica Runtime (VVR) 8.0.11 and later, and requires you to set the debezium-json.distributed-tables or canal-json.distributed-tables configuration option to true.

2.  **Specifying an initial table schema**
    

In some scenarios, you may want to specify the initial table schema yourself, for example, to write data from Kafka to a pre-created downstream table. In this case, you can do so by adding the scan.value.initial-schemas.ddls parameter. The following is a configuration example:

```
source:
  type: kafka
  name: Kafka Source
  properties.bootstrap.servers: host:9092
  topic: test-topic
  value.format: json
  scan.startup.mode: earliest-offset
  # Set the initial table schema
  scan.value.initial-schemas.ddls: CREATE TABLE db1.t1 (id BIGINT, name VARCHAR(10)); CREATE TABLE db1.t2 (id BIGINT);
```

The DDL statement must match the schema of the target table. This configuration specifies the initial type of the `id` column as `BIGINT` and the `name` column as `VARCHAR(10)` for the `db1.t1` table, and the initial type of the `id` column as `BIGINT` for the `db1.t2` table.

The DDL statements use Flink SQL syntax.

3.  **Setting fixed types for specific fields**
    

In some scenarios, you may want to set a fixed data type for specific fields. For example, for fields that might be inferred as the TIMESTAMP type, you may want to output them as strings. In this case, you can add the json.infer-schema.fixed-types parameter to specify the initial table schema. This parameter is valid only when the message format is JSON. The following is a configuration example:

```
source:
  type: kafka
  name: Kafka Source
  properties.bootstrap.servers: host:9092
  topic: test-topic
  value.format: json
  scan.startup.mode: earliest-offset
  # Set specific fields to a fixed type
  json.infer-schema.fixed-types: id BIGINT, name VARCHAR(10)
  scan.max.pre.fetch.records: 0
```

This configuration specifies that all `id` fields are of the `BIGINT` type and all `name` fields are of the `VARCHAR(10)` type.

The data types are consistent with Flink SQL types.

-   **Database and table information**
    
    -   For Canal JSON and Debezium JSON formats, the connector parses table information, including the database and table name, from each message.
        
    -   For the JSON format, by default, table information contains only the table name, which is the name of the topic that contains the data. If your data contains database and table information, you can use the json.infer-schema.fixed-types parameter to specify the fields that contain this information. These fields are then mapped to the database and table names. The following is a configuration example:
        
        ```
        source:
          type: kafka
          name: Kafka Source
          properties.bootstrap.servers: host:9092
          topic: test-topic
          value.format: json
          scan.startup.mode: earliest-offset
          # Use the value of the col1 field as the database name and the value of the col2 field as the table name
          json.decode.parser-table-id.fields: col1,col2
        ```
        
        With this configuration, the connector sends each record to a table where the database name is the value of the `col1` field and the table name is the value of the `col2` field.
        
-   **Primary key information**
    
    -   For the Canal JSON format, the `pkNames` field in the JSON data defines the table's Primary Key.
        
    -   For the Debezium JSON and JSON formats, the data does not contain Primary Key information. You can manually add Primary Keys to tables by using `transform` rules:
        
        ```
        transform:
          - source-table: \.*.\.*
            projection: \*
            primary-keys: key1, key2
        ```
        

**Schema parsing and schema evolution**

After the table schema is initialized, if schema.inference.strategy is set to static, the Kafka Connector parses the message value of each message based on the initial table schema and does not generate schema change events. If schema.inference.strategy is set to continuous, the Kafka Connector parses the message value of each Kafka message, identifies its physical columns, and compares the resulting schema with the currently maintained schema. If the schemas are inconsistent, the connector attempts to merge them and generates a corresponding table schema change event. The merge rules are as follows:

-   If the parsed physical columns contain fields that are not present in the current schema, these fields are added to the schema, and an event is generated to add them as nullable columns.
    
-   If the parsed physical columns do not contain fields that exist in the current schema, those fields are retained and their values are populated with `NULL`. No column deletion event is generated.
    
-   Columns with the same name are handled as follows:
    
    -   If the columns have the same data type but different precision, the type with the larger precision is used, and a column type change event is generated.
        
    -   If the columns have different data types, the system finds the smallest common parent type in the type hierarchy tree below. The system then uses this common parent type for the column and generates a column type change event.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3866859371/p907984.png)
        
-   **Supported schema evolution policies:**
    
    -   Adding a column: The connector adds the new column to the end of the schema and synchronizes its data. The new column is set as nullable.
        
    -   Dropping a column: A column deletion event is not generated. Instead, subsequent data for that column is populated with `NULL`.
        
    -   Renaming a column: The connector treats this as dropping the old column and adding a new one. The new column is added to the end of the schema, and the values for the original column are populated with `NULL`.
        
    -   Changing a column type:
        
        -   For Downstream Sinks that support column type changes, a Data Ingestion job can handle type changes (for example, from `INT` to `BIGINT`) if the Downstream Sink is configured to process them. This capability depends on the column type change rules supported by the specific sink. Refer to your sink's documentation for its supported rules.
            
        -   For Downstream Sinks that do not support column type changes, such as Hologres, you can use [Wide Type Mapping](/help/en/flink/realtime-flink/developer-reference/hologres-yaml-connector#8a7c5b6435rdf). This feature creates a table with wider data types in the Downstream Sink when the job starts. When a column type changes, the system can tolerate the change as long as the new type fits within the wider type defined in the Downstream Sink.
            
-   **Unsupported schema changes:**
    
    -   Changes to constraints, such as Primary Keys or indexes.
        
    -   Changing a column from `NOT NULL` to `NULLABLE`.
        
-   **Canal JSON schema parsing**
    
    Canal JSON data may contain an optional `sqlType` field, which records precise type information for data columns. To obtain a more accurate schema, you can set canal-json.infer-schema.strategy to `SQL_TYPE` to use the types from the `sqlType` field. The type mappings are as follows:
    
    **JDBC type**
    
    **Type code**
    
    **CDC type**
    
    BIT
    
    \-7
    
    BOOLEAN
    
    BOOLEAN
    
    16
    
    TINYINT
    
    \-6
    
    TINYINT
    
    SMALLINT
    
    5
    
    SMALLINT
    
    INTEGER
    
    4
    
    INT
    
    BIGINT
    
    \-5
    
    BIGINT
    
    DECIMAL
    
    3
    
    DECIMAL(38,18)
    
    NUMERIC
    
    2
    
    REAL
    
    7
    
    FLOAT
    
    FLOAT
    
    6
    
    DOUBLE
    
    8
    
    DOUBLE
    
    BINARY
    
    \-2
    
    BYTES
    
    VARBINARY
    
    \-3
    
    LONGVARBINARY
    
    \-4
    
    BLOB
    
    2004
    
    DATE
    
    91
    
    DATE
    
    TIME
    
    92
    
    TIME
    
    TIMESTAMP
    
    93
    
    TIMESTAMP
    
    CHAR
    
    1
    
    STRING
    
    VARCHAR
    
    12
    
    LONGVARCHAR
    
    \-1
    
    Other data types
    

### **Dirty data tolerance and collection**

Your Kafka Data Source might contain malformed records, also known as Dirty Data. To prevent your Job from frequently failing and restarting, you can configure it to ignore these invalid records. For example:

```
source:
  type: kafka
  name: Kafka Source
  properties.bootstrap.servers: host:9092
  topic: test-topic
  value.format: json
  scan.startup.mode: earliest-offset
  # Enable Dirty Data Tolerance
  ingestion.ignore-errors: true
  # Tolerate up to 1000 dirty data records
  ingestion.error-tolerance.max-count: 1000
```

This configuration tolerates up to 1,000 dirty records, allowing the Job to run normally. If the number of dirty records exceeds this threshold, the Job fails, prompting you to validate your data.

To ensure your Job never fails due to Dirty Data, use the following configuration:

```
source:
  type: kafka
  name: Kafka Source
  properties.bootstrap.servers: host:9092
  topic: test-topic
  value.format: json
  scan.startup.mode: earliest-offset
  # Enable Dirty Data Tolerance
  ingestion.ignore-errors: true
  # Tolerate all dirty data records
  ingestion.error-tolerance.max-count: -1
```

The Dirty Data Tolerance Policy ensures your Job does not fail due to invalid records. You might also want to analyze this Dirty Data to adjust the behavior of your Kafka data producers. As described in [Dirty Data Collection](/help/en/flink/realtime-flink/developer-reference/dirty-data-collector), you can view the Job's Dirty Data in the TaskManager logs. For example:

```
source:
  type: kafka
  name: Kafka Source
  properties.bootstrap.servers: host:9092
  topic: test-topic
  value.format: json
  scan.startup.mode: earliest-offset
  # Enable Dirty Data Tolerance
  ingestion.ignore-errors: true
  # Tolerate all dirty data records
  ingestion.error-tolerance.max-count: -1

pipeline:
  dirty-data.collector:
    # Write dirty data to the TaskManager log file
    type: logger
```

### **Table name and topic mapping**

When you use Kafka as a Sink for a Data Ingestion Job, the message format, such as Debezium JSON or Canal JSON, includes the original table name information. Downstream systems that consume these messages often use the embedded table name as the actual table identifier, not the topic name. Therefore, you must carefully configure the mapping strategy between table names and topics.

Suppose you need to synchronize two tables from a MySQL database: `mydb.mytable1` and `mydb.mytable2`. The following mapping strategies are available:

#### **1\. No mapping strategy**

Without any mapping strategy, data for each table is written to a topic named in the <Database Name>.<Table Name> format. Therefore, data from `mydb.mytable1` is written to a topic named `mydb.mytable1`, and data from `mydb.mytable2` is written to a topic named `mydb.mytable2`. The following is an example configuration:

```
source:
  type: mysql
  name: MySQL Source
  hostname: ${secret_values.mysql.hostname}
  port: ${mysql.port}
  username: ${secret_values.mysql.username}
  password: ${secret_values.mysql.password}
  tables: mydb.mytable1,mydb.mytable2
  server-id: 8601-8604

sink:
  type: kafka
  name: Kafka Sink
  properties.bootstrap.servers: ${kafka.bootstraps.server}
```

#### **2\. Route rule mapping (Not recommended)**

You might want to write data to a specific topic instead of using the default <Database Name>.<Table Name> format. To do this, you can configure a route rule. The following is an example configuration:

```
source:
  type: mysql
  name: MySQL Source
  hostname: ${secret_values.mysql.hostname}
  port: ${mysql.port}
  username: ${secret_values.mysql.username}
  password: ${secret_values.mysql.password}
  tables: mydb.mytable1,mydb.mytable2
  server-id: 8601-8604

sink:
  type: kafka
  name: Kafka Sink
  properties.bootstrap.servers: ${kafka.bootstraps.server}
  
 route:
  - source-table: mydb.mytable1,mydb.mytable2
    sink-table: mytable
```

In this case, all data from `mydb.mytable1` and `mydb.mytable2` is written to a single topic named `mytable`.

However, when you use a route rule to change the destination topic, it also modifies the table name within the Kafka message (in Debezium JSON or Canal JSON format). In this case, the table name in all Kafka messages becomes `mytable`. This can cause unexpected behavior in systems that consume messages from this topic.

#### **3\. Mapping with** **sink.tableId-to-topic.mapping** **(Recommended)**

To map table names to topics while preserving the original source table name, use the sink.tableId-to-topic.mapping parameter. The following is an example configuration:

```
source:
  type: mysql
  name: MySQL Source
  hostname: ${secret_values.mysql.hostname}
  port: ${mysql.port}
  username: ${secret_values.mysql.username}
  password: ${secret_values.mysql.password}
  tables: mydb.mytable1,mydb.mytable2
  server-id: 8601-8604
  sink.tableId-to-topic.mapping: mydb.mytable1,mydb.mytable2:mytable

sink:
  type: kafka
  name: Kafka Sink
  properties.bootstrap.servers: ${kafka.bootstraps.server}
```

Alternatively, you can use the following configuration:

```
source:
  type: mysql
  name: MySQL Source
  hostname: ${secret_values.mysql.hostname}
  port: ${mysql.port}
  username: ${secret_values.mysql.username}
  password: ${secret_values.mysql.password}
  tables: mydb.mytable1,mydb.mytable2
  server-id: 8601-8604
  sink.tableId-to-topic.mapping: mydb.mytable1:mytable;mydb.mytable2:mytable

sink:
  type: kafka
  name: Kafka Sink
  properties.bootstrap.servers: ${kafka.bootstraps.server}
```

In this case, all data from `mydb.mytable1` and `mydb.mytable2` is written to the `mytable` topic, and the table name within the Kafka messages (in Debezium JSON or Canal JSON format) is preserved as `mydb.mytable1` or `mydb.mytable2`. This ensures that downstream systems can correctly retrieve the original source table name.

## EXACTLY\_ONCE semantics

-   **Configure the Consumer Isolation Level**
    
    All applications that consume Kafka data must set the `isolation.level` property:
    
    -   `read_committed`: Reads only committed data.
        
    -   `read_uncommitted` (Default): Can read uncommitted data.
        
    
    EXACTLY\_ONCE depends on `read_committed`. Otherwise, consumers may see uncommitted data, breaking consistency.
    
-   **Transaction Timeout and Data Loss**
    
    When recovering from a Checkpoint, Realtime Compute for Apache Flink considers only Transactions that were committed before that Checkpoint began. If the duration between a Job Failure and its restart exceeds the Kafka Transaction Timeout, Kafka automatically aborts the open Transaction, which can result in Data Loss.
    
    -   The default `transaction.max.timeout.ms` for a Kafka broker is 15 minutes.
        
    -   By default, Flink Kafka Sink sets the `transaction.timeout.ms` parameter to 1 hour.
        
    -   You must increase `transaction.max.timeout.ms` on the broker to be greater than or equal to the setting in Flink.
        
-   **Producer Pool and Concurrent Checkpoints**
    
    The `EXACTLY_ONCE` Mode uses a fixed-size Kafka Producer Pool. Each checkpoint uses one producer from this pool. If the number of concurrent checkpoints exceeds the pool size, the Job fails.
    
    Configure the producer pool size based on the **maximum number of concurrent checkpoints**.
    
-   **Parallelism Scale-Down Constraints**
    
    If a Job fails before the first Checkpoint is completed, the original Producer Pool information is lost upon restart. Therefore, **do not Scale Down the Job's Parallelism** before the first Checkpoint completes. If a scale-down is necessary, the new Parallelism must not be less than `FlinkKafkaProducer.SAFE_SCALE_DOWN_FACTOR`.
    
-   **Transactions Block Reads**
    
    In `read_committed` mode, any transaction that has not been committed or aborted blocks read operations on the entire Topic.
    
    For example:
    
    -   Transaction 1 writes data.
        
    -   Transaction 2 writes more data and is committed.
        
    -   As long as Transaction 1 remains open, the data from the committed Transaction 2 is invisible to Consumers.
        
    
    This has the following implications:
    
    -   During normal operation, data visibility latency is approximately equal to the checkpoint interval.
        
    -   If a Job fails, any Topic it was writing to is blocked for Consumers until the Job restarts or the Transaction times out. In extreme cases, the Transaction Timeout process itself can also affect read operations.
        

## FAQ

-   [How do I retrieve JSON data from Kafka using Realtime Compute for Apache Flink?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-jld-ni2-onv)
    
-   [Why does an Event Time-based Window produce no output for a Message Queue for Apache Kafka Source Table?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-5gn-pjr-ti2)
    
-   [How do I connect to a secured Kafka Cluster?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-gca-35w-rh0)
    
-   [How do I resolve field name conflicts?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#d5c0055036983)
    
-   [Workspaces and Namespaces](/help/en/flink/realtime-flink/support/reference#section-bqc-stj-zha)
