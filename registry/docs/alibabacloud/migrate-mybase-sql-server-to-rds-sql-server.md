This topic describes how to migrate data from an ApsaraDB MyBase for SQL Server instance to an ApsaraDB RDS for SQL Server instance by using Data Transmission Service (DTS).

## Prerequisites

-   The destination ApsaraDB RDS for SQL Server instance is created. For more information about the supported database engine versions, see [Overview of data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios#concept-26618-zh). For more information about how to create an ApsaraDB RDS for SQL Server instance, see [Create an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance#concept-pv1-n5z-vdb).
    
    **Important**
    
    If the **SQL Server Incremental Synchronization Mode** parameter is set to **Log-based Parsing for Non-heap Tables and CDC-based Incremental Synchronization for Heap Tables**, data is migrated in the hybrid log-based parsing mode, and the following engine versions of source databases are supported:
    
    -   Self-managed SQL Server or ApsaraDB RDS for SQL Server database of the Enterprise or Enterprise Evaluation edition: version 2012, 2014, 2016, 2019, or 2022.
        
    -   Self-managed SQL Server or ApsaraDB RDS for SQL Server database of the Standard edition: version 2016, 2019, or 2022.
        
    
-   The available storage space of the destination ApsaraDB RDS for SQL Server instance is larger than the total size of the data in the source ApsaraDB MyBase for SQL Server instance.
    
-   If the source ApsaraDB RDS for SQL Server instance meets one of the following conditions, we recommend that you split the migration task into multiple subtasks:
    
    -   The source instance contains more than 10 databases.
        
    -   A single database of the source instance backs up its logs at an interval of less than 1 hour.
        
    -   A single database of the source instance executes more than 100 DDL statements each hour.
        
    -   Logs are written at a rate of 20 MB/s for a single database of the source instance.
        
    -   The change data capture (CDC) feature needs to be enabled for more than 1,000 tables in the source ApsaraDB RDS for SQL Server instance.
        

## Usage notes

**Note**

DTS does not migrate foreign keys in the source database to the destination database. Therefore, the cascade and delete operations of the source database are not migrated to the destination database.

**Category**

**Description**

Limits on the source database

-   The server on which the source database is deployed must have sufficient outbound bandwidth. Otherwise, the data migration speed decreases.
    
-   The tables to be migrated must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   If you select tables as the objects to be migrated and you need to edit the tables in the destination database, such as renaming tables or columns, you can migrate up to 1,000 tables in a single data migration task. If you run a task to migrate more than 1,000 tables, a request error occurs. In this case, we recommend that you configure multiple tasks to migrate the tables or configure a task to migrate the entire database.
    
-   You can run a single data migration task to migrate up to 10 databases. If you want to migrate more than 10 databases, we recommend that you configure multiple tasks to migrate the databases. Otherwise, the performance and stability of your data migration task may be compromised.
    
-   If you want to migrate incremental data, make sure that the following requirements are met:
    
    -   The data logging feature must be enabled. The backup mode must be set to Full and full physical backup must be performed.
        
    -   If you perform only incremental data migration, the data logs of the source database must be retained for more than 24 hours. If you perform both full data migration and incremental data migration, the data logs of the source database must be retained for at least seven days. Otherwise, Data Transmission Service (DTS) may fail to obtain the data logs and the task may fail. In some cases, data inconsistency or loss may even occur. After full data migration is complete, you can set the retention period to more than 24 hours. Make sure that you set the retention period of data logs based on the preceding requirements. Otherwise, the Service Level Agreement (SLA) of DTS does not guarantee service reliability or performance.
        
-   If the change data capture (CDC) feature needs to be enabled for the tables that you want to migrate from the source database, the following conditions must be met. Otherwise, the precheck fails.
    
    -   The value of the srvname field in the sys.sysservers view is the same as the return value of the SERVERPROPERTY function.
        
    -   If the source database is a self-managed SQL Server database, the database owner must be the sa user. If the source database is an ApsaraDB RDS for SQL Server database, the database owner must be the sqlsa user.
        
    -   If the source database is of the Enterprise edition, you must use SQL Server 2008 or later.
        
    -   If the source database is of the Standard edition, you must use SQL Server 2016 SP1 or later.
        
    -   If the source database is of the Standard or Enterprise edition and its version is SQL Server 2017, we recommend that you update the version.
        
-   DTS uses the fn\_log function to obtain the logs of the source database. However, this function has performance bottlenecks. We recommend that you do not clear the logs of the source database before the task is complete. Otherwise, the task may fail.
    
-   Limits on operations on the source database:
    
    -   During schema migration and full data migration, do not execute DDL statements to change the schemas of databases or tables. Otherwise, the data migration task fails.
        
    -   If you perform only full data migration, do not write data to the source database during data migration. Otherwise, data will be inconsistent between the source and destination databases. To ensure data consistency, we recommend that you select Schema Migration, Full Data Migration, and Incremental Data Migration as the migration types.
        
-   If the source database is a read-only instance, you cannot migrate DDL operations.
    
-   In hybrid log-based parsing mode, you cannot perform multiple operations to add columns to or remove columns from the source database within 10 minutes. For example, if you execute the following SQL statements within 10 minutes, an error is reported for the task.
    
    ```
    ALTER TABLE test_table DROP COLUMN Flag;
    ALTER TABLE test_table ADD Remark nvarchar(50) not null default('');
    ```
    
-   If the source database is an ApsaraDB RDS for SQL Server instance that runs SQL Server Web edition, you must set the **SQL Server Incremental Synchronization Mode** parameter to **Incremental Synchronization Based on Logs of Source Database (Heap tables are not supported)** when you configure the task.
    

Other limits

-   DTS automatically creates a destination database in the ApsaraDB RDS for SQL Server instance. However, if the name of the database to be migrated does not conform to the naming conventions of ApsaraDB RDS, you must manually create a database in the destination ApsaraDB RDS for SQL Server instance before you configure the data migration task. For more information, see [Create a database](/help/en/rds/apsaradb-rds-for-sql-server/create-a-database-on-an-apsaradb-rds-for-sql-server-instance#concept-cg3-ljq-wdb).
    
-   DTS does not migrate data of the following types: TEXT, CURSOR, ROWVERSION, SQL\_VARIANT, HIERACHYID, and GEOMETRY.
    
-   If you set the **SQL Server Incremental Synchronization Mode** parameter to **Incremental Synchronization Based on Logs of Source Database (Heap tables are not supported)** in the **Select Objects** step, the tables to be migrated must have clustered indexes that contain primary key columns. The tables to be migrated cannot be heap tables, tables without primary keys, compressed tables, or tables with computed columns. Ignore the preceding limits if the hybrid log-based parsing mode is used.
    
    **Note**
    
    For more information about how to view table information, see the [How do I view the information about heap tables, tables without primary keys, compressed tables, and tables that contain computed columns in an SQL Server database?](/help/en/dts/support/faq#section-pp7-pqu-6yd) section of the FAQ topic.
    
-   If you want to migrate data between different versions of databases, make sure that the database versions are compatible.
    
-   In Incremental Synchronization Based on Logs of Source Database mode, DTS creates a trigger named dts\_cdc\_sync\_ddl, a heartbeat table named dts\_sync\_progress, and a DDL history table named dts\_cdc\_ddl\_history in the source database to ensure that the latency of data migration is accurate. In hybrid log-based parsing incremental synchronization mode, DTS creates a trigger named dts\_cdc\_sync\_ddl, a heartbeat table named dts\_sync\_progress, and a DDL history table named dts\_cdc\_ddl\_history and enables CDC for the source database and specific tables. We recommend that you set the maximum number of records per second to 1,000 for the tables for which CDC is enabled in the source database.
    
-   Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. During full data migration, DTS uses the read and write resources of the source database and destination cluster. This may increase the loads on the database servers.
    
-   During full data migration, concurrent INSERT operations cause fragmentation in the tables of the destination database. After full data migration is complete, the size of used tablespace of the destination database is larger than that of the source database.
    
-   You must make sure that the precision settings for columns of the FLOAT or DOUBLE data type meet your business requirements. DTS uses the `ROUND(COLUMN,PRECISION)` function to retrieve values from columns of the FLOAT or DOUBLE data type. If you do not specify a precision, DTS sets the precision for columns of the FLOAT data type to 38 digits and the precision for columns of the DOUBLE data type to 308 digits.
    
-   DTS attempts to resume data migration tasks that failed within the last seven days. Before you switch workloads to the destination database, you must stop or release the failed tasks. You can also execute the `REVOKE` statement to revoke the write permissions from the accounts that are used by DTS to access the destination database. Otherwise, the data in the source database overwrites the data in the destination database after the failed task is resumed.
    
-   If the data migration task involves incremental data migration, DTS does not allow you to perform the reindexing operation. If you perform the reindexing operation, the data migration task may fail and data loss may occur.
    
    **Note**
    
    DTS cannot migrate DDL operations related to the primary key of a table for which CDC is enabled.
    
-   If the number of CDC-enabled tables to be migrated in a single migration task exceeds 1,000, the precheck fails.
    
-   To perform incremental data migration, you must disable the trigger and foreign keys in the destination database. Otherwise, the data migration task fails.
    

## Billing

**Migration type**

**Task configuration fee**

**Internet traffic fee**

Schema migration and full data migration

Free of charge.

Free of charge.

Incremental data migration

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Migration types

-   Schema migration
    
    DTS migrates the schemas of the selected objects from the source database to the destination database.
    
    -   DTS supports schema migration for the following types of objects: table, view, trigger, synonym, SQL stored procedure, SQL function, plan guide, user-defined type, rule, default, and sequence.
        
    -   DTS does not migrate the schemas of assemblies, service brokers, full-text indexes, full-text catalogs, distributed schemas, distributed functions, Common Language Runtime (CLR) stored procedures, CLR scalar-valued functions, CLR table-valued functions, internal tables, systems, or aggregate functions.
        
-   Full data migration
    
    DTS migrates the historical data of required objects from the source database to the destination database.
    
-   Incremental data migration
    
    After full data migration is completed, DTS migrates incremental data from the source database to the destination database. Incremental data migration allows data to be migrated smoothly without interrupting the services of self-managed applications during data migration.
    

## SQL operations that support incremental data migration

**Operation type**

**SQL statement**

DML

INSERT, UPDATE, and DELETE

**Note**

If an UPDATE operation updates only the large fields, DTS does not migrate the operation.

DDL

-   ALTER TABLE, including only ADD COLUMN, DROP COLUMN, and RENAME COLUMN
    
-   CREATE TABLE and CREATE INDEX
    
    **Note**
    
    If a CREATE TABLE operation creates a partitioned table or a table that contains functions, DTS does not migrate the operation.
    
-   DROP TABLE
    
-   RENAME TABLE
    
-   TRUNCATE TABLE
    

**Note**

-   DTS does not migrate transactional DDL operations. For example, DTS does not migrate an SQL operation that contains DDL operations on multiple columns or an SQL operation that contains both DDL operations and DML operations. Data loss may occur after such SQL operations are migrated.
    
-   DTS does not migrate DDL operations that contain user-defined types.
    
-   DTS does not migrate online DDL operations.
    
-   If the source database uses the hybrid log-based parsing mode, all common DDL operations can be migrated.
    

## Permissions required for database accounts

**Database**

**Schema migration**

**Full data migration**

**Incremental data migration**

**References**

Source Instance

The read permissions on the objects to migrate.

The **owner** permission on the database that contains the objects to be migrated from the source instance.

For more information, see [Create an account](/help/en/rds/apsaradb-rds-for-sql-server/create-a-standard-account-privileged-account-and-a-global-read-only-account#concept-n3n-1zz-vdb) and [Modify the permissions of an account](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions#concept-ys2-4bp-ydb).

Destination Instance

Read and write permissions on the destination database

**Note**

We recommend that you use the account that has the **owner** permission on the destination database.

## Procedure

1.  Go to the Data Migration Tasks page.
    
    1.  Log on to the [Data Management (DMS) console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, move the pointer over **DTS**.
        
    3.  Choose **DTS (DTS)** > **Data Migration**.
        
    
    **Note**
    
    -   The actual operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
        
    -   You can also go to the [Data Migration page of the new DTS console](https://dts.alibabacloud.com/migrate/cn-hangzhou?resourceGroupId=).
        
    
2.  From the drop-down list on the right side of **Data Migration Tasks**, select the region in which your data migration instance resides.
    
    **Note**
    
    If you use the new DTS console, you must select the region in which the data migration instance resides in the upper-left corner.
    
3.  Click **Create Task**. On the page that appears, configure the source and destination databases.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed in the upper part of the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the task. DTS automatically generates a task name. We recommend that you specify an informative name to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select an existing DMS database instance. (Optional. If you have not registered a DMS database instance, ignore this option and configure database settings in the section below.)**
    
    The database instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing instance, you must manually configure parameters for the database.
        
    
    **Database Type**
    
    The type of the source database. Select **SQL Server**.
    
    **Access Method**
    
    The access method of the source database. Select **Alibaba Cloud Instance**.
    
    **Note**
    
    When you create a task to migrate data to or from a database instance that is created in [ApsaraDB MyBase](/help/en/apsaradb-for-mybase/latest/what-is-apsaradb-for-mybase#concept-2319911), you can specify **Alibaba Cloud Instance** for the **Access Method** parameter to connect the database instance to DTS.
    
    **Instance Region**
    
    The region in which the source ApsaraDB MyBase for SQL Server instance resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    Specifies whether data is migrated across Alibaba Cloud accounts. In this example, **No** is selected.
    
    **RDS Instance ID**
    
    The ID of the source ApsaraDB MyBase for SQL Server instance.
    
    **Database Account**
    
    The database account of the source ApsaraDB MyBase for SQL Server instance. For more information about the permissions that are required for the account, see [Permissions required for database accounts](#section-5ig-412-m6q).
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Destination Database**
    
    **Select an existing DMS database instance. (Optional. If you have not registered a DMS database instance, ignore this option and configure database settings in the section below.)**
    
    The database instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing instance, you must manually configure parameters for the database.
        
    
    **Database Type**
    
    The type of the destination database. Select **SQL Server**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the destination ApsaraDB RDS for SQL Server instance resides.
    
    **Instance ID**
    
    The instance ID of the destination ApsaraDB RDS for SQL Server instance.
    
    **Database Account**
    
    The database account of the destination ApsaraDB RDS for SQL Server instance. For more information about the permissions that are required for the account, see [Permissions required for database accounts](#section-5ig-412-m6q).
    
    **Database Password**
    
    The password that is used to access the database instance.
    
4.  In the lower part of the page, click **Test Connectivity and Proceed**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the IP address whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the self-managed database is hosted on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the IP address whitelist of the database to allow DTS to access the database. For more information, see the [CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353) section of the Add the CIDR blocks of DTS servers topic.
    
    **Warning**
    
    If the public CIDR blocks of DTS servers are automatically or manually added to the whitelist of a database instance or to the security group rules of an ECS instance, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or security group rules and forbidding unauthorized CIDR blocks, or connecting the database instance to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
5.  Configure the objects to be migrated and the advanced settings.
    
    **Parameter**
    
    **Description**
    
    **Migration Types**
    
    -   To perform only full data migration, select **Schema Migration** and **Full Data Migration**.
        
    -   To ensure service continuity during data migration, select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
        
    
    **Note**
    
    If you do not select **Incremental Data Migration**, we recommend that you do not write data to the source database during data migration. This ensures data consistency between the source and destination databases.
    
    **Processing Mode of Conflicting Tables**
    
    -   **Precheck and Report Errors**: checks whether the destination database contains tables that use the same names as tables in the source database. If the source and destination databases do not contain tables that have identical table names, the precheck is passed. Otherwise, an error is returned during the precheck and the data migration task cannot be started.
        
        **Note**
        
        If the source and destination databases contain tables with identical names and the tables in the destination database cannot be deleted or renamed, you can use the object name mapping feature to rename the tables that are migrated to the destination database. For more information, see [Map object names](/help/en/dts/user-guide/map-object-names#task-2101588).
        
    -   **Ignore Errors and Proceed**: skips the precheck for identical table names in the source and destination databases.
        
        **Warning**
        
        If you select **Ignore Errors and Proceed**, data inconsistency may occur and your business may be exposed to the following potential risks:
        
        -   If the source and destination databases have the same schema, and a data record has the same primary key as an existing data record in the destination database, the following scenarios may occur:
            
            -   During full data migration, DTS does not migrate the data record to the destination database. The existing data record in the destination database is retained.
                
            -   During incremental data migration, DTS migrates the data record to the destination database. The existing data record in the destination database is overwritten.
                
            
        -   If the source and destination databases have different schemas, only specific columns are migrated or the data migration task fails. Proceed with caution.
            
        
    
    **SQL Server Incremental Synchronization Mode**
    
    -   **Log-based Parsing for Non-heap Tables and CDC-based Incremental Synchronization for Heap Tables (Hybrid Log-based Parsing)**:
        
        -   Advantages:
            
            -   This mode supports heap tables, tables without primary keys, compressed tables, and tables with computed columns.
                
            -   This mode provides higher stability and a variety of complete DDL statements.
                
        -   Disadvantages:
            
            -   DTS creates the trigger dts\_cdc\_sync\_ddl, the heartbeat table dts\_sync\_progress, and the DDL storage table dts\_cdc\_ddl\_history in the source database and enables change data capture (CDC) for the source database and specific tables.
                
            -   You cannot execute the SELECT INTO or TRUNCATE statement on tables with CDC enabled in the source database. Triggers created by DTS in the source database cannot be manually deleted.
                
    -   **Incremental Synchronization Based on Logs of Source Database (Heap tables are not supported)**:
        
        -   Advantages:
            
            This mode does not modify the settings of the source database.
            
        -   Disadvantages:
            
            This mode does not support heap tables, tables without primary keys, compressed tables, or tables with computed columns.
            
    -   Select **Polling and querying CDC instances for incremental synchronization**.
        
        -   Advantages:
            
            -   Full or incremental migration is supported when the source database is Amazon RDS SQL Server, Azure SQL Database, or Google Cloud SQL for SQL Server.
                
            -   If you use the native CDC component of SQL Server to obtain incremental data, incremental migration is more stable and occupies less network bandwidth.
                
        -   Disadvantages:
            
            -   The source database account that is used by the DTS instance must have the permission to enable CDC. Incremental data migration takes about 10 seconds.
                
            -   If you configure a task to migrate multiple tables in multiple databases, stability and performance issues may occur.
                
    
    **Source Objects**
    
    Select one or more objects from the **Source Objects** section. Click the ![向右小箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to add the objects to the **Selected Objects** section.
    
    **Note**
    
    You can select columns, tables, or schemas as the objects to be migrated. If you select tables or columns as the objects to be migrated, DTS does not migrate other objects, such as views, triggers, or stored procedures, to the destination database.
    
    **Selected Objects**
    
    -   To rename an object that you want to migrate to the destination instance, right-click the object in the **Selected Objects** section. For more information, see [Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
    -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see [Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib).
    
    **Note**
    
    -   If you use the object name mapping feature to rename an object, other objects that depend on the object may fail to be migrated.
        
    -   To specify WHERE conditions to filter data, right-click an object in the **Selected Objects** section. In the dialog box that appears, specify the conditions. For more information, see [Use SQL conditions to filter data](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
        
    -   To incrementally migrate SQL operations performed on a specific database or table, right-click the object in the **Selected Objects** section. In the dialog box that appears, select the SQL operations that you want to incrementally migrate. For more information, see the [SQL operations that can be incrementally migrated](#section-zal-2r7-zxp) section of this topic.
        
    
6.  Click **Next: Advanced Settings** to configure advanced settings.
    
    -   **Data Verification Settings**
        
        For more information about how to use the data verification feature, see [Enable data verification](/help/en/dts/user-guide/enable-data-verification).
        
    -   **Advanced Settings**
        
        **Parameter**
        
        **Description**
        
        **Dedicated Cluster for Task Scheduling**
        
        By default, DTS schedules the task to a shared cluster. You do not need to configure this parameter. You can purchase a dedicated cluster of the specified specifications to run data migration tasks. For more information, see [What is a DTS dedicated cluster?](/help/en/dts/user-guide/what-is-a-dts-dedicated-cluster)
        
        **Set Alerts**
        
        Specifies whether to configure alerting for the data migration task. If the task fails or the migration latency exceeds the specified threshold, the alert contacts receive notifications. Valid values:
        
        -   **No**: does not configure alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see [Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz).
            
        
        **Retry Time for Failed Connections**
        
        The retry time range for failed connections. If the source or destination database fails to be connected after the data migration task is started, DTS immediately retries a connection within the time range. Valid values: 10 to 1440. Unit: minutes. Default value: 720. We recommend that you set the parameter to a value greater than 30. If DTS reconnects to the source and destination databases within the specified time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
        
        **Note**
        
        -   If you set different retry time ranges for multiple data migration tasks that have the same source or destination database, the shortest retry time range that is set takes precedence.
        -   When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
        
        **Retry Time for Other Issues**
        
        The retry time range for other issues. For example, if DDL or DML operations fail to be performed after the data migration task is started, DTS immediately retries the operations within the retry time range. Valid values: 1 to 1440. Unit: minutes. Default value: 10. We recommend that you set the parameter to a value greater than 10. If the failed operations are successfully performed within the specified retry time range, DTS resumes the data migration task. Otherwise, the change tracking task fails.
        
        **Important**
        
        The value of the **Retry Time for Other Issues** parameter must be smaller than the value of the **Retry Time for Failed Connections** parameter.
        
        **Enable Throttling for Full Data Migration**
        
        During full data migration, DTS uses the read and write resources of the source and destination databases. This may increase the loads on the database servers. You can specify whether to enable throttling for the full data migration task. If you select Yes, you can configure the **Queries per second (QPS) to the source database**, **RPS of Full Data Migration**, and **BPS of Full Data Migration** parameters based on your business requirements to relieve the load on the destination cluster.
        
        **Note**
        
        You can configure this parameter only when you select **Full Data Migration** as the migration type.**Migration Types**
        
        **Enable Throttling for Incremental Data Migration**
        
        You can specify whether to enable throttling for the incremental data migration task. If you select Yes, you can configure the **RPS of Incremental Data Migration** and **BPS of Incremental Data Migration** parameters based on your business requirements to relieve the load on the destination cluster.
        
        **Note**
        
        You can configure this parameter only when you select **Incremental Data Migration** as a migration type.**Migration Types**
        
        **Environment Tag**
        
        Select the environment tag for identifying the instance based on your business requirements.
        
        **Note**
        
        Only **Regular** and **Production Environment** are available. You can assign your own interpretations to the two tags based on your business scenarios.
        
        **Configure ETL**
        
        Specifies whether to enable the extract, transform, and load (ETL) feature. For more information, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705) Valid values:
        
        -   **Yes**: configures the ETL feature. You can enter data processing statements in the code editor. For more information, see [Configure ETL in a data migration or data synchronization task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
            
        -   **No**: does not configure the ETL feature.
            
        
7.  In the lower part of the page, click **Next: Save Task Settings and Precheck**.
    
    You can move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters** to view the parameters to be specified when you call the relevant API operation to configure the DTS task.
    
    **Note**
    
    -   Before you can start the data migration task, DTS performs a precheck. You can start the data migration task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, run a precheck again.
        
    -   If an alert is triggered for an item during the precheck:
        
        -   If an alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issues. Then, run a precheck again.
            
        -   If the alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur, and your business may be exposed to potential risks.
            
    
8.  Wait until **Success Rate** becomes **100%**. Then, click **Next: Purchase Instance**.
    
9.  On the **Purchase Instance** page, configure the Instance Class parameter for the data migration instance. The following table describes the parameters.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    **New Instance Class**
    
    **Resource Group Settings**
    
    The resource group to which the data migration instance belongs. Default value: **default resource group**. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb)
    
    **Instance Class**
    
    DTS provides instance classes that vary in the migration speed. You can select an instance class based on your business scenario. For more information, see [Specifications of data migration instances](/help/en/dts/product-overview/specifications-of-data-migration-instances#concept-26606-zh).
    
10.  Read and agree to **Data Transmission Service (Pay-as-you-go) Service Terms** by selecting the check box.
     
11.  Click **Buy and Start**. In the dialog box that appears, click OK.
     
     You can view the progress of the task in the task list.
