The data synchronization feature of Data Transmission Service (DTS) enables real-time data synchronization between different data sources. This feature captures data changes from a source database and applies them to a destination database in real time. It is widely used for scenarios such as version upgrades, data sharding or scaling, active geo-redundancy, geo-disaster recovery, cross-border data synchronization, query and report offloading, and building real-time data warehouses. Using DTS, you can avoid the complexity, errors, and delivery challenges associated with manually managing data streams. This lets you focus on your business instead of maintaining data pipelines.

## Core concepts

### Synchronization types

A DTS synchronization task combines three optional synchronization types to meet various business needs.

**Option suggestions**

-   **First-time synchronization**: For a new synchronization task, select **Schema Synchronization**, **Full Data Synchronization**, and **Incremental Data Synchronization** to perform a complete data synchronization.
    
-   **Existing baseline data**: If the destination database already contains the necessary baseline data, you only need to select **Incremental Data Synchronization**. In this case, you must ensure that the data is consistent between the source and destination databases before starting the task. This is a complex operation that requires careful evaluation.
    

**Synchronization type**

**Description**

**Schema Synchronization**

**Purpose**: Automatically creates a structure in the destination database that matches the source database.

DTS synchronizes the schema definitions of the objects to be synchronized (such as tables, views, triggers, stored procedures, and indexes) from the source database to the destination database. If the destination database is empty, selecting this option saves you the step of creating them manually.

**Important**

Some synchronization links do not support schema synchronization. Before you configure a data synchronization task, you must create the corresponding databases, data tables, and views in the destination database based on the schema definitions of the objects to be synchronized in the source database.

**Full Data Synchronization**

**Purpose**: Migrates historical data from the source database.

DTS copies all historical data of the objects to be synchronized from the source database to the destination database. This establishes a data baseline for the subsequent **Incremental Data Synchronization**.

**Incremental Data Synchronization**

**Purpose**: Continuously keeps the source and destination databases synchronized.

DTS continuously retrieves incremental change statements for the objects to be synchronized from the source database (for example, from the binary log of a MySQL database). It then transforms them as needed for the destination database type and executes the statements in the destination database. This achieves real-time synchronization of incremental data.

**Note**

**Incremental Data Synchronization** runs continuously and does not end automatically. To stop it, you must manually [end the DTS instance](/help/en/dts/user-guide/stop-a-dts-instance) or [release the DTS instance](/help/en/dts/user-guide/release-dts-instances-1).

### Synchronization topologies

