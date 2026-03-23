Data Transmission Service (DTS) is an Alibaba Cloud platform that provides one-stop services for data transmission and processing. It integrates core capabilities like Data Migration, Data Synchronization, Data Subscription, Data Transformation, and Data Validation. DTS builds secure, reliable, and high-performance data pipelines between various data sources to support diverse scenarios, including cloud migration, geo-disaster recovery, and real-time data warehousing.

## Core capabilities

DTS offers a powerful set of core capabilities for managing data flow, covering scenarios from data migration and real-time synchronization to incremental subscription. These capabilities fall into the following main categories:

**Functions**

**Core Capabilities**

**Applicable Scenarios**

**Data Transmission**

[Data Migration](/help/en/dts/product-overview/product-function-node-dts-1#SPUdtsVEYURC-title)

Performs one-time data migration between sources. It supports homogeneous and heterogeneous databases and enables migration with minimal service interruption, often reducing downtime to just minutes.

Cloud migration, database relocation.

[Data Synchronization](/help/en/dts/product-overview/product-function-node-dts-1#SPUdtsJNTDPO-title)

Enables real-time, continuous data synchronization between sources. It supports unidirectional and bidirectional synchronization for building high-availability and high-performance data architectures. It also offers a specialized [Data Delivery](/help/en/dts/user-guide/data-delivery) link, allowing you to use an SDK to deliver various types of incremental data (such as log data) to a specified destination.

Version upgrades, data sharding or scaling, active-active geo-redundancy, geo-disaster recovery, cross-border synchronization, query and report offloading, building real-time data warehouses, etc.

[Data Subscription](/help/en/dts/product-overview/product-function-node-dts-1#SPUdtsQHR2W1-title)

Captures incremental data changes (such as `INSERT` , `UPDATE` , and `DELETE` operations) from the source database in real time for downstream applications to consume on demand.

Cache update strategies, asynchronous decoupling of business logic, and providing real-time data streams for complex ETL or heterogeneous data source synchronization.

[Data Transformation](/help/en/dts/user-guide/what-is-etl)

Performs real-time extraction, transformation, and loading on streaming data during the data flow process.

Meets real-time data processing and computation needs, such as data cleansing, format conversion, and adding or removing fields.

[Data Validation](/help/en/dts/user-guide/what-is-data-verification)

Supports comparing data between the source and destination to verify data consistency, either within a data migration or synchronization task or by creating a separate data validation task.

As a safeguarding capability, it helps you promptly detect and locate data inconsistency issues, ensuring the accuracy of data transmission.

## Advantages

DTS surpasses traditional data tools by offering a comprehensive feature set, superior performance, enhanced usability, and robust security, simplifying complex data interactions. The main advantages of DTS are as follows:

-   **High compatibility**
    
    -   Heterogeneous data source support, including relational databases (such as MySQL, PostgreSQL, SQL Server, and Oracle), NoSQL databases (such as MongoDB and Redis), and big data warehouses (such as AnalyticDB and MaxCompute). For more information, see [Supported Databases](/help/en/dts/product-overview/supported-databases/#concept-1830082).
        
    -   Seamless cross-environment connectivity: Supports data flow between on-premises, Alibaba Cloud (such as ApsaraDB RDS and PolarDB), and other cloud databases, enabling data collaboration in hybrid and multi-cloud architectures.
        
    -   Cross-account collaboration: [Configure tasks across Alibaba Cloud accounts](/help/en/dts/user-guide/synchronize-or-migrate-data-across-alibaba-cloud-accounts) via [RAM authorization](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization) to break down data silos and enable unified management.
        
    -   Flexible network topologies: Supports various access methods, including public networks, Express Connect, VPN Gateway, and Smart Access Gateway (SAG), to adapt to complex enterprise network environments.
        
-   **Rich features**
    
    -   Provides multiple transmission methods, including Data Migration (with schema transformation for heterogeneous sources), Data Synchronization, and Data Subscription.
        
    -   Real-Time Synchronization enables unidirectional and bidirectional data flows to support geo-disaster recovery, active-active redundancy, and real-time data warehouses.
        
-   **Ease of use**
    
    DTS features a visual management interface with a task creation wizard for easy setup and monitoring of status, progress and performance, while its breakpoint resumption and auto-recovery capabilities reliably handle network or system exceptions.
    
-   **High performance**
    
    DTS delivers exceptional performance using high-spec servers, achieving up to 70 MB/s in full migration and 30,000 RPS with transaction-level concurrency in real-time sync, plus multi-threaded compression to minimize bandwidth usage.
    
-   **Secure and reliable**
    
    DTS's service cluster rapidly handles node failures through automatic failover, ensuring high availability. The service ensures data integrity with 24/7 verification and secures transmissions using encrypted transmission protocols, secure token authentication, and SSL encryption. For cross-border and cross-region synchronization scenarios, data isolation is further reinforced by dedicated network connections.
    
-   **Zero-downtime migration**
    
    DTS enables data migration while the source database remains fully operational, reducing application downtime to just minutes.
    

## Scenarios

-   **Zero-downtime database migration to the cloud**
    
    Use the [Data Migration](/help/en/dts/user-guide/overview-of-data-migration-scenarios) service to seamlessly migrate on-premises or self-managed ECS databases to ApsaraDB RDS or PolarDB. This solution leverages a combination of full and incremental data synchronization, supports uninterrupted writes, and ultimately enables a minute-level application switchover.
    
-   **Active-active geo-redundancy and disaster recovery**
    
    Use the [Data Synchronization](/help/en/dts/user-guide/data-synchronization-scenarios) feature to build a highly available, geo-redundant architecture for core systems. It enables real-time, bidirectional sync between databases in different regions, allowing rapid traffic failover during an outage to ensure business continuity.
    
-   **Real-time data warehouse ETL and cache updates**
    
    Use the [Data Subscription](/help/en/dts/user-guide/overview-of-change-tracking-scenarios) feature to stream real-time data changes to downstream systems like AnalyticDB, ClickHouse, or Redis. DTS accomplishes this by capturing source database logs (e.g., Binlog, WAL) and transforming them into a structured JSON stream, enabling your application to [write to the data warehouse or update the cache directly](/help/en/dts/user-guide/consume-tracked-data-1/), which decouples the data link.
    
-   **Real-time data cleansing and formatting**
    
    Process data in-flight using the [Data Transformation](/help/en/dts/user-guide/what-is-etl) feature. For example, when synchronizing data, you can perform real-time [data masking](/help/en/dts/user-guide/sensitive-data-scanning-and-desensitization#fec3f2d1ae48i) on sensitive information or merge source fields into a new destination field. This in-stream processing simplifies the data pipeline and enhances data security by eliminating the need for secondary development on the destination.
    
-   **Data consistency validation**
    
    After a major database migration or during long-term geo-disaster recovery synchronization, you can use the [Data Validation](/help/en/dts/user-guide/what-is-data-verification) feature to ensure data consistency. It automatically compares full or specified ranges of data and generates a detailed validation report, pinpointing which tables and rows have data discrepancies. This provides confidence for switching services after migration and offers a monitoring tool for the health of long-term synchronization tasks, exposing any potential data inconsistencies.
    

## Get started

1.  Based on your business scenario, identify the appropriate [product feature](#e1c43e7ed0g99).
    
2.  Verify that your database supports [data migration, synchronization, or subscription](/help/en/dts/product-overview/supported-databases/)**.**
    
3.  Create a DTS task. You can create tasks through the [Data Transmission Service console](https://dts.alibabacloud.com/), or using the [API or SDK](/help/en/dts/developer-reference/use-openapi).
    
    -   [Data Synchronization tutorials](/help/en/dts/getting-started/manage-a-data-synchronization-task)
        
    -   [Data Migration tutorials](/help/en/dts/getting-started/manage-a-data-migration-task)
        
    -   [Data Subscription tutorials](/help/en/dts/getting-started/manage-a-change-tracking-task)
        

## **More information**

### **Learn more**

-   For system architecture and core features, see [Product architecture](/help/en/dts/product-overview/system-architecture-and-design-concepts).
    
-   For DTS transmission task performance, see [Specifications](/help/en/dts/product-overview/specifications/).
    
-   For term definitions, see [Basic concepts](/help/en/dts/product-overview/terms).
    

### DTS Insight

[DTS Insight](/help/en/dts/user-guide/dts-insight/): An intelligent O&M assistant provided by DTS to help you better understand and use DTS products and services. It also monitors task status in real time and assists with troubleshooting when tasks encounter issues.

## FAQ

### **What's the difference between Data Migration and Data Synchronization, and how do I choose?**

-   **Purpose**
    
    -   **Data Migration** is designed for a one-time data move, typically when the source database will be retired, with the goal of transferring a complete and consistent copy.
        
    -   **Data Synchronization** maintains continuous, long-term replication between two active databases to ensure dynamic consistency.
        
-   **Functionality**
    
    -   **Data Migration:** Designed to run once and then stop automatically upon completion. Its primary function is to ensure the final dataset is consistent.
        
    -   **Data Synchronization:** Runs continuously and offers advanced features required for long-term replication, such as bidirectional sync and conflict resolution.
        
-   **How to Choose**
    
    -   Choose [Data Migration](/help/en/dts/user-guide/overview-of-data-migration-scenarios) for cloud migration, database replacement, or data center relocation.
        
    -   Choose [Data Synchronization](/help/en/dts/user-guide/data-synchronization-scenarios) for active-active geo-redundancy, read/write splitting, or live data distribution.
        

### **How does DTS billing work?**

DTS charges are based on your configured task type, primarily covering **task instance fees** and **public network/data traffic fees**. For a detailed breakdown, refer to the [Billable Items](/help/en/dts/product-overview/billable-items) documentation.
