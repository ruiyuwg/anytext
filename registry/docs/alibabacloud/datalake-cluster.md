With scalable computing clusters, the capability for integrating and governing multi-source heterogeneous data, and the capability of integrated processing of batch and stream data, Alibaba Cloud E-MapReduce (EMR) has been widely applied in multiple fields such as financial risk control, e-commerce precision marketing, and IoT time-series data processing. This topic describes the typical applications of EMR in the data lake, data analytics, real-time data streaming, and data serving scenarios.

## **Data lake scenario**

An Alibaba Cloud EMR DataLake cluster has the core capabilities shown in the following table.

**Core capability**

**Component**

**Description**

**Unified storage layer**

OSS-HDFS

Serves as an object storage base that is compatible with the Hadoop Distributed File System (HDFS) protocol. OSS-HDFS replaces the traditional on-premises HDFS, decouples computing resources from storage resources, and separately scales out compute nodes.

**Lake metadata governance**

Data Lake Formation (DLF)

Provides a unified metadata catalog service across Object Storage Service (OSS), databases, and file systems. It supports automatic metadata discovery, fine-grained permission management, and data lineage tracking to simplify the data governance process in a data lake.

**Full-stack analysis engine**

Spark, Hive, and Presto/Trino

Capabilities of offline extract, transform, load (ETL), provided by Spark or Hive, and interactive queries, provided by Presto or Trino, are integrated into EMR. This way, the entire scenario from data ingestion into data lakes, data processing, and data analysis to data egress from data lakes can be implemented. Seamless collaboration with systems like DataWorks and Quick BI is also supported to accelerate the creation of data value.

In the data lake scenario, Alibaba Cloud EMR implements end-to-end data application through the following process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5134472671/CAEQTxiBgMDYkfCu0xkiIGQ4MWZmYzMzMWQxNjRhN2JiNjg1MWE3YTFlNDNiZjdj4891124_20250325114757.179.svg)

The following content describes the process in detail:

1.  **Multi-source data ingestion into data lakes**
    
    -   **Database system**
        
        -   **Relational database (such as MySQL and Oracle)**: You can extract full or incremental data from a relational database by using Sqoop or DataX on a regular basis and synchronizes the data to OSS-HDFS based on the business table schema.
            
        -   **Non-relational database (such as MongoDB and Redis)**: You can use a custom script or a Spark connector to export JSON or binary data and write the data to OSS-HDFS.
            
    -   **Data file**
        
        -   **Log data**: You can use collection tools such as Logstash or Flume to monitor incremental logs such as user behavior logs and system logs in real time, and write the logs to OSS-HDFS with a minute-level latency.
            
        -   **File data**: You can use JindoSDK to upload multiple files, such as CSV and Parquet files, to OSS-HDFS at a time by calling the HDFS API. You can also upload multiple files in the OSS console to meet your requirements.
            
2.  **Data processing and analytics**
    
    -   **Batch processing**: Allows you to use Spark and Hive in an EMR cluster to cleanse, associate, and aggregate raw logs and business data to generate key business metrics, such as the number of daily active users, user retention rate over the last 30 days, and the number of new orders for a specific Stock Keeping Unit (SKU).
        
    -   **Interactive queries**: Allows you to use Trino or Presto to query big data based on the standard SQL syntax. The response time can reach sub-second levels, effectively meeting the requirements of the operational team for multi-dimensional data analysis.
        
3.  **Data application**:
    
    -   **Data science**: The API service provides processed data to downstream applications such as risk control engines and recommendation systems.
        
    -   **Business intelligence**: You can call the Java Database Connectivity (JDBC) API to integrate related data into business intelligence tools, such as Quick BI, to quickly create interactive reports.
        
    -   **Predictive analysis**: The processing results and feature data are pushed to a machine learning platform to train models, such as an SKU sales prediction model. The returned results are stored in a data lake.
        
    -   **Data visualization**: You can call the JDBC API to connect to visualization tools, such as DataV, to display complex data on a dashboard in an intuitive and clear manner.
        

