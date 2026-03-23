AnalyticDB for MySQL is a real-time online analytical processing (OLAP) service that is developed by Alibaba Cloud for online data analysis with high concurrency. AnalyticDB for MySQL can analyze petabytes of data from multiple dimensions at millisecond-level timing to provide you with data-driven insights into your business. This topic describes how to synchronize data from a PolarDB for MySQL cluster to an AnalyticDB for MySQL cluster by using Data Transmission Service (DTS). After you synchronize data, you can use AnalyticDB for MySQL to build internal business intelligence (BI) systems, interactive query systems, and real-time reporting systems.

## Prerequisites

-   An AnalyticDB for MySQL cluster is created. For more information, see [Create an AnalyticDB for MySQL cluster](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-a-cluster).
    
-   The AnalyticDB for MySQL cluster has sufficient storage.
    
-   The binary logging feature is enabled for the PolarDB for MySQL cluster. For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging).
    

## Usage notes

-   DTS uses read and write resources of the source and destination RDS instances during initial full data synchronization. This may increase the loads of the RDS instances. If the instance performance is unfavorable, the specification is low, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source RDS instance, the tables have no primary keys, or a deadlock occurs in the destination RDS instance. Before data synchronization, evaluate the impact of data synchronization on the performance of the source and destination RDS instances. We recommend that you synchronize data during off-peak hours. For example, you can synchronize data when the CPU utilization of the source and destination RDS instances is less than 30%.
    
-   We recommend that you do not use gh-ost or pt-online-schema-change to perform DDL operations on the required objects during data synchronization. Otherwise, data may fail to be synchronized.
    
-   Due to the limits of AnalyticDB for MySQL, if the disk space usage of the nodes in an AnalyticDB for MySQL cluster exceeds 80%, the cluster is locked. We recommend that you estimate the required disk space based on the objects to be synchronized. Make sure that the destination cluster has sufficient storage.
    
-   Prefix indexes cannot be synchronized. If the source database contains prefix indexes, data may fail to be synchronized.
    

## Billing

**Synchronization type**

**Task configuration fee**

Schema synchronization and full data synchronization

Free of charge.

Incremental data synchronization

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## SQL operations that can be synchronized

-   DDL operations: CREATE TABLE, DROP TABLE, RENAME TABLE, TRUNCATE TABLE, ADD COLUMN, DROP COLUMN, and MODIFY COLUMN
    
-   DML operations: INSERT, UPDATE, and DELETE
    

**Note**

