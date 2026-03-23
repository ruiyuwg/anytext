Simple Log Service (SLS) provides the aliyun-log-flume plugin to integrate with Apache Flume. You can use this plugin to write log data to SLS from other data sources or consume log data from SLS and ship it to downstream systems such as Hadoop Distributed File System (HDFS) and Kafka.

## How it works

Apache Flume uses a Source-Channel-Sink data flow model. The aliyun-log-flume plugin provides a custom Sink and a custom Source that connect SLS to the Flume pipeline:

-   **Sink**: Receives data from a Flume Channel and writes it to an SLS Logstore. Use this component when you want to ingest data into SLS from other systems through Flume.
    
-   **Source**: Consumes log data from an SLS Logstore and delivers it into a Flume Channel. Use this component when you want to ship SLS log data to other systems through Flume.
    

The Channel acts as a buffer between the Source and the Sink. Flume provides built-in channel types such as Memory Channel and File Channel. For more information, see the [Apache Flume User Guide](https://flume.apache.org/FlumeUserGuide.html).

For the plugin source code and release notes, see [aliyun-log-flume on GitHub](https://github.com/aliyun/aliyun-log-flume).

## Prerequisites

Before you begin, make sure that the following requirements are met:

-   **Java**: JDK 1.8 or later is installed.
    
-   **Apache Flume**: Flume 1.8.0 or later is installed. To download Flume, see the [Apache Flume download page](http://flume.apache.org/download.html).
    
-   **SLS resources**: An SLS project and Logstore are created. For more information, see the SLS documentation.
    
-   **AccessKey pair**: An AccessKey ID and AccessKey secret are obtained. For security, we recommend that you use the AccessKey pair of a RAM user. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).
    

## Install the plugin

1.  Download and install Flume. For more information, see the [Apache Flume download page](http://flume.apache.org/download.html).
    
2.  Download the aliyun-log-flume plugin JAR file and save it to the `<FLUME_HOME>/lib` directory. Download link: [aliyun-log-flume-1.9.jar](https://github.com/aliyun/aliyun-log-flume/releases/download/1.9/aliyun-log-flume-1.9.jar)
    
3.  Create a configuration file named `flumejob.conf` in the `<FLUME_HOME>/conf` directory. For Sink configuration, see [Configure a Sink](#section-wsy-7qg-7zx). For Source configuration, see [Configure a Source](#section-wcf-ixl-8zq).
    
4.  Start Flume.
    
    ```
       bin/flume-ng agent -n agent -c conf -f conf/flumejob.conf
    ```
    

## Configure a Sink

Use the SLS Sink to write data from other systems into an SLS Logstore through Flume. The Sink supports three serialization modes for converting Flume events into SLS log entries:

**Mode**

**Behavior**

**SIMPLE**

Each Flume event body is written to SLS as a single field.

**DELIMITED**

Each Flume event body is split into fields based on a delimiter and mapped to configured column names.

**JSON**

Each Flume event body is parsed as JSON.

### Sink parameters

#### Connection parameters

**Parameter**

**Required**

**Description**

**type**

Yes

The Sink type. Set this to `com.aliyun.loghub.flume.sink.LoghubSink`.

**endpoint**

Yes

The endpoint of the SLS project. Example: `http://cn-qingdao.log.aliyuncs.com`. Select an endpoint based on the region of your project. For more information, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).

**project**

Yes

The name of the SLS project.

**logstore**

Yes

The name of the Logstore.

**accessKeyId**

Yes

The AccessKey ID of your Alibaba Cloud account or RAM user. We recommend that you use the AccessKey pair of a RAM user. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).

**accessKey**

Yes

The AccessKey secret of your Alibaba Cloud account or RAM user. We recommend that you use the AccessKey pair of a RAM user. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).

#### Batching parameters

**Parameter**

**Required**

**Description**

batchSize

No

The number of log entries to write to SLS in a single batch. Default value: `1000`.

maxBufferSize

No

The maximum number of log entries allowed in the internal buffer queue. Default value: `1000`.

#### Serialization parameters

**Parameter**

**Required**

**Description**

serializer

No

The serialization mode for converting Flume events into SLS log entries. Valid values: **SIMPLE** (default), **DELIMITED**, **JSON**, or a fully qualified custom serializer class name.

columns

No

A comma-separated list of column names. Required when `serializer` is set to **DELIMITED**. Columns are mapped to fields in the order they appear in each record.

separatorChar

No

The delimiter character used to split fields. Must be a single character. Required when `serializer` is set to **DELIMITED**. Default value: `,` (comma).

quoteChar

No

The quote character used to enclose fields. Required when `serializer` is set to **DELIMITED**. Default value: `"` (double quotation mark).

escapeChar

No

The escape character. Required when `serializer` is set to **DELIMITED**. Default value: `"` (double quotation mark).

#### Timestamp parameter

**Parameter**

**Required**

**Description**

useRecordTime

No

Specifies whether to use the timestamp field in the data entries as the log time when writing to SLS. Default value: `false`. When set to `false`, the current system time is used as the log time.

### Sink configuration example

The following example reads data from an Avro Source and writes it to an SLS Logstore using the DELIMITED serializer:

```
# Name the components
agent.sources = avroSrc
agent.channels = memCh
agent.sinks = slsSink

# Configure the Avro Source
agent.sources.avroSrc.type = avro
agent.sources.avroSrc.bind = 0.0.0.0
agent.sources.avroSrc.port = 4141
agent.sources.avroSrc.channels = memCh

# Configure the Memory Channel
agent.channels.memCh.type = memory
agent.channels.memCh.capacity = 1000
agent.channels.memCh.transactionCapacity = 100

# Configure the SLS Sink
agent.sinks.slsSink.type = com.aliyun.loghub.flume.sink.LoghubSink
agent.sinks.slsSink.channel = memCh
agent.sinks.slsSink.endpoint = http://cn-hangzhou.log.aliyuncs.com
agent.sinks.slsSink.project = your-project
agent.sinks.slsSink.logstore = your-logstore
agent.sinks.slsSink.accessKeyId = your-access-key-id
agent.sinks.slsSink.accessKey = your-access-key-secret
agent.sinks.slsSink.batchSize = 1000
agent.sinks.slsSink.serializer = DELIMITED
agent.sinks.slsSink.columns = col1,col2,col3
agent.sinks.slsSink.separatorChar = ,
```

For more configuration examples, see the [Sink example on GitHub](https://github.com/aliyun/aliyun-log-flume/blob/master/src/test/resources/sink-example.conf).

## Configure a Source

Use the SLS Source to consume log data from an SLS Logstore and deliver it to downstream systems through Flume. The Source supports two deserialization modes for converting SLS log entries into Flume events:

**Mode**

**Behavior**

**DELIMITED**

Log fields are joined with a delimiter and written as the Flume event body.

**JSON**

Log entries are serialized as JSON and written as the Flume event body.

### Source parameters

#### Connection parameters

**Parameter**

**Required**

**Description**

**type**

Yes

The Source type. Set this to `com.aliyun.loghub.flume.source.LoghubSource`.

**endpoint**

Yes

The endpoint of the SLS project. Example: `http://cn-qingdao.log.aliyuncs.com`. Select an endpoint based on the region of your project. For more information, see [Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint).

**project**

Yes

The name of the SLS project.

**logstore**

Yes

The name of the Logstore.

**accessKeyId**

Yes

The AccessKey ID of your Alibaba Cloud account or RAM user. We recommend that you use the AccessKey pair of a RAM user. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).

**accessKey**

Yes

The AccessKey secret of your Alibaba Cloud account or RAM user. We recommend that you use the AccessKey pair of a RAM user. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key).

#### Consumer group parameters

**Parameter**

**Required**

**Description**

consumerGroup

No

The name of the consumer group used to coordinate consumption across multiple consumers. If this parameter is not specified, a consumer group name is randomly generated.

heartbeatIntervalMs

No

The interval, in milliseconds, at which the consumer client sends heartbeat messages to SLS. Default value: `30000`.

fetchIntervalMs

No

The interval, in milliseconds, between successive data fetch requests to SLS. Default value: `100`.

fetchInOrder

No

Specifies whether to consume log data in the order it was written to SLS. Default value: `false`.

batchSize

No

The number of log entries to fetch per request. Default value: `100`.

initialPosition

No

The starting position for data consumption. Valid values: **begin** (default), **end**, and **timestamp**. **Note**: If a checkpoint exists in SLS for the specified consumer group, the checkpoint takes precedence over this setting.

timestamp

No

A UNIX timestamp that specifies the point in time from which to start consuming data. Required when `initialPosition` is set to **timestamp**.

#### Deserialization parameters

**Parameter**

**Required**

**Description**

**deserializer**

Yes

The deserialization mode for converting SLS log entries into Flume events. Valid values: **DELIMITED** (default), **JSON**, or a fully qualified custom deserializer class name.

columns

No

A comma-separated list of column names. Required when `deserializer` is set to **DELIMITED**. Columns are mapped to fields in the order they appear in each record.

separatorChar

No

The delimiter character used to join fields. Must be a single character. Required when `deserializer` is set to **DELIMITED**. Default value: `,` (comma).

quoteChar

No

The quote character used to enclose fields. Required when `deserializer` is set to **DELIMITED**. Default value: `"` (double quotation mark).

escapeChar

No

The escape character. Required when `deserializer` is set to **DELIMITED**. Default value: `"` (double quotation mark).

appendTimestamp

No

Specifies whether to append the log timestamp as an additional field. Applicable when `deserializer` is set to **DELIMITED**. Default value: `false`.

#### JSON field options

The following parameters apply only when `deserializer` is set to **JSON**.

**Parameter**

**Required**

**Description**

sourceAsField

No

Specifies whether to include the log source as a field named `__source__`. Default value: `false`.

tagAsField

No

Specifies whether to include log tags as fields. Each tag is added as a field named `__tag__:{tag name}`. Default value: `false`.

timeAsField

No

Specifies whether to include the log time as a field named `__time__`. Default value: `false`.

#### Timestamp parameter

**Parameter**

**Required**

**Description**

useRecordTime

No

Specifies whether to use the timestamp field in the log entries as the Flume event timestamp. Default value: `false`. When set to `false`, the current system time is used.

#### SPL processing parameters

The following parameters allow you to filter or transform log data during consumption using SLS Search Processing Language (SPL).

**Parameter**

**Required**

**Description**

processor

No

An SLS SPL expression used to filter or transform log data during consumption. For more information about SPL syntax, see the SLS documentation.

query

No

An SLS SPL query expression. **Deprecated**: Use `processor` instead.

### Source configuration example

The following example consumes data from an SLS Logstore using the JSON deserializer and writes it to a local log file:

```
# Name the components
agent.sources = slsSrc
agent.channels = memCh
agent.sinks = loggerSink

# Configure the SLS Source
agent.sources.slsSrc.type = com.aliyun.loghub.flume.source.LoghubSource
agent.sources.slsSrc.channels = memCh
agent.sources.slsSrc.endpoint = http://cn-hangzhou.log.aliyuncs.com
agent.sources.slsSrc.project = your-project
agent.sources.slsSrc.logstore = your-logstore
agent.sources.slsSrc.accessKeyId = your-access-key-id
agent.sources.slsSrc.accessKey = your-access-key-secret
agent.sources.slsSrc.deserializer = JSON
agent.sources.slsSrc.sourceAsField = true
agent.sources.slsSrc.tagAsField = true
agent.sources.slsSrc.timeAsField = true
agent.sources.slsSrc.consumerGroup = flume-consumer
agent.sources.slsSrc.initialPosition = begin

# Configure the Memory Channel
agent.channels.memCh.type = memory
agent.channels.memCh.capacity = 1000
agent.channels.memCh.transactionCapacity = 100

# Configure the Logger Sink
agent.sinks.loggerSink.type = logger
agent.sinks.loggerSink.channel = memCh
```

For more configuration examples, see the [Source example on GitHub](https://github.com/aliyun/aliyun-log-flume/blob/master/src/test/resources/source-example.conf).

## Configure a Channel

The Channel is the buffer that connects a Source to a Sink in a Flume pipeline. The aliyun-log-flume plugin works with any standard Flume Channel type. The two most common options are:

-   **Memory Channel**: Stores events in memory. Offers high throughput but events are lost if the Flume agent process restarts. Suitable for use cases where data loss is tolerable.
    
    ```
      agent.channels.memCh.type = memory
      agent.channels.memCh.capacity = 10000
      agent.channels.memCh.transactionCapacity = 1000
    ```
    
-   **File Channel**: Persists events to disk. Provides durability at the cost of lower throughput. Suitable for production workloads where data loss is not acceptable.
    
    ```
      agent.channels.fileCh.type = file
      agent.channels.fileCh.checkpointDir = /var/flume/checkpoint
      agent.channels.fileCh.dataDirs = /var/flume/data
      agent.channels.fileCh.capacity = 1000000
      agent.channels.fileCh.transactionCapacity = 10000
    ```
    

**Important**: Set the `transactionCapacity` of the Channel to a value equal to or greater than the `batchSize` configured on the Sink or Source. If the transaction capacity is smaller than the batch size, the Sink or Source cannot complete a batch within a single transaction and an error occurs.

## References

-   [aliyun-log-flume plugin on GitHub](https://github.com/aliyun/aliyun-log-flume)
    
-   [Apache Flume User Guide](https://flume.apache.org/FlumeUserGuide.html)
    
-   [SLS Endpoints](/help/en/sls/developer-reference/api-sls-2020-12-30-endpoint)
    
-   [Obtain an AccessKey pair](/help/en/sls/developer-reference/access-key)
