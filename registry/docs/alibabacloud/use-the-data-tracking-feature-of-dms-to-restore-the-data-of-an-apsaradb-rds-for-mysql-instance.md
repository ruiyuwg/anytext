When you change data of your ApsaraDB RDS for MySQL instance, data exceptions may occur due to unexpected operations such as unexpected updates, deletions, or writes. If an exception occurs, you can use the data tracking feature of Data Management (DMS) to identify the change records in the specified time range within the binary log retention period and generate a rollback script to quickly restore the data to the status before the change. The data tracking feature is more efficient and easier to use than the [full data restoration](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#concept-vrh-qp4-ydb) and [restoration for individual databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb) features. The data tracking feature significantly increases data restoration efficiency during routine O&M.

**Note**

For more information about data restoration methods, see [Overview of data restoration methods](/help/en/doc-detail/157519.html#concept-2445988).

## Differences between the data tracking feature and alternative restoration methods

**Restoration method**

**Restoration principle**

**Billing rule**

**Restoration speed**

**Restorable time range**

**Data tracking**

The data tracking feature is used to identify all updates that are made over the specified time range, generate statements that are used to roll the updates back, and aggregate the generated statements into a script. Then, submit a [data change](/help/en/dms/change-regular-data) ticket to run the script in the RDS instance.

-   If the control mode of an RDS instance is Flexible Management, no fees are generated.
    
-   If the control mode of an RDS instance is **Stable Change or Secure Collaboration**, [fees are generated](/help/en/dms/product-overview/pricing#task-2114651).
    

**Fast**

The restorable time range varies based on the control mode and the binary log retention period.

-   If the control mode of an RDS instance is Flexible Management, you can track DML operations that are performed within the previous 30 minutes but you cannot export rollback or rebuild scripts.
    
-   If the control mode of an RDS instance is Stable Change or Secure Collaboration, the restorable time range varies based on the following factors:
    
    -   If the log backup feature is disabled, the restorable time range varies based on the [binary log retention period](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance). The restorable time range spans up to 168 hours.
        
    -   If the log backup feature is enabled, the restorable time range varies based on the [log backup retention period](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance). The restorable time range spans up to 730 days.
        

[Restoration for individual databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb)

The standard and fast restoration features for individual databases and tables are supported. You can restore the data of specific individual databases and tables to a new RDS instance or an existing RDS instance. If you restore the data to an existing RDS instance, a primary/secondary switchover is triggered.

-   If you restore the data to a new RDS instance, you are charged for the new instance. For more information about the price, visit the ApsaraDB RDS buy page.
    
-   You are [charged for your backup storage](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance) that exceeds the free quota.
    

Fast restoration: Fast

Standard restoration: Low

The restorable time range varies based on the [log backup retention period](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance) and the point in time at which the restoration feature for individual databases and tables is enabled. The log backup retention period spans up to 730 days.

[Restore full data](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#concept-vrh-qp4-ydb)

Restore all data of the original RDS instance to a new RDS instance, verify the data on the new RDS instance, and then migrate the data from the new RDS instance back to the original RDS instance, an existing RDS instance, or an on-premises database instance.

-   You are charged for the new RDS instance. For more information about the price, visit the ApsaraDB RDS buy page.
    
-   You are [charged for your backup storage](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance) that exceeds the free quota.
    
-   You are [charged for the outbound traffic](/help/en/dts/product-overview/billing-overview) that is consumed to migrate the data of the RDS instance over the Internet.
    

Slow

The restorable time range varies based on the [log backup retention period and the data backup retention period](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance). The restorable time range spans up to 730 days.

## Prerequisites

-   A database of MySQL 5.6 or later is used.
    
-   The binary logging feature is enabled for the database.
    
-   You have logged on to the database in DMS.
    
    **Note**
    
    If the database instance to which the database belongs is managed in Flexible Management or Stable Change mode, you must log on to the database. If the database instance to which the database belongs is managed in Security Collaboration mode, you do not need to log on to the database.
    

## **Usage notes**

-   For a database instance managed in Flexible Management mode, you can track DML operations that are performed within the previous 30 minutes but you cannot export rollback or rebuild scripts.
    
-   For a database instance managed in Stable Change or Security Collaboration mode, you can track data operations that are performed within the retention period of binary logs and export rollback or rebuild scripts.
    
-   The data operations that you can track are limited by the retention period of binary logs in a database. If data operations are performed beyond the retention period of binary logs, DMS cannot retrieve data for such operations.
    
-   If the binary logging feature is disabled for a database or you have not logged on to the database, DMS cannot obtain the binary logs of the database.
    
-   The data tracking feature allows you to track only DML operations. You cannot track DDL operations by using this feature.
    

## Procedure

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  1.  In the top navigation bar, click **Database Development** > **Data Tracking** > **Data Tracking Ticket**.
        
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner of the console and choose **All Features** > **Database Development** > **Data Tracking** > **Data Tracking Ticket**.
    
3.  In the upper-right corner of the Data Tracking Ticket page, click **Data Tracking**.
    
4.  On the **Data Tracking Tickets** page, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Task Name**
    
    Enter a name that facilitates future searches and helps approvers understand the purpose of the ticket.
    
    **Database Name**
    
    Select a database in a specific database instance. You must have the permissions to manage the database in DMS. You can enter the prefix of a database name in the field and select the database from the matched results.
    
    **Table Name**
    
    Select one or more tables for which you want to track data operations.
    
    **Track Type**
    
    Select one or more types of operations that you want to track.
    
    -   **Insert**: `INSERT` statements are generated to roll back INSERT operations.
        
    -   **Update**: `UPDATE` statements are generated to roll back UPDATE operations.
        
    -   **Delete**: `DELETE` statements are generated to roll back DELETE operations.
        
    
    **Time Range**
    
    Specify a time range in which you want to track data operations.
    
    -   If the database instance to which the database belongs is managed in Flexible Management mode, you can track only data operations that are performed within the previous 30 minutes.
        
    -   If the database instance to which the database belongs is managed in Stable Change or Security Collaboration mode, you can track data operations that are performed within the retention period of binary logs. However, the time range is limited to a maximum of 48 hours in a single ticket. If you want to track data operations in a time range that exceeds 48 hours, split the time range and submit multiple tickets.
        
    
    **Change Stakeholder**
    
    Select the stakeholders involved in the ticket. Only the selected stakeholders and ticket approvers can view ticket details.
    
5.  Click **Submit**. DMS automatically obtains the binary logs of the database.
    
    After the binary logs are obtained, the ticket enters the Approval step.
    
6.  Wait until the ticket is approved.
    
    **Note**
    
    By default, a data tracking ticket for a database is approved by the database administrator (DBA) of the database. For more information about the approval rules for data tracking tickets, see [Data tracking](/help/en/dms/data-tracking-1).
    
7.  After the ticket is approved, wait for DMS to download and parse the binary logs.
    
8.  After the binary logs are downloaded and parsed, you can specify filter conditions such as **Track Type**, **Table Name**, and **Column Name** to filter data changes that you want to roll back. Select data records and click **Export Rollback Script**. A rollback script is downloaded to your computer.
    
    **Note**
    
    -   You can find a data record and click **View Details** to view the details of the data record and copy rollback statements.
        
    -   You can track the following types of operations: **INSERT**, **UPDATE**, and **DELETE**.
        
    

## **What to do next: Execute rollback SQL statements**

After the rollback script is exported, you can estimate the number of data rows that may be affected by rollback statements and select one of the following methods to execute rollback statements:

-   If a small number of data rows are affected, you can [execute rollback statements in the SQL Console](/help/en/dms/manage-a-database-on-the-sqlconsole-tab).
    
-   If a large number of data rows are affected, you can submit a normal data change ticket and upload the exported rollback script to the ticket as an attachment. This way, the SQL statements can be applied to the selected database. For more information, see [Normal Data Modify](/help/en/dms/change-regular-data#multiTask2309).
    

## **Related operations**

You can call the following API operations to track data operations:

-   [CreateDataTrackOrder](/help/en/dms/developer-reference/api-dms-enterprise-2018-11-01-createdatatrackorder)
    
-   [GetDataTrackJobDegree](/help/en/dms/developer-reference/api-dms-enterprise-2018-11-01-getdatatrackjobdegree)
    
-   [GetDataTrackJobTableMeta](/help/en/dms/developer-reference/api-dms-enterprise-2018-11-01-getdatatrackjobtablemeta)
    
-   [GetDataTrackOrderDetail](/help/en/dms/developer-reference/api-dms-enterprise-2018-11-01-getdatatrackorderdetail)
    
-   [SearchDataTrackResult](/help/en/dms/developer-reference/api-dms-enterprise-2018-11-01-searchdatatrackresult)
    
-   [DownloadDataTrackResult](/help/en/dms/developer-reference/api-dms-enterprise-2018-11-01-downloaddatatrackresult)
    
-   [QueryDataTrackResultDownloadStatus](/help/en/dms/developer-reference/api-dms-enterprise-2018-11-01-querydatatrackresultdownloadstatus)
