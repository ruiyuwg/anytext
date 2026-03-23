DataWorks Data Integration synchronizes data among various data sources, including MySQL, MaxCompute, Hologres, and Kafka. It provides batch synchronization for T+1 Extract, Transform, and Load (ETL) jobs, Real-time Data Synchronization for data replication with second-level latency, and Whole-database Migration.

## **Synchronization solutions**

**Type**

**Source granularity**

**Target granularity**

**Timeliness**

**Synchronization scenario**

Single-table batch

Single table

Single table/partition

T+1 or periodic

Periodic full or incremental synchronization

Sharding batch

Multiple tables with identical schema

Single table/partition

T+1 or periodic

Periodic full or incremental synchronization

Single-table real-time

Single table

Single table/partition

Second-to-minute latency

Change Data Capture (CDC)

Whole-database batch

Whole database or multiple tables

Matching tables and partitions

One-time or periodic

One-time or periodic full/incremental synchronization. Supports an initial full synchronization followed by periodic incremental updates.

Whole-database real-time

Whole database or multiple tables

Matching tables and partitions

Second-to-minute latency

Full synchronization + Change Data Capture (CDC)

Whole-database full and incremental

Whole database or multiple tables

Matching tables and partitions

Initial full synchronization: Batch processing

Subsequent incremental synchronization: T+1

Full synchronization + Change Data Capture (CDC)

## **Synchronization approaches**

When choosing a data synchronization approach, consider these two core questions:

1.  Latency requirements: How often do you need to synchronize data? Is a daily update (batch) sufficient, or do you need real-time updates in seconds or minutes (real-time)?
    
2.  Scale and complexity: How many tables do you need to synchronize? Is the processing logic for these tables consistent (single table vs. whole database)?
    

Based on these factors, we recommend two main categories of synchronization approaches: batch synchronization and real-time synchronization.

#### 1\. Batch synchronization (T+1/periodic)

A batch approach is for scenarios that are not time-sensitive (for example, T+1) and require periodic batch processing.

**Important**

Prerequisite: To implement incremental batch synchronization, the source table must contain a field to track incremental changes, such as a timestamp like `gmt_modified` or an auto-incrementing ID. If no such field exists, you must perform periodic full synchronization.

##### 1.1. Single-table batch

Use this approach when you need to perform fine-grained processing on a small number of core, heterogeneous data tables.

-   **Key advantage**: Flexible processing logic.
    
    -   Fine-grained transformation: Supports complex field mapping, data filtering, constant value assignment, function-based transformations, and even AI-assisted processing.
        
    -   Heterogeneous source integration: The optimal choice for handling non-standard data sources such as APIs and log files.
        
-   **Key limitation**: High cost at scale.
    
    -   High configuration overhead: Synchronizing a large number of tables requires significant effort to configure and maintain each task individually.
        
    -   High resource consumption: Each task is scheduled independently. The resource consumption of 100 single-table tasks greatly exceeds that of one whole-database task.
        

> **Recommended approach for Single-table batch**: [Batch synchronization task for a single table](/help/en/dataworks/user-guide/batch-synchronization-in-datastudio/)

##### 1.2. Whole-database batch

Use this approach when you need to efficiently "move" a large number of homogeneous data tables from one location to another.

-   **Key advantage**: High O&M efficiency and low cost.
    
    -   High efficiency: Configure hundreds of tables in a single operation with automatic object matching, dramatically improving development efficiency.
        
    -   Cost-effectiveness: Resources are scheduled and optimized holistically, resulting in very low costs. For example, the resource consumption of one whole-database task might be 2 CUs, compared to 100 CUs for 100 single-table tasks.
        
    -   Typical use cases: Building an Operational Data Store (ODS) layer for a data warehouse, creating periodic database backups, and migrating data to the cloud.
        
-   **Key limitation**: Limited processing logic.
    
    -   This approach is primarily for data replication and does not support complex transformation logic for individual tables.
        

> **Recommended approach for Whole-database batch**: [Batch whole-database synchronization task](/help/en/dataworks/user-guide/database-wide-offline-synchronization/).

#### 2\. Real-time synchronization (second- to minute-level)