DTS supports two core data synchronization topologies. For more information, see [Introduction to data synchronization topologies](/help/en/dts/user-guide/synchronization-topologies#concept-978516).

**Synchronization topology**

**Description**

**Scenarios**

**One-way Synchronization**

Data flows one way from a source database to one or more destination databases.

Data sharding or scaling, query and report offloading, and building real-time data warehouses.

**Two-way Synchronization**

Data flows in both directions between two databases. Changes in either database are synchronized to the other.

Active geo-redundancy, geo-disaster recovery, and cross-border synchronization.

**Important**

**Two-way Synchronization** consists of forward and reverse synchronization tasks. To prevent data loops when you configure or reset a two-way synchronization task, DTS enforces the following strict limits:

-   **Initialization rules**: Only the task in one direction (for example, from A to B) can perform **Schema Synchronization** and **Full Data Synchronization**. The task in the reverse direction (from B to A) can only be configured for **Incremental Data Synchronization**.
    
-   **Preventing data loops**: Data synchronized from A to B is not synchronized back to A.
    
-   **Reset risks**: To reset one of the tasks (for example, the forward task), you must [reset](/help/en/dts/user-guide/reset-a-dts-instance) both the forward and reverse tasks before reconfiguring them. Otherwise, when the forward task performs **Schema Synchronization** and **Full Data Synchronization**, the system automatically removes the synchronization objects configured in the reverse task. This can cause the **Two-way Synchronization** task to produce unexpected results.
    

## Limits

Before you configure the task, ensure that your environment and business scenario meet the following requirements.

#### **General limits**

**Limit**

**Description**

**Network configuration**

-   **Source database network bandwidth**: Must be 100 Mb/s or greater.
    
-   **Network latency (RT)**: To ensure synchronization performance, the network round-trip time (RT) between the source database and the DTS service should be less than 2 ms. Cross-region or cross-border deployments can increase RT due to physical distance (for example, a database in the Singapore region accessing DTS through a VPN in the Hong Kong (China) region), which can cause synchronization latency.
    

**Workload**

-   **Log volume**: DTS performs incremental synchronization by pulling database logs. To ensure stability, the peak log volume of the source instance should be less than 1 TB per day, the average hourly log volume should be less than 50 GB, and the peak traffic should be less than 15 MB/s.
    
    **Important**
    
    By default, DTS pulls logs from the entire database, not just the logs of the objects being synchronized. This means that even if you synchronize only one small table, frequent writes to other large, unrelated tables in the database (which generate a large volume of logs) can still cause latency in the synchronization task. Therefore, fully consider this impact during planning.
    
-   **Batch updates**: Performing batch data updates or large-scale changes to large objects (such as CLOB, BLOB, and LONG types) can cause task latency. Therefore, perform these operations in batches or avoid them if possible.
    
-   **High-frequency DDL**: Avoid frequent DDL operations. Do not perform more than 10 DDL operations per second to prevent task latency.
    
-   **Tables without primary keys**: Avoid frequent `DELETE` or `UPDATE` operations on tables without primary keys to prevent task latency.
    
-   **Large transactions**: Avoid executing large transactions that generate more than 100 GB of logs in a single transaction to prevent task failure.
    

#### **Other limits**

-   **Cross-account synchronization**: The ability to create cross-account synchronization tasks depends on the specific database type and connection type. For more information, see [Configure a task across Alibaba Cloud accounts](/help/en/dts/user-guide/synchronize-or-migrate-data-across-alibaba-cloud-accounts#4200617964kc9).
    
-   **Cross-border data synchronization**: This feature is not enabled by default. You must first [request permission for cross-border data synchronization](/help/en/dts/user-guide/apply-for-permissions-to-synchronize-data-across-borders). You can use this feature only after your request is approved.
    
    **Note**
    
    -   If your synchronization or migration task involves [cross-border and cross-region](/help/en/dts/user-guide/definition-of-cross-border-and-cross-region-instances) data transfer, ensure that the required bandwidth does not exceed 100 Mbit/s. If the required bandwidth exceeds 100 Mbit/s, you must use [CEN to configure cross-region network bandwidth](/help/en/dts/user-guide/connect-an-on-premises-database-to-dts-using-cen#594c98e164ceq) before you configure the DTS task.
        
    -   A cross-region or cross-border task is one that you configure in the DTS console, for example, a task to synchronize data from an RDS instance in the Singapore region to an RDS instance in the China (Hangzhou) region.
        
    

## **FAQ**

**What is the difference between data migration and data synchronization?**

-   Use cases
    
    -   Data migration is used for a one-time transfer of data from a source database to a destination database. The source database is typically decommissioned after the migration is complete.
        
    -   Data synchronization is used to establish long-term, continuous data replication between two data sources to keep them dynamically consistent.
        
-   Feature differences
    
    -   The core goal of data migration is to ensure final data consistency. The task stops after the migration is complete.
        
    -   Data synchronization is a long-running task that provides more advanced features, such as two-way synchronization and conflict resolution.
        
-   Selection guidelines
    
    -   Choose a [migration solution](/help/en/dts/user-guide/overview-of-data-migration-scenarios) for scenarios such as migrating to the cloud, replacing a database, or moving a data center.
        
    -   Choose a [synchronization solution](#) for scenarios such as building an active geo-redundancy architecture, implementing disaster recovery, or setting up read/write splitting.
        

**Can I add new tables to a running synchronization task?**

Yes, you can. For data synchronization tasks, you can [modify the synchronization objects](/help/en/dts/user-guide/modify-the-objects-to-be-synchronized) to add new databases or tables while the task is running. However, this operation is not supported for data migration tasks.

**How can I merge data from multiple source databases into a single destination database, or synchronize a table to a destination table with a different name?**

You can use the [database, table, and column name mapping](/help/en/dts/user-guide/map-object-names) feature. When you configure synchronization objects, DTS lets you modify the object names in the destination database. For example, you can synchronize the `orders` table from the source database `db_A` and the `orders` table from the source database `db_B` to the destination database `db_Z`, and map them to `orders_from_A` and `orders_from_B` respectively.

**Does DTS support RDS Serverless instances?**

-   Serverless ApsaraDB RDS for MySQL and PolarDB for MySQL Serverless are supported as both source and destination databases.
    
-   RDS PostgreSQL Serverless is currently supported only as a destination database, not as a source database.
    

**Does DTS support instances in a dedicated cluster (MyBase)?**

Yes, it does. You can use database instances created in an [ApsaraDB for MyBase](/help/en/apsaradb-for-mybase/latest/what-is-apsaradb-for-mybase#concept-2319911) dedicated cluster as a DTS source or destination. To do this, set the **Access Method** to **Alibaba Cloud Instance**. For example, you can follow the steps in [Synchronize data from a self-managed MySQL database to an RDS for MySQL instance](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance#task-2067484) to synchronize data from a self-managed MySQL database to a MySQL instance in an ApsaraDB for MyBase dedicated cluster.

**What is a self-managed database?**

When you configure a DTS task, a self-managed database is any database instance for which the **Access Method** is not set to **Alibaba Cloud Instance**. Self-managed databases include database instances from third-party cloud providers, databases deployed on-premises, and databases deployed on ECS instances.

## Appendix: **Synchronization link support matrix**

The following matrix summarizes the database synchronization links that DTS supports. Before you begin the configuration, you can use this matrix to quickly check whether your combination of source and destination databases is supported. In the **On This Page** section on the right, you can click a source database to navigate to its section and view the supported versions, synchronization types, and configuration steps.

### **Source: Self-managed MySQL or RDS for MySQL**

**Important**

-   Databases in PolarDB-X 1.0 must be created based on RDS for MySQL. DTS does not currently support databases created based on PolarDB for MySQL.
    
-   When PolarDB-X 1.0 is the destination, schema synchronization and initial schema synchronization are not supported. Both are supported when PolarDB-X 2.0 is the destination.
    
-   PolarDB-X 2.0 instances must be version 5.4.11 or later. For information about how to upgrade, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    
    All versions
    

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

-   [Synchronize data from a self-managed MySQL database to an RDS for MySQL instance](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance#task-2067484)
    
-   [One-way synchronization between RDS for MySQL instances](/help/en/dts/user-guide/synchronize-data-between-apsaradb-rds-for-mysql-instances#task-2067350)
    
-   [Two-way synchronization between MySQL databases](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-mysql-instances#task-2120140)
    
-   [Synchronize RDS for MySQL instances across Alibaba Cloud accounts](/help/en/dts/user-guide/synchronize-data-between-apsaradb-rds-for-mysql-instances-of-different-alibaba-cloud-accounts#task-2209372)
    

PolarDB for MySQL

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

-   [Synchronize data from RDS for MySQL to PolarDB for MySQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-polardb-for-mysql-cluster#task-2067485)
    
-   [Two-way synchronization between a MySQL database and a PolarDB for MySQL instance](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-an-apsaradb-rds-for-mysql-instance-and-a-polardb-for-mysql-cluster#task-2150322)
    

Oracle (RAC or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, 19c

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to a self-managed Oracle database](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-oracle-database#task-2215588)

PolarDB-X 1.0

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to PolarDB-X 1.0](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-polardb-x-1-0-instance)

PolarDB-X 2.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to PolarDB-X 2.0](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-polardb-x-2-0-instance#task-2067486)

AnalyticDB for MySQL

Versions 2.0, 3.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

-   [Synchronize data from RDS for MySQL to AnalyticDB for MySQL 3.0](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-an-analyticdb-for-mysql-v3-0-cluster#task-2082870)
    
-   [Synchronize data from RDS to AnalyticDB for MySQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-instance-to-an-analyticdb-for-mysql-cluster#concept-1216438)
    

-   Self-managed PostgreSQL
    
    Versions 9.5.x, 9.6.x, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, 17.x
    
-   RDS for PostgreSQL
    
    Versions 9.4, 10, 11, 12, 13, 14, 15, 16, 17
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to RDS for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-an-apsaradb-rds-for-postgresql-instance#task-2216629)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-an-analyticdb-for-postgresql-instance-1#task-2067487)

-   Alibaba Cloud Message Queue for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to Alibaba Cloud Message Queue for Kafka](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-message-queue-for-apache-kafka-instance#task-2123001)

ApsaraDB for ClickHouse cluster

Version 20.8 and later

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to an ApsaraDB for ClickHouse cluster](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-clickhouse-cluster)

DataHub

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to DataHub](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-datahub-project-1#task-2127734)

Elasticsearch

Versions 5.5, 5.6, 6.x, 7.x, 8.x

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to Elasticsearch](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-5)

MaxCompute

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to MaxCompute](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-maxcompute-project-new)

ApsaraDB for Tair (compatible with Redis) instance (cluster, standard, or read/write splitting architecture)

Versions 4.0, 5.0, 6.0, 7.0

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to Tair/Redis](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-tair-or-redis-instance)

Tablestore

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to Tablestore](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-tablestore-instance-new)

Function Compute (FC)

Version 2.0

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to Function Compute (FC)](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-fc)

ApsaraDB for SelectDB

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to ApsaraDB for SelectDB](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-an-apsaradb-for-selectdb-instance)

Lindorm

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to Lindorm](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-lindorm-instance)

Doris

Version 1.2 and later

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to a self-managed Doris cluster](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-doris-database)

ApsaraMQ for RocketMQ

4.x and 5.x series

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MySQL to ApsaraMQ for RocketMQ](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-an-apsaramq-for-rocketmq-instance)

### **Source: PolarDB for MySQL**

**Important**

-   Databases in PolarDB-X 1.0 must be created based on RDS for MySQL. DTS does not currently support databases created based on PolarDB for MySQL.
    
-   When PolarDB-X 1.0 is the destination, schema synchronization and initial schema synchronization are not supported. Both are supported when PolarDB-X 2.0 is the destination.
    
-   PolarDB-X 2.0 instances must be version 5.4.11 or later. For information about how to upgrade, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

PolarDB for MySQL

All versions

PolarDB for MySQL

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

-   [One-way synchronization between PolarDB for MySQL instances](/help/en/dts/user-guide/synchronize-data-between-polardb-for-mysql-clusters#task-2070622)
    
-   [Two-way synchronization between PolarDB for MySQL instances](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-polardb-for-mysql-clusters-new)
    

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

[Synchronize data from PolarDB for MySQL to RDS for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-an-apsaradb-rds-for-mysql-instance-1#task-2070624)

PolarDB-X 1.0

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to PolarDB-X 1.0](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-a-polardb-x-1-0-instance)

PolarDB-X 2.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to PolarDB-X 2.0](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-a-polardb-x-2-0-instance#task-2070625)

AnalyticDB for MySQL

Versions 2.0, 3.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

-   [Synchronize data from PolarDB for MySQL to AnalyticDB for MySQL 3.0](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-an-analyticdb-for-mysql-v3-0-cluster#task-2082973)
    
-   [Synchronize data from PolarDB for MySQL to AnalyticDB for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-an-analyticdb-for-mysql-cluster#task-1813779)
    

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-an-analyticdb-for-postgresql-instance-new)

-   Alibaba Cloud Message Queue for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to Alibaba Cloud Message Queue for Kafka](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-a-message-queue-for-apache-kafka-instance)

DataHub

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to DataHub](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-a-datahub-project#task-2133535)

ApsaraDB for ClickHouse cluster

Version 20.8 and later

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to an ApsaraDB for ClickHouse cluster](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-a-clickhouse-cluster)

Elasticsearch

Versions 5.5, 5.6, 6.x, 7.x, 8.x

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to Elasticsearch](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-an-es-instance)

MaxCompute

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to MaxCompute](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-a-maxcompute-project#task-2229219)

Oracle (RAC or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, 19c

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to a self-managed Oracle database](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-a-self-managed-oracle-database#task-2229556)

ApsaraDB for SelectDB

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to ApsaraDB for SelectDB](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-an-apsaradb-for-selectdb-instance)

Doris

Version 1.2 and later

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to a self-managed Doris cluster](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-a-self-managed-doris-database)

Lindorm

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for MySQL to Lindorm](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-mysql-cluster-to-a-lindorm-instance)

