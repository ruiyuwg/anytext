If you want to replicate a database of an ApsaraDB RDS instance that runs SQL Server 2012 or later, you must execute SQL statements and specify the source and destination databases by using the sp\_rds\_copy\_database stored procedure. The time required for the replication varies based on the size of the source database.

**Note**

For more information about how to replicate a database of an RDS instance that runs SQL Server 2008 R2, see [Replicate databases of an ApsaraDB RDS instance that runs SQL Server 2008 R2](/help/en/rds/apsaradb-rds-for-sql-server/replicate-databases-of-an-apsaradb-rds-instance-that-runs-sql-server-2008-r2#concept-o5v-vlq-wdb).

## Prerequisites

-   The RDS instance runs SQL Server 2012 or later.
    
-   The available storage capacity of the destination RDS instance is at least 1.3 times larger than the size of the source database.
    

## Procedure

Execute the following statements to replicate an existing database:

```
USE master
GO
-- Query the database engine version.
SELECT @@Version
GO
-- Create a database.
CREATE DATABASE testdb
GO
-- Replicate the source database. testdb specifies the source database, and testdb_copy specifies the destination database.
EXEC sp_rds_copy_database 'testdb','testdb_copy'
-- Verify that the destination database is created.
SELECT *
FROM sys.databases
WHERE name IN ('testdb','testdb_copy')
-- Query the restoration statuses of the databases.
SELECT 
    family_guid,database_guid,* 
FROM sys.database_recovery_status
WHERE 
DB_NAME(database_id) IN ('testdb','testdb_copy')
```
