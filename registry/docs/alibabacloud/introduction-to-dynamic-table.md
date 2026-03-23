Hologres Dynamic Table is a declarative data processing architecture that automatically processes and stores aggregated results from one or more base tables. It includes configurable, built-in data refresh policies that enable automatic data forwarding from base tables to Dynamic Tables. Dynamic Table addresses the need for unified development, automatic data forwarding, and timely data processing.

## **Background**

Real-time data warehouse scenarios often involve complex business logic, such as multi-table joins and large table aggregations. These operations typically handle large data volumes, from terabytes to petabytes, and have varying timeliness requirements. Data transformation in these scenarios commonly presents the following pain points:

-   **Overly redundant Lambda architecture**: To balance resource costs, development efficiency, and business timeliness, the Lambda architecture was widely adopted. However, this architecture relies on a wide range of products for different scenarios, which leads to architectural and storage redundancy, inefficient development and operations and maintenance (O&M), and inconsistent data definitions.
    
-   **Repetitive offline ETL scheduling with poor timeliness**: Using an offline computing engine, such as Hive, for extract, transform, and load (ETL) is a common data transformation method. This approach is suitable for high-throughput processing of large data volumes but lacks real-time computing capabilities. To improve data freshness, data is often recalculated repeatedly through periodic scheduling. This wastes a significant amount of resources and cannot fully meet business timeliness requirements.
    
-   **High cost of real-time computing**: To improve data processing timeliness, using a real-time computing engine for real-time transformation has become a new trend. However, not all services in a data warehouse require real-time computing. Many scenarios, such as business intelligence (BI) report queries, only need near-real-time processing at the minute level. Using real-time computing for these scenarios leads to excessively high resource costs.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5281838671/p1030331.png)

To address these data transformation pain points, Hologres introduces Dynamic Table. It supports full and incremental computing modes. This allows it to handle offline full processing of large data volumes and use incremental computing to improve data timeliness at a lower cost than real-time computing. Dynamic Table enables automatic data computation and result updates, achieving more efficient and cost-effective automatic data flow and data warehouse layering. Combined with the native features of Hologres, Dynamic Table unifies the storage, computing, data transformation, and data warehouse service layers to meet development efficiency and timeliness requirements.

## Advantages of Dynamic Table

-   **Simplified data warehouse architecture**
    
    Dynamic Table supports full and incremental refresh modes. This enables both offline data transformation (full computing) and near-real-time data transformation (incremental computing) to meet different query timeliness requirements. Based on the unified storage of Hologres for both real-time and offline data, Dynamic Table directly supports query requirements from multiple application scenarios, such as online analytical processing (OLAP) queries, online services, and AI and large models. A single engine, a single computation, and a single SQL statement with multiple computing modes can replace the Lambda architecture. This simplifies the data warehouse architecture and reduces development and O&M costs.
    
-   **Automatic data warehouse layering**
    
    A Dynamic Table can automatically trigger a refresh based on the freshness of the base table data. This enables automatic data forwarding from the operation data store (ODS) > data warehouse detail (DWD) > data warehouse service (DWS) > application data service (ADS) layers, which improves the development experience for data warehouse layering.
    
-   **Improved data processing (ETL) efficiency**
    
    The incremental refresh of a Dynamic Table processes only the new data from the base table in each refresh. This effectively reduces the amount of data computed in each ETL process and significantly improves data processing efficiency. Resources do not need to be constantly active as they are in stream computing. Automatic refreshes triggered by data freshness can effectively reduce costs.
    
-   **Lower development and O&M costs**
    
    All refresh modes for a Dynamic Table use a unified SQL interface. Dynamic Tables automatically manage refresh tasks and the hierarchical dependencies between data. This simplifies complex development and O&M and improves development efficiency.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6833569271/p846287.png)

## **Terms**

-   **Base Table**
    
    A base table is the data source for a Dynamic Table. It can be a single internal or foreign table, or a join of multiple tables. The supported types of base tables vary depending on the refresh mode. For more information, see [Supported features and limits of Dynamic Table](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).
    
