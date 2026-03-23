This topic describes how to migrate data from an ApsaraDB RDS for MySQL Enterprise Edition instance to an ApsaraDB RDS for MySQL Cluster Edition instance by using Data Transmission Service (DTS).

## Prerequisites

-   The source and destination ApsaraDB RDS for MySQL instances are created. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
    
-   The available storage space of the destination ApsaraDB RDS for MySQL Cluster Edition instance is larger than the total size of the data in the source ApsaraDB RDS for MySQL Enterprise Edition instance.
    

## Limits

**Note**

-   During schema migration, DTS migrates foreign keys from the source database to the destination database.
    
-   During full data migration and incremental data migration, DTS temporarily disables the constraint check and cascade operations on foreign keys at the session level. If you perform the cascade update and delete operations on the source database during data migration, data inconsistency may occur.
    

**Category**

**Description**

Limits on the source database

-   The server to which the source database belongs must have sufficient outbound bandwidth. Otherwise, the data migration speed decreases.
    
-   The tables to be migrated must have PRIMARY KEY or UNIQUE constraints, and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   If you select tables as the objects to be migrated and you need to modify the tables in the destination database, such as renaming tables or columns, you can migrate up to 1,000 tables in a single data migration task. If you run a task to migrate more than 1,000 tables, a request error occurs. In this case, we recommend that you configure multiple tasks to migrate the tables in batches, or configure a task to migrate the entire database.
    
-   By default, the binary logging feature is enabled for an ApsaraDB RDS for MySQL instance. Make sure that the binlog\_format parameter is set to ROW and the binlog\_row\_image parameter is set to FULL. For more information, see [Modify instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb). Otherwise, error messages are returned during the precheck and the data migration task cannot be started.
    
-   If you perform only incremental data migration, the binary logs of the source database must be stored for more than 24 hours. If you perform both full data migration and incremental data migration, the binary logs of the source database must be stored for at least seven days. Otherwise, DTS may fail to obtain the binary logs and the task may fail. In exceptional circumstances, data inconsistency or loss may occur. After full data migration is complete, you can set the retention period to more than 24 hours. Make sure that you set the retention period of binary logs based on the preceding requirements. Otherwise, the Service Level Agreement (SLA) of DTS does not guarantee service reliability or performance.
    
-   Limits on operations to be performed on the source database:
    
    -   During schema migration and full data migration, do not perform DDL operations to change the schemas of databases or tables. Otherwise, the data migration task fails.
        
    -   If you perform only full data migration, do not write data to the source database during data migration. Otherwise, data inconsistency may occur between the source and destination databases. To ensure data consistency, we recommend that you select schema migration, full data migration, and incremental data migration as the migration types.
        

Other limits

-   To ensure compatibility, we recommend that you use the same engine versions for the source and destination MySQL databases.
    
-   Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. During full data migration, DTS uses the read and write resources of the source and destination databases. This may increase the loads on the database servers.
    
-   During full data migration, concurrent INSERT operations cause fragmentation in the tables of the destination database. After full data migration is complete, the tablespace of the destination database is larger than that of the source database.
    
-   You must make sure that the precision settings for columns of the FLOAT or DOUBLE data type meet your business requirements. DTS uses the `ROUND(COLUMN,PRECISION)` function to retrieve values from columns of the FLOAT or DOUBLE data type. If you do not specify a precision, DTS sets the precision for columns of the FLOAT data type to 38 digits and the precision for columns of the DOUBLE data type to 308 digits.
    
-   DTS attempts to resume data migration tasks that failed within the last seven days. Before you switch workloads to the destination database, stop or release the failed tasks. You can also execute the `REVOKE` statement to revoke the write permissions from the accounts that are used by DTS to access the destination database. Otherwise, the data in the source database overwrites the data in the destination database after a failed task is resumed.
    
-   DTS automatically creates a database in the destination ApsaraDB RDS for MySQL instance. However, if the name of the source database is invalid, you must create a database in the destination ApsaraDB RDS for MySQL instance before you configure the data migration task. For more information, see [Manage databases](/help/en/rds/apsaradb-rds-for-mysql/create-a-database-for-an-apsaradb-rds-for-mysql-instance#concept-cg3-ljq-wdb).
    

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

**Database**

Schema migration

Full data migration

Incremental data migration

Source ApsaraDB RDS for MySQL Enterprise Edition instance

SELECT permission

SELECT permission

Read and write permissions

Destination ApsaraDB RDS for MySQL Cluster Edition instance

Read and write permissions

Read and write permissions

Read and write permissions

For more information about how to create accounts and grant permissions to accounts, see [Create an account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance#concept-kxw-k1p-ydb) and [Modify the permissions of an account](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance#concept-ys2-4bp-ydb).

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
    
3.  Click **Create Task**. On the Create Data Migration Task page, configure the source and destination databases. The following table describes the parameters.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed in the upper part of the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the task. DTS automatically generates a task name. We recommend that you specify an informative name to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select an existing DMS database instance**
    
    The database instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing instance, you must configure the following database information.
        
    
    **Database Type**
    
    The type of the source database. Select **MySQL**.
    
    **Access Method**
    
    The access method of the source database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the source ApsaraDB RDS for MySQL instance resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    Specifies whether to migrate data across Alibaba Cloud accounts. In this example, **No** is selected.
    
    **RDS Instance ID**
    
    The ID of the source ApsaraDB RDS for MySQL instance.
    
    **Database Account**
    
    The database account of the source ApsaraDB RDS for MySQL instance. For more information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-3kt-ox2-j92) section of this topic.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database instance. Select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you want to set this parameter to **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS for MySQL instance before you configure the DTS task. For more information, see [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb).
    
    **Destination Database**
    
    **Select an existing DMS database instance**
    
    The database instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing instance, you must configure the following database information.
        
    
    **Database Type**
    
    The type of the destination database. Select **MySQL**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the destination ApsaraDB RDS for MySQL instance resides.
    
    **RDS Instance ID**
    
    The ID of the destination ApsaraDB RDS for MySQL instance.
    
    **Database Account**
    
    The database account of the destination ApsaraDB RDS for MySQL instance. For more information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-3kt-ox2-j92) section of this topic.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database instance. Select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you want to set this parameter to **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS for MySQL instance before you configure the DTS task. For more information, see [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb).
    
