This topic describes the table types and connectors that Realtime Compute for Apache Flink supports.

## **Table type definitions**

Realtime Compute for Apache Flink uses Flink SQL to define tables that map to upstream and downstream storage. You can also use the Datastream API to connect to storage and perform read and write operations. The following Flink SQL table types are supported:

-   **Source table**: The entry point for a data stream. It continuously reads raw event data from external systems, such as Kafka or MySQL CDC.
    
-   **Dimension table**: A reference table used to enrich streaming data. It typically uses a JOIN operation to associate static or infrequently updated dimension information, such as user or product details.
    
-   **Sink table**: The exit point for data processing. It writes computed results, such as aggregated or joined data, to a destination system, such as a data warehouse, database, or message queue.
    

## **Supported connectors**

**Relational databases**

-   [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/)
    
-   [ApsaraDB RDS for MySQL](/help/en/flink/realtime-flink/developer-reference/apsaradb-rds-for-mysql-connector)
    
-   [PolarDB for PostgreSQL (compatible with Oracle) 1.0](/help/en/flink/realtime-flink/developer-reference/polardb-for-postgresql-compatible-with-oracle-1-0-connector)
    
-   [SelectDB](/help/en/flink/realtime-flink/developer-reference/selectdb)
    
-   [OceanBase (public preview)](/help/en/flink/realtime-flink/developer-reference/oceanbase-connector)
    
-   [Postgres CDC (public preview)](/help/en/flink/realtime-flink/developer-reference/postgresql-cdc-connector/)
    

**NoSQL databases**

-   [ApsaraDB for HBase](/help/en/flink/realtime-flink/developer-reference/apsaradb-for-hbase-connector)
    
-   [MongoDB](/help/en/flink/realtime-flink/developer-reference/mongodb-connector)
    
-   [Tablestore (OTS)](/help/en/flink/realtime-flink/developer-reference/tablestore-connector)
    
-   [Lindorm](/help/en/flink/realtime-flink/developer-reference/lindorm-connector)
    
-   [Milvus (public preview)](/help/en/flink/realtime-flink/developer-reference/milvus-connector-public-preview)
    

**Message queues**

-   [ApsaraMQ for Kafka](/help/en/flink/realtime-flink/developer-reference/kafka-connector/)
    
-   [Upsert Kafka](/help/en/flink/realtime-flink/developer-reference/upsert-kafka-connector)
    
-   [ApsaraMQ for RocketMQ](/help/en/flink/realtime-flink/developer-reference/apsaramq-for-rocketmq-connector)
    
-   [DataHub](/help/en/flink/realtime-flink/developer-reference/datahub-connector)
    

**Data warehouses**

-   [StarRocks](/help/en/flink/realtime-flink/developer-reference/starrocks-connector)
    
-   [Hologres](/help/en/flink/realtime-flink/developer-reference/hologres-connector/)
    
-   [AnalyticDB for MySQL 3.0](/help/en/flink/realtime-flink/developer-reference/analyticdb-for-mysql-v3-0-connector)
    
-   [AnalyticDB for PostgreSQL](/help/en/flink/realtime-flink/developer-reference/analyticdb-for-postgresql-connector)
    
-   [ClickHouse](/help/en/flink/realtime-flink/developer-reference/clickhouse-connector)
    
-   [Iceberg](/help/en/flink/realtime-flink/developer-reference/apache-iceberg-connector)
    

**Data lakes**

-   [Paimon streaming data lakehouse](/help/en/doc-detail/2261190.html)
    
-   [MaxCompute](/help/en/flink/realtime-flink/developer-reference/maxcompute-connector)
    
-   [Hudi (being deprecated)](/help/en/flink/realtime-flink/developer-reference/hudi-connector)
    

**Log and object storage services**

-   [Simple Log Service (SLS)](/help/en/flink/realtime-flink/developer-reference/log-service-connector)
    
