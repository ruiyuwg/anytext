The restoration feature for individual databases and tables is supported for ApsaraDB RDS for PostgreSQL instances. This feature allows you to restore specific databases to the original or an existing ApsaraDB RDS for PostgreSQL instance by backup set or point in time. This feature can be used in scenarios when accidental operations are performed and data needs to be quickly restored or when historical data needs to be analyzed.

## **Feature description**

**Item**

**Description**

**Restoration range**

Specific databases on an RDS instance.

**Note**

The restoration range varies based on data backup retention period, log backup retention period, and the point in time at which you enable the fast restoration feature for individual databases and tables of your RDS instance. The maximum retention period is 730 days for both data backup files and log backup files. For more information, see [Back up an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#section-f33-lk4-ydb). You can call the [DescribeLocalAvailableRecoveryTime](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describelocalavailablerecoverytime-postgresql) operation to query the time range within which an RDS instance can be restored.

**Restoration speed**

The restoration speed varies based on the data volume of the databases, which is approximately 20 Mbit/s.

**Restoration method**

You can restore data from backup files or to a specific point in time.

**Note**

-   If the log backup feature is enabled for your RDS instance, you can restore data to a point in time within the log backup retention period. For more information, see [Back up an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#section-f33-lk4-ydb).
    
-   If the log backup feature is disabled for your RDS instance, you can restore data to only a point in time at which the data is backed up. For more information, see [Back up an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#section-f33-lk4-ydb).
    
-   For more information about data restoration methods, see [Overview of data restoration methods](/help/en/doc-detail/444453.html).
    

## Prerequisites

-   Your RDS instance meets the following requirements:
    
    -   The RDS instance runs a major engine version ranging from PostgreSQL 10 to PostgreSQL 17.
        
    -   The RDS instance runs RDS Basic Edition, RDS High-availability Edition, or RDS Cluster Edition.
        
    -   The RDS instance uses ESSDs or Premium ESSDs.
        
    -   The RDS instance is a pay-as-you-go or subscription instance. Serverless instances are not supported.
        

**Note**

You can go to the **Basic Information** page of your RDS instance to obtain the preceding information.

-   If your RDS instance is created before October 10, 2022 and uses an original architecture, you must perform [SLR authorization](/help/en/rds/developer-reference/service-linked-roles), update the minor engine version to the latest version, and then restore individual databases and tables of the RDS instance. For more information, see [\[Notice\] SLR authorization is required to create an ApsaraDB RDS for PostgreSQL instance from October 10, 2022](/help/en/rds/apsaradb-rds-for-postgresql/slr-authorization-is-required-to-create-an-apsaradb-rds-for-postgresql-instance-from-october-10-2022) and [Update the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance).
    
-   The restoration feature for individual databases and tables is enabled. For more information, see [Enable the restoration feature for individual databases and tables](#aac4beb0d83mp).
    

## Billing rules

The restoration feature for individual databases and tables is in public preview. You can use the feature free of charge.

## Limits

-   You cannot use the restoration feature for individual databases and tables to restore individual databases or tables of an RDS instance to a new RDS instance.
    
-   You can use the fast restoration feature for individual databases and tables to restore databases not tables.
    
-   You cannot use the restoration feature for individual databases and tables to restore views.
    
-   You cannot restore a table that is larger than 100 GB.
    
-   The databases whose names start with `postgres`, `rdsadmin`, and `template` cannot be restored.
    

## Enable the restoration feature for individual databases and tables

To use the restoration feature for individual databases and tables to restore data, you must perform the following steps to enable the feature before you restore data. For more information, see [Procedure](#af8f8d30d88kv). Enabling the feature does not affect your workloads.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Backup and Restoration**.
    
3.  On the page that appears, click the **Backup Strategy** tab.
    
4.  Click **Edit** to the right of **Data Backup Settings**. In the dialog box that appears, turn on **Restore Individual Database/Table**.
    
5.  Click **Save**.
    

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Backup and Restoration**. On the page that appears, click **Restore Individual Database/Table**.
    
    **Note**
    
    If the **Restore Individual Database/Table** button is not displayed in the ApsaraDB RDS console, check whether the requirements that are described in **Prerequisites** are met.
    
3.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Restore To**
    
    The destination RDS instance to which you want to restore data.
    
    -   Original RDS instance
        
    -   Another RDS instance that resides in the same region and have the same major engine version
        
    
    **Restore Speed**
    
    The value of this parameter is fixed as Standard.
    
    **Restore Method**
    
    -   **By Backup Set**: If you select this option, you can restore the data from a backup set.
        
    -   **By Time**: The **By Time** option is displayed only if the log backup feature is enabled for the RDS instance. The system restores full backup data and then incremental log backup data. You can select a point in time within the log backup retention period. If you want to enable the log backup feature or modify the log backup retention period, follow the instructions provided in [Back up an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#section-f33-lk4-ydb).
        
        For example, if the data backup retention period and the log backup retention period of an RDS instance are seven days, you can restore data that is generated within the last seven days. Backup sets that are generated seven days ago are not retained and cannot be used for restoration.
        
    
4.  Select the databases that you want to restore and click **OK**. You can specify the names of the restored databases based on your business requirements.
    
    **Note**
    
    -   You can select up to 50 databases at a time.
        
    -   The names of the restored databases cannot be the same as the names of the original databases. The system automatically adds \_backup to the end of the name of a restored database. You can also modify the database name.
        
    -   Make sure that the available storage of the destination instance is greater than the total storage of the selected database.
        
    
5.  After the database is restored, you can go to the **Databases** page of the destination instance to view the restored database.
    

## FAQ

-   **What do I do if the "The operation failed. The RDS instance is not in a ready state." error message is displayed when I restore a database or table of my RDS instance in the ApsaraDB RDS console?**
    
    Tasks in the ApsaraDB RDS console are executed in sequence. If an ongoing restoration task or an incomplete task exists, the error message is displayed when you execute another restoration task. In this case, wait until the ongoing restoration task or the incomplete task is complete and then execute another restoration task.
    
-   **What do I do if the restored table is empty?**
    
    Check whether the original table contains data at the point in time that you selected for the restoration. If the original table does not contain data at the point in time that you selected for the restoration, you must select a point in time at which the table contains data.
    
-   **What other methods can I use to restore individual databases and tables of an RDS instance?**
    
    You can use Data Disaster Recovery to back up and restore RDS instances and self-managed databases that reside on Elastic Compute Service (ECS) instances. You can also use Data Disaster Recovery to download backup sets from the cloud to your computer. For more information, see [Overview](/help/en/dbs/user-guide/overview-3). For more information about other data restoration methods, see [Restore data by database or table](/help/en/dbs/user-guide/db-or-table-based-restoration).
    

## Related operations

-   You can restore all data of an RDS instance. For more information, see [Restore data of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance).
    
-   You can also use pg\_restore to restore specific individual tables from logical backup files. For more information, see [Use pg\_restore to restore data from a logical backup file](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-from-a-logical-backup-file#task-2336730).
    
-   You can restore the backup data of an RDS instance to a self-managed PostgreSQL instance. For more information, see [Restore the data of an ApsaraDB RDS for PostgreSQL instance to a self-managed PostgreSQL instance by using a CSV file or an SQL file](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-postgresql-instance-by-using-a-csv-file-or-an-sql-file).
    
-   You can call API operations to perform related operations. For more information, see [DescribeLocalAvailableRecoveryTime](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describelocalavailablerecoverytime-postgresql).
