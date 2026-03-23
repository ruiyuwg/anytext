This topic describes how to use the Hudi connector.

**Important**

Due to market ecological development and service strategy adjustments, the official built-in Hudi connector is no longer supported in future Ververica Runtime (VVR) versions of Realtime Compute for Apache Flink. You can use [custom connectors](/help/en/flink/realtime-flink/user-guide/manage-custom-connectors#undefined) to connect Realtime Compute for Apache Flink to Apache Hudi. In addition, we recommend that you perform data migration and use the [Paimon connector](/help/en/flink/realtime-flink/developer-reference/apache-paimon-connector) to obtain optimized features and performance.

## Background information

Apache Hudi is an open source framework that manages table data in data lakes. Apache Hudi organizes file layouts based on Alibaba Cloud Object Storage Service (OSS) or Hadoop Distributed File System (HDFS) to ensure atomicity, consistency, isolation, durability (ACID) and supports efficient row-level data update and deletion. This simplifies extract, transform, and load (ETL) development. Apache Hudi also supports automatic management and merging of small files to maintain the specified file size. This helps prevent query performance degradation due to excessive small files that are generated during data insertion and update and eliminates the O&M workload of manually monitoring and merging small files.

**Item**

**Description**

Table type

Source table and result table

Running mode

Streaming mode and batch mode

Data format

N/A

Metric

-   Metrics for source tables
    
    -   numRecordsIn
        
    -   numRecordsInPerSecond
        
-   Metrics for result tables:
    
    -   numRecordsOut
        
    -   numRecordsOutPerSecond
        
    -   currentSendTime
        

**Note**

For more information about the metrics, see [Metrics](/help/en/flink/realtime-flink/user-guide/metrics).

API type

DataStream API and SQL API

Data update or deletion in a sink table

Supported

## Features

**Item**

**Description**

Core features

-   Supports the ACID semantics. By default, snapshot isolation is provided.
    
-   Supports the UPSERT semantics. The UPSERT semantics is a combination of the INSERT and UPDATE semantics. Fully managed Flink uses the UPSERT semantics to write data to a table based on the following rules: If a data record to be written to a table does not exist in the table, fully managed Flink inserts the data record into the table. If the data record already exists in the table, fully managed Flink updates the data record. The INSERT INTO statement can significantly simplify the development code and improve the efficiency of data processing.
    
-   Provides historical details of the data versions at a point in time based on the time travel feature. This helps you perform data O&M in an efficient manner and improves data quality.
    

Typical scenarios

-   Acceleration of data ingestion from databases into data lakes
    
    Compared with the traditional method that is used to load and merge a large amount of data in offline mode, Hudi allows you to update and write streaming data to an excessively large dataset in real time in a more cost-effective manner. You can directly write Change Data Capture (CDC) data to a data lake for downstream business in the real-time ETL process. For example, you can use the MySQL CDC connector of fully managed Flink to write the binary log data of a relational database management system (RDBMS) such as MySQL to a Hudi table.
    
-   Incremental ETL
    
    You can use the incremental extraction method of ETL to obtain the change data streams from Hudi in real time. This method provides better real-time performance and is more lightweight than offline ETL scheduling. For example, you can incrementally extract online business data to an offline storage system. In this typical scenario, the Flink engine writes the extracted data to a Hudi table, and then the Apache Presto or Apache Spark engine is used to perform efficient online analytical processing (OLAP).
    
-   Message queuing
    
    In scenarios where you need to process only a small amount of data, Hudi can also be used as a message queue service to replace Kafka. This simplifies the application development architecture.
    
-   Data backfilling
    
    If you want to update historical full data in specific rows and columns of a table, you can use data lakes. This greatly reduces the consumption of computing resources and improves end-to-end performance. For example, you can use this feature to read full data and incremental data from Hudi tables in a Hive metastore and join the two tables to generate a wide table.
    

Advantages

Compared with the open source Hudi community, Hudi that is integrated into fully managed Flink provides more advantages. Hudi that is integrated into fully managed Flink provides the following advantages:

-   Maintenance-free based on the integration between the platform and fully managed Flink
    
    Fully managed Flink provides the built-in Hudi connector. This reduces the O&M complexity and provides service level agreement (SLA) guarantee.
    
-   Improved data connectivity
    
    The Hudi connector is connected to multiple Alibaba Cloud big data computing and analytics engines. This way, data is decoupled from computing engines and can be seamlessly migrated among Apache Flink, Apache Spark, Apache Presto, and Apache Hive.
    
-   Optimized data ingestion from databases to data lakes
    
    The Hudi connector works with the Flink CDC connector to simplify data development.
    
-   Enterprise-class features
    
    Enterprise-class features are supported, such as unified metadata views of Data Lake Formation (DLF) and automatic and lightweight table schema changes.
    
-   Cost-effective storage and high scalability by using Alibaba Cloud OSS
    
    Data is stored in the Apache Parquet or Apache Avro format in Alibaba Cloud OSS. Storage and computing are isolated and resources can be scaled in a flexible manner.
    

## **Limits**

-   Only Realtime Compute for Apache Flink whose engine version is vvr-4.0.11-flink-1.13 or later supports the Hudi connector.
    
-   Only HDFS, Alibaba Cloud OSS, or OSS-HDFS can be used as a file system.
    
-   You cannot publish drafts in a session cluster.
    
-   You cannot use the Hudi connector to modify fields in a table. If you want to modify fields in a table, use Spark SQL statements in the DLF console.
    

## **Syntax**

```
CREATE TEMPORARY TABLE hudi_tbl (
  uuid BIGINT,
  data STRING,
  ts   TIMESTAMP(3),
  PRIMARY KEY(uuid) NOT ENFORCED
) WITH (
  'connector' = 'hudi',
  'path' = 'oss://<yourOSSBucket>/<Custom storage directory>',
  ...
);
```

## Parameters in the WITH clause

### Basic parameters

-   Common parameters
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    connector
    
    The type of tables.
    
    STRING
    
    Yes
    
    No default value
    
    Set the value to hudi.
    
    path
    
    The storage path of the table.
    
    STRING
    
    Yes
    
    No default value
    
    The table can be stored in an OSS bucket, HDFS, or OSS-HDFS.
    
    -   OSS: The path is in the `oss://<bucket>/<user-defined-dir>` format.
        
    -   HDFS: The path is in the `hdfs://<user-defined-dir>` format.
        
    -   OSS-HDFS: The path is in the `oss://<bucket>.<oss-hdfs-endpoint>/<user-defined-dir>` format.
        
        **Note**
        
        Only Realtime Compute for Apache Flink that uses VVR 8.0.3 or later allows you to set this parameter to an OSS-HDFS path.
        
    
    Parameters in the path:
    
    -   bucket: the name of the OSS bucket that you created.
        
    -   user-defined-dir: the path in which data is stored.
        
    
    -   oss-hdfs-endpoint: the endpoint of the OSS-HDFS service.
        
        You can view the **endpoint** of **HDFS** in the **Port** section of the **Overview** page for the OSS bucket in the OSS console.
        
    
    hoodie.datasource.write.recordkey.field
    
    The primary key field.
    
    STRING
    
    No
    
    uuid
    
    -   You can use the PRIMARY KEY syntax to specify primary key fields.
        
    -   Separate multiple fields with commas (,).
        
    
    precombine.field
    
    The version field.
    
    STRING
    
    No
    
    ts
    
    The field is used to determine whether messages need to be updated.
    
    If you do not configure this parameter, the system updates data based on the message sequence that is defined in the engine.
    
    oss.endpoint
    
    The endpoint of Alibaba Cloud OSS or OSS-HDFS.
    
    STRING
    
    No
    
    No default value
    
    If you store the table in OSS or OSS-HDFS, you must specify this parameter.
    
    -   If you store the table in OSS, set this parameter to the endpoint of OSS. For more information about the endpoints of OSS, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
        
    -   If you store the table in OSS-HDFS, set this parameter to the endpoint of OSS-HDFS. You can view the **endpoint** of **HDFS** in the **Port** section of the **Overview** page for the OSS bucket in the OSS console.
        
    
    accessKeyId
    
    The AccessKey ID of your Alibaba Cloud account.
    
    STRING
    
    No
    
    No default value
    
    If you store the table in OSS or OSS-HDFS, you must specify this parameter.
    
    For more information, see [Console operations](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe).
    
    **Important**
    
    To protect your AccessKey pair, we recommend that you configure the AccessKey ID and AccessKey secret by using variables. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
    accessKeySecret
    
    The AccessKey secret of your Alibaba Cloud account.
    
    STRING
    
    No
    
    No default value
    
-   Parameters exclusive to source tables
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    read.streaming.enabled
    
    Specifies whether to enable streaming read.
    
    BOOLEAN
    
    No
    
    false
    
    Valid values:
    
    -   true: Streaming read is enabled.
        
    -   false: Streaming read is disabled.
        
    
    read.start-commit
    
    The offset from which data consumption starts.
    
    STRING
    
    No
    
    Left empty
    
    Valid values:
    
    -   Time in the yyyyMMddHHmmss format: Data is consumed from the specified time.
        
    -   earliest: Data is consumed from the earliest offset.
        
    -   If this parameter is left empty, data is consumed from the latest time.
        
    
-   Parameters exclusive to sink tables
    
    **Parameter**
    
    **Description**
    
    **Data type**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    write.operation
    
    The mode in which write operations are performed.
    
    STRING
    
    No
    
    UPSERT
    
    Valid values:
    
    -   insert: Data is written to the table in append mode.
        
    -   upsert: Data is updated.
        
    -   bulk\_insert: Batch data is written to the table in append mode.
        
    
    hive\_sync.enable
    
    Specifies whether to enable metadata synchronization to Hive.
    
    BOOLEAN
    
    No
    
    false
    
    Valid values:
    
    -   true: Metadata synchronization to Hive is enabled.
        
    -   false: Metadata synchronization to Hive is disabled.
        
    
    hive\_sync.mode
    
    The mode in which Hive data is synchronized.
    
    STRING
    
    No
    
    hms
    
    Valid values:
    
    -   hms: If you want to synchronize metadata to a Hive metastore or DLF, set this parameter to hms.
        
    -   jdbc: If you want to synchronize metadata to a Java Database Connectivity (JDBC) driver, set this parameter to jdbc.
        
    
    hive\_sync.db
    
    The name of the Hive database to which data is synchronized.
    
    STRING
    
    No
    
    default
    
    N/A
    
    hive\_sync.table
    
    The name of the Hive table to which data is synchronized.
    
    STRING
    
    No
    
    Name of the current table
    
    The name of the Hive table to which data is synchronized from Hudi cannot contain hyphens (-).
    
    dlf.catalog.region
    
    The name of the region in which the DLF service is activated.
    
    STRING
    
    No
    
    No default value
    
    For more information, see [Supported regions and endpoints](/help/en/dlf/dlf-1-0/product-overview/regions-and-endpoints).
    
    **Note**
    
    -   The dlf.catalog.region parameter takes effect only ifn the hive\_sync.mode parameter is set to hms.
        
    -   Make sure that the value of this parameter matches the endpoint specified by the dlf.catalog.endpoint parameter.
        
    
    dlf.catalog.endpoint
    
    The endpoint of DLF.
    
    STRING
    
    No
    
    No default value
    
    For more information, see [Supported regions and endpoints](/help/en/dlf/dlf-1-0/product-overview/regions-and-endpoints).
    
    **Note**
    
    -   The dlf.catalog.endpoint parameter takes effect only if the hive\_sync.mode parameter is set to hms.
        
    -   We recommend that you set the dlf.catalog.endpoint parameter to a virtual private cloud (VPC) endpoint of DLF. For example, if you select the China (Hangzhou) region, set this parameter to dlf-vpc.cn-hangzhou.aliyuncs.com.
        
    -   If you want to access DLF across VPCs, follow the instructions that are described in [How does Realtime Compute for Apache Flink access a service across VPCs?](/help/en/flink/realtime-flink/support/reference#section-b0b-5qz-thz)
        
    

### Advanced parameters

Hudi supports various read and write scenarios. The following tables describe the parameters that can be configured in different scenarios.

## Parameters for parallelism

**Parameter**

**Description**

**Default value**

**Remarks**

write.tasks

The parallelism of write tasks. Each write task writes data to 1 to N buckets in sequence.

4

If you increase the parallelism of write tasks, the number of small files remains unchanged**.**

write.bucket\_assign.tasks

The parallelism of bucket assigner operators.

Parallelism of Realtime Compute for Apache Flink deployments

If you increase the parallelism of write tasks and the parallelism of bucket assigner operators, the number of small files increases.

write.index\_bootstrap.tasks

The parallelism of index bootstrap operators.

Parallelism of Realtime Compute for Apache Flink deployments

-   This parameter takes effect only if the index.bootstrap.enabled parameter is set to true.
    
-   If you increase the parallelism, the efficiency of the bootstrap stage can be improved. Checkpointing may be blocked in the bootstrap stage. To resolve this issue, you can set the number of checkpoint failure tolerance times to a large value.
    

read.tasks

The parallelism of streaming and batch read operators.

4

N/A

compaction.tasks

The parallelism of online compaction operators.

4

Online compaction consumes more resources than offline compaction. We recommend that you perform offline compaction.

## Parameters for online compaction

**Parameter**

**Description**

**Default value**

**Remarks**

compaction.schedule.enabled

Specifies whether to generate compaction plans as scheduled.

true

Valid values:

-   true: Compaction plans are generated as scheduled.
    
-   false: Compaction plans are not generated as scheduled.
    

**Note**

We recommend that you set this parameter to true even if the compaction.async.enabled parameter is set to false.

compaction.async.enabled

Specifies whether to enable asynchronous compaction.

true

Valid values:

-   true: Asynchronous compaction is enabled.
    
-   false: Asynchronous compaction is disabled.
    

**Note**

You can set this parameter to false to disable online compaction. However, we recommend that you set the compaction.schedule.enabled parameter to true. In this case, you can perform offline asynchronous compaction to run the compaction plans that are generated as scheduled.

compaction.tasks

The parallelism of compaction tasks.

4

N/A

compaction.trigger.strategy

The strategy that is used to trigger compaction.

num\_commits

Valid values:

-   num\_commits: Compaction is triggered when the number of commits reaches the specified value.
    
-   time\_elapsed: Compaction is triggered at the specified interval.
    
-   num\_and\_time: Compaction is triggered when both the number of commits and the interval reach the specified values.
    
-   num\_or\_time: Compaction is triggered when the number of commits or the interval reaches the specified value.
    

compaction.delta\_commits

The maximum number of commits that are required to trigger compaction.

5

N/A

compaction.delta\_seconds

The interval at which compaction is triggered.

3600

Unit: seconds.

compaction.max\_memory

The maximum memory of the hash map that is used for compaction and deduplication.

100 MB

If resources are sufficient, we recommend that you change the value of this parameter to 1 GB.

compaction.target\_io

The maximum I/O throughput for each compaction plan.

500 GB

N/A

## File-related parameters

File-related parameters are used to manage the file size. The following table describes the supported parameters.

**Parameter**

**Description**

**Default value**

**Remarks**

hoodie.parquet.max.file.size

The maximum size of a Parquet file to which data can be written.

If data to be written to a Parquet file exceeds the size specified by this parameter, the excess data is written to a new file group.

120 \* 1024 \* 1024 byte

(120 MB)

Unit: bytes.

hoodie.parquet.small.file.limit

The file size threshold of small files. Files whose size is less than the value of this parameter are considered small files.

104857600 byte (100 MB)

-   Unit: bytes.
    
-   During data writing, Hudi attempts to write data to existing small files in append mode instead of writing data to a new file.
    

hoodie.copyonwrite.record.size.estimate

The estimated record size.

1024 byte (1 KB)

-   Unit: bytes.
    
-   If you do not specify this parameter, Hudi dynamically computes the record size based on the committed metadata.
    

## Hadoop-related parameter

**Parameter**

**Description**

**Default value**

**Remarks**

hadoop.${you option key}

The Hadoop configuration items that are specified by using the hadoop. prefix.

No default value

You can specify multiple Hadoop configuration items at the same time.

**Note**

This parameter is supported in Hudi 0.12.0 and later. To meet the requirements of cross-cluster commits and execution, you can use DDL statements to specify per-job Hadoop configurations.

## Parameters for data writing

Hudi supports various write methods, including batch write and streaming write. Hudi supports various data types, including changelog data and log data. Hudi also supports different indexing schemes.

-   Parameters for batch write
    
    If you want to import existing data from other data sources to Hudi, you can use the batch import feature to import existing data into a Hudi table.
    
    **Parameter**
    
    **Description**
    
    **Default value**
    
    **Remarks**
    
    write.operation
    
    The type of the write operation.
    
    upsert
    
    Valid values:
    
    -   upsert: Data is inserted and updated.
        
    -   insert: Data is inserted.
        
    -   bulk\_insert: Data is written in batches.
        
        **Note**
        
        -   If you set this parameter to bulk\_insert, Avro-based data serialization and data compaction are not performed. Deduplication is not performed after data is imported. If you have high requirements on the uniqueness of data, make sure that the imported data is unique.
            
        -   You can set the write.operation parameter to bulk\_insert only in batch execution mode. In this mode, the system sorts input data by partition name and writes the data to a Hudi table by default. This way, the write operation is not frequently switched among different files and the system performance is not degraded.
            
        
    
    write.tasks
    
    The parallelism of bulk\_insert write tasks.
    
    Parallelism of Realtime Compute for Apache Flink deployments
    
    The parallelism of bulk\_insert write tasks is specified by the write.tasks parameter and has an impact on the number of small files.
    
    In theory, the parallelism of bulk\_insert write tasks is equal to the number of buckets. If data that is written to a file in each bucket reaches the maximum size of the file, data is rolled over to a new file handle. Therefore, the final number of write files is greater than or equal to the parallelism of bulk\_insert write tasks. The maximum size of a Parquet file is 120 MB.
    
    write.bulk\_insert.shuffle\_input
    
    Specifies whether to shuffle input data based on partition fields for batch insert tasks.
    
    true
    
    In Hudi 0.11.0 and later, you can set this parameter to true to reduce the number of small files. However, this may cause data skew.
    
    write.bulk\_insert.sort\_input
    
    Specifies whether to sort input data based on partition fields for batch insert tasks.
    
    true
    
    In Hudi 0.11.0 and later, if you want to run a write task to write data to multiple partitions, you can set this parameter to true to reduce the number of small files**.**
    
    write.sort.memory
    
    The available managed memory of the sort operator.
    
    128
    
    Unit: MB.
    
-   Parameter for enabling the changelog mode
    
    In changelog mode, Hudi retains all changes (INSERT, UPDATE\_BEFORE, UPDATE\_AFTER, and DELETE) of messages and then works together with the stateful computing of the Flink engine to implement end-to-end near-real-time data warehousing. Merge on Read (MOR) tables of Hudi support the retention of all changes of messages based on row-oriented storage. Fully managed Flink can read an MOR table in streaming mode to consume all change records.
    
    **Note**
    
    In non-changelog mode, the intermediate changes in a batch dataset in a single streaming read can be merged. All immediate results are merged in a batch read (snapshot read). The intermediate state is ignored regardless of whether it is written.
    
    **Parameter**
    
    **Description**
    
    **Default value**
    
    **Remarks**
    
    changelog.enabled
    
    Specifies whether to consume all changes.
    
    false
    
    Valid values:
    
    -   true: All changes can be consumed.
        
    -   false: Not all changes can be consumed. The UPSERT semantics is used. Only the last merged message among all messages is ensured, and the intermediate changes may be merged.
        
    
    **Note**
    
    After you set the changelog.enabled parameter to true, the asynchronous compaction task still merges the intermediate changes into one data record. If data is not consumed at the earliest opportunity during streaming read, only the last data record can be read after data is compacted. You can change the buffer time for data compaction to reserve a specific time for the reader to read and consume data. For example, you can set the compaction.delta\_commits parameter to 5 and the compaction.delta\_seconds parameter to 3600.
    
-   Append mode (supported in Hudi 0.10.0 and later)
    
    In Append mode:
    
    -   The small file policy is applied to MOR tables. Data is written to Avro log files in append mode.
        
    -   The small file policy is not applied to COW tables. A new Parquet file is generated each time data is written to a Copy on Write (COW) table.
        

## Parameters for clustering policies

Hudi supports various clustering policies to resolve the small file issue in INSERT mode.

-   Parameter for inline clustering (supported only for COW tables)
    
    **Parameter**
    
    **Description**
    
    **Default value**
    
    **Remarks**
    
    write.insert.cluster
    
    Specifies whether to merge small files during data writing.
    
    false
    
    Valid values:
    
    -   true: Small files are merged during data writing.
        
    -   false: Small files are not merged during data writing.
        
    
    **Note**
    
    By default, small files are not merged when the INSERT operation is performed on a COW table. If you set this parameter to true, the existing small files are merged each time the INSERT operation is performed. However, deduplication is not performed. As a result, the write throughput decreases.
    
-   Parameters for async clustering (supported in Hudi 0.12.0 and later)
    
    **Parameter**
    
    **Description**
    
    **Default value**
    
    **Remarks**
    
    clustering.schedule.enabled
    
    Specifies whether to schedule the clustering plan during data writing.
    
    false
    
    If you set this parameter to true, the clustering plan is periodically scheduled.
    
    clustering.delta\_commits
    
    The number of commits that are required to generate a clustering plan.
    
    4
    
    If the clustering.schedule.enabled parameter is set to true, this parameter takes effect.
    
    clustering.async.enabled
    
    Specifies whether to asynchronously run the clustering plan.
    
    false
    
    If you set this parameter to true, the clustering plan is asynchronously run at regular intervals to merge small files.
    
    clustering.tasks
    
    The parallelism of clustering tasks.
    
    4
    
    N/A
    
    clustering.plan.strategy.target.file.max.bytes
    
    The maximum size of a file for clustering.
    
    1024 \* 1024 \* 1024
    
    Unit: bytes.
    
    clustering.plan.strategy.small.file.limit
    
    The file size threshold for small files that are used for clustering.
    
    600
    
    Only files whose size is less than the value of this parameter can be used for clustering.
    
    clustering.plan.strategy.sort.columns
    
    Columns based on which data is sorted for clustering.
    
    No default value
    
    You can specify special sorting fields.
    
-   Parameters for clustering plan strategies
    
    **Parameter**
    
    **Description**
    
    **Default value**
    
    **Remarks**
    
    clustering.plan.partition.filter.mode
    
    The partition filter mode that is used in the creation of a clustering plan.
    
    NONE
    
    Valid values:
    
    -   NONE: Partitions are not filtered. All partitions are selected for clustering.
        
    -   RECENT\_DAYS: If data is partitioned by day, the partitions that correspond to the specified number of recent days are selected for clustering.
        
    -   SELECTED\_PARTITIONS: The specified partitions are selected for clustering.
        
    
    clustering.plan.strategy.daybased.lookback.partitions
    
    The number of recent days based on which partitions are selected for clustering when the clustering.plan.partition.filter.mode parameter is set to RECENT\_DAYS.
    
    2
    
    This parameter takes effect only if the clustering.plan.partition.filter.mode parameter is set to RECENT\_DAYS.
    
    clustering.plan.strategy.cluster.begin.partition
    
    The start partition, which is used to filter partitions.
    
    No default value
    
    This parameter takes effect only if the clustering.plan.partition.filter.mode parameter is set to SELECTED\_PARTITIONS.
    
    clustering.plan.strategy.cluster.end.partition
    
    The end partition, which is used to filter partitions.
    
    No default value
    
    This parameter takes effect only if the clustering.plan.partition.filter.mode parameter is set to SELECTED\_PARTITIONS.
    
    clustering.plan.strategy.partition.regex.pattern
    
    The regular expression that is used to specify partitions.
    
    No default value
    
    N/A
    
    clustering.plan.strategy.partition.selected
    
    The selected partitions.
    
    No default value
    
    Separate multiple partitions with commas (,).
    
-   Parameters related to the bucket index type
    
    **Note**
    
    The parameters in the following table are supported in Hudi 0.11.0 and later.
    
    **Parameter**
    
    **Description**
    
    **Default value**
    
    **Remarks**
    
    index.type
    
    The type of the index.
    
    FLINK\_STATE
    
    Valid values:
    
    -   FLINK\_STATE: The Flink state index type is used.
        
    -   BUCKET: The bucket index type is used.
        
        If you configure `index.type=bucket`, setting the `index.global.enabled` parameter to true is invalid because the bucket index type does not support cross-partition changes. In this case, deduplication on multiple partitions cannot be performed even if the global index feature is enabled.
        
    
    If the amount of data is large such as more than 500 million data records in a table, the storage overhead of Flink state may become a bottleneck. The bucket index type uses a fixed hash policy to allocate data that contains the same key to the same file group. This helps prevent the storage and query overheads of the index. The bucket index type and the Flink state index type have the following differences:
    
    -   Compared with the Flink state index type, the bucket index type does not have storage and computing overheads. The bucket index type provides better performance than the Flink state index type.
        
    -   If you use the bucket index type, you cannot increase the number of buckets. If you use the Flink state index type, you can dynamically increase the number of files based on the file size.
        
    -   The bucket index type does not support cross-partition changes. Once data is written to a partition, the bucket index is not changed. For example, the deletion operation affects only the data in the current partition and does not affect the same data in other partitions.
        
        **Note**
        
        If the input data is CDC streaming data, this limit is not applicable.
        
    
    hoodie.bucket.index.hash.field
    
    The hash key field when the bucket index type is used.
    
    Primary key
    
    This parameter can be set to a subset of the primary key.
    
    hoodie.bucket.index.num.buckets
    
    The number of buckets when the bucket index type is used.
    
    4
    
    By default, the value of this parameter is the number of buckets in each partition. You cannot change the value of this parameter after the configuration.
    

## Parameters for data reads

-   Hudi supports various read methods, including batch read, streaming read, and incremental data read. Hudi can also consume and transfer changelogs to implement end-to-end incremental ETL.
    
    -   Parameters for streaming read
        
        By default, snapshot reading is used for tables. In this case, the latest full snapshot data is read and returned at a time. You can set the read.streaming.enabled parameter to true to enable streaming read. You can configure the read.start-commit parameter to specify the start offset for streaming read. You can set the read.start-commit parameter to earliest to allow data to be consumed from the earliest offset.
        
        **Parameter**
        
        **Description**
        
        **Default value**
        
        **Remarks**
        
        read.streaming.enabled
        
        Specifies whether to enable streaming read.
        
        false
        
        Valid values:
        
        -   true: Streaming read is enabled.
            
        -   false: Streaming read is disabled.
            
        
        read.start-commit
        
        The start offset for streaming read.
        
        Left empty
        
        Valid values:
        
        -   Time in the yyyyMMddHHmmss format: Data is consumed from the specified time.
            
        -   earliest: Data is consumed from the earliest offset.
            
        -   If this parameter is left empty, data is consumed from the latest time.
            
        
        clean.retain\_commits
        
        The maximum number of historical commits that can be retained by the cleaner.
        
        30
        
        If the number of historical commits exceeds the value of this parameter, the excess historical commits are deleted. In changelog mode, this parameter can be used to control the period for which changelogs can be retained. For example, if the checkpointing period is 5 minutes, changelogs are retained for at least 150 minutes by default.
        
        **Important**
        
        -   Streaming read of changelogs is supported only in Hudi 0.10.0 and later. In changelog mode, Hudi retains changelogs for a period of time for downstream consumers to consume.
            
        -   Changelogs may be merged in compaction tasks. In this case, intermediate records are deleted, which may affect the calculation result.
            
        
    -   Parameters for incremental data read (supported in Hudi 0.10.0 and later)
        
        Fully managed Flink supports incremental consumption by using DataStream connectors, batch incremental consumption, and batch consumption of data at a specific point in time by using the time travel feature.
        
        **Parameter**
        
        **Description**
        
        **Default value**
        
        **Remarks**
        
        read.start-commit
        
        The offset from which data consumption starts.
        
        Commit from the latest offset
        
        The values of these parameters are in the yyyyMMddHHmmss format.
        
        The interval is a closed interval, which contains the start and end offsets.
        
        read.end-commit
        
        The offset at which data consumption ends.
        
        Commit from the latest offset
        

## **Sample code**

-   Sample code for a source table
    

```
CREATE TEMPORARY TABLE blackhole (
  id INT NOT NULL PRIMARY KEY NOT ENFORCED,
  data STRING,
  ts TIMESTAMP(3)
) WITH (
  'connector' = 'blackhole'      
);

CREATE TEMPORARY TABLE hudi_tbl (
  id INT NOT NULL PRIMARY KEY NOT ENFORCED,
  data STRING,
  ts TIMESTAMP(3)
) WITH (
  'connector' = 'hudi', 
  'oss.endpoint' = '<yourOSSEndpoint>', 
  'accessKeyId' = '${secret_values.ak_id}', 
  'accessKeySecret' = '${secret_values.ak_secret}', 
  'path' = 'oss://<yourOSSBucket>/<Custom storage directory>',
  'table.type' = 'MERGE_ON_READ',
  'read.streaming.enabled' = 'true'
);

-- Read data from the latest commit in streaming mode and write the data to Blackhole. 
INSERT INTO blackhole SELECT * from hudi_tbl;
```

-   Sample code for a sink table
    

```
CREATE TEMPORARY TABLE datagen(
  id INT NOT NULL PRIMARY KEY NOT ENFORCED,
  data  STRING,
  ts TIMESTAMP(3)
) WITH (
  'connector' = 'datagen' ,
  'rows-per-second'='100' 
);

CREATE TEMPORARY TABLE hudi_tbl (
  id INT NOT NULL PRIMARY KEY NOT ENFORCED,
  data STRING,
  ts TIMESTAMP(3)
) WITH (
  'connector' = 'hudi', 
  'oss.endpoint' = '<yourOSSEndpoint>', 
  'accessKeyId' = '${secret_values.ak_id}', 
  'accessKeySecret' = '${secret_values.ak_secret}', 
  'path' = 'oss://<yourOSSBucket>/<Custom storage directory>',
  'table.type' = 'MERGE_ON_READ'
);

INSERT INTO hudi_tbl SELECT * from datagen;
```

## **DataStream API**

**Important**

If you want to call a DataStream API to read or write data, you must use a DataStream connector of the related type to connect to Realtime Compute for Apache Flink. For more information about how to configure a DataStream connector, see [Settings of DataStream connectors](/help/en/flink/realtime-flink/developer-reference/settings-of-datastream-connectors).

-   maven pom
    
    Specify the Realtime Compute for Apache Flink and Hudi versions based on the VVR version that is used.
    
    ```
    <properties>
      <maven.compiler.source>8</maven.compiler.source>
      <maven.compiler.target>8</maven.compiler.target>
      <flink.version>1.15.4</flink.version>
      <hudi.version>0.13.1</hudi.version>
    </properties>
    
    <dependencies>
      <!-- flink -->
      <dependency>
        <groupId>org.apache.flink</groupId>
        <artifactId>flink-streaming-java</artifactId>
        <version>${flink.version}</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.apache.flink</groupId>
        <artifactId>flink-table-common</artifactId>
        <version>${flink.version}</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.apache.flink</groupId>
        <artifactId>flink-table-api-java-bridge</artifactId>
        <version>${flink.version}</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.apache.flink</groupId>
        <artifactId>flink-table-planner_2.12</artifactId>
        <version>${flink.version}</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.apache.flink</groupId>
        <artifactId>flink-clients</artifactId>
        <version>${flink.version}</version>
        <scope>provided</scope>
      </dependency>
    
      <!-- hudi -->
      <dependency>
        <groupId>org.apache.hudi</groupId>
        <artifactId>hudi-flink1.15-bundle</artifactId>
        <version>${hudi.version}</version>
        <scope>provided</scope>
      </dependency>
    
      <!-- oss -->
      <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-common</artifactId>
        <version>3.3.2</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-aliyun</artifactId>
        <version>3.3.2</version>
        <scope>provided</scope>
      </dependency>
    
      <!-- dlf -->
      <dependency>
        <groupId>com.aliyun.datalake</groupId>
        <artifactId>metastore-client-hive2</artifactId>
        <version>0.2.14</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-mapreduce-client-core</artifactId>
        <version>2.5.1</version>
        <scope>provided</scope>
      </dependency>
    </dependencies>
    ```
    
    **Important**
    
    Specific dependencies that are used by DLF conflict with open source Hive versions, such as `hive-common` and `hive-exec`. If you want to test DLF in your on-premises environment, you can download the [hive-common](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230717/cwkf/hive-common-2.3.6-stream1-SNAPSHOT.jar) and [hive-exec](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230717/qhcz/hive-exec-2.3.6-stream1-SNAPSHOT.jar) JAR packages, and manually import the packages in IntelliJ IDEA.
    
-   Write data to Hudi
    
    ```
    import org.apache.flink.streaming.api.datastream.DataStream;
    import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
    import org.apache.flink.table.data.GenericRowData;
    import org.apache.flink.table.data.RowData;
    import org.apache.flink.table.data.StringData;
    import org.apache.hudi.common.model.HoodieTableType;
    import org.apache.hudi.configuration.FlinkOptions;
    import org.apache.hudi.util.HoodiePipeline;
    
    import java.util.HashMap;
    import java.util.Map;
    
    public class FlinkHudiQuickStart {
    
      public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
    
        String dbName = "test_db";
        String tableName = "test_tbl";
        String basePath = "oss://xxx";
    
        Map<String, String> options = new HashMap<>();
        // hudi conf
        options.put(FlinkOptions.PATH.key(), basePath);
        options.put(FlinkOptions.TABLE_TYPE.key(), HoodieTableType.MERGE_ON_READ.name());
        options.put(FlinkOptions.PRECOMBINE_FIELD.key(), "ts");
        options.put(FlinkOptions.DATABASE_NAME.key(), dbName);
        options.put(FlinkOptions.TABLE_NAME.key(), tableName);
        // oss conf
        options.put("hadoop.fs.oss.accessKeyId", "xxx");
        options.put("hadoop.fs.oss.accessKeySecret", "xxx");
        // Use the public endpoint for local debugging, such as oss-cn-hangzhou.aliyuncs.com. Use the internal endpoint for cluster submission, such as oss-cn-hangzhou-internal.aliyuncs.com.
        options.put("hadoop.fs.oss.endpoint", "xxx");
        options.put("hadoop.fs.AbstractFileSystem.oss.impl", "org.apache.hadoop.fs.aliyun.oss.OSS");
        options.put("hadoop.fs.oss.impl", "org.apache.hadoop.fs.aliyun.oss.AliyunOSSFileSystem");
        // dlf conf
        options.put(FlinkOptions.HIVE_SYNC_ENABLED.key(), "true"); // You can determine whether to synchronize Hudi data to DLF.
        options.put(FlinkOptions.HIVE_SYNC_MODE.key(), "hms");
        options.put(FlinkOptions.HIVE_SYNC_DB.key(), dbName);
        options.put(FlinkOptions.HIVE_SYNC_TABLE.key(), tableName);
        options.put("hadoop.dlf.catalog.id", "xxx");
        options.put("hadoop.dlf.catalog.accessKeyId", "xxx");
        options.put("hadoop.dlf.catalog.accessKeySecret", "xxx");
        options.put("hadoop.dlf.catalog.region", "xxx");
        // Use the public endpoint for local debugging, such as dlf.cn-hangzhou.aliyuncs.com. Use the internal endpoint for cluster submission, such as dlf-vpc.cn-hangzhou.aliyuncs.com.
        options.put("hadoop.dlf.catalog.endpoint", "xxx");
        options.put("hadoop.hive.imetastoreclient.factory.class", "com.aliyun.datalake.metastore.hive2.DlfMetaStoreClientFactory");
    
        DataStream<RowData> dataStream = env.fromElements(
            GenericRowData.of(StringData.fromString("id1"), StringData.fromString("name1"), 22,
                StringData.fromString("1001"), StringData.fromString("p1")),
            GenericRowData.of(StringData.fromString("id2"), StringData.fromString("name2"), 32,
                StringData.fromString("1002"), StringData.fromString("p2"))
        );
    
        HoodiePipeline.Builder builder = HoodiePipeline.builder(tableName)
            .column("uuid string")
            .column("name string")
            .column("age int")
            .column("ts string")
            .column("`partition` string")
            .pk("uuid")
            .partition("partition")
            .options(options);
    
        builder.sink(dataStream, false); // The second parameter indicating whether the input data stream is bounded
        env.execute("Flink_Hudi_Quick_Start");
      }
    }
    ```
    

## **FAQ**

-   [What do I do if no data is found in the storage?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#2f7d9e50147i2)
    
-   [What do I do if duplicate data exists?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#3f74fd8014qld)
    
-   [Why are only log files generated in MOR mode?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#47683520146ys)