A real-time approach is for scenarios that require capturing real-time data changes (inserts, updates, and deletes) from the source to support real-time analytics and business responses.

**Important**

Prerequisite: The source must support Change Data Capture (CDC) or be a message queue itself. For example, MySQL must have binary logging enabled, or the source could be a Kafka instance.

##### Single-table or whole-database real-time

The decision logic is similar to the batch approach:

-   Single-table real-time: Suitable for use cases that involve complex processing of real-time change streams from a single, core table.
    
-   Whole-database real-time: The mainstream choice for building a real-time data warehouse, implementing real-time database disaster recovery, and integrating with real-time data lakes. It also offers significant advantages in efficiency and cost-effectiveness.
    

> **Recommended real-time approaches:** [Real-time synchronization task for a single table](/help/en/dataworks/user-guide/real-time-synchronization-in-datastudio/), [Real-time whole-database synchronization task](/help/en/dataworks/user-guide/database-wide-real-time-synchronization-task/)

#### 3\. Real-time CDC to append-only targets

**Important**

Context: Real-time synchronization captures CDC data, which includes `Insert`, `Update`, and `Delete` operations. For **Append-Only** storage systems like non-Delta tables in MaxCompute that do not natively support physical `Update` or `Delete` operations, writing the CDC stream directly can lead to inconsistent data states. For example, the target table will not reflect a delete operation.

-   **DataWorks solution: Base + Log pattern**
    
    -   This solution is implemented as a **whole-database full and incremental task**. It works by creating a `Base table` (for full snapshots) and a `Log table` (for incremental logs) at the target.
        
    -   How it works: The CDC data stream is written to the `Log table` in real time. Then, on a T+1 schedule, the system automatically runs a task to **Merge** the changes from the `Log table` into the `Base table`, generating an updated full snapshot. With this approach, data is written to the Log table in minutes, while the final, merged state is visible only after the T+1 task completes. This balances real-time data capture with the eventual consistency required by a batch data warehouse.
        

> **Recommended approach**: [Whole-database full and incremental (near real-time) task](/help/en/dataworks/user-guide/full-incremental-near-real-time-synchronization-of-mysql-whole-database-to-maxcompute).

## Data source read/write capabilities

**Data source**

**Single-table batch**

**Single-table real-time**

**Whole-database batch**

**Whole-database real-time**

**Whole-database full and incremental**

[Public dataset](/help/en/dataworks/user-guide/public-dataset-data-source)

**Read**

\-

\-

\-

\-