### **Source: PolarDB for PostgreSQL**

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

PolarDB for PostgreSQL

Versions 11, 14, 15, 16, 17

-   Self-managed PostgreSQL
    
    Versions 9.5.x, 9.6.x, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, 17.x
    
-   RDS for PostgreSQL
    
    Versions 9.4, 10, 11, 12, 13, 14, 15, 16, 17
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

-   [Synchronize data from PolarDB for PostgreSQL to RDS for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-postgresql-cluster-to-an-apsaradb-rds-for-postgresql-instance#task-2217521)
    
-   [Two-way synchronization between PolarDB for PostgreSQL and RDS for PostgreSQL](/help/en/dts/user-guide/configure-two-way-synchronization-between-a-polardb-for-postgresql-cluster-and-an-apsaradb-rds-for-postgresql-instance)
    

PolarDB for PostgreSQL

Versions 11, 14, 15, 16, 17

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

-   [One-way synchronization between PolarDB for PostgreSQL instances](/help/en/dts/user-guide/synchronize-data-between-polardb-for-postgresql-clusters#task-2242184)
    
-   [Two-way synchronization between PolarDB for PostgreSQL instances](/help/en/dts/user-guide/configure-two-way-synchronization-between-polardb-for-postgresql-clusters)
    

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for PostgreSQL to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-postgresql-cluster-to-an-analyticdb-for-postgresql-instance#task-2295192)

ApsaraDB for SelectDB

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB for PostgreSQL to ApsaraDB for SelectDB](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-postgresql-cluster-to-an-apsaradb-for-selectdb-instance)

### **Source: PolarDB-X**

**Important**

-   Databases in PolarDB-X 1.0 must be created based on RDS for MySQL. DTS does not currently support databases created based on PolarDB for MySQL.
    
-   When PolarDB-X 1.0 is the destination, schema synchronization and initial schema synchronization are not supported. Both are supported when PolarDB-X 2.0 is the destination.
    
-   PolarDB-X 2.0 instances must be version 5.4.11 or later. For information about how to upgrade, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

PolarDB-X 1.0

PolarDB-X 1.0

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data between PolarDB-X 1.0 instances](/help/en/dts/user-guide/synchronize-data-between-polardb-x-1-0-instances#task-2148696)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 1.0 to RDS for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-1-0-instance-to-an-apsaradb-rds-for-mysql-instance#task-2105787)

PolarDB for MySQL

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 1.0 to PolarDB for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-1-0-instance-to-a-polardb-for-mysql-cluster#task-2148697)

AnalyticDB for MySQL

Version 3.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 1.0 to AnalyticDB for MySQL 3.0](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-1-0-instance-to-an-analyticdb-for-mysql-v3-0-cluster)

