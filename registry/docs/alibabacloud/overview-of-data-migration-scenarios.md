The data migration feature helps you migrate data between homogeneous or heterogeneous data sources. This feature is suitable for business scenarios such as migrating data to the cloud, migrating data between Alibaba Cloud instances, and database sharding and scaling. This topic describes the databases, versions, and migration types that the data migration feature supports, and provides links to configuration documents.

## Background information

### **Migration types**

**Migration type**

**Description**

Schema migration

DTS migrates the schema definitions of objects from the source database to the destination database. These objects can include tables, views, triggers, stored procedures, and indexes.

For schema migration between heterogeneous databases, DTS converts the syntax of the schema definitions based on the source and destination databases. For example, DTS converts NUMBER in Oracle to DECIMAL in MySQL.

Full data migration

DTS migrates all historical data of the objects from the source database to the destination database. If you select only schema migration and full data migration when you configure a data migration task, new data in the source database is not migrated to the destination database.

**Important**

To ensure data consistency, do not write new data to the source database during the migration. To perform a migration with no downtime, you must select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration** when you configure the data migration task.

Incremental data migration

DTS obtains the incremental data change statements for the objects from the source database. For example, DTS obtains incremental change statements from the binary logging of a MySQL database. DTS then converts the statements based on the destination database type and executes the statements in the destination database. This implements real-time migration of incremental data to the destination database.

**Note**

Incremental data migration tasks run in real time and do not automatically stop. You must manually stop or release the migration task. For more information, see [Stop a DTS instance](/help/en/dts/user-guide/stop-a-dts-instance) and [Release a DTS instance](/help/en/dts/user-guide/release-dts-instances-1).

### Differences between data synchronization and data migration

