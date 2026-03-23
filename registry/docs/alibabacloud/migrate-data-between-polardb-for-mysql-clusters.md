This topic describes how to migrate data between PolarDB for MySQL clusters by using Data Transmission Service (DTS).

**Note**

A PolarDB for MySQL cluster of an earlier version cannot be updated to version 8.0. However, you can create a PolarDB for MySQL cluster of version 8.0, and then migrate data to this cluster. Before you migrate data across different versions of PolarDB for MySQL clusters, we recommend that you create a pay-as-you-go PolarDB for MySQL cluster to test the compatibility. After the test is complete, you can release the cluster.

## Prerequisites

-   The source and destination PolarDB for MySQL clusters are created. For more information, see [Purchase an Enterprise Edition cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster#task-1580301) and [Purchase a subscription cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-subscription-cluster#task-1580301).
    
-   The available storage space of the destination PolarDB for MySQL cluster is larger than the total size of the data in the source PolarDB for MySQL cluster.
    

## Usage notes

**Note**

-   During schema migration, DTS migrates foreign keys from the source database to the destination database.
    
-   During full data migration and incremental data migration, DTS temporarily disables the constraint check and cascade operations on foreign keys at the session level. If you perform the cascade update and delete operations on the source database during data migration, data inconsistency may occur.
    

**Limit type**

**Description**

Limits on the source database

-   Bandwidth requirements: The server to which the source database belongs must have sufficient outbound bandwidth. Otherwise, the data migration speed is affected.
    
-   The tables to be migrated must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   If you select tables as the objects to be migrated and you need to modify the tables in the destination database, such as renaming tables or columns, you can migrate up to 1,000 tables in a single data migration task. If you run a task to migrate more than 1,000 tables, a request error occurs. In this case, we recommend that you configure multiple tasks to migrate the tables, or configure a task to migrate the entire database.
    
-   If you need to migrate incremental data, the binary logging feature must be enabled and the loose\_polar\_log\_bin parameter must be set to on. Otherwise, error messages are returned during the precheck and the data migration task fails to be started. For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301) and [Modify parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#section-osq-bhy-ydb).
    
    **Note**
    
    -   If you enable the binary logging feature for a PolarDB for MySQL cluster, you are charged for the storage space that is occupied by binary logs.
        
    -   For an incremental data migration task, the binary logs of the source database must be stored for more than 24 hours. For a full data and incremental data migration task, the binary logs of the source database must be stored for at least seven days. Otherwise, DTS may fail to obtain the binary logs and the task may fail. In exceptional circumstances, data inconsistency or loss may occur. After full data migration is complete, you can set the retention period to more than 24 hours. Make sure that you set the retention period of binary logs in accordance with the preceding requirements. Otherwise, the Service Level Agreement (SLA) of DTS does not guarantee service reliability or performance.
        
    
-   Limits on operations to perform on the source database:
    
    -   During schema migration and full data migration, do not execute DDL statements to change the schemas of databases or tables. Otherwise, the data migration task fails.
        
    -   If you perform only full data migration, do not write data to the source database during data migration. Otherwise, data inconsistency between the source and destination databases may occur. To ensure data consistency, we recommend that you select schema migration, full data migration, and incremental data migration as the migration types.
        

Other limits

-   To ensure compatibility, the versions of the source and destination PolarDB for MySQL clusters must be the same.
    
-   DTS does not migrate the read-only nodes of the source PolarDB for MySQL cluster.
    
-   DTS does not migrate Object Storage Service (OSS) external tables from the source PolarDB for MySQL cluster.
    
-   Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. During full data migration, DTS uses the read/write resources of the source and destination databases. This may increase the loads of the database servers.
    
-   During full data migration, concurrent INSERT operations cause fragmentation in the tables of the destination database. After a full data migration is completed, the size of the used tablespace of the destination database is larger than that of the source database.
    
-   You must make sure that the precision settings for columns of the FLOAT or DOUBLE data type meet your business requirements. DTS uses the `ROUND(COLUMN,PRECISION)` function to retrieve values from columns of the FLOAT or DOUBLE data type. If you do not specify a precision value, DTS sets the precision for the FLOAT data type to 38 digits and the precision for the DOUBLE data type to 308 digits.
    
-   You cannot migrate data from a cluster that has DTS two-way synchronization configured**.**
    
-   DTS attempts to resume the data migration task that failed within the last seven days. Before you switch workloads to the destination cluster, stop or release the data migration task. You can also run the `revoke` command to revoke the write permissions from the accounts that are used by DTS to access the destination cluster. Otherwise, the data in the source database overwrites the data in the destination cluster after the task is resumed.
    
-   If DDL statements fail to be executed in the destination database, the DTS task continues to run the DDL statements. You can view the DDL statements that fail to be executed in task logs. For more information about how to view task logs, see [View task logs](/help/en/dts/user-guide/view-task-logs-1).
    
-   If a DTS task fails to run, DTS technical support will try to restore the task within 8 hours. During the restoration, the task may be restarted, and the parameters of the task may be modified.
    
    **Note**
    
    Only the parameters of the task may be modified. The parameters of databases are not modified. The parameters that may be modified include but are not limited to the parameters in the "[Modify instance parameters](/help/en/dts/user-guide/modify-the-parameters-of-a-dts-instance#section-ys2-2c2-wzo)" section of the Modify the parameters of a DTS instance topic.
    

Special cases

DTS executes the CREATE DATABASE IF NOT EXISTS 'test' statement in the source database as scheduled to move forward the binary log file position.

## Billing

**Migration type**

**Instance configuration fee**

**Internet traffic fee**

Schema migration and full data migration

Free of charge.

Charged only when data is migrated from Alibaba Cloud over the Internet. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

Incremental data migration

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Migration types

-   Schema migration
    
    Data Transmission Service (DTS) migrates the schemas of the selected objects from the source database to the destination database.
    
    **Note**
    
    -   DTS supports schema migration for the following types of objects: tables, views, triggers, stored procedures, and stored functions.
        
    -   During schema migration, DTS changes the value of the SECURITY attribute from DEFINER to INVOKER for views, stored procedures, and functions.
        
    -   DTS does not migrate user information. To call a view, stored procedure, or stored function of the destination database, you must grant the read and write permissions to INVOKER.
        
    
-   Full data migration
    
    DTS migrates the historical data of required objects from the source database to the destination database.
    
-   Incremental data migration
    
    After full data migration is complete, DTS migrates incremental data from the source database to the destination database. Incremental data migration allows data to be migrated smoothly without interrupting the services of self-managed applications during data migration.
    

## SQL operations that can be incrementally migrated

**Operation type**

**SQL statement**

DML

INSERT, UPDATE, and DELETE

DDL

-   ALTER TABLE and ALTER VIEW
    
-   CREATE FUNCTION, CREATE INDEX, CREATE PROCEDURE, CREATE TABLE, and CREATE VIEW
    
-   DROP INDEX and DROP TABLE
    
-   RENAME TABLE
    
    **Important**
    
    RENAME TABLE operations may cause data inconsistency between the source and destination databases. For example, if you select a table as the object to be migrated and rename the table during data migration, the data of this table is not migrated to the destination database. To prevent this situation, you can select the database to which this table belongs as the object to be migrated when you configure the data migration task. Make sure that the databases to which the table belongs before and after the RENAME TABLE operation are added to the objects to be migrated.
    
-   TRUNCATE TABLE
    

## Permissions required for database accounts

**Database type**

**Required permissions**

Source PolarDB for MySQL cluster

Read permissions on the objects to be migrated

Destination PolarDB for MySQL cluster

Read/write permissions on the destination database

For more information about how to create a database account for a PolarDB for MySQL cluster, see [Create and manage a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts#task-1580301).

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
    
3.  Click **Create Task** to go to the task configuration page.
    
4.  **Optional.** In the upper-right corner of the page, click **New Configuration Page**.
    
    **Note**
    
    -   Skip this step if the **Back to Previous Version** button is displayed in the upper-right corner of the page.
        
    -   Specific parameters in the new and previous versions of the configuration page may be different. We recommend that you use the new version of the configuration page.
        
    
5.  Configure the source and destination databases. The following table describes the parameters.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed in the upper part of the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the task. DTS automatically generates a task name. We recommend that you specify an informative name to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select a DMS database instance.**
    
    The instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not use an existing instance, you must configure the database information below.
        
    
    **Note**
    
    -   In the DMS console, you can click **Add DMS Database Instance** to register a database with DMS. For more information, see [Register an Alibaba Cloud database instance](/help/en/dms/register-an-apsaradb-instance-1) and [Register a database hosted on a third-party cloud service or a self-managed database](/help/en/dms/register-a-database-hosted-on-a-third-party-cloud-service-or-a-self-managed-database).
        
    -   In the DTS console, you can register a database with DTS on the **Database Connections** page or the new configuration page. For more information, see [Manage database connections](/help/en/dts/user-guide/database-connection-management).
        
    
    **Database Type**
    
    The type of the source database. Select **PolarDB for MySQL**.
    
    **Access Method**
    
    The access method of the source database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the source PolarDB for MySQL cluster resides.
    
    **PolarDB Cluster ID**
    
    The ID of the source PolarDB for MySQL cluster.
    
    **Database Account**
    
    The database account of the source PolarDB for MySQL cluster. For more information about the permissions that are required for the database account, see the [Permissions required for database accounts](#section-gp0-jbb-14u) section of this topic.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database. You can configure this parameter based on your business requirements. For more information about the SSL encryption feature, see [Configure SSL encryption](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption).
    
    **Destination Database**
    
    **Select a DMS database instance.**
    
    The instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not use an existing instance, you must configure the database information below.
        
    
    **Note**
    
    -   In the DMS console, you can click **Add DMS Database Instance** to register a database with DMS. For more information, see [Register an Alibaba Cloud database instance](/help/en/dms/register-an-apsaradb-instance-1) and [Register a database hosted on a third-party cloud service or a self-managed database](/help/en/dms/register-a-database-hosted-on-a-third-party-cloud-service-or-a-self-managed-database).
        
    -   In the DTS console, you can register a database with DTS on the **Database Connections** page or the new configuration page. For more information, see [Manage database connections](/help/en/dts/user-guide/database-connection-management).
        
    
    **Database Type**
    
    The type of the destination database. Select **PolarDB for MySQL**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the destination PolarDB for MySQL cluster resides.
    
    **PolarDB Cluster ID**
    
    The ID of the destination PolarDB for MySQL cluster.
    
    **Database Account**
    
    The database account of the destination PolarDB for MySQL cluster. For information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-gp0-jbb-14u) section of this topic.
    
    **Important**
    
    We recommend that you use a privileged account.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database. You can configure this parameter based on your business requirements. For more information about the SSL encryption feature, see [Configure SSL encryption](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption).
    
6.  In the lower part of the page, click **Test Connectivity and Proceed**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the IP address whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the self-managed database is hosted on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the IP address whitelist of the database to allow DTS to access the database. For more information, see the [CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353) section of the Add the CIDR blocks of DTS servers topic.
    
    **Warning**
    
    If the public CIDR blocks of DTS servers are automatically or manually added to the whitelist of a database instance or to the security group rules of an ECS instance, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or security group rules and forbidding unauthorized CIDR blocks, or connecting the database instance to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
7.  Configure the objects to be migrated.
    
    1.  On the **Configure Objects** page, configure the objects that you want to migrate.
        
        **Parameter**
        
        **Description**
        
        **Migration Types**
        
        -   To perform only full data migration, select **Schema Migration** and **Full Data Migration**.
            
        -   To ensure service continuity during data migration, select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
            
        
        **Note**
        
        If you do not select **Incremental Data Migration**, we recommend that you do not write data to the source database during data migration. This ensures data consistency between the source and destination databases.
        
        **Method to Migrate Triggers in Source Database**
        
        The method that is used to migrate triggers from the source database. You can select a migration method based on your business requirements. If no triggers are to be migrated, you do not need to configure this parameter. For more information, see [Synchronize or migrate triggers from the source database](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139).
        
        **Note**
        
        You can configure this parameter only when you set the **Migration Types** parameter to **Schema Migration**.
        
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
                
            
        
        **Source Objects**
        
        Select one or more objects from the **Source Objects** section. Click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon and add the objects to the **Selected Objects** section.
        
        **Note**
        
        You can select columns, tables, or schemas as the objects to be migrated. If you select tables or columns as the objects to be migrated, DTS does not migrate other objects, such as views, triggers, or stored procedures, to the destination database.
        
        **Selected Objects**
        
        -   To rename an object that you want to migrate to the destination instance, right-click the object in the **Selected Objects** section. For more information, see [Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
        -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see [Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib).
        
        **Note**
        
        -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be migrated.
            
        -   To specify WHERE conditions to filter data, right-click a table in the **Selected Objects** section. In the dialog box that appears, specify the conditions. For more information, see [Specify filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
            
        -   To select the SQL operations performed on a specific database or table, right-click an object in the **Selected Objects** section. In the dialog box that appears, select the SQL operations that you want to migrate. For more information about the SQL operations that support incremental migration, see the [SQL operations that support incremental migration](#section-wbu-jz6-urq) section of this topic.
            
        
    2.  Click **Next: Advanced Settings** to configure advanced settings.
        
        **Parameter**
        
        **Description**
        
        **Dedicated Cluster for Task Scheduling**
        
        By default, DTS schedules the task to the shared cluster if you do not specify a dedicated cluster. You can also purchase a dedicated cluster of the required specifications to run the data migration task. For more information, see [What is a DTS dedicated cluster](/help/en/dts/user-guide/what-is-a-dts-dedicated-cluster).
        
        **Select the engine type of the destination database**
        
        The engine type of the destination database. Select an engine type based on your business requirements. Valid values:
        
        -   **InnoDB**: the default storage engine.
            
        -   **X-Engine**: an online transaction processing (OLTP) database storage engine.
            
        
        **Copy the temporary table of the Online DDL tool that is generated in the source table to the destination database.**
        
        If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) or the gh-ost tool to perform online DDL operations on the source database, you can specify whether to migrate the data of temporary tables generated by online DDL operations. Valid values:
        
        **Important**
        
        You cannot use tools such as pt-online-schema-change to perform online DDL operations on the source database. Otherwise, the DTS task fails.
        
        -   **Yes**: DTS migrates the data of temporary tables generated by online DDL operations.
            
            **Note**
            
            If online DDL operations generate a large amount of data, latency may occur for the data migration task.
            
        -   **No, Adapt to DMS Online DDL**: DTS does not migrate the data of temporary tables generated by online DDL operations. Only the original DDL operations that are performed by using [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) are migrated.
            
            **Note**
            
            If you select this option, the tables in the destination database may be locked.
            
        -   **No, Adapt to gh-ost**: DTS does not migrate the data of temporary tables generated by online DDL operations. Only the original DDL operations that are performed by using the gh-ost tool are migrated. You can use the default or custom regular expressions to filter out the shadow tables of the gh-ost tool and tables that are not required.
            
            **Note**
            
            If you select this option, the tables in the destination database may be locked.
            
        
        **Whether to Migrate Accounts**
        
        Specifies whether to migrate the account information of the source database. You can configure this parameter based on your business requirements. If you select **Yes**, you must select the accounts that you want to migrate and check the permissions of the source and destination database accounts used in the data migration task. For more information, such as authorization methods, see [Migrate database accounts](/help/en/dts/user-guide/permissions-for-database-accounts-to-migrate-account-information).
        
        **Retry Time for Failed Connections**
        
        The retry time range for failed connections. If the source or destination database fails to be connected after the data migration task is started, DTS immediately retries a connection within the retry time range. Valid values: 10 to 1440. Unit: minutes. Default value: 720. We recommend that you set the parameter to a value greater than 30. If DTS is reconnected to the source and destination databases within the specified retry time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
        
        **Note**
        
        -   If you specify different retry time ranges for multiple data migration tasks that share the same source or destination database, the value that is specified later takes precedence.
            
        -   When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at the earliest opportunity after the source database and destination instance are released.
            
        
        **Retry Time for Other Issues**
        
        The retry time range for other issues. For example, if DDL or DML operations fail to be performed after the data migration task is started, DTS immediately retries the operations within the retry time range. Valid values: 1 to 1440. Unit: minutes. Default value: 10. We recommend that you set the parameter to a value greater than 10. If the failed operations are successfully performed within the specified retry time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
        
        **Important**
        
        The value of the **Retry Time for Other Issues** parameter must be smaller than the value of the **Retry Time for Failed Connections** parameter.
        
        **Enable Throttling for Full Data Migration**
        
        Specifies whether to enable throttling for full data migration. During full data migration, DTS uses the read and write resources of the source and destination databases. This may increase the loads of the database servers. You can enable throttling for full data migration based on your business requirements. To configure throttling, you must configure the **Queries per second (QPS) to the source database**, **RPS of Full Data Migration**, and **Data migration speed for full migration (MB/s)** parameters. This reduces the loads of the destination database server.
        
        **Note**
        
        You can configure this parameter only if you select **Full Data Migration** for the **Migration Types** parameter.
        
        **Enable Throttling for Incremental Data Migration**
        
        Specifies whether to enable throttling for incremental data migration. To configure throttling, you must configure the **RPS of Incremental Data Migration** and **Data migration speed for incremental migration (MB/s)** parameters. This reduces the loads of the destination database server.
        
        **Note**
        
        You can configure this parameter only if you select **Incremental Data Migration** for the **Migration Types** parameter.
        
        **Environment Tag**
        
        Select the environment tag that identifies the cluster based on your business requirements. In this example, no environment tag is selected.
        
        **Whether to delete SQL operations on heartbeat tables of forward and reverse tasks**
        
        Specifies whether to write SQL operations on heartbeat tables to the source database while the DTS instance is running. Valid values:
        
        -   **Yes**: does not write SQL operations on heartbeat tables. In this case, a latency of the DTS instance may be displayed.
            
        -   **No**: writes SQL operations on heartbeat tables. In this case, features such as physical backup and cloning of the source database may be affected.
            
        
        **Configure ETL**
        
        Specifies whether to enable the extract, transform, and load (ETL) feature. For more information, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705) Valid values:
        
        -   **Yes**: configures the ETL feature. You can enter data processing statements in the code editor. For more information, see [Configure ETL in a data migration or data synchronization task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
            
        -   **No**: does not configure the ETL feature.
            
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data migration task. If the task fails or the migration latency exceeds the specified threshold, the alert contacts receive notifications. Valid values:
        
        -   **No**: does not configure alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see the [Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz) section of the Configure monitoring and alerting topic.
            
        
    3.  Click **Next Step: Data Verification** to configure the data verification task.
        
        For more information about how to use the data verification feature, see [Configure a data verification task](/help/en/dts/user-guide/enable-data-verification#task-2249288).
        
    
8.  Save the task settings and run a precheck.
    
    -   To view the parameters to be specified when you call the relevant API operation to configure the DTS task, move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters**.
        
    -   If you do not need to view or have viewed the parameters, click **Next: Save Task Settings and Precheck** in the lower part of the page.
        
    
    **Note**
    
    -   Before you can start the data migration task, DTS performs a precheck. You can start the data migration task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, run a precheck again.
        
    -   If an alert is triggered for an item during the precheck:
        
        -   If an alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issues. Then, run a precheck again.
            
        -   If the alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur, and your business may be exposed to potential risks.
            
    
9.  Wait until **Success Rate** becomes **100%**. Then, click **Next: Purchase Instance**.
    
10.  Purchase a cluster.
     
     1.  On the **Purchase Instance** page, configure the Instance Class parameter for the data migration instance. The following table describes the parameters.
         
         **Section**
         
         **Parameter**
         
         **Description**
         
         **New Instance Class**
         
         **Resource Group**
         
         The resource group to which the data migration instance belongs. Default value: **default resource group**. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb)
         
         **Instance Class**
         
         DTS provides instance classes that vary in the migration speed. You can select an instance class based on your business scenario. For more information, see [Instance classes of data migration instances](/help/en/dts/product-overview/specifications-of-data-migration-instances#concept-26606-zh).
         
     2.  Read and agree to **Data Transmission Service (Pay-as-you-go) Service Terms** by selecting the check box.
         
     3.  Click **Buy and Start**. In the message that appears, click **OK**.
         
         You can view the progress of the task on the Data Migration page.
