Use the Paimon connector with the Paimon Catalog for best results. This topic explains how to use the Paimon connector for streaming data lakehouses.

## **Background information**

Apache Paimon is a unified streaming and batch lake storage format. It supports high-throughput writes and low-latency queries. Major compute engines on Alibaba Cloud’s open source big data platform E-MapReduce—including Flink, Spark, Hive, and Trino—integrate well with Paimon. You can use Apache Paimon to quickly build your own data lake storage service on HDFS or cloud-based Object Storage Service. Then connect supported compute engines to analyze your data lake. For more information, see [Apache Paimon](https://paimon.apache.org/).

**Category**

**Details**

Supported types

Source tables, dimension tables, and sink tables (data ingestion targets)

Execution mode

Streaming and batch modes

Data format

Not supported

Unique monitoring metrics

None

API types

SQL and YAML-based data ingestion jobs

Supports updating or deleting data in sink tables

Yes

## **Key features**

Apache Paimon provides the following core capabilities:

-   Build lightweight, low-cost data lake storage services on HDFS or Object Storage Service.
    
-   Read and write large-scale data sets in both streaming and batch modes.
    
-   Run batch and OLAP queries with data freshness from minutes down to seconds.
    
-   Ingest and produce incremental data. Serve as storage at all layers of traditional offline data warehouses and modern streaming data warehouses.
    
-   Pre-aggregate data to reduce storage costs and downstream compute load.
    
-   You can roll back to historical versions.
    
-   Filter data efficiently.
    
-   Support schema evolution.
    

## **Limits and recommendations**

-   The Paimon connector is supported only on Ververica Runtime (VVR) version 6.0.6 and later.
    
-   The following table shows the mapping between Paimon community versions and Realtime Compute for Apache Flink engine versions (VVR).
    
    **Apache Paimon version**
    
    **VVR version**
    
    1.3
    
    11.4
    
    1.2
    
    11.2 and 11.3
    
    1.1
    
    11
    
    1.0
    
    8.0.11
    
    0.9
    
    8.0.7, 8.0.8, 8.0.9, and 8.0.10
    
    0.8
    
    8.0.6
    
    0.7
    
    8.0.5
    
    0.6
    
    8.0.4
    
    0.6
    
    8.0.3
    
-   **Storage recommendation for concurrent writes**
    
    When multiple jobs concurrently update the same Paimon table, standard OSS storage (oss://) may cause rare commit conflicts or job failures because of atomicity limits on file operations.
    
    To ensure stable, continuous writes, use metadata or storage services that guarantee strong atomicity. We recommend using [Data Lake Formation (DLF)](/help/en/dlf/dlf-2-0/product-overview/what-is-data-lake-formation). DLF unifies Paimon metadata and storage management. Alternatively, use OSS-HDFS or HDFS.
    
-   **Parameter Setting Activation**
    
    After you change Paimon table configuration parameters, restart related jobs for the new settings to take effect. Running jobs cannot dynamically detect or load such changes.
    
-   **Physical cleanup delay after dropping partitions**
    
    When you run DROP PARTITION, the system **does not delete** underlying physical data files immediately.  
    This operation performs a logical deletion only. Paimon removes the partition’s metadata from the latest snapshot. Because Paimon supports time travel, historical snapshots retain references to the partition’s data files. Physical files are deleted only after all snapshots referencing the partition expire and are cleaned up by Paimon’s snapshot expiration mechanism.
    

## SQL

You can use the Paimon connector in SQL jobs as a source table or sink table.

### **Syntax**

-   If you create a Paimon table in the [Paimon Catalog](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs), omit the `connector` parameter. The syntax is as follows.
    
    ```
    CREATE TABLE `<YOUR-PAIMON-CATALOG>`.`<YOUR-DB>`.paimon_table (
      id BIGINT,
      data STRING,
      PRIMARY KEY (id) NOT ENFORCED
    ) WITH (
      ...
    );
    ```
    
    **Note**
    
    If you already created a Paimon table in the Paimon Catalog, use it directly without recreating it.
    
-   If you create a Paimon temporary table in another catalog, specify the connector parameter and the path to the Paimon table files. The syntax is as follows.
    
    ```
    CREATE TEMPORARY TABLE paimon_table (
      id BIGINT,
      data STRING,
      PRIMARY KEY (id) NOT ENFORCED
    ) WITH (
      'connector' = 'paimon',
      'path' = '<path-to-paimon-table-files>',
      'auto-create' = 'true', -- Creates files automatically if the path does not contain Paimon table data.
      ...
    );
    ```
    
    **Note**
    
    -   **Path example**: `'path' = 'oss://<bucket>/test/order.db/orders'`. Do not omit the `.db` suffix. Paimon uses this suffix to identify databases.
        
    -   Multiple jobs writing to one table must share the same path.
        
    -   Different paths mean different tables—even if they point to the same physical location. For example, `oss://b/test` and `oss://b/test/` differ only by a trailing slash but refer to different tables. Mismatched catalog configurations cause concurrent write conflicts, compaction failures, or data loss.
        
    

### **WITH parameters**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Notes**

connector

Table type.

String

No

None

-   Omit this parameter when creating a Paimon table in the Paimon Catalog.
    
-   Set this parameter to `paimon` when creating a Paimon temporary table in another catalog.
    

path

Table storage path.

String

No

None

-   Omit this parameter when creating a Paimon table in the Paimon Catalog.
    
-   Specify the directory where the table is stored on HDFS or OSS when creating a Paimon temporary table in another catalog.
    

auto-create

When creating a Paimon temporary table, automatically create files if the specified path does not contain Paimon table files.

Boolean

No

false

Valid values:

-   false (default): Returns an error if the path does not contain Paimon table files.
    
-   true: Flink creates Paimon table files automatically if the path does not exist.
    

file.format

Storage class for data files in the table.

String

No

parquet

Valid values:

-   orc
    
-   parquet
    
-   avro
    
-   lance (VVR 11.6 and later)
    

bucket

Number of buckets per partition.

Integer

No

1

Data written to the Paimon table is distributed across buckets based on the `bucket-key`.

**Note**

We recommend keeping bucket size under 5 GB.

bucket-key

Bucket key column.

String

No

None

Specify columns whose values determine how data is distributed across buckets.

Separate column names with English commas (,), for example, `'bucket-key' = 'order_id,cust_id'` will discretize the data based on the values of the order\_id and cust\_id columns.

**Note**

-   If omitted, Paimon uses the primary key to distribute data.
    
-   If no primary key is defined, Paimon uses all columns.
    

changelog-producer

Mechanism for producing incremental data.

String

No

none

Paimon can generate complete changelogs (with matching update\_before and update\_after records) for any input data stream. This helps downstream consumers process updates correctly. Valid values:

-   none (default): Does not generate additional changelog records. Downstream consumers can still read the Paimon table in streaming mode, but the changelog is incomplete (only update\_after records, no update\_before records).
    
-   Input: The input data stream is dual-written to an incremental data file to serve as incremental data.
    
-   full-compaction: Generates a complete changelog during each full compaction.
    
-   lookup: Generates a complete changelog before each snapshot commit.
    

For guidance on choosing a changelog producer, see [Changelog producer](#5a209930e1hva).

full-compaction.delta-commits

Maximum interval between full compactions.

Integer

No

None

This parameter sets how many snapshot commits occur before a full compaction runs.

lookup.cache-max-memory-size

Memory cache size for Paimon dimension tables.

String

No

256 MB

This setting controls both the dimension table cache size and the lookup changelog-producer cache size.

merge-engine

Mechanism for merging rows with the same primary key.

String

No

deduplicate

Valid values:

-   deduplicate: Keeps only the most recent row.
    
-   Partial update: Updates existing data that has the same primary key using non-null columns from the latest data and leaves other columns unchanged.
    
-   aggregation: Pre-aggregates data using specified aggregate functions.
    

For details about merge engines, see [Merge engine](#11820d80e11tv).

partial-update.ignore-delete

Whether to ignore delete (-D) messages.

Boolean

No

false

Valid values:

-   true: Ignores delete messages.
    
-   false: Does not ignore delete messages. Configure the sink’s handling of delete data using parameters such as [sequence.field](https://paimon.apache.org/docs/master/primary-key-table/sequence-rowkind/). Otherwise, the job may throw IllegalStateException or IllegalArgumentException.
    

**Note**

-   This parameter applies only in partial-update scenarios (`merge-engine = partial-update`) for VVR 8.0.6 and earlier.
    
-   For VVR 8.0.7 and later, this parameter works in all scenarios and behaves identically to the `ignore-delete` parameter. Use `ignore-delete` instead.
    
-   Evaluate whether delete messages match your expected job semantics before enabling this parameter. If they do not, throwing an error is safer.
    

ignore-delete

Whether to ignore delete (-D) messages.

Boolean

No

false

Same valid values as [partial-update.ignore-delete](#8988ab40f8o91).

**Note**

-   Supported only in VVR 8.0.7 and later.
    
-   Functionally identical to partial-update.ignore-delete. Use ignore-delete and avoid configuring both.
    

partition.default-name

Default partition name.

String

No

\_\_DEFAULT\_PARTITION\_\_

Used as the partition name when the partition column value is null or an empty string.

partition.expiration-check-interval

How often to check for expired partitions.

String

No

1h

For details, see [How to configure automatic partition expiration?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#61920fc0eba8h)

partition.expiration-time

Partition retention period.

String

No

None

A partition expires after this duration. By default, partitions never expire.

The duration is calculated from the partition value. For details, see [How to configure automatic partition expiration?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#61920fc0eba8h)

partition.timestamp-formatter

Convert a time string to a formatted timestamp.

String

No

None

Specifies the format used to extract partition age from partition values. For details, see [How to configure automatic partition expiration?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#61920fc0eba8h)

partition.timestamp-pattern

Format string to convert partition values to timestamp strings.

String

No

None

Specifies the format used to extract partition age from partition values. For details, see [How to configure automatic partition expiration?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#61920fc0eba8h)

scan.bounded.watermark

Stops reading from the Paimon source table when its watermark exceeds this value.

Long

No

None

None.

scan.mode

Consumer offset for the Paimon source table.

String

No

default

For details, see [How to configure the consumer offset for a Paimon source table?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#5f1269c0ebiq6)

scan.snapshot-id

Snapshot ID to start reading from.

Integer

No

None

For details, see [How to configure the consumer offset for a Paimon source table?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#5f1269c0ebiq6)

scan.timestamp-millis

Timestamp to start reading from.

Integer

No

None

For details, see [How to configure the consumer offset for a Paimon source table?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#5f1269c0ebiq6)

snapshot.num-retained.max

Maximum number of recent snapshots to retain.

Integer

No

2147483647

A snapshot expires if it meets either this limit or snapshot.time-retained, and also satisfies snapshot.num-retained.min.

snapshot.num-retained.min

Minimum number of recent snapshots to retain.

Integer

No

10

None.

snapshot.time-retained

How long a snapshot remains before expiring.

String

No

1h

A snapshot expires if it meets either this limit or snapshot.num-retained.max, and also satisfies snapshot.num-retained.min.

write-mode

Write mode for the Paimon table.

String

No

change-log

Valid values:

-   change-log: Supports insert, delete, and update operations based on the primary key.
    
-   append-only: A Paimon table accepts only inserts and does not support primary keys. This mode is more efficient than the change-log mode.
    

For details, see [Write mode](#9a2c03c0e1spf).

scan.infer-parallelism

Whether to infer parallelism for the Paimon source table automatically.

Boolean

No

true

Valid values:

-   true: Infers parallelism from the number of buckets.
    
-   false: Uses the default parallelism configured in VVP. In expert mode, uses the user-specified parallelism.
    

scan.parallelism

Parallelism for the Paimon source table.

Integer

No

None

**Note**

This parameter has no effect when **resource allocation mode** is set to Expert Mode on the **Deployment Details** > **Resource Configuration** tab.

sink.parallelism

Parallelism for the Paimon sink table.

Integer

No

None

**Note**

This parameter has no effect when **resource allocation mode** is set to Expert Mode on the **Deployment Details** > **Resource Configuration** tab.

sink.clustering.by-columns

Clustering columns for the Paimon sink table.

String

No

None

For [Paimon append-only tables (non-primary-key tables)](/help/en/flink/realtime-flink/use-cases/basic-concepts#98df94c7897gn), configure this parameter in batch jobs to enable clustering writes. Clustering improves query speed by grouping data by value ranges on specified columns.

Separate column names with commas (,). For example: `'col1,col2'`.

For details, see the [Apache Paimon documentation](https://paimon.apache.org/docs/master/flink/sql-write/#clustering:~:text=for%20more%20info.-,Clustering,-%23).

sink.delete-strategy

Validation strategy to ensure correct handling of retract (-D/-U) messages.

​​

Enum

No

NONE

Valid strategies and required sink behavior:

-   NONE (default): No validation.
    
-   IGNORE\_DELETE: The sink ignores -U and -D messages and does not retract.
    
-   NON\_PK\_FIELD\_TO\_NULL: The sink ignores -U messages. On receiving -D messages, it retains the primary key but retracts non-primary-key fields to null.
    
    This is useful for partial updates when multiple sinks write to the same table.
    
-   DELETE\_ROW\_ON\_PK: The sink ignores -U messages. On receiving -D messages, it deletes the row matching the primary key.
    
-   CHANGELOG\_STANDARD: The sink deletes the row matching the primary key on receiving both -U and -D messages.
    

**Note**

-   Supported only in VVR 8.0.8 and later.
    
-   The actual behavior depends on other parameters such as ignore-delete and merge-engine. This parameter validates whether those settings align with your chosen strategy. If they do not, validation fails and the error message guides you to fix them.
    

**Note**

For more configuration options, see the [Apache Paimon documentation](https://paimon.apache.org/docs/master/maintenance/configurations/).

### **Feature details**

#### **Data freshness and consistency guarantees**

The Paimon sink table uses the two-phase commit protocol to commit data during each checkpoint of a Flink job. Therefore, the data freshness corresponds to the checkpoint interval of the Flink job. Each commit generates up to two snapshots.

When two Flink jobs simultaneously write to the same Paimon table, serializable consistency is guaranteed if their data is written to different buckets. If their data is written to the same bucket, however, only snapshot isolation consistency can be guaranteed. This means the table's data may be a mix of results from both jobs, but no data loss will occur.

#### **Merge engine**

When a Paimon sink table receives multiple rows with the same primary key, it merges them into one row to preserve uniqueness. Set the `merge-engine` parameter to control how merging works. The following table describes each option.

**Merge engine**

**Details**

Deduplicate

Deduplicate is the default merge engine. For rows with the same primary key, the Paimon sink table keeps only the most recent row and discards the rest.

**Note**

If the most recent row is a delete message, all rows with that primary key are discarded.

Partial update

With partial update, you can incrementally update data across multiple messages. New rows with the same primary key overwrite existing ones, but null columns remain unchanged.

For example, suppose the Paimon sink table receives these rows in order:

-   <1, 23.0, 10, NULL>
    
-   <1, NULL, NULL, 'This is a book'>
    
-   <1, 25.2, NULL, NULL>
    

If the first column is the primary key, the final result is <1, 25.2, 10, 'This is a book'>.

**Note**

-   To stream-read the results of a partial-update, you must set the `changelog-producer` parameter to lookup or full-compaction.
    
-   Partial update does not handle delete messages. Set `partial-update.ignore-delete` to ignore them.
    

Aggregation

In some cases, you only need aggregated values. With aggregation, Paimon merges rows with the same primary key using your specified aggregate functions. For each non-primary-key column, define an aggregate function using `fields.<field-name>.aggregate-function`. Otherwise, Paimon uses `last_non_null_value`. For example:

```
CREATE TABLE MyTable (
  product_id BIGINT,
  price DOUBLE,
  sales BIGINT,
  PRIMARY KEY (product_id) NOT ENFORCED
) WITH (
  'merge-engine' = 'aggregation',
  'fields.price.aggregate-function' = 'max',
  'fields.sales.aggregate-function' = 'sum'
);
```

The price column aggregates using max; sales uses sum. Given inputs <1, 23.0, 15> and <1, 30.2, 20>, the result is <1, 30.2, 35>. Supported aggregate functions and data types:

-   sum: DECIMAL, TINYINT, SMALLINT, INTEGER, BIGINT, FLOAT, DOUBLE
    
-   min and max: DECIMAL, TINYINT, SMALLINT, INTEGER, BIGINT, FLOAT, DOUBLE, DATE, TIME, TIMESTAMP, TIMESTAMP\_LTZ
    
-   last\_value and last\_non\_null\_value: All types
    
-   listagg: STRING
    
-   bool\_and and bool\_or: BOOLEAN
    

**Note**

-   Only sum supports retract and delete operations. Other functions do not. To ignore retracts for specific columns, set `'fields.${field_name}.ignore-retract'='true'`.
    
-   To stream-read the aggregation results, you must set the `changelog-producer` parameter to `lookup` or `full-compaction`.
    

#### **Incremental data generation mechanism**

Set the changelog-producer parameter to generate complete changelogs (with matching update\_before and update\_after records) for any input data stream. The following table lists all available changelog producers. For more detail, see the [Apache Paimon documentation](https://paimon.apache.org/docs/master/primary-key-table/changelog-producer/).

**Mechanism**

**Details**

None

When `changelog-producer` is set to \`none\` (the default value), the downstream Paimon source table can only see the latest state of the data for the same primary key. However, this latest state does not provide downstream consumers with the complete incremental data that is required for correct calculations. This is because a consumer can only determine whether the corresponding data was deleted or what the latest data is, but cannot know what the data was before the change.

For example, suppose a downstream consumer calculates the sum of a column. If it sees only the latest value 5, it cannot decide how to update the sum. If the previous value was 4, it should add 1. If it was 6, it should subtract 1. Consumers sensitive to update\_before data should avoid none. But other producers incur performance overhead.

**Note**

If your downstream consumer—such as a database—does not need update\_before data, none is acceptable. Choose based on your needs.

Input

Set `changelog-producer` to input, and the Paimon sink table writes the input data stream twice to incremental data files as incremental data.

So use this only when the input stream itself is a complete changelog—such as CDC data.

Lookup

When you set `changelog-producer` to \`lookup\`, the Paimon sink table uses a point query mechanism similar to that of a dimension table to generate the complete incremental data for the current snapshot before each snapshot is committed. This mechanism can produce complete incremental data regardless of whether the input data is complete.

Compared to Full Compaction, Lookup delivers fresher changelogs but consumes more resources.

We recommend this feature for incremental data that requires high freshness, such as minute-level updates.

Full Compaction

After you set `changelog-producer` to \`full-compaction\`, the Paimon sink table generates complete incremental data during each full compaction. This mechanism generates complete incremental data regardless of whether the input data is already complete incremental data. The full compaction interval is specified by the `full-compaction.delta-commits` parameter.

Compared to Lookup, Full Compaction delivers less-fresh changelogs but uses fewer resources because it piggybacks on existing compaction work.

This approach is recommended when the freshness requirement for incremental data is not strict, such as when hourly updates are acceptable.

#### **Write mode**

Paimon tables support the following write modes.

**Mode**

**Details**

Change-log

Change-log is the default write mode. It supports insert, delete, and update operations based on the primary key. You can also use merge engines and changelog producers with this mode.

Append-only

Append-only mode supports only inserts and does not use primary keys. It is more efficient than change-log mode. Use it as a message queue alternative when moderate data freshness is acceptable—such as minute-level.

For details, see the [Apache Paimon documentation](https://paimon.apache.org/docs/master/maintenance/configurations/). When using append-only mode, note the following:

-   Set the `bucket-key` parameter based on your needs. Otherwise, Paimon distributes data across buckets using all columns, which reduces computational efficiency.
    
-   Append-only mode preserves output order to some extent. Output order is determined as follows:
    
    1.  If two rows belong to different partitions, the row from the partition with the smaller partition value appears first—if `scan.plan-sort-partition` is set. Otherwise, the row from the earlier-created partition appears first.
        
    2.  If two rows belong to the same partition and same bucket, the earlier-written row appears first.
        
    3.  If two rows belong to the same partition but different buckets, output order is not guaranteed because buckets are processed by separate threads.
        

#### **Target for CTAS and CDAS**

Paimon tables support real-time synchronization of single tables or entire databases. Schema changes in upstream tables sync to Paimon tables in real time. For details, see [Manage Paimon tables](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#6c156c3005nyh) and [Manage Paimon Catalog](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#e4ba2b20057t0).

## Data ingestion

You can use the Paimon connector in YAML-based data ingestion jobs as a sink.

### **Syntax**

```
sink:
  type: paimon
  name: Paimon Sink
  catalog.properties.metastore: filesystem
  catalog.properties.warehouse: /path/warehouse
```

### **Configuration options**

Parameter

Description

Required

Data type

Default value

Notes

type

Connector type.

Yes

STRING

None

Fixed value: `paimon`.

name

Sink name.

No

STRING

None

Name of the sink.

catalog.properties.metastore

Type of Paimon Catalog.

No

STRING

filesystem

Valid values:

-   filesystem (default)
    
-   rest (supports only DLF, not DLF-Legacy)
    

catalog.properties.\*

Parameters for creating a Paimon Catalog.

No

STRING

None

For details, see [Manage Paimon Catalog](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs).

table.properties.\*

Parameters for creating a Paimon table.

No

STRING

None

For details, see [Paimon table options](https://paimon.apache.org/docs/master/maintenance/configurations/#coreoptions).

catalog.properties.warehouse

Root directory for file storage.

No

STRING

None

This parameter takes effect only when `catalog.properties.metastore` is set to filesystem.

commit.user-prefix

Username prefix used when committing data files.

No

STRING

None

**Note**

Use different usernames for different jobs to help identify conflicting jobs during commit failures.

partition.key

Partition field for each partitioned table.

No

STRING

None

Different tables are separated by `;`, different fields are separated by `,`, and tables and fields are separated by `:`. For example: `testdb.table1:id1,id2;testdb.table2:name`.

sink.cross-partition-upsert.tables

Tables that require cross-partition upserts (primary key does not include all partition fields).

No

STRING

None

Applies to tables requiring cross-partition upserts.

-   Format: Separate table names with semicolons `;`.
    
-   Performance tip: This operation consumes significant compute resources. Create dedicated jobs for these tables.
    

**Important**

-   List all qualifying tables. Omitting a table causes duplicate data.
    

sink.commit.parallelism

Parallelism for the commit operator.

No

INTEGER

None

Increase this value to improve performance when the commit operator becomes a bottleneck.

Supported only in VVR 11.6 and later.

**Note**

Setting this parameter changes operator parallelism. When restarting stateful jobs, enable AllowNonRestoredState.

### **Usage examples**

Configure the Paimon connector as a data ingestion sink based on your Paimon Catalog type.

-   Example configuration for Paimon Catalog as a filesystem, writing to Alibaba Cloud OSS:
    
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
      type: paimon
      name: Paimon Sink
      catalog.properties.metastore: filesystem
      catalog.properties.warehouse: oss://default/test
      catalog.properties.fs.oss.endpoint: oss-cn-beijing-internal.aliyuncs.com
      catalog.properties.fs.oss.accessKeyId: xxxxxxxx
      catalog.properties.fs.oss.accessKeySecret: xxxxxxxx
    ```
    
    For meanings of parameters prefixed with catalog.properties, see [Create a Paimon Filesystem Catalog](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#e450ff6314hgj).
    
-   Example: REST catalog writing to [Alibaba Cloud Data Lake Formation](/help/en/dlf/dlf-2-0/product-overview/what-is-data-lake-formation).
    
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
      type: paimon
      name: Paimon Sink
      catalog.properties.metastore: rest
      catalog.properties.uri: dlf_uri
      catalog.properties.warehouse: your_warehouse
      catalog.properties.token.provider: dlf
      # (Optional) Enable deletion vectors to improve read performance.
      table.properties.deletion-vectors.enabled: true
    ```
    
    For meanings of parameters prefixed with catalog.properties, see [Flink CDC catalog configuration parameters](/help/en/dlf/dlf-2-0/user-guide/integrate-flink-cdc-with-dlf-paimon-catalog#fdcdb33c03txp).
    

### **Schema evolution**

Paimon supports the following schema evolution events when used as a data ingestion sink:

-   CREATE TABLE EVENT
    
-   ADD COLUMN EVENT
    
-   ALTER COLUMN TYPE EVENT (does not support changing primary key column types)
    
-   RENAME COLUMN EVENT
    
-   DROP COLUMN EVENT
    
-   TRUNCATE TABLE EVENT
    
-   DROP TABLE EVENT
    

**Note**

If the downstream Paimon table already exists, Paimon uses the existing schema for writes and does not attempt to recreate the table.

## **FAQ**

-   [How do I configure the consumer offset for a Paimon source table?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#5f1269c0ebiq6)
    
-   [How do I configure automatic partition expiration?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#61920fc0eba8h)
    
-   [Why does my Paimon job fail with “Heartbeat of TaskManager timed out”?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#0a63770b24dpj)
    
-   [Why does my Paimon job fail with “Sink materializer must not be used with Paimon sink”?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#430ecae0852xi)
    
-   [Why does my Paimon job fail with “File deletion conflicts detected” or “LSM conflicts detected”?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#5085269c564co)
    
-   [Why does my Paimon job fail with “File xxx not found, Possible causes”?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#0676aa9fbe1on)
    
-   [How do I handle large numbers of Paimon files in OSS?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#6bb3224964i6n)
    
-   [Is Paimon connector data visibility related to checkpoint intervals?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#8ece175dc3022)
