This topic describes how to synchronize data between PolarDB for MySQL clusters by using Data Transmission Service (DTS).

## Prerequisites

-   The source and destination PolarDB for MySQL clusters are created. For more information, see [Purchase an Enterprise Edition cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster#task-1580301) and [Purchase a subscription cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-subscription-cluster#task-1580301).
    
    **Note**
    
    The source and destination PolarDB for MySQL clusters have the same storage capacity.
    
-   The binary logging feature is enabled for the source and destination PolarDB for MySQL clusters. For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging).
    

## Usage notes

**Note**

-   During schema synchronization, DTS synchronizes foreign keys from the source database to the destination database.
    
-   During full data synchronization and incremental data synchronization, DTS temporarily disables the constraint check and cascade operations on foreign keys at the session level. If you perform the cascade update and delete operations on the source database during data synchronization, data inconsistency may occur.
    

**Category**

**Description**

Limits on the source database

-   The tables to be synchronized must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
    **Note**
    
    If the tables to be synchronized do not have primary keys and UNIQUE constraints, you must enable the Exactly-Once write feature when you configure the two-way synchronization instance. For more information, see [Synchronize tables without primary keys or UNIQUE constraints](/help/en/dts/user-guide/synchronize-tables-without-primary-keys-and-unique-constraints-from-the-source-database).
    
-   If you select tables as the objects to be synchronized and you need to modify the tables, such as renaming tables or columns, in the destination database, you can synchronize up to 1,000 tables in a single data synchronization task. If you run a task to synchronize more than 1,000 tables, a request error occurs. In this case, we recommend that you configure multiple tasks to synchronize the tables or configure a task to synchronize the entire database.
    