DataHub

Schema synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 1.0 to DataHub](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-1-0-instance-to-a-datahub-project#task-2230139)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 1.0 to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-1-0-instance-to-an-analyticdb-for-postgresql-instance-new)

-   Alibaba Cloud Message Queue for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 1.0 to Alibaba Cloud Message Queue for Kafka](/help/en/dts/user-guide/1-polardb-x-1-0-to-synchronize-to-kafka#task-2349505)

Elasticsearch

Versions 5.5, 5.6, 6.x, 7.x, 8.x

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 1.0 to Elasticsearch](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-1-0-instance-to-an-elasticsearch-cluster)

PolarDB-X 2.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 1.0 to PolarDB-X 2.0](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-1-0-instance-to-a-polardb-x-2-0-instance)

PolarDB-X 2.0

PolarDB-X 2.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

-   [One-way synchronization between PolarDB-X 2.0 instances](/help/en/dts/user-guide/synchronize-data-between-polardb-x-2-0-instances#task-2067213)
    
-   [Two-way synchronization between PolarDB-X 2.0 instances](/help/en/dts/user-guide/two-phase-synchronization-between-polardb-x-2-0#task-2354548)
    

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to RDS for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-an-apsaradb-rds-for-mysql-instance#task-2066819)

PolarDB for MySQL

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to PolarDB for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-a-polardb-for-mysql-cluster#task-2067212)

AnalyticDB for MySQL

Version 3.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to AnalyticDB for MySQL 3.0](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-an-analyticdb-for-mysql-v3-0-cluster#task-2071691)

-   Alibaba Cloud Message Queue for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to Alibaba Cloud Message Queue for Kafka](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-a-message-queue-for-apache-kafka-instance#task-2103337)

DataHub

Schema synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to DataHub](/help/en/dts/user-guide/synchronize-incremental-data-from-a-polardb-x-2-0-instance-to-a-datahub-project#task-2114751)

MaxCompute

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to MaxCompute](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-a-maxcompute-project#task-2215404)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-an-analyticdb-for-postgresql-instance)

Elasticsearch

Versions 5.5, 5.6, 6.x, 7.x, 8.x

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to Elasticsearch](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-an-elasticsearch-cluster#task-2105453)

Oracle (RAC or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, 19c

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to a self-managed Oracle database](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-a-self-managed-oracle-database)

Tablestore

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to Tablestore](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-tablestore)

PolarDB-X 1.0

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to PolarDB-X 1.0](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-a-polardb-x-1-0-instance)