Data migration can be used for data synchronization in certain scenarios. However, the data synchronization feature provides greater network stability and more features. Use the data synchronization feature to leverage these benefits. For more information about the differences, see [What are the differences between data migration and data synchronization?](/help/en/dts/support/faq#section-rts-s8s-dka).

**Important**

-   If you want to configure a migration task where the source and destination databases are in different regions (cross-border or cross-region), the source and destination databases must meet the following conditions:
    
    -   If the **Access Method** parameter is set to **Alibaba Cloud Instance** for the source database, the source database must have a public endpoint.
        
    -   If the **Access Method** parameter is not set to **Alibaba Cloud Instance** for the source database, the destination database must have a public endpoint.
        
-   If you configure a synchronization or migration task that involves [cross-border and cross-region](/help/en/dts/user-guide/definition-of-cross-border-and-cross-region-instances) operations, the task bandwidth is limited to 100 Mbit/s. To use a bandwidth that exceeds 100 Mbit/s, you must use [CEN](/help/en/dts/user-guide/connect-an-on-premises-database-to-dts-using-cen#594c98e164ceq) to configure the cross-region network bandwidth, and then configure the DTS task.
    
    **Note**
    
    A cross-region or cross-border task is a task where the source and destination databases are in different regions. For example, the source database is an RDS instance in the Singapore region and the destination database is an RDS instance in the China (Hangzhou) region.
    

### Cross-account data migration

The database type and connection type determine whether you can create a cross-Alibaba Cloud account migration task, where the **Replicate Data Across Alibaba Cloud Accounts** configuration item for the source or destination database instance is set to **Yes**. For more information, see [Configure a cross-Alibaba Cloud account task](/help/en/dts/user-guide/synchronize-or-migrate-data-across-alibaba-cloud-accounts#4200617964kc9).

### **Source database limits**

The network bandwidth limits and business requirements for the source database are listed in the following table. For more limits, see the specific configuration document for your scenario.

**Limit**

**Description**

Network bandwidth

-   Must be 100 Mb/s or higher.
    
-   If the migration instance includes an incremental migration task, make sure that the round-trip time (RTT) between the source database and the DTS service, and between the DTS service and the destination database, is less than 2 ms. Otherwise, the performance of the migration instance is affected.
    
    For example, if the physical distance between the source database and the DTS service is long, the RTT is much higher than 2 ms. This causes latency for the migration instance. An example is a database deployed in the Singapore region that connects to DTS through a VPN gateway deployed in the Hong Kong (China) region.
    

Business requirements

-   The peak log volume must be less than 1 TB. The average hourly log volume must be less than 50 GB. The peak traffic must be less than 15 MB/s.
    
    **Important**
    
    DTS pulls logs for the entire database instance by default. A high volume of data changes in objects that are not being synchronized or migrated can also cause task latency.
    
-   Batch data updates or large-scale changes to large object (LOB) data types, such as CLOB, BLOB, and LONG, can cause task latency. Run these operations in smaller batches or avoid them if possible.
    
-   Avoid frequent delete or update operations on tables without primary keys. This can cause task latency.
    
-   Reduce the frequency of DDL operations. Do not execute more than 10 DDL statements per second to avoid task latency.
    
-   Avoid large transactions where a single transaction generates more than 100 GB of logs. This can cause the task to fail.
    

## **FAQ**

-   Does DTS support Serverless ApsaraDB RDS for MySQL instances?
    
    Yes, it does.
    
-   Does DTS support PolarDB for MySQL serverless clusters?
    
    This is supported.
    
-   Does DTS support RDS for PostgreSQL serverless instances?
    
    This is currently supported for destination databases, but not for source databases.
    
-   Does DTS support instances in ApsaraDB for MyBase dedicated clusters?
    
    Yes. DTS can read data from database instances created in [ApsaraDB for MyBase](/help/en/apsaradb-for-mybase/latest/what-is-apsaradb-for-mybase#concept-2319911) using the **Alibaba Cloud Instance** **Access Method**. For configuration instructions, see the documentation for the corresponding database link in the table below.
    
    **Note**
    
    For example, you can refer to [Migrate a self-managed MySQL database to ApsaraDB RDS for MySQL](/help/en/dts/user-guide/migrate-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance-1#task-2067477) to migrate to a MySQL instance in an ApsaraDB for MyBase dedicated cluster.
    
-   What is a self-managed database?
    
    A self-managed database is a database instance where the **Access Method** is not set to **Alibaba Cloud Instance** when you configure a DTS instance. Self-managed databases include database instances from third-party clouds, on-premises databases, and databases deployed on ECS instances.
    
-   Why is there a discrepancy between the estimated total and the completed count during the full migration phase?
    
    A discrepancy may exist between the estimated total and the completed count during the full migration phase. The estimated total is based on database performance statistics, which can sometimes be inaccurate. To ensure data accuracy, rely on the data verified during the full data validation phase.
    

## Overview of migration solutions

Based on your business needs, you can click a source database migration solution in the **On this page** section on the right to quickly find the supported versions, migration types, and configuration steps.

### **Migration solutions for self-managed MySQL or RDS for MySQL sources**

**Important**

-   Databases in PolarDB-X 1.0 must use RDS for MySQL. DTS does not support databases in PolarDB-X 1.0 that use PolarDB for MySQL.
    
-   Schema migration is not supported when the destination is PolarDB-X 1.0. It is supported when the destination is PolarDB-X 2.0.
    
-   Use PolarDB-X 2.0 instance version 5.4.11 or later. For information about how to upgrade the version, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    
-   Migration solutions that use AnalyticDB for MySQL 2.0 as the destination are not available in the new console. You can configure these solutions only in the Legacy Console.
    

**Source database**

**Destination database**

**Migration types**

**Configuration document**

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

-   [Migrate data from a self-managed MySQL database to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance-1#task-2067477)
    
-   [Migrate data between RDS for MySQL instances](/help/en/dts/user-guide/migrate-data-between-apsaradb-rds-for-mysql-instances#task-2067391)
    

PolarDB for MySQL

All versions

Schema migration

Full data migration

Incremental data migration

-   [Migrate data from a self-managed MySQL database to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-a-self-managed-mysql-database-to-a-polardb-for-mysql-cluster-1#task-2067479)
    
-   [Migrate data from an RDS for MySQL instance to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-polardb-for-mysql-cluster-1#task-2067480)
    

PolarDB-X 1.0

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to a PolarDB-X 1.0 instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-polardb-x-1-0-instance#task-2292483)

PolarDB-X 2.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to a PolarDB-X 2.0 instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-polardb-x-2-0-instance#task-2067481)

AnalyticDB for MySQL

Versions 2.0 and 3.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-an-analyticdb-for-mysql-v3-0-cluster#task-2082826)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-an-analyticdb-for-postgresql-instance#task-2224855)

-   Self-managed PostgreSQL
    
    Versions 9.4.8 and later, 9.5, 9.6, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, and 17.x
    
-   RDS for PostgreSQL
    
    Versions 9.4, 10, 11, 12, 13, 14, 15, 16, and 17
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to an RDS for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-an-apsaradb-rds-for-postgresql-instance#task-2216729)

-   ApsaraMQ for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to an ApsaraMQ for Kafka instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-message-queue-for-apache-kafka-instance#task-2128575)

ApsaraDB for ClickHouse cluster

Version 20.8 and later

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to an ApsaraDB for ClickHouse cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-clickhouse-cluster)

DataHub

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to DataHub](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-datahub-project#task-2130198)

Elasticsearch

Versions 5.5, 5.6, 6.x, 7.x, and 8.x

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to an Elasticsearch cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-an-elasticsearch-cluster#task-2234516)

MaxCompute

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to MaxCompute](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-maxcompute-project#task-2281994)

Self-managed Oracle (RAC or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, and 19c

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to a self-managed Oracle database](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-oracle-database#task-2248612)

Tair instance (cluster, standard, or read/write splitting architecture)

Versions 4.0, 5.0, 6.0, and 7.0

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to a Tair or Redis instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-tair-or-redis-instance)

Tablestore

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to Tablestore](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-tablestore-instance#task-2282465)

ApsaraDB for SelectDB

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to an ApsaraDB for SelectDB instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-an-apsaradb-for-selectdb-instance)

Lindorm

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to Lindorm](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-lindorm-instance)

Doris

Version 1.2 and later

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to a self-managed Doris database](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-doris-database)

ApsaraMQ for RocketMQ

4.x and 5.x series

Full data migration

Incremental data migration

[Migrate data from an RDS for MySQL instance to an ApsaraMQ for RocketMQ instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-an-apsaramq-for-rocketmq-instance)

### **Migration solutions for MariaDB sources**

**Source database**

**Destination database**

**Migration types**

**Configuration document**

-   RDS for MariaDB
    
    -   10.x
        
-   Self-managed MariaDB
    
    -   10.x, 11.0 to 11.4
        

-   RDS for MariaDB
    
-   Self-managed MariaDB
    

Schema migration

Full data migration

Incremental data migration

-   [Migrate data between RDS for MariaDB instances](/help/en/dts/user-guide/migrate-data-between-rds-mariadb-instances)
    
-   [Migrate data from a self-managed MariaDB database to an RDS for MariaDB instance](/help/en/dts/user-guide/migrate-data-from-the-user-created-mariadb-to-rds-mariadb)
    

RDS for MySQL

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MariaDB instance to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mariadb-instance-to-an-apsaradb-rds-for-mysql-instance-new)

RDS for PostgreSQL

Versions 9.4, 10, 11, 12, 13, 14, 15, 16, and 17

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for MariaDB instance to an RDS for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mariadb-instance-to-an-apsaradb-rds-for-postgresql-instance#task-2284159)

### **Migration solutions for RDS PPAS sources**

**Source database**

**Destination database**

**Migration types**

**Configuration document**

RDS PPAS

All versions

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS PPAS instance to a PolarDB for PostgreSQL (Compatible with Oracle) cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-ppas-instance-to-a-polardb-for-oracle-cluster-1)

### **Migration solutions for PolarDB for MySQL sources**

**Important**

-   Databases in PolarDB-X 1.0 must use RDS for MySQL. DTS does not support databases in PolarDB-X 1.0 that use PolarDB for MySQL.
    
-   Schema migration is not supported when the destination is PolarDB-X 1.0. It is supported when the destination is PolarDB-X 2.0.
    
-   Use PolarDB-X 2.0 instance version 5.4.11 or later. For information about how to upgrade the version, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    

**Source database**

**Destination database**

**Migration types**

**Configuration document**

PolarDB for MySQL

All versions

PolarDB for MySQL

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data between PolarDB for MySQL clusters](/help/en/dts/user-guide/migrate-data-between-polardb-for-mysql-clusters-1#task-2070383)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-an-apsaradb-rds-for-mysql-instance#task-2070384)

PolarDB-X 1.0

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to a PolarDB-X 1.0 instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-a-polardb-x-1-0-instance)

PolarDB-X 2.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to a PolarDB-X 2.0 instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-a-polardb-x-2-0-instance#task-2070385)

AnalyticDB for MySQL

Version 3.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-an-analyticdb-for-mysql-v3-0-cluster#task-2082827)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-an-analyticdb-for-postgresql-instance#task-2255901)

-   ApsaraMQ for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to Kafka](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-a-kafka-cluster#task-2256196)

DataHub

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to DataHub](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-a-datahub-project#task-2256197)

ApsaraDB for ClickHouse cluster

Version 20.8 and later

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to an ApsaraDB for ClickHouse cluster](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-a-clickhouse-cluster)

Self-managed Oracle (RAC, PDB, or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, and 19c

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to a self-managed Oracle database](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-a-self-managed-oracle-database)

Elasticsearch

Versions 5.5, 5.6, 6.x, 7.x, and 8.x

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to an Elasticsearch cluster](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-an-es-cluster#task-2286681)

MaxCompute

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to MaxCompute](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-a-maxcompute-project)

