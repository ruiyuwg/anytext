This topic describes how to use Data Transmission Service (DTS) to migrate data between ApsaraDB RDS instances. DTS supports schema migration, full data migration, and incremental data migration. When you configure a data migration task, you can select all of the supported migration types to ensure service continuity.

## Prerequisites

The database types of the ApsaraDB RDS instances meet the following requirements.

**Source database**

**Destination database**

RDS MySQL

ApsaraDB RDS for MariaDB

RDS MySQL

ApsaraDB RDS for MariaDB

ApsaraDB RDS for SQL Server

ApsaraDB RDS for SQL Server

ApsaraDB RDS for PostgreSQL

ApsaraDB RDS for PostgreSQL

## Precautions

-   Data migration does not affect the data of the source database. During data migration, DTS reads the data of the source database and copies the data to the destination database. DTS does not delete the data of the source database. For more information, see [How DTS works in data migration mode](/help/en/dts/product-overview/service-architecture#section-3zd-hxu-egu).
    
-   DTS uses read and write resources of the source and destination databases during full data migration. This may increase the loads of the database servers. If the database performance is unfavorable, the specification is low, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source database, the tables have no primary keys, or a deadlock occurs in the destination database. Before you migrate data, evaluate the impact of data migration on the performance of the source and destination databases. We recommend that you migrate data during off-peak hours. For example, you can migrate data when the CPU utilization of the source and destination databases is less than 30%.
    
-   The tables to be migrated in the source database must have PRIMARY KEY or UNIQUE constraints and all fields must be unique. Otherwise, the destination database may contain duplicate data records.
    
-   To ensure data consistency, we recommend that you do not write data to the source ApsaraDB RDS instance during full data migration.
    
-   If a data migration task fails and stops, DTS automatically resumes the task. Before you switch your workloads to the destination instance, stop or release the data migration task. Otherwise, the data in the source instance will overwrite the data in the destination instance after the task is resumed.
    
-   DTS automatically creates a database in the destination ApsaraDB RDS instance. However, if the name of the source database does not meet the naming conventions of ApsaraDB RDS, you must manually create a database in the destination ApsaraDB RDS instance before you configure the data migration task.
    
    **Note**
    
    For more information about the naming conventions of ApsaraDB RDS and how to create a database, see [Create accounts and databases](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#concept-jyq-tc5-q2b).
    
-   If you migrate data between ApsaraDB RDS for PostgreSQL instances, take note of the following limits: After your workloads are switched to the destination database, newly written sequences do not increment from the maximum value of the sequences in the source database. Therefore, you must query the maximum value of the sequences in the source database before you switch your workloads to the destination database. Then, you must specify the queried maximum value as the starting value of the sequences in the destination database. You can execute the following statements to query the maximum value of the sequences in the source database:
    
    ```
    do language plpgsql $$
    declare
      nsp name;
      rel name;
      val int8;
    begin
      for nsp,rel in select nspname,relname from pg_class t2 , pg_namespace t3 where t2.relnamespace=t3.oid and t2.relkind='S'
      loop
        execute format($_$select last_value from %I.%I$_$, nsp, rel) into val;
        raise notice '%',
        format($_$select setval('%I.%I'::regclass, %s);$_$, nsp, rel, val+1);
      end loop;
    end;
    $$;
    ```
    

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
    
    DTS migrates the schemas of the specified objects from the source ApsaraDB RDS instance to the destination ApsaraDB RDS instance.
    
-   Full data migration
    
    DTS migrates all historical data of the specified objects from the source ApsaraDB RDS instance to the destination ApsaraDB RDS instance.
    
-   Incremental data migration
    
    After full data migration is complete, DTS synchronizes incremental data from the source ApsaraDB RDS instance to the destination ApsaraDB RDS instance. Incremental data migration allows you to ensure service continuity when you migrate data between ApsaraDB RDS instances.
    

## SQL operations that can be synchronized during incremental data migration

**Scenario**

**Operation type**

**SQL statement**

-   Migrate data between ApsaraDB RDS for MySQL instances
    
-   Migrate data between ApsaraDB RDS for MariaDB instances
    
-   Migrate data between an ApsaraDB RDS for MariaDB instance and an RDS MySQL instance
    

DML

INSERT, UPDATE, DELETE, and REPLACE

DDL

-   ALTER TABLE and ALTER VIEW
    
-   CREATE FUNCTION, CREATE INDEX, CREATE PROCEDURE, CREATE TABLE, and CREATE VIEW
    
-   DROP INDEX and DROP TABLE
    
-   RENAME TABLE
    
-   TRUNCATE TABLE
    

Migrate data between ApsaraDB RDS for SQL Server instances

DML

INSERT, UPDATE, and DELETE

**Note**

If an UPDATE operation updates only the large fields, DTS does not synchronize the operation.

DDL

-   ALTER TABLE, including only ADD COLUMN, DROP COLUMN, and RENAME COLUMN
    
-   CREATE TABLE and CREATE INDEX
    
    **Note**
    
    If a CREATE TABLE operation creates a partitioned table or a table that contains functions, DTS does not synchronize the operation.
    
-   DROP TABLE
    
-   RENAME TABLE
    
-   TRUNCATE TABLE
    

Migrate data between ApsaraDB RDS for PostgreSQL instances

DML

INSERT, UPDATE, and DELETE

DDL

-   ALTER TABLE and ADD INDEX
    
-   CREATE TABLE and CREATE INDEX
    
    **Note**
    
    If a CREATE TABLE operation creates a partitioned table or a table that contains functions, DTS does not synchronize the operation.
    
-   DROP TABLE
    
-   RENAME TABLE
    

## Permissions required for database accounts

**Scenario**

**Database**

**Schema migration**

**Full data migration**

**Incremental data migration**

-   Migrate data between ApsaraDB RDS for MySQL instances
    
-   Migrate data between ApsaraDB RDS for MariaDB instances
    
-   Migrate data between an ApsaraDB RDS for MariaDB instance and an RDS MySQL instance
    

Source instance

SELECT permission

SELECT permission

REPLICATION SLAVE, REPLICATION CLIENT, SHOW VIEW, and SELECT permissions

Destination instance

Read and write permissions

Read and write permissions

Read and write permissions

Migrate data between ApsaraDB RDS for SQL Server instances

Source instance

SELECT permission

SELECT permission

Owner permissions on the objects to be migrated

**Note**

A privileged account has the permissions.

Destination instance

Read and write permissions

Read and write permissions

Read and write permissions

Migrate data between ApsaraDB RDS for PostgreSQL instances

Source instance

USAGE permission on pg\_catalog

SELECT permission on the objects to be migrated

rds\_superuser

**Note**

-   A privileged account of an ApsaraDB RDS for PostgreSQL instance has the permissions.
    
-   If you receive a message indicating that the database account does not have the permissions of the superuser role, you must update the minor engine version of the instance.
    

Destination instance

CREATE and USAGE permissions on the objects to be migrated

Permissions of the database owner, including the permissions to perform the INSERT, UPDATE, and DELETE operations

**Note**

A standard account of an ApsaraDB RDS for PostgreSQL instance has the permissions.

Permissions of the database owner, including the permissions to perform the INSERT, UPDATE, and DELETE operations

**Note**

A standard account of an ApsaraDB RDS for PostgreSQL instance has the permissions.

## Procedure

1.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    If you are redirected to the Data Management (DMS) console, you can click the ![old](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2274020761/p529428.png) icon in the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3856567171/p805074.png) to go to the previous version of the DTS console.
    
2.  In the left-side navigation pane, click **Data Migration**.
    
3.  In the upper part of the **Migration Tasks** page, select the region in which the RDS instance resides.
    
4.  In the upper-right corner of the page, click **Create Migration Task**.
    
5.  Configure the source and destination databases. ![Migrate data between ApsaraDB RDS instances](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9840359951/p49618.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Task Name
    
    The task name that DTS automatically generates. We recommend that you specify a descriptive name that makes it easy to identify the task. You do not need to specify a unique task name.
    
    Source Database
    
    Instance Type
    
    Select **RDS Instance**.
    
    Instance Region
    
    The region in which the source instance resides.
    
    RDS Instance ID
    
    The ID of the source instance.
    
    **Note**
    
    The source and destination ApsaraDB RDS instances can be the same or different. You can use DTS to migrate data within an ApsaraDB RDS instance or between two ApsaraDB RDS instances.
    
    Database Name
    
    The name of the source database in the ApsaraDB RDS for PostgreSQL instance.
    
    **Note**
    
    This parameter is required only if the database engine of the ApsaraDB RDS instance is **PostgreSQL**.
    
    Database Account
    
    The database account of the source instance. For information about the permissions that are required for the account, see [Permissions required for database accounts](#section-bjn-5zq-5hb).
    
    Database Password
    
    The password of the database account.
    
    **Note**
    
    After you specify the information about the source database, you can click **Test Connectivity** next to **Database Password** to check whether the information is valid. If the information is valid, the **Passed** message appears. If the **Failed** message appears, click **Check** next to **Failed**. Then, modify the information based on the check results.
    
    Encryption
    
    Select **Non-encrypted** or **SSL-encrypted**. If you want to select **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS instance before you configure the task. For more information, see [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Note**
    
    This parameter is required only if the database engine of the ApsaraDB RDS instance is **MySQL**.
    
    The **Encryption** parameter is available only for regions in the Chinese mainland and the China (Hong Kong) region.
    
    Destination Database
    
    Instance Type
    
    Select **RDS Instance**.
    
    Instance Region
    
    The region where the destination instance resides.
    
    RDS Instance ID
    
    The ID of the destination instance.
    
    **Note**
    
    The source and destination ApsaraDB RDS instances can be the same or different. You can use DTS to migrate data within an ApsaraDB RDS instance or between two ApsaraDB RDS instances.
    
    Database Name
    
    The name of the destination database in the ApsaraDB RDS for PostgreSQL instance. The name of the destination database can be different from the name of the source database.
    
    **Note**
    
    This parameter is required only if the database engine of the ApsaraDB RDS instance is **PostgreSQL**.
    
    Database Account
    
    The database account of the destination instance. For information about the permissions that are required for the account, see [Permissions required for database accounts](#section-bjn-5zq-5hb).
    
    Database Password
    
    The password of the database account.
    
    **Note**
    
    After you specify the information about the RDS instance, you can click **Test Connectivity** next to **Database Password** to check whether the information is valid. If the information is valid, the **Passed** message appears. If the **Failed** message appears, click **Check** next to **Failed**. Then, modify the information based on the check results.
    
    Encryption
    
    Select **Non-encrypted** or **SSL-encrypted**. If you want to select **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS instance before you configure the data synchronization task. For more information, see [Use a cloud certificate to enable SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Note**
    
    This parameter is required only if the database engine of the ApsaraDB RDS instance is **MySQL**.
    
    The **Encryption** parameter is available only for regions in the Chinese mainland and the China (Hong Kong) region.
    
6.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhance the security of your username and password, limit the ports that are exposed, authenticate API calls, regularly check the whitelist or ECS security group rules and forbid unauthorized CIDR blocks, or connect the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
7.  Select the objects to be migrated and the migration types. ![Select the migration types and the objects to be migrated](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0058680261/p47745.png)
    
    **Setting**
    
    **Description**
    
    Select the migration types
    
    Select the migration types based on your business requirements. The migration types must be supported by the database engine.
    
    -   To perform only full data migration, select **Schema Migration** and **Full Data Migration**.
        
    -   To ensure service continuity during data migration, select **Schema Migration**, **Full Data Migration**, and **Incremental Data Migration**.
        
    
    **Note**
    
    If **Incremental Data Migration** is not selected, we recommend that you do not write data to the source RDS instance during data migration. This ensures data consistency between the source and destination instances.
    
    Select the objects to be migrated
    
    Select one or more objects from the **Available** section and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to move the objects to the **Selected** section.
    
    **Note**
    
    -   You can select columns, tables, or databases as the objects to be migrated. If you select tables or columns as the objects to be migrated, DTS does not migrate other objects such as views, triggers, or stored procedures to the destination database.
        
    -   By default, after an object is migrated to the destination database, the name of the object remains unchanged. You can use the object name mapping feature to rename the objects that are migrated to the destination database. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
        
    -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be migrated.
        
    
    Specify whether to rename objects
    
    You can use the object name mapping feature to rename the objects that are migrated to the destination instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Specify the retry time range for failed connections to the source or destination database
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 720 minutes, which is equal to 12 hours. You can specify the retry time range based on your business requirements. If DTS reconnects to the source and destination databases within the specified time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
    
    **Note**
    
    When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time range based on your business requirements. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
    
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