ApsaraDB for SelectDB

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from PolarDB-X 2.0 to ApsaraDB for SelectDB](/help/en/dts/user-guide/synchronize-data-from-a-polardb-x-2-0-instance-to-an-apsaradb-for-selectdb-instance)

### **Source: PolarDB for PostgreSQL (Compatible with Oracle)**

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

-   [One-way synchronization between PolarDB for PostgreSQL (Compatible with Oracle) clusters](/help/en/dts/user-guide/configure-one-way-data-synchronization-between-polardb-for-postgresql-compatible-with-oracle-clusters)
    
-   [Two-way synchronization between PolarDB for PostgreSQL (Compatible with Oracle) clusters](/help/en/dts/user-guide/polardb-postgresql-compatible-with-oracle-two-way-synchronization-between-clusters#main-2361575)
    

-   Alibaba Cloud Message Queue for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a PolarDB for PostgreSQL (Compatible with Oracle) cluster to Alibaba Cloud Message Queue for Kafka](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-postgresql-compatible-with-oracle-cluster-to-a-message-queue-for-apache-kafka-instance)

AnalyticDB for MySQL

Version 3.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a PolarDB for PostgreSQL (Compatible with Oracle) cluster to AnalyticDB for MySQL 3.0](/help/en/dts/user-guide/synchronize-data-from-a-polardb-for-postgresql-cluster-to-an-analyticdb-for-mysql-v3-0-cluster#task-2291924)

### **Source: Oracle**

**Important**

-   You can configure this only in the new console.
    
-   The destination PolarDB-X 2.0 instance must be version 5.4.11 or later. For information about how to upgrade, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

Self-managed Oracle (RAC or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, 19c

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed Oracle database to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-oracle-database-to-an-analyticdb-for-postgresql-instance#task-2076110)

DataHub

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed Oracle database to DataHub](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-oracle-database-to-a-datahub-project-1#task-2224805)

PolarDB-X 2.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed Oracle database to PolarDB-X 2.0](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-oracle-database-to-a-polardb-x-v2-0-instance#task-2230575)

PolarDB for MySQL

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed Oracle database to PolarDB for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-oracle-database-to-a-polardb-for-mysql-cluster)

MaxCompute

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed Oracle database to MaxCompute](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-oracle-database-to-a-maxcompute-project)

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed Oracle database to PolarDB for PostgreSQL (Compatible with Oracle)](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-oracle-database-to-a-polardb-for-postgresql-compatible-with-oracle-cluster)

Alibaba Cloud Message Queue for Kafka

