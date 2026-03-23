As business data volumes grow rapidly, storage costs and analytical efficiency for massive datasets become critical challenges for many enterprises. To address these challenges, PolarDB for MySQL introduces the X-Engine column-oriented table feature. This feature leverages column-oriented storage, efficient compression, and parallel computing technologies to reduce storage costs to 10% of the original and improve analytical query performance by an order of magnitude. It enables low-cost data archiving and high-performance real-time analysis while maintaining full compatibility with the MySQL ecosystem.

## **Feature Overview**

X-Engine column-oriented tables use a storage-compute decoupled architecture. Compute and storage resources scale independently, delivering PB-scale data processing capabilities. The storage layer relies on a distributed file system and Object Storage Service (OSS). The compute layer achieves high-performance analytics through deep optimization of the query optimizer, execution operator, and storage engine.

### **Technical Architecture**

#### PolarDB **Overall Architecture**

PolarDB uses a compute-storage decoupled architecture, built on a distributed storage layer. Using the ParallelRaft protocol, it ensures multi-replica consistency and transparently supports OSS. Compute nodes consist of one read/write node (RW) and one or more read-only nodes (RO). It supports both InnoDB and X-Engine engines. The database proxy acts as a bridge between applications and compute nodes, providing read/write splitting and load balancing.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3935901771/CAEQUxiBgIDb94X24hkiIDJhYjEwZjgyMWRmYzQzODJhNDMyOTA3YzliYzE5MTRi4975637_20250314151414.352.svg)

#### **Column-oriented Table Architecture**

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3935901771/p1053398.png)

Its core technical components include the following:

-   **Query optimizer**: A built-in cost-based optimizer (CBO) for hybrid row-column storage that intelligently determines and automatically selects the optimal execution plan—choosing either row store or column store—based on query cost.
    
-   **Execution operator**: Uses column-oriented vectorization and parallel execution technologies to significantly accelerate analytical queries for single-table and multi-table joins through batch processing.
    
-   **Storage engine**: Supports real-time transactional updates. The primary table uses column-oriented storage and delivers fast update capability through the NCI (Non-Clustered Index) component. It marks deleted data using a Delete-mask mechanism, enabling efficient parallel queries without impacting real-time writes. Its row-oriented secondary index quickly filters out invalid data, further improving query efficiency.
    

### **Solution Comparison**

To help you understand and select the appropriate table type, the following table compares key differences between traditional row-oriented tables (such as InnoDB) and PolarDB column-oriented tables:

**Comparison Dimension**

**Row-oriented Table (X-Engine Engine)**

**Column-oriented Table**

**Data Organization**

Stores data contiguously by row, with all columns of a row stored together.

Stores data contiguously by column, with all values of a column stored together.

**Data Compression Ratio**

Medium. Compared to InnoDB, it can compress data to a maximum of 30% of its original size.

High. Using column-oriented storage and specialized encoding such as dictionary encoding, it can compress data to 10% of its original size compared to InnoDB.

**Query Performance**

High point query performance. Suitable for scenarios requiring fast reads of single or a few rows based on primary keys or indexes (OLTP).

Strong analytical performance. It reads only columns involved in the query, reducing I/O. Combined with vectorized parallel computing, aggregation and analysis performance improves by an order of magnitude compared to row-oriented tables.

**Update and Delete Performance**

High. Directly locates and modifies rows.

Relatively lower. It supports real-time updates. Using the NCI component, it quickly locates records requiring modification.

**Scenarios**

Online Transaction Processing (OLTP), such as high-concurrency insert, delete, update, and query operations.

Online Analytical Processing (OLAP), such as data archiving, report generation, ad hoc query, and massive data aggregation and analysis.

## Features

-   **High Cost-Effectiveness**: Column-oriented storage, efficient encoding, and high-ratio compression algorithms—combined with low-cost storage media such as OSS—reduce storage and processing costs for massive data by up to 90%.
    
-   **High-Performance Real-time Analytics**: Data becomes immediately available for analytical queries after ingestion. Multi-core parallelism, vectorization, and Massively Parallel Processing (MPP) technology deliver query performance comparable to dedicated analytical databases, meeting demanding real-time analysis requirements.
    
-   **100% MySQL Compatibility**: Provides a data type system and protocol consistent with MySQL and supports flexible type conversion. Existing applications and tools connect without modification.
    
