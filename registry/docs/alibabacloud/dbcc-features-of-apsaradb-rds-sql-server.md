If an ApsaraDB RDS instance runs SQL Server 2012 or later, the RDS instance supports some Database Consistency Checker (DBCC) features. You can use a privileged account to call the `sp_rds_dbcc_trace` stored procedure to enable required trace flags. This helps monitor information about deadlocks, storage usage, and cache data. You can optimize the performance and running of the RDS instance based on the information.

## Supported trace flags

1222, 1204, 1117, 1118, 1211, 1224, and 3604

**Note**

-   For more information about trace flags and usage notes, see [Microsoft documentation](https://learn.microsoft.com/en-us/sql/t-sql/database-console-commands/dbcc-traceon-trace-flags-transact-sql?view=sql-server-ver16).
    
-   You can run the `DBCC tracestatus(-1)` command to check whether a trace flag is enabled.
    

## Method to use DBCC features

The following example describes how to use a DBCC feature by using the 1222 trace flag:

```
USE master
GO
-- Query the version of the current database engine.
SELECT SERVERPROPERTY('edition')
GO
-- Create a database.
CREATE DATABASE testdb
GO
DBCC tracestatus(-1)
-- Enable the trace flag.
EXEC sp_rds_dbcc_trace 1222,1
WAITFOR DELAY '00:00:10'
DBCC tracestatus(-1)
GO
```