Versions 0.10.1.0 to 2.x

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed Oracle database to Alibaba Cloud Message Queue for Kafka](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-oracle-database-to-a-message-queue-for-apache-kafka-instance#task-2121855)

### **Source: Self-managed PostgreSQL or RDS for PostgreSQL**

**Important**

RDS for PostgreSQL Serverless instances are not supported as a source database but are supported as a destination database.

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

-   Self-managed PostgreSQL
    
    Versions 9.5.x, 9.6.x, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, 17.x
    
-   RDS for PostgreSQL
    
    Versions 9.4, 10, 11, 12, 13, 14, 15, 16, 17
    

-   Self-managed PostgreSQL
    
    Versions 9.5.x, 9.6.x, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, 17.x
    
-   RDS for PostgreSQL
    
    Versions 9.4, 10, 11, 12, 13, 14, 15, 16, 17
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

-   [Two-way synchronization between PostgreSQL databases](/help/en/dts/user-guide/configure-two-way-synchronization-between-apsaradb-rds-for-postgresql-instances#task-2090302)
    
-   [One-way synchronization between RDS for PostgreSQL instances](/help/en/dts/user-guide/configure-one-way-synchronization-between-apsaradb-rds-for-postgresql-instances#task-2090303)
    
-   [Synchronize data from a self-managed PostgreSQL database to an RDS for PostgreSQL instance](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-postgresql-database-to-an-apsaradb-rds-for-postgresql-instance#task-2115225)
    

PolarDB for PostgreSQL

Versions 11, 14, 15, 16, 17

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Two-way synchronization

-   [Synchronize data from RDS for PostgreSQL to PolarDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-postgresql-instance-to-a-polardb-for-postgresql-cluster#task-2231354)
    
-   [Two-way synchronization between RDS for PostgreSQL and PolarDB for PostgreSQL](/help/en/dts/user-guide/configure-two-way-synchronization-between-an-apsaradb-rds-for-postgresql-instance-and-a-polardb-for-postgresql-cluster)
    

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for PostgreSQL to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-postgresql-instance-to-an-analyticdb-for-postgresql-instance-new)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for PostgreSQL to RDS for MySQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-postgresql-instance-to-an-apsaradb-rds-for-mysql-instance#task-2074679)

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed PostgreSQL database to PolarDB for PostgreSQL (Compatible with Oracle)](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-postgresql-database-to-a-polardb-for-oracle-cluster#task-2121614)

ApsaraDB for SelectDB

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for PostgreSQL to ApsaraDB for SelectDB](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-postgresql-instance-to-an-apsaradb-for-selectdb-instance)

### **Source: Self-managed SQL Server or RDS for SQL Server**

**Important**

-   The supported source versions for self-managed SQL Server are Enterprise, Developer, Enterprise Evaluation, Standard, and Web.
    
-   The supported destination versions for self-managed SQL Server are Enterprise, Developer, Enterprise Evaluation, Standard, and Web.
    
-   SQL Server clusters and SQL Server Always On availability groups are supported.
    
-   If the source database is Azure SQL Database, you must set **SQL Server Incremental Synchronization Mode** to **Polling and querying CDC instances for incremental synchronization**.
    
-   Self-managed SQL Server 2005 and RDS for SQL Server 2008 and 2008 R2 are not supported as a source.
    
-   In hybrid log parsing mode (when **SQL Server Incremental Synchronization Mode** is set to **Log-based Parsing for Non-heap Tables and CDC-based Incremental Synchronization for Heap Tables (Hybrid Log-based Parsing)**), the supported source databases (including RDS for SQL Server and self-managed SQL Server) are:
    
    -   Enterprise or Enterprise Evaluation Edition: Versions 2012, 2014, 2016, 2019, or 2022.
        
    -   Standard Edition: Versions 2016, 2019, or 2022.
        
-   When a Web Edition of SQL Server is the source, **SQL Server Incremental Synchronization Mode** only supports **Incremental Synchronization Based on Logs of Source Database (Heap tables are not supported)**.
    

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

-   Self-managed SQL Server
    
    Versions 2008 R2, 2012, 2014, 2016, 2017, 2019, or 2022
    
-   RDS for SQL Server
    
    Versions 2012, 2014, 2016, 2017, 2019, or 2022
    

-   Self-managed SQL Server
    
    Versions 2008 R2, 2012, 2014, 2016, 2017, 2019, or 2022
    
-   RDS for SQL Server
    
    Versions 2008 R2, 2012, 2014, 2016, 2017, 2019, or 2022
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data between RDS for SQL Server instances](/help/en/dts/user-guide/synchronize-data-between-apsaradb-rds-for-sql-server-instances#task-2083180)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for SQL Server to RDS for MySQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-sql-server-instance-to-an-apsaradb-rds-for-mysql-instance#task-2084946)

PolarDB for MySQL

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed SQL Server database to PolarDB for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-sql-server-database-to-a-polardb-for-mysql-cluster#task-2084917)

AnalyticDB for MySQL

Version 3.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for SQL Server to AnalyticDB for MySQL 3.0](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-sql-server-instance-to-an-analyticdb-for-mysql-v3-0-cluster)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

-   [Synchronize data from a self-managed SQL Server database to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-sql-server-database-to-an-analyticdb-for-postgresql-instance#task-2075845)
    
-   [Synchronize data from RDS for SQL Server to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-sql-server-instance-to-an-analyticdb-for-postgresql-instance-1)
    

RDS for PostgreSQL

Versions 9.4, 10, 11, 12, 13, 14, 15, 16, 17

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed SQL Server database to RDS for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-sql-server-database-to-an-apsaradb-rds-for-postgresql-instance)

DataHub

Schema synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for SQL Server to DataHub](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-sql-server-instance-to-a-datahub-project#task-2218230)

### **Source: MariaDB**

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

-   RDS for MariaDB
    
    -   10.x
        
-   Self-managed MariaDB
    
    -   10.x, 11.0 to 11.4
        

-   RDS for MariaDB
    
-   Self-managed MariaDB
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

-   [Synchronize data between RDS for MariaDB instances](/help/en/dts/user-guide/synchronize-data-between-rds-mariadb-instances)
    
-   [Synchronize data from a self-managed MariaDB database to an RDS for MariaDB instance](/help/en/dts/user-guide/synchronize-data-from-the-user-created-mariadb-to-rds-mariadb)
    

RDS for MySQL

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MariaDB to RDS for MySQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mariadb-instance-to-an-apsaradb-rds-for-mysql-instance)

RDS for PostgreSQL

Versions 9.4, 10, 11, 12, 13, 14, 15, 16, 17

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from RDS for MariaDB to RDS for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-rds-mariadb-to-rds-postgresql)

