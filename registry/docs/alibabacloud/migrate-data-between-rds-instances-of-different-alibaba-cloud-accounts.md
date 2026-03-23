This topic describes how to migrate data between RDS instances of different Alibaba Cloud accounts by using Data Transmission Service (DTS).

## Prerequisites

The available storage space of the destination instance is larger than the total size of the data in the source instance.

## Billing

Migration type

Task configuration fee

Internet traffic fee

Schema migration and full data migration

Free of charge.

Charged only when data is migrated from Alibaba Cloud over the Internet. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

Incremental data migration

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Permissions required for database accounts

Instance

Schema migration

Full data migration

Incremental data migration

Source RDS instance

The read and write permissions

The read and write permissions

The read and write permissions

Destination RDS instance

The read and write permissions

The read and write permissions

The read and write permissions

## Before you begin

Log on to the Resource Access Management (RAM) console by using the Alibaba Cloud account that owns the source instance (Account A). Specify the Alibaba Cloud account that owns the destination instance (Account B) as a trusted account. Then, authorize Account B to access the cloud resources of Account A by using DTS. For more information, see [Configure RAM authorization for cross-account data migration and synchronization](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#Untitled).

## Procedure

1.  Log on to the [DTS console](https://dts.console.alibabacloud.com/) by using the Alibaba Cloud account that owns the destination RDS instance.
2.  In the left-side navigation pane, click Data Migration.
3.  In the upper part of the Migration Tasks page, select the region in which the ApsaraDB RDS for MySQL instance resides.
4.  In the upper-right corner of the page, click Create Migration Task.
5.  In the Source Database section, set Instance Type to RDS Instance, and click RDS Instances of Other Apsara Stack Accounts next to the RDS Instance ID field. ![Cross-account configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4335236161/p207363.png)
6.  Configure the source and destination databases. ![Configure the source and destination databases](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4335236161/p207361.png)
    
    Parameter
    
    Description
    
    Task Name
    
    DTS automatically generates a task name. We recommend that you specify an informative name to identify the task. You do not need to specify a unique task name.
    
    Source Database
    
    -   Instance Type: Select RDS Instance.
        
        **Note** If you have selected RDS Instance as the instance type, you can skip this step.
        
    -   Instance Region: Select the region where the source RDS instance resides.
        
        **Note** You can select different regions for the source and destination RDS instances.
        
    -   Apsara Stack Tenant Account ID of RDS Instance: Enter the ID of the Alibaba Cloud account that owns the source instance.
        
        **Note** To obtain the ID of the Alibaba Cloud account that owns the source instance, you must log on to the [Account Management](https://account-console.alibabacloud.com/v2/#/basic-info/index) console by using this account. The account ID is displayed on the Security Settings page.
        
    -   Role Name: Enter the role name configured for the Alibaba Cloud account that owns the source instance. For more information, see [Configure RAM authorization for cross-account data migration and synchronization](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#Untitled).
    -   RDS Instance ID: Select the ID of the source RDS instance.
        
        **Note** If an alert message appears when you select an RDS instance ID, modify the parameter values as prompted. For more information, see [FAQ](#section-llh-0pc-won).
        
    -   Database Account: Enter the database account of the source RDS instance. For information about the permissions that are required for the account, see [Permissions required for database accounts](#section-lcj-kcb-mhb).
    -   Database Password: Enter the password of the database account.
    
    Destination Database
    
    -   Instance Type: Select RDS Instance.
        
        **Note** You can select different regions for the source and destination RDS instances.
        
    -   Instance Region: Select the region where the destination RDS instance resides.
    -   RDS instance ID: Select the ID of the destination RDS instance.
    -   Database Account: Enter the database account of the destination RDS instance. For information about the permissions that are required for the account, see [Permissions required for database accounts](#section-lcj-kcb-mhb).
    -   Database Password: Enter the password of the database account.
    -   Encryption: Select Non-encrypted or SSL-encrypted. In this example, select Non-encrypted.
        
        **Note** If you want to select SSL-encrypted, you must enable SSL encryption for the RDS instance before you configure the data migration task. For more information, see [Configure SSL encryption for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
        
    
7.  In the lower-right corner of the page, click Set Whitelist and Next.
    
    **Warning** If the CIDR blocks of DTS servers are automatically or manually added to the whitelist of the database or instance, or to the ECS security group rules, security risks may arise. Therefore, before you use DTS to migrate data, you must understand and acknowledge the potential risks and take preventive measures, including but not limited to the following measures: enhance the security of your username and password, limit the ports that are exposed, authenticate API calls, regularly check the whitelist or ECS security group rules and forbid unauthorized CIDR blocks, or connect the database to DTS by using Express Connect, VPN Gateway, or Smart Access Gateway.
    
8.  Select the objects to be migrated and the migration types. ![Select the objects to be migrated and the migration types](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1947370261/p56880.png)
    
    Parameter or setting
    
    Description
    
    Select the migration types
    
    -   To perform only full data migration, select Schema Migration and Full Data Migration.
    -   To ensure service continuity during data migration, select Schema Migration, Full Data Migration, and Incremental Data Migration.
    
    **Note** If Incremental Data Migration is not selected, do not write data to the source database during data migration. This ensures data consistency between the source and destination databases.
    
    Select the objects to be migrated
    
    Select one or more objects from the Available section and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p40698.png) icon to add the objects to the Selected section.
    
    **Note**
    
    -   You can select columns, tables, or databases as the objects to be migrated. If you select tables or columns as the objects to be migrated, DTS does not migrate other objects such as views, triggers, or stored procedures to the destination database.
    -   By default, after an object is migrated to the destination database, the name of the object remains unchanged. You can use the object name mapping feature to rename the objects that are migrated to the destination database. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    -   If you use the object name mapping feature to rename an object, other objects that are dependent on the object may fail to be migrated.
    
    Specify whether to rename objects
    
    You can use the object name mapping feature to rename the objects that are migrated to the destination instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Specify the retry time range for failed connections to the source or destination database
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the following 12 hours. You can specify the retry time range based on your business requirements. If DTS is reconnected to the source and destination databases within the specified time range, DTS resumes the data migration task. Otherwise, the data migration task fails.
    
    **Note** When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time based on your business requirements. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
    
    Specify whether to copy temporary tables to the destination database when DMS performs online DDL operations on the source table
    
    If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) to perform online DDL operations on the source database, you can specify whether to migrate temporary tables generated by online DDL operations.
    
    -   Yes: DTS migrates the data of temporary tables generated by online DDL operations.
        
        **Note** If online DDL operations generate a large amount of data, latency may occur for the data migration task.
        
    -   No: DTS does not migrate the data of temporary tables generated by online DDL operations. Only the original DDL data of the source database is migrated.
        
        **Note** If you select No, the tables in the destination database may be locked.
        
    
9.  Click Precheck.
    
    **Note**
    
    -   A precheck is performed before the migration task starts. The migration task only starts after the precheck succeeds.
    -   If the precheck fails, click the ![Note](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9684400951/p47390.png) icon next to each failed check item to view the related details. Fix the issues as instructed and run the precheck again.
    
10.  After the task passes the precheck, click Next.
11.  In the Confirm Settings dialog box, specify the Instance Class parameter and select the check box to agree to Data Transmission Service (Pay-As-You-Go) Service Terms.
12.  Click Buy and Start to start the data migration task.
     -   Full data migration
         
         Do not manually stop a full data migration task. If you manually stop a full data migration task, the data that is migrated to the ApsaraDB RDS for MySQL instance may be incomplete. You can wait until the data migration task automatically stops.
         
     -   Incremental data migration
         
         An incremental data migration task does not automatically stop. You must manually stop the task.
         
         **Note** We recommend that you manually stop an incremental data migration task at an appropriate point in time. For example, you can stop the task during off-peak hours or before you switch your workloads over to the ApsaraDB RDS for MySQL instance.
         
         1.  Wait until Incremental Data Migration and The data migration task is not delayed are displayed in the progress bar of the data migration task. Then, stop writing data to the source database for a few minutes. The latency of incremental data migration may be displayed in the progress bar.
         2.  Wait until the status of incremental data migration changes to The data migration task is not delayed again. Then, manually stop the migration task. ![The data migration task is not delayed](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5073333461/p47604.png)

## FAQ

If an alert message appears when you set the RDS Instance ID parameter for the source database, you can solve the issue as described in following table.

Alert message

Solution

![Alert message_Role does not exist](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7664306161/p207433.png)

Check whether the ID of the Alibaba Cloud account that owns the source instance and the role name configured for the account are valid.

**Note** To obtain the ID of the Alibaba Cloud account that owns the source instance, you must log on to the [Account Management](https://account-console.alibabacloud.com/v2/#/basic-info/index) console by using this account. The account ID is displayed on the Security Settings page.

![Alert message_No permissions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7664306161/p207434.png)

Make sure that you have performed the following steps: 1. Log on to the RAM console by using the Alibaba Cloud account that owns the source instance (Account A). 2. Specify the Alibaba Cloud account that owns the destination instance (Account B) as a trusted account. 3. Authorize Account B to access the cloud resources of Account A by using DTS. For more information, see [Configure RAM authorization for cross-account data migration and synchronization](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization#Untitled).