[Amazon S3](/help/en/dataworks/user-guide/amazon-s3-data-source#task-2309980)

**Read/Write**

\-

\-

\-

\-

[Amazon Redshift](/help/en/dataworks/user-guide/amazon-redshift-data-source)

**Read/Write**

\-

\-

\-

\-

[AnalyticDB for MySQL 2.0](/help/en/dataworks/user-guide/analyticdb-for-mysql-2-0-data-source#task-2310892)

**Read/Write**

\-

\-

\-

\-

[AnalyticDB for MySQL 3.0](/help/en/dataworks/user-guide/analyticdb-for-mysql-3-0-data-source#task-2311103)

**Read/Write**

**Write**

**Read**

**Write**

\-

[AnalyticDB for PostgreSQL](/help/en/dataworks/user-guide/analyticdb-for-postgresql-data-source#task-2312007)

**Read/Write**

\-

**Read**

\-

\-

[ApsaraDB for OceanBase](/help/en/dataworks/user-guide/apsaradb-for-oceanbase-data-source#task-2312222)

**Read/Write**

**Write**

\-

**Read/Write**

**\-**

[Azure Blob Storage](/help/en/dataworks/user-guide/azureblob-data-source)

**Read**

\-

\-

\-

\-

[BigQuery](/help/en/dataworks/user-guide/bigquery-data-source)

**Read**

\-

\-

\-

\-

[ClickHouse](/help/en/dataworks/user-guide/clickhouse-data-source#task-2312286)

**Read/Write**

\-

**Read**

\-

\-

[COS](/help/en/dataworks/user-guide/cos-data-source)

**Read**

\-

\-

\-

\-

[Databricks](/help/en/dataworks/user-guide/databricks-data-source)

**Read**

\-

\-

\-

\-

[DataHub](/help/en/dataworks/user-guide/datahub-data-source/#task-2312348)

**Read/Write**

**Read/Write**

\-

**Write**

\-

[Data Lake Formation](/help/en/dataworks/user-guide/data-lake-formation-data-source)

**Read/Write**

**Write**

**Write**

**Write**

\-

[DB2](/help/en/dataworks/user-guide/db2-data-source#task-2312409)

**Read/Write**

\-

**Read**

\-

\-

[Doris](/help/en/dataworks/user-guide/doris-data-source#task-2350665)

**Read/Write**

**Write**

**Read**

\-

\-

[DM (Dameng)](/help/en/dataworks/user-guide/dm-data-source#task-2312442)

**Read/Write**

\-

**Read**

\-

\-

[DRDS (PolarDB-X 1.0)](/help/en/dataworks/user-guide/polardb-x-1-0-data-source#task-2312952)

**Read/Write**

\-

**Read**

\-

\-

Elasticsearch

**Read/Write**

**Write**

**Write**

**Write**

\-

[FTP](/help/en/dataworks/user-guide/ftp-data-source#task-2313169)

**Read/Write**

\-

\-

\-

\-

GBase8a

**Read/Write**

\-

\-

\-

\-

HBase

HBase **Read/Write**

HBase 20xsql **Read**

HBase 11xsql **Write**

\-

\-

\-

\-

[HDFS](/help/en/dataworks/user-guide/hdfs-data-source#task-2313264)

**Read/Write**

\-

\-

\-

\-

Hive

**Read/Write**

\-

**Read/Write**

\-

\-

[Hologres](/help/en/dataworks/user-guide/hologres-data-source#task-2313266)

**Read/Write**

**Read/Write**

**Read/Write**

**Write**

\-

[HttpFile](/help/en/dataworks/user-guide/httpfile-data-source)

**Read**

\-

\-

\-

\-

[Kafka](/help/en/dataworks/user-guide/kafka-data-source/#task-2313269)

**Read/Write**

**Read/Write**

\-

**Write**

\-

[KingbaseES (Renda Jingcang)](/help/en/dataworks/user-guide/kingbasees-data-source#task-2313270)

**Read/Write**

\-

\-

\-

\-

[Lindorm](/help/en/dataworks/user-guide/lindorm-data-source#task-2313271)

**Read/Write**

**Write**

\-

**Write**

\-

[Simple Log Service (SLS)](/help/en/dataworks/user-guide/loghub-data-source#task-2308887)

**Read/Write**

**Read**

\-

\-

\-

[MaxCompute](/help/en/dataworks/user-guide/maxcompute-data-source#task-2308965)

**Read/Write**

**Write**

**Write**

**Write**

**Write**

[MariaDB](/help/en/dataworks/user-guide/mariadb-data-source)

**Read/Write**

\-

\-

\-

\-

[MaxGraph](/help/en/dataworks/user-guide/maxgraph-data-source#task-2309352)

**Write**

\-

\-

\-

\-

[ApsaraDB for Memcache](/help/en/dataworks/user-guide/memcache-data-source#task-2309402)

**Write**

\-

\-

\-

\-

[MetaQ](/help/en/dataworks/user-guide/metaq-data-source#task-2310287)

**Read**

\-

\-

\-

\-

[Milvus](/help/en/dataworks/user-guide/milvus-data-source)

**Read/Write**

\-

\-

\-

\-

[MongoDB](/help/en/dataworks/user-guide/mongodb-data-source#task-2310398)

**Read/Write**

\-

\-

**Read**

\-

[MySQL](/help/en/dataworks/user-guide/mysql-data-source#task-2305296)

**Read/Write**

**Read**

**Read**

**Read**

**Read**

[OpenSearch](/help/en/dataworks/user-guide/opensearch-data-source#task-2311051)

**Write**

\-

\-

\-

\-

[Oracle](/help/en/dataworks/user-guide/oracle-data-source#task-2311070)

**Read/Write**

**Read**

**Read**

**Read**

**Read**

[Object Storage Service (OSS)](/help/en/dataworks/user-guide/oss-data-source#task-2311246)

**Read/Write**

**\-**

**Write**

**Write**

\-

[OSS-HDFS](/help/en/dataworks/user-guide/oss-hdfs)

**Read/Write**

**\-**

**Write**

**Write**

\-

[PolarDB](/help/en/dataworks/user-guide/polardb-data-source#task-2314120)

**Read/Write**

**Read**

**Read**

**Read**

**Read**

[PolarDB-X 2.0](/help/en/dataworks/user-guide/polardbx20-data-source)

**Read/Write**

\-

**Read**

**Read**

\-

[PostgreSQL](/help/en/dataworks/user-guide/postgresql-data-source#task-2315051)

**Read/Write**

\-

**Read**

**Read**

\-

[Redis](/help/en/dataworks/user-guide/redis-data-source#task-2315048)

**Write**

\-

\-

\-

\-

[RestAPI](/help/en/dataworks/user-guide/restapi-data-source#task-2315045)

**Read/Write**

\-

\-

\-

\-

[Salesforce](/help/en/dataworks/user-guide/salesforce-data-source)

**Read/Write**

\-

\-

\-

\-

[SAP HANA](/help/en/dataworks/user-guide/sap-hana-data-source#task-2315041)

**Read/Write**

\-

\-

\-

\-

[Sensors Data (Shen Ce)](/help/en/dataworks/user-guide/sensors-data-data-source)

**Write**

\-

\-

\-

\-

[Snowflake](/help/en/dataworks/user-guide/snowflake-data-source)

**Read/Write**

\-

\-

\-

\-

[StarRocks](/help/en/dataworks/user-guide/starrocks-data-source#task-2314945)

**Read/Write**

**Write**

**Write**

**Write**

\-

[SQL Server](/help/en/dataworks/user-guide/sql-server-data-source#task-2314785)

**Read/Write**

\-

**Read**

\-

\-

[Tablestore](/help/en/dataworks/user-guide/tablestore-data-source#task-2314772)

**Read/Write**

**Write**

\-

\-

\-

[TiDB](/help/en/dataworks/user-guide/tidb-data-source)

**Read/Write**

\-

\-

\-

\-

[TSDB](/help/en/dataworks/user-guide/tsdb-data-source#task-2314766)

**Write**

\-

\-

\-

\-

Vertica

**Read/Write**

\-

\-

\-

\-

[TOS](/help/en/dataworks/user-guide/tos-data-source)

**Read**

\-

\-

\-

\-

## **Related documents**

This guide lists essential Data Integration documents to help you get started.

-   For data source configuration, see [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).
    
-   To configure synchronization tasks, see the following:
    
    -   [Batch synchronization task for a single table](/help/en/dataworks/user-guide/batch-synchronization-in-datastudio/)
        
    -   [Real-time synchronization task for a single table](/help/en/dataworks/user-guide/real-time-synchronization-in-datastudio/)
        
    -   [Batch whole-database synchronization task](/help/en/dataworks/user-guide/database-wide-offline-synchronization/)
        
    -   [Real-time whole-database synchronization task](/help/en/dataworks/user-guide/database-wide-real-time-synchronization-task/)
        
    -   [Whole-database full and incremental (near real-time) task](/help/en/dataworks/user-guide/full-incremental-near-real-time-synchronization-of-mysql-whole-database-to-maxcompute)
        
    -   [Serverless synchronization task](/help/en/dataworks/user-guide/serverless-synchronization-task)
        
-   For more use cases, see the following:
    
    -   Use case: Batch synchronization for a single table
        
    -   [Use case: Real-time synchronization for a single table](/help/en/dataworks/user-guide/single-table-real-time-scenario-practice/)
        
    -   [Use case: Batch whole-database synchronization](/help/en/dataworks/user-guide/practice-in-full-database-offline-scenarios/)
        
    -   Use case: Real-time whole-database synchronization
        
-   For answers to common questions about Data Synchronization, see the [Data Integration FAQ](/help/en/dataworks/user-guide/faq-4).