### **Source: Self-managed MongoDB or ApsaraDB for MongoDB**

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

Replica set architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, 7.0
    

Replica set or sharded cluster architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, 7.0
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from an ApsaraDB for MongoDB replica set instance to an ApsaraDB for MongoDB replica set or sharded cluster instance](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-for-mongodb-instance-to-another-apsaradb-for-mongodb-instance#task-2096327)

Sharded cluster architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, 7.0
    

Replica set or sharded cluster architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, 7.0
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from an ApsaraDB for MongoDB sharded cluster instance to an ApsaraDB for MongoDB replica set or sharded cluster instance](/help/en/dts/user-guide/configure-one-way-synchronization-between-apsaradb-for-mongodb-sharded-cluster-instances#task-2228804)

ApsaraDB for MongoDB (sharded cluster architecture)

Versions 4.0, 4.2, 4.4, 5.0, 6.0, 7.0

ApsaraDB for MongoDB (sharded cluster architecture)

Versions 4.0, 4.2, 4.4, 5.0, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

Two-way synchronization

[Two-way synchronization between ApsaraDB for MongoDB sharded cluster instances](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-apsaradb-for-mongodb-instances#task-2107113)

ApsaraDB for MongoDB (replica set architecture)

Versions 4.0, 4.2, 4.4, 5.0, 6.0, 7.0

ApsaraDB for MongoDB (replica set architecture)

Versions 4.0, 4.2, 4.4, 5.0, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

Two-way synchronization

[Two-way synchronization between ApsaraDB for MongoDB replica set instances](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-apsaradb-for-mongodb-replica-set-instances#task-2238333)

Replica set or sharded cluster architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, 7.0
    

Function Compute (FC)

Version 2.0

Incremental data synchronization

One-way synchronization

-   [Synchronize data from an ApsaraDB for MongoDB replica set instance to Function Compute (FC)](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-for-mongodb-replica-set-instance-to-fc)
    
-   [Synchronize data from an ApsaraDB for MongoDB sharded cluster instance to Function Compute (FC)](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-for-mongodb-sharded-cluster-instance-to-fc)
    

Lindorm

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from ApsaraDB for MongoDB to Lindorm](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-for-mongodb-instance-to-a-lindorm-instance)

AnalyticDB for PostgreSQL

4.3, 6.0, 7.0

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from ApsaraDB for MongoDB to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-for-mongodb-replica-set-instance-to-an-analyticdb-for-postgresql-instance)

AnalyticDB for MySQL 3.0

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from ApsaraDB for MongoDB to AnalyticDB for MySQL 3.0](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-for-mongodb-replica-set-instance-to-an-analyticdb-for-mysql-v3-0-cluster)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    
    All versions
    

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from ApsaraDB for MongoDB to RDS for MySQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-for-mongodb-instance-to-an-apsaradb-rds-for-mysql-instance)

PolarDB for MySQL

All versions

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from ApsaraDB for MongoDB to PolarDB for MySQL](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-for-mongodb-instance-to-a-polardb-for-mysql-cluster)

-   Alibaba Cloud Message Queue for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from ApsaraDB for MongoDB to Alibaba Cloud Message Queue for Kafka](/help/en/dts/user-guide/synchronize-data-from-an-mongodb-instance-to-a-kafka-instance)

### **Source: Self-managed Redis or ApsaraDB for Tair (compatible with Redis)**

**Important**

-   Redis is a NoSQL database and does not require schema synchronization.
    
-   Only two-way synchronization between Tair (Enterprise Edition) instances is supported.
    
-   When the source is a self-managed Redis instance or an ApsaraDB for Tair (compatible with Redis) instance, full and incremental data synchronization are supported. These are combined into a single step called **Incremental Data Synchronization**.
    
-   The highest supported RDB version is 11, which corresponds to Redis 7.2.
    

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

-   Self-managed Redis (standalone or cluster architecture)
    
    Versions 2.8, 3.0, 3.2, 4.0, 5.0, 6.0, 7.0, 7.2
    
-   ApsaraDB for Tair (compatible with Redis) instance (cluster, standard, or read/write splitting architecture)
    
    Versions 4.0, 5.0, 6.0, 7.0
    

-   Self-managed Redis (standalone or cluster architecture)
    
    Versions 2.8, 3.0, 3.2, 4.0, 5.0, 6.0, 7.0, 7.2
    
-   ApsaraDB for Tair (compatible with Redis) instance (cluster, standard, or read/write splitting architecture)
    
    Versions 4.0, 5.0, 6.0, 7.0
    

Full data synchronization

Incremental data synchronization

One-way synchronization

-   [One-way synchronization between ApsaraDB for Tair (compatible with Redis) instances](/help/en/dts/user-guide/configure-one-way-synchronization-between-apsaradb-for-redis-instances)
    
-   [Cross-account one-way synchronization](/help/en/dts/user-guide/configure-one-way-data-synchronization-between-apsaradb-for-redis-instances-across-alibaba-cloud-accounts)
    
-   [Synchronize data from a self-managed Redis instance on an ECS instance to an ApsaraDB for Tair (compatible with Redis) instance](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-redis-database-hosted-on-an-ecs-instance-to-a-tair-instance)
    

