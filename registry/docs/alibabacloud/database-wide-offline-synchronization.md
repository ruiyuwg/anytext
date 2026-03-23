DataWorks Data Integration provides a streamlined solution for batch database synchronization. It allows you to migrate all or selected tables from a source database to a destination data store, either as a one-time operation or on a recurring schedule, using full or incremental synchronization. This feature eliminates the need to create a task for each table manually and automatically creates destination table schemas, streamlining the entire database migration process.

## Use cases

-   **Data migration and cloud adoption**
    
    -   Migrate on-premises databases such as MySQL and Oracle to cloud data warehouses or data lakes.
        
    -   Migrate data between different cloud platforms or database systems.
        
-   **Data warehouse and data lake construction**
    
    Periodically synchronize full or incremental data from online transaction processing (OLTP) databases to the operational data store (ODS) layer of a data warehouse or data lake. This data then serves as the foundation for subsequent data analysis.
    
-   **Data backup and disaster recovery**
    
    -   Regularly back up full data from production databases to cost-effective storage media, such as HDFS or Object Storage Service (OSS).
        
    -   Implement cross-region or cross-Availability Zone disaster recovery solutions.
        

## Core features

Batch synchronization for entire databases offers the following core features:

**Core feature**

**Feature**

**Description**

Batch synchronization between heterogeneous data sources

\-

Batch synchronization supports migrating data from an on-premises data center or other cloud platforms to a data warehouse or data lake, such as MaxCompute, Hologres, or OSS. For more information, see [Supported data sources and synchronization solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations#concept-1943422).

Data synchronization in complex network environments

\-

Batch synchronization supports data transfer from Alibaba Cloud databases, self-managed databases on ECS or in on-premises data centers, and non-Alibaba Cloud databases. Before you begin, ensure network connectivity between the resource group and both the source and destination data sources. For configuration details, see [Network connectivity](/help/en/dataworks/user-guide/network-connectivity).

Synchronization modes

Full synchronization

Supports one-time or scheduled full data synchronization to a destination table or a specified partition.

Incremental synchronization

Supports one-time or scheduled incremental data synchronization based on timestamps, partitions, or primary keys.

Combined full and incremental synchronization

The first run performs a one-time full data synchronization.

Subsequent runs automatically switch to periodic incremental data synchronization to a specified partition.

Database and table mapping

Batch table synchronization

Synchronize all tables in a database or select specific tables using checkboxes or filter rules.

Automatic schema creation

A single configuration can process hundreds of tables from the source database, and the system automatically creates the corresponding table structures at the destination without manual intervention.

Flexible mapping

Customize naming rules for destination databases and tables. You can also define mappings between source and destination field types to adapt to the target data model.

Scheduling and dependency management

Scheduling

Supports multiple scheduling frequencies: minute, hour, day, week, month, and year.

> When synchronizing many tables at once, stagger the execution times in the schedule to prevent task queuing and resource contention.

Task dependencies

Both the **entire-database task** and its individual **subtasks** can be used as upstream dependencies for other tasks in DataWorks. When a synchronization task completes, its downstream tasks are automatically triggered.

Parameter support

You can use scheduling parameters to implement incremental synchronization. For example, you can use `${bizdate}` to represent the business date.

Advanced parameters

Dirty data handling

Dirty data refers to records that cannot be written to the destination due to errors such as type mismatches or constraint violations. By default, this option is `false`, meaning the task fails if it encounters any dirty data. If set to `true`, the task ignores all dirty data and continues.

Reader and writer configuration

You can configure the maximum number of connections for both the reader and writer data sources and define cleanup policies that run on the destination before data is written.

Concurrency and rate limiting

-   Control the maximum number of concurrent connections for reading from and writing to the database.
    
-   Control the data transfer rate to prevent overwhelming the source or destination data sources. If rate limiting is not configured, the task runs at the maximum speed supported by the hardware.
    

O&M (Operations and Maintenance)

Runtime intervention

Supports runtime interventions such as rerunning tasks, backfilling data, marking tasks as successful, and freezing or restoring tasks.

Monitoring and alerting

You can configure monitoring rules for baselines, task status, and runtime duration, and set up alerts to trigger when rule conditions are met.

Data quality

After you commit and deploy a task, you can configure data quality monitoring rules for the destination tables in the Operation Center. The feature supports both AI-powered rule generation and manual configuration. This feature is currently available only for specific database types. For more information, see [Data Quality](/help/en/dataworks/user-guide/data-quality/).

## Get started

To create a batch synchronization task for an entire database, see [Configure batch synchronization for entire databases](/help/en/dataworks/user-guide/configure-a-database-wide-offline-synchronization-task).

## Supported data sources

DataWorks supports batch database migration from various data sources to destinations such as MaxCompute, Object Storage Service (OSS), and Elasticsearch. The following table lists the supported source and destination data sources.

**Source**

**Destination**

-   [Amazon Redshift](/help/en/dataworks/user-guide/amazon-redshift-data-source)
    
-   [AnalyticDB for MySQL 3.0](/help/en/dataworks/add-an-analyticdb-for-mysql-3-0-data-source#concept-z3q-wyb-5fb)
    
-   [ClickHouse](/help/en/dataworks/user-guide/clickhouse-data-source)
    
-   [Doris](/help/en/dataworks/user-guide/doris-data-source)
    
-   [Hive](/help/en/dataworks/add-a-hive-data-source#task-2484248)
    
-   [Hologres](/help/en/dataworks/user-guide/hologres-data-source)
    
-   [MongoDB](/help/en/dataworks/user-guide/mongodb-data-source)
    
-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [Oracle](/help/en/dataworks/add-an-oracle-data-source#concept-jkd-5nb-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    
-   [PostgreSQL](/help/en/dataworks/add-a-postgresql-data-source#concept-a1x-krb-p2b)
    
-   [SQL Server](/help/en/dataworks/add-an-sql-server-data-source#concept-o4y-5yb-p2b)
    

MaxCompute

-   [Hive](/help/en/dataworks/add-a-hive-data-source#task-2484248)
    

Data Lake Formation

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    

Hive

-   [AnalyticDB for MySQL 3.0](/help/en/dataworks/add-an-analyticdb-for-mysql-3-0-data-source#concept-z3q-wyb-5fb)
    
-   [ClickHouse](/help/en/dataworks/user-guide/clickhouse-data-source)
    
-   [Doris](/help/en/dataworks/user-guide/doris-data-source)
    
-   [Hologres](/help/en/dataworks/user-guide/hologres-data-source)
    
-   [MaxCompute](/help/en/dataworks/add-a-maxcompute-data-source#task-2477347)
    
-   [Oracle](/help/en/dataworks/add-an-oracle-data-source#concept-jkd-5nb-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    
-   [PostgreSQL](/help/en/dataworks/add-a-postgresql-data-source#concept-a1x-krb-p2b)
    
-   [SQL Server](/help/en/dataworks/add-an-sql-server-data-source#concept-o4y-5yb-p2b)
    

Hologres

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    
-   [Hive](/help/en/dataworks/add-a-hive-data-source#task-2484248)
    

OSS

-   [Hive](/help/en/dataworks/add-a-hive-data-source#task-2484248)
    
-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    

OSS-HDFS

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [SQL Server](/help/en/dataworks/add-an-sql-server-data-source#concept-o4y-5yb-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    

Elasticsearch

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    

StarRocks

-   [Hologres](/help/en/dataworks/user-guide/hologres-data-source)
    

MySQL
