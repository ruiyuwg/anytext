This topic describes the ApsaraMQ for RocketMQ connector.

**Important**

You can call API operations up to 5,000 times per second to access an ApsaraMQ for RocketMQ 4.x Standard Edition instance. If this limit is exceeded when you use ApsaraMQ for RocketMQ 4.x Standard Edition as the messaging middleware to connect to Realtime Compute for Apache Flink, throttling occurs and Realtime Compute for Apache Flink jobs may become unstable. Therefore, we recommend that you evaluate the potential impact if you currently use or plan to use ApsaraMQ for RocketMQ 4.x Standard Edition as the message queue to connect to Realtime Compute for Apache Flink. Based on your business requirements, we recommend using alternative messaging middleware such as Kafka, Simple Log Service, or DataHub. If you need to use ApsaraMQ for RocketMQ 4.x Standard Edition to process many messages, [submit a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//smartservice.console.alibabacloud.com/%23) to request an increase in the throttling quota.

## Background information

[ApsaraMQ for RocketMQ](/help/en/apsaramq-for-rocketmq/product-overview/what-is-apsaramq-for-rocketmq#concept-2047055) is a distributed messaging middleware service developed by Alibaba Cloud based on Apache RocketMQ. The service provides low latency, high concurrency, high availability, and high reliability. ApsaraMQ for RocketMQ provides asynchronous decoupling and peak-load shifting features for distributed application systems. The service also supports features for Internet applications, including massive message accumulation, high throughput, and reliable retry.

The following table describes the capabilities supported by the ApsaraMQ for RocketMQ connector.

**Item**

**Description**

Supported type

Source table and sink table

Running mode

Streaming mode only

Data format

CSV and binary formats

Metrics

**监控指标**

-   Source table
    
    -   numRecordsIn
        
    -   numRecordsInPerSecond
        
    -   numBytesIn
        
    -   numBytesInPerScond
        
    -   currentEmitEventTimeLag
        
    -   currentFetchEventTimeLag
        
    -   sourceIdleTime
        
-   Sink table
    
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        
    -   numBytesOut
        
    -   numBytesOutPerSecond
        
    -   currentSendTime
        

**Note**

For more information, see [Metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

DataStream API and SQL API.

Only ApsaraMQ for RocketMQ 4.x instances support DataStream APIs.

Data update or deletion in a sink table

Data cannot be deleted or updated. Data can only be inserted into a sink table.

## Features

The following tables describe the fields that are supported for an ApsaraMQ for RocketMQ source table and an ApsaraMQ for RocketMQ sink table.

-   Fields in an ApsaraMQ for RocketMQ source table
    
    **Field**
    
    **Data type**
    
    **Description**
    
    topic
    
    VARCHAR METADATA VIRTUAL
    
    The message topic.
    
    queue-id
    
    INT METADATA VIRTUAL
    
    The ID of the queue in which an ApsaraMQ for RocketMQ message is stored.
    
    queue-offset
    
    BIGINT METADATA VIRTUAL
    
    The consumption offset.
    
    msg-id
    
    VARCHAR METADATA VIRTUAL
    
    The message ID.
    
    store-timestamp
    
    TIMESTAMP(3) METADATA VIRTUAL
    
    The time when a message is stored.
    
    born-timestamp
    
    TIMESTAMP(3) METADATA VIRTUAL
    
    The message generation time.
    
    keys
    
    VARCHAR METADATA VIRTUAL
    
    The message key.
    
    tags
    
    VARCHAR METADATA VIRTUAL
    
    The message tag.
    
-   Fields in an ApsaraMQ for RocketMQ sink table
    
    **Field**
    
    **Data type**
    
    **Description**
    
    keys
    
    VARCHAR METADATA
    
    The message key.
    
    tags
    
    VARCHAR METADATA
    
    The message tag.
    

## Prerequisites

Resources are created in the ApsaraMQ for RocketMQ console. For more information, see [Create resources](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/getting-started/create-resources#task-2446142).

## Limitations

-   Only VVR 8.0.3 or later supports ApsaraMQ for RocketMQ 5.x instances.
    
-   The ApsaraMQ for RocketMQ connector uses pull consumers to consume messages. All subtasks share data consumption.
    

## Syntax

```
CREATE TABLE mq_source(
  x varchar,
  y varchar,
  z varchar
) WITH (
  'connector' = 'mq5',
  'topic' = '<yourTopicName>',
  'endpoint' = '<yourEndpoint>',
  'consumerGroup' = '<yourConsumerGroup>'
);
```

## Connector options

### **General**

**Option**

**Description**

**Data type**

**Required?**

**Default value**

**Remarks**

connector

The connector to use.

String

Yes

No default value

-   In ApsaraMQ for RocketMQ 4.x, set the value to `mq`.
    
-   In ApsaraMQ for RocketMQ 5.x, set the value to `mq5`.
    

endPoint

The endpoint of ApsaraMQ for RocketMQ.

String

Yes

No default value

ApsaraMQ for RocketMQ supports the following types of endpoints:

-   VPC access: In the ApsaraMQ for RocketMQ console, click your instance to go to **Instance Details** page. In the **TCP Endpoint** section, copy the endpoint in the row with **Network** set to **Access over Internal VPC**.
    
-   Internet access: In the ApsaraMQ for RocketMQ console, click your instance to go to **Instance Details** page. In the **TCP Endpoint** section, copy the endpoint in the row with **Network** set to **Internet Access**.
    

**Important**

Due to changes in the network security policies of Alibaba Cloud, connectivity issues may occur when Flink accesses ApsaraMQ for RocketMQ service over the Internet. Therefore, we recommend you connect ApsaraMQ for RocketMQ over a VPC.

-   Cross-region VPC access isn't supported. For example, if your Flink workspace resides in the Singapore region but your ApsaraMQ for RocketMQ instance resides in the Japan (Tokyo) region, Flink cannot access ApsaraMQ for RocketMQ.
    
-   To access ApsaraMQ for RocketMQ over the Internet, you must enable internet access for Flink. For more information, see [Network connections](/help/en/flink/realtime-flink/user-guide/network-connections).
    

topic

The topic name.

String

Yes

No default value

accessId

-   ApsaraMQ for RocketMQ 4.x: the AccessKey ID of your Alibaba Cloud account.
    
-   ApsaraMQ for RocketMQ 5.x:
    
    The username of the ApsaraMQ for RocketMQ instance
    

String

-   ApsaraMQ for RocketMQ 4.x: yes
    
-   ApsaraMQ for RocketMQ 5.x: no
    

No default value

-   ApsaraMQ for RocketMQ 4.x: See [How do I view the AccessKey pair of an account?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
    

**Important**

To ensure security, use [variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb) to configure your AccessKey pair.

-   ApsaraMQ for RocketMQ 5.x:
    
    -   Internet access: Set this option to the username of the ApsaraMQ for RocketMQ instance in the ApsaraMQ for RocketMQ console.
        
    -   VPC access: Skip this option.
        

accessKey

-   ApsaraMQ for RocketMQ 4.x: the AccessKey secret of your Alibaba Cloud account.
    
-   ApsaraMQ for RocketMQ 5.x: the password of the ApsaraMQ for RocketMQ instance
    

String

-   ApsaraMQ for RocketMQ 4.x: yes
    
-   ApsaraMQ for RocketMQ 5.x: no
    

No default value

tag

The tag of the message that is subscribed to or written.

String

No

No default value

-   When ApsaraMQ for RocketMQ is the source, only a single tag can be read.
    
-   When ApsaraMQ for RocketMQ is the sink, you can configure multiple tags and separate multiple tags with commas (`,`).
    

**Note**

When ApsaraMQ for RocketMQ is used as the sink, this option applies to ApsaraMQ for RocketMQ 4.x instances. If you use an ApsaraMQ for RocketMQ 5.x instance, specify the message tag by using the fields in an ApsaraMQ for RocketMQ sink table.

encoding

The encoding format.

String

No

UTF-8

instanceID

The ID of the ApsaraMQ for RocketMQ instance.

String

No

No default value

-   If the ApsaraMQ for RocketMQ instance does not use a separate namespace, this option cannot be configured.
    
-   If the ApsaraMQ for RocketMQ instance uses a separate namespace, this option is required.
    

**Note**

Only ApsaraMQ for RocketMQ 4.x instances support this option.

### **Source-specific**

**Option**

**Description**

**Data type**

**Required?**

**Default value**

**Remarks**

consumerGroup

The name of the consumer group.

String

Yes

No default value

pullIntervalMs

The wait interval of the source if no data can be consumed from the upstream storage system.

Int

Yes

No default value

Unit: milliseconds.

You cannot configure the rate of reading ApsaraMQ for RocketMQ messages because no throttling mechanism is available.

**Note**

Only ApsaraMQ for RocketMQ 4.x instances support this option.

timeZone

The time zone.

String

No

No default value

Example: Asia/Shanghai.

startTimeMs

The time to start reading data.

Long

No

No default value

The timestamp. Unit: milliseconds.

startMessageOffset

The start offset to consume messages.

Int

No

No default value

If you set this option, data is loaded from the offset specified by `startMessageOffset`.

lineDelimiter

The row delimiter used when a message block is parsed.

String

No

`\n`

fieldDelimiter

The field delimiter.

String

No

`\u0001`

The delimiter varies based on the mode in which the terminal of ApsaraMQ for RocketMQ works:

-   In read-only mode (default mode), the delimiter is `\u0001`. In this mode, the delimiter is not visible.
    
-   In edit mode, the delimiter is `^A`.
    

lengthCheck

The rule for checking the number of fields per row.

Int

No

`NONE`

Valid values:

-   `NONE`
    
    -   If the number of fields that are parsed from a row of data is greater than the number of defined fields, data is extracted from left to right based on the number of defined fields.
        
    -   If the number of fields that are parsed from a row of data is less than the number of defined fields, this row of data is skipped.
        
-   `SKIP`: If the number of fields that are parsed from a row of data does not match the number of defined fields, this row of data is skipped.
    
-   `EXCEPTION`: If the number of fields that are parsed from a row of data is different from the number of defined fields, an exception is reported.
    
-   `PAD`: Data is padded from left to right based on the order of defined fields.
    
    -   If the number of fields that are parsed from a row of data is greater than the number of defined fields, data is extracted from left to right based on the number of defined fields.
        
    -   If the number of fields parsed from a row of data is less than the number of defined fields, the values of the missing fields are padded with null.
        

columnErrorDebug

Specifies whether debugging is enabled.

Boolean

No

false

If you set this parameter to true, a log entry that indicates a parsing exception is returned.

pullBatchSize

The maximum number of messages that can be pulled at a time.

Int

No

64

Only Realtime Compute for Apache Flink that uses VVR 8.0.7 or later supports this parameter.

### **Sink-specific**

**Option**

**Description**

**Data type**

**Required?**

**Default value**

**Remarks**

producerGroup

The name of the producer group

String

Yes

No default value

retryTimes

The number of retries for writing data to the table.

Int

No

`10`

sleepTimeMs

The retry interval.

Long

No

`5000`

partitionField

The partition key column. You can specify a field as a partition key column.

String

No

No default value

This option is required if the `mode` option is set to `partition`.

**Note**

Only VVR 8.0.5 or later supports this option.

deliveryTimestampMode

The message delay delivery mode. This option works with the `deliveryTimestampValue` option to determine the delivery time of messages.

String

No

No default value

Valid values:

-   `fixed`: fixed mode.
    
-   `relative`: relative mode.
    
-   `field`: field-based mode, which specifies a field as the delivery time.
    

**Note**

Only VVR 11.1 or later supports this option.

deliveryTimestampType

The time semantics for delay delivery.

String

No

`processing_time`

Valid values:

-   `event_time`
    
-   `processing_time`
    

**Note**

Only VVR 11.1 or later supports this option.

deliveryTimestampValue

The delivery time of delayed messages.

Long

No

No default value

This option is used with `deliveryTimestampMode`:

-   `deliveryTimestampMode=fixed`: The message is delayed until the specified timestamp. If the current time is later than the specified timestamp, the message is delivered immediately. Unit: milliseconds.
    
-   `deliveryTimestampMode=relative`: The delay time is based on the time semantics specified by `deliveryTimestampType`. Unit: milliseconds.
    
-   `deliveryTimestampMode=field`: This option does not take effect. The delay time is determined by the value of the field specified by `deliveryTimestampField`.
    

**Note**

Only VVR 11.1 or later supports this option.

deliveryTimestampField

Specifies the field where the delivery time of delayed messages is configured. The field type must be `BIGINT`.

String

No

No default value

This option takes effect only when `deliveryTimestampMode` is set to `field`.

**Note**

Only VVR 11.1 or later supports this option.

## Data type mappings

**Data type of Realtime Compute for Apache Flink**

**Data type of ApsaraMQ for RocketMQ**

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

## Examples

### **Source table**

-   CSV format
    
    For example, a CSV message is recorded in the following format:
    
    ```
    1,name,male 
    2,name,female
    ```
    
    **Note**
    
    An ApsaraMQ for RocketMQ message can contain zero to multiple data records. Multiple data records are separated by `\n`.
    
    You can use the following DDL statement to declare an ApsaraMQ for RocketMQ source table in a Flink deployment:
    
    -   ApsaraMQ for RocketMQ 5.x
        
    
    ```
    CREATE TABLE mq_source(
      id varchar,
      name varchar,
      gender varchar,
      topic varchar metadata virtual
    ) WITH (
      'connector' = 'mq5',
      'topic' = 'mq-test',
      'endpoint' = '<yourEndpoint>',
      'consumerGroup' = 'mq-group',
      'fieldDelimiter' = ','
    );
    ```
    
    -   ApsaraMQ for RocketMQ 4.x
        
    
    ```
    CREATE TABLE mq_source(
      id varchar,
      name varchar,
      gender varchar,
      topic varchar metadata virtual
    ) WITH (
      'connector' = 'mq',
      'topic' = 'mq-test',
      'endpoint' = '<yourEndpoint>',
      'pullIntervalMs' = '1000',
      'accessId' = '${secret_values.ak_id}',
      'accessKey' = '${secret_values.ak_secret}',
      'consumerGroup' = 'mq-group',
      'fieldDelimiter' = ','
    );
    ```
    
-   Binary format
    
    -   ApsaraMQ for RocketMQ 5.x
        
        ```
        CREATE TEMPORARY TABLE source_table (
          mess varbinary
        ) WITH (
          'connector' = 'mq5',
          'endpoint' = '<yourEndpoint>',
          'topic' = 'mq-test',
          'consumerGroup' = 'mq-group'
        );
        
        CREATE TEMPORARY TABLE out_table (
          commodity varchar
        ) WITH (
          'connector' = 'print'
        );
        
        INSERT INTO out_table
        select 
          cast(mess as varchar)
        FROM source_table;
        ```
        
    -   ApsaraMQ for RocketMQ 4.x
        
        ```
        CREATE TEMPORARY TABLE source_table (
          mess varbinary
        ) WITH (
          'connector' = 'mq',
          'endpoint' = '<yourEndpoint>',
          'pullIntervalMs' = '500',
          'accessId' = '${secret_values.ak_id}',
          'accessKey' = '${secret_values.ak_secret}',
          'topic' = 'mq-test',
          'consumerGroup' = 'mq-group'
        );
        
        CREATE TEMPORARY TABLE out_table (
          commodity varchar
        ) WITH (
          'connector' = 'print'
        );
        
        INSERT INTO out_table
        select 
          cast(mess as varchar)
        FROM source_table;
        ```
        

### **Sink table**

-   Create a sink table
    
    -   ApsaraMQ for RocketMQ 5.x
        
        ```
        CREATE TABLE mq_sink (
          id INTEGER,
          len BIGINT,
          content VARCHAR
        ) WITH (
          'connector'='mq5',
          'endpoint'='<yourEndpoint>',
          'topic'='<yourTopicName>',
          'producerGroup'='<yourGroupName>'
        );
        ```
        
    -   ApsaraMQ for RocketMQ 4.x
        
        ```
        CREATE TABLE mq_sink (
          id INTEGER,
          len BIGINT,
          content VARCHAR
        ) WITH (
          'connector'='mq',
          'endpoint'='<yourEndpoint>',
          'accessId'='${secret_values.ak_id}',
          'accessKey'='${secret_values.ak_secret}',
          'topic'='<yourTopicName>',
          'producerGroup'='<yourGroupName>'
        );
        ```
        
        **Note**
        
        If the messages of your ApsaraMQ for RocketMQ instance are in binary format, only one field can be defined in the DDL statement and the field must be of the VARBINARY data type.
        
-   Create an ApsaraMQ for RocketMQ sink table in which the values of the `keys` and `tags` fields are defined as the key and tag of ApsaraMQ for RocketMQ messages.
    
    -   ApsaraMQ for RocketMQ 5.x
        
        ```
        CREATE TABLE mq_sink (
          id INTEGER,
          len BIGINT,
          content VARCHAR,
          keys VARCHAR METADATA,
          tags VARCHAR METADATA
        ) WITH (
          'connector'='mq5',
          'endpoint'='<yourEndpoint>',
          'topic'='<yourTopicName>',
          'producerGroup'='<yourGroupName>'
        );
        ```
        
    -   ApsaraMQ for RocketMQ 4.x
        
        ```
        CREATE TABLE mq_sink (
          id INTEGER,
          len BIGINT,
          content VARCHAR,
          keys VARCHAR METADATA,
          tags VARCHAR METADATA
        ) WITH (
          'connector'='mq',
          'endpoint'='<yourEndpoint>',
          'accessId'='${secret_values.ak_id}',
          'accessKey'='${secret_values.ak_secret}',
          'topic'='<yourTopicName>',
          'producerGroup'='<yourGroupName>'
        );
        ```
        

## DataStream API

**Important**

When you read and write data using the DataStream API, use the corresponding DataStream connector to connect to Realtime Compute for Apache Flink. For more information about how to configure the DataStream connector, see [Integrate and use connectors in DataStream programs](/help/en/flink/realtime-flink/developer-reference/settings-of-datastream-connectors#main-2309395).

VVR provides `MetaQSource` to read data from ApsaraMQ for RocketMQ. It also provides `MetaQOutputFormat`, an implementation of the `OutputFormat` class, to write data to ApsaraMQ for RocketMQ. The following code provides examples on how to read data from and write data to ApsaraMQ for RocketMQ:

#### **ApsaraMQ for RocketMQ 5.x**

**Note**

In ApsaraMQ for RocketMQ 5.x, the AccessKey pair corresponds to the username and password that are configured for the instance. If you access the ApsaraMQ for RocketMQ instance over an internal network and Access Control List (ACL) authentication is not enabled for the instance, you do not need to configure the AccessKey pair parameters.

```
import com.alibaba.ververica.connectors.common.sink.OutputFormatSinkFunction;
import com.alibaba.ververica.connectors.mq5.shaded.org.apache.rocketmq.common.message.MessageExt;
import com.alibaba.ververica.connectors.mq5.sink.RocketMQOutputFormat;
import com.alibaba.ververica.connectors.mq5.source.RocketMQSource;
import com.alibaba.ververica.connectors.mq5.source.reader.deserializer.RocketMQRecordDeserializationSchema;
import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.api.common.typeinfo.TypeInformation;
import org.apache.flink.api.common.typeinfo.Types;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.util.Collector;
import java.util.Collections;
import java.util.List;
/**
 * A demo that illustrates how to consume messages from RocketMQ, convert
 * messages, then write messages to RocketMQ.
 */
public class RocketMQ5DataStreamDemo {

    public static final String ENDPOINT = "<yourEndpoint>";
    public static final String ACCESS_ID = "<accessID>";
    public static final String ACCESS_KEY = "<accessKey>";
    public static final String SOURCE_TOPIC = "<sourceTopicName>";
    public static final String CONSUMER_GROUP = "<consumerGroup>";
    public static final String SINK_TOPIC = "<sinkTopicName>";
    public static final String PRODUCER_GROUP = "<producerGroup>";

    public static void main(String[] args) throws Exception {
        // Sets up the streaming execution environment
        Configuration conf = new Configuration();

        // The following two configurations are for local debugging only. Delete them before you package the job and upload it to Realtime Compute for Apache Flink.
        conf.setString("pipeline.classpaths", "file://" + "the absolute path of the uber JAR file");
        conf.setString(
                "classloader.parent-first-patterns.additional",
                "com.alibaba.ververica.connectors.mq5.source.reader.deserializer.RocketMQRecordDeserializationSchema;com.alibaba.ververica.connectors.mq5.shaded.");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment(conf);

        final DataStreamSource<String> ds =
                env.fromSource(
                        RocketMQSource.<String>builder()
                                .setEndpoint(ENDPOINT)
                                .setAccessId(ACCESS_ID)
                                .setAccessKey(ACCESS_KEY)
                                .setTopic(SOURCE_TOPIC)
                                .setConsumerGroup(CONSUMER_GROUP)
                                .setDeserializationSchema(new MyDeserializer())
                                .setStartOffset(1)
                                .build(),
                        WatermarkStrategy.noWatermarks(),
                        "source");

        ds.map(new ToMessage())
                .addSink(
                        new OutputFormatSinkFunction<>(
                                new RocketMQOutputFormat.Builder()
                                        .setEndpoint(ENDPOINT)
                                        .setAccessId(ACCESS_ID)
                                        .setAccessKey(ACCESS_KEY)
                                        .setTopicName(SINK_TOPIC)
                                        .setProducerGroup(PRODUCER_GROUP)
                                        .build()));

        env.execute();
    }

    private static class MyDeserializer implements RocketMQRecordDeserializationSchema<String> {
        @Override
        public void deserialize(List<MessageExt> record, Collector<String> out) {
            for (MessageExt messageExt : record) {
                out.collect(new String(messageExt.getBody()));
            }
        }

        @Override
        public TypeInformation<String> getProducedType() {
            return Types.STRING;
        }
    }

    private static class ToMessage implements MapFunction<String, List<MessageExt>> {

        public ToMessage() {
        }

        @Override
        public List<MessageExt> map(String s) {
            final MessageExt message = new MessageExt();
            message.setBody(s.getBytes());
            message.setWaitStoreMsgOK(true);
            return Collections.singletonList(message);
        }
    }
}
```

#### **ApsaraMQ for RocketMQ 4.x**

```
import com.alibaba.ververica.connector.mq.shaded.com.alibaba.rocketmq.common.message.MessageExt;
import com.alibaba.ververica.connectors.common.sink.OutputFormatSinkFunction;
import com.alibaba.ververica.connectors.metaq.sink.MetaQOutputFormat;
import com.alibaba.ververica.connectors.metaq.source.MetaQSource;
import com.alibaba.ververica.connectors.metaq.source.reader.deserializer.MetaQRecordDeserializationSchema;
import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.typeinfo.TypeInformation;
import org.apache.flink.api.connector.source.Boundedness;
import org.apache.flink.api.java.typeutils.ListTypeInfo;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.util.Collector;
import java.io.IOException;
import java.util.List;
import java.util.Properties;
import static com.alibaba.ververica.connector.mq.shaded.com.taobao.metaq.client.ExternConst.*;
/**
 * A demo that illustrates how to consume messages from RocketMQ, convert
 * messages, then write messages to RocketMQ.
 */
public class RocketMQDataStreamDemo {

    public static final String ENDPOINT = "<yourEndpoint>";
    public static final String ACCESS_ID = "<accessID>";
    public static final String ACCESS_KEY = "<accessKey>";
    public static final String INSTANCE_ID = "<instanceID>";
    public static final String SOURCE_TOPIC = "<sourceTopicName>";
    public static final String CONSUMER_GROUP = "<consumerGroup>";
    public static final String SINK_TOPIC = "<sinkTopicName>";
    public static final String PRODUCER_GROUP = "<producerGroup>";

    public static void main(String[] args) throws Exception {
        // Sets up the streaming execution environment
        Configuration conf = new Configuration();

        // The following two configurations are for local debugging only. Delete them before you package the code and upload it to Realtime Compute for Apache Flink.
        conf.setString("pipeline.classpaths", "file://" + "the absolute path of the uber JAR file");
        conf.setString("classloader.parent-first-patterns.additional",
                "com.alibaba.ververica.connectors.metaq.source.reader.deserializer.MetaQRecordDeserializationSchema;com.alibaba.ververica.connector.mq.shaded.");
        final StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment(conf);

        // Create and add RocketMQ source.
        env.fromSource(createRocketMQSource(), WatermarkStrategy.noWatermarks(), "source")
                // Convert message body to upper case.
                .map(RocketMQDataStreamDemo2::convertMessages)
                // Create and add RocketMQ sink.
                .addSink(new OutputFormatSinkFunction<>(createRocketMQOutputFormat()))
                .name(RocketMQDataStreamDemo2.class.getSimpleName());
        // Compiles and submits job.
        env.execute("RocketMQ connector end-to-end DataStream demo");
    }

    private static MetaQSource<MessageExt> createRocketMQSource() {
        Properties mqProperties = createMQProperties();

        return new MetaQSource<>(SOURCE_TOPIC,
                CONSUMER_GROUP,
                null, // Always null
                null, // Tag of the messages to consumer
                Long.MAX_VALUE, // Stop timestamp, in milliseconds
                -1, // Start timestamp, in milliseconds. Set it to -1 to disable starting from offset.
                0, // Start offset.
                300_000, // Partition discovery interval.
                mqProperties,
                Boundedness.CONTINUOUS_UNBOUNDED,
                new MyDeserializationSchema());
    }

    private static MetaQOutputFormat createRocketMQOutputFormat() {
        return new MetaQOutputFormat.Builder()
                .setTopicName(SINK_TOPIC)
                .setProducerGroup(PRODUCER_GROUP)
                .setMqProperties(createMQProperties())
                .build();
    }

    private static Properties createMQProperties() {
        Properties properties = new Properties();
        properties.put(PROPERTY_ONS_CHANNEL, "ALIYUN");
        properties.put(NAMESRV_ADDR, ENDPOINT);
        properties.put(PROPERTY_ACCESSKEY, ACCESS_ID);
        properties.put(PROPERTY_SECRETKEY, ACCESS_KEY);
        properties.put(PROPERTY_ROCKET_AUTH_ENABLED, true);
        properties.put(PROPERTY_INSTANCE_ID, INSTANCE_ID);
        return properties;
    }

    private static List<MessageExt> convertMessages(MessageExt messages) {
        return Collections.singletonList(messages);
    }

    public static class MyDeserializationSchema implements MetaQRecordDeserializationSchema<MessageExt> {
        @Override
        public void deserialize(List<MessageExt> list, Collector<MessageExt> collector) {
            for (MessageExt messageExt : list) {
                collector.collect(messageExt);
            }
        }

        @Override
        public TypeInformation<MessageExt> getProducedType() {
            return TypeInformation.of(MessageExt.class);
        }
    }
}
    }
}
```

#### **POM.xml**

-   ApsaraMQ for RocketMQ 4.x: [MQ DataStream connector](https://mvnrepository.com/artifact/com.alibaba.ververica/ververica-connector-mq).
    
-   ApsaraMQ for RocketMQ 5.x: [MQ DataStream connector](https://mvnrepository.com/artifact/com.alibaba.ververica/ververica-connector-mq5).
    

```
<!--MQ 5.x-->
<dependency>
    <groupId>com.alibaba.ververica</groupId>
    <artifactId>ververica-connector-mq5</artifactId>
    <version>${vvr-version}</version>
    <scope>provided</scope>
</dependency>

<!--MQ 4.x-->
<dependency>
    <groupId>com.alibaba.ververica</groupId>
    <artifactId>ververica-connector-mq</artifactId>
    <version>${vvr-version}</version>
</dependency>
```

**Note**

For more information about how to configure the endpoint for ApsaraMQ for RocketMQ, see [Announcement on the settings of TCP internal endpoints](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-5-x-series/product-overview/announcement-on-the-settings-of-internal-tcp-endpoints#concept-2351917).

## FAQ

[How does the connector for the ApsaraMQ for RocketMQ source table learn about the change in the number of partitions in a topic when new partitions are created in the topic?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-93w-sz9-1xr)