ApsaraDB for SelectDB

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to an ApsaraDB for SelectDB instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-an-apsaradb-for-selectdb-instance)

Doris

Version 1.2 and later

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to a self-managed Doris database](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-a-self-managed-doris-database)

Lindorm

Full data migration

Incremental data migration

[Migrate data from a PolarDB for MySQL cluster to Lindorm](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-mysql-cluster-to-a-lindorm-instance)

### **Migration solutions for PolarDB for PostgreSQL (Compatible with Oracle) sources**

**Source database**

**Destination database**

**Migration types**

**Configuration document**

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data between PolarDB for PostgreSQL (Compatible with Oracle) clusters](/help/en/dts/user-guide/migrate-data-between-polardb-for-oracle-clusters-1#task-2070840)

Self-managed Oracle (RAC, PDB, or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, and 19c

Full data migration

Incremental data migration

[Migrate data from a PolarDB for PostgreSQL (Compatible with Oracle) cluster to a self-managed Oracle database](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-oracle-cluster-to-a-self-managed-oracle-database#task-2070841)

-   ApsaraMQ for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for PostgreSQL (Compatible with Oracle) cluster to an ApsaraMQ for Kafka instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-postgresql-cluster-to-a-message-queue-for-apache-kafka-instance)

AnalyticDB for MySQL

Version 3.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for PostgreSQL (Compatible with Oracle) cluster to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-postgresql-cluster-to-an-analyticdb-for-mysql-v3-0-cluster#task-2306879)

### **Migration solutions for PolarDB-X sources**

**Important**

-   You can configure these tasks only in the new console.
    
-   Databases in PolarDB-X 1.0 must use RDS for MySQL. DTS does not support databases in PolarDB-X 1.0 that use PolarDB for MySQL.
    
-   Use PolarDB-X 2.0 instance version 5.4.11 or later. For information about how to upgrade the version, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    

**Source database**

**Destination database**

**Migration types**

**Configuration document**

PolarDB-X 1.0

PolarDB-X 2.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 1.0 instance to a PolarDB-X 2.0 instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-1-0-instance-to-a-polardb-x-2-0-instance#task-2219040)

AnalyticDB for MySQL

Version 3.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 1.0 instance to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-1-0-instance-to-an-analyticdb-for-mysql-v3-0-cluster#task-2301113)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 1.0 instance to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-1-0-instance-to-an-analyticdb-for-postgresql-instance)

DataHub

Schema migration

Incremental data migration

[Migrate data from a PolarDB-X 1.0 instance to DataHub](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-1-0-instance-to-a-datahub-project#task-2323901)

Elasticsearch

Versions 5.5, 5.6, 6.x, 7.x, and 8.x

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 1.0 instance to an Elasticsearch cluster](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-1-0-instance-to-an-elasticsearch-cluster#task-2324052)

-   ApsaraMQ for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 1.0 instance to ApsaraMQ for Kafka](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-v1-0-instance-to-a-message-queue-for-apache-kafka-instance)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 1.0 instance to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-1-0-instance-to-an-apsaradb-rds-for-mysql-instance#task-2297391)

PolarDB-X 2.0

PolarDB-X 2.0

Schema migration

Full data migration

Incremental data migration

[Migrate data between PolarDB-X 2.0 instances](/help/en/dts/user-guide/migrate-data-between-polardb-x-2-0-instances#task-2071570)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-an-apsaradb-rds-for-mysql-instance#task-2071547)

PolarDB for MySQL

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-a-polardb-for-mysql-cluster#task-2071568)

AnalyticDB for MySQL

Version 3.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-an-analyticdb-for-mysql-v3-0-cluster#task-2071571)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-an-analyticdb-for-postgresql-instance#task-2308901)

MaxCompute

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to MaxCompute](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-a-maxcompute-project#task-2314949)

-   ApsaraMQ for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to ApsaraMQ for Kafka](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-a-message-queue-for-apache-kafka-instance#task-2103333)

DataHub

All versions

Schema migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to DataHub](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-a-datahub-project#task-2307270)

Elasticsearch

Versions 5.5, 5.6, 6.x, 7.x, and 8.x

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to an Elasticsearch cluster](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-an-elasticsearch-cluster#task-2105716)

Self-managed Oracle (RAC or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, and 19c

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to a self-managed Oracle database](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-a-self-managed-oracle-database)

Tablestore

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to Tablestore](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-tablestore)

PolarDB-X 1.0

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to a PolarDB-X 1.0 instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-a-polardb-x-1-0-instance)

ApsaraDB for SelectDB

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB-X 2.0 instance to an ApsaraDB for SelectDB instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-x-2-0-instance-to-an-apsaradb-for-selectdb-instance)

