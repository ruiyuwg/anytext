This topic describes how to perform schema migration, full data migration, and incremental data migration between ApsaraDB RDS for PostgreSQL instances by using Data Transmission Service (DTS). When you migrate data between ApsaraDB RDS for PostgreSQL instances, you can select all supported migration types to ensure service continuity.

## Prerequisites

-   The source and destination ApsaraDB RDS for PostgreSQL instances are created. For more information, see [Create an instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance).
    
    **Note**
    
    -   For information about the supported versions of the source and destination databases, see [Overview of data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios#section-zfb-zwa-9zh).
        
    -   To ensure compatibility, the version of the destination database must be the same as or later than that of the source database. If the version of the destination database is earlier than that of the source database, database compatibility issues may occur.
        
    
-   The available storage space of the destination ApsaraDB RDS for PostgreSQL instance must be larger than the total size of data in the source ApsaraDB RDS for PostgreSQL instance.
    

## Usage notes

**Category**

**Description**

Limits on the source database

-   The tables to be migrated must have PRIMARY KEY or UNIQUE constraints, and all fields must be unique. Otherwise, the destination cluster may contain duplicate data records.
    
    **Note**
    
    If a table that you want to use to receive data is not created by using DTS (**Schema Synchronization** is not selected for the **Synchronization Types** parameter), make sure that the table and the table to be migrated from the source database have the same PRIMARY KEY or NOT NULL UNIQUE constraints. Otherwise, the destination database may contain duplicate data records.
    
    The name of the source database cannot contain hyphens (-). Example: dts-testdata.
    
-   If you select tables as the objects to be migrated and you need to edit the tables, such as renaming tables or columns in the destination database, up to 1,000 tables can be migrated in a single data migration task. If you run a task to migrate more than 1,000 tables, a request error occurs. In this case, we recommend that you configure multiple tasks to migrate the tables, or configure a task to migrate the entire database.
    
-   DTS cannot migrate temporary tables in the source database, internal triggers, or some internal procedures and functions written in the C programming language. DTS can migrate custom parameters of the COMPOSITE, ENUM, and RANGE types. The tables to be migrated must have the PRIMARY KEY, FOREIGN KEY, UNIQUE, or CHECK constraints.
    
-   If you need to migrate incremental data, you must make sure that the following requirements are met:
    
    -   The value of the wal\_level parameter must be set to logical.
        
    -   If you perform only incremental data migration, the write-ahead logging (WAL) logs of the source database must be stored for more than 24 hours. If you perform both full data migration and incremental data migration, the WAL logs of the source database must be stored for at least seven days. Otherwise, Data Transmission Service (DTS) may fail to obtain the WAL logs and the task may fail. In exceptional circumstances, data inconsistency or loss may occur. After full data migration is complete, you can set the retention period to more than 24 hours. Make sure that you set the retention period of WAL logs based on the preceding requirements. Otherwise, the service reliability or performance in the Service Level Agreement (SLA) of DTS may not be guaranteed.
        
-   Limits on operations to perform on the source database:
    
    -   During schema migration and full data migration, do not perform DDL operations to change the schemas of databases or tables. Otherwise, the data migration task fails.
        
    -   If you perform only full data migration, do not write data to the source database during data migration. Otherwise, data inconsistency between the source and destination databases occurs. To ensure data consistency, we recommend that you select schema migration, full data migration, and incremental data migration as the migration types.
        
    -   The logical subscription from source database has limits on the usage of DTS. If the size of a single data to be migrated from the source database exceeds 256 MB upon incremental data changes, the data migration instance that is running fails to run and cannot be recovered. You need to configure the task again.
        
-   If the source database has one or more long-running transactions and incremental data is migrated in the data migration task, the WAL logs that are generated before the long-running transactions are committed may be accumulated. As a result, the disk space of the source database may be insufficient.
    
-   If a major version upgrade for the source database of a data migration instance that is running is performed, the instance fails to run and cannot be recovered. You need to configure the task again.
    

Other limits

-   If you need to perform a primary/secondary switchover on the source ApsaraDB RDS for PostgreSQL instance, the Logical Replication Slot Failover feature must be enabled. This prevents logical subscriptions from being interrupted and ensures that your data migration task can run as expected. For more information, see [Logical Replication Slot Failover](/help/en/rds/apsaradb-rds-for-postgresql/logical-replication-slot-failover#task-2488073).
    
-   A single data migration task can migrate data from only one database. To migrate data from multiple databases, you must create a data migration task for each database.
    
-   A table that can be inherited across schemas cannot be migrated.
    
-   If the table to be migrated includes SERIAL field, a sequence is created in the source database. If you select **Schema Migration** as the **Migration Types** when you configure the **Source Objects** parameter, we recommend that you select **Sequence** or a complete schema migration. Otherwise, the migration instance fails to run.
    
-   If you select a schema as the object to be migrated and create a table in the schema or execute the RENAME statement to rename a table in the schema during incremental data migration, you must execute the `ALTER TABLE schema.table REPLICA IDENTITY FULL;` statement before you write data to the table. When you execute this statement, we recommend that you do not lock the table. Otherwise, a deadlock occurs.
    
    **Note**
    
    -   Replace the `schema` and `table` in the preceding sample statement with the actual schema name and table name.
        
    -   We recommend that you perform this operation during off-peak hours.
        
    
-   DTS does not check the validity of metadata, such as sequences. You must manually check the validity of metadata.
    
-   After your workloads are switched to the destination database, new sequences do not increment from the maximum value of the sequences in the source database. Therefore, before you switch your workloads to the destination database, you must update the starting value of sequences in the destination database.
    
-   DTS creates the following temporary tables in the source database to obtain the DDL statements of incremental data, the schemas of incremental tables, and the heartbeat information. During data migration, do not delete temporary tables in the source database. Otherwise, exceptions occur. After the DTS instance is released, temporary tables are automatically deleted.
    
    `public.dts_pg_class`, `public.dts_pg_attribute`, `public.dts_pg_type`, `public.dts_pg_enum`, `public.dts_postgres_heartbeat`, `public.dts_ddl_command`, `public.dts_args_session`, and `public.aliyun_dts_instance`.
    
-   If you run a full or incremental data migration task, the tables to be migrated from the source database contain foreign keys, triggers, or event triggers, and the account of the destination database is a privileged account or an account that has the permissions of the superuser role, DTS temporarily sets the session\_replication\_role parameter to replica at the session level during full or incremental data migration. If the account of the destination database does not have the permissions, you must manually set the session\_replication\_role parameter to replica in the destination database. After the session\_replication\_role parameter is set to replica during full or incremental data migration, if a cascade update or delete operation is performed in the source database, data inconsistency may occur. After the data migration task is released, you can change the value of the session\_replication\_role parameter to origin.
    
-   To ensure that the latency of incremental data migration is accurate, DTS creates a heartbeat table named `dts_postgres_heartbeat` in the source database.
    
-   During incremental data migration, DTS creates a replication slot in the source database to replicate data. The replication slot is prefixed with `dts_sync_`. By using this replication slot, DTS can obtain the incremental logs of the source database within the last 15 minutes.
    
    **Note**
    
    -   After the DTS instance is released, the replication slot is automatically deleted. If you modify the password of the source database or delete the IP addresses of DTS from the IP address whitelist, the replication slot cannot be automatically deleted. In that case, you must manually delete the replication slot from the source database to prevent the replication slot from piling up.
        
    -   If the data migration task is released or fails, DTS automatically deletes the replication slot. If a primary/secondary switchover is performed on the source ApsaraDB for PostgreSQL instance, you must log on to the secondary instance to delete the replication slot.
        
    
-   Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. During full data migration, DTS uses the read and write resources of the source and destination databases. This may increase the loads of the database servers.
    
-   During full data migration, concurrent INSERT operations cause fragmentation in the tables of the destination database. After full data migration is complete, the tablespace of the destination database is larger than that of the source database.
    
-   You must ensure that the precision settings for columns of the FLOAT or DOUBLE data type meet your business requirements. DTS uses the `ROUND(COLUMN,PRECISION)` function to retrieve values from columns of the FLOAT or DOUBLE data type. If you do not specify a precision, DTS sets the precision for the FLOAT data type to 38 digits and the precision for the DOUBLE data type to 308 digits.
    
-   DTS attempts to resume a data migration task that failed within the last seven days. Before you switch workloads to the destination cluster, you must stop or release the failed tasks. You can also execute the `REVOKE` statement to revoke the write permissions from the accounts that are used by DTS to access the destination database. Otherwise, the data in the source database will overwrite the data in the destination database after the failed task is resumed.
    
-   If a DTS task fails to run, DTS technical support will try to restore the task within 8 hours. During the restoration, the task may be restarted, and the parameters of the task may be modified.
    
    **Note**
    
    Only the parameters of the DTS task may be modified. The parameters of databases are not modified. The parameters that may be modified include but are not limited to the parameters in the "[Modify instance parameters](/help/en/dts/user-guide/modify-the-parameters-of-a-dts-instance#section-ys2-2c2-wzo)" section of the Modify the parameters of a DTS instance topic.
    

Special cases

During data migration, do not modify the endpoint or zone of the source ApsaraDB RDS for PostgreSQL instance. Otherwise, the data migration task fails.

## Migration types

-   Schema migration
    
    DTS migrates the schemas of the selected objects from the source database to the destination database.
    
-   Full data migration
    
    DTS migrates the historical data of required objects from the source database to the destination database.
    
-   Incremental data migration
    
    After full data migration is complete, DTS migrates incremental data from the source database to the destination database. Incremental data migration allows data to be migrated smoothly without interrupting the services of self-managed applications during data migration.
    

## Supported objects to be migrated

-   SCHEMA and TABLE.
    
    **Note**
    
    Including PRIMARY KEY, UNIQUE KEY, FOREIGN KEY, DATATYPE (built-in data type), and DEFAULT CONSTRAINT.
    
-   VIEW, PROCEDURE (PostgreSQL V11 or later.), FUNCTION, RULE, SEQUENCE, EXTENSION, TRIGGER, AGGREGATE, INDEX, OPERATOR, and DOMAIN.
    

## SQL operations that support incremental migration

**Operation type**

**SQL statement**

DML

INSERT, UPDATE, and DELETE

DDL

-   DDL operations can be migrated only in the data migration tasks that are created after October 1, 2020.
    
    **Important**
    
    -   To run a data migration task created before May 12, 2023 to migrate DDL operations, you must create a trigger and a function in the source database to capture DDL information before you configure the data migration task. For more information, see [Use triggers and functions to implement incremental DDL migration for PostgreSQL databases](/help/en/dts/use-cases/use-triggers-and-functions-to-implement-incremental-ddl-migration-for-postgresql-databases#task-2558077).
        
    -   You cannot migrate data of the BIT type during incremental data migration.
        
    
-   If the account of the source database is a privileged account and the minor engine version of the source ApsaraDB RDS for PostgreSQL instance is 20210228 or later, the following DDL statements can be migrated in data migration tasks. For information about how to update the minor engine version of an ApsaraDB RDS for PostgreSQL instance, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#concept-gnx-vgj-wdb11).
    
    -   CREATE TABLE and DROP TABLE
        
    -   ALTER TABLE, including RENAME TABLE, ADD COLUMN, ADD COLUMN DEFAULT, ALTER COLUMN TYPE, DROP COLUMN, ADD CONSTRAINT, ADD CONSTRAINT CHECK, and ALTER COLUMN DROP DEFAULT
        
    -   TRUNCATE TABLE (The version of the source ApsaraDB RDS for PostgreSQL instance must be PostgreSQL V11 or later.)
        
    -   CREATE INDEX ON TABLE
        
    
    **Important**
    
    -   You cannot migrate additional information of DDL statements, such as CASCADE or RESTRICT.
        
    -   You cannot migrate DDL statements from a session in which the `SET session_replication_role = replica` statement is executed.
        
    -   You cannot migrate DDL statements that are executed by invoking functions.
        
    -   If the SQL statements submitted by the source database at a time contain both DML and DDL statements, DTS does not migrate the DDL statements.
        
    -   If the SQL statements submitted by the source database at a time contain DDL statements that are not to be migrated, DTS does not migrate the DDL statements.
        
    

## Permissions required for database accounts

**Database type**

**Schema migration**

**Full data migration**

**Incremental data migration**

Source ApsaraDB RDS for PostgreSQL instance

The USAGE permission on the pg\_catalog schema

The SELECT permission on the objects to be migrated

Permissions of a privileged account that is the owner of the database

**Note**

If the source ApsaraDB RDS for PostgreSQL instance runs PostgreSQL 9.4 and you want to migrate only DML operations, only the REPLICATION permission is required for the database account.

Destination ApsaraDB RDS for PostgreSQL instance

The CREATE and USAGE permissions on the objects to be migrated

The permissions of the schema owner

For more information about how to create a database account on an ApsaraDB RDS for PostgreSQL instance and grant permissions to the database account, see [Create an account](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-kxw-k1p-ydb) and [Create a database](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-on-an-apsaradb-rds-for-postgresql-instance#concept-cg3-ljq-wdb).

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
    
    **Select Existing Connection**
    
    -   If you use a database instance that is registered with DTS, select the instance from the drop-down list. DTS automatically populates the following database parameters for the instance. For more information, see [Manage database connections](/help/en/dts/user-guide/database-connection-management).
        
        **Note**
        
        In the DMS console, you can select the database instance from the **Select a DMS database instance** drop-down list.
        
    -   If you fail to register the instance with DTS, or you do not need to use the instance that is registered with DTS, you must configure the following database information.
        
    
    **Database Type**
    
    The type of the source database. Select **PostgreSQL**.
    
    **Access Method**
    
    The access method of the source database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the source ApsaraDB RDS for PostgreSQL instance resides.
    
    **Instance ID**
    
    The ID of the source ApsaraDB RDS for PostgreSQL instance.
    
    **Database Name**
    
    The name of the database that contains the objects to be migrated from the source ApsaraDB RDS for PostgreSQL instance.
    
    **Database Account**
    
    The database account of the source ApsaraDB RDS for PostgreSQL instance. For information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-nkr-wel-82q) section of this topic.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database. You can configure this parameter based on your business requirements. In this example, **Non-encrypted** is selected.
    
    If you want to establish an SSL-encrypted connection to the source database, perform the following steps: Select **SSL-encrypted**, upload **CA Certificate**, **Client Certificate**, and **Private Key of Client Certificate** as needed, and then specify **Private Key Password of Client Certificate**.
    
    **Note**
    
    -   If you set Encryption to **SSL-encrypted** for a self-managed PostgreSQL database, you must upload **CA Certificate**.
        
    -   If you want to use the client certificate, you must upload **Client Certificate** and **Private Key of Client Certificate** and specify **Private Key Password of Client Certificate**.
        
    -   For information about how to configure SSL encryption for an ApsaraDB RDS for PostgreSQL instance, see [SSL encryption](/help/en/rds/apsaradb-rds-for-postgresql/ssl-encryption/).
        
    
    **Destination Database**
    
    **Select Existing Connection**
    
    -   If you use a database instance that is registered with DTS, select the instance from the drop-down list. DTS automatically populates the following database parameters for the instance. For more information, see [Manage database connections](/help/en/dts/user-guide/database-connection-management).
        
        **Note**
        
        In the DMS console, you can select the database instance from the **Select a DMS database instance** drop-down list.
        
    -   If you fail to register the instance with DTS, or you do not need to use the instance that is registered with DTS, you must configure the following database information.
        
    
    **Database Type**
    
    The type of the destination database. Select **PostgreSQL**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the destination ApsaraDB RDS for PostgreSQL instance resides.
    
    **Instance ID**
    
    The ID of the destination ApsaraDB RDS for PostgreSQL instance.
    
    **Database Name**
    
    The name of the database to which objects are migrated in the destination ApsaraDB RDS for PostgreSQL instance.
    
    **Database Account**
    
    The database account of the destination ApsaraDB RDS for PostgreSQL instance. For information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-nkr-wel-82q) section of this topic.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database. You can configure this parameter based on your business requirements. In this example, **Non-encrypted** is selected.
    
    If you want to establish an SSL-encrypted connection to the source database, perform the following steps: Select **SSL-encrypted**, upload **CA Certificate**, **Client Certificate**, and **Private Key of Client Certificate** as needed, and then specify **Private Key Password of Client Certificate**.
    
    **Note**
    
    -   If you set Encryption to **SSL-encrypted** for a self-managed PostgreSQL database, you must upload **CA Certificate**.
        
    -   If you want to use the client certificate, you must upload **Client Certificate** and **Private Key of Client Certificate** and specify **Private Key Password of Client Certificate**.
        
    -   For information about how to configure SSL encryption for an ApsaraDB RDS for PostgreSQL instance, see [SSL encryption](/help/en/rds/apsaradb-rds-for-postgresql/ssl-encryption/).
        
    
4.  Click **Test Connectivity and Proceed** in the lower part of the page.
    
    **Note**
    
    -   Make sure that the CIDR blocks of DTS servers can be automatically or manually added to the security settings of the source and destination databases to allow access from DTS servers. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases).
        
    -   If the source or destination database is a self-managed database and its **Access Method** is not set to **Alibaba Cloud Instance**, click **Test Connectivity** in the **CIDR Blocks of DTS Servers** dialog box.
        
    
5.  Configure the objects to be migrated.
    
    1.  On the **Configure Objects** page, configure the objects that you want to migrate.
        
        **Parameter**
        
        **Description**
        
        **Migration Types**
        
        -   To perform only full data migration, select **Schema Migration** and **Full Data Migration**.
            
        -   To migrate data without service downtime, select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
            
        
        **Note**
        
        -   If you select **Schema Migration**, DTS migrates the schemas of the tables to be migrated from the source database to the destination database. The schemas include foreign keys.
            
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
        
        **Note**
        
        -   You can select schemas or tables as the objects to be migrated. If you select tables as the objects to be migrated, DTS does not migrate other objects, such as views, triggers, and stored procedures, to the destination database.
            
        -   If a table to be migrated contains SERIAL data type, and you select **Migration Types** as **Schema Migration**, we recommend that you also select **Sequence** or entire schema migration.
            
        
        **Selected Objects**
        
        -   To rename an object that you want to migrate to the destination instance, right-click the object in the **Selected Objects** section. For more information, see [Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
            
        -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see [Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib).
            
        
        **Note**
        
        -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be migrated.
            
        -   To specify WHERE conditions to filter data, right-click a table in the **Selected Objects** section. In the dialog box that appears, specify the conditions. For more information, see [Specify filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
            
        -   To migrate SQL operations performed on a specific database or table, right-click the object in the **Selected Objects** section. In the dialog box that appears, select the SQL operations that you want to migrate. For more information about the SQL operations that support incremental migration, see the [SQL operations that support incremental migration](#section-7r8-m97-i3l) section of this topic.
            
        
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
        
        The environment tag that is used to identify the DTS instance. You can select an environment tag based on your business requirements. In this example, you do not need to select an environment tag.
        
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
            
    
7.  Purchase an instance.
    
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
