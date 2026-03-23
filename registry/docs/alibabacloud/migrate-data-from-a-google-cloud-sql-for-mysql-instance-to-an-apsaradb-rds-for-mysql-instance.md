This topic describes how to migrate data from a Google Cloud SQL for MySQL instance to an ApsaraDB RDS for MySQL instance. This topic also describes the usage notes.

## Prerequisites

**Source and destination**

**Requirement**

**References**

Source

Google Cloud SQL for MySQL instance

-   The instance can be accessed over the Internet. The public endpoint and port of the instance are obtained.
    
-   A privileged account is created.
    

[Google Cloud SQL for MySQL documentation](https://cloud.google.com/sql/docs/mysql)

Destination

ApsaraDB RDS for MySQL instance

-   An RDS instance is created.
    
-   A privileged account is created.
    

-   [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1#concept-wzp-ncf-vdb)
    
-   [Create an account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance#concept-kxw-k1p-ydb)
    

-   An ApsaraDB RDS for MySQL instance is created. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
    
-   An account that has the read and write permissions on the ApsaraDB RDS for MySQL instance is created. For more information, see [Create databases and accounts for an ApsaraDB RDS for MySQL instance](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#concept-jyq-tc5-q2b).
    

## Limits

-   The schema migration method does not support events.
    
-   Data Transmission Service (DTS) reads floating-point values of the FLOAT and DOUBLE data types in a column of the MySQL database by calling the `round(column,precision)` function. If the value precision is not specified, the precision is 38 bits for FLOAT-type values and 308 bits for DOUBLE-type values. You must check whether the precision of FLOAT-type values and DOUBLE-type values that are to be migrated by DTS meets your business requirements.
    
-   If you use the object name mapping feature on an object, other objects that are dependent on the object may fail to be migrated.
    
-   If incremental data migration is used, binary logging must be enabled for the Google Cloud SQL for MySQL instance.
    
-   If incremental data migration is used, the binlog\_format parameter of the source database must be set to row.
    
-   If incremental data migration is used and the Google Cloud SQL for MySQL instance runs MySQL 5.6 or later, the binlog\_row\_image parameter of the instance must be set to full.
    
-   If incremental data migration is used and cross-host migration or reconstruction is performed on the Google Cloud SQL for MySQL instance during the incremental data migration, the IDs of binary log files may be disordered, and the incremental data that is migrated may be lost.
    

**Note**

For more information about how to modify the parameters of a Google Cloud SQL for MySQL instance, see [Google Cloud SQL for MySQL documentation](https://cloud.google.com/sql/docs/mysql).

## Usage notes

DTS attempts to automatically resume abnormal migration tasks that are run within seven days. Therefore, data on the Google Cloud SQL for MySQL instance may overwrite the service data that has been written to the ApsaraDB RDS for MySQL instance. After a migration task is complete, you must execute the `REVOKE` statement to revoke the write permissions of the DTS account that is used to access the ApsaraDB RDS for MySQL instance.

## Procedure (in the new DTS console)

1.  Use one of the following methods to go to the Data Migration page and select the region in which the data migration instance resides.
    
    ## DTS console
    
    1.  Log on to the [DTS console](https://dts.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Data Migration**.
        
    3.  In the upper-left corner of the page, select the region in which the data migration instance resides.
        
    
    ## DMS console
    
    **Note**
    
    The actual operation may vary based on the mode and layout of the DMS console. For more information, see [Simple mode](/help/en/dms/simple-mode) and [Customize the layout and style of the DMS console](/help/en/dms/configure-the-dms-console-based-on-your-business-requirements).
    
    1.  Log on to the [DMS console](https://dms.alibabacloud.com).
        
    2.  In the top navigation bar, move the pointer over **Data + AI** > **DTS (DTS)** > **Data Migration** .
        
    3.  From the drop-down list to the right of **Data Migration Tasks**, select the region in which the data synchronization instance resides.
        
    
2.  Click **Create Task**. On the page that appears, configure the source and destination instances.
    
    **Warning**
    
    After you configure the source and destination databases, we recommend that you read the **Limits** that are displayed in the upper part of the page. Otherwise, the task may fail or data inconsistency may occur.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the DTS task. DTS automatically generates a task name. We recommend that you specify an informative name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    **Source Database**
    
    **Select a DMS database instance**
    
    The database that you want to use. You can choose whether to use an existing database based on your business requirements.
    
    -   If you select an existing database, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing database, you must configure the following database information.
        
    
    **Database Type**
    
    The type of the source instance. Select **MySQL**.
    
    **Access Method**
    
    The access method of the source instance. Select **Public IP Address**.
    
    **Instance Region**
    
    The region of the source instance.
    
    **Note**
    
    If you cannot find the region in which the source instance resides, you can select a region that is closest to the instance.
    
    **Domain name or IP**
    
    The endpoint of the source instance.
    
    **Note**
    
    In the left-side navigation page of the Google Cloud SQL for MySQL DB instance, click **Connections**. In the **Networking** section of the **SUMMARY** tab, view the value of the **Public IP address** parameter.
    
    **Port**
    
    The port number of the source instance. The default port number is **3306**.
    
    **Database Account**
    
    The database account of the source instance. For more information about account permissions, see [Migrate data from an Amazon RDS for MySQL instance to an ApsaraDB RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-an-amazon-rds-for-mysql-instance-to-an-apsaradb-rds-for-mysql-instance#section-2g2-h0v-e69)
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Destination Database**
    
    **Select a DMS database instance**
    
    The database that you want to use. You can choose whether to use an existing database based on your business requirements.
    
    -   If you select an existing database, DTS automatically populates the parameters for the database.
        
    -   If you do not select an existing database, you must configure the following database information.
        
    
    **Database Type**
    
    The type of the destination instance. Select **MySQL**.
    
    **Access Method**
    
    The access method of the destination database. Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    The region of the destination instance.
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    Specifies whether data is migrated across Alibaba Cloud accounts. In this example, **No** is selected.
    
    **RDS Instance ID**
    
    The ID of the destination instance.
    
    **Database Account**
    
    The database account of the destination instance. For information about the account permissions, see [Migrate data from an Amazon RDS for MySQL instance to an ApsaraDB RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-an-amazon-rds-for-mysql-instance-to-an-apsaradb-rds-for-mysql-instance#section-2g2-h0v-e69).
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    Specifies whether to encrypt the connection to the source database instance. Select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you want to set this parameter to **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS for MySQL instance before you configure the DTS task. For more information, see [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#concept-ack-rv4-ydb).
    
3.  In the lower part of the page, click **Test Connectivity and Proceed**.
    
    **Note**
    
    Make sure that the CIDR blocks of DTS servers can be automatically or manually added to the security settings of the source and destination databases to allow access from DTS servers. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases).
    
4.  If an IP address whitelist is configured for your self-managed database, add the CIDR blocks of DTS servers to the IP address whitelist. Then, click **Test Connectivity**.
    
    **Warning**
    
    If the public CIDR blocks of DTS servers are automatically or manually added to the whitelist of a database instance or to the security group rules of an ECS instance, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or security group rules and forbidding unauthorized CIDR blocks, or connecting the database instance to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
5.  Configure the objects to be synchronized and advanced settings.
    
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
            
        
    
    **Method to Migrate Triggers in Source Database**
    
    The method used to migrate triggers from the source database. You can select a migration method based on your business requirements. If no triggers are to be migrated, you do not need to configure this parameter. For more information, see [Synchronize or migrate triggers from the source database](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139).
    
    **Note**
    
    You can configure this parameter only when you select **Schema Migration** as a migration type.
    
    **Enable Migration Assessment**
    
    Specifies whether to enable migration assessment. Migration assessment aims to check whether the schemas of the source and destination databases, such as the length of indexes, stored procedures, and dependent tables, meet the requirements. You can select **Yes** or **No** based on your business requirements.
    
    **Note**
    
    -   You can configure this parameter only when you select **Schema Migration** as a migration type.
        
    -   If you select **Yes**, the precheck may take more time. You can view the **Assessment Result** during the precheck. The assessment results do not affect the precheck results.
        
    
    **Capitalization of Object Names in Destination Instance**
    
    The capitalization of database names, table names, and column names in the destination instance. By default, **DTS default policy** is selected. You can select other options to make sure that the capitalization of object names is consistent with that of the source or destination database. For more information, see [Specify the capitalization of object names in the destination instance](/help/en/dts/user-guide/specify-the-capitalization-of-object-names-in-the-destination-instance-2#concept-2045083).
    
    **Source Objects**
    
    Select one or more objects from the **Source Objects** section. Click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon and add the objects to the **Selected Objects** section.
    
    **Note**
    
    You can select columns, tables, or schemas as the objects to be migrated. If you select tables or columns as the objects to be migrated, DTS does not migrate other objects, such as views, triggers, or stored procedures, to the destination database.
    
    **Selected Objects**
    
    -   To rename an object that you want to migrate to the destination instance, right-click the object in the **Selected Objects** section. For more information, see [Map the name of a single object](/help/en/dts/user-guide/map-object-names#section-g21-1wy-98l).
        
    -   To rename multiple objects at a time, click **Batch Edit** in the upper-right corner of the **Selected Objects** section. For more information, see [Map multiple object names at a time](/help/en/dts/user-guide/map-object-names#section-2wn-exv-fib).
        
    
    **Note**
    
    -   If you use the object name mapping feature to rename an object, other objects that depend on the object may fail to be migrated.
        
    -   To specify WHERE conditions to filter data, right-click a table in the **Selected Objects** section. In the dialog box that appears, specify the conditions. For more information, see [Specify filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
        
    -   To migrate the SQL operations performed on a specific database or table, right-click the object in the **Selected Objects** section. In the dialog box that appears, select the SQL operations that you want to migrate.
        
    
6.  Click **Next: Advanced Settings** to configure advanced settings.
    
    -   **Data Verification Settings**
        
        For more information about how to use the data verification feature, see [Configure a data verification task](/help/en/dts/user-guide/enable-data-verification).
        
    -   **Advanced Settings**
        
        **Parameter**
        
        **Description**
        
        **Dedicated Cluster for Task Scheduling**
        
        By default, DTS schedules the task to a shared cluster. You do not need to configure this parameter. You can purchase a dedicated cluster of the specified specifications to run data migration tasks. For more information, see [What is a DTS dedicated cluster?](/help/en/dts/user-guide/what-is-a-dts-dedicated-cluster)
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data migration task. If the task fails or the migration latency exceeds the specified threshold, the alert contacts receive notifications. Valid values:
        
        -   **No**: does not configure alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see the [Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz) section of the Configure monitoring and alerting topic.
            
        
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
            
        
        **Retry Time for Failed Connections**
        
        The retry time range for failed connections. If the source or destination database fails to be connected after the data migration task is started, DTS immediately retries a connection within the time range. Valid values: 10 to 1440. Unit: minutes. Default value: 720. We recommend that you set the parameter to a value greater than 30. If DTS reconnects to the source and destination databases within the specified time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
        
        **Note**
        
        -   If you set different retry time ranges for multiple data migration tasks that have the same source or destination database, the shortest retry time range that is set takes precedence. For example, if you set the retry time range to 30 minutes for a DTS instance and 60 minutes for another DTS instance with the same source or destination database, the retry time range for the two instances is set to 30 minutes.
            
        -   When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
            
        
        **Retry Time for Other Issues**
        
        The retry time range for other issues. For example, if DDL or DML operations fail to be performed after the data migration task is started, DTS immediately retries the operations within the retry time range. Valid values: 1 to 1440. Unit: minutes. Default value: 10. We recommend that you set the parameter to a value greater than 10. If the failed operations are successfully performed within the specified retry time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
        
        **Important**
        
        The value of the **Retry Time for Other Issues** parameter must be smaller than the value of the **Retry Time for Failed Connections** parameter.
        
        **Enable Throttling for Full Data Migration**
        
        During full data migration, DTS uses the read and write resources of the source and destination databases. This may increase the loads on the database servers. You can enable throttling for full data migration based on your business requirements. To enable throttling, you need to configure the **Queries per second (QPS) to the source database**, **RPS of Full Data Migration**, and **Data migration speed for full migration (MB/s)** parameters. This helps offload the destination instance.
        
        **Note**
        
        You can configure this parameter only when you select **Full Data Migration** as the migration type.**Migration Types**
        
        **Enable Throttling for Incremental Data Migration**
        
        You can enable throttling for incremental data migration based on your business requirements. To enable throttling, you need to configure the **RPS of Incremental Data Migration** and **Data migration speed for incremental migration (MB/s)** parameters. This helps offload the destination instance.
        
        **Note**
        
        You can configure this parameter only when you select **Incremental Data Migration** as the migration type.**Migration Types**
        
        **Environment Tag**
        
        You can select environment tags based on your business requirements. In this example, you do not need to configure this parameter.
        
        **Configure ETL**
        
        Specifies whether to enable the extract, transform, and load (ETL) feature. For more information, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705) Valid values:
        
        -   **Yes**: configures the ETL feature. You can enter data processing statements in the code editor. For more information, see [Configure ETL in a data migration or data synchronization task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
            
        -   **No**: does not configure the ETL feature.
            
        
        **Whether to delete SQL operations on heartbeat tables of forward and reverse tasks**
        
        Specifies whether to write SQL operations on heartbeat tables to the source database while the DTS instance is running. Valid values:
        
        -   **Yes**: SQL operations on heartbeat tables are not written to the source database. In this case, a latency of the DTS instance may be displayed.
            
        -   **No**: SQL operations on heartbeat tables are written to the source database. In this case, features such as physical backup and cloning of the source database may be affected.
            
        
    
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
