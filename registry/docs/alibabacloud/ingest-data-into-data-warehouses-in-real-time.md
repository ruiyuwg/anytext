Realtime Compute for Apache Flink provides powerful real-time data ingestion capabilities. Features such as automatic full and incremental switchover, automatic metadata discovery, automatic schema evolution synchronization, and whole-database synchronization simplify the real-time ingestion pipeline. This makes real-time data synchronization more efficient and user-friendly. This topic shows you how to quickly build a data ingestion job that moves data from MySQL to Hologres.

## Background information

Assume your MySQL instance contains a database named tpc\_ds, with 24 business tables that have different schemas. It also contains three databases named user\_db1, user\_db2, and user\_db3. Because of sharding, each of these databases contains three tables with identical schemas. Together, they contain nine tables named user01 through user09. The following figure shows the databases and tables in MySQL, as viewed in the Alibaba Cloud DMS console.![数据库和表情况](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9941486961/p371690.png)

To build a data ingestion job that synchronizes all these tables and their data to Hologres and merges the sharded user tables into a single Hologres table, follow these steps:

-   [Step 1: Develop a data ingestion job](#section-fg4-ouk-g34)
    
-   [Step 2: Start the job](#section-nl7-ly7-h7y)
    
-   [Step 3: Monitor full data synchronization results](#section-80i-47e-pgl)
    
-   [Step 4: Monitor incremental synchronization results](#section-8xx-nsd-aoe)
    
-   [(Optional) Step 5: Configure job resources](#section-pcb-wjl-dg1)
    

This topic uses the [Flink CDC Data Ingestion Job Development (Public Preview)](/help/en/flink/realtime-flink/user-guide/develop-a-yaml-draft) feature to perform whole-database synchronization and merge sharded tables into one target table. This feature also supports one-click full and incremental synchronization and real-time schema evolution synchronization.

## Prerequisites

-   If you access the service using a Resource Access Management (RAM) user or RAM role, confirm that you have the required permissions for the Flink console. For more information, see [Permission Management](/help/en/flink/realtime-flink/user-guide/permission-management/).
    
-   Create a Flink workspace. For more information, see [Enable Realtime Compute for Apache Flink](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink#task-2506778).
    
-   Data Sources and Sinks
    
    -   Create an ApsaraDB RDS for MySQL instance. For more information, see [(Deprecated, redirected to “Step 1”) Quickly create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
        
    -   You have created a Hologres instance. For more information, see [Purchase Hologres Instances](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
        
    
    **Note**
    
    The ApsaraDB RDS for MySQL and Hologres instances must be in the same region and VPC as your Flink workspace. If they are not, you must configure network connectivity. For more information, see [How do I access other services across VPCs?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#7e4dbb2506gos) and [How do I access the Internet?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#69d744e13et7x).
    
-   Prepare test data and configure IP whitelists. For more information, see [Prepare MySQL test data and a Hologres database](#section-o3h-o1o-ud1) and [Configure IP whitelists](#section-ong-ryn-dz4).
    

## Prepare MySQL test data and a Hologres database

1.  Click [tpc\_ds.sql](https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/test/tpc_ds.sql), [user\_db1.sql](https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/test/user_db1.sql), [user\_db2.sql](https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/test/user_db2.sql), and [user\_db3.sql](https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/test/user_db3.sql) to download the test data to your local machine.
    
2.  In the DMS Data Management console, prepare test data for your ApsaraDB RDS for MySQL instance.
    
    1.  Log on to your ApsaraDB RDS for MySQL instance using DMS.
        
        For more information, see [(Deprecated, redirected to “Step 2”) Log on to ApsaraDB RDS for MySQL using DMS](/help/en/doc-detail/284465.html#concept-2099025).
        
    2.  In the SQLConsole window, you can enter the following commands and click **Execute**.
        
        Create four databases: tpc\_ds, user\_db1, user\_db2, and user\_db3.
        
        ```
        CREATE DATABASE tpc_ds;
        CREATE DATABASE user_db1;
        CREATE DATABASE user_db2;
        CREATE DATABASE user_db3;
        ```
        
    3.  On the top shortcut menu bar, click **Data Import**.
        
    4.  On the **Batch Data Import** tab, you can select the target database, upload the corresponding SQL file, click **Submit Application**, and then click **Execute Change**. In the dialog box that appears, you can click **Confirm Execution**.
        
        Repeat this process for the tpc\_ds, user\_db1, user\_db2, and user\_db3 databases to import their respective data files.![导入数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7077768271/p371741.png)
        
3.  In the Hologres console, create a database named my\_user to store the merged user table data.
    
    For more information, see [Create a database](/help/en/hologres/getting-started/create-a-database#task-1928593).
    

## Configure IP whitelists

To allow Flink to access your ApsaraDB RDS for MySQL and Hologres instances, you must add the CIDR block of your Flink workspace to the IP whitelists of both instances.

1.  Obtain the VPC CIDR block of your Flink workspace.
    
    1.  Log on to the [Realtime Compute console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV).
        
    2.  In the **Workspace** list, find your target workspace. In the **Actions** column, choose **More** > **Workspace Details**.
        
    3.  In the **Workspace Details** dialog box, view the **VPC CIDR block** of the **virtual switch** that Flink uses.
        
        ![网段信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628917271/p374253.png)
        
2.  Add the Flink CIDR block to the IP whitelist of your ApsaraDB RDS for MySQL instance.
    
    For more information, see [Configure IP whitelists](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance#concept-rpj-hs4-ydb).![RDS白名单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4270187761/p374342.png)
    
3.  Add the Flink CIDR block to the IP whitelist of your Hologres instance.
    
    When you configure a data connection in HoloWeb, you must set **Login Method** to **Passwordless Login for Current User** before you can configure an IP whitelist for the connection. For more information, see [IP Whitelist](/help/en/hologres/security-and-compliance/configure-an-ip-address-whitelist#task-2037120).![Holo白名单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3966208461/p374354.png)
    

## Step 1: Develop a data synchronization job

1.  Log on to the Flink development console and create a new job.
    
    1.  On the **Data Development** > **Data Ingestion** page, click **New**.
        
    2.  You can click **Blank Data Ingestion Draft**.
        
        Flink provides many code templates. Each template includes a use case, sample code, and usage guidance. You can click a template to learn about Flink features and syntax, and to implement your business logic.
        
    3.  You can click **Next**.
        
    4.  In the **New Data Ingestion Job Draft** dialog box, specify the configuration.
        
        **Job Parameter**
        
        **Description**
        
        **Example**
        
        **File Name**
        
        Name of the job.
        
        **Note**
        
        The job name must be unique within the current project.
        
        flink-test
        
        **Storage Location**
        
        Folder where the job code file is stored.
        
        You can also click the ![新建文件夹](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0161315261/p277156.png) icon to the right of an existing folder to create a subfolder.
        
        Job Draft
        
        **Engine Version**
        
        Flink engine version used by the job. For details about version numbers, version mappings, and lifecycle milestones, see [Engine Version Overview](/help/en/flink/realtime-flink/product-overview/engine-version#concept-2206172).
        
        vvr-11.1-jdk11-flink-1.20
        
    5.  Click **OK**.
        
2.  Copy the following job code into the job editor.
    
    This job synchronizes all tables from the tpc\_ds database to Hologres and merges the sharded user tables into a single Hologres table. Sample code:
    
    ```
    source:
      type: mysql
      name: MySQL Source
      hostname: localhost
      port: 3306
      username: username
      password: password
      tables: tpc_ds.\.*,user_db[0-9]+.user[0-9]+
      server-id: 8601-8604
      # (Optional) Synchronize table and column comments.
      include-comments.enabled: true
      # (Optional) Prioritize unbounded chunk distribution to avoid possible TaskManager OutOfMemory errors.
      scan.incremental.snapshot.unbounded-chunk-first.enabled: true
      # (Optional) Enable parsing filters to speed up reading.
      scan.only.deserialize.captured.tables.changelog.enabled: true  
    
    sink:
      type: hologres
      name: Hologres Sink
      endpoint: ****.hologres.aliyuncs.com:80
      dbname: cdcyaml_test
      username: ${secret_values.holo-username}
      password: ${secret_values.holo-password}
      sink.type-normalize-strategy: BROADEN
      
    route:
      # Merge sharded user tables into the my_user.users table.
      - source-table: user_db[0-9]+.user[0-9]+
        sink-table: my_user.users
    ```
    
    **Note**
    
    All tables in the MySQL tpc\_ds database map directly to identically named tables in the downstream database. No additional mapping is needed in the route section. To sync them to a different database, such as ods\_tps\_ds, configure the route section as follows:
    
    ```
    route:
      # Merge sharded user tables into the my_user.users table.
      - source-table: user_db[0-9]+.user[0-9]+
        sink-table: my_user.users
      # Sync all tables from the tpc_ds database to the ods_tps_ds database.
      - source-table: tpc_ds.\.*
        sink-table: ods_tps_ds.<>
        replace-symbol: <>
    ```
    

## Step 2: Start the job

1.  On the **Data Development** > **Data Ingestion** page, click **Deploy**. In the dialog box that appears, click **Confirm**.![部署](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9977616271/p550070.png)
    
2.  On the **Operation Center** > **Job Operations** page, click **Actions** next to your target job, and then click **Start**. For more information, see [Start a job](/help/en/flink/realtime-flink/user-guide/start-a-deployment#task-2047214).
    
3.  Click **Start**.
    
    After the job starts, you can monitor its status and runtime information on the Job Operations page.![作业状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6629020761/p516342.jpg)
    

## Step 3: Monitor full data synchronization results

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  On the **Metadata Management** tab, view the 24 tables and their data in the tpc\_ds database.
    
    ![holo表数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3966208461/p372023.png)
    
3.  On the **Metadata Management** tab, you can view the schema of the users table in the my\_user database.
    
    The synchronized schema and data are shown in the following figures.
    
    -   Schema![表结构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3966208461/p372024.png)
        
        The users table schema includes two extra columns: \_db\_name and \_table\_name. These columns record the source database and table names. They also form part of a composite primary key to ensure uniqueness after the sharded tables are merged.
        
    -   Table data
        
        In the upper-right corner of the users table details page, click **Query Table**, enter the following command, and then click **Run**.
        
        ```
        select * from users order by _db_name,_table_name,id;
        ```
        
        The query result is shown in the following figure.![表数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3966208461/p372027.png)
        
    

## Step 4: Monitor incremental synchronization results

After full data synchronization is complete, the job automatically switches to incremental synchronization. No manual intervention is required. You can check the currentEmitEventTimeLag metric on the Monitoring and Alerts tab to determine the current synchronization phase.

1.  Log on to the [Realtime Compute console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
2.  Find your target workspace and click **Console** in the **Actions** column.
    
3.  On the **Operation Center** > **Job Operations** page, click the name of your target job.
    
4.  You can click the **Monitoring and Alerts** tab (or the **Data Curve** tab).
    
5.  Check the currentEmitEventTimeLag curve to identify the synchronization phase.
    
    ![数据曲线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3966208461/p372060.png)
    
    -   A value of 0 indicates that full synchronization is still in progress.
        
    -   A value greater than 0 indicates that incremental synchronization has started.
        
    
6.  Verify real-time synchronization of data and schema changes.
    
    MySQL CDC sources support real-time synchronization of data and schema changes during incremental synchronization. After the job enters the incremental synchronization phase, you can modify the schema and data of a sharded user table in MySQL to verify this capability.
    
    1.  Log on to your ApsaraDB RDS for MySQL instance using DMS.
        
        For more information, see [(Deprecated, redirected to “Step 2”) Log on to ApsaraDB RDS for MySQL using DMS](/help/en/doc-detail/284465.html#concept-2099025).
        
    2.  In the user\_db2 database, run the following commands to modify the schema of the user02 table and insert and update data.
        
        ```
        USE DATABASE `user_db2`;
        ALTER TABLE `user02` ADD COLUMN `age` INT;   -- Add the age column.
        INSERT INTO `user02` (id, name, age) VALUES (27, 'Tony', 30); -- Insert data with age.
        UPDATE `user05` SET name='JARK' WHERE id=15;  -- Update another table and change the name to uppercase.
        ```
        
    3.  In the Hologres console, check the changes to the users table schema and data.
        
        In the upper-right corner of the details page of the users table, click **Query Table**, enter the following command, and click **Run**.
        
        ```
        select * from users order by _db_name,_table_name,id;
        ```
        
        The query result is shown in the following figure.![表结构和数据变化](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3966208461/p372070.png) Although the schemas of the sharded tables differ, the schema and data changes made to the user02 table are synchronized in real time to the downstream users table. In Hologres, the users table now includes the new age column, the inserted Tony record, and the updated JARK record.
        

## (Optional) Step 5: Configure job resources

Data volume varies. To optimize job performance, you can adjust the concurrency and TaskManager resources. You can use resource configuration to tune the job concurrency and memory or CU allocation.

1.  On the **Operation Center** > **Job Operations** page, click the name of your target job.
    
2.  On the **Deployment Details** tab, click **Resource Configuration**, and then click **Edit** in the upper-right corner.
    
3.  Manually set resource parameters such as TaskManager memory and concurrency.
    
4.  In the upper-right corner of the **Resource Configuration** section, click **Save**.
    
5.  Restart the job.
    
    Resource configuration changes take effect only after you restart the job.
    

## References

-   For more information about the syntax of data ingestion modules, see [Flink CDC Data Ingestion Job Development Reference](/help/en/flink/realtime-flink/developer-reference/data-ingestion-development-reference/).
    
-   If an exception occurs while you run a data ingestion job, see [Common Issues and Solutions for Data Ingestion Jobs](/help/en/flink/realtime-flink/use-cases/frequently-asked-questions-faq).
    
-   [Quick Start: Real-Time Log Ingestion into a Data Warehouse](/help/en/flink/realtime-flink/getting-started/ingest-log-data-into-data-warehouses-in-real-time).
    
-   [Implement Real-Time Ingestion into a Data Warehouse](/help/en/flink/realtime-flink/use-cases/real-time-data-ingestion-into-the-data-warehouse).
    
-   [Real-Time Database Ingestion into a Data Lake](/help/en/flink/realtime-flink/use-cases/real-time-data-ingestion-into-the-datalake).
    
-   [Build a Real-Time Data Warehouse with Hologres](/help/en/flink/realtime-flink/use-cases/build-real-time-data-warehouse-based-on-flink-hologres).
    
-   [Build a Streaming Lakehouse with Paimon and StarRocks](/help/en/flink/realtime-flink/use-cases/build-a-streaming-data-warehouse-based-on-flink-and-apache-paimon).
