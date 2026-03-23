This topic describes how to use the MaxCompute connector.

## Background

[MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute) (previously known as ODPS) is a fast and fully managed computing platform for large-scale data warehousing. MaxCompute can process exabytes of data. It provides solutions for storing and computing mass structured data in data warehouses and provides analytics and modeling services.

The following table describes the capabilities supported by the MaxCompute connector.

**Item**

**Description**

Supported type

Source table, dimension table, and sink table

Running mode

Streaming mode and batch mode

Data format

N/A

Metric

**Metric**

-   Source
    
    numRecordsIn
    
    numRecordsInPerSecond
    
    numBytesIn
    
    numBytesInPerSecond
    
-   Sink
    
    numRecordsOut
    
    numRecordsOutPerSecond
    
    numBytesOut
    
    numBytesOutPerSecond
    
-   Dimension table
    
    dim.odps.cacheSize
    

**Note**

For more information, see [Monitoring metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

DataStream API and SQL API

Data update or deletion in a sink table

If MaxCompute Batch Tunnel or MaxCompute Streaming Tunnel is used, data can only be inserted into a sink table. If MaxCompute Upsert Tunnel is used, data in a sink table can be updated or deleted and data can be inserted into a sink table.

## Prerequisites

A MaxCompute table is created. For more information about how to create a MaxCompute table, see [Create a table](/help/en/maxcompute/getting-started/create-tables-1#concept-rkk-kcy-5db).

## Limits

-   The MaxCompute connector supports only the at-least-once semantics.
    
    **Note**
    
    The at-least-once semantics is used to prevent data losses. In specific cases, duplicate data may be written to MaxCompute. Duplicate data may be generated based on the tunnel that you use. For more information about MaxCompute Tunnel, see the "How do I select a data tunnel?" section of the [FAQ about upstream and downstream storage](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-m2p-g6f-g4s) topic.
    
-   By default, a source operates in full mode reads data only from the partition specified by the `partition` option. Once all data from the partition is read, the job finishes and does not monitor for new partitions.
    
    To continuously monitor for new partitions, create an incremental source by specifying the `startPartition` option in the WITH clause.
    
    **Note**
    
    -   Each time a dimension table is updated, the dimension table checks for the latest partition.
        
    -   After the source table starts to run, it does not read the data that is newly added to a partition. We recommend that you run a deployment when the partition contains complete data.
        
    

## SQL

The MaxCompute connector can be used as a source, dimension, or sink table in SQL-based jobs.

## Syntax

```
CREATE TEMPORARY TABLE odps_source(
  id INT,
  user_name VARCHAR,
  content VARCHAR
) WITH (
  'connector' = 'odps', 
  'endpoint' = '<yourEndpoint>',
  'project' = '<yourProjectName>',
  'schemaName' = '<yourSchemaName>',
  'tableName' = '<yourTableName>',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}',
  'partition' = 'ds=2018****'
);
```

## Connector options

-   General
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The table type.
    
    STRING
    
    Yes
    
    No default value
    
    Set the value to odps.
    
    endpoint
    
    The endpoint of MaxCompute.
    
    STRING
    
    Yes
    
    No default value
    
    For more information, see [Endpoint](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
    
    tunnelEndpoint
    
    The endpoint of MaxCompute Tunnel.
    
    STRING
    
    No
    
    No default value
    
    For more information, see [Endpoint](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
    
    **Note**
    
    If this option is not specified, MaxCompute allocates tunnel connections based on the Server Load Balancer (SLB) service.
    
    project
    
    The name of the MaxCompute project.
    
    STRING
    
    Yes
    
    No default value
    
    N/A.
    
    schemaName
    
    The name of the MaxCompute schema.
    
    STRING
    
    No
    
    No default value
    
    This option is required only when the MaxCompute schema feature is enabled. In this case, you must set this option to the name of the MaxCompute table's schema. For more information, see [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations).
    
    **Note**
    
    Only VVR 8.0.6 or later supports this option.
    
    tableName
    
    The name of the MaxCompute table.
    
    STRING
    
    Yes
    
    No default value
    
    N/A.
    
    accessId
    
    The AccessKey ID that is used to access MaxCompute.
    
    STRING
    
    Yes
    
    No default value
    
    For more information, see [How do I view information about the AccessKey ID and AccessKey secret of the account?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
    
    **Important**
    
    To protect your AccessKey pairs, we recommend that you configure the AccessKey ID by using variables. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).
    
    accessKey
    
    The AccessKey secret that is used to access MaxCompute.
    
    STRING
    
    Yes
    
    No default value
    
    partition
    
    The name of the partition in the MaxCompute table.
    
    STRING
    
    No
    
    No default value
    
    You do not need to specify this option for a non-partitioned MaxCompute table or an incremental source.
    
    **Note**
    
    For more information about how to specify the partition option for a partitioned MaxCompute table, see the "How do I configure the partition option when data is read from or written to partitions?" section of the [FAQ about upstream and downstream storage](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-pe0-8xd-cfo) topic.
    
    compressAlgorithm
    
    The compression algorithm that is used by MaxCompute Tunnel.
    
    STRING
    
    No
    
    SNAPPY
    
    Valid values:
    
    -   RAW (no compression)
        
    -   ZLIB
        
    -   SNAPPY
        
        Compared with ZLIB, SNAPPY can significantly improve the throughput. In test scenarios, the throughput is increased by about 50%.
        
    
    quotaName
    
    The name of the quota for the exclusive Tunnel resource groups of MaxCompute.
    
    STRING
    
    No
    
    No default value
    
    You can specify this option to use the exclusive Tunnel resource groups of MaxCompute.
    
    **Important**
    
    -   Only VVR 8.0.3 or later supports this option.
        
    -   If you specify this option, you must delete the tunnelEndpoint option. Otherwise, the tunnel that is specified by the tunnelEndpoint option is used.
        
    
-   Source-specific
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    maxPartitionCount
    
    The maximum number of partitions from which data can be read.
    
    INTEGER
    
    No
    
    100
    
    If the number of partitions from which data is read exceeds the value of this option, this error message appears: `"The number of matched partitions exceeds the default limit"`.
    
    **Important**
    
    Reading from an excessive number of partitions can overload MaxCompute and slow job startup. If necessary for your business needs, manually adjust this option's value.
    
    useArrow
    
    Specifies whether to use the Arrow format to read data.
    
    BOOLEAN
    
    No
    
    false
    
    The Arrow format can be used to call the storage API operation of MaxCompute.
    
    **Important**
    
    -   This option takes effect only in a batch deployment.
        
    -   Only VVR 8.0.8 or later supports this option.
        
    
    splitSize
    
    The size of data that can be pulled at a time when the Arrow format is used to read data.
    
    MEMORYSIZE
    
    No
    
    256 MB
    
    Only VVR 8.0.8 or later supports this option.
    
    **Important**
    
    This option takes effect only in a batch deployment.
    
    compressCodec
    
    The compression algorithm that is used when the Arrow format is used to read data.
    
    STRING
    
    No
    
    ""
    
    Valid values:
    
    -   "" (no compression)
        
    -   ZSTD
        
    -   LZ4\_FRAME
        
    
    Compared with no compression, the throughput can be improved if you specify a compression algorithm.
    
    **Important**
    
    -   This option takes effect only in a batch deployment.
        
    -   Only VVR 8.0.8 or later supports this option.
        
    
    dynamicLoadBalance
    
    Specifies whether to enable dynamic allocation of shards.
    
    BOOLEAN
    
    No
    
    false
    
    Valid values:
    
    -   true
        
    -   false
        
    
    Dynamic allocation of shards can improve the processing performance of different operators of Realtime Compute for Apache Flink and reduce the overall time required for reading from MaxCompute. However, this may cause data skew because the total amount of data read by different operators is inconsistent.
    
    **Important**
    
    -   This option takes effect only in a batch deployment.
        
    -   Only VVR 8.0.8 or later supports this option.
        
    
-   Options specific to incremental MaxCompute source tables
    
    The incremental table source monitors for new partitions by intermittently polling the MaxCompute server to obtain all partition information. Before the source begins to read data from new partitions, data writing in the partitions must be complete. For more information, see the "What do I do if an incremental MaxCompute source table detects a new partition when data is still being written to the partition?" section of the [FAQ about upstream and downstream storage](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-f52-hsr-zyp) topic. You can configure the startPartition option to specify the start partition from which data is read. Only data in the partitions whose **alphabetical order** is greater than or equal to the alphabetical order of the partition that is specified by the startPartition option is read. For example, the alphabetical order of the partition `year=2023,month=10` is less than the alphabetical order of the partition `year=2023,month=9`. In this case, you can add a zero before the number of the month to the name of the partition that is declared in the code to ensure that the alphabetical order of the partition is valid. This way, you can change the value of the partition option from year=2023,month=9 to `year=2023,month=09`.
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    startPartition
    
    The start partition from which incremental data is read.
    
    STRING
    
    Yes
    
    No default value
    
    -   If you specify this option, the incremental source is used. As a result, the partition option is ignored.
        
    -   If the source table is a multi-level partitioned table, you must configure the value of each partition column in descending order based on partition levels.
        
    
    **Note**
    
    For more information about how to specify the startPartition option, see the "How do I configure the startPartition option for an incremental MaxCompute source table?" section of the [FAQ about upstream and downstream storage](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-gk6-tax-m9s) topic.
    
    subscribeIntervalInSec
    
    The interval at which MaxCompute is polled to obtain the information about partitions.
    
    INTEGER
    
    No
    
    30
    
    Unit: seconds.
    
    modifiedTableOperation
    
    The operation that is performed when data in a partition is modified during partition reading.
    
    Enum (NONE, SKIP)
    
    No
    
    NONE
    
    Download sessions are saved in checkpoints. Each time you resume a session from a checkpoint, Realtime Compute for Apache Flink attempts to resume the reading progress from the session. However, the session is unavailable because data in the partition is modified. In this case, the deployment is repeatedly restarted. To resolve this issue, you can specify this option. Valid values:
    
    -   NONE: If you set this option to NONE, you must change the value of the startPartition option to make the alphabetical order of the partition that is specified by the startPartition option greater than the alphabetical order of the unavailable partition and start the deployment without states.
        
    -   SKIP: If you do not want to start the deployment without states, you can set this option to SKIP. In this case, Realtime Compute for Apache Flink skips the unavailable partition when it attempts to resume the session from the checkpoint.
        
    
    **Important**
    
    -   Only VVR 8.0.3 or later supports this option.
        
    -   If you set this option to NONE or SKIP, the data that is read from the partition in which data is modified is retained, and the data that is not read is ignored.
        
    
-   Sink-specific
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    useStreamTunnel
    
    Specifies whether to use MaxCompute Streaming Tunnel to upload data.
    
    BOOLEAN
    
    No
    
    false
    
    Valid values:
    
    -   true: MaxCompute Streaming Tunnel is used to upload data.
        
    -   false: MaxCompute Batch Tunnel is used to upload data.
        
    
    **Note**
    
    For more information about how to select a tunnel, see the "How do I select a data tunnel?" section of the [FAQ about upstream and downstream storage](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-m2p-g6f-g4s) topic.
    
    flushIntervalMs
    
    The interval at which the flush operation is performed in the buffer of a writer in MaxCompute Tunnel.
    
    LONG
    
    No
    
    30000 (30 seconds)
    
    Data is buffered and flushed in batches at the interval specified by `flushIntervalMs`.
    
    -   Streaming Tunnel: Flushed data becomes immediately available in the destination MaxCompute table.
        
    -   Batch Tunnel: Flushed data is only available after the checkpointing operation is complete. We recommend that you set this option to 0 to disable the scheduled flushing feature.
        
    
    Unit: milliseconds.
    
    **Note**
    
    This option can be used together with the `batchSize` option. The flush operation is triggered when the condition that is specified by the `batchSize` option or the `flushIntervalMs` option is met.
    
    batchSize
    
    The buffer size of the MaxCompute Tunnel.
    
    LONG
    
    No
    
    67108864 (64 MB)
    
    The MaxCompute sink inserts data into the buffer. Then, the MaxCompute sink writes the data in the buffer to the destination MaxCompute table when the size of the buffer data exceeds the value that is specified by the batchSize option.
    
    Unit: bytes.
    
    **Note**
    
    This option can be used together with the flushIntervalMs option. The flush operation is triggered when the condition that is specified by the batchSize option or the flushIntervalMs option is met.
    
    numFlushThreads
    
    The number of threads that are used to flush data in the buffer of a writer in MaxCompute Tunnel.
    
    INTEGER
    
    No
    
    1
    
    Each MaxCompute sink creates the number of threads that is specified by the numFlushThreads option to flush data. If the value of this option is greater than 1, the data in different partitions can be flushed at the same time. This improves the flush operation efficiency.
    
    slotNum
    
    The number of Tunnel slots used by MaxCompute to receive data from Flink.
    
    INTEGER
    
    No
    
    0
    
    For information about the restriction on slot numbers, see [Overview of the data transmission service](/help/en/maxcompute/user-guide/overview-of-dts) in the MaxCompute documentation.
    
    dynamicPartitionLimit
    
    The maximum number of dynamic partitions to which data can be written.
    
    INTEGER
    
    No
    
    100
    
    If the number of dynamic partitions to which data is written from the sink between two checkpoints exceeds the value of the dynamicPartitionLimit option, this error message appears: `"Too many dynamic partitions"`.
    
    **Important**
    
    If data is written to a large number of partitions of a MaxCompute table, the workload on the MaxCompute service is high, slowing down checkpointing and flushing. To prevent this issue, you need to check whether data needs to be written to a large number of partitions. If your business requires data to be written to a large number of partitions, manually increase the value of the dynamicPartitionLimit option.
    
    retryTimes
    
    The maximum number of retries that can be performed for a request on the MaxCompute server.
    
    INTEGER
    
    No
    
    3
    
    The MaxCompute service may be unavailable for a short period of time when you create a session, submit a session, or data is flushed. If the MaxCompute service becomes unavailable, the MaxCompute server is requested based on the configuration of this option.
    
    sleepMillis
    
    The retry interval.
    
    INTEGER
    
    No
    
    1000
    
    Unit: milliseconds.
    
    enableUpsert
    
    Specifies whether to use MaxCompute Upsert Tunnel to upload data.
    
    BOOLEAN
    
    No
    
    false
    
    Valid values:
    
    -   true: MaxCompute Upsert Tunnel is used to process INSERT, UPDATE\_AFTER, and DELETE data in Realtime Compute for Apache Flink.
        
    -   false: MaxCompute Batch Tunnel or MaxCompute Streaming Tunnel that is specified by the [useStreamTunnel](#entry-ecd-wro-7x6) option is used to process INSERT and UPDATE\_AFTER data in Realtime Compute for Apache Flink.
        
    
    **Important**
    
    -   If an issue such as an error, a deployment failure, or a long-time processing fault occurs when the MaxCompute sink commits a session in upsert mode, we recommend that you set the Parallelism option of sink operators to a value that is less than or equal to 10.
        
    -   Only VVR 8.0.6 or later supports this option.
        
    
    upsertAsyncCommit
    
    Specifies whether to use the asynchronous mode when a MaxCompute sink commits a session in upsert mode.
    
    BOOLEAN
    
    No
    
    false
    
    Valid values:
    
    -   true: The asynchronous mode is used. If you use the asynchronous mode, the time that is consumed to commit the session is reduced but the data that is written after the session is committed cannot be immediately queried.
        
    -   false: The synchronous mode is used by default. When the MaxCompute sink commits the session, the system waits until the server processes the session.
        
    
    **Note**
    
    Only VVR 8.0.6 or later supports this option.
    
    upsertCommitTimeoutMs
    
    The timeout period for which a MaxCompute sink commits a session in upsert mode.
    
    INTEGER
    
    No
    
    120000
    
    (120 seconds)
    
    Unit: milliseconds.
    
    **Note**
    
    Only VVR 8.0.6 or later supports this option.
    
    sink.operation
    
    The write operation mode for a Delta table.
    
    STRING
    
    No
    
    insert
    
    Valid values:
    
    -   insert: Data is written to the table in append mode.
        
    -   upsert: Data is updated.
        
    
    **Note**
    
    Only VVR 8.0.10 or later supports this option.
    
    sink.parallelism
    
    The degree of parallelism when data is written to a Delta table.
    
    INTEGER
    
    No
    
    None
    
    -   The degree of data writing parallelism. If you do not configure this option, the upstream data parallelism is used by default.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    **Important**
    
    Make sure that the value of the write.bucket.num option is an integral multiple of the value of the sink.parallelism option. This helps ensure the optimal write performance and efficiently saves memory of the sink node.
    
    sink.file-cached.enable
    
    Specifies whether to enable the file cache mode when data is written to dynamic partitions of a Delta table.
    
    BOOLEAN
    
    No
    
    false
    
    Valid values:
    
    -   true: The file cache mode is enabled.
        
    -   false: The file cache mode is disabled.
        
    
    If you enable the file cache mode, the number of small files that are written to the server is reduced. However, a higher writing latency exists. We recommend that you enable the file cache mode when the sink table has a high degree of parallelism.
    
    **Note**
    
    Only VVR 8.0.10 or later supports this option.
    
    sink.file-cached.writer.num
    
    The number of threads that are used to concurrently upload data in a task in file cache mode.
    
    INTEGER
    
    No
    
    16
    
    -   This option takes effect only if the sink.file-cached.enable option is set to true.
        
    -   We recommend that you do not increase the value of this option to a large value. If data is written to a large number of partitions at the same time, an out of memory (OOM) error may occur.
        
        **Note**
        
        Only VVR 8.0.10 or later supports this option.
        
    
    sink.bucket.check-interval
    
    The interval at which the file size is checked in file cache mode. Unit: milliseconds.
    
    INTEGER
    
    No
    
    60000
    
    -   This option takes effect only if the sink.file-cached.enable option is set to true.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    sink.file-cached.rolling.max-size
    
    The maximum value of a single cached file in file cache mode.
    
    MEMORYSIZE
    
    No
    
    16 MB
    
    -   This option takes effect only if the sink.file-cached.enable option is set to true.
        
    -   If the file size exceeds the value of this option, the file data is uploaded to the server.
        
        **Note**
        
        Only VVR 8.0.10 or later supports this option.
        
    
    sink.file-cached.memory
    
    The maximum size of off-heap memory used to write data to files in file cache mode.
    
    MEMORYSIZE
    
    No
    
    64 MB
    
    -   This option takes effect only if the sink.file-cached.enable option is set to true.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    sink.file-cached.memory.segment-size
    
    The size of the buffer used to write data to files in file cache mode.
    
    MEMORYSIZE
    
    No
    
    128 KB
    
    -   This option takes effect only if the sink.file-cached.enable option is set to true.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    sink.file-cached.flush.always
    
    Specifies whether the cache is used for writing data to files in file cache mode.
    
    BOOLEAN
    
    No
    
    true
    
    -   This option takes effect only if the sink.file-cached.enable option is set to true.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    sink.file-cached.write.max-retries
    
    The number of retries for uploading data in file cache mode.
    
    INTEGER
    
    No
    
    3
    
    -   This option takes effect only if the sink.file-cached.enable option is set to true.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    upsert.writer.max-retries
    
    The maximum number of retries for writing data to a bucket in an Upsert Writer session.
    
    INTEGER
    
    No
    
    3
    
    Only VVR 8.0.10 or later supports this option.
    
    upsert.writer.buffer-size
    
    The buffer size of an Upsert Writer session in Realtime Compute for Apache Flink.
    
    MEMORYSIZE
    
    No
    
    64 MB
    
    -   When the total buffer size of all buckets reaches the specified threshold, the system automatically updates data to the server.
        
    
    **Note**
    
    Data in an Upsert Writer session can be written to multiple buckets at the same time. We recommend that you increase the value of this option to improve write efficiency.
    
    If data is written to a large number of partitions, an OOM error may occur. To prevent this issue, you can decrease the value of this option.
    
    -   Only VVR 8.0.10 or later supports this option.
        
    
    upsert.writer.bucket.buffer-size
    
    The buffer size of a single bucket in Realtime Compute for Apache Flink.
    
    MEMORYSIZE
    
    No
    
    1 MB
    
    -   If the memory resources of the Flink server are insufficient, you can decrease the value of this option.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    upsert.write.bucket.num
    
    The number of buckets for the table to which data is written.
    
    INTEGER
    
    Yes
    
    None
    
    -   The value of this option must be the same as the value of the `write.bucket.num` option that is configured for the Delta table to which data is written.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    upsert.write.slot-num
    
    The number of Tunnel slots used in a session.
    
    INTEGER
    
    No
    
    1
    
    Only VVR 8.0.10 or later supports this option.
    
    upsert.commit.max-retries
    
    The maximum number of retries for an upsert session commit.
    
    INTEGER
    
    No
    
    3
    
    Only VVR 8.0.10 or later supports this option.
    
    upsert.commit.thread-num
    
    The degree of parallelism of upsert session commits.
    
    INTEGER
    
    No
    
    16
    
    -   We recommend that you do not increase the value of this option to a large value. If excessive upsert session commits are performed at the same time, resource consumption increases. This may cause performance issues or excessive resource consumption.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    upsert.commit.timeout
    
    The timeout period for an upsert session commit. Unit: seconds.
    
    INTEGER
    
    No
    
    600
    
    Only VVR 8.0.10 or later supports this option.
    
    upsert.flush.concurrent
    
    The maximum number of buckets to which data in a partition can be written at the same time.
    
    INTEGER
    
    No
    
    2
    
    -   A Tunnel slot is occupied each time data in a bucket is refreshed.
        
    -   Only VVR 8.0.10 or later supports this option.
        
    
    insert.commit.thread-num
    
    The degree of parallelism of commit sessions.
    
    INTEGER
    
    No
    
    16
    
    Only VVR 8.0.10 or later supports this option.
    
    insert.arrow-writer.enable
    
    Specifies whether to use the Arrow format.
    
    BOOLEAN
    
    No
    
    false
    
    Valid values:
    
    -   true: The Arrow format is used.
        
    -   false: The Arrow format is not used.
        
    
    **Note**
    
    Only VVR 8.0.10 or later supports this option.
    
    insert.arrow-writer.batch-size
    
    The maximum number of rows in a batch of Arrow-formatted data.
    
    INTEGER
    
    No
    
    512
    
    Only VVR 8.0.10 or later supports this option.
    
    insert.arrow-writer.flush-interval
    
    The interval at which a writer flushes data. Unit: milliseconds.
    
    INTEGER
    
    No
    
    100000
    
    Only VVR 8.0.10 or later supports this option.
    
    insert.writer.buffer-size
    
    The cache size for the buffered writer.
    
    MEMORYSIZE
    
    No
    
    64 MB
    
    Only VVR 8.0.10 or later supports this option.
    
    upsert.partial-column.enable
    
    Specifies whether to update only data in specific columns.
    
    BOOLEAN
    
    No
    
    false
    
    This option is only applicable to a sink table that writes data to the MaxCompute Delta Table. For more information, see [Update data in specific columns](/help/en/maxcompute/user-guide/partial-column-update) in the MaxCompute documentation.
    
    Valid values:
    
    -   true
        
    -   false
        
    
    Data update behavior depends on whether the sink has a record with the same primary key as the new data.
    
    -   If the sink table contains data with the same primary key, corresponding fields are updated based on the primary key. Specifically, specified fields are overwritten with new values if the values are not `null`.
        
    -   If the sink table does not contain a record with the same primary key, a new record will be added. New values will be inserted for specified columns while `null` will be inserted for all other columns.
        
    
    **Note**
    
    Only VVR 8.0.11 or later supports this option.
    
-   Dimension table-specific
    
    When a deployment starts, the dimension table pulls full data from a partition that is specified by the partition option. This option supports the max\_pt() function. If the cache is reloaded after the cache entries expire, data of the latest partition specified by the partition option is re-parsed. If the partition option is set to max\_two\_pt(), the dimension table can pull data from two partitions. If the partition option is not set to max\_two\_pt(), data of only one partition can be pulled.
    
    **Option**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    cache
    
    The cache policy.
    
    STRING
    
    Yes
    
    No default value
    
    You must set the cache option to `ALL` for a dimension table and explicitly declare the setting in the DDL statement. If the amount of data in a remote table is small and a large number of missing keys exist, we recommend that you set this option to ALL. The source and dimension table cannot be associated based on the ON clause.
    
    ALL: indicates that all data in the dimension table is cached. Before the system runs a deployment, the system loads all data in the dimension table to the cache. This way, the cache is searched for all subsequent queries in the dimension table. If no keys exist, the system cannot find the data record in the cache. The system reloads all data in the cache after cache entries expire.
    
    **Note**
    
    -   If the cache option is set to ALL, you must increase the memory of the join node because the system asynchronously loads data of the dimension table. We recommend that you increase the size of the memory at least four times the amount of data in the remote table. The size of the memory is related to the MaxCompute storage compression algorithm.
        
    -   If a dimension table contains a large amount of data, you can use the SHUFFLE\_HASH hint to evenly distribute the data to each subtask. For more information, see the "How do I use the SHUFFLE\_HASH hint for a dimension table?" section of the [FAQ about upstream and downstream storage](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-xfo-ot6-xlt) topic.
        
    -   If you use an ultra-large dimension table, frequent garbage collections (GCs) of Java virtual machine (JVM) may cause deployment exceptions. To resolve this issue, you can increase the memory of the node on which the dimension table is joined with another table. If the issue persists, we recommend that you convert the dimension table to a key-value dimension table that supports the least recently used (LRU) cache policy. For example, you can use an ApsaraDB for HBase dimension table as the key-value dimension table.
        
    
    cacheSize
    
    The maximum number of rows of data that can be cached.
    
    LONG
    
    No
    
    100000
    
    If the number of data records in the dimension table exceeds the value of the cacheSize option, this error message appears: `"Row count of table <table-name> partition <partition-name> exceeds maxRowCount limit"` .
    
    **Important**
    
    If a large number of data records exists in a dimension table, a large amount of JVM heap memory is consumed. In this case, the startup speed of deployments and the speed of the updates of the dimension table slow down. To prevent this issue, you need to check whether a large number of data records need to be cached. If your business requires a large number of data records to be cached in a dimension table, manually increase the value of this option.
    
    cacheTTLMs
    
    The cache timeout period.
    
    LONG
    
    No
    
    Long.MAX\_VALUE
    
    Unit: milliseconds.
    
    cacheReloadTimeBlackList
    
    The periods of time during which cache is not refreshed. The cache is not refreshed during the time periods specified by this option.
    
    STRING
    
    No
    
    No default value
    
    This option is applicable to large-scale online promotional events such as peak hours of activities. You can specify this option to prevent deployments from being unstable when the cache is refreshed. For more information about how to specify the option, see the "How do I configure the CacheReloadTimeBlackList option?" section of the [FAQ about upstream and downstream storage](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#section-823-vql-dpm) topic.
    
    maxLoadRetries
    
    The maximum number of retries that can be performed to refresh the cache. The first time that data is pulled when the deployment is started, the cache is refreshed. If the number of retries exceeds the value of this option, the deployment fails to run.
    
    INTEGER
    
    No
    
    10
    
    N/A.
    

## **Data type mappings**

For more information about the data types that are supported by MaxCompute, see [MaxCompute data type system version 2.0](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition).

**Data type of MaxCompute**

**Data type of Realtime Compute for Apache Flink**

BOOLEAN

BOOLEAN

TINYINT

TINYINT

SMALLINT

SMALLINT

INT

INTEGER

BIGINT

BIGINT

FLOAT

FLOAT

DOUBLE

DOUBLE

DECIMAL(precision, scale)

DECIMAL(precision, scale)

CHAR(n)

CHAR(n)

VARCHAR(n)

VARCHAR(n)

STRING

STRING

BINARY

BYTES

DATE

DATE

DATETIME

TIMESTAMP(3)

TIMESTAMP

TIMESTAMP(9)

TIMESTAMP\_NTZ

TIMESTAMP(9)

ARRAY

ARRAY

MAP

MAP

STRUCT

ROW

JSON

STRING

**Important**

If a MaxCompute physical table contains a field of a nested composite data type (ARRAY, MAP, or STRUCT, etc) and a field of JSON type, you must specify `tblproperties('columnar.nested.type'='true')` when you create the MaxCompute physical table to allow Realtime Compute for Apache Flink to read data from and write data to the physical table correctly.

## Flink CDC (public preview)

The MaxCompute connector can be used as a data ingestion sink in YAML-based jobs.

### VVR engine requirements

VVR 11.1 or later

### Syntax

```
source:
  type: xxx

sink:
   type: maxcompute
   name: MaxComputeSinkaccess-id: ${your_accessId}
   access-key: ${your_accessKey}
   endpoint: ${your_maxcompute_endpoint}
   project: ${your_project}buckets-num: 8
```

### Configuration options

**Option**

**Required?**

**Default value**

**Data type**

**Description**

type

Yes

No default value.

String

The connector to use. Set it to `maxcompute`.

name

No

No default value.

String

The sink name.

access-id

Yes

No default value.

String

The AccessKey ID of your Alibaba Cloud account or RAM user. Obatin it in the [Resource Access Management Console](https://ram.console.alibabacloud.com/manage/ak).

access-key

Yes

No default value.

String

Your AccessKey secret.

endpoint

Yes

No default value.

String

Your MaxCompute endpoint. Configure it based on the region where your MaxCompute project resides and the network connection method. For more information, see [Endpoint](/help/en/maxcompute/user-guide/endpoints).

project

Yes

No default value.

String

Your MaxCompute project name. Do the following to obtain it:

1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Workspace**\>**Projects**.
    
3.  Find your MaxCompute project and copy its name.
    

tunnel.endpoint

No

No default value.

String

The MaxCompute Tunnel endpoint. This endpoint is usually inferred automatically by MaxCompute from the `endpoint` setting. However, you must explicitly define it in special network environments, such as with a proxy server.

quota.name

No

No default value.

String

The quota name of the [exclusive resource group](/help/en/maxcompute/user-guide/purchase-and-use-exclusive-resource-groups-for-dts). If you do not explicitly specify this option, a shared resource group is used.

sts-token

No

No default value.

String

The STS token of your RAM role. This option is required for identity authentication if you use a RAM role to access MaxCompute.

buckets-num

No

16

Integer

The number of buckets for an automatically created MaxCompute Delta table. For more information, see [Near real-time data warehouse](/help/en/maxcompute/user-guide/transaction-table2-0-overview).

compress.algorithm

No

zlib

String

The data compression algorithm. Valid values:

-   `raw`: Data is not compressed.
    
-   `zlib`
    
-   `snappy`
    

total.buffer-size

No

64 MB

String

The in-memory buffer size. For partitioned tables, this buffer applies at the partition level. For non-partitioned tables, it applies at the table level. Buffers for different partitions or tables are independent. When a buffer reaches capacity, its data is flushed to MaxCompute.

bucket.buffer-size

No

4 MB

String

The in-memory buffer size for a bucket. This option applies only when data is written to MaxCompute Delta tables. Buffers for different buckets are independent. When a buffer reaches capacity, its data is flushed to MaxCompute.

commit.thread-num

No

16

Integer

The maximum number of partitions or tables that can be committed concurrently during checkpointing.

flush.concurrent-num

No

4

Integer

Specifies the maximum number of buckets to which Flink can concurrently flush data. This option applies only when data is written to MaxCompute Delta tables.

### **Table location mappings**

When the connector triggers automatic table creation in MaxCompute, locations are mapped as follows:

**Important**

If the schema feature is disabled for your MaxCompute project, the connector will ignore tableId.namespace. In this case, only a single database or its logical equivalent is ingested into MaxCompute. For example, when data is ingested from MySQL to MaxCompute, only one MySQL database is injected.

**MySQL location**

**Abstract in Flink CDC**

**MaxCompute location**

N/A

Project in the configuration file

Project

Database

TableId.namespace

Schema

**Note**

If schema is disabled for your MaxCompute project, this setting is ignored.

Table

TableId.tableName

Table

### Data type mappings

**Flink CDC type**

**MaxCompute type**

CHAR

STRING

VARCHAR

STRING

BOOLEAN

BOOLEAN

BINARY/VARBINARY

BINARY

DECIMAL

DECIMAL

TINYINT

TINYINT

SMALLINT

SMALLINT

INTEGER

INTEGER

BIGINT

BIGINT

FLOAT

FLOAT

DOUBLE

DOUBLE

TIME\_WITHOUT\_TIME\_ZONE

STRING

DATE

DATE

TIMESTAMP\_WITHOUT\_TIME\_ZONE

TIMESTAMP\_NTZ

TIMESTAMP\_WITH\_LOCAL\_TIME\_ZONE(Precision>3)

TIMESTAMP

TIMESTAMP\_WITH\_LOCAL\_TIME\_ZONE(Precision<=3)

DATETIME

TIMESTAMP\_WITH\_TIME\_ZONE(Precision>3)

TIMESTAMP

TIMESTAMP\_WITH\_TIME\_ZONE(Precision<=3)

DATETIME

ARRAY

ARRAY

MAP

MAP

ROW

STRUCT

## Examples

### SQL API

#### **Source table**

##### **Read all data in specific partitions**

Read all data in partitions specified by the `partition` option.

```
CREATE TEMPORARY TABLE odps_source (
  cid VARCHAR,
  rt DOUBLE
) WITH (
  'connector' = 'odps',
  'endpoint' = '<yourEndpointName>',
  'project' = '<yourProjectName>',
  'tableName' = '<yourTableName>',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}',
  'partition' = 'ds=201809*'
);

CREATE TEMPORARY TABLE blackhole_sink (
  cid VARCHAR,
  invoke_count BIGINT
) WITH (
  'connector' = 'blackhole'
);

INSERT INTO blackhole_sink
SELECT
   cid,
   COUNT(*) AS invoke_count
FROM odps_source GROUP BY cid;
```

##### **Read incremental data**

Read data starting from the partition specified by `startPartition` and continuously monitors new records.

```
CREATE TEMPORARY TABLE odps_source (
  cid VARCHAR,
  rt DOUBLE
) WITH (
  'connector' = 'odps',
  'endpoint' = '<yourEndpointName>',
  'project' = '<yourProjectName>',
  'tableName' = '<yourTableName>',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}',
  'startPartition' = 'yyyy=2018,MM=09,dd=05' -- Start reading from the 20180905 partition.
);

CREATE TEMPORARY TABLE blackhole_sink (
  cid VARCHAR,
  invoke_count BIGINT
) WITH (
  'connector' = 'blackhole'
);

INSERT INTO blackhole_sink
SELECT cid, COUNT(*) AS invoke_count
FROM odps_source GROUP BY cid;
```

#### **Sink table**

##### **Write to a static partition**

Write to a partition specified by the `partition` option:

```
CREATE TEMPORARY TABLE datagen_source (
  id INT,
  len INT,
  content VARCHAR
) WITH (
  'connector' = 'datagen'
);

CREATE TEMPORARY TABLE odps_sink (
  id INT,
  len INT,
  content VARCHAR
) WITH (
  'connector' = 'odps',
  'endpoint' = '<yourEndpoint>',
  'project' = '<yourProjectName>',
  'tableName' = '<yourTableName>',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}',
  'partition' = 'ds=20180905' -- Data is written to the partition 20180905.
);

INSERT INTO odps_sink
SELECT
  id, len, content
FROM datagen_source;
```

##### **Write to partitions dynamically**

Write data to partitions dynamically based on the `partition` option:

```
CREATE TEMPORARY TABLE datagen_source (
  id INT,
  len INT,
  content VARCHAR,
  c TIMESTAMP
) WITH (
  'connector' = 'datagen'
);

CREATE TEMPORARY TABLE odps_sink (
  id  INT,
  len INT,
  content VARCHAR,
  ds VARCHAR -- Explicitly specify the dynamic partition column.
) WITH (
  'connector' = 'odps',
  'endpoint' = '<yourEndpoint>',
  'project' = '<yourProjectName>',
  'tableName' = '<yourTableName>',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}',
  'partition' = 'ds' -- Do not specify a value for ds. Data is written to different partitions based on the values of the ds field.
);

INSERT INTO odps_sink
SELECT
   id,
   len,
   content,
   DATE_FORMAT(c, 'yyMMdd') as ds
FROM datagen_source;
```

#### **Dimension table**

##### **Single-value key**

Specify a primary key when each key has a unique value:

```
CREATE TEMPORARY TABLE datagen_source (
  k INT,
  v VARCHAR
) WITH (
  'connector' = 'datagen'
);

CREATE TEMPORARY TABLE odps_dim (
  k INT,
  v VARCHAR,
  PRIMARY KEY (k) NOT ENFORCED  -- Specify the primary key.
) WITH (
  'connector' = 'odps',
  'endpoint' = '<yourEndpoint>',
  'project' = '<yourProjectName>',
  'tableName' = '<yourTableName>',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}',
  'partition' = 'ds=20180905',
  'cache' = 'ALL'
);

CREATE TEMPORARY TABLE blackhole_sink (
  k VARCHAR,
  v1 VARCHAR,
  v2 VARCHAR
) WITH (
  'connector' = 'blackhole'
);

INSERT INTO blackhole_sink
SELECT k, s.v, d.v
FROM datagen_source AS s
INNER JOIN odps_dim FOR SYSTEM_TIME AS OF PROCTIME() AS d ON s.k = d.k;
```

##### **Multi-value key**

Do not specify a primary key when a key can have multiple values:

```
CREATE TEMPORARY TABLE datagen_source (
  k INT,
  v VARCHAR
) WITH (
  'connector' = 'datagen'
);

CREATE TEMPORARY TABLE odps_dim (
  k INT,
  v VARCHAR
  -- Specifying a primary key is not required.
) WITH (
  'connector' = 'odps',
  'endpoint' = '<yourEndpoint>',
  'project' = '<yourProjectName>',
  'tableName' = '<yourTableName>',
  'accessId' = '${secret_values.ak_id}',
  'accessKey' = '${secret_values.ak_secret}',
  'partition' = 'ds=20180905',
  'cache' = 'ALL'
);

CREATE TEMPORARY TABLE blackhole_sink (
  k VARCHAR,
  v1 VARCHAR,
  v2 VARCHAR
) WITH (
  'connector' = 'blackhole'
);

INSERT INTO blackhole_sink
SELECT k, s.v, d.v
FROM datagen_source AS s
INNER JOIN odps_dim FOR SYSTEM_TIME AS OF PROCTIME() AS d ON s.k = d.k;
```

### DataStream API

**Important**

-   If you want to call a DataStream API to read or write data, you must use a DataStream connector of the related type. For more information about how to configure a DataStream connector, see [Integrate DataStream connectors](/help/en/flink/realtime-flink/developer-reference/settings-of-datastream-connectors#main-2309395).
    
-   To protect intellectual property, VVR 6.0.6 or later supports on-premises debugging of DataStream programs using the MaxCompute connector for up to 30 minutes. Any longer debugging session will result in the program being terminated with an error. For more information, see [Debug connectors locally](/help/en/flink/realtime-flink/developer-reference/run-or-debug-a-flink-deployment-that-includes-a-connector-in-an-on-premises-environment).
    
-   Reading data from the MaxCompute Delta Table is not supported. A Delta Table is a table created with a specified `primary key` and the property `transactional=true`. For more information, see [Terms](/help/en/maxcompute/user-guide/delta-table-overview/).
    

We recommend that you declare a MaxCompute table by using SQL statements when you use the MaxCompute DataStream connector. You can call Table API operations to access MaxCompute tables or call DataStream API operations to access data streams.

#### **Connect to the source table**

```
StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
StreamTableEnvironment tEnv = StreamTableEnvironment.create(env);
tEnv.executeSql(String.join(
    "\n",
    "CREATE TEMPORARY TABLE IF NOT EXISTS odps_source (",
    "  cid VARCHAR,",
    "  rt DOUBLE",
    ") WITH (",
    "  'connector' = 'odps',",
    "  'endpoint' = '<yourEndpointName>',",
    "  'project' = '<yourProjectName>',",
    "  'tableName' = '<yourTableName>',",
    "  'accessId' = '<yourAccessId>',",
    "  'accessKey' = '<yourAccessPassword>',",
    "  'partition' = 'ds=201809*'",
    ")");
DataStream<Row> source = tEnv.toDataStream(tEnv.from("odps_source"));
source.print();
env.execute("odps source"); 
```

#### **Connect to the sink**

```
StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
StreamTableEnvironment tEnv = StreamTableEnvironment.create(env);
tEnv.executeSql(String.join(
    "\n",
    "CREATE TEMPORARY TABLE IF NOT EXISTS odps_sink (",
    "  cid VARCHAR,",
    "  rt DOUBLE",
    ") WITH (",
    "  'connector' = 'odps',",
    "  'endpoint' = '<yourEndpointName>',",
    "  'project' = '<yourProjectName>',",
    "  'tableName' = '<yourTableName>',",
    "  'accessId' = '<yourAccessId>',",
    "  'accessKey' = '<yourAccessPassword>',",
    "  'partition' = 'ds=20180905'",
    ")");
DataStream<Row> data = env.fromElements(
    Row.of("id0", 3.),
    Row.of("id1", 4.));
tEnv.fromDataStream(data).insertInto("odps_sink").execute();
```

#### **XML**

The Maven dependencies of the MaxCompute connector contain the classes required to create the full source, incremental source, sink, and dimension table. The [MaxCompute DataStream connectors](https://mvnrepository.com/artifact/com.alibaba.ververica/ververica-connector-odps) of different versions are stored in the Maven central repository.

```
<dependency>
    <groupId>com.alibaba.ververica</groupId>
    <artifactId>ververica-connector-odps</artifactId>
    <version>${vvr-version}</version>
</dependency>
```

## References

-   [Connector FAQ](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#title-c92-aqe-5rg)
