This topic describes the best practices for using a Change Data Capture (CDC) data ingestion YAML job to write real-time data to Alibaba Cloud Data Lake Formation (DLF).

Alibaba Cloud Data Lake Formation (DLF) is a fully managed platform that provides unified metadata, data storage, and data management. DLF offers features such as metadata management, permission management, and storage optimization. For more information, see [What is Data Lake Formation?](/help/en/dlf/dlf-2-0/product-overview/what-is-data-lake-formation).

Data ingestion jobs can use the Paimon Catalog of DLF as a destination. You can use data ingestion jobs to ingest entire large-scale databases into the data lake.

## Synchronize an entire MySQL database to DLF

The following CDC YAML job synchronizes an entire MySQL database to DLF:

```
source:
  type: mysql
  name: MySQL Source
  hostname: ${mysql.hostname}
  port: ${mysql.port}
  username: ${mysql.username}
  password: ${mysql.password}
  tables: mysql_test.\.*
  server-id: 8601-8604
  # (Optional) Synchronize data from tables newly created in the incremental phase.
  scan.binlog.newly-added-table.enabled: true
  # (Optional) Synchronize table and field comments.
  include-comments.enabled: true
  # (Optional) Prioritize the distribution of unbounded chunks to prevent potential TaskManager OutOfMemory issues.
  scan.incremental.snapshot.unbounded-chunk-first.enabled: true
  # (Optional) Enable parsing filters to accelerate reads.
  scan.only.deserialize.captured.tables.changelog.enabled: true

sink:
  type: paimon
  # The Metastore type. Set to rest.
  catalog.properties.metastore: rest
  # The token provider. Set to dlf.
  catalog.properties.token.provider: dlf
  # The URI to access the DLF Rest Catalog Server. The format is http://[region-id]-vpc.dlf.aliyuncs.com, for example, http://cn-hangzhou-vpc.dlf.aliyuncs.com.
  catalog.properties.uri: dlf_uri
  # The name of the DLF Catalog.
  catalog.properties.warehouse: your_warehouse
  # (Optional) Enable deletion vectors to improve read performance.
  table.properties.deletion-vectors.enabled: true
```

**Note**

-   For more information about MySQL source parameters, see [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/).
    
-   Add the deletion-vectors.enabled configuration to the table creation parameters. This significantly improves read performance with minimal impact on write and update performance. This allows for near-real-time updates and high-speed queries.
    
-   Because DLF provides an automatic file merging feature, do not add file merging or bucket-related parameters, such as bucket and num-sorted-run.compaction-trigger, to the table creation parameters.
    

### **Write to partitioned tables in DLF**

