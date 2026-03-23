DataWorks Data Integration provides a powerful solution for real-time database synchronization. It replicates entire databases or specific tables from a source to a destination data store using an integrated full and incremental synchronization approach. Powered by a real-time computing engine, this feature automatically performs an initial full data load and then continuously captures incremental data changes (Change Data Capture (CDC)). This simplifies use cases such as real-time database migration to the cloud and building a real-time data warehouse ODS Layer.

## Use cases

-   **Build a real-time ODS Layer for your data warehouse**
    
    Synchronize data in real time from online operational databases, such as MySQL and Oracle, to a real-time data warehouse like Hologres or StarRocks. This provides fresh data for downstream applications, including dashboards and ad hoc query scenarios.
    
-   **Real-time database replication for disaster recovery**
    
    Establish a real-time replication link between two database instances. You can use this for read/write splitting, creating read-only replicas, or implementing real-time Disaster Recovery (DR) for homogeneous or heterogeneous databases.
    
-   **Real-time data migration to the cloud**
    
    Seamlessly migrate databases from an on-premises data center to a cloud database service.
    
-   **Build a real-time Data Lake or Data Middle Platform**
    
    Collect real-time change data from multiple operational databases into a central Data Lake, such as Object Storage Service (OSS) or Data Lake Formation (DLF), or a Data Warehouse, such as MaxCompute or Hologres. This lets you build a unified, real-time Data Middle Platform for your enterprise.
    

## Core capabilities

The core capabilities of real-time database synchronization are as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815183771/CAEQTxiBgMDIpZij0hkiIGMzMWM1NTI5NjA1YjQwNGFiNmUwYzgwMDljMTQxOTgx5610407_20250822172848.453.svg)

**Core capability**

**Feature**

**Description**

Synchronize entire databases between heterogeneous data sources

\-

