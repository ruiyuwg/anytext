This topic describes how to synchronize data from an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster by using Data Transmission Service (DTS).

## Supported source databases

You can use DTS to synchronize data from the following types of MySQL databases to a PolarDB for MySQL cluster. In this topic, an ApsaraDB RDS for MySQL instance is used to describe how to configure a data synchronization task. You can also follow the procedure to configure data synchronization tasks for other types of MySQL databases.

-   ApsaraDB RDS for MySQL instance
-   Self-managed database that is hosted on Elastic Compute Service (ECS)
-   Self-managed database that is connected over Express Connect, VPN Gateway, or Smart Access Gateway
-   Self-managed database that is connected over Database Gateway
-   Self-managed database that is connected over Cloud Enterprise Network (CEN)

## Prerequisites

-   An ApsaraDB RDS for MySQL instance is created. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
    
-   A PolarDB for MySQL cluster is created. For more information, see [Purchase an Enterprise Edition cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster#task-1580301) and [Purchase a subscription cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-subscription-cluster#task-1580301).
    
-   The available storage space of the PolarDB for MySQL cluster is larger than the total size of the data in the ApsaraDB RDS for MySQL instance.
    

## Usage notes

**Note**

-   During schema synchronization, DTS synchronizes foreign keys from the source database to the destination database.
    
-   During full data synchronization and incremental data synchronization, DTS temporarily disables the constraint check and cascade operations on foreign keys at the session level. If you perform the cascade update and delete operations on the source database during data synchronization, data inconsistency may occur.
    

**Category**

**Description**

Limits on the source database

-   The tables to be synchronized must have PRIMARY KEY or UNIQUE constraints, and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   If you select tables as the objects to be synchronized and you need to modify the tables, such as renaming tables or columns, you can synchronize up to 1,000 tables in a single data synchronization task. If you run a task to synchronize more than 1,000 tables, a request error occurs. In this case, we recommend that you configure multiple tasks to synchronize the tables or configure a task to synchronize the entire database.
    
-   The following requirements for binary logs must be met:
    
    -   By default, the binary logging feature is enabled. The binlog\_row\_image parameter must be set to full. Otherwise, error messages are returned during precheck and the data synchronization task cannot be started. For more information, see [Modify instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb).
        
        **Important**
        
        -   If the source database is a self-managed MySQL database, you must enable the binary logging feature and set the binlog\_format parameter to row and the binlog\_row\_image parameter to full.
            
        -   If the source database is a self-managed MySQL database deployed in a dual-primary cluster, you must set the log\_slave\_updates parameter to ON. This ensures that DTS can obtain all binary logs. For more information, see [Create an account for a self-managed MySQL database and configure binary logging](/help/en/dts/user-guide/create-an-account-for-a-self-managed-mysql-database-and-configure-binary-logging#concept-1198525).
            
        
    -   The binary logs of the source database must be stored for at least seven days. Otherwise, the data synchronization task may fail because DTS cannot obtain the binary logs. In exceptional circumstances, data inconsistency or loss may occur. Make sure that you configure the retention period of binary logs based on the preceding requirements. Otherwise, the service reliability or performance in the Service Level Agreement (SLA) of DTS may not be guaranteed. For more information about how to manage the binary log files of an ApsaraDB RDS for MySQL instance, see [Manage binary log files](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance#concept-2101409).
        

Other limits

-   To ensure compatibility, the version of the destination database must be the same as or later than that of the source database. If the version of the destination database is earlier than that of the source database, database compatibility issues may occur.
    
-   Before you synchronize data, evaluate the impact of data synchronization on the performance of the source and destination databases. We recommend that you synchronize data during off-peak hours. During initial full data synchronization, DTS uses the read and write resources of the source and destination databases. This may increase the loads on the database servers.
    
-   During initial full data synchronization, concurrent INSERT operations cause fragmentation in the tables of the destination database. After initial full data synchronization is complete, the size of the used tablespace of the destination database is larger than that of the source database.
    
-   If you select one or more tables instead of an entire database as the objects to be synchronized, do not use tools such as pt-online-schema-change to perform online DDL operations on the tables during data synchronization. Otherwise, the data synchronization task fails.
    
    You can use DMS to perform online DDL operations. For more information, see [Perform lock-free DDL operations](/help/en/dms/perform-lock-free-ddl-operations).
    
-   Data inconsistency between the source and destination databases occurs if data from other sources is written to the destination database during data synchronization. For example, if you use DMS to execute online DDL statements while data from other sources is written to the destination database, data loss may occur in the destination database.
    
-   You cannot enable throttling for full data migration.
    
-   You cannot convert data from the DATETIME type to the VARCHAR type.
    
-   If DDL statements fail to be executed in the destination database, the data synchronization task continues to run. You can view the DDL statements that fail to be executed in the task logs. For more information about how to view the task logs, see [View task logs](/help/en/dts/user-guide/view-task-logs-1#task-2101585).
    
-   If the source database is an ApsaraDB RDS for MySQL instance for which the EncDB feature is enabled, full data synchronization cannot be performed.
    

Special cases

-   If the source database is a self-managed MySQL database, take note of the following limits:
    
    -   If you perform a primary/secondary switchover on the source database when the data synchronization task is running, the task fails.
        
    -   DTS calculates synchronization latency based on the timestamp of the latest synchronized data in the destination database and the current timestamp in the source database. If no DML operation is performed on the source database for a long time, the synchronization latency may be inaccurate. If the latency of the data synchronization task is excessively high, you can perform a DML operation on the source database to update the latency.
        
        **Note**
        
        If you select an entire database as the object to be synchronized, you can create a heartbeat table. The heartbeat table is updated or receives data every second.
        
    -   DTS executes the CREATE DATABASE IF NOT EXISTS 'test' statement in the source database as scheduled to move forward the binary log file position.
        
    
-   If the source database is an Apsara RDS for MySQL instance, take note of the following limit:
    
    An ApsaraDB RDS for MySQL instance that does not record transaction logs, such as a read-only ApsaraDB RDS for MySQL 5.6 instance, cannot be used as the source database.
    

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
    

For more information about the synchronization topologies supported by DTS, see [Synchronization topologies](/help/en/dts/user-guide/synchronization-topologies#concept-978516).

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

1.  Go to the [Data Synchronization Tasks page of the new DTS console](https://dts.console.alibabacloud.com/sync/cn-hangzhou?orderColumn=createTime&orderDirection=DESC&status=&type=&params=&pageNumber=1&pageSize=20).
    
    **Note**
    
    You can also log on to the [DMS console](https://dms.alibabacloud.com). In the top navigation bar, move the pointer over **DTS** and choose **DTS (DTS)** > **Data Synchronization**.
    
2.  In the top navigation bar, select the region in which you want to create the data synchronization task.
    
3.  Click **Create Task**. In the Create Task wizard, configure the source and destination databases. The following table describes the parameters.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed in the upper part of the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the task. DTS automatically assigns a name to the task. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Database Type**
    
    The type of the source database. Select **MySQL**.
    
    **Access Method**
    
    The access method of the source database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the source ApsaraDB RDS for MySQL instance resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    Specifies whether data is synchronized across Alibaba Cloud accounts. In this example, **No** is selected.
    
    **RDS Instance ID**
    
    The ID of the source ApsaraDB RDS for MySQL instance.
    
    **Note**
    
    The source and destination ApsaraDB RDS for MySQL instances can be the same or different. You can use DTS to synchronize data between two ApsaraDB RDS for MySQL instances or within an ApsaraDB RDS for MySQL instance.
    
    **Database Account**
    
    The database account of the source ApsaraDB RDS for MySQL instance. The account must have the REPLICATION CLIENT, REPLICATION SLAVE, SHOW VIEW, and SELECT permissions.
    
    **Database Password**
    
    The password of the database account.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the database. You can select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you select **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS for MySQL instance before you configure the data synchronization task. For more information, see [Configure the SSL encryption feature](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb).
    
    **Destination Database**
    
    **Database Type**
    
    The type of the destination database. Select **PolarDB for MySQL**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the destination PolarDB for MySQL cluster resides.
    
    **PolarDB Cluster ID**
    
    The ID of the destination PolarDB for MySQL cluster.
    
    **Database Account**
    
    The database account of the destination PolarDB for MySQL cluster. The account must have read and write permissions on the destination database.
    
    **Database Password**
    
    The password of the database account.
    
4.  In the lower part of the page, click **Test Connectivity and Proceed**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the database is deployed on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the whitelist of the database to allow DTS to access the database. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to synchronize data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or ECS security group rules and forbidding unauthorized CIDR blocks, or connecting the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
5.  Configure the objects to be synchronized and advanced settings. The following table describes the parameters.
    
    -   **Basic Settings**
        
        **Parameter or setting**
        
        **Description**
        
        **Synchronization Types**
        
        By default, **Incremental Data Synchronization** is selected. You must also select **Schema Synchronization** and **Full Data Synchronization**. After the precheck is complete, DTS synchronizes the historical data of the selected objects from the source database to the destination cluster. The historical data is the basis for subsequent incremental synchronization.
        
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
                
            
        
        **Select Objects**
        
        Select one or more objects from the **Source Objects** section and click the ![向右](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3405433761/p511455.jpg) icon to move the objects to the **Selected Objects** section.
        
        **Note**
        
        You can select columns, tables, or databases as the objects to be synchronized. If you select tables or columns as the objects to be synchronized, DTS does not synchronize other objects such as views, triggers, and stored procedures to the destination database.
        
        **Rename Databases and Tables**
        
        -   To rename an object that you want to synchronize to the destination instance, right-click the object in the **Selected Objects** section. For more information, see the [Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l) section of the Map object names topic.
            
        -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see the [Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib) section of the Map object names topic.
            
        
        **Filter data**
        
        You can specify WHERE conditions to filter data. For more information, see [Set filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
        
        Select the SQL operations to be synchronized
        
        In the **Selected Objects** section, right-click an object. In the dialog box that appears, select the DML and DDL operations that you want to synchronize. For more information, see [SQL operations that can be synchronized](#section-yl0-u0w-s53).
        
    -   **Advanced Settings**
        
        **Parameter**
        
        **Description**
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data synchronization task. If the task fails or the synchronization latency exceeds the specified threshold, alert contacts will receive notifications. Valid values:
        
        -   **No**: does not configure alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see [Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz).
            
        
        **Capitalization of Object Names in Destination Instance**
        
        The capitalization of database names, table names, and column names in the destination instance. By default, **DTS default policy** is selected. You can select other options to ensure that the capitalization of object names is consistent with that in the source or destination database. For more information, see [Specify the capitalization of object names in the destination instance](/help/en/dts/user-guide/specify-the-capitalization-of-object-names-in-the-destination-instance-2#concept-2045083).
        
        **Copy the temporary table of the Online DDL tool that is generated in the source table to the destination database**
        
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
            
        
        **Retry Time for Failed Connection**
        
        The retry time range for failed connections. If the source or destination database fails to be connected after the data synchronization task is started, DTS immediately retries a connection within the time range. Valid values: 10 to 1440. Unit: minutes. Default value: 720. We recommend that you set this parameter to a value greater than 30. If DTS reconnects to the source and destination databases within the specified time range, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
        
        **Note**
        
        -   If you specify different retry time ranges for multiple data synchronization tasks that have the same source or destination database, the shortest retry time range takes precedence.
            
        -   When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
            
        
    
6.  Save the task settings and run a precheck.
    
    -   To view the parameters to be specified when you call the relevant API operation to configure the DTS task, move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters**.
        
    -   If you do not need to view or have viewed the parameters, click **Next: Save Task Settings and Precheck** in the lower part of the page.
        
    
    **Note**
    
    -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, run a precheck again.
        
    -   If an alert is generated for an item during the precheck, perform the following operations based on the scenario:
        
        -   If an alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issue. Then, run a precheck again.
            
        -   If an alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur and your business may be exposed to potential risks.
            
    
7.  Wait until the **success rate** becomes **100%**. Then, click **Next: Purchase Instance**.
    
8.  On the **Purchase Instance** page, configure the Billing Method and Instance Class parameters for the data synchronization instance. The following table describes the parameters.
    
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
    
9.  Read and select the **Data Transmission Service (Pay-as-you-go) Service Terms**.
    
10.  Click **Buy and Start** to start the data synchronization task. You can view the progress of the task in the task list.
