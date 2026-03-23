This topic describes how to migrate data from a self-managed Db2 database to an ApsaraDB RDS for MySQL instance by using Data Transmission Service (DTS). DTS supports schema migration, full data migration, and incremental data migration. When you migrate data from a self-managed Db2 database, you can select all of the supported migration types to ensure business continuity.

## Prerequisites

-   The version of the Db2 database ranges from 9.7 to 11.5.
    
    **Note**
    
    DTS supports data migration from a Db2 for i database of version 7.3 or 7.4 to an RDS instance. You can follow the procedure described in this topic to migrate data from a Db2 for i database to the RDS instance.
    
-   The available storage of the RDS instance is larger than the total size of the data in the Db2 database.
    

## Usage notes

-   DTS cannot synchronize data definition language (DDL) operations.
    
-   If the name of the source database does not conform to the database naming conventions of ApsaraDB RDS, you must create a database in the RDS instance before you configure a data migration task.
    
    **Note**
    
    For more information about the database naming conventions of ApsaraDB RDS and how to create a database, see [Create a database](/help/en/rds/apsaradb-rds-for-mysql/create-a-database-for-an-apsaradb-rds-for-mysql-instance).
    
-   DTS uses read and write resources of the source and destination databases during full data migration. This may increase the loads of the database servers. If the database performance is unfavorable, the specification is low, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source database, the tables have no primary keys, or a deadlock occurs in the destination database. Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. For example, you can migrate data when the CPU utilization of the source and destination databases is less than 30%.
    
-   If a data migration task fails, DTS automatically resumes the task. Before you switch your workloads to the destination instance, you must stop or release the data migration task. Otherwise, the data in the source database overwrites the data in the destination instance after the task is resumed.
    
