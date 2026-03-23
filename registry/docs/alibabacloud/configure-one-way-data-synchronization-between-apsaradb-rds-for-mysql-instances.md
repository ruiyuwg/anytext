Data Transmission Service (DTS) supports data synchronization between two MySQL databases. This topic describes how to configure one-way data synchronization between two ApsaraDB RDS for MySQL instances.

## Prerequisites

-   The source and destination ApsaraDB RDS instances are created. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance).
    
-   The database engine of the source and destination ApsaraDB RDS instances is MySQL.
    

## Precautions

-   DTS uses read and write resources of the source and destination databases during initial full data synchronization. This may increase the loads of the database servers. If the database performance or specifications are unfavorable, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source database, the tables have no primary keys, or a deadlock occurs in the destination database. Before you synchronize data, evaluate the impact of data synchronization on the performance of the source and destination databases. We recommend that you synchronize data during off-peak hours. For example, you can synchronize data when the CPU utilization of the source and destination databases is less than 30%.
    
-   We recommend that you do not use gh-ost or pt-online-schema-change to perform DDL operations on objects during data synchronization. Otherwise, data synchronization may fail.
    
-   If you use only DTS to write data to the destination database, you can use Data Management (DMS) to perform online DDL operations during data synchronization. For more information, see [Perform lock-free DDL operations](/help/en/dms/perform-lock-free-ddl-operations).
    
-   The tables to be migrated in the source database must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   During initial full data synchronization, concurrent INSERT operations cause fragmentation in the tables of the destination instance. After initial full data synchronization is complete, the size of used tablespace of the destination instance is larger than that of the source instance.
    
-   If the destination database is an ApsaraDB RDS for MySQL instance that runs MySQL 5.7 or 8.0, DTS creates the **dtssyncwriter** database account that has write permissions and is exclusive to DTS in the destination database.
    

## Billing

**Synchronization type**

**Task configuration fee**

Schema synchronization and full data synchronization

Free of charge.

Incremental data synchronization

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Supported synchronization topologies

-   One-way one-to-one synchronization
    
-   One-way one-to-many synchronization
    
-   One-way cascade synchronization
    
-   One-way many-to-one synchronization
    