-   **Query**
    
    The query specified when creating a Dynamic Table is the query that processes the base table data, similar to an ETL process. The supported query types vary depending on the refresh mode. For more information, see [Supported features and limits of Dynamic Table](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).
    
-   **Refresh**
    
    When data in a base table changes, the Dynamic Table must be refreshed to reflect those changes. Dynamic Tables automatically run refresh tasks in the background based on the configured refresh start time and interval. For more information about how to monitor and manage refresh tasks, see [Manage Dynamic Table refresh tasks](/help/en/hologres/user-guide/maintain-dynamic-table-update-tasks).
    

## **How it works**

Data from a base table is written to a Dynamic Table through a refresh process, following the data processing flow defined by the query of the Dynamic Table. This section describes the technical principles behind Dynamic Table, focusing on refresh modes, compute resources, data storage, and table indexes.

### **Refresh modes**

Dynamic Table currently supports two refresh modes: full and incremental. The underlying technical principles differ depending on the configured refresh mode.

#### **Full refresh**

A full refresh processes all data during each run. It materializes the aggregated results of the base table and writes them to the Dynamic Table. The technical principle is similar to that of an INSERT OVERWRITE operation.

#### Incremental refresh

In incremental refresh mode, each refresh reads only the new data from the base table. It calculates the final result based on the intermediate aggregation state and the incremental data, and then updates the Dynamic Table. Compared to a full refresh, an incremental refresh processes less data during each run, which results in higher efficiency. This significantly improves the timeliness of refresh tasks while reducing the use of compute resources.

-   Technical principle
    
    When you create a Dynamic Table with incremental refresh, the system reads incremental data from the base table using the Stream or Binlog method. Then, it creates a column-oriented state table in the background. This state table stores the intermediate aggregation state of the query. The DPI engine optimizes the encoding and storage of this intermediate state to accelerate its reading and updating. Incremental data is aggregated in micro-batches in memory and then merged with the data in the state table. The latest aggregated results are then efficiently written to the Dynamic Table using the BulkLoad method. This micro-batch incremental processing reduces the amount of data processed in a single refresh and significantly improves computation timeliness.
    
-   Comparison of Stream and Binlog methods for reading incremental data
    
    **Method for reading incremental data**
    
    **Principle**
    
    **Read performance**
    
    **Features**
    
    **Notes**
    
    **Stream (Recommended)**
    
    Detects data changes at the file level to compute the incremental data of the base table.
    
    More than 10 times higher than that of the Binlog method.
    
    Simpler to use.
    
    Does not record incremental changes separately. This means there is no extra storage overhead, and you do not need to manage the storage lifecycle of binary logs.
    
    Does not support using row-oriented tables as base tables.
    
    **Binlog**
    
    Binary logging records Data Manipulation Language (DML) changes to the base table and stores them as a binary log in the background. When consuming incremental data from the base table, the system reads the binary log to detect data changes.
    
    Lower.
    
    -   Incurs extra storage overhead because it records DML changes.
        
    -   Requires management of the binary log's storage lifecycle (TTL). Otherwise, storage usage continues to increase as data changes or grows.
        
    
    None.
    
-   Notes
    
    -   There are certain limits on the base tables supported by the incremental refresh mode. For more information, see [Supported features and limits of Dynamic Table](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).
        
    -   The built-in state table for incremental refresh occupies some storage space. The system sets a TTL to periodically clean up data. You can use a function to view the storage size of the state table. For more information, see [Manage state tables](/help/en/hologres/user-guide/view-the-dynamic-table-structure-and-blood-relationship#b089affb1a6o0).
        

### **Compute resources**

The compute resources for executing refresh tasks can come from the current instance or Serverless resources:

-   Serverless resources (default): In Hologres V3.1 and later, new Dynamic Tables use Serverless resources by default to execute refreshes. If a query is complex and processes a large amount of data, using Serverless resources can improve the stability of the refresh task and avoid resource contention among multiple tasks within the instance. You can also modify the compute resources for a single refresh task to optimize the use of Serverless resources.
    
-   Current instance resources: The refresh task uses the resources of the current instance and shares them with other tasks in the instance. This may lead to resource contention during peak hours.
    

### **Data storage**

The data storage of a Dynamic Table is the same as that of a standard table, which uses the hot storage mode by default. To reduce storage costs, you can move data that is queried less frequently to cold storage.

### **Table indexes**

When running queries, you can query the Dynamic Table directly. This is equivalent to querying the aggregated results directly, which can significantly improve query performance. Like standard tables, Dynamic Tables also support setting table indexes, such as row store or column store, Distribution Key, and Clustering Key. Typically, the DPI engine infers suitable indexes based on the query of the Dynamic Table. If you require further optimization, you can set new indexes to further improve query performance.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6833569271/p846288.png)