Real-time database synchronization migrates data from on-premises data centers or other cloud platforms to a Data Warehouse or Data Lake, such as MaxCompute, Hologres, or Kafka. For more information, see [Supported data sources and synchronization solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations#concept-1943422).

Synchronize data in complex network environments

\-

Real-time synchronization supports data from various environments, including Alibaba Cloud database services, on-premises data centers, self-managed databases on ECS, and databases from other cloud providers. Before you begin, ensure network connectivity between the Resource Group and your source and destination. For more information, see [Configure network connections](/help/en/dataworks/user-guide/network-connectivity).

Synchronization scenarios

Full synchronization

Performs a one-time synchronization of all data from the source to the destination table.

Incremental synchronization

Captures streaming data in real time from sources like message queues or CDC logs, and writes it to a destination table or a specified Partition.

Integrated full and incremental synchronization

-   **Automatic full initialization**: When a task first starts, it automatically reads all existing data from the source database tables and writes it to the destination.
    
-   **Seamless transition to incremental mode**: After the full load completes, the task automatically switches to CDC mode, continuously capturing and applying insert, update, and delete operations from the source to the destination with millisecond-level latency.
    

Task configuration

Batch table synchronization

You can synchronize all tables in a database or precisely select a subset of tables using checkboxes or configuring filter rules.

Automatic table creation

A single configuration can process hundreds of tables in your source database. The system automatically creates the corresponding Table Schema in the destination, requiring no manual intervention.

Flexible mapping

You can define custom naming conventions for destination databases and tables. You can also customize the mapping of data types between the source and destination to adapt to different data models.

DDL Change Awareness (Supported on select paths)

When the source Table Schema changes (such as creating or deleting tables or columns), you can configure the synchronization task to respond in one of the following ways:

-   Normal: Automatically applies schema changes to the destination.
    
-   Alert: Pauses synchronization, sends an alert, and waits for manual intervention.
    
-   Error: Stops the task and marks it as failed.
    

DML rules

A DML rule provides fine-grained control over how change data (`Insert`, `Update`, and `Delete` operations) from the source is processed before being written to the destination. This lets you define the final handling policy for different data manipulation operations.

Dynamic partitioning

If the destination table is partitioned, you can enable dynamic partitioning based on a source field or the timestamp of the source event.

**Important**

Creating an excessive number of partitions can degrade synchronization performance. If more than 1,000 new partitions are created in a single day, partition creation will fail and the task terminates.

Task O&M

Online intervention

Resumption from checkpoints allows a task to resume from a specific point in time after an interruption, preventing data loss. You can also rerun tasks for data backfilling, exception handling, and logic validation to maintain data consistency and business continuity.

Monitoring and alerting

You can configure monitoring rules for business latency, task status, failover events, and DDL notifications. Alerts can be sent when these rules are triggered.

Resource optimization

DataWorks Data Integration provides task-level Elastic Scaling based on the [Serverless Resource Group](/help/en/dataworks/user-guide/using-serverless-resource-groups).

Additionally, you can configure time-based elasticity policies to automatically adjust resource specifications for a task during different periods, such as peak and off-peak business hours.

## Get started

To create a real-time database synchronization task, see [Configure a real-time database synchronization task](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration).

## Supported data sources

**Source**

**Destination**

-   [ApsaraDB for OceanBase](/help/en/dataworks/user-guide/apsaradb-for-oceanbase-data-source)
    
-   [MongoDB](/help/en/dataworks/user-guide/mongodb-data-source)
    
-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [Oracle](/help/en/dataworks/add-an-oracle-data-source#concept-jkd-5nb-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    
-   [PolarDB-X 2.0](/help/en/dataworks/user-guide/polardbx20-data-source)
    
-   [PostgreSQL](/help/en/dataworks/user-guide/postgresql-data-source)
    

MaxCompute

-   [ApsaraDB for OceanBase](/help/en/dataworks/user-guide/apsaradb-for-oceanbase-data-source)
    
-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [Oracle](/help/en/dataworks/add-an-oracle-data-source#concept-jkd-5nb-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    
-   [PostgreSQL](/help/en/dataworks/user-guide/postgresql-data-source)
    

AnalyticDB for MySQL (V3.0)

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    

ApsaraDB for OceanBase

-   [ApsaraDB for OceanBase](/help/en/dataworks/user-guide/apsaradb-for-oceanbase-data-source)
    
-   [MongoDB](/help/en/dataworks/user-guide/mongodb-data-source)
    
-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    
-   [PostgreSQL](/help/en/dataworks/user-guide/postgresql-data-source)
    

Data Lake Formation (DLF)

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [Oracle](/help/en/dataworks/add-an-oracle-data-source#concept-jkd-5nb-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    

DataHub

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    
-   [PostgreSQL](/help/en/dataworks/user-guide/postgresql-data-source)
    

Doris

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [PolarDB](/help/en/dataworks/user-guide/polardb-data-source)
    

Elasticsearch

-   [ApsaraDB for OceanBase](/help/en/dataworks/user-guide/apsaradb-for-oceanbase-data-source)
    
-   [MongoDB](/help/en/dataworks/user-guide/mongodb-data-source)
    
-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [Oracle](/help/en/dataworks/add-an-oracle-data-source#concept-jkd-5nb-p2b)
    
-   [PolarDB](/help/en/dataworks/user-guide/polardb-data-source)
    
-   [PolarDB-X 2.0](/help/en/dataworks/user-guide/polardbx20-data-source)
    
-   [PostgreSQL](/help/en/dataworks/user-guide/postgresql-data-source)
    

Hologres

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [PolarDB](/help/en/dataworks/user-guide/polardb-data-source)
    
-   [PostgreSQL](/help/en/dataworks/user-guide/postgresql-data-source)
    

Kafka

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   MySQL (sharded)
    
-   PolarDB (sharded)
    

LogHub

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [PolarDB](/help/en/dataworks/user-guide/polardb-data-source)
    

Object Storage Service (OSS)

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    

OSS-HDFS

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    
-   [PostgreSQL](/help/en/dataworks/user-guide/postgresql-data-source)
    

SelectDB

-   [MySQL](/help/en/dataworks/add-a-mysql-data-source#concept-nvl-451-p2b)
    
-   [Oracle](/help/en/dataworks/add-an-oracle-data-source#concept-jkd-5nb-p2b)
    
-   [PolarDB](/help/en/dataworks/add-a-polardb-data-source#concept-imb-1zb-5fb)
    

StarRocks

-   [PostgreSQL](/help/en/dataworks/user-guide/postgresql-data-source)
    

Lindorm
