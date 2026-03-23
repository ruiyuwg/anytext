Data Transmission Service (DTS) supports real-time two-way data synchronization between two MySQL databases, such as ApsaraDB RDS for MySQL and self-managed MySQL. This feature is suitable for various scenarios, including active geo-redundancy and geo-disaster recovery. This topic uses ApsaraDB RDS for MySQL instances as an example to describe the configuration procedure. The procedure for other data sources is similar.

## Prerequisites

Source and target RDS MySQL instances are required. [Create RDS instances](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance) if not already present.

## Notes

-   When DTS performs initial full data synchronization, it consumes read and write resources from the source and destination databases, which may increase the database load. If your database has poor performance, low specifications, or high service traffic, the database load may increase significantly. Examples of such conditions include a source database with many slow SQL statements or tables without primary keys, or a destination database with deadlocks. This can even make the database service unavailable. Therefore, you must evaluate the performance of the source and destination databases before you synchronize data. We recommend that you perform data synchronization during off-peak hours, for example, when the CPU load of both databases is below 30%.
    
-   During data synchronization, do not use tools such as gh-ost or pt-online-schema-change to perform online DDL operations on the synchronization objects in the source database. Otherwise, the synchronization task fails.
    
-   If no data other than the data from DTS is written to the destination database, you can use Data Management (DMS) to perform online DDL operations. For more information, see [Change table schemas without locking tables](/help/en/dms/perform-lock-free-ddl-operations).
    
-   If the destination database is an ApsaraDB RDS for MySQL instance (excluding versions 5.7 and 8.0), DTS creates a data synchronization account named **dtssyncwriter** in the destination database. This account has write permissions and is used only by DTS.
    
-   A two-way synchronization instance includes a forward task and a reverse task. When you configure or reset a two-way synchronization instance, if the destination object of one task is the object to be synchronized by the other task:
    
    -   Only one task can synchronize full and incremental data. The other task can only synchronize incremental data.
        
    -   The source data of the current task can only be synchronized to the destination of the current task. The synchronized data will not be used as the source data for the other task.
        
    

## Billing

**Synchronization type**

**Task configuration fee**

Schema synchronization and full data synchronization

Free of charge.

Incremental data synchronization

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Supported synchronization topologies

DTS supports two-way synchronization only between two MySQL databases. Two-way synchronization among multiple MySQL databases is not supported.

![Two-way data synchronization architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7920359951/p41047.png)

## Supported data sources

Two-way data synchronization between MySQL databases supports the following data sources. This topic uses ApsaraDB RDS for MySQL instances as an example to describe the configuration procedure, which is similar for other data sources.

**Source Database**

**Destination Database**

-   ApsaraDB RDS for MySQL instance
    
-   Self-managed database on an ECS instance
    
-   Self-managed database connected over a leased line, VPN Gateway, or Smart Access Gateway
    
-   Self-managed database connected over Database Gateway
    
-   Self-managed database connected over Cloud Enterprise Network (CEN)
    

-   ApsaraDB RDS for MySQL instance
    
-   Self-managed database on an ECS instance
    
-   Self-managed database connected over a leased line, VPN Gateway, or Smart Access Gateway
    
-   Self-managed database connected over Database Gateway
    
-   Self-managed database connected over Cloud Enterprise Network (CEN)
    

## Supported SQL operations for synchronization

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
    

**Important**

DDL operations can be synchronized only in the forward direction from the source database to the destination database. DDL operations cannot be synchronized from the destination database to the source database because DDL operations are ignored in the reverse direction.

## Supported conflict detection

To ensure data consistency, ensure that records with the same primary key, business primary key, or unique key are updated on only one node. If records are updated on both nodes concurrently, DTS handles the conflict based on the resolution policy that you configure for the data synchronization task.

DTS uses conflict detection and resolution to maximize the stability of two-way synchronization instances. DTS can detect the following types of conflicts:

-   Uniqueness conflicts caused by INSERT statements
    
    A uniqueness constraint is violated when an INSERT statement is synchronized. For example, if records with the same primary key value are inserted into both nodes concurrently, the INSERT statement fails on the peer node because a record with the same primary key value already exists.
    
-   Mismatched records for UPDATE statements
    
    -   If the record to be updated by an UPDATE statement does not exist in the destination instance, DTS automatically converts the statement to an INSERT statement. This may cause a uniqueness conflict for a unique key.
        
    -   The record to be updated by an UPDATE statement has a primary key or unique key conflict.
        
-   The record to be deleted does not exist
    
    The record to be deleted by a DELETE statement does not exist in the destination instance. If this type of conflict occurs, DTS automatically ignores the DELETE operation, regardless of the configured conflict resolution policy.
    

**Important**

-   Due to factors such as different system times between the two databases and synchronization latency, the DTS conflict detection mechanism cannot guarantee the complete prevention of data conflicts. When you use two-way synchronization, you must modify your application logic to ensure that records with the same primary key, business primary key, or unique key are updated on only one node.
    
-   DTS provides resolution policies for the preceding data synchronization conflicts. You can select a policy when you configure two-way synchronization.
    

## Feature limitations

-   Incompatible with triggers
    
    If the synchronization object is an entire database that contains triggers that update the content of synchronized tables, data inconsistency may occur. For example, a database contains two tables: Table A and Table B. Table A has a trigger that inserts a row of data into Table B after a row of data is inserted into Table A. In this case, if an INSERT operation is performed on Table A in the source instance during synchronization, the data in Table B becomes inconsistent between the source and destination instances.
    
    In such cases, you must delete the corresponding trigger in the destination instance. The data of Table B is synchronized from the source instance. For more information, see [How do I configure a synchronization or migration task when the source database contains triggers?](/help/en/dts/use-cases/configure-a-data-synchronization-task-for-a-source-database-that-contains-a-trigger#multiTask2397).
    
-   RENAME TABLE limitations
    
    The RENAME TABLE operation may cause data inconsistency. For example, if the synchronization object is a single table and you rename the table in the source instance during synchronization, the data of the table is not synchronized to the destination database. To prevent this issue, you can select the entire database to which the table belongs as the synchronization object.
    
-   DDL synchronization direction limitations
    
    To ensure the stability of the two-way synchronization link, DDL updates can be synchronized in only one direction. This means that if DDL synchronization is configured for one direction, DDL synchronization is not supported in the reverse direction. Only DML synchronization is performed in the reverse direction.
    

## Procedure

1.  Purchase a two-way data synchronization instance. For more information, see [Purchase a data synchronization task](/help/en/dts/getting-started/purchase-a-dts-instance#section-39h-fto-gdl).
    
    **Important**
    
    When you purchase the instance, set both the source and destination instance types to **MySQL** and the synchronization topology to **Two-way Synchronization**.
    
2.  Log on to the [Data Transmission Service console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    If you are redirected to the Data Management (DMS) console, you can click the ![jiqiren](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5849525271/p531331.png) icon in the lower-right corner and then click the ![返回旧版](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0318246761/p531334.png) icon to return to the previous version of the DTS console.
    
3.  In the navigation pane on the left, click **Data Synchronization**.
    
4.  At the top of the **Synchronization Tasks** page, select the region where the destination instance resides.
    
5.  Find the purchased data synchronization instance and click **Configure Synchronization Channel** for the first synchronization task.
    
    **Important**
    
    A two-way data synchronization instance consists of two synchronization tasks that must be configured separately.
    
    ![Two-way synchronization task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7920359951/p41151.png)
    
6.  Configure the source and destination instances for the synchronization channel.![Configure source and destination instances for RDS two-way synchronization](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7920359951/p41052.png)
    
    **Category**
    
    **Configuration**
    
    **Description**
    
    N/A
    
    Synchronization Task Name
    
    DTS automatically generates a name for the synchronization task. Specify a descriptive name for easy identification. The name does not need to be unique.
    
    Source Instance Information
    
    Instance Type
    
    Select **RDS Instance**.
    
    Instance Region
    
    The region of the source instance that you selected when you purchased the data synchronization instance. This parameter cannot be changed.
    
    Instance ID
    
    Select the ID of the RDS instance that you want to use as the data synchronization source.
    
    Database Account
    
    Enter the database account of the source RDS instance.
    
    **Important**
    
    If the database type of the source RDS instance is **MySQL 5.5** or **MySQL 5.6**, the **Database Account** and **Database Password** configuration items are not available.
    
    Database Password
    
    Enter the password that corresponds to the database account.
    
    Encryption
    
    Select **Non-encrypted** or **SSL-encrypted** as needed. If you select **SSL-encrypted**, you must enable SSL encryption for the RDS instance in advance. For more information, see [Configure SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Important**
    
    Currently, the **Encryption** can be set only in the Chinese mainland and China (Hong Kong) regions.
    
    Destination Instance Information
    
    Instance Type
    
    Select **RDS Instance**.
    
    Instance Region
    
    The region of the destination instance that you selected when you purchased the data synchronization instance. This parameter cannot be changed.
    
    Instance ID
    
    Select the ID of the RDS instance that you want to use as the data synchronization destination.
    
    Database Account
    
    Enter the database account of the destination RDS instance.
    
    **Important**
    
    If the database type of the destination RDS instance is **MySQL 5.5** or **MySQL 5.6**, the **Database Account** and **Database Password** configuration items are not available.
    
    Database Password
    
    Enter the password that corresponds to the database account.
    
    Encryption
    
    Select **Non-encrypted** or **SSL-encrypted** as needed. If you select **SSL-encrypted**, you must enable SSL encryption for the RDS instance in advance. For more information, see [Configure SSL encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Important**
    
    Currently, the **Encryption** can be set only in the Chinese mainland and China (Hong Kong) regions.
    
7.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    If the source or destination database is an Alibaba Cloud database instance (such as ApsaraDB RDS for MySQL or ApsaraDB for MongoDB), DTS automatically adds the CIDR blocks of the DTS servers in the corresponding region to the whitelist of the Alibaba Cloud database instance. If the source or destination database is a self-managed database that is hosted on an ECS instance, DTS automatically adds the CIDR blocks of the DTS servers in the corresponding region to the security rules of the ECS instance. You must also ensure that the self-managed database allows access from the ECS instance. If the database is deployed in a cluster on multiple ECS instances, you must manually add the CIDR blocks of the DTS servers in the corresponding region to the security rules of each ECS instance. If the source or destination database is a self-managed database in an on-premises data center or a database from another cloud provider, you must manually add the CIDR blocks of the DTS servers in the corresponding region to allow access from the DTS servers. For the CIDR blocks of DTS servers, see [CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
    **Warning**
    
    If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to synchronize data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhancing the security of your username and password, limiting the ports that are exposed, authenticating API calls, regularly checking the whitelist or ECS security group rules and forbidding unauthorized CIDR blocks, or connecting the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
8.  Configure the synchronization policy and objects.![Configure synchronization objects and policies for RDS two-way synchronization](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3010931261/p41053.png)
    
    **Category**
    
    **Configuration**
    
    **Description**
    
    Set the synchronization policy
    
    Exclude DDL Statements
    
    -   Select **Yes** to not synchronize DDL operations.
        
    -   Select **No** to synchronize DDL operations.
        
        **Important**
        
        DDL syntax synchronization direction limitations. To ensure the stability of the two-way synchronization link, DDL synchronization is supported only in the forward direction, not in the reverse direction.
        
    
    DML Statements for Synchronization
    
    Select the DML types to be synchronized. By default, **Insert**, **Update**, and **Delete** are selected. You can adjust the selection as needed.
    
    Conflict Resolution Policy
    
    Select a resolution policy for synchronization conflicts. The default value is **TaskFailed**. You can select a suitable policy as needed.
    
    -   **TaskFailed** (If a conflict occurs, the task reports an error and exits)
        
        This is the default conflict resolution policy. When a data synchronization task encounters one of the preceding conflict types, the task reports an error and exits. The task enters the Failed state and requires user intervention.
        
    -   **Ignore** (If a conflict occurs, use the conflicting record in the destination instance)
        
        When a data synchronization task encounters one of the preceding conflict types, it skips the current synchronization statement and continues to the next. The conflicting record in the destination database is used.
        
    -   **Overwrite** (If a conflict occurs, overwrite the conflicting record in the destination instance)
        
        When a data synchronization task encounters one of the preceding conflict types, it overwrites the conflicting record in the destination database.
        
    
    Select the objects to be synchronized
    
    N/A
    
    In the **Available** box, click the objects that you want to synchronize (at the database or table level), and then click the ![向右小箭头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to move them to the **Selected** box.
    
    **Important**
    
    -   If you select an entire database as the synchronization object, all schema changes to the objects in that database are synchronized to the destination database.
        
    -   By default, the names of the synchronization objects remain unchanged. To change the name of a synchronization object in the destination database, use the object name mapping feature. For more information, see [Map the name of a synchronization object to a new name in the destination instance](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
        
    
    Rename Databases and Tables
    
    N/A
    
    You can use the object name mapping feature to rename the objects that are synchronized to the destination instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Source table DMS\_ ONLINE\_ Do you want to copy the temporary table to the target database during DDL
    
    N/A
    
    If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) to perform online DDL operations on the source database, you can specify whether to synchronize temporary tables generated by online DDL operations.
    
    -   **Yes**: DTS synchronizes the data of temporary tables generated by online DDL operations.
        
        **Note**
        
        If online DDL operations generate a large amount of data, the data synchronization task may be delayed.
        
    -   **No**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL data of the source database is synchronized.
        
        **Note**
        
        If you select No, the tables in the destination database may be locked.
        
    
    Retry Time for Failed Connection
    
    N/A
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 720 minutes (12 hours). You can specify the retry time based on your needs. If DTS reconnects to the source and destination databases within the specified time, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
    
    **Note**
    
    When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time based on your business needs. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
    
9.  After you complete the preceding configurations, click **Next** in the lower-right corner of the page.
    
10.  Configure advanced settings for initial synchronization.![Advanced settings for data synchronization](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8030359951/p41055.png)
     
     In this step, the schema and data of the synchronization objects in the source instance are initialized in the destination instance. This serves as the baseline data for subsequent incremental data synchronization. The initial synchronization includes **Initial Schema Synchronization** and **Initial Full Data Synchronization**. By default, **Initial Schema Synchronization** and **Initial Full Data Synchronization** are selected.
     
     **Important**
     
     Tables that are also synchronization objects in the reverse direction are not initialized.
     
11.  After you complete the preceding configurations, click **Precheck** in the lower-right corner of the page.
     
     **Important**
     
     -   Before the data synchronization task starts, a precheck is performed. The task can start only after all check items pass.
         
     -   If the precheck fails, click the ![Prompt](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to the failed check item to view the details.
         
         -   You can fix the issue based on the cause and run the precheck again.
             
         -   If you want to ignore an alert, click **Confirm shielding** and then click **Ignore the alarm and recheck** to skip the alert item and run the precheck again.
             
     
12.  When the **Precheck** dialog box shows **The precheck is passed**, close the **Precheck** dialog box to start the synchronization task.
     
13.  Wait for the synchronization task to initialize. When the task status changes to **Synchronizing**, the initialization is complete.
     
     You can view the data synchronization status on the **Synchronization Tasks** page.
     
14.  Find the second synchronization task and click **Configure Task**. Repeat Step 5 to Step 12 to configure the task.![Configure reverse data synchronization](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7912930761/p41152.png)
     
15.  After the second synchronization task is configured, wait until the status of both synchronization tasks changes to **Synchronizing**. The configuration of two-way data synchronization is complete.![Two-way data synchronization status](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3464738161/p41154.png)
