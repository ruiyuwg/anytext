This topic describes the best practices for using a Change Data Capture (CDC) YAML data ingestion job to write real-time data to a data warehouse.

## Real-time synchronization from Flink CDC to a Hologres data warehouse

Using a CDC YAML data ingestion job to synchronize data to Hologres for building a real-time data warehouse lets you fully leverage the powerful real-time processing capabilities of Flink and the features of Hologres, such as binary logging, row-column hybrid storage, and strong resource isolation. This combination enables efficient and scalable real-time data processing and analysis.

### **Real-time synchronization from MySQL to a Hologres data warehouse**

The following code shows the most basic CDC YAML data ingestion job for synchronizing an entire MySQL database to Hologres:

```
source:
  type: mysql
  name: MySQL Source
  hostname: localhost
  port: 3306
  username: username
  password: password
  tables: holo_test.\.*
  server-id: 8601-8604
  # (Optional) Synchronize table comments and field comments.
  include-comments.enabled: true
  # (Optional) Prioritize the distribution of unbounded shards to prevent potential TaskManager OutOfMemory errors.
  scan.incremental.snapshot.unbounded-chunk-first.enabled: true
  # (Optional) Prioritize the distribution of unbounded shards to prevent potential TaskManager OutOfMemory errors.
  scan.incremental.snapshot.unbounded-chunk-first.enabled: true
  # (Optional) Enable parsing filters to accelerate data reads.
  scan.only.deserialize.captured.tables.changelog.enabled: true  

sink:
  type: hologres
  name: Hologres Sink
  endpoint: ****.hologres.aliyuncs.com:80
  dbname: cdcyaml_test
  username: ${secret_values.holo-username}
  password: ${secret_values.holo-password}
  sink.type-normalize-strategy: BROADEN
```

**Note**

-   We recommend that you set include-comments.enabled in the MySQL Source to synchronize table comments and field comments when the job starts for the first time. For more information, see [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/).
    
-   We recommend that you set scan.incremental.snapshot.unbounded-chunk-first.enabled in the MySQL Source to prevent potential TaskManager OutOfMemory errors when the job starts for the first time. For more information, see [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/).
    

#### **Use a more tolerant type mapping**

The Hologres connector cannot process column type change events, but it supports multiple type mapping relationships. To better support changes in the data source, you can map multiple MySQL data types to broader Hologres types. This lets you skip unnecessary type change events and ensures that the job runs as expected. You can change the mapping using the `sink.type-normalize-strategy` configuration item. The default value is STANDARD. For more information, see [Hologres connector type mapping for data ingestion YAML jobs](/help/en/flink/realtime-flink/developer-reference/hologres-yaml-connector#aa228ff323whu).

For example, you can use ONLY\_BIGINT\_OR\_TEXT to map types only to the int8 and text types in Hologres. In this case, if the type of a column in MySQL changes from INT to BIGINT, Hologres maps both MySQL types to the int8 type. As a result, the job does not report an error for an unsupported type conversion.

```
source:
  type: mysql
  name: MySQL Source
  hostname: localhost
  port: 3306
  username: username
  password: password
  tables: holo_test.\.*
  server-id: 8601-8604
  # (Optional) Synchronize table comments and field comments.
  include-comments.enabled: true
  # (Optional) Prioritize the distribution of unbounded shards to prevent potential TaskManager OutOfMemory errors.
  scan.incremental.snapshot.unbounded-chunk-first.enabled: true
  # (Optional) Prioritize the distribution of unbounded shards to prevent potential TaskManager OutOfMemory errors.
  scan.incremental.snapshot.unbounded-chunk-first.enabled: true
  # (Optional) Enable parsing filters to accelerate data reads.
  scan.only.deserialize.captured.tables.changelog.enabled: true

sink:
  type: hologres
  name: Hologres Sink
  endpoint: ****.hologres.aliyuncs.com:80
  dbname: cdcyaml_test
  username: ${secret_values.holo-username}
  password: ${secret_values.holo-password}
  sink.type-normalize-strategy: ONLY_BIGINT_OR_TEXT
```

#### **Write data to partitioned tables**

When you use the Hologres connector as the sink in a CDC YAML data ingestion job, you can write data to partitioned tables. For more information, see [Write data to partitioned tables](/help/en/flink/realtime-flink/developer-reference/hologres-yaml-connector#f34b8a70c1u1j).

### **Real-time synchronization from Kafka to a Hologres data warehouse**

[Implement real-time distribution](/help/en/flink/realtime-flink/use-cases/real-time-data-ingestion-into-the-message-queue) describes a solution for storing MySQL data in Kafka. You can then use a data ingestion YAML file to synchronize the data to Hologres to build a real-time data warehouse.

Assume that a Kafka topic named inventory contains data from two tables, customers and products, in the debezium-json format. The following job can synchronize the data from the two tables to the corresponding tables in Hologres.

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
  type: hologres
  name: Hologres Sink
  endpoint: ****.hologres.aliyuncs.com:80
  dbname: cdcyaml_test
  username: ${secret_values.holo-username}
  password: ${secret_values.holo-password}
  sink.type-normalize-strategy: ONLY_BIGINT_OR_TEXT
 
transform:
  - source-table: \.*.\.*
    projection: \*
    primary-keys: id
```

**Note**

-   The Kafka data source supports reading data in the following formats: json, canal-json, and debezium-json (default).
    
-   If the data format is debezium-json, you must manually add a primary key to the table using a transform rule:
    
    ```
    transform:
      - source-table: \.*.\.*
        projection: \*
        primary-keys: id
    ```
    
-   If a single table's data is distributed across multiple partitions, or if data from sharded tables in different partitions needs to be merged, you must set the debezium-json.distributed-tables or canal-json.distributed-tables configuration item to true.
    
-   The Kafka data source supports multiple schema inference policies. You can set a policy using the schema.inference.strategy configuration item. For more information about schema inference and change synchronization policies, see [Message Queue for Kafka](/help/en/flink/realtime-flink/developer-reference/kafka-connector/#7326c43d07z2u).
