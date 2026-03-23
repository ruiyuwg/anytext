AnalyticDB for PostgreSQL (previously known as HybridDB for PostgreSQL) is a fast, easy-to-use, and cost-effective warehousing service that can process petabytes of data. This topic describes how to synchronize data from a PolarDB for MySQL cluster to an AnalyticDB for PostgreSQL instance by using Data Transmission Service (DTS). The data synchronization feature is applicable to scenarios such as ad hoc query and analysis, extract, transform, and load (ETL) operations, and data visualization.

## Prerequisites

-   The binary logging feature is enabled for the PolarDB for MySQL cluster. For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging).
    
-   The tables to be synchronized from the PolarDB for MySQL cluster contain primary keys.
    
-   An AnalyticDB for PostgreSQL instance is created. For more information, see [Create an AnalyticDB for PostgreSQL instance](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-an-instance-instance-management).
    

## Precautions

-   DTS uses read and write resources of the source and destination databases during initial full data synchronization. This may increase the loads of the database servers. If the database performance is unfavorable, the specification is low, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source database, the tables have no primary keys, or a deadlock occurs in the destination database. Before you synchronize data, evaluate the impact of data synchronization on the performance of the source and destination databases. We recommend that you synchronize data during off-peak hours. For example, you can synchronize data when the CPU utilization of the source and destination databases is less than 30%.
    
-   During initial full data synchronization, concurrent INSERT operations cause fragmentation in the tables of the destination instance. After initial full data synchronization is complete, the tablespace of the destination instance is larger than that of the source cluster.
    

## Limits

-   You can select only tables as the objects to be synchronized.
-   DTS does not synchronize the following types of data: BIT, VARBIT, GEOMETRY, ARRAY, UUID, TSQUERY, TSVECTOR, TXID\_SNAPSHOT, and POINT.
-   Prefix indexes cannot be synchronized. If the source database contains prefix indexes, data may fail to be synchronized.
    
-   We recommend that you do not use gh-ost or pt-online-schema-change to perform DDL operations on objects during data synchronization. Otherwise, data synchronization may fail.

## SQL operations that can be synchronized

