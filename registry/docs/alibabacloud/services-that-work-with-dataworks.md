As Alibaba Cloud's one-stop platform for big data development and governance, DataWorks is often used with compute engine products. For data integration, DataWorks also works with data source products to enable data transmission. This topic describes other cloud products that are commonly used with DataWorks in typical scenarios.

## Compute engine product ecosystem

**DataWorks provides an open compute engine ecosystem.** It integrates with mainstream engines such as MaxCompute, EMR, Hologres, and Flink to support collaborative development across engines. You can [bind computing resources](/help/en/dataworks/user-guide/create-and-manage-compute-resources/#af0317a88ekv0) to convert them into **computing resources** available on the platform. This enables **one-stop big data development and governance**. As a one-stop platform, DataWorks **does not directly execute computing tasks**. Instead, it uses an engine binding mechanism that allows developers to **create, orchestrate, and manage data processing tasks from a unified interface**.

Currently, DataWorks supports the following compute engines:

[MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute)

[Hologres](/help/en/hologres/product-overview/what-is-hologres)

[Flink](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink)

[EMR on ECS](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs)

[EMR on ACK](/help/en/emr/emr-on-ack/product-overview/what-is-emr-on-ack)

[EMR Serverless StarRocks](/help/en/emr/emr-serverless-starrocks/product-overview/what-is-emr-serverless-starrocks)

[EMR Serverless Spark](/help/en/emr/emr-serverless-spark/product-overview/what-is-emr-serverless-spark)

[CDH](https://www.cloudera.com/)

[AnalyticDB for MySQL](/help/en/analyticdb/analyticdb-for-mysql/product-overview/what-is-analyticdb-for-mysql)

[AnalyticDB for PostgreSQL](/help/en/analyticdb/analyticdb-for-postgresql/product-overview/overview-product-overview)

[AnalyticDB for Spark](/help/en/analyticdb/analyticdb-for-mysql/user-guide/spark-sql-application-development)

[OpenSearch](/help/en/open-search/what-is-opensearch-1/)

[ClickHouse](/help/en/clickhouse/product-overview/what-is-apsaradb-for-clickhouse)

[Lindorm](/help/en/lindorm/product-overview/product-introduction-overview)

## Data source product ecosystem

**A data source is the unified entry point in DataWorks for connecting to external systems.** It supports standardized access to disparate data sources, such as databases, big data storage, and message queues. You can define the connection information and configure network connectivity once in the Management Center. Then, you can call it from multiple product modules to **avoid repetitive configuration**. In standard mode, you can also **configure data source isolation** for development and production environments to ensure physical isolation.

### **Data Integration**

A data source is a standard unit in DataWorks for connecting to external systems. It provides connection templates for disparate data sources, such as MaxCompute, MySQL, and OSS, which offer unified read and write endpoints for data integration tasks. Based on this configuration, the Data Integration module lets you flexibly select synchronization methods in a unified interface. These methods include **single table or full database** and **offline or real-time** sync. This enables data ingestion with **full migration, incremental capture, and automatic full and incremental synchronization**.

> For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/) and [Supported data sources and synchronization solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).

[Amazon S3 data source](/help/en/dataworks/user-guide/amazon-s3-data-source#task-2309980)

[HDFS data source](/help/en/dataworks/user-guide/hdfs-data-source#task-2313264)

[PolarDB data source](/help/en/dataworks/user-guide/polardb-data-source#task-2314120)

[Amazon Redshift data source](/help/en/dataworks/user-guide/amazon-redshift-data-source)

[Hive data source](/help/en/dataworks/user-guide/hive-data-source#task-2313265)

[PolarDB-X 2.0 data source](/help/en/dataworks/user-guide/polardbx20-data-source)

[AnalyticDB for MySQL 2.0 data source](/help/en/dataworks/user-guide/analyticdb-for-mysql-2-0-data-source#task-2310892)

[Hologres data source](/help/en/dataworks/user-guide/hologres-data-source#task-2313266)

[PostgreSQL data source](/help/en/dataworks/user-guide/postgresql-data-source#task-2315051)

[AnalyticDB for MySQL 3.0 data source](/help/en/dataworks/user-guide/analyticdb-for-mysql-3-0-data-source#task-2311103)

[HttpFile data source](/help/en/dataworks/user-guide/httpfile-data-source)

[Redis data source](/help/en/dataworks/user-guide/redis-data-source#task-2315048)

[AnalyticDB for PostgreSQL data source](/help/en/dataworks/user-guide/analyticdb-for-postgresql-data-source)

[Kafka data source](/help/en/dataworks/user-guide/kafka-data-source/#task-2313269)

[RestAPI (HTTP) data source](/help/en/dataworks/user-guide/restapi-data-source#task-2315045)

[ApsaraDB For OceanBase data source](/help/en/dataworks/user-guide/apsaradb-for-oceanbase-data-source#task-2312222)

[KingbaseES data source](/help/en/dataworks/user-guide/kingbasees-data-source#task-2313270)

[Salesforce data source](/help/en/dataworks/user-guide/salesforce-data-source)

[Azure Blob Storage data source](/help/en/dataworks/user-guide/azureblob-data-source)

[Lindorm data source](/help/en/dataworks/user-guide/lindorm-data-source#task-2313271)

[SAP HANA data source](/help/en/dataworks/user-guide/sap-hana-data-source#task-2315041)

[BigQuery data source](/help/en/dataworks/user-guide/bigquery-data-source)

[LogHub (SLS) data source](/help/en/dataworks/user-guide/loghub-data-source#task-2308887)

[SelectDB data source](/help/en/dataworks/user-guide/selectdb-data-source#task-2345429)

[ClickHouse data source](/help/en/dataworks/user-guide/clickhouse-data-source#task-2312286)

[MaxCompute data source](/help/en/dataworks/user-guide/maxcompute-data-source#task-2308965)

[Sensors Data data source](/help/en/dataworks/user-guide/sensors-data-data-source)

[DataHub data source](/help/en/dataworks/user-guide/datahub-data-source/#task-2312348)

[MariaDB data source](/help/en/dataworks/user-guide/mariadb-data-source)

[StarRocks data source](/help/en/dataworks/user-guide/starrocks-data-source#task-2314945)

[Data Lake Formation data source](/help/en/dataworks/user-guide/data-lake-formation-data-source)

[Maxgraph data source](/help/en/dataworks/user-guide/maxgraph-data-source#task-2309352)

[SQL Server data source](/help/en/dataworks/user-guide/sql-server-data-source#task-2314785)

[DB2 data source](/help/en/dataworks/user-guide/db2-data-source#task-2312409)

[Memcache (OCS) data source](/help/en/dataworks/user-guide/memcache-data-source#task-2309402)

[Tablestore data source](/help/en/dataworks/user-guide/tablestore-data-source#task-2314772)

[Doris data source](/help/en/dataworks/user-guide/doris-data-source#task-2350665)

[MetaQ data source](/help/en/dataworks/user-guide/metaq-data-source#task-2310287)

[Tablestore Stream data source](/help/en/dataworks/user-guide/tablestore-stream-data-source#task-2311305)

[DM data source](/help/en/dataworks/user-guide/dm-data-source#task-2312442)

[Milvus data source](/help/en/dataworks/user-guide/milvus-data-source)

[TiDB data source](/help/en/dataworks/user-guide/tidb-data-source)

[DRDS (PolarDB-X 1.0) data source](/help/en/dataworks/user-guide/polardb-x-1-0-data-source#task-2312952)

[MongoDB data source](/help/en/dataworks/user-guide/mongodb-data-source#task-2310398)

[TSDB data source](/help/en/dataworks/user-guide/tsdb-data-source#task-2314766)

[Elasticsearch data source](/help/en/dataworks/user-guide/elasticsearch-data-source#task-2312953)

[MySQL data source](/help/en/dataworks/user-guide/mysql-data-source#task-2305296)

[Vertica data source](/help/en/dataworks/user-guide/vertica-data-source#task-2314764)

[FTP data source](/help/en/dataworks/user-guide/ftp-data-source#task-2313169)

[OpenSearch data source](/help/en/dataworks/user-guide/opensearch-data-source#task-2311051)

[TOS data source](/help/en/dataworks/user-guide/tos-data-source)

[GBase8a data source](/help/en/dataworks/user-guide/gbase-8a-data-source#task-2313185)

[Oracle data source](/help/en/dataworks/user-guide/oracle-data-source#task-2311070)

[HBase data source](/help/en/dataworks/user-guide/hbase-data-source#task-2313261)

[Graph Database (GDB) data source](/help/en/dataworks/user-guide/gdb-data-source#task-2313202)

[OSS data source](/help/en/dataworks/user-guide/oss-data-source#task-2311246)

[OSS-HDFS data source](/help/en/dataworks/user-guide/oss-hdfs)

### Data Studio

DataWorks supports task development using disparate compute engines such as MaxCompute, EMR, and ADB as the underlying computing resources. You can also connect databases such as MySQL and Oracle to the development pipeline as **nodes**. You can configure data source connections and scheduling policies in the unified interface. Then, you can call them from modules such as development and O&M to achieve **hybrid orchestration and scheduling across different engines and databases**.

> For more information, see [Database nodes](/help/en/dataworks/user-guide/new-studio-database-node).

MySQL data source

PolarDB MySQL data source

Saphana data source

SQL Server data source

PolarDB PostgreSQL data source

Vertica data source

Oracle data source

Doris data source

DM data source

PostgreSQL data source

Mariadb data source

KingbaseES data source

StarRocks data source

Selectdb data source

OceanBase data source

DRDS data source

Redshift data source

DB2 data source

Gbase8a data source

### Data Map

A data source is the basic unit that Data Map uses for unified metadata acquisition. Using the pre-configured data source connection, the system's built-in collector can obtain database table schemas, partition information, and cross-link data lineage. After acquisition, you can view table information and visualize the data lineage graph in Data Map. This lets you perform traceability analysis on your data assets.

> For more information, see [Metadata acquisition](/help/en/dataworks/user-guide/metadata-collection/).

AnalyticDB for PostgreSQL data source

MySQL data source

Hologres data source

AnalyticDB for MySQL data source

PostgreSQL data source

Lindorm data source

AnalyticDB for Spark data source

SQL Server data source

MaxCompute data source

CDH Hive data source

Oracle data source

StarRocks data source

Data Lake Formation (DLF)

Tablestore (OTS) data source

Clickhouse data source

E-MapReduce HIVE data source

### DataAnalysis

DataAnalysis uses engines and data sources to allow you to smoothly process, analyze, transform, and visualize data in DataWorks.

> For more information, see [SQL query and analysis](/help/en/dataworks/user-guide/sql-query).

MaxCompute data source

Hologres data source

EMR Hive data source

EMR Spark SQL data source

EMR Impala data source

EMR Presto data source

EMR Trino data source

CDH Hive data source

CDH Spark SQL data source

StarRocks data source

ClickHouse data source

SelectDB data source

Doris data source

AnalyticDB for MySQL 3.0 data source

AnalyticDB for PostgreSQL data source

Tablestore (OTS) data source

MySQL data source

PostgreSQL data source

Oracle

SQL Server data source

### DataService Studio

DataService Studio can generate APIs to transform disparate data sources into standard data service capabilities, enabling data sharing.

> For more information, see [Generate an API](/help/en/dataworks/user-guide/generate-api/).

[AnalyticDB for MySQL 2.0 data source](/help/en/dataworks/user-guide/analyticdb-for-mysql-2-0-data-source#task-2477473)

[StarRocks data source](/help/en/dataworks/user-guide/starrocks-data-source)

[MaxCompute data source](/help/en/dataworks/user-guide/maxcompute-data-source#task-2477347)

[AnalyticDB for MySQL 3.0 data source](/help/en/dataworks/user-guide/analyticdb-for-mysql-3-0-data-source#task-2484243)

[Doris data source](/help/en/dataworks/user-guide/doris-data-source)

[HBase data source](/help/en/dataworks/user-guide/hbase-data-source#task-2483243)

[AnalyticDB for PostgreSQL data source](/help/en/dataworks/user-guide/analyticdb-for-postgresql-data-source#task-2478493)

[PolarDB data source](/help/en/dataworks/user-guide/polardb-data-source)

[DB2 data source](/help/en/dataworks/user-guide/db2-data-source)

[Tablestore Stream data source](/help/en/dataworks/user-guide/tablestore-stream-data-source#task-2484253)

[ApsaraDB For OceanBase data source](/help/en/dataworks/user-guide/apsaradb-for-oceanbase-data-source#t2312222.html)

[DM data source](/help/en/dataworks/user-guide/dm-data-source)

[MongoDB data source](/help/en/dataworks/user-guide/mongodb-data-source#task-2474404)

[SAP HANA data source](/help/en/dataworks/user-guide/sap-hana-data-source)
