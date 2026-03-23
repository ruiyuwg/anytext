E-MapReduce (EMR) Serverless StarRocks is a fully managed service of open source StarRocks on Alibaba Cloud. You can create Serverless StarRocks instances and manage the instances and data in the EMR console in a flexible manner. This topic describes the core features of open source StarRocks and the enhanced features that are provided by Serverless StarRocks based on open source StarRocks.

## Overview of open source StarRocks

StarRocks is an analytic database that supports the MySQL protocol. StarRocks adopts the Massively Parallel Processing (MPP) framework and provides a vectorized execution engine, a cost-based optimizer (CBO), intelligent materialized views, and a real-time, updatable columnar storage engine. This helps you achieve fast, real-time, and efficient multi-dimensional data analysis. You can import real-time or offline data sources into StarRocks for data analysis, or directly analyze data in different formats in a data lake. StarRocks is compatible with the MySQL protocol. Therefore, you can use a MySQL client and common BI tools to connect to StarRocks. StarRocks provides horizontal scaling capabilities and features high availability, high reliability, and easy O&M. You can use StarRocks in various analysis scenarios, such as analysis of data in real-time data warehouses, online analytical processing (OLAP) reports, and data lakes.

## Features of open source StarRocks

### MPP framework

StarRocks adopts the MPP framework. A query request is split into multiple physical computing units that can be executed in parallel on multiple machines. Each machine is equipped with dedicated CPU and memory resources. The MPP framework allows a single request to fully use the resources of all machines. This way, the performance of a single query can be continuously improved when your cluster is scaled out.

### Fully vectorized execution engine

StarRocks adopts vectorization technologies at the computing layer to optimize all operators, functions, scanning and filtering modules, and import and export modules in a systematic manner. The vectorized execution engine maximizes the processing power of CPUs. You can use the vectorized execution engine to organize and process data that is stored in columns. This greatly improves work efficiency. StarRocks stores data, organizes data in the memory, and computes SQL operators based on columns. This makes full use of the CPU cache and reduces virtual function calls and branch judgments. As a result, CPU instructions are executed in a smooth and efficient manner.

The vectorized execution engine can use fewer single instruction, multiple data (SIMD) instructions provided by the CPU to perform more data operations. The test on standard datasets shows that the overall performance of operators is improved by 3 to 10 times.

In addition to full vectorization of operators, the execution engine of StarRocks provides other optimization technologies, such as Operation on Encoded Data. This technology allows StarRocks to execute various operators, such as join, aggregation, and expression operators, on encoded strings without the need to decode data. This significantly reduces the computing complexity during SQL statement execution and improves the query speed by more than two times.

### Compute-storage separation

StarRocks 3.0 supports the compute-storage separation architecture. The architecture decouples computing resources from storage resources. This improves the flexibility, performance, and reliability of StarRocks and reduces costs.

In the compute-storage separation architecture, storage and computing resources can be separately increased or decreased. This prevents resource waste caused by the proportional scaling of computing and storage resources in the compute-storage integration architecture. In addition, compute nodes can be dynamically scaled within seconds, which greatly improves resource utilization.

The storage layer of StarRocks provides nearly unlimited capacity and high availability of object storage. StarRocks supports various object storage services and is compatible with HDFS. This ensures the storage and persistence of large-scale data.

The compute-storage separation architecture retains the features provided by the compute-storage integration architecture. The performance of data writing and hot data query is almost the same in the two architectures. You can use the compute-storage separation architecture to perform the same operations, such as data updates, data lake analysis, and materialized view-based acceleration, as you perform by using the compute-storage integration architecture.

### **CBO optimizer**

In multi-table join queries, an execution engine that delivers high performance may be unable to ensure optimal execution performance. This is because the efficiency of different execution plans greatly varies. As the number of join tables increases, the number of effective execution plans exponentially increases, which makes it NP-hard to find an optimal execution plan. In this case, a query optimizer that can accurately find the best query plan is required to achieve optimal performance in multi-table join queries.

StarRocks provides a new CBO. The CBO adopts the cascades-like architecture and is customized for the vectorized execution engine of StarRocks to provide various innovative and optimized measures. The CBO helps you reuse common expressions and rewrite related subqueries. The CBO also supports Lateral Join, Join Reorder, and policy selection for distributed join execution, and optimizes the performance of key features such as low-cardinality dictionary encoding. The CBO supports a total of 99 TPC-DS SQL statements.