-   DML operations: INSERT, UPDATE, and DELETE
-   DDL operation: ADD COLUMN
    
    **Note** The CREATE TABLE operation is not supported. To synchronize data from a new table, you must add the table to the selected objects. For more information, see [Add an object to a data synchronization task](/help/en/dts/user-guide/add-an-object-to-a-data-synchronization-task#concept-628273).
    

## Supported synchronization topologies

-   One-way one-to-one synchronization
-   One-way one-to-many synchronization
-   One-way many-to-one synchronization

## Term mappings

**PolarDB for MySQL**

AnalyticDB for PostgreSQL

Database

Schema

Table

Table

## Procedure

1.  Purchase a data synchronization instance. For more information, see [Purchase a DTS instance](/help/en/dts/getting-started/purchase-a-dts-instance#concept-26604-zh).
    
    **Note**
    
    On the buy page, set Source Instance to **PolarDB**, set Target Instance to **AnalyticDB for PostgreSQL**, and set Synchronization Topology to **One-Way Synchronization**.
    
2.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
3.  In the left-side navigation pane, click **Data Synchronization**.
4.  At the top of the **Synchronization Tasks** page, select the region where the destination instance resides.
5.  Find the data synchronization instance and click **Configure Synchronization Channel** in the Actions column.
6.  Configure the source and destination instances.
    
    ![Configure the source and destination instances](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4970034061/p103968.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Synchronization Task Name
    
    DTS automatically generates a task name. We recommend that you specify an informative name for easy identification. You do not need to use a unique task name.
    
    Source Instance Details
    
    Instance Type
    
    This parameter is set to **PolarDB Instance** and cannot be changed.
    
    Instance Region
    
    The source region that you selected on the buy page. You cannot change the value of this parameter.
    
    PolarDB Instance ID
    
    Select the ID of the PolarDB for MySQL cluster.
    
    Database Account
    
    Enter the database account of the PolarDB for MySQL cluster.
    
    **Note**
    
    The database account must have the read permissions on the objects to be synchronized.
    
    Database Password
    
    Enter the password of the database account.
    
    Destination Instance Details
    
    Instance Type
    
    This parameter is set to **AnalyticDB for PostgreSQL** and cannot be changed.
    
    Instance Region
    
    The destination region that you selected on the buy page. You cannot change the value of this parameter.
    
    Instance ID
    
    Select the ID of the AnalyticDB for PostgreSQL instance.
    
    Database Name
    
    Enter the name of the destination database in the AnalyticDB for PostgreSQL instance.
    
    Database Account
    
    Enter the **initial account** of the AnalyticDB for PostgreSQL instance. For more information, see [Create a database account](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-and-manage-users#concept-bhh-2mr-52b).
    
    **Note**
    
    You can also enter an account that has the RDS\_SUPERUSER permission. For more information, see [Manage users and permissions](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/user-and-permission-management#concept-gbr-cty-52b).
    
    Database Password
    
    Enter the password of the database account.
    
7.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    **Note**
    
    DTS adds the CIDR blocks of DTS servers to the whitelists of the PolarDB for MySQL cluster and the AnalyticDB for PostgreSQL instance. This ensures that DTS servers can connect to the source cluster and the destination instance.
    
8.  Select the synchronization policy and the objects to be synchronized.
    
    ![Synchronize data from MySQL to AnalyticDB for PostgreSQL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7289831261/p96654.png)
    
    **Setting**
    
    **Parameter**
    
    **Description**
    
    Select the synchronization policy
    
    Initial Synchronization
    
    You must select both **Initial Schema Synchronization** and **Initial Full Data Synchronization** in most cases. After the precheck, DTS synchronizes the schemas and data of the required objects from the source instance to the destination instance. The schemas and data are the basis for subsequent incremental synchronization.
    
    Processing Mode of Conflicting Tables
    
    -   **Clear Target Table**
        
        Skips the **Schema Name Conflict** item during the precheck. Clears the data in the destination table before initial full data synchronization. If you want to synchronize your business data after testing the data synchronization task, you can select this mode.
        
    -   **Ignore**
        
        Skips the **Schema Name Conflict** item during the precheck. Adds data to the existing data during initial full data synchronization. If you want to synchronize data from multiple tables to one table, you can select this mode.
        
    
    Synchronization Type
    
    Select the types of operations that you want to synchronize based on your business requirements.
    
    -   **Insert**
    -   **Update**
    -   **Delete**
    -   **AlterTable**
    
    Select the objects to be synchronized
    
    N/A
    
    Select one or more tables from the **Available** section and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon to move the tables to the **Selected** section.
    
    **Note**
    
    -   You can select only tables as the objects to be synchronized.
    -   You can use the object name mapping feature to change the names of the columns that are synchronized to the destination database. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
    
    Rename Databases and Tables
    
    N/A
    
    You can use the object name mapping feature to rename the objects that are synchronized to the destination instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Replicate Temporary Tables When DMS Performs DDL Operations
    
    N/A
    
    If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) to perform online DDL operations on the source database, you can specify whether to synchronize temporary tables generated by online DDL operations.
    
    -   **Yes**: DTS synchronizes the data of temporary tables generated by online DDL operations.
        
        **Note**
        
        If online DDL operations generate a large amount of data, the data synchronization task may be delayed.
        
    -   **No**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL data of the source database is synchronized.
        
        **Note**
        
        If you select No, the tables in the destination database may be locked.
        
    
    Retry Time for Failed Connections
    
    N/A
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 720 minutes (12 hours). You can specify the retry time based on your needs. If DTS reconnects to the source and destination databases within the specified time, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
    
    **Note**
    
    When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time based on your business needs. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
    
9.  Specify the primary key column and distribution column of the table that you want to synchronize to the AnalyticDB for PostgreSQL instance.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4703019951/p65402.png)
    
    **Note** The page in this step appears only if you select **Initial Schema Synchronization**. For more information about primary key columns and distribution columns, see [Define constraints](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/manage-tables) and [Define table distribution](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/define-table-distribution).
    
10.  In the lower-right corner of the page, click **Precheck**.
     
     **Note**
     
     -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
         
     -   If the task fails to pass the precheck, you can click the ![提示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to each failed item to view details.
         
         -   After you troubleshoot the issues based on the details, initiate a new precheck.
             
         -   If you do not need to troubleshoot the issues, **ignore the failed items** and **initiate a new precheck**.
             
     
11.  Close the **Precheck** dialog box after the following message is displayed: **The precheck is passed.** Then, the data synchronization task starts.
12.  Wait until the initial synchronization is complete and the data synchronization task is in the **Synchronizing** state.
     
     You can view the status of the data synchronization task on the **Synchronization Tasks** page. ![View the status of a data synchronization task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5464738161/p41059.png)
