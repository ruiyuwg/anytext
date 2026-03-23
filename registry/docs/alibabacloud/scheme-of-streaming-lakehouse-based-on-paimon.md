Apache Paimon (Paimon) provides a unified storage format for different data types. Paimon can work with Apache Flink and Apache Spark to implement a real-time lakehouse architecture that supports streaming and batch operations. Paimon innovatively combines the lake format and the log-structured merge-tree (LSM) structure to support real-time streaming updates in the lake architecture. You can use Paimon tables in Realtime Compute for Apache Flink to quickly build a data lake based on cloud storage services, such as Object Storage Service (OSS).

Paimon provides the following capabilities:

-   **Enhanced real-time data ingestion**: Paimon can work with Realtime Compute for Apache Flink to ingest different types of data into a data lake that supports automatic schema change synchronization and real-time updates from various database systems, such as MySQL. Tens of millions of data records can be efficiently ingested with low latency.
    
-   **Unified stream and batch processing**: Paimon can work with Apache Flink to facilitate stream processing and Apache Spark to facilitate batch processing. Paimon provides a unified format for data lake storage to improve ease of use and reduces costs.
    
-   **Extensive ecosystem integration**: Paimon can seamlessly integrate with a variety of Alibaba Cloud compute services, such as Realtime Compute for Apache Flink, E-MapReduce (Spark, StarRocks, Hive, and Trino), and MaxCompute.
    
-   **Innovative lakehouse storage**: Paimon uses deletion vectors and indexes to ensure a minute-level latency for streaming, batch, and online analytical processing (OLAP) queries.
    

For more information, see [Apache Paimon](https://paimon.apache.org/).

## Usage

### **Familiarize yourself with Paimon**

-   The first time you use Paimon, we recommend that you start with the basic features. For more information, see [Get started with Apache Paimon](/help/en/flink/realtime-flink/use-cases/paimon-quick-start-basic-features).
    
-   Learn the features of Paimon tables. If your data requires streaming updates, use [primary key tables](/help/en/flink/realtime-flink/use-cases/basic-concepts#d91ef651081nm). Otherwise, use [append-only tables (without primary keys)](/help/en/flink/realtime-flink/use-cases/basic-concepts#98df94c7897gn).
    
-   For information about how Paimon ensures data freshness and consistency, see [Data latency and consistency](/help/en/flink/realtime-flink/use-cases/timeliness-and-consistency-of-paimon).
    
-   For information about a step-by-step guide to build a streaming lakehouse, see [Build streaming data lakehouse with Paimon and StarRocks](/help/en/flink/realtime-flink/use-cases/build-a-streaming-data-warehouse-based-on-flink-and-apache-paimon).
    

### **Create a Paimon catalog**

A Paimon catalog provides access to Paimon tables stored in external systems. It allows you to manage Paimon tables in a centralized manner and can be accessed by other Alibaba Cloud services. You can use Paimon catalogs in the following ways:

-   Create and use a Paimon catalog. For more information, see [Manage Paimon catalogs](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs).
    
-   Synchronize the metadata of a Paimon table to [Data Lake Formation (DLF)](/help/en/dlf/dlf-1-0/product-overview/overview-1). For more information, see [Create a DLF catalog](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#b5bd6c55d2f8q).
    
-   Create a Paimon external table in [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute) to access the associated Paimon table. For more information, see [Create a MaxCompute catalog](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#e6308cecf1w0d).
    
-   Synchronize the metadata of a Paimon table to DLF and create a Paimon external table in MaxCompute. For more information, see [Create a Paimon sync catalog](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#a9a9f7f75bz45).
    

### **Create a Paimon table**

-   Directly create a Paimon table in a Paimon catalog. For more information, see [Manage tables](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#795cc1c0e32ex).
    
-   Synchronize data from external sources, such as [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/) and [Apache Kafka](/help/en/flink/realtime-flink/developer-reference/kafka-connector/), to create a Paimon table by using the [CREATE TABLE AS (CTAS) statement](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement) or [CREATE DATABASE AS (CDAS) statement](/help/en/flink/realtime-flink/developer-reference/create-database-as-statement). For more information, see [Create a table using CTAS or CDAS](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#fdf11febf9zkr).
    

### **Write data to a Paimon table**

-   Insert new data to or update data in a Paimon table. For more information, see [Write data](/help/en/flink/realtime-flink/use-cases/write-and-consume-paimon-table-data#d07cadeef9ygt).
    
-   Join a Paimon table with other tables and apply aggregate functions. For more information, see [Merge engine](/help/en/flink/realtime-flink/use-cases/basic-concepts#0cd8ffaf46uic).
    
-   Partially or completely overwrite a Paimon table. For more information, see [Overwrite data (INSERT OVERWRITE)](/help/en/flink/realtime-flink/use-cases/write-and-consume-paimon-table-data#5aca319fca4i7).
    
-   Delete data from a Paimon table. For more information, see [Delete data (DELETE)](/help/en/flink/realtime-flink/use-cases/write-and-consume-paimon-table-data#67f3d4378fvg3).
    
-   Delete partitions from a Paimon table. For more information, see [Modify a table schema](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#c4d92b2f0fl6k).
    

### **Consume data from a Paimon table**

-   Query or consume data from a Paimon table. For more information, see [Consume data](/help/en/flink/realtime-flink/use-cases/write-and-consume-paimon-table-data#0d79486d7293k). If you want to consume data from a primary key table in streaming mode, make sure that you complete the [changelog producer](/help/en/flink/realtime-flink/use-cases/basic-concepts#64abb97f8fnfe) configuration.
    
-   Configure the consumer offset of a Paimon table. For more information, see [Consume data from a specified offset](/help/en/flink/realtime-flink/use-cases/write-and-consume-paimon-table-data#52057042f2mwy).
    
-   Save the consumer offset of a Paimon table or retain expired snapshot files that are still in use. For more information, see [Save consumption progress with consumer ID](/help/en/flink/realtime-flink/use-cases/write-and-consume-paimon-table-data#b37cde0209pdt).
    
-   Run a batch deployment to read the historical states of a Paimon table. For more information, see [Time travel](/help/en/flink/realtime-flink/use-cases/write-and-consume-paimon-table-data#a73d10c723ssm).
    

### **Maintain a Paimon table**

-   Learn how to address common issues related to Paimon. For more information, see [Connector FAQ](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage).
    
-   Optimize the read and write performance of Paimon tables. For more information, see [Performance optimization](/help/en/flink/realtime-flink/use-cases/paimon-performance-optimization).
    
-   Query the metadata of a Paimon table, such as the partitions and the total size of files in each partition. For more information, see [Paimon system tables](/help/en/flink/realtime-flink/use-cases/paimon-system-table).
    
-   Modify the schema of a table in a Paimon Catalog. For more information, see [Modify a table schema](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#c4d92b2f0fl6k).
    
-   Delete a table from a Paimon catalog. For more information, see [Drop a table](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs#69fbacc52bkn2).
    
-   Change the number of buckets for a Paimon table that uses fixed bucket mode. For more information, see [Change the number of buckets in fixed bucket mode](/help/en/flink/realtime-flink/use-cases/basic-concepts#9d77200baajqv).
    
-   Clean up obsolete files in the directory of a Paimon table. For more information, see [Clean up expired data](/help/en/flink/realtime-flink/use-cases/clean-up-expired-data).