## **Comparison with materialized views**

### **Dynamic Table vs. Hologres real-time materialized view**

Hologres introduced [SQL-managed materialized views](/help/en/hologres/user-guide/real-time-materialized-view) in V1.3, but their capabilities are relatively limited. The differences between SQL-managed materialized views and Dynamic Tables are as follows:

**Feature category**

**Hologres Dynamic Table**

**Hologres real-time materialized view**

Base table type

-   Internal table
    
-   Foreign table (MaxCompute, Paimon, OSS)
    
-   Dynamic Table
    
-   View
    

Single internal table

Base table operation

-   Write
    
-   Update
    
-   Delete
    

Append-only writes

Refresh principle

Asynchronous refresh (full refresh, incremental refresh)

Synchronization

Refresh timeliness

-   Minute-level
    
-   Hour-level
    

Real-time

Query type

-   Single-table aggregation
    
-   Multi-table join
    
-   Dimension table JOIN
    
-   Complex OLAP: window functions, CTEs, RB, etc.
    

**Note**

The supported query types vary depending on the refresh mode. For more information, see [Supported features and limits of Dynamic Table](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).

Limited operator support (AGG, RB functions, etc.)

Demand mode

Query the Dynamic Table directly

-   Query the materialized view directly
    
-   Query rewrite
    

### Dynamic Table vs. asynchronous materialized view

Other products on the market offer features similar to Dynamic Table, such as asynchronous materialized views in OLAP products and Snowflake's Dynamic Table. The differences are as follows:

**Feature category**

**Hologres Dynamic Table**

**OLAP product asynchronous materialized view**

**Snowflake Dynamic Table**

Base table type

-   Internal table
    
-   Foreign table (MaxCompute, Paimon, OSS)
    
-   Dynamic Table
    
-   View
    

**Note**

The supported query types vary depending on the refresh mode. For more information, see [Supported features and limits of Dynamic Table](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).

-   Internal table
    
-   Foreign table (Hive, Hudi, Iceberg, etc.)
    
-   Materialized view
    
-   View
    

-   Internal table
    
-   Dynamic Table
    
-   View
    

Refresh mode

-   Full refresh
    
-   Incremental refresh
    

-   Full refresh
    
-   Refresh by specified partition or timestamp range
    

-   Full refresh
    
-   Incremental refresh
    

Refresh timeliness

-   Minute-level
    
-   Hour-level
    

Hour-level

-   Hour-level
    
-   Minute-level
    

Query type

-   Single-table aggregation
    
-   Multi-table join
    
-   Dimension table JOIN
    
-   Complex OLAP: window functions, CTEs, RB, etc.
    

**Note**

The supported query types vary depending on the refresh mode. For more information, see [Supported features and limits of Dynamic Table](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).

-   Single-table aggregation
    
-   Multi-table join
    
-   Dimension table JOIN
    
-   Complex OLAP: window functions, CTEs, etc.
    

-   Single-table aggregation
    
-   Multi-table join
    
-   Dimension table JOIN
    
-   Complex OLAP: window functions, CTEs, etc.
    

Demand mode

Query the Dynamic Table directly

-   Query the materialized view directly
    
-   Query rewrite
    

Query the Dynamic Table directly

Monitoring/O&M

-   DataWorks and HoloWeb visualization interfaces
    
-   Rich monitoring metrics
    

Rich monitoring metrics

Visualization interface

## **Typical Scenarios**

Dynamic Table automatically completes data transformation and storage. You can use Dynamic Table to accelerate data queries and improve business timeliness. Recommended scenarios include the following:

### Lambda architecture upgrade