-   [Object Storage Service (OSS)](/help/en/flink/realtime-flink/developer-reference/oss-connector)
    

**Tools and debugging**

-   [Generating fake data with Faker](/help/en/flink/realtime-flink/developer-reference/faker-connector)
    
-   [Datagen](/help/en/flink/realtime-flink/developer-reference/datagen-connector)
    
-   [Blackhole](/help/en/flink/realtime-flink/developer-reference/blackhole-connector)
    
-   [Print](/help/en/flink/realtime-flink/developer-reference/print-connector)
    

**Key-value and time series databases**

-   [Tair (Redis Open-Source Edition)](/help/en/flink/realtime-flink/developer-reference/tair-redis-oss-compatible-connector)
    
-   [Tair (Enterprise Edition)](/help/en/flink/realtime-flink/developer-reference/tair-connector)
    
-   [Time Series Database for InfluxDB](/help/en/flink/realtime-flink/developer-reference/tsdb-for-influxdb-connector)
    
-   [Elasticsearch](/help/en/flink/realtime-flink/developer-reference/elasticsearch-connector)
    

**General**

-   [JDBC](/help/en/flink/realtime-flink/developer-reference/jdbc-connector)
    
-   [CDC Community Edition](/help/en/flink/realtime-flink/developer-reference/cdc-connector)
    

## **Connector support details**

**Connector**

**Supported Types**

**Execution mode**

**API type**

**Supports updates or deletions to sink table data**

**Source table**

**Dimension table**

**Sink table**

[MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/)

**Note**

Supports connections to ApsaraDB RDS for MySQL, PolarDB for MySQL, and self-managed MySQL.

√

√

√

Streaming

SQL, DataStream, and YAML for data ingestion

Yes

[Hologres](/help/en/flink/realtime-flink/developer-reference/hologres-connector/)

√

√

√

Streaming and batch

SQL, DataStream, and YAML for data ingestion

Yes

[ApsaraMQ for Kafka](/help/en/flink/realtime-flink/developer-reference/kafka-connector/)

√

×

√

Streaming

SQL, DataStream, and YAML for data ingestion

Sink tables only support data insertion, not updates or deletions.

[MaxCompute](/help/en/flink/realtime-flink/developer-reference/maxcompute-connector)

√

√

√

Streaming and batch

SQL and DataStream

Data can be inserted into a sink table, but it cannot be updated or deleted.

[Streaming Data Lakehouse Paimon](/help/en/doc-detail/2261190.html)

√

√

√

Streaming and batch

SQL and YAML for data ingestion

Yes

[Simple Log Service (SLS)](/help/en/flink/realtime-flink/developer-reference/log-service-connector)

√

×

√

Streaming

SQL and DataStream

You can only insert data into a sink table. You cannot update or delete data.

[StarRocks](/help/en/flink/realtime-flink/developer-reference/starrocks-connector)

√

√

√

Streaming and batch

SQL, DataStream, and YAML for data ingestion

Yes

[DataHub](/help/en/flink/realtime-flink/developer-reference/datahub-connector)

√

×

√

Streaming and batch

SQL and DataStream

The sink table supports inserting data, but not updating or deleting data.

[MongoDB](/help/en/flink/realtime-flink/developer-reference/mongodb-connector)

√

√

√

Streaming

SQL and DataStream

Yes

[JDBC](/help/en/flink/realtime-flink/developer-reference/jdbc-connector)

√

√

√

Streaming and batch

SQL

Yes

[Object Storage Service (OSS)](/help/en/flink/realtime-flink/developer-reference/oss-connector)

√

×

√

Streaming and batch

SQL and DataStream

A sink table supports only insert operations. It does not support update or delete operations.

[ApsaraDB RDS for MySQL](/help/en/flink/realtime-flink/developer-reference/apsaradb-rds-for-mysql-connector)

**Note**

The ApsaraDB RDS for MySQL connector will no longer be supported. Use the MySQL connector instead.