## **Data analytics scenario**

Alibaba Cloud EMR Online Analytical Processing (OLAP) clusters integrate with high-performance OLAP engines such as StarRocks, Doris, and ClickHouse. All these engines provide features such as efficient data compression, column-oriented storage, and parallel query. The features ensure high performance of OLAP clusters in big data analytics scenarios. OLAP clusters are suitable for various business analytics scenarios, such as user profiling, recipient selection, and business intelligence.

In the following process, the StarRocks analytics engine is used to show you how Alibaba Cloud EMR implements end-to-end data application in the data analytics scenario.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5134472671/CAEQTxiBgICWmtyu0xkiIDZiYTc0YmQyZDdmMDRkZmU4OTM0Yjg5M2IwZWU0MjZl4891124_20250326142406.033.svg)

The following content describes the process in detail:

1.  **Data collection**
    
    -   **Real-time data collection**: Flume is used to capture log data and Message Queue for Apache Kafka is used to buffer data streams with high throughput and low latency to ensure stable real-time data processing.
        
    -   **Offline data collection**: Periodically extracts data from relational databases such as MySQL and Oracle by using Sqoop or DataX on a regular basis and synchronizes the data to StarRocks.
        
2.  **Hierarchical architecture of StarRocks**: Processes and layers data in StarRocks to manage the entire lifecycle of the data.
    
    -   **DIM layer** (dimension layer): Dimension data, such as user attributes and commodity categories, is stored at this layer. Multi-granularity analysis is supported.
        
    -   **ODS layer** (operational data store layer): Stores raw data, retains the initial state of data, and supports backtracking analysis.
        
    -   **DWD layer** (data warehouse detail layer): Data cleansing, format standardization, and basic association can be performed at this layer to generate usable detailed datasets.
        
    -   **DWS layer** (data warehouse summary layer): Pre-aggregates metrics by business subject, such as user behavior and order conversion, to improve query efficiency.
        
3.  **Data application**
    
    -   **User profiling**: You can create a user profile based on the tags at the DIM layer and behavioral data at the DWS layer to implement precision marketing.
        
    -   **Recipient selection**: You can select the desired user group based on the combination of multiple conditions, such as the users who have been highly active but have not made any payments in the past 30 days.
        
    -   **Business intelligence**: You can call the JDBC API to integrate related data into business intelligence tools, such as Quick BI, to generate visualized analysis results such as daily reports, weekly reports, and real-time dashboards.
        

## Real-time data streaming scenario

Alibaba Cloud EMR Dataflow clusters integrate with core components such as OSS-HDFS, Flink, and Paimon to demonstrate end-to-end capabilities from real-time data ingestion to agile business analysis. This type of cluster supports efficient data storage, and real-time data processing and analysis, and is widely used in scenarios such as real-time risk control and real-time dashboards.

-   **OSS-HDFS**: Provides a scalable storage layer that is compatible with the HDFS protocol. It supports persistent storage of petabytes of real-time data, millisecond-level writing, and low-cost cold and hot data tiering.
    
-   **Flink**: Implements ETL operations on data streams (such as log parsing and dimension association), window aggregation (such as minute-level Gross Merchandise Volume (GMV) measurement), and complex event processing (such as formulation of risk control rules).
    
-   **Paimon**: Allows you to use streaming data lakes to manage real-time incremental data and historical snapshots in a centralized manner. Change data capture (CDC) synchronization, atomicity, consistency, isolation, durability (ACID) transactions, and time-travel queries are supported.
    

In the following process, Flink, Paimon, and OSS-HDFS are used to build a streaming data lakehouse to support a real-time dashboard.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5134472671/CAEQTxiBgICjzt.u0xkiIDQyYTMyNGQzOWQ5YzQ0OWU4YmVkZjNhYjQxYzgyMDUx4891124_20250326193641.423.svg)