### **Migration solutions for PolarDB for PostgreSQL sources**

**Source database**

**Destination database**

**Migration types**

**Configuration document**

PolarDB for PostgreSQL

Versions 11, 14, 15, 16, and 17

PolarDB for PostgreSQL

Versions 11, 14, 15, 16, and 17

Schema migration

Full data migration

Incremental data migration

[Migrate data between PolarDB for PostgreSQL clusters](/help/en/dts/user-guide/migrate-data-between-polardb-for-postgresql-clusters)

-   Self-managed PostgreSQL
    
    Versions 9.5.x, 9.6.x, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, and 17.x
    
-   RDS for PostgreSQL
    
    Versions 9.4, 10, 11, 12, 13, 14, 15, 16, and 17
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for PostgreSQL cluster to an RDS for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-postgresql-cluster-to-an-apsaradb-rds-for-postgresql-instance#task-2217578)

Self-managed Oracle (RAC or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, and 19c

Full data migration

Incremental data migration

[Migrate data from a PolarDB for PostgreSQL cluster to a self-managed Oracle database](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-postgresql-cluster-to-a-self-managed-oracle-database-new)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for PostgreSQL cluster to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-postgresql-cluster-to-an-analyticdb-for-postgresql-instance)

ApsaraDB for SelectDB

Schema migration

Full data migration

Incremental data migration

[Migrate data from a PolarDB for PostgreSQL cluster to an ApsaraDB for SelectDB instance](/help/en/dts/user-guide/migrate-data-from-a-polardb-for-postgresql-cluster-to-an-apsaradb-for-selectdb-instance)

### **Migration solutions for MaxCompute sources**

**Source database**

**Destination database**

**Migration types**

**Configuration document**

MaxCompute

All versions

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

[Migrate data from MaxCompute to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-maxcompute-project-to-an-apsaradb-rds-for-mysql-instance-new)

### **Migration solutions for OceanBase (MySQL) sources**

**Source database**

**Destination database**

**Migration types**

**Configuration document**

-   ApsaraDB for OceanBase
    
    Cluster instances and tenant instances (MySQL)
    
-   OceanBase (MySQL)
    
    Community Edition
    

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from an OceanBase database (MySQL mode) to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-an-oceanbase-mysql-database-to-an-rds-mysql-instance)

PolarDB for MySQL

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from an OceanBase database (MySQL mode) to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-an-oceanbase-mysql-database-to-a-polardb-for-mysql-cluster)

Lindorm

Full data migration

Incremental data migration

[Migrate data from an OceanBase database (MySQL mode) to Lindorm](/help/en/dts/user-guide/migrate-data-from-an-oceanbase-mysql-database-to-a-lindorm-instance)

### **Migration solutions for Oracle sources**

**Important**

-   Databases in PolarDB-X 1.0 must use RDS for MySQL. DTS does not support databases in PolarDB-X 1.0 that use PolarDB for MySQL.
    
-   Schema migration is not supported when the destination is PolarDB-X 1.0. It is supported when the destination is PolarDB-X 2.0.
    
-   Use PolarDB-X 2.0 instance version 5.4.11 or later. For information about how to upgrade the version, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    

**Source database**

**Destination database**

**Migration types**

**Configuration document**

