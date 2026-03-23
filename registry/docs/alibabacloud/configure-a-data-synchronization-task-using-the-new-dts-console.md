The data synchronization feature of Data Transmission Service (DTS) is user-friendly. You can configure a data synchronization task in a few simple steps by using the new console.

## User notes

This topic describes the general procedure for configuring a data synchronization task. The specific steps may vary slightly depending on the synchronization topology. For detailed instructions on a specific topology, refer to the relevant configuration guide in [Overview of data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios#concept-1732301).

**Note**

This topic uses a one-way synchronization task between RDS for MySQL instances (configured before purchase) as an example. The parameters shown are for reference only and may differ from those on the console.

## Prerequisites

-   If the source or destination database is a self-managed database, you must perform additional preparations to meet DTS environment requirements. For more information, see [Preparations](/help/en/dts/user-guide/preparations/).
    
-   Create the source and destination database instances that are supported by DTS. For a list of supported databases and versions, see [Overview of data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios#concept-1732301).
    

## Procedure

1.  Use one of the following methods to go to the Data Synchronization page and select the region in which the data synchronization instance resides.
    
    ### DTS console
    
    1.  Log on to the [DTS console](https://dts.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Data Synchronization**.
        
    3.  In the upper-left corner of the page, select the region in which the data synchronization task resides.
        
    
    ### DMS console
    
    **Note**
    
    The actual operations may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode#concept-2103267) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements#task-2134256).
    
    1.  Log on to the [DMS console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, move the pointer over **Data + AI** and choose **DTS (DTS)** > **Data Synchronization**.
        
    3.  From the drop-down list to the right of **Data Synchronization Tasks**, select the region in which the data synchronization instance resides.
        
    
2.  Click **Create Task** to go to the task configuration page.
    
3.  **Optional.** Click **New Configuration Page** in the upper-right corner of the page.
    
    **Note**
    
    -   Skip this step if the **Back to Previous Version** button is displayed in the upper-right corner of the page.
        
    -   Specific parameters in the new and previous versions of the configuration page may be different. We recommend that you use the new version of the configuration page.
        
    
4.  Configure the source and destination databases. The following table describes the parameters.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed on the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Category**
    
    **Configuration**
    
    **Description**
    
    None
    
    **Task Name**
    
    The name of the DTS task. DTS automatically generates a task name. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select Existing Connection**
    
    For this example, leave this blank and enter the database details below.
    
    **Database Type**
    
    Select **MySQL**.
    
    **Access Method**
    
    Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    Select the region where the source ApsaraDB RDS for MySQL instance resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    In this example, a database of the current Alibaba Cloud account is used. Select **No**.
    
    **RDS Instance ID**
    
    Select the ID of the source ApsaraDB RDS for MySQL instance.
    
    **Database Account**
    
    Enter the database account of the source ApsaraDB RDS for MySQL instance. The account requires the REPLICATION CLIENT, REPLICATION SLAVE, and SELECT permissions on the objects to be synchronized.
    
    **Database Password**
    
    The password that is used to access the database.
    
    **Encryption**
    
    For this example, keep the default selection.
    
    **Destination Database**
    
    **Select Existing Connection**
    
    For this example, leave this blank and enter the database details below.
    
    **Database Type**
    
    Select **MySQL**.
    
    **Access Method**
    
    Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    Select the region where the destination ApsaraDB RDS for MySQL instance resides.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    In this example, a database of the current Alibaba Cloud account is used. Select **No**.
    
    **RDS Instance ID**
    
    Select the ID of the destination ApsaraDB RDS for MySQL instance.
    
    **Database Account**
    
    Enter the database account of the destination ApsaraDB RDS for MySQL instance. The account must have read and write permissions.
    
    **Database Password**
    
    The password that is used to access the database.
    
    **Encryption**
    
    For this example, keep the default selection.
    
5.  Click **Test Connectivity and Proceed** in the lower part of the page.
    
    **Note**
    
    -   Make sure that the CIDR blocks of DTS servers can be automatically or manually added to the security settings of the source and destination databases to allow access from DTS servers. For more information, see [Add DTS server IP addresses to a whitelist](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases).
        
    -   If the source or destination database is a self-managed database and its **Access Method** is not set to **Alibaba Cloud Instance**, click **Test Connectivity** in the **CIDR Blocks of DTS Servers** dialog box.
        
    
6.  Configure the objects to be synchronized.
    
    1.  In the **Configure Objects** step, configure the objects that you want to synchronize.
        
        In this example, ensure that you select **Schema Synchronization**, **Full Data Synchronization**, and **Incremental Data Synchronization** under **Synchronization Types**. In the **Source Objects** box select the objects to synchronize. Keep the default settings for other parameters, or adjust them according to your needs.
        
        **Parameter description**
        
        **Configuration**
        
        **Description**
        
        **Synchronization Types**
        
        The synchronization types. By default, **Incremental Data Synchronization** is selected. You must also select **Schema Synchronization** and **Full Data Synchronization**. After the precheck is complete, DTS synchronizes the historical data of the selected objects from the source database to the destination cluster. The historical data is the basis for subsequent incremental synchronization.
        
        **Method to Migrate Triggers in Source Database**
        
        Select a method to synchronize triggers as needed. If the objects to be synchronized do not involve triggers, you can skip this configuration. For more information, see [Configure a method to synchronize or migrate triggers](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139).
        
        **Note**
        
        This parameter is available only if **Schema Synchronization** is selected under **Synchronization Types**.
        
        **Enable Migration Assessment**
        
        Choose whether to assess if the source and destination database schemas (e.g., index length, stored procedures, table dependencies) meet the requirements. You can select **Yes** or **No**.
        
        **Note**
        
        -   This parameter is available only if **Schema Synchronization** is selected under **Synchronization Types**.
            
        -   If you select **Yes**, the precheck may take longer. You can view **Assessment Result** during the precheck. The evaluation results do not affect the precheck results.
            
        
        **Synchronization Topology**
        
        Select **One-way Synchronization**.
        
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
                    
            -   If the source and destination databases have different schemas, data may fail to be initialized. In this case, only some columns are synchronized, or the data synchronization instance fails. Proceed with caution.
                
            
        
        **Capitalization of Object Names in Destination Instance**
        
        The capitalization of database names, table names, and column names in the destination instance. By default, **DTS default policy** is selected. You can select other options to ensure that the capitalization of object names is consistent with that in the source or destination database. For more information, see [Specify the capitalization of object names in the destination instance](/help/en/dts/user-guide/specify-the-capitalization-of-object-names-in-the-destination-instance-2#concept-2045083).
        
        **Source Objects**
        
        Select one or more objects from the **Source Objects** section and click the ![向右](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3405433761/p511455.jpg) icon to add the objects to the **Selected Objects** section.
        
        **Note**
        
        You can select columns, tables, or databases as objects to synchronize. If you select tables or columns as the objects to be synchronized, DTS does not synchronize other objects such as views, triggers, and stored procedures to the destination database.
        
        **Selected Objects**
        
        -   To rename an object that you want to synchronize to the destination instance, right-click the object in the **Selected Objects** section. For more information, see the "[Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l)" section of the Map object names topic.
            
        -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see the "[Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib)" section of the Map object names topic.
            
        
        **Note**
        
        -   To select which SQL operations (DML/DDL) to synchronize at the database or table level, right-click the object in the **Selected Objects** box and choose the desired operations.
            
        -   To filter data using a `WHERE` clause, right-click a table in the **Selected Objects** box and define the filter condition. For more information, see [Specify filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
            
        
    2.  Click **Next: Advanced Settings** to configure advanced settings.
        
        In this example, you can keep the default settings or configure the parameters as needed.
        
        **Parameter description**
        
        **Configuration**
        
        **Description**
        
        **Dedicated Cluster for Task Scheduling**
        
        By default, DTS schedules the task to the shared cluster if you do not specify a dedicated cluster. If you want to improve the stability of data synchronization instances, purchase a dedicated cluster. For more information, see [What is a DTS dedicated cluster](/help/en/dts/user-guide/what-is-a-dts-dedicated-cluster#concept-2183964).
        
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
        
        Select whether to synchronize the account information from the source database. If you select **Yes**, you must also select the accounts to synchronize and confirm their permissions. For more information about authorization methods, see [Migrate database accounts](/help/en/dts/user-guide/permissions-for-database-accounts-to-migrate-account-information).
        
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
        
        **Environment Tag**
        
        You can select an environment tag to identify the instance as needed.
        
        **Whether to delete SQL operations on heartbeat tables of forward and reverse tasks**
        
        Specifies whether to write SQL operations on heartbeat tables to the source database while the DTS instance is running. Valid values:
        
        -   **Yes**: does not write SQL operations on heartbeat tables. In this case, a latency of the DTS instance may be displayed.
            
        -   **No**: writes SQL operations on heartbeat tables. In this case, features such as physical backup and cloning of the source database may be affected.
            
        
        **Configure ETL**
        
        Choose whether to enable the extract, transform, and load (ETL) feature. For more information, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705) Valid values:
        
        -   **Yes**: Enables the ETL feature. Enter data processing statements in the code editor. For more information, see [Configure ETL in a data migration or data synchronization task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
            
        -   **No**: Disables the ETL feature.
            
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data synchronization instance. If the task fails or the synchronization latency exceeds the specified threshold, alert contacts will receive notifications. Valid values:
        
        -   **No**: does not enable alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see the "[Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz)" section of the Configure monitoring and alerting topic.
            
        
    3.  Click **Next Step: Data Verification** to configure data verification.
        
        For more information about how to use the data verification feature, see [Configure a data verification task](/help/en/dts/user-guide/enable-data-verification#task-2249288).
        
    
7.  Save the task settings and run a precheck.
    
    -   To view the parameters to be specified when you call the relevant API operation to configure the DTS task, move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters**.
        
    -   If you do not need to view or have viewed the parameters, click **Next: Save Task Settings and Precheck** in the lower part of the page.
        
    
    **Note**
    
    -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
        
    -   If the data synchronization task fails the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, rerun the precheck.
        
    -   If an alert is triggered for an item during the precheck:
        
        -   If an alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issue. Then, run a precheck again.
            
        -   If an alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur, and your business may be exposed to potential risks.
            
    
8.  Purchase the instance.
    
    1.  Wait until the **Success Rate** becomes **100%**. Then, click **Next: Purchase Instance**.
        
    2.  On the **buy** page, configure the Billing Method and Instance Class parameters for the data synchronization task. The following table describes the parameters.
        
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
        
    3.  Read and select **Data Transmission Service (Pay-as-you-go) Service Terms**.
        
    4.  Click **Buy and Start**. In the dialog box that appears, click ****OK****.
        
        You can view the progress of the task in the task list.
