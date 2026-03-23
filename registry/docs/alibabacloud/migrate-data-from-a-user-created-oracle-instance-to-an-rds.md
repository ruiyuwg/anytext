This topic describes how to migrate data from a self-managed Oracle database to an ApsaraDB RDS for MySQL instance by using Data Transmission Service (DTS). DTS supports schema migration, full data migration, and incremental data migration. When you migrate data from a self-managed Oracle database to an RDS instance, you can select all of the supported migration types to ensure service continuity.

## Prerequisites

-   The source self-managed Oracle database and the destination ApsaraDB RDS for MySQL instance are created.
    
    **Note**
    
    -   For more information about how to create an ApsaraDB RDS for MySQL instance, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
        
    -   For more information about the supported versions of the source database and the destination instance, see [Overview of data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios#concept-26618-zh).
        
    
-   The self-managed Oracle database is running in ARCHIVELOG mode. Archived log files are accessible and an appropriate retention period is set for archived log files. For more information, see [Managing Archived Redo Log Files](https://docs.oracle.com/database/121/ADMIN/archredo.htm#ADMIN008).
    
-   The supplemental logging feature is enabled for the self-managed Oracle database, and the SUPPLEMENTAL\_LOG\_DATA\_PK and SUPPLEMENTAL\_LOG\_DATA\_UI parameters are set to Yes. For more information, see [Supplemental Logging](https://docs.oracle.com/database/121/SUTIL/GUID-D857AF96-AC24-4CA1-B620-8EA3DF30D72E.htm#SUTIL1582).
    
-   The destination ApsaraDB RDS for MySQL instance is created. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
    

## Limits

**Note**

-   During schema migration, DTS migrates foreign keys from the source database to the destination database.
    
-   During full data migration and incremental data migration, DTS temporarily disables the constraint check and cascade operations on foreign keys at the session level. If you perform the cascade update and delete operations on the source database during data migration, data inconsistency may occur.
    

**Category**

**Description**

Limits on the source database

-   Bandwidth requirements: The server to which the source database belongs must have sufficient outbound bandwidth. Otherwise, the data migration speed decreases.
    
-   If the source database is an Oracle RAC database connected over Express Connect, you must specify a VIP for the database when you configure the source database.
    
-   If the source database is an Oracle RAC database connected over Express Connect, VPN Gateway, Smart Access Gateway, Database Gateway, or Cloud Enterprise Network (CEN), you can use a single VIP rather than a Single Client Access Name (SCAN) IP address when you configure the source database. After you specify the VIP, node failover is not supported for the Oracle RAC database.
    
-   If a field in the source Oracle database contains an empty string of the VARCHAR2 type, which is evaluated as null in the Oracle database, and the corresponding field in the destination database has a NOT NULL constraint, the migration task fails.
    
-   Requirements for the objects to be migrated:
    
    -   The tables to be migrated must have PRIMARY KEY or UNIQUE constraints, and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
        
    -   If the version of your Oracle database is 12c or later, the names of the tables to be migrated cannot exceed 30 bytes in length.
        
    -   If you select tables as the objects to be migrated and you need to modify the tables in the destination database, such as renaming tables or columns, up to 1,000 tables can be migrated in a single data migration task. If you run a task to migrate more than 1,000 tables, a request error occurs. In this case, we recommend that you configure multiple tasks to migrate the tables in batches, or configure a task to migrate the entire database.
        
-   To perform incremental migration, you must make sure that the following requirements are met:
    
    -   The redo logging and archive logging must be enabled.
        
    -   If you perform only incremental data migration, the redo logs and archive logs of the source database must be stored for more than 24 hours. If you perform both full data migration and incremental data migration, the redo logs and archive logs of the source database must be stored for at least seven days. After full data migration is complete, you can set the retention period to more than 24 hours. Otherwise, Data Transmission Service (DTS) may fail to obtain the redo logs and archive logs and the task may fail. In extreme cases, data inconsistency or loss may occur. Make sure that you set the retention period of redo logs and archive logs based on the preceding requirements. Otherwise, the Service Level Agreement (SLA) of DTS does not guarantee service reliability or performance.
        
-   Limits on operations to be performed on the source database:
    
    -   During schema migration and full data migration, do not perform DDL operations to change the schemas of databases or tables. Otherwise, the data migration task fails.
        
    -   If you perform only full data migration, do not write data to the source database during data migration. Otherwise, data inconsistency may occur between the source and destination databases. To ensure data consistency, we recommend that you select schema migration, full data migration, and incremental data migration as the migration types.
        
    -   During data migration, do not update LONGTEXT fields. Otherwise, the data migration task fails.
        

Other limits

-   During incremental data synchronization, do not use Oracle Data Pump to write data to the source database. Otherwise, data loss may occur.
    
-   External tables cannot be migrated.
    
-   Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. During full data migration, DTS uses read and write resources of the source and destination databases. This may increase the loads of the database servers.
    
-   During full data migration, concurrent INSERT operations cause fragmentation in the tables of the destination cluster. After full data migration is complete, the size of used tablespace of the destination cluster is larger than that of the source database.
    
-   DTS attempts to resume the data migration task that failed within the last seven days. Before you switch workloads to the destination cluster, you must stop or release the failed tasks. You can also execute the `REVOKE` statement to revoke the write permissions from the accounts that are used by DTS to access the destination database. Otherwise, the data in the source database overwrites the data in the destination database after the data migration task is resumed.
    
-   If DDL statements fail to be executed in the destination database, the DTS task continues to run. You can view the DDL statements that fail to be executed in task logs. For more information about how to view task logs, see [View task logs](/help/en/dts/user-guide/view-task-logs-1).
    
-   Make sure that the character sets of the source and destination databases are compatible. Otherwise, data inconsistency may occur or the migration task may fail.
    
-   We recommend that you use the schema migration feature of DTS. Otherwise, the migration task may fail due to incompatible data types.
    
-   The time zones of the source and destination databases must be the same.
    
-   If you write column names that differ only in capitalization to the same table in the destination MySQL database, the data migration result may not meet your expectations because the column names in MySQL databases are not case-sensitive.
    
-   After data migration is complete, that is, the **Status** of the instance changes to **Completed**, we recommend that you run the `analyze table <table name>` command to check whether data is written to the destination table. For example, if a high-availability (HA) switchover is triggered in the destination MySQL database, data may be written only to the memory. As a result, data loss occurs.
    
-   If a DTS task fails to run, DTS technical support will try to restore the task within 8 hours. During the restoration, the task may be restarted, and the parameters of the task may be modified.
    
    **Note**
    
    Only the parameters of the task may be modified. The parameters of databases are not modified. The parameters that may be modified include but are not limited to the parameters in the "[Modify instance parameters](/help/en/dts/user-guide/modify-the-parameters-of-a-dts-instance#section-ys2-2c2-wzo)" section of the Modify the parameters of a DTS instance topic.
    

Special cases

If the destination database runs on an ApsaraDB RDS for MySQL instance, take note of the following limits:

-   Table names in the ApsaraDB RDS for MySQL instance are case-insensitive. If a table name in the source Oracle database contains uppercase letters, ApsaraDB RDS for MySQL converts all uppercase letters to lowercase letters before a table is created.
    
    If the source Oracle database contains identical table names that differ only in capitalization, these table names are identified as duplicates. As a result, the "The object already exists" message may be displayed during schema migration. To prevent name conflicts in the destination database, you can use the object name mapping feature to capitalize the table names when you configure the objects to be migrated. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
-   DTS automatically creates a destination database in the ApsaraDB RDS for MySQL instance. However, if the name of the source database is invalid, you must manually create a database in the ApsaraDB RDS for MySQL instance before you configure the data migration task. For more information, see [Manage databases](/help/en/rds/apsaradb-rds-for-mysql/create-a-database-for-an-apsaradb-rds-for-mysql-instance#concept-cg3-ljq-wdb).
    

## Billing

**Migration type**

**Instance configuration fee**

**Internet traffic fee**

Schema migration and full data migration

Free of charge.

When the **Access Method** parameter of the destination database is set to **Public IP Address**, you are charged for Internet traffic. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

Incremental data migration

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Migration types

**Migration type**

**Description**

Schema migration

DTS migrates the schemas of objects to the destination database.

DTS has the following limits on schema migration for tables and indexes:

-   DTS does not support schema migration for nested tables. DTS converts clustered tables and index-organized tables (IOTs) into common tables in the destination database.
    
-   DTS does not support schema migration for function-based indexes, domain indexes, bitmap indexes, or reverse indexes.
    

**Note**

DTS does not support schema migration for the following types of objects: view, synonym, stored procedure, function, package, and user-defined type.

**Warning**

In this topic, the source and destination databases are heterogeneous databases. The schemas of the source and destination databases may be inconsistent after schema migration. We recommend that you evaluate the impact of data type conversion on your business. For more information, see [Data type mappings between heterogeneous databases](/help/en/dts/user-guide/data-type-mappings-between-heterogeneous-databases#concept-1813831).

Full data migration

DTS migrates the existing data of the required objects from the self-managed Oracle database to the destination database.

Incremental data migration

After full data migration is complete, DTS retrieves redo log files from the self-managed Oracle database. Then, DTS migrates incremental data from the self-managed Oracle database to the destination database.

Incremental data migration ensures service continuity of self-managed applications during data migration.

## SQL operations that can be incrementally migrated

**Operation type**

**SQL statement**

DML

INSERT, UPDATE, and DELETE

DDL

-   CREATE TABLE
    
    **Note**
    
    DTS does not migrate the CREATE TABLE operations that are performed to create tables in which functions are nested.
    
-   ALTER TABLE, ADD COLUMN, DROP COLUMN, RENAME COLUMN, and ADD INDEX
    
-   DROP TABLE
    
-   RENAME TABLE, TRUNCATE TABLE, and CREATE INDEX
    
    **Note**
    
    Only the CREATE INDEX operations that are performed within the current database account can be migrated.
    

## Preparations

Log on to the self-managed Oracle database, create an account that you want to use to collect data, and then grant permissions to the account.

**Note**

If you have created a database account and the account has the permissions that are described in the following table, you can skip this step.

**Database**

**Schema migration**

**Full data migration**

**Incremental data migration**

Self-managed Oracle database

Permissions of the schema owner

Permissions of the schema owner

Fine-grained permissions

ApsaraDB RDS for MySQL instance

The write permissions on the destination database

To create a database account and grant permissions to the database account, perform the following operations:

-   Self-managed Oracle database: [Prepare a database account](/help/en/dts/user-guide/configure-the-oracle-database-and-create-an-account#546a5ab1643wq), [CREATE USER](https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_8003.htm), and [GRANT](https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_9013.htm)
    
-   ApsaraDB RDS for MySQL instance: [Create an account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance#concept-kxw-k1p-ydb) and [Modify account permissions](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance#concept-ys2-4bp-ydb).
    

**Important**

If you need to migrate incremental data, you also need to enable archiving and supplementary logging to obtain incremental changes to the data. For more information, please refer to [Configure an Oracle database](/help/en/dts/user-guide/configure-the-oracle-database-and-create-an-account#4f5033b1646ss).

## Data type mappings

For more information, see [Data type mappings between heterogeneous databases](/help/en/dts/user-guide/data-type-mappings-between-heterogeneous-databases#concept-1813831).

## Procedure

1.  Use one of the following methods to go to the Data Migration page and select the region in which the data migration instance resides.
    
    ### DTS console
    
    1.  Log on to the [DTS console](https://dts.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Data Migration**.
        
    3.  In the upper-left corner of the page, select the region in which the data migration instance resides.
        
    
    ### DMS console
    
    **Note**
    
    The actual operation may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements).
    
    1.  Log on to the [DMS console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, move the pointer over **Data + AI** > **DTS (DTS)** > **Data Migration**.
        
    3.  From the drop-down list to the right of **Data Migration Tasks**, select the region in which the data synchronization instance resides.
        
    
2.  Click **Create Task** to go to the task configuration page.
    
3.  Configure the source and destination databases. The following table describes the parameters.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed in the upper part of the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the DTS task. DTS automatically generates a task name. We recommend that you specify an informative name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Database Type**
    
    The type of the source database. Select **Oracle**.
    
    **Access Method**
    
    The access method of the source database. In this example, **Public IP Address** is selected.
    
    **Note**
    
    If you select other access methods, you must set up the environment that is required for the self-managed Oracle database. For more information, see [Preparation overview](/help/en/dts/user-guide/preparation-overview#concept-2364477).
    
    **Instance Region**
    
    The region in which the source Oracle database resides.
    
    **Hostname or IP address**
    
    The endpoint that is used to connect to the self-managed Oracle database.
    
    **Port Number**
    
    The service port number of the self-managed Oracle database. Default value: **1521**.
    
    **Note**
    
    In this example, the service port of the self-managed Oracle database must be accessible over the Internet.
    
    **Oracle Type**
    
    -   The architecture of the source Oracle database. If you select **Non-RAC Instance**, you must configure the **SID** parameter.
        
    -   If you select **RAC or PDB Instance**, you must configure the **Service Name** parameter.
        
    
    In this example, **Non-RAC Instance** is selected.
    
    **Database Account**
    
    The account of the source Oracle database. For more information about the permissions that are required for the account, see the [Preparations](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-an-apsaradb-rds-for-mysql-instance-1#section-twr-1es-5w6) section of this topic.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Destination Database**
    
    **Database Type**
    
    The type of the destination database. Select **MySQL**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the destination ApsaraDB RDS for MySQL instance resides.
    
    **RDS Instance ID**
    
    The ID of the destination ApsaraDB RDS for MySQL instance.
    
    **Database Account**
    
    The database account of the destination ApsaraDB RDS for MySQL instance. For more information about the permissions that are required for the account, see the [Preparations](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-an-apsaradb-rds-for-mysql-instance-1#section-twr-1es-5w6) section of this topic.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database instance. Select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you want to set this parameter to **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS for MySQL instance before you configure the DTS task. For more information, see [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb).
    
4.  In the lower part of the page, click **Test Connectivity and Proceed**, and then click **Test Connectivity** in the **CIDR Blocks of DTS Servers** dialog box that appears.
    
    **Note**
    
    Make sure that the CIDR blocks of DTS servers can be automatically or manually added to the security settings of the source and destination databases to allow access from DTS servers. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases).
    
5.  Configure the objects to be migrated.
    
    1.  On the **Configure Objects** page, configure the objects that you want to migrate.
        
        **Parameter**
        
        **Description**
        
        **Migration Types**
        
        -   To perform only full data migration, select **Schema Migration** and **Full Data Migration**.
            
        -   To ensure service continuity during data migration, select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
            
        
        **Note**
        
        -   If you do not select **Schema Migration**, make sure a database and a table are created in the destination database to receive data and the object name mapping feature is enabled in **Selected Objects**.
            
        -   If you do not select **Incremental Data Migration**, we recommend that you do not write data to the source database during data migration. This ensures data consistency between the source and destination databases.
            
        
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
        
        Select one or more objects from the **Source Objects** section. Click the ![向右小箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to add the objects to the **Selected Objects** section.
        
        **Selected Objects**
        
        -   To rename an object that you want to migrate to the destination instance, right-click the object in the **Selected Objects** section. For more information, see [Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
            
        -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see [Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib).
            
        
        **Note**
        
        -   If you use the object name mapping feature to rename an object, other objects that depend on the object may fail to be migrated.
            
        -   To specify WHERE conditions to filter data, right-click a table in the **Selected Objects** section. In the dialog box that appears, specify the conditions. For more information, see [Specify filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
            
        -   To incrementally migrate SQL operations performed on a specific database or table, right-click the object in the **Selected Objects** section. In the dialog box that appears, select the SQL operations that you want to incrementally migrate. For more information about the SQL statements that can be incrementally migrated, see the [SQL operations that can be incrementally migrated](/help/en/dts/user-guide/migrate-data-from-a-self-managed-oracle-database-to-an-apsaradb-rds-for-mysql-instance-1#section-k5s-hvr-q1t) section of this topic.
            
        
    2.  Click **Next: Advanced Settings** to configure advanced settings.
        
        **Parameter**
        
        **Description**
        
        **Dedicated Cluster for Task Scheduling**
        
        By default, DTS schedules the data migration task to the shared cluster if you do not specify a dedicated cluster. If you want to improve the stability of data migration tasks, purchase a dedicated cluster. For more information, see [What is a DTS dedicated cluster](/help/en/dts/user-guide/what-is-a-dts-dedicated-cluster#concept-2183964).
        
        **Retry Time for Failed Connections**
        
        The retry time range for failed connections. If the source or destination database fails to be connected after the data migration task is started, DTS immediately retries a connection within the retry time range. Valid values: 10 to 1,440. Unit: minutes. Default value: 720. We recommend that you set the parameter to a value greater than 30. If DTS is reconnected to the source and destination databases within the specified retry time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
        
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
        
        The environment tag that is used to identify the DTS instance. You can select an environment tag based on your business requirements. In this example, no environment tag is added.
        
        **Actual Write Code**
        
        The encoding format in which data is written to the destination database. Select an encoding format based on your business requirements.
        
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
        
    
6.  Save the task settings and run a precheck.
    
    -   To view the parameters to be specified when you call the relevant API operation to configure the DTS task, move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters**.
        
    -   If you do not need to view or have viewed the parameters, click **Next: Save Task Settings and Precheck** in the lower part of the page.
        
    
    **Note**
    
    -   Before you can start the data migration task, DTS performs a precheck. You can start the data migration task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, run a precheck again.
        
    -   If an alert is triggered for an item during the precheck:
        
        -   If an alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issues. Then, run a precheck again.
            
        -   If the alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur, and your business may be exposed to potential risks.
            
    
7.  Purchase the instance.
    
    1.  Wait until **Success Rate** becomes **100%**. Then, click **Next: Purchase Instance**.
        
    2.  On the **Purchase Instance** page, configure the Instance Class parameter for the data migration instance. The following table describes the parameters.
        
        **Section**
        
        **Parameter**
        
        **Description**
        
        **New Instance Class**
        
        **Resource Group**
        
        The resource group to which the data migration instance belongs. Default value: **default resource group**. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb)
        
        **Instance Class**
        
        DTS provides instance classes that vary in the migration speed. You can select an instance class based on your business scenario. For more information, see [Instance classes of data migration instances](/help/en/dts/product-overview/specifications-of-data-migration-instances#concept-26606-zh).
        
    3.  Read and agree to **Data Transmission Service (Pay-as-you-go) Service Terms** by selecting the check box.
        
    4.  Click **Buy and Start**. In the message that appears, click **OK**.
        
        You can view the progress of the task on the **Data Migration** page.
        
        **Note**
        
        -   If a data migration task cannot be used to migrate incremental data, the task automatically stops. The **Completed** is displayed in the **Status** section.
            
        -   If a data migration task can be used to migrate incremental data, the task does not automatically stop. The incremental data migration task never stops or completes. The **Running** is displayed in the **Status** section.