StarRocks outperforms its competitors in multi-table join queries, especially in complex multi-table join queries. This greatly improves the potential performance of the vectorized execution engine.

### Real-time, updatable columnar storage engine

StarRocks adopts an advanced columnar storage engine to continuously store data of the same type in columns. Columnar storage allows data to be encoded in a more efficient manner. This improves the data compression ratio, reduces storage costs, and reduces disk I/O during the query process. As a result, the query speed is greatly improved. In typical OLAP scenarios, only data of specific columns is queried. Columnar storage allows you to read data only of required columns, which significantly reduces the I/O load on disks.

StarRocks allows you to load data within seconds and provides near-real-time data processing capabilities. The storage engine of StarRocks ensures the atomicity, consistency, isolation, durability (ACID) during data import. When you import data in batches, the import transaction either succeeds or fails. The storage engine allows multiple transactions to be executed in parallel and provides the snapshot isolation feature for the transactions.

The storage engine also supports operations such as partial update and upsert. The Delete-and-Insert mode of the storage engine allows you to quickly filter data by using primary key indexes. This prevents the sort and merge operations from being performed during the data read process. The storage engine can also use secondary indexes to quickly respond to query requests in large-scale data update scenarios.

### Intelligent materialized views

-   Automatic data synchronization and real-time updates: StarRocks allows you to use materialized views to accelerate queries and perform data warehouse layering. The materialized views of StarRocks can automatically synchronize data from original tables. When data in an original table changes, the corresponding materialized view can detect and synchronize data in real time. This ensures data consistency. StarRocks can automatically select materialized views. In the query planning phase, if StarRocks detects that a materialized view can improve the query efficiency, StarRocks automatically rewrites the query to ensure that the optimal materialized view is used for the query.
    
-   Flexible creation and management of materialized views: StarRocks allows you to create and delete materialized views in a flexible manner. After you trigger a creation or deletion, the system completes the operation in the background without manual intervention.
    
-   Simplified extract, transform, and load (ETL) process and data processing: Materialized views of StarRocks can replace the traditional ETL modeling process. You can directly transform and process data when you use materialized views without the need to transform data in upstream applications. This simplifies the data processing process.
    

### Data lake analysis

You can use StarRocks to analyze on-premises data and data that is stored in data lakes in an efficient manner. You can use external catalogs provided by StarRocks to query data stored in data lakes, such as Apache Hive, Apache Iceberg, Apache Hudi, and Delta Lake, without the need to migrate data. StarRocks supports file formats such as Parquet, ORC, and CSV. StarRocks allows you to store data by using services, such as HDFS, Amazon Simple Storage Service (S3), and Object Storage Service (OSS).

In data lake analysis scenarios, StarRocks is used to compute and analyze data, and data lakes are used to store, organize, and maintain data. Data lakes allow you to store data in various formats and define schemas in a flexible manner. Data lakes offer a single source of truth (SSOT) for various business scenarios, such as BI, AI, ad hoc queries, and data reporting, to ensure data consistency and accuracy. StarRocks fully leverages the advantages of its vectorized execution engine and CBO to improve the performance of data lake analysis.

## Enhanced features of Serverless StarRocks

Serverless StarRocks optimizes the enterprise-level features in the following aspects:

-   Easy O&M: Serverless StarRocks is a fully managed, O&M-free service. This significantly reduces the complexity and O&M costs of StarRocks.
    
-   Visualized management of StarRocks instances: You can manage StarRocks instances and perform O&M on the instances in a convenient manner.
    
-   Visualized monitoring and O&M capabilities.
    
-   Automatic upgrade of major and minor versions of StarRocks: You can manage the versions of StarRocks in a convenient manner.
    
-   Support for EMR StarRocks Manager: Serverless StarRocks provides enterprise-level management capabilities.
    
    -   Security capabilities: You can manage users and permissions.
        
    -   Diagnostic analysis: Serverless StarRocks supports visualized slow SQL queries and SQL query and analysis capabilities.
        
    -   Data management: You can query databases, tables, partitions, shards, and tasks. This improves the O&M efficiency.
