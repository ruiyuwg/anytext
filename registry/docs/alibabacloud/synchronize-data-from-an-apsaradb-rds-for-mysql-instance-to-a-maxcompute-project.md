MaxCompute (formerly known as ODPS) is a fast and fully managed computing platform for large-scale data warehousing. MaxCompute can process exabytes of data. This topic describes how to synchronize data from an RDS MySQL instance to a MaxCompute project by using Data Transmission Service (DTS).

## Prerequisites

The following operations are performed:

-   [Activate MaxCompute and DataWorks](/help/en/maxcompute/getting-started/activate-maxcompute-and-dataworks)
    
-   [Create a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project)
    

## Limits

-   DTS uses read and write resources of the source and destination RDS instances during initial full data synchronization. This may increase the loads of the RDS instances. If the instance performance is unfavorable, the specification is low, or the data volume is large, database services may become unavailable. For example, DTS occupies a large amount of read and write resources in the following cases: a large number of slow SQL queries are performed on the source RDS instance, the tables have no primary keys, or a deadlock occurs in the destination RDS instance. Before data synchronization, evaluate the impact of data synchronization on the performance of the source and destination RDS instances. We recommend that you synchronize data during off-peak hours. For example, you can synchronize data when the CPU utilization of the source and destination RDS instances is less than 30%.
    
-   Only tables can be selected as the objects to be synchronized.
    
-   We recommend that you do not use a tool such as gh-ost or pt-online-schema-change to perform DDL operations on objects during data synchronization. Otherwise, data synchronization may fail.
    
-   MaxCompute does not support PRIMARY KEY constraints. If network errors occur, DTS may synchronize duplicate data records to MaxCompute.
    

## Billing

**Synchronization type**

**Task configuration fee**

Schema synchronization and full data synchronization

Free of charge.

Incremental data synchronization