Self-managed Oracle (RAC or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, and 19c

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

Schema migration

Full data migration

Incremental data migration

-   [Migrate data from a self-managed Oracle database to a PolarDB for PostgreSQL (Compatible with Oracle) cluster](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-a-polardb-for-oracle-cluster-2)
    
-   [Migrate data from Amazon RDS for Oracle to a PolarDB for PostgreSQL (Compatible with Oracle) cluster](/help/en/dts/user-guide/migrate-from-amazon-rds-oracle-to-polardb-postgresql-compatible-with)
    

Self-managed Oracle (RAC or non-RAC architecture)

Versions 9i, 10g, 11g, 12c, 18c, and 19c

Schema migration

Full data migration

Incremental data migration

[Migrate data between self-managed Oracle databases](/help/en/dts/user-guide/migrate-data-between-self-managed-oracle-databases-1#task-2069614)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed Oracle database to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-an-apsaradb-rds-for-mysql-instance-1#task-2067967)

PolarDB for MySQL

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed Oracle database to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-a-polardb-for-mysql-cluster-1#task-2068788)

PolarDB for PostgreSQL

Versions 11, 14, 15, 16, and 17

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed Oracle database to a PolarDB for PostgreSQL cluster](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-a-polardb-postgresql-cluster)

PolarDB-X 1.0 and 2.0

Full data migration

Incremental data migration

[Migrate data from a self-managed Oracle database to a PolarDB-X 2.0 instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-a-polardb-x-2-0-instance)

AnalyticDB for MySQL

Version 3.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed Oracle database to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-an-analyticdb-for-mysql-v3-0-cluster)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed Oracle database to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-an-analyticdb-for-postgresql-instance-1#task-2068810)

-   Self-managed PostgreSQL
    
    Versions 9.4.8 and later, 9.5, 9.6, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, and 17.x
    
-   RDS for PostgreSQL
    
    Versions 9.4, 10, 11, 12, 13, 14, 15, 16, and 17
    

Schema migration

Full data migration

Incremental data migration

-   [Migrate data from a self-managed Oracle database to a self-managed PostgreSQL database](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-a-self-managed-postgresql-database#task-2234442)
    
-   [Migrate data from a self-managed Oracle database to an RDS for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-an-apsaradb-rds-for-postgresql-instance-1)
    

-   ApsaraMQ for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed Oracle database to an ApsaraMQ for Kafka instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-a-message-queue-for-apache-kafka-instance-1)

DataHub

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed Oracle database to DataHub](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-a-datahub-project)

### **Migration solutions for self-managed PostgreSQL or RDS for PostgreSQL sources**

**Important**

RDS for PostgreSQL serverless instances are not supported as a source database, but are supported as a destination database.

**Source database**

**Destination database**

**Migration types**

**Configuration document**

-   Self-managed PostgreSQL
    
    Versions 9.4.8 and later, 9.5, 9.6, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, and 17.x
    
-   RDS for PostgreSQL
    
    Versions 9.4, 10, 11, 12, 13, 14, 15, 16, and 17
    

-   Self-managed PostgreSQL
    
    Versions 9.4.8 and later, 9.5, 9.6, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, and 17.x
    
-   RDS for PostgreSQL
    
    Versions 9.4, 10, 11, 12, 13, 14, 15, 16, and 17
    

Schema migration

Full data migration

Incremental data migration

-   [Migrate data between RDS for PostgreSQL instances](/help/en/dts/user-guide/migrate-data-between-apsaradb-rds-for-postgresql-instances#task-2116152)
    
-   [Migrate data from a self-managed PostgreSQL database to an RDS for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-postgresql-database-to-an-apsaradb-rds-for-postgresql-instance#task-2117817)
    

PolarDB for PostgreSQL

Versions 11, 14, 15, 16, and 17

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed PostgreSQL database to a PolarDB for PostgreSQL cluster](/help/en/dts/user-guide/migrate-data-from-postgresql-to-polardb-postgresql)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for PostgreSQL instance to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-postgresql-instance-to-an-apsaradb-rds-for-mysql-instance-1#task-2074653)

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed PostgreSQL database to a PolarDB for PostgreSQL (Compatible with Oracle) cluster](/help/en/dts/user-guide/migrate-data-from-a-self-managed-postgresql-database-to-a-polardb-for-oracle-cluster#task-2074670)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed PostgreSQL database to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-user-created-postgresql-to-analyticdb-postgresql)

ApsaraDB for SelectDB

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for PostgreSQL instance to an ApsaraDB for SelectDB instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-postgresql-instance-to-an-apsaradb-for-selectdb-instance)

### **Migration solutions for self-managed SQL Server or RDS for SQL Server sources**

**Important**

-   The source self-managed SQL Server must be Enterprise, Developer, Enterprise Evaluation, Standard, or Web Edition.
    
-   The destination self-managed SQL Server must be Enterprise, Developer, Enterprise Evaluation, Standard, or Web Edition.
    
-   If the source self-managed SQL Server is version 2005 or the source RDS for SQL Server is version 2008 or 2008 R2, incremental data migration is not supported.
    
-   If Azure SQL Database is the source database, select **Polling and querying CDC instances for incremental synchronization** for **SQL Server Incremental Synchronization Mode**.
    
-   SQL Server Cluster and SQL Server AlwaysOn Availability Groups are supported.
    
-   In hybrid log parsing mode, where the **SQL Server Incremental Synchronization Mode** is set to **Incremental Synchronization Through Log Parsing For Non-heap Tables And Through CDC For Heap Tables**, the supported source databases (such as RDS SQL Server and self-managed SQL Server) are:
    
    -   Enterprise or Enterprise Evaluation Edition: 2012, 2014, 2016, 2019, or 2022.
        
    -   Standard Edition: 2016, 2019, or 2022.
        
-   If the source database is the Web edition of SQL Server, the **SQL Server Incremental Synchronization Mode** is limited to **Incremental Synchronization Based on Logs of Source Database (Heap tables are not supported)**.
    

**Source database**

**Destination database**

**Migration types**

**Configuration document**

-   Self-managed SQL Server
    
    2005, 2008, 2008 R2, 2012, 2014, 2016, 2017, 2019, or 2022
    