-   The following requirements for binary logs must be met:
    
    -   The binary logging feature must be enabled and the `loose_polar_log_bin` parameter must be set to `ON`. Otherwise, error messages are returned during the precheck and a DTS task cannot be started. For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301) and [Modify parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#section-osq-bhy-ydb).
        
        **Note**
        
        If you enable the binary logging feature for a PolarDB for MySQL cluster, you are charged for the storage space that is occupied by binary logs.
        
    -   The binary logs of a PolarDB for MySQL cluster must be retained at least three days. We recommend that you set the retention period of the binary logs to seven days. In exceptional circumstances, data inconsistency or loss may occur. Make sure that you configure the retention period of binary logs based on the preceding requirements. Otherwise, the service reliability or performance in the Service Level Agreement (SLA) of DTS may not be guaranteed.
        
        **Note**
        
        For more information about how to set the Retention Period of the binary logs for an PolarDB for MySQL cluster, see the [Modify the retention period](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#31d36e9fa0gwo) section in the topic "Enable binary logging".
        
    
-   During schema synchronization and full data synchronization, do not execute DDL statements to change the schemas of databases or tables. Otherwise, the data synchronization task fails.
    

Other limits

-   DTS does not synchronize the read-only nodes of the source PolarDB for MySQL cluster.
    
-   DTS does not synchronize Object Storage Service (OSS) external tables from the source PolarDB for MySQL cluster.
    
-   DTS does not synchronize data where a parser defined by using comments is used.
    
-   If the data to be synchronized contains information such as rare characters or emojis that takes up four bytes, the destination databases and tables to receive the data must use UTF8mb4 character set.
    
    **Note**
    
    If you use the schema synchronization feature of DTS, set the instance parameter `character_set_server` in the destination database to UTF8mb4 character set.
    
-   Before you synchronize data, evaluate the impact of data synchronization on the performance of the source and destination databases. We recommend that you synchronize data during off-peak hours. During initial full data synchronization, DTS uses the read and write resources of the source and destination databases. This may increase the loads on the database servers.
    
-   During initial full data synchronization, concurrent INSERT operations cause fragmentation in the tables of the destination database. After initial full data synchronization is complete, the size of used tablespace of the destination database is larger than that of the source database.
    
-   We recommend that you do not use tools such as pt-online-schema-change to perform DDL operations on source tables during data synchronization. Otherwise, the data synchronization task fails.
    
-   If no data from other sources is written to the destination database during data synchronization, you can use Data Management (DMS) to perform online DDL operations on source tables. For more information, see [Perform lock-free DDL operations](/help/en/dms/perform-lock-free-ddl-operations).
    
-   Data inconsistency between the source and destination databases occurs if data from other sources is written to the destination database during data synchronization. For example, if you use DMS to execute online DDL statements while data from other sources is written to the destination database, data loss may occur in the destination database.
    
-   If DDL statements fail to be executed in the destination database, the data synchronization task continues to run. You can view the DDL statements that fail to be executed in the task logs. For more information about how to view task logs, see [View task logs](/help/en/dts/user-guide/view-task-logs-1).
    
-   If you want to synchronize accounts from the source database to the destination database, you need to learn the prerequisites and precautions. For more information, see [Migrate database accounts](/help/en/dts/user-guide/permissions-for-database-accounts-to-migrate-account-information).
    
-   If a DTS task fails to run, DTS technical support will try to restore the task within 8 hours. During the restoration, the task may be restarted, and the parameters of the task may be modified.
    
    **Note**
    
    Only the parameters of the task may be modified. The parameters of databases are not modified. The parameters that may be modified include but are not limited to the parameters in the "[Modify instance parameters](/help/en/dts/user-guide/modify-the-parameters-of-a-dts-instance#section-ys2-2c2-wzo)" section of the Modify the parameters of a DTS instance topic.
    

Special cases

Two-way data synchronization between PolarDB for MySQL clusters

-   DTS supports two-way data synchronization only between two PolarDB for MySQL clusters. DTS does not support two-way data synchronization among more than two PolarDB for MySQL clusters.
    
-   Limits on DDL synchronization directions: To ensure data consistency and the stability of two-way data synchronization, you can synchronize DDL operations only in the forward direction.
    
-   When DTS runs a two-way data synchronization task, DTS creates a database named dts in the destination database to prevent circular synchronization. When the task is running, do not modify the dts database.
    
-   A two-way data synchronization instance contains a forward synchronization task and a reverse synchronization task. If an object is to be synchronized in both the forward and reverse synchronization tasks when you configure or reset the instance, the following rules apply:
    
    -   Only one of the tasks can synchronize both the full data and incremental data of objects. The other task synchronizes only the incremental data of the objects.
        
    -   The source data of the current task can be synchronized only to the destination database in the task. The synchronized data is not used as the source data of the other task.
        
    
-   DTS executes the CREATE DATABASE IF NOT EXISTS \`test\` statement in the source database as scheduled to move forward the binary log file position.
    

## Billing

**Synchronization type**

**Task configuration fee**

Schema synchronization and full data synchronization

Free of charge.

Incremental data synchronization

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Supported conflict detection

To ensure data consistency, make sure that data records with the same primary key, business primary key, or unique key are updated only on one of the synchronization nodes. If data records are updated on both nodes, DTS responds to conflicts based on the conflict resolution policy that you specify for the data synchronization task.

DTS checks and fixes conflicts to maximize the stability of two-way synchronization instances. DTS can detect the following types of conflicts:

-   Uniqueness conflicts caused by INSERT operations
    
    INSERT operations that do not comply with the uniqueness constraint cannot be synchronized. For example, if a record with the same primary key value is inserted into the two synchronization nodes at almost the same time, one of the inserted records fails to be synchronized. The synchronization fails because a record with the same primary key value already exists on the other node.
    
-   Inconsistent records caused by UPDATE operations
    
    -   If the records to be updated do not exist in the destination instance, DTS converts the UPDATE operation into an INSERT operation. However, uniqueness conflicts may occur.
        
    -   The primary keys or unique keys of the records to insert may conflict with those of existing records in the destination instance.
        
-   Non-existent records to be deleted
    
    The records to be deleted do not exist in the destination instance. In this case, DTS ignores the DELETE operation regardless of the conflict resolution policy that you specify.
    

**Important**

-   During two-way synchronization, the system time of the source and destination instances may be different. Synchronization latency may occur. For these reasons, DTS does not ensure that the conflict detection mechanism can prevent all data conflicts. To perform two-way synchronization, make sure that records with the same primary key, business primary key, or unique key are updated only on one of the synchronization nodes.
    
-   DTS provides conflict resolution policies to prevent conflicts that may occur during data synchronization. You can select a conflict resolution policy when you configure two-way data synchronization.
    

## SQL operations that can be synchronized

**Important**

DDL operations can be synchronized only in the forward direction from the source database to the destination database. DDL operations cannot be synchronized from the destination database to the source database because DDL operations are ignored in the reverse direction.

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
    
    The RENAME TABLE operation may cause data inconsistency between the source and destination databases. For example, if you select a table as the object to be synchronized and rename the table during data synchronization, the data of this table is not synchronized to the destination database. To prevent this situation, select the database to which this table belongs as the object to be synchronized when you configure the data synchronization task. Make sure that the databases to which the table belongs before and after the RENAME TABLE operation are added to the objects to be synchronized.
    
-   TRUNCATE TABLE
    

## Permissions required for database accounts

**Database type**

**Required permissions**

**References**

Source PolarDB for MySQL cluster

Permissions of a privileged account

[Create and manage a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts#task-1580301) and [Manage the password of a database account](/help/en/polardb/polardb-for-mysql/user-guide/manage-database-account-password)

Destination PolarDB for MySQL cluster

## Procedure

1.  Use one of the following methods to go to the Data Synchronization page and select the region in which the data synchronization instance resides.
    
    ### DTS console
    
    1.  Log on to the [DTS console](https://dts.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Data Synchronization**.
        
    3.  In the upper-left corner of the page, select the region in which the data synchronization instance resides.
        
    
    ### DMS console
    
    **Note**
    
    The actual operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
    
    1.  Log on to the [DMS console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, move the pointer over **Data + AI** and choose **DTS (DTS)** > **Data Synchronization**.
        
    3.  From the drop-down list to the right of **Data Synchronization Tasks**, select the region in which the data synchronization instance resides.
        
    
2.  From the drop-down list to the right of **Data Synchronization Tasks**, select the region in which the data synchronization instance resides.
    
3.  Click **Create Task** to go to the task configuration page.
    
4.  **Optional.** Click **New Configuration Page** in the upper-right corner of the page.
    
    **Note**
    
    -   Skip this step if the **Back to Previous Version** button is displayed in the upper-right corner of the page.
        
    -   Specific parameters in the new and previous versions of the configuration page may be different. We recommend that you use the new version of the configuration page.
        
    
5.  Configure the source and destination databases. The following table describes the parameters.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the DTS task. DTS automatically generates a task name. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select a DMS database instance.**
    
    The database that you want to use. You can choose whether to use an existing database based on your business requirements.
    
    -   If you select an existing database, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing database, you must configure the following database information.
        
    
    **Note**
    
    -   In the DMS console, you can click **Add DMS Database Instance** to register a database with DMS. For more information, see [Register an Alibaba Cloud database instance](/help/en/dms/register-an-apsaradb-instance-1) and [Register a database hosted on a third-party cloud service or a self-managed database](/help/en/dms/register-a-database-hosted-on-a-third-party-cloud-service-or-a-self-managed-database).
        
    -   In the DTS console, register a database with DTS on the **Database Connections** page or the new configuration page. For more information, see [Manage database connections](/help/en/dts/user-guide/database-connection-management).
        
    
    **Database Type**
    
    The type of the source database. Select **PolarDB for MySQL**.
    
    **Access Method**
    
    The access method of the source database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the source PolarDB for MySQL cluster resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    In this example, a database of the current Alibaba Cloud account is used. Select **No**.
    
    **PolarDB Cluster ID**
    
    The ID of the source PolarDB for MySQL cluster.
    
    **Database Account**
    
    The database account of the source PolarDB for MySQL cluster. For more information about the permissions that are required for the database account, see the [Permissions required for database accounts](#section-pgf-xf6-duk) section of this topic.
    
    **Database Password**
    
    The password that is used to access the database.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database. You can configure this parameter based on your business requirements. For more information about the SSL encryption feature, see [Configure SSL encryption](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption).
    
    **Destination Database**
    
    **Select a DMS database instance.**
    
    The database that you want to use. You can choose whether to use an existing database based on your business requirements.
    
    -   If you select an existing database, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing database, you must configure the following database information.
        
    
    **Note**
    
    -   In the DMS console, you can click **Add DMS Database Instance** to register a database with DMS. For more information, see [Register an Alibaba Cloud database instance](/help/en/dms/register-an-apsaradb-instance-1) and [Register a database hosted on a third-party cloud service or a self-managed database](/help/en/dms/register-a-database-hosted-on-a-third-party-cloud-service-or-a-self-managed-database).
        
    -   In the DTS console, register a database with DTS on the **Database Connections** page or the new configuration page. For more information, see [Manage database connections](/help/en/dts/user-guide/database-connection-management).
        
    
    **Database Type**
    
    The type of the destination database. Select **PolarDB for MySQL**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the destination PolarDB for MySQL cluster resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    In this example, a database of the current Alibaba Cloud account is used. Select **No**.
    
    **PolarDB Cluster ID**
    
    The ID of the destination PolarDB for MySQL cluster.
    
    **Database Account**
    
    The database account of the destination PolarDB for MySQL cluster. For information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-pgf-xf6-duk) section of this topic.
    
    **Database Password**
    
    The password that is used to access the database.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database. You can configure this parameter based on your business requirements. For more information about the SSL encryption feature, see [Configure SSL encryption](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption).
    
6.  In the lower part of the page, click **Test Connectivity and Proceed**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL instance or an ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the database is deployed on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the whitelist of the database to allow DTS to access the database. For more information, see the "[CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353)" section of the Add the CIDR blocks of DTS servers topic.
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to synchronize data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or ECS security group rules and forbidding unauthorized CIDR blocks, or connecting the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
7.  Configure the objects to be synchronized.
    
    1.  In the **Configure Objects** step, configure the objects that you want to synchronize.
        
        **Parameter**
        
        **Description**
        
        **Synchronization Types**
        
        The synchronization types. By default, **Incremental Data Synchronization** is selected. You must also select **Schema Synchronization** and **Full Data Synchronization**. After the precheck is complete, DTS synchronizes the historical data of the selected objects from the source database to the destination cluster. The historical data is the basis for subsequent incremental synchronization.
        
        **Method to Migrate Triggers in Source Database**
        
        The method used to synchronize triggers from the source database. You can select a synchronization method based on your business requirements. If no triggers are to be synchronized, you do not need to configure this parameter. For more information, see [Synchronize or migrate triggers from the source database](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139).
        
        **Note**
        
        This parameter is available only if you select **Schema Synchronization** for the **Synchronization Types** parameter.
        
        **Synchronization Topology**
        
        The synchronization topology of the data synchronization instance. Select **Two-way Synchronization**.
        
        **Enable Exactly-Once Write**
        
        Specifies whether to enable the Exactly-Once write feature. If the objects to be synchronized include tables that do not have primary keys and UNIQUE constraints, select **Yes**. For more information, see [Synchronize tables without primary keys or UNIQUE constraints](/help/en/dts/user-guide/synchronize-tables-without-primary-keys-and-unique-constraints-from-the-source-database).
        
        **Exclude DDL Operations**
        
        -   **Yes**: excludes DDL operations.
            
        -   **No**: synchronizes DDL operations.
            
            **Important**
            
            DDL operations can be synchronized only in the forward direction from the source database to the destination database. DDL operations are ignored in the reverse direction from the destination database to the source database. Therefore, this parameter is displayed only when you configure the task in the forward direction.
            
        
        **Global Conflict Resolution Policy**
        
        Select an appropriate conflict resolution policy based on your actual business requirements. For more information about the types of conflicts that DTS can detect, see [Supported conflict detection](#2beb241d8dkpn).
        
        -   **TaskFailed**
            
            If a conflict occurs during data synchronization, the data synchronization task reports an error and exits the process. The task enters a failed state, and you must manually resolve the conflict.
            
        -   **Ignore**
            
            If a conflict occurs during data synchronization, the data synchronization task ignores the current statement and continues the process. The conflicting records in the destination database are used.
            
        -   **Overwrite**
            
            If a conflict occurs during data synchronization, the conflicting records in the destination database are overwritten.
            
        
        **Note**
        
        If a latency occurs when you pause or restart a data synchronization task, the selected conflict resolution policy does not take effect during the latency. By default, data in the destination database is overwritten by the data that is synchronized during the latency.
        
        **Processing Mode of Conflicting Tables**
        
        -   **Precheck and Report Errors**: checks whether the destination database contains tables that have the same names as tables in the source database. If the source and destination databases do not contain tables that have identical table names, the precheck is passed. Otherwise, an error is returned during the precheck, and the data synchronization task cannot be started.
            
            **Note**
            
            If the source and destination databases contain tables with identical names and the tables in the destination database cannot be deleted or renamed, you can use the object name mapping feature to rename the tables that are synchronized to the destination database. For more information, see [Map object names](/help/en/dts/user-guide/map-object-names#task-2101588).
            
        -   **Ignore Errors and Proceed**: skips the precheck for identical table names in the source and destination databases.
            
            **Warning**
            
            If you select **Ignore Errors and Proceed**, data inconsistency may occur and your business may be exposed to potential risks.
            
            -   If the source and destination databases have the same schema and a data record in the destination database has the same primary key value or unique key value as a data record in the source database:
                
                -   During full data synchronization, DTS does not synchronize the data record to the destination database. The existing data record in the destination database is retained.
                    
                -   During incremental data synchronization, DTS synchronizes the data record to the destination database. The existing data record in the destination database is overwritten.
                    
            -   If the source and destination databases have different schemas, data may fail to be initialized. In this case, only some columns are synchronized, or the data synchronization task fails. Proceed with caution.
                
            
        
        **Source Objects**
        
        Select one or more objects from the **Source Objects** section and click the ![向右](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3405433761/p511455.jpg) icon to add the objects to the **Selected Objects** section.
        
        **Note**
        
        You can select columns, tables, or databases as objects to synchronize. If you select tables or columns as the objects to be synchronized, DTS does not synchronize other objects such as views, triggers, and stored procedures to the destination database.
        
        **Selected Objects**
        
        -   To rename an object that you want to synchronize to the destination instance, right-click the object in the **Selected Objects** section. For more information, see the "[Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l)" section of the Map object names topic.
            
        -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see the "[Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib)" section of the Map object names topic.
            
        
        **Note**
        
        -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be synchronized.
            
        -   To select the SQL operations performed on a specific database or table, configure filter conditions, add additional columns to a destination table, or configure **Independent Conflict Resolution Policy** for incremental data synchronization, perform the following steps: In the **Selected Objects** section, right-click an object. In the dialog box that appears, configure the parameters based on your business requirements. For more information, see [Set filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729), [SQL operations that can be synchronized](#8610be1b07hzz), [Add additional columns to a destination table](/help/en/dts/user-guide/add-additional-columns-to-a-destination-table), and [Configure an independent conflict resolution policy](#9241c3f53ey9h).
            
        
    2.  Click **Next: Advanced Settings** to configure advanced settings.
        
        **Parameter**
        
        **Description**
        
        **Dedicated Cluster for Task Scheduling**
        
        By default, DTS schedules the task to the shared cluster if you do not specify a dedicated cluster. If you want to improve the stability of data synchronization tasks, purchase a dedicated cluster. For more information, see [What is a DTS dedicated cluster](/help/en/dts/user-guide/what-is-a-dts-dedicated-cluster#concept-2183964).
        
        **Select the engine type of the destination database**
        
        The engine type of the destination database. Select an engine type based on your business requirements. Valid values:
        
        -   **InnoDB**: the default storage engine.
            
        -   **X-Engine**: an online transaction processing (OLTP) database storage engine.
            
        
        **Copy the temporary table of the Online DDL tool that is generated in the source table to the destination database.**
        
        If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) or the gh-ost tool to perform online DDL operations on the source database, you can specify whether to synchronize the data of temporary tables generated by online DDL operations.
        
        **Important**
        
        You cannot use tools such as pt-online-schema-change to perform online DDL operations on the source database. Otherwise, the DTS task fails.
        
        -   **Yes**: DTS synchronizes the data of temporary tables generated by online DDL operations.
            
            **Note**
            
            If online DDL operations generate a large amount of data, the data synchronization task may take an extended period of time to complete.
            
        -   **No, Adapt to DMS Online DDL**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL operations that are performed by using [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) are synchronized.
            
            **Note**
            
            If you select this option, the tables in the destination database may be locked.
            
        -   **No, Adapt to gh-ost**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL operations that are performed by using the gh-ost tool are synchronized. You can use the default or custom regular expressions to filter out the shadow tables of the gh-ost tool and tables that are not required.
            
            **Note**
            
            If you select this option, the tables in the destination database may be locked.
            
        
        **Whether to Migrate Accounts**
        
        Specifies whether to synchronize the account information of the source database. You can configure this parameter based on your business requirements. If you select **Yes**, you must select the accounts that you want to synchronize, specify the hosts that can be logged on to by using the accounts, and check the permissions of the accounts. For more information, see [Migrate database accounts](/help/en/dts/user-guide/permissions-for-database-accounts-to-migrate-account-information).
        
        **Retry Time for Failed Connections**
        
        The retry time range for failed connections. If the source or destination database fails to be connected after the data synchronization task is started, DTS immediately retries a connection within the time range. Valid values: 10 to 1440. Unit: minutes. Default value: 720. We recommend that you set this parameter to a value greater than 30. If DTS reconnects to the source and destination databases within the specified time range, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
        
        **Note**
        
        -   If you specify different retry time ranges for multiple data synchronization tasks that have the same source or destination database, the shortest retry time range takes precedence.
            
        -   When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
            
        
        **Retry Time for Other Issues**
        
        The retry time range for other issues. For example, if the DDL or DML operations fail to be performed after the data synchronization task is started, DTS immediately retries the operations within the time range. Valid values: 1 to 1440. Unit: minutes. Default value: 10. We recommend that you set this parameter to a value greater than 10. If the failed operations are successfully performed within the specified time range, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
        
        **Important**
        
        The value of the **Retry Time for Other Issues** parameter must be smaller than the value of the **Retry Time for Failed Connections** parameter.
        
        **Enable Throttling for Full Data Synchronization**
        
        During full data synchronization, DTS uses the read and write resources of the source and destination databases. This may increase the load on the database servers. You can configure the **Queries per second (QPS) to the source database**, **RPS of Full Data Migration**, and **Data migration speed for full migration (MB/s)** parameters for full data synchronization tasks to reduce the load on the destination database server.
        
        **Note**
        
        You can configure this parameter only if **Full Data Synchronization** is selected for the **Synchronization Types** parameter.
        
        **Enable Throttling for Incremental Data Synchronization**
        
        Specifies whether to enable throttling for incremental data synchronization. You can enable throttling for incremental data synchronization based on your business requirements. To configure throttling, you must configure the **RPS of Incremental Data Synchronization** and **Data synchronization speed for incremental synchronization (MB/s)** parameters. This reduces the load on the destination database server.
        
        **Whether to delete SQL operations on heartbeat tables of forward and reverse tasks**
        
        Specifies whether to write SQL operations on heartbeat tables to the source database while the DTS instance is running. Valid values:
        
        -   **Yes**: does not write SQL operations on heartbeat tables. In this case, a latency of the DTS instance may be displayed.
            
        -   **No**: writes SQL operations on heartbeat tables. In this case, features such as physical backup and cloning of the source database may be affected.
            
        
        **Environment Tag**
        
        The environment tag that is used to identify the DTS instance. You can select an environment tag based on your business requirements. In this example, you do not need to configure this parameter.
        
        **Configure ETL**
        
        Specifies whether to enable the extract, transform, and load (ETL) feature. For more information, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705) Valid values:
        
        -   **Yes**: configures the ETL feature. You can enter data processing statements in the code editor. For more information, see [Configure ETL in a data migration or data synchronization task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
            
        -   **No**: does not configure the ETL feature.
            
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data synchronization task. If the task fails or the synchronization latency exceeds the specified threshold, alert contacts will receive notifications. Valid values:
        
        -   **No**: does not enable alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see the "[Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz)" section of the Configure monitoring and alerting topic.
            
        
    3.  Click **Next Step: Data Verification** to configure data verification.
        
        For more information about how to use the data verification feature, see [Configure a data verification task](/help/en/dts/user-guide/enable-data-verification#task-2249288).
        
    
8.  Save the task settings and run a precheck.
    
    -   To view the parameters to be specified when you call the relevant API operation to configure the DTS task, move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters**.
        
    -   If you do not need to view or have viewed the parameters, click **Next: Save Task Settings and Precheck** in the lower part of the page.
        
    
    **Note**
    
    -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
        
    -   If the data synchronization task fails the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, rerun the precheck.
        
    -   If an alert is triggered for an item during the precheck:
        
        -   If an alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issue. Then, run a precheck again.
            
        -   If an alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur, and your business may be exposed to potential risks.
            
    
9.  Wait until the **Success Rate** becomes **100%**. Then, click **Next: Purchase Instance**.
    
10.  Purchase a data synchronization instance.
     
     1.  On the **buy** page, configure the Billing Method and Instance Class parameters for the data synchronization instance. The following table describes the parameters.
         
         **Section**
         
         **Parameter**
         
         **Description**
         
         **New Instance Class**
         
         Billing Method
         
         -   Subscription: You pay for a subscription when you create a data synchronization instance. The subscription billing method is more cost-effective than the pay-as-you-go billing method for long-term use.
             
         -   Pay-as-you-go: A pay-as-you-go instance is billed on an hourly basis. The pay-as-you-go billing method is suitable for short-term use. If you no longer require a pay-as-you-go data synchronization instance, you can release the instance to reduce costs.
             
         
         Resource Group Settings
         
         The resource group to which the data synchronization instance belongs. Default value: **default resource group**. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb)
         
         Instance Class
         
         DTS provides instance classes that vary in synchronization speed. You can select an instance class based on your business requirements. For more information, see [Instance classes of data synchronization instances](/help/en/dts/product-overview/specifications-of-data-synchronization-channels#concept-26605-zh).
         
         Subscription Duration
         
         If you select the subscription billing method, specify the subscription duration and the number of data synchronization instances that you want to create. The subscription duration can be one to nine months, one year, two years, three years, or five years.
         
         **Note**
         
         This parameter is available only if you select the **Subscription** billing method.
         
     2.  Read and select **Data Transmission Service (Pay-as-you-go) Service Terms**.
         
     3.  Click **Buy and Start**. In the dialog box that appears, click ****OK****.
         
         You can view the progress of the task in the task list.
         
     
11.  Configure a data synchronization task in the reverse direction.
     
     1.  Wait until the initial synchronization is complete and the **Status** of the data synchronization task in the forward direction changes to **Running**.
         
     2.  Find the data synchronization task in the reverse direction and click **Configure Task**.
         
     3.  Repeat [Step 5](#439de6fda24qe) to [Step 8](#78d6966885qnq) to configure the data synchronization task in the reverse direction.
         
         **Important**
         
         -   When you configure the reverse synchronization task, make sure that you select the correct source and destination instances. The source instance in the reverse direction is the destination instance in the forward direction. The destination instance in the reverse direction is the source instance in the forward direction. Make sure that the parameter settings, such as the database name, account, and password, are valid.
             
         -   When you configure the source and destination databases of the data synchronization task in the reverse direction, the **Instance Region** parameter cannot be modified. The number of parameters to configure for a data synchronization task in the reverse direction is less than that for a data synchronization task in the forward direction. Configure the parameters that are displayed in the console.
             
         -   When you configure **Processing Mode of Conflicting Tables** for a synchronization task in the reverse direction, make sure that the tables that have been synchronized to the destination instance in the forward direction are ignored.
             
         -   You cannot select the objects in the **Selected Objects** list of the data synchronization task in the forward direction for the data synchronization task in the reverse direction.
             
         -   We recommend that you do not use the object name mapping feature when you configure the data synchronization task in the reverse direction. Otherwise, data inconsistency may occur.
             
         
     4.  Wait until **Success Rate** becomes **100%**. Then, click **Back**.
         
     
12.  Wait until the **Status** of the synchronization tasks in both forward and reverse directions changes to **Running**. This indicates that the configuration of two-way data synchronization is complete.
     

## Configure an independent conflict resolution policy

**Note**

You can configure an independent conflict resolution policy only for incremental data synchronization.

1.  In the **Selected Objects** section, right-click a database or table that you want to synchronize.
    
2.  Enable the independent conflict resolution policy.
    
    -   Database-level conflict resolution policy
        
        1.  In the **Independent Conflict Resolution Policy** section of the dialog box that appears, set **Enable Independent Conflict Resolution Policy** to **Yes**.
            
        2.  Select a value for **Conflict Resolution Policy**.
            
            -   **TaskFailed**
                
                If a conflict occurs during data synchronization, the data synchronization task reports an error and exits the process. The task enters a failed state, and you must manually resolve the conflict.
                
            -   **Ignore**
                
                If a conflict occurs during data synchronization, the data synchronization task ignores the current statement and continues the process. The conflicting records in the destination database are used.
                
            -   **Overwrite**
                
                If a conflict occurs during data synchronization, the conflicting records in the destination database are overwritten.
                
            -   **UseMax**
                
                If a conflict occurs during data synchronization, the two records in the conflicting columns are compared and the record that represents a larger value is written to the destination database. If this record does not exist or the field type of this record does not meet the requirements, the effect of UseMax is equivalent to that of **Overwrite**.
                
            -   **UseMin**
                
                If a conflict occurs during data synchronization, the two records in the conflicting columns are compared and the record that represents a smaller value is written to the destination database. If this record does not exist or the field type of this record does not meet the requirements, the effect of UseMin is equivalent to that of **Ignore**.
                
            
        3.  In the **Column Name** field, enter the name of a column to which the independent conflict resolution policy applies.
            
            **Note**
            
            -   If the name of the column is changed by using the object name mapping feature, enter the new column name.
                
            -   You can click **Add Column** to the right of **Columns for Conflict Detection** to add more columns to which the independent conflict resolution policy applies.
                
            
        
    -   Table-level conflict resolution policy
        
        1.  In the **Columns** section of the dialog box that appears, select **Independent Conflict Resolution Policy**.
            
        2.  In the **Columns for Conflict Detection** column, select the columns to which the independent conflict resolution policy applies.
            
            **Note**
            
            -   By default, the columns with primary keys and UNIQUE constraints are selected.
                
            -   The global conflict resolution policy does not apply to the columns for which an independent conflict resolution policy is specified.
                
            
        3.  Select a value for **Conflict Resolution Policy**.
            
            **Note**
            
            If the values of **Columns for Conflict Detection** are automatically selected by the system, you cannot select **UseMax** or **UseMin** for Conflict Resolution Policy.
            
            -   **TaskFailed**
                
                If a conflict occurs during data synchronization, the data synchronization task reports an error and exits the process. The task enters a failed state, and you must manually resolve the conflict.
                
            -   **Ignore**
                
                If a conflict occurs during data synchronization, the data synchronization task ignores the current statement and continues the process. The conflicting records in the destination database are used.
                
            -   **Overwrite**
                
                If a conflict occurs during data synchronization, the conflicting records in the destination database are overwritten.
                
            -   **UseMax**
                
                If a conflict occurs during data synchronization, the two records in the conflicting columns are compared and the record that represents a larger value is written to the destination database. If this record does not exist or the field type of this record does not meet the requirements, the effect of UseMax is equivalent to that of **Overwrite**.
                
            -   **UseMin**
                
                If a conflict occurs during data synchronization, the two records in the conflicting columns are compared and the record that represents a smaller value is written to the destination database. If this record does not exist or the field type of this record does not meet the requirements, the effect of UseMin is equivalent to that of **Ignore**.
                
            
        
    
3.  Click **OK**.
