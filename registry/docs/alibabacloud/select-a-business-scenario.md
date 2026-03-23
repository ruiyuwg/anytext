Alibaba Cloud E-MapReduce (EMR) provides the following predefined business scenarios of clusters: Data Lake, Data Analytics, Real-time Data Streaming, and Data Service. If you want to flexibly deploy services in an EMR cluster based on your business requirements, you can create a custom cluster to build a big data platform that adapts to your business characteristics. This topic describes the differences among the business scenarios. You can select a business scenario based on your business requirements.

## Business scenario selection

**Business scenario (cluster type)**

**Supported service**

**Core capability**

[Scenario](/help/en/emr/emr-on-ecs/product-overview/application-scenarios)

Data Lake (DataLake cluster)

**Computing**: Spark, Hive, Tez, Trino, Kyuubi, and Presto

**Data storage**: Hadoop Distributed File System (HDFS), OSS-HDFS, Celeborn, and JindoCache

**Data integration**: Flume and Sqoop

**Data lake formats**: Hudi, Iceberg, and Paimon

**Resource management**: YARN

**Distributed coordination**: ZooKeeper

**Security and permissions**: OpenLDAP, Ranger, DLF-Auth, and Knox

-   Unified storage
    
-   Multiple compatible compute engines
    
-   Support for various data lake formats
    

Offline extract, transform, and load (ETL) such as ETL of data warehouses, and interactive queries such as ad hoc analysis

Data Analytics (OLAP cluster)

**Online analytical processing (OLAP) analysis**: StarRocks, ClickHouse, Doris

**Distributed coordination**: ZooKeeper

-   Subsecond-level query response
    
-   Column-oriented storage optimization
    
-   Federated queries
    

Complex aggregation analysis, such as user profile analysis, user group identification, and business intelligence (BI)

Real-time Data Streaming (Dataflow cluster)

**Stream computing**: Flink

**Data storage**: HDFS and OSS-HDFS

**Data lake format**: Paimon

**Resource management**: YARN

**Distributed coordination**: ZooKeeper

**Security and permissions**: OpenLDAP and Knox

-   Unified batch and stream processing
    
-   Low latency
    
-   State consistency guarantee
    

Real-time ETL, such as ETL of streaming warehouses

Data Service (DataServing cluster)

**Computing**: Phoenix

**Column-oriented storage**: HBase

**Data storage**: HDFS, OSS-HDFS, and JindoCache

**Distributed coordination**: ZooKeeper

**Security and permissions**: OpenLDAP, Ranger, and Knox

-   Millisecond-level point queries
    
-   SQL interface optimization
    
-   Read/write splitting
    

High-concurrency queries, such as behavior analysis and precision marketing

Custom Cluster

**Computing**: Spark, Hive, Tez, Trino, Kyuubi, Presto, Flink, and Phoenix

**OLAP analysis**: StarRocks

**Column-oriented storage**: HBase

**Data storage**: HDFS, OSS-HDFS, Celeborn, and JindoCache

**Data integration**: Flume and Sqoop

**Data lake formats**: Hudi, Iceberg, and Paimon

**Resource management**: YARN

**Distributed coordination**: ZooKeeper

**Security and permissions**: OpenLDAP, Ranger, DLF-Auth, and Knox

-   Flexible deployment of services, such as Spark, Flink, and HBase
    
-   Support for mixed workloads, such as workloads of real-time processing, offline processing, and data analysis
    

**Note**

In the mixed workload scenarios, offline and real-time businesses may affect each other. In this case, we recommend that you create different types of clusters based on your business requirements.

Offline ETL, real-time ETL, complex aggregation analysis, and high-concurrency queries

**Note**

-   The versions of services that can be deployed in an EMR cluster vary based on the EMR version. For more information, see [Release versions](/help/en/emr/emr-on-ecs/product-overview/emr-on-ecs-release-version/#9c0f68786dw2b). We recommend that you use the latest EMR version to experience more features, improve performance, and ensure security.
    
-   If a custom cluster cannot fully meet your business requirements, you can deploy the required services on your own after you evaluate the compatibility and security of the services.
    

## Subsequent cluster planning

After you select a business scenario for your cluster, you can continue to plan the storage architecture, metadata service, hardware specifications, and network specifications. For more information, see [Select a region and plan storage configurations](/help/en/emr/emr-on-ecs/user-guide/select-region-and-storage-architecture), [Select a metadata service](/help/en/emr/emr-on-ecs/user-guide/choose-metadata-service), and [Plan hardware and network configurations](/help/en/emr/emr-on-ecs/user-guide/hardware-and-network-configurations).
