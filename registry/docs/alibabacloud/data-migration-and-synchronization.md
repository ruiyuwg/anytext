ApsaraDB RDS for SQL Server provides various data migration methods to meet different business requirements for cloud deployment or cloud migration. These methods help you smoothly migrate data between SQL Server databases deployed in different environments and ApsaraDB RDS for SQL Server instances without affecting your business. The SQL Server databases deployed in different environments include self-managed SQL Server databases running on Elastic Compute Service (ECS) instances, on-premises self-managed SQL Server databases, SQL Server databases on Microsoft Azure, and databases on Amazon RDS for SQL Server instances.

## **Scenario 1: Migrate data between ApsaraDB RDS instances**

-   [Restore ApsaraDB RDS for SQL Server backup to a new instance or an existing instance](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance)
    
-   [Migrate data between ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-between-apsaradb-rds-for-sql-server-instances)
    
-   [Migrate data between ApsaraDB RDS instances of different Alibaba Cloud accounts](/help/en/dts/user-guide/migrate-data-between-apsaradb-rds-instances-of-different-alibaba-cloud-accounts)
    

## **Scenario 2: Migrate data from a self-managed SQL Server database to an ApsaraDB RDS for SQL Server instance**

-   [Migrate full backup data to the cloud](/help/en/rds/apsaradb-rds-for-sql-server/migrate-the-full-backup-data-of-a-self-managed-sql-server-instance-to-an-apsaradb-rds-for-sql-server-instance) (This is a **database-level** data migration method.)
    
-   [Migrate incremental backup data to the cloud](/help/en/rds/apsaradb-rds-for-sql-server/migrate-the-incremental-backup-data-of-a-self-managed-sql-server-instance-to-an-apsaradb-rds-for-sql-server-instance) (This is a **database-level** data migration method.)
    
-   [Migrate data from a self-managed SQL Server instance to an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-self-managed-sql-server-instance-to-an-apsaradb-rds-for-sql-server-instance) (This is an **instance-level** data migration method.)
    
-   [Migrate data from a self-managed SQL Server database to an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-self-managed-sql-server-database-to-an-apsaradb-rds-for-sql-server-instance) (Uses JDBC logical protocol to obtain SQL statements and write them to the destination)
    
-   [Migrate data from a self-managed SQL Server database to an ApsaraDB RDS for SQL Server instance by using a physical gateway](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-self-managed-sql-server-database-to-an-apsaradb-rds-for-sql-server-instance-by-using-a-physical-gateway) (Uses native database physical backup protocol to write data blocks to the destination)
    
-   [Use SSMS to migrate data to an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/use-ssms-to-migrate-data-to-an-rds-for-sql-server-instance)
    
-   [Use BCP commands/JDBC SQLBulkCopy/ADO.NET SQLBulkCopy to import data to an ApsaraDB RDS for SQL Server instance in batch](/help/en/rds/apsaradb-rds-for-sql-server/how-to-import-multiple-data-entries-to-apsaradb-for-rds-sql-server)
    
-   [Use the data import feature of DMS to import data in batch](/help/en/dms/import-data) (Only data in the SQL, CSV, and Excel format is supported.)
    

## **Scenario 3:** **Migrate data from an SQL Server database on a third-party cloud to an ApsaraDB RDS for SQL Server instance**

-   [Migrate data from an SQL Server database on Microsoft Azure to an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-sql-server-database-on-microsoft-azure-to-apsaradb-rds-for-sql-server)
    
-   [Migrate data from an Amazon RDS for SQL Server instance to an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-a-sql-server-database-on-aws-to-apsaradb-rds-for-sql-server)
    

## **Scenario 4: Migrate data from an SQL Server database on other Alibaba Cloud services to an ApsaraDB RDS for SQL Server instance**

[Migrate data from an ApsaraDB MyBase for SQL Server instance to an ApsaraDB RDS for SQL Server instance](/help/en/dts/user-guide/migrate-mybase-sql-server-to-rds-sql-server)

## **Scenario 5: Migrate data from an ApsaraDB RDS for SQL Server instance to an on-premises SQL Server database**

[Migrate the data of an ApsaraDB RDS for SQL Server instance to a self-managed SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-an-apsaradb-rds-for-sql-server-instancce-to-a-local-sql-server-database)
