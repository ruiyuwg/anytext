You can use Data Transmission Service (DTS) to synchronize incremental data from a self-managed MySQL instance connected over Express Connect, VPN Gateway, or Smart Access Gateway to an ApsaraDB RDS for MySQL instance in real time.

## Prerequisites

-   An RDS instance is created. For more information, see [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb).
    
-   The self-managed MySQL instance runs MySQL 5.1, MySQL 5.5, MySQL 5.6, MySQL 5.7, or MySQL 8.0.
    
-   The self-managed MySQL instance is connected to an Alibaba Cloud virtual private cloud (VPC). For more information, see [Connect an on-premises database to DTS by using CEN](/help/en/dts/user-guide/connect-an-on-premises-database-to-dts-using-cen#task-2498689).
    
    **Note**
    
    DTS is allowed to access the VPC to which the self-managed MySQL instance belongs. For more information, see [Connect a data center to DTS by using VPN Gateway](/help/en/dts/user-guide/connect-a-data-center-to-dts-using-vpn-gateway#concept-227432).
    

## Usage notes

-   DTS uses read and write resources of the source and destination RDS instances during initial full data synchronization. This may increase the loads of the RDS instances. If the instance performance is unfavorable, the specification is low, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source RDS instance, the tables have no primary keys, or a deadlock occurs in the destination RDS instance. Before data synchronization, evaluate the impact of data synchronization on the performance of the source and destination RDS instances. We recommend that you synchronize data during off-peak hours. For example, you can synchronize data when the CPU utilization of the source and destination RDS instances is less than 30%.
    
-   We recommend that you do not use gh-ost or pt-online-schema-change to perform DDL operations on objects during data synchronization. Otherwise, data synchronization may fail.
    
-   The tables to be migrated in the source database must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   During initial full data synchronization, concurrent INSERT operations cause fragmentation in the tables of the destination instance. After initial full data synchronization is complete, the size of used tablespace of the destination instance is larger than that of the source instance.
    

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
    
-   Two-way one-to-one synchronization
    

For more information about the synchronization topologies that are supported by DTS, see [Synchronization topologies](/help/en/dts/user-guide/synchronization-topologies#concept-978516).

## SQL operations that can be synchronized

**Operation type**

**SQL statement**

DML

INSERT, UPDATE, DELETE, and REPLACE

DDL

-   ALTER TABLE and ALTER VIEW
    
-   CREATE FUNCTION, CREATE INDEX, CREATE PROCEDURE, CREATE TABLE, and CREATE VIEW
    
-   DROP INDEX and DROP TABLE
    
-   RENAME TABLE
    
    **Important**
    
    RENAME TABLE operations may cause data inconsistency between the source and destination databases. For example, if you select a table as the object to be synchronized and rename the table during data synchronization, the data of this table is not synchronized to the destination database. To prevent this situation, you can select the database to which this table belongs as the object to be synchronized when you configure the data synchronization task. Make sure that the databases to which the table belongs before and after the RENAME TABLE operation are added to the objects to be synchronized.
    
-   TRUNCATE TABLE
    

## Limits

-   Incompatibility with triggers
    
    If you select a database as the object to synchronize and the database contains a trigger that updates a table, data inconsistency may occur. For more information about how to resolve this issue, see [Configure a data synchronization task for a source database that contains a trigger](/help/en/dts/use-cases/configure-a-data-synchronization-task-for-a-source-database-that-contains-a-trigger#multiTask2397).
    
-   Limits on RENAME TABLE operations
    
    RENAME TABLE operations may cause data inconsistency between the source and destination databases. For example, if only Table A is selected as the object to synchronize and is renamed Table B, Table B cannot be synchronized to the destination database. To prevent this situation, you can select the entire database in which Table A is located as the object to synchronize when you configure the data synchronization task.
    

## Preparations

Before you configure the data synchronization task, you must create a database account and configure binary logging for a self-managed MySQL database. For more information, see [Create an account for a self-managed MySQL database and configure binary logging](/help/en/dts/user-guide/create-an-account-for-a-self-managed-mysql-database-and-configure-binary-logging#concept-1198525).

## Procedure

1.  Purchase a data synchronization instance. For more information, see [Purchase a DTS instance](/help/en/dts/getting-started/purchase-a-dts-instance#concept-26604-zh).
    
    **Note**
    
    Select **MySQL** for both the source instance and the destination instance. Select **One-Way Synchronization** as the synchronization topology.
    
2.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    -   If you are navigated to the DMS console from the DTS console, you can move the pointer over the ![jiqir](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6169223761/p547998.png) icon in the lower-right corner and click the ![re](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6169223761/p547999.png) icon to return to the DTS console.
        
    -   If the new version of the DTS console appears after the logon, you can click the ![ret](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6169223761/p547997.png) icon in the lower-right corner to return to the previous version.
        
    
3.  In the left-side navigation pane, click **Data Synchronization**.
    
4.  In the upper part of the **Data Synchronization Tasks** page, select the region in which the destination instance resides.
    
5.  Find the data synchronization instance and click **Configure Task** in the Actions column.![配置MySQL单向同步任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2008936161/p46141.png)
    
6.  Configure the source and destination instances.![MySQL单向同步源目实例信息配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0030359951/p46162.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Synchronization Task Name
    
    DTS automatically generates a task name. We recommend that you specify an informative name to identify the task. You do not need to use a unique task name.
    
    Source Instance Details
    
    Instance Type
    
    The type of the source instance. Select **User-Created Database Connected over Express Connect, VPN Gateway, or Smart Access Gateway**.
    
    Instance Region
    
    The region of the source instance that you selected when you create the data synchronization instance. You cannot change the value of this parameter.
    
    Peer VPC
    
    The ID of the VPC that is connected to the self-managed MySQL instance.
    
    Database Type
    
    The database type that you selected when you create the data synchronization instance. The value of this parameter is set to MySQL and cannot be changed.
    
    IP Address
    
    The server IP address of the self-managed MySQL instance.
    
    Port Number
    
    The service port number of the self-managed MySQL instance. Default value: **3306**.
    
    Database Account
    
    The username of the account that is used to connect to the self-managed MySQL instance. The account must have the SELECT permission on the required objects and the REPLICATION CLIENT, REPLICATION SLAVE, and SHOW VIEW permissions.
    
    Database Password
    
    The password of the preceding account.
    
    Destination Instance Details
    
    Instance Type
    
    The type of the destination instance. Select **RDS Instance**.
    
    Instance Region
    
    The region of the destination instance that you selected when you create the data synchronization instance. You cannot change the value of this parameter.
    
    Instance ID
    
    The ID of the destination instance.
    
    Database Account
    
    The username of the account that is used to connect to the destination RDS instance.
    
    **Note**
    
    If the destination RDS instance runs **MySQL 5.5** or **MySQL 5.6**, you do not need to configure the **Database Account** or **Database Password** parameter.
    
    Database Password
    
    The password of the preceding account.
    
    Encryption
    
    Specifies whether to encrypt the connection. Select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you select **SSL-encrypted**, you must enable SSL encryption for the RDS instance before you configure the data migration task. For more information, see [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Important**
    
    The **Encryption** parameter is available only within regions in the Chinese mainland and the China (Hong Kong) region.
    
7.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    If the source or destination instance is an Alibaba Cloud instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to a whitelist of the database instance. If the source or destination instance is a self-managed database hosted on an Elastic Compute Service (ECS), DTS automatically adds the CIDR blocks of DTS servers to ECS security group rules. In this case, make sure that access requests from the ECS instance to the self-managed instance are allowed. If the source or destination instance is a self-managed instance in a data center or is from other cloud service provider, you must manually add the CIDR blocks of DTS servers to allow DTS to access the database. For more information, see [Add the CIDR blocks of DTS servers to the security settings of on-premises databases](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to synchronize data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or ECS security group rules and forbidding unauthorized CIDR blocks, or connecting the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
8.  Select the synchronization policy and the objects to be synchronized.![MySQL单向同步配置同步对象](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5010931261/p46145.png)
    
    **Parameter/Section**
    
    **Description**
    
    Select Object to Be Synchronized
    
    Select one or more objects from the **Available** section and click the ![向右小箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to move the objects to the **Selected** section.
    
    You can select tables or databases as the objects to be synchronized.
    
    **Note**
    
    -   If you select a database as the object to synchronize, all schema changes in the database are synchronized to the destination database.
        
    -   By default, after an object is synchronized to the destination database, the name of the object remains unchanged. You can use the object name mapping feature to rename the objects that are synchronized to the destination database. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
        
    
    Rename Databases and Tables
    
    You can use the object name mapping feature to rename the objects that are synchronized to the destination instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Source table DMS\_ONLINE\_Do you want to copy the temporary table to the target database during DDL
    
    If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) to perform online DDL operations on the source database, you can specify whether to synchronize temporary tables generated by online DDL operations.
    
    -   **Yes**: DTS synchronizes the data of temporary tables generated by online DDL operations.
        
        **Note**
        
        If online DDL operations generate a large amount of data, the data synchronization task may be delayed.
        
    -   **No**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL data of the source database is synchronized.
        
        **Note**
        
        If you select No, the tables in the destination database may be locked.
        
    
    Retry Time for Failed Connection
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 720 minutes (12 hours). You can specify the retry time based on your needs. If DTS reconnects to the source and destination databases within the specified time, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
    
    **Note**
    
    When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time based on your business needs. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
    
9.  In the lower-right corner of the page, click **Next**.
    
10.  Configure advanced settings for initial synchronization. ![数据同步高级设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8030359951/p41055.png)
     
     -   During initial synchronization, DTS synchronizes the schema and data of required objects from the source instance to the destination instance. The schema and data are the basis for subsequent incremental synchronization.
         
     -   Initial synchronization includes initial schema synchronization and initial full data synchronization. In most cases, you need to select both **Initial Schema Synchronization** and **Initial Full Data Synchronization**.
         
11.  In the lower-right corner of the page, click **Precheck**.
     
     **Important**
     
     -   Before you can start the data synchronization task, a precheck is performed. You can start the data synchronization task only after the task passes the precheck.
         
     -   If the task fails to pass the precheck, you can click the ![Info](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to each failed item to view details.
         
         -   After you troubleshoot the issues based on the causes, you can run a precheck again.
             
         -   If you do not need to troubleshoot the issues, you can ignore failed items and run a precheck again.
             
     
12.  Close the **Precheck** dialog box after the **The precheck is passed.** message is displayed in the **Precheck** dialog box. Then, the data synchronization task starts.
     
13.  Wait until initial synchronization is complete and the data synchronization task enters the **Synchronizing** state.
     
     You can view the state of the data synchronization task on the **Data Synchronization** page.![数据同步状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5464738161/p41059.png)
