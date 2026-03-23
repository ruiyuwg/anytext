The real-time data synchronization feature in DataWorks replicates data changes from a source to a destination database in real time. You can synchronize single tables or entire databases, ensuring your destination database remains consistent with the source.

## Core capabilities

The following figure shows the core capabilities of real-time synchronization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9015183771/CAEQVBiBgIDo57j.5xkiIGJmYjk5MzEyZDdjODQ4NjliZTVmMzZjOTkxYTZkOTJk5610407_20250822172848.453.svg)

**Capability**

**Description**

Data synchronization across various data sources

Real-time synchronization supports a wide range of data sources. You can combine various source and destination data sources to build a synchronization pipeline. For more information, see [Supported data sources and sync solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).

Data synchronization in complex network environments

Real-time synchronization supports various environments, including Alibaba Cloud databases, on-premises IDCs, self-managed databases on ECS, and databases from other cloud providers. Before you start, ensure **Network Connectivity** between the Resource Group and the source and destination endpoints. For configuration details, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).

Use cases

Real-time synchronization supports both single-table-to-single-table synchronization and synchronizing incremental data from sharded sources to a single destination table.

-   **Data Integration & Data Studio (new version)**: Provides wizard-based configuration for single-table ETL synchronization. This method offers rich data processing capabilities and advanced features like data sampling, Simulation Run, and advanced parameter settings.
    
-   **Data Studio (legacy)**: Provides a drag-and-drop interface to configure single-table ETL synchronization. This option supports data processing features like Data Filtering, String Replacement, and Data Masking.
    

Real-time synchronization task configuration

When configuring a real-time synchronization task, you can use the following capabilities to perform codeless, real-time ETL on single-table data. For more information, see [Configure a real-time sync task in Data Integration](/help/en/dataworks/synchronize-data-in-a-single-table-configure-and-manage-a-real-time-data-sync-node#task-2473945).

**Real-time Synchronization for Single Tables:**

-   **Configuration methods**: Offers a drag-and-drop graphical interface or a wizard for low-code development. The codeless approach makes it easy for new users to get started.
    
-   **Field Mapping**: Supports Same-name Mapping, positional mapping, and custom field relationships. For source fields without a corresponding destination field, you can configure a policy to add a new column, ignore the field, or report an error. You can also dynamically assign values to destination fields by using **Constants**, **Variables**, and **Functions**.
    
-   **Data processing**: Supports features for processing source data, such as **Data Filtering**, **String Replacement**, **Data Masking**, and **JSON Parsing**, before the data is written to the destination database.
    
-   **Runtime Debugging**: Supports data sampling from the source and provides intermediate results at each processing step. You can use the **Simulation Run** feature to preview the final data output. Data generated during a **Simulation Run** is not written to the destination table, preventing any impact on your production data.
    

Task O&M for real-time synchronization

You can configure monitoring and alerting for synchronization tasks.

-   Supports **Breakpoint Resumption**. If a task is interrupted by an exception, you can resume from a specified checkpoint to ensure data integrity.
    
-   You can configure monitoring and alerting for business latency, failover, DDL policies, and Heartbeat Detection. For more information, see [Real-time sync task O&M](/help/en/dataworks/user-guide/maintenance-for-real-time-synchronization-nodes#task-2473945).
    
-   Alarm notifications are also sent to alarm recipients via email, SMS, phone calls, and DingTalk, allowing you to promptly detect and resolve task anomalies.
    
-   Supports alert fatigue control. You can configure a rule to limit notifications to one per specified interval, preventing an excessive number of alerts.
    
-   Supports Heartbeat Detection. The heartbeat alert feature is automatically enabled or disabled when the task starts or stops. Manual changes to this setting are retained.
    

**Note**

-   You cannot run real-time synchronization tasks from the Data Studio interface. You must save and submit the real-time synchronization task and then run it in the Operation Center of your production environment.
    
-   Real-time synchronization tasks do not support synchronizing views.
    

## Supported data sources

**Important**

-   The data sources supported by Data Studio and Data Integration partially overlap. If your required data source type is available in **Data Integration**, we recommend using it to create your real-time synchronization task.
    
-   Not all source and destination data sources in Data Integration can be combined. Refer to the **Sync Type** options available during configuration to see the supported pairings.
    

#### **Data Integration and Data Studio (new version)**

Source: Kafka, Hologres, Oracle, LogHub, and DataHub.

Destination: ApsaraDB for OceanBase, Data Lake Formation (DLF), Doris, Hologres, Kafka, MaxCompute, Object Storage Service (OSS), OSS-HDFS, StarRocks, Tablestore, and Lindorm.

Data processing: Data Filtering, String Replacement, Data Masking, JSON Parsing, and field editing and assignment.

#### **Data Studio (legacy)**

Source: MySQL, DataHub, LogHub, Kafka, and PolarDB.

Destination: MaxCompute, Hologres, AnalyticDB for MySQL 3.0, Elasticsearch, DataHub, and Kafka.

Data processing: Data Filtering, String Replacement, and Data Masking.

## **Get started**

To create a real-time synchronization task for a single table, see [Configure a real-time sync task in Data Integration](/help/en/dataworks/user-guide/real-time-synchronization-task-configuration/) and [Configure a real-time sync task in DataStudio (legacy)](/help/en/dataworks/user-guide/configure-a-real-time-synchronization-node-in-datastudio/).

## FAQ

For answers to frequently asked questions about real-time synchronization tasks, see [FAQ about real-time synchronization](/help/en/dataworks/real-time-synchronization-1#concept-2092670).