×

√

√

Streaming and batch

SQL

Yes

[ApsaraMQ for RocketMQ](/help/en/flink/realtime-flink/developer-reference/apsaramq-for-rocketmq-connector)

√

×

√

Streaming

SQL and DataStream

The sink table supports inserts, but not updates or deletes.

[Lindorm](/help/en/flink/realtime-flink/developer-reference/lindorm-connector)

×

√

√

Streaming

SQL

Yes

[Tair (Redis Open-Source Edition)](/help/en/flink/realtime-flink/developer-reference/tair-redis-oss-compatible-connector)

×

√

√

Streaming

SQL

Yes

[Tair (Enterprise Edition)](/help/en/flink/realtime-flink/developer-reference/tair-connector)

×

×

√

Streaming

SQL

Yes

[ApsaraDB for HBase](/help/en/flink/realtime-flink/developer-reference/apsaradb-for-hbase-connector)

×

√

√

Streaming

SQL

Yes

[AnalyticDB for MySQL 3.0](/help/en/flink/realtime-flink/developer-reference/analyticdb-for-mysql-v3-0-connector)

√

√

√

Streaming and batch

SQL

Yes

[AnalyticDB for PostgreSQL](/help/en/flink/realtime-flink/developer-reference/analyticdb-for-postgresql-connector)

×

√

√

Streaming and batch

SQL

Yes

[PolarDB for PostgreSQL (compatible with Oracle) 1.0](/help/en/flink/realtime-flink/developer-reference/polardb-for-postgresql-compatible-with-oracle-1-0-connector)

×

×

√

Streaming and batch

SQL

Yes

[Upsert Kafka](/help/en/flink/realtime-flink/developer-reference/upsert-kafka-connector)

√

×

√

Streaming

SQL and YAML for data ingestion

Yes

[Elasticsearch](/help/en/flink/realtime-flink/developer-reference/elasticsearch-connector)

√

√

√

Streaming and batch

SQL and DataStream

Yes

[ClickHouse](/help/en/flink/realtime-flink/developer-reference/clickhouse-connector)

×

×

√

Streaming and batch

SQL

Yes

[Tablestore (OTS)](/help/en/flink/realtime-flink/developer-reference/tablestore-connector)

√

√

√

Streaming

SQL

Yes

[SelectDB](/help/en/flink/realtime-flink/developer-reference/selectdb)

×

×

√

Streaming and batch

DataStream and SQL

Yes

[Time Series Database for InfluxDB](/help/en/flink/realtime-flink/developer-reference/tsdb-for-influxdb-connector)

×

×

√

Streaming

SQL

No

[Postgres CDC (public preview)](/help/en/flink/realtime-flink/developer-reference/postgresql-cdc-connector/)

√

×

×

Streaming

SQL

N/A

[OceanBase (public preview)](/help/en/flink/realtime-flink/developer-reference/oceanbase-connector)

√

√

√

Streaming and batch

SQL

Yes

[Iceberg](/help/en/flink/realtime-flink/developer-reference/apache-iceberg-connector)

√

×

√

Streaming and batch

SQL

Yes

[Generating simulated data with Faker](/help/en/flink/realtime-flink/developer-reference/faker-connector)

√

√

×

Streaming and batch

SQL

N/A

[Blackhole](/help/en/flink/realtime-flink/developer-reference/blackhole-connector)

×

×

√

Streaming and batch

SQL

Yes

[Datagen](/help/en/flink/realtime-flink/developer-reference/datagen-connector)

√

×

×

Streaming and batch

SQL

N/A

[Print](/help/en/flink/realtime-flink/developer-reference/print-connector)

×

×

√

Streaming and batch

SQL and YAML for data ingestion

Yes

[Hudi (being deprecated)](/help/en/flink/realtime-flink/developer-reference/hudi-connector)

√

×

√

Streaming and batch

SQL and DataStream

Yes
