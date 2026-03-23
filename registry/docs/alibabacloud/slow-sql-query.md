PolarDB for MySQL defines SQL statements that take more than 1 second to execute as slow SQL queries by default and provides SQL analysis features in the console. You can view slow log trends and statistics. Additionally, the system provides optimization suggestions and diagnostic analysis for relevant SQL statements to help you perform in-depth analysis and optimization.

## **Pre-check (optional)**

To ensure that you can view slow SQL logs, verify that your account has been granted the **AliyunHDMFullAccess** permission. For more granular permission management, you can [create custom policies to grant specific permissions to RAM users](/help/en/polardb/polardb-for-mysql/user-guide/authorize-ram-users-to-manage-polardb-by-using-custom-policies#a61bfe9111kxq) for flexible control of PolarDB.

## View slow SQL queries

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters**. Select the **region** where the cluster is located, and click the cluster ID to go to the cluster details page.
    
2.  In the navigation pane on the left, choose **Diagnostics and Optimization** > **Slow SQL**.
    
3.  The **Slow SQL** page includes the following three features:
    
    ## Slow log analysis
    
    On the **Slow Log Analysis** tab, specify a time range and view the **Slow Query Log Trends**, **Event Distribution**, **Slow Query Log Statistics,** and **Slow Query Log Details** within the specified time range.
    
    **Note**
    
    When you specify the time range, the end time must be later than the start time, and the interval between the start time and the end time cannot exceed 24 hours. You can query slow query logs within the previous month.
    
    -   In the **Slow Query Log Trends** section, you can click a point in time in the trend chart and view the statistics and details of the slow query logs at the point in time.
        
        **Note**
        
        If the content of an SQL statement is not completely displayed due to length limits of the GUI, you can move the pointer over the SQL statement to view the complete content.
        
    -   In the **Event Distribution** section, perform the following operation:
        
        You can query slow query log events within the specified time range. Click an event to view its details.
        
    -   Select the desired node from the **Node ID** drop-down list to view the number of slow queries on the node.
        
    -   Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5338825471/p944481.png) icon to download slow query logs to your computer.
        
    -   Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2164500571/p968949.png) to populate the selected and entered parameters to the OpenAPI console for API debugging.
        
    -   On the **Slow Query Log Statistics** tab, perform the following operations:
        
        -   Configure filter conditions in the upper part of the list. Different database engines have different filter conditions.
            
        -   Click the SQL ID that corresponds to the SQL template that you want to manage, to view the user distribution, client distribution, and metric trend correlation and detailed list.
            
        -   Click **Optimize** in the **Actions** column corresponding to the SQL template. In the **SQL Diagnostic Optimization** dialog box, view the SQL diagnosis results.
            
            If you accept the SQL optimization suggestions, click **Copy** in the upper-right corner and paste the optimized SQL statements to the database client or Data Management (DMS) for execution. If you do not accept the SQL optimization suggestions, click **Cancel**.
            
            **Note**
            
            DAS performs SQL diagnostics based on the complexity of SQL statements, the amount of data in the table, and the database load. Suggestions may be returned in more than 20 seconds after the SQL diagnostics is performed. After the diagnostics is complete, the SQL diagnostic engine provides diagnostic results, optimization suggestions, and expected optimization benefits. You can determine whether to accept the suggestions based on the diagnostic results.
            
        -   Find the SQL template that you want to manage and click **Throttling** in the **Actions** column. In the **SQL Throttling** dialog box, configure the parameters. For more information, see [SQL throttling](/help/en/das/user-guide/sql-throttling#multiTask1173).
            
        -   For a PolarDB for MySQL cluster, find the SQL template that you want to manage and click **IMCI** in the **Actions** column to view the documentation of the In-Memory Column Index (IMCI) feature.
            
            **Note**
            
            -   The **IMCI** button is displayed in the Actions column if no IMCI nodes are purchased for the PolarDB for MySQL cluster, the maximum execution duration of the SQL template exceeds 20 seconds, and the maximum number of scanned rows of the SQL template exceeds 200,000.
                
            -   We recommend that you use the IMCI feature to improve query performance when you require complex queries on a large amount of data.
                
            
    -   On the **Slow Query Log Details** tab, find the SQL statement that you want to manage and click **Optimize** or **Throttling** in the **Actions** column. This way, you can also perform SQL diagnostics or SQL throttling.
        
    
    ## Automatic SQL optimization suggestions
    
    On the **Automatic SQL Optimization Suggestions** page, select the time period you want to view.
    
    **Enable Automatic SQL Optimization**: This feature automatically identifies problematic SQL statements, generates index optimization suggestions, and automatically creates indexes without causing table locks.
    
    **Note**
    
    For more information based on your business needs, see [Automatic SQL optimization](/help/en/das/user-guide/automatic-sql-optimization).
    
    ## Query governance
    
    On the **Query Governance** page, view the query governance results.
    
    -   **Query Governance Results Overview**: View the result data after system tagging and categorization.
        
        **Note**
        
        **Failed SQL Executions** counts only the failed SQL executions for instances with DAS Enterprise Edition enabled.
        
    -   **Query Governance Trends**: View the trend of query governance results within the selected time range.
        
    -   **Top Rankings**: View **Best-performing Instances** and **Worst-performing Instances**.
        
        -   Worst-performing Instances: shows the number of executions of SQL statements that cause slow queries on the RDS instance.
            
        -   Best-performing Instances: shows the change in the number of executions of SQL statements that cause slow queries on the RDS instance. A negative value indicates the decrease in the number of executions of the SQL statements (good optimization effect). A positive value indicates the increase in the number of executions of the SQL statements.
            
        
        DAS recommends that you focus on the best and worst-performing instances for **Optimizable SQL**.
        
    -   **SQL to Be Optimized**: You can set filter conditions to filter out SQL statements that need governance.
        
        **Note**
        
        You can filter by database name, SQL keyword, rule tag, and database username. The logical relationship between these four filters is "AND".
        
        -   Separate multiple database names with commas (,). The database names are evaluated using the OR operator.
            
        -   Separate multiple SQL keywords with spaces. The SQL keywords are evaluated using the AND operator.
            
        -   Separate multiple database usernames with commas (,). The usernames are evaluated using the OR operator.
            
        -   You can select multiple rule tags. The selected rules are evaluated using the OR operator.
            
        
        -   Click **Suggestions** in the **Actions** column of the target SQL sample to view detailed governance suggestions.
            
        -   Click **Add Tag** in the **Actions** column of the target SQL sample to manually tag this SQL. For the specific meaning of tags, see [SQL tags that can be manually added.](/help/en/das/user-guide/query-governance-2#table-lu4-h76-x73)
            
            You can also select SQL samples to which you want to batch add tags.
            
        -   Click **Sample** in the **Actions** column of the target SQL sample to view the slow log sample details of this SQL.
            
        -   Click **Trend** in the **Actions** column of the target SQL sample to view the slow log analysis details of this SQL. For detailed slow log analysis introduction and operations, see [Slow query logs](/help/en/das/user-guide/slow-query-logs-5#task-2093585).
            
        
        You can export and share SQL statements that require optimization as needed. For more information, see [Slow query logs](/help/en/das/user-guide/slow-query-logs-5#task-2093585).
        
    -   **Failed SQL**: You can set filter conditions to filter out SQL statements you want to view.
        
        **Note**
        
        -   **Failed SQL** counts only the failed SQL executions of instances for which DAS Enterprise Edition is enabled.
            
        -   You can filter by database name and SQL keyword. The filter conditions are evaluated using the AND operator.
            
            -   Separate multiple database names with commas (,). The database names are evaluated using the OR operator.
                
            -   Separate multiple SQL keywords with spaces. The SQL keywords are evaluated using the AND operator.
                
        
        Click **Sample** in the **Actions** column of the target SQL sample to view the sample details of this SQL.
        
    

## **Adjust the slow SQL threshold**

You can go to the **Settings and Management** > **Parameters** page in the [**PolarDB console**](https://polardb.console.alibabacloud.com/) to [set the long\_query\_time parameter](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters) to adjust the threshold for defining slow SQL queries.

**Parameter**

**Description**

long\_query\_time

Records all queries that exceed the parameter value to the slow query log.

Value range: 0.03-31536000, default value: 1, unit: seconds.

## FAQ

**Why is the execution completion time of SQL statements recorded in slow query logs different from the actual execution time of the SQL statements?**

This issue usually occurs when the time zones are modified by executed SQL statements. The execution completion time of an SQL statement varies with the time zone recorded in slow query logs at the following levels: session level, database level, and system level. If a time zone is specified for the database, the execution completion time of an SQL statement is recorded based on the time zone of the database. Otherwise, the execution completion time of an SQL statement is recorded based on the time zone of the system. If an SQL statement modifies the time zone at the session level, the time zone recorded in slow query logs may not be properly converted.

**How do I find slow SQL queries?**

You can find slow SQL queries using one of the following methods:

-   View slow SQL queries directly in the console. For more information, see [Slow SQL queries](#).
    
-   Connect to the database cluster and execute `show processlist` to find SQL statements that take a long time to execute. For information about how to connect to a database cluster, see [Database connection](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-polardb/#task-1580301).
    

## **Best practices**

[High CPU utilization of PolarDB for MySQL clusters](/help/en/polardb/polardb-for-mysql/high-cpu-utilization-of-polardb-for-mysql-clusters)

## Related API operations

**API**

**Description**

[DescribeSlowLogs](/help/en/polardb/api-polardb-2017-08-01-describeslowlogs)

Queries the statistics about the slow query logs of a PolarDB for MySQL cluster.

[DescribeSlowLogRecords](/help/en/polardb/api-polardb-2017-08-01-describeslowlogrecords)

Queries the details of slow query logs of a PolarDB for MySQL cluster.

[DescribeDBClusterAuditLogCollector](/help/en/polardb/api-polardb-2017-08-01-describedbclusterauditlogcollector)

Queries whether SQL data collector is enabled for a PolarDB for MySQL cluster. The features of SQL data collector include audit logs and SQL Explorer.

[ModifyDBClusterAuditLogCollector](/help/en/polardb/api-polardb-2017-08-01-modifydbclusterauditlogcollector)

Enables or disables SQL data collector for a PolarDB for MySQL cluster. The features of the SQL data collector include audit logs and SQL Explorer.