The following content describes the process in detail:

1.  **Real-time data access from multiple sources**: You can use various Flink connectors to collect database changes, logs, and event tracking data in real time.
    
2.  **Streaming data lakehouse**
    
    -   **Flink**: As an integrated batch and stream data computing engine, Flink consumes data streams in real time, and performs operations such as cleansing, transformation (such as log parsing and event tracking point standardization), and dimension association.
        
    -   **Paimon**: Stores processing results in the form of a streaming data lake and supports the following features:
        
        -   **Changelog**: You can use this mechanism to record data changes, including data insertion, update, and deletion, to ensure the integrity of ACID transactions and real-time incremental synchronization.
            
        -   **Hierarchical modeling**: You can use the combination of Paimon and a data layer, such as the ODS, DWD, or DWS layer, to build a hierarchical data architecture and to accumulate and reuse data layer by layer.
            
    -   **OSS-HDFS**: Supports persistently stored raw logs, incremental snapshots of Paimon, and historical archived data.
        
3.  **Data application**: Allows you to use StarRocks to generate real-time business reports, such as reports about GMV monitoring and user retention analysis. You can integrate related data into business intelligence (BI) tools, such as Quick BI, to build a dashboard and therefore facilitate T+0 decision making.
    

## **Data serving scenario**

Alibaba Cloud EMR DataServing clusters integrate with core components such as OSS-HDFS, HBase, and Phoenix to build up end-to-end capabilities from massive data storage to high-performance queries. This type of cluster supports efficient data storage management, flexible multi-dimensional query, and millisecond-level responding, and is widely used in scenarios such as user behavior analysis and precision marketing.

-   **HBase**:
    
    -   Based on the column-oriented storage and distributed architecture, HBase provides high-throughput real-time read and write capabilities and supports millisecond-level low-latency write and point query of large amounts of data, such as order status query and user behavior record query.
        
    -   The storage and computing decoupling design is used to persist HFile to OSS-HDFS and support fast cluster recreation.
        
-   **Phoenix**:
    
    -   As the SQL query engine of HBase, Phoenix maps NoSQL data to standard relational tables and supports complex SQL analysis, such as multi-table association and aggregate computing. The query response time is optimized to sub-second levels when hundreds of billions of data records need to be dealt with.
        
    -   You can use mechanisms such as secondary index creation and query pushdown to accelerate operations, such as tag selection and user grouping, and reduce the threshold for business development.
        

In the data serving scenario, Alibaba Cloud EMR uses the HBase+OSS-HDFS storage architecture and the Phoenix query engine to support business teams in user behavior analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6134472671/CAEQTxiBgICpiO2u0xkiIDk1Y2VlNGE5OGRiYzRiZTViMjI2MjIzZGVjOWE3Y2E54891124_20250327095726.674.svg)

The following content describes the process in detail:

1.  **Data processing**
    
    -   **Stream processing**: You can use Flink to consume log data streams in real time, perform data cleansing (such as denoising and format standardization), window aggregation (such as real-time unique visitor (UV) measurement), and event alerting (such as abnormal traffic detection), and write the processing results to an HBase cluster in real time by calling the HBase API.
        
    -   **Batch processing**: Spark periodically processes data of a relational database in batches, performs complex ETL operations, such as user tag calculation and data deduplication, and writes the data to an HBase cluster.
        
2.  **Massive data storage**
    
    -   **OSS-HDFS**: Persistently stores raw logs and HBase HFiles, and allows you to use the JindoCache accelerated access feature to reduce the OSS-HDFS read and write latency.
        
    -   **HBase cluster**: Supports real-time data writing, such as writing user behavior records, and high-frequency point query requests, such as order status query.
        
3.  **User behavior**: Based on the tag data stored in HBase, such as interest preferences and consumer behavior, you can execute Phoenix SQL statements to implement complex queries, such as querying the users who have purchased a certain category of products and clicked ads related to the product category in the last seven days, to support precision marketing.
