PolarDB is a next-generation distributed relational database service that is developed by Alibaba Cloud. PolarDB is compatible with the MySQL database engine and provides features such as high performance, high availability, ease of use, and reliability. This topic describes how to synchronize data from a self-managed MySQL database hosted on Elastic Compute Service (ECS) to a PolarDB for MySQL cluster by using Data Transmission Service (DTS).

## Prerequisites

A PolarDB for MySQL cluster is created. For more information, see [Purchase a pay-as-you-go cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster).

## Usage notes

-   DTS uses read and write resources of the source and destination RDS instances during initial full data synchronization. This may increase the loads of the RDS instances. If the instance performance is unfavorable, the specification is low, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source RDS instance, the tables have no primary keys, or a deadlock occurs in the destination RDS instance. Before data synchronization, evaluate the impact of data synchronization on the performance of the source and destination RDS instances. We recommend that you synchronize data during off-peak hours. For example, you can synchronize data when the CPU utilization of the source and destination RDS instances is less than 30%.
    
-   We recommend that you do not use gh-ost or pt-online-schema-change to perform DDL operations on objects during data synchronization. Otherwise, data synchronization may fail.
    
-   During initial full data synchronization, concurrent INSERT operations cause fragmentation in the tables of the destination cluster. After initial full data synchronization is complete, the tablespace of the destination cluster is larger than that of the source database.
    
-   The source database must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination cluster may contain duplicate data records.
    

## Billing

**Synchronization type**

**Task configuration fee**

Schema synchronization and full data synchronization

Free of charge.

Incremental data synchronization

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## SQL operations that can be synchronized

**Operation type**

**SQL statement**

DML

INSERT, UPDATE, DELETE, and REPLACE

DDL

-   ALTER TABLE and ALTER VIEW
    
-   CREATE FUNCTION, CREATE INDEX, CREATE PROCEDURE, CREATE TABLE, and CREATE VIEW
    
-   DROP INDEX and DROP TABLE
    
-   RENAME TABLE
    
    **Important**
    
    RENAME TABLE operations may cause data inconsistency between the source and destination databases. For example, if you select a table as the object to be synchronized and rename the table during data synchronization, the data of this table is not synchronized to the destination database. To prevent this situation, you can select the database to which this table belongs as the object to be synchronized when you configure the data synchronization task. Make sure that the databases to which the table belongs before and after the RENAME TABLE operation are added to the objects to be synchronized.
    
-   TRUNCATE TABLE
    

## Limits