ApsaraDB for Tair (compatible with Redis) Enterprise Edition/Tair instance (cluster, standard, or read/write splitting architecture)

ApsaraDB for Tair (compatible with Redis) Enterprise Edition/Tair instance (cluster, standard, or read/write splitting architecture)

Full data synchronization

Incremental data synchronization

Two-way synchronization

-   [Two-way synchronization between Tair (Enterprise Edition) instances](/help/en/dts/user-guide/configure-two-way-synchronization-between-tair-instances)
    
-   [Use an OpenAPI to configure one-way or two-way data synchronization between Tair (Enterprise Edition) instances](/help/en/dts/user-guide/use-openapi-explorer-to-configure-one-way-or-two-way-data-synchronization-between-apsaradb-for-redis-enhanced-edition-instances#concept-2434483)
    

### **Source: TiDB**

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

TiDB

AnalyticDB for MySQL

Version 3.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a self-managed TiDB database to AnalyticDB for MySQL 3.0](/help/en/dts/user-guide/synchronize-data-from-a-self-managed-tidb-database-to-an-analyticdb-for-mysql-v3-0-cluster)

PolarDB-X 2.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Document in preparation

### **Source: Db2 for LUW**

**Important**

-   Db2 for LUW is displayed as **DB2 for LUW** in the console.
    
-   The destination PolarDB-X 2.0 instance must be version 5.4.11 or later. For information about how to upgrade, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

Db2 for LUW

Versions 9.5, 9.7, 10.1, 10.5, 11.1, 11.5

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from Db2 for LUW to RDS for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-db2-for-luw-database-to-an-apsaradb-rds-for-mysql-instance#task-2233175)

PolarDB for MySQL

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from Db2 for LUW to PolarDB for MySQL](/help/en/dts/user-guide/synchronize-data-from-a-db2-for-luw-database-to-a-polardb-for-mysql-cluster#task-2214583)

PolarDB-X 2.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from Db2 for LUW to PolarDB-X 2.0](/help/en/dts/user-guide/synchronize-data-from-a-db2-for-luw-database-to-a-polardb-x-2-0-instance#task-2109732)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from Db2 for LUW to AnalyticDB for PostgreSQL](/help/en/dts/user-guide/synchronize-data-from-a-db2-for-luw-database-to-an-analyticdb-for-postgresql-instance#task-2233176)

-   Alibaba Cloud Message Queue for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from Db2 for LUW to a self-managed Kafka cluster](/help/en/dts/user-guide/synchronize-data-from-a-db2-for-luw-database-to-a-self-managed-kafka-cluster#task-2233177)

### **Source: Db2 for i (AS/400)**

**Important**

Db2 for i is displayed as **DB2 for iSeries (AS/400)** in the console.

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

Db2 for i

Versions 7.3, 7.4

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Document in preparation

PolarDB for MySQL

All versions

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

Document in preparation

### **Source: AnalyticDB for MySQL 3.0**

**Important**

The kernel version of the source AnalyticDB for MySQL 3.0 cluster must be 3.2.1.0 or later.

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

AnalyticDB for MySQL

Version 3.0

AnalyticDB for MySQL

Version 3.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data between AnalyticDB for MySQL 3.0 instances](/help/en/dts/user-guide/synchronize-data-between-analyticdb-for-mysql-v3-0-clusters)

### **Source: AnalyticDB** for PostgreSQL

**Important**

The kernel version of the source AnalyticDB for PostgreSQL instance must be 7.2.1.4 or later.

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

AnalyticDB for PostgreSQL

Version 7.0

AnalyticDB for PostgreSQL

Version 7.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data between AnalyticDB for PostgreSQL instances](/help/en/dts/user-guide/synchronize-data-between-analyticdb-for-postgresql-instances)

AnalyticDB for PostgreSQL

Version 7.0

Alibaba Cloud Message Queue for Kafka

Versions 0.10.1.0 to 2.x

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from AnalyticDB for PostgreSQL to Alibaba Cloud Message Queue for Kafka](/help/en/dts/user-guide/synchronize-data-from-analyticdb-for-postgresql-to-apsaramq-for-kafka)

### **Source: Data Management (DMS) logical database**

**Important**

The DMS logical database must be created from multiple sharded PolarDB for MySQL instances.

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

Data Management (DMS) logical database

AnalyticDB for MySQL

Version 3.0

Schema synchronization

Full data synchronization

Incremental data synchronization

One-way synchronization

[Synchronize data from a Data Management (DMS) logical database to AnalyticDB for MySQL 3.0](/help/en/dts/user-guide/synchronize-data-from-a-dms-logical-database-to-an-analyticdb-for-mysql-v3-0-cluster#task-2077106)

### **Source: AWS platform database**

**Source database**

**Destination database**

**Synchronization type**

**Synchronization topology**

**Configuration document**

AWS platform database

Subject to what is available in the console

[Use a VPN gateway to synchronize data between an Alibaba Cloud RDS instance and an AWS EC2 instance](/help/en/dts/use-cases/dts-implements-data-synchronization-between-alibaba-cloud-rds-and-aws-vpc-based-on-vpn-gateway)
