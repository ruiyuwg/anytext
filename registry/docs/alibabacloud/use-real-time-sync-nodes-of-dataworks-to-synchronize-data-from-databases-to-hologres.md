This topic describes how to use DataWorks data integration to synchronize data from a database to Hologres in real time.

## Prerequisites

-   Activate DataWorks. For more information, see [Overview](/help/en/dataworks/overview-23#concept-xmr-mxp-r2b).
    
-   You have successfully activated ApsaraDB.
    

**Note**

To learn if you can synchronize data across regions, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).

## Background information

Hologres is a real-time interactive analytics product. It seamlessly connects with the big data ecosystem and deeply integrates with DataWorks, an intelligent R&D platform. This integration supports data query and analysis with high concurrency and low latency. You can use DataWorks data integration to synchronize data from a database to Hologres in real time. Then, you can query, analyze, and process the data with high concurrency and low latency.

Common databases that support real-time data synchronization include Oracle, PolarDB, and PolarDB for MySQL.

**Note**

For more information about supported data sources, see [Supported data sources and synchronization solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations).

Related principles: [MySQL Reader](/help/en/dataworks/mysql-reader#concept-edt-bgp-p2b), [Oracle data source](/help/en/dataworks/user-guide/oracle-data-source), [PolarDB Reader](/help/en/dataworks/polardb-reader#concept-ud2-vzb-5fb), [SQL Server Reader](/help/en/dataworks/sql-server-reader#concept-bgv-5qq-p2b), and [Hologres data source](/help/en/dataworks/user-guide/hologres-data-source).

## Procedure

DataWorks data integration lets you synchronize data from various databases to Hologres in real time. This process is stable and efficient. Follow these steps to complete the task.

1.  Configure the source data source
    
    Before you synchronize data, you must configure the source data source. For example, to synchronize data from MySQL to Hologres in real time, you must configure a MySQL data source. Select and configure the data source that meets your requirements. For more information, see [Configure a data source](/help/en/dataworks/add-an-analyticdb-for-mysql-2-0-data-source#task-2477473).
    
2.  Configure the Hologres destination data source
    
    **Note**
    
    The Hologres data source must use an exclusive resource group for data integration.
    
    You must also configure the Hologres destination data source before you synchronize data. For more information, see [Configure a Hologres data source](/help/en/dataworks/add-a-hologres-data-source#task-2450866).
    
3.  Configure a task
    
    After you configure the source and Hologres destination data sources, configure the synchronization method and run the task. DataWorks data integration provides three real-time synchronization methods. You can choose the method that best suits your business needs. The following table provides details.
    
    **Synchronization type**
    
    **Scenario**
    
    **Supported data sources**
    
    **Data source configuration guide**
    
    **Sync task configuration guide**
    
    Single-table real-time synchronization
    
    Synchronizes data changes from some source tables to the destination database in real time. This keeps the destination database consistent with the source.
    
    -   MySQL binary logging
        
    -   DataHub
        
    -   LogHub
        
    -   Kafka
        
    -   PolarDB
        
    -   SQL Server
        
    
    -   [Configure a data source (source is PolarDB)](/help/en/dataworks/configure-a-polardb-data-source-as-the-source-2#task-2010754)
        
    -   [Configure a data source (source is MySQL)](/help/en/dataworks/configure-data-sources-for-data-synchronization-from-mysql-10#task-2013003)
        
    
    [Configure real-time synchronization of incremental data from a single table](/help/en/dataworks/synchronize-data-in-a-single-table-configure-and-manage-a-real-time-data-sync-node#task-2473945)
    
    Full database real-time synchronization
    
    Synchronizes data changes from all source tables to the destination database in real time. This keeps the destination database consistent with the source.
    
    -   PolarDB for MySQL
        
    -   PolarDB
        
    -   MySQL
        
    
    -   [Configure a data source (source is PolarDB)](/help/en/dataworks/configure-a-polardb-data-source-as-the-source#task-2010754)
        
    -   [Configure a data source (source is Oracle)](/help/en/dataworks/configure-data-sources-for-data-synchronization-from-oracle#task-2013003)
        
    -   [Configure a data source (source is MySQL)](/help/en/dataworks/configure-data-sources-for-data-synchronization-from-mysql-2#task-2013003)
        
    
    [Configure and manage a real-time sync task](/help/en/dataworks/user-guide/configure-and-manage-a-real-time-synchronization-node-1#task-2473945)
    
    Synchronization solution
    
    Provides solutions for various data synchronization scenarios between different data sources. These scenarios include real-time synchronization, offline full synchronization, and offline incremental synchronization. The solutions help you move data to the cloud with one click, efficiently and conveniently. The main features include the following:
    
    -   Initial full synchronization of data.
        
    -   Real-time writing of incremental data.
        
    -   Scheduled automatic merge of incremental and full data into new full-table partitions.
        
    
    -   PolarDB for MySQL
        
    -   Oracle
        
    -   MySQL
        
    -   PolarDB-X
        
    -   PostgreSQL
        
    
    -   [Configure a data source (source is PolarDB)](/help/en/dataworks/configure-data-sources-for-data-synchronization-from-polardb-1#task-2010754)
        
    -   [Configure a data source (source is Oracle)](/help/en/dataworks/configure-an-oracle-data-source-as-the-source#task-2013003)
        
    -   [Configure a data source (source is MySQL)](/help/en/dataworks/configure-data-sources-for-data-synchronization-from-mysql-5#task-2013003)
        
    -   [Prepare a PolarDB-X environment](/help/en/dataworks/configure-the-data-source-source-is-polardb-x#task-2067131)
        
    -   [Prepare a PostgreSQL environment](/help/en/dataworks/configure-the-data-source-source-is-postgresql#task-2105676)
        
    
    -   [One-click real-time synchronization to Hologres](/help/en/dataworks/user-guide/create-a-real-time-synchronization-solution-to-synchronize-data-to-hologres#task-2541849)
        
    -   [Add or remove sync tables from a running task](/help/en/dataworks/adjust-source-tables-for-a-running-data-synchronization-solution#task-2024880)
        
    -   [O&M for full and incremental sync tasks](/help/en/dataworks/user-guide/perform-o-and-m-for-a-data-synchronization-solution#task-2044820)
        
    
    **Note**
    
    When you use DataWorks to synchronize data to Hologres, you can also add extra fields to the Hologres destination table, such as an update\_time field. For more information, see [Configure and manage a real-time sync task](/help/en/dataworks/user-guide/configure-and-manage-a-real-time-synchronization-node-1#task-2473945).