-   DTS synchronizes incremental data from the self-managed Db2 database to the destination database on the RDS instance based on the Change Data Capture (CDC) replication technology of Db2. However, the CDC replication technology has its own limits. For more information, see [General data restrictions for SQL Replication](https://www.ibm.com/support/knowledgecenter/SSTRGZ_11.4.0/com.ibm.swg.im.iis.db.repl.sqlrepl.doc/topics/iiyrssubdatarestrict.html).
    

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
    
    DTS migrates the schemas of the required objects to the destination instance. DTS supports schema migration for the following types of objects: table, index, and foreign key.
    
-   Full data migration
    
    DTS migrates historical data of the required objects from the Db2 database to the destination database on the RDS instance.
    
-   Incremental data migration
    
    After full data migration is complete, DTS synchronizes incremental data from the Db2 database to the destination database on the RDS instance. Incremental data migration helps ensure business continuity when you migrate data from a Db2 database.
    

## Permissions required for database accounts

**Database**

**Schema migration**

**Full data migration**

**Incremental data migration**

Db2 database

CONNECT and SELECT permissions

CONNECT and SELECT permissions

Database administrator permissions (DBADM authority)

RDS instance

Read and write permissions

Read and write permissions

Read and write permissions

For information about how to create a database account and grant permissions to the database account, see the following topics:

-   Db2 database: [Creating group and user IDs for a Db2 database installation (Linux and UNIX)](https://www.ibm.com/support/knowledgecenter/zh/SSEPGG_11.1.0/com.ibm.db2.luw.qb.server.doc/doc/t0006742.html#t0006742) and [Authorities overview](https://www.ibm.com/support/knowledgecenter/zh/SSEPGG_11.1.0/com.ibm.db2.luw.admin.sec.doc/doc/c0055206.html)
    
-   RDS instance: [Create an account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance) and [Modify the permissions of an account](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance)
    

## Data migration process

To prevent data migration failures caused by dependencies between objects, DTS migrates the schemas and data of the Db2 database in the following order:

1.  Migrate the table schemas and indexes.
    
2.  Migrate full data.
    
3.  Migrate the schemas of foreign keys.
    
4.  Migrate incremental data.
    

## Preparations before incremental data migration

Before you configure an incremental data migration task, enable the archive logging feature for the Db2 database. For more information, see [logarchmeth1 - Primary log archive method configuration parameter](https://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.config.doc/doc/r0011448.html) and [logarchmeth2 - Secondary log archive method configuration parameter](https://www.ibm.com/support/knowledgecenter/SSEPGG_10.5.0/com.ibm.db2.luw.admin.config.doc/doc/r0011449.html).

**Note**

Skip this step if you migrate only full data.

## Procedure

1.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    If you are redirected to the Data Management (DMS) console, you can click the ![old](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2274020761/p529428.png) icon in the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3856567171/p805074.png) to go to the previous version of the DTS console.
    
2.  In the left-side navigation pane, click **Data Migration**.
    
3.  In the upper part of the **Migration Tasks** page, select the region in which the RDS instance resides.
    
4.  In the upper-right corner of the page, click **Create Migration Task**.
    
5.  Configure the **source and destination databases**. ![配置源和目标库连接信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2820359951/p64320.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Task Name
    
    DTS automatically generates a task name. We recommend that you specify a name that can help you identify the task. You do not need to specify a unique task name.
    
    Source Database
    
    Instance Type
    
    Select the type of the source database. In this example, **User-Created Database with Public IP Address** is selected.
    
    **Note**
    
    If you select other instance types, you must deploy the network environment for the self-managed database. For more information, see [Preparation overview](/help/en/dts/user-guide/preparation-overview#concept-2364477).
    
    Instance Region
    
    If you select **User-Created Database with Public IP Address** as the type of the database, you do not need to configure the **Instance Region** parameter.
    
    **Note**
    
    If a whitelist is configured for the Db2 database, you must add the CIDR block of the DTS server to the whitelist of the database. You can click **Get IP Address Segment of DTS** next to **Instance Region** to obtain the CIDR block.
    
    Database Type
    
    Select **DB2**.
    
    Hostname or IP Address
    
    Enter the endpoint that is used to connect to the Db2 database. In this example, the public IP address is used.
    
    Port Number
    
    Enter the service port number of the Db2 database. The default port number is **50000**.
    
    **Note**
    
    In this example, the service port must be accessible over the Internet.
    
    Database Name
    
    Enter the name of the database from which you want to migrate data.
    
    Database Account
    
    Enter the username of the account that is used to connect to the Db2 database. For more information about the permissions that are required for the account, see [Permissions required for database accounts](#section-bjn-5zq-5hb).
    
    Database Password
    
    Enter the password of the account that is used to connect to the Db2 database.
    
    **Note**
    
    After you configure the source database parameters, click **Test Connectivity** next to **Database Password** to check whether the configured parameters are valid. If the configured parameters are valid, the **Passed** message appears. If the **Failed** message appears, click **Check** next to **Failed**. Modify the source database parameters based on the check results.
    
    Destination Database
    
    Instance Type
    
    The type of the destination database. Select **RDS Instance**.
    
    Instance Region
    
    Select the region in which the RDS instance resides.
    
    RDS Instance ID
    
    Select the ID of the RDS instance.
    
    Database Account
    
    Enter the username of the account that is authorized to manage the destination database on the RDS instance. For more information about the permissions required for the account, see [Permissions required for database accounts](#section-bjn-5zq-5hb).
    
    Database Password
    
    Enter the password of the account that is authorized to manage the destination database on the RDS instance.
    
    **Note**
    
    After you configure the destination database parameters, click **Test Connectivity** next to **Database Password** to verify whether the configured parameters are valid. If the configured parameters are valid, the **Passed** message appears. If the **Failed** message appears, click **Check** next to **Failed**. Modify the destination database parameters based on the check results.
    
    Encryption
    
    Select **Non-encrypted** or **SSL-encrypted** based on your business requirements. If you select **SSL-encrypted**, make sure that SSL encryption is enabled for the RDS instance before you configure the data migration task. For more information, see [Configure SSL encryption for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Note**
    
    The **Encryption** parameter is available only for regions in the Chinese mainland and the China (Hong Kong) region.
    
6.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    If the source or destination database is an Alibaba Cloud database instance, such as an ApsaraDB RDS for MySQL or ApsaraDB for MongoDB instance, DTS automatically adds the CIDR blocks of DTS servers to the IP address whitelist of the instance. If the source or destination database is a self-managed database hosted on an Elastic Compute Service (ECS) instance, DTS automatically adds the CIDR blocks of DTS servers to the security group rules of the ECS instance, and you must make sure that the ECS instance can access the database. If the self-managed database is hosted on multiple ECS instances, you must manually add the CIDR blocks of DTS servers to the security group rules of each ECS instance. If the source or destination database is a self-managed database that is deployed in a data center or provided by a third-party cloud service provider, you must manually add the CIDR blocks of DTS servers to the IP address whitelist of the database to allow DTS to access the database. For more information, see the [CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353) section of the Add the CIDR blocks of DTS servers topic.
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhance the security of your username and password, limit the ports that are exposed, authenticate API calls, regularly check the whitelist or ECS security group rules and forbid unauthorized CIDR blocks, or connect the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
7.  Select the migration objects and migration types. ![选择迁移类型和迁移对象](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0058680261/p47745.png)
    
    **Parameter**
    
    **Description**
    
    Migration Types
    
    -   To migrate only full data, select **Schema Migration** and **Full Data Migration**.
        
    -   To ensure business continuity during data migration, select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
        
    
    **Note**
    
    If **Incremental Data Migration** is not selected, we recommend that you do not write data to the Db2 database during data migration. This helps ensure data consistency.
    
    Available
    
    Select one or more objects from the **Available** section and click the ![向右小箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to add the selected objects to the **Selected** section.
    
    **Note**
    
    -   You can select columns, tables, or databases.
        
    -   By default, after an object is migrated to the destination database on the RDS instance, the name of the object remains the same as that in the Db2 database. You can use the object name mapping feature to rename the objects that are migrated to the RDS instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
        
    -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be migrated.
        
    
    Rename Databases and Tables
    
    You can use the object name mapping feature to rename the objects that are migrated to the destination database on the RDS instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Retry Time for Failed Connections
    
    By default, if DTS fails to connect to the required database, DTS retries within the following 720 minutes. If DTS is reconnected to the source database and destination database on the RDS instance within the specified time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
    
    **Note**
    
    Within the time range in which DTS attempts to reconnect to the required database, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at the earliest opportunity after the source database and destination database on the RDS instance are released.
    
8.  Click **Precheck**.
    
    **Note**
    
    -   A precheck is performed before the migration task starts. The migration task only starts after the precheck succeeds.
        
    -   If the precheck fails, click the ![Note](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9684400951/p47390.png) icon next to each failed check item to view the related details. Fix the issues as instructed and run the precheck again.
        
    
9.  Click **Next**.
    
10.  In the **Confirm Settings** dialog box, configure the **Channel Specification** parameter. Then, read and select **Data Transmission Service (Pay-as-you-go) Service Terms**.
     
11.  Click **Buy and Start** to start the data migration task.
     
     -   Full data migration
         
         Do not manually stop a full data migration task. If you manually stop a full data migration task, the data that is migrated to the RDS instance may be incomplete. You can wait until the data migration task automatically stops.
         
     -   Incremental data migration
         
         An incremental data migration task does not automatically stop. You must manually stop the task.
         
         **Note**
         
         We recommend that you manually stop an incremental data migration task at an appropriate point in time. For example, you can stop the task during off-peak hours or before you switch your workloads over to the ApsaraDB RDS for MySQL instance.
         
         1.  Wait until **Incremental Data Migration** and **The data migration task is not delayed** are displayed in the progress bar of the data migration task. Then, stop writing data to the source database for a few minutes. The latency of **incremental data migration** may be displayed in the progress bar.
             
         2.  Wait until the status of **Incremental Data Migration** changes to **The data migration task is not delayed** again. Then, manually stop the migration task.![无延迟](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5073333461/p47604.png)
             
12.  Switch your workloads to the RDS instance.