-   **Independent Elastic Scaling**: The compute-storage decoupled architecture allows compute nodes and storage capacity to scale independently on demand, handling business peaks and data growth seamlessly.
    
-   **Robust Wide Table Support**: A single table supports up to 10,000 columns, satisfying business needs for large wide table storage and high-concurrency writes.
    
-   **Excellent Usability**: Delivers high-compression storage and high-performance analytics within a single database engine and provides full DDL and DML support, simplifying your technology stack and operations and maintenance.
    

## **Scenarios**

#### Low-Cost Archiving of Massive Historical Data

-   Pain point: As businesses grow, historical data—such as orders, logs, and transaction records—in core databases expands rapidly, consuming large amounts of expensive storage. Traditional data migration solutions reduce costs but result in offline data, preventing direct online queries and increasing data usage complexity.
    
-   Solution: Use column-oriented tables for online data archiving. Migrate cold data or entire historical data tables from row-oriented tables (InnoDB) to column-oriented tables within the same PolarDB cluster.
    
-   Core values:
    
    -   Dramatic cost reduction: With a compression ratio of up to 10:1 and low-cost storage media such as OSS, storage costs decrease by 90%.
        
    -   Online data: Archived data remains online and available. Query and analyze it anytime using standard SQL, without complex data migration back.
        
    -   Business transparency: For the application layer, it behaves like a regular MySQL table, requiring no modifications.
        

#### Building a Dedicated Data Warehouse

-   Pain point: Building dedicated data warehouses often incurs high hardware costs, requires complex data synchronization pipelines (extract, transform, and load), and raises operations and maintenance thresholds—especially when introducing new technology stacks such as ClickHouse.
    
-   Solution: Leverage PolarStore’s massive data storage capabilities to aggregate data from multiple input sources and store it uniformly using X-Engine column-oriented tables. You gain massive, low-cost storage along with real-time aggregation and analysis performance.
    
-   Core value:
    
    -   Significantly reduced cost and complexity: No need to purchase expensive dedicated hardware or introduce heterogeneous analytical systems. Build a data warehouse within the familiar MySQL ecosystem, effectively simplifying the technology stack and operations and maintenance.
        
    -   Real-time data analysis: Supports real-time aggregation of input data into column-oriented tables for analysis, avoiding the T+1 data latency caused by traditional extract, transform, and load (ETL) solutions.
        
    -   Massive data processing capabilities: Leveraging X-Engine’s storage architecture and efficient compression, it stores and processes PB-level massive data at low cost.
        

#### Federated Query Analysis

-   Pain point: Enterprise business data is often stored disparately. Some data resides in online databases such as PolarDB, while other data is stored in open formats such as Parquet and ORC on Object Storage Service (OSS). Joint analysis of these data sources typically requires a complex extract, transform, and load (ETL) process to import OSS data into the database.
    
-   Solution: Use PolarDB’s external table feature to directly associate data on OSS.
    
-   Core Value:
    
    -   In-place analysis: No need to move or import data. Directly create external tables for files on OSS within PolarDB, then query them using SQL.
        
    -   Federated query: Easily perform `JOIN` operations between local tables (row store or column store) in PolarDB and OSS external tables to achieve unified analysis of online and offline data.
        

## **Performance Test Report**

The following performance data was obtained in a specific staging environment to help evaluate the benefits of column-oriented tables.

**Note**

The TPC-H implementation in this topic is based on TPC-H benchmarking and cannot be compared with officially published TPC-H benchmarking results. The tests in this topic do not fully comply with all TPC-H requirements.

## Data Loading Performance

-   TPC-H dataset: Storage space is 5.5 times smaller than InnoDB. Loading speed is five times faster than the InnoDB engine.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2327258671/p1044811.png)
    
-   Airline dataset: Storage space is 20 times smaller than InnoDB. Loading speed is 30 times faster than the InnoDB engine.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2327258671/p1044812.png)
    

## TPC-H Query Performance

-   TPC-H 100 GB dataset performance tests: Query performance matches that of dedicated data warehouses (ClickHouse), with most queries faster than ClickHouse.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2327258671/p1044793.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2327258671/p1044797.png)
    
-   Multi-node parallel analysis: In performance tests on a TPC-H 1 TB dataset, query time improved from 1400 seconds on a single node to 167 seconds on six nodes.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2327258671/p1044803.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2327258671/p1044807.png)
