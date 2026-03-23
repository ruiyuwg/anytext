The Exactly-Once write feature in Data Transmission Service (DTS) accurately synchronizes full and incremental data from tables that do not have primary keys or UNIQUE constraints to destination tables.

## Scope

-   This feature is supported only for full and incremental data synchronization tasks in specific two-way synchronization instances. For more information, see [Supported data synchronization scenarios](#6a5f3526d7yho).
    
-   [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/) PolarDB for MySQL clusters do not support this feature.
    
-   The Exactly-Once write feature is not supported for tasks that use the serverless billing method.
    
-   If the source database contains tables without primary keys or UNIQUE constraints, the tables must meet the following requirements:
    
    -   If the source database has a **Database Type** of **MySQL** and the **Access Method** is not **Alibaba Cloud Instance**, the source database must be in global transaction identifier (GTID) mode. The tables to be synchronized must use a transactional storage engine, such as **InnoDB**.
        
    -   A single table to be synchronized cannot exceed 200 GB.
        
-   The Exactly-Once write feature does not support DDL operations. Such operations may cause the task to fail. Data cleanup DDL operations, such as `TRUNCATE`, may cause data inconsistency.
    
-   If the Exactly-Once write feature is enabled for a task, the incremental write performance is limited to 3,000 RPS.
    

## Supported integrations

**Important**

This feature is supported only for two-way synchronization instances.

**Source database**

**Destination database**

**MySQL**

**MySQL**, **PolarDB for MySQL**

**PolarDB for MySQL**

**MySQL**, **PolarDB for MySQL**

## Usage notes

When you use the Exactly-Once write feature for a two-way synchronization instance, note the following:

-   If the **Database Type** of the source database is **MySQL** or **PolarDB for MySQL**, tables in the source database without primary keys or UNIQUE constraints are temporarily locked during synchronization.
    
-   Data-clearing DDL operations in the source database may cause data loss, especially if the incremental write module restarts after the operation. You are responsible for ensuring data consistency.
    
-   Full and incremental synchronization tasks create a database or schema named `dts` in the destination instance. These tasks also create multiple transactional tables in the database or schema. Do not perform DML operations on these transactional tables while the DTS task is running.
    
-   For a remote sync task, the **Enable Exactly-Once Write** setting defaults to the configuration of the forward sync task and cannot be changed.
    
-   During full synchronization, DTS performs a full table scan on tables that do not have primary keys or UNIQUE constraints and generates table snapshots.
    

## Procedure

1.  Go to the **Configure Objects** step in the forward sync task.
    
    **Note**
    
    -   If you are using the previous version of the configuration page, proceed to the **Configure Objects and Advanced Settings** step.
        
    -   For more information, see the relevant configuration document in [Overview of synchronization solutions](/help/en/dts/user-guide/data-synchronization-scenarios).
        
    
2.  Set **Enable Exactly-Once Write** to **Yes**.
    
3.  Complete the remaining configuration as needed.
