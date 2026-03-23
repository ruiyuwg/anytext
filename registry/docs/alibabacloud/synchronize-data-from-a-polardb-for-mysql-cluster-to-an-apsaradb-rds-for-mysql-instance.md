You can use Data Transmission Service (DTS) to synchronize data from a PolarDB for MySQL cluster to a self-managed MySQL database or an ApsaraDB RDS for MySQL instance.

## Supported destination databases

DTS can synchronize data from PolarDB for MySQL clusters to the following types of MySQL databases. This topic describes how to synchronize data from a PolarDB for MySQL cluster to an ApsaraDB RDS for MySQL instance. You can follow the same procedure to configure data synchronization tasks for other types of destination MySQL databases.

-   ApsaraDB RDS for MySQL instance
-   Self-managed database that is hosted on Elastic Compute Service (ECS)
-   Self-managed database that is connected over Express Connect, VPN Gateway, or Smart Access Gateway
-   Self-managed database that is connected over Database Gateway
-   Self-managed database that is connected over Cloud Enterprise Network (CEN)

## Prerequisites

-   A PolarDB for MySQL cluster is created. For more information, see [Purchase a subscription cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster#task-1580301) and [Purchase a pay-as-you-go cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-subscription-cluster#task-1580301).
    
-   The destination ApsaraDB RDS for MySQL instance is created. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
    
-   The available storage space of the destination ApsaraDB RDS for MySQL instance is larger than the total size of the data in the source PolarDB for MySQL cluster.
    

## Usage notes

**Note**

-   During schema synchronization, DTS synchronizes foreign keys from the source database to the destination database.
    
-   During full data synchronization and incremental data synchronization, DTS temporarily disables the constraint check and cascade operations on foreign keys at the session level. If you perform the cascade update and delete operations on the source database during data synchronization, data inconsistency may occur.
    

**Category**

**Description**

Limits on the source database

-   The tables to be synchronized must have PRIMARY KEY or UNIQUE constraints, and all fields must be unique. Otherwise, the destination may contain duplicate data records.
    
-   If you select tables as the objects to be synchronized and you need to edit the tables, such as renaming tables or columns, in the destination database, you can synchronize up to 1,000 tables in a single data synchronization task. If you run a task to synchronize more than 1,000 tables, a request error occurs. In this case, we recommend that you configure multiple tasks to synchronize the tables or configure a task to synchronize the entire database.
    
-   If you need to synchronize incremental data, the binary logging feature must be enabled and the loose\_polar\_log\_bin parameter must be set to on. Otherwise, error messages are returned during precheck and the data synchronization task cannot be started. For more information about how to enable the binary logging feature and set the loose\_polar\_log\_bin parameter, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301) and [Modify parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#section-osq-bhy-ydb).
    
    **Note**
    
    -   If you enable the binary logging feature for a PolarDB for MySQL cluster, you are charged for the storage space that is occupied by binary logs.
        
    -   For an incremental data synchronization task, the binary logs of the source database are retained for at least 24 hours. For a full and incremental data synchronization task, the binary logs of the source database are retained for at least seven days. Otherwise, DTS may fail to obtain the binary logs and the task may fail. In exceptional circumstances, data inconsistency or loss may occur. After full data synchronization is complete, you can set the retention period to more than 24 hours. Make sure that you set the retention period of binary logs based on the preceding requirements. Otherwise, the SLA of DTS does not guarantee service reliability or performance.
        
    

Other limits

-   Read-only nodes of the source PolarDB for MySQL cluster cannot be synchronized.
    
-   Before you synchronize data, evaluate the impact of data synchronization on the performance of the source and destination databases. We recommend that you synchronize data during off-peak hours. During initial full data synchronization, DTS uses the read and write resources of the source and destination databases. This may increase the loads on the database servers.
    
-   During initial full data synchronization, concurrent INSERT operations cause fragmentation in the tables of the destination database. After full data synchronization is complete, the tablespace of the destination database is larger than that of the source database.
    
-   We recommend that you do not use tools such as pt-online-schema-change to perform DDL operations on source tables during data synchronization. Otherwise, data synchronization may fail.
    
-   If you use only DTS to write data to the destination database, you can use Data Management (DMS) to perform online DDL operations on source tables during data synchronization. For more information, see [Perform lock-free operations](/help/en/dms/perform-lock-free-ddl-operations).
    
-   During data synchronization, we recommend that you use only DTS to write data to the destination database. This prevents data inconsistency between the source and destination databases. If you use tools other than DTS to write data to the destination database, data loss may occur in the destination database when you use DMS to perform online DDL operations.
    

Usage notes

DTS executes the CREATE DATABASE IF NOT EXISTS \`test\` statement in the source database as scheduled to move forward the binary log file position.

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
-   Two-way cascade synchronization
-   One-way many-to-one synchronization
-   Two-way one-to-one synchronization

For more information about the synchronization topologies that are supported by DTS, see [Synchronization topologies](/help/en/dts/user-guide/synchronization-topologies#concept-978516).

## SQL operations that can be synchronized

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
    

## Procedure

1.  Go to the Data Synchronization Tasks page.
    
    1.  Log on to the [Data Management (DMS) console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, click **DTS**.
        
    3.  In the left-side navigation pane, choose **DTS (DTS)** > **Data Synchronization**.
        
    
    **Note**
    
    -   Operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
        
    -   You can also go to the [Data Synchronization Tasks page of the new DTS console](https://dts.alibabacloud.com/sync/cn-hangzhou?resourceGroupId=).
        
    
2.  On the right side of **Data Synchronization Tasks**, select the region in which the data synchronization instance resides.
    
    **Note**
    
    If you use the new DTS console, you must select the region in which the data synchronization instance resides in the top navigation bar.
    
3.  Click **Create Task** to go to the task configuration page.
    
4.  **Optional:** In the upper-right corner of the page, click **New Configuration Page**.
    
    **Note**
    
    -   Skip this step if the **Back to Previous Version** button is displayed in the upper-right corner of the page.
        
    -   Some parameters may differ between the new and previous versions of the configuration page. We recommend that you use the new configuration page.
        
    
5.  Configure the source and destination databases. The following table describes the parameters.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed in the upper part of the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the task. DTS automatically assigns a name to the task. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select a DMS database instance.**
    
    The database instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing instance, you must configure parameters for the source database.
        
    
    **Note**
    
    -   In the DMS console, you can click **Create Template** to register a database with DMS. For more information, see [Register an Alibaba Cloud database instance](/help/en/dms/register-an-apsaradb-instance-1) and [Register a database hosted on a third-party cloud service or a self-managed database](/help/en/dms/register-a-database-hosted-on-a-third-party-cloud-service-or-a-self-managed-database).
        
    -   In the DTS console, register a database with DTS on the **Database Connections** page or the new configuration page. For more information, see [Manage database connections](/help/en/dts/user-guide/database-connection-management).
        
    
    **Database Type**
    
    The type of the source database. Select **PolarDB for MySQL**.
    
    **Access Method**
    
    The access method of the source database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the source PolarDB for MySQL cluster resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    In this example, a database instance of the current Alibaba Cloud account is used. Select **No**.
    
    **PolarDB Cluster ID**
    
    The ID of the source PolarDB for MySQL cluster.
    
    **Database Account**
    
    The database account of the source PolarDB for MySQL cluster. The account must have the read permissions on the objects to be synchronized.
    
    **Database Password**
    
    The password of the database account.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source PolarDB for MySQL cluster. You can set this parameter based on your business requirements. For more information about the SSL encryption feature, see [Configure SSL encryption](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption).
    
    **Destination Database**
    
    **Select a DMS database instance.**
    
    The database instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing instance, you must configure parameters for the source database.
        
    
    **Note**
    
    -   In the DMS console, you can click **Create Template** to register a database with DMS. For more information, see [Register an Alibaba Cloud database instance](/help/en/dms/register-an-apsaradb-instance-1) and [Register a database hosted on a third-party cloud service or a self-managed database](/help/en/dms/register-a-database-hosted-on-a-third-party-cloud-service-or-a-self-managed-database).
        
    -   In the DTS console, register a database with DTS on the **Database Connections** page or the new configuration page. For more information, see [Manage database connections](/help/en/dts/user-guide/database-connection-management).
        
    
    **Database Type**
    
    The type of the destination database. Select **MySQL**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the destination ApsaraDB RDS for MySQL instance resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    In this example, a database instance of the current Alibaba Cloud account is used. Select **No**.
    
    **RDS Instance ID**
    
    The ID of the destination ApsaraDB RDS for MySQL instance.
    
    **Database Account**
    
    The database account of the destination ApsaraDB RDS for MySQL instance. The account must have read and write permissions on the destination database.
    
    **Database Password**
    
    The password of the database account.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the database. You can select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you select **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS for MySQL instance before you configure the data synchronization task. For more information, see [Configure the SSL encryption feature](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb).
    
6.  In the lower part of the page, click **Test Connectivity and Proceed**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the database is deployed on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the whitelist of the database to allow DTS to access the database. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to synchronize data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or ECS security group rules and forbidding unauthorized CIDR blocks, or connecting the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
7.  Configure the objects to be synchronized.
    
    1.  On the **Select Objects** page, configure the objects that you want to synchronize.
        
        **Parameter**
        
        **Description**
        
        **Synchronization Types**
        
        By default, **Incremental Data Synchronization** is selected. You must also select **Schema Synchronization** and **Full Data Synchronization**. After the precheck is complete, DTS synchronizes the historical data of the selected objects from the source database to the destination cluster. The historical data is the basis for subsequent incremental synchronization.
        
        **Method to Migrate Triggers in Source Database**
        
        The method used to synchronize triggers from the source database. You can select a synchronization method based on your business requirements. If no triggers are to be synchronized, you do not need to set this parameter. For more information, see [Synchronize or migrate triggers from the source database](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139).
        
        **Note**
        
        This parameter is available only if you select **Schema Synchronization** for the **Synchronization Types** parameter.
        
        **Synchronization Topology**
        
        The synchronization topology of the data synchronization task. Select **One-way Synchronization**.
        
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
                
            
        
        **Capitalization of Object Names in Destination Instance**
        
        The capitalization of database names, table names, and column names in the destination instance. By default, **DTS default policy** is selected. You can select other options to ensure that the capitalization of object names is consistent with that in the source or destination database. For more information, see [Specify the capitalization of object names in the destination instance](/help/en/dts/user-guide/specify-the-capitalization-of-object-names-in-the-destination-instance-2#concept-2045083).
        
        **Source Objects**
        
        Select one or more objects from the **Source Objects** section and click the ![向右](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3405433761/p511455.jpg) icon to move the objects to the **Selected Objects** section.
        
        **Note**
        
        You can select columns, tables, or databases as the objects to be synchronized. If you select tables or columns as the objects to be synchronized, DTS does not synchronize other objects such as views, triggers, and stored procedures to the destination database.
        
        **Selected Objects**
        
        -   To rename an object that you want to synchronize to the destination instance, right-click the object in the **Selected Objects** section. For more information, see the [Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l) section of the Map object names topic.
            
        -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see the [Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib) section of the Map object names topic.
            
        
        **Note**
        
        -   To filter data in a table to be synchronized, right-click the table in the **Selected Objects** section. In the dialog box that appears, configure filter conditions. For more information, see [Set filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
            
        -   To select the SQL operations performed on a specific database or table, right-click an object in the **Selected Objects** section. In the dialog box that appears, select the SQL operations that you want to synchronize. For more information, see the [SQL operations that can be synchronized](#section-mfc-5c0-u79) section of this topic.
            
        -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be synchronized.
            
        
    2.  Click **Next: Advanced Settings** to configure advanced settings.
        
        **Parameter**
        
        **Description**
        
        **Dedicated Cluster for Task Scheduling**
        
        By default, DTS schedules tasks to shared clusters. You do not need to configure this parameter. If you want to improve the stability of data migration tasks, purchase a dedicated cluster. For more information, see [What is a DTS dedicated cluster](/help/en/dts/user-guide/what-is-a-dts-dedicated-cluster#concept-2183964).
        
        **Copy the temporary table of the Online DDL tool that is generated in the source table to the destination database.**
        
        If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) or the gh-ost tool to perform online DDL operations on the source database, you can specify whether to synchronize the data of temporary tables generated by online DDL operations.
        
        **Important**
        
        You cannot use tools such as pt-online-schema-change to perform online DDL operations on the source database. Otherwise, the DTS task fails.
        
        -   **Yes**: DTS synchronizes the data of temporary tables generated by online DDL operations.
            
            **Note**
            
            If online DDL operations generate a large amount of data, the data synchronization task may take an extended period of time to complete.
            
        -   **No, Adapt to DMS Online DDL**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL operations that are performed by using [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) are synchronized.
            
            **Note**
            
            If you select No, Adapt to DMS Online DDL, the tables in the destination database may be locked.
            
        -   **No, Adapt to gh-ost**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL operations that are performed by using the gh-ost tool are synchronized. You can use the default or custom regular expressions to filter out the shadow tables of the gh-ost tool and tables that are not required.
            
            **Note**
            
            If you select No, Adapt to gh-ost, the tables in the destination database may be locked.
            
        
        **Retry Time for Failed Connections**
        
        The retry time range for failed connections. If the source or destination database fails to be connected after the data synchronization task is started, DTS immediately retries a connection within the time range. Valid values: 10 to 1440. Unit: minutes. Default value: 720. We recommend that you set this parameter to a value greater than 30. If DTS reconnects to the source and destination databases within the specified time range, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
        
        **Note**
        
        -   If you specify different retry time ranges for multiple data synchronization tasks that have the same source or destination database, the shortest retry time range takes precedence.
            
        -   When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
            
        
        **Retry Time for Other Issues**
        
        The retry time range for other issues. For example, if the DDL or DML operations fail to be performed after the data synchronization task is started, DTS immediately retries the operations within the time range. Valid values: 1 to 1440. Unit: minutes. Default value: 10. We recommend that you set this parameter to a value greater than 10. If the failed operations are successfully performed within the specified time range, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
        
        **Important**
        
        The value of the **Retry Time for Other Issues** parameter must be smaller than the value of the **Retry Time for Failed Connections** parameter.
        
        **Enable Throttling for Full Data Migration**
        
        During full data synchronization, DTS uses the read and write resources of the source and destination databases. This may increase the load on the database servers. You can configure the **Queries per second (QPS) to the source database**, **RPS of Full Data Migration**, and **Data migration speed for full migration (MB/s)** parameters for full data synchronization tasks to reduce the load on the destination database server.
        
        **Note**
        
        This parameter is displayed only if **Full Data Synchronization** is selected for the **Synchronization Types** parameter.
        
        **Enable Throttling for Incremental Data Synchronization**
        
        Specifies whether to enable throttling for incremental data synchronization. You can enable throttling for incremental data synchronization based on your business requirements. To configure throttling, you must configure the **RPS of Incremental Data Synchronization** and **Data synchronization speed for incremental synchronization (MB/s)** parameters. This reduces the load on the destination database server.
        
        **Environment Tag**
        
        The environment tag that is used to identify the DTS instance. You can select an environment tag based on your business requirements. In this example, no environment tag is selected.
        
        **Whether to delete SQL operations on heartbeat tables of forward and reverse tasks**
        
        Specifies whether to write SQL operations on heartbeat tables to the source database while the DTS instance is running.
        
        -   **Yes**: does not write SQL operations on heartbeat tables. In this case, latency of the DTS instance may be displayed.
            
        -   **No**: writes SQL operations on heartbeat tables. In this case, features such as physical backup and cloning of the source database may be affected.
            
        
        **Configure ETL**
        
        Specifies whether to enable the extract, transform, and load (ETL) feature. For more information, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705) Valid values:
        
        -   **Yes**: configures the ETL feature. You can enter data processing statements in the code editor. For more information, see [Configure ETL in a data migration or data synchronization task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
            
        -   **No**: does not configure the ETL feature.
            
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data synchronization task. If the task fails or the synchronization latency exceeds the specified threshold, alert contacts will receive notifications. Valid values:
        
        -   **No**: does not configure alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see [Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz).
            
        
    3.  Click **Next: Verification Configurations** to configure data verification.
        
        For more information about how to use the data verification feature, see [Configure data verification](/help/en/dts/user-guide/enable-data-verification#task-2249288).
        
    
8.  Save the task settings and run a precheck.
    
    -   To view the parameters to be specified when you call the relevant API operation to configure the DTS task, move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters**.
        
    -   If you do not need to view or have viewed the parameters, click **Next: Save Task Settings and Precheck** in the lower part of the page.
        
    
    **Note**
    
    -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, run a precheck again.
        
    -   If an alert is generated for an item during the precheck, perform the following operations based on the scenario:
        
        -   If an alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issue. Then, run a precheck again.
            
        -   If an alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur and your business may be exposed to potential risks.
            
    
9.  Wait until the **success rate** becomes **100%**. Then, click **Next: Purchase Instance**.
    
10.  Purchase a data synchronization instance.
     
     1.  On the **Purchase Instance** page, configure the Billing Method and Instance Class parameters for the data synchronization instance. The following table describes the parameters.
         
         **Section**
         
         **Parameter**
         
         **Description**
         
         **New Instance Class**
         
         Billing Method
         
         -   Subscription: You pay for your subscription when you create an instance. The subscription billing method is more cost-effective than the pay-as-you-go billing method for long-term use. You are offered lower prices for longer subscription durations.
             
         -   Pay-as-you-go: A pay-as-you-go instance is billed on an hourly basis. The pay-as-you-go billing method is suitable for short-term use. If you no longer require a pay-as-you-go instance, you can release the instance to reduce costs.
             
         
         Resource Group Settings
         
         The resource group to which the instance belongs. Default value: **default resource group**. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb)
         
         Instance Class
         
         DTS provides various synchronization specifications that support different performance. The synchronization speed varies based on the synchronization specifications that you select. You can select a synchronization specification based on your business requirements. For more information, see [Instance classes of data synchronization instances](/help/en/dts/product-overview/specifications-of-data-synchronization-channels#concept-26605-zh).
         
         Subscription Duration
         
         If you select the subscription billing method, set the subscription duration and the number of instances that you want to create. The subscription duration can be one to nine months, one year, two years, three years, or five years.
         
         **Note**
         
         This parameter is available only if you select the **Subscription** billing method.
         
     2.  Read and select the **Data Transmission Service (Pay-as-you-go) Service Terms**.
         
     3.  Click **Buy and Start** to start the data synchronization task. You can view the progress of the task in the task list.