If the data type of a field in the source table is changed during data synchronization, an error message is reported and the data synchronization task is interrupted. For more information about how to handle this issue, see the "Troubleshoot the synchronization failure that occurs due to field type changes" section of the [Troubleshoot the synchronization failure that occurs due to field type changes](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-instance-to-an-analyticdb-for-mysql-cluster#section-o6l-gcd-cqe) topic.

## Permissions required for database accounts

**Database**

**Required permission**

PolarDB for MySQL cluster

Read permissions on the objects to be synchronized

AnalyticDB for MySQL

Read and write permissions on the required objects

For more information about how to create and authorize a database account, see [Create a database account for a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts) and [Create a database account for an AnalyticDB for MySQL cluster](/help/en/analyticdb/analyticdb-for-mysql/getting-started/create-database-account).

## Data type mappings

For more information, see [Data type mappings for schema synchronization](/help/en/dts/user-guide/data-type-mappings-for-schema-synchronization#concept-1813784).

## Procedure

1.  Purchase a DTS instance. For more information, see [Purchase a data synchronization instance](/help/en/dts/getting-started/purchase-a-dts-instance#section-39h-fto-gdl).
    
    **Note**
    
    On the buy page, set Source Instance to **PolarDB**, set Target Instance to **AnalyticDB for MySQL**, and set Synchronization Topology to **One-way Synchronization**.
    
2.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    If you are redirected to the Data Management (DMS) console, you can click the ![old](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2274020761/p529428.png) icon in the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3856567171/p805074.png) to go to the previous version of the DTS console.
    
3.  In the left-side navigation pane, click **Data Synchronization**.
    
4.  In the upper part of the **Synchronization Tasks** page, select the region in which the destination instance resides.
    
5.  Find the data synchronization instance and click **Configure Task** in the Actions column.
    
6.  Configure the source and destination clusters.
    
    ![Configure the source and destination clusters](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0703019951/p58269.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Synchronization Task Name
    
    The task name that DTS automatically generates. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to use a unique task name.
    
    Source Instance Details
    
    Instance Type
    
    This parameter is set to **PolarDB Instance** and cannot be changed.
    
    Instance Region
    
    The source region that you selected on the buy page. You cannot change the value of this parameter.
    
    PolarDB Instance ID
    
    The ID of the source PolarDB for MySQL cluster.
    
    Database Account
    
    The database account of the source cluster. For information about the permissions that are required for the account, see [Permissions required for database accounts](#section-77r-dbi-ez7).
    
    Database Password
    
    The password of the database account.
    
    Destination Instance Details
    
    Instance Type
    
    This parameter is set to **AnalyticDB** and cannot be changed.
    
    Instance Region
    
    The destination region that you selected on the buy page. You cannot change the value of this parameter.
    
    Version
    
    Select **3.0**.
    
    Database
    
    The ID of the destination AnalyticDB for MySQL cluster.
    
    Database Account
    
    The account of the AnalyticDB for MySQL database. For information about the permissions that are required for the account, see [Permissions required for database accounts](#section-77r-dbi-ez7).
    
    Database Password
    
    The password of the database account.
    
7.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the IP address whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the self-managed database is hosted on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the IP address whitelist of the database to allow DTS to access the database. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to synchronize data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or ECS security group rules and forbidding unauthorized CIDR blocks, or connecting the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
8.  Select the synchronization policy and the objects to be synchronized.
    
    ![Select the synchronization policy and the objects to be synchronized](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2210931261/p55267.png)
    
    **Parameter or setting**
    
    **Description**
    
    Select the initial synchronization types
    
    You must select both **Initial Schema Synchronization** and **Initial Full Data Synchronization** in most cases. After the precheck is complete, DTS synchronizes the schema and data of required objects from the source instance to the destination cluster. The schema and data are the basis for subsequent incremental synchronization.
    
    Processing Mode In Existed Target Table
    
    -   **Precheck and Report Errors**: checks whether the source and destination databases contain tables that share the same names. If the destination database does not contain tables that have the same names as those in the source database, the precheck is passed. Otherwise, an error is returned during precheck and the data synchronization task cannot be started.
        
        **Note**
        
        You can use the object name mapping feature to rename the tables that are synchronized to the destination database. If the source and destination databases contain identical table names and the tables in the destination database cannot be deleted or renamed, you can use this feature. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
        
    -   **Ignore Errors and Proceed**: skips the precheck for identical table names in the source and destination databases.
        
        **Warning**
        
        If you select **Ignore Errors and Proceed**, data inconsistency may occur and your business may be exposed to potential risks.
        
        -   If the source and destination databases have the same schema, DTS does not synchronize data records that have the same primary keys as data records in the destination database.
            
        -   If the source and destination databases have different schemas, initial data migration may fail. In this case, only specific columns are migrated, or the data migration task fails.
            
        
    
    Merge Multi Tables
    
    -   If you select **Yes**, DTS adds the `__dts_data_source` column to each table to store data sources. In this case, DDL operations cannot be synchronized.
        
    -   **No** is selected by default. In this case, DDL operations can be synchronized.
        
    
    **Note**
    
    If you set this parameter to Yes, all of the selected source tables in the task are merged into a destination table. If you want to merge only part of the source tables, you can create two data synchronization tasks.
    
    Select the operation types to be synchronized
    
    Select the types of operations that you want to synchronize based on your business requirements. All operation types are selected by default. For more information, see [SQL operations that can be synchronized](#section-wkl-212-vcr).
    
    Select the objects to be synchronized
    
    Select one or more objects from the **Available** section and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon to add the objects to the **Selected** section.
    
    You can select tables or databases as the objects to be synchronized.
    
    **Note**
    
    -   If you select a database as the object to be synchronized, all schema changes in the database are synchronized to the destination database.
        
    -   If you select a table as the object to be synchronized, only the ADD COLUMN operations that are performed on the table are synchronized to the destination database.
        
    -   By default, after an object is synchronized to the destination database, the name of the object remains unchanged. You can use the object name mapping feature to rename the objects that are synchronized to the destination cluster. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
        
    
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
    
10.  Specify a type for the tables that you want to synchronize to the destination database.
     
     ![设置表类型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4130359951/p55270.png)
     
     **Note**
     
     After you select **Initial Schema Synchronization**, you must specify the **type**, **primary key column**, and **partition key column** for the tables that you want to synchronize to the AnalyticDB for MySQL cluster. For more information, see [CREATE TABLE](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/create-table/).
     
11.  In the lower-right corner of the page, click **Precheck**.
     
     **Note**
     
     -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
         
     -   If the task fails to pass the precheck, you can click the ![提示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to each failed item to view details.
         
         -   After you troubleshoot the issues based on the details, initiate a new precheck.
             
         -   If you do not need to troubleshoot the issues, **ignore the failed items** and **initiate a new precheck**.
             
     
12.  Close the **Precheck** dialog box after the following message is displayed: **Precheck Passed**. Then, the data synchronization task starts.
     
13.  Wait until initial synchronization is complete and the data synchronization task enters the **Synchronizing** state.
     
     You can view the status of the data synchronization task on the **Synchronization Tasks** page. ![View the status of a data synchronization task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5464738161/p41059.png)
