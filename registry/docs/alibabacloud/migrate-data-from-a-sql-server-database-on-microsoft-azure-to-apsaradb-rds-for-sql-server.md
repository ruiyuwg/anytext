This topic describes how to migrate data from a SQL Server database on Microsoft Azure to an ApsaraDB RDS for SQL Server instance using either the one-stop cloud migration feature in the ApsaraDB RDS console or the data migration feature in the DTS console. SQL Server databases on Microsoft Azure include Azure SQL Database, Azure SQL Managed Instance, and SQL Server on Azure Virtual Machines.

## Prerequisites

-   You have created the destination [ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance#concept-pv1-n5z-vdb). The available storage space of this instance is larger than the total size of data in the source database.
    
-   The source [SQL Server database on Microsoft Azure is connected to Alibaba Cloud](/help/en/dts/user-guide/connect-azure-databases-to-alibaba-cloud) and can be accessed by DTS.
    

**Note**

If the source database is a Microsoft Azure VM that runs SQL Server Enterprise Edition, its version must be SQL Server 2008 or later. If the source database is a Microsoft Azure VM that runs SQL Server Standard Edition, its version must be SQL Server 2016 SP1 or later. SQL Server 2017 is not supported.

## Usage notes

**Before migration, pay attention to the following key points** to avoid task failures or errors:

-   **Database quantity limit**: You can migrate up to 10 databases in a single migration task. Otherwise, stability and performance issues may occur.
    
-   **Table quantity limit**: For incremental migration, the number of tables to be synchronized from the source database cannot exceed 1,000. Otherwise, the task may be delayed or unstable.
    
-   **Source database operation restrictions**: During schema migration and full data migration, do not execute DDL operations (such as modifying database or table structures). Otherwise, the task will fail.
    
-   **CDC-related limitations**: If CDC is enabled for source tables and single field data exceeds 64 KB, you need to execute `EXEC sp_configure 'max text repl size', -1;` to adjust the configuration. Otherwise, the task may fail.
    
-   **Table structure requirements**: The tables to be migrated must have PRIMARY KEY or UNIQUE constraints, and all fields must be unique. Otherwise, duplicate data may appear in the destination database.
    
-   **Foreign keys and triggers**: If the migration task includes incremental data migration, you must disable the triggers and foreign keys in the destination database. Otherwise, the task may fail or data loss may occur.
    
-   **Database name convention**: If the name of the database to be migrated does not conform to the naming convention of ApsaraDB RDS for SQL Server, you need to manually create a database in the destination instance before configuring the migration task. Otherwise, the task may not run properly.
    
-   **Data log retention period**: For incremental migration tasks, the data logs of the source database must be stored for more than 24 hours. For full data migration plus incremental migration tasks, the data logs must be stored for at least 7 days. Otherwise, the task may fail or data inconsistency may occur.
    

**Click to view all limits and notes**

**Note**

DTS does not migrate foreign keys in the source database to the destination database. Therefore, the cascade and delete operations of the source database are not migrated to the destination database.

**Category**

**Description**

Limits on the source database

-   If the source database is a Microsoft Azure VM that runs SQL Server Enterprise Edition, its version must be SQL Server 2008 or later. If the source database is a Microsoft Azure VM that runs SQL Server Standard Edition, its version must be SQL Server 2016 SP1 or later. SQL Server 2017 is not supported.
    
-   The server on which the source database is deployed must have sufficient outbound bandwidth. Otherwise, the data migration speed decreases.
    
-   The tables to be migrated must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   You can run a single data migration task to migrate up to 10 databases. If you want to migrate more than 10 databases, we recommend that you configure multiple tasks to migrate the databases. Otherwise, the performance and stability of your data migration task may be compromised.
    
-   If you perform only incremental data migration, the data logs of the source database must be stored for more than 24 hours. If you perform both full data migration and incremental data migration, the data logs of the source database must be stored for at least seven days. Otherwise, DTS may fail to obtain the data logs and the task may fail. In exceptional circumstances, data inconsistency or data loss may occur. After full data migration is complete, you can set the retention period to more than 24 hours. Make sure that you set the retention period of data logs based on the preceding requirements. Otherwise, the Service Level Agreement (SLA) of DTS does not guarantee service reliability or performance.
    
-   Limits on operations that are performed on the source database:
    
    -   During schema migration and full data migration, do not execute DDL statements to change the schemas of databases or tables. Otherwise, the data migration task fails.
        
    -   If you perform only full data migration, do not write data to the source database during data migration. Otherwise, data will be inconsistent between the source and destination databases. To ensure data consistency, we recommend that you select schema migration, full data migration, and incremental data migration as the migration types.
        
-   You cannot use a read-only instance as the source database.
    
-   If the source database is an Azure SQL Database, only one database can be migrated in a data migration task.
    
-   We recommend that you enable the transaction processing mode parameter of `READ_COMMITTED_SNAPSHOT` for the source database during full data migration. Otherwise, it may affect the data-write due to shared locks, data inconsistency may occur, or an instance fails to run. Issues that arise in such circumstances are not covered by the service level agreement (SLA) of DTS.
    

Other limits

-   DTS does not migrate data of the following types: CURSOR, ROWVERSION, SQL\_VARIANT, HIERARCHYID, POLYGON, GEOMETRY, and GEOGRAPHY.
    
-   The pre-module of an incremental data migration task in DTS enables CDC in the source database. In this process, locked tables that lasts a few seconds occurs in the source database due to the limit of SQL Server database.
    
-   DTS migrates incremental data by querying CDC instances. Take note of the following limits if you want to perform incremental data migration:
    
    -   DTS obtains incremental data by querying the CDC instance of each table in the source database. Therefore, the number of tables to be migrated from the source database cannot exceed 1,000. Otherwise, the data migration task may be delayed or unstable.
        
    -   The CDC component can store the incremental data for 3 days by default. You can adjust the retention period by running the `exec console.sys.sp_cdc_change_job @job_type = 'cleanup', @retention= <time>;` command.
        
        **Note**
        
        -   `<time>` indicates the retention time. Unit: minutes.
            
        -   If the average daily number of the incremental data in the SQL Server database exceeds 10 million, we recommend setting the `<time>` parameter to 1,440.
            
        
    -   You cannot execute a DDL statement to add or remove columns more than twice in a minute. Otherwise, the data migration task may fail.
        
    -   During data migration, you cannot modify the CDC instances of the source database. Otherwise, the data migration task may fail or data loss may occur.
        
    -   If you configure a task to migrate multiple tables in multiple databases, stability and performance issues may occur.
        
    -   Incremental data migration has a latency of about 10 seconds.
        
    
-   If you want to migrate data between different versions of databases, make sure that the database versions are compatible.
    
-   If the data migration task involves incremental data migration, you cannot perform the reindexing operation and must disable the triggers and foreign keys in the destination database. Otherwise, the data migration task may fail and data loss may occur.
    
    **Note**
    
    DTS cannot migrate DDL operations related to the primary key of a table for which CDC is enabled.
    
-   If the number of CDC-enabled tables to be migrated in a single migration task exceeds 1,000 or **The maximum number of tables for which CDC is enabled** that DTS supports, the precheck fails.
    
-   If a task contains the incremental data migration, and the tables for which CDC is enabled require data whose size is larger than 64 KB in a single field, run the `exec sp_configure 'max text repl size', -1;` command in advance to configure the source database.
    
    **Note**
    
    By default, a CDC job can process data with the maximum size of 64 KB.
    
-   DTS automatically creates a destination database in the ApsaraDB RDS for SQL Server instance. However, if the name of the database to be migrated does not conform to the naming convention of ApsaraDB RDS for SQL Server instances, you must manually create a database in the destination ApsaraDB RDS for SQL Server instance before you configure the data migration task. For more information, see [Create a database](/help/en/rds/apsaradb-rds-for-sql-server/create-a-database-on-an-apsaradb-rds-for-sql-server-instance#concept-cg3-ljq-wdb).
    
-   In Incremental Synchronization Based on Logs of Source Database mode, DTS creates a trigger named dts\_cdc\_sync\_ddl, a heartbeat table named dts\_sync\_progress, and a DDL history table named dts\_cdc\_ddl\_history in the source database to ensure that the latency of data migration is accurate. In hybrid log-based parsing incremental synchronization mode, DTS creates a trigger named dts\_cdc\_sync\_ddl, a heartbeat table named dts\_sync\_progress, and a DDL history table named dts\_cdc\_ddl\_history and enables CDC for the source database and specific tables. We recommend that you set the maximum number of records per second to 1,000 for the tables for which CDC is enabled in the source database.
    
-   Before you migrate data, evaluate the impact of data migration on the performance of the source database and destination cluster. We recommend that you migrate data during off-peak hours. During full data migration, DTS uses the read and write resources of the source and destination databases. This may increase the loads of the database servers.
    
-   During full data migration, concurrent INSERT operations cause fragmentation in the tables of the destination database. After full data migration is complete, the tablespace of the destination database is larger than that of the source database.
    
-   You must make sure that the precision settings for columns of the FLOAT or DOUBLE data type meet your business requirements. DTS uses the `ROUND(COLUMN,PRECISION)` function to retrieve values from columns of the FLOAT or DOUBLE data type. If you do not specify a precision, DTS sets the precision for the FLOAT data type to 38 digits and the precision for the DOUBLE data type to 308 digits.
    
-   DTS attempts to resume data migration tasks that failed within the last seven days. Before you switch workloads to the destination cluster, you must stop or release the failed tasks. You can also execute the `REVOKE` statement to revoke the write permissions from the accounts that are used by DTS to access the destination database. Otherwise, the data in the source database overwrites the data in the destination database after the data migration task is resumed.
    
-   The incremental data collection modules of multiple data migration instances that share a source SQL Server database are independent of each other.
    
-   If a DTS task fails to run, DTS technical support will try to restore the task within 8 hours. During the restoration, the task may be restarted, and the parameters of the task may be modified.
    
    **Note**
    
    Only the parameters of the task may be modified. The parameters of databases are not modified. The parameters that may be modified include but are not limited to the parameters in the "[Modify instance parameters](/help/en/dts/user-guide/modify-the-parameters-of-a-dts-instance#section-ys2-2c2-wzo)" section of the Modify the parameters of a DTS instance topic.
    

## Billing

**Migration type**

**Instance configuration fee**

**Internet traffic fee**

Schema migration and full data migration

Free of charge.

When the **Access Method** parameter of the destination database is set to **Public IP Address**, you are charged for Internet traffic. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

Incremental data migration

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## **Permissions required for database accounts**

To successfully complete the data migration task, make sure that the database accounts of the source and destination databases have the following permissions:

## SQL Server database on Microsoft Azure

-   Schema migration: The `SELECT` permission.
    
-   Full data migration: The `SELECT` permission.
    
-   Incremental migration: The `sysadmin` role permission (for enabling CDC).
    

**Note**

The highest permission account (server administrator) provided by the Azure SQL Database console meets the above permission requirements.

-   For databases purchased based on the vCore model, all specifications support enabling CDC. For databases purchased based on the [DTU](https://learn.microsoft.com/zh-cn/azure/azure-sql/database/service-tiers-dtu?view=azuresql) model, only instances with specifications of S3 or higher support enabling CDC.
    
-   For further operations or confirmation, refer to Azure platform documentation or contact technical support.
    

## ApsaraDB RDS for SQL Server instance

Schema migration, full migration, and incremental migration: Read and write permissions.

**Note**

You can [create a standard account or a privileged account](/help/en/rds/apsaradb-rds-for-sql-server/create-a-standard-account-privileged-account-and-a-global-read-only-account#concept-n3n-1zz-vdb) in the ApsaraDB RDS console and [modify the account permissions](/help/en/rds/apsaradb-rds-for-sql-server/modify-account-permissions#concept-ys2-4bp-ydb) as needed.

## Procedure

The one-stop cloud migration feature in the ApsaraDB RDS console migrates schema, full data, and incremental data by default, with simple and convenient operations. The migration feature in the DTS console supports customizing migration types and more advanced parameter configurations, but requires more complex configuration.

## Method 1: Use the ApsaraDB RDS console

1.  Visit the [ApsaraDB RDS instance list](https://rds.console.alibabacloud.com/rdsList/basic), select a region at the top, and then click the target instance ID.
    
2.  In the left-side navigation pane, click **Data Migration And Sync** to go to the **Data Migration** page.
    
3.  Click **One-stop Cloud**, and configure the source and destination database information.
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    Specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name. You can also keep the task name that is automatically generated by the system.
    
    **Source Database**
    
    **Database Type**
    
    Default value: **SQL Server**. You do not need to configure this parameter.
    
    **Type**
    
    Select **Azure**.
    
    **Access Method**
    
    Select **Public IP Address** or **Express Connect, VPN Gateway, or Smart Access Gateway** based on how the SQL Server database on Microsoft Azure is connected to Alibaba Cloud.
    
    **Important**
    
    If the source database is Azure SQL Managed Instance, select **Public IP Address**.
    
    **Instance Region**
    
    -   **Access Method** is set to **Public IP Address**: Select the region in which the SQL Server database on Microsoft Azure resides.
        
        **Note**
        
        If the region of the SQL Server database on Microsoft Azure is not available, you can select a region that is geographically closest to the database.
        
    -   **Access Method** is set to **Express Connect, VPN Gateway, or Smart Access Gateway**: Select the region of the Alibaba Cloud virtual private cloud (VPC) to which the SQL Server database on Microsoft Azure is connected.
        
    
    **Connected VPC**
    
    Select the ID of the Alibaba Cloud VPC to which the SQL Server database on Microsoft Azure is connected.
    
    **Note**
    
    This parameter is available only if you set **Access Method** to **Express Connect, VPN Gateway, or Smart Access Gateway**.
    
    **Domain Name or IP**
    
    Enter the domain name or IP address of the SQL Server database on Microsoft Azure.
    
    **Note**
    
    We recommend that you specify the domain name.
    
    **Port Number**
    
    Enter the service port.
    
    **Database Account**
    
    Enter the account of the SQL Server database on Microsoft Azure, and make sure that the [account has the required permissions](#f7611b5bb5dj9).
    
    **Important**
    
    The account of a database in Azure SQL Database is in the `<Administrator username>@<Server name>` format. For example, if the administrator account of the database in Azure SQL Database is `testuser` and the name of the server on which the database is deployed is `dtstest` (you can run the `SELECT @@SERVERNAME AS ServerName` command to query the server name), enter `testuser@dtstest` for **Database Account**.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    -   If SSL encryption is not enabled for the source database, select **Non-encrypted**.
        
    -   If SSL encryption is enabled for the source database, select **SSL-encrypted**. DTS trusts the server certificate by default.
        
    
    **Destination Database**
    
    **Database Type**
    
    The default is **SQL Server**. You do not need to select it.
    
    **Access Method**
    
    Default value: **Alibaba Cloud Instance**. You do not need to configure this parameter.
    
    **Instance Region**
    
    The region in which the ApsaraDB RDS for SQL Server instance resides. You cannot change the value of this parameter.
    
    **Instance ID**
    
    The ID of the ApsaraDB RDS for SQL Server instance. You cannot change the value of this parameter.
    
    **Database Account**
    
    Enter the account of the ApsaraDB RDS for SQL Server instance, and make sure that the [account has the required permissions](#f7611b5bb5dj9).
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    -   If Secure Sockets Layer (SSL) encryption is not enabled for the destination database, select **Non-encrypted**.
        
    -   If SSL encryption is enabled for the destination database, select **SSL-encrypted**. DTS trusts the server certificate by default.
        
    
4.  After you complete the configuration, click **Test Connectivity And Proceed** at the bottom of the page.
    
    **Important**
    
    Make sure that the CIDR blocks of DTS servers displayed in the dialog box are added to the whitelist of the SQL Server database on Microsoft Azure. [Adding DTS IP addresses](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases) may pose security risks. Please confirm and implement appropriate security measures (such as strengthening password security and limiting ports).
    
5.  The system evaluates your source database type and generates the following two cloud migration plans for you to choose from:
    
    -   Select the **Full And Incremental Data Migration** plan: click **Configure Objects** at the bottom of the page, and proceed to the next step.
        
    -   If you select another plan: You do not need to proceed to the next step.
        
        **Note**
        
        You can click **View Migration Documentation** at the bottom of the page to view the corresponding cloud migration operations.
        
    
6.  On the **Configure Objects** page, configure the objects to be migrated. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Method to Migrate Triggers in Source Database**
    
    Triggers may be migrated to the destination database before incremental data migration is complete. In this case, data inconsistency occurs between the source and destination databases. You can select the method used to migrate triggers based on your business requirements. We recommend that you select **Manual Migration**. For more information, see [Synchronize or migrate triggers from the source database](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139).
    
    **Note**
    
    If you do not want to migrate triggers, you do not need to configure this parameter (keep the default setting).
    
    **Source Objects**
    
    Select one or more objects from the **Source Objects** section. Click the ![向右小箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to add the objects to the **Selected Objects** section.
    
    **Note**
    
    Select columns, tables, or databases as the objects to be migrated. If you select tables or columns as the objects to be migrated, DTS does not migrate other objects such as views, triggers, and stored procedures to the destination database.
    
    **Selected Objects**
    
    -   To change the name of an object to be migrated in the destination instance, right-click the object in the **Selected Objects** section. For more information, see [Map object names](/help/en/dts/user-guide/map-object-names).
        
    -   To remove one or more objects that are selected for migration, click the objects in the **Selected Objects** section and then click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3367114271/p829720.png) icon to move the objects to the **Source Objects** section.
        
    
    **Note**
    
    -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be migrated.
        
    -   To specify WHERE conditions to filter data, right-click a table in the **Selected Objects** section. In the dialog box that appears, [specify filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
        
    -   To select the SQL operations performed on a specific database or table, right-click the object in the **Selected Objects** section. In the dialog box that appears, select the SQL operations that you want to migrate.
        
    
7.  **Optional**: You can expand Advanced Settings to configure advanced parameters.
    
    **Parameter**
    
    **Description**
    
    **Enable Throttling for Full Data Migration**
    
    Specifies whether to enable throttling for full data migration. During full data migration, DTS uses the read and write resources of the source and destination databases. This may increase the loads of the database servers. You can enable throttling for full data migration based on your business requirements. To configure throttling, you must configure the **Queries per second (QPS) to the source database**, **RPS of Full Data Migration**, and **Data migration speed for full migration (MB/s)** parameters. This reduces the loads of the destination database server.
    
    **Enable Throttling for Incremental Data Migration**
    
    Specifies whether to enable throttling for incremental data migration. To configure throttling, you must configure the **RPS of Incremental Data Migration** and **Data migration speed for incremental migration (MB/s)** parameters. This reduces the loads of the destination database server.
    
    **Data Verification Mode**
    
    Full data verification uses the read resources of the database. If you select **Full Data Verification**, you also need to set **Maximum number of rows of data read per second by full verification** and **The maximum number of bytes read per second by full verification Byte/s.** to enable throttling for full data verification (number of data rows and data volume read per second) to reduce the pressure on the database.
    
    **Note**
    
    A value of 0 indicates no limit. When both **Maximum number of rows of data read per second by full verification** and **The maximum number of bytes read per second by full verification Byte/s.** are set to 0, throttling is disabled for full data verification.
    
8.  Save the task settings and run a precheck.
    
    -   To view the parameters to be specified when you call the relevant API operation to configure the DTS task, move the pointer over **Next: Save Task Settings and Precheck** and click **Preview OpenAPI parameters**.
        
    -   If you do not need to view or have viewed the parameters, click **Next: Save Task Settings and Precheck** in the lower part of the page.
        
    
    **Note**
    
    -   Before you can start the data migration task, DTS performs a precheck. You can start the data migration task only after the task passes the precheck.
        
    -   If the task fails to pass the precheck, click **View Details** next to each failed item. After you analyze the causes based on the check results, troubleshoot the issues. Then, run a precheck again.
        
    -   If an alert is triggered for an item during the precheck:
        
        -   If an alert item cannot be ignored, click **View Details** next to the failed item and troubleshoot the issues. Then, run a precheck again.
            
        -   If the alert item can be ignored, click **Confirm Alert Details**. In the View Details dialog box, click **Ignore**. In the message that appears, click **OK**. Then, click **Precheck Again** to run a precheck again. If you ignore the alert item, data inconsistency may occur, and your business may be exposed to potential risks.
            
    
9.  Wait until **Success Rate** becomes **100%**. Then, click **Next: Purchase Instance**.
    
10.  Purchase an instance.
     
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
         
         You can view the progress of the task on the **Data Migration** page.
         
         **Note**
         
         -   If a data migration task cannot be used to migrate incremental data, the task automatically stops. The **Completed** is displayed in the **Status** section.
             
         -   If a data migration task can be used to migrate incremental data, the task does not automatically stop. The incremental data migration task never stops or completes. The **Running** is displayed in the **Status** section.
             
         
     

## Method 2: Use the DTS console

1.  Visit the [Data Transmission Service console](https://dts.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Data Migration**, and select the region in the upper part of the page.
    
3.  Click **Create Task** to configure the source and destination database information.
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    Specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name. You can also keep the task name that is automatically generated by the system.
    
    **Source Database**
    
    **Select Existing Connection**
    
    If you have registered the source database information on the [DTS Database Connection Management](/help/en/dts/user-guide/database-connection-management) page, you can directly select the registered database here, which saves you from manually entering the source database information later.
    
    **Database Type**
    
    Select **SQL Server**.
    
    **Access Method**
    
    Select **Public IP Address** or **Express Connect, VPN Gateway, or Smart Access Gateway** based on how the SQL Server database on Microsoft Azure is connected to Alibaba Cloud.
    
    **Important**
    
    If the source database is Azure SQL Managed Instance, select **Public IP Address**.
    
    **Instance Region**
    
    -   **Access Method** is set to **Public IP Address**: Select the region in which the SQL Server database on Microsoft Azure resides.
        
        **Note**
        
        If the region of the SQL Server database on Microsoft Azure is not available, you can select a region that is geographically closest to the database.
        
    -   **Access Method** is set to **Express Connect, VPN Gateway, or Smart Access Gateway**: Select the region of the Alibaba Cloud VPC to which the SQL Server database on Microsoft Azure is connected.
        
    
    **Replicate Data Across Alibaba Cloud Accounts**
    
    In this example, a database instance of the current Alibaba Cloud account is used. Select **No**.
    
    **Note**
    
    This parameter is available only if you set **Access Method** to **Express Connect, VPN Gateway, or Smart Access Gateway**.
    
    **Connected VPC**
    
    Select the ID of the Alibaba Cloud VPC to which the SQL Server database on Microsoft Azure is connected.
    
    **Note**
    
    This parameter is available only if you set **Access Method** to **Express Connect, VPN Gateway, or Smart Access Gateway**.
    
    **Domain Name or IP**
    
    Enter the domain name or IP address of the SQL Server database on Microsoft Azure.
    
    **Note**
    
    We recommend that you specify the domain name.
    
    **Port Number**
    
    Enter the service port of the SQL Server database on Microsoft Azure.
    
    **Database Account**
    
    Enter the account of the SQL Server database on Microsoft Azure, and make sure that the [account has the required permissions](#f7611b5bb5dj9).
    
    **Important**
    
    The account of a database in Azure SQL Database is in the `<Administrator username>@<Server name>` format. For example, if the administrator account of the database in Azure SQL Database is `testuser` and the name of the server on which the database is deployed is `dtstest` (you can run the `SELECT @@SERVERNAME AS ServerName` command to query the server name), enter `testuser@dtstest` for **Database Account**.
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    -   If SSL encryption is not enabled for the source database, select **Non-encrypted**.
        
    -   If SSL encryption is enabled for the source database, select **SSL-encrypted**. DTS trusts the server certificate by default.
        
    
    **Destination Database**
    
    **Select Existing Connection**
    
    If you have registered the destination database information on the [DTS Database Connection Management](/help/en/dts/user-guide/database-connection-management) page, you can directly select the registered database here, which saves you from manually entering the destination database information later.
    
    **Database Type**
    
    Select **SQL Server**.
    
    **Access Method**
    
    Select **Alibaba Cloud Instance**.
    
    **Instance Region**
    
    Select the region in which the destination ApsaraDB RDS for SQL Server instance resides.
    
    **Instance ID**
    
    Select the ID of the destination ApsaraDB RDS for SQL Server instance.
    
    **Database Account**
    
    Enter the account of the destination ApsaraDB RDS for SQL Server instance, and make sure that the [account has the required permissions](#f7611b5bb5dj9).
    
    **Database Password**
    
    The password that is used to access the database instance.
    
    **Encryption**
    
    -   If the destination database does not have SSL encryption enabled, select **Non-encrypted**.
        
    -   If Secure Sockets Layer (SSL) encryption is enabled for the destination database, select **SSL-encrypted**. DTS trusts the server certificate by default.
        
    
4.  After the configuration is complete, click **Test Connectivity And Proceed** at the bottom of the page.
    
    **Important**
    
    Make sure that the CIDR blocks of DTS servers displayed in the dialog box are added to the whitelist of the SQL Server database on Microsoft Azure. [Adding DTS IP addresses](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases) may pose security risks. Please confirm and implement appropriate security measures (such as strengthening password security and limiting ports).
    
5.  Configure the objects to be migrated.
    
    1.  On the **Configure Objects** page, configure the objects that you want to migrate.
        
        **Parameter**
        
        **Description**
        
        **Migration Types**
        
        -   For full migration: We recommend that you select **Schema Migration** and **Full Data Migration**.
            
        -   If you need to perform a zero-downtime migration: We recommend that you select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
            
        
        **Note**
        
        -   For more information, see [Appendix 1: SQL operations that can be synchronized during incremental data migration](#d459f3d5fazu5) and [Appendix 2: Objects that can be migrated during schema migration](#29430c006cwx6).
            
        -   If you do not select **Schema Migration**, make sure that the destination database contains databases and tables that can receive data, and use the object name mapping feature in the **Selected Objects** section based on your actual needs.
            
        -   If you do not select **Incremental Data Migration**, to ensure data consistency, **do not write new data to the source instance during data migration**.
            
        
        **Method to Migrate Triggers in Source Database**
        
        Triggers may be migrated to the destination database before incremental data migration is complete. In this case, data inconsistency occurs between the source and destination databases. You can select the method used to migrate triggers based on your business requirements. We recommend that you select **Manual Migration**. For more information, see [Synchronize or migrate triggers from the source database](/help/en/dts/user-guide/synchronize-or-migrate-triggers-from-the-source-database#task-2288139).
        
        **Note**
        
        -   You can configure this parameter only if you select both **Schema Migration** and **Incremental Data Migration** for **Migration Types**.
            
        -   If you do not want to migrate triggers, you do not need to configure this parameter (keep the default setting).
            
        
        **SQL Server Incremental Synchronization Mode**
        
        Select **Polling and querying CDC instances for incremental synchronization**.
        
        **Note**
        
        You can configure this parameter only if you select **Incremental Data Migration** for the **Migration Types** parameter.
        
        **The maximum number of tables for which CDC is enabled that DTS supports.**
        
        In this example, retain the default value.
        
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
        
        Select columns, tables, or databases as the objects to be migrated. If you select tables or columns as the objects to be migrated, DTS does not migrate other objects such as views, triggers, and stored procedures to the destination database.
        
        **Selected Objects**
        
        -   To change the name of an object to be migrated in the destination instance, right-click the object in the **Selected Objects** section. For more information, see [Map object names](/help/en/dts/user-guide/map-object-names).
            
        -   To remove one or more objects that are selected for migration, click the objects in the **Selected Objects** section and then click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3367114271/p829720.png) icon to move the objects to the **Source Objects** section.
            
        
        **Note**
        
        -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be migrated.
            
        -   To specify WHERE conditions to filter data, right-click a table in the **Selected Objects** section. In the dialog box that appears, [specify filter conditions](/help/en/dts/user-guide/use-sql-conditions-to-filter-data-1#concept-610729).
            
        -   To select the SQL operations performed on a specific database or table, right-click the object in the **Selected Objects** section. In the dialog box that appears, select the SQL operations that you want to migrate.
            
        
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
        
        The environment tag that is used to identify the DTS instance. You can select an environment tag based on your business requirements. In this example, you do not need to configure this parameter.
        
        **Configure ETL**
        
        Specifies whether to enable the extract, transform, and load (ETL) feature. For more information, see [What is ETL?](/help/en/dts/user-guide/what-is-etl#task-2101705) Valid values:
        
        -   **Yes**: configures the ETL feature. You can enter data processing statements in the code editor. For more information, see [Configure ETL in a data migration or data synchronization task](/help/en/dts/user-guide/configure-etl-in-a-data-migration-or-data-synchronization-task#task-2189872).
            
        -   **No**: does not configure the ETL feature.
            
        
        **Monitoring and Alerting**
        
        Specifies whether to configure alerting for the data migration task. If the task fails or the migration latency exceeds the specified threshold, the alert contacts receive notifications. Valid values:
        
        -   **No**: does not configure alerting.
            
        -   **Yes**: configures alerting. In this case, you must also configure the alert threshold and alert notification settings. For more information, see the [Configure monitoring and alerting when you create a DTS task](/help/en/dts/user-guide/configure-monitoring-and-alerting-1#section-r6s-w5c-kmz) section of the Configure monitoring and alerting topic.
            
        
    3.  Click **Next Step: Data Verification** to configure data verification tasks.
        
        If you want to use the data verification feature, see [Configure data verification](/help/en/dts/user-guide/enable-data-verification#task-2249288) for configuration instructions.
        
    
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
            
        
    

## Appendix 1: SQL operations that can be synchronized during incremental data migration

## DML operations

INSERT, UPDATE, DELETE

**Note**

If an UPDATE operation updates only the large fields, DTS does not migrate the operation.

## DDL operations

-   CREATE TABLE
    
    **Note**
    
    If a CREATE TABLE operation creates a partitioned table or a table that contains functions, DTS does not migrate the operation.
    
-   ALTER TABLE
    
    ALTER TABLE operations include only ADD COLUMN and DROP COLUMN.
    
-   DROP TABLE
    
-   CREATE INDEX and DROP INDEX
    

**Note**

-   DTS does not migrate transactional DDL operations. For example, DTS does not migrate an SQL operation that contains DDL operations to add multiple columns or an SQL operation that contains both DDL operations and DML operations. Data loss may occur after such SQL operations are migrated.
    
-   DTS does not migrate DDL operations that contain user-defined types.
    
-   DTS does not migrate online DDL operations.
    
-   DTS does not migrate DDL operations performed on objects whose names contain reserved keywords.
    
-   DTS does not migrate DDL operations executed by system stored procedures.
    
-   DTS does not migrate TRUNCATE TABLE operations.
    

## **Appendix 2: Objects that can be migrated during schema migration**

-   DTS supports schema migration for the following types of objects: table, view, trigger, synonym, SQL stored procedure, SQL function, plan guide, user-defined type, rule, default, and sequence.
    
-   DTS does not migrate the schemas of assemblies, service brokers, full-text indexes, full-text catalogs, distributed schemas, distributed functions, Common Language Runtime (CLR) stored procedures, CLR scalar-valued functions, CLR table-valued functions, internal tables, systems, or aggregate functions.
    

## FAQ

-   **Can I select the objects to be verified when I configure a data migration task in the ApsaraDB RDS console?**
    
    No. By default, the objects to be verified are the same as the objects to be migrated.
    
-   **What is the full data verification mode for data migration tasks configured in the ApsaraDB RDS console?**
    
    The hash values of migrated data are checked based on a sampling ratio of 100%.
    
-   **What is the benchmark of full data verification for data migration tasks configured in the ApsaraDB RDS console?**
    
    Data consistency between the source and destination databases is checked by comparing all data in the source and destination databases.