-   Incompatibility with triggers
    
    If you select a database as the object to synchronize and the database contains a trigger that updates a table, data inconsistency may occur. For more information about how to solve this issue, see [Configure a data synchronization task for a source database that contains a trigger](/help/en/dts/use-cases/configure-a-data-synchronization-task-for-a-source-database-that-contains-a-trigger#multiTask2397).
    
-   Limits on RENAME TABLE operations
    
    RENAME TABLE operations may cause data inconsistency between the source database and destination cluster. For example, if you select a table as the object and rename the table during data synchronization, the data of this table is not synchronized to the destination cluster. To prevent this situation, you can select the database to which this table belongs as the object when you configure the data synchronization task.
    

## Preparations

[Create an account for a self-managed MySQL database and configure binary logging](/help/en/dts/user-guide/create-an-account-for-a-self-managed-mysql-database-and-configure-binary-logging#concept-1198525)

**Note**

The database account must have the SELECT permission on the objects to be synchronized, the REPLICATION CLIENT permission, the REPLICATION SLAVE permission, and the SHOW VIEW permission.

## Supported synchronization topologies

-   One-way one-to-one synchronization
    
-   One-way one-to-many synchronization
    
-   One-way cascade synchronization
    
-   One-way many-to-one synchronization
    

For more information, see [Synchronization topologies](/help/en/dts/user-guide/synchronization-topologies#concept-978516).

## Procedure

1.  Purchase a data synchronization instance. For more information, see [Purchase a DTS instance](/help/en/dts/getting-started/purchase-a-dts-instance#concept-26604-zh).
    
    **Note**
    
    On the buy page, set Source Instance to **MySQL**, set Destination Instance to **PolarDB**, and set Synchronization Topology to **One-way Synchronization**.
    
2.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    If you are redirected to the Data Management (DMS) console, you can click the ![old](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2274020761/p529428.png) icon in the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3856567171/p805074.png) to go to the previous version of the DTS console.
    
3.  In the left-side navigation pane, click **Data Synchronization**.
    
4.  In the upper part of the **Synchronization Tasks** page, select the region in which the destination instance resides.
    
5.  Find the data synchronization instance and click **Configure Task** in the Actions column.
    
6.  Configure the source and destination databases.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Task Name
    
    The task name that DTS generates. We recommend that you specify a descriptive name that makes it easy to identify. You do not need to use a unique task name.
    
    Source Database
    
    Instance Type
    
    The access method of the source database. Select **User-Created Database in ECS Instance**.
    
    Instance Region
    
    The source region that you selected on the buy page. The value of this parameter cannot be changed.
    
    ECS Instance ID
    
    The ID of the ECS instance on which the self-managed MySQL database is deployed.
    
    Database Type
    
    The database type of the source instance. The value of this parameter is set to **MySQL** and cannot be changed.
    
    Port Number
    
    The service port number of the self-managed MySQL database.
    
    Database Account
    
    The account of the self-managed MySQL database.
    
    **Note**
    
    The database account must have the SELECT permission on the objects to be synchronized, the REPLICATION CLIENT permission, the REPLICATION SLAVE permission, and the SHOW VIEW permission.
    
    Database Password
    
    The password of the database account.
    
    Destination Database
    
    Instance Type
    
    The instance type of the destination cluster. The value of this parameter is set to **PolarDB Instance** and cannot be changed.
    
    Instance Region
    
    The destination region that you selected on the buy page. You cannot change the value of this parameter.
    
    PolarDB Instance ID
    
    The ID of the destination PolarDB for MySQL cluster.
    
    Database Account
    
    The database account of the destination PolarDB for MySQL cluster.
    
    **Note**
    
    The database account must have the read and write permissions on the objects to be synchronized.
    
    Database Password
    
    The password of the database account.
    
7.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the IP address whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the self-managed database is hosted on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the IP address whitelist of the database to allow DTS to access the database. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to synchronize data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or ECS security group rules and forbidding unauthorized CIDR blocks, or connecting the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
8.  Select the processing mode of conflicting tables and the objects to synchronize.
    
    **Parameter or setting**
    
    **Description**
    
    Proccessing Mode In Existed Target Table
    
    -   **Pre-check and Intercept**: checks whether the destination cluster contains tables that have the same names as tables in the source database. If the destination cluster does not contain tables that have the same names as tables in the source database, the precheck is passed. Otherwise, an error is returned during precheck and the data synchronization task cannot be started.
        
        **Note**
        
        You can use the object name mapping feature to rename the tables that are synchronized to the destination cluster. You can use this feature if the source database and destination cluster contain identical table names and the tables in the destination cluster cannot be deleted or renamed. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
        
    -   **Ignore**: skips the precheck for identical table names in the source database and destination cluster.
        
        **Warning**
        
        If you select **Ignore Errors and Proceed**, data consistency is not ensured, and your business may be exposed to potential risks.
        
        -   During initial data synchronization, DTS does not synchronize the data records that have the same primary keys as the data records in the destination cluster. This occurs if the source database and destination cluster have the same schema. However, DTS synchronizes these data records during incremental data synchronization.
            
        -   If the source database and destination cluster have different schemas, initial data synchronization may fail. In this case, only some columns are synchronized or the data synchronization task fails.
            
        
    
    Select the objects to be synchronized
    
    Select one or more objects from the **Available** section and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon to add the objects to the **Selected** section.
    
    You can select tables or databases as the objects to be synchronized.
    
    **Note**
    
    -   If you select a database as the object to be synchronized, all schema changes in the database are synchronized to the destination cluster.
        
    -   By default, after an object is synchronized to the destination cluster, the name of the object remains unchanged. You can use the object name mapping feature to rename the objects that are synchronized to the destination cluster. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
        
    
    Rename Databases and Tables
    
    You can use the object name mapping feature to rename the objects that are synchronized to the destination instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Source table DMS\_ ONLINE\_ Do you want to copy the temporary table to the target database during DDL
    
    If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) to perform online DDL operations on the source database, you can specify whether to synchronize temporary tables generated by online DDL operations.
    
    -   **Yes**: DTS synchronizes the data of temporary tables generated by online DDL operations.
        
        **Note**
        
        If online DDL operations generate a large amount of data, the data synchronization task may be delayed.
        
    -   **No**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL data of the source database is synchronized.
        
        **Note**
        
        If you select No, the tables in the destination database may be locked.
        
    
    Retry Time for Failed Connection
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 720 minutes (12 hours). You can specify the retry time based on your needs. If DTS reconnects to the source and destination databases within the specified time, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
    
    **Note**
    
    When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time based on your business needs. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
    
9.  In the lower-right corner of the page, click **Next**.
    
10.  Select the initial synchronization types.
     
     ![Advanced settings](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8030359951/p41055.png)
     
     **Note**
     
     Initial synchronization includes initial schema synchronization and initial full data synchronization. If you select both **Initial Schema Synchronization** and **Initial Full Data Synchronization**, DTS synchronizes the schemas and historical data of the required objects before DTS synchronizes incremental data.
     
11.  In the lower-right corner of the page, click **Precheck**.
     
     **Note**
     
     -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
         
     -   If the task fails to pass the precheck, you can click the ![提示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to each failed item to view details.
         
         -   After you troubleshoot the issues based on the details, initiate a new precheck.
             
         -   If you do not need to troubleshoot the issues, **ignore the failed items** and **initiate a new precheck**.
             
     
12.  Close the **Precheck** dialog box after the following message is displayed: **Precheck Passed**. Then, the data synchronization task starts.
     
13.  Wait until initial synchronization is complete and the data synchronization task enters the **Synchronizing** state.
     
     You can view the status of the data synchronization task on the **Synchronization Tasks** page. ![View the status of a data synchronization task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5464738161/p41059.png)