-   RDS for SQL Server
    
    2008, 2008 R2, 2012, 2014, 2016, 2017, 2019, or 2022
    

-   Self-managed SQL Server
    
    2005, 2008, 2008 R2, 2012, 2014, 2016, 2017, 2019, or 2022
    
-   RDS for SQL Server
    
    2008, 2008 R2, 2012, 2014, 2016, 2017, 2019, or 2022
    

Schema migration

Full data migration

Incremental data migration

-   [Migrate data between RDS for SQL Server instances](/help/en/dts/user-guide/migrate-data-between-apsaradb-rds-for-sql-server-instances#task-2264831)
    
-   [Migrate data from a self-managed SQL Server database to an RDS for SQL Server instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-sql-server-database-to-an-apsaradb-rds-for-sql-server-instance#task-2075213)
    
-   [Migrate data from a self-managed SQL Server database to the cloud over a physical connection](/help/en/dts/user-guide/migrate-data-from-a-self-managed-sql-server-database-to-an-apsaradb-rds-for-sql-server-instance-1#task-2261867)
    
-   [Migrate data from SQL Server on Azure to an RDS for SQL Server instance](/help/en/dts/user-guide/migrate-data-from-azure-sql-server-databases-to-an-apsaradb-rds-for-sql-server-instance)
    
-   [Migrate data from SQL Server on AWS to an RDS for SQL Server instance](/help/en/dts/user-guide/migrate-data-from-aws-sql-server-databases-to-an-apsaradb-rds-for-sql-server-instance)
    

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for SQL Server instance to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-sql-server-instance-to-an-apsaradb-rds-for-mysql-instance)

PolarDB for MySQL

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for SQL Server instance to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-sql-server-instance-to-a-polardb-for-mysql-cluster)

AnalyticDB for MySQL

Version 3.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS for SQL Server instance to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-sql-server-instance-to-an-analyticdb-for-mysql-v3-0-cluster#task-2075491)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed SQL Server database to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-sql-server-database-to-an-analyticdb-for-postgresql-instance#task-2077592)

RDS for PostgreSQL

Versions 9.4, 10, 11, 12, 13, 14, 15, 16, and 17

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed SQL Server database to an RDS for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-sql-server-database-to-an-apsaradb-rds-for-postgresql-instance)

DataHub

Schema migration

Incremental data migration

[Migrate data from an RDS for SQL Server instance to DataHub](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-sql-server-instance-to-a-datahub-project)

### **Migration solutions for self-managed MongoDB or ApsaraDB for MongoDB sources**

**Source database**

**Destination database**

**Migration types**

**Configuration document**

Single-node architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4 and 4.0
    

Single-node, replica set, or sharded cluster architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, and 7.0
    

Schema migration

Full data migration

[Perform full migration from an ApsaraDB for MongoDB single-node instance to an ApsaraDB for MongoDB instance of any architecture](/help/en/dts/user-guide/migrate-data-from-a-standalone-apsaradb-for-mongodb-instance-to-another-apsaradb-for-mongodb-instance#task-2097684)

Replica set architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, and 7.0
    

Replica set or sharded cluster architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, and 7.0
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from an ApsaraDB for MongoDB replica set instance to an ApsaraDB for MongoDB replica set or sharded cluster instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-for-mongodb-instance-to-another-apsaradb-for-mongodb-instance#task-2097654)

Sharded cluster architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, and 7.0
    

Replica set or sharded cluster architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, and 7.0
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed MongoDB sharded cluster instance to an ApsaraDB for MongoDB replica set or sharded cluster instance](/help/en/dts/user-guide/migrate-a-user-created-database-from-mongodb-sharded-cluster-architecture-to)

Replica set or sharded cluster architecture

-   Self-managed MongoDB
    
    Versions 3.0 to 7.0
    
-   ApsaraDB for MongoDB
    
    Versions 3.4, 4.0, 4.2, 4.4, 5.0, 6.0, and 7.0
    

Lindorm

Full data migration

Incremental data migration

