This topic describes the business pain points that the near real-time data warehouse solution can address and its main architectural features.

## **Background information**

Enterprises rely on big data platforms to quickly gain insights from massive amounts of data for timely and effective decision-making. They also have increasingly higher requirements for data freshness and real-time processing. Big data platforms generally use a combination of offline, real-time, and stream processing engines to meet user requirements for real-time performance and cost-effectiveness. However, many business scenarios do not require row-level updates or data visibility within seconds after a data update. Instead, they require near real-time data processing at the minute or hour level combined with batch processing of massive data. MaxCompute has upgraded its architecture based on the original offline batch processing engine and launched a near real-time data warehouse solution.

The solution implements integrated storage and management of incremental and full data based on Delta tables. It also provides rich incremental computing capabilities and has upgraded the MaxCompute Query Accelerator 2.0 (MaxQA, formerly MCQA2.0) feature to support query responses within seconds.

## **Current situation analysis**

-   Typical data processing business scenarios:
    
    -   For scenarios of large-scale full data batch processing with low timeliness requirements, MaxCompute alone can meet business requirements well.
        
    -   For real-time data processing within seconds or stream processing with high timeliness requirements, real-time systems or stream systems are needed to meet the requirements.
        
-   Comprehensive business scenarios: For near real-time data processing scenarios with minute-level or hour-level timeliness requirements and massive data batch processing scenarios, either using a single engine or using multiple engines for federated query will have some issues.
    

The following figure shows the architecture.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8110780961/p684777.png)

-   If only the batch processing pipeline of MaxCompute is used, some scenarios require continuous merging and storage of minute-level incremental data and full data, resulting in redundant computing and storage costs. Some other scenarios require converting various complex pipelines and processing logic into T+1 batch processing, greatly increasing pipeline complexity and resulting in poor timeliness.
    
-   If only a real-time system is used, the resource consumption cost is relatively high, the cost-effectiveness is low, and the stability for large-scale data batch processing is insufficient. Therefore, the Lambda architecture is a typical solution. In this architecture, the MaxCompute pipeline is used for full batch processing, and the real-time system pipeline is used for incremental processing with higher timeliness requirements. However, this architecture also has some inherent defects, such as data inconsistency issues caused by multiple processing and storage engines, additional costs introduced by redundant storage and computing of multiple copies of data, the complex architecture, and long development cycles.
    

In response to these issues, the big data open source ecosystem has launched various solutions in recent years. Spark, Flink, and Presto are the most widely adopted open source data processing engines. These engines are deeply integrated with the open source data lake formats Hudi, Delta Lake, and Iceberg to implement a comprehensive solution with a unified computing engine and unified data storage. This solution addresses a range of issues brought by the traditional Lambda architecture.

MaxCompute has developed a self-designed incremental data storage and processing architecture based on its offline batch processing architecture. It can provide an integrated solution for offline and near real-time incremental processing. While maintaining the economical and efficient advantages of batch processing, it also has the capability to meet business requirements for minute-level incremental data reading, writing, and processing. In addition, it provides a series of practical features such as Upsert and Time Travel to expand business scenarios, effectively reducing data computing, storage, and migration costs, and improving user experience.

## **MaxCompute near real-time architecture**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8844458471/p850520.png)

The preceding figure shows the new architecture in which MaxCompute efficiently supports the comprehensive business scenarios mentioned above. In this new architecture, MaxCompute supports various data sources to allow you to easily import incremental and full data to a unified storage system using custom access tools. The background data management service automatically optimizes the data storage structure. A unified compute engine is used to support both near real-time incremental data processing and batch processing of large-scale offline data. A unified metadata service is used to support transaction and file metadata management.

The advantages of this architecture are significant. It effectively solves problems such as redundant computing and storage and low timeliness caused by pure offline systems processing incremental data. It also avoids the high resource consumption costs of real-time or stream systems. Additionally, it eliminates the inconsistency issues of multiple systems in the Lambda architecture and reduces both the redundant storage costs of multiple copies and the data migration costs between systems.

The SQL optimizer has been enhanced with specific optimizations for incremental queries, especially in the context of incremental refreshes for materialized views. Based on cost estimation, the optimizer decides whether to use a state-based incremental algorithm or a snapshot-based incremental algorithm for the refresh operation. The query acceleration layer (MaxQA) is built on a virtual warehouse-based, strongly isolated resource foundation, which not only improves query performance but also ensures high stability and consistent performance across queries. Relying on the self-developed FDC, the acceleration layer has optimized the full-link cache, the optimizer has added a latency-oriented optimization mode, and the runtime has further optimized vectorized execution to avoid Codegen-related overhead during the execution phase.

The end-to-end integrated architecture meets business requirements for computing and storage optimization of incremental data processing and minute-level timeliness, ensures the overall efficiency of batch processing, and effectively reduces resource costs.

## **Core features**

The MaxCompute near real-time data warehouse provides the following three core features: Delta table, incremental computing, and MaxQA. The Delta table feature supports minute-level data import, the incremental computing feature helps better balance latency and throughput, and the newly upgraded MaxQA feature supports query responses within seconds.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7007614471/p850619.png)

The three core features are as follows:

-   **Delta table**: An incremental data table format. It enables minute-level data import, uses AliORC as the underlying file format, supports UPSERT semantics, and can provide standard change data capture (CDC) methods for reading and writing incremental data. It relies on the backend storage and metadata services of MaxCompute for automatic data management.
    
-   **Incremental computing**: Based on the Delta table feature, MaxCompute has added a series of incremental computing capabilities, such as incremental materialized views, Time Travel, and stream tables. At the same time, incremental materialized views and periodically scheduled tasks provide different trigger frequencies, giving users more means to balance latency and throughput.
    
-   **MaxQA**: This is a complete upgrade of MaxCompute query acceleration. It improves performance stability through a strongly isolated environment and extends SQL support from only DQL SELECT queries (MCQA 1.0) to full SQL queries, including DDL and DML statements. In addition, it further improves performance through optimization methods such as end-to-end cache and asynchronization of multiple steps in the job submission pipeline.
    

These new capabilities are all built and implemented based on MaxCompute's original SQL engine. MaxCompute users can analyze massive data with higher cost-effectiveness without changing their development habits.

## **Advantages**

The new architecture is designed to comprehensively support common features of open source data lake formats such as Hudi and Iceberg, facilitating smooth migration across related business pipelines. As a fully self-developed architecture, it offers many unique advantages in terms of functionality, performance, stability, and integration:

-   Provides a unified design for storage, metadata, and compute engines to achieve in-depth and efficient integration of the engines. The new architecture provides the following benefits: low storage costs, efficient data file management, and high query efficiency. In addition, many optimization rules for MaxCompute batch queries can be reused by Time Travel and incremental queries.
    
-   Provides a full set of unified SQL syntax to support all features of the new architecture. This facilitates user operations.
    
-   Provides in-depth customized and optimized data import tools to support various complex business scenarios.
    
-   Seamlessly integrates with existing business scenarios of MaxCompute to reduce migration, storage, and computing costs.
    
-   Supports automatic management of data files to ensure better read/write stability and performance, and supports automatic optimization of storage efficiency and costs.
    
-   Is fully managed on MaxCompute. You can use the new architecture out-of-the-box without additional access costs. You need to only create a Delta table to use the features of the new architecture.
    
-   Allows for complete control over development timelines and requirements as it is a fully self-developed architecture.
