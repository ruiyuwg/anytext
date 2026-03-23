This topic describes how to migrate data from a self-managed MySQL database that is connected over Express Connect, VPN Gateway, or Smart Access Gateway to an ApsaraDB RDS for MySQL instance by using Data Transmission Service (DTS). DTS supports schema migration, full data migration, and incremental data migration. When you migrate data from a self-managed MySQL database to an ApsaraDB RDS for MySQL instance, you can use all of the supported migration types to ensure service continuity.

## Prerequisites

-   The engine version of the self-managed MySQL database is MySQL 5.1, MySQL 5.5, MySQL 5.6, MySQL 5.7, or MySQL 8.0.
    
-   The available storage space of the RDS instance is larger than the total size of the data in the self-managed MySQL database.
    
-   The on-premises network to which the self-managed MySQL database belongs is connected to Alibaba Cloud over Express Connect, VPN Gateway, or Smart Access Gateway.
    
    **Note**
    
    For more information, see [Connect an on-premises database to DTS by using CEN](/help/en/dts/user-guide/connect-an-on-premises-database-to-dts-using-cen#task-2498689).
    

## Limits

-   DTS uses read and write resources of the source and destination databases during full data migration. This may increase the loads of the database servers. If the database performance is unfavorable, the specification is low, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source database, the tables have no primary keys, or a deadlock occurs in the destination database. Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. For example, you can migrate data when the CPU utilization of the source and destination databases is less than 30%.
    
-   The tables to be migrated in the source database must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   DTS uses the `ROUND(COLUMN,PRECISION)` function to retrieve values from columns of the FLOAT or DOUBLE data type. If you do not specify a precision, DTS sets the precision for the FLOAT data type to 38 digits and the precision for the DOUBLE data type to 308 digits. You must check whether the precision settings meet your business requirements.
    
-   DTS automatically creates a destination database in the ApsaraDB RDS for MySQL instance. However, if the name of the source database is invalid, you must manually create a database in the ApsaraDB RDS for MySQL instance before you configure the data migration task.
    
    **Note**
    
    For more information about the database naming conventions of ApsaraDB RDS for MySQL databases and how to create a database, see [Manage databases](/help/en/rds/apsaradb-rds-for-mysql/create-a-database-for-an-apsaradb-rds-for-mysql-instance).
    
-   If a data migration task fails, DTS automatically resumes the task. Before you switch your workloads to the destination instance, stop or release the data migration task. Otherwise, the data in the source database overwrites the data in the destination instance after the task is resumed.
    

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
    
    DTS migrates the schemas of the required objects to the destination instance. DTS supports schema migration for the following types of objects: table, view, trigger, stored procedure, and function.
    
    **Note**
    
    -   During schema migration, DTS changes the value of the SECURITY attribute from DEFINER to INVOKER for views, stored procedures, and functions.
        
    -   DTS does not migrate user information. To call a view, stored procedure, or function of the destination database, you must grant the read and write permissions to INVOKER.
        
    
-   Full data migration
    
    DTS migrates historical data of the required objects from the self-managed MySQL database to the destination database in the ApsaraDB RDS for MySQL instance.
    
    **Note**
    
    During full data migration, concurrent INSERT operations cause fragmentation in the tables of the destination database. After full data migration is complete, the tablespace of the destination database is larger than that of the source database.
    
-   Incremental data migration
    
    After full data migration is complete, DTS retrieves binary log files from the self-managed MySQL database. Then, DTS synchronizes incremental data from the self-managed MySQL database to the destination ApsaraDB RDS for MySQL instance. Incremental data migration allows you to ensure service continuity when you migrate data from a self-managed MySQL database to Alibaba Cloud.
    

## SQL operations that can be synchronized during incremental data migration

**Operation type**

**SQL statement**

DML

INSERT, UPDATE, DELETE, and REPLACE

DDL

-   ALTER TABLE and ALTER VIEW
    
-   CREATE FUNCTION, CREATE INDEX, CREATE PROCEDURE, CREATE TABLE, and CREATE VIEW
    
-   DROP INDEX and DROP TABLE
    
-   RENAME TABLE
    
-   TRUNCATE TABLE
    

## Permissions required for database accounts

**Database**

**Schema migration**

**Full data migration**

**Incremental data migration**

Self-managed MySQL database

The SELECT permission

The SELECT permission

The REPLICATION SLAVE, REPLICATION CLIENT, SHOW VIEW, and SELECT permissions

RDS MySQL instance

Read and write permissions

Read and write permissions

Read and write permissions

For more information about how to create a database account and grant permissions to the account, see the following topics:

-   Self-managed MySQL databases: [Create an account for a self-managed MySQL database and configure binary logging](/help/en/dts/user-guide/create-an-account-for-a-self-managed-mysql-database-and-configure-binary-logging#concept-1198525)
    
-   RDS MySQL instance: [Create an account on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance) and [Modify the permissions of an account](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance).
    

## Before you begin

1.  [Create an account for a self-managed MySQL database and configure binary logging](/help/en/dts/user-guide/create-an-account-for-a-self-managed-mysql-database-and-configure-binary-logging#concept-1198525).
    
2.  [Connect a data center to DTS by using VPN Gateway](/help/en/dts/user-guide/connect-a-data-center-to-dts-using-vpn-gateway#concept-227432).
    

## Procedure

1.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    If you are redirected to the Data Management (DMS) console, you can click the ![old](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2274020761/p529428.png) icon in the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3856567171/p805074.png) to go to the previous version of the DTS console.
    
2.  In the left-side navigation pane, click **Data Migration**.
    
3.  At the top of the **Migration Tasks** page, select the region where the destination cluster resides.
    
4.  In the upper-right corner of the page, click **Create Migration Task**.
    
5.  Configure the source and destination databases.
    
    ![Configure Source and Destination Databases](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9720359951/p63500.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Task Name
    
    DTS automatically generates a task name. We recommend that you specify a name that can help you identify the task. You do not need to specify a unique task name.
    
    Source Database
    
    Instance Type
    
    Select **User-Created Database Connected over Express Connect, VPN Gateway, or Smart Access Gateway**.
    
    Instance Region
    
    Select the region of the virtual private cloud (VPC) that is connected to Express Connect, VPN Gateway, or Smart Access Gateway.
    
    Peer VPC
    
    Select the VPC that is connected to Express Connect, VPN Gateway, or Smart Access Gateway.
    
    Database Type
    
    In this example, select **MySQL**.
    
    IP Address
    
    Enter the endpoint that is used to access the self-managed MySQL database.
    
    Port Number
    
    Enter the service port number of the self-managed MySQL database. The default port number is **3306**.
    
    Database Account
    
    Enter the account of the self-managed MySQL database. For information about the permissions that are required for the account, see [Permissions required for database accounts](#section-31k-oq1-w0z).
    
    Database Password
    
    Enter the password of the database account.
    
    **Note**
    
    After you specify the information about the source database, you can click **Test Connectivity** next to **Database Password** to check whether the information is valid. If the information is valid, the **Passed** message appears. If the **Failed** message appears, click **Check** next to **Failed**. Then, modify the information based on the check results.
    
    Destination Database
    
    Instance Type
    
    Select **RDS Instance**.
    
    Instance Region
    
    Select the region where the RDS instance resides.
    
    RDS Instance ID
    
    Select the ID of the RDS instance.
    
    Database Account
    
    Enter the database account of the destination RDS instance. For information about the permissions that are required for the account, see [Permissions required for database accounts](#section-31k-oq1-w0z).
    
    Database Password
    
    Enter the password of the database account.
    
    **Note**
    
    After you specify the information about the RDS instance, you can click **Test Connectivity** next to **Database Password** to check whether the information is valid. If the information is valid, the **Passed** message appears. If the **Failed** message appears, click **Check** next to **Failed**. Then, modify the information based on the check results.
    
    Encryption
    
    Select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you want to select **SSL-encrypted**, you must enable SSL encryption for the RDS instance before you configure the data migration task. For more information, see [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Note**
    
    The **Encryption** parameter is available only for regions in the Chinese mainland and the China (Hong Kong) region.
    
6.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhance the security of your username and password, limit the ports that are exposed, authenticate API calls, regularly check the whitelist or ECS security group rules and forbid unauthorized CIDR blocks, or connect the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
7.  Select the required migration types and the objects that you want to migrate.
    
    ![Select the required migration types and the objects that you want to migrate](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1947370261/p56880.png)
    
    **Setting**
    
    **Description**
    
    Select migration types
    
    -   To perform only full data migration, select **Schema Migration** and **Full Data Migration**.
        
    -   To ensure service continuity during data migration, select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
        
    
    **Important**
    
    If **Incremental Data Migration** is not selected, we recommend that you do not write data to the source database during full data migration. This ensures data consistency between the source and destination databases.
    
    Select the objects that you want to migrate
    
    Select one or more objects from the **Available** section and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to add the objects to the **Selected** section.
    
    **Important**
    
    -   You can select columns, tables, or databases as the objects to be migrated.
        
    -   By default, after an object is migrated to the destination database, the name of the object remains unchanged. You can use the object name mapping feature to rename the objects that are migrated to the destination database. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
        
    -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be migrated.
        
    
    Specify whether to rename objects
    
    You can use the object name mapping feature to rename the objects that are migrated to the destination database. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Specify the retry time range for failed connections to the source or destination database
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 720 minutes (12 hours). You can specify the retry time range based on your business requirements. If DTS reconnects to the source and destination databases within the specified time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
    
    **Note**
    
    Within the time range in which DTS attempts to reconnect to the source and destination databases, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at the earliest opportunity after the source and destination databases are released.
    
    Specify whether to copy temporary tables to the destination database when DMS performs online DDL operations on the source table
    
    If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) to perform online DDL operations on the source database, you can specify whether to migrate temporary tables generated by online DDL operations. Valid values:
    
    -   **Yes**: DTS migrates the data of temporary tables generated by online DDL operations.
        
        **Note**
        
        If online DDL operations generate a large amount of data, the data migration task may take an extended period of time to complete.
        
    -   **No**: DTS does not migrate the data of temporary tables generated by online DDL operations. Only the original DDL data of the source database is migrated.
        
        **Note**
        
        If you select No, the tables in the destination database may be locked.
        
    
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
             
     
12.  Switch your workloads to the destination RDS instance.
