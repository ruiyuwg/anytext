This topic describes the data restoration methods that are supported by ApsaraDB RDS for SQL Server.

## **Scenario 1: Restore data in the cloud**

**Method**

**Related operation**

Restore data to an existing RDS instance

[Restore the data of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance#concept-o52-hlx-52b).

**Note**

To restore a single database to an existing RDS instance, we recommend that you manually back up the database by following the instructions in [Configure manual backups](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#section-yvd-yk4-ydb). Then, you can use the manual backup file as the reference point for data restoration. This method helps flexibly roll back data in scenarios such as application version upgrades or releases.

Restore data to a new RDS instance (previously known as a cloned RDS instance)

Restore data from a temporary RDS instance to the original RDS instance (**This method is suitable only for RDS instances that run SQL Server 2008 R2 and use Premium Local SSDs.**)

-   [Log on to a temporary RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/log-on-to-a-temporary-apsaradb-rds-for-sql-server-instance#concept-r1r-yp2-s2b).
    
-   [Restore the data of an ApsaraDB RDS for SQL Server instance by using a temporary RDS instance](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance-by-using-a-temporary-rds-instance#concept-en3-pfn-ydb).
    

Restore data across regions

[Restore the data of an ApsaraDB RDS for SQL Server instance across regions](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance-across-regions#concept-405831).

Restore data to a self-managed database from backup files

Download backup files by following the instructions in [Download data backup files and log backup files](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance#concept-yjb-pn4-ydb). Then, restore data to the self-managed database from the backup files.

## **Scenario 2: Migrate local data to the cloud**

For more information, see [Overview of data migration methods](/help/en/rds/overview-of-data-migration-methods) and [Migrate SQL Server databases to ApsaraDB RDS for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/migrate-sql-server-databases-to-alibaba-cloud).

**Data source**

**Support for incremental migration**

**Supported solution**

**Recommended solution**

Self-managed SQL Server database

Yes

-   Use OSS to manually migrate data to the cloud based on physical backup files
    
-   Use Data Disaster Recovery and DTS to migrate data to the cloud based on physical backup files
    
-   Use DTS to perform logical cloud migration
    

[Use Data Disaster Recovery and DTS to migrate data to the cloud based on physical backup files](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-self-managed-sql-server-database-to-an-apsaradb-rds-for-sql-server-instance-by-using-a-physical-gateway)

Azure SQL Database

Yes

-   Use DTS to perform logical cloud migration
    
    **Note**
    
    If you want to migrate incremental data, you must set the SQL Server Incremental Synchronization Mode parameter to **Polling and querying CDC instances for incremental synchronization**.
    
-   Use the ApsaraDB RDS console to perform end-to-end cloud migration
    
-   Use SSMS to perform cloud migration
    

[Use the ApsaraDB RDS console to perform end-to-end cloud migration or use DTS to perform logical cloud migration](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-sql-server-database-on-aws-to-apsaradb-rds-for-sql-server)

Azure SQL Managed Instance

SQL Server on Azure Virtual Machines

-   Use DTS to perform logical cloud migration
    
    **Note**
    
    If you want to migrate incremental data, you must set the SQL Server Incremental Synchronization Mode parameter to **Polling and querying CDC instances for incremental synchronization**.
    
-   Use the ApsaraDB RDS console to perform end-to-end cloud migration
    
-   Use SSMS to perform cloud migration
    
-   Use OSS to manually migrate data to the cloud based on physical backup files
    

Amazon RDS for SQL Server

Yes

-   Use DTS to perform logical cloud migration
    
    **Note**
    
    If you want to migrate incremental data, you must set the SQL Server Incremental Synchronization Mode parameter to **Polling and querying CDC instances for incremental synchronization**.
    
-   Use the ApsaraDB RDS console to perform end-to-end cloud migration
    
-   Use SSMS to perform cloud migration
    
-   Use OSS to manually migrate data to the cloud based on physical backup files
    

[Use the ApsaraDB RDS console to perform end-to-end cloud migration or use DTS to perform logical cloud migration](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-sql-server-database-on-aws-to-apsaradb-rds-for-sql-server)

Huawei Cloud RDS for SQL Server

No

-   Use SSMS to perform cloud migration
    
-   Use DTS to perform logical cloud migration for full data migration
    
-   Use OSS to manually migrate full data to the cloud based on physical backup files
    

[Use OSS to manually migrate full data to the cloud based on physical backup files](/help/en/rds/apsaradb-rds-for-sql-server/migrate-the-full-backup-data-of-a-self-managed-sql-server-instance-to-an-apsaradb-rds-for-sql-server-instance)

**Note**

-   If the source database runs SQL Server 2008 R2, we recommend that you upgrade the database version before you perform the operation.
    
-   For information about how to manually create and download backup files in Huawei Cloud RDS for SQL Server, see the Huawei Cloud official documentation.
    

TencentDB for SQL Server database

Yes

-   Use DTS to perform logical cloud migration
    
-   Use OSS to manually migrate data to the cloud based on physical backup files
    
-   Use SSMS to perform cloud migration
    

[Use DTS to perform logical cloud migration](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-self-managed-sql-server-database-to-an-apsaradb-rds-for-sql-server-instance)

No

Use SSMS to perform cloud migration

Google Cloud SQL for SQL Server

Yes

-   Use SSMS to perform cloud migration
    
-   Use DTS to perform logical cloud migration
    
    **Note**
    
    If you want to migrate incremental data, you must set the SQL Server Incremental Synchronization Mode parameter to **Polling and querying CDC instances for incremental synchronization**.
    

[Use DTS to perform logical cloud migration](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-self-managed-sql-server-database-to-an-apsaradb-rds-for-sql-server-instance)
