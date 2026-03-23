The offline sync feature of Data Integration provides Reader and Writer plugins. You can define source and destination data sources and use DataWorks scheduling parameters to synchronize full or incremental data from a source database to a destination database. This topic describes the capabilities of offline sync.

## Core capabilities

The capabilities of offline sync are shown in the following figure:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0565291771/CAEQTxiBgMDP5Kqj0hkiIDhlOTM1Njc4YTU3ZTQxODg4NmIwYmE3MjNmNjIzZTAx5610407_20250822172848.453.svg)

**Capability**

**Description**

Data synchronization between disparate data sources

Data Integration supports over 50 data source types, such as relational databases, unstructured storage, big data storage, and message queues. You can define source and destination data sources and use the provided Reader and Writer plugins to transfer data between any structured or semi-structured data sources. For more information, see [Supported data sources and sync solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations#concept-1943422).

Data synchronization in complex network environments

Offline sync supports data synchronization for ApsaraDB, on-premises data centers, self-managed databases on ECS, and databases outside Alibaba Cloud. Before you configure the sync, ensure network connectivity between the resource group and both the source and destination. For more information about configuration, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).

Sync scenarios

1\. Supported synchronous modes

-   **Periodic full synchronization**: Periodically overwrites the destination table with data from the source table. This mode is suitable for full update scenarios.
    
-   **Periodic incremental synchronization**: Synchronizes only new or changed data from the source table on a daily or hourly basis. This is achieved using built-in **scheduling parameters**, such as `${bizdate}`, with a `WHERE` clause for **data filtering**. This ensures that only specified data is pulled and written to the corresponding time partition. For more information, see [Scenario: Configure an incremental offline sync task](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-to-synchronize-only-incremental-data).
    
-   **Historical data backfill**: To backfill a large amount of historical data at once, you can use the **Data Backfill** feature in the Operation Center. This lets you execute sync tasks in batches to efficiently archive historical data.
    

**Note**

For more information about scheduling parameters, see [Common scenarios for scheduling parameters in Data Integration](/help/en/dataworks/user-guide/common-use-scenarios-of-scheduling-parameters) and [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-2185254).

2\. Supported source structures

-   **Single table to single table**: This is the most basic sync method. It synchronizes data from one source table to one destination table.
    
