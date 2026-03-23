This topic describes how to migrate data from an Amazon Aurora MySQL cluster to a PolarDB for MySQL cluster by using Data Transmission Service (DTS). DTS supports schema migration, full data migration, and incremental data migration. When you configure a data migration task, you can select all of the supported migration types to ensure service continuity.

## Prerequisites

-   DTS can connect to the source Amazon Aurora MySQL cluster.
    
    We recommend that you set **Publicly accessible** to **Yes** in the network and security settings of the source Amazon Aurora MySQL cluster. Then, set **Access Method** to **Public IP Address** for the source database when you configure the data migration task. This way, DTS can access the source Amazon Aurora MySQL cluster over the Internet.
    
    **Note**
    
    For information about how to connect DTS to the source Amazon Aurora MySQL cluster by using a VPN gateway, see [Use IPsec-VPN to connect Alibaba Cloud VPCs to Amazon VPCs](/help/en/vpn/sub-product-ipsec-vpn/use-cases/through-ipsec-vpn-alibaba-cloud-vpc-and-aws-vpc-can-communicate).
    
-   A PolarDB for MySQL cluster is created. For more information, see [Purchase an Enterprise Edition cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster#task-1580301).
    
-   The available storage space of the PolarDB for MySQL cluster is larger than the total size of the data in the Amazon Aurora MySQL cluster.
    

## Limits

-   DTS uses read and write resources of the source and destination databases during full data migration. This may increase the loads of the database servers. If the database performance is unfavorable, the specification is low, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source database, the tables have no primary keys, or a deadlock occurs in the destination database. Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. For example, you can migrate data when the CPU utilization of the source and destination databases is less than 30%.
    
-   The source database must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   DTS uses the `ROUND(COLUMN,PRECISION)` function to retrieve values from columns of the FLOAT or DOUBLE data type. If you do not specify a precision, DTS sets the precision for the FLOAT data type to 38 digits and the precision for the DOUBLE data type to 308 digits. You must check whether the precision settings meet your business requirements.
    
-   If the name of the source database is invalid, you must create a database in the PolarDB for MySQL cluster before you configure a data migration task.
    
    **Note**
    
    For more information about how to create a database and the database naming conventions, see [Database Management](/help/en/polardb/polardb-for-mysql/user-guide/database-management-4).
    
-   If a data migration task fails, DTS automatically resumes the task. Before you switch your workloads to the destination database, stop or release the data migration task. Otherwise, the data in the source database overwrites the data in the destination database after the task is resumed.
    

## Billing rules

**Migration type**

**Task configuration fee**

**Internet traffic fee**

Schema migration and full data migration

Free of charge.

Charged only when data is migrated from Alibaba Cloud over the Internet. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

Incremental data migration

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Migration types

-   Schema migration
    
    DTS migrates the schemas of objects to the PolarDB for MySQL cluster. DTS supports schema migration for the following types of objects: table, view, trigger, stored procedure, and function. DTS does not support schema migration for events.
    
    **Note**
    
    -   During schema migration, DTS changes the value of the SECURITY attribute from DEFINER to INVOKER for views, stored procedures, and stored functions.
        
    -   DTS does not migrate user information. To call a view, stored procedure, or stored function of the destination database, you must grant the read and write permissions to INVOKER.
        
    
-   Full data migration
    
    DTS migrates historical data of the required objects from the Amazon Aurora MySQL cluster to the PolarDB for MySQL cluster.
    
    **Note**
    
    During full data migration, concurrent INSERT operations cause fragmentation in the tables of the destination database. After full data migration is complete, the size of used tablespace of the destination database is larger than that of the source database.
    
-   Incremental data migration
    
    After full data migration is complete, DTS retrieves binary log files from the Amazon Aurora MySQL cluster. Then, DTS synchronizes incremental data from the Amazon Aurora MySQL cluster to the PolarDB for MySQL cluster. Incremental data migration allows you to ensure service continuity when you migrate data between MySQL databases.
    

## Permissions required for database accounts

**Database**

**Schema migration**

**Full data migration**

**Incremental data migration**

Amazon Aurora MySQL

SELECT permission on the objects to be migrated

SELECT permission on the objects to be migrated

SELECT permission on the objects to be migrated, REPLICATION SLAVE permission, REPLICATION CLIENT permission, and SHOW VIEW permission

PolarDB for MySQL

Read and write permissions on the objects to be migrated

Read and write permissions on the objects to be migrated

Read and write permissions on the objects to be migrated

For more information about how to create a database account and grant permissions to the database account, see the following topics:

-   Amazon Aurora MySQL cluster: [Create an account for a self-managed MySQL database and configure binary logging](/help/en/dts/user-guide/create-an-account-for-a-self-managed-mysql-database-and-configure-binary-logging#concept-1198525)
    
-   PolarDB for MySQL cluster: [Create a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts).
    

## Preparations

1.  Log on to the Amazon Aurora console.
    
2.  In the left-side navigation pane, click **Databases**.
    
3.  Click the **DB identifier** of the node whose **Role** is **Writer instance**.
    
4.  On the **Connectivity & security** tab, click the name of the VPC security group that corresponds to the node.
    
5.  On the **Security Groups** page, click the ID of the security group that you want to configure.
    
6.  On the **Inbound rules** tab, click **Edit inbound rules**.
    
7.  On the **Edit inbound rules** page, click **Add rule**, add the CIDR blocks of DTS servers that reside in the corresponding region to the inbound rule, and then click **Save rules**. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
    **Note**
    
    -   You need to add only the CIDR blocks of DTS servers that reside in the same region as the destination database. For example, the source database resides in the Singapore region and the destination database resides in the China (Hangzhou) region. You need to add only the CIDR blocks of DTS servers that reside in the China (Hangzhou) region.
        
    -   You can add all of the required CIDR blocks to the inbound rule at a time.
        
    -   If you have other questions, see the official documentation of Amazon or contact technical support.
        
    
8.  Log on to the source Amazon Aurora MySQL cluster and specify the retention period of binary log files. Skip this step if you do not need to perform incremental data migration.
    
    ```
    call mysql.rds_set_configuration('binlog retention hours', 24);
    ```
    
    **Note**
    
    -   The preceding statement sets the retention period of binary log files to 24 hours. The maximum retention period is 168 hours, which equals seven days.
        
    -   The binary logging feature of the Amazon Aurora MySQL cluster must be enabled and the value of the binlog\_format parameter must be set to row. If the MySQL version is 5.6 or later, the value of the binlog\_row\_image parameter must be set to full. For more information, see the official documentation of Amazon or contact technical support.
        
    

## Procedure (in the new DTS console)

1.  Go to the Data Migration Tasks page.
    
    1.  Log on to the [Data Management (DMS) console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, click **DTS**.
        
    3.  In the left-side navigation pane, choose **DTS (DTS)** > **Data Migration**.
        
    
    **Note**
    
    -   Operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
        
    -   You can also go to the [Data Migration Tasks page of the new DTS console](https://dts.alibabacloud.com/migrate/cn-hangzhou?resourceGroupId=).
        
    
2.  From the drop-down list next to **Data Migration Tasks**, select the region in which the data migration instance resides.
    
    **Note**
    
    If you use the new DTS console, you must select the region in which the data migration instance resides in the upper-left corner.
    
3.  Click **Create Task**. Configure the source and destination databases.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed in the upper part of the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the task. DTS automatically assigns a name to the task. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select a DMS database instance**
    
    The database instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing instance, you must configure parameters for the source database.
        
    
    **Database Type**
    
    The type of the source database. Select **MySQL**.
    
    **Access Method**
    
    The access method of the source database. Select **Public IP Address**.
    
    **Instance Region**
    
    The region in which the Amazon Aurora MySQL cluster resides.
    
    **Note**
    
    If the region in which the Amazon Aurora MySQL cluster resides is not displayed in the drop-down list, select a region that is geographically closest to the Amazon Aurora MySQL cluster.
    
    **Hostname or IP Address**
    
    The endpoint that is used to access the Amazon Aurora MySQL cluster.
    
    **Note**
    
    You can obtain the endpoint on the basic information page of the Amazon Aurora MySQL cluster.
    
    **Port Number**
    
    The service port number of the Amazon Aurora MySQL cluster. Default value: **3306**.
    
    **Database Account**
    
    The database account of the Amazon Aurora MySQL cluster. For information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-dsb-md9-s9i) section of this topic.
    
    **Database Password**
    
    The password of the database account.
    
    **Destination Database**
    
    **Select a DMS database instance**
    
    The database instance that you want to use. You can choose whether to use an existing instance based on your business requirements.
    
    -   If you select an existing instance, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing instance, you must configure parameters for the source database.
        
    
    **Database Type**
    
    The type of the destination database. Select **PolarDB for MySQL**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the destination PolarDB for MySQL cluster resides.
    
    **PolarDB Cluster ID**
    
    The ID of the destination PolarDB for MySQL cluster.
    
    **Database Account**
    
    The database account of the destination PolarDB for MySQL cluster. For information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-dsb-md9-s9i) section of this topic.
    
    **Database Password**
    
    The password of the database account.
    
4.  In the lower part of the page, click **Test Connectivity and Proceed**.
5.  If an IP address whitelist is configured for your self-managed database, add the CIDR blocks of DTS servers to the IP address whitelist. Then, click **Test Connectivity and Proceed**.
    
    **Warning**
    
    If the public CIDR blocks of DTS servers are automatically or manually added to the whitelist of a database instance or to the security group rules of an ECS instance, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or security group rules and forbidding unauthorized CIDR blocks, or connecting the database instance to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
6.  Configure the objects to be migrated and advanced settings.
    
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
        
        -   If the source and destination databases have the same schema, DTS does not migrate data records that have the same primary keys as data records in the destination database.
            
        -   If the source and destination databases have different schemas, only specific columns are migrated or the data migration task fails. Proceed with caution.
            
        
    
    **Method to Migrate Triggers in Source Database**
    
    The method used to migrate triggers from the source database. You can select a migration method based on your business requirements. If no triggers are to be migrated, you do not need to configure this parameter. For more information, see [Synchronize or migrate triggers from the source database](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139).
    
    **Note**
    
    You can configure this parameter only when you select **Schema Migration** as a migration type.**Migration Types**
    
    **Capitalization of Object Names in Destination Instance**
    
    The capitalization of database names, table names, and column names in the destination instance. By default, **DTS default policy** is selected. You can select other options to make sure that the capitalization of object names is consistent with that of the source or destination database. For more information, see [Specify the capitalization of object names in the destination instance](/help/en/dts/user-guide/specify-the-capitalization-of-object-names-in-the-destination-instance-2#concept-2045083).
    
    **Source Objects**
    
    Select one or more objects from the **Source Objects** section. Click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon and add the objects to the **Selected Objects** section.
    
    **Note**
    
    You can select columns, tables, or schemas as the objects to be migrated. If you select tables or columns as the objects to be migrated, DTS does not migrate other objects, such as views, triggers, or stored procedures, to the destination database.
    
    **Selected Objects**
    
    -   To rename an object that you want to migrate to the destination instance, right-click the object in the **Selected Objects** section. For more information, see [Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
    -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see [Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib).
    
    **Note**
    
    -   If you use the object name mapping feature to rename an object, other objects that depend on the object may fail to be migrated.
        
    -   To specify WHERE conditions to filter data, right-click a table in the **Selected Objects** section. In the dialog box that appears, specify the conditions. For more information, see [Set filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
        
    -   To migrate the SQL operations performed on a specific database or table, right-click the object in the **Selected Objects** section. In the dialog box that appears, select the SQL operations that you want to migrate.
        
    
7.  Click **Next: Advanced Settings** to configure advanced settings.
    
    -   **Data Verification Settings**
        
        For more information about how to use the data verification feature, see [Configure data verification](/help/en/dts/user-guide/enable-data-verification).
        
    -   **Advanced Settings**
        
        **Parameter**
        
        **Description**
        
        **Dedicated Cluster for Task Scheduling**
        
        By default, DTS schedules the task to a shared cluster. You do not need to configure this parameter. You can purchase a dedicated cluster of the specified specifications to run data migration tasks. For more information, see [What is a DTS dedicated cluster?](/help/en/dts/user-guide/what-is-a-dts-dedicated-cluster)
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data migration task. If the task fails or the migration latency exceeds the specified threshold, the alert contacts receive notifications. Valid values:
        
        -   **No**: does not configure alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see [Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz).
            
        
        **Select the engine type of the destination database**
        
        The engine type of the destination database. Valid values:
        
        -   **InnoDB**: the default storage engine.
            
        -   **X-Engine**: an online transaction processing (OLTP) database storage engine.
            
        
        **Copy the temporary table of the Online DDL tool that is generated in the source table to the destination database**
        
        If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) or the gh-ost tool to perform online DDL operations on the source database, you can specify whether to migrate the data of temporary tables generated by online DDL operations. Valid values:
        
        **Important**
        
        You cannot use tools such as pt-online-schema-change to perform online DDL operations on the source database. Otherwise, the DTS task fails.
        
        -   **Yes**: DTS migrates the data of temporary tables generated by online DDL operations.
            
            **Note**
            
            If online DDL operations generate a large amount of data, latency may occur for the data migration task.
            
        -   **No, Adapt to DMS Online DDL**: DTS does not migrate the data of temporary tables generated by online DDL operations. Only the original DDL operations that are performed by using [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) are migrated.
            
            **Note**
            
            If you select No, Adapt to DMS Online DDL, the tables in the destination database may be locked.
            
        -   **No, Adapt to gh-ost**: DTS does not migrate the data of temporary tables generated by online DDL operations. Only the original DDL operations that are performed by using the gh-ost tool are migrated. You can use the default or custom regular expressions to filter out the shadow tables of the gh-ost tool and tables that are not required.
            
            **Note**
            
            If you select No, Adapt to gh-ost, the tables in the destination database may be locked.
            
        
        **Retry Time for Failed Connections**
        
        The retry time range for failed connections. If the source or destination database fails to be connected after the data migration task is started, DTS immediately retries a connection within the time range. Valid values: 10 to 1440. Unit: minutes. Default value: 720. We recommend that you set the parameter to a value greater than 30. If DTS reconnects to the source and destination databases within the specified time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
        
        **Note**
        
        -   If you set different retry time ranges for multiple data migration tasks that have the same source or destination database, the shortest retry time range that is set takes precedence.
        -   When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
        
        **Retry Time for Other Issues**
        
        The retry time range for other issues. For example, if DDL or DML operations fail to be performed after the data migration task is started, DTS immediately retries the operations within the retry time range. Valid values: 1 to 1440. Unit: minutes. Default value: 10. We recommend that you set the parameter to a value greater than 10. If the failed operations are successfully performed within the specified retry time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
        
        **Important**
        
        The value of the **Retry Time for Other Issues** parameter must be smaller than the value of the **Retry Time for Failed Connections** parameter.
        
        **Enable Throttling for Full Data Migration**
        
        During full data migration, DTS uses the read and write resources of the source and destination databases. This may increase the loads on the database servers. You can specify whether to enable throttling for the full data migration task. If you select Yes, you can configure the **Queries per second (QPS) to the source database**, **RPS of Full Data Migration**, and **BPS of Full Data Migration** parameters based on your business requirements to relieve the load on the destination cluster.
        
        **Note**
        
        You can configure this parameter only when you select **Full Data Migration** as a migration type.**Migration Types**
        
        **Enable Throttling for Incremental Data Migration**
        
        You can specify whether to enable throttling for the incremental data migration task. If you select Yes, you can configure the **RPS of Incremental Data Migration** and **BPS of Incremental Data Migration** parameters based on your business requirements to relieve the load on the destination cluster.
        
        **Note**
        
        You can configure this parameter only when you select **Incremental Data Migration** as a migration type.**Migration Types**
        
        **Configure ETL**
        
        Specifies whether to enable the extract, transform, and load (ETL) feature. For more information, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705) Valid values:
        
        -   **Yes**: configures the ETL feature. You can enter data processing statements in the code editor. For more information, see [Configure ETL in a data migration or data synchronization task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
            
        -   **No**: does not configure the ETL feature.
            
        
        **Whether to delete SQL operations on heartbeat tables of forward and reverse tasks**
        
        Specifies whether to write SQL operations on heartbeat tables to the source database while the DTS instance is running.
        
        -   **Yes**: does not write SQL operations on heartbeat tables. In this case, a latency of the DTS instance may be displayed.
            
        -   **No**: writes SQL operations on heartbeat tables. In this case, specific features such as physical backup and cloning of the source database may be affected.
            
        
    
8.  In the lower part of the page, click **Next: Save Task Settings and Precheck**.
    
    You can move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters** to view the parameters to be specified when you call the relevant API operation to configure the DTS task.
    
    **Note**
    
    -   Before you can start the data migration task, DTS performs a precheck. You can start the data migration task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, run a precheck again.
        
    -   If an alert is generated for an item during the precheck, perform the following operations based on the scenario:
        
        -   If the alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issues. Then, run a precheck again.
            
        -   If the alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur and your business may be exposed to potential risks.
            
    
9.  Wait until the **success rate** becomes **100%**. Then, click **Next: Purchase Instance**.
    
10.  On the **Purchase Instance** page, configure the Instance Class parameter for the data migration instance. The following table describes the parameters.
     
     **Section**
     
     **Parameter**
     
     **Description**
     
     **New Instance Class**
     
     **Resource Group Settings**
     
     The resource group to which the data migration instance belongs. Default value: **default resource group**. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb)
     
     **Instance Class**
     
     DTS provides instance classes that vary in the migration speed. You can select an instance class based on your business scenario. For more information, see [Instance classes of data migration instances](/help/en/dts/product-overview/specifications-of-data-migration-instances#concept-26606-zh).
     
11.  Read and agree to **Data Transmission Service (Pay-as-you-go) Service Terms** by selecting the check box.
     
12.  Click **Buy and Start** to start the data migration task. You can view the progress of the task in the task list.
     

## Procedure (in the old DTS console)

1.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    If you are redirected to the Data Management (DMS) console, you can click the ![old](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2274020761/p529428.png) icon in the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3856567171/p805074.png) to go to the previous version of the DTS console.
    
2.  In the left-side navigation pane, click **Data Migration**.
    
3.  At the top of the **Migration Tasks** page, select the region where the destination cluster resides.
    
4.  In the upper-right corner of the page, click **Create Migration Task**.
    
5.  Configure the source and destination databases.
    
    ![源库及目标库配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2503019951/p40701.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Task Name
    
    The task name that DTS automatically generates. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    Source Database
    
    Instance Type
    
    The type of the source database. Select **User-Created Database with Public IP Address**.
    
    Instance Region
    
    The region in which the source database resides. If you select **User-Created Database with Public IP Address** as the instance type of the source database, you do not need to specify the **Instance Region** parameter.
    
    Database Type
    
    The type of the source database. Select **MySQL**.
    
    Hostname or IP Address
    
    The endpoint that is used to access the Amazon Aurora MySQL cluster.
    
    **Note**
    
    You can obtain the endpoint on the basic information page of the Amazon Aurora MySQL cluster.
    
    ![连接地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2503019951/p41949.png)
    
    Port Number
    
    The service port number of the Amazon Aurora MySQL cluster. Default value: **3306**.
    
    Database Account
    
    The database account of the Amazon Aurora MySQL cluster. For information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-dsb-md9-s9i) section of this topic.
    
    Database Password
    
    The password of the database account.
    
    **Note**
    
    After you configure the source database parameters, click **Test Connectivity** next to **Database Password** to verify whether the configured parameters are valid. If the configured parameters are valid, the **Passed** message is displayed. If the **Failed** message is displayed, click **Check** next to **Failed** to modify the source database parameters based on the check results.
    
    Destination Database
    
    Instance Type
    
    The type of the destination database. Select **PolarDB**.
    
    Instance Region
    
    The region in which the PolarDB for MySQL cluster resides.
    
    PolarDB Instance ID
    
    The ID of the destination PolarDB for MySQL cluster.
    
    Database Account
    
    The database account of the destination PolarDB for MySQL cluster. For information about the permissions that are required for the account, see the [Permissions required for database accounts](#section-dsb-md9-s9i) section of this topic.
    
    Database Password
    
    The password of the database account.
    
    **Note**
    
    After you configure the destination database parameters, click **Test Connectivity** next to **Database Password** to verify whether the configured parameters are valid. If the configured parameters are valid, the **Passed** message is displayed. If the **Failed** message is displayed, click **Check** next to **Failed** to modify the destination database parameters based on the check results.
    
6.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    If the source or destination database instance is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, or is a self-managed database hosted on ECS, DTS automatically adds the CIDR blocks of DTS servers to a whitelist of the database instance or ECS security group rules. If the source or destination database is a self-managed database on data centers or is from other cloud service providers, you must manually add the CIDR blocks of DTS servers to allow DTS to access the database. For more information, see the "CIDR blocks of DTS servers" section of the [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353) topic.
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhance the security of your username and password, limit the ports that are exposed, authenticate API calls, regularly check the whitelist or ECS security group rules and forbid unauthorized CIDR blocks, or connect the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
7.  Select the objects to be migrated and the migration types.
    
    ![选择迁移对象和类型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1947370261/p56880.png)
    
    **Setting**
    
    **Description**
    
    Select the migration types
    
    -   To perform only full data migration, select **Schema Migration** and **Full Data Migration**.
        
    -   To ensure service continuity during data migration, select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
        
    
    **Note**
    
    If **Incremental Data Migration** is not selected, we recommend that you do not write data to the Amazon Aurora MySQL cluster during full data migration. This ensures data consistency between the source and destination databases.
    
    Select the objects to be migrated
    
    Select one or more objects from the **Available** section and click the ![向右小箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon to move the objects to the **Selected** section.
    
    **Note**
    
    -   You can select columns, tables, or databases as the objects to be migrated.
        
    -   By default, after an object is migrated to the destination database, the name of the object remains unchanged in the destination database. You can use the object name mapping feature to rename the objects that are migrated to the destination database. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
        
    -   If you use the object name mapping feature to rename an object, other objects that depend on the object may fail to be migrated.
        
    
    Specify whether to rename objects
    
    You can use the object name mapping feature to rename the objects that are migrated to the destination database. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Specify the retry time range for a failed connection to the source or destination database
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 12 hours. You can specify the retry time range based on your business requirements. If DTS reconnects to the source and destination databases within the specified retry time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
    
    **Note**
    
    When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at the earliest opportunity after the source and destination instances are released.
    
    Specify whether to copy temporary tables to the destination database when DMS performs online DDL operations on the source table
    
    If you use [Data Management (DMS)](/help/en/dms/product-overview/what-is-dms#task-1919582) to perform online DDL operations on the source database, you can specify whether to migrate temporary tables generated by online DDL operations. Valid values:
    
    -   **Yes**: DTS migrates the data of temporary tables generated by online DDL operations.
        
        **Note**
        
        If online DDL operations generate a large amount of data, latency may occur for the data migration task.
        
    -   **No**: DTS does not migrate the data of temporary tables generated by online DDL operations. Only the original DDL data of the source database is migrated.
        
        **Note**
        
        If you select No, the tables in the PolarDB for MySQL cluster may be locked.
        
    
8.  In the lower-right corner of the page, click **Precheck**.
    
    **Note**
    
    -   Before you can start the data migration task, DTS performs a precheck. You can start the data migration task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, you can click the ![Info icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to each failed item to view details.
        
        -   You can troubleshoot the issues based on the causes and run a precheck again.
            
        -   If you do not need to troubleshoot the issues, you can ignore failed items and run a precheck again.
            
    
9.  After the task passes the precheck, click **Next**.
    
10.  In the **Confirm Settings** dialog box, specify the **Channel Specification** parameter and select **Data Transmission Service (Pay-As-You-Go) Service Terms**.
     
11.  Click **Buy and Start** to start the data migration task.
     
     -   Schema migration and full data migration
         
         We recommend that you do not manually stop the task during full data migration. Otherwise, the data migrated to the destination database may be incomplete. You can wait until the data migration task automatically stops.
         
     -   Schema migration, full data migration, and incremental data migration
         
         An incremental data migration task does not automatically stop. You must manually stop the task.
         
         **Important**
         
         We recommend that you select an appropriate time to manually stop the data migration task. For example, you can stop the task during off-peak hours or before you switch your workloads to the destination cluster.
         
         1.  Wait until **Incremental Data Migration** and **The migration task is not delayed** appear in the progress bar of the migration task. Then, stop writing data to the source database for a few minutes. The latency of **incremental data migration** may be displayed in the progress bar.
             
         2.  Wait until the status of **incremental data migration** changes to **The migration task is not delayed** again. Then, manually stop the migration task. ![Stop an incremental data migration task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5073333461/p47604.png)
             
     
12.  Switch your workloads to the PolarDB for MySQL cluster.