The source table for a data ingestion job typically does not include partition field information. To write to a partitioned descendant table, you must configure partition fields using the `partition-keys` setting in the [Flink CDC Data Ingestion Job Development Reference](/help/en/flink/realtime-flink/developer-reference/data-ingestion-development-reference/#860c4971ccdkw), as described in the [Flink CDC Data Ingestion Job Development Reference](/help/en/flink/realtime-flink/developer-reference/data-ingestion-development-reference/#355f561dc1cts). The following example shows how to configure this setting:

```
source:
  type: mysql
  name: MySQL Source
  hostname: ${mysql.hostname}
  port: ${mysql.port}
  username: ${mysql.username}
  password: ${mysql.password}
  tables: mysql_test.\.*
  server-id: 8601-8604
  # (Optional) Synchronize data from tables newly created in the incremental phase.
  scan.binlog.newly-added-table.enabled: true
  # (Optional) Synchronize table and field comments.
  include-comments.enabled: true
  # (Optional) Prioritize the distribution of unbounded chunks to prevent potential TaskManager OutOfMemory issues.
  scan.incremental.snapshot.unbounded-chunk-first.enabled: true
  # (Optional) Enable parsing filters to accelerate reads.
  scan.only.deserialize.captured.tables.changelog.enabled: true

sink:
  type: paimon
  catalog.properties.metastore: rest
  catalog.properties.uri: dlf_uri
  catalog.properties.warehouse: your_warehouse
  catalog.properties.token.provider: dlf
  # (Optional) Enable deletion vectors to improve read performance.
  table.properties.deletion-vectors.enabled: true

transform:
  - source-table: mysql_test.tbl1
    # (Optional) Set partition fields.  
    partition-keys: id,pt
  - source-table: mysql_test.tbl2
    partition-keys: id,pt
```

### **Write to Append-Only tables in DLF**

Source tables in data ingestion jobs contain complete change data. To implement soft deletes by converting delete operations to insert operations in the destination table, see [Flink CDC data ingestion job development reference](/help/en/flink/realtime-flink/developer-reference/data-ingestion-development-reference/#860c4971ccdkw). The following example shows the configuration:

```
source:
  type: mysql
  name: MySQL Source
  hostname: ${mysql.hostname}
  port: ${mysql.port}
  username: ${mysql.username}
  password: ${mysql.password}
  tables: mysql_test.\.*
  server-id: 8601-8604
  # (Optional) Synchronize data from tables newly created in the incremental phase.
  scan.binlog.newly-added-table.enabled: true
  # (Optional) Synchronize table and field comments.
  include-comments.enabled: true
  # (Optional) Prioritize the distribution of unbounded chunks to prevent potential TaskManager OutOfMemory issues.
  scan.incremental.snapshot.unbounded-chunk-first.enabled: true
  # (Optional) Enable parsing filters to accelerate reads.
  scan.only.deserialize.captured.tables.changelog.enabled: true

sink:
  type: paimon
  catalog.properties.metastore: rest
  catalog.properties.uri: dlf_uri
  catalog.properties.warehouse: your_warehouse
  catalog.properties.token.provider: dlf
  # (Optional) Enable deletion vectors to improve read performance.
  table.properties.deletion-vectors.enabled: true
  
transform:
  - source-table: mysql_test.tbl1
    # (Optional) Set partition fields.
    partition-keys: id,pt
    # (Optional) Implement soft delete.
    projection: \*, __data_event_type__ AS op_type
    converter-after-transform: SOFT_DELETE
  - source-table: mysql_test.tbl2
    # (Optional) Set partition fields.
    partition-keys: id,pt
    # (Optional) Implement soft delete.
    projection: \*, __data_event_type__ AS op_type
    converter-after-transform: SOFT_DELETE
```

**Note**

-   Add \`\_\_data\_event\_type\` to the projection to write the change type as a new field to the destination table. Set \`converter-after-transform\` to \`SOFT\_DELETE\` to convert delete operations to insert operations. This ensures that all change operations are completely recorded in the downstream table. For more information, see [Flink CDC data ingestion job development reference](/help/en/flink/realtime-flink/developer-reference/data-ingestion-development-reference/#860c4971ccdkw).
    

## Synchronize Kafka CDC data to DLF in real time

You can synchronize MySQL data to Kafka in real time using [real-time distribution](/help/en/flink/realtime-flink/use-cases/real-time-data-ingestion-into-the-message-queue). Then, you can configure a CDC YAML job to synchronize the Kafka data to DLF.

Assume that the \`inventory\` topic in Kafka stores data for two tables, \`customers\` and \`products\`, and the data format is Debezium JSON. The following example job synchronizes the data from these two tables to their corresponding destination tables in DLF:

```
source:
  type: kafka
  name: Kafka Source
  properties.bootstrap.servers: ${kafka.bootstrap.servers}
  topic: inventory
  scan.startup.mode: earliest-offset
  value.format: debezium-json
  debezium-json.distributed-tables: true

sink:
  type: paimon
  catalog.properties.metastore: rest
  catalog.properties.uri: dlf_uri
  catalog.properties.warehouse: your_warehouse
  catalog.properties.token.provider: dlf
  # (Optional) Enable deletion vectors to improve read performance.
  table.properties.deletion-vectors.enabled: true

# Debezium JSON does not include primary key information. Add primary keys to the table.  
transform:
  - source-table: \.*.\.*
    projection: \*
    primary-keys: id
```

**Note**

-   The Kafka data source supports reading data in \`canal-json\`, \`debezium-json\` (default), and \`json\` formats.
    
-   If the Kafka message format changes, the changes, such as new fields, are automatically synchronized to the Paimon table schema. This improves the flexibility of data synchronization.
    
-   If the data format is \`debezium-json\`, you must manually add primary keys to the table using a transform rule because \`debezium-json\` messages do not record primary key information:
    
    ```
    transform:
      - source-table: \.*.\.*
        projection: \*
        primary-keys: id
    ```
    
-   If a single table's data is distributed across multiple partitions, or to merge tables from different partitions using sharding, set the debezium-json.distributed-tables or canal-json.distributed-tables configuration item to true.
    
-   The Kafka data source supports multiple schema inference policies. You can set the policy using the schema.inference.strategy configuration item. For more information about schema inference and change synchronization policies, see [Message Queue for Kafka](/help/en/flink/realtime-flink/developer-reference/kafka-connector/#7326c43d07z2u).