Charged. For more information, see [Billing overview](/help/en/dts/product-overview/billing-overview#concept-261679).

## Supported source database types

You can use DTS to synchronize data from the following types of MySQL databases:

-   Self-managed database hosted on Elastic Compute Service (ECS)
    
-   Self-managed database connected over Express Connect, VPN Gateway, or Smart Access Gateway
    
-   Self-managed database connected over Database Gateway
    
-   ApsaraDB RDS for MySQL instance that is owned by the same Alibaba Cloud account as the MaxCompute project or a different Alibaba Cloud account from the MaxCompute project
    

In this example, an **ApsaraDB RDS for MySQL instance** is used to describe how to configure a data synchronization task. You can also follow the procedure to configure data synchronization tasks for other types of MySQL databases.

**Note**

If your source database is a self-managed MySQL database, you must deploy the network environment for the source database. For more information, see [Preparation overview](/help/en/dts/user-guide/preparation-overview#concept-2364477).

## SQL operations that can be synchronized

-   DDL operations: ALTER TABLE ADD COLUMN.
    
-   DML operations: INSERT, UPDATE, and DELETE
    

## Synchronization process

1.  Initial schema synchronization.
    
    DTS synchronizes the schemas of the required objects from the source database to MaxCompute. During initial schema synchronization, DTS adds the \_base suffix to the end of the source table name. For example, if the name of the source table is customer, the name of the table in MaxCompute is customer\_base.
    
2.  Initial full data synchronization.
    
    DTS synchronizes the historical data of the table from the source database to the destination table in MaxCompute. For example, the customer table in the source database is synchronized to the customer\_base table in MaxCompute. The data is the basis for subsequent incremental synchronization.
    
    **Note**
    
    The destination table that is suffixed with \_base is known as a full baseline table.
    
3.  Incremental data synchronization.
    
    DTS creates an incremental data table in MaxCompute. The name of the incremental data table is suffixed with \_log, such as customer\_log. Then, DTS synchronizes the incremental data that was generated in the source database to the incremental data table.
    
    **Note**
    
    For more information, see [Schema of an incremental data table](#section-5kn-hla-atd).
    

## Procedure

**Warning**

To ensure that the synchronization account can be authorized, we recommend that you perform the following steps by using your Alibaba Cloud account.

1.  Purchase a data synchronization instance. For more information, see [Purchase a DTS instance](/help/en/dts/getting-started/purchase-a-dts-instance#concept-26604-zh).
    
    **Note**
    
    On the buy page, set the Source Instance parameter to **MySQL**, set the Destination Instance parameter to **MaxCompute**, and then set the Synchronization Topology parameter to **One-way Synchronization**.
    
2.  Log on to the [DTS console](https://dts.console.alibabacloud.com/).
    
    **Note**
    
    If you are redirected to the Data Management (DMS) console, you can click the ![old](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2274020761/p529428.png) icon in the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3856567171/p805074.png) to go to the previous version of the DTS console.
    
3.  In the left-side navigation pane, click **Data Synchronization**.
    
4.  In the upper part of the **Synchronization Tasks** page, select the region in which the destination instance resides.
    
5.  Find the data synchronization instance and click **Configure Task** in the Actions column.
    
6.  Configure the source and destination instances.
    
    ![Configure the source and destination instances](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1130359951/p62745.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    Synchronization Task Name
    
    The task name that DTS generates. We recommend that you specify a descriptive name that makes it easy to identify. You do not need to use a unique task name.
    
    Source Instance Details
    
    Instance Type
    
    The instance type of the source instance. Select **RDS Instance**.
    
    Instance Region
    
    The source region that you selected on the buy page. You cannot change the value of this parameter.
    
    Instance ID
    
    The ID of the source ApsaraDB RDS for MySQL instance.
    
    Database Account
    
    The database account of the source ApsaraDB RDS for MySQL instance.
    
    **Note**
    
    If the database engine of the source ApsaraDB RDS for MySQL instance. is **MySQL 5.5** or **MySQL 5.6**, you do not need to configure the **Database Account** and **Database Password** parameters.
    
    Database Password
    
    The password of the database account.
    
    Encryption
    
    Specifies whether to encrypt the connection to the source instance. Select **Non-encrypted** or **SSL-encrypted** based on your business and security requirements. If you select **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS for MySQL instance before you configure the data synchronization task. For more information, see [Configure SSL encryption for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption).
    
    **Important**
    
    The **Encryption** parameter is available only within regions in the Chinese mainland and the China (Hong Kong) region.
    
    Destination Instance Details
    
    Instance Type
    
    The instance type of the destination instance. This parameter is set to **MaxCompute** and cannot be changed.
    
    Instance Region
    
    The destination region that you selected on the buy page. You cannot change the value of this parameter.
    
    Project
    
    The name of the MaxCompute project. To view the name of a project, log on to the DataWorks console and choose Compute Engines > MaxCompute in the left-side navigation pane. You can view the name of a project on the [Projects](https://workbench.data.aliyun.com/consolenew#/projectlist) page. ![MaxCompute projects](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6410529851/p55484.png)
    
7.  In the lower-right corner of the page, click **Set Whitelist and Next**.
    
    **Note**
    
    You do not need to modify the security settings for ApsaraDB instances (such as ApsaraDB RDS for MySQL and ApsaraDB for MongoDB instances) and self-managed databases hosted on ECS. DTS automatically adds the CIDR blocks of DTS servers to the IP whitelists of ApsaraDB instances or the security rules of ECS instances. For more information, see [Add the CIDR blocks of DTS servers](/help/en/dts/user-guide/add-the-cidr-blocks-of-dts-servers-to-the-security-settings-of-on-premises-databases#concept-1340353).
    
8.  In the lower-right corner of the page, click **Next**. In this step, the permissions on the MaxCompute project are granted to the synchronization account.
    
    ![Grant permissions to an account](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1130359951/p55487.png)
    
9.  Select the synchronization policy and the objects to be synchronized.
    
    ![Select objects to be synchronized](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7439236261/p275134.png)
    
    **Parameter or setting**
    
    **Description**
    
    Partition Definition of Incremental Data Table
    
    Select the partition names based on your business requirements. For more information about partitions, see [Partition](/help/en/maxcompute/product-overview/partition).
    
    Initialize Synchronization
    
    Initial synchronization includes initial schema synchronization and initial full data synchronization.
    
    Select both **Initial Schema Synchronization** and **Initial Full Data Synchronization**. In this case, DTS synchronizes the schemas and historical data of the required objects and then synchronizes incremental data.
    
    Processing Mode in Existed Target Table
    
    -   **Pre-check and Intercept**: checks whether the destination database contains tables that have the same names as tables in the source database. If the source and destination databases do not contain identical table names, the precheck is passed. Otherwise, an error is returned during precheck and the data synchronization task cannot be started.
        
        **Note**
        
        You can use the object name mapping feature to rename the tables that are synchronized to the destination database. You can use this feature if the source and destination databases contain identical table names and the tables in the destination database cannot be deleted or renamed. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
        
    -   **Ignore**: skips the precheck for identical table names in the source and destination databases.
        
        **Warning**
        
        If you select **Ignore**, data consistency is not ensured, and your business may be exposed to potential risks.
        
        -   During initial data synchronization, DTS does not synchronize the data records that have the same primary keys as the data records in the destination database. This occurs if the source and destination databases have the same schema. However, DTS synchronizes these data records during incremental data synchronization.
            
        -   If the source and destination databases have different schemas, initial data synchronization may fail. In this case, only some columns are synchronized or the data synchronization task fails.
            
        
    
    Select the objects to be synchronized
    
    Select one or more tables from the **Available** section and click the ![Rightwards arrow](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308252271/p40698.png) icon to move the tables to the **Selected** section.
    
    **Note**
    
    -   You can select tables from multiple databases as the objects to be synchronized.
        
    -   By default, after an object is synchronized to the destination database, the name of the object remains unchanged. You can use the object name mapping feature to rename the objects that are synchronized to the destination database. For more information, see [Rename an object to be synchronized](/help/en/dts/user-guide/rename-an-object-to-be-synchronized#concept-610481).
        
    
    Whether to enable the new naming rules for additional columns
    
    After DTS synchronizes data to MaxCompute, DTS adds additional columns to the destination table. If the names of additional columns are the same as the names of existing columns in the destination table, data synchronization fails. Select **Yes** or **No** to specify whether you want to enable new naming rules for additional columns.
    
    **Warning**
    
    Before you specify this parameter, check whether additional columns and existing columns in the destination table have name conflicts. For more information, see [Naming rules for additional columns](/help/en/dts/user-guide/modify-the-naming-rules-for-additional-columns#table-zyo-yb6-p5y).
    
    Rename Databases and Tables
    
    You can use the object name mapping feature to rename the objects that are synchronized to the destination instance. For more information, see [Object name mapping](/help/en/dts/user-guide/object-name-mapping#concept-610481).
    
    Replicate Temporary Tables When DMS Performs DDL Operations
    
    If you use [DMS](/help/en/dms/product-overview/what-is-dms#task-1919582) to perform online DDL operations on the source database, you can specify whether to synchronize temporary tables generated by online DDL operations.
    
    -   **Yes**: DTS synchronizes the data of temporary tables generated by online DDL operations.
        
        **Note**
        
        If online DDL operations generate a large amount of data, the data synchronization task may be delayed.
        
    -   **No**: DTS does not synchronize the data of temporary tables generated by online DDL operations. Only the original DDL data of the source database is synchronized.
        
        **Note**
        
        If you select No, the tables in the destination database may be locked.
        
    
    Retry Time for Failed Connections
    
    By default, if DTS fails to connect to the source or destination database, DTS retries within the next 720 minutes (12 hours). You can specify the retry time based on your needs. If DTS reconnects to the source and destination databases within the specified time, DTS resumes the data synchronization task. Otherwise, the data synchronization task fails.
    
    **Note**
    
    When DTS retries a connection, you are charged for the DTS instance. We recommend that you specify the retry time based on your business needs. You can also release the DTS instance at your earliest opportunity after the source and destination instances are released.
    
10.  In the lower-right corner of the page, click **Precheck**.
     
     **Note**
     
     -   Before you can start the data synchronization task, DTS performs a precheck. You can start the data synchronization task only after the task passes the precheck.
         
     -   If the task fails to pass the precheck, you can click the ![提示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3457359951/p47468.png) icon next to each failed item to view details.
         
         -   After you troubleshoot the issues based on the details, initiate a new precheck.
             
         -   If you do not need to troubleshoot the issues, **ignore the failed items** and **initiate a new precheck**.
             
     
11.  Close the **Precheck** dialog box after the following message is displayed: **Precheck Passed**. Then, the data synchronization task starts.
     
12.  Wait until initial synchronization is complete and the data synchronization task enters the **Synchronizing** state.
     
     You can view the status of the data synchronization task on the **Synchronization Tasks** page. ![View the status of a data synchronization task](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5464738161/p41059.png)
     

## Schema of an incremental data table

**Note**

You must run the `set odps.sql.allow.fullscan=true;` command in MaxCompute to allow full table scan for the MaxCompute project.

DTS synchronizes incremental data that is generated in the source MySQL database to the incremental data table in MaxCompute. The incremental data table stores incremental data and specific metadata. The following figure shows the schema of an incremental data table.

![Schema of an incremental data table](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130359951/p55989.png)

**Note**

In the example, the `modifytime_year`, `modifytime_month`, `modifytime_day`, `modifytime_hour`, and `modifytime_minute` fields form the partition key. These fields are specified in the [Select the synchronization policy and the objects to be synchronized](#step-pze-gpg-5gx) step.

Schema of an incremental data table

**Field**

**Description**

record\_id

The unique ID of the incremental log entry.

**Note**

-   The ID auto-increments for each new log entry.
    
-   If an UPDATE operation is performed, DTS generates two incremental log entries to record the pre-update and post-update values. The two incremental log entries have the same record ID.
    

operation\_flag

The type of the operation. Valid values:

-   I: an INSERT operation
    
-   D: a DELETE operation
    
-   U: an UPDATE operation
    

utc\_timestamp

The operation timestamp, in UTC. It is also the timestamp of the binary log file.

before\_flag

Indicates whether the column values are pre-update values. Valid values: Y and N.

after\_flag

Indicates whether the column values are post-update values. Valid values: Y and N.

## Additional information about the before\_flag and after\_flag fields

The **before\_flag** and **after\_flag** fields of an incremental log entry are defined depending on the operation type.

-   INSERT
    
    For an INSERT operation, the column values are the newly inserted record values (post-update values). The value of the before\_flag field is N and the value of the after\_flag field is Y.
    
    ![Example of an INSERT operation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130359951/p55992.png)
    
-   UPDATE
    
    DTS generates two incremental log entries for an UPDATE operation. The two incremental log entries have the same values for the record\_id, operation\_flag, and utc\_timestamp fields.
    
    The first log entry records the pre-update values, so the value of the before\_flag field is Y and the value of the after\_flag field is N. The second log entry records the post-update values, so the value of the before\_flag field is N and the value of the after\_flag field is Y.
    
    ![Example of an UPDATE operation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130359951/p55993.png)
    
-   DELETE
    
    For a DELETE operation, the column values are the deleted record values (pre-update values). The value of the before\_flag field is Y and the value of the after\_flag field is N.
    
    ![Example of a DELETE operation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130359951/p55994.png)
    

## Merge a full baseline table and an incremental data table

After a data synchronization task is started, DTS creates a full baseline table and an incremental data table in MaxCompute. You can use SQL statements to merge the two tables. This allows you to obtain the full data at a specific time point.

This section describes how to merge data for a table named customer. The following figure shows the schema of the customer table.

![Schema of the customer table](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130359951/p56270.png)

1.  Create a table in MaxCompute based on the schema of the source table. The table is used to store the merged data.
    
    For example, you can obtain full data of the customer table at the `1565944878` time point. Run the following SQL statements to create the required table:
    
    ```
    CREATE TABLE `customer_1565944878` (
        `id` bigint NULL,
        `register_time` datetime NULL,
        `address` string);
    ```
    
    **Note**
    
    -   You can use the ad-hoc query feature to run SQL statements. For more information, see [Use the ad-hoc query feature to execute SQL statements (optional)](/help/en/maxcompute/use-the-ad-hoc-query-feature-to-execute-sql-statements).
        
    -   For more information about the data types that are supported by MaxCompute, see [Data type editions](/help/en/maxcompute/user-guide/data-type-editions).
        
    
2.  Run the following SQL statements in MaxCompute to merge the full baseline table and the incremental data table and obtain full data at a specific time point:
    
    ```
    set odps.sql.allow.fullscan=true;
    insert overwrite table <result_storage_table>
    select <col1>,
           <col2>,
           <colN>
      from(
    select row_number() over(partition by t.<primary_key_column>
     order by record_id desc, after_flag desc) as row_number, record_id, operation_flag, after_flag, <col1>, <col2>, <colN>
      from(
    select incr.record_id, incr.operation_flag, incr.after_flag, incr.<col1>, incr.<col2>,incr.<colN>
      from <table_log> incr
     where utc_timestamp< <timestamp>
     union all
    select 0 as record_id, 'I' as operation_flag, 'Y' as after_flag, base.<col1>, base.<col2>,base.<colN>
      from <table_base> base) t) gt
    where row_number=1 
      and after_flag='Y'
    ```
    
    **Note**
    
    -   <result\_storage\_table>: the name of the table that stores the merged data.
        
    -   <col1>/<col2>/<colN>: the names of the columns in the table to be merged.
        
    -   <primary\_key\_column>: the name of the primary key column in the table to be merged.
        
    -   <table\_log>: the name of the incremental data table.
        
    -   <table\_base>: the name of the full baseline table.
        
    -   <timestamp>: the timestamp that is generated when full data is obtained.
        
    
    Run the following SQL statements to obtain full data of the customer table at the `1565944878` time point:
    
    ```
    set odps.sql.allow.fullscan=true;
    insert overwrite table customer_1565944878
    select id,
           register_time,
           address
      from(
    select row_number() over(partition by t.id
     order by record_id desc, after_flag desc) as row_number, record_id, operation_flag, after_flag, id, register_time, address
      from(
    select incr.record_id, incr.operation_flag, incr.after_flag, incr.id, incr.register_time, incr.address
      from customer_log incr
     where utc_timestamp< 1565944878
     union all
    select 0 as record_id, 'I' as operation_flag, 'Y' as after_flag, base.id, base.register_time, base.address
      from customer_base base) t) gt
     where gt.row_number= 1
       and gt.after_flag= 'Y';
    ```
    
3.  Query the merged data from the customer\_1565944878 table.
    
    ![Query the merged data](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130359951/p56256.png)
