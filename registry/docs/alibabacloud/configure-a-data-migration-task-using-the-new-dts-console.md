Data Transmission Service (DTS) provides an easy-to-use data migration feature. To configure a data migration task, you need to only perform simple operations in the new DTS console.

## Usage notes

This topic provides a general procedure for configuring a data migration task. The procedure varies based on the source and destination databases. For more information, see [Overview of data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios#concept-26618-zh).

**Note**

This topic describes how to configure a task for data migration between ApsaraDB RDS for MySQL instances before a data migration instance is purchased. The parameter configurations in this topic are for reference only. The parameters that are required when you configure a data migration task are displayed in the DTS console.

## Prerequisites

-   If the source or destination database is a self-managed database, you must prepare the environments that are required by DTS. For more information, see [Preparation overview](/help/en/dts/user-guide/preparation-overview#concept-2364477).
    
-   The source and destination databases are created and the database versions are supported by DTS. For more information about the supported database types and versions, see [Overview of data migration scenarios](/help/en/dts/user-guide/overview-of-data-migration-scenarios#concept-26618-zh).
    

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
        
    2.  In the top navigation bar, move the pointer over **Data + AI** > **DTS (DTS)** > **Data Migration** .
        
    3.  From the drop-down list to the right of **Data Migration Tasks**, select the region in which the data synchronization instance resides.
        
    
2.  Click **Create Task** to go to the task configuration page.
    
3.  **Optional.** Click **New Configuration Page** in the upper-right corner of the page.
    
    **Note**
    
    -   Skip this step if the **Back to Previous Version** button is displayed in the upper-right corner of the page.
        
    -   Specific parameters in the new and previous versions of the configuration page may be different. We recommend that you use the new version of the configuration page.
        
    
4.  Configure the source and destination databases. The following table describes the parameters.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed in the upper part of the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the DTS task. DTS automatically generates a task name. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select a DMS database instance.**
    
    In this example, no database instance is selected. Configure the following database information.
    
    **Database Type**
    
    The type of the source database. Select **MySQL**.
    
    **Access Method**
    
    The access method of the source database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region in which the source ApsaraDB RDS for MySQL instance resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    In this example, a database instance of the current Alibaba Cloud account is used. Select **No**.
    
    **RDS Instance ID**
    
    The ID of the source ApsaraDB RDS for MySQL instance.
    
    **Database Account**
    
    The database account of the source ApsaraDB RDS for MySQL instance. The account must have the SELECT permission on the objects to be migrated, the REPLICATION CLIENT permission, and the REPLICATION SLAVE permission.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    In this example, you can use the default setting.
    
    **Destination Database**
    
    **Select a DMS database instance.**
    
    In this example, no database instance is selected. Configure the following database information.
    
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
    
    The database account of the destination ApsaraDB RDS for MySQL instance. The account must have the read and write permissions on the destination database.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    In this example, you can use the default setting.
    
5.  In the lower part of the page, click **Test Connectivity and Proceed**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the IP address whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the self-managed database is hosted on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the IP address whitelist of the database to allow DTS to access the database. For more information, see the [CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353) section of the Add the CIDR blocks of DTS servers topic.
    
    **Warning**
    
    If the public CIDR blocks of DTS servers are automatically or manually added to the whitelist of a database instance or to the security group rules of an ECS instance, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or security group rules and forbidding unauthorized CIDR blocks, or connecting the database instance to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
6.  Configure the objects to be migrated.
    
    1.  On the **Configure Objects** page, configure the objects that you want to migrate.
        
        In this example, make sure that **Schema Migration**,**Full Data Migration**, and **Incremental Data Migration** are selected for **Migration Types**, and the objects to be migrated are selected from the **Source Objects** section. Retain the default settings for other parameters. You can also configure the parameters based on your business requirements.
        
        **Configuration description**
        
        **Parameter**
        
        **Description**
        
        **Migration Types**
        
        -   To perform only full data migration, select **Schema Migration** and **Full Data Migration**.
            
        -   To ensure service continuity during data migration, select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
            
        
        **Note**
        
        -   If you do not select **Schema Migration**, make sure a database and a table are created in the destination database to receive data and the object name mapping feature is enabled in **Selected Objects**.
            
        -   If you do not select **Incremental Data Migration**, we recommend that you do not write data to the source database during data migration. This ensures data consistency between the source and destination databases.
            
        
        **Method to Migrate Triggers in Source Database**
        
        The method that is used to migrate triggers from the source database. You can select a migration method based on your business requirements. If no triggers are to be migrated, you do not need to configure this parameter. For more information, see [Synchronize or migrate triggers from the source database](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139).
        
        **Note**
        
        This parameter is available only if you select both **Schema Migration** and **Incremental Data Migration** for **Migration Types**.
        
        **Enable Migration Assessment**
        
        Specifies whether to enable migration assessment. Migration assessment aims to check whether the schemas of the source and destination databases, such as the length of indexes, stored procedures, and dependent tables, meet the requirements. You can select **Yes** or **No** based on your business requirements.
        
        **Note**
        
        -   You can configure this parameter only if you select **Schema Migration** for **Migration Types**.
            
        -   If you select **Yes**, the precheck may take more time. You can view **Assessment Result** during the precheck. The assessment results do not affect the precheck results.
            
        
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
        
        -   To specify WHERE conditions to filter data, right-click a table in the **Selected Objects** section. In the dialog box that appears, specify the conditions. For more information, see [Set filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
            
        -   To migrate DML or DDL operations performed on a specific database or table, right-click the object in the **Selected Objects** section. In the dialog box that appears, select the DML or DDL operations that you want to migrate.
            
        
    2.  Click **Next: Advanced Settings** to configure advanced settings.
        
        In this example, you can use the default settings or configure the parameters based on your business requirements.
        
        **Configuration description**
        
        **Parameter**
        
        **Description**
        
        **Dedicated Cluster for Task Scheduling**
        
        By default, DTS schedules the data migration task to the shared cluster if you do not specify a dedicated cluster. If you want to improve the stability of data migration tasks, purchase a dedicated cluster. For more information, see [What is a DTS dedicated cluster](/help/en/dts/user-guide/what-is-a-dts-dedicated-cluster#concept-2183964).
        
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
        
        Specifies whether to migrate the account information of the source database. You can configure this parameter based on your business requirements. If you select **Yes**, you must select the accounts that you want to migrate and check the permissions of the source and destination database accounts used in the data migration task. For more information such as authorization methods, see [Migrate database accounts](/help/en/dts/user-guide/permissions-for-database-accounts-to-migrate-account-information).
        
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
        
        The environment tag that is used to identify the DTS instance. You can select an environment tag based on your business requirements.
        
        **Configure ETL**
        
        Specifies whether to enable the extract, transform, and load (ETL) feature. For more information, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705) Valid values:
        
        -   **Yes**: configures the ETL feature. You can enter data processing statements in the code editor. For more information, see [Configure ETL in a data migration or data synchronization task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
            
        -   **No**: does not configure the ETL feature.
            
        
        **Whether to delete SQL operations on heartbeat tables of forward and reverse tasks**
        
        Specifies whether to write SQL operations on heartbeat tables to the source database while the DTS instance is running. Valid values:
        
        -   **Yes**: does not write SQL operations on heartbeat tables. In this case, a latency of the DTS instance may be displayed.
            
        -   **No**: writes SQL operations on heartbeat tables. In this case, features such as physical backup and cloning of the source database may be affected.
            
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data migration task. If the task fails or the migration latency exceeds the specified threshold, the alert contacts receive notifications. Valid values:
        
        -   **No**: does not configure alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see the [Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz) section of the Configure monitoring and alerting topic.
            
        
    3.  Click **Next Step: Data Verification** to configure the data verification task.
        
        For more information about how to use the data verification feature, see [Configure a data verification task](/help/en/dts/user-guide/enable-data-verification#task-2249288).
        
    
7.  Save the task settings and run a precheck.
    
    -   To view the parameters to be specified when you call the relevant API operation to configure the DTS task, move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters**.
        
    -   If you do not need to view or have viewed the parameters, click **Next: Save Task Settings and Precheck** in the lower part of the page.
        
    
    **Note**
    
    -   Before you can start the data migration task, DTS performs a precheck. You can start the data migration task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, run a precheck again.
        
    -   If an alert is triggered for an item during the precheck:
        
        -   If an alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issues. Then, run a precheck again.
            
        -   If the alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur, and your business may be exposed to potential risks.
            
    
8.  Wait until **Success Rate** becomes **100%**. Then, click **Next: Purchase Instance**.
    
9.  Purchase a data migration instance.
    
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
