Slow SQL queries greatly affect the stability of your ApsaraDB RDS for SQL Server instance. If issues such as high load and performance jitters occur on your RDS instance, the administrator or developer personnel first checks whether slow SQL queries are being run. Database Autonomy Service (DAS) provides the slow query log analysis feature. The feature collects statistics on and analyzes the slow SQL queries that are run in your RDS instance, and locates performance issues and provides solutions to the issues. This helps improve system stability and reliability.

## Prerequisites

-   The RDS instance is equipped with cloud disks.
    
-   The RDS instance does not run SQL Server 2008 R2 with cloud disks.
    

## Background information

You can analyze **slow SQL statements** to troubleshoot the performance issues of an RDS instance. This method is common and effective. SQL statements that consume a large number of CPU resources or I/O resources, require a long period of time to execute, or affect a large number of rows may be considered slow SQL statements. The autonomy service feature for your RDS instance records and analyzes these SQL statements and displays the statistics and details about the slow SQL statements on the Slow Query Logs page. The analysis results can be used to identify the SQL statements that affect the performance of the RDS instance. The analysis results also help simplify the performance optimization process.

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
2.  In the left-side navigation pane, choose **Autonomy Services** > **Slow Query Logs**.
    
3.  On the **Slow Query Logs** page, select a time range to view the **Slow Log Trend**, **Slow Log Statistics**, and **Slow Log Details** within the time range.
    
    **Note**
    
    When you specify the time range, the end time must be later than the start time, and the interval between the start time and the end time cannot exceed 24 hours. You can query slow query logs within the previous month.
    
    -   You can click a time point in the trend chart and view the statistics and details of the slow queries at the time point.
        
        **Note**
        
        If the content of an SQL statement is not completely displayed due to length limits, you can move the pointer over the SQL statement and view the complete content.
        
    -   Click **Export Slow Log** to download slow query logs to your computer.
        
    -   On the **Slow Log Statistics** tab, you can perform the following operations:
        
        -   Click **Sample** in the **Actions** column of the SQL template that you want to manage to view the details of the slow query log.
            
        -   Find the SQL template that you want to manage and click **Optimize** in the **Actions** column. In the **SQL Diagnostic Optimization** dialog box, view the SQL diagnostic results.
            
            If you accept the SQL optimization suggestions, click **Copy** in the upper-right corner and paste the optimized SQL statements to the database client or Data Management (DMS) for execution. If you do not accept the SQL optimization suggestions, click **Cancel**.
            
            **Note**
            
            DAS performs SQL diagnostics based on the level of complexity of SQL statements, the amount of data in the table, and the database load. Suggestions may be returned in more than 20 seconds after the SQL diagnostics is performed. After the diagnostics is complete, the SQL diagnostics engine provides diagnostics results, optimization suggestions, and expected optimization benefits. You can determine whether to accept the suggestions based on the diagnostics results.
            
            You can also click **Database Expert Service** to purchase the expert service. Database Expert Service provides value-added professional database services, such as emergency solutions, health diagnostics, performance optimization, security assurance, and data migration.
            
    -   On the **Slow Log Details** tab, find the SQL template that you want to manage and click **Optimize** in the **Actions** column. You can also perform SQL diagnostic optimization on the SQL template.
        
    

## References

-   [View the deadlock statistics of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/deadlock#task-2070219)
    
-   [View the blocking statistics of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/view-the-blocking-statistics-of-an-apsaradb-rds-for-sql-server-instance#task-2069961)
