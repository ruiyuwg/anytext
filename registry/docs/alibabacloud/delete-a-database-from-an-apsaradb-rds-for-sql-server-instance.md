This topic describes how to delete a database from an ApsaraDB RDS for SQL Server instance. You can use the ApsaraDB RDS console or an SQL statement to delete the database.

## **Usage notes**

-   If the `state_desc` value of the database in the `sys.databases` table is `OFFLINE`, the database is in the `OFFLINE` state and you cannot directly delete the database. In this case, you must call the `EXEC sp_rds_set_db_online 'Database name'` stored procedure to change the status of the database to ONLINE and then delete the database. For more information, see [Stored procedures](/help/en/rds/apsaradb-rds-for-sql-server/operations-related-to-a-stored-procedure).
    
    You can execute the `SELECT name, state_desc FROM sys.databases WHERE name = 'Database name';` statement to query the status of the database.
    

## Use the ApsaraDB RDS console to delete a database

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Databases**.
    
3.  Find the database you want to delete and click **Delete** in the **Actions** column.
    
4.  In the message that appears, click **OK**.
    

## Use an SQL statement to delete a database

1.  Connect to the RDS instance to which the database belongs. For more information, see [Connect to an ApsaraDB RDS for SQL Server instance](/help/en/rds/connect-to-sql-server-instance#concept-y5f-rj1-wdb).
    
2.  Execute the following statement to delete the database:
    
    ```
    DROP DATABASE [database_name];
    ```
    
    Example:
    
    ```
    DROP DATABASE [db_test];
    ```
    
    **Note**
    
    If your RDS instance runs SQL Server 2012 or later on **RDS High-availability Edition** and an error is reported after you execute the preceding DROP statement, you can use the following stored procedure to delete the database from the RDS instance. The stored procedure not only deletes the specified database but also removes associated images and closes connections to the database.
    
    ```
    EXEC sp_rds_drop_database 'database name'
    ```
    

## Related operations

**Operation**

**Description**

[DeleteDatabase](/help/en/rds/api-delete-database#doc-api-Rds-DeleteDatabase)

Deletes a database.
