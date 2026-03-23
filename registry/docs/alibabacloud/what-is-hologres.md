Hologres is Alibaba Cloud's one-stop real-time data warehouse engine — a cloud-native, PostgreSQL-compatible service that handles high-throughput ingestion, sub-second interactive analytics, and high-concurrency online serving in a single system.

It supports standard SQL and is compatible with the PostgreSQL protocol and syntax, so existing tools, drivers, and skills transfer directly. Hologres integrates natively with [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute), [Flink](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink), and [DataWorks](/help/en/dataworks/user-guide/what-is-dataworks) to form an end-to-end data warehouse stack for both offline and real-time workloads.

## Common use cases

Hologres serves teams that need fast answers on fresh data at scale:

-   **Real-time dashboards and BI** — Run multidimensional OLAP queries and ad hoc analysis on petabyte-scale data with sub-second response times, enabling business teams to explore data without waiting for batch jobs.
    
-   **Customer-facing data services** — Deliver high-concurrency, low-latency online data serving at hundreds of thousands of queries per second (QPS), supporting dimension table lookups and ID mapping for real-time transformation pipelines.
    
-   **Data lake acceleration** — Query [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute) data 5 to 10 times faster than direct MaxCompute queries, and synchronize data from MaxCompute into Hologres at millions of rows per second.
    
-   **Real-time data pipelines** — Write and update streaming data from [Flink](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink) or Spark at throughput more than 10 times higher than open source systems, with real-time aggregation updates for ETL and transformation scenarios.
    
-   **Audience segmentation and risk control** — Power marketing profiles, fine-grained analysis, self-service analytics, and real-time risk control workflows from a single warehouse.
    

## Features

### Interactive analytics at scale

Hologres supports multidimensional analysis (OLAP) and ad hoc analysis of petabyte-scale data. Its MPP architecture with vectorized operators maximizes CPU computing power, while AliORC storage compression and SSD-optimized I/O throughput keep query latency at sub-second levels.

Row-oriented, column-oriented, and hybrid row-column storage modes are all supported, letting you tune storage layout to the access pattern of each table. Hologres also natively supports semi-structured JSON data with columnar storage compression for JSONB, and provides a three-level database hierarchy of DB, Schema, and Table. DML operations — Update, Delete, and Upsert — are fully supported, as are joins, nesting, and window functions.

### Real-time ingestion and online serving

Hologres is natively integrated with computing frameworks such as [Flink](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink) and Spark. Built-in connectors support high-throughput real-time data writes and updates, including source tables, sink tables, dimension tables, and complex multi-stream merges. Write throughput exceeds 10 times that of open source systems.

Hologres supports the definition of real-time materialized views, which simplifies development for tasks like data transformation and aggregation. Data is written in real time, and aggregations are updated in real time.

Hologres exposes table update events through binary logging (Binlog), which simplifies development for streaming transformation and aggregation tasks. Data written in real time triggers real-time aggregation updates across data warehouse layers.

For online data serving, Hologres delivers hundreds of thousands of QPS for point queries on row-oriented tables, using primary key indexes and short-path optimization in the query engine. This makes it suitable for dimension table lookups and ID mapping in real-time pipelines.

### Unified storage for hot and cold data

Hologres federates with [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute) so you can query MaxCompute datasets directly — at 5 to 10 times the speed of direct MaxCompute queries — and synchronize data into Hologres at millions of rows per second. It supports automatic import of metadata and association analysis of hot and cold data.

Hologres also supports accelerated reads from foreign tables stored in OSS-HDFS (HDFS-compatible storage on Alibaba Cloud Object Storage Service), and handles open storage formats including Hudi and Delta.

### Enterprise security and operations

**Security** — Hologres supports fine-grained access control policies, Bring-Your-Own-Key (BYOK) data storage encryption, and data masking. It also supports Data Security Guard, IP address whitelists, and multiple authentication systems including Resource Access Management (RAM), Security Token Service (STS), and independent accounts. Hologres is PCI-DSS certified and supports data backup and recovery.

**Workload isolation** — Multiple compute instances form a primary/replica architecture. Instances share a single copy of storage while maintaining isolated computing resources, achieving separation between writes and reads, and between query workloads and serving workloads. This architecture supports fault management and fast automatic recovery of failed nodes. Hologres uses Pangu (highly reliable, triplicate redundant storage) and requires no local disks.

**Self-service O&M** — Hologres provides built-in diagnostic information including query history and metadata warehouse tables. Use this data to identify system bottlenecks and potential risks without relying on external tooling. Fine-grained control over computing workloads and access permissions, rich monitoring and alerting metrics, scalable computing resources, and hot upgrades meet enterprise reliability requirements.

### Ecosystem compatibility

Hologres is compatible with the PostgreSQL ecosystem and provides JDBC/ODBC interfaces for easy integration with SQL clients and BI tools, such as Quick BI, DataV, Tableau, and FanRuan. It integrates with the [DataWorks](/help/en/dataworks/user-guide/what-is-dataworks) development platform so you can build pipelines without learning additional tools.

Additional integrations include:

-   **Hadoop ecosystem** — Hive and Spark connectors allow high-throughput imports from Hadoop-based platforms into Hologres.
    
-   **GIS** — Built-in support for GIS spatial data analysis.
    
-   **Oracle compatibility** — Oracle function extension package for easier migrations.
    
-   **Vector retrieval** — Hologres integrates with Platform for AI and includes a built-in vector retrieval plugin, DAMO Academy Proxima, supporting online real-time feature storage, real-time retrieval, and vector retrieval.
    

## Get started

-   **Quick start** — Create your first Hologres instance and run a query.
    
-   **Connect a BI tool** — Connect Hologres to your existing SQL client or BI platform via JDBC/ODBC or the PostgreSQL driver.
    
-   **Ingest streaming data** — Set up a [Flink](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink) connector to write real-time data into Hologres.
    
-   **Accelerate MaxCompute queries** — Create an external table over [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute) and run ad hoc queries without moving data.
    
-   **Pricing** — Review instance types and pricing options.
