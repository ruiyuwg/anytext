The change tracking feature of Data Transmission Service (DTS) captures real-time incremental data from databases. You can consume this data and write it to a destination as needed. This feature supports various scenarios, such as cache updates, asynchronous service decoupling, real-time data synchronization between disparate data sources, and complex extract, transform, and load (ETL) operations.

## Source database limits

**Limit**

**Description**

Network requirements

-   The network bandwidth must be 100 Mb/s or higher.
    
-   Ensure that the round-trip time (RTT) between the source database and the DTS service is less than 2 ms. Otherwise, the performance of the change tracking instance is affected.
    
    For example, a large physical distance between the source database and the DTS service can cause the RTT to be much higher than 2 ms, which leads to latency. This can occur if a database in the Singapore region connects to DTS through a VPN in the China (Hong Kong) region.
    

Service requirements

-   The total size of logs must be less than 1 TB. The average size of logs per hour must be less than 50 GB. The peak traffic must be less than 15 MB/s.
    
    **Important**
    
    By default, DTS pulls the logs of the entire database instance. If the objects that are not synchronized or migrated contain a large number of data changes, the DTS task is also delayed.
    
-   When you update a large amount of data or modify large fields such as those of the CLOB, BLOB, and LONG types, the DTS task may be delayed. We recommend that you perform such operations in batches or do not perform such operations.
    
-   Do not frequently delete or modify tables without primary keys. Otherwise, the DTS task may be delayed.
    
-   Do not frequently perform DDL operations. We recommend that you execute at most 10 DDL statements per second. Otherwise, the DTS task may be delayed.
    
-   Do not run large transactions, such as a transaction whose total size of logs exceeds 100 GB. Otherwise, the DTS task may fail.
    

## Change tracking solutions

**Note**

Whether you can create a change tracking task across Alibaba Cloud accounts depends on the database type and connection type. To create a cross-account task, set the **Replicate Data Across Alibaba Cloud Accounts** parameter to **Yes** for the source database instance. For more information, see [Configure a task across Alibaba Cloud accounts](/help/en/dts/user-guide/synchronize-or-migrate-data-across-alibaba-cloud-accounts#4200617964kc9).

**Source database**

**Supported data change types**

**Configuration document**

-   Self-managed MySQL database
    
    Versions: 5.1, 5.5, 5.6, 5.7, and 8.0
    
-   ApsaraDB RDS for MySQL
    
    All versions
    

-   Data updates
    
-   Schema updates
    

[Create a change tracking task for an ApsaraDB RDS for MySQL instance](/help/en/dts/user-guide/track-data-changes-from-an-apsaradb-rds-for-mysql-instance#task-2084315)

PolarDB for MySQL

All versions

-   Data updates
    
-   Schema updates
    

[Create a change tracking task for a PolarDB for MySQL cluster](/help/en/dts/user-guide/track-data-changes-from-a-polardb-for-mysql-cluster#task-2084316)

PolarDB-X 1.0

**Important**

Databases in a PolarDB-X instance must be created from ApsaraDB RDS for MySQL instances. DTS does not support PolarDB-X databases that are created from PolarDB for MySQL clusters.

-   Data updates
    
-   Schema updates
    

[Create a change tracking task for a PolarDB-X 1.0 instance](/help/en/dts/user-guide/track-data-changes-from-a-polardb-x-1-0-instance#task-2105856)

PolarDB-X 2.0

**Important**

Databases in a PolarDB-X instance must be created from ApsaraDB RDS for MySQL instances. DTS does not support databases that are created from PolarDB for MySQL clusters.

-   Data updates
    
-   Schema updates
    

[Create a change tracking task for a PolarDB-X 2.0 instance](/help/en/dts/user-guide/track-data-changes-from-a-polardb-x-instance#task-2144605)

PolarDB for PostgreSQL (Compatible with Oracle)

All versions

Data updates

[Create a change tracking task for a PolarDB for PostgreSQL (Compatible with Oracle) cluster](/help/en/dts/user-guide/track-data-changes-from-a-polardb-for-oracle-cluster#task-2089848)

Self-managed Oracle database (non-RAC)

Versions: 9i, 10g, and 11g

-   Data updates
    
-   Schema updates
    

[Create a change tracking task for an Oracle database](/help/en/dts/user-guide/track-data-changes-from-a-self-managed-oracle-database-1#task-2084318)

-   ApsaraDB RDS for PostgreSQL
    
    Versions: 9.4, 10, 11, 12, 13, 14, 15, 16, and 17
    
-   Self-managed PostgreSQL database
    
    Versions: 9.4.8 and later, 9.5, 9.6, 10.x, 11.x, 12.x, 13.x, 14.x, 15.x, 16.x, and 17.x
    

Data updates

[Create a change tracking task for an ApsaraDB RDS for PostgreSQL instance](/help/en/dts/user-guide/track-data-changes-from-an-apsaradb-rds-for-postgresql-instance#task-2089895)

Data Management (DMS) logical database

**Important**

A logical database must be created from the database shards of multiple PolarDB for MySQL clusters.

Data updates

[Create a change tracking task for a DMS logical database](/help/en/dts/user-guide/track-data-changes-from-a-dms-logical-database#task-2233927)

PolarDB for PostgreSQL

Versions: 11, 14, 15, and 16

-   Data updates
    
-   Schema updates
    

[Create a change tracking task for a PolarDB for PostgreSQL cluster](/help/en/dts/user-guide/track-data-changes-from-a-polardb-for-postgresql-cluster#task-2248878)