-   **Sharded databases and tables to a single table**:
    
    -   Automatically aggregates data from multiple physical tables, such as `order_01` and `order_02`, and writes the data to a single destination table.
        
    -   Supported data sources include MySQL, SQL Server, Oracle, PostgreSQL, PolarDB, and AnalyticDB. For more information, see [Synchronize sharded databases and tables](/help/en/dataworks/user-guide/synchronize-data-from-tables-in-sharded-databases#task-1918681).
        

Configuration methods

You can configure Data Integration offline sync tasks in the following ways.

-   [Codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386): You can use a visual wizard to complete the configuration step by step. This method is easy to learn and suitable for getting started quickly. However, some advanced features are not available.
    
-   [Code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029): You can use a JSON script to directly define the sync logic. This method is suitable for advanced use and supports more complex configurations for fine-grained control.
    
-   [Create using OpenAPI](/help/en/dataworks/user-guide/use-api-operations-to-perform-operations-related-to-a-batch-synchronization-node#task-2068492): You can manage the entire task lifecycle through the OpenAPI. This supports programmatic operations. For more information about the API, see .
    

**Note**

For more information about task configuration capabilities, see [Function overview](#title-5x4-sqp-bo2).

Offline sync task O&M

-   [Monitoring and alerting](/help/en/dataworks/user-guide/monitoring-alarm/): You can monitor the running status of offline sync tasks. This includes alerts for scenarios where a task is not completed, encounters an error, or is completed. Alerts can be sent to recipients by email, text message, phone call, DingTalk group chatbot, and webhooks.
    
-   [Data Quality](/help/en/dataworks/user-guide/data-quality/): After a task is submitted and published, you can configure data quality monitoring rules for the destination table in the Operation Center. Currently, only some database types support data quality monitoring rules.
    
-   [Data source environment fencing](/help/en/dataworks/user-guide/add-and-manage-data-sources/#c7f1e5a0fa91g): **You can bind a single data source name to two independent configurations for the developer and production environments. The task automatically switches data sources based on the environment during execution.** The developer environment is used for development and debugging, and the production environment is used for production scheduling. This prevents test operations from accidentally affecting online data.
    

## Function overview

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0565291771/CAEQTxiBgMC946Wj0hkiIDViYzI1OGZjOWY3MDQ5Njc4YzE4Y2MxM2Y5ZjQ2Njg15610407_20250822172848.453.svg)

**Feature**

**Description**

Full or incremental data synchronization

Configure **Data Filtering** and use **scheduling parameters** in offline sync tasks to perform full or incremental data synchronization. The configuration for incremental sync varies by plugin. For more information about configuring incremental data synchronization, see [Scenario: Configure an incremental offline sync task](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-to-synchronize-only-incremental-data#task-2351237).

Field mapping

Establish mapping rules between fields to write source data to the corresponding destination fields. Ensure that the data types of the source and destination fields are compatible during configuration.

-   Multiple field mapping methods are available:
    
    -   The **codeless UI** supports mapping by name and by row, and also allows custom field relationships. Data in unmapped fields is automatically ignored. Ensure that the corresponding destination fields have default values or allow null values to avoid write failures.
        
    -   The **code editor** maps fields strictly based on the order in the column configuration. The number of fields in the reader and writer must be identical. Otherwise, the task will fail to execute.
        
-   Sync tasks also provide a dynamic value assignment feature for destination fields. This supports flexible configuration of constants, scheduling parameters, and built-in variables, such as `${bizdate}`. These parameters must be assigned their final values during the scheduling phase.
    

Job rate limit control

-   The **task concurrency control** feature limits the maximum number of concurrent connections for reading from and writing to the database.
    
-   The **sync rate** feature controls traffic to prevent excessive pressure on the source or destination data source. If no limit is set, the task uses the maximum transfer performance available in the current hardware environment.
    

Distributed task execution

**Data sources that support distributed execution can use task segmentation technology to distribute a sync task across multiple nodes for concurrent execution.** This allows the sync speed to scale linearly with the cluster size, breaking through single-node performance bottlenecks. This pattern is especially useful for high-throughput, low-latency sync scenarios. It also efficiently schedules idle cluster resources, significantly improving hardware utilization.

Dirty data policy

**Dirty data** refers to records that fail to be written to the destination due to exceptions, such as type conflicts or constraint violations. Offline sync supports defining a dirty data policy. You can define the number of tolerable dirty data records and their impact on the task.

-   Ignore dirty data: Automatically filters out dirty data and writes only compliant data. The task continues to run.
    
-   Tolerate a limited number of dirty data records: Set a threshold N. If the number of dirty data records is less than or equal to N, the abnormal records are discarded and the task continues. If the number exceeds N, the task fails and exits.
    
-   Do not tolerate dirty data: The task fails and exits immediately if any dirty data is encountered.
    

Time zone

If the source and destination are in different time zones, set the source time zone to perform time zone conversion during synchronization.

Intelligent data processing

DataWorks supports data processing capabilities during data synchronization. This lets you transform and process source data before writing it to the destination:

**String replacement**: The offline sync task in DataWorks has a built-in string replacement feature. This lets you perform lightweight data transformations during data transfer without landing the data or requiring extra extract, transform, and load (ETL) steps.

**AI-assisted processing**: During data synchronization, you can integrate large AI models to perform semantic, sentiment, and other analyses on natural language from the source. The processed results are then written directly to the destination table.

**Data vectorization**: Extracts source data, creates vector embeddings, and writes them to a vector database.

## More operations

For more information about how to create a task, see:

-   [Codeless UI configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui)
    
-   [Code editor configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor)
    
-   [Synchronize sharded databases and tables](/help/en/dataworks/user-guide/synchronize-data-from-tables-in-sharded-databases)