[Migrate data from an ApsaraDB for MongoDB instance to Lindorm](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-for-mongodb-instance-to-a-lindorm-instance#task-2242633)

AnalyticDB for PostgreSQL

4.3, 6.0, and 7.0

Full data migration

Incremental data migration

[Migrate data from an ApsaraDB for MongoDB instance to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-for-mongodb-replica-set-instance-to-an-analyticdb-for-postgresql-instance)

AnalyticDB for MySQL 3.0

Full data migration

Incremental data migration

[Migrate data from an ApsaraDB for MongoDB instance to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-for-mongodb-replica-set-instance-to-an-analyticdb-for-mysql-v3-0-cluster)

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Full data migration

Incremental data migration

[Migrate data from an ApsaraDB for MongoDB instance to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-for-mongodb-instance-to-an-apsaradb-rds-for-mysql-instance)

PolarDB for MySQL

All versions

Full data migration

Incremental data migration

[Migrate data from an ApsaraDB for MongoDB instance to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-for-mongodb-instance-to-a-polardb-for-mysql-cluster)

-   ApsaraMQ for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Full data migration

Incremental data migration

[Synchronize data from an ApsaraDB for MongoDB instance to an ApsaraMQ for Kafka instance](/help/en/dts/user-guide/synchronize-data-from-an-mongodb-instance-to-a-kafka-instance)

### **Migration solutions for self-managed Redis or Tair (compatible with Redis) sources**

**Important**

-   Redis is a NoSQL database. Schema migration is not required.
    
-   If the source database is a self-managed Redis or a Tair (Redis OSS-compatible) instance, both full and incremental data migration are supported and collectively displayed as **Incremental Data Migration**.
    
-   The highest supported RDB version is 11, which corresponds to Redis 7.2.
    

**Source database**

**Destination database**

**Migration types**

**Configuration document**

-   Self-managed Redis (standalone or cluster architecture)
    
    Versions 2.8, 3.0, 3.2, 4.0, 5.0, 6.0, 7.0, and 7.2
    
-   Tair instance (cluster, standard, or read/write splitting architecture)
    
    Versions 4.0, 5.0, 6.0, and 7.0
    

-   Self-managed Redis (standalone or cluster architecture)
    
    Versions 2.8, 3.0, 3.2, 4.0, 5.0, 6.0, 7.0, and 7.2
    
-   Tair instance (cluster, standard, or read/write splitting architecture)
    
    Versions 4.0, 5.0, 6.0, and 7.0
    

Full data migration

Incremental data migration

-   [Migrate data between Tair (compatible with Redis) instances](/help/en/dts/user-guide/migrate-data-between-apsaradb-for-redis-instances#task-2119264)
    
-   [Cross-account migration](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-for-redis-instance-to-another-apsaradb-for-redis-instance-across-alibaba-cloud-accounts#task-2117612)
    
-   [Migrate data from a self-managed Redis database to a Tair (compatible with Redis) instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-redis-database-to-a-tair-instance#task-2240155)
    

### **Migration solutions for TiDB sources**

**Source database**

**Destination database**

**Migration types**

**Configuration document**

TiDB

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed TiDB database to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-tidb-database-to-an-apsaradb-rds-for-mysql-instance)

PolarDB for MySQL

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed TiDB database to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-a-self-managed-tidb-database-to-a-polardb-for-mysql-cluster)

PolarDB-X 2.0

Schema migration

Full data migration

Incremental data migration

Documentation is being prepared.

AnalyticDB for MySQL

Version 3.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a self-managed TiDB database to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-a-self-managed-tidb-database-to-an-analyticdb-for-mysql-v3-0-cluster)

### **Migration solutions for Db2 for LUW sources**

**Important**

-   Db2 for LUW appears as **DB2 LUW** in the console.
    
-   Use PolarDB-X 2.0 instance version 5.4.11 or later. For information about how to upgrade the version, see [View and upgrade the instance version](/help/en/polardb/polardb-for-xscale/view-and-update-the-version-of-an-instance#concept-2037119).
    

**Source database**

**Destination database**

**Migration types**

**Configuration document**

Db2 for LUW

Versions 9.5, 9.7, 10.1, 10.5, 11.1, and 11.5

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a Db2 for LUW database to an RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-db2-for-luw-database-to-an-apsaradb-rds-for-mysql-instance)

PolarDB-X 2.0

Full data migration

Incremental data migration

[Migrate data from a Db2 for LUW database to a PolarDB-X 2.0 instance](/help/en/dts/user-guide/migrate-data-from-a-db2-for-luw-database-to-a-polardb-x-2-0-instance#task-2109791)

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data from a Db2 for LUW database to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-db2-for-luw-database-to-an-analyticdb-for-postgresql-instance)

-   ApsaraMQ for Kafka
    
    Versions 0.10.1.0 to 2.x
    
-   Self-managed Kafka
    
    Versions 0.10.1.0 to 2.7.0
    

Schema migration

Full data migration

Incremental data migration

[Migrate data from a Db2 for LUW database to an ApsaraMQ for Kafka instance](/help/en/dts/user-guide/migrate-data-from-a-db2-for-luw-database-to-a-message-queue-for-apache-kafka-instance)

PolarDB for MySQL

All versions

Schema migration

Full data migration

Incremental data migration

[Migrate data from a Db2 for LUW database to a PolarDB for MySQL cluster](/help/en/dts/user-guide/migrate-data-from-a-db2-for-luw-database-to-a-polardb-for-mysql-cluster)

### **Migration solutions for Db2 for i (AS/400) sources**

**Important**

Db2 for i appears as **DB2 iSeries(AS/400)** in the console.

**Source database**

**Destination database**

**Migration types**

**Configuration document**

Db2 for i

Versions 7.3 and 7.4

-   Self-managed MySQL
    
    Versions 5.1, 5.5, 5.6, 5.7, 8.0, and 8.4
    
-   RDS for MySQL
    
    All versions
    

Schema migration

Full data migration

Incremental data migration

Documentation is being prepared.

PolarDB for MySQL

All versions

Schema migration

Full data migration

Incremental data migration

Documentation is being prepared.

### **Migration solutions for Teradata sources**

**Important**

You can configure these tasks only in the new console. The migration instances must be in the China (Shanghai), China (Qingdao), or China (Zhangjiakou) region.

**Source database**

**Destination database**

**Migration types**

**Configuration document**

Teradata

Version 17 and earlier

AnalyticDB for PostgreSQL

Versions 4.3, 6.0, and 7.0

Schema migration

Full data migration

[Migrate data from a Teradata database to an AnalyticDB for PostgreSQL instance](/help/en/dts/user-guide/migrate-data-from-a-teradata-database-to-an-analyticdb-for-postgresql-instance#task-2081139)

### **Migration solutions for self-managed HBase sources**

**Important**

You can configure these tasks only in the new console.

**Source database**

**Destination database**

**Migration types**

**Configuration document**

Self-managed HBase

1.x versions

AnalyticDB for MySQL

Version 3.0

Schema migration

Full data migration

[Migrate data from a self-managed HBase database to an AnalyticDB for MySQL 3.0 cluster](/help/en/dts/user-guide/migrate-data-from-a-self-managed-hbase-database-to-an-analyticdb-for-mysql-v3-0-cluster#task-2084656)

### **Migration solutions for AnalyticDB for MySQL 3.0 sources**

**Note**

To migrate incremental data, the source AnalyticDB for MySQL 3.0 cluster must have a kernel version of 3.2.1.0 or later.

**Source database**

**Destination database**

**Migration types**

**Configuration document**

AnalyticDB for MySQL

Version 3.0

AnalyticDB for MySQL

Version 3.0

Schema migration

Full data migration

Incremental data migration

[Migrate data between AnalyticDB for MySQL 3.0 clusters](/help/en/dts/user-guide/migrate-data-between-analyticdb-for-mysql-v3-0-clusters)

### **Migration solutions for AnalyticDB for MySQL 3.0 sources**

**Note**

To migrate incremental data, the source AnalyticDB for PostgreSQL instance must have a kernel version of 7.2.1.4 or later.

**Source database**

**Destination database**

**Migration types**

**Configuration document**

AnalyticDB for PostgreSQL

Version 7.0

AnalyticDB for PostgreSQL

Version 7.0

Schema migration

Full data migration

Incremental data migration

[Migrate data between AnalyticDB for PostgreSQL instances](/help/en/dts/user-guide/migrate-data-between-analyticdb-for-postgresql-instances)

### **Migration solutions for third-party cloud sources**

DTS supports migrating data from third-party clouds, such as Amazon RDS for MySQL and Amazon RDS for Oracle, to Alibaba Cloud products, such as RDS for MySQL.

**Source database**

**Destination database**

**Migration types**

**Configuration document**

Databases on the Azure platform

The UI on the console is the definitive version.

[Connect an Azure VNet to an Alibaba Cloud VPC](/help/en/dts/use-cases/dts-implements-data-migration-from-azure-to-alibaba-cloud-rds-based-on-vpn-gateway)

Amazon RDS for MySQL

RDS for MySQL

Schema migration

Full data migration

Incremental data migration

[Migrate data from Amazon RDS for MySQL to ApsaraDB RDS for MySQL](/help/en/dts/user-guide/migrate-data-from-an-amazon-rds-for-mysql-instance-to-an-apsaradb-rds-for-mysql-instance#concept-52555-zh)

Amazon RDS for Oracle

RDS for MySQL

Schema migration

Full data migration

Incremental data migration

[Migrate data from Amazon RDS for Oracle to ApsaraDB RDS for MySQL](/help/en/dts/user-guide/migrate-data-from-an-amazon-rds-for-oracle-instance-to-an-apsaradb-rds-for-mysql-instance#concept-354108)

Amazon RDS for PostgreSQL

RDS for PostgreSQL

Schema migration

Full data migration

Incremental data migration

[Incrementally migrate data from Amazon RDS for PostgreSQL to Alibaba Cloud](/help/en/dts/user-guide/migrate-incremental-data-from-an-amazon-rds-for-postgresql-instance-to-an-apsaradb-rds-for-postgresql-instance#task-2331161)

Schema migration

Full data migration

[Perform a full data migration from Amazon RDS for PostgreSQL to Alibaba Cloud](/help/en/dts/user-guide/migrate-full-data-from-an-amazon-rds-for-postgresql-instance-to-an-apsaradb-rds-for-postgresql-instance#concept-u5b-hhq-fhb)

Amazon RDS for SQL Server

RDS for SQL Server

Schema migration

Full data migration

[Perform a full data migration from Amazon RDS for SQL Server to Alibaba Cloud](/help/en/dts/user-guide/migrate-full-data-from-an-amazon-rds-for-sql-server-instance-to-an-apsaradb-rds-for-sql-server-instance#concept-pc4-mcq-fhb)

Amazon Aurora MySQL

RDS for MySQL

Schema migration

Full data migration

Incremental data migration

[Migrate data from Amazon Aurora MySQL to Alibaba Cloud](/help/en/dts/user-guide/migrate-data-from-an-amazon-aurora-mysql-cluster-to-an-apsaradb-rds-for-mysql-instance#concept-trf-zgx-fhb)

PolarDB for MySQL

Schema migration

Full data migration

Incremental data migration

[Migrate data from Amazon Aurora MySQL to PolarDB for MySQL](/help/en/dts/user-guide/migrate-data-from-an-amazon-aurora-mysql-cluster-to-a-polardb-for-mysql-cluster#concept-jl1-mw3-kgb)

Amazon Aurora PostgreSQL

RDS for PostgreSQL

Schema migration

Full data migration

[Migrate data from Amazon Aurora PostgreSQL to Alibaba Cloud](/help/en/dts/user-guide/migrate-full-data-from-an-amazon-aurora-postgresql-instance-to-an-apsaradb-rds-for-postgresql-instance#concept-xhn-mpw-fhb)

MongoDB Atlas

ApsaraDB for MongoDB

Full data migration

Incremental data migration

[Use DTS to migrate data from a MongoDB Atlas database to Alibaba Cloud](/help/en/dts/user-guide/migrate-data-from-a-mongodb-atlas-database-to-an-apsaradb-for-mongodb-instance#task-2326604)

### **Migration solutions between instances under different Alibaba Cloud accounts**

**Source database**

**Destination database**

**Migration types**

**Configuration document**

Source RDS instance

Destination RDS instance

Schema migration

Full data migration

Incremental data migration

[Migrate data from an RDS instance across Alibaba Cloud accounts](/help/en/dts/user-guide/migrate-data-between-apsaradb-rds-instances-of-different-alibaba-cloud-accounts#task-2208021)