4.  In the lower part of the page, click **Test Connectivity and Proceed**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the IP address whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the self-managed database is hosted on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the IP address whitelist of the database to allow DTS to access the database. For more information, see the [CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353) section of the Add the CIDR blocks of DTS servers topic.
    
    **Warning**
    
    If the public CIDR blocks of DTS servers are automatically or manually added to the whitelist of a database instance or to the security group rules of an ECS instance, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or security group rules and forbidding unauthorized CIDR blocks, or connecting the database instance to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
5.  Configure the objects to be migrated and advanced settings.
    
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
            
        
    
    **Capitalization of Object Names in Destination Instance**
    
    The capitalization of database names, table names, and column names in the destination instance. By default, **DTS default policy** is selected. You can select other options to make sure that the capitalization of object names is consistent with that of the source or destination database. For more information, see [Specify the capitalization of object names in the destination instance](/help/en/dts/user-guide/specify-the-capitalization-of-object-names-in-the-destination-instance-2#concept-2045083).
    
    **Source Objects**
    
    Select one or more objects from the **Source Objects** section. Click the ![向右小箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to add the objects to the **Selected Objects** section.
    
    **Note**
    
    You can select columns, tables, or databases as the objects to be migrated. If you select tables or columns as the objects to be migrated, DTS does not migrate other objects, such as views, triggers, or stored procedures, to the destination database.
    
    **Selected Objects**
    
    -   To rename an object that you want to migrate to the destination instance, right-click the object in the **Selected Objects** section. For more information, see [Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
    -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see [Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib).
    
    **Note**
    
    -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be migrated.
        
    -   To specify WHERE conditions to filter data, right-click an object in the **Selected Objects** section. In the dialog box that appears, specify the conditions. For more information, see [Specify filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
        
    -   To migrate DML or DDL operations performed on a specific database or table, right-click the object in the **Selected Objects** section. In the dialog box that appears, select the DML or DDL operations that you want to incrementally migrate. For more information about the DML and DDL operations that can be incrementally migrated, see the [SQL operations that can be incrementally migrated](#section-j3n-001-y2i) section of this topic.
        
    
6.  Click **Next: Advanced Settings** to configure advanced settings.
    
    -   **Data Verification Settings**
        
        For more information about how to enable data verification, see [Configure a data verification task](/help/en/dts/user-guide/enable-data-verification#task-2249288).
        
    -   **Advanced Settings**
        
        **Parameter**
        
        **Description**
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data migration task. If the task fails or the migration latency exceeds the specified threshold, the alert contacts receive notifications. Valid values:
        
        -   **No**: does not configure alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see the [Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz) section of the Configure monitoring and alerting topic.
            
        
        **Copy the temporary table of the Online DDL tool that is generated in the source table to the destination database**
        
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
            
        
        **Retry Time for Failed Connections**
        
        The retry time range for failed connections. If the source or destination database fails to be connected after the data migration task is started, DTS immediately retries a connection within the retry time range. Valid values: 10 to 1440. Unit: minutes. Default value: 720. We recommend that you set the parameter to a value greater than 30. If DTS is reconnected to the source and destination databases within the specified retry time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
        
        **Note**
        
        -   If you specify different retry time ranges for multiple data migration tasks that share the same source or destination database, the value that is specified later takes precedence.
            
        -   When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at the earliest opportunity after the source database and destination instance are released.
            
        
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
    
    **Resource Group**
    
    The resource group to which the data migration instance belongs. Default value: **default resource group**. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb)
    
    **Instance Class**
    
    DTS provides instance classes that vary in the migration speed. You can select an instance class based on your business scenario. For more information, see [Instance classes of data migration instances](/help/en/dts/product-overview/specifications-of-data-migration-instances#concept-26606-zh).
    
10.  Read and agree to **Data Transmission Service (Pay-as-you-go) Service Terms** by selecting the check box.
     
11.  Click **Buy and Start**. In the message that appears, click **OK**.
     
     You can view the progress of the task on the Data Migration page.
