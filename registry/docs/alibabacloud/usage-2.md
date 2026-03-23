PolarDB for MySQL provides the SQL Trace feature to track the execution information of SQL statements, such as the execution plan and execution statistics (including the number of scanned rows and execution time). This feature can help you detect database performance changes caused by changes in the execution plans of SQL statements and collect statistics on top SQL statements that occupy memory in the current cluster.

## **Prerequisites**

Your PolarDB cluster uses one of the following versions:

-   PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.30 or later.
    
-   PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.12 or later.
    

For information about how to view the version of your cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## **Limits**

The SQL Trace feature does not track operations that are related to accounts, such as **CREATE USER**, **DROP USER** and **GRANT**.

## **Parameters**

**Parameter**

**Description**

loose\_sql\_trace\_type

The type of the trace tasks that you want to use the SQL Trace feature to track. Valid values:

-   **OFF** (default): No SQL statements are tracked.
    
-   **DEMAND**: Specified SQL statements are tracked.
    
-   **ALL**: All SQL statements are tracked.
    
-   **SLOW\_QUERY**: Slow queries are tracked.
    

**Note**

**SLOW\_QUERY** is supported only for clusters that run PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.34 or later.

loose\_sql\_sharing\_size

The maximum memory size for SQL Sharing (a base component in SQL Trace).

Valid values: 8388608 to 1073741824. Unit: bytes. Default value: 134217728.

loose\_sql\_trace\_plan\_expire\_time

The expiration time of the execution plan that is traced by the SQL Trace feature. If an SQL statement that is being executed generates an execution plan, but subsequent SQL statements are not executed based on the execution plan within the specified period of time, the execution plan is considered expired and is eliminated.

Valid values: 0 to 18446744073709551615. Unit: seconds. Default value: 604800.

## **Usage**

-   Add SQL statements to be tracked.
    
    You can use one of the following methods to add SQL statements that need to be tracked and use the SQL Trace feature to track the execution of the SQL statements:
    
    -   Set the `loose_sql_trace_type` parameter to **ALL** to track all SQL statements.
        
    -   Set the `loose_sql_trace_type` parameter to **DEMAND** and add the SQL statements to be traced by using the [dbms\_sql.add\_trace](/help/en/polardb/polardb-for-mysql/user-guide/dbms-sql-add-trace) stored procedure.
        
-   Obtain information about SQL statements that are traced by the SQL Trace feature.
    
    You can access [information\_schema.sql\_sharing](/help/en/polardb/polardb-for-mysql/user-guide/schema#467571b46a0e8) tables to view the execution information of SQL statements and top SQL statements that are tracked by the SQL Trace feature. Sample syntax:
    
    -   Obtain the execution information and execution plan of a specified SQL statement.
        
        ```
        SELECT * FROM information_schema.sql_sharing WHERE sql_id = polar_sql_id('select * from t');
        ```
        
    -   Obtain the top 10 SQL statements in terms of the total execution time, average execution time, and total number of scanned rows.
        
        ```
        SELECT * FROM information_schema.sql_sharing WHERE TYPE='sql' ORDER BY SUM_EXEC_TIME DESC LIMIT 10;
        SELECT * FROM information_schema.sql_sharing WHERE TYPE='sql' ORDER BY SUM_EXEC_TIME/EXECUTIONS DESC LIMIT 10;
        SELECT * FROM information_schema.sql_sharing WHERE TYPE='sql' ORDER BY SUM_ROWS_EXAMINED DESC LIMIT 10;
        ```
        

### **Other operations**

-   If you no longer need to track SQL statements that are added by using the [dbms\_sql.add\_trace](/help/en/polardb/polardb-for-mysql/user-guide/dbms-sql-add-trace) stored procedure, you can use the [dbms\_sql.delete\_trace](/help/en/polardb/polardb-for-mysql/user-guide/dbms-sql-delete-trace) stored procedure to delete templated SQL statements based on specific SQL statements, or use the [dbms\_sql.delete\_trace\_by\_sqlid](/help/en/polardb/polardb-for-mysql/user-guide/dbms-sql-delete-trace-by-sqlid) stored procedure to delete templated SQL statements based on SQL IDs.
    
-   You can reset all statistics in the [information\_schema.sql\_sharing](/help/en/polardb/polardb-for-mysql/user-guide/schema#467571b46a0e8) table by using the [dbms\_sql.reset\_trace\_stats](/help/en/polardb/polardb-for-mysql/user-guide/dbms-sql-reset-trace-stats) stored procedure.
    
-   You can clear all statistics in the [information\_schema.sql\_sharing](/help/en/polardb/polardb-for-mysql/user-guide/schema#467571b46a0e8) table by using the [dbms\_sql.flush\_trace](/help/en/polardb/polardb-for-mysql/user-guide/dbms-sql-flush-trace) stored procedure. After all statistics in the table are cleared, you can use the [dbms\_sql.reload\_trace](/help/en/polardb/polardb-for-mysql/user-guide/dbms-sql-reload-trace) stored procedure to reload templated SQL statements from the [mysql.sql\_sharing](/help/en/polardb/polardb-for-mysql/user-guide/schema#467571716a0ub) table to the [information\_schema.sql\_sharing](/help/en/polardb/polardb-for-mysql/user-guide/schema#467571b46a0e8) table if you want to re-collect statistics on the execution of SQL statements that are added by using the [dbms\_sql.add\_trace](/help/en/polardb/polardb-for-mysql/user-guide/dbms-sql-add-trace) stored procedure.
    

## **Performance test**

The SQL Trace feature uses many lock-free designs to ensure database performance in various scenarios where high concurrency and a large number of SQL templates are required.

The following test compares the performance of database in clusters when the `sql_trace_type` parameter is set to **OFF** and **ALL** in the same scenario.

In the Sysbench test, 2,000 tables are used. Each table contains 10,000 rows of data. A cluster of 4 cores and 8 GB of memory and a cluster of 8 cores and 32 GB of memory are used for testing.

-   The following figures show the performance comparison for the cluster of 4 cores and 8 GB of memory in different scenarios.
    
    -   db-ps-mode=disable oltp\_read\_only![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9046761761/p523053.png)
        
    -   db-ps-mode=auto oltp\_read\_write![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8046761761/p523056.png)
        
-   The following figures show the performance comparison for the cluster of 8 cores and 32 GB of memory in different scenarios.
    
    -   db-ps-mode=disable oltp\_read\_only![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8046761761/p523062.png)
        
    -   db-ps-mode=auto oltp\_read\_write![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8046761761/p523044.png)
        

**Conclusions**

The preceding test data indicates that the SQL Trace feature degrades the database performance by less than 3% in the oltp\_read\_only and oltp\_read\_write scenarios.