To meet the different timeliness requirements for business data processing, the Lambda architecture uses various product components. This leads to a redundant architecture, inconsistent data definitions, difficult system maintenance, and storage redundancy. Hologres Dynamic Table supports batch data transformation and near-real-time processing. Combined with the unified storage and unified data service of Hologres, which supports OLAP queries and key-value (KV) point queries, it can support multiple application scenarios within a single product. This simplifies the architecture and reduces development complexity, learning curves, and storage costs.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5281838671/p1030939.png)

### Near-real-time data processing

If a base table contains a large amount of data and requires complex ETL processing to meet business timeliness requirements, a common practice is data warehouse layering. For real-time data warehouses, many solutions for layering exist, such as using materialized views or periodic scheduling. Although these solutions can solve some problems, they also introduce issues related to data timeliness and development complexity. Hologres Dynamic Table has a built-in capability for automatic data processing, which makes it easy to implement data warehouse layering.

The recommended practice is as follows:

Build the DWD > DWS > ADS layers in Hologres using Dynamic Tables:

-   Use the incremental refresh mode for data synchronization between each layer. This ensures that less data is processed at each layer, reduces unnecessary repeated calculations, and improves synchronization speed. You can also submit refresh tasks to Serverless Computing to improve refresh timeliness and stability.
    
-   To refresh the data of each layer, you can perform a one-time full refresh to ensure data consistency across layers. You can also submit the refresh task to Serverless Computing to improve timeliness and stability.
    
-   Each layer is built in Hologres, with clear data warehouse layering. Each layer can be queried as needed, which ensures data visibility and reusability.
    

The Hologres Dynamic Table solution can handle both data transformation and application scenarios, significantly improving data warehouse development and O&M efficiency.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6833569271/p846292.png)

### **Lakehouse acceleration**

The base table data for a Dynamic Table can come from Hologres tables, data warehouses such as MaxCompute, or data lakes such as OSS and Paimon. By performing full or incremental refreshes on the base table data, you can meet various data query and exploration needs that have different timeliness requirements. Recommended scenarios include the following:

-   Periodic report queries
    
    For periodic observation scenarios, such as periodic reports, if the data volume is small or the query is not complex, you can use the full or incremental refresh mode. Periodically refresh the aggregation and analysis results of lakehouse data to a Dynamic Table. The application side can then directly query the Dynamic Table to retrieve the analysis results, which accelerates report queries.
    
-   Real-time dashboards/reports
    
    For scenarios such as real-time dashboards and reports, data timeliness requirements are higher. We recommend that you use the incremental refresh mode. Refresh the aggregation and analysis results from Paimon or real-time data to a Dynamic Table. This accelerates the processing of real-time data. The application side can directly query the Dynamic Table to retrieve data analytics results and achieve near-real-time analysis.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6833569271/p846291.png)
    

### Replacing offline periodic and repetitive scheduling

In typical offline processing scenarios, the data volume is large and the computation cycle is long. To improve computation timeliness, a common approach is a periodic scheduling solution:

From DWD to DWS to ADS, data from the last few days is processed on a T+H basis, for example, scheduled every 30 minutes. To ensure data accuracy, a separate offline pipeline is also run on a T+1 basis to process data from the last few days. This is equivalent to a data refresh, which results in a large amount of redundant computation, wasted resources, and data redundancy. Additionally, the system cannot guarantee that each scheduled task will complete, which can block subsequent tasks, delay business computations, and fail to meet timeliness guarantees.

With Hologres, you can use T+H incremental refresh for each layer from DWD to DWS to ADS. The original jobs can be merged into a single incremental computing job. You do not need to worry about the specific data query range. You only need to manage the refresh. The SQL is simpler, and Dynamic Tables handle scheduling automatically, which eliminates the need to maintain external scheduling jobs. Only incremental data is calculated each time. This avoids redundant computation, speeds up calculations, prevents task backlogs, and significantly reduces compute resource usage.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4129223771/CAEQUBiBgMDZ.LWd2hkiIGViNDBjZDI4ODA4MDQxNzQ5NzhjMWRjNDE5YzU0MzFk5902368_20251201141039.171.svg)
