You can use SQL statements or the ApsaraDB RDS console to modify the parameters of an ApsaraDB RDS for SQL Server instance. This topic describes how to use SQL statements to modify parameters.

**Note**

-   The SQL statements provided in this topic are supported for RDS instances that run SQL Server 2012 or later.
    
-   You can also modify the parameters of an RDS instance in the ApsaraDB RDS console. For more information, see [Reconfigure the parameters of an ApsaraDB RDS for SQL Server instance using the ApsaraDB RDS console](/help/en/rds/apsaradb-rds-for-sql-server/manage-instance-parameters-in-the-apsaradb-rds-console).
    

## Supported parameters

-   fill factor (%)
    
-   max worker threads
    
-   cost threshold for parallelism
    
-   max degree of parallelism
    
-   min server memory (MB)
    
-   max server memory (MB) (This parameter cannot be set for shared instances)
    
-   blocked process threshold (s)
    

## Configuration method

Use the `sp_rds_configure` stored procedure to set configuration options. If the instance must be restarted for the new settings to take effect, a message is displayed. The following example shows how to use `Microsoft SQL Server Management Studio (SSMS) 19.0` to execute commands and set instance parameters.

**Note**

Data Management (DMS) does not support data of the VARIANT type. If an error occurs when you execute specific statements in the DMS console, modify the statements based on the error description.

```
USE master
GO

-- Query the SQL Server version of the RDS instance.
SELECT SERVERPROPERTY('edition')
GO

-- Create a database named testdb.
CREATE DATABASE testdb
GO

-- Query the current value of the max degree of parallelism parameter.
SELECT * 
FROM sys.configurations
WHERE NAME = 'max degree of parallelism'

-- Set the max degree of parallelism parameter to 0.
EXEC sp_rds_configure 'max degree of parallelism',0
WAITFOR DELAY '00:00:10'

-- Query the new value of the max degree of parallelism parameter.
SELECT * 
FROM sys.configurations
WHERE NAME = 'max degree of parallelism'
```

## **Related operations**

-   You can call an operation to query the parameter settings of an instance. For more information, see [DescribeParameters](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describeparameters-sqlserver).
    
-   You can call an operation to modify the parameter settings of an instance. For more information, see [ModifyParameter](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-modifyparameter-sqlserver).