For more information about synchronization topologies supported by DTS, see [Synchronization topologies](/help/en/dts/user-guide/synchronization-topologies#concept-978516).

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
    
    If you select a database as the object to be synchronized and the database contains a trigger that updates a table, data inconsistency may occur. For more information about how to solve this issue, see [Configure a data synchronization task for a source database that contains a trigger](/help/en/dts/use-cases/configure-a-data-synchronization-task-for-a-source-database-that-contains-a-trigger#multiTask2397).
    
-   Limits on RENAME TABLE operations
    
    RENAME TABLE operations may cause data inconsistency between the source and destination databases. For example, if only Table A is selected as the object to be synchronized and is renamed Table B, Table B cannot be synchronized to the destination database. To prevent this situation, you can select the entire database where Table A is located as the object to be synchronized when you configure the data synchronization task.
    

## Procedure

1.  Purchase a data synchronization instance. For more information, see [Purchase a data synchronization instance](/help/en/dts/getting-started/purchase-a-dts-instance#section-39h-fto-gdl).
    
    **Note**
    
    Set both Source Instance and Destination Instance to **MySQL** and set Synchronization Topology to **One-way Synchronization**.
    
2.  Go to the [DTS console](https://dts.console.alibabacloud.com/).
    
3.  In the left-side navigation pane, click **Data Synchronization**.
    
4.  In the upper part of the **Data Synchronization Tasks** page, select the region where the data synchronization instance resides.
    
5.  Find the data synchronization instance and click **Configure Task** in the Actions column.
    
6.  Configure the source and destination instances.
    
    ![Configure the source and destination instances](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5920359951/p46140.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Task Name
    
    The task name that DTS automatically generates. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to use a unique task name.
    
    Source Database
    
    Database Type
    
    Select **MySQL**.
    
    Instance Region
    
    The source region that you selected on the buy page. The value of this parameter cannot be changed.
    
    RDS Instance ID
    
    The ID of the source ApsaraDB RDS instance.
    
    Database Account
    
    The database account of the source ApsaraDB RDS instance.
    
    **Note**
    
    If the database engine of the source ApsaraDB RDS instance is **MySQL 5.5** or **MySQL 5.6**, you do not need to configure the **Database Account** or **Database Password** parameter.
    
    Database Password
    
    The password of the database account.
    
    Encryption
    
    Select **Non-encrypted** or **SSL-encrypted**. If you want to select **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS instance before you configure the data synchronization task. For more information, see [Configure SSL encryption for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Important**
    
    The **Encryption** parameter is available only within regions in the Chinese mainland and the China (Hong Kong) region.
    
    Destination Database
    
    Database Type
    
    Select **MySQL**.
    
    Instance Region
    
    The destination region that you selected on the buy page. The value of this parameter cannot be changed.
    
    RDS Instance ID
    
    The ID of the destination ApsaraDB RDS instance.
    
    Database Account
    
    The database account of the destination ApsaraDB RDS instance.
    
    **Note**
    
    If the database engine of the destination ApsaraDB RDS instance is **MySQL 5.5** or **MySQL 5.6**, you do not need to configure the **Database Account** or **Database Password** parameter.
    
    Database Password
    
    The password of the database account.
    
    Encryption
    
    Select **Non-encrypted** or **SSL-encrypted**. If you want to select **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS instance before you configure the data synchronization task. For more information, see [Configure SSL encryption for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Important**
    
    The **Encryption** parameter is available only within regions in the Chinese mainland and the China (Hong Kong) region.
    
7.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the IP address whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the self-managed database is hosted on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the IP address whitelist of the database to allow DTS to access the database. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
    **Warning**
    
8.  Select the synchronization policy and the objects to be synchronized.
    
    ![Select objects for a one-way data synchronization task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5010931261/p46145.png)
    
    **Parameter/Setting**
    
    **Description**
    
    Select the objects to be synchronized
    
    Select one or more objects from the **Available** section and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon to add the objects to the **Selected** section.
    
    You can select tables or databases as the objects to be synchronized.
    
    **Note**
    
    -   If you select a database as the object to be synchronized, all schema changes in the database are synchronized to the destination database.
        
    -   By default, after an object is synchronized to the destination database, the name of the object remains unchanged. You can use the object name mapping feature to rename the objects that are synchronized to the destination instance. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
        
    
    Rename Databases and Tables
    
    You can use the object name mapping feature to rename the objects that are synchronized to the destination instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Replicate Temporary Tables When DMS Performs DDL Operations
    
    If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) to perform online DDL operations on the source database, you can specify whether to synchronize temporary tables generated by online DDL operations.
    
    -   **Yes**: DTS synchronizes the data of temporary tables generated by online DDL operations.
        
        **Note**
        
        If online DDL operations generate a large amount of data, the data synchronization task may be delayed.
        
    -   **No**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL data of the source database is synchronized.
        
        **Note**
        
        If you select No, the tables in the destination database may be locked.
        
    
    Retry Time for Failed Connections
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 720 minutes (12 hours). You can specify the retry time based on your needs. If DTS reconnects to the source and destination databases within the specified time, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
    
    **Note**
    
    When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time based on your business needs. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
    
9.  In the lower-right corner of the page, click **Next**.
    
10.  Select the initial synchronization types.
     
     ![Advanced Settings](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8030359951/p41055.png)
     
     **Note**
     
     -   During initial synchronization, DTS synchronizes the schema and data of required objects from the source instance to the destination instance. The schema and data are the basis for subsequent incremental synchronization.
         
     -   Initial synchronization includes initial schema synchronization and initial full data synchronization. In most cases, you must select both **Initial Schema Synchronization** and **Initial Full Data Synchronization**.
         
     
11.  In the lower-right corner of the page, click **Precheck**.
     
     **Note**
     
     -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
         
     -   If the task fails to pass the precheck, click the ![Info icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to each failed item to view details.
         
         -   After you troubleshoot the issues based on the causes, run a precheck again.
             
         -   If you do not need to troubleshoot the issues, ignore failed items and run a precheck again.
             
     
12.  Close the **Precheck** dialog box after the following message is displayed: **Precheck Passed**. Then, the data synchronization task starts.
     
13.  Wait until initial synchronization is complete and the data synchronization task enters the **Synchronizing** state.
     
     You can view the state of the data synchronization task on the **Synchronization Tasks** page.
     
     ![State of the data synchronization task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5464738161/p41059.png)
