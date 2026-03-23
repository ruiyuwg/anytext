This topic describes how to use the Object Storage Service (OSS) connector.

Alibaba Cloud [Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss#concept-ybr-fg1-tdb) is a secure, cost-effective, and highly reliable cloud storage service for storing large amounts of data. It provides 99.9999999999% (twelve 9s) data durability and 99.995% data availability. OSS offers multiple storage classes to help you optimize storage costs.

**Category**

**Details**

Supported types

Source and sink tables

Execution modes

Batch and stream modes

Data formats

Orc, Parquet, Avro, Csv, JSON, and Raw

Specific monitoring metrics

None

API types

DataStream and SQL

Supports updating or deleting data in sink tables

You can only insert data. You cannot update or delete data in sink tables.

## Limits

-   **General**
    
    -   Only Ververica Runtime (VVR) 11 and later versions support reading compressed files, such as GZIP, BZIP2, XZ, and DEFLATE, from OSS. VVR 8 cannot process compressed files correctly.
        
    -   VVR versions earlier than 8.0.6 only support reading data from and writing data to OSS buckets that belong to the same account. To access data across accounts, you can use VVR 8.0.6 or a later version and configure bucket authentication. For more information, see [Configure bucket authentication](#0f6c7e6d18yvu).
        
    -   Incremental reading of new partitions is not supported.
        
-   **For sink tables only**
    
    When writing data to OSS, row-store formats such as Avro, CSV, JSON, and Raw are not supported. For more information, see [FLINK-30635](https://issues.apache.org/jira/browse/FLINK-30635).
    

## Syntax

```
CREATE TABLE OssTable (
  column_name1 INT,
  column_name2 STRING,
  ...
  datetime STRING,
  `hour` STRING
) PARTITIONED BY (datetime, `hour`) WITH (
  'connector' = 'filesystem',
  'path' = 'oss://<bucket>/path',
  'format' = '...'
);
```

## Metadata columns

You can read metadata columns in a source table to retrieve metadata about the OSS data. For example, if you define the metadata column `file.path` in an OSS source table, the value of this column is the path of the file that contains the row. The following example shows how to use metadata columns.

```
CREATE TABLE MyUserTableWithFilepath (
  column_name1 INT,
  column_name2 STRING,
  `file.path` STRING NOT NULL METADATA
) WITH (
  'connector' = 'filesystem',
  'path' = 'oss://<bucket>/path',
  'format' = 'json'
)
```

The following table lists the metadata columns that are supported by OSS source tables.

**Key**

**Data type**

**Description**

file.path

STRING NOT NULL

The path of the file that contains the row.

file.name

STRING NOT NULL

The name of the file that contains the row. This is the last element of the file path.

file.size

BIGINT NOT NULL

The size of the file that contains the row, in bytes.

file.modification-time

TIMESTAMP\_LTZ(3) NOT NULL

The modification time of the file that contains the row.

## WITH parameters

-   General
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    connector
    
    The type of table.
    
    String
    
    Yes
    
    None
    
    The value must be `filesystem`.
    
    path
    
    The file system path.
    
    String
    
    Yes
    
    None
    
    The path must be in a URI format, such as `oss://my_bucket/my_path`.
    
    **Note**
    
    For VVR 8.0.6 and later, after you set this parameter, you must also configure bucket authentication to read data from and write data to the specified file system path. For more information, see [Configure bucket authentication](#8134a05cc8fbf).
    
    format
    
    The file format.
    
    String
    
    Yes
    
    None
    
    Valid values:
    
    -   csv
        
    -   json
        
    -   avro
        
    -   parquet
        
    -   orc
        
    -   raw
        
    
-   Specific to source tables
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    source.monitor-interval
    
    The interval to monitor for new files. The value must be greater than 0.
    
    Duration
    
    No
    
    None
    
    If you do not set this parameter, the specified path is scanned only once, and the source is bounded.
    
    Each file is identified by its path and processed once.
    
    The processed files are stored in the state for the lifecycle of the source. The state is saved during checkpoints and savepoints. A shorter interval allows for faster discovery of new files but results in more frequent scans of the file system or object store.
    
-   Specific to sink tables
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Notes**
    
    partition.default-name
    
    The name for a partition when the partition field is NULL or an empty string.
    
    String
    
    No
    
    \_DEFAULT\_PARTITION\_\_
    
    None.
    
    sink.rolling-policy.file-size
    
    The maximum size of a file before it is rolled.
    
    MemorySize
    
    No
    
    128 MB
    
    Data written to a directory is split into part files. Each subtask of the sink that receives data for a partition creates at least one part file for that partition. Based on the rolling policy, the current in-progress part file is closed, and a new one is created. The policy rolls part files based on their size and the maximum time they can remain open.
    
    **Note**
    
    For column-store formats:
    
    A file is always rolled during a checkpoint, even if it does not meet the rolling policy criteria.
    
    A file is rolled when it meets the policy criteria or when a checkpoint occurs.
    
    For row-store formats, a file is rolled only when it meets the rolling policy criteria.
    
    sink.rolling-policy.rollover-interval
    
    The maximum time a part file can remain open before being rolled.
    
    Duration
    
    No
    
    30min
    
    The check frequency is controlled by the sink.rolling-policy.check-interval property.
    
    sink.rolling-policy.check-interval
    
    The interval to check for the time-based rolling policy.
    
    Duration
    
    No
    
    1min
    
    This property controls how often to check whether a file should be rolled based on the sink.rolling-policy.rollover-interval property.
    
    auto-compaction
    
    Whether to enable automatic compaction for a streaming sink table. Data is first written to temporary files. After a checkpoint is complete, the temporary files from that checkpoint are merged. Temporary files are not visible before they are merged.
    
    Boolean
    
    No
    
    false
    
    If you enable file compaction, small files are merged into larger files based on the target file size. Note the following when you use file compaction in a production environment:
    
    -   Only files within a checkpoint are merged. At least one file is generated for each checkpoint.
        
    -   Files are not visible before compaction. The data visibility latency is the `checkpoint interval + compaction duration`.
        
    -   Long compaction times can cause backpressure and extend the time required for checkpoints.
        
    
    compaction.file-size
    
    The target size for a compacted file.
    
    MemorySize
    
    No
    
    128 MB
    
    The default value is the same as the rolling file size specified by sink.rolling-policy.file-size.
    
    sink.partition-commit.trigger
    
    The type of trigger to commit a partition.
    
    String
    
    No
    
    process-time
    
    For writing to partitioned tables, Flink provides two types of partition commit triggers:
    
    -   process-time: The partition commit trigger is based on the partition creation time and the current system time. It does not require a partition time extractor or a watermark generator. A partition is committed immediately when the current system time exceeds the sum of the partition creation system time and the value of sink.partition-commit.delay. This trigger is more general but less precise. For example, data latency or failures can lead to premature partition commits.
        
    -   partition-time: This trigger is based on the extracted partition time and requires watermark generation. The job must support watermark generation, and partitions are created based on time, such as hourly or daily. A partition is committed immediately when the watermark exceeds the sum of the partition creation system time and the value of sink.partition-commit.delay.
        
    
    sink.partition-commit.delay
    
    The maximum delay before a partition is committed. This means a partition will not be committed before this delay has passed.
    
    Duration
    
    No
    
    0s
    
    -   If partitions are created daily, you can set this to `1 d`.
        
    -   If partitions are created hourly, set this to `1 h`.
        
    
    sink.partition-commit.watermark-time-zone
    
    The time zone used to parse a LONG watermark into a TIMESTAMP. The resulting TIMESTAMP is compared with the partition time to determine whether the partition should be committed.
    
    String
    
    No
    
    UTC
    
    This parameter is valid only when sink.partition-commit.trigger is set to \`partition-time\`.
    
    -   If this is not set correctly, for example, if the source rowtime is defined on a TIMESTAMP\_LTZ column and this property is not set, you might see the partition commit only after several hours. The default value is UTC, which means the watermark is defined on a TIMESTAMP column or no watermark is defined.
        
    -   If the watermark is defined on a TIMESTAMP\_LTZ column, the watermark time zone must be the session time zone. Valid values for this property are either a full time zone name (such as 'America/Los\_Angeles') or a custom time zone (such as 'GMT-08:00').
        
    
    partition.time-extractor.kind
    
    The time extractor that extracts time from partition fields.
    
    String
    
    No
    
    default
    
    Valid values:
    
    -   default: By default, you can configure a timestamp pattern or formatter.
        
    -   custom: You must specify an extractor class.
        
    
    partition.time-extractor.class
    
    The extractor class that implements the PartitionTimeExtractor interface.
    
    String
    
    No
    
    None
    
    None.
    
    partition.time-extractor.timestamp-pattern
    
    The default construction method that lets you use partition fields to obtain a valid timestamp pattern.
    
    String
    
    No
    
    None
    
    By default, the first field is extracted using the `yyyy-MM-dd hh:mm:ss` pattern.
    
    -   To extract a timestamp from a partition field 'dt', you can configure it as: \`$dt\`.
        
    -   To extract a timestamp from multiple partition fields, such as year, month, day, and hour, you can configure it as: `$year-$month-$day $hour:00:00`.
        
    -   To extract a timestamp from two partition fields, dt and hour, you can configure it as: `$dt $hour:00:00`.
        
    
    partition.time-extractor.timestamp-formatter
    
    The formatter that converts a partition timestamp string value to a timestamp. The partition timestamp string value is expressed by the partition.time-extractor.timestamp-pattern property.
    
    String
    
    No
    
    yyyy-MM-dd HH:mm:ss
    
    For example, if a partition timestamp is extracted from multiple partition fields, such as year, month, and day, you can set the partition.time-extractor.timestamp-pattern property to `$year$month$day` and the partition.time-extractor.timestamp-formatter property to \`yyyyMMdd\`. The default formatter is `yyyy-MM-dd HH:mm:ss`. This timestamp formatter is compatible with Java's [DateTimeFormatter](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html).
    
    sink.partition-commit.policy.kind
    
    The type of partition commit policy.
    
    String
    
    No
    
    None
    
    A partition commit policy notifies downstream consumers that a partition has finished writing and is ready to be read. Valid values:
    
    -   success-file: Adds a \`\_success\` file to the directory.
        
    -   custom: Creates a commit policy using a specified class. You can specify multiple commit policies at the same time.
        
    
    sink.partition-commit.policy.class
    
    The partition commit policy class that implements the PartitionCommitPolicy interface.
    
    String
    
    No
    
    None
    
    This class can be used only with the \`custom\` commit policy.
    
    sink.partition-commit.success-file.name
    
    The name of the file to use with the \`success-file\` partition commit policy.
    
    String
    
    No
    
    \_SUCCESS
    
    None.
    
    sink.parallelism
    
    The parallelism for writing files to the external file system.
    
    Integer
    
    No
    
    None
    
    By default, the sink parallelism is the same as the parallelism of the upstream chained operator. If you configure a different parallelism, the file writing operator uses the specified sink parallelism. If file compaction is enabled, the compaction operator also uses the specified sink parallelism.
    
    **Note**
    
    This value must be greater than 0. Otherwise, an exception is thrown.
    

## **Configure bucket authentication**

**Note**

Only VVR 8.0.6 and later versions support configuring bucket authentication.

After you specify the file system path, you must also configure bucket authentication to read data from and write data to the specified path. To configure bucket authentication, add the following code to the **Additional Configurations** section on the **Parameters** tab of the **Deployment Details** page in the real-time computing development console.

```
fs.oss.bucket.<bucketName>.accessKeyId: xxxx
fs.oss.bucket.<bucketName>.accessKeySecret: xxxx
```

The following table describes the parameters.

**Configuration item**

**Description**

fs.oss.bucket.<bucketName>.accessKeyId

Parameter description:

-   <bucketName>: Replace with the bucket name you entered for the file system path parameter.
    
-   Use an existing AccessKey or create a new one. For more information, see [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair).
    
    **Note**
    
    To reduce the risk of an AccessKey secret leak, the **AccessKey secret** is shown only once when you create it and cannot be viewed later. Keep it secure.
    

fs.oss.bucket.<bucketName>.accessKeySecret

## Write to OSS-HDFS

First, add the following configuration to the **Additional Configurations** section on the **Parameters** tab of the **Deployment Details** page in the real-time computing development console.

```
fs.oss.jindo.buckets: xxx
fs.oss.jindo.accessKeyId: xxx
fs.oss.jindo.accessKeySecret: xxx
```

The following table describes the parameters.

**Configuration item**

**Description**

fs.oss.jindo.buckets

The names of the buckets in the OSS-HDFS service to write to. You can configure multiple buckets, separated by semicolons. When Flink writes to an OSS path, if the corresponding bucket is included in \`fs.oss.jindo.buckets\`, the data is written to the OSS-HDFS service.

fs.oss.jindo.accessKeyId

Use an existing AccessKey or create a new one. For more information, see [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair).

**Note**

To reduce the risk of an AccessKey secret leak, the **AccessKey secret** is shown only once when you create it and cannot be viewed later. Keep it secure.

fs.oss.jindo.accessKeySecret

You also need to configure the OSS-HDFS endpoint. You can configure the OSS-HDFS endpoint in two ways:

#### **Parameter configuration**

You can add the following configuration to the **Additional Configurations** section on the **Parameters** tab of the **Deployment Details** page in the **real-time computing development console**.

```
fs.oss.jindo.endpoint: xxx
```

#### **Path configuration**

You can configure the OSS-HDFS endpoint in the OSS path.

```
oss://<user-defined-oss-hdfs-bucket.oss-hdfs-endpoint>/<user-defined-dir>
```

-   `user-defined-oss-hdfs-bucket`: The name of the bucket.
    
-   `oss-hdfs-endpoint`: The OSS-HDFS endpoint.
    
-   The `fs.oss.jindo.buckets` configuration item must include <user-defined-oss-hdfs-bucket.oss-hdfs-endpoint>.
    

For example, if the bucket name is \`jindo-test\` and the endpoint is \`cn-beijing.oss-dls.aliyuncs.com\`, the OSS path must be `oss://jindo-test.cn-beijing.oss-dls.aliyuncs.com/<user-defined-dir>`, and the `fs.oss.jindo.buckets` configuration item must include `jindo-test.cn-beijing.oss-dls.aliyuncs.com`.

```
# OSS path 
oss://jindo-test.cn-beijing.oss-dls.aliyuncs.com/<user-defined-dir>
# Additional Configurations 
fs.oss.jindo.buckets: jindo-test,jindo-test.cn-beijing.oss-dls.aliyuncs.com
```

**Note**

When writing to an external HDFS file, if the file path is `hdfs://**`, you can also add the following configuration to specify or switch the access username.

You can add the following configuration to the **Additional Configurations** section on the **Parameters** tab of the **Deployment Details** page in the real-time computing development console.

```
containerized.taskmanager.env.HADOOP_USER_NAME: hdfs
containerized.master.env.HADOOP_USER_NAME: hdfs
```

## Examples

-   Source table
    
    ```
    CREATE TEMPORARY TABLE fs_table_source (
      `id` INT,
      `name` VARCHAR
    ) WITH (
      'connector'='filesystem',
      'path'='oss://<bucket>/path',
      'format'='parquet'
    );
    
    CREATE TEMPORARY TABLE blackhole_sink(
      `id` INT,
      `name` VARCHAR
    ) with (
      'connector' = 'blackhole'
    );
    
    INSERT INTO blackhole_sink SELECT * FROM fs_table_source ;
    ```
    
-   Sink table
    
    -   Write to a partitioned table
        
        ```
        CREATE TABLE datagen_source (
          user_id STRING,
          order_amount DOUBLE,
          ts BIGINT, -- Time in milliseconds
          ts_ltz AS TO_TIMESTAMP_LTZ(ts, 3),
          WATERMARK FOR ts_ltz AS ts_ltz - INTERVAL '5' SECOND -- Define a watermark on a TIMESTAMP_LTZ column
        ) WITH (
          'connector' = 'datagen'
        );
        
        CREATE TEMPORARY TABLE fs_table_sink (
          user_id STRING,
          order_amount DOUBLE,
          dt STRING,
          `hour` STRING
        ) PARTITIONED BY (dt, `hour`) WITH (
          'connector'='filesystem',
          'path'='oss://<bucket>/path',
          'format'='parquet',
          'partition.time-extractor.timestamp-pattern'='$dt $hour:00:00',
          'sink.partition-commit.delay'='1 h',
          'sink.partition-commit.trigger'='partition-time',
          'sink.partition-commit.watermark-time-zone'='Asia/Shanghai', -- Assume the user-configured time zone is 'Asia/Shanghai'
          'sink.partition-commit.policy.kind'='success-file'
        );
        
        -- Streaming SQL to insert into the file system table
        INSERT INTO fs_table_sink 
        SELECT 
          user_id, 
          order_amount, 
          DATE_FORMAT(ts_ltz, 'yyyy-MM-dd'),
          DATE_FORMAT(ts_ltz, 'HH') 
        FROM datagen_source;
        ```
        
    -   Write to a non-partitioned table
        
        ```
        CREATE TABLE datagen_source (
          user_id STRING,
          order_amount DOUBLE
        ) WITH (
          'connector' = 'datagen'
        );
        
        CREATE TEMPORARY TABLE fs_table_sink (
          user_id STRING,
          order_amount DOUBLE
        ) WITH (
          'connector'='filesystem',
          'path'='oss://<bucket>/path',
          'format'='parquet'
        );
        
        INSERT INTO fs_table_sink SELECT * FROM datagen_source;
        ```
        

## DataStream API

**Important**

To read and write data using the DataStream API, you must use the corresponding DataStream connector to connect to Flink. For more information about setting up the DataStream connector, see [Use a DataStream connector](/help/en/flink/realtime-flink/developer-reference/settings-of-datastream-connectors#main-2309395).

The following code shows an example of how to use the DataStream API to write to OSS and OSS-HDFS.

```
String outputPath = "oss://<bucket>/path"
final StreamingFileSink<Row> sink =
                StreamingFileSink.forRowFormat(
                                new Path(outputPath),
                                (Encoder<Row>)
                                        (element, stream) -> {
                                            out.println(element.toString());
                                        })
                        .withRollingPolicy(OnCheckpointRollingPolicy.build())
                        .build();

outputStream.addSink(sink);
```

To write to OSS-HDFS, you must also configure the related OSS-HDFS parameters in the **Additional Configurations** section on the **Parameters** tab of the **Deployment Details** page in the **real-time computing development console**. For more information, see [Write to OSS-HDFS](#section-2xi-bfe-nyq).

## **References**

-   For more information about the connectors that Flink supports, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors).
    
-   For more information about how to use the Tablestore (OTS) connector, see [Tablestore (OTS)](/help/en/flink/realtime-flink/developer-reference/tablestore-connector).
    
-   For more information about how to use the Paimon connector for streaming data lakehouses, see [Paimon for streaming data lakehouses](/help/en/flink/realtime-flink/developer-reference/apache-paimon-connector).
